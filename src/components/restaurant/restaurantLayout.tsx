import React from 'react';
import { Section, RestaurantTitle } from './styles';

export default ({ options, handleSelect }: { options: Array<object | any>; handleSelect: any }) => (
  <>
    <Section>
      <div>
        <RestaurantTitle>Restaurante 🍔</RestaurantTitle>
      </div>
      <div>
        <select name="select" onChange={handleSelect}>
          {options.map((el, idx) => (
            <option key={idx} value={el.value} defaultValue={el.state}>
              {el.value}
            </option>
          ))}
        </select>
      </div>
    </Section>
  </>
);
