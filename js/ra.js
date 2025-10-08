document.addEventListener('DOMContentLoaded', () => {
  const figuras = [
    {id:'cubo', texto:'Cubo: Área = 6 × lado², Volumen = lado³'},
    {id:'esfera', texto:'Esfera: Área = 4πr², Volumen = 4/3 π r³'},
    {id:'cilindro', texto:'Cilindro: Área = 2πr(h+r), Volumen = π r² h'},
    {id:'piramide', texto:'Pirámide: Área = base + lados, Volumen = 1/3 × base × altura'},
    {id:'fractal', texto:'Fractal: estructura compleja auto-similar'}
  ];

  figuras.forEach(f => {
    const el = document.getElementById(f.id);
    if(el){
      // Animación de rotación constante
      el.setAttribute('animation', 'property: rotation; to: 0 360 0; loop: true; dur: 10000; easing: linear');

      // Voz automática con retraso para que no se solapen
      const utterance = new SpeechSynthesisUtterance(f.texto);
      utterance.lang = 'es-ES';
      setTimeout(() => window.speechSynthesis.speak(utterance), 1000);
    }
  });
});
