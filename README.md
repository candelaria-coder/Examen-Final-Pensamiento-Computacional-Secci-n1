# Examen Final/Pensamiento Computacional/Sección 1

## Tragamonedas Interactivo
[link a p5js](https://editor.p5js.org/elena.fonseca/sketches/hiqb6PPrx)

Autor: Elena Candelaria Fonseca Vogel

Asignatura: Pensamiento Computacional

### Descripción general

Eate proyecto final consiste en una simulacion de tragamonedas interactivo desarrollado en p5.js, en donde el usuario al apretar ciertas teclas hace que la máquina cumpla diversas funciones para poder jugar, pasando por tres estados de juego: 

estado 0 = Pantalla de inicio (Invitacion a jugar)

estado 1 = Pantalla de juego (Máquina tragamonedas)

estado 2 = Pantalla de victoria (Mensaje ganador e invitación a volver a jugar)


### Inputs
Barra espaciadora: Da inicio al juego
![I](imagenes/inicio.jpg)


ENTER: Cumple la funcion de girar aleatoriamente los simbolos
R: Reinicio del juego al ganar

### Outputs
Cambio de símbolos: 🍒, 💎, ⭐, ❤️, 🔔
Puntaje: Hasta 5 puntos
Mensaje JACKPOT+sonido: Al ganar un punto
Pantalla final: Cuando ganas los 5 puntos

Presionar ENTER
Se generan tres símbolos aleatorios
El programa compara los símbolos
¿Son iguales?
Sí = suma punto + Activa sonido + Muestra JACKPOT
¿Tiene 5 puntos?
Sí = cambia al estado final
