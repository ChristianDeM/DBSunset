

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

## Informacion de la base de datos. 
- Nombre
- Apellido
- Correo
- Correo
- Telefono
- Kilogramos recolectados
- Playa
- Estado


