const { Router } = require("express");
const jwt = require("jsonwebtoken");

const booking = require("../model/booking"); 

const Hotel = require("../model/hotel");
const router = Router();

const authenticateUser = (req, res, next) => {
  const token = req.cookies.token; 
  console.log("Received Cookies:", req.cookies.token);
  const secretKey = 'abcde12345';
  if (!token) {
    return res.status(401).json({ message: "Unauthorized: Please log in" });
  }

  try {
    const decoded = jwt.verify(token,secretKey);
    req.user = decoded; 
    
    next(); 
  } catch (error) {
    return res.status(403).json({ message: "Invalid token, authentication failed" });
  }
};


router.post("/book", authenticateUser, async (req, res) => {
  const {hotel,checkInDate,checkOutDate,totalPrice,paymentStatus} = req.body;
  const id="67bbfaf9f0b473ffc9232e34";

 

  try {
    const selectedHotel = await Hotel.findById(id);
    

    if (!selectedHotel) {
      return res.status(404).json({ message: "Hotel not found" });
    }

    if (selectedHotel.roomsAvailable ===0) {
      return res.status(400).json({ message: "No rooms available" });
    }
   
    console.log("req id",req.user._id)
    const newBooking = await booking.create({
      user: req.user._id, 
      hotel:hotel,
      checkOutDate:checkOutDate,
      checkInDate:checkInDate,
      totalPrice:totalPrice,
      paymentStatus:paymentStatus,
    });
    
    console.log("req id",req.user._id)

    await Hotel.findOneAndUpdate({name:hotel}, {
      $inc: { roomsAvailable: -1 },
    });

    res.status(201).json({ message: "Booking successful", booking: newBooking });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

router.post("/search", async(req,res)=>{
     const {search}=req.body
    //  if(!search){
    //   return{message:"inavlid search"}
    //  }
     const hotelsearched= await Hotel.find({location:{ $regex: new RegExp(search, "i") } })
     console.log(hotelsearched) 
     res.status(200).json(hotelsearched);


}) 
module.exports = router;


