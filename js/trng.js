const getRandom = async (min, max, base, num, col) => {
    try {
        const response = await fetch(`https://www.random.org/integers/?num=${num}&min=${min}&max=${max}&col=${col}&base=${base}&format=plain&rnd=new`);

        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.statusText}`);
        }

        const randomNumbers = await response.text();
        return randomNumbers.trim(); 
    } catch (err) {
        console.error('Error:', err);
        return "Error";
    }
};

async function gerarNumerosTRNGs() {
    const min = document.getElementById("min").value;
    const max = document.getElementById("max").value;
    const base = document.getElementById("base").value;
    const num = document.getElementById("num").value;
    const col = document.getElementById("col").value;

    if (!min || !max || !base || !num || !col) {
        document.getElementById("result").innerText = "preencha todos os campos!";
        return;
    }

    const result = await getRandom(min, max, base, num, col);
    document.getElementById("result").innerText = `Numeros gerados:\n${result}`;
}