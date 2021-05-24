function amigos() {
    const pessoa = new XMLHttpRequest()
    pessoa.open("GET", "https://next.json-generator.com/api/json/get/EkyZfHLU_");
    pessoa.responseType="json"
    pessoa.onload = function() {
    console.log(pessoa.response)
    
    //primeiro post
    var imagem0 = document.createElement("img");
    var mensagem0 = document.createElement("p");
    var nome0 = document.createElement("h2");
    var username0 = document.createElement("p");
    var lugarimagem0 = document.getElementById("imagem0");
    var lugarmensagem0 = document.getElementById("mensagem0");
    var lugarnome0 = document.getElementById("nome0");
    var lugarusername0 = document.getElementById("username0");
    lugarimagem0.appendChild(imagem0);
    lugarmensagem0.appendChild(mensagem0);
    lugarnome0.appendChild(nome0);
    lugarusername0.appendChild(username0);
    imagem0.src = pessoa.response[0].imagem;
    mensagem0.innerHTML = pessoa.response[0].mensagem;
    nome0.innerHTML = pessoa.response[0].nome;
    username0.innerHTML = pessoa.response[0].username;
    
    //segundo post
    var imagem1 = document.createElement("img");
    var mensagem1 = document.createElement("p");
    var nome1 = document.createElement("h2");
    var username1 = document.createElement("p");
    var lugarimagem1 = document.getElementById("imagem1");
    var lugarmensagem1 = document.getElementById("mensagem1");
    var lugarnome1 = document.getElementById("nome1");
    var lugarusername1 = document.getElementById("username1");
    lugarimagem1.appendChild(imagem1);
    lugarmensagem1.appendChild(mensagem1);
    lugarnome1.appendChild(nome1);
    lugarusername1.appendChild(username1);
    imagem1.src = pessoa.response[1].imagem;
    mensagem1.innerHTML = pessoa.response[1].mensagem;
    nome1.innerHTML = pessoa.response[1].nome;
    username1.innerHTML = pessoa.response[1].username;

    //terceiro post
    var imagem2 = document.createElement("img");
    var mensagem2 = document.createElement("p");
    var nome2 = document.createElement("h2");
    var username2 = document.createElement("p");
    var lugarimagem2 = document.getElementById("imagem2");
    var lugarmensagem2 = document.getElementById("mensagem2");
    var lugarnome2 = document.getElementById("nome2");
    var lugarusername2 = document.getElementById("username2");
    lugarimagem2.appendChild(imagem2);
    lugarmensagem2.appendChild(mensagem2);
    lugarnome2.appendChild(nome2);
    lugarusername2.appendChild(username2);
    imagem2.src = pessoa.response[2].imagem;
    mensagem2.innerHTML = pessoa.response[2].mensagem;
    nome2.innerHTML = pessoa.response[2].nome;
    username2.innerHTML = pessoa.response[2].username;

    //quarto post
        var imagem3 = document.createElement("img");
        var mensagem3 = document.createElement("p");
        var nome3 = document.createElement("h2");
        var username3 = document.createElement("p");
        var lugarimagem3 = document.getElementById("imagem3");
        var lugarmensagem3 = document.getElementById("mensagem3");
        var lugarnome3 = document.getElementById("nome3");
        var lugarusername3 = document.getElementById("username3");
        lugarimagem3.appendChild(imagem3);
        lugarmensagem3.appendChild(mensagem3);
        lugarnome3.appendChild(nome3);
        lugarusername3.appendChild(username3);
        imagem3.src = pessoa.response[3].imagem;
        mensagem3.innerHTML = pessoa.response[3].mensagem;
        nome3.innerHTML = pessoa.response[3].nome;
        username3.innerHTML = pessoa.response[3].username;

    //quintos post
        var imagem4 = document.createElement("img");
        var mensagem4 = document.createElement("p");
        var nome4 = document.createElement("h2");
        var username4 = document.createElement("p");
        var lugarimagem4 = document.getElementById("imagem4");
        var lugarmensagem4 = document.getElementById("mensagem4");
        var lugarnome4 = document.getElementById("nome4");
        var lugarusername4 = document.getElementById("username4");
        lugarimagem4.appendChild(imagem4);
        lugarmensagem4.appendChild(mensagem4);
        lugarnome4.appendChild(nome4);
        lugarusername4.appendChild(username4);
        imagem4.src = pessoa.response[4].imagem;
        mensagem4.innerHTML = pessoa.response[4].mensagem;
        nome4.innerHTML = pessoa.response[4].nome;
        username4.innerHTML = pessoa.response[4].username;

    //sexto post
        var imagem5 = document.createElement("img");
        var mensagem5 = document.createElement("p");
        var nome5 = document.createElement("h2");
        var username5 = document.createElement("p");
        var lugarimagem5 = document.getElementById("imagem5");
        var lugarmensagem5 = document.getElementById("mensagem5");
        var lugarnome5 = document.getElementById("nome5");
        var lugarusername5 = document.getElementById("username5");
        lugarimagem5.appendChild(imagem5);
        lugarmensagem5.appendChild(mensagem5);
        lugarnome5.appendChild(nome5);
        lugarusername5.appendChild(username5);
        imagem5.src = pessoa.response[5].imagem;
        mensagem5.innerHTML = pessoa.response[5].mensagem;
        nome5.innerHTML = pessoa.response[5].nome;
        username5.innerHTML = pessoa.response[5].username;
    
    //sétimo post
    var imagem6 = document.createElement("img");
    var mensagem6 = document.createElement("p");
    var nome6 = document.createElement("h2");
    var username6 = document.createElement("p");
    var lugarimagem6 = document.getElementById("imagem6");
    var lugarmensagem6 = document.getElementById("mensagem6");
    var lugarnome6 = document.getElementById("nome6");
    var lugarusername6 = document.getElementById("username6");
    lugarimagem6.appendChild(imagem6);
    lugarmensagem6.appendChild(mensagem6);
    lugarnome6.appendChild(nome6);
    lugarusername6.appendChild(username6);
    imagem6.src = pessoa.response[6].imagem;
    mensagem6.innerHTML = pessoa.response[6].mensagem;
    nome6.innerHTML = pessoa.response[6].nome;
    username6.innerHTML = pessoa.response[6].username;
    
    //oitavo post
    var imagem7 = document.createElement("img");
    var mensagem7 = document.createElement("p");
    var nome7 = document.createElement("h2");
    var username7 = document.createElement("p");
    var lugarimagem7 = document.getElementById("imagem7");
    var lugarmensagem7 = document.getElementById("mensagem7");
    var lugarnome7 = document.getElementById("nome7");
    var lugarusername7 = document.getElementById("username7");
    lugarimagem7.appendChild(imagem7);
    lugarmensagem7.appendChild(mensagem7);
    lugarnome7.appendChild(nome7);
    lugarusername7.appendChild(username7);
    imagem7.src = pessoa.response[7].imagem;
    mensagem7.innerHTML = pessoa.response[7].mensagem;
    nome7.innerHTML = pessoa.response[7].nome;
    username7.innerHTML = pessoa.response[7].username;
    
    //nono post
    var imagem8 = document.createElement("img");
    var mensagem8 = document.createElement("p");
    var nome8 = document.createElement("h2");
    var username8 = document.createElement("p");
    var lugarimagem8 = document.getElementById("imagem8");
    var lugarmensagem8 = document.getElementById("mensagem8");
    var lugarnome8 = document.getElementById("nome8");
    var lugarusername8 = document.getElementById("username8");
    lugarimagem8.appendChild(imagem8);
    lugarmensagem8.appendChild(mensagem8);
    lugarnome8.appendChild(nome8);
    lugarusername8.appendChild(username8);
    imagem8.src = pessoa.response[8].imagem;
    mensagem8.innerHTML = pessoa.response[8].mensagem;
    nome8.innerHTML = pessoa.response[8].nome;
    username8.innerHTML = pessoa.response[8].username;
    
    //décimo post
    var imagem9 = document.createElement("img");
    var mensagem9 = document.createElement("p");
    var nome9 = document.createElement("h2");
    var username9 = document.createElement("p");
    var lugarimagem9 = document.getElementById("imagem9");
    var lugarmensagem9 = document.getElementById("mensagem9");
    var lugarnome9 = document.getElementById("nome9");
    var lugarusername9 = document.getElementById("username9");
    lugarimagem9.appendChild(imagem9);
    lugarmensagem9.appendChild(mensagem9);
    lugarnome9.appendChild(nome9);
    lugarusername9.appendChild(username9);
    imagem9.src = pessoa.response[9].imagem;
    mensagem9.innerHTML = pessoa.response[9].mensagem;
    nome9.innerHTML = pessoa.response[9].nome;
    username9.innerHTML = pessoa.response[9].username;
    
    //décimo primeiro post
    var imagem10 = document.createElement("img");
    var mensagem10 = document.createElement("p");
    var nome10 = document.createElement("h2");
    var username10 = document.createElement("p");
    var lugarimagem10 = document.getElementById("imagem10");
    var lugarmensagem10 = document.getElementById("mensagem10");
    var lugarnome10 = document.getElementById("nome10");
    var lugarusername10 = document.getElementById("username10");
    lugarimagem10.appendChild(imagem10);
    lugarmensagem10.appendChild(mensagem10);
    lugarnome10.appendChild(nome10);
    lugarusername10.appendChild(username10);
    imagem10.src = pessoa.response[10].imagem;
    mensagem10.innerHTML = pessoa.response[10].mensagem;
    nome10.innerHTML = pessoa.response[10].nome;
    username10.innerHTML = pessoa.response[10].username;
    
    //décimo segundo post
    var imagem11 = document.createElement("img");
    var mensagem11 = document.createElement("p");
    var nome11 = document.createElement("h2");
    var username11 = document.createElement("p");
    var lugarimagem11 = document.getElementById("imagem11");
    var lugarmensagem11 = document.getElementById("mensagem11");
    var lugarnome11 = document.getElementById("nome11");
    var lugarusername11 = document.getElementById("username11");
    lugarimagem11.appendChild(imagem11);
    lugarmensagem11.appendChild(mensagem11);
    lugarnome11.appendChild(nome11);
    lugarusername11.appendChild(username11);
    imagem11.src = pessoa.response[11].imagem;
    mensagem11.innerHTML = pessoa.response[11].mensagem;
    nome11.innerHTML = pessoa.response[11].nome;
    username11.innerHTML = pessoa.response[11].username;
    
    //décimo terceiro post
    var imagem12 = document.createElement("img");
    var mensagem12 = document.createElement("p");
    var nome12 = document.createElement("h2");
    var username12 = document.createElement("p");
    var lugarimagem12 = document.getElementById("imagem12");
    var lugarmensagem12 = document.getElementById("mensagem12");
    var lugarnome12 = document.getElementById("nome12");
    var lugarusername12 = document.getElementById("username12");
    lugarimagem12.appendChild(imagem12);
    lugarmensagem12.appendChild(mensagem12);
    lugarnome12.appendChild(nome12);
    lugarusername12.appendChild(username12);
    imagem12.src = pessoa.response[12].imagem;
    mensagem12.innerHTML = pessoa.response[12].mensagem;
    nome12.innerHTML = pessoa.response[12].nome;
    username12.innerHTML = pessoa.response[12].username;

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