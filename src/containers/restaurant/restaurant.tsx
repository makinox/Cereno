import React, { useState, useContext } from 'react';
import { Restaurant, FoodItem, FoodCard } from '../../components';
import { FaUtensils, FaPizzaSlice, FaEgg, FaHamburger, FaHotdog } from 'react-icons/fa';
import { CartContext } from '../../utils/context/context';

export default () => {
  const { addToCart } = useContext(CartContext);

  const options = [
    { state: true, value: 'Delivery: now' },
    { state: false, value: 'Delivery: morning' },
    { state: false, value: 'Delivery: night' },
  ];

  const [item, useItem] = useState([
    { icon: <FaUtensils />, title: 'All', active: true },
    { icon: <FaPizzaSlice />, title: 'Pizza', active: false },
    { icon: <FaHamburger />, title: 'Burgers', active: false },
    { icon: <FaEgg />, title: 'Vegie', active: false },
    { icon: <FaHotdog />, title: 'Hotdog', active: false },
  ]);

  //Unused usecard
  const [cards, useCards] = useState([
    {
      img: 'https://i.picsum.photos/id/429/250/150.jpg',
      title: 'Fresas',
      cost: '50$',
      ratings: 4.7,
      tags: ['Dulce', 'Fruta'],
      time: [15, 25],
      price: '$$$',
    },
    {
      img: 'https://i.picsum.photos/id/429/250/150.jpg',
      title: 'Fresas',
      cost: '50$',
      ratings: 4.7,
      tags: ['Dulce', 'Fruta'],
      time: [15, 25],
      price: '$$',
    },
    {
      img: 'https://i.picsum.photos/id/429/250/150.jpg',
      title: 'Fresas',
      cost: '50$',
      ratings: 4.7,
      tags: ['Dulce', 'Fruta'],
      time: [15, 25],
      price: '$',
    },
  ]);

  const handleItem = (itemId: number = 0) => {
    const mutatedItems = item.map((el, idx) => {
      if (idx === itemId) {
        el.active = !el.active;
      } else {
        el.active = false;
      }
      return el;
    });
    useItem(mutatedItems);
  };

  const handleSelect = (option: any) => {
    const target = option.target as HTMLSelectElement;
    console.log({ msg: 'select', value: target.value, option: target.selectedIndex });
  };

  const handleCard = (itemKey: number) => {
    console.log({ itemKey, card: cards[itemKey] });
    addToCart(cards[itemKey]);
  };

  return (
    <>
      <Restaurant options={options} handleSelect={handleSelect} />
      <section>
        <FoodItem items={item} handleItem={handleItem} />
      </section>
      <section>
        <FoodCard cards={cards} handleCard={handleCard} />
      </section>
    </>
  );
};
