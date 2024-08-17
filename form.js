document.getElementById("contact-form").addEventListener("submit", async function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const form = event.target;
    const formData = new FormData(form);
    const url = form.action;

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Accept": "application/json",
            },
            body: formData
        });

        if (response.ok) {
            alert("Mensagem enviada com sucesso! Retornarei em breve. Obrigado!");
            form.reset(); // Opcional: reseta o formulário após o envio
        } else {
            alert("Houve um erro ao enviar sua mensagem. Tente novamente.");
        }
    } catch (error) {
        alert("Houve um erro ao enviar sua mensagem. Tente novamente.");
        console.error("Erro:", error);
    }
});
