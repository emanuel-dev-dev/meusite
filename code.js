const form = document.getElementById("formContato");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const mensagem = document.getElementById("mensagem").value;

    try {
        const resposta = await fetch("https://hidden-snowflake-c47b.eliasfonsecaemanuel.workers.dev", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nome: nome,
                mensagem: mensagem
            })
        });

        if (resposta.ok) {
            alert("Mensagem enviada com sucesso!");
            form.reset();
        } else {
            alert("Não foi possível enviar a mensagem.");
        }

    } catch (erro) {
        console.error(erro);
        alert("Ocorreu um erro ao enviar a mensagem.");
    }
});
