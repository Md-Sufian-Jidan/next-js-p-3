import React from 'react';

const PostDetailsData = async (id) => {
<<<<<<< HEAD
    const res = await fetch(`${process.env.NEXT_MEAL_DETAILS_URL}/posts/${id}`);
=======
    const res = await fetch(`${process.env.MEAL_DETAILS_URL}${id}`);
>>>>>>> e18fd83b13b04096c45398642a60a1c6a0d17e5f
    const data = await res.json();
    return data;
};

export const generateMetadata = async ({ params }) => {
<<<<<<< HEAD
    const postData = await fetch(`${process.env.NEXT_MEAL_DETAILS_URL}/posts/${params?.id}`)
=======
    const postData = await fetch(`${process.env.NEXT_METADATA_API}/${params?.id}`)
>>>>>>> e18fd83b13b04096c45398642a60a1c6a0d17e5f
    const data = await postData?.json();
    return {
        title: {
            absolute: `${data?.title}`
        },
        description: `${data?.body}`,
        keywords: data?.body?.split(' ')
    };
};

const PostDetailsPage = async ({ params }) => {
    const singlePostData = await PostDetailsData(params?.id);
    return (
        <div>
            <div className='p-10 space-y-5'>
                <h3>Id : <span className='p-3 bg-rose-300 rounded-full'>{singlePostData?.id}</span></h3>
                <p>Title : {singlePostData?.title}</p>
                <p>Body : {singlePostData?.body}</p>
            </div>
        </div>
    );
};

export default PostDetailsPage;