

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
``
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
        Telefono: '22222222',
        Kilos: '10',
        Estado: 'Chachalacas',
        Nombre: 'Veracruz',
      },
    });

    
    console.log('Creando 1 usuarios');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();
``

## Informacion de la base de datos. 
- Nombre
- Apellido
- Correo
- Correo
- Telefono
- Kilogramos recolectados
- Playa
- Estado


