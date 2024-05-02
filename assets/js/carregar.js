const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

tarefas.forEach(tarefa => card(tarefa));

function toPascalCase(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function toLowCase(str) {
    return str.replace(/\b\w+\b/g, function(word) {
        // Verifica se a palavra contém "'" seguido de caractere
        if (word.includes("'") && word.indexOf("'") < word.length - 1) {
            return word.toLowerCase();
        } else {
            return word.charAt(0).toLowerCase() + word.substr(1).toLowerCase();
        }
    }).replace(/\. /g, "-").replace(/'\s/g, "").replace(/'/g, '');
}

// Exemplo de uso:
console.log(toLowCase("Esta é uma Frase. Com 'Acentos' e. Pontuações.'")); // Output: "esta-e-uma-frase-com-acents-e-pontuacoes"
console.log(toLowCase("Farfetch'd")); // Output: "farfetch'd"
console.log(toLowCase("Farfetch'd GIF")); // Output: "farfetch'd-gif"



function card(tarefa){
    const content = `
    <div class="framed">
        <p class="title">
            ${toPascalCase(tarefa.titulo)}
        </p>
        <p>
            <a href="https://pokemondb.net/pokedex/${toLowCase(tarefa.titulo)}" target="_blank">
                <img src="https://img.pokemondb.net/sprites/black-white/anim/normal/${toLowCase(tarefa.titulo)}.gif" alt="${toPascalCase(tarefa.titulo)}">
            </a>
            <div>
                ${tarefa.descricao}
            </div>
        </p>

        <progress class="nes-progress is-success" value="50" max="100"></progress>
        <br>
        <div class="botoes">
            <button type="button">-</button>
            <button onclick="apagar('${tarefa.id}')" type="button">apagar</button>
            <button type="button">+</button>
        </div>
    </div>`

    const card = document.createElement("div");
    card.id = tarefa.id;
    card.innerHTML = content;

    document.querySelector("#lista-de-tarefas").appendChild(card);
}