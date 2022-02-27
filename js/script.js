const form = document.getElementById('form');
const nome = document.getElementById('name');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const confirmSenha = document.getElementById('confirmSenha');
const button = document.getElementById('button');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    validacoes();
})

//função trim() é usada para remover espaçamentos

function validacoes() {

    if (nome.value == '') {
        vrfError(nome);
    } else {
        vrfSuccess(nome);
    }

    if (lastName.value == '') {
        vrfError(lastName);
    } else {
        vrfSuccess(lastName);
    }

    if (email.value == '') {
        vrfError(email);
    } else {
        vrfSuccess(email);
    }

    if (senha.value == '' || senha.value.length < 5) {
        vrfError(senha);
    } else {
        vrfSuccess(senha);
    }

    if (confirmSenha.value !== senha.value || senha.value.length < 5) {
        vrfError(confirmSenha);
    } else {
        vrfSuccess(confirmSenha);       
    }

    function vrfError(input) {
        const addNome = input.parentElement;

        addNome.className = 'form-control error'
    }

    function vrfSuccess(input) {
        const addNome = input.parentElement;

        addNome.className = 'form-control success'
    }
}
