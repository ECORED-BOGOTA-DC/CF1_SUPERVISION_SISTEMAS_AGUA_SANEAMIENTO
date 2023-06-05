export default {
  global: {
    componenteFormativo: 'Planeación de la toma de muestras',
    descripcionCurso:
      'En este componente formativo se identificarán los términos, técnicas y métodos necesarios para el desarrollo del primer resultado de aprendizaje, por tanto, se prepara al aprendiz para la planificación de acciones de toma de muestras de agua de acuerdo con normas técnicas y protocolos de ensayo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'El agua y su calidad',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Importancia del alistamiento de toma de muestras',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Bases conceptuales de muestreo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Tipos y técnicas de muestreo',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Tamaño de la muestra',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Tipos de ensayos',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Puntos de tomas de muestras',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Partes del plan de muestreo',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Instrumentos de laboratorio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Recipientes, reactivos e insumos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Equipos y herramientas',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Capacitación y SST en muestreo',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Bases conceptuales de muestreo',
      referencia:
        'Instituto Nacional de Salud. (2011). <i>Manual de instrucciones para la toma, preservación y transporte de muestras de agua de consumo humano.</i> Instituto Nacional de Salud.',
      tipo: 'Manual',
      link:
        'https://drive.google.com/open?id=11Q4qkut-dfB9QSuJZ-MJHg10Lq9_HPZ4',
    },
    {
      tema: 'Bases conceptuales de muestreo',
      referencia:
        'Icontec. (1995). Norma técnica colombiana gestión ambiental - Calidad del agua muestreo. Técnicas generales de muestreo.',
      tipo: 'NTC 5667-2',
      link:
        'https://drive.google.com/open?id=1FYVXa1e4cvoZtsEx0ZIdICJoQ3jS74N6',
    },
    {
      tema: 'Bases conceptuales de muestreo',
      referencia:
        'Ministerio de Ambiente, Vivienda y Desarrollo Territorial. (2007). Resolución 2115.',
      tipo: 'Resolución',
      link:
        'https://drive.google.com/file/d/1yo3H6bvAPWuhpUuEaisZwke6U0DJIfQN/view',
    },
    {
      tema: 'Capacitación y SST en muestreo',
      referencia:
        'Ministerio de Ambiente, Vivienda y Desarrollo Territorial, (2008), Resolución 0811. ',
      tipo: 'Resolución',
      link:
        'https://www.ins.gov.co/sivicap/Documentacin%20SIVICAP/2008%20Resoluci%C3%B3n%200811%20Puntos%20de%20muestreo.pdf',
    },
    {
      tema: 'Importancia del alistamiento de toma de muestras',
      referencia:
        'Sedepal, (2018). Técnicas de muestreo de aguas residuales. [Video]. YouTube.',
      tipo: 'Vídeo',
      link: 'https://www.youtube.com/watch_popup?v=JBu6RQ1QMD0',
    },
    {
      tema: 'Importancia del alistamiento de toma de muestras',
      referencia:
        'Universidad de Antioquia, (2020). metodología para realizar un muestreo integrado en un río. [Video]. YouTube.',
      tipo: 'Vídeo',
      link: 'https://www.youtube.com/watch_popup?v=UOBmZqSftJY',
    },
    {
      tema: 'Instrumentos de laboratorio',
      referencia:
        'Sociedad Americana de Química. (2002). Seguridad en laboratorios químicos académicos. Volumen 1.',
      tipo: 'Libro',
      link:
        'https://drive.google.com/open?id=1-0DBW0V7b86svVyc35atqrHHdsMOyW5u',
    },
  ],
  glosario: [
    {
      termino: 'Agua potable',
      significado:
        'es aquella que, por cumplir las características físicas, químicas y microbiológicas, en las condiciones señaladas en el presente decreto y demás normas que la reglamenten, es apta para consumo humano. Se utiliza en bebida directa, en la preparación de alimentos o en la higiene personal (Decreto 1575, 2007, p.1).',
    },
    {
      termino: 'Análisis físico y químico del agua',
      significado:
        'son aquellos procedimientos de laboratorio que se efectúan a una muestra de agua para evaluar sus características físicas, químicas o ambas (Resolución 2115, 2007, p.1).',
    },
    {
      termino: 'Cuerpos o cursos de agua',
      significado:
        'son las aguas corrientes superficiales y subterráneas, lagos, lagunas, ciénagas, manantiales, humedales, embalses de formación natural o artificial, chucuas o madre vieja o antiguos cauces con flujos estacionales, esteros, bahías, lagunas costeras, golfos y las aguas marinas. (Ideam, s.f.).',
    },
    {
      termino: 'Muestra',
      significado:
        'toma puntual de agua en los puntos de muestreo concertados, que refleja la composición física, química y microbiológica representativa del momento, para el proceso de vigilancia de la autoridad sanitaria (INS, 2011, p.9).',
    },
    {
      termino: 'Término',
      significado: 'Texto de la definición',
    },
    {
      termino: 'Puntos de muestreo en red de distribución',
      significado:
        'son aquellos sitios concertados y materializados con dispositivos de toma, donde se realiza la recolección de la muestra de agua para la vigilancia y el control (Resolución 0811, 2008).',
    },
    {
      termino: 'Representatividad',
      significado:
        'lapso de 10 minutos, dentro de los cuales se toma la muestra y contramuestra de agua en el dispositivo instalado en el sitio de monitoreo concertado entre vigilancia y control (INS, 2011, p.9).',
    },
    {
      termino: 'Traza',
      significado:
        'es una cantidad mínima de una característica química encontrada en el agua analizada de la muestra o contramuestra tomada (INS, 2011, p.9). ',
    },
  ],
  referencias: [
    {
      referencia:
        'Ferro, J., (2020). <i>Perito en salud medioambiental.</i> [Ebook]. ',
      link:
        'https://books.google.com.co/books?id=OirKDwAAQBAJ&printsec=frontcover&hl=es&source=gbs_ge_summary_r&cad=0#v=onepage&q&f=false',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación [Icontec]. (1995). NTC-ISO 5667-2 - <i>Gestión ambiental. Calidad del agua. Muestreo. Técnicas generales de muestreo.</i>',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación [Icontec]. (1995). NTC-ISO 5667-1 - <i>Calidad del Agua. Muestreo. Directrices para el diseño de programas de muestreo.</i>',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación [Icontec]. (2004). NTC-ISO 5667-3- <i>Calidad del Agua. Muestreo. Parte 3: Directrices para la Preservación y Manejo de Muestras.</i>',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación [Icontec]. (2015). NTC-ISO 6151 - <i>Calidad del Agua. Muestreo para análisis microbiológico.</i>',
      link: '',
    },
    {
      referencia:
        'Instituto de hidrología, meteorología y estudios ambientales [Ideam]. (2014). Guía para el monitoreo de vertimientos de aguas superficiales y subterráneas.',
      link: '',
    },
    {
      referencia:
        'Instituto de hidrología, meteorología y estudios ambientales [Ideam]. (s.f.). Glosario - Atención y participación ciudadana. Recuperado el 27 de mayo de 2020 de',
      link:
        'http://www.ideam.gov.co/web/atencion-y-participacion-ciudadana/glosario',
    },
    {
      referencia:
        'Instituto de investigaciones marinas y costeras [Invemar]. (2003). Manual de técnicas analíticas para la determinación de parámetros fisicoquímicos y contaminantes marinos. Aguas sedimentos y organismos. Cargraphics- Impresión digital.',
      link:
        'http://www.invemar.org.co/redcostera1/invemar/docs/7010manualTecnicasanaliticas..pdf',
    },
    {
      referencia:
        'Instituto Nacional de Salud [INS]. (2011). Manual de instrucciones para la toma, preservación, transporte de muestras de agua para consumo humano para análisis de laboratorio. ISBN 978-958-13-0147-8.',
      link: 'https://www.ins.gov.co/sivicap/Documentacin%20SIVICAP',
    },
    {
      referencia:
        'Instituto Nacional de Tecnología Agropecuaria [INTA]. (2011). Protocolo de muestreo, transporte y conservación de muestras de agua con fines múltiples. Argentina. ',
      link:
        'https://inta.gob.ar/sites/default/files/script-tmp-protocolo_de_muestreo_de_aguas_inta.pdf',
    },
    {
      referencia:
        'Ministerio de Protección Social [MPS] y Ministerio de Ambiente Vivienda y Desarrollo Territorial [Mavdt]. (2008). Resolución 0811 de 2008 “Por medio del cual se definen los lineamientos a partir de los cuales la Autoridad Sanitaria y las Personas Prestadoras, concertadamente definirán en su área de influencia los lugares y puntos de muestreo para el control y la vigilancia de la calidad del agua para consumo humano en la red de distribución.',
      link: 'http://www.minvivienda.gov.co/ResolucionesAgua/0811-%202008.pdf',
    },
    {
      referencia:
        'Servicio Geológico de los Estados Unidos [USGS]. (2000). <i>Manual de campo interinstitucional para la recolección de datos sobre la calidad del agua.</i> ',
      link: 'https://pubs.usgs.gov/of/2000/ofr00-213/manual_sp/collect.html',
    },
    {
      referencia:
        'Sociedad Americana de Química. (2013). <i>Seguridad en laboratorios de química (7ma impresión, Volumen 1).</i> ISBN 0-8412-7412-6.',
      link: '',
    },
    {
      referencia:
        '<i>Standard Methods For the Examination of Water and Wastewater.</i> (2017). 960 Samples. Recuperado el 26 de mayo de 2020. ',
      link: 'https://www.standardmethods.org/doi/abs/10.2105/SMWW.2882.184',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Morales',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Xiomara Becerra Aldana',
          cargo: 'Instructora Ambiental',
          centro: 'Centro de Gestión Industrial',
        },
        {
          nombre: 'Lubin Andrés Hernández Sanabria',
          cargo: 'Instructor',
          centro: 'Centro de Gestión Industrial',
        },
        {
          nombre: 'Jesús Ricardo Arias Munevar',
          cargo: 'Instructor',
          centro: 'Centro de Gestión Industrial',
        },
        {
          nombre: 'Javier Ricardo Luna Pineda',
          cargo: 'Diseñador Instruccional',
          centro: 'Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Silvia Milena Sequeda Cárdenas',
          cargo: 'Evaluador Instruccional',
          centro: 'Centro de diseño y metrología',
        },
        {
          nombre: 'Rafael Neftali Lizcano Reyes',
          cargo: 'Asesor Pedagógico',
          centro: 'Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Martha Isabel Martínez Vargas',
          cargo: 'Productora audiovisual',
          centro: 'Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Gloria Amparo López Escudero',
          cargo: 'Adecuador Instruccional',
          centro:
            'Centro de gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Asesor metodológico',
          centro:
            'Centro de gestión de Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Rey',
          cargo: 'Diseñador web',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Manuel Felipe Echavarria Orozco',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Validación de contenidos accesibles',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
