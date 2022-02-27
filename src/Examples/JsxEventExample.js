import React from 'react'
import Content from '../Components/Content'

let name ="Bu günleri de görecek miydik!!!"
const hello= () => {
    alert("Panayır var gel. ")
}



function JsxEventExample(props) {
  return (
    <>
        <span>{name}</span>
        <hr></hr>
        <br></br>
        <button onClick={() => hello()}> Gel Gel !! </button>
       <button onClick={() => props.add()}> Sepete Ekle !</button>
    </>
  )
}

export default JsxEventExample