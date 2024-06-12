'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Meals = () => {
    const [search, setSearch] = useState('');
    const [meals, setMeals] = useState([]);

    const loadData = async () => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php?f=${search}`);
            const data = await res.json();
            console.log('11', data);
            setMeals(data?.categories);
        } catch (err) {
            console.log(err);
            console.log(err?.message)
        };
    };

    const handler = (e) => {
        setSearch(e.target.value);
    };

    useEffect(() => {
        loadData()
    }, [search]);

    return (
        <div>
            <div className='mt-8'>
                <input
                    onChange={handler}
                    className='p-4 outline-none border-transparent text-sky-500 rounded-l-xl' type="text" placeholder='Search Your Meal.....' />
                <button onClick={() => loadData()} className='p-4 bg-gradient-to-br from-sky-500 to-lime-500 rounded-r-xl'>Search</button>
            </div>
            <div>
                {
                    meals?.length > 0 ?
                        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-5'>
                            {meals?.slice(0, 9)?.map(meal => (
                                <div key={meal?.idCategory}
                                    className="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-light text-gray-600 dark:text-gray-400">Meal Id : {meal?.idCategory}</span>
                                        <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500" tabindex="0" role="button">Category : {meal?.strCategory}</a>
                                    </div>
                                    <div className='my-1 shadow-2xl rounded-xl'>
                                        <Image src={meal?.strCategoryThumb} width={300} height={300} alt="meal page" />
                                    </div>
                                    <div className="mt-2">
                                        <p className="mt-2 text-gray-600 dark:text-gray-300">{meal?.strCategoryDescription.slice(0, 100)}...</p>
                                    </div>
                                    <div className="flex items-center justify-between mt-4">
                                        <Link href={`meals/${meal?.idCategory}`} className="text-blue-600 dark:text-blue-400 hover:underline" tabindex="0" role="link">Read more</Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                        :
                        <div className='text-center my-5 space-y-5'>
                            <h3 className='text-3xl font-bold text-rose-400'>No Data Found In This Category...</h3>
                            <p className='text-xl font-semibold'>Please Try another Category</p>
                        </div>
                }
            </div>
        </div>
    );
};

export default Meals;