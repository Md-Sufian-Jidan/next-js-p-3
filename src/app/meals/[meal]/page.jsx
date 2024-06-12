import Image from 'next/image';
import React from 'react';

const mealsDetailsData = async (id) => {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
    const data = await res.json();
    return data?.categories;
};

export const generateMetadata = async (data) => {
    // const postData = await fetch(`https://jsonplaceholder.typicode.com/posts/${params?.id}`)
    // const data = await postData?.json();
    console.log('13333333',data);
    // return {
    //     title: `Post Details ${params?.strCategory}`,
    //     description: `${data?.strCategoryDescription}`,
    //     keywords: data?.strCategoryDescription?.split(' ')
    // };
};

const MealDetailsPage = async ({ params }) => {
    const allMeal = await mealsDetailsData(params?.meal);
    const singleMeal = allMeal?.find(meal => meal?.idCategory === params?.meal);
    console.log('24444444444',singleMeal);
    await generateMetadata(singleMeal)
    return (
        <div className='bg-white rounded-lg shadow-md dark:bg-gray-800'>
            <div className="max-w-2xl mx-auto my-3 overflow-hidden">
                <Image src={singleMeal?.strCategoryThumb} width={1000} height={300} alt='meal picture' />

                <div className="p-6">
                    <div>
                        <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">{singleMeal?.strId}</span>
                        <a href="#" className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabIndex="0" role="link">{singleMeal?.strCategory}</a>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{singleMeal?.strCategoryDescription}</p>
                    </div>

                    <div className="mt-4">
                        <div className="flex items-center">
                            <div className="flex items-center">
                                <Image src={singleMeal?.strCategoryThumb} width={100} height={100} alt='meal picture' />
                                <a href="#" className="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabIndex="0" role="link">{singleMeal?.strCategory}</a>
                            </div>
                            <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">{new Date().toLocaleDateString()}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MealDetailsPage;