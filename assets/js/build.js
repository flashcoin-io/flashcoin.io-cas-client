!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in v||(v[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==g.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=v[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(g.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=v[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return y[e]||(y[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},{id:r.name});t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=v[s],f=y[s];f?l=f.exports:c&&!c.declarative?l=c.esModule:c?(d(c),f=c.module,l=f.exports):l=p(s),f&&f.importers?(f.importers.push(t),t.dependencies.push(f)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=v[e];if(t)t.declarative?f(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=p(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=v[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);void 0!==typeof c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){var t={};if(("object"==typeof r||"function"==typeof r)&&r!==e)if(m)for(var n in r)"default"!==n&&c(t,r,n);else{var o=r&&r.hasOwnProperty;for(var n in r)"default"===n||o&&!r.hasOwnProperty(n)||(t[n]=r[n])}return t["default"]=r,x(t,"__useDefault",{value:!0}),t}function c(e,r,t){try{var n;(n=Object.getOwnPropertyDescriptor(r,t))&&x(e,t,n)}catch(o){return e[t]=r[t],!1}}function f(r,t){var n=v[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==g.call(t,u)&&(v[u]?f(u,t):p(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function p(e){if(I[e])return I[e];if("@node/"==e.substr(0,6))return I[e]=s(D(e.substr(6)));var r=v[e];if(!r)throw"Module "+e+" not present.";return a(e),f(e,[]),v[e]=void 0,r.declarative&&x(r.module.exports,"__esModule",{value:!0}),I[e]=r.declarative?r.module.exports:r.esModule}var v={},g=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},m=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(h){m=!1}var x;!function(){try{Object.defineProperty({},"a",{})&&(x=Object.defineProperty)}catch(e){x=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var y={},D="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,I={"@empty":{}};return function(e,n,o,a){return function(u){u(function(u){for(var d={_nodeRequire:D,register:r,registerDynamic:t,get:p,set:function(e,r){I[e]=r},newModule:function(e){return e}},i=0;i<n.length;i++)(function(e,r){r&&r.__esModule?I[e]=r:I[e]=s(r)})(n[i],arguments[i]);a(d);var l=p(e[0]);if(e.length>1)for(var i=1;i<e.length;i++)p(e[i]);return o?l["default"]:l})}}}("undefined"!=typeof self?self:global)

(["1"], [], false, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
$__System.registerDynamic('2', ['3', '4'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var getKeys = $__require('3'),
        toIObject = $__require('4');
    module.exports = function (object, el) {
        var O = toIObject(object),
            keys = getKeys(O),
            length = keys.length,
            index = 0,
            key;
        while (length > index) if (O[key = keys[index++]] === el) return key;
    };
    return module.exports;
});
$__System.registerDynamic('5', ['3', '6', '7'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var getKeys = $__require('3'),
        gOPS = $__require('6'),
        pIE = $__require('7');
    module.exports = function (it) {
        var result = getKeys(it),
            getSymbols = gOPS.f;
        if (getSymbols) {
            var symbols = getSymbols(it),
                isEnum = pIE.f,
                i = 0,
                key;
            while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
        }
        return result;
    };
    return module.exports;
});
$__System.registerDynamic('8', ['9', 'a', 'b', 'c', 'd', 'e', 'f', '10', '11', '12', '13', '14', '15', '2', '5', '16', '17', '4', '18', '19', '1a', '1b', '1c', '1d', '3', '1e', '7', '6', '1f', '20'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  var global = $__require('9'),
      has = $__require('a'),
      DESCRIPTORS = $__require('b'),
      $export = $__require('c'),
      redefine = $__require('d'),
      META = $__require('e').KEY,
      $fails = $__require('f'),
      shared = $__require('10'),
      setToStringTag = $__require('11'),
      uid = $__require('12'),
      wks = $__require('13'),
      wksExt = $__require('14'),
      wksDefine = $__require('15'),
      keyOf = $__require('2'),
      enumKeys = $__require('5'),
      isArray = $__require('16'),
      anObject = $__require('17'),
      toIObject = $__require('4'),
      toPrimitive = $__require('18'),
      createDesc = $__require('19'),
      _create = $__require('1a'),
      gOPNExt = $__require('1b'),
      $GOPD = $__require('1c'),
      $DP = $__require('1d'),
      $keys = $__require('3'),
      gOPD = $GOPD.f,
      dP = $DP.f,
      gOPN = gOPNExt.f,
      $Symbol = global.Symbol,
      $JSON = global.JSON,
      _stringify = $JSON && $JSON.stringify,
      PROTOTYPE = 'prototype',
      HIDDEN = wks('_hidden'),
      TO_PRIMITIVE = wks('toPrimitive'),
      isEnum = {}.propertyIsEnumerable,
      SymbolRegistry = shared('symbol-registry'),
      AllSymbols = shared('symbols'),
      OPSymbols = shared('op-symbols'),
      ObjectProto = Object[PROTOTYPE],
      USE_NATIVE = typeof $Symbol == 'function',
      QObject = global.QObject;
  var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
  var setSymbolDesc = DESCRIPTORS && $fails(function () {
    return _create(dP({}, 'a', { get: function () {
        return dP(this, 'a', { value: 7 }).a;
      } })).a != 7;
  }) ? function (it, key, D) {
    var protoDesc = gOPD(ObjectProto, key);
    if (protoDesc) delete ObjectProto[key];
    dP(it, key, D);
    if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
  } : dP;
  var wrap = function (tag) {
    var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
    sym._k = tag;
    return sym;
  };
  var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
    return typeof it == 'symbol';
  } : function (it) {
    return it instanceof $Symbol;
  };
  var $defineProperty = function defineProperty(it, key, D) {
    if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
    anObject(it);
    key = toPrimitive(key, true);
    anObject(D);
    if (has(AllSymbols, key)) {
      if (!D.enumerable) {
        if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
        it[HIDDEN][key] = true;
      } else {
        if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
        D = _create(D, { enumerable: createDesc(0, false) });
      }
      return setSymbolDesc(it, key, D);
    }
    return dP(it, key, D);
  };
  var $defineProperties = function defineProperties(it, P) {
    anObject(it);
    var keys = enumKeys(P = toIObject(P)),
        i = 0,
        l = keys.length,
        key;
    while (l > i) $defineProperty(it, key = keys[i++], P[key]);
    return it;
  };
  var $create = function create(it, P) {
    return P === undefined ? _create(it) : $defineProperties(_create(it), P);
  };
  var $propertyIsEnumerable = function propertyIsEnumerable(key) {
    var E = isEnum.call(this, key = toPrimitive(key, true));
    if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
    return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
  };
  var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
    it = toIObject(it);
    key = toPrimitive(key, true);
    if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
    var D = gOPD(it, key);
    if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
    return D;
  };
  var $getOwnPropertyNames = function getOwnPropertyNames(it) {
    var names = gOPN(toIObject(it)),
        result = [],
        i = 0,
        key;
    while (names.length > i) {
      if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
    }
    return result;
  };
  var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
    var IS_OP = it === ObjectProto,
        names = gOPN(IS_OP ? OPSymbols : toIObject(it)),
        result = [],
        i = 0,
        key;
    while (names.length > i) {
      if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
    }
    return result;
  };
  if (!USE_NATIVE) {
    $Symbol = function Symbol() {
      if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
      var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
      var $set = function (value) {
        if (this === ObjectProto) $set.call(OPSymbols, value);
        if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
        setSymbolDesc(this, tag, createDesc(1, value));
      };
      if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, {
        configurable: true,
        set: $set
      });
      return wrap(tag);
    };
    redefine($Symbol[PROTOTYPE], 'toString', function toString() {
      return this._k;
    });
    $GOPD.f = $getOwnPropertyDescriptor;
    $DP.f = $defineProperty;
    $__require('1e').f = gOPNExt.f = $getOwnPropertyNames;
    $__require('7').f = $propertyIsEnumerable;
    $__require('6').f = $getOwnPropertySymbols;
    if (DESCRIPTORS && !$__require('1f')) {
      redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
    }
    wksExt.f = function (name) {
      return wrap(wks(name));
    };
  }
  $export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });
  for (var symbols = 'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), i = 0; symbols.length > i;) wks(symbols[i++]);
  for (var symbols = $keys(wks.store), i = 0; symbols.length > i;) wksDefine(symbols[i++]);
  $export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
    'for': function (key) {
      return has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
    },
    keyFor: function keyFor(key) {
      if (isSymbol(key)) return keyOf(SymbolRegistry, key);
      throw TypeError(key + ' is not a symbol!');
    },
    useSetter: function () {
      setter = true;
    },
    useSimple: function () {
      setter = false;
    }
  });
  $export($export.S + $export.F * !USE_NATIVE, 'Object', {
    create: $create,
    defineProperty: $defineProperty,
    defineProperties: $defineProperties,
    getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
    getOwnPropertyNames: $getOwnPropertyNames,
    getOwnPropertySymbols: $getOwnPropertySymbols
  });
  $JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
    var S = $Symbol();
    return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
  })), 'JSON', { stringify: function stringify(it) {
      if (it === undefined || isSymbol(it)) return;
      var args = [it],
          i = 1,
          replacer,
          $replacer;
      while (arguments.length > i) args.push(arguments[i++]);
      replacer = args[1];
      if (typeof replacer == 'function') $replacer = replacer;
      if ($replacer || !isArray(replacer)) replacer = function (key, value) {
        if ($replacer) value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return _stringify.apply($JSON, args);
    } });
  $Symbol[PROTOTYPE][TO_PRIMITIVE] || $__require('20')($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
  setToStringTag($Symbol, 'Symbol');
  setToStringTag(Math, 'Math', true);
  setToStringTag(global.JSON, 'JSON', true);
  return module.exports;
});
$__System.registerDynamic('21', ['c', '1a'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var $export = $__require('c');
  $export($export.S, 'Object', { create: $__require('1a') });
  return module.exports;
});
$__System.registerDynamic('22', ['c', 'b', '1d'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var $export = $__require('c');
  $export($export.S + $export.F * !$__require('b'), 'Object', { defineProperty: $__require('1d').f });
  return module.exports;
});
$__System.registerDynamic('23', ['c', 'b', '24'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var $export = $__require('c');
  $export($export.S + $export.F * !$__require('b'), 'Object', { defineProperties: $__require('24') });
  return module.exports;
});
$__System.registerDynamic('25', ['4', '1c', '26'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var toIObject = $__require('4'),
      $getOwnPropertyDescriptor = $__require('1c').f;
  $__require('26')('getOwnPropertyDescriptor', function () {
    return function getOwnPropertyDescriptor(it, key) {
      return $getOwnPropertyDescriptor(toIObject(it), key);
    };
  });
  return module.exports;
});
$__System.registerDynamic('27', ['28', '29', '26'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var toObject = $__require('28'),
      $getPrototypeOf = $__require('29');
  $__require('26')('getPrototypeOf', function () {
    return function getPrototypeOf(it) {
      return $getPrototypeOf(toObject(it));
    };
  });
  return module.exports;
});
$__System.registerDynamic('2a', ['28', '3', '26'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var toObject = $__require('28'),
      $keys = $__require('3');
  $__require('26')('keys', function () {
    return function keys(it) {
      return $keys(toObject(it));
    };
  });
  return module.exports;
});
$__System.registerDynamic('1b', ['4', '1e'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var toIObject = $__require('4'),
      gOPN = $__require('1e').f,
      toString = {}.toString;
  var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
  var getWindowNames = function (it) {
    try {
      return gOPN(it);
    } catch (e) {
      return windowNames.slice();
    }
  };
  module.exports.f = function getOwnPropertyNames(it) {
    return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
  };
  return module.exports;
});
$__System.registerDynamic('2b', ['26', '1b'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  $__require('26')('getOwnPropertyNames', function () {
    return $__require('1b').f;
  });
  return module.exports;
});
$__System.registerDynamic('2c', ['2d', 'e', '26'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var isObject = $__require('2d'),
      meta = $__require('e').onFreeze;
  $__require('26')('freeze', function ($freeze) {
    return function freeze(it) {
      return $freeze && isObject(it) ? $freeze(meta(it)) : it;
    };
  });
  return module.exports;
});
$__System.registerDynamic('2e', ['2d', 'e', '26'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var isObject = $__require('2d'),
      meta = $__require('e').onFreeze;
  $__require('26')('seal', function ($seal) {
    return function seal(it) {
      return $seal && isObject(it) ? $seal(meta(it)) : it;
    };
  });
  return module.exports;
});
$__System.registerDynamic('2f', ['2d', 'e', '26'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var isObject = $__require('2d'),
      meta = $__require('e').onFreeze;
  $__require('26')('preventExtensions', function ($preventExtensions) {
    return function preventExtensions(it) {
      return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
    };
  });
  return module.exports;
});
$__System.registerDynamic('30', ['2d', '26'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var isObject = $__require('2d');
  $__require('26')('isFrozen', function ($isFrozen) {
    return function isFrozen(it) {
      return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
    };
  });
  return module.exports;
});
$__System.registerDynamic('31', ['2d', '26'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var isObject = $__require('2d');
  $__require('26')('isSealed', function ($isSealed) {
    return function isSealed(it) {
      return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
    };
  });
  return module.exports;
});
$__System.registerDynamic('26', ['c', '32', 'f'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var $export = $__require('c'),
        core = $__require('32'),
        fails = $__require('f');
    module.exports = function (KEY, exec) {
        var fn = (core.Object || {})[KEY] || Object[KEY],
            exp = {};
        exp[KEY] = exec(fn);
        $export($export.S + $export.F * fails(function () {
            fn(1);
        }), 'Object', exp);
    };
    return module.exports;
});
$__System.registerDynamic('33', ['2d', '26'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var isObject = $__require('2d');
  $__require('26')('isExtensible', function ($isExtensible) {
    return function isExtensible(it) {
      return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
    };
  });
  return module.exports;
});
$__System.registerDynamic('34', ['c', '35'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var $export = $__require('c');
  $export($export.S + $export.F, 'Object', { assign: $__require('35') });
  return module.exports;
});
$__System.registerDynamic('36', ['c', '37'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var $export = $__require('c');
  $export($export.S, 'Object', { is: $__require('37') });
  return module.exports;
});
$__System.registerDynamic('38', ['c', '39'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var $export = $__require('c');
  $export($export.S, 'Object', { setPrototypeOf: $__require('39').set });
  return module.exports;
});
$__System.registerDynamic('3a', ['3b', '13', 'd'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  var classof = $__require('3b'),
      test = {};
  test[$__require('13')('toStringTag')] = 'z';
  if (test + '' != '[object z]') {
    $__require('d')(Object.prototype, 'toString', function toString() {
      return '[object ' + classof(this) + ']';
    }, true);
  }
  return module.exports;
});
$__System.registerDynamic('3c', ['c', '3d'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var $export = $__require('c');
  $export($export.P, 'Function', { bind: $__require('3d') });
  return module.exports;
});
$__System.registerDynamic('3e', ['1d', '19', 'a', 'b'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var dP = $__require('1d').f,
      createDesc = $__require('19'),
      has = $__require('a'),
      FProto = Function.prototype,
      nameRE = /^\s*function ([^ (]*)/,
      NAME = 'name';
  var isExtensible = Object.isExtensible || function () {
    return true;
  };
  NAME in FProto || $__require('b') && dP(FProto, NAME, {
    configurable: true,
    get: function () {
      try {
        var that = this,
            name = ('' + that).match(nameRE)[1];
        has(that, NAME) || !isExtensible(that) || dP(that, NAME, createDesc(5, name));
        return name;
      } catch (e) {
        return '';
      }
    }
  });
  return module.exports;
});
$__System.registerDynamic('3f', ['2d', '29', '13', '1d'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  var isObject = $__require('2d'),
      getPrototypeOf = $__require('29'),
      HAS_INSTANCE = $__require('13')('hasInstance'),
      FunctionProto = Function.prototype;
  if (!(HAS_INSTANCE in FunctionProto)) $__require('1d').f(FunctionProto, HAS_INSTANCE, { value: function (O) {
      if (typeof this != 'function' || !isObject(O)) return false;
      if (!isObject(this.prototype)) return O instanceof this;
      while (O = getPrototypeOf(O)) if (this.prototype === O) return true;
      return false;
    } });
  return module.exports;
});
$__System.registerDynamic('40', ['c', '41'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var $export = $__require('c'),
        $parseInt = $__require('41');
    $export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });
    return module.exports;
});
$__System.registerDynamic('42', ['c', '43'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var $export = $__require('c'),
        $parseFloat = $__require('43');
    $export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });
    return module.exports;
});
$__System.registerDynamic('44', ['9', 'a', '45', '46', '18', 'f', '1e', '1c', '1d', '47', '1a', 'b', 'd'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  var global = $__require('9'),
      has = $__require('a'),
      cof = $__require('45'),
      inheritIfRequired = $__require('46'),
      toPrimitive = $__require('18'),
      fails = $__require('f'),
      gOPN = $__require('1e').f,
      gOPD = $__require('1c').f,
      dP = $__require('1d').f,
      $trim = $__require('47').trim,
      NUMBER = 'Number',
      $Number = global[NUMBER],
      Base = $Number,
      proto = $Number.prototype,
      BROKEN_COF = cof($__require('1a')(proto)) == NUMBER,
      TRIM = 'trim' in String.prototype;
  var toNumber = function (argument) {
    var it = toPrimitive(argument, false);
    if (typeof it == 'string' && it.length > 2) {
      it = TRIM ? it.trim() : $trim(it, 3);
      var first = it.charCodeAt(0),
          third,
          radix,
          maxCode;
      if (first === 43 || first === 45) {
        third = it.charCodeAt(2);
        if (third === 88 || third === 120) return NaN;
      } else if (first === 48) {
        switch (it.charCodeAt(1)) {
          case 66:
          case 98:
            radix = 2;
            maxCode = 49;
            break;
          case 79:
          case 111:
            radix = 8;
            maxCode = 55;
            break;
          default:
            return +it;
        }
        for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
          code = digits.charCodeAt(i);
          if (code < 48 || code > maxCode) return NaN;
        }
        return parseInt(digits, radix);
      }
    }
    return +it;
  };
  if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
    $Number = function Number(value) {
      var it = arguments.length < 1 ? 0 : value,
          that = this;
      return that instanceof $Number && (BROKEN_COF ? fails(function () {
        proto.valueOf.call(that);
      }) : cof(that) != NUMBER) ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
    };
    for (var keys = $__require('b') ? gOPN(Base) : ('MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' + 'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' + 'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger').split(','), j = 0, key; keys.length > j; j++) {
      if (has(Base, key = keys[j]) && !has($Number, key)) {
        dP($Number, key, gOPD(Base, key));
      }
    }
    $Number.prototype = proto;
    proto.constructor = $Number;
    $__require('d')(global, NUMBER, $Number);
  }
  return module.exports;
});
$__System.registerDynamic('48', ['c', '49', '4a', '4b', 'f'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  var $export = $__require('c'),
      toInteger = $__require('49'),
      aNumberValue = $__require('4a'),
      repeat = $__require('4b'),
      $toFixed = 1..toFixed,
      floor = Math.floor,
      data = [0, 0, 0, 0, 0, 0],
      ERROR = 'Number.toFixed: incorrect invocation!',
      ZERO = '0';
  var multiply = function (n, c) {
    var i = -1,
        c2 = c;
    while (++i < 6) {
      c2 += n * data[i];
      data[i] = c2 % 1e7;
      c2 = floor(c2 / 1e7);
    }
  };
  var divide = function (n) {
    var i = 6,
        c = 0;
    while (--i >= 0) {
      c += data[i];
      data[i] = floor(c / n);
      c = c % n * 1e7;
    }
  };
  var numToString = function () {
    var i = 6,
        s = '';
    while (--i >= 0) {
      if (s !== '' || i === 0 || data[i] !== 0) {
        var t = String(data[i]);
        s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
      }
    }
    return s;
  };
  var pow = function (x, n, acc) {
    return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
  };
  var log = function (x) {
    var n = 0,
        x2 = x;
    while (x2 >= 4096) {
      n += 12;
      x2 /= 4096;
    }
    while (x2 >= 2) {
      n += 1;
      x2 /= 2;
    }
    return n;
  };
  $export($export.P + $export.F * (!!$toFixed && (0.00008.toFixed(3) !== '0.000' || 0.9.toFixed(0) !== '1' || 1.255.toFixed(2) !== '1.25' || 1000000000000000128..toFixed(0) !== '1000000000000000128') || !$__require('f')(function () {
    $toFixed.call({});
  })), 'Number', { toFixed: function toFixed(fractionDigits) {
      var x = aNumberValue(this, ERROR),
          f = toInteger(fractionDigits),
          s = '',
          m = ZERO,
          e,
          z,
          j,
          k;
      if (f < 0 || f > 20) throw RangeError(ERROR);
      if (x != x) return 'NaN';
      if (x <= -1e21 || x >= 1e21) return String(x);
      if (x < 0) {
        s = '-';
        x = -x;
      }
      if (x > 1e-21) {
        e = log(x * pow(2, 69, 1)) - 69;
        z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
        z *= 0x10000000000000;
        e = 52 - e;
        if (e > 0) {
          multiply(0, z);
          j = f;
          while (j >= 7) {
            multiply(1e7, 0);
            j -= 7;
          }
          multiply(pow(10, j, 1), 0);
          j = e - 1;
          while (j >= 23) {
            divide(1 << 23);
            j -= 23;
          }
          divide(1 << j);
          multiply(1, 1);
          divide(2);
          m = numToString();
        } else {
          multiply(0, z);
          multiply(1 << -e, 0);
          m = numToString() + repeat.call(ZERO, f);
        }
      }
      if (f > 0) {
        k = m.length;
        m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
      } else {
        m = s + m;
      }
      return m;
    } });
  return module.exports;
});
$__System.registerDynamic('4a', ['45'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var cof = $__require('45');
  module.exports = function (it, msg) {
    if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);
    return +it;
  };
  return module.exports;
});
$__System.registerDynamic('4c', ['c', 'f', '4a'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  var $export = $__require('c'),
      $fails = $__require('f'),
      aNumberValue = $__require('4a'),
      $toPrecision = 1..toPrecision;
  $export($export.P + $export.F * ($fails(function () {
    return $toPrecision.call(1, undefined) !== '1';
  }) || !$fails(function () {
    $toPrecision.call({});
  })), 'Number', { toPrecision: function toPrecision(precision) {
      var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
      return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
    } });
  return module.exports;
});
$__System.registerDynamic('4d', ['c'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var $export = $__require('c');
  $export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });
  return module.exports;
});
$__System.registerDynamic('4e', ['c', '9'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var $export = $__require('c'),
        _isFinite = $__require('9').isFinite;
    $export($export.S, 'Number', { isFinite: function isFinite(it) {
            return typeof it == 'number' && _isFinite(it);
        } });
    return module.exports;
});
$__System.registerDynamic('4f', ['c', '50'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var $export = $__require('c');
  $export($export.S, 'Number', { isInteger: $__require('50') });
  return module.exports;
});
$__System.registerDynamic('51', ['c'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var $export = $__require('c');
    $export($export.S, 'Number', { isNaN: function isNaN(number) {
            return number != number;
        } });
    return module.exports;
});
$__System.registerDynamic('50', ['2d'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var isObject = $__require('2d'),
      floor = Math.floor;
  module.exports = function isInteger(it) {
    return !isObject(it) && isFinite(it) && floor(it) === it;
  };
  return module.exports;
});
$__System.registerDynamic('52', ['c', '50'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var $export = $__require('c'),
        isInteger = $__require('50'),
        abs = Math.abs;
    $export($export.S, 'Number', { isSafeInteger: function isSafeInteger(number) {
            return isInteger(number) && abs(number) <= 0x1fffffffffffff;
        } });
    return module.exports;
});
$__System.registerDynamic('53', ['c'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var $export = $__require('c');
  $export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });
  return module.exports;
});
$__System.registerDynamic('54', ['c'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var $export = $__require('c');
  $export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });
  return module.exports;
});
$__System.registerDynamic('43', ['9', '47', '55'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var $parseFloat = $__require('9').parseFloat,
        $trim = $__require('47').trim;
    module.exports = 1 / $parseFloat($__require('55') + '-0') !== -Infinity ? function parseFloat(str) {
        var string = $trim(String(str), 3),
            result = $parseFloat(string);
        return result === 0 && string.charAt(0) == '-' ? -0 : result;
    } : $parseFloat;
    return module.exports;
});
$__System.registerDynamic('56', ['c', '43'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var $export = $__require('c'),
        $parseFloat = $__require('43');
    $export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });
    return module.exports;
});
$__System.registerDynamic('41', ['9', '47', '55'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var $parseInt = $__require('9').parseInt,
        $trim = $__require('47').trim,
        ws = $__require('55'),
        hex = /^[\-+]?0[xX]/;
    module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
        var string = $trim(String(str), 3);
        return $parseInt(string, radix >>> 0 || (hex.test(string) ? 16 : 10));
    } : $parseInt;
    return module.exports;
});
$__System.registerDynamic('57', ['c', '41'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var $export = $__require('c'),
        $parseInt = $__require('41');
    $export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });
    return module.exports;
});
$__System.registerDynamic('58', ['c', '59'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var $export = $__require('c'),
        log1p = $__require('59'),
        sqrt = Math.sqrt,
        $acosh = Math.acosh;
    $export($export.S + $export.F * !($acosh && Math.floor($acosh(Number.MAX_VALUE)) == 710 && $acosh(Infinity) == Infinity), 'Math', { acosh: function acosh(x) {
            return (x = +x) < 1 ? NaN : x > 94906265.62425156 ? Math.log(x) + Math.LN2 : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
        } });
    return module.exports;
});
$__System.registerDynamic('5a', ['c'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var $export = $__require('c'),
      $asinh = Math.asinh;
  function asinh(x) {
    return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
  }
  $export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });
  return module.exports;
});
$__System.registerDynamic('5b', ['c'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var $export = $__require('c'),
        $atanh = Math.atanh;
    $export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', { atanh: function atanh(x) {
            return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
        } });
    return module.exports;
});
$__System.registerDynamic('5c', ['c', '5d'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var $export = $__require('c'),
        sign = $__require('5d');
    $export($export.S, 'Math', { cbrt: function cbrt(x) {
            return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
        } });
    return module.exports;
});
$__System.registerDynamic('5e', ['c'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var $export = $__require('c');
    $export($export.S, 'Math', { clz32: function clz32(x) {
            return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
        } });
    return module.exports;
});
$__System.registerDynamic('5f', ['c'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var $export = $__require('c'),
        exp = Math.exp;
    $export($export.S, 'Math', { cosh: function cosh(x) {
            return (exp(x = +x) + exp(-x)) / 2;
        } });
    return module.exports;
});
$__System.registerDynamic('60', ['c', '61'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var $export = $__require('c'),
        $expm1 = $__require('61');
    $export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });
    return module.exports;
});
$__System.registerDynamic('62', ['c', '5d'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var $export = $__require('c'),
      sign = $__require('5d'),
      pow = Math.pow,
      EPSILON = pow(2, -52),
      EPSILON32 = pow(2, -23),
      MAX32 = pow(2, 127) * (2 - EPSILON32),
      MIN32 = pow(2, -126);
  var roundTiesToEven = function (n) {
    return n + 1 / EPSILON - 1 / EPSILON;
  };
  $export($export.S, 'Math', { fround: function fround(x) {
      var $abs = Math.abs(x),
          $sign = sign(x),
          a,
          result;
      if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
      a = (1 + EPSILON32 / EPSILON) * $abs;
      result = a - (a - $abs);
      if (result > MAX32 || result != result) return $sign * Infinity;
      return $sign * result;
    } });
  return module.exports;
});
$__System.registerDynamic('63', ['c'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var $export = $__require('c'),
      abs = Math.abs;
  $export($export.S, 'Math', { hypot: function hypot(value1, value2) {
      var sum = 0,
          i = 0,
          aLen = arguments.length,
          larg = 0,
          arg,
          div;
      while (i < aLen) {
        arg = abs(arguments[i++]);
        if (larg < arg) {
          div = larg / arg;
          sum = sum * div * div + 1;
          larg = arg;
        } else if (arg > 0) {
          div = arg / larg;
          sum += div * div;
        } else sum += arg;
      }
      return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
    } });
  return module.exports;
});
$__System.registerDynamic('64', ['c', 'f'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var $export = $__require('c'),
        $imul = Math.imul;
    $export($export.S + $export.F * $__require('f')(function () {
        return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
    }), 'Math', { imul: function imul(x, y) {
            var UINT16 = 0xffff,
                xn = +x,
                yn = +y,
                xl = UINT16 & xn,
                yl = UINT16 & yn;
            return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
        } });
    return module.exports;
});
$__System.registerDynamic('65', ['c'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var $export = $__require('c');
    $export($export.S, 'Math', { log10: function log10(x) {
            return Math.log(x) / Math.LN10;
        } });
    return module.exports;
});
$__System.registerDynamic("59", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  // 20.2.2.20 Math.log1p(x)
  module.exports = Math.log1p || function log1p(x) {
    return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
  };
  return module.exports;
});
$__System.registerDynamic('66', ['c', '59'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var $export = $__require('c');
  $export($export.S, 'Math', { log1p: $__require('59') });
  return module.exports;
});
$__System.registerDynamic('67', ['c'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var $export = $__require('c');
    $export($export.S, 'Math', { log2: function log2(x) {
            return Math.log(x) / Math.LN2;
        } });
    return module.exports;
});
$__System.registerDynamic("5d", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  // 20.2.2.28 Math.sign(x)
  module.exports = Math.sign || function sign(x) {
    return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
  };
  return module.exports;
});
$__System.registerDynamic('68', ['c', '5d'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var $export = $__require('c');
  $export($export.S, 'Math', { sign: $__require('5d') });
  return module.exports;
});
$__System.registerDynamic('69', ['c', '61', 'f'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var $export = $__require('c'),
        expm1 = $__require('61'),
        exp = Math.exp;
    $export($export.S + $export.F * $__require('f')(function () {
        return !Math.sinh(-2e-17) != -2e-17;
    }), 'Math', { sinh: function sinh(x) {
            return Math.abs(x = +x) < 1 ? (expm1(x) - expm1(-x)) / 2 : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
        } });
    return module.exports;
});
$__System.registerDynamic("61", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  // 20.2.2.14 Math.expm1(x)
  var $expm1 = Math.expm1;
  module.exports = !$expm1
  // Old FF bug
  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
  // Tor Browser bug
  || $expm1(-2e-17) != -2e-17 ? function expm1(x) {
    return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
  } : $expm1;
  return module.exports;
});
$__System.registerDynamic('6a', ['c', '61'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var $export = $__require('c'),
        expm1 = $__require('61'),
        exp = Math.exp;
    $export($export.S, 'Math', { tanh: function tanh(x) {
            var a = expm1(x = +x),
                b = expm1(-x);
            return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
        } });
    return module.exports;
});
$__System.registerDynamic('6b', ['c'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var $export = $__require('c');
    $export($export.S, 'Math', { trunc: function trunc(it) {
            return (it > 0 ? Math.floor : Math.ceil)(it);
        } });
    return module.exports;
});
$__System.registerDynamic('6c', ['c', '6d'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var $export = $__require('c'),
        toIndex = $__require('6d'),
        fromCharCode = String.fromCharCode,
        $fromCodePoint = String.fromCodePoint;
    $export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', { fromCodePoint: function fromCodePoint(x) {
            var res = [],
                aLen = arguments.length,
                i = 0,
                code;
            while (aLen > i) {
                code = +arguments[i++];
                if (toIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
                res.push(code < 0x10000 ? fromCharCode(code) : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00));
            }
            return res.join('');
        } });
    return module.exports;
});
$__System.registerDynamic('6e', ['c', '4', '6f'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var $export = $__require('c'),
        toIObject = $__require('4'),
        toLength = $__require('6f');
    $export($export.S, 'String', { raw: function raw(callSite) {
            var tpl = toIObject(callSite.raw),
                len = toLength(tpl.length),
                aLen = arguments.length,
                res = [],
                i = 0;
            while (len > i) {
                res.push(String(tpl[i++]));
                if (i < aLen) res.push(String(arguments[i]));
            }
            return res.join('');
        } });
    return module.exports;
});
$__System.registerDynamic('70', ['47'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  $__require('47')('trim', function ($trim) {
    return function trim() {
      return $trim(this, 3);
    };
  });
  return module.exports;
});
$__System.registerDynamic('71', ['72', '73'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  var $at = $__require('72')(true);
  $__require('73')(String, 'String', function (iterated) {
    this._t = String(iterated);
    this._i = 0;
  }, function () {
    var O = this._t,
        index = this._i,
        point;
    if (index >= O.length) return {
      value: undefined,
      done: true
    };
    point = $at(O, index);
    this._i += point.length;
    return {
      value: point,
      done: false
    };
  });
  return module.exports;
});
$__System.registerDynamic('74', ['c', '72'], true, function ($__require, exports, module) {
    /* */
    'use strict';

    var define,
        global = this || self,
        GLOBAL = global;
    var $export = $__require('c'),
        $at = $__require('72')(false);
    $export($export.P, 'String', { codePointAt: function codePointAt(pos) {
            return $at(this, pos);
        } });
    return module.exports;
});
$__System.registerDynamic('75', ['c', '6f', '76', '77'], true, function ($__require, exports, module) {
    /* */
    'use strict';

    var define,
        global = this || self,
        GLOBAL = global;
    var $export = $__require('c'),
        toLength = $__require('6f'),
        context = $__require('76'),
        ENDS_WITH = 'endsWith',
        $endsWith = ''[ENDS_WITH];
    $export($export.P + $export.F * $__require('77')(ENDS_WITH), 'String', { endsWith: function endsWith(searchString) {
            var that = context(this, searchString, ENDS_WITH),
                endPosition = arguments.length > 1 ? arguments[1] : undefined,
                len = toLength(that.length),
                end = endPosition === undefined ? len : Math.min(toLength(endPosition), len),
                search = String(searchString);
            return $endsWith ? $endsWith.call(that, search, end) : that.slice(end - search.length, end) === search;
        } });
    return module.exports;
});
$__System.registerDynamic('78', ['c', '76', '77'], true, function ($__require, exports, module) {
    /* */
    'use strict';

    var define,
        global = this || self,
        GLOBAL = global;
    var $export = $__require('c'),
        context = $__require('76'),
        INCLUDES = 'includes';
    $export($export.P + $export.F * $__require('77')(INCLUDES), 'String', { includes: function includes(searchString) {
            return !!~context(this, searchString, INCLUDES).indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
        } });
    return module.exports;
});
$__System.registerDynamic('79', ['c', '4b'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var $export = $__require('c');
  $export($export.P, 'String', { repeat: $__require('4b') });
  return module.exports;
});
$__System.registerDynamic('76', ['7a', '7b'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var isRegExp = $__require('7a'),
      defined = $__require('7b');
  module.exports = function (that, searchString, NAME) {
    if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
    return String(defined(that));
  };
  return module.exports;
});
$__System.registerDynamic('77', ['13'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var MATCH = $__require('13')('match');
  module.exports = function (KEY) {
    var re = /./;
    try {
      '/./'[KEY](re);
    } catch (e) {
      try {
        re[MATCH] = false;
        return !'/./'[KEY](re);
      } catch (f) {}
    }
    return true;
  };
  return module.exports;
});
$__System.registerDynamic('7c', ['c', '6f', '76', '77'], true, function ($__require, exports, module) {
    /* */
    'use strict';

    var define,
        global = this || self,
        GLOBAL = global;
    var $export = $__require('c'),
        toLength = $__require('6f'),
        context = $__require('76'),
        STARTS_WITH = 'startsWith',
        $startsWith = ''[STARTS_WITH];
    $export($export.P + $export.F * $__require('77')(STARTS_WITH), 'String', { startsWith: function startsWith(searchString) {
            var that = context(this, searchString, STARTS_WITH),
                index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length)),
                search = String(searchString);
            return $startsWith ? $startsWith.call(that, search, index) : that.slice(index, index + search.length) === search;
        } });
    return module.exports;
});
$__System.registerDynamic('7d', ['7e'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  $__require('7e')('anchor', function (createHTML) {
    return function anchor(name) {
      return createHTML(this, 'a', 'name', name);
    };
  });
  return module.exports;
});
$__System.registerDynamic('7f', ['7e'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  $__require('7e')('big', function (createHTML) {
    return function big() {
      return createHTML(this, 'big', '', '');
    };
  });
  return module.exports;
});
$__System.registerDynamic('80', ['7e'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  $__require('7e')('blink', function (createHTML) {
    return function blink() {
      return createHTML(this, 'blink', '', '');
    };
  });
  return module.exports;
});
$__System.registerDynamic('81', ['7e'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  $__require('7e')('bold', function (createHTML) {
    return function bold() {
      return createHTML(this, 'b', '', '');
    };
  });
  return module.exports;
});
$__System.registerDynamic('82', ['7e'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  $__require('7e')('fixed', function (createHTML) {
    return function fixed() {
      return createHTML(this, 'tt', '', '');
    };
  });
  return module.exports;
});
$__System.registerDynamic('83', ['7e'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  $__require('7e')('fontcolor', function (createHTML) {
    return function fontcolor(color) {
      return createHTML(this, 'font', 'color', color);
    };
  });
  return module.exports;
});
$__System.registerDynamic('84', ['7e'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  $__require('7e')('fontsize', function (createHTML) {
    return function fontsize(size) {
      return createHTML(this, 'font', 'size', size);
    };
  });
  return module.exports;
});
$__System.registerDynamic('85', ['7e'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  $__require('7e')('italics', function (createHTML) {
    return function italics() {
      return createHTML(this, 'i', '', '');
    };
  });
  return module.exports;
});
$__System.registerDynamic('86', ['7e'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  $__require('7e')('link', function (createHTML) {
    return function link(url) {
      return createHTML(this, 'a', 'href', url);
    };
  });
  return module.exports;
});
$__System.registerDynamic('87', ['7e'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  $__require('7e')('small', function (createHTML) {
    return function small() {
      return createHTML(this, 'small', '', '');
    };
  });
  return module.exports;
});
$__System.registerDynamic('88', ['7e'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  $__require('7e')('strike', function (createHTML) {
    return function strike() {
      return createHTML(this, 'strike', '', '');
    };
  });
  return module.exports;
});
$__System.registerDynamic('89', ['7e'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  $__require('7e')('sub', function (createHTML) {
    return function sub() {
      return createHTML(this, 'sub', '', '');
    };
  });
  return module.exports;
});
$__System.registerDynamic('7e', ['c', 'f', '7b'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var $export = $__require('c'),
      fails = $__require('f'),
      defined = $__require('7b'),
      quot = /"/g;
  var createHTML = function (string, tag, attribute, value) {
    var S = String(defined(string)),
        p1 = '<' + tag;
    if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
    return p1 + '>' + S + '</' + tag + '>';
  };
  module.exports = function (NAME, exec) {
    var O = {};
    O[NAME] = exec(createHTML);
    $export($export.P + $export.F * fails(function () {
      var test = ''[NAME]('"');
      return test !== test.toLowerCase() || test.split('"').length > 3;
    }), 'String', O);
  };
  return module.exports;
});
$__System.registerDynamic('8a', ['7e'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  $__require('7e')('sup', function (createHTML) {
    return function sup() {
      return createHTML(this, 'sup', '', '');
    };
  });
  return module.exports;
});
$__System.registerDynamic('8b', ['c'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var $export = $__require('c');
    $export($export.S, 'Date', { now: function () {
            return new Date().getTime();
        } });
    return module.exports;
});
$__System.registerDynamic('8c', ['c', '28', '18', 'f'], true, function ($__require, exports, module) {
    /* */
    'use strict';

    var define,
        global = this || self,
        GLOBAL = global;
    var $export = $__require('c'),
        toObject = $__require('28'),
        toPrimitive = $__require('18');
    $export($export.P + $export.F * $__require('f')(function () {
        return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({ toISOString: function () {
                return 1;
            } }) !== 1;
    }), 'Date', { toJSON: function toJSON(key) {
            var O = toObject(this),
                pv = toPrimitive(O);
            return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
        } });
    return module.exports;
});
$__System.registerDynamic('8d', ['c', 'f'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  var $export = $__require('c'),
      fails = $__require('f'),
      getTime = Date.prototype.getTime;
  var lz = function (num) {
    return num > 9 ? num : '0' + num;
  };
  $export($export.P + $export.F * (fails(function () {
    return new Date(-5e13 - 1).toISOString() != '0385-07-25T07:06:39.999Z';
  }) || !fails(function () {
    new Date(NaN).toISOString();
  })), 'Date', { toISOString: function toISOString() {
      if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
      var d = this,
          y = d.getUTCFullYear(),
          m = d.getUTCMilliseconds(),
          s = y < 0 ? '-' : y > 9999 ? '+' : '';
      return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) + '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) + 'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) + ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
    } });
  return module.exports;
});
$__System.registerDynamic('8e', ['d'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var DateProto = Date.prototype,
      INVALID_DATE = 'Invalid Date',
      TO_STRING = 'toString',
      $toString = DateProto[TO_STRING],
      getTime = DateProto.getTime;
  if (new Date(NaN) + '' != INVALID_DATE) {
    $__require('d')(DateProto, TO_STRING, function toString() {
      var value = getTime.call(this);
      return value === value ? $toString.call(this) : INVALID_DATE;
    });
  }
  return module.exports;
});
$__System.registerDynamic('8f', ['17', '18'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  var anObject = $__require('17'),
      toPrimitive = $__require('18'),
      NUMBER = 'number';
  module.exports = function (hint) {
    if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
    return toPrimitive(anObject(this), hint != NUMBER);
  };
  return module.exports;
});
$__System.registerDynamic('90', ['13', '20', '8f'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var TO_PRIMITIVE = $__require('13')('toPrimitive'),
        proto = Date.prototype;
    if (!(TO_PRIMITIVE in proto)) $__require('20')(proto, TO_PRIMITIVE, $__require('8f'));
    return module.exports;
});
$__System.registerDynamic('91', ['c', '16'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var $export = $__require('c');
  $export($export.S, 'Array', { isArray: $__require('16') });
  return module.exports;
});
$__System.registerDynamic('92', ['93', 'c', '28', '94', '95', '6f', '96', '97', '98'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  var ctx = $__require('93'),
      $export = $__require('c'),
      toObject = $__require('28'),
      call = $__require('94'),
      isArrayIter = $__require('95'),
      toLength = $__require('6f'),
      createProperty = $__require('96'),
      getIterFn = $__require('97');
  $export($export.S + $export.F * !$__require('98')(function (iter) {
    Array.from(iter);
  }), 'Array', { from: function from(arrayLike) {
      var O = toObject(arrayLike),
          C = typeof this == 'function' ? this : Array,
          aLen = arguments.length,
          mapfn = aLen > 1 ? arguments[1] : undefined,
          mapping = mapfn !== undefined,
          index = 0,
          iterFn = getIterFn(O),
          length,
          result,
          step,
          iterator;
      if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
      if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
        for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
          createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
        }
      } else {
        length = toLength(O.length);
        for (result = new C(length); length > index; index++) {
          createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
        }
      }
      result.length = index;
      return result;
    } });
  return module.exports;
});
$__System.registerDynamic('99', ['c', '96', 'f'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  var $export = $__require('c'),
      createProperty = $__require('96');
  $export($export.S + $export.F * $__require('f')(function () {
    function F() {}
    return !(Array.of.call(F) instanceof F);
  }), 'Array', { of: function of() {
      var index = 0,
          aLen = arguments.length,
          result = new (typeof this == 'function' ? this : Array)(aLen);
      while (aLen > index) createProperty(result, index, arguments[index++]);
      result.length = aLen;
      return result;
    } });
  return module.exports;
});
$__System.registerDynamic('9a', ['c', '4', '9b', '9c'], true, function ($__require, exports, module) {
    /* */
    'use strict';

    var define,
        global = this || self,
        GLOBAL = global;
    var $export = $__require('c'),
        toIObject = $__require('4'),
        arrayJoin = [].join;
    $export($export.P + $export.F * ($__require('9b') != Object || !$__require('9c')(arrayJoin)), 'Array', { join: function join(separator) {
            return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
        } });
    return module.exports;
});
$__System.registerDynamic('9d', ['c', '9e', '45', '6d', '6f', 'f'], true, function ($__require, exports, module) {
    /* */
    'use strict';

    var define,
        global = this || self,
        GLOBAL = global;
    var $export = $__require('c'),
        html = $__require('9e'),
        cof = $__require('45'),
        toIndex = $__require('6d'),
        toLength = $__require('6f'),
        arraySlice = [].slice;
    $export($export.P + $export.F * $__require('f')(function () {
        if (html) arraySlice.call(html);
    }), 'Array', { slice: function slice(begin, end) {
            var len = toLength(this.length),
                klass = cof(this);
            end = end === undefined ? len : end;
            if (klass == 'Array') return arraySlice.call(this, begin, end);
            var start = toIndex(begin, len),
                upTo = toIndex(end, len),
                size = toLength(upTo - start),
                cloned = Array(size),
                i = 0;
            for (; i < size; i++) cloned[i] = klass == 'String' ? this.charAt(start + i) : this[start + i];
            return cloned;
        } });
    return module.exports;
});
$__System.registerDynamic('9f', ['c', 'a0', '28', 'f', '9c'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  var $export = $__require('c'),
      aFunction = $__require('a0'),
      toObject = $__require('28'),
      fails = $__require('f'),
      $sort = [].sort,
      test = [1, 2, 3];
  $export($export.P + $export.F * (fails(function () {
    test.sort(undefined);
  }) || !fails(function () {
    test.sort(null);
  }) || !$__require('9c')($sort)), 'Array', { sort: function sort(comparefn) {
      return comparefn === undefined ? $sort.call(toObject(this)) : $sort.call(toObject(this), aFunction(comparefn));
    } });
  return module.exports;
});
$__System.registerDynamic('a1', ['c', 'a2', '9c'], true, function ($__require, exports, module) {
    /* */
    'use strict';

    var define,
        global = this || self,
        GLOBAL = global;
    var $export = $__require('c'),
        $forEach = $__require('a2')(0),
        STRICT = $__require('9c')([].forEach, true);
    $export($export.P + $export.F * !STRICT, 'Array', { forEach: function forEach(callbackfn) {
            return $forEach(this, callbackfn, arguments[1]);
        } });
    return module.exports;
});
$__System.registerDynamic('a3', ['c', 'a2', '9c'], true, function ($__require, exports, module) {
    /* */
    'use strict';

    var define,
        global = this || self,
        GLOBAL = global;
    var $export = $__require('c'),
        $map = $__require('a2')(1);
    $export($export.P + $export.F * !$__require('9c')([].map, true), 'Array', { map: function map(callbackfn) {
            return $map(this, callbackfn, arguments[1]);
        } });
    return module.exports;
});
$__System.registerDynamic('a4', ['c', 'a2', '9c'], true, function ($__require, exports, module) {
    /* */
    'use strict';

    var define,
        global = this || self,
        GLOBAL = global;
    var $export = $__require('c'),
        $filter = $__require('a2')(2);
    $export($export.P + $export.F * !$__require('9c')([].filter, true), 'Array', { filter: function filter(callbackfn) {
            return $filter(this, callbackfn, arguments[1]);
        } });
    return module.exports;
});
$__System.registerDynamic('a5', ['c', 'a2', '9c'], true, function ($__require, exports, module) {
    /* */
    'use strict';

    var define,
        global = this || self,
        GLOBAL = global;
    var $export = $__require('c'),
        $some = $__require('a2')(3);
    $export($export.P + $export.F * !$__require('9c')([].some, true), 'Array', { some: function some(callbackfn) {
            return $some(this, callbackfn, arguments[1]);
        } });
    return module.exports;
});
$__System.registerDynamic('a6', ['c', 'a2', '9c'], true, function ($__require, exports, module) {
    /* */
    'use strict';

    var define,
        global = this || self,
        GLOBAL = global;
    var $export = $__require('c'),
        $every = $__require('a2')(4);
    $export($export.P + $export.F * !$__require('9c')([].every, true), 'Array', { every: function every(callbackfn) {
            return $every(this, callbackfn, arguments[1]);
        } });
    return module.exports;
});
$__System.registerDynamic('a7', ['c', 'a8', '9c'], true, function ($__require, exports, module) {
    /* */
    'use strict';

    var define,
        global = this || self,
        GLOBAL = global;
    var $export = $__require('c'),
        $reduce = $__require('a8');
    $export($export.P + $export.F * !$__require('9c')([].reduce, true), 'Array', { reduce: function reduce(callbackfn) {
            return $reduce(this, callbackfn, arguments.length, arguments[1], false);
        } });
    return module.exports;
});
$__System.registerDynamic('a8', ['a0', '28', '9b', '6f'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var aFunction = $__require('a0'),
      toObject = $__require('28'),
      IObject = $__require('9b'),
      toLength = $__require('6f');
  module.exports = function (that, callbackfn, aLen, memo, isRight) {
    aFunction(callbackfn);
    var O = toObject(that),
        self = IObject(O),
        length = toLength(O.length),
        index = isRight ? length - 1 : 0,
        i = isRight ? -1 : 1;
    if (aLen < 2) for (;;) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (isRight ? index < 0 : length <= index) {
        throw TypeError('Reduce of empty array with no initial value');
      }
    }
    for (; isRight ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
  return module.exports;
});
$__System.registerDynamic('a9', ['c', 'a8', '9c'], true, function ($__require, exports, module) {
    /* */
    'use strict';

    var define,
        global = this || self,
        GLOBAL = global;
    var $export = $__require('c'),
        $reduce = $__require('a8');
    $export($export.P + $export.F * !$__require('9c')([].reduceRight, true), 'Array', { reduceRight: function reduceRight(callbackfn) {
            return $reduce(this, callbackfn, arguments.length, arguments[1], true);
        } });
    return module.exports;
});
$__System.registerDynamic('aa', ['c', 'ab', '9c'], true, function ($__require, exports, module) {
    /* */
    'use strict';

    var define,
        global = this || self,
        GLOBAL = global;
    var $export = $__require('c'),
        $indexOf = $__require('ab')(false),
        $native = [].indexOf,
        NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;
    $export($export.P + $export.F * (NEGATIVE_ZERO || !$__require('9c')($native)), 'Array', { indexOf: function indexOf(searchElement) {
            return NEGATIVE_ZERO ? $native.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments[1]);
        } });
    return module.exports;
});
$__System.registerDynamic('9c', ['f'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var fails = $__require('f');
  module.exports = function (method, arg) {
    return !!method && fails(function () {
      arg ? method.call(null, function () {}, 1) : method.call(null);
    });
  };
  return module.exports;
});
$__System.registerDynamic('ac', ['c', '4', '49', '6f', '9c'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  var $export = $__require('c'),
      toIObject = $__require('4'),
      toInteger = $__require('49'),
      toLength = $__require('6f'),
      $native = [].lastIndexOf,
      NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;
  $export($export.P + $export.F * (NEGATIVE_ZERO || !$__require('9c')($native)), 'Array', { lastIndexOf: function lastIndexOf(searchElement) {
      if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
      var O = toIObject(this),
          length = toLength(O.length),
          index = length - 1;
      if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
      if (index < 0) index = length + index;
      for (; index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;
      return -1;
    } });
  return module.exports;
});
$__System.registerDynamic('ad', ['c', 'ae', 'af'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var $export = $__require('c');
  $export($export.P, 'Array', { copyWithin: $__require('ae') });
  $__require('af')('copyWithin');
  return module.exports;
});
$__System.registerDynamic('b0', ['c', 'b1', 'af'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var $export = $__require('c');
  $export($export.P, 'Array', { fill: $__require('b1') });
  $__require('af')('fill');
  return module.exports;
});
$__System.registerDynamic('b2', ['c', 'a2', 'af'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  var $export = $__require('c'),
      $find = $__require('a2')(5),
      KEY = 'find',
      forced = true;
  if (KEY in []) Array(1)[KEY](function () {
    forced = false;
  });
  $export($export.P + $export.F * forced, 'Array', { find: function find(callbackfn) {
      return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    } });
  $__require('af')(KEY);
  return module.exports;
});
$__System.registerDynamic('b3', ['c', 'a2', 'af'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  var $export = $__require('c'),
      $find = $__require('a2')(6),
      KEY = 'findIndex',
      forced = true;
  if (KEY in []) Array(1)[KEY](function () {
    forced = false;
  });
  $export($export.P + $export.F * forced, 'Array', { findIndex: function findIndex(callbackfn) {
      return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    } });
  $__require('af')(KEY);
  return module.exports;
});
$__System.registerDynamic('b4', ['b5'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  $__require('b5')('Array');
  return module.exports;
});
$__System.registerDynamic('b6', ['9', '46', '1d', '1e', '7a', 'b7', 'b', 'f', '13', 'd', 'b5'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var global = $__require('9'),
      inheritIfRequired = $__require('46'),
      dP = $__require('1d').f,
      gOPN = $__require('1e').f,
      isRegExp = $__require('7a'),
      $flags = $__require('b7'),
      $RegExp = global.RegExp,
      Base = $RegExp,
      proto = $RegExp.prototype,
      re1 = /a/g,
      re2 = /a/g,
      CORRECT_NEW = new $RegExp(re1) !== re1;
  if ($__require('b') && (!CORRECT_NEW || $__require('f')(function () {
    re2[$__require('13')('match')] = false;
    return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
  }))) {
    $RegExp = function RegExp(p, f) {
      var tiRE = this instanceof $RegExp,
          piRE = isRegExp(p),
          fiU = f === undefined;
      return !tiRE && piRE && p.constructor === $RegExp && fiU ? p : inheritIfRequired(CORRECT_NEW ? new Base(piRE && !fiU ? p.source : p, f) : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f), tiRE ? this : proto, $RegExp);
    };
    var proxy = function (key) {
      key in $RegExp || dP($RegExp, key, {
        configurable: true,
        get: function () {
          return Base[key];
        },
        set: function (it) {
          Base[key] = it;
        }
      });
    };
    for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
    proto.constructor = $RegExp;
    $RegExp.prototype = proto;
    $__require('d')(global, 'RegExp', $RegExp);
  }
  $__require('b5')('RegExp');
  return module.exports;
});
$__System.registerDynamic('b8', ['b9', '17', 'b7', 'b', 'd', 'f'], true, function ($__require, exports, module) {
  /* */
  "format cjs";
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  $__require('b9');
  var anObject = $__require('17'),
      $flags = $__require('b7'),
      DESCRIPTORS = $__require('b'),
      TO_STRING = 'toString',
      $toString = /./[TO_STRING];
  var define = function (fn) {
    $__require('d')(RegExp.prototype, TO_STRING, fn, true);
  };
  if ($__require('f')(function () {
    return $toString.call({
      source: 'a',
      flags: 'b'
    }) != '/a/b';
  })) {
    define(function toString() {
      var R = anObject(this);
      return '/'.concat(R.source, '/', 'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
    });
  } else if ($toString.name != TO_STRING) {
    define(function toString() {
      return $toString.call(this);
    });
  }
  return module.exports;
});
$__System.registerDynamic('b9', ['b', '1d', 'b7'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  if ($__require('b') && /./g.flags != 'g') $__require('1d').f(RegExp.prototype, 'flags', {
    configurable: true,
    get: $__require('b7')
  });
  return module.exports;
});
$__System.registerDynamic('ba', ['bb'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  $__require('bb')('match', 1, function (defined, MATCH, $match) {
    return [function match(regexp) {
      'use strict';

      var O = defined(this),
          fn = regexp == undefined ? undefined : regexp[MATCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    }, $match];
  });
  return module.exports;
});
$__System.registerDynamic('bc', ['bb'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  $__require('bb')('replace', 2, function (defined, REPLACE, $replace) {
    return [function replace(searchValue, replaceValue) {
      'use strict';

      var O = defined(this),
          fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined ? fn.call(searchValue, O, replaceValue) : $replace.call(String(O), searchValue, replaceValue);
    }, $replace];
  });
  return module.exports;
});
$__System.registerDynamic('bd', ['bb'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  $__require('bb')('search', 1, function (defined, SEARCH, $search) {
    return [function search(regexp) {
      'use strict';

      var O = defined(this),
          fn = regexp == undefined ? undefined : regexp[SEARCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    }, $search];
  });
  return module.exports;
});
$__System.registerDynamic('bb', ['20', 'd', 'f', '7b', '13'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  var hide = $__require('20'),
      redefine = $__require('d'),
      fails = $__require('f'),
      defined = $__require('7b'),
      wks = $__require('13');
  module.exports = function (KEY, length, exec) {
    var SYMBOL = wks(KEY),
        fns = exec(defined, SYMBOL, ''[KEY]),
        strfn = fns[0],
        rxfn = fns[1];
    if (fails(function () {
      var O = {};
      O[SYMBOL] = function () {
        return 7;
      };
      return ''[KEY](O) != 7;
    })) {
      redefine(String.prototype, KEY, strfn);
      hide(RegExp.prototype, SYMBOL, length == 2 ? function (string, arg) {
        return rxfn.call(string, this, arg);
      } : function (string) {
        return rxfn.call(string, this);
      });
    }
  };
  return module.exports;
});
$__System.registerDynamic('be', ['bb', '7a'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  $__require('bb')('split', 2, function (defined, SPLIT, $split) {
    'use strict';

    var isRegExp = $__require('7a'),
        _split = $split,
        $push = [].push,
        $SPLIT = 'split',
        LENGTH = 'length',
        LAST_INDEX = 'lastIndex';
    if ('abbc'[$SPLIT](/(b)*/)[1] == 'c' || 'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 || 'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 || '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 || '.'[$SPLIT](/()()/)[LENGTH] > 1 || ''[$SPLIT](/.?/)[LENGTH]) {
      var NPCG = /()??/.exec('')[1] === undefined;
      $split = function (separator, limit) {
        var string = String(this);
        if (separator === undefined && limit === 0) return [];
        if (!isRegExp(separator)) return _split.call(string, separator, limit);
        var output = [];
        var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
        var lastLastIndex = 0;
        var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
        var separatorCopy = new RegExp(separator.source, flags + 'g');
        var separator2, match, lastIndex, lastLength, i;
        if (!NPCG) separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
        while (match = separatorCopy.exec(string)) {
          lastIndex = match.index + match[0][LENGTH];
          if (lastIndex > lastLastIndex) {
            output.push(string.slice(lastLastIndex, match.index));
            if (!NPCG && match[LENGTH] > 1) match[0].replace(separator2, function () {
              for (i = 1; i < arguments[LENGTH] - 2; i++) if (arguments[i] === undefined) match[i] = undefined;
            });
            if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
            lastLength = match[0][LENGTH];
            lastLastIndex = lastIndex;
            if (output[LENGTH] >= splitLimit) break;
          }
          if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++;
        }
        if (lastLastIndex === string[LENGTH]) {
          if (lastLength || !separatorCopy.test('')) output.push('');
        } else output.push(string.slice(lastLastIndex));
        return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
      };
    } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
      $split = function (separator, limit) {
        return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
      };
    }
    return [function split(separator, limit) {
      var O = defined(this),
          fn = separator == undefined ? undefined : separator[SPLIT];
      return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
    }, $split];
  });
  return module.exports;
});
$__System.registerDynamic('bf', ['1f', '9', '93', '3b', 'c', '2d', 'a0', 'c0', 'c1', 'c2', 'c3', 'c4', '13', 'c5', '11', 'b5', '32', '98', 'c6'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var LIBRARY = $__require('1f'),
        global = $__require('9'),
        ctx = $__require('93'),
        classof = $__require('3b'),
        $export = $__require('c'),
        isObject = $__require('2d'),
        aFunction = $__require('a0'),
        anInstance = $__require('c0'),
        forOf = $__require('c1'),
        speciesConstructor = $__require('c2'),
        task = $__require('c3').set,
        microtask = $__require('c4')(),
        PROMISE = 'Promise',
        TypeError = global.TypeError,
        process = global.process,
        $Promise = global[PROMISE],
        process = global.process,
        isNode = classof(process) == 'process',
        empty = function () {},
        Internal,
        GenericPromiseCapability,
        Wrapper;
    var USE_NATIVE = !!function () {
      try {
        var promise = $Promise.resolve(1),
            FakePromise = (promise.constructor = {})[$__require('13')('species')] = function (exec) {
          exec(empty, empty);
        };
        return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
      } catch (e) {}
    }();
    var sameConstructor = function (a, b) {
      return a === b || a === $Promise && b === Wrapper;
    };
    var isThenable = function (it) {
      var then;
      return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
    };
    var newPromiseCapability = function (C) {
      return sameConstructor($Promise, C) ? new PromiseCapability(C) : new GenericPromiseCapability(C);
    };
    var PromiseCapability = GenericPromiseCapability = function (C) {
      var resolve, reject;
      this.promise = new C(function ($$resolve, $$reject) {
        if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
        resolve = $$resolve;
        reject = $$reject;
      });
      this.resolve = aFunction(resolve);
      this.reject = aFunction(reject);
    };
    var perform = function (exec) {
      try {
        exec();
      } catch (e) {
        return { error: e };
      }
    };
    var notify = function (promise, isReject) {
      if (promise._n) return;
      promise._n = true;
      var chain = promise._c;
      microtask(function () {
        var value = promise._v,
            ok = promise._s == 1,
            i = 0;
        var run = function (reaction) {
          var handler = ok ? reaction.ok : reaction.fail,
              resolve = reaction.resolve,
              reject = reaction.reject,
              domain = reaction.domain,
              result,
              then;
          try {
            if (handler) {
              if (!ok) {
                if (promise._h == 2) onHandleUnhandled(promise);
                promise._h = 1;
              }
              if (handler === true) result = value;else {
                if (domain) domain.enter();
                result = handler(value);
                if (domain) domain.exit();
              }
              if (result === reaction.promise) {
                reject(TypeError('Promise-chain cycle'));
              } else if (then = isThenable(result)) {
                then.call(result, resolve, reject);
              } else resolve(result);
            } else reject(value);
          } catch (e) {
            reject(e);
          }
        };
        while (chain.length > i) run(chain[i++]);
        promise._c = [];
        promise._n = false;
        if (isReject && !promise._h) onUnhandled(promise);
      });
    };
    var onUnhandled = function (promise) {
      task.call(global, function () {
        var value = promise._v,
            abrupt,
            handler,
            console;
        if (isUnhandled(promise)) {
          abrupt = perform(function () {
            if (isNode) {
              process.emit('unhandledRejection', value, promise);
            } else if (handler = global.onunhandledrejection) {
              handler({
                promise: promise,
                reason: value
              });
            } else if ((console = global.console) && console.error) {
              console.error('Unhandled promise rejection', value);
            }
          });
          promise._h = isNode || isUnhandled(promise) ? 2 : 1;
        }
        promise._a = undefined;
        if (abrupt) throw abrupt.error;
      });
    };
    var isUnhandled = function (promise) {
      if (promise._h == 1) return false;
      var chain = promise._a || promise._c,
          i = 0,
          reaction;
      while (chain.length > i) {
        reaction = chain[i++];
        if (reaction.fail || !isUnhandled(reaction.promise)) return false;
      }
      return true;
    };
    var onHandleUnhandled = function (promise) {
      task.call(global, function () {
        var handler;
        if (isNode) {
          process.emit('rejectionHandled', promise);
        } else if (handler = global.onrejectionhandled) {
          handler({
            promise: promise,
            reason: promise._v
          });
        }
      });
    };
    var $reject = function (value) {
      var promise = this;
      if (promise._d) return;
      promise._d = true;
      promise = promise._w || promise;
      promise._v = value;
      promise._s = 2;
      if (!promise._a) promise._a = promise._c.slice();
      notify(promise, true);
    };
    var $resolve = function (value) {
      var promise = this,
          then;
      if (promise._d) return;
      promise._d = true;
      promise = promise._w || promise;
      try {
        if (promise === value) throw TypeError("Promise can't be resolved itself");
        if (then = isThenable(value)) {
          microtask(function () {
            var wrapper = {
              _w: promise,
              _d: false
            };
            try {
              then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
            } catch (e) {
              $reject.call(wrapper, e);
            }
          });
        } else {
          promise._v = value;
          promise._s = 1;
          notify(promise, false);
        }
      } catch (e) {
        $reject.call({
          _w: promise,
          _d: false
        }, e);
      }
    };
    if (!USE_NATIVE) {
      $Promise = function Promise(executor) {
        anInstance(this, $Promise, PROMISE, '_h');
        aFunction(executor);
        Internal.call(this);
        try {
          executor(ctx($resolve, this, 1), ctx($reject, this, 1));
        } catch (err) {
          $reject.call(this, err);
        }
      };
      Internal = function Promise(executor) {
        this._c = [];
        this._a = undefined;
        this._s = 0;
        this._d = false;
        this._v = undefined;
        this._h = 0;
        this._n = false;
      };
      Internal.prototype = $__require('c5')($Promise.prototype, {
        then: function then(onFulfilled, onRejected) {
          var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
          reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
          reaction.fail = typeof onRejected == 'function' && onRejected;
          reaction.domain = isNode ? process.domain : undefined;
          this._c.push(reaction);
          if (this._a) this._a.push(reaction);
          if (this._s) notify(this, false);
          return reaction.promise;
        },
        'catch': function (onRejected) {
          return this.then(undefined, onRejected);
        }
      });
      PromiseCapability = function () {
        var promise = new Internal();
        this.promise = promise;
        this.resolve = ctx($resolve, promise, 1);
        this.reject = ctx($reject, promise, 1);
      };
    }
    $export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
    $__require('11')($Promise, PROMISE);
    $__require('b5')(PROMISE);
    Wrapper = $__require('32')[PROMISE];
    $export($export.S + $export.F * !USE_NATIVE, PROMISE, { reject: function reject(r) {
        var capability = newPromiseCapability(this),
            $$reject = capability.reject;
        $$reject(r);
        return capability.promise;
      } });
    $export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, { resolve: function resolve(x) {
        if (x instanceof $Promise && sameConstructor(x.constructor, this)) return x;
        var capability = newPromiseCapability(this),
            $$resolve = capability.resolve;
        $$resolve(x);
        return capability.promise;
      } });
    $export($export.S + $export.F * !(USE_NATIVE && $__require('98')(function (iter) {
      $Promise.all(iter)['catch'](empty);
    })), PROMISE, {
      all: function all(iterable) {
        var C = this,
            capability = newPromiseCapability(C),
            resolve = capability.resolve,
            reject = capability.reject;
        var abrupt = perform(function () {
          var values = [],
              index = 0,
              remaining = 1;
          forOf(iterable, false, function (promise) {
            var $index = index++,
                alreadyCalled = false;
            values.push(undefined);
            remaining++;
            C.resolve(promise).then(function (value) {
              if (alreadyCalled) return;
              alreadyCalled = true;
              values[$index] = value;
              --remaining || resolve(values);
            }, reject);
          });
          --remaining || resolve(values);
        });
        if (abrupt) reject(abrupt.error);
        return capability.promise;
      },
      race: function race(iterable) {
        var C = this,
            capability = newPromiseCapability(C),
            reject = capability.reject;
        var abrupt = perform(function () {
          forOf(iterable, false, function (promise) {
            C.resolve(promise).then(capability.resolve, reject);
          });
        });
        if (abrupt) reject(abrupt.error);
        return capability.promise;
      }
    });
  })($__require('c6'));
  return module.exports;
});
$__System.registerDynamic('c7', ['c8', 'c9'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  var weak = $__require('c8');
  $__require('c9')('WeakSet', function (get) {
    return function WeakSet() {
      return get(this, arguments.length > 0 ? arguments[0] : undefined);
    };
  }, { add: function add(value) {
      return weak.def(this, value, true);
    } }, weak, false, true);
  return module.exports;
});
$__System.registerDynamic('ca', ['c', 'cb', 'cc', '17', '6d', '6f', '2d', '9', 'c2', 'f', 'b5'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  var $export = $__require('c'),
      $typed = $__require('cb'),
      buffer = $__require('cc'),
      anObject = $__require('17'),
      toIndex = $__require('6d'),
      toLength = $__require('6f'),
      isObject = $__require('2d'),
      ArrayBuffer = $__require('9').ArrayBuffer,
      speciesConstructor = $__require('c2'),
      $ArrayBuffer = buffer.ArrayBuffer,
      $DataView = buffer.DataView,
      $isView = $typed.ABV && ArrayBuffer.isView,
      $slice = $ArrayBuffer.prototype.slice,
      VIEW = $typed.VIEW,
      ARRAY_BUFFER = 'ArrayBuffer';
  $export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });
  $export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, { isView: function isView(it) {
      return $isView && $isView(it) || isObject(it) && VIEW in it;
    } });
  $export($export.P + $export.U + $export.F * $__require('f')(function () {
    return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
  }), ARRAY_BUFFER, { slice: function slice(start, end) {
      if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start);
      var len = anObject(this).byteLength,
          first = toIndex(start, len),
          final = toIndex(end === undefined ? len : end, len),
          result = new (speciesConstructor(this, $ArrayBuffer))(toLength(final - first)),
          viewS = new $DataView(this),
          viewT = new $DataView(result),
          index = 0;
      while (first < final) {
        viewT.setUint8(index++, viewS.getUint8(first++));
      }
      return result;
    } });
  $__require('b5')(ARRAY_BUFFER);
  return module.exports;
});
$__System.registerDynamic('cd', ['c', 'cb', 'cc'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var $export = $__require('c');
  $export($export.G + $export.W + $export.F * !$__require('cb').ABV, { DataView: $__require('cc').DataView });
  return module.exports;
});
$__System.registerDynamic('ce', ['cf'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  $__require('cf')('Int8', 1, function (init) {
    return function Int8Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });
  return module.exports;
});
$__System.registerDynamic('d0', ['cf'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  $__require('cf')('Uint8', 1, function (init) {
    return function Uint8Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });
  return module.exports;
});
$__System.registerDynamic('d1', ['cf'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  $__require('cf')('Uint8', 1, function (init) {
    return function Uint8ClampedArray(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  }, true);
  return module.exports;
});
$__System.registerDynamic('d2', ['cf'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  $__require('cf')('Int16', 2, function (init) {
    return function Int16Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });
  return module.exports;
});
$__System.registerDynamic('d3', ['cf'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  $__require('cf')('Uint16', 2, function (init) {
    return function Uint16Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });
  return module.exports;
});
$__System.registerDynamic('d4', ['cf'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  $__require('cf')('Int32', 4, function (init) {
    return function Int32Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });
  return module.exports;
});
$__System.registerDynamic('d5', ['cf'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  $__require('cf')('Uint32', 4, function (init) {
    return function Uint32Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });
  return module.exports;
});
$__System.registerDynamic('d6', ['cf'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  $__require('cf')('Float32', 4, function (init) {
    return function Float32Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });
  return module.exports;
});
$__System.registerDynamic('cb', ['9', '20', '12'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var global = $__require('9'),
      hide = $__require('20'),
      uid = $__require('12'),
      TYPED = uid('typed_array'),
      VIEW = uid('view'),
      ABV = !!(global.ArrayBuffer && global.DataView),
      CONSTR = ABV,
      i = 0,
      l = 9,
      Typed;
  var TypedArrayConstructors = 'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'.split(',');
  while (i < l) {
    if (Typed = global[TypedArrayConstructors[i++]]) {
      hide(Typed.prototype, TYPED, true);
      hide(Typed.prototype, VIEW, true);
    } else CONSTR = false;
  }
  module.exports = {
    ABV: ABV,
    CONSTR: CONSTR,
    TYPED: TYPED,
    VIEW: VIEW
  };
  return module.exports;
});
$__System.registerDynamic('cc', ['9', 'b', '1f', 'cb', '20', 'c5', 'f', 'c0', '49', '6f', '1e', '1d', 'b1', '11'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  var global = $__require('9'),
      DESCRIPTORS = $__require('b'),
      LIBRARY = $__require('1f'),
      $typed = $__require('cb'),
      hide = $__require('20'),
      redefineAll = $__require('c5'),
      fails = $__require('f'),
      anInstance = $__require('c0'),
      toInteger = $__require('49'),
      toLength = $__require('6f'),
      gOPN = $__require('1e').f,
      dP = $__require('1d').f,
      arrayFill = $__require('b1'),
      setToStringTag = $__require('11'),
      ARRAY_BUFFER = 'ArrayBuffer',
      DATA_VIEW = 'DataView',
      PROTOTYPE = 'prototype',
      WRONG_LENGTH = 'Wrong length!',
      WRONG_INDEX = 'Wrong index!',
      $ArrayBuffer = global[ARRAY_BUFFER],
      $DataView = global[DATA_VIEW],
      Math = global.Math,
      RangeError = global.RangeError,
      Infinity = global.Infinity,
      BaseBuffer = $ArrayBuffer,
      abs = Math.abs,
      pow = Math.pow,
      floor = Math.floor,
      log = Math.log,
      LN2 = Math.LN2,
      BUFFER = 'buffer',
      BYTE_LENGTH = 'byteLength',
      BYTE_OFFSET = 'byteOffset',
      $BUFFER = DESCRIPTORS ? '_b' : BUFFER,
      $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH,
      $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;
  var packIEEE754 = function (value, mLen, nBytes) {
    var buffer = Array(nBytes),
        eLen = nBytes * 8 - mLen - 1,
        eMax = (1 << eLen) - 1,
        eBias = eMax >> 1,
        rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0,
        i = 0,
        s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0,
        e,
        m,
        c;
    value = abs(value);
    if (value != value || value === Infinity) {
      m = value != value ? 1 : 0;
      e = eMax;
    } else {
      e = floor(log(value) / LN2);
      if (value * (c = pow(2, -e)) < 1) {
        e--;
        c *= 2;
      }
      if (e + eBias >= 1) {
        value += rt / c;
      } else {
        value += rt * pow(2, 1 - eBias);
      }
      if (value * c >= 2) {
        e++;
        c /= 2;
      }
      if (e + eBias >= eMax) {
        m = 0;
        e = eMax;
      } else if (e + eBias >= 1) {
        m = (value * c - 1) * pow(2, mLen);
        e = e + eBias;
      } else {
        m = value * pow(2, eBias - 1) * pow(2, mLen);
        e = 0;
      }
    }
    for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
    e = e << mLen | m;
    eLen += mLen;
    for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
    buffer[--i] |= s * 128;
    return buffer;
  };
  var unpackIEEE754 = function (buffer, mLen, nBytes) {
    var eLen = nBytes * 8 - mLen - 1,
        eMax = (1 << eLen) - 1,
        eBias = eMax >> 1,
        nBits = eLen - 7,
        i = nBytes - 1,
        s = buffer[i--],
        e = s & 127,
        m;
    s >>= 7;
    for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
    if (e === 0) {
      e = 1 - eBias;
    } else if (e === eMax) {
      return m ? NaN : s ? -Infinity : Infinity;
    } else {
      m = m + pow(2, mLen);
      e = e - eBias;
    }
    return (s ? -1 : 1) * m * pow(2, e - mLen);
  };
  var unpackI32 = function (bytes) {
    return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
  };
  var packI8 = function (it) {
    return [it & 0xff];
  };
  var packI16 = function (it) {
    return [it & 0xff, it >> 8 & 0xff];
  };
  var packI32 = function (it) {
    return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
  };
  var packF64 = function (it) {
    return packIEEE754(it, 52, 8);
  };
  var packF32 = function (it) {
    return packIEEE754(it, 23, 4);
  };
  var addGetter = function (C, key, internal) {
    dP(C[PROTOTYPE], key, { get: function () {
        return this[internal];
      } });
  };
  var get = function (view, bytes, index, isLittleEndian) {
    var numIndex = +index,
        intIndex = toInteger(numIndex);
    if (numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
    var store = view[$BUFFER]._b,
        start = intIndex + view[$OFFSET],
        pack = store.slice(start, start + bytes);
    return isLittleEndian ? pack : pack.reverse();
  };
  var set = function (view, bytes, index, conversion, value, isLittleEndian) {
    var numIndex = +index,
        intIndex = toInteger(numIndex);
    if (numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
    var store = view[$BUFFER]._b,
        start = intIndex + view[$OFFSET],
        pack = conversion(+value);
    for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
  };
  var validateArrayBufferArguments = function (that, length) {
    anInstance(that, $ArrayBuffer, ARRAY_BUFFER);
    var numberLength = +length,
        byteLength = toLength(numberLength);
    if (numberLength != byteLength) throw RangeError(WRONG_LENGTH);
    return byteLength;
  };
  if (!$typed.ABV) {
    $ArrayBuffer = function ArrayBuffer(length) {
      var byteLength = validateArrayBufferArguments(this, length);
      this._b = arrayFill.call(Array(byteLength), 0);
      this[$LENGTH] = byteLength;
    };
    $DataView = function DataView(buffer, byteOffset, byteLength) {
      anInstance(this, $DataView, DATA_VIEW);
      anInstance(buffer, $ArrayBuffer, DATA_VIEW);
      var bufferLength = buffer[$LENGTH],
          offset = toInteger(byteOffset);
      if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
      byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
      if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
      this[$BUFFER] = buffer;
      this[$OFFSET] = offset;
      this[$LENGTH] = byteLength;
    };
    if (DESCRIPTORS) {
      addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
      addGetter($DataView, BUFFER, '_b');
      addGetter($DataView, BYTE_LENGTH, '_l');
      addGetter($DataView, BYTE_OFFSET, '_o');
    }
    redefineAll($DataView[PROTOTYPE], {
      getInt8: function getInt8(byteOffset) {
        return get(this, 1, byteOffset)[0] << 24 >> 24;
      },
      getUint8: function getUint8(byteOffset) {
        return get(this, 1, byteOffset)[0];
      },
      getInt16: function getInt16(byteOffset) {
        var bytes = get(this, 2, byteOffset, arguments[1]);
        return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
      },
      getUint16: function getUint16(byteOffset) {
        var bytes = get(this, 2, byteOffset, arguments[1]);
        return bytes[1] << 8 | bytes[0];
      },
      getInt32: function getInt32(byteOffset) {
        return unpackI32(get(this, 4, byteOffset, arguments[1]));
      },
      getUint32: function getUint32(byteOffset) {
        return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
      },
      getFloat32: function getFloat32(byteOffset) {
        return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
      },
      getFloat64: function getFloat64(byteOffset) {
        return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
      },
      setInt8: function setInt8(byteOffset, value) {
        set(this, 1, byteOffset, packI8, value);
      },
      setUint8: function setUint8(byteOffset, value) {
        set(this, 1, byteOffset, packI8, value);
      },
      setInt16: function setInt16(byteOffset, value) {
        set(this, 2, byteOffset, packI16, value, arguments[2]);
      },
      setUint16: function setUint16(byteOffset, value) {
        set(this, 2, byteOffset, packI16, value, arguments[2]);
      },
      setInt32: function setInt32(byteOffset, value) {
        set(this, 4, byteOffset, packI32, value, arguments[2]);
      },
      setUint32: function setUint32(byteOffset, value) {
        set(this, 4, byteOffset, packI32, value, arguments[2]);
      },
      setFloat32: function setFloat32(byteOffset, value) {
        set(this, 4, byteOffset, packF32, value, arguments[2]);
      },
      setFloat64: function setFloat64(byteOffset, value) {
        set(this, 8, byteOffset, packF64, value, arguments[2]);
      }
    });
  } else {
    if (!fails(function () {
      new $ArrayBuffer();
    }) || !fails(function () {
      new $ArrayBuffer(.5);
    })) {
      $ArrayBuffer = function ArrayBuffer(length) {
        return new BaseBuffer(validateArrayBufferArguments(this, length));
      };
      var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
      for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
        if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
      }
      ;
      if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
    }
    var view = new $DataView(new $ArrayBuffer(2)),
        $setInt8 = $DataView[PROTOTYPE].setInt8;
    view.setInt8(0, 2147483648);
    view.setInt8(1, 2147483649);
    if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
      setInt8: function setInt8(byteOffset, value) {
        $setInt8.call(this, byteOffset, value << 24 >> 24);
      },
      setUint8: function setUint8(byteOffset, value) {
        $setInt8.call(this, byteOffset, value << 24 >> 24);
      }
    }, true);
  }
  setToStringTag($ArrayBuffer, ARRAY_BUFFER);
  setToStringTag($DataView, DATA_VIEW);
  hide($DataView[PROTOTYPE], $typed.VIEW, true);
  exports[ARRAY_BUFFER] = $ArrayBuffer;
  exports[DATA_VIEW] = $DataView;
  return module.exports;
});
$__System.registerDynamic("37", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  // 7.2.9 SameValue(x, y)
  module.exports = Object.is || function is(x, y) {
    return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
  };
  return module.exports;
});
$__System.registerDynamic('c2', ['17', 'a0', '13'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var anObject = $__require('17'),
        aFunction = $__require('a0'),
        SPECIES = $__require('13')('species');
    module.exports = function (O, D) {
        var C = anObject(O).constructor,
            S;
        return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
    };
    return module.exports;
});
$__System.registerDynamic('b1', ['28', '6d', '6f'], true, function ($__require, exports, module) {
    /* */
    'use strict';

    var define,
        global = this || self,
        GLOBAL = global;
    var toObject = $__require('28'),
        toIndex = $__require('6d'),
        toLength = $__require('6f');
    module.exports = function fill(value) {
        var O = toObject(this),
            length = toLength(O.length),
            aLen = arguments.length,
            index = toIndex(aLen > 1 ? arguments[1] : undefined, length),
            end = aLen > 2 ? arguments[2] : undefined,
            endPos = end === undefined ? length : toIndex(end, length);
        while (endPos > index) O[index++] = value;
        return O;
    };
    return module.exports;
});
$__System.registerDynamic('ae', ['28', '6d', '6f'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  var toObject = $__require('28'),
      toIndex = $__require('6d'),
      toLength = $__require('6f');
  module.exports = [].copyWithin || function copyWithin(target, start) {
    var O = toObject(this),
        len = toLength(O.length),
        to = toIndex(target, len),
        from = toIndex(start, len),
        end = arguments.length > 2 ? arguments[2] : undefined,
        count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to),
        inc = 1;
    if (from < to && to < from + count) {
      inc = -1;
      from += count - 1;
      to += count - 1;
    }
    while (count-- > 0) {
      if (from in O) O[to] = O[from];else delete O[to];
      to += inc;
      from += inc;
    }
    return O;
  };
  return module.exports;
});
$__System.registerDynamic('cf', ['b', '1f', '9', 'f', 'c', 'cb', 'cc', '93', 'c0', '19', '20', 'c5', '49', '6f', '6d', '18', 'a', '37', '3b', '2d', '28', '95', '1a', '29', '1e', '97', '12', '13', 'a2', 'ab', 'c2', 'd7', 'd8', '98', 'b5', 'b1', 'ae', '1d', '1c'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  if ($__require('b')) {
    var LIBRARY = $__require('1f'),
        global = $__require('9'),
        fails = $__require('f'),
        $export = $__require('c'),
        $typed = $__require('cb'),
        $buffer = $__require('cc'),
        ctx = $__require('93'),
        anInstance = $__require('c0'),
        propertyDesc = $__require('19'),
        hide = $__require('20'),
        redefineAll = $__require('c5'),
        toInteger = $__require('49'),
        toLength = $__require('6f'),
        toIndex = $__require('6d'),
        toPrimitive = $__require('18'),
        has = $__require('a'),
        same = $__require('37'),
        classof = $__require('3b'),
        isObject = $__require('2d'),
        toObject = $__require('28'),
        isArrayIter = $__require('95'),
        create = $__require('1a'),
        getPrototypeOf = $__require('29'),
        gOPN = $__require('1e').f,
        getIterFn = $__require('97'),
        uid = $__require('12'),
        wks = $__require('13'),
        createArrayMethod = $__require('a2'),
        createArrayIncludes = $__require('ab'),
        speciesConstructor = $__require('c2'),
        ArrayIterators = $__require('d7'),
        Iterators = $__require('d8'),
        $iterDetect = $__require('98'),
        setSpecies = $__require('b5'),
        arrayFill = $__require('b1'),
        arrayCopyWithin = $__require('ae'),
        $DP = $__require('1d'),
        $GOPD = $__require('1c'),
        dP = $DP.f,
        gOPD = $GOPD.f,
        RangeError = global.RangeError,
        TypeError = global.TypeError,
        Uint8Array = global.Uint8Array,
        ARRAY_BUFFER = 'ArrayBuffer',
        SHARED_BUFFER = 'Shared' + ARRAY_BUFFER,
        BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT',
        PROTOTYPE = 'prototype',
        ArrayProto = Array[PROTOTYPE],
        $ArrayBuffer = $buffer.ArrayBuffer,
        $DataView = $buffer.DataView,
        arrayForEach = createArrayMethod(0),
        arrayFilter = createArrayMethod(2),
        arraySome = createArrayMethod(3),
        arrayEvery = createArrayMethod(4),
        arrayFind = createArrayMethod(5),
        arrayFindIndex = createArrayMethod(6),
        arrayIncludes = createArrayIncludes(true),
        arrayIndexOf = createArrayIncludes(false),
        arrayValues = ArrayIterators.values,
        arrayKeys = ArrayIterators.keys,
        arrayEntries = ArrayIterators.entries,
        arrayLastIndexOf = ArrayProto.lastIndexOf,
        arrayReduce = ArrayProto.reduce,
        arrayReduceRight = ArrayProto.reduceRight,
        arrayJoin = ArrayProto.join,
        arraySort = ArrayProto.sort,
        arraySlice = ArrayProto.slice,
        arrayToString = ArrayProto.toString,
        arrayToLocaleString = ArrayProto.toLocaleString,
        ITERATOR = wks('iterator'),
        TAG = wks('toStringTag'),
        TYPED_CONSTRUCTOR = uid('typed_constructor'),
        DEF_CONSTRUCTOR = uid('def_constructor'),
        ALL_CONSTRUCTORS = $typed.CONSTR,
        TYPED_ARRAY = $typed.TYPED,
        VIEW = $typed.VIEW,
        WRONG_LENGTH = 'Wrong length!';
    var $map = createArrayMethod(1, function (O, length) {
      return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
    });
    var LITTLE_ENDIAN = fails(function () {
      return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
    });
    var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
      new Uint8Array(1).set({});
    });
    var strictToLength = function (it, SAME) {
      if (it === undefined) throw TypeError(WRONG_LENGTH);
      var number = +it,
          length = toLength(it);
      if (SAME && !same(number, length)) throw RangeError(WRONG_LENGTH);
      return length;
    };
    var toOffset = function (it, BYTES) {
      var offset = toInteger(it);
      if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
      return offset;
    };
    var validate = function (it) {
      if (isObject(it) && TYPED_ARRAY in it) return it;
      throw TypeError(it + ' is not a typed array!');
    };
    var allocate = function (C, length) {
      if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
        throw TypeError('It is not a typed array constructor!');
      }
      return new C(length);
    };
    var speciesFromList = function (O, list) {
      return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
    };
    var fromList = function (C, list) {
      var index = 0,
          length = list.length,
          result = allocate(C, length);
      while (length > index) result[index] = list[index++];
      return result;
    };
    var addGetter = function (it, key, internal) {
      dP(it, key, { get: function () {
          return this._d[internal];
        } });
    };
    var $from = function from(source) {
      var O = toObject(source),
          aLen = arguments.length,
          mapfn = aLen > 1 ? arguments[1] : undefined,
          mapping = mapfn !== undefined,
          iterFn = getIterFn(O),
          i,
          length,
          values,
          result,
          step,
          iterator;
      if (iterFn != undefined && !isArrayIter(iterFn)) {
        for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
          values.push(step.value);
        }
        O = values;
      }
      if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
      for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
        result[i] = mapping ? mapfn(O[i], i) : O[i];
      }
      return result;
    };
    var $of = function of() {
      var index = 0,
          length = arguments.length,
          result = allocate(this, length);
      while (length > index) result[index] = arguments[index++];
      return result;
    };
    var TO_LOCALE_BUG = !!Uint8Array && fails(function () {
      arrayToLocaleString.call(new Uint8Array(1));
    });
    var $toLocaleString = function toLocaleString() {
      return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
    };
    var proto = {
      copyWithin: function copyWithin(target, start) {
        return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
      },
      every: function every(callbackfn) {
        return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      },
      fill: function fill(value) {
        return arrayFill.apply(validate(this), arguments);
      },
      filter: function filter(callbackfn) {
        return speciesFromList(this, arrayFilter(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined));
      },
      find: function find(predicate) {
        return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
      },
      findIndex: function findIndex(predicate) {
        return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
      },
      forEach: function forEach(callbackfn) {
        arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      },
      indexOf: function indexOf(searchElement) {
        return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
      },
      includes: function includes(searchElement) {
        return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
      },
      join: function join(separator) {
        return arrayJoin.apply(validate(this), arguments);
      },
      lastIndexOf: function lastIndexOf(searchElement) {
        return arrayLastIndexOf.apply(validate(this), arguments);
      },
      map: function map(mapfn) {
        return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
      },
      reduce: function reduce(callbackfn) {
        return arrayReduce.apply(validate(this), arguments);
      },
      reduceRight: function reduceRight(callbackfn) {
        return arrayReduceRight.apply(validate(this), arguments);
      },
      reverse: function reverse() {
        var that = this,
            length = validate(that).length,
            middle = Math.floor(length / 2),
            index = 0,
            value;
        while (index < middle) {
          value = that[index];
          that[index++] = that[--length];
          that[length] = value;
        }
        return that;
      },
      some: function some(callbackfn) {
        return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      },
      sort: function sort(comparefn) {
        return arraySort.call(validate(this), comparefn);
      },
      subarray: function subarray(begin, end) {
        var O = validate(this),
            length = O.length,
            $begin = toIndex(begin, length);
        return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(O.buffer, O.byteOffset + $begin * O.BYTES_PER_ELEMENT, toLength((end === undefined ? length : toIndex(end, length)) - $begin));
      }
    };
    var $slice = function slice(start, end) {
      return speciesFromList(this, arraySlice.call(validate(this), start, end));
    };
    var $set = function set(arrayLike) {
      validate(this);
      var offset = toOffset(arguments[1], 1),
          length = this.length,
          src = toObject(arrayLike),
          len = toLength(src.length),
          index = 0;
      if (len + offset > length) throw RangeError(WRONG_LENGTH);
      while (index < len) this[offset + index] = src[index++];
    };
    var $iterators = {
      entries: function entries() {
        return arrayEntries.call(validate(this));
      },
      keys: function keys() {
        return arrayKeys.call(validate(this));
      },
      values: function values() {
        return arrayValues.call(validate(this));
      }
    };
    var isTAIndex = function (target, key) {
      return isObject(target) && target[TYPED_ARRAY] && typeof key != 'symbol' && key in target && String(+key) == String(key);
    };
    var $getDesc = function getOwnPropertyDescriptor(target, key) {
      return isTAIndex(target, key = toPrimitive(key, true)) ? propertyDesc(2, target[key]) : gOPD(target, key);
    };
    var $setDesc = function defineProperty(target, key, desc) {
      if (isTAIndex(target, key = toPrimitive(key, true)) && isObject(desc) && has(desc, 'value') && !has(desc, 'get') && !has(desc, 'set') && !desc.configurable && (!has(desc, 'writable') || desc.writable) && (!has(desc, 'enumerable') || desc.enumerable)) {
        target[key] = desc.value;
        return target;
      } else return dP(target, key, desc);
    };
    if (!ALL_CONSTRUCTORS) {
      $GOPD.f = $getDesc;
      $DP.f = $setDesc;
    }
    $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
      getOwnPropertyDescriptor: $getDesc,
      defineProperty: $setDesc
    });
    if (fails(function () {
      arrayToString.call({});
    })) {
      arrayToString = arrayToLocaleString = function toString() {
        return arrayJoin.call(this);
      };
    }
    var $TypedArrayPrototype$ = redefineAll({}, proto);
    redefineAll($TypedArrayPrototype$, $iterators);
    hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
    redefineAll($TypedArrayPrototype$, {
      slice: $slice,
      set: $set,
      constructor: function () {},
      toString: arrayToString,
      toLocaleString: $toLocaleString
    });
    addGetter($TypedArrayPrototype$, 'buffer', 'b');
    addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
    addGetter($TypedArrayPrototype$, 'byteLength', 'l');
    addGetter($TypedArrayPrototype$, 'length', 'e');
    dP($TypedArrayPrototype$, TAG, { get: function () {
        return this[TYPED_ARRAY];
      } });
    module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
      CLAMPED = !!CLAMPED;
      var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array',
          ISNT_UINT8 = NAME != 'Uint8Array',
          GETTER = 'get' + KEY,
          SETTER = 'set' + KEY,
          TypedArray = global[NAME],
          Base = TypedArray || {},
          TAC = TypedArray && getPrototypeOf(TypedArray),
          FORCED = !TypedArray || !$typed.ABV,
          O = {},
          TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
      var getter = function (that, index) {
        var data = that._d;
        return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
      };
      var setter = function (that, index, value) {
        var data = that._d;
        if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
        data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
      };
      var addElement = function (that, index) {
        dP(that, index, {
          get: function () {
            return getter(this, index);
          },
          set: function (value) {
            return setter(this, index, value);
          },
          enumerable: true
        });
      };
      if (FORCED) {
        TypedArray = wrapper(function (that, data, $offset, $length) {
          anInstance(that, TypedArray, NAME, '_d');
          var index = 0,
              offset = 0,
              buffer,
              byteLength,
              length,
              klass;
          if (!isObject(data)) {
            length = strictToLength(data, true);
            byteLength = length * BYTES;
            buffer = new $ArrayBuffer(byteLength);
          } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
            buffer = data;
            offset = toOffset($offset, BYTES);
            var $len = data.byteLength;
            if ($length === undefined) {
              if ($len % BYTES) throw RangeError(WRONG_LENGTH);
              byteLength = $len - offset;
              if (byteLength < 0) throw RangeError(WRONG_LENGTH);
            } else {
              byteLength = toLength($length) * BYTES;
              if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
            }
            length = byteLength / BYTES;
          } else if (TYPED_ARRAY in data) {
            return fromList(TypedArray, data);
          } else {
            return $from.call(TypedArray, data);
          }
          hide(that, '_d', {
            b: buffer,
            o: offset,
            l: byteLength,
            e: length,
            v: new $DataView(buffer)
          });
          while (index < length) addElement(that, index++);
        });
        TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
        hide(TypedArrayPrototype, 'constructor', TypedArray);
      } else if (!$iterDetect(function (iter) {
        new TypedArray(null);
        new TypedArray(iter);
      }, true)) {
        TypedArray = wrapper(function (that, data, $offset, $length) {
          anInstance(that, TypedArray, NAME);
          var klass;
          if (!isObject(data)) return new Base(strictToLength(data, ISNT_UINT8));
          if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
            return $length !== undefined ? new Base(data, toOffset($offset, BYTES), $length) : $offset !== undefined ? new Base(data, toOffset($offset, BYTES)) : new Base(data);
          }
          if (TYPED_ARRAY in data) return fromList(TypedArray, data);
          return $from.call(TypedArray, data);
        });
        arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
          if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
        });
        TypedArray[PROTOTYPE] = TypedArrayPrototype;
        if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
      }
      var $nativeIterator = TypedArrayPrototype[ITERATOR],
          CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined),
          $iterator = $iterators.values;
      hide(TypedArray, TYPED_CONSTRUCTOR, true);
      hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
      hide(TypedArrayPrototype, VIEW, true);
      hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);
      if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
        dP(TypedArrayPrototype, TAG, { get: function () {
            return NAME;
          } });
      }
      O[NAME] = TypedArray;
      $export($export.G + $export.W + $export.F * (TypedArray != Base), O);
      $export($export.S, NAME, {
        BYTES_PER_ELEMENT: BYTES,
        from: $from,
        of: $of
      });
      if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);
      $export($export.P, NAME, proto);
      setSpecies(NAME);
      $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });
      $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);
      $export($export.P + $export.F * (TypedArrayPrototype.toString != arrayToString), NAME, { toString: arrayToString });
      $export($export.P + $export.F * fails(function () {
        new TypedArray(1).slice();
      }), NAME, { slice: $slice });
      $export($export.P + $export.F * (fails(function () {
        return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
      }) || !fails(function () {
        TypedArrayPrototype.toLocaleString.call([1, 2]);
      })), NAME, { toLocaleString: $toLocaleString });
      Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
      if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
    };
  } else module.exports = function () {};
  return module.exports;
});
$__System.registerDynamic('d9', ['cf'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  $__require('cf')('Float64', 8, function (init) {
    return function Float64Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });
  return module.exports;
});
$__System.registerDynamic('da', ['c', 'a0', '17', '9', 'f'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var $export = $__require('c'),
        aFunction = $__require('a0'),
        anObject = $__require('17'),
        rApply = ($__require('9').Reflect || {}).apply,
        fApply = Function.apply;
    $export($export.S + $export.F * !$__require('f')(function () {
        rApply(function () {});
    }), 'Reflect', { apply: function apply(target, thisArgument, argumentsList) {
            var T = aFunction(target),
                L = anObject(argumentsList);
            return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
        } });
    return module.exports;
});
$__System.registerDynamic('3d', ['a0', '2d', 'db'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  var aFunction = $__require('a0'),
      isObject = $__require('2d'),
      invoke = $__require('db'),
      arraySlice = [].slice,
      factories = {};
  var construct = function (F, len, args) {
    if (!(len in factories)) {
      for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
      factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
    }
    return factories[len](F, args);
  };
  module.exports = Function.bind || function bind(that) {
    var fn = aFunction(this),
        partArgs = arraySlice.call(arguments, 1);
    var bound = function () {
      var args = partArgs.concat(arraySlice.call(arguments));
      return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
    };
    if (isObject(fn.prototype)) bound.prototype = fn.prototype;
    return bound;
  };
  return module.exports;
});
$__System.registerDynamic('dc', ['c', '1a', 'a0', '17', '2d', 'f', '3d', '9'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var $export = $__require('c'),
      create = $__require('1a'),
      aFunction = $__require('a0'),
      anObject = $__require('17'),
      isObject = $__require('2d'),
      fails = $__require('f'),
      bind = $__require('3d'),
      rConstruct = ($__require('9').Reflect || {}).construct;
  var NEW_TARGET_BUG = fails(function () {
    function F() {}
    return !(rConstruct(function () {}, [], F) instanceof F);
  });
  var ARGS_BUG = !fails(function () {
    rConstruct(function () {});
  });
  $export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', { construct: function construct(Target, args) {
      aFunction(Target);
      anObject(args);
      var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
      if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
      if (Target == newTarget) {
        switch (args.length) {
          case 0:
            return new Target();
          case 1:
            return new Target(args[0]);
          case 2:
            return new Target(args[0], args[1]);
          case 3:
            return new Target(args[0], args[1], args[2]);
          case 4:
            return new Target(args[0], args[1], args[2], args[3]);
        }
        var $args = [null];
        $args.push.apply($args, args);
        return new (bind.apply(Target, $args))();
      }
      var proto = newTarget.prototype,
          instance = create(isObject(proto) ? proto : Object.prototype),
          result = Function.apply.call(Target, instance, args);
      return isObject(result) ? result : instance;
    } });
  return module.exports;
});
$__System.registerDynamic('dd', ['1d', 'c', '17', '18', 'f'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var dP = $__require('1d'),
      $export = $__require('c'),
      anObject = $__require('17'),
      toPrimitive = $__require('18');
  $export($export.S + $export.F * $__require('f')(function () {
    Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
  }), 'Reflect', { defineProperty: function defineProperty(target, propertyKey, attributes) {
      anObject(target);
      propertyKey = toPrimitive(propertyKey, true);
      anObject(attributes);
      try {
        dP.f(target, propertyKey, attributes);
        return true;
      } catch (e) {
        return false;
      }
    } });
  return module.exports;
});
$__System.registerDynamic('de', ['c', '1c', '17'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var $export = $__require('c'),
        gOPD = $__require('1c').f,
        anObject = $__require('17');
    $export($export.S, 'Reflect', { deleteProperty: function deleteProperty(target, propertyKey) {
            var desc = gOPD(anObject(target), propertyKey);
            return desc && !desc.configurable ? false : delete target[propertyKey];
        } });
    return module.exports;
});
$__System.registerDynamic('df', ['c', '17', 'e0'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  var $export = $__require('c'),
      anObject = $__require('17');
  var Enumerate = function (iterated) {
    this._t = anObject(iterated);
    this._i = 0;
    var keys = this._k = [],
        key;
    for (key in iterated) keys.push(key);
  };
  $__require('e0')(Enumerate, 'Object', function () {
    var that = this,
        keys = that._k,
        key;
    do {
      if (that._i >= keys.length) return {
        value: undefined,
        done: true
      };
    } while (!((key = keys[that._i++]) in that._t));
    return {
      value: key,
      done: false
    };
  });
  $export($export.S, 'Reflect', { enumerate: function enumerate(target) {
      return new Enumerate(target);
    } });
  return module.exports;
});
$__System.registerDynamic('e1', ['1c', '29', 'a', 'c', '2d', '17'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var gOPD = $__require('1c'),
      getPrototypeOf = $__require('29'),
      has = $__require('a'),
      $export = $__require('c'),
      isObject = $__require('2d'),
      anObject = $__require('17');
  function get(target, propertyKey) {
    var receiver = arguments.length < 3 ? target : arguments[2],
        desc,
        proto;
    if (anObject(target) === receiver) return target[propertyKey];
    if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value') ? desc.value : desc.get !== undefined ? desc.get.call(receiver) : undefined;
    if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
  }
  $export($export.S, 'Reflect', { get: get });
  return module.exports;
});
$__System.registerDynamic('e2', ['1c', 'c', '17'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var gOPD = $__require('1c'),
        $export = $__require('c'),
        anObject = $__require('17');
    $export($export.S, 'Reflect', { getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
            return gOPD.f(anObject(target), propertyKey);
        } });
    return module.exports;
});
$__System.registerDynamic('e3', ['c', '29', '17'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var $export = $__require('c'),
        getProto = $__require('29'),
        anObject = $__require('17');
    $export($export.S, 'Reflect', { getPrototypeOf: function getPrototypeOf(target) {
            return getProto(anObject(target));
        } });
    return module.exports;
});
$__System.registerDynamic('e4', ['c'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var $export = $__require('c');
    $export($export.S, 'Reflect', { has: function has(target, propertyKey) {
            return propertyKey in target;
        } });
    return module.exports;
});
$__System.registerDynamic('e5', ['c', '17'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var $export = $__require('c'),
        anObject = $__require('17'),
        $isExtensible = Object.isExtensible;
    $export($export.S, 'Reflect', { isExtensible: function isExtensible(target) {
            anObject(target);
            return $isExtensible ? $isExtensible(target) : true;
        } });
    return module.exports;
});
$__System.registerDynamic('e6', ['c', 'e7'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var $export = $__require('c');
  $export($export.S, 'Reflect', { ownKeys: $__require('e7') });
  return module.exports;
});
$__System.registerDynamic('e8', ['c', '17'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var $export = $__require('c'),
      anObject = $__require('17'),
      $preventExtensions = Object.preventExtensions;
  $export($export.S, 'Reflect', { preventExtensions: function preventExtensions(target) {
      anObject(target);
      try {
        if ($preventExtensions) $preventExtensions(target);
        return true;
      } catch (e) {
        return false;
      }
    } });
  return module.exports;
});
$__System.registerDynamic('e9', ['1d', '1c', '29', 'a', 'c', '19', '17', '2d'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var dP = $__require('1d'),
      gOPD = $__require('1c'),
      getPrototypeOf = $__require('29'),
      has = $__require('a'),
      $export = $__require('c'),
      createDesc = $__require('19'),
      anObject = $__require('17'),
      isObject = $__require('2d');
  function set(target, propertyKey, V) {
    var receiver = arguments.length < 4 ? target : arguments[3],
        ownDesc = gOPD.f(anObject(target), propertyKey),
        existingDescriptor,
        proto;
    if (!ownDesc) {
      if (isObject(proto = getPrototypeOf(target))) {
        return set(proto, propertyKey, V, receiver);
      }
      ownDesc = createDesc(0);
    }
    if (has(ownDesc, 'value')) {
      if (ownDesc.writable === false || !isObject(receiver)) return false;
      existingDescriptor = gOPD.f(receiver, propertyKey) || createDesc(0);
      existingDescriptor.value = V;
      dP.f(receiver, propertyKey, existingDescriptor);
      return true;
    }
    return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
  }
  $export($export.S, 'Reflect', { set: set });
  return module.exports;
});
$__System.registerDynamic('ea', ['c', '39'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var $export = $__require('c'),
      setProto = $__require('39');
  if (setProto) $export($export.S, 'Reflect', { setPrototypeOf: function setPrototypeOf(target, proto) {
      setProto.check(target, proto);
      try {
        setProto.set(target, proto);
        return true;
      } catch (e) {
        return false;
      }
    } });
  return module.exports;
});
$__System.registerDynamic('eb', ['c', 'ab', 'af'], true, function ($__require, exports, module) {
    /* */
    'use strict';

    var define,
        global = this || self,
        GLOBAL = global;
    var $export = $__require('c'),
        $includes = $__require('ab')(true);
    $export($export.P, 'Array', { includes: function includes(el) {
            return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
        } });
    $__require('af')('includes');
    return module.exports;
});
$__System.registerDynamic('72', ['49', '7b'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var toInteger = $__require('49'),
      defined = $__require('7b');
  module.exports = function (TO_STRING) {
    return function (that, pos) {
      var s = String(defined(that)),
          i = toInteger(pos),
          l = s.length,
          a,
          b;
      if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
      a = s.charCodeAt(i);
      return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
    };
  };
  return module.exports;
});
$__System.registerDynamic('ec', ['c', '72'], true, function ($__require, exports, module) {
    /* */
    'use strict';

    var define,
        global = this || self,
        GLOBAL = global;
    var $export = $__require('c'),
        $at = $__require('72')(true);
    $export($export.P, 'String', { at: function at(pos) {
            return $at(this, pos);
        } });
    return module.exports;
});
$__System.registerDynamic('ed', ['c', 'ee'], true, function ($__require, exports, module) {
    /* */
    'use strict';

    var define,
        global = this || self,
        GLOBAL = global;
    var $export = $__require('c'),
        $pad = $__require('ee');
    $export($export.P, 'String', { padStart: function padStart(maxLength) {
            return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
        } });
    return module.exports;
});
$__System.registerDynamic('4b', ['49', '7b'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  var toInteger = $__require('49'),
      defined = $__require('7b');
  module.exports = function repeat(count) {
    var str = String(defined(this)),
        res = '',
        n = toInteger(count);
    if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
    for (; n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
    return res;
  };
  return module.exports;
});
$__System.registerDynamic('ee', ['6f', '4b', '7b'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var toLength = $__require('6f'),
        repeat = $__require('4b'),
        defined = $__require('7b');
    module.exports = function (that, maxLength, fillString, left) {
        var S = String(defined(that)),
            stringLength = S.length,
            fillStr = fillString === undefined ? ' ' : String(fillString),
            intMaxLength = toLength(maxLength);
        if (intMaxLength <= stringLength || fillStr == '') return S;
        var fillLen = intMaxLength - stringLength,
            stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
        if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
        return left ? stringFiller + S : S + stringFiller;
    };
    return module.exports;
});
$__System.registerDynamic('ef', ['c', 'ee'], true, function ($__require, exports, module) {
    /* */
    'use strict';

    var define,
        global = this || self,
        GLOBAL = global;
    var $export = $__require('c'),
        $pad = $__require('ee');
    $export($export.P, 'String', { padEnd: function padEnd(maxLength) {
            return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
        } });
    return module.exports;
});
$__System.registerDynamic('f0', ['47'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  $__require('47')('trimLeft', function ($trim) {
    return function trimLeft() {
      return $trim(this, 1);
    };
  }, 'trimStart');
  return module.exports;
});
$__System.registerDynamic('55', [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' + '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';
  return module.exports;
});
$__System.registerDynamic('47', ['c', '7b', 'f', '55'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var $export = $__require('c'),
      defined = $__require('7b'),
      fails = $__require('f'),
      spaces = $__require('55'),
      space = '[' + spaces + ']',
      non = '\u200b\u0085',
      ltrim = RegExp('^' + space + space + '*'),
      rtrim = RegExp(space + space + '*$');
  var exporter = function (KEY, exec, ALIAS) {
    var exp = {};
    var FORCE = fails(function () {
      return !!spaces[KEY]() || non[KEY]() != non;
    });
    var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
    if (ALIAS) exp[ALIAS] = fn;
    $export($export.P + $export.F * FORCE, 'String', exp);
  };
  var trim = exporter.trim = function (string, TYPE) {
    string = String(defined(string));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
  module.exports = exporter;
  return module.exports;
});
$__System.registerDynamic('f1', ['47'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  $__require('47')('trimRight', function ($trim) {
    return function trimRight() {
      return $trim(this, 2);
    };
  }, 'trimEnd');
  return module.exports;
});
$__System.registerDynamic('7a', ['2d', '45', '13'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var isObject = $__require('2d'),
      cof = $__require('45'),
      MATCH = $__require('13')('match');
  module.exports = function (it) {
    var isRegExp;
    return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
  };
  return module.exports;
});
$__System.registerDynamic('b7', ['17'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  var anObject = $__require('17');
  module.exports = function () {
    var that = anObject(this),
        result = '';
    if (that.global) result += 'g';
    if (that.ignoreCase) result += 'i';
    if (that.multiline) result += 'm';
    if (that.unicode) result += 'u';
    if (that.sticky) result += 'y';
    return result;
  };
  return module.exports;
});
$__System.registerDynamic('f2', ['c', '7b', '6f', '7a', 'b7', 'e0'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  var $export = $__require('c'),
      defined = $__require('7b'),
      toLength = $__require('6f'),
      isRegExp = $__require('7a'),
      getFlags = $__require('b7'),
      RegExpProto = RegExp.prototype;
  var $RegExpStringIterator = function (regexp, string) {
    this._r = regexp;
    this._s = string;
  };
  $__require('e0')($RegExpStringIterator, 'RegExp String', function next() {
    var match = this._r.exec(this._s);
    return {
      value: match,
      done: match === null
    };
  });
  $export($export.P, 'String', { matchAll: function matchAll(regexp) {
      defined(this);
      if (!isRegExp(regexp)) throw TypeError(regexp + ' is not a regexp!');
      var S = String(this),
          flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp),
          rx = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
      rx.lastIndex = toLength(regexp.lastIndex);
      return new $RegExpStringIterator(rx, S);
    } });
  return module.exports;
});
$__System.registerDynamic('f3', ['15'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  $__require('15')('asyncIterator');
  return module.exports;
});
$__System.registerDynamic('14', ['13'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  exports.f = $__require('13');
  return module.exports;
});
$__System.registerDynamic('15', ['9', '32', '1f', '14', '1d'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var global = $__require('9'),
        core = $__require('32'),
        LIBRARY = $__require('1f'),
        wksExt = $__require('14'),
        defineProperty = $__require('1d').f;
    module.exports = function (name) {
        var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
        if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
    };
    return module.exports;
});
$__System.registerDynamic('f4', ['15'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  $__require('15')('observable');
  return module.exports;
});
$__System.registerDynamic('1e', ['f5', 'f6'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var $keys = $__require('f5'),
      hiddenKeys = $__require('f6').concat('length', 'prototype');
  exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return $keys(O, hiddenKeys);
  };
  return module.exports;
});
$__System.registerDynamic('e7', ['1e', '6', '17', '9'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var gOPN = $__require('1e'),
        gOPS = $__require('6'),
        anObject = $__require('17'),
        Reflect = $__require('9').Reflect;
    module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
        var keys = gOPN.f(anObject(it)),
            getSymbols = gOPS.f;
        return getSymbols ? keys.concat(getSymbols(it)) : keys;
    };
    return module.exports;
});
$__System.registerDynamic('96', ['1d', '19'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  var $defineProperty = $__require('1d'),
      createDesc = $__require('19');
  module.exports = function (object, index, value) {
    if (index in object) $defineProperty.f(object, index, createDesc(0, value));else object[index] = value;
  };
  return module.exports;
});
$__System.registerDynamic('f7', ['c', 'e7', '4', '1c', '96'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var $export = $__require('c'),
        ownKeys = $__require('e7'),
        toIObject = $__require('4'),
        gOPD = $__require('1c'),
        createProperty = $__require('96');
    $export($export.S, 'Object', { getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
            var O = toIObject(object),
                getDesc = gOPD.f,
                keys = ownKeys(O),
                result = {},
                i = 0,
                key;
            while (keys.length > i) createProperty(result, key = keys[i++], getDesc(O, key));
            return result;
        } });
    return module.exports;
});
$__System.registerDynamic('f8', ['c', 'f9'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var $export = $__require('c'),
        $values = $__require('f9')(false);
    $export($export.S, 'Object', { values: function values(it) {
            return $values(it);
        } });
    return module.exports;
});
$__System.registerDynamic('f9', ['3', '4', '7'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var getKeys = $__require('3'),
      toIObject = $__require('4'),
      isEnum = $__require('7').f;
  module.exports = function (isEntries) {
    return function (it) {
      var O = toIObject(it),
          keys = getKeys(O),
          length = keys.length,
          i = 0,
          result = [],
          key;
      while (length > i) if (isEnum.call(O, key = keys[i++])) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
      return result;
    };
  };
  return module.exports;
});
$__System.registerDynamic('fa', ['c', 'f9'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var $export = $__require('c'),
        $entries = $__require('f9')(true);
    $export($export.S, 'Object', { entries: function entries(it) {
            return $entries(it);
        } });
    return module.exports;
});
$__System.registerDynamic('fb', ['c', '28', 'a0', '1d', 'b', 'fc'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  var $export = $__require('c'),
      toObject = $__require('28'),
      aFunction = $__require('a0'),
      $defineProperty = $__require('1d');
  $__require('b') && $export($export.P + $__require('fc'), 'Object', { __defineGetter__: function __defineGetter__(P, getter) {
      $defineProperty.f(toObject(this), P, {
        get: aFunction(getter),
        enumerable: true,
        configurable: true
      });
    } });
  return module.exports;
});
$__System.registerDynamic('fd', ['c', '28', 'a0', '1d', 'b', 'fc'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  var $export = $__require('c'),
      toObject = $__require('28'),
      aFunction = $__require('a0'),
      $defineProperty = $__require('1d');
  $__require('b') && $export($export.P + $__require('fc'), 'Object', { __defineSetter__: function __defineSetter__(P, setter) {
      $defineProperty.f(toObject(this), P, {
        set: aFunction(setter),
        enumerable: true,
        configurable: true
      });
    } });
  return module.exports;
});
$__System.registerDynamic('fe', ['c', '28', '18', '29', '1c', 'b', 'fc'], true, function ($__require, exports, module) {
    /* */
    'use strict';

    var define,
        global = this || self,
        GLOBAL = global;
    var $export = $__require('c'),
        toObject = $__require('28'),
        toPrimitive = $__require('18'),
        getPrototypeOf = $__require('29'),
        getOwnPropertyDescriptor = $__require('1c').f;
    $__require('b') && $export($export.P + $__require('fc'), 'Object', { __lookupGetter__: function __lookupGetter__(P) {
            var O = toObject(this),
                K = toPrimitive(P, true),
                D;
            do {
                if (D = getOwnPropertyDescriptor(O, K)) return D.get;
            } while (O = getPrototypeOf(O));
        } });
    return module.exports;
});
$__System.registerDynamic('fc', ['1f', 'f', '9'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = $__require('1f') || !$__require('f')(function () {
    var K = Math.random();
    __defineSetter__.call(null, K, function () {});
    delete $__require('9')[K];
  });
  return module.exports;
});
$__System.registerDynamic('ff', ['c', '28', '18', '29', '1c', 'b', 'fc'], true, function ($__require, exports, module) {
    /* */
    'use strict';

    var define,
        global = this || self,
        GLOBAL = global;
    var $export = $__require('c'),
        toObject = $__require('28'),
        toPrimitive = $__require('18'),
        getPrototypeOf = $__require('29'),
        getOwnPropertyDescriptor = $__require('1c').f;
    $__require('b') && $export($export.P + $__require('fc'), 'Object', { __lookupSetter__: function __lookupSetter__(P) {
            var O = toObject(this),
                K = toPrimitive(P, true),
                D;
            do {
                if (D = getOwnPropertyDescriptor(O, K)) return D.set;
            } while (O = getPrototypeOf(O));
        } });
    return module.exports;
});
$__System.registerDynamic('100', ['c', '101'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var $export = $__require('c');
  $export($export.P + $export.R, 'Map', { toJSON: $__require('101')('Map') });
  return module.exports;
});
$__System.registerDynamic('101', ['3b', '102'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var classof = $__require('3b'),
      from = $__require('102');
  module.exports = function (NAME) {
    return function toJSON() {
      if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
      return from(this);
    };
  };
  return module.exports;
});
$__System.registerDynamic('103', ['c', '101'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var $export = $__require('c');
  $export($export.P + $export.R, 'Set', { toJSON: $__require('101')('Set') });
  return module.exports;
});
$__System.registerDynamic('104', ['c', '9'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var $export = $__require('c');
  $export($export.S, 'System', { global: $__require('9') });
  return module.exports;
});
$__System.registerDynamic('105', ['c', '45'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var $export = $__require('c'),
        cof = $__require('45');
    $export($export.S, 'Error', { isError: function isError(it) {
            return cof(it) === 'Error';
        } });
    return module.exports;
});
$__System.registerDynamic('106', ['c'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var $export = $__require('c');
    $export($export.S, 'Math', { iaddh: function iaddh(x0, x1, y0, y1) {
            var $x0 = x0 >>> 0,
                $x1 = x1 >>> 0,
                $y0 = y0 >>> 0;
            return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
        } });
    return module.exports;
});
$__System.registerDynamic('107', ['c'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var $export = $__require('c');
    $export($export.S, 'Math', { isubh: function isubh(x0, x1, y0, y1) {
            var $x0 = x0 >>> 0,
                $x1 = x1 >>> 0,
                $y0 = y0 >>> 0;
            return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
        } });
    return module.exports;
});
$__System.registerDynamic('108', ['c'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var $export = $__require('c');
    $export($export.S, 'Math', { imulh: function imulh(u, v) {
            var UINT16 = 0xffff,
                $u = +u,
                $v = +v,
                u0 = $u & UINT16,
                v0 = $v & UINT16,
                u1 = $u >> 16,
                v1 = $v >> 16,
                t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
            return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
        } });
    return module.exports;
});
$__System.registerDynamic('109', ['c'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var $export = $__require('c');
    $export($export.S, 'Math', { umulh: function umulh(u, v) {
            var UINT16 = 0xffff,
                $u = +u,
                $v = +v,
                u0 = $u & UINT16,
                v0 = $v & UINT16,
                u1 = $u >>> 16,
                v1 = $v >>> 16,
                t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
            return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
        } });
    return module.exports;
});
$__System.registerDynamic('10a', ['10b', '17'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var metadata = $__require('10b'),
        anObject = $__require('17'),
        toMetaKey = metadata.key,
        ordinaryDefineOwnMetadata = metadata.set;
    metadata.exp({ defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
            ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
        } });
    return module.exports;
});
$__System.registerDynamic('10c', ['10b', '17'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var metadata = $__require('10b'),
        anObject = $__require('17'),
        toMetaKey = metadata.key,
        getOrCreateMetadataMap = metadata.map,
        store = metadata.store;
    metadata.exp({ deleteMetadata: function deleteMetadata(metadataKey, target) {
            var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]),
                metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
            if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
            if (metadataMap.size) return true;
            var targetMetadata = store.get(target);
            targetMetadata['delete'](targetKey);
            return !!targetMetadata.size || store['delete'](target);
        } });
    return module.exports;
});
$__System.registerDynamic('10d', ['10b', '17', '29'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var metadata = $__require('10b'),
      anObject = $__require('17'),
      getPrototypeOf = $__require('29'),
      ordinaryHasOwnMetadata = metadata.has,
      ordinaryGetOwnMetadata = metadata.get,
      toMetaKey = metadata.key;
  var ordinaryGetMetadata = function (MetadataKey, O, P) {
    var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
    if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
    var parent = getPrototypeOf(O);
    return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
  };
  metadata.exp({ getMetadata: function getMetadata(metadataKey, target) {
      return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
    } });
  return module.exports;
});
$__System.registerDynamic('10e', ['10f', 'c9'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  var strong = $__require('10f');
  module.exports = $__require('c9')('Set', function (get) {
    return function Set() {
      return get(this, arguments.length > 0 ? arguments[0] : undefined);
    };
  }, { add: function add(value) {
      return strong.def(this, value = value === 0 ? 0 : value, value);
    } }, strong);
  return module.exports;
});
$__System.registerDynamic('102', ['c1'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var forOf = $__require('c1');
  module.exports = function (iter, ITERATOR) {
    var result = [];
    forOf(iter, false, result.push, result, ITERATOR);
    return result;
  };
  return module.exports;
});
$__System.registerDynamic('110', ['10e', '102', '10b', '17', '29'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var Set = $__require('10e'),
        from = $__require('102'),
        metadata = $__require('10b'),
        anObject = $__require('17'),
        getPrototypeOf = $__require('29'),
        ordinaryOwnMetadataKeys = metadata.keys,
        toMetaKey = metadata.key;
    var ordinaryMetadataKeys = function (O, P) {
        var oKeys = ordinaryOwnMetadataKeys(O, P),
            parent = getPrototypeOf(O);
        if (parent === null) return oKeys;
        var pKeys = ordinaryMetadataKeys(parent, P);
        return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
    };
    metadata.exp({ getMetadataKeys: function getMetadataKeys(target) {
            return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
        } });
    return module.exports;
});
$__System.registerDynamic('111', ['10b', '17'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var metadata = $__require('10b'),
        anObject = $__require('17'),
        ordinaryGetOwnMetadata = metadata.get,
        toMetaKey = metadata.key;
    metadata.exp({ getOwnMetadata: function getOwnMetadata(metadataKey, target) {
            return ordinaryGetOwnMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
        } });
    return module.exports;
});
$__System.registerDynamic('112', ['10b', '17'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var metadata = $__require('10b'),
        anObject = $__require('17'),
        ordinaryOwnMetadataKeys = metadata.keys,
        toMetaKey = metadata.key;
    metadata.exp({ getOwnMetadataKeys: function getOwnMetadataKeys(target) {
            return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
        } });
    return module.exports;
});
$__System.registerDynamic('113', ['10b', '17', '29'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var metadata = $__require('10b'),
      anObject = $__require('17'),
      getPrototypeOf = $__require('29'),
      ordinaryHasOwnMetadata = metadata.has,
      toMetaKey = metadata.key;
  var ordinaryHasMetadata = function (MetadataKey, O, P) {
    var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
    if (hasOwn) return true;
    var parent = getPrototypeOf(O);
    return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
  };
  metadata.exp({ hasMetadata: function hasMetadata(metadataKey, target) {
      return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
    } });
  return module.exports;
});
$__System.registerDynamic('114', ['10b', '17'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var metadata = $__require('10b'),
        anObject = $__require('17'),
        ordinaryHasOwnMetadata = metadata.has,
        toMetaKey = metadata.key;
    metadata.exp({ hasOwnMetadata: function hasOwnMetadata(metadataKey, target) {
            return ordinaryHasOwnMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
        } });
    return module.exports;
});
$__System.registerDynamic('10f', ['1d', '1a', 'c5', '93', 'c0', '7b', 'c1', '73', '115', 'b5', 'b', 'e'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  var dP = $__require('1d').f,
      create = $__require('1a'),
      redefineAll = $__require('c5'),
      ctx = $__require('93'),
      anInstance = $__require('c0'),
      defined = $__require('7b'),
      forOf = $__require('c1'),
      $iterDefine = $__require('73'),
      step = $__require('115'),
      setSpecies = $__require('b5'),
      DESCRIPTORS = $__require('b'),
      fastKey = $__require('e').fastKey,
      SIZE = DESCRIPTORS ? '_s' : 'size';
  var getEntry = function (that, key) {
    var index = fastKey(key),
        entry;
    if (index !== 'F') return that._i[index];
    for (entry = that._f; entry; entry = entry.n) {
      if (entry.k == key) return entry;
    }
  };
  module.exports = {
    getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
      var C = wrapper(function (that, iterable) {
        anInstance(that, C, NAME, '_i');
        that._i = create(null);
        that._f = undefined;
        that._l = undefined;
        that[SIZE] = 0;
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
      });
      redefineAll(C.prototype, {
        clear: function clear() {
          for (var that = this, data = that._i, entry = that._f; entry; entry = entry.n) {
            entry.r = true;
            if (entry.p) entry.p = entry.p.n = undefined;
            delete data[entry.i];
          }
          that._f = that._l = undefined;
          that[SIZE] = 0;
        },
        'delete': function (key) {
          var that = this,
              entry = getEntry(that, key);
          if (entry) {
            var next = entry.n,
                prev = entry.p;
            delete that._i[entry.i];
            entry.r = true;
            if (prev) prev.n = next;
            if (next) next.p = prev;
            if (that._f == entry) that._f = next;
            if (that._l == entry) that._l = prev;
            that[SIZE]--;
          }
          return !!entry;
        },
        forEach: function forEach(callbackfn) {
          anInstance(this, C, 'forEach');
          var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3),
              entry;
          while (entry = entry ? entry.n : this._f) {
            f(entry.v, entry.k, this);
            while (entry && entry.r) entry = entry.p;
          }
        },
        has: function has(key) {
          return !!getEntry(this, key);
        }
      });
      if (DESCRIPTORS) dP(C.prototype, 'size', { get: function () {
          return defined(this[SIZE]);
        } });
      return C;
    },
    def: function (that, key, value) {
      var entry = getEntry(that, key),
          prev,
          index;
      if (entry) {
        entry.v = value;
      } else {
        that._l = entry = {
          i: index = fastKey(key, true),
          k: key,
          v: value,
          p: prev = that._l,
          n: undefined,
          r: false
        };
        if (!that._f) that._f = entry;
        if (prev) prev.n = entry;
        that[SIZE]++;
        if (index !== 'F') that._i[index] = entry;
      }
      return that;
    },
    getEntry: getEntry,
    setStrong: function (C, NAME, IS_MAP) {
      $iterDefine(C, NAME, function (iterated, kind) {
        this._t = iterated;
        this._k = kind;
        this._l = undefined;
      }, function () {
        var that = this,
            kind = that._k,
            entry = that._l;
        while (entry && entry.r) entry = entry.p;
        if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
          that._t = undefined;
          return step(1);
        }
        if (kind == 'keys') return step(0, entry.k);
        if (kind == 'values') return step(0, entry.v);
        return step(0, [entry.k, entry.v]);
      }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);
      setSpecies(NAME);
    }
  };
  return module.exports;
});
$__System.registerDynamic('116', ['10f', 'c9'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  var strong = $__require('10f');
  module.exports = $__require('c9')('Map', function (get) {
    return function Map() {
      return get(this, arguments.length > 0 ? arguments[0] : undefined);
    };
  }, {
    get: function get(key) {
      var entry = strong.getEntry(this, key);
      return entry && entry.v;
    },
    set: function set(key, value) {
      return strong.def(this, key === 0 ? 0 : key, value);
    }
  }, strong, true);
  return module.exports;
});
$__System.registerDynamic("6", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  exports.f = Object.getOwnPropertySymbols;
  return module.exports;
});
$__System.registerDynamic('35', ['3', '6', '7', '28', '9b', 'f'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  var getKeys = $__require('3'),
      gOPS = $__require('6'),
      pIE = $__require('7'),
      toObject = $__require('28'),
      IObject = $__require('9b'),
      $assign = Object.assign;
  module.exports = !$assign || $__require('f')(function () {
    var A = {},
        B = {},
        S = Symbol(),
        K = 'abcdefghijklmnopqrst';
    A[S] = 7;
    K.split('').forEach(function (k) {
      B[k] = k;
    });
    return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
  }) ? function assign(target, source) {
    var T = toObject(target),
        aLen = arguments.length,
        index = 1,
        getSymbols = gOPS.f,
        isEnum = pIE.f;
    while (aLen > index) {
      var S = IObject(arguments[index++]),
          keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S),
          length = keys.length,
          j = 0,
          key;
      while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
    }
    return T;
  } : $assign;
  return module.exports;
});
$__System.registerDynamic('16', ['45'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var cof = $__require('45');
  module.exports = Array.isArray || function isArray(arg) {
    return cof(arg) == 'Array';
  };
  return module.exports;
});
$__System.registerDynamic('117', ['2d', '16', '13'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var isObject = $__require('2d'),
      isArray = $__require('16'),
      SPECIES = $__require('13')('species');
  module.exports = function (original) {
    var C;
    if (isArray(original)) {
      C = original.constructor;
      if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
      if (isObject(C)) {
        C = C[SPECIES];
        if (C === null) C = undefined;
      }
    }
    return C === undefined ? Array : C;
  };
  return module.exports;
});
$__System.registerDynamic('118', ['117'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var speciesConstructor = $__require('117');
  module.exports = function (original, length) {
    return new (speciesConstructor(original))(length);
  };
  return module.exports;
});
$__System.registerDynamic('a2', ['93', '9b', '28', '6f', '118'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var ctx = $__require('93'),
      IObject = $__require('9b'),
      toObject = $__require('28'),
      toLength = $__require('6f'),
      asc = $__require('118');
  module.exports = function (TYPE, $create) {
    var IS_MAP = TYPE == 1,
        IS_FILTER = TYPE == 2,
        IS_SOME = TYPE == 3,
        IS_EVERY = TYPE == 4,
        IS_FIND_INDEX = TYPE == 6,
        NO_HOLES = TYPE == 5 || IS_FIND_INDEX,
        create = $create || asc;
    return function ($this, callbackfn, that) {
      var O = toObject($this),
          self = IObject(O),
          f = ctx(callbackfn, that, 3),
          length = toLength(self.length),
          index = 0,
          result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined,
          val,
          res;
      for (; length > index; index++) if (NO_HOLES || index in self) {
        val = self[index];
        res = f(val, index, O);
        if (TYPE) {
          if (IS_MAP) result[index] = res;else if (res) switch (TYPE) {
            case 3:
              return true;
            case 5:
              return val;
            case 6:
              return index;
            case 2:
              result.push(val);
          } else if (IS_EVERY) return false;
        }
      }
      return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
    };
  };
  return module.exports;
});
$__System.registerDynamic('c8', ['c5', 'e', '17', '2d', 'c0', 'c1', 'a2', 'a'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  var redefineAll = $__require('c5'),
      getWeak = $__require('e').getWeak,
      anObject = $__require('17'),
      isObject = $__require('2d'),
      anInstance = $__require('c0'),
      forOf = $__require('c1'),
      createArrayMethod = $__require('a2'),
      $has = $__require('a'),
      arrayFind = createArrayMethod(5),
      arrayFindIndex = createArrayMethod(6),
      id = 0;
  var uncaughtFrozenStore = function (that) {
    return that._l || (that._l = new UncaughtFrozenStore());
  };
  var UncaughtFrozenStore = function () {
    this.a = [];
  };
  var findUncaughtFrozen = function (store, key) {
    return arrayFind(store.a, function (it) {
      return it[0] === key;
    });
  };
  UncaughtFrozenStore.prototype = {
    get: function (key) {
      var entry = findUncaughtFrozen(this, key);
      if (entry) return entry[1];
    },
    has: function (key) {
      return !!findUncaughtFrozen(this, key);
    },
    set: function (key, value) {
      var entry = findUncaughtFrozen(this, key);
      if (entry) entry[1] = value;else this.a.push([key, value]);
    },
    'delete': function (key) {
      var index = arrayFindIndex(this.a, function (it) {
        return it[0] === key;
      });
      if (~index) this.a.splice(index, 1);
      return !!~index;
    }
  };
  module.exports = {
    getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
      var C = wrapper(function (that, iterable) {
        anInstance(that, C, NAME, '_i');
        that._i = id++;
        that._l = undefined;
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
      });
      redefineAll(C.prototype, {
        'delete': function (key) {
          if (!isObject(key)) return false;
          var data = getWeak(key);
          if (data === true) return uncaughtFrozenStore(this)['delete'](key);
          return data && $has(data, this._i) && delete data[this._i];
        },
        has: function has(key) {
          if (!isObject(key)) return false;
          var data = getWeak(key);
          if (data === true) return uncaughtFrozenStore(this).has(key);
          return data && $has(data, this._i);
        }
      });
      return C;
    },
    def: function (that, key, value) {
      var data = getWeak(anObject(key), true);
      if (data === true) uncaughtFrozenStore(that).set(key, value);else data[that._i] = value;
      return that;
    },
    ufstore: uncaughtFrozenStore
  };
  return module.exports;
});
$__System.registerDynamic('e', ['12', '2d', 'a', '1d', 'f'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var META = $__require('12')('meta'),
      isObject = $__require('2d'),
      has = $__require('a'),
      setDesc = $__require('1d').f,
      id = 0;
  var isExtensible = Object.isExtensible || function () {
    return true;
  };
  var FREEZE = !$__require('f')(function () {
    return isExtensible(Object.preventExtensions({}));
  });
  var setMeta = function (it) {
    setDesc(it, META, { value: {
        i: 'O' + ++id,
        w: {}
      } });
  };
  var fastKey = function (it, create) {
    if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
    if (!has(it, META)) {
      if (!isExtensible(it)) return 'F';
      if (!create) return 'E';
      setMeta(it);
    }
    return it[META].i;
  };
  var getWeak = function (it, create) {
    if (!has(it, META)) {
      if (!isExtensible(it)) return true;
      if (!create) return false;
      setMeta(it);
    }
    return it[META].w;
  };
  var onFreeze = function (it) {
    if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
    return it;
  };
  var meta = module.exports = {
    KEY: META,
    NEED: false,
    fastKey: fastKey,
    getWeak: getWeak,
    onFreeze: onFreeze
  };
  return module.exports;
});
$__System.registerDynamic('98', ['13'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var ITERATOR = $__require('13')('iterator'),
      SAFE_CLOSING = false;
  try {
    var riter = [7][ITERATOR]();
    riter['return'] = function () {
      SAFE_CLOSING = true;
    };
    Array.from(riter, function () {
      throw 2;
    });
  } catch (e) {}
  module.exports = function (exec, skipClosing) {
    if (!skipClosing && !SAFE_CLOSING) return false;
    var safe = false;
    try {
      var arr = [7],
          iter = arr[ITERATOR]();
      iter.next = function () {
        return { done: safe = true };
      };
      arr[ITERATOR] = function () {
        return iter;
      };
      exec(arr);
    } catch (e) {}
    return safe;
  };
  return module.exports;
});
$__System.registerDynamic("7", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  exports.f = {}.propertyIsEnumerable;
  return module.exports;
});
$__System.registerDynamic('1c', ['7', '19', '4', '18', 'a', '119', 'b'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var pIE = $__require('7'),
      createDesc = $__require('19'),
      toIObject = $__require('4'),
      toPrimitive = $__require('18'),
      has = $__require('a'),
      IE8_DOM_DEFINE = $__require('119'),
      gOPD = Object.getOwnPropertyDescriptor;
  exports.f = $__require('b') ? gOPD : function getOwnPropertyDescriptor(O, P) {
    O = toIObject(O);
    P = toPrimitive(P, true);
    if (IE8_DOM_DEFINE) try {
      return gOPD(O, P);
    } catch (e) {}
    if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
  };
  return module.exports;
});
$__System.registerDynamic('39', ['2d', '17', '93', '1c'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var isObject = $__require('2d'),
      anObject = $__require('17');
  var check = function (O, proto) {
    anObject(O);
    if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
  };
  module.exports = {
    set: Object.setPrototypeOf || ('__proto__' in {} ? function (test, buggy, set) {
      try {
        set = $__require('93')(Function.call, $__require('1c').f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) {
        buggy = true;
      }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
    check: check
  };
  return module.exports;
});
$__System.registerDynamic('46', ['2d', '39'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var isObject = $__require('2d'),
      setPrototypeOf = $__require('39').set;
  module.exports = function (that, target, C) {
    var P,
        S = target.constructor;
    if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
      setPrototypeOf(that, P);
    }
    return that;
  };
  return module.exports;
});
$__System.registerDynamic('c9', ['9', 'c', 'd', 'c5', 'e', 'c1', 'c0', '2d', 'f', '98', '11', '46'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  var global = $__require('9'),
      $export = $__require('c'),
      redefine = $__require('d'),
      redefineAll = $__require('c5'),
      meta = $__require('e'),
      forOf = $__require('c1'),
      anInstance = $__require('c0'),
      isObject = $__require('2d'),
      fails = $__require('f'),
      $iterDetect = $__require('98'),
      setToStringTag = $__require('11'),
      inheritIfRequired = $__require('46');
  module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
    var Base = global[NAME],
        C = Base,
        ADDER = IS_MAP ? 'set' : 'add',
        proto = C && C.prototype,
        O = {};
    var fixMethod = function (KEY) {
      var fn = proto[KEY];
      redefine(proto, KEY, KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) {
        fn.call(this, a === 0 ? 0 : a);
        return this;
      } : function set(a, b) {
        fn.call(this, a === 0 ? 0 : a, b);
        return this;
      });
    };
    if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
      new C().entries().next();
    }))) {
      C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
      redefineAll(C.prototype, methods);
      meta.NEED = true;
    } else {
      var instance = new C(),
          HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance,
          THROWS_ON_PRIMITIVES = fails(function () {
        instance.has(1);
      }),
          ACCEPT_ITERABLES = $iterDetect(function (iter) {
        new C(iter);
      }),
          BUGGY_ZERO = !IS_WEAK && fails(function () {
        var $instance = new C(),
            index = 5;
        while (index--) $instance[ADDER](index, index);
        return !$instance.has(-0);
      });
      if (!ACCEPT_ITERABLES) {
        C = wrapper(function (target, iterable) {
          anInstance(target, C, NAME);
          var that = inheritIfRequired(new Base(), target, C);
          if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
          return that;
        });
        C.prototype = proto;
        proto.constructor = C;
      }
      if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
        fixMethod('delete');
        fixMethod('has');
        IS_MAP && fixMethod('get');
      }
      if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
      if (IS_WEAK && proto.clear) delete proto.clear;
    }
    setToStringTag(C, NAME);
    O[NAME] = C;
    $export($export.G + $export.W + $export.F * (C != Base), O);
    if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);
    return C;
  };
  return module.exports;
});
$__System.registerDynamic('11a', ['a2', 'd', 'e', '35', 'c8', '2d', 'c9'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  var each = $__require('a2')(0),
      redefine = $__require('d'),
      meta = $__require('e'),
      assign = $__require('35'),
      weak = $__require('c8'),
      isObject = $__require('2d'),
      getWeak = meta.getWeak,
      isExtensible = Object.isExtensible,
      uncaughtFrozenStore = weak.ufstore,
      tmp = {},
      InternalMap;
  var wrapper = function (get) {
    return function WeakMap() {
      return get(this, arguments.length > 0 ? arguments[0] : undefined);
    };
  };
  var methods = {
    get: function get(key) {
      if (isObject(key)) {
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(this).get(key);
        return data ? data[this._i] : undefined;
      }
    },
    set: function set(key, value) {
      return weak.def(this, key, value);
    }
  };
  var $WeakMap = module.exports = $__require('c9')('WeakMap', wrapper, methods, weak, true, true);
  if (new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7) {
    InternalMap = weak.getConstructor(wrapper);
    assign(InternalMap.prototype, methods);
    meta.NEED = true;
    each(['delete', 'has', 'get', 'set'], function (key) {
      var proto = $WeakMap.prototype,
          method = proto[key];
      redefine(proto, key, function (a, b) {
        if (isObject(a) && !isExtensible(a)) {
          if (!this._f) this._f = new InternalMap();
          var result = this._f[key](a, b);
          return key == 'set' ? this : result;
        }
        return method.call(this, a, b);
      });
    });
  }
  return module.exports;
});
$__System.registerDynamic('10b', ['116', 'c', '10', '11a'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var Map = $__require('116'),
      $export = $__require('c'),
      shared = $__require('10')('metadata'),
      store = shared.store || (shared.store = new ($__require('11a'))());
  var getOrCreateMetadataMap = function (target, targetKey, create) {
    var targetMetadata = store.get(target);
    if (!targetMetadata) {
      if (!create) return undefined;
      store.set(target, targetMetadata = new Map());
    }
    var keyMetadata = targetMetadata.get(targetKey);
    if (!keyMetadata) {
      if (!create) return undefined;
      targetMetadata.set(targetKey, keyMetadata = new Map());
    }
    return keyMetadata;
  };
  var ordinaryHasOwnMetadata = function (MetadataKey, O, P) {
    var metadataMap = getOrCreateMetadataMap(O, P, false);
    return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
  };
  var ordinaryGetOwnMetadata = function (MetadataKey, O, P) {
    var metadataMap = getOrCreateMetadataMap(O, P, false);
    return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
  };
  var ordinaryDefineOwnMetadata = function (MetadataKey, MetadataValue, O, P) {
    getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
  };
  var ordinaryOwnMetadataKeys = function (target, targetKey) {
    var metadataMap = getOrCreateMetadataMap(target, targetKey, false),
        keys = [];
    if (metadataMap) metadataMap.forEach(function (_, key) {
      keys.push(key);
    });
    return keys;
  };
  var toMetaKey = function (it) {
    return it === undefined || typeof it == 'symbol' ? it : String(it);
  };
  var exp = function (O) {
    $export($export.S, 'Reflect', O);
  };
  module.exports = {
    store: store,
    map: getOrCreateMetadataMap,
    has: ordinaryHasOwnMetadata,
    get: ordinaryGetOwnMetadata,
    set: ordinaryDefineOwnMetadata,
    keys: ordinaryOwnMetadataKeys,
    key: toMetaKey,
    exp: exp
  };
  return module.exports;
});
$__System.registerDynamic('11b', ['10b', '17', 'a0'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var metadata = $__require('10b'),
        anObject = $__require('17'),
        aFunction = $__require('a0'),
        toMetaKey = metadata.key,
        ordinaryDefineOwnMetadata = metadata.set;
    metadata.exp({ metadata: function metadata(metadataKey, metadataValue) {
            return function decorator(target, targetKey) {
                ordinaryDefineOwnMetadata(metadataKey, metadataValue, (targetKey !== undefined ? anObject : aFunction)(target), toMetaKey(targetKey));
            };
        } });
    return module.exports;
});
$__System.registerDynamic('11c', ['c', 'c4', '9', '45', 'c6'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    (function (process) {
        var $export = $__require('c'),
            microtask = $__require('c4')(),
            process = $__require('9').process,
            isNode = $__require('45')(process) == 'process';
        $export($export.G, { asap: function asap(fn) {
                var domain = isNode && process.domain;
                microtask(domain ? domain.bind(fn) : fn);
            } });
    })($__require('c6'));
    return module.exports;
});
$__System.registerDynamic('c4', ['9', 'c3', '45', 'c6'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    var global = $__require('9'),
        macrotask = $__require('c3').set,
        Observer = global.MutationObserver || global.WebKitMutationObserver,
        process = global.process,
        Promise = global.Promise,
        isNode = $__require('45')(process) == 'process';
    module.exports = function () {
      var head, last, notify;
      var flush = function () {
        var parent, fn;
        if (isNode && (parent = process.domain)) parent.exit();
        while (head) {
          fn = head.fn;
          head = head.next;
          try {
            fn();
          } catch (e) {
            if (head) notify();else last = undefined;
            throw e;
          }
        }
        last = undefined;
        if (parent) parent.enter();
      };
      if (isNode) {
        notify = function () {
          process.nextTick(flush);
        };
      } else if (Observer) {
        var toggle = true,
            node = document.createTextNode('');
        new Observer(flush).observe(node, { characterData: true });
        notify = function () {
          node.data = toggle = !toggle;
        };
      } else if (Promise && Promise.resolve) {
        var promise = Promise.resolve();
        notify = function () {
          promise.then(flush);
        };
      } else {
        notify = function () {
          macrotask.call(global, flush);
        };
      }
      return function (fn) {
        var task = {
          fn: fn,
          next: undefined
        };
        if (last) last.next = task;
        if (!head) {
          head = task;
          notify();
        }
        last = task;
      };
    };
  })($__require('c6'));
  return module.exports;
});
$__System.registerDynamic('c0', [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (it, Constructor, name, forbiddenField) {
    if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
      throw TypeError(name + ': incorrect invocation!');
    }return it;
  };
  return module.exports;
});
$__System.registerDynamic('c5', ['d'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var redefine = $__require('d');
  module.exports = function (target, src, safe) {
    for (var key in src) redefine(target, key, src[key], safe);
    return target;
  };
  return module.exports;
});
$__System.registerDynamic('94', ['17'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var anObject = $__require('17');
  module.exports = function (iterator, fn, value, entries) {
    try {
      return entries ? fn(anObject(value)[0], value[1]) : fn(value);
    } catch (e) {
      var ret = iterator['return'];
      if (ret !== undefined) anObject(ret.call(iterator));
      throw e;
    }
  };
  return module.exports;
});
$__System.registerDynamic('95', ['d8', '13'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var Iterators = $__require('d8'),
        ITERATOR = $__require('13')('iterator'),
        ArrayProto = Array.prototype;
    module.exports = function (it) {
        return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
    };
    return module.exports;
});
$__System.registerDynamic('3b', ['45', '13'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var cof = $__require('45'),
      TAG = $__require('13')('toStringTag'),
      ARG = cof(function () {
    return arguments;
  }()) == 'Arguments';
  var tryGet = function (it, key) {
    try {
      return it[key];
    } catch (e) {}
  };
  module.exports = function (it) {
    var O, T, B;
    return it === undefined ? 'Undefined' : it === null ? 'Null' : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T : ARG ? cof(O) : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
  };
  return module.exports;
});
$__System.registerDynamic('97', ['3b', '13', 'd8', '32'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var classof = $__require('3b'),
        ITERATOR = $__require('13')('iterator'),
        Iterators = $__require('d8');
    module.exports = $__require('32').getIteratorMethod = function (it) {
        if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
    };
    return module.exports;
});
$__System.registerDynamic('c1', ['93', '94', '95', '17', '6f', '97'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var ctx = $__require('93'),
      call = $__require('94'),
      isArrayIter = $__require('95'),
      anObject = $__require('17'),
      toLength = $__require('6f'),
      getIterFn = $__require('97'),
      BREAK = {},
      RETURN = {};
  var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
    var iterFn = ITERATOR ? function () {
      return iterable;
    } : getIterFn(iterable),
        f = ctx(fn, that, entries ? 2 : 1),
        index = 0,
        length,
        step,
        iterator,
        result;
    if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
    if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
      result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
      if (result === BREAK || result === RETURN) return result;
    } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
      result = call(iterator, f, step.value, entries);
      if (result === BREAK || result === RETURN) return result;
    }
  };
  exports.BREAK = BREAK;
  exports.RETURN = RETURN;
  return module.exports;
});
$__System.registerDynamic('b5', ['9', '1d', 'b', '13'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  var global = $__require('9'),
      dP = $__require('1d'),
      DESCRIPTORS = $__require('b'),
      SPECIES = $__require('13')('species');
  module.exports = function (KEY) {
    var C = global[KEY];
    if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
      configurable: true,
      get: function () {
        return this;
      }
    });
  };
  return module.exports;
});
$__System.registerDynamic('11d', ['c', '9', '32', 'c4', '13', 'a0', '17', 'c0', 'c5', '20', 'c1', 'b5'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  var $export = $__require('c'),
      global = $__require('9'),
      core = $__require('32'),
      microtask = $__require('c4')(),
      OBSERVABLE = $__require('13')('observable'),
      aFunction = $__require('a0'),
      anObject = $__require('17'),
      anInstance = $__require('c0'),
      redefineAll = $__require('c5'),
      hide = $__require('20'),
      forOf = $__require('c1'),
      RETURN = forOf.RETURN;
  var getMethod = function (fn) {
    return fn == null ? undefined : aFunction(fn);
  };
  var cleanupSubscription = function (subscription) {
    var cleanup = subscription._c;
    if (cleanup) {
      subscription._c = undefined;
      cleanup();
    }
  };
  var subscriptionClosed = function (subscription) {
    return subscription._o === undefined;
  };
  var closeSubscription = function (subscription) {
    if (!subscriptionClosed(subscription)) {
      subscription._o = undefined;
      cleanupSubscription(subscription);
    }
  };
  var Subscription = function (observer, subscriber) {
    anObject(observer);
    this._c = undefined;
    this._o = observer;
    observer = new SubscriptionObserver(this);
    try {
      var cleanup = subscriber(observer),
          subscription = cleanup;
      if (cleanup != null) {
        if (typeof cleanup.unsubscribe === 'function') cleanup = function () {
          subscription.unsubscribe();
        };else aFunction(cleanup);
        this._c = cleanup;
      }
    } catch (e) {
      observer.error(e);
      return;
    }
    if (subscriptionClosed(this)) cleanupSubscription(this);
  };
  Subscription.prototype = redefineAll({}, { unsubscribe: function unsubscribe() {
      closeSubscription(this);
    } });
  var SubscriptionObserver = function (subscription) {
    this._s = subscription;
  };
  SubscriptionObserver.prototype = redefineAll({}, {
    next: function next(value) {
      var subscription = this._s;
      if (!subscriptionClosed(subscription)) {
        var observer = subscription._o;
        try {
          var m = getMethod(observer.next);
          if (m) return m.call(observer, value);
        } catch (e) {
          try {
            closeSubscription(subscription);
          } finally {
            throw e;
          }
        }
      }
    },
    error: function error(value) {
      var subscription = this._s;
      if (subscriptionClosed(subscription)) throw value;
      var observer = subscription._o;
      subscription._o = undefined;
      try {
        var m = getMethod(observer.error);
        if (!m) throw value;
        value = m.call(observer, value);
      } catch (e) {
        try {
          cleanupSubscription(subscription);
        } finally {
          throw e;
        }
      }
      cleanupSubscription(subscription);
      return value;
    },
    complete: function complete(value) {
      var subscription = this._s;
      if (!subscriptionClosed(subscription)) {
        var observer = subscription._o;
        subscription._o = undefined;
        try {
          var m = getMethod(observer.complete);
          value = m ? m.call(observer, value) : undefined;
        } catch (e) {
          try {
            cleanupSubscription(subscription);
          } finally {
            throw e;
          }
        }
        cleanupSubscription(subscription);
        return value;
      }
    }
  });
  var $Observable = function Observable(subscriber) {
    anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
  };
  redefineAll($Observable.prototype, {
    subscribe: function subscribe(observer) {
      return new Subscription(observer, this._f);
    },
    forEach: function forEach(fn) {
      var that = this;
      return new (core.Promise || global.Promise)(function (resolve, reject) {
        aFunction(fn);
        var subscription = that.subscribe({
          next: function (value) {
            try {
              return fn(value);
            } catch (e) {
              reject(e);
              subscription.unsubscribe();
            }
          },
          error: reject,
          complete: resolve
        });
      });
    }
  });
  redefineAll($Observable, {
    from: function from(x) {
      var C = typeof this === 'function' ? this : $Observable;
      var method = getMethod(anObject(x)[OBSERVABLE]);
      if (method) {
        var observable = anObject(method.call(x));
        return observable.constructor === C ? observable : new C(function (observer) {
          return observable.subscribe(observer);
        });
      }
      return new C(function (observer) {
        var done = false;
        microtask(function () {
          if (!done) {
            try {
              if (forOf(x, false, function (it) {
                observer.next(it);
                if (done) return RETURN;
              }) === RETURN) return;
            } catch (e) {
              if (done) throw e;
              observer.error(e);
              return;
            }
            observer.complete();
          }
        });
        return function () {
          done = true;
        };
      });
    },
    of: function of() {
      for (var i = 0, l = arguments.length, items = Array(l); i < l;) items[i] = arguments[i++];
      return new (typeof this === 'function' ? this : $Observable)(function (observer) {
        var done = false;
        microtask(function () {
          if (!done) {
            for (var i = 0; i < items.length; ++i) {
              observer.next(items[i]);
              if (done) return;
            }
            observer.complete();
          }
        });
        return function () {
          done = true;
        };
      });
    }
  });
  hide($Observable.prototype, OBSERVABLE, function () {
    return this;
  });
  $export($export.G, { Observable: $Observable });
  $__require('b5')('Observable');
  return module.exports;
});
$__System.registerDynamic('11e', ['9'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = $__require('9');
  return module.exports;
});
$__System.registerDynamic('11f', ['11e', 'db', 'a0'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  var path = $__require('11e'),
      invoke = $__require('db'),
      aFunction = $__require('a0');
  module.exports = function () {
    var fn = aFunction(this),
        length = arguments.length,
        pargs = Array(length),
        i = 0,
        _ = path._,
        holder = false;
    while (length > i) if ((pargs[i] = arguments[i++]) === _) holder = true;
    return function () {
      var that = this,
          aLen = arguments.length,
          j = 0,
          k = 0,
          args;
      if (!holder && !aLen) return invoke(fn, pargs, that);
      args = pargs.slice();
      if (holder) for (; length > j; j++) if (args[j] === _) args[j] = arguments[k++];
      while (aLen > k) args.push(arguments[k++]);
      return invoke(fn, args, that);
    };
  };
  return module.exports;
});
$__System.registerDynamic('120', ['9', 'c', 'db', '11f'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var global = $__require('9'),
      $export = $__require('c'),
      invoke = $__require('db'),
      partial = $__require('11f'),
      navigator = global.navigator,
      MSIE = !!navigator && /MSIE .\./.test(navigator.userAgent);
  var wrap = function (set) {
    return MSIE ? function (fn, time) {
      return set(invoke(partial, [].slice.call(arguments, 2), typeof fn == 'function' ? fn : Function(fn)), time);
    } : set;
  };
  $export($export.G + $export.B + $export.F * MSIE, {
    setTimeout: wrap(global.setTimeout),
    setInterval: wrap(global.setInterval)
  });
  return module.exports;
});
$__System.registerDynamic("db", [], true, function ($__require, exports, module) {
                  var define,
                      global = this || self,
                      GLOBAL = global;
                  // fast apply, http://jsperf.lnkit.com/fast-apply/5
                  module.exports = function (fn, args, that) {
                                    var un = that === undefined;
                                    switch (args.length) {
                                                      case 0:
                                                                        return un ? fn() : fn.call(that);
                                                      case 1:
                                                                        return un ? fn(args[0]) : fn.call(that, args[0]);
                                                      case 2:
                                                                        return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
                                                      case 3:
                                                                        return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
                                                      case 4:
                                                                        return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
                                    }return fn.apply(that, args);
                  };
                  return module.exports;
});
$__System.registerDynamic('121', [], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    // shim for using process in browser
    var process = module.exports = {};

    // cached from whatever global is present so that test runners that stub it
    // don't break things.  But we need to wrap it in a try catch in case it is
    // wrapped in strict mode code which doesn't define any globals.  It's inside a
    // function because try/catches deoptimize in certain engines.

    var cachedSetTimeout;
    var cachedClearTimeout;

    function defaultSetTimout() {
        throw new Error('setTimeout has not been defined');
    }
    function defaultClearTimeout() {
        throw new Error('clearTimeout has not been defined');
    }
    (function () {
        try {
            if (typeof setTimeout === 'function') {
                cachedSetTimeout = setTimeout;
            } else {
                cachedSetTimeout = defaultSetTimout;
            }
        } catch (e) {
            cachedSetTimeout = defaultSetTimout;
        }
        try {
            if (typeof clearTimeout === 'function') {
                cachedClearTimeout = clearTimeout;
            } else {
                cachedClearTimeout = defaultClearTimeout;
            }
        } catch (e) {
            cachedClearTimeout = defaultClearTimeout;
        }
    })();
    function runTimeout(fun) {
        if (cachedSetTimeout === setTimeout) {
            //normal enviroments in sane situations
            return setTimeout(fun, 0);
        }
        // if setTimeout wasn't available but was latter defined
        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
            cachedSetTimeout = setTimeout;
            return setTimeout(fun, 0);
        }
        try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedSetTimeout(fun, 0);
        } catch (e) {
            try {
                // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
                return cachedSetTimeout.call(null, fun, 0);
            } catch (e) {
                // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
                return cachedSetTimeout.call(this, fun, 0);
            }
        }
    }
    function runClearTimeout(marker) {
        if (cachedClearTimeout === clearTimeout) {
            //normal enviroments in sane situations
            return clearTimeout(marker);
        }
        // if clearTimeout wasn't available but was latter defined
        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
            cachedClearTimeout = clearTimeout;
            return clearTimeout(marker);
        }
        try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedClearTimeout(marker);
        } catch (e) {
            try {
                // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
                return cachedClearTimeout.call(null, marker);
            } catch (e) {
                // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
                // Some versions of I.E. have different rules for clearTimeout vs setTimeout
                return cachedClearTimeout.call(this, marker);
            }
        }
    }
    var queue = [];
    var draining = false;
    var currentQueue;
    var queueIndex = -1;

    function cleanUpNextTick() {
        if (!draining || !currentQueue) {
            return;
        }
        draining = false;
        if (currentQueue.length) {
            queue = currentQueue.concat(queue);
        } else {
            queueIndex = -1;
        }
        if (queue.length) {
            drainQueue();
        }
    }

    function drainQueue() {
        if (draining) {
            return;
        }
        var timeout = runTimeout(cleanUpNextTick);
        draining = true;

        var len = queue.length;
        while (len) {
            currentQueue = queue;
            queue = [];
            while (++queueIndex < len) {
                if (currentQueue) {
                    currentQueue[queueIndex].run();
                }
            }
            queueIndex = -1;
            len = queue.length;
        }
        currentQueue = null;
        draining = false;
        runClearTimeout(timeout);
    }

    process.nextTick = function (fun) {
        var args = new Array(arguments.length - 1);
        if (arguments.length > 1) {
            for (var i = 1; i < arguments.length; i++) {
                args[i - 1] = arguments[i];
            }
        }
        queue.push(new Item(fun, args));
        if (queue.length === 1 && !draining) {
            runTimeout(drainQueue);
        }
    };

    // v8 likes predictible objects
    function Item(fun, array) {
        this.fun = fun;
        this.array = array;
    }
    Item.prototype.run = function () {
        this.fun.apply(null, this.array);
    };
    process.title = 'browser';
    process.browser = true;
    process.env = {};
    process.argv = [];
    process.version = ''; // empty string to avoid regexp issues
    process.versions = {};

    function noop() {}

    process.on = noop;
    process.addListener = noop;
    process.once = noop;
    process.off = noop;
    process.removeListener = noop;
    process.removeAllListeners = noop;
    process.emit = noop;

    process.binding = function (name) {
        throw new Error('process.binding is not supported');
    };

    process.cwd = function () {
        return '/';
    };
    process.chdir = function (dir) {
        throw new Error('process.chdir is not supported');
    };
    process.umask = function () {
        return 0;
    };
    return module.exports;
});
$__System.registerDynamic("122", ["121"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require("121");
  return module.exports;
});
$__System.registerDynamic('123', ['122'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__System._nodeRequire ? process : $__require('122');
  return module.exports;
});
$__System.registerDynamic("c6", ["123"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require("123");
  return module.exports;
});
$__System.registerDynamic('c3', ['93', 'db', '9e', '124', '9', '45', 'c6'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    var ctx = $__require('93'),
        invoke = $__require('db'),
        html = $__require('9e'),
        cel = $__require('124'),
        global = $__require('9'),
        process = global.process,
        setTask = global.setImmediate,
        clearTask = global.clearImmediate,
        MessageChannel = global.MessageChannel,
        counter = 0,
        queue = {},
        ONREADYSTATECHANGE = 'onreadystatechange',
        defer,
        channel,
        port;
    var run = function () {
      var id = +this;
      if (queue.hasOwnProperty(id)) {
        var fn = queue[id];
        delete queue[id];
        fn();
      }
    };
    var listener = function (event) {
      run.call(event.data);
    };
    if (!setTask || !clearTask) {
      setTask = function setImmediate(fn) {
        var args = [],
            i = 1;
        while (arguments.length > i) args.push(arguments[i++]);
        queue[++counter] = function () {
          invoke(typeof fn == 'function' ? fn : Function(fn), args);
        };
        defer(counter);
        return counter;
      };
      clearTask = function clearImmediate(id) {
        delete queue[id];
      };
      if ($__require('45')(process) == 'process') {
        defer = function (id) {
          process.nextTick(ctx(run, id, 1));
        };
      } else if (MessageChannel) {
        channel = new MessageChannel();
        port = channel.port2;
        channel.port1.onmessage = listener;
        defer = ctx(port.postMessage, port, 1);
      } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
        defer = function (id) {
          global.postMessage(id + '', '*');
        };
        global.addEventListener('message', listener, false);
      } else if (ONREADYSTATECHANGE in cel('script')) {
        defer = function (id) {
          html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
            html.removeChild(this);
            run.call(id);
          };
        };
      } else {
        defer = function (id) {
          setTimeout(ctx(run, id, 1), 0);
        };
      }
    }
    module.exports = {
      set: setTask,
      clear: clearTask
    };
  })($__require('c6'));
  return module.exports;
});
$__System.registerDynamic('125', ['c', 'c3'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var $export = $__require('c'),
      $task = $__require('c3');
  $export($export.G + $export.B, {
    setImmediate: $task.set,
    clearImmediate: $task.clear
  });
  return module.exports;
});
$__System.registerDynamic('af', ['13', '20'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var UNSCOPABLES = $__require('13')('unscopables'),
      ArrayProto = Array.prototype;
  if (ArrayProto[UNSCOPABLES] == undefined) $__require('20')(ArrayProto, UNSCOPABLES, {});
  module.exports = function (key) {
    ArrayProto[UNSCOPABLES][key] = true;
  };
  return module.exports;
});
$__System.registerDynamic("115", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (done, value) {
    return { value: value, done: !!done };
  };
  return module.exports;
});
$__System.registerDynamic("1f", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = false;
  return module.exports;
});
$__System.registerDynamic('a0', [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (it) {
    if (typeof it != 'function') throw TypeError(it + ' is not a function!');
    return it;
  };
  return module.exports;
});
$__System.registerDynamic('93', ['a0'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var aFunction = $__require('a0');
  module.exports = function (fn, that, length) {
    aFunction(fn);
    if (that === undefined) return fn;
    switch (length) {
      case 1:
        return function (a) {
          return fn.call(that, a);
        };
      case 2:
        return function (a, b) {
          return fn.call(that, a, b);
        };
      case 3:
        return function (a, b, c) {
          return fn.call(that, a, b, c);
        };
    }
    return function () {
      return fn.apply(that, arguments);
    };
  };
  return module.exports;
});
$__System.registerDynamic('c', ['9', '32', '20', 'd', '93'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var global = $__require('9'),
      core = $__require('32'),
      hide = $__require('20'),
      redefine = $__require('d'),
      ctx = $__require('93'),
      PROTOTYPE = 'prototype';
  var $export = function (type, name, source) {
    var IS_FORCED = type & $export.F,
        IS_GLOBAL = type & $export.G,
        IS_STATIC = type & $export.S,
        IS_PROTO = type & $export.P,
        IS_BIND = type & $export.B,
        target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE],
        exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
        expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {}),
        key,
        own,
        out,
        exp;
    if (IS_GLOBAL) source = name;
    for (key in source) {
      own = !IS_FORCED && target && target[key] !== undefined;
      out = (own ? target : source)[key];
      exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
      if (target) redefine(target, key, out, type & $export.U);
      if (exports[key] != out) hide(exports, key, exp);
      if (IS_PROTO && expProto[key] != out) expProto[key] = out;
    }
  };
  global.core = core;
  $export.F = 1;
  $export.G = 2;
  $export.S = 4;
  $export.P = 8;
  $export.B = 16;
  $export.W = 32;
  $export.U = 64;
  $export.R = 128;
  module.exports = $export;
  return module.exports;
});
$__System.registerDynamic("45", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var toString = {}.toString;

  module.exports = function (it) {
    return toString.call(it).slice(8, -1);
  };
  return module.exports;
});
$__System.registerDynamic('9b', ['45'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var cof = $__require('45');
  module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
    return cof(it) == 'String' ? it.split('') : Object(it);
  };
  return module.exports;
});
$__System.registerDynamic('4', ['9b', '7b'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var IObject = $__require('9b'),
      defined = $__require('7b');
  module.exports = function (it) {
    return IObject(defined(it));
  };
  return module.exports;
});
$__System.registerDynamic('6f', ['49'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var toInteger = $__require('49'),
      min = Math.min;
  module.exports = function (it) {
    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0;
  };
  return module.exports;
});
$__System.registerDynamic("49", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  // 7.1.4 ToInteger
  var ceil = Math.ceil,
      floor = Math.floor;
  module.exports = function (it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };
  return module.exports;
});
$__System.registerDynamic('6d', ['49'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var toInteger = $__require('49'),
      max = Math.max,
      min = Math.min;
  module.exports = function (index, length) {
    index = toInteger(index);
    return index < 0 ? max(index + length, 0) : min(index, length);
  };
  return module.exports;
});
$__System.registerDynamic('ab', ['4', '6f', '6d'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var toIObject = $__require('4'),
      toLength = $__require('6f'),
      toIndex = $__require('6d');
  module.exports = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIObject($this),
          length = toLength(O.length),
          index = toIndex(fromIndex, length),
          value;
      if (IS_INCLUDES && el != el) while (length > index) {
        value = O[index++];
        if (value != value) return true;
      } else for (; length > index; index++) if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      }
      return !IS_INCLUDES && -1;
    };
  };
  return module.exports;
});
$__System.registerDynamic('f5', ['a', '4', 'ab', '126'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var has = $__require('a'),
      toIObject = $__require('4'),
      arrayIndexOf = $__require('ab')(false),
      IE_PROTO = $__require('126')('IE_PROTO');
  module.exports = function (object, names) {
    var O = toIObject(object),
        i = 0,
        result = [],
        key;
    for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
    while (names.length > i) if (has(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
    }
    return result;
  };
  return module.exports;
});
$__System.registerDynamic('3', ['f5', 'f6'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var $keys = $__require('f5'),
      enumBugKeys = $__require('f6');
  module.exports = Object.keys || function keys(O) {
    return $keys(O, enumBugKeys);
  };
  return module.exports;
});
$__System.registerDynamic('24', ['1d', '17', '3', 'b'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var dP = $__require('1d'),
        anObject = $__require('17'),
        getKeys = $__require('3');
    module.exports = $__require('b') ? Object.defineProperties : function defineProperties(O, Properties) {
        anObject(O);
        var keys = getKeys(Properties),
            length = keys.length,
            i = 0,
            P;
        while (length > i) dP.f(O, P = keys[i++], Properties[P]);
        return O;
    };
    return module.exports;
});
$__System.registerDynamic('f6', [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  // IE 8- don't enum bug keys
  module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');
  return module.exports;
});
$__System.registerDynamic('9e', ['9'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = $__require('9').document && document.documentElement;
  return module.exports;
});
$__System.registerDynamic('1a', ['17', '24', 'f6', '126', '124', '9e'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var anObject = $__require('17'),
      dPs = $__require('24'),
      enumBugKeys = $__require('f6'),
      IE_PROTO = $__require('126')('IE_PROTO'),
      Empty = function () {},
      PROTOTYPE = 'prototype';
  var createDict = function () {
    var iframe = $__require('124')('iframe'),
        i = enumBugKeys.length,
        lt = '<',
        gt = '>',
        iframeDocument;
    iframe.style.display = 'none';
    $__require('9e').appendChild(iframe);
    iframe.src = 'javascript:';
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
    iframeDocument.close();
    createDict = iframeDocument.F;
    while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
    return createDict();
  };
  module.exports = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
      Empty[PROTOTYPE] = anObject(O);
      result = new Empty();
      Empty[PROTOTYPE] = null;
      result[IE_PROTO] = O;
    } else result = createDict();
    return Properties === undefined ? result : dPs(result, Properties);
  };
  return module.exports;
});
$__System.registerDynamic('e0', ['1a', '19', '11', '20', '13'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  var create = $__require('1a'),
      descriptor = $__require('19'),
      setToStringTag = $__require('11'),
      IteratorPrototype = {};
  $__require('20')(IteratorPrototype, $__require('13')('iterator'), function () {
    return this;
  });
  module.exports = function (Constructor, NAME, next) {
    Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
    setToStringTag(Constructor, NAME + ' Iterator');
  };
  return module.exports;
});
$__System.registerDynamic('11', ['1d', 'a', '13'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var def = $__require('1d').f,
      has = $__require('a'),
      TAG = $__require('13')('toStringTag');
  module.exports = function (it, tag, stat) {
    if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {
      configurable: true,
      value: tag
    });
  };
  return module.exports;
});
$__System.registerDynamic("7b", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  // 7.2.1 RequireObjectCoercible(argument)
  module.exports = function (it) {
    if (it == undefined) throw TypeError("Can't call method on  " + it);
    return it;
  };
  return module.exports;
});
$__System.registerDynamic('28', ['7b'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var defined = $__require('7b');
  module.exports = function (it) {
    return Object(defined(it));
  };
  return module.exports;
});
$__System.registerDynamic('126', ['10', '12'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var shared = $__require('10')('keys'),
      uid = $__require('12');
  module.exports = function (key) {
    return shared[key] || (shared[key] = uid(key));
  };
  return module.exports;
});
$__System.registerDynamic('29', ['a', '28', '126'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var has = $__require('a'),
      toObject = $__require('28'),
      IE_PROTO = $__require('126')('IE_PROTO'),
      ObjectProto = Object.prototype;
  module.exports = Object.getPrototypeOf || function (O) {
    O = toObject(O);
    if (has(O, IE_PROTO)) return O[IE_PROTO];
    if (typeof O.constructor == 'function' && O instanceof O.constructor) {
      return O.constructor.prototype;
    }
    return O instanceof Object ? ObjectProto : null;
  };
  return module.exports;
});
$__System.registerDynamic('73', ['1f', 'c', 'd', '20', 'a', 'd8', 'e0', '11', '29', '13'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  var LIBRARY = $__require('1f'),
      $export = $__require('c'),
      redefine = $__require('d'),
      hide = $__require('20'),
      has = $__require('a'),
      Iterators = $__require('d8'),
      $iterCreate = $__require('e0'),
      setToStringTag = $__require('11'),
      getPrototypeOf = $__require('29'),
      ITERATOR = $__require('13')('iterator'),
      BUGGY = !([].keys && 'next' in [].keys()),
      FF_ITERATOR = '@@iterator',
      KEYS = 'keys',
      VALUES = 'values';
  var returnThis = function () {
    return this;
  };
  module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
    $iterCreate(Constructor, NAME, next);
    var getMethod = function (kind) {
      if (!BUGGY && kind in proto) return proto[kind];
      switch (kind) {
        case KEYS:
          return function keys() {
            return new Constructor(this, kind);
          };
        case VALUES:
          return function values() {
            return new Constructor(this, kind);
          };
      }
      return function entries() {
        return new Constructor(this, kind);
      };
    };
    var TAG = NAME + ' Iterator',
        DEF_VALUES = DEFAULT == VALUES,
        VALUES_BUG = false,
        proto = Base.prototype,
        $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
        $default = $native || getMethod(DEFAULT),
        $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined,
        $anyNative = NAME == 'Array' ? proto.entries || $native : $native,
        methods,
        key,
        IteratorPrototype;
    if ($anyNative) {
      IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
      if (IteratorPrototype !== Object.prototype) {
        setToStringTag(IteratorPrototype, TAG, true);
        if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
      }
    }
    if (DEF_VALUES && $native && $native.name !== VALUES) {
      VALUES_BUG = true;
      $default = function values() {
        return $native.call(this);
      };
    }
    if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
      hide(proto, ITERATOR, $default);
    }
    Iterators[NAME] = $default;
    Iterators[TAG] = returnThis;
    if (DEFAULT) {
      methods = {
        values: DEF_VALUES ? $default : getMethod(VALUES),
        keys: IS_SET ? $default : getMethod(KEYS),
        entries: $entries
      };
      if (FORCED) for (key in methods) {
        if (!(key in proto)) redefine(proto, key, methods[key]);
      } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
    }
    return methods;
  };
  return module.exports;
});
$__System.registerDynamic('d7', ['af', '115', 'd8', '4', '73'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  var addToUnscopables = $__require('af'),
      step = $__require('115'),
      Iterators = $__require('d8'),
      toIObject = $__require('4');
  module.exports = $__require('73')(Array, 'Array', function (iterated, kind) {
    this._t = toIObject(iterated);
    this._i = 0;
    this._k = kind;
  }, function () {
    var O = this._t,
        kind = this._k,
        index = this._i++;
    if (!O || index >= O.length) {
      this._t = undefined;
      return step(1);
    }
    if (kind == 'keys') return step(0, index);
    if (kind == 'values') return step(0, O[index]);
    return step(0, [index, O[index]]);
  }, 'values');
  Iterators.Arguments = Iterators.Array;
  addToUnscopables('keys');
  addToUnscopables('values');
  addToUnscopables('entries');
  return module.exports;
});
$__System.registerDynamic("a", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var hasOwnProperty = {}.hasOwnProperty;
  module.exports = function (it, key) {
    return hasOwnProperty.call(it, key);
  };
  return module.exports;
});
$__System.registerDynamic('d', ['9', '20', 'a', '12', '32'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var global = $__require('9'),
      hide = $__require('20'),
      has = $__require('a'),
      SRC = $__require('12')('src'),
      TO_STRING = 'toString',
      $toString = Function[TO_STRING],
      TPL = ('' + $toString).split(TO_STRING);
  $__require('32').inspectSource = function (it) {
    return $toString.call(it);
  };
  (module.exports = function (O, key, val, safe) {
    var isFunction = typeof val == 'function';
    if (isFunction) has(val, 'name') || hide(val, 'name', key);
    if (O[key] === val) return;
    if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
    if (O === global) {
      O[key] = val;
    } else {
      if (!safe) {
        delete O[key];
        hide(O, key, val);
      } else {
        if (O[key]) O[key] = val;else hide(O, key, val);
      }
    }
  })(Function.prototype, TO_STRING, function toString() {
    return typeof this == 'function' && this[SRC] || $toString.call(this);
  });
  return module.exports;
});
$__System.registerDynamic('17', ['2d'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var isObject = $__require('2d');
  module.exports = function (it) {
    if (!isObject(it)) throw TypeError(it + ' is not an object!');
    return it;
  };
  return module.exports;
});
$__System.registerDynamic('124', ['2d', '9'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var isObject = $__require('2d'),
        document = $__require('9').document,
        is = isObject(document) && isObject(document.createElement);
    module.exports = function (it) {
        return is ? document.createElement(it) : {};
    };
    return module.exports;
});
$__System.registerDynamic('119', ['b', 'f', '124'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = !$__require('b') && !$__require('f')(function () {
    return Object.defineProperty($__require('124')('div'), 'a', { get: function () {
        return 7;
      } }).a != 7;
  });
  return module.exports;
});
$__System.registerDynamic('2d', [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };
  return module.exports;
});
$__System.registerDynamic('18', ['2d'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var isObject = $__require('2d');
  module.exports = function (it, S) {
    if (!isObject(it)) return it;
    var fn, val;
    if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
    if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
    if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
    throw TypeError("Can't convert object to primitive value");
  };
  return module.exports;
});
$__System.registerDynamic('1d', ['17', '119', '18', 'b'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var anObject = $__require('17'),
      IE8_DOM_DEFINE = $__require('119'),
      toPrimitive = $__require('18'),
      dP = Object.defineProperty;
  exports.f = $__require('b') ? Object.defineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPrimitive(P, true);
    anObject(Attributes);
    if (IE8_DOM_DEFINE) try {
      return dP(O, P, Attributes);
    } catch (e) {}
    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };
  return module.exports;
});
$__System.registerDynamic("19", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };
  return module.exports;
});
$__System.registerDynamic("f", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };
  return module.exports;
});
$__System.registerDynamic('b', ['f'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = !$__require('f')(function () {
    return Object.defineProperty({}, 'a', { get: function () {
        return 7;
      } }).a != 7;
  });
  return module.exports;
});
$__System.registerDynamic('20', ['1d', '19', 'b'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var dP = $__require('1d'),
      createDesc = $__require('19');
  module.exports = $__require('b') ? function (object, key, value) {
    return dP.f(object, key, createDesc(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };
  return module.exports;
});
$__System.registerDynamic("d8", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = {};
  return module.exports;
});
$__System.registerDynamic('10', ['9'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var global = $__require('9'),
        SHARED = '__core-js_shared__',
        store = global[SHARED] || (global[SHARED] = {});
    module.exports = function (key) {
        return store[key] || (store[key] = {});
    };
    return module.exports;
});
$__System.registerDynamic('12', [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var id = 0,
      px = Math.random();
  module.exports = function (key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
  };
  return module.exports;
});
$__System.registerDynamic('9', [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
  if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

  return module.exports;
});
$__System.registerDynamic('13', ['10', '12', '9'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var store = $__require('10')('wks'),
        uid = $__require('12'),
        Symbol = $__require('9').Symbol,
        USE_SYMBOL = typeof Symbol == 'function';
    var $exports = module.exports = function (name) {
        return store[name] || (store[name] = USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
    };
    $exports.store = store;
    return module.exports;
});
$__System.registerDynamic('127', ['d7', 'd', '9', '20', 'd8', '13'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var $iterators = $__require('d7'),
      redefine = $__require('d'),
      global = $__require('9'),
      hide = $__require('20'),
      Iterators = $__require('d8'),
      wks = $__require('13'),
      ITERATOR = wks('iterator'),
      TO_STRING_TAG = wks('toStringTag'),
      ArrayValues = Iterators.Array;
  for (var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++) {
    var NAME = collections[i],
        Collection = global[NAME],
        proto = Collection && Collection.prototype,
        key;
    if (proto) {
      if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
      if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
      Iterators[NAME] = ArrayValues;
      for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
    }
  }
  return module.exports;
});
$__System.registerDynamic('32', [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var core = module.exports = { version: '2.4.0' };
  if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

  return module.exports;
});
$__System.registerDynamic('128', ['8', '21', '22', '23', '25', '27', '2a', '2b', '2c', '2e', '2f', '30', '31', '33', '34', '36', '38', '3a', '3c', '3e', '3f', '40', '42', '44', '48', '4c', '4d', '4e', '4f', '51', '52', '53', '54', '56', '57', '58', '5a', '5b', '5c', '5e', '5f', '60', '62', '63', '64', '65', '66', '67', '68', '69', '6a', '6b', '6c', '6e', '70', '71', '74', '75', '78', '79', '7c', '7d', '7f', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '8a', '8b', '8c', '8d', '8e', '90', '91', '92', '99', '9a', '9d', '9f', 'a1', 'a3', 'a4', 'a5', 'a6', 'a7', 'a9', 'aa', 'ac', 'ad', 'b0', 'b2', 'b3', 'b4', 'd7', 'b6', 'b8', 'b9', 'ba', 'bc', 'bd', 'be', 'bf', '116', '10e', '11a', 'c7', 'ca', 'cd', 'ce', 'd0', 'd1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd9', 'da', 'dc', 'dd', 'de', 'df', 'e1', 'e2', 'e3', 'e4', 'e5', 'e6', 'e8', 'e9', 'ea', 'eb', 'ec', 'ed', 'ef', 'f0', 'f1', 'f2', 'f3', 'f4', 'f7', 'f8', 'fa', 'fb', 'fd', 'fe', 'ff', '100', '103', '104', '105', '106', '107', '108', '109', '10a', '10c', '10d', '110', '111', '112', '113', '114', '11b', '11c', '11d', '120', '125', '127', '32'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  $__require('8');
  $__require('21');
  $__require('22');
  $__require('23');
  $__require('25');
  $__require('27');
  $__require('2a');
  $__require('2b');
  $__require('2c');
  $__require('2e');
  $__require('2f');
  $__require('30');
  $__require('31');
  $__require('33');
  $__require('34');
  $__require('36');
  $__require('38');
  $__require('3a');
  $__require('3c');
  $__require('3e');
  $__require('3f');
  $__require('40');
  $__require('42');
  $__require('44');
  $__require('48');
  $__require('4c');
  $__require('4d');
  $__require('4e');
  $__require('4f');
  $__require('51');
  $__require('52');
  $__require('53');
  $__require('54');
  $__require('56');
  $__require('57');
  $__require('58');
  $__require('5a');
  $__require('5b');
  $__require('5c');
  $__require('5e');
  $__require('5f');
  $__require('60');
  $__require('62');
  $__require('63');
  $__require('64');
  $__require('65');
  $__require('66');
  $__require('67');
  $__require('68');
  $__require('69');
  $__require('6a');
  $__require('6b');
  $__require('6c');
  $__require('6e');
  $__require('70');
  $__require('71');
  $__require('74');
  $__require('75');
  $__require('78');
  $__require('79');
  $__require('7c');
  $__require('7d');
  $__require('7f');
  $__require('80');
  $__require('81');
  $__require('82');
  $__require('83');
  $__require('84');
  $__require('85');
  $__require('86');
  $__require('87');
  $__require('88');
  $__require('89');
  $__require('8a');
  $__require('8b');
  $__require('8c');
  $__require('8d');
  $__require('8e');
  $__require('90');
  $__require('91');
  $__require('92');
  $__require('99');
  $__require('9a');
  $__require('9d');
  $__require('9f');
  $__require('a1');
  $__require('a3');
  $__require('a4');
  $__require('a5');
  $__require('a6');
  $__require('a7');
  $__require('a9');
  $__require('aa');
  $__require('ac');
  $__require('ad');
  $__require('b0');
  $__require('b2');
  $__require('b3');
  $__require('b4');
  $__require('d7');
  $__require('b6');
  $__require('b8');
  $__require('b9');
  $__require('ba');
  $__require('bc');
  $__require('bd');
  $__require('be');
  $__require('bf');
  $__require('116');
  $__require('10e');
  $__require('11a');
  $__require('c7');
  $__require('ca');
  $__require('cd');
  $__require('ce');
  $__require('d0');
  $__require('d1');
  $__require('d2');
  $__require('d3');
  $__require('d4');
  $__require('d5');
  $__require('d6');
  $__require('d9');
  $__require('da');
  $__require('dc');
  $__require('dd');
  $__require('de');
  $__require('df');
  $__require('e1');
  $__require('e2');
  $__require('e3');
  $__require('e4');
  $__require('e5');
  $__require('e6');
  $__require('e8');
  $__require('e9');
  $__require('ea');
  $__require('eb');
  $__require('ec');
  $__require('ed');
  $__require('ef');
  $__require('f0');
  $__require('f1');
  $__require('f2');
  $__require('f3');
  $__require('f4');
  $__require('f7');
  $__require('f8');
  $__require('fa');
  $__require('fb');
  $__require('fd');
  $__require('fe');
  $__require('ff');
  $__require('100');
  $__require('103');
  $__require('104');
  $__require('105');
  $__require('106');
  $__require('107');
  $__require('108');
  $__require('109');
  $__require('10a');
  $__require('10c');
  $__require('10d');
  $__require('110');
  $__require('111');
  $__require('112');
  $__require('113');
  $__require('114');
  $__require('11b');
  $__require('11c');
  $__require('11d');
  $__require('120');
  $__require('125');
  $__require('127');
  module.exports = $__require('32');
  return module.exports;
});
$__System.registerDynamic('129', ['128'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  //window.Andaman = require('../assets/lib/andaman/andaman-bundle');
  //load and initialize some global objects
  $__require('128');
  return module.exports;
});
$__System.register("12a", [], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var __useDefault;
    return {
        setters: [],
        execute: function () {
            exports_1("__useDefault", __useDefault = true);
            exports_1("default", "<app>\n    <div id=\"main\"></div>\n</app>");
        }
    };
});
$__System.register('12b', ['12c', '12a'], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var riot_ts_1, app_html_text_1;
    var App;
    return {
        setters: [function (riot_ts_1_1) {
            riot_ts_1 = riot_ts_1_1;
        }, function (app_html_text_1_1) {
            app_html_text_1 = app_html_text_1_1;
        }],
        execute: function () {
            App = function (_super) {
                __extends(App, _super);
                function App() {
                    _super.apply(this, arguments);
                }
                App = __decorate([riot_ts_1.template(app_html_text_1.default)], App);
                return App;
            }(riot_ts_1.Element);
            exports_1("default", App);
        }
    };
});
$__System.register("12d", [], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var __useDefault;
    return {
        setters: [],
        execute: function () {
            exports_1("__useDefault", __useDefault = true);
            exports_1("default", "<landing-page>\n    <div class=\"main-page\">\n        <div class=\"header\">\n            <div class=\"container\">\n                <img src=\"assets/images/logo.png\">\n                <button class=\"sign-in pull-right\" onclick={onSigninButtonClick}>Sign in</button>\n            </div>\n        </div>\n        <div class=\"main-content\">\n            <div class=\"container\">\n                <form class=\"text-center\">\n                    <div class=\"line-top\">\n                        <h2 class=\"title\">Central Authentication Service</h2>\n                        <p class=\"note\">Create your Flashcoin Account</p>\n                    </div>\n                    <div class=\"field\">\n                        <input type=\"text\" placeholder=\"Name\" />\n                    </div>\n                    <div class=\"field\">\n                        <input type=\"text\" placeholder=\"Email\" />\n                    </div>\n                    <div class=\"field\">\n                        <input type=\"text\" placeholder=\"Password\" />\n                    </div>\n                    <div class=\"field\">\n                        <button class=\"creat-account green\">Sign Up</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n        <footer class=\"footer\">\n            <div class=\"col-xs-12 text-center\">\n                <div class=\"col-xs-4 col hidden-sm hidden-xs\"></div>\n                <div class=\"col-xs-12 col-md-4 col-ul\">\n                    <ul>\n                        <li><a href=\"terms-of-service.html\" target=\"_blank\">Terms of Service</a></li>\n                        <li><a href=\"privacy.html\" target=\"_blank\">Privacy</a></li>\n                        <li><a href=\"policy.html\" target=\"_blank\">Policy</a></li>\n                        <li><a href=\"support.html\" target=\"_blank\">Support</a></li>\n                        <li><a href=\"contact.html\" target=\"_blank\">Contact</a></li>\n                    </ul>\n                </div>\n                <div class=\"col-xs-4 col hidden-sm hidden-xs\"></div>\n            </div>\n            <p class=\"text-center\"><img src=\"assets/images/flag-footer.png\" width=\"\" class=\"m15r\" />Flash is owned and operated by XYZ123, Inc.,\n                a Canadian company based in Toronto.in Canada</p>\n        </footer>\n    </div>\n</landing-page>");
        }
    };
});
$__System.register('12e', ['12c', '12f', '12d'], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var riot_ts_1, base_element_1, landing_page_html_text_1;
    var LandingPage;
    return {
        setters: [function (riot_ts_1_1) {
            riot_ts_1 = riot_ts_1_1;
        }, function (base_element_1_1) {
            base_element_1 = base_element_1_1;
        }, function (landing_page_html_text_1_1) {
            landing_page_html_text_1 = landing_page_html_text_1_1;
        }],
        execute: function () {
            LandingPage = function (_super) {
                __extends(LandingPage, _super);
                function LandingPage() {
                    _super.apply(this, arguments);
                }
                LandingPage.prototype.onSigninButtonClick = function (event) {
                    event.preventDefault();
                    event.stopPropagation();
                    riot_ts_1.riot.route('signin');
                };
                LandingPage.prototype.mounted = function () {
                    console.log('checking cas client...');
                    // UserService.singleton().login('transontk12@gmail.com', '111111').then((resp: any) => {
                    //     console.log(resp);
                    // });
                };
                LandingPage = __decorate([riot_ts_1.template(landing_page_html_text_1.default)], LandingPage);
                return LandingPage;
            }(base_element_1.default);
            exports_1("default", LandingPage);
        }
    };
});
$__System.register("130", [], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var __useDefault;
    return {
        setters: [],
        execute: function () {
            exports_1("__useDefault", __useDefault = true);
            exports_1("default", "<signin-page>\n    <div class=\"header\">\n        <div class=\"container\">\n            <img src=\"assets/images/logo.png\">\n        </div>\n    </div>\n    <div class=\"main-content\">\n        <div class=\"container\">\n            <form class=\"text-center\">\n                <div class=\"line-top\">\n                    <h2 class=\"title\">Central Authentication Service</h2>\n                    <p class=\"note\">Sign in to continue to Flashcoin</p>\n                </div>\n                <div class=\"field\">\n                    <input type=\"text\" placeholder=\"Enter your email\" />\n                </div>\n                <div class=\"field\">\n                    <button class=\"next-step green\">Next</button>\n                    <p class=\"m10t\"><a class=\"pull-right forgot-pwd\" href=\"#forgot-password\">Forgot password?</a></p>\n                </div>\n                <div class=\"field m100t\">\n                    <button class=\"creat-account transparent\" onclick={onCreateAccountButtonClick}>Create Account</button>\n                </div>\n            </form>\n        </div>\n    </div>\n    <footer class=\"footer\">\n        <div class=\"col-xs-12 text-center\">\n            <div class=\"col-xs-4 col hidden-sm hidden-xs\"></div>\n            <div class=\"col-xs-12 col-md-4 col-ul\">\n                <ul>\n                    <li><a href=\"terms-of-service.html\" target=\"_blank\">Terms of Service</a></li>\n                    <li><a href=\"privacy.html\" target=\"_blank\">Privacy</a></li>\n                    <li><a href=\"policy.html\" target=\"_blank\">Policy</a></li>\n                    <li><a href=\"support.html\" target=\"_blank\">Support</a></li>\n                    <li><a href=\"contact.html\" target=\"_blank\">Contact</a></li>\n                </ul>\n            </div>\n            <div class=\"col-xs-4 col hidden-sm hidden-xs\"></div>\n        </div>\n        <p class=\"text-center\"><img src=\"assets/images/flag-footer.png\" width=\"\" class=\"m15r\" />Flash is owned and operated by XYZ123, Inc., a Canadian\n            company based in Toronto.in Canada</p>\n    </footer>\n</signin-page>");
        }
    };
});
$__System.register('131', ['12c', '12f', '130'], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var riot_ts_1, base_element_1, signin_page_html_text_1;
    var SigninPage;
    return {
        setters: [function (riot_ts_1_1) {
            riot_ts_1 = riot_ts_1_1;
        }, function (base_element_1_1) {
            base_element_1 = base_element_1_1;
        }, function (signin_page_html_text_1_1) {
            signin_page_html_text_1 = signin_page_html_text_1_1;
        }],
        execute: function () {
            SigninPage = function (_super) {
                __extends(SigninPage, _super);
                function SigninPage() {
                    _super.apply(this, arguments);
                }
                SigninPage.prototype.onCreateAccountButtonClick = function (event) {
                    event.preventDefault();
                    event.stopPropagation();
                    riot_ts_1.riot.route('signup');
                };
                SigninPage = __decorate([riot_ts_1.template(signin_page_html_text_1.default)], SigninPage);
                return SigninPage;
            }(base_element_1.default);
            exports_1("default", SigninPage);
        }
    };
});
$__System.registerDynamic('132', [], true, function ($__require, exports, module) {
  /* */
  "format cjs";
  /* Riot v2.6.5, @license MIT */

  var define,
      global = this || self,
      GLOBAL = global;
  ;(function (window, undefined) {
    'use strict';

    var riot = { version: 'v2.6.5', settings: {} },

    // be aware, internal usage
    // ATTENTION: prefix the global dynamic variables with `__`

    // counter to give a unique id to all the Tag instances
    __uid = 0,

    // tags instances cache
    __virtualDom = [],

    // tags implementation cache
    __tagImpl = {},


    /**
     * Const
     */
    GLOBAL_MIXIN = '__global_mixin',


    // riot specific prefixes
    RIOT_PREFIX = 'riot-',
        RIOT_TAG = RIOT_PREFIX + 'tag',
        RIOT_TAG_IS = 'data-is',


    // for typeof == '' comparisons
    T_STRING = 'string',
        T_OBJECT = 'object',
        T_UNDEF = 'undefined',
        T_FUNCTION = 'function',
        XLINK_NS = 'http://www.w3.org/1999/xlink',
        XLINK_REGEX = /^xlink:(\w+)/,

    // special native tags that cannot be treated like the others
    SPECIAL_TAGS_REGEX = /^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?|opt(?:ion|group))$/,
        RESERVED_WORDS_BLACKLIST = /^(?:_(?:item|id|parent)|update|root|(?:un)?mount|mixin|is(?:Mounted|Loop)|tags|parent|opts|trigger|o(?:n|ff|ne))$/,

    // SVG tags list https://www.w3.org/TR/SVG/attindex.html#PresentationAttributes
    SVG_TAGS_LIST = ['altGlyph', 'animate', 'animateColor', 'circle', 'clipPath', 'defs', 'ellipse', 'feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feFlood', 'feGaussianBlur', 'feImage', 'feMerge', 'feMorphology', 'feOffset', 'feSpecularLighting', 'feTile', 'feTurbulence', 'filter', 'font', 'foreignObject', 'g', 'glyph', 'glyphRef', 'image', 'line', 'linearGradient', 'marker', 'mask', 'missing-glyph', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'switch', 'symbol', 'text', 'textPath', 'tref', 'tspan', 'use'],


    // version# for IE 8-11, 0 for others
    IE_VERSION = (window && window.document || {}).documentMode | 0,


    // detect firefox to fix #1374
    FIREFOX = window && !!window.InstallTrigger;
    /* istanbul ignore next */
    riot.observable = function (el) {

      /**
       * Extend the original object or create a new empty one
       * @type { Object }
       */

      el = el || {};

      /**
       * Private variables
       */
      var callbacks = {},
          slice = Array.prototype.slice;

      /**
       * Private Methods
       */

      /**
       * Helper function needed to get and loop all the events in a string
       * @param   { String }   e - event string
       * @param   {Function}   fn - callback
       */
      function onEachEvent(e, fn) {
        var es = e.split(' '),
            l = es.length,
            i = 0;
        for (; i < l; i++) {
          var name = es[i];
          if (name) fn(name, i);
        }
      }

      /**
       * Public Api
       */

      // extend the el object adding the observable methods
      Object.defineProperties(el, {
        /**
         * Listen to the given space separated list of `events` and
         * execute the `callback` each time an event is triggered.
         * @param  { String } events - events ids
         * @param  { Function } fn - callback function
         * @returns { Object } el
         */
        on: {
          value: function (events, fn) {
            if (typeof fn != 'function') return el;

            onEachEvent(events, function (name, pos) {
              (callbacks[name] = callbacks[name] || []).push(fn);
              fn.typed = pos > 0;
            });

            return el;
          },
          enumerable: false,
          writable: false,
          configurable: false
        },

        /**
         * Removes the given space separated list of `events` listeners
         * @param   { String } events - events ids
         * @param   { Function } fn - callback function
         * @returns { Object } el
         */
        off: {
          value: function (events, fn) {
            if (events == '*' && !fn) callbacks = {};else {
              onEachEvent(events, function (name, pos) {
                if (fn) {
                  var arr = callbacks[name];
                  for (var i = 0, cb; cb = arr && arr[i]; ++i) {
                    if (cb == fn) arr.splice(i--, 1);
                  }
                } else delete callbacks[name];
              });
            }
            return el;
          },
          enumerable: false,
          writable: false,
          configurable: false
        },

        /**
         * Listen to the given space separated list of `events` and
         * execute the `callback` at most once
         * @param   { String } events - events ids
         * @param   { Function } fn - callback function
         * @returns { Object } el
         */
        one: {
          value: function (events, fn) {
            function on() {
              el.off(events, on);
              fn.apply(el, arguments);
            }
            return el.on(events, on);
          },
          enumerable: false,
          writable: false,
          configurable: false
        },

        /**
         * Execute all callback functions that listen to
         * the given space separated list of `events`
         * @param   { String } events - events ids
         * @returns { Object } el
         */
        trigger: {
          value: function (events) {

            // getting the arguments
            var arglen = arguments.length - 1,
                args = new Array(arglen),
                fns;

            for (var i = 0; i < arglen; i++) {
              args[i] = arguments[i + 1]; // skip first argument
            }

            onEachEvent(events, function (name, pos) {

              fns = slice.call(callbacks[name] || [], 0);

              for (var i = 0, fn; fn = fns[i]; ++i) {
                if (fn.busy) continue;
                fn.busy = 1;
                fn.apply(el, fn.typed ? [name].concat(args) : args);
                if (fns[i] !== fn) {
                  i--;
                }
                fn.busy = 0;
              }

              if (callbacks['*'] && name != '*') el.trigger.apply(el, ['*', name].concat(args));
            });

            return el;
          },
          enumerable: false,
          writable: false,
          configurable: false
        }
      });

      return el;
    }
    /* istanbul ignore next */
    ;(function (riot) {

      /**
       * Simple client-side router
       * @module riot-route
       */

      var RE_ORIGIN = /^.+?\/\/+[^\/]+/,
          EVENT_LISTENER = 'EventListener',
          REMOVE_EVENT_LISTENER = 'remove' + EVENT_LISTENER,
          ADD_EVENT_LISTENER = 'add' + EVENT_LISTENER,
          HAS_ATTRIBUTE = 'hasAttribute',
          REPLACE = 'replace',
          POPSTATE = 'popstate',
          HASHCHANGE = 'hashchange',
          TRIGGER = 'trigger',
          MAX_EMIT_STACK_LEVEL = 3,
          win = typeof window != 'undefined' && window,
          doc = typeof document != 'undefined' && document,
          hist = win && history,
          loc = win && (hist.location || win.location),
          // see html5-history-api
      prot = Router.prototype,
          // to minify more
      clickEvent = doc && doc.ontouchstart ? 'touchstart' : 'click',
          started = false,
          central = riot.observable(),
          routeFound = false,
          debouncedEmit,
          base,
          current,
          parser,
          secondParser,
          emitStack = [],
          emitStackLevel = 0;

      /**
       * Default parser. You can replace it via router.parser method.
       * @param {string} path - current path (normalized)
       * @returns {array} array
       */
      function DEFAULT_PARSER(path) {
        return path.split(/[/?#]/);
      }

      /**
       * Default parser (second). You can replace it via router.parser method.
       * @param {string} path - current path (normalized)
       * @param {string} filter - filter string (normalized)
       * @returns {array} array
       */
      function DEFAULT_SECOND_PARSER(path, filter) {
        var re = new RegExp('^' + filter[REPLACE](/\*/g, '([^/?#]+?)')[REPLACE](/\.\./, '.*') + '$'),
            args = path.match(re);

        if (args) return args.slice(1);
      }

      /**
       * Simple/cheap debounce implementation
       * @param   {function} fn - callback
       * @param   {number} delay - delay in seconds
       * @returns {function} debounced function
       */
      function debounce(fn, delay) {
        var t;
        return function () {
          clearTimeout(t);
          t = setTimeout(fn, delay);
        };
      }

      /**
       * Set the window listeners to trigger the routes
       * @param {boolean} autoExec - see route.start
       */
      function start(autoExec) {
        debouncedEmit = debounce(emit, 1);
        win[ADD_EVENT_LISTENER](POPSTATE, debouncedEmit);
        win[ADD_EVENT_LISTENER](HASHCHANGE, debouncedEmit);
        doc[ADD_EVENT_LISTENER](clickEvent, click);
        if (autoExec) emit(true);
      }

      /**
       * Router class
       */
      function Router() {
        this.$ = [];
        riot.observable(this); // make it observable
        central.on('stop', this.s.bind(this));
        central.on('emit', this.e.bind(this));
      }

      function normalize(path) {
        return path[REPLACE](/^\/|\/$/, '');
      }

      function isString(str) {
        return typeof str == 'string';
      }

      /**
       * Get the part after domain name
       * @param {string} href - fullpath
       * @returns {string} path from root
       */
      function getPathFromRoot(href) {
        return (href || loc.href)[REPLACE](RE_ORIGIN, '');
      }

      /**
       * Get the part after base
       * @param {string} href - fullpath
       * @returns {string} path from base
       */
      function getPathFromBase(href) {
        return base[0] == '#' ? (href || loc.href || '').split(base)[1] || '' : (loc ? getPathFromRoot(href) : href || '')[REPLACE](base, '');
      }

      function emit(force) {
        // the stack is needed for redirections
        var isRoot = emitStackLevel == 0,
            first;
        if (MAX_EMIT_STACK_LEVEL <= emitStackLevel) return;

        emitStackLevel++;
        emitStack.push(function () {
          var path = getPathFromBase();
          if (force || path != current) {
            central[TRIGGER]('emit', path);
            current = path;
          }
        });
        if (isRoot) {
          while (first = emitStack.shift()) first(); // stack increses within this call
          emitStackLevel = 0;
        }
      }

      function click(e) {
        if (e.which != 1 // not left click
        || e.metaKey || e.ctrlKey || e.shiftKey // or meta keys
        || e.defaultPrevented // or default prevented
        ) return;

        var el = e.target;
        while (el && el.nodeName != 'A') el = el.parentNode;

        if (!el || el.nodeName != 'A' // not A tag
        || el[HAS_ATTRIBUTE]('download') // has download attr
        || !el[HAS_ATTRIBUTE]('href') // has no href attr
        || el.target && el.target != '_self' // another window or frame
        || el.href.indexOf(loc.href.match(RE_ORIGIN)[0]) == -1 // cross origin
        ) return;

        if (el.href != loc.href && (el.href.split('#')[0] == loc.href.split('#')[0] // internal jump
        || base[0] != '#' && getPathFromRoot(el.href).indexOf(base) !== 0 // outside of base
        || base[0] == '#' && el.href.split(base)[0] != loc.href.split(base)[0] // outside of #base
        || !go(getPathFromBase(el.href), el.title || doc.title) // route not found
        )) return;

        e.preventDefault();
      }

      /**
       * Go to the path
       * @param {string} path - destination path
       * @param {string} title - page title
       * @param {boolean} shouldReplace - use replaceState or pushState
       * @returns {boolean} - route not found flag
       */
      function go(path, title, shouldReplace) {
        // Server-side usage: directly execute handlers for the path
        if (!hist) return central[TRIGGER]('emit', getPathFromBase(path));

        path = base + normalize(path);
        title = title || doc.title;
        // browsers ignores the second parameter `title`
        shouldReplace ? hist.replaceState(null, title, path) : hist.pushState(null, title, path);
        // so we need to set it manually
        doc.title = title;
        routeFound = false;
        emit();
        return routeFound;
      }

      /**
       * Go to path or set action
       * a single string:                go there
       * two strings:                    go there with setting a title
       * two strings and boolean:        replace history with setting a title
       * a single function:              set an action on the default route
       * a string/RegExp and a function: set an action on the route
       * @param {(string|function)} first - path / action / filter
       * @param {(string|RegExp|function)} second - title / action
       * @param {boolean} third - replace flag
       */
      prot.m = function (first, second, third) {
        if (isString(first) && (!second || isString(second))) go(first, second, third || false);else if (second) this.r(first, second);else this.r('@', first);
      };

      /**
       * Stop routing
       */
      prot.s = function () {
        this.off('*');
        this.$ = [];
      };

      /**
       * Emit
       * @param {string} path - path
       */
      prot.e = function (path) {
        this.$.concat('@').some(function (filter) {
          var args = (filter == '@' ? parser : secondParser)(normalize(path), normalize(filter));
          if (typeof args != 'undefined') {
            this[TRIGGER].apply(null, [filter].concat(args));
            return routeFound = true; // exit from loop
          }
        }, this);
      };

      /**
       * Register route
       * @param {string} filter - filter for matching to url
       * @param {function} action - action to register
       */
      prot.r = function (filter, action) {
        if (filter != '@') {
          filter = '/' + normalize(filter);
          this.$.push(filter);
        }
        this.on(filter, action);
      };

      var mainRouter = new Router();
      var route = mainRouter.m.bind(mainRouter);

      /**
       * Create a sub router
       * @returns {function} the method of a new Router object
       */
      route.create = function () {
        var newSubRouter = new Router();
        // assign sub-router's main method
        var router = newSubRouter.m.bind(newSubRouter);
        // stop only this sub-router
        router.stop = newSubRouter.s.bind(newSubRouter);
        return router;
      };

      /**
       * Set the base of url
       * @param {(str|RegExp)} arg - a new base or '#' or '#!'
       */
      route.base = function (arg) {
        base = arg || '#';
        current = getPathFromBase(); // recalculate current path
      };

      /** Exec routing right now **/
      route.exec = function () {
        emit(true);
      };

      /**
       * Replace the default router to yours
       * @param {function} fn - your parser function
       * @param {function} fn2 - your secondParser function
       */
      route.parser = function (fn, fn2) {
        if (!fn && !fn2) {
          // reset parser for testing...
          parser = DEFAULT_PARSER;
          secondParser = DEFAULT_SECOND_PARSER;
        }
        if (fn) parser = fn;
        if (fn2) secondParser = fn2;
      };

      /**
       * Helper function to get url query as an object
       * @returns {object} parsed query
       */
      route.query = function () {
        var q = {};
        var href = loc.href || current;
        href[REPLACE](/[?&](.+?)=([^&]*)/g, function (_, k, v) {
          q[k] = v;
        });
        return q;
      };

      /** Stop routing **/
      route.stop = function () {
        if (started) {
          if (win) {
            win[REMOVE_EVENT_LISTENER](POPSTATE, debouncedEmit);
            win[REMOVE_EVENT_LISTENER](HASHCHANGE, debouncedEmit);
            doc[REMOVE_EVENT_LISTENER](clickEvent, click);
          }
          central[TRIGGER]('stop');
          started = false;
        }
      };

      /**
       * Start routing
       * @param {boolean} autoExec - automatically exec after starting if true
       */
      route.start = function (autoExec) {
        if (!started) {
          if (win) {
            if (document.readyState == 'complete') start(autoExec);
            // the timeout is needed to solve
            // a weird safari bug https://github.com/riot/route/issues/33
            else win[ADD_EVENT_LISTENER]('load', function () {
                setTimeout(function () {
                  start(autoExec);
                }, 1);
              });
          }
          started = true;
        }
      };

      /** Prepare the router **/
      route.base();
      route.parser();

      riot.route = route;
    })(riot);
    /* istanbul ignore next */

    /**
     * The riot template engine
     * @version v2.4.2
     */
    /**
     * riot.util.brackets
     *
     * - `brackets    ` - Returns a string or regex based on its parameter
     * - `brackets.set` - Change the current riot brackets
     *
     * @module
     */

    var brackets = function (UNDEF) {

      var REGLOB = 'g',
          R_MLCOMMS = /\/\*[^*]*\*+(?:[^*\/][^*]*\*+)*\//g,
          R_STRINGS = /"[^"\\]*(?:\\[\S\s][^"\\]*)*"|'[^'\\]*(?:\\[\S\s][^'\\]*)*'/g,
          S_QBLOCKS = R_STRINGS.source + '|' + /(?:\breturn\s+|(?:[$\w\)\]]|\+\+|--)\s*(\/)(?![*\/]))/.source + '|' + /\/(?=[^*\/])[^[\/\\]*(?:(?:\[(?:\\.|[^\]\\]*)*\]|\\.)[^[\/\\]*)*?(\/)[gim]*/.source,
          UNSUPPORTED = RegExp('[\\' + 'x00-\\x1F<>a-zA-Z0-9\'",;\\\\]'),
          NEED_ESCAPE = /(?=[[\]()*+?.^$|])/g,
          FINDBRACES = {
        '(': RegExp('([()])|' + S_QBLOCKS, REGLOB),
        '[': RegExp('([[\\]])|' + S_QBLOCKS, REGLOB),
        '{': RegExp('([{}])|' + S_QBLOCKS, REGLOB)
      },
          DEFAULT = '{ }';

      var _pairs = ['{', '}', '{', '}', /{[^}]*}/, /\\([{}])/g, /\\({)|{/g, RegExp('\\\\(})|([[({])|(})|' + S_QBLOCKS, REGLOB), DEFAULT, /^\s*{\^?\s*([$\w]+)(?:\s*,\s*(\S+))?\s+in\s+(\S.*)\s*}/, /(^|[^\\]){=[\S\s]*?}/];

      var cachedBrackets = UNDEF,
          _regex,
          _cache = [],
          _settings;

      function _loopback(re) {
        return re;
      }

      function _rewrite(re, bp) {
        if (!bp) bp = _cache;
        return new RegExp(re.source.replace(/{/g, bp[2]).replace(/}/g, bp[3]), re.global ? REGLOB : '');
      }

      function _create(pair) {
        if (pair === DEFAULT) return _pairs;

        var arr = pair.split(' ');

        if (arr.length !== 2 || UNSUPPORTED.test(pair)) {
          throw new Error('Unsupported brackets "' + pair + '"');
        }
        arr = arr.concat(pair.replace(NEED_ESCAPE, '\\').split(' '));

        arr[4] = _rewrite(arr[1].length > 1 ? /{[\S\s]*?}/ : _pairs[4], arr);
        arr[5] = _rewrite(pair.length > 3 ? /\\({|})/g : _pairs[5], arr);
        arr[6] = _rewrite(_pairs[6], arr);
        arr[7] = RegExp('\\\\(' + arr[3] + ')|([[({])|(' + arr[3] + ')|' + S_QBLOCKS, REGLOB);
        arr[8] = pair;
        return arr;
      }

      function _brackets(reOrIdx) {
        return reOrIdx instanceof RegExp ? _regex(reOrIdx) : _cache[reOrIdx];
      }

      _brackets.split = function split(str, tmpl, _bp) {
        // istanbul ignore next: _bp is for the compiler
        if (!_bp) _bp = _cache;

        var parts = [],
            match,
            isexpr,
            start,
            pos,
            re = _bp[6];

        isexpr = start = re.lastIndex = 0;

        while (match = re.exec(str)) {

          pos = match.index;

          if (isexpr) {

            if (match[2]) {
              re.lastIndex = skipBraces(str, match[2], re.lastIndex);
              continue;
            }
            if (!match[3]) {
              continue;
            }
          }

          if (!match[1]) {
            unescapeStr(str.slice(start, pos));
            start = re.lastIndex;
            re = _bp[6 + (isexpr ^= 1)];
            re.lastIndex = start;
          }
        }

        if (str && start < str.length) {
          unescapeStr(str.slice(start));
        }

        return parts;

        function unescapeStr(s) {
          if (tmpl || isexpr) {
            parts.push(s && s.replace(_bp[5], '$1'));
          } else {
            parts.push(s);
          }
        }

        function skipBraces(s, ch, ix) {
          var match,
              recch = FINDBRACES[ch];

          recch.lastIndex = ix;
          ix = 1;
          while (match = recch.exec(s)) {
            if (match[1] && !(match[1] === ch ? ++ix : --ix)) break;
          }
          return ix ? s.length : recch.lastIndex;
        }
      };

      _brackets.hasExpr = function hasExpr(str) {
        return _cache[4].test(str);
      };

      _brackets.loopKeys = function loopKeys(expr) {
        var m = expr.match(_cache[9]);

        return m ? { key: m[1], pos: m[2], val: _cache[0] + m[3].trim() + _cache[1] } : { val: expr.trim() };
      };

      _brackets.array = function array(pair) {
        return pair ? _create(pair) : _cache;
      };

      function _reset(pair) {
        if ((pair || (pair = DEFAULT)) !== _cache[8]) {
          _cache = _create(pair);
          _regex = pair === DEFAULT ? _loopback : _rewrite;
          _cache[9] = _regex(_pairs[9]);
        }
        cachedBrackets = pair;
      }

      function _setSettings(o) {
        var b;

        o = o || {};
        b = o.brackets;
        Object.defineProperty(o, 'brackets', {
          set: _reset,
          get: function () {
            return cachedBrackets;
          },
          enumerable: true
        });
        _settings = o;
        _reset(b);
      }

      Object.defineProperty(_brackets, 'settings', {
        set: _setSettings,
        get: function () {
          return _settings;
        }
      });

      /* istanbul ignore next: in the browser riot is always in the scope */
      _brackets.settings = typeof riot !== 'undefined' && riot.settings || {};
      _brackets.set = _reset;

      _brackets.R_STRINGS = R_STRINGS;
      _brackets.R_MLCOMMS = R_MLCOMMS;
      _brackets.S_QBLOCKS = S_QBLOCKS;

      return _brackets;
    }();

    /**
     * @module tmpl
     *
     * tmpl          - Root function, returns the template value, render with data
     * tmpl.hasExpr  - Test the existence of a expression inside a string
     * tmpl.loopKeys - Get the keys for an 'each' loop (used by `_each`)
     */

    var tmpl = function () {

      var _cache = {};

      function _tmpl(str, data) {
        if (!str) return str;

        return (_cache[str] || (_cache[str] = _create(str))).call(data, _logErr);
      }

      _tmpl.haveRaw = brackets.hasRaw;

      _tmpl.hasExpr = brackets.hasExpr;

      _tmpl.loopKeys = brackets.loopKeys;

      // istanbul ignore next
      _tmpl.clearCache = function () {
        _cache = {};
      };

      _tmpl.errorHandler = null;

      function _logErr(err, ctx) {

        if (_tmpl.errorHandler) {

          err.riotData = {
            tagName: ctx && ctx.root && ctx.root.tagName,
            _riot_id: ctx && ctx._riot_id //eslint-disable-line camelcase
          };
          _tmpl.errorHandler(err);
        }
      }

      function _create(str) {
        var expr = _getTmpl(str);

        if (expr.slice(0, 11) !== 'try{return ') expr = 'return ' + expr;

        return new Function('E', expr + ';'); // eslint-disable-line no-new-func
      }

      var CH_IDEXPR = String.fromCharCode(0x2057),
          RE_CSNAME = /^(?:(-?[_A-Za-z\xA0-\xFF][-\w\xA0-\xFF]*)|\u2057(\d+)~):/,
          RE_QBLOCK = RegExp(brackets.S_QBLOCKS, 'g'),
          RE_DQUOTE = /\u2057/g,
          RE_QBMARK = /\u2057(\d+)~/g;

      function _getTmpl(str) {
        var qstr = [],
            expr,
            parts = brackets.split(str.replace(RE_DQUOTE, '"'), 1);

        if (parts.length > 2 || parts[0]) {
          var i,
              j,
              list = [];

          for (i = j = 0; i < parts.length; ++i) {

            expr = parts[i];

            if (expr && (expr = i & 1 ? _parseExpr(expr, 1, qstr) : '"' + expr.replace(/\\/g, '\\\\').replace(/\r\n?|\n/g, '\\n').replace(/"/g, '\\"') + '"')) list[j++] = expr;
          }

          expr = j < 2 ? list[0] : '[' + list.join(',') + '].join("")';
        } else {

          expr = _parseExpr(parts[1], 0, qstr);
        }

        if (qstr[0]) {
          expr = expr.replace(RE_QBMARK, function (_, pos) {
            return qstr[pos].replace(/\r/g, '\\r').replace(/\n/g, '\\n');
          });
        }
        return expr;
      }

      var RE_BREND = {
        '(': /[()]/g,
        '[': /[[\]]/g,
        '{': /[{}]/g
      };

      function _parseExpr(expr, asText, qstr) {

        expr = expr.replace(RE_QBLOCK, function (s, div) {
          return s.length > 2 && !div ? CH_IDEXPR + (qstr.push(s) - 1) + '~' : s;
        }).replace(/\s+/g, ' ').trim().replace(/\ ?([[\({},?\.:])\ ?/g, '$1');

        if (expr) {
          var list = [],
              cnt = 0,
              match;

          while (expr && (match = expr.match(RE_CSNAME)) && !match.index) {
            var key,
                jsb,
                re = /,|([[{(])|$/g;

            expr = RegExp.rightContext;
            key = match[2] ? qstr[match[2]].slice(1, -1).trim().replace(/\s+/g, ' ') : match[1];

            while (jsb = (match = re.exec(expr))[1]) skipBraces(jsb, re);

            jsb = expr.slice(0, match.index);
            expr = RegExp.rightContext;

            list[cnt++] = _wrapExpr(jsb, 1, key);
          }

          expr = !cnt ? _wrapExpr(expr, asText) : cnt > 1 ? '[' + list.join(',') + '].join(" ").trim()' : list[0];
        }
        return expr;

        function skipBraces(ch, re) {
          var mm,
              lv = 1,
              ir = RE_BREND[ch];

          ir.lastIndex = re.lastIndex;
          while (mm = ir.exec(expr)) {
            if (mm[0] === ch) ++lv;else if (! --lv) break;
          }
          re.lastIndex = lv ? expr.length : ir.lastIndex;
        }
      }

      // istanbul ignore next: not both
      var // eslint-disable-next-line max-len
      JS_CONTEXT = '"in this?this:' + (typeof window !== 'object' ? 'global' : 'window') + ').',
          JS_VARNAME = /[,{][\$\w]+(?=:)|(^ *|[^$\w\.{])(?!(?:typeof|true|false|null|undefined|in|instanceof|is(?:Finite|NaN)|void|NaN|new|Date|RegExp|Math)(?![$\w]))([$_A-Za-z][$\w]*)/g,
          JS_NOPROPS = /^(?=(\.[$\w]+))\1(?:[^.[(]|$)/;

      function _wrapExpr(expr, asText, key) {
        var tb;

        expr = expr.replace(JS_VARNAME, function (match, p, mvar, pos, s) {
          if (mvar) {
            pos = tb ? 0 : pos + match.length;

            if (mvar !== 'this' && mvar !== 'global' && mvar !== 'window') {
              match = p + '("' + mvar + JS_CONTEXT + mvar;
              if (pos) tb = (s = s[pos]) === '.' || s === '(' || s === '[';
            } else if (pos) {
              tb = !JS_NOPROPS.test(s.slice(pos));
            }
          }
          return match;
        });

        if (tb) {
          expr = 'try{return ' + expr + '}catch(e){E(e,this)}';
        }

        if (key) {

          expr = (tb ? 'function(){' + expr + '}.call(this)' : '(' + expr + ')') + '?"' + key + '":""';
        } else if (asText) {

          expr = 'function(v){' + (tb ? expr.replace('return ', 'v=') : 'v=(' + expr + ')') + ';return v||v===0?v:""}.call(this)';
        }

        return expr;
      }

      _tmpl.version = brackets.version = 'v2.4.2';

      return _tmpl;
    }();

    /*
      lib/browser/tag/mkdom.js
    
      Includes hacks needed for the Internet Explorer version 9 and below
      See: http://kangax.github.io/compat-table/es5/#ie8
           http://codeplanet.io/dropping-ie8/
    */
    var mkdom = function _mkdom() {
      var reHasYield = /<yield\b/i,
          reYieldAll = /<yield\s*(?:\/>|>([\S\s]*?)<\/yield\s*>|>)/ig,
          reYieldSrc = /<yield\s+to=['"]([^'">]*)['"]\s*>([\S\s]*?)<\/yield\s*>/ig,
          reYieldDest = /<yield\s+from=['"]?([-\w]+)['"]?\s*(?:\/>|>([\S\s]*?)<\/yield\s*>)/ig;
      var rootEls = { tr: 'tbody', th: 'tr', td: 'tr', col: 'colgroup' },
          tblTags = IE_VERSION && IE_VERSION < 10 ? SPECIAL_TAGS_REGEX : /^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?)$/;

      /**
       * Creates a DOM element to wrap the given content. Normally an `DIV`, but can be
       * also a `TABLE`, `SELECT`, `TBODY`, `TR`, or `COLGROUP` element.
       *
       * @param   {string} templ  - The template coming from the custom tag definition
       * @param   {string} [html] - HTML content that comes from the DOM element where you
       *           will mount the tag, mostly the original tag in the page
       * @returns {HTMLElement} DOM element with _templ_ merged through `YIELD` with the _html_.
       */
      function _mkdom(templ, html) {
        var match = templ && templ.match(/^\s*<([-\w]+)/),
            tagName = match && match[1].toLowerCase(),
            el = mkEl('div', isSVGTag(tagName));

        // replace all the yield tags with the tag inner html
        templ = replaceYield(templ, html);

        /* istanbul ignore next */
        if (tblTags.test(tagName)) el = specialTags(el, templ, tagName);else setInnerHTML(el, templ);

        el.stub = true;

        return el;
      }

      /*
        Creates the root element for table or select child elements:
        tr/th/td/thead/tfoot/tbody/caption/col/colgroup/option/optgroup
      */
      function specialTags(el, templ, tagName) {
        var select = tagName[0] === 'o',
            parent = select ? 'select>' : 'table>';

        // trim() is important here, this ensures we don't have artifacts,
        // so we can check if we have only one element inside the parent
        el.innerHTML = '<' + parent + templ.trim() + '</' + parent;
        parent = el.firstChild;

        // returns the immediate parent if tr/th/td/col is the only element, if not
        // returns the whole tree, as this can include additional elements
        if (select) {
          parent.selectedIndex = -1; // for IE9, compatible w/current riot behavior
        } else {
          // avoids insertion of cointainer inside container (ex: tbody inside tbody)
          var tname = rootEls[tagName];
          if (tname && parent.childElementCount === 1) parent = $(tname, parent);
        }
        return parent;
      }

      /*
        Replace the yield tag from any tag template with the innerHTML of the
        original tag in the page
      */
      function replaceYield(templ, html) {
        // do nothing if no yield
        if (!reHasYield.test(templ)) return templ;

        // be careful with #1343 - string on the source having `$1`
        var src = {};

        html = html && html.replace(reYieldSrc, function (_, ref, text) {
          src[ref] = src[ref] || text; // preserve first definition
          return '';
        }).trim();

        return templ.replace(reYieldDest, function (_, ref, def) {
          // yield with from - to attrs
          return src[ref] || def || '';
        }).replace(reYieldAll, function (_, def) {
          // yield without any "from"
          return html || def || '';
        });
      }

      return _mkdom;
    }();

    /**
     * Convert the item looped into an object used to extend the child tag properties
     * @param   { Object } expr - object containing the keys used to extend the children tags
     * @param   { * } key - value to assign to the new object returned
     * @param   { * } val - value containing the position of the item in the array
     * @returns { Object } - new object containing the values of the original item
     *
     * The variables 'key' and 'val' are arbitrary.
     * They depend on the collection type looped (Array, Object)
     * and on the expression used on the each tag
     *
     */
    function mkitem(expr, key, val) {
      var item = {};
      item[expr.key] = key;
      if (expr.pos) item[expr.pos] = val;
      return item;
    }

    /**
     * Unmount the redundant tags
     * @param   { Array } items - array containing the current items to loop
     * @param   { Array } tags - array containing all the children tags
     */
    function unmountRedundant(items, tags) {

      var i = tags.length,
          j = items.length,
          t;

      while (i > j) {
        t = tags[--i];
        tags.splice(i, 1);
        t.unmount();
      }
    }

    /**
     * Move the nested custom tags in non custom loop tags
     * @param   { Object } child - non custom loop tag
     * @param   { Number } i - current position of the loop tag
     */
    function moveNestedTags(child, i) {
      Object.keys(child.tags).forEach(function (tagName) {
        var tag = child.tags[tagName];
        if (isArray(tag)) each(tag, function (t) {
          moveChildTag(t, tagName, i);
        });else moveChildTag(tag, tagName, i);
      });
    }

    /**
     * Adds the elements for a virtual tag
     * @param { Tag } tag - the tag whose root's children will be inserted or appended
     * @param { Node } src - the node that will do the inserting or appending
     * @param { Tag } target - only if inserting, insert before this tag's first child
     */
    function addVirtual(tag, src, target) {
      var el = tag._root,
          sib;
      tag._virts = [];
      while (el) {
        sib = el.nextSibling;
        if (target) src.insertBefore(el, target._root);else src.appendChild(el);

        tag._virts.push(el); // hold for unmounting
        el = sib;
      }
    }

    /**
     * Move virtual tag and all child nodes
     * @param { Tag } tag - first child reference used to start move
     * @param { Node } src  - the node that will do the inserting
     * @param { Tag } target - insert before this tag's first child
     * @param { Number } len - how many child nodes to move
     */
    function moveVirtual(tag, src, target, len) {
      var el = tag._root,
          sib,
          i = 0;
      for (; i < len; i++) {
        sib = el.nextSibling;
        src.insertBefore(el, target._root);
        el = sib;
      }
    }

    /**
     * Manage tags having the 'each'
     * @param   { Object } dom - DOM node we need to loop
     * @param   { Tag } parent - parent tag instance where the dom node is contained
     * @param   { String } expr - string contained in the 'each' attribute
     */
    function _each(dom, parent, expr) {

      // remove the each property from the original tag
      remAttr(dom, 'each');

      var mustReorder = typeof getAttr(dom, 'no-reorder') !== T_STRING || remAttr(dom, 'no-reorder'),
          tagName = getTagName(dom),
          impl = __tagImpl[tagName] || { tmpl: getOuterHTML(dom) },
          useRoot = SPECIAL_TAGS_REGEX.test(tagName),
          root = dom.parentNode,
          ref = document.createTextNode(''),
          child = getTag(dom),
          isOption = tagName.toLowerCase() === 'option',
          // the option tags must be treated differently
      tags = [],
          oldItems = [],
          hasKeys,
          isVirtual = dom.tagName == 'VIRTUAL';

      // parse the each expression
      expr = tmpl.loopKeys(expr);

      // insert a marked where the loop tags will be injected
      root.insertBefore(ref, dom);

      // clean template code
      parent.one('before-mount', function () {

        // remove the original DOM node
        dom.parentNode.removeChild(dom);
        if (root.stub) root = parent.root;
      }).on('update', function () {
        // get the new items collection
        var items = tmpl(expr.val, parent),

        // create a fragment to hold the new DOM nodes to inject in the parent tag
        frag = document.createDocumentFragment();

        // object loop. any changes cause full redraw
        if (!isArray(items)) {
          hasKeys = items || false;
          items = hasKeys ? Object.keys(items).map(function (key) {
            return mkitem(expr, key, items[key]);
          }) : [];
        }

        // loop all the new items
        var i = 0,
            itemsLength = items.length;

        for (; i < itemsLength; i++) {
          // reorder only if the items are objects
          var item = items[i],
              _mustReorder = mustReorder && typeof item == T_OBJECT && !hasKeys,
              oldPos = oldItems.indexOf(item),
              pos = ~oldPos && _mustReorder ? oldPos : i,

          // does a tag exist in this position?
          tag = tags[pos];

          item = !hasKeys && expr.key ? mkitem(expr, item, i) : item;

          // new tag
          if (!_mustReorder && !tag // with no-reorder we just update the old tags
          || _mustReorder && !~oldPos || !tag // by default we always try to reorder the DOM elements
          ) {

              tag = new Tag(impl, {
                parent: parent,
                isLoop: true,
                hasImpl: !!__tagImpl[tagName],
                root: useRoot ? root : dom.cloneNode(),
                item: item
              }, dom.innerHTML);

              tag.mount();

              if (isVirtual) tag._root = tag.root.firstChild; // save reference for further moves or inserts
              // this tag must be appended
              if (i == tags.length || !tags[i]) {
                // fix 1581
                if (isVirtual) addVirtual(tag, frag);else frag.appendChild(tag.root);
              }
              // this tag must be insert
              else {
                  if (isVirtual) addVirtual(tag, root, tags[i]);else root.insertBefore(tag.root, tags[i].root); // #1374 some browsers reset selected here
                  oldItems.splice(i, 0, item);
                }

              tags.splice(i, 0, tag);
              pos = i; // handled here so no move
            } else tag.update(item, true);

          // reorder the tag if it's not located in its previous position
          if (pos !== i && _mustReorder && tags[i] // fix 1581 unable to reproduce it in a test!
          ) {

              // #closes 2040
              if (contains(items, oldItems[i])) {
                // update the DOM
                if (isVirtual) moveVirtual(tag, root, tags[i], dom.childNodes.length);else if (tags[i].root.parentNode) root.insertBefore(tag.root, tags[i].root);
              }

              // update the position attribute if it exists
              if (expr.pos) tag[expr.pos] = i;
              // move the old tag instance
              tags.splice(i, 0, tags.splice(pos, 1)[0]);
              // move the old item
              oldItems.splice(i, 0, oldItems.splice(pos, 1)[0]);
              // if the loop tags are not custom
              // we need to move all their custom tags into the right position
              if (!child && tag.tags) moveNestedTags(tag, i);
            }

          // cache the original item to use it in the events bound to this node
          // and its children
          tag._item = item;
          // cache the real parent tag internally
          defineProperty(tag, '_parent', parent);
        }

        // remove the redundant tags
        unmountRedundant(items, tags);

        // insert the new nodes
        root.insertBefore(frag, ref);
        if (isOption) {

          // #1374 FireFox bug in <option selected={expression}>
          if (FIREFOX && !root.multiple) {
            for (var n = 0; n < root.length; n++) {
              if (root[n].__riot1374) {
                root.selectedIndex = n; // clear other options
                delete root[n].__riot1374;
                break;
              }
            }
          }
        }

        // set the 'tags' property of the parent tag
        // if child is 'undefined' it means that we don't need to set this property
        // for example:
        // we don't need store the `myTag.tags['div']` property if we are looping a div tag
        // but we need to track the `myTag.tags['child']` property looping a custom child node named `child`
        if (child) parent.tags[tagName] = tags;

        // clone the items array
        oldItems = items.slice();
      });
    }
    /**
     * Object that will be used to inject and manage the css of every tag instance
     */
    var styleManager = function (_riot) {

      if (!window) return { // skip injection on the server
        add: function () {},
        inject: function () {}
      };

      var styleNode = function () {
        // create a new style element with the correct type
        var newNode = mkEl('style');
        setAttr(newNode, 'type', 'text/css');

        // replace any user node or insert the new one into the head
        var userNode = $('style[type=riot]');
        if (userNode) {
          if (userNode.id) newNode.id = userNode.id;
          userNode.parentNode.replaceChild(newNode, userNode);
        } else document.getElementsByTagName('head')[0].appendChild(newNode);

        return newNode;
      }();

      // Create cache and shortcut to the correct property
      var cssTextProp = styleNode.styleSheet,
          stylesToInject = '';

      // Expose the style node in a non-modificable property
      Object.defineProperty(_riot, 'styleNode', {
        value: styleNode,
        writable: true
      });

      /**
       * Public api
       */
      return {
        /**
         * Save a tag style to be later injected into DOM
         * @param   { String } css [description]
         */
        add: function (css) {
          stylesToInject += css;
        },
        /**
         * Inject all previously saved tag styles into DOM
         * innerHTML seems slow: http://jsperf.com/riot-insert-style
         */
        inject: function () {
          if (stylesToInject) {
            if (cssTextProp) cssTextProp.cssText += stylesToInject;else styleNode.innerHTML += stylesToInject;
            stylesToInject = '';
          }
        }
      };
    }(riot);

    function parseNamedElements(root, tag, childTags, forceParsingNamed) {

      walk(root, function (dom) {
        if (dom.nodeType == 1) {
          dom.isLoop = dom.isLoop || dom.parentNode && dom.parentNode.isLoop || getAttr(dom, 'each') ? 1 : 0;

          // custom child tag
          if (childTags) {
            var child = getTag(dom);

            if (child && !dom.isLoop) childTags.push(initChildTag(child, { root: dom, parent: tag }, dom.innerHTML, tag));
          }

          if (!dom.isLoop || forceParsingNamed) setNamed(dom, tag, []);
        }
      });
    }

    function parseExpressions(root, tag, expressions) {

      function addExpr(dom, val, extra) {
        if (tmpl.hasExpr(val)) {
          expressions.push(extend({ dom: dom, expr: val }, extra));
        }
      }

      walk(root, function (dom) {
        var type = dom.nodeType,
            attr;

        // text node
        if (type == 3 && dom.parentNode.tagName != 'STYLE') addExpr(dom, dom.nodeValue);
        if (type != 1) return;

        /* element */

        // loop
        attr = getAttr(dom, 'each');

        if (attr) {
          _each(dom, tag, attr);return false;
        }

        // attribute expressions
        each(dom.attributes, function (attr) {
          var name = attr.name,
              bool = name.split('__')[1];

          addExpr(dom, attr.value, { attr: bool || name, bool: bool });
          if (bool) {
            remAttr(dom, name);return false;
          }
        });

        // skip custom tags
        if (getTag(dom)) return false;
      });
    }
    function Tag(impl, conf, innerHTML) {

      var self = riot.observable(this),
          opts = inherit(conf.opts) || {},
          parent = conf.parent,
          isLoop = conf.isLoop,
          hasImpl = conf.hasImpl,
          item = cleanUpData(conf.item),
          expressions = [],
          childTags = [],
          root = conf.root,
          tagName = root.tagName.toLowerCase(),
          attr = {},
          propsInSyncWithParent = [],
          dom;

      // only call unmount if we have a valid __tagImpl (has name property)
      if (impl.name && root._tag) root._tag.unmount(true);

      // not yet mounted
      this.isMounted = false;
      root.isLoop = isLoop;

      // keep a reference to the tag just created
      // so we will be able to mount this tag multiple times
      root._tag = this;

      // create a unique id to this tag
      // it could be handy to use it also to improve the virtual dom rendering speed
      defineProperty(this, '_riot_id', ++__uid); // base 1 allows test !t._riot_id

      extend(this, { parent: parent, root: root, opts: opts }, item);
      // protect the "tags" property from being overridden
      defineProperty(this, 'tags', {});

      // grab attributes
      each(root.attributes, function (el) {
        var val = el.value;
        // remember attributes with expressions only
        if (tmpl.hasExpr(val)) attr[el.name] = val;
      });

      dom = mkdom(impl.tmpl, innerHTML);

      // options
      function updateOpts() {
        var ctx = hasImpl && isLoop ? self : parent || self;

        // update opts from current DOM attributes
        each(root.attributes, function (el) {
          var val = el.value;
          opts[toCamel(el.name)] = tmpl.hasExpr(val) ? tmpl(val, ctx) : val;
        });
        // recover those with expressions
        each(Object.keys(attr), function (name) {
          opts[toCamel(name)] = tmpl(attr[name], ctx);
        });
      }

      function normalizeData(data) {
        for (var key in item) {
          if (typeof self[key] !== T_UNDEF && isWritable(self, key)) self[key] = data[key];
        }
      }

      function inheritFrom(target) {
        each(Object.keys(target), function (k) {
          // some properties must be always in sync with the parent tag
          var mustSync = !RESERVED_WORDS_BLACKLIST.test(k) && contains(propsInSyncWithParent, k);

          if (typeof self[k] === T_UNDEF || mustSync) {
            // track the property to keep in sync
            // so we can keep it updated
            if (!mustSync) propsInSyncWithParent.push(k);
            self[k] = target[k];
          }
        });
      }

      /**
       * Update the tag expressions and options
       * @param   { * }  data - data we want to use to extend the tag properties
       * @param   { Boolean } isInherited - is this update coming from a parent tag?
       * @returns { self }
       */
      defineProperty(this, 'update', function (data, isInherited) {

        // make sure the data passed will not override
        // the component core methods
        data = cleanUpData(data);
        // inherit properties from the parent in loop
        if (isLoop) {
          inheritFrom(self.parent);
        }
        // normalize the tag properties in case an item object was initially passed
        if (data && isObject(item)) {
          normalizeData(data);
          item = data;
        }
        extend(self, data);
        updateOpts();
        self.trigger('update', data);
        update(expressions, self);

        // the updated event will be triggered
        // once the DOM will be ready and all the re-flows are completed
        // this is useful if you want to get the "real" root properties
        // 4 ex: root.offsetWidth ...
        if (isInherited && self.parent)
          // closes #1599
          self.parent.one('updated', function () {
            self.trigger('updated');
          });else rAF(function () {
          self.trigger('updated');
        });

        return this;
      });

      defineProperty(this, 'mixin', function () {
        each(arguments, function (mix) {
          var instance,
              props = [],
              obj;

          mix = typeof mix === T_STRING ? riot.mixin(mix) : mix;

          // check if the mixin is a function
          if (isFunction(mix)) {
            // create the new mixin instance
            instance = new mix();
          } else instance = mix;

          var proto = Object.getPrototypeOf(instance);

          // build multilevel prototype inheritance chain property list
          do props = props.concat(Object.getOwnPropertyNames(obj || instance)); while (obj = Object.getPrototypeOf(obj || instance));

          // loop the keys in the function prototype or the all object keys
          each(props, function (key) {
            // bind methods to self
            // allow mixins to override other properties/parent mixins
            if (key != 'init') {
              // check for getters/setters
              var descriptor = Object.getOwnPropertyDescriptor(instance, key) || Object.getOwnPropertyDescriptor(proto, key);
              var hasGetterSetter = descriptor && (descriptor.get || descriptor.set);

              // apply method only if it does not already exist on the instance
              if (!self.hasOwnProperty(key) && hasGetterSetter) {
                Object.defineProperty(self, key, descriptor);
              } else {
                self[key] = isFunction(instance[key]) ? instance[key].bind(self) : instance[key];
              }
            }
          });

          // init method will be called automatically
          if (instance.init) instance.init.bind(self)();
        });
        return this;
      });

      defineProperty(this, 'mount', function () {

        updateOpts();

        // add global mixins
        var globalMixin = riot.mixin(GLOBAL_MIXIN);

        if (globalMixin) for (var i in globalMixin) if (globalMixin.hasOwnProperty(i)) self.mixin(globalMixin[i]);

        // children in loop should inherit from true parent
        if (self._parent && self._parent.root.isLoop) {
          inheritFrom(self._parent);
        }

        // initialiation
        if (impl.fn) impl.fn.call(self, opts);

        // parse layout after init. fn may calculate args for nested custom tags
        parseExpressions(dom, self, expressions);

        // mount the child tags
        toggle(true);

        // update the root adding custom attributes coming from the compiler
        // it fixes also #1087
        if (impl.attrs) walkAttributes(impl.attrs, function (k, v) {
          setAttr(root, k, v);
        });
        if (impl.attrs || hasImpl) parseExpressions(self.root, self, expressions);

        if (!self.parent || isLoop) self.update(item);

        // internal use only, fixes #403
        self.trigger('before-mount');

        if (isLoop && !hasImpl) {
          // update the root attribute for the looped elements
          root = dom.firstChild;
        } else {
          while (dom.firstChild) root.appendChild(dom.firstChild);
          if (root.stub) root = parent.root;
        }

        defineProperty(self, 'root', root);

        // parse the named dom nodes in the looped child
        // adding them to the parent as well
        if (isLoop) parseNamedElements(self.root, self.parent, null, true);

        // if it's not a child tag we can trigger its mount event
        if (!self.parent || self.parent.isMounted) {
          self.isMounted = true;
          self.trigger('mount');
        }
        // otherwise we need to wait that the parent event gets triggered
        else self.parent.one('mount', function () {
            // avoid to trigger the `mount` event for the tags
            // not visible included in an if statement
            if (!isInStub(self.root)) {
              self.parent.isMounted = self.isMounted = true;
              self.trigger('mount');
            }
          });
      });

      defineProperty(this, 'unmount', function (keepRootTag) {
        var el = root,
            p = el.parentNode,
            ptag,
            tagIndex = __virtualDom.indexOf(self);

        self.trigger('before-unmount');

        // remove this tag instance from the global virtualDom variable
        if (~tagIndex) __virtualDom.splice(tagIndex, 1);

        if (p) {

          if (parent) {
            ptag = getImmediateCustomParentTag(parent);
            // remove this tag from the parent tags object
            // if there are multiple nested tags with same name..
            // remove this element form the array
            if (isArray(ptag.tags[tagName])) each(ptag.tags[tagName], function (tag, i) {
              if (tag._riot_id == self._riot_id) ptag.tags[tagName].splice(i, 1);
            });else
              // otherwise just delete the tag instance
              ptag.tags[tagName] = undefined;
          } else while (el.firstChild) el.removeChild(el.firstChild);

          if (!keepRootTag) p.removeChild(el);else {
            // the riot-tag and the data-is attributes aren't needed anymore, remove them
            remAttr(p, RIOT_TAG_IS);
            remAttr(p, RIOT_TAG); // this will be removed in riot 3.0.0
          }
        }

        if (this._virts) {
          each(this._virts, function (v) {
            if (v.parentNode) v.parentNode.removeChild(v);
          });
        }

        self.trigger('unmount');
        toggle();
        self.off('*');
        self.isMounted = false;
        delete root._tag;
      });

      // proxy function to bind updates
      // dispatched from a parent tag
      function onChildUpdate(data) {
        self.update(data, true);
      }

      function toggle(isMount) {

        // mount/unmount children
        each(childTags, function (child) {
          child[isMount ? 'mount' : 'unmount']();
        });

        // listen/unlisten parent (events flow one way from parent to children)
        if (!parent) return;
        var evt = isMount ? 'on' : 'off';

        // the loop tags will be always in sync with the parent automatically
        if (isLoop) parent[evt]('unmount', self.unmount);else {
          parent[evt]('update', onChildUpdate)[evt]('unmount', self.unmount);
        }
      }

      // named elements available for fn
      parseNamedElements(dom, this, childTags);
    }
    /**
     * Attach an event to a DOM node
     * @param { String } name - event name
     * @param { Function } handler - event callback
     * @param { Object } dom - dom node
     * @param { Tag } tag - tag instance
     */
    function setEventHandler(name, handler, dom, tag) {

      dom[name] = function (e) {

        var ptag = tag._parent,
            item = tag._item,
            el;

        if (!item) while (ptag && !item) {
          item = ptag._item;
          ptag = ptag._parent;
        }

        // cross browser event fix
        e = e || window.event;

        // override the event properties
        if (isWritable(e, 'currentTarget')) e.currentTarget = dom;
        if (isWritable(e, 'target')) e.target = e.srcElement;
        if (isWritable(e, 'which')) e.which = e.charCode || e.keyCode;

        e.item = item;

        // prevent default behaviour (by default)
        if (handler.call(tag, e) !== true && !/radio|check/.test(dom.type)) {
          if (e.preventDefault) e.preventDefault();
          e.returnValue = false;
        }

        if (!e.preventUpdate) {
          el = item ? getImmediateCustomParentTag(ptag) : tag;
          el.update();
        }
      };
    }

    /**
     * Insert a DOM node replacing another one (used by if- attribute)
     * @param   { Object } root - parent node
     * @param   { Object } node - node replaced
     * @param   { Object } before - node added
     */
    function insertTo(root, node, before) {
      if (!root) return;
      root.insertBefore(before, node);
      root.removeChild(node);
    }

    /**
     * Update the expressions in a Tag instance
     * @param   { Array } expressions - expression that must be re evaluated
     * @param   { Tag } tag - tag instance
     */
    function update(expressions, tag) {

      each(expressions, function (expr, i) {

        var dom = expr.dom,
            attrName = expr.attr,
            value = tmpl(expr.expr, tag),
            parent = expr.parent || expr.dom.parentNode;

        if (expr.bool) {
          value = !!value;
        } else if (value == null) {
          value = '';
        }

        // #1638: regression of #1612, update the dom only if the value of the
        // expression was changed
        if (expr.value === value) {
          return;
        }
        expr.value = value;

        // textarea and text nodes has no attribute name
        if (!attrName) {
          // about #815 w/o replace: the browser converts the value to a string,
          // the comparison by "==" does too, but not in the server
          value += '';
          // test for parent avoids error with invalid assignment to nodeValue
          if (parent) {
            // cache the parent node because somehow it will become null on IE
            // on the next iteration
            expr.parent = parent;
            if (parent.tagName === 'TEXTAREA') {
              parent.value = value; // #1113
              if (!IE_VERSION) dom.nodeValue = value; // #1625 IE throws here, nodeValue
            } // will be available on 'updated'
            else dom.nodeValue = value;
          }
          return;
        }

        // ~~#1612: look for changes in dom.value when updating the value~~
        if (attrName === 'value') {
          if (dom.value !== value) {
            dom.value = value;
            setAttr(dom, attrName, value);
          }
          return;
        } else {
          // remove original attribute
          remAttr(dom, attrName);
        }

        // event handler
        if (isFunction(value)) {
          setEventHandler(attrName, value, dom, tag);

          // if- conditional
        } else if (attrName == 'if') {
          var stub = expr.stub,
              add = function () {
            insertTo(stub.parentNode, stub, dom);
          },
              remove = function () {
            insertTo(dom.parentNode, dom, stub);
          };

          // add to DOM
          if (value) {
            if (stub) {
              add();
              dom.inStub = false;
              // avoid to trigger the mount event if the tags is not visible yet
              // maybe we can optimize this avoiding to mount the tag at all
              if (!isInStub(dom)) {
                walk(dom, function (el) {
                  if (el._tag && !el._tag.isMounted) el._tag.isMounted = !!el._tag.trigger('mount');
                });
              }
            }
            // remove from DOM
          } else {
            stub = expr.stub = stub || document.createTextNode('');
            // if the parentNode is defined we can easily replace the tag
            if (dom.parentNode) remove();
            // otherwise we need to wait the updated event
            else (tag.parent || tag).one('updated', remove);

            dom.inStub = true;
          }
          // show / hide
        } else if (attrName === 'show') {
          dom.style.display = value ? '' : 'none';
        } else if (attrName === 'hide') {
          dom.style.display = value ? 'none' : '';
        } else if (expr.bool) {
          dom[attrName] = value;
          if (value) setAttr(dom, attrName, attrName);
          if (FIREFOX && attrName === 'selected' && dom.tagName === 'OPTION') {
            dom.__riot1374 = value; // #1374
          }
        } else if (value === 0 || value && typeof value !== T_OBJECT) {
          // <img src="{ expr }">
          if (startsWith(attrName, RIOT_PREFIX) && attrName != RIOT_TAG) {
            attrName = attrName.slice(RIOT_PREFIX.length);
          }
          setAttr(dom, attrName, value);
        }
      });
    }
    /**
     * Specialized function for looping an array-like collection with `each={}`
     * @param   { Array } els - collection of items
     * @param   {Function} fn - callback function
     * @returns { Array } the array looped
     */
    function each(els, fn) {
      var len = els ? els.length : 0;

      for (var i = 0, el; i < len; i++) {
        el = els[i];
        // return false -> current item was removed by fn during the loop
        if (el != null && fn(el, i) === false) i--;
      }
      return els;
    }

    /**
     * Detect if the argument passed is a function
     * @param   { * } v - whatever you want to pass to this function
     * @returns { Boolean } -
     */
    function isFunction(v) {
      return typeof v === T_FUNCTION || false; // avoid IE problems
    }

    /**
     * Get the outer html of any DOM node SVGs included
     * @param   { Object } el - DOM node to parse
     * @returns { String } el.outerHTML
     */
    function getOuterHTML(el) {
      if (el.outerHTML) return el.outerHTML;
      // some browsers do not support outerHTML on the SVGs tags
      else {
          var container = mkEl('div');
          container.appendChild(el.cloneNode(true));
          return container.innerHTML;
        }
    }

    /**
     * Set the inner html of any DOM node SVGs included
     * @param { Object } container - DOM node where we will inject the new html
     * @param { String } html - html to inject
     */
    function setInnerHTML(container, html) {
      if (typeof container.innerHTML != T_UNDEF) container.innerHTML = html;
      // some browsers do not support innerHTML on the SVGs tags
      else {
          var doc = new DOMParser().parseFromString(html, 'application/xml');
          container.appendChild(container.ownerDocument.importNode(doc.documentElement, true));
        }
    }

    /**
     * Checks wether a DOM node must be considered part of an svg document
     * @param   { String }  name - tag name
     * @returns { Boolean } -
     */
    function isSVGTag(name) {
      return ~SVG_TAGS_LIST.indexOf(name);
    }

    /**
     * Detect if the argument passed is an object, exclude null.
     * NOTE: Use isObject(x) && !isArray(x) to excludes arrays.
     * @param   { * } v - whatever you want to pass to this function
     * @returns { Boolean } -
     */
    function isObject(v) {
      return v && typeof v === T_OBJECT; // typeof null is 'object'
    }

    /**
     * Remove any DOM attribute from a node
     * @param   { Object } dom - DOM node we want to update
     * @param   { String } name - name of the property we want to remove
     */
    function remAttr(dom, name) {
      dom.removeAttribute(name);
    }

    /**
     * Convert a string containing dashes to camel case
     * @param   { String } string - input string
     * @returns { String } my-string -> myString
     */
    function toCamel(string) {
      return string.replace(/-(\w)/g, function (_, c) {
        return c.toUpperCase();
      });
    }

    /**
     * Get the value of any DOM attribute on a node
     * @param   { Object } dom - DOM node we want to parse
     * @param   { String } name - name of the attribute we want to get
     * @returns { String | undefined } name of the node attribute whether it exists
     */
    function getAttr(dom, name) {
      return dom.getAttribute(name);
    }

    /**
     * Set any DOM/SVG attribute
     * @param { Object } dom - DOM node we want to update
     * @param { String } name - name of the property we want to set
     * @param { String } val - value of the property we want to set
     */
    function setAttr(dom, name, val) {
      var xlink = XLINK_REGEX.exec(name);
      if (xlink && xlink[1]) dom.setAttributeNS(XLINK_NS, xlink[1], val);else dom.setAttribute(name, val);
    }

    /**
     * Detect the tag implementation by a DOM node
     * @param   { Object } dom - DOM node we need to parse to get its tag implementation
     * @returns { Object } it returns an object containing the implementation of a custom tag (template and boot function)
     */
    function getTag(dom) {
      return dom.tagName && __tagImpl[getAttr(dom, RIOT_TAG_IS) || getAttr(dom, RIOT_TAG) || dom.tagName.toLowerCase()];
    }
    /**
     * Add a child tag to its parent into the `tags` object
     * @param   { Object } tag - child tag instance
     * @param   { String } tagName - key where the new tag will be stored
     * @param   { Object } parent - tag instance where the new child tag will be included
     */
    function addChildTag(tag, tagName, parent) {
      var cachedTag = parent.tags[tagName];

      // if there are multiple children tags having the same name
      if (cachedTag) {
        // if the parent tags property is not yet an array
        // create it adding the first cached tag
        if (!isArray(cachedTag))
          // don't add the same tag twice
          if (cachedTag !== tag) parent.tags[tagName] = [cachedTag];
        // add the new nested tag to the array
        if (!contains(parent.tags[tagName], tag)) parent.tags[tagName].push(tag);
      } else {
        parent.tags[tagName] = tag;
      }
    }

    /**
     * Move the position of a custom tag in its parent tag
     * @param   { Object } tag - child tag instance
     * @param   { String } tagName - key where the tag was stored
     * @param   { Number } newPos - index where the new tag will be stored
     */
    function moveChildTag(tag, tagName, newPos) {
      var parent = tag.parent,
          tags;
      // no parent no move
      if (!parent) return;

      tags = parent.tags[tagName];

      if (isArray(tags)) tags.splice(newPos, 0, tags.splice(tags.indexOf(tag), 1)[0]);else addChildTag(tag, tagName, parent);
    }

    /**
     * Create a new child tag including it correctly into its parent
     * @param   { Object } child - child tag implementation
     * @param   { Object } opts - tag options containing the DOM node where the tag will be mounted
     * @param   { String } innerHTML - inner html of the child node
     * @param   { Object } parent - instance of the parent tag including the child custom tag
     * @returns { Object } instance of the new child tag just created
     */
    function initChildTag(child, opts, innerHTML, parent) {
      var tag = new Tag(child, opts, innerHTML),
          tagName = getTagName(opts.root),
          ptag = getImmediateCustomParentTag(parent);
      // fix for the parent attribute in the looped elements
      tag.parent = ptag;
      // store the real parent tag
      // in some cases this could be different from the custom parent tag
      // for example in nested loops
      tag._parent = parent;

      // add this tag to the custom parent tag
      addChildTag(tag, tagName, ptag);
      // and also to the real parent tag
      if (ptag !== parent) addChildTag(tag, tagName, parent);
      // empty the child node once we got its template
      // to avoid that its children get compiled multiple times
      opts.root.innerHTML = '';

      return tag;
    }

    /**
     * Loop backward all the parents tree to detect the first custom parent tag
     * @param   { Object } tag - a Tag instance
     * @returns { Object } the instance of the first custom parent tag found
     */
    function getImmediateCustomParentTag(tag) {
      var ptag = tag;
      while (!getTag(ptag.root)) {
        if (!ptag.parent) break;
        ptag = ptag.parent;
      }
      return ptag;
    }

    /**
     * Helper function to set an immutable property
     * @param   { Object } el - object where the new property will be set
     * @param   { String } key - object key where the new property will be stored
     * @param   { * } value - value of the new property
    * @param   { Object } options - set the propery overriding the default options
     * @returns { Object } - the initial object
     */
    function defineProperty(el, key, value, options) {
      Object.defineProperty(el, key, extend({
        value: value,
        enumerable: false,
        writable: false,
        configurable: true
      }, options));
      return el;
    }

    /**
     * Get the tag name of any DOM node
     * @param   { Object } dom - DOM node we want to parse
     * @returns { String } name to identify this dom node in riot
     */
    function getTagName(dom) {
      var child = getTag(dom),
          namedTag = getAttr(dom, 'name'),
          tagName = namedTag && !tmpl.hasExpr(namedTag) ? namedTag : child ? child.name : dom.tagName.toLowerCase();

      return tagName;
    }

    /**
     * Extend any object with other properties
     * @param   { Object } src - source object
     * @returns { Object } the resulting extended object
     *
     * var obj = { foo: 'baz' }
     * extend(obj, {bar: 'bar', foo: 'bar'})
     * console.log(obj) => {bar: 'bar', foo: 'bar'}
     *
     */
    function extend(src) {
      var obj,
          args = arguments;
      for (var i = 1; i < args.length; ++i) {
        if (obj = args[i]) {
          for (var key in obj) {
            // check if this property of the source object could be overridden
            if (isWritable(src, key)) src[key] = obj[key];
          }
        }
      }
      return src;
    }

    /**
     * Check whether an array contains an item
     * @param   { Array } arr - target array
     * @param   { * } item - item to test
     * @returns { Boolean } Does 'arr' contain 'item'?
     */
    function contains(arr, item) {
      return ~arr.indexOf(item);
    }

    /**
     * Check whether an object is a kind of array
     * @param   { * } a - anything
     * @returns {Boolean} is 'a' an array?
     */
    function isArray(a) {
      return Array.isArray(a) || a instanceof Array;
    }

    /**
     * Detect whether a property of an object could be overridden
     * @param   { Object }  obj - source object
     * @param   { String }  key - object property
     * @returns { Boolean } is this property writable?
     */
    function isWritable(obj, key) {
      var props = Object.getOwnPropertyDescriptor(obj, key);
      return typeof obj[key] === T_UNDEF || props && props.writable;
    }

    /**
     * With this function we avoid that the internal Tag methods get overridden
     * @param   { Object } data - options we want to use to extend the tag instance
     * @returns { Object } clean object without containing the riot internal reserved words
     */
    function cleanUpData(data) {
      if (!(data instanceof Tag) && !(data && typeof data.trigger == T_FUNCTION)) return data;

      var o = {};
      for (var key in data) {
        if (!RESERVED_WORDS_BLACKLIST.test(key)) o[key] = data[key];
      }
      return o;
    }

    /**
     * Walk down recursively all the children tags starting dom node
     * @param   { Object }   dom - starting node where we will start the recursion
     * @param   { Function } fn - callback to transform the child node just found
     */
    function walk(dom, fn) {
      if (dom) {
        // stop the recursion
        if (fn(dom) === false) return;else {
          dom = dom.firstChild;

          while (dom) {
            walk(dom, fn);
            dom = dom.nextSibling;
          }
        }
      }
    }

    /**
     * Minimize risk: only zero or one _space_ between attr & value
     * @param   { String }   html - html string we want to parse
     * @param   { Function } fn - callback function to apply on any attribute found
     */
    function walkAttributes(html, fn) {
      var m,
          re = /([-\w]+) ?= ?(?:"([^"]*)|'([^']*)|({[^}]*}))/g;

      while (m = re.exec(html)) {
        fn(m[1].toLowerCase(), m[2] || m[3] || m[4]);
      }
    }

    /**
     * Check whether a DOM node is in stub mode, useful for the riot 'if' directive
     * @param   { Object }  dom - DOM node we want to parse
     * @returns { Boolean } -
     */
    function isInStub(dom) {
      while (dom) {
        if (dom.inStub) return true;
        dom = dom.parentNode;
      }
      return false;
    }

    /**
     * Create a generic DOM node
     * @param   { String } name - name of the DOM node we want to create
     * @param   { Boolean } isSvg - should we use a SVG as parent node?
     * @returns { Object } DOM node just created
     */
    function mkEl(name, isSvg) {
      return isSvg ? document.createElementNS('http://www.w3.org/2000/svg', 'svg') : document.createElement(name);
    }

    /**
     * Shorter and fast way to select multiple nodes in the DOM
     * @param   { String } selector - DOM selector
     * @param   { Object } ctx - DOM node where the targets of our search will is located
     * @returns { Object } dom nodes found
     */
    function $$(selector, ctx) {
      return (ctx || document).querySelectorAll(selector);
    }

    /**
     * Shorter and fast way to select a single node in the DOM
     * @param   { String } selector - unique dom selector
     * @param   { Object } ctx - DOM node where the target of our search will is located
     * @returns { Object } dom node found
     */
    function $(selector, ctx) {
      return (ctx || document).querySelector(selector);
    }

    /**
     * Simple object prototypal inheritance
     * @param   { Object } parent - parent object
     * @returns { Object } child instance
     */
    function inherit(parent) {
      return Object.create(parent || null);
    }

    /**
     * Get the name property needed to identify a DOM node in riot
     * @param   { Object } dom - DOM node we need to parse
     * @returns { String | undefined } give us back a string to identify this dom node
     */
    function getNamedKey(dom) {
      return getAttr(dom, 'id') || getAttr(dom, 'name');
    }

    /**
     * Set the named properties of a tag element
     * @param { Object } dom - DOM node we need to parse
     * @param { Object } parent - tag instance where the named dom element will be eventually added
     * @param { Array } keys - list of all the tag instance properties
     */
    function setNamed(dom, parent, keys) {
      // get the key value we want to add to the tag instance
      var key = getNamedKey(dom),
          isArr,

      // add the node detected to a tag instance using the named property
      add = function (value) {
        // avoid to override the tag properties already set
        if (contains(keys, key)) return;
        // check whether this value is an array
        isArr = isArray(value);
        // if the key was never set
        if (!value)
          // set it once on the tag instance
          parent[key] = dom;
          // if it was an array and not yet set
        else if (!isArr || isArr && !contains(value, dom)) {
            // add the dom node into the array
            if (isArr) value.push(dom);else parent[key] = [value, dom];
          }
      };

      // skip the elements with no named properties
      if (!key) return;

      // check whether this key has been already evaluated
      if (tmpl.hasExpr(key))
        // wait the first updated event only once
        parent.one('mount', function () {
          key = getNamedKey(dom);
          add(parent[key]);
        });else add(parent[key]);
    }

    /**
     * Faster String startsWith alternative
     * @param   { String } src - source string
     * @param   { String } str - test string
     * @returns { Boolean } -
     */
    function startsWith(src, str) {
      return src.slice(0, str.length) === str;
    }

    /**
     * requestAnimationFrame function
     * Adapted from https://gist.github.com/paulirish/1579671, license MIT
     */
    var rAF = function (w) {
      var raf = w.requestAnimationFrame || w.mozRequestAnimationFrame || w.webkitRequestAnimationFrame;

      if (!raf || /iP(ad|hone|od).*OS 6/.test(w.navigator.userAgent)) {
        // buggy iOS6
        var lastTime = 0;

        raf = function (cb) {
          var nowtime = Date.now(),
              timeout = Math.max(16 - (nowtime - lastTime), 0);
          setTimeout(function () {
            cb(lastTime = nowtime + timeout);
          }, timeout);
        };
      }
      return raf;
    }(window || {});

    /**
     * Mount a tag creating new Tag instance
     * @param   { Object } root - dom node where the tag will be mounted
     * @param   { String } tagName - name of the riot tag we want to mount
     * @param   { Object } opts - options to pass to the Tag instance
     * @returns { Tag } a new Tag instance
     */
    function mountTo(root, tagName, opts) {
      var tag = __tagImpl[tagName],

      // cache the inner HTML to fix #855
      innerHTML = root._innerHTML = root._innerHTML || root.innerHTML;

      // clear the inner html
      root.innerHTML = '';

      if (tag && root) tag = new Tag(tag, { root: root, opts: opts }, innerHTML);

      if (tag && tag.mount) {
        tag.mount();
        // add this tag to the virtualDom variable
        if (!contains(__virtualDom, tag)) __virtualDom.push(tag);
      }

      return tag;
    }
    /**
     * Riot public api
     */

    // share methods for other riot parts, e.g. compiler
    riot.util = { brackets: brackets, tmpl: tmpl };

    /**
     * Create a mixin that could be globally shared across all the tags
     */
    riot.mixin = function () {
      var mixins = {},
          globals = mixins[GLOBAL_MIXIN] = {},
          _id = 0;

      /**
       * Create/Return a mixin by its name
       * @param   { String }  name - mixin name (global mixin if object)
       * @param   { Object }  mixin - mixin logic
       * @param   { Boolean } g - is global?
       * @returns { Object }  the mixin logic
       */
      return function (name, mixin, g) {
        // Unnamed global
        if (isObject(name)) {
          riot.mixin('__unnamed_' + _id++, name, true);
          return;
        }

        var store = g ? globals : mixins;

        // Getter
        if (!mixin) {
          if (typeof store[name] === T_UNDEF) {
            throw new Error('Unregistered mixin: ' + name);
          }
          return store[name];
        }
        // Setter
        if (isFunction(mixin)) {
          extend(mixin.prototype, store[name] || {});
          store[name] = mixin;
        } else {
          store[name] = extend(store[name] || {}, mixin);
        }
      };
    }();

    /**
     * Create a new riot tag implementation
     * @param   { String }   name - name/id of the new riot tag
     * @param   { String }   html - tag template
     * @param   { String }   css - custom tag css
     * @param   { String }   attrs - root tag attributes
     * @param   { Function } fn - user function
     * @returns { String } name/id of the tag just created
     */
    riot.tag = function (name, html, css, attrs, fn) {
      if (isFunction(attrs)) {
        fn = attrs;
        if (/^[\w\-]+\s?=/.test(css)) {
          attrs = css;
          css = '';
        } else attrs = '';
      }
      if (css) {
        if (isFunction(css)) fn = css;else styleManager.add(css);
      }
      name = name.toLowerCase();
      __tagImpl[name] = { name: name, tmpl: html, attrs: attrs, fn: fn };
      return name;
    };

    /**
     * Create a new riot tag implementation (for use by the compiler)
     * @param   { String }   name - name/id of the new riot tag
     * @param   { String }   html - tag template
     * @param   { String }   css - custom tag css
     * @param   { String }   attrs - root tag attributes
     * @param   { Function } fn - user function
     * @returns { String } name/id of the tag just created
     */
    riot.tag2 = function (name, html, css, attrs, fn) {
      if (css) styleManager.add(css);
      //if (bpair) riot.settings.brackets = bpair
      __tagImpl[name] = { name: name, tmpl: html, attrs: attrs, fn: fn };
      return name;
    };

    /**
     * Mount a tag using a specific tag implementation
     * @param   { String } selector - tag DOM selector
     * @param   { String } tagName - tag implementation name
     * @param   { Object } opts - tag logic
     * @returns { Array } new tags instances
     */
    riot.mount = function (selector, tagName, opts) {

      var els,
          allTags,
          tags = [];

      // helper functions

      function addRiotTags(arr) {
        var list = '';
        each(arr, function (e) {
          if (!/[^-\w]/.test(e)) {
            e = e.trim().toLowerCase();
            list += ',[' + RIOT_TAG_IS + '="' + e + '"],[' + RIOT_TAG + '="' + e + '"]';
          }
        });
        return list;
      }

      function selectAllTags() {
        var keys = Object.keys(__tagImpl);
        return keys + addRiotTags(keys);
      }

      function pushTags(root) {
        if (root.tagName) {
          var riotTag = getAttr(root, RIOT_TAG_IS) || getAttr(root, RIOT_TAG);

          // have tagName? force riot-tag to be the same
          if (tagName && riotTag !== tagName) {
            riotTag = tagName;
            setAttr(root, RIOT_TAG_IS, tagName);
            setAttr(root, RIOT_TAG, tagName); // this will be removed in riot 3.0.0
          }
          var tag = mountTo(root, riotTag || root.tagName.toLowerCase(), opts);

          if (tag) tags.push(tag);
        } else if (root.length) {
          each(root, pushTags); // assume nodeList
        }
      }

      // ----- mount code -----

      // inject styles into DOM
      styleManager.inject();

      if (isObject(tagName)) {
        opts = tagName;
        tagName = 0;
      }

      // crawl the DOM to find the tag
      if (typeof selector === T_STRING) {
        if (selector === '*')
          // select all the tags registered
          // and also the tags found with the riot-tag attribute set
          selector = allTags = selectAllTags();else
          // or just the ones named like the selector
          selector += addRiotTags(selector.split(/, */));

        // make sure to pass always a selector
        // to the querySelectorAll function
        els = selector ? $$(selector) : [];
      } else
        // probably you have passed already a tag or a NodeList
        els = selector;

      // select all the registered and mount them inside their root elements
      if (tagName === '*') {
        // get all custom tags
        tagName = allTags || selectAllTags();
        // if the root els it's just a single tag
        if (els.tagName) els = $$(tagName, els);else {
          // select all the children for all the different root elements
          var nodeList = [];
          each(els, function (_el) {
            nodeList.push($$(tagName, _el));
          });
          els = nodeList;
        }
        // get rid of the tagName
        tagName = 0;
      }

      pushTags(els);

      return tags;
    };

    /**
     * Update all the tags instances created
     * @returns { Array } all the tags instances
     */
    riot.update = function () {
      return each(__virtualDom, function (tag) {
        tag.update();
      });
    };

    /**
     * Export the Virtual DOM
     */
    riot.vdom = __virtualDom;

    /**
     * Export the Tag constructor
     */
    riot.Tag = Tag;
    /* istanbul ignore next */

    // istanbul ignore next
    function safeRegex(re) {
      var src = re.source;
      var opt = re.global ? 'g' : '';

      if (re.ignoreCase) opt += 'i';
      if (re.multiline) opt += 'm';

      for (var i = 1; i < arguments.length; i++) {
        src = src.replace('@', '\\' + arguments[i]);
      }

      return new RegExp(src, opt);
    }

    /**
     * @module parsers
     */
    var parsers = function (win) {

      var _p = {};

      function _r(name) {
        var parser = win[name];

        if (parser) return parser;

        throw new Error('Parser "' + name + '" not loaded.');
      }

      function _req(name) {
        var parts = name.split('.');

        if (parts.length !== 2) throw new Error('Bad format for parsers._req');

        var parser = _p[parts[0]][parts[1]];
        if (parser) return parser;

        throw new Error('Parser "' + name + '" not found.');
      }

      function extend(obj, props) {
        if (props) {
          for (var prop in props) {
            /* istanbul ignore next */
            if (props.hasOwnProperty(prop)) {
              obj[prop] = props[prop];
            }
          }
        }
        return obj;
      }

      function renderPug(compilerName, html, opts, url) {
        opts = extend({
          pretty: true,
          filename: url,
          doctype: 'html'
        }, opts);
        return _r(compilerName).render(html, opts);
      }

      _p.html = {
        jade: function (html, opts, url) {
          /* eslint-disable */
          console.log('DEPRECATION WARNING: jade was renamed "pug" - The jade parser will be removed in riot@3.0.0!');
          /* eslint-enable */
          return renderPug('jade', html, opts, url);
        },
        pug: function (html, opts, url) {
          return renderPug('pug', html, opts, url);
        }
      };
      _p.css = {
        less: function (tag, css, opts, url) {
          var ret;

          opts = extend({
            sync: true,
            syncImport: true,
            filename: url
          }, opts);
          _r('less').render(css, opts, function (err, result) {
            // istanbul ignore next
            if (err) throw err;
            ret = result.css;
          });
          return ret;
        }
      };
      _p.js = {
        es6: function (js, opts) {
          opts = extend({
            blacklist: ['useStrict', 'strict', 'react'],
            sourceMaps: false,
            comments: false
          }, opts);
          return _r('babel').transform(js, opts).code;
        },
        babel: function (js, opts, url) {
          return _r('babel').transform(js, extend({ filename: url }, opts)).code;
        },
        buble: function (js, opts, url) {
          opts = extend({
            source: url,
            modules: false
          }, opts);
          return _r('buble').transform(js, opts).code;
        },
        coffee: function (js, opts) {
          return _r('CoffeeScript').compile(js, extend({ bare: true }, opts));
        },
        livescript: function (js, opts) {
          return _r('livescript').compile(js, extend({ bare: true, header: false }, opts));
        },
        typescript: function (js, opts) {
          return _r('typescript')(js, opts);
        },
        none: function (js) {
          return js;
        }
      };
      _p.js.javascript = _p.js.none;
      _p.js.coffeescript = _p.js.coffee;
      _p._req = _req;
      _p.utils = {
        extend: extend
      };

      return _p;
    }(window || global);

    riot.parsers = parsers;

    /**
     * Compiler for riot custom tags
     * @version v2.5.5
     */
    var compile = function () {

      var extend = parsers.utils.extend;
      /* eslint-enable */

      var S_LINESTR = /"[^"\n\\]*(?:\\[\S\s][^"\n\\]*)*"|'[^'\n\\]*(?:\\[\S\s][^'\n\\]*)*'/.source;

      var S_STRINGS = brackets.R_STRINGS.source;

      var HTML_ATTRS = / *([-\w:\xA0-\xFF]+) ?(?:= ?('[^']*'|"[^"]*"|\S+))?/g;

      var HTML_COMMS = RegExp(/<!--(?!>)[\S\s]*?-->/.source + '|' + S_LINESTR, 'g');

      var HTML_TAGS = /<(-?[A-Za-z][-\w\xA0-\xFF]*)(?:\s+([^"'\/>]*(?:(?:"[^"]*"|'[^']*'|\/[^>])[^'"\/>]*)*)|\s*)(\/?)>/g;

      var HTML_PACK = />[ \t]+<(-?[A-Za-z]|\/[-A-Za-z])/g;

      var BOOL_ATTRS = RegExp('^(?:disabled|checked|readonly|required|allowfullscreen|auto(?:focus|play)|' + 'compact|controls|default|formnovalidate|hidden|ismap|itemscope|loop|' + 'multiple|muted|no(?:resize|shade|validate|wrap)?|open|reversed|seamless|' + 'selected|sortable|truespeed|typemustmatch)$');

      var RIOT_ATTRS = ['style', 'src', 'd'];

      var VOID_TAGS = /^(?:input|img|br|wbr|hr|area|base|col|embed|keygen|link|meta|param|source|track)$/;

      var PRE_TAGS = /<pre(?:\s+(?:[^">]*|"[^"]*")*)?>([\S\s]+?)<\/pre\s*>/gi;

      var SPEC_TYPES = /^"(?:number|date(?:time)?|time|month|email|color)\b/i;

      var IMPORT_STATEMENT = /^\s*import(?:\s*[*{]|\s+[$_a-zA-Z'"]).*\n?/gm;

      var TRIM_TRAIL = /[ \t]+$/gm;

      var RE_HASEXPR = safeRegex(/@#\d/, 'x01'),
          RE_REPEXPR = safeRegex(/@#(\d+)/g, 'x01'),
          CH_IDEXPR = '\x01#',
          CH_DQCODE = '\u2057',
          DQ = '"',
          SQ = "'";

      function cleanSource(src) {
        var mm,
            re = HTML_COMMS;

        if (~src.indexOf('\r')) {
          src = src.replace(/\r\n?/g, '\n');
        }

        re.lastIndex = 0;
        while (mm = re.exec(src)) {
          if (mm[0][0] === '<') {
            src = RegExp.leftContext + RegExp.rightContext;
            re.lastIndex = mm[3] + 1;
          }
        }
        return src;
      }

      function parseAttribs(str, pcex) {
        var list = [],
            match,
            type,
            vexp;

        HTML_ATTRS.lastIndex = 0;

        str = str.replace(/\s+/g, ' ');

        while (match = HTML_ATTRS.exec(str)) {
          var k = match[1].toLowerCase(),
              v = match[2];

          if (!v) {
            list.push(k);
          } else {

            if (v[0] !== DQ) {
              v = DQ + (v[0] === SQ ? v.slice(1, -1) : v) + DQ;
            }

            if (k === 'type' && SPEC_TYPES.test(v)) {
              type = v;
            } else {
              if (RE_HASEXPR.test(v)) {

                if (k === 'value') vexp = 1;else if (BOOL_ATTRS.test(k)) k = '__' + k;else if (~RIOT_ATTRS.indexOf(k)) k = 'riot-' + k;
              }

              list.push(k + '=' + v);
            }
          }
        }

        if (type) {
          if (vexp) type = DQ + pcex._bp[0] + SQ + type.slice(1, -1) + SQ + pcex._bp[1] + DQ;
          list.push('type=' + type);
        }
        return list.join(' ');
      }

      function splitHtml(html, opts, pcex) {
        var _bp = pcex._bp;

        if (html && _bp[4].test(html)) {
          var jsfn = opts.expr && (opts.parser || opts.type) ? _compileJS : 0,
              list = brackets.split(html, 0, _bp),
              expr;

          for (var i = 1; i < list.length; i += 2) {
            expr = list[i];
            if (expr[0] === '^') {
              expr = expr.slice(1);
            } else if (jsfn) {
              expr = jsfn(expr, opts).trim();
              if (expr.slice(-1) === ';') expr = expr.slice(0, -1);
            }
            list[i] = CH_IDEXPR + (pcex.push(expr) - 1) + _bp[1];
          }
          html = list.join('');
        }
        return html;
      }

      function restoreExpr(html, pcex) {
        if (pcex.length) {
          html = html.replace(RE_REPEXPR, function (_, d) {

            return pcex._bp[0] + pcex[d].trim().replace(/[\r\n]+/g, ' ').replace(/"/g, CH_DQCODE);
          });
        }
        return html;
      }

      function _compileHTML(html, opts, pcex) {
        if (!/\S/.test(html)) return '';

        html = splitHtml(html, opts, pcex).replace(HTML_TAGS, function (_, name, attr, ends) {

          name = name.toLowerCase();

          ends = ends && !VOID_TAGS.test(name) ? '></' + name : '';

          if (attr) name += ' ' + parseAttribs(attr, pcex);

          return '<' + name + ends + '>';
        });

        if (!opts.whitespace) {
          var p = [];

          if (/<pre[\s>]/.test(html)) {
            html = html.replace(PRE_TAGS, function (q) {
              p.push(q);
              return '\u0002';
            });
          }

          html = html.trim().replace(/\s+/g, ' ');

          if (p.length) html = html.replace(/\u0002/g, function () {
            return p.shift();
          });
        }

        if (opts.compact) html = html.replace(HTML_PACK, '><$1');

        return restoreExpr(html, pcex).replace(TRIM_TRAIL, '');
      }

      function compileHTML(html, opts, pcex) {

        if (Array.isArray(opts)) {
          pcex = opts;
          opts = {};
        } else {
          if (!pcex) pcex = [];
          if (!opts) opts = {};
        }

        pcex._bp = brackets.array(opts.brackets);

        return _compileHTML(cleanSource(html), opts, pcex);
      }

      var JS_ES6SIGN = /^[ \t]*([$_A-Za-z][$\w]*)\s*\([^()]*\)\s*{/m;

      var JS_ES6END = RegExp('[{}]|' + brackets.S_QBLOCKS, 'g');

      var JS_COMMS = RegExp(brackets.R_MLCOMMS.source + '|//[^\r\n]*|' + brackets.S_QBLOCKS, 'g');

      function riotjs(js) {
        var parts = [],
            match,
            toes5,
            pos,
            name,
            RE = RegExp;

        if (~js.indexOf('/')) js = rmComms(js, JS_COMMS);

        while (match = js.match(JS_ES6SIGN)) {

          parts.push(RE.leftContext);
          js = RE.rightContext;
          pos = skipBody(js, JS_ES6END);

          name = match[1];
          toes5 = !/^(?:if|while|for|switch|catch|function)$/.test(name);
          name = toes5 ? match[0].replace(name, 'this.' + name + ' = function') : match[0];
          parts.push(name, js.slice(0, pos));
          js = js.slice(pos);

          if (toes5 && !/^\s*.\s*bind\b/.test(js)) parts.push('.bind(this)');
        }

        return parts.length ? parts.join('') + js : js;

        function rmComms(s, r, m) {
          r.lastIndex = 0;
          while (m = r.exec(s)) {
            if (m[0][0] === '/' && !m[1] && !m[2]) {
              s = RE.leftContext + ' ' + RE.rightContext;
              r.lastIndex = m[3] + 1;
            }
          }
          return s;
        }

        function skipBody(s, r) {
          var m,
              i = 1;

          r.lastIndex = 0;
          while (i && (m = r.exec(s))) {
            if (m[0] === '{') ++i;else if (m[0] === '}') --i;
          }
          return i ? s.length : r.lastIndex;
        }
      }

      function _compileJS(js, opts, type, parserOpts, url) {
        if (!/\S/.test(js)) return '';
        if (!type) type = opts.type;

        var parser = opts.parser || type && parsers._req('js.' + type, true) || riotjs;

        return parser(js, parserOpts, url).replace(/\r\n?/g, '\n').replace(TRIM_TRAIL, '');
      }

      function compileJS(js, opts, type, userOpts) {
        if (typeof opts === 'string') {
          userOpts = type;
          type = opts;
          opts = {};
        }
        if (type && typeof type === 'object') {
          userOpts = type;
          type = '';
        }
        if (!userOpts) userOpts = {};

        return _compileJS(js, opts || {}, type, userOpts.parserOptions, userOpts.url);
      }

      var CSS_SELECTOR = RegExp('([{}]|^)[ ;]*([^@ ;{}][^{}]*)(?={)|' + S_LINESTR, 'g');

      function scopedCSS(tag, css) {
        var scope = ':scope';

        return css.replace(CSS_SELECTOR, function (m, p1, p2) {

          if (!p2) return m;

          p2 = p2.replace(/[^,]+/g, function (sel) {
            var s = sel.trim();

            if (!s || s === 'from' || s === 'to' || s.slice(-1) === '%') {
              return sel;
            }

            if (s.indexOf(scope) < 0) {
              s = tag + ' ' + s + ',[riot-tag="' + tag + '"] ' + s + ',[data-is="' + tag + '"] ' + s;
            } else {
              s = s.replace(scope, tag) + ',' + s.replace(scope, '[riot-tag="' + tag + '"]') + ',' + s.replace(scope, '[data-is="' + tag + '"]');
            }
            return s;
          });

          return p1 ? p1 + ' ' + p2 : p2;
        });
      }

      function _compileCSS(css, tag, type, opts) {
        var scoped = (opts || (opts = {})).scoped;

        if (type) {
          if (type === 'scoped-css') {
            scoped = true;
          } else if (type !== 'css') {

            var parser = parsers._req('css.' + type, true);
            css = parser(tag, css, opts.parserOpts || {}, opts.url);
          }
        }

        css = css.replace(brackets.R_MLCOMMS, '').replace(/\s+/g, ' ').trim();

        if (scoped) {
          if (!tag) {
            throw new Error('Can not parse scoped CSS without a tagName');
          }
          css = scopedCSS(tag, css);
        }
        return css;
      }

      function compileCSS(css, type, opts) {
        if (type && typeof type === 'object') {
          opts = type;
          type = '';
        } else if (!opts) opts = {};

        return _compileCSS(css, opts.tagName, type, opts);
      }

      var TYPE_ATTR = /\stype\s*=\s*(?:(['"])(.+?)\1|(\S+))/i;

      var MISC_ATTR = '\\s*=\\s*(' + S_STRINGS + '|{[^}]+}|\\S+)';

      var END_TAGS = /\/>\n|^<(?:\/?-?[A-Za-z][-\w\xA0-\xFF]*\s*|-?[A-Za-z][-\w\xA0-\xFF]*\s+[-\w:\xA0-\xFF][\S\s]*?)>\n/;

      function _q(s, r) {
        if (!s) return "''";
        s = SQ + s.replace(/\\/g, '\\\\').replace(/'/g, "\\'") + SQ;
        return r && ~s.indexOf('\n') ? s.replace(/\n/g, '\\n') : s;
      }

      function mktag(name, html, css, attr, js, imports, opts) {
        var c = opts.debug ? ',\n  ' : ', ',
            s = '});';

        if (js && js.slice(-1) !== '\n') s = '\n' + s;

        return imports + 'riot.tag2(\'' + name + SQ + c + _q(html, 1) + c + _q(css) + c + _q(attr) + ', function(opts) {\n' + js + s;
      }

      function splitBlocks(str) {
        if (/<[-\w]/.test(str)) {
          var m,
              k = str.lastIndexOf('<'),
              n = str.length;

          while (~k) {
            m = str.slice(k, n).match(END_TAGS);
            if (m) {
              k += m.index + m[0].length;
              m = str.slice(0, k);
              if (m.slice(-5) === '<-/>\n') m = m.slice(0, -5);
              return [m, str.slice(k)];
            }
            n = k;
            k = str.lastIndexOf('<', k - 1);
          }
        }
        return ['', str];
      }

      function getType(attribs) {
        if (attribs) {
          var match = attribs.match(TYPE_ATTR);

          match = match && (match[2] || match[3]);
          if (match) {
            return match.replace('text/', '');
          }
        }
        return '';
      }

      function getAttrib(attribs, name) {
        if (attribs) {
          var match = attribs.match(RegExp('\\s' + name + MISC_ATTR, 'i'));

          match = match && match[1];
          if (match) {
            return (/^['"]/.test(match) ? match.slice(1, -1) : match
            );
          }
        }
        return '';
      }

      function unescapeHTML(str) {
        return str.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#039;/g, '\'');
      }

      function getParserOptions(attribs) {
        var opts = unescapeHTML(getAttrib(attribs, 'options'));

        return opts ? JSON.parse(opts) : null;
      }

      function getCode(code, opts, attribs, base) {
        var type = getType(attribs),
            src = getAttrib(attribs, 'src'),
            jsParserOptions = extend({}, opts.parserOptions.js);

        if (src) return false;

        return _compileJS(code, opts, type, extend(jsParserOptions, getParserOptions(attribs)), base);
      }

      function cssCode(code, opts, attribs, url, tag) {
        var parserStyleOptions = extend({}, opts.parserOptions.style),
            extraOpts = {
          parserOpts: extend(parserStyleOptions, getParserOptions(attribs)),
          scoped: attribs && /\sscoped(\s|=|$)/i.test(attribs),
          url: url
        };

        return _compileCSS(code, tag, getType(attribs) || opts.style, extraOpts);
      }

      function compileTemplate(html, url, lang, opts) {

        var parser = parsers._req('html.' + lang, true);
        return parser(html, opts, url);
      }

      var CUST_TAG = RegExp(/^([ \t]*)<(-?[A-Za-z][-\w\xA0-\xFF]*)(?:\s+([^'"\/>]+(?:(?:@|\/[^>])[^'"\/>]*)*)|\s*)?(?:\/>|>[ \t]*\n?([\S\s]*)^\1<\/\2\s*>|>(.*)<\/\2\s*>)/.source.replace('@', S_STRINGS), 'gim'),
          SCRIPTS = /<script(\s+[^>]*)?>\n?([\S\s]*?)<\/script\s*>/gi,
          STYLES = /<style(\s+[^>]*)?>\n?([\S\s]*?)<\/style\s*>/gi;

      function compile(src, opts, url) {
        var parts = [],
            included,
            defaultParserptions = {

          template: {},
          js: {},
          style: {}
        };

        if (!opts) opts = {};

        opts.parserOptions = extend(defaultParserptions, opts.parserOptions || {});

        included = opts.exclude ? function (s) {
          return opts.exclude.indexOf(s) < 0;
        } : function () {
          return 1;
        };

        if (!url) url = '';

        var _bp = brackets.array(opts.brackets);

        if (opts.template) {
          src = compileTemplate(src, url, opts.template, opts.parserOptions.template);
        }

        src = cleanSource(src).replace(CUST_TAG, function (_, indent, tagName, attribs, body, body2) {
          var jscode = '',
              styles = '',
              html = '',
              imports = '',
              pcex = [];

          pcex._bp = _bp;

          tagName = tagName.toLowerCase();

          attribs = attribs && included('attribs') ? restoreExpr(parseAttribs(splitHtml(attribs, opts, pcex), pcex), pcex) : '';

          if ((body || (body = body2)) && /\S/.test(body)) {

            if (body2) {

              if (included('html')) html = _compileHTML(body2, opts, pcex);
            } else {

              body = body.replace(RegExp('^' + indent, 'gm'), '');

              body = body.replace(STYLES, function (_m, _attrs, _style) {
                if (included('css')) {
                  styles += (styles ? ' ' : '') + cssCode(_style, opts, _attrs, url, tagName);
                }
                return '';
              });

              body = body.replace(SCRIPTS, function (_m, _attrs, _script) {
                if (included('js')) {
                  var code = getCode(_script, opts, _attrs, url);

                  if (code) jscode += (jscode ? '\n' : '') + code;
                }
                return '';
              });

              var blocks = splitBlocks(body.replace(TRIM_TRAIL, ''));

              if (included('html')) {
                html = _compileHTML(blocks[0], opts, pcex);
              }

              if (included('js')) {
                body = _compileJS(blocks[1], opts, null, null, url);
                if (body) jscode += (jscode ? '\n' : '') + body;
                jscode = jscode.replace(IMPORT_STATEMENT, function (s) {
                  imports += s.trim() + '\n';
                  return '';
                });
              }
            }
          }

          jscode = /\S/.test(jscode) ? jscode.replace(/\n{3,}/g, '\n\n') : '';

          if (opts.entities) {
            parts.push({
              tagName: tagName,
              html: html,
              css: styles,
              attribs: attribs,
              js: jscode,
              imports: imports
            });
            return '';
          }

          return mktag(tagName, html, styles, attribs, jscode, imports, opts);
        });

        if (opts.entities) return parts;

        return src;
      }

      riot.util.compiler = {
        compile: compile,
        html: compileHTML,
        css: compileCSS,
        js: compileJS,
        version: 'v2.5.5'
      };
      return compile;
    }();

    /*
      Compilation for the browser
    */
    riot.compile = function () {

      var promise, // emits the 'ready' event and runs the first callback
      ready; // all the scripts were compiled?

      // gets the source of an external tag with an async call
      function GET(url, fn, opts) {
        var req = new XMLHttpRequest();

        req.onreadystatechange = function () {
          if (req.readyState === 4 && (req.status === 200 || !req.status && req.responseText.length)) {
            fn(req.responseText, opts, url);
          }
        };
        req.open('GET', url, true);
        req.send('');
      }

      // evaluates a compiled tag within the global context
      function globalEval(js, url) {
        if (typeof js === T_STRING) {
          var node = mkEl('script'),
              root = document.documentElement;

          // make the source available in the "(no domain)" tab
          // of Chrome DevTools, with a .js extension
          if (url) js += '\n//# sourceURL=' + url + '.js';

          node.text = js;
          root.appendChild(node);
          root.removeChild(node);
        }
      }

      // compiles all the internal and external tags on the page
      function compileScripts(fn, xopt) {
        var scripts = $$('script[type="riot/tag"]'),
            scriptsAmount = scripts.length;

        function done() {
          promise.trigger('ready');
          ready = true;
          if (fn) fn();
        }

        function compileTag(src, opts, url) {
          var code = compile(src, opts, url);

          globalEval(code, url);
          if (! --scriptsAmount) done();
        }

        if (!scriptsAmount) done();else {
          for (var i = 0; i < scripts.length; ++i) {
            var script = scripts[i],
                opts = extend({ template: getAttr(script, 'template') }, xopt),
                url = getAttr(script, 'src');

            url ? GET(url, compileTag, opts) : compileTag(script.innerHTML, opts);
          }
        }
      }

      //// Entry point -----

      return function (arg, fn, opts) {

        if (typeof arg === T_STRING) {

          // 2nd parameter is optional, but can be null
          if (isObject(fn)) {
            opts = fn;
            fn = false;
          }

          // `riot.compile(tag [, callback | true][, options])`
          if (/^\s*</m.test(arg)) {
            var js = compile(arg, opts);
            if (fn !== true) globalEval(js);
            if (isFunction(fn)) fn(js, arg, opts);
            return js;
          }

          // `riot.compile(url [, callback][, options])`
          GET(arg, function (str, opts, url) {
            var js = compile(str, opts, url);
            globalEval(js, url);
            if (fn) fn(js, str, opts);
          }, opts);
        } else {

          // `riot.compile([callback][, options])`
          if (isFunction(arg)) {
            opts = fn;
            fn = arg;
          } else {
            opts = arg;
            fn = undefined;
          }

          if (ready) {
            return fn && fn();
          }

          if (promise) {
            if (fn) promise.on('ready', fn);
          } else {
            promise = riot.observable();
            compileScripts(fn, opts);
          }
        }
      };
    }();

    // reassign mount methods -----
    var mount = riot.mount;

    riot.mount = function () {
      var ret,
          args = arguments;
      riot.compile(function () {
        ret = mount.apply(riot, args);
      });
      return ret;
    };
    // support CommonJS, AMD & browser
    /* istanbul ignore next */
    if (typeof exports === T_OBJECT) module.exports = riot;else if (typeof define === T_FUNCTION && typeof define.amd !== T_UNDEF) define(function () {
      return riot;
    });else window.riot = riot;
  })(typeof window != 'undefined' ? window : void 0);
  return module.exports;
});
$__System.register("133", ["132"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var Riot;
    return {
        setters: [function (Riot_1) {
            Riot = Riot_1;
        }],
        execute: function () {
            exports_1("default", Riot);
        }
    };
});
$__System.register("12c", ["133"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var riot_service_1;
    var riot, Observable, Element, precompiledTags;
    function registerClass(element) {
        function registerTag(compiledTag) {
            var transformFunction = function (opts) {
                extend(this, element); // copies prototype into "this"                        
                element.apply(this, [opts]); // calls class constructor applying it on "this"
                if (element.prototype.mounted !== undefined) this.on("mount", this.mounted);
                if (element.prototype.unmounted !== undefined) this.on("unmount", this.unmounted);
                if (element.prototype.updating !== undefined) this.on("update", this.updating);
                if (element.prototype.updated !== undefined) this.on("updated", this.updated);
                // TODO support for init(opts) ?
            };
            riot.tag2(compiledTag.tagName, compiledTag.html, compiledTag.css, compiledTag.attribs, transformFunction, riot.settings.brackets);
            return compiledTag.tagName;
        }
        function loadTemplateFromHTTP(template) {
            var req = new XMLHttpRequest();
            req.open("GET", template, false);
            req.send();
            if (req.status == 200) return req.responseText;else throw req.responseText;
        }
        ;
        var compiled;
        // gets string template: inlined, via http request or via precompiled cache
        if (element.prototype.template !== undefined) {
            var tagTemplate = element.prototype.template;
            if (tagTemplate.indexOf("<") < 0) {
                // tag is a file
                if (precompiledTags[tagTemplate] !== undefined) {
                    // loads it from precompiled cache                
                    compiled = precompiledTags[tagTemplate];
                } else {
                    // loads from HTTP and compile on the fly
                    tagTemplate = loadTemplateFromHTTP(tagTemplate);
                    compiled = riot.compile(tagTemplate, true, { entities: true })[0];
                }
            } else {
                // tag is inlined, compile on the fly
                compiled = riot.compile(tagTemplate, true, { entities: true })[0];
            }
            element.prototype.tagName = registerTag(compiled);
        } else throw "template property not specified";
    }
    exports_1("registerClass", registerClass);
    // new extend, works with getters and setters
    function extend(d, element) {
        var map = Object.keys(element.prototype).reduce(function (descriptors, key) {
            descriptors[key] = Object.getOwnPropertyDescriptor(element.prototype, key);
            return descriptors;
        }, {});
        Object.defineProperties(d, map);
    }
    // @template decorator
    function template(template) {
        return function (target) {
            target.prototype["template"] = template;
            registerClass(target);
        };
    }
    exports_1("template", template);
    return {
        setters: [function (riot_service_1_1) {
            riot_service_1 = riot_service_1_1;
        }],
        execute: function () {
            riot = riot_service_1.default;
            Observable = function () {
                function Observable() {
                    riot.observable(this);
                }
                Observable.prototype.on = function (events, callback) {};
                Observable.prototype.one = function (events, callback) {};
                Observable.prototype.off = function (events) {};
                Observable.prototype.trigger = function (eventName) {
                    var args = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        args[_i - 1] = arguments[_i];
                    }
                };
                return Observable;
            }();
            exports_1("Observable", Observable);
            Element = function () {
                function Element() {}
                Element.prototype.update = function (data) {};
                Element.prototype.unmount = function (keepTheParent) {};
                Element.prototype.on = function (eventName, fun) {};
                Element.prototype.one = function (eventName, fun) {};
                Element.prototype.off = function (events) {};
                Element.prototype.trigger = function (eventName) {
                    var args = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        args[_i - 1] = arguments[_i];
                    }
                };
                Element.prototype.mixin = function (mixinObject, instance) {};
                Element.createElement = function (options) {
                    var tagName = this.prototype.tagName;
                    var el = document.createElement(tagName);
                    riot.mount(el, tagName, options);
                    return el;
                };
                return Element;
            }();
            exports_1("Element", Element);
            exports_1("precompiledTags", precompiledTags = {});
            exports_1("riot", riot);
        }
    };
});
$__System.register("12f", ["12c"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var riot_ts_1;
    var BaseElement;
    return {
        setters: [function (riot_ts_1_1) {
            riot_ts_1 = riot_ts_1_1;
        }],
        execute: function () {
            BaseElement = function (_super) {
                __extends(BaseElement, _super);
                function BaseElement() {
                    _super.apply(this, arguments);
                }
                BaseElement.prototype.showError = function (title, message) {
                    //todo
                };
                BaseElement.prototype.showMessage = function (title, message) {
                    //todo
                };
                return BaseElement;
            }(riot_ts_1.Element);
            exports_1("default", BaseElement);
        }
    };
});
$__System.register("134", [], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var __useDefault;
    return {
        setters: [],
        execute: function () {
            exports_1("__useDefault", __useDefault = true);
            exports_1("default", "<reset-password-page>\n    <div class=\"header\">\n        <div class=\"container\">\n            <img src=\"assets/images/logo.png\">\n        </div>\n    </div>\n    <div class=\"main-content\">\n        <div class=\"container\">\n            <form class=\"text-center\">\n                <div class=\"line-top\">\n                    <h2 class=\"title\">Having trouble signing in?</h2>\n                    <p class=\"note\">Please provide additional information to aid</p>\n                    <p class=\"note\">in the recovery process</p>\n                </div>\n                <div class=\"field\">\n                    <input type=\"text\" placeholder=\"New password\" />\n                </div>\n                <div class=\"field\">\n                    <input type=\"text\" placeholder=\"Confirm password\" />\n                </div>\n                <div class=\"field\">\n                    <button class=\"creat-account green\">Update Password</button>\n                </div>\n            </form>\n        </div>\n    </div>\n    <footer class=\"footer\">\n        <div class=\"col-xs-12 text-center\">\n            <div class=\"col-xs-4 col hidden-sm hidden-xs\"></div>\n            <div class=\"col-xs-12 col-md-4 col-ul\">\n                <ul>\n                    <li><a href=\"terms-of-service.html\" target=\"_blank\">Terms of Service</a></li>\n                    <li><a href=\"privacy.html\" target=\"_blank\">Privacy</a></li>\n                    <li><a href=\"policy.html\" target=\"_blank\">Policy</a></li>\n                    <li><a href=\"support.html\" target=\"_blank\">Support</a></li>\n                    <li><a href=\"contact.html\" target=\"_blank\">Contact</a></li>\n                </ul>\n            </div>\n            <div class=\"col-xs-4 col hidden-sm hidden-xs\"></div>\n        </div>\n        <p class=\"text-center\"><img src=\"assets/images/flag-footer.png\" width=\"\" class=\"m15r\" />Flash is owned and operated by XYZ123, Inc., a Canadian\n            company based in Toronto.in Canada</p>\n    </footer>\n</reset-password-page>");
        }
    };
});
$__System.register('135', ['12c', '12f', '134'], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var riot_ts_1, base_element_1, reset_password_page_html_text_1;
    var ResetPassword;
    return {
        setters: [function (riot_ts_1_1) {
            riot_ts_1 = riot_ts_1_1;
        }, function (base_element_1_1) {
            base_element_1 = base_element_1_1;
        }, function (reset_password_page_html_text_1_1) {
            reset_password_page_html_text_1 = reset_password_page_html_text_1_1;
        }],
        execute: function () {
            ResetPassword = function (_super) {
                __extends(ResetPassword, _super);
                function ResetPassword() {
                    _super.apply(this, arguments);
                }
                ResetPassword = __decorate([riot_ts_1.template(reset_password_page_html_text_1.default)], ResetPassword);
                return ResetPassword;
            }(base_element_1.default);
            exports_1("default", ResetPassword);
        }
    };
});
$__System.register('136', ['12c', '12b', '12e', '131', '135'], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var riot_ts_1, app_1, landing_page_1, signin_page_1, reset_password_1;
    function initialize() {
        riot_ts_1.riot.mount('app');
    }
    exports_1("initialize", initialize);
    return {
        setters: [function (riot_ts_1_1) {
            riot_ts_1 = riot_ts_1_1;
        }, function (app_1_1) {
            app_1 = app_1_1;
        }, function (landing_page_1_1) {
            landing_page_1 = landing_page_1_1;
        }, function (signin_page_1_1) {
            signin_page_1 = signin_page_1_1;
        }, function (reset_password_1_1) {
            reset_password_1 = reset_password_1_1;
        }],
        execute: function () {
            exports_1("App", app_1.default);
            exports_1("LandingPage", landing_page_1.default);
            exports_1("SigninPage", signin_page_1.default);
            exports_1("ResetPassword", reset_password_1.default);
        }
    };
});
$__System.register('137', ['12c', '136'], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var riot_ts_1, components;
    return {
        setters: [function (riot_ts_1_1) {
            riot_ts_1 = riot_ts_1_1;
        }, function (components_1) {
            components = components_1;
        }],
        execute: function () {
            components.initialize();
            riot_ts_1.riot.route(function (action) {
                console.log('[route] action', action);
                // if (action == 'login') {
                //     return riot.mount('#main', 'landing-page');
                // }
                if (action == '' || action == 'signup') {
                    riot_ts_1.riot.mount('#main', 'landing-page');
                } else if (action == 'signin') {
                    riot_ts_1.riot.mount('#main', 'signin-page');
                } else if (action == 'forgot-password') {
                    riot_ts_1.riot.mount('#main', 'reset-password-page');
                }
            });
            riot_ts_1.riot.route.start(true);
        }
    };
});
$__System.register("1", ["129", "137"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    return {
        setters: [function (_1) {}, function (_2) {}],
        execute: function () {}
    };
});
})
(function(factory) {
  factory();
});
//# sourceMappingURL=build.js.map