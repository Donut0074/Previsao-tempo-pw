let chave = "e1955fcdc6ee1b0a96da5c02d8e550b6";



function clique() {
    let cidade = document.querySelector(".input-cidade").value
    buscarCidade(cidade);
}

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


async function buscarCidade(cidade) {
    let dados = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        cidade + 
        "&appid=" +
        chave+
        "&lang=pt_br"+
        "&units=metric"

    ).then(res => res.json())

    console.log(dados);

    colocaNaTela(dados)

}

function colocaNaTela(dados) {
    document.querySelector(".nome-cidade").innerHTML= dados.name
    document.querySelector(".graus").innerHTML= dados.main.temp;
    document.querySelector(".tela-descricao").innerHTML = dados.weather[0].description;
    document.querySelector(".tela-umidade").innerHTML = dados.main.humidity + "%";

    if(dados.weather[0].main == "Clouds"){
        document.querySelector("#icon").src = "images/clouds.png"
    }
    else if(dados.weather[0].main == "Clear"){
        document.querySelector("#icon").src = "images/clear.png"
    }
    else if(dados.weather[0].main == "Drizzle"){
        document.querySelector("#icon").src = "images/drizzle.png"
    }
    else if(dados.weather[0].main == "Mist"){
        document.querySelector("#icon").src = "images/mist.png"
    }
    else if(dados.weather[0].main == "Rain"){
        document.querySelector("#icon").src = "images/rain.png"
    }

    if(dados.weather[0].main == "Clouds"){
        document.querySelector("#background").background = "images/fundo-nuvens.jpg"
    }
    else if(dados.weather[0].main == "Clear"){
        document.querySelector("#background").background = "images/ceulimpo-fundo.jpg"
    }
    else if(dados.weather[0].main == "Drizzle"){
        document.querySelector("#background").background = "images/fundo-drizzle.jpg"
    }
    else if(dados.weather[0].main == "Mist"){
        document.querySelector("#background").background = "images/fundo-mist.jpg"
    }
    else if(dados.weather[0].main == "Rain"){
        document.querySelector("#background").background = "images/fundo-chuva.jpg"
    }

}
