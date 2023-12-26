import React from 'react';


function page({params,}:{params:{reviewId:string,id:string}}) {
    return (
        <div>
            <h1>Blog Page {params.reviewId}</h1>
            <h1>Blog Page {params.id}</h1>
        </div>
    );
}

export default page;