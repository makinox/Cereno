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

  const cards = [
    {
      img: 'https://i.picsum.photos/id/429/250/150.jpg',
      title: 'Pizza sencilla',
      cost: '50$',
      ratings: 4.7,
      tags: ['Dulce', 'Fruta'],
      time: [15, 25],
      price: '$$$',
      type: 'Pizza',
    },
    {
      img: 'https://i.picsum.photos/id/429/250/150.jpg',
      title: 'Pizza grande',
      cost: '50$',
      ratings: 4.7,
      tags: ['Dulce', 'Fruta'],
      time: [15, 25],
      price: '$$',
      type: 'Pizza',
    },
    {
      img: 'https://i.picsum.photos/id/429/250/150.jpg',
      title: 'Hamburgesa sencilla',
      cost: '50$',
      ratings: 4.7,
      tags: ['Dulce', 'Fruta'],
      time: [15, 25],
      price: '$',
      type: 'Burgers',
    },
    {
      img: 'https://i.picsum.photos/id/429/250/150.jpg',
      title: 'Hamburgesa grande',
      cost: '50$',
      ratings: 4.7,
      tags: ['Dulce', 'Fruta'],
      time: [15, 25],
      price: '$',
      type: 'Burgers',
    },
    {
      img: 'https://i.picsum.photos/id/429/250/150.jpg',
      title: 'Ensalada sencilla',
      cost: '50$',
      ratings: 4.7,
      tags: ['Dulce', 'Fruta'],
      time: [15, 25],
      price: '$',
      type: 'Vegie',
    },
    {
      img: 'https://i.picsum.photos/id/429/250/150.jpg',
      title: 'Ensalada griega',
      cost: '50$',
      ratings: 4.7,
      tags: ['Dulce', 'Fruta'],
      time: [15, 25],
      price: '$',
      type: 'Vegie',
    },
    {
      img: 'https://i.picsum.photos/id/429/250/150.jpg',
      title: 'Perro sencillo',
      cost: '50$',
      ratings: 4.7,
      tags: ['Dulce', 'Fruta'],
      time: [15, 25],
      price: '$',
      type: 'Hotdog',
    },
    {
      img: 'https://i.picsum.photos/id/429/250/150.jpg',
      title: 'Perro suizo',
      cost: '50$',
      ratings: 4.7,
      tags: ['Dulce', 'Fruta'],
      time: [15, 25],
      price: '$',
      type: 'Hotdog',
    },
  ];
  const [uCards, useCards] = useState(cards);

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

    const renderCards = cards.filter(el => {
      if (item[itemId].title === 'All') {
        // console.log('all');
        return el;
      } else if (item[itemId].title === el.type) {
        // console.log(item[itemId].title);
        // console.log(el);
        return el;
      }
      // console.log(el);
    });
    console.log(renderCards);
    useCards(renderCards);
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
      {console.log(uCards)}
      <Restaurant options={options} handleSelect={handleSelect} />
      <section>
        <FoodItem items={item} handleItem={handleItem} />
      </section>
      <section>
        <FoodCard cards={uCards} handleCard={handleCard} />
      </section>
    </>
  );
};
