import { ConversationalRetrievalQAChain } from 'langchain/chains';
import { OpenAI } from 'langchain/llms/openai';
import { MemoryVectorStore } from 'langchain/vectorstores/memory';
import { OpenAIEmbeddings } from 'langchain/embeddings/openai';
import { DirectoryLoader } from 'langchain/document_loaders/fs/directory';
import { PDFLoader } from 'langchain/document_loaders/fs/pdf';

let cachedChain: ConversationalRetrievalQAChain | null = null;

export async function makeChain() {
  // Evita recriar os vetores a cada pergunta
  if (cachedChain) {
    return cachedChain;
  }

  // 1️⃣ Carregar PDFs da pasta docs
  const loader = new DirectoryLoader('docs', {
    '.pdf': (path) => new PDFLoader(path),
  });

  const docs = await loader.load();

  // 2️⃣ Criar vector store em memória
  const vectorStore = await MemoryVectorStore.fromDocuments(
    docs,
    new OpenAIEmbeddings(),
  );

  // 3️⃣ Criar o retriever
  const retriever = vectorStore.asRetriever();

  // 4️⃣ Criar o modelo
  const model = new OpenAI({
    temperature: 0,
    modelName: process.env.OPENAI_CHAT_MODEL || 'gpt-3.5-turbo',
  });

  // 5️⃣ Criar a chain
  cachedChain = ConversationalRetrievalQAChain.fromLLM(
    model,
    retriever,
    {
      returnSourceDocuments: true,
    },
  );

  return cachedChain;
}
