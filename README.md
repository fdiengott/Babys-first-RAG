# baby's first RAG

## Description

I have (clearly) been quite interested in AI for a little while now. This project is a little exploration into the RAG pipeline/architecture. I understand the concepts fairly well at this point, but have yet to implement it into code. This is my attempt at that. This project is starting with the boilerplate that llamaindex includes in their docs and should evolve as I implement use of llama3 which I have stored on my computer so that I don't need to rely upon OpenAI and have a subscription to their service.

This will only be backend code for right now, but I may at some point add a simple frontend to query the store and a vector database to hold the indexes.

## Setup

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.1.3. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
