const url = "https://pokeapi.co/api/v2/pokemon/94/"

fetch(url)
.then(response => response.json())
.then(data => {
    document.getElementById("name").innerHTML = `${data.name}`;
    document.getElementById("num").innerHTML = `${data.id}`;
    document.getElementById("foto").innerHTML = `<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png">`;
    console.log(data)
})
.catch(error => console.log(error))