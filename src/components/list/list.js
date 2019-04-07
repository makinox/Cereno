import React from 'react'
import './list.css'

const ListCard = () => (
  <div className="list-card">
    <div className="list-card-media">
      <img src="https://picsum.photos/250/150" alt="" />
    </div>
    <div className="list-card-description">
      <h3>Sándwich pequeño</h3>
      <span>16k</span>
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
          <ListCard />
          <ListCard />
          <ListCard />
        </div>

      </div>
    )
  }
}