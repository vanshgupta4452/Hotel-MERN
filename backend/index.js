const express = require("express");
const connectDB = require("./connect");
const userRouter = require("./routes/user");
const hotelRouter = require("./routes/hotel");
const bookingRouter = require("./routes/booking");
const cors = require("cors");
const cookieParser = require("cookie-parser"); // Fixed import
const { checkForAuthCookie } = require("./controller/authentication");

const app = express();
const PORT = 3000;

const url = "mongodb://127.0.0.1:27017/booking-app";
connectDB(url);

app.use(cors({
  origin: "http://localhost:5173", // Change to your frontend URL
  credentials: true, // ✅ This allows cookies to be sent
}));

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(checkForAuthCookie("token"));

app.use("/user", userRouter);
app.use("/hotel", hotelRouter);
app.use("/booking", bookingRouter);

app.get("/", (req, res) => {
  console.log("Cookies:", req.cookies); // ⬅️ Check if cookies are received
  res.json(req.user);
});

app.listen(PORT, () => {
  console.log(`This is your link http://localhost:${PORT}`);
});
