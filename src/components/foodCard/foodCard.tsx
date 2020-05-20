import React from 'react';
import { CardList, CardImage, Card, CardTitle, CardRating, CardBottom, CardTags, CardMedia, CardTime } from './styles';
import { FaRegStar } from 'react-icons/fa';

export default ({ cards }: { cards: Array<object | any> }) => (
  <CardList>
    {cards.map((el, idx) => (
      <Card key={idx}>
        <CardMedia>
          <CardImage src={el.img} alt={el.title} />
          <CardTime>
            {el.time[0]} - {el.time[1]} min
          </CardTime>
        </CardMedia>
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
