let progresso = 0;
let inventario = [];
let checkpoint = 0;


function intro() {// Função de introdução ao jogo

    let resposta = prompt(
        `⭢Bem-vindo ao Destino em Fuga! A incrível jornada de Dorsa Yavarivafa te aguarda e é você quem vai decidir se ela realizará seu sonho ou acabará frustrada.\n⭢Digite '1' para ajudar nossa atleta a chegar ao Time Olímpico.\n⭢Digite '2' para jogar em outro momento.\n⭢Digite '3' para acessar o manual.\n⭢Digite '4' para acessar a história da Protagonista.`
    );

    // Se o jogador escolher '1', o jogo começa

    if (resposta == 1) {
        alert(
            `💡Relembrando que desenvolver Espírito Esportivo, Determinação e Disciplina é fundamental para a realização do sonho olímpico💡`
        );

        inicio();

        // Se o jogador escolher '2', o jogo termina

    } else if (resposta == 2) {

        alert(`Que pena! Te aguardo em outro momento. Até mais!👋`);

        // Se o jogador escolher '3', o manual do jogo é exibido e a função intro() é chamada novamente

    } else if (resposta == 3) {

        alert(`📱 Você está em um jogo de RPG em texto, o qual acompanha a trajetória de Dorsa Yavarivafa. Ela vai se deparar com muitos desafios e depende somente de você para superá-los. \n💡 Durante a jornada, lembre-se de que Dorsa irá precisar de características chave, as quais ficarão armazenadas no Inventário, que ficará disponível para consulta no console do seu navegador. \n🏸 O objetivo principal do jogo é levar Dorsa às Olimpíadas, para isso, é preciso sacrificar alguns prazeres momentâneos, não se esqueça.\n🦉 Aproveite muito o jogo, e decida com sabedoria`)

        intro()

        // Se o jogador escolher '4', a história da protagonista é exibida e a função intro() é chamada novamente

    } else if (resposta == 4) {

        alert(`🏌️‍♀️Dorsa Yavarivafa é uma refugiada iraniana que ganhou destaque por sua resiliência e determinação, tanto no campo esportivo quanto em sua vida pessoal. Forçada a deixar o Irã devido à instabilidade e à busca por melhores oportunidades, Dorsa encontrou no esporte uma forma de se expressar e se fortalecer. Apesar das adversidades, ela continuou a lutar por seus sonhos e a se destacar como atleta. Sua história é um exemplo inspirador de coragem, superação e a busca incansável por um futuro melhor, mostrando ao mundo o poder da determinação em face da adversidade.🏌️‍♀️`)

        intro()

        // Se nenhuma das opções válidas for escolhida, a função intro() é chamada novamente

    } else {

        alert(
            `Não foi possível identificar a sua resposta, confira se ela está exatamente conforme o solicitado.`
        );

        intro();
    }
}

function inicio() {// Função que inicia a jornada

    let resposta = prompt(
        `Dorsa faz parte de uma família que valoriza muito a cultura esportiva. Seus pais perguntaram à menina se deseja experimentar um novo esporte: Badminton. Você deseja fazer uma aula experimental (digite 'SIM') ou não tem interesse (digite 'NAO').`
    );

    if (resposta === "SIM") {

        progresso += 1;// Adiciona 1 ponto de progresso

        checkpoint += 1;// Atualiza o checkpoint

        alert(
            `Uhuulll! Isso é ótimo! Dorsa fez a aula experimental e amou, além disso, demonstrou ter um talento notável no Badminton. Com essa decisão, você acabou de ganhar +1 ponto de progresso, o que te leva mais perto de realizar o seu sonho.\nVocê, atualmente, tem ${progresso} pontos de progresso.`
        );

        resposta = prompt(
            `Uma nova etapa da jornada se inicia, Dorsa foi convidada para fazer parte da equipe de competição no clube o qual treina. Isso envolve treinar mais horas por dia e mais dias por semana🕙, você acha que vale a pena? Se sim ('SIM'), senão, ('NAO').`
        );


        conviteEquipeCompeticao(resposta);

    } else if (resposta === "NAO") {

        jogadorPerdeu();

    } else {

        alert(`Não foi possível identificar a sua resposta, confira se ela está exatamente conforme o solicitado.`);

        inicio();

    }

}

