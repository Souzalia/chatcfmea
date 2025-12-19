# Bem-vindo ao ChatCFMEA!

Olá! Este é o guia completo para você instalar e usar o ChatCFMEA no seu computador com Windows.

O objetivo deste manual é ser o mais simples possível. Vamos te guiar em cada etapa, como se fosse uma receita de bolo. Não é necessário ter nenhum conhecimento de programação!

---

## Sumário Rápido

Se você já instalou e só quer lembrar os comandos do dia a dia, pule para a seção:
*   [O que fazer no dia a dia](#o-que-fazer-no-dia-a-dia)

---

## 1. O que é o ChatCFMEA?

Imagine ter um assistente pessoal que lê todos os seus documentos em PDF e responde a qualquer pergunta que você tenha sobre eles. É exatamente isso que o ChatCFMEA faz!

*   **Você pergunta:** Você faz perguntas usando suas próprias palavras, como se estivesse conversando com alguém.
*   **Ele responde:** O sistema busca as respostas dentro dos arquivos PDF que você forneceu.
*   **Tudo no seu computador:** O ChatCFMEA roda localmente no seu navegador de internet (como o Google Chrome ou Firefox). Ele não é um site e suas informações e documentos nunca saem do seu computador.

---

## 2. O que você precisa ANTES de começar

Antes de instalar o ChatCFMEA, precisamos garantir que seu computador tenha três programas essenciais. Se você já os tiver, pode pular para o próximo passo.

| Programa | Para que serve? | Onde baixar? |
| :--- | :--- | :--- |
| **1. Node.js** | É o "motor" que faz o ChatCFMEA funcionar. Sem ele, o sistema não liga. | [Baixe aqui (versão LTS)](https://nodejs.org/en) |
| **2. GitHub Desktop** | É a ferramenta que vamos usar para "baixar" o projeto do ChatCFMEA para o seu computador de forma fácil. | [Baixe aqui](https://desktop.github.com/) |
| **3. Chave da OpenAI** | É uma "senha" que permite que o nosso sistema use a inteligência artificial da OpenAI (a mesma do ChatGPT) para entender suas perguntas e encontrar as respostas. | [Obtenha sua chave aqui](https://platform.openai.com/api-keys) |

**Como obter a Chave da OpenAI (API Key):**
1.  Clique no link acima e crie uma conta ou faça login.
2.  No menu, procure por "API Keys".
3.  Clique no botão "Create new secret key" (Criar nova chave secreta).
4.  Dê um nome para a chave (ex: `ChatCFMEA`) e clique em "Create".
5.  **IMPORTANTE:** Copie a chave que aparecer (ela começa com `sk-...`) e guarde-a em um lugar seguro, como o Bloco de Notas. **Você não poderá vê-la novamente!**

---

## 3. Como baixar o projeto (sem complicação)

Agora vamos usar o GitHub Desktop para copiar os arquivos do sistema para o seu computador.

1.  Abra o programa **GitHub Desktop**.
2.  No menu superior, clique em **File** e depois em **Clone repository**.
3.  Uma janela se abrirá. Clique na aba **URL**.
4.  No primeiro campo ("Repository URL or GitHub username/repository"), cole o seguinte endereço: `https://github.com/chatrenach/chatrenach-main`
5.  No segundo campo ("Local path"), clique em **Choose...** e escolha uma pasta fácil de lembrar no seu computador para salvar o projeto (por exemplo, `C:\Users\SeuUsuario\Documents\ChatCFMEA`).
6.  Clique no botão azul **Clone**.
7.  Aguarde o programa baixar todos os arquivos. Quando terminar, você terá a pasta do projeto no local que escolheu!

---

## 4. Como instalar o sistema

Com os arquivos baixados, precisamos "montar" o sistema. Faremos isso usando um programa que já vem com o Node.js.

1.  Abra o menu Iniciar do Windows.
2.  Digite `cmd` e pressione Enter. Uma tela preta de terminal irá aparecer. Não se assuste, vamos usar apenas dois comandos!
3.  Primeiro, precisamos navegar até a pasta do projeto. Digite `cd` seguido de um espaço e o caminho da pasta que você escolheu no passo anterior.
    *   *Exemplo:* `cd C:\Users\SeuUsuario\Documents\ChatCFMEA`
    *   Pressione Enter.
4.  Agora, digite o comando abaixo e pressione Enter. Este comando instala todas as "peças" que o sistema precisa para funcionar.
    ```
    npm install
    ```
5.  Aguarde a instalação terminar. Pode levar alguns minutos e várias linhas de texto vão aparecer. É normal!

---

## 5. Como configurar a chave da Inteligência Artificial

Lembra daquela chave da OpenAI que você guardou? Agora vamos colocá-la no sistema.

1.  Vá para a pasta do projeto que você baixou.
2.  Você verá um arquivo chamado `.env.example`.
3.  Faça uma cópia deste arquivo e renomeie a cópia para `.env` (apenas `.env`, sem nada antes do ponto).
4.  Abra o novo arquivo `.env` com um editor de texto simples (como o Bloco de Notas).
5.  Você verá o seguinte conteúdo:
    ```
    OPENAI_API_KEY=
    OPENAI_CHAT_MODEL=
    ANSWER_LANGUAGE=
    ```
6.  Na primeira linha, depois do sinal de igual (`=`), cole a sua chave da OpenAI (aquela que começa com `sk-...`).
7.  Salve e feche o arquivo. Sua chave está configurada!

---

## 6. Como adicionar seus documentos PDF

Esta é a parte mais importante: alimentar o sistema com o conhecimento que ele usará.

1.  Dentro da pasta do projeto, encontre uma pasta chamada `docs`.
2.  **Copie e cole todos os arquivos PDF que você quer que o sistema leia para dentro desta pasta `docs`.**

É só isso! Você pode colocar quantos PDFs quiser.

---

## 7. Como preparar os documentos para o sistema

Agora que os PDFs estão na pasta, precisamos pedir ao sistema para "ler e indexar" todos eles. Isso permite que ele encontre as informações rapidamente depois.

**Atenção:** Você só precisa fazer isso uma vez quando adiciona ou remove documentos.

1.  Abra novamente o terminal do Windows (`cmd`), se você o fechou.
2.  Verifique se você ainda está na pasta do projeto. Se não estiver, use o comando `cd` novamente (ex: `cd C:\Users\SeuUsuario\Documents\ChatCFMEA`).
3.  Digite o comando abaixo e pressione Enter:
    ```
    npm run ingest
    ```
4.  O sistema vai começar a processar seus PDFs. Dependendo da quantidade e do tamanho dos arquivos, isso pode demorar vários minutos. Aguarde até o processo terminar e o terminal ficar disponível para novos comandos.

---

## 8. Como iniciar e usar o ChatCFMEA

Tudo pronto! Vamos finalmente iniciar o sistema e começar a fazer perguntas.

1.  No mesmo terminal (`cmd`) dentro da pasta do projeto, digite o comando abaixo e pressione Enter:
    ```
    npm run dev
    ```
2.  Aguarde um instante. O terminal mostrará uma mensagem parecida com:
    `> Ready on http://localhost:3000`
3.  Agora, abra seu navegador de internet (Google Chrome, Firefox, etc.).
4.  Na barra de endereço, digite `localhost:3000` e pressione Enter.
5.  Pronto! A interface do ChatCFMEA vai aparecer. Você pode digitar sua pergunta no campo de texto na parte inferior e pressionar Enter para obter a resposta.

**Importante:** Não feche a janela do terminal (a tela preta) enquanto estiver usando o ChatCFMEA. Ela é o "motor" do sistema. Para desligar o sistema, basta fechar essa janela.

---

## 9. O que fazer no dia a dia

Depois de ter feito a instalação completa uma vez, usar o ChatCFMEA no dia a dia é muito mais simples.

**Para iniciar o sistema:**
1.  Abra o terminal (`cmd`).
2.  Navegue até a pasta do projeto (ex: `cd C:\Users\SeuUsuario\Documents\ChatCFMEA`).
3.  Digite `npm run dev` e pressione Enter.
4.  Acesse `localhost:3000` no seu navegador.

**Se você adicionar, remover ou atualizar os PDFs na pasta `docs`:**
1.  Feche o sistema (se estiver rodando).
2.  Abra o terminal (`cmd`) e navegue até a pasta do projeto.
3.  Execute o comando `npm run ingest` para que o sistema processe os novos arquivos.
4.  Depois de terminar, inicie o sistema normalmente com `npm run dev`.

---

## 10. Perguntas Frequentes (FAQ)

**P: O sistema não inicia ou dá um erro. O que eu faço?**
**R:** A maioria dos erros acontece por alguns motivos simples:
1.  **Chave da OpenAI inválida:** Verifique se você copiou e colou a chave corretamente no arquivo `.env`.
2.  **Node.js não instalado:** Verifique se você instalou o Node.js (passo 2).
3.  **Comando na pasta errada:** Certifique-se de que você está executando os comandos (`npm install`, `npm run dev`, etc.) dentro da pasta correta do projeto no terminal.
4.  **Esqueceu do `npm install`:** O comando `npm install` só precisa ser executado uma vez, mas é essencial. Se estiver em dúvida, execute-o novamente.

**P: Posso usar o sistema sem internet?**
**R:** Não. Embora o sistema e seus arquivos rodem no seu computador, ele precisa de internet para se conectar à inteligência artificial da OpenAI e obter as respostas.

**P: Fiz uma pergunta e ele não soube responder. Por quê?**
**R:** O sistema só consegue responder com base nas informações que estão nos PDFs que você colocou na pasta `docs`. Se a resposta não estiver nos documentos, ele não terá como saber.

**P: É seguro colocar meus documentos ali?**
**R:** Sim. O sistema é 100% local. Seus documentos e as perguntas que você faz nunca são enviados para a internet ou para qualquer outro lugar. Eles ficam apenas no seu computador.

