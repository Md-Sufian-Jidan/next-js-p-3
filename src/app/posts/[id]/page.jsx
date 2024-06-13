import React from 'react';

const PostDetailsData = async (id) => {
    const res = await fetch(`${process.env.MEAL_DETAILS_URL}${id}`);
    const data = await res.json();
    return data;
};

export const generateMetadata = async ({ params }) => {
    const postData = await fetch(`${process.env.NEXT_METADATA_API}/${params?.id}`)
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