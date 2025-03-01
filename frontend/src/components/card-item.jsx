import React from 'react'
import Card from './card';

const cardData = [
  {
    id: 1,
    title: "Card 1",
    text: "This is the first card.",
    img: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Card 2",
    text: "This is the second card.",
    img: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "Card 3",
    text: "This is the third card.",
    img: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "Card 3",
    text: "This is the third card.",
    img: "https://via.placeholder.com/150",
  },
];


const Carditem = () => {
  return (
    <div className='carditem'> {cardData.map((cards)=><Card/>)}</div>
  )
}

export default Carditem