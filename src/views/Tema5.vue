<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Capacitación y SST en muestreo

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="flip-down")
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img1.svg')})`}"
          )(alt="Imágen decorativa")
          .bloque-texto-g__texto.p-4
            p.mb-0 Uno de los ejes estratégicos para realizar un proceso de toma y tratamiento de muestras acorde a la normatividad es el recurso humano que realizará esa función, el cual debe contar con las habilidades y competencias necesarias, estas mismas son definidas dentro de un instrumento de planeación denominado plan de capacitación.  

    separador
    #t_5_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
       h2 5.1 Formación y evaluación

    .row.mb-5
      p Para conocer la importancia de los procesos de capacitación y la normatividad a tener en cuenta, se presenta el siguiente video:
      
    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/1vjfOitYrck" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    separador
    #t_5_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
       h2 5.2 Seguridad y salud en el trabajo en muestreo

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4(data-aos="fade-right")
        figure.mb-4
          img(src='@/assets/curso/temas/tema5/img2.svg', alt='Imágen decorativa')

      .col-lg-8(data-aos="fade-left")
        p De acuerdo con la Sociedad Americana de Química (2003), en su publicación Seguridad en los laboratorios químicos académicos, prevenir accidentes de cualquier tipo en un laboratorio, es responsabilidad de todos los que usan este espacio de trabajo, por lo cual es necesario siempre una actitud cooperativa activa, es importante recordar que los accidentes que se pueden dar cuando se trabaja con insumos químicos bien sea dentro de un laboratorio o en pruebas de campo, suelen ser asociadas a:

        ul.lista-ul--color
          li 
            i.fas.fa-angle-right.color-vineta2
            | Actividades de indiferencia.      
          li 
            i.fas.fa-.fa-angle-right.color-vineta2
            | No utilizar el sentido común.
          li 
            i.fas.fa-.fa-angle-right.color-vineta2
            | No seguir instrucciones y cometer errores.

    .row.mb-5(data-aos="fade-left")
      p Cuando se menciona #[b “tomar un rol activo”] se hace referencia a:

    .row.justify-content-center.align-items-center.mb-5
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.tamano-tarjeta.p-3
          .tarjeta-numerada__numero
            .h2 1
          .row.justify-content-center
            .col-5
              figure.my-3
                img(src='@/assets/curso/temas/tema5/img3.svg', alt='Imágen decorativa')

          p.text-center Seguir las reglas de seguridad.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-botones.tamano-tarjeta.p-3
          .tarjeta-numerada__numero
            .h2 2
          .row.justify-content-center
            .col-5
              figure.my-3
                img(src='@/assets/curso/temas/tema5/img4.svg', alt='Imágen decorativa')

          p.text-center No jugar bromas mientras realiza actividades de toma de muestras o de laboratorio.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.tamano-tarjeta.p-3
          .tarjeta-numerada__numero
            .h2 3
          .row.justify-content-center
            .col-5
              figure.my-3
                img(src='@/assets/curso/temas/tema5/img5.svg', alt='Imágen decorativa')

          p.text-center Familiarizarse con los equipos de seguridad.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.tamano-tarjeta.p-3
          .tarjeta-numerada__numero
            .h2 4
          .row.justify-content-center
            .col-5
              figure.my-3
                img(src='@/assets/curso/temas/tema5/img6.svg', alt='Imágen decorativa')

          p.text-center Siempre indagar antes sobre los peligrosos si va a manejar sustancias químicas.


    .row.mb5
      p Para realizar la actividad de toma de muestras de aguas se debe garantizar que las personas cuenten con unos implementos de seguridad mínimos:

    .row.justify-content-center.align-items-center.mb-5
      SlyderF(columnas="col-lg-6 col-xl-4")
        .tarjeta.color-acento-botones.p-4.bg-tarjeta
          .row.justify-content-center.mb-3
            .col-12
              img(src='@/assets/curso/temas/tema5/img7.svg' alt='Imágen decorativa')

              .tarjeta-naranja.px-4.py-1.mt-3
                h4.texto-blanco.text-center Cofia

          p.text-center.font-color Si tiene el cabello largo, manténgalo recogido durante el desarrollo de la práctica. Use la cofia si el instructor lo considera necesario.

        .tarjeta.color-acento-botones.p-4.bg-tarjeta
          .row.justify-content-center.mb-3
            .col-12
              img(src='@/assets/curso/temas/tema5/img8.svg' alt='Imágen decorativa')

              .tarjeta-naranja.px-4.py-1.mt-3
                h4.texto-blanco.text-center Casco

          p.text-center.font-color En campo es necesario como prevención.

        .tarjeta.color-acento-botones.p-4.bg-tarjeta
          .row.justify-content-center.mb-3
            .col-12
              img(src='@/assets/curso/temas/tema5/img9.svg' alt='Imágen decorativa')

              .tarjeta-naranja.px-4.py-1.mt-3
                h4.texto-blanco.text-center Protección de ojos              

          p.text-center.font-color Es obligatorio que todo el personal que permanezca en el laboratorio use permanentemente las gafas de seguridad, aun cuando no estén realizando prácticas (Sociedad Americana de Química, 2003, p.3).

        .tarjeta.color-acento-botones.p-4.bg-tarjeta
          .row.justify-content-center.mb-3
            .col-12
              img(src='@/assets/curso/temas/tema5/img10.svg' alt='Imágen decorativa')

              .tarjeta-naranja2.px-4.py-1.mt-3
                h4.texto-blanco.text-center Mascarilla o tapabocas

          p.text-center.font-color Cuando la práctica de laboratorio implique la manipulación de compuestos volátiles, tóxicos, nocivos y/o irritantes, es indispensable emplear equipos de protección respiratoria, adaptados y homologados para la sustancia en cuestión (INS, 2011, p.40).

        .tarjeta.color-acento-botones.p-4.bg-tarjeta
          .row.justify-content-center.mb-3
            .col-12
              img(src='@/assets/curso/temas/tema5/img11.svg' alt='Imágen decorativa')

              .tarjeta-naranja2.px-4.py-1.mt-3
                h4.texto-blanco.text-center Instrumental de campo o vestimenta              

          p.text-center.font-color Primero se debe aclarar que la ropa utilizada en laboratorio o en campo, debe proteger tanto de salpicaduras como de derrames, preferiblemente un guardapolvo blanco, si es para uno de cuencas de agua contaminadas este debe ser impermeable (Sociedad americana de química, 2003, p.4).

        .tarjeta.color-acento-botones.p-4.bg-tarjeta
          .row.justify-content-center.mb-3
            .col-12
              img(src='@/assets/curso/temas/tema5/img12.svg' alt='Imágen decorativa')

              .tarjeta-naranja.px-4.py-1.mt-3
                h4.texto-blanco.text-center Bata de laboratorio              
 
          p.text-center.font-color Si se usa la bata las características más aconsejables son: material: algodón, dril o gabardina, color: blanco, manga: larga con puño resortado, largo (extensión): mínimo hasta el muslo (3/4), tipo de cierre: de abotonar a presión (INS, 2011, p.40).

        .tarjeta.color-acento-botones.p-4.bg-tarjeta
          .row.justify-content-center.mb-3
            .col-12
              img(src='@/assets/curso/temas/tema5/img13.svg' alt='Imágen decorativa')

              .tarjeta-naranja.px-4.py-1.mt-3
                h4.texto-blanco.text-center Zapatos              

          p.text-center.font-color En el caso de los laboratorios se debe usar zapatos totalmente cerrados y que no sean de cuero o cuero sintético, no se podrá usar sandalias o cualquier zapato que deje piel al descubierto ni con tacones (INS, 2011, p.40).

        .tarjeta.color-acento-botones.p-4.bg-tarjeta
          .row.justify-content-center.mb-3
            .col-12
              img(src='@/assets/curso/temas/tema5/img14.svg' alt='Imágen decorativa')

              .tarjeta-naranja3.px-4.py-1.mt-3
                h4.texto-blanco.text-center Guantes de nitrilo, de neopreno, gruesos y delgados              

          p.text-center.font-color Cualquier manipulación de sustancias corrosivas, irritantes, de elevada toxicidad o de elevado poder de penetración a través de la piel, debe ser llevada a cabo empleando guantes adecuados y limpios. Finalizada la práctica, lave los guantes con abundante agua y jabón. Haga lo propio con sus manos (Sociedad Americana de Química, 2003, p.5).

    .row.mb-5
      .tarjeta.bgDescarga.p-4.mb-5(data-aos="flip-up")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/temas/tema3/img27.svg",alt="Imágen decorativa")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                p.texto-blanco  Por favor diríjase al documento Seguridad en laboratorios químicos académicos, volumen 1, séptima edición, que se encuentra en material de apoyo:


              .col-sm-auto
                a.boton.color-primario(href="https://drive.google.com/open?id=1-0DBW0V7b86svVyc35atqrHHdsMOyW5u" target="_blank")
                  span.texto-negro Enlace
                  i.fas.fa-link.texto-negro

    .row.bg3-tema4-v2.align-items-center.mb-5(data-aos="fade-right")
      h4.text-white.mt-2 En el laboratorio

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4(data-aos="fade-rigt")
        figure
          img(src='@/assets/curso/temas/tema5/img15.svg', alt='Imágen decorativa')      

      .col-lg-8(data-aos="fade-left")
        p Es de carácter obligatorio que el instructor dé a conocer a los aprendices las normas y disposiciones generales de seguridad de este manual, explicándoles y haciendo las aclaraciones necesarias, dando lugar a la participación de los aprendices.

        p Así mismo, el instructor debe hacer un recorrido con sus aprendices por todas las instalaciones, mostrando y ubicando los diversos dispositivos relacionados con la seguridad, tales como salida de emergencia, ruta de evacuación, ubicación de extintores, botiquines de primeros auxilios, duchas de emergencia y fuente lavaojos.

        .cajon.color-primario.p-4(data-aos="flip-down")
          p.mb-0 Antes de las prácticas de campo o de laboratorio el instructor socializará las normas adecuadas para las actividades.

    .row.bg3-tema4-v2.align-items-center.mb-5(data-aos="fade-right")
      h4.text-white.mt-2 Peligros químicos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p(data-aos="fade-right") Las sustancias químicas pueden causar daño si no son manipuladas de forma adecuada y según protocolos, lo más importante para resaltar es que estas sustancias tienen diferentes características (tóxicas, inflamables, corrosivas o reactivas) es importante reconocerlas y saber cómo reaccionar en caso de accidentes.

        .cajon.color-primario.p-4.mb-4(data-aos="flip-up")
          p.mb-0 Sin embargo, existen sustancias que cuentan con más de un peligro, por lo cual se considera que el grado de peligrosidad de las sustancias químicas puede variar, por ello siempre trabajar de forma segura es la manera correcta de desarrollar actividades con estos implementos.

      .col-lg-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema5/img16.svg', alt='Imágen decorativa')

    .row.mb-5(data-aos="fade-left")
      p Se recomienda ampliar la información en sesiones en línea con el instructor y el material de apoyo, pero se dejan las siguientes acciones para contrarrestar los peligros químicos:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4(data-aos="fade-right")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema5/img17.svg' alt='Imágen decorativa')
          .tarjeta.tarjeta-azul4
            .p-3
              p.mt-lg-2 Siempre lea detenidamente las etiquetas de las sustancias químicas antes de usarlas.
      
      .col-lg-4(data-aos="fade-down")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema5/img18.svg' alt='Imágen decorativa')
          .tarjeta.tarjeta-azul4
            .p-3
              p.mt-lg-2 Siga las recomendaciones dadas en las hojas de seguridad de los productos.

      .col-lg-4(data-aos="fade-left")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema5/img19.svg' alt='Imágen decorativa')
          .tarjeta.tarjeta-azul4
            .p-3
              p Siempre siga las recomendaciones de su instructor (Sociedad Americana de Química, 2003, p.10).





  
  </template>

<script>
export default {
  name: 'Tema5',
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
