# @x12i/memorix-connectors-cyber usage example

Cybersecurity & threat intelligence.

This consuming application demonstrates **select a connector definition before configuring acquisition** using the published npm package, pinned to `1.0.3`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Select an included cybersecurity or threat-intelligence connector.
- Feed supported threat data into a Memorix connector workflow.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/memorix-connectors-cyber)
- [Implementation monorepo](https://github.com/x12i/memorix-generic-connectors)
- [Reviewed package source](https://github.com/x12i/memorix-generic-connectors/tree/e8dd8c95a7ccbf7d3aa881086974242e3dcc1e10/packages/memorix-connectors-cyber)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.

## Validation scope

This example consumes bundled assets or deterministic local fixtures. It does not contact providers, acquire real records, seed a database, or persist a production graph. Report examples check HTML generation only. Theme examples generate `preview.html`; visual appearance still needs browser review.
