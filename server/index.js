import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(express.json({ limit: "30mb", extended: "true" }));

app.use(express.urlencoded({ limit: "30mb", extended: "true" }));

app.use(cors());

app.get("/", (req, res) => {
  res.send("This is a stack overflow clone");
});

const PORT = process.env.PORT || 5000;

const Connection_URL =
  "mongodb+srv://Kiran7053779609:@377452Aa@cluster0.zn0ghje.mongodb.net/?retryWrites=true&w=majority";

try {
  mongoose.connect(Connection_URL, { useUnifiedTopology: true }).then(() =>
    app
      .listen(PORT, () => {
        console.log(`server running on port ${PORT}`);
      })
      .catch((error) => console.log("error"))
  );
} 
catch (error) {
  console.log("error");
}
