import SideBar from "../components/SideBar";
import Input from "../components/Input";
import { createContext, useContext, useState } from "react";
import Todo from "../components/Todo";
import NewComponent from "../components/NewComponent";
import NoProjectSelected from "../components/NoProjectSelected";
 const MyContext=createContext()
 

function App() {
  
  const [clickedIndex,setClickedIndex]=useState(-1)
  
  const [todoItems, setTodoItems] = useState([])
  const [showNewComponent,setShowNewComponent]=useState(false)
  const [projects,setProjects]=useState([])
  const [showTopicMenue, setShowTopicMenue] = useState(true)
  const [projectHeading,setProjectHeading]=useState([]);
  function handleProjectClicks(index){
    console.log(`checking function index ${index} is clicked`)
    setClickedIndex(index);
 }
  return (
    <MyContext.Provider value={{projects,setProjects,projectHeading,setProjectHeading,showTopicMenue, setShowTopicMenue,handleProjectClicks,clickedIndex,setClickedIndex,todoItems, setTodoItems}}>
    <main className="main">
      <SideBar setShowNewComponent={setShowNewComponent}/>
      
      {showNewComponent?<NewComponent/>: <NoProjectSelected setShowNewComponent={setShowNewComponent}/>}
      
    </main>
    </MyContext.Provider>
  );
}

export default App;
export {MyContext}
