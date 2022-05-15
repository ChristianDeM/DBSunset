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

    
    console.log('Creando 1 usuario');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();