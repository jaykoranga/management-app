import { useContext, useState } from "react"
import { Button } from "bootstrap"
import Input from "./Input"
import Todo from "./Todo"
import {MyContext} from '../src/App'
export default function NewComponent() {
  const { todoItems, setTodoItems } = useContext(MyContext);
  const {clickedIndex,setClickedIndex}=useContext(MyContext)
  const {showTopicMenue, setShowTopicMenue} = useContext(MyContext)
  const {projects,setProjects}=useContext(MyContext);
  const{projectHeading,setProjectHeading}=useContext(MyContext);
  const [tempProjectHeading,setTempProjectHeading]=useState({title:"",description:"",date:{}})
  const handleSave=()=>{
    setTodoItems((prev)=>{
      const temp=[]
      const arr=[...prev]
      arr.push(temp);
      return(arr)
    })
    setProjects([...projects,tempProjectHeading.title])
    setProjectHeading((prev)=>{
      return(
        [...prev,tempProjectHeading]
      )
    })
    
    setTimeout(() => {
      console.log(projectHeading)
    }, 2000);
    setClickedIndex(()=>{
      const temp=projectHeading.length;
      return(temp)
    })
    setShowTopicMenue(false);
  }
  const handleTitleChange=(e)=>{
    
    const inputValue=e.target.value;

      setTempProjectHeading({...tempProjectHeading,title:inputValue})
    }
    const handleDescriptionChange=(e)=>{
          const inputValue=e.target.value
          setTempProjectHeading({...tempProjectHeading,description:inputValue})
    }
    const handleDateChange=(e)=>{
      const inputValue=e.target.value
      setTempProjectHeading({...tempProjectHeading,date:{inputValue}})
    }
    
  return (
    <div id="new-component">
      {showTopicMenue ? <>
        <Input title="title"  onChange={handleTitleChange}/>
        <Input title="description" isText={true} onChange={handleDescriptionChange} />
        <Input title="date" type="date" onChange={handleDateChange} />
        
        
        <button className="button" onClick={handleSave}>save</button>
        <button className="button">cancel</button>
      </>
        : <Todo/>
        
        }

    </div>
  )
}