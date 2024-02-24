const express = require('express'); 
const app = express(); 
const { PrismaClient } = require("@prisma/client");
app.use(express.json()); 

const prisma = new PrismaClient(); 

app.use(express.json());

app.get("/", async (req, res) => {
    const allUsers = await prisma.users.findMany();
    res.json(allUsers);
});

app.post("/", async (req, res) => {
    
    const allUsers = await prisma.users.findMany();
    res.json(allUsers);
});

app.listen(3001, () => console.log(`Server running on port ${3001}`)); 