// ============================================================
// DATOS DEL PIPELINE DE VENTAS — Account One 2026
// ============================================================
// Este archivo contiene TODA la data del pipeline.
// Para actualizar: edita directamente aquí y sube a GitHub.
//
// Cada lead tiene estos campos:
//   n     = Nombre del contacto
//   t     = Tipo de negocio
//   e     = Nombre de la empresa
//   temp  = Temperatura: "Caliente", "Tibio", "Frio"
//   demo  = Fecha del demo (formato: "2026-04-01")
//   f     = Etapa del funnel:
//           "Esperando Demo", "Esperando Cotización",
//           "Cotización Enviada", "Seguimiento",
//           "Cerrado Ganado", "Cerrado Perdido",
//           "No Show", "No Aplica"
//   impl  = Monto implementación (US$)
//   fe    = Monto facturación electrónica (US$)
//   serv  = Monto servicio recurrente (US$)
//   soft  = Monto software/licencia (US$)
//   desc  = Porcentaje de descuento (ej: 25 = 25%). Si no se pone, asume 25%.
//   notas = Notas libres
//
// ROAS mensual:
//   leads       = Cantidad de leads del mes
//   presupuesto = Presupuesto de marketing (US$)
//   ejecutado   = Monto realmente gastado (US$)
//   cierres     = Cantidad de cierres ganados
//   vendido     = Monto total vendido (US$)
//   cotizado    = Monto total cotizado (US$)
//   cpa         = Costo por adquisición (US$)
//   retorno     = Retorno neto (US$)
//   roas        = Retorno sobre inversión publicitaria (veces)
// ============================================================

// Cambia esta versión cada vez que actualices la data.
// Al detectar un cambio, la app recarga los datos desde aquí.
var DATA_VERSION = "2026-04-19b";

