import React from 'react';
import Link from 'next/link'

const Todos = ({ todos }) => {
    return (
        <>
            <div>List of todos</div>
            {
                todos.map(todo => {
                    return (
                        <div key={todo.id}>
                            <Link href={`/todos/${todo.id}`} passHref>
                                <h2>{todo.title}</h2>
                            </Link>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Todos;

export async function getServerSideProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await response.json();
    return {
        props: {
            todos: data
        }
    }
}