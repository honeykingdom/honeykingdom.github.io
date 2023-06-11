'use client';

import dynamic from 'next/dynamic';

const DynamicHome = dynamic(() => import('../Home'), { ssr: false });

const Home = () => <DynamicHome />;

export default Home;
