import test from "node:test"
import { suma } from "./index.js"
import { strict as assert } from 'node:assert';

test('Prueba de suma', () => {
    const a = 1
    const b = 2
    const resultado = suma(a, b)

    assert.strictEqual(resultado, 3)
})