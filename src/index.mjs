import assert from 'node:assert/strict';
import { membersByKind, membersBySeed, loadDefinition } from '@x12i/memorix-connectors-cyber';
const sources = membersByKind('source');
assert(sources.length > 0);
const selected = sources[0];
const definition = loadDefinition(selected);
assert.equal(typeof definition, 'object');
assert(definition !== null);
const configurationPlan = { id: selected.id, kind: selected.kind, connectorId: selected.connectorId, credentialClass: selected.seed, definition };
console.log(configurationPlan);
console.log({ publicMembers: membersBySeed('public').map(member => member.connectorId) });
// Loading a definition does not call its provider or establish credentials or licensing.
