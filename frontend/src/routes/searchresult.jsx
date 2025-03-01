import React from 'react'
import Hotel from '../components/hotel'


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


const Searchresult = () => {
  return (
    <div class="hotel">
      {cardData.map((hotel)=><Hotel/>)}
    </div>
  )
}

export default Searchresult