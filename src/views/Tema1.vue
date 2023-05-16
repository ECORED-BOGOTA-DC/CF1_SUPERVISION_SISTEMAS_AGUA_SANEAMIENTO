<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 El agua y su calidad

    .row.mt-5
      figure
        img(src='@/assets/curso/temas/tema1/img1.png', alt='alt')  

    .row.mt-5.justify-content-center.align-items-center
      .col-lg-10
        .row.justify-content-center.align-items-center.bg1-tema1
          .col-6.col-lg-2
            figure
              img(src='@/assets/curso/temas/tema1/img2.png', alt='alt')  
          .col-11.col-lg-10
            p Generalmente, en el diario vivir se realizan actividades que tienen una incidencia en el ambiente, bien sea porque parten del uso y aprovechamiento de un recurso o por que dicha actividad genera una modificación de un recurso natural existente; Sin embargo, son estas acciones cotidianas las que brindan en gran medida un conocimiento previo sobre la naturaleza, en este caso el recurso hídrico y su importancia.
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
