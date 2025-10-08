document.addEventListener('DOMContentLoaded', () => {
  const figuras = [
    {id:'cubo', texto:'Cubo: Área = 6 × lado², Volumen = lado³, ejemplo: caja de regalo'},
    {id:'esfera', texto:'Esfera: Área = 4πr², Volumen = 4/3 π r³, ejemplo: pelota'},
    {id:'cilindro', texto:'Cilindro: Área = 2πr(h+r), Volumen = π r² h, ejemplo: lata de soda'},
    {id:'piramide', texto:'Pirámide: Área = base + lados, Volumen = 1/3 × base × altura, ejemplo: pirámide de Egipto'},
    {id:'fractal', texto:'Fractal: estructura compleja auto-similar'}
  ];

  figuras.forEach((f, index) => {
    const el = document.getElementById(f.id);
    if(el){
      // Rotación animada
      el.setAttribute('animation', 'property: rotation; to: 0 360 0; loop: true; dur: 12000; easing: linear');

      // Voz automática con retraso
      const utterance = new SpeechSynthesisUtterance(f.texto);
      utterance.lang = 'es-ES';
      setTimeout(() => window.speechSynthesis.speak(utterance), 1000 + index*3000);

      // Interacción: click para ampliar
      el.addEventListener('click', () => {
        const scale = el.getAttribute('scale');
        const factor = scale.x < 1 ? 1.2 : 0.6; // alterna tamaño
        el.setAttribute('scale', {x: factor, y: factor, z: factor});
      });
    }
  });
});
