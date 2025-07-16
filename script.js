// script.js - lógica de interacción para malla interactiva

document.addEventListener("DOMContentLoaded", () => {
  const ramos = document.querySelectorAll(".ramo");

  // Función que actualiza el estado de bloqueo de los ramos según sus prerrequisitos
  function actualizarBloqueos() {
    ramos.forEach(ramo => {
      const prereqId = ramo.dataset.prereq;

      if (prereqId) {
        const prereq = document.querySelector(`.ramo[data-id="${prereqId}"]`);
        const aprobado = prereq && prereq.classList.contains("aprobado");

        if (!aprobado) {
          ramo.classList.add("bloqueado");
          ramo.classList.remove("aprobado");
        } else {
          ramo.classList.remove("bloqueado");
        }
      }
    });
  }

  // Evento al hacer clic en un ramo
  ramos.forEach(ramo => {
    ramo.addEventListener("click", () => {
      if (ramo.classList.contains("bloqueado")) return;
      ramo.classList.toggle("aprobado");
      actualizarBloqueos();
    });
  });

  // Aplicar bloqueos iniciales al cargar la página
  actualizarBloqueos();
});

