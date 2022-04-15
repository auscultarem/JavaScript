import './css/styles.css';
import { Todo, TodoList } from './classes';
import { crearTodoHtml  } from './js/componentes';


export const todoList = new TodoList();

const tarea = new Todo("Aprender JavaScript");
const tarea2 = new Todo("Aprender Python");

todoList.nuevoTodo( tarea );
todoList.nuevoTodo( tarea2 );

console.log( todoList );

crearTodoHtml( tarea );
crearTodoHtml( tarea2 );

todoList.todos.forEach( todo => crearTodoHtml ( todo ) );
