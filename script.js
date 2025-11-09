function autorizar() {
  const altura = parseFloat(document.querySelector('#rotoplax').value);
  const resultado = document.querySelector('#resultado');

  // Validar solo valores fuera del rango permitido
  if (isNaN(altura) || altura < 0 || altura > 6.75) {
    resultado.innerHTML = "⚠️ Ingrese una altura válida entre 0 y 6.75 metros.";
    return;
  }

  // Si la altura es 0, la velocidad también es 0
  if (altura === 0) {
    resultado.innerHTML = `
      <p>Cuando la altura es <b>0.00 m</b>, la velocidad es <b>0.000 m/min</b>.</p>
    `;
    return;
  }

  // Cálculo corregido
  const calcular = (24.3 / Math.PI) * (1 / Math.pow(altura, 2));

  resultado.innerHTML = `
    <p>La velocidad con la que sube el nivel de concreto a una altura de 
    <b>${altura.toFixed(2)} m</b> es aproximadamente 
    <b>${calcular.toFixed(3)} m/min</b>.</p>
  `;
}