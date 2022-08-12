import { useState,useEffect } from 'react';
import { Form ,Button} from 'react-bootstrap';
import axios from "axios"
import './App.css';


const App=()=> {
   const [name,setName]=useState("hi")
   const [size,setSize]=useState("100x100")
   const [images,setImages]=useState("")
console.log(name)
const nameChange=(e)=>{
    setName(e.target.value)
}
const sizeChange=(e)=>{
  setSize(e.target.value)
}
const showTheQ=()=>{
  getAllProduct()
}
const getAllProduct=async()=>{
      const result=await axios.get(`https://chart.googleapis.com/chart?cht=qr&chs=${size}&chl=${name}`).catch((error=>{
          console.log(error)
      }))
      // console.log(result.data)
      setImages(result.data)
      
      }
  // useEffect(()=>{
  //     getAllProduct()
  // },[])
  // console.log("from the store ",products)
   

  console.log(images)
  return (
    
    <div className="App">
      {/* <div>{name}</div> */}
      {/* <div>{size}</div> */}
      <img src={images} alt="joo"  />
      
    <img src="" alt=""  />
  <Form.Control value={name} onChange={nameChange} size="lg" type="text"  />
  <Form.Select size="lg" value={size} onChange={sizeChange}>
        <option>100x100</option>
        <option>150x150</option>
        <option>200x200</option>
        <option>250x250</option>
        <option>300x300</option>
      </Form.Select>
      <Button onClick={showTheQ}  as="input" type="submit" value="Submit"/>
</div>

    
  );
}

export default App;
