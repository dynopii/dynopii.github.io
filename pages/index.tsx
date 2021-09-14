import type { NextPage } from 'next';
import Head from 'next/head';
import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { Footer } from '../components/layout/Footer';
import { Testimonials } from '../components/screens/landing/Testimonials';
const Home: NextPage = () => {
	return (
		<div className="main_layout">
			<Head>
				<title>Dynopii | Redefining the way you communicate.</title>
			</Head>
			<Header />
			<Main />
			<Testimonials />
			<Footer />
		</div>
	);
};

export default Home;
