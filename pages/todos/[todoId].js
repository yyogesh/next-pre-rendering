import React from 'react'

const Todo = ({ todo, todoId }) => {
    return (
        <div >
            <h2>{todoId} :: {todo.title}</h2>
        </div>
    )
}

export default Todo

export async function getServerSideProps(context) {
    const { query, res, req, params } = context;
    console.log('query', query);
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.todoId}`)
    const data = await response.json();
    return {
        props: {
            todo: data,
            todoId: params.todoId
        }
    }
}