import SideBar from "../components/SideBar";

import { createContext, useContext, useState,useEffect } from "react";

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
  
  useEffect(() => {
    const storedProjectHeadings = window.localStorage.getItem('project-key');
    if (storedProjectHeadings.length!=0) {
      setProjectHeading(JSON.parse(storedProjectHeadings));
    }
  }, []);

  useEffect(() => {
    const storedTodoItems = window.localStorage.getItem('todo-key');
    if (storedTodoItems.length!=0) {
      setTodoItems(JSON.parse(storedTodoItems));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('project-key', JSON.stringify(projectHeading));
  }, [projectHeading]);

  useEffect(() => {
    window.localStorage.setItem('todo-key', JSON.stringify(todoItems));
  }, [todoItems]);
   
  if(projectHeading.lenth!=0){
    
  }

  function clearAll(){
    window.localStorage.clear();
    setProjectHeading([]);
    setTodoItems([]);
    if(showNewComponent) setShowNewComponent(false);
    
    
  }
  function handleProjectClicks(index){
    console.log(`checking function index ${index} is clicked`)
    setClickedIndex(index);
    if(showNewComponent===false){
      setShowNewComponent(true);
      if(showTopicMenue) setShowTopicMenue(false);
    } 
 }
  return (
    <MyContext.Provider value={{projects,setProjects,projectHeading,setProjectHeading,showTopicMenue, setShowTopicMenue,handleProjectClicks,clickedIndex,setClickedIndex,todoItems, setTodoItems,clearAll}}>
    <main className="main">
      <SideBar setShowNewComponent={setShowNewComponent}/>
      
      {showNewComponent?<NewComponent/>: <NoProjectSelected setShowNewComponent={setShowNewComponent}/>}
      
    </main>
    </MyContext.Provider>
  );
}

export default App;
export {MyContext}
