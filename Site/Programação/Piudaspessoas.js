function amigos() {
    const pessoa = new XMLHttpRequest()
    pessoa.open("GET", "https://next.json-generator.com/api/json/get/EkyZfHLU_");
    pessoa.responseType="json"
    pessoa.onload = function() {

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

    var a = -1;

    for (i=0; (pessoa.response.length)>i; i++) {

        if (pessoa.response[i].mensagem.length <= 140) {
            
            let x = pessoa.response[i].imagem;
                
            if (pessoa.response[i].imagem === "") {
                x = "../Site/Image/Header/Perfil.png";
                console.log("entrei no if");
            }
            
            a++;
            var localpostn = document.querySelector(".postspadrões");
            var divpostn = document.createElement("div");
            localpostn.appendChild(divpostn);
            divpostn.classList.add("postn");
            //seleciona a div class= "novosposts"

            var nposte = document.querySelectorAll(".postn");

            var npost = nposte [a];

            //POST


            //Div pessoa + mensagem

            //cria a div class="pessoa"; "mensagem"
            var divpessoa = document.createElement("div");
            var divmensagem = document.createElement("div");     
            npost.appendChild(divpessoa);
            npost.appendChild(divmensagem);
            divpessoa.classList.add("pessoa");
            divmensagem.classList.add("mensagem");
            
            //DIV PESSOA
            //DIV PESSOA
            //DIV PESSOA

            //cria a div class="imagens"; "arroba"
            var sdivimagens = npost.querySelector(".pessoa");
            var divimagens = document.createElement("div");
            sdivimagens.appendChild(divimagens);
            var sdivarroba = npost.querySelector(".pessoa");
            var divarroba = document.createElement("div");
            sdivarroba.appendChild(divarroba);
            divimagens.classList.add("imagens");
            divarroba.classList.add("arroba");

            //cria a div class="nome"; "arroba0" dentro da class="arroba"
            var sdivnome = sdivimagens.querySelector(".arroba");
            var divnome = document.createElement("div");
            sdivnome.appendChild(divnome);
            var sdivarroba0 = sdivarroba.querySelector(".arroba");
            var divarroba0 = document.createElement("div");
            sdivarroba0.appendChild(divarroba0);
            divnome.classList.add("nome");
            divarroba0.classList.add("arroba0");

            //coloca os elementos nome e arroba dentro da div arroba0
            var snome = sdivnome.querySelector(".nome");
            var psnome = document.createElement("h2");
            snome.appendChild(psnome);
            psnome.innerHTML = pessoa.response[i].nome;
            var sarroba0 = sdivarroba0.querySelector(".arroba0");
            var psarroba0 = document.createElement("p");
            sarroba0.appendChild(psarroba0);
            psarroba0.innerHTML = pessoa.response[i].username;

            //coloca o elemento imagem dentro da div arroba0
            var simgimagem = sdivimagens.querySelector(".imagens");
            var imgimagem = document.createElement("img");
            simgimagem.appendChild(imgimagem);
            imgimagem.src = x;


            //DIV MENSAGEM
            //DIV MENSAGEM
            //DIV MENSAGEM

            //cria a div class="texto"; "reações"
            var sdivtexto = npost.querySelector(".mensagem");
            var divtexto = document.createElement("div");
            sdivtexto.appendChild(divtexto);
            var sdivreações = npost.querySelector(".mensagem");
            var divreações = document.createElement("div");
            sdivreações.appendChild(divreações);
            divtexto.classList.add("texto");
            divreações.classList.add("reações");

            //coloca o texto(piu)

            var sptexto = sdivtexto.querySelector(".texto");
            var ptexto = document.createElement("p");
            sptexto.appendChild(ptexto);
            ptexto.innerHTML = pessoa.response[i].mensagem;

            //coloca as reações 
            //replie
            var simgreplie = sdivreações.querySelector(".reações");
            var imgreplie = document.createElement("img");
            simgreplie.appendChild(imgreplie);
            imgreplie.classList.add("replie");
            imgreplie.src = "../Site/Image/Section/replie.png";

            var spreplie = sdivreações.querySelector(".reações");
            var preplie = document.createElement("p");
            spreplie.appendChild(preplie);
            preplie.classList.add("repliep");
            preplie.innerHTML = 0;
            //repiu
            var simgrepiu = sdivreações.querySelector(".reações");
            const imgrepiu = document.createElement("img");
            simgrepiu.appendChild(imgrepiu);
            imgrepiu.classList.add("repiu");
            imgrepiu.src = "../Site/Image/Section/repiu.png";

            var sprepiu = sdivreações.querySelector(".reações");
            const prepiu = document.createElement("p");
            sprepiu.appendChild(prepiu);
            prepiu.classList.add("repiup");
            prepiu.innerHTML = 0;
            //like
            var simglike = sdivreações.querySelector(".reações");
            const imglike = document.createElement("img");
            simglike.appendChild(imglike);
            imglike.classList.add("like");
            imglike.src = "../Site/Image/Section/like.png";
            
            var splike = sdivreações.querySelector(".reações");
            const plike = document.createElement("p");
            splike.appendChild(plike);
            plike.classList.add("likep");
            plike.innerHTML = 0;


            //REAÇÕES
            //REAÇÕES
            //REAÇÕES

            

            imglike.addEventListener("click", function () {
                if (plike.classList.contains("liked")) {
                    plike.classList.remove("liked");
                    plike.textContent--;
                    plike.style.color = "black";
                }
               else {
                plike.classList.add("liked");
                plike.textContent++;
                plike.style.color = "red";
               }
            }
            );

            
            
            imgrepiu.addEventListener("click", function () {
                if (prepiu.classList.contains("liked")) {
                    prepiu.classList.remove("liked");
                    prepiu.textContent--;
                    prepiu.style.color = "black";
                }
               else {
                prepiu.classList.add("liked");
                prepiu.textContent++;
                prepiu.style.color = "red";

               }
            }
            );

            


        }

    else {
        console.log(pessoa.response[i].nome+" "+"não seguiu o requerimento do piu de ter menos de 140 caracteres");

    }

    console.log(pessoa.response[3].imagem);

    

}   

    
}   

    
   



pessoa.send()

}

amigos()