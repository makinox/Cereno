import React from 'react'
import Navbar from './components/navbar/navbar'
import List from './components/list/list'

export default class extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <List />
      </>
    )
  }
}