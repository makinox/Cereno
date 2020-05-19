import React from 'react';

export default ({ cards }: { cards: Array<object | any> }) => (
  <ul>
    {cards.map((el, idx) => (
      <article key={idx}>
        <h3>{el.title}</h3>
      </article>
    ))}
  </ul>
);
