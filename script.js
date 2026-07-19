document.getElementById("contatoForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const servico = document.getElementById("servico").value;
    const mensagem = document.getElementById("mensagem").value;

    const destinatario = "is.contabilidade@outlook.com"; 

    const assunto = encodeURIComponent("Solicitação de Orçamento");

    const corpo = encodeURIComponent(
`Olá,

Meu nome é ${nome}.

E-mail: ${email}
Telefone: ${telefone}

Serviço desejado:
${servico}

Mensagem:
${mensagem}`
    );

    window.location.href = `mailto:${destinatario}?subject=${assunto}&body=${corpo}`;
});