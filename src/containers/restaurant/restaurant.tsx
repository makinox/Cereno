import React, { useState } from "react"
import { Restaurant } from "../../components"

export default () => {
  const [options, useOptions] = useState([
    { state: true, value: "Delivery: now" },
    { state: false, value: "Delivery: morning" },
    { state: false, value: "Delivery: night" },
  ])

  return (
    <>
      <Restaurant options={options} />
    </>
  )
}
