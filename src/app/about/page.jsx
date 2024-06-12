import React from 'react';
import { Headland_One } from 'next/font/google';

const headland = Headland_One({ weight: ["400",], subsets: ["latin"] });

export const metadata = {
    title: "About",
    description: "About Page",
    keywords: ["about", "about page"]
};

const AboutPage = () => {
    return (
        <div className={`${headland.className} px-12 py-24`}>
            <p className='text-3xl'>About Page</p>
        </div>
    );
};

export default AboutPage;