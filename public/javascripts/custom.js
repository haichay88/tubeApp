function removeA(n) {
    for (var t, i = arguments, r = i.length, u; r > 1 && n.length;)
        for (t = i[--r];
            (u = n.indexOf(t)) !== -1;) n.splice(u, 1);
    return n
}

function show_vmsg(n) {
    $("#vmsg").html('<i class="fa fa-check" aria-hidden="true"><\/i> ' + n).show().delay(2e3).fadeOut();
    $("body").removeClass("sideactive")
}

function number_format(n, t, i, r) {
    var e = isFinite(+n) ? +n : 0,
        f = isFinite(+t) ? Math.abs(t) : 0,
        o = void 0 === r ? "," : r,
        s = void 0 === i ? "." : i,
        u = "";
    return 3 < (u = (f ? function(n, t) {
        var i = Math.pow(10, t);
        return "" + Math.round(n * i) / i
    }(e, f) : "" + Math.round(e)).split("."))[0].length && (u[0] = u[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, o)), (u[1] || "").length < f && (u[1] = u[1] || "", u[1] += Array(f - u[1].length + 1).join("0")), u.join(s)
}

function Set_Cookie(n, t, i, r, u, f) {
    var e = new Date,
        o;
    e.setTime(e.getTime());
    i && (i = 864e5 * i);
    o = new Date(e.getTime() + i);
    document.cookie = n + "=" + escape(t) + (i ? ";expires=" + o.toGMTString() : "") + (r ? ";path=" + r : "") + (u ? ";domain=" + u : "") + (f ? ";secure" : "")
}

