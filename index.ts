import { Document, VectorStoreIndex } from "llamaindex";

// INFO: this is a basic implementation of a vector data base. This file or others like it, might have more complicated/customized implementations
async function main() {
    const text = await Bun.file("./data/randy-nesse-interview.txt").text();

    const document = new Document({ text });

    const index = await VectorStoreIndex.fromDocuments([document]);

    const queryEngine = index.asQueryEngine();
    const query = "What does Randy primarily study?";
    const response = await queryEngine.query({ query });

    console.log(response.toString());
}

main();
