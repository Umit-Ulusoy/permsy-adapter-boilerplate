# Permsy Adapter Boilerplate

A minimal starter template for building custom framework adapters for **[Permsy](https://www.google.com/search?q=https://github.com/Umit-Ulusoy/permsy&utm_source=gemini)**.

## Getting Started

1. Clone or use this repository as a template.
2. Install dependencies:
```bash
npm install

```


3. Rename `CustomAdapter` in `src/index.ts` to match your target library or framework (e.g., `TelegrafAdapter`, `ErisAdapter`, `FastifyAdapter`).
4. Implement the two core methods:
* `resolveContext(source)`: Extract user IDs, roles, permissions, and command metadata from your framework's context or message object.
* `sendDenyMessage(source, denyMessage)`: Send an authorization error message back to the user.



## Example Implementation

For a complete, real-world example of a production-ready adapter built for `discord.js`, check out the official Discord adapter:

👉 **[permsy-adapter-discordjs](https://github.com/Umit-Ulusoy/permsy-adapter-discordjs?utm_source=gemini)**

## Build

To build the package using `tsup`:

```bash
npm run build

```

## License

MIT