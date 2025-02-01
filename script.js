



function calcularRaizes(a, b, c) {
    const delta = b * b - 4 * a * c;
    if (delta < 0) {
        return [null, null];
    } else if (delta === 0) {
        const x1 = -b / (2 * a);
        return [x1, null];
    } else {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        return [x1, x2];
    }
}

function resolverEquacao() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);
    
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert("Por favor, insira valores numéricos válidos.");
        return;
    }
    
    if (a === 0) {
        alert("O coeficiente 'a' não pode ser zero.");
        return;
    }
    
    const [x1, x2] = calcularRaizes(a, b, c);
    
    const resultado = document.getElementById('resultado');
    if (x1 === null && x2 === null) {
        resultado.textContent = "Não há raízes reais.";
    } else if (x2 === null) {
        resultado.textContent = `Raiz única: x = ${x1.toFixed(2)}`;
    } else {
        resultado.textContent = `Raízes: x1 = ${x1.toFixed(2)}, x2 = ${x2.toFixed(2)}`;
    }
}
