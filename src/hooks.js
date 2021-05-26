import React, { useState } from 'react';


const useFlip = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const toggleFlip = () => {
        setIsFlipped(isFlipped => !isFlipped);
    }
    return [isFlipped, toggleFlip];
}




export { useFlip };