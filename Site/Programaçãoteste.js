function amigos() {
    const pessoa = new XMLHttpRequest()
    pessoa.open("GET", "https://next.json-generator.com/api/json/get/EkyZfHLU_");
    pessoa.responseType="json"
    pessoa.onload = function() {
    console.log(pessoa.response)

    var post = document.querySelectorAll(".post");

    for (var i = 0; i < post.length; i = i+1) {

        var poste = post[i];

        var imagem = document.createElement("img");
        var nome = document.createElement("h2");
        var username = document.createElement("p");
        var mensagem = document.createElement("p");

        var lugarimagem = poste.querySelector(".imagens");
        var lugarnome = poste.querySelector(".nome");
        var lugarusername = poste.querySelector(".arroba0");
        var lugarmensagem = poste.querySelector(".texto");

        lugarimagem.appendChild(imagem);
        lugarnome.appendChild(nome);
        lugarusername.appendChild(username);
        lugarmensagem.appendChild(mensagem);

        imagem.src = pessoa.response[i].imagem;
        mensagem.innerHTML = pessoa.response[i].mensagem;
        nome.innerHTML = pessoa.response[i].nome;
        username.innerHTML = pessoa.response[i].username;
    }


}
pessoa.send()
}
amigos()