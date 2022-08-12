import { useState } from 'react';
import './App.css';


function App() {
   const [name,setName]=useState("")
   const [size,setSize]=useState(0)

  return (
    
    <div className="App">
      
    <select class="form-select" aria-label="Default select example">
      <option selected>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  <div class="row mb-3">
      <label for="colFormLabel" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
        <input type="email" class="form-control" id="colFormLabel" placeholder="col-form-label">
  </div>
</div>

    </div>
  );
}

export default App;
