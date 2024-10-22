// Mostrar el formulario al seleccionar una fórmula
document.getElementById('formula').addEventListener('change', function() {
    let formulaSeleccionada = this.value;
    
    // Mostrar el formulario de ingreso de datos
    if (formulaSeleccionada) {
        document.getElementById('formulario').style.display = 'block';
    }
    
    // Ocultar los resultados previos
    document.getElementById('resultados').style.display = 'none';
});

// Acción del botón Calcular
document.getElementById('calcularBtn').addEventListener('click', function() {
    // Obtener los valores de λ (lambda) y μ (mu)
    let lambda = parseFloat(document.getElementById('lambda').value);
    let mu = parseFloat(document.getElementById('mu').value);
    let formulaSeleccionada = document.getElementById('formula').value;

    // Validar si los valores ingresados son válidos
    if (isNaN(lambda) || isNaN(mu) || lambda <= 0 || mu <= 0) {
        alert("Por favor ingresa valores válidos. Asegúrate de que λ y μ sean mayores que 0.");
        return;
    }

  
    let resultado = '';
    let mensajeEstabilidad = '';

    if (lambda >= mu) {
        mensajeEstabilidad = 'Este es un sistema inestable porque la tasa de llegada (λ) es mayor o igual que la tasa de servicio (μ). En este caso, la cola crecerá indefinidamente.';
    } else {
        mensajeEstabilidad = 'Este es un sistema estable porque la tasa de llegada (λ) es menor que la tasa de servicio (μ). La cola no crecerá indefinidamente y el sistema podrá manejar las llegadas.';
    }

    switch (formulaSeleccionada) {
        case 'utilizacion':
         
            resultado = 'ρ = ' + (lambda / mu).toFixed(4);
            break;
        case 'L':
            resultado = 'L = ' + (lambda / (mu - lambda)).toFixed(4);
            break;
        case 'Lq':
            resultado = 'Lq = ' + ((lambda * lambda) / (mu * (mu - lambda))).toFixed(4);
            break;
        case 'W':
            resultado = 'W = ' + (1 / (mu - lambda)).toFixed(4) + ' horas';
            break;
        case 'Wq':
            resultado = 'Wq = ' + (lambda / (mu * (mu - lambda))).toFixed(4) + ' horas';
            break;
        default:
            resultado = 'Por favor selecciona una fórmula válida.';
    }

    document.getElementById('resultados').style.display = 'block';
    document.getElementById('resultadoFormula').textContent = resultado;
    document.getElementById('mensajeEstabilidad').textContent = mensajeEstabilidad;
});
