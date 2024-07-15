export default function MainComponent({title,description,date}){
    return(
        <div>  
        <h2>{title}</h2>
        <p>
            {description}
        </p>
        <p>
            created on {date}
        </p>
        
        </div>
        
    )
    
}