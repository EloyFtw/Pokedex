const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("img/pokesad.jpg")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);
            cambiarTexto(named, data.name.toUpperCase());
            cambiarTexto(stadis, data.stats[0].base_stat + '&emsp;&ensp;' + data.stats[1].base_stat + '&emsp;&ensp;' +
            data.stats[2].base_stat + '&emsp;&emsp;' + data.stats[3].base_stat + '&emsp;&emsp;' +
            data.stats[4].base_stat + '&emsp;&ensp;' + data.stats[5].base_stat  );

            cambiarTexto(alture, data.height);
            cambiarTexto(weigh, data.weight);
            cambiarTexto(tipo, mostrarTipos(data));
            cambiarTexto(franc, mostrarFortaleza(data));
        }
    });
}
function mostrarTipos(data){
    let cadena="";
    for(let i=0;i<data.types.length;i++){
        cadena+= data.types[i].type.name;
        if(i==data.types.length-1){
            cadena+=".";
        }else{
            cadena+=",  ";
        }
    }
    return cadena;
}

function mostrarFortaleza(data){
    let cadena="";
    for(let i=0;i<data.held_items.length;i++){
        cadena+= data.held_items[i].item.name;
        if(i==data.held_items.length-1){
            cadena+=".";
        }else{
            cadena+=",  ";
        }
    }
    return cadena;
}

function cambiarTexto(obj, cadena) {
    obj.innerHTML = cadena;
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}