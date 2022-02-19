import React from "react";
import Head from "next/head";
import { Button } from "../components/layout/Button";
import Link from "next/link";

interface Props {}

const PageNotFound: React.FC<Props> = () => {
  return (
    <div className="main_layout">
      <Head>
        <title>404 Page Not Found | Dynopii | Redefining the way you communicate.</title>
      </Head>
      {/* <Header /> */}
      <section
        className="products-section-bg min-h-screen"
        style={{
          // backgroundImage:
          // "url(https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
          backgroundPosition: "cover",
          backgroundSize: "cover",
        }}
      >
        <div className="mx-auto px-30 flex flex-col justify-center" style={{ maxWidth: "1200px", height: "90vh" }}>
          {/* <p className="text-gray-f2f font-semibold text-h3 mb-10 uppercase">What if i told you</p>
          <p className="text-gray-f2f font-semibold text-h3 mb-40 uppercase">this page doesn't exist</p>
          <p className="text-gray-f2f font-semibold text-h3 mb-40 uppercase">Maybe you were looking for </p>
          <Link href="/">
            <a>
              <Button uiType="outlined" title="Go back home"></Button>
            </a>
          </Link> */}

          <p className="text-body-sm uppercase text-brand tracking-wider">404 error</p>
          <h3 className="text-gray-bdb uppercase text-h3">Page not found</h3>
          <p className="text-gray-999 font-thin text-body-lg mb-40">
            Sorry, we couldn't find the page you're looking for.
          </p>
          <Link href="/">
            <a>
              <Button title="Go to home" />
            </a>
          </Link>
        </div>
      </section>
      {/* <Footer /> */}
    </div>
  );
};

export default PageNotFound;
