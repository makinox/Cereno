import React, { useState } from "react"
import { Restaurant, FoodItem } from "../../components"
import { FaUtensils, FaPizzaSlice, FaEgg, FaHamburger, FaHotdog } from "react-icons/fa"

export default () => {
  const [options, useOptions] = useState([
    { state: true, value: "Delivery: now" },
    { state: false, value: "Delivery: morning" },
    { state: false, value: "Delivery: night" },
  ])

  const [item, useItem] = useState([
    { icon: <FaUtensils />, title: "All", active: true },
    { icon: <FaPizzaSlice />, title: "Pizza", active: false },
    { icon: <FaHamburger />, title: "Burgers", active: false },
    { icon: <FaEgg />, title: "Vegie", active: false },
    { icon: <FaHotdog />, title: "Hotdog", active: false },
    // { icon: <FaHotdog />, title: "Hotdog", active: false },
  ])

  const handleItem = (itemId: number = 0) => {
    const mutatedItems = item.map((el, idx) => {
      if (idx === itemId) {
        el.active = !el.active
      } else {
        el.active = false
      }
      return el
    })
    useItem(mutatedItems)
  }

  return (
    <>
      <Restaurant options={options} />
      <section>
        <FoodItem items={item} handleItem={handleItem} />
      </section>
    </>
  )
}
