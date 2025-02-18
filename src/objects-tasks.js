/* ************************************************************************************************
 *                                                                                                *
 * Please read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object        *
 *                                                                                                *
 ************************************************************************************************ */

/**
 * Returns shallow copy of an object.
 *
 * @param {Object} obj - an object to copy
 * @return {Object}
 *
 * @example
 *    shallowCopy({a: 2, b: 5}) => {a: 2, b: 5}
 *    shallowCopy({a: 2, b: { a: [1, 2, 3]}}) => {a: 2, b: { a: [1, 2, 3]}}
 *    shallowCopy({}) => {}
 */
function shallowCopy(obj) {
  const newObj = {};
  Object.assign(newObj, obj);
  return newObj;
}

/**
 * Merges array of objects into a single object. If there are overlapping keys, the values
 * should be summed.
 *
 * @param {Object[]} objects - The array of objects to merge
 * @return {Object} - The merged object
 *
 * @example
 *    mergeObjects([{a: 1, b: 2}, {b: 3, c: 5}]) => {a: 1, b: 5, c: 5}
 *    mergeObjects([]) => {}
 */
function mergeObjects(objects) {
  const resObj = {};
  objects.forEach((obj) => {
    Object.entries(obj).forEach(([key, value]) => {
      resObj[key] = resObj[key] ? resObj[key] + value : value;
    });
  });
  return resObj;
}

/**
 * Removes a properties from an object.
 *
 * @param {Object} obj - The object from which to remove the property
 * @param {Array} keys - The keys of the properties to remove
 * @return {Object} - The object with the specified key removed
 *
 * @example
 *    removeProperties({a: 1, b: 2, c: 3}, ['b', 'c']) => {a: 1}
 *    removeProperties({a: 1, b: 2, c: 3}, ['d', 'e']) => {a: 1, b: 2, c: 3}
 *    removeProperties({name: 'John', age: 30, city: 'New York'}, 'age') => {name: 'John', city: 'New York'}
 *
 */
function removeProperties(obj, keys) {
  const newObj = {};
  Object.assign(newObj, obj);
  keys.forEach((elem) => {
    delete newObj[elem];
  });
  return newObj;
}

/**
 * Compares two source objects. Returns true if the objects are equal and false otherwise.
 * There are no nested objects.
 *
 * @param {Object} obj1 - The first object to compare
 * @param {Object} obj2 - The second object to compare
 * @return {boolean} - True if the objects are equal, false otherwise
 *
 * @example
 *    compareObjects({a: 1, b: 2}, {a: 1, b: 2}) => true
 *    compareObjects({a: 1, b: 2}, {a: 1, b: 3}) => false
 */
function compareObjects(obj1, obj2) {
  let result = true;
  Object.entries(obj1).forEach(([key, value]) => {
    if (obj2[key] !== value) result = false;
  });
  Object.entries(obj2).forEach(([key, value]) => {
    if (obj1[key] !== value) result = false;
  });

  return result;
}

/**
 * Checks if the source object is empty.
 * Returns true if the object contains no enumerable own properties, false otherwise.
 *
 * @param {Object} obj - The object to check
 * @return {boolean} - True if the object is empty, false otherwise
 *
 * @example
 *    isEmptyObject({}) => true
 *    isEmptyObject({a: 1}) => false
 */
function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}

/**
 * Makes the source object immutable by preventing any changes to its properties.
 *
 * @param {Object} obj - The source object to make immutable
 * @return {Object} - The immutable version of the object
 *
 * @example
 *    const obj = {a: 1, b: 2};
 *    const immutableObj = makeImmutable(obj);
 *    immutableObj.a = 5;
 *    console.log(immutableObj) => {a: 1, b: 2}
 *    delete immutableObj.a;
 *    console.log(immutableObj) => {a: 1, b: 2}
 *    immutableObj.newProp = 'new';
 *    console.log(immutableObj) => {a: 1, b: 2}
 */
function makeImmutable(obj) {
  return Object.freeze(obj);
}

/**
 * Returns a word from letters whose positions are provided as an object.
 *
 * @param {Object} lettersObject - An object where keys are letters and values are arrays of positions
 * @return {string} - The constructed word
 *
 * @example
 *    makeWord({ a: [0, 1], b: [2, 3], c: [4, 5] }) => 'aabbcc'
 *    makeWord({ H:[0], e: [1], l: [2, 3, 8], o: [4, 6], W:[5], r:[7], d:[9]}) => 'HelloWorld'
 */
function makeWord(lettersObject) {
  const arrStr = [];
  Object.entries(lettersObject).forEach(([key, value]) =>
    value.forEach((letterPos) => {
      arrStr[letterPos] = key;
    })
  );

  return arrStr.join('');
}

