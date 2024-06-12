'use client'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathName = usePathname();
    const router = useRouter();
    const navLinks = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "Post",
            path: "/posts"
        },
        {
            title: "Meals",
            path: "/meals"
        },
    ];
    const handler = () => {
        router.push('/login');
    };
    if (pathName?.includes('/dashboard')) {
        return (
            <div>
                {/* navbar */}
                <div className='flex justify-between items-center bg-indigo-700/40 p-5 mx-20 mb-2 rounded-2xl'>
                    <h2>Next hero</h2>
                    <ul className='flex justify-between space-x-2'>
                        <li>Home</li>
                        <li>Profile</li>
                    </ul>
                </div>
            </div>
        )
    }
    return (
        <div>
            <nav className="md:flex items-center justify-evenly bg-orange-300/50 p-5 md:space-y-0 space-y-5 text-center">
                <h4 className='text-3xl'>Next<span className='text-pink-600'>Hero</span></h4>
                <ul className='flex justify-between items-center space-x-3'>
                    {
                        navLinks?.map(((link, idx) => <>
                            <li key={idx} className={`${pathName === link?.path && 'text-pink-300'}`}>
                                <Link href={link?.path}>{link?.title}</Link>
                            </li>
                        </>)
                        )
                    }
                    {/* <li><a href="/">home</a> </li>
                    <li><a href='/contact'>Contact</a></li> */}
                    {/* next js link tag */}
                </ul>
                <button onClick={() => handler()} className='p-3 bg-indigo-300/80 text-green-700 font-bold rounded-3xl'>Login</button>
            </nav>
        </div>
    );
};

export default Navbar;