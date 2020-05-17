import React from "react"
import { Section, RestaurantTitle } from "./styles"

export default () => (
  <>
    <Section>
      <div>
        <RestaurantTitle>Restaurant 🍔</RestaurantTitle>
      </div>
      <div>
        <select name="select">
          <option value="value1" defaultValue="true">
            Delivery: now
          </option>
          <option value="value2">Delivery: morning</option>
          <option value="value3">Delivery: night</option>
        </select>
      </div>
    </Section>
  </>
)
