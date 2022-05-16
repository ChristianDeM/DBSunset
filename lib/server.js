const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

// Require para usar Prisma
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const cors = require("cors");
const corsOption={
    origin:"http://localhost:8080"
};
app.use(cors(corsOption));


app.get('/', (req, res) => {
  res.json({message: 'alive'});
});

app.get('/usuario', async (req, res) => {
    const alluser =  await prisma.usario.findMany({});
    res.json(alluser);
  });

  app.post('/usuario', async (req, res) => {
    const usario = {
        Nombre: req.body.Nombre,
        Apellido: req.body.Apellido,
        Correo: req.body.Correo,
        Telefono: req.body.Telefono,
        Kilos: req.body.Kilos,
        Playa: req.body.Playa,
        Estado: req.body.Estado,
     };
    const message = 'Usuario creado.';
    await prisma.usario.create({data: usario});
    return res.json({message});
  });


  app.put('/usuario/:id', async (req, res) => {
    const id = parseInt(req.params.id);
  
    await prisma.usario.update({
      where: {
        id: id
      },
      data: {
        Nombre: req.body.Nombre
      }
    })
  
    return res.json({message: "Actualizado correctamente"});
  });

  app.delete('/usuario/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    await prisma.usario.delete({where: {id: id}});
    return res.json({message: "Eliminado correctamente"});
  });

app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});