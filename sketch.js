// VARIABLES
let estado = 0; // 0=inicio, 1=juego, 2=ganaste

// ARRAY DE SIMBOLOS
let simbolos = ["🍒", "💎", "⭐", "❤️", "🔔"];

// INICIO DE FILA
let fila1 = "❓";
let fila2 = "❓";
let fila3 = "❓";
let puntos = 0;

// SONIDO JACKPOT
let sonidoGanador;
let jackpot = false;
let tiempoJackpot = 0;

function preload() {
  sonidoGanador = loadSound("puyopuyomegafan1234-winner-game-sound-404167.mp3");
}

function setup() {
  createCanvas(800, 600);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(101, 16, 51);

// estado 0
  if (estado == 0) {
    pantallaInicio();
  }

// estado 1
  else if (estado == 1) {
    pantallaJuego();
  }

// estado 2
  else if (estado == 2) {
    pantallaFinal();
  }
}

// PANTALLA INICIO (estado 0)
function pantallaInicio() {

  fill(221, 46, 92);
  stroke(253, 210, 201)
  strokeWeight(3)
  
  textSize(50);
  text("✨TRAGAMONEDAS✨", width/2, 200);

  textSize(25);
  text("Presiona ESPACIO para comenzar", width/2, 350);

}

// PANTALLA JUEGO (estado 1)
function pantallaJuego() {

  fill(221, 46, 92);
  stroke(253, 210, 201)
  strokeWeight(3)
  
  textSize(40);
  text("Puntos:" + puntos, width/2, 80);

  // Máquina
  fill(255, 190, 90);
  stroke(255, 170, 70)
  strokeWeight(3)
  rect(200,150,400,250,20);

  // Filas
  fill(255);
  rect(240,200,80,80);
  rect(360,200,80,80);
  rect(480,200,80,80);

  fill(0);
  textSize(40);

  text(fila1,280,240);
  text(fila2,400,240);
  text(fila3,520,240);

  fill(221, 46, 92);
  stroke(253, 210, 201)
  strokeWeight(3)
  
  textSize(20);
  text("Presiona ENTER para girar", width/2, 500);
  
// solo si se gana un punto
  if (jackpot) {

  fill(120, 200, 220);
  stroke(80, 180, 210);
  strokeWeight(5);

  textSize(50);
  text("‼️JACKPOT +1‼️", width/2, 120);

  if (millis() - tiempoJackpot > 2000) {
    jackpot = false;
  }
}

}

// PANTALLA FINAL (estado 2)
function pantallaFinal() {

  background(221, 46, 92);

  fill(255, 210, 120);
  stroke(255, 190, 90)
  strokeWeight(3)

  textSize(60);
  text("🏆GANASTE🏆", width/2, 220);

  textSize(30);
  text("Puntaje: " + puntos, width/2, 320);

  text("Presiona R para reiniciar", width/2, 420);

}

// CAMBIO SIMBOLOS
function cambiar() {

  fila1 = random(simbolos);
  fila2 = random(simbolos);
  fila3 = random(simbolos);

  verificarResultado();

}

// VERIFICAR RESULTADO
function verificarResultado() {

  if (fila1 == fila2 &&
      fila2 == fila3) {

      puntos++;

      jackpot = true;
      tiempoJackpot = millis();

      sonidoGanador.play();

      if (puntos >= 5) {
        estado = 2;
      }

  }

}

// INPUT TECLADO
// Comportamiento de las 3 teclas
function keyPressed() {

  // inicio juego
  if (estado == 0 && key == ' ') {
    estado = 1;
  }

  // girar
  if (estado == 1 && keyCode == ENTER) {
    cambiar(); 
    
// Mostrar mensajes en la consola
  console.log("presionaste ENTER") // cantidad de intentos
    
  }

  // reiniciar
  if (estado == 2 && (key == 'r' || key == 'R')) {

    puntos = 0;

    fila1 = "❓";
    fila2 = "❓";
    fila3 = "❓";

    estado = 0;
  }

} 