var SEED_PIPELINE = {
  enero: [
    {n:"Angel Sanchez",t:"Importador",e:"Grupo Sanchez Alegria",temp:"Caliente",demo:"2026-01-06",f:"Cerrado Perdido",impl:500,fe:500,serv:400,soft:54,desc:0,notas:""},
    {n:"Luz Goico",t:"4 Empresas",e:"Inmobiliaria Goico",temp:"Caliente",demo:"2026-01-13",f:"Cotización Enviada",impl:1500,fe:500,serv:0,soft:54,desc:0,notas:"Prioridad Inmobiliaria"},
    {n:"Nicole Suazo",t:"No Show",e:"Realtor",temp:"Caliente",demo:"2026-01-08",f:"No Show",impl:0,fe:0,serv:0,soft:0,desc:0,notas:""},
    {n:"Juan Saladin",t:"",e:"Fábrica de Tabaco",temp:"Frio",demo:"2026-01-08",f:"No Aplica",impl:0,fe:0,serv:0,soft:0,desc:0,notas:"No quiere cotización todavía"},
    {n:"Nelson Bautista",t:"Letreros y Alquiler de Impresoras",e:"Contador",temp:"Frio",demo:"2026-01-12",f:"Esperando Cotización",impl:0,fe:0,serv:0,soft:0,desc:0,notas:""},
    {n:"Angel Ventura",t:"No Show",e:"",temp:"Frio",demo:"2026-01-06",f:"No Show",impl:0,fe:0,serv:0,soft:0,desc:0,notas:""},
    {n:"Jose Larrauri",t:"No Show",e:"",temp:"Frio",demo:"2026-01-06",f:"No Show",impl:0,fe:0,serv:0,soft:0,desc:0,notas:""},
    {n:"Carlos Guillen",t:"",e:"",temp:"Frio",demo:"2026-01-12",f:"No Aplica",impl:0,fe:0,serv:0,soft:0,desc:0,notas:""},
    {n:"Laura Lezama",t:"Producciones Audiovisuales",e:"Shooting Lab",temp:"Caliente",demo:"2026-01-08",f:"Cotización Enviada",impl:1500,fe:500,serv:400,soft:54,desc:0,notas:""},
    {n:"Moises Delgado",t:"",e:"Empresa de reparación celulares",temp:"Frio",demo:"2026-01-08",f:"Cotización Enviada",impl:1500,fe:0,serv:0,soft:54,desc:0,notas:""},
    {n:"Oleica Jimenez",t:"Centro de Estimulación Infantil",e:"Psicología",temp:"Caliente",demo:"2026-01-01",f:"Cerrado Ganado",impl:500,fe:500,serv:400,soft:54,desc:0,notas:""},
    {n:"Sonia Rodriguez",t:"",e:"Cliente Adm",temp:"Caliente",demo:"2026-01-12",f:"Cotización Enviada",impl:500,fe:0,serv:0,soft:60,desc:0,notas:""},
    {n:"Elsa Torres",t:"Fabricación Muebles",e:"Elsa Decoraciones",temp:"Tibio",demo:"2026-01-20",f:"Esperando Demo",impl:0,fe:0,serv:0,soft:0,desc:0,notas:""},
    {n:"Laura Toral",t:"Mantenimiento Villas",e:"",temp:"Frio",demo:"2026-01-15",f:"No Aplica",impl:0,fe:0,serv:0,soft:0,desc:0,notas:""},
    {n:"Carmen Garcia",t:"",e:"Constructora Topropaint",temp:"Tibio",demo:"2026-01-15",f:"Cotización Enviada",impl:1500,fe:500,serv:0,soft:54,desc:0,notas:""},
    {n:"Nadime Bacha",t:"Agencia Influencer",e:"Dime 7",temp:"Caliente",demo:"2026-01-15",f:"Cerrado Ganado",impl:2000,fe:500,serv:0,soft:150,desc:0,notas:""},
    {n:"Carlos Espinal",t:"Tech Fiao' Colmado",e:"Altagracia Tech",temp:"Tibio",demo:"2026-01-19",f:"Cotización Enviada",impl:1500,fe:500,serv:400,soft:54,desc:0,notas:""},
    {n:"Sebastian Monterroza",t:"",e:"",temp:"Tibio",demo:"2026-01-20",f:"No Aplica",impl:0,fe:0,serv:0,soft:0,desc:0,notas:""},
    {n:"Nicole Aja",t:"Tienda de Accesorios",e:"Tete Store",temp:"Tibio",demo:"2026-01-22",f:"Esperando Cotización",impl:1500,fe:500,serv:0,soft:0,desc:0,notas:""},
    {n:"Sara de Jesus",t:"Restaurant",e:"La cocina de Sara",temp:"Tibio",demo:"2026-02-02",f:"Esperando Demo",impl:1500,fe:500,serv:0,soft:54,desc:0,notas:""},
    {n:"Marie Tic Tag",t:"Eventos y Materiales",e:"Tic Tag",temp:"Tibio",demo:"2026-01-22",f:"Cerrado Ganado",impl:2000,fe:500,serv:400,soft:54,desc:0,notas:""},
    {n:"Leinny Jimenez",t:"Venta de químicos",e:"Extra Química",temp:"Tibio",demo:"2026-01-26",f:"Cotización Enviada",impl:2000,fe:500,serv:0,soft:54,desc:0,notas:""},
    {n:"Massiel de Leon",t:"Publicidad",e:"Leonsit Media",temp:"Tibio",demo:"2026-01-26",f:"Cotización Enviada",impl:1500,fe:500,serv:0,soft:54,desc:0,notas:""},
    {n:"Darlyn Reyes",t:"",e:"",temp:"Tibio",demo:"2026-01-26",f:"No Aplica",impl:0,fe:0,serv:0,soft:0,desc:0,notas:""},
    {n:"Roxanna Gomez",t:"",e:"",temp:"Tibio",demo:"2026-01-28",f:"Esperando Demo",impl:0,fe:0,serv:0,soft:0,desc:0,notas:""},
    {n:"Lizardi Gonzalez",t:"Constructora",e:"Lidomi Constructora",temp:"Caliente",demo:"2026-01-26",f:"Cerrado Ganado",impl:2000,fe:500,serv:400,soft:54,desc:0,notas:""},
    {n:"Paloma Viajes Pat",t:"Agencia de Viajes",e:"Viajes Pat",temp:"Caliente",demo:"2026-01-29",f:"Cerrado Ganado",impl:1000,fe:500,serv:0,soft:0,desc:0,notas:""},
    {n:"Carolina Arbaje",t:"Firma de Abogados",e:"Distrito Legal",temp:"Caliente",demo:"2026-01-29",f:"Cerrado Ganado",impl:1000,fe:500,serv:0,soft:0,desc:0,notas:""}
  ],
  febrero: [
    {n:"Tess Amiel Medina",t:"Centro Cosmetólogo",e:"Tera Wellness & Aesthetic",temp:"Caliente",demo:"2026-02-02",f:"Seguimiento",impl:1500,fe:500,serv:400,soft:54,notas:""},
    {n:"Karina Inoa",t:"Alimento Equino",e:"Grupo Blanco",temp:"Caliente",demo:"2026-02-02",f:"Seguimiento",impl:2000,fe:500,serv:400,soft:54,notas:""},
    {n:"Deyanira",t:"",e:"",temp:"Frio",demo:"2026-02-03",f:"Cotización Enviada",impl:1500,fe:500,serv:0,soft:0,notas:""},
    {n:"Chaer Decoraciones",t:"Diseño de Muebles",e:"Chaer Decoraciones",temp:"Caliente",demo:"2026-02-03",f:"Cotización Enviada",impl:500,fe:0,serv:0,soft:0,notas:""},
    {n:"Sarah Wu",t:"Colegio",e:"Allegro",temp:"Tibio",demo:"2026-02-04",f:"Cotización Enviada",impl:1500,fe:500,serv:400,soft:54,notas:"Colegio Espacial Contabilidad Completa"},
    {n:"Noelle Herrera",t:"Estudio de Moda",e:"Noelle Herrera Designs",temp:"Caliente",demo:"2026-02-04",f:"Cerrado Perdido",impl:2000,fe:500,serv:400,soft:54,notas:""},
    {n:"Maria Fernanda Joa",t:"Alquiler para Eventos",e:"Joa Inversiones",temp:"Frio",demo:"2026-02-05",f:"Esperando Cotización",impl:2000,fe:500,serv:400,soft:54,notas:""},
    {n:"Phillip Escoto",t:"Electrónica",e:"Phillips Electronica",temp:"Caliente",demo:"2026-02-04",f:"Cerrado Ganado",impl:1160,fe:290,serv:0,soft:94,notas:""},
    {n:"Anyelin Pereyra",t:"Almacenes",e:"Giuliani Almacenes Diversos",temp:"Tibio",demo:"2026-02-03",f:"Cotización Enviada",impl:0,fe:0,serv:0,soft:0,notas:""},
    {n:"Mildred Leiva y Marcia Ureña",t:"Firma Arquitectos",e:"Ormarquitectos",temp:"Tibio",demo:"2026-02-03",f:"Cotización Enviada",impl:2000,fe:500,serv:0,soft:90,notas:""},
    {n:"Sara de Jesus Lazala",t:"Comida Empresarial",e:"D Sara Delicatessen",temp:"Tibio",demo:"2026-02-03",f:"Cotización Enviada",impl:2000,fe:500,serv:0,soft:54,notas:""},
    {n:"Victor Polanco",t:"Buzos de Barcos",e:"Caribe Divers Works",temp:"Tibio",demo:"2026-02-11",f:"Cotización Enviada",impl:2000,fe:500,serv:600,soft:54,notas:""},
    {n:"Lucia Sánchez",t:"Andamios",e:"Andamios y Encofrados del Caribe",temp:"Tibio",demo:"2026-02-10",f:"Cotización Enviada",impl:2000,fe:500,serv:0,soft:54,notas:""},
    {n:"Lucia Sánchez",t:"Grúas",e:"Grúas Dominicanas, Grudom",temp:"Caliente",demo:"2026-02-10",f:"Cotización Enviada",impl:2000,fe:500,serv:400,soft:54,notas:""},
    {n:"Johanna Simpson",t:"Salud",e:"CLC",temp:"Caliente",demo:"2026-02-12",f:"Cerrado Ganado",impl:0,fe:500,serv:0,soft:0,notas:""},
    {n:"Johanna Simpson",t:"Salud",e:"Vitalie",temp:"Caliente",demo:"2026-02-12",f:"Cerrado Ganado",impl:0,fe:500,serv:0,soft:0,notas:""},
    {n:"Rolando Fermin",t:"",e:"Isfar Group",temp:"Caliente",demo:"2026-02-12",f:"Cotización Enviada",impl:0,fe:500,serv:0,soft:54,notas:""},
    {n:"Rolando Fermin",t:"Agencia de Viajes",e:"Novalty Travel",temp:"Caliente",demo:"2026-02-12",f:"Cotización Enviada",impl:0,fe:500,serv:0,soft:54,notas:""},
    {n:"Tamara Finch",t:"",e:"Realtor",temp:"Caliente",demo:"2026-02-12",f:"Cotización Enviada",impl:2000,fe:500,serv:0,soft:54,notas:""},
    {n:"Leinny Jimenez",t:"Venta de químicos",e:"Extra Química",temp:"Caliente",demo:"2026-01-26",f:"Cerrado Ganado",impl:500,fe:0,serv:0,soft:54,notas:""},
    {n:"Stephany Hernandez",t:"Transporte Empresarial",e:"Transpriem",temp:"Caliente",demo:"2026-02-16",f:"Esperando Cotización",impl:1500,fe:500,serv:0,soft:54,notas:""},
    {n:"Alba Santana",t:"Empresa de Letreros",e:"",temp:"Caliente",demo:"2026-02-20",f:"Cotización Enviada",impl:0,fe:500,serv:0,soft:54,notas:""},
    {n:"Ricardo Santana",t:"Firma de Abogados",e:"",temp:"Caliente",demo:"2026-02-20",f:"Esperando Demo",impl:1500,fe:500,serv:0,soft:54,notas:""},
    {n:"Raúl Aristy",t:"",e:"",temp:"Caliente",demo:"2026-02-20",f:"Esperando Demo",impl:1500,fe:500,serv:0,soft:54,notas:""},
    {n:"Guillermo Mendez",t:"",e:"",temp:"Caliente",demo:"2026-02-20",f:"Esperando Demo",impl:1500,fe:500,serv:0,soft:54,notas:""}
  ],
  marzo: [
    {n:"Dilepsia Polanco",t:"Empresa de Embutidos",e:"",temp:"Tibio",demo:"",f:"Cotización Enviada",impl:0,fe:0,serv:0,soft:0,notas:"Envié correo el 12/03"},
    {n:"Ilis Vasquez",t:"Courrier",e:"Madre 13 Agencias",temp:"Caliente",demo:"",f:"Esperando Cotización",impl:0,fe:0,serv:0,soft:0,notas:"Pidió presupuesto y fecha"},
    {n:"Annalisa",t:"Empresa de Catering Pequeña",e:"",temp:"Caliente",demo:"2026-03-10",f:"Cotización Enviada",impl:750,fe:500,serv:400,soft:54,notas:"Dar seguimiento Lunes 16"},
    {n:"Alba Santana",t:"Letreros",e:"",temp:"Caliente",demo:"2026-03-10",f:"Cotización Enviada",impl:0,fe:500,serv:0,soft:54,notas:"Pagará mañana"},
    {n:"Lucia",t:"Mes pasado",e:"",temp:"Frio",demo:"",f:"Cotización Enviada",impl:0,fe:1000,serv:0,soft:108,notas:""},
    {n:"Angelo (Esposo Luz)",t:"",e:"Novus Paradigma",temp:"Caliente",demo:"2026-03-10",f:"Cotización Enviada",impl:0,fe:500,serv:0,soft:54,notas:"Dar seguimiento a final de mes"},
    {n:"Jennifer García",t:"",e:"Jennifer Garcia Beauty Center",temp:"Tibio",demo:"2026-03-10",f:"Cotización Enviada",impl:0,fe:500,serv:0,soft:54,notas:"Centro de Belleza, Microblading"},
    {n:"Ruby Polanco",t:"No Show",e:"",temp:"Frio",demo:"2026-03-11",f:"No Show",impl:0,fe:0,serv:0,soft:0,notas:""},
    {n:"Daniel Sanchez",t:"Manejo de propiedades",e:"Casa de",temp:"Caliente",demo:"2026-03-11",f:"Cotización Enviada",impl:0,fe:500,serv:0,soft:54,notas:"15 Propiedades que son 15 empresas"},
    {n:"Massiel Delgado",t:"RST Anual 2 Empresas",e:"",temp:"Tibio",demo:"2026-03-11",f:"Esperando Cotización",impl:0,fe:0,serv:0,soft:54,notas:"Paso Software"},
    {n:"Adris Cid",t:"",e:"Mia Vision TV",temp:"Tibio",demo:"2026-03-11",f:"Esperando Cotización",impl:0,fe:500,serv:0,soft:0,notas:""},
    {n:"Adris Cid",t:"",e:"Blue Vic Boutique",temp:"Tibio",demo:"2026-03-11",f:"Esperando Cotización",impl:0,fe:0,serv:0,soft:54,notas:""},
    {n:"Jonathan Romero",t:"",e:"",temp:"Tibio",demo:"2026-03-13",f:"Esperando Cotización",impl:0,fe:0,serv:0,soft:0,notas:"Agendó para el viernes 13/03"},
    {n:"Madre Janet Contreras",t:"Tenedoras de Propiedades",e:"",temp:"Tibio",demo:"",f:"Esperando Demo",impl:0,fe:0,serv:0,soft:0,notas:""},
    {n:"Carlos Moretta",t:"Oftálmologo",e:"",temp:"Tibio",demo:"",f:"Esperando Demo",impl:0,fe:0,serv:0,soft:0,notas:"Lead por Instagram"},
    {n:"Mary Gomez",t:"Constructora",e:"",temp:"Tibio",demo:"",f:"Esperando Demo",impl:0,fe:0,serv:0,soft:0,notas:"Hicimos primera demo, harán 2da"},
    {n:"Oscar de Leon",t:"Asesoría Turismo",e:"",temp:"Caliente",demo:"2026-03-13",f:"Cerrado Ganado",impl:0,fe:375,serv:0,soft:54,notas:""},
    {n:"Black Box",t:"Importación",e:"",temp:"Frio",demo:"",f:"Cotización Enviada",impl:0,fe:500,serv:0,soft:0,notas:""},
    {n:"Amelia Cespedes",t:"Distribución Arroz",e:"",temp:"Frio",demo:"2026-03-20",f:"No Show",impl:0,fe:0,serv:0,soft:0,notas:"Hablando por whatsapp"},
    {n:"Nikarlie",t:"No Prospectado",e:"",temp:"Frio",demo:"2026-03-24",f:"No Show",impl:0,fe:0,serv:0,soft:0,notas:"Hablando por whatsapp"},
    {n:"Elvyn Soa",t:"GPS",e:"",temp:"Frio",demo:"2026-03-24",f:"Cotización Enviada",impl:1500,fe:500,serv:400,soft:54,notas:"Colegio Espacial Contabilidad Completa"},
    {n:"Alicia Puello",t:"",e:"My Studio Club",temp:"Caliente",demo:"2026-03-26",f:"Cotización Enviada",impl:1500,fe:500,serv:0,soft:54,notas:"Firma de Contadores. Hija queriendo modernizar"},
    {n:"Yamile Ortiz Burgos",t:"",e:"Ortiz Burgos Contadores",temp:"Caliente",demo:"2026-03-26",f:"Cotización Enviada",impl:1125,fe:0,serv:400,soft:90,notas:"Firma de Abogados, lo ha intentado antes"},
    {n:"Eva Ortega",t:"",e:"Dior Legal Partners",temp:"Caliente",demo:"2026-03-27",f:"Cerrado Ganado",impl:500,fe:0,serv:250,soft:0,notas:""},
    {n:"Janet Contreras",t:"",e:"Inversiones Saclar",temp:"Caliente",demo:"2026-03-23",f:"Cerrado Ganado",impl:500,fe:0,serv:250,soft:0,notas:""},
    {n:"Janet Contreras",t:"",e:"Vista Catalina",temp:"Caliente",demo:"2026-03-23",f:"Cerrado Ganado",impl:0,fe:0,serv:0,soft:0,notas:""},
    {n:"Kumiko Kasahara",t:"",e:"",temp:"Frio",demo:"",f:"Esperando Demo",impl:0,fe:0,serv:0,soft:0,notas:""},
    {n:"Yilem Comunica",t:"",e:"",temp:"Caliente",demo:"2026-03-31",f:"Cerrado Ganado",impl:0,fe:0,serv:0,soft:0,notas:""}
  ],
  abril: [
    {n:"Raul Aristy",t:"Constructora",e:"Architectural & Civil",temp:"Caliente",demo:"2026-04-01",f:"Cerrado Ganado",impl:1500,fe:500,serv:0,soft:90,desc:25,notas:"Friday 10/04"},
    {n:"Igssel Santana",t:"Firma de Arquitectura",e:"Igsan",temp:"Caliente",demo:"2026-04-13",f:"Cerrado Ganado",impl:1500,fe:500,serv:400,soft:54,desc:25,notas:"Firma Puerto Plata. Quiere todo"},
    {n:"Keren Jerez",t:"Membresías RST",e:"Centro Adorartes SRL",temp:"Caliente",demo:"2026-04-16",f:"Cerrado Ganado",impl:1500,fe:500,serv:400,soft:54,desc:25,notas:"RST. Pago 50% ahora, 50% el 03 de Mayo"},
    {n:"Jima",t:"2da Empresa Paloma",e:"",temp:"Caliente",demo:"2026-04-01",f:"Cerrado Ganado",impl:0,fe:500,serv:0,soft:0,desc:0,notas:"2da Empresa Paloma"},
    {n:"Kumiko Kasahara",t:"K&G",e:"",temp:"Caliente",demo:"2026-04-01",f:"Cerrado Ganado",impl:0,fe:3074,serv:0,soft:0,desc:0,notas:"8 FE con 25% y 7 Adm Basic con 70% de Descuento"},
    {n:"Rosangela Padilla",t:"Firma de Arquitectura",e:"",temp:"Tibio",demo:"2026-04-01",f:"Cotización Enviada",impl:1500,fe:500,serv:0,soft:90,notas:""},
    {n:"Mireya Gonzalez",t:"Constructora",e:"",temp:"Tibio",demo:"2026-04-01",f:"Cotización Enviada",impl:1500,fe:500,serv:0,soft:90,notas:""},
    {n:"Yelissa Solano",t:"Firma de Arquitectura",e:"",temp:"Tibio",demo:"2026-03-31",f:"Esperando Demo",impl:0,fe:500,serv:0,soft:90,notas:"Hablando con contador para confirmar"},
    {n:"Denisse Salazar",t:"Firma de Arquitectura",e:"",temp:"Tibio",demo:"2026-03-31",f:"Esperando Demo",impl:0,fe:500,serv:0,soft:90,notas:"Hablando con contador para confirmar"},
    {n:"Raynel Marte",t:"Firma de Arquitectura",e:"",temp:"Caliente",demo:"2026-03-31",f:"Cotización Enviada",impl:0,fe:500,serv:0,soft:90,notas:"Monday 06/04"},
    {n:"Jessica Pitchan",t:"Firma de Arquitectura",e:"",temp:"Caliente",demo:"2026-04-06",f:"Cotización Enviada",impl:1500,fe:500,serv:0,soft:90,notas:"Firma Isaias 43. Motivar a empezar con FE"},
    {n:"Geovanna y Tatiana",t:"Firma de Arquitectura",e:"",temp:"Caliente",demo:"2026-04-06",f:"Cotización Enviada",impl:1500,fe:500,serv:0,soft:90,notas:"Quiere su 25%. Motivar a empezar con FE"},
    {n:"Jomny Johanna",t:"Firma de Asesoría en Procesos",e:"",temp:"Caliente",demo:"2026-04-06",f:"Cotización Enviada",impl:0,fe:500,serv:0,soft:90,notas:"Posible intercambio. Le interesa más FE"},
    {n:"Fausto Mejía",t:"",e:"",temp:"Frio",demo:"2026-04-06",f:"Esperando Demo",impl:1500,fe:500,serv:0,soft:90,notas:""},
    {n:"Nelson José",t:"",e:"",temp:"Frio",demo:"",f:"Esperando Demo",impl:0,fe:0,serv:0,soft:0,notas:""},
    {n:"Patricia Merca",t:"",e:"",temp:"Frio",demo:"",f:"Esperando Demo",impl:0,fe:0,serv:0,soft:0,notas:""},
    {n:"Kamila S Herrera",t:"2 Empresas Diseño y Construcción",e:"",temp:"Caliente",demo:"2026-04-13",f:"Esperando Cotización",impl:3000,fe:1000,serv:0,soft:216,notas:"Tiene socios, lo hablará esta tarde"},
    {n:"Gabriela Melendez",t:"Diseño y Redes",e:"",temp:"Caliente",demo:"2026-04-13",f:"Esperando Cotización",impl:0,fe:500,serv:0,soft:36,notas:"Empresa Pequeña"},
    {n:"Beatriz Khon",t:"",e:"",temp:"Frio",demo:"",f:"No Show",impl:0,fe:0,serv:0,soft:0,notas:""},
    {n:"Luz del Alba",t:"",e:"",temp:"Frio",demo:"",f:"No Show",impl:0,fe:0,serv:0,soft:0,notas:""},
    {n:"Sol Rojas",t:"Asesora Manufactura",e:"",temp:"Tibio",demo:"",f:"Esperando Cotización",impl:1500,fe:500,serv:0,soft:216,notas:""},
    {n:"Angela Martinez",t:"Realtor",e:"",temp:"Tibio",demo:"",f:"Esperando Cotización",impl:1500,fe:500,serv:400,soft:216,notas:""}
  ]
};

var SEED_ROAS = {
  enero:   {leads:28, presupuesto:600,  ejecutado:600,   cierres:6, vendido:11500, cotizado:34304,    cpa:100,    retorno:10900,  roas:19.17},
  febrero: {leads:25, presupuesto:495,  ejecutado:495,   cierres:4, vendido:2950,  cotizado:53440,    cpa:123.75, retorno:2455,   roas:5.96},
  marzo:   {leads:28, presupuesto:1000, ejecutado:950,   cierres:7, vendido:3806,  cotizado:17431.80, cpa:135.71, retorno:2856,   roas:4.01},
  abril:   {leads:22, presupuesto:1000, ejecutado:375,   cierres:5, vendido:8272,  cotizado:24560,    cpa:75,     retorno:7897,   roas:22.06}
};
