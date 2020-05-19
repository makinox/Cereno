import React, { useState } from 'react';
import { Restaurant, FoodItem, FoodCard } from '../../components';
import { FaUtensils, FaPizzaSlice, FaEgg, FaHamburger, FaHotdog } from 'react-icons/fa';

export default () => {
  const [options, useOptions] = useState([
    { state: true, value: 'Delivery: now' },
    { state: false, value: 'Delivery: morning' },
    { state: false, value: 'Delivery: night' },
  ]);

  const [item, useItem] = useState([
    { icon: <FaUtensils />, title: 'All', active: true },
    { icon: <FaPizzaSlice />, title: 'Pizza', active: false },
    { icon: <FaHamburger />, title: 'Burgers', active: false },
    { icon: <FaEgg />, title: 'Vegie', active: false },
    { icon: <FaHotdog />, title: 'Hotdog', active: false },
    // { icon: <FaHotdog />, title: "Hotdog", active: false },
  ]);

  const [cards, useCards] = useState([
    { img: 'https://i.picsum.photos/id/429/300/200.jpg', title: 'Fresas', stat: 4.7, tags: ['Dulce', 'Fruta', 'Fresa'], time: [15, 25] },
    { img: 'https://i.picsum.photos/id/429/300/200.jpg', title: 'Fresas', stat: 4.7, tags: ['Dulce', 'Fruta', 'Fresa'], time: [15, 25] },
    { img: 'https://i.picsum.photos/id/429/300/200.jpg', title: 'Fresas', stat: 4.7, tags: ['Dulce', 'Fruta', 'Fresa'], time: [15, 25] },
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

  return (
    <>
      <Restaurant options={options} handleSelect={handleSelect} />
      <section>
        <FoodItem items={item} handleItem={handleItem} />
      </section>
      <section>
        <FoodCard cards={cards} />
      </section>
    </>
  );
};
