import React from 'react';
import { CardList, CardImage, Card, CardTitle, CardRating, CardBottom, CardTags } from './styles';
import { FaRegStar } from 'react-icons/fa';

export default ({ cards }: { cards: Array<object | any> }) => (
  <CardList>
    {cards.map((el, idx) => (
      <Card key={idx}>
        <div>
          <CardImage src={el.img} alt={el.title} />
        </div>
        <div>
          <div>
            <CardTitle>{el.title}</CardTitle>
          </div>
          <CardBottom>
            <FaRegStar />
            <CardRating>{el.ratings}</CardRating>
            {el.tags.map((al, i) => (
              <CardTags key={i}>{al}</CardTags>
            ))}
            <CardTags>{el.price}</CardTags>
          </CardBottom>
        </div>
      </Card>
    ))}
  </CardList>
);
