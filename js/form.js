const btnEnviar = document.getElementById('btn-enviar').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var errorMessage = document.querySelector('.msg-erro');
    var successMessage = document.querySelector('.msg-sucess');

    if (!name || !email) {
        // Exibir mensagem de erro com animação
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
    } else {
        // Exibir mensagem de sucesso
        successMessage.style.display = 'block';
        errorMessage.style.display = 'none';
    }
});

// Envio dos dados dos cuidadores
document.getElementById('form-cadastro').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Coleta os dados do formulário
    var nome = document.getElementById('nome').value;
    var cpf = document.getElementById('cpf').value;
    var rg = document.getElementById('rg').value;
    var endereco = document.getElementById('endereco').value;
    var mensagem = document.getElementById('msg').value;
    var complemento = document.getElementById('complemento').value;
    var cidade = document.getElementById('cidade').value;
    var estado = document.getElementById('estado').value;
    var cep = document.getElementById('cep').value;
    var bairro = document.getElementById('bairro').value;
    var tel = document.getElementById('tel').value;
    var email = document.getElementById('email').value;

   
    var mensagem = `Olá me chamo ${nome} vim pelo site da Afeto e tenho interesse em ser um cuidador, abaixo segue minhas informações conforme realizei o preenchimento da ficha cadastral.\n Um pouco sobre mim:\n ${mensagem}\n\n Seguem os dados pessoais abaixo:\nCPF: ${cpf}\nRG: ${rg}\nEndereço: ${endereco}\nComplemento: ${complemento}\nCidade: ${cidade}\nEstado: ${estado}\nCEP: ${cep}\nBairro: ${bairro}\nTelefone: ${tel}\nEmail: ${email}`;

    
    var numeroWhatsApp = '5511978331801'; // Substitua pelo número de telefone desejado com o código do país
    var url = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensagem)}`;

   
    window.location.href = url;
});