function conviteEquipeCompeticao(resposta) {// Função que lida com o convite para a equipe de competição

    if (resposta === "SIM") {
        progresso += 1;

        checkpoint += 1;

        inventario.push('Determinação')// Adiciona 'Determinação' ao inventário

        alert(
            "Bem-vindo à equipe! 🎉 Estão muito felizes em ter Dorsa com a equipe para essa jornada no badminton. Aqui, todos são apaixonados pelo esporte e estão sempre prontos para ajudar uns aos outros a crescer e melhorar. Dorsa sabe que pode contar com eles para o que precisar, seja para treinar, trocar ideias ou até para aqueles momentos de descontração. Vamos com tudo! 💪🏸"
        );

        alert(
            `Com essa decisão, você ajudou Dorsa a se aproximar do Time Olímpico, por isso, ganhou +1 ponto de progresso totalizando, ${progresso} pontos.`
        );

        let resposta = prompt(
            `No seu primeiro dia na equipe de competição, uma das colegas de time de Dorsa a convida para uma festa. De todas as meninas da equipe, ela é a que tem um pior desempenho nas quadras, tendo uma fama ruim por parte dos treinadores. Ao mesmo tempo, a capitã da equipe convida Dorsa para fazer um treino de preparação física com ela no mesmo horário da festa. Qual programa você prefere para ter na sua sexta a noite? Festa('F') ou treinamento?('T')`
        );

        treinoEquipe(resposta);

    } else if (resposta === "NAO") {

        progresso -= 1;

        checkpoint += 1

        alert(
            `Tudo bem, as vezes iniciar na vida de atleta competitivo é uma decisão complicada. Vamos esperar mais um pouco. Você acaba de perder 1 ponto na jornada olímpica, agora você possui ${progresso} pontos.`
        );

        let resposta = prompt(
            `Apesar de não entrar na equipe, Dorsa ainda possui o sonho olímpico. Para isso, você acredita que ela deva manter os treinos intensivos ('INTENSO') ou jogar apenas por hobbie ('HOBBIE')?`
        );

        rotinaTreinos(resposta);
    } else {
        alert(
            `Não foi possível identificar a sua resposta, confira se ela está exatamente conforme o solicitado.`);

        inicio();
    }
}

function rotinaTreinos(resposta) {// Função que lida com a rotina de treinos de Dorsa
    if (resposta === "HOBBIE") {
        progresso -= 1;

        checkpoint += 1

        alert(
            `Sem ser vista pelos técnicos, Dorsa ficou mais distante de realizar o sonho olímpico, por isso, você perdeu 1 ponto de progresso, totalizando ${progresso}, mas ainda ama o esporte, portanto, continua se dedicando e treinando nas horas vagas.`
        );

        let resposta = prompt(
            `No momento em que estava treinando, como forma de passa-tempo, Dorsa escuta barulhos horríveis, como bombas, e é nesse momento que ela percebe que a guerra se aproxima cada vez mais, tornando perigoso ficar ali. Você acha que é mais seguro para Dorsa fugir('1') ou permanecer no Irã ('2') enquanto algo mais sério não acontecer?`
        );

        fuga(resposta);

    } else if (resposta === "INTENSO") {
        progresso += 1;

        checkpoint += 1;

        let resposta = prompt(
            `Os treinos intensivos foram ótimos, Dorsa vem melhorando cada vez mais e recebeu novamente o convite para entrar na equipe de Competição. Isso envolve treinar mais horas por dia e mais dias por semana, você acha que vale a pena? Se sim ('SIM'), senão, ('NAO').`
        );

        conviteEquipeCompeticao(resposta);
    } else {
        alert(
            `Não foi possível identificar a sua resposta, confira se ela está exatamente conforme o solicitado.`
        );

        conviteEquipeCompeticao(resposta);
    }
}

