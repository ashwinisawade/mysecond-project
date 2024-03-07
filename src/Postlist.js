import React, { useEffect } from 'react';

function PostList() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    useEffect(() => {
        fetch(url) // Get API
            .then(response => {
                console.log("response", response);
            }).catch(e => {
                console.log("e", e);
            });
    }, []);
    return (
        <div>
            <center><h1>List post data</h1></center>
        </div>
    );
}

export default PostList;