import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../components/Header";
import Main2, { Main } from "../components/Main";
import { Footer } from "../components/layout/Footer";
import { Testimonials } from "../components/screens/landing/Testimonials";
import { OurPartners } from "../components/screens/landing/OurPartners";
import { OurProducts } from "../components/screens/landing/OurProducts";
import { OurSolutionsBacked } from "../components/screens/landing/OurSolutionsBacked";
import { OurCustomers } from "../components/screens/landing/OurCustomers";
import { Newsletter } from "../components/screens/landing/Newsletter";
const Home: NextPage = () => {
  return (
    <div className="main_layout">
      <Head>
        <title>Dynopii | Redefining the way you communicate.</title>
      </Head>
      <Header />
      {/* <Main /> */}
      <Main2 />
      <section className="mx-auto p-30" style={{ maxWidth: "1200px" }}>
        <OurPartners />
        <OurProducts />
        <OurSolutionsBacked />
        <OurCustomers />
      </section>
      <Testimonials />
      <section className="mx-auto p-30" style={{ maxWidth: "1200px" }}>
        <Newsletter />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
