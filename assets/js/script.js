function verificarRespuesta(respuestaCorrecta) {
    const respuestaElement = document.getElementById("respuesta");
    if (respuestaCorrecta) {
      respuestaElement.textContent = "Claro que si trabajemos en conjunto.";
    } else {
      respuestaElement.textContent = "Incorrecto. Intenta de nuevo.";
    }
  }