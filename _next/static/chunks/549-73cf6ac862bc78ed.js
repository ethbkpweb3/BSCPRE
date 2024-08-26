(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[549], {
    59035: function(t, e, r) {
        "use strict";
        r.d(e, {
            Sg: function() {
                return s
            },
            zt: function() {
                return a
            }
        });
        var n = r(22594);
        r(9784);
        var i = r(36173);
        let o = new (r(13421)).Yd("abstract-provider/5.7.0");
        class s extends i.dk {
            static isForkEvent(t) {
                return !!(t && t._isForkEvent)
            }
        }
        class a {
            constructor() {
                o.checkAbstract(new.target, a),
                (0,
                i.zG)(this, "_isProvider", !0)
            }
            getFeeData() {
                var t, e, r, o;
                return t = this,
                e = void 0,
                r = void 0,
                o = function*() {
                    let {block: t, gasPrice: e} = yield(0,
                    i.mE)({
                        block: this.getBlock("latest"),
                        gasPrice: this.getGasPrice().catch(t=>null)
                    })
                      , r = null
                      , o = null
                      , s = null;
                    return t && t.baseFeePerGas && (r = t.baseFeePerGas,
                    s = n.O$.from("1500000000"),
                    o = t.baseFeePerGas.mul(2).add(s)),
                    {
                        lastBaseFeePerGas: r,
                        maxFeePerGas: o,
                        maxPriorityFeePerGas: s,
                        gasPrice: e
                    }
                }
                ,
                new (r || (r = Promise))(function(n, i) {
                    function s(t) {
                        try {
                            u(o.next(t))
                        } catch (t) {
                            i(t)
                        }
                    }
                    function a(t) {
                        try {
                            u(o.throw(t))
                        } catch (t) {
                            i(t)
                        }
                    }
                    function u(t) {
                        var e;
                        t.done ? n(t.value) : ((e = t.value)instanceof r ? e : new r(function(t) {
                            t(e)
                        }
                        )).then(s, a)
                    }
                    u((o = o.apply(t, e || [])).next())
                }
                )
            }
            addListener(t, e) {
                return this.on(t, e)
            }
            removeListener(t, e) {
                return this.off(t, e)
            }
            static isProvider(t) {
                return !!(t && t._isProvider)
            }
        }
    },
    37637: function(t, e, r) {
        "use strict";
        r.d(e, {
            E: function() {
                return l
            },
            b: function() {
                return h
            }
        });
        var n = r(36173)
          , i = r(13421)
          , o = function(t, e, r, n) {
            return new (r || (r = Promise))(function(i, o) {
                function s(t) {
                    try {
                        u(n.next(t))
                    } catch (t) {
                        o(t)
                    }
                }
                function a(t) {
                    try {
                        u(n.throw(t))
                    } catch (t) {
                        o(t)
                    }
                }
                function u(t) {
                    var e;
                    t.done ? i(t.value) : ((e = t.value)instanceof r ? e : new r(function(t) {
                        t(e)
                    }
                    )).then(s, a)
                }
                u((n = n.apply(t, e || [])).next())
            }
            )
        };
        let s = new i.Yd("abstract-signer/5.7.0")
          , a = ["accessList", "ccipReadEnabled", "chainId", "customData", "data", "from", "gasLimit", "gasPrice", "maxFeePerGas", "maxPriorityFeePerGas", "nonce", "to", "type", "value"]
          , u = [i.Yd.errors.INSUFFICIENT_FUNDS, i.Yd.errors.NONCE_EXPIRED, i.Yd.errors.REPLACEMENT_UNDERPRICED];
        class l {
            constructor() {
                s.checkAbstract(new.target, l),
                (0,
                n.zG)(this, "_isSigner", !0)
            }
            getBalance(t) {
                return o(this, void 0, void 0, function*() {
                    return this._checkProvider("getBalance"),
                    yield this.provider.getBalance(this.getAddress(), t)
                })
            }
            getTransactionCount(t) {
                return o(this, void 0, void 0, function*() {
                    return this._checkProvider("getTransactionCount"),
                    yield this.provider.getTransactionCount(this.getAddress(), t)
                })
            }
            estimateGas(t) {
                return o(this, void 0, void 0, function*() {
                    this._checkProvider("estimateGas");
                    let e = yield(0,
                    n.mE)(this.checkTransaction(t));
                    return yield this.provider.estimateGas(e)
                })
            }
            call(t, e) {
                return o(this, void 0, void 0, function*() {
                    this._checkProvider("call");
                    let r = yield(0,
                    n.mE)(this.checkTransaction(t));
                    return yield this.provider.call(r, e)
                })
            }
            sendTransaction(t) {
                return o(this, void 0, void 0, function*() {
                    this._checkProvider("sendTransaction");
                    let e = yield this.populateTransaction(t)
                      , r = yield this.signTransaction(e);
                    return yield this.provider.sendTransaction(r)
                })
            }
            getChainId() {
                return o(this, void 0, void 0, function*() {
                    return this._checkProvider("getChainId"),
                    (yield this.provider.getNetwork()).chainId
                })
            }
            getGasPrice() {
                return o(this, void 0, void 0, function*() {
                    return this._checkProvider("getGasPrice"),
                    yield this.provider.getGasPrice()
                })
            }
            getFeeData() {
                return o(this, void 0, void 0, function*() {
                    return this._checkProvider("getFeeData"),
                    yield this.provider.getFeeData()
                })
            }
            resolveName(t) {
                return o(this, void 0, void 0, function*() {
                    return this._checkProvider("resolveName"),
                    yield this.provider.resolveName(t)
                })
            }
            checkTransaction(t) {
                for (let e in t)
                    -1 === a.indexOf(e) && s.throwArgumentError("invalid transaction key: " + e, "transaction", t);
                let e = (0,
                n.DC)(t);
                return null == e.from ? e.from = this.getAddress() : e.from = Promise.all([Promise.resolve(e.from), this.getAddress()]).then(e=>(e[0].toLowerCase() !== e[1].toLowerCase() && s.throwArgumentError("from address mismatch", "transaction", t),
                e[0])),
                e
            }
            populateTransaction(t) {
                return o(this, void 0, void 0, function*() {
                    let e = yield(0,
                    n.mE)(this.checkTransaction(t));
                    null != e.to && (e.to = Promise.resolve(e.to).then(t=>o(this, void 0, void 0, function*() {
                        if (null == t)
                            return null;
                        let e = yield this.resolveName(t);
                        return null == e && s.throwArgumentError("provided ENS name resolves to null", "tx.to", t),
                        e
                    })),
                    e.to.catch(t=>{}
                    ));
                    let r = null != e.maxFeePerGas || null != e.maxPriorityFeePerGas;
                    if (null != e.gasPrice && (2 === e.type || r) ? s.throwArgumentError("eip-1559 transaction do not support gasPrice", "transaction", t) : (0 === e.type || 1 === e.type) && r && s.throwArgumentError("pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas", "transaction", t),
                    (2 === e.type || null == e.type) && null != e.maxFeePerGas && null != e.maxPriorityFeePerGas)
                        e.type = 2;
                    else if (0 === e.type || 1 === e.type)
                        null == e.gasPrice && (e.gasPrice = this.getGasPrice());
                    else {
                        let t = yield this.getFeeData();
                        if (null == e.type) {
                            if (null != t.maxFeePerGas && null != t.maxPriorityFeePerGas) {
                                if (e.type = 2,
                                null != e.gasPrice) {
                                    let t = e.gasPrice;
                                    delete e.gasPrice,
                                    e.maxFeePerGas = t,
                                    e.maxPriorityFeePerGas = t
                                } else
                                    null == e.maxFeePerGas && (e.maxFeePerGas = t.maxFeePerGas),
                                    null == e.maxPriorityFeePerGas && (e.maxPriorityFeePerGas = t.maxPriorityFeePerGas)
                            } else
                                null != t.gasPrice ? (r && s.throwError("network does not support EIP-1559", i.Yd.errors.UNSUPPORTED_OPERATION, {
                                    operation: "populateTransaction"
                                }),
                                null == e.gasPrice && (e.gasPrice = t.gasPrice),
                                e.type = 0) : s.throwError("failed to get consistent fee data", i.Yd.errors.UNSUPPORTED_OPERATION, {
                                    operation: "signer.getFeeData"
                                })
                        } else
                            2 === e.type && (null == e.maxFeePerGas && (e.maxFeePerGas = t.maxFeePerGas),
                            null == e.maxPriorityFeePerGas && (e.maxPriorityFeePerGas = t.maxPriorityFeePerGas))
                    }
                    return null == e.nonce && (e.nonce = this.getTransactionCount("pending")),
                    null == e.gasLimit && (e.gasLimit = this.estimateGas(e).catch(t=>{
                        if (u.indexOf(t.code) >= 0)
                            throw t;
                        return s.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", i.Yd.errors.UNPREDICTABLE_GAS_LIMIT, {
                            error: t,
                            tx: e
                        })
                    }
                    )),
                    null == e.chainId ? e.chainId = this.getChainId() : e.chainId = Promise.all([Promise.resolve(e.chainId), this.getChainId()]).then(e=>(0 !== e[1] && e[0] !== e[1] && s.throwArgumentError("chainId address mismatch", "transaction", t),
                    e[0])),
                    yield(0,
                    n.mE)(e)
                })
            }
            _checkProvider(t) {
                this.provider || s.throwError("missing provider", i.Yd.errors.UNSUPPORTED_OPERATION, {
                    operation: t || "_checkProvider"
                })
            }
            static isSigner(t) {
                return !!(t && t._isSigner)
            }
        }
        class h extends l {
            constructor(t, e) {
                super(),
                (0,
                n.zG)(this, "address", t),
                (0,
                n.zG)(this, "provider", e || null)
            }
            getAddress() {
                return Promise.resolve(this.address)
            }
            _fail(t, e) {
                return Promise.resolve().then(()=>{
                    s.throwError(t, i.Yd.errors.UNSUPPORTED_OPERATION, {
                        operation: e
                    })
                }
                )
            }
            signMessage(t) {
                return this._fail("VoidSigner cannot sign messages", "signMessage")
            }
            signTransaction(t) {
                return this._fail("VoidSigner cannot sign transactions", "signTransaction")
            }
            _signTypedData(t, e, r) {
                return this._fail("VoidSigner cannot sign typed data", "signTypedData")
            }
            connect(t) {
                return new h(this.address,t)
            }
        }
    },
    89005: function(t, e, r) {
        "use strict";
        r.d(e, {
            Kn: function() {
                return f
            },
            CR: function() {
                return c
            }
        });
        var n = r(9784)
          , i = r(22594)
          , o = r(43481)
          , s = r(18162);
        let a = new (r(13421)).Yd("address/5.7.0");
        function u(t) {
            (0,
            n.A7)(t, 20) || a.throwArgumentError("invalid address", "address", t);
            let e = (t = t.toLowerCase()).substring(2).split("")
              , r = new Uint8Array(40);
            for (let t = 0; t < 40; t++)
                r[t] = e[t].charCodeAt(0);
            let i = (0,
            n.lE)((0,
            o.w)(r));
            for (let t = 0; t < 40; t += 2)
                i[t >> 1] >> 4 >= 8 && (e[t] = e[t].toUpperCase()),
                (15 & i[t >> 1]) >= 8 && (e[t + 1] = e[t + 1].toUpperCase());
            return "0x" + e.join("")
        }
        let l = {};
        for (let t = 0; t < 10; t++)
            l[String(t)] = String(t);
        for (let t = 0; t < 26; t++)
            l[String.fromCharCode(65 + t)] = String(10 + t);
        let h = Math.floor(Math.log10 ? Math.log10(9007199254740991) : Math.log(9007199254740991) / Math.LN10);
        function f(t) {
            let e = null;
            if ("string" != typeof t && a.throwArgumentError("invalid address", "address", t),
            t.match(/^(0x)?[0-9a-fA-F]{40}$/))
                "0x" !== t.substring(0, 2) && (t = "0x" + t),
                e = u(t),
                t.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && e !== t && a.throwArgumentError("bad address checksum", "address", t);
            else if (t.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
                for (t.substring(2, 4) !== function(t) {
                    let e = (t = (t = t.toUpperCase()).substring(4) + t.substring(0, 2) + "00").split("").map(t=>l[t]).join("");
                    for (; e.length >= h; ) {
                        let t = e.substring(0, h);
                        e = parseInt(t, 10) % 97 + e.substring(t.length)
                    }
                    let r = String(98 - parseInt(e, 10) % 97);
                    for (; r.length < 2; )
                        r = "0" + r;
                    return r
                }(t) && a.throwArgumentError("bad icap checksum", "address", t),
                e = (0,
                i.g$)(t.substring(4)); e.length < 40; )
                    e = "0" + e;
                e = u("0x" + e)
            } else
                a.throwArgumentError("invalid address", "address", t);
            return e
        }
        function c(t) {
            let e = null;
            try {
                e = f(t.from)
            } catch (e) {
                a.throwArgumentError("missing from address", "transaction", t)
            }
            let r = (0,
            n.G1)((0,
            n.lE)(i.O$.from(t.nonce).toHexString()));
            return f((0,
            n.p3)((0,
            o.w)((0,
            s.c)([e, r])), 12))
        }
    },
    38418: function(t, e, r) {
        "use strict";
        r.d(e, {
            i: function() {
                return n
            }
        });
        let n = "bignumber/5.7.0"
    },
    22594: function(t, e, r) {
        "use strict";
        r.d(e, {
            O$: function() {
                return d
            },
            Zm: function() {
                return f
            },
            g$: function() {
                return y
            }
        });
        var n = r(58171)
          , i = r.n(n)
          , o = r(9784)
          , s = r(13421)
          , a = r(38418)
          , u = i().BN;
        let l = new s.Yd(a.i)
          , h = {};
        function f(t) {
            return null != t && (d.isBigNumber(t) || "number" == typeof t && t % 1 == 0 || "string" == typeof t && !!t.match(/^-?[0-9]+$/) || (0,
            o.A7)(t) || "bigint" == typeof t || (0,
            o._t)(t))
        }
        let c = !1;
        class d {
            constructor(t, e) {
                t !== h && l.throwError("cannot call constructor directly; use BigNumber.from", s.Yd.errors.UNSUPPORTED_OPERATION, {
                    operation: "new (BigNumber)"
                }),
                this._hex = e,
                this._isBigNumber = !0,
                Object.freeze(this)
            }
            fromTwos(t) {
                return m(g(this).fromTwos(t))
            }
            toTwos(t) {
                return m(g(this).toTwos(t))
            }
            abs() {
                return "-" === this._hex[0] ? d.from(this._hex.substring(1)) : this
            }
            add(t) {
                return m(g(this).add(g(t)))
            }
            sub(t) {
                return m(g(this).sub(g(t)))
            }
            div(t) {
                return d.from(t).isZero() && v("division-by-zero", "div"),
                m(g(this).div(g(t)))
            }
            mul(t) {
                return m(g(this).mul(g(t)))
            }
            mod(t) {
                let e = g(t);
                return e.isNeg() && v("division-by-zero", "mod"),
                m(g(this).umod(e))
            }
            pow(t) {
                let e = g(t);
                return e.isNeg() && v("negative-power", "pow"),
                m(g(this).pow(e))
            }
            and(t) {
                let e = g(t);
                return (this.isNegative() || e.isNeg()) && v("unbound-bitwise-result", "and"),
                m(g(this).and(e))
            }
            or(t) {
                let e = g(t);
                return (this.isNegative() || e.isNeg()) && v("unbound-bitwise-result", "or"),
                m(g(this).or(e))
            }
            xor(t) {
                let e = g(t);
                return (this.isNegative() || e.isNeg()) && v("unbound-bitwise-result", "xor"),
                m(g(this).xor(e))
            }
            mask(t) {
                return (this.isNegative() || t < 0) && v("negative-width", "mask"),
                m(g(this).maskn(t))
            }
            shl(t) {
                return (this.isNegative() || t < 0) && v("negative-width", "shl"),
                m(g(this).shln(t))
            }
            shr(t) {
                return (this.isNegative() || t < 0) && v("negative-width", "shr"),
                m(g(this).shrn(t))
            }
            eq(t) {
                return g(this).eq(g(t))
            }
            lt(t) {
                return g(this).lt(g(t))
            }
            lte(t) {
                return g(this).lte(g(t))
            }
            gt(t) {
                return g(this).gt(g(t))
            }
            gte(t) {
                return g(this).gte(g(t))
            }
            isNegative() {
                return "-" === this._hex[0]
            }
            isZero() {
                return g(this).isZero()
            }
            toNumber() {
                try {
                    return g(this).toNumber()
                } catch (t) {
                    v("overflow", "toNumber", this.toString())
                }
                return null
            }
            toBigInt() {
                try {
                    return BigInt(this.toString())
                } catch (t) {}
                return l.throwError("this platform does not support BigInt", s.Yd.errors.UNSUPPORTED_OPERATION, {
                    value: this.toString()
                })
            }
            toString() {
                return arguments.length > 0 && (10 === arguments[0] ? c || (c = !0,
                l.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")) : 16 === arguments[0] ? l.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()", s.Yd.errors.UNEXPECTED_ARGUMENT, {}) : l.throwError("BigNumber.toString does not accept parameters", s.Yd.errors.UNEXPECTED_ARGUMENT, {})),
                g(this).toString(10)
            }
            toHexString() {
                return this._hex
            }
            toJSON(t) {
                return {
                    type: "BigNumber",
                    hex: this.toHexString()
                }
            }
            static from(t) {
                if (t instanceof d)
                    return t;
                if ("string" == typeof t)
                    return t.match(/^-?0x[0-9a-f]+$/i) ? new d(h,p(t)) : t.match(/^-?[0-9]+$/) ? new d(h,p(new u(t))) : l.throwArgumentError("invalid BigNumber string", "value", t);
                if ("number" == typeof t)
                    return t % 1 && v("underflow", "BigNumber.from", t),
                    (t >= 9007199254740991 || t <= -9007199254740991) && v("overflow", "BigNumber.from", t),
                    d.from(String(t));
                if ("bigint" == typeof t)
                    return d.from(t.toString());
                if ((0,
                o._t)(t))
                    return d.from((0,
                    o.Dv)(t));
                if (t) {
                    if (t.toHexString) {
                        let e = t.toHexString();
                        if ("string" == typeof e)
                            return d.from(e)
                    } else {
                        let e = t._hex;
                        if (null == e && "BigNumber" === t.type && (e = t.hex),
                        "string" == typeof e && ((0,
                        o.A7)(e) || "-" === e[0] && (0,
                        o.A7)(e.substring(1))))
                            return d.from(e)
                    }
                }
                return l.throwArgumentError("invalid BigNumber value", "value", t)
            }
            static isBigNumber(t) {
                return !!(t && t._isBigNumber)
            }
        }
        function p(t) {
            if ("string" != typeof t)
                return p(t.toString(16));
            if ("-" === t[0])
                return ("-" === (t = t.substring(1))[0] && l.throwArgumentError("invalid hex", "value", t),
                "0x00" === (t = p(t))) ? t : "-" + t;
            if ("0x" !== t.substring(0, 2) && (t = "0x" + t),
            "0x" === t)
                return "0x00";
            for (t.length % 2 && (t = "0x0" + t.substring(2)); t.length > 4 && "0x00" === t.substring(0, 4); )
                t = "0x" + t.substring(4);
            return t
        }
        function m(t) {
            return d.from(p(t))
        }
        function g(t) {
            let e = d.from(t).toHexString();
            return "-" === e[0] ? new u("-" + e.substring(3),16) : new u(e.substring(2),16)
        }
        function v(t, e, r) {
            let n = {
                fault: t,
                operation: e
            };
            return null != r && (n.value = r),
            l.throwError(t, s.Yd.errors.NUMERIC_FAULT, n)
        }
        function y(t) {
            return new u(t,36).toString(16)
        }
    },
    9784: function(t, e, r) {
        "use strict";
        r.d(e, {
            lE: function() {
                return l
            },
            zo: function() {
                return h
            },
            xs: function() {
                return v
            },
            E1: function() {
                return m
            },
            p3: function() {
                return g
            },
            $P: function() {
                return y
            },
            $m: function() {
                return b
            },
            Dv: function() {
                return p
            },
            _t: function() {
                return u
            },
            Zq: function() {
                return s
            },
            A7: function() {
                return c
            },
            N: function() {
                return A
            },
            G1: function() {
                return f
            }
        });
        let n = new (r(13421)).Yd("bytes/5.7.0");
        function i(t) {
            return !!t.toHexString
        }
        function o(t) {
            return t.slice || (t.slice = function() {
                let e = Array.prototype.slice.call(arguments);
                return o(new Uint8Array(Array.prototype.slice.apply(t, e)))
            }
            ),
            t
        }
        function s(t) {
            return c(t) && !(t.length % 2) || u(t)
        }
        function a(t) {
            return "number" == typeof t && t == t && t % 1 == 0
        }
        function u(t) {
            if (null == t)
                return !1;
            if (t.constructor === Uint8Array)
                return !0;
            if ("string" == typeof t || !a(t.length) || t.length < 0)
                return !1;
            for (let e = 0; e < t.length; e++) {
                let r = t[e];
                if (!a(r) || r < 0 || r >= 256)
                    return !1
            }
            return !0
        }
        function l(t, e) {
            if (e || (e = {}),
            "number" == typeof t) {
                n.checkSafeUint53(t, "invalid arrayify value");
                let e = [];
                for (; t; )
                    e.unshift(255 & t),
                    t = parseInt(String(t / 256));
                return 0 === e.length && e.push(0),
                o(new Uint8Array(e))
            }
            if (e.allowMissingPrefix && "string" == typeof t && "0x" !== t.substring(0, 2) && (t = "0x" + t),
            i(t) && (t = t.toHexString()),
            c(t)) {
                let r = t.substring(2);
                r.length % 2 && ("left" === e.hexPad ? r = "0" + r : "right" === e.hexPad ? r += "0" : n.throwArgumentError("hex data is odd-length", "value", t));
                let i = [];
                for (let t = 0; t < r.length; t += 2)
                    i.push(parseInt(r.substring(t, t + 2), 16));
                return o(new Uint8Array(i))
            }
            return u(t) ? o(new Uint8Array(t)) : n.throwArgumentError("invalid arrayify value", "value", t)
        }
        function h(t) {
            let e = t.map(t=>l(t))
              , r = new Uint8Array(e.reduce((t,e)=>t + e.length, 0));
            return e.reduce((t,e)=>(r.set(e, t),
            t + e.length), 0),
            o(r)
        }
        function f(t) {
            let e = l(t);
            if (0 === e.length)
                return e;
            let r = 0;
            for (; r < e.length && 0 === e[r]; )
                r++;
            return r && (e = e.slice(r)),
            e
        }
        function c(t, e) {
            return "string" == typeof t && !!t.match(/^0x[0-9A-Fa-f]*$/) && (!e || t.length === 2 + 2 * e)
        }
        let d = "0123456789abcdef";
        function p(t, e) {
            if (e || (e = {}),
            "number" == typeof t) {
                n.checkSafeUint53(t, "invalid hexlify value");
                let e = "";
                for (; t; )
                    e = d[15 & t] + e,
                    t = Math.floor(t / 16);
                return e.length ? (e.length % 2 && (e = "0" + e),
                "0x" + e) : "0x00"
            }
            if ("bigint" == typeof t)
                return (t = t.toString(16)).length % 2 ? "0x0" + t : "0x" + t;
            if (e.allowMissingPrefix && "string" == typeof t && "0x" !== t.substring(0, 2) && (t = "0x" + t),
            i(t))
                return t.toHexString();
            if (c(t))
                return t.length % 2 && ("left" === e.hexPad ? t = "0x0" + t.substring(2) : "right" === e.hexPad ? t += "0" : n.throwArgumentError("hex data is odd-length", "value", t)),
                t.toLowerCase();
            if (u(t)) {
                let e = "0x";
                for (let r = 0; r < t.length; r++) {
                    let n = t[r];
                    e += d[(240 & n) >> 4] + d[15 & n]
                }
                return e
            }
            return n.throwArgumentError("invalid hexlify value", "value", t)
        }
        function m(t) {
            if ("string" != typeof t)
                t = p(t);
            else if (!c(t) || t.length % 2)
                return null;
            return (t.length - 2) / 2
        }
        function g(t, e, r) {
            return ("string" != typeof t ? t = p(t) : (!c(t) || t.length % 2) && n.throwArgumentError("invalid hexData", "value", t),
            e = 2 + 2 * e,
            null != r) ? "0x" + t.substring(e, 2 + 2 * r) : "0x" + t.substring(e)
        }
        function v(t) {
            let e = "0x";
            return t.forEach(t=>{
                e += p(t).substring(2)
            }
            ),
            e
        }
        function y(t) {
            let e = function(t) {
                "string" != typeof t && (t = p(t)),
                c(t) || n.throwArgumentError("invalid hex string", "value", t),
                t = t.substring(2);
                let e = 0;
                for (; e < t.length && "0" === t[e]; )
                    e++;
                return "0x" + t.substring(e)
            }(p(t, {
                hexPad: "left"
            }));
            return "0x" === e ? "0x0" : e
        }
        function b(t, e) {
            for ("string" != typeof t ? t = p(t) : c(t) || n.throwArgumentError("invalid hex string", "value", t),
            t.length > 2 * e + 2 && n.throwArgumentError("value out of range", "value", arguments[1]); t.length < 2 * e + 2; )
                t = "0x0" + t.substring(2);
            return t
        }
        function A(t) {
            let e = {
                r: "0x",
                s: "0x",
                _vs: "0x",
                recoveryParam: 0,
                v: 0,
                yParityAndS: "0x",
                compact: "0x"
            };
            if (s(t)) {
                let r = l(t);
                64 === r.length ? (e.v = 27 + (r[32] >> 7),
                r[32] &= 127,
                e.r = p(r.slice(0, 32)),
                e.s = p(r.slice(32, 64))) : 65 === r.length ? (e.r = p(r.slice(0, 32)),
                e.s = p(r.slice(32, 64)),
                e.v = r[64]) : n.throwArgumentError("invalid signature string", "signature", t),
                e.v < 27 && (0 === e.v || 1 === e.v ? e.v += 27 : n.throwArgumentError("signature invalid v byte", "signature", t)),
                e.recoveryParam = 1 - e.v % 2,
                e.recoveryParam && (r[32] |= 128),
                e._vs = p(r.slice(32, 64))
            } else {
                if (e.r = t.r,
                e.s = t.s,
                e.v = t.v,
                e.recoveryParam = t.recoveryParam,
                e._vs = t._vs,
                null != e._vs) {
                    let r = function(t, e) {
                        (t = l(t)).length > e && n.throwArgumentError("value out of range", "value", arguments[0]);
                        let r = new Uint8Array(e);
                        return r.set(t, e - t.length),
                        o(r)
                    }(l(e._vs), 32);
                    e._vs = p(r);
                    let i = r[0] >= 128 ? 1 : 0;
                    null == e.recoveryParam ? e.recoveryParam = i : e.recoveryParam !== i && n.throwArgumentError("signature recoveryParam mismatch _vs", "signature", t),
                    r[0] &= 127;
                    let s = p(r);
                    null == e.s ? e.s = s : e.s !== s && n.throwArgumentError("signature v mismatch _vs", "signature", t)
                }
                if (null == e.recoveryParam)
                    null == e.v ? n.throwArgumentError("signature missing v and recoveryParam", "signature", t) : 0 === e.v || 1 === e.v ? e.recoveryParam = e.v : e.recoveryParam = 1 - e.v % 2;
                else if (null == e.v)
                    e.v = 27 + e.recoveryParam;
                else {
                    let r = 0 === e.v || 1 === e.v ? e.v : 1 - e.v % 2;
                    e.recoveryParam !== r && n.throwArgumentError("signature recoveryParam mismatch v", "signature", t)
                }
                null != e.r && c(e.r) ? e.r = b(e.r, 32) : n.throwArgumentError("signature missing or invalid r", "signature", t),
                null != e.s && c(e.s) ? e.s = b(e.s, 32) : n.throwArgumentError("signature missing or invalid s", "signature", t);
                let r = l(e.s);
                r[0] >= 128 && n.throwArgumentError("signature s out of range", "signature", t),
                e.recoveryParam && (r[0] |= 128);
                let i = p(r);
                e._vs && (c(e._vs) || n.throwArgumentError("signature invalid _vs", "signature", t),
                e._vs = b(e._vs, 32)),
                null == e._vs ? e._vs = i : e._vs !== i && n.throwArgumentError("signature _vs mismatch v and s", "signature", t)
            }
            return e.yParityAndS = e._vs,
            e.compact = e.r + e.yParityAndS.substring(2),
            e
        }
    },
    75986: function(t, e, r) {
        "use strict";
        r.d(e, {
            Bz: function() {
                return a
            },
            _Y: function() {
                return o
            },
            fh: function() {
                return s
            },
            tL: function() {
                return i
            }
        });
        var n = r(22594);
        let i = n.O$.from(-1)
          , o = n.O$.from(0)
          , s = n.O$.from(1)
          , a = n.O$.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff")
    },
    99554: function(t, e, r) {
        "use strict";
        r.d(e, {
            id: function() {
                return o
            }
        });
        var n = r(43481)
          , i = r(28257);
        function o(t) {
            return (0,
            n.w)((0,
            i.Y0)(t))
        }
    },
    43481: function(t, e, r) {
        "use strict";
        r.d(e, {
            w: function() {
                return s
            }
        });
        var n = r(83524)
          , i = r.n(n)
          , o = r(9784);
        function s(t) {
            return "0x" + i().keccak_256((0,
            o.lE)(t))
        }
    },
    13421: function(t, e, r) {
        "use strict";
        var n, i, o, s;
        r.d(e, {
            Yd: function() {
                return p
            }
        });
        let a = !1
          , u = !1
          , l = {
            debug: 1,
            default: 2,
            info: 2,
            warning: 3,
            error: 4,
            off: 5
        }
          , h = l.default
          , f = null
          , c = function() {
            try {
                let t = [];
                if (["NFD", "NFC", "NFKD", "NFKC"].forEach(e=>{
                    try {
                        if ("test" !== "test".normalize(e))
                            throw Error("bad normalize")
                    } catch (r) {
                        t.push(e)
                    }
                }
                ),
                t.length)
                    throw Error("missing " + t.join(", "));
                if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769))
                    throw Error("broken implementation")
            } catch (t) {
                return t.message
            }
            return null
        }();
        (o = n || (n = {})).DEBUG = "DEBUG",
        o.INFO = "INFO",
        o.WARNING = "WARNING",
        o.ERROR = "ERROR",
        o.OFF = "OFF",
        (s = i || (i = {})).UNKNOWN_ERROR = "UNKNOWN_ERROR",
        s.NOT_IMPLEMENTED = "NOT_IMPLEMENTED",
        s.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION",
        s.NETWORK_ERROR = "NETWORK_ERROR",
        s.SERVER_ERROR = "SERVER_ERROR",
        s.TIMEOUT = "TIMEOUT",
        s.BUFFER_OVERRUN = "BUFFER_OVERRUN",
        s.NUMERIC_FAULT = "NUMERIC_FAULT",
        s.MISSING_NEW = "MISSING_NEW",
        s.INVALID_ARGUMENT = "INVALID_ARGUMENT",
        s.MISSING_ARGUMENT = "MISSING_ARGUMENT",
        s.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT",
        s.CALL_EXCEPTION = "CALL_EXCEPTION",
        s.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS",
        s.NONCE_EXPIRED = "NONCE_EXPIRED",
        s.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED",
        s.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT",
        s.TRANSACTION_REPLACED = "TRANSACTION_REPLACED",
        s.ACTION_REJECTED = "ACTION_REJECTED";
        let d = "0123456789abcdef";
        class p {
            constructor(t) {
                Object.defineProperty(this, "version", {
                    enumerable: !0,
                    value: t,
                    writable: !1
                })
            }
            _log(t, e) {
                let r = t.toLowerCase();
                null == l[r] && this.throwArgumentError("invalid log level name", "logLevel", t),
                h > l[r] || console.log.apply(console, e)
            }
            debug(...t) {
                this._log(p.levels.DEBUG, t)
            }
            info(...t) {
                this._log(p.levels.INFO, t)
            }
            warn(...t) {
                this._log(p.levels.WARNING, t)
            }
            makeError(t, e, r) {
                if (u)
                    return this.makeError("censored error", e, {});
                e || (e = p.errors.UNKNOWN_ERROR),
                r || (r = {});
                let n = [];
                Object.keys(r).forEach(t=>{
                    let e = r[t];
                    try {
                        if (e instanceof Uint8Array) {
                            let r = "";
                            for (let t = 0; t < e.length; t++)
                                r += d[e[t] >> 4] + d[15 & e[t]];
                            n.push(t + "=Uint8Array(0x" + r + ")")
                        } else
                            n.push(t + "=" + JSON.stringify(e))
                    } catch (e) {
                        n.push(t + "=" + JSON.stringify(r[t].toString()))
                    }
                }
                ),
                n.push(`code=${e}`),
                n.push(`version=${this.version}`);
                let o = t
                  , s = "";
                switch (e) {
                case i.NUMERIC_FAULT:
                    {
                        s = "NUMERIC_FAULT";
                        let e = t;
                        switch (e) {
                        case "overflow":
                        case "underflow":
                        case "division-by-zero":
                            s += "-" + e;
                            break;
                        case "negative-power":
                        case "negative-width":
                            s += "-unsupported";
                            break;
                        case "unbound-bitwise-result":
                            s += "-unbound-result"
                        }
                        break
                    }
                case i.CALL_EXCEPTION:
                case i.INSUFFICIENT_FUNDS:
                case i.MISSING_NEW:
                case i.NONCE_EXPIRED:
                case i.REPLACEMENT_UNDERPRICED:
                case i.TRANSACTION_REPLACED:
                case i.UNPREDICTABLE_GAS_LIMIT:
                    s = e
                }
                s && (t += " [ See: https://links.ethers.org/v5-errors-" + s + " ]"),
                n.length && (t += " (" + n.join(", ") + ")");
                let a = Error(t);
                return a.reason = o,
                a.code = e,
                Object.keys(r).forEach(function(t) {
                    a[t] = r[t]
                }),
                a
            }
            throwError(t, e, r) {
                throw this.makeError(t, e, r)
            }
            throwArgumentError(t, e, r) {
                return this.throwError(t, p.errors.INVALID_ARGUMENT, {
                    argument: e,
                    value: r
                })
            }
            assert(t, e, r, n) {
                t || this.throwError(e, r, n)
            }
            assertArgument(t, e, r, n) {
                t || this.throwArgumentError(e, r, n)
            }
            checkNormalize(t) {
                null == t && (t = "platform missing String.prototype.normalize"),
                c && this.throwError("platform missing String.prototype.normalize", p.errors.UNSUPPORTED_OPERATION, {
                    operation: "String.prototype.normalize",
                    form: c
                })
            }
            checkSafeUint53(t, e) {
                "number" == typeof t && (null == e && (e = "value not safe"),
                (t < 0 || t >= 9007199254740991) && this.throwError(e, p.errors.NUMERIC_FAULT, {
                    operation: "checkSafeInteger",
                    fault: "out-of-safe-range",
                    value: t
                }),
                t % 1 && this.throwError(e, p.errors.NUMERIC_FAULT, {
                    operation: "checkSafeInteger",
                    fault: "non-integer",
                    value: t
                }))
            }
            checkArgumentCount(t, e, r) {
                r = r ? ": " + r : "",
                t < e && this.throwError("missing argument" + r, p.errors.MISSING_ARGUMENT, {
                    count: t,
                    expectedCount: e
                }),
                t > e && this.throwError("too many arguments" + r, p.errors.UNEXPECTED_ARGUMENT, {
                    count: t,
                    expectedCount: e
                })
            }
            checkNew(t, e) {
                (t === Object || null == t) && this.throwError("missing new", p.errors.MISSING_NEW, {
                    name: e.name
                })
            }
            checkAbstract(t, e) {
                t === e ? this.throwError("cannot instantiate abstract class " + JSON.stringify(e.name) + " directly; use a sub-class", p.errors.UNSUPPORTED_OPERATION, {
                    name: t.name,
                    operation: "new"
                }) : (t === Object || null == t) && this.throwError("missing new", p.errors.MISSING_NEW, {
                    name: e.name
                })
            }
            static globalLogger() {
                return f || (f = new p("logger/5.7.0")),
                f
            }
            static setCensorship(t, e) {
                if (!t && e && this.globalLogger().throwError("cannot permanently disable censorship", p.errors.UNSUPPORTED_OPERATION, {
                    operation: "setCensorship"
                }),
                a) {
                    if (!t)
                        return;
                    this.globalLogger().throwError("error censorship permanent", p.errors.UNSUPPORTED_OPERATION, {
                        operation: "setCensorship"
                    })
                }
                u = !!t,
                a = !!e
            }
            static setLogLevel(t) {
                let e = l[t.toLowerCase()];
                if (null == e) {
                    p.globalLogger().warn("invalid log level - " + t);
                    return
                }
                h = e
            }
            static from(t) {
                return new p(t)
            }
        }
        p.errors = i,
        p.levels = n
    },
    36173: function(t, e, r) {
        "use strict";
        r.d(e, {
            dk: function() {
                return f
            },
            uj: function() {
                return a
            },
            p$: function() {
                return h
            },
            zG: function() {
                return i
            },
            tu: function() {
                return o
            },
            mE: function() {
                return s
            },
            DC: function() {
                return u
            }
        });
        let n = new (r(13421)).Yd("properties/5.7.0");
        function i(t, e, r) {
            Object.defineProperty(t, e, {
                enumerable: !0,
                value: r,
                writable: !1
            })
        }
        function o(t, e) {
            for (let r = 0; r < 32; r++) {
                if (t[e])
                    return t[e];
                if (!t.prototype || "object" != typeof t.prototype)
                    break;
                t = Object.getPrototypeOf(t.prototype).constructor
            }
            return null
        }
        function s(t) {
            var e, r, n, i;
            return e = this,
            r = void 0,
            n = void 0,
            i = function*() {
                let e = Object.keys(t).map(e=>Promise.resolve(t[e]).then(t=>({
                    key: e,
                    value: t
                })));
                return (yield Promise.all(e)).reduce((t,e)=>(t[e.key] = e.value,
                t), {})
            }
            ,
            new (n || (n = Promise))(function(t, o) {
                function s(t) {
                    try {
                        u(i.next(t))
                    } catch (t) {
                        o(t)
                    }
                }
                function a(t) {
                    try {
                        u(i.throw(t))
                    } catch (t) {
                        o(t)
                    }
                }
                function u(e) {
                    var r;
                    e.done ? t(e.value) : ((r = e.value)instanceof n ? r : new n(function(t) {
                        t(r)
                    }
                    )).then(s, a)
                }
                u((i = i.apply(e, r || [])).next())
            }
            )
        }
        function a(t, e) {
            t && "object" == typeof t || n.throwArgumentError("invalid object", "object", t),
            Object.keys(t).forEach(r=>{
                e[r] || n.throwArgumentError("invalid object key - " + r, "transaction:" + r, t)
            }
            )
        }
        function u(t) {
            let e = {};
            for (let r in t)
                e[r] = t[r];
            return e
        }
        let l = {
            bigint: !0,
            boolean: !0,
            function: !0,
            number: !0,
            string: !0
        };
        function h(t) {
            return function(t) {
                if (function t(e) {
                    if (null == e || l[typeof e])
                        return !0;
                    if (Array.isArray(e) || "object" == typeof e) {
                        if (!Object.isFrozen(e))
                            return !1;
                        let r = Object.keys(e);
                        for (let n = 0; n < r.length; n++) {
                            let i = null;
                            try {
                                i = e[r[n]]
                            } catch (t) {
                                continue
                            }
                            if (!t(i))
                                return !1
                        }
                        return !0
                    }
                    return n.throwArgumentError(`Cannot deepCopy ${typeof e}`, "object", e)
                }(t))
                    return t;
                if (Array.isArray(t))
                    return Object.freeze(t.map(t=>h(t)));
                if ("object" == typeof t) {
                    let e = {};
                    for (let r in t) {
                        let n = t[r];
                        void 0 !== n && i(e, r, h(n))
                    }
                    return e
                }
                return n.throwArgumentError(`Cannot deepCopy ${typeof t}`, "object", t)
            }(t)
        }
        class f {
            constructor(t) {
                for (let e in t)
                    this[e] = h(t[e])
            }
        }
    },
    86365: function(t, e, r) {
        "use strict";
        r.d(e, {
            i: function() {
                return n
            }
        });
        let n = "providers/5.7.2"
    },
    86160: function(t, e, r) {
        "use strict";
        r.d(e, {
            Mb: function() {
                return f
            },
            vh: function() {
                return d
            }
        });
        var n = r(89005)
          , i = r(22594)
          , o = r(9784)
          , s = r(36173)
          , a = r(2149)
          , u = r(13421)
          , l = r(86365);
        let h = new u.Yd(l.i);
        class f {
            constructor() {
                this.formats = this.getDefaultFormats()
            }
            getDefaultFormats() {
                let t = {}
                  , e = this.address.bind(this)
                  , r = this.bigNumber.bind(this)
                  , n = this.blockTag.bind(this)
                  , i = this.data.bind(this)
                  , o = this.hash.bind(this)
                  , a = this.hex.bind(this)
                  , u = this.number.bind(this)
                  , l = this.type.bind(this);
                return t.transaction = {
                    hash: o,
                    type: l,
                    accessList: f.allowNull(this.accessList.bind(this), null),
                    blockHash: f.allowNull(o, null),
                    blockNumber: f.allowNull(u, null),
                    transactionIndex: f.allowNull(u, null),
                    confirmations: f.allowNull(u, null),
                    from: e,
                    gasPrice: f.allowNull(r),
                    maxPriorityFeePerGas: f.allowNull(r),
                    maxFeePerGas: f.allowNull(r),
                    gasLimit: r,
                    to: f.allowNull(e, null),
                    value: r,
                    nonce: u,
                    data: i,
                    r: f.allowNull(this.uint256),
                    s: f.allowNull(this.uint256),
                    v: f.allowNull(u),
                    creates: f.allowNull(e, null),
                    raw: f.allowNull(i)
                },
                t.transactionRequest = {
                    from: f.allowNull(e),
                    nonce: f.allowNull(u),
                    gasLimit: f.allowNull(r),
                    gasPrice: f.allowNull(r),
                    maxPriorityFeePerGas: f.allowNull(r),
                    maxFeePerGas: f.allowNull(r),
                    to: f.allowNull(e),
                    value: f.allowNull(r),
                    data: f.allowNull(t=>this.data(t, !0)),
                    type: f.allowNull(u),
                    accessList: f.allowNull(this.accessList.bind(this), null)
                },
                t.receiptLog = {
                    transactionIndex: u,
                    blockNumber: u,
                    transactionHash: o,
                    address: e,
                    topics: f.arrayOf(o),
                    data: i,
                    logIndex: u,
                    blockHash: o
                },
                t.receipt = {
                    to: f.allowNull(this.address, null),
                    from: f.allowNull(this.address, null),
                    contractAddress: f.allowNull(e, null),
                    transactionIndex: u,
                    root: f.allowNull(a),
                    gasUsed: r,
                    logsBloom: f.allowNull(i),
                    blockHash: o,
                    transactionHash: o,
                    logs: f.arrayOf(this.receiptLog.bind(this)),
                    blockNumber: u,
                    confirmations: f.allowNull(u, null),
                    cumulativeGasUsed: r,
                    effectiveGasPrice: f.allowNull(r),
                    status: f.allowNull(u),
                    type: l
                },
                t.block = {
                    hash: f.allowNull(o),
                    parentHash: o,
                    number: u,
                    timestamp: u,
                    nonce: f.allowNull(a),
                    difficulty: this.difficulty.bind(this),
                    gasLimit: r,
                    gasUsed: r,
                    miner: f.allowNull(e),
                    extraData: i,
                    transactions: f.allowNull(f.arrayOf(o)),
                    baseFeePerGas: f.allowNull(r)
                },
                t.blockWithTransactions = (0,
                s.DC)(t.block),
                t.blockWithTransactions.transactions = f.allowNull(f.arrayOf(this.transactionResponse.bind(this))),
                t.filter = {
                    fromBlock: f.allowNull(n, void 0),
                    toBlock: f.allowNull(n, void 0),
                    blockHash: f.allowNull(o, void 0),
                    address: f.allowNull(e, void 0),
                    topics: f.allowNull(this.topics.bind(this), void 0)
                },
                t.filterLog = {
                    blockNumber: f.allowNull(u),
                    blockHash: f.allowNull(o),
                    transactionIndex: u,
                    removed: f.allowNull(this.boolean.bind(this)),
                    address: e,
                    data: f.allowFalsish(i, "0x"),
                    topics: f.arrayOf(o),
                    transactionHash: o,
                    logIndex: u
                },
                t
            }
            accessList(t) {
                return (0,
                a.z7)(t || [])
            }
            number(t) {
                return "0x" === t ? 0 : i.O$.from(t).toNumber()
            }
            type(t) {
                return "0x" === t || null == t ? 0 : i.O$.from(t).toNumber()
            }
            bigNumber(t) {
                return i.O$.from(t)
            }
            boolean(t) {
                if ("boolean" == typeof t)
                    return t;
                if ("string" == typeof t) {
                    if ("true" === (t = t.toLowerCase()))
                        return !0;
                    if ("false" === t)
                        return !1
                }
                throw Error("invalid boolean - " + t)
            }
            hex(t, e) {
                return "string" == typeof t && (e || "0x" === t.substring(0, 2) || (t = "0x" + t),
                (0,
                o.A7)(t)) ? t.toLowerCase() : h.throwArgumentError("invalid hash", "value", t)
            }
            data(t, e) {
                let r = this.hex(t, e);
                if (r.length % 2 != 0)
                    throw Error("invalid data; odd-length - " + t);
                return r
            }
            address(t) {
                return (0,
                n.Kn)(t)
            }
            callAddress(t) {
                if (!(0,
                o.A7)(t, 32))
                    return null;
                let e = (0,
                n.Kn)((0,
                o.p3)(t, 12));
                return "0x0000000000000000000000000000000000000000" === e ? null : e
            }
            contractAddress(t) {
                return (0,
                n.CR)(t)
            }
            blockTag(t) {
                if (null == t)
                    return "latest";
                if ("earliest" === t)
                    return "0x0";
                switch (t) {
                case "earliest":
                    return "0x0";
                case "latest":
                case "pending":
                case "safe":
                case "finalized":
                    return t
                }
                if ("number" == typeof t || (0,
                o.A7)(t))
                    return (0,
                    o.$P)(t);
                throw Error("invalid blockTag")
            }
            hash(t, e) {
                let r = this.hex(t, e);
                return 32 !== (0,
                o.E1)(r) ? h.throwArgumentError("invalid hash", "value", t) : r
            }
            difficulty(t) {
                if (null == t)
                    return null;
                let e = i.O$.from(t);
                try {
                    return e.toNumber()
                } catch (t) {}
                return null
            }
            uint256(t) {
                if (!(0,
                o.A7)(t))
                    throw Error("invalid uint256");
                return (0,
                o.$m)(t, 32)
            }
            _block(t, e) {
                null != t.author && null == t.miner && (t.miner = t.author);
                let r = null != t._difficulty ? t._difficulty : t.difficulty
                  , n = f.check(e, t);
                return n._difficulty = null == r ? null : i.O$.from(r),
                n
            }
            block(t) {
                return this._block(t, this.formats.block)
            }
            blockWithTransactions(t) {
                return this._block(t, this.formats.blockWithTransactions)
            }
            transactionRequest(t) {
                return f.check(this.formats.transactionRequest, t)
            }
            transactionResponse(t) {
                null != t.gas && null == t.gasLimit && (t.gasLimit = t.gas),
                t.to && i.O$.from(t.to).isZero() && (t.to = "0x0000000000000000000000000000000000000000"),
                null != t.input && null == t.data && (t.data = t.input),
                null == t.to && null == t.creates && (t.creates = this.contractAddress(t)),
                (1 === t.type || 2 === t.type) && null == t.accessList && (t.accessList = []);
                let e = f.check(this.formats.transaction, t);
                if (null != t.chainId) {
                    let r = t.chainId;
                    (0,
                    o.A7)(r) && (r = i.O$.from(r).toNumber()),
                    e.chainId = r
                } else {
                    let r = t.networkId;
                    null == r && null == e.v && (r = t.chainId),
                    (0,
                    o.A7)(r) && (r = i.O$.from(r).toNumber()),
                    "number" != typeof r && null != e.v && ((r = (e.v - 35) / 2) < 0 && (r = 0),
                    r = parseInt(r)),
                    "number" != typeof r && (r = 0),
                    e.chainId = r
                }
                return e.blockHash && "x" === e.blockHash.replace(/0/g, "") && (e.blockHash = null),
                e
            }
            transaction(t) {
                return (0,
                a.Qc)(t)
            }
            receiptLog(t) {
                return f.check(this.formats.receiptLog, t)
            }
            receipt(t) {
                let e = f.check(this.formats.receipt, t);
                if (null != e.root) {
                    if (e.root.length <= 4) {
                        let t = i.O$.from(e.root).toNumber();
                        0 === t || 1 === t ? (null != e.status && e.status !== t && h.throwArgumentError("alt-root-status/status mismatch", "value", {
                            root: e.root,
                            status: e.status
                        }),
                        e.status = t,
                        delete e.root) : h.throwArgumentError("invalid alt-root-status", "value.root", e.root)
                    } else
                        66 !== e.root.length && h.throwArgumentError("invalid root hash", "value.root", e.root)
                }
                return null != e.status && (e.byzantium = !0),
                e
            }
            topics(t) {
                return Array.isArray(t) ? t.map(t=>this.topics(t)) : null != t ? this.hash(t, !0) : null
            }
            filter(t) {
                return f.check(this.formats.filter, t)
            }
            filterLog(t) {
                return f.check(this.formats.filterLog, t)
            }
            static check(t, e) {
                let r = {};
                for (let n in t)
                    try {
                        let i = t[n](e[n]);
                        void 0 !== i && (r[n] = i)
                    } catch (t) {
                        throw t.checkKey = n,
                        t.checkValue = e[n],
                        t
                    }
                return r
            }
            static allowNull(t, e) {
                return function(r) {
                    return null == r ? e : t(r)
                }
            }
            static allowFalsish(t, e) {
                return function(r) {
                    return r ? t(r) : e
                }
            }
            static arrayOf(t) {
                return function(e) {
                    if (!Array.isArray(e))
                        throw Error("not an array");
                    let r = [];
                    return e.forEach(function(e) {
                        r.push(t(e))
                    }),
                    r
                }
            }
        }
        let c = !1;
        function d() {
            c || (c = !0,
            console.log("========= NOTICE ========="),
            console.log("Request-Rate Exceeded  (this message will not be repeated)"),
            console.log(""),
            console.log("The default API keys for each service are provided as a highly-throttled,"),
            console.log("community resource for low-traffic projects and early prototyping."),
            console.log(""),
            console.log("While your application will continue to function, we highly recommended"),
            console.log("signing up for your own API keys to improve performance, increase your"),
            console.log("request rate/limit and enable other perks, such as metrics and advanced APIs."),
            console.log(""),
            console.log("For more details: https://docs.ethers.io/api-keys/"),
            console.log("=========================="))
        }
    },
    13346: function(t, e, r) {
        "use strict";
        let n, i;
        r.d(e, {
            r: function() {
                return t$
            }
        });
        var o, s = r(37637), a = r(22594), u = r(9784), l = r(89005), h = r(43481), f = r(36173), c = r(13421);
        let d = "hash/5.7.0";
        var p = r(99554);
        let m = new c.Yd(d)
          , g = new Uint8Array(32);
        g.fill(0);
        let v = a.O$.from(-1)
          , y = a.O$.from(0)
          , b = a.O$.from(1)
          , A = a.O$.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff")
          , w = (0,
        u.$m)(b.toHexString(), 32)
          , E = (0,
        u.$m)(y.toHexString(), 32)
          , _ = {
            name: "string",
            version: "string",
            chainId: "uint256",
            verifyingContract: "address",
            salt: "bytes32"
        }
          , M = ["name", "version", "chainId", "verifyingContract", "salt"];
        function k(t) {
            return function(e) {
                return "string" != typeof e && m.throwArgumentError(`invalid domain value for ${JSON.stringify(t)}`, `domain.${t}`, e),
                e
            }
        }
        let N = {
            name: k("name"),
            version: k("version"),
            chainId: function(t) {
                try {
                    return a.O$.from(t).toString()
                } catch (t) {}
                return m.throwArgumentError('invalid domain value for "chainId"', "domain.chainId", t)
            },
            verifyingContract: function(t) {
                try {
                    return (0,
                    l.Kn)(t).toLowerCase()
                } catch (t) {}
                return m.throwArgumentError('invalid domain value "verifyingContract"', "domain.verifyingContract", t)
            },
            salt: function(t) {
                try {
                    let e = (0,
                    u.lE)(t);
                    if (32 !== e.length)
                        throw Error("bad length");
                    return (0,
                    u.Dv)(e)
                } catch (t) {}
                return m.throwArgumentError('invalid domain value "salt"', "domain.salt", t)
            }
        };
        function x(t) {
            {
                let e = t.match(/^(u?)int(\d*)$/);
                if (e) {
                    let r = "" === e[1]
                      , n = parseInt(e[2] || "256");
                    (n % 8 != 0 || n > 256 || e[2] && e[2] !== String(n)) && m.throwArgumentError("invalid numeric width", "type", t);
                    let i = A.mask(r ? n - 1 : n)
                      , o = r ? i.add(b).mul(v) : y;
                    return function(e) {
                        let r = a.O$.from(e);
                        return (r.lt(o) || r.gt(i)) && m.throwArgumentError(`value out-of-bounds for ${t}`, "value", e),
                        (0,
                        u.$m)(r.toTwos(256).toHexString(), 32)
                    }
                }
            }
            {
                let e = t.match(/^bytes(\d+)$/);
                if (e) {
                    let r = parseInt(e[1]);
                    return (0 === r || r > 32 || e[1] !== String(r)) && m.throwArgumentError("invalid bytes width", "type", t),
                    function(e) {
                        return (0,
                        u.lE)(e).length !== r && m.throwArgumentError(`invalid length for ${t}`, "value", e),
                        function(t) {
                            let e = (0,
                            u.lE)(t)
                              , r = e.length % 32;
                            return r ? (0,
                            u.xs)([e, g.slice(r)]) : (0,
                            u.Dv)(e)
                        }(e)
                    }
                }
            }
            switch (t) {
            case "address":
                return function(t) {
                    return (0,
                    u.$m)((0,
                    l.Kn)(t), 32)
                }
                ;
            case "bool":
                return function(t) {
                    return t ? w : E
                }
                ;
            case "bytes":
                return function(t) {
                    return (0,
                    h.w)(t)
                }
                ;
            case "string":
                return function(t) {
                    return (0,
                    p.id)(t)
                }
            }
            return null
        }
        function P(t, e) {
            return `${t}(${e.map(({name: t, type: e})=>e + " " + t).join(",")})`
        }
        class I {
            constructor(t) {
                (0,
                f.zG)(this, "types", Object.freeze((0,
                f.p$)(t))),
                (0,
                f.zG)(this, "_encoderCache", {}),
                (0,
                f.zG)(this, "_types", {});
                let e = {}
                  , r = {}
                  , n = {};
                for (let i in Object.keys(t).forEach(t=>{
                    e[t] = {},
                    r[t] = [],
                    n[t] = {}
                }
                ),
                t) {
                    let n = {};
                    t[i].forEach(o=>{
                        n[o.name] && m.throwArgumentError(`duplicate variable name ${JSON.stringify(o.name)} in ${JSON.stringify(i)}`, "types", t),
                        n[o.name] = !0;
                        let s = o.type.match(/^([^\x5b]*)(\x5b|$)/)[1];
                        s === i && m.throwArgumentError(`circular type reference to ${JSON.stringify(s)}`, "types", t),
                        x(s) || (r[s] || m.throwArgumentError(`unknown type ${JSON.stringify(s)}`, "types", t),
                        r[s].push(i),
                        e[i][s] = !0)
                    }
                    )
                }
                let i = Object.keys(r).filter(t=>0 === r[t].length);
                for (let o in 0 === i.length ? m.throwArgumentError("missing primary type", "types", t) : i.length > 1 && m.throwArgumentError(`ambiguous primary types or unused types: ${i.map(t=>JSON.stringify(t)).join(", ")}`, "types", t),
                (0,
                f.zG)(this, "primaryType", i[0]),
                !function i(o, s) {
                    s[o] && m.throwArgumentError(`circular type reference to ${JSON.stringify(o)}`, "types", t),
                    s[o] = !0,
                    Object.keys(e[o]).forEach(t=>{
                        r[t] && (i(t, s),
                        Object.keys(s).forEach(e=>{
                            n[e][t] = !0
                        }
                        ))
                    }
                    ),
                    delete s[o]
                }(this.primaryType, {}),
                n) {
                    let e = Object.keys(n[o]);
                    e.sort(),
                    this._types[o] = P(o, t[o]) + e.map(e=>P(e, t[e])).join("")
                }
            }
            getEncoder(t) {
                let e = this._encoderCache[t];
                return e || (e = this._encoderCache[t] = this._getEncoder(t)),
                e
            }
            _getEncoder(t) {
                {
                    let e = x(t);
                    if (e)
                        return e
                }
                let e = t.match(/^(.*)(\x5b(\d*)\x5d)$/);
                if (e) {
                    let t = e[1]
                      , r = this.getEncoder(t)
                      , n = parseInt(e[3]);
                    return e=>{
                        n >= 0 && e.length !== n && m.throwArgumentError("array length mismatch; expected length ${ arrayLength }", "value", e);
                        let i = e.map(r);
                        return this._types[t] && (i = i.map(h.w)),
                        (0,
                        h.w)((0,
                        u.xs)(i))
                    }
                }
                let r = this.types[t];
                if (r) {
                    let e = (0,
                    p.id)(this._types[t]);
                    return t=>{
                        let n = r.map(({name: e, type: r})=>{
                            let n = this.getEncoder(r)(t[e]);
                            return this._types[r] ? (0,
                            h.w)(n) : n
                        }
                        );
                        return n.unshift(e),
                        (0,
                        u.xs)(n)
                    }
                }
                return m.throwArgumentError(`unknown type: ${t}`, "type", t)
            }
            encodeType(t) {
                let e = this._types[t];
                return e || m.throwArgumentError(`unknown type: ${JSON.stringify(t)}`, "name", t),
                e
            }
            encodeData(t, e) {
                return this.getEncoder(t)(e)
            }
            hashStruct(t, e) {
                return (0,
                h.w)(this.encodeData(t, e))
            }
            encode(t) {
                return this.encodeData(this.primaryType, t)
            }
            hash(t) {
                return this.hashStruct(this.primaryType, t)
            }
            _visit(t, e, r) {
                if (x(t))
                    return r(t, e);
                let n = t.match(/^(.*)(\x5b(\d*)\x5d)$/);
                if (n) {
                    let t = n[1]
                      , i = parseInt(n[3]);
                    return i >= 0 && e.length !== i && m.throwArgumentError("array length mismatch; expected length ${ arrayLength }", "value", e),
                    e.map(e=>this._visit(t, e, r))
                }
                let i = this.types[t];
                return i ? i.reduce((t,{name: n, type: i})=>(t[n] = this._visit(i, e[n], r),
                t), {}) : m.throwArgumentError(`unknown type: ${t}`, "type", t)
            }
            visit(t, e) {
                return this._visit(this.primaryType, t, e)
            }
            static from(t) {
                return new I(t)
            }
            static getPrimaryType(t) {
                return I.from(t).primaryType
            }
            static hashStruct(t, e, r) {
                return I.from(e).hashStruct(t, r)
            }
            static hashDomain(t) {
                let e = [];
                for (let r in t) {
                    let n = _[r];
                    n || m.throwArgumentError(`invalid typed-data domain key: ${JSON.stringify(r)}`, "domain", t),
                    e.push({
                        name: r,
                        type: n
                    })
                }
                return e.sort((t,e)=>M.indexOf(t.name) - M.indexOf(e.name)),
                I.hashStruct("EIP712Domain", {
                    EIP712Domain: e
                }, t)
            }
            static encode(t, e, r) {
                return (0,
                u.xs)(["0x1901", I.hashDomain(t), I.from(e).hash(r)])
            }
            static hash(t, e, r) {
                return (0,
                h.w)(I.encode(t, e, r))
            }
            static resolveNames(t, e, r, n) {
                var i, o, s, a;
                return i = this,
                o = void 0,
                s = void 0,
                a = function*() {
                    t = (0,
                    f.DC)(t);
                    let i = {};
                    t.verifyingContract && !(0,
                    u.A7)(t.verifyingContract, 20) && (i[t.verifyingContract] = "0x");
                    let o = I.from(e);
                    for (let t in o.visit(r, (t,e)=>("address" !== t || (0,
                    u.A7)(e, 20) || (i[e] = "0x"),
                    e)),
                    i)
                        i[t] = yield n(t);
                    return t.verifyingContract && i[t.verifyingContract] && (t.verifyingContract = i[t.verifyingContract]),
                    r = o.visit(r, (t,e)=>"address" === t && i[e] ? i[e] : e),
                    {
                        domain: t,
                        value: r
                    }
                }
                ,
                new (s || (s = Promise))(function(t, e) {
                    function r(t) {
                        try {
                            u(a.next(t))
                        } catch (t) {
                            e(t)
                        }
                    }
                    function n(t) {
                        try {
                            u(a.throw(t))
                        } catch (t) {
                            e(t)
                        }
                    }
                    function u(e) {
                        var i;
                        e.done ? t(e.value) : ((i = e.value)instanceof s ? i : new s(function(t) {
                            t(i)
                        }
                        )).then(r, n)
                    }
                    u((a = a.apply(i, o || [])).next())
                }
                )
            }
            static getPayload(t, e, r) {
                I.hashDomain(t);
                let n = {}
                  , i = [];
                M.forEach(e=>{
                    let r = t[e];
                    null != r && (n[e] = N[e](r),
                    i.push({
                        name: e,
                        type: _[e]
                    }))
                }
                );
                let o = I.from(e)
                  , s = (0,
                f.DC)(e);
                return s.EIP712Domain ? m.throwArgumentError("types must not contain EIP712Domain type", "types.EIP712Domain", e) : s.EIP712Domain = i,
                o.encode(r),
                {
                    types: s,
                    domain: n,
                    primaryType: o.primaryType,
                    message: o.visit(r, (t,e)=>{
                        if (t.match(/^bytes(\d*)/))
                            return (0,
                            u.Dv)((0,
                            u.lE)(e));
                        if (t.match(/^u?int/))
                            return a.O$.from(e).toString();
                        switch (t) {
                        case "address":
                            return e.toLowerCase();
                        case "bool":
                            return !!e;
                        case "string":
                            return "string" != typeof e && m.throwArgumentError("invalid string", "value", e),
                            e
                        }
                        return m.throwArgumentError("unsupported type", "type", t)
                    }
                    )
                }
            }
        }
        var S = r(28257)
          , R = r(2149);
        function C(t) {
            t = atob(t);
            let e = [];
            for (let r = 0; r < t.length; r++)
                e.push(t.charCodeAt(r));
            return (0,
            u.lE)(e)
        }
        function O(t) {
            t = (0,
            u.lE)(t);
            let e = "";
            for (let r = 0; r < t.length; r++)
                e += String.fromCharCode(t[r]);
            return btoa(e)
        }
        let T = new c.Yd("web/5.7.1");
        function B(t) {
            return new Promise(e=>{
                setTimeout(e, t)
            }
            )
        }
        function D(t, e) {
            if (null == t)
                return null;
            if ("string" == typeof t)
                return t;
            if ((0,
            u.Zq)(t)) {
                if (e && ("text" === e.split("/")[0] || "application/json" === e.split(";")[0].trim()))
                    try {
                        return (0,
                        S.ZN)(t)
                    } catch (t) {}
                return (0,
                u.Dv)(t)
            }
            return t
        }
        function L(t, e, r) {
            let n = null;
            if (null != e) {
                n = (0,
                S.Y0)(e);
                let r = "string" == typeof t ? {
                    url: t
                } : (0,
                f.DC)(t);
                r.headers ? 0 !== Object.keys(r.headers).filter(t=>"content-type" === t.toLowerCase()).length || (r.headers = (0,
                f.DC)(r.headers),
                r.headers["content-type"] = "application/json") : r.headers = {
                    "content-type": "application/json"
                },
                t = r
            }
            return function(t, e, r) {
                let n;
                let i = "object" == typeof t && null != t.throttleLimit ? t.throttleLimit : 12;
                T.assertArgument(i > 0 && i % 1 == 0, "invalid connection throttle limit", "connection.throttleLimit", i);
                let o = "object" == typeof t ? t.throttleCallback : null
                  , s = "object" == typeof t && "number" == typeof t.throttleSlotInterval ? t.throttleSlotInterval : 100;
                T.assertArgument(s > 0 && s % 1 == 0, "invalid connection throttle slot interval", "connection.throttleSlotInterval", s);
                let a = "object" == typeof t && !!t.errorPassThrough
                  , l = {}
                  , h = null
                  , d = {
                    method: "GET"
                }
                  , p = !1
                  , m = 12e4;
                if ("string" == typeof t)
                    h = t;
                else if ("object" == typeof t) {
                    if ((null == t || null == t.url) && T.throwArgumentError("missing URL", "connection.url", t),
                    h = t.url,
                    "number" == typeof t.timeout && t.timeout > 0 && (m = t.timeout),
                    t.headers)
                        for (let e in t.headers)
                            l[e.toLowerCase()] = {
                                key: e,
                                value: String(t.headers[e])
                            },
                            ["if-none-match", "if-modified-since"].indexOf(e.toLowerCase()) >= 0 && (p = !0);
                    if (d.allowGzip = !!t.allowGzip,
                    null != t.user && null != t.password) {
                        "https:" !== h.substring(0, 6) && !0 !== t.allowInsecureAuthentication && T.throwError("basic authentication requires a secure https url", c.Yd.errors.INVALID_ARGUMENT, {
                            argument: "url",
                            url: h,
                            user: t.user,
                            password: "[REDACTED]"
                        });
                        let e = t.user + ":" + t.password;
                        l.authorization = {
                            key: "Authorization",
                            value: "Basic " + O((0,
                            S.Y0)(e))
                        }
                    }
                    null != t.skipFetchSetup && (d.skipFetchSetup = !!t.skipFetchSetup),
                    null != t.fetchOptions && (d.fetchOptions = (0,
                    f.DC)(t.fetchOptions))
                }
                let g = RegExp("^data:([^;:]*)?(;base64)?,(.*)$", "i")
                  , v = h ? h.match(g) : null;
                if (v)
                    try {
                        var y;
                        let t = {
                            statusCode: 200,
                            statusMessage: "OK",
                            headers: {
                                "content-type": v[1] || "text/plain"
                            },
                            body: v[2] ? C(v[3]) : (y = v[3],
                            (0,
                            S.Y0)(y.replace(/%([0-9a-f][0-9a-f])/gi, (t,e)=>String.fromCharCode(parseInt(e, 16)))))
                        }
                          , e = t.body;
                        return r && (e = r(t.body, t)),
                        Promise.resolve(e)
                    } catch (t) {
                        T.throwError("processing response error", c.Yd.errors.SERVER_ERROR, {
                            body: D(v[1], v[2]),
                            error: t,
                            requestBody: null,
                            requestMethod: "GET",
                            url: h
                        })
                    }
                e && (d.method = "POST",
                d.body = e,
                null == l["content-type"] && (l["content-type"] = {
                    key: "Content-Type",
                    value: "application/octet-stream"
                }),
                null == l["content-length"] && (l["content-length"] = {
                    key: "Content-Length",
                    value: String(e.length)
                }));
                let b = {};
                Object.keys(l).forEach(t=>{
                    let e = l[t];
                    b[e.key] = e.value
                }
                ),
                d.headers = b;
                let A = (n = null,
                {
                    promise: new Promise(function(t, e) {
                        m && (n = setTimeout(()=>{
                            null != n && (n = null,
                            e(T.makeError("timeout", c.Yd.errors.TIMEOUT, {
                                requestBody: D(d.body, b["content-type"]),
                                requestMethod: d.method,
                                timeout: m,
                                url: h
                            })))
                        }
                        , m))
                    }
                    ),
                    cancel: function() {
                        null != n && (clearTimeout(n),
                        n = null)
                    }
                })
                  , w = function() {
                    var t, e, n, l;
                    return t = this,
                    e = void 0,
                    n = void 0,
                    l = function*() {
                        for (let t = 0; t < i; t++) {
                            let e = null;
                            try {
                                if (e = yield function(t, e) {
                                    var r, n, i, o;
                                    return r = this,
                                    n = void 0,
                                    i = void 0,
                                    o = function*() {
                                        null == e && (e = {});
                                        let r = {
                                            method: e.method || "GET",
                                            headers: e.headers || {},
                                            body: e.body || void 0
                                        };
                                        if (!0 !== e.skipFetchSetup && (r.mode = "cors",
                                        r.cache = "no-cache",
                                        r.credentials = "same-origin",
                                        r.redirect = "follow",
                                        r.referrer = "client"),
                                        null != e.fetchOptions) {
                                            let t = e.fetchOptions;
                                            t.mode && (r.mode = t.mode),
                                            t.cache && (r.cache = t.cache),
                                            t.credentials && (r.credentials = t.credentials),
                                            t.redirect && (r.redirect = t.redirect),
                                            t.referrer && (r.referrer = t.referrer)
                                        }
                                        let n = yield fetch(t, r)
                                          , i = yield n.arrayBuffer()
                                          , o = {};
                                        return n.headers.forEach ? n.headers.forEach((t,e)=>{
                                            o[e.toLowerCase()] = t
                                        }
                                        ) : n.headers.keys().forEach(t=>{
                                            o[t.toLowerCase()] = n.headers.get(t)
                                        }
                                        ),
                                        {
                                            headers: o,
                                            statusCode: n.status,
                                            statusMessage: n.statusText,
                                            body: (0,
                                            u.lE)(new Uint8Array(i))
                                        }
                                    }
                                    ,
                                    new (i || (i = Promise))(function(t, e) {
                                        function s(t) {
                                            try {
                                                u(o.next(t))
                                            } catch (t) {
                                                e(t)
                                            }
                                        }
                                        function a(t) {
                                            try {
                                                u(o.throw(t))
                                            } catch (t) {
                                                e(t)
                                            }
                                        }
                                        function u(e) {
                                            var r;
                                            e.done ? t(e.value) : ((r = e.value)instanceof i ? r : new i(function(t) {
                                                t(r)
                                            }
                                            )).then(s, a)
                                        }
                                        u((o = o.apply(r, n || [])).next())
                                    }
                                    )
                                }(h, d),
                                t < i) {
                                    if (301 === e.statusCode || 302 === e.statusCode) {
                                        let t = e.headers.location || "";
                                        if ("GET" === d.method && t.match(/^https:/)) {
                                            h = e.headers.location;
                                            continue
                                        }
                                    } else if (429 === e.statusCode) {
                                        let r = !0;
                                        if (o && (r = yield o(t, h)),
                                        r) {
                                            let r = 0
                                              , n = e.headers["retry-after"];
                                            r = "string" == typeof n && n.match(/^[1-9][0-9]*$/) ? 1e3 * parseInt(n) : s * parseInt(String(Math.random() * Math.pow(2, t))),
                                            yield B(r);
                                            continue
                                        }
                                    }
                                }
                            } catch (t) {
                                null == (e = t.response) && (A.cancel(),
                                T.throwError("missing response", c.Yd.errors.SERVER_ERROR, {
                                    requestBody: D(d.body, b["content-type"]),
                                    requestMethod: d.method,
                                    serverError: t,
                                    url: h
                                }))
                            }
                            let n = e.body;
                            if (p && 304 === e.statusCode ? n = null : !a && (e.statusCode < 200 || e.statusCode >= 300) && (A.cancel(),
                            T.throwError("bad response", c.Yd.errors.SERVER_ERROR, {
                                status: e.statusCode,
                                headers: e.headers,
                                body: D(n, e.headers ? e.headers["content-type"] : null),
                                requestBody: D(d.body, b["content-type"]),
                                requestMethod: d.method,
                                url: h
                            })),
                            r)
                                try {
                                    let t = yield r(n, e);
                                    return A.cancel(),
                                    t
                                } catch (r) {
                                    if (r.throttleRetry && t < i) {
                                        let e = !0;
                                        if (o && (e = yield o(t, h)),
                                        e) {
                                            let e = s * parseInt(String(Math.random() * Math.pow(2, t)));
                                            yield B(e);
                                            continue
                                        }
                                    }
                                    A.cancel(),
                                    T.throwError("processing response error", c.Yd.errors.SERVER_ERROR, {
                                        body: D(n, e.headers ? e.headers["content-type"] : null),
                                        error: r,
                                        requestBody: D(d.body, b["content-type"]),
                                        requestMethod: d.method,
                                        url: h
                                    })
                                }
                            return A.cancel(),
                            n
                        }
                        return T.throwError("failed response", c.Yd.errors.SERVER_ERROR, {
                            requestBody: D(d.body, b["content-type"]),
                            requestMethod: d.method,
                            url: h
                        })
                    }
                    ,
                    new (n || (n = Promise))(function(r, i) {
                        function o(t) {
                            try {
                                a(l.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }
                        function s(t) {
                            try {
                                a(l.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }
                        function a(t) {
                            var e;
                            t.done ? r(t.value) : ((e = t.value)instanceof n ? e : new n(function(t) {
                                t(e)
                            }
                            )).then(o, s)
                        }
                        a((l = l.apply(t, e || [])).next())
                    }
                    )
                }();
                return Promise.race([A.promise, w])
            }(t, n, (t,e)=>{
                let n = null;
                if (null != t)
                    try {
                        n = JSON.parse((0,
                        S.ZN)(t))
                    } catch (e) {
                        T.throwError("invalid JSON", c.Yd.errors.SERVER_ERROR, {
                            body: t,
                            error: e
                        })
                    }
                return r && (n = r(n, e)),
                n
            }
            )
        }
        function U(t, e) {
            return e || (e = {}),
            null == (e = (0,
            f.DC)(e)).floor && (e.floor = 0),
            null == e.ceiling && (e.ceiling = 1e4),
            null == e.interval && (e.interval = 250),
            new Promise(function(r, n) {
                let i = null
                  , o = !1
                  , s = ()=>!o && (o = !0,
                i && clearTimeout(i),
                !0);
                e.timeout && (i = setTimeout(()=>{
                    s() && n(Error("timeout"))
                }
                , e.timeout));
                let a = e.retryLimit
                  , u = 0;
                !function i() {
                    return t().then(function(t) {
                        if (void 0 !== t)
                            s() && r(t);
                        else if (e.oncePoll)
                            e.oncePoll.once("poll", i);
                        else if (e.onceBlock)
                            e.onceBlock.once("block", i);
                        else if (!o) {
                            if (++u > a) {
                                s() && n(Error("retry limit reached"));
                                return
                            }
                            let t = e.interval * parseInt(String(Math.random() * Math.pow(2, u)));
                            t < e.floor && (t = e.floor),
                            t > e.ceiling && (t = e.ceiling),
                            setTimeout(i, t)
                        }
                        return null
                    }, function(t) {
                        s() && n(t)
                    })
                }()
            }
            )
        }
        var F = r(86365)
          , z = r(59035);
        class j {
            constructor(t) {
                (0,
                f.zG)(this, "alphabet", t),
                (0,
                f.zG)(this, "base", t.length),
                (0,
                f.zG)(this, "_alphabetMap", {}),
                (0,
                f.zG)(this, "_leader", t.charAt(0));
                for (let e = 0; e < t.length; e++)
                    this._alphabetMap[t.charAt(e)] = e
            }
            encode(t) {
                let e = (0,
                u.lE)(t);
                if (0 === e.length)
                    return "";
                let r = [0];
                for (let t = 0; t < e.length; ++t) {
                    let n = e[t];
                    for (let t = 0; t < r.length; ++t)
                        n += r[t] << 8,
                        r[t] = n % this.base,
                        n = n / this.base | 0;
                    for (; n > 0; )
                        r.push(n % this.base),
                        n = n / this.base | 0
                }
                let n = "";
                for (let t = 0; 0 === e[t] && t < e.length - 1; ++t)
                    n += this._leader;
                for (let t = r.length - 1; t >= 0; --t)
                    n += this.alphabet[r[t]];
                return n
            }
            decode(t) {
                if ("string" != typeof t)
                    throw TypeError("Expected String");
                let e = [];
                if (0 === t.length)
                    return new Uint8Array(e);
                e.push(0);
                for (let r = 0; r < t.length; r++) {
                    let n = this._alphabetMap[t[r]];
                    if (void 0 === n)
                        throw Error("Non-base" + this.base + " character");
                    let i = n;
                    for (let t = 0; t < e.length; ++t)
                        i += e[t] * this.base,
                        e[t] = 255 & i,
                        i >>= 8;
                    for (; i > 0; )
                        e.push(255 & i),
                        i >>= 8
                }
                for (let r = 0; t[r] === this._leader && r < t.length - 1; ++r)
                    e.push(0);
                return (0,
                u.lE)(new Uint8Array(e.reverse()))
            }
        }
        new j("abcdefghijklmnopqrstuvwxyz234567");
        let G = new j("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");
        function Y(t, e) {
            null == e && (e = 1);
            let r = []
              , n = r.forEach
              , i = function(t, e) {
                n.call(t, function(t) {
                    e > 0 && Array.isArray(t) ? i(t, e - 1) : r.push(t)
                })
            };
            return i(t, e),
            r
        }
        function q(t, e) {
            let r = Array(t);
            for (let n = 0, i = -1; n < t; n++)
                r[n] = i += 1 + e();
            return r
        }
        function H(t, e) {
            let r = q(t(), t)
              , n = t()
              , i = q(n, t)
              , o = function(t, e) {
                let r = Array(t);
                for (let n = 0; n < t; n++)
                    r[n] = 1 + e();
                return r
            }(n, t);
            for (let t = 0; t < n; t++)
                for (let e = 0; e < o[t]; e++)
                    r.push(i[t] + e);
            return e ? r.map(t=>e[t]) : r
        }
        function K(t, e, r) {
            let n = Array(t).fill(void 0).map(()=>[]);
            for (let i = 0; i < e; i++)
                (function(t, e) {
                    let r = Array(t);
                    for (let i = 0, o = 0; i < t; i++) {
                        var n;
                        r[i] = o += 1 & (n = e()) ? ~n >> 1 : n >> 1
                    }
                    return r
                }
                )(t, r).forEach((t,e)=>n[e].push(t));
            return n
        }
        let Q = (o = function(t) {
            let e = 0;
            function r() {
                return t[e++] << 8 | t[e++]
            }
            let n = r()
              , i = 1
              , o = [0, 1];
            for (let t = 1; t < n; t++)
                o.push(i += r());
            let s = r()
              , a = e;
            e += s;
            let u = 0
              , l = 0;
            function h() {
                return 0 == u && (l = l << 8 | t[e++],
                u = 8),
                l >> --u & 1
            }
            let f = 0;
            for (let t = 0; t < 31; t++)
                f = f << 1 | h();
            let c = []
              , d = 0
              , p = 2147483648;
            for (; ; ) {
                let t = Math.floor(((f - d + 1) * i - 1) / p)
                  , e = 0
                  , r = n;
                for (; r - e > 1; ) {
                    let n = e + r >>> 1;
                    t < o[n] ? r = n : e = n
                }
                if (0 == e)
                    break;
                c.push(e);
                let s = d + Math.floor(p * o[e] / i)
                  , a = d + Math.floor(p * o[e + 1] / i) - 1;
                for (; ((s ^ a) & 1073741824) == 0; )
                    f = f << 1 & 2147483647 | h(),
                    s = s << 1 & 2147483647,
                    a = a << 1 & 2147483647 | 1;
                for (; s & ~a & 536870912; )
                    f = 1073741824 & f | f << 1 & 1073741823 | h(),
                    s = s << 1 ^ 1073741824,
                    a = (1073741824 ^ a) << 1 | 1073741825;
                d = s,
                p = 1 + a - s
            }
            let m = n - 4;
            return c.map(e=>{
                switch (e - m) {
                case 3:
                    return m + 65792 + (t[a++] << 16 | t[a++] << 8 | t[a++]);
                case 2:
                    return m + 256 + (t[a++] << 8 | t[a++]);
                case 1:
                    return m + t[a++];
                default:
                    return e - 1
                }
            }
            )
        }(C("AEQF2AO2DEsA2wIrAGsBRABxAN8AZwCcAEwAqgA0AGwAUgByADcATAAVAFYAIQAyACEAKAAYAFgAGwAjABQAMAAmADIAFAAfABQAKwATACoADgAbAA8AHQAYABoAGQAxADgALAAoADwAEwA9ABMAGgARAA4ADwAWABMAFgAIAA8AHgQXBYMA5BHJAS8JtAYoAe4AExozi0UAH21tAaMnBT8CrnIyhrMDhRgDygIBUAEHcoFHUPe8AXBjAewCjgDQR8IICIcEcQLwATXCDgzvHwBmBoHNAqsBdBcUAykgDhAMShskMgo8AY8jqAQfAUAfHw8BDw87MioGlCIPBwZCa4ELatMAAMspJVgsDl8AIhckSg8XAHdvTwBcIQEiDT4OPhUqbyECAEoAS34Aej8Ybx83JgT/Xw8gHxZ/7w8RICxPHA9vBw+Pfw8PHwAPFv+fAsAvCc8vEr8ivwD/EQ8Bol8OEBa/A78hrwAPCU8vESNvvwWfHwNfAVoDHr+ZAAED34YaAdJPAK7PLwSEgDLHAGo1Pz8Pvx9fUwMrpb8O/58VTzAPIBoXIyQJNF8hpwIVAT8YGAUADDNBaX3RAMomJCg9EhUeA29MABsZBTMNJipjOhc19gcIDR8bBwQHEggCWi6DIgLuAQYA+BAFCha3A5XiAEsqM7UFFgFLhAMjFTMYE1Klnw74nRVBG/ASCm0BYRN/BrsU3VoWy+S0vV8LQx+vN8gF2AC2AK5EAWwApgYDKmAAroQ0NDQ0AT+OCg7wAAIHRAbpNgVcBV0APTA5BfbPFgMLzcYL/QqqA82eBALKCjQCjqYCht0/k2+OAsXQAoP3ASTKDgDw6ACKAUYCMpIKJpRaAE4A5womABzZvs0REEKiACIQAd5QdAECAj4Ywg/wGqY2AVgAYADYvAoCGAEubA0gvAY2ALAAbpbvqpyEAGAEpgQAJgAG7gAgAEACmghUFwCqAMpAINQIwC4DthRAAPcycKgApoIdABwBfCisABoATwBqASIAvhnSBP8aH/ECeAKXAq40NjgDBTwFYQU6AXs3oABgAD4XNgmcCY1eCl5tIFZeUqGgyoNHABgAEQAaABNwWQAmABMATPMa3T34ADldyprmM1M2XociUQgLzvwAXT3xABgAEQAaABNwIGFAnADD8AAgAD4BBJWzaCcIAIEBFMAWwKoAAdq9BWAF5wLQpALEtQAKUSGkahR4GnJM+gsAwCgeFAiUAECQ0BQuL8AAIAAAADKeIheclvFqQAAETr4iAMxIARMgAMIoHhQIAn0E0pDQFC4HhznoAAAAIAI2C0/4lvFqQAAETgBJJwYCAy4ABgYAFAA8MBKYEH4eRhTkAjYeFcgACAYAeABsOqyQ5gRwDayqugEgaIIAtgoACgDmEABmBAWGme5OBJJA2m4cDeoAmITWAXwrMgOgAGwBCh6CBXYF1Tzg1wKAAFdiuABRAFwAXQBsAG8AdgBrAHYAbwCEAHEwfxQBVE5TEQADVFhTBwBDANILAqcCzgLTApQCrQL6vAAMAL8APLhNBKkE6glGKTAU4Dr4N2EYEwBCkABKk8rHAbYBmwIoAiU4Ajf/Aq4CowCAANIChzgaNBsCsTgeODcFXrgClQKdAqQBiQGYAqsCsjTsNHsfNPA0ixsAWTWiOAMFPDQSNCk2BDZHNow2TTZUNhk28Jk9VzI3QkEoAoICoQKwAqcAQAAxBV4FXbS9BW47YkIXP1ciUqs05DS/FwABUwJW11e6nHuYZmSh/RAYA8oMKvZ8KASoUAJYWAJ6ILAsAZSoqjpgA0ocBIhmDgDWAAawRDQoAAcuAj5iAHABZiR2AIgiHgCaAU68ACxuHAG0ygM8MiZIAlgBdF4GagJqAPZOHAMuBgoATkYAsABiAHgAMLoGDPj0HpKEBAAOJgAuALggTAHWAeAMEDbd20Uege0ADwAWADkAQgA9OHd+2MUQZBBhBgNNDkxxPxUQArEPqwvqERoM1irQ090ANK4H8ANYB/ADWANYB/AH8ANYB/ADWANYA1gDWBwP8B/YxRBkD00EcgWTBZAE2wiIJk4RhgctCNdUEnQjHEwDSgEBIypJITuYMxAlR0wRTQgIATZHbKx9PQNMMbBU+pCnA9AyVDlxBgMedhKlAC8PeCE1uk6DekxxpQpQT7NX9wBFBgASqwAS5gBJDSgAUCwGPQBI4zTYABNGAE2bAE3KAExdGABKaAbgAFBXAFCOAFBJABI2SWdObALDOq0//QomCZhvwHdTBkIQHCemEPgMNAG2ATwN7kvZBPIGPATKH34ZGg/OlZ0Ipi3eDO4m5C6igFsj9iqEBe5L9TzeC05RaQ9aC2YJ5DpkgU8DIgEOIowK3g06CG4Q9ArKbA3mEUYHOgPWSZsApgcCCxIdNhW2JhFirQsKOXgG/Br3C5AmsBMqev0F1BoiBk4BKhsAANAu6IWxWjJcHU9gBgQLJiPIFKlQIQ0mQLh4SRocBxYlqgKSQ3FKiFE3HpQh9zw+DWcuFFF9B/Y8BhlQC4I8n0asRQ8R0z6OPUkiSkwtBDaALDAnjAnQD4YMunxzAVoJIgmyDHITMhEYN8YIOgcaLpclJxYIIkaWYJsE+KAD9BPSAwwFQAlCBxQDthwuEy8VKgUOgSXYAvQ21i60ApBWgQEYBcwPJh/gEFFH4Q7qCJwCZgOEJewALhUiABginAhEZABgj9lTBi7MCMhqbSN1A2gU6GIRdAeSDlgHqBw0FcAc4nDJXgyGCSiksAlcAXYJmgFgBOQICjVcjKEgQmdUi1kYnCBiQUBd/QIyDGYVoES+h3kCjA9sEhwBNgF0BzoNAgJ4Ee4RbBCWCOyGBTW2M/k6JgRQIYQgEgooA1BszwsoJvoM+WoBpBJjAw00PnfvZ6xgtyUX/gcaMsZBYSHyC5NPzgydGsIYQ1QvGeUHwAP0GvQn60FYBgADpAQUOk4z7wS+C2oIjAlAAEoOpBgH2BhrCnKM0QEyjAG4mgNYkoQCcJAGOAcMAGgMiAV65gAeAqgIpAAGANADWAA6Aq4HngAaAIZCAT4DKDABIuYCkAOUCDLMAZYwAfQqBBzEDBYA+DhuSwLDsgKAa2ajBd5ZAo8CSjYBTiYEBk9IUgOwcuIA3ABMBhTgSAEWrEvMG+REAeBwLADIAPwABjYHBkIBzgH0bgC4AWALMgmjtLYBTuoqAIQAFmwB2AKKAN4ANgCA8gFUAE4FWvoF1AJQSgESMhksWGIBvAMgATQBDgB6BsyOpsoIIARuB9QCEBwV4gLvLwe2AgMi4BPOQsYCvd9WADIXUu5eZwqoCqdeaAC0YTQHMnM9UQAPH6k+yAdy/BZIiQImSwBQ5gBQQzSaNTFWSTYBpwGqKQK38AFtqwBI/wK37gK3rQK3sAK6280C0gK33AK3zxAAUEIAUD9SklKDArekArw5AEQAzAHCO147WTteO1k7XjtZO147WTteO1kDmChYI03AVU0oJqkKbV9GYewMpw3VRMk6ShPcYFJgMxPJLbgUwhXPJVcZPhq9JwYl5VUKDwUt1GYxCC00dhe9AEApaYNCY4ceMQpMHOhTklT5LRwAskujM7ANrRsWREEFSHXuYisWDwojAmSCAmJDXE6wXDchAqH4AmiZAmYKAp+FOBwMAmY8AmYnBG8EgAN/FAN+kzkHOXgYOYM6JCQCbB4CMjc4CwJtyAJtr/CLADRoRiwBaADfAOIASwYHmQyOAP8MwwAOtgJ3MAJ2o0ACeUxEAni7Hl3cRa9G9AJ8QAJ6yQJ9CgJ88UgBSH5kJQAsFklZSlwWGErNAtECAtDNSygDiFADh+dExpEzAvKiXQQDA69Lz0wuJgTQTU1NsAKLQAKK2cIcCB5EaAa4Ao44Ao5dQZiCAo7aAo5deVG1UzYLUtVUhgKT/AKTDQDqAB1VH1WwVdEHLBwplocy4nhnRTw6ApegAu+zWCKpAFomApaQApZ9nQCqWa1aCoJOADwClrYClk9cRVzSApnMApllXMtdCBoCnJw5wzqeApwXAp+cAp65iwAeEDIrEAKd8gKekwC2PmE1YfACntQCoG8BqgKeoCACnk+mY8lkKCYsAiewAiZ/AqD8AqBN2AKmMAKlzwKoAAB+AqfzaH1osgAESmodatICrOQCrK8CrWgCrQMCVx4CVd0CseLYAx9PbJgCsr4OArLpGGzhbWRtSWADJc4Ctl08QG6RAylGArhfArlIFgK5K3hwN3DiAr0aAy2zAzISAr6JcgMDM3ICvhtzI3NQAsPMAsMFc4N0TDZGdOEDPKgDPJsDPcACxX0CxkgCxhGKAshqUgLIRQLJUALJLwJkngLd03h6YniveSZL0QMYpGcDAmH1GfSVJXsMXpNevBICz2wCz20wTFTT9BSgAMeuAs90ASrrA04TfkwGAtwoAtuLAtJQA1JdA1NgAQIDVY2AikABzBfuYUZ2AILPg44C2sgC2d+EEYRKpz0DhqYAMANkD4ZyWvoAVgLfZgLeuXR4AuIw7RUB8zEoAfScAfLTiALr9ALpcXoAAur6AurlAPpIAboC7ooC652Wq5cEAu5AA4XhmHpw4XGiAvMEAGoDjheZlAL3FAORbwOSiAL3mQL52gL4Z5odmqy8OJsfA52EAv77ARwAOp8dn7QDBY4DpmsDptoA0sYDBmuhiaIGCgMMSgFgASACtgNGAJwEgLpoBgC8BGzAEowcggCEDC6kdjoAJAM0C5IKRoABZCgiAIzw3AYBLACkfng9ogigkgNmWAN6AEQCvrkEVqTGAwCsBRbAA+4iQkMCHR072jI2PTbUNsk2RjY5NvA23TZKNiU3EDcZN5I+RTxDRTBCJkK5VBYKFhZfwQCWygU3AJBRHpu+OytgNxa61A40GMsYjsn7BVwFXQVcBV0FaAVdBVwFXQVcBV0FXAVdBVwFXUsaCNyKAK4AAQUHBwKU7oICoW1e7jAEzgPxA+YDwgCkBFDAwADABKzAAOxFLhitA1UFTDeyPkM+bj51QkRCuwTQWWQ8X+0AWBYzsACNA8xwzAGm7EZ/QisoCTAbLDs6fnLfb8H2GccsbgFw13M1HAVkBW/Jxsm9CNRO8E8FDD0FBQw9FkcClOYCoMFegpDfADgcMiA2AJQACB8AsigKAIzIEAJKeBIApY5yPZQIAKQiHb4fvj5BKSRPQrZCOz0oXyxgOywfKAnGbgMClQaCAkILXgdeCD9IIGUgQj5fPoY+dT52Ao5CM0dAX9BTVG9SDzFwWTQAbxBzJF/lOEIQQglCCkKJIAls5AcClQICoKPMODEFxhi6KSAbiyfIRrMjtCgdWCAkPlFBIitCsEJRzAbMAV/OEyQzDg0OAQQEJ36i328/Mk9AybDJsQlq3tDRApUKAkFzXf1d/j9uALYP6hCoFgCTGD8kPsFKQiobrm0+zj0KSD8kPnVCRBwMDyJRTHFgMTJa5rwXQiQ2YfI/JD7BMEJEHGINTw4TOFlIRzwJO0icMQpyPyQ+wzJCRBv6DVgnKB01NgUKj2bwYzMqCoBkznBgEF+zYDIocwRIX+NgHj4HICNfh2C4CwdwFWpTG/lgUhYGAwRfv2Ts8mAaXzVgml/XYIJfuWC4HI1gUF9pYJZgMR6ilQHMAOwLAlDRefC0in4AXAEJA6PjCwc0IamOANMMCAECRQDFNRTZBgd+CwQlRA+r6+gLBDEFBnwUBXgKATIArwAGRAAHA3cDdAN2A3kDdwN9A3oDdQN7A30DfAN4A3oDfQAYEAAlAtYASwMAUAFsAHcKAHcAmgB3AHUAdQB2AHVu8UgAygDAAHcAdQB1AHYAdQALCgB3AAsAmgB3AAsCOwB3AAtu8UgAygDAAHgKAJoAdwB3AHUAdQB2AHUAeAB1AHUAdgB1bvFIAMoAwAALCgCaAHcACwB3AAsCOwB3AAtu8UgAygDAAH4ACwGgALcBpwC6AahdAu0COwLtbvFIAMoAwAALCgCaAu0ACwLtAAsCOwLtAAtu8UgAygDAA24ACwNvAAu0VsQAAzsAABCkjUIpAAsAUIusOggWcgMeBxVsGwL67U/2HlzmWOEeOgALASvuAAseAfpKUpnpGgYJDCIZM6YyARUE9ThqAD5iXQgnAJYJPnOzw0ZAEZxEKsIAkA4DhAHnTAIDxxUDK0lxCQlPYgIvIQVYJQBVqE1GakUAKGYiDToSBA1EtAYAXQJYAIF8GgMHRyAAIAjOe9YncekRAA0KACUrjwE7Ayc6AAYWAqaiKG4McEcqANoN3+Mg9TwCBhIkuCny+JwUQ29L008JluRxu3K+oAdqiHOqFH0AG5SUIfUJ5SxCGfxdipRzqTmT4V5Zb+r1Uo4Vm+NqSSEl2mNvR2JhIa8SpYO6ntdwFXHCWTCK8f2+Hxo7uiG3drDycAuKIMP5bhi06ACnqArH1rz4Rqg//lm6SgJGEVbF9xJHISaR6HxqxSnkw6shDnelHKNEfGUXSJRJ1GcsmtJw25xrZMDK9gXSm1/YMkdX4/6NKYOdtk/NQ3/NnDASjTc3fPjIjW/5sVfVObX2oTDWkr1dF9f3kxBsD3/3aQO8hPfRz+e0uEiJqt1161griu7gz8hDDwtpy+F+BWtefnKHZPAxcZoWbnznhJpy0e842j36bcNzGnIEusgGX0a8ZxsnjcSsPDZ09yZ36fCQbriHeQ72JRMILNl6ePPf2HWoVwgWAm1fb3V2sAY0+B6rAXqSwPBgseVmoqsBTSrm91+XasMYYySI8eeRxH3ZvHkMz3BQ5aJ3iUVbYPNM3/7emRtjlsMgv/9VyTsyt/mK+8fgWeT6SoFaclXqn42dAIsvAarF5vNNWHzKSkKQ/8Hfk5ZWK7r9yliOsooyBjRhfkHP4Q2DkWXQi6FG/9r/IwbmkV5T7JSopHKn1pJwm9tb5Ot0oyN1Z2mPpKXHTxx2nlK08fKk1hEYA8WgVVWL5lgx0iTv+KdojJeU23ZDjmiubXOxVXJKKi2Wjuh2HLZOFLiSC7Tls5SMh4f+Pj6xUSrNjFqLGehRNB8lC0QSLNmkJJx/wSG3MnjE9T1CkPwJI0wH2lfzwETIiVqUxg0dfu5q39Gt+hwdcxkhhNvQ4TyrBceof3Mhs/IxFci1HmHr4FMZgXEEczPiGCx0HRwzAqDq2j9AVm1kwN0mRVLWLylgtoPNapF5cY4Y1wJh/e0BBwZj44YgZrDNqvD/9Hv7GFYdUQeDJuQ3EWI4HaKqavU1XjC/n41kT4L79kqGq0kLhdTZvgP3TA3fS0ozVz+5piZsoOtIvBUFoMKbNcmBL6YxxaUAusHB38XrS8dQMnQwJfUUkpRoGr5AUeWicvBTzyK9g77+yCkf5PAysL7r/JjcZgrbvRpMW9iyaxZvKO6ceZN2EwIxKwVFPuvFuiEPGCoagbMo+SpydLrXqBzNCDGFCrO/rkcwa2xhokQZ5CdZ0AsU3JfSqJ6n5I14YA+P/uAgfhPU84Tlw7cEFfp7AEE8ey4sP12PTt4Cods1GRgDOB5xvyiR5m+Bx8O5nBCNctU8BevfV5A08x6RHd5jcwPTMDSZJOedIZ1cGQ704lxbAzqZOP05ZxaOghzSdvFBHYqomATARyAADK4elP8Ly3IrUZKfWh23Xy20uBUmLS4Pfagu9+oyVa2iPgqRP3F2CTUsvJ7+RYnN8fFZbU/HVvxvcFFDKkiTqV5UBZ3Gz54JAKByi9hkKMZJvuGgcSYXFmw08UyoQyVdfTD1/dMkCHXcTGAKeROgArsvmRrQTLUOXioOHGK2QkjHuoYFgXciZoTJd6Fs5q1QX1G+p/e26hYsEf7QZD1nnIyl/SFkNtYYmmBhpBrxl9WbY0YpHWRuw2Ll/tj9mD8P4snVzJl4F9J+1arVeTb9E5r2ILH04qStjxQNwn3m4YNqxmaNbLAqW2TN6LidwuJRqS+NXbtqxoeDXpxeGWmxzSkWxjkyCkX4NQRme6q5SAcC+M7+9ETfA/EwrzQajKakCwYyeunP6ZFlxU2oMEn1Pz31zeStW74G406ZJFCl1wAXIoUKkWotYEpOuXB1uVNxJ63dpJEqfxBeptwIHNrPz8BllZoIcBoXwgfJ+8VAUnVPvRvexnw0Ma/WiGYuJO5y8QTvEYBigFmhUxY5RqzE8OcywN/8m4UYrlaniJO75XQ6KSo9+tWHlu+hMi0UVdiKQp7NelnoZUzNaIyBPVeOwK6GNp+FfHuPOoyhaWuNvTYFkvxscMQWDh+zeFCFkgwbXftiV23ywJ4+uwRqmg9k3KzwIQpzppt8DBBOMbrqwQM5Gb05sEwdKzMiAqOloaA/lr0KA+1pr0/+HiWoiIjHA/wir2nIuS3PeU/ji3O6ZwoxcR1SZ9FhtLC5S0FIzFhbBWcGVP/KpxOPSiUoAdWUpqKH++6Scz507iCcxYI6rdMBICPJZea7OcmeFw5mObJSiqpjg2UoWNIs+cFhyDSt6geV5qgi3FunmwwDoGSMgerFOZGX1m0dMCYo5XOruxO063dwENK9DbnVM9wYFREzh4vyU1WYYJ/LRRp6oxgjqP/X5a8/4Af6p6NWkQferzBmXme0zY/4nwMJm/wd1tIqSwGz+E3xPEAOoZlJit3XddD7/BT1pllzOx+8bmQtANQ/S6fZexc6qi3W+Q2xcmXTUhuS5mpHQRvcxZUN0S5+PL9lXWUAaRZhEH8hTdAcuNMMCuVNKTEGtSUKNi3O6KhSaTzck8csZ2vWRZ+d7mW8c4IKwXIYd25S/zIftPkwPzufjEvOHWVD1m+FjpDVUTV0DGDuHj6QnaEwLu/dEgdLQOg9E1Sro9XHJ8ykLAwtPu+pxqKDuFexqON1sKQm7rwbE1E68UCfA/erovrTCG+DBSNg0l4goDQvZN6uNlbyLpcZAwj2UclycvLpIZMgv4yRlpb3YuMftozorbcGVHt/VeDV3+Fdf1TP0iuaCsPi2G4XeGhsyF1ubVDxkoJhmniQ0/jSg/eYML9KLfnCFgISWkp91eauR3IQvED0nAPXK+6hPCYs+n3+hCZbiskmVMG2da+0EsZPonUeIY8EbfusQXjsK/eFDaosbPjEfQS0RKG7yj5GG69M7MeO1HmiUYocgygJHL6M1qzUDDwUSmr99V7Sdr2F3JjQAJY+F0yH33Iv3+C9M38eML7gTgmNu/r2bUMiPvpYbZ6v1/IaESirBHNa7mPKn4dEmYg7v/+HQgPN1G79jBQ1+soydfDC2r+h2Bl/KIc5KjMK7OH6nb1jLsNf0EHVe2KBiE51ox636uyG6Lho0t3J34L5QY/ilE3mikaF4HKXG1mG1rCevT1Vv6GavltxoQe/bMrpZvRggnBxSEPEeEzkEdOxTnPXHVjUYdw8JYvjB/o7Eegc3Ma+NUxLLnsK0kJlinPmUHzHGtrk5+CAbVzFOBqpyy3QVUnzTDfC/0XD94/okH+OB+i7g9lolhWIjSnfIb+Eq43ZXOWmwvjyV/qqD+t0e+7mTEM74qP/Ozt8nmC7mRpyu63OB4KnUzFc074SqoyPUAgM+/TJGFo6T44EHnQU4X4z6qannVqgw/U7zCpwcmXV1AubIrvOmkKHazJAR55ePjp5tLBsN8vAqs3NAHdcEHOR2xQ0lsNAFzSUuxFQCFYvXLZJdOj9p4fNq6p0HBGUik2YzaI4xySy91KzhQ0+q1hjxvImRwPRf76tChlRkhRCi74NXZ9qUNeIwP+s5p+3m5nwPdNOHgSLD79n7O9m1n1uDHiMntq4nkYwV5OZ1ENbXxFd4PgrlvavZsyUO4MqYlqqn1O8W/I1dEZq5dXhrbETLaZIbC2Kj/Aa/QM+fqUOHdf0tXAQ1huZ3cmWECWSXy/43j35+Mvq9xws7JKseriZ1pEWKc8qlzNrGPUGcVgOa9cPJYIJsGnJTAUsEcDOEVULO5x0rXBijc1lgXEzQQKhROf8zIV82w8eswc78YX11KYLWQRcgHNJElBxfXr72lS2RBSl07qTKorO2uUDZr3sFhYsvnhLZn0A94KRzJ/7DEGIAhW5ZWFpL8gEwu1aLA9MuWZzNwl8Oze9Y+bX+v9gywRVnoB5I/8kXTXU3141yRLYrIOOz6SOnyHNy4SieqzkBXharjfjqq1q6tklaEbA8Qfm2DaIPs7OTq/nvJBjKfO2H9bH2cCMh1+5gspfycu8f/cuuRmtDjyqZ7uCIMyjdV3a+p3fqmXsRx4C8lujezIFHnQiVTXLXuI1XrwN3+siYYj2HHTvESUx8DlOTXpak9qFRK+L3mgJ1WsD7F4cu1aJoFoYQnu+wGDMOjJM3kiBQWHCcvhJ/HRdxodOQp45YZaOTA22Nb4XKCVxqkbwMYFhzYQYIAnCW8FW14uf98jhUG2zrKhQQ0q0CEq0t5nXyvUyvR8DvD69LU+g3i+HFWQMQ8PqZuHD+sNKAV0+M6EJC0szq7rEr7B5bQ8BcNHzvDMc9eqB5ZCQdTf80Obn4uzjwpYU7SISdtV0QGa9D3Wrh2BDQtpBKxaNFV+/Cy2P/Sv+8s7Ud0Fd74X4+o/TNztWgETUapy+majNQ68Lq3ee0ZO48VEbTZYiH1Co4OlfWef82RWeyUXo7woM03PyapGfikTnQinoNq5z5veLpeMV3HCAMTaZmA1oGLAn7XS3XYsz+XK7VMQsc4XKrmDXOLU/pSXVNUq8dIqTba///3x6LiLS6xs1xuCAYSfcQ3+rQgmu7uvf3THKt5Ooo97TqcbRqxx7EASizaQCBQllG/rYxVapMLgtLbZS64w1MDBMXX+PQpBKNwqUKOf2DDRDUXQf9EhOS0Qj4nTmlA8dzSLz/G1d+Ud8MTy/6ghhdiLpeerGY/UlDOfiuqFsMUU5/UYlP+BAmgRLuNpvrUaLlVkrqDievNVEAwF+4CoM1MZTmjxjJMsKJq+u8Zd7tNCUFy6LiyYXRJQ4VyvEQFFaCGKsxIwQkk7EzZ6LTJq2hUuPhvAW+gQnSG6J+MszC+7QCRHcnqDdyNRJ6T9xyS87A6MDutbzKGvGktpbXqtzWtXb9HsfK2cBMomjN9a4y+TaJLnXxAeX/HWzmf4cR4vALt/P4w4qgKY04ml4ZdLOinFYS6cup3G/1ie4+t1eOnpBNlqGqs75ilzkT4+DsZQxNvaSKJ//6zIbbk/M7LOhFmRc/1R+kBtz7JFGdZm/COotIdvQoXpTqP/1uqEUmCb/QWoGLMwO5ANcHzxdY48IGP5+J+zKOTBFZ4Pid+GTM+Wq12MV/H86xEJptBa6T+p3kgpwLedManBHC2GgNrFpoN2xnrMz9WFWX/8/ygSBkavq2Uv7FdCsLEYLu9LLIvAU0bNRDtzYl+/vXmjpIvuJFYjmI0im6QEYqnIeMsNjXG4vIutIGHijeAG/9EDBozKV5cldkHbLxHh25vT+ZEzbhXlqvpzKJwcEgfNwLAKFeo0/pvEE10XDB+EXRTXtSzJozQKFFAJhMxYkVaCW+E9AL7tMeU8acxidHqzb6lX4691UsDpy/LLRmT+epgW56+5Cw8tB4kMUv6s9lh3eRKbyGs+H/4mQMaYzPTf2OOdokEn+zzgvoD3FqNKk8QqGAXVsqcGdXrT62fSPkR2vROFi68A6se86UxRUk4cajfPyCC4G5wDhD+zNq4jodQ4u4n/m37Lr36n4LIAAsVr02dFi9AiwA81MYs2rm4eDlDNmdMRvEKRHfBwW5DdMNp0jPFZMeARqF/wL4XBfd+EMLBfMzpH5GH6NaW+1vrvMdg+VxDzatk3MXgO3ro3P/DpcC6+Mo4MySJhKJhSR01SGGGp5hPWmrrUgrv3lDnP+HhcI3nt3YqBoVAVTBAQT5iuhTg8nvPtd8ZeYj6w1x6RqGUBrSku7+N1+BaasZvjTk64RoIDlL8brpEcJx3OmY7jLoZsswdtmhfC/G21llXhITOwmvRDDeTTPbyASOa16cF5/A1fZAidJpqju3wYAy9avPR1ya6eNp9K8XYrrtuxlqi+bDKwlfrYdR0RRiKRVTLOH85+ZY7XSmzRpfZBJjaTa81VDcJHpZnZnSQLASGYW9l51ZV/h7eVzTi3Hv6hUsgc/51AqJRTkpbFVLXXszoBL8nBX0u/0jBLT8nH+fJePbrwURT58OY+UieRjd1vs04w0VG5VN2U6MoGZkQzKN/ptz0Q366dxoTGmj7i1NQGHi9GgnquXFYdrCfZBmeb7s0T6yrdlZH5cZuwHFyIJ/kAtGsTg0xH5taAAq44BAk1CPk9KVVbqQzrCUiFdF/6gtlPQ8bHHc1G1W92MXGZ5HEHftyLYs8mbD/9xYRUWkHmlM0zC2ilJlnNgV4bfALpQghxOUoZL7VTqtCHIaQSXm+YUMnpkXybnV+A6xlm2CVy8fn0Xlm2XRa0+zzOa21JWWmixfiPMSCZ7qA4rS93VN3pkpF1s5TonQjisHf7iU9ZGvUPOAKZcR1pbeVf/Ul7OhepGCaId9wOtqo7pJ7yLcBZ0pFkOF28y4zEI/kcUNmutBHaQpBdNM8vjCS6HZRokkeo88TBAjGyG7SR+6vUgTcyK9Imalj0kuxz0wmK+byQU11AiJFk/ya5dNduRClcnU64yGu/ieWSeOos1t3ep+RPIWQ2pyTYVbZltTbsb7NiwSi3AV+8KLWk7LxCnfZUetEM8ThnsSoGH38/nyAwFguJp8FjvlHtcWZuU4hPva0rHfr0UhOOJ/F6vS62FW7KzkmRll2HEc7oUq4fyi5T70Vl7YVIfsPHUCdHesf9Lk7WNVWO75JDkYbMI8TOW8JKVtLY9d6UJRITO8oKo0xS+o99Yy04iniGHAaGj88kEWgwv0OrHdY/nr76DOGNS59hXCGXzTKUvDl9iKpLSWYN1lxIeyywdNpTkhay74w2jFT6NS8qkjo5CxA1yfSYwp6AJIZNKIeEK5PJAW7ORgWgwp0VgzYpqovMrWxbu+DGZ6Lhie1RAqpzm8VUzKJOH3mCzWuTOLsN3VT/dv2eeYe9UjbR8YTBsLz7q60VN1sU51k+um1f8JxD5pPhbhSC8rRaB454tmh6YUWrJI3+GWY0qeWioj/tbkYITOkJaeuGt4JrJvHA+l0Gu7kY7XOaa05alMnRWVCXqFgLIwSY4uF59Ue5SU4QKuc/HamDxbr0x6csCetXGoP7Qn1Bk/J9DsynO/UD6iZ1Hyrz+jit0hDCwi/E9OjgKTbB3ZQKQ/0ZOvevfNHG0NK4Aj3Cp7NpRk07RT1i/S0EL93Ag8GRgKI9CfpajKyK6+Jj/PI1KO5/85VAwz2AwzP8FTBb075IxCXv6T9RVvWT2tUaqxDS92zrGUbWzUYk9mSs82pECH+fkqsDt93VW++4YsR/dHCYcQSYTO/KaBMDj9LSD/J/+z20Kq8XvZUAIHtm9hRPP3ItbuAu2Hm5lkPs92pd7kCxgRs0xOVBnZ13ccdA0aunrwv9SdqElJRC3g+oCu+nXyCgmXUs9yMjTMAIHfxZV+aPKcZeUBWt057Xo85Ks1Ir5gzEHCWqZEhrLZMuF11ziGtFQUds/EESajhagzcKsxamcSZxGth4UII+adPhQkUnx2WyN+4YWR+r3f8MnkyGFuR4zjzxJS8WsQYR5PTyRaD9ixa6Mh741nBHbzfjXHskGDq179xaRNrCIB1z1xRfWfjqw2pHc1zk9xlPpL8sQWAIuETZZhbnmL54rceXVNRvUiKrrqIkeogsl0XXb17ylNb0f4GA9Wd44vffEG8FSZGHEL2fbaTGRcSiCeA8PmA/f6Hz8HCS76fXUHwgwkzSwlI71ekZ7Fapmlk/KC+Hs8hUcw3N2LN5LhkVYyizYFl/uPeVP5lsoJHhhfWvvSWruCUW1ZcJOeuTbrDgywJ/qG07gZJplnTvLcYdNaH0KMYOYMGX+rB4NGPFmQsNaIwlWrfCezxre8zXBrsMT+edVLbLqN1BqB76JH4BvZTqUIMfGwPGEn+EnmTV86fPBaYbFL3DFEhjB45CewkXEAtJxk4/Ms2pPXnaRqdky0HOYdcUcE2zcXq4vaIvW2/v0nHFJH2XXe22ueDmq/18XGtELSq85j9X8q0tcNSSKJIX8FTuJF/Pf8j5PhqG2u+osvsLxYrvvfeVJL+4tkcXcr9JV7v0ERmj/X6fM3NC4j6dS1+9Umr2oPavqiAydTZPLMNRGY23LO9zAVDly7jD+70G5TPPLdhRIl4WxcYjLnM+SNcJ26FOrkrISUtPObIz5Zb3AG612krnpy15RMW+1cQjlnWFI6538qky9axd2oJmHIHP08KyP0ubGO+TQNOYuv2uh17yCIvR8VcStw7o1g0NM60sk+8Tq7YfIBJrtp53GkvzXH7OA0p8/n/u1satf/VJhtR1l8Wa6Gmaug7haSpaCaYQax6ta0mkutlb+eAOSG1aobM81D9A4iS1RRlzBBoVX6tU1S6WE2N9ORY6DfeLRC4l9Rvr5h95XDWB2mR1d4WFudpsgVYwiTwT31ljskD8ZyDOlm5DkGh9N/UB/0AI5Xvb8ZBmai2hQ4BWMqFwYnzxwB26YHSOv9WgY3JXnvoN+2R4rqGVh/LLDMtpFP+SpMGJNWvbIl5SOodbCczW2RKleksPoUeGEzrjtKHVdtZA+kfqO+rVx/iclCqwoopepvJpSTDjT+b9GWylGRF8EDbGlw6eUzmJM95Ovoz+kwLX3c2fTjFeYEsE7vUZm3mqdGJuKh2w9/QGSaqRHs99aScGOdDqkFcACoqdbBoQqqjamhH6Q9ng39JCg3lrGJwd50Qk9ovnqBTr8MME7Ps2wiVfygUmPoUBJJfJWX5Nda0nuncbFkA==")),
        i = 0,
        ()=>o[i++])
          , J = new Set(H(Q))
          , W = new Set(H(Q))
          , V = function(t) {
            let e = [];
            for (; ; ) {
                let r = t();
                if (0 == r)
                    break;
                e.push(function(t, e) {
                    let r = 1 + e()
                      , n = e()
                      , i = function(t) {
                        let e = [];
                        for (; ; ) {
                            let r = t();
                            if (0 == r)
                                break;
                            e.push(r)
                        }
                        return e
                    }(e);
                    return Y(K(i.length, 1 + t, e).map((t,e)=>{
                        let o = t[0]
                          , s = t.slice(1);
                        return Array(i[e]).fill(void 0).map((t,e)=>{
                            let i = e * n;
                            return [o + e * r, s.map(t=>t + i)]
                        }
                        )
                    }
                    ))
                }(r, t))
            }
            for (; ; ) {
                let r = t() - 1;
                if (r < 0)
                    break;
                e.push(K(1 + t(), 1 + r, t).map(t=>[t[0], t.slice(1)]))
            }
            return function(t) {
                let e = {};
                for (let r = 0; r < t.length; r++) {
                    let n = t[r];
                    e[n[0]] = n[1]
                }
                return e
            }(Y(e))
        }(Q)
          , X = (n = H(Q).sort((t,e)=>t - e),
        function t() {
            let e = [];
            for (; ; ) {
                let r = H(Q, n);
                if (0 == r.length)
                    break;
                e.push({
                    set: new Set(r),
                    node: t()
                })
            }
            e.sort((t,e)=>e.set.size - t.set.size);
            let r = Q();
            return {
                branches: e,
                valid: r % 3,
                fe0f: !!(1 & (r = r / 3 | 0)),
                save: 1 == (r >>= 1),
                check: 2 == r
            }
        }());
        function Z(t) {
            return t.filter(t=>65039 != t)
        }
        function $(t) {
            for (let e of t.split(".")) {
                let t = (0,
                S.XL)(e);
                try {
                    for (let e = t.lastIndexOf(95) - 1; e >= 0; e--)
                        if (95 !== t[e])
                            throw Error("underscore only allowed at start");
                    if (t.length >= 4 && t.every(t=>t < 128) && 45 === t[2] && 45 === t[3])
                        throw Error("invalid label extension")
                } catch (t) {
                    throw Error(`Invalid label "${e}": ${t.message}`)
                }
            }
            return t
        }
        let tt = new c.Yd(d)
          , te = new Uint8Array(32);
        function tr(t) {
            if (0 === t.length)
                throw Error("invalid ENS name; empty component");
            return t
        }
        function tn(t) {
            let e = (0,
            S.Y0)($(function(t, e) {
                let r = (0,
                S.XL)(t).reverse()
                  , n = [];
                for (; r.length; ) {
                    let t = function(t, e) {
                        var r;
                        let n, i;
                        let o = X
                          , s = []
                          , a = t.length;
                        for (; a; ) {
                            let e = t[--a];
                            if (!(o = null === (r = o.branches.find(t=>t.set.has(e))) || void 0 === r ? void 0 : r.node))
                                break;
                            if (o.save)
                                i = e;
                            else if (o.check && e === i)
                                break;
                            s.push(e),
                            o.fe0f && (s.push(65039),
                            a > 0 && 65039 == t[a - 1] && a--),
                            o.valid && (n = s.slice(),
                            2 == o.valid && n.splice(1, 1),
                            t.length = a)
                        }
                        return n
                    }(r);
                    if (t) {
                        n.push(...e(t));
                        continue
                    }
                    let i = r.pop();
                    if (J.has(i)) {
                        n.push(i);
                        continue
                    }
                    if (W.has(i))
                        continue;
                    let o = V[i];
                    if (o) {
                        n.push(...o);
                        continue
                    }
                    throw Error(`Disallowed codepoint: 0x${i.toString(16).toUpperCase()}`)
                }
                return $(String.fromCodePoint(...n).normalize("NFC"))
            }(t, Z)))
              , r = [];
            if (0 === t.length)
                return r;
            let n = 0;
            for (let t = 0; t < e.length; t++)
                46 === e[t] && (r.push(tr(e.slice(n, t))),
                n = t + 1);
            if (n >= e.length)
                throw Error("invalid ENS name; empty component");
            return r.push(tr(e.slice(n))),
            r
        }
        function ti(t) {
            "string" != typeof t && tt.throwArgumentError("invalid ENS name; not a string", "name", t);
            let e = te
              , r = tn(t);
            for (; r.length; )
                e = (0,
                h.w)((0,
                u.zo)([e, (0,
                h.w)(r.pop())]));
            return (0,
            u.Dv)(e)
        }
        te.fill(0);
        let to = new c.Yd("networks/5.7.1");
        function ts(t) {
            let e = function(e, r) {
                null == r && (r = {});
                let n = [];
                if (e.InfuraProvider && "-" !== r.infura)
                    try {
                        n.push(new e.InfuraProvider(t,r.infura))
                    } catch (t) {}
                if (e.EtherscanProvider && "-" !== r.etherscan)
                    try {
                        n.push(new e.EtherscanProvider(t,r.etherscan))
                    } catch (t) {}
                if (e.AlchemyProvider && "-" !== r.alchemy)
                    try {
                        n.push(new e.AlchemyProvider(t,r.alchemy))
                    } catch (t) {}
                if (e.PocketProvider && "-" !== r.pocket)
                    try {
                        let i = new e.PocketProvider(t,r.pocket);
                        i.network && -1 === ["goerli", "ropsten", "rinkeby", "sepolia"].indexOf(i.network.name) && n.push(i)
                    } catch (t) {}
                if (e.CloudflareProvider && "-" !== r.cloudflare)
                    try {
                        n.push(new e.CloudflareProvider(t))
                    } catch (t) {}
                if (e.AnkrProvider && "-" !== r.ankr)
                    try {
                        let i = new e.AnkrProvider(t,r.ankr);
                        i.network && -1 === ["ropsten"].indexOf(i.network.name) && n.push(i)
                    } catch (t) {}
                if (0 === n.length)
                    return null;
                if (e.FallbackProvider) {
                    let i = 1;
                    return null != r.quorum ? i = r.quorum : "homestead" === t && (i = 2),
                    new e.FallbackProvider(n,i)
                }
                return n[0]
            };
            return e.renetwork = function(t) {
                return ts(t)
            }
            ,
            e
        }
        function ta(t, e) {
            let r = function(r, n) {
                return r.JsonRpcProvider ? new r.JsonRpcProvider(t,e) : null
            };
            return r.renetwork = function(e) {
                return ta(t, e)
            }
            ,
            r
        }
        let tu = {
            chainId: 1,
            ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
            name: "homestead",
            _defaultProvider: ts("homestead")
        }
          , tl = {
            chainId: 3,
            ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
            name: "ropsten",
            _defaultProvider: ts("ropsten")
        }
          , th = {
            chainId: 63,
            name: "classicMordor",
            _defaultProvider: ta("https://www.ethercluster.com/mordor", "classicMordor")
        }
          , tf = {
            unspecified: {
                chainId: 0,
                name: "unspecified"
            },
            homestead: tu,
            mainnet: tu,
            morden: {
                chainId: 2,
                name: "morden"
            },
            ropsten: tl,
            testnet: tl,
            rinkeby: {
                chainId: 4,
                ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
                name: "rinkeby",
                _defaultProvider: ts("rinkeby")
            },
            kovan: {
                chainId: 42,
                name: "kovan",
                _defaultProvider: ts("kovan")
            },
            goerli: {
                chainId: 5,
                ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
                name: "goerli",
                _defaultProvider: ts("goerli")
            },
            kintsugi: {
                chainId: 1337702,
                name: "kintsugi"
            },
            sepolia: {
                chainId: 11155111,
                name: "sepolia",
                _defaultProvider: ts("sepolia")
            },
            classic: {
                chainId: 61,
                name: "classic",
                _defaultProvider: ta("https://www.ethercluster.com/etc", "classic")
            },
            classicMorden: {
                chainId: 62,
                name: "classicMorden"
            },
            classicMordor: th,
            classicTestnet: th,
            classicKotti: {
                chainId: 6,
                name: "classicKotti",
                _defaultProvider: ta("https://www.ethercluster.com/kotti", "classicKotti")
            },
            xdai: {
                chainId: 100,
                name: "xdai"
            },
            matic: {
                chainId: 137,
                name: "matic",
                _defaultProvider: ts("matic")
            },
            maticmum: {
                chainId: 80001,
                name: "maticmum"
            },
            optimism: {
                chainId: 10,
                name: "optimism",
                _defaultProvider: ts("optimism")
            },
            "optimism-kovan": {
                chainId: 69,
                name: "optimism-kovan"
            },
            "optimism-goerli": {
                chainId: 420,
                name: "optimism-goerli"
            },
            arbitrum: {
                chainId: 42161,
                name: "arbitrum"
            },
            "arbitrum-rinkeby": {
                chainId: 421611,
                name: "arbitrum-rinkeby"
            },
            "arbitrum-goerli": {
                chainId: 421613,
                name: "arbitrum-goerli"
            },
            bnb: {
                chainId: 56,
                name: "bnb"
            },
            bnbt: {
                chainId: 97,
                name: "bnbt"
            }
        };
        var tc = r(83699)
          , td = r.n(tc);
        function tp(t) {
            return "0x" + td().sha256().update((0,
            u.lE)(t)).digest("hex")
        }
        new c.Yd("sha2/5.7.0");
        var tm = r(1192)
          , tg = r.n(tm)
          , tv = r(86160)
          , ty = function(t, e, r, n) {
            return new (r || (r = Promise))(function(i, o) {
                function s(t) {
                    try {
                        u(n.next(t))
                    } catch (t) {
                        o(t)
                    }
                }
                function a(t) {
                    try {
                        u(n.throw(t))
                    } catch (t) {
                        o(t)
                    }
                }
                function u(t) {
                    var e;
                    t.done ? i(t.value) : ((e = t.value)instanceof r ? e : new r(function(t) {
                        t(e)
                    }
                    )).then(s, a)
                }
                u((n = n.apply(t, e || [])).next())
            }
            )
        };
        let tb = new c.Yd(F.i);
        function tA(t) {
            return null == t ? "null" : (32 !== (0,
            u.E1)(t) && tb.throwArgumentError("invalid topic", "topic", t),
            t.toLowerCase())
        }
        function tw(t) {
            for (t = t.slice(); t.length > 0 && null == t[t.length - 1]; )
                t.pop();
            return t.map(t=>{
                if (!Array.isArray(t))
                    return tA(t);
                {
                    let e = {};
                    t.forEach(t=>{
                        e[tA(t)] = !0
                    }
                    );
                    let r = Object.keys(e);
                    return r.sort(),
                    r.join("|")
                }
            }
            ).join("&")
        }
        function tE(t) {
            if ("string" == typeof t) {
                if (t = t.toLowerCase(),
                32 === (0,
                u.E1)(t))
                    return "tx:" + t;
                if (-1 === t.indexOf(":"))
                    return t
            } else if (Array.isArray(t))
                return "filter:*:" + tw(t);
            else if (z.Sg.isForkEvent(t))
                throw tb.warn("not implemented"),
                Error("not implemented");
            else if (t && "object" == typeof t)
                return "filter:" + (t.address || "*") + ":" + tw(t.topics || []);
            throw Error("invalid event - " + t)
        }
        function t_() {
            return new Date().getTime()
        }
        function tM(t) {
            return new Promise(e=>{
                setTimeout(e, t)
            }
            )
        }
        let tk = ["block", "network", "pending", "poll"];
        class tN {
            constructor(t, e, r) {
                (0,
                f.zG)(this, "tag", t),
                (0,
                f.zG)(this, "listener", e),
                (0,
                f.zG)(this, "once", r),
                this._lastBlockNumber = -2,
                this._inflight = !1
            }
            get event() {
                switch (this.type) {
                case "tx":
                    return this.hash;
                case "filter":
                    return this.filter
                }
                return this.tag
            }
            get type() {
                return this.tag.split(":")[0]
            }
            get hash() {
                let t = this.tag.split(":");
                return "tx" !== t[0] ? null : t[1]
            }
            get filter() {
                var t;
                let e = this.tag.split(":");
                if ("filter" !== e[0])
                    return null;
                let r = e[1]
                  , n = "" === (t = e[2]) ? [] : t.split(/&/g).map(t=>{
                    if ("" === t)
                        return [];
                    let e = t.split("|").map(t=>"null" === t ? null : t);
                    return 1 === e.length ? e[0] : e
                }
                )
                  , i = {};
                return n.length > 0 && (i.topics = n),
                r && "*" !== r && (i.address = r),
                i
            }
            pollable() {
                return this.tag.indexOf(":") >= 0 || tk.indexOf(this.tag) >= 0
            }
        }
        let tx = {
            0: {
                symbol: "btc",
                p2pkh: 0,
                p2sh: 5,
                prefix: "bc"
            },
            2: {
                symbol: "ltc",
                p2pkh: 48,
                p2sh: 50,
                prefix: "ltc"
            },
            3: {
                symbol: "doge",
                p2pkh: 30,
                p2sh: 22
            },
            60: {
                symbol: "eth",
                ilk: "eth"
            },
            61: {
                symbol: "etc",
                ilk: "eth"
            },
            700: {
                symbol: "xdai",
                ilk: "eth"
            }
        };
        function tP(t) {
            return (0,
            u.$m)(a.O$.from(t).toHexString(), 32)
        }
        function tI(t) {
            return G.encode((0,
            u.zo)([t, (0,
            u.p3)(tp(tp(t)), 0, 4)]))
        }
        let tS = RegExp("^(ipfs)://(.*)$", "i")
          , tR = [RegExp("^(https)://(.*)$", "i"), RegExp("^(data):(.*)$", "i"), tS, RegExp("^eip155:[0-9]+/(erc[0-9]+):(.*)$", "i")];
        function tC(t, e) {
            try {
                return (0,
                S.ZN)(tO(t, e))
            } catch (t) {}
            return null
        }
        function tO(t, e) {
            if ("0x" === t)
                return null;
            let r = a.O$.from((0,
            u.p3)(t, e, e + 32)).toNumber()
              , n = a.O$.from((0,
            u.p3)(t, r, r + 32)).toNumber();
            return (0,
            u.p3)(t, r + 32, r + 32 + n)
        }
        function tT(t) {
            return t.match(/^ipfs:\/\/ipfs\//i) ? t = t.substring(12) : t.match(/^ipfs:\/\//i) ? t = t.substring(7) : tb.throwArgumentError("unsupported IPFS format", "link", t),
            `https://gateway.ipfs.io/ipfs/${t}`
        }
        function tB(t) {
            let e = (0,
            u.lE)(t);
            if (e.length > 32)
                throw Error("internal; should not happen");
            let r = new Uint8Array(32);
            return r.set(e, 32 - e.length),
            r
        }
        function tD(t) {
            let e = []
              , r = 0;
            for (let n = 0; n < t.length; n++)
                e.push(null),
                r += 32;
            for (let n = 0; n < t.length; n++) {
                let i = (0,
                u.lE)(t[n]);
                e[n] = tB(r),
                e.push(tB(i.length)),
                e.push(function(t) {
                    if (t.length % 32 == 0)
                        return t;
                    let e = new Uint8Array(32 * Math.ceil(t.length / 32));
                    return e.set(t),
                    e
                }(i)),
                r += 32 + 32 * Math.ceil(i.length / 32)
            }
            return (0,
            u.xs)(e)
        }
        class tL {
            constructor(t, e, r, n) {
                (0,
                f.zG)(this, "provider", t),
                (0,
                f.zG)(this, "name", r),
                (0,
                f.zG)(this, "address", t.formatter.address(e)),
                (0,
                f.zG)(this, "_resolvedAddress", n)
            }
            supportsWildcard() {
                return this._supportsEip2544 || (this._supportsEip2544 = this.provider.call({
                    to: this.address,
                    data: "0x01ffc9a79061b92300000000000000000000000000000000000000000000000000000000"
                }).then(t=>a.O$.from(t).eq(1)).catch(t=>{
                    if (t.code === c.Yd.errors.CALL_EXCEPTION)
                        return !1;
                    throw this._supportsEip2544 = null,
                    t
                }
                )),
                this._supportsEip2544
            }
            _fetch(t, e) {
                return ty(this, void 0, void 0, function*() {
                    let r = {
                        to: this.address,
                        ccipReadEnabled: !0,
                        data: (0,
                        u.xs)([t, ti(this.name), e || "0x"])
                    }
                      , n = !1;
                    if (yield this.supportsWildcard()) {
                        var i;
                        n = !0,
                        r.data = (0,
                        u.xs)(["0x9061b923", tD([(i = this.name,
                        (0,
                        u.Dv)((0,
                        u.zo)(tn(i).map(t=>{
                            if (t.length > 63)
                                throw Error("invalid DNS encoded entry; length exceeds 63 bytes");
                            let e = new Uint8Array(t.length + 1);
                            return e.set(t, 1),
                            e[0] = e.length - 1,
                            e
                        }
                        ))) + "00"), r.data])])
                    }
                    try {
                        let t = yield this.provider.call(r);
                        return (0,
                        u.lE)(t).length % 32 == 4 && tb.throwError("resolver threw error", c.Yd.errors.CALL_EXCEPTION, {
                            transaction: r,
                            data: t
                        }),
                        n && (t = tO(t, 0)),
                        t
                    } catch (t) {
                        if (t.code === c.Yd.errors.CALL_EXCEPTION)
                            return null;
                        throw t
                    }
                })
            }
            _fetchBytes(t, e) {
                return ty(this, void 0, void 0, function*() {
                    let r = yield this._fetch(t, e);
                    return null != r ? tO(r, 0) : null
                })
            }
            _getAddress(t, e) {
                let r = tx[String(t)];
                if (null == r && tb.throwError(`unsupported coin type: ${t}`, c.Yd.errors.UNSUPPORTED_OPERATION, {
                    operation: `getAddress(${t})`
                }),
                "eth" === r.ilk)
                    return this.provider.formatter.address(e);
                let n = (0,
                u.lE)(e);
                if (null != r.p2pkh) {
                    let t = e.match(/^0x76a9([0-9a-f][0-9a-f])([0-9a-f]*)88ac$/);
                    if (t) {
                        let e = parseInt(t[1], 16);
                        if (t[2].length === 2 * e && e >= 1 && e <= 75)
                            return tI((0,
                            u.zo)([[r.p2pkh], "0x" + t[2]]))
                    }
                }
                if (null != r.p2sh) {
                    let t = e.match(/^0xa9([0-9a-f][0-9a-f])([0-9a-f]*)87$/);
                    if (t) {
                        let e = parseInt(t[1], 16);
                        if (t[2].length === 2 * e && e >= 1 && e <= 75)
                            return tI((0,
                            u.zo)([[r.p2sh], "0x" + t[2]]))
                    }
                }
                if (null != r.prefix) {
                    let t = n[1]
                      , e = n[0];
                    if (0 === e ? 20 !== t && 32 !== t && (e = -1) : e = -1,
                    e >= 0 && n.length === 2 + t && t >= 1 && t <= 75) {
                        let t = tg().toWords(n.slice(2));
                        return t.unshift(e),
                        tg().encode(r.prefix, t)
                    }
                }
                return null
            }
            getAddress(t) {
                return ty(this, void 0, void 0, function*() {
                    if (null == t && (t = 60),
                    60 === t)
                        try {
                            let t = yield this._fetch("0x3b3b57de");
                            if ("0x" === t || "0x0000000000000000000000000000000000000000000000000000000000000000" === t)
                                return null;
                            return this.provider.formatter.callAddress(t)
                        } catch (t) {
                            if (t.code === c.Yd.errors.CALL_EXCEPTION)
                                return null;
                            throw t
                        }
                    let e = yield this._fetchBytes("0xf1cb7e06", tP(t));
                    if (null == e || "0x" === e)
                        return null;
                    let r = this._getAddress(t, e);
                    return null == r && tb.throwError("invalid or unsupported coin data", c.Yd.errors.UNSUPPORTED_OPERATION, {
                        operation: `getAddress(${t})`,
                        coinType: t,
                        data: e
                    }),
                    r
                })
            }
            getAvatar() {
                return ty(this, void 0, void 0, function*() {
                    let t = [{
                        type: "name",
                        content: this.name
                    }];
                    try {
                        let e = yield this.getText("avatar");
                        if (null == e)
                            return null;
                        for (let r = 0; r < tR.length; r++) {
                            let n = e.match(tR[r]);
                            if (null == n)
                                continue;
                            let i = n[1].toLowerCase();
                            switch (i) {
                            case "https":
                                return t.push({
                                    type: "url",
                                    content: e
                                }),
                                {
                                    linkage: t,
                                    url: e
                                };
                            case "data":
                                return t.push({
                                    type: "data",
                                    content: e
                                }),
                                {
                                    linkage: t,
                                    url: e
                                };
                            case "ipfs":
                                return t.push({
                                    type: "ipfs",
                                    content: e
                                }),
                                {
                                    linkage: t,
                                    url: tT(e)
                                };
                            case "erc721":
                            case "erc1155":
                                {
                                    let r = "erc721" === i ? "0xc87b56dd" : "0x0e89341c";
                                    t.push({
                                        type: i,
                                        content: e
                                    });
                                    let o = this._resolvedAddress || (yield this.getAddress())
                                      , s = (n[2] || "").split("/");
                                    if (2 !== s.length)
                                        return null;
                                    let l = yield this.provider.formatter.address(s[0])
                                      , h = (0,
                                    u.$m)(a.O$.from(s[1]).toHexString(), 32);
                                    if ("erc721" === i) {
                                        let e = this.provider.formatter.callAddress((yield this.provider.call({
                                            to: l,
                                            data: (0,
                                            u.xs)(["0x6352211e", h])
                                        })));
                                        if (o !== e)
                                            return null;
                                        t.push({
                                            type: "owner",
                                            content: e
                                        })
                                    } else if ("erc1155" === i) {
                                        let e = a.O$.from((yield this.provider.call({
                                            to: l,
                                            data: (0,
                                            u.xs)(["0x00fdd58e", (0,
                                            u.$m)(o, 32), h])
                                        })));
                                        if (e.isZero())
                                            return null;
                                        t.push({
                                            type: "balance",
                                            content: e.toString()
                                        })
                                    }
                                    let f = {
                                        to: this.provider.formatter.address(s[0]),
                                        data: (0,
                                        u.xs)([r, h])
                                    }
                                      , c = tC((yield this.provider.call(f)), 0);
                                    if (null == c)
                                        return null;
                                    t.push({
                                        type: "metadata-url-base",
                                        content: c
                                    }),
                                    "erc1155" === i && (c = c.replace("{id}", h.substring(2)),
                                    t.push({
                                        type: "metadata-url-expanded",
                                        content: c
                                    })),
                                    c.match(/^ipfs:/i) && (c = tT(c)),
                                    t.push({
                                        type: "metadata-url",
                                        content: c
                                    });
                                    let d = yield L(c);
                                    if (!d)
                                        return null;
                                    t.push({
                                        type: "metadata",
                                        content: JSON.stringify(d)
                                    });
                                    let p = d.image;
                                    if ("string" != typeof p)
                                        return null;
                                    if (p.match(/^(https:\/\/|data:)/i))
                                        ;
                                    else {
                                        let e = p.match(tS);
                                        if (null == e)
                                            return null;
                                        t.push({
                                            type: "url-ipfs",
                                            content: p
                                        }),
                                        p = tT(p)
                                    }
                                    return t.push({
                                        type: "url",
                                        content: p
                                    }),
                                    {
                                        linkage: t,
                                        url: p
                                    }
                                }
                            }
                        }
                    } catch (t) {}
                    return null
                })
            }
            getContentHash() {
                return ty(this, void 0, void 0, function*() {
                    let t = yield this._fetchBytes("0xbc1c58d1");
                    if (null == t || "0x" === t)
                        return null;
                    let e = t.match(/^0xe3010170(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/);
                    if (e) {
                        let t = parseInt(e[3], 16);
                        if (e[4].length === 2 * t)
                            return "ipfs://" + G.encode("0x" + e[1])
                    }
                    let r = t.match(/^0xe5010172(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/);
                    if (r) {
                        let t = parseInt(r[3], 16);
                        if (r[4].length === 2 * t)
                            return "ipns://" + G.encode("0x" + r[1])
                    }
                    let n = t.match(/^0xe40101fa011b20([0-9a-f]*)$/);
                    if (n && 64 === n[1].length)
                        return "bzz://" + n[1];
                    let i = t.match(/^0x90b2c605([0-9a-f]*)$/);
                    if (i && 68 === i[1].length) {
                        let t = {
                            "=": "",
                            "+": "-",
                            "/": "_"
                        };
                        return "sia://" + O("0x" + i[1]).replace(/[=+\/]/g, e=>t[e])
                    }
                    return tb.throwError("invalid or unsupported content hash data", c.Yd.errors.UNSUPPORTED_OPERATION, {
                        operation: "getContentHash()",
                        data: t
                    })
                })
            }
            getText(t) {
                return ty(this, void 0, void 0, function*() {
                    let e = (0,
                    S.Y0)(t);
                    (e = (0,
                    u.zo)([tP(64), tP(e.length), e])).length % 32 != 0 && (e = (0,
                    u.zo)([e, (0,
                    u.$m)("0x", 32 - t.length % 32)]));
                    let r = yield this._fetchBytes("0x59d1d43c", (0,
                    u.Dv)(e));
                    return null == r || "0x" === r ? null : (0,
                    S.ZN)(r)
                })
            }
        }
        let tU = null
          , tF = 1;
        class tz extends z.zt {
            constructor(t) {
                if (super(),
                this._events = [],
                this._emitted = {
                    block: -2
                },
                this.disableCcipRead = !1,
                this.formatter = new.target.getFormatter(),
                (0,
                f.zG)(this, "anyNetwork", "any" === t),
                this.anyNetwork && (t = this.detectNetwork()),
                t instanceof Promise)
                    this._networkPromise = t,
                    t.catch(t=>{}
                    ),
                    this._ready().catch(t=>{}
                    );
                else {
                    let e = (0,
                    f.tu)(new.target, "getNetwork")(t);
                    e ? ((0,
                    f.zG)(this, "_network", e),
                    this.emit("network", e, null)) : tb.throwArgumentError("invalid network", "network", t)
                }
                this._maxInternalBlockNumber = -1024,
                this._lastBlockNumber = -2,
                this._maxFilterBlockRange = 10,
                this._pollingInterval = 4e3,
                this._fastQueryDate = 0
            }
            _ready() {
                return ty(this, void 0, void 0, function*() {
                    if (null == this._network) {
                        let t = null;
                        if (this._networkPromise)
                            try {
                                t = yield this._networkPromise
                            } catch (t) {}
                        null == t && (t = yield this.detectNetwork()),
                        t || tb.throwError("no network detected", c.Yd.errors.UNKNOWN_ERROR, {}),
                        null == this._network && (this.anyNetwork ? this._network = t : (0,
                        f.zG)(this, "_network", t),
                        this.emit("network", t, null))
                    }
                    return this._network
                })
            }
            get ready() {
                return U(()=>this._ready().then(t=>t, t=>{
                    if (t.code !== c.Yd.errors.NETWORK_ERROR || "noNetwork" !== t.event)
                        throw t
                }
                ))
            }
            static getFormatter() {
                return null == tU && (tU = new tv.Mb),
                tU
            }
            static getNetwork(t) {
                return function(t) {
                    if (null == t)
                        return null;
                    if ("number" == typeof t) {
                        for (let e in tf) {
                            let r = tf[e];
                            if (r.chainId === t)
                                return {
                                    name: r.name,
                                    chainId: r.chainId,
                                    ensAddress: r.ensAddress || null,
                                    _defaultProvider: r._defaultProvider || null
                                }
                        }
                        return {
                            chainId: t,
                            name: "unknown"
                        }
                    }
                    if ("string" == typeof t) {
                        let e = tf[t];
                        return null == e ? null : {
                            name: e.name,
                            chainId: e.chainId,
                            ensAddress: e.ensAddress,
                            _defaultProvider: e._defaultProvider || null
                        }
                    }
                    let e = tf[t.name];
                    if (!e)
                        return "number" != typeof t.chainId && to.throwArgumentError("invalid network chainId", "network", t),
                        t;
                    0 !== t.chainId && t.chainId !== e.chainId && to.throwArgumentError("network chainId mismatch", "network", t);
                    let r = t._defaultProvider || null;
                    if (null == r && e._defaultProvider) {
                        var n;
                        r = (n = e._defaultProvider) && "function" == typeof n.renetwork ? e._defaultProvider.renetwork(t) : e._defaultProvider
                    }
                    return {
                        name: t.name,
                        chainId: e.chainId,
                        ensAddress: t.ensAddress || e.ensAddress || null,
                        _defaultProvider: r
                    }
                }(null == t ? "homestead" : t)
            }
            ccipReadFetch(t, e, r) {
                return ty(this, void 0, void 0, function*() {
                    if (this.disableCcipRead || 0 === r.length)
                        return null;
                    let n = t.to.toLowerCase()
                      , i = e.toLowerCase()
                      , o = [];
                    for (let t = 0; t < r.length; t++) {
                        let e = r[t]
                          , s = e.replace("{sender}", n).replace("{data}", i)
                          , a = e.indexOf("{data}") >= 0 ? null : JSON.stringify({
                            data: i,
                            sender: n
                        })
                          , u = yield L({
                            url: s,
                            errorPassThrough: !0
                        }, a, (t,e)=>(t.status = e.statusCode,
                        t));
                        if (u.data)
                            return u.data;
                        let l = u.message || "unknown error";
                        if (u.status >= 400 && u.status < 500)
                            return tb.throwError(`response not found during CCIP fetch: ${l}`, c.Yd.errors.SERVER_ERROR, {
                                url: e,
                                errorMessage: l
                            });
                        o.push(l)
                    }
                    return tb.throwError(`error encountered during CCIP fetch: ${o.map(t=>JSON.stringify(t)).join(", ")}`, c.Yd.errors.SERVER_ERROR, {
                        urls: r,
                        errorMessages: o
                    })
                })
            }
            _getInternalBlockNumber(t) {
                return ty(this, void 0, void 0, function*() {
                    if (yield this._ready(),
                    t > 0)
                        for (; this._internalBlockNumber; ) {
                            let e = this._internalBlockNumber;
                            try {
                                let r = yield e;
                                if (t_() - r.respTime <= t)
                                    return r.blockNumber;
                                break
                            } catch (t) {
                                if (this._internalBlockNumber === e)
                                    break
                            }
                        }
                    let e = t_()
                      , r = (0,
                    f.mE)({
                        blockNumber: this.perform("getBlockNumber", {}),
                        networkError: this.getNetwork().then(t=>null, t=>t)
                    }).then(({blockNumber: t, networkError: n})=>{
                        if (n)
                            throw this._internalBlockNumber === r && (this._internalBlockNumber = null),
                            n;
                        let i = t_();
                        return (t = a.O$.from(t).toNumber()) < this._maxInternalBlockNumber && (t = this._maxInternalBlockNumber),
                        this._maxInternalBlockNumber = t,
                        this._setFastBlockNumber(t),
                        {
                            blockNumber: t,
                            reqTime: e,
                            respTime: i
                        }
                    }
                    );
                    return this._internalBlockNumber = r,
                    r.catch(t=>{
                        this._internalBlockNumber === r && (this._internalBlockNumber = null)
                    }
                    ),
                    (yield r).blockNumber
                })
            }
            poll() {
                return ty(this, void 0, void 0, function*() {
                    let t = tF++
                      , e = []
                      , r = null;
                    try {
                        r = yield this._getInternalBlockNumber(100 + this.pollingInterval / 2)
                    } catch (t) {
                        this.emit("error", t);
                        return
                    }
                    if (this._setFastBlockNumber(r),
                    this.emit("poll", t, r),
                    r === this._lastBlockNumber) {
                        this.emit("didPoll", t);
                        return
                    }
                    if (-2 === this._emitted.block && (this._emitted.block = r - 1),
                    Math.abs(this._emitted.block - r) > 1e3)
                        tb.warn(`network block skew detected; skipping block events (emitted=${this._emitted.block} blockNumber${r})`),
                        this.emit("error", tb.makeError("network block skew detected", c.Yd.errors.NETWORK_ERROR, {
                            blockNumber: r,
                            event: "blockSkew",
                            previousBlockNumber: this._emitted.block
                        })),
                        this.emit("block", r);
                    else
                        for (let t = this._emitted.block + 1; t <= r; t++)
                            this.emit("block", t);
                    this._emitted.block !== r && (this._emitted.block = r,
                    Object.keys(this._emitted).forEach(t=>{
                        if ("block" === t)
                            return;
                        let e = this._emitted[t];
                        "pending" !== e && r - e > 12 && delete this._emitted[t]
                    }
                    )),
                    -2 === this._lastBlockNumber && (this._lastBlockNumber = r - 1),
                    this._events.forEach(t=>{
                        switch (t.type) {
                        case "tx":
                            {
                                let r = t.hash
                                  , n = this.getTransactionReceipt(r).then(t=>(t && null != t.blockNumber && (this._emitted["t:" + r] = t.blockNumber,
                                this.emit(r, t)),
                                null)).catch(t=>{
                                    this.emit("error", t)
                                }
                                );
                                e.push(n);
                                break
                            }
                        case "filter":
                            if (!t._inflight) {
                                t._inflight = !0,
                                -2 === t._lastBlockNumber && (t._lastBlockNumber = r - 1);
                                let n = t.filter;
                                n.fromBlock = t._lastBlockNumber + 1,
                                n.toBlock = r;
                                let i = n.toBlock - this._maxFilterBlockRange;
                                i > n.fromBlock && (n.fromBlock = i),
                                n.fromBlock < 0 && (n.fromBlock = 0);
                                let o = this.getLogs(n).then(e=>{
                                    t._inflight = !1,
                                    0 !== e.length && e.forEach(e=>{
                                        e.blockNumber > t._lastBlockNumber && (t._lastBlockNumber = e.blockNumber),
                                        this._emitted["b:" + e.blockHash] = e.blockNumber,
                                        this._emitted["t:" + e.transactionHash] = e.blockNumber,
                                        this.emit(n, e)
                                    }
                                    )
                                }
                                ).catch(e=>{
                                    this.emit("error", e),
                                    t._inflight = !1
                                }
                                );
                                e.push(o)
                            }
                        }
                    }
                    ),
                    this._lastBlockNumber = r,
                    Promise.all(e).then(()=>{
                        this.emit("didPoll", t)
                    }
                    ).catch(t=>{
                        this.emit("error", t)
                    }
                    )
                })
            }
            resetEventsBlock(t) {
                this._lastBlockNumber = t - 1,
                this.polling && this.poll()
            }
            get network() {
                return this._network
            }
            detectNetwork() {
                return ty(this, void 0, void 0, function*() {
                    return tb.throwError("provider does not support network detection", c.Yd.errors.UNSUPPORTED_OPERATION, {
                        operation: "provider.detectNetwork"
                    })
                })
            }
            getNetwork() {
                return ty(this, void 0, void 0, function*() {
                    let t = yield this._ready()
                      , e = yield this.detectNetwork();
                    if (t.chainId !== e.chainId) {
                        if (this.anyNetwork)
                            return this._network = e,
                            this._lastBlockNumber = -2,
                            this._fastBlockNumber = null,
                            this._fastBlockNumberPromise = null,
                            this._fastQueryDate = 0,
                            this._emitted.block = -2,
                            this._maxInternalBlockNumber = -1024,
                            this._internalBlockNumber = null,
                            this.emit("network", e, t),
                            yield tM(0),
                            this._network;
                        let r = tb.makeError("underlying network changed", c.Yd.errors.NETWORK_ERROR, {
                            event: "changed",
                            network: t,
                            detectedNetwork: e
                        });
                        throw this.emit("error", r),
                        r
                    }
                    return t
                })
            }
            get blockNumber() {
                return this._getInternalBlockNumber(100 + this.pollingInterval / 2).then(t=>{
                    this._setFastBlockNumber(t)
                }
                , t=>{}
                ),
                null != this._fastBlockNumber ? this._fastBlockNumber : -1
            }
            get polling() {
                return null != this._poller
            }
            set polling(t) {
                t && !this._poller ? (this._poller = setInterval(()=>{
                    this.poll()
                }
                , this.pollingInterval),
                this._bootstrapPoll || (this._bootstrapPoll = setTimeout(()=>{
                    this.poll(),
                    this._bootstrapPoll = setTimeout(()=>{
                        this._poller || this.poll(),
                        this._bootstrapPoll = null
                    }
                    , this.pollingInterval)
                }
                , 0))) : !t && this._poller && (clearInterval(this._poller),
                this._poller = null)
            }
            get pollingInterval() {
                return this._pollingInterval
            }
            set pollingInterval(t) {
                if ("number" != typeof t || t <= 0 || parseInt(String(t)) != t)
                    throw Error("invalid polling interval");
                this._pollingInterval = t,
                this._poller && (clearInterval(this._poller),
                this._poller = setInterval(()=>{
                    this.poll()
                }
                , this._pollingInterval))
            }
            _getFastBlockNumber() {
                let t = t_();
                return t - this._fastQueryDate > 2 * this._pollingInterval && (this._fastQueryDate = t,
                this._fastBlockNumberPromise = this.getBlockNumber().then(t=>((null == this._fastBlockNumber || t > this._fastBlockNumber) && (this._fastBlockNumber = t),
                this._fastBlockNumber))),
                this._fastBlockNumberPromise
            }
            _setFastBlockNumber(t) {
                (null == this._fastBlockNumber || !(t < this._fastBlockNumber)) && (this._fastQueryDate = t_(),
                (null == this._fastBlockNumber || t > this._fastBlockNumber) && (this._fastBlockNumber = t,
                this._fastBlockNumberPromise = Promise.resolve(t)))
            }
            waitForTransaction(t, e, r) {
                return ty(this, void 0, void 0, function*() {
                    return this._waitForTransaction(t, null == e ? 1 : e, r || 0, null)
                })
            }
            _waitForTransaction(t, e, r, n) {
                return ty(this, void 0, void 0, function*() {
                    let i = yield this.getTransactionReceipt(t);
                    return (i ? i.confirmations : 0) >= e ? i : new Promise((i,o)=>{
                        let s = []
                          , a = !1
                          , u = function() {
                            return !!a || (a = !0,
                            s.forEach(t=>{
                                t()
                            }
                            ),
                            !1)
                        }
                          , l = t=>{
                            t.confirmations < e || u() || i(t)
                        }
                        ;
                        if (this.on(t, l),
                        s.push(()=>{
                            this.removeListener(t, l)
                        }
                        ),
                        n) {
                            let r = n.startBlock
                              , i = null
                              , l = s=>ty(this, void 0, void 0, function*() {
                                a || (yield tM(1e3),
                                this.getTransactionCount(n.from).then(h=>ty(this, void 0, void 0, function*() {
                                    if (!a) {
                                        if (h <= n.nonce)
                                            r = s;
                                        else {
                                            {
                                                let e = yield this.getTransaction(t);
                                                if (e && null != e.blockNumber)
                                                    return
                                            }
                                            for (null == i && (i = r - 3) < n.startBlock && (i = n.startBlock); i <= s; ) {
                                                if (a)
                                                    return;
                                                let r = yield this.getBlockWithTransactions(i);
                                                for (let i = 0; i < r.transactions.length; i++) {
                                                    let s = r.transactions[i];
                                                    if (s.hash === t)
                                                        return;
                                                    if (s.from === n.from && s.nonce === n.nonce) {
                                                        if (a)
                                                            return;
                                                        let r = yield this.waitForTransaction(s.hash, e);
                                                        if (u())
                                                            return;
                                                        let i = "replaced";
                                                        s.data === n.data && s.to === n.to && s.value.eq(n.value) ? i = "repriced" : "0x" === s.data && s.from === s.to && s.value.isZero() && (i = "cancelled"),
                                                        o(tb.makeError("transaction was replaced", c.Yd.errors.TRANSACTION_REPLACED, {
                                                            cancelled: "replaced" === i || "cancelled" === i,
                                                            reason: i,
                                                            replacement: this._wrapTransaction(s),
                                                            hash: t,
                                                            receipt: r
                                                        }));
                                                        return
                                                    }
                                                }
                                                i++
                                            }
                                        }
                                        a || this.once("block", l)
                                    }
                                }), t=>{
                                    a || this.once("block", l)
                                }
                                ))
                            });
                            if (a)
                                return;
                            this.once("block", l),
                            s.push(()=>{
                                this.removeListener("block", l)
                            }
                            )
                        }
                        if ("number" == typeof r && r > 0) {
                            let t = setTimeout(()=>{
                                u() || o(tb.makeError("timeout exceeded", c.Yd.errors.TIMEOUT, {
                                    timeout: r
                                }))
                            }
                            , r);
                            t.unref && t.unref(),
                            s.push(()=>{
                                clearTimeout(t)
                            }
                            )
                        }
                    }
                    )
                })
            }
            getBlockNumber() {
                return ty(this, void 0, void 0, function*() {
                    return this._getInternalBlockNumber(0)
                })
            }
            getGasPrice() {
                return ty(this, void 0, void 0, function*() {
                    yield this.getNetwork();
                    let t = yield this.perform("getGasPrice", {});
                    try {
                        return a.O$.from(t)
                    } catch (e) {
                        return tb.throwError("bad result from backend", c.Yd.errors.SERVER_ERROR, {
                            method: "getGasPrice",
                            result: t,
                            error: e
                        })
                    }
                })
            }
            getBalance(t, e) {
                return ty(this, void 0, void 0, function*() {
                    yield this.getNetwork();
                    let r = yield(0,
                    f.mE)({
                        address: this._getAddress(t),
                        blockTag: this._getBlockTag(e)
                    })
                      , n = yield this.perform("getBalance", r);
                    try {
                        return a.O$.from(n)
                    } catch (t) {
                        return tb.throwError("bad result from backend", c.Yd.errors.SERVER_ERROR, {
                            method: "getBalance",
                            params: r,
                            result: n,
                            error: t
                        })
                    }
                })
            }
            getTransactionCount(t, e) {
                return ty(this, void 0, void 0, function*() {
                    yield this.getNetwork();
                    let r = yield(0,
                    f.mE)({
                        address: this._getAddress(t),
                        blockTag: this._getBlockTag(e)
                    })
                      , n = yield this.perform("getTransactionCount", r);
                    try {
                        return a.O$.from(n).toNumber()
                    } catch (t) {
                        return tb.throwError("bad result from backend", c.Yd.errors.SERVER_ERROR, {
                            method: "getTransactionCount",
                            params: r,
                            result: n,
                            error: t
                        })
                    }
                })
            }
            getCode(t, e) {
                return ty(this, void 0, void 0, function*() {
                    yield this.getNetwork();
                    let r = yield(0,
                    f.mE)({
                        address: this._getAddress(t),
                        blockTag: this._getBlockTag(e)
                    })
                      , n = yield this.perform("getCode", r);
                    try {
                        return (0,
                        u.Dv)(n)
                    } catch (t) {
                        return tb.throwError("bad result from backend", c.Yd.errors.SERVER_ERROR, {
                            method: "getCode",
                            params: r,
                            result: n,
                            error: t
                        })
                    }
                })
            }
            getStorageAt(t, e, r) {
                return ty(this, void 0, void 0, function*() {
                    yield this.getNetwork();
                    let n = yield(0,
                    f.mE)({
                        address: this._getAddress(t),
                        blockTag: this._getBlockTag(r),
                        position: Promise.resolve(e).then(t=>(0,
                        u.$P)(t))
                    })
                      , i = yield this.perform("getStorageAt", n);
                    try {
                        return (0,
                        u.Dv)(i)
                    } catch (t) {
                        return tb.throwError("bad result from backend", c.Yd.errors.SERVER_ERROR, {
                            method: "getStorageAt",
                            params: n,
                            result: i,
                            error: t
                        })
                    }
                })
            }
            _wrapTransaction(t, e, r) {
                if (null != e && 32 !== (0,
                u.E1)(e))
                    throw Error("invalid response - sendTransaction");
                return null != e && t.hash !== e && tb.throwError("Transaction hash mismatch from Provider.sendTransaction.", c.Yd.errors.UNKNOWN_ERROR, {
                    expectedHash: t.hash,
                    returnedHash: e
                }),
                t.wait = (e,n)=>ty(this, void 0, void 0, function*() {
                    let i;
                    null == e && (e = 1),
                    null == n && (n = 0),
                    0 !== e && null != r && (i = {
                        data: t.data,
                        from: t.from,
                        nonce: t.nonce,
                        to: t.to,
                        value: t.value,
                        startBlock: r
                    });
                    let o = yield this._waitForTransaction(t.hash, e, n, i);
                    return null == o && 0 === e ? null : (this._emitted["t:" + t.hash] = o.blockNumber,
                    0 === o.status && tb.throwError("transaction failed", c.Yd.errors.CALL_EXCEPTION, {
                        transactionHash: t.hash,
                        transaction: t,
                        receipt: o
                    }),
                    o)
                }),
                t
            }
            sendTransaction(t) {
                return ty(this, void 0, void 0, function*() {
                    yield this.getNetwork();
                    let e = yield Promise.resolve(t).then(t=>(0,
                    u.Dv)(t))
                      , r = this.formatter.transaction(t);
                    null == r.confirmations && (r.confirmations = 0);
                    let n = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval);
                    try {
                        let t = yield this.perform("sendTransaction", {
                            signedTransaction: e
                        });
                        return this._wrapTransaction(r, t, n)
                    } catch (t) {
                        throw t.transaction = r,
                        t.transactionHash = r.hash,
                        t
                    }
                })
            }
            _getTransactionRequest(t) {
                return ty(this, void 0, void 0, function*() {
                    let e = yield t
                      , r = {};
                    return ["from", "to"].forEach(t=>{
                        null != e[t] && (r[t] = Promise.resolve(e[t]).then(t=>t ? this._getAddress(t) : null))
                    }
                    ),
                    ["gasLimit", "gasPrice", "maxFeePerGas", "maxPriorityFeePerGas", "value"].forEach(t=>{
                        null != e[t] && (r[t] = Promise.resolve(e[t]).then(t=>t ? a.O$.from(t) : null))
                    }
                    ),
                    ["type"].forEach(t=>{
                        null != e[t] && (r[t] = Promise.resolve(e[t]).then(t=>null != t ? t : null))
                    }
                    ),
                    e.accessList && (r.accessList = this.formatter.accessList(e.accessList)),
                    ["data"].forEach(t=>{
                        null != e[t] && (r[t] = Promise.resolve(e[t]).then(t=>t ? (0,
                        u.Dv)(t) : null))
                    }
                    ),
                    this.formatter.transactionRequest((yield(0,
                    f.mE)(r)))
                })
            }
            _getFilter(t) {
                return ty(this, void 0, void 0, function*() {
                    t = yield t;
                    let e = {};
                    return null != t.address && (e.address = this._getAddress(t.address)),
                    ["blockHash", "topics"].forEach(r=>{
                        null != t[r] && (e[r] = t[r])
                    }
                    ),
                    ["fromBlock", "toBlock"].forEach(r=>{
                        null != t[r] && (e[r] = this._getBlockTag(t[r]))
                    }
                    ),
                    this.formatter.filter((yield(0,
                    f.mE)(e)))
                })
            }
            _call(t, e, r) {
                return ty(this, void 0, void 0, function*() {
                    r >= 10 && tb.throwError("CCIP read exceeded maximum redirections", c.Yd.errors.SERVER_ERROR, {
                        redirects: r,
                        transaction: t
                    });
                    let n = t.to
                      , i = yield this.perform("call", {
                        transaction: t,
                        blockTag: e
                    });
                    if (r >= 0 && "latest" === e && null != n && "0x556f1830" === i.substring(0, 10) && (0,
                    u.E1)(i) % 32 == 4)
                        try {
                            let o = (0,
                            u.p3)(i, 4)
                              , s = (0,
                            u.p3)(o, 0, 32);
                            a.O$.from(s).eq(n) || tb.throwError("CCIP Read sender did not match", c.Yd.errors.CALL_EXCEPTION, {
                                name: "OffchainLookup",
                                signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                                transaction: t,
                                data: i
                            });
                            let l = []
                              , h = a.O$.from((0,
                            u.p3)(o, 32, 64)).toNumber()
                              , f = a.O$.from((0,
                            u.p3)(o, h, h + 32)).toNumber()
                              , d = (0,
                            u.p3)(o, h + 32);
                            for (let e = 0; e < f; e++) {
                                let r = tC(d, 32 * e);
                                null == r && tb.throwError("CCIP Read contained corrupt URL string", c.Yd.errors.CALL_EXCEPTION, {
                                    name: "OffchainLookup",
                                    signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                                    transaction: t,
                                    data: i
                                }),
                                l.push(r)
                            }
                            let p = tO(o, 64);
                            a.O$.from((0,
                            u.p3)(o, 100, 128)).isZero() || tb.throwError("CCIP Read callback selector included junk", c.Yd.errors.CALL_EXCEPTION, {
                                name: "OffchainLookup",
                                signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                                transaction: t,
                                data: i
                            });
                            let m = (0,
                            u.p3)(o, 96, 100)
                              , g = tO(o, 128)
                              , v = yield this.ccipReadFetch(t, p, l);
                            null == v && tb.throwError("CCIP Read disabled or provided no URLs", c.Yd.errors.CALL_EXCEPTION, {
                                name: "OffchainLookup",
                                signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                                transaction: t,
                                data: i
                            });
                            let y = {
                                to: n,
                                data: (0,
                                u.xs)([m, tD([v, g])])
                            };
                            return this._call(y, e, r + 1)
                        } catch (t) {
                            if (t.code === c.Yd.errors.SERVER_ERROR)
                                throw t
                        }
                    try {
                        return (0,
                        u.Dv)(i)
                    } catch (r) {
                        return tb.throwError("bad result from backend", c.Yd.errors.SERVER_ERROR, {
                            method: "call",
                            params: {
                                transaction: t,
                                blockTag: e
                            },
                            result: i,
                            error: r
                        })
                    }
                })
            }
            call(t, e) {
                return ty(this, void 0, void 0, function*() {
                    yield this.getNetwork();
                    let r = yield(0,
                    f.mE)({
                        transaction: this._getTransactionRequest(t),
                        blockTag: this._getBlockTag(e),
                        ccipReadEnabled: Promise.resolve(t.ccipReadEnabled)
                    });
                    return this._call(r.transaction, r.blockTag, r.ccipReadEnabled ? 0 : -1)
                })
            }
            estimateGas(t) {
                return ty(this, void 0, void 0, function*() {
                    yield this.getNetwork();
                    let e = yield(0,
                    f.mE)({
                        transaction: this._getTransactionRequest(t)
                    })
                      , r = yield this.perform("estimateGas", e);
                    try {
                        return a.O$.from(r)
                    } catch (t) {
                        return tb.throwError("bad result from backend", c.Yd.errors.SERVER_ERROR, {
                            method: "estimateGas",
                            params: e,
                            result: r,
                            error: t
                        })
                    }
                })
            }
            _getAddress(t) {
                return ty(this, void 0, void 0, function*() {
                    "string" != typeof (t = yield t) && tb.throwArgumentError("invalid address or ENS name", "name", t);
                    let e = yield this.resolveName(t);
                    return null == e && tb.throwError("ENS name not configured", c.Yd.errors.UNSUPPORTED_OPERATION, {
                        operation: `resolveName(${JSON.stringify(t)})`
                    }),
                    e
                })
            }
            _getBlock(t, e) {
                return ty(this, void 0, void 0, function*() {
                    yield this.getNetwork(),
                    t = yield t;
                    let r = -128
                      , n = {
                        includeTransactions: !!e
                    };
                    if ((0,
                    u.A7)(t, 32))
                        n.blockHash = t;
                    else
                        try {
                            n.blockTag = yield this._getBlockTag(t),
                            (0,
                            u.A7)(n.blockTag) && (r = parseInt(n.blockTag.substring(2), 16))
                        } catch (e) {
                            tb.throwArgumentError("invalid block hash or block tag", "blockHashOrBlockTag", t)
                        }
                    return U(()=>ty(this, void 0, void 0, function*() {
                        let t = yield this.perform("getBlock", n);
                        if (null == t)
                            return null != n.blockHash && null == this._emitted["b:" + n.blockHash] || null != n.blockTag && r > this._emitted.block ? null : void 0;
                        if (e) {
                            let e = null;
                            for (let r = 0; r < t.transactions.length; r++) {
                                let n = t.transactions[r];
                                if (null == n.blockNumber)
                                    n.confirmations = 0;
                                else if (null == n.confirmations) {
                                    null == e && (e = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval));
                                    let t = e - n.blockNumber + 1;
                                    t <= 0 && (t = 1),
                                    n.confirmations = t
                                }
                            }
                            let r = this.formatter.blockWithTransactions(t);
                            return r.transactions = r.transactions.map(t=>this._wrapTransaction(t)),
                            r
                        }
                        return this.formatter.block(t)
                    }), {
                        oncePoll: this
                    })
                })
            }
            getBlock(t) {
                return this._getBlock(t, !1)
            }
            getBlockWithTransactions(t) {
                return this._getBlock(t, !0)
            }
            getTransaction(t) {
                return ty(this, void 0, void 0, function*() {
                    yield this.getNetwork(),
                    t = yield t;
                    let e = {
                        transactionHash: this.formatter.hash(t, !0)
                    };
                    return U(()=>ty(this, void 0, void 0, function*() {
                        let r = yield this.perform("getTransaction", e);
                        if (null == r)
                            return null == this._emitted["t:" + t] ? null : void 0;
                        let n = this.formatter.transactionResponse(r);
                        if (null == n.blockNumber)
                            n.confirmations = 0;
                        else if (null == n.confirmations) {
                            let t = (yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval)) - n.blockNumber + 1;
                            t <= 0 && (t = 1),
                            n.confirmations = t
                        }
                        return this._wrapTransaction(n)
                    }), {
                        oncePoll: this
                    })
                })
            }
            getTransactionReceipt(t) {
                return ty(this, void 0, void 0, function*() {
                    yield this.getNetwork(),
                    t = yield t;
                    let e = {
                        transactionHash: this.formatter.hash(t, !0)
                    };
                    return U(()=>ty(this, void 0, void 0, function*() {
                        let r = yield this.perform("getTransactionReceipt", e);
                        if (null == r)
                            return null == this._emitted["t:" + t] ? null : void 0;
                        if (null == r.blockHash)
                            return;
                        let n = this.formatter.receipt(r);
                        if (null == n.blockNumber)
                            n.confirmations = 0;
                        else if (null == n.confirmations) {
                            let t = (yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval)) - n.blockNumber + 1;
                            t <= 0 && (t = 1),
                            n.confirmations = t
                        }
                        return n
                    }), {
                        oncePoll: this
                    })
                })
            }
            getLogs(t) {
                return ty(this, void 0, void 0, function*() {
                    yield this.getNetwork();
                    let e = yield(0,
                    f.mE)({
                        filter: this._getFilter(t)
                    })
                      , r = yield this.perform("getLogs", e);
                    return r.forEach(t=>{
                        null == t.removed && (t.removed = !1)
                    }
                    ),
                    tv.Mb.arrayOf(this.formatter.filterLog.bind(this.formatter))(r)
                })
            }
            getEtherPrice() {
                return ty(this, void 0, void 0, function*() {
                    return yield this.getNetwork(),
                    this.perform("getEtherPrice", {})
                })
            }
            _getBlockTag(t) {
                return ty(this, void 0, void 0, function*() {
                    if ("number" == typeof (t = yield t) && t < 0) {
                        t % 1 && tb.throwArgumentError("invalid BlockTag", "blockTag", t);
                        let e = yield this._getInternalBlockNumber(100 + 2 * this.pollingInterval);
                        return (e += t) < 0 && (e = 0),
                        this.formatter.blockTag(e)
                    }
                    return this.formatter.blockTag(t)
                })
            }
            getResolver(t) {
                return ty(this, void 0, void 0, function*() {
                    let e = t;
                    for (; ; ) {
                        if ("" === e || "." === e || "eth" !== t && "eth" === e)
                            return null;
                        let r = yield this._getResolver(e, "getResolver");
                        if (null != r) {
                            let n = new tL(this,r,t);
                            if (e !== t && !(yield n.supportsWildcard()))
                                return null;
                            return n
                        }
                        e = e.split(".").slice(1).join(".")
                    }
                })
            }
            _getResolver(t, e) {
                return ty(this, void 0, void 0, function*() {
                    null == e && (e = "ENS");
                    let r = yield this.getNetwork();
                    r.ensAddress || tb.throwError("network does not support ENS", c.Yd.errors.UNSUPPORTED_OPERATION, {
                        operation: e,
                        network: r.name
                    });
                    try {
                        let e = yield this.call({
                            to: r.ensAddress,
                            data: "0x0178b8bf" + ti(t).substring(2)
                        });
                        return this.formatter.callAddress(e)
                    } catch (t) {}
                    return null
                })
            }
            resolveName(t) {
                return ty(this, void 0, void 0, function*() {
                    t = yield t;
                    try {
                        return Promise.resolve(this.formatter.address(t))
                    } catch (e) {
                        if ((0,
                        u.A7)(t))
                            throw e
                    }
                    "string" != typeof t && tb.throwArgumentError("invalid ENS name", "name", t);
                    let e = yield this.getResolver(t);
                    return e ? yield e.getAddress() : null
                })
            }
            lookupAddress(t) {
                return ty(this, void 0, void 0, function*() {
                    t = yield t;
                    let e = (t = this.formatter.address(t)).substring(2).toLowerCase() + ".addr.reverse"
                      , r = yield this._getResolver(e, "lookupAddress");
                    if (null == r)
                        return null;
                    let n = tC((yield this.call({
                        to: r,
                        data: "0x691f3431" + ti(e).substring(2)
                    })), 0);
                    return (yield this.resolveName(n)) != t ? null : n
                })
            }
            getAvatar(t) {
                return ty(this, void 0, void 0, function*() {
                    let e = null;
                    if ((0,
                    u.A7)(t)) {
                        let r = this.formatter.address(t).substring(2).toLowerCase() + ".addr.reverse"
                          , n = yield this._getResolver(r, "getAvatar");
                        if (!n)
                            return null;
                        e = new tL(this,n,r);
                        try {
                            let t = yield e.getAvatar();
                            if (t)
                                return t.url
                        } catch (t) {
                            if (t.code !== c.Yd.errors.CALL_EXCEPTION)
                                throw t
                        }
                        try {
                            let t = tC((yield this.call({
                                to: n,
                                data: "0x691f3431" + ti(r).substring(2)
                            })), 0);
                            e = yield this.getResolver(t)
                        } catch (t) {
                            if (t.code !== c.Yd.errors.CALL_EXCEPTION)
                                throw t;
                            return null
                        }
                    } else if (!(e = yield this.getResolver(t)))
                        return null;
                    let r = yield e.getAvatar();
                    return null == r ? null : r.url
                })
            }
            perform(t, e) {
                return tb.throwError(t + " not implemented", c.Yd.errors.NOT_IMPLEMENTED, {
                    operation: t
                })
            }
            _startEvent(t) {
                this.polling = this._events.filter(t=>t.pollable()).length > 0
            }
            _stopEvent(t) {
                this.polling = this._events.filter(t=>t.pollable()).length > 0
            }
            _addEventListener(t, e, r) {
                let n = new tN(tE(t),e,r);
                return this._events.push(n),
                this._startEvent(n),
                this
            }
            on(t, e) {
                return this._addEventListener(t, e, !1)
            }
            once(t, e) {
                return this._addEventListener(t, e, !0)
            }
            emit(t, ...e) {
                let r = !1
                  , n = []
                  , i = tE(t);
                return this._events = this._events.filter(t=>t.tag !== i || (setTimeout(()=>{
                    t.listener.apply(this, e)
                }
                , 0),
                r = !0,
                !t.once || (n.push(t),
                !1))),
                n.forEach(t=>{
                    this._stopEvent(t)
                }
                ),
                r
            }
            listenerCount(t) {
                if (!t)
                    return this._events.length;
                let e = tE(t);
                return this._events.filter(t=>t.tag === e).length
            }
            listeners(t) {
                if (null == t)
                    return this._events.map(t=>t.listener);
                let e = tE(t);
                return this._events.filter(t=>t.tag === e).map(t=>t.listener)
            }
            off(t, e) {
                if (null == e)
                    return this.removeAllListeners(t);
                let r = []
                  , n = !1
                  , i = tE(t);
                return this._events = this._events.filter(t=>t.tag !== i || t.listener != e || !!n || (n = !0,
                r.push(t),
                !1)),
                r.forEach(t=>{
                    this._stopEvent(t)
                }
                ),
                this
            }
            removeAllListeners(t) {
                let e = [];
                if (null == t)
                    e = this._events,
                    this._events = [];
                else {
                    let r = tE(t);
                    this._events = this._events.filter(t=>t.tag !== r || (e.push(t),
                    !1))
                }
                return e.forEach(t=>{
                    this._stopEvent(t)
                }
                ),
                this
            }
        }
        var tj = function(t, e, r, n) {
            return new (r || (r = Promise))(function(i, o) {
                function s(t) {
                    try {
                        u(n.next(t))
                    } catch (t) {
                        o(t)
                    }
                }
                function a(t) {
                    try {
                        u(n.throw(t))
                    } catch (t) {
                        o(t)
                    }
                }
                function u(t) {
                    var e;
                    t.done ? i(t.value) : ((e = t.value)instanceof r ? e : new r(function(t) {
                        t(e)
                    }
                    )).then(s, a)
                }
                u((n = n.apply(t, e || [])).next())
            }
            )
        };
        let tG = new c.Yd(F.i)
          , tY = ["call", "estimateGas"];
        function tq(t, e) {
            if (null == t)
                return null;
            if ("string" == typeof t.message && t.message.match("reverted")) {
                let r = (0,
                u.A7)(t.data) ? t.data : null;
                if (!e || r)
                    return {
                        message: t.message,
                        data: r
                    }
            }
            if ("object" == typeof t) {
                for (let r in t) {
                    let n = tq(t[r], e);
                    if (n)
                        return n
                }
                return null
            }
            if ("string" == typeof t)
                try {
                    return tq(JSON.parse(t), e)
                } catch (t) {}
            return null
        }
        function tH(t, e, r) {
            let n = r.transaction || r.signedTransaction;
            if ("call" === t) {
                let t = tq(e, !0);
                if (t)
                    return t.data;
                tG.throwError("missing revert data in call exception; Transaction reverted without a reason string", c.Yd.errors.CALL_EXCEPTION, {
                    data: "0x",
                    transaction: n,
                    error: e
                })
            }
            if ("estimateGas" === t) {
                let r = tq(e.body, !1);
                null == r && (r = tq(e, !1)),
                r && tG.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", c.Yd.errors.UNPREDICTABLE_GAS_LIMIT, {
                    reason: r.message,
                    method: t,
                    transaction: n,
                    error: e
                })
            }
            let i = e.message;
            throw e.code === c.Yd.errors.SERVER_ERROR && e.error && "string" == typeof e.error.message ? i = e.error.message : "string" == typeof e.body ? i = e.body : "string" == typeof e.responseText && (i = e.responseText),
            (i = (i || "").toLowerCase()).match(/insufficient funds|base fee exceeds gas limit|InsufficientFunds/i) && tG.throwError("insufficient funds for intrinsic transaction cost", c.Yd.errors.INSUFFICIENT_FUNDS, {
                error: e,
                method: t,
                transaction: n
            }),
            i.match(/nonce (is )?too low/i) && tG.throwError("nonce has already been used", c.Yd.errors.NONCE_EXPIRED, {
                error: e,
                method: t,
                transaction: n
            }),
            i.match(/replacement transaction underpriced|transaction gas price.*too low/i) && tG.throwError("replacement fee too low", c.Yd.errors.REPLACEMENT_UNDERPRICED, {
                error: e,
                method: t,
                transaction: n
            }),
            i.match(/only replay-protected/i) && tG.throwError("legacy pre-eip-155 transactions not supported", c.Yd.errors.UNSUPPORTED_OPERATION, {
                error: e,
                method: t,
                transaction: n
            }),
            tY.indexOf(t) >= 0 && i.match(/gas required exceeds allowance|always failing transaction|execution reverted|revert/) && tG.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", c.Yd.errors.UNPREDICTABLE_GAS_LIMIT, {
                error: e,
                method: t,
                transaction: n
            }),
            e
        }
        function tK(t) {
            return new Promise(function(e) {
                setTimeout(e, t)
            }
            )
        }
        function tQ(t) {
            if (t.error) {
                let e = Error(t.error.message);
                throw e.code = t.error.code,
                e.data = t.error.data,
                e
            }
            return t.result
        }
        function tJ(t) {
            return t ? t.toLowerCase() : t
        }
        let tW = {};
        class tV extends s.E {
            constructor(t, e, r) {
                if (super(),
                t !== tW)
                    throw Error("do not call the JsonRpcSigner constructor directly; use provider.getSigner");
                (0,
                f.zG)(this, "provider", e),
                null == r && (r = 0),
                "string" == typeof r ? ((0,
                f.zG)(this, "_address", this.provider.formatter.address(r)),
                (0,
                f.zG)(this, "_index", null)) : "number" == typeof r ? ((0,
                f.zG)(this, "_index", r),
                (0,
                f.zG)(this, "_address", null)) : tG.throwArgumentError("invalid address or index", "addressOrIndex", r)
            }
            connect(t) {
                return tG.throwError("cannot alter JSON-RPC Signer connection", c.Yd.errors.UNSUPPORTED_OPERATION, {
                    operation: "connect"
                })
            }
            connectUnchecked() {
                return new tX(tW,this.provider,this._address || this._index)
            }
            getAddress() {
                return this._address ? Promise.resolve(this._address) : this.provider.send("eth_accounts", []).then(t=>(t.length <= this._index && tG.throwError("unknown account #" + this._index, c.Yd.errors.UNSUPPORTED_OPERATION, {
                    operation: "getAddress"
                }),
                this.provider.formatter.address(t[this._index])))
            }
            sendUncheckedTransaction(t) {
                t = (0,
                f.DC)(t);
                let e = this.getAddress().then(t=>(t && (t = t.toLowerCase()),
                t));
                if (null == t.gasLimit) {
                    let r = (0,
                    f.DC)(t);
                    r.from = e,
                    t.gasLimit = this.provider.estimateGas(r)
                }
                return null != t.to && (t.to = Promise.resolve(t.to).then(t=>tj(this, void 0, void 0, function*() {
                    if (null == t)
                        return null;
                    let e = yield this.provider.resolveName(t);
                    return null == e && tG.throwArgumentError("provided ENS name resolves to null", "tx.to", t),
                    e
                }))),
                (0,
                f.mE)({
                    tx: (0,
                    f.mE)(t),
                    sender: e
                }).then(({tx: e, sender: r})=>{
                    null != e.from ? e.from.toLowerCase() !== r && tG.throwArgumentError("from address mismatch", "transaction", t) : e.from = r;
                    let n = this.provider.constructor.hexlifyTransaction(e, {
                        from: !0
                    });
                    return this.provider.send("eth_sendTransaction", [n]).then(t=>t, t=>("string" == typeof t.message && t.message.match(/user denied/i) && tG.throwError("user rejected transaction", c.Yd.errors.ACTION_REJECTED, {
                        action: "sendTransaction",
                        transaction: e
                    }),
                    tH("sendTransaction", t, n)))
                }
                )
            }
            signTransaction(t) {
                return tG.throwError("signing transactions is unsupported", c.Yd.errors.UNSUPPORTED_OPERATION, {
                    operation: "signTransaction"
                })
            }
            sendTransaction(t) {
                return tj(this, void 0, void 0, function*() {
                    let e = yield this.provider._getInternalBlockNumber(100 + 2 * this.provider.pollingInterval)
                      , r = yield this.sendUncheckedTransaction(t);
                    try {
                        return yield U(()=>tj(this, void 0, void 0, function*() {
                            let t = yield this.provider.getTransaction(r);
                            if (null !== t)
                                return this.provider._wrapTransaction(t, r, e)
                        }), {
                            oncePoll: this.provider
                        })
                    } catch (t) {
                        throw t.transactionHash = r,
                        t
                    }
                })
            }
            signMessage(t) {
                return tj(this, void 0, void 0, function*() {
                    let e = "string" == typeof t ? (0,
                    S.Y0)(t) : t
                      , r = yield this.getAddress();
                    try {
                        return yield this.provider.send("personal_sign", [(0,
                        u.Dv)(e), r.toLowerCase()])
                    } catch (e) {
                        throw "string" == typeof e.message && e.message.match(/user denied/i) && tG.throwError("user rejected signing", c.Yd.errors.ACTION_REJECTED, {
                            action: "signMessage",
                            from: r,
                            messageData: t
                        }),
                        e
                    }
                })
            }
            _legacySignMessage(t) {
                return tj(this, void 0, void 0, function*() {
                    let e = "string" == typeof t ? (0,
                    S.Y0)(t) : t
                      , r = yield this.getAddress();
                    try {
                        return yield this.provider.send("eth_sign", [r.toLowerCase(), (0,
                        u.Dv)(e)])
                    } catch (e) {
                        throw "string" == typeof e.message && e.message.match(/user denied/i) && tG.throwError("user rejected signing", c.Yd.errors.ACTION_REJECTED, {
                            action: "_legacySignMessage",
                            from: r,
                            messageData: t
                        }),
                        e
                    }
                })
            }
            _signTypedData(t, e, r) {
                return tj(this, void 0, void 0, function*() {
                    let n = yield I.resolveNames(t, e, r, t=>this.provider.resolveName(t))
                      , i = yield this.getAddress();
                    try {
                        return yield this.provider.send("eth_signTypedData_v4", [i.toLowerCase(), JSON.stringify(I.getPayload(n.domain, e, n.value))])
                    } catch (t) {
                        throw "string" == typeof t.message && t.message.match(/user denied/i) && tG.throwError("user rejected signing", c.Yd.errors.ACTION_REJECTED, {
                            action: "_signTypedData",
                            from: i,
                            messageData: {
                                domain: n.domain,
                                types: e,
                                value: n.value
                            }
                        }),
                        t
                    }
                })
            }
            unlock(t) {
                return tj(this, void 0, void 0, function*() {
                    let e = this.provider
                      , r = yield this.getAddress();
                    return e.send("personal_unlockAccount", [r.toLowerCase(), t, null])
                })
            }
        }
        class tX extends tV {
            sendTransaction(t) {
                return this.sendUncheckedTransaction(t).then(t=>({
                    hash: t,
                    nonce: null,
                    gasLimit: null,
                    gasPrice: null,
                    data: null,
                    value: null,
                    chainId: null,
                    confirmations: 0,
                    from: null,
                    wait: e=>this.provider.waitForTransaction(t, e)
                }))
            }
        }
        let tZ = {
            chainId: !0,
            data: !0,
            gasLimit: !0,
            gasPrice: !0,
            nonce: !0,
            to: !0,
            value: !0,
            type: !0,
            accessList: !0,
            maxFeePerGas: !0,
            maxPriorityFeePerGas: !0
        };
        class t$ extends tz {
            constructor(t, e) {
                let r = e;
                null == r && (r = new Promise((t,e)=>{
                    setTimeout(()=>{
                        this.detectNetwork().then(e=>{
                            t(e)
                        }
                        , t=>{
                            e(t)
                        }
                        )
                    }
                    , 0)
                }
                )),
                super(r),
                t || (t = (0,
                f.tu)(this.constructor, "defaultUrl")()),
                "string" == typeof t ? (0,
                f.zG)(this, "connection", Object.freeze({
                    url: t
                })) : (0,
                f.zG)(this, "connection", Object.freeze((0,
                f.DC)(t))),
                this._nextId = 42
            }
            get _cache() {
                return null == this._eventLoopCache && (this._eventLoopCache = {}),
                this._eventLoopCache
            }
            static defaultUrl() {
                return "http://localhost:8545"
            }
            detectNetwork() {
                return this._cache.detectNetwork || (this._cache.detectNetwork = this._uncachedDetectNetwork(),
                setTimeout(()=>{
                    this._cache.detectNetwork = null
                }
                , 0)),
                this._cache.detectNetwork
            }
            _uncachedDetectNetwork() {
                return tj(this, void 0, void 0, function*() {
                    yield tK(0);
                    let t = null;
                    try {
                        t = yield this.send("eth_chainId", [])
                    } catch (e) {
                        try {
                            t = yield this.send("net_version", [])
                        } catch (t) {}
                    }
                    if (null != t) {
                        let e = (0,
                        f.tu)(this.constructor, "getNetwork");
                        try {
                            return e(a.O$.from(t).toNumber())
                        } catch (e) {
                            return tG.throwError("could not detect network", c.Yd.errors.NETWORK_ERROR, {
                                chainId: t,
                                event: "invalidNetwork",
                                serverError: e
                            })
                        }
                    }
                    return tG.throwError("could not detect network", c.Yd.errors.NETWORK_ERROR, {
                        event: "noNetwork"
                    })
                })
            }
            getSigner(t) {
                return new tV(tW,this,t)
            }
            getUncheckedSigner(t) {
                return this.getSigner(t).connectUnchecked()
            }
            listAccounts() {
                return this.send("eth_accounts", []).then(t=>t.map(t=>this.formatter.address(t)))
            }
            send(t, e) {
                let r = {
                    method: t,
                    params: e,
                    id: this._nextId++,
                    jsonrpc: "2.0"
                };
                this.emit("debug", {
                    action: "request",
                    request: (0,
                    f.p$)(r),
                    provider: this
                });
                let n = ["eth_chainId", "eth_blockNumber"].indexOf(t) >= 0;
                if (n && this._cache[t])
                    return this._cache[t];
                let i = L(this.connection, JSON.stringify(r), tQ).then(t=>(this.emit("debug", {
                    action: "response",
                    request: r,
                    response: t,
                    provider: this
                }),
                t), t=>{
                    throw this.emit("debug", {
                        action: "response",
                        error: t,
                        request: r,
                        provider: this
                    }),
                    t
                }
                );
                return n && (this._cache[t] = i,
                setTimeout(()=>{
                    this._cache[t] = null
                }
                , 0)),
                i
            }
            prepareRequest(t, e) {
                switch (t) {
                case "getBlockNumber":
                    return ["eth_blockNumber", []];
                case "getGasPrice":
                    return ["eth_gasPrice", []];
                case "getBalance":
                    return ["eth_getBalance", [tJ(e.address), e.blockTag]];
                case "getTransactionCount":
                    return ["eth_getTransactionCount", [tJ(e.address), e.blockTag]];
                case "getCode":
                    return ["eth_getCode", [tJ(e.address), e.blockTag]];
                case "getStorageAt":
                    return ["eth_getStorageAt", [tJ(e.address), (0,
                    u.$m)(e.position, 32), e.blockTag]];
                case "sendTransaction":
                    return ["eth_sendRawTransaction", [e.signedTransaction]];
                case "getBlock":
                    if (e.blockTag)
                        return ["eth_getBlockByNumber", [e.blockTag, !!e.includeTransactions]];
                    if (e.blockHash)
                        return ["eth_getBlockByHash", [e.blockHash, !!e.includeTransactions]];
                    break;
                case "getTransaction":
                    return ["eth_getTransactionByHash", [e.transactionHash]];
                case "getTransactionReceipt":
                    return ["eth_getTransactionReceipt", [e.transactionHash]];
                case "call":
                    return ["eth_call", [(0,
                    f.tu)(this.constructor, "hexlifyTransaction")(e.transaction, {
                        from: !0
                    }), e.blockTag]];
                case "estimateGas":
                    return ["eth_estimateGas", [(0,
                    f.tu)(this.constructor, "hexlifyTransaction")(e.transaction, {
                        from: !0
                    })]];
                case "getLogs":
                    return e.filter && null != e.filter.address && (e.filter.address = tJ(e.filter.address)),
                    ["eth_getLogs", [e.filter]]
                }
                return null
            }
            perform(t, e) {
                return tj(this, void 0, void 0, function*() {
                    if ("call" === t || "estimateGas" === t) {
                        let t = e.transaction;
                        if (t && null != t.type && a.O$.from(t.type).isZero() && null == t.maxFeePerGas && null == t.maxPriorityFeePerGas) {
                            let r = yield this.getFeeData();
                            null == r.maxFeePerGas && null == r.maxPriorityFeePerGas && ((e = (0,
                            f.DC)(e)).transaction = (0,
                            f.DC)(t),
                            delete e.transaction.type)
                        }
                    }
                    let r = this.prepareRequest(t, e);
                    null == r && tG.throwError(t + " not implemented", c.Yd.errors.NOT_IMPLEMENTED, {
                        operation: t
                    });
                    try {
                        return yield this.send(r[0], r[1])
                    } catch (r) {
                        return tH(t, r, e)
                    }
                })
            }
            _startEvent(t) {
                "pending" === t.tag && this._startPending(),
                super._startEvent(t)
            }
            _startPending() {
                if (null != this._pendingFilter)
                    return;
                let t = this
                  , e = this.send("eth_newPendingTransactionFilter", []);
                this._pendingFilter = e,
                e.then(function(r) {
                    return function n() {
                        t.send("eth_getFilterChanges", [r]).then(function(r) {
                            if (t._pendingFilter != e)
                                return null;
                            let n = Promise.resolve();
                            return r.forEach(function(e) {
                                t._emitted["t:" + e.toLowerCase()] = "pending",
                                n = n.then(function() {
                                    return t.getTransaction(e).then(function(e) {
                                        return t.emit("pending", e),
                                        null
                                    })
                                })
                            }),
                            n.then(function() {
                                return tK(1e3)
                            })
                        }).then(function() {
                            if (t._pendingFilter != e) {
                                t.send("eth_uninstallFilter", [r]);
                                return
                            }
                            return setTimeout(function() {
                                n()
                            }, 0),
                            null
                        }).catch(t=>{}
                        )
                    }(),
                    r
                }).catch(t=>{}
                )
            }
            _stopEvent(t) {
                "pending" === t.tag && 0 === this.listenerCount("pending") && (this._pendingFilter = null),
                super._stopEvent(t)
            }
            static hexlifyTransaction(t, e) {
                let r = (0,
                f.DC)(tZ);
                if (e)
                    for (let t in e)
                        e[t] && (r[t] = !0);
                (0,
                f.uj)(t, r);
                let n = {};
                return ["chainId", "gasLimit", "gasPrice", "type", "maxFeePerGas", "maxPriorityFeePerGas", "nonce", "value"].forEach(function(e) {
                    if (null == t[e])
                        return;
                    let r = (0,
                    u.$P)(a.O$.from(t[e]));
                    "gasLimit" === e && (e = "gas"),
                    n[e] = r
                }),
                ["from", "to", "data"].forEach(function(e) {
                    null != t[e] && (n[e] = (0,
                    u.Dv)(t[e]))
                }),
                t.accessList && (n.accessList = (0,
                R.z7)(t.accessList)),
                n
            }
        }
    },
    68893: function(t, e, r) {
        "use strict";
        r.d(e, {
            Q: function() {
                return h
            }
        });
        var n = r(36173)
          , i = r(13421)
          , o = r(86365)
          , s = r(13346);
        let a = new i.Yd(o.i)
          , u = 1;
        function l(t, e) {
            let r = "Web3LegacyFetcher";
            return function(t, i) {
                let o = {
                    method: t,
                    params: i,
                    id: u++,
                    jsonrpc: "2.0"
                };
                return new Promise((t,i)=>{
                    this.emit("debug", {
                        action: "request",
                        fetcher: r,
                        request: (0,
                        n.p$)(o),
                        provider: this
                    }),
                    e(o, (e,n)=>{
                        if (e)
                            return this.emit("debug", {
                                action: "response",
                                fetcher: r,
                                error: e,
                                request: o,
                                provider: this
                            }),
                            i(e);
                        if (this.emit("debug", {
                            action: "response",
                            fetcher: r,
                            request: o,
                            response: n,
                            provider: this
                        }),
                        n.error) {
                            let t = Error(n.error.message);
                            return t.code = n.error.code,
                            t.data = n.error.data,
                            i(t)
                        }
                        t(n.result)
                    }
                    )
                }
                )
            }
        }
        class h extends s.r {
            constructor(t, e) {
                null == t && a.throwArgumentError("missing provider", "provider", t);
                let r = null
                  , i = null
                  , o = null;
                "function" == typeof t ? (r = "unknown:",
                i = t) : (((r = t.host || t.path || "") || !t.isMetaMask || (r = "metamask"),
                o = t,
                t.request) ? ("" === r && (r = "eip-1193:"),
                i = function(e, r) {
                    null == r && (r = []);
                    let i = {
                        method: e,
                        params: r
                    };
                    return this.emit("debug", {
                        action: "request",
                        fetcher: "Eip1193Fetcher",
                        request: (0,
                        n.p$)(i),
                        provider: this
                    }),
                    t.request(i).then(t=>(this.emit("debug", {
                        action: "response",
                        fetcher: "Eip1193Fetcher",
                        request: i,
                        response: t,
                        provider: this
                    }),
                    t), t=>{
                        throw this.emit("debug", {
                            action: "response",
                            fetcher: "Eip1193Fetcher",
                            request: i,
                            error: t,
                            provider: this
                        }),
                        t
                    }
                    )
                }
                ) : t.sendAsync ? i = l(t, t.sendAsync.bind(t)) : t.send ? i = l(t, t.send.bind(t)) : a.throwArgumentError("unsupported provider", "provider", t),
                r || (r = "unknown:")),
                super(r, e),
                (0,
                n.zG)(this, "jsonRpcFetchFunc", i),
                (0,
                n.zG)(this, "provider", o)
            }
            send(t, e) {
                return this.jsonRpcFetchFunc(t, e)
            }
        }
    },
    18162: function(t, e, r) {
        "use strict";
        r.d(e, {
            J: function() {
                return f
            },
            c: function() {
                return u
            }
        });
        var n = r(9784)
          , i = r(13421);
        let o = new i.Yd("rlp/5.7.0");
        function s(t) {
            let e = [];
            for (; t; )
                e.unshift(255 & t),
                t >>= 8;
            return e
        }
        function a(t, e, r) {
            let n = 0;
            for (let i = 0; i < r; i++)
                n = 256 * n + t[e + i];
            return n
        }
        function u(t) {
            return (0,
            n.Dv)(function t(e) {
                if (Array.isArray(e)) {
                    let r = [];
                    if (e.forEach(function(e) {
                        r = r.concat(t(e))
                    }),
                    r.length <= 55)
                        return r.unshift(192 + r.length),
                        r;
                    let n = s(r.length);
                    return n.unshift(247 + n.length),
                    n.concat(r)
                }
                (0,
                n.Zq)(e) || o.throwArgumentError("RLP object must be BytesLike", "object", e);
                let r = Array.prototype.slice.call((0,
                n.lE)(e));
                if (1 === r.length && r[0] <= 127)
                    return r;
                if (r.length <= 55)
                    return r.unshift(128 + r.length),
                    r;
                let i = s(r.length);
                return i.unshift(183 + i.length),
                i.concat(r)
            }(t))
        }
        function l(t, e, r, n) {
            let s = [];
            for (; r < e + 1 + n; ) {
                let a = h(t, r);
                s.push(a.result),
                (r += a.consumed) > e + 1 + n && o.throwError("child data too short", i.Yd.errors.BUFFER_OVERRUN, {})
            }
            return {
                consumed: 1 + n,
                result: s
            }
        }
        function h(t, e) {
            if (0 === t.length && o.throwError("data too short", i.Yd.errors.BUFFER_OVERRUN, {}),
            t[e] >= 248) {
                let r = t[e] - 247;
                e + 1 + r > t.length && o.throwError("data short segment too short", i.Yd.errors.BUFFER_OVERRUN, {});
                let n = a(t, e + 1, r);
                return e + 1 + r + n > t.length && o.throwError("data long segment too short", i.Yd.errors.BUFFER_OVERRUN, {}),
                l(t, e, e + 1 + r, r + n)
            }
            if (t[e] >= 192) {
                let r = t[e] - 192;
                return e + 1 + r > t.length && o.throwError("data array too short", i.Yd.errors.BUFFER_OVERRUN, {}),
                l(t, e, e + 1, r)
            }
            if (t[e] >= 184) {
                let r = t[e] - 183;
                e + 1 + r > t.length && o.throwError("data array too short", i.Yd.errors.BUFFER_OVERRUN, {});
                let s = a(t, e + 1, r);
                e + 1 + r + s > t.length && o.throwError("data array too short", i.Yd.errors.BUFFER_OVERRUN, {});
                let u = (0,
                n.Dv)(t.slice(e + 1 + r, e + 1 + r + s));
                return {
                    consumed: 1 + r + s,
                    result: u
                }
            }
            if (t[e] >= 128) {
                let r = t[e] - 128;
                e + 1 + r > t.length && o.throwError("data too short", i.Yd.errors.BUFFER_OVERRUN, {});
                let s = (0,
                n.Dv)(t.slice(e + 1, e + 1 + r));
                return {
                    consumed: 1 + r,
                    result: s
                }
            }
            return {
                consumed: 1,
                result: (0,
                n.Dv)(t[e])
            }
        }
        function f(t) {
            let e = (0,
            n.lE)(t)
              , r = h(e, 0);
            return r.consumed !== e.length && o.throwArgumentError("invalid rlp data", "data", t),
            r.result
        }
    },
    28257: function(t, e, r) {
        "use strict";
        r.d(e, {
            Y0: function() {
                return c
            },
            XL: function() {
                return p
            },
            ZN: function() {
                return d
            }
        });
        var n, i, o, s, a = r(9784);
        let u = new (r(13421)).Yd("strings/5.7.0");
        function l(t, e, r, n, i) {
            if (t === s.BAD_PREFIX || t === s.UNEXPECTED_CONTINUE) {
                let t = 0;
                for (let n = e + 1; n < r.length && r[n] >> 6 == 2; n++)
                    t++;
                return t
            }
            return t === s.OVERRUN ? r.length - e - 1 : 0
        }
        (n = o || (o = {})).current = "",
        n.NFC = "NFC",
        n.NFD = "NFD",
        n.NFKC = "NFKC",
        n.NFKD = "NFKD",
        (i = s || (s = {})).UNEXPECTED_CONTINUE = "unexpected continuation byte",
        i.BAD_PREFIX = "bad codepoint prefix",
        i.OVERRUN = "string overrun",
        i.MISSING_CONTINUE = "missing continuation byte",
        i.OUT_OF_RANGE = "out of UTF-8 range",
        i.UTF16_SURROGATE = "UTF-16 surrogate",
        i.OVERLONG = "overlong representation";
        let h = Object.freeze({
            error: function(t, e, r, n, i) {
                return u.throwArgumentError(`invalid codepoint at offset ${e}; ${t}`, "bytes", r)
            },
            ignore: l,
            replace: function(t, e, r, n, i) {
                return t === s.OVERLONG ? (n.push(i),
                0) : (n.push(65533),
                l(t, e, r, n, i))
            }
        });
        function f(t, e) {
            null == e && (e = h.error),
            t = (0,
            a.lE)(t);
            let r = []
              , n = 0;
            for (; n < t.length; ) {
                let i = t[n++];
                if (i >> 7 == 0) {
                    r.push(i);
                    continue
                }
                let o = null
                  , a = null;
                if ((224 & i) == 192)
                    o = 1,
                    a = 127;
                else if ((240 & i) == 224)
                    o = 2,
                    a = 2047;
                else if ((248 & i) == 240)
                    o = 3,
                    a = 65535;
                else {
                    (192 & i) == 128 ? n += e(s.UNEXPECTED_CONTINUE, n - 1, t, r) : n += e(s.BAD_PREFIX, n - 1, t, r);
                    continue
                }
                if (n - 1 + o >= t.length) {
                    n += e(s.OVERRUN, n - 1, t, r);
                    continue
                }
                let u = i & (1 << 8 - o - 1) - 1;
                for (let i = 0; i < o; i++) {
                    let i = t[n];
                    if ((192 & i) != 128) {
                        n += e(s.MISSING_CONTINUE, n, t, r),
                        u = null;
                        break
                    }
                    u = u << 6 | 63 & i,
                    n++
                }
                if (null !== u) {
                    if (u > 1114111) {
                        n += e(s.OUT_OF_RANGE, n - 1 - o, t, r, u);
                        continue
                    }
                    if (u >= 55296 && u <= 57343) {
                        n += e(s.UTF16_SURROGATE, n - 1 - o, t, r, u);
                        continue
                    }
                    if (u <= a) {
                        n += e(s.OVERLONG, n - 1 - o, t, r, u);
                        continue
                    }
                    r.push(u)
                }
            }
            return r
        }
        function c(t, e=o.current) {
            e != o.current && (u.checkNormalize(),
            t = t.normalize(e));
            let r = [];
            for (let e = 0; e < t.length; e++) {
                let n = t.charCodeAt(e);
                if (n < 128)
                    r.push(n);
                else if (n < 2048)
                    r.push(n >> 6 | 192),
                    r.push(63 & n | 128);
                else if ((64512 & n) == 55296) {
                    e++;
                    let i = t.charCodeAt(e);
                    if (e >= t.length || (64512 & i) != 56320)
                        throw Error("invalid utf-8 string");
                    let o = 65536 + ((1023 & n) << 10) + (1023 & i);
                    r.push(o >> 18 | 240),
                    r.push(o >> 12 & 63 | 128),
                    r.push(o >> 6 & 63 | 128),
                    r.push(63 & o | 128)
                } else
                    r.push(n >> 12 | 224),
                    r.push(n >> 6 & 63 | 128),
                    r.push(63 & n | 128)
            }
            return (0,
            a.lE)(r)
        }
        function d(t, e) {
            return f(t, e).map(t=>t <= 65535 ? String.fromCharCode(t) : String.fromCharCode(((t -= 65536) >> 10 & 1023) + 55296, (1023 & t) + 56320)).join("")
        }
        function p(t, e=o.current) {
            return f(c(t, e))
        }
    },
    2149: function(t, e, r) {
        "use strict";
        r.d(e, {
            z7: function() {
                return ti
            },
            Qc: function() {
                return tl
            }
        });
        var n, i, o = r(89005), s = r(22594), a = r(9784), u = r(75986), l = r(43481), h = r(18162), f = r(58171), c = r.n(f), d = r(83699), p = r.n(d);
        function m(t, e, r) {
            return t(r = {
                path: e,
                exports: {},
                require: function(t, e) {
                    return function() {
                        throw Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
                    }(t, null == e ? r.path : e)
                }
            }, r.exports),
            r.exports
        }
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== r.g ? r.g : "undefined" != typeof self && self;
        var g = v;
        function v(t, e) {
            if (!t)
                throw Error(e || "Assertion failed")
        }
        v.equal = function(t, e, r) {
            if (t != e)
                throw Error(r || "Assertion failed: " + t + " != " + e)
        }
        ;
        var y = m(function(t, e) {
            function r(t) {
                return 1 === t.length ? "0" + t : t
            }
            function n(t) {
                for (var e = "", n = 0; n < t.length; n++)
                    e += r(t[n].toString(16));
                return e
            }
            e.toArray = function(t, e) {
                if (Array.isArray(t))
                    return t.slice();
                if (!t)
                    return [];
                var r = [];
                if ("string" != typeof t) {
                    for (var n = 0; n < t.length; n++)
                        r[n] = 0 | t[n];
                    return r
                }
                if ("hex" === e) {
                    (t = t.replace(/[^a-z0-9]+/ig, "")).length % 2 != 0 && (t = "0" + t);
                    for (var n = 0; n < t.length; n += 2)
                        r.push(parseInt(t[n] + t[n + 1], 16))
                } else
                    for (var n = 0; n < t.length; n++) {
                        var i = t.charCodeAt(n)
                          , o = i >> 8
                          , s = 255 & i;
                        o ? r.push(o, s) : r.push(s)
                    }
                return r
            }
            ,
            e.zero2 = r,
            e.toHex = n,
            e.encode = function(t, e) {
                return "hex" === e ? n(t) : t
            }
        })
          , b = m(function(t, e) {
            e.assert = g,
            e.toArray = y.toArray,
            e.zero2 = y.zero2,
            e.toHex = y.toHex,
            e.encode = y.encode,
            e.getNAF = function(t, e, r) {
                var n = Array(Math.max(t.bitLength(), r) + 1);
                n.fill(0);
                for (var i = 1 << e + 1, o = t.clone(), s = 0; s < n.length; s++) {
                    var a, u = o.andln(i - 1);
                    o.isOdd() ? (a = u > (i >> 1) - 1 ? (i >> 1) - u : u,
                    o.isubn(a)) : a = 0,
                    n[s] = a,
                    o.iushrn(1)
                }
                return n
            }
            ,
            e.getJSF = function(t, e) {
                var r = [[], []];
                t = t.clone(),
                e = e.clone();
                for (var n = 0, i = 0; t.cmpn(-n) > 0 || e.cmpn(-i) > 0; ) {
                    var o, s, a, u = t.andln(3) + n & 3, l = e.andln(3) + i & 3;
                    3 === u && (u = -1),
                    3 === l && (l = -1),
                    s = (1 & u) == 0 ? 0 : (3 == (o = t.andln(7) + n & 7) || 5 === o) && 2 === l ? -u : u,
                    r[0].push(s),
                    a = (1 & l) == 0 ? 0 : (3 == (o = e.andln(7) + i & 7) || 5 === o) && 2 === u ? -l : l,
                    r[1].push(a),
                    2 * n === s + 1 && (n = 1 - n),
                    2 * i === a + 1 && (i = 1 - i),
                    t.iushrn(1),
                    e.iushrn(1)
                }
                return r
            }
            ,
            e.cachedProperty = function(t, e, r) {
                var n = "_" + e;
                t.prototype[e] = function() {
                    return void 0 !== this[n] ? this[n] : this[n] = r.call(this)
                }
            }
            ,
            e.parseBytes = function(t) {
                return "string" == typeof t ? e.toArray(t, "hex") : t
            }
            ,
            e.intFromLE = function(t) {
                return new (c())(t,"hex","le")
            }
        })
          , A = b.getNAF
          , w = b.getJSF
          , E = b.assert;
        function _(t, e) {
            this.type = t,
            this.p = new (c())(e.p,16),
            this.red = e.prime ? c().red(e.prime) : c().mont(this.p),
            this.zero = new (c())(0).toRed(this.red),
            this.one = new (c())(1).toRed(this.red),
            this.two = new (c())(2).toRed(this.red),
            this.n = e.n && new (c())(e.n,16),
            this.g = e.g && this.pointFromJSON(e.g, e.gRed),
            this._wnafT1 = [, , , , ],
            this._wnafT2 = [, , , , ],
            this._wnafT3 = [, , , , ],
            this._wnafT4 = [, , , , ],
            this._bitLength = this.n ? this.n.bitLength() : 0;
            var r = this.n && this.p.div(this.n);
            !r || r.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0,
            this.redN = this.n.toRed(this.red))
        }
        function M(t, e) {
            this.curve = t,
            this.type = e,
            this.precomputed = null
        }
        _.prototype.point = function() {
            throw Error("Not implemented")
        }
        ,
        _.prototype.validate = function() {
            throw Error("Not implemented")
        }
        ,
        _.prototype._fixedNafMul = function(t, e) {
            E(t.precomputed);
            var r, n, i = t._getDoubles(), o = A(e, 1, this._bitLength), s = (1 << i.step + 1) - (i.step % 2 == 0 ? 2 : 1);
            s /= 3;
            var a = [];
            for (r = 0; r < o.length; r += i.step) {
                n = 0;
                for (var u = r + i.step - 1; u >= r; u--)
                    n = (n << 1) + o[u];
                a.push(n)
            }
            for (var l = this.jpoint(null, null, null), h = this.jpoint(null, null, null), f = s; f > 0; f--) {
                for (r = 0; r < a.length; r++)
                    (n = a[r]) === f ? h = h.mixedAdd(i.points[r]) : n === -f && (h = h.mixedAdd(i.points[r].neg()));
                l = l.add(h)
            }
            return l.toP()
        }
        ,
        _.prototype._wnafMul = function(t, e) {
            var r = 4
              , n = t._getNAFPoints(r);
            r = n.wnd;
            for (var i = n.points, o = A(e, r, this._bitLength), s = this.jpoint(null, null, null), a = o.length - 1; a >= 0; a--) {
                for (var u = 0; a >= 0 && 0 === o[a]; a--)
                    u++;
                if (a >= 0 && u++,
                s = s.dblp(u),
                a < 0)
                    break;
                var l = o[a];
                E(0 !== l),
                s = "affine" === t.type ? l > 0 ? s.mixedAdd(i[l - 1 >> 1]) : s.mixedAdd(i[-l - 1 >> 1].neg()) : l > 0 ? s.add(i[l - 1 >> 1]) : s.add(i[-l - 1 >> 1].neg())
            }
            return "affine" === t.type ? s.toP() : s
        }
        ,
        _.prototype._wnafMulAdd = function(t, e, r, n, i) {
            var o, s, a, u = this._wnafT1, l = this._wnafT2, h = this._wnafT3, f = 0;
            for (o = 0; o < n; o++) {
                var c = (a = e[o])._getNAFPoints(t);
                u[o] = c.wnd,
                l[o] = c.points
            }
            for (o = n - 1; o >= 1; o -= 2) {
                var d = o - 1
                  , p = o;
                if (1 !== u[d] || 1 !== u[p]) {
                    h[d] = A(r[d], u[d], this._bitLength),
                    h[p] = A(r[p], u[p], this._bitLength),
                    f = Math.max(h[d].length, f),
                    f = Math.max(h[p].length, f);
                    continue
                }
                var m = [e[d], null, null, e[p]];
                0 === e[d].y.cmp(e[p].y) ? (m[1] = e[d].add(e[p]),
                m[2] = e[d].toJ().mixedAdd(e[p].neg())) : 0 === e[d].y.cmp(e[p].y.redNeg()) ? (m[1] = e[d].toJ().mixedAdd(e[p]),
                m[2] = e[d].add(e[p].neg())) : (m[1] = e[d].toJ().mixedAdd(e[p]),
                m[2] = e[d].toJ().mixedAdd(e[p].neg()));
                var g = [-3, -1, -5, -7, 0, 7, 5, 1, 3]
                  , v = w(r[d], r[p]);
                for (s = 0,
                f = Math.max(v[0].length, f),
                h[d] = Array(f),
                h[p] = Array(f); s < f; s++) {
                    var y = 0 | v[0][s]
                      , b = 0 | v[1][s];
                    h[d][s] = g[(y + 1) * 3 + (b + 1)],
                    h[p][s] = 0,
                    l[d] = m
                }
            }
            var E = this.jpoint(null, null, null)
              , _ = this._wnafT4;
            for (o = f; o >= 0; o--) {
                for (var M = 0; o >= 0; ) {
                    var k = !0;
                    for (s = 0; s < n; s++)
                        _[s] = 0 | h[s][o],
                        0 !== _[s] && (k = !1);
                    if (!k)
                        break;
                    M++,
                    o--
                }
                if (o >= 0 && M++,
                E = E.dblp(M),
                o < 0)
                    break;
                for (s = 0; s < n; s++) {
                    var N = _[s];
                    0 !== N && (N > 0 ? a = l[s][N - 1 >> 1] : N < 0 && (a = l[s][-N - 1 >> 1].neg()),
                    E = "affine" === a.type ? E.mixedAdd(a) : E.add(a))
                }
            }
            for (o = 0; o < n; o++)
                l[o] = null;
            return i ? E : E.toP()
        }
        ,
        _.BasePoint = M,
        M.prototype.eq = function() {
            throw Error("Not implemented")
        }
        ,
        M.prototype.validate = function() {
            return this.curve.validate(this)
        }
        ,
        _.prototype.decodePoint = function(t, e) {
            t = b.toArray(t, e);
            var r = this.p.byteLength();
            if ((4 === t[0] || 6 === t[0] || 7 === t[0]) && t.length - 1 == 2 * r)
                return 6 === t[0] ? E(t[t.length - 1] % 2 == 0) : 7 === t[0] && E(t[t.length - 1] % 2 == 1),
                this.point(t.slice(1, 1 + r), t.slice(1 + r, 1 + 2 * r));
            if ((2 === t[0] || 3 === t[0]) && t.length - 1 === r)
                return this.pointFromX(t.slice(1, 1 + r), 3 === t[0]);
            throw Error("Unknown point format")
        }
        ,
        M.prototype.encodeCompressed = function(t) {
            return this.encode(t, !0)
        }
        ,
        M.prototype._encode = function(t) {
            var e = this.curve.p.byteLength()
              , r = this.getX().toArray("be", e);
            return t ? [this.getY().isEven() ? 2 : 3].concat(r) : [4].concat(r, this.getY().toArray("be", e))
        }
        ,
        M.prototype.encode = function(t, e) {
            return b.encode(this._encode(e), t)
        }
        ,
        M.prototype.precompute = function(t) {
            if (this.precomputed)
                return this;
            var e = {
                doubles: null,
                naf: null,
                beta: null
            };
            return e.naf = this._getNAFPoints(8),
            e.doubles = this._getDoubles(4, t),
            e.beta = this._getBeta(),
            this.precomputed = e,
            this
        }
        ,
        M.prototype._hasDoubles = function(t) {
            if (!this.precomputed)
                return !1;
            var e = this.precomputed.doubles;
            return !!e && e.points.length >= Math.ceil((t.bitLength() + 1) / e.step)
        }
        ,
        M.prototype._getDoubles = function(t, e) {
            if (this.precomputed && this.precomputed.doubles)
                return this.precomputed.doubles;
            for (var r = [this], n = this, i = 0; i < e; i += t) {
                for (var o = 0; o < t; o++)
                    n = n.dbl();
                r.push(n)
            }
            return {
                step: t,
                points: r
            }
        }
        ,
        M.prototype._getNAFPoints = function(t) {
            if (this.precomputed && this.precomputed.naf)
                return this.precomputed.naf;
            for (var e = [this], r = (1 << t) - 1, n = 1 === r ? null : this.dbl(), i = 1; i < r; i++)
                e[i] = e[i - 1].add(n);
            return {
                wnd: t,
                points: e
            }
        }
        ,
        M.prototype._getBeta = function() {
            return null
        }
        ,
        M.prototype.dblp = function(t) {
            for (var e = this, r = 0; r < t; r++)
                e = e.dbl();
            return e
        }
        ;
        var k = m(function(t) {
            "function" == typeof Object.create ? t.exports = function(t, e) {
                e && (t.super_ = e,
                t.prototype = Object.create(e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }))
            }
            : t.exports = function(t, e) {
                if (e) {
                    t.super_ = e;
                    var r = function() {};
                    r.prototype = e.prototype,
                    t.prototype = new r,
                    t.prototype.constructor = t
                }
            }
        })
          , N = b.assert;
        function x(t) {
            _.call(this, "short", t),
            this.a = new (c())(t.a,16).toRed(this.red),
            this.b = new (c())(t.b,16).toRed(this.red),
            this.tinv = this.two.redInvm(),
            this.zeroA = 0 === this.a.fromRed().cmpn(0),
            this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3),
            this.endo = this._getEndomorphism(t),
            this._endoWnafT1 = [, , , , ],
            this._endoWnafT2 = [, , , , ]
        }
        function P(t, e, r, n) {
            _.BasePoint.call(this, t, "affine"),
            null === e && null === r ? (this.x = null,
            this.y = null,
            this.inf = !0) : (this.x = new (c())(e,16),
            this.y = new (c())(r,16),
            n && (this.x.forceRed(this.curve.red),
            this.y.forceRed(this.curve.red)),
            this.x.red || (this.x = this.x.toRed(this.curve.red)),
            this.y.red || (this.y = this.y.toRed(this.curve.red)),
            this.inf = !1)
        }
        function I(t, e, r, n) {
            _.BasePoint.call(this, t, "jacobian"),
            null === e && null === r && null === n ? (this.x = this.curve.one,
            this.y = this.curve.one,
            this.z = new (c())(0)) : (this.x = new (c())(e,16),
            this.y = new (c())(r,16),
            this.z = new (c())(n,16)),
            this.x.red || (this.x = this.x.toRed(this.curve.red)),
            this.y.red || (this.y = this.y.toRed(this.curve.red)),
            this.z.red || (this.z = this.z.toRed(this.curve.red)),
            this.zOne = this.z === this.curve.one
        }
        k(x, _),
        x.prototype._getEndomorphism = function(t) {
            if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
                if (t.beta)
                    e = new (c())(t.beta,16).toRed(this.red);
                else {
                    var e, r, n, i = this._getEndoRoots(this.p);
                    e = (e = 0 > i[0].cmp(i[1]) ? i[0] : i[1]).toRed(this.red)
                }
                if (t.lambda)
                    r = new (c())(t.lambda,16);
                else {
                    var o = this._getEndoRoots(this.n);
                    0 === this.g.mul(o[0]).x.cmp(this.g.x.redMul(e)) ? r = o[0] : (r = o[1],
                    N(0 === this.g.mul(r).x.cmp(this.g.x.redMul(e))))
                }
                return n = t.basis ? t.basis.map(function(t) {
                    return {
                        a: new (c())(t.a,16),
                        b: new (c())(t.b,16)
                    }
                }) : this._getEndoBasis(r),
                {
                    beta: e,
                    lambda: r,
                    basis: n
                }
            }
        }
        ,
        x.prototype._getEndoRoots = function(t) {
            var e = t === this.p ? this.red : c().mont(t)
              , r = new (c())(2).toRed(e).redInvm()
              , n = r.redNeg()
              , i = new (c())(3).toRed(e).redNeg().redSqrt().redMul(r);
            return [n.redAdd(i).fromRed(), n.redSub(i).fromRed()]
        }
        ,
        x.prototype._getEndoBasis = function(t) {
            for (var e, r, n, i, o, s, a, u, l, h = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), f = t, d = this.n.clone(), p = new (c())(1), m = new (c())(0), g = new (c())(0), v = new (c())(1), y = 0; 0 !== f.cmpn(0); ) {
                var b = d.div(f);
                u = d.sub(b.mul(f)),
                l = g.sub(b.mul(p));
                var A = v.sub(b.mul(m));
                if (!n && 0 > u.cmp(h))
                    e = a.neg(),
                    r = p,
                    n = u.neg(),
                    i = l;
                else if (n && 2 == ++y)
                    break;
                a = u,
                d = f,
                f = u,
                g = p,
                p = l,
                v = m,
                m = A
            }
            o = u.neg(),
            s = l;
            var w = n.sqr().add(i.sqr());
            return o.sqr().add(s.sqr()).cmp(w) >= 0 && (o = e,
            s = r),
            n.negative && (n = n.neg(),
            i = i.neg()),
            o.negative && (o = o.neg(),
            s = s.neg()),
            [{
                a: n,
                b: i
            }, {
                a: o,
                b: s
            }]
        }
        ,
        x.prototype._endoSplit = function(t) {
            var e = this.endo.basis
              , r = e[0]
              , n = e[1]
              , i = n.b.mul(t).divRound(this.n)
              , o = r.b.neg().mul(t).divRound(this.n)
              , s = i.mul(r.a)
              , a = o.mul(n.a)
              , u = i.mul(r.b)
              , l = o.mul(n.b);
            return {
                k1: t.sub(s).sub(a),
                k2: u.add(l).neg()
            }
        }
        ,
        x.prototype.pointFromX = function(t, e) {
            (t = new (c())(t,16)).red || (t = t.toRed(this.red));
            var r = t.redSqr().redMul(t).redIAdd(t.redMul(this.a)).redIAdd(this.b)
              , n = r.redSqrt();
            if (0 !== n.redSqr().redSub(r).cmp(this.zero))
                throw Error("invalid point");
            var i = n.fromRed().isOdd();
            return (e && !i || !e && i) && (n = n.redNeg()),
            this.point(t, n)
        }
        ,
        x.prototype.validate = function(t) {
            if (t.inf)
                return !0;
            var e = t.x
              , r = t.y
              , n = this.a.redMul(e)
              , i = e.redSqr().redMul(e).redIAdd(n).redIAdd(this.b);
            return 0 === r.redSqr().redISub(i).cmpn(0)
        }
        ,
        x.prototype._endoWnafMulAdd = function(t, e, r) {
            for (var n = this._endoWnafT1, i = this._endoWnafT2, o = 0; o < t.length; o++) {
                var s = this._endoSplit(e[o])
                  , a = t[o]
                  , u = a._getBeta();
                s.k1.negative && (s.k1.ineg(),
                a = a.neg(!0)),
                s.k2.negative && (s.k2.ineg(),
                u = u.neg(!0)),
                n[2 * o] = a,
                n[2 * o + 1] = u,
                i[2 * o] = s.k1,
                i[2 * o + 1] = s.k2
            }
            for (var l = this._wnafMulAdd(1, n, i, 2 * o, r), h = 0; h < 2 * o; h++)
                n[h] = null,
                i[h] = null;
            return l
        }
        ,
        k(P, _.BasePoint),
        x.prototype.point = function(t, e, r) {
            return new P(this,t,e,r)
        }
        ,
        x.prototype.pointFromJSON = function(t, e) {
            return P.fromJSON(this, t, e)
        }
        ,
        P.prototype._getBeta = function() {
            if (this.curve.endo) {
                var t = this.precomputed;
                if (t && t.beta)
                    return t.beta;
                var e = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
                if (t) {
                    var r = this.curve
                      , n = function(t) {
                        return r.point(t.x.redMul(r.endo.beta), t.y)
                    };
                    t.beta = e,
                    e.precomputed = {
                        beta: null,
                        naf: t.naf && {
                            wnd: t.naf.wnd,
                            points: t.naf.points.map(n)
                        },
                        doubles: t.doubles && {
                            step: t.doubles.step,
                            points: t.doubles.points.map(n)
                        }
                    }
                }
                return e
            }
        }
        ,
        P.prototype.toJSON = function() {
            return this.precomputed ? [this.x, this.y, this.precomputed && {
                doubles: this.precomputed.doubles && {
                    step: this.precomputed.doubles.step,
                    points: this.precomputed.doubles.points.slice(1)
                },
                naf: this.precomputed.naf && {
                    wnd: this.precomputed.naf.wnd,
                    points: this.precomputed.naf.points.slice(1)
                }
            }] : [this.x, this.y]
        }
        ,
        P.fromJSON = function(t, e, r) {
            "string" == typeof e && (e = JSON.parse(e));
            var n = t.point(e[0], e[1], r);
            if (!e[2])
                return n;
            function i(e) {
                return t.point(e[0], e[1], r)
            }
            var o = e[2];
            return n.precomputed = {
                beta: null,
                doubles: o.doubles && {
                    step: o.doubles.step,
                    points: [n].concat(o.doubles.points.map(i))
                },
                naf: o.naf && {
                    wnd: o.naf.wnd,
                    points: [n].concat(o.naf.points.map(i))
                }
            },
            n
        }
        ,
        P.prototype.inspect = function() {
            return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">"
        }
        ,
        P.prototype.isInfinity = function() {
            return this.inf
        }
        ,
        P.prototype.add = function(t) {
            if (this.inf)
                return t;
            if (t.inf)
                return this;
            if (this.eq(t))
                return this.dbl();
            if (this.neg().eq(t) || 0 === this.x.cmp(t.x))
                return this.curve.point(null, null);
            var e = this.y.redSub(t.y);
            0 !== e.cmpn(0) && (e = e.redMul(this.x.redSub(t.x).redInvm()));
            var r = e.redSqr().redISub(this.x).redISub(t.x)
              , n = e.redMul(this.x.redSub(r)).redISub(this.y);
            return this.curve.point(r, n)
        }
        ,
        P.prototype.dbl = function() {
            if (this.inf)
                return this;
            var t = this.y.redAdd(this.y);
            if (0 === t.cmpn(0))
                return this.curve.point(null, null);
            var e = this.curve.a
              , r = this.x.redSqr()
              , n = t.redInvm()
              , i = r.redAdd(r).redIAdd(r).redIAdd(e).redMul(n)
              , o = i.redSqr().redISub(this.x.redAdd(this.x))
              , s = i.redMul(this.x.redSub(o)).redISub(this.y);
            return this.curve.point(o, s)
        }
        ,
        P.prototype.getX = function() {
            return this.x.fromRed()
        }
        ,
        P.prototype.getY = function() {
            return this.y.fromRed()
        }
        ,
        P.prototype.mul = function(t) {
            return (t = new (c())(t,16),
            this.isInfinity()) ? this : this._hasDoubles(t) ? this.curve._fixedNafMul(this, t) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [t]) : this.curve._wnafMul(this, t)
        }
        ,
        P.prototype.mulAdd = function(t, e, r) {
            var n = [this, e]
              , i = [t, r];
            return this.curve.endo ? this.curve._endoWnafMulAdd(n, i) : this.curve._wnafMulAdd(1, n, i, 2)
        }
        ,
        P.prototype.jmulAdd = function(t, e, r) {
            var n = [this, e]
              , i = [t, r];
            return this.curve.endo ? this.curve._endoWnafMulAdd(n, i, !0) : this.curve._wnafMulAdd(1, n, i, 2, !0)
        }
        ,
        P.prototype.eq = function(t) {
            return this === t || this.inf === t.inf && (this.inf || 0 === this.x.cmp(t.x) && 0 === this.y.cmp(t.y))
        }
        ,
        P.prototype.neg = function(t) {
            if (this.inf)
                return this;
            var e = this.curve.point(this.x, this.y.redNeg());
            if (t && this.precomputed) {
                var r = this.precomputed
                  , n = function(t) {
                    return t.neg()
                };
                e.precomputed = {
                    naf: r.naf && {
                        wnd: r.naf.wnd,
                        points: r.naf.points.map(n)
                    },
                    doubles: r.doubles && {
                        step: r.doubles.step,
                        points: r.doubles.points.map(n)
                    }
                }
            }
            return e
        }
        ,
        P.prototype.toJ = function() {
            return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one)
        }
        ,
        k(I, _.BasePoint),
        x.prototype.jpoint = function(t, e, r) {
            return new I(this,t,e,r)
        }
        ,
        I.prototype.toP = function() {
            if (this.isInfinity())
                return this.curve.point(null, null);
            var t = this.z.redInvm()
              , e = t.redSqr()
              , r = this.x.redMul(e)
              , n = this.y.redMul(e).redMul(t);
            return this.curve.point(r, n)
        }
        ,
        I.prototype.neg = function() {
            return this.curve.jpoint(this.x, this.y.redNeg(), this.z)
        }
        ,
        I.prototype.add = function(t) {
            if (this.isInfinity())
                return t;
            if (t.isInfinity())
                return this;
            var e = t.z.redSqr()
              , r = this.z.redSqr()
              , n = this.x.redMul(e)
              , i = t.x.redMul(r)
              , o = this.y.redMul(e.redMul(t.z))
              , s = t.y.redMul(r.redMul(this.z))
              , a = n.redSub(i)
              , u = o.redSub(s);
            if (0 === a.cmpn(0))
                return 0 !== u.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
            var l = a.redSqr()
              , h = l.redMul(a)
              , f = n.redMul(l)
              , c = u.redSqr().redIAdd(h).redISub(f).redISub(f)
              , d = u.redMul(f.redISub(c)).redISub(o.redMul(h))
              , p = this.z.redMul(t.z).redMul(a);
            return this.curve.jpoint(c, d, p)
        }
        ,
        I.prototype.mixedAdd = function(t) {
            if (this.isInfinity())
                return t.toJ();
            if (t.isInfinity())
                return this;
            var e = this.z.redSqr()
              , r = this.x
              , n = t.x.redMul(e)
              , i = this.y
              , o = t.y.redMul(e).redMul(this.z)
              , s = r.redSub(n)
              , a = i.redSub(o);
            if (0 === s.cmpn(0))
                return 0 !== a.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
            var u = s.redSqr()
              , l = u.redMul(s)
              , h = r.redMul(u)
              , f = a.redSqr().redIAdd(l).redISub(h).redISub(h)
              , c = a.redMul(h.redISub(f)).redISub(i.redMul(l))
              , d = this.z.redMul(s);
            return this.curve.jpoint(f, c, d)
        }
        ,
        I.prototype.dblp = function(t) {
            if (0 === t || this.isInfinity())
                return this;
            if (!t)
                return this.dbl();
            if (this.curve.zeroA || this.curve.threeA) {
                var e, r = this;
                for (e = 0; e < t; e++)
                    r = r.dbl();
                return r
            }
            var n = this.curve.a
              , i = this.curve.tinv
              , o = this.x
              , s = this.y
              , a = this.z
              , u = a.redSqr().redSqr()
              , l = s.redAdd(s);
            for (e = 0; e < t; e++) {
                var h = o.redSqr()
                  , f = l.redSqr()
                  , c = f.redSqr()
                  , d = h.redAdd(h).redIAdd(h).redIAdd(n.redMul(u))
                  , p = o.redMul(f)
                  , m = d.redSqr().redISub(p.redAdd(p))
                  , g = p.redISub(m)
                  , v = d.redMul(g);
                v = v.redIAdd(v).redISub(c);
                var y = l.redMul(a);
                e + 1 < t && (u = u.redMul(c)),
                o = m,
                a = y,
                l = v
            }
            return this.curve.jpoint(o, l.redMul(i), a)
        }
        ,
        I.prototype.dbl = function() {
            return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl()
        }
        ,
        I.prototype._zeroDbl = function() {
            if (this.zOne) {
                var t, e, r, n = this.x.redSqr(), i = this.y.redSqr(), o = i.redSqr(), s = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
                s = s.redIAdd(s);
                var a = n.redAdd(n).redIAdd(n)
                  , u = a.redSqr().redISub(s).redISub(s)
                  , l = o.redIAdd(o);
                l = (l = l.redIAdd(l)).redIAdd(l),
                t = u,
                e = a.redMul(s.redISub(u)).redISub(l),
                r = this.y.redAdd(this.y)
            } else {
                var h = this.x.redSqr()
                  , f = this.y.redSqr()
                  , c = f.redSqr()
                  , d = this.x.redAdd(f).redSqr().redISub(h).redISub(c);
                d = d.redIAdd(d);
                var p = h.redAdd(h).redIAdd(h)
                  , m = p.redSqr()
                  , g = c.redIAdd(c);
                g = (g = g.redIAdd(g)).redIAdd(g),
                t = m.redISub(d).redISub(d),
                e = p.redMul(d.redISub(t)).redISub(g),
                r = (r = this.y.redMul(this.z)).redIAdd(r)
            }
            return this.curve.jpoint(t, e, r)
        }
        ,
        I.prototype._threeDbl = function() {
            if (this.zOne) {
                var t, e, r, n = this.x.redSqr(), i = this.y.redSqr(), o = i.redSqr(), s = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
                s = s.redIAdd(s);
                var a = n.redAdd(n).redIAdd(n).redIAdd(this.curve.a)
                  , u = a.redSqr().redISub(s).redISub(s);
                t = u;
                var l = o.redIAdd(o);
                l = (l = l.redIAdd(l)).redIAdd(l),
                e = a.redMul(s.redISub(u)).redISub(l),
                r = this.y.redAdd(this.y)
            } else {
                var h = this.z.redSqr()
                  , f = this.y.redSqr()
                  , c = this.x.redMul(f)
                  , d = this.x.redSub(h).redMul(this.x.redAdd(h));
                d = d.redAdd(d).redIAdd(d);
                var p = c.redIAdd(c)
                  , m = (p = p.redIAdd(p)).redAdd(p);
                t = d.redSqr().redISub(m),
                r = this.y.redAdd(this.z).redSqr().redISub(f).redISub(h);
                var g = f.redSqr();
                g = (g = (g = g.redIAdd(g)).redIAdd(g)).redIAdd(g),
                e = d.redMul(p.redISub(t)).redISub(g)
            }
            return this.curve.jpoint(t, e, r)
        }
        ,
        I.prototype._dbl = function() {
            var t = this.curve.a
              , e = this.x
              , r = this.y
              , n = this.z
              , i = n.redSqr().redSqr()
              , o = e.redSqr()
              , s = r.redSqr()
              , a = o.redAdd(o).redIAdd(o).redIAdd(t.redMul(i))
              , u = e.redAdd(e)
              , l = (u = u.redIAdd(u)).redMul(s)
              , h = a.redSqr().redISub(l.redAdd(l))
              , f = l.redISub(h)
              , c = s.redSqr();
            c = (c = (c = c.redIAdd(c)).redIAdd(c)).redIAdd(c);
            var d = a.redMul(f).redISub(c)
              , p = r.redAdd(r).redMul(n);
            return this.curve.jpoint(h, d, p)
        }
        ,
        I.prototype.trpl = function() {
            if (!this.curve.zeroA)
                return this.dbl().add(this);
            var t = this.x.redSqr()
              , e = this.y.redSqr()
              , r = this.z.redSqr()
              , n = e.redSqr()
              , i = t.redAdd(t).redIAdd(t)
              , o = i.redSqr()
              , s = this.x.redAdd(e).redSqr().redISub(t).redISub(n)
              , a = (s = (s = (s = s.redIAdd(s)).redAdd(s).redIAdd(s)).redISub(o)).redSqr()
              , u = n.redIAdd(n);
            u = (u = (u = u.redIAdd(u)).redIAdd(u)).redIAdd(u);
            var l = i.redIAdd(s).redSqr().redISub(o).redISub(a).redISub(u)
              , h = e.redMul(l);
            h = (h = h.redIAdd(h)).redIAdd(h);
            var f = this.x.redMul(a).redISub(h);
            f = (f = f.redIAdd(f)).redIAdd(f);
            var c = this.y.redMul(l.redMul(u.redISub(l)).redISub(s.redMul(a)));
            c = (c = (c = c.redIAdd(c)).redIAdd(c)).redIAdd(c);
            var d = this.z.redAdd(s).redSqr().redISub(r).redISub(a);
            return this.curve.jpoint(f, c, d)
        }
        ,
        I.prototype.mul = function(t, e) {
            return t = new (c())(t,e),
            this.curve._wnafMul(this, t)
        }
        ,
        I.prototype.eq = function(t) {
            if ("affine" === t.type)
                return this.eq(t.toJ());
            if (this === t)
                return !0;
            var e = this.z.redSqr()
              , r = t.z.redSqr();
            if (0 !== this.x.redMul(r).redISub(t.x.redMul(e)).cmpn(0))
                return !1;
            var n = e.redMul(this.z)
              , i = r.redMul(t.z);
            return 0 === this.y.redMul(i).redISub(t.y.redMul(n)).cmpn(0)
        }
        ,
        I.prototype.eqXToP = function(t) {
            var e = this.z.redSqr()
              , r = t.toRed(this.curve.red).redMul(e);
            if (0 === this.x.cmp(r))
                return !0;
            for (var n = t.clone(), i = this.curve.redN.redMul(e); ; ) {
                if (n.iadd(this.curve.n),
                n.cmp(this.curve.p) >= 0)
                    return !1;
                if (r.redIAdd(i),
                0 === this.x.cmp(r))
                    return !0
            }
        }
        ,
        I.prototype.inspect = function() {
            return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">"
        }
        ,
        I.prototype.isInfinity = function() {
            return 0 === this.z.cmpn(0)
        }
        ;
        var S = m(function(t, e) {
            e.base = _,
            e.short = x,
            e.mont = null,
            e.edwards = null
        })
          , R = m(function(t, e) {
            var r, n = b.assert;
            function i(t) {
                "short" === t.type ? this.curve = new S.short(t) : "edwards" === t.type ? this.curve = new S.edwards(t) : this.curve = new S.mont(t),
                this.g = this.curve.g,
                this.n = this.curve.n,
                this.hash = t.hash,
                n(this.g.validate(), "Invalid curve"),
                n(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O")
            }
            function o(t, r) {
                Object.defineProperty(e, t, {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        var n = new i(r);
                        return Object.defineProperty(e, t, {
                            configurable: !0,
                            enumerable: !0,
                            value: n
                        }),
                        n
                    }
                })
            }
            e.PresetCurve = i,
            o("p192", {
                type: "short",
                prime: "p192",
                p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
                a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
                b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
                n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
                hash: p().sha256,
                gRed: !1,
                g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]
            }),
            o("p224", {
                type: "short",
                prime: "p224",
                p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
                a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
                b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
                n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
                hash: p().sha256,
                gRed: !1,
                g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]
            }),
            o("p256", {
                type: "short",
                prime: null,
                p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
                a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
                b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
                n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
                hash: p().sha256,
                gRed: !1,
                g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]
            }),
            o("p384", {
                type: "short",
                prime: null,
                p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
                a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
                b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
                n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
                hash: p().sha384,
                gRed: !1,
                g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]
            }),
            o("p521", {
                type: "short",
                prime: null,
                p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
                a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
                b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
                n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
                hash: p().sha512,
                gRed: !1,
                g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]
            }),
            o("curve25519", {
                type: "mont",
                prime: "p25519",
                p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                a: "76d06",
                b: "1",
                n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                hash: p().sha256,
                gRed: !1,
                g: ["9"]
            }),
            o("ed25519", {
                type: "edwards",
                prime: "p25519",
                p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                a: "-1",
                c: "1",
                d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
                n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                hash: p().sha256,
                gRed: !1,
                g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"]
            });
            try {
                r = null.crash()
            } catch (t) {
                r = void 0
            }
            o("secp256k1", {
                type: "short",
                prime: "k256",
                p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
                a: "0",
                b: "7",
                n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
                h: "1",
                hash: p().sha256,
                beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
                lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
                basis: [{
                    a: "3086d221a7d46bcde86c90e49284eb15",
                    b: "-e4437ed6010e88286f547fa90abfe4c3"
                }, {
                    a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
                    b: "3086d221a7d46bcde86c90e49284eb15"
                }],
                gRed: !1,
                g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", r]
            })
        });
        function C(t) {
            if (!(this instanceof C))
                return new C(t);
            this.hash = t.hash,
            this.predResist = !!t.predResist,
            this.outLen = this.hash.outSize,
            this.minEntropy = t.minEntropy || this.hash.hmacStrength,
            this._reseed = null,
            this.reseedInterval = null,
            this.K = null,
            this.V = null;
            var e = y.toArray(t.entropy, t.entropyEnc || "hex")
              , r = y.toArray(t.nonce, t.nonceEnc || "hex")
              , n = y.toArray(t.pers, t.persEnc || "hex");
            g(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"),
            this._init(e, r, n)
        }
        C.prototype._init = function(t, e, r) {
            var n = t.concat(e).concat(r);
            this.K = Array(this.outLen / 8),
            this.V = Array(this.outLen / 8);
            for (var i = 0; i < this.V.length; i++)
                this.K[i] = 0,
                this.V[i] = 1;
            this._update(n),
            this._reseed = 1,
            this.reseedInterval = 281474976710656
        }
        ,
        C.prototype._hmac = function() {
            return new (p()).hmac(this.hash,this.K)
        }
        ,
        C.prototype._update = function(t) {
            var e = this._hmac().update(this.V).update([0]);
            t && (e = e.update(t)),
            this.K = e.digest(),
            this.V = this._hmac().update(this.V).digest(),
            t && (this.K = this._hmac().update(this.V).update([1]).update(t).digest(),
            this.V = this._hmac().update(this.V).digest())
        }
        ,
        C.prototype.reseed = function(t, e, r, n) {
            "string" != typeof e && (n = r,
            r = e,
            e = null),
            t = y.toArray(t, e),
            r = y.toArray(r, n),
            g(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"),
            this._update(t.concat(r || [])),
            this._reseed = 1
        }
        ,
        C.prototype.generate = function(t, e, r, n) {
            if (this._reseed > this.reseedInterval)
                throw Error("Reseed is required");
            "string" != typeof e && (n = r,
            r = e,
            e = null),
            r && (r = y.toArray(r, n || "hex"),
            this._update(r));
            for (var i = []; i.length < t; )
                this.V = this._hmac().update(this.V).digest(),
                i = i.concat(this.V);
            var o = i.slice(0, t);
            return this._update(r),
            this._reseed++,
            y.encode(o, e)
        }
        ;
        var O = b.assert;
        function T(t, e) {
            this.ec = t,
            this.priv = null,
            this.pub = null,
            e.priv && this._importPrivate(e.priv, e.privEnc),
            e.pub && this._importPublic(e.pub, e.pubEnc)
        }
        T.fromPublic = function(t, e, r) {
            return e instanceof T ? e : new T(t,{
                pub: e,
                pubEnc: r
            })
        }
        ,
        T.fromPrivate = function(t, e, r) {
            return e instanceof T ? e : new T(t,{
                priv: e,
                privEnc: r
            })
        }
        ,
        T.prototype.validate = function() {
            var t = this.getPublic();
            return t.isInfinity() ? {
                result: !1,
                reason: "Invalid public key"
            } : t.validate() ? t.mul(this.ec.curve.n).isInfinity() ? {
                result: !0,
                reason: null
            } : {
                result: !1,
                reason: "Public key * N != O"
            } : {
                result: !1,
                reason: "Public key is not a point"
            }
        }
        ,
        T.prototype.getPublic = function(t, e) {
            return ("string" == typeof t && (e = t,
            t = null),
            this.pub || (this.pub = this.ec.g.mul(this.priv)),
            e) ? this.pub.encode(e, t) : this.pub
        }
        ,
        T.prototype.getPrivate = function(t) {
            return "hex" === t ? this.priv.toString(16, 2) : this.priv
        }
        ,
        T.prototype._importPrivate = function(t, e) {
            this.priv = new (c())(t,e || 16),
            this.priv = this.priv.umod(this.ec.curve.n)
        }
        ,
        T.prototype._importPublic = function(t, e) {
            if (t.x || t.y) {
                "mont" === this.ec.curve.type ? O(t.x, "Need x coordinate") : ("short" === this.ec.curve.type || "edwards" === this.ec.curve.type) && O(t.x && t.y, "Need both x and y coordinate"),
                this.pub = this.ec.curve.point(t.x, t.y);
                return
            }
            this.pub = this.ec.curve.decodePoint(t, e)
        }
        ,
        T.prototype.derive = function(t) {
            return t.validate() || O(t.validate(), "public point not validated"),
            t.mul(this.priv).getX()
        }
        ,
        T.prototype.sign = function(t, e, r) {
            return this.ec.sign(t, this, e, r)
        }
        ,
        T.prototype.verify = function(t, e) {
            return this.ec.verify(t, e, this)
        }
        ,
        T.prototype.inspect = function() {
            return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >"
        }
        ;
        var B = b.assert;
        function D(t, e) {
            if (t instanceof D)
                return t;
            this._importDER(t, e) || (B(t.r && t.s, "Signature without r or s"),
            this.r = new (c())(t.r,16),
            this.s = new (c())(t.s,16),
            void 0 === t.recoveryParam ? this.recoveryParam = null : this.recoveryParam = t.recoveryParam)
        }
        function L() {
            this.place = 0
        }
        function U(t, e) {
            var r = t[e.place++];
            if (!(128 & r))
                return r;
            var n = 15 & r;
            if (0 === n || n > 4)
                return !1;
            for (var i = 0, o = 0, s = e.place; o < n; o++,
            s++)
                i <<= 8,
                i |= t[s],
                i >>>= 0;
            return !(i <= 127) && (e.place = s,
            i)
        }
        function F(t) {
            for (var e = 0, r = t.length - 1; !t[e] && !(128 & t[e + 1]) && e < r; )
                e++;
            return 0 === e ? t : t.slice(e)
        }
        function z(t, e) {
            if (e < 128) {
                t.push(e);
                return
            }
            var r = 1 + (Math.log(e) / Math.LN2 >>> 3);
            for (t.push(128 | r); --r; )
                t.push(e >>> (r << 3) & 255);
            t.push(e)
        }
        D.prototype._importDER = function(t, e) {
            t = b.toArray(t, e);
            var r = new L;
            if (48 !== t[r.place++])
                return !1;
            var n = U(t, r);
            if (!1 === n || n + r.place !== t.length || 2 !== t[r.place++])
                return !1;
            var i = U(t, r);
            if (!1 === i)
                return !1;
            var o = t.slice(r.place, i + r.place);
            if (r.place += i,
            2 !== t[r.place++])
                return !1;
            var s = U(t, r);
            if (!1 === s || t.length !== s + r.place)
                return !1;
            var a = t.slice(r.place, s + r.place);
            if (0 === o[0]) {
                if (!(128 & o[1]))
                    return !1;
                o = o.slice(1)
            }
            if (0 === a[0]) {
                if (!(128 & a[1]))
                    return !1;
                a = a.slice(1)
            }
            return this.r = new (c())(o),
            this.s = new (c())(a),
            this.recoveryParam = null,
            !0
        }
        ,
        D.prototype.toDER = function(t) {
            var e = this.r.toArray()
              , r = this.s.toArray();
            for (128 & e[0] && (e = [0].concat(e)),
            128 & r[0] && (r = [0].concat(r)),
            e = F(e),
            r = F(r); !r[0] && !(128 & r[1]); )
                r = r.slice(1);
            var n = [2];
            z(n, e.length),
            (n = n.concat(e)).push(2),
            z(n, r.length);
            var i = n.concat(r)
              , o = [48];
            return z(o, i.length),
            o = o.concat(i),
            b.encode(o, t)
        }
        ;
        var j = function() {
            throw Error("unsupported")
        }
          , G = b.assert;
        function Y(t) {
            if (!(this instanceof Y))
                return new Y(t);
            "string" == typeof t && (G(Object.prototype.hasOwnProperty.call(R, t), "Unknown curve " + t),
            t = R[t]),
            t instanceof R.PresetCurve && (t = {
                curve: t
            }),
            this.curve = t.curve.curve,
            this.n = this.curve.n,
            this.nh = this.n.ushrn(1),
            this.g = this.curve.g,
            this.g = t.curve.g,
            this.g.precompute(t.curve.n.bitLength() + 1),
            this.hash = t.hash || t.curve.hash
        }
        Y.prototype.keyPair = function(t) {
            return new T(this,t)
        }
        ,
        Y.prototype.keyFromPrivate = function(t, e) {
            return T.fromPrivate(this, t, e)
        }
        ,
        Y.prototype.keyFromPublic = function(t, e) {
            return T.fromPublic(this, t, e)
        }
        ,
        Y.prototype.genKeyPair = function(t) {
            t || (t = {});
            for (var e = new C({
                hash: this.hash,
                pers: t.pers,
                persEnc: t.persEnc || "utf8",
                entropy: t.entropy || j(this.hash.hmacStrength),
                entropyEnc: t.entropy && t.entropyEnc || "utf8",
                nonce: this.n.toArray()
            }), r = this.n.byteLength(), n = this.n.sub(new (c())(2)); ; ) {
                var i = new (c())(e.generate(r));
                if (!(i.cmp(n) > 0))
                    return i.iaddn(1),
                    this.keyFromPrivate(i)
            }
        }
        ,
        Y.prototype._truncateToN = function(t, e) {
            var r = 8 * t.byteLength() - this.n.bitLength();
            return (r > 0 && (t = t.ushrn(r)),
            !e && t.cmp(this.n) >= 0) ? t.sub(this.n) : t
        }
        ,
        Y.prototype.sign = function(t, e, r, n) {
            "object" == typeof r && (n = r,
            r = null),
            n || (n = {}),
            e = this.keyFromPrivate(e, r),
            t = this._truncateToN(new (c())(t,16));
            for (var i = this.n.byteLength(), o = e.getPrivate().toArray("be", i), s = t.toArray("be", i), a = new C({
                hash: this.hash,
                entropy: o,
                nonce: s,
                pers: n.pers,
                persEnc: n.persEnc || "utf8"
            }), u = this.n.sub(new (c())(1)), l = 0; ; l++) {
                var h = n.k ? n.k(l) : new (c())(a.generate(this.n.byteLength()));
                if (!(0 >= (h = this._truncateToN(h, !0)).cmpn(1) || h.cmp(u) >= 0)) {
                    var f = this.g.mul(h);
                    if (!f.isInfinity()) {
                        var d = f.getX()
                          , p = d.umod(this.n);
                        if (0 !== p.cmpn(0)) {
                            var m = h.invm(this.n).mul(p.mul(e.getPrivate()).iadd(t));
                            if (0 !== (m = m.umod(this.n)).cmpn(0)) {
                                var g = (f.getY().isOdd() ? 1 : 0) | (0 !== d.cmp(p) ? 2 : 0);
                                return n.canonical && m.cmp(this.nh) > 0 && (m = this.n.sub(m),
                                g ^= 1),
                                new D({
                                    r: p,
                                    s: m,
                                    recoveryParam: g
                                })
                            }
                        }
                    }
                }
            }
        }
        ,
        Y.prototype.verify = function(t, e, r, n) {
            t = this._truncateToN(new (c())(t,16)),
            r = this.keyFromPublic(r, n);
            var i, o = (e = new D(e,"hex")).r, s = e.s;
            if (0 > o.cmpn(1) || o.cmp(this.n) >= 0 || 0 > s.cmpn(1) || s.cmp(this.n) >= 0)
                return !1;
            var a = s.invm(this.n)
              , u = a.mul(t).umod(this.n)
              , l = a.mul(o).umod(this.n);
            return this.curve._maxwellTrick ? !(i = this.g.jmulAdd(u, r.getPublic(), l)).isInfinity() && i.eqXToP(o) : !(i = this.g.mulAdd(u, r.getPublic(), l)).isInfinity() && 0 === i.getX().umod(this.n).cmp(o)
        }
        ,
        Y.prototype.recoverPubKey = function(t, e, r, n) {
            G((3 & r) === r, "The recovery param is more than two bits"),
            e = new D(e,n);
            var i = this.n
              , o = new (c())(t)
              , s = e.r
              , a = e.s
              , u = 1 & r
              , l = r >> 1;
            if (s.cmp(this.curve.p.umod(this.curve.n)) >= 0 && l)
                throw Error("Unable to find sencond key candinate");
            s = l ? this.curve.pointFromX(s.add(this.curve.n), u) : this.curve.pointFromX(s, u);
            var h = e.r.invm(i)
              , f = i.sub(o).mul(h).umod(i)
              , d = a.mul(h).umod(i);
            return this.g.mulAdd(f, s, d)
        }
        ,
        Y.prototype.getKeyRecoveryParam = function(t, e, r, n) {
            if (null !== (e = new D(e,n)).recoveryParam)
                return e.recoveryParam;
            for (var i, o = 0; o < 4; o++) {
                try {
                    i = this.recoverPubKey(t, e, o)
                } catch (t) {
                    continue
                }
                if (i.eq(r))
                    return o
            }
            throw Error("Unable to find valid recovery factor")
        }
        ;
        var q = m(function(t, e) {
            e.version = "6.5.4",
            e.utils = b,
            e.rand = function() {
                throw Error("unsupported")
            }
            ,
            e.curve = S,
            e.curves = R,
            e.ec = Y,
            e.eddsa = null
        }).ec
          , H = r(36173)
          , K = r(13421);
        let Q = new K.Yd("signing-key/5.7.0")
          , J = null;
        function W() {
            return J || (J = new q("secp256k1")),
            J
        }
        class V {
            constructor(t) {
                (0,
                H.zG)(this, "curve", "secp256k1"),
                (0,
                H.zG)(this, "privateKey", (0,
                a.Dv)(t)),
                32 !== (0,
                a.E1)(this.privateKey) && Q.throwArgumentError("invalid private key", "privateKey", "[[ REDACTED ]]");
                let e = W().keyFromPrivate((0,
                a.lE)(this.privateKey));
                (0,
                H.zG)(this, "publicKey", "0x" + e.getPublic(!1, "hex")),
                (0,
                H.zG)(this, "compressedPublicKey", "0x" + e.getPublic(!0, "hex")),
                (0,
                H.zG)(this, "_isSigningKey", !0)
            }
            _addPoint(t) {
                let e = W().keyFromPublic((0,
                a.lE)(this.publicKey))
                  , r = W().keyFromPublic((0,
                a.lE)(t));
                return "0x" + e.pub.add(r.pub).encodeCompressed("hex")
            }
            signDigest(t) {
                let e = W().keyFromPrivate((0,
                a.lE)(this.privateKey))
                  , r = (0,
                a.lE)(t);
                32 !== r.length && Q.throwArgumentError("bad digest length", "digest", t);
                let n = e.sign(r, {
                    canonical: !0
                });
                return (0,
                a.N)({
                    recoveryParam: n.recoveryParam,
                    r: (0,
                    a.$m)("0x" + n.r.toString(16), 32),
                    s: (0,
                    a.$m)("0x" + n.s.toString(16), 32)
                })
            }
            computeSharedSecret(t) {
                let e = W().keyFromPrivate((0,
                a.lE)(this.privateKey))
                  , r = W().keyFromPublic((0,
                a.lE)(X(t)));
                return (0,
                a.$m)("0x" + e.derive(r.getPublic()).toString(16), 32)
            }
            static isSigningKey(t) {
                return !!(t && t._isSigningKey)
            }
        }
        function X(t, e) {
            let r = (0,
            a.lE)(t);
            if (32 === r.length) {
                let t = new V(r);
                return e ? "0x" + W().keyFromPrivate(r).getPublic(!0, "hex") : t.publicKey
            }
            return 33 === r.length ? e ? (0,
            a.Dv)(r) : "0x" + W().keyFromPublic(r).getPublic(!1, "hex") : 65 === r.length ? e ? "0x" + W().keyFromPublic(r).getPublic(!0, "hex") : (0,
            a.Dv)(r) : Q.throwArgumentError("invalid public or private key", "key", "[REDACTED]")
        }
        let Z = new K.Yd("transactions/5.7.0");
        function $(t) {
            return "0x" === t ? null : (0,
            o.Kn)(t)
        }
        function tt(t) {
            return "0x" === t ? u._Y : s.O$.from(t)
        }
        function te(t, e) {
            return function(t) {
                let e = X(t);
                return (0,
                o.Kn)((0,
                a.p3)((0,
                l.w)((0,
                a.p3)(e, 1)), 12))
            }(function(t, e) {
                let r = (0,
                a.N)(e)
                  , n = {
                    r: (0,
                    a.lE)(r.r),
                    s: (0,
                    a.lE)(r.s)
                };
                return "0x" + W().recoverPubKey((0,
                a.lE)(t), n, r.recoveryParam).encode("hex", !1)
            }((0,
            a.lE)(t), e))
        }
        function tr(t, e) {
            let r = (0,
            a.G1)(s.O$.from(t).toHexString());
            return r.length > 32 && Z.throwArgumentError("invalid length for " + e, "transaction:" + e, t),
            r
        }
        function tn(t, e) {
            return {
                address: (0,
                o.Kn)(t),
                storageKeys: (e || []).map((e,r)=>(32 !== (0,
                a.E1)(e) && Z.throwArgumentError("invalid access list storageKey", `accessList[${t}:${r}]`, e),
                e.toLowerCase()))
            }
        }
        function ti(t) {
            if (Array.isArray(t))
                return t.map((t,e)=>Array.isArray(t) ? (t.length > 2 && Z.throwArgumentError("access list expected to be [ address, storageKeys[] ]", `value[${e}]`, t),
                tn(t[0], t[1])) : tn(t.address, t.storageKeys));
            let e = Object.keys(t).map(e=>{
                let r = t[e].reduce((t,e)=>(t[e] = !0,
                t), {});
                return tn(e, Object.keys(r).sort())
            }
            );
            return e.sort((t,e)=>t.address.localeCompare(e.address)),
            e
        }
        function to(t) {
            return ti(t).map(t=>[t.address, t.storageKeys])
        }
        function ts(t, e) {
            if (null != t.gasPrice) {
                let e = s.O$.from(t.gasPrice)
                  , r = s.O$.from(t.maxFeePerGas || 0);
                e.eq(r) || Z.throwArgumentError("mismatch EIP-1559 gasPrice != maxFeePerGas", "tx", {
                    gasPrice: e,
                    maxFeePerGas: r
                })
            }
            let r = [tr(t.chainId || 0, "chainId"), tr(t.nonce || 0, "nonce"), tr(t.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"), tr(t.maxFeePerGas || 0, "maxFeePerGas"), tr(t.gasLimit || 0, "gasLimit"), null != t.to ? (0,
            o.Kn)(t.to) : "0x", tr(t.value || 0, "value"), t.data || "0x", to(t.accessList || [])];
            if (e) {
                let t = (0,
                a.N)(e);
                r.push(tr(t.recoveryParam, "recoveryParam")),
                r.push((0,
                a.G1)(t.r)),
                r.push((0,
                a.G1)(t.s))
            }
            return (0,
            a.xs)(["0x02", h.c(r)])
        }
        function ta(t, e) {
            let r = [tr(t.chainId || 0, "chainId"), tr(t.nonce || 0, "nonce"), tr(t.gasPrice || 0, "gasPrice"), tr(t.gasLimit || 0, "gasLimit"), null != t.to ? (0,
            o.Kn)(t.to) : "0x", tr(t.value || 0, "value"), t.data || "0x", to(t.accessList || [])];
            if (e) {
                let t = (0,
                a.N)(e);
                r.push(tr(t.recoveryParam, "recoveryParam")),
                r.push((0,
                a.G1)(t.r)),
                r.push((0,
                a.G1)(t.s))
            }
            return (0,
            a.xs)(["0x01", h.c(r)])
        }
        function tu(t, e, r) {
            try {
                let r = tt(e[0]).toNumber();
                if (0 !== r && 1 !== r)
                    throw Error("bad recid");
                t.v = r
            } catch (t) {
                Z.throwArgumentError("invalid v for transaction type: 1", "v", e[0])
            }
            t.r = (0,
            a.$m)(e[1], 32),
            t.s = (0,
            a.$m)(e[2], 32);
            try {
                let e = (0,
                l.w)(r(t));
                t.from = te(e, {
                    r: t.r,
                    s: t.s,
                    recoveryParam: t.v
                })
            } catch (t) {}
        }
        function tl(t) {
            let e = (0,
            a.lE)(t);
            if (e[0] > 127)
                return function(t) {
                    let e = h.J(t);
                    9 !== e.length && 6 !== e.length && Z.throwArgumentError("invalid raw transaction", "rawTransaction", t);
                    let r = {
                        nonce: tt(e[0]).toNumber(),
                        gasPrice: tt(e[1]),
                        gasLimit: tt(e[2]),
                        to: $(e[3]),
                        value: tt(e[4]),
                        data: e[5],
                        chainId: 0
                    };
                    if (6 === e.length)
                        return r;
                    try {
                        r.v = s.O$.from(e[6]).toNumber()
                    } catch (t) {
                        return r
                    }
                    if (r.r = (0,
                    a.$m)(e[7], 32),
                    r.s = (0,
                    a.$m)(e[8], 32),
                    s.O$.from(r.r).isZero() && s.O$.from(r.s).isZero())
                        r.chainId = r.v,
                        r.v = 0;
                    else {
                        r.chainId = Math.floor((r.v - 35) / 2),
                        r.chainId < 0 && (r.chainId = 0);
                        let n = r.v - 27
                          , i = e.slice(0, 6);
                        0 !== r.chainId && (i.push((0,
                        a.Dv)(r.chainId)),
                        i.push("0x"),
                        i.push("0x"),
                        n -= 2 * r.chainId + 8);
                        let o = (0,
                        l.w)(h.c(i));
                        try {
                            r.from = te(o, {
                                r: (0,
                                a.Dv)(r.r),
                                s: (0,
                                a.Dv)(r.s),
                                recoveryParam: n
                            })
                        } catch (t) {}
                        r.hash = (0,
                        l.w)(t)
                    }
                    return r.type = null,
                    r
                }(e);
            switch (e[0]) {
            case 1:
                return function(t) {
                    let e = h.J(t.slice(1));
                    8 !== e.length && 11 !== e.length && Z.throwArgumentError("invalid component count for transaction type: 1", "payload", (0,
                    a.Dv)(t));
                    let r = {
                        type: 1,
                        chainId: tt(e[0]).toNumber(),
                        nonce: tt(e[1]).toNumber(),
                        gasPrice: tt(e[2]),
                        gasLimit: tt(e[3]),
                        to: $(e[4]),
                        value: tt(e[5]),
                        data: e[6],
                        accessList: ti(e[7])
                    };
                    return 8 === e.length || (r.hash = (0,
                    l.w)(t),
                    tu(r, e.slice(8), ta)),
                    r
                }(e);
            case 2:
                return function(t) {
                    let e = h.J(t.slice(1));
                    9 !== e.length && 12 !== e.length && Z.throwArgumentError("invalid component count for transaction type: 2", "payload", (0,
                    a.Dv)(t));
                    let r = tt(e[2])
                      , n = tt(e[3])
                      , i = {
                        type: 2,
                        chainId: tt(e[0]).toNumber(),
                        nonce: tt(e[1]).toNumber(),
                        maxPriorityFeePerGas: r,
                        maxFeePerGas: n,
                        gasPrice: null,
                        gasLimit: tt(e[4]),
                        to: $(e[5]),
                        value: tt(e[6]),
                        data: e[7],
                        accessList: ti(e[8])
                    };
                    return 9 === e.length || (i.hash = (0,
                    l.w)(t),
                    tu(i, e.slice(9), ts)),
                    i
                }(e)
            }
            return Z.throwError(`unsupported transaction type: ${e[0]}`, K.Yd.errors.UNSUPPORTED_OPERATION, {
                operation: "parseTransaction",
                transactionType: e[0]
            })
        }
        (n = i || (i = {}))[n.legacy = 0] = "legacy",
        n[n.eip2930 = 1] = "eip2930",
        n[n.eip1559 = 2] = "eip1559"
    },
    58789: function(t, e, r) {
        "use strict";
        r.d(e, {
            dF: function() {
                return M
            },
            bM: function() {
                return E
            },
            vz: function() {
                return _
            }
        });
        var n = r(9784)
          , i = r(13421)
          , o = r(38418)
          , s = r(22594);
        let a = new i.Yd(o.i)
          , u = {}
          , l = s.O$.from(0)
          , h = s.O$.from(-1);
        function f(t, e, r, n) {
            let o = {
                fault: e,
                operation: r
            };
            return void 0 !== n && (o.value = n),
            a.throwError(t, i.Yd.errors.NUMERIC_FAULT, o)
        }
        let c = "0";
        for (; c.length < 256; )
            c += c;
        function d(t) {
            if ("number" != typeof t)
                try {
                    t = s.O$.from(t).toNumber()
                } catch (t) {}
            return "number" == typeof t && t >= 0 && t <= 256 && !(t % 1) ? "1" + c.substring(0, t) : a.throwArgumentError("invalid decimal size", "decimals", t)
        }
        function p(t, e) {
            null == e && (e = 0);
            let r = d(e)
              , n = (t = s.O$.from(t)).lt(l);
            n && (t = t.mul(h));
            let i = t.mod(r).toString();
            for (; i.length < r.length - 1; )
                i = "0" + i;
            i = i.match(/^([0-9]*[1-9]|0)(0*)/)[1];
            let o = t.div(r).toString();
            return t = 1 === r.length ? o : o + "." + i,
            n && (t = "-" + t),
            t
        }
        function m(t, e) {
            null == e && (e = 0);
            let r = d(e);
            "string" == typeof t && t.match(/^-?[0-9.]+$/) || a.throwArgumentError("invalid decimal value", "value", t);
            let n = "-" === t.substring(0, 1);
            n && (t = t.substring(1)),
            "." === t && a.throwArgumentError("missing value", "value", t);
            let i = t.split(".");
            i.length > 2 && a.throwArgumentError("too many decimal points", "value", t);
            let o = i[0]
              , u = i[1];
            for (o || (o = "0"),
            u || (u = "0"); "0" === u[u.length - 1]; )
                u = u.substring(0, u.length - 1);
            for (u.length > r.length - 1 && f("fractional component exceeds decimals", "underflow", "parseFixed"),
            "" === u && (u = "0"); u.length < r.length - 1; )
                u += "0";
            let l = s.O$.from(o)
              , c = s.O$.from(u)
              , p = l.mul(r).add(c);
            return n && (p = p.mul(h)),
            p
        }
        class g {
            constructor(t, e, r, n) {
                t !== u && a.throwError("cannot use FixedFormat constructor; use FixedFormat.from", i.Yd.errors.UNSUPPORTED_OPERATION, {
                    operation: "new FixedFormat"
                }),
                this.signed = e,
                this.width = r,
                this.decimals = n,
                this.name = (e ? "" : "u") + "fixed" + String(r) + "x" + String(n),
                this._multiplier = d(n),
                Object.freeze(this)
            }
            static from(t) {
                if (t instanceof g)
                    return t;
                "number" == typeof t && (t = `fixed128x${t}`);
                let e = !0
                  , r = 128
                  , n = 18;
                if ("string" == typeof t) {
                    if ("fixed" === t)
                        ;
                    else if ("ufixed" === t)
                        e = !1;
                    else {
                        let i = t.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
                        i || a.throwArgumentError("invalid fixed format", "format", t),
                        e = "u" !== i[1],
                        r = parseInt(i[2]),
                        n = parseInt(i[3])
                    }
                } else if (t) {
                    let i = (e,r,n)=>null == t[e] ? n : (typeof t[e] !== r && a.throwArgumentError("invalid fixed format (" + e + " not " + r + ")", "format." + e, t[e]),
                    t[e]);
                    e = i("signed", "boolean", e),
                    r = i("width", "number", r),
                    n = i("decimals", "number", n)
                }
                return r % 8 && a.throwArgumentError("invalid fixed format width (not byte aligned)", "format.width", r),
                n > 80 && a.throwArgumentError("invalid fixed format (decimals too large)", "format.decimals", n),
                new g(u,e,r,n)
            }
        }
        class v {
            constructor(t, e, r, n) {
                t !== u && a.throwError("cannot use FixedNumber constructor; use FixedNumber.from", i.Yd.errors.UNSUPPORTED_OPERATION, {
                    operation: "new FixedFormat"
                }),
                this.format = n,
                this._hex = e,
                this._value = r,
                this._isFixedNumber = !0,
                Object.freeze(this)
            }
            _checkFormat(t) {
                this.format.name !== t.format.name && a.throwArgumentError("incompatible format; use fixedNumber.toFormat", "other", t)
            }
            addUnsafe(t) {
                this._checkFormat(t);
                let e = m(this._value, this.format.decimals)
                  , r = m(t._value, t.format.decimals);
                return v.fromValue(e.add(r), this.format.decimals, this.format)
            }
            subUnsafe(t) {
                this._checkFormat(t);
                let e = m(this._value, this.format.decimals)
                  , r = m(t._value, t.format.decimals);
                return v.fromValue(e.sub(r), this.format.decimals, this.format)
            }
            mulUnsafe(t) {
                this._checkFormat(t);
                let e = m(this._value, this.format.decimals)
                  , r = m(t._value, t.format.decimals);
                return v.fromValue(e.mul(r).div(this.format._multiplier), this.format.decimals, this.format)
            }
            divUnsafe(t) {
                this._checkFormat(t);
                let e = m(this._value, this.format.decimals)
                  , r = m(t._value, t.format.decimals);
                return v.fromValue(e.mul(this.format._multiplier).div(r), this.format.decimals, this.format)
            }
            floor() {
                let t = this.toString().split(".");
                1 === t.length && t.push("0");
                let e = v.from(t[0], this.format)
                  , r = !t[1].match(/^(0*)$/);
                return this.isNegative() && r && (e = e.subUnsafe(y.toFormat(e.format))),
                e
            }
            ceiling() {
                let t = this.toString().split(".");
                1 === t.length && t.push("0");
                let e = v.from(t[0], this.format)
                  , r = !t[1].match(/^(0*)$/);
                return !this.isNegative() && r && (e = e.addUnsafe(y.toFormat(e.format))),
                e
            }
            round(t) {
                null == t && (t = 0);
                let e = this.toString().split(".");
                if (1 === e.length && e.push("0"),
                (t < 0 || t > 80 || t % 1) && a.throwArgumentError("invalid decimal count", "decimals", t),
                e[1].length <= t)
                    return this;
                let r = v.from("1" + c.substring(0, t), this.format)
                  , n = b.toFormat(this.format);
                return this.mulUnsafe(r).addUnsafe(n).floor().divUnsafe(r)
            }
            isZero() {
                return "0.0" === this._value || "0" === this._value
            }
            isNegative() {
                return "-" === this._value[0]
            }
            toString() {
                return this._value
            }
            toHexString(t) {
                if (null == t)
                    return this._hex;
                t % 8 && a.throwArgumentError("invalid byte width", "width", t);
                let e = s.O$.from(this._hex).fromTwos(this.format.width).toTwos(t).toHexString();
                return (0,
                n.$m)(e, t / 8)
            }
            toUnsafeFloat() {
                return parseFloat(this.toString())
            }
            toFormat(t) {
                return v.fromString(this._value, t)
            }
            static fromValue(t, e, r) {
                return null != r || null == e || (0,
                s.Zm)(e) || (r = e,
                e = null),
                null == e && (e = 0),
                null == r && (r = "fixed"),
                v.fromString(p(t, e), g.from(r))
            }
            static fromString(t, e) {
                null == e && (e = "fixed");
                let r = g.from(e)
                  , i = m(t, r.decimals);
                !r.signed && i.lt(l) && f("unsigned value cannot be negative", "overflow", "value", t);
                let o = null;
                return r.signed ? o = i.toTwos(r.width).toHexString() : (o = i.toHexString(),
                o = (0,
                n.$m)(o, r.width / 8)),
                new v(u,o,p(i, r.decimals),r)
            }
            static fromBytes(t, e) {
                null == e && (e = "fixed");
                let r = g.from(e);
                if ((0,
                n.lE)(t).length > r.width / 8)
                    throw Error("overflow");
                let i = s.O$.from(t);
                return r.signed && (i = i.fromTwos(r.width)),
                new v(u,i.toTwos((r.signed ? 0 : 1) + r.width).toHexString(),p(i, r.decimals),r)
            }
            static from(t, e) {
                if ("string" == typeof t)
                    return v.fromString(t, e);
                if ((0,
                n._t)(t))
                    return v.fromBytes(t, e);
                try {
                    return v.fromValue(t, 0, e)
                } catch (t) {
                    if (t.code !== i.Yd.errors.INVALID_ARGUMENT)
                        throw t
                }
                return a.throwArgumentError("invalid FixedNumber value", "value", t)
            }
            static isFixedNumber(t) {
                return !!(t && t._isFixedNumber)
            }
        }
        let y = v.from(1)
          , b = v.from("0.5")
          , A = new i.Yd("units/5.7.0")
          , w = ["wei", "kwei", "mwei", "gwei", "szabo", "finney", "ether"];
        function E(t, e) {
            if ("string" == typeof e) {
                let t = w.indexOf(e);
                -1 !== t && (e = 3 * t)
            }
            return p(t, null != e ? e : 18)
        }
        function _(t, e) {
            if ("string" != typeof t && A.throwArgumentError("value must be a string", "value", t),
            "string" == typeof e) {
                let t = w.indexOf(e);
                -1 !== t && (e = 3 * t)
            }
            return m(t, null != e ? e : 18)
        }
        function M(t) {
            return E(t, 18)
        }
    },
    1192: function(t) {
        "use strict";
        for (var e = "qpzry9x8gf2tvdw0s3jn54khce6mua7l", r = {}, n = 0; n < e.length; n++) {
            var i = e.charAt(n);
            if (void 0 !== r[i])
                throw TypeError(i + " is ambiguous");
            r[i] = n
        }
        function o(t) {
            var e = t >> 25;
            return (33554431 & t) << 5 ^ 996825010 & -(e >> 0 & 1) ^ 642813549 & -(e >> 1 & 1) ^ 513874426 & -(e >> 2 & 1) ^ 1027748829 & -(e >> 3 & 1) ^ 705979059 & -(e >> 4 & 1)
        }
        function s(t) {
            for (var e = 1, r = 0; r < t.length; ++r) {
                var n = t.charCodeAt(r);
                if (n < 33 || n > 126)
                    return "Invalid prefix (" + t + ")";
                e = o(e) ^ n >> 5
            }
            for (r = 0,
            e = o(e); r < t.length; ++r) {
                var i = t.charCodeAt(r);
                e = o(e) ^ 31 & i
            }
            return e
        }
        function a(t, e) {
            if (e = e || 90,
            t.length < 8)
                return t + " too short";
            if (t.length > e)
                return "Exceeds length limit";
            var n = t.toLowerCase()
              , i = t.toUpperCase();
            if (t !== n && t !== i)
                return "Mixed-case string " + t;
            var a = (t = n).lastIndexOf("1");
            if (-1 === a)
                return "No separator character for " + t;
            if (0 === a)
                return "Missing prefix for " + t;
            var u = t.slice(0, a)
              , l = t.slice(a + 1);
            if (l.length < 6)
                return "Data too short";
            var h = s(u);
            if ("string" == typeof h)
                return h;
            for (var f = [], c = 0; c < l.length; ++c) {
                var d = l.charAt(c)
                  , p = r[d];
                if (void 0 === p)
                    return "Unknown character " + d;
                h = o(h) ^ p,
                c + 6 >= l.length || f.push(p)
            }
            return 1 !== h ? "Invalid checksum for " + t : {
                prefix: u,
                words: f
            }
        }
        function u(t, e, r, n) {
            for (var i = 0, o = 0, s = (1 << r) - 1, a = [], u = 0; u < t.length; ++u)
                for (i = i << e | t[u],
                o += e; o >= r; )
                    a.push(i >> (o -= r) & s);
            if (n)
                o > 0 && a.push(i << r - o & s);
            else {
                if (o >= e)
                    return "Excess padding";
                if (i << r - o & s)
                    return "Non-zero padding"
            }
            return a
        }
        t.exports = {
            decodeUnsafe: function() {
                var t = a.apply(null, arguments);
                if ("object" == typeof t)
                    return t
            },
            decode: function(t) {
                var e = a.apply(null, arguments);
                if ("object" == typeof e)
                    return e;
                throw Error(e)
            },
            encode: function(t, r, n) {
                if (n = n || 90,
                t.length + 7 + r.length > n)
                    throw TypeError("Exceeds length limit");
                var i = s(t = t.toLowerCase());
                if ("string" == typeof i)
                    throw Error(i);
                for (var a = t + "1", u = 0; u < r.length; ++u) {
                    var l = r[u];
                    if (l >> 5 != 0)
                        throw Error("Non 5-bit word");
                    i = o(i) ^ l,
                    a += e.charAt(l)
                }
                for (u = 0; u < 6; ++u)
                    i = o(i);
                for (i ^= 1,
                u = 0; u < 6; ++u) {
                    var h = i >> (5 - u) * 5 & 31;
                    a += e.charAt(h)
                }
                return a
            },
            toWordsUnsafe: function(t) {
                var e = u(t, 8, 5, !0);
                if (Array.isArray(e))
                    return e
            },
            toWords: function(t) {
                var e = u(t, 8, 5, !0);
                if (Array.isArray(e))
                    return e;
                throw Error(e)
            },
            fromWordsUnsafe: function(t) {
                var e = u(t, 5, 8, !1);
                if (Array.isArray(e))
                    return e
            },
            fromWords: function(t) {
                var e = u(t, 5, 8, !1);
                if (Array.isArray(e))
                    return e;
                throw Error(e)
            }
        }
    },
    58171: function(t, e, r) {
        !function(t, e) {
            "use strict";
            function n(t, e) {
                if (!t)
                    throw Error(e || "Assertion failed")
            }
            function i(t, e) {
                t.super_ = e;
                var r = function() {};
                r.prototype = e.prototype,
                t.prototype = new r,
                t.prototype.constructor = t
            }
            function o(t, e, r) {
                if (o.isBN(t))
                    return t;
                this.negative = 0,
                this.words = null,
                this.length = 0,
                this.red = null,
                null !== t && (("le" === e || "be" === e) && (r = e,
                e = 10),
                this._init(t || 0, e || 10, r || "be"))
            }
            "object" == typeof t ? t.exports = o : e.BN = o,
            o.BN = o,
            o.wordSize = 26;
            try {
                f = "undefined" != typeof window && void 0 !== window.Buffer ? window.Buffer : r(46601).Buffer
            } catch (t) {}
            function s(t, e) {
                var r = t.charCodeAt(e);
                return r >= 48 && r <= 57 ? r - 48 : r >= 65 && r <= 70 ? r - 55 : r >= 97 && r <= 102 ? r - 87 : void n(!1, "Invalid character in " + t)
            }
            function a(t, e, r) {
                var n = s(t, r);
                return r - 1 >= e && (n |= s(t, r - 1) << 4),
                n
            }
            function u(t, e, r, i) {
                for (var o = 0, s = 0, a = Math.min(t.length, r), u = e; u < a; u++) {
                    var l = t.charCodeAt(u) - 48;
                    o *= i,
                    s = l >= 49 ? l - 49 + 10 : l >= 17 ? l - 17 + 10 : l,
                    n(l >= 0 && s < i, "Invalid character"),
                    o += s
                }
                return o
            }
            function l(t, e) {
                t.words = e.words,
                t.length = e.length,
                t.negative = e.negative,
                t.red = e.red
            }
            if (o.isBN = function(t) {
                return t instanceof o || null !== t && "object" == typeof t && t.constructor.wordSize === o.wordSize && Array.isArray(t.words)
            }
            ,
            o.max = function(t, e) {
                return t.cmp(e) > 0 ? t : e
            }
            ,
            o.min = function(t, e) {
                return 0 > t.cmp(e) ? t : e
            }
            ,
            o.prototype._init = function(t, e, r) {
                if ("number" == typeof t)
                    return this._initNumber(t, e, r);
                if ("object" == typeof t)
                    return this._initArray(t, e, r);
                "hex" === e && (e = 16),
                n(e === (0 | e) && e >= 2 && e <= 36);
                var i = 0;
                "-" === (t = t.toString().replace(/\s+/g, ""))[0] && (i++,
                this.negative = 1),
                i < t.length && (16 === e ? this._parseHex(t, i, r) : (this._parseBase(t, e, i),
                "le" === r && this._initArray(this.toArray(), e, r)))
            }
            ,
            o.prototype._initNumber = function(t, e, r) {
                t < 0 && (this.negative = 1,
                t = -t),
                t < 67108864 ? (this.words = [67108863 & t],
                this.length = 1) : t < 4503599627370496 ? (this.words = [67108863 & t, t / 67108864 & 67108863],
                this.length = 2) : (n(t < 9007199254740992),
                this.words = [67108863 & t, t / 67108864 & 67108863, 1],
                this.length = 3),
                "le" === r && this._initArray(this.toArray(), e, r)
            }
            ,
            o.prototype._initArray = function(t, e, r) {
                if (n("number" == typeof t.length),
                t.length <= 0)
                    return this.words = [0],
                    this.length = 1,
                    this;
                this.length = Math.ceil(t.length / 3),
                this.words = Array(this.length);
                for (var i, o, s = 0; s < this.length; s++)
                    this.words[s] = 0;
                var a = 0;
                if ("be" === r)
                    for (s = t.length - 1,
                    i = 0; s >= 0; s -= 3)
                        o = t[s] | t[s - 1] << 8 | t[s - 2] << 16,
                        this.words[i] |= o << a & 67108863,
                        this.words[i + 1] = o >>> 26 - a & 67108863,
                        (a += 24) >= 26 && (a -= 26,
                        i++);
                else if ("le" === r)
                    for (s = 0,
                    i = 0; s < t.length; s += 3)
                        o = t[s] | t[s + 1] << 8 | t[s + 2] << 16,
                        this.words[i] |= o << a & 67108863,
                        this.words[i + 1] = o >>> 26 - a & 67108863,
                        (a += 24) >= 26 && (a -= 26,
                        i++);
                return this._strip()
            }
            ,
            o.prototype._parseHex = function(t, e, r) {
                this.length = Math.ceil((t.length - e) / 6),
                this.words = Array(this.length);
                for (var n, i = 0; i < this.length; i++)
                    this.words[i] = 0;
                var o = 0
                  , s = 0;
                if ("be" === r)
                    for (i = t.length - 1; i >= e; i -= 2)
                        n = a(t, e, i) << o,
                        this.words[s] |= 67108863 & n,
                        o >= 18 ? (o -= 18,
                        s += 1,
                        this.words[s] |= n >>> 26) : o += 8;
                else
                    for (i = (t.length - e) % 2 == 0 ? e + 1 : e; i < t.length; i += 2)
                        n = a(t, e, i) << o,
                        this.words[s] |= 67108863 & n,
                        o >= 18 ? (o -= 18,
                        s += 1,
                        this.words[s] |= n >>> 26) : o += 8;
                this._strip()
            }
            ,
            o.prototype._parseBase = function(t, e, r) {
                this.words = [0],
                this.length = 1;
                for (var n = 0, i = 1; i <= 67108863; i *= e)
                    n++;
                n--,
                i = i / e | 0;
                for (var o = t.length - r, s = o % n, a = Math.min(o, o - s) + r, l = 0, h = r; h < a; h += n)
                    l = u(t, h, h + n, e),
                    this.imuln(i),
                    this.words[0] + l < 67108864 ? this.words[0] += l : this._iaddn(l);
                if (0 !== s) {
                    var f = 1;
                    for (l = u(t, h, t.length, e),
                    h = 0; h < s; h++)
                        f *= e;
                    this.imuln(f),
                    this.words[0] + l < 67108864 ? this.words[0] += l : this._iaddn(l)
                }
                this._strip()
            }
            ,
            o.prototype.copy = function(t) {
                t.words = Array(this.length);
                for (var e = 0; e < this.length; e++)
                    t.words[e] = this.words[e];
                t.length = this.length,
                t.negative = this.negative,
                t.red = this.red
            }
            ,
            o.prototype._move = function(t) {
                l(t, this)
            }
            ,
            o.prototype.clone = function() {
                var t = new o(null);
                return this.copy(t),
                t
            }
            ,
            o.prototype._expand = function(t) {
                for (; this.length < t; )
                    this.words[this.length++] = 0;
                return this
            }
            ,
            o.prototype._strip = function() {
                for (; this.length > 1 && 0 === this.words[this.length - 1]; )
                    this.length--;
                return this._normSign()
            }
            ,
            o.prototype._normSign = function() {
                return 1 === this.length && 0 === this.words[0] && (this.negative = 0),
                this
            }
            ,
            "undefined" != typeof Symbol && "function" == typeof Symbol.for)
                try {
                    o.prototype[Symbol.for("nodejs.util.inspect.custom")] = h
                } catch (t) {
                    o.prototype.inspect = h
                }
            else
                o.prototype.inspect = h;
            function h() {
                return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
            }
            var f, c = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"], d = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], p = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
            function m(t, e, r) {
                r.negative = e.negative ^ t.negative;
                var n = t.length + e.length | 0;
                r.length = n,
                n = n - 1 | 0;
                var i = 0 | t.words[0]
                  , o = 0 | e.words[0]
                  , s = i * o
                  , a = 67108863 & s
                  , u = s / 67108864 | 0;
                r.words[0] = a;
                for (var l = 1; l < n; l++) {
                    for (var h = u >>> 26, f = 67108863 & u, c = Math.min(l, e.length - 1), d = Math.max(0, l - t.length + 1); d <= c; d++) {
                        var p = l - d | 0;
                        h += (s = (i = 0 | t.words[p]) * (o = 0 | e.words[d]) + f) / 67108864 | 0,
                        f = 67108863 & s
                    }
                    r.words[l] = 0 | f,
                    u = 0 | h
                }
                return 0 !== u ? r.words[l] = 0 | u : r.length--,
                r._strip()
            }
            o.prototype.toString = function(t, e) {
                if (e = 0 | e || 1,
                16 === (t = t || 10) || "hex" === t) {
                    r = "";
                    for (var r, i = 0, o = 0, s = 0; s < this.length; s++) {
                        var a = this.words[s]
                          , u = ((a << i | o) & 16777215).toString(16);
                        o = a >>> 24 - i & 16777215,
                        (i += 2) >= 26 && (i -= 26,
                        s--),
                        r = 0 !== o || s !== this.length - 1 ? c[6 - u.length] + u + r : u + r
                    }
                    for (0 !== o && (r = o.toString(16) + r); r.length % e != 0; )
                        r = "0" + r;
                    return 0 !== this.negative && (r = "-" + r),
                    r
                }
                if (t === (0 | t) && t >= 2 && t <= 36) {
                    var l = d[t]
                      , h = p[t];
                    r = "";
                    var f = this.clone();
                    for (f.negative = 0; !f.isZero(); ) {
                        var m = f.modrn(h).toString(t);
                        r = (f = f.idivn(h)).isZero() ? m + r : c[l - m.length] + m + r
                    }
                    for (this.isZero() && (r = "0" + r); r.length % e != 0; )
                        r = "0" + r;
                    return 0 !== this.negative && (r = "-" + r),
                    r
                }
                n(!1, "Base should be between 2 and 36")
            }
            ,
            o.prototype.toNumber = function() {
                var t = this.words[0];
                return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"),
                0 !== this.negative ? -t : t
            }
            ,
            o.prototype.toJSON = function() {
                return this.toString(16, 2)
            }
            ,
            f && (o.prototype.toBuffer = function(t, e) {
                return this.toArrayLike(f, t, e)
            }
            ),
            o.prototype.toArray = function(t, e) {
                return this.toArrayLike(Array, t, e)
            }
            ,
            o.prototype.toArrayLike = function(t, e, r) {
                this._strip();
                var i = this.byteLength()
                  , o = r || Math.max(1, i);
                n(i <= o, "byte array longer than desired length"),
                n(o > 0, "Requested array length <= 0");
                var s = t.allocUnsafe ? t.allocUnsafe(o) : new t(o);
                return this["_toArrayLike" + ("le" === e ? "LE" : "BE")](s, i),
                s
            }
            ,
            o.prototype._toArrayLikeLE = function(t, e) {
                for (var r = 0, n = 0, i = 0, o = 0; i < this.length; i++) {
                    var s = this.words[i] << o | n;
                    t[r++] = 255 & s,
                    r < t.length && (t[r++] = s >> 8 & 255),
                    r < t.length && (t[r++] = s >> 16 & 255),
                    6 === o ? (r < t.length && (t[r++] = s >> 24 & 255),
                    n = 0,
                    o = 0) : (n = s >>> 24,
                    o += 2)
                }
                if (r < t.length)
                    for (t[r++] = n; r < t.length; )
                        t[r++] = 0
            }
            ,
            o.prototype._toArrayLikeBE = function(t, e) {
                for (var r = t.length - 1, n = 0, i = 0, o = 0; i < this.length; i++) {
                    var s = this.words[i] << o | n;
                    t[r--] = 255 & s,
                    r >= 0 && (t[r--] = s >> 8 & 255),
                    r >= 0 && (t[r--] = s >> 16 & 255),
                    6 === o ? (r >= 0 && (t[r--] = s >> 24 & 255),
                    n = 0,
                    o = 0) : (n = s >>> 24,
                    o += 2)
                }
                if (r >= 0)
                    for (t[r--] = n; r >= 0; )
                        t[r--] = 0
            }
            ,
            Math.clz32 ? o.prototype._countBits = function(t) {
                return 32 - Math.clz32(t)
            }
            : o.prototype._countBits = function(t) {
                var e = t
                  , r = 0;
                return e >= 4096 && (r += 13,
                e >>>= 13),
                e >= 64 && (r += 7,
                e >>>= 7),
                e >= 8 && (r += 4,
                e >>>= 4),
                e >= 2 && (r += 2,
                e >>>= 2),
                r + e
            }
            ,
            o.prototype._zeroBits = function(t) {
                if (0 === t)
                    return 26;
                var e = t
                  , r = 0;
                return (8191 & e) == 0 && (r += 13,
                e >>>= 13),
                (127 & e) == 0 && (r += 7,
                e >>>= 7),
                (15 & e) == 0 && (r += 4,
                e >>>= 4),
                (3 & e) == 0 && (r += 2,
                e >>>= 2),
                (1 & e) == 0 && r++,
                r
            }
            ,
            o.prototype.bitLength = function() {
                var t = this.words[this.length - 1]
                  , e = this._countBits(t);
                return (this.length - 1) * 26 + e
            }
            ,
            o.prototype.zeroBits = function() {
                if (this.isZero())
                    return 0;
                for (var t = 0, e = 0; e < this.length; e++) {
                    var r = this._zeroBits(this.words[e]);
                    if (t += r,
                    26 !== r)
                        break
                }
                return t
            }
            ,
            o.prototype.byteLength = function() {
                return Math.ceil(this.bitLength() / 8)
            }
            ,
            o.prototype.toTwos = function(t) {
                return 0 !== this.negative ? this.abs().inotn(t).iaddn(1) : this.clone()
            }
            ,
            o.prototype.fromTwos = function(t) {
                return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone()
            }
            ,
            o.prototype.isNeg = function() {
                return 0 !== this.negative
            }
            ,
            o.prototype.neg = function() {
                return this.clone().ineg()
            }
            ,
            o.prototype.ineg = function() {
                return this.isZero() || (this.negative ^= 1),
                this
            }
            ,
            o.prototype.iuor = function(t) {
                for (; this.length < t.length; )
                    this.words[this.length++] = 0;
                for (var e = 0; e < t.length; e++)
                    this.words[e] = this.words[e] | t.words[e];
                return this._strip()
            }
            ,
            o.prototype.ior = function(t) {
                return n((this.negative | t.negative) == 0),
                this.iuor(t)
            }
            ,
            o.prototype.or = function(t) {
                return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this)
            }
            ,
            o.prototype.uor = function(t) {
                return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this)
            }
            ,
            o.prototype.iuand = function(t) {
                var e;
                e = this.length > t.length ? t : this;
                for (var r = 0; r < e.length; r++)
                    this.words[r] = this.words[r] & t.words[r];
                return this.length = e.length,
                this._strip()
            }
            ,
            o.prototype.iand = function(t) {
                return n((this.negative | t.negative) == 0),
                this.iuand(t)
            }
            ,
            o.prototype.and = function(t) {
                return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this)
            }
            ,
            o.prototype.uand = function(t) {
                return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this)
            }
            ,
            o.prototype.iuxor = function(t) {
                this.length > t.length ? (e = this,
                r = t) : (e = t,
                r = this);
                for (var e, r, n = 0; n < r.length; n++)
                    this.words[n] = e.words[n] ^ r.words[n];
                if (this !== e)
                    for (; n < e.length; n++)
                        this.words[n] = e.words[n];
                return this.length = e.length,
                this._strip()
            }
            ,
            o.prototype.ixor = function(t) {
                return n((this.negative | t.negative) == 0),
                this.iuxor(t)
            }
            ,
            o.prototype.xor = function(t) {
                return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this)
            }
            ,
            o.prototype.uxor = function(t) {
                return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this)
            }
            ,
            o.prototype.inotn = function(t) {
                n("number" == typeof t && t >= 0);
                var e = 0 | Math.ceil(t / 26)
                  , r = t % 26;
                this._expand(e),
                r > 0 && e--;
                for (var i = 0; i < e; i++)
                    this.words[i] = 67108863 & ~this.words[i];
                return r > 0 && (this.words[i] = ~this.words[i] & 67108863 >> 26 - r),
                this._strip()
            }
            ,
            o.prototype.notn = function(t) {
                return this.clone().inotn(t)
            }
            ,
            o.prototype.setn = function(t, e) {
                n("number" == typeof t && t >= 0);
                var r = t / 26 | 0
                  , i = t % 26;
                return this._expand(r + 1),
                e ? this.words[r] = this.words[r] | 1 << i : this.words[r] = this.words[r] & ~(1 << i),
                this._strip()
            }
            ,
            o.prototype.iadd = function(t) {
                if (0 !== this.negative && 0 === t.negative)
                    return this.negative = 0,
                    e = this.isub(t),
                    this.negative ^= 1,
                    this._normSign();
                if (0 === this.negative && 0 !== t.negative)
                    return t.negative = 0,
                    e = this.isub(t),
                    t.negative = 1,
                    e._normSign();
                this.length > t.length ? (r = this,
                n = t) : (r = t,
                n = this);
                for (var e, r, n, i = 0, o = 0; o < n.length; o++)
                    e = (0 | r.words[o]) + (0 | n.words[o]) + i,
                    this.words[o] = 67108863 & e,
                    i = e >>> 26;
                for (; 0 !== i && o < r.length; o++)
                    e = (0 | r.words[o]) + i,
                    this.words[o] = 67108863 & e,
                    i = e >>> 26;
                if (this.length = r.length,
                0 !== i)
                    this.words[this.length] = i,
                    this.length++;
                else if (r !== this)
                    for (; o < r.length; o++)
                        this.words[o] = r.words[o];
                return this
            }
            ,
            o.prototype.add = function(t) {
                var e;
                return 0 !== t.negative && 0 === this.negative ? (t.negative = 0,
                e = this.sub(t),
                t.negative ^= 1,
                e) : 0 === t.negative && 0 !== this.negative ? (this.negative = 0,
                e = t.sub(this),
                this.negative = 1,
                e) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this)
            }
            ,
            o.prototype.isub = function(t) {
                if (0 !== t.negative) {
                    t.negative = 0;
                    var e, r, n = this.iadd(t);
                    return t.negative = 1,
                    n._normSign()
                }
                if (0 !== this.negative)
                    return this.negative = 0,
                    this.iadd(t),
                    this.negative = 1,
                    this._normSign();
                var i = this.cmp(t);
                if (0 === i)
                    return this.negative = 0,
                    this.length = 1,
                    this.words[0] = 0,
                    this;
                i > 0 ? (e = this,
                r = t) : (e = t,
                r = this);
                for (var o = 0, s = 0; s < r.length; s++)
                    o = (n = (0 | e.words[s]) - (0 | r.words[s]) + o) >> 26,
                    this.words[s] = 67108863 & n;
                for (; 0 !== o && s < e.length; s++)
                    o = (n = (0 | e.words[s]) + o) >> 26,
                    this.words[s] = 67108863 & n;
                if (0 === o && s < e.length && e !== this)
                    for (; s < e.length; s++)
                        this.words[s] = e.words[s];
                return this.length = Math.max(this.length, s),
                e !== this && (this.negative = 1),
                this._strip()
            }
            ,
            o.prototype.sub = function(t) {
                return this.clone().isub(t)
            }
            ;
            var g = function(t, e, r) {
                var n, i, o, s = t.words, a = e.words, u = r.words, l = 0, h = 0 | s[0], f = 8191 & h, c = h >>> 13, d = 0 | s[1], p = 8191 & d, m = d >>> 13, g = 0 | s[2], v = 8191 & g, y = g >>> 13, b = 0 | s[3], A = 8191 & b, w = b >>> 13, E = 0 | s[4], _ = 8191 & E, M = E >>> 13, k = 0 | s[5], N = 8191 & k, x = k >>> 13, P = 0 | s[6], I = 8191 & P, S = P >>> 13, R = 0 | s[7], C = 8191 & R, O = R >>> 13, T = 0 | s[8], B = 8191 & T, D = T >>> 13, L = 0 | s[9], U = 8191 & L, F = L >>> 13, z = 0 | a[0], j = 8191 & z, G = z >>> 13, Y = 0 | a[1], q = 8191 & Y, H = Y >>> 13, K = 0 | a[2], Q = 8191 & K, J = K >>> 13, W = 0 | a[3], V = 8191 & W, X = W >>> 13, Z = 0 | a[4], $ = 8191 & Z, tt = Z >>> 13, te = 0 | a[5], tr = 8191 & te, tn = te >>> 13, ti = 0 | a[6], to = 8191 & ti, ts = ti >>> 13, ta = 0 | a[7], tu = 8191 & ta, tl = ta >>> 13, th = 0 | a[8], tf = 8191 & th, tc = th >>> 13, td = 0 | a[9], tp = 8191 & td, tm = td >>> 13;
                r.negative = t.negative ^ e.negative,
                r.length = 19;
                var tg = (l + (n = Math.imul(f, j)) | 0) + ((8191 & (i = (i = Math.imul(f, G)) + Math.imul(c, j) | 0)) << 13) | 0;
                l = ((o = Math.imul(c, G)) + (i >>> 13) | 0) + (tg >>> 26) | 0,
                tg &= 67108863,
                n = Math.imul(p, j),
                i = (i = Math.imul(p, G)) + Math.imul(m, j) | 0,
                o = Math.imul(m, G);
                var tv = (l + (n = n + Math.imul(f, q) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(f, H) | 0) + Math.imul(c, q) | 0)) << 13) | 0;
                l = ((o = o + Math.imul(c, H) | 0) + (i >>> 13) | 0) + (tv >>> 26) | 0,
                tv &= 67108863,
                n = Math.imul(v, j),
                i = (i = Math.imul(v, G)) + Math.imul(y, j) | 0,
                o = Math.imul(y, G),
                n = n + Math.imul(p, q) | 0,
                i = (i = i + Math.imul(p, H) | 0) + Math.imul(m, q) | 0,
                o = o + Math.imul(m, H) | 0;
                var ty = (l + (n = n + Math.imul(f, Q) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(f, J) | 0) + Math.imul(c, Q) | 0)) << 13) | 0;
                l = ((o = o + Math.imul(c, J) | 0) + (i >>> 13) | 0) + (ty >>> 26) | 0,
                ty &= 67108863,
                n = Math.imul(A, j),
                i = (i = Math.imul(A, G)) + Math.imul(w, j) | 0,
                o = Math.imul(w, G),
                n = n + Math.imul(v, q) | 0,
                i = (i = i + Math.imul(v, H) | 0) + Math.imul(y, q) | 0,
                o = o + Math.imul(y, H) | 0,
                n = n + Math.imul(p, Q) | 0,
                i = (i = i + Math.imul(p, J) | 0) + Math.imul(m, Q) | 0,
                o = o + Math.imul(m, J) | 0;
                var tb = (l + (n = n + Math.imul(f, V) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(f, X) | 0) + Math.imul(c, V) | 0)) << 13) | 0;
                l = ((o = o + Math.imul(c, X) | 0) + (i >>> 13) | 0) + (tb >>> 26) | 0,
                tb &= 67108863,
                n = Math.imul(_, j),
                i = (i = Math.imul(_, G)) + Math.imul(M, j) | 0,
                o = Math.imul(M, G),
                n = n + Math.imul(A, q) | 0,
                i = (i = i + Math.imul(A, H) | 0) + Math.imul(w, q) | 0,
                o = o + Math.imul(w, H) | 0,
                n = n + Math.imul(v, Q) | 0,
                i = (i = i + Math.imul(v, J) | 0) + Math.imul(y, Q) | 0,
                o = o + Math.imul(y, J) | 0,
                n = n + Math.imul(p, V) | 0,
                i = (i = i + Math.imul(p, X) | 0) + Math.imul(m, V) | 0,
                o = o + Math.imul(m, X) | 0;
                var tA = (l + (n = n + Math.imul(f, $) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(f, tt) | 0) + Math.imul(c, $) | 0)) << 13) | 0;
                l = ((o = o + Math.imul(c, tt) | 0) + (i >>> 13) | 0) + (tA >>> 26) | 0,
                tA &= 67108863,
                n = Math.imul(N, j),
                i = (i = Math.imul(N, G)) + Math.imul(x, j) | 0,
                o = Math.imul(x, G),
                n = n + Math.imul(_, q) | 0,
                i = (i = i + Math.imul(_, H) | 0) + Math.imul(M, q) | 0,
                o = o + Math.imul(M, H) | 0,
                n = n + Math.imul(A, Q) | 0,
                i = (i = i + Math.imul(A, J) | 0) + Math.imul(w, Q) | 0,
                o = o + Math.imul(w, J) | 0,
                n = n + Math.imul(v, V) | 0,
                i = (i = i + Math.imul(v, X) | 0) + Math.imul(y, V) | 0,
                o = o + Math.imul(y, X) | 0,
                n = n + Math.imul(p, $) | 0,
                i = (i = i + Math.imul(p, tt) | 0) + Math.imul(m, $) | 0,
                o = o + Math.imul(m, tt) | 0;
                var tw = (l + (n = n + Math.imul(f, tr) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(f, tn) | 0) + Math.imul(c, tr) | 0)) << 13) | 0;
                l = ((o = o + Math.imul(c, tn) | 0) + (i >>> 13) | 0) + (tw >>> 26) | 0,
                tw &= 67108863,
                n = Math.imul(I, j),
                i = (i = Math.imul(I, G)) + Math.imul(S, j) | 0,
                o = Math.imul(S, G),
                n = n + Math.imul(N, q) | 0,
                i = (i = i + Math.imul(N, H) | 0) + Math.imul(x, q) | 0,
                o = o + Math.imul(x, H) | 0,
                n = n + Math.imul(_, Q) | 0,
                i = (i = i + Math.imul(_, J) | 0) + Math.imul(M, Q) | 0,
                o = o + Math.imul(M, J) | 0,
                n = n + Math.imul(A, V) | 0,
                i = (i = i + Math.imul(A, X) | 0) + Math.imul(w, V) | 0,
                o = o + Math.imul(w, X) | 0,
                n = n + Math.imul(v, $) | 0,
                i = (i = i + Math.imul(v, tt) | 0) + Math.imul(y, $) | 0,
                o = o + Math.imul(y, tt) | 0,
                n = n + Math.imul(p, tr) | 0,
                i = (i = i + Math.imul(p, tn) | 0) + Math.imul(m, tr) | 0,
                o = o + Math.imul(m, tn) | 0;
                var tE = (l + (n = n + Math.imul(f, to) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(f, ts) | 0) + Math.imul(c, to) | 0)) << 13) | 0;
                l = ((o = o + Math.imul(c, ts) | 0) + (i >>> 13) | 0) + (tE >>> 26) | 0,
                tE &= 67108863,
                n = Math.imul(C, j),
                i = (i = Math.imul(C, G)) + Math.imul(O, j) | 0,
                o = Math.imul(O, G),
                n = n + Math.imul(I, q) | 0,
                i = (i = i + Math.imul(I, H) | 0) + Math.imul(S, q) | 0,
                o = o + Math.imul(S, H) | 0,
                n = n + Math.imul(N, Q) | 0,
                i = (i = i + Math.imul(N, J) | 0) + Math.imul(x, Q) | 0,
                o = o + Math.imul(x, J) | 0,
                n = n + Math.imul(_, V) | 0,
                i = (i = i + Math.imul(_, X) | 0) + Math.imul(M, V) | 0,
                o = o + Math.imul(M, X) | 0,
                n = n + Math.imul(A, $) | 0,
                i = (i = i + Math.imul(A, tt) | 0) + Math.imul(w, $) | 0,
                o = o + Math.imul(w, tt) | 0,
                n = n + Math.imul(v, tr) | 0,
                i = (i = i + Math.imul(v, tn) | 0) + Math.imul(y, tr) | 0,
                o = o + Math.imul(y, tn) | 0,
                n = n + Math.imul(p, to) | 0,
                i = (i = i + Math.imul(p, ts) | 0) + Math.imul(m, to) | 0,
                o = o + Math.imul(m, ts) | 0;
                var t_ = (l + (n = n + Math.imul(f, tu) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(f, tl) | 0) + Math.imul(c, tu) | 0)) << 13) | 0;
                l = ((o = o + Math.imul(c, tl) | 0) + (i >>> 13) | 0) + (t_ >>> 26) | 0,
                t_ &= 67108863,
                n = Math.imul(B, j),
                i = (i = Math.imul(B, G)) + Math.imul(D, j) | 0,
                o = Math.imul(D, G),
                n = n + Math.imul(C, q) | 0,
                i = (i = i + Math.imul(C, H) | 0) + Math.imul(O, q) | 0,
                o = o + Math.imul(O, H) | 0,
                n = n + Math.imul(I, Q) | 0,
                i = (i = i + Math.imul(I, J) | 0) + Math.imul(S, Q) | 0,
                o = o + Math.imul(S, J) | 0,
                n = n + Math.imul(N, V) | 0,
                i = (i = i + Math.imul(N, X) | 0) + Math.imul(x, V) | 0,
                o = o + Math.imul(x, X) | 0,
                n = n + Math.imul(_, $) | 0,
                i = (i = i + Math.imul(_, tt) | 0) + Math.imul(M, $) | 0,
                o = o + Math.imul(M, tt) | 0,
                n = n + Math.imul(A, tr) | 0,
                i = (i = i + Math.imul(A, tn) | 0) + Math.imul(w, tr) | 0,
                o = o + Math.imul(w, tn) | 0,
                n = n + Math.imul(v, to) | 0,
                i = (i = i + Math.imul(v, ts) | 0) + Math.imul(y, to) | 0,
                o = o + Math.imul(y, ts) | 0,
                n = n + Math.imul(p, tu) | 0,
                i = (i = i + Math.imul(p, tl) | 0) + Math.imul(m, tu) | 0,
                o = o + Math.imul(m, tl) | 0;
                var tM = (l + (n = n + Math.imul(f, tf) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(f, tc) | 0) + Math.imul(c, tf) | 0)) << 13) | 0;
                l = ((o = o + Math.imul(c, tc) | 0) + (i >>> 13) | 0) + (tM >>> 26) | 0,
                tM &= 67108863,
                n = Math.imul(U, j),
                i = (i = Math.imul(U, G)) + Math.imul(F, j) | 0,
                o = Math.imul(F, G),
                n = n + Math.imul(B, q) | 0,
                i = (i = i + Math.imul(B, H) | 0) + Math.imul(D, q) | 0,
                o = o + Math.imul(D, H) | 0,
                n = n + Math.imul(C, Q) | 0,
                i = (i = i + Math.imul(C, J) | 0) + Math.imul(O, Q) | 0,
                o = o + Math.imul(O, J) | 0,
                n = n + Math.imul(I, V) | 0,
                i = (i = i + Math.imul(I, X) | 0) + Math.imul(S, V) | 0,
                o = o + Math.imul(S, X) | 0,
                n = n + Math.imul(N, $) | 0,
                i = (i = i + Math.imul(N, tt) | 0) + Math.imul(x, $) | 0,
                o = o + Math.imul(x, tt) | 0,
                n = n + Math.imul(_, tr) | 0,
                i = (i = i + Math.imul(_, tn) | 0) + Math.imul(M, tr) | 0,
                o = o + Math.imul(M, tn) | 0,
                n = n + Math.imul(A, to) | 0,
                i = (i = i + Math.imul(A, ts) | 0) + Math.imul(w, to) | 0,
                o = o + Math.imul(w, ts) | 0,
                n = n + Math.imul(v, tu) | 0,
                i = (i = i + Math.imul(v, tl) | 0) + Math.imul(y, tu) | 0,
                o = o + Math.imul(y, tl) | 0,
                n = n + Math.imul(p, tf) | 0,
                i = (i = i + Math.imul(p, tc) | 0) + Math.imul(m, tf) | 0,
                o = o + Math.imul(m, tc) | 0;
                var tk = (l + (n = n + Math.imul(f, tp) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(f, tm) | 0) + Math.imul(c, tp) | 0)) << 13) | 0;
                l = ((o = o + Math.imul(c, tm) | 0) + (i >>> 13) | 0) + (tk >>> 26) | 0,
                tk &= 67108863,
                n = Math.imul(U, q),
                i = (i = Math.imul(U, H)) + Math.imul(F, q) | 0,
                o = Math.imul(F, H),
                n = n + Math.imul(B, Q) | 0,
                i = (i = i + Math.imul(B, J) | 0) + Math.imul(D, Q) | 0,
                o = o + Math.imul(D, J) | 0,
                n = n + Math.imul(C, V) | 0,
                i = (i = i + Math.imul(C, X) | 0) + Math.imul(O, V) | 0,
                o = o + Math.imul(O, X) | 0,
                n = n + Math.imul(I, $) | 0,
                i = (i = i + Math.imul(I, tt) | 0) + Math.imul(S, $) | 0,
                o = o + Math.imul(S, tt) | 0,
                n = n + Math.imul(N, tr) | 0,
                i = (i = i + Math.imul(N, tn) | 0) + Math.imul(x, tr) | 0,
                o = o + Math.imul(x, tn) | 0,
                n = n + Math.imul(_, to) | 0,
                i = (i = i + Math.imul(_, ts) | 0) + Math.imul(M, to) | 0,
                o = o + Math.imul(M, ts) | 0,
                n = n + Math.imul(A, tu) | 0,
                i = (i = i + Math.imul(A, tl) | 0) + Math.imul(w, tu) | 0,
                o = o + Math.imul(w, tl) | 0,
                n = n + Math.imul(v, tf) | 0,
                i = (i = i + Math.imul(v, tc) | 0) + Math.imul(y, tf) | 0,
                o = o + Math.imul(y, tc) | 0;
                var tN = (l + (n = n + Math.imul(p, tp) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(p, tm) | 0) + Math.imul(m, tp) | 0)) << 13) | 0;
                l = ((o = o + Math.imul(m, tm) | 0) + (i >>> 13) | 0) + (tN >>> 26) | 0,
                tN &= 67108863,
                n = Math.imul(U, Q),
                i = (i = Math.imul(U, J)) + Math.imul(F, Q) | 0,
                o = Math.imul(F, J),
                n = n + Math.imul(B, V) | 0,
                i = (i = i + Math.imul(B, X) | 0) + Math.imul(D, V) | 0,
                o = o + Math.imul(D, X) | 0,
                n = n + Math.imul(C, $) | 0,
                i = (i = i + Math.imul(C, tt) | 0) + Math.imul(O, $) | 0,
                o = o + Math.imul(O, tt) | 0,
                n = n + Math.imul(I, tr) | 0,
                i = (i = i + Math.imul(I, tn) | 0) + Math.imul(S, tr) | 0,
                o = o + Math.imul(S, tn) | 0,
                n = n + Math.imul(N, to) | 0,
                i = (i = i + Math.imul(N, ts) | 0) + Math.imul(x, to) | 0,
                o = o + Math.imul(x, ts) | 0,
                n = n + Math.imul(_, tu) | 0,
                i = (i = i + Math.imul(_, tl) | 0) + Math.imul(M, tu) | 0,
                o = o + Math.imul(M, tl) | 0,
                n = n + Math.imul(A, tf) | 0,
                i = (i = i + Math.imul(A, tc) | 0) + Math.imul(w, tf) | 0,
                o = o + Math.imul(w, tc) | 0;
                var tx = (l + (n = n + Math.imul(v, tp) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(v, tm) | 0) + Math.imul(y, tp) | 0)) << 13) | 0;
                l = ((o = o + Math.imul(y, tm) | 0) + (i >>> 13) | 0) + (tx >>> 26) | 0,
                tx &= 67108863,
                n = Math.imul(U, V),
                i = (i = Math.imul(U, X)) + Math.imul(F, V) | 0,
                o = Math.imul(F, X),
                n = n + Math.imul(B, $) | 0,
                i = (i = i + Math.imul(B, tt) | 0) + Math.imul(D, $) | 0,
                o = o + Math.imul(D, tt) | 0,
                n = n + Math.imul(C, tr) | 0,
                i = (i = i + Math.imul(C, tn) | 0) + Math.imul(O, tr) | 0,
                o = o + Math.imul(O, tn) | 0,
                n = n + Math.imul(I, to) | 0,
                i = (i = i + Math.imul(I, ts) | 0) + Math.imul(S, to) | 0,
                o = o + Math.imul(S, ts) | 0,
                n = n + Math.imul(N, tu) | 0,
                i = (i = i + Math.imul(N, tl) | 0) + Math.imul(x, tu) | 0,
                o = o + Math.imul(x, tl) | 0,
                n = n + Math.imul(_, tf) | 0,
                i = (i = i + Math.imul(_, tc) | 0) + Math.imul(M, tf) | 0,
                o = o + Math.imul(M, tc) | 0;
                var tP = (l + (n = n + Math.imul(A, tp) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(A, tm) | 0) + Math.imul(w, tp) | 0)) << 13) | 0;
                l = ((o = o + Math.imul(w, tm) | 0) + (i >>> 13) | 0) + (tP >>> 26) | 0,
                tP &= 67108863,
                n = Math.imul(U, $),
                i = (i = Math.imul(U, tt)) + Math.imul(F, $) | 0,
                o = Math.imul(F, tt),
                n = n + Math.imul(B, tr) | 0,
                i = (i = i + Math.imul(B, tn) | 0) + Math.imul(D, tr) | 0,
                o = o + Math.imul(D, tn) | 0,
                n = n + Math.imul(C, to) | 0,
                i = (i = i + Math.imul(C, ts) | 0) + Math.imul(O, to) | 0,
                o = o + Math.imul(O, ts) | 0,
                n = n + Math.imul(I, tu) | 0,
                i = (i = i + Math.imul(I, tl) | 0) + Math.imul(S, tu) | 0,
                o = o + Math.imul(S, tl) | 0,
                n = n + Math.imul(N, tf) | 0,
                i = (i = i + Math.imul(N, tc) | 0) + Math.imul(x, tf) | 0,
                o = o + Math.imul(x, tc) | 0;
                var tI = (l + (n = n + Math.imul(_, tp) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(_, tm) | 0) + Math.imul(M, tp) | 0)) << 13) | 0;
                l = ((o = o + Math.imul(M, tm) | 0) + (i >>> 13) | 0) + (tI >>> 26) | 0,
                tI &= 67108863,
                n = Math.imul(U, tr),
                i = (i = Math.imul(U, tn)) + Math.imul(F, tr) | 0,
                o = Math.imul(F, tn),
                n = n + Math.imul(B, to) | 0,
                i = (i = i + Math.imul(B, ts) | 0) + Math.imul(D, to) | 0,
                o = o + Math.imul(D, ts) | 0,
                n = n + Math.imul(C, tu) | 0,
                i = (i = i + Math.imul(C, tl) | 0) + Math.imul(O, tu) | 0,
                o = o + Math.imul(O, tl) | 0,
                n = n + Math.imul(I, tf) | 0,
                i = (i = i + Math.imul(I, tc) | 0) + Math.imul(S, tf) | 0,
                o = o + Math.imul(S, tc) | 0;
                var tS = (l + (n = n + Math.imul(N, tp) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(N, tm) | 0) + Math.imul(x, tp) | 0)) << 13) | 0;
                l = ((o = o + Math.imul(x, tm) | 0) + (i >>> 13) | 0) + (tS >>> 26) | 0,
                tS &= 67108863,
                n = Math.imul(U, to),
                i = (i = Math.imul(U, ts)) + Math.imul(F, to) | 0,
                o = Math.imul(F, ts),
                n = n + Math.imul(B, tu) | 0,
                i = (i = i + Math.imul(B, tl) | 0) + Math.imul(D, tu) | 0,
                o = o + Math.imul(D, tl) | 0,
                n = n + Math.imul(C, tf) | 0,
                i = (i = i + Math.imul(C, tc) | 0) + Math.imul(O, tf) | 0,
                o = o + Math.imul(O, tc) | 0;
                var tR = (l + (n = n + Math.imul(I, tp) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(I, tm) | 0) + Math.imul(S, tp) | 0)) << 13) | 0;
                l = ((o = o + Math.imul(S, tm) | 0) + (i >>> 13) | 0) + (tR >>> 26) | 0,
                tR &= 67108863,
                n = Math.imul(U, tu),
                i = (i = Math.imul(U, tl)) + Math.imul(F, tu) | 0,
                o = Math.imul(F, tl),
                n = n + Math.imul(B, tf) | 0,
                i = (i = i + Math.imul(B, tc) | 0) + Math.imul(D, tf) | 0,
                o = o + Math.imul(D, tc) | 0;
                var tC = (l + (n = n + Math.imul(C, tp) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(C, tm) | 0) + Math.imul(O, tp) | 0)) << 13) | 0;
                l = ((o = o + Math.imul(O, tm) | 0) + (i >>> 13) | 0) + (tC >>> 26) | 0,
                tC &= 67108863,
                n = Math.imul(U, tf),
                i = (i = Math.imul(U, tc)) + Math.imul(F, tf) | 0,
                o = Math.imul(F, tc);
                var tO = (l + (n = n + Math.imul(B, tp) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(B, tm) | 0) + Math.imul(D, tp) | 0)) << 13) | 0;
                l = ((o = o + Math.imul(D, tm) | 0) + (i >>> 13) | 0) + (tO >>> 26) | 0,
                tO &= 67108863;
                var tT = (l + (n = Math.imul(U, tp)) | 0) + ((8191 & (i = (i = Math.imul(U, tm)) + Math.imul(F, tp) | 0)) << 13) | 0;
                return l = ((o = Math.imul(F, tm)) + (i >>> 13) | 0) + (tT >>> 26) | 0,
                tT &= 67108863,
                u[0] = tg,
                u[1] = tv,
                u[2] = ty,
                u[3] = tb,
                u[4] = tA,
                u[5] = tw,
                u[6] = tE,
                u[7] = t_,
                u[8] = tM,
                u[9] = tk,
                u[10] = tN,
                u[11] = tx,
                u[12] = tP,
                u[13] = tI,
                u[14] = tS,
                u[15] = tR,
                u[16] = tC,
                u[17] = tO,
                u[18] = tT,
                0 !== l && (u[19] = l,
                r.length++),
                r
            };
            function v(t, e, r) {
                r.negative = e.negative ^ t.negative,
                r.length = t.length + e.length;
                for (var n = 0, i = 0, o = 0; o < r.length - 1; o++) {
                    var s = i;
                    i = 0;
                    for (var a = 67108863 & n, u = Math.min(o, e.length - 1), l = Math.max(0, o - t.length + 1); l <= u; l++) {
                        var h = o - l
                          , f = (0 | t.words[h]) * (0 | e.words[l])
                          , c = 67108863 & f;
                        s = s + (f / 67108864 | 0) | 0,
                        a = 67108863 & (c = c + a | 0),
                        i += (s = s + (c >>> 26) | 0) >>> 26,
                        s &= 67108863
                    }
                    r.words[o] = a,
                    n = s,
                    s = i
                }
                return 0 !== n ? r.words[o] = n : r.length--,
                r._strip()
            }
            function y(t, e) {
                this.x = t,
                this.y = e
            }
            Math.imul || (g = m),
            o.prototype.mulTo = function(t, e) {
                var r, n = this.length + t.length;
                return 10 === this.length && 10 === t.length ? g(this, t, e) : n < 63 ? m(this, t, e) : v(this, t, e)
            }
            ,
            y.prototype.makeRBT = function(t) {
                for (var e = Array(t), r = o.prototype._countBits(t) - 1, n = 0; n < t; n++)
                    e[n] = this.revBin(n, r, t);
                return e
            }
            ,
            y.prototype.revBin = function(t, e, r) {
                if (0 === t || t === r - 1)
                    return t;
                for (var n = 0, i = 0; i < e; i++)
                    n |= (1 & t) << e - i - 1,
                    t >>= 1;
                return n
            }
            ,
            y.prototype.permute = function(t, e, r, n, i, o) {
                for (var s = 0; s < o; s++)
                    n[s] = e[t[s]],
                    i[s] = r[t[s]]
            }
            ,
            y.prototype.transform = function(t, e, r, n, i, o) {
                this.permute(o, t, e, r, n, i);
                for (var s = 1; s < i; s <<= 1)
                    for (var a = s << 1, u = Math.cos(2 * Math.PI / a), l = Math.sin(2 * Math.PI / a), h = 0; h < i; h += a)
                        for (var f = u, c = l, d = 0; d < s; d++) {
                            var p = r[h + d]
                              , m = n[h + d]
                              , g = r[h + d + s]
                              , v = n[h + d + s]
                              , y = f * g - c * v;
                            v = f * v + c * g,
                            g = y,
                            r[h + d] = p + g,
                            n[h + d] = m + v,
                            r[h + d + s] = p - g,
                            n[h + d + s] = m - v,
                            d !== a && (y = u * f - l * c,
                            c = u * c + l * f,
                            f = y)
                        }
            }
            ,
            y.prototype.guessLen13b = function(t, e) {
                var r = 1 | Math.max(e, t)
                  , n = 1 & r
                  , i = 0;
                for (r = r / 2 | 0; r; r >>>= 1)
                    i++;
                return 1 << i + 1 + n
            }
            ,
            y.prototype.conjugate = function(t, e, r) {
                if (!(r <= 1))
                    for (var n = 0; n < r / 2; n++) {
                        var i = t[n];
                        t[n] = t[r - n - 1],
                        t[r - n - 1] = i,
                        i = e[n],
                        e[n] = -e[r - n - 1],
                        e[r - n - 1] = -i
                    }
            }
            ,
            y.prototype.normalize13b = function(t, e) {
                for (var r = 0, n = 0; n < e / 2; n++) {
                    var i = 8192 * Math.round(t[2 * n + 1] / e) + Math.round(t[2 * n] / e) + r;
                    t[n] = 67108863 & i,
                    r = i < 67108864 ? 0 : i / 67108864 | 0
                }
                return t
            }
            ,
            y.prototype.convert13b = function(t, e, r, i) {
                for (var o = 0, s = 0; s < e; s++)
                    o += 0 | t[s],
                    r[2 * s] = 8191 & o,
                    o >>>= 13,
                    r[2 * s + 1] = 8191 & o,
                    o >>>= 13;
                for (s = 2 * e; s < i; ++s)
                    r[s] = 0;
                n(0 === o),
                n((-8192 & o) == 0)
            }
            ,
            y.prototype.stub = function(t) {
                for (var e = Array(t), r = 0; r < t; r++)
                    e[r] = 0;
                return e
            }
            ,
            y.prototype.mulp = function(t, e, r) {
                var n = 2 * this.guessLen13b(t.length, e.length)
                  , i = this.makeRBT(n)
                  , o = this.stub(n)
                  , s = Array(n)
                  , a = Array(n)
                  , u = Array(n)
                  , l = Array(n)
                  , h = Array(n)
                  , f = Array(n)
                  , c = r.words;
                c.length = n,
                this.convert13b(t.words, t.length, s, n),
                this.convert13b(e.words, e.length, l, n),
                this.transform(s, o, a, u, n, i),
                this.transform(l, o, h, f, n, i);
                for (var d = 0; d < n; d++) {
                    var p = a[d] * h[d] - u[d] * f[d];
                    u[d] = a[d] * f[d] + u[d] * h[d],
                    a[d] = p
                }
                return this.conjugate(a, u, n),
                this.transform(a, u, c, o, n, i),
                this.conjugate(c, o, n),
                this.normalize13b(c, n),
                r.negative = t.negative ^ e.negative,
                r.length = t.length + e.length,
                r._strip()
            }
            ,
            o.prototype.mul = function(t) {
                var e = new o(null);
                return e.words = Array(this.length + t.length),
                this.mulTo(t, e)
            }
            ,
            o.prototype.mulf = function(t) {
                var e = new o(null);
                return e.words = Array(this.length + t.length),
                v(this, t, e)
            }
            ,
            o.prototype.imul = function(t) {
                return this.clone().mulTo(t, this)
            }
            ,
            o.prototype.imuln = function(t) {
                var e = t < 0;
                e && (t = -t),
                n("number" == typeof t),
                n(t < 67108864);
                for (var r = 0, i = 0; i < this.length; i++) {
                    var o = (0 | this.words[i]) * t
                      , s = (67108863 & o) + (67108863 & r);
                    r >>= 26,
                    r += (o / 67108864 | 0) + (s >>> 26),
                    this.words[i] = 67108863 & s
                }
                return 0 !== r && (this.words[i] = r,
                this.length++),
                e ? this.ineg() : this
            }
            ,
            o.prototype.muln = function(t) {
                return this.clone().imuln(t)
            }
            ,
            o.prototype.sqr = function() {
                return this.mul(this)
            }
            ,
            o.prototype.isqr = function() {
                return this.imul(this.clone())
            }
            ,
            o.prototype.pow = function(t) {
                var e = function(t) {
                    for (var e = Array(t.bitLength()), r = 0; r < e.length; r++) {
                        var n = r / 26 | 0
                          , i = r % 26;
                        e[r] = t.words[n] >>> i & 1
                    }
                    return e
                }(t);
                if (0 === e.length)
                    return new o(1);
                for (var r = this, n = 0; n < e.length && 0 === e[n]; n++,
                r = r.sqr())
                    ;
                if (++n < e.length)
                    for (var i = r.sqr(); n < e.length; n++,
                    i = i.sqr())
                        0 !== e[n] && (r = r.mul(i));
                return r
            }
            ,
            o.prototype.iushln = function(t) {
                n("number" == typeof t && t >= 0);
                var e, r = t % 26, i = (t - r) / 26, o = 67108863 >>> 26 - r << 26 - r;
                if (0 !== r) {
                    var s = 0;
                    for (e = 0; e < this.length; e++) {
                        var a = this.words[e] & o
                          , u = (0 | this.words[e]) - a << r;
                        this.words[e] = u | s,
                        s = a >>> 26 - r
                    }
                    s && (this.words[e] = s,
                    this.length++)
                }
                if (0 !== i) {
                    for (e = this.length - 1; e >= 0; e--)
                        this.words[e + i] = this.words[e];
                    for (e = 0; e < i; e++)
                        this.words[e] = 0;
                    this.length += i
                }
                return this._strip()
            }
            ,
            o.prototype.ishln = function(t) {
                return n(0 === this.negative),
                this.iushln(t)
            }
            ,
            o.prototype.iushrn = function(t, e, r) {
                n("number" == typeof t && t >= 0),
                i = e ? (e - e % 26) / 26 : 0;
                var i, o = t % 26, s = Math.min((t - o) / 26, this.length), a = 67108863 ^ 67108863 >>> o << o;
                if (i -= s,
                i = Math.max(0, i),
                r) {
                    for (var u = 0; u < s; u++)
                        r.words[u] = this.words[u];
                    r.length = s
                }
                if (0 === s)
                    ;
                else if (this.length > s)
                    for (this.length -= s,
                    u = 0; u < this.length; u++)
                        this.words[u] = this.words[u + s];
                else
                    this.words[0] = 0,
                    this.length = 1;
                var l = 0;
                for (u = this.length - 1; u >= 0 && (0 !== l || u >= i); u--) {
                    var h = 0 | this.words[u];
                    this.words[u] = l << 26 - o | h >>> o,
                    l = h & a
                }
                return r && 0 !== l && (r.words[r.length++] = l),
                0 === this.length && (this.words[0] = 0,
                this.length = 1),
                this._strip()
            }
            ,
            o.prototype.ishrn = function(t, e, r) {
                return n(0 === this.negative),
                this.iushrn(t, e, r)
            }
            ,
            o.prototype.shln = function(t) {
                return this.clone().ishln(t)
            }
            ,
            o.prototype.ushln = function(t) {
                return this.clone().iushln(t)
            }
            ,
            o.prototype.shrn = function(t) {
                return this.clone().ishrn(t)
            }
            ,
            o.prototype.ushrn = function(t) {
                return this.clone().iushrn(t)
            }
            ,
            o.prototype.testn = function(t) {
                n("number" == typeof t && t >= 0);
                var e = t % 26
                  , r = (t - e) / 26;
                return !(this.length <= r) && !!(this.words[r] & 1 << e)
            }
            ,
            o.prototype.imaskn = function(t) {
                n("number" == typeof t && t >= 0);
                var e = t % 26
                  , r = (t - e) / 26;
                return (n(0 === this.negative, "imaskn works only with positive numbers"),
                this.length <= r) ? this : (0 !== e && r++,
                this.length = Math.min(r, this.length),
                0 !== e && (this.words[this.length - 1] &= 67108863 ^ 67108863 >>> e << e),
                this._strip())
            }
            ,
            o.prototype.maskn = function(t) {
                return this.clone().imaskn(t)
            }
            ,
            o.prototype.iaddn = function(t) {
                return (n("number" == typeof t),
                n(t < 67108864),
                t < 0) ? this.isubn(-t) : 0 !== this.negative ? (1 === this.length && (0 | this.words[0]) <= t ? (this.words[0] = t - (0 | this.words[0]),
                this.negative = 0) : (this.negative = 0,
                this.isubn(t),
                this.negative = 1),
                this) : this._iaddn(t)
            }
            ,
            o.prototype._iaddn = function(t) {
                this.words[0] += t;
                for (var e = 0; e < this.length && this.words[e] >= 67108864; e++)
                    this.words[e] -= 67108864,
                    e === this.length - 1 ? this.words[e + 1] = 1 : this.words[e + 1]++;
                return this.length = Math.max(this.length, e + 1),
                this
            }
            ,
            o.prototype.isubn = function(t) {
                if (n("number" == typeof t),
                n(t < 67108864),
                t < 0)
                    return this.iaddn(-t);
                if (0 !== this.negative)
                    return this.negative = 0,
                    this.iaddn(t),
                    this.negative = 1,
                    this;
                if (this.words[0] -= t,
                1 === this.length && this.words[0] < 0)
                    this.words[0] = -this.words[0],
                    this.negative = 1;
                else
                    for (var e = 0; e < this.length && this.words[e] < 0; e++)
                        this.words[e] += 67108864,
                        this.words[e + 1] -= 1;
                return this._strip()
            }
            ,
            o.prototype.addn = function(t) {
                return this.clone().iaddn(t)
            }
            ,
            o.prototype.subn = function(t) {
                return this.clone().isubn(t)
            }
            ,
            o.prototype.iabs = function() {
                return this.negative = 0,
                this
            }
            ,
            o.prototype.abs = function() {
                return this.clone().iabs()
            }
            ,
            o.prototype._ishlnsubmul = function(t, e, r) {
                var i, o, s = t.length + r;
                this._expand(s);
                var a = 0;
                for (i = 0; i < t.length; i++) {
                    o = (0 | this.words[i + r]) + a;
                    var u = (0 | t.words[i]) * e;
                    o -= 67108863 & u,
                    a = (o >> 26) - (u / 67108864 | 0),
                    this.words[i + r] = 67108863 & o
                }
                for (; i < this.length - r; i++)
                    a = (o = (0 | this.words[i + r]) + a) >> 26,
                    this.words[i + r] = 67108863 & o;
                if (0 === a)
                    return this._strip();
                for (n(-1 === a),
                a = 0,
                i = 0; i < this.length; i++)
                    a = (o = -(0 | this.words[i]) + a) >> 26,
                    this.words[i] = 67108863 & o;
                return this.negative = 1,
                this._strip()
            }
            ,
            o.prototype._wordDiv = function(t, e) {
                var r, n = this.length - t.length, i = this.clone(), s = t, a = 0 | s.words[s.length - 1];
                0 != (n = 26 - this._countBits(a)) && (s = s.ushln(n),
                i.iushln(n),
                a = 0 | s.words[s.length - 1]);
                var u = i.length - s.length;
                if ("mod" !== e) {
                    (r = new o(null)).length = u + 1,
                    r.words = Array(r.length);
                    for (var l = 0; l < r.length; l++)
                        r.words[l] = 0
                }
                var h = i.clone()._ishlnsubmul(s, 1, u);
                0 === h.negative && (i = h,
                r && (r.words[u] = 1));
                for (var f = u - 1; f >= 0; f--) {
                    var c = (0 | i.words[s.length + f]) * 67108864 + (0 | i.words[s.length + f - 1]);
                    for (c = Math.min(c / a | 0, 67108863),
                    i._ishlnsubmul(s, c, f); 0 !== i.negative; )
                        c--,
                        i.negative = 0,
                        i._ishlnsubmul(s, 1, f),
                        i.isZero() || (i.negative ^= 1);
                    r && (r.words[f] = c)
                }
                return r && r._strip(),
                i._strip(),
                "div" !== e && 0 !== n && i.iushrn(n),
                {
                    div: r || null,
                    mod: i
                }
            }
            ,
            o.prototype.divmod = function(t, e, r) {
                var i, s, a;
                return (n(!t.isZero()),
                this.isZero()) ? {
                    div: new o(0),
                    mod: new o(0)
                } : 0 !== this.negative && 0 === t.negative ? (a = this.neg().divmod(t, e),
                "mod" !== e && (i = a.div.neg()),
                "div" !== e && (s = a.mod.neg(),
                r && 0 !== s.negative && s.iadd(t)),
                {
                    div: i,
                    mod: s
                }) : 0 === this.negative && 0 !== t.negative ? (a = this.divmod(t.neg(), e),
                "mod" !== e && (i = a.div.neg()),
                {
                    div: i,
                    mod: a.mod
                }) : (this.negative & t.negative) != 0 ? (a = this.neg().divmod(t.neg(), e),
                "div" !== e && (s = a.mod.neg(),
                r && 0 !== s.negative && s.isub(t)),
                {
                    div: a.div,
                    mod: s
                }) : t.length > this.length || 0 > this.cmp(t) ? {
                    div: new o(0),
                    mod: this
                } : 1 === t.length ? "div" === e ? {
                    div: this.divn(t.words[0]),
                    mod: null
                } : "mod" === e ? {
                    div: null,
                    mod: new o(this.modrn(t.words[0]))
                } : {
                    div: this.divn(t.words[0]),
                    mod: new o(this.modrn(t.words[0]))
                } : this._wordDiv(t, e)
            }
            ,
            o.prototype.div = function(t) {
                return this.divmod(t, "div", !1).div
            }
            ,
            o.prototype.mod = function(t) {
                return this.divmod(t, "mod", !1).mod
            }
            ,
            o.prototype.umod = function(t) {
                return this.divmod(t, "mod", !0).mod
            }
            ,
            o.prototype.divRound = function(t) {
                var e = this.divmod(t);
                if (e.mod.isZero())
                    return e.div;
                var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod
                  , n = t.ushrn(1)
                  , i = t.andln(1)
                  , o = r.cmp(n);
                return o < 0 || 1 === i && 0 === o ? e.div : 0 !== e.div.negative ? e.div.isubn(1) : e.div.iaddn(1)
            }
            ,
            o.prototype.modrn = function(t) {
                var e = t < 0;
                e && (t = -t),
                n(t <= 67108863);
                for (var r = 67108864 % t, i = 0, o = this.length - 1; o >= 0; o--)
                    i = (r * i + (0 | this.words[o])) % t;
                return e ? -i : i
            }
            ,
            o.prototype.modn = function(t) {
                return this.modrn(t)
            }
            ,
            o.prototype.idivn = function(t) {
                var e = t < 0;
                e && (t = -t),
                n(t <= 67108863);
                for (var r = 0, i = this.length - 1; i >= 0; i--) {
                    var o = (0 | this.words[i]) + 67108864 * r;
                    this.words[i] = o / t | 0,
                    r = o % t
                }
                return this._strip(),
                e ? this.ineg() : this
            }
            ,
            o.prototype.divn = function(t) {
                return this.clone().idivn(t)
            }
            ,
            o.prototype.egcd = function(t) {
                n(0 === t.negative),
                n(!t.isZero());
                var e = this
                  , r = t.clone();
                e = 0 !== e.negative ? e.umod(t) : e.clone();
                for (var i = new o(1), s = new o(0), a = new o(0), u = new o(1), l = 0; e.isEven() && r.isEven(); )
                    e.iushrn(1),
                    r.iushrn(1),
                    ++l;
                for (var h = r.clone(), f = e.clone(); !e.isZero(); ) {
                    for (var c = 0, d = 1; (e.words[0] & d) == 0 && c < 26; ++c,
                    d <<= 1)
                        ;
                    if (c > 0)
                        for (e.iushrn(c); c-- > 0; )
                            (i.isOdd() || s.isOdd()) && (i.iadd(h),
                            s.isub(f)),
                            i.iushrn(1),
                            s.iushrn(1);
                    for (var p = 0, m = 1; (r.words[0] & m) == 0 && p < 26; ++p,
                    m <<= 1)
                        ;
                    if (p > 0)
                        for (r.iushrn(p); p-- > 0; )
                            (a.isOdd() || u.isOdd()) && (a.iadd(h),
                            u.isub(f)),
                            a.iushrn(1),
                            u.iushrn(1);
                    e.cmp(r) >= 0 ? (e.isub(r),
                    i.isub(a),
                    s.isub(u)) : (r.isub(e),
                    a.isub(i),
                    u.isub(s))
                }
                return {
                    a: a,
                    b: u,
                    gcd: r.iushln(l)
                }
            }
            ,
            o.prototype._invmp = function(t) {
                n(0 === t.negative),
                n(!t.isZero());
                var e, r = this, i = t.clone();
                r = 0 !== r.negative ? r.umod(t) : r.clone();
                for (var s = new o(1), a = new o(0), u = i.clone(); r.cmpn(1) > 0 && i.cmpn(1) > 0; ) {
                    for (var l = 0, h = 1; (r.words[0] & h) == 0 && l < 26; ++l,
                    h <<= 1)
                        ;
                    if (l > 0)
                        for (r.iushrn(l); l-- > 0; )
                            s.isOdd() && s.iadd(u),
                            s.iushrn(1);
                    for (var f = 0, c = 1; (i.words[0] & c) == 0 && f < 26; ++f,
                    c <<= 1)
                        ;
                    if (f > 0)
                        for (i.iushrn(f); f-- > 0; )
                            a.isOdd() && a.iadd(u),
                            a.iushrn(1);
                    r.cmp(i) >= 0 ? (r.isub(i),
                    s.isub(a)) : (i.isub(r),
                    a.isub(s))
                }
                return 0 > (e = 0 === r.cmpn(1) ? s : a).cmpn(0) && e.iadd(t),
                e
            }
            ,
            o.prototype.gcd = function(t) {
                if (this.isZero())
                    return t.abs();
                if (t.isZero())
                    return this.abs();
                var e = this.clone()
                  , r = t.clone();
                e.negative = 0,
                r.negative = 0;
                for (var n = 0; e.isEven() && r.isEven(); n++)
                    e.iushrn(1),
                    r.iushrn(1);
                for (; ; ) {
                    for (; e.isEven(); )
                        e.iushrn(1);
                    for (; r.isEven(); )
                        r.iushrn(1);
                    var i = e.cmp(r);
                    if (i < 0) {
                        var o = e;
                        e = r,
                        r = o
                    } else if (0 === i || 0 === r.cmpn(1))
                        break;
                    e.isub(r)
                }
                return r.iushln(n)
            }
            ,
            o.prototype.invm = function(t) {
                return this.egcd(t).a.umod(t)
            }
            ,
            o.prototype.isEven = function() {
                return (1 & this.words[0]) == 0
            }
            ,
            o.prototype.isOdd = function() {
                return (1 & this.words[0]) == 1
            }
            ,
            o.prototype.andln = function(t) {
                return this.words[0] & t
            }
            ,
            o.prototype.bincn = function(t) {
                n("number" == typeof t);
                var e = t % 26
                  , r = (t - e) / 26
                  , i = 1 << e;
                if (this.length <= r)
                    return this._expand(r + 1),
                    this.words[r] |= i,
                    this;
                for (var o = i, s = r; 0 !== o && s < this.length; s++) {
                    var a = 0 | this.words[s];
                    a += o,
                    o = a >>> 26,
                    a &= 67108863,
                    this.words[s] = a
                }
                return 0 !== o && (this.words[s] = o,
                this.length++),
                this
            }
            ,
            o.prototype.isZero = function() {
                return 1 === this.length && 0 === this.words[0]
            }
            ,
            o.prototype.cmpn = function(t) {
                var e, r = t < 0;
                if (0 !== this.negative && !r)
                    return -1;
                if (0 === this.negative && r)
                    return 1;
                if (this._strip(),
                this.length > 1)
                    e = 1;
                else {
                    r && (t = -t),
                    n(t <= 67108863, "Number is too big");
                    var i = 0 | this.words[0];
                    e = i === t ? 0 : i < t ? -1 : 1
                }
                return 0 !== this.negative ? 0 | -e : e
            }
            ,
            o.prototype.cmp = function(t) {
                if (0 !== this.negative && 0 === t.negative)
                    return -1;
                if (0 === this.negative && 0 !== t.negative)
                    return 1;
                var e = this.ucmp(t);
                return 0 !== this.negative ? 0 | -e : e
            }
            ,
            o.prototype.ucmp = function(t) {
                if (this.length > t.length)
                    return 1;
                if (this.length < t.length)
                    return -1;
                for (var e = 0, r = this.length - 1; r >= 0; r--) {
                    var n = 0 | this.words[r]
                      , i = 0 | t.words[r];
                    if (n !== i) {
                        n < i ? e = -1 : n > i && (e = 1);
                        break
                    }
                }
                return e
            }
            ,
            o.prototype.gtn = function(t) {
                return 1 === this.cmpn(t)
            }
            ,
            o.prototype.gt = function(t) {
                return 1 === this.cmp(t)
            }
            ,
            o.prototype.gten = function(t) {
                return this.cmpn(t) >= 0
            }
            ,
            o.prototype.gte = function(t) {
                return this.cmp(t) >= 0
            }
            ,
            o.prototype.ltn = function(t) {
                return -1 === this.cmpn(t)
            }
            ,
            o.prototype.lt = function(t) {
                return -1 === this.cmp(t)
            }
            ,
            o.prototype.lten = function(t) {
                return 0 >= this.cmpn(t)
            }
            ,
            o.prototype.lte = function(t) {
                return 0 >= this.cmp(t)
            }
            ,
            o.prototype.eqn = function(t) {
                return 0 === this.cmpn(t)
            }
            ,
            o.prototype.eq = function(t) {
                return 0 === this.cmp(t)
            }
            ,
            o.red = function(t) {
                return new k(t)
            }
            ,
            o.prototype.toRed = function(t) {
                return n(!this.red, "Already a number in reduction context"),
                n(0 === this.negative, "red works only with positives"),
                t.convertTo(this)._forceRed(t)
            }
            ,
            o.prototype.fromRed = function() {
                return n(this.red, "fromRed works only with numbers in reduction context"),
                this.red.convertFrom(this)
            }
            ,
            o.prototype._forceRed = function(t) {
                return this.red = t,
                this
            }
            ,
            o.prototype.forceRed = function(t) {
                return n(!this.red, "Already a number in reduction context"),
                this._forceRed(t)
            }
            ,
            o.prototype.redAdd = function(t) {
                return n(this.red, "redAdd works only with red numbers"),
                this.red.add(this, t)
            }
            ,
            o.prototype.redIAdd = function(t) {
                return n(this.red, "redIAdd works only with red numbers"),
                this.red.iadd(this, t)
            }
            ,
            o.prototype.redSub = function(t) {
                return n(this.red, "redSub works only with red numbers"),
                this.red.sub(this, t)
            }
            ,
            o.prototype.redISub = function(t) {
                return n(this.red, "redISub works only with red numbers"),
                this.red.isub(this, t)
            }
            ,
            o.prototype.redShl = function(t) {
                return n(this.red, "redShl works only with red numbers"),
                this.red.shl(this, t)
            }
            ,
            o.prototype.redMul = function(t) {
                return n(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, t),
                this.red.mul(this, t)
            }
            ,
            o.prototype.redIMul = function(t) {
                return n(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, t),
                this.red.imul(this, t)
            }
            ,
            o.prototype.redSqr = function() {
                return n(this.red, "redSqr works only with red numbers"),
                this.red._verify1(this),
                this.red.sqr(this)
            }
            ,
            o.prototype.redISqr = function() {
                return n(this.red, "redISqr works only with red numbers"),
                this.red._verify1(this),
                this.red.isqr(this)
            }
            ,
            o.prototype.redSqrt = function() {
                return n(this.red, "redSqrt works only with red numbers"),
                this.red._verify1(this),
                this.red.sqrt(this)
            }
            ,
            o.prototype.redInvm = function() {
                return n(this.red, "redInvm works only with red numbers"),
                this.red._verify1(this),
                this.red.invm(this)
            }
            ,
            o.prototype.redNeg = function() {
                return n(this.red, "redNeg works only with red numbers"),
                this.red._verify1(this),
                this.red.neg(this)
            }
            ,
            o.prototype.redPow = function(t) {
                return n(this.red && !t.red, "redPow(normalNum)"),
                this.red._verify1(this),
                this.red.pow(this, t)
            }
            ;
            var b = {
                k256: null,
                p224: null,
                p192: null,
                p25519: null
            };
            function A(t, e) {
                this.name = t,
                this.p = new o(e,16),
                this.n = this.p.bitLength(),
                this.k = new o(1).iushln(this.n).isub(this.p),
                this.tmp = this._tmp()
            }
            function w() {
                A.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
            }
            function E() {
                A.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
            }
            function _() {
                A.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
            }
            function M() {
                A.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
            }
            function k(t) {
                if ("string" == typeof t) {
                    var e = o._prime(t);
                    this.m = e.p,
                    this.prime = e
                } else
                    n(t.gtn(1), "modulus must be greater than 1"),
                    this.m = t,
                    this.prime = null
            }
            function N(t) {
                k.call(this, t),
                this.shift = this.m.bitLength(),
                this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26),
                this.r = new o(1).iushln(this.shift),
                this.r2 = this.imod(this.r.sqr()),
                this.rinv = this.r._invmp(this.m),
                this.minv = this.rinv.mul(this.r).isubn(1).div(this.m),
                this.minv = this.minv.umod(this.r),
                this.minv = this.r.sub(this.minv)
            }
            A.prototype._tmp = function() {
                var t = new o(null);
                return t.words = Array(Math.ceil(this.n / 13)),
                t
            }
            ,
            A.prototype.ireduce = function(t) {
                var e, r = t;
                do
                    this.split(r, this.tmp),
                    e = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength();
                while (e > this.n);
                var n = e < this.n ? -1 : r.ucmp(this.p);
                return 0 === n ? (r.words[0] = 0,
                r.length = 1) : n > 0 ? r.isub(this.p) : void 0 !== r.strip ? r.strip() : r._strip(),
                r
            }
            ,
            A.prototype.split = function(t, e) {
                t.iushrn(this.n, 0, e)
            }
            ,
            A.prototype.imulK = function(t) {
                return t.imul(this.k)
            }
            ,
            i(w, A),
            w.prototype.split = function(t, e) {
                for (var r = Math.min(t.length, 9), n = 0; n < r; n++)
                    e.words[n] = t.words[n];
                if (e.length = r,
                t.length <= 9) {
                    t.words[0] = 0,
                    t.length = 1;
                    return
                }
                var i = t.words[9];
                for (n = 10,
                e.words[e.length++] = 4194303 & i; n < t.length; n++) {
                    var o = 0 | t.words[n];
                    t.words[n - 10] = (4194303 & o) << 4 | i >>> 22,
                    i = o
                }
                i >>>= 22,
                t.words[n - 10] = i,
                0 === i && t.length > 10 ? t.length -= 10 : t.length -= 9
            }
            ,
            w.prototype.imulK = function(t) {
                t.words[t.length] = 0,
                t.words[t.length + 1] = 0,
                t.length += 2;
                for (var e = 0, r = 0; r < t.length; r++) {
                    var n = 0 | t.words[r];
                    e += 977 * n,
                    t.words[r] = 67108863 & e,
                    e = 64 * n + (e / 67108864 | 0)
                }
                return 0 === t.words[t.length - 1] && (t.length--,
                0 === t.words[t.length - 1] && t.length--),
                t
            }
            ,
            i(E, A),
            i(_, A),
            i(M, A),
            M.prototype.imulK = function(t) {
                for (var e = 0, r = 0; r < t.length; r++) {
                    var n = (0 | t.words[r]) * 19 + e
                      , i = 67108863 & n;
                    n >>>= 26,
                    t.words[r] = i,
                    e = n
                }
                return 0 !== e && (t.words[t.length++] = e),
                t
            }
            ,
            o._prime = function(t) {
                var e;
                if (b[t])
                    return b[t];
                if ("k256" === t)
                    e = new w;
                else if ("p224" === t)
                    e = new E;
                else if ("p192" === t)
                    e = new _;
                else if ("p25519" === t)
                    e = new M;
                else
                    throw Error("Unknown prime " + t);
                return b[t] = e,
                e
            }
            ,
            k.prototype._verify1 = function(t) {
                n(0 === t.negative, "red works only with positives"),
                n(t.red, "red works only with red numbers")
            }
            ,
            k.prototype._verify2 = function(t, e) {
                n((t.negative | e.negative) == 0, "red works only with positives"),
                n(t.red && t.red === e.red, "red works only with red numbers")
            }
            ,
            k.prototype.imod = function(t) {
                return this.prime ? this.prime.ireduce(t)._forceRed(this) : (l(t, t.umod(this.m)._forceRed(this)),
                t)
            }
            ,
            k.prototype.neg = function(t) {
                return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this)
            }
            ,
            k.prototype.add = function(t, e) {
                this._verify2(t, e);
                var r = t.add(e);
                return r.cmp(this.m) >= 0 && r.isub(this.m),
                r._forceRed(this)
            }
            ,
            k.prototype.iadd = function(t, e) {
                this._verify2(t, e);
                var r = t.iadd(e);
                return r.cmp(this.m) >= 0 && r.isub(this.m),
                r
            }
            ,
            k.prototype.sub = function(t, e) {
                this._verify2(t, e);
                var r = t.sub(e);
                return 0 > r.cmpn(0) && r.iadd(this.m),
                r._forceRed(this)
            }
            ,
            k.prototype.isub = function(t, e) {
                this._verify2(t, e);
                var r = t.isub(e);
                return 0 > r.cmpn(0) && r.iadd(this.m),
                r
            }
            ,
            k.prototype.shl = function(t, e) {
                return this._verify1(t),
                this.imod(t.ushln(e))
            }
            ,
            k.prototype.imul = function(t, e) {
                return this._verify2(t, e),
                this.imod(t.imul(e))
            }
            ,
            k.prototype.mul = function(t, e) {
                return this._verify2(t, e),
                this.imod(t.mul(e))
            }
            ,
            k.prototype.isqr = function(t) {
                return this.imul(t, t.clone())
            }
            ,
            k.prototype.sqr = function(t) {
                return this.mul(t, t)
            }
            ,
            k.prototype.sqrt = function(t) {
                if (t.isZero())
                    return t.clone();
                var e = this.m.andln(3);
                if (n(e % 2 == 1),
                3 === e) {
                    var r = this.m.add(new o(1)).iushrn(2);
                    return this.pow(t, r)
                }
                for (var i = this.m.subn(1), s = 0; !i.isZero() && 0 === i.andln(1); )
                    s++,
                    i.iushrn(1);
                n(!i.isZero());
                var a = new o(1).toRed(this)
                  , u = a.redNeg()
                  , l = this.m.subn(1).iushrn(1)
                  , h = this.m.bitLength();
                for (h = new o(2 * h * h).toRed(this); 0 !== this.pow(h, l).cmp(u); )
                    h.redIAdd(u);
                for (var f = this.pow(h, i), c = this.pow(t, i.addn(1).iushrn(1)), d = this.pow(t, i), p = s; 0 !== d.cmp(a); ) {
                    for (var m = d, g = 0; 0 !== m.cmp(a); g++)
                        m = m.redSqr();
                    n(g < p);
                    var v = this.pow(f, new o(1).iushln(p - g - 1));
                    c = c.redMul(v),
                    f = v.redSqr(),
                    d = d.redMul(f),
                    p = g
                }
                return c
            }
            ,
            k.prototype.invm = function(t) {
                var e = t._invmp(this.m);
                return 0 !== e.negative ? (e.negative = 0,
                this.imod(e).redNeg()) : this.imod(e)
            }
            ,
            k.prototype.pow = function(t, e) {
                if (e.isZero())
                    return new o(1).toRed(this);
                if (0 === e.cmpn(1))
                    return t.clone();
                var r = Array(16);
                r[0] = new o(1).toRed(this),
                r[1] = t;
                for (var n = 2; n < r.length; n++)
                    r[n] = this.mul(r[n - 1], t);
                var i = r[0]
                  , s = 0
                  , a = 0
                  , u = e.bitLength() % 26;
                for (0 === u && (u = 26),
                n = e.length - 1; n >= 0; n--) {
                    for (var l = e.words[n], h = u - 1; h >= 0; h--) {
                        var f = l >> h & 1;
                        if (i !== r[0] && (i = this.sqr(i)),
                        0 === f && 0 === s) {
                            a = 0;
                            continue
                        }
                        s <<= 1,
                        s |= f,
                        (4 == ++a || 0 === n && 0 === h) && (i = this.mul(i, r[s]),
                        a = 0,
                        s = 0)
                    }
                    u = 26
                }
                return i
            }
            ,
            k.prototype.convertTo = function(t) {
                var e = t.umod(this.m);
                return e === t ? e.clone() : e
            }
            ,
            k.prototype.convertFrom = function(t) {
                var e = t.clone();
                return e.red = null,
                e
            }
            ,
            o.mont = function(t) {
                return new N(t)
            }
            ,
            i(N, k),
            N.prototype.convertTo = function(t) {
                return this.imod(t.ushln(this.shift))
            }
            ,
            N.prototype.convertFrom = function(t) {
                var e = this.imod(t.mul(this.rinv));
                return e.red = null,
                e
            }
            ,
            N.prototype.imul = function(t, e) {
                if (t.isZero() || e.isZero())
                    return t.words[0] = 0,
                    t.length = 1,
                    t;
                var r = t.imul(e)
                  , n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m)
                  , i = r.isub(n).iushrn(this.shift)
                  , o = i;
                return i.cmp(this.m) >= 0 ? o = i.isub(this.m) : 0 > i.cmpn(0) && (o = i.iadd(this.m)),
                o._forceRed(this)
            }
            ,
            N.prototype.mul = function(t, e) {
                if (t.isZero() || e.isZero())
                    return new o(0)._forceRed(this);
                var r = t.mul(e)
                  , n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m)
                  , i = r.isub(n).iushrn(this.shift)
                  , s = i;
                return i.cmp(this.m) >= 0 ? s = i.isub(this.m) : 0 > i.cmpn(0) && (s = i.iadd(this.m)),
                s._forceRed(this)
            }
            ,
            N.prototype.invm = function(t) {
                return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this)
            }
        }(t = r.nmd(t), this)
    },
    83699: function(t, e, r) {
        e.utils = r(69874),
        e.common = r(37142),
        e.sha = r(37727),
        e.ripemd = r(89561),
        e.hmac = r(40238),
        e.sha1 = e.sha.sha1,
        e.sha256 = e.sha.sha256,
        e.sha224 = e.sha.sha224,
        e.sha384 = e.sha.sha384,
        e.sha512 = e.sha.sha512,
        e.ripemd160 = e.ripemd.ripemd160
    },
    37142: function(t, e, r) {
        "use strict";
        var n = r(69874)
          , i = r(71974);
        function o() {
            this.pending = null,
            this.pendingTotal = 0,
            this.blockSize = this.constructor.blockSize,
            this.outSize = this.constructor.outSize,
            this.hmacStrength = this.constructor.hmacStrength,
            this.padLength = this.constructor.padLength / 8,
            this.endian = "big",
            this._delta8 = this.blockSize / 8,
            this._delta32 = this.blockSize / 32
        }
        e.BlockHash = o,
        o.prototype.update = function(t, e) {
            if (t = n.toArray(t, e),
            this.pending ? this.pending = this.pending.concat(t) : this.pending = t,
            this.pendingTotal += t.length,
            this.pending.length >= this._delta8) {
                var r = (t = this.pending).length % this._delta8;
                this.pending = t.slice(t.length - r, t.length),
                0 === this.pending.length && (this.pending = null),
                t = n.join32(t, 0, t.length - r, this.endian);
                for (var i = 0; i < t.length; i += this._delta32)
                    this._update(t, i, i + this._delta32)
            }
            return this
        }
        ,
        o.prototype.digest = function(t) {
            return this.update(this._pad()),
            i(null === this.pending),
            this._digest(t)
        }
        ,
        o.prototype._pad = function() {
            var t = this.pendingTotal
              , e = this._delta8
              , r = e - (t + this.padLength) % e
              , n = Array(r + this.padLength);
            n[0] = 128;
            for (var i = 1; i < r; i++)
                n[i] = 0;
            if (t <<= 3,
            "big" === this.endian) {
                for (var o = 8; o < this.padLength; o++)
                    n[i++] = 0;
                n[i++] = 0,
                n[i++] = 0,
                n[i++] = 0,
                n[i++] = 0,
                n[i++] = t >>> 24 & 255,
                n[i++] = t >>> 16 & 255,
                n[i++] = t >>> 8 & 255,
                n[i++] = 255 & t
            } else
                for (o = 8,
                n[i++] = 255 & t,
                n[i++] = t >>> 8 & 255,
                n[i++] = t >>> 16 & 255,
                n[i++] = t >>> 24 & 255,
                n[i++] = 0,
                n[i++] = 0,
                n[i++] = 0,
                n[i++] = 0; o < this.padLength; o++)
                    n[i++] = 0;
            return n
        }
    },
    40238: function(t, e, r) {
        "use strict";
        var n = r(69874)
          , i = r(71974);
        function o(t, e, r) {
            if (!(this instanceof o))
                return new o(t,e,r);
            this.Hash = t,
            this.blockSize = t.blockSize / 8,
            this.outSize = t.outSize / 8,
            this.inner = null,
            this.outer = null,
            this._init(n.toArray(e, r))
        }
        t.exports = o,
        o.prototype._init = function(t) {
            t.length > this.blockSize && (t = new this.Hash().update(t).digest()),
            i(t.length <= this.blockSize);
            for (var e = t.length; e < this.blockSize; e++)
                t.push(0);
            for (e = 0; e < t.length; e++)
                t[e] ^= 54;
            for (e = 0,
            this.inner = new this.Hash().update(t); e < t.length; e++)
                t[e] ^= 106;
            this.outer = new this.Hash().update(t)
        }
        ,
        o.prototype.update = function(t, e) {
            return this.inner.update(t, e),
            this
        }
        ,
        o.prototype.digest = function(t) {
            return this.outer.update(this.inner.digest()),
            this.outer.digest(t)
        }
    },
    89561: function(t, e, r) {
        "use strict";
        var n = r(69874)
          , i = r(37142)
          , o = n.rotl32
          , s = n.sum32
          , a = n.sum32_3
          , u = n.sum32_4
          , l = i.BlockHash;
        function h() {
            if (!(this instanceof h))
                return new h;
            l.call(this),
            this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520],
            this.endian = "little"
        }
        function f(t, e, r, n) {
            return t <= 15 ? e ^ r ^ n : t <= 31 ? e & r | ~e & n : t <= 47 ? (e | ~r) ^ n : t <= 63 ? e & n | r & ~n : e ^ (r | ~n)
        }
        n.inherits(h, l),
        e.ripemd160 = h,
        h.blockSize = 512,
        h.outSize = 160,
        h.hmacStrength = 192,
        h.padLength = 64,
        h.prototype._update = function(t, e) {
            for (var r = this.h[0], n = this.h[1], i = this.h[2], l = this.h[3], h = this.h[4], g = r, v = n, y = i, b = l, A = h, w = 0; w < 80; w++) {
                var E, _, M = s(o(u(r, f(w, n, i, l), t[c[w] + e], (E = w) <= 15 ? 0 : E <= 31 ? 1518500249 : E <= 47 ? 1859775393 : E <= 63 ? 2400959708 : 2840853838), p[w]), h);
                r = h,
                h = l,
                l = o(i, 10),
                i = n,
                n = M,
                M = s(o(u(g, f(79 - w, v, y, b), t[d[w] + e], (_ = w) <= 15 ? 1352829926 : _ <= 31 ? 1548603684 : _ <= 47 ? 1836072691 : _ <= 63 ? 2053994217 : 0), m[w]), A),
                g = A,
                A = b,
                b = o(y, 10),
                y = v,
                v = M
            }
            M = a(this.h[1], i, b),
            this.h[1] = a(this.h[2], l, A),
            this.h[2] = a(this.h[3], h, g),
            this.h[3] = a(this.h[4], r, v),
            this.h[4] = a(this.h[0], n, y),
            this.h[0] = M
        }
        ,
        h.prototype._digest = function(t) {
            return "hex" === t ? n.toHex32(this.h, "little") : n.split32(this.h, "little")
        }
        ;
        var c = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]
          , d = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]
          , p = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]
          , m = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]
    },
    37727: function(t, e, r) {
        "use strict";
        e.sha1 = r(99659),
        e.sha224 = r(15577),
        e.sha256 = r(4132),
        e.sha384 = r(65560),
        e.sha512 = r(86124)
    },
    99659: function(t, e, r) {
        "use strict";
        var n = r(69874)
          , i = r(37142)
          , o = r(9221)
          , s = n.rotl32
          , a = n.sum32
          , u = n.sum32_5
          , l = o.ft_1
          , h = i.BlockHash
          , f = [1518500249, 1859775393, 2400959708, 3395469782];
        function c() {
            if (!(this instanceof c))
                return new c;
            h.call(this),
            this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520],
            this.W = Array(80)
        }
        n.inherits(c, h),
        t.exports = c,
        c.blockSize = 512,
        c.outSize = 160,
        c.hmacStrength = 80,
        c.padLength = 64,
        c.prototype._update = function(t, e) {
            for (var r = this.W, n = 0; n < 16; n++)
                r[n] = t[e + n];
            for (; n < r.length; n++)
                r[n] = s(r[n - 3] ^ r[n - 8] ^ r[n - 14] ^ r[n - 16], 1);
            var i = this.h[0]
              , o = this.h[1]
              , h = this.h[2]
              , c = this.h[3]
              , d = this.h[4];
            for (n = 0; n < r.length; n++) {
                var p = ~~(n / 20)
                  , m = u(s(i, 5), l(p, o, h, c), d, r[n], f[p]);
                d = c,
                c = h,
                h = s(o, 30),
                o = i,
                i = m
            }
            this.h[0] = a(this.h[0], i),
            this.h[1] = a(this.h[1], o),
            this.h[2] = a(this.h[2], h),
            this.h[3] = a(this.h[3], c),
            this.h[4] = a(this.h[4], d)
        }
        ,
        c.prototype._digest = function(t) {
            return "hex" === t ? n.toHex32(this.h, "big") : n.split32(this.h, "big")
        }
    },
    15577: function(t, e, r) {
        "use strict";
        var n = r(69874)
          , i = r(4132);
        function o() {
            if (!(this instanceof o))
                return new o;
            i.call(this),
            this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]
        }
        n.inherits(o, i),
        t.exports = o,
        o.blockSize = 512,
        o.outSize = 224,
        o.hmacStrength = 192,
        o.padLength = 64,
        o.prototype._digest = function(t) {
            return "hex" === t ? n.toHex32(this.h.slice(0, 7), "big") : n.split32(this.h.slice(0, 7), "big")
        }
    },
    4132: function(t, e, r) {
        "use strict";
        var n = r(69874)
          , i = r(37142)
          , o = r(9221)
          , s = r(71974)
          , a = n.sum32
          , u = n.sum32_4
          , l = n.sum32_5
          , h = o.ch32
          , f = o.maj32
          , c = o.s0_256
          , d = o.s1_256
          , p = o.g0_256
          , m = o.g1_256
          , g = i.BlockHash
          , v = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
        function y() {
            if (!(this instanceof y))
                return new y;
            g.call(this),
            this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225],
            this.k = v,
            this.W = Array(64)
        }
        n.inherits(y, g),
        t.exports = y,
        y.blockSize = 512,
        y.outSize = 256,
        y.hmacStrength = 192,
        y.padLength = 64,
        y.prototype._update = function(t, e) {
            for (var r = this.W, n = 0; n < 16; n++)
                r[n] = t[e + n];
            for (; n < r.length; n++)
                r[n] = u(m(r[n - 2]), r[n - 7], p(r[n - 15]), r[n - 16]);
            var i = this.h[0]
              , o = this.h[1]
              , g = this.h[2]
              , v = this.h[3]
              , y = this.h[4]
              , b = this.h[5]
              , A = this.h[6]
              , w = this.h[7];
            for (s(this.k.length === r.length),
            n = 0; n < r.length; n++) {
                var E = l(w, d(y), h(y, b, A), this.k[n], r[n])
                  , _ = a(c(i), f(i, o, g));
                w = A,
                A = b,
                b = y,
                y = a(v, E),
                v = g,
                g = o,
                o = i,
                i = a(E, _)
            }
            this.h[0] = a(this.h[0], i),
            this.h[1] = a(this.h[1], o),
            this.h[2] = a(this.h[2], g),
            this.h[3] = a(this.h[3], v),
            this.h[4] = a(this.h[4], y),
            this.h[5] = a(this.h[5], b),
            this.h[6] = a(this.h[6], A),
            this.h[7] = a(this.h[7], w)
        }
        ,
        y.prototype._digest = function(t) {
            return "hex" === t ? n.toHex32(this.h, "big") : n.split32(this.h, "big")
        }
    },
    65560: function(t, e, r) {
        "use strict";
        var n = r(69874)
          , i = r(86124);
        function o() {
            if (!(this instanceof o))
                return new o;
            i.call(this),
            this.h = [3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428]
        }
        n.inherits(o, i),
        t.exports = o,
        o.blockSize = 1024,
        o.outSize = 384,
        o.hmacStrength = 192,
        o.padLength = 128,
        o.prototype._digest = function(t) {
            return "hex" === t ? n.toHex32(this.h.slice(0, 12), "big") : n.split32(this.h.slice(0, 12), "big")
        }
    },
    86124: function(t, e, r) {
        "use strict";
        var n = r(69874)
          , i = r(37142)
          , o = r(71974)
          , s = n.rotr64_hi
          , a = n.rotr64_lo
          , u = n.shr64_hi
          , l = n.shr64_lo
          , h = n.sum64
          , f = n.sum64_hi
          , c = n.sum64_lo
          , d = n.sum64_4_hi
          , p = n.sum64_4_lo
          , m = n.sum64_5_hi
          , g = n.sum64_5_lo
          , v = i.BlockHash
          , y = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];
        function b() {
            if (!(this instanceof b))
                return new b;
            v.call(this),
            this.h = [1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209],
            this.k = y,
            this.W = Array(160)
        }
        n.inherits(b, v),
        t.exports = b,
        b.blockSize = 1024,
        b.outSize = 512,
        b.hmacStrength = 192,
        b.padLength = 128,
        b.prototype._prepareBlock = function(t, e) {
            for (var r = this.W, n = 0; n < 32; n++)
                r[n] = t[e + n];
            for (; n < r.length; n += 2) {
                var i = function(t, e) {
                    var r = s(t, e, 19) ^ s(e, t, 29) ^ u(t, e, 6);
                    return r < 0 && (r += 4294967296),
                    r
                }(r[n - 4], r[n - 3])
                  , o = function(t, e) {
                    var r = a(t, e, 19) ^ a(e, t, 29) ^ l(t, e, 6);
                    return r < 0 && (r += 4294967296),
                    r
                }(r[n - 4], r[n - 3])
                  , h = r[n - 14]
                  , f = r[n - 13]
                  , c = function(t, e) {
                    var r = s(t, e, 1) ^ s(t, e, 8) ^ u(t, e, 7);
                    return r < 0 && (r += 4294967296),
                    r
                }(r[n - 30], r[n - 29])
                  , m = function(t, e) {
                    var r = a(t, e, 1) ^ a(t, e, 8) ^ l(t, e, 7);
                    return r < 0 && (r += 4294967296),
                    r
                }(r[n - 30], r[n - 29])
                  , g = r[n - 32]
                  , v = r[n - 31];
                r[n] = d(i, o, h, f, c, m, g, v),
                r[n + 1] = p(i, o, h, f, c, m, g, v)
            }
        }
        ,
        b.prototype._update = function(t, e) {
            this._prepareBlock(t, e);
            var r = this.W
              , n = this.h[0]
              , i = this.h[1]
              , u = this.h[2]
              , l = this.h[3]
              , d = this.h[4]
              , p = this.h[5]
              , v = this.h[6]
              , y = this.h[7]
              , b = this.h[8]
              , A = this.h[9]
              , w = this.h[10]
              , E = this.h[11]
              , _ = this.h[12]
              , M = this.h[13]
              , k = this.h[14]
              , N = this.h[15];
            o(this.k.length === r.length);
            for (var x = 0; x < r.length; x += 2) {
                var P = k
                  , I = N
                  , S = function(t, e) {
                    var r = s(t, e, 14) ^ s(t, e, 18) ^ s(e, t, 9);
                    return r < 0 && (r += 4294967296),
                    r
                }(b, A)
                  , R = function(t, e) {
                    var r = a(t, e, 14) ^ a(t, e, 18) ^ a(e, t, 9);
                    return r < 0 && (r += 4294967296),
                    r
                }(b, A)
                  , C = function(t, e, r, n, i) {
                    var o = t & r ^ ~t & i;
                    return o < 0 && (o += 4294967296),
                    o
                }(b, 0, w, 0, _, M)
                  , O = function(t, e, r, n, i, o) {
                    var s = e & n ^ ~e & o;
                    return s < 0 && (s += 4294967296),
                    s
                }(0, A, 0, E, 0, M)
                  , T = this.k[x]
                  , B = this.k[x + 1]
                  , D = r[x]
                  , L = r[x + 1]
                  , U = m(P, I, S, R, C, O, T, B, D, L)
                  , F = g(P, I, S, R, C, O, T, B, D, L);
                P = function(t, e) {
                    var r = s(t, e, 28) ^ s(e, t, 2) ^ s(e, t, 7);
                    return r < 0 && (r += 4294967296),
                    r
                }(n, i);
                var z = f(P, I = function(t, e) {
                    var r = a(t, e, 28) ^ a(e, t, 2) ^ a(e, t, 7);
                    return r < 0 && (r += 4294967296),
                    r
                }(n, i), S = function(t, e, r, n, i) {
                    var o = t & r ^ t & i ^ r & i;
                    return o < 0 && (o += 4294967296),
                    o
                }(n, 0, u, 0, d, p), R = function(t, e, r, n, i, o) {
                    var s = e & n ^ e & o ^ n & o;
                    return s < 0 && (s += 4294967296),
                    s
                }(0, i, 0, l, 0, p))
                  , j = c(P, I, S, R);
                k = _,
                N = M,
                _ = w,
                M = E,
                w = b,
                E = A,
                b = f(v, y, U, F),
                A = c(y, y, U, F),
                v = d,
                y = p,
                d = u,
                p = l,
                u = n,
                l = i,
                n = f(U, F, z, j),
                i = c(U, F, z, j)
            }
            h(this.h, 0, n, i),
            h(this.h, 2, u, l),
            h(this.h, 4, d, p),
            h(this.h, 6, v, y),
            h(this.h, 8, b, A),
            h(this.h, 10, w, E),
            h(this.h, 12, _, M),
            h(this.h, 14, k, N)
        }
        ,
        b.prototype._digest = function(t) {
            return "hex" === t ? n.toHex32(this.h, "big") : n.split32(this.h, "big")
        }
    },
    9221: function(t, e, r) {
        "use strict";
        var n = r(69874).rotr32;
        function i(t, e, r) {
            return t & e ^ t & r ^ e & r
        }
        e.ft_1 = function(t, e, r, n) {
            return 0 === t ? e & r ^ ~e & n : 1 === t || 3 === t ? e ^ r ^ n : 2 === t ? i(e, r, n) : void 0
        }
        ,
        e.ch32 = function(t, e, r) {
            return t & e ^ ~t & r
        }
        ,
        e.maj32 = i,
        e.p32 = function(t, e, r) {
            return t ^ e ^ r
        }
        ,
        e.s0_256 = function(t) {
            return n(t, 2) ^ n(t, 13) ^ n(t, 22)
        }
        ,
        e.s1_256 = function(t) {
            return n(t, 6) ^ n(t, 11) ^ n(t, 25)
        }
        ,
        e.g0_256 = function(t) {
            return n(t, 7) ^ n(t, 18) ^ t >>> 3
        }
        ,
        e.g1_256 = function(t) {
            return n(t, 17) ^ n(t, 19) ^ t >>> 10
        }
    },
    69874: function(t, e, r) {
        "use strict";
        var n = r(71974)
          , i = r(87398);
        function o(t) {
            return (t >>> 24 | t >>> 8 & 65280 | t << 8 & 16711680 | (255 & t) << 24) >>> 0
        }
        function s(t) {
            return 1 === t.length ? "0" + t : t
        }
        function a(t) {
            if (7 === t.length)
                return "0" + t;
            if (6 === t.length)
                return "00" + t;
            if (5 === t.length)
                return "000" + t;
            if (4 === t.length)
                return "0000" + t;
            if (3 === t.length)
                return "00000" + t;
            if (2 === t.length)
                return "000000" + t;
            if (1 === t.length)
                return "0000000" + t;
            else
                return t
        }
        e.inherits = i,
        e.toArray = function(t, e) {
            if (Array.isArray(t))
                return t.slice();
            if (!t)
                return [];
            var r = [];
            if ("string" == typeof t) {
                if (e) {
                    if ("hex" === e)
                        for ((t = t.replace(/[^a-z0-9]+/ig, "")).length % 2 != 0 && (t = "0" + t),
                        i = 0; i < t.length; i += 2)
                            r.push(parseInt(t[i] + t[i + 1], 16))
                } else
                    for (var n = 0, i = 0; i < t.length; i++) {
                        var o, s, a = t.charCodeAt(i);
                        a < 128 ? r[n++] = a : (a < 2048 ? r[n++] = a >> 6 | 192 : ((o = t,
                        s = i,
                        (64512 & o.charCodeAt(s)) != 55296 || s < 0 || s + 1 >= o.length ? 1 : (64512 & o.charCodeAt(s + 1)) != 56320) ? r[n++] = a >> 12 | 224 : (a = 65536 + ((1023 & a) << 10) + (1023 & t.charCodeAt(++i)),
                        r[n++] = a >> 18 | 240,
                        r[n++] = a >> 12 & 63 | 128),
                        r[n++] = a >> 6 & 63 | 128),
                        r[n++] = 63 & a | 128)
                    }
            } else
                for (i = 0; i < t.length; i++)
                    r[i] = 0 | t[i];
            return r
        }
        ,
        e.toHex = function(t) {
            for (var e = "", r = 0; r < t.length; r++)
                e += s(t[r].toString(16));
            return e
        }
        ,
        e.htonl = o,
        e.toHex32 = function(t, e) {
            for (var r = "", n = 0; n < t.length; n++) {
                var i = t[n];
                "little" === e && (i = o(i)),
                r += a(i.toString(16))
            }
            return r
        }
        ,
        e.zero2 = s,
        e.zero8 = a,
        e.join32 = function(t, e, r, i) {
            var o, s = r - e;
            n(s % 4 == 0);
            for (var a = Array(s / 4), u = 0, l = e; u < a.length; u++,
            l += 4)
                o = "big" === i ? t[l] << 24 | t[l + 1] << 16 | t[l + 2] << 8 | t[l + 3] : t[l + 3] << 24 | t[l + 2] << 16 | t[l + 1] << 8 | t[l],
                a[u] = o >>> 0;
            return a
        }
        ,
        e.split32 = function(t, e) {
            for (var r = Array(4 * t.length), n = 0, i = 0; n < t.length; n++,
            i += 4) {
                var o = t[n];
                "big" === e ? (r[i] = o >>> 24,
                r[i + 1] = o >>> 16 & 255,
                r[i + 2] = o >>> 8 & 255,
                r[i + 3] = 255 & o) : (r[i + 3] = o >>> 24,
                r[i + 2] = o >>> 16 & 255,
                r[i + 1] = o >>> 8 & 255,
                r[i] = 255 & o)
            }
            return r
        }
        ,
        e.rotr32 = function(t, e) {
            return t >>> e | t << 32 - e
        }
        ,
        e.rotl32 = function(t, e) {
            return t << e | t >>> 32 - e
        }
        ,
        e.sum32 = function(t, e) {
            return t + e >>> 0
        }
        ,
        e.sum32_3 = function(t, e, r) {
            return t + e + r >>> 0
        }
        ,
        e.sum32_4 = function(t, e, r, n) {
            return t + e + r + n >>> 0
        }
        ,
        e.sum32_5 = function(t, e, r, n, i) {
            return t + e + r + n + i >>> 0
        }
        ,
        e.sum64 = function(t, e, r, n) {
            var i = t[e]
              , o = n + t[e + 1] >>> 0;
            t[e] = (o < n ? 1 : 0) + r + i >>> 0,
            t[e + 1] = o
        }
        ,
        e.sum64_hi = function(t, e, r, n) {
            return (e + n >>> 0 < e ? 1 : 0) + t + r >>> 0
        }
        ,
        e.sum64_lo = function(t, e, r, n) {
            return e + n >>> 0
        }
        ,
        e.sum64_4_hi = function(t, e, r, n, i, o, s, a) {
            var u, l = e;
            return t + r + i + s + (0 + ((l = l + n >>> 0) < e ? 1 : 0) + ((l = l + o >>> 0) < o ? 1 : 0) + ((l = l + a >>> 0) < a ? 1 : 0)) >>> 0
        }
        ,
        e.sum64_4_lo = function(t, e, r, n, i, o, s, a) {
            return e + n + o + a >>> 0
        }
        ,
        e.sum64_5_hi = function(t, e, r, n, i, o, s, a, u, l) {
            var h, f = e;
            return t + r + i + s + u + (0 + ((f = f + n >>> 0) < e ? 1 : 0) + ((f = f + o >>> 0) < o ? 1 : 0) + ((f = f + a >>> 0) < a ? 1 : 0) + ((f = f + l >>> 0) < l ? 1 : 0)) >>> 0
        }
        ,
        e.sum64_5_lo = function(t, e, r, n, i, o, s, a, u, l) {
            return e + n + o + a + l >>> 0
        }
        ,
        e.rotr64_hi = function(t, e, r) {
            return (e << 32 - r | t >>> r) >>> 0
        }
        ,
        e.rotr64_lo = function(t, e, r) {
            return (t << 32 - r | e >>> r) >>> 0
        }
        ,
        e.shr64_hi = function(t, e, r) {
            return t >>> r
        }
        ,
        e.shr64_lo = function(t, e, r) {
            return (t << 32 - r | e >>> r) >>> 0
        }
    },
    87398: function(t) {
        "function" == typeof Object.create ? t.exports = function(t, e) {
            e && (t.super_ = e,
            t.prototype = Object.create(e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }))
        }
        : t.exports = function(t, e) {
            if (e) {
                t.super_ = e;
                var r = function() {};
                r.prototype = e.prototype,
                t.prototype = new r,
                t.prototype.constructor = t
            }
        }
    },
    83524: function(t, e, r) {
        var n, i = r(20357);
        !function() {
            "use strict";
            var o = "input is invalid type"
              , s = "object" == typeof window
              , a = s ? window : {};
            a.JS_SHA3_NO_WINDOW && (s = !1);
            var u = !s && "object" == typeof self;
            !a.JS_SHA3_NO_NODE_JS && "object" == typeof i && i.versions && i.versions.node ? a = r.g : u && (a = self);
            var l = !a.JS_SHA3_NO_COMMON_JS && t.exports
              , h = r.amdO
              , f = !a.JS_SHA3_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer
              , c = "0123456789abcdef".split("")
              , d = [4, 1024, 262144, 67108864]
              , p = [0, 8, 16, 24]
              , m = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648]
              , g = [224, 256, 384, 512]
              , v = [128, 256]
              , y = ["hex", "buffer", "arrayBuffer", "array", "digest"]
              , b = {
                128: 168,
                256: 136
            };
            (a.JS_SHA3_NO_NODE_JS || !Array.isArray) && (Array.isArray = function(t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            }
            ),
            f && (a.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) && (ArrayBuffer.isView = function(t) {
                return "object" == typeof t && t.buffer && t.buffer.constructor === ArrayBuffer
            }
            );
            for (var A = function(t, e, r) {
                return function(n) {
                    return new B(t,e,t).update(n)[r]()
                }
            }, w = function(t, e, r) {
                return function(n, i) {
                    return new B(t,e,i).update(n)[r]()
                }
            }, E = function(t, e, r) {
                return function(e, n, i, o) {
                    return x["cshake" + t].update(e, n, i, o)[r]()
                }
            }, _ = function(t, e, r) {
                return function(e, n, i, o) {
                    return x["kmac" + t].update(e, n, i, o)[r]()
                }
            }, M = function(t, e, r, n) {
                for (var i = 0; i < y.length; ++i) {
                    var o = y[i];
                    t[o] = e(r, n, o)
                }
                return t
            }, k = function(t, e) {
                var r = A(t, e, "hex");
                return r.create = function() {
                    return new B(t,e,t)
                }
                ,
                r.update = function(t) {
                    return r.create().update(t)
                }
                ,
                M(r, A, t, e)
            }, N = [{
                name: "keccak",
                padding: [1, 256, 65536, 16777216],
                bits: g,
                createMethod: k
            }, {
                name: "sha3",
                padding: [6, 1536, 393216, 100663296],
                bits: g,
                createMethod: k
            }, {
                name: "shake",
                padding: [31, 7936, 2031616, 520093696],
                bits: v,
                createMethod: function(t, e) {
                    var r = w(t, e, "hex");
                    return r.create = function(r) {
                        return new B(t,e,r)
                    }
                    ,
                    r.update = function(t, e) {
                        return r.create(e).update(t)
                    }
                    ,
                    M(r, w, t, e)
                }
            }, {
                name: "cshake",
                padding: d,
                bits: v,
                createMethod: function(t, e) {
                    var r = b[t]
                      , n = E(t, e, "hex");
                    return n.create = function(n, i, o) {
                        return i || o ? new B(t,e,n).bytepad([i, o], r) : x["shake" + t].create(n)
                    }
                    ,
                    n.update = function(t, e, r, i) {
                        return n.create(e, r, i).update(t)
                    }
                    ,
                    M(n, E, t, e)
                }
            }, {
                name: "kmac",
                padding: d,
                bits: v,
                createMethod: function(t, e) {
                    var r = b[t]
                      , n = _(t, e, "hex");
                    return n.create = function(n, i, o) {
                        return new D(t,e,i).bytepad(["KMAC", o], r).bytepad([n], r)
                    }
                    ,
                    n.update = function(t, e, r, i) {
                        return n.create(t, r, i).update(e)
                    }
                    ,
                    M(n, _, t, e)
                }
            }], x = {}, P = [], I = 0; I < N.length; ++I)
                for (var S = N[I], R = S.bits, C = 0; C < R.length; ++C) {
                    var O = S.name + "_" + R[C];
                    if (P.push(O),
                    x[O] = S.createMethod(R[C], S.padding),
                    "sha3" !== S.name) {
                        var T = S.name + R[C];
                        P.push(T),
                        x[T] = x[O]
                    }
                }
            function B(t, e, r) {
                this.blocks = [],
                this.s = [],
                this.padding = e,
                this.outputBits = r,
                this.reset = !0,
                this.finalized = !1,
                this.block = 0,
                this.start = 0,
                this.blockCount = 1600 - (t << 1) >> 5,
                this.byteCount = this.blockCount << 2,
                this.outputBlocks = r >> 5,
                this.extraBytes = (31 & r) >> 3;
                for (var n = 0; n < 50; ++n)
                    this.s[n] = 0
            }
            function D(t, e, r) {
                B.call(this, t, e, r)
            }
            B.prototype.update = function(t) {
                if (this.finalized)
                    throw Error("finalize already called");
                var e, r = typeof t;
                if ("string" !== r) {
                    if ("object" === r) {
                        if (null === t)
                            throw Error(o);
                        if (f && t.constructor === ArrayBuffer)
                            t = new Uint8Array(t);
                        else if (!Array.isArray(t) && (!f || !ArrayBuffer.isView(t)))
                            throw Error(o)
                    } else
                        throw Error(o);
                    e = !0
                }
                for (var n, i, s = this.blocks, a = this.byteCount, u = t.length, l = this.blockCount, h = 0, c = this.s; h < u; ) {
                    if (this.reset)
                        for (n = 1,
                        this.reset = !1,
                        s[0] = this.block; n < l + 1; ++n)
                            s[n] = 0;
                    if (e)
                        for (n = this.start; h < u && n < a; ++h)
                            s[n >> 2] |= t[h] << p[3 & n++];
                    else
                        for (n = this.start; h < u && n < a; ++h)
                            (i = t.charCodeAt(h)) < 128 ? s[n >> 2] |= i << p[3 & n++] : (i < 2048 ? s[n >> 2] |= (192 | i >> 6) << p[3 & n++] : (i < 55296 || i >= 57344 ? s[n >> 2] |= (224 | i >> 12) << p[3 & n++] : (i = 65536 + ((1023 & i) << 10 | 1023 & t.charCodeAt(++h)),
                            s[n >> 2] |= (240 | i >> 18) << p[3 & n++],
                            s[n >> 2] |= (128 | i >> 12 & 63) << p[3 & n++]),
                            s[n >> 2] |= (128 | i >> 6 & 63) << p[3 & n++]),
                            s[n >> 2] |= (128 | 63 & i) << p[3 & n++]);
                    if (this.lastByteIndex = n,
                    n >= a) {
                        for (this.start = n - a,
                        this.block = s[l],
                        n = 0; n < l; ++n)
                            c[n] ^= s[n];
                        L(c),
                        this.reset = !0
                    } else
                        this.start = n
                }
                return this
            }
            ,
            B.prototype.encode = function(t, e) {
                var r = 255 & t
                  , n = 1
                  , i = [r];
                for (t >>= 8,
                r = 255 & t; r > 0; )
                    i.unshift(r),
                    t >>= 8,
                    r = 255 & t,
                    ++n;
                return e ? i.push(n) : i.unshift(n),
                this.update(i),
                i.length
            }
            ,
            B.prototype.encodeString = function(t) {
                var e, r = typeof t;
                if ("string" !== r) {
                    if ("object" === r) {
                        if (null === t)
                            throw Error(o);
                        if (f && t.constructor === ArrayBuffer)
                            t = new Uint8Array(t);
                        else if (!Array.isArray(t) && (!f || !ArrayBuffer.isView(t)))
                            throw Error(o)
                    } else
                        throw Error(o);
                    e = !0
                }
                var n = 0
                  , i = t.length;
                if (e)
                    n = i;
                else
                    for (var s = 0; s < t.length; ++s) {
                        var a = t.charCodeAt(s);
                        a < 128 ? n += 1 : a < 2048 ? n += 2 : a < 55296 || a >= 57344 ? n += 3 : (a = 65536 + ((1023 & a) << 10 | 1023 & t.charCodeAt(++s)),
                        n += 4)
                    }
                return n += this.encode(8 * n),
                this.update(t),
                n
            }
            ,
            B.prototype.bytepad = function(t, e) {
                for (var r = this.encode(e), n = 0; n < t.length; ++n)
                    r += this.encodeString(t[n]);
                var i = e - r % e
                  , o = [];
                return o.length = i,
                this.update(o),
                this
            }
            ,
            B.prototype.finalize = function() {
                if (!this.finalized) {
                    this.finalized = !0;
                    var t = this.blocks
                      , e = this.lastByteIndex
                      , r = this.blockCount
                      , n = this.s;
                    if (t[e >> 2] |= this.padding[3 & e],
                    this.lastByteIndex === this.byteCount)
                        for (e = 1,
                        t[0] = t[r]; e < r + 1; ++e)
                            t[e] = 0;
                    for (t[r - 1] |= 2147483648,
                    e = 0; e < r; ++e)
                        n[e] ^= t[e];
                    L(n)
                }
            }
            ,
            B.prototype.toString = B.prototype.hex = function() {
                this.finalize();
                for (var t, e = this.blockCount, r = this.s, n = this.outputBlocks, i = this.extraBytes, o = 0, s = 0, a = ""; s < n; ) {
                    for (o = 0; o < e && s < n; ++o,
                    ++s)
                        a += c[(t = r[o]) >> 4 & 15] + c[15 & t] + c[t >> 12 & 15] + c[t >> 8 & 15] + c[t >> 20 & 15] + c[t >> 16 & 15] + c[t >> 28 & 15] + c[t >> 24 & 15];
                    s % e == 0 && (L(r),
                    o = 0)
                }
                return i && (a += c[(t = r[o]) >> 4 & 15] + c[15 & t],
                i > 1 && (a += c[t >> 12 & 15] + c[t >> 8 & 15]),
                i > 2 && (a += c[t >> 20 & 15] + c[t >> 16 & 15])),
                a
            }
            ,
            B.prototype.arrayBuffer = function() {
                this.finalize();
                for (var t, e = this.blockCount, r = this.s, n = this.outputBlocks, i = this.extraBytes, o = 0, s = 0, a = this.outputBits >> 3, u = new Uint32Array(t = new ArrayBuffer(i ? n + 1 << 2 : a)); s < n; ) {
                    for (o = 0; o < e && s < n; ++o,
                    ++s)
                        u[s] = r[o];
                    s % e == 0 && L(r)
                }
                return i && (u[o] = r[o],
                t = t.slice(0, a)),
                t
            }
            ,
            B.prototype.buffer = B.prototype.arrayBuffer,
            B.prototype.digest = B.prototype.array = function() {
                this.finalize();
                for (var t, e, r = this.blockCount, n = this.s, i = this.outputBlocks, o = this.extraBytes, s = 0, a = 0, u = []; a < i; ) {
                    for (s = 0; s < r && a < i; ++s,
                    ++a)
                        t = a << 2,
                        e = n[s],
                        u[t] = 255 & e,
                        u[t + 1] = e >> 8 & 255,
                        u[t + 2] = e >> 16 & 255,
                        u[t + 3] = e >> 24 & 255;
                    a % r == 0 && L(n)
                }
                return o && (t = a << 2,
                e = n[s],
                u[t] = 255 & e,
                o > 1 && (u[t + 1] = e >> 8 & 255),
                o > 2 && (u[t + 2] = e >> 16 & 255)),
                u
            }
            ,
            D.prototype = new B,
            D.prototype.finalize = function() {
                return this.encode(this.outputBits, !0),
                B.prototype.finalize.call(this)
            }
            ;
            var L = function(t) {
                var e, r, n, i, o, s, a, u, l, h, f, c, d, p, g, v, y, b, A, w, E, _, M, k, N, x, P, I, S, R, C, O, T, B, D, L, U, F, z, j, G, Y, q, H, K, Q, J, W, V, X, Z, $, tt, te, tr, tn, ti, to, ts, ta, tu, tl, th;
                for (n = 0; n < 48; n += 2)
                    i = t[0] ^ t[10] ^ t[20] ^ t[30] ^ t[40],
                    o = t[1] ^ t[11] ^ t[21] ^ t[31] ^ t[41],
                    s = t[2] ^ t[12] ^ t[22] ^ t[32] ^ t[42],
                    a = t[3] ^ t[13] ^ t[23] ^ t[33] ^ t[43],
                    u = t[4] ^ t[14] ^ t[24] ^ t[34] ^ t[44],
                    l = t[5] ^ t[15] ^ t[25] ^ t[35] ^ t[45],
                    h = t[6] ^ t[16] ^ t[26] ^ t[36] ^ t[46],
                    f = t[7] ^ t[17] ^ t[27] ^ t[37] ^ t[47],
                    c = t[8] ^ t[18] ^ t[28] ^ t[38] ^ t[48],
                    d = t[9] ^ t[19] ^ t[29] ^ t[39] ^ t[49],
                    e = c ^ (s << 1 | a >>> 31),
                    r = d ^ (a << 1 | s >>> 31),
                    t[0] ^= e,
                    t[1] ^= r,
                    t[10] ^= e,
                    t[11] ^= r,
                    t[20] ^= e,
                    t[21] ^= r,
                    t[30] ^= e,
                    t[31] ^= r,
                    t[40] ^= e,
                    t[41] ^= r,
                    e = i ^ (u << 1 | l >>> 31),
                    r = o ^ (l << 1 | u >>> 31),
                    t[2] ^= e,
                    t[3] ^= r,
                    t[12] ^= e,
                    t[13] ^= r,
                    t[22] ^= e,
                    t[23] ^= r,
                    t[32] ^= e,
                    t[33] ^= r,
                    t[42] ^= e,
                    t[43] ^= r,
                    e = s ^ (h << 1 | f >>> 31),
                    r = a ^ (f << 1 | h >>> 31),
                    t[4] ^= e,
                    t[5] ^= r,
                    t[14] ^= e,
                    t[15] ^= r,
                    t[24] ^= e,
                    t[25] ^= r,
                    t[34] ^= e,
                    t[35] ^= r,
                    t[44] ^= e,
                    t[45] ^= r,
                    e = u ^ (c << 1 | d >>> 31),
                    r = l ^ (d << 1 | c >>> 31),
                    t[6] ^= e,
                    t[7] ^= r,
                    t[16] ^= e,
                    t[17] ^= r,
                    t[26] ^= e,
                    t[27] ^= r,
                    t[36] ^= e,
                    t[37] ^= r,
                    t[46] ^= e,
                    t[47] ^= r,
                    e = h ^ (i << 1 | o >>> 31),
                    r = f ^ (o << 1 | i >>> 31),
                    t[8] ^= e,
                    t[9] ^= r,
                    t[18] ^= e,
                    t[19] ^= r,
                    t[28] ^= e,
                    t[29] ^= r,
                    t[38] ^= e,
                    t[39] ^= r,
                    t[48] ^= e,
                    t[49] ^= r,
                    p = t[0],
                    g = t[1],
                    Q = t[11] << 4 | t[10] >>> 28,
                    J = t[10] << 4 | t[11] >>> 28,
                    I = t[20] << 3 | t[21] >>> 29,
                    S = t[21] << 3 | t[20] >>> 29,
                    ta = t[31] << 9 | t[30] >>> 23,
                    tu = t[30] << 9 | t[31] >>> 23,
                    Y = t[40] << 18 | t[41] >>> 14,
                    q = t[41] << 18 | t[40] >>> 14,
                    B = t[2] << 1 | t[3] >>> 31,
                    D = t[3] << 1 | t[2] >>> 31,
                    v = t[13] << 12 | t[12] >>> 20,
                    y = t[12] << 12 | t[13] >>> 20,
                    W = t[22] << 10 | t[23] >>> 22,
                    V = t[23] << 10 | t[22] >>> 22,
                    R = t[33] << 13 | t[32] >>> 19,
                    C = t[32] << 13 | t[33] >>> 19,
                    tl = t[42] << 2 | t[43] >>> 30,
                    th = t[43] << 2 | t[42] >>> 30,
                    te = t[5] << 30 | t[4] >>> 2,
                    tr = t[4] << 30 | t[5] >>> 2,
                    L = t[14] << 6 | t[15] >>> 26,
                    U = t[15] << 6 | t[14] >>> 26,
                    b = t[25] << 11 | t[24] >>> 21,
                    A = t[24] << 11 | t[25] >>> 21,
                    X = t[34] << 15 | t[35] >>> 17,
                    Z = t[35] << 15 | t[34] >>> 17,
                    O = t[45] << 29 | t[44] >>> 3,
                    T = t[44] << 29 | t[45] >>> 3,
                    k = t[6] << 28 | t[7] >>> 4,
                    N = t[7] << 28 | t[6] >>> 4,
                    tn = t[17] << 23 | t[16] >>> 9,
                    ti = t[16] << 23 | t[17] >>> 9,
                    F = t[26] << 25 | t[27] >>> 7,
                    z = t[27] << 25 | t[26] >>> 7,
                    w = t[36] << 21 | t[37] >>> 11,
                    E = t[37] << 21 | t[36] >>> 11,
                    $ = t[47] << 24 | t[46] >>> 8,
                    tt = t[46] << 24 | t[47] >>> 8,
                    H = t[8] << 27 | t[9] >>> 5,
                    K = t[9] << 27 | t[8] >>> 5,
                    x = t[18] << 20 | t[19] >>> 12,
                    P = t[19] << 20 | t[18] >>> 12,
                    to = t[29] << 7 | t[28] >>> 25,
                    ts = t[28] << 7 | t[29] >>> 25,
                    j = t[38] << 8 | t[39] >>> 24,
                    G = t[39] << 8 | t[38] >>> 24,
                    _ = t[48] << 14 | t[49] >>> 18,
                    M = t[49] << 14 | t[48] >>> 18,
                    t[0] = p ^ ~v & b,
                    t[1] = g ^ ~y & A,
                    t[10] = k ^ ~x & I,
                    t[11] = N ^ ~P & S,
                    t[20] = B ^ ~L & F,
                    t[21] = D ^ ~U & z,
                    t[30] = H ^ ~Q & W,
                    t[31] = K ^ ~J & V,
                    t[40] = te ^ ~tn & to,
                    t[41] = tr ^ ~ti & ts,
                    t[2] = v ^ ~b & w,
                    t[3] = y ^ ~A & E,
                    t[12] = x ^ ~I & R,
                    t[13] = P ^ ~S & C,
                    t[22] = L ^ ~F & j,
                    t[23] = U ^ ~z & G,
                    t[32] = Q ^ ~W & X,
                    t[33] = J ^ ~V & Z,
                    t[42] = tn ^ ~to & ta,
                    t[43] = ti ^ ~ts & tu,
                    t[4] = b ^ ~w & _,
                    t[5] = A ^ ~E & M,
                    t[14] = I ^ ~R & O,
                    t[15] = S ^ ~C & T,
                    t[24] = F ^ ~j & Y,
                    t[25] = z ^ ~G & q,
                    t[34] = W ^ ~X & $,
                    t[35] = V ^ ~Z & tt,
                    t[44] = to ^ ~ta & tl,
                    t[45] = ts ^ ~tu & th,
                    t[6] = w ^ ~_ & p,
                    t[7] = E ^ ~M & g,
                    t[16] = R ^ ~O & k,
                    t[17] = C ^ ~T & N,
                    t[26] = j ^ ~Y & B,
                    t[27] = G ^ ~q & D,
                    t[36] = X ^ ~$ & H,
                    t[37] = Z ^ ~tt & K,
                    t[46] = ta ^ ~tl & te,
                    t[47] = tu ^ ~th & tr,
                    t[8] = _ ^ ~p & v,
                    t[9] = M ^ ~g & y,
                    t[18] = O ^ ~k & x,
                    t[19] = T ^ ~N & P,
                    t[28] = Y ^ ~B & L,
                    t[29] = q ^ ~D & U,
                    t[38] = $ ^ ~H & Q,
                    t[39] = tt ^ ~K & J,
                    t[48] = tl ^ ~te & tn,
                    t[49] = th ^ ~tr & ti,
                    t[0] ^= m[n],
                    t[1] ^= m[n + 1]
            };
            if (l)
                t.exports = x;
            else {
                for (I = 0; I < P.length; ++I)
                    a[P[I]] = x[P[I]];
                h && void 0 !== (n = (function() {
                    return x
                }
                ).call(e, r, e, t)) && (t.exports = n)
            }
        }()
    },
    71974: function(t) {
        function e(t, e) {
            if (!t)
                throw Error(e || "Assertion failed")
        }
        t.exports = e,
        e.equal = function(t, e, r) {
            if (t != e)
                throw Error(r || "Assertion failed: " + t + " != " + e)
        }
    },
    66648: function(t, e, r) {
        "use strict";
        r.d(e, {
            default: function() {
                return i.a
            }
        });
        var n = r(55601)
          , i = r.n(n)
    },
    87138: function(t, e, r) {
        "use strict";
        r.d(e, {
            default: function() {
                return i.a
            }
        });
        var n = r(231)
          , i = r.n(n)
    },
    20357: function(t, e, r) {
        "use strict";
        var n, i;
        t.exports = (null == (n = r.g.process) ? void 0 : n.env) && "object" == typeof (null == (i = r.g.process) ? void 0 : i.env) ? r.g.process : r(88081)
    },
    844: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "addLocale", {
            enumerable: !0,
            get: function() {
                return n
            }
        }),
        r(18157);
        let n = function(t) {
            for (var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
                r[n - 1] = arguments[n];
            return t
        };
        ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
            value: !0
        }),
        Object.assign(e.default, e),
        t.exports = e.default)
    },
    25944: function(t, e, r) {
        "use strict";
        function n(t, e, r, n) {
            return !1
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "getDomainLocale", {
            enumerable: !0,
            get: function() {
                return n
            }
        }),
        r(18157),
        ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
            value: !0
        }),
        Object.assign(e.default, e),
        t.exports = e.default)
    },
    38173: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "Image", {
            enumerable: !0,
            get: function() {
                return b
            }
        });
        let n = r(99920)
          , i = r(41452)
          , o = r(57437)
          , s = i._(r(2265))
          , a = n._(r(54887))
          , u = n._(r(28321))
          , l = r(80497)
          , h = r(7103)
          , f = r(93938);
        r(72301);
        let c = r(60291)
          , d = n._(r(21241))
          , p = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1
        };
        function m(t, e, r, n, i, o, s) {
            let a = null == t ? void 0 : t.src;
            t && t["data-loaded-src"] !== a && (t["data-loaded-src"] = a,
            ("decode"in t ? t.decode() : Promise.resolve()).catch(()=>{}
            ).then(()=>{
                if (t.parentElement && t.isConnected) {
                    if ("empty" !== e && i(!0),
                    null == r ? void 0 : r.current) {
                        let e = new Event("load");
                        Object.defineProperty(e, "target", {
                            writable: !1,
                            value: t
                        });
                        let n = !1
                          , i = !1;
                        r.current({
                            ...e,
                            nativeEvent: e,
                            currentTarget: t,
                            target: t,
                            isDefaultPrevented: ()=>n,
                            isPropagationStopped: ()=>i,
                            persist: ()=>{}
                            ,
                            preventDefault: ()=>{
                                n = !0,
                                e.preventDefault()
                            }
                            ,
                            stopPropagation: ()=>{
                                i = !0,
                                e.stopPropagation()
                            }
                        })
                    }
                    (null == n ? void 0 : n.current) && n.current(t)
                }
            }
            ))
        }
        function g(t) {
            return s.use ? {
                fetchPriority: t
            } : {
                fetchpriority: t
            }
        }
        "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
        let v = (0,
        s.forwardRef)((t,e)=>{
            let {src: r, srcSet: n, sizes: i, height: a, width: u, decoding: l, className: h, style: f, fetchPriority: c, placeholder: d, loading: p, unoptimized: v, fill: y, onLoadRef: b, onLoadingCompleteRef: A, setBlurComplete: w, setShowAltText: E, sizesInput: _, onLoad: M, onError: k, ...N} = t;
            return (0,
            o.jsx)("img", {
                ...N,
                ...g(c),
                loading: p,
                width: u,
                height: a,
                decoding: l,
                "data-nimg": y ? "fill" : "1",
                className: h,
                style: f,
                sizes: i,
                srcSet: n,
                src: r,
                ref: (0,
                s.useCallback)(t=>{
                    e && ("function" == typeof e ? e(t) : "object" == typeof e && (e.current = t)),
                    t && (k && (t.src = t.src),
                    t.complete && m(t, d, b, A, w, v, _))
                }
                , [r, d, b, A, w, k, v, _, e]),
                onLoad: t=>{
                    m(t.currentTarget, d, b, A, w, v, _)
                }
                ,
                onError: t=>{
                    E(!0),
                    "empty" !== d && w(!0),
                    k && k(t)
                }
            })
        }
        );
        function y(t) {
            let {isAppRouter: e, imgAttributes: r} = t
              , n = {
                as: "image",
                imageSrcSet: r.srcSet,
                imageSizes: r.sizes,
                crossOrigin: r.crossOrigin,
                referrerPolicy: r.referrerPolicy,
                ...g(r.fetchPriority)
            };
            return e && a.default.preload ? (a.default.preload(r.src, n),
            null) : (0,
            o.jsx)(u.default, {
                children: (0,
                o.jsx)("link", {
                    rel: "preload",
                    href: r.srcSet ? void 0 : r.src,
                    ...n
                }, "__nimg-" + r.src + r.srcSet + r.sizes)
            })
        }
        let b = (0,
        s.forwardRef)((t,e)=>{
            let r = (0,
            s.useContext)(c.RouterContext)
              , n = (0,
            s.useContext)(f.ImageConfigContext)
              , i = (0,
            s.useMemo)(()=>{
                let t = p || n || h.imageConfigDefault
                  , e = [...t.deviceSizes, ...t.imageSizes].sort((t,e)=>t - e)
                  , r = t.deviceSizes.sort((t,e)=>t - e);
                return {
                    ...t,
                    allSizes: e,
                    deviceSizes: r
                }
            }
            , [n])
              , {onLoad: a, onLoadingComplete: u} = t
              , m = (0,
            s.useRef)(a);
            (0,
            s.useEffect)(()=>{
                m.current = a
            }
            , [a]);
            let g = (0,
            s.useRef)(u);
            (0,
            s.useEffect)(()=>{
                g.current = u
            }
            , [u]);
            let[b,A] = (0,
            s.useState)(!1)
              , [w,E] = (0,
            s.useState)(!1)
              , {props: _, meta: M} = (0,
            l.getImgProps)(t, {
                defaultLoader: d.default,
                imgConf: i,
                blurComplete: b,
                showAltText: w
            });
            return (0,
            o.jsxs)(o.Fragment, {
                children: [(0,
                o.jsx)(v, {
                    ..._,
                    unoptimized: M.unoptimized,
                    placeholder: M.placeholder,
                    fill: M.fill,
                    onLoadRef: m,
                    onLoadingCompleteRef: g,
                    setBlurComplete: A,
                    setShowAltText: E,
                    sizesInput: t.sizes,
                    ref: e
                }), M.priority ? (0,
                o.jsx)(y, {
                    isAppRouter: !r,
                    imgAttributes: _
                }) : null]
            })
        }
        );
        ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
            value: !0
        }),
        Object.assign(e.default, e),
        t.exports = e.default)
    },
    231: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "default", {
            enumerable: !0,
            get: function() {
                return A
            }
        });
        let n = r(99920)
          , i = r(57437)
          , o = n._(r(2265))
          , s = r(98016)
          , a = r(18029)
          , u = r(41142)
          , l = r(43461)
          , h = r(844)
          , f = r(60291)
          , c = r(44467)
          , d = r(53106)
          , p = r(25944)
          , m = r(4897)
          , g = r(51507)
          , v = new Set;
        function y(t, e, r, n, i, o) {
            if ("undefined" != typeof window && (o || (0,
            a.isLocalURL)(e))) {
                if (!n.bypassPrefetchedCheck) {
                    let i = e + "%" + r + "%" + (void 0 !== n.locale ? n.locale : "locale"in t ? t.locale : void 0);
                    if (v.has(i))
                        return;
                    v.add(i)
                }
                (async()=>o ? t.prefetch(e, i) : t.prefetch(e, r, n))().catch(t=>{}
                )
            }
        }
        function b(t) {
            return "string" == typeof t ? t : (0,
            u.formatUrl)(t)
        }
        let A = o.default.forwardRef(function(t, e) {
            let r, n;
            let {href: u, as: v, children: A, prefetch: w=null, passHref: E, replace: _, shallow: M, scroll: k, locale: N, onClick: x, onMouseEnter: P, onTouchStart: I, legacyBehavior: S=!1, ...R} = t;
            r = A,
            S && ("string" == typeof r || "number" == typeof r) && (r = (0,
            i.jsx)("a", {
                children: r
            }));
            let C = o.default.useContext(f.RouterContext)
              , O = o.default.useContext(c.AppRouterContext)
              , T = null != C ? C : O
              , B = !C
              , D = !1 !== w
              , L = null === w ? g.PrefetchKind.AUTO : g.PrefetchKind.FULL
              , {href: U, as: F} = o.default.useMemo(()=>{
                if (!C) {
                    let t = b(u);
                    return {
                        href: t,
                        as: v ? b(v) : t
                    }
                }
                let[t,e] = (0,
                s.resolveHref)(C, u, !0);
                return {
                    href: t,
                    as: v ? (0,
                    s.resolveHref)(C, v) : e || t
                }
            }
            , [C, u, v])
              , z = o.default.useRef(U)
              , j = o.default.useRef(F);
            S && (n = o.default.Children.only(r));
            let G = S ? n && "object" == typeof n && n.ref : e
              , [Y,q,H] = (0,
            d.useIntersection)({
                rootMargin: "200px"
            })
              , K = o.default.useCallback(t=>{
                (j.current !== F || z.current !== U) && (H(),
                j.current = F,
                z.current = U),
                Y(t),
                G && ("function" == typeof G ? G(t) : "object" == typeof G && (G.current = t))
            }
            , [F, G, U, H, Y]);
            o.default.useEffect(()=>{
                T && q && D && y(T, U, F, {
                    locale: N
                }, {
                    kind: L
                }, B)
            }
            , [F, U, q, N, D, null == C ? void 0 : C.locale, T, B, L]);
            let Q = {
                ref: K,
                onClick(t) {
                    S || "function" != typeof x || x(t),
                    S && n.props && "function" == typeof n.props.onClick && n.props.onClick(t),
                    T && !t.defaultPrevented && function(t, e, r, n, i, s, u, l, h) {
                        let {nodeName: f} = t.currentTarget;
                        if ("A" === f.toUpperCase() && (function(t) {
                            let e = t.currentTarget.getAttribute("target");
                            return e && "_self" !== e || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.nativeEvent && 2 === t.nativeEvent.which
                        }(t) || !h && !(0,
                        a.isLocalURL)(r)))
                            return;
                        t.preventDefault();
                        let c = ()=>{
                            let t = null == u || u;
                            "beforePopState"in e ? e[i ? "replace" : "push"](r, n, {
                                shallow: s,
                                locale: l,
                                scroll: t
                            }) : e[i ? "replace" : "push"](n || r, {
                                scroll: t
                            })
                        }
                        ;
                        h ? o.default.startTransition(c) : c()
                    }(t, T, U, F, _, M, k, N, B)
                },
                onMouseEnter(t) {
                    S || "function" != typeof P || P(t),
                    S && n.props && "function" == typeof n.props.onMouseEnter && n.props.onMouseEnter(t),
                    T && (D || !B) && y(T, U, F, {
                        locale: N,
                        priority: !0,
                        bypassPrefetchedCheck: !0
                    }, {
                        kind: L
                    }, B)
                },
                onTouchStart: function(t) {
                    S || "function" != typeof I || I(t),
                    S && n.props && "function" == typeof n.props.onTouchStart && n.props.onTouchStart(t),
                    T && (D || !B) && y(T, U, F, {
                        locale: N,
                        priority: !0,
                        bypassPrefetchedCheck: !0
                    }, {
                        kind: L
                    }, B)
                }
            };
            if ((0,
            l.isAbsoluteUrl)(F))
                Q.href = F;
            else if (!S || E || "a" === n.type && !("href"in n.props)) {
                let t = void 0 !== N ? N : null == C ? void 0 : C.locale
                  , e = (null == C ? void 0 : C.isLocaleDomain) && (0,
                p.getDomainLocale)(F, t, null == C ? void 0 : C.locales, null == C ? void 0 : C.domainLocales);
                Q.href = e || (0,
                m.addBasePath)((0,
                h.addLocale)(F, t, null == C ? void 0 : C.defaultLocale))
            }
            return S ? o.default.cloneElement(n, Q) : (0,
            i.jsx)("a", {
                ...R,
                ...Q,
                children: r
            })
        });
        ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
            value: !0
        }),
        Object.assign(e.default, e),
        t.exports = e.default)
    },
    49189: function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        function(t, e) {
            for (var r in e)
                Object.defineProperty(t, r, {
                    enumerable: !0,
                    get: e[r]
                })
        }(e, {
            cancelIdleCallback: function() {
                return n
            },
            requestIdleCallback: function() {
                return r
            }
        });
        let r = "undefined" != typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(t) {
            let e = Date.now();
            return self.setTimeout(function() {
                t({
                    didTimeout: !1,
                    timeRemaining: function() {
                        return Math.max(0, 50 - (Date.now() - e))
                    }
                })
            }, 1)
        }
          , n = "undefined" != typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(t) {
            return clearTimeout(t)
        }
        ;
        ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
            value: !0
        }),
        Object.assign(e.default, e),
        t.exports = e.default)
    },
    98016: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "resolveHref", {
            enumerable: !0,
            get: function() {
                return f
            }
        });
        let n = r(18323)
          , i = r(41142)
          , o = r(45519)
          , s = r(43461)
          , a = r(18157)
          , u = r(18029)
          , l = r(59195)
          , h = r(80020);
        function f(t, e, r) {
            let f;
            let c = "string" == typeof e ? e : (0,
            i.formatWithValidation)(e)
              , d = c.match(/^[a-zA-Z]{1,}:\/\//)
              , p = d ? c.slice(d[0].length) : c;
            if ((p.split("?", 1)[0] || "").match(/(\/\/|\\)/)) {
                console.error("Invalid href '" + c + "' passed to next/router in page: '" + t.pathname + "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");
                let e = (0,
                s.normalizeRepeatedSlashes)(p);
                c = (d ? d[0] : "") + e
            }
            if (!(0,
            u.isLocalURL)(c))
                return r ? [c] : c;
            try {
                f = new URL(c.startsWith("#") ? t.asPath : t.pathname,"http://n")
            } catch (t) {
                f = new URL("/","http://n")
            }
            try {
                let t = new URL(c,f);
                t.pathname = (0,
                a.normalizePathTrailingSlash)(t.pathname);
                let e = "";
                if ((0,
                l.isDynamicRoute)(t.pathname) && t.searchParams && r) {
                    let r = (0,
                    n.searchParamsToUrlQuery)(t.searchParams)
                      , {result: s, params: a} = (0,
                    h.interpolateAs)(t.pathname, t.pathname, r);
                    s && (e = (0,
                    i.formatWithValidation)({
                        pathname: s,
                        hash: t.hash,
                        query: (0,
                        o.omit)(r, a)
                    }))
                }
                let s = t.origin === f.origin ? t.href.slice(t.origin.length) : t.href;
                return r ? [s, e || s] : s
            } catch (t) {
                return r ? [c] : c
            }
        }
        ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
            value: !0
        }),
        Object.assign(e.default, e),
        t.exports = e.default)
    },
    53106: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "useIntersection", {
            enumerable: !0,
            get: function() {
                return u
            }
        });
        let n = r(2265)
          , i = r(49189)
          , o = "function" == typeof IntersectionObserver
          , s = new Map
          , a = [];
        function u(t) {
            let {rootRef: e, rootMargin: r, disabled: u} = t
              , l = u || !o
              , [h,f] = (0,
            n.useState)(!1)
              , c = (0,
            n.useRef)(null)
              , d = (0,
            n.useCallback)(t=>{
                c.current = t
            }
            , []);
            return (0,
            n.useEffect)(()=>{
                if (o) {
                    if (l || h)
                        return;
                    let t = c.current;
                    if (t && t.tagName)
                        return function(t, e, r) {
                            let {id: n, observer: i, elements: o} = function(t) {
                                let e;
                                let r = {
                                    root: t.root || null,
                                    margin: t.rootMargin || ""
                                }
                                  , n = a.find(t=>t.root === r.root && t.margin === r.margin);
                                if (n && (e = s.get(n)))
                                    return e;
                                let i = new Map;
                                return e = {
                                    id: r,
                                    observer: new IntersectionObserver(t=>{
                                        t.forEach(t=>{
                                            let e = i.get(t.target)
                                              , r = t.isIntersecting || t.intersectionRatio > 0;
                                            e && r && e(r)
                                        }
                                        )
                                    }
                                    ,t),
                                    elements: i
                                },
                                a.push(r),
                                s.set(r, e),
                                e
                            }(r);
                            return o.set(t, e),
                            i.observe(t),
                            function() {
                                if (o.delete(t),
                                i.unobserve(t),
                                0 === o.size) {
                                    i.disconnect(),
                                    s.delete(n);
                                    let t = a.findIndex(t=>t.root === n.root && t.margin === n.margin);
                                    t > -1 && a.splice(t, 1)
                                }
                            }
                        }(t, t=>t && f(t), {
                            root: null == e ? void 0 : e.current,
                            rootMargin: r
                        })
                } else if (!h) {
                    let t = (0,
                    i.requestIdleCallback)(()=>f(!0));
                    return ()=>(0,
                    i.cancelIdleCallback)(t)
                }
            }
            , [l, r, e, h, c.current]),
            [d, h, (0,
            n.useCallback)(()=>{
                f(!1)
            }
            , [])]
        }
        ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
            value: !0
        }),
        Object.assign(e.default, e),
        t.exports = e.default)
    },
    88081: function(t) {
        !function() {
            var e = {
                229: function(t) {
                    var e, r, n, i = t.exports = {};
                    function o() {
                        throw Error("setTimeout has not been defined")
                    }
                    function s() {
                        throw Error("clearTimeout has not been defined")
                    }
                    function a(t) {
                        if (e === setTimeout)
                            return setTimeout(t, 0);
                        if ((e === o || !e) && setTimeout)
                            return e = setTimeout,
                            setTimeout(t, 0);
                        try {
                            return e(t, 0)
                        } catch (r) {
                            try {
                                return e.call(null, t, 0)
                            } catch (r) {
                                return e.call(this, t, 0)
                            }
                        }
                    }
                    !function() {
                        try {
                            e = "function" == typeof setTimeout ? setTimeout : o
                        } catch (t) {
                            e = o
                        }
                        try {
                            r = "function" == typeof clearTimeout ? clearTimeout : s
                        } catch (t) {
                            r = s
                        }
                    }();
                    var u = []
                      , l = !1
                      , h = -1;
                    function f() {
                        l && n && (l = !1,
                        n.length ? u = n.concat(u) : h = -1,
                        u.length && c())
                    }
                    function c() {
                        if (!l) {
                            var t = a(f);
                            l = !0;
                            for (var e = u.length; e; ) {
                                for (n = u,
                                u = []; ++h < e; )
                                    n && n[h].run();
                                h = -1,
                                e = u.length
                            }
                            n = null,
                            l = !1,
                            function(t) {
                                if (r === clearTimeout)
                                    return clearTimeout(t);
                                if ((r === s || !r) && clearTimeout)
                                    return r = clearTimeout,
                                    clearTimeout(t);
                                try {
                                    r(t)
                                } catch (e) {
                                    try {
                                        return r.call(null, t)
                                    } catch (e) {
                                        return r.call(this, t)
                                    }
                                }
                            }(t)
                        }
                    }
                    function d(t, e) {
                        this.fun = t,
                        this.array = e
                    }
                    function p() {}
                    i.nextTick = function(t) {
                        var e = Array(arguments.length - 1);
                        if (arguments.length > 1)
                            for (var r = 1; r < arguments.length; r++)
                                e[r - 1] = arguments[r];
                        u.push(new d(t,e)),
                        1 !== u.length || l || a(c)
                    }
                    ,
                    d.prototype.run = function() {
                        this.fun.apply(null, this.array)
                    }
                    ,
                    i.title = "browser",
                    i.browser = !0,
                    i.env = {},
                    i.argv = [],
                    i.version = "",
                    i.versions = {},
                    i.on = p,
                    i.addListener = p,
                    i.once = p,
                    i.off = p,
                    i.removeListener = p,
                    i.removeAllListeners = p,
                    i.emit = p,
                    i.prependListener = p,
                    i.prependOnceListener = p,
                    i.listeners = function(t) {
                        return []
                    }
                    ,
                    i.binding = function(t) {
                        throw Error("process.binding is not supported")
                    }
                    ,
                    i.cwd = function() {
                        return "/"
                    }
                    ,
                    i.chdir = function(t) {
                        throw Error("process.chdir is not supported")
                    }
                    ,
                    i.umask = function() {
                        return 0
                    }
                }
            }
              , r = {};
            function n(t) {
                var i = r[t];
                if (void 0 !== i)
                    return i.exports;
                var o = r[t] = {
                    exports: {}
                }
                  , s = !0;
                try {
                    e[t](o, o.exports, n),
                    s = !1
                } finally {
                    s && delete r[t]
                }
                return o.exports
            }
            n.ab = "//";
            var i = n(229);
            t.exports = i
        }()
    },
    82901: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "AmpStateContext", {
            enumerable: !0,
            get: function() {
                return n
            }
        });
        let n = r(99920)._(r(2265)).default.createContext({})
    },
    40687: function(t, e) {
        "use strict";
        function r(t) {
            let {ampFirst: e=!1, hybrid: r=!1, hasQuery: n=!1} = void 0 === t ? {} : t;
            return e || r && n
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "isInAmpMode", {
            enumerable: !0,
            get: function() {
                return r
            }
        })
    },
    81943: function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "escapeStringRegexp", {
            enumerable: !0,
            get: function() {
                return i
            }
        });
        let r = /[|\\{}()[\]^$+*?.-]/
          , n = /[|\\{}()[\]^$+*?.-]/g;
        function i(t) {
            return r.test(t) ? t.replace(n, "\\$&") : t
        }
    },
    80497: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "getImgProps", {
            enumerable: !0,
            get: function() {
                return a
            }
        }),
        r(72301);
        let n = r(51564)
          , i = r(7103);
        function o(t) {
            return void 0 !== t.default
        }
        function s(t) {
            return void 0 === t ? t : "number" == typeof t ? Number.isFinite(t) ? t : NaN : "string" == typeof t && /^[0-9]+$/.test(t) ? parseInt(t, 10) : NaN
        }
        function a(t, e) {
            var r;
            let a, u, l, {src: h, sizes: f, unoptimized: c=!1, priority: d=!1, loading: p, className: m, quality: g, width: v, height: y, fill: b=!1, style: A, overrideSrc: w, onLoad: E, onLoadingComplete: _, placeholder: M="empty", blurDataURL: k, fetchPriority: N, layout: x, objectFit: P, objectPosition: I, lazyBoundary: S, lazyRoot: R, ...C} = t, {imgConf: O, showAltText: T, blurComplete: B, defaultLoader: D} = e, L = O || i.imageConfigDefault;
            if ("allSizes"in L)
                a = L;
            else {
                let t = [...L.deviceSizes, ...L.imageSizes].sort((t,e)=>t - e)
                  , e = L.deviceSizes.sort((t,e)=>t - e);
                a = {
                    ...L,
                    allSizes: t,
                    deviceSizes: e
                }
            }
            if (void 0 === D)
                throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");
            let U = C.loader || D;
            delete C.loader,
            delete C.srcSet;
            let F = "__next_img_default"in U;
            if (F) {
                if ("custom" === a.loader)
                    throw Error('Image with src "' + h + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')
            } else {
                let t = U;
                U = e=>{
                    let {config: r, ...n} = e;
                    return t(n)
                }
            }
            if (x) {
                "fill" === x && (b = !0);
                let t = {
                    intrinsic: {
                        maxWidth: "100%",
                        height: "auto"
                    },
                    responsive: {
                        width: "100%",
                        height: "auto"
                    }
                }[x];
                t && (A = {
                    ...A,
                    ...t
                });
                let e = {
                    responsive: "100vw",
                    fill: "100vw"
                }[x];
                e && !f && (f = e)
            }
            let z = ""
              , j = s(v)
              , G = s(y);
            if ("object" == typeof (r = h) && (o(r) || void 0 !== r.src)) {
                let t = o(h) ? h.default : h;
                if (!t.src)
                    throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(t));
                if (!t.height || !t.width)
                    throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(t));
                if (u = t.blurWidth,
                l = t.blurHeight,
                k = k || t.blurDataURL,
                z = t.src,
                !b) {
                    if (j || G) {
                        if (j && !G) {
                            let e = j / t.width;
                            G = Math.round(t.height * e)
                        } else if (!j && G) {
                            let e = G / t.height;
                            j = Math.round(t.width * e)
                        }
                    } else
                        j = t.width,
                        G = t.height
                }
            }
            let Y = !d && ("lazy" === p || void 0 === p);
            (!(h = "string" == typeof h ? h : z) || h.startsWith("data:") || h.startsWith("blob:")) && (c = !0,
            Y = !1),
            a.unoptimized && (c = !0),
            F && h.endsWith(".svg") && !a.dangerouslyAllowSVG && (c = !0),
            d && (N = "high");
            let q = s(g)
              , H = Object.assign(b ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: P,
                objectPosition: I
            } : {}, T ? {} : {
                color: "transparent"
            }, A)
              , K = B || "empty" === M ? null : "blur" === M ? 'url("data:image/svg+xml;charset=utf-8,' + (0,
            n.getImageBlurSvg)({
                widthInt: j,
                heightInt: G,
                blurWidth: u,
                blurHeight: l,
                blurDataURL: k || "",
                objectFit: H.objectFit
            }) + '")' : 'url("' + M + '")'
              , Q = K ? {
                backgroundSize: H.objectFit || "cover",
                backgroundPosition: H.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: K
            } : {}
              , J = function(t) {
                let {config: e, src: r, unoptimized: n, width: i, quality: o, sizes: s, loader: a} = t;
                if (n)
                    return {
                        src: r,
                        srcSet: void 0,
                        sizes: void 0
                    };
                let {widths: u, kind: l} = function(t, e, r) {
                    let {deviceSizes: n, allSizes: i} = t;
                    if (r) {
                        let t = /(^|\s)(1?\d?\d)vw/g
                          , e = [];
                        for (let n; n = t.exec(r); n)
                            e.push(parseInt(n[2]));
                        if (e.length) {
                            let t = .01 * Math.min(...e);
                            return {
                                widths: i.filter(e=>e >= n[0] * t),
                                kind: "w"
                            }
                        }
                        return {
                            widths: i,
                            kind: "w"
                        }
                    }
                    return "number" != typeof e ? {
                        widths: n,
                        kind: "w"
                    } : {
                        widths: [...new Set([e, 2 * e].map(t=>i.find(e=>e >= t) || i[i.length - 1]))],
                        kind: "x"
                    }
                }(e, i, s)
                  , h = u.length - 1;
                return {
                    sizes: s || "w" !== l ? s : "100vw",
                    srcSet: u.map((t,n)=>a({
                        config: e,
                        src: r,
                        quality: o,
                        width: t
                    }) + " " + ("w" === l ? t : n + 1) + l).join(", "),
                    src: a({
                        config: e,
                        src: r,
                        quality: o,
                        width: u[h]
                    })
                }
            }({
                config: a,
                src: h,
                unoptimized: c,
                width: j,
                quality: q,
                sizes: f,
                loader: U
            });
            return {
                props: {
                    ...C,
                    loading: Y ? "lazy" : p,
                    fetchPriority: N,
                    width: j,
                    height: G,
                    decoding: "async",
                    className: m,
                    style: {
                        ...H,
                        ...Q
                    },
                    sizes: J.sizes,
                    srcSet: J.srcSet,
                    src: w || J.src
                },
                meta: {
                    unoptimized: c,
                    priority: d,
                    placeholder: M,
                    fill: b
                }
            }
        }
    },
    28321: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        function(t, e) {
            for (var r in e)
                Object.defineProperty(t, r, {
                    enumerable: !0,
                    get: e[r]
                })
        }(e, {
            default: function() {
                return m
            },
            defaultHead: function() {
                return f
            }
        });
        let n = r(99920)
          , i = r(41452)
          , o = r(57437)
          , s = i._(r(2265))
          , a = n._(r(65960))
          , u = r(82901)
          , l = r(36590)
          , h = r(40687);
        function f(t) {
            void 0 === t && (t = !1);
            let e = [(0,
            o.jsx)("meta", {
                charSet: "utf-8"
            })];
            return t || e.push((0,
            o.jsx)("meta", {
                name: "viewport",
                content: "width=device-width"
            })),
            e
        }
        function c(t, e) {
            return "string" == typeof e || "number" == typeof e ? t : e.type === s.default.Fragment ? t.concat(s.default.Children.toArray(e.props.children).reduce((t,e)=>"string" == typeof e || "number" == typeof e ? t : t.concat(e), [])) : t.concat(e)
        }
        r(72301);
        let d = ["name", "httpEquiv", "charSet", "itemProp"];
        function p(t, e) {
            let {inAmpMode: r} = e;
            return t.reduce(c, []).reverse().concat(f(r).reverse()).filter(function() {
                let t = new Set
                  , e = new Set
                  , r = new Set
                  , n = {};
                return i=>{
                    let o = !0
                      , s = !1;
                    if (i.key && "number" != typeof i.key && i.key.indexOf("$") > 0) {
                        s = !0;
                        let e = i.key.slice(i.key.indexOf("$") + 1);
                        t.has(e) ? o = !1 : t.add(e)
                    }
                    switch (i.type) {
                    case "title":
                    case "base":
                        e.has(i.type) ? o = !1 : e.add(i.type);
                        break;
                    case "meta":
                        for (let t = 0, e = d.length; t < e; t++) {
                            let e = d[t];
                            if (i.props.hasOwnProperty(e)) {
                                if ("charSet" === e)
                                    r.has(e) ? o = !1 : r.add(e);
                                else {
                                    let t = i.props[e]
                                      , r = n[e] || new Set;
                                    ("name" !== e || !s) && r.has(t) ? o = !1 : (r.add(t),
                                    n[e] = r)
                                }
                            }
                        }
                    }
                    return o
                }
            }()).reverse().map((t,e)=>{
                let n = t.key || e;
                if (!r && "link" === t.type && t.props.href && ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some(e=>t.props.href.startsWith(e))) {
                    let e = {
                        ...t.props || {}
                    };
                    return e["data-href"] = e.href,
                    e.href = void 0,
                    e["data-optimized-fonts"] = !0,
                    s.default.cloneElement(t, e)
                }
                return s.default.cloneElement(t, {
                    key: n
                })
            }
            )
        }
        let m = function(t) {
            let {children: e} = t
              , r = (0,
            s.useContext)(u.AmpStateContext)
              , n = (0,
            s.useContext)(l.HeadManagerContext);
            return (0,
            o.jsx)(a.default, {
                reduceComponentsToState: p,
                headManager: n,
                inAmpMode: (0,
                h.isInAmpMode)(r),
                children: e
            })
        };
        ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
            value: !0
        }),
        Object.assign(e.default, e),
        t.exports = e.default)
    },
    51564: function(t, e) {
        "use strict";
        function r(t) {
            let {widthInt: e, heightInt: r, blurWidth: n, blurHeight: i, blurDataURL: o, objectFit: s} = t
              , a = n ? 40 * n : e
              , u = i ? 40 * i : r
              , l = a && u ? "viewBox='0 0 " + a + " " + u + "'" : "";
            return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + l + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + (l ? "none" : "contain" === s ? "xMidYMid" : "cover" === s ? "xMidYMid slice" : "none") + "' style='filter: url(%23b);' href='" + o + "'/%3E%3C/svg%3E"
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "getImageBlurSvg", {
            enumerable: !0,
            get: function() {
                return r
            }
        })
    },
    93938: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "ImageConfigContext", {
            enumerable: !0,
            get: function() {
                return o
            }
        });
        let n = r(99920)._(r(2265))
          , i = r(7103)
          , o = n.default.createContext(i.imageConfigDefault)
    },
    7103: function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        function(t, e) {
            for (var r in e)
                Object.defineProperty(t, r, {
                    enumerable: !0,
                    get: e[r]
                })
        }(e, {
            VALID_LOADERS: function() {
                return r
            },
            imageConfigDefault: function() {
                return n
            }
        });
        let r = ["default", "imgix", "cloudinary", "akamai", "custom"]
          , n = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            loaderFile: "",
            domains: [],
            disableStaticImages: !1,
            minimumCacheTTL: 60,
            formats: ["image/webp"],
            dangerouslyAllowSVG: !1,
            contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
            contentDispositionType: "inline",
            remotePatterns: [],
            unoptimized: !1
        }
    },
    55601: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        function(t, e) {
            for (var r in e)
                Object.defineProperty(t, r, {
                    enumerable: !0,
                    get: e[r]
                })
        }(e, {
            default: function() {
                return u
            },
            getImageProps: function() {
                return a
            }
        });
        let n = r(99920)
          , i = r(80497)
          , o = r(38173)
          , s = n._(r(21241));
        function a(t) {
            let {props: e} = (0,
            i.getImgProps)(t, {
                defaultLoader: s.default,
                imgConf: {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    dangerouslyAllowSVG: !1,
                    unoptimized: !1
                }
            });
            for (let[t,r] of Object.entries(e))
                void 0 === r && delete e[t];
            return {
                props: e
            }
        }
        let u = o.Image
    },
    21241: function(t, e) {
        "use strict";
        function r(t) {
            let {config: e, src: r, width: n, quality: i} = t;
            return e.path + "?url=" + encodeURIComponent(r) + "&w=" + n + "&q=" + (i || 75)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "default", {
            enumerable: !0,
            get: function() {
                return n
            }
        }),
        r.__next_img_default = !0;
        let n = r
    },
    60291: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "RouterContext", {
            enumerable: !0,
            get: function() {
                return n
            }
        });
        let n = r(99920)._(r(2265)).default.createContext(null)
    },
    41142: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        function(t, e) {
            for (var r in e)
                Object.defineProperty(t, r, {
                    enumerable: !0,
                    get: e[r]
                })
        }(e, {
            formatUrl: function() {
                return o
            },
            formatWithValidation: function() {
                return a
            },
            urlObjectKeys: function() {
                return s
            }
        });
        let n = r(41452)._(r(18323))
          , i = /https?|ftp|gopher|file/;
        function o(t) {
            let {auth: e, hostname: r} = t
              , o = t.protocol || ""
              , s = t.pathname || ""
              , a = t.hash || ""
              , u = t.query || ""
              , l = !1;
            e = e ? encodeURIComponent(e).replace(/%3A/i, ":") + "@" : "",
            t.host ? l = e + t.host : r && (l = e + (~r.indexOf(":") ? "[" + r + "]" : r),
            t.port && (l += ":" + t.port)),
            u && "object" == typeof u && (u = String(n.urlQueryToSearchParams(u)));
            let h = t.search || u && "?" + u || "";
            return o && !o.endsWith(":") && (o += ":"),
            t.slashes || (!o || i.test(o)) && !1 !== l ? (l = "//" + (l || ""),
            s && "/" !== s[0] && (s = "/" + s)) : l || (l = ""),
            a && "#" !== a[0] && (a = "#" + a),
            h && "?" !== h[0] && (h = "?" + h),
            "" + o + l + (s = s.replace(/[?#]/g, encodeURIComponent)) + (h = h.replace("#", "%23")) + a
        }
        let s = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];
        function a(t) {
            return o(t)
        }
    },
    59195: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        function(t, e) {
            for (var r in e)
                Object.defineProperty(t, r, {
                    enumerable: !0,
                    get: e[r]
                })
        }(e, {
            getSortedRoutes: function() {
                return n.getSortedRoutes
            },
            isDynamicRoute: function() {
                return i.isDynamicRoute
            }
        });
        let n = r(49089)
          , i = r(28083)
    },
    80020: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "interpolateAs", {
            enumerable: !0,
            get: function() {
                return o
            }
        });
        let n = r(41533)
          , i = r(63169);
        function o(t, e, r) {
            let o = ""
              , s = (0,
            i.getRouteRegex)(t)
              , a = s.groups
              , u = (e !== t ? (0,
            n.getRouteMatcher)(s)(e) : "") || r;
            o = t;
            let l = Object.keys(a);
            return l.every(t=>{
                let e = u[t] || ""
                  , {repeat: r, optional: n} = a[t]
                  , i = "[" + (r ? "..." : "") + t + "]";
                return n && (i = (e ? "" : "/") + "[" + i + "]"),
                r && !Array.isArray(e) && (e = [e]),
                (n || t in u) && (o = o.replace(i, r ? e.map(t=>encodeURIComponent(t)).join("/") : encodeURIComponent(e)) || "/")
            }
            ) || (o = ""),
            {
                params: l,
                result: o
            }
        }
    },
    28083: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "isDynamicRoute", {
            enumerable: !0,
            get: function() {
                return o
            }
        });
        let n = r(82269)
          , i = /\/\[[^/]+?\](?=\/|$)/;
        function o(t) {
            return (0,
            n.isInterceptionRouteAppPath)(t) && (t = (0,
            n.extractInterceptionRouteInformation)(t).interceptedRoute),
            i.test(t)
        }
    },
    18029: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "isLocalURL", {
            enumerable: !0,
            get: function() {
                return o
            }
        });
        let n = r(43461)
          , i = r(49404);
        function o(t) {
            if (!(0,
            n.isAbsoluteUrl)(t))
                return !0;
            try {
                let e = (0,
                n.getLocationOrigin)()
                  , r = new URL(t,e);
                return r.origin === e && (0,
                i.hasBasePath)(r.pathname)
            } catch (t) {
                return !1
            }
        }
    },
    45519: function(t, e) {
        "use strict";
        function r(t, e) {
            let r = {};
            return Object.keys(t).forEach(n=>{
                e.includes(n) || (r[n] = t[n])
            }
            ),
            r
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "omit", {
            enumerable: !0,
            get: function() {
                return r
            }
        })
    },
    18323: function(t, e) {
        "use strict";
        function r(t) {
            let e = {};
            return t.forEach((t,r)=>{
                void 0 === e[r] ? e[r] = t : Array.isArray(e[r]) ? e[r].push(t) : e[r] = [e[r], t]
            }
            ),
            e
        }
        function n(t) {
            return "string" != typeof t && ("number" != typeof t || isNaN(t)) && "boolean" != typeof t ? "" : String(t)
        }
        function i(t) {
            let e = new URLSearchParams;
            return Object.entries(t).forEach(t=>{
                let[r,i] = t;
                Array.isArray(i) ? i.forEach(t=>e.append(r, n(t))) : e.set(r, n(i))
            }
            ),
            e
        }
        function o(t) {
            for (var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
                r[n - 1] = arguments[n];
            return r.forEach(e=>{
                Array.from(e.keys()).forEach(e=>t.delete(e)),
                e.forEach((e,r)=>t.append(r, e))
            }
            ),
            t
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        function(t, e) {
            for (var r in e)
                Object.defineProperty(t, r, {
                    enumerable: !0,
                    get: e[r]
                })
        }(e, {
            assign: function() {
                return o
            },
            searchParamsToUrlQuery: function() {
                return r
            },
            urlQueryToSearchParams: function() {
                return i
            }
        })
    },
    41533: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "getRouteMatcher", {
            enumerable: !0,
            get: function() {
                return i
            }
        });
        let n = r(43461);
        function i(t) {
            let {re: e, groups: r} = t;
            return t=>{
                let i = e.exec(t);
                if (!i)
                    return !1;
                let o = t=>{
                    try {
                        return decodeURIComponent(t)
                    } catch (t) {
                        throw new n.DecodeError("failed to decode param")
                    }
                }
                  , s = {};
                return Object.keys(r).forEach(t=>{
                    let e = r[t]
                      , n = i[e.pos];
                    void 0 !== n && (s[t] = ~n.indexOf("/") ? n.split("/").map(t=>o(t)) : e.repeat ? [o(n)] : o(n))
                }
                ),
                s
            }
        }
    },
    63169: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        function(t, e) {
            for (var r in e)
                Object.defineProperty(t, r, {
                    enumerable: !0,
                    get: e[r]
                })
        }(e, {
            getNamedMiddlewareRegex: function() {
                return c
            },
            getNamedRouteRegex: function() {
                return f
            },
            getRouteRegex: function() {
                return u
            }
        });
        let n = r(82269)
          , i = r(81943)
          , o = r(67741);
        function s(t) {
            let e = t.startsWith("[") && t.endsWith("]");
            e && (t = t.slice(1, -1));
            let r = t.startsWith("...");
            return r && (t = t.slice(3)),
            {
                key: t,
                repeat: r,
                optional: e
            }
        }
        function a(t) {
            let e = (0,
            o.removeTrailingSlash)(t).slice(1).split("/")
              , r = {}
              , a = 1;
            return {
                parameterizedRoute: e.map(t=>{
                    let e = n.INTERCEPTION_ROUTE_MARKERS.find(e=>t.startsWith(e))
                      , o = t.match(/\[((?:\[.*\])|.+)\]/);
                    if (e && o) {
                        let {key: t, optional: n, repeat: u} = s(o[1]);
                        return r[t] = {
                            pos: a++,
                            repeat: u,
                            optional: n
                        },
                        "/" + (0,
                        i.escapeStringRegexp)(e) + "([^/]+?)"
                    }
                    if (!o)
                        return "/" + (0,
                        i.escapeStringRegexp)(t);
                    {
                        let {key: t, repeat: e, optional: n} = s(o[1]);
                        return r[t] = {
                            pos: a++,
                            repeat: e,
                            optional: n
                        },
                        e ? n ? "(?:/(.+?))?" : "/(.+?)" : "/([^/]+?)"
                    }
                }
                ).join(""),
                groups: r
            }
        }
        function u(t) {
            let {parameterizedRoute: e, groups: r} = a(t);
            return {
                re: RegExp("^" + e + "(?:/)?$"),
                groups: r
            }
        }
        function l(t) {
            let {interceptionMarker: e, getSafeRouteKey: r, segment: n, routeKeys: o, keyPrefix: a} = t
              , {key: u, optional: l, repeat: h} = s(n)
              , f = u.replace(/\W/g, "");
            a && (f = "" + a + f);
            let c = !1;
            (0 === f.length || f.length > 30) && (c = !0),
            isNaN(parseInt(f.slice(0, 1))) || (c = !0),
            c && (f = r()),
            a ? o[f] = "" + a + u : o[f] = u;
            let d = e ? (0,
            i.escapeStringRegexp)(e) : "";
            return h ? l ? "(?:/" + d + "(?<" + f + ">.+?))?" : "/" + d + "(?<" + f + ">.+?)" : "/" + d + "(?<" + f + ">[^/]+?)"
        }
        function h(t, e) {
            let r;
            let s = (0,
            o.removeTrailingSlash)(t).slice(1).split("/")
              , a = (r = 0,
            ()=>{
                let t = ""
                  , e = ++r;
                for (; e > 0; )
                    t += String.fromCharCode(97 + (e - 1) % 26),
                    e = Math.floor((e - 1) / 26);
                return t
            }
            )
              , u = {};
            return {
                namedParameterizedRoute: s.map(t=>{
                    let r = n.INTERCEPTION_ROUTE_MARKERS.some(e=>t.startsWith(e))
                      , o = t.match(/\[((?:\[.*\])|.+)\]/);
                    if (r && o) {
                        let[r] = t.split(o[0]);
                        return l({
                            getSafeRouteKey: a,
                            interceptionMarker: r,
                            segment: o[1],
                            routeKeys: u,
                            keyPrefix: e ? "nxtI" : void 0
                        })
                    }
                    return o ? l({
                        getSafeRouteKey: a,
                        segment: o[1],
                        routeKeys: u,
                        keyPrefix: e ? "nxtP" : void 0
                    }) : "/" + (0,
                    i.escapeStringRegexp)(t)
                }
                ).join(""),
                routeKeys: u
            }
        }
        function f(t, e) {
            let r = h(t, e);
            return {
                ...u(t),
                namedRegex: "^" + r.namedParameterizedRoute + "(?:/)?$",
                routeKeys: r.routeKeys
            }
        }
        function c(t, e) {
            let {parameterizedRoute: r} = a(t)
              , {catchAll: n=!0} = e;
            if ("/" === r)
                return {
                    namedRegex: "^/" + (n ? ".*" : "") + "$"
                };
            let {namedParameterizedRoute: i} = h(t, !1);
            return {
                namedRegex: "^" + i + (n ? "(?:(/.*)?)" : "") + "$"
            }
        }
    },
    49089: function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "getSortedRoutes", {
            enumerable: !0,
            get: function() {
                return n
            }
        });
        class r {
            insert(t) {
                this._insert(t.split("/").filter(Boolean), [], !1)
            }
            smoosh() {
                return this._smoosh()
            }
            _smoosh(t) {
                void 0 === t && (t = "/");
                let e = [...this.children.keys()].sort();
                null !== this.slugName && e.splice(e.indexOf("[]"), 1),
                null !== this.restSlugName && e.splice(e.indexOf("[...]"), 1),
                null !== this.optionalRestSlugName && e.splice(e.indexOf("[[...]]"), 1);
                let r = e.map(e=>this.children.get(e)._smoosh("" + t + e + "/")).reduce((t,e)=>[...t, ...e], []);
                if (null !== this.slugName && r.push(...this.children.get("[]")._smoosh(t + "[" + this.slugName + "]/")),
                !this.placeholder) {
                    let e = "/" === t ? "/" : t.slice(0, -1);
                    if (null != this.optionalRestSlugName)
                        throw Error('You cannot define a route with the same specificity as a optional catch-all route ("' + e + '" and "' + e + "[[..." + this.optionalRestSlugName + ']]").');
                    r.unshift(e)
                }
                return null !== this.restSlugName && r.push(...this.children.get("[...]")._smoosh(t + "[..." + this.restSlugName + "]/")),
                null !== this.optionalRestSlugName && r.push(...this.children.get("[[...]]")._smoosh(t + "[[..." + this.optionalRestSlugName + "]]/")),
                r
            }
            _insert(t, e, n) {
                if (0 === t.length) {
                    this.placeholder = !1;
                    return
                }
                if (n)
                    throw Error("Catch-all must be the last part of the URL.");
                let i = t[0];
                if (i.startsWith("[") && i.endsWith("]")) {
                    let r = i.slice(1, -1)
                      , s = !1;
                    if (r.startsWith("[") && r.endsWith("]") && (r = r.slice(1, -1),
                    s = !0),
                    r.startsWith("...") && (r = r.substring(3),
                    n = !0),
                    r.startsWith("[") || r.endsWith("]"))
                        throw Error("Segment names may not start or end with extra brackets ('" + r + "').");
                    if (r.startsWith("."))
                        throw Error("Segment names may not start with erroneous periods ('" + r + "').");
                    function o(t, r) {
                        if (null !== t && t !== r)
                            throw Error("You cannot use different slug names for the same dynamic path ('" + t + "' !== '" + r + "').");
                        e.forEach(t=>{
                            if (t === r)
                                throw Error('You cannot have the same slug name "' + r + '" repeat within a single dynamic path');
                            if (t.replace(/\W/g, "") === i.replace(/\W/g, ""))
                                throw Error('You cannot have the slug names "' + t + '" and "' + r + '" differ only by non-word symbols within a single dynamic path')
                        }
                        ),
                        e.push(r)
                    }
                    if (n) {
                        if (s) {
                            if (null != this.restSlugName)
                                throw Error('You cannot use both an required and optional catch-all route at the same level ("[...' + this.restSlugName + ']" and "' + t[0] + '" ).');
                            o(this.optionalRestSlugName, r),
                            this.optionalRestSlugName = r,
                            i = "[[...]]"
                        } else {
                            if (null != this.optionalRestSlugName)
                                throw Error('You cannot use both an optional and required catch-all route at the same level ("[[...' + this.optionalRestSlugName + ']]" and "' + t[0] + '").');
                            o(this.restSlugName, r),
                            this.restSlugName = r,
                            i = "[...]"
                        }
                    } else {
                        if (s)
                            throw Error('Optional route parameters are not yet supported ("' + t[0] + '").');
                        o(this.slugName, r),
                        this.slugName = r,
                        i = "[]"
                    }
                }
                this.children.has(i) || this.children.set(i, new r),
                this.children.get(i)._insert(t.slice(1), e, n)
            }
            constructor() {
                this.placeholder = !0,
                this.children = new Map,
                this.slugName = null,
                this.restSlugName = null,
                this.optionalRestSlugName = null
            }
        }
        function n(t) {
            let e = new r;
            return t.forEach(t=>e.insert(t)),
            e.smoosh()
        }
    },
    65960: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "default", {
            enumerable: !0,
            get: function() {
                return a
            }
        });
        let n = r(2265)
          , i = "undefined" == typeof window
          , o = i ? ()=>{}
        : n.useLayoutEffect
          , s = i ? ()=>{}
        : n.useEffect;
        function a(t) {
            let {headManager: e, reduceComponentsToState: r} = t;
            function a() {
                if (e && e.mountedInstances) {
                    let i = n.Children.toArray(Array.from(e.mountedInstances).filter(Boolean));
                    e.updateHead(r(i, t))
                }
            }
            if (i) {
                var u;
                null == e || null == (u = e.mountedInstances) || u.add(t.children),
                a()
            }
            return o(()=>{
                var r;
                return null == e || null == (r = e.mountedInstances) || r.add(t.children),
                ()=>{
                    var r;
                    null == e || null == (r = e.mountedInstances) || r.delete(t.children)
                }
            }
            ),
            o(()=>(e && (e._pendingUpdate = a),
            ()=>{
                e && (e._pendingUpdate = a)
            }
            )),
            s(()=>(e && e._pendingUpdate && (e._pendingUpdate(),
            e._pendingUpdate = null),
            ()=>{
                e && e._pendingUpdate && (e._pendingUpdate(),
                e._pendingUpdate = null)
            }
            )),
            null
        }
    },
    43461: function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        function(t, e) {
            for (var r in e)
                Object.defineProperty(t, r, {
                    enumerable: !0,
                    get: e[r]
                })
        }(e, {
            DecodeError: function() {
                return p
            },
            MiddlewareNotFoundError: function() {
                return y
            },
            MissingStaticPage: function() {
                return v
            },
            NormalizeError: function() {
                return m
            },
            PageNotFoundError: function() {
                return g
            },
            SP: function() {
                return c
            },
            ST: function() {
                return d
            },
            WEB_VITALS: function() {
                return r
            },
            execOnce: function() {
                return n
            },
            getDisplayName: function() {
                return u
            },
            getLocationOrigin: function() {
                return s
            },
            getURL: function() {
                return a
            },
            isAbsoluteUrl: function() {
                return o
            },
            isResSent: function() {
                return l
            },
            loadGetInitialProps: function() {
                return f
            },
            normalizeRepeatedSlashes: function() {
                return h
            },
            stringifyError: function() {
                return b
            }
        });
        let r = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
        function n(t) {
            let e, r = !1;
            return function() {
                for (var n = arguments.length, i = Array(n), o = 0; o < n; o++)
                    i[o] = arguments[o];
                return r || (r = !0,
                e = t(...i)),
                e
            }
        }
        let i = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/
          , o = t=>i.test(t);
        function s() {
            let {protocol: t, hostname: e, port: r} = window.location;
            return t + "//" + e + (r ? ":" + r : "")
        }
        function a() {
            let {href: t} = window.location
              , e = s();
            return t.substring(e.length)
        }
        function u(t) {
            return "string" == typeof t ? t : t.displayName || t.name || "Unknown"
        }
        function l(t) {
            return t.finished || t.headersSent
        }
        function h(t) {
            let e = t.split("?");
            return e[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (e[1] ? "?" + e.slice(1).join("?") : "")
        }
        async function f(t, e) {
            let r = e.res || e.ctx && e.ctx.res;
            if (!t.getInitialProps)
                return e.ctx && e.Component ? {
                    pageProps: await f(e.Component, e.ctx)
                } : {};
            let n = await t.getInitialProps(e);
            if (r && l(r))
                return n;
            if (!n)
                throw Error('"' + u(t) + '.getInitialProps()" should resolve to an object. But found "' + n + '" instead.');
            return n
        }
        let c = "undefined" != typeof performance
          , d = c && ["mark", "measure", "getEntriesByName"].every(t=>"function" == typeof performance[t]);
        class p extends Error {
        }
        class m extends Error {
        }
        class g extends Error {
            constructor(t) {
                super(),
                this.code = "ENOENT",
                this.name = "PageNotFoundError",
                this.message = "Cannot find module for page: " + t
            }
        }
        class v extends Error {
            constructor(t, e) {
                super(),
                this.message = "Failed to load static file for page: " + t + " " + e
            }
        }
        class y extends Error {
            constructor() {
                super(),
                this.code = "ENOENT",
                this.message = "Cannot find the middleware module"
            }
        }
        function b(t) {
            return JSON.stringify({
                message: t.message,
                stack: t.stack
            })
        }
    }
}]);
