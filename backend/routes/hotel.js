const {Router}=require("express")
const hotel=require("../model/hotel")
const router=Router()

router.post("/addhotel",async (req,res)=>{
  console.log(req.body)
  const {name,location,images,amenities,price,roomsAvailable}=req.body
  
  
  try {
    
    const existingHotel=await hotel.findOne({ name: name, location: location });

    if (existingHotel) {
      return res.status(400).json({ message: "Hotel already exists" });
    }

    
     const hoteldata=await hotel.create({
      name,
      location,
   
      amenities,
      price,
      roomsAvailable,
    });
    console.log(hoteldata)
    res.status(201).json({ message: "Hotel added successfully" });
  } catch (error) {
    res.status(500).json({ message: error, error: error.message });

  }
  
});


router.get("/hotel-detail", async (req, res) => {
  try {
    const hotels = await hotel.find(); 
    res.status(200).json(hotels);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

router.get("/hotel-detail/:_id",async (req,res)=>{
  try {
    const {_id}=req.params
    const hotels_info= await hotel.findById(_id)
    res.status(200).json(hotels_info);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
})


module.exports=router

