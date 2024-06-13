import React from 'react';
import { Headland_One } from 'next/font/google';

const headland = Headland_One({ weight: ["400",], subsets: ["latin"] });

const getTime = async () => {
    const res = await fetch(`http://localhost:3000/time`, { next: { revalidate: 5 } })
    const data = await res.json();
    return data.currentTime;
};

export const metadata = {
    title: "About",
    description: "About Page",
    keywords: ["about", "about page"]
};

const AboutPage = () => {
    const currentTime = getTime();
    return (
        <div className={`${headland.className} px-12 py-24`}>
            <p className='text-3xl'>About Page</p>
            <p>Current Time : {currentTime}</p>
        </div>
    );
};

export default AboutPage;