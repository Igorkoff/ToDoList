import React from 'react'
import cn from 'classnames'
import {BsTrash} from 'react-icons/bs'
import Check from './Check'

const TodoItem = ({ todo, changeTodo, removeTodo }) => {
    return (
        <div className='flex items-center justify-between mb-4 p-5 w-full rounded-2xl bg-zinc-800'>
            <button className='flex items-center' onClick={() => changeTodo(todo._id)}>
                <Check isCompleted={todo.isCompleted} />
                <span className={cn({'line-through': todo.isCompleted})}>
                    {todo.title}
                </span>
            </button>
            <button onClick={() => removeTodo(todo._id)}>
                <BsTrash size={22} className='text-zinc-600 hover:text-red-700 transition-colors ease-in-out duration-300' />
            </button>
        </div>
    )
}

export default TodoItem