function treinoEquipe(resposta) {// Função que lida com a escolha entre festa ou treino
    if (resposta === "F") {
        progresso -= 2;

        checkpoint += 1;

        alert(
            `Você se equivocou na sua decisão, Dorsa foi à festa e acabou bebendo, o que fez com que ela perdesse o treino do dia seguinte. Com isso, você acaba de perder 2 pontos de progresso, totalizando ${progresso} pontos.`
        );

        jogadorPerdeu();

    } else if (resposta === "T") {

        progresso += 2;

        inventario.push("Responsabilidade");

        checkpoint += 1;

        let resposta = prompt(
            `Muito bem!! Para realizarmos nossos sonho, precisamos sacrificar algumas coisas que desejamos muito. Você acaba de ganhar mais pontos de progresso na sua trajetória, totalizando ${progresso} pontos de progresso.\nCom a sua dedicação, o seu treinador viu seu potencial e te chamou para representar seu clube na sua primeira competição. Você deseja ir? ('SIM') ('NAO')`
        );

        primeiraCompeticao(resposta);
    } else {
        alert(
            `Não foi possível identificar a sua resposta, confira se ela está exatamente conforme o solicitado.`
        );

        conviteEquipeCompeticao(resposta);
    }
}

function fuga(resposta) {// Função que lida com a decisão de fugir ou permanecer no Irã
    if (resposta == 2) {
        alert(
            `Infelizmente, os bombardeios continuaram se aproximando até atingir a sua vila, de maneira que acabou ficando soterrada pelos desmoronamentos que ocorreram, sem alternativas. A memória de Dorsa foi honrada em diversos memoriais e se tornou apenas mais um "e se.." dentro do esporte.💣`
        );

        jogadorPerdeu();

    } else if (resposta == 1) {
        progresso += 1;

        inventario.push('Resiliência');

        checkpoint += 1;

        alert(
            `Boa decisão! A mais segura possível, tendo em vista a situação. Dorsa desenvolveu ${inventario}, itens que agora estão armazenados no seu inventário de características.`
        );

        chegadaNoRefugio()

    } else {

        alert(
            `Não foi possível identificar a sua resposta, confira se ela está exatamente conforme o solicitado.`
        );

        rotinaTreinos(resposta);
    }
}

function primeiraCompeticao(resposta) {// Função que lida com a primeira competição de Dorsa
    if (resposta === "SIM") {
        progresso += 1;

        inventario.push("Coragem");

        checkpoint += 1;

        alert(
            `Dorsa foi à competição e fez um ótimo trabalho🥳 \nEla conquistou a medalha de bronze na sua primeira competição🎖, mas isso aconteceu pois a menina que competiu contra Dorsa (Samira) havia comprado a arbitragem para que eles a ajudassem.\nVocê também ganhou um ponto de progresso, totalizando ${progresso} pontos. Além disso, ela desenvolveu ${inventario}, itens que agora estão armazenados no seu inventário de características.`
        );

        let resposta = prompt(
            `Dorsa ganhou bastante destaque com essa competição e foi convidada a ir para um novo clube. Você deseja que Dorsa mude de clube? ('SIM') ('NAO')`
        );

        mudancaDeClube(resposta);
    } else if (resposta === "NAO") {
        progresso -= 1;

        checkpoint += 1;

        alert(
            `Ao recusar a competição, Dorsa foi vista como alguém sem espírito competitivo, dificultando sua permanência na equipe e, como consequência, foi afastada da equipe. Você perdeu 1 ponto de progresso, totalizando ${progresso} pontos.`
        );

        jogadorPerdeu();
    } else {
        alert(
            `Não foi possível identificar a sua resposta, confira se ela está exatamente conforme o solicitado.`
        );

        treinoEquipe(resposta);
    }
}

