const getPosts = async () => {
    const res = await fetch(`${process.env.NEXT_API_URL}/posts`)
    const data = await res.json();
    return data;
};

export default getPosts;