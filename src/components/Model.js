import React from 'react';

const Model = (props) => {
  const name = props.name ? props.name : 'ModelName'
  const items = props.items ? props.items : []
  const listItems = items.map((i, k) => {
    return <div key={k}>{i}</div>
  })
  return (
    <div>
      <h3>{name}</h3>
      {listItems}
    </div>
  )
}

export default Model