function Get_Cookie(n) {
    var t = document.cookie.match(new RegExp("(?:^|; )" + n.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
    return t ? decodeURIComponentX(t[1]) : null
}

function decodeURIComponentX(n) {
    for (var i, r, f = "", t = 0, u = (i = n.split(/(%(?:D0|D1)%.{2})/)).length; t < u; t++) {
        try {
            r = decodeURIComponent(i[t])
        } catch (n) {
            r = i[t]
        }
        f += r
    }
    return f
}
if (! function(n, t) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = n.document ? t(n, !0) : function(n) {
            if (!n.document) throw new Error("jQuery requires a window with a document");
            return t(n)
        } : t(n)
    }("undefined" != typeof window ? window : this, function(n, t) {
        function ri(n) {
            var t = n.length,
                r = i.type(n);
            return "function" === r || i.isWindow(n) ? !1 : 1 === n.nodeType && t ? !0 : "array" === r || 0 === t || "number" == typeof t && t > 0 && t - 1 in n
        }

        function ui(n, t, r) {
            if (i.isFunction(t)) return i.grep(n, function(n, i) {
                return !!t.call(n, i, n) !== r
            });
            if (t.nodeType) return i.grep(n, function(n) {
                return n === t !== r
            });
            if ("string" == typeof t) {
                if (ef.test(t)) return i.filter(t, n, r);
                t = i.filter(t, n)
            }
            return i.grep(n, function(n) {
                return ft.call(t, n) >= 0 !== r
            })
        }

        function ur(n, t) {
            while ((n = n[t]) && 1 !== n.nodeType);
            return n
        }

        function of(n) {
            var t = fi[n] = {};
            return i.each(n.match(c) || [], function(n, i) {
                t[i] = !0
            }), t
        }

        function ht() {
            u.removeEventListener("DOMContentLoaded", ht, !1);
            n.removeEventListener("load", ht, !1);
            i.ready()
        }

        function v() {
            Object.defineProperty(this.cache = {}, 0, {
                get: function() {
                    return {}
                }
            });
            this.expando = i.expando + v.uid++
        }

        function fr(n, t, r) {
            var u;
            if (void 0 === r && 1 === n.nodeType)
                if (u = "data-" + t.replace(hf, "-$1").toLowerCase(), r = n.getAttribute(u), "string" == typeof r) {
                    try {
                        r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : sf.test(r) ? i.parseJSON(r) : r
                    } catch (f) {}
                    e.set(n, t, r)
                } else r = void 0;
            return r
        }

        function lt() {
            return !0
        }

        function k() {
            return !1
        }

        function hr() {
            try {
                return u.activeElement
            } catch (n) {}
        }

        function vr(n, t) {
            return i.nodeName(n, "table") && i.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? n.getElementsByTagName("tbody")[0] || n.appendChild(n.ownerDocument.createElement("tbody")) : n
        }

        function bf(n) {
            return n.type = (null !== n.getAttribute("type")) + "/" + n.type, n
        }

        function kf(n) {
            var t = pf.exec(n.type);
            return t ? n.type = t[1] : n.removeAttribute("type"), n
        }

        function ei(n, t) {
            for (var i = 0, u = n.length; u > i; i++) r.set(n[i], "globalEval", !t || r.get(t[i], "globalEval"))
        }

        function yr(n, t) {
            var u, c, f, s, h, l, a, o;
            if (1 === t.nodeType) {
                if (r.hasData(n) && (s = r.access(n), h = r.set(t, s), o = s.events)) {
                    delete h.handle;
                    h.events = {};
                    for (f in o)
                        for (u = 0, c = o[f].length; c > u; u++) i.event.add(t, f, o[f][u])
                }
                e.hasData(n) && (l = e.access(n), a = i.extend({}, l), e.set(t, a))
            }
        }

        function o(n, t) {
            var r = n.getElementsByTagName ? n.getElementsByTagName(t || "*") : n.querySelectorAll ? n.querySelectorAll(t || "*") : [];
            return void 0 === t || t && i.nodeName(n, t) ? i.merge([n], r) : r
        }

        function df(n, t) {
            var i = t.nodeName.toLowerCase();
            "input" === i && er.test(n.type) ? t.checked = n.checked : ("input" === i || "textarea" === i) && (t.defaultValue = n.defaultValue)
        }

        function pr(t, r) {
            var f, u = i(r.createElement(t)).appendTo(r.body),
                e = n.getDefaultComputedStyle && (f = n.getDefaultComputedStyle(u[0])) ? f.display : i.css(u[0], "display");
            return u.detach(), e
        }

        function si(n) {
            var r = u,
                t = oi[n];
            return t || (t = pr(n, r), "none" !== t && t || (at = (at || i("<iframe frameborder='0' width='0' height='0'/>")).appendTo(r.documentElement), r = at[0].contentDocument, r.write(), r.close(), t = pr(n, r), at.detach()), oi[n] = t), t
        }

        function it(n, t, r) {
            var e, o, s, u, f = n.style;
            return r = r || vt(n), r && (u = r.getPropertyValue(t) || r[t]), r && ("" !== u || i.contains(n.ownerDocument, n) || (u = i.style(n, t)), hi.test(u) && wr.test(t) && (e = f.width, o = f.minWidth, s = f.maxWidth, f.minWidth = f.maxWidth = f.width = u, u = r.width, f.width = e, f.minWidth = o, f.maxWidth = s)), void 0 !== u ? u + "" : u
        }

        function br(n, t) {
            return {
                get: function() {
                    return n() ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }

        function gr(n, t) {
            if (t in n) return t;
            for (var r = t[0].toUpperCase() + t.slice(1), u = t, i = dr.length; i--;)
                if (t = dr[i] + r, t in n) return t;
            return u
        }

        function nu(n, t, i) {
            var r = ne.exec(t);
            return r ? Math.max(0, r[1] - (i || 0)) + (r[2] || "px") : t
        }

        function tu(n, t, r, u, f) {
            for (var e = r === (u ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > e; e += 2) "margin" === r && (o += i.css(n, r + p[e], !0, f)), u ? ("content" === r && (o -= i.css(n, "padding" + p[e], !0, f)), "margin" !== r && (o -= i.css(n, "border" + p[e] + "Width", !0, f))) : (o += i.css(n, "padding" + p[e], !0, f), "padding" !== r && (o += i.css(n, "border" + p[e] + "Width", !0, f)));
            return o
        }

        function iu(n, t, r) {
            var o = !0,
                u = "width" === t ? n.offsetWidth : n.offsetHeight,
                e = vt(n),
                s = "border-box" === i.css(n, "boxSizing", !1, e);
            if (0 >= u || null == u) {
                if (u = it(n, t, e), (0 > u || null == u) && (u = n.style[t]), hi.test(u)) return u;
                o = s && (f.boxSizingReliable() || u === n.style[t]);
                u = parseFloat(u) || 0
            }
            return u + tu(n, t, r || (s ? "border" : "content"), o, e) + "px"
        }

        function ru(n, t) {
            for (var e, u, s, o = [], f = 0, h = n.length; h > f; f++) u = n[f], u.style && (o[f] = r.get(u, "olddisplay"), e = u.style.display, t ? (o[f] || "none" !== e || (u.style.display = ""), "" === u.style.display && tt(u) && (o[f] = r.access(u, "olddisplay", si(u.nodeName)))) : (s = tt(u), "none" === e && s || r.set(u, "olddisplay", s ? e : i.css(u, "display"))));
            for (f = 0; h > f; f++) u = n[f], u.style && (t && "none" !== u.style.display && "" !== u.style.display || (u.style.display = t ? o[f] || "" : "none"));
            return n
        }

        function s(n, t, i, r, u) {
            return new s.prototype.init(n, t, i, r, u)
        }

        function fu() {
            return setTimeout(function() {
                d = void 0
            }), d = i.now()
        }

        function wt(n, t) {
            var r, u = 0,
                i = {
                    height: n
                };
            for (t = t ? 1 : 0; 4 > u; u += 2 - t) r = p[u], i["margin" + r] = i["padding" + r] = n;
            return t && (i.opacity = i.width = n), i
        }

        function eu(n, t, i) {
            for (var u, f = (rt[t] || []).concat(rt["*"]), r = 0, e = f.length; e > r; r++)
                if (u = f[r].call(i, t, n)) return u
        }

        function fe(n, t, u) {
            var f, a, p, v, o, w, h, b, l = this,
                y = {},
                s = n.style,
                c = n.nodeType && tt(n),
                e = r.get(n, "fxshow");
            u.queue || (o = i._queueHooks(n, "fx"), null == o.unqueued && (o.unqueued = 0, w = o.empty.fire, o.empty.fire = function() {
                o.unqueued || w()
            }), o.unqueued++, l.always(function() {
                l.always(function() {
                    o.unqueued--;
                    i.queue(n, "fx").length || o.empty.fire()
                })
            }));
            1 === n.nodeType && ("height" in t || "width" in t) && (u.overflow = [s.overflow, s.overflowX, s.overflowY], h = i.css(n, "display"), b = "none" === h ? r.get(n, "olddisplay") || si(n.nodeName) : h, "inline" === b && "none" === i.css(n, "float") && (s.display = "inline-block"));
            u.overflow && (s.overflow = "hidden", l.always(function() {
                s.overflow = u.overflow[0];
                s.overflowX = u.overflow[1];
                s.overflowY = u.overflow[2]
            }));
            for (f in t)
                if (a = t[f], re.exec(a)) {
                    if (delete t[f], p = p || "toggle" === a, a === (c ? "hide" : "show")) {
                        if ("show" !== a || !e || void 0 === e[f]) continue;
                        c = !0
                    }
                    y[f] = e && e[f] || i.style(n, f)
                } else h = void 0;
            if (i.isEmptyObject(y)) "inline" === ("none" === h ? si(n.nodeName) : h) && (s.display = h);
            else {
                e ? "hidden" in e && (c = e.hidden) : e = r.access(n, "fxshow", {});
                p && (e.hidden = !c);
                c ? i(n).show() : l.done(function() {
                    i(n).hide()
                });
                l.done(function() {
                    var t;
                    r.remove(n, "fxshow");
                    for (t in y) i.style(n, t, y[t])
                });
                for (f in y) v = eu(c ? e[f] : 0, f, l), f in e || (e[f] = v.start, c && (v.end = v.start, v.start = "width" === f || "height" === f ? 1 : 0))
            }
        }

        function ee(n, t) {
            var r, f, e, u, o;
            for (r in n)
                if (f = i.camelCase(r), e = t[f], u = n[r], i.isArray(u) && (e = u[1], u = n[r] = u[0]), r !== f && (n[f] = u, delete n[r]), o = i.cssHooks[f], o && "expand" in o) {
                    u = o.expand(u);
                    delete n[f];
                    for (r in u) r in n || (n[r] = u[r], t[r] = e)
                } else t[f] = e
        }

        function ou(n, t, r) {
            var h, e, o = 0,
                l = pt.length,
                f = i.Deferred().always(function() {
                    delete c.elem
                }),
                c = function() {
                    if (e) return !1;
                    for (var s = d || fu(), t = Math.max(0, u.startTime + u.duration - s), h = t / u.duration || 0, i = 1 - h, r = 0, o = u.tweens.length; o > r; r++) u.tweens[r].run(i);
                    return f.notifyWith(n, [u, i, t]), 1 > i && o ? t : (f.resolveWith(n, [u]), !1)
                },
                u = f.promise({
                    elem: n,
                    props: i.extend({}, t),
                    opts: i.extend(!0, {
                        specialEasing: {}
                    }, r),
                    originalProperties: t,
                    originalOptions: r,
                    startTime: d || fu(),
                    duration: r.duration,
                    tweens: [],
                    createTween: function(t, r) {
                        var f = i.Tween(n, u.opts, t, r, u.opts.specialEasing[t] || u.opts.easing);
                        return u.tweens.push(f), f
                    },
                    stop: function(t) {
                        var i = 0,
                            r = t ? u.tweens.length : 0;
                        if (e) return this;
                        for (e = !0; r > i; i++) u.tweens[i].run(1);
                        return t ? f.resolveWith(n, [u, t]) : f.rejectWith(n, [u, t]), this
                    }
                }),
                s = u.props;
            for (ee(s, u.opts.specialEasing); l > o; o++)
                if (h = pt[o].call(u, n, s, u.opts)) return h;
            return i.map(s, eu, u), i.isFunction(u.opts.start) && u.opts.start.call(n, u), i.fx.timer(i.extend(c, {
                elem: n,
                anim: u,
                queue: u.opts.queue
            })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
        }

        function pu(n) {
            return function(t, r) {
                "string" != typeof t && (r = t, t = "*");
                var u, f = 0,
                    e = t.toLowerCase().match(c) || [];
                if (i.isFunction(r))
                    while (u = e[f++]) "+" === u[0] ? (u = u.slice(1) || "*", (n[u] = n[u] || []).unshift(r)) : (n[u] = n[u] || []).push(r)
            }
        }

        function wu(n, t, r, u) {
            function e(s) {
                var h;
                return f[s] = !0, i.each(n[s] || [], function(n, i) {
                    var s = i(t, r, u);
                    return "string" != typeof s || o || f[s] ? o ? !(h = s) : void 0 : (t.dataTypes.unshift(s), e(s), !1)
                }), h
            }
            var f = {},
                o = n === ci;
            return e(t.dataTypes[0]) || !f["*"] && e("*")
        }

        function ai(n, t) {
            var r, u, f = i.ajaxSettings.flatOptions || {};
            for (r in t) void 0 !== t[r] && ((f[r] ? n : u || (u = {}))[r] = t[r]);
            return u && i.extend(!0, n, u), n
        }

        function ae(n, t, i) {
            for (var e, u, f, o, s = n.contents, r = n.dataTypes;
                "*" === r[0];) r.shift(), void 0 === e && (e = n.mimeType || t.getResponseHeader("Content-Type"));
            if (e)
                for (u in s)
                    if (s[u] && s[u].test(e)) {
                        r.unshift(u);
                        break
                    }
            if (r[0] in i) f = r[0];
            else {
                for (u in i) {
                    if (!r[0] || n.converters[u + " " + r[0]]) {
                        f = u;
                        break
                    }
                    o || (o = u)
                }
                f = f || o
            }
            if (f) return (f !== r[0] && r.unshift(f), i[f])
        }

        function ve(n, t, i, r) {
            var h, u, f, s, e, o = {},
                c = n.dataTypes.slice();
            if (c[1])
                for (f in n.converters) o[f.toLowerCase()] = n.converters[f];
            for (u = c.shift(); u;)
                if (n.responseFields[u] && (i[n.responseFields[u]] = t), !e && r && n.dataFilter && (t = n.dataFilter(t, n.dataType)), e = u, u = c.shift())
                    if ("*" === u) u = e;
                    else if ("*" !== e && e !== u) {
                if (f = o[e + " " + u] || o["* " + u], !f)
                    for (h in o)
                        if (s = h.split(" "), s[1] === u && (f = o[e + " " + s[0]] || o["* " + s[0]])) {
                            f === !0 ? f = o[h] : o[h] !== !0 && (u = s[0], c.unshift(s[1]));
                            break
                        }
                if (f !== !0)
                    if (f && n.throws) t = f(t);
                    else try {
                        t = f(t)
                    } catch (l) {
                        return {
                            state: "parsererror",
                            error: f ? l : "No conversion from " + e + " to " + u
                        }
                    }
            }
            return {
                state: "success",
                data: t
            }
        }

        function vi(n, t, r, u) {
            var f;
            if (i.isArray(t)) i.each(t, function(t, i) {
                r || pe.test(n) ? u(n, i) : vi(n + "[" + ("object" == typeof i ? t : "") + "]", i, r, u)
            });
            else if (r || "object" !== i.type(t)) u(n, t);
            else
                for (f in t) vi(n + "[" + f + "]", t[f], r, u)
        }

        function ku(n) {
            return i.isWindow(n) ? n : 9 === n.nodeType && n.defaultView
        }
        var w = [],
            a = w.slice,
            bi = w.concat,
            ti = w.push,
            ft = w.indexOf,
            et = {},
            nf = et.toString,
            ii = et.hasOwnProperty,
            f = {},
            u = n.document,
            ki = "2.1.3",
            i = function(n, t) {
                return new i.fn.init(n, t)
            },
            tf = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            rf = /^-ms-/,
            uf = /-([\da-z])/gi,
            ff = function(n, t) {
                return t.toUpperCase()
            },
            y, ot, nr, tr, ir, rr, c, fi, st, l, b, at, oi, oe, su, g, hu, bt, cu, kt, dt, yi, ni, pi, wi, du, gu;
        i.fn = i.prototype = {
            jquery: ki,
            constructor: i,
            selector: "",
            length: 0,
            toArray: function() {
                return a.call(this)
            },
            get: function(n) {
                return null != n ? 0 > n ? this[n + this.length] : this[n] : a.call(this)
            },
            pushStack: function(n) {
                var t = i.merge(this.constructor(), n);
                return t.prevObject = this, t.context = this.context, t
            },
            each: function(n, t) {
                return i.each(this, n, t)
            },
            map: function(n) {
                return this.pushStack(i.map(this, function(t, i) {
                    return n.call(t, i, t)
                }))
            },
            slice: function() {
                return this.pushStack(a.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(n) {
                var i = this.length,
                    t = +n + (0 > n ? i : 0);
                return this.pushStack(t >= 0 && i > t ? [this[t]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: ti,
            sort: w.sort,
            splice: w.splice
        };
        i.extend = i.fn.extend = function() {
            var e, f, r, t, o, s, n = arguments[0] || {},
                u = 1,
                c = arguments.length,
                h = !1;
            for ("boolean" == typeof n && (h = n, n = arguments[u] || {}, u++), "object" == typeof n || i.isFunction(n) || (n = {}), u === c && (n = this, u--); c > u; u++)
                if (null != (e = arguments[u]))
                    for (f in e) r = n[f], t = e[f], n !== t && (h && t && (i.isPlainObject(t) || (o = i.isArray(t))) ? (o ? (o = !1, s = r && i.isArray(r) ? r : []) : s = r && i.isPlainObject(r) ? r : {}, n[f] = i.extend(h, s, t)) : void 0 !== t && (n[f] = t));
            return n
        };
        i.extend({
            expando: "jQuery" + (ki + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(n) {
                throw new Error(n);
            },
            noop: function() {},
            isFunction: function(n) {
                return "function" === i.type(n)
            },
            isArray: Array.isArray,
            isWindow: function(n) {
                return null != n && n === n.window
            },
            isNumeric: function(n) {
                return !i.isArray(n) && n - parseFloat(n) + 1 >= 0
            },
            isPlainObject: function(n) {
                return "object" !== i.type(n) || n.nodeType || i.isWindow(n) ? !1 : n.constructor && !ii.call(n.constructor.prototype, "isPrototypeOf") ? !1 : !0
            },
            isEmptyObject: function(n) {
                var t;
                for (t in n) return !1;
                return !0
            },
            type: function(n) {
                return null == n ? n + "" : "object" == typeof n || "function" == typeof n ? et[nf.call(n)] || "object" : typeof n
            },
            globalEval: function(n) {
                var t, r = eval;
                n = i.trim(n);
                n && (1 === n.indexOf("use strict") ? (t = u.createElement("script"), t.text = n, u.head.appendChild(t).parentNode.removeChild(t)) : r(n))
            },
            camelCase: function(n) {
                return n.replace(rf, "ms-").replace(uf, ff)
            },
            nodeName: function(n, t) {
                return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(n, t, i) {
                var u, r = 0,
                    f = n.length,
                    e = ri(n);
                if (i) {
                    if (e) {
                        for (; f > r; r++)
                            if (u = t.apply(n[r], i), u === !1) break
                    } else
                        for (r in n)
                            if (u = t.apply(n[r], i), u === !1) break
                } else if (e) {
                    for (; f > r; r++)
                        if (u = t.call(n[r], r, n[r]), u === !1) break
                } else
                    for (r in n)
                        if (u = t.call(n[r], r, n[r]), u === !1) break; return n
            },
            trim: function(n) {
                return null == n ? "" : (n + "").replace(tf, "")
            },
            makeArray: function(n, t) {
                var r = t || [];
                return null != n && (ri(Object(n)) ? i.merge(r, "string" == typeof n ? [n] : n) : ti.call(r, n)), r
            },
            inArray: function(n, t, i) {
                return null == t ? -1 : ft.call(t, n, i)
            },
            merge: function(n, t) {
                for (var u = +t.length, i = 0, r = n.length; u > i; i++) n[r++] = t[i];
                return n.length = r, n
            },
            grep: function(n, t, i) {
                for (var u, f = [], r = 0, e = n.length, o = !i; e > r; r++) u = !t(n[r], r), u !== o && f.push(n[r]);
                return f
            },
            map: function(n, t, i) {
                var u, r = 0,
                    e = n.length,
                    o = ri(n),
                    f = [];
                if (o)
                    for (; e > r; r++) u = t(n[r], r, i), null != u && f.push(u);
                else
                    for (r in n) u = t(n[r], r, i), null != u && f.push(u);
                return bi.apply([], f)
            },
            guid: 1,
            proxy: function(n, t) {
                var u, f, r;
                return "string" == typeof t && (u = n[t], t = n, n = u), i.isFunction(n) ? (f = a.call(arguments, 2), r = function() {
                    return n.apply(t || this, f.concat(a.call(arguments)))
                }, r.guid = n.guid = n.guid || i.guid++, r) : void 0
            },
            now: Date.now,
            support: f
        });
        i.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(n, t) {
            et["[object " + t + "]"] = t.toLowerCase()
        });
        y = function(n) {
            function r(n, t, i, r) {
                var p, s, a, c, w, y, d, v, nt, g;
                if ((t ? t.ownerDocument || t : h) !== o && k(t), t = t || o, i = i || [], c = t.nodeType, "string" != typeof n || !n || 1 !== c && 9 !== c && 11 !== c) return i;
                if (!r && l) {
                    if (11 !== c && (p = hr.exec(n)))
                        if (a = p[1]) {
                            if (9 === c) {
                                if (s = t.getElementById(a), !s || !s.parentNode) return i;
                                if (s.id === a) return i.push(s), i
                            } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(a)) && et(t, s) && s.id === a) return i.push(s), i
                        } else {
                            if (p[2]) return b.apply(i, t.getElementsByTagName(n)), i;
                            if ((a = p[3]) && u.getElementsByClassName) return b.apply(i, t.getElementsByClassName(a)), i
                        }
                    if (u.qsa && (!e || !e.test(n))) {
                        if (v = d = f, nt = t, g = 1 !== c && n, 1 === c && "object" !== t.nodeName.toLowerCase()) {
                            for (y = ft(n), (d = t.getAttribute("id")) ? v = d.replace(cr, "\\$&") : t.setAttribute("id", v), v = "[id='" + v + "'] ", w = y.length; w--;) y[w] = v + vt(y[w]);
                            nt = dt.test(n) && ti(t.parentNode) || t;
                            g = y.join(",")
                        }
                        if (g) try {
                            return b.apply(i, nt.querySelectorAll(g)), i
                        } catch (tt) {} finally {
                            d || t.removeAttribute("id")
                        }
                    }
                }
                return oi(n.replace(lt, "$1"), t, i, r)
            }

            function gt() {
                function n(r, u) {
                    return i.push(r + " ") > t.cacheLength && delete n[i.shift()], n[r + " "] = u
                }
                var i = [];
                return n
            }

            function c(n) {
                return n[f] = !0, n
            }

            function v(n) {
                var t = o.createElement("div");
                try {
                    return !!n(t)
                } catch (i) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t);
                    t = null
                }
            }

            function ni(n, i) {
                for (var u = n.split("|"), r = n.length; r--;) t.attrHandle[u[r]] = i
            }

            function wi(n, t) {
                var i = t && n,
                    r = i && 1 === n.nodeType && 1 === t.nodeType && (~t.sourceIndex || li) - (~n.sourceIndex || li);
                if (r) return r;
                if (i)
                    while (i = i.nextSibling)
                        if (i === t) return -1;
                return n ? 1 : -1
            }

            function lr(n) {
                return function(t) {
                    var i = t.nodeName.toLowerCase();
                    return "input" === i && t.type === n
                }
            }

            function ar(n) {
                return function(t) {
                    var i = t.nodeName.toLowerCase();
                    return ("input" === i || "button" === i) && t.type === n
                }
            }

            function tt(n) {
                return c(function(t) {
                    return t = +t, c(function(i, r) {
                        for (var u, f = n([], i.length, t), e = f.length; e--;) i[u = f[e]] && (i[u] = !(r[u] = i[u]))
                    })
                })
            }

            function ti(n) {
                return n && "undefined" != typeof n.getElementsByTagName && n
            }

            function bi() {}

            function vt(n) {
                for (var t = 0, r = n.length, i = ""; r > t; t++) i += n[t].value;
                return i
            }

            function ii(n, t, i) {
                var r = t.dir,
                    u = i && "parentNode" === r,
                    e = ki++;
                return t.first ? function(t, i, f) {
                    while (t = t[r])
                        if (1 === t.nodeType || u) return n(t, i, f)
                } : function(t, i, o) {
                    var s, h, c = [a, e];
                    if (o) {
                        while (t = t[r])
                            if ((1 === t.nodeType || u) && n(t, i, o)) return !0
                    } else
                        while (t = t[r])
                            if (1 === t.nodeType || u) {
                                if (h = t[f] || (t[f] = {}), (s = h[r]) && s[0] === a && s[1] === e) return c[2] = s[2];
                                if (h[r] = c, c[2] = n(t, i, o)) return !0
                            }
                }
            }

            function ri(n) {
                return n.length > 1 ? function(t, i, r) {
                    for (var u = n.length; u--;)
                        if (!n[u](t, i, r)) return !1;
                    return !0
                } : n[0]
            }

            function vr(n, t, i) {
                for (var u = 0, f = t.length; f > u; u++) r(n, t[u], i);
                return i
            }

            function yt(n, t, i, r, u) {
                for (var e, o = [], f = 0, s = n.length, h = null != t; s > f; f++)(e = n[f]) && (!i || i(e, r, u)) && (o.push(e), h && t.push(f));
                return o
            }

            function ui(n, t, i, r, u, e) {
                return r && !r[f] && (r = ui(r)), u && !u[f] && (u = ui(u, e)), c(function(f, e, o, s) {
                    var l, c, a, p = [],
                        y = [],
                        w = e.length,
                        k = f || vr(t || "*", o.nodeType ? [o] : o, []),
                        v = !n || !f && t ? k : yt(k, p, n, o, s),
                        h = i ? u || (f ? n : w || r) ? [] : e : v;
                    if (i && i(v, h, o, s), r)
                        for (l = yt(h, y), r(l, [], o, s), c = l.length; c--;)(a = l[c]) && (h[y[c]] = !(v[y[c]] = a));
                    if (f) {
                        if (u || n) {
                            if (u) {
                                for (l = [], c = h.length; c--;)(a = h[c]) && l.push(v[c] = a);
                                u(null, h = [], l, s)
                            }
                            for (c = h.length; c--;)(a = h[c]) && (l = u ? nt(f, a) : p[c]) > -1 && (f[l] = !(e[l] = a))
                        }
                    } else h = yt(h === e ? h.splice(w, h.length) : h), u ? u(null, e, h, s) : b.apply(e, h)
                })
            }

            function fi(n) {
                for (var o, u, r, s = n.length, h = t.relative[n[0].type], c = h || t.relative[" "], i = h ? 1 : 0, l = ii(function(n) {
                        return n === o
                    }, c, !0), a = ii(function(n) {
                        return nt(o, n) > -1
                    }, c, !0), e = [function(n, t, i) {
                        var r = !h && (i || t !== ht) || ((o = t).nodeType ? l(n, t, i) : a(n, t, i));
                        return o = null, r
                    }]; s > i; i++)
                    if (u = t.relative[n[i].type]) e = [ii(ri(e), u)];
                    else {
                        if (u = t.filter[n[i].type].apply(null, n[i].matches), u[f]) {
                            for (r = ++i; s > r; r++)
                                if (t.relative[n[r].type]) break;
                            return ui(i > 1 && ri(e), i > 1 && vt(n.slice(0, i - 1).concat({
                                value: " " === n[i - 2].type ? "*" : ""
                            })).replace(lt, "$1"), u, r > i && fi(n.slice(i, r)), s > r && fi(n = n.slice(r)), s > r && vt(n))
                        }
                        e.push(u)
                    }
                return ri(e)
            }

            function yr(n, i) {
                var u = i.length > 0,
                    f = n.length > 0,
                    e = function(e, s, h, c, l) {
                        var y, d, w, k = 0,
                            v = "0",
                            g = e && [],
                            p = [],
                            nt = ht,
                            tt = e || f && t.find.TAG("*", l),
                            it = a += null == nt ? 1 : Math.random() || .1,
                            rt = tt.length;
                        for (l && (ht = s !== o && s); v !== rt && null != (y = tt[v]); v++) {
                            if (f && y) {
                                for (d = 0; w = n[d++];)
                                    if (w(y, s, h)) {
                                        c.push(y);
                                        break
                                    }
                                l && (a = it)
                            }
                            u && ((y = !w && y) && k--, e && g.push(y))
                        }
                        if (k += v, u && v !== k) {
                            for (d = 0; w = i[d++];) w(g, p, s, h);
                            if (e) {
                                if (k > 0)
                                    while (v--) g[v] || p[v] || (p[v] = gi.call(c));
                                p = yt(p)
                            }
                            b.apply(c, p);
                            l && !e && p.length > 0 && k + i.length > 1 && r.uniqueSort(c)
                        }
                        return l && (a = it, ht = nt), g
                    };
                return u ? c(e) : e
            }
            var it, u, t, st, ei, ft, pt, oi, ht, w, rt, k, o, s, l, e, d, ct, et, f = "sizzle" + 1 * new Date,
                h = n.document,
                a = 0,
                ki = 0,
                si = gt(),
                hi = gt(),
                ci = gt(),
                wt = function(n, t) {
                    return n === t && (rt = !0), 0
                },
                li = -2147483648,
                di = {}.hasOwnProperty,
                g = [],
                gi = g.pop,
                nr = g.push,
                b = g.push,
                ai = g.slice,
                nt = function(n, t) {
                    for (var i = 0, r = n.length; r > i; i++)
                        if (n[i] === t) return i;
                    return -1
                },
                bt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                i = "[\\x20\\t\\r\\n\\f]",
                ut = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                vi = ut.replace("w", "w#"),
                yi = "\\[" + i + "*(" + ut + ")(?:" + i + "*([*^$|!~]?=)" + i + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + vi + "))|)" + i + "*\\]",
                kt = ":(" + ut + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + yi + ")*)|.*)\\)|)",
                tr = new RegExp(i + "+", "g"),
                lt = new RegExp("^" + i + "+|((?:^|[^\\\\])(?:\\\\.)*)" + i + "+$", "g"),
                ir = new RegExp("^" + i + "*," + i + "*"),
                rr = new RegExp("^" + i + "*([>+~]|" + i + ")" + i + "*"),
                ur = new RegExp("=" + i + "*([^\\]'\"]*?)" + i + "*\\]", "g"),
                fr = new RegExp(kt),
                er = new RegExp("^" + vi + "$"),
                at = {
                    ID: new RegExp("^#(" + ut + ")"),
                    CLASS: new RegExp("^\\.(" + ut + ")"),
                    TAG: new RegExp("^(" + ut.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + yi),
                    PSEUDO: new RegExp("^" + kt),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + i + "*(even|odd|(([+-]|)(\\d*)n|)" + i + "*(?:([+-]|)" + i + "*(\\d+)|))" + i + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + bt + ")$", "i"),
                    needsContext: new RegExp("^" + i + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + i + "*((?:-\\d)?\\d*)" + i + "*\\)|)(?=[^-]|$)", "i")
                },
                or = /^(?:input|select|textarea|button)$/i,
                sr = /^h\d$/i,
                ot = /^[^{]+\{\s*\[native \w/,
                hr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                dt = /[+~]/,
                cr = /'|\\/g,
                y = new RegExp("\\\\([\\da-f]{1,6}" + i + "?|(" + i + ")|.)", "ig"),
                p = function(n, t, i) {
                    var r = "0x" + t - 65536;
                    return r !== r || i ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                },
                pi = function() {
                    k()
                };
            try {
                b.apply(g = ai.call(h.childNodes), h.childNodes);
                g[h.childNodes.length].nodeType
            } catch (pr) {
                b = {
                    apply: g.length ? function(n, t) {
                        nr.apply(n, ai.call(t))
                    } : function(n, t) {
                        for (var i = n.length, r = 0; n[i++] = t[r++];);
                        n.length = i - 1
                    }
                }
            }
            u = r.support = {};
            ei = r.isXML = function(n) {
                var t = n && (n.ownerDocument || n).documentElement;
                return t ? "HTML" !== t.nodeName : !1
            };
            k = r.setDocument = function(n) {
                var a, c, r = n ? n.ownerDocument || n : h;
                return r !== o && 9 === r.nodeType && r.documentElement ? (o = r, s = r.documentElement, c = r.defaultView, c && c !== c.top && (c.addEventListener ? c.addEventListener("unload", pi, !1) : c.attachEvent && c.attachEvent("onunload", pi)), l = !ei(r), u.attributes = v(function(n) {
                    return n.className = "i", !n.getAttribute("className")
                }), u.getElementsByTagName = v(function(n) {
                    return n.appendChild(r.createComment("")), !n.getElementsByTagName("*").length
                }), u.getElementsByClassName = ot.test(r.getElementsByClassName), u.getById = v(function(n) {
                    return s.appendChild(n).id = f, !r.getElementsByName || !r.getElementsByName(f).length
                }), u.getById ? (t.find.ID = function(n, t) {
                    if ("undefined" != typeof t.getElementById && l) {
                        var i = t.getElementById(n);
                        return i && i.parentNode ? [i] : []
                    }
                }, t.filter.ID = function(n) {
                    var t = n.replace(y, p);
                    return function(n) {
                        return n.getAttribute("id") === t
                    }
                }) : (delete t.find.ID, t.filter.ID = function(n) {
                    var t = n.replace(y, p);
                    return function(n) {
                        var i = "undefined" != typeof n.getAttributeNode && n.getAttributeNode("id");
                        return i && i.value === t
                    }
                }), t.find.TAG = u.getElementsByTagName ? function(n, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(n) : u.qsa ? t.querySelectorAll(n) : void 0
                } : function(n, t) {
                    var i, r = [],
                        f = 0,
                        u = t.getElementsByTagName(n);
                    if ("*" === n) {
                        while (i = u[f++]) 1 === i.nodeType && r.push(i);
                        return r
                    }
                    return u
                }, t.find.CLASS = u.getElementsByClassName && function(n, t) {
                    if (l) return t.getElementsByClassName(n)
                }, d = [], e = [], (u.qsa = ot.test(r.querySelectorAll)) && (v(function(n) {
                    s.appendChild(n).innerHTML = "<a id='" + f + "'><\/a><select id='" + f + "-\f]' msallowcapture=''><option selected=''><\/option><\/select>";
                    n.querySelectorAll("[msallowcapture^='']").length && e.push("[*^$]=" + i + "*(?:''|\"\")");
                    n.querySelectorAll("[selected]").length || e.push("\\[" + i + "*(?:value|" + bt + ")");
                    n.querySelectorAll("[id~=" + f + "-]").length || e.push("~=");
                    n.querySelectorAll(":checked").length || e.push(":checked");
                    n.querySelectorAll("a#" + f + "+*").length || e.push(".#.+[+~]")
                }), v(function(n) {
                    var t = r.createElement("input");
                    t.setAttribute("type", "hidden");
                    n.appendChild(t).setAttribute("name", "D");
                    n.querySelectorAll("[name=d]").length && e.push("name" + i + "*[*^$|!~]?=");
                    n.querySelectorAll(":enabled").length || e.push(":enabled", ":disabled");
                    n.querySelectorAll("*,:x");
                    e.push(",.*:")
                })), (u.matchesSelector = ot.test(ct = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && v(function(n) {
                    u.disconnectedMatch = ct.call(n, "div");
                    ct.call(n, "[s!='']:x");
                    d.push("!=", kt)
                }), e = e.length && new RegExp(e.join("|")), d = d.length && new RegExp(d.join("|")), a = ot.test(s.compareDocumentPosition), et = a || ot.test(s.contains) ? function(n, t) {
                    var r = 9 === n.nodeType ? n.documentElement : n,
                        i = t && t.parentNode;
                    return n === i || !(!i || 1 !== i.nodeType || !(r.contains ? r.contains(i) : n.compareDocumentPosition && 16 & n.compareDocumentPosition(i)))
                } : function(n, t) {
                    if (t)
                        while (t = t.parentNode)
                            if (t === n) return !0;
                    return !1
                }, wt = a ? function(n, t) {
                    if (n === t) return rt = !0, 0;
                    var i = !n.compareDocumentPosition - !t.compareDocumentPosition;
                    return i ? i : (i = (n.ownerDocument || n) === (t.ownerDocument || t) ? n.compareDocumentPosition(t) : 1, 1 & i || !u.sortDetached && t.compareDocumentPosition(n) === i ? n === r || n.ownerDocument === h && et(h, n) ? -1 : t === r || t.ownerDocument === h && et(h, t) ? 1 : w ? nt(w, n) - nt(w, t) : 0 : 4 & i ? -1 : 1)
                } : function(n, t) {
                    if (n === t) return rt = !0, 0;
                    var i, u = 0,
                        o = n.parentNode,
                        s = t.parentNode,
                        f = [n],
                        e = [t];
                    if (!o || !s) return n === r ? -1 : t === r ? 1 : o ? -1 : s ? 1 : w ? nt(w, n) - nt(w, t) : 0;
                    if (o === s) return wi(n, t);
                    for (i = n; i = i.parentNode;) f.unshift(i);
                    for (i = t; i = i.parentNode;) e.unshift(i);
                    while (f[u] === e[u]) u++;
                    return u ? wi(f[u], e[u]) : f[u] === h ? -1 : e[u] === h ? 1 : 0
                }, r) : o
            };
            r.matches = function(n, t) {
                return r(n, null, null, t)
            };
            r.matchesSelector = function(n, t) {
                if ((n.ownerDocument || n) !== o && k(n), t = t.replace(ur, "='$1']"), !(!u.matchesSelector || !l || d && d.test(t) || e && e.test(t))) try {
                    var i = ct.call(n, t);
                    if (i || u.disconnectedMatch || n.document && 11 !== n.document.nodeType) return i
                } catch (f) {}
                return r(t, o, null, [n]).length > 0
            };
            r.contains = function(n, t) {
                return (n.ownerDocument || n) !== o && k(n), et(n, t)
            };
            r.attr = function(n, i) {
                (n.ownerDocument || n) !== o && k(n);
                var f = t.attrHandle[i.toLowerCase()],
                    r = f && di.call(t.attrHandle, i.toLowerCase()) ? f(n, i, !l) : void 0;
                return void 0 !== r ? r : u.attributes || !l ? n.getAttribute(i) : (r = n.getAttributeNode(i)) && r.specified ? r.value : null
            };
            r.error = function(n) {
                throw new Error("Syntax error, unrecognized expression: " + n);
            };
            r.uniqueSort = function(n) {
                var r, f = [],
                    t = 0,
                    i = 0;
                if (rt = !u.detectDuplicates, w = !u.sortStable && n.slice(0), n.sort(wt), rt) {
                    while (r = n[i++]) r === n[i] && (t = f.push(i));
                    while (t--) n.splice(f[t], 1)
                }
                return w = null, n
            };
            st = r.getText = function(n) {
                var r, i = "",
                    u = 0,
                    t = n.nodeType;
                if (t) {
                    if (1 === t || 9 === t || 11 === t) {
                        if ("string" == typeof n.textContent) return n.textContent;
                        for (n = n.firstChild; n; n = n.nextSibling) i += st(n)
                    } else if (3 === t || 4 === t) return n.nodeValue
                } else
                    while (r = n[u++]) i += st(r);
                return i
            };
            t = r.selectors = {
                cacheLength: 50,
                createPseudo: c,
                match: at,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(n) {
                        return n[1] = n[1].replace(y, p), n[3] = (n[3] || n[4] || n[5] || "").replace(y, p), "~=" === n[2] && (n[3] = " " + n[3] + " "), n.slice(0, 4)
                    },
                    CHILD: function(n) {
                        return n[1] = n[1].toLowerCase(), "nth" === n[1].slice(0, 3) ? (n[3] || r.error(n[0]), n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * ("even" === n[3] || "odd" === n[3])), n[5] = +(n[7] + n[8] || "odd" === n[3])) : n[3] && r.error(n[0]), n
                    },
                    PSEUDO: function(n) {
                        var i, t = !n[6] && n[2];
                        return at.CHILD.test(n[0]) ? null : (n[3] ? n[2] = n[4] || n[5] || "" : t && fr.test(t) && (i = ft(t, !0)) && (i = t.indexOf(")", t.length - i) - t.length) && (n[0] = n[0].slice(0, i), n[2] = t.slice(0, i)), n.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(n) {
                        var t = n.replace(y, p).toLowerCase();
                        return "*" === n ? function() {
                            return !0
                        } : function(n) {
                            return n.nodeName && n.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(n) {
                        var t = si[n + " "];
                        return t || (t = new RegExp("(^|" + i + ")" + n + "(" + i + "|$)")) && si(n, function(n) {
                            return t.test("string" == typeof n.className && n.className || "undefined" != typeof n.getAttribute && n.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, t, i) {
                        return function(u) {
                            var f = r.attr(u, n);
                            return null == f ? "!=" === t : t ? (f += "", "=" === t ? f === i : "!=" === t ? f !== i : "^=" === t ? i && 0 === f.indexOf(i) : "*=" === t ? i && f.indexOf(i) > -1 : "$=" === t ? i && f.slice(-i.length) === i : "~=" === t ? (" " + f.replace(tr, " ") + " ").indexOf(i) > -1 : "|=" === t ? f === i || f.slice(0, i.length + 1) === i + "-" : !1) : !0
                        }
                    },
                    CHILD: function(n, t, i, r, u) {
                        var s = "nth" !== n.slice(0, 3),
                            o = "last" !== n.slice(-4),
                            e = "of-type" === t;
                        return 1 === r && 0 === u ? function(n) {
                            return !!n.parentNode
                        } : function(t, i, h) {
                            var v, k, c, l, y, w, b = s !== o ? "nextSibling" : "previousSibling",
                                p = t.parentNode,
                                g = e && t.nodeName.toLowerCase(),
                                d = !h && !e;
                            if (p) {
                                if (s) {
                                    while (b) {
                                        for (c = t; c = c[b];)
                                            if (e ? c.nodeName.toLowerCase() === g : 1 === c.nodeType) return !1;
                                        w = b = "only" === n && !w && "nextSibling"
                                    }
                                    return !0
                                }
                                if (w = [o ? p.firstChild : p.lastChild], o && d) {
                                    for (k = p[f] || (p[f] = {}), v = k[n] || [], y = v[0] === a && v[1], l = v[0] === a && v[2], c = y && p.childNodes[y]; c = ++y && c && c[b] || (l = y = 0) || w.pop();)
                                        if (1 === c.nodeType && ++l && c === t) {
                                            k[n] = [a, y, l];
                                            break
                                        }
                                } else if (d && (v = (t[f] || (t[f] = {}))[n]) && v[0] === a) l = v[1];
                                else
                                    while (c = ++y && c && c[b] || (l = y = 0) || w.pop())
                                        if ((e ? c.nodeName.toLowerCase() === g : 1 === c.nodeType) && ++l && (d && ((c[f] || (c[f] = {}))[n] = [a, l]), c === t)) break; return l -= u, l === r || l % r == 0 && l / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(n, i) {
                        var e, u = t.pseudos[n] || t.setFilters[n.toLowerCase()] || r.error("unsupported pseudo: " + n);
                        return u[f] ? u(i) : u.length > 1 ? (e = [n, n, "", i], t.setFilters.hasOwnProperty(n.toLowerCase()) ? c(function(n, t) {
                            for (var r, f = u(n, i), e = f.length; e--;) r = nt(n, f[e]), n[r] = !(t[r] = f[e])
                        }) : function(n) {
                            return u(n, 0, e)
                        }) : u
                    }
                },
                pseudos: {
                    not: c(function(n) {
                        var t = [],
                            r = [],
                            i = pt(n.replace(lt, "$1"));
                        return i[f] ? c(function(n, t, r, u) {
                            for (var e, o = i(n, null, u, []), f = n.length; f--;)(e = o[f]) && (n[f] = !(t[f] = e))
                        }) : function(n, u, f) {
                            return t[0] = n, i(t, null, f, r), t[0] = null, !r.pop()
                        }
                    }),
                    has: c(function(n) {
                        return function(t) {
                            return r(n, t).length > 0
                        }
                    }),
                    contains: c(function(n) {
                        return n = n.replace(y, p),
                            function(t) {
                                return (t.textContent || t.innerText || st(t)).indexOf(n) > -1
                            }
                    }),
                    lang: c(function(n) {
                        return er.test(n || "") || r.error("unsupported lang: " + n), n = n.replace(y, p).toLowerCase(),
                            function(t) {
                                var i;
                                do
                                    if (i = l ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return i = i.toLowerCase(), i === n || 0 === i.indexOf(n + "-");
                                while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var i = n.location && n.location.hash;
                        return i && i.slice(1) === t.id
                    },
                    root: function(n) {
                        return n === s
                    },
                    focus: function(n) {
                        return n === o.activeElement && (!o.hasFocus || o.hasFocus()) && !!(n.type || n.href || ~n.tabIndex)
                    },
                    enabled: function(n) {
                        return n.disabled === !1
                    },
                    disabled: function(n) {
                        return n.disabled === !0
                    },
                    checked: function(n) {
                        var t = n.nodeName.toLowerCase();
                        return "input" === t && !!n.checked || "option" === t && !!n.selected
                    },
                    selected: function(n) {
                        return n.parentNode && n.parentNode.selectedIndex, n.selected === !0
                    },
                    empty: function(n) {
                        for (n = n.firstChild; n; n = n.nextSibling)
                            if (n.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(n) {
                        return !t.pseudos.empty(n)
                    },
                    header: function(n) {
                        return sr.test(n.nodeName)
                    },
                    input: function(n) {
                        return or.test(n.nodeName)
                    },
                    button: function(n) {
                        var t = n.nodeName.toLowerCase();
                        return "input" === t && "button" === n.type || "button" === t
                    },
                    text: function(n) {
                        var t;
                        return "input" === n.nodeName.toLowerCase() && "text" === n.type && (null == (t = n.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: tt(function() {
                        return [0]
                    }),
                    last: tt(function(n, t) {
                        return [t - 1]
                    }),
                    eq: tt(function(n, t, i) {
                        return [0 > i ? i + t : i]
                    }),
                    even: tt(function(n, t) {
                        for (var i = 0; t > i; i += 2) n.push(i);
                        return n
                    }),
                    odd: tt(function(n, t) {
                        for (var i = 1; t > i; i += 2) n.push(i);
                        return n
                    }),
                    lt: tt(function(n, t, i) {
                        for (var r = 0 > i ? i + t : i; --r >= 0;) n.push(r);
                        return n
                    }),
                    gt: tt(function(n, t, i) {
                        for (var r = 0 > i ? i + t : i; ++r < t;) n.push(r);
                        return n
                    })
                }
            };
            t.pseudos.nth = t.pseudos.eq;
            for (it in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) t.pseudos[it] = lr(it);
            for (it in {
                    submit: !0,
                    reset: !0
                }) t.pseudos[it] = ar(it);
            return bi.prototype = t.filters = t.pseudos, t.setFilters = new bi, ft = r.tokenize = function(n, i) {
                var e, f, s, o, u, h, c, l = hi[n + " "];
                if (l) return i ? 0 : l.slice(0);
                for (u = n, h = [], c = t.preFilter; u;) {
                    (!e || (f = ir.exec(u))) && (f && (u = u.slice(f[0].length) || u), h.push(s = []));
                    e = !1;
                    (f = rr.exec(u)) && (e = f.shift(), s.push({
                        value: e,
                        type: f[0].replace(lt, " ")
                    }), u = u.slice(e.length));
                    for (o in t.filter)(f = at[o].exec(u)) && (!c[o] || (f = c[o](f))) && (e = f.shift(), s.push({
                        value: e,
                        type: o,
                        matches: f
                    }), u = u.slice(e.length));
                    if (!e) break
                }
                return i ? u.length : u ? r.error(n) : hi(n, h).slice(0)
            }, pt = r.compile = function(n, t) {
                var r, u = [],
                    e = [],
                    i = ci[n + " "];
                if (!i) {
                    for (t || (t = ft(n)), r = t.length; r--;) i = fi(t[r]), i[f] ? u.push(i) : e.push(i);
                    i = ci(n, yr(e, u));
                    i.selector = n
                }
                return i
            }, oi = r.select = function(n, i, r, f) {
                var s, e, o, a, v, c = "function" == typeof n && n,
                    h = !f && ft(n = c.selector || n);
                if (r = r || [], 1 === h.length) {
                    if (e = h[0] = h[0].slice(0), e.length > 2 && "ID" === (o = e[0]).type && u.getById && 9 === i.nodeType && l && t.relative[e[1].type]) {
                        if (i = (t.find.ID(o.matches[0].replace(y, p), i) || [])[0], !i) return r;
                        c && (i = i.parentNode);
                        n = n.slice(e.shift().value.length)
                    }
                    for (s = at.needsContext.test(n) ? 0 : e.length; s--;) {
                        if (o = e[s], t.relative[a = o.type]) break;
                        if ((v = t.find[a]) && (f = v(o.matches[0].replace(y, p), dt.test(e[0].type) && ti(i.parentNode) || i))) {
                            if (e.splice(s, 1), n = f.length && vt(e), !n) return b.apply(r, f), r;
                            break
                        }
                    }
                }
                return (c || pt(n, h))(f, i, !l, r, dt.test(n) && ti(i.parentNode) || i), r
            }, u.sortStable = f.split("").sort(wt).join("") === f, u.detectDuplicates = !!rt, k(), u.sortDetached = v(function(n) {
                return 1 & n.compareDocumentPosition(o.createElement("div"))
            }), v(function(n) {
                return n.innerHTML = "<a href='#'><\/a>", "#" === n.firstChild.getAttribute("href")
            }) || ni("type|href|height|width", function(n, t, i) {
                if (!i) return n.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), u.attributes && v(function(n) {
                return n.innerHTML = "<input/>", n.firstChild.setAttribute("value", ""), "" === n.firstChild.getAttribute("value")
            }) || ni("value", function(n, t, i) {
                if (!i && "input" === n.nodeName.toLowerCase()) return n.defaultValue
            }), v(function(n) {
                return null == n.getAttribute("disabled")
            }) || ni(bt, function(n, t, i) {
                var r;
                if (!i) return n[t] === !0 ? t.toLowerCase() : (r = n.getAttributeNode(t)) && r.specified ? r.value : null
            }), r
        }(n);
        i.find = y;
        i.expr = y.selectors;
        i.expr[":"] = i.expr.pseudos;
        i.unique = y.uniqueSort;
        i.text = y.getText;
        i.isXMLDoc = y.isXML;
        i.contains = y.contains;
        var di = i.expr.match.needsContext,
            gi = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            ef = /^.[^:#\[\.,]*$/;
        i.filter = function(n, t, r) {
            var u = t[0];
            return r && (n = ":not(" + n + ")"), 1 === t.length && 1 === u.nodeType ? i.find.matchesSelector(u, n) ? [u] : [] : i.find.matches(n, i.grep(t, function(n) {
                return 1 === n.nodeType
            }))
        };
        i.fn.extend({
            find: function(n) {
                var t, u = this.length,
                    r = [],
                    f = this;
                if ("string" != typeof n) return this.pushStack(i(n).filter(function() {
                    for (t = 0; u > t; t++)
                        if (i.contains(f[t], this)) return !0
                }));
                for (t = 0; u > t; t++) i.find(n, f[t], r);
                return r = this.pushStack(u > 1 ? i.unique(r) : r), r.selector = this.selector ? this.selector + " " + n : n, r
            },
            filter: function(n) {
                return this.pushStack(ui(this, n || [], !1))
            },
            not: function(n) {
                return this.pushStack(ui(this, n || [], !0))
            },
            is: function(n) {
                return !!ui(this, "string" == typeof n && di.test(n) ? i(n) : n || [], !1).length
            }
        });
        nr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
        tr = i.fn.init = function(n, t) {
            var r, f;
            if (!n) return this;
            if ("string" == typeof n) {
                if (r = "<" === n[0] && ">" === n[n.length - 1] && n.length >= 3 ? [null, n, null] : nr.exec(n), !r || !r[1] && t) return !t || t.jquery ? (t || ot).find(n) : this.constructor(t).find(n);
                if (r[1]) {
                    if (t = t instanceof i ? t[0] : t, i.merge(this, i.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : u, !0)), gi.test(r[1]) && i.isPlainObject(t))
                        for (r in t) i.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this
                }
                return f = u.getElementById(r[2]), f && f.parentNode && (this.length = 1, this[0] = f), this.context = u, this.selector = n, this
            }
            return n.nodeType ? (this.context = this[0] = n, this.length = 1, this) : i.isFunction(n) ? "undefined" != typeof ot.ready ? ot.ready(n) : n(i) : (void 0 !== n.selector && (this.selector = n.selector, this.context = n.context), i.makeArray(n, this))
        };
        tr.prototype = i.fn;
        ot = i(u);
        ir = /^(?:parents|prev(?:Until|All))/;
        rr = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
        i.extend({
            dir: function(n, t, r) {
                for (var u = [], f = void 0 !== r;
                    (n = n[t]) && 9 !== n.nodeType;)
                    if (1 === n.nodeType) {
                        if (f && i(n).is(r)) break;
                        u.push(n)
                    }
                return u
            },
            sibling: function(n, t) {
                for (var i = []; n; n = n.nextSibling) 1 === n.nodeType && n !== t && i.push(n);
                return i
            }
        });
        i.fn.extend({
            has: function(n) {
                var t = i(n, this),
                    r = t.length;
                return this.filter(function() {
                    for (var n = 0; r > n; n++)
                        if (i.contains(this, t[n])) return !0
                })
            },
            closest: function(n, t) {
                for (var r, f = 0, o = this.length, u = [], e = di.test(n) || "string" != typeof n ? i(n, t || this.context) : 0; o > f; f++)
                    for (r = this[f]; r && r !== t; r = r.parentNode)
                        if (r.nodeType < 11 && (e ? e.index(r) > -1 : 1 === r.nodeType && i.find.matchesSelector(r, n))) {
                            u.push(r);
                            break
                        }
                return this.pushStack(u.length > 1 ? i.unique(u) : u)
            },
            index: function(n) {
                return n ? "string" == typeof n ? ft.call(i(n), this[0]) : ft.call(this, n.jquery ? n[0] : n) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(n, t) {
                return this.pushStack(i.unique(i.merge(this.get(), i(n, t))))
            },
            addBack: function(n) {
                return this.add(null == n ? this.prevObject : this.prevObject.filter(n))
            }
        });
        i.each({
            parent: function(n) {
                var t = n.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(n) {
                return i.dir(n, "parentNode")
            },
            parentsUntil: function(n, t, r) {
                return i.dir(n, "parentNode", r)
            },
            next: function(n) {
                return ur(n, "nextSibling")
            },
            prev: function(n) {
                return ur(n, "previousSibling")
            },
            nextAll: function(n) {
                return i.dir(n, "nextSibling")
            },
            prevAll: function(n) {
                return i.dir(n, "previousSibling")
            },
            nextUntil: function(n, t, r) {
                return i.dir(n, "nextSibling", r)
            },
            prevUntil: function(n, t, r) {
                return i.dir(n, "previousSibling", r)
            },
            siblings: function(n) {
                return i.sibling((n.parentNode || {}).firstChild, n)
            },
            children: function(n) {
                return i.sibling(n.firstChild)
            },
            contents: function(n) {
                return n.contentDocument || i.merge([], n.childNodes)
            }
        }, function(n, t) {
            i.fn[n] = function(r, u) {
                var f = i.map(this, t, r);
                return "Until" !== n.slice(-5) && (u = r), u && "string" == typeof u && (f = i.filter(u, f)), this.length > 1 && (rr[n] || i.unique(f), ir.test(n) && f.reverse()), this.pushStack(f)
            }
        });
        c = /\S+/g;
        fi = {};
        i.Callbacks = function(n) {
            n = "string" == typeof n ? fi[n] || of(n) : i.extend({}, n);
            var u, h, o, c, f, e, t = [],
                r = !n.once && [],
                l = function(i) {
                    for (u = n.memory && i, h = !0, e = c || 0, c = 0, f = t.length, o = !0; t && f > e; e++)
                        if (t[e].apply(i[0], i[1]) === !1 && n.stopOnFalse) {
                            u = !1;
                            break
                        }
                    o = !1;
                    t && (r ? r.length && l(r.shift()) : u ? t = [] : s.disable())
                },
                s = {
                    add: function() {
                        if (t) {
                            var r = t.length;
                            ! function e(r) {
                                i.each(r, function(r, u) {
                                    var f = i.type(u);
                                    "function" === f ? n.unique && s.has(u) || t.push(u) : u && u.length && "string" !== f && e(u)
                                })
                            }(arguments);
                            o ? f = t.length : u && (c = r, l(u))
                        }
                        return this
                    },
                    remove: function() {
                        return t && i.each(arguments, function(n, r) {
                            for (var u;
                                (u = i.inArray(r, t, u)) > -1;) t.splice(u, 1), o && (f >= u && f--, e >= u && e--)
                        }), this
                    },
                    has: function(n) {
                        return n ? i.inArray(n, t) > -1 : !(!t || !t.length)
                    },
                    empty: function() {
                        return t = [], f = 0, this
                    },
                    disable: function() {
                        return t = r = u = void 0, this
                    },
                    disabled: function() {
                        return !t
                    },
                    lock: function() {
                        return r = void 0, u || s.disable(), this
                    },
                    locked: function() {
                        return !r
                    },
                    fireWith: function(n, i) {
                        return !t || h && !r || (i = i || [], i = [n, i.slice ? i.slice() : i], o ? r.push(i) : l(i)), this
                    },
                    fire: function() {
                        return s.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!h
                    }
                };
            return s
        };
        i.extend({
            Deferred: function(n) {
                var u = [
                        ["resolve", "done", i.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", i.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", i.Callbacks("memory")]
                    ],
                    f = "pending",
                    r = {
                        state: function() {
                            return f
                        },
                        always: function() {
                            return t.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var n = arguments;
                            return i.Deferred(function(f) {
                                i.each(u, function(u, e) {
                                    var o = i.isFunction(n[u]) && n[u];
                                    t[e[1]](function() {
                                        var n = o && o.apply(this, arguments);
                                        n && i.isFunction(n.promise) ? n.promise().done(f.resolve).fail(f.reject).progress(f.notify) : f[e[0] + "With"](this === r ? f.promise() : this, o ? [n] : arguments)
                                    })
                                });
                                n = null
                            }).promise()
                        },
                        promise: function(n) {
                            return null != n ? i.extend(n, r) : r
                        }
                    },
                    t = {};
                return r.pipe = r.then, i.each(u, function(n, i) {
                    var e = i[2],
                        o = i[3];
                    r[i[1]] = e.add;
                    o && e.add(function() {
                        f = o
                    }, u[1 ^ n][2].disable, u[2][2].lock);
                    t[i[0]] = function() {
                        return t[i[0] + "With"](this === t ? r : this, arguments), this
                    };
                    t[i[0] + "With"] = e.fireWith
                }), r.promise(t), n && n.call(t, t), t
            },
            when: function(n) {
                var t = 0,
                    u = a.call(arguments),
                    r = u.length,
                    e = 1 !== r || n && i.isFunction(n.promise) ? r : 0,
                    f = 1 === e ? n : i.Deferred(),
                    h = function(n, t, i) {
                        return function(r) {
                            t[n] = this;
                            i[n] = arguments.length > 1 ? a.call(arguments) : r;
                            i === o ? f.notifyWith(t, i) : --e || f.resolveWith(t, i)
                        }
                    },
                    o, c, s;
                if (r > 1)
                    for (o = new Array(r), c = new Array(r), s = new Array(r); r > t; t++) u[t] && i.isFunction(u[t].promise) ? u[t].promise().done(h(t, s, u)).fail(f.reject).progress(h(t, c, o)) : --e;
                return e || f.resolveWith(s, u), f.promise()
            }
        });
        i.fn.ready = function(n) {
            return i.ready.promise().done(n), this
        };
        i.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(n) {
                n ? i.readyWait++ : i.ready(!0)
            },
            ready: function(n) {
                (n === !0 ? --i.readyWait : i.isReady) || (i.isReady = !0, n !== !0 && --i.readyWait > 0 || (st.resolveWith(u, [i]), i.fn.triggerHandler && (i(u).triggerHandler("ready"), i(u).off("ready"))))
            }
        });
        i.ready.promise = function(t) {
            return st || (st = i.Deferred(), "complete" === u.readyState ? setTimeout(i.ready) : (u.addEventListener("DOMContentLoaded", ht, !1), n.addEventListener("load", ht, !1))), st.promise(t)
        };
        i.ready.promise();
        l = i.access = function(n, t, r, u, f, e, o) {
            var s = 0,
                c = n.length,
                h = null == r;
            if ("object" === i.type(r)) {
                f = !0;
                for (s in r) i.access(n, t, s, r[s], !0, e, o)
            } else if (void 0 !== u && (f = !0, i.isFunction(u) || (o = !0), h && (o ? (t.call(n, u), t = null) : (h = t, t = function(n, t, r) {
                    return h.call(i(n), r)
                })), t))
                for (; c > s; s++) t(n[s], r, o ? u : u.call(n[s], s, t(n[s], r)));
            return f ? n : h ? t.call(n) : c ? t(n[0], r) : e
        };
        i.acceptData = function(n) {
            return 1 === n.nodeType || 9 === n.nodeType || !+n.nodeType
        };
        v.uid = 1;
        v.accepts = i.acceptData;
        v.prototype = {
            key: function(n) {
                if (!v.accepts(n)) return 0;
                var r = {},
                    t = n[this.expando];
                if (!t) {
                    t = v.uid++;
                    try {
                        r[this.expando] = {
                            value: t
                        };
                        Object.defineProperties(n, r)
                    } catch (u) {
                        r[this.expando] = t;
                        i.extend(n, r)
                    }
                }
                return this.cache[t] || (this.cache[t] = {}), t
            },
            set: function(n, t, r) {
                var f, e = this.key(n),
                    u = this.cache[e];
                if ("string" == typeof t) u[t] = r;
                else if (i.isEmptyObject(u)) i.extend(this.cache[e], t);
                else
                    for (f in t) u[f] = t[f];
                return u
            },
            get: function(n, t) {
                var i = this.cache[this.key(n)];
                return void 0 === t ? i : i[t]
            },
            access: function(n, t, r) {
                var u;
                return void 0 === t || t && "string" == typeof t && void 0 === r ? (u = this.get(n, t), void 0 !== u ? u : this.get(n, i.camelCase(t))) : (this.set(n, t, r), void 0 !== r ? r : t)
            },
            remove: function(n, t) {
                var u, r, f, o = this.key(n),
                    e = this.cache[o];
                if (void 0 === t) this.cache[o] = {};
                else
                    for (i.isArray(t) ? r = t.concat(t.map(i.camelCase)) : (f = i.camelCase(t), (t in e) ? r = [t, f] : (r = f, r = (r in e) ? [r] : r.match(c) || [])), u = r.length; u--;) delete e[r[u]]
            },
            hasData: function(n) {
                return !i.isEmptyObject(this.cache[n[this.expando]] || {})
            },
            discard: function(n) {
                n[this.expando] && delete this.cache[n[this.expando]]
            }
        };
        var r = new v,
            e = new v,
            sf = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            hf = /([A-Z])/g;
        i.extend({
            hasData: function(n) {
                return e.hasData(n) || r.hasData(n)
            },
            data: function(n, t, i) {
                return e.access(n, t, i)
            },
            removeData: function(n, t) {
                e.remove(n, t)
            },
            _data: function(n, t, i) {
                return r.access(n, t, i)
            },
            _removeData: function(n, t) {
                r.remove(n, t)
            }
        });
        i.fn.extend({
            data: function(n, t) {
                var o, f, s, u = this[0],
                    h = u && u.attributes;
                if (void 0 === n) {
                    if (this.length && (s = e.get(u), 1 === u.nodeType && !r.get(u, "hasDataAttrs"))) {
                        for (o = h.length; o--;) h[o] && (f = h[o].name, 0 === f.indexOf("data-") && (f = i.camelCase(f.slice(5)), fr(u, f, s[f])));
                        r.set(u, "hasDataAttrs", !0)
                    }
                    return s
                }
                return "object" == typeof n ? this.each(function() {
                    e.set(this, n)
                }) : l(this, function(t) {
                    var r, f = i.camelCase(n);
                    if (u && void 0 === t) {
                        if ((r = e.get(u, n), void 0 !== r) || (r = e.get(u, f), void 0 !== r) || (r = fr(u, f, void 0), void 0 !== r)) return r
                    } else this.each(function() {
                        var i = e.get(this, f);
                        e.set(this, f, t); - 1 !== n.indexOf("-") && void 0 !== i && e.set(this, n, t)
                    })
                }, null, t, arguments.length > 1, null, !0)
            },
            removeData: function(n) {
                return this.each(function() {
                    e.remove(this, n)
                })
            }
        });
        i.extend({
            queue: function(n, t, u) {
                var f;
                if (n) return (t = (t || "fx") + "queue", f = r.get(n, t), u && (!f || i.isArray(u) ? f = r.access(n, t, i.makeArray(u)) : f.push(u)), f || [])
            },
            dequeue: function(n, t) {
                t = t || "fx";
                var r = i.queue(n, t),
                    e = r.length,
                    u = r.shift(),
                    f = i._queueHooks(n, t),
                    o = function() {
                        i.dequeue(n, t)
                    };
                "inprogress" === u && (u = r.shift(), e--);
                u && ("fx" === t && r.unshift("inprogress"), delete f.stop, u.call(n, o, f));
                !e && f && f.empty.fire()
            },
            _queueHooks: function(n, t) {
                var u = t + "queueHooks";
                return r.get(n, u) || r.access(n, u, {
                    empty: i.Callbacks("once memory").add(function() {
                        r.remove(n, [t + "queue", u])
                    })
                })
            }
        });
        i.fn.extend({
            queue: function(n, t) {
                var r = 2;
                return "string" != typeof n && (t = n, n = "fx", r--), arguments.length < r ? i.queue(this[0], n) : void 0 === t ? this : this.each(function() {
                    var r = i.queue(this, n, t);
                    i._queueHooks(this, n);
                    "fx" === n && "inprogress" !== r[0] && i.dequeue(this, n)
                })
            },
            dequeue: function(n) {
                return this.each(function() {
                    i.dequeue(this, n)
                })
            },
            clearQueue: function(n) {
                return this.queue(n || "fx", [])
            },
            promise: function(n, t) {
                var u, e = 1,
                    o = i.Deferred(),
                    f = this,
                    s = this.length,
                    h = function() {
                        --e || o.resolveWith(f, [f])
                    };
                for ("string" != typeof n && (t = n, n = void 0), n = n || "fx"; s--;) u = r.get(f[s], n + "queueHooks"), u && u.empty && (e++, u.empty.add(h));
                return h(), o.promise(t)
            }
        });
        var ct = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            p = ["Top", "Right", "Bottom", "Left"],
            tt = function(n, t) {
                return n = t || n, "none" === i.css(n, "display") || !i.contains(n.ownerDocument, n)
            },
            er = /^(?:checkbox|radio)$/i;
        ! function() {
            var i = u.createDocumentFragment(),
                n = i.appendChild(u.createElement("div")),
                t = u.createElement("input");
            t.setAttribute("type", "radio");
            t.setAttribute("checked", "checked");
            t.setAttribute("name", "t");
            n.appendChild(t);
            f.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked;
            n.innerHTML = "<textarea>x<\/textarea>";
            f.noCloneChecked = !!n.cloneNode(!0).lastChild.defaultValue
        }();
        b = "undefined";
        f.focusinBubbles = "onfocusin" in n;
        var cf = /^key/,
            lf = /^(?:mouse|pointer|contextmenu)|click/,
            or = /^(?:focusinfocus|focusoutblur)$/,
            sr = /^([^.]*)(?:\.(.+)|)$/;
        i.event = {
            global: {},
            add: function(n, t, u, f, e) {
                var v, y, w, p, k, h, s, l, o, d, g, a = r.get(n);
                if (a)
                    for (u.handler && (v = u, u = v.handler, e = v.selector), u.guid || (u.guid = i.guid++), (p = a.events) || (p = a.events = {}), (y = a.handle) || (y = a.handle = function(t) {
                            if (typeof i !== b && i.event.triggered !== t.type) return i.event.dispatch.apply(n, arguments)
                        }), t = (t || "").match(c) || [""], k = t.length; k--;) w = sr.exec(t[k]) || [], o = g = w[1], d = (w[2] || "").split(".").sort(), o && (s = i.event.special[o] || {}, o = (e ? s.delegateType : s.bindType) || o, s = i.event.special[o] || {}, h = i.extend({
                        type: o,
                        origType: g,
                        data: f,
                        handler: u,
                        guid: u.guid,
                        selector: e,
                        needsContext: e && i.expr.match.needsContext.test(e),
                        namespace: d.join(".")
                    }, v), (l = p[o]) || (l = p[o] = [], l.delegateCount = 0, s.setup && s.setup.call(n, f, d, y) !== !1 || n.addEventListener && n.addEventListener(o, y, !1)), s.add && (s.add.call(n, h), h.handler.guid || (h.handler.guid = u.guid)), e ? l.splice(l.delegateCount++, 0, h) : l.push(h), i.event.global[o] = !0)
            },
            remove: function(n, t, u, f, e) {
                var p, k, h, v, w, s, l, a, o, b, d, y = r.hasData(n) && r.get(n);
                if (y && (v = y.events)) {
                    for (t = (t || "").match(c) || [""], w = t.length; w--;)
                        if (h = sr.exec(t[w]) || [], o = d = h[1], b = (h[2] || "").split(".").sort(), o) {
                            for (l = i.event.special[o] || {}, o = (f ? l.delegateType : l.bindType) || o, a = v[o] || [], h = h[2] && new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)"), k = p = a.length; p--;) s = a[p], !e && d !== s.origType || u && u.guid !== s.guid || h && !h.test(s.namespace) || f && f !== s.selector && ("**" !== f || !s.selector) || (a.splice(p, 1), s.selector && a.delegateCount--, l.remove && l.remove.call(n, s));
                            k && !a.length && (l.teardown && l.teardown.call(n, b, y.handle) !== !1 || i.removeEvent(n, o, y.handle), delete v[o])
                        } else
                            for (o in v) i.event.remove(n, o + t[w], u, f, !0);
                    i.isEmptyObject(v) && (delete y.handle, r.remove(n, "events"))
                }
            },
            trigger: function(t, f, e, o) {
                var w, s, c, b, a, v, l, p = [e || u],
                    h = ii.call(t, "type") ? t.type : t,
                    y = ii.call(t, "namespace") ? t.namespace.split(".") : [];
                if (s = c = e = e || u, 3 !== e.nodeType && 8 !== e.nodeType && !or.test(h + i.event.triggered) && (h.indexOf(".") >= 0 && (y = h.split("."), h = y.shift(), y.sort()), a = h.indexOf(":") < 0 && "on" + h, t = t[i.expando] ? t : new i.Event(h, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = y.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = e), f = null == f ? [t] : i.makeArray(f, [t]), l = i.event.special[h] || {}, o || !l.trigger || l.trigger.apply(e, f) !== !1)) {
                    if (!o && !l.noBubble && !i.isWindow(e)) {
                        for (b = l.delegateType || h, or.test(b + h) || (s = s.parentNode); s; s = s.parentNode) p.push(s), c = s;
                        c === (e.ownerDocument || u) && p.push(c.defaultView || c.parentWindow || n)
                    }
                    for (w = 0;
                        (s = p[w++]) && !t.isPropagationStopped();) t.type = w > 1 ? b : l.bindType || h, v = (r.get(s, "events") || {})[t.type] && r.get(s, "handle"), v && v.apply(s, f), v = a && s[a], v && v.apply && i.acceptData(s) && (t.result = v.apply(s, f), t.result === !1 && t.preventDefault());
                    return t.type = h, o || t.isDefaultPrevented() || l._default && l._default.apply(p.pop(), f) !== !1 || !i.acceptData(e) || a && i.isFunction(e[h]) && !i.isWindow(e) && (c = e[a], c && (e[a] = null), i.event.triggered = h, e[h](), i.event.triggered = void 0, c && (e[a] = c)), t.result
                }
            },
            dispatch: function(n) {
                n = i.event.fix(n);
                var o, s, e, u, t, h = [],
                    c = a.call(arguments),
                    l = (r.get(this, "events") || {})[n.type] || [],
                    f = i.event.special[n.type] || {};
                if (c[0] = n, n.delegateTarget = this, !f.preDispatch || f.preDispatch.call(this, n) !== !1) {
                    for (h = i.event.handlers.call(this, n, l), o = 0;
                        (u = h[o++]) && !n.isPropagationStopped();)
                        for (n.currentTarget = u.elem, s = 0;
                            (t = u.handlers[s++]) && !n.isImmediatePropagationStopped();)(!n.namespace_re || n.namespace_re.test(t.namespace)) && (n.handleObj = t, n.data = t.data, e = ((i.event.special[t.origType] || {}).handle || t.handler).apply(u.elem, c), void 0 !== e && (n.result = e) === !1 && (n.preventDefault(), n.stopPropagation()));
                    return f.postDispatch && f.postDispatch.call(this, n), n.result
                }
            },
            handlers: function(n, t) {
                var e, u, f, o, h = [],
                    s = t.delegateCount,
                    r = n.target;
                if (s && r.nodeType && (!n.button || "click" !== n.type))
                    for (; r !== this; r = r.parentNode || this)
                        if (r.disabled !== !0 || "click" !== n.type) {
                            for (u = [], e = 0; s > e; e++) o = t[e], f = o.selector + " ", void 0 === u[f] && (u[f] = o.needsContext ? i(f, this).index(r) >= 0 : i.find(f, this, null, [r]).length), u[f] && u.push(o);
                            u.length && h.push({
                                elem: r,
                                handlers: u
                            })
                        }
                return s < t.length && h.push({
                    elem: this,
                    handlers: t.slice(s)
                }), h
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(n, t) {
                    return null == n.which && (n.which = null != t.charCode ? t.charCode : t.keyCode), n
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(n, t) {
                    var e, i, r, f = t.button;
                    return null == n.pageX && null != t.clientX && (e = n.target.ownerDocument || u, i = e.documentElement, r = e.body, n.pageX = t.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), n.pageY = t.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), n.which || void 0 === f || (n.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), n
                }
            },
            fix: function(n) {
                if (n[i.expando]) return n;
                var f, e, o, r = n.type,
                    s = n,
                    t = this.fixHooks[r];
                for (t || (this.fixHooks[r] = t = lf.test(r) ? this.mouseHooks : cf.test(r) ? this.keyHooks : {}), o = t.props ? this.props.concat(t.props) : this.props, n = new i.Event(s), f = o.length; f--;) e = o[f], n[e] = s[e];
                return n.target || (n.target = u), 3 === n.target.nodeType && (n.target = n.target.parentNode), t.filter ? t.filter(n, s) : n
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== hr() && this.focus) return (this.focus(), !1)
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === hr() && this.blur) return (this.blur(), !1)
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if ("checkbox" === this.type && this.click && i.nodeName(this, "input")) return (this.click(), !1)
                    },
                    _default: function(n) {
                        return i.nodeName(n.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(n) {
                        void 0 !== n.result && n.originalEvent && (n.originalEvent.returnValue = n.result)
                    }
                }
            },
            simulate: function(n, t, r, u) {
                var f = i.extend(new i.Event, r, {
                    type: n,
                    isSimulated: !0,
                    originalEvent: {}
                });
                u ? i.event.trigger(f, null, t) : i.event.dispatch.call(t, f);
                f.isDefaultPrevented() && r.preventDefault()
            }
        };
        i.removeEvent = function(n, t, i) {
            n.removeEventListener && n.removeEventListener(t, i, !1)
        };
        i.Event = function(n, t) {
            return this instanceof i.Event ? (n && n.type ? (this.originalEvent = n, this.type = n.type, this.isDefaultPrevented = n.defaultPrevented || void 0 === n.defaultPrevented && n.returnValue === !1 ? lt : k) : this.type = n, t && i.extend(this, t), this.timeStamp = n && n.timeStamp || i.now(), void(this[i.expando] = !0)) : new i.Event(n, t)
        };
        i.Event.prototype = {
            isDefaultPrevented: k,
            isPropagationStopped: k,
            isImmediatePropagationStopped: k,
            preventDefault: function() {
                var n = this.originalEvent;
                this.isDefaultPrevented = lt;
                n && n.preventDefault && n.preventDefault()
            },
            stopPropagation: function() {
                var n = this.originalEvent;
                this.isPropagationStopped = lt;
                n && n.stopPropagation && n.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var n = this.originalEvent;
                this.isImmediatePropagationStopped = lt;
                n && n.stopImmediatePropagation && n.stopImmediatePropagation();
                this.stopPropagation()
            }
        };
        i.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(n, t) {
            i.event.special[n] = {
                delegateType: t,
                bindType: t,
                handle: function(n) {
                    var u, f = this,
                        r = n.relatedTarget,
                        e = n.handleObj;
                    return (!r || r !== f && !i.contains(f, r)) && (n.type = e.origType, u = e.handler.apply(this, arguments), n.type = t), u
                }
            }
        });
        f.focusinBubbles || i.each({
            focus: "focusin",
            blur: "focusout"
        }, function(n, t) {
            var u = function(n) {
                i.event.simulate(t, n.target, i.event.fix(n), !0)
            };
            i.event.special[t] = {
                setup: function() {
                    var i = this.ownerDocument || this,
                        f = r.access(i, t);
                    f || i.addEventListener(n, u, !0);
                    r.access(i, t, (f || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this,
                        f = r.access(i, t) - 1;
                    f ? r.access(i, t, f) : (i.removeEventListener(n, u, !0), r.remove(i, t))
                }
            }
        });
        i.fn.extend({
            on: function(n, t, r, u, f) {
                var e, o;
                if ("object" == typeof n) {
                    "string" != typeof t && (r = r || t, t = void 0);
                    for (o in n) this.on(o, t, r, n[o], f);
                    return this
                }
                if (null == r && null == u ? (u = t, r = t = void 0) : null == u && ("string" == typeof t ? (u = r, r = void 0) : (u = r, r = t, t = void 0)), u === !1) u = k;
                else if (!u) return this;
                return 1 === f && (e = u, u = function(n) {
                    return i().off(n), e.apply(this, arguments)
                }, u.guid = e.guid || (e.guid = i.guid++)), this.each(function() {
                    i.event.add(this, n, u, r, t)
                })
            },
            one: function(n, t, i, r) {
                return this.on(n, t, i, r, 1)
            },
            off: function(n, t, r) {
                var u, f;
                if (n && n.preventDefault && n.handleObj) return u = n.handleObj, i(n.delegateTarget).off(u.namespace ? u.origType + "." + u.namespace : u.origType, u.selector, u.handler), this;
                if ("object" == typeof n) {
                    for (f in n) this.off(f, t, n[f]);
                    return this
                }
                return (t === !1 || "function" == typeof t) && (r = t, t = void 0), r === !1 && (r = k), this.each(function() {
                    i.event.remove(this, n, r, t)
                })
            },
            trigger: function(n, t) {
                return this.each(function() {
                    i.event.trigger(n, t, this)
                })
            },
            triggerHandler: function(n, t) {
                var r = this[0];
                if (r) return i.event.trigger(n, t, r, !0)
            }
        });
        var cr = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            lr = /<([\w:]+)/,
            af = /<|&#?\w+;/,
            vf = /<(?:script|style|link)/i,
            yf = /checked\s*(?:[^=]|=\s*.checked.)/i,
            ar = /^$|\/(?:java|ecma)script/i,
            pf = /^true\/(.*)/,
            wf = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            h = {
                option: [1, "<select multiple='multiple'>", "<\/select>"],
                thead: [1, "<table>", "<\/table>"],
                col: [2, "<table><colgroup>", "<\/colgroup><\/table>"],
                tr: [2, "<table><tbody>", "<\/tbody><\/table>"],
                td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"],
                _default: [0, "", ""]
            };
        h.optgroup = h.option;
        h.tbody = h.tfoot = h.colgroup = h.caption = h.thead;
        h.th = h.td;
        i.extend({
            clone: function(n, t, r) {
                var u, c, s, e, h = n.cloneNode(!0),
                    l = i.contains(n.ownerDocument, n);
                if (!(f.noCloneChecked || 1 !== n.nodeType && 11 !== n.nodeType || i.isXMLDoc(n)))
                    for (e = o(h), s = o(n), u = 0, c = s.length; c > u; u++) df(s[u], e[u]);
                if (t)
                    if (r)
                        for (s = s || o(n), e = e || o(h), u = 0, c = s.length; c > u; u++) yr(s[u], e[u]);
                    else yr(n, h);
                return e = o(h, "script"), e.length > 0 && ei(e, !l && o(n, "script")), h
            },
            buildFragment: function(n, t, r, u) {
                for (var f, e, y, l, p, a, s = t.createDocumentFragment(), v = [], c = 0, w = n.length; w > c; c++)
                    if (f = n[c], f || 0 === f)
                        if ("object" === i.type(f)) i.merge(v, f.nodeType ? [f] : f);
                        else if (af.test(f)) {
                    for (e = e || s.appendChild(t.createElement("div")), y = (lr.exec(f) || ["", ""])[1].toLowerCase(), l = h[y] || h._default, e.innerHTML = l[1] + f.replace(cr, "<$1><\/$2>") + l[2], a = l[0]; a--;) e = e.lastChild;
                    i.merge(v, e.childNodes);
                    e = s.firstChild;
                    e.textContent = ""
                } else v.push(t.createTextNode(f));
                for (s.textContent = "", c = 0; f = v[c++];)
                    if ((!u || -1 === i.inArray(f, u)) && (p = i.contains(f.ownerDocument, f), e = o(s.appendChild(f), "script"), p && ei(e), r))
                        for (a = 0; f = e[a++];) ar.test(f.type || "") && r.push(f);
                return s
            },
            cleanData: function(n) {
                for (var f, t, o, u, h = i.event.special, s = 0; void 0 !== (t = n[s]); s++) {
                    if (i.acceptData(t) && (u = t[r.expando], u && (f = r.cache[u]))) {
                        if (f.events)
                            for (o in f.events) h[o] ? i.event.remove(t, o) : i.removeEvent(t, o, f.handle);
                        r.cache[u] && delete r.cache[u]
                    }
                    delete e.cache[t[e.expando]]
                }
            }
        });
        i.fn.extend({
            text: function(n) {
                return l(this, function(n) {
                    return void 0 === n ? i.text(this) : this.empty().each(function() {
                        (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = n)
                    })
                }, null, n, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(n) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = vr(this, n);
                        t.appendChild(n)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(n) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = vr(this, n);
                        t.insertBefore(n, t.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(n) {
                    this.parentNode && this.parentNode.insertBefore(n, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(n) {
                    this.parentNode && this.parentNode.insertBefore(n, this.nextSibling)
                })
            },
            remove: function(n, t) {
                for (var r, f = n ? i.filter(n, this) : this, u = 0; null != (r = f[u]); u++) t || 1 !== r.nodeType || i.cleanData(o(r)), r.parentNode && (t && i.contains(r.ownerDocument, r) && ei(o(r, "script")), r.parentNode.removeChild(r));
                return this
            },
            empty: function() {
                for (var n, t = 0; null != (n = this[t]); t++) 1 === n.nodeType && (i.cleanData(o(n, !1)), n.textContent = "");
                return this
            },
            clone: function(n, t) {
                return n = null == n ? !1 : n, t = null == t ? n : t, this.map(function() {
                    return i.clone(this, n, t)
                })
            },
            html: function(n) {
                return l(this, function(n) {
                    var t = this[0] || {},
                        r = 0,
                        u = this.length;
                    if (void 0 === n && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof n && !vf.test(n) && !h[(lr.exec(n) || ["", ""])[1].toLowerCase()]) {
                        n = n.replace(cr, "<$1><\/$2>");
                        try {
                            for (; u > r; r++) t = this[r] || {}, 1 === t.nodeType && (i.cleanData(o(t, !1)), t.innerHTML = n);
                            t = 0
                        } catch (f) {}
                    }
                    t && this.empty().append(n)
                }, null, n, arguments.length)
            },
            replaceWith: function() {
                var n = arguments[0];
                return this.domManip(arguments, function(t) {
                    n = this.parentNode;
                    i.cleanData(o(this));
                    n && n.replaceChild(t, this)
                }), n && (n.length || n.nodeType) ? this : this.remove()
            },
            detach: function(n) {
                return this.remove(n, !0)
            },
            domManip: function(n, t) {
                n = bi.apply([], n);
                var h, v, s, c, u, y, e = 0,
                    l = this.length,
                    w = this,
                    b = l - 1,
                    a = n[0],
                    p = i.isFunction(a);
                if (p || l > 1 && "string" == typeof a && !f.checkClone && yf.test(a)) return this.each(function(i) {
                    var r = w.eq(i);
                    p && (n[0] = a.call(this, i, r.html()));
                    r.domManip(n, t)
                });
                if (l && (h = i.buildFragment(n, this[0].ownerDocument, !1, this), v = h.firstChild, 1 === h.childNodes.length && (h = v), v)) {
                    for (s = i.map(o(h, "script"), bf), c = s.length; l > e; e++) u = h, e !== b && (u = i.clone(u, !0, !0), c && i.merge(s, o(u, "script"))), t.call(this[e], u, e);
                    if (c)
                        for (y = s[s.length - 1].ownerDocument, i.map(s, kf), e = 0; c > e; e++) u = s[e], ar.test(u.type || "") && !r.access(u, "globalEval") && i.contains(y, u) && (u.src ? i._evalUrl && i._evalUrl(u.src) : i.globalEval(u.textContent.replace(wf, "")))
                }
                return this
            }
        });
        i.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(n, t) {
            i.fn[n] = function(n) {
                for (var u, f = [], e = i(n), o = e.length - 1, r = 0; o >= r; r++) u = r === o ? this : this.clone(!0), i(e[r])[t](u), ti.apply(f, u.get());
                return this.pushStack(f)
            }
        });
        oi = {};
        var wr = /^margin/,
            hi = new RegExp("^(" + ct + ")(?!px)[a-z%]+$", "i"),
            vt = function(t) {
                return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : n.getComputedStyle(t, null)
            };
        ! function() {
            var s, o, e = u.documentElement,
                r = u.createElement("div"),
                t = u.createElement("div");
            if (t.style) {
                t.style.backgroundClip = "content-box";
                t.cloneNode(!0).style.backgroundClip = "";
                f.clearCloneStyle = "content-box" === t.style.backgroundClip;
                r.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute";
                r.appendChild(t);

                function h() {
                    t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute";
                    t.innerHTML = "";
                    e.appendChild(r);
                    var i = n.getComputedStyle(t, null);
                    s = "1%" !== i.top;
                    o = "4px" === i.width;
                    e.removeChild(r)
                }
                n.getComputedStyle && i.extend(f, {
                    pixelPosition: function() {
                        return h(), s
                    },
                    boxSizingReliable: function() {
                        return null == o && h(), o
                    },
                    reliableMarginRight: function() {
                        var f, i = t.appendChild(u.createElement("div"));
                        return i.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", t.style.width = "1px", e.appendChild(r), f = !parseFloat(n.getComputedStyle(i, null).marginRight), e.removeChild(r), t.removeChild(i), f
                    }
                })
            }
        }();
        i.swap = function(n, t, i, r) {
            var f, u, e = {};
            for (u in t) e[u] = n.style[u], n.style[u] = t[u];
            f = i.apply(n, r || []);
            for (u in t) n.style[u] = e[u];
            return f
        };
        var gf = /^(none|table(?!-c[ea]).+)/,
            ne = new RegExp("^(" + ct + ")(.*)$", "i"),
            te = new RegExp("^([+-])=(" + ct + ")", "i"),
            ie = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            kr = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            dr = ["Webkit", "O", "Moz", "ms"];
        i.extend({
            cssHooks: {
                opacity: {
                    get: function(n, t) {
                        if (t) {
                            var i = it(n, "opacity");
                            return "" === i ? "1" : i
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: "cssFloat"
            },
            style: function(n, t, r, u) {
                if (n && 3 !== n.nodeType && 8 !== n.nodeType && n.style) {
                    var o, h, e, s = i.camelCase(t),
                        c = n.style;
                    return t = i.cssProps[s] || (i.cssProps[s] = gr(c, s)), e = i.cssHooks[t] || i.cssHooks[s], void 0 === r ? e && "get" in e && void 0 !== (o = e.get(n, !1, u)) ? o : c[t] : (h = typeof r, "string" === h && (o = te.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(i.css(n, t)), h = "number"), null != r && r === r && ("number" !== h || i.cssNumber[s] || (r += "px"), f.clearCloneStyle || "" !== r || 0 !== t.indexOf("background") || (c[t] = "inherit"), e && "set" in e && void 0 === (r = e.set(n, r, u)) || (c[t] = r)), void 0)
                }
            },
            css: function(n, t, r, u) {
                var f, s, e, o = i.camelCase(t);
                return t = i.cssProps[o] || (i.cssProps[o] = gr(n.style, o)), e = i.cssHooks[t] || i.cssHooks[o], e && "get" in e && (f = e.get(n, !0, r)), void 0 === f && (f = it(n, t, u)), "normal" === f && t in kr && (f = kr[t]), "" === r || r ? (s = parseFloat(f), r === !0 || i.isNumeric(s) ? s || 0 : f) : f
            }
        });
        i.each(["height", "width"], function(n, t) {
            i.cssHooks[t] = {
                get: function(n, r, u) {
                    if (r) return gf.test(i.css(n, "display")) && 0 === n.offsetWidth ? i.swap(n, ie, function() {
                        return iu(n, t, u)
                    }) : iu(n, t, u)
                },
                set: function(n, r, u) {
                    var f = u && vt(n);
                    return nu(n, r, u ? tu(n, t, u, "border-box" === i.css(n, "boxSizing", !1, f), f) : 0)
                }
            }
        });
        i.cssHooks.marginRight = br(f.reliableMarginRight, function(n, t) {
            if (t) return i.swap(n, {
                display: "inline-block"
            }, it, [n, "marginRight"])
        });
        i.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(n, t) {
            i.cssHooks[n + t] = {
                expand: function(i) {
                    for (var r = 0, f = {}, u = "string" == typeof i ? i.split(" ") : [i]; 4 > r; r++) f[n + p[r] + t] = u[r] || u[r - 2] || u[0];
                    return f
                }
            };
            wr.test(n) || (i.cssHooks[n + t].set = nu)
        });
        i.fn.extend({
            css: function(n, t) {
                return l(this, function(n, t, r) {
                    var f, e, o = {},
                        u = 0;
                    if (i.isArray(t)) {
                        for (f = vt(n), e = t.length; e > u; u++) o[t[u]] = i.css(n, t[u], !1, f);
                        return o
                    }
                    return void 0 !== r ? i.style(n, t, r) : i.css(n, t)
                }, n, t, arguments.length > 1)
            },
            show: function() {
                return ru(this, !0)
            },
            hide: function() {
                return ru(this)
            },
            toggle: function(n) {
                return "boolean" == typeof n ? n ? this.show() : this.hide() : this.each(function() {
                    tt(this) ? i(this).show() : i(this).hide()
                })
            }
        });
        i.Tween = s;
        s.prototype = {
            constructor: s,
            init: function(n, t, r, u, f, e) {
                this.elem = n;
                this.prop = r;
                this.easing = f || "swing";
                this.options = t;
                this.start = this.now = this.cur();
                this.end = u;
                this.unit = e || (i.cssNumber[r] ? "" : "px")
            },
            cur: function() {
                var n = s.propHooks[this.prop];
                return n && n.get ? n.get(this) : s.propHooks._default.get(this)
            },
            run: function(n) {
                var r, t = s.propHooks[this.prop];
                return this.pos = r = this.options.duration ? i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : n, this.now = (this.end - this.start) * r + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), t && t.set ? t.set(this) : s.propHooks._default.set(this), this
            }
        };
        s.prototype.init.prototype = s.prototype;
        s.propHooks = {
            _default: {
                get: function(n) {
                    var t;
                    return null == n.elem[n.prop] || n.elem.style && null != n.elem.style[n.prop] ? (t = i.css(n.elem, n.prop, ""), t && "auto" !== t ? t : 0) : n.elem[n.prop]
                },
                set: function(n) {
                    i.fx.step[n.prop] ? i.fx.step[n.prop](n) : n.elem.style && (null != n.elem.style[i.cssProps[n.prop]] || i.cssHooks[n.prop]) ? i.style(n.elem, n.prop, n.now + n.unit) : n.elem[n.prop] = n.now
                }
            }
        };
        s.propHooks.scrollTop = s.propHooks.scrollLeft = {
            set: function(n) {
                n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now)
            }
        };
        i.easing = {
            linear: function(n) {
                return n
            },
            swing: function(n) {
                return .5 - Math.cos(n * Math.PI) / 2
            }
        };
        i.fx = s.prototype.init;
        i.fx.step = {};
        var d, yt, re = /^(?:toggle|show|hide)$/,
            uu = new RegExp("^(?:([+-])=|)(" + ct + ")([a-z%]*)$", "i"),
            ue = /queueHooks$/,
            pt = [fe],
            rt = {
                "*": [function(n, t) {
                    var f = this.createTween(n, t),
                        s = f.cur(),
                        r = uu.exec(t),
                        e = r && r[3] || (i.cssNumber[n] ? "" : "px"),
                        u = (i.cssNumber[n] || "px" !== e && +s) && uu.exec(i.css(f.elem, n)),
                        o = 1,
                        h = 20;
                    if (u && u[3] !== e) {
                        e = e || u[3];
                        r = r || [];
                        u = +s || 1;
                        do o = o || ".5", u /= o, i.style(f.elem, n, u + e); while (o !== (o = f.cur() / s) && 1 !== o && --h)
                    }
                    return r && (u = f.start = +u || +s || 0, f.unit = e, f.end = r[1] ? u + (r[1] + 1) * r[2] : +r[2]), f
                }]
            };
        i.Animation = i.extend(ou, {
            tweener: function(n, t) {
                i.isFunction(n) ? (t = n, n = ["*"]) : n = n.split(" ");
                for (var r, u = 0, f = n.length; f > u; u++) r = n[u], rt[r] = rt[r] || [], rt[r].unshift(t)
            },
            prefilter: function(n, t) {
                t ? pt.unshift(n) : pt.push(n)
            }
        });
        i.speed = function(n, t, r) {
            var u = n && "object" == typeof n ? i.extend({}, n) : {
                complete: r || !r && t || i.isFunction(n) && n,
                duration: n,
                easing: r && t || t && !i.isFunction(t) && t
            };
            return u.duration = i.fx.off ? 0 : "number" == typeof u.duration ? u.duration : u.duration in i.fx.speeds ? i.fx.speeds[u.duration] : i.fx.speeds._default, (null == u.queue || u.queue === !0) && (u.queue = "fx"), u.old = u.complete, u.complete = function() {
                i.isFunction(u.old) && u.old.call(this);
                u.queue && i.dequeue(this, u.queue)
            }, u
        };
        i.fn.extend({
            fadeTo: function(n, t, i, r) {
                return this.filter(tt).css("opacity", 0).show().end().animate({
                    opacity: t
                }, n, i, r)
            },
            animate: function(n, t, u, f) {
                var s = i.isEmptyObject(n),
                    o = i.speed(t, u, f),
                    e = function() {
                        var t = ou(this, i.extend({}, n), o);
                        (s || r.get(this, "finish")) && t.stop(!0)
                    };
                return e.finish = e, s || o.queue === !1 ? this.each(e) : this.queue(o.queue, e)
            },
            stop: function(n, t, u) {
                var f = function(n) {
                    var t = n.stop;
                    delete n.stop;
                    t(u)
                };
                return "string" != typeof n && (u = t, t = n, n = void 0), t && n !== !1 && this.queue(n || "fx", []), this.each(function() {
                    var s = !0,
                        t = null != n && n + "queueHooks",
                        o = i.timers,
                        e = r.get(this);
                    if (t) e[t] && e[t].stop && f(e[t]);
                    else
                        for (t in e) e[t] && e[t].stop && ue.test(t) && f(e[t]);
                    for (t = o.length; t--;) o[t].elem !== this || null != n && o[t].queue !== n || (o[t].anim.stop(u), s = !1, o.splice(t, 1));
                    (s || !u) && i.dequeue(this, n)
                })
            },
            finish: function(n) {
                return n !== !1 && (n = n || "fx"), this.each(function() {
                    var t, e = r.get(this),
                        u = e[n + "queue"],
                        o = e[n + "queueHooks"],
                        f = i.timers,
                        s = u ? u.length : 0;
                    for (e.finish = !0, i.queue(this, n, []), o && o.stop && o.stop.call(this, !0), t = f.length; t--;) f[t].elem === this && f[t].queue === n && (f[t].anim.stop(!0), f.splice(t, 1));
                    for (t = 0; s > t; t++) u[t] && u[t].finish && u[t].finish.call(this);
                    delete e.finish
                })
            }
        });
        i.each(["toggle", "show", "hide"], function(n, t) {
            var r = i.fn[t];
            i.fn[t] = function(n, i, u) {
                return null == n || "boolean" == typeof n ? r.apply(this, arguments) : this.animate(wt(t, !0), n, i, u)
            }
        });
        i.each({
            slideDown: wt("show"),
            slideUp: wt("hide"),
            slideToggle: wt("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(n, t) {
            i.fn[n] = function(n, i, r) {
                return this.animate(t, n, i, r)
            }
        });
        i.timers = [];
        i.fx.tick = function() {
            var r, n = 0,
                t = i.timers;
            for (d = i.now(); n < t.length; n++) r = t[n], r() || t[n] !== r || t.splice(n--, 1);
            t.length || i.fx.stop();
            d = void 0
        };
        i.fx.timer = function(n) {
            i.timers.push(n);
            n() ? i.fx.start() : i.timers.pop()
        };
        i.fx.interval = 13;
        i.fx.start = function() {
            yt || (yt = setInterval(i.fx.tick, i.fx.interval))
        };
        i.fx.stop = function() {
            clearInterval(yt);
            yt = null
        };
        i.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        };
        i.fn.delay = function(n, t) {
                return n = i.fx ? i.fx.speeds[n] || n : n, t = t || "fx", this.queue(t, function(t, i) {
                    var r = setTimeout(t, n);
                    i.stop = function() {
                        clearTimeout(r)
                    }
                })
            },
            function() {
                var n = u.createElement("input"),
                    t = u.createElement("select"),
                    i = t.appendChild(u.createElement("option"));
                n.type = "checkbox";
                f.checkOn = "" !== n.value;
                f.optSelected = i.selected;
                t.disabled = !0;
                f.optDisabled = !i.disabled;
                n = u.createElement("input");
                n.value = "t";
                n.type = "radio";
                f.radioValue = "t" === n.value
            }();
        g = i.expr.attrHandle;
        i.fn.extend({
            attr: function(n, t) {
                return l(this, i.attr, n, t, arguments.length > 1)
            },
            removeAttr: function(n) {
                return this.each(function() {
                    i.removeAttr(this, n)
                })
            }
        });
        i.extend({
            attr: function(n, t, r) {
                var u, f, e = n.nodeType;
                if (n && 3 !== e && 8 !== e && 2 !== e) return typeof n.getAttribute === b ? i.prop(n, t, r) : (1 === e && i.isXMLDoc(n) || (t = t.toLowerCase(), u = i.attrHooks[t] || (i.expr.match.bool.test(t) ? su : oe)), void 0 === r ? u && "get" in u && null !== (f = u.get(n, t)) ? f : (f = i.find.attr(n, t), null == f ? void 0 : f) : null !== r ? u && "set" in u && void 0 !== (f = u.set(n, r, t)) ? f : (n.setAttribute(t, r + ""), r) : void i.removeAttr(n, t))
            },
            removeAttr: function(n, t) {
                var r, u, e = 0,
                    f = t && t.match(c);
                if (f && 1 === n.nodeType)
                    while (r = f[e++]) u = i.propFix[r] || r, i.expr.match.bool.test(r) && (n[u] = !1), n.removeAttribute(r)
            },
            attrHooks: {
                type: {
                    set: function(n, t) {
                        if (!f.radioValue && "radio" === t && i.nodeName(n, "input")) {
                            var r = n.value;
                            return n.setAttribute("type", t), r && (n.value = r), t
                        }
                    }
                }
            }
        });
        su = {
            set: function(n, t, r) {
                return t === !1 ? i.removeAttr(n, r) : n.setAttribute(r, r), r
            }
        };
        i.each(i.expr.match.bool.source.match(/\w+/g), function(n, t) {
            var r = g[t] || i.find.attr;
            g[t] = function(n, t, i) {
                var u, f;
                return i || (f = g[t], g[t] = u, u = null != r(n, t, i) ? t.toLowerCase() : null, g[t] = f), u
            }
        });
        hu = /^(?:input|select|textarea|button)$/i;
        i.fn.extend({
            prop: function(n, t) {
                return l(this, i.prop, n, t, arguments.length > 1)
            },
            removeProp: function(n) {
                return this.each(function() {
                    delete this[i.propFix[n] || n]
                })
            }
        });
        i.extend({
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function(n, t, r) {
                var f, u, o, e = n.nodeType;
                if (n && 3 !== e && 8 !== e && 2 !== e) return o = 1 !== e || !i.isXMLDoc(n), o && (t = i.propFix[t] || t, u = i.propHooks[t]), void 0 !== r ? u && "set" in u && void 0 !== (f = u.set(n, r, t)) ? f : n[t] = r : u && "get" in u && null !== (f = u.get(n, t)) ? f : n[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(n) {
                        return n.hasAttribute("tabindex") || hu.test(n.nodeName) || n.href ? n.tabIndex : -1
                    }
                }
            }
        });
        f.optSelected || (i.propHooks.selected = {
            get: function(n) {
                var t = n.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            }
        });
        i.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            i.propFix[this.toLowerCase()] = this
        });
        bt = /[\t\r\n\f]/g;
        i.fn.extend({
            addClass: function(n) {
                var o, t, r, u, s, f, h = "string" == typeof n && n,
                    e = 0,
                    l = this.length;
                if (i.isFunction(n)) return this.each(function(t) {
                    i(this).addClass(n.call(this, t, this.className))
                });
                if (h)
                    for (o = (n || "").match(c) || []; l > e; e++)
                        if (t = this[e], r = 1 === t.nodeType && (t.className ? (" " + t.className + " ").replace(bt, " ") : " ")) {
                            for (s = 0; u = o[s++];) r.indexOf(" " + u + " ") < 0 && (r += u + " ");
                            f = i.trim(r);
                            t.className !== f && (t.className = f)
                        }
                return this
            },
            removeClass: function(n) {
                var o, t, r, u, s, f, h = 0 === arguments.length || "string" == typeof n && n,
                    e = 0,
                    l = this.length;
                if (i.isFunction(n)) return this.each(function(t) {
                    i(this).removeClass(n.call(this, t, this.className))
                });
                if (h)
                    for (o = (n || "").match(c) || []; l > e; e++)
                        if (t = this[e], r = 1 === t.nodeType && (t.className ? (" " + t.className + " ").replace(bt, " ") : "")) {
                            for (s = 0; u = o[s++];)
                                while (r.indexOf(" " + u + " ") >= 0) r = r.replace(" " + u + " ", " ");
                            f = n ? i.trim(r) : "";
                            t.className !== f && (t.className = f)
                        }
                return this
            },
            toggleClass: function(n, t) {
                var u = typeof n;
                return "boolean" == typeof t && "string" === u ? t ? this.addClass(n) : this.removeClass(n) : this.each(i.isFunction(n) ? function(r) {
                    i(this).toggleClass(n.call(this, r, this.className, t), t)
                } : function() {
                    if ("string" === u)
                        for (var t, e = 0, f = i(this), o = n.match(c) || []; t = o[e++];) f.hasClass(t) ? f.removeClass(t) : f.addClass(t);
                    else(u === b || "boolean" === u) && (this.className && r.set(this, "__className__", this.className), this.className = this.className || n === !1 ? "" : r.get(this, "__className__") || "")
                })
            },
            hasClass: function(n) {
                for (var i = " " + n + " ", t = 0, r = this.length; r > t; t++)
                    if (1 === this[t].nodeType && (" " + this[t].className + " ").replace(bt, " ").indexOf(i) >= 0) return !0;
                return !1
            }
        });
        cu = /\r/g;
        i.fn.extend({
            val: function(n) {
                var t, r, f, u = this[0];
                return arguments.length ? (f = i.isFunction(n), this.each(function(r) {
                    var u;
                    1 === this.nodeType && (u = f ? n.call(this, r, i(this).val()) : n, null == u ? u = "" : "number" == typeof u ? u += "" : i.isArray(u) && (u = i.map(u, function(n) {
                        return null == n ? "" : n + ""
                    })), t = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, u, "value") || (this.value = u))
                })) : u ? (t = i.valHooks[u.type] || i.valHooks[u.nodeName.toLowerCase()], t && "get" in t && void 0 !== (r = t.get(u, "value")) ? r : (r = u.value, "string" == typeof r ? r.replace(cu, "") : null == r ? "" : r)) : void 0
            }
        });
        i.extend({
            valHooks: {
                option: {
                    get: function(n) {
                        var t = i.find.attr(n, "value");
                        return null != t ? t : i.trim(i.text(n))
                    }
                },
                select: {
                    get: function(n) {
                        for (var o, t, s = n.options, r = n.selectedIndex, u = "select-one" === n.type || 0 > r, h = u ? null : [], c = u ? r + 1 : s.length, e = 0 > r ? c : u ? r : 0; c > e; e++)
                            if (t = s[e], !(!t.selected && e !== r || (f.optDisabled ? t.disabled : null !== t.getAttribute("disabled")) || t.parentNode.disabled && i.nodeName(t.parentNode, "optgroup"))) {
                                if (o = i(t).val(), u) return o;
                                h.push(o)
                            }
                        return h
                    },
                    set: function(n, t) {
                        for (var u, r, f = n.options, e = i.makeArray(t), o = f.length; o--;) r = f[o], (r.selected = i.inArray(r.value, e) >= 0) && (u = !0);
                        return u || (n.selectedIndex = -1), e
                    }
                }
            }
        });
        i.each(["radio", "checkbox"], function() {
            i.valHooks[this] = {
                set: function(n, t) {
                    if (i.isArray(t)) return n.checked = i.inArray(i(n).val(), t) >= 0
                }
            };
            f.checkOn || (i.valHooks[this].get = function(n) {
                return null === n.getAttribute("value") ? "on" : n.value
            })
        });
        i.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(n, t) {
            i.fn[t] = function(n, i) {
                return arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t)
            }
        });
        i.fn.extend({
            hover: function(n, t) {
                return this.mouseenter(n).mouseleave(t || n)
            },
            bind: function(n, t, i) {
                return this.on(n, null, t, i)
            },
            unbind: function(n, t) {
                return this.off(n, null, t)
            },
            delegate: function(n, t, i, r) {
                return this.on(t, n, i, r)
            },
            undelegate: function(n, t, i) {
                return 1 === arguments.length ? this.off(n, "**") : this.off(t, n || "**", i)
            }
        });
        kt = i.now();
        dt = /\?/;
        i.parseJSON = function(n) {
            return JSON.parse(n + "")
        };
        i.parseXML = function(n) {
            var t, r;
            if (!n || "string" != typeof n) return null;
            try {
                r = new DOMParser;
                t = r.parseFromString(n, "text/xml")
            } catch (u) {
                t = void 0
            }
            return (!t || t.getElementsByTagName("parsererror").length) && i.error("Invalid XML: " + n), t
        };
        var se = /#.*$/,
            lu = /([?&])_=[^&]*/,
            he = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            ce = /^(?:GET|HEAD)$/,
            le = /^\/\//,
            au = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            vu = {},
            ci = {},
            yu = "*/".concat("*"),
            li = n.location.href,
            nt = au.exec(li.toLowerCase()) || [];
        i.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: li,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(nt[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": yu,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": i.parseJSON,
                    "text xml": i.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(n, t) {
                return t ? ai(ai(n, i.ajaxSettings), t) : ai(i.ajaxSettings, n)
            },
            ajaxPrefilter: pu(vu),
            ajaxTransport: pu(ci),
            ajax: function(n, t) {
                function p(n, t, s, h) {
                    var v, it, tt, p, nt, c = t;
                    2 !== e && (e = 2, b && clearTimeout(b), l = void 0, w = h || "", u.readyState = n > 0 ? 4 : 0, v = n >= 200 && 300 > n || 304 === n, s && (p = ae(r, u, s)), p = ve(r, p, u, v), v ? (r.ifModified && (nt = u.getResponseHeader("Last-Modified"), nt && (i.lastModified[f] = nt), nt = u.getResponseHeader("etag"), nt && (i.etag[f] = nt)), 204 === n || "HEAD" === r.type ? c = "nocontent" : 304 === n ? c = "notmodified" : (c = p.state, it = p.data, tt = p.error, v = !tt)) : (tt = c, (n || !c) && (c = "error", 0 > n && (n = 0))), u.status = n, u.statusText = (t || c) + "", v ? d.resolveWith(o, [it, c, u]) : d.rejectWith(o, [u, c, tt]), u.statusCode(y), y = void 0, a && k.trigger(v ? "ajaxSuccess" : "ajaxError", [u, r, v ? it : tt]), g.fireWith(o, [u, c]), a && (k.trigger("ajaxComplete", [u, r]), --i.active || i.event.trigger("ajaxStop")))
                }
                "object" == typeof n && (t = n, n = void 0);
                t = t || {};
                var l, f, w, v, b, s, a, h, r = i.ajaxSetup({}, t),
                    o = r.context || r,
                    k = r.context && (o.nodeType || o.jquery) ? i(o) : i.event,
                    d = i.Deferred(),
                    g = i.Callbacks("once memory"),
                    y = r.statusCode || {},
                    tt = {},
                    it = {},
                    e = 0,
                    rt = "canceled",
                    u = {
                        readyState: 0,
                        getResponseHeader: function(n) {
                            var t;
                            if (2 === e) {
                                if (!v)
                                    for (v = {}; t = he.exec(w);) v[t[1].toLowerCase()] = t[2];
                                t = v[n.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return 2 === e ? w : null
                        },
                        setRequestHeader: function(n, t) {
                            var i = n.toLowerCase();
                            return e || (n = it[i] = it[i] || n, tt[n] = t), this
                        },
                        overrideMimeType: function(n) {
                            return e || (r.mimeType = n), this
                        },
                        statusCode: function(n) {
                            var t;
                            if (n)
                                if (2 > e)
                                    for (t in n) y[t] = [y[t], n[t]];
                                else u.always(n[u.status]);
                            return this
                        },
                        abort: function(n) {
                            var t = n || rt;
                            return l && l.abort(t), p(0, t), this
                        }
                    };
                if (d.promise(u).complete = g.add, u.success = u.done, u.error = u.fail, r.url = ((n || r.url || li) + "").replace(se, "").replace(le, nt[1] + "//"), r.type = t.method || t.type || r.method || r.type, r.dataTypes = i.trim(r.dataType || "*").toLowerCase().match(c) || [""], null == r.crossDomain && (s = au.exec(r.url.toLowerCase()), r.crossDomain = !(!s || s[1] === nt[1] && s[2] === nt[2] && (s[3] || ("http:" === s[1] ? "80" : "443")) === (nt[3] || ("http:" === nt[1] ? "80" : "443")))), r.data && r.processData && "string" != typeof r.data && (r.data = i.param(r.data, r.traditional)), wu(vu, r, t, u), 2 === e) return u;
                a = i.event && r.global;
                a && 0 == i.active++ && i.event.trigger("ajaxStart");
                r.type = r.type.toUpperCase();
                r.hasContent = !ce.test(r.type);
                f = r.url;
                r.hasContent || (r.data && (f = r.url += (dt.test(f) ? "&" : "?") + r.data, delete r.data), r.cache === !1 && (r.url = lu.test(f) ? f.replace(lu, "$1_=" + kt++) : f + (dt.test(f) ? "&" : "?") + "_=" + kt++));
                r.ifModified && (i.lastModified[f] && u.setRequestHeader("If-Modified-Since", i.lastModified[f]), i.etag[f] && u.setRequestHeader("If-None-Match", i.etag[f]));
                (r.data && r.hasContent && r.contentType !== !1 || t.contentType) && u.setRequestHeader("Content-Type", r.contentType);
                u.setRequestHeader("Accept", r.dataTypes[0] && r.accepts[r.dataTypes[0]] ? r.accepts[r.dataTypes[0]] + ("*" !== r.dataTypes[0] ? ", " + yu + "; q=0.01" : "") : r.accepts["*"]);
                for (h in r.headers) u.setRequestHeader(h, r.headers[h]);
                if (r.beforeSend && (r.beforeSend.call(o, u, r) === !1 || 2 === e)) return u.abort();
                rt = "abort";
                for (h in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) u[h](r[h]);
                if (l = wu(ci, r, t, u)) {
                    u.readyState = 1;
                    a && k.trigger("ajaxSend", [u, r]);
                    r.async && r.timeout > 0 && (b = setTimeout(function() {
                        u.abort("timeout")
                    }, r.timeout));
                    try {
                        e = 1;
                        l.send(tt, p)
                    } catch (ut) {
                        if (!(2 > e)) throw ut;
                        p(-1, ut)
                    }
                } else p(-1, "No Transport");
                return u
            },
            getJSON: function(n, t, r) {
                return i.get(n, t, r, "json")
            },
            getScript: function(n, t) {
                return i.get(n, void 0, t, "script")
            }
        });
        i.each(["get", "post"], function(n, t) {
            i[t] = function(n, r, u, f) {
                return i.isFunction(r) && (f = f || u, u = r, r = void 0), i.ajax({
                    url: n,
                    type: t,
                    dataType: f,
                    data: r,
                    success: u
                })
            }
        });
        i._evalUrl = function(n) {
            return i.ajax({
                url: n,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                throws: !0
            })
        };
        i.fn.extend({
            wrapAll: function(n) {
                var t;
                return i.isFunction(n) ? this.each(function(t) {
                    i(this).wrapAll(n.call(this, t))
                }) : (this[0] && (t = i(n, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var n = this; n.firstElementChild;) n = n.firstElementChild;
                    return n
                }).append(this)), this)
            },
            wrapInner: function(n) {
                return this.each(i.isFunction(n) ? function(t) {
                    i(this).wrapInner(n.call(this, t))
                } : function() {
                    var t = i(this),
                        r = t.contents();
                    r.length ? r.wrapAll(n) : t.append(n)
                })
            },
            wrap: function(n) {
                var t = i.isFunction(n);
                return this.each(function(r) {
                    i(this).wrapAll(t ? n.call(this, r) : n)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    i.nodeName(this, "body") || i(this).replaceWith(this.childNodes)
                }).end()
            }
        });
        i.expr.filters.hidden = function(n) {
            return n.offsetWidth <= 0 && n.offsetHeight <= 0
        };
        i.expr.filters.visible = function(n) {
            return !i.expr.filters.hidden(n)
        };
        var ye = /%20/g,
            pe = /\[\]$/,
            bu = /\r?\n/g,
            we = /^(?:submit|button|image|reset|file)$/i,
            be = /^(?:input|select|textarea|keygen)/i;
        i.param = function(n, t) {
            var r, u = [],
                f = function(n, t) {
                    t = i.isFunction(t) ? t() : null == t ? "" : t;
                    u[u.length] = encodeURIComponent(n) + "=" + encodeURIComponent(t)
                };
            if (void 0 === t && (t = i.ajaxSettings && i.ajaxSettings.traditional), i.isArray(n) || n.jquery && !i.isPlainObject(n)) i.each(n, function() {
                f(this.name, this.value)
            });
            else
                for (r in n) vi(r, n[r], t, f);
            return u.join("&").replace(ye, "+")
        };
        i.fn.extend({
            serialize: function() {
                return i.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var n = i.prop(this, "elements");
                    return n ? i.makeArray(n) : this
                }).filter(function() {
                    var n = this.type;
                    return this.name && !i(this).is(":disabled") && be.test(this.nodeName) && !we.test(n) && (this.checked || !er.test(n))
                }).map(function(n, t) {
                    var r = i(this).val();
                    return null == r ? null : i.isArray(r) ? i.map(r, function(n) {
                        return {
                            name: t.name,
                            value: n.replace(bu, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: r.replace(bu, "\r\n")
                    }
                }).get()
            }
        });
        i.ajaxSettings.xhr = function() {
            try {
                return new XMLHttpRequest
            } catch (n) {}
        };
        var ke = 0,
            gt = {},
            de = {
                0: 200,
                1223: 204
            },
            ut = i.ajaxSettings.xhr();
        return n.attachEvent && n.attachEvent("onunload", function() {
            for (var n in gt) gt[n]()
        }), f.cors = !!ut && "withCredentials" in ut, f.ajax = ut = !!ut, i.ajaxTransport(function(n) {
            var t;
            if (f.cors || ut && !n.crossDomain) return {
                send: function(i, r) {
                    var f, u = n.xhr(),
                        e = ++ke;
                    if (u.open(n.type, n.url, n.async, n.username, n.password), n.xhrFields)
                        for (f in n.xhrFields) u[f] = n.xhrFields[f];
                    n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType);
                    n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (f in i) u.setRequestHeader(f, i[f]);
                    t = function(n) {
                        return function() {
                            t && (delete gt[e], t = u.onload = u.onerror = null, "abort" === n ? u.abort() : "error" === n ? r(u.status, u.statusText) : r(de[u.status] || u.status, u.statusText, "string" == typeof u.responseText ? {
                                text: u.responseText
                            } : void 0, u.getAllResponseHeaders()))
                        }
                    };
                    u.onload = t();
                    u.onerror = t("error");
                    t = gt[e] = t("abort");
                    try {
                        u.send(n.hasContent && n.data || null)
                    } catch (o) {
                        if (t) throw o;
                    }
                },
                abort: function() {
                    t && t()
                }
            }
        }), i.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(n) {
                    return i.globalEval(n), n
                }
            }
        }), i.ajaxPrefilter("script", function(n) {
            void 0 === n.cache && (n.cache = !1);
            n.crossDomain && (n.type = "GET")
        }), i.ajaxTransport("script", function(n) {
            if (n.crossDomain) {
                var r, t;
                return {
                    send: function(f, e) {
                        r = i("<script>").prop({
                            async: !0,
                            charset: n.scriptCharset,
                            src: n.url
                        }).on("load error", t = function(n) {
                            r.remove();
                            t = null;
                            n && e("error" === n.type ? 404 : 200, n.type)
                        });
                        u.head.appendChild(r[0])
                    },
                    abort: function() {
                        t && t()
                    }
                }
            }
        }), yi = [], ni = /(=)\?(?=&|$)|\?\?/, i.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var n = yi.pop() || i.expando + "_" + kt++;
                return this[n] = !0, n
            }
        }), i.ajaxPrefilter("json jsonp", function(t, r, u) {
            var f, o, e, s = t.jsonp !== !1 && (ni.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && ni.test(t.data) && "data");
            if (s || "jsonp" === t.dataTypes[0]) return (f = t.jsonpCallback = i.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(ni, "$1" + f) : t.jsonp !== !1 && (t.url += (dt.test(t.url) ? "&" : "?") + t.jsonp + "=" + f), t.converters["script json"] = function() {
                return e || i.error(f + " was not called"), e[0]
            }, t.dataTypes[0] = "json", o = n[f], n[f] = function() {
                e = arguments
            }, u.always(function() {
                n[f] = o;
                t[f] && (t.jsonpCallback = r.jsonpCallback, yi.push(f));
                e && i.isFunction(o) && o(e[0]);
                e = o = void 0
            }), "script")
        }), i.parseHTML = function(n, t, r) {
            if (!n || "string" != typeof n) return null;
            "boolean" == typeof t && (r = t, t = !1);
            t = t || u;
            var f = gi.exec(n),
                e = !r && [];
            return f ? [t.createElement(f[1])] : (f = i.buildFragment([n], t, e), e && e.length && i(e).remove(), i.merge([], f.childNodes))
        }, pi = i.fn.load, i.fn.load = function(n, t, r) {
            if ("string" != typeof n && pi) return pi.apply(this, arguments);
            var u, o, s, f = this,
                e = n.indexOf(" ");
            return e >= 0 && (u = i.trim(n.slice(e)), n = n.slice(0, e)), i.isFunction(t) ? (r = t, t = void 0) : t && "object" == typeof t && (o = "POST"), f.length > 0 && i.ajax({
                url: n,
                type: o,
                dataType: "html",
                data: t
            }).done(function(n) {
                s = arguments;
                f.html(u ? i("<div>").append(i.parseHTML(n)).find(u) : n)
            }).complete(r && function(n, t) {
                f.each(r, s || [n.responseText, t, n])
            }), this
        }, i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(n, t) {
            i.fn[t] = function(n) {
                return this.on(t, n)
            }
        }), i.expr.filters.animated = function(n) {
            return i.grep(i.timers, function(t) {
                return n === t.elem
            }).length
        }, wi = n.document.documentElement, i.offset = {
            setOffset: function(n, t, r) {
                var e, o, s, h, u, c, v, l = i.css(n, "position"),
                    a = i(n),
                    f = {};
                "static" === l && (n.style.position = "relative");
                u = a.offset();
                s = i.css(n, "top");
                c = i.css(n, "left");
                v = ("absolute" === l || "fixed" === l) && (s + c).indexOf("auto") > -1;
                v ? (e = a.position(), h = e.top, o = e.left) : (h = parseFloat(s) || 0, o = parseFloat(c) || 0);
                i.isFunction(t) && (t = t.call(n, r, u));
                null != t.top && (f.top = t.top - u.top + h);
                null != t.left && (f.left = t.left - u.left + o);
                "using" in t ? t.using.call(n, f) : a.css(f)
            }
        }, i.fn.extend({
            offset: function(n) {
                if (arguments.length) return void 0 === n ? this : this.each(function(t) {
                    i.offset.setOffset(this, n, t)
                });
                var r, f, t = this[0],
                    u = {
                        top: 0,
                        left: 0
                    },
                    e = t && t.ownerDocument;
                if (e) return r = e.documentElement, i.contains(r, t) ? (typeof t.getBoundingClientRect !== b && (u = t.getBoundingClientRect()), f = ku(e), {
                    top: u.top + f.pageYOffset - r.clientTop,
                    left: u.left + f.pageXOffset - r.clientLeft
                }) : u
            },
            position: function() {
                if (this[0]) {
                    var n, r, u = this[0],
                        t = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === i.css(u, "position") ? r = u.getBoundingClientRect() : (n = this.offsetParent(), r = this.offset(), i.nodeName(n[0], "html") || (t = n.offset()), t.top += i.css(n[0], "borderTopWidth", !0), t.left += i.css(n[0], "borderLeftWidth", !0)), {
                        top: r.top - t.top - i.css(u, "marginTop", !0),
                        left: r.left - t.left - i.css(u, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var n = this.offsetParent || wi; n && !i.nodeName(n, "html") && "static" === i.css(n, "position");) n = n.offsetParent;
                    return n || wi
                })
            }
        }), i.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, r) {
            var u = "pageYOffset" === r;
            i.fn[t] = function(i) {
                return l(this, function(t, i, f) {
                    var e = ku(t);
                    return void 0 === f ? e ? e[r] : t[i] : void(e ? e.scrollTo(u ? n.pageXOffset : f, u ? f : n.pageYOffset) : t[i] = f)
                }, t, i, arguments.length, null)
            }
        }), i.each(["top", "left"], function(n, t) {
            i.cssHooks[t] = br(f.pixelPosition, function(n, r) {
                if (r) return (r = it(n, t), hi.test(r) ? i(n).position()[t] + "px" : r)
            })
        }), i.each({
            Height: "height",
            Width: "width"
        }, function(n, t) {
            i.each({
                padding: "inner" + n,
                content: t,
                "": "outer" + n
            }, function(r, u) {
                i.fn[u] = function(u, f) {
                    var e = arguments.length && (r || "boolean" != typeof u),
                        o = r || (u === !0 || f === !0 ? "margin" : "border");
                    return l(this, function(t, r, u) {
                        var f;
                        return i.isWindow(t) ? t.document.documentElement["client" + n] : 9 === t.nodeType ? (f = t.documentElement, Math.max(t.body["scroll" + n], f["scroll" + n], t.body["offset" + n], f["offset" + n], f["client" + n])) : void 0 === u ? i.css(t, r, o) : i.style(t, r, u, o)
                    }, t, e ? u : void 0, e, null)
                }
            })
        }), i.fn.size = function() {
            return this.length
        }, i.fn.andSelf = i.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return i
        }), du = n.jQuery, gu = n.$, i.noConflict = function(t) {
            return n.$ === i && (n.$ = gu), t && n.jQuery === i && (n.jQuery = du), i
        }, typeof t === b && (n.jQuery = n.$ = i), i
    }), function(n) {
        "function" == typeof define && define.amd ? define(["jquery"], n) : n(jQuery)
    }(function(n) {
        n.ui = n.ui || {};
        n.ui.version = "1.12.1";
        var i = 0,
            t = Array.prototype.slice;
        n.cleanData = function(t) {
            return function(i) {
                for (var r, u, f = 0; null != (u = i[f]); f++) try {
                    r = n._data(u, "events");
                    r && r.remove && n(u).triggerHandler("remove")
                } catch (e) {}
                t(i)
            }
        }(n.cleanData);
        n.widget = function(t, i, r) {
            var f, u, o, h = {},
                e = t.split(".")[0],
                s;
            return t = t.split(".")[1], s = e + "-" + t, r || (r = i, i = n.Widget), n.isArray(r) && (r = n.extend.apply(null, [{}].concat(r))), n.expr[":"][s.toLowerCase()] = function(t) {
                return !!n.data(t, s)
            }, n[e] = n[e] || {}, f = n[e][t], u = n[e][t] = function(n, t) {
                return this._createWidget ? (arguments.length && this._createWidget(n, t), void 0) : new u(n, t)
            }, n.extend(u, f, {
                version: r.version,
                _proto: n.extend({}, r),
                _childConstructors: []
            }), o = new i, o.options = n.widget.extend({}, o.options), n.each(r, function(t, r) {
                return n.isFunction(r) ? (h[t] = function() {
                    function n() {
                        return i.prototype[t].apply(this, arguments)
                    }

                    function u(n) {
                        return i.prototype[t].apply(this, n)
                    }
                    return function() {
                        var t, i = this._super,
                            f = this._superApply;
                        return this._super = n, this._superApply = u, t = r.apply(this, arguments), this._super = i, this._superApply = f, t
                    }
                }(), void 0) : (h[t] = r, void 0)
            }), u.prototype = n.widget.extend(o, {
                widgetEventPrefix: f ? o.widgetEventPrefix || t : t
            }, h, {
                constructor: u,
                namespace: e,
                widgetName: t,
                widgetFullName: s
            }), f ? (n.each(f._childConstructors, function(t, i) {
                var r = i.prototype;
                n.widget(r.namespace + "." + r.widgetName, u, i._proto)
            }), delete f._childConstructors) : i._childConstructors.push(u), n.widget.bridge(t, u), u
        };
        n.widget.extend = function(i) {
            for (var r, u, e = t.call(arguments, 1), f = 0, o = e.length; o > f; f++)
                for (r in e[f]) u = e[f][r], e[f].hasOwnProperty(r) && void 0 !== u && (i[r] = n.isPlainObject(u) ? n.isPlainObject(i[r]) ? n.widget.extend({}, i[r], u) : n.widget.extend({}, u) : u);
            return i
        };
        n.widget.bridge = function(i, r) {
            var u = r.prototype.widgetFullName || i;
            n.fn[i] = function(f) {
                var s = "string" == typeof f,
                    o = t.call(arguments, 1),
                    e = this;
                return s ? this.length || "instance" !== f ? this.each(function() {
                    var t, r = n.data(this, u);
                    return "instance" === f ? (e = r, !1) : r ? n.isFunction(r[f]) && "_" !== f.charAt(0) ? (t = r[f].apply(r, o), t !== r && void 0 !== t ? (e = t && t.jquery ? e.pushStack(t.get()) : t, !1) : void 0) : n.error("no such method '" + f + "' for " + i + " widget instance") : n.error("cannot call methods on " + i + " prior to initialization; attempted to call method '" + f + "'")
                }) : e = void 0 : (o.length && (f = n.widget.extend.apply(null, [f].concat(o))), this.each(function() {
                    var t = n.data(this, u);
                    t ? (t.option(f || {}), t._init && t._init()) : n.data(this, u, new r(f, this))
                })), e
            }
        };
        n.Widget = function() {};
        n.Widget._childConstructors = [];
        n.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {
                classes: {},
                disabled: !1,
                create: null
            },
            _createWidget: function(t, r) {
                r = n(r || this.defaultElement || this)[0];
                this.element = n(r);
                this.uuid = i++;
                this.eventNamespace = "." + this.widgetName + this.uuid;
                this.bindings = n();
                this.hoverable = n();
                this.focusable = n();
                this.classesElementLookup = {};
                r !== this && (n.data(r, this.widgetFullName, this), this._on(!0, this.element, {
                    remove: function(n) {
                        n.target === r && this.destroy()
                    }
                }), this.document = n(r.style ? r.ownerDocument : r.document || r), this.window = n(this.document[0].defaultView || this.document[0].parentWindow));
                this.options = n.widget.extend({}, this.options, this._getCreateOptions(), t);
                this._create();
                this.options.disabled && this._setOptionDisabled(this.options.disabled);
                this._trigger("create", null, this._getCreateEventData());
                this._init()
            },
            _getCreateOptions: function() {
                return {}
            },
            _getCreateEventData: n.noop,
            _create: n.noop,
            _init: n.noop,
            destroy: function() {
                var t = this;
                this._destroy();
                n.each(this.classesElementLookup, function(n, i) {
                    t._removeClass(i, n)
                });
                this.element.off(this.eventNamespace).removeData(this.widgetFullName);
                this.widget().off(this.eventNamespace).removeAttr("aria-disabled");
                this.bindings.off(this.eventNamespace)
            },
            _destroy: n.noop,
            widget: function() {
                return this.element
            },
            option: function(t, i) {
                var r, u, f, e = t;
                if (0 === arguments.length) return n.widget.extend({}, this.options);
                if ("string" == typeof t)
                    if (e = {}, r = t.split("."), t = r.shift(), r.length) {
                        for (u = e[t] = n.widget.extend({}, this.options[t]), f = 0; r.length - 1 > f; f++) u[r[f]] = u[r[f]] || {}, u = u[r[f]];
                        if (t = r.pop(), 1 === arguments.length) return void 0 === u[t] ? null : u[t];
                        u[t] = i
                    } else {
                        if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
                        e[t] = i
                    }
                return this._setOptions(e), this
            },
            _setOptions: function(n) {
                var t;
                for (t in n) this._setOption(t, n[t]);
                return this
            },
            _setOption: function(n, t) {
                return "classes" === n && this._setOptionClasses(t), this.options[n] = t, "disabled" === n && this._setOptionDisabled(t), this
            },
            _setOptionClasses: function(t) {
                var i, u, r;
                for (i in t) r = this.classesElementLookup[i], t[i] !== this.options.classes[i] && r && r.length && (u = n(r.get()), this._removeClass(r, i), u.addClass(this._classes({
                    element: u,
                    keys: i,
                    classes: t,
                    add: !0
                })))
            },
            _setOptionDisabled: function(n) {
                this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!n);
                n && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
            },
            enable: function() {
                return this._setOptions({
                    disabled: !1
                })
            },
            disable: function() {
                return this._setOptions({
                    disabled: !0
                })
            },
            _classes: function(t) {
                function r(r, f) {
                    for (var o, e = 0; r.length > e; e++) o = u.classesElementLookup[r[e]] || n(), o = t.add ? n(n.unique(o.get().concat(t.element.get()))) : n(o.not(t.element).get()), u.classesElementLookup[r[e]] = o, i.push(r[e]), f && t.classes[r[e]] && i.push(t.classes[r[e]])
                }
                var i = [],
                    u = this;
                return t = n.extend({
                    element: this.element,
                    classes: this.options.classes || {}
                }, t), this._on(t.element, {
                    remove: "_untrackClassesElement"
                }), t.keys && r(t.keys.match(/\S+/g) || [], !0), t.extra && r(t.extra.match(/\S+/g) || []), i.join(" ")
            },
            _untrackClassesElement: function(t) {
                var i = this;
                n.each(i.classesElementLookup, function(r, u) {
                    -1 !== n.inArray(t.target, u) && (i.classesElementLookup[r] = n(u.not(t.target).get()))
                })
            },
            _removeClass: function(n, t, i) {
                return this._toggleClass(n, t, i, !1)
            },
            _addClass: function(n, t, i) {
                return this._toggleClass(n, t, i, !0)
            },
            _toggleClass: function(n, t, i, r) {
                r = "boolean" == typeof r ? r : i;
                var u = "string" == typeof n || null === n,
                    f = {
                        extra: u ? t : i,
                        keys: u ? n : t,
                        element: u ? this.element : n,
                        add: r
                    };
                return f.element.toggleClass(this._classes(f), r), this
            },
            _on: function(t, i, r) {
                var f, u = this;
                "boolean" != typeof t && (r = i, i = t, t = !1);
                r ? (i = f = n(i), this.bindings = this.bindings.add(i)) : (r = i, i = this.element, f = this.widget());
                n.each(r, function(r, e) {
                    function o() {
                        if (t || u.options.disabled !== !0 && !n(this).hasClass("ui-state-disabled")) return ("string" == typeof e ? u[e] : e).apply(u, arguments)
                    }
                    "string" != typeof e && (o.guid = e.guid = e.guid || o.guid || n.guid++);
                    var s = r.match(/^([\w:-]*)\s*(.*)$/),
                        h = s[1] + u.eventNamespace,
                        c = s[2];
                    c ? f.on(h, c, o) : i.on(h, o)
                })
            },
            _off: function(t, i) {
                i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
                t.off(i).off(i);
                this.bindings = n(this.bindings.not(t).get());
                this.focusable = n(this.focusable.not(t).get());
                this.hoverable = n(this.hoverable.not(t).get())
            },
            _delay: function(n, t) {
                function r() {
                    return ("string" == typeof n ? i[n] : n).apply(i, arguments)
                }
                var i = this;
                return setTimeout(r, t || 0)
            },
            _hoverable: function(t) {
                this.hoverable = this.hoverable.add(t);
                this._on(t, {
                    mouseenter: function(t) {
                        this._addClass(n(t.currentTarget), null, "ui-state-hover")
                    },
                    mouseleave: function(t) {
                        this._removeClass(n(t.currentTarget), null, "ui-state-hover")
                    }
                })
            },
            _focusable: function(t) {
                this.focusable = this.focusable.add(t);
                this._on(t, {
                    focusin: function(t) {
                        this._addClass(n(t.currentTarget), null, "ui-state-focus")
                    },
                    focusout: function(t) {
                        this._removeClass(n(t.currentTarget), null, "ui-state-focus")
                    }
                })
            },
            _trigger: function(t, i, r) {
                var u, f, e = this.options[t];
                if (r = r || {}, i = n.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], f = i.originalEvent)
                    for (u in f) u in i || (i[u] = f[u]);
                return this.element.trigger(i, r), !(n.isFunction(e) && e.apply(this.element[0], [i].concat(r)) === !1 || i.isDefaultPrevented())
            }
        };
        n.each({
            show: "fadeIn",
            hide: "fadeOut"
        }, function(t, i) {
            n.Widget.prototype["_" + t] = function(r, u, f) {
                "string" == typeof u && (u = {
                    effect: u
                });
                var o, e = u ? u === !0 || "number" == typeof u ? i : u.effect || i : t;
                u = u || {};
                "number" == typeof u && (u = {
                    duration: u
                });
                o = !n.isEmptyObject(u);
                u.complete = f;
                u.delay && r.delay(u.delay);
                o && n.effects && n.effects.effect[e] ? r[t](u) : e !== t && r[e] ? r[e](u.duration, u.easing, f) : r.queue(function(i) {
                    n(this)[t]();
                    f && f.call(r[0]);
                    i()
                })
            }
        });
        n.widget,
            function() {
                function f(n, t, i) {
                    return [parseFloat(n[0]) * (c.test(n[0]) ? t / 100 : 1), parseFloat(n[1]) * (c.test(n[1]) ? i / 100 : 1)]
                }

                function i(t, i) {
                    return parseInt(n.css(t, i), 10) || 0
                }

                function l(t) {
                    var i = t[0];
                    return 9 === i.nodeType ? {
                        width: t.width(),
                        height: t.height(),
                        offset: {
                            top: 0,
                            left: 0
                        }
                    } : n.isWindow(i) ? {
                        width: t.width(),
                        height: t.height(),
                        offset: {
                            top: t.scrollTop(),
                            left: t.scrollLeft()
                        }
                    } : i.preventDefault ? {
                        width: 0,
                        height: 0,
                        offset: {
                            top: i.pageY,
                            left: i.pageX
                        }
                    } : {
                        width: t.outerWidth(),
                        height: t.outerHeight(),
                        offset: t.offset()
                    }
                }
                var u, r = Math.max,
                    t = Math.abs,
                    e = /left|center|right/,
                    o = /top|center|bottom/,
                    s = /[\+\-]\d+(\.[\d]+)?%?/,
                    h = /^\w+/,
                    c = /%$/,
                    a = n.fn.position;
                n.position = {
                    scrollbarWidth: function() {
                        if (void 0 !== u) return u;
                        var r, i, t = n("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'><\/div><\/div>"),
                            f = t.children()[0];
                        return n("body").append(t), r = f.offsetWidth, t.css("overflow", "scroll"), i = f.offsetWidth, r === i && (i = t[0].clientWidth), t.remove(), u = r - i
                    },
                    getScrollInfo: function(t) {
                        var i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
                            r = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
                            u = "scroll" === i || "auto" === i && t.width < t.element[0].scrollWidth,
                            f = "scroll" === r || "auto" === r && t.height < t.element[0].scrollHeight;
                        return {
                            width: f ? n.position.scrollbarWidth() : 0,
                            height: u ? n.position.scrollbarWidth() : 0
                        }
                    },
                    getWithinInfo: function(t) {
                        var i = n(t || window),
                            r = n.isWindow(i[0]),
                            u = !!i[0] && 9 === i[0].nodeType,
                            f = !r && !u;
                        return {
                            element: i,
                            isWindow: r,
                            isDocument: u,
                            offset: f ? n(t).offset() : {
                                left: 0,
                                top: 0
                            },
                            scrollLeft: i.scrollLeft(),
                            scrollTop: i.scrollTop(),
                            width: i.outerWidth(),
                            height: i.outerHeight()
                        }
                    }
                };
                n.fn.position = function(u) {
                    if (!u || !u.of) return a.apply(this, arguments);
                    u = n.extend({}, u);
                    var w, c, v, p, y, k, d = n(u.of),
                        nt = n.position.getWithinInfo(u.within),
                        tt = n.position.getScrollInfo(nt),
                        b = (u.collision || "flip").split(" "),
                        g = {};
                    return k = l(d), d[0].preventDefault && (u.at = "left top"), c = k.width, v = k.height, p = k.offset, y = n.extend({}, p), n.each(["my", "at"], function() {
                        var t, i, n = (u[this] || "").split(" ");
                        1 === n.length && (n = e.test(n[0]) ? n.concat(["center"]) : o.test(n[0]) ? ["center"].concat(n) : ["center", "center"]);
                        n[0] = e.test(n[0]) ? n[0] : "center";
                        n[1] = o.test(n[1]) ? n[1] : "center";
                        t = s.exec(n[0]);
                        i = s.exec(n[1]);
                        g[this] = [t ? t[0] : 0, i ? i[0] : 0];
                        u[this] = [h.exec(n[0])[0], h.exec(n[1])[0]]
                    }), 1 === b.length && (b[1] = b[0]), "right" === u.at[0] ? y.left += c : "center" === u.at[0] && (y.left += c / 2), "bottom" === u.at[1] ? y.top += v : "center" === u.at[1] && (y.top += v / 2), w = f(g.at, c, v), y.left += w[0], y.top += w[1], this.each(function() {
                        var a, k, o = n(this),
                            s = o.outerWidth(),
                            h = o.outerHeight(),
                            it = i(this, "marginLeft"),
                            rt = i(this, "marginTop"),
                            ut = s + it + i(this, "marginRight") + tt.width,
                            ft = h + rt + i(this, "marginBottom") + tt.height,
                            e = n.extend({}, y),
                            l = f(g.my, o.outerWidth(), o.outerHeight());
                        "right" === u.my[0] ? e.left -= s : "center" === u.my[0] && (e.left -= s / 2);
                        "bottom" === u.my[1] ? e.top -= h : "center" === u.my[1] && (e.top -= h / 2);
                        e.left += l[0];
                        e.top += l[1];
                        a = {
                            marginLeft: it,
                            marginTop: rt
                        };
                        n.each(["left", "top"], function(t, i) {
                            n.ui.position[b[t]] && n.ui.position[b[t]][i](e, {
                                targetWidth: c,
                                targetHeight: v,
                                elemWidth: s,
                                elemHeight: h,
                                collisionPosition: a,
                                collisionWidth: ut,
                                collisionHeight: ft,
                                offset: [w[0] + l[0], w[1] + l[1]],
                                my: u.my,
                                at: u.at,
                                within: nt,
                                elem: o
                            })
                        });
                        u.using && (k = function(n) {
                            var i = p.left - e.left,
                                a = i + c - s,
                                f = p.top - e.top,
                                y = f + v - h,
                                l = {
                                    target: {
                                        element: d,
                                        left: p.left,
                                        top: p.top,
                                        width: c,
                                        height: v
                                    },
                                    element: {
                                        element: o,
                                        left: e.left,
                                        top: e.top,
                                        width: s,
                                        height: h
                                    },
                                    horizontal: 0 > a ? "left" : i > 0 ? "right" : "center",
                                    vertical: 0 > y ? "top" : f > 0 ? "bottom" : "middle"
                                };
                            s > c && c > t(i + a) && (l.horizontal = "center");
                            h > v && v > t(f + y) && (l.vertical = "middle");
                            l.important = r(t(i), t(a)) > r(t(f), t(y)) ? "horizontal" : "vertical";
                            u.using.call(this, n, l)
                        });
                        o.offset(n.extend(e, {
                            using: k
                        }))
                    })
                };
                n.ui.position = {
                    fit: {
                        left: function(n, t) {
                            var h, e = t.within,
                                u = e.isWindow ? e.scrollLeft : e.offset.left,
                                o = e.width,
                                s = n.left - t.collisionPosition.marginLeft,
                                i = u - s,
                                f = s + t.collisionWidth - o - u;
                            t.collisionWidth > o ? i > 0 && 0 >= f ? (h = n.left + i + t.collisionWidth - o - u, n.left += i - h) : n.left = f > 0 && 0 >= i ? u : i > f ? u + o - t.collisionWidth : u : i > 0 ? n.left += i : f > 0 ? n.left -= f : n.left = r(n.left - s, n.left)
                        },
                        top: function(n, t) {
                            var h, o = t.within,
                                u = o.isWindow ? o.scrollTop : o.offset.top,
                                e = t.within.height,
                                s = n.top - t.collisionPosition.marginTop,
                                i = u - s,
                                f = s + t.collisionHeight - e - u;
                            t.collisionHeight > e ? i > 0 && 0 >= f ? (h = n.top + i + t.collisionHeight - e - u, n.top += i - h) : n.top = f > 0 && 0 >= i ? u : i > f ? u + e - t.collisionHeight : u : i > 0 ? n.top += i : f > 0 ? n.top -= f : n.top = r(n.top - s, n.top)
                        }
                    },
                    flip: {
                        left: function(n, i) {
                            var o, s, r = i.within,
                                y = r.offset.left + r.scrollLeft,
                                c = r.width,
                                h = r.isWindow ? r.scrollLeft : r.offset.left,
                                l = n.left - i.collisionPosition.marginLeft,
                                a = l - h,
                                v = l + i.collisionWidth - c - h,
                                u = "left" === i.my[0] ? -i.elemWidth : "right" === i.my[0] ? i.elemWidth : 0,
                                f = "left" === i.at[0] ? i.targetWidth : "right" === i.at[0] ? -i.targetWidth : 0,
                                e = -2 * i.offset[0];
                            0 > a ? (o = n.left + u + f + e + i.collisionWidth - c - y, (0 > o || t(a) > o) && (n.left += u + f + e)) : v > 0 && (s = n.left - i.collisionPosition.marginLeft + u + f + e - h, (s > 0 || v > t(s)) && (n.left += u + f + e))
                        },
                        top: function(n, i) {
                            var o, s, r = i.within,
                                y = r.offset.top + r.scrollTop,
                                c = r.height,
                                h = r.isWindow ? r.scrollTop : r.offset.top,
                                l = n.top - i.collisionPosition.marginTop,
                                a = l - h,
                                v = l + i.collisionHeight - c - h,
                                p = "top" === i.my[1],
                                u = p ? -i.elemHeight : "bottom" === i.my[1] ? i.elemHeight : 0,
                                f = "top" === i.at[1] ? i.targetHeight : "bottom" === i.at[1] ? -i.targetHeight : 0,
                                e = -2 * i.offset[1];
                            0 > a ? (s = n.top + u + f + e + i.collisionHeight - c - y, (0 > s || t(a) > s) && (n.top += u + f + e)) : v > 0 && (o = n.top - i.collisionPosition.marginTop + u + f + e - h, (o > 0 || v > t(o)) && (n.top += u + f + e))
                        }
                    },
                    flipfit: {
                        left: function() {
                            n.ui.position.flip.left.apply(this, arguments);
                            n.ui.position.fit.left.apply(this, arguments)
                        },
                        top: function() {
                            n.ui.position.flip.top.apply(this, arguments);
                            n.ui.position.fit.top.apply(this, arguments)
                        }
                    }
                }
            }();
        n.ui.position;
        "1.7" === n.fn.jquery.substring(0, 3) && (n.each(["Width", "Height"], function(t, i) {
            function r(t, i, r, u) {
                return n.each(e, function() {
                    i -= parseFloat(n.css(t, "padding" + this)) || 0;
                    r && (i -= parseFloat(n.css(t, "border" + this + "Width")) || 0);
                    u && (i -= parseFloat(n.css(t, "margin" + this)) || 0)
                }), i
            }
            var e = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
                u = i.toLowerCase(),
                f = {
                    innerWidth: n.fn.innerWidth,
                    innerHeight: n.fn.innerHeight,
                    outerWidth: n.fn.outerWidth,
                    outerHeight: n.fn.outerHeight
                };
            n.fn["inner" + i] = function(t) {
                return void 0 === t ? f["inner" + i].call(this) : this.each(function() {
                    n(this).css(u, r(this, t) + "px")
                })
            };
            n.fn["outer" + i] = function(t, e) {
                return "number" != typeof t ? f["outer" + i].call(this, t) : this.each(function() {
                    n(this).css(u, r(this, t, !0, e) + "px")
                })
            }
        }), n.fn.addBack = function(n) {
            return this.add(null == n ? this.prevObject : this.prevObject.filter(n))
        });
        n.ui.keyCode = {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        };
        n.fn.extend({
            uniqueId: function() {
                var n = 0;
                return function() {
                    return this.each(function() {
                        this.id || (this.id = "ui-id-" + ++n)
                    })
                }
            }(),
            removeUniqueId: function() {
                return this.each(function() {
                    /^ui-id-\d+$/.test(this.id) && n(this).removeAttr("id")
                })
            }
        });
        n.ui.safeActiveElement = function(n) {
            var t;
            try {
                t = n.activeElement
            } catch (i) {
                t = n.body
            }
            return t || (t = n.body), t.nodeName || (t = n.body), t
        };
        n.widget("ui.menu", {
            version: "1.12.1",
            defaultElement: "<ul>",
            delay: 300,
            options: {
                icons: {
                    submenu: "ui-icon-caret-1-e"
                },
                items: "> *",
                menus: "ul",
                position: {
                    my: "left top",
                    at: "right top"
                },
                role: "menu",
                blur: null,
                focus: null,
                select: null
            },
            _create: function() {
                this.activeMenu = this.element;
                this.mouseHandled = !1;
                this.element.uniqueId().attr({
                    role: this.options.role,
                    tabIndex: 0
                });
                this._addClass("ui-menu", "ui-widget ui-widget-content");
                this._on({
                    "mousedown .ui-menu-item": function(n) {
                        n.preventDefault()
                    },
                    "click .ui-menu-item": function(t) {
                        var i = n(t.target),
                            r = n(n.ui.safeActiveElement(this.document[0]));
                        !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(t), t.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(t) : !this.element.is(":focus") && r.closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                    },
                    "mouseenter .ui-menu-item": function(t) {
                        if (!this.previousFilter) {
                            var r = n(t.target).closest(".ui-menu-item"),
                                i = n(t.currentTarget);
                            r[0] === i[0] && (this._removeClass(i.siblings().children(".ui-state-active"), null, "ui-state-active"), this.focus(t, i))
                        }
                    },
                    mouseleave: "collapseAll",
                    "mouseleave .ui-menu": "collapseAll",
                    focus: function(n, t) {
                        var i = this.active || this.element.find(this.options.items).eq(0);
                        t || this.focus(n, i)
                    },
                    blur: function(t) {
                        this._delay(function() {
                            var i = !n.contains(this.element[0], n.ui.safeActiveElement(this.document[0]));
                            i && this.collapseAll(t)
                        })
                    },
                    keydown: "_keydown"
                });
                this.refresh();
                this._on(this.document, {
                    click: function(n) {
                        this._closeOnDocumentClick(n) && this.collapseAll(n);
                        this.mouseHandled = !1
                    }
                })
            },
            _destroy: function() {
                var t = this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),
                    i = t.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
                this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show();
                i.children().each(function() {
                    var t = n(this);
                    t.data("ui-menu-submenu-caret") && t.remove()
                })
            },
            _keydown: function(t) {
                var i, u, r, f, e = !0;
                switch (t.keyCode) {
                    case n.ui.keyCode.PAGE_UP:
                        this.previousPage(t);
                        break;
                    case n.ui.keyCode.PAGE_DOWN:
                        this.nextPage(t);
                        break;
                    case n.ui.keyCode.HOME:
                        this._move("first", "first", t);
                        break;
                    case n.ui.keyCode.END:
                        this._move("last", "last", t);
                        break;
                    case n.ui.keyCode.UP:
                        this.previous(t);
                        break;
                    case n.ui.keyCode.DOWN:
                        this.next(t);
                        break;
                    case n.ui.keyCode.LEFT:
                        this.collapse(t);
                        break;
                    case n.ui.keyCode.RIGHT:
                        this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
                        break;
                    case n.ui.keyCode.ENTER:
                    case n.ui.keyCode.SPACE:
                        this._activate(t);
                        break;
                    case n.ui.keyCode.ESCAPE:
                        this.collapse(t);
                        break;
                    default:
                        e = !1;
                        u = this.previousFilter || "";
                        f = !1;
                        r = t.keyCode >= 96 && 105 >= t.keyCode ? "" + (t.keyCode - 96) : String.fromCharCode(t.keyCode);
                        clearTimeout(this.filterTimer);
                        r === u ? f = !0 : r = u + r;
                        i = this._filterMenuItems(r);
                        i = f && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i;
                        i.length || (r = String.fromCharCode(t.keyCode), i = this._filterMenuItems(r));
                        i.length ? (this.focus(t, i), this.previousFilter = r, this.filterTimer = this._delay(function() {
                            delete this.previousFilter
                        }, 1e3)) : delete this.previousFilter
                }
                e && t.preventDefault()
            },
            _activate: function(n) {
                this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(n) : this.select(n))
            },
            refresh: function() {
                var u, t, f, i, e, r = this,
                    s = this.options.icons.submenu,
                    o = this.element.find(this.options.menus);
                this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length);
                f = o.filter(":not(.ui-menu)").hide().attr({
                    role: this.options.role,
                    "aria-hidden": "true",
                    "aria-expanded": "false"
                }).each(function() {
                    var t = n(this),
                        i = t.prev(),
                        u = n("<span>").data("ui-menu-submenu-caret", !0);
                    r._addClass(u, "ui-menu-icon", "ui-icon " + s);
                    i.attr("aria-haspopup", "true").prepend(u);
                    t.attr("aria-labelledby", i.attr("id"))
                });
                this._addClass(f, "ui-menu", "ui-widget ui-widget-content ui-front");
                u = o.add(this.element);
                t = u.find(this.options.items);
                t.not(".ui-menu-item").each(function() {
                    var t = n(this);
                    r._isDivider(t) && r._addClass(t, "ui-menu-divider", "ui-widget-content")
                });
                i = t.not(".ui-menu-item, .ui-menu-divider");
                e = i.children().not(".ui-menu").uniqueId().attr({
                    tabIndex: -1,
                    role: this._itemRole()
                });
                this._addClass(i, "ui-menu-item")._addClass(e, "ui-menu-item-wrapper");
                t.filter(".ui-state-disabled").attr("aria-disabled", "true");
                this.active && !n.contains(this.element[0], this.active[0]) && this.blur()
            },
            _itemRole: function() {
                return {
                    menu: "menuitem",
                    listbox: "option"
                }[this.options.role]
            },
            _setOption: function(n, t) {
                if ("icons" === n) {
                    var i = this.element.find(".ui-menu-icon");
                    this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, t.submenu)
                }
                this._super(n, t)
            },
            _setOptionDisabled: function(n) {
                this._super(n);
                this.element.attr("aria-disabled", n + "");
                this._toggleClass(null, "ui-state-disabled", !!n)
            },
            focus: function(n, t) {
                var i, r, u;
                this.blur(n, n && "focus" === n.type);
                this._scrollIntoView(t);
                this.active = t.first();
                r = this.active.children(".ui-menu-item-wrapper");
                this._addClass(r, null, "ui-state-active");
                this.options.role && this.element.attr("aria-activedescendant", r.attr("id"));
                u = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper");
                this._addClass(u, null, "ui-state-active");
                n && "keydown" === n.type ? this._close() : this.timer = this._delay(function() {
                    this._close()
                }, this.delay);
                i = t.children(".ui-menu");
                i.length && n && /^mouse/.test(n.type) && this._startOpening(i);
                this.activeMenu = t.parent();
                this._trigger("focus", n, {
                    item: t
                })
            },
            _scrollIntoView: function(t) {
                var e, o, i, r, u, f;
                this._hasScroll() && (e = parseFloat(n.css(this.activeMenu[0], "borderTopWidth")) || 0, o = parseFloat(n.css(this.activeMenu[0], "paddingTop")) || 0, i = t.offset().top - this.activeMenu.offset().top - e - o, r = this.activeMenu.scrollTop(), u = this.activeMenu.height(), f = t.outerHeight(), 0 > i ? this.activeMenu.scrollTop(r + i) : i + f > u && this.activeMenu.scrollTop(r + i - u + f))
            },
            blur: function(n, t) {
                t || clearTimeout(this.timer);
                this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"), this._trigger("blur", n, {
                    item: this.active
                }), this.active = null)
            },
            _startOpening: function(n) {
                clearTimeout(this.timer);
                "true" === n.attr("aria-hidden") && (this.timer = this._delay(function() {
                    this._close();
                    this._open(n)
                }, this.delay))
            },
            _open: function(t) {
                var i = n.extend({
                    of: this.active
                }, this.options.position);
                clearTimeout(this.timer);
                this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true");
                t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
            },
            collapseAll: function(t, i) {
                clearTimeout(this.timer);
                this.timer = this._delay(function() {
                    var r = i ? this.element : n(t && t.target).closest(this.element.find(".ui-menu"));
                    r.length || (r = this.element);
                    this._close(r);
                    this.blur(t);
                    this._removeClass(r.find(".ui-state-active"), null, "ui-state-active");
                    this.activeMenu = r
                }, this.delay)
            },
            _close: function(n) {
                n || (n = this.active ? this.active.parent() : this.element);
                n.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false")
            },
            _closeOnDocumentClick: function(t) {
                return !n(t.target).closest(".ui-menu").length
            },
            _isDivider: function(n) {
                return !/[^\-\u2014\u2013\s]/.test(n.text())
            },
            collapse: function(n) {
                var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);
                t && t.length && (this._close(), this.focus(n, t))
            },
            expand: function(n) {
                var t = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
                t && t.length && (this._open(t.parent()), this._delay(function() {
                    this.focus(n, t)
                }))
            },
            next: function(n) {
                this._move("next", "first", n)
            },
            previous: function(n) {
                this._move("prev", "last", n)
            },
            isFirstItem: function() {
                return this.active && !this.active.prevAll(".ui-menu-item").length
            },
            isLastItem: function() {
                return this.active && !this.active.nextAll(".ui-menu-item").length
            },
            _move: function(n, t, i) {
                var r;
                this.active && (r = "first" === n || "last" === n ? this.active["first" === n ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[n + "All"](".ui-menu-item").eq(0));
                r && r.length && this.active || (r = this.activeMenu.find(this.options.items)[t]());
                this.focus(i, r)
            },
            nextPage: function(t) {
                var i, r, u;
                return this.active ? (this.isLastItem() || (this._hasScroll() ? (r = this.active.offset().top, u = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                    return i = n(this), 0 > i.offset().top - r - u
                }), this.focus(t, i)) : this.focus(t, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]())), void 0) : (this.next(t), void 0)
            },
            previousPage: function(t) {
                var i, r, u;
                return this.active ? (this.isFirstItem() || (this._hasScroll() ? (r = this.active.offset().top, u = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                    return i = n(this), i.offset().top - r + u > 0
                }), this.focus(t, i)) : this.focus(t, this.activeMenu.find(this.options.items).first())), void 0) : (this.next(t), void 0)
            },
            _hasScroll: function() {
                return this.element.outerHeight() < this.element.prop("scrollHeight")
            },
            select: function(t) {
                this.active = this.active || n(t.target).closest(".ui-menu-item");
                var i = {
                    item: this.active
                };
                this.active.has(".ui-menu").length || this.collapseAll(t, !0);
                this._trigger("select", t, i)
            },
            _filterMenuItems: function(t) {
                var i = t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
                    r = RegExp("^" + i, "i");
                return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
                    return r.test(n.trim(n(this).children(".ui-menu-item-wrapper").text()))
                })
            }
        });
        n.widget("ui.autocomplete", {
            version: "1.12.1",
            defaultElement: "<input>",
            options: {
                appendTo: null,
                autoFocus: !1,
                delay: 300,
                minLength: 1,
                position: {
                    my: "left top",
                    at: "left bottom",
                    collision: "none"
                },
                source: null,
                change: null,
                close: null,
                focus: null,
                open: null,
                response: null,
                search: null,
                select: null
            },
            requestIndex: 0,
            pending: 0,
            _create: function() {
                var t, i, r, u = this.element[0].nodeName.toLowerCase(),
                    f = "textarea" === u,
                    e = "input" === u;
                this.isMultiLine = f || !e && this._isContentEditable(this.element);
                this.valueMethod = this.element[f || e ? "val" : "text"];
                this.isNewMenu = !0;
                this._addClass("ui-autocomplete-input");
                this.element.attr("autocomplete", "off");
                this._on(this.element, {
                    keydown: function(u) {
                        if (this.element.prop("readOnly")) return t = !0, r = !0, i = !0, void 0;
                        t = !1;
                        r = !1;
                        i = !1;
                        var f = n.ui.keyCode;
                        switch (u.keyCode) {
                            case f.PAGE_UP:
                                t = !0;
                                this._move("previousPage", u);
                                break;
                            case f.PAGE_DOWN:
                                t = !0;
                                this._move("nextPage", u);
                                break;
                            case f.UP:
                                t = !0;
                                this._keyEvent("previous", u);
                                break;
                            case f.DOWN:
                                t = !0;
                                this._keyEvent("next", u);
                                break;
                            case f.ENTER:
                                this.menu.active && (t = !0, u.preventDefault(), this.menu.select(u));
                                break;
                            case f.TAB:
                                this.menu.active && this.menu.select(u);
                                break;
                            case f.ESCAPE:
                                this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(u), u.preventDefault());
                                break;
                            default:
                                i = !0;
                                this._searchTimeout(u)
                        }
                    },
                    keypress: function(r) {
                        if (t) return t = !1, (!this.isMultiLine || this.menu.element.is(":visible")) && r.preventDefault(), void 0;
                        if (!i) {
                            var u = n.ui.keyCode;
                            switch (r.keyCode) {
                                case u.PAGE_UP:
                                    this._move("previousPage", r);
                                    break;
                                case u.PAGE_DOWN:
                                    this._move("nextPage", r);
                                    break;
                                case u.UP:
                                    this._keyEvent("previous", r);
                                    break;
                                case u.DOWN:
                                    this._keyEvent("next", r)
                            }
                        }
                    },
                    input: function(n) {
                        return r ? (r = !1, n.preventDefault(), void 0) : (this._searchTimeout(n), void 0)
                    },
                    focus: function() {
                        this.selectedItem = null;
                        this.previous = this._value()
                    },
                    blur: function(n) {
                        return this.cancelBlur ? (delete this.cancelBlur, void 0) : (clearTimeout(this.searching), this.close(n), this._change(n), void 0)
                    }
                });
                this._initSource();
                this.menu = n("<ul>").appendTo(this._appendTo()).menu({
                    role: null
                }).hide().menu("instance");
                this._addClass(this.menu.element, "ui-autocomplete", "ui-front");
                this._on(this.menu.element, {
                    mousedown: function(t) {
                        t.preventDefault();
                        this.cancelBlur = !0;
                        this._delay(function() {
                            delete this.cancelBlur;
                            this.element[0] !== n.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus")
                        })
                    },
                    menufocus: function(t, i) {
                        var r, u;
                        return this.isNewMenu && (this.isNewMenu = !1, t.originalEvent && /^mouse/.test(t.originalEvent.type)) ? (this.menu.blur(), this.document.one("mousemove", function() {
                            n(t.target).trigger(t.originalEvent)
                        }), void 0) : (u = i.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", t, {
                            item: u
                        }) && t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(u.value), r = i.item.attr("aria-label") || u.value, r && n.trim(r).length && (this.liveRegion.children().hide(), n("<div>").text(r).appendTo(this.liveRegion)), void 0)
                    },
                    menuselect: function(t, i) {
                        var r = i.item.data("ui-autocomplete-item"),
                            u = this.previous;
                        this.element[0] !== n.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"), this.previous = u, this._delay(function() {
                            this.previous = u;
                            this.selectedItem = r
                        }));
                        !1 !== this._trigger("select", t, {
                            item: r
                        }) && this._value(r.value);
                        this.term = this._value();
                        this.close(t);
                        this.selectedItem = r
                    }
                });
                this.liveRegion = n("<div>", {
                    role: "status",
                    "aria-live": "assertive",
                    "aria-relevant": "additions"
                }).appendTo(this.document[0].body);
                this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible");
                this._on(this.window, {
                    beforeunload: function() {
                        this.element.removeAttr("autocomplete")
                    }
                })
            },
            _destroy: function() {
                clearTimeout(this.searching);
                this.element.removeAttr("autocomplete");
                this.menu.element.remove();
                this.liveRegion.remove()
            },
            _setOption: function(n, t) {
                this._super(n, t);
                "source" === n && this._initSource();
                "appendTo" === n && this.menu.element.appendTo(this._appendTo());
                "disabled" === n && t && this.xhr && this.xhr.abort()
            },
            _isEventTargetInWidget: function(t) {
                var i = this.menu.element[0];
                return t.target === this.element[0] || t.target === i || n.contains(i, t.target)
            },
            _closeOnClickOutside: function(n) {
                this._isEventTargetInWidget(n) || this.close()
            },
            _appendTo: function() {
                var t = this.options.appendTo;
                return t && (t = t.jquery || t.nodeType ? n(t) : this.document.find(t).eq(0)), t && t[0] || (t = this.element.closest(".ui-front, dialog")), t.length || (t = this.document[0].body), t
            },
            _initSource: function() {
                var i, r, t = this;
                n.isArray(this.options.source) ? (i = this.options.source, this.source = function(t, r) {
                    r(n.ui.autocomplete.filter(i, t.term))
                }) : "string" == typeof this.options.source ? (r = this.options.source, this.source = function(i, u) {
                    t.xhr && t.xhr.abort();
                    t.xhr = n.ajax({
                        url: r,
                        data: i,
                        dataType: "json",
                        success: function(n) {
                            u(n)
                        },
                        error: function() {
                            u([])
                        }
                    })
                }) : this.source = this.options.source
            },
            _searchTimeout: function(n) {
                clearTimeout(this.searching);
                this.searching = this._delay(function() {
                    var t = this.term === this._value(),
                        i = this.menu.element.is(":visible"),
                        r = n.altKey || n.ctrlKey || n.metaKey || n.shiftKey;
                    t && (!t || i || r) || (this.selectedItem = null, this.search(null, n))
                }, this.options.delay)
            },
            search: function(n, t) {
                return n = null != n ? n : this._value(), this.term = this._value(), n.length < this.options.minLength ? this.close(t) : this._trigger("search", t) !== !1 ? this._search(n) : void 0
            },
            _search: function(n) {
                this.pending++;
                this._addClass("ui-autocomplete-loading");
                this.cancelSearch = !1;
                this.source({
                    term: n
                }, this._response())
            },
            _response: function() {
                var t = ++this.requestIndex;
                return n.proxy(function(n) {
                    t === this.requestIndex && this.__response(n);
                    this.pending--;
                    this.pending || this._removeClass("ui-autocomplete-loading")
                }, this)
            },
            __response: function(n) {
                n && (n = this._normalize(n));
                this._trigger("response", null, {
                    content: n
                });
                !this.options.disabled && n && n.length && !this.cancelSearch ? (this._suggest(n), this._trigger("open")) : this._close()
            },
            close: function(n) {
                this.cancelSearch = !0;
                this._close(n)
            },
            _close: function(n) {
                this._off(this.document, "mousedown");
                this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", n))
            },
            _change: function(n) {
                this.previous !== this._value() && this._trigger("change", n, {
                    item: this.selectedItem
                })
            },
            _normalize: function(t) {
                return t.length && t[0].label && t[0].value ? t : n.map(t, function(t) {
                    return "string" == typeof t ? {
                        label: t,
                        value: t
                    } : n.extend({}, t, {
                        label: t.label || t.value,
                        value: t.value || t.label
                    })
                })
            },
            _suggest: function(t) {
                var i = this.menu.element.empty();
                this._renderMenu(i, t);
                this.isNewMenu = !0;
                this.menu.refresh();
                i.show();
                this._resizeMenu();
                i.position(n.extend({
                    of: this.element
                }, this.options.position));
                this.options.autoFocus && this.menu.next();
                this._on(this.document, {
                    mousedown: "_closeOnClickOutside"
                })
            },
            _resizeMenu: function() {
                var n = this.menu.element;
                n.outerWidth(Math.max(n.width("").outerWidth() + 1, this.element.outerWidth()))
            },
            _renderMenu: function(t, i) {
                var r = this;
                n.each(i, function(n, i) {
                    r._renderItemData(t, i)
                })
            },
            _renderItemData: function(n, t) {
                return this._renderItem(n, t).data("ui-autocomplete-item", t)
            },
            _renderItem: function(t, i) {
                return n("<li>").append(n("<div>").text(i.label)).appendTo(t)
            },
            _move: function(n, t) {
                return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(n) || this.menu.isLastItem() && /^next/.test(n) ? (this.isMultiLine || this._value(this.term), this.menu.blur(), void 0) : (this.menu[n](t), void 0) : (this.search(null, t), void 0)
            },
            widget: function() {
                return this.menu.element
            },
            _value: function() {
                return this.valueMethod.apply(this.element, arguments)
            },
            _keyEvent: function(n, t) {
                (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(n, t), t.preventDefault())
            },
            _isContentEditable: function(n) {
                if (!n.length) return !1;
                var t = n.prop("contentEditable");
                return "inherit" === t ? this._isContentEditable(n.parent()) : "true" === t
            }
        });
        n.extend(n.ui.autocomplete, {
            escapeRegex: function(n) {
                return n.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            },
            filter: function(t, i) {
                var r = RegExp(n.ui.autocomplete.escapeRegex(i), "i");
                return n.grep(t, function(n) {
                    return r.test(n.label || n.value || n)
                })
            }
        });
        n.widget("ui.autocomplete", n.ui.autocomplete, {
            options: {
                messages: {
                    noResults: "No search results.",
                    results: function(n) {
                        return n + (n > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                    }
                }
            },
            __response: function(t) {
                var i;
                this._superApply(arguments);
                this.options.disabled || this.cancelSearch || (i = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults, this.liveRegion.children().hide(), n("<div>").text(i).appendTo(this.liveRegion))
            }
        });
        n.ui.autocomplete
    }), ! function(n, t, i, r) {
        var u = n(t);
        n.fn.lazyload = function(f) {
            function s() {
                var t = 0;
                o.each(function() {
                    var i = n(this);
                    if ((!e.skip_invisible || i.is(":visible")) && !n.abovethetop(this, e) && !n.leftofbegin(this, e))
                        if (n.belowthefold(this, e) || n.rightoffold(this, e)) {
                            if (++t > e.failure_limit) return !1
                        } else i.trigger("appear"), t = 0
                })
            }
            var h, o = this,
                e = {
                    threshold: 0,
                    failure_limit: 0,
                    event: "scroll",
                    effect: "show",
                    container: t,
                    data_attribute: "original",
                    skip_invisible: !0,
                    appear: null,
                    load: null,
                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
                };
            return f && (r !== f.failurelimit && (f.failure_limit = f.failurelimit, delete f.failurelimit), r !== f.effectspeed && (f.effect_speed = f.effectspeed, delete f.effectspeed), n.extend(e, f)), h = e.container === r || e.container === t ? u : n(e.container), 0 === e.event.indexOf("scroll") && h.bind(e.event, function() {
                return s()
            }), this.each(function() {
                var i = this,
                    t = n(i);
                i.loaded = !1;
                (t.attr("src") === r || t.attr("src") === !1) && t.is("img") && t.attr("src", e.placeholder);
                t.one("appear", function() {
                    if (!this.loaded) {
                        if (e.appear) {
                            var r = o.length;
                            e.appear.call(i, r, e)
                        }
                        n("<img />").bind("load", function() {
                            var r = t.attr("data-" + e.data_attribute),
                                u, f;
                            t.hide();
                            t.is("img") ? t.attr("src", r) : t.css("background-image", "url('" + r + "')");
                            t[e.effect](e.effect_speed);
                            i.loaded = !0;
                            u = n.grep(o, function(n) {
                                return !n.loaded
                            });
                            (o = n(u), e.load) && (f = o.length, e.load.call(i, f, e))
                        }).attr("src", t.attr("data-" + e.data_attribute))
                    }
                });
                0 !== e.event.indexOf("scroll") && t.bind(e.event, function() {
                    i.loaded || t.trigger("appear")
                })
            }), u.bind("resize", function() {
                s()
            }), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && u.bind("pageshow", function(t) {
                t.originalEvent && t.originalEvent.persisted && o.each(function() {
                    n(this).trigger("appear")
                })
            }), n(i).ready(function() {
                s()
            }), this
        };
        n.belowthefold = function(i, f) {
            var e;
            return e = f.container === r || f.container === t ? (t.innerHeight ? t.innerHeight : u.height()) + u.scrollTop() : n(f.container).offset().top + n(f.container).height(), e <= n(i).offset().top - f.threshold
        };
        n.rightoffold = function(i, f) {
            var e;
            return e = f.container === r || f.container === t ? u.width() + u.scrollLeft() : n(f.container).offset().left + n(f.container).width(), e <= n(i).offset().left - f.threshold
        };
        n.abovethetop = function(i, f) {
            var e;
            return e = f.container === r || f.container === t ? u.scrollTop() : n(f.container).offset().top, e >= n(i).offset().top + f.threshold + n(i).height()
        };
        n.leftofbegin = function(i, f) {
            var e;
            return e = f.container === r || f.container === t ? u.scrollLeft() : n(f.container).offset().left, e >= n(i).offset().left + f.threshold + n(i).width()
        };
        n.inviewport = function(t, i) {
            return !(n.rightoffold(t, i) || n.leftofbegin(t, i) || n.belowthefold(t, i) || n.abovethetop(t, i))
        };
        n.extend(n.expr[":"], {
            "below-the-fold": function(t) {
                return n.belowthefold(t, {
                    threshold: 0
                })
            },
            "above-the-top": function(t) {
                return !n.belowthefold(t, {
                    threshold: 0
                })
            },
            "right-of-screen": function(t) {
                return n.rightoffold(t, {
                    threshold: 0
                })
            },
            "left-of-screen": function(t) {
                return !n.rightoffold(t, {
                    threshold: 0
                })
            },
            "in-viewport": function(t) {
                return n.inviewport(t, {
                    threshold: 0
                })
            },
            "above-the-fold": function(t) {
                return !n.belowthefold(t, {
                    threshold: 0
                })
            },
            "right-of-fold": function(t) {
                return n.rightoffold(t, {
                    threshold: 0
                })
            },
            "left-of-fold": function(t) {
                return !n.rightoffold(t, {
                    threshold: 0
                })
            }
        })
    }(jQuery, window, document), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(n) {
    "use strict";
    var t = n.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1 || t[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4");
}(jQuery); + function(n) {
    "use strict";

    function t() {
        var i = document.createElement("bootstrap"),
            t = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            },
            n;
        for (n in t)
            if (void 0 !== i.style[n]) return {
                end: t[n]
            };
        return !1
    }
    n.fn.emulateTransitionEnd = function(t) {
        var i = !1,
            u = this,
            r;
        n(this).one("bsTransitionEnd", function() {
            i = !0
        });
        return r = function() {
            i || n(u).trigger(n.support.transition.end)
        }, setTimeout(r, t), this
    };
    n(function() {
        n.support.transition = t();
        n.support.transition && (n.event.special.bsTransitionEnd = {
            bindType: n.support.transition.end,
            delegateType: n.support.transition.end,
            handle: function(t) {
                if (n(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery); + function(n) {
    "use strict";

    function u(i) {
        return this.each(function() {
            var r = n(this),
                u = r.data("bs.alert");
            u || r.data("bs.alert", u = new t(this));
            "string" == typeof i && u[i].call(r)
        })
    }
    var i = '[data-dismiss="alert"]',
        t = function(t) {
            n(t).on("click", i, this.close)
        },
        r;
    t.VERSION = "3.3.7";
    t.TRANSITION_DURATION = 150;
    t.prototype.close = function(i) {
        function e() {
            r.detach().trigger("closed.bs.alert").remove()
        }
        var f = n(this),
            u = f.attr("data-target"),
            r;
        u || (u = f.attr("href"), u = u && u.replace(/.*(?=#[^\s]*$)/, ""));
        r = n("#" === u ? [] : u);
        i && i.preventDefault();
        r.length || (r = f.closest(".alert"));
        r.trigger(i = n.Event("close.bs.alert"));
        i.isDefaultPrevented() || (r.removeClass("in"), n.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", e).emulateTransitionEnd(t.TRANSITION_DURATION) : e())
    };
    r = n.fn.alert;
    n.fn.alert = u;
    n.fn.alert.Constructor = t;
    n.fn.alert.noConflict = function() {
        return n.fn.alert = r, this
    };
    n(document).on("click.bs.alert.data-api", i, t.prototype.close)
}(jQuery); + function(n) {
    "use strict";

    function i(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.button"),
                f = "object" == typeof i && i;
            r || u.data("bs.button", r = new t(this, f));
            "toggle" == i ? r.toggle() : i && r.setState(i)
        })
    }
    var t = function(i, r) {
            this.$element = n(i);
            this.options = n.extend({}, t.DEFAULTS, r);
            this.isLoading = !1
        },
        r;
    t.VERSION = "3.3.7";
    t.DEFAULTS = {
        loadingText: "loading..."
    };
    t.prototype.setState = function(t) {
        var i = "disabled",
            r = this.$element,
            f = r.is("input") ? "val" : "html",
            u = r.data();
        t += "Text";
        null == u.resetText && r.data("resetText", r[f]());
        setTimeout(n.proxy(function() {
            r[f](null == u[t] ? this.options[t] : u[t]);
            "loadingText" == t ? (this.isLoading = !0, r.addClass(i).attr(i, i).prop(i, !0)) : this.isLoading && (this.isLoading = !1, r.removeClass(i).removeAttr(i).prop(i, !1))
        }, this), 0)
    };
    t.prototype.toggle = function() {
        var t = !0,
            i = this.$element.closest('[data-toggle="buttons"]'),
            n;
        i.length ? (n = this.$element.find("input"), "radio" == n.prop("type") ? (n.prop("checked") && (t = !1), i.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), t && n.trigger("change")) : (this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active"))
    };
    r = n.fn.button;
    n.fn.button = i;
    n.fn.button.Constructor = t;
    n.fn.button.noConflict = function() {
        return n.fn.button = r, this
    };
    n(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(t) {
        var r = n(t.target).closest(".btn");
        i.call(r, "toggle");
        n(t.target).is('input[type="radio"], input[type="checkbox"]') || (t.preventDefault(), r.is("input,button") ? r.trigger("focus") : r.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(t) {
        n(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
    })
}(jQuery); + function(n) {
    "use strict";

    function i(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.carousel"),
                f = n.extend({}, t.DEFAULTS, u.data(), "object" == typeof i && i),
                e = "string" == typeof i ? i : f.slide;
            r || u.data("bs.carousel", r = new t(this, f));
            "number" == typeof i ? r.to(i) : e ? r[e]() : f.interval && r.pause().cycle()
        })
    }
    var t = function(t, i) {
            this.$element = n(t);
            this.$indicators = this.$element.find(".carousel-indicators");
            this.options = i;
            this.paused = null;
            this.sliding = null;
            this.interval = null;
            this.$active = null;
            this.$items = null;
            this.options.keyboard && this.$element.on("keydown.bs.carousel", n.proxy(this.keydown, this));
            "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", n.proxy(this.pause, this)).on("mouseleave.bs.carousel", n.proxy(this.cycle, this))
        },
        u, r;
    t.VERSION = "3.3.7";
    t.TRANSITION_DURATION = 600;
    t.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    };
    t.prototype.keydown = function(n) {
        if (!/input|textarea/i.test(n.target.tagName)) {
            switch (n.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            n.preventDefault()
        }
    };
    t.prototype.cycle = function(t) {
        return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(n.proxy(this.next, this), this.options.interval)), this
    };
    t.prototype.getItemIndex = function(n) {
        return this.$items = n.parent().children(".item"), this.$items.index(n || this.$active)
    };
    t.prototype.getItemForDirection = function(n, t) {
        var i = this.getItemIndex(t),
            f = "prev" == n && 0 === i || "next" == n && i == this.$items.length - 1,
            r, u;
        return f && !this.options.wrap ? t : (r = "prev" == n ? -1 : 1, u = (i + r) % this.$items.length, this.$items.eq(u))
    };
    t.prototype.to = function(n) {
        var i = this,
            t = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(n > this.$items.length - 1 || n < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
            i.to(n)
        }) : t == n ? this.pause().cycle() : this.slide(n > t ? "next" : "prev", this.$items.eq(n))
    };
    t.prototype.pause = function(t) {
        return t || (this.paused = !0), this.$element.find(".next, .prev").length && n.support.transition && (this.$element.trigger(n.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    };
    t.prototype.next = function() {
        if (!this.sliding) return this.slide("next")
    };
    t.prototype.prev = function() {
        if (!this.sliding) return this.slide("prev")
    };
    t.prototype.slide = function(i, r) {
        var e = this.$element.find(".item.active"),
            u = r || this.getItemForDirection(i, e),
            l = this.interval,
            f = "next" == i ? "left" : "right",
            a = this,
            o, s, h, c;
        return u.hasClass("active") ? this.sliding = !1 : (o = u[0], s = n.Event("slide.bs.carousel", {
            relatedTarget: o,
            direction: f
        }), (this.$element.trigger(s), !s.isDefaultPrevented()) ? ((this.sliding = !0, l && this.pause(), this.$indicators.length) && (this.$indicators.find(".active").removeClass("active"), h = n(this.$indicators.children()[this.getItemIndex(u)]), h && h.addClass("active")), c = n.Event("slid.bs.carousel", {
            relatedTarget: o,
            direction: f
        }), n.support.transition && this.$element.hasClass("slide") ? (u.addClass(i), u[0].offsetWidth, e.addClass(f), u.addClass(f), e.one("bsTransitionEnd", function() {
            u.removeClass([i, f].join(" ")).addClass("active");
            e.removeClass(["active", f].join(" "));
            a.sliding = !1;
            setTimeout(function() {
                a.$element.trigger(c)
            }, 0)
        }).emulateTransitionEnd(t.TRANSITION_DURATION)) : (e.removeClass("active"), u.addClass("active"), this.sliding = !1, this.$element.trigger(c)), l && this.cycle(), this) : void 0)
    };
    u = n.fn.carousel;
    n.fn.carousel = i;
    n.fn.carousel.Constructor = t;
    n.fn.carousel.noConflict = function() {
        return n.fn.carousel = u, this
    };
    r = function(t) {
        var o, r = n(this),
            u = n(r.attr("data-target") || (o = r.attr("href")) && o.replace(/.*(?=#[^\s]+$)/, "")),
            e, f;
        u.hasClass("carousel") && (e = n.extend({}, u.data(), r.data()), f = r.attr("data-slide-to"), f && (e.interval = !1), i.call(u, e), f && u.data("bs.carousel").to(f), t.preventDefault())
    };
    n(document).on("click.bs.carousel.data-api", "[data-slide]", r).on("click.bs.carousel.data-api", "[data-slide-to]", r);
    n(window).on("load", function() {
        n('[data-ride="carousel"]').each(function() {
            var t = n(this);
            i.call(t, t.data())
        })
    })
}(jQuery); + function(n) {
    "use strict";

    function r(t) {
        var i, r = t.attr("data-target") || (i = t.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
        return n(r)
    }

    function i(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.collapse"),
                f = n.extend({}, t.DEFAULTS, u.data(), "object" == typeof i && i);
            !r && f.toggle && /show|hide/.test(i) && (f.toggle = !1);
            r || u.data("bs.collapse", r = new t(this, f));
            "string" == typeof i && r[i]()
        })
    }
    var t = function(i, r) {
            this.$element = n(i);
            this.options = n.extend({}, t.DEFAULTS, r);
            this.$trigger = n('[data-toggle="collapse"][href="#' + i.id + '"],[data-toggle="collapse"][data-target="#' + i.id + '"]');
            this.transitioning = null;
            this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger);
            this.options.toggle && this.toggle()
        },
        u;
    t.VERSION = "3.3.7";
    t.TRANSITION_DURATION = 350;
    t.DEFAULTS = {
        toggle: !0
    };
    t.prototype.dimension = function() {
        var n = this.$element.hasClass("width");
        return n ? "width" : "height"
    };
    t.prototype.show = function() {
        var f, r, e, u, o, s;
        if (!this.transitioning && !this.$element.hasClass("in") && (r = this.$parent && this.$parent.children(".panel").children(".in, .collapsing"), !(r && r.length && (f = r.data("bs.collapse"), f && f.transitioning)) && (e = n.Event("show.bs.collapse"), this.$element.trigger(e), !e.isDefaultPrevented()))) {
            if (r && r.length && (i.call(r, "hide"), f || r.data("bs.collapse", null)), u = this.dimension(), this.$element.removeClass("collapse").addClass("collapsing")[u](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1, o = function() {
                    this.$element.removeClass("collapsing").addClass("collapse in")[u]("");
                    this.transitioning = 0;
                    this.$element.trigger("shown.bs.collapse")
                }, !n.support.transition) return o.call(this);
            s = n.camelCase(["scroll", u].join("-"));
            this.$element.one("bsTransitionEnd", n.proxy(o, this)).emulateTransitionEnd(t.TRANSITION_DURATION)[u](this.$element[0][s])
        }
    };
    t.prototype.hide = function() {
        var r, i, u;
        if (!this.transitioning && this.$element.hasClass("in") && (r = n.Event("hide.bs.collapse"), this.$element.trigger(r), !r.isDefaultPrevented())) return i = this.dimension(), this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1, u = function() {
            this.transitioning = 0;
            this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
        }, n.support.transition ? void this.$element[i](0).one("bsTransitionEnd", n.proxy(u, this)).emulateTransitionEnd(t.TRANSITION_DURATION) : u.call(this)
    };
    t.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    };
    t.prototype.getParent = function() {
        return n(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(n.proxy(function(t, i) {
            var u = n(i);
            this.addAriaAndCollapsedClass(r(u), u)
        }, this)).end()
    };
    t.prototype.addAriaAndCollapsedClass = function(n, t) {
        var i = n.hasClass("in");
        n.attr("aria-expanded", i);
        t.toggleClass("collapsed", !i).attr("aria-expanded", i)
    };
    u = n.fn.collapse;
    n.fn.collapse = i;
    n.fn.collapse.Constructor = t;
    n.fn.collapse.noConflict = function() {
        return n.fn.collapse = u, this
    };
    n(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(t) {
        var u = n(this);
        u.attr("data-target") || t.preventDefault();
        var f = r(u),
            e = f.data("bs.collapse"),
            o = e ? "toggle" : u.data();
        i.call(f, o)
    })
}(jQuery); + function(n) {
    "use strict";

    function r(t) {
        var i = t.attr("data-target"),
            r;
        return i || (i = t.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, "")), r = i && n(i), r && r.length ? r : t.parent()
    }

    function u(t) {
        t && 3 === t.which || (n(o).remove(), n(i).each(function() {
            var u = n(this),
                i = r(u),
                f = {
                    relatedTarget: this
                };
            i.hasClass("open") && (t && "click" == t.type && /input|textarea/i.test(t.target.tagName) && n.contains(i[0], t.target) || (i.trigger(t = n.Event("hide.bs.dropdown", f)), t.isDefaultPrevented() || (u.attr("aria-expanded", "false"), i.removeClass("open").trigger(n.Event("hidden.bs.dropdown", f)))))
        }))
    }

    function e(i) {
        return this.each(function() {
            var r = n(this),
                u = r.data("bs.dropdown");
            u || r.data("bs.dropdown", u = new t(this));
            "string" == typeof i && u[i].call(r)
        })
    }
    var o = ".dropdown-backdrop",
        i = '[data-toggle="dropdown"]',
        t = function(t) {
            n(t).on("click.bs.dropdown", this.toggle)
        },
        f;
    t.VERSION = "3.3.7";
    t.prototype.toggle = function(t) {
        var f = n(this),
            i, o, e;
        if (!f.is(".disabled, :disabled")) {
            if (i = r(f), o = i.hasClass("open"), u(), !o) {
                if ("ontouchstart" in document.documentElement && !i.closest(".navbar-nav").length && n(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(n(this)).on("click", u), e = {
                        relatedTarget: this
                    }, i.trigger(t = n.Event("show.bs.dropdown", e)), t.isDefaultPrevented()) return;
                f.trigger("focus").attr("aria-expanded", "true");
                i.toggleClass("open").trigger(n.Event("shown.bs.dropdown", e))
            }
            return !1
        }
    };
    t.prototype.keydown = function(t) {
        var e, o, s, h, f, u;
        if (/(38|40|27|32)/.test(t.which) && !/input|textarea/i.test(t.target.tagName) && (e = n(this), t.preventDefault(), t.stopPropagation(), !e.is(".disabled, :disabled"))) {
            if (o = r(e), s = o.hasClass("open"), !s && 27 != t.which || s && 27 == t.which) return 27 == t.which && o.find(i).trigger("focus"), e.trigger("click");
            h = " li:not(.disabled):visible a";
            f = o.find(".dropdown-menu" + h);
            f.length && (u = f.index(t.target), 38 == t.which && u > 0 && u--, 40 == t.which && u < f.length - 1 && u++, ~u || (u = 0), f.eq(u).trigger("focus"))
        }
    };
    f = n.fn.dropdown;
    n.fn.dropdown = e;
    n.fn.dropdown.Constructor = t;
    n.fn.dropdown.noConflict = function() {
        return n.fn.dropdown = f, this
    };
    n(document).on("click.bs.dropdown.data-api", u).on("click.bs.dropdown.data-api", ".dropdown form", function(n) {
        n.stopPropagation()
    }).on("click.bs.dropdown.data-api", i, t.prototype.toggle).on("keydown.bs.dropdown.data-api", i, t.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", t.prototype.keydown)
}(jQuery); + function(n) {
    "use strict";

    function i(i, r) {
        return this.each(function() {
            var f = n(this),
                u = f.data("bs.modal"),
                e = n.extend({}, t.DEFAULTS, f.data(), "object" == typeof i && i);
            u || f.data("bs.modal", u = new t(this, e));
            "string" == typeof i ? u[i](r) : e.show && u.show(r)
        })
    }
    var t = function(t, i) {
            this.options = i;
            this.$body = n(document.body);
            this.$element = n(t);
            this.$dialog = this.$element.find(".modal-dialog");
            this.$backdrop = null;
            this.isShown = null;
            this.originalBodyPad = null;
            this.scrollbarWidth = 0;
            this.ignoreBackdropClick = !1;
            this.options.remote && this.$element.find(".modal-content").load(this.options.remote, n.proxy(function() {
                this.$element.trigger("loaded.bs.modal")
            }, this))
        },
        r;
    t.VERSION = "3.3.7";
    t.TRANSITION_DURATION = 300;
    t.BACKDROP_TRANSITION_DURATION = 150;
    t.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    };
    t.prototype.toggle = function(n) {
        return this.isShown ? this.hide() : this.show(n)
    };
    t.prototype.show = function(i) {
        var r = this,
            u = n.Event("show.bs.modal", {
                relatedTarget: i
            });
        this.$element.trigger(u);
        this.isShown || u.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', n.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            r.$element.one("mouseup.dismiss.bs.modal", function(t) {
                n(t.target).is(r.$element) && (r.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var f = n.support.transition && r.$element.hasClass("fade"),
                u;
            r.$element.parent().length || r.$element.appendTo(r.$body);
            r.$element.show().scrollTop(0);
            r.adjustDialog();
            f && r.$element[0].offsetWidth;
            r.$element.addClass("in");
            r.enforceFocus();
            u = n.Event("shown.bs.modal", {
                relatedTarget: i
            });
            f ? r.$dialog.one("bsTransitionEnd", function() {
                r.$element.trigger("focus").trigger(u)
            }).emulateTransitionEnd(t.TRANSITION_DURATION) : r.$element.trigger("focus").trigger(u)
        }))
    };
    t.prototype.hide = function(i) {
        i && i.preventDefault();
        i = n.Event("hide.bs.modal");
        this.$element.trigger(i);
        this.isShown && !i.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), n(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), n.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", n.proxy(this.hideModal, this)).emulateTransitionEnd(t.TRANSITION_DURATION) : this.hideModal())
    };
    t.prototype.enforceFocus = function() {
        n(document).off("focusin.bs.modal").on("focusin.bs.modal", n.proxy(function(n) {
            document === n.target || this.$element[0] === n.target || this.$element.has(n.target).length || this.$element.trigger("focus")
        }, this))
    };
    t.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", n.proxy(function(n) {
            27 == n.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    };
    t.prototype.resize = function() {
        this.isShown ? n(window).on("resize.bs.modal", n.proxy(this.handleUpdate, this)) : n(window).off("resize.bs.modal")
    };
    t.prototype.hideModal = function() {
        var n = this;
        this.$element.hide();
        this.backdrop(function() {
            n.$body.removeClass("modal-open");
            n.resetAdjustments();
            n.resetScrollbar();
            n.$element.trigger("hidden.bs.modal")
        })
    };
    t.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove();
        this.$backdrop = null
    };
    t.prototype.backdrop = function(i) {
        var e = this,
            f = this.$element.hasClass("fade") ? "fade" : "",
            r, u;
        if (this.isShown && this.options.backdrop) {
            if (r = n.support.transition && f, this.$backdrop = n(document.createElement("div")).addClass("modal-backdrop " + f).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", n.proxy(function(n) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(n.target === n.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !i) return;
            r ? this.$backdrop.one("bsTransitionEnd", i).emulateTransitionEnd(t.BACKDROP_TRANSITION_DURATION) : i()
        } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), u = function() {
            e.removeBackdrop();
            i && i()
        }, n.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", u).emulateTransitionEnd(t.BACKDROP_TRANSITION_DURATION) : u()) : i && i()
    };
    t.prototype.handleUpdate = function() {
        this.adjustDialog()
    };
    t.prototype.adjustDialog = function() {
        var n = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && n ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !n ? this.scrollbarWidth : ""
        })
    };
    t.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    };
    t.prototype.checkScrollbar = function() {
        var n = window.innerWidth,
            t;
        n || (t = document.documentElement.getBoundingClientRect(), n = t.right - Math.abs(t.left));
        this.bodyIsOverflowing = document.body.clientWidth < n;
        this.scrollbarWidth = this.measureScrollbar()
    };
    t.prototype.setScrollbar = function() {
        var n = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "";
        this.bodyIsOverflowing && this.$body.css("padding-right", n + this.scrollbarWidth)
    };
    t.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    };
    t.prototype.measureScrollbar = function() {
        var n = document.createElement("div"),
            t;
        return n.className = "modal-scrollbar-measure", this.$body.append(n), t = n.offsetWidth - n.clientWidth, this.$body[0].removeChild(n), t
    };
    r = n.fn.modal;
    n.fn.modal = i;
    n.fn.modal.Constructor = t;
    n.fn.modal.noConflict = function() {
        return n.fn.modal = r, this
    };
    n(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(t) {
        var r = n(this),
            f = r.attr("href"),
            u = n(r.attr("data-target") || f && f.replace(/.*(?=#[^\s]+$)/, "")),
            e = u.data("bs.modal") ? "toggle" : n.extend({
                remote: !/#/.test(f) && f
            }, u.data(), r.data());
        r.is("a") && t.preventDefault();
        u.one("show.bs.modal", function(n) {
            n.isDefaultPrevented() || u.one("hidden.bs.modal", function() {
                r.is(":visible") && r.trigger("focus")
            })
        });
        i.call(u, e, this)
    })
}(jQuery); + function(n) {
    "use strict";

    function r(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.tooltip"),
                f = "object" == typeof i && i;
            !r && /destroy|hide/.test(i) || (r || u.data("bs.tooltip", r = new t(this, f)), "string" == typeof i && r[i]())
        })
    }
    var t = function(n, t) {
            this.type = null;
            this.options = null;
            this.enabled = null;
            this.timeout = null;
            this.hoverState = null;
            this.$element = null;
            this.inState = null;
            this.init("tooltip", n, t)
        },
        i;
    t.VERSION = "3.3.7";
    t.TRANSITION_DURATION = 150;
    t.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"><\/div><div class="tooltip-inner"><\/div><\/div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    };
    t.prototype.init = function(t, i, r) {
        var f, e, u, o, s;
        if (this.enabled = !0, this.type = t, this.$element = n(i), this.options = this.getOptions(r), this.$viewport = this.options.viewport && n(n.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (f = this.options.trigger.split(" "), e = f.length; e--;)
            if (u = f[e], "click" == u) this.$element.on("click." + this.type, this.options.selector, n.proxy(this.toggle, this));
            else "manual" != u && (o = "hover" == u ? "mouseenter" : "focusin", s = "hover" == u ? "mouseleave" : "focusout", this.$element.on(o + "." + this.type, this.options.selector, n.proxy(this.enter, this)), this.$element.on(s + "." + this.type, this.options.selector, n.proxy(this.leave, this)));
        this.options.selector ? this._options = n.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    };
    t.prototype.getDefaults = function() {
        return t.DEFAULTS
    };
    t.prototype.getOptions = function(t) {
        return t = n.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && "number" == typeof t.delay && (t.delay = {
            show: t.delay,
            hide: t.delay
        }), t
    };
    t.prototype.getDelegateOptions = function() {
        var t = {},
            i = this.getDefaults();
        return this._options && n.each(this._options, function(n, r) {
            i[n] != r && (t[n] = r)
        }), t
    };
    t.prototype.enter = function(t) {
        var i = t instanceof this.constructor ? t : n(t.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), n(t.currentTarget).data("bs." + this.type, i)), t instanceof n.Event && (i.inState["focusin" == t.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState ? void(i.hoverState = "in") : (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() {
            "in" == i.hoverState && i.show()
        }, i.options.delay.show)) : i.show())
    };
    t.prototype.isInStateTrue = function() {
        for (var n in this.inState)
            if (this.inState[n]) return !0;
        return !1
    };
    t.prototype.leave = function(t) {
        var i = t instanceof this.constructor ? t : n(t.currentTarget).data("bs." + this.type);
        if (i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), n(t.currentTarget).data("bs." + this.type, i)), t instanceof n.Event && (i.inState["focusout" == t.type ? "focus" : "hover"] = !1), !i.isInStateTrue()) return clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function() {
            "out" == i.hoverState && i.hide()
        }, i.options.delay.hide)) : i.hide()
    };
    t.prototype.show = function() {
        var c = n.Event("show.bs." + this.type),
            l, p, e, w, h;
        if (this.hasContent() && this.enabled) {
            if (this.$element.trigger(c), l = n.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]), c.isDefaultPrevented() || !l) return;
            var u = this,
                r = this.tip(),
                a = this.getUID(this.type);
            this.setContent();
            r.attr("id", a);
            this.$element.attr("aria-describedby", a);
            this.options.animation && r.addClass("fade");
            var i = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
                v = /\s?auto?\s?/i,
                y = v.test(i);
            y && (i = i.replace(v, "") || "top");
            r.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(i).data("bs." + this.type, this);
            this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element);
            this.$element.trigger("inserted.bs." + this.type);
            var f = this.getPosition(),
                o = r[0].offsetWidth,
                s = r[0].offsetHeight;
            y && (p = i, e = this.getPosition(this.$viewport), i = "bottom" == i && f.bottom + s > e.bottom ? "top" : "top" == i && f.top - s < e.top ? "bottom" : "right" == i && f.right + o > e.width ? "left" : "left" == i && f.left - o < e.left ? "right" : i, r.removeClass(p).addClass(i));
            w = this.getCalculatedOffset(i, f, o, s);
            this.applyPlacement(w, i);
            h = function() {
                var n = u.hoverState;
                u.$element.trigger("shown.bs." + u.type);
                u.hoverState = null;
                "out" == n && u.leave(u)
            };
            n.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", h).emulateTransitionEnd(t.TRANSITION_DURATION) : h()
        }
    };
    t.prototype.applyPlacement = function(t, i) {
        var r = this.tip(),
            l = r[0].offsetWidth,
            e = r[0].offsetHeight,
            o = parseInt(r.css("margin-top"), 10),
            s = parseInt(r.css("margin-left"), 10),
            h, f, u;
        isNaN(o) && (o = 0);
        isNaN(s) && (s = 0);
        t.top += o;
        t.left += s;
        n.offset.setOffset(r[0], n.extend({
            using: function(n) {
                r.css({
                    top: Math.round(n.top),
                    left: Math.round(n.left)
                })
            }
        }, t), 0);
        r.addClass("in");
        h = r[0].offsetWidth;
        f = r[0].offsetHeight;
        "top" == i && f != e && (t.top = t.top + e - f);
        u = this.getViewportAdjustedDelta(i, t, h, f);
        u.left ? t.left += u.left : t.top += u.top;
        var c = /top|bottom/.test(i),
            a = c ? 2 * u.left - l + h : 2 * u.top - e + f,
            v = c ? "offsetWidth" : "offsetHeight";
        r.offset(t);
        this.replaceArrow(a, r[0][v], c)
    };
    t.prototype.replaceArrow = function(n, t, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - n / t) + "%").css(i ? "top" : "left", "")
    };
    t.prototype.setContent = function() {
        var n = this.tip(),
            t = this.getTitle();
        n.find(".tooltip-inner")[this.options.html ? "html" : "text"](t);
        n.removeClass("fade in top bottom left right")
    };
    t.prototype.hide = function(i) {
        function f() {
            "in" != r.hoverState && u.detach();
            r.$element && r.$element.removeAttr("aria-describedby").trigger("hidden.bs." + r.type);
            i && i()
        }
        var r = this,
            u = n(this.$tip),
            e = n.Event("hide.bs." + this.type);
        if (this.$element.trigger(e), !e.isDefaultPrevented()) return u.removeClass("in"), n.support.transition && u.hasClass("fade") ? u.one("bsTransitionEnd", f).emulateTransitionEnd(t.TRANSITION_DURATION) : f(), this.hoverState = null, this
    };
    t.prototype.fixTitle = function() {
        var n = this.$element;
        (n.attr("title") || "string" != typeof n.attr("data-original-title")) && n.attr("data-original-title", n.attr("title") || "").attr("title", "")
    };
    t.prototype.hasContent = function() {
        return this.getTitle()
    };
    t.prototype.getPosition = function(t) {
        t = t || this.$element;
        var r = t[0],
            u = "BODY" == r.tagName,
            i = r.getBoundingClientRect();
        null == i.width && (i = n.extend({}, i, {
            width: i.right - i.left,
            height: i.bottom - i.top
        }));
        var f = window.SVGElement && r instanceof window.SVGElement,
            e = u ? {
                top: 0,
                left: 0
            } : f ? null : t.offset(),
            o = {
                scroll: u ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
            },
            s = u ? {
                width: n(window).width(),
                height: n(window).height()
            } : null;
        return n.extend({}, i, o, s, e)
    };
    t.prototype.getCalculatedOffset = function(n, t, i, r) {
        return "bottom" == n ? {
            top: t.top + t.height,
            left: t.left + t.width / 2 - i / 2
        } : "top" == n ? {
            top: t.top - r,
            left: t.left + t.width / 2 - i / 2
        } : "left" == n ? {
            top: t.top + t.height / 2 - r / 2,
            left: t.left - i
        } : {
            top: t.top + t.height / 2 - r / 2,
            left: t.left + t.width
        }
    };
    t.prototype.getViewportAdjustedDelta = function(n, t, i, r) {
        var f = {
                top: 0,
                left: 0
            },
            e, u, o, s, h, c;
        return this.$viewport ? (e = this.options.viewport && this.options.viewport.padding || 0, u = this.getPosition(this.$viewport), /right|left/.test(n) ? (o = t.top - e - u.scroll, s = t.top + e - u.scroll + r, o < u.top ? f.top = u.top - o : s > u.top + u.height && (f.top = u.top + u.height - s)) : (h = t.left - e, c = t.left + e + i, h < u.left ? f.left = u.left - h : c > u.right && (f.left = u.left + u.width - c)), f) : f
    };
    t.prototype.getTitle = function() {
        var t = this.$element,
            n = this.options;
        return t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title)
    };
    t.prototype.getUID = function(n) {
        do n += ~~(1e6 * Math.random()); while (document.getElementById(n));
        return n
    };
    t.prototype.tip = function() {
        if (!this.$tip && (this.$tip = n(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    };
    t.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    };
    t.prototype.enable = function() {
        this.enabled = !0
    };
    t.prototype.disable = function() {
        this.enabled = !1
    };
    t.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    };
    t.prototype.toggle = function(t) {
        var i = this;
        t && (i = n(t.currentTarget).data("bs." + this.type), i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), n(t.currentTarget).data("bs." + this.type, i)));
        t ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    };
    t.prototype.destroy = function() {
        var n = this;
        clearTimeout(this.timeout);
        this.hide(function() {
            n.$element.off("." + n.type).removeData("bs." + n.type);
            n.$tip && n.$tip.detach();
            n.$tip = null;
            n.$arrow = null;
            n.$viewport = null;
            n.$element = null
        })
    };
    i = n.fn.tooltip;
    n.fn.tooltip = r;
    n.fn.tooltip.Constructor = t;
    n.fn.tooltip.noConflict = function() {
        return n.fn.tooltip = i, this
    }
}(jQuery); + function(n) {
    "use strict";

    function r(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.popover"),
                f = "object" == typeof i && i;
            !r && /destroy|hide/.test(i) || (r || u.data("bs.popover", r = new t(this, f)), "string" == typeof i && r[i]())
        })
    }
    var t = function(n, t) {
            this.init("popover", n, t)
        },
        i;
    if (!n.fn.tooltip) throw new Error("Popover requires tooltip.js");
    t.VERSION = "3.3.7";
    t.DEFAULTS = n.extend({}, n.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"><\/div><h3 class="popover-title"><\/h3><div class="popover-content"><\/div><\/div>'
    });
    t.prototype = n.extend({}, n.fn.tooltip.Constructor.prototype);
    t.prototype.constructor = t;
    t.prototype.getDefaults = function() {
        return t.DEFAULTS
    };
    t.prototype.setContent = function() {
        var n = this.tip(),
            i = this.getTitle(),
            t = this.getContent();
        n.find(".popover-title")[this.options.html ? "html" : "text"](i);
        n.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof t ? "html" : "append" : "text"](t);
        n.removeClass("fade top bottom left right in");
        n.find(".popover-title").html() || n.find(".popover-title").hide()
    };
    t.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    };
    t.prototype.getContent = function() {
        var t = this.$element,
            n = this.options;
        return t.attr("data-content") || ("function" == typeof n.content ? n.content.call(t[0]) : n.content)
    };
    t.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    i = n.fn.popover;
    n.fn.popover = r;
    n.fn.popover.Constructor = t;
    n.fn.popover.noConflict = function() {
        return n.fn.popover = i, this
    }
}(jQuery); + function(n) {
    "use strict";

    function t(i, r) {
        this.$body = n(document.body);
        this.$scrollElement = n(n(i).is(document.body) ? window : i);
        this.options = n.extend({}, t.DEFAULTS, r);
        this.selector = (this.options.target || "") + " .nav li > a";
        this.offsets = [];
        this.targets = [];
        this.activeTarget = null;
        this.scrollHeight = 0;
        this.$scrollElement.on("scroll.bs.scrollspy", n.proxy(this.process, this));
        this.refresh();
        this.process()
    }

    function i(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.scrollspy"),
                f = "object" == typeof i && i;
            r || u.data("bs.scrollspy", r = new t(this, f));
            "string" == typeof i && r[i]()
        })
    }
    t.VERSION = "3.3.7";
    t.DEFAULTS = {
        offset: 10
    };
    t.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    };
    t.prototype.refresh = function() {
        var t = this,
            i = "offset",
            r = 0;
        this.offsets = [];
        this.targets = [];
        this.scrollHeight = this.getScrollHeight();
        n.isWindow(this.$scrollElement[0]) || (i = "position", r = this.$scrollElement.scrollTop());
        this.$body.find(this.selector).map(function() {
            var f = n(this),
                u = f.data("target") || f.attr("href"),
                t = /^#./.test(u) && n(u);
            return t && t.length && t.is(":visible") && [
                [t[i]().top + r, u]
            ] || null
        }).sort(function(n, t) {
            return n[0] - t[0]
        }).each(function() {
            t.offsets.push(this[0]);
            t.targets.push(this[1])
        })
    };
    t.prototype.process = function() {
        var n, i = this.$scrollElement.scrollTop() + this.options.offset,
            f = this.getScrollHeight(),
            e = this.options.offset + f - this.$scrollElement.height(),
            t = this.offsets,
            r = this.targets,
            u = this.activeTarget;
        if (this.scrollHeight != f && this.refresh(), i >= e) return u != (n = r[r.length - 1]) && this.activate(n);
        if (u && i < t[0]) return this.activeTarget = null, this.clear();
        for (n = t.length; n--;) u != r[n] && i >= t[n] && (void 0 === t[n + 1] || i < t[n + 1]) && this.activate(r[n])
    };
    t.prototype.activate = function(t) {
        this.activeTarget = t;
        this.clear();
        var r = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
            i = n(r).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active"));
        i.trigger("activate.bs.scrollspy")
    };
    t.prototype.clear = function() {
        n(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var r = n.fn.scrollspy;
    n.fn.scrollspy = i;
    n.fn.scrollspy.Constructor = t;
    n.fn.scrollspy.noConflict = function() {
        return n.fn.scrollspy = r, this
    };
    n(window).on("load.bs.scrollspy.data-api", function() {
        n('[data-spy="scroll"]').each(function() {
            var t = n(this);
            i.call(t, t.data())
        })
    })
}(jQuery); + function(n) {
    "use strict";

    function r(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.tab");
            r || u.data("bs.tab", r = new t(this));
            "string" == typeof i && r[i]()
        })
    }
    var t = function(t) {
            this.element = n(t)
        },
        u, i;
    t.VERSION = "3.3.7";
    t.TRANSITION_DURATION = 150;
    t.prototype.show = function() {
        var t = this.element,
            f = t.closest("ul:not(.dropdown-menu)"),
            i = t.data("target"),
            u;
        if (i || (i = t.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
            var r = f.find(".active:last a"),
                e = n.Event("hide.bs.tab", {
                    relatedTarget: t[0]
                }),
                o = n.Event("show.bs.tab", {
                    relatedTarget: r[0]
                });
            (r.trigger(e), t.trigger(o), o.isDefaultPrevented() || e.isDefaultPrevented()) || (u = n(i), this.activate(t.closest("li"), f), this.activate(u, u.parent(), function() {
                r.trigger({
                    type: "hidden.bs.tab",
                    relatedTarget: t[0]
                });
                t.trigger({
                    type: "shown.bs.tab",
                    relatedTarget: r[0]
                })
            }))
        }
    };
    t.prototype.activate = function(i, r, u) {
        function e() {
            f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1);
            i.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0);
            o ? (i[0].offsetWidth, i.addClass("in")) : i.removeClass("fade");
            i.parent(".dropdown-menu").length && i.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0);
            u && u()
        }
        var f = r.find("> .active"),
            o = u && n.support.transition && (f.length && f.hasClass("fade") || !!r.find("> .fade").length);
        f.length && o ? f.one("bsTransitionEnd", e).emulateTransitionEnd(t.TRANSITION_DURATION) : e();
        f.removeClass("in")
    };
    u = n.fn.tab;
    n.fn.tab = r;
    n.fn.tab.Constructor = t;
    n.fn.tab.noConflict = function() {
        return n.fn.tab = u, this
    };
    i = function(t) {
        t.preventDefault();
        r.call(n(this), "show")
    };
    n(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', i).on("click.bs.tab.data-api", '[data-toggle="pill"]', i)
}(jQuery); + function(n) {
    "use strict";

    function i(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.affix"),
                f = "object" == typeof i && i;
            r || u.data("bs.affix", r = new t(this, f));
            "string" == typeof i && r[i]()
        })
    }
    var t = function(i, r) {
            this.options = n.extend({}, t.DEFAULTS, r);
            this.$target = n(this.options.target).on("scroll.bs.affix.data-api", n.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", n.proxy(this.checkPositionWithEventLoop, this));
            this.$element = n(i);
            this.affixed = null;
            this.unpin = null;
            this.pinnedOffset = null;
            this.checkPosition()
        },
        r;
    t.VERSION = "3.3.7";
    t.RESET = "affix affix-top affix-bottom";
    t.DEFAULTS = {
        offset: 0,
        target: window
    };
    t.prototype.getState = function(n, t, i, r) {
        var u = this.$target.scrollTop(),
            f = this.$element.offset(),
            e = this.$target.height();
        if (null != i && "top" == this.affixed) return u < i && "top";
        if ("bottom" == this.affixed) return null != i ? !(u + this.unpin <= f.top) && "bottom" : !(u + e <= n - r) && "bottom";
        var o = null == this.affixed,
            s = o ? u : f.top,
            h = o ? e : t;
        return null != i && u <= i ? "top" : null != r && s + h >= n - r && "bottom"
    };
    t.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(t.RESET).addClass("affix");
        var n = this.$target.scrollTop(),
            i = this.$element.offset();
        return this.pinnedOffset = i.top - n
    };
    t.prototype.checkPositionWithEventLoop = function() {
        setTimeout(n.proxy(this.checkPosition, this), 1)
    };
    t.prototype.checkPosition = function() {
        var i, e, o;
        if (this.$element.is(":visible")) {
            var s = this.$element.height(),
                r = this.options.offset,
                f = r.top,
                u = r.bottom,
                h = Math.max(n(document).height(), n(document.body).height());
            if ("object" != typeof r && (u = f = r), "function" == typeof f && (f = r.top(this.$element)), "function" == typeof u && (u = r.bottom(this.$element)), i = this.getState(h, s, f, u), this.affixed != i) {
                if (null != this.unpin && this.$element.css("top", ""), e = "affix" + (i ? "-" + i : ""), o = n.Event(e + ".bs.affix"), this.$element.trigger(o), o.isDefaultPrevented()) return;
                this.affixed = i;
                this.unpin = "bottom" == i ? this.getPinnedOffset() : null;
                this.$element.removeClass(t.RESET).addClass(e).trigger(e.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == i && this.$element.offset({
                top: h - s - u
            })
        }
    };
    r = n.fn.affix;
    n.fn.affix = i;
    n.fn.affix.Constructor = t;
    n.fn.affix.noConflict = function() {
        return n.fn.affix = r, this
    };
    n(window).on("load", function() {
        n('[data-spy="affix"]').each(function() {
            var r = n(this),
                t = r.data();
            t.offset = t.offset || {};
            null != t.offsetBottom && (t.offset.bottom = t.offsetBottom);
            null != t.offsetTop && (t.offset.top = t.offsetTop);
            i.call(r, t)
        })
    })
}(jQuery);
!self.parent || self.parent === self || self.parent.frames.length == 0 || (self.parent.location = document.location);
$(document).ready(function() {
        function o() {
            return search_key = $("#query").val(), search_key && search_key != st && (window.location = "/rev/" + encodeURIComponent(search_key).replace(/%20/g, "+").replace(/%2F/g, "+")), !1
        }

        function s() {
            var n = Get_Cookie("subscr_list");
            n = n != "" ? $.parseJSON(n) : {};
            n = n || {};
            delete n[chid];
            Set_Cookie("subscr_list", JSON.stringify(n), "1000", "/");
            $("#subscribeUser").removeClass("btn-unsubscribe").addClass("btn-subscribe");
            $("#subscribeUser span").html('<i class="fa fa-youtube-play" aria-hidden="true"><\/i>' + s1t);
            show_vmsg(rst)
        }

        function n() {
            var n = Get_Cookie("subscr_list");
            n = n != "" ? $.parseJSON(n) : {};
            n = n || {};
            n[chid] = cht;
            n.length > 50 && (subsc_list = subsc_list.slice(0, 50));
            Set_Cookie("subscr_list", JSON.stringify(n), "1000", "/");
            $("#subscribeUser").removeClass("btn-subscribe").addClass("btn-unsubscribe");
            $("#subscribeUser span").html('<i class="fa fa-youtube-play" aria-hidden="true"><\/i>' + s2t);
            show_vmsg(ast)
        }

        function e() {
            var n = Get_Cookie("liked_list"),
                t;
            (n = JSON.parse(n), "[object Array]" === Object.prototype.toString.call(n)) && (t = n.indexOf(vid), 0 <= t && n.splice(t, 1), Set_Cookie("liked_list", JSON.stringify(n), "1000", "/"))
        }

        function r(n) {
            document.cookie = n + "=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;"
        }

        function h(n, t, i) {
            return i.indexOf(n) === t
        }

        function c() {
            var n = Get_Cookie("liked_list");
            n = JSON.parse(n);
            "[object Array]" !== Object.prototype.toString.call(n) && (n = []);
            n.unshift(vid);
            50 < n.length && (n = n.slice(0, 50));
            Set_Cookie("liked_list", JSON.stringify(n), "1000", "/")
        }

        function l() {
            typeof show_comm != "undefined" && show_comm == "1" && $.ajax({
                type: "POST",
                url: "/video/getcomment",
                data: {
                    Id: vid,
                    channelId: chid
                },
                success: function(n) {
                    n.error == 0 ? $("#comments-ul").html(n.content) : $("#comments-ul").html("")
                },
                error: function() {
                    $("#comments-ul").html("")
                }
            })
        }

        function f(n) {
            "share" == n ? ($(".sharepdiv").hide(), $("#shsubpan_share").show(), $(".shbut").removeClass("shbutact"), $("#shsubpan_share_but").addClass("shbutact")) : "embed" == n && ($(".sharepdiv").hide(), $("#shsubpan_embed").show(), $(".shbut").removeClass("shbutact"), $("#shsubpan_embed_but").addClass("shbutact"));
            $("#shsubpan").show()
        }
        var t, u, i;
        $.isFunction($.fn.autocomplete) && $("#query").autocomplete({
            source: function(n, t) {
                var i = n.term;
                $.ajax({
                    url: "https://suggestqueries.google.com/complete/search?hl=en&ds=yt&client=youtube&hjson=t&cp=1&q=" + i + "&format=5&alt=json&callback=?",
                    dataType: "jsonp",
                    success: function(n) {
                        t($.map(n[1], function(n) {
                            return {
                                label: n[0],
                                value: n[0]
                            }
                        }))
                    }
                })
            },
            select: function(n, t) {
                window.location = "/rev/" + encodeURIComponent(t.item.label).replace(/%20/g, "+").replace(/%2F/g, "+")
            }
        });
        t = !1;
        $("#lngsel").on("click", function() {
            t != "lngsel" ? ($("#lngd").load("/lng.php").show(), t = "lngsel") : ($("#lngd").hide(), t = !1)
        });
        $("#csel").on("click", function() {
            t != "csel" ? ($("#lngd").load("/lon.php").show(), t = "csel") : ($("#lngd").hide(), t = !1)
        });
        $("#lngd").on("click", ".cis", function() {
            return Set_Cookie("c", $(this).data("ccode"), "1000", "/"), location.reload(), !1
        });
        $("#lngd").on("click", ".lngis", function() {
            return Set_Cookie("_culture", $(this).data("lng"), "1000", "/"), location.reload(), !1
        });
        $("#pn").change(function() {
            $(this).is(":checked") ? (pn = 1, Set_Cookie("nn", "1", "1000", "/")) : (pn = 0, Set_Cookie("nn", "0", "1000", "/"))
        });
        $("#closesh").on("click", function() {
            $(".sharepdiv").hide();
            $("#shsubpan").hide()
        });
        $("#clearv").on("click", function() {
            return n = $(this).data("t"), n == "H" ? r("watched") : n == "L" ? r("liked_list") : n == "WL" ? r("watch_later") : n == "PL" ? r("playlist") : n == "sub" && Set_Cookie("subscr_list", "", "1000", "/"), location.reload(), !1
        });
        $("#check_wl").on("click", function() {
            if (wll == 1) watch_later = Get_Cookie("watch_later"), watch_later = watch_later != "" ? JSON.parse(watch_later) : [], watch_later = removeA(watch_later, vid), Set_Cookie("watch_later", JSON.stringify(watch_later), "1000", "/"), wll = 0, $("#wl_add").html(""), show_vmsg(rwlt);
            else {
                var n = Get_Cookie("watch_later");
                n = n != "" ? JSON.parse(n) : [];
                n = n || [];
                n.push(vid);
                Set_Cookie("watch_later", JSON.stringify(n), "1000", "/");
                wll = 1;
                $("#wl_add").html('<i class="fa fa-check" aria-hidden="true"><\/i>');
                show_vmsg(awlt)
            }
            return !1
        });
        $(".wladd").on("click", function() {
            var n = Get_Cookie("watch_later");
            return n = n != "" ? JSON.parse(n) : [], n = n || [], wl_vid = $(this).data("wlid"), n.push(wl_vid), n = n.filter(h), Set_Cookie("watch_later", JSON.stringify(n), "1000", "/"), $(this).html('<i class="fa fa-check"><\/i>').show(), show_vmsg(awlt), !1
        });
        $("#check_pl").on("click", function() {
            if (pll == 1) n = Get_Cookie("playlist"), n = n != "" ? JSON.parse(n) : [], n = removeA(n, vid), Set_Cookie("playlist", JSON.stringify(n), "1000", "/"), pll = 0, $("#pl_add").html(""), show_vmsg(rplt);
            else {
                var n = Get_Cookie("playlist");
                n = n != "" ? JSON.parse(n) : [];
                n = n || [];
                n.push(vid);
                Set_Cookie("playlist", JSON.stringify(n), "1000", "/");
                pll = 1;
                $("#pl_add").html('<i class="fa fa-check" aria-hidden="true"><\/i>');
                show_vmsg(aplt)
            }
            return !1
        });
        $("#tchange").on("click", function() {
            dark == 1 ? ($('link[href="/Content/201tube/css/dark.css?v=20"]').prop("disabled", !0), $(".logo a img").attr("src", "/Content/201tube/img/logo-video.png"), dark = !1, $("#tchange").prop("title", doff).tooltip("fixTitle").tooltip("show"), Set_Cookie("t", "", "1000", "/")) : ($("head").append('<link rel="stylesheet" href="/Content/201tube/css/dark.css?v=20">').removeAttr("disabled"), $(".logo a img").attr("src", "/Content/201tube/img/logo-video_d.png"), dark = 1, $("#tchange").prop("title", don).tooltip("fixTitle").tooltip("show"), Set_Cookie("t", "dark", "1000", "/"))
        });
        $('[data-toggle="tooltip"]').tooltip();
        $(".replay").on("click", function() {
            return replay == 1 ? (replay = !1, $(".replay").css("opacity", "0.25"), $(".replay").prop("title", roff).tooltip("fixTitle").tooltip("show")) : (replay = 1, $(".replay").css("opacity", "1"), $(".replay").prop("title", ron).tooltip("fixTitle").tooltip("show")), console.log(replay), !1
        });
        $(".related").on("click", function() {
            return window.location = $(this).data("goto"), !1
        });
        $(function() {
            $("img.lazy").lazyload()
        });
        $(".side-opener").on({
            click: function(n) {
                n.preventDefault();
                $("body").toggleClass("sideactive")
            }
        });
        $(".la").each(function() {
            $(this).attr("src", $(this).data("la"))
        });
        $("#sw_comm").on("click", function() {
            return 1 == show_comm ? ($("#userCommentsList").hide(), $("#sw_comm").removeClass("fa-caret-up").addClass("fa-caret-down"), show_comm = 0) : ($("#userCommentsList").show(), $("#sw_comm").removeClass("fa-caret-down").addClass("fa-caret-up"), show_comm = 1), !1
        });
        $("#sw_descr").on("click", function() {
            return 1 == show_descr ? ($("#ava_img").hide(), $("#buttid").hide(), $("#descr_list").hide(), $("#sw_descr").removeClass("fa-caret-up").addClass("fa-caret-down"), show_descr = 0) : ($("#descr_list").show(), $("#sw_descr").removeClass("fa-caret-down").addClass("fa-caret-up"), $("#ava_img").show(), $("#buttid").show(), show_descr = 1), !1
        });
        $(".btn-search-toggle").on({
            click: function(n) {
                n.preventDefault();
                $("#header").toggleClass("drop-search")
            }
        });
        $(".show-small-form").click(function() {
            $(".form-small").toggleClass("show")
        });
        $(".s-types").on("click", function() {
            var n = $(this).html();
            $(".search-type").html(n)
        });
        $("body").on("click", "#soc_share", function() {
            return $("#cb-item-share").addClass("active").show(), !1
        });
        $(".btn-like").on("click", function() {
            return 2 == liked ? (likes--, $(".btn-like i").css({
                background: "url(/Content/201tube/img/up.png) no-repeat"
            }), show_vmsg(rlt), Set_Cookie("liked_" + vid, "", "1000"), liked = "", e(), $("#l_num").css({
                color: "#767676"
            })) : (likes++, Set_Cookie("liked_" + vid, "2", "1000"), $(".btn-like i").css({
                background: "url(/Content/201tube/img/up_bl.png) no-repeat"
            }), show_vmsg(alt), 1 == liked && (dislikes--, $(".btn-dislike i").css({
                opacity: "0.5"
            }), $("#disl_num").css({
                color: "#767676"
            })), liked = 2, c(), $("#l_num").css({
                color: "#428bca"
            })), $("#l_num").html(" " + number_format(likes, 0, ".", " ")), $("#disl_num").html(" " + number_format(dislikes, 0, ".", " ")), !1
        });
        $(".btn-dislike").on("click", function() {
            return 1 == liked ? (dislikes--, $(".btn-dislike i").css({
                opacity: "0.5"
            }), Set_Cookie("liked_" + vid, "", "1000"), liked = "", $("#disl_num").css({
                color: "#767676"
            })) : (dislikes++, Set_Cookie("liked_" + vid, "1", "1000"), $(".btn-dislike i").css({
                opacity: "1"
            }), $("#disl_num").css({
                color: "#050708"
            }), 2 == liked && (likes--, $(".btn-like i").css({
                background: "url(/Content/201tube/img/up.png) no-repeat"
            }), $("#l_num").css({
                color: "#767676"
            })), show_vmsg(rlt), liked = 1, e()), $("#l_num").html(" " + number_format(likes, 0, ".", " ")), $("#disl_num").html(" " + number_format(dislikes, 0, ".", " ")), !1
        });
        $("#subscribeUser").on("click", function() {
            return 1 == subscr ? (s(), subscr = "") : (n(), subscr = 1), !1
        });
        $("#search").submit(function() {
            return o(), !1
        });
        $("#cbsearch").click(function() {
            return a(), !1
        });
        u = 0;
        i = "";
        $("#dropdownMenu1").on("click", function() {
            u == 0 && ($.post("/dlink.php", {
                key: sig_key,
                id: vid
            }, function(n) {
                typeof n != "undefined" && n.length > 0 ? $.each(n, function(n, t) {
                    i = i + '<li><a role="menuitem" target="_blank" href="' + t.l + '"><i class="fa fa-film"><\/i> ' + t.t + "<\/a><\/li>"
                }) : i = "<li>Lỗi :o(<\/li>";
                $("#linkres").html(i)
            }, "json"), u = 1)
        });
        setTimeout(function() {
            l()
        }, 7e3);
        $(".seekto").on("click", function() {
            timeto = $(this).data("time");
            player.seekTo(timeto, !0);
            player.playVideo()
        });
        // $(document).mouseup(function(n) {
        //     var t = $("#search");
        //     t.is(n.target) || 0 !== t.has(n.target).length || (document.getElementById("lsbl").innerHTML = "")
        // });
        $("body").on("click", "#soc_share", function() {
            return f($(this).data("tab")), !1
        });
        $("body").on("click", "#shsubpan_share_but", function() {
            return f($(this).data("tab")), !1
        });
        $("body").on("click", "#shsubpan_embed_but", function() {
            return f($(this).data("tab")), !1
        });
        $("#p_controls, #p_autoplay, #p_replay, #vpsize").on("change", function() {
            gets_array = [];
            $("#p_controls").is(":checked") || gets_array.push("controls=0");
            $("#p_autoplay").is(":checked") && gets_array.push("autoplay=1");
            $("#p_replay").is(":checked") && gets_array.push("replay=1");
            gets_part = "undefined" != typeof gets_array && gets_array.length > 0 ? "?" + gets_array.join("&") : "";
            eph = $("#vpsize").find(":selected").data("height");
            epw = $("#vpsize").find(":selected").data("width");
            embed_code = '<iframe width="' + epw + '" height="' + eph + '" src="https://' + dn + "/embed/" + vid + gets_part + '" frameborder="0" allow="autoplay;encrypted-media"><\/iframe>';
            $("#embed_video").val(embed_code)
        })
    }),
    function(n) {
        n.fn.menumaker = function(t) {
            var i = n(this),
                r = n.extend({
                    format: "dropdown",
                    sticky: !1
                }, t);
            return this.each(function() {
                n(this).find(".button").on("click", function() {
                    n(this).toggleClass("menu-opened");
                    var t = n(this).next("ul");
                    t.hasClass("open") ? t.slideToggle().removeClass("open") : (t.slideToggle().addClass("open"), r.format === "dropdown" && t.find("ul").show())
                });
                i.find("li ul").parent().addClass("has-sub");
                multiTg = function() {
                    i.find(".has-sub").prepend('<span class="submenu-button"><\/span>');
                    i.find(".submenu-button").on("click", function() {
                        n(this).toggleClass("submenu-opened");
                        n(this).siblings("ul").hasClass("open") ? n(this).siblings("ul").removeClass("open").slideToggle() : n(this).siblings("ul").addClass("open").slideToggle()
                    })
                };
                r.format === "multitoggle" ? multiTg() : i.addClass("dropdown");
                r.sticky === !0 && i.css("position", "fixed");
                resizeFix = function() {
                    var t = 700;
                    n(window).width() > t && i.find("ul").show();
                    n(window).width() <= t && i.find("ul").hide().removeClass("open")
                };
                resizeFix();
                return n(window).on("resize", resizeFix)
            })
        }
    }(jQuery),
    function(n) {
        n(document).ready(function() {
            n("#cssmenu").menumaker({
                format: "multitoggle"
            })
        })
    }(jQuery),
    function(n) {
        "use strict";

        function h(t) {
            n(t).on("click" + s, this.toggle)
        }

        function w(n, t) {
            n.hasClass("pull-center") && n.css("margin-right", n.outerWidth() / -2);
            n.hasClass("pull-middle") && n.css("margin-top", n.outerHeight() / -2 - t.outerHeight() / 2)
        }

        function c(r, u) {
            if (i) {
                u || (u = [i]);
                var f;
                i[0] !== u[0][0] ? f = i : (f = u[u.length - 1], f.parent().hasClass(o) && (f = f.parent()));
                f.find("." + t).removeClass(t);
                f.hasClass(t) && f.removeClass(t);
                f === i && (i = null, n(e).remove())
            }
        }

        function b(n) {
            for (var i = [n], t; !t || t.hasClass(a);) t = (t || n).parent(), t.hasClass(o) && (t = t.parent()), t.children(r) && i.unshift(t);
            return i
        }

        function l(t) {
            var i = t.attr("data-target"),
                r;
            return i || (i = t.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, "")), r = i && n(i), r && r.length ? r : t.parent()
        }
        var r = '[data-toggle="dropdown"]',
            y = ".disabled, :disabled",
            e = ".dropdown-backdrop",
            o = "dropdown-menu",
            a = "dropdown-submenu",
            u = ".bs.dropdown.data-api",
            s = ".bs.dropdown",
            t = "open",
            p = "ontouchstart" in document.documentElement,
            i, f = h.prototype,
            v;
        f.toggle = function(r) {
            var h = n(this),
                f, v;
            if (!h.is(y)) {
                var s = l(h),
                    k = s.hasClass(t),
                    d = s.hasClass(a),
                    u = d ? b(s) : null;
                if (c(r, u), !k) {
                    if (u || (u = [s]), p && !s.closest(".navbar-nav").length && !u[0].find(e).length) n('<div class="' + e.substr(1) + '"/>').appendTo(u[0]).on("click", c);
                    for (f = 0, v = u.length; f < v; f++) u[f].hasClass(t) || (u[f].addClass(t), w(u[f].children("." + o), u[f]));
                    i = u[0]
                }
                return !1
            }
        };
        f.keydown = function(t) {
            var f, e, o, i;
            if (/(38|40|27)/.test(t.keyCode) && (f = n(this), t.preventDefault(), t.stopPropagation(), !f.is(".disabled, :disabled"))) {
                if (e = l(f), o = e.hasClass("open"), !o || o && t.keyCode == 27) return t.which == 27 && e.find(r).trigger("focus"), f.trigger("click");
                var s = " li:not(.divider):visible a",
                    u = e.find('li:not(.divider):visible > input:not(disabled) ~ label, [role="menu"]' + s + ', [role="listbox"]' + s);
                u.length && (i = u.index(u.filter(":focus")), t.keyCode == 38 && i > 0 && i--, t.keyCode == 40 && i < u.length - 1 && i++, ~i || (i = 0), u.eq(i).trigger("focus"))
            }
        };
        f.change = function() {
            var u, t, i = "",
                f, e;
            (u = n(this).closest("." + o), t = u.parent().find("[data-label-placement]"), t && t.length || (t = u.parent().find(r)), t && t.length && t.data("placeholder") !== !1) && (t.data("placeholder") == undefined && t.data("placeholder", n.trim(t.text())), i = n.data(t[0], "placeholder"), f = u.find("li > input:checked"), f.length && (i = [], f.each(function() {
                var t = n(this).parent().find("label").eq(0),
                    u = t.find(".data-label"),
                    r;
                u.length ? (r = n("<p><\/p>"), r.append(u.clone()), t = r.html()) : t = t.html();
                t && i.push(n.trim(t))
            }), i = i.length < 4 ? i.join(", ") : i.length + " selected"), e = t.find(".caret"), t.html(i || "&nbsp;"), e.length && t.append(" ") && e.appendTo(t))
        };
        v = n.fn.dropdown;
        n.fn.dropdown = function(t) {
            return this.each(function() {
                var i = n(this),
                    r = i.data("bs.dropdown");
                r || i.data("bs.dropdown", r = new h(this));
                typeof t == "string" && r[t].call(i)
            })
        };
        n.fn.dropdown.Constructor = h;
        n.fn.dropdown.clearMenus = function(i) {
            return n(e).remove(), n("." + t + " " + r).each(function() {
                var t = l(n(this)),
                    r = {
                        relatedTarget: this
                    };
                t.hasClass("open") && ((t.trigger(i = n.Event("hide" + s, r)), i.isDefaultPrevented()) || t.removeClass("open").trigger("hidden" + s, r))
            }), this
        };
        n.fn.dropdown.noConflict = function() {
            return n.fn.dropdown = v, this
        };
        n(document).off(u).on("click" + u, c).on("click" + u, r, f.toggle).on("click" + u, '.dropdown-menu > li > input[type="checkbox"] ~ label, .dropdown-menu > li > input[type="checkbox"], .dropdown-menu.noclose > li', function(n) {
            n.stopPropagation()
        }).on("change" + u, '.dropdown-menu > li > input[type="checkbox"], .dropdown-menu > li > input[type="radio"]', f.change).on("keydown" + u, r + ', [role="menu"], [role="listbox"]', f.keydown)
    }(jQuery)