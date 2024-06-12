'use client'
import React, { useEffect, useState } from 'react';

const Meals = () => {
    const [search, setSearch] = useState('');
    const [meals, setMeals] = useState([]);

    const loadData = async () => {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
        const data = await res.json();
        console.log('11',data);
        setMeals(data);
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
            <p>Meals Length : {meals?.length}</p>
            <div className='mt-8 rounded-xl'>
                <input
                    onChange={handler}
                    className='p-4 outline-none border-transparent text-sky-500' type="text" placeholder='Search Your Meal.....' />
                <button className='p-4 bg-gradient-to-tr from-red-100 to-pink-200'>Search</button>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                {
                    meals?.map(meal => (
                        <div key={meal?.id} className="card w-96 bg-gray-200">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Cookies!</h2>
                                <p>We are using cookies for no reason.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Accept</button>
                                    <button className="btn btn-ghost">Deny</button>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Meals;