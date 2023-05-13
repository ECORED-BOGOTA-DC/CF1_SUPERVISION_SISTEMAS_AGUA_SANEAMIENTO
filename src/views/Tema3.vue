<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Bases conceptuales de muestreo

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La actividad de análisis de muestras de agua se enfoca en la necesidad de mantener un monitoreo constante de los recursos hídricos, ya que las actividades del ser humano generan transformaciones ambientales que si no se miden no se lograrían dimensionar ni controlar.  

    .row.mt-5
      p A continuación, se presenta un video que nos introduce las bases conceptuales de muestreo y medición.

      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/11111111" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    separador
    #t_3_1.titulo-segundo.color-acento-contenido
       h2 3.1 Tipos y técnicas de muestreo

    .row.justify-content-center.align-items-center 
      .col-3
        figure
          img(src='@/assets/curso/temas/tema3/img2.png', alt='alt')  
      .col-9
        p Los tipos y técnicas de muestreo varían de acuerdo con la situación específica y según los objetivos previstos; algunos estudios requieren solamente muestras instantáneas o simples, mientras que en otros se necesita disponer de muestras compuestas o aún más elaboradas en tiempo y espacio. 

        .cajon.color-primario.p-4
          p Muchas de las generalidades referentes a las técnicas de muestreo y conservación, se encuentran plasmadas en las Normas Técnicas Colombianas [NTC] 5667-2 y 5667-3.   

        p.mt-3 En el caso de análisis microbiológicos básicamente incluyen procedimientos para prevenir su contaminación durante el llenado de los recipientes por microorganismos presentes en el exterior de los grifos, accesorios, en el ambiente o en el operario. 

    .row.bg1-tema3.align-items-center
      h4.text-white.mt-2 Tipos de muestras: 

    .row.justify-content-center.align-items-center.mt-5
      .col-1
        figure
          img(src='@/assets/curso/temas/tema3/img3.svg', alt='alt')  
      .col-11
        p Antes de iniciar el muestreo, es elemental tener claramente definido la forma como serán tomadas las muestras para poder realizar un trabajo de campo; Según el Instituto Colombiano de Normas Técnicas y Certificación [Icontec] (1995) en la norma técnica colombiana [NTC] 5667-2 Técnicas generales de muestreo, dentro de los tipos de muestras se pueden encontrar: sencillas, compuestas, periódicas, continuas y de serie (pp.2-8). 

    .row.mt-5
      p Ahora, se mencionan algunas de ellas:

      .tarjeta.tarjeta--azul.p-4
        SlyderA(tipo="b").p-4
          .row
            .col-md-6.mb-4.mb-md-0
              p
                b Muestras simples
              p Este tipo de muestra se toma en un momento y lugar determinado. Es aplicable en los casos que se sabe, la composición del agua no varía significativamente en el tiempo o lugar, como lo son usualmente para caracterización fisicoquímica de aguas naturales. En este caso, tomar diferentes muestras puntuales puede ser útil para describir el comportamiento a través del espacio y tiempo (NTC 5667-2, 1995).

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/img4.png', alt='Texto que describa la imagen')

          .row
            .col-md-6.mb-4.mb-md-0
              p
                b Muestras compuestas

              p Debido a la variación horaria de su caudal, por tal razón son muy utilizadas en el monitoreo de ríos, vertimientos o procesos industriales en línea. Su toma se realiza en un mismo punto en intervalos de tiempo previamente definidos, y el volumen de cada muestra parcial puede ser constante o variar en función del caudal.  Para los casos en que se requiere variar el volumen en cada toma, se recolectan muestras parciales (alícuotas) ej.: cada 2 o 3 horas, cuyo volumen se obtiene según la siguiente relación:  

              .row.mt-3
                .col-4
                  figure
                    img(src='@/assets/curso/temas/tema3/img8.svg', alt='Texto que describa la imagen')

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/img5.png', alt='Texto que describa la imagen')
              
          .row
            .col-md-6.mb-4.mb-md-0
              p 
                b Muestras integradas

              p Este tipo de muestra consiste en la recolección de muestras simples en diferentes puntos de manera simultánea que posteriormente son mezcladas. En caso de presentarse variaciones de caudal en los puntos de muestreo, se debe tener en cuenta para que el volumen aportado sea proporcional al caudal medido durante la toma de la muestra. (Instituto de hidrología, meteorología y estudios ambientales [Ideam], 2017).

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/img6.png', alt='Texto que describa la imagen')

          .row
            .col-md-6.mb-4.mb-md-0
              p 
                b Muestras en serie:

              p Dentro de las muestras en serie se distinguen dos tipos, de perfil profundo y de área:

              p <b>De perfil profundo:</b> muy aplicables en oceanografía cuando el objetivo es conocer la variación vertical de un parámetro, por ejemplo, definir la posición de la capa termohalina, de la picnoclina, etc.

              p <b>De perfil de área:</b> serie de muestras de agua tomadas a una profundidad en particular, de una masa de agua en diversas locaciones; muy utilizadas para definir distribuciones espaciales por capas.” (Invemar, 2013, p. 14)

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/img7.png', alt='Texto que describa la imagen')
                

      p.mt-5 La norma NTC ISO 5567-2, en el numeral 4 indica los tipos de muestras según procedimientos estandarizados, consultarla en la base de datos del SENA.    


    .row.bg1-tema3.align-items-center
      h4.text-white.mt-2 Técnicas de muestreo 

    .row
      p.mt-5 Las cuales se subdividen en tres:

    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/img9.svg", alt="alt")
          .crd_hover_txt--body
            h4.mb-3.text-center Muestreo manual
            p.mb-0.text-center Se realiza para sitios de fácil acceso o aquellos que con ciertas adaptaciones puedan facilitar la toma de muestras. Permite al encargado de la toma, observar los cambios en las características del agua en cuanto a sustancias flotantes, color, olor, aumento o disminución de caudales, entre otros. (2011, p. 21).

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/img10.svg", alt="alt")
          .crd_hover_txt--body
            h4.mb-3.text-center Muestreo automático
            p.mb-0.text-center En lugares de difícil acceso se recomiendan muestreadores automáticos, son precisos, aunque su desventaja es el montaje y calibración del equipo; su aplicación implica instalación de equipos (antenas, paneles solares, etc.) y herramientas (licencias de trasmisión, software) elevando  costos y  limitando su implementación. (INS, 2011, pp. 21-22).

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/img11.svg", alt="alt")
          .crd_hover_txt--body
            h4.mb-3.text-center Muestreo mixto
            p.mb-0.text-center Según el INS (2007) se operan programas de muestreo mixto, convirtiendo el monitoreo en un sistema integrado que permite la verificación manual de los resultados obtenidos de forma automática. Esta se realiza aleatoriamente, de tal manera que se pueda realizar calibración, ajuste y mantenimiento de los equipos automáticos (p.22). 

    .row.justify-content-center.align-items-center.mt-5
      .col-1
        figure
          img(src='@/assets/curso/temas/tema3/img12.svg', alt='alt')  
      .col-11
        p Las técnicas del muestreo de agua para análisis microbiológicos básicamente incluyen procedimientos para prevenir su contaminación durante el llenado de los recipientes por microorganismos presentes en el exterior de los grifos, accesorios, en el ambiente o en el operario. Las técnicas de llenado de los recipientes se pueden dividir en dos: muestreo en el grifo o muestreo por inmersión.

    .row.bg1-tema3.align-items-center.mt-5
      h4.text-white.mt-2 Muestreos en el grifo

    .row.justify-content-center.align-items-center.mt-5
      .col-3
        figure
          img(src='@/assets/curso/temas/tema3/img13.png', alt='alt')  
      .col-9
        p Este tipo de muestreo se aplica específicamente para las muestras de agua potable de llave. Estas pueden ser tomadas en plantas de tratamiento y tanques de almacenamiento, agua en la red de distribución, agua del grifo del consumidor, agua para consumo, agua de manantiales o pozos que cuenten con dispositivos de tomas de muestra instalados permanentemente.

        p Cuando se va a realizar la toma de estas muestras se debe hacer una previa desinfección del grifo, excepto para la toma de muestras de agua de consumo directo, ya que la calidad microbiológica de esta agua dependerá tanto de los microorganismos presentes en el agua, como de los presentes en los accesorios y el grifo.

      .row.mt-5
        h4.color-titulo-azul Técnica de llenado para muestreo en el grifo

        p.mt-3 Esta técnica debe seguir los protocolos establecidos, así como lo indica el Instituto Colombiano de Normas Técnicas y certificación [Icontec] (2015) en la norma técnica colombiana [NTC] 6151, calidad del agua. Muestreo para análisis microbiológico:

    .row.mt-5.justify-content-center.align-items-center 
      .col-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Norma 1")
            .col-md-8.mb-4.mb-md-0
              p Se deben retirar todos los dispositivos y elementos colocados en el dispositivo de muestreo, en el caso de hacer muestreo para agua de consumo, este paso se debe omitir.
          
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema3/img14.png', alt='Texto que describa la imagen')

          .row(titulo="Norma 2")
            .col-md-8.mb-4.mb-md-0
              p La persona que tome la muestra deberá mantener las técnicas asépticas para prevenir la contaminación de la muestra, para ello deberá lavarse las manos, ponerse tapabocas y usar guantes estériles.
          
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema3/img15.png', alt='Texto que describa la imagen')

          .row(titulo="Norma 3")
            .col-md-8.mb-4.mb-md-0
              p Se debe limpiar el grifo o dispositivo con un paño húmedo para retirar la suciedad visible.
          
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema3/img16.png', alt='Texto que describa la imagen')

          .row(titulo="Norma 4")
            .col-md-8.mb-4.mb-md-0
              p Una vez hecho el procedimiento de limpieza se debe flamear el grifo con un mechero de alcohol. Esto solo se debe hacer si el grifo y las tuberías anexas son metálicas.

              p Recuerde que el paso de desinfección no se debe realizar para el muestreo de agua para consumo.
          
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema3/img17.png', alt='Texto que describa la imagen')

          .row(titulo="Norma 5")
            .col-md-8.mb-4.mb-md-0
              p Una vez limpio y desinfectado el grifo se debe dejar drenar el agua por 1 a 3 minutos hasta que el agua en las tuberías haya sido renovada y la temperatura se haya estabilizado.
          
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema3/img18.png', alt='Texto que describa la imagen')


          .row(titulo="Norma 6")
            .col-md-8.mb-4.mb-md-0
              p Para hacer el llenado del recipiente, se debe retirar el protector que está cubriendo la tapa del recipiente, destapar el frasco y hacer el llenado manteniendo la esterilidad de la tapa, para ello puede colocar la tapa en el papel estéril que estaba cubriendo el recipiente.
          
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema3/img19.png', alt='Texto que describa la imagen')

            
          .row(titulo="Norma 7")
            .col-md-8.mb-4.mb-md-0
              p Llenar directamente el recipiente estéril hasta dejar un espacio de aire que facilitará el mezclado, una vez se obtiene el volumen requerido se tapa inmediatamente el recipiente sin tocar la boca del frasco o el interior de la tapa.
          
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema3/img20.png', alt='Texto que describa la imagen')

          .row(titulo="Norma 8")
            .col-md-8.mb-4.mb-md-0
              p Se debe rotular para asegurar que la información del rótulo corresponda al punto, fecha y hora en la que se realizó el muestreo.
          
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema3/img21.png', alt='Texto que describa la imagen')
      
       
      .col-4
        figure
          img(src='@/assets/curso/temas/tema3/img22.png', alt='Texto que describa la imagen')

    .row.bg1-tema3.align-items-center.mt-5
      h4.text-white.mt-2 Muestreo por inmersión

    .row.justify-content-center.align-items-center.mt-5
      .col-3
        figure
          img(src='@/assets/curso/temas/tema3/img23.png', alt='alt')  
          
      .col-9
        p Se realiza cuando se requiere tomar muestras de profundidad por ejemplo, en el caso de muestreos de tanques de almacenamiento que no cuenten con dispositivos de muestras o en el agua de manantiales, pozos o  piscinas.

        p En estos casos la muestra se debe tomar con un recipiente estéril en su interior y exterior. Tan pronto se va a tomar la muestra se debe retirar la envoltura protectora del recipiente y con la ayuda de una vara de muestreo se lleva a cabo la toma de muestra.

        p Revise la siguiente infografía para identificar los casos en la toma de muestras de agua que se pueden aplicar

    .row.mt-5
      .tarjeta.tarjeta--gris.p-4
        LineaTiempoC.color-acento-contenido(text-small)
          .row(titulo="1")
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/img24.png', alt='Texto que describa la imagen')
              
            .col-md-6.mb-4.mb-md-0
              p En el caso de la toma de las piscinas, la muestra se debe tomar de -10 cm a -20 cm de profundidad y el recipiente se introduce horizontalmente para evitar la pérdida de tiosulfato. Para balnearios se hace de manera similar haciendo la toma a -20 cm a -30 cm.

          .row(titulo="2")
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/img25.png', alt='Texto que describa la imagen')
              
            .col-md-6.mb-4.mb-md-0
              p En el caso de pozos o manantiales sin dispositivos de muestreo, la toma se debe hacer con bombas o dispositivos sumergibles estériles.

          .row(titulo="3")
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/img26.png', alt='Texto que describa la imagen')
              
            .col-md-6.mb-4.mb-md-0
              p En el caso de aguas profundas en el mar, lagos o ríos e incluso de aguas residuales que serán analizadas microbiológicamente, es recomendable usar dispositivos especializados como el muestreador ZoBell J-Z.

      p.mt-5 Se invita a consultar información según las normas aplicadas.

    .row.mt-3
      .tarjeta.bgDescarga.p-3.mb-5
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/temas/tema3/img27.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h3.mb-1 Normas aplicadas
                p.text-small Para ampliar información acerca de la toma de muestras en aguas marinas se recomienda consultar la NTC-ISO 5667-9 sobre Gestión ambiental. Calidad del agua. Guía para el muestreo de aguas marinas.
              .col-sm-auto
                a.boton.color-primario(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                  span.texto-negro Descargar
                  i.fas.fa-file-download.texto-negro
        
    .row.bg1-tema3-v2.align-items-center.mt-5
      h4.text-white.mt-2 Técnicas de Manos Limpias (ML)/Manos Sucias (MS)

    .row.justify-content-center.align-items-center.mt-5
      .col-4
        figure
          img(src='@/assets/curso/temas/tema3/img28.png', alt='alt')
      .col-8 
        p Esta es una técnica sencilla que involucra el proceso de la toma de la muestra, sin embargo, es una estrategia que se ha incentivado por ser algo práctico, de fácil ejecución y de buenos resultados de acuerdo con el Servicio Geológico de los Estados Unidos [USGS], en su manual de campo interinstitucional para la recolección de datos sobre la calidad del agua (2000).

        p Los procedimientos de muestreo limpios, incluidas las técnicas de ML/MS, son necesarios cuando se recogen muestras inorgánicas para determinar la presencia de metales y otros oligoelementos. Los procedimientos de muestreo limpio se recomiendan para todos los demás muestreos, en la medida en que resulte razonable, pero particularmente cuando el objeto analizado, podría estar sujeto a contaminación en el terreno o de los procedimientos de laboratorio a un nivel que podría sobrepasar la demanda química de oxígeno (DQO) con fines de información e interpretación.

    .row.justify-content-center.align-items-center.mt-3.mb-5
      .col-8
        .cajon.color-primario.p-4
          p Las técnicas ML/MS separan las funciones en el terreno y dedican un individuo como <b><i>"manos limpias"</i></b> para tareas relacionadas con tener contacto directo con la muestra.

    .row.mb-5
      p  A continuación, se presenta la figura que  resume estas técnicas:

    .row.mb-5
      .titulo-sexto.color-acento-contenido.mb-0
        h5 Figura 1 
        span Técnicas  de Manos limpias / Manos sucias        
    ImagenInfografica.color-acento-contenido
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema3/img29.svg', alt='alt')

      .tarjeta.tarjeta--blanca.p-3(x="17%" y="30.3%" numero="")
        .h5.mb-2 MS
        p MS se encarga de todas las operaciones que relaciona con entrar en contacto con posibles fuentes de contaminación; por ejemplo, MS: trabaja exclusivamente en el exterior de las cámaras del procesamiento y preservación, prepara y opera el equipo de muestreo, incluidas las bombas y muestras discretas, el interruptor de bomba peristáltica, el controlador de bombas y el sistema distribuidor.

      .tarjeta.tarjeta--blanca.p-3(x="85%" y="30.3%" numero="")
        .h5.mb-2 ML
        p ML se encarga de todas las operaciones que se relacionan con equipos que entran en contacto con la muestra; por ejemplo, ml: maneja la botella de la muestra de agua de superficie, maneja el extremo de descarga del tubo o la línea de la muestra de agua de superficie, transfiere la muestra al separador de embudo, prepara un espacio de trabajo limpio (dentro del vehículo), prepara las cámaras de procesamiento y preservació

    .row.bg1-tema3-v2.align-items-center.mt-5
      h4.text-white.mt-2 Técnica muestreo tomado al azar

    .row.justify-content-center.align-items-center.mt-5
      .col-4
        figure
          img(src='@/assets/curso/temas/tema3/img30.svg', alt='alt')
      .col-8 
        p La última técnica a mencionar es la que se basa en una muestra que se toma totalmente al azar, por medio de un recipiente abierto: El cual se coloca en un solo punto en la superficie (arroyo, embalse, río etc.), estas muestras por lo general se toman antes de hacer otro trabajo en el lugar para no afectar la corriente y la posterior recolección; para esta técnica se utilizan muestreadores colectores que suelen pararse corriente abajo de la botella durante la operación de llenado, evitando que entren partículas que estén suspendidas  (NTC 5667-2, 1995).

    .mb-5
      p Para reforzar las técnicas puede apoyarse de la ISO 5667-2 Gestión ambiental. Calidad del agua. Muestreo. Técnicas generales de muestreo.

    .row.mb-5
      .tarjeta.bgDescarga.p-4.mb-5
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/temas/tema3/img27.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                p.texto-blanco Si es de su interés ampliar la información puede ir al material complementario y consultar el video sobre la #[b metodología para realizar un muestreo integrado en un río.]
              .col-sm-auto
                a.boton.color-primario(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                  span.texto-negro Enlace
                  i.fas.fa-link.texto-negro

    .row.bg2-tema3-v2.align-items-center.mb-5
      h4.text-white.mt-2 Precauciones para la toma de la muestra en función de su origen.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p Estas recomendaciones son elementales a la hora de tomar muestras, la primera es enjuagar el envase por lo menos 2 o 3 veces con el agua a muestrear antes de tomar la muestra definitiva.

        p Las demás recomendaciones sugeridas se distribuyen teniendo la fuente de muestreo que pueden ser superficiales (ríos, arroyos, canales, represas, lagos, aljibes) o subterráneas (pozos calzados o de balde, perforaciones), las cuales son atribuidas por el Instituto Nacional de Tecnología Agropecuaria [INTA] (2011), en el protocolo de muestreo, transporte y conservación de muestras de agua con fines múltiples de Argentina, pero que son aplicables a cualquier país, a saber:
      
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema3/img31.svg', alt='alt')        

    .tarjeta.tarjeta--amarilla.p-5
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Agua de red:
            p para la toma de una muestra de agua de red se abrirá el grifo o canilla y se dejará que el agua corra el tiempo suficiente de manera de tener purgada toda la cañería que llega desde el tanque, el ramal donde se encuentre el grifo debe ser el principal, proveniente de la red, y no debe estar conectado en el trayecto con otras cañerías, filtros, ablandadores u otros artefactos que puedan alterar la calidad del agua del ramal principal.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img32.svg', alt='alt')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Agua de perforaciones o pozos calzados:
            p la muestra se debe tomar de la cañería inmediata al pozo y es conveniente que, antes de proceder a la toma de la muestra, la impulsión se mantenga en marcha el tiempo suficiente que contemple la profundidad del o de los acuíferos, hasta que el agua emerja clara (sin sedimentos ni restos vegetales) y que sea del acuífero. Se debe prestar especial atención a esto si el pozo estuviera en desuso. 

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img33.svg', alt='alt')
            
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Agua superficial proveniente de un curso de agua en movimiento:
            p debe ponerse especial atención en buscar puntos estratégicos de muestreo (puentes, alcantarillas, botes, muelles), ya que se debe muestrear de sitios donde el agua se encuentre en circulación. Nunca es recomendable muestrear desde donde se encuentra estancada.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img34.svg', alt='alt')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Agua superficial proveniente de un espejo de agua (represa o lago):
            p en estos casos, se puede proyectar una jabalina a unos 2 metros de la orilla, para no muestrear del borde, evitando tomar la muestra de la capa superficial o del fondo. Sumergir el frasco en el agua (incorporando un peso) con el cuello hacia abajo hasta una profundidad de 15 a 30 cm, destapar y girar el frasco ligeramente permitiendo el llenado. Retirar el frasco después que no se observe ascenso de burbujas.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img35.svg', alt='alt')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Tanque de almacenamiento:
            p tomar la muestra bajando el frasco dentro del pozo hasta una profundidad de 15 a 30 cm. desde la superficie libre del líquido, evitando en todo momento tocar las paredes del pozo. Cuando no es posible tomar la muestra directamente con la mano, debe atarse al frasco un sobrepeso usando el extremo de un cordel limpio o en su caso equipo muestreador comercial.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img36.svg', alt='alt')






            



</template>

<script>
export default {
  name: 'Tema3',
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
