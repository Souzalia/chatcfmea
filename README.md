
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

