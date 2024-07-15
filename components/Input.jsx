export default function Input({isText,title ,...props}){
    return(
      <section className="input-section">
      <label htmlFor="">{title}</label>
      {isText? <textarea {...props}/>:<input {...props} />}
      </section>
    )
}
