import React from "react"
import { Section, RestaurantTitle } from "./styles"

export default ({ options }: { options: Array<object | any> }) => (
  <>
    <Section>
      <div>
        <RestaurantTitle>Restaurant 🍔</RestaurantTitle>
      </div>
      <div>
        <select name="select">
          {options.map((el, idx) => (
            <option key={idx} value={el.value} defaultValue={el.state}>
              {el.value}
            </option>
          ))}
        </select>
      </div>
    </Section>
  </>
)
