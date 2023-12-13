import React, { useState, useEffect } from "react";
import Confetti from 'react-confetti';
import './ultimate.css';

const Ultimate = () => {
    const [imageHeight, setImageHeight] = useState(0);

    useEffect(() => {
        // Get the height of the image once it's loaded
        const img = document.querySelector(".pic");
        if (img) {
            setImageHeight(img.clientHeight);
        }
    }, []);

    useEffect(() => {
        // Update the Confetti height whenever imageHeight changes
        // This ensures that Confetti gets the correct height
        const img = document.querySelector(".pic");
        if (img) {
            setImageHeight(img.clientHeight);
        }
    }, [imageHeight]);

    return (
        <>
            <Confetti height={imageHeight} />
            <div className="body_u" >
                <img className="pic" src="birthday_2.png" alt="Birthday" style={{ width: '100%' }} />
            </div>
        </>
    );
}

export default Ultimate;
