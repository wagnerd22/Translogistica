document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    const messageElement = document.getElementById('form-message');
    messageElement.textContent = `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`;
    messageElement.classList.remove('hidden');

    this.reset();
});
