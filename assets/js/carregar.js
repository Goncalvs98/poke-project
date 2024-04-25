const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

tarefas.forEach(tarefa => card(tarefa));

function card(tarefa){
    const content = `
    <div class="framed">
        <p class="title">
            ${tarefa.titulo}
        </p>
        <p>
            <a href="https://pokemondb.net/pokedex/${tarefa.titulo}" target="_blank">
                <img src="https://img.pokemondb.net/sprites/black-white/anim/normal/${tarefa.titulo}.gif" alt="Bulbasaur">
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