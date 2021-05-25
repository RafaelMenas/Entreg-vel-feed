function amigos() {
    const pessoa = new XMLHttpRequest()
    pessoa.open("GET", "https://next.json-generator.com/api/json/get/EkyZfHLU_");
    pessoa.responseType="json"
    pessoa.onload = function() {
    console.log(pessoa.response);

    var search = document.querySelector("#busca");

    search.addEventListener("input", function(){
    console.log(this.value);
    var posts = document.querySelectorAll(".postspadrões");

    if (this.value.length > 0) {
        for (var i = 0; i < posts.length; i++) {
            var post = posts[i];
            var nome = paciente.querySelector(".nome");
            var name = nome.textContent;
            var expressao = new RegExp(this.value, "i"); 

            if (!expressao.test(name)) {
                post.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < posts.length; i++) {
            var post = posts[i];
            post.classList.remove("invisivel");
        }
    }
});








}
pessoa.send()
}
amigos()