/**
 * There is a queue for tickets to a popular movie.
 * The ticket seller sells one ticket at a time strictly in order and give the change.
 * The ticket costs 25. Customers pay with bills of 25, 50, or 100.
 * Initially the seller has no money for change.
 * Return true if the seller can sell tickets, false otherwise
 *
 * @param {number[]} queue - The array representing the bills each customer pays with
 * @return {boolean} - True if the seller can sell tickets to everyone, false otherwise
 *
 * @example
 *    sellTickets([25, 25, 50]) => true
 *    sellTickets([25, 100]) => false (The seller does not have enough money to give change.)
 */
function sellTickets(queue) {
  let change = 0;
  let result = true;
  queue.forEach((elem) => {
    if (elem === 25) change += 25;
    if (elem === 50) {
      if (change < 25) {
        result = false;
      } else {
        change -= 25;
      }
    }
    if (elem === 100) {
      if (change < 75) {
        result = false;
      } else {
        change -= 75;
      }
    }
  });
  return result;
}

/**
 * Returns the rectangle object with width and height parameters and getArea() method
 *
 * @param {number} width
 * @param {number} height
 * @return {Object}
 *
 * @example
 *    const r = new Rectangle(10,20);
 *    console.log(r.width);       // => 10
 *    console.log(r.height);      // => 20
 *    console.log(r.getArea());   // => 200
 */
function Rectangle(width, height) {
  const newObj = {
    width,
    height,
    getArea() {
      return width * height;
    },
  };
  return newObj;
}

/**
 * Returns the JSON representation of specified object
 *
 * @param {object} obj
 * @return {string}
 *
 * @example
 *    [1,2,3]   =>  '[1,2,3]'
 *    { width: 10, height : 20 } => '{"height":10,"width":20}'
 */
function getJSON(obj) {
  return JSON.stringify(obj);
}

/**
 * Returns the object of specified type from JSON representation
 *
 * @param {Object} proto
 * @param {string} json
 * @return {object}
 *
 * @example
 *    const r = fromJSON(Circle.prototype, '{"radius":10}');
 *
 */
function fromJSON(proto, json) {
  const obj = JSON.parse(json);
  return new proto.constructor(...Object.values(obj));
}

/**
 * Sorts the specified array by country name first and city name
 * (if countries are equal) in ascending order.
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [
 *      { country: 'Russia',  city: 'Moscow' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland',  city: 'Warsaw' },
 *      { country: 'Russia',  city: 'Saint Petersburg' },
 *      { country: 'Poland',  city: 'Krakow' },
 *      { country: 'Belarus', city: 'Brest' }
 *    ]
 *                      =>
 *    [
 *      { country: 'Belarus', city: 'Brest' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland',  city: 'Krakow' },
 *      { country: 'Poland',  city: 'Warsaw' },
 *      { country: 'Russia',  city: 'Moscow' },
 *      { country: 'Russia',  city: 'Saint Petersburg' }
 *    ]
 */
function sortCitiesArray(arr) {
  function SortArr(arrIn, type) {
    arrIn.sort((a, b) => {
      const nameA = a[type];
      const nameB = b[type];
      if (type === 'country') {
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      }
      if (a.country === b.country) {
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      }
      return 0;
    });
  }
  SortArr(arr, 'country');
  SortArr(arr, 'city');
  return arr;
}

/**
 * Groups elements of the specified array by key.
 * Returns multimap of keys extracted from array elements via keySelector callback
 * and values extracted via valueSelector callback.
 * See: https://en.wikipedia.org/wiki/Multimap
 *
 * @param {array} array
 * @param {Function} keySelector
 * @param {Function} valueSelector
 * @return {Map}
 *
 * @example
 *   group([
 *      { country: 'Belarus', city: 'Brest' },
 *      { country: 'Russia', city: 'Omsk' },
 *      { country: 'Russia', city: 'Samara' },
 *      { country: 'Belarus', city: 'Grodno' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland', city: 'Lodz' }
 *     ],
 *     item => item.country,
 *     item => item.city
 *   )
 *            =>
 *   Map {
 *    "Belarus" => ["Brest", "Grodno", "Minsk"],
 *    "Russia" => ["Omsk", "Samara"],
 *    "Poland" => ["Lodz"]
 *   }
 */
function group(array, keySelector, valueSelector) {
  // const newMap = new Map();
  // array.forEach((elem) => {
  //   if (newMap.has(elem[keySelector])) {
  //     const newValue = [...newMap.get(elem[keySelector]), elem[valueSelector]];
  //     newMap.set(keySelector, newValue);
  //   } else {
  //     newMap.set(keySelector, [].push(elem[valueSelector]));
  //   }
  // });
  // return newMap;
  return array.reduce((map, item) => {
    const key = keySelector(item);
    const value = valueSelector(item);

    if (!map.has(key)) {
      map.set(key, []);
    }

    map.get(key).push(value);
    return map;
  }, new Map());
}

