# baby's first RAG

## Description

I have (clearly) been quite interested in AI for a little while now. This project is a little exploration into the RAG pipeline/architecture. I understand the concepts fairly well at this point, but have yet to implement it into code. This is my attempt at that. This project is starting with the boilerplate that llamaindex includes in their docs and should evolve as I implement use of llama3 which I have stored on my computer so that I don't need to rely upon OpenAI and have a subscription to their service.

This will only be backend code for right now, but I may at some point add a simple frontend to query the store and a vector database to hold the indexes.

UPDATE: This project now successfully runs locally with Llama2 or Llama3. If you wish to try, you must install [llama2](https://ollama.com/library/llama2) or [llama3](https://ollama.com/library/llama3) and update index.ts accordingly.

## Setup

To install dependencies:

```bash
bun install
```

Navigate [here](https://github.com/meta-llama/llama3?tab=readme-ov-file#download) to download llama3.

To run:

```bash
bun run index.ts
```
