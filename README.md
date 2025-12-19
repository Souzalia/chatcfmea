# 📄 ChatCFMEA  
### Conversar com documentos PDF de forma simples e inteligente

O **ChatCFMEA** é uma aplicação que permite **fazer perguntas em português para documentos PDF**, como se estivesse conversando com uma pessoa.

Você adiciona os PDFs, abre o sistema no navegador e faz perguntas.  
As respostas são geradas **somente com base nos documentos fornecidos**.

---

## 🧠 O que o ChatCFMEA faz?

✔️ Lê arquivos PDF  
✔️ Permite fazer perguntas em linguagem natural  
✔️ Responde com base no conteúdo dos documentos  
✔️ Mantém o contexto da conversa  

📌 O sistema **não inventa respostas** e **não usa fontes externas** além dos PDFs.

---

## 👤 Para quem é este sistema?

Este sistema é indicado para:
- Usuários administrativos
- Analistas
- Técnicos
- Gestores
- Qualquer pessoa que saiba usar computador e internet

❌ **Não é necessário saber programação**

---

## 🖥️ O que é necessário para usar (uma única vez)

Antes de começar, você precisa de:

### ✅ 1. Um computador com internet  
### ✅ 2. Node.js instalado (versão LTS)  
### ✅ 3. GitHub Desktop instalado

---

### 📥 Como instalar o Node.js

1. Acesse: https://nodejs.org  
2. Clique no botão **LTS (recomendado)**  
3. Instale normalmente (Avançar → Avançar → Concluir)

---

### 📥 Como instalar o GitHub Desktop

1. Acesse: https://desktop.github.com  
2. Clique em **Download**
3. Instale normalmente

📌 O GitHub Desktop permite baixar projetos **sem usar comandos**.

---

## 📥 Baixar o ChatCFMEA para o computador (sem comandos)

### Passo 1️⃣ – Abrir o repositório no navegador

1. Acesse o endereço do projeto no GitHub  
2. Clique no botão **Code** (verde)
3. Clique em **Open with GitHub Desktop**

---

### Passo 2️⃣ – Baixar o projeto

1. O GitHub Desktop abrirá automaticamente  
2. Escolha a pasta onde deseja salvar o projeto  
3. Clique em **Clone**

Aguarde o download terminar.

---

## 📦 Preparar o sistema (obrigatório na primeira vez)

1. Abra a pasta do projeto no seu computador  
2. Clique com o botão direito dentro da pasta  
3. Escolha **Abrir no Terminal** (ou Prompt de Comando)

Execute:


  npm install

📌 Esse comando instala automaticamente tudo que o sistema precisa.
⏳ Pode levar alguns minutos.
📌 Esse passo é feito apenas uma vez.

🔐 Configurar a chave de acesso da IA (obrigatório)
O sistema precisa de uma chave para funcionar.

Passo 1️⃣ – Criar o arquivo de configuração
Na pasta do projeto, crie um arquivo chamado:

.env.local

Passo 2️⃣ – Colocar a chave no arquivo
Abra o arquivo .env.local e escreva:

OPENAI_API_KEY=sua_chave_aqui

📌 A chave deve ser obtida no site da OpenAI
📌 Nunca compartilhe essa chave

📁 Adicionar documentos PDF
1️⃣ Abra a pasta chamada docs
2️⃣ Copie para essa pasta todos os PDFs que deseja analisar

🔄 Preparar os documentos (PASSO MUITO IMPORTANTE)
Sempre que você:

adicionar PDFs

remover PDFs

Execute o comando:

npm run ingest

📌 Esse passo prepara os documentos para que o chat consiga respondê-los.

▶️ Iniciar o ChatCFMEA
Execute:

npm run dev

Depois, abra o navegador (Chrome, Edge, etc.) e acesse:

http://localhost:3000

🎉 O ChatCFMEA estará pronto para uso.

🔁 O que fazer no dia a dia
Situação	O que fazer
Primeira vez no computador	npm install
Adicionar ou remover PDFs	npm run ingest
Apenas usar o chat	npm run dev

❓ Perguntas comuns
❓ Preciso rodar todos os comandos toda vez?
Não.
Normalmente, basta rodar:

npm run dev

❓ Se eu trocar os PDFs?
Sempre execute:

npm run ingest

e depois

npm run dev

🔒 Segurança
✔️ Os PDFs não são publicados
✔️ A chave da IA fica apenas no seu computador
✔️ O sistema roda localmente (localhost)

📌 Resumo rápido
1️⃣ Instalar Node.js
2️⃣ Instalar GitHub Desktop
3️⃣ Clonar o projeto pelo botão Code → Open with GitHub Desktop
4️⃣ Rodar npm install
5️⃣ Colocar PDFs na pasta docs
6️⃣ Rodar npm run ingest
7️⃣ Rodar npm run dev
8️⃣ Acessar http://localhost:3000
