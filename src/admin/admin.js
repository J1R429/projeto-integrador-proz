
// MODAL
const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => {
    clearFields()
    document.getElementById('modal').classList.remove('active')
}



const tempClient = { // no console colocar createClient(tempClient)
    nome: "Jessica",
    email: "jessica@gmail.com",
    celular: "11123459876",
    cidade: "São Roque"
}



const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? []
const setLocalStorage = (dbClient) => localStorage.setItem("db_client", JSON.stringify(dbClient))


// CRUD - create read update delete

// CRIAR CLIENTE
const createClient = (client) => {
    const dbClient= getLocalStorage()
    dbClient.push (client)
    setLocalStorage(dbClient)
}

// LER CLIENTE - no console readCliente()
const readClient = () => getLocalStorage()


// ATUALIZAR CLIENTE
const updateClient = (index, client) => {
    const dbClient = readClient()
    dbClient[index] = client
    setLocalStorage(dbClient)
}


// DELETAR CLIENTE - no console deleteClient(12)
const deleteClient = (index) => {
    const dbClient = readClient()
    dbClient.splice(index,1)
    setLocalStorage(dbClient)
}


const isValidFields=()=>{
    return document.getElementById('form').reportValidity()
}

// INTERAÇÃO COM O LAYOUT
const clearFields = () => {
    const fields = document.querySelectorAll('.modal-field')
    fields.forEach(field => field.value = "")
}


const saveClient = () => {
    if (isValidFields()){
        const client ={
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            celular: document.getElementById('celular').value,
            cidade: document.getElementById('cidade').value
        }
        createClient(client)
        console.log('Cadastrando o leitor')
        closeModal()
    }
}

const cancelClient = () => {
    if (isValidFields()){
        console.log('cancelando operação')
    }
}


// EVENTOS
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)

document.getElementById('salvar')
    .addEventListener('click', saveClient)

document.getElementById('cancelar')
    .addEventListener('click', cancelClient)