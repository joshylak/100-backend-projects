(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.findReplace = factory());
})(this, (function () { 'use strict';

  /**
   * @module find-replace
   */

  /**
   * @param {array} - The input array
   * @param {function} - A predicate function which, if returns `true` causes the current item to be operated on.
   * @param [replaceWith] {...any} - If not specified, each found value will be removed. If specified, each found value will be replaced with this value. If the `replaceWith` value is a function, it will be invoked with the found value and its result used as the replace value. If the `replaceWith` function returns an array, the found value will be replaced with each item in the array (not replaced with the array itself).
   * @returns {array}
   * @alias module:find-replace
   */
  function findReplace (array, findFn, ...replaceWiths) {
    const found = [];
    if (!Array.isArray(array)) {
      throw new Error('Input must be an array')
    }

    for (const [index, value] of array.entries()) {
      let expanded = [];
      replaceWiths.forEach(replaceWith => {
        if (typeof replaceWith === 'function') {
          expanded = expanded.concat(replaceWith(value));
        } else {
          expanded.push(replaceWith);
        }
      });

      if (findFn(value)) {
        found.push({
          index: index,
          replaceWithValue: expanded
        });
      }
    }

    for (const item of found.reverse()) {
      const spliceArgs = [item.index, 1].concat(item.replaceWithValue);
      array.splice.apply(array, spliceArgs);
    }

    return array
  }

  return findReplace;

}));
