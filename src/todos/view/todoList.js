import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import TodoItem from './todoItem';
import { toggleTodo, removeTodo } from '../actions';
import { FilterTypes } from '../../constants'

const TodoList = ({ todos, onToggleTodo, onRemoveTodo }) => {
    return (
        <ul className="todo-List">
            {
                todos.map((item) => (
                    <TodoItem
                        key={item.id}
                        text={item.text}
                        completed={item.completed}
                        onToggle={() => onToggleTodo(item.id)}
                        onRemove={() => onRemoveTodo(item.id)}
                    />
                ))
            }
        </ul>
    )
}

TodoList.prototype = {
    todos: PropTypes.array.isRequired
}

const chooseTodos = (todos, filter) => {
    switch (filter) {
        case FilterTypes.ALL:
            return todos
        case FilterTypes.COMPLETED:
            return todos.filter(item => item.completed)
        case FilterTypes.UNCOMPLETED:
            return todos.filter(item => !item.completed)
        default:
            throw new Error('出线未知的选择器')
    }
}

const mapStateToProps = (state) => {
    return {
        todos: chooseTodos(state.todos, state.filter)
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    onToggleTodo: toggleTodo,
    onRemoveTodo: removeTodo
}, dispatch)




export default connect(mapStateToProps, mapDispatchToProps)(TodoList)