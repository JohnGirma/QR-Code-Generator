import { useState } from 'react';
import { Form ,Button} from 'react-bootstrap';
import './App.css';


function App() {
   const [name,setName]=useState("hi")
   const [size,setSize]=useState(0)
console.log(name)
function nameChange(e){
    setName(e.target.value)
}
function sizeChange(e){
  setSize(e.target.value)
}
function showTheQ(){
  const chart=`https://chart.googleapis.com/chart?cht=qr&chs=${size}&chl=${name}`
    chart
}
  
  return (
    
    <div className="App">
      <div>{name}</div>
      <div>{size}</div>
      

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
