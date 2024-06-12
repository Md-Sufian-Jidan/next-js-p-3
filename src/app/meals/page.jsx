import React from 'react';
import Meals from '@/Components/Meals';

const MealsPage = async () => {

    return (
        <div className='p-12'>
            <div className='text-center'>
                <h2 className='text-2xl font-bold'>Choose Your Meal</h2>
                <p className='text-xl font-semibold'>Chose Meal By Your Searching.....</p>
                <Meals />
            </div>
        </div>
    );
};

export default MealsPage;