
import express from "express";

const app = express();

const PORT = 3000;

// setting view engine to EJS
app.set("view engine", "ejs");

// Serve static files from public
app.use(express.static("public"));

// defining our routes
app.get("/", (req, res) => {
  res.render("index", {
    name: "Oluwatobi Adelabu",
    title: "Backend Developer",
    bio: "I build APIs and backend systems using Node.js, Express, and MongoDB. I am passionate about creating efficient and scalable applications.",
  });
});

// starting our server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});