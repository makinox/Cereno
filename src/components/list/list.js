import React from 'react'
import './list.css'

const ListCard = (props) => (
  <div className="list-card">
    <div className="list-card-media">
      <img src="https://picsum.photos/250/150" alt="" />
    </div>
    <div className="list-card-description">
      <h3>{props.title || 'Sándwich pequeño'}</h3>
      <span>{props.money || '16k'}</span>
    </div>
    <div className="list-card-action">
      <button>+</button>
    </div>
  </div>
)

export default class extends React.Component {
  render() {
    return (
      <div className="list-section">

        <div className="list-header">
          <h2>Sándwich</h2>
        </div>
        
        <div className="list-container">
          <ListCard title="Sándwich grande" money="16k" />
          <ListCard title="Sándwich mixto" money="10k" />
          <ListCard title="Sándwich pequeño" money="8k" />
        </div>

        <div className="list-mobile">
          <ListCard title="Sándwich grande" money="16k" />
        </div>

        <div className="list-header">
          <h2>Perro</h2>
        </div>
        
        <div className="list-container">
          <ListCard title="Perro grande" money="16k" />
          <ListCard title="Perro mixto" money="10k" />
          <ListCard title="Perro pequeño" money="8k" />
        </div>

        <div className="list-mobile">
          <ListCard title="Perro grande" money="16k" />
        </div>

        <div className="list-header">
          <h2>Salchipapa</h2>
        </div>
        
        <div className="list-container">
          <ListCard title="Salchipapa grande" money="16k" />
          <ListCard title="Salchipapa mixto" money="10k" />
          <ListCard title="Salchipapa pequeño" money="8k" />
        </div>

        <div className="list-mobile">
          <ListCard title="Salchipapa grande" money="16k" />
        </div>

      </div>
    )
  }
}