function mudancaDeClube(resposta) {// Função que lida com a mudança de clube

    if (resposta === "SIM") {
        progresso += 2;

        checkpoint += 1;

        inventario.push("Autoconhecimento");

        alert(
            `Boa escolha! Agora Dorsa está em um clube com mais visibilidade e melhores oportunidades para crescer como atleta. Além disso, a estrutura é maravilhosa, com salas de relaxamento pós treino, várias quadras e equipamento de última geração. Com isso, você ganhou +2 pontos de progresso, totalizando ${progresso} pontos. Além disso, ela desenvolveu ${inventario}, itens que agora estão armazenados no seu inventário de características.`
        );

        let resposta = prompt(
            `É neste novo clube, que possui melhor estrutura e mais possibilidades de crescimento, que Samira, sua adversária da competição, treina. Mais do que isso, ela é a capitã da equipe de competição, o que te deixa abaixo dela na questão da hierarquia. Você deseja ir conversar com ela para resolver qualquer possível intriga, digite ('1'), se preferir manter as coisas como estão, digite ('2').`
        );

        conversaNPC(resposta);

    } else if (resposta === "NAO") {
        progresso -= 1;

        checkpoint += 1;

        alert(
            `Infelizmente, ao recusar a mudança de clube, Dorsa acabou não recebendo as oportunidades necessárias para crescer na carreira. Você perdeu 1 ponto de progresso, totalizando ${progresso} pontos.`
        );

        jogadorPerdeu();

    } else {

        alert(
            `Não foi possível identificar a sua resposta, confira se ela está exatamente conforme o solicitado.`
        );

        mudancaDeClube(resposta);
    }
}

function conversaNPC(resposta) { //Iniciando interação com NPC

    if (resposta == 1) {
        alert(
            `Dorsa: "Olá Samira! Tudo bem?\nSamira:"Oii Dorsa! Você foi simplesmente incrível na última competição, por um momento acreditei que iria me ganhar."`
        );

        let opcaoResposta = prompt(
            `Digite o número da resposta desejada:\n('1') Até parece! Você nunca iria perder comprando os juízes, você não tem vergonha de me falar isso?\n('2') É, realmente eu estava no meu dia naquela competição, e é uma honra poder treinar ao lado de uma jogadora tão qualificada!"`
        );

        escolherResposta(opcaoResposta)


    }
    else if (resposta == 2) {

        progresso -= 1
        checkpoint += 1

        alert(`Com medo de que Dorsa contassse aos treinadores sobre a compra da arbitragem, a capitã, Samira, retirou o nome de Dorsa da relação da equipe, fazendo com que os treinadores resconsiderassem o convite e a recusassem no clube. Com isso, você acaba de perder 1 ponto de progresso. Totalizando: ${progresso} pontos.`)

        jogadorPerdeu()

    } else {

        alert(
            `Não foi possível identificar a sua resposta, confira se ela está exatamente conforme o solicitado.`
        );

        primeiraCompeticao(resposta)
    }
}

function escolherResposta(opcaoResposta) { // Função que lida com a escolha de resposta à discussão.

    if (opcaoResposta == 1) {
        alert(
            `Samira: "Você só está esquecendo de uma coisa, a capitã deste time sou eu, eu que decido quem entra e quem sai. Além disso, NUNCA mais ouse falar que comprei a arbitragem, se isso sair daqui eu acabo com você, e aí vai ter que dizer tchau pro Badminton."`
        );

        let quietaOUconta = prompt(
            `Você deseja que Dorsa fique quieta a respeito do que acabou de confirmar, para que dessa forma consiga a vaga na equipe ('1') ou acha que ela deve contar ao treinador o mais rápido possível ('2')`
        );

        repercucaoDiscussao(quietaOUconta);

    } else if (opcaoResposta == 2) {

        inventario.push('Espírito Esportivo')

        checkpoint += 1

        respostaSamira()

    } else {
        alert(
            `Não foi possível identificar a sua resposta, confira se ela está exatamente conforme o solicitado.`
        );

        conversaNPC(opcaoResposta);
    }

}

