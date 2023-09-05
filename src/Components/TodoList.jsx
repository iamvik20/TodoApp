import React from 'react'

function TodoList(props) {
  return (
    <div className='list-item'>
        <span className='item'>{props.item}</span>
        <span className='icon'>
            <i className='fa-solid fa-trash-can icon-delete'
                onClick={(e) => {
                    props.deleteItem(props.index)
                }}
            ></i>
        </span>
    </div>
  )
}

export default TodoList