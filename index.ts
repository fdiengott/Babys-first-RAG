import {
    Document,
    Ollama,
    OllamaEmbedding,
    Settings,
    VectorStoreIndex,
} from "llamaindex";

async function main() {
    const text = await Bun.file("./data/randy-nesse-interview.txt").text();

    const customEmbedding = new OllamaEmbedding({
        model: "nomic-embed-text",
    });
    const customLlm = new Ollama({ model: "llama3" });

    Settings.llm = customLlm;
    Settings.embedModel = customEmbedding;

    const document = new Document({ text });
    const index = await VectorStoreIndex.fromDocuments([document]);

    console.log("Indexed documents");

    const queryEngine = index.asQueryEngine();
    const query = "What does Randy primarily study?";
    const response = await queryEngine.query({ query });

    console.log(response.toString());
}

main();
