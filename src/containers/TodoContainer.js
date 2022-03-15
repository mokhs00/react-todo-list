import { useDispatch, useSelector } from 'react-redux'
import TodoCreate from '../components/TodoCreate';
import TodoHead from '../components/TodoHead';
import TodoList from '../components/TodoList';
import TodoTemplate from '../components/TodoTemplate';
import { createTodo, removeTodo, toggleTodo } from '../modules/todos';

function TodoContainer() {
  const todos = useSelector(state => state.todos);

  const dispatch = useDispatch();

  const onCreate = (text) => dispatch(createTodo(text));
  const onRemove = (id) => dispatch(removeTodo(id));
  const onToggle = (id) => dispatch(toggleTodo(id));

  return (
    <TodoTemplate>
      <TodoHead todos={todos}></TodoHead>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}></TodoList>
      <TodoCreate onCreate={onCreate}></TodoCreate>
    </TodoTemplate>
  )
}

export default TodoContainer;