const recuperarDados = function(){
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://pokeapi.co/api/v2/pokemon?limit=150");
    xhr.send(null);
    xhr.onreadystatechange = function (){
        if(xhr.readyState === 4){
            var res = JSON.parse(xhr.responseText);
            console.log(res.results[40]);
        }
    };
}