import React from 'react'
import './ItemListComponent.css'

const ItemListComponent = ({data}) => {
  return (
    <div class="card bgColor">
      <div class="card-body">
        <h5 class="card-title text-light">{data.name}</h5>
        <p class="card-text text-light">Username: {data.username}</p>
        <p class="card-text text-light">Email: {data.email}</p>
      </div>
    </div>
  )
}

export default ItemListComponent
