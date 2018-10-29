import React from 'react';

const TodoItem = (props) => {
    return <li>{props.todo} {props.finishDate}</li>  
}


export default TodoItem;