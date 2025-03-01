import React, { useRef } from "react";
import axios from "axios";
const Hotelregister = () => {
  const hotelNameRef = useRef();
  const locationRef = useRef();
  const descriptionRef = useRef();
  const imagesRef = useRef();
  const amenitiesRef = useRef();
  const priceRef = useRef();
  const roomsAvailableRef = useRef();

  // Handle form submission
  const handleSubmit =  async(event) => {
    event.preventDefault();

    const hotelData = {
      name: hotelNameRef.current?.value,
      location: locationRef.current?.value,
      description: descriptionRef.current?.value,
      amenities: amenitiesRef.current.value.split(",").map((a) => a.trim()),
      price: priceRef.current?.value ,
      roomsAvailable: roomsAvailableRef.current?.value,
      images:imagesRef.current.files[0],

      
      
    };

    console.log("Hotel Data Submitted:", hotelData);
    try {
      const response = await axios.post("http://localhost:3000/hotel/addhotel", hotelData);
      console.log("register successful", response.data);
    } catch (error) {
      console.error("register failed",  error.message);
    }
      
    

    

  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4 color">
        <h2 className="text-center mb-4">Add Hotel Information</h2>
        <form id="hotelForm" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Hotel Name</label>
            <input type="text" className="form-control color" ref={hotelNameRef} required />
          </div>

          <div className="mb-3">
            <label className="form-label">Location</label>
            <input type="text" className="form-control color" ref={locationRef} required />
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea className="form-control color" rows="3" ref={descriptionRef}></textarea>
          </div>

          <div className="mb-3">
            <label className="form-label">Upload Image</label>
            <input type="file" className="form-control color" ref={imagesRef} accept="image/*" />
          </div>

          <div className="mb-3">
            <label className="form-label">Amenities (comma-separated)</label>
            <input type="text" className="form-control color" ref={amenitiesRef} />
          </div>

          <div className="mb-3">
            <label className="form-label">Price per Night ($)</label>
            <input type="number" className="form-control color" ref={priceRef} required />
          </div>

          <div className="mb-3">
            <label className="form-label">Rooms Available</label>
            <input type="number" className="form-control color" ref={roomsAvailableRef} required />
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary">Submit Hotel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hotelregister;
