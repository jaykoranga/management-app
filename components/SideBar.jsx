import { useContext } from "react";
import {MyContext} from '../src/App'

export default function SideBar({setShowNewComponent}){
    const {handleProjectClicks}=useContext(MyContext);
    const {showTopicMenue, setShowTopicMenue} = useContext(MyContext)
    const {todoItems, setTodoItems}=useContext(MyContext)
    const{projectHeading,setProjectHeading}=useContext(MyContext);
    const handleAddProject=()=>{
          setShowNewComponent(true);
          setShowTopicMenue(true);
    }
    const handleRemoveItem=(index)=>{
        setTodoItems((prev)=>{
            const temp=[...prev]
            temp.splice(index,1);
            return(temp)
        })
        setProjectHeading((prev)=>{
          const arr=[...prev]
          arr.splice(index,1);
          return(arr)
        })
        if(projectHeading.length===0){
            setShowTopicMenue(true)
          }
    }
    return(
        
        <div className="side-bar">
            <h2>Planner</h2>
            <button className="button-sidebar" onClick={handleAddProject}>+ add project</button>
            <ul>
                {projectHeading.map((element, index) => {
                    return (<li key={index}><section id="topic-heading-section"><button className="button-sidebar" onClick={()=>handleRemoveItem(index)}>X</button><button onClick={()=>handleProjectClicks(index)} className="button-sidebar">{element.title}</button ></section></li>)
                })}
            </ul>
        </div>
        
    )
}