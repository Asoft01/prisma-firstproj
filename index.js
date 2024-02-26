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
    const newUser = await prisma.users.create({ data : req.body });
    res.json(newUser);
});


app.put("/:id", async (req, res) => { 
    const id = req.params.id; 
    const newAge = req.body.age;
    const updatedUser = await prisma.users.update({ 
        where: { id: parseInt(id) }, 
        data : { age : newAge }, 
     });
    res.json(updatedUser);
});

app.listen(3001, () => console.log(`Server running on port ${3001}`)); 