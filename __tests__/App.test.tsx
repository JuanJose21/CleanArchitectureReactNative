import 'react-native';
import React from 'react';
import App from '../App';

import { it, expect, describe, beforeAll, beforeEach, afterAll, afterEach } from '@jest/globals';
import { render } from '@testing-library/react-native';

/* ¿Son importante?
 1. Verificación de codigo
 2. Identificar problemas
 3. Confianza en el codigo (Confianza en cliente, equipo de desarrollo, PO, QA...)
 4. Mejor mantenimiento

 IMPORTANTE: Cubrir primero reglas de negocio y luego preocuparse por el coverage

 JEST:
 Integración con React (react native), desarrollado por Facebook y es uno de los mas populares.
 Snapshot.
 Mocking.
 Coverage.

 Matchers: Son funciones para hacer las comparaciones. Aserciones
 Tipos de resultados, valores, errores, objetos, funciones, promesas, etc.
*/

/*  MATCHERS BASICOS */
/* toBe: verificar que un valor sea estrictamente igual (===) */
it('2 + 2 es igual a 4', () => {
  expect(2 + 2).toBe(4);
});

/* toEqual: verificar que un objeto sea igual */
it('Los objetos son iguales', () => {
  const data = { name: 'John' };
  expect(data).toEqual({ name: 'John' });
});

/*  MATCHERS TRUTHINESS */
/* toBeNull: verificar que un valor sea null */
it('El valor es null', () => {
  const data = null;
  expect(data).toBeNull();
});

/* toBeUndefined: verificar que un valor sea undefined */
it('El valor es undefined', () => {
  const data = undefined;
  expect(data).toBeUndefined();
});

/* toBeDefined: verificar que un valor sea defined */
it('El valor es defined', () => {
  const data = 'Jest';
  expect(data).toBeDefined();
});

/* toBeTruthy: verificar que un valor sea verdadero */
it('El valor es verdadero', () => {
  const truthy = 1;
  expect(truthy).toBeTruthy();
});

/* toBeTruthy: verificar que un valor sea verdadero */
it('El valor es false', () => {
  const falsy = false; //false
  expect(falsy).toBeFalsy();
});

/*  MATCHERS NUMBERS */
/* toBeGreaterThan: verificar que un valor sea mayor que otro */
it('El valor es mayor que otro', () => {
  const value = 10;
  expect(value).toBeGreaterThan(9);
});

/* toBeGreaterThan: verificar que un valor sea mayor que otro */
it('El valor es mayor o igual que otro', () => {
  const value = 9;
  expect(value).toBeGreaterThanOrEqual(9);
});

/* toBeLessThan: verificar que un valor sea menor que otro */
it('El valor es menor que otro', () => {
  const value = 8;
  expect(value).toBeLessThan(9);
});

/* toBeLessThanOrEqual: verificar que un valor sea menor que otro */
it('El valor es menor o igual que otro', () => {
  const value = 9;
  expect(value).toBeLessThanOrEqual(9);
});

/* toBeCloseTo: verificar valores flotantes o decimales */
it('Sumar numeros flotantes', () => {
  const value = 0.1 + 0.2;
  expect(value).toBeCloseTo(0.3);
});

/*  MATCHERS STRINGS */
/* toMatch: verificar si una cadena contiene una subcadena o expresión regular */
it('La cadena contiene el patrón', () => {
  const value = 'Jest es una herramienta de testing';
  expect(value).toMatch(/testing/);
});

/*  MATCHERS ARRAYS Y OBJETOS */
/* toContain: verificar si un array contiene un valor */
it('El array contiene el valor', () => {
  const value = ['Jest', 'React', 'Node'];
  expect(value).toContain('React');
});

/* toHaveProperty: Verificar si un objeto tiene una propiedad */
it('El objeto tiene la propiedad', () => {
  const objeto = { name: 'Jest', version: '27.0.6', type: 'testing' };
  expect(objeto).toHaveProperty('name', 'Jest');
});

/*  MATCHERS ASYNCRONISMO */
/* resolve: verifica que la promesa resuelva con un valor esperado */
it('La promesa resuelve con el valor esperado', async () => {
  await expect(Promise.resolve('Jest')).resolves.toBe('Jest');
});

/* rejects: verifica que la promesa rechance con un valor esperado */
it('La promesa rechance con el valor esperado', async () => {
  await expect(Promise.reject('Jest')).rejects.toBe('Jest');
});


/* Repeticiones */
/* beforeAll(fn): Se ejecuta una vez ANTES de todas las pruebas */
/* afterAll(fn): Se ejecuta una vez DESPUES de todas las pruebas */
/* beforeEach(fn): Se ejecuta ANTES de CADA prueba */
/* afterEach(fn): Se ejecuta DESPUES de CADA prueba */

/* describe: agrupar pruebas unitarias y darles una decripción */

describe('Unit Testing example "repeticiones"', () => {
  let products: any;

  beforeAll(() => {
    products = ['Jest', 'React', 'Node'];
    console.log('Mensaje antes de todas las pruebas');
  });

  afterAll(() => {
    products = [];
    console.log('Mensaje despues de todas las pruebas');
  });

  beforeEach(() => {
    products.push('MongoDB');
    console.log('Mensaje antes de cada prueba');
  });

  afterEach(() => {
    products.pop();
    console.log('Mensaje despues de cada prueba');
  });

  it('El array contiene el valor', () => {
    expect(products).toContain('React');
  });

  it('El primer valor es jest', () => {
    expect(products[0]).toBe('Jest');
  });
});

/*  SNAPSHOT */
/* snapshot: verificar si el valor coincide con el snapshot */
/* Sirve para validar los cambios en las vista */
/* Actualizar snapshot: npm test -- -u */
describe('Unit Testing example "App"', () => {
  it('Renderizar el componente App', () => {
    const tree = render(<App />);
    expect(tree).toMatchSnapshot();
  });
});
