function amigos() {
    const pessoa = new XMLHttpRequest()
    pessoa.open("GET", "https://next.json-generator.com/api/json/get/EkyZfHLU_");
    pessoa.responseType="json"
    pessoa.onload = function() {
    console.log(pessoa.response)
}


pessoa.send()
}
amigos()