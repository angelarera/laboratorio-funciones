// Actualizar el contenido de mi H1 siempre con dos dígitos
const turnoDisplay = document.querySelector(".numero-turno") as HTMLElement;
let turnoActual = 1;

function actualizarTurno() {
  turnoDisplay.textContent = turnoActual.toString().padStart(2, "0");
}

// Botón de reseteo
const resetBtn = document.querySelector(".reset-btn");

if (resetBtn !== null && resetBtn instanceof HTMLButtonElement) {
  resetBtn.addEventListener("click", () => {
    turnoActual = 0;
    actualizarTurno();
  });
}

// Botón anterior
const prevBtn = document.querySelector(".prev-btn");

if (prevBtn !== null && prevBtn instanceof HTMLButtonElement) {
  prevBtn.addEventListener("click", () => {
    if (turnoActual > 0) {
      turnoActual -= 1; // "-= 1" es una forma abreviada de poner "= turnoActual - 1"
      actualizarTurno();
    }
  });
}

// Botón posterior
const nextBtn = document.querySelector(".next-btn");

if (nextBtn !== null && nextBtn instanceof HTMLButtonElement) {
  nextBtn.addEventListener("click", () => {
    turnoActual += 1; // "+= 1" es una forma abreviada de poner "= turnoActual + 1"
    actualizarTurno();
  });
}

// Añadir turno manualmente
const enviarBtn = document.querySelector(".enviar-btn");

if (enviarBtn !== null && enviarBtn instanceof HTMLButtonElement) {
  enviarBtn.addEventListener("click", () => {
    const numeroManual = parseInt(
      (document.querySelector(".numero-manual") as HTMLInputElement).value
    );
    turnoActual = numeroManual;
    actualizarTurno();
  });
}
