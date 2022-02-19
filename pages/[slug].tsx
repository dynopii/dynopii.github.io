import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import dynamic from "next/dynamic";
import Head from "next/head";
import path from "path";
import { Header } from "../components/Header";
import { Footer } from "../components/layout/Footer";
import { markdownFilePaths, MARKDOWN_PATH } from "../shared/mdxUtils";

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  // a: CustomLink,
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  TestComponent: dynamic(() => import("../components/TestComponent")),
  Head,
};

export default function MarkdownPage({ source, frontMatter }: any) {
  return (
    <>
      <Head>
        <title>{frontMatter.title} | Dynopii | Redefining the way you communicate.</title>
      </Head>
      <Header />
      <div
        className="text-white"
        style={{
          backgroundImage: `url(${frontMatter.coverImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
          backgroundSize: "100%",
        }}
      >
        <div
          className="post-header mx-auto p-30 mb-70"
          style={{
            maxWidth: "1200px",
          }}
        >
          <h1 className="mx-auto pt-140 sm:pt-90 text-white font-semibold text-h3 mb-30">{frontMatter.title}</h1>
          <h6 className="text-h6 font-normal text-gray-f2f mb-25 w-7/12 lg:w-9/12 sm:w-10/12 opacity-80">
            {frontMatter.description}
          </h6>
        </div>
        <main className="resetcss mx-auto p-30" style={{ maxWidth: "1200px" }}>
          <div className="w-10/12 sm:w-11/12 text-justify">
            <MDXRemote {...source} components={components} />
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

export const getStaticProps = async ({ params }: any) => {
  const postFilePath = path.join(MARKDOWN_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = markdownFilePaths
    // Remove file extensions for page paths
    .map((pathString) => pathString.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
