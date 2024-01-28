import React, { useState } from 'react';
import Image from './Image';
function Exercise1() {
    const [images] = useState([
        "https://hips.hearstapps.com/hmg-prod/images/lychee-fruit-sugar-1530136136.jpg?crop=1xw:1xh;center,top&resize=640:*",
        "https://hips.hearstapps.com/hmg-prod/images/mango-fruit-sugar-1530136260.jpg?crop=1xw:1xh;center,top&resize=640:*",
        "https://hips.hearstapps.com/hmg-prod/images/cherries-sugar-fruit-1530136329.jpg?crop=1xw:1xh;center,top&resize=640:*"
    ]);
    const [currentImg, setCurrentImg] = useState(0);

    const shiftImageBack = () => {
        setCurrentImg(prevCurrentImg => prevCurrentImg === 0 ? images.length - 1 : prevCurrentImg - 1);
    };

    const shiftImageForward = () => {
        setCurrentImg(prevCurrentImg => prevCurrentImg === images.length - 1 ? 0 : prevCurrentImg + 1);
    };

    return (
        <div>
            <button className="back" onClick={shiftImageBack}>Back</button>
            <button className="forward" onClick={shiftImageForward}>Forward</button>
            <Image imageSource={images[currentImg]}/>
        </div>
    );
}

export default Exercise1;
