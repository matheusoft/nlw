
function populatesUFs(){
    const ufSelect = document.querySelector('select[name=uf]')
    
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    .then(res=> res.json() )
    .then( states=> {


        for(const state of states){
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`

        }


        
    })
}

populatesUFs()


function getCities(event){
    const citySelect = document.querySelector('select[name=city]')
    const stateInput = document.querySelector('[name=state]')

    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = '<option value>Selecione a Cidade</opition>'
    citySelect.disabled = true    
    fetch(url)
    .then(res=> res.json() )
    .then( cities => {
        


        for(const city of cities){
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }

        citySelect.disabled = false
        
    })

}



document
.querySelector('select[name=uf]')
.addEventListener('change', getCities)


//Itens de coleta
//pegar todos os li's

const itensToCollect = document.querySelectorAll('.itens-grid li')

for (const item of itensToCollect){
    item.addEventListener('click', handleSelectedItem)
}

const collectedItems = document.querySelector('input[name=itens]')

let selectedItems = []

function handleSelectedItem(event){

    const itemLi = event.target
    
    // adicionar ou remover uma classe com java script
    itemLi.classList.toggle('selected')

    const itemId = itemLi.dataset.id

    console.log("item id:", itemId)
    
    // verigicar se existem itens selecionados, se sim
    // pegar is utens selecionados

    const alreadySelected = selectedItems.findIndex(function(item){
        const intemFound = item == itemId
        return intemFound
    })

    //se ja estiver selecionado tirar da seleção

    if(alreadySelected >= 0){
        //tirar da seleção
        const filteredItems = selectedItems.filter(item =>{
            const itemIsDiferent = item != itemId //false
            return itemIsDiferent
        })

        selectedItems = filteredItems

    }else{
        //se não estiver 
        //adicionar a seleção
        selectedItems.push(itemId)
    }  

    console.log("selectedItems:", selectedItems)
    //atualizar o campo escondido com os itens selecionados
    collectedItems.value = selectedItems
    




}
