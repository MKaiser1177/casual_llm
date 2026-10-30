function Ff(v) {
  return v && v.__esModule && Object.prototype.hasOwnProperty.call(v, "default") ? v.default : v;
}
var No = { exports: {} }, wr = {}, _o = { exports: {} }, Q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _a;
function Uf() {
  if (_a) return Q;
  _a = 1;
  var v = Symbol.for("react.element"), k = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), N = Symbol.for("react.profiler"), R = Symbol.for("react.provider"), B = Symbol.for("react.context"), Y = Symbol.for("react.forward_ref"), V = Symbol.for("react.suspense"), ee = Symbol.for("react.memo"), M = Symbol.for("react.lazy"), A = Symbol.iterator;
  function G(f) {
    return f === null || typeof f != "object" ? null : (f = A && f[A] || f["@@iterator"], typeof f == "function" ? f : null);
  }
  var ge = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, _e = Object.assign, F = {};
  function W(f, y, H) {
    this.props = f, this.context = y, this.refs = F, this.updater = H || ge;
  }
  W.prototype.isReactComponent = {}, W.prototype.setState = function(f, y) {
    if (typeof f != "object" && typeof f != "function" && f != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, f, y, "setState");
  }, W.prototype.forceUpdate = function(f) {
    this.updater.enqueueForceUpdate(this, f, "forceUpdate");
  };
  function Xe() {
  }
  Xe.prototype = W.prototype;
  function X(f, y, H) {
    this.props = f, this.context = y, this.refs = F, this.updater = H || ge;
  }
  var te = X.prototype = new Xe();
  te.constructor = X, _e(te, W.prototype), te.isPureReactComponent = !0;
  var de = Array.isArray, ke = Object.prototype.hasOwnProperty, ze = { current: null }, Re = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ae(f, y, H) {
    var K, Z = {}, q = null, ie = null;
    if (y != null) for (K in y.ref !== void 0 && (ie = y.ref), y.key !== void 0 && (q = "" + y.key), y) ke.call(y, K) && !Re.hasOwnProperty(K) && (Z[K] = y[K]);
    var re = arguments.length - 2;
    if (re === 1) Z.children = H;
    else if (1 < re) {
      for (var ce = Array(re), Ze = 0; Ze < re; Ze++) ce[Ze] = arguments[Ze + 2];
      Z.children = ce;
    }
    if (f && f.defaultProps) for (K in re = f.defaultProps, re) Z[K] === void 0 && (Z[K] = re[K]);
    return { $$typeof: v, type: f, key: q, ref: ie, props: Z, _owner: ze.current };
  }
  function Je(f, y) {
    return { $$typeof: v, type: f.type, key: y, ref: f.ref, props: f.props, _owner: f._owner };
  }
  function Ie(f) {
    return typeof f == "object" && f !== null && f.$$typeof === v;
  }
  function ve(f) {
    var y = { "=": "=0", ":": "=2" };
    return "$" + f.replace(/[=:]/g, function(H) {
      return y[H];
    });
  }
  var Ce = /\/+/g;
  function ue(f, y) {
    return typeof f == "object" && f !== null && f.key != null ? ve("" + f.key) : y.toString(36);
  }
  function Be(f, y, H, K, Z) {
    var q = typeof f;
    (q === "undefined" || q === "boolean") && (f = null);
    var ie = !1;
    if (f === null) ie = !0;
    else switch (q) {
      case "string":
      case "number":
        ie = !0;
        break;
      case "object":
        switch (f.$$typeof) {
          case v:
          case k:
            ie = !0;
        }
    }
    if (ie) return ie = f, Z = Z(ie), f = K === "" ? "." + ue(ie, 0) : K, de(Z) ? (H = "", f != null && (H = f.replace(Ce, "$&/") + "/"), Be(Z, y, H, "", function(Ze) {
      return Ze;
    })) : Z != null && (Ie(Z) && (Z = Je(Z, H + (!Z.key || ie && ie.key === Z.key ? "" : ("" + Z.key).replace(Ce, "$&/") + "/") + f)), y.push(Z)), 1;
    if (ie = 0, K = K === "" ? "." : K + ":", de(f)) for (var re = 0; re < f.length; re++) {
      q = f[re];
      var ce = K + ue(q, re);
      ie += Be(q, y, H, ce, Z);
    }
    else if (ce = G(f), typeof ce == "function") for (f = ce.call(f), re = 0; !(q = f.next()).done; ) q = q.value, ce = K + ue(q, re++), ie += Be(q, y, H, ce, Z);
    else if (q === "object") throw y = String(f), Error("Objects are not valid as a React child (found: " + (y === "[object Object]" ? "object with keys {" + Object.keys(f).join(", ") + "}" : y) + "). If you meant to render a collection of children, use an array instead.");
    return ie;
  }
  function nt(f, y, H) {
    if (f == null) return f;
    var K = [], Z = 0;
    return Be(f, K, "", "", function(q) {
      return y.call(H, q, Z++);
    }), K;
  }
  function pe(f) {
    if (f._status === -1) {
      var y = f._result;
      y = y(), y.then(function(H) {
        (f._status === 0 || f._status === -1) && (f._status = 1, f._result = H);
      }, function(H) {
        (f._status === 0 || f._status === -1) && (f._status = 2, f._result = H);
      }), f._status === -1 && (f._status = 0, f._result = y);
    }
    if (f._status === 1) return f._result.default;
    throw f._result;
  }
  var ne = { current: null }, E = { transition: null }, O = { ReactCurrentDispatcher: ne, ReactCurrentBatchConfig: E, ReactCurrentOwner: ze };
  function j() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Q.Children = { map: nt, forEach: function(f, y, H) {
    nt(f, function() {
      y.apply(this, arguments);
    }, H);
  }, count: function(f) {
    var y = 0;
    return nt(f, function() {
      y++;
    }), y;
  }, toArray: function(f) {
    return nt(f, function(y) {
      return y;
    }) || [];
  }, only: function(f) {
    if (!Ie(f)) throw Error("React.Children.only expected to receive a single React element child.");
    return f;
  } }, Q.Component = W, Q.Fragment = m, Q.Profiler = N, Q.PureComponent = X, Q.StrictMode = C, Q.Suspense = V, Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = O, Q.act = j, Q.cloneElement = function(f, y, H) {
    if (f == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + f + ".");
    var K = _e({}, f.props), Z = f.key, q = f.ref, ie = f._owner;
    if (y != null) {
      if (y.ref !== void 0 && (q = y.ref, ie = ze.current), y.key !== void 0 && (Z = "" + y.key), f.type && f.type.defaultProps) var re = f.type.defaultProps;
      for (ce in y) ke.call(y, ce) && !Re.hasOwnProperty(ce) && (K[ce] = y[ce] === void 0 && re !== void 0 ? re[ce] : y[ce]);
    }
    var ce = arguments.length - 2;
    if (ce === 1) K.children = H;
    else if (1 < ce) {
      re = Array(ce);
      for (var Ze = 0; Ze < ce; Ze++) re[Ze] = arguments[Ze + 2];
      K.children = re;
    }
    return { $$typeof: v, type: f.type, key: Z, ref: q, props: K, _owner: ie };
  }, Q.createContext = function(f) {
    return f = { $$typeof: B, _currentValue: f, _currentValue2: f, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, f.Provider = { $$typeof: R, _context: f }, f.Consumer = f;
  }, Q.createElement = Ae, Q.createFactory = function(f) {
    var y = Ae.bind(null, f);
    return y.type = f, y;
  }, Q.createRef = function() {
    return { current: null };
  }, Q.forwardRef = function(f) {
    return { $$typeof: Y, render: f };
  }, Q.isValidElement = Ie, Q.lazy = function(f) {
    return { $$typeof: M, _payload: { _status: -1, _result: f }, _init: pe };
  }, Q.memo = function(f, y) {
    return { $$typeof: ee, type: f, compare: y === void 0 ? null : y };
  }, Q.startTransition = function(f) {
    var y = E.transition;
    E.transition = {};
    try {
      f();
    } finally {
      E.transition = y;
    }
  }, Q.unstable_act = j, Q.useCallback = function(f, y) {
    return ne.current.useCallback(f, y);
  }, Q.useContext = function(f) {
    return ne.current.useContext(f);
  }, Q.useDebugValue = function() {
  }, Q.useDeferredValue = function(f) {
    return ne.current.useDeferredValue(f);
  }, Q.useEffect = function(f, y) {
    return ne.current.useEffect(f, y);
  }, Q.useId = function() {
    return ne.current.useId();
  }, Q.useImperativeHandle = function(f, y, H) {
    return ne.current.useImperativeHandle(f, y, H);
  }, Q.useInsertionEffect = function(f, y) {
    return ne.current.useInsertionEffect(f, y);
  }, Q.useLayoutEffect = function(f, y) {
    return ne.current.useLayoutEffect(f, y);
  }, Q.useMemo = function(f, y) {
    return ne.current.useMemo(f, y);
  }, Q.useReducer = function(f, y, H) {
    return ne.current.useReducer(f, y, H);
  }, Q.useRef = function(f) {
    return ne.current.useRef(f);
  }, Q.useState = function(f) {
    return ne.current.useState(f);
  }, Q.useSyncExternalStore = function(f, y, H) {
    return ne.current.useSyncExternalStore(f, y, H);
  }, Q.useTransition = function() {
    return ne.current.useTransition();
  }, Q.version = "18.3.1", Q;
}
var ja;
function zo() {
  return ja || (ja = 1, _o.exports = Uf()), _o.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pa;
function Af() {
  if (Pa) return wr;
  Pa = 1;
  var v = zo(), k = Symbol.for("react.element"), m = Symbol.for("react.fragment"), C = Object.prototype.hasOwnProperty, N = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, R = { key: !0, ref: !0, __self: !0, __source: !0 };
  function B(Y, V, ee) {
    var M, A = {}, G = null, ge = null;
    ee !== void 0 && (G = "" + ee), V.key !== void 0 && (G = "" + V.key), V.ref !== void 0 && (ge = V.ref);
    for (M in V) C.call(V, M) && !R.hasOwnProperty(M) && (A[M] = V[M]);
    if (Y && Y.defaultProps) for (M in V = Y.defaultProps, V) A[M] === void 0 && (A[M] = V[M]);
    return { $$typeof: k, type: Y, key: G, ref: ge, props: A, _owner: N.current };
  }
  return wr.Fragment = m, wr.jsx = B, wr.jsxs = B, wr;
}
var Ta;
function Bf() {
  return Ta || (Ta = 1, No.exports = Af()), No.exports;
}
var s = Bf(), $ = zo();
const Ro = /* @__PURE__ */ Ff($);
var zl = {}, jo = { exports: {} }, Ge = {}, Po = { exports: {} }, To = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var za;
function Vf() {
  return za || (za = 1, (function(v) {
    function k(E, O) {
      var j = E.length;
      E.push(O);
      e: for (; 0 < j; ) {
        var f = j - 1 >>> 1, y = E[f];
        if (0 < N(y, O)) E[f] = O, E[j] = y, j = f;
        else break e;
      }
    }
    function m(E) {
      return E.length === 0 ? null : E[0];
    }
    function C(E) {
      if (E.length === 0) return null;
      var O = E[0], j = E.pop();
      if (j !== O) {
        E[0] = j;
        e: for (var f = 0, y = E.length, H = y >>> 1; f < H; ) {
          var K = 2 * (f + 1) - 1, Z = E[K], q = K + 1, ie = E[q];
          if (0 > N(Z, j)) q < y && 0 > N(ie, Z) ? (E[f] = ie, E[q] = j, f = q) : (E[f] = Z, E[K] = j, f = K);
          else if (q < y && 0 > N(ie, j)) E[f] = ie, E[q] = j, f = q;
          else break e;
        }
      }
      return O;
    }
    function N(E, O) {
      var j = E.sortIndex - O.sortIndex;
      return j !== 0 ? j : E.id - O.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var R = performance;
      v.unstable_now = function() {
        return R.now();
      };
    } else {
      var B = Date, Y = B.now();
      v.unstable_now = function() {
        return B.now() - Y;
      };
    }
    var V = [], ee = [], M = 1, A = null, G = 3, ge = !1, _e = !1, F = !1, W = typeof setTimeout == "function" ? setTimeout : null, Xe = typeof clearTimeout == "function" ? clearTimeout : null, X = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function te(E) {
      for (var O = m(ee); O !== null; ) {
        if (O.callback === null) C(ee);
        else if (O.startTime <= E) C(ee), O.sortIndex = O.expirationTime, k(V, O);
        else break;
        O = m(ee);
      }
    }
    function de(E) {
      if (F = !1, te(E), !_e) if (m(V) !== null) _e = !0, pe(ke);
      else {
        var O = m(ee);
        O !== null && ne(de, O.startTime - E);
      }
    }
    function ke(E, O) {
      _e = !1, F && (F = !1, Xe(Ae), Ae = -1), ge = !0;
      var j = G;
      try {
        for (te(O), A = m(V); A !== null && (!(A.expirationTime > O) || E && !ve()); ) {
          var f = A.callback;
          if (typeof f == "function") {
            A.callback = null, G = A.priorityLevel;
            var y = f(A.expirationTime <= O);
            O = v.unstable_now(), typeof y == "function" ? A.callback = y : A === m(V) && C(V), te(O);
          } else C(V);
          A = m(V);
        }
        if (A !== null) var H = !0;
        else {
          var K = m(ee);
          K !== null && ne(de, K.startTime - O), H = !1;
        }
        return H;
      } finally {
        A = null, G = j, ge = !1;
      }
    }
    var ze = !1, Re = null, Ae = -1, Je = 5, Ie = -1;
    function ve() {
      return !(v.unstable_now() - Ie < Je);
    }
    function Ce() {
      if (Re !== null) {
        var E = v.unstable_now();
        Ie = E;
        var O = !0;
        try {
          O = Re(!0, E);
        } finally {
          O ? ue() : (ze = !1, Re = null);
        }
      } else ze = !1;
    }
    var ue;
    if (typeof X == "function") ue = function() {
      X(Ce);
    };
    else if (typeof MessageChannel < "u") {
      var Be = new MessageChannel(), nt = Be.port2;
      Be.port1.onmessage = Ce, ue = function() {
        nt.postMessage(null);
      };
    } else ue = function() {
      W(Ce, 0);
    };
    function pe(E) {
      Re = E, ze || (ze = !0, ue());
    }
    function ne(E, O) {
      Ae = W(function() {
        E(v.unstable_now());
      }, O);
    }
    v.unstable_IdlePriority = 5, v.unstable_ImmediatePriority = 1, v.unstable_LowPriority = 4, v.unstable_NormalPriority = 3, v.unstable_Profiling = null, v.unstable_UserBlockingPriority = 2, v.unstable_cancelCallback = function(E) {
      E.callback = null;
    }, v.unstable_continueExecution = function() {
      _e || ge || (_e = !0, pe(ke));
    }, v.unstable_forceFrameRate = function(E) {
      0 > E || 125 < E ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Je = 0 < E ? Math.floor(1e3 / E) : 5;
    }, v.unstable_getCurrentPriorityLevel = function() {
      return G;
    }, v.unstable_getFirstCallbackNode = function() {
      return m(V);
    }, v.unstable_next = function(E) {
      switch (G) {
        case 1:
        case 2:
        case 3:
          var O = 3;
          break;
        default:
          O = G;
      }
      var j = G;
      G = O;
      try {
        return E();
      } finally {
        G = j;
      }
    }, v.unstable_pauseExecution = function() {
    }, v.unstable_requestPaint = function() {
    }, v.unstable_runWithPriority = function(E, O) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          E = 3;
      }
      var j = G;
      G = E;
      try {
        return O();
      } finally {
        G = j;
      }
    }, v.unstable_scheduleCallback = function(E, O, j) {
      var f = v.unstable_now();
      switch (typeof j == "object" && j !== null ? (j = j.delay, j = typeof j == "number" && 0 < j ? f + j : f) : j = f, E) {
        case 1:
          var y = -1;
          break;
        case 2:
          y = 250;
          break;
        case 5:
          y = 1073741823;
          break;
        case 4:
          y = 1e4;
          break;
        default:
          y = 5e3;
      }
      return y = j + y, E = { id: M++, callback: O, priorityLevel: E, startTime: j, expirationTime: y, sortIndex: -1 }, j > f ? (E.sortIndex = j, k(ee, E), m(V) === null && E === m(ee) && (F ? (Xe(Ae), Ae = -1) : F = !0, ne(de, j - f))) : (E.sortIndex = y, k(V, E), _e || ge || (_e = !0, pe(ke))), E;
    }, v.unstable_shouldYield = ve, v.unstable_wrapCallback = function(E) {
      var O = G;
      return function() {
        var j = G;
        G = O;
        try {
          return E.apply(this, arguments);
        } finally {
          G = j;
        }
      };
    };
  })(To)), To;
}
var Ra;
function Wf() {
  return Ra || (Ra = 1, Po.exports = Vf()), Po.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var La;
function Hf() {
  if (La) return Ge;
  La = 1;
  var v = zo(), k = Wf();
  function m(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var C = /* @__PURE__ */ new Set(), N = {};
  function R(e, t) {
    B(e, t), B(e + "Capture", t);
  }
  function B(e, t) {
    for (N[e] = t, e = 0; e < t.length; e++) C.add(t[e]);
  }
  var Y = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), V = Object.prototype.hasOwnProperty, ee = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, M = {}, A = {};
  function G(e) {
    return V.call(A, e) ? !0 : V.call(M, e) ? !1 : ee.test(e) ? A[e] = !0 : (M[e] = !0, !1);
  }
  function ge(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function _e(e, t, n, r) {
    if (t === null || typeof t > "u" || ge(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
    return !1;
  }
  function F(e, t, n, r, l, i, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = o;
  }
  var W = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    W[e] = new F(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    W[t] = new F(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    W[e] = new F(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    W[e] = new F(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    W[e] = new F(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    W[e] = new F(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    W[e] = new F(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    W[e] = new F(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    W[e] = new F(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var Xe = /[\-:]([a-z])/g;
  function X(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      Xe,
      X
    );
    W[t] = new F(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Xe, X);
    W[t] = new F(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Xe, X);
    W[t] = new F(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    W[e] = new F(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), W.xlinkHref = new F("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    W[e] = new F(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function te(e, t, n, r) {
    var l = W.hasOwnProperty(t) ? W[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (_e(t, n, l, r) && (n = null), r || l === null ? G(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var de = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ke = Symbol.for("react.element"), ze = Symbol.for("react.portal"), Re = Symbol.for("react.fragment"), Ae = Symbol.for("react.strict_mode"), Je = Symbol.for("react.profiler"), Ie = Symbol.for("react.provider"), ve = Symbol.for("react.context"), Ce = Symbol.for("react.forward_ref"), ue = Symbol.for("react.suspense"), Be = Symbol.for("react.suspense_list"), nt = Symbol.for("react.memo"), pe = Symbol.for("react.lazy"), ne = Symbol.for("react.offscreen"), E = Symbol.iterator;
  function O(e) {
    return e === null || typeof e != "object" ? null : (e = E && e[E] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var j = Object.assign, f;
  function y(e) {
    if (f === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      f = t && t[1] || "";
    }
    return `
` + f + e;
  }
  var H = !1;
  function K(e, t) {
    if (!e || H) return "";
    H = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t) if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (h) {
          var r = h;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (h) {
          r = h;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (h) {
          r = h;
        }
        e();
      }
    } catch (h) {
      if (h && r && typeof h.stack == "string") {
        for (var l = h.stack.split(`
`), i = r.stack.split(`
`), o = l.length - 1, u = i.length - 1; 1 <= o && 0 <= u && l[o] !== i[u]; ) u--;
        for (; 1 <= o && 0 <= u; o--, u--) if (l[o] !== i[u]) {
          if (o !== 1 || u !== 1)
            do
              if (o--, u--, 0 > u || l[o] !== i[u]) {
                var a = `
` + l[o].replace(" at new ", " at ");
                return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a;
              }
            while (1 <= o && 0 <= u);
          break;
        }
      }
    } finally {
      H = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? y(e) : "";
  }
  function Z(e) {
    switch (e.tag) {
      case 5:
        return y(e.type);
      case 16:
        return y("Lazy");
      case 13:
        return y("Suspense");
      case 19:
        return y("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = K(e.type, !1), e;
      case 11:
        return e = K(e.type.render, !1), e;
      case 1:
        return e = K(e.type, !0), e;
      default:
        return "";
    }
  }
  function q(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Re:
        return "Fragment";
      case ze:
        return "Portal";
      case Je:
        return "Profiler";
      case Ae:
        return "StrictMode";
      case ue:
        return "Suspense";
      case Be:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case ve:
        return (e.displayName || "Context") + ".Consumer";
      case Ie:
        return (e._context.displayName || "Context") + ".Provider";
      case Ce:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case nt:
        return t = e.displayName || null, t !== null ? t : q(e.type) || "Memo";
      case pe:
        t = e._payload, e = e._init;
        try {
          return q(e(t));
        } catch {
        }
    }
    return null;
  }
  function ie(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return q(t);
      case 8:
        return t === Ae ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function re(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function ce(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Ze(e) {
    var t = ce(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var l = n.get, i = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return l.call(this);
      }, set: function(o) {
        r = "" + o, i.call(this, o);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(o) {
        r = "" + o;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function xr(e) {
    e._valueTracker || (e._valueTracker = Ze(e));
  }
  function Lo(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = ce(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function Sr(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Rl(e, t) {
    var n = t.checked;
    return j({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Mo(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = re(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function Io(e, t) {
    t = t.checked, t != null && te(e, "checked", t, !1);
  }
  function Ll(e, t) {
    Io(e, t);
    var n = re(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Ml(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ml(e, t.type, re(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Do(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Ml(e, t, n) {
    (t !== "number" || Sr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var In = Array.isArray;
  function an(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + re(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          e[l].selected = !0, r && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Il(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(m(91));
    return j({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Oo(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(m(92));
        if (In(n)) {
          if (1 < n.length) throw Error(m(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: re(n) };
  }
  function Fo(e, t) {
    var n = re(t.value), r = re(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function Uo(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Ao(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Dl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Ao(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var kr, Bo = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, l);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (kr = kr || document.createElement("div"), kr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = kr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function Dn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var On = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, Ba = ["Webkit", "ms", "Moz", "O"];
  Object.keys(On).forEach(function(e) {
    Ba.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), On[t] = On[e];
    });
  });
  function Vo(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || On.hasOwnProperty(e) && On[e] ? ("" + t).trim() : t + "px";
  }
  function Wo(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, l = Vo(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
    }
  }
  var Va = j({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Ol(e, t) {
    if (t) {
      if (Va[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(m(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(m(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(m(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(m(62));
    }
  }
  function Fl(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Ul = null;
  function Al(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Bl = null, cn = null, fn = null;
  function Ho(e) {
    if (e = lr(e)) {
      if (typeof Bl != "function") throw Error(m(280));
      var t = e.stateNode;
      t && (t = Qr(t), Bl(e.stateNode, e.type, t));
    }
  }
  function $o(e) {
    cn ? fn ? fn.push(e) : fn = [e] : cn = e;
  }
  function Qo() {
    if (cn) {
      var e = cn, t = fn;
      if (fn = cn = null, Ho(e), t) for (e = 0; e < t.length; e++) Ho(t[e]);
    }
  }
  function Ko(e, t) {
    return e(t);
  }
  function Yo() {
  }
  var Vl = !1;
  function Go(e, t, n) {
    if (Vl) return e(t, n);
    Vl = !0;
    try {
      return Ko(e, t, n);
    } finally {
      Vl = !1, (cn !== null || fn !== null) && (Yo(), Qo());
    }
  }
  function Fn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Qr(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(m(231, t, typeof n));
    return n;
  }
  var Wl = !1;
  if (Y) try {
    var Un = {};
    Object.defineProperty(Un, "passive", { get: function() {
      Wl = !0;
    } }), window.addEventListener("test", Un, Un), window.removeEventListener("test", Un, Un);
  } catch {
    Wl = !1;
  }
  function Wa(e, t, n, r, l, i, o, u, a) {
    var h = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, h);
    } catch (w) {
      this.onError(w);
    }
  }
  var An = !1, Cr = null, Er = !1, Hl = null, Ha = { onError: function(e) {
    An = !0, Cr = e;
  } };
  function $a(e, t, n, r, l, i, o, u, a) {
    An = !1, Cr = null, Wa.apply(Ha, arguments);
  }
  function Qa(e, t, n, r, l, i, o, u, a) {
    if ($a.apply(this, arguments), An) {
      if (An) {
        var h = Cr;
        An = !1, Cr = null;
      } else throw Error(m(198));
      Er || (Er = !0, Hl = h);
    }
  }
  function Xt(e) {
    var t = e, n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (n = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function Xo(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Jo(e) {
    if (Xt(e) !== e) throw Error(m(188));
  }
  function Ka(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Xt(e), t === null) throw Error(m(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var i = l.alternate;
      if (i === null) {
        if (r = l.return, r !== null) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === i.child) {
        for (i = l.child; i; ) {
          if (i === n) return Jo(l), e;
          if (i === r) return Jo(l), t;
          i = i.sibling;
        }
        throw Error(m(188));
      }
      if (n.return !== r.return) n = l, r = i;
      else {
        for (var o = !1, u = l.child; u; ) {
          if (u === n) {
            o = !0, n = l, r = i;
            break;
          }
          if (u === r) {
            o = !0, r = l, n = i;
            break;
          }
          u = u.sibling;
        }
        if (!o) {
          for (u = i.child; u; ) {
            if (u === n) {
              o = !0, n = i, r = l;
              break;
            }
            if (u === r) {
              o = !0, r = i, n = l;
              break;
            }
            u = u.sibling;
          }
          if (!o) throw Error(m(189));
        }
      }
      if (n.alternate !== r) throw Error(m(190));
    }
    if (n.tag !== 3) throw Error(m(188));
    return n.stateNode.current === n ? e : t;
  }
  function Zo(e) {
    return e = Ka(e), e !== null ? qo(e) : null;
  }
  function qo(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = qo(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var bo = k.unstable_scheduleCallback, eu = k.unstable_cancelCallback, Ya = k.unstable_shouldYield, Ga = k.unstable_requestPaint, we = k.unstable_now, Xa = k.unstable_getCurrentPriorityLevel, $l = k.unstable_ImmediatePriority, tu = k.unstable_UserBlockingPriority, Nr = k.unstable_NormalPriority, Ja = k.unstable_LowPriority, nu = k.unstable_IdlePriority, _r = null, vt = null;
  function Za(e) {
    if (vt && typeof vt.onCommitFiberRoot == "function") try {
      vt.onCommitFiberRoot(_r, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var at = Math.clz32 ? Math.clz32 : ec, qa = Math.log, ba = Math.LN2;
  function ec(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (qa(e) / ba | 0) | 0;
  }
  var jr = 64, Pr = 4194304;
  function Bn(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Tr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, l = e.suspendedLanes, i = e.pingedLanes, o = n & 268435455;
    if (o !== 0) {
      var u = o & ~l;
      u !== 0 ? r = Bn(u) : (i &= o, i !== 0 && (r = Bn(i)));
    } else o = n & ~l, o !== 0 ? r = Bn(o) : i !== 0 && (r = Bn(i));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && (t & l) === 0 && (l = r & -r, i = t & -t, l >= i || l === 16 && (i & 4194240) !== 0)) return t;
    if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - at(t), l = 1 << n, r |= e[n], t &= ~l;
    return r;
  }
  function tc(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function nc(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
      var o = 31 - at(i), u = 1 << o, a = l[o];
      a === -1 ? ((u & n) === 0 || (u & r) !== 0) && (l[o] = tc(u, t)) : a <= t && (e.expiredLanes |= u), i &= ~u;
    }
  }
  function Ql(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function ru() {
    var e = jr;
    return jr <<= 1, (jr & 4194240) === 0 && (jr = 64), e;
  }
  function Kl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Vn(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - at(t), e[t] = n;
  }
  function rc(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - at(n), i = 1 << l;
      t[l] = 0, r[l] = -1, e[l] = -1, n &= ~i;
    }
  }
  function Yl(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - at(n), l = 1 << r;
      l & t | e[r] & t && (e[r] |= t), n &= ~l;
    }
  }
  var le = 0;
  function lu(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var iu, Gl, ou, uu, su, Xl = !1, zr = [], Tt = null, zt = null, Rt = null, Wn = /* @__PURE__ */ new Map(), Hn = /* @__PURE__ */ new Map(), Lt = [], lc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function au(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Tt = null;
        break;
      case "dragenter":
      case "dragleave":
        zt = null;
        break;
      case "mouseover":
      case "mouseout":
        Rt = null;
        break;
      case "pointerover":
      case "pointerout":
        Wn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Hn.delete(t.pointerId);
    }
  }
  function $n(e, t, n, r, l, i) {
    return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [l] }, t !== null && (t = lr(t), t !== null && Gl(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function ic(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return Tt = $n(Tt, e, t, n, r, l), !0;
      case "dragenter":
        return zt = $n(zt, e, t, n, r, l), !0;
      case "mouseover":
        return Rt = $n(Rt, e, t, n, r, l), !0;
      case "pointerover":
        var i = l.pointerId;
        return Wn.set(i, $n(Wn.get(i) || null, e, t, n, r, l)), !0;
      case "gotpointercapture":
        return i = l.pointerId, Hn.set(i, $n(Hn.get(i) || null, e, t, n, r, l)), !0;
    }
    return !1;
  }
  function cu(e) {
    var t = Jt(e.target);
    if (t !== null) {
      var n = Xt(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = Xo(n), t !== null) {
            e.blockedOn = t, su(e.priority, function() {
              ou(n);
            });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Rr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Zl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Ul = r, n.target.dispatchEvent(r), Ul = null;
      } else return t = lr(n), t !== null && Gl(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function fu(e, t, n) {
    Rr(e) && n.delete(t);
  }
  function oc() {
    Xl = !1, Tt !== null && Rr(Tt) && (Tt = null), zt !== null && Rr(zt) && (zt = null), Rt !== null && Rr(Rt) && (Rt = null), Wn.forEach(fu), Hn.forEach(fu);
  }
  function Qn(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Xl || (Xl = !0, k.unstable_scheduleCallback(k.unstable_NormalPriority, oc)));
  }
  function Kn(e) {
    function t(l) {
      return Qn(l, e);
    }
    if (0 < zr.length) {
      Qn(zr[0], e);
      for (var n = 1; n < zr.length; n++) {
        var r = zr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (Tt !== null && Qn(Tt, e), zt !== null && Qn(zt, e), Rt !== null && Qn(Rt, e), Wn.forEach(t), Hn.forEach(t), n = 0; n < Lt.length; n++) r = Lt[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Lt.length && (n = Lt[0], n.blockedOn === null); ) cu(n), n.blockedOn === null && Lt.shift();
  }
  var dn = de.ReactCurrentBatchConfig, Lr = !0;
  function uc(e, t, n, r) {
    var l = le, i = dn.transition;
    dn.transition = null;
    try {
      le = 1, Jl(e, t, n, r);
    } finally {
      le = l, dn.transition = i;
    }
  }
  function sc(e, t, n, r) {
    var l = le, i = dn.transition;
    dn.transition = null;
    try {
      le = 4, Jl(e, t, n, r);
    } finally {
      le = l, dn.transition = i;
    }
  }
  function Jl(e, t, n, r) {
    if (Lr) {
      var l = Zl(e, t, n, r);
      if (l === null) mi(e, t, r, Mr, n), au(e, r);
      else if (ic(l, e, t, n, r)) r.stopPropagation();
      else if (au(e, r), t & 4 && -1 < lc.indexOf(e)) {
        for (; l !== null; ) {
          var i = lr(l);
          if (i !== null && iu(i), i = Zl(e, t, n, r), i === null && mi(e, t, r, Mr, n), i === l) break;
          l = i;
        }
        l !== null && r.stopPropagation();
      } else mi(e, t, r, null, n);
    }
  }
  var Mr = null;
  function Zl(e, t, n, r) {
    if (Mr = null, e = Al(r), e = Jt(e), e !== null) if (t = Xt(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = Xo(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Mr = e, null;
  }
  function du(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Xa()) {
          case $l:
            return 1;
          case tu:
            return 4;
          case Nr:
          case Ja:
            return 16;
          case nu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Mt = null, ql = null, Ir = null;
  function pu() {
    if (Ir) return Ir;
    var e, t = ql, n = t.length, r, l = "value" in Mt ? Mt.value : Mt.textContent, i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === l[i - r]; r++) ;
    return Ir = l.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Dr(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Or() {
    return !0;
  }
  function mu() {
    return !1;
  }
  function qe(e) {
    function t(n, r, l, i, o) {
      this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = o, this.currentTarget = null;
      for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(i) : i[u]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Or : mu, this.isPropagationStopped = mu, this;
    }
    return j(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Or);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Or);
    }, persist: function() {
    }, isPersistent: Or }), t;
  }
  var pn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, bl = qe(pn), Yn = j({}, pn, { view: 0, detail: 0 }), ac = qe(Yn), ei, ti, Gn, Fr = j({}, Yn, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ri, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Gn && (Gn && e.type === "mousemove" ? (ei = e.screenX - Gn.screenX, ti = e.screenY - Gn.screenY) : ti = ei = 0, Gn = e), ei);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : ti;
  } }), hu = qe(Fr), cc = j({}, Fr, { dataTransfer: 0 }), fc = qe(cc), dc = j({}, Yn, { relatedTarget: 0 }), ni = qe(dc), pc = j({}, pn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), mc = qe(pc), hc = j({}, pn, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), vc = qe(hc), yc = j({}, pn, { data: 0 }), vu = qe(yc), gc = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, wc = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, xc = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Sc(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = xc[e]) ? !!t[e] : !1;
  }
  function ri() {
    return Sc;
  }
  var kc = j({}, Yn, { key: function(e) {
    if (e.key) {
      var t = gc[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Dr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? wc[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ri, charCode: function(e) {
    return e.type === "keypress" ? Dr(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Dr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Cc = qe(kc), Ec = j({}, Fr, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), yu = qe(Ec), Nc = j({}, Yn, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ri }), _c = qe(Nc), jc = j({}, pn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Pc = qe(jc), Tc = j({}, Fr, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), zc = qe(Tc), Rc = [9, 13, 27, 32], li = Y && "CompositionEvent" in window, Xn = null;
  Y && "documentMode" in document && (Xn = document.documentMode);
  var Lc = Y && "TextEvent" in window && !Xn, gu = Y && (!li || Xn && 8 < Xn && 11 >= Xn), wu = " ", xu = !1;
  function Su(e, t) {
    switch (e) {
      case "keyup":
        return Rc.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ku(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var mn = !1;
  function Mc(e, t) {
    switch (e) {
      case "compositionend":
        return ku(t);
      case "keypress":
        return t.which !== 32 ? null : (xu = !0, wu);
      case "textInput":
        return e = t.data, e === wu && xu ? null : e;
      default:
        return null;
    }
  }
  function Ic(e, t) {
    if (mn) return e === "compositionend" || !li && Su(e, t) ? (e = pu(), Ir = ql = Mt = null, mn = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return gu && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Dc = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Cu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Dc[e.type] : t === "textarea";
  }
  function Eu(e, t, n, r) {
    $o(r), t = Wr(t, "onChange"), 0 < t.length && (n = new bl("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var Jn = null, Zn = null;
  function Oc(e) {
    Wu(e, 0);
  }
  function Ur(e) {
    var t = wn(e);
    if (Lo(t)) return e;
  }
  function Fc(e, t) {
    if (e === "change") return t;
  }
  var Nu = !1;
  if (Y) {
    var ii;
    if (Y) {
      var oi = "oninput" in document;
      if (!oi) {
        var _u = document.createElement("div");
        _u.setAttribute("oninput", "return;"), oi = typeof _u.oninput == "function";
      }
      ii = oi;
    } else ii = !1;
    Nu = ii && (!document.documentMode || 9 < document.documentMode);
  }
  function ju() {
    Jn && (Jn.detachEvent("onpropertychange", Pu), Zn = Jn = null);
  }
  function Pu(e) {
    if (e.propertyName === "value" && Ur(Zn)) {
      var t = [];
      Eu(t, Zn, e, Al(e)), Go(Oc, t);
    }
  }
  function Uc(e, t, n) {
    e === "focusin" ? (ju(), Jn = t, Zn = n, Jn.attachEvent("onpropertychange", Pu)) : e === "focusout" && ju();
  }
  function Ac(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ur(Zn);
  }
  function Bc(e, t) {
    if (e === "click") return Ur(t);
  }
  function Vc(e, t) {
    if (e === "input" || e === "change") return Ur(t);
  }
  function Wc(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var ct = typeof Object.is == "function" ? Object.is : Wc;
  function qn(e, t) {
    if (ct(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!V.call(t, l) || !ct(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Tu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function zu(e, t) {
    var n = Tu(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Tu(n);
    }
  }
  function Ru(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ru(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Lu() {
    for (var e = window, t = Sr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Sr(e.document);
    }
    return t;
  }
  function ui(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function Hc(e) {
    var t = Lu(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Ru(n.ownerDocument.documentElement, n)) {
      if (r !== null && ui(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = n.textContent.length, i = Math.min(r.start, l);
          r = r.end === void 0 ? i : Math.min(r.end, l), !e.extend && i > r && (l = r, r = i, i = l), l = zu(n, i);
          var o = zu(
            n,
            r
          );
          l && o && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var $c = Y && "documentMode" in document && 11 >= document.documentMode, hn = null, si = null, bn = null, ai = !1;
  function Mu(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ai || hn == null || hn !== Sr(r) || (r = hn, "selectionStart" in r && ui(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), bn && qn(bn, r) || (bn = r, r = Wr(si, "onSelect"), 0 < r.length && (t = new bl("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = hn)));
  }
  function Ar(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var vn = { animationend: Ar("Animation", "AnimationEnd"), animationiteration: Ar("Animation", "AnimationIteration"), animationstart: Ar("Animation", "AnimationStart"), transitionend: Ar("Transition", "TransitionEnd") }, ci = {}, Iu = {};
  Y && (Iu = document.createElement("div").style, "AnimationEvent" in window || (delete vn.animationend.animation, delete vn.animationiteration.animation, delete vn.animationstart.animation), "TransitionEvent" in window || delete vn.transitionend.transition);
  function Br(e) {
    if (ci[e]) return ci[e];
    if (!vn[e]) return e;
    var t = vn[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in Iu) return ci[e] = t[n];
    return e;
  }
  var Du = Br("animationend"), Ou = Br("animationiteration"), Fu = Br("animationstart"), Uu = Br("transitionend"), Au = /* @__PURE__ */ new Map(), Bu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function It(e, t) {
    Au.set(e, t), R(t, [e]);
  }
  for (var fi = 0; fi < Bu.length; fi++) {
    var di = Bu[fi], Qc = di.toLowerCase(), Kc = di[0].toUpperCase() + di.slice(1);
    It(Qc, "on" + Kc);
  }
  It(Du, "onAnimationEnd"), It(Ou, "onAnimationIteration"), It(Fu, "onAnimationStart"), It("dblclick", "onDoubleClick"), It("focusin", "onFocus"), It("focusout", "onBlur"), It(Uu, "onTransitionEnd"), B("onMouseEnter", ["mouseout", "mouseover"]), B("onMouseLeave", ["mouseout", "mouseover"]), B("onPointerEnter", ["pointerout", "pointerover"]), B("onPointerLeave", ["pointerout", "pointerover"]), R("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), R("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), R("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), R("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), R("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), R("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var er = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Yc = new Set("cancel close invalid load scroll toggle".split(" ").concat(er));
  function Vu(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, Qa(r, t, void 0, e), e.currentTarget = null;
  }
  function Wu(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], l = r.event;
      r = r.listeners;
      e: {
        var i = void 0;
        if (t) for (var o = r.length - 1; 0 <= o; o--) {
          var u = r[o], a = u.instance, h = u.currentTarget;
          if (u = u.listener, a !== i && l.isPropagationStopped()) break e;
          Vu(l, u, h), i = a;
        }
        else for (o = 0; o < r.length; o++) {
          if (u = r[o], a = u.instance, h = u.currentTarget, u = u.listener, a !== i && l.isPropagationStopped()) break e;
          Vu(l, u, h), i = a;
        }
      }
    }
    if (Er) throw e = Hl, Er = !1, Hl = null, e;
  }
  function se(e, t) {
    var n = t[xi];
    n === void 0 && (n = t[xi] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (Hu(t, e, 2, !1), n.add(r));
  }
  function pi(e, t, n) {
    var r = 0;
    t && (r |= 4), Hu(n, e, r, t);
  }
  var Vr = "_reactListening" + Math.random().toString(36).slice(2);
  function tr(e) {
    if (!e[Vr]) {
      e[Vr] = !0, C.forEach(function(n) {
        n !== "selectionchange" && (Yc.has(n) || pi(n, !1, e), pi(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Vr] || (t[Vr] = !0, pi("selectionchange", !1, t));
    }
  }
  function Hu(e, t, n, r) {
    switch (du(t)) {
      case 1:
        var l = uc;
        break;
      case 4:
        l = sc;
        break;
      default:
        l = Jl;
    }
    n = l.bind(null, t, n, e), l = void 0, !Wl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
  }
  function mi(e, t, n, r, l) {
    var i = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null) e: for (; ; ) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || u.nodeType === 8 && u.parentNode === l) break;
        if (o === 4) for (o = r.return; o !== null; ) {
          var a = o.tag;
          if ((a === 3 || a === 4) && (a = o.stateNode.containerInfo, a === l || a.nodeType === 8 && a.parentNode === l)) return;
          o = o.return;
        }
        for (; u !== null; ) {
          if (o = Jt(u), o === null) return;
          if (a = o.tag, a === 5 || a === 6) {
            r = i = o;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
    Go(function() {
      var h = i, w = Al(n), x = [];
      e: {
        var g = Au.get(e);
        if (g !== void 0) {
          var _ = bl, T = e;
          switch (e) {
            case "keypress":
              if (Dr(n) === 0) break e;
            case "keydown":
            case "keyup":
              _ = Cc;
              break;
            case "focusin":
              T = "focus", _ = ni;
              break;
            case "focusout":
              T = "blur", _ = ni;
              break;
            case "beforeblur":
            case "afterblur":
              _ = ni;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              _ = hu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              _ = fc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              _ = _c;
              break;
            case Du:
            case Ou:
            case Fu:
              _ = mc;
              break;
            case Uu:
              _ = Pc;
              break;
            case "scroll":
              _ = ac;
              break;
            case "wheel":
              _ = zc;
              break;
            case "copy":
            case "cut":
            case "paste":
              _ = vc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              _ = yu;
          }
          var z = (t & 4) !== 0, xe = !z && e === "scroll", d = z ? g !== null ? g + "Capture" : null : g;
          z = [];
          for (var c = h, p; c !== null; ) {
            p = c;
            var S = p.stateNode;
            if (p.tag === 5 && S !== null && (p = S, d !== null && (S = Fn(c, d), S != null && z.push(nr(c, S, p)))), xe) break;
            c = c.return;
          }
          0 < z.length && (g = new _(g, T, null, n, w), x.push({ event: g, listeners: z }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (g = e === "mouseover" || e === "pointerover", _ = e === "mouseout" || e === "pointerout", g && n !== Ul && (T = n.relatedTarget || n.fromElement) && (Jt(T) || T[St])) break e;
          if ((_ || g) && (g = w.window === w ? w : (g = w.ownerDocument) ? g.defaultView || g.parentWindow : window, _ ? (T = n.relatedTarget || n.toElement, _ = h, T = T ? Jt(T) : null, T !== null && (xe = Xt(T), T !== xe || T.tag !== 5 && T.tag !== 6) && (T = null)) : (_ = null, T = h), _ !== T)) {
            if (z = hu, S = "onMouseLeave", d = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (z = yu, S = "onPointerLeave", d = "onPointerEnter", c = "pointer"), xe = _ == null ? g : wn(_), p = T == null ? g : wn(T), g = new z(S, c + "leave", _, n, w), g.target = xe, g.relatedTarget = p, S = null, Jt(w) === h && (z = new z(d, c + "enter", T, n, w), z.target = p, z.relatedTarget = xe, S = z), xe = S, _ && T) t: {
              for (z = _, d = T, c = 0, p = z; p; p = yn(p)) c++;
              for (p = 0, S = d; S; S = yn(S)) p++;
              for (; 0 < c - p; ) z = yn(z), c--;
              for (; 0 < p - c; ) d = yn(d), p--;
              for (; c--; ) {
                if (z === d || d !== null && z === d.alternate) break t;
                z = yn(z), d = yn(d);
              }
              z = null;
            }
            else z = null;
            _ !== null && $u(x, g, _, z, !1), T !== null && xe !== null && $u(x, xe, T, z, !0);
          }
        }
        e: {
          if (g = h ? wn(h) : window, _ = g.nodeName && g.nodeName.toLowerCase(), _ === "select" || _ === "input" && g.type === "file") var L = Fc;
          else if (Cu(g)) if (Nu) L = Vc;
          else {
            L = Ac;
            var I = Uc;
          }
          else (_ = g.nodeName) && _.toLowerCase() === "input" && (g.type === "checkbox" || g.type === "radio") && (L = Bc);
          if (L && (L = L(e, h))) {
            Eu(x, L, n, w);
            break e;
          }
          I && I(e, g, h), e === "focusout" && (I = g._wrapperState) && I.controlled && g.type === "number" && Ml(g, "number", g.value);
        }
        switch (I = h ? wn(h) : window, e) {
          case "focusin":
            (Cu(I) || I.contentEditable === "true") && (hn = I, si = h, bn = null);
            break;
          case "focusout":
            bn = si = hn = null;
            break;
          case "mousedown":
            ai = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ai = !1, Mu(x, n, w);
            break;
          case "selectionchange":
            if ($c) break;
          case "keydown":
          case "keyup":
            Mu(x, n, w);
        }
        var D;
        if (li) e: {
          switch (e) {
            case "compositionstart":
              var U = "onCompositionStart";
              break e;
            case "compositionend":
              U = "onCompositionEnd";
              break e;
            case "compositionupdate":
              U = "onCompositionUpdate";
              break e;
          }
          U = void 0;
        }
        else mn ? Su(e, n) && (U = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (U = "onCompositionStart");
        U && (gu && n.locale !== "ko" && (mn || U !== "onCompositionStart" ? U === "onCompositionEnd" && mn && (D = pu()) : (Mt = w, ql = "value" in Mt ? Mt.value : Mt.textContent, mn = !0)), I = Wr(h, U), 0 < I.length && (U = new vu(U, e, null, n, w), x.push({ event: U, listeners: I }), D ? U.data = D : (D = ku(n), D !== null && (U.data = D)))), (D = Lc ? Mc(e, n) : Ic(e, n)) && (h = Wr(h, "onBeforeInput"), 0 < h.length && (w = new vu("onBeforeInput", "beforeinput", null, n, w), x.push({ event: w, listeners: h }), w.data = D));
      }
      Wu(x, t);
    });
  }
  function nr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Wr(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e, i = l.stateNode;
      l.tag === 5 && i !== null && (l = i, i = Fn(e, n), i != null && r.unshift(nr(e, i, l)), i = Fn(e, t), i != null && r.push(nr(e, i, l))), e = e.return;
    }
    return r;
  }
  function yn(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function $u(e, t, n, r, l) {
    for (var i = t._reactName, o = []; n !== null && n !== r; ) {
      var u = n, a = u.alternate, h = u.stateNode;
      if (a !== null && a === r) break;
      u.tag === 5 && h !== null && (u = h, l ? (a = Fn(n, i), a != null && o.unshift(nr(n, a, u))) : l || (a = Fn(n, i), a != null && o.push(nr(n, a, u)))), n = n.return;
    }
    o.length !== 0 && e.push({ event: t, listeners: o });
  }
  var Gc = /\r\n?/g, Xc = /\u0000|\uFFFD/g;
  function Qu(e) {
    return (typeof e == "string" ? e : "" + e).replace(Gc, `
`).replace(Xc, "");
  }
  function Hr(e, t, n) {
    if (t = Qu(t), Qu(e) !== t && n) throw Error(m(425));
  }
  function $r() {
  }
  var hi = null, vi = null;
  function yi(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var gi = typeof setTimeout == "function" ? setTimeout : void 0, Jc = typeof clearTimeout == "function" ? clearTimeout : void 0, Ku = typeof Promise == "function" ? Promise : void 0, Zc = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ku < "u" ? function(e) {
    return Ku.resolve(null).then(e).catch(qc);
  } : gi;
  function qc(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function wi(e, t) {
    var n = t, r = 0;
    do {
      var l = n.nextSibling;
      if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
        if (r === 0) {
          e.removeChild(l), Kn(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = l;
    } while (n);
    Kn(t);
  }
  function Dt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Yu(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var gn = Math.random().toString(36).slice(2), yt = "__reactFiber$" + gn, rr = "__reactProps$" + gn, St = "__reactContainer$" + gn, xi = "__reactEvents$" + gn, bc = "__reactListeners$" + gn, ef = "__reactHandles$" + gn;
  function Jt(e) {
    var t = e[yt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[St] || n[yt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Yu(e); e !== null; ) {
          if (n = e[yt]) return n;
          e = Yu(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function lr(e) {
    return e = e[yt] || e[St], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function wn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(m(33));
  }
  function Qr(e) {
    return e[rr] || null;
  }
  var Si = [], xn = -1;
  function Ot(e) {
    return { current: e };
  }
  function ae(e) {
    0 > xn || (e.current = Si[xn], Si[xn] = null, xn--);
  }
  function oe(e, t) {
    xn++, Si[xn] = e.current, e.current = t;
  }
  var Ft = {}, De = Ot(Ft), He = Ot(!1), Zt = Ft;
  function Sn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Ft;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, i;
    for (i in n) l[i] = t[i];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function $e(e) {
    return e = e.childContextTypes, e != null;
  }
  function Kr() {
    ae(He), ae(De);
  }
  function Gu(e, t, n) {
    if (De.current !== Ft) throw Error(m(168));
    oe(De, t), oe(He, n);
  }
  function Xu(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(m(108, ie(e) || "Unknown", l));
    return j({}, n, r);
  }
  function Yr(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ft, Zt = De.current, oe(De, e), oe(He, He.current), !0;
  }
  function Ju(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(m(169));
    n ? (e = Xu(e, t, Zt), r.__reactInternalMemoizedMergedChildContext = e, ae(He), ae(De), oe(De, e)) : ae(He), oe(He, n);
  }
  var kt = null, Gr = !1, ki = !1;
  function Zu(e) {
    kt === null ? kt = [e] : kt.push(e);
  }
  function tf(e) {
    Gr = !0, Zu(e);
  }
  function Ut() {
    if (!ki && kt !== null) {
      ki = !0;
      var e = 0, t = le;
      try {
        var n = kt;
        for (le = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        kt = null, Gr = !1;
      } catch (l) {
        throw kt !== null && (kt = kt.slice(e + 1)), bo($l, Ut), l;
      } finally {
        le = t, ki = !1;
      }
    }
    return null;
  }
  var kn = [], Cn = 0, Xr = null, Jr = 0, rt = [], lt = 0, qt = null, Ct = 1, Et = "";
  function bt(e, t) {
    kn[Cn++] = Jr, kn[Cn++] = Xr, Xr = e, Jr = t;
  }
  function qu(e, t, n) {
    rt[lt++] = Ct, rt[lt++] = Et, rt[lt++] = qt, qt = e;
    var r = Ct;
    e = Et;
    var l = 32 - at(r) - 1;
    r &= ~(1 << l), n += 1;
    var i = 32 - at(t) + l;
    if (30 < i) {
      var o = l - l % 5;
      i = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, Ct = 1 << 32 - at(t) + l | n << l | r, Et = i + e;
    } else Ct = 1 << i | n << l | r, Et = e;
  }
  function Ci(e) {
    e.return !== null && (bt(e, 1), qu(e, 1, 0));
  }
  function Ei(e) {
    for (; e === Xr; ) Xr = kn[--Cn], kn[Cn] = null, Jr = kn[--Cn], kn[Cn] = null;
    for (; e === qt; ) qt = rt[--lt], rt[lt] = null, Et = rt[--lt], rt[lt] = null, Ct = rt[--lt], rt[lt] = null;
  }
  var be = null, et = null, fe = !1, ft = null;
  function bu(e, t) {
    var n = st(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function es(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, be = e, et = Dt(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, be = e, et = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = qt !== null ? { id: Ct, overflow: Et } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = st(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, be = e, et = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Ni(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function _i(e) {
    if (fe) {
      var t = et;
      if (t) {
        var n = t;
        if (!es(e, t)) {
          if (Ni(e)) throw Error(m(418));
          t = Dt(n.nextSibling);
          var r = be;
          t && es(e, t) ? bu(r, n) : (e.flags = e.flags & -4097 | 2, fe = !1, be = e);
        }
      } else {
        if (Ni(e)) throw Error(m(418));
        e.flags = e.flags & -4097 | 2, fe = !1, be = e;
      }
    }
  }
  function ts(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    be = e;
  }
  function Zr(e) {
    if (e !== be) return !1;
    if (!fe) return ts(e), fe = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !yi(e.type, e.memoizedProps)), t && (t = et)) {
      if (Ni(e)) throw ns(), Error(m(418));
      for (; t; ) bu(e, t), t = Dt(t.nextSibling);
    }
    if (ts(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(m(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                et = Dt(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        et = null;
      }
    } else et = be ? Dt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ns() {
    for (var e = et; e; ) e = Dt(e.nextSibling);
  }
  function En() {
    et = be = null, fe = !1;
  }
  function ji(e) {
    ft === null ? ft = [e] : ft.push(e);
  }
  var nf = de.ReactCurrentBatchConfig;
  function ir(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(m(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(m(147, e));
        var l = r, i = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(o) {
          var u = l.refs;
          o === null ? delete u[i] : u[i] = o;
        }, t._stringRef = i, t);
      }
      if (typeof e != "string") throw Error(m(284));
      if (!n._owner) throw Error(m(290, e));
    }
    return e;
  }
  function qr(e, t) {
    throw e = Object.prototype.toString.call(t), Error(m(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function rs(e) {
    var t = e._init;
    return t(e._payload);
  }
  function ls(e) {
    function t(d, c) {
      if (e) {
        var p = d.deletions;
        p === null ? (d.deletions = [c], d.flags |= 16) : p.push(c);
      }
    }
    function n(d, c) {
      if (!e) return null;
      for (; c !== null; ) t(d, c), c = c.sibling;
      return null;
    }
    function r(d, c) {
      for (d = /* @__PURE__ */ new Map(); c !== null; ) c.key !== null ? d.set(c.key, c) : d.set(c.index, c), c = c.sibling;
      return d;
    }
    function l(d, c) {
      return d = Kt(d, c), d.index = 0, d.sibling = null, d;
    }
    function i(d, c, p) {
      return d.index = p, e ? (p = d.alternate, p !== null ? (p = p.index, p < c ? (d.flags |= 2, c) : p) : (d.flags |= 2, c)) : (d.flags |= 1048576, c);
    }
    function o(d) {
      return e && d.alternate === null && (d.flags |= 2), d;
    }
    function u(d, c, p, S) {
      return c === null || c.tag !== 6 ? (c = wo(p, d.mode, S), c.return = d, c) : (c = l(c, p), c.return = d, c);
    }
    function a(d, c, p, S) {
      var L = p.type;
      return L === Re ? w(d, c, p.props.children, S, p.key) : c !== null && (c.elementType === L || typeof L == "object" && L !== null && L.$$typeof === pe && rs(L) === c.type) ? (S = l(c, p.props), S.ref = ir(d, c, p), S.return = d, S) : (S = kl(p.type, p.key, p.props, null, d.mode, S), S.ref = ir(d, c, p), S.return = d, S);
    }
    function h(d, c, p, S) {
      return c === null || c.tag !== 4 || c.stateNode.containerInfo !== p.containerInfo || c.stateNode.implementation !== p.implementation ? (c = xo(p, d.mode, S), c.return = d, c) : (c = l(c, p.children || []), c.return = d, c);
    }
    function w(d, c, p, S, L) {
      return c === null || c.tag !== 7 ? (c = sn(p, d.mode, S, L), c.return = d, c) : (c = l(c, p), c.return = d, c);
    }
    function x(d, c, p) {
      if (typeof c == "string" && c !== "" || typeof c == "number") return c = wo("" + c, d.mode, p), c.return = d, c;
      if (typeof c == "object" && c !== null) {
        switch (c.$$typeof) {
          case ke:
            return p = kl(c.type, c.key, c.props, null, d.mode, p), p.ref = ir(d, null, c), p.return = d, p;
          case ze:
            return c = xo(c, d.mode, p), c.return = d, c;
          case pe:
            var S = c._init;
            return x(d, S(c._payload), p);
        }
        if (In(c) || O(c)) return c = sn(c, d.mode, p, null), c.return = d, c;
        qr(d, c);
      }
      return null;
    }
    function g(d, c, p, S) {
      var L = c !== null ? c.key : null;
      if (typeof p == "string" && p !== "" || typeof p == "number") return L !== null ? null : u(d, c, "" + p, S);
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case ke:
            return p.key === L ? a(d, c, p, S) : null;
          case ze:
            return p.key === L ? h(d, c, p, S) : null;
          case pe:
            return L = p._init, g(
              d,
              c,
              L(p._payload),
              S
            );
        }
        if (In(p) || O(p)) return L !== null ? null : w(d, c, p, S, null);
        qr(d, p);
      }
      return null;
    }
    function _(d, c, p, S, L) {
      if (typeof S == "string" && S !== "" || typeof S == "number") return d = d.get(p) || null, u(c, d, "" + S, L);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case ke:
            return d = d.get(S.key === null ? p : S.key) || null, a(c, d, S, L);
          case ze:
            return d = d.get(S.key === null ? p : S.key) || null, h(c, d, S, L);
          case pe:
            var I = S._init;
            return _(d, c, p, I(S._payload), L);
        }
        if (In(S) || O(S)) return d = d.get(p) || null, w(c, d, S, L, null);
        qr(c, S);
      }
      return null;
    }
    function T(d, c, p, S) {
      for (var L = null, I = null, D = c, U = c = 0, Te = null; D !== null && U < p.length; U++) {
        D.index > U ? (Te = D, D = null) : Te = D.sibling;
        var b = g(d, D, p[U], S);
        if (b === null) {
          D === null && (D = Te);
          break;
        }
        e && D && b.alternate === null && t(d, D), c = i(b, c, U), I === null ? L = b : I.sibling = b, I = b, D = Te;
      }
      if (U === p.length) return n(d, D), fe && bt(d, U), L;
      if (D === null) {
        for (; U < p.length; U++) D = x(d, p[U], S), D !== null && (c = i(D, c, U), I === null ? L = D : I.sibling = D, I = D);
        return fe && bt(d, U), L;
      }
      for (D = r(d, D); U < p.length; U++) Te = _(D, d, U, p[U], S), Te !== null && (e && Te.alternate !== null && D.delete(Te.key === null ? U : Te.key), c = i(Te, c, U), I === null ? L = Te : I.sibling = Te, I = Te);
      return e && D.forEach(function(Yt) {
        return t(d, Yt);
      }), fe && bt(d, U), L;
    }
    function z(d, c, p, S) {
      var L = O(p);
      if (typeof L != "function") throw Error(m(150));
      if (p = L.call(p), p == null) throw Error(m(151));
      for (var I = L = null, D = c, U = c = 0, Te = null, b = p.next(); D !== null && !b.done; U++, b = p.next()) {
        D.index > U ? (Te = D, D = null) : Te = D.sibling;
        var Yt = g(d, D, b.value, S);
        if (Yt === null) {
          D === null && (D = Te);
          break;
        }
        e && D && Yt.alternate === null && t(d, D), c = i(Yt, c, U), I === null ? L = Yt : I.sibling = Yt, I = Yt, D = Te;
      }
      if (b.done) return n(
        d,
        D
      ), fe && bt(d, U), L;
      if (D === null) {
        for (; !b.done; U++, b = p.next()) b = x(d, b.value, S), b !== null && (c = i(b, c, U), I === null ? L = b : I.sibling = b, I = b);
        return fe && bt(d, U), L;
      }
      for (D = r(d, D); !b.done; U++, b = p.next()) b = _(D, d, U, b.value, S), b !== null && (e && b.alternate !== null && D.delete(b.key === null ? U : b.key), c = i(b, c, U), I === null ? L = b : I.sibling = b, I = b);
      return e && D.forEach(function(Of) {
        return t(d, Of);
      }), fe && bt(d, U), L;
    }
    function xe(d, c, p, S) {
      if (typeof p == "object" && p !== null && p.type === Re && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case ke:
            e: {
              for (var L = p.key, I = c; I !== null; ) {
                if (I.key === L) {
                  if (L = p.type, L === Re) {
                    if (I.tag === 7) {
                      n(d, I.sibling), c = l(I, p.props.children), c.return = d, d = c;
                      break e;
                    }
                  } else if (I.elementType === L || typeof L == "object" && L !== null && L.$$typeof === pe && rs(L) === I.type) {
                    n(d, I.sibling), c = l(I, p.props), c.ref = ir(d, I, p), c.return = d, d = c;
                    break e;
                  }
                  n(d, I);
                  break;
                } else t(d, I);
                I = I.sibling;
              }
              p.type === Re ? (c = sn(p.props.children, d.mode, S, p.key), c.return = d, d = c) : (S = kl(p.type, p.key, p.props, null, d.mode, S), S.ref = ir(d, c, p), S.return = d, d = S);
            }
            return o(d);
          case ze:
            e: {
              for (I = p.key; c !== null; ) {
                if (c.key === I) if (c.tag === 4 && c.stateNode.containerInfo === p.containerInfo && c.stateNode.implementation === p.implementation) {
                  n(d, c.sibling), c = l(c, p.children || []), c.return = d, d = c;
                  break e;
                } else {
                  n(d, c);
                  break;
                }
                else t(d, c);
                c = c.sibling;
              }
              c = xo(p, d.mode, S), c.return = d, d = c;
            }
            return o(d);
          case pe:
            return I = p._init, xe(d, c, I(p._payload), S);
        }
        if (In(p)) return T(d, c, p, S);
        if (O(p)) return z(d, c, p, S);
        qr(d, p);
      }
      return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, c !== null && c.tag === 6 ? (n(d, c.sibling), c = l(c, p), c.return = d, d = c) : (n(d, c), c = wo(p, d.mode, S), c.return = d, d = c), o(d)) : n(d, c);
    }
    return xe;
  }
  var Nn = ls(!0), is = ls(!1), br = Ot(null), el = null, _n = null, Pi = null;
  function Ti() {
    Pi = _n = el = null;
  }
  function zi(e) {
    var t = br.current;
    ae(br), e._currentValue = t;
  }
  function Ri(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function jn(e, t) {
    el = e, Pi = _n = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (Qe = !0), e.firstContext = null);
  }
  function it(e) {
    var t = e._currentValue;
    if (Pi !== e) if (e = { context: e, memoizedValue: t, next: null }, _n === null) {
      if (el === null) throw Error(m(308));
      _n = e, el.dependencies = { lanes: 0, firstContext: e };
    } else _n = _n.next = e;
    return t;
  }
  var en = null;
  function Li(e) {
    en === null ? en = [e] : en.push(e);
  }
  function os(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n, Li(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Nt(e, r);
  }
  function Nt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var At = !1;
  function Mi(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function us(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function _t(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Bt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (J & 2) !== 0) {
      var l = r.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Nt(e, n);
    }
    return l = r.interleaved, l === null ? (t.next = t, Li(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Nt(e, n);
  }
  function tl(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Yl(e, n);
    }
  }
  function ss(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var l = null, i = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var o = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          i === null ? l = i = o : i = i.next = o, n = n.next;
        } while (n !== null);
        i === null ? l = i = t : i = i.next = t;
      } else l = i = t;
      n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function nl(e, t, n, r) {
    var l = e.updateQueue;
    At = !1;
    var i = l.firstBaseUpdate, o = l.lastBaseUpdate, u = l.shared.pending;
    if (u !== null) {
      l.shared.pending = null;
      var a = u, h = a.next;
      a.next = null, o === null ? i = h : o.next = h, o = a;
      var w = e.alternate;
      w !== null && (w = w.updateQueue, u = w.lastBaseUpdate, u !== o && (u === null ? w.firstBaseUpdate = h : u.next = h, w.lastBaseUpdate = a));
    }
    if (i !== null) {
      var x = l.baseState;
      o = 0, w = h = a = null, u = i;
      do {
        var g = u.lane, _ = u.eventTime;
        if ((r & g) === g) {
          w !== null && (w = w.next = {
            eventTime: _,
            lane: 0,
            tag: u.tag,
            payload: u.payload,
            callback: u.callback,
            next: null
          });
          e: {
            var T = e, z = u;
            switch (g = t, _ = n, z.tag) {
              case 1:
                if (T = z.payload, typeof T == "function") {
                  x = T.call(_, x, g);
                  break e;
                }
                x = T;
                break e;
              case 3:
                T.flags = T.flags & -65537 | 128;
              case 0:
                if (T = z.payload, g = typeof T == "function" ? T.call(_, x, g) : T, g == null) break e;
                x = j({}, x, g);
                break e;
              case 2:
                At = !0;
            }
          }
          u.callback !== null && u.lane !== 0 && (e.flags |= 64, g = l.effects, g === null ? l.effects = [u] : g.push(u));
        } else _ = { eventTime: _, lane: g, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, w === null ? (h = w = _, a = x) : w = w.next = _, o |= g;
        if (u = u.next, u === null) {
          if (u = l.shared.pending, u === null) break;
          g = u, u = g.next, g.next = null, l.lastBaseUpdate = g, l.shared.pending = null;
        }
      } while (!0);
      if (w === null && (a = x), l.baseState = a, l.firstBaseUpdate = h, l.lastBaseUpdate = w, t = l.shared.interleaved, t !== null) {
        l = t;
        do
          o |= l.lane, l = l.next;
        while (l !== t);
      } else i === null && (l.shared.lanes = 0);
      rn |= o, e.lanes = o, e.memoizedState = x;
    }
  }
  function as(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], l = r.callback;
      if (l !== null) {
        if (r.callback = null, r = n, typeof l != "function") throw Error(m(191, l));
        l.call(r);
      }
    }
  }
  var or = {}, gt = Ot(or), ur = Ot(or), sr = Ot(or);
  function tn(e) {
    if (e === or) throw Error(m(174));
    return e;
  }
  function Ii(e, t) {
    switch (oe(sr, t), oe(ur, e), oe(gt, or), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Dl(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Dl(t, e);
    }
    ae(gt), oe(gt, t);
  }
  function Pn() {
    ae(gt), ae(ur), ae(sr);
  }
  function cs(e) {
    tn(sr.current);
    var t = tn(gt.current), n = Dl(t, e.type);
    t !== n && (oe(ur, e), oe(gt, n));
  }
  function Di(e) {
    ur.current === e && (ae(gt), ae(ur));
  }
  var me = Ot(0);
  function rl(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var Oi = [];
  function Fi() {
    for (var e = 0; e < Oi.length; e++) Oi[e]._workInProgressVersionPrimary = null;
    Oi.length = 0;
  }
  var ll = de.ReactCurrentDispatcher, Ui = de.ReactCurrentBatchConfig, nn = 0, he = null, Ee = null, je = null, il = !1, ar = !1, cr = 0, rf = 0;
  function Oe() {
    throw Error(m(321));
  }
  function Ai(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!ct(e[n], t[n])) return !1;
    return !0;
  }
  function Bi(e, t, n, r, l, i) {
    if (nn = i, he = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ll.current = e === null || e.memoizedState === null ? sf : af, e = n(r, l), ar) {
      i = 0;
      do {
        if (ar = !1, cr = 0, 25 <= i) throw Error(m(301));
        i += 1, je = Ee = null, t.updateQueue = null, ll.current = cf, e = n(r, l);
      } while (ar);
    }
    if (ll.current = sl, t = Ee !== null && Ee.next !== null, nn = 0, je = Ee = he = null, il = !1, t) throw Error(m(300));
    return e;
  }
  function Vi() {
    var e = cr !== 0;
    return cr = 0, e;
  }
  function wt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return je === null ? he.memoizedState = je = e : je = je.next = e, je;
  }
  function ot() {
    if (Ee === null) {
      var e = he.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ee.next;
    var t = je === null ? he.memoizedState : je.next;
    if (t !== null) je = t, Ee = e;
    else {
      if (e === null) throw Error(m(310));
      Ee = e, e = { memoizedState: Ee.memoizedState, baseState: Ee.baseState, baseQueue: Ee.baseQueue, queue: Ee.queue, next: null }, je === null ? he.memoizedState = je = e : je = je.next = e;
    }
    return je;
  }
  function fr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Wi(e) {
    var t = ot(), n = t.queue;
    if (n === null) throw Error(m(311));
    n.lastRenderedReducer = e;
    var r = Ee, l = r.baseQueue, i = n.pending;
    if (i !== null) {
      if (l !== null) {
        var o = l.next;
        l.next = i.next, i.next = o;
      }
      r.baseQueue = l = i, n.pending = null;
    }
    if (l !== null) {
      i = l.next, r = r.baseState;
      var u = o = null, a = null, h = i;
      do {
        var w = h.lane;
        if ((nn & w) === w) a !== null && (a = a.next = { lane: 0, action: h.action, hasEagerState: h.hasEagerState, eagerState: h.eagerState, next: null }), r = h.hasEagerState ? h.eagerState : e(r, h.action);
        else {
          var x = {
            lane: w,
            action: h.action,
            hasEagerState: h.hasEagerState,
            eagerState: h.eagerState,
            next: null
          };
          a === null ? (u = a = x, o = r) : a = a.next = x, he.lanes |= w, rn |= w;
        }
        h = h.next;
      } while (h !== null && h !== i);
      a === null ? o = r : a.next = u, ct(r, t.memoizedState) || (Qe = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = a, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      l = e;
      do
        i = l.lane, he.lanes |= i, rn |= i, l = l.next;
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Hi(e) {
    var t = ot(), n = t.queue;
    if (n === null) throw Error(m(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, l = n.pending, i = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var o = l = l.next;
      do
        i = e(i, o.action), o = o.next;
      while (o !== l);
      ct(i, t.memoizedState) || (Qe = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
    }
    return [i, r];
  }
  function fs() {
  }
  function ds(e, t) {
    var n = he, r = ot(), l = t(), i = !ct(r.memoizedState, l);
    if (i && (r.memoizedState = l, Qe = !0), r = r.queue, $i(hs.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || je !== null && je.memoizedState.tag & 1) {
      if (n.flags |= 2048, dr(9, ms.bind(null, n, r, l, t), void 0, null), Pe === null) throw Error(m(349));
      (nn & 30) !== 0 || ps(n, t, l);
    }
    return l;
  }
  function ps(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = he.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, he.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function ms(e, t, n, r) {
    t.value = n, t.getSnapshot = r, vs(t) && ys(e);
  }
  function hs(e, t, n) {
    return n(function() {
      vs(t) && ys(e);
    });
  }
  function vs(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !ct(e, n);
    } catch {
      return !0;
    }
  }
  function ys(e) {
    var t = Nt(e, 1);
    t !== null && ht(t, e, 1, -1);
  }
  function gs(e) {
    var t = wt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: fr, lastRenderedState: e }, t.queue = e, e = e.dispatch = uf.bind(null, he, e), [t.memoizedState, e];
  }
  function dr(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = he.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, he.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function ws() {
    return ot().memoizedState;
  }
  function ol(e, t, n, r) {
    var l = wt();
    he.flags |= e, l.memoizedState = dr(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function ul(e, t, n, r) {
    var l = ot();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (Ee !== null) {
      var o = Ee.memoizedState;
      if (i = o.destroy, r !== null && Ai(r, o.deps)) {
        l.memoizedState = dr(t, n, i, r);
        return;
      }
    }
    he.flags |= e, l.memoizedState = dr(1 | t, n, i, r);
  }
  function xs(e, t) {
    return ol(8390656, 8, e, t);
  }
  function $i(e, t) {
    return ul(2048, 8, e, t);
  }
  function Ss(e, t) {
    return ul(4, 2, e, t);
  }
  function ks(e, t) {
    return ul(4, 4, e, t);
  }
  function Cs(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Es(e, t, n) {
    return n = n != null ? n.concat([e]) : null, ul(4, 4, Cs.bind(null, t, e), n);
  }
  function Qi() {
  }
  function Ns(e, t) {
    var n = ot();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ai(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function _s(e, t) {
    var n = ot();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ai(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function js(e, t, n) {
    return (nn & 21) === 0 ? (e.baseState && (e.baseState = !1, Qe = !0), e.memoizedState = n) : (ct(n, t) || (n = ru(), he.lanes |= n, rn |= n, e.baseState = !0), t);
  }
  function lf(e, t) {
    var n = le;
    le = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Ui.transition;
    Ui.transition = {};
    try {
      e(!1), t();
    } finally {
      le = n, Ui.transition = r;
    }
  }
  function Ps() {
    return ot().memoizedState;
  }
  function of(e, t, n) {
    var r = $t(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Ts(e)) zs(t, n);
    else if (n = os(e, t, n, r), n !== null) {
      var l = We();
      ht(n, e, r, l), Rs(n, t, r);
    }
  }
  function uf(e, t, n) {
    var r = $t(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Ts(e)) zs(t, l);
    else {
      var i = e.alternate;
      if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
        var o = t.lastRenderedState, u = i(o, n);
        if (l.hasEagerState = !0, l.eagerState = u, ct(u, o)) {
          var a = t.interleaved;
          a === null ? (l.next = l, Li(t)) : (l.next = a.next, a.next = l), t.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
      n = os(e, t, l, r), n !== null && (l = We(), ht(n, e, r, l), Rs(n, t, r));
    }
  }
  function Ts(e) {
    var t = e.alternate;
    return e === he || t !== null && t === he;
  }
  function zs(e, t) {
    ar = il = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Rs(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Yl(e, n);
    }
  }
  var sl = { readContext: it, useCallback: Oe, useContext: Oe, useEffect: Oe, useImperativeHandle: Oe, useInsertionEffect: Oe, useLayoutEffect: Oe, useMemo: Oe, useReducer: Oe, useRef: Oe, useState: Oe, useDebugValue: Oe, useDeferredValue: Oe, useTransition: Oe, useMutableSource: Oe, useSyncExternalStore: Oe, useId: Oe, unstable_isNewReconciler: !1 }, sf = { readContext: it, useCallback: function(e, t) {
    return wt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: it, useEffect: xs, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, ol(
      4194308,
      4,
      Cs.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return ol(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return ol(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = wt();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = wt();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = of.bind(null, he, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = wt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: gs, useDebugValue: Qi, useDeferredValue: function(e) {
    return wt().memoizedState = e;
  }, useTransition: function() {
    var e = gs(!1), t = e[0];
    return e = lf.bind(null, e[1]), wt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = he, l = wt();
    if (fe) {
      if (n === void 0) throw Error(m(407));
      n = n();
    } else {
      if (n = t(), Pe === null) throw Error(m(349));
      (nn & 30) !== 0 || ps(r, t, n);
    }
    l.memoizedState = n;
    var i = { value: n, getSnapshot: t };
    return l.queue = i, xs(hs.bind(
      null,
      r,
      i,
      e
    ), [e]), r.flags |= 2048, dr(9, ms.bind(null, r, i, n, t), void 0, null), n;
  }, useId: function() {
    var e = wt(), t = Pe.identifierPrefix;
    if (fe) {
      var n = Et, r = Ct;
      n = (r & ~(1 << 32 - at(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = cr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = rf++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, af = {
    readContext: it,
    useCallback: Ns,
    useContext: it,
    useEffect: $i,
    useImperativeHandle: Es,
    useInsertionEffect: Ss,
    useLayoutEffect: ks,
    useMemo: _s,
    useReducer: Wi,
    useRef: ws,
    useState: function() {
      return Wi(fr);
    },
    useDebugValue: Qi,
    useDeferredValue: function(e) {
      var t = ot();
      return js(t, Ee.memoizedState, e);
    },
    useTransition: function() {
      var e = Wi(fr)[0], t = ot().memoizedState;
      return [e, t];
    },
    useMutableSource: fs,
    useSyncExternalStore: ds,
    useId: Ps,
    unstable_isNewReconciler: !1
  }, cf = { readContext: it, useCallback: Ns, useContext: it, useEffect: $i, useImperativeHandle: Es, useInsertionEffect: Ss, useLayoutEffect: ks, useMemo: _s, useReducer: Hi, useRef: ws, useState: function() {
    return Hi(fr);
  }, useDebugValue: Qi, useDeferredValue: function(e) {
    var t = ot();
    return Ee === null ? t.memoizedState = e : js(t, Ee.memoizedState, e);
  }, useTransition: function() {
    var e = Hi(fr)[0], t = ot().memoizedState;
    return [e, t];
  }, useMutableSource: fs, useSyncExternalStore: ds, useId: Ps, unstable_isNewReconciler: !1 };
  function dt(e, t) {
    if (e && e.defaultProps) {
      t = j({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Ki(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : j({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var al = { isMounted: function(e) {
    return (e = e._reactInternals) ? Xt(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = We(), l = $t(e), i = _t(r, l);
    i.payload = t, n != null && (i.callback = n), t = Bt(e, i, l), t !== null && (ht(t, e, l, r), tl(t, e, l));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = We(), l = $t(e), i = _t(r, l);
    i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Bt(e, i, l), t !== null && (ht(t, e, l, r), tl(t, e, l));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = We(), r = $t(e), l = _t(n, r);
    l.tag = 2, t != null && (l.callback = t), t = Bt(e, l, r), t !== null && (ht(t, e, r, n), tl(t, e, r));
  } };
  function Ls(e, t, n, r, l, i, o) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : t.prototype && t.prototype.isPureReactComponent ? !qn(n, r) || !qn(l, i) : !0;
  }
  function Ms(e, t, n) {
    var r = !1, l = Ft, i = t.contextType;
    return typeof i == "object" && i !== null ? i = it(i) : (l = $e(t) ? Zt : De.current, r = t.contextTypes, i = (r = r != null) ? Sn(e, l) : Ft), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = al, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t;
  }
  function Is(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && al.enqueueReplaceState(t, t.state, null);
  }
  function Yi(e, t, n, r) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, Mi(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? l.context = it(i) : (i = $e(t) ? Zt : De.current, l.context = Sn(e, i)), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Ki(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && al.enqueueReplaceState(l, l.state, null), nl(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Tn(e, t) {
    try {
      var n = "", r = t;
      do
        n += Z(r), r = r.return;
      while (r);
      var l = n;
    } catch (i) {
      l = `
Error generating stack: ` + i.message + `
` + i.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function Gi(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Xi(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var ff = typeof WeakMap == "function" ? WeakMap : Map;
  function Ds(e, t, n) {
    n = _t(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      vl || (vl = !0, co = r), Xi(e, t);
    }, n;
  }
  function Os(e, t, n) {
    n = _t(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      n.payload = function() {
        return r(l);
      }, n.callback = function() {
        Xi(e, t);
      };
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
      Xi(e, t), typeof r != "function" && (Wt === null ? Wt = /* @__PURE__ */ new Set([this]) : Wt.add(this));
      var o = t.stack;
      this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
    }), n;
  }
  function Fs(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new ff();
      var l = /* @__PURE__ */ new Set();
      r.set(t, l);
    } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
    l.has(n) || (l.add(n), e = Nf.bind(null, e, t, n), t.then(e, e));
  }
  function Us(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function As(e, t, n, r, l) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = _t(-1, 1), t.tag = 2, Bt(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = l, e);
  }
  var df = de.ReactCurrentOwner, Qe = !1;
  function Ve(e, t, n, r) {
    t.child = e === null ? is(t, null, n, r) : Nn(t, e.child, n, r);
  }
  function Bs(e, t, n, r, l) {
    n = n.render;
    var i = t.ref;
    return jn(t, l), r = Bi(e, t, n, r, i, l), n = Vi(), e !== null && !Qe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, jt(e, t, l)) : (fe && n && Ci(t), t.flags |= 1, Ve(e, t, r, l), t.child);
  }
  function Vs(e, t, n, r, l) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" && !go(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Ws(e, t, i, r, l)) : (e = kl(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (i = e.child, (e.lanes & l) === 0) {
      var o = i.memoizedProps;
      if (n = n.compare, n = n !== null ? n : qn, n(o, r) && e.ref === t.ref) return jt(e, t, l);
    }
    return t.flags |= 1, e = Kt(i, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Ws(e, t, n, r, l) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (qn(i, r) && e.ref === t.ref) if (Qe = !1, t.pendingProps = r = i, (e.lanes & l) !== 0) (e.flags & 131072) !== 0 && (Qe = !0);
      else return t.lanes = e.lanes, jt(e, t, l);
    }
    return Ji(e, t, n, r, l);
  }
  function Hs(e, t, n) {
    var r = t.pendingProps, l = r.children, i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, oe(Rn, tt), tt |= n;
    else {
      if ((n & 1073741824) === 0) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, oe(Rn, tt), tt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, oe(Rn, tt), tt |= r;
    }
    else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, oe(Rn, tt), tt |= r;
    return Ve(e, t, l, n), t.child;
  }
  function $s(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Ji(e, t, n, r, l) {
    var i = $e(n) ? Zt : De.current;
    return i = Sn(t, i), jn(t, l), n = Bi(e, t, n, r, i, l), r = Vi(), e !== null && !Qe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, jt(e, t, l)) : (fe && r && Ci(t), t.flags |= 1, Ve(e, t, n, l), t.child);
  }
  function Qs(e, t, n, r, l) {
    if ($e(n)) {
      var i = !0;
      Yr(t);
    } else i = !1;
    if (jn(t, l), t.stateNode === null) fl(e, t), Ms(t, n, r), Yi(t, n, r, l), r = !0;
    else if (e === null) {
      var o = t.stateNode, u = t.memoizedProps;
      o.props = u;
      var a = o.context, h = n.contextType;
      typeof h == "object" && h !== null ? h = it(h) : (h = $e(n) ? Zt : De.current, h = Sn(t, h));
      var w = n.getDerivedStateFromProps, x = typeof w == "function" || typeof o.getSnapshotBeforeUpdate == "function";
      x || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== r || a !== h) && Is(t, o, r, h), At = !1;
      var g = t.memoizedState;
      o.state = g, nl(t, r, o, l), a = t.memoizedState, u !== r || g !== a || He.current || At ? (typeof w == "function" && (Ki(t, n, w, r), a = t.memoizedState), (u = At || Ls(t, n, u, r, g, a, h)) ? (x || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), o.props = r, o.state = a, o.context = h, r = u) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      o = t.stateNode, us(e, t), u = t.memoizedProps, h = t.type === t.elementType ? u : dt(t.type, u), o.props = h, x = t.pendingProps, g = o.context, a = n.contextType, typeof a == "object" && a !== null ? a = it(a) : (a = $e(n) ? Zt : De.current, a = Sn(t, a));
      var _ = n.getDerivedStateFromProps;
      (w = typeof _ == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== x || g !== a) && Is(t, o, r, a), At = !1, g = t.memoizedState, o.state = g, nl(t, r, o, l);
      var T = t.memoizedState;
      u !== x || g !== T || He.current || At ? (typeof _ == "function" && (Ki(t, n, _, r), T = t.memoizedState), (h = At || Ls(t, n, h, r, g, T, a) || !1) ? (w || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, T, a), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, T, a)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && g === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = T), o.props = r, o.state = T, o.context = a, r = h) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && g === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return Zi(e, t, n, r, i, l);
  }
  function Zi(e, t, n, r, l, i) {
    $s(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o) return l && Ju(t, n, !1), jt(e, t, i);
    r = t.stateNode, df.current = t;
    var u = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && o ? (t.child = Nn(t, e.child, null, i), t.child = Nn(t, null, u, i)) : Ve(e, t, u, i), t.memoizedState = r.state, l && Ju(t, n, !0), t.child;
  }
  function Ks(e) {
    var t = e.stateNode;
    t.pendingContext ? Gu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Gu(e, t.context, !1), Ii(e, t.containerInfo);
  }
  function Ys(e, t, n, r, l) {
    return En(), ji(l), t.flags |= 256, Ve(e, t, n, r), t.child;
  }
  var qi = { dehydrated: null, treeContext: null, retryLane: 0 };
  function bi(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Gs(e, t, n) {
    var r = t.pendingProps, l = me.current, i = !1, o = (t.flags & 128) !== 0, u;
    if ((u = o) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), oe(me, l & 1), e === null)
      return _i(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (o = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, o = { mode: "hidden", children: o }, (r & 1) === 0 && i !== null ? (i.childLanes = 0, i.pendingProps = o) : i = Cl(o, r, 0, null), e = sn(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = bi(n), t.memoizedState = qi, e) : eo(t, o));
    if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return pf(e, t, o, r, u, l, n);
    if (i) {
      i = r.fallback, o = t.mode, l = e.child, u = l.sibling;
      var a = { mode: "hidden", children: r.children };
      return (o & 1) === 0 && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = Kt(l, a), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? i = Kt(u, i) : (i = sn(i, o, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, o = e.child.memoizedState, o = o === null ? bi(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, i.memoizedState = o, i.childLanes = e.childLanes & ~n, t.memoizedState = qi, r;
    }
    return i = e.child, e = i.sibling, r = Kt(i, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function eo(e, t) {
    return t = Cl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function cl(e, t, n, r) {
    return r !== null && ji(r), Nn(t, e.child, null, n), e = eo(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function pf(e, t, n, r, l, i, o) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = Gi(Error(m(422))), cl(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = Cl({ mode: "visible", children: r.children }, l, 0, null), i = sn(i, l, o, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, (t.mode & 1) !== 0 && Nn(t, e.child, null, o), t.child.memoizedState = bi(o), t.memoizedState = qi, i);
    if ((t.mode & 1) === 0) return cl(e, t, o, null);
    if (l.data === "$!") {
      if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
      return r = u, i = Error(m(419)), r = Gi(i, r, void 0), cl(e, t, o, r);
    }
    if (u = (o & e.childLanes) !== 0, Qe || u) {
      if (r = Pe, r !== null) {
        switch (o & -o) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        l = (l & (r.suspendedLanes | o)) !== 0 ? 0 : l, l !== 0 && l !== i.retryLane && (i.retryLane = l, Nt(e, l), ht(r, e, l, -1));
      }
      return yo(), r = Gi(Error(m(421))), cl(e, t, o, r);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = _f.bind(null, e), l._reactRetry = t, null) : (e = i.treeContext, et = Dt(l.nextSibling), be = t, fe = !0, ft = null, e !== null && (rt[lt++] = Ct, rt[lt++] = Et, rt[lt++] = qt, Ct = e.id, Et = e.overflow, qt = t), t = eo(t, r.children), t.flags |= 4096, t);
  }
  function Xs(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Ri(e.return, t, n);
  }
  function to(e, t, n, r, l) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = l);
  }
  function Js(e, t, n) {
    var r = t.pendingProps, l = r.revealOrder, i = r.tail;
    if (Ve(e, t, r.children, n), r = me.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Xs(e, n, t);
        else if (e.tag === 19) Xs(e, n, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      r &= 1;
    }
    if (oe(me, r), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && rl(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), to(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && rl(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        to(t, !0, n, null, i);
        break;
      case "together":
        to(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function fl(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function jt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), rn |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(m(153));
    if (t.child !== null) {
      for (e = t.child, n = Kt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Kt(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function mf(e, t, n) {
    switch (t.tag) {
      case 3:
        Ks(t), En();
        break;
      case 5:
        cs(t);
        break;
      case 1:
        $e(t.type) && Yr(t);
        break;
      case 4:
        Ii(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, l = t.memoizedProps.value;
        oe(br, r._currentValue), r._currentValue = l;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (oe(me, me.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Gs(e, t, n) : (oe(me, me.current & 1), e = jt(e, t, n), e !== null ? e.sibling : null);
        oe(me, me.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (r) return Js(e, t, n);
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), oe(me, me.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Hs(e, t, n);
    }
    return jt(e, t, n);
  }
  var Zs, no, qs, bs;
  Zs = function(e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
  }, no = function() {
  }, qs = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
      e = t.stateNode, tn(gt.current);
      var i = null;
      switch (n) {
        case "input":
          l = Rl(e, l), r = Rl(e, r), i = [];
          break;
        case "select":
          l = j({}, l, { value: void 0 }), r = j({}, r, { value: void 0 }), i = [];
          break;
        case "textarea":
          l = Il(e, l), r = Il(e, r), i = [];
          break;
        default:
          typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = $r);
      }
      Ol(n, r);
      var o;
      n = null;
      for (h in l) if (!r.hasOwnProperty(h) && l.hasOwnProperty(h) && l[h] != null) if (h === "style") {
        var u = l[h];
        for (o in u) u.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
      } else h !== "dangerouslySetInnerHTML" && h !== "children" && h !== "suppressContentEditableWarning" && h !== "suppressHydrationWarning" && h !== "autoFocus" && (N.hasOwnProperty(h) ? i || (i = []) : (i = i || []).push(h, null));
      for (h in r) {
        var a = r[h];
        if (u = l != null ? l[h] : void 0, r.hasOwnProperty(h) && a !== u && (a != null || u != null)) if (h === "style") if (u) {
          for (o in u) !u.hasOwnProperty(o) || a && a.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
          for (o in a) a.hasOwnProperty(o) && u[o] !== a[o] && (n || (n = {}), n[o] = a[o]);
        } else n || (i || (i = []), i.push(
          h,
          n
        )), n = a;
        else h === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, u = u ? u.__html : void 0, a != null && u !== a && (i = i || []).push(h, a)) : h === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(h, "" + a) : h !== "suppressContentEditableWarning" && h !== "suppressHydrationWarning" && (N.hasOwnProperty(h) ? (a != null && h === "onScroll" && se("scroll", e), i || u === a || (i = [])) : (i = i || []).push(h, a));
      }
      n && (i = i || []).push("style", n);
      var h = i;
      (t.updateQueue = h) && (t.flags |= 4);
    }
  }, bs = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function pr(e, t) {
    if (!fe) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
        r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
  }
  function Fe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function hf(e, t, n) {
    var r = t.pendingProps;
    switch (Ei(t), t.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Fe(t), null;
      case 1:
        return $e(t.type) && Kr(), Fe(t), null;
      case 3:
        return r = t.stateNode, Pn(), ae(He), ae(De), Fi(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Zr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, ft !== null && (mo(ft), ft = null))), no(e, t), Fe(t), null;
      case 5:
        Di(t);
        var l = tn(sr.current);
        if (n = t.type, e !== null && t.stateNode != null) qs(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(m(166));
            return Fe(t), null;
          }
          if (e = tn(gt.current), Zr(t)) {
            r = t.stateNode, n = t.type;
            var i = t.memoizedProps;
            switch (r[yt] = t, r[rr] = i, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                se("cancel", r), se("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                se("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < er.length; l++) se(er[l], r);
                break;
              case "source":
                se("error", r);
                break;
              case "img":
              case "image":
              case "link":
                se(
                  "error",
                  r
                ), se("load", r);
                break;
              case "details":
                se("toggle", r);
                break;
              case "input":
                Mo(r, i), se("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!i.multiple }, se("invalid", r);
                break;
              case "textarea":
                Oo(r, i), se("invalid", r);
            }
            Ol(n, i), l = null;
            for (var o in i) if (i.hasOwnProperty(o)) {
              var u = i[o];
              o === "children" ? typeof u == "string" ? r.textContent !== u && (i.suppressHydrationWarning !== !0 && Hr(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (i.suppressHydrationWarning !== !0 && Hr(
                r.textContent,
                u,
                e
              ), l = ["children", "" + u]) : N.hasOwnProperty(o) && u != null && o === "onScroll" && se("scroll", r);
            }
            switch (n) {
              case "input":
                xr(r), Do(r, i, !0);
                break;
              case "textarea":
                xr(r), Uo(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof i.onClick == "function" && (r.onclick = $r);
            }
            r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Ao(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[yt] = t, e[rr] = r, Zs(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (o = Fl(n, r), n) {
                case "dialog":
                  se("cancel", e), se("close", e), l = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  se("load", e), l = r;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < er.length; l++) se(er[l], e);
                  l = r;
                  break;
                case "source":
                  se("error", e), l = r;
                  break;
                case "img":
                case "image":
                case "link":
                  se(
                    "error",
                    e
                  ), se("load", e), l = r;
                  break;
                case "details":
                  se("toggle", e), l = r;
                  break;
                case "input":
                  Mo(e, r), l = Rl(e, r), se("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, l = j({}, r, { value: void 0 }), se("invalid", e);
                  break;
                case "textarea":
                  Oo(e, r), l = Il(e, r), se("invalid", e);
                  break;
                default:
                  l = r;
              }
              Ol(n, l), u = l;
              for (i in u) if (u.hasOwnProperty(i)) {
                var a = u[i];
                i === "style" ? Wo(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && Bo(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Dn(e, a) : typeof a == "number" && Dn(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (N.hasOwnProperty(i) ? a != null && i === "onScroll" && se("scroll", e) : a != null && te(e, i, a, o));
              }
              switch (n) {
                case "input":
                  xr(e), Do(e, r, !1);
                  break;
                case "textarea":
                  xr(e), Uo(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + re(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, i = r.value, i != null ? an(e, !!r.multiple, i, !1) : r.defaultValue != null && an(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = $r);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return Fe(t), null;
      case 6:
        if (e && t.stateNode != null) bs(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(m(166));
          if (n = tn(sr.current), tn(gt.current), Zr(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[yt] = t, (i = r.nodeValue !== n) && (e = be, e !== null)) switch (e.tag) {
              case 3:
                Hr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Hr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            i && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[yt] = t, t.stateNode = r;
        }
        return Fe(t), null;
      case 13:
        if (ae(me), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (fe && et !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) ns(), En(), t.flags |= 98560, i = !1;
          else if (i = Zr(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!i) throw Error(m(318));
              if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(m(317));
              i[yt] = t;
            } else En(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Fe(t), i = !1;
          } else ft !== null && (mo(ft), ft = null), i = !0;
          if (!i) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (me.current & 1) !== 0 ? Ne === 0 && (Ne = 3) : yo())), t.updateQueue !== null && (t.flags |= 4), Fe(t), null);
      case 4:
        return Pn(), no(e, t), e === null && tr(t.stateNode.containerInfo), Fe(t), null;
      case 10:
        return zi(t.type._context), Fe(t), null;
      case 17:
        return $e(t.type) && Kr(), Fe(t), null;
      case 19:
        if (ae(me), i = t.memoizedState, i === null) return Fe(t), null;
        if (r = (t.flags & 128) !== 0, o = i.rendering, o === null) if (r) pr(i, !1);
        else {
          if (Ne !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (o = rl(e), o !== null) {
              for (t.flags |= 128, pr(i, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, o = i.alternate, o === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o.childLanes, i.lanes = o.lanes, i.child = o.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = o.memoizedProps, i.memoizedState = o.memoizedState, i.updateQueue = o.updateQueue, i.type = o.type, e = o.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return oe(me, me.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          i.tail !== null && we() > Ln && (t.flags |= 128, r = !0, pr(i, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = rl(o), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), pr(i, !0), i.tail === null && i.tailMode === "hidden" && !o.alternate && !fe) return Fe(t), null;
          } else 2 * we() - i.renderingStartTime > Ln && n !== 1073741824 && (t.flags |= 128, r = !0, pr(i, !1), t.lanes = 4194304);
          i.isBackwards ? (o.sibling = t.child, t.child = o) : (n = i.last, n !== null ? n.sibling = o : t.child = o, i.last = o);
        }
        return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = we(), t.sibling = null, n = me.current, oe(me, r ? n & 1 | 2 : n & 1), t) : (Fe(t), null);
      case 22:
      case 23:
        return vo(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (tt & 1073741824) !== 0 && (Fe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Fe(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(m(156, t.tag));
  }
  function vf(e, t) {
    switch (Ei(t), t.tag) {
      case 1:
        return $e(t.type) && Kr(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Pn(), ae(He), ae(De), Fi(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Di(t), null;
      case 13:
        if (ae(me), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(m(340));
          En();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return ae(me), null;
      case 4:
        return Pn(), null;
      case 10:
        return zi(t.type._context), null;
      case 22:
      case 23:
        return vo(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var dl = !1, Ue = !1, yf = typeof WeakSet == "function" ? WeakSet : Set, P = null;
  function zn(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      ye(e, t, r);
    }
    else n.current = null;
  }
  function ro(e, t, n) {
    try {
      n();
    } catch (r) {
      ye(e, t, r);
    }
  }
  var ea = !1;
  function gf(e, t) {
    if (hi = Lr, e = Lu(), ui(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset, i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0, u = -1, a = -1, h = 0, w = 0, x = e, g = null;
          t: for (; ; ) {
            for (var _; x !== n || l !== 0 && x.nodeType !== 3 || (u = o + l), x !== i || r !== 0 && x.nodeType !== 3 || (a = o + r), x.nodeType === 3 && (o += x.nodeValue.length), (_ = x.firstChild) !== null; )
              g = x, x = _;
            for (; ; ) {
              if (x === e) break t;
              if (g === n && ++h === l && (u = o), g === i && ++w === r && (a = o), (_ = x.nextSibling) !== null) break;
              x = g, g = x.parentNode;
            }
            x = _;
          }
          n = u === -1 || a === -1 ? null : { start: u, end: a };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (vi = { focusedElem: e, selectionRange: n }, Lr = !1, P = t; P !== null; ) if (t = P, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, P = e;
    else for (; P !== null; ) {
      t = P;
      try {
        var T = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (T !== null) {
              var z = T.memoizedProps, xe = T.memoizedState, d = t.stateNode, c = d.getSnapshotBeforeUpdate(t.elementType === t.type ? z : dt(t.type, z), xe);
              d.__reactInternalSnapshotBeforeUpdate = c;
            }
            break;
          case 3:
            var p = t.stateNode.containerInfo;
            p.nodeType === 1 ? p.textContent = "" : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(m(163));
        }
      } catch (S) {
        ye(t, t.return, S);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, P = e;
        break;
      }
      P = t.return;
    }
    return T = ea, ea = !1, T;
  }
  function mr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & e) === e) {
          var i = l.destroy;
          l.destroy = void 0, i !== void 0 && ro(t, n, i);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function pl(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var n = t = t.next;
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function lo(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function ta(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, ta(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[yt], delete t[rr], delete t[xi], delete t[bc], delete t[ef])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function na(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function ra(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || na(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function io(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = $r));
    else if (r !== 4 && (e = e.child, e !== null)) for (io(e, t, n), e = e.sibling; e !== null; ) io(e, t, n), e = e.sibling;
  }
  function oo(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (oo(e, t, n), e = e.sibling; e !== null; ) oo(e, t, n), e = e.sibling;
  }
  var Le = null, pt = !1;
  function Vt(e, t, n) {
    for (n = n.child; n !== null; ) la(e, t, n), n = n.sibling;
  }
  function la(e, t, n) {
    if (vt && typeof vt.onCommitFiberUnmount == "function") try {
      vt.onCommitFiberUnmount(_r, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        Ue || zn(n, t);
      case 6:
        var r = Le, l = pt;
        Le = null, Vt(e, t, n), Le = r, pt = l, Le !== null && (pt ? (e = Le, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Le.removeChild(n.stateNode));
        break;
      case 18:
        Le !== null && (pt ? (e = Le, n = n.stateNode, e.nodeType === 8 ? wi(e.parentNode, n) : e.nodeType === 1 && wi(e, n), Kn(e)) : wi(Le, n.stateNode));
        break;
      case 4:
        r = Le, l = pt, Le = n.stateNode.containerInfo, pt = !0, Vt(e, t, n), Le = r, pt = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Ue && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          l = r = r.next;
          do {
            var i = l, o = i.destroy;
            i = i.tag, o !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && ro(n, t, o), l = l.next;
          } while (l !== r);
        }
        Vt(e, t, n);
        break;
      case 1:
        if (!Ue && (zn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (u) {
          ye(n, t, u);
        }
        Vt(e, t, n);
        break;
      case 21:
        Vt(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (Ue = (r = Ue) || n.memoizedState !== null, Vt(e, t, n), Ue = r) : Vt(e, t, n);
        break;
      default:
        Vt(e, t, n);
    }
  }
  function ia(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new yf()), t.forEach(function(r) {
        var l = jf.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
    }
  }
  function mt(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e, o = t, u = o;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              Le = u.stateNode, pt = !1;
              break e;
            case 3:
              Le = u.stateNode.containerInfo, pt = !0;
              break e;
            case 4:
              Le = u.stateNode.containerInfo, pt = !0;
              break e;
          }
          u = u.return;
        }
        if (Le === null) throw Error(m(160));
        la(i, o, l), Le = null, pt = !1;
        var a = l.alternate;
        a !== null && (a.return = null), l.return = null;
      } catch (h) {
        ye(l, t, h);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) oa(t, e), t = t.sibling;
  }
  function oa(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (mt(t, e), xt(e), r & 4) {
          try {
            mr(3, e, e.return), pl(3, e);
          } catch (z) {
            ye(e, e.return, z);
          }
          try {
            mr(5, e, e.return);
          } catch (z) {
            ye(e, e.return, z);
          }
        }
        break;
      case 1:
        mt(t, e), xt(e), r & 512 && n !== null && zn(n, n.return);
        break;
      case 5:
        if (mt(t, e), xt(e), r & 512 && n !== null && zn(n, n.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            Dn(l, "");
          } catch (z) {
            ye(e, e.return, z);
          }
        }
        if (r & 4 && (l = e.stateNode, l != null)) {
          var i = e.memoizedProps, o = n !== null ? n.memoizedProps : i, u = e.type, a = e.updateQueue;
          if (e.updateQueue = null, a !== null) try {
            u === "input" && i.type === "radio" && i.name != null && Io(l, i), Fl(u, o);
            var h = Fl(u, i);
            for (o = 0; o < a.length; o += 2) {
              var w = a[o], x = a[o + 1];
              w === "style" ? Wo(l, x) : w === "dangerouslySetInnerHTML" ? Bo(l, x) : w === "children" ? Dn(l, x) : te(l, w, x, h);
            }
            switch (u) {
              case "input":
                Ll(l, i);
                break;
              case "textarea":
                Fo(l, i);
                break;
              case "select":
                var g = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var _ = i.value;
                _ != null ? an(l, !!i.multiple, _, !1) : g !== !!i.multiple && (i.defaultValue != null ? an(
                  l,
                  !!i.multiple,
                  i.defaultValue,
                  !0
                ) : an(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[rr] = i;
          } catch (z) {
            ye(e, e.return, z);
          }
        }
        break;
      case 6:
        if (mt(t, e), xt(e), r & 4) {
          if (e.stateNode === null) throw Error(m(162));
          l = e.stateNode, i = e.memoizedProps;
          try {
            l.nodeValue = i;
          } catch (z) {
            ye(e, e.return, z);
          }
        }
        break;
      case 3:
        if (mt(t, e), xt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          Kn(t.containerInfo);
        } catch (z) {
          ye(e, e.return, z);
        }
        break;
      case 4:
        mt(t, e), xt(e);
        break;
      case 13:
        mt(t, e), xt(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (ao = we())), r & 4 && ia(e);
        break;
      case 22:
        if (w = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ue = (h = Ue) || w, mt(t, e), Ue = h) : mt(t, e), xt(e), r & 8192) {
          if (h = e.memoizedState !== null, (e.stateNode.isHidden = h) && !w && (e.mode & 1) !== 0) for (P = e, w = e.child; w !== null; ) {
            for (x = P = w; P !== null; ) {
              switch (g = P, _ = g.child, g.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  mr(4, g, g.return);
                  break;
                case 1:
                  zn(g, g.return);
                  var T = g.stateNode;
                  if (typeof T.componentWillUnmount == "function") {
                    r = g, n = g.return;
                    try {
                      t = r, T.props = t.memoizedProps, T.state = t.memoizedState, T.componentWillUnmount();
                    } catch (z) {
                      ye(r, n, z);
                    }
                  }
                  break;
                case 5:
                  zn(g, g.return);
                  break;
                case 22:
                  if (g.memoizedState !== null) {
                    aa(x);
                    continue;
                  }
              }
              _ !== null ? (_.return = g, P = _) : aa(x);
            }
            w = w.sibling;
          }
          e: for (w = null, x = e; ; ) {
            if (x.tag === 5) {
              if (w === null) {
                w = x;
                try {
                  l = x.stateNode, h ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (u = x.stateNode, a = x.memoizedProps.style, o = a != null && a.hasOwnProperty("display") ? a.display : null, u.style.display = Vo("display", o));
                } catch (z) {
                  ye(e, e.return, z);
                }
              }
            } else if (x.tag === 6) {
              if (w === null) try {
                x.stateNode.nodeValue = h ? "" : x.memoizedProps;
              } catch (z) {
                ye(e, e.return, z);
              }
            } else if ((x.tag !== 22 && x.tag !== 23 || x.memoizedState === null || x === e) && x.child !== null) {
              x.child.return = x, x = x.child;
              continue;
            }
            if (x === e) break e;
            for (; x.sibling === null; ) {
              if (x.return === null || x.return === e) break e;
              w === x && (w = null), x = x.return;
            }
            w === x && (w = null), x.sibling.return = x.return, x = x.sibling;
          }
        }
        break;
      case 19:
        mt(t, e), xt(e), r & 4 && ia(e);
        break;
      case 21:
        break;
      default:
        mt(
          t,
          e
        ), xt(e);
    }
  }
  function xt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (na(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(m(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Dn(l, ""), r.flags &= -33);
            var i = ra(e);
            oo(e, i, l);
            break;
          case 3:
          case 4:
            var o = r.stateNode.containerInfo, u = ra(e);
            io(e, u, o);
            break;
          default:
            throw Error(m(161));
        }
      } catch (a) {
        ye(e, e.return, a);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function wf(e, t, n) {
    P = e, ua(e);
  }
  function ua(e, t, n) {
    for (var r = (e.mode & 1) !== 0; P !== null; ) {
      var l = P, i = l.child;
      if (l.tag === 22 && r) {
        var o = l.memoizedState !== null || dl;
        if (!o) {
          var u = l.alternate, a = u !== null && u.memoizedState !== null || Ue;
          u = dl;
          var h = Ue;
          if (dl = o, (Ue = a) && !h) for (P = l; P !== null; ) o = P, a = o.child, o.tag === 22 && o.memoizedState !== null ? ca(l) : a !== null ? (a.return = o, P = a) : ca(l);
          for (; i !== null; ) P = i, ua(i), i = i.sibling;
          P = l, dl = u, Ue = h;
        }
        sa(e);
      } else (l.subtreeFlags & 8772) !== 0 && i !== null ? (i.return = l, P = i) : sa(e);
    }
  }
  function sa(e) {
    for (; P !== null; ) {
      var t = P;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ue || pl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ue) if (n === null) r.componentDidMount();
              else {
                var l = t.elementType === t.type ? n.memoizedProps : dt(t.type, n.memoizedProps);
                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var i = t.updateQueue;
              i !== null && as(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (n = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    n = t.child.stateNode;
                    break;
                  case 1:
                    n = t.child.stateNode;
                }
                as(t, o, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var h = t.alternate;
                if (h !== null) {
                  var w = h.memoizedState;
                  if (w !== null) {
                    var x = w.dehydrated;
                    x !== null && Kn(x);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(m(163));
          }
          Ue || t.flags & 512 && lo(t);
        } catch (g) {
          ye(t, t.return, g);
        }
      }
      if (t === e) {
        P = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, P = n;
        break;
      }
      P = t.return;
    }
  }
  function aa(e) {
    for (; P !== null; ) {
      var t = P;
      if (t === e) {
        P = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, P = n;
        break;
      }
      P = t.return;
    }
  }
  function ca(e) {
    for (; P !== null; ) {
      var t = P;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              pl(4, t);
            } catch (a) {
              ye(t, n, a);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (a) {
                ye(t, l, a);
              }
            }
            var i = t.return;
            try {
              lo(t);
            } catch (a) {
              ye(t, i, a);
            }
            break;
          case 5:
            var o = t.return;
            try {
              lo(t);
            } catch (a) {
              ye(t, o, a);
            }
        }
      } catch (a) {
        ye(t, t.return, a);
      }
      if (t === e) {
        P = null;
        break;
      }
      var u = t.sibling;
      if (u !== null) {
        u.return = t.return, P = u;
        break;
      }
      P = t.return;
    }
  }
  var xf = Math.ceil, ml = de.ReactCurrentDispatcher, uo = de.ReactCurrentOwner, ut = de.ReactCurrentBatchConfig, J = 0, Pe = null, Se = null, Me = 0, tt = 0, Rn = Ot(0), Ne = 0, hr = null, rn = 0, hl = 0, so = 0, vr = null, Ke = null, ao = 0, Ln = 1 / 0, Pt = null, vl = !1, co = null, Wt = null, yl = !1, Ht = null, gl = 0, yr = 0, fo = null, wl = -1, xl = 0;
  function We() {
    return (J & 6) !== 0 ? we() : wl !== -1 ? wl : wl = we();
  }
  function $t(e) {
    return (e.mode & 1) === 0 ? 1 : (J & 2) !== 0 && Me !== 0 ? Me & -Me : nf.transition !== null ? (xl === 0 && (xl = ru()), xl) : (e = le, e !== 0 || (e = window.event, e = e === void 0 ? 16 : du(e.type)), e);
  }
  function ht(e, t, n, r) {
    if (50 < yr) throw yr = 0, fo = null, Error(m(185));
    Vn(e, n, r), ((J & 2) === 0 || e !== Pe) && (e === Pe && ((J & 2) === 0 && (hl |= n), Ne === 4 && Qt(e, Me)), Ye(e, r), n === 1 && J === 0 && (t.mode & 1) === 0 && (Ln = we() + 500, Gr && Ut()));
  }
  function Ye(e, t) {
    var n = e.callbackNode;
    nc(e, t);
    var r = Tr(e, e === Pe ? Me : 0);
    if (r === 0) n !== null && eu(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && eu(n), t === 1) e.tag === 0 ? tf(da.bind(null, e)) : Zu(da.bind(null, e)), Zc(function() {
        (J & 6) === 0 && Ut();
      }), n = null;
      else {
        switch (lu(r)) {
          case 1:
            n = $l;
            break;
          case 4:
            n = tu;
            break;
          case 16:
            n = Nr;
            break;
          case 536870912:
            n = nu;
            break;
          default:
            n = Nr;
        }
        n = xa(n, fa.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function fa(e, t) {
    if (wl = -1, xl = 0, (J & 6) !== 0) throw Error(m(327));
    var n = e.callbackNode;
    if (Mn() && e.callbackNode !== n) return null;
    var r = Tr(e, e === Pe ? Me : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Sl(e, r);
    else {
      t = r;
      var l = J;
      J |= 2;
      var i = ma();
      (Pe !== e || Me !== t) && (Pt = null, Ln = we() + 500, on(e, t));
      do
        try {
          Cf();
          break;
        } catch (u) {
          pa(e, u);
        }
      while (!0);
      Ti(), ml.current = i, J = l, Se !== null ? t = 0 : (Pe = null, Me = 0, t = Ne);
    }
    if (t !== 0) {
      if (t === 2 && (l = Ql(e), l !== 0 && (r = l, t = po(e, l))), t === 1) throw n = hr, on(e, 0), Qt(e, r), Ye(e, we()), n;
      if (t === 6) Qt(e, r);
      else {
        if (l = e.current.alternate, (r & 30) === 0 && !Sf(l) && (t = Sl(e, r), t === 2 && (i = Ql(e), i !== 0 && (r = i, t = po(e, i))), t === 1)) throw n = hr, on(e, 0), Qt(e, r), Ye(e, we()), n;
        switch (e.finishedWork = l, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(m(345));
          case 2:
            un(e, Ke, Pt);
            break;
          case 3:
            if (Qt(e, r), (r & 130023424) === r && (t = ao + 500 - we(), 10 < t)) {
              if (Tr(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & r) !== r) {
                We(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = gi(un.bind(null, e, Ke, Pt), t);
              break;
            }
            un(e, Ke, Pt);
            break;
          case 4:
            if (Qt(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var o = 31 - at(r);
              i = 1 << o, o = t[o], o > l && (l = o), r &= ~i;
            }
            if (r = l, r = we() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * xf(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = gi(un.bind(null, e, Ke, Pt), r);
              break;
            }
            un(e, Ke, Pt);
            break;
          case 5:
            un(e, Ke, Pt);
            break;
          default:
            throw Error(m(329));
        }
      }
    }
    return Ye(e, we()), e.callbackNode === n ? fa.bind(null, e) : null;
  }
  function po(e, t) {
    var n = vr;
    return e.current.memoizedState.isDehydrated && (on(e, t).flags |= 256), e = Sl(e, t), e !== 2 && (t = Ke, Ke = n, t !== null && mo(t)), e;
  }
  function mo(e) {
    Ke === null ? Ke = e : Ke.push.apply(Ke, e);
  }
  function Sf(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var l = n[r], i = l.getSnapshot;
          l = l.value;
          try {
            if (!ct(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function Qt(e, t) {
    for (t &= ~so, t &= ~hl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - at(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function da(e) {
    if ((J & 6) !== 0) throw Error(m(327));
    Mn();
    var t = Tr(e, 0);
    if ((t & 1) === 0) return Ye(e, we()), null;
    var n = Sl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Ql(e);
      r !== 0 && (t = r, n = po(e, r));
    }
    if (n === 1) throw n = hr, on(e, 0), Qt(e, t), Ye(e, we()), n;
    if (n === 6) throw Error(m(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, un(e, Ke, Pt), Ye(e, we()), null;
  }
  function ho(e, t) {
    var n = J;
    J |= 1;
    try {
      return e(t);
    } finally {
      J = n, J === 0 && (Ln = we() + 500, Gr && Ut());
    }
  }
  function ln(e) {
    Ht !== null && Ht.tag === 0 && (J & 6) === 0 && Mn();
    var t = J;
    J |= 1;
    var n = ut.transition, r = le;
    try {
      if (ut.transition = null, le = 1, e) return e();
    } finally {
      le = r, ut.transition = n, J = t, (J & 6) === 0 && Ut();
    }
  }
  function vo() {
    tt = Rn.current, ae(Rn);
  }
  function on(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Jc(n)), Se !== null) for (n = Se.return; n !== null; ) {
      var r = n;
      switch (Ei(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Kr();
          break;
        case 3:
          Pn(), ae(He), ae(De), Fi();
          break;
        case 5:
          Di(r);
          break;
        case 4:
          Pn();
          break;
        case 13:
          ae(me);
          break;
        case 19:
          ae(me);
          break;
        case 10:
          zi(r.type._context);
          break;
        case 22:
        case 23:
          vo();
      }
      n = n.return;
    }
    if (Pe = e, Se = e = Kt(e.current, null), Me = tt = t, Ne = 0, hr = null, so = hl = rn = 0, Ke = vr = null, en !== null) {
      for (t = 0; t < en.length; t++) if (n = en[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var l = r.next, i = n.pending;
        if (i !== null) {
          var o = i.next;
          i.next = l, r.next = o;
        }
        n.pending = r;
      }
      en = null;
    }
    return e;
  }
  function pa(e, t) {
    do {
      var n = Se;
      try {
        if (Ti(), ll.current = sl, il) {
          for (var r = he.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), r = r.next;
          }
          il = !1;
        }
        if (nn = 0, je = Ee = he = null, ar = !1, cr = 0, uo.current = null, n === null || n.return === null) {
          Ne = 1, hr = t, Se = null;
          break;
        }
        e: {
          var i = e, o = n.return, u = n, a = t;
          if (t = Me, u.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
            var h = a, w = u, x = w.tag;
            if ((w.mode & 1) === 0 && (x === 0 || x === 11 || x === 15)) {
              var g = w.alternate;
              g ? (w.updateQueue = g.updateQueue, w.memoizedState = g.memoizedState, w.lanes = g.lanes) : (w.updateQueue = null, w.memoizedState = null);
            }
            var _ = Us(o);
            if (_ !== null) {
              _.flags &= -257, As(_, o, u, i, t), _.mode & 1 && Fs(i, h, t), t = _, a = h;
              var T = t.updateQueue;
              if (T === null) {
                var z = /* @__PURE__ */ new Set();
                z.add(a), t.updateQueue = z;
              } else T.add(a);
              break e;
            } else {
              if ((t & 1) === 0) {
                Fs(i, h, t), yo();
                break e;
              }
              a = Error(m(426));
            }
          } else if (fe && u.mode & 1) {
            var xe = Us(o);
            if (xe !== null) {
              (xe.flags & 65536) === 0 && (xe.flags |= 256), As(xe, o, u, i, t), ji(Tn(a, u));
              break e;
            }
          }
          i = a = Tn(a, u), Ne !== 4 && (Ne = 2), vr === null ? vr = [i] : vr.push(i), i = o;
          do {
            switch (i.tag) {
              case 3:
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var d = Ds(i, a, t);
                ss(i, d);
                break e;
              case 1:
                u = a;
                var c = i.type, p = i.stateNode;
                if ((i.flags & 128) === 0 && (typeof c.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (Wt === null || !Wt.has(p)))) {
                  i.flags |= 65536, t &= -t, i.lanes |= t;
                  var S = Os(i, u, t);
                  ss(i, S);
                  break e;
                }
            }
            i = i.return;
          } while (i !== null);
        }
        va(n);
      } catch (L) {
        t = L, Se === n && n !== null && (Se = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function ma() {
    var e = ml.current;
    return ml.current = sl, e === null ? sl : e;
  }
  function yo() {
    (Ne === 0 || Ne === 3 || Ne === 2) && (Ne = 4), Pe === null || (rn & 268435455) === 0 && (hl & 268435455) === 0 || Qt(Pe, Me);
  }
  function Sl(e, t) {
    var n = J;
    J |= 2;
    var r = ma();
    (Pe !== e || Me !== t) && (Pt = null, on(e, t));
    do
      try {
        kf();
        break;
      } catch (l) {
        pa(e, l);
      }
    while (!0);
    if (Ti(), J = n, ml.current = r, Se !== null) throw Error(m(261));
    return Pe = null, Me = 0, Ne;
  }
  function kf() {
    for (; Se !== null; ) ha(Se);
  }
  function Cf() {
    for (; Se !== null && !Ya(); ) ha(Se);
  }
  function ha(e) {
    var t = wa(e.alternate, e, tt);
    e.memoizedProps = e.pendingProps, t === null ? va(e) : Se = t, uo.current = null;
  }
  function va(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = hf(n, t, tt), n !== null) {
          Se = n;
          return;
        }
      } else {
        if (n = vf(n, t), n !== null) {
          n.flags &= 32767, Se = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          Ne = 6, Se = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        Se = t;
        return;
      }
      Se = t = e;
    } while (t !== null);
    Ne === 0 && (Ne = 5);
  }
  function un(e, t, n) {
    var r = le, l = ut.transition;
    try {
      ut.transition = null, le = 1, Ef(e, t, n, r);
    } finally {
      ut.transition = l, le = r;
    }
    return null;
  }
  function Ef(e, t, n, r) {
    do
      Mn();
    while (Ht !== null);
    if ((J & 6) !== 0) throw Error(m(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(m(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (rc(e, i), e === Pe && (Se = Pe = null, Me = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || yl || (yl = !0, xa(Nr, function() {
      return Mn(), null;
    })), i = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || i) {
      i = ut.transition, ut.transition = null;
      var o = le;
      le = 1;
      var u = J;
      J |= 4, uo.current = null, gf(e, n), oa(n, e), Hc(vi), Lr = !!hi, vi = hi = null, e.current = n, wf(n), Ga(), J = u, le = o, ut.transition = i;
    } else e.current = n;
    if (yl && (yl = !1, Ht = e, gl = l), i = e.pendingLanes, i === 0 && (Wt = null), Za(n.stateNode), Ye(e, we()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
    if (vl) throw vl = !1, e = co, co = null, e;
    return (gl & 1) !== 0 && e.tag !== 0 && Mn(), i = e.pendingLanes, (i & 1) !== 0 ? e === fo ? yr++ : (yr = 0, fo = e) : yr = 0, Ut(), null;
  }
  function Mn() {
    if (Ht !== null) {
      var e = lu(gl), t = ut.transition, n = le;
      try {
        if (ut.transition = null, le = 16 > e ? 16 : e, Ht === null) var r = !1;
        else {
          if (e = Ht, Ht = null, gl = 0, (J & 6) !== 0) throw Error(m(331));
          var l = J;
          for (J |= 4, P = e.current; P !== null; ) {
            var i = P, o = i.child;
            if ((P.flags & 16) !== 0) {
              var u = i.deletions;
              if (u !== null) {
                for (var a = 0; a < u.length; a++) {
                  var h = u[a];
                  for (P = h; P !== null; ) {
                    var w = P;
                    switch (w.tag) {
                      case 0:
                      case 11:
                      case 15:
                        mr(8, w, i);
                    }
                    var x = w.child;
                    if (x !== null) x.return = w, P = x;
                    else for (; P !== null; ) {
                      w = P;
                      var g = w.sibling, _ = w.return;
                      if (ta(w), w === h) {
                        P = null;
                        break;
                      }
                      if (g !== null) {
                        g.return = _, P = g;
                        break;
                      }
                      P = _;
                    }
                  }
                }
                var T = i.alternate;
                if (T !== null) {
                  var z = T.child;
                  if (z !== null) {
                    T.child = null;
                    do {
                      var xe = z.sibling;
                      z.sibling = null, z = xe;
                    } while (z !== null);
                  }
                }
                P = i;
              }
            }
            if ((i.subtreeFlags & 2064) !== 0 && o !== null) o.return = i, P = o;
            else e: for (; P !== null; ) {
              if (i = P, (i.flags & 2048) !== 0) switch (i.tag) {
                case 0:
                case 11:
                case 15:
                  mr(9, i, i.return);
              }
              var d = i.sibling;
              if (d !== null) {
                d.return = i.return, P = d;
                break e;
              }
              P = i.return;
            }
          }
          var c = e.current;
          for (P = c; P !== null; ) {
            o = P;
            var p = o.child;
            if ((o.subtreeFlags & 2064) !== 0 && p !== null) p.return = o, P = p;
            else e: for (o = c; P !== null; ) {
              if (u = P, (u.flags & 2048) !== 0) try {
                switch (u.tag) {
                  case 0:
                  case 11:
                  case 15:
                    pl(9, u);
                }
              } catch (L) {
                ye(u, u.return, L);
              }
              if (u === o) {
                P = null;
                break e;
              }
              var S = u.sibling;
              if (S !== null) {
                S.return = u.return, P = S;
                break e;
              }
              P = u.return;
            }
          }
          if (J = l, Ut(), vt && typeof vt.onPostCommitFiberRoot == "function") try {
            vt.onPostCommitFiberRoot(_r, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        le = n, ut.transition = t;
      }
    }
    return !1;
  }
  function ya(e, t, n) {
    t = Tn(n, t), t = Ds(e, t, 1), e = Bt(e, t, 1), t = We(), e !== null && (Vn(e, 1, t), Ye(e, t));
  }
  function ye(e, t, n) {
    if (e.tag === 3) ya(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        ya(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Wt === null || !Wt.has(r))) {
          e = Tn(n, e), e = Os(t, e, 1), t = Bt(t, e, 1), e = We(), t !== null && (Vn(t, 1, e), Ye(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Nf(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = We(), e.pingedLanes |= e.suspendedLanes & n, Pe === e && (Me & n) === n && (Ne === 4 || Ne === 3 && (Me & 130023424) === Me && 500 > we() - ao ? on(e, 0) : so |= n), Ye(e, t);
  }
  function ga(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = Pr, Pr <<= 1, (Pr & 130023424) === 0 && (Pr = 4194304)));
    var n = We();
    e = Nt(e, t), e !== null && (Vn(e, t, n), Ye(e, n));
  }
  function _f(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), ga(e, n);
  }
  function jf(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode, l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(m(314));
    }
    r !== null && r.delete(t), ga(e, n);
  }
  var wa;
  wa = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || He.current) Qe = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return Qe = !1, mf(e, t, n);
      Qe = (e.flags & 131072) !== 0;
    }
    else Qe = !1, fe && (t.flags & 1048576) !== 0 && qu(t, Jr, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        fl(e, t), e = t.pendingProps;
        var l = Sn(t, De.current);
        jn(t, n), l = Bi(null, t, r, e, l, n);
        var i = Vi();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, $e(r) ? (i = !0, Yr(t)) : i = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Mi(t), l.updater = al, t.stateNode = l, l._reactInternals = t, Yi(t, r, e, n), t = Zi(null, t, r, !0, i, n)) : (t.tag = 0, fe && i && Ci(t), Ve(null, t, l, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (fl(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Tf(r), e = dt(r, e), l) {
            case 0:
              t = Ji(null, t, r, e, n);
              break e;
            case 1:
              t = Qs(null, t, r, e, n);
              break e;
            case 11:
              t = Bs(null, t, r, e, n);
              break e;
            case 14:
              t = Vs(null, t, r, dt(r.type, e), n);
              break e;
          }
          throw Error(m(
            306,
            r,
            ""
          ));
        }
        return t;
      case 0:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : dt(r, l), Ji(e, t, r, l, n);
      case 1:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : dt(r, l), Qs(e, t, r, l, n);
      case 3:
        e: {
          if (Ks(t), e === null) throw Error(m(387));
          r = t.pendingProps, i = t.memoizedState, l = i.element, us(e, t), nl(t, r, null, n);
          var o = t.memoizedState;
          if (r = o.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            l = Tn(Error(m(423)), t), t = Ys(e, t, r, n, l);
            break e;
          } else if (r !== l) {
            l = Tn(Error(m(424)), t), t = Ys(e, t, r, n, l);
            break e;
          } else for (et = Dt(t.stateNode.containerInfo.firstChild), be = t, fe = !0, ft = null, n = is(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (En(), r === l) {
              t = jt(e, t, n);
              break e;
            }
            Ve(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return cs(t), e === null && _i(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, o = l.children, yi(r, l) ? o = null : i !== null && yi(r, i) && (t.flags |= 32), $s(e, t), Ve(e, t, o, n), t.child;
      case 6:
        return e === null && _i(t), null;
      case 13:
        return Gs(e, t, n);
      case 4:
        return Ii(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Nn(t, null, r, n) : Ve(e, t, r, n), t.child;
      case 11:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : dt(r, l), Bs(e, t, r, l, n);
      case 7:
        return Ve(e, t, t.pendingProps, n), t.child;
      case 8:
        return Ve(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Ve(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, l = t.pendingProps, i = t.memoizedProps, o = l.value, oe(br, r._currentValue), r._currentValue = o, i !== null) if (ct(i.value, o)) {
            if (i.children === l.children && !He.current) {
              t = jt(e, t, n);
              break e;
            }
          } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
            var u = i.dependencies;
            if (u !== null) {
              o = i.child;
              for (var a = u.firstContext; a !== null; ) {
                if (a.context === r) {
                  if (i.tag === 1) {
                    a = _t(-1, n & -n), a.tag = 2;
                    var h = i.updateQueue;
                    if (h !== null) {
                      h = h.shared;
                      var w = h.pending;
                      w === null ? a.next = a : (a.next = w.next, w.next = a), h.pending = a;
                    }
                  }
                  i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), Ri(
                    i.return,
                    n,
                    t
                  ), u.lanes |= n;
                  break;
                }
                a = a.next;
              }
            } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
            else if (i.tag === 18) {
              if (o = i.return, o === null) throw Error(m(341));
              o.lanes |= n, u = o.alternate, u !== null && (u.lanes |= n), Ri(o, n, t), o = i.sibling;
            } else o = i.child;
            if (o !== null) o.return = i;
            else for (o = i; o !== null; ) {
              if (o === t) {
                o = null;
                break;
              }
              if (i = o.sibling, i !== null) {
                i.return = o.return, o = i;
                break;
              }
              o = o.return;
            }
            i = o;
          }
          Ve(e, t, l.children, n), t = t.child;
        }
        return t;
      case 9:
        return l = t.type, r = t.pendingProps.children, jn(t, n), l = it(l), r = r(l), t.flags |= 1, Ve(e, t, r, n), t.child;
      case 14:
        return r = t.type, l = dt(r, t.pendingProps), l = dt(r.type, l), Vs(e, t, r, l, n);
      case 15:
        return Ws(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : dt(r, l), fl(e, t), t.tag = 1, $e(r) ? (e = !0, Yr(t)) : e = !1, jn(t, n), Ms(t, r, l), Yi(t, r, l, n), Zi(null, t, r, !0, e, n);
      case 19:
        return Js(e, t, n);
      case 22:
        return Hs(e, t, n);
    }
    throw Error(m(156, t.tag));
  };
  function xa(e, t) {
    return bo(e, t);
  }
  function Pf(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function st(e, t, n, r) {
    return new Pf(e, t, n, r);
  }
  function go(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Tf(e) {
    if (typeof e == "function") return go(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === Ce) return 11;
      if (e === nt) return 14;
    }
    return 2;
  }
  function Kt(e, t) {
    var n = e.alternate;
    return n === null ? (n = st(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function kl(e, t, n, r, l, i) {
    var o = 2;
    if (r = e, typeof e == "function") go(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else e: switch (e) {
      case Re:
        return sn(n.children, l, i, t);
      case Ae:
        o = 8, l |= 8;
        break;
      case Je:
        return e = st(12, n, t, l | 2), e.elementType = Je, e.lanes = i, e;
      case ue:
        return e = st(13, n, t, l), e.elementType = ue, e.lanes = i, e;
      case Be:
        return e = st(19, n, t, l), e.elementType = Be, e.lanes = i, e;
      case ne:
        return Cl(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case Ie:
            o = 10;
            break e;
          case ve:
            o = 9;
            break e;
          case Ce:
            o = 11;
            break e;
          case nt:
            o = 14;
            break e;
          case pe:
            o = 16, r = null;
            break e;
        }
        throw Error(m(130, e == null ? e : typeof e, ""));
    }
    return t = st(o, n, t, l), t.elementType = e, t.type = r, t.lanes = i, t;
  }
  function sn(e, t, n, r) {
    return e = st(7, e, r, t), e.lanes = n, e;
  }
  function Cl(e, t, n, r) {
    return e = st(22, e, r, t), e.elementType = ne, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function wo(e, t, n) {
    return e = st(6, e, null, t), e.lanes = n, e;
  }
  function xo(e, t, n) {
    return t = st(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function zf(e, t, n, r, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Kl(0), this.expirationTimes = Kl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Kl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function So(e, t, n, r, l, i, o, u, a) {
    return e = new zf(e, t, n, u, a), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = st(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Mi(i), e;
  }
  function Rf(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ze, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function Sa(e) {
    if (!e) return Ft;
    e = e._reactInternals;
    e: {
      if (Xt(e) !== e || e.tag !== 1) throw Error(m(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if ($e(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(m(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if ($e(n)) return Xu(e, n, t);
    }
    return t;
  }
  function ka(e, t, n, r, l, i, o, u, a) {
    return e = So(n, r, !0, e, l, i, o, u, a), e.context = Sa(null), n = e.current, r = We(), l = $t(n), i = _t(r, l), i.callback = t ?? null, Bt(n, i, l), e.current.lanes = l, Vn(e, l, r), Ye(e, r), e;
  }
  function El(e, t, n, r) {
    var l = t.current, i = We(), o = $t(l);
    return n = Sa(n), t.context === null ? t.context = n : t.pendingContext = n, t = _t(i, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Bt(l, t, o), e !== null && (ht(e, l, o, i), tl(e, l, o)), o;
  }
  function Nl(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Ca(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function ko(e, t) {
    Ca(e, t), (e = e.alternate) && Ca(e, t);
  }
  function Lf() {
    return null;
  }
  var Ea = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Co(e) {
    this._internalRoot = e;
  }
  _l.prototype.render = Co.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(m(409));
    El(e, t, null, null);
  }, _l.prototype.unmount = Co.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      ln(function() {
        El(null, e, null, null);
      }), t[St] = null;
    }
  };
  function _l(e) {
    this._internalRoot = e;
  }
  _l.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = uu();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Lt.length && t !== 0 && t < Lt[n].priority; n++) ;
      Lt.splice(n, 0, e), n === 0 && cu(e);
    }
  };
  function Eo(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function jl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Na() {
  }
  function Mf(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var i = r;
        r = function() {
          var h = Nl(o);
          i.call(h);
        };
      }
      var o = ka(t, r, e, 0, null, !1, !1, "", Na);
      return e._reactRootContainer = o, e[St] = o.current, tr(e.nodeType === 8 ? e.parentNode : e), ln(), o;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof r == "function") {
      var u = r;
      r = function() {
        var h = Nl(a);
        u.call(h);
      };
    }
    var a = So(e, 0, !1, null, null, !1, !1, "", Na);
    return e._reactRootContainer = a, e[St] = a.current, tr(e.nodeType === 8 ? e.parentNode : e), ln(function() {
      El(t, a, n, r);
    }), a;
  }
  function Pl(e, t, n, r, l) {
    var i = n._reactRootContainer;
    if (i) {
      var o = i;
      if (typeof l == "function") {
        var u = l;
        l = function() {
          var a = Nl(o);
          u.call(a);
        };
      }
      El(t, o, e, l);
    } else o = Mf(n, t, e, l, r);
    return Nl(o);
  }
  iu = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Bn(t.pendingLanes);
          n !== 0 && (Yl(t, n | 1), Ye(t, we()), (J & 6) === 0 && (Ln = we() + 500, Ut()));
        }
        break;
      case 13:
        ln(function() {
          var r = Nt(e, 1);
          if (r !== null) {
            var l = We();
            ht(r, e, 1, l);
          }
        }), ko(e, 1);
    }
  }, Gl = function(e) {
    if (e.tag === 13) {
      var t = Nt(e, 134217728);
      if (t !== null) {
        var n = We();
        ht(t, e, 134217728, n);
      }
      ko(e, 134217728);
    }
  }, ou = function(e) {
    if (e.tag === 13) {
      var t = $t(e), n = Nt(e, t);
      if (n !== null) {
        var r = We();
        ht(n, e, t, r);
      }
      ko(e, t);
    }
  }, uu = function() {
    return le;
  }, su = function(e, t) {
    var n = le;
    try {
      return le = e, t();
    } finally {
      le = n;
    }
  }, Bl = function(e, t, n) {
    switch (t) {
      case "input":
        if (Ll(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var l = Qr(r);
              if (!l) throw Error(m(90));
              Lo(r), Ll(r, l);
            }
          }
        }
        break;
      case "textarea":
        Fo(e, n);
        break;
      case "select":
        t = n.value, t != null && an(e, !!n.multiple, t, !1);
    }
  }, Ko = ho, Yo = ln;
  var If = { usingClientEntryPoint: !1, Events: [lr, wn, Qr, $o, Qo, ho] }, gr = { findFiberByHostInstance: Jt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Df = { bundleType: gr.bundleType, version: gr.version, rendererPackageName: gr.rendererPackageName, rendererConfig: gr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: de.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Zo(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: gr.findFiberByHostInstance || Lf, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Tl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Tl.isDisabled && Tl.supportsFiber) try {
      _r = Tl.inject(Df), vt = Tl;
    } catch {
    }
  }
  return Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = If, Ge.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Eo(t)) throw Error(m(200));
    return Rf(e, t, null, n);
  }, Ge.createRoot = function(e, t) {
    if (!Eo(e)) throw Error(m(299));
    var n = !1, r = "", l = Ea;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = So(e, 1, !1, null, null, n, !1, r, l), e[St] = t.current, tr(e.nodeType === 8 ? e.parentNode : e), new Co(t);
  }, Ge.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(m(188)) : (e = Object.keys(e).join(","), Error(m(268, e)));
    return e = Zo(t), e = e === null ? null : e.stateNode, e;
  }, Ge.flushSync = function(e) {
    return ln(e);
  }, Ge.hydrate = function(e, t, n) {
    if (!jl(t)) throw Error(m(200));
    return Pl(null, e, t, !0, n);
  }, Ge.hydrateRoot = function(e, t, n) {
    if (!Eo(e)) throw Error(m(405));
    var r = n != null && n.hydratedSources || null, l = !1, i = "", o = Ea;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = ka(t, null, e, 1, n ?? null, l, !1, i, o), e[St] = t.current, tr(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
      n,
      l
    );
    return new _l(t);
  }, Ge.render = function(e, t, n) {
    if (!jl(t)) throw Error(m(200));
    return Pl(null, e, t, !1, n);
  }, Ge.unmountComponentAtNode = function(e) {
    if (!jl(e)) throw Error(m(40));
    return e._reactRootContainer ? (ln(function() {
      Pl(null, null, e, !1, function() {
        e._reactRootContainer = null, e[St] = null;
      });
    }), !0) : !1;
  }, Ge.unstable_batchedUpdates = ho, Ge.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!jl(n)) throw Error(m(200));
    if (e == null || e._reactInternals === void 0) throw Error(m(38));
    return Pl(e, t, n, !1, r);
  }, Ge.version = "18.3.1-next-f1338f8080-20240426", Ge;
}
var Ma;
function $f() {
  if (Ma) return jo.exports;
  Ma = 1;
  function v() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v);
      } catch (k) {
        console.error(k);
      }
  }
  return v(), jo.exports = Hf(), jo.exports;
}
var Ia;
function Qf() {
  if (Ia) return zl;
  Ia = 1;
  var v = $f();
  return zl.createRoot = v.createRoot, zl.hydrateRoot = v.hydrateRoot, zl;
}
var Kf = Qf();
function Yf({
  conversations: v,
  activeId: k,
  collapsed: m,
  mobileOpen: C,
  onCloseMobile: N,
  onNewChat: R,
  onSwitchChat: B,
  onDeleteChat: Y,
  onOpenSettings: V,
  onClearAll: ee,
  backendStatus: M,
  isGenerating: A
}) {
  const G = [
    "sidebar",
    m ? "collapsed" : "",
    C ? "mobile-open" : ""
  ].filter(Boolean).join(" "), ge = A ? "generating" : M.dotClass, _e = A ? "Generating..." : M.title;
  return /* @__PURE__ */ s.jsxs("aside", { className: G, id: "sidebar", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "sidebar-header", children: [
      /* @__PURE__ */ s.jsxs("div", { className: "brand", children: [
        /* @__PURE__ */ s.jsx("div", { className: "brand-icon", children: /* @__PURE__ */ s.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
          /* @__PURE__ */ s.jsx("path", { d: "M12 2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" }),
          /* @__PURE__ */ s.jsx("rect", { x: "4", y: "8", width: "16", height: "12", rx: "4" }),
          /* @__PURE__ */ s.jsx("path", { d: "M9 13h.01M15 13h.01M9 17h6" })
        ] }) }),
        /* @__PURE__ */ s.jsxs("div", { className: "brand-text", children: [
          /* @__PURE__ */ s.jsx("h2", { children: "Casual LLM" }),
          /* @__PURE__ */ s.jsx("span", { className: "subtext", children: "SmolLM2-360M" })
        ] })
      ] }),
      /* @__PURE__ */ s.jsx(
        "button",
        {
          className: "icon-btn close-sidebar-btn",
          id: "closeSidebarBtn",
          title: "Close Sidebar",
          onClick: N,
          children: /* @__PURE__ */ s.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
            /* @__PURE__ */ s.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
            /* @__PURE__ */ s.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ s.jsx("div", { className: "sidebar-actions", children: /* @__PURE__ */ s.jsxs(
      "button",
      {
        className: "btn btn-primary new-chat-btn",
        id: "newChatBtn",
        onClick: R,
        children: [
          /* @__PURE__ */ s.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
            /* @__PURE__ */ s.jsx("line", { x1: "12", y1: "5", x2: "12", y2: "19" }),
            /* @__PURE__ */ s.jsx("line", { x1: "5", y1: "12", x2: "19", y2: "12" })
          ] }),
          /* @__PURE__ */ s.jsx("span", { children: "New Chat" })
        ]
      }
    ) }),
    /* @__PURE__ */ s.jsx("div", { className: "sidebar-section-title", children: "Conversations" }),
    /* @__PURE__ */ s.jsx("div", { className: "conversations-list", id: "conversationsList", children: v.map((F) => {
      const W = F.id === k;
      return /* @__PURE__ */ s.jsxs(
        "div",
        {
          className: `conversation-item ${W ? "active" : ""}`,
          onClick: () => B(F.id),
          children: [
            /* @__PURE__ */ s.jsx("span", { className: "conversation-title", children: F.title || "Untitled Chat" }),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                className: "item-delete-btn",
                title: "Delete conversation",
                onClick: (Xe) => {
                  Xe.stopPropagation(), Y(F.id);
                },
                children: /* @__PURE__ */ s.jsxs("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
                  /* @__PURE__ */ s.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
                  /* @__PURE__ */ s.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
                ] })
              }
            )
          ]
        },
        F.id
      );
    }) }),
    /* @__PURE__ */ s.jsxs("div", { className: "sidebar-footer", children: [
      /* @__PURE__ */ s.jsxs("div", { className: "status-indicator-card", children: [
        /* @__PURE__ */ s.jsx("div", { className: "status-dot-wrapper", children: /* @__PURE__ */ s.jsx("span", { className: `status-dot ${ge}`, id: "sidebarStatusDot" }) }),
        /* @__PURE__ */ s.jsxs("div", { className: "status-text", children: [
          /* @__PURE__ */ s.jsx("div", { className: "status-title", id: "sidebarStatusTitle", children: _e }),
          /* @__PURE__ */ s.jsx("div", { className: "status-sub", children: "PyTorch CPU" })
        ] })
      ] }),
      /* @__PURE__ */ s.jsxs("div", { className: "sidebar-footer-buttons", children: [
        /* @__PURE__ */ s.jsxs(
          "button",
          {
            className: "footer-btn",
            id: "openSettingsBtn",
            title: "Inference Settings",
            onClick: V,
            children: [
              /* @__PURE__ */ s.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
                /* @__PURE__ */ s.jsx("circle", { cx: "12", cy: "12", r: "3" }),
                /* @__PURE__ */ s.jsx("path", { d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" })
              ] }),
              /* @__PURE__ */ s.jsx("span", { children: "Settings" })
            ]
          }
        ),
        /* @__PURE__ */ s.jsxs(
          "button",
          {
            className: "footer-btn",
            id: "clearAllChatsBtn",
            title: "Clear All History",
            onClick: ee,
            children: [
              /* @__PURE__ */ s.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
                /* @__PURE__ */ s.jsx("polyline", { points: "3 6 5 6 21 6" }),
                /* @__PURE__ */ s.jsx("path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" })
              ] }),
              /* @__PURE__ */ s.jsx("span", { children: "Clear All" })
            ]
          }
        )
      ] })
    ] })
  ] });
}
function Gf({
  onToggleSidebar: v,
  onOpenSettings: k,
  onClearChat: m,
  onToggleTheme: C
}) {
  return /* @__PURE__ */ s.jsxs("header", { className: "top-nav", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "nav-left", children: [
      /* @__PURE__ */ s.jsx(
        "button",
        {
          className: "icon-btn sidebar-toggle-btn",
          id: "toggleSidebarBtn",
          title: "Toggle Sidebar",
          onClick: v,
          children: /* @__PURE__ */ s.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
            /* @__PURE__ */ s.jsx("line", { x1: "3", y1: "12", x2: "21", y2: "12" }),
            /* @__PURE__ */ s.jsx("line", { x1: "3", y1: "6", x2: "21", y2: "6" }),
            /* @__PURE__ */ s.jsx("line", { x1: "3", y1: "18", x2: "21", y2: "18" })
          ] })
        }
      ),
      /* @__PURE__ */ s.jsxs("div", { className: "model-badge", children: [
        /* @__PURE__ */ s.jsx("span", { className: "badge-dot" }),
        /* @__PURE__ */ s.jsx("span", { className: "badge-label", children: "SmolLM2-360M-Instruct" })
      ] })
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "nav-right", children: [
      /* @__PURE__ */ s.jsx(
        "button",
        {
          className: "icon-btn",
          id: "navSettingsBtn",
          title: "Generation Settings",
          onClick: k,
          children: /* @__PURE__ */ s.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
            /* @__PURE__ */ s.jsx("line", { x1: "4", y1: "21", x2: "4", y2: "14" }),
            /* @__PURE__ */ s.jsx("line", { x1: "4", y1: "10", x2: "4", y2: "3" }),
            /* @__PURE__ */ s.jsx("line", { x1: "12", y1: "21", x2: "12", y2: "12" }),
            /* @__PURE__ */ s.jsx("line", { x1: "12", y1: "8", x2: "12", y2: "3" }),
            /* @__PURE__ */ s.jsx("line", { x1: "20", y1: "21", x2: "20", y2: "16" }),
            /* @__PURE__ */ s.jsx("line", { x1: "20", y1: "12", x2: "20", y2: "3" }),
            /* @__PURE__ */ s.jsx("line", { x1: "1", y1: "14", x2: "7", y2: "14" }),
            /* @__PURE__ */ s.jsx("line", { x1: "9", y1: "8", x2: "15", y2: "8" }),
            /* @__PURE__ */ s.jsx("line", { x1: "17", y1: "16", x2: "23", y2: "16" })
          ] })
        }
      ),
      /* @__PURE__ */ s.jsx(
        "button",
        {
          className: "icon-btn",
          id: "clearChatBtn",
          title: "Clear Current Chat",
          onClick: m,
          children: /* @__PURE__ */ s.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
            /* @__PURE__ */ s.jsx("polyline", { points: "1 4 1 10 7 10" }),
            /* @__PURE__ */ s.jsx("path", { d: "M3.51 15a9 9 0 1 0 2.13-9.36L1 10" })
          ] })
        }
      ),
      /* @__PURE__ */ s.jsxs(
        "button",
        {
          className: "icon-btn",
          id: "themeToggleBtn",
          title: "Toggle Light/Dark Theme",
          onClick: C,
          children: [
            /* @__PURE__ */ s.jsxs("svg", { className: "sun-icon", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
              /* @__PURE__ */ s.jsx("circle", { cx: "12", cy: "12", r: "5" }),
              /* @__PURE__ */ s.jsx("line", { x1: "12", y1: "1", x2: "12", y2: "3" }),
              /* @__PURE__ */ s.jsx("line", { x1: "12", y1: "21", x2: "12", y2: "23" }),
              /* @__PURE__ */ s.jsx("line", { x1: "4.22", y1: "4.22", x2: "5.64", y2: "5.64" }),
              /* @__PURE__ */ s.jsx("line", { x1: "18.36", y1: "18.36", x2: "19.78", y2: "19.78" }),
              /* @__PURE__ */ s.jsx("line", { x1: "1", y1: "12", x2: "3", y2: "12" }),
              /* @__PURE__ */ s.jsx("line", { x1: "21", y1: "12", x2: "23", y2: "12" }),
              /* @__PURE__ */ s.jsx("line", { x1: "4.22", y1: "19.78", x2: "5.64", y2: "18.36" }),
              /* @__PURE__ */ s.jsx("line", { x1: "18.36", y1: "5.64", x2: "19.78", y2: "4.22" })
            ] }),
            /* @__PURE__ */ s.jsx("svg", { className: "moon-icon", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ s.jsx("path", { d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" }) })
          ]
        }
      )
    ] })
  ] });
}
const Ua = {
  cheerful: "You are a very friendly and cheerful assistant. Always respond in a warm, casual, and encouraging tone.",
  coding: "You are an expert software engineer and Python specialist. Provide concise, clean, well-commented code and clear explanations.",
  concise: "You are a direct, efficient assistant. Answer questions accurately and concisely without unnecessary filler.",
  creative: "You are an imaginative creative writer and conversational partner. Use expressive, colorful, and engaging language.",
  custom: ""
}, Aa = {
  persona: "cheerful",
  systemPrompt: Ua.cheerful,
  temperature: 0.7,
  maxTokens: 256,
  topP: 0.85,
  repetitionPenalty: 1.15
}, Xf = [
  {
    icon: "🪐",
    label: "Fun universe fact",
    prompt: "Tell me a fun and surprising fact about the universe!"
  },
  {
    icon: "🐍",
    label: "Python palindrome script",
    prompt: "Write a clean Python function that checks if a string is a palindrome."
  },
  {
    icon: "✉️",
    label: "Promotion congrats email",
    prompt: "Draft a friendly email congratulating a colleague on their work promotion."
  },
  {
    icon: "🎯",
    label: "Focus and study tips",
    prompt: "Give me 3 practical tips for staying focused while coding or studying."
  }
];
function Jf({ onSelectPrompt: v }) {
  return /* @__PURE__ */ s.jsx("div", { className: "welcome-screen", id: "welcomeScreen", children: /* @__PURE__ */ s.jsxs("div", { className: "welcome-card", children: [
    /* @__PURE__ */ s.jsx("div", { className: "welcome-logo", children: /* @__PURE__ */ s.jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", children: /* @__PURE__ */ s.jsx("path", { d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" }) }) }),
    /* @__PURE__ */ s.jsx("h1", { children: "How can I help you today?" }),
    /* @__PURE__ */ s.jsx("p", { children: "Casual LLM runs SmolLM2 locally on your machine with fast, warm responses. Choose a starter below or type your own question." }),
    /* @__PURE__ */ s.jsx("div", { className: "prompt-chips", children: Xf.map((k) => /* @__PURE__ */ s.jsxs(
      "button",
      {
        className: "chip",
        "data-prompt": k.prompt,
        onClick: () => v(k.prompt),
        children: [
          /* @__PURE__ */ s.jsx("span", { className: "chip-icon", children: k.icon }),
          /* @__PURE__ */ s.jsx("span", { className: "chip-text", children: k.label })
        ]
      },
      k.label
    )) })
  ] }) });
}
function Zf({ lang: v = "text", code: k = "" }) {
  const [m, C] = $.useState(!1), N = () => {
    navigator.clipboard && navigator.clipboard.writeText(k).then(() => {
      C(!0), setTimeout(() => C(!1), 2e3);
    }).catch((R) => {
      console.warn("Clipboard copy error:", R);
    });
  };
  return /* @__PURE__ */ s.jsxs("div", { className: "code-block-wrapper", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "code-header", children: [
      /* @__PURE__ */ s.jsx("span", { children: v }),
      /* @__PURE__ */ s.jsx("button", { className: "code-copy-btn", onClick: N, title: "Copy code snippet", children: m ? "✓ Copied!" : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsxs("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
          /* @__PURE__ */ s.jsx("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2", ry: "2" }),
          /* @__PURE__ */ s.jsx("path", { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" })
        ] }),
        /* @__PURE__ */ s.jsx("span", { children: "Copy" })
      ] }) })
    ] }),
    /* @__PURE__ */ s.jsx("pre", { children: /* @__PURE__ */ s.jsx("code", { children: k }) })
  ] });
}
function qf(v) {
  if (!v) return null;
  const k = /(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*)/g;
  return v.split(k).map((C, N) => C ? C.startsWith("`") && C.endsWith("`") && C.length > 1 ? /* @__PURE__ */ s.jsx("code", { children: C.slice(1, -1) }, N) : C.startsWith("**") && C.endsWith("**") && C.length > 3 ? /* @__PURE__ */ s.jsx("strong", { children: C.slice(2, -2) }, N) : C.startsWith("*") && C.endsWith("*") && C.length > 2 ? /* @__PURE__ */ s.jsx("em", { children: C.slice(1, -1) }, N) : C : null);
}
function bf(v, k) {
  const m = v.split(`
`);
  return /* @__PURE__ */ s.jsx("p", { children: m.map((C, N) => /* @__PURE__ */ s.jsxs(Ro.Fragment, { children: [
    qf(C),
    N < m.length - 1 && /* @__PURE__ */ s.jsx("br", {})
  ] }, N)) }, k);
}
function ed(v) {
  if (!v) return null;
  const k = /```([a-zA-Z0-9_\-#+.]*)?\n([\s\S]*?)```/g, m = [];
  let C = 0, N;
  for (; (N = k.exec(v)) !== null; ) {
    const B = v.slice(C, N.index);
    B && m.push({ type: "text", content: B }), m.push({
      type: "code",
      lang: N[1] || "text",
      content: N[2]
    }), C = N.index + N[0].length;
  }
  const R = v.slice(C);
  return R && m.push({ type: "text", content: R }), m.map((B, Y) => {
    if (B.type === "code")
      return /* @__PURE__ */ s.jsx(Zf, { lang: B.lang, code: B.content }, `code-${Y}`);
    const V = B.content.split(/\n\s*\n/);
    return /* @__PURE__ */ s.jsx(Ro.Fragment, { children: V.map((ee, M) => ee.trim() ? bf(ee, `p-${Y}-${M}`) : null) }, `text-${Y}`);
  });
}
function Da({ role: v, content: k, isStreaming: m = !1 }) {
  const [C, N] = $.useState(!1), R = () => {
    navigator.clipboard && navigator.clipboard.writeText(k).then(() => {
      N(!0), setTimeout(() => N(!1), 1800);
    }).catch((Y) => {
      console.warn("Clipboard copy error:", Y);
    });
  }, B = v === "user";
  return /* @__PURE__ */ s.jsxs("div", { className: `message-row ${v}`, children: [
    /* @__PURE__ */ s.jsx("div", { className: "message-avatar", children: B ? "U" : "AI" }),
    /* @__PURE__ */ s.jsxs("div", { className: "message-bubble-wrapper", children: [
      /* @__PURE__ */ s.jsxs("div", { className: "message-bubble", children: [
        ed(k),
        m && /* @__PURE__ */ s.jsx("span", { className: "typing-cursor" })
      ] }),
      !B && !m && k && /* @__PURE__ */ s.jsx("div", { className: "message-actions", children: /* @__PURE__ */ s.jsx("button", { className: "action-chip-btn", onClick: R, title: "Copy response", children: C ? "✓ Copied" : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
          /* @__PURE__ */ s.jsx("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2", ry: "2" }),
          /* @__PURE__ */ s.jsx("path", { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" })
        ] }),
        /* @__PURE__ */ s.jsx("span", { children: "Copy" })
      ] }) }) })
    ] })
  ] });
}
function td({
  messages: v = [],
  isGenerating: k = !1,
  streamingResponse: m = "",
  onSelectPrompt: C
}) {
  const N = $.useRef(null);
  $.useEffect(() => {
    N.current && (N.current.scrollTop = N.current.scrollHeight);
  }, [v, m, k]);
  const R = v.length === 0 && !k;
  return /* @__PURE__ */ s.jsx("div", { className: "chat-viewport", id: "chatViewport", ref: N, children: R ? /* @__PURE__ */ s.jsx(Jf, { onSelectPrompt: C }) : /* @__PURE__ */ s.jsxs("div", { className: "messages-container", id: "messagesContainer", children: [
    v.map((B, Y) => /* @__PURE__ */ s.jsx(
      Da,
      {
        role: B.role,
        content: B.content
      },
      Y
    )),
    k && /* @__PURE__ */ s.jsx(
      Da,
      {
        role: "assistant",
        content: m,
        isStreaming: !0
      }
    )
  ] }) });
}
function nd({ isGenerating: v, onSendMessage: k, onStop: m }) {
  const [C, N] = $.useState(""), R = $.useRef(null);
  $.useEffect(() => {
    R.current && (R.current.style.height = "auto", R.current.style.height = Math.min(R.current.scrollHeight, 160) + "px");
  }, [C]), $.useEffect(() => {
    !v && R.current && R.current.focus();
  }, [v]);
  const B = () => {
    const M = C.trim();
    !M || v || (k(M), N(""), R.current && (R.current.style.height = "auto"));
  }, Y = (M) => {
    M.key === "Enter" && !M.shiftKey && (M.preventDefault(), B());
  }, V = C.length, ee = !C.trim() || v;
  return /* @__PURE__ */ s.jsxs("div", { className: "input-panel", children: [
    v && /* @__PURE__ */ s.jsx("div", { className: "stop-generating-container", id: "stopContainer", style: { display: "flex" }, children: /* @__PURE__ */ s.jsxs("button", { className: "stop-btn", id: "stopBtn", onClick: m, children: [
      /* @__PURE__ */ s.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ s.jsx("rect", { x: "6", y: "6", width: "12", height: "12", rx: "2" }) }),
      /* @__PURE__ */ s.jsx("span", { children: "Stop generating" })
    ] }) }),
    /* @__PURE__ */ s.jsxs("div", { className: "input-box-wrapper", children: [
      /* @__PURE__ */ s.jsx(
        "textarea",
        {
          ref: R,
          id: "chatInput",
          className: "chat-textarea",
          placeholder: "Type your message... (Enter to send, Shift+Enter for newline)",
          rows: "1",
          value: C,
          onChange: (M) => N(M.target.value),
          onKeyDown: Y
        }
      ),
      /* @__PURE__ */ s.jsx(
        "button",
        {
          className: "send-btn",
          id: "sendBtn",
          title: "Send message",
          disabled: ee,
          onClick: B,
          children: /* @__PURE__ */ s.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
            /* @__PURE__ */ s.jsx("line", { x1: "22", y1: "2", x2: "11", y2: "13" }),
            /* @__PURE__ */ s.jsx("polygon", { points: "22 2 15 22 11 13 2 9 22 2" })
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "input-footer", children: [
      /* @__PURE__ */ s.jsx("span", { children: "SmolLM2-360M-Instruct" }),
      /* @__PURE__ */ s.jsx("span", { className: "footer-separator", children: "•" }),
      /* @__PURE__ */ s.jsx("span", { children: "FastAPI Deployment" }),
      /* @__PURE__ */ s.jsx("span", { className: "footer-separator", children: "•" }),
      /* @__PURE__ */ s.jsxs("span", { id: "charCount", children: [
        V,
        " character",
        V === 1 ? "" : "s"
      ] })
    ] })
  ] });
}
function rd({ isOpen: v, onClose: k, settings: m, onSave: C }) {
  const [N, R] = $.useState(m);
  $.useEffect(() => {
    v && R(m);
  }, [v, m]), $.useEffect(() => {
    const M = (A) => {
      A.key === "Escape" && v && k();
    };
    return window.addEventListener("keydown", M), () => window.removeEventListener("keydown", M);
  }, [v, k]);
  const B = (M) => {
    const A = M.target.value, G = Ua[A];
    R((ge) => ({
      ...ge,
      persona: A,
      systemPrompt: G !== void 0 && G !== "" ? G : ge.systemPrompt
    }));
  }, Y = () => {
    R({ ...Aa });
  }, V = () => {
    C(N), k();
  }, ee = (M) => {
    M.target === M.currentTarget && k();
  };
  return /* @__PURE__ */ s.jsx(
    "div",
    {
      className: `settings-modal-backdrop ${v ? "open" : ""}`,
      id: "settingsModalBackdrop",
      onClick: ee,
      children: /* @__PURE__ */ s.jsxs("div", { className: "settings-card", children: [
        /* @__PURE__ */ s.jsxs("div", { className: "settings-header", children: [
          /* @__PURE__ */ s.jsx("h3", { children: "Inference Settings" }),
          /* @__PURE__ */ s.jsx("button", { className: "icon-btn", id: "closeSettingsBtn", onClick: k, title: "Close Settings", children: /* @__PURE__ */ s.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
            /* @__PURE__ */ s.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
            /* @__PURE__ */ s.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
          ] }) })
        ] }),
        /* @__PURE__ */ s.jsxs("div", { className: "settings-body", children: [
          /* @__PURE__ */ s.jsxs("div", { className: "form-group", children: [
            /* @__PURE__ */ s.jsx("label", { htmlFor: "personaSelect", children: "Assistant Persona Preset" }),
            /* @__PURE__ */ s.jsxs(
              "select",
              {
                id: "personaSelect",
                className: "form-select",
                value: N.persona,
                onChange: B,
                children: [
                  /* @__PURE__ */ s.jsx("option", { value: "cheerful", children: "Cheerful & Friendly (Default)" }),
                  /* @__PURE__ */ s.jsx("option", { value: "coding", children: "Expert Python Coder" }),
                  /* @__PURE__ */ s.jsx("option", { value: "concise", children: "Concise & Direct" }),
                  /* @__PURE__ */ s.jsx("option", { value: "creative", children: "Creative & Imaginative" }),
                  /* @__PURE__ */ s.jsx("option", { value: "custom", children: "Custom Persona" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "form-group", children: [
            /* @__PURE__ */ s.jsx("label", { htmlFor: "systemPromptInput", children: "System Prompt" }),
            /* @__PURE__ */ s.jsx(
              "textarea",
              {
                id: "systemPromptInput",
                className: "form-textarea",
                rows: 3,
                value: N.systemPrompt,
                onChange: (M) => R((A) => ({ ...A, systemPrompt: M.target.value }))
              }
            ),
            /* @__PURE__ */ s.jsx("span", { className: "form-help", children: "Guides the model's behavior and personality." })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "form-group", children: [
            /* @__PURE__ */ s.jsxs("div", { className: "range-header", children: [
              /* @__PURE__ */ s.jsx("label", { htmlFor: "tempRange", children: "Temperature" }),
              /* @__PURE__ */ s.jsx("span", { className: "range-val", id: "tempVal", children: N.temperature })
            ] }),
            /* @__PURE__ */ s.jsx(
              "input",
              {
                type: "range",
                id: "tempRange",
                min: "0.0",
                max: "1.5",
                step: "0.05",
                value: N.temperature,
                onChange: (M) => R((A) => ({ ...A, temperature: parseFloat(M.target.value) }))
              }
            ),
            /* @__PURE__ */ s.jsx("span", { className: "form-help", children: "Lower = more deterministic, higher = more creative." })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "form-group", children: [
            /* @__PURE__ */ s.jsxs("div", { className: "range-header", children: [
              /* @__PURE__ */ s.jsx("label", { htmlFor: "tokensRange", children: "Max Output Tokens" }),
              /* @__PURE__ */ s.jsx("span", { className: "range-val", id: "tokensVal", children: N.maxTokens })
            ] }),
            /* @__PURE__ */ s.jsx(
              "input",
              {
                type: "range",
                id: "tokensRange",
                min: "32",
                max: "512",
                step: "16",
                value: N.maxTokens,
                onChange: (M) => R((A) => ({ ...A, maxTokens: parseInt(M.target.value, 10) }))
              }
            ),
            /* @__PURE__ */ s.jsx("span", { className: "form-help", children: "Maximum response length generated per turn." })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "form-group", children: [
            /* @__PURE__ */ s.jsxs("div", { className: "range-header", children: [
              /* @__PURE__ */ s.jsx("label", { htmlFor: "topPRange", children: "Top-P (Nucleus Sampling)" }),
              /* @__PURE__ */ s.jsx("span", { className: "range-val", id: "topPVal", children: N.topP })
            ] }),
            /* @__PURE__ */ s.jsx(
              "input",
              {
                type: "range",
                id: "topPRange",
                min: "0.1",
                max: "1.0",
                step: "0.05",
                value: N.topP,
                onChange: (M) => R((A) => ({ ...A, topP: parseFloat(M.target.value) }))
              }
            ),
            /* @__PURE__ */ s.jsx("span", { className: "form-help", children: "Limits tokens to those with cumulative probability top-p." })
          ] }),
          /* @__PURE__ */ s.jsxs("div", { className: "form-group", children: [
            /* @__PURE__ */ s.jsxs("div", { className: "range-header", children: [
              /* @__PURE__ */ s.jsx("label", { htmlFor: "repPenaltyRange", children: "Repetition Penalty" }),
              /* @__PURE__ */ s.jsx("span", { className: "range-val", id: "repPenaltyVal", children: N.repetitionPenalty })
            ] }),
            /* @__PURE__ */ s.jsx(
              "input",
              {
                type: "range",
                id: "repPenaltyRange",
                min: "1.0",
                max: "1.5",
                step: "0.05",
                value: N.repetitionPenalty,
                onChange: (M) => R((A) => ({ ...A, repetitionPenalty: parseFloat(M.target.value) }))
              }
            ),
            /* @__PURE__ */ s.jsx("span", { className: "form-help", children: "Penalizes repeated phrases and loops." })
          ] })
        ] }),
        /* @__PURE__ */ s.jsxs("div", { className: "settings-footer", children: [
          /* @__PURE__ */ s.jsx("button", { className: "btn btn-secondary", id: "resetDefaultsBtn", onClick: Y, children: "Reset to Defaults" }),
          /* @__PURE__ */ s.jsx("button", { className: "btn btn-primary", id: "saveSettingsBtn", onClick: V, children: "Save & Apply" })
        ] })
      ] })
    }
  );
}
function ld() {
  const [v, k] = $.useState({
    dotClass: "connecting",
    title: "Connecting..."
  });
  return $.useEffect(() => {
    let m = null, C = !1;
    async function N() {
      try {
        const R = await fetch("/api/health");
        if (C) return;
        if (R.ok) {
          const B = await R.json();
          B.status === "ready" ? k({ dotClass: "ready", title: "Model Ready" }) : B.status === "loading" ? (k({ dotClass: "generating", title: "Loading Model..." }), m = setTimeout(N, 2e3)) : (k({ dotClass: "error", title: "Model Error" }), m = setTimeout(N, 3e3));
        } else
          k({ dotClass: "error", title: "Server Error" }), m = setTimeout(N, 3e3);
      } catch {
        if (C) return;
        k({ dotClass: "error", title: "Offline" }), m = setTimeout(N, 4e3);
      }
    }
    return N(), () => {
      C = !0, m && clearTimeout(m);
    };
  }, []), v;
}
const Gt = {
  THEME: "casual_llm_theme",
  SETTINGS: "casual_llm_settings",
  CONVERSATIONS: "casual_llm_conversations",
  ACTIVE_ID: "casual_llm_active_id"
};
function id() {
  try {
    return localStorage.getItem(Gt.THEME) || "dark";
  } catch {
    return "dark";
  }
}
function od(v) {
  try {
    localStorage.setItem(Gt.THEME, v);
  } catch (k) {
    console.warn("Failed to save theme to localStorage:", k);
  }
}
function ud(v) {
  try {
    const k = localStorage.getItem(Gt.SETTINGS);
    return k ? { ...v, ...JSON.parse(k) } : { ...v };
  } catch {
    return { ...v };
  }
}
function sd(v) {
  try {
    localStorage.setItem(Gt.SETTINGS, JSON.stringify(v));
  } catch (k) {
    console.warn("Failed to save settings to localStorage:", k);
  }
}
function Oa() {
  try {
    const v = localStorage.getItem(Gt.CONVERSATIONS);
    return v ? JSON.parse(v) : [];
  } catch {
    return [];
  }
}
function ad(v) {
  try {
    localStorage.setItem(Gt.CONVERSATIONS, JSON.stringify(v));
  } catch (k) {
    console.warn("Failed to save conversations to localStorage:", k);
  }
}
function cd() {
  try {
    return localStorage.getItem(Gt.ACTIVE_ID) || null;
  } catch {
    return null;
  }
}
function fd(v) {
  try {
    localStorage.setItem(Gt.ACTIVE_ID, v);
  } catch (k) {
    console.warn("Failed to save active conversation ID to localStorage:", k);
  }
}
function dd(v) {
  const [k, m] = $.useState(() => {
    const X = Oa();
    return X.length > 0 ? X : [{
      id: "conv_" + Date.now(),
      title: "New Conversation",
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      messages: []
    }];
  }), [C, N] = $.useState(() => {
    const X = cd(), te = Oa();
    return X && te.some((de) => de.id === X) ? X : te.length > 0 ? te[0].id : null;
  }), [R, B] = $.useState(!1), [Y, V] = $.useState(""), ee = $.useRef(null);
  $.useEffect(() => {
    !C && k.length > 0 && N(k[0].id);
  }, [C, k]), $.useEffect(() => {
    ad(k);
  }, [k]), $.useEffect(() => {
    C && fd(C);
  }, [C]);
  const M = k.find((X) => X.id === C) || k[0], A = $.useCallback(() => {
    if (R) return;
    const X = {
      id: "conv_" + Date.now(),
      title: "New Conversation",
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      messages: []
    };
    m((te) => [X, ...te]), N(X.id);
  }, [R]), G = $.useCallback((X) => {
    R || N(X);
  }, [R]), ge = $.useCallback((X) => {
    m((te) => {
      const de = te.filter((ke) => ke.id !== X);
      if (de.length === 0) {
        const ke = {
          id: "conv_" + Date.now(),
          title: "New Conversation",
          createdAt: (/* @__PURE__ */ new Date()).toISOString(),
          messages: []
        };
        return N(ke.id), [ke];
      }
      return C === X && N(de[0].id), de;
    });
  }, [C]), _e = $.useCallback(() => {
    R || !C || m((X) => X.map((te) => te.id === C ? { ...te, messages: [], title: "New Conversation" } : te));
  }, [R, C]), F = $.useCallback(() => {
    if (!R && window.confirm("Are you sure you want to delete all conversations?")) {
      const X = {
        id: "conv_" + Date.now(),
        title: "New Conversation",
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        messages: []
      };
      m([X]), N(X.id);
    }
  }, [R]), W = $.useCallback(() => {
    ee.current && ee.current.abort();
  }, []), Xe = $.useCallback(async (X) => {
    const te = (X || "").trim();
    if (!te || R || !C) return;
    const ke = M && M.messages.length === 0 ? te.length > 28 ? te.slice(0, 28) + "..." : te : null, ze = { role: "user", content: te };
    let Re = [];
    m((Ie) => Ie.map((ve) => {
      if (ve.id === C) {
        const Ce = {
          ...ve,
          title: ke || ve.title,
          messages: [...ve.messages, ze]
        };
        return Re = Ce.messages, Ce;
      }
      return ve;
    })), B(!0), V("");
    const Ae = new AbortController();
    ee.current = Ae;
    let Je = "";
    try {
      const Ie = Re.map((pe) => ({ role: pe.role, content: pe.content })), ve = await fetch("/api/chat/stream", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: Ie,
          system_prompt: v.systemPrompt,
          temperature: v.temperature,
          top_p: v.topP,
          max_new_tokens: v.maxTokens,
          repetition_penalty: v.repetitionPenalty
        }),
        signal: Ae.signal
      });
      if (!ve.ok) {
        const pe = await ve.json().catch(() => ({}));
        throw new Error(pe.detail || `Server error: ${ve.status}`);
      }
      const Ce = ve.body.getReader(), ue = new TextDecoder("utf-8");
      let Be = "";
      for (; ; ) {
        const { value: pe, done: ne } = await Ce.read();
        if (ne) break;
        Be += ue.decode(pe, { stream: !0 });
        const E = Be.split(`
`);
        Be = E.pop() || "";
        for (const O of E) {
          const j = O.trim();
          if (j.startsWith("data:")) {
            const f = j.slice(5).trim();
            if (!f) continue;
            try {
              const y = JSON.parse(f);
              if (y.token)
                Je += y.token, V(Je);
              else if (y.error)
                throw new Error(y.error);
            } catch (y) {
              y.message && y.message !== "Unexpected end of JSON input" && console.warn("Parse warning:", y.message);
            }
          }
        }
      }
      const nt = { role: "assistant", content: Je };
      m((pe) => pe.map((ne) => ne.id === C ? {
        ...ne,
        messages: [...ne.messages, nt]
      } : ne));
    } catch (Ie) {
      if (Ie.name === "AbortError") {
        const ve = {
          role: "assistant",
          content: Je || "(Generation stopped)"
        };
        m((Ce) => Ce.map((ue) => ue.id === C ? {
          ...ue,
          messages: [...ue.messages, ve]
        } : ue));
      } else {
        const ve = {
          role: "assistant",
          content: `Error: ${Ie.message}`
        };
        m((Ce) => Ce.map((ue) => ue.id === C ? {
          ...ue,
          messages: [...ue.messages, ve]
        } : ue));
      }
    } finally {
      B(!1), V(""), ee.current = null;
    }
  }, [C, R, M, v]);
  return {
    conversations: k,
    activeId: C,
    activeConversation: M,
    isGenerating: R,
    streamingResponse: Y,
    createNewConversation: A,
    switchConversation: G,
    deleteConversation: ge,
    clearCurrentChat: _e,
    clearAllConversations: F,
    sendMessage: Xe,
    stopGeneration: W
  };
}
function pd() {
  const [v, k] = $.useState(id);
  $.useEffect(() => {
    document.documentElement.setAttribute("data-theme", v), od(v);
  }, [v]);
  const m = $.useCallback(() => {
    k((W) => W === "dark" ? "light" : "dark");
  }, []), [C, N] = $.useState(() => ud(Aa)), [R, B] = $.useState(!1), Y = $.useCallback((W) => {
    N(W), sd(W);
  }, []), [V, ee] = $.useState(!1), [M, A] = $.useState(!1), G = $.useCallback(() => {
    window.innerWidth <= 768 ? A((W) => !W) : ee((W) => !W);
  }, []), ge = $.useCallback(() => {
    A(!1);
  }, []), _e = ld(), F = dd(C);
  return /* @__PURE__ */ s.jsxs("div", { className: "app-layout", children: [
    /* @__PURE__ */ s.jsx(
      Yf,
      {
        conversations: F.conversations,
        activeId: F.activeId,
        collapsed: V,
        mobileOpen: M,
        onCloseMobile: ge,
        onNewChat: F.createNewConversation,
        onSwitchChat: F.switchConversation,
        onDeleteChat: F.deleteConversation,
        onOpenSettings: () => B(!0),
        onClearAll: F.clearAllConversations,
        backendStatus: _e,
        isGenerating: F.isGenerating
      }
    ),
    /* @__PURE__ */ s.jsxs("main", { className: "main-content", children: [
      /* @__PURE__ */ s.jsx(
        Gf,
        {
          onToggleSidebar: G,
          onOpenSettings: () => B(!0),
          onClearChat: F.clearCurrentChat,
          onToggleTheme: m
        }
      ),
      /* @__PURE__ */ s.jsx(
        td,
        {
          messages: F.activeConversation ? F.activeConversation.messages : [],
          isGenerating: F.isGenerating,
          streamingResponse: F.streamingResponse,
          onSelectPrompt: F.sendMessage
        }
      ),
      /* @__PURE__ */ s.jsx(
        nd,
        {
          isGenerating: F.isGenerating,
          onSendMessage: F.sendMessage,
          onStop: F.stopGeneration
        }
      )
    ] }),
    /* @__PURE__ */ s.jsx(
      rd,
      {
        isOpen: R,
        onClose: () => B(!1),
        settings: C,
        onSave: Y
      }
    )
  ] });
}
const Fa = document.getElementById("root");
Fa && Kf.createRoot(Fa).render(
  /* @__PURE__ */ s.jsx(Ro.StrictMode, { children: /* @__PURE__ */ s.jsx(pd, {}) })
);
