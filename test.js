import test from "node:test"
import { strict as assert } from 'node:assert';
import { suma } from "./index.js"

test('Prueba de suma', () => {
    const a = 1
    const b = 2
    const resultado = suma(a, b)

    const resultadoEsperado = 3

    assert.strictEqual(resultado, resultadoEsperado)
})