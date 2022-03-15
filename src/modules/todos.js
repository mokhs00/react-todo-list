
const CREATE_TODO = "todos/CREATE_TODO";
const TOGGLE_TODO = "todos/TOGGLE_TODO";
const REMOVE_TODO = "todos/REMOVE_TODO";

const initialTodos = [
  {
    id: 1,
    text: "프로젝트 생성하기",
    done: true,
  },
  {
    id: 2,
    text: "컴포넌트 생성하기",
    done: true,
  },
  {
    id: 3,
    text: "Context 생성하기",
    done: false,
  },
  {
    id: 4,
    text: "기능 구현",
    done: false,
  },
];

let nextId = initialTodos.length + 1;


export const createTodo = (text) => ({
  type: CREATE_TODO,
  todo: {
    id: nextId++,
    text
  }
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  id
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id
})

export default function todos(state = initialTodos, action) {
  switch (action.type) {
    case CREATE_TODO:
      return state.concat(action.todo);
    case TOGGLE_TODO:
      return state.map(
        (todo) =>
          todo.id === action.id
            ? { ...todo, done: !todo.done }
            : todo);
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.id);
    default:
      return state
  }
}