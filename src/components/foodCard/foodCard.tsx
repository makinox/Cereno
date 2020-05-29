import React from 'react';
import { CardList, CardImage, Card, CardTitle, CardRating, CardBottom, CardTags, CardMedia, CardTime, CardOverlay, CardOverlayText } from './styles';
import { FaRegStar } from 'react-icons/fa';

export default ({ cards, handleCard, images }: { cards: Array<object | any>; handleCard: any; images: Array<object | any> }) => (
  <CardList>
    {cards.map((el, idx) => (
      <Card key={idx}>
        <CardMedia>
          <CardImage fixed={images[el.img].childImageSharp.fixed} alt={el.title} />
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
        <CardOverlay onClick={() => handleCard(idx)}>
          <CardOverlayText>Toca para agregar al carrito</CardOverlayText>
          <CardOverlayText>{el.cost} $</CardOverlayText>
        </CardOverlay>
      </Card>
    ))}
  </CardList>
);
