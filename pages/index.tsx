import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Header } from '../components/Header';
import { Main } from '../components/Main';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
	return (
		<div className="main_layout">
			<Header />
			<Main />
			<footer></footer>
		</div>
	);
};

export default Home;
