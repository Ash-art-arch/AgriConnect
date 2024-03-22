import dotenv from "dotenv"
import { connectDB } from "./db/db.js"
import app from "./app.js"

dotenv.config({
    path: "./.env"
})

connectDB()
.then(() => {
    
    const port = process.env.PORT || 3000

    app.on("err", (error) => {
        console.log(error || "Server not created!");
    })
    app.listen(port, () => {
        console.log(`Server is listening on port ${port}`);
    })
})
.catch((error) => {
    console.log(error || "Something went wrong while receiving the response!")
})