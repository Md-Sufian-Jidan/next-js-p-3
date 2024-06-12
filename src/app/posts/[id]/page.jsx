import React from 'react';

const PostDetailsData = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    return data;
};

const PostDetailsPage = async ({ params }) => {
    const singlePostData = await PostDetailsData(params?.id);
    // console.log(singlePostData);
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