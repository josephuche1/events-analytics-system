import app from "./app";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
})

app.get("/", (req, res)=>{
    res.json({ message: "Backend Server is running🚀" });
});