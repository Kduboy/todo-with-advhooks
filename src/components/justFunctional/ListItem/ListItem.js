import React from 'react'


//import './ListItem.scss'

const ListItem = ({ listItem }) => {
  return (
    <tr>
      {/* {for (let itemProp in listItem){ */}
      {listItem.values().map((value) => {
        <td key={i}>
          {value}
        </td>
      })}
    </tr>
  )
}

export default ListItem