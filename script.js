document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Coleta os dados do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Exibe uma mensagem de sucesso
    const messageElement = document.getElementById('form-message');
    messageElement.textContent = `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`;
    messageElement.classList.remove('hidden');

    // Limpa o formulário
    this.reset();
});