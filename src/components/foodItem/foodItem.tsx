import React from 'react';
import { List, Item, ItemIcon, ItemTitle } from './styles';

export default ({ items, handleItem }: { items: Array<object | any>; handleItem: any }) => (
  <List>
    {items.map((el, idx) => (
      <Item key={idx} activate={el.active} onClick={() => handleItem(idx)}>
        <ItemIcon>{el.icon}</ItemIcon>
        <ItemTitle>{el.title}</ItemTitle>
      </Item>
    ))}
  </List>
);