function respostaSamira() {    // Samira responde de forma positiva se o jogador tiver Espírito esportivo no seu inventário

    let confereInventario = inventario.includes("Espírito Esportivo");

    if (confereInventario == true) {
        alert(
            `Samira: "Imagina! Tenho certeza que vamos evoluir muito juntas, vou garantir que você esteja na equipe, Dorsa! Inclusive, acho que há uma oportunidade incrível para você...`
        );

        oportunidadeOlimipica();
    } else {
        alert(
            `Você não possui a característica chave: Espírito Esportivo.`
        );

        escolherResposta()
    }
}

function repercucaoDiscussao(quietaOUconta) {// Decide o que fazer após a discussão

    if (quietaOUconta == 1) {

        alert(`Dorsa decidiu não contar nada para tentar manter sua vaga, mas com isso, o treinador descobre o que aconteceu e passa a não confiar nela. Com isso, ela perde a vaga na equipe de competição, fica desmotivada e acaba desistindo do badminton.`)

        jogadorPerdeu()
    }
    else if (quietaOUconta == 2) {

        inventario.push('Honestidade')

        progresso += 1

        alert(`Dorsa conta ao treinador e desenvolve Honestidade, fazendo com que o treinador confie ainda mais nela. Ele expulsa Samira da equipe e te coloca como capitã no lugar dela. Cada vez mais você vem ajudando Dorsa a conquistar seu espaço no badminton.`)

        treinadorInscreveParaRefugiados()
    } else {

        alert(
            `Não foi possível identificar a sua resposta, confira se ela está exatamente conforme o solicitado.`
        );

        escolherResposta()
    }
}

function oportunidadeOlimipica() {    // Decide o destino para o qual vai fugir

    alert(`Samira: "Existe um camping de treinamento para quem deseja ir para as Olimpíadas e eu... BBUUMMMM!!!!🔫`)

    alert(`A fala de Samira não termina antes que o seu corpo caia sobre Dorsa num estrondo. A guerra chegou ao clube, é então que percebe que precisa fugir do seu país agora! Não há mais como esperar, os vários corpos atingidos pelos tiros continuam caindo quando Dorsa começa a correr.💀`)

    alert(`Dorsa corre da maneira mais rápida que consegue em direção à sua casa. Quando chega em sua rua, avista seus pais correndo em sua direção:\nMãe: "Minha querida! Por um momento achei que tinha te perdido! Vamos embora agora!"\nPai: "Consegui um voo para a Inglaterra e outro para a Síria, o que você quer fazer, Dorsa?`)

    let resposta = prompt(`(1) Inglaterra 🚩\n(2) Síria 🚩`)

    fuga(resposta)
}

