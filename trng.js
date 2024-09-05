const getRandom = async (min, max, base, num, col) => {
    try {
        const response = await fetch(`https://www.random.org/integers/?num=${num}&min=${min}&max=${max}&col=${col}&base=${base}&format=plain&rnd=new`);
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const randomNumbers = await response.text();
        return randomNumbers.trim(); 
    } catch (err) {
        console.error('Error', err);
    }
};

(async () => {
    const min = 1;
    const max = 100;
    const base = 10; 
    const num = 50; 
    const col = 10; 

    const random = await getRandom(min, max, base, num, col);
    console.log(`numeros gerados:\n${random}`);
})();
