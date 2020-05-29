import React, { useState, useContext, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { CartContext } from '../../utils/context/context';
import { Restaurant, FoodItem, FoodCard } from '../../components';
import { FaUtensils, FaPizzaSlice, FaEgg, FaHamburger, FaHotdog } from 'react-icons/fa';

export default () => {
  const imageData = useStaticQuery(graphql`
    query {
      img1: file(relativePath: { eq: "food/1.jpg" }) {
        childImageSharp {
          fixed(width: 150, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      img2: file(relativePath: { eq: "food/2.jpg" }) {
        childImageSharp {
          fixed(width: 150, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      img3: file(relativePath: { eq: "food/3.jpg" }) {
        childImageSharp {
          fixed(width: 150, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      img4: file(relativePath: { eq: "food/4.jpg" }) {
        childImageSharp {
          fixed(width: 150, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      img5: file(relativePath: { eq: "food/5.jpg" }) {
        childImageSharp {
          fixed(width: 150, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      img6: file(relativePath: { eq: "food/6.jpg" }) {
        childImageSharp {
          fixed(width: 150, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      img7: file(relativePath: { eq: "food/7.jpg" }) {
        childImageSharp {
          fixed(width: 150, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      img8: file(relativePath: { eq: "food/8.jpg" }) {
        childImageSharp {
          fixed(width: 150, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const { addToCart, filter } = useContext(CartContext);

  const options = [
    { state: true, value: 'Entrega: Ahora' },
    { state: false, value: 'Entrega: En la mañana' },
    { state: false, value: 'Entrega: En la noche' },
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
      img: 'img1',
      title: 'Pizza sencilla',
      cost: 50,
      ratings: 4.7,
      tags: ['Dulce', 'Fruta'],
      time: [15, 25],
      recursive: '',
      price: '$$$',
      type: 'Pizza',
    },
    {
      img: 'img2',
      title: 'Pizza grande',
      cost: 50,
      ratings: 4.7,
      tags: ['Dulce', 'Fruta'],
      time: [15, 25],
      recursive: '',
      price: '$$',
      type: 'Pizza',
    },
    {
      img: 'img3',
      title: 'Hamburgesa sencilla',
      cost: 50,
      ratings: 4.7,
      tags: ['Dulce', 'Fruta'],
      time: [15, 25],
      recursive: '',
      price: '$',
      type: 'Burgers',
    },
    {
      img: 'img4',
      title: 'Hamburgesa grande',
      cost: 50,
      ratings: 4.7,
      tags: ['Dulce', 'Fruta'],
      time: [15, 25],
      recursive: '',
      price: '$',
      type: 'Burgers',
    },
    {
      img: 'img5',
      title: 'Ensalada sencilla',
      cost: 50,
      ratings: 4.7,
      tags: ['Dulce', 'Fruta'],
      time: [15, 25],
      recursive: '',
      price: '$',
      type: 'Vegie',
    },
    {
      img: 'img6',
      title: 'Ensalada griega',
      cost: 50,
      ratings: 4.7,
      tags: ['Dulce', 'Fruta'],
      time: [15, 25],
      recursive: '',
      price: '$',
      type: 'Vegie',
    },
    {
      img: 'img7',
      title: 'Perro sencillo',
      cost: 50,
      ratings: 4.7,
      tags: ['Dulce', 'Fruta'],
      time: [15, 25],
      recursive: '',
      price: '$',
      type: 'Hotdog',
    },
    {
      img: 'img8',
      title: 'Perro suizo',
      cost: 50,
      ratings: 4.7,
      tags: ['Dulce', 'Fruta'],
      time: [15, 25],
      recursive: '',
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
        return el;
      } else if (item[itemId].title === el.type) {
        return el;
      }
    });
    // console.log(renderCards);
    useCards(renderCards);
  };

  const handleSelect = (option: any) => {
    const target = option.target as HTMLSelectElement;
    console.log({ msg: 'select', value: target.value, option: target.selectedIndex });
  };

  const handleCard = (itemKey: number) => {
    // console.log({ itemKey, card: cards[itemKey] });
    const selectedCart = cards[itemKey];
    selectedCart.recursive = imageData[cards[itemKey].img].childImageSharp.fixed.src;
    addToCart(selectedCart);
  };

  useEffect(() => {
    const resCards = cards.filter(el => el.title.toLowerCase().includes(filter));
    useCards(resCards);
  }, [filter]);

  return (
    <>
      {/* {console.log({ uCards, imageData })} */}
      <Restaurant options={options} handleSelect={handleSelect} />
      <section>
        <FoodItem items={item} handleItem={handleItem} />
      </section>
      <section>
        <FoodCard cards={uCards} images={imageData} handleCard={handleCard} />
      </section>
    </>
  );
};
