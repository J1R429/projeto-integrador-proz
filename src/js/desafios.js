document.getElementById("quizForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Contadores para cada tipo de leitor
    let respostas = {
        "A": 0, // Leitor Visual
        "B": 0, // Leitor Procrastinador
        "C": 0, // Leitor Cult
        "D": 0  // Leitor Casual
    };

    // Selecionar todas as perguntas
    let perguntas = document.querySelectorAll(".pergunta");
    let todasRespondidas = true; // Flag para verificar se todas foram respondidas

    // Verificar se todas as perguntas têm uma resposta selecionada
    perguntas.forEach(function(pergunta) {
        let respostaSelecionada = pergunta.querySelector("input[type='radio']:checked");
        if (!respostaSelecionada) {
            todasRespondidas = false;
        } else {
            respostas[respostaSelecionada.value[0]] += 1; // Incrementar contagem baseada na resposta
        }
    });

    if (!todasRespondidas) {
        alert("Por favor, responda todas as perguntas!");
        return;
    }

    // Determinar o resultado baseado na maioria das respostas
    let maiorResposta = Object.keys(respostas).reduce(function(a, b) {
        return respostas[a] > respostas[b] ? a : b;
    });

    let resultado = '';
    let recomendacao = '';

    // Resultados com texto completo
    switch (maiorResposta) {
        case "A":
            resultado = "Leitor Visual";
            recomendacao = `
                Você ama o lado estético dos livros. É atraído por capas chamativas e adora empilhar obras para tirar fotos que vão direto para o Instagram. Ler? Só se for bonito!
                
                Recomendação de livro: “Os Sete Maridos de Evelyn Hugo” de Taylor Jenkins Reid. Uma capa linda e uma história cheia de glamour – perfeita para combinar com sua vibe fotogênica!
            `;
            break;
        case "B":
            resultado = "Leitor Procrastinador";
            recomendacao = `
                Você gosta de livros, mas sempre acha um jeito de evitar ler. Tem pilhas de TBR (to be read) acumuladas e adora fingir que um dia vai colocá-las em dia.
                
                Recomendação de livro: “O Homem Mais Rico da Babilônia” de George S. Clason. Curtinho, direto ao ponto e cheio de lições práticas – fácil de terminar sem procrastinar demais.
            `;
            break;
        case "C":
            resultado = "Leitor Cult";
            recomendacao = `
                Você lê para ostentar. Quanto mais difícil o livro, melhor. Ama usar palavras difíceis como “dostoiévskiano” só para ver a cara de confusão dos outros.
                
                Recomendação de livro: “Crime e Castigo” de Fiódor Dostoiévski. Um clássico pesado para exibir na prateleira e, quem sabe, até ler.
            `;
            break;
        case "D":
            resultado = "Leitor Casual";
            recomendacao = `
                Você lê porque é divertido, mas também gosta de um bom cochilo durante a leitura. Para você, livros são uma boa desculpa para fugir do mundo – ou do Wi-Fi.
                
                Recomendação de livro: “O Guia do Mochileiro das Galáxias” de Douglas Adams. Engraçado, leve, e tão absurdo que nem dá tempo de pensar em cochilar.
            `;
            break;
        default:
            resultado = "Erro";
            recomendacao = "Não foi possível determinar seu tipo de leitor. Tente novamente.";
    }

    // Exibir o modal com o resultado completo
    document.getElementById("modalText").innerText = `${resultado}:\n\n${recomendacao}`;
    document.getElementById("resultModal").style.display = "block";
});

// Fechar o modal
document.querySelector(".close-modal").addEventListener("click", function() {
    document.getElementById("resultModal").style.display = "none";
});



