import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AxiosComponent() {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                console.log(response);
                setUserData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <h1>Posts</h1>
            {userData.map((data) => {
                return (
                    <div key={data.id}>
                        <h2>{data.id},{data.title}</h2>
                        <p>{data.body}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default AxiosComponent;

