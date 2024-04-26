const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

tarefas.forEach(tarefa => card(tarefa));

function toPascalCase(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function card(tarefa){
    const content = `
    <div class="framed">
        <p class="title">
            ${toPascalCase(tarefa.titulo)}
        </p>
        <p>
            <a href="https://pokemondb.net/pokedex/${tarefa.titulo.toLowerCase()}" target="_blank">
                <img src="https://img.pokemondb.net/sprites/black-white/anim/normal/${tarefa.titulo.toLowerCase()}.gif" alt="${toPascalCase(tarefa.titulo)}">
            </a>
            <div class="framed">
                ${tarefa.descricao}
            </div>
        </p>
        <progress class="nes-progress is-success" value="50" max="100"></progress>
        <br>

        <button type="button">-</button>
        <button type="button">apagar</button>
        <button type="button">+</button>
    </div>`

    const card = document.createElement("div");
    card.innerHTML = content;

    document.querySelector("#lista-de-tarefas").appendChild(card);
}