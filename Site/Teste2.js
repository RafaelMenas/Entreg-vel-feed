function amigos() {
    const pessoa = new XMLHttpRequest()
    pessoa.open("GET", "https://next.json-generator.com/api/json/get/EkyZfHLU_");
    pessoa.responseType="json"
    pessoa.onload = function() {
    console.log(pessoa.response)

    var a = 0;
    var submit = document.querySelector("#Submit");
    submit.addEventListener("click", function() {
        a++; 
        console.log(a);
    });



    
    console.log(a);
}


pessoa.send()
}
amigos()