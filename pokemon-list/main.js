const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(){
    if (xhr.readyState === 4 && xhr.status === 200){
        const jsonData = xhr.responseText;
        const data = JSON.parse(jsonData);
        const pokemon = data.objects[0].pokemon;

        displayData(pokemon);
    }
}

function displayData(list){
    list.forEach(pokemon => {
        let p = document.createElement("p");
        p.textContent = pokemon.name;
        document.body.append(p);
    })
}



xhr.open("GET", "https://api.vschool.io/pokemon", true);
xhr.send();