import React, { useState, useEffect } from 'react';
import jwt from 'jsonwebtoken';

const SECRET_KEY = "your_secret_key";

const Profile2 = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = getCookie('jwtToken');

        if (token) {
            // Verify token
            jwt.verify(token, SECRET_KEY, (err, decoded) => {
                if (err) {
                    console.error('Invalid token');
                    // Optionally, you can remove the invalid token from cookies here
                } else {
                    console.log('Token verified successfully:', decoded);
                    setUser(decoded.user_id); // Assuming user_id is present in the payload
                }
            });
        } else {
            console.log('Token not found');
        }
    }, []);

    const getCookie = (name) => {
        const cookieString = document.cookie;
        const cookies = cookieString.split(';');

        for (let cookie of cookies) {
            const [cookieName, cookieValue] = cookie.split('=');
            if (cookieName.trim() === name) {
                return decodeURIComponent(cookieValue);
            }
        }

        return null;
    };

    return (
        <div>
            {user ? (
                <div>
                    <h2>Welcome, {user}</h2>
                    {/* Display user profile or other authorized content here */}
                </div>
            ) : (
                <div>
                    <h2>Unauthorized</h2>
                    {/* Redirect to login page or display unauthorized message */}
                </div>
            )}
        </div>
    );
};

export default Profile2;
