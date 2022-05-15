

## pasos para este proyectos
## iniciando packet.json
`` npm init  ``
## instalando expres 
``npm install express --save-dev``

## instalando prisma
``npm install prisma --save-dev``

## iniciando prisma 
``npx prisma init``

## creando la base de datos con postgres
``create database Sunset;``

## creando model en prisma 
```
model Usario {
  id Int @id @default(autoincrement())
  Nombre String @unique
  Apellido String @db.VarChar(255)
  Correo String @db.VarChar(255)
  Telefono Int
  Kilos Int
  Playa String @db.VarChar(255)
  Estado String @db.VarChar(255)
  dateCreated DateTime @default(now())
  lastUpdated DateTime @updatedAt
}

```

## creando migrations de prsima 
``npx prisma migrate dev --name init ``


## creando  Seed.js
```
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const usuario = await prisma.usario.upsert({
      where: { Nombre: 'usuario' },
      update: {},
      create: {
        Nombre: 'usuario',
        Apellido: 'usuario',
        Correo: 'usuario@sunset.com',
        Telefono: 22222222,
        Kilos: 10,
        Estado: 'Chachalacas',
        Playa: 'Veracruz',
        
      },
    });

    
    console.log('Creando 1 usuario');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();

```
## Creando server.js

```
const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

// Require para usar Prisma
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

app.get('/', (req, res) => {
  res.json({message: 'alive'});
});

app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});

```

## server GET
```
app.get('/usuario', async (req, res) => {
    const alluser =  await prisma.usario.findMany({});
    res.json(alluser);
  });

```

## Informacion de la base de datos. 
- Nombre
- Apellido
- Correo
- Correo
- Telefono
- Kilogramos recolectados
- Playa
- Estado


