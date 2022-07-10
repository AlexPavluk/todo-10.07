import { useState } from 'react';
import img1 from './bukets.png';
import ToDoForm from './ToDoForm';

/* eslint-disable jsx-a11y/alt-text */
function ToDo({ todo, toggleTask, removeTask, updateTodo }) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
        
        if (edit.id) {
        console.log('hello ша')
        return <ToDoForm edit={edit} onSubmit={submitUpdate}/>;
    }
    console.log(edit.id);
    };

    

    
    return (
        <div key={todo.id} className="item-todo">
            <div className={todo.complete ? "item-text strike" : "item-text"}
                onClick={() => toggleTask(todo.id)}
            >
                {todo.task}
            </div>
            <div className='wrapp'> 
                <div className="item-delete" onClick={() => removeTask(todo.id)}>
                    <img
                    src={img1} 
                    alt="buk"
                    />
                </div>
                <div className='item-edit'>
                    <button className='item-button' onClick={() =>  submitUpdate()}> 
                        edit
                    </button>
                </div>
                {/* <button className='item-filter' onClick={() => updateTodo(edit.id)}> 
                        filter
                    </button> */}
                    
             </div>
        </div>
    )
}






export default ToDo;