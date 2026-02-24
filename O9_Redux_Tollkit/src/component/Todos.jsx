import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

function Todos() {
    const todos=useSelector(state=>state.todos);
    const dispatch=useDispatch()
  return (
    <div>Todo</div>

  )
}

export default Todo