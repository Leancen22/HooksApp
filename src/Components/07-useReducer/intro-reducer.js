const initialState = [{
    id: 1,
    todo: 'Comprar pan',
    done: false
}]

// funcion reducer
// por defecto el state tiene la tarea initialState, lo unico que puede modificar el state es el action 
const todoReducer = (state = initialState, action) => {

    //si existe el action y el tipo es igual a agregar, se agrega el payload

    if (action?.type === 'agregar'){
        return [...state, action.payload]
    }

    return state
}

//inicializacion del reducer en la variable todos
let todos = todoReducer()

//nueva tarea a agregar
const newTodo = {
    id: 2,
    todo: 'Comprar leche',
    done: false
}

//Action para el reducer

const agregarTodoAction = {
    type: 'agregar',
    payload: newTodo
}

//se llama al reducer con el arreglo todos y el action a aplicar
todos = todoReducer( todos, agregarTodoAction)