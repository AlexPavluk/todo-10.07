import { useState } from 'react'

function ToDoForm({ addTask }) {
    const [userInput, setUserInput] = useState('')

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput("")
    }

    const handleChangePreess = (e) => {
        if(e.key === "Enter") {
            handleSubmit(e)
        }
    }

    return (

        <form onSubmit={handleSubmit}> 
            <input 
                value={userInput}
                type="text"
                onChange={handleChange}
                onKeyDown={handleChangePreess}
                placeholder="Напши что хочешь сделать"
            />
            <button className='button-save'>Сохранить</button>
        </form>

    )
}

export default ToDoForm;