function chegadaNoRefugio() {  // Chegada no refúgio e crossover com o personagem do Arnold, Adnan Khankan

    alert(`Dorsa se dedicou muito nos 2 meses após da fuga do Irã para o abrigo de refugiados, você encontra Adnan Khankan, um judoca, que teve que fugir para o abrigo por causa da guerra em seu país. Vocês criaram uma amizade muito intensa, uma conexão rápida que surgiu a partir das semelhanças em suas histórias.`)

    alert(`Parabéns!🥳 Dorsa foi selecionada para as Olimpíadas, para a Equipe de Refugiados, isso é uma conquista incrível, e poder viver essa experiência ao lado do seu melhor amigo torna tudo ainda mais especial. Adnan, assim como Dorsa, também foi selecionado para realizar esse sonho. Os dois treinaram, se esforçaram e agora terão a chance de representar juntos o que há de melhor no esporte. Eles irão aproveitar cada momento, apoiando-se mutuamente e vivendo essa jornada com toda a energia e dedicação que trouxeram até aqui. Essa experiência não será apenas uma vitória pessoal, mas também um capítulo inesquecível na amizade dos dois!`)

    alert(`Dorsa e Adnan, muito felizes e ansiosos, decidem viajar juntos para a França.\nDorsa ganha a emoção "Amizade" por desejar viajar junto com Adnan. Como a viagem é muito longa, eles conversaram muito, cada um contando suas histórias de infância e como conheceram seus esportes, cada vez a conexão de vocês se torna mais forte.`)

    jogadorGanhou()
}

function treinadorInscreveParaRefugiados() {    // Treinador inscreve Dorsa para ir às Olimpíadas

    alert(`✈️É com imenso orgulho que informamos que a treinadora de Dorsa a encaminhou para as Olimpíadas de Paris 2024! Seu talento, dedicação e esforço não passaram despercebidos, e agora ela tem a oportunidade de representar seu país no maior evento esportivo do mundo. Paris será o palco dos seus sonhos, e tudo isso é resultado do trabalho árduo e da confiança que a treinadora depositou em Dorsa. Parabéns por essa conquista, e que venha Paris 2024!🗼`)

    jogadorGanhou()
}

function jogadorGanhou() {    // Função que exibe a mensagem de vitória

    alert(
        `Parabéns!! Você conseguiu ajudar Dorsa a realizar o seu sonho de entrar para o Time Olímpico. 🏅Ela chegou às Olimpíadas,realizou seu maior sonho e trouxe esperança para muitas pessoas forçadas a sair do seu país de origem.\n🎒Com o seu auxílio, Dorsa desenvolveu características importantes para sua jornada: ${inventario.join(" ")}.`
    );

    alert(`💗Espero que tenha gostado da sua experiência. Muito obrigada por jogar.\n💌Qualquer sugestão, entre em contato: @anabeatrizarteiro@gmail.com\n🌟Ana Beatriz Barreiro🌟`)

    let reiniciar = prompt(`Deseja encerrar o jogo ou jogar novamente?\n🚩(1) Encerrar\n🏳️ (2) Reiniciar`)

    if (reiniciar == 2) {

        progresso = 0

        inventario = []

        intro()

    } else if (reiniciar == 1) {

        progresso = 0

        inventario = []


    } else {

        alert(`Não foi possível identificar a sua resposta, confira se ela está exatamente conforme o solicitado.`);

        jogadorGanhou();
    }
}

function jogadorPerdeu() {// Função que exibe a mensagem de derrota

    let resposta = prompt(
        `Parece que Dorsa não conseguiu realizar seu sonho dessa vez. Você deseja voltar para o último checkpoint ('1') ou encerrar a partida ('2')?`
    );

    if (resposta == 1) {

        while (checkpoint <= 4) { //Se o jogador tiver tingido determinada pontuação no jogo, ele retorna para a metade do jogo, caso contrário, ele retorna para o início.

            checkpoint=0
            inventario=[]
            inicio()
        }

        progresso = 0

        conviteEquipeCompeticao(resposta = 'SIM')


    } else if (resposta == 2) {

        alert("Você não conseguiu ajudar Dorsa, mas não desista! Até mais👋");

        let resposta = prompt(`🔁Deseja reiniciar? Sim ('S') ou não ('N')?🔁`);

        if (resposta === "S") {

            intro();

        } else {

            alert(`Está perdendo um ótimo jogo, mas tudo bem🤷`);

        }
    } else {

        alert(`Não foi possível identificar a sua resposta, confira se ela está exatamente conforme o solicitado.`);

        jogadorPerdeu();
    }
}

intro(); // Inicia o jogo