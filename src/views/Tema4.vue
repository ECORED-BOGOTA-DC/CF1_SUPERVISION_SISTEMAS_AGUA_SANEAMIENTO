<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Bases conceptuales de muestreo

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema4/img1.svg', alt='alt')  
      .col-lg-8
        p Se designa a través del concepto material de laboratorio a todo aquel material que puede ser empleado en un laboratorio (puede ser de vidrio, madera, metal, plástico, goma y porcelana) para realizar las típicas actividades que en este tipo de lugares se llevan a cabo, a saber: investigaciones, experimentos, estudios especiales sobre recursos, partículas u otros.

        p El uso de los instrumentos de laboratorio debe estar orientado al objetivo de la muestra, teniendo en cuenta las características requeridas para muestras fisicoquímicas y microbiológicas, si el procesamiento de esta será in situ o si se requiere de algún equipo o herramienta.

    separador
    #t_4_1.titulo-segundo.color-acento-botones
       h2 4.1 Recipientes, reactivos e insumos

    .row.justify-content-center.align-items-center.mb-5
      .col-6.col-lg-1
        figure.mb-3
          img(src='@/assets/curso/temas/tema4/img2.svg', alt='alt')
      
      .col-lg-11
        p Los recipientes para la toma de muestras más usados para exámenes físicos - químicos y microbiológicos de acuerdo con el INS (2011), son de vidrio y plástico, y varían de acuerdo con la muestra y sus componentes. En algunos casos es requerido el uso de un blanco del recipiente para descartar interferencias; como se observa en la siguiente línea de tiempo: 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.mb-5
        .tarjeta.tarjeta-amarilla2.p-4
          .row 
            figure.mb-4
              img(src='@/assets/curso/temas/tema4/img3.svg', alt='alt')

            h4 Vidrio
            p Las siguientes son las características que deben reunir los recipientes de vidrio para la toma de muestras, de acuerdo con el INS (2011):

            .col-4.col-lg-2
              figure.my-3
                img(src='@/assets/curso/temas/tema4/img4.svg', alt='alt')            

            .col-lg-10
              p Deben ser resistentes a altas temperaturas, ya que deben ser esterilizados a temperaturas de 120 ºC o 160ºC para garantizar que los recipientes están libres de microorganismos antes de la toma de la muestra.

            .col-4.col-lg-2
              figure.my-3
                img(src='@/assets/curso/temas/tema4/img5.svg', alt='alt')            

            .col-lg-10
              p Deben ser de vidrios neutros para que durante el proceso de esterilización y de almacenamiento de la muestra no ocurran reacciones donde se liberan productos tóxicos que puedan afectar la viabilidad de los microorganismos presentes en la muestra.           

            .col-4.col-lg-2
              figure.mb-3
                img(src='@/assets/curso/temas/tema4/img6.svg', alt='alt')            

            .col-lg-10
              p Deben tener tapa rosca, preferiblemente de plástico, con forros de silicona termo-resistentes (p. 34).

      .col-lg-6.mb-5
        .tarjeta.tarjeta-azul.p-4
          .row 
            figure.mb-4
              img(src='@/assets/curso/temas/tema4/img7.svg', alt='alt')

            h4 Plástico 
            p Los recipientes de plástico deben ser de polietileno, policarbonato o teflón si se requiere.
            p El uso de botellas de plástico es recomendado para la toma de muestras a las que se les va a determinar sustancias inorgánicas.  Las siguientes son las características generales de los recipientes:

            ul.lista-ul--color
              li 
                i.fas.fa-check.color-vineta1
                | Preferiblemente livianos y resistentes.
              li 
                i.fas.fa-check.color-vineta1
                | Boca ancha
              li 
                i.fas.fa-check.color-vineta1
                | Cierre hermético

    .row.mb-5
      p Los recipientes de vidrio y plástico utilizados para la toma de muestras, deben ser lavados y acondicionados de acuerdo con las disposiciones del Instituto Nacional de Salud -INS- (2011), quien brinda directrices claras sobre el acondicionamiento de materiales para análisis fisicoquímico y microbiológico. Para ello se debe tener en cuenta el tipo de análisis a desarrollar:

    .row.justify-content-center.align-items-center.mb-5
      .tarjeta.tarjeta--azul2.p-4
        SlyderA(tipo="b").p-4
          .row
            .col-md-6.mb-4.mb-md-0
              p El lavado y acondicionamiento de los recipientes depende del análisis a desarrollar.

              p El Instituto Nacional de Salud (2011) brinda directrices claras sobre el acondicionamiento de materiales para análisis fisicoquímico y microbiológico. 

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema4/img8.svg', alt='alt')

          .row
            .col-md-6.mb-4.mb-md-0
              h4 Para análisis fisicoquímico:

              p Los recipientes de vidrio nuevos se deben limpiar con agua y detergentes, para eliminar el polvo; después se limpian con una mezcla de ácido crómico - ácido sulfúrico o en su defecto con limpiador neutro y se enjuagan con agua destilada.

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema4/img9.svg', alt='alt')

          .row
            .col-md-6.mb-4.mb-md-0
              p Los recipientes de polietileno se limpian llenándolos con una solución al 10% o 1 molar de ácido nítrico o ácido clorhídrico, dejándolos llenos durante 30 minutos. Finalmente se enjuagan con agua destilada o desionizada.

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema4/img10.svg', alt='alt')

          .row
            .col-md-6.mb-4.mb-md-0
              h4 Para análisis microbiológico:

              p El lavado se debe realizar con detergentes neutros y para eliminar la suciedad, se deben enjuagar con agua corriente hasta eliminar completamente las trazas de jabón, posteriormente se enjuaga con agua destilada y finalmente se dejan secar al medio ambiente o en estufa.

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema4/img11.svg', alt='alt')

          .row
            .col-md-6.mb-4.mb-md-0
              p Los recipientes destinados para la toma de muestras de agua que ha sido tratada con agentes oxidantes como el cloro, la cloramina, bromo u ozono y que van a ser esterilizados, se les debe adicionar tiosulfato de sodio (Na2S2O3), que es un agente reductor que inactiva el efecto bactericida de los elementos mencionados anteriormente.

              p Permitiendo así la detección de los microorganismos presentes en el agua a analizar.

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema4/img12.svg', alt='alt')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        figure.mb-4
          img(src='@/assets/curso/temas/tema4/img13.svg', alt='alt')  
      .col-lg-8
        p Esterilización de los recipientes: los recipientes para la toma de muestras deben estar estériles. Es decir, deben haber sido #[b sometidos a procesos de esterilización.] La esterilización hace referencia a procesos físicos o químicos que eliminan cualquier forma de vida. Cuando se dice que un recipiente está estéril es porque en este no hay presencia de microorganismos o esporas termorresistentes.

        p Los recipientes para la toma de muestras se deben esterilizar de acuerdo con los #[i Standard Methods For the Examination of Water and Wastewater] (2017) se puede mediante métodos físicos como la esterilización por #[b calor húmedo] o por #[b calor seco:]

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema4/img14.svg', alt='alt')

          .tarjeta.tarjeta--azul.p-3(x="26.55%" y="50%" numero="")
            .h5.mb-2 Esterilización por calor seco
            p Se realiza en un horno que se lleva a una temperatura de 170 ± 10 ºC durante 1 hora. Los recipientes de plástico no se deben esterilizar por este método.

          .tarjeta.tarjeta--azul.p-3(x="72%" y="50%" numero="")
            .h5.mb-2 Esterilización por calor húmedo
            p Se realiza en un equipo llamado autoclave en el que mediante el vapor de agua se producen temperaturas de 121 ± 3 ºC y 1 atmósfera de presión. Cuanto se someten los recipientes a estas condiciones durante 15 minutos, los microorganismos o las esporas que estaban presentes en estos, mueren y como consecuencia los recipientes quedan estériles.

    .row.justify-content-center.align-items-center.mb-5
      .tarjeta-amarilla3.p-3.p-lg-5
        .row.justify-content-center
          .col-8.col-lg-3
            figure.my-4
              img(src='@/assets/curso/temas/tema4/img15.svg', alt='alt')            

          .col-lg-9
            p A continuación, se presentan algunas indicaciones para tener en cuenta:

            ol.lista-ol--cuadro.fa-ul2
              li
                .lista-ol--cuadro__vineta
                  span 1
                | Antes de llevar los recipientes al proceso de esterilización estos se deben tapar, sin cerrarlos totalmente. La tapa y el cuello del recipiente se debe cubrir con papel Kraft, mantequilla o aluminio para proteger la boca y la tapa del recipiente en el momento del muestreo.            
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | Cuando el punto de muestreo sea mediante inmersión en agua limpia, el exterior de frasco deberá cubrirse con papel Kraft, aluminio o en bolsas esterilizables, esto con el fin de mantener la esterilidad del exterior del frasco hasta el momento del muestreo.
              li 
                .lista-ol--cuadro__vineta
                  span 3
                | Cuando la esterilización no es posible por ningún medio, la Icontec en su NTC 6151 (2015) menciona la posibilidad de hacer desinfección de los recipientes mediante ebullición durante 30 minutos, para ello se deben sumergir los recipientes y sus tapas en agua hirviendo. Terminado el proceso de desinfección se debe eliminar el agua de los recipientes, tapar y colocar en una envoltura limpia.      

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        .cajon.color-secundario.p-4
          h5 Prueba de esterilidad de los recipientes
          p.mb-0 Se deben realizar pruebas de monitoreo al proceso de esterilización o hacer pruebas a los recipientes para comprobar su esterilidad.

    .row.mb-5
      p Ampliar la información con la NTC 5667-2 en cuanto a recipientes para muestras y en la NTC 6151.

    .row.mb-5
      .tarjeta.bgDescarga.p-4.mb-5
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/temas/tema3/img27.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                p.texto-blanco Para reforzar las técnicas puede apoyarse de la ISO 5667-2 Gestión ambiental. Calidad del agua. Muestreo. Técnicas generales de muestreo.

                p.texto-blanco Para ampliar la información acerca de los procedimientos de muestreo para el análisis de la calidad microbiológica del agua se recomienda consultar la norma técnica colombiana NTC 6151:2015. 

              .col-sm-auto
                a.boton.color-primario(href="https://www.ins.gov.co/sivicap/Documentacin%20SIVICAP" target="_blank")
                  span.texto-negro Enlace
                  i.fas.fa-link.texto-negro

    separador
    #t_4_2.titulo-segundo.color-acento-botones
       h2 4.2 Equipos y herramientas

    .row.justify-content-center.align-items-center.mb-5
      .col-6.col-lg-1
        figure.mb-3
          img(src='@/assets/curso/temas/tema4/img16.svg', alt='alt')
      
      .col-lg-11
        p El trabajo práctico de toma de muestras en el sitio siempre se acompaña del uso de equipos y herramientas necesarias para tal fin, teniendo en cuenta no solo las condiciones mínimas de dichos implementos como que se encuentren calibrados, sino también el uso acorde a las indicaciones de cada equipo.

    .row.bg3-tema4-v2.align-items-center.mb-5
      h4.text-white.mt-2 Equipo de muestreo manual

    .row.justify-content-center.align-items-center.mb-5
      .col-6.col-lg-1
        figure.mb-3
          img(src='@/assets/curso/temas/tema4/img17.svg', alt='alt')
      
      .col-lg-11
        p Para el Invemar manejar los equipos para las muestras superficiales es extremar la limpieza del material y procurar procedimientos que eviten la contaminación. En muestras superficiales la recolección se puede hacer manualmente introduciendo la botella colectora bajo la superficie, procurando siempre hacerlo a la misma profundidad (c.a. 25 cm), otras recomendaciones dadas para estos equipos son:

    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema4/img18.svg", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Botellas Nansen:
            p.mb-0.text-center cuando el objetivo es obtener muestras de agua a profundidades determinadas, se emplean botellas colectoras dotadas de mecanismos de cierre para confinar la masa de agua que se encuentra a la profundidad de interés. En estudios oceanográficos, se emplean normalmente botellas nansen para el análisis de los parámetros fisicoquímicos, pH, salinidad, oxígeno disuelto y nutrientes inorgánicos.

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema4/img19.svg", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Botellas Niskin:
            p.mb-0.text-center por tener capacidad de mayor volumen, son ideales para la obtención de muestras en el análisis de pigmentos fotosintéticos y contaminantes (pesticidas, metales pesados, etc.). Hay que tener bastante precaución cuando se usan estas botellas en el muestreo de aguas con alto contenido de sólidos sedimentables; su forma alargada y un flujo muy lento para extraer la muestra por las llaves, facilitan la sedimentación de los sólidos provocando diferencia en este parámetro entre las primeras y las últimas botellas receptoras que se llenan.

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema4/img20.svg", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Botella Van Dorn horizontal: 
            p.mb-0.text-center es adecuada para colectar muestras de fondo en cuerpos de agua muy someros, siendo muy apropiada para estudios de estratificación vertical, termoclinas y termohalinas en lagunas costeras, mientras que las de funcionamiento vertical permiten colectar muestras a mayores profundidades.

    .row.bg3-tema4-v2.align-items-center.mb-5
      h4.text-white.mt-2 Equipo de muestreo automático

    .row.justify-content-center.align-items-center.mb-5
      .col-6.col-lg-1
        figure
          img(src='@/assets/curso/temas/tema4/img21.svg', alt='alt')
      
      .col-lg-11.mt-3
        p Es importante resaltar que también existe tomadores de muestras instrumentados y a menudo automatizados dentro de estos existen dos tipos principales; los dependientes del tiempo, que recogen muestras discretas, compuestas o continuas y los dependientes del volumen también recogen estos tipos de muestra y tienen en cuenta las variaciones en el flujo (NTC 5667-2, 1995).

    .row.mb-5
      p Para ampliar información con la NTC 5667-2 en cuanto a equipos para muestras, dar clic al recurso.

    .row.mb-5
      .tarjeta.bgDescarga.p-4.mb-5
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/temas/tema3/img27.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                p.texto-blanco Para reforzar las técnicas puede apoyarse de la ISO 5667-2 Gestión ambiental. Calidad del agua. Muestreo. Técnicas generales de muestreo.

              .col-sm-auto
                a.boton.color-primario(href="https://www.ins.gov.co/sivicap/Documentacin%20SIVICAP" target="_blank")
                  span.texto-negro Enlace
                  i.fas.fa-link.texto-negro


    .row.bg3-tema4-v2.align-items-center.mb-5
      h4.text-white.mt-2 Equipos para análisis

    .row.justify-content-center.align-items-center.mb-5
      .col-6.col-lg-1
        figure
          img(src='@/assets/curso/temas/tema4/img22.svg', alt='alt')
      
      .col-lg-11.mt-3
        p Dentro de los equipos o instrumentos más usados para la realización de los análisis se puede encontrar: termómetro, pHmetro y el turbidímetro.

        p A continuación, se invita a explorar el siguiente recurso que presenta los diferentes equipos para análisis y medición de aguas:

    .row.justify-content-center.align-items-center.mb-5
      .tarjeta.tarjeta-amarilla4.p-5
        LineaTiempoC.color-acento-contenido
          .row(titulo="Termómetro").mt-4
            .col-md-7.mb-4.mb-md-0
              p Termómetro Celsius (centígrado) con columna de mercurio, el cual mínimo debe tener una escala marcada cada 0.1°C. Para prevenir rupturas en labores de campo, se recomienda un termómetro con cazoleta protectora. En la actualidad se emplean muchos medidores electrónicos provistos con sondas, los cuales poseen termocuplas o termistores en su interior. Con miras a los procesos de validación y certificación de los laboratorios ambientales, los termómetros y sensores de temperatura deben calibrarse al menos una vez al año por una institución competente, o contra termómetros certificados, siguiendo el protocolo para cada equipo y/o fabricante (Invemar, 2013, p.21).
          
            .col-md-5
              figure
                img(src='@/assets/curso/temas/tema4/img23.svg', alt='alt')


          .row(titulo="pHmetro").mt-4
            .col-md-7.mb-4.mb-md-0
              p Según el Invemar (2013) la técnica más exacta, usada para la medición del pH es la potenciométrica, que se fundamenta en la medida de la diferencia de potencial experimentada en dos celdas electroquímicas (denominadas electrodos), se emplea un electrodo combinado de membrana de vidrio y uno de calomel como referencia. Los medidores de pH (pHmetro) modernos poseen un mecanismo electrónico que compensa automáticamente la medida con respecto a la temperatura,
          
            .col-md-5
              figure
                img(src='@/assets/curso/temas/tema4/img24.svg', alt='alt')


          .row(titulo="Turbidímetro").mt-4
            .col-md-7.mb-4.mb-md-0
              p El conocimiento de la salinidad es fundamental en estudios oceanográficos, pues es necesario para la determinación de corrientes y la identificación de masas de aguas. En estudios ambientales es un factor importante porque puede significar la presencia o no de organismos y peces. La salinidad se puede calcular a partir de la conductividad, el resultado es numéricamente menor que el residuo filtrable y se reporta usualmente como gramos por Kg o partes por mil (psu o ‰ (Invemar, 2013, p.24). 
          
            .col-md-5
              figure
                img(src='@/assets/curso/temas/tema4/img25.svg', alt='alt')

    .row.mb-5
      p De acuerdo con Invemar (2013), actualmente en la mayoría de los laboratorios, la medición del agua se realiza por medio de la conductividad, revise a continuación aspectos relacionados. 

    .row.justify-content-center.align-items-center.mb-5
      TabsB.color-acento-contenido
        .py-4.py-md-5(titulo="Método conductimétrico" :icono="require('@/assets/curso/temas/tema4/img26.svg')")
          .row
            .col-md-7.mb-4.mb-md-0
              p Se define como la capacidad que tiene una sustancia de transportar electrones (conducir electricidad); en el agua, esta capacidad se ve influenciada por la cantidad de sales disueltas y la temperatura. Esto significa que, a mayor contenido de sales, mayor conductividad; de esta forma, se puede emplear esta propiedad para medir el contenido de sales en una muestra de agua. El método conductimétrico es aplicable a todo tipo de aguas naturales, especialmente del mar. También es aplicable a efluentes industriales y domésticos
          
            .col-md-5
              figure
                img(src='@/assets/curso/temas/tema4/img27.svg', alt='Texto que describa la imagen')

        .py-4.py-md-5(titulo="Programas electrónicos internos" :icono="require('@/assets/curso/temas/tema4/img28.svg')")
          .row
            .col-md-7.mb-4.mb-md-0
              p Hoy en día existen equipos que miden la conductividad y la temperatura de una muestra de agua, y calculan la salinidad a través de programas electrónicos internos. Si no se dispone de un equipo de estos, también se puede determinar con un conductímetro, un termómetro y haciendo uso del algoritmo reportado en #[b #[i “Standard Methods for the Examination of Water and Wastewater”]]. La ecuación para la conductividad relativa a la temperatura t (Rt) puede ser tomada de #[b #[i «Specific Conductance: Theoretical considerations and application to analytical quality control»]] por R.L. Miller, W.L. Bradford, y N.E. Peters (2013, p.24).
          
            .col-md-5
              figure
                img(src='@/assets/curso/temas/tema4/img29.svg', alt='Texto que describa la imagen')

    .row.bg4-tema4-v2.align-items-center.mb-5
      h4.text-white.mt-2 Revisión y calibración de los equipos de muestreo

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p Para el desarrollo de esta actividad siempre se debe contar primero con los manuales de calibración para cada uno de los equipos a utilizar, realizar el alistamiento de reactivos y tener claros los estándares requeridos por los mismos.

        p El Ideam en la guía para el monitoreo de vertimientos de aguas superficiales y subterráneas presenta unas consideraciones pertinentes para algunos equipos dadas a continuación:
      
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema4/img30.svg', alt='alt')      


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema4/img31.svg' alt='AvatarTop')
          .tarjeta.tarjeta-amarilla5
            .p-4
              p #[b Sonda multiparámetro:] siempre revisar y calibrar los sensores de por lo menos 24 horas antes de la actividad; el sensor de oxígeno disuelto debe calibrarse entre cada muestreo si existe diferencias en la altitud. (Se puede usar si es aplicable el método Winkler como comparación).
      
      .col-lg-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema4/img32.svg' alt='AvatarTop')
          .tarjeta.tarjeta-amarilla5
            .p-4
              p.mt-lg-3 #[b Medidores de campo sencillos (pHmetro y conductímetro):] el proceso de calibración debe darse diariamente siempre al inicio del primer muestreo. (2014, p 21).

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta-azul3.p-4
          .row.justify-content-center
            .col-6.col-lg-3
              figure.mb-3
                img(src='@/assets/curso/temas/tema4/img33.svg', alt='alt').img3-tm4

            .col-lg-9 
              p.mb-0 Recuerde que el éxito del muestreo se determina según el conocimiento del lugar de muestreo y de la necesidad de los parámetros a identificar, luego siempre revise el equipo antes de ir a tomar la muestra, temas como; Longitudes de sondas, pilas cargadas, funcionamiento y calibración son acciones previas obligatorias.      




  
  </template>

<script>
export default {
  name: 'Tema4',
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
