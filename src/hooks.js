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
    const addCard = async (name) => {
        const response = await axios.get(name.length > 0 ? url + `/${name}/` : url);
        setCards(cards => [...cards, { ...response.data, id: uuid() }]);
    };
    const removeCards = () => {
        setCards([]);
    }
    return [cards, addCard, removeCards];
}


export { useFlip, useAxios };