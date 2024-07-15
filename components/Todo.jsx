
import { useContext, useState } from "react"
import MainComponent from "./MainComponent";
import { MyContext } from "../src/App";
export default function Todo() {
    const { clickedIndex, setClickedIndex } = useContext(MyContext)
    const { projectHeading, setProjectHeading } = useContext(MyContext)
    const { todoItems, setTodoItems } = useContext(MyContext);
    const [showInput, setShowInput] = useState(false)
    const [inputValue, setInputValue] = useState('');
    const handleAddingTasks = (e) => {

        e.preventDefault();
        setInputValue(e.target.value);
        if (inputValue.trim() !== '') {
            setShowInput(false);
            setTodoItems((prev) => {
                const copyArr = [...prev]
                copyArr[clickedIndex].push(inputValue)

                return (copyArr)
            }

            )
        } else {
            alert('Please enter a value before storing.');
        }


    }
    const handleRemoveItem = (index) => {
        setTodoItems((prev) => {
            const arr = [...prev]
            arr[clickedIndex].splice(index,1)
            return (arr)
        })
    }
    

    return (
        <section id="todo">
            
            
            <h2>Tasks</h2>
            <button onClick={() => setShowInput(true)}>+ add tasks</button>
            <ul>
                {todoItems[clickedIndex] && todoItems[clickedIndex].length > 0 ? (
                    todoItems[clickedIndex].map((element, index) => {
                        return (<li key={index}>{element}<button onClick={() => handleRemoveItem(index)}>X</button></li>)
                    })
                ) : (
                    <p>No tasks for this project</p>
                )}
            </ul>
            {showInput && <>< input value={inputValue} onChange={function handleChange(e) {
                return (setInputValue(e.target.value))
            }} />
                {showInput && <><button type="submit" onClick={handleAddingTasks}>confirm</button>
                    <button onClick={() => setShowInput(false)}>cancel</button>
                </>}
            </>
            }

        </section>

    )
}