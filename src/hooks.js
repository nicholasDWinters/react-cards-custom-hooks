import { useState } from 'react';
import axios from 'axios';
import uuid from "uuid";

const useFlip = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const toggleFlip = () => {
        setIsFlipped(isFlipped => !isFlipped);
    }
    return [isFlipped, toggleFlip];
}

const useAxios = (url) => {
    const [cards, setCards] = useState([]);
    const addCard = async () => {
        const response = await axios.get(url);
        setCards(cards => [...cards, { ...response.data, id: uuid() }]);
    };
    return [cards, addCard];
}


export { useFlip, useAxios };