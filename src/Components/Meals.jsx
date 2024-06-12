'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Meals = () => {
    const [search, setSearch] = useState('');
    const [meals, setMeals] = useState([]);

    const loadData = async () => {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
        const data = await res.json();
        console.log('11', data);
        setMeals(data?.categories);
    };

    const handler = (e) => {
        console.log(e.target.value);
        setSearch(e.target.value);
    };

    useEffect(() => {
        loadData()
    }, [search]);

    return (
        <div>
            <div className='mt-8 rounded-xl'>
                <input
                    onChange={handler}
                    className='p-4 outline-none border-transparent text-sky-500' type="text" placeholder='Search Your Meal.....' />
                <button className='p-4 bg-gradient-to-tr from-red-100 to-pink-200'>Search</button>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-5'>
                {
                    meals?.map(meal => (
                        <div key={meal?.idCategory}
                            className="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-light text-gray-600 dark:text-gray-400">Meal Id : {meal?.idCategory}</span>
                                <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500" tabindex="0" role="button">Category : {meal?.strCategory}</a>
                            </div>
                            <div className="mt-2">
                                <p className="mt-2 text-gray-600 dark:text-gray-300">{meal?.strCategoryDescription.slice(0,100)}...</p>
                            </div>
                            <div className="flex items-center justify-between mt-4">
                                <Link href={`meal/${meal?.idCategory}`} className="text-blue-600 dark:text-blue-400 hover:underline" tabindex="0" role="link">Read more</Link>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Meals;