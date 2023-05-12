<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row 
      p En este componente se identificarán los términos, técnicas y métodos necesarios para la planificación de acciones de toma de muestras de agua de acuerdo con normas técnicas y protocolos de ensayo. 

      p La organización de un proceso de toma de muestras es elemental para garantizar que los resultados de dicha actividad no sean alterados por agentes externos al recurso a evaluar,  este proceso debe realizarse partiendo de la aplicabilidad de conceptos claros sobre los instrumentos de laboratorio, las muestras y la capacitación idónea que debe tener el personal que realice la actividad.

      p Se abordarán tres temáticas que aportarán bases concretas en el proceso de programación de muestreo de agua, los cuáles son:

    .row.mt-5
      .col-4
        figure
          img(src='@/assets/curso/temas/introduccion/img1.png', alt='alt')  
      .col-8.p-4.bg1-intro
        .row.justify-content-center.align-items-center 
          .col-10
            p <b>Instrumentación de laboratorio:</b> elementos de vidrio, de plástico, conceptos de tomas físicas, químicas y microbiológicas, instrumentación y características del sitio de trabajo.

            p <b>Bases conceptuales de muestreo:</b> tipos, técnicas de muestreo, preservación, conservación, transporte y almacenamiento. Tamaño de la muestra, tipos de ensayos y puntos de toma de muestra, programa de muestreo.

            p <b>Capacitación:</b> plan de capacitación, seguridad y salud en el trabajo para el personal para la recolección de muestras en campo.

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
