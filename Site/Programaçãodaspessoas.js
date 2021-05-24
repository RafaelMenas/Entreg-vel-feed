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

    //aba de novos amigos

    //someone1
    var someoneimg1 = document.createElement("img");
    var lugarsomeoneimg1 = document.getElementById("someoneimg1");
    lugarsomeoneimg1.appendChild(someoneimg1);
    someoneimg1.src = pessoa.response[11].imagem;

    var someonep1 = document.createElement("p");
    var lugarsomeonep1 = document.getElementById("someonep1");
    lugarsomeonep1.appendChild(someonep1);
    someonep1.innerHTML = pessoa.response[5].nome;

    //someone2
    var someoneimg2 = document.createElement("img");
    var lugarsomeoneimg2 = document.getElementById("someoneimg2");
    lugarsomeoneimg2.appendChild(someoneimg2);
    someoneimg2.src = pessoa.response[0].imagem;

    var someonep2 = document.createElement("p");
    var lugarsomeonep2 = document.getElementById("someonep2");
    lugarsomeonep2.appendChild(someonep2);
    someonep2.innerHTML = pessoa.response[0].nome;



}









pessoa.send()
}
amigos()