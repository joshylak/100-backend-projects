import { faker } from '@faker-js/faker';

/**
 * Create a mock record object from a fields spec.
 * fields: { firstName: { faker: "name.firstName" }, age: { type: "number", min: 18, max: 80 }, id: { type: "uuid" } }
 */
export function createMockRecord(fieldsSpec) {
  const rec = {};
  for (const [key, spec] of Object.entries(fieldsSpec)) {
    rec[key] = applyValueFromSpec(spec);
  }
  return rec;
}

/**
 * Interpret a field spec and return a value.
 */
export function applyValueFromSpec(spec) {
  if (spec == null) return null;

  // If it's already a raw value
  if (typeof spec !== 'object') return spec;

  // If spec has explicit faker path string
  if (spec.faker) {
    // support nested faker access like "internet.email"
    try {
      const parts = spec.faker.split('.');
      let fn = faker;
      for (const p of parts) {
        fn = fn[p];
        if (fn === undefined) break;
      }
      if (typeof fn === 'function') {
        // pass args if provided
        if (Array.isArray(spec.args)) return fn(...spec.args);
        return fn();
      }
    } catch (err) {
      console.warn('Faker call failed for', spec.faker, err.message);
    }
  }

  if (spec.type === 'uuid' || spec.type === 'id') {
    return faker.string.uuid();
  }

  if (spec.type === 'number' || spec.type === 'int') {
    const min = spec.min ?? 0;
    const max = spec.max ?? 9999;
    // inclusive
    return faker.number.int({ min, max });
  }

  if (spec.type === 'float') {
    const min = spec.min ?? 0;
    const max = spec.max ?? 1000;
    const precision = spec.precision ?? 0.01;
    return faker.number.float({ min, max, precision });
  }

  if (spec.type === 'boolean') {
    if (spec.probability !== undefined) {
      return faker.datatype.boolean({ probability: spec.probability });
    }
    return faker.datatype.boolean();
  }

  if (spec.oneOf && Array.isArray(spec.oneOf)) {
    return faker.helpers.arrayElement(spec.oneOf);
  }

  if (spec.array && spec.of) {
    // generate an array of values
    const len = spec.length ?? faker.number.int({ min: 1, max: 5 });
    const arr = [];
    for (let i = 0; i < len; i++) {
      arr.push(applyValueFromSpec(spec.of));
    }
    return arr;
  }

  // fallback: deep generate object fields
  if (spec.fields && typeof spec.fields === 'object') {
    const obj = {};
    for (const [k, v] of Object.entries(spec.fields)) {
      obj[k] = applyValueFromSpec(v);
    }
    return obj;
  }

  // default to null if unknown
  return null;
}
