// Contenido para: expomath-ra/js/ra.js

document.addEventListener('DOMContentLoaded', () => {
  const figuras = [
    {id:'cubo', texto:'Cubo: Área = 6 × lado², Volumen = lado³, ejemplo: caja de regalo'},
    {id:'esfera', texto:'Esfera: Área = 4πr², Volumen = 4/3 π r³, ejemplo: pelota'},
    {id:'cilindro', texto:'Cilindro: Área = 2πr(h+r), Volumen = π r² h, ejemplo: lata de soda'},
    {id:'piramide', texto:'Pirámide: Área = base + lados, Volumen = 1/3 × base × altura, ejemplo: pirámide de Egipto'},
    {id:'fractal', texto:'Fractal: estructura compleja auto-similar'},

    // --- CAMBIO AÑADIDO ---
    {id:'dodecaedro', texto:'Dodecaedro: Figura de 12 caras pentagonales regulares.'},
    {id:'torus', texto:'Torus o Dona: Área = 4 π cuadrado R r, Volumen = 2 π cuadrado R r cuadrado'}
  ];

  figuras.forEach((f, index) => {
    const el = document.getElementById(f.id);
    if(el){
      // Rotación animada (Esto se mantiene igual)
      el.setAttribute('animation', 'property: rotation; to: 0 360 0; loop: true; dur: 12000; easing: linear');

      // Voz (Preparada, pero no se reproduce automáticamente)
      const utterance = new SpeechSynthesisUtterance(f.texto);
      utterance.lang = 'es-ES';

      // --- CAMBIO REALIZADO ---
      // Elimine la voz automática con retraso.
      // La voz ahora se activará SÓLO con el clic (ver más abajo).
      /*
      setTimeout(() => window.speechSynthesis.speak(utterance), 1000 + index*3000);
      */
      // --- FIN DEL CAMBIO ---


      // --- CAMBIO REALIZADO (Click) ---
      // Reemplece la función de "click para ampliar" por
      // "click para mostrar/ocultar información y hablar".
      
      /*
      // Este es el código antiguo que escalaba la figura:
      el.addEventListener('click', () => {
        const scale = el.getAttribute('scale');
        const factor = scale.x < 1 ? 1.2 : 0.6; // alterna tamaño
        el.setAttribute('scale', {x: factor, y: factor, z: factor});
      });
      */

      // Este es el nuevo código para interactividad:
     // --- INICIO DE LA CORRECCIÓN ---
      el.addEventListener('click', () => {
        const panel = el.querySelector('a-plane');
        
        if (panel) {
          // 1. Obtenemos el atributo 'visible'. En el primer clic, será "false".
          const esVisibleString = panel.getAttribute('visible');

          // 2. Comprobamos si el texto es "false".
          if (esVisibleString === 'false') {
            // Si estaba en "false", lo ponemos en "true" (visible)
            panel.setAttribute('visible', 'true');
          } else {
            // Si estaba en "true" (o cualquier otra cosa), lo ponemos en "false" (oculto)
            panel.setAttribute('visible', 'false');
          }
        }

        // La voz
        window.speechSynthesis.speak(utterance);
      });
      // --- FIN DEL CAMBIO ---
    }
  });
});