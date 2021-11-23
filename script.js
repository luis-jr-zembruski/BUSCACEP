// URL da API
const url = "https://viacep.com.br/ws/"

//Expressão regular pra validação do CEP
const validacep = /^[0-9]{8}$/;

function getCep() {

    //Pegando apenas os valores do CEP
    var newCep = cep.value.replace(/\D/g, '');
    
    if(validacep.test(newCep)){
        axios.get(`${url}${newCep}/json`)
        .then( response => {
            if(response.data.cep) {
                result.innerHTML = `
                    <label><strong>Cep</strong>: ${response.data.cep}</label><br>
                    <label><strong>Cidade</strong>: ${response.data.localidade}/${response.data.uf}</label>
                `
            } else {
                alert("Digite um CEP válido!")
            }
        })
        .catch(err => console.log(err))
    } else {
        alert("Digite um CEP válido!")
    }
}
