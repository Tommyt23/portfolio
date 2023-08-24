import React from 'react';
import './index.scss';

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
    return (
        <span>
            {strArray.map((char, i) => (
                <span
                    key={char + i}
                    className={`${letterClass} _${i + idx}`} // Properly add idx to the class name
                >
                    {char}
                </span>
            ))}
        </span>
    );
};

export default AnimatedLetters