/**
 * Css selectors builder
 *
 * Each complex selector can consists of type, id, class, attribute, pseudo-class
 * and pseudo-element selectors:
 *
 *    element#id.class[attr]:pseudoClass::pseudoElement
 *              \----/\----/\----------/
 *              Can be several occurrences
 *
 * All types of selectors can be combined using the combination ' ','+','~','>' .
 *
 * The task is to design a single class, independent classes or classes hierarchy
 * and implement the functionality to build the css selectors using the provided cssSelectorBuilder.
 * Each selector should have the stringify() method to output the string representation
 * according to css specification.
 *
 * Provided cssSelectorBuilder should be used as facade only to create your own classes,
 * for example the first method of cssSelectorBuilder can be like this:
 *   element: function(value) {
 *       return new MySuperBaseElementSelector(...)...
 *   },
 *
 * The design of class(es) is totally up to you, but try to make it as simple,
 * clear and readable as possible.
 *
 * @example
 *
 *  const builder = cssSelectorBuilder;
 *
 *  builder.id('main').class('container').class('editable').stringify()
 *    => '#main.container.editable'
 *
 *  builder.element('a').attr('href$=".png"').pseudoClass('focus').stringify()
 *    => 'a[href$=".png"]:focus'
 *
 *  builder.combine(
 *      builder.element('div').id('main').class('container').class('draggable'),
 *      '+',
 *      builder.combine(
 *          builder.element('table').id('data'),
 *          '~',
 *           builder.combine(
 *               builder.element('tr').pseudoClass('nth-of-type(even)'),
 *               ' ',
 *               builder.element('td').pseudoClass('nth-of-type(even)')
 *           )
 *      )
 *  ).stringify()
 *    => 'div#main.container.draggable + table#data ~ tr:nth-of-type(even)   td:nth-of-type(even)'
 *
 *  For more examples see unit tests.
 */

class CssSelector {
  constructor() {
    this.parts = [];
    this.hasElement = false;
    this.hasId = false;
    this.hasPseudoElement = false;
  }

  element(value) {
    this.validateOrder('element');
    if (this.hasElement) {
      throw new Error(
        'Element, id and pseudo-element should not occur more than one time inside the selector'
      );
    }
    this.hasElement = true;
    this.parts.push(value);
    return this;
  }

  id(value) {
    this.validateOrder('id');
    if (this.hasId) {
      throw new Error(
        'Element, id and pseudo-element should not occur more than one time inside the selector'
      );
    }
    this.hasId = true;
    this.parts.push(`#${value}`);
    return this;
  }

  class(value) {
    this.validateOrder('class');
    this.parts.push(`.${value}`);
    return this;
  }

  attr(value) {
    this.validateOrder('attr');
    this.parts.push(`[${value}]`);
    return this;
  }

  pseudoClass(value) {
    this.validateOrder('pseudoClass');
    this.parts.push(`:${value}`);
    return this;
  }

  pseudoElement(value) {
    this.validateOrder('pseudoElement');
    if (this.hasPseudoElement) {
      throw new Error(
        'Element, id and pseudo-element should not occur more than one time inside the selector'
      );
    }
    this.hasPseudoElement = true;
    this.parts.push(`::${value}`);
    return this;
  }

  combine(selector1, combinator, selector2) {
    const combined = `${selector1.stringify()} ${combinator} ${selector2.stringify()}`;
    this.parts.push(combined);
    return this;
  }

  stringify() {
    return this.parts.join('');
  }

  validateOrder(newPart) {
    const order = [
      'element',
      'id',
      'class',
      'attr',
      'pseudoClass',
      'pseudoElement',
    ];
    const lastPart = this.parts[this.parts.length - 1] || '';

    const getLastType = (part) => {
      if (part.startsWith('#')) return 'id';
      if (part.startsWith('.')) return 'class';
      if (part.startsWith('[')) return 'attr';
      if (part.startsWith('::')) return 'pseudoElement';
      if (part.startsWith(':')) return 'pseudoClass';
      return 'element';
    };

    const lastType = getLastType(lastPart);

    if (order.indexOf(newPart) < order.indexOf(lastType)) {
      throw new Error(
        `Selector parts should be in the correct order: ${order.join(', ')}`
      );
    }
  }
}

const cssSelectorBuilder = {
  element: (value) => new CssSelector().element(value),
  id: (value) => new CssSelector().id(value),
  class: (value) => new CssSelector().class(value),
  attr: (value) => new CssSelector().attr(value),
  pseudoClass: (value) => new CssSelector().pseudoClass(value),
  pseudoElement: (value) => new CssSelector().pseudoElement(value),
  combine: (selector1, combinator, selector2) =>
    new CssSelector().combine(selector1, combinator, selector2),
};

module.exports = {
  shallowCopy,
  mergeObjects,
  removeProperties,
  compareObjects,
  isEmptyObject,
  makeImmutable,
  makeWord,
  sellTickets,
  Rectangle,
  getJSON,
  fromJSON,
  group,
  sortCitiesArray,
  cssSelectorBuilder,
};
