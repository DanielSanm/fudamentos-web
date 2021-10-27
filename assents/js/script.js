
let nome = document.getElementById('nome')
let email = document.getElementById('email')
let assunto = document.getElementById('assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    
    if(nome.value.length < 3) {
        txtNome.innerHTML = 'Nome digitado inválido'
        txtNome.style.color = 'red'
        nomeOk = false
    } else {
        txtNome.innerHTML = 'Nome digitado válido'
        txtNome.style.color = '#2fad0c'
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'Email digitado inválido'
        txtEmail.style.color = 'red'
        emailOk = false
    } else {
        txtEmail.innerHTML = 'Email digitado válido'
        txtEmail.style.color = '#2fad0c'
        emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')

    if(assunto.value.length > 100) {
        txtAssunto.innerHTML = 'O texto deve ter no máximo 100 caracteres'
        txtAssunto.style.color = 'red'
        assuntoOk = false
    } else {
        txtAssunto.innerHTML = ''
        assuntoOk = true
    }
}

function enviar() {

    if(nomeOk == true && emailOk == true && assuntoOk == true) {
        alert('Solicitação enviada com sucesso!')
    } else {
        alert('Os dados inseridos acima não são válidos, verifique-os!')
    }
}