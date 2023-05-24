<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Importancia del alistamiento de toma de muestras

    .row.justify-content-center.align-items-center 
      .col-8.col-lg-3(data-aos="fade-up-right")
        figure.mb-3
          img(src='@/assets/curso/temas/tema2/img1.png', alt='alt')  
      .col-lg-9(data-aos="fade-up-left")
        p Las principales razones de la importancia del alistamiento de las tomas de muestras tienen que ver con la necesidad de verificar si se cuenta con todos los implementos para lograr identificar la calidad del recurso objeto de análisis, bien sea cuencas de agua dulce, fuentes de agua salada, agua para consumo humano y la estimación de los flujos de contaminantes y nutrientes vertidos a los ríos o aguas subterráneas, lagos y océanos o a través de fronteras internacionales.

        p Debido a que el recurso hídrico tiene gran cantidad de usos, el alistamiento debe reflejar no solo las necesidades de equipos, instrumentación y reactivos, sino también incluir información de los diferentes usuarios involucrados, de acuerdo con el Instituto de Hidrología, Meteorología y Estudios Ambientales [IDEAM], (2017), como se muestra a continuación:

    .row.mt-5(data-aos="fade-down")
      SlyderF(columnas="col-lg-6 col-xl-3")
        .tarjeta.color-acento-botones.p-4.bg-tarjeta
          .row.justify-content-center.mb-3
            .col-11
              img(src='@/assets/curso/temas/tema2/img2.png' alt='AvatarTop')

          p.text-center.font-color Las posibles variables químicas o biológicas presentes en el agua que puedan generar un deterioro en el recurso.

        .tarjeta.color-acento-botones.p-4.bg-tarjeta
          .row.justify-content-center.mb-3
            .col-11
              img(src='@/assets/curso/temas/tema2/img3.png' alt='AvatarTop')
 
          p.text-center.font-color La relación existente entre la calidad y la cantidad de agua en el cuerpo de agua a estudiar.

        .tarjeta.color-acento-botones.p-4.bg-tarjeta
          .row.justify-content-center.mb-3
            .col-11
              img(src='@/assets/curso/temas/tema2/img4.png' alt='AvatarTop')

          p.text-center.font-color El establecimiento de límites permisibles, teniendo en cuenta normatividad aplicable a la región.

        .tarjeta.color-acento-botones.p-4.bg-tarjeta
          .row.justify-content-center.mb-3
            .col-11
              img(src='@/assets/curso/temas/tema2/img5.png' alt='AvatarTop')

          p.text-center.font-color Observación histórica de la afectación de la calidad del agua por procesos naturales.

        .tarjeta.color-acento-botones.p-4.bg-tarjeta
          .row.justify-content-center.mb-3
            .col-11
              img(src='@/assets/curso/temas/tema2/img6.png' alt='AvatarTop')

          p.text-center.font-color La capacidad del cuerpo de agua para asimilar el incremento de vertimientos puntuales sin causar altos niveles de contaminación.

        .tarjeta.color-acento-botones.p-4.bg-tarjeta
          .row.justify-content-center.mb-3
            .col-11
              img(src='@/assets/curso/temas/tema2/img7.png' alt='AvatarTop')
 
          p.text-center.font-color Las comunidades cercanas a la zona.

        .tarjeta.color-acento-botones.p-4.bg-tarjeta
          .row.justify-content-center.mb-3
            .col-11
              img(src='@/assets/curso/temas/tema2/img8.png' alt='AvatarTop')

          p.text-center.font-color Si han existido estrategias de control y de las acciones de gestión en el manejo de la calidad del agua.

        .tarjeta.color-acento-botones.p-4.bg-tarjeta
          .row.justify-content-center.mb-3
            .col-11
              img(src='@/assets/curso/temas/tema2/img9.png' alt='AvatarTop')

          p.text-center.font-color Si existe algún riesgo asociado a delincuencia o violencia que pueda afectar la toma de la muestra.

            

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
