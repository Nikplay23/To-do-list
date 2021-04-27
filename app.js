const popUp = document.getElementById('popUp')
let gramatas = []

window.addEventListener('load', () => {
    gramatas = JSON.parse(localStorage.getItem("gramatas"));
    console.log(gramatas)
    render();
})


document.getElementById('jaunaGramata').addEventListener('click', () => {
    popUp.style.display = 'block'
})

document.getElementById('pievienot').addEventListener('click', () => {
    popUp.style.display = 'none'
    
    let gramata = {Uzdevums: Uzdevums.value, Termins: Termins.value}
    
    Uzdevums.value = "";
    Termins.value = "";

    gramatas.push(gramata);

    render();
})

function render(){
    let biblioteka = document.getElementById('biblioteka')
    biblioteka.innerHTML = "";
    for(let i = 0; i < gramatas.length; i++) {
        let gramata = `       
        <div class="id"> 
            <h3>Uzdevums: ${gramatas[i].Uzdevums}</h3>
            <h4>Autors: ${gramatas[i].Termins}</h4>
        </div>`;
        biblioteka.innerHTML += gramata;
    }
    localStorage.setItem("gramatas", JSON.stringify(gramatas))

}

