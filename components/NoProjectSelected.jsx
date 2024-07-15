
export default function NoProjectSelected({setShowNewComponent}){
    const handleClick=()=>{
        setShowNewComponent(true);
    }
    return(
        <div className="no-project-selected">
            <img src="logo.png" style={{width:"30vw"}} />
            <h2>nothing to plan </h2>
            <p>
                <button style={{border:"none" ,font:"monospace",cursor:"pointer",justifyContent:"center",alignItems:"center"}} onClick={handleClick}>click to add new project</button>
            </p>
        </div>
    )
}