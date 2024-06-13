export async function PATCH(request, { params }) {
    console.log(params?.id);
    const body = await request.json();
    const index = comments?.findIndex((c) => c?.id === parseInt(params?.id));
    comments[index] = {
        id: index?.id,
        text: body?.text,
    };
    return Response.json({
        message: "dynamic get route"
    });
};

export async function DELETE(request, { params }) {
    const newComment = comments?.filter((c) => c?.id === parseInt(params?.id));
    return Response.json({
        message: "comment delete",
        newComment,
    });
};

const comments = [
    {
        id: 1,
        text: "comment 1"
    },
    {
        id: 2,
        text: "comment 2"
    },
    {
        id: 3,
        text: "comment 3"
    },
];