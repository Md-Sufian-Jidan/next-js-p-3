import React from 'react';
import getPosts from '@/Services/postApi';

const PostsPage = async () => {
    const postData = await getPosts();
    console.log(postData);
    return (
        <div>
            <h5>All Posts</h5>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-5'>
                {
                    postData?.slice(0,10).map(post => <div key={post.id} className='border border-rose-300 p-5'>
                        <h6>Id : {post?.id}</h6>
                        <h3>Title : {post?.title}</h3>
                        <p>Body : {post?.body}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PostsPage;