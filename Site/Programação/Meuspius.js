function amigos() {
    const pessoa = new XMLHttpRequest()
    pessoa.open("GET", "https://next.json-generator.com/api/json/get/EkyZfHLU_");
    pessoa.responseType="json"
    pessoa.onload = function() {
    

    var submit = document.querySelector("#Submit");

    var a = -1;

    submit.addEventListener("click", function(event) {
        event.preventDefault();
        
            var form = document.querySelector("#Spiu");
            var tpiu = form.wpiu.value;

            if (tpiu.length <= 140 && tpiu.length>=1) {
                
                a++;
                var localpostn = document.querySelector(".novosposts");
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
                psnome.innerHTML = "Eu";
                var sarroba0 = sdivarroba0.querySelector(".arroba0");
                var psarroba0 = document.createElement("p");
                sarroba0.appendChild(psarroba0);
                psarroba0.innerHTML = "@Eu";

                //coloca o elemento imagem dentro da div arroba0
                var simgimagem = sdivimagens.querySelector(".imagens");
                var imgimagem = document.createElement("img");
                simgimagem.appendChild(imgimagem);
                imgimagem.src = "../Site/Image/Section/Perfil2.png";


                //DIV MENSAGEM
                //DIV MENSAGEM
                //DIV MENSAGEM

                //cria a div class="texto"; "rea????es"
                var sdivtexto = npost.querySelector(".mensagem");
                var divtexto = document.createElement("div");
                sdivtexto.appendChild(divtexto);
                var sdivrea????es = npost.querySelector(".mensagem");
                var divrea????es = document.createElement("div");
                sdivrea????es.appendChild(divrea????es);
                divtexto.classList.add("texto");
                divrea????es.classList.add("rea????es");

                //coloca o texto(piu)

                var sptexto = sdivtexto.querySelector(".texto");
                var ptexto = document.createElement("p");
                sptexto.appendChild(ptexto);
                ptexto.innerHTML = (tpiu);

                //coloca as rea????es 
                //replie
                var simgreplie = sdivrea????es.querySelector(".rea????es");
                var imgreplie = document.createElement("img");
                simgreplie.appendChild(imgreplie);
                imgreplie.classList.add("replie");
                imgreplie.src = "../Site/Image/Section/replie.png";

                var spreplie = sdivrea????es.querySelector(".rea????es");
                var preplie = document.createElement("p");
                spreplie.appendChild(preplie);
                preplie.classList.add("repliep");
                preplie.innerHTML = 0;
                //repiu
                var simgrepiu = sdivrea????es.querySelector(".rea????es");
                var imgrepiu = document.createElement("img");
                simgrepiu.appendChild(imgrepiu);
                imgrepiu.classList.add("repiu");
                imgrepiu.src = "../Site/Image/Section/repiu.png";

                var spreplie = sdivrea????es.querySelector(".rea????es");
                var preplie = document.createElement("p");
                spreplie.appendChild(preplie);
                preplie.classList.add("repiup");
                preplie.innerHTML = 0;
                //like
                var simglike = sdivrea????es.querySelector(".rea????es");
                var imglike = document.createElement("img");
                simglike.appendChild(imglike);
                imglike.classList.add("like");
                imglike.src = "../Site/Image/Section/like.png";

                var splike = sdivrea????es.querySelector(".rea????es");
                var plike = document.createElement("p");
                splike.appendChild(plike);
                plike.classList.add("likep");
                plike.innerHTML = 0;
            }
    
        else {
            console.log(response.pessoa[i].nome+"n??o est?? nas predefini????es");

        }
    
    }   
    
    
    
    );


    console.log(a);
}


pessoa.send()
}
amigos()