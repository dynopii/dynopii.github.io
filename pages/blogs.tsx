import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/layout/Footer";
import Head from "next/head";
import { BlogCard } from "../components/screens/blogs/BlogCard";
import { Button } from "../components/layout/Button";
import axios from "axios";
import { urls } from "../shared/urls";
import { Ghost_Blogs_Post } from "../shared/types";
import { Loader } from "../components/SVGs";
import { blogsContent } from "../shared/contents";

interface Props {}

const Blogs: React.FC<Props> = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [blogs, setBlogs] = useState<Ghost_Blogs_Post[] | []>([]);
  const [moreThanThreeBlogs, setMoreThanThreeBlogs] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const data: any = await axios({
          url: urls.GHOST_BLOGS_API,
          method: "GET",
        });
        const blogs: Ghost_Blogs_Post[] = data.data.posts;
        const filteredBlogs = blogs.slice(0, 3);
        blogs?.length > 3 && setMoreThanThreeBlogs(true);
        setBlogs(filteredBlogs);
      } catch (e) {
        setError("Something went wrong, please try again later!");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className="main_layout">
      <Head>
        <title>Blogs | Dynopii | Redefining the way you communicate.</title>
      </Head>
      <Header />
      <section className="blog-section-bg min-h-screen">
        <div className="mx-auto xl:px-30" style={{ maxWidth: "1200px" }}>
          <h1 className="text-h3 font-semibold text-white mx-auto md:text-center pt-140 mb-180 lg:mb-0 lg:py-90 md:py-80">
            {blogsContent.title}
          </h1>
          <div className="flex xl:flex-col items-center justify-between md:justify-center">
            {loading ? (
              <div className="w-full flex items-center justify-center">
                <Loader />
              </div>
            ) : error ? (
              <div>
                <h3 className="text-h4 text-gray-f2f font-medium">{error}</h3>
              </div>
            ) : !blogs.length ? (
              <div>
                <h3 className="text-h3 text-gray-f2f font-medium">No Blogs Available!</h3>
              </div>
            ) : (
              blogs.map((blog: Ghost_Blogs_Post) => (
                <>
                  <BlogCard key={blog.id} {...blog} />
                </>
              ))
            )}
          </div>
          <div className="flex items-center mt-40 justify-center mb-70">
            {moreThanThreeBlogs && (
              <a href={urls.GHOST_BLOGS} target="_blank" rel="noreferrer">
                <Button title="Read more" />
              </a>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blogs;
