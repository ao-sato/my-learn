
// 要素を取得する
const poke_container = document.getElementById('poke-container')

// 定数を定義
const pokemon_count = 150;

// ポケモン取得
const fetchPokemons = async () => {
    createQuiz();
}

const createQuiz = async () => {

    // 初期化
    document.getElementById("poke-name").innerHTML = "";
    document.getElementById("poke-img").innerHTML = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById('pokedex_id').value = "";

    var test = await getPokemon();

    // 名称
    var pokeName = test.name
    document.getElementById("poke-name").innerText = pokeName;

    // ポケモン画像
    var img_element = document.createElement('img');
    img_element.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/${test.id}.png`;
    var pokeImgArea = document.getElementById("poke-img");
    pokeImgArea.appendChild(img_element);

    // 答え
    var pokedexId = test.id
    document.getElementById("correct_pokedex_id").innerText = pokedexId;
    document.getElementById("result").innerText = "";
}

// pokeAPIから情報取得
const getPokemon = async () => {
    var min = 1 ;
    var max = pokemon_count ;
    id = Math.floor( Math.random() * (max + 1 - min) ) + min ;
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

// 決定
function clickAnswer(){
    var input_id = document.getElementById('pokedex_id').value;
    var answer_id = document.getElementById("correct_pokedex_id").innerHTML;
    if(input_id === answer_id){
        document.getElementById("result").innerText = "正解！";
    }else{
        document.getElementById("result").innerText = "残念…";
    }
}

// 降参
function clickSurrender(){
    createQuiz();
}

// ページが読み込まれた時に実行
fetchPokemons();
