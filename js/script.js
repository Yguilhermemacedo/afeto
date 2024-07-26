// Interação com menu
document.addEventListener('DOMContentLoaded', function () {
    const burguer = document.getElementById('burguer');
    const menu = document.querySelector('.menu-lista');

    burguer.addEventListener('click', function () {
        burguer.classList.toggle('active')
        menu.classList.toggle('active');
    });
});

// API para enviar informações do formulário para WhatsApp
document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio tradicional do formulário

    // Obtém os valores dos campos do formulário
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('msg').value;

    // Constrói a mensagem para o WhatsApp
    var mensagemWhatsApp = `Olá, meu nome é ${nome}. Meu email é ${email}. Mensagem: ${mensagem}`;

    // Constrói a URL do WhatsApp
    var telefoneDestino = '5511978331801'; // Substitua pelo número de telefone do destinatário no formato internacional
    var urlWhatsApp = `https://api.whatsapp.com/send?phone=${telefoneDestino}&text=${encodeURIComponent(mensagemWhatsApp)}`;

    // Redireciona para a URL do WhatsApp
    window.open(urlWhatsApp, '_blank');
});
