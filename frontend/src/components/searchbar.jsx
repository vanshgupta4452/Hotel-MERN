import React, { useRef } from 'react'
import axios from 'axios';
const Searchbar = () => {
  const search=useRef()

  const submitSearch= async (event)=>{
    event.preventDefault();
    const searched={
      search:search.current.value
    }
    try {
      const response = await axios.post("http://localhost:3000/booking/search", searched);
      console.log("search successful", response.data);
      search.current.value = "";
      
     
    } catch (error) {
      console.error("Signup failed", error);
    }
  };
  

  return (
    <div class="container mt-5 w-50 h-150px">
    <div class="input-group h-100">
      <form onSubmit={submitSearch}>
        <input type="text" class="form-control " ref={search} placeholder="Search..." aria-label="Search"/>
        <button class="btn btn-primary " type="submit">Search</button>
      </form>  
    </div>
</div>

  )
}

export default Searchbar