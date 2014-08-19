function Swipe(e, t) {
    "use strict";

    function i() {
        g = b.children, y = g.length, g.length < 2 && (t.continuous = !1), f.transitions && t.continuous && g.length < 3 && (b.appendChild(g[0].cloneNode(!0)), b.appendChild(b.children[1].cloneNode(!0)), g = b.children), m = new Array(g.length), v = e.getBoundingClientRect().width || e.offsetWidth, b.style.width = g.length * v + "px";
        for (var i = g.length; i--;) {
            var n = g[i];
            n.style.width = v + "px", n.setAttribute("data-index", i), f.transitions && (n.style.left = i * -v + "px", a(i, w > i ? -v : i > w ? v : 0, 0))
        }
        t.continuous && f.transitions && (a(s(w - 1), -v, 0), a(s(w + 1), v, 0)), f.transitions || (b.style.left = w * -v + "px"), e.style.visibility = "visible"
    }

    function n() {
        t.continuous ? o(w - 1) : w && o(w - 1)
    }

    function r() {
        t.continuous ? o(w + 1) : w < g.length - 1 && o(w + 1)
    }

    function s(e) {
        return (g.length + e % g.length) % g.length
    }

    function o(e, i) {
        if (w != e) {
            if (f.transitions) {
                var n = Math.abs(w - e) / (w - e);
                if (t.continuous) {
                    var r = n;
                    n = -m[s(e)] / v, n !== r && (e = -n * g.length + e)
                }
                for (var o = Math.abs(w - e) - 1; o--;) a(s((e > w ? e : w) - o - 1), v * n, 0);
                e = s(e), a(w, v * n, i || _), a(e, 0, i || _), t.continuous && a(s(e - n), -(v * n), 0)
            } else e = s(e), c(w * -v, e * -v, i || _);
            w = e, p(t.callback && t.callback(w, g[w]))
        }
    }

    function a(e, t, i) {
        l(e, t, i), m[e] = t
    }

    function l(e, t, i) {
        var n = g[e],
            r = n && n.style;
        r && (r.webkitTransitionDuration = r.MozTransitionDuration = r.msTransitionDuration = r.OTransitionDuration = r.transitionDuration = i + "ms", r.webkitTransform = "translate(" + t + "px,0)translateZ(0)", r.msTransform = r.MozTransform = r.OTransform = "translateX(" + t + "px)")
    }

    function c(e, i, n) {
        if (!n || t.continuous) return void(b.style.left = i + "px");
        var r = +new Date,
            s = setInterval(function () {
                var o = +new Date - r;
                return o > n ? (b.style.left = i + "px", T && u(), t.transitionEnd && t.transitionEnd.call(event, w, g[w]), void clearInterval(s)) : void(b.style.left = (i - e) * (Math.floor(100 * (o / n)) / 100) + e + "px")
            }, 4)
    }

    function u() {
        x = setTimeout(r, T)
    }

    function h() {
        T = 0, clearTimeout(x)
    }
    var d = function () {},
        p = function (e) {
            setTimeout(e || d, 0)
        },
        f = {
            addEventListener: !!window.addEventListener,
            touch: "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch,
            transitions: function (e) {
                var t = ["transitionProperty", "WebkitTransition", "MozTransition", "OTransition", "msTransition"];
                for (var i in t)
                    if (void 0 !== e.style[t[i]]) return !0;
                return !1
            }(document.createElement("swipe"))
        };
    if (e) {
        var g, m, v, y, b = e.children[0];
        t = t || {};
        var w = parseInt(t.startSlide, 10) || 0,
            _ = t.speed || 300;
        t.continuous = void 0 !== t.continuous ? t.continuous : !0;
        var x, k, T = t.auto || 0,
            C = {},
            S = {},
            $ = {
                handleEvent: function (e) {
                    switch (e.type) {
                    case "touchstart":
                        this.start(e);
                        break;
                    case "touchmove":
                        this.move(e);
                        break;
                    case "touchend":
                        p(this.end(e));
                        break;
                    case "webkitTransitionEnd":
                    case "msTransitionEnd":
                    case "oTransitionEnd":
                    case "otransitionend":
                    case "transitionend":
                        p(this.transitionEnd(e));
                        break;
                    case "resize":
                        p(i.call())
                    }
                    t.stopPropagation && e.stopPropagation()
                },
                start: function (e) {
                    var i = e.touches[0];
                    C = {
                        x: i.pageX,
                        y: i.pageY,
                        time: +new Date
                    }, k = void 0, S = {}, b.addEventListener("touchmove", this, !1), b.addEventListener("touchend", this, !1), t.swipeStarted && t.swipeStarted()
                },
                move: function (e) {
                    if (!(e.touches.length > 1 || e.scale && 1 !== e.scale)) {
                        t.disableScroll && e.preventDefault();
                        var i = e.touches[0];
                        S = {
                            x: Math.max(Math.min(i.pageX - C.x, v), -v),
                            y: i.pageY - C.y
                        }, "undefined" == typeof k && (k = !!(k || Math.abs(S.x) < Math.abs(S.y))), k || (e.preventDefault(), h(), t.continuous ? (l(s(w - 1), S.x + m[s(w - 1)], 0), l(w, S.x + m[w], 0), l(s(w + 1), S.x + m[s(w + 1)], 0)) : (S.x = S.x / (!w && S.x > 0 || w == g.length - 1 && S.x < 0 ? Math.abs(S.x) / v + 1 : 1), l(w - 1, S.x + m[w - 1], 0), l(w, S.x + m[w], 0), l(w + 1, S.x + m[w + 1], 0)))
                    }
                },
                end: function () {
                    var e = +new Date - C.time,
                        i = Number(e) < 250 && Math.abs(S.x) > 20 || Math.abs(S.x) > v / 2,
                        n = !w && S.x > 0 || w == g.length - 1 && S.x < 0;
                    t.continuous && (n = !1);
                    var r = S.x < 0;
                    k || (i && !n ? (r ? (t.continuous ? (a(s(w - 1), -v, 0), a(s(w + 2), v, 0)) : a(w - 1, -v, 0), a(w, m[w] - v, _), a(s(w + 1), m[s(w + 1)] - v, _), w = s(w + 1)) : (t.continuous ? (a(s(w + 1), v, 0), a(s(w - 2), -v, 0)) : a(w + 1, v, 0), a(w, m[w] + v, _), a(s(w - 1), m[s(w - 1)] + v, _), w = s(w - 1)), t.callback && t.callback(w, g[w])) : t.continuous ? (a(s(w - 1), -v, _), a(w, 0, _), a(s(w + 1), v, _)) : (a(w - 1, -v, _), a(w, 0, _), a(w + 1, v, _))), b.removeEventListener("touchmove", $, !1), b.removeEventListener("touchend", $, !1)
                },
                transitionEnd: function (e) {
                    parseInt(e.target.getAttribute("data-index"), 10) == w && (T && u(), t.transitionEnd && t.transitionEnd.call(e, w, g[w]))
                }
            };
        return i(), T && u(), f.addEventListener ? (f.touch && b.addEventListener("touchstart", $, !1), f.transitions && (b.addEventListener("webkitTransitionEnd", $, !1), b.addEventListener("msTransitionEnd", $, !1), b.addEventListener("oTransitionEnd", $, !1), b.addEventListener("otransitionend", $, !1), b.addEventListener("transitionend", $, !1)), window.addEventListener("resize", $, !1)) : window.onresize = function () {
            i()
        }, {
            setup: function () {
                i()
            },
            slide: function (e, t) {
                h(), o(e, t)
            },
            prev: function () {
                h(), n()
            },
            next: function () {
                h(), r()
            },
            getPos: function () {
                return w
            },
            getNumSlides: function () {
                return y
            },
            kill: function () {
                h(), b.style.width = "auto", b.style.left = 0;
                for (var e = g.length; e--;) {
                    var t = g[e];
                    t.style.width = "100%", t.style.left = 0, f.transitions && l(e, 0, 0)
                }
                f.addEventListener ? (b.removeEventListener("touchstart", $, !1), b.removeEventListener("webkitTransitionEnd", $, !1), b.removeEventListener("msTransitionEnd", $, !1), b.removeEventListener("oTransitionEnd", $, !1), b.removeEventListener("otransitionend", $, !1), b.removeEventListener("transitionend", $, !1), window.removeEventListener("resize", $, !1)) : window.onresize = null
            }
        }
    }
}

function DynamicSwipe(e, t) {
    _.bindAll(this, "swipeSlided", "prev", "next"), this.renderSlide = t.renderSlide, this.onSwipeSlided = t.onSwipeSlided || function () {}, this.index = 0, this.virtualIndex = 0, this.$el = $(e), this.slides = this.buildSlides(), this.updateVisibilityClasses(), this.renderElement(), this.swipe = new Swipe(this.$el.get(0), _.extend(t, {
        callback: this.swipeSlided
    }))
}

function ABTestsWidget() {
    var e = new SidebarPanel("#ab_tests_widget_box", "right");
    return this.bindSubmitEvent(e), e
}

function SidebarPanel(e, t) {
    return this.$element = $(e), this.direction = t, this.bindToggleEvent(), this.$element.addClass("closed"), this.$element.addClass(t), this.$element.show(), this
}
if (function (e, t) {
    function i(e) {
        var t = e.length,
            i = ut.type(e);
        return ut.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === i || "function" !== i && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function n(e) {
        var t = Ct[e] = {};
        return ut.each(e.match(dt) || [], function (e, i) {
            t[i] = !0
        }), t
    }

    function r(e, i, n, r) {
        if (ut.acceptData(e)) {
            var s, o, a = ut.expando,
                l = e.nodeType,
                c = l ? ut.cache : e,
                u = l ? e[a] : e[a] && a;
            if (u && c[u] && (r || c[u].data) || n !== t || "string" != typeof i) return u || (u = l ? e[a] = tt.pop() || ut.guid++ : a), c[u] || (c[u] = l ? {} : {
                toJSON: ut.noop
            }), ("object" == typeof i || "function" == typeof i) && (r ? c[u] = ut.extend(c[u], i) : c[u].data = ut.extend(c[u].data, i)), o = c[u], r || (o.data || (o.data = {}), o = o.data), n !== t && (o[ut.camelCase(i)] = n), "string" == typeof i ? (s = o[i], null == s && (s = o[ut.camelCase(i)])) : s = o, s
        }
    }

    function s(e, t, i) {
        if (ut.acceptData(e)) {
            var n, r, s = e.nodeType,
                o = s ? ut.cache : e,
                l = s ? e[ut.expando] : ut.expando;
            if (o[l]) {
                if (t && (n = i ? o[l] : o[l].data)) {
                    ut.isArray(t) ? t = t.concat(ut.map(t, ut.camelCase)) : t in n ? t = [t] : (t = ut.camelCase(t), t = t in n ? [t] : t.split(" ")), r = t.length;
                    for (; r--;) delete n[t[r]];
                    if (i ? !a(n) : !ut.isEmptyObject(n)) return
                }(i || (delete o[l].data, a(o[l]))) && (s ? ut.cleanData([e], !0) : ut.support.deleteExpando || o != o.window ? delete o[l] : o[l] = null)
            }
        }
    }

    function o(e, i, n) {
        if (n === t && 1 === e.nodeType) {
            var r = "data-" + i.replace($t, "-$1").toLowerCase();
            if (n = e.getAttribute(r), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : St.test(n) ? ut.parseJSON(n) : n
                } catch (s) {}
                ut.data(e, i, n)
            } else n = t
        }
        return n
    }

    function a(e) {
        var t;
        for (t in e)
            if (("data" !== t || !ut.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function l() {
        return !0
    }

    function c() {
        return !1
    }

    function u() {
        try {
            return Q.activeElement
        } catch (e) {}
    }

    function h(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function d(e, t, i) {
        if (ut.isFunction(t)) return ut.grep(e, function (e, n) {
            return !!t.call(e, n, e) !== i
        });
        if (t.nodeType) return ut.grep(e, function (e) {
            return e === t !== i
        });
        if ("string" == typeof t) {
            if (Rt.test(t)) return ut.filter(t, e, i);
            t = ut.filter(t, e)
        }
        return ut.grep(e, function (e) {
            return ut.inArray(e, t) >= 0 !== i
        })
    }

    function p(e) {
        var t = Wt.split("|"),
            i = e.createDocumentFragment();
        if (i.createElement)
            for (; t.length;) i.createElement(t.pop());
        return i
    }

    function f(e, t) {
        return ut.nodeName(e, "table") && ut.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function g(e) {
        return e.type = (null !== ut.find.attr(e, "type")) + "/" + e.type, e
    }

    function m(e) {
        var t = ri.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function v(e, t) {
        for (var i, n = 0; null != (i = e[n]); n++) ut._data(i, "globalEval", !t || ut._data(t[n], "globalEval"))
    }

    function y(e, t) {
        if (1 === t.nodeType && ut.hasData(e)) {
            var i, n, r, s = ut._data(e),
                o = ut._data(t, s),
                a = s.events;
            if (a) {
                delete o.handle, o.events = {};
                for (i in a)
                    for (n = 0, r = a[i].length; r > n; n++) ut.event.add(t, i, a[i][n])
            }
            o.data && (o.data = ut.extend({}, o.data))
        }
    }

    function b(e, t) {
        var i, n, r;
        if (1 === t.nodeType) {
            if (i = t.nodeName.toLowerCase(), !ut.support.noCloneEvent && t[ut.expando]) {
                r = ut._data(t);
                for (n in r.events) ut.removeEvent(t, n, r.handle);
                t.removeAttribute(ut.expando)
            }
            "script" === i && t.text !== e.text ? (g(t).text = e.text, m(t)) : "object" === i ? (t.parentNode && (t.outerHTML = e.outerHTML), ut.support.html5Clone && e.innerHTML && !ut.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === i && ti.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === i ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === i || "textarea" === i) && (t.defaultValue = e.defaultValue)
        }
    }

    function w(e, i) {
        var n, r, s = 0,
            o = typeof e.getElementsByTagName !== X ? e.getElementsByTagName(i || "*") : typeof e.querySelectorAll !== X ? e.querySelectorAll(i || "*") : t;
        if (!o)
            for (o = [], n = e.childNodes || e; null != (r = n[s]); s++)!i || ut.nodeName(r, i) ? o.push(r) : ut.merge(o, w(r, i));
        return i === t || i && ut.nodeName(e, i) ? ut.merge([e], o) : o
    }

    function _(e) {
        ti.test(e.type) && (e.defaultChecked = e.checked)
    }

    function x(e, t) {
        if (t in e) return t;
        for (var i = t.charAt(0).toUpperCase() + t.slice(1), n = t, r = Ti.length; r--;)
            if (t = Ti[r] + i, t in e) return t;
        return n
    }

    function k(e, t) {
        return e = t || e, "none" === ut.css(e, "display") || !ut.contains(e.ownerDocument, e)
    }

    function T(e, t) {
        for (var i, n, r, s = [], o = 0, a = e.length; a > o; o++) n = e[o], n.style && (s[o] = ut._data(n, "olddisplay"), i = n.style.display, t ? (s[o] || "none" !== i || (n.style.display = ""), "" === n.style.display && k(n) && (s[o] = ut._data(n, "olddisplay", D(n.nodeName)))) : s[o] || (r = k(n), (i && "none" !== i || !r) && ut._data(n, "olddisplay", r ? i : ut.css(n, "display"))));
        for (o = 0; a > o; o++) n = e[o], n.style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? s[o] || "" : "none"));
        return e
    }

    function C(e, t, i) {
        var n = vi.exec(t);
        return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : t
    }

    function S(e, t, i, n, r) {
        for (var s = i === (n ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > s; s += 2) "margin" === i && (o += ut.css(e, i + ki[s], !0, r)), n ? ("content" === i && (o -= ut.css(e, "padding" + ki[s], !0, r)), "margin" !== i && (o -= ut.css(e, "border" + ki[s] + "Width", !0, r))) : (o += ut.css(e, "padding" + ki[s], !0, r), "padding" !== i && (o += ut.css(e, "border" + ki[s] + "Width", !0, r)));
        return o
    }

    function $(e, t, i) {
        var n = !0,
            r = "width" === t ? e.offsetWidth : e.offsetHeight,
            s = ui(e),
            o = ut.support.boxSizing && "border-box" === ut.css(e, "boxSizing", !1, s);
        if (0 >= r || null == r) {
            if (r = hi(e, t, s), (0 > r || null == r) && (r = e.style[t]), yi.test(r)) return r;
            n = o && (ut.support.boxSizingReliable || r === e.style[t]), r = parseFloat(r) || 0
        }
        return r + S(e, t, i || (o ? "border" : "content"), n, s) + "px"
    }

    function D(e) {
        var t = Q,
            i = wi[e];
        return i || (i = H(e, t), "none" !== i && i || (ci = (ci || ut("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (ci[0].contentWindow || ci[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), i = H(e, t), ci.detach()), wi[e] = i), i
    }

    function H(e, t) {
        var i = ut(t.createElement(e)).appendTo(t.body),
            n = ut.css(i[0], "display");
        return i.remove(), n
    }

    function E(e, t, i, n) {
        var r;
        if (ut.isArray(t)) ut.each(t, function (t, r) {
            i || Si.test(e) ? n(e, r) : E(e + "[" + ("object" == typeof r ? t : "") + "]", r, i, n)
        });
        else if (i || "object" !== ut.type(t)) n(e, t);
        else
            for (r in t) E(e + "[" + r + "]", t[r], i, n)
    }

    function P(e) {
        return function (t, i) {
            "string" != typeof t && (i = t, t = "*");
            var n, r = 0,
                s = t.toLowerCase().match(dt) || [];
            if (ut.isFunction(i))
                for (; n = s[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (e[n] = e[n] || []).unshift(i)) : (e[n] = e[n] || []).push(i)
        }
    }

    function A(e, i, n, r) {
        function s(l) {
            var c;
            return o[l] = !0, ut.each(e[l] || [], function (e, l) {
                var u = l(i, n, r);
                return "string" != typeof u || a || o[u] ? a ? !(c = u) : t : (i.dataTypes.unshift(u), s(u), !1)
            }), c
        }
        var o = {},
            a = e === zi;
        return s(i.dataTypes[0]) || !o["*"] && s("*")
    }

    function M(e, i) {
        var n, r, s = ut.ajaxSettings.flatOptions || {};
        for (r in i) i[r] !== t && ((s[r] ? e : n || (n = {}))[r] = i[r]);
        return n && ut.extend(!0, e, n), e
    }

    function I(e, i, n) {
        for (var r, s, o, a, l = e.contents, c = e.dataTypes;
            "*" === c[0];) c.shift(), s === t && (s = e.mimeType || i.getResponseHeader("Content-Type"));
        if (s)
            for (a in l)
                if (l[a] && l[a].test(s)) {
                    c.unshift(a);
                    break
                }
        if (c[0] in n) o = c[0];
        else {
            for (a in n) {
                if (!c[0] || e.converters[a + " " + c[0]]) {
                    o = a;
                    break
                }
                r || (r = a)
            }
            o = o || r
        }
        return o ? (o !== c[0] && c.unshift(o), n[o]) : t
    }

    function O(e, t, i, n) {
        var r, s, o, a, l, c = {},
            u = e.dataTypes.slice();
        if (u[1])
            for (o in e.converters) c[o.toLowerCase()] = e.converters[o];
        for (s = u.shift(); s;)
            if (e.responseFields[s] && (i[e.responseFields[s]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = s, s = u.shift())
                if ("*" === s) s = l;
                else if ("*" !== l && l !== s) {
            if (o = c[l + " " + s] || c["* " + s], !o)
                for (r in c)
                    if (a = r.split(" "), a[1] === s && (o = c[l + " " + a[0]] || c["* " + a[0]])) {
                        o === !0 ? o = c[r] : c[r] !== !0 && (s = a[0], u.unshift(a[1]));
                        break
                    }
            if (o !== !0)
                if (o && e["throws"]) t = o(t);
                else try {
                    t = o(t)
                } catch (h) {
                    return {
                        state: "parsererror",
                        error: o ? h : "No conversion from " + l + " to " + s
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function N() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function V() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function B() {
        return setTimeout(function () {
            Ji = t
        }), Ji = ut.now()
    }

    function L(e, t, i) {
        for (var n, r = (sn[t] || []).concat(sn["*"]), s = 0, o = r.length; o > s; s++)
            if (n = r[s].call(i, t, e)) return n
    }

    function j(e, t, i) {
        var n, r, s = 0,
            o = rn.length,
            a = ut.Deferred().always(function () {
                delete l.elem
            }),
            l = function () {
                if (r) return !1;
                for (var t = Ji || B(), i = Math.max(0, c.startTime + c.duration - t), n = i / c.duration || 0, s = 1 - n, o = 0, l = c.tweens.length; l > o; o++) c.tweens[o].run(s);
                return a.notifyWith(e, [c, s, i]), 1 > s && l ? i : (a.resolveWith(e, [c]), !1)
            },
            c = a.promise({
                elem: e,
                props: ut.extend({}, t),
                opts: ut.extend(!0, {
                    specialEasing: {}
                }, i),
                originalProperties: t,
                originalOptions: i,
                startTime: Ji || B(),
                duration: i.duration,
                tweens: [],
                createTween: function (t, i) {
                    var n = ut.Tween(e, c.opts, t, i, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(n), n
                },
                stop: function (t) {
                    var i = 0,
                        n = t ? c.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; n > i; i++) c.tweens[i].run(1);
                    return t ? a.resolveWith(e, [c, t]) : a.rejectWith(e, [c, t]), this
                }
            }),
            u = c.props;
        for (F(u, c.opts.specialEasing); o > s; s++)
            if (n = rn[s].call(c, e, u, c.opts)) return n;
        return ut.map(u, L, c), ut.isFunction(c.opts.start) && c.opts.start.call(e, c), ut.fx.timer(ut.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function F(e, t) {
        var i, n, r, s, o;
        for (i in e)
            if (n = ut.camelCase(i), r = t[n], s = e[i], ut.isArray(s) && (r = s[1], s = e[i] = s[0]), i !== n && (e[n] = s, delete e[i]), o = ut.cssHooks[n], o && "expand" in o) {
                s = o.expand(s), delete e[n];
                for (i in s) i in e || (e[i] = s[i], t[i] = r)
            } else t[n] = r
    }

    function R(e, t, i) {
        var n, r, s, o, a, l, c = this,
            u = {},
            h = e.style,
            d = e.nodeType && k(e),
            p = ut._data(e, "fxshow");
        i.queue || (a = ut._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
            a.unqueued || l()
        }), a.unqueued++, c.always(function () {
            c.always(function () {
                a.unqueued--, ut.queue(e, "fx").length || a.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (i.overflow = [h.overflow, h.overflowX, h.overflowY], "inline" === ut.css(e, "display") && "none" === ut.css(e, "float") && (ut.support.inlineBlockNeedsLayout && "inline" !== D(e.nodeName) ? h.zoom = 1 : h.display = "inline-block")), i.overflow && (h.overflow = "hidden", ut.support.shrinkWrapBlocks || c.always(function () {
            h.overflow = i.overflow[0], h.overflowX = i.overflow[1], h.overflowY = i.overflow[2]
        }));
        for (n in t)
            if (r = t[n], en.exec(r)) {
                if (delete t[n], s = s || "toggle" === r, r === (d ? "hide" : "show")) continue;
                u[n] = p && p[n] || ut.style(e, n)
            }
        if (!ut.isEmptyObject(u)) {
            p ? "hidden" in p && (d = p.hidden) : p = ut._data(e, "fxshow", {}), s && (p.hidden = !d), d ? ut(e).show() : c.done(function () {
                ut(e).hide()
            }), c.done(function () {
                var t;
                ut._removeData(e, "fxshow");
                for (t in u) ut.style(e, t, u[t])
            });
            for (n in u) o = L(d ? p[n] : 0, n, c), n in p || (p[n] = o.start, d && (o.end = o.start, o.start = "width" === n || "height" === n ? 1 : 0))
        }
    }

    function z(e, t, i, n, r) {
        return new z.prototype.init(e, t, i, n, r)
    }

    function q(e, t) {
        var i, n = {
                height: e
            },
            r = 0;
        for (t = t ? 1 : 0; 4 > r; r += 2 - t) i = ki[r], n["margin" + i] = n["padding" + i] = e;
        return t && (n.opacity = n.width = e), n
    }

    function U(e) {
        return ut.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var W, Y, X = typeof t,
        G = e.location,
        Q = e.document,
        K = Q.documentElement,
        J = e.jQuery,
        Z = e.$,
        et = {},
        tt = [],
        it = "1.10.2",
        nt = tt.concat,
        rt = tt.push,
        st = tt.slice,
        ot = tt.indexOf,
        at = et.toString,
        lt = et.hasOwnProperty,
        ct = it.trim,
        ut = function (e, t) {
            return new ut.fn.init(e, t, Y)
        },
        ht = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        dt = /\S+/g,
        pt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ft = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        gt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        mt = /^[\],:{}\s]*$/,
        vt = /(?:^|:|,)(?:\s*\[)+/g,
        yt = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        bt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        wt = /^-ms-/,
        _t = /-([\da-z])/gi,
        xt = function (e, t) {
            return t.toUpperCase()
        },
        kt = function (e) {
            (Q.addEventListener || "load" === e.type || "complete" === Q.readyState) && (Tt(), ut.ready())
        },
        Tt = function () {
            Q.addEventListener ? (Q.removeEventListener("DOMContentLoaded", kt, !1), e.removeEventListener("load", kt, !1)) : (Q.detachEvent("onreadystatechange", kt), e.detachEvent("onload", kt))
        };
    ut.fn = ut.prototype = {
            jquery: it,
            constructor: ut,
            init: function (e, i, n) {
                var r, s;
                if (!e) return this;
                if ("string" == typeof e) {
                    if (r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : ft.exec(e), !r || !r[1] && i) return !i || i.jquery ? (i || n).find(e) : this.constructor(i).find(e);
                    if (r[1]) {
                        if (i = i instanceof ut ? i[0] : i, ut.merge(this, ut.parseHTML(r[1], i && i.nodeType ? i.ownerDocument || i : Q, !0)), gt.test(r[1]) && ut.isPlainObject(i))
                            for (r in i) ut.isFunction(this[r]) ? this[r](i[r]) : this.attr(r, i[r]);
                        return this
                    }
                    if (s = Q.getElementById(r[2]), s && s.parentNode) {
                        if (s.id !== r[2]) return n.find(e);
                        this.length = 1, this[0] = s
                    }
                    return this.context = Q, this.selector = e, this
                }
                return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ut.isFunction(e) ? n.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), ut.makeArray(e, this))
            },
            selector: "",
            length: 0,
            toArray: function () {
                return st.call(this)
            },
            get: function (e) {
                return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
            },
            pushStack: function (e) {
                var t = ut.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            },
            each: function (e, t) {
                return ut.each(this, e, t)
            },
            ready: function (e) {
                return ut.ready.promise().done(e), this
            },
            slice: function () {
                return this.pushStack(st.apply(this, arguments))
            },
            first: function () {
                return this.eq(0)
            },
            last: function () {
                return this.eq(-1)
            },
            eq: function (e) {
                var t = this.length,
                    i = +e + (0 > e ? t : 0);
                return this.pushStack(i >= 0 && t > i ? [this[i]] : [])
            },
            map: function (e) {
                return this.pushStack(ut.map(this, function (t, i) {
                    return e.call(t, i, t)
                }))
            },
            end: function () {
                return this.prevObject || this.constructor(null)
            },
            push: rt,
            sort: [].sort,
            splice: [].splice
        }, ut.fn.init.prototype = ut.fn, ut.extend = ut.fn.extend = function () {
            var e, i, n, r, s, o, a = arguments[0] || {},
                l = 1,
                c = arguments.length,
                u = !1;
            for ("boolean" == typeof a && (u = a, a = arguments[1] || {}, l = 2), "object" == typeof a || ut.isFunction(a) || (a = {}), c === l && (a = this, --l); c > l; l++)
                if (null != (s = arguments[l]))
                    for (r in s) e = a[r], n = s[r], a !== n && (u && n && (ut.isPlainObject(n) || (i = ut.isArray(n))) ? (i ? (i = !1, o = e && ut.isArray(e) ? e : []) : o = e && ut.isPlainObject(e) ? e : {}, a[r] = ut.extend(u, o, n)) : n !== t && (a[r] = n));
            return a
        }, ut.extend({
            expando: "jQuery" + (it + Math.random()).replace(/\D/g, ""),
            noConflict: function (t) {
                return e.$ === ut && (e.$ = Z), t && e.jQuery === ut && (e.jQuery = J), ut
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function (e) {
                e ? ut.readyWait++ : ut.ready(!0)
            },
            ready: function (e) {
                if (e === !0 ? !--ut.readyWait : !ut.isReady) {
                    if (!Q.body) return setTimeout(ut.ready);
                    ut.isReady = !0, e !== !0 && --ut.readyWait > 0 || (W.resolveWith(Q, [ut]), ut.fn.trigger && ut(Q).trigger("ready").off("ready"))
                }
            },
            isFunction: function (e) {
                return "function" === ut.type(e)
            },
            isArray: Array.isArray || function (e) {
                return "array" === ut.type(e)
            },
            isWindow: function (e) {
                return null != e && e == e.window
            },
            isNumeric: function (e) {
                return !isNaN(parseFloat(e)) && isFinite(e)
            },
            type: function (e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? et[at.call(e)] || "object" : typeof e
            },
            isPlainObject: function (e) {
                var i;
                if (!e || "object" !== ut.type(e) || e.nodeType || ut.isWindow(e)) return !1;
                try {
                    if (e.constructor && !lt.call(e, "constructor") && !lt.call(e.constructor.prototype, "isPrototypeOf")) return !1
                } catch (n) {
                    return !1
                }
                if (ut.support.ownLast)
                    for (i in e) return lt.call(e, i);
                for (i in e);
                return i === t || lt.call(e, i)
            },
            isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            error: function (e) {
                throw Error(e)
            },
            parseHTML: function (e, t, i) {
                if (!e || "string" != typeof e) return null;
                "boolean" == typeof t && (i = t, t = !1), t = t || Q;
                var n = gt.exec(e),
                    r = !i && [];
                return n ? [t.createElement(n[1])] : (n = ut.buildFragment([e], t, r), r && ut(r).remove(), ut.merge([], n.childNodes))
            },
            parseJSON: function (i) {
                return e.JSON && e.JSON.parse ? e.JSON.parse(i) : null === i ? i : "string" == typeof i && (i = ut.trim(i), i && mt.test(i.replace(yt, "@").replace(bt, "]").replace(vt, ""))) ? Function("return " + i)() : (ut.error("Invalid JSON: " + i), t)
            },
            parseXML: function (i) {
                var n, r;
                if (!i || "string" != typeof i) return null;
                try {
                    e.DOMParser ? (r = new DOMParser, n = r.parseFromString(i, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(i))
                } catch (s) {
                    n = t
                }
                return n && n.documentElement && !n.getElementsByTagName("parsererror").length || ut.error("Invalid XML: " + i), n
            },
            noop: function () {},
            globalEval: function (t) {
                t && ut.trim(t) && (e.execScript || function (t) {
                    e.eval.call(e, t)
                })(t)
            },
            camelCase: function (e) {
                return e.replace(wt, "ms-").replace(_t, xt)
            },
            nodeName: function (e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function (e, t, n) {
                var r, s = 0,
                    o = e.length,
                    a = i(e);
                if (n) {
                    if (a)
                        for (; o > s && (r = t.apply(e[s], n), r !== !1); s++);
                    else
                        for (s in e)
                            if (r = t.apply(e[s], n), r === !1) break
                } else if (a)
                    for (; o > s && (r = t.call(e[s], s, e[s]), r !== !1); s++);
                else
                    for (s in e)
                        if (r = t.call(e[s], s, e[s]), r === !1) break; return e
            },
            trim: ct && !ct.call("\ufeff\xa0") ? function (e) {
                return null == e ? "" : ct.call(e)
            } : function (e) {
                return null == e ? "" : (e + "").replace(pt, "")
            },
            makeArray: function (e, t) {
                var n = t || [];
                return null != e && (i(Object(e)) ? ut.merge(n, "string" == typeof e ? [e] : e) : rt.call(n, e)), n
            },
            inArray: function (e, t, i) {
                var n;
                if (t) {
                    if (ot) return ot.call(t, e, i);
                    for (n = t.length, i = i ? 0 > i ? Math.max(0, n + i) : i : 0; n > i; i++)
                        if (i in t && t[i] === e) return i
                }
                return -1
            },
            merge: function (e, i) {
                var n = i.length,
                    r = e.length,
                    s = 0;
                if ("number" == typeof n)
                    for (; n > s; s++) e[r++] = i[s];
                else
                    for (; i[s] !== t;) e[r++] = i[s++];
                return e.length = r, e
            },
            grep: function (e, t, i) {
                var n, r = [],
                    s = 0,
                    o = e.length;
                for (i = !!i; o > s; s++) n = !!t(e[s], s), i !== n && r.push(e[s]);
                return r
            },
            map: function (e, t, n) {
                var r, s = 0,
                    o = e.length,
                    a = i(e),
                    l = [];
                if (a)
                    for (; o > s; s++) r = t(e[s], s, n), null != r && (l[l.length] = r);
                else
                    for (s in e) r = t(e[s], s, n), null != r && (l[l.length] = r);
                return nt.apply([], l)
            },
            guid: 1,
            proxy: function (e, i) {
                var n, r, s;
                return "string" == typeof i && (s = e[i], i = e, e = s), ut.isFunction(e) ? (n = st.call(arguments, 2), r = function () {
                    return e.apply(i || this, n.concat(st.call(arguments)))
                }, r.guid = e.guid = e.guid || ut.guid++, r) : t
            },
            access: function (e, i, n, r, s, o, a) {
                var l = 0,
                    c = e.length,
                    u = null == n;
                if ("object" === ut.type(n)) {
                    s = !0;
                    for (l in n) ut.access(e, i, l, n[l], !0, o, a)
                } else if (r !== t && (s = !0, ut.isFunction(r) || (a = !0), u && (a ? (i.call(e, r), i = null) : (u = i, i = function (e, t, i) {
                    return u.call(ut(e), i)
                })), i))
                    for (; c > l; l++) i(e[l], n, a ? r : r.call(e[l], l, i(e[l], n)));
                return s ? e : u ? i.call(e) : c ? i(e[0], n) : o
            },
            now: function () {
                return (new Date).getTime()
            },
            swap: function (e, t, i, n) {
                var r, s, o = {};
                for (s in t) o[s] = e.style[s], e.style[s] = t[s];
                r = i.apply(e, n || []);
                for (s in t) e.style[s] = o[s];
                return r
            }
        }), ut.ready.promise = function (t) {
            if (!W)
                if (W = ut.Deferred(), "complete" === Q.readyState) setTimeout(ut.ready);
                else if (Q.addEventListener) Q.addEventListener("DOMContentLoaded", kt, !1), e.addEventListener("load", kt, !1);
            else {
                Q.attachEvent("onreadystatechange", kt), e.attachEvent("onload", kt);
                var i = !1;
                try {
                    i = null == e.frameElement && Q.documentElement
                } catch (n) {}
                i && i.doScroll && function r() {
                    if (!ut.isReady) {
                        try {
                            i.doScroll("left")
                        } catch (e) {
                            return setTimeout(r, 50)
                        }
                        Tt(), ut.ready()
                    }
                }()
            }
            return W.promise(t)
        }, ut.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
            et["[object " + t + "]"] = t.toLowerCase()
        }), Y = ut(Q),
        function (e, t) {
            function i(e, t, i, n) {
                var r, s, o, a, l, c, u, h, f, g;
                if ((t ? t.ownerDocument || t : j) !== A && P(t), t = t || A, i = i || [], !e || "string" != typeof e) return i;
                if (1 !== (a = t.nodeType) && 9 !== a) return [];
                if (I && !n) {
                    if (r = bt.exec(e))
                        if (o = r[1]) {
                            if (9 === a) {
                                if (s = t.getElementById(o), !s || !s.parentNode) return i;
                                if (s.id === o) return i.push(s), i
                            } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(o)) && B(t, s) && s.id === o) return i.push(s), i
                        } else {
                            if (r[2]) return et.apply(i, t.getElementsByTagName(e)), i;
                            if ((o = r[3]) && k.getElementsByClassName && t.getElementsByClassName) return et.apply(i, t.getElementsByClassName(o)), i
                        }
                    if (k.qsa && (!O || !O.test(e))) {
                        if (h = u = L, f = t, g = 9 === a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
                            for (c = d(e), (u = t.getAttribute("id")) ? h = u.replace(xt, "\\$&") : t.setAttribute("id", h), h = "[id='" + h + "'] ", l = c.length; l--;) c[l] = h + p(c[l]);
                            f = pt.test(e) && t.parentNode || t, g = c.join(",")
                        }
                        if (g) try {
                            return et.apply(i, f.querySelectorAll(g)), i
                        } catch (m) {} finally {
                            u || t.removeAttribute("id")
                        }
                    }
                }
                return _(e.replace(ct, "$1"), t, i, n)
            }

            function n() {
                function e(i, n) {
                    return t.push(i += " ") > C.cacheLength && delete e[t.shift()], e[i] = n
                }
                var t = [];
                return e
            }

            function r(e) {
                return e[L] = !0, e
            }

            function s(e) {
                var t = A.createElement("div");
                try {
                    return !!e(t)
                } catch (i) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function o(e, t) {
                for (var i = e.split("|"), n = e.length; n--;) C.attrHandle[i[n]] = t
            }

            function a(e, t) {
                var i = t && e,
                    n = i && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || G) - (~e.sourceIndex || G);
                if (n) return n;
                if (i)
                    for (; i = i.nextSibling;)
                        if (i === t) return -1;
                return e ? 1 : -1
            }

            function l(e) {
                return function (t) {
                    var i = t.nodeName.toLowerCase();
                    return "input" === i && t.type === e
                }
            }

            function c(e) {
                return function (t) {
                    var i = t.nodeName.toLowerCase();
                    return ("input" === i || "button" === i) && t.type === e
                }
            }

            function u(e) {
                return r(function (t) {
                    return t = +t, r(function (i, n) {
                        for (var r, s = e([], i.length, t), o = s.length; o--;) i[r = s[o]] && (i[r] = !(n[r] = i[r]))
                    })
                })
            }

            function h() {}

            function d(e, t) {
                var n, r, s, o, a, l, c, u = q[e + " "];
                if (u) return t ? 0 : u.slice(0);
                for (a = e, l = [], c = C.preFilter; a;) {
                    (!n || (r = ht.exec(a))) && (r && (a = a.slice(r[0].length) || a), l.push(s = [])), n = !1, (r = dt.exec(a)) && (n = r.shift(), s.push({
                        value: n,
                        type: r[0].replace(ct, " ")
                    }), a = a.slice(n.length));
                    for (o in C.filter)!(r = vt[o].exec(a)) || c[o] && !(r = c[o](r)) || (n = r.shift(), s.push({
                        value: n,
                        type: o,
                        matches: r
                    }), a = a.slice(n.length));
                    if (!n) break
                }
                return t ? a.length : a ? i.error(e) : q(e, l).slice(0)
            }

            function p(e) {
                for (var t = 0, i = e.length, n = ""; i > t; t++) n += e[t].value;
                return n
            }

            function f(e, t, i) {
                var n = t.dir,
                    r = i && "parentNode" === n,
                    s = R++;
                return t.first ? function (t, i, s) {
                    for (; t = t[n];)
                        if (1 === t.nodeType || r) return e(t, i, s)
                } : function (t, i, o) {
                    var a, l, c, u = F + " " + s;
                    if (o) {
                        for (; t = t[n];)
                            if ((1 === t.nodeType || r) && e(t, i, o)) return !0
                    } else
                        for (; t = t[n];)
                            if (1 === t.nodeType || r)
                                if (c = t[L] || (t[L] = {}), (l = c[n]) && l[0] === u) {
                                    if ((a = l[1]) === !0 || a === T) return a === !0
                                } else if (l = c[n] = [u], l[1] = e(t, i, o) || T, l[1] === !0) return !0
                }
            }

            function g(e) {
                return e.length > 1 ? function (t, i, n) {
                    for (var r = e.length; r--;)
                        if (!e[r](t, i, n)) return !1;
                    return !0
                } : e[0]
            }

            function m(e, t, i, n, r) {
                for (var s, o = [], a = 0, l = e.length, c = null != t; l > a; a++)(s = e[a]) && (!i || i(s, n, r)) && (o.push(s), c && t.push(a));
                return o
            }

            function v(e, t, i, n, s, o) {
                return n && !n[L] && (n = v(n)), s && !s[L] && (s = v(s, o)), r(function (r, o, a, l) {
                    var c, u, h, d = [],
                        p = [],
                        f = o.length,
                        g = r || w(t || "*", a.nodeType ? [a] : a, []),
                        v = !e || !r && t ? g : m(g, d, e, a, l),
                        y = i ? s || (r ? e : f || n) ? [] : o : v;
                    if (i && i(v, y, a, l), n)
                        for (c = m(y, p), n(c, [], a, l), u = c.length; u--;)(h = c[u]) && (y[p[u]] = !(v[p[u]] = h));
                    if (r) {
                        if (s || e) {
                            if (s) {
                                for (c = [], u = y.length; u--;)(h = y[u]) && c.push(v[u] = h);
                                s(null, y = [], c, l)
                            }
                            for (u = y.length; u--;)(h = y[u]) && (c = s ? it.call(r, h) : d[u]) > -1 && (r[c] = !(o[c] = h))
                        }
                    } else y = m(y === o ? y.splice(f, y.length) : y), s ? s(null, o, y, l) : et.apply(o, y)
                })
            }

            function y(e) {
                for (var t, i, n, r = e.length, s = C.relative[e[0].type], o = s || C.relative[" "], a = s ? 1 : 0, l = f(function (e) {
                    return e === t
                }, o, !0), c = f(function (e) {
                    return it.call(t, e) > -1
                }, o, !0), u = [
                    function (e, i, n) {
                        return !s && (n || i !== H) || ((t = i).nodeType ? l(e, i, n) : c(e, i, n))
                    }
                ]; r > a; a++)
                    if (i = C.relative[e[a].type]) u = [f(g(u), i)];
                    else {
                        if (i = C.filter[e[a].type].apply(null, e[a].matches), i[L]) {
                            for (n = ++a; r > n && !C.relative[e[n].type]; n++);
                            return v(a > 1 && g(u), a > 1 && p(e.slice(0, a - 1).concat({
                                value: " " === e[a - 2].type ? "*" : ""
                            })).replace(ct, "$1"), i, n > a && y(e.slice(a, n)), r > n && y(e = e.slice(n)), r > n && p(e))
                        }
                        u.push(i)
                    }
                return g(u)
            }

            function b(e, t) {
                var n = 0,
                    s = t.length > 0,
                    o = e.length > 0,
                    a = function (r, a, l, c, u) {
                        var h, d, p, f = [],
                            g = 0,
                            v = "0",
                            y = r && [],
                            b = null != u,
                            w = H,
                            _ = r || o && C.find.TAG("*", u && a.parentNode || a),
                            x = F += null == w ? 1 : Math.random() || .1;
                        for (b && (H = a !== A && a, T = n); null != (h = _[v]); v++) {
                            if (o && h) {
                                for (d = 0; p = e[d++];)
                                    if (p(h, a, l)) {
                                        c.push(h);
                                        break
                                    }
                                b && (F = x, T = ++n)
                            }
                            s && ((h = !p && h) && g--, r && y.push(h))
                        }
                        if (g += v, s && v !== g) {
                            for (d = 0; p = t[d++];) p(y, f, a, l);
                            if (r) {
                                if (g > 0)
                                    for (; v--;) y[v] || f[v] || (f[v] = J.call(c));
                                f = m(f)
                            }
                            et.apply(c, f), b && !r && f.length > 0 && g + t.length > 1 && i.uniqueSort(c)
                        }
                        return b && (F = x, H = w), y
                    };
                return s ? r(a) : a
            }

            function w(e, t, n) {
                for (var r = 0, s = t.length; s > r; r++) i(e, t[r], n);
                return n
            }

            function _(e, t, i, n) {
                var r, s, o, a, l, c = d(e);
                if (!n && 1 === c.length) {
                    if (s = c[0] = c[0].slice(0), s.length > 2 && "ID" === (o = s[0]).type && k.getById && 9 === t.nodeType && I && C.relative[s[1].type]) {
                        if (t = (C.find.ID(o.matches[0].replace(kt, Tt), t) || [])[0], !t) return i;
                        e = e.slice(s.shift().value.length)
                    }
                    for (r = vt.needsContext.test(e) ? 0 : s.length; r-- && (o = s[r], !C.relative[a = o.type]);)
                        if ((l = C.find[a]) && (n = l(o.matches[0].replace(kt, Tt), pt.test(s[0].type) && t.parentNode || t))) {
                            if (s.splice(r, 1), e = n.length && p(s), !e) return et.apply(i, n), i;
                            break
                        }
                }
                return D(e, c)(n, t, !I, i, pt.test(e)), i
            }
            var x, k, T, C, S, $, D, H, E, P, A, M, I, O, N, V, B, L = "sizzle" + -new Date,
                j = e.document,
                F = 0,
                R = 0,
                z = n(),
                q = n(),
                U = n(),
                W = !1,
                Y = function (e, t) {
                    return e === t ? (W = !0, 0) : 0
                },
                X = typeof t,
                G = 1 << 31,
                Q = {}.hasOwnProperty,
                K = [],
                J = K.pop,
                Z = K.push,
                et = K.push,
                tt = K.slice,
                it = K.indexOf || function (e) {
                    for (var t = 0, i = this.length; i > t; t++)
                        if (this[t] === e) return t;
                    return -1
                },
                nt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                rt = "[\\x20\\t\\r\\n\\f]",
                st = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                ot = st.replace("w", "w#"),
                at = "\\[" + rt + "*(" + st + ")" + rt + "*(?:([*^$|!~]?=)" + rt + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ot + ")|)|)" + rt + "*\\]",
                lt = ":(" + st + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + at.replace(3, 8) + ")*)|.*)\\)|)",
                ct = RegExp("^" + rt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + rt + "+$", "g"),
                ht = RegExp("^" + rt + "*," + rt + "*"),
                dt = RegExp("^" + rt + "*([>+~]|" + rt + ")" + rt + "*"),
                pt = RegExp(rt + "*[+~]"),
                ft = RegExp("=" + rt + "*([^\\]'\"]*)" + rt + "*\\]", "g"),
                gt = RegExp(lt),
                mt = RegExp("^" + ot + "$"),
                vt = {
                    ID: RegExp("^#(" + st + ")"),
                    CLASS: RegExp("^\\.(" + st + ")"),
                    TAG: RegExp("^(" + st.replace("w", "w*") + ")"),
                    ATTR: RegExp("^" + at),
                    PSEUDO: RegExp("^" + lt),
                    CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + rt + "*(even|odd|(([+-]|)(\\d*)n|)" + rt + "*(?:([+-]|)" + rt + "*(\\d+)|))" + rt + "*\\)|)", "i"),
                    bool: RegExp("^(?:" + nt + ")$", "i"),
                    needsContext: RegExp("^" + rt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + rt + "*((?:-\\d)?\\d*)" + rt + "*\\)|)(?=[^-]|$)", "i")
                },
                yt = /^[^{]+\{\s*\[native \w/,
                bt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                wt = /^(?:input|select|textarea|button)$/i,
                _t = /^h\d$/i,
                xt = /'|\\/g,
                kt = RegExp("\\\\([\\da-f]{1,6}" + rt + "?|(" + rt + ")|.)", "ig"),
                Tt = function (e, t, i) {
                    var n = "0x" + t - 65536;
                    return n !== n || i ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n)
                };
            try {
                et.apply(K = tt.call(j.childNodes), j.childNodes), K[j.childNodes.length].nodeType
            } catch (Ct) {
                et = {
                    apply: K.length ? function (e, t) {
                        Z.apply(e, tt.call(t))
                    } : function (e, t) {
                        for (var i = e.length, n = 0; e[i++] = t[n++];);
                        e.length = i - 1
                    }
                }
            }
            $ = i.isXML = function (e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? "HTML" !== t.nodeName : !1
            }, k = i.support = {}, P = i.setDocument = function (e) {
                var i = e ? e.ownerDocument || e : j,
                    n = i.defaultView;
                return i !== A && 9 === i.nodeType && i.documentElement ? (A = i, M = i.documentElement, I = !$(i), n && n.attachEvent && n !== n.top && n.attachEvent("onbeforeunload", function () {
                    P()
                }), k.attributes = s(function (e) {
                    return e.className = "i", !e.getAttribute("className")
                }), k.getElementsByTagName = s(function (e) {
                    return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length
                }), k.getElementsByClassName = s(function (e) {
                    return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
                }), k.getById = s(function (e) {
                    return M.appendChild(e).id = L, !i.getElementsByName || !i.getElementsByName(L).length
                }), k.getById ? (C.find.ID = function (e, t) {
                    if (typeof t.getElementById !== X && I) {
                        var i = t.getElementById(e);
                        return i && i.parentNode ? [i] : []
                    }
                }, C.filter.ID = function (e) {
                    var t = e.replace(kt, Tt);
                    return function (e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete C.find.ID, C.filter.ID = function (e) {
                    var t = e.replace(kt, Tt);
                    return function (e) {
                        var i = typeof e.getAttributeNode !== X && e.getAttributeNode("id");
                        return i && i.value === t
                    }
                }), C.find.TAG = k.getElementsByTagName ? function (e, i) {
                    return typeof i.getElementsByTagName !== X ? i.getElementsByTagName(e) : t
                } : function (e, t) {
                    var i, n = [],
                        r = 0,
                        s = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; i = s[r++];) 1 === i.nodeType && n.push(i);
                        return n
                    }
                    return s
                }, C.find.CLASS = k.getElementsByClassName && function (e, i) {
                    return typeof i.getElementsByClassName !== X && I ? i.getElementsByClassName(e) : t
                }, N = [], O = [], (k.qsa = yt.test(i.querySelectorAll)) && (s(function (e) {
                    e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || O.push("\\[" + rt + "*(?:value|" + nt + ")"), e.querySelectorAll(":checked").length || O.push(":checked")
                }), s(function (e) {
                    var t = i.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && O.push("[*^$]=" + rt + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), O.push(",.*:")
                })), (k.matchesSelector = yt.test(V = M.webkitMatchesSelector || M.mozMatchesSelector || M.oMatchesSelector || M.msMatchesSelector)) && s(function (e) {
                    k.disconnectedMatch = V.call(e, "div"), V.call(e, "[s!='']:x"), N.push("!=", lt)
                }), O = O.length && RegExp(O.join("|")), N = N.length && RegExp(N.join("|")), B = yt.test(M.contains) || M.compareDocumentPosition ? function (e, t) {
                    var i = 9 === e.nodeType ? e.documentElement : e,
                        n = t && t.parentNode;
                    return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
                } : function (e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, Y = M.compareDocumentPosition ? function (e, t) {
                    if (e === t) return W = !0, 0;
                    var n = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
                    return n ? 1 & n || !k.sortDetached && t.compareDocumentPosition(e) === n ? e === i || B(j, e) ? -1 : t === i || B(j, t) ? 1 : E ? it.call(E, e) - it.call(E, t) : 0 : 4 & n ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
                } : function (e, t) {
                    var n, r = 0,
                        s = e.parentNode,
                        o = t.parentNode,
                        l = [e],
                        c = [t];
                    if (e === t) return W = !0, 0;
                    if (!s || !o) return e === i ? -1 : t === i ? 1 : s ? -1 : o ? 1 : E ? it.call(E, e) - it.call(E, t) : 0;
                    if (s === o) return a(e, t);
                    for (n = e; n = n.parentNode;) l.unshift(n);
                    for (n = t; n = n.parentNode;) c.unshift(n);
                    for (; l[r] === c[r];) r++;
                    return r ? a(l[r], c[r]) : l[r] === j ? -1 : c[r] === j ? 1 : 0
                }, i) : A
            }, i.matches = function (e, t) {
                return i(e, null, null, t)
            }, i.matchesSelector = function (e, t) {
                if ((e.ownerDocument || e) !== A && P(e), t = t.replace(ft, "='$1']"), !(!k.matchesSelector || !I || N && N.test(t) || O && O.test(t))) try {
                    var n = V.call(e, t);
                    if (n || k.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (r) {}
                return i(t, A, null, [e]).length > 0
            }, i.contains = function (e, t) {
                return (e.ownerDocument || e) !== A && P(e), B(e, t)
            }, i.attr = function (e, i) {
                (e.ownerDocument || e) !== A && P(e);
                var n = C.attrHandle[i.toLowerCase()],
                    r = n && Q.call(C.attrHandle, i.toLowerCase()) ? n(e, i, !I) : t;
                return r === t ? k.attributes || !I ? e.getAttribute(i) : (r = e.getAttributeNode(i)) && r.specified ? r.value : null : r
            }, i.error = function (e) {
                throw Error("Syntax error, unrecognized expression: " + e)
            }, i.uniqueSort = function (e) {
                var t, i = [],
                    n = 0,
                    r = 0;
                if (W = !k.detectDuplicates, E = !k.sortStable && e.slice(0), e.sort(Y), W) {
                    for (; t = e[r++];) t === e[r] && (n = i.push(r));
                    for (; n--;) e.splice(i[n], 1)
                }
                return e
            }, S = i.getText = function (e) {
                var t, i = "",
                    n = 0,
                    r = e.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) i += S(e)
                    } else if (3 === r || 4 === r) return e.nodeValue
                } else
                    for (; t = e[n]; n++) i += S(t);
                return i
            }, C = i.selectors = {
                cacheLength: 50,
                createPseudo: r,
                match: vt,
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
                    ATTR: function (e) {
                        return e[1] = e[1].replace(kt, Tt), e[3] = (e[4] || e[5] || "").replace(kt, Tt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function (e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || i.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && i.error(e[0]), e
                    },
                    PSEUDO: function (e) {
                        var i, n = !e[5] && e[2];
                        return vt.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : n && gt.test(n) && (i = d(n, !0)) && (i = n.indexOf(")", n.length - i) - n.length) && (e[0] = e[0].slice(0, i), e[2] = n.slice(0, i)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(kt, Tt).toLowerCase();
                        return "*" === e ? function () {
                            return !0
                        } : function (e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function (e) {
                        var t = z[e + " "];
                        return t || (t = RegExp("(^|" + rt + ")" + e + "(" + rt + "|$)")) && z(e, function (e) {
                            return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== X && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function (e, t, n) {
                        return function (r) {
                            var s = i.attr(r, e);
                            return null == s ? "!=" === t : t ? (s += "", "=" === t ? s === n : "!=" === t ? s !== n : "^=" === t ? n && 0 === s.indexOf(n) : "*=" === t ? n && s.indexOf(n) > -1 : "$=" === t ? n && s.slice(-n.length) === n : "~=" === t ? (" " + s + " ").indexOf(n) > -1 : "|=" === t ? s === n || s.slice(0, n.length + 1) === n + "-" : !1) : !0
                        }
                    },
                    CHILD: function (e, t, i, n, r) {
                        var s = "nth" !== e.slice(0, 3),
                            o = "last" !== e.slice(-4),
                            a = "of-type" === t;
                        return 1 === n && 0 === r ? function (e) {
                            return !!e.parentNode
                        } : function (t, i, l) {
                            var c, u, h, d, p, f, g = s !== o ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                v = a && t.nodeName.toLowerCase(),
                                y = !l && !a;
                            if (m) {
                                if (s) {
                                    for (; g;) {
                                        for (h = t; h = h[g];)
                                            if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                                        f = g = "only" === e && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [o ? m.firstChild : m.lastChild], o && y) {
                                    for (u = m[L] || (m[L] = {}), c = u[e] || [], p = c[0] === F && c[1], d = c[0] === F && c[2], h = p && m.childNodes[p]; h = ++p && h && h[g] || (d = p = 0) || f.pop();)
                                        if (1 === h.nodeType && ++d && h === t) {
                                            u[e] = [F, p, d];
                                            break
                                        }
                                } else if (y && (c = (t[L] || (t[L] = {}))[e]) && c[0] === F) d = c[1];
                                else
                                    for (;
                                        (h = ++p && h && h[g] || (d = p = 0) || f.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++d || (y && ((h[L] || (h[L] = {}))[e] = [F, d]), h !== t)););
                                return d -= r, d === n || 0 === d % n && d / n >= 0
                            }
                        }
                    },
                    PSEUDO: function (e, t) {
                        var n, s = C.pseudos[e] || C.setFilters[e.toLowerCase()] || i.error("unsupported pseudo: " + e);
                        return s[L] ? s(t) : s.length > 1 ? (n = [e, e, "", t], C.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function (e, i) {
                            for (var n, r = s(e, t), o = r.length; o--;) n = it.call(e, r[o]), e[n] = !(i[n] = r[o])
                        }) : function (e) {
                            return s(e, 0, n)
                        }) : s
                    }
                },
                pseudos: {
                    not: r(function (e) {
                        var t = [],
                            i = [],
                            n = D(e.replace(ct, "$1"));
                        return n[L] ? r(function (e, t, i, r) {
                            for (var s, o = n(e, null, r, []), a = e.length; a--;)(s = o[a]) && (e[a] = !(t[a] = s))
                        }) : function (e, r, s) {
                            return t[0] = e, n(t, null, s, i), !i.pop()
                        }
                    }),
                    has: r(function (e) {
                        return function (t) {
                            return i(e, t).length > 0
                        }
                    }),
                    contains: r(function (e) {
                        return function (t) {
                            return (t.textContent || t.innerText || S(t)).indexOf(e) > -1
                        }
                    }),
                    lang: r(function (e) {
                        return mt.test(e || "") || i.error("unsupported lang: " + e), e = e.replace(kt, Tt).toLowerCase(),
                            function (t) {
                                var i;
                                do
                                    if (i = I ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return i = i.toLowerCase(), i === e || 0 === i.indexOf(e + "-");
                                while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function (t) {
                        var i = e.location && e.location.hash;
                        return i && i.slice(1) === t.id
                    },
                    root: function (e) {
                        return e === M
                    },
                    focus: function (e) {
                        return e === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function (e) {
                        return e.disabled === !1
                    },
                    disabled: function (e) {
                        return e.disabled === !0
                    },
                    checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    },
                    empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                        return !0
                    },
                    parent: function (e) {
                        return !C.pseudos.empty(e)
                    },
                    header: function (e) {
                        return _t.test(e.nodeName)
                    },
                    input: function (e) {
                        return wt.test(e.nodeName)
                    },
                    button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function (e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                    },
                    first: u(function () {
                        return [0]
                    }),
                    last: u(function (e, t) {
                        return [t - 1]
                    }),
                    eq: u(function (e, t, i) {
                        return [0 > i ? i + t : i]
                    }),
                    even: u(function (e, t) {
                        for (var i = 0; t > i; i += 2) e.push(i);
                        return e
                    }),
                    odd: u(function (e, t) {
                        for (var i = 1; t > i; i += 2) e.push(i);
                        return e
                    }),
                    lt: u(function (e, t, i) {
                        for (var n = 0 > i ? i + t : i; --n >= 0;) e.push(n);
                        return e
                    }),
                    gt: u(function (e, t, i) {
                        for (var n = 0 > i ? i + t : i; t > ++n;) e.push(n);
                        return e
                    })
                }
            }, C.pseudos.nth = C.pseudos.eq;
            for (x in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) C.pseudos[x] = l(x);
            for (x in {
                submit: !0,
                reset: !0
            }) C.pseudos[x] = c(x);
            h.prototype = C.filters = C.pseudos, C.setFilters = new h, D = i.compile = function (e, t) {
                var i, n = [],
                    r = [],
                    s = U[e + " "];
                if (!s) {
                    for (t || (t = d(e)), i = t.length; i--;) s = y(t[i]), s[L] ? n.push(s) : r.push(s);
                    s = U(e, b(r, n))
                }
                return s
            }, k.sortStable = L.split("").sort(Y).join("") === L, k.detectDuplicates = W, P(), k.sortDetached = s(function (e) {
                return 1 & e.compareDocumentPosition(A.createElement("div"))
            }), s(function (e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || o("type|href|height|width", function (e, i, n) {
                return n ? t : e.getAttribute(i, "type" === i.toLowerCase() ? 1 : 2)
            }), k.attributes && s(function (e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || o("value", function (e, i, n) {
                return n || "input" !== e.nodeName.toLowerCase() ? t : e.defaultValue
            }), s(function (e) {
                return null == e.getAttribute("disabled")
            }) || o(nt, function (e, i, n) {
                var r;
                return n ? t : (r = e.getAttributeNode(i)) && r.specified ? r.value : e[i] === !0 ? i.toLowerCase() : null
            }), ut.find = i, ut.expr = i.selectors, ut.expr[":"] = ut.expr.pseudos, ut.unique = i.uniqueSort, ut.text = i.getText, ut.isXMLDoc = i.isXML, ut.contains = i.contains
        }(e);
    var Ct = {};
    ut.Callbacks = function (e) {
        e = "string" == typeof e ? Ct[e] || n(e) : ut.extend({}, e);
        var i, r, s, o, a, l, c = [],
            u = !e.once && [],
            h = function (t) {
                for (r = e.memory && t, s = !0, a = l || 0, l = 0, o = c.length, i = !0; c && o > a; a++)
                    if (c[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                        r = !1;
                        break
                    }
                i = !1, c && (u ? u.length && h(u.shift()) : r ? c = [] : d.disable())
            },
            d = {
                add: function () {
                    if (c) {
                        var t = c.length;
                        ! function n(t) {
                            ut.each(t, function (t, i) {
                                var r = ut.type(i);
                                "function" === r ? e.unique && d.has(i) || c.push(i) : i && i.length && "string" !== r && n(i)
                            })
                        }(arguments), i ? o = c.length : r && (l = t, h(r))
                    }
                    return this
                },
                remove: function () {
                    return c && ut.each(arguments, function (e, t) {
                        for (var n;
                            (n = ut.inArray(t, c, n)) > -1;) c.splice(n, 1), i && (o >= n && o--, a >= n && a--)
                    }), this
                },
                has: function (e) {
                    return e ? ut.inArray(e, c) > -1 : !(!c || !c.length)
                },
                empty: function () {
                    return c = [], o = 0, this
                },
                disable: function () {
                    return c = u = r = t, this
                },
                disabled: function () {
                    return !c
                },
                lock: function () {
                    return u = t, r || d.disable(), this
                },
                locked: function () {
                    return !u
                },
                fireWith: function (e, t) {
                    return !c || s && !u || (t = t || [], t = [e, t.slice ? t.slice() : t], i ? u.push(t) : h(t)), this
                },
                fire: function () {
                    return d.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!s
                }
            };
        return d
    }, ut.extend({
        Deferred: function (e) {
            var t = [
                    ["resolve", "done", ut.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", ut.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", ut.Callbacks("memory")]
                ],
                i = "pending",
                n = {
                    state: function () {
                        return i
                    },
                    always: function () {
                        return r.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var e = arguments;
                        return ut.Deferred(function (i) {
                            ut.each(t, function (t, s) {
                                var o = s[0],
                                    a = ut.isFunction(e[t]) && e[t];
                                r[s[1]](function () {
                                    var e = a && a.apply(this, arguments);
                                    e && ut.isFunction(e.promise) ? e.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[o + "With"](this === n ? i.promise() : this, a ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? ut.extend(e, n) : n
                    }
                },
                r = {};
            return n.pipe = n.then, ut.each(t, function (e, s) {
                var o = s[2],
                    a = s[3];
                n[s[1]] = o.add, a && o.add(function () {
                    i = a
                }, t[1 ^ e][2].disable, t[2][2].lock), r[s[0]] = function () {
                    return r[s[0] + "With"](this === r ? n : this, arguments), this
                }, r[s[0] + "With"] = o.fireWith
            }), n.promise(r), e && e.call(r, r), r
        },
        when: function (e) {
            var t, i, n, r = 0,
                s = st.call(arguments),
                o = s.length,
                a = 1 !== o || e && ut.isFunction(e.promise) ? o : 0,
                l = 1 === a ? e : ut.Deferred(),
                c = function (e, i, n) {
                    return function (r) {
                        i[e] = this, n[e] = arguments.length > 1 ? st.call(arguments) : r, n === t ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
                    }
                };
            if (o > 1)
                for (t = Array(o), i = Array(o), n = Array(o); o > r; r++) s[r] && ut.isFunction(s[r].promise) ? s[r].promise().done(c(r, n, s)).fail(l.reject).progress(c(r, i, t)) : --a;
            return a || l.resolveWith(n, s), l.promise()
        }
    }), ut.support = function (t) {
        var i, n, r, s, o, a, l, c, u, h = Q.createElement("div");
        if (h.setAttribute("className", "t"), h.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = h.getElementsByTagName("*") || [], n = h.getElementsByTagName("a")[0], !n || !n.style || !i.length) return t;
        s = Q.createElement("select"), a = s.appendChild(Q.createElement("option")), r = h.getElementsByTagName("input")[0], n.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== h.className, t.leadingWhitespace = 3 === h.firstChild.nodeType, t.tbody = !h.getElementsByTagName("tbody").length, t.htmlSerialize = !!h.getElementsByTagName("link").length, t.style = /top/.test(n.getAttribute("style")), t.hrefNormalized = "/a" === n.getAttribute("href"), t.opacity = /^0.5/.test(n.style.opacity), t.cssFloat = !!n.style.cssFloat, t.checkOn = !!r.value, t.optSelected = a.selected, t.enctype = !!Q.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== Q.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, r.checked = !0, t.noCloneChecked = r.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !a.disabled;
        try {
            delete h.test
        } catch (d) {
            t.deleteExpando = !1
        }
        r = Q.createElement("input"), r.setAttribute("value", ""), t.input = "" === r.getAttribute("value"), r.value = "t", r.setAttribute("type", "radio"), t.radioValue = "t" === r.value, r.setAttribute("checked", "t"), r.setAttribute("name", "t"), o = Q.createDocumentFragment(), o.appendChild(r), t.appendChecked = r.checked, t.checkClone = o.cloneNode(!0).cloneNode(!0).lastChild.checked, h.attachEvent && (h.attachEvent("onclick", function () {
            t.noCloneEvent = !1
        }), h.cloneNode(!0).click());
        for (u in {
            submit: !0,
            change: !0,
            focusin: !0
        }) h.setAttribute(l = "on" + u, "t"), t[u + "Bubbles"] = l in e || h.attributes[l].expando === !1;
        h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === h.style.backgroundClip;
        for (u in ut(t)) break;
        return t.ownLast = "0" !== u, ut(function () {
            var i, n, r, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                o = Q.getElementsByTagName("body")[0];
            o && (i = Q.createElement("div"), i.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", o.appendChild(i).appendChild(h), h.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = h.getElementsByTagName("td"), r[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = 0 === r[0].offsetHeight, r[0].style.display = "", r[1].style.display = "none", t.reliableHiddenOffsets = c && 0 === r[0].offsetHeight, h.innerHTML = "", h.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", ut.swap(o, null != o.style.zoom ? {
                zoom: 1
            } : {}, function () {
                t.boxSizing = 4 === h.offsetWidth
            }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(h, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(h, null) || {
                width: "4px"
            }).width, n = h.appendChild(Q.createElement("div")), n.style.cssText = h.style.cssText = s, n.style.marginRight = n.style.width = "0", h.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(n, null) || {}).marginRight)), typeof h.style.zoom !== X && (h.innerHTML = "", h.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === h.offsetWidth, h.style.display = "block", h.innerHTML = "<div></div>", h.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== h.offsetWidth, t.inlineBlockNeedsLayout && (o.style.zoom = 1)), o.removeChild(i), i = h = r = n = null)
        }), i = s = o = a = n = r = null, t
    }({});
    var St = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        $t = /([A-Z])/g;
    ut.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function (e) {
            return e = e.nodeType ? ut.cache[e[ut.expando]] : e[ut.expando], !!e && !a(e)
        },
        data: function (e, t, i) {
            return r(e, t, i)
        },
        removeData: function (e, t) {
            return s(e, t)
        },
        _data: function (e, t, i) {
            return r(e, t, i, !0)
        },
        _removeData: function (e, t) {
            return s(e, t, !0)
        },
        acceptData: function (e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
            var t = e.nodeName && ut.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }), ut.fn.extend({
        data: function (e, i) {
            var n, r, s = null,
                a = 0,
                l = this[0];
            if (e === t) {
                if (this.length && (s = ut.data(l), 1 === l.nodeType && !ut._data(l, "parsedAttrs"))) {
                    for (n = l.attributes; n.length > a; a++) r = n[a].name, 0 === r.indexOf("data-") && (r = ut.camelCase(r.slice(5)), o(l, r, s[r]));
                    ut._data(l, "parsedAttrs", !0)
                }
                return s
            }
            return "object" == typeof e ? this.each(function () {
                ut.data(this, e)
            }) : arguments.length > 1 ? this.each(function () {
                ut.data(this, e, i)
            }) : l ? o(l, e, ut.data(l, e)) : null
        },
        removeData: function (e) {
            return this.each(function () {
                ut.removeData(this, e)
            })
        }
    }), ut.extend({
        queue: function (e, i, n) {
            var r;
            return e ? (i = (i || "fx") + "queue", r = ut._data(e, i), n && (!r || ut.isArray(n) ? r = ut._data(e, i, ut.makeArray(n)) : r.push(n)), r || []) : t
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var i = ut.queue(e, t),
                n = i.length,
                r = i.shift(),
                s = ut._queueHooks(e, t),
                o = function () {
                    ut.dequeue(e, t)
                };
            "inprogress" === r && (r = i.shift(), n--), r && ("fx" === t && i.unshift("inprogress"), delete s.stop, r.call(e, o, s)), !n && s && s.empty.fire()
        },
        _queueHooks: function (e, t) {
            var i = t + "queueHooks";
            return ut._data(e, i) || ut._data(e, i, {
                empty: ut.Callbacks("once memory").add(function () {
                    ut._removeData(e, t + "queue"), ut._removeData(e, i)
                })
            })
        }
    }), ut.fn.extend({
        queue: function (e, i) {
            var n = 2;
            return "string" != typeof e && (i = e, e = "fx", n--), n > arguments.length ? ut.queue(this[0], e) : i === t ? this : this.each(function () {
                var t = ut.queue(this, e, i);
                ut._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && ut.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                ut.dequeue(this, e)
            })
        },
        delay: function (e, t) {
            return e = ut.fx ? ut.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, i) {
                var n = setTimeout(t, e);
                i.stop = function () {
                    clearTimeout(n)
                }
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, i) {
            var n, r = 1,
                s = ut.Deferred(),
                o = this,
                a = this.length,
                l = function () {
                    --r || s.resolveWith(o, [o])
                };
            for ("string" != typeof e && (i = e, e = t), e = e || "fx"; a--;) n = ut._data(o[a], e + "queueHooks"), n && n.empty && (r++, n.empty.add(l));
            return l(), s.promise(i)
        }
    });
    var Dt, Ht, Et = /[\t\r\n\f]/g,
        Pt = /\r/g,
        At = /^(?:input|select|textarea|button|object)$/i,
        Mt = /^(?:a|area)$/i,
        It = /^(?:checked|selected)$/i,
        Ot = ut.support.getSetAttribute,
        Nt = ut.support.input;
    ut.fn.extend({
        attr: function (e, t) {
            return ut.access(this, ut.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                ut.removeAttr(this, e)
            })
        },
        prop: function (e, t) {
            return ut.access(this, ut.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return e = ut.propFix[e] || e, this.each(function () {
                try {
                    this[e] = t, delete this[e]
                } catch (i) {}
            })
        },
        addClass: function (e) {
            var t, i, n, r, s, o = 0,
                a = this.length,
                l = "string" == typeof e && e;
            if (ut.isFunction(e)) return this.each(function (t) {
                ut(this).addClass(e.call(this, t, this.className))
            });
            if (l)
                for (t = (e || "").match(dt) || []; a > o; o++)
                    if (i = this[o], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Et, " ") : " ")) {
                        for (s = 0; r = t[s++];) 0 > n.indexOf(" " + r + " ") && (n += r + " ");
                        i.className = ut.trim(n)
                    }
            return this
        },
        removeClass: function (e) {
            var t, i, n, r, s, o = 0,
                a = this.length,
                l = 0 === arguments.length || "string" == typeof e && e;
            if (ut.isFunction(e)) return this.each(function (t) {
                ut(this).removeClass(e.call(this, t, this.className))
            });
            if (l)
                for (t = (e || "").match(dt) || []; a > o; o++)
                    if (i = this[o], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Et, " ") : "")) {
                        for (s = 0; r = t[s++];)
                            for (; n.indexOf(" " + r + " ") >= 0;) n = n.replace(" " + r + " ", " ");
                        i.className = e ? ut.trim(n) : ""
                    }
            return this
        },
        toggleClass: function (e, t) {
            var i = typeof e;
            return "boolean" == typeof t && "string" === i ? t ? this.addClass(e) : this.removeClass(e) : this.each(ut.isFunction(e) ? function (i) {
                ut(this).toggleClass(e.call(this, i, this.className, t), t)
            } : function () {
                if ("string" === i)
                    for (var t, n = 0, r = ut(this), s = e.match(dt) || []; t = s[n++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else(i === X || "boolean" === i) && (this.className && ut._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ut._data(this, "__className__") || "")
            })
        },
        hasClass: function (e) {
            for (var t = " " + e + " ", i = 0, n = this.length; n > i; i++)
                if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(Et, " ").indexOf(t) >= 0) return !0;
            return !1
        },
        val: function (e) {
            var i, n, r, s = this[0];
            return arguments.length ? (r = ut.isFunction(e), this.each(function (i) {
                var s;
                1 === this.nodeType && (s = r ? e.call(this, i, ut(this).val()) : e, null == s ? s = "" : "number" == typeof s ? s += "" : ut.isArray(s) && (s = ut.map(s, function (e) {
                    return null == e ? "" : e + ""
                })), n = ut.valHooks[this.type] || ut.valHooks[this.nodeName.toLowerCase()], n && "set" in n && n.set(this, s, "value") !== t || (this.value = s))
            })) : s ? (n = ut.valHooks[s.type] || ut.valHooks[s.nodeName.toLowerCase()], n && "get" in n && (i = n.get(s, "value")) !== t ? i : (i = s.value, "string" == typeof i ? i.replace(Pt, "") : null == i ? "" : i)) : void 0
        }
    }), ut.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = ut.find.attr(e, "value");
                    return null != t ? t : e.text
                }
            },
            select: {
                get: function (e) {
                    for (var t, i, n = e.options, r = e.selectedIndex, s = "select-one" === e.type || 0 > r, o = s ? null : [], a = s ? r + 1 : n.length, l = 0 > r ? a : s ? r : 0; a > l; l++)
                        if (i = n[l], !(!i.selected && l !== r || (ut.support.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && ut.nodeName(i.parentNode, "optgroup"))) {
                            if (t = ut(i).val(), s) return t;
                            o.push(t)
                        }
                    return o
                },
                set: function (e, t) {
                    for (var i, n, r = e.options, s = ut.makeArray(t), o = r.length; o--;) n = r[o], (n.selected = ut.inArray(ut(n).val(), s) >= 0) && (i = !0);
                    return i || (e.selectedIndex = -1), s
                }
            }
        },
        attr: function (e, i, n) {
            var r, s, o = e.nodeType;
            return e && 3 !== o && 8 !== o && 2 !== o ? typeof e.getAttribute === X ? ut.prop(e, i, n) : (1 === o && ut.isXMLDoc(e) || (i = i.toLowerCase(), r = ut.attrHooks[i] || (ut.expr.match.bool.test(i) ? Ht : Dt)), n === t ? r && "get" in r && null !== (s = r.get(e, i)) ? s : (s = ut.find.attr(e, i), null == s ? t : s) : null !== n ? r && "set" in r && (s = r.set(e, n, i)) !== t ? s : (e.setAttribute(i, n + ""), n) : (ut.removeAttr(e, i), t)) : void 0
        },
        removeAttr: function (e, t) {
            var i, n, r = 0,
                s = t && t.match(dt);
            if (s && 1 === e.nodeType)
                for (; i = s[r++];) n = ut.propFix[i] || i, ut.expr.match.bool.test(i) ? Nt && Ot || !It.test(i) ? e[n] = !1 : e[ut.camelCase("default-" + i)] = e[n] = !1 : ut.attr(e, i, ""), e.removeAttribute(Ot ? i : n)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!ut.support.radioValue && "radio" === t && ut.nodeName(e, "input")) {
                        var i = e.value;
                        return e.setAttribute("type", t), i && (e.value = i), t
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function (e, i, n) {
            var r, s, o, a = e.nodeType;
            return e && 3 !== a && 8 !== a && 2 !== a ? (o = 1 !== a || !ut.isXMLDoc(e), o && (i = ut.propFix[i] || i, s = ut.propHooks[i]), n !== t ? s && "set" in s && (r = s.set(e, n, i)) !== t ? r : e[i] = n : s && "get" in s && null !== (r = s.get(e, i)) ? r : e[i]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = ut.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : At.test(e.nodeName) || Mt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), Ht = {
        set: function (e, t, i) {
            return t === !1 ? ut.removeAttr(e, i) : Nt && Ot || !It.test(i) ? e.setAttribute(!Ot && ut.propFix[i] || i, i) : e[ut.camelCase("default-" + i)] = e[i] = !0, i
        }
    }, ut.each(ut.expr.match.bool.source.match(/\w+/g), function (e, i) {
        var n = ut.expr.attrHandle[i] || ut.find.attr;
        ut.expr.attrHandle[i] = Nt && Ot || !It.test(i) ? function (e, i, r) {
            var s = ut.expr.attrHandle[i],
                o = r ? t : (ut.expr.attrHandle[i] = t) != n(e, i, r) ? i.toLowerCase() : null;
            return ut.expr.attrHandle[i] = s, o
        } : function (e, i, n) {
            return n ? t : e[ut.camelCase("default-" + i)] ? i.toLowerCase() : null
        }
    }), Nt && Ot || (ut.attrHooks.value = {
        set: function (e, i, n) {
            return ut.nodeName(e, "input") ? (e.defaultValue = i, t) : Dt && Dt.set(e, i, n)
        }
    }), Ot || (Dt = {
        set: function (e, i, n) {
            var r = e.getAttributeNode(n);
            return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = i += "", "value" === n || i === e.getAttribute(n) ? i : t
        }
    }, ut.expr.attrHandle.id = ut.expr.attrHandle.name = ut.expr.attrHandle.coords = function (e, i, n) {
        var r;
        return n ? t : (r = e.getAttributeNode(i)) && "" !== r.value ? r.value : null
    }, ut.valHooks.button = {
        get: function (e, i) {
            var n = e.getAttributeNode(i);
            return n && n.specified ? n.value : t
        },
        set: Dt.set
    }, ut.attrHooks.contenteditable = {
        set: function (e, t, i) {
            Dt.set(e, "" === t ? !1 : t, i)
        }
    }, ut.each(["width", "height"], function (e, i) {
        ut.attrHooks[i] = {
            set: function (e, n) {
                return "" === n ? (e.setAttribute(i, "auto"), n) : t
            }
        }
    })), ut.support.hrefNormalized || ut.each(["href", "src"], function (e, t) {
        ut.propHooks[t] = {
            get: function (e) {
                return e.getAttribute(t, 4)
            }
        }
    }), ut.support.style || (ut.attrHooks.style = {
        get: function (e) {
            return e.style.cssText || t
        },
        set: function (e, t) {
            return e.style.cssText = t + ""
        }
    }), ut.support.optSelected || (ut.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), ut.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        ut.propFix[this.toLowerCase()] = this
    }), ut.support.enctype || (ut.propFix.enctype = "encoding"), ut.each(["radio", "checkbox"], function () {
        ut.valHooks[this] = {
            set: function (e, i) {
                return ut.isArray(i) ? e.checked = ut.inArray(ut(e).val(), i) >= 0 : t
            }
        }, ut.support.checkOn || (ut.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Vt = /^(?:input|select|textarea)$/i,
        Bt = /^key/,
        Lt = /^(?:mouse|contextmenu)|click/,
        jt = /^(?:focusinfocus|focusoutblur)$/,
        Ft = /^([^.]*)(?:\.(.+)|)$/;
    ut.event = {
        global: {},
        add: function (e, i, n, r, s) {
            var o, a, l, c, u, h, d, p, f, g, m, v = ut._data(e);
            if (v) {
                for (n.handler && (c = n, n = c.handler, s = c.selector), n.guid || (n.guid = ut.guid++), (a = v.events) || (a = v.events = {}), (h = v.handle) || (h = v.handle = function (e) {
                    return typeof ut === X || e && ut.event.triggered === e.type ? t : ut.event.dispatch.apply(h.elem, arguments)
                }, h.elem = e), i = (i || "").match(dt) || [""], l = i.length; l--;) o = Ft.exec(i[l]) || [], f = m = o[1], g = (o[2] || "").split(".").sort(), f && (u = ut.event.special[f] || {}, f = (s ? u.delegateType : u.bindType) || f, u = ut.event.special[f] || {}, d = ut.extend({
                    type: f,
                    origType: m,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: s,
                    needsContext: s && ut.expr.match.needsContext.test(s),
                    namespace: g.join(".")
                }, c), (p = a[f]) || (p = a[f] = [], p.delegateCount = 0, u.setup && u.setup.call(e, r, g, h) !== !1 || (e.addEventListener ? e.addEventListener(f, h, !1) : e.attachEvent && e.attachEvent("on" + f, h))), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), s ? p.splice(p.delegateCount++, 0, d) : p.push(d), ut.event.global[f] = !0);
                e = null
            }
        },
        remove: function (e, t, i, n, r) {
            var s, o, a, l, c, u, h, d, p, f, g, m = ut.hasData(e) && ut._data(e);
            if (m && (u = m.events)) {
                for (t = (t || "").match(dt) || [""], c = t.length; c--;)
                    if (a = Ft.exec(t[c]) || [], p = g = a[1], f = (a[2] || "").split(".").sort(), p) {
                        for (h = ut.event.special[p] || {}, p = (n ? h.delegateType : h.bindType) || p, d = u[p] || [], a = a[2] && RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = s = d.length; s--;) o = d[s], !r && g !== o.origType || i && i.guid !== o.guid || a && !a.test(o.namespace) || n && n !== o.selector && ("**" !== n || !o.selector) || (d.splice(s, 1), o.selector && d.delegateCount--, h.remove && h.remove.call(e, o));
                        l && !d.length && (h.teardown && h.teardown.call(e, f, m.handle) !== !1 || ut.removeEvent(e, p, m.handle), delete u[p])
                    } else
                        for (p in u) ut.event.remove(e, p + t[c], i, n, !0);
                ut.isEmptyObject(u) && (delete m.handle, ut._removeData(e, "events"))
            }
        },
        trigger: function (i, n, r, s) {
            var o, a, l, c, u, h, d, p = [r || Q],
                f = lt.call(i, "type") ? i.type : i,
                g = lt.call(i, "namespace") ? i.namespace.split(".") : [];
            if (l = h = r = r || Q, 3 !== r.nodeType && 8 !== r.nodeType && !jt.test(f + ut.event.triggered) && (f.indexOf(".") >= 0 && (g = f.split("."), f = g.shift(), g.sort()), a = 0 > f.indexOf(":") && "on" + f, i = i[ut.expando] ? i : new ut.Event(f, "object" == typeof i && i), i.isTrigger = s ? 2 : 3, i.namespace = g.join("."), i.namespace_re = i.namespace ? RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, i.result = t, i.target || (i.target = r), n = null == n ? [i] : ut.makeArray(n, [i]), u = ut.event.special[f] || {}, s || !u.trigger || u.trigger.apply(r, n) !== !1)) {
                if (!s && !u.noBubble && !ut.isWindow(r)) {
                    for (c = u.delegateType || f, jt.test(c + f) || (l = l.parentNode); l; l = l.parentNode) p.push(l), h = l;
                    h === (r.ownerDocument || Q) && p.push(h.defaultView || h.parentWindow || e)
                }
                for (d = 0;
                    (l = p[d++]) && !i.isPropagationStopped();) i.type = d > 1 ? c : u.bindType || f, o = (ut._data(l, "events") || {})[i.type] && ut._data(l, "handle"), o && o.apply(l, n), o = a && l[a], o && ut.acceptData(l) && o.apply && o.apply(l, n) === !1 && i.preventDefault();
                if (i.type = f, !s && !i.isDefaultPrevented() && (!u._default || u._default.apply(p.pop(), n) === !1) && ut.acceptData(r) && a && r[f] && !ut.isWindow(r)) {
                    h = r[a], h && (r[a] = null), ut.event.triggered = f;
                    try {
                        r[f]()
                    } catch (m) {}
                    ut.event.triggered = t, h && (r[a] = h)
                }
                return i.result
            }
        },
        dispatch: function (e) {
            e = ut.event.fix(e);
            var i, n, r, s, o, a = [],
                l = st.call(arguments),
                c = (ut._data(this, "events") || {})[e.type] || [],
                u = ut.event.special[e.type] || {};
            if (l[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                for (a = ut.event.handlers.call(this, e, c), i = 0;
                    (s = a[i++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = s.elem, o = 0;
                        (r = s.handlers[o++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(r.namespace)) && (e.handleObj = r, e.data = r.data, n = ((ut.event.special[r.origType] || {}).handle || r.handler).apply(s.elem, l), n !== t && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, i) {
            var n, r, s, o, a = [],
                l = i.delegateCount,
                c = e.target;
            if (l && c.nodeType && (!e.button || "click" !== e.type))
                for (; c != this; c = c.parentNode || this)
                    if (1 === c.nodeType && (c.disabled !== !0 || "click" !== e.type)) {
                        for (s = [], o = 0; l > o; o++) r = i[o], n = r.selector + " ", s[n] === t && (s[n] = r.needsContext ? ut(n, this).index(c) >= 0 : ut.find(n, this, null, [c]).length), s[n] && s.push(r);
                        s.length && a.push({
                            elem: c,
                            handlers: s
                        })
                    }
            return i.length > l && a.push({
                elem: this,
                handlers: i.slice(l)
            }), a
        },
        fix: function (e) {
            if (e[ut.expando]) return e;
            var t, i, n, r = e.type,
                s = e,
                o = this.fixHooks[r];
            for (o || (this.fixHooks[r] = o = Lt.test(r) ? this.mouseHooks : Bt.test(r) ? this.keyHooks : {}), n = o.props ? this.props.concat(o.props) : this.props, e = new ut.Event(s), t = n.length; t--;) i = n[t], e[i] = s[i];
            return e.target || (e.target = s.srcElement || Q), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, o.filter ? o.filter(e, s) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, i) {
                var n, r, s, o = i.button,
                    a = i.fromElement;
                return null == e.pageX && null != i.clientX && (r = e.target.ownerDocument || Q, s = r.documentElement, n = r.body, e.pageX = i.clientX + (s && s.scrollLeft || n && n.scrollLeft || 0) - (s && s.clientLeft || n && n.clientLeft || 0), e.pageY = i.clientY + (s && s.scrollTop || n && n.scrollTop || 0) - (s && s.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? i.toElement : a), e.which || o === t || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== u() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === u() && this.blur ? (this.blur(), !1) : t
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    return ut.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
                },
                _default: function (e) {
                    return ut.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, i, n) {
            var r = ut.extend(new ut.Event, i, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            n ? ut.event.trigger(r, null, t) : ut.event.dispatch.call(t, r), r.isDefaultPrevented() && i.preventDefault()
        }
    }, ut.removeEvent = Q.removeEventListener ? function (e, t, i) {
        e.removeEventListener && e.removeEventListener(t, i, !1)
    } : function (e, t, i) {
        var n = "on" + t;
        e.detachEvent && (typeof e[n] === X && (e[n] = null), e.detachEvent(n, i))
    }, ut.Event = function (e, i) {
        return this instanceof ut.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? l : c) : this.type = e, i && ut.extend(this, i), this.timeStamp = e && e.timeStamp || ut.now(), this[ut.expando] = !0, t) : new ut.Event(e, i)
    }, ut.Event.prototype = {
        isDefaultPrevented: c,
        isPropagationStopped: c,
        isImmediatePropagationStopped: c,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = l, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = l, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = l, this.stopPropagation()
        }
    }, ut.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (e, t) {
        ut.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var i, n = this,
                    r = e.relatedTarget,
                    s = e.handleObj;
                return (!r || r !== n && !ut.contains(n, r)) && (e.type = s.origType, i = s.handler.apply(this, arguments), e.type = t), i
            }
        }
    }), ut.support.submitBubbles || (ut.event.special.submit = {
        setup: function () {
            return ut.nodeName(this, "form") ? !1 : (ut.event.add(this, "click._submit keypress._submit", function (e) {
                var i = e.target,
                    n = ut.nodeName(i, "input") || ut.nodeName(i, "button") ? i.form : t;
                n && !ut._data(n, "submitBubbles") && (ut.event.add(n, "submit._submit", function (e) {
                    e._submit_bubble = !0
                }), ut._data(n, "submitBubbles", !0))
            }), t)
        },
        postDispatch: function (e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ut.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function () {
            return ut.nodeName(this, "form") ? !1 : (ut.event.remove(this, "._submit"), t)
        }
    }), ut.support.changeBubbles || (ut.event.special.change = {
        setup: function () {
            return Vt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ut.event.add(this, "propertychange._change", function (e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), ut.event.add(this, "click._change", function (e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), ut.event.simulate("change", this, e, !0)
            })), !1) : (ut.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                Vt.test(t.nodeName) && !ut._data(t, "changeBubbles") && (ut.event.add(t, "change._change", function (e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || ut.event.simulate("change", this.parentNode, e, !0)
                }), ut._data(t, "changeBubbles", !0))
            }), t)
        },
        handle: function (e) {
            var i = e.target;
            return this !== i || e.isSimulated || e.isTrigger || "radio" !== i.type && "checkbox" !== i.type ? e.handleObj.handler.apply(this, arguments) : t
        },
        teardown: function () {
            return ut.event.remove(this, "._change"), !Vt.test(this.nodeName)
        }
    }), ut.support.focusinBubbles || ut.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var i = 0,
            n = function (e) {
                ut.event.simulate(t, e.target, ut.event.fix(e), !0)
            };
        ut.event.special[t] = {
            setup: function () {
                0 === i++ && Q.addEventListener(e, n, !0)
            },
            teardown: function () {
                0 === --i && Q.removeEventListener(e, n, !0)
            }
        }
    }), ut.fn.extend({
        on: function (e, i, n, r, s) {
            var o, a;
            if ("object" == typeof e) {
                "string" != typeof i && (n = n || i, i = t);
                for (o in e) this.on(o, i, n, e[o], s);
                return this
            }
            if (null == n && null == r ? (r = i, n = i = t) : null == r && ("string" == typeof i ? (r = n, n = t) : (r = n, n = i, i = t)), r === !1) r = c;
            else if (!r) return this;
            return 1 === s && (a = r, r = function (e) {
                return ut().off(e), a.apply(this, arguments)
            }, r.guid = a.guid || (a.guid = ut.guid++)), this.each(function () {
                ut.event.add(this, e, r, n, i)
            })
        },
        one: function (e, t, i, n) {
            return this.on(e, t, i, n, 1)
        },
        off: function (e, i, n) {
            var r, s;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, ut(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (s in e) this.off(s, i, e[s]);
                return this
            }
            return (i === !1 || "function" == typeof i) && (n = i, i = t), n === !1 && (n = c), this.each(function () {
                ut.event.remove(this, e, n, i)
            })
        },
        trigger: function (e, t) {
            return this.each(function () {
                ut.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, i) {
            var n = this[0];
            return n ? ut.event.trigger(e, i, n, !0) : t
        }
    });
    var Rt = /^.[^:#\[\.,]*$/,
        zt = /^(?:parents|prev(?:Until|All))/,
        qt = ut.expr.match.needsContext,
        Ut = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ut.fn.extend({
        find: function (e) {
            var t, i = [],
                n = this,
                r = n.length;
            if ("string" != typeof e) return this.pushStack(ut(e).filter(function () {
                for (t = 0; r > t; t++)
                    if (ut.contains(n[t], this)) return !0
            }));
            for (t = 0; r > t; t++) ut.find(e, n[t], i);
            return i = this.pushStack(r > 1 ? ut.unique(i) : i), i.selector = this.selector ? this.selector + " " + e : e, i
        },
        has: function (e) {
            var t, i = ut(e, this),
                n = i.length;
            return this.filter(function () {
                for (t = 0; n > t; t++)
                    if (ut.contains(this, i[t])) return !0
            })
        },
        not: function (e) {
            return this.pushStack(d(this, e || [], !0))
        },
        filter: function (e) {
            return this.pushStack(d(this, e || [], !1))
        },
        is: function (e) {
            return !!d(this, "string" == typeof e && qt.test(e) ? ut(e) : e || [], !1).length
        },
        closest: function (e, t) {
            for (var i, n = 0, r = this.length, s = [], o = qt.test(e) || "string" != typeof e ? ut(e, t || this.context) : 0; r > n; n++)
                for (i = this[n]; i && i !== t; i = i.parentNode)
                    if (11 > i.nodeType && (o ? o.index(i) > -1 : 1 === i.nodeType && ut.find.matchesSelector(i, e))) {
                        i = s.push(i);
                        break
                    }
            return this.pushStack(s.length > 1 ? ut.unique(s) : s)
        },
        index: function (e) {
            return e ? "string" == typeof e ? ut.inArray(this[0], ut(e)) : ut.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            var i = "string" == typeof e ? ut(e, t) : ut.makeArray(e && e.nodeType ? [e] : e),
                n = ut.merge(this.get(), i);
            return this.pushStack(ut.unique(n))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), ut.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return ut.dir(e, "parentNode")
        },
        parentsUntil: function (e, t, i) {
            return ut.dir(e, "parentNode", i)
        },
        next: function (e) {
            return h(e, "nextSibling")
        },
        prev: function (e) {
            return h(e, "previousSibling")
        },
        nextAll: function (e) {
            return ut.dir(e, "nextSibling")
        },
        prevAll: function (e) {
            return ut.dir(e, "previousSibling")
        },
        nextUntil: function (e, t, i) {
            return ut.dir(e, "nextSibling", i)
        },
        prevUntil: function (e, t, i) {
            return ut.dir(e, "previousSibling", i)
        },
        siblings: function (e) {
            return ut.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return ut.sibling(e.firstChild)
        },
        contents: function (e) {
            return ut.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ut.merge([], e.childNodes)
        }
    }, function (e, t) {
        ut.fn[e] = function (i, n) {
            var r = ut.map(this, t, i);
            return "Until" !== e.slice(-5) && (n = i), n && "string" == typeof n && (r = ut.filter(n, r)), this.length > 1 && (Ut[e] || (r = ut.unique(r)), zt.test(e) && (r = r.reverse())), this.pushStack(r)
        }
    }), ut.extend({
        filter: function (e, t, i) {
            var n = t[0];
            return i && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? ut.find.matchesSelector(n, e) ? [n] : [] : ut.find.matches(e, ut.grep(t, function (e) {
                return 1 === e.nodeType
            }))
        },
        dir: function (e, i, n) {
            for (var r = [], s = e[i]; s && 9 !== s.nodeType && (n === t || 1 !== s.nodeType || !ut(s).is(n));) 1 === s.nodeType && r.push(s), s = s[i];
            return r
        },
        sibling: function (e, t) {
            for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e);
            return i
        }
    });
    var Wt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Yt = / jQuery\d+="(?:null|\d+)"/g,
        Xt = RegExp("<(?:" + Wt + ")[\\s/>]", "i"),
        Gt = /^\s+/,
        Qt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Kt = /<([\w:]+)/,
        Jt = /<tbody/i,
        Zt = /<|&#?\w+;/,
        ei = /<(?:script|style|link)/i,
        ti = /^(?:checkbox|radio)$/i,
        ii = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ni = /^$|\/(?:java|ecma)script/i,
        ri = /^true\/(.*)/,
        si = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        oi = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: ut.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        ai = p(Q),
        li = ai.appendChild(Q.createElement("div"));
    oi.optgroup = oi.option, oi.tbody = oi.tfoot = oi.colgroup = oi.caption = oi.thead, oi.th = oi.td, ut.fn.extend({
        text: function (e) {
            return ut.access(this, function (e) {
                return e === t ? ut.text(this) : this.empty().append((this[0] && this[0].ownerDocument || Q).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = f(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = f(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function (e, t) {
            for (var i, n = e ? ut.filter(e, this) : this, r = 0; null != (i = n[r]); r++) t || 1 !== i.nodeType || ut.cleanData(w(i)), i.parentNode && (t && ut.contains(i.ownerDocument, i) && v(w(i, "script")), i.parentNode.removeChild(i));
            return this
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && ut.cleanData(w(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && ut.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function (e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
                return ut.clone(this, e, t)
            })
        },
        html: function (e) {
            return ut.access(this, function (e) {
                var i = this[0] || {},
                    n = 0,
                    r = this.length;
                if (e === t) return 1 === i.nodeType ? i.innerHTML.replace(Yt, "") : t;
                if (!("string" != typeof e || ei.test(e) || !ut.support.htmlSerialize && Xt.test(e) || !ut.support.leadingWhitespace && Gt.test(e) || oi[(Kt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(Qt, "<$1></$2>");
                    try {
                        for (; r > n; n++) i = this[n] || {}, 1 === i.nodeType && (ut.cleanData(w(i, !1)), i.innerHTML = e);
                        i = 0
                    } catch (s) {}
                }
                i && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var e = ut.map(this, function (e) {
                    return [e.nextSibling, e.parentNode]
                }),
                t = 0;
            return this.domManip(arguments, function (i) {
                var n = e[t++],
                    r = e[t++];
                r && (n && n.parentNode !== r && (n = this.nextSibling), ut(this).remove(), r.insertBefore(i, n))
            }, !0), t ? this : this.remove()
        },
        detach: function (e) {
            return this.remove(e, !0)
        },
        domManip: function (e, t, i) {
            e = nt.apply([], e);
            var n, r, s, o, a, l, c = 0,
                u = this.length,
                h = this,
                d = u - 1,
                p = e[0],
                f = ut.isFunction(p);
            if (f || !(1 >= u || "string" != typeof p || ut.support.checkClone) && ii.test(p)) return this.each(function (n) {
                var r = h.eq(n);
                f && (e[0] = p.call(this, n, r.html())), r.domManip(e, t, i)
            });
            if (u && (l = ut.buildFragment(e, this[0].ownerDocument, !1, !i && this), n = l.firstChild, 1 === l.childNodes.length && (l = n), n)) {
                for (o = ut.map(w(l, "script"), g), s = o.length; u > c; c++) r = l, c !== d && (r = ut.clone(r, !0, !0), s && ut.merge(o, w(r, "script"))), t.call(this[c], r, c);
                if (s)
                    for (a = o[o.length - 1].ownerDocument, ut.map(o, m), c = 0; s > c; c++) r = o[c], ni.test(r.type || "") && !ut._data(r, "globalEval") && ut.contains(a, r) && (r.src ? ut._evalUrl(r.src) : ut.globalEval((r.text || r.textContent || r.innerHTML || "").replace(si, "")));
                l = n = null
            }
            return this
        }
    }), ut.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        ut.fn[e] = function (e) {
            for (var i, n = 0, r = [], s = ut(e), o = s.length - 1; o >= n; n++) i = n === o ? this : this.clone(!0), ut(s[n])[t](i), rt.apply(r, i.get());
            return this.pushStack(r)
        }
    }), ut.extend({
        clone: function (e, t, i) {
            var n, r, s, o, a, l = ut.contains(e.ownerDocument, e);
            if (ut.support.html5Clone || ut.isXMLDoc(e) || !Xt.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (li.innerHTML = e.outerHTML, li.removeChild(s = li.firstChild)), !(ut.support.noCloneEvent && ut.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ut.isXMLDoc(e)))
                for (n = w(s), a = w(e), o = 0; null != (r = a[o]); ++o) n[o] && b(r, n[o]);
            if (t)
                if (i)
                    for (a = a || w(e), n = n || w(s), o = 0; null != (r = a[o]); o++) y(r, n[o]);
                else y(e, s);
            return n = w(s, "script"), n.length > 0 && v(n, !l && w(e, "script")), n = a = r = null, s
        },
        buildFragment: function (e, t, i, n) {
            for (var r, s, o, a, l, c, u, h = e.length, d = p(t), f = [], g = 0; h > g; g++)
                if (s = e[g], s || 0 === s)
                    if ("object" === ut.type(s)) ut.merge(f, s.nodeType ? [s] : s);
                    else if (Zt.test(s)) {
                for (a = a || d.appendChild(t.createElement("div")), l = (Kt.exec(s) || ["", ""])[1].toLowerCase(), u = oi[l] || oi._default, a.innerHTML = u[1] + s.replace(Qt, "<$1></$2>") + u[2], r = u[0]; r--;) a = a.lastChild;
                if (!ut.support.leadingWhitespace && Gt.test(s) && f.push(t.createTextNode(Gt.exec(s)[0])), !ut.support.tbody)
                    for (s = "table" !== l || Jt.test(s) ? "<table>" !== u[1] || Jt.test(s) ? 0 : a : a.firstChild, r = s && s.childNodes.length; r--;) ut.nodeName(c = s.childNodes[r], "tbody") && !c.childNodes.length && s.removeChild(c);
                for (ut.merge(f, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
                a = d.lastChild
            } else f.push(t.createTextNode(s));
            for (a && d.removeChild(a), ut.support.appendChecked || ut.grep(w(f, "input"), _), g = 0; s = f[g++];)
                if ((!n || -1 === ut.inArray(s, n)) && (o = ut.contains(s.ownerDocument, s), a = w(d.appendChild(s), "script"), o && v(a), i))
                    for (r = 0; s = a[r++];) ni.test(s.type || "") && i.push(s);
            return a = null, d
        },
        cleanData: function (e, t) {
            for (var i, n, r, s, o = 0, a = ut.expando, l = ut.cache, c = ut.support.deleteExpando, u = ut.event.special; null != (i = e[o]); o++)
                if ((t || ut.acceptData(i)) && (r = i[a], s = r && l[r])) {
                    if (s.events)
                        for (n in s.events) u[n] ? ut.event.remove(i, n) : ut.removeEvent(i, n, s.handle);
                    l[r] && (delete l[r], c ? delete i[a] : typeof i.removeAttribute !== X ? i.removeAttribute(a) : i[a] = null, tt.push(r))
                }
        },
        _evalUrl: function (e) {
            return ut.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }
    }), ut.fn.extend({
        wrapAll: function (e) {
            if (ut.isFunction(e)) return this.each(function (t) {
                ut(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = ut(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function (e) {
            return this.each(ut.isFunction(e) ? function (t) {
                ut(this).wrapInner(e.call(this, t))
            } : function () {
                var t = ut(this),
                    i = t.contents();
                i.length ? i.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = ut.isFunction(e);
            return this.each(function (i) {
                ut(this).wrapAll(t ? e.call(this, i) : e)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                ut.nodeName(this, "body") || ut(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var ci, ui, hi, di = /alpha\([^)]*\)/i,
        pi = /opacity\s*=\s*([^)]*)/,
        fi = /^(top|right|bottom|left)$/,
        gi = /^(none|table(?!-c[ea]).+)/,
        mi = /^margin/,
        vi = RegExp("^(" + ht + ")(.*)$", "i"),
        yi = RegExp("^(" + ht + ")(?!px)[a-z%]+$", "i"),
        bi = RegExp("^([+-])=(" + ht + ")", "i"),
        wi = {
            BODY: "block"
        },
        _i = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        xi = {
            letterSpacing: 0,
            fontWeight: 400
        },
        ki = ["Top", "Right", "Bottom", "Left"],
        Ti = ["Webkit", "O", "Moz", "ms"];
    ut.fn.extend({
        css: function (e, i) {
            return ut.access(this, function (e, i, n) {
                var r, s, o = {},
                    a = 0;
                if (ut.isArray(i)) {
                    for (s = ui(e), r = i.length; r > a; a++) o[i[a]] = ut.css(e, i[a], !1, s);
                    return o
                }
                return n !== t ? ut.style(e, i, n) : ut.css(e, i)
            }, e, i, arguments.length > 1)
        },
        show: function () {
            return T(this, !0)
        },
        hide: function () {
            return T(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                k(this) ? ut(this).show() : ut(this).hide()
            })
        }
    }), ut.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var i = hi(e, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
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
            "float": ut.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (e, i, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var s, o, a, l = ut.camelCase(i),
                    c = e.style;
                if (i = ut.cssProps[l] || (ut.cssProps[l] = x(c, l)), a = ut.cssHooks[i] || ut.cssHooks[l], n === t) return a && "get" in a && (s = a.get(e, !1, r)) !== t ? s : c[i];
                if (o = typeof n, "string" === o && (s = bi.exec(n)) && (n = (s[1] + 1) * s[2] + parseFloat(ut.css(e, i)), o = "number"), !(null == n || "number" === o && isNaN(n) || ("number" !== o || ut.cssNumber[l] || (n += "px"), ut.support.clearCloneStyle || "" !== n || 0 !== i.indexOf("background") || (c[i] = "inherit"), a && "set" in a && (n = a.set(e, n, r)) === t))) try {
                    c[i] = n
                } catch (u) {}
            }
        },
        css: function (e, i, n, r) {
            var s, o, a, l = ut.camelCase(i);
            return i = ut.cssProps[l] || (ut.cssProps[l] = x(e.style, l)), a = ut.cssHooks[i] || ut.cssHooks[l], a && "get" in a && (o = a.get(e, !0, n)), o === t && (o = hi(e, i, r)), "normal" === o && i in xi && (o = xi[i]), "" === n || n ? (s = parseFloat(o), n === !0 || ut.isNumeric(s) ? s || 0 : o) : o
        }
    }), e.getComputedStyle ? (ui = function (t) {
        return e.getComputedStyle(t, null)
    }, hi = function (e, i, n) {
        var r, s, o, a = n || ui(e),
            l = a ? a.getPropertyValue(i) || a[i] : t,
            c = e.style;
        return a && ("" !== l || ut.contains(e.ownerDocument, e) || (l = ut.style(e, i)), yi.test(l) && mi.test(i) && (r = c.width, s = c.minWidth, o = c.maxWidth, c.minWidth = c.maxWidth = c.width = l, l = a.width, c.width = r, c.minWidth = s, c.maxWidth = o)), l
    }) : Q.documentElement.currentStyle && (ui = function (e) {
        return e.currentStyle
    }, hi = function (e, i, n) {
        var r, s, o, a = n || ui(e),
            l = a ? a[i] : t,
            c = e.style;
        return null == l && c && c[i] && (l = c[i]), yi.test(l) && !fi.test(i) && (r = c.left, s = e.runtimeStyle, o = s && s.left, o && (s.left = e.currentStyle.left), c.left = "fontSize" === i ? "1em" : l, l = c.pixelLeft + "px", c.left = r, o && (s.left = o)), "" === l ? "auto" : l
    }), ut.each(["height", "width"], function (e, i) {
        ut.cssHooks[i] = {
            get: function (e, n, r) {
                return n ? 0 === e.offsetWidth && gi.test(ut.css(e, "display")) ? ut.swap(e, _i, function () {
                    return $(e, i, r)
                }) : $(e, i, r) : t
            },
            set: function (e, t, n) {
                var r = n && ui(e);
                return C(e, t, n ? S(e, i, n, ut.support.boxSizing && "border-box" === ut.css(e, "boxSizing", !1, r), r) : 0)
            }
        }
    }), ut.support.opacity || (ut.cssHooks.opacity = {
        get: function (e, t) {
            return pi.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function (e, t) {
            var i = e.style,
                n = e.currentStyle,
                r = ut.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                s = n && n.filter || i.filter || "";
            i.zoom = 1, (t >= 1 || "" === t) && "" === ut.trim(s.replace(di, "")) && i.removeAttribute && (i.removeAttribute("filter"), "" === t || n && !n.filter) || (i.filter = di.test(s) ? s.replace(di, r) : s + " " + r)
        }
    }), ut(function () {
        ut.support.reliableMarginRight || (ut.cssHooks.marginRight = {
            get: function (e, i) {
                return i ? ut.swap(e, {
                    display: "inline-block"
                }, hi, [e, "marginRight"]) : t
            }
        }), !ut.support.pixelPosition && ut.fn.position && ut.each(["top", "left"], function (e, i) {
            ut.cssHooks[i] = {
                get: function (e, n) {
                    return n ? (n = hi(e, i), yi.test(n) ? ut(e).position()[i] + "px" : n) : t
                }
            }
        })
    }), ut.expr && ut.expr.filters && (ut.expr.filters.hidden = function (e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !ut.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || ut.css(e, "display"))
    }, ut.expr.filters.visible = function (e) {
        return !ut.expr.filters.hidden(e)
    }), ut.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        ut.cssHooks[e + t] = {
            expand: function (i) {
                for (var n = 0, r = {}, s = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) r[e + ki[n] + t] = s[n] || s[n - 2] || s[0];
                return r
            }
        }, mi.test(e) || (ut.cssHooks[e + t].set = C)
    });
    var Ci = /%20/g,
        Si = /\[\]$/,
        $i = /\r?\n/g,
        Di = /^(?:submit|button|image|reset|file)$/i,
        Hi = /^(?:input|select|textarea|keygen)/i;
    ut.fn.extend({
        serialize: function () {
            return ut.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = ut.prop(this, "elements");
                return e ? ut.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !ut(this).is(":disabled") && Hi.test(this.nodeName) && !Di.test(e) && (this.checked || !ti.test(e))
            }).map(function (e, t) {
                var i = ut(this).val();
                return null == i ? null : ut.isArray(i) ? ut.map(i, function (e) {
                    return {
                        name: t.name,
                        value: e.replace($i, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: i.replace($i, "\r\n")
                }
            }).get()
        }
    }), ut.param = function (e, i) {
        var n, r = [],
            s = function (e, t) {
                t = ut.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (i === t && (i = ut.ajaxSettings && ut.ajaxSettings.traditional), ut.isArray(e) || e.jquery && !ut.isPlainObject(e)) ut.each(e, function () {
            s(this.name, this.value)
        });
        else
            for (n in e) E(n, e[n], i, s);
        return r.join("&").replace(Ci, "+")
    }, ut.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        ut.fn[t] = function (e, i) {
            return arguments.length > 0 ? this.on(t, null, e, i) : this.trigger(t)
        }
    }), ut.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function (e, t, i) {
            return this.on(e, null, t, i)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, i, n) {
            return this.on(t, e, i, n)
        },
        undelegate: function (e, t, i) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
        }
    });
    var Ei, Pi, Ai = ut.now(),
        Mi = /\?/,
        Ii = /#.*$/,
        Oi = /([?&])_=[^&]*/,
        Ni = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Vi = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Bi = /^(?:GET|HEAD)$/,
        Li = /^\/\//,
        ji = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        Fi = ut.fn.load,
        Ri = {},
        zi = {},
        qi = "*/".concat("*");
    try {
        Pi = G.href
    } catch (Ui) {
        Pi = Q.createElement("a"), Pi.href = "", Pi = Pi.href
    }
    Ei = ji.exec(Pi.toLowerCase()) || [], ut.fn.load = function (e, i, n) {
        if ("string" != typeof e && Fi) return Fi.apply(this, arguments);
        var r, s, o, a = this,
            l = e.indexOf(" ");
        return l >= 0 && (r = e.slice(l, e.length), e = e.slice(0, l)), ut.isFunction(i) ? (n = i, i = t) : i && "object" == typeof i && (o = "POST"), a.length > 0 && ut.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: i
        }).done(function (e) {
            s = arguments, a.html(r ? ut("<div>").append(ut.parseHTML(e)).find(r) : e)
        }).complete(n && function (e, t) {
            a.each(n, s || [e.responseText, t, e])
        }), this
    }, ut.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        ut.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), ut.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Pi,
            type: "GET",
            isLocal: Vi.test(Ei[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": qi,
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
                "text json": ut.parseJSON,
                "text xml": ut.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? M(M(e, ut.ajaxSettings), t) : M(ut.ajaxSettings, e)
        },
        ajaxPrefilter: P(Ri),
        ajaxTransport: P(zi),
        ajax: function (e, i) {
            function n(e, i, n, r) {
                var s, h, y, b, _, k = i;
                2 !== w && (w = 2, l && clearTimeout(l), u = t, a = r || "", x.readyState = e > 0 ? 4 : 0, s = e >= 200 && 300 > e || 304 === e, n && (b = I(d, x, n)), b = O(d, b, x, s), s ? (d.ifModified && (_ = x.getResponseHeader("Last-Modified"), _ && (ut.lastModified[o] = _), _ = x.getResponseHeader("etag"), _ && (ut.etag[o] = _)), 204 === e || "HEAD" === d.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = b.state, h = b.data, y = b.error, s = !y)) : (y = k, (e || !k) && (k = "error", 0 > e && (e = 0))), x.status = e, x.statusText = (i || k) + "", s ? g.resolveWith(p, [h, k, x]) : g.rejectWith(p, [x, k, y]), x.statusCode(v), v = t, c && f.trigger(s ? "ajaxSuccess" : "ajaxError", [x, d, s ? h : y]), m.fireWith(p, [x, k]), c && (f.trigger("ajaxComplete", [x, d]), --ut.active || ut.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (i = e, e = t), i = i || {};
            var r, s, o, a, l, c, u, h, d = ut.ajaxSetup({}, i),
                p = d.context || d,
                f = d.context && (p.nodeType || p.jquery) ? ut(p) : ut.event,
                g = ut.Deferred(),
                m = ut.Callbacks("once memory"),
                v = d.statusCode || {},
                y = {},
                b = {},
                w = 0,
                _ = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (2 === w) {
                            if (!h)
                                for (h = {}; t = Ni.exec(a);) h[t[1].toLowerCase()] = t[2];
                            t = h[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return 2 === w ? a : null
                    },
                    setRequestHeader: function (e, t) {
                        var i = e.toLowerCase();
                        return w || (e = b[i] = b[i] || e, y[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return w || (d.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (2 > w)
                                for (t in e) v[t] = [v[t], e[t]];
                            else x.always(e[x.status]);
                        return this
                    },
                    abort: function (e) {
                        var t = e || _;
                        return u && u.abort(t), n(0, t), this
                    }
                };
            if (g.promise(x).complete = m.add, x.success = x.done, x.error = x.fail, d.url = ((e || d.url || Pi) + "").replace(Ii, "").replace(Li, Ei[1] + "//"), d.type = i.method || i.type || d.method || d.type, d.dataTypes = ut.trim(d.dataType || "*").toLowerCase().match(dt) || [""], null == d.crossDomain && (r = ji.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] === Ei[1] && r[2] === Ei[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (Ei[3] || ("http:" === Ei[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = ut.param(d.data, d.traditional)), A(Ri, d, i, x), 2 === w) return x;
            c = d.global, c && 0 === ut.active++ && ut.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Bi.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (Mi.test(o) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = Oi.test(o) ? o.replace(Oi, "$1_=" + Ai++) : o + (Mi.test(o) ? "&" : "?") + "_=" + Ai++)), d.ifModified && (ut.lastModified[o] && x.setRequestHeader("If-Modified-Since", ut.lastModified[o]), ut.etag[o] && x.setRequestHeader("If-None-Match", ut.etag[o])), (d.data && d.hasContent && d.contentType !== !1 || i.contentType) && x.setRequestHeader("Content-Type", d.contentType), x.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + qi + "; q=0.01" : "") : d.accepts["*"]);
            for (s in d.headers) x.setRequestHeader(s, d.headers[s]);
            if (d.beforeSend && (d.beforeSend.call(p, x, d) === !1 || 2 === w)) return x.abort();
            _ = "abort";
            for (s in {
                success: 1,
                error: 1,
                complete: 1
            }) x[s](d[s]);
            if (u = A(zi, d, i, x)) {
                x.readyState = 1, c && f.trigger("ajaxSend", [x, d]), d.async && d.timeout > 0 && (l = setTimeout(function () {
                    x.abort("timeout")
                }, d.timeout));
                try {
                    w = 1, u.send(y, n)
                } catch (k) {
                    if (!(2 > w)) throw k;
                    n(-1, k)
                }
            } else n(-1, "No Transport");
            return x
        },
        getJSON: function (e, t, i) {
            return ut.get(e, t, i, "json")
        },
        getScript: function (e, i) {
            return ut.get(e, t, i, "script")
        }
    }), ut.each(["get", "post"], function (e, i) {
        ut[i] = function (e, n, r, s) {
            return ut.isFunction(n) && (s = s || r, r = n, n = t), ut.ajax({
                url: e,
                type: i,
                dataType: s,
                data: n,
                success: r
            })
        }
    }), ut.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function (e) {
                return ut.globalEval(e), e
            }
        }
    }), ut.ajaxPrefilter("script", function (e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), ut.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var i, n = Q.head || ut("head")[0] || Q.documentElement;
            return {
                send: function (t, r) {
                    i = Q.createElement("script"), i.async = !0, e.scriptCharset && (i.charset = e.scriptCharset), i.src = e.url, i.onload = i.onreadystatechange = function (e, t) {
                        (t || !i.readyState || /loaded|complete/.test(i.readyState)) && (i.onload = i.onreadystatechange = null, i.parentNode && i.parentNode.removeChild(i), i = null, t || r(200, "success"))
                    }, n.insertBefore(i, n.firstChild)
                },
                abort: function () {
                    i && i.onload(t, !0)
                }
            }
        }
    });
    var Wi = [],
        Yi = /(=)\?(?=&|$)|\?\?/;
    ut.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Wi.pop() || ut.expando + "_" + Ai++;
            return this[e] = !0, e
        }
    }), ut.ajaxPrefilter("json jsonp", function (i, n, r) {
        var s, o, a, l = i.jsonp !== !1 && (Yi.test(i.url) ? "url" : "string" == typeof i.data && !(i.contentType || "").indexOf("application/x-www-form-urlencoded") && Yi.test(i.data) && "data");
        return l || "jsonp" === i.dataTypes[0] ? (s = i.jsonpCallback = ut.isFunction(i.jsonpCallback) ? i.jsonpCallback() : i.jsonpCallback, l ? i[l] = i[l].replace(Yi, "$1" + s) : i.jsonp !== !1 && (i.url += (Mi.test(i.url) ? "&" : "?") + i.jsonp + "=" + s), i.converters["script json"] = function () {
            return a || ut.error(s + " was not called"), a[0]
        }, i.dataTypes[0] = "json", o = e[s], e[s] = function () {
            a = arguments
        }, r.always(function () {
            e[s] = o, i[s] && (i.jsonpCallback = n.jsonpCallback, Wi.push(s)), a && ut.isFunction(o) && o(a[0]), a = o = t
        }), "script") : t
    });
    var Xi, Gi, Qi = 0,
        Ki = e.ActiveXObject && function () {
            var e;
            for (e in Xi) Xi[e](t, !0)
        };
    ut.ajaxSettings.xhr = e.ActiveXObject ? function () {
        return !this.isLocal && N() || V()
    } : N, Gi = ut.ajaxSettings.xhr(), ut.support.cors = !!Gi && "withCredentials" in Gi, Gi = ut.support.ajax = !!Gi, Gi && ut.ajaxTransport(function (i) {
        if (!i.crossDomain || ut.support.cors) {
            var n;
            return {
                send: function (r, s) {
                    var o, a, l = i.xhr();
                    if (i.username ? l.open(i.type, i.url, i.async, i.username, i.password) : l.open(i.type, i.url, i.async), i.xhrFields)
                        for (a in i.xhrFields) l[a] = i.xhrFields[a];
                    i.mimeType && l.overrideMimeType && l.overrideMimeType(i.mimeType), i.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (a in r) l.setRequestHeader(a, r[a])
                    } catch (c) {}
                    l.send(i.hasContent && i.data || null), n = function (e, r) {
                        var a, c, u, h;
                        try {
                            if (n && (r || 4 === l.readyState))
                                if (n = t, o && (l.onreadystatechange = ut.noop, Ki && delete Xi[o]), r) 4 !== l.readyState && l.abort();
                                else {
                                    h = {}, a = l.status, c = l.getAllResponseHeaders(), "string" == typeof l.responseText && (h.text = l.responseText);
                                    try {
                                        u = l.statusText
                                    } catch (d) {
                                        u = ""
                                    }
                                    a || !i.isLocal || i.crossDomain ? 1223 === a && (a = 204) : a = h.text ? 200 : 404
                                }
                        } catch (p) {
                            r || s(-1, p)
                        }
                        h && s(a, u, h, c)
                    }, i.async ? 4 === l.readyState ? setTimeout(n) : (o = ++Qi, Ki && (Xi || (Xi = {}, ut(e).unload(Ki)), Xi[o] = n), l.onreadystatechange = n) : n()
                },
                abort: function () {
                    n && n(t, !0)
                }
            }
        }
    });
    var Ji, Zi, en = /^(?:toggle|show|hide)$/,
        tn = RegExp("^(?:([+-])=|)(" + ht + ")([a-z%]*)$", "i"),
        nn = /queueHooks$/,
        rn = [R],
        sn = {
            "*": [
                function (e, t) {
                    var i = this.createTween(e, t),
                        n = i.cur(),
                        r = tn.exec(t),
                        s = r && r[3] || (ut.cssNumber[e] ? "" : "px"),
                        o = (ut.cssNumber[e] || "px" !== s && +n) && tn.exec(ut.css(i.elem, e)),
                        a = 1,
                        l = 20;
                    if (o && o[3] !== s) {
                        s = s || o[3], r = r || [], o = +n || 1;
                        do a = a || ".5", o /= a, ut.style(i.elem, e, o + s); while (a !== (a = i.cur() / n) && 1 !== a && --l)
                    }
                    return r && (o = i.start = +o || +n || 0, i.unit = s, i.end = r[1] ? o + (r[1] + 1) * r[2] : +r[2]), i
                }
            ]
        };
    ut.Animation = ut.extend(j, {
        tweener: function (e, t) {
            ut.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var i, n = 0, r = e.length; r > n; n++) i = e[n], sn[i] = sn[i] || [], sn[i].unshift(t)
        },
        prefilter: function (e, t) {
            t ? rn.unshift(e) : rn.push(e)
        }
    }), ut.Tween = z, z.prototype = {
        constructor: z,
        init: function (e, t, i, n, r, s) {
            this.elem = e, this.prop = i, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = s || (ut.cssNumber[i] ? "" : "px")
        },
        cur: function () {
            var e = z.propHooks[this.prop];
            return e && e.get ? e.get(this) : z.propHooks._default.get(this)
        },
        run: function (e) {
            var t, i = z.propHooks[this.prop];
            return this.pos = t = this.options.duration ? ut.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : z.propHooks._default.set(this), this
        }
    }, z.prototype.init.prototype = z.prototype, z.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ut.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function (e) {
                ut.fx.step[e.prop] ? ut.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ut.cssProps[e.prop]] || ut.cssHooks[e.prop]) ? ut.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, z.propHooks.scrollTop = z.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, ut.each(["toggle", "show", "hide"], function (e, t) {
        var i = ut.fn[t];
        ut.fn[t] = function (e, n, r) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(q(t, !0), e, n, r)
        }
    }), ut.fn.extend({
        fadeTo: function (e, t, i, n) {
            return this.filter(k).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, i, n)
        },
        animate: function (e, t, i, n) {
            var r = ut.isEmptyObject(e),
                s = ut.speed(t, i, n),
                o = function () {
                    var t = j(this, ut.extend({}, e), s);
                    (r || ut._data(this, "finish")) && t.stop(!0)
                };
            return o.finish = o, r || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
        },
        stop: function (e, i, n) {
            var r = function (e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = i, i = e, e = t), i && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                var t = !0,
                    i = null != e && e + "queueHooks",
                    s = ut.timers,
                    o = ut._data(this);
                if (i) o[i] && o[i].stop && r(o[i]);
                else
                    for (i in o) o[i] && o[i].stop && nn.test(i) && r(o[i]);
                for (i = s.length; i--;) s[i].elem !== this || null != e && s[i].queue !== e || (s[i].anim.stop(n), t = !1, s.splice(i, 1));
                (t || !n) && ut.dequeue(this, e)
            })
        },
        finish: function (e) {
            return e !== !1 && (e = e || "fx"), this.each(function () {
                var t, i = ut._data(this),
                    n = i[e + "queue"],
                    r = i[e + "queueHooks"],
                    s = ut.timers,
                    o = n ? n.length : 0;
                for (i.finish = !0, ut.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                for (t = 0; o > t; t++) n[t] && n[t].finish && n[t].finish.call(this);
                delete i.finish
            })
        }
    }), ut.each({
        slideDown: q("show"),
        slideUp: q("hide"),
        slideToggle: q("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (e, t) {
        ut.fn[e] = function (e, i, n) {
            return this.animate(t, e, i, n)
        }
    }), ut.speed = function (e, t, i) {
        var n = e && "object" == typeof e ? ut.extend({}, e) : {
            complete: i || !i && t || ut.isFunction(e) && e,
            duration: e,
            easing: i && t || t && !ut.isFunction(t) && t
        };
        return n.duration = ut.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in ut.fx.speeds ? ut.fx.speeds[n.duration] : ut.fx.speeds._default, (null == n.queue || n.queue === !0) && (n.queue = "fx"), n.old = n.complete, n.complete = function () {
            ut.isFunction(n.old) && n.old.call(this), n.queue && ut.dequeue(this, n.queue)
        }, n
    }, ut.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, ut.timers = [], ut.fx = z.prototype.init, ut.fx.tick = function () {
        var e, i = ut.timers,
            n = 0;
        for (Ji = ut.now(); i.length > n; n++) e = i[n], e() || i[n] !== e || i.splice(n--, 1);
        i.length || ut.fx.stop(), Ji = t
    }, ut.fx.timer = function (e) {
        e() && ut.timers.push(e) && ut.fx.start()
    }, ut.fx.interval = 13, ut.fx.start = function () {
        Zi || (Zi = setInterval(ut.fx.tick, ut.fx.interval))
    }, ut.fx.stop = function () {
        clearInterval(Zi), Zi = null
    }, ut.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, ut.fx.step = {}, ut.expr && ut.expr.filters && (ut.expr.filters.animated = function (e) {
        return ut.grep(ut.timers, function (t) {
            return e === t.elem
        }).length
    }), ut.fn.offset = function (e) {
        if (arguments.length) return e === t ? this : this.each(function (t) {
            ut.offset.setOffset(this, e, t)
        });
        var i, n, r = {
                top: 0,
                left: 0
            },
            s = this[0],
            o = s && s.ownerDocument;
        return o ? (i = o.documentElement, ut.contains(i, s) ? (typeof s.getBoundingClientRect !== X && (r = s.getBoundingClientRect()), n = U(o), {
            top: r.top + (n.pageYOffset || i.scrollTop) - (i.clientTop || 0),
            left: r.left + (n.pageXOffset || i.scrollLeft) - (i.clientLeft || 0)
        }) : r) : void 0
    }, ut.offset = {
        setOffset: function (e, t, i) {
            var n = ut.css(e, "position");
            "static" === n && (e.style.position = "relative");
            var r, s, o = ut(e),
                a = o.offset(),
                l = ut.css(e, "top"),
                c = ut.css(e, "left"),
                u = ("absolute" === n || "fixed" === n) && ut.inArray("auto", [l, c]) > -1,
                h = {},
                d = {};
            u ? (d = o.position(), r = d.top, s = d.left) : (r = parseFloat(l) || 0, s = parseFloat(c) || 0), ut.isFunction(t) && (t = t.call(e, i, a)), null != t.top && (h.top = t.top - a.top + r), null != t.left && (h.left = t.left - a.left + s), "using" in t ? t.using.call(e, h) : o.css(h)
        }
    }, ut.fn.extend({
        position: function () {
            if (this[0]) {
                var e, t, i = {
                        top: 0,
                        left: 0
                    },
                    n = this[0];
                return "fixed" === ut.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ut.nodeName(e[0], "html") || (i = e.offset()), i.top += ut.css(e[0], "borderTopWidth", !0), i.left += ut.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - i.top - ut.css(n, "marginTop", !0),
                    left: t.left - i.left - ut.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent || K; e && !ut.nodeName(e, "html") && "static" === ut.css(e, "position");) e = e.offsetParent;
                return e || K
            })
        }
    }), ut.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, i) {
        var n = /Y/.test(i);
        ut.fn[e] = function (r) {
            return ut.access(this, function (e, r, s) {
                var o = U(e);
                return s === t ? o ? i in o ? o[i] : o.document.documentElement[r] : e[r] : (o ? o.scrollTo(n ? ut(o).scrollLeft() : s, n ? s : ut(o).scrollTop()) : e[r] = s, t)
            }, e, r, arguments.length, null)
        }
    }), ut.each({
        Height: "height",
        Width: "width"
    }, function (e, i) {
        ut.each({
            padding: "inner" + e,
            content: i,
            "": "outer" + e
        }, function (n, r) {
            ut.fn[r] = function (r, s) {
                var o = arguments.length && (n || "boolean" != typeof r),
                    a = n || (r === !0 || s === !0 ? "margin" : "border");
                return ut.access(this, function (i, n, r) {
                    var s;
                    return ut.isWindow(i) ? i.document.documentElement["client" + e] : 9 === i.nodeType ? (s = i.documentElement, Math.max(i.body["scroll" + e], s["scroll" + e], i.body["offset" + e], s["offset" + e], s["client" + e])) : r === t ? ut.css(i, n, a) : ut.style(i, n, r, a)
                }, i, o ? r : t, o, null)
            }
        })
    }), ut.fn.size = function () {
        return this.length
    }, ut.fn.andSelf = ut.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = ut : (e.jQuery = e.$ = ut, "function" == typeof define && define.amd && define("jquery", [], function () {
        return ut
    }))
}(window), jQuery.cookie = function (e, t, i) {
    if ("undefined" == typeof t) {
        if (t = null, document.cookie && "" != document.cookie)
            for (i = document.cookie.split(";"), n = 0; n < i.length; n++)
                if (r = jQuery.trim(i[n]), r.substring(0, e.length + 1) == e + "=") {
                    t = decodeURIComponent(r.substring(e.length + 1));
                    break
                }
        return t
    }
    i = i || {}, null === t && (t = "", i.expires = -1);
    var n = "";
    i.expires && ("number" == typeof i.expires || i.expires.toUTCString) && ("number" == typeof i.expires ? (n = new Date, n.setTime(n.getTime() + 24 * i.expires * 60 * 60 * 1e3)) : n = i.expires, n = "; expires=" + n.toUTCString());
    var r = i.path ? "; path=" + i.path : "",
        s = i.domain ? "; domain=" + i.domain : "";
    i = i.secure ? "; secure" : "", document.cookie = [e, "=", encodeURIComponent(t), n, r, s, i].join("")
}, $.ajaxSetup({
    headers: {
        "X-CSRF-Token": $('meta[name="csrf-token"]').attr("content")
    }
}), function () {
    var e = this,
        t = e._,
        i = {},
        n = Array.prototype,
        r = Object.prototype,
        s = Function.prototype,
        o = n.push,
        a = n.slice,
        l = n.concat,
        c = r.toString,
        u = r.hasOwnProperty,
        h = n.forEach,
        d = n.map,
        p = n.reduce,
        f = n.reduceRight,
        g = n.filter,
        m = n.every,
        v = n.some,
        y = n.indexOf,
        b = n.lastIndexOf,
        w = Array.isArray,
        _ = Object.keys,
        x = s.bind,
        k = function (e) {
            return e instanceof k ? e : this instanceof k ? void(this._wrapped = e) : new k(e)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = k), exports._ = k) : e._ = k, k.VERSION = "1.5.2";
    var T = k.each = k.forEach = function (e, t, n) {
        if (null != e)
            if (h && e.forEach === h) e.forEach(t, n);
            else if (e.length === +e.length) {
            for (var r = 0, s = e.length; s > r; r++)
                if (t.call(n, e[r], r, e) === i) return
        } else
            for (var o = k.keys(e), r = 0, s = o.length; s > r; r++)
                if (t.call(n, e[o[r]], o[r], e) === i) return
    };
    k.map = k.collect = function (e, t, i) {
        var n = [];
        return null == e ? n : d && e.map === d ? e.map(t, i) : (T(e, function (e, r, s) {
            n.push(t.call(i, e, r, s))
        }), n)
    };
    var C = "Reduce of empty array with no initial value";
    k.reduce = k.foldl = k.inject = function (e, t, i, n) {
        var r = arguments.length > 2;
        if (null == e && (e = []), p && e.reduce === p) return n && (t = k.bind(t, n)), r ? e.reduce(t, i) : e.reduce(t);
        if (T(e, function (e, s, o) {
            r ? i = t.call(n, i, e, s, o) : (i = e, r = !0)
        }), !r) throw new TypeError(C);
        return i
    }, k.reduceRight = k.foldr = function (e, t, i, n) {
        var r = arguments.length > 2;
        if (null == e && (e = []), f && e.reduceRight === f) return n && (t = k.bind(t, n)), r ? e.reduceRight(t, i) : e.reduceRight(t);
        var s = e.length;
        if (s !== +s) {
            var o = k.keys(e);
            s = o.length
        }
        if (T(e, function (a, l, c) {
            l = o ? o[--s] : --s, r ? i = t.call(n, i, e[l], l, c) : (i = e[l], r = !0)
        }), !r) throw new TypeError(C);
        return i
    }, k.find = k.detect = function (e, t, i) {
        var n;
        return S(e, function (e, r, s) {
            return t.call(i, e, r, s) ? (n = e, !0) : void 0
        }), n
    }, k.filter = k.select = function (e, t, i) {
        var n = [];
        return null == e ? n : g && e.filter === g ? e.filter(t, i) : (T(e, function (e, r, s) {
            t.call(i, e, r, s) && n.push(e)
        }), n)
    }, k.reject = function (e, t, i) {
        return k.filter(e, function (e, n, r) {
            return !t.call(i, e, n, r)
        }, i)
    }, k.every = k.all = function (e, t, n) {
        t || (t = k.identity);
        var r = !0;
        return null == e ? r : m && e.every === m ? e.every(t, n) : (T(e, function (e, s, o) {
            return (r = r && t.call(n, e, s, o)) ? void 0 : i
        }), !!r)
    };
    var S = k.some = k.any = function (e, t, n) {
        t || (t = k.identity);
        var r = !1;
        return null == e ? r : v && e.some === v ? e.some(t, n) : (T(e, function (e, s, o) {
            return r || (r = t.call(n, e, s, o)) ? i : void 0
        }), !!r)
    };
    k.contains = k.include = function (e, t) {
        return null == e ? !1 : y && e.indexOf === y ? -1 != e.indexOf(t) : S(e, function (e) {
            return e === t
        })
    }, k.invoke = function (e, t) {
        var i = a.call(arguments, 2),
            n = k.isFunction(t);
        return k.map(e, function (e) {
            return (n ? t : e[t]).apply(e, i)
        })
    }, k.pluck = function (e, t) {
        return k.map(e, function (e) {
            return e[t]
        })
    }, k.where = function (e, t, i) {
        return k.isEmpty(t) ? i ? void 0 : [] : k[i ? "find" : "filter"](e, function (e) {
            for (var i in t)
                if (t[i] !== e[i]) return !1;
            return !0
        })
    }, k.findWhere = function (e, t) {
        return k.where(e, t, !0)
    }, k.max = function (e, t, i) {
        if (!t && k.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.max.apply(Math, e);
        if (!t && k.isEmpty(e)) return -1 / 0;
        var n = {
            computed: -1 / 0,
            value: -1 / 0
        };
        return T(e, function (e, r, s) {
            var o = t ? t.call(i, e, r, s) : e;
            o > n.computed && (n = {
                value: e,
                computed: o
            })
        }), n.value
    }, k.min = function (e, t, i) {
        if (!t && k.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.min.apply(Math, e);
        if (!t && k.isEmpty(e)) return 1 / 0;
        var n = {
            computed: 1 / 0,
            value: 1 / 0
        };
        return T(e, function (e, r, s) {
            var o = t ? t.call(i, e, r, s) : e;
            o < n.computed && (n = {
                value: e,
                computed: o
            })
        }), n.value
    }, k.shuffle = function (e) {
        var t, i = 0,
            n = [];
        return T(e, function (e) {
            t = k.random(i++), n[i - 1] = n[t], n[t] = e
        }), n
    }, k.sample = function (e, t, i) {
        return arguments.length < 2 || i ? e[k.random(e.length - 1)] : k.shuffle(e).slice(0, Math.max(0, t))
    };
    var $ = function (e) {
        return k.isFunction(e) ? e : function (t) {
            return t[e]
        }
    };
    k.sortBy = function (e, t, i) {
        var n = $(t);
        return k.pluck(k.map(e, function (e, t, r) {
            return {
                value: e,
                index: t,
                criteria: n.call(i, e, t, r)
            }
        }).sort(function (e, t) {
            var i = e.criteria,
                n = t.criteria;
            if (i !== n) {
                if (i > n || void 0 === i) return 1;
                if (n > i || void 0 === n) return -1
            }
            return e.index - t.index
        }), "value")
    };
    var D = function (e) {
        return function (t, i, n) {
            var r = {},
                s = null == i ? k.identity : $(i);
            return T(t, function (i, o) {
                var a = s.call(n, i, o, t);
                e(r, a, i)
            }), r
        }
    };
    k.groupBy = D(function (e, t, i) {
        (k.has(e, t) ? e[t] : e[t] = []).push(i)
    }), k.indexBy = D(function (e, t, i) {
        e[t] = i
    }), k.countBy = D(function (e, t) {
        k.has(e, t) ? e[t]++ : e[t] = 1
    }), k.sortedIndex = function (e, t, i, n) {
        i = null == i ? k.identity : $(i);
        for (var r = i.call(n, t), s = 0, o = e.length; o > s;) {
            var a = s + o >>> 1;
            i.call(n, e[a]) < r ? s = a + 1 : o = a
        }
        return s
    }, k.toArray = function (e) {
        return e ? k.isArray(e) ? a.call(e) : e.length === +e.length ? k.map(e, k.identity) : k.values(e) : []
    }, k.size = function (e) {
        return null == e ? 0 : e.length === +e.length ? e.length : k.keys(e).length
    }, k.first = k.head = k.take = function (e, t, i) {
        return null == e ? void 0 : null == t || i ? e[0] : a.call(e, 0, t)
    }, k.initial = function (e, t, i) {
        return a.call(e, 0, e.length - (null == t || i ? 1 : t))
    }, k.last = function (e, t, i) {
        return null == e ? void 0 : null == t || i ? e[e.length - 1] : a.call(e, Math.max(e.length - t, 0))
    }, k.rest = k.tail = k.drop = function (e, t, i) {
        return a.call(e, null == t || i ? 1 : t)
    }, k.compact = function (e) {
        return k.filter(e, k.identity)
    };
    var H = function (e, t, i) {
        return t && k.every(e, k.isArray) ? l.apply(i, e) : (T(e, function (e) {
            k.isArray(e) || k.isArguments(e) ? t ? o.apply(i, e) : H(e, t, i) : i.push(e)
        }), i)
    };
    k.flatten = function (e, t) {
        return H(e, t, [])
    }, k.without = function (e) {
        return k.difference(e, a.call(arguments, 1))
    }, k.uniq = k.unique = function (e, t, i, n) {
        k.isFunction(t) && (n = i, i = t, t = !1);
        var r = i ? k.map(e, i, n) : e,
            s = [],
            o = [];
        return T(r, function (i, n) {
            (t ? n && o[o.length - 1] === i : k.contains(o, i)) || (o.push(i), s.push(e[n]))
        }), s
    }, k.union = function () {
        return k.uniq(k.flatten(arguments, !0))
    }, k.intersection = function (e) {
        var t = a.call(arguments, 1);
        return k.filter(k.uniq(e), function (e) {
            return k.every(t, function (t) {
                return k.indexOf(t, e) >= 0
            })
        })
    }, k.difference = function (e) {
        var t = l.apply(n, a.call(arguments, 1));
        return k.filter(e, function (e) {
            return !k.contains(t, e)
        })
    }, k.zip = function () {
        for (var e = k.max(k.pluck(arguments, "length").concat(0)), t = new Array(e), i = 0; e > i; i++) t[i] = k.pluck(arguments, "" + i);
        return t
    }, k.object = function (e, t) {
        if (null == e) return {};
        for (var i = {}, n = 0, r = e.length; r > n; n++) t ? i[e[n]] = t[n] : i[e[n][0]] = e[n][1];
        return i
    }, k.indexOf = function (e, t, i) {
        if (null == e) return -1;
        var n = 0,
            r = e.length;
        if (i) {
            if ("number" != typeof i) return n = k.sortedIndex(e, t), e[n] === t ? n : -1;
            n = 0 > i ? Math.max(0, r + i) : i
        }
        if (y && e.indexOf === y) return e.indexOf(t, i);
        for (; r > n; n++)
            if (e[n] === t) return n;
        return -1
    }, k.lastIndexOf = function (e, t, i) {
        if (null == e) return -1;
        var n = null != i;
        if (b && e.lastIndexOf === b) return n ? e.lastIndexOf(t, i) : e.lastIndexOf(t);
        for (var r = n ? i : e.length; r--;)
            if (e[r] === t) return r;
        return -1
    }, k.range = function (e, t, i) {
        arguments.length <= 1 && (t = e || 0, e = 0), i = arguments[2] || 1;
        for (var n = Math.max(Math.ceil((t - e) / i), 0), r = 0, s = new Array(n); n > r;) s[r++] = e, e += i;
        return s
    };
    var E = function () {};
    k.bind = function (e, t) {
        var i, n;
        if (x && e.bind === x) return x.apply(e, a.call(arguments, 1));
        if (!k.isFunction(e)) throw new TypeError;
        return i = a.call(arguments, 2), n = function () {
            if (!(this instanceof n)) return e.apply(t, i.concat(a.call(arguments)));
            E.prototype = e.prototype;
            var r = new E;
            E.prototype = null;
            var s = e.apply(r, i.concat(a.call(arguments)));
            return Object(s) === s ? s : r
        }
    }, k.partial = function (e) {
        var t = a.call(arguments, 1);
        return function () {
            return e.apply(this, t.concat(a.call(arguments)))
        }
    }, k.bindAll = function (e) {
        var t = a.call(arguments, 1);
        if (0 === t.length) throw new Error("bindAll must be passed function names");
        return T(t, function (t) {
            e[t] = k.bind(e[t], e)
        }), e
    }, k.memoize = function (e, t) {
        var i = {};
        return t || (t = k.identity),
            function () {
                var n = t.apply(this, arguments);
                return k.has(i, n) ? i[n] : i[n] = e.apply(this, arguments)
            }
    }, k.delay = function (e, t) {
        var i = a.call(arguments, 2);
        return setTimeout(function () {
            return e.apply(null, i)
        }, t)
    }, k.defer = function (e) {
        return k.delay.apply(k, [e, 1].concat(a.call(arguments, 1)))
    }, k.throttle = function (e, t, i) {
        var n, r, s, o = null,
            a = 0;
        i || (i = {});
        var l = function () {
            a = i.leading === !1 ? 0 : new Date, o = null, s = e.apply(n, r)
        };
        return function () {
            var c = new Date;
            a || i.leading !== !1 || (a = c);
            var u = t - (c - a);
            return n = this, r = arguments, 0 >= u ? (clearTimeout(o), o = null, a = c, s = e.apply(n, r)) : o || i.trailing === !1 || (o = setTimeout(l, u)), s
        }
    }, k.debounce = function (e, t, i) {
        var n, r, s, o, a;
        return function () {
            s = this, r = arguments, o = new Date;
            var l = function () {
                    var c = new Date - o;
                    t > c ? n = setTimeout(l, t - c) : (n = null, i || (a = e.apply(s, r)))
                },
                c = i && !n;
            return n || (n = setTimeout(l, t)), c && (a = e.apply(s, r)), a
        }
    }, k.once = function (e) {
        var t, i = !1;
        return function () {
            return i ? t : (i = !0, t = e.apply(this, arguments), e = null, t)
        }
    }, k.wrap = function (e, t) {
        return function () {
            var i = [e];
            return o.apply(i, arguments), t.apply(this, i)
        }
    }, k.compose = function () {
        var e = arguments;
        return function () {
            for (var t = arguments, i = e.length - 1; i >= 0; i--) t = [e[i].apply(this, t)];
            return t[0]
        }
    }, k.after = function (e, t) {
        return function () {
            return --e < 1 ? t.apply(this, arguments) : void 0
        }
    }, k.keys = _ || function (e) {
        if (e !== Object(e)) throw new TypeError("Invalid object");
        var t = [];
        for (var i in e) k.has(e, i) && t.push(i);
        return t
    }, k.values = function (e) {
        for (var t = k.keys(e), i = t.length, n = new Array(i), r = 0; i > r; r++) n[r] = e[t[r]];
        return n
    }, k.pairs = function (e) {
        for (var t = k.keys(e), i = t.length, n = new Array(i), r = 0; i > r; r++) n[r] = [t[r], e[t[r]]];
        return n
    }, k.invert = function (e) {
        for (var t = {}, i = k.keys(e), n = 0, r = i.length; r > n; n++) t[e[i[n]]] = i[n];
        return t
    }, k.functions = k.methods = function (e) {
        var t = [];
        for (var i in e) k.isFunction(e[i]) && t.push(i);
        return t.sort()
    }, k.extend = function (e) {
        return T(a.call(arguments, 1), function (t) {
            if (t)
                for (var i in t) e[i] = t[i]
        }), e
    }, k.pick = function (e) {
        var t = {},
            i = l.apply(n, a.call(arguments, 1));
        return T(i, function (i) {
            i in e && (t[i] = e[i])
        }), t
    }, k.omit = function (e) {
        var t = {},
            i = l.apply(n, a.call(arguments, 1));
        for (var r in e) k.contains(i, r) || (t[r] = e[r]);
        return t
    }, k.defaults = function (e) {
        return T(a.call(arguments, 1), function (t) {
            if (t)
                for (var i in t) void 0 === e[i] && (e[i] = t[i])
        }), e
    }, k.clone = function (e) {
        return k.isObject(e) ? k.isArray(e) ? e.slice() : k.extend({}, e) : e
    }, k.tap = function (e, t) {
        return t(e), e
    };
    var P = function (e, t, i, n) {
        if (e === t) return 0 !== e || 1 / e == 1 / t;
        if (null == e || null == t) return e === t;
        e instanceof k && (e = e._wrapped), t instanceof k && (t = t._wrapped);
        var r = c.call(e);
        if (r != c.call(t)) return !1;
        switch (r) {
        case "[object String]":
            return e == String(t);
        case "[object Number]":
            return e != +e ? t != +t : 0 == e ? 1 / e == 1 / t : e == +t;
        case "[object Date]":
        case "[object Boolean]":
            return +e == +t;
        case "[object RegExp]":
            return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase
        }
        if ("object" != typeof e || "object" != typeof t) return !1;
        for (var s = i.length; s--;)
            if (i[s] == e) return n[s] == t;
        var o = e.constructor,
            a = t.constructor;
        if (o !== a && !(k.isFunction(o) && o instanceof o && k.isFunction(a) && a instanceof a)) return !1;
        i.push(e), n.push(t);
        var l = 0,
            u = !0;
        if ("[object Array]" == r) {
            if (l = e.length, u = l == t.length)
                for (; l-- && (u = P(e[l], t[l], i, n)););
        } else {
            for (var h in e)
                if (k.has(e, h) && (l++, !(u = k.has(t, h) && P(e[h], t[h], i, n)))) break;
            if (u) {
                for (h in t)
                    if (k.has(t, h) && !l--) break;
                u = !l
            }
        }
        return i.pop(), n.pop(), u
    };
    k.isEqual = function (e, t) {
        return P(e, t, [], [])
    }, k.isEmpty = function (e) {
        if (null == e) return !0;
        if (k.isArray(e) || k.isString(e)) return 0 === e.length;
        for (var t in e)
            if (k.has(e, t)) return !1;
        return !0
    }, k.isElement = function (e) {
        return !(!e || 1 !== e.nodeType)
    }, k.isArray = w || function (e) {
        return "[object Array]" == c.call(e)
    }, k.isObject = function (e) {
        return e === Object(e)
    }, T(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function (e) {
        k["is" + e] = function (t) {
            return c.call(t) == "[object " + e + "]"
        }
    }), k.isArguments(arguments) || (k.isArguments = function (e) {
        return !(!e || !k.has(e, "callee"))
    }), "function" != typeof / . / && (k.isFunction = function (e) {
        return "function" == typeof e
    }), k.isFinite = function (e) {
        return isFinite(e) && !isNaN(parseFloat(e))
    }, k.isNaN = function (e) {
        return k.isNumber(e) && e != +e
    }, k.isBoolean = function (e) {
        return e === !0 || e === !1 || "[object Boolean]" == c.call(e)
    }, k.isNull = function (e) {
        return null === e
    }, k.isUndefined = function (e) {
        return void 0 === e
    }, k.has = function (e, t) {
        return u.call(e, t)
    }, k.noConflict = function () {
        return e._ = t, this
    }, k.identity = function (e) {
        return e
    }, k.times = function (e, t, i) {
        for (var n = Array(Math.max(0, e)), r = 0; e > r; r++) n[r] = t.call(i, r);
        return n
    }, k.random = function (e, t) {
        return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
    };
    var A = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;"
        }
    };
    A.unescape = k.invert(A.escape);
    var M = {
        escape: new RegExp("[" + k.keys(A.escape).join("") + "]", "g"),
        unescape: new RegExp("(" + k.keys(A.unescape).join("|") + ")", "g")
    };
    k.each(["escape", "unescape"], function (e) {
        k[e] = function (t) {
            return null == t ? "" : ("" + t).replace(M[e], function (t) {
                return A[e][t]
            })
        }
    }), k.result = function (e, t) {
        if (null == e) return void 0;
        var i = e[t];
        return k.isFunction(i) ? i.call(e) : i
    }, k.mixin = function (e) {
        T(k.functions(e), function (t) {
            var i = k[t] = e[t];
            k.prototype[t] = function () {
                var e = [this._wrapped];
                return o.apply(e, arguments), B.call(this, i.apply(k, e))
            }
        })
    };
    var I = 0;
    k.uniqueId = function (e) {
        var t = ++I + "";
        return e ? e + t : t
    }, k.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var O = /(.)^/,
        N = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "	": "t",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        V = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    k.template = function (e, t, i) {
        var n;
        i = k.defaults({}, i, k.templateSettings);
        var r = new RegExp([(i.escape || O).source, (i.interpolate || O).source, (i.evaluate || O).source].join("|") + "|$", "g"),
            s = 0,
            o = "__p+='";
        e.replace(r, function (t, i, n, r, a) {
            return o += e.slice(s, a).replace(V, function (e) {
                return "\\" + N[e]
            }), i && (o += "'+\n((__t=(" + i + "))==null?'':_.escape(__t))+\n'"), n && (o += "'+\n((__t=(" + n + "))==null?'':__t)+\n'"), r && (o += "';\n" + r + "\n__p+='"), s = a + t.length, t
        }), o += "';\n", i.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
        try {
            n = new Function(i.variable || "obj", "_", o)
        } catch (a) {
            throw a.source = o, a
        }
        if (t) return n(t, k);
        var l = function (e) {
            return n.call(this, e, k)
        };
        return l.source = "function(" + (i.variable || "obj") + "){\n" + o + "}", l
    }, k.chain = function (e) {
        return k(e).chain()
    };
    var B = function (e) {
        return this._chain ? k(e).chain() : e
    };
    k.mixin(k), T(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (e) {
        var t = n[e];
        k.prototype[e] = function () {
            var i = this._wrapped;
            return t.apply(i, arguments), "shift" != e && "splice" != e || 0 !== i.length || delete i[0], B.call(this, i)
        }
    }), T(["concat", "join", "slice"], function (e) {
        var t = n[e];
        k.prototype[e] = function () {
            return B.call(this, t.apply(this._wrapped, arguments))
        }
    }), k.extend(k.prototype, {
        chain: function () {
            return this._chain = !0, this
        },
        value: function () {
            return this._wrapped
        }
    })
}.call(this), $.fn.hasEmptyValue = function () {
    return "" === this.val() || this.val() === this.attr("data-hint")
}, $.fn.hasPresentValue = function () {
    return !this.hasEmptyValue()
}, $.fn.presentValue = function () {
    return this.hasPresentValue() ? this.val() : ""
}, $(function () {
    function e(e) {
        var o = $(e.currentTarget),
            a = o.attr("href");
        if (a) {
            var l = a.match(s()),
                c = l && l[1];
            if (c) {
                var u = $.uri(location.href).at("domain"),
                    h = $.uri(c).at("domain");
                if (u != h) {
                    var d = e.isDefaultPrevented();
                    e.preventDefault(), r(!0), t(function (e) {
                        i(c, e.token, function () {
                            r(!1), n(o, d)
                        })
                    })
                }
            }
        }
    }

    function t(e) {
        $.ajax({
            url: "/switch_domain/request_token",
            dataType: "json",
            success: e,
            error: e
        })
    }

    function i(e, t, i) {
        if (t) {
            var n = e + "/switch_domain/transfer";
            $.ajax({
                url: n,
                data: {
                    token: t
                },
                dataType: "jsonp",
                complete: i
            })
        } else i()
    }

    function n(e, t) {
        t || (window.location.href = e.attr("href"))
    }

    function r(e) {
        e ? $("body").addClass("content_is_loading") : $("body").removeClass("content_is_loading")
    }

    function s() {
        return a || (a = o()), a
    }

    function o() {
        var e = $("body").attr("data-valid-hosts"),
            t = e ? e.match(/^\^(.*)\$$/) : null;
        return t ? new RegExp("^(https?://" + t[1] + "(?::\\d+)?)(?:/|$)") : /(?!)/
    }
    var a, l = $(document.body),
        c = "a";
    l.delegate(c, "click", e)
}), function (e) {
    function t(t) {
        function i() {}
        t = t.toString();
        var n = function (e, t, i, n) {
                var r = {},
                    s = e.indexOf(i);
                return 0 > s ? (r[t] = e, r[n] = "") : (r[t] = e.substring(0, s), r[n] = e.substring(s + i.length)), r.toString = function () {
                    return "'" + r[t] + "', '" + r[n] + "'"
                }, r
            },
            r = function (t) {
                var i = {},
                    r = t.split("&") || [];
                return e.each(r, function (e, t) {
                    if (t.length <= 0) return !0;
                    var r = n(t, "key", "=", "value"),
                        s = decodeURIComponent(r.key),
                        o = decodeURIComponent(r.value);
                    i[s] = o
                }), i
            },
            s = function (e) {
                e.domainPortPath || (e.domainPortPath = e.protocol, e.protocol = "")
            },
            o = n(t, "address", "?", "rest");
        o.rest || (o = n(t, "address", "#", "rest"), o.rest = "#" + o.rest);
        var a = n(o.rest, "query", "#", "fragment"),
            l = n(o.address, "protocol", "://", "domainPortPath");
        s(l);
        var c = n(l.domainPortPath, "domainPort", "/", "path"),
            u = n(c.domainPort, "domain", ":", "port");
        c.path = c.path.replace(/\/+$/, "");
        var h = function (e, t, i) {
            return i = i || "", null == t || 0 == t.length ? "" : e + t + i
        };
        return i.prototype.toString = function (t) {
            var i = [];
            e.each(this.params, function (e, t) {
                var n = {
                    name: e,
                    value: t
                };
                i.push(n)
            }), t && i.sort(t);
            var n = "";
            return e.each(i, function (e, t) {
                n += n.length > 0 ? "&" : "", n += encodeURIComponent(t.name) + "=" + encodeURIComponent(t.value)
            }), h("", this.protocol, "://") + h("", this.domain) + h(":", this.port) + h("/", this.path) + h("?", n)
        }, i.prototype.clone = function () {
            var t = e.extend(new i, this);
            return t.params = e.extend({}, this.params), t
        }, e.extend(new i, {
            protocol: l.protocol,
            domain: u.domain,
            port: u.port,
            path: c.path,
            params: r(a.query),
            fragment: a.fragment
        })
    }

    function i(e) {
        return "query" == e
    }

    function n(t, n, r) {
        s(n);
        var o = t.clone();
        return i(n) ? e.extend(o.params, r) : o[n] = r, a(o)
    }

    function r(t, n) {
        var r = t.clone();
        return e.each(n, function (t, n) {
            return i(t) ? e.extend(r.params, n) : r[t] = n, !0
        }), a(r)
    }

    function s(t) {
        var i = ["protocol", "domain", "port", "path", "query", "fragment"];
        if (-1 == e.inArray(t, i)) throw "Unknown URI part '" + t + "'"
    }

    function o(t, n) {
        return s(n), i(n) ? e.extend({}, t.params) : t[n]
    }

    function a(t) {
        return {
            at: function (i, s) {
                return 2 == arguments.length ? n(t, i, s) : e.isPlainObject(i) ? r(t, i) : o(t, i)
            },
            retain: function () {
                var e = t.clone();
                e.params = {};
                for (var i = 0; i < arguments.length; ++i) {
                    var n = arguments[i];
                    e.params[n] = t.params[n]
                }
                return a(e)
            },
            defaults: function (i) {
                var n = t.clone();
                return n.params = e.extend({}, i, n.params), a(n)
            },
            _raw: function () {
                return t
            },
            toString: function (e) {
                return t.toString(e)
            }
        }
    }
    e.uri = function (e) {
        return a(t(e))
    }
}(jQuery), jQuery.cookie = function (e, t, i) {
    if ("undefined" == typeof t) {
        if (t = null, document.cookie && "" != document.cookie)
            for (i = document.cookie.split(";"), n = 0; n < i.length; n++)
                if (r = jQuery.trim(i[n]), r.substring(0, e.length + 1) == e + "=") {
                    t = decodeURIComponent(r.substring(e.length + 1));
                    break
                }
        return t
    }
    i = i || {}, null === t && (t = "", i.expires = -1);
    var n = "";
    i.expires && ("number" == typeof i.expires || i.expires.toUTCString) && ("number" == typeof i.expires ? (n = new Date, n.setTime(n.getTime() + 24 * i.expires * 60 * 60 * 1e3)) : n = i.expires, n = "; expires=" + n.toUTCString());
    var r = i.path ? "; path=" + i.path : "",
        s = i.domain ? "; domain=" + i.domain : "";
    i = i.secure ? "; secure" : "", document.cookie = [e, "=", encodeURIComponent(t), n, r, s, i].join("")
}, "undefined" == typeof HouseTrip) var HouseTrip = {};
HouseTrip.getParamsFromUrl = function (e) {
        "undefined" == typeof e && (e = window.location.href), e = e.replace(/([^#]*)#.*/, "$1");
        var t = {};
        if (e.match(/\?/)) {
            e = e.replace(/^.*\?/, "");
            for (var i = e.split("&"), n = 0; n < i.length; n++) {
                var r = i[n].split("="),
                    s = decodeURIComponent(r[0]),
                    o = decodeURIComponent(r[1]);
                t[s] = o
            }
        }
        return t
    }, HouseTrip.addParamsToUrl = function (e, t, i) {
        e = e.replace(/([^#]*)#.*/, "$1");
        var n = "?";
        for (var r in t)
            if (null === t[r]) e = e.replace(RegExp("[?&]" + r + "=[^&]*", "g"), ""), e.match(/\?/) || (e = e.replace(/&/, "?"));
            else {
                var s = encodeURIComponent(r) + "=" + encodeURIComponent(t[r]);
                i && e.match(RegExp("([?&])" + r + "=[^&]*")) ? e = e.replace(RegExp("([?&])" + r + "=[^&]*", "g"), "$1" + s) : (e.match(/\?/) && (n = "&"), e += n + s)
            }
        return e
    }, HouseTrip.gtmDataLayerPush = function (e) {
        try {
            dataLayer.push(e)
        } catch (t) {}
    }, "undefined" != typeof jQuery && (jQuery.fn.valignMiddleInParent = function () {
        this.each(function () {
            jQuery(this).css("paddingTop", (jQuery(this).parent().height() - jQuery(this).height()) / 2)
        })
    }), ! function (e) {
        var t = function (t) {
            var i = e('meta[name="google-play-app"]');
            if (0 != i.length) {
                this.origHtmlMargin = parseFloat(e("html").css("margin-top")), this.options = e.extend({}, e.smartbanner.defaults, t);
                var n = navigator.standalone;
                !this.options.force && (this.androidDevice = null != navigator.userAgent.match(/Android/i), !this.androidDevice || n || this.getCookie("sb-closed") || this.getCookie("sb-installed")) || (this.scale = "auto" == this.options.scale ? e(window).width() / window.screen.width : this.options.scale, this.scale < 1 && (this.scale = 1), this.appId = /app-id=([^\s,]+)/.exec(i.attr("content"))[1], this.title = this.options.title ? this.options.title : e("title").text().replace(/\s*[|\-\xc2\xb7].*$/, ""), this.author = this.options.author ? this.options.author : e('meta[name="author"]').length ? e('meta[name="author"]').attr("content") : window.location.hostname, this.create(), this.show(), this.listen())
            }
        };
        t.prototype = {
            constructor: t,
            create: function () {
                var t, i = this.options.url ? this.options.url : "market://details?id=" + this.appId,
                    n = this.options.price ? this.options.price + " - " + this.options.inGooglePlay : "";
                e("body").append('<div id="smartbanner"><div class="sb-container"><a href="#" class="sb-close">&times;</a><span class="sb-icon"></span><div class="sb-info"><strong>' + this.title + "</strong><span>" + this.author + "</span><span>" + n + '</span></div><a href="' + i + '" class="sb-button"><span>' + this.options.button + "</span></a></div></div>"), this.options.icon ? t = this.options.icon : e('link[rel="apple-touch-icon-precomposed"]').length > 0 ? t = e('link[rel="apple-touch-icon-precomposed"]').attr("href") : e('link[rel="apple-touch-icon"]').length > 0 && (t = e('link[rel="apple-touch-icon"]').attr("href")), t ? e("#smartbanner .sb-icon").css("background-image", "url(" + t + ")") : e("#smartbanner").addClass("no-icon"), this.bannerHeight = e("#smartbanner").outerHeight() + 2, this.scale > 1 && (e("#smartbanner").css("top", parseFloat(e("#smartbanner").css("top")) * this.scale).css("height", parseFloat(e("#smartbanner").css("height")) * this.scale), e("#smartbanner .sb-container").css("-webkit-transform", "scale(" + this.scale + ")").css("-msie-transform", "scale(" + this.scale + ")").css("-moz-transform", "scale(" + this.scale + ")").css("width", e(window).width() / this.scale))
            },
            listen: function () {
                e("#smartbanner .sb-close").click(function () {
                    return this.close(), !1
                }.bind(this)), e("#smartbanner .sb-button").click(function () {
                    this.install()
                }.bind(this))
            },
            show: function (t) {
                e("#smartbanner").stop().animate({
                    top: 0
                }, this.options.speedIn).addClass("shown"), e("html").animate({
                    marginTop: this.origHtmlMargin + this.bannerHeight * this.scale
                }, this.options.speedIn, "swing", t)
            },
            hide: function (t) {
                e("#smartbanner").stop().animate({
                    top: -1 * this.bannerHeight * this.scale
                }, this.options.speedOut).removeClass("shown"), e("html").animate({
                    marginTop: this.origHtmlMargin
                }, this.options.speedOut, "swing", t)
            },
            close: function () {
                this.hide(), this.setCookie("sb-closed", "true", this.options.daysHidden)
            },
            install: function () {
                this.hide(), this.setCookie("sb-installed", "true", this.options.daysReminder)
            },
            setCookie: function (e, t, i) {
                var n = new Date;
                n.setDate(n.getDate() + i), t = escape(t) + (null == i ? "" : "; expires=" + n.toUTCString()), document.cookie = e + "=" + t + "; path=/;"
            },
            getCookie: function (e) {
                var t, i, n, r = document.cookie.split(";");
                for (t = 0; t < r.length; t++)
                    if (i = r[t].substr(0, r[t].indexOf("=")), n = r[t].substr(r[t].indexOf("=") + 1), i = i.replace(/^\s+|\s+$/g, ""), i == e) return unescape(n);
                return null
            }
        }, e.smartbanner = function (i) {
            var n = e(window),
                r = n.data("typeahead"),
                s = "object" == typeof i && i;
            r || n.data("typeahead", r = new t(s)), "string" == typeof i && r[i]()
        }, e.smartbanner.defaults = {
            title: null,
            author: null,
            price: "FREE",
            inGooglePlay: "In Google Play",
            icon: null,
            button: "VIEW",
            url: null,
            scale: "auto",
            speedIn: 300,
            speedOut: 400,
            daysHidden: 15,
            daysReminder: 90,
            force: null
        }, e.smartbanner.Constructor = t
    }(window.jQuery),
    function (e, t, i, n) {
        function r(e) {
            for (var t = -1, i = e ? e.length : 0, n = []; ++t < i;) {
                var r = e[t];
                r && n.push(r)
            }
            return n
        }

        function s(e) {
            return "[object Function]" === Object.prototype.toString.call(e)
        }

        function o(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }

        function a(e, t, i, n) {
            function r(e, t) {
                return 1 - 3 * t + 3 * e
            }

            function s(e, t) {
                return 3 * t - 6 * e
            }

            function o(e) {
                return 3 * e
            }

            function a(e, t, i) {
                return ((r(t, i) * e + s(t, i)) * e + o(t)) * e
            }

            function l(e, t, i) {
                return 3 * r(t, i) * e * e + 2 * s(t, i) * e + o(t)
            }

            function c(t) {
                for (var n = t, r = 0; 8 > r; ++r) {
                    var s = l(n, e, i);
                    if (0 === s) return n;
                    var o = a(n, e, i) - t;
                    n -= o / s
                }
                return n
            }
            if (4 !== arguments.length) return !1;
            for (var u = 0; 4 > u; ++u)
                if ("number" != typeof arguments[u] || isNaN(arguments[u]) || !isFinite(arguments[u])) return !1;
            e = Math.min(e, 1), i = Math.min(i, 1), e = Math.max(e, 0), i = Math.max(i, 0);
            var h = function (r) {
                return e === t && i === n ? r : a(c(r), t, n)
            };
            return h
        }

        function l(e) {
            if (e)
                for (var t = (new Date).getTime(), i = 0, r = f.State.calls.length; r > i; i++)
                    if (f.State.calls[i]) {
                        var s = f.State.calls[i],
                            o = s[0],
                            a = s[2],
                            h = s[3];
                        h || (h = f.State.calls[i][3] = t - 16);
                        for (var m = Math.min((t - h) / a.duration, 1), v = 0, y = o.length; y > v; v++) {
                            var b = o[v],
                                w = b.element;
                            if (p.data(w, u)) {
                                var _ = !1;
                                a.display && "none" !== a.display && (g.setPropertyValue(w, "display", a.display), f.State.calls[i][2].display = !1);
                                for (var x in b)
                                    if ("element" !== x) {
                                        var k, T = b[x],
                                            C = "string" == typeof T.easing ? f.Easings[T.easing] : T.easing;
                                        if (k = 1 === m ? T.endValue : T.startValue + (T.endValue - T.startValue) * C(m), T.currentValue = k, g.Hooks.registered[x]) {
                                            var S = g.Hooks.getRoot(x),
                                                $ = p.data(w, u).rootPropertyValueCache[S];
                                            $ && (T.rootPropertyValue = $)
                                        }
                                        var D = g.setPropertyValue(w, x, T.currentValue + (0 === parseFloat(k) ? "" : T.unitType), T.rootPropertyValue, T.scrollContainer);
                                        g.Hooks.registered[x] && (p.data(w, u).rootPropertyValueCache[S] = g.Normalizations.registered[S] ? g.Normalizations.registered[S]("extract", null, D[1]) : D[1]), "transform" === D[0] && (_ = !0)
                                    }
                                a.mobileHA && p.data(w, u).transformCache.translate3d === n && (p.data(w, u).transformCache.translate3d = "(0, 0, 0)", _ = !0), _ && g.flushTransformCache(w)
                            }
                        }
                        1 === m && c(i)
                    }
            f.State.isTicking && d(l)
        }

        function c(e) {
            for (var t = f.State.calls[e][0], i = f.State.calls[e][1], r = f.State.calls[e][2], s = !1, o = 0, a = t.length; a > o; o++) {
                var l = t[o].element;
                if ("none" !== r.display || r.loop || g.setPropertyValue(l, "display", r.display), p.queue(l)[1] !== n && /\.velocityQueueEntryFlag/i.test(p.queue(l)[1]) || p.data(l, u) && (p.data(l, u).isAnimating = !1, p.data(l, u).rootPropertyValueCache = {}, r.mobileHA && !f.State.isGingerbread && (delete p.data(l, u).transformCache.translate3d, g.flushTransformCache(l))), o === a - 1 && !r.loop && r.complete) {
                    var c = i.jquery ? i.get() : i;
                    r.complete.call(c, c)
                }
                r.queue !== !1 && p.dequeue(l, r.queue)
            }
            f.State.calls[e] = !1;
            for (var h = 0, d = f.State.calls.length; d > h; h++)
                if (f.State.calls[h] !== !1) {
                    s = !0;
                    break
                }
            s === !1 && (f.State.isTicking = !1, delete f.State.calls, f.State.calls = [])
        }
        var u = "velocity",
            h = function () {
                if (i.documentMode) return i.documentMode;
                for (var e = 7; e > 4; e--) {
                    var t = i.createElement("div");
                    if (t.innerHTML = "<!--[if IE " + e + "]><span></span><![endif]-->", t.getElementsByTagName("span").length) return t = null, e
                }
                return n
            }(),
            d = t.requestAnimationFrame || function () {
                var e = 0;
                return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function (t) {
                    var i, n = (new Date).getTime();
                    return i = Math.max(0, 16 - (n - e)), e = n + i, setTimeout(function () {
                        t(n + i)
                    }, i)
                }
            }();
        if (7 >= h) {
            if (t.jQuery) return void(t.jQuery.fn.velocity = t.jQuery.fn.animate);
            throw new Error("For IE<=7, Velocity falls back to jQuery, which must first be loaded.")
        }
        if (8 === h && !t.jQuery) throw new Error("For IE8, Velocity requires jQuery to be loaded.");
        if (e.Velocity !== n && !e.Velocity.Utilities) throw new Error("Velocity's namespace is occupied. Aborting.");
        var p = t.jQuery || e.Velocity.Utilities,
            f = e.Velocity = e.velocity = p.extend(e.Velocity || {}, {
                State: {
                    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                    isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                    prefixElement: i.createElement("div"),
                    prefixMatches: {},
                    scrollAnchor: null,
                    scrollPropertyLeft: null,
                    scrollPropertyTop: null,
                    isTicking: !1,
                    calls: []
                },
                CSS: {},
                Sequences: {},
                Easings: {},
                defaults: {
                    queue: "",
                    duration: 400,
                    easing: "swing",
                    complete: null,
                    display: null,
                    loop: !1,
                    delay: !1,
                    mobileHA: !0,
                    _cacheValues: !0
                },
                animate: function () {},
                debug: !1
            });
        t.pageYOffset !== n ? (f.State.scrollAnchor = t, f.State.scrollPropertyLeft = "pageXOffset", f.State.scrollPropertyTop = "pageYOffset") : (f.State.scrollAnchor = i.documentElement || i.body.parentNode || i.body, f.State.scrollPropertyLeft = "scrollLeft", f.State.scrollPropertyTop = "scrollTop"),
            function () {
                var e = {};
                p.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (t, i) {
                    e[i] = function (e) {
                        return Math.pow(e, t + 2)
                    }
                }), p.extend(e, {
                    Sine: function (e) {
                        return 1 - Math.cos(e * Math.PI / 2)
                    },
                    Circ: function (e) {
                        return 1 - Math.sqrt(1 - e * e)
                    },
                    Elastic: function (e) {
                        return 0 === e || 1 === e ? e : -Math.pow(2, 8 * (e - 1)) * Math.sin((80 * (e - 1) - 7.5) * Math.PI / 15)
                    },
                    Back: function (e) {
                        return e * e * (3 * e - 2)
                    },
                    Bounce: function (e) {
                        for (var t, i = 4; e < ((t = Math.pow(2, --i)) - 1) / 11;);
                        return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * t - 2) / 22 - e, 2)
                    }
                }), p.each(e, function (e, t) {
                    f.Easings["easeIn" + e] = t, f.Easings["easeOut" + e] = function (e) {
                        return 1 - t(1 - e)
                    }, f.Easings["easeInOut" + e] = function (e) {
                        return .5 > e ? t(2 * e) / 2 : 1 - t(-2 * e + 2) / 2
                    }
                }), f.Easings.linear = function (e) {
                    return e
                }, f.Easings.swing = function (e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                }, f.Easings.ease = a(.25, .1, .25, 1), f.Easings["ease-in"] = a(.42, 0, 1, 1), f.Easings["ease-out"] = a(0, 0, .58, 1), f.Easings["ease-in-out"] = a(.42, 0, .58, 1), f.Easings.spring = function (e) {
                    return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e)
                }
            }();
        var g = f.CSS = {
            RegEx: {
                valueUnwrap: /^[A-z]+\((.*)\)$/i,
                wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
            },
            Hooks: {
                templates: {
                    color: ["Red Green Blue Alpha", "255 255 255 1"],
                    backgroundColor: ["Red Green Blue Alpha", "255 255 255 1"],
                    borderColor: ["Red Green Blue Alpha", "255 255 255 1"],
                    outlineColor: ["Red Green Blue Alpha", "255 255 255 1"],
                    textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                    boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                    clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                    backgroundPosition: ["X Y", "0% 0%"],
                    transformOrigin: ["X Y Z", "50% 50% 0%"],
                    perspectiveOrigin: ["X Y", "50% 50%"]
                },
                registered: {},
                register: function () {
                    var e, t, i;
                    if (h)
                        for (e in g.Hooks.templates) {
                            t = g.Hooks.templates[e], i = t[0].split(" ");
                            var n = t[1].match(g.RegEx.valueSplit);
                            "Color" === i[0] && (i.push(i.shift()), n.push(n.shift()), g.Hooks.templates[e] = [i.join(" "), n.join(" ")])
                        }
                    for (e in g.Hooks.templates) {
                        t = g.Hooks.templates[e], i = t[0].split(" ");
                        for (var r in i) {
                            var s = e + i[r],
                                o = r;
                            g.Hooks.registered[s] = [e, o]
                        }
                    }
                },
                getRoot: function (e) {
                    var t = g.Hooks.registered[e];
                    return t ? t[0] : e
                },
                cleanRootPropertyValue: function (e, t) {
                    return g.RegEx.valueUnwrap.test(t) && (t = t.match(g.Hooks.RegEx.valueUnwrap)[1]), g.Values.isCSSNullValue(t) && (t = g.Hooks.templates[e][1]), t
                },
                extractValue: function (e, t) {
                    var i = g.Hooks.registered[e];
                    if (i) {
                        var n = i[0],
                            r = i[1];
                        return t = g.Hooks.cleanRootPropertyValue(n, t), t.toString().match(g.RegEx.valueSplit)[r]
                    }
                    return t
                },
                injectValue: function (e, t, i) {
                    var n = g.Hooks.registered[e];
                    if (n) {
                        var r, s, o = n[0],
                            a = n[1];
                        return i = g.Hooks.cleanRootPropertyValue(o, i), r = i.toString().match(g.RegEx.valueSplit), r[a] = t, s = r.join(" ")
                    }
                    return i
                }
            },
            Normalizations: {
                registered: {
                    clip: function (e, t, i) {
                        switch (e) {
                        case "name":
                            return "clip";
                        case "extract":
                            var n;
                            return g.RegEx.wrappedValueAlreadyExtracted.test(i) ? n = i : (n = i.toString().match(g.RegEx.valueUnwrap), n && (n = n[1].replace(/,(\s+)?/g, " "))), n;
                        case "inject":
                            return "rect(" + i + ")"
                        }
                    },
                    opacity: function (e, t, i) {
                        if (8 >= h) switch (e) {
                        case "name":
                            return "filter";
                        case "extract":
                            var n = i.toString().match(/alpha\(opacity=(.*)\)/i);
                            return i = n ? n[1] / 100 : 1;
                        case "inject":
                            return t.style.zoom = 1, parseFloat(i) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(i), 10) + ")"
                        } else switch (e) {
                        case "name":
                            return "opacity";
                        case "extract":
                            return i;
                        case "inject":
                            return i
                        }
                    }
                },
                register: function () {
                    function e(e) {
                        var t, i = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                            n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                        return e = e.replace(i, function (e, t, i, n) {
                            return t + t + i + i + n + n
                        }), t = n.exec(e), t ? "rgb(" + (parseInt(t[1], 16) + " " + parseInt(t[2], 16) + " " + parseInt(t[3], 16)) + ")" : "rgb(0 0 0)"
                    }
                    var t = ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"];
                    9 >= h || (t = t.concat(["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]));
                    for (var i = 0, r = t.length; r > i; i++)! function () {
                        var e = t[i];
                        g.Normalizations.registered[e] = function (t, i, r) {
                            switch (t) {
                            case "name":
                                return "transform";
                            case "extract":
                                return p.data(i, u).transformCache[e] === n ? /^scale/i.test(e) ? 1 : 0 : p.data(i, u).transformCache[e].replace(/[()]/g, "");
                            case "inject":
                                var s = !1;
                                switch (e.substr(0, e.length - 1)) {
                                case "translate":
                                    s = !/(%|px|em|rem|\d)$/i.test(r);
                                    break;
                                case "scale":
                                    s = !/(\d)$/i.test(r);
                                    break;
                                case "skew":
                                    s = !/(deg|\d)$/i.test(r);
                                    break;
                                case "rotate":
                                    s = !/(deg|\d)$/i.test(r)
                                }
                                return s || (p.data(i, u).transformCache[e] = "(" + r + ")"), p.data(i, u).transformCache[e]
                            }
                        }
                    }();
                    for (var s = ["color", "backgroundColor", "borderColor", "outlineColor"], i = 0, o = s.length; o > i; i++)! function () {
                        var t = s[i];
                        g.Normalizations.registered[t] = function (i, r, s) {
                            switch (i) {
                            case "name":
                                return t;
                            case "extract":
                                var o;
                                if (g.RegEx.wrappedValueAlreadyExtracted.test(s)) o = s;
                                else {
                                    var a, l = {
                                        aqua: "rgb(0, 255, 255);",
                                        black: "rgb(0, 0, 0)",
                                        blue: "rgb(0, 0, 255)",
                                        fuchsia: "rgb(255, 0, 255)",
                                        gray: "rgb(128, 128, 128)",
                                        green: "rgb(0, 128, 0)",
                                        lime: "rgb(0, 255, 0)",
                                        maroon: "rgb(128, 0, 0)",
                                        navy: "rgb(0, 0, 128)",
                                        olive: "rgb(128, 128, 0)",
                                        purple: "rgb(128, 0, 128)",
                                        red: "rgb(255, 0, 0)",
                                        silver: "rgb(192, 192, 192)",
                                        teal: "rgb(0, 128, 128)",
                                        white: "rgb(255, 255, 255)",
                                        yellow: "rgb(255, 255, 0)"
                                    };
                                    /^[A-z]+$/i.test(s) ? a = l[s] !== n ? l[s] : l.black : /^#([A-f\d]{3}){1,2}$/i.test(s) ? a = e(s) : /^rgba?\(/i.test(s) || (a = l.black), o = (a || s).toString().match(g.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                }
                                return 8 >= h || 3 !== o.split(" ").length || (o += " 1"), o;
                            case "inject":
                                return 8 >= h ? 4 === s.split(" ").length && (s = s.split(/\s+/).slice(0, 3).join(" ")) : 3 === s.split(" ").length && (s += " 1"), (8 >= h ? "rgb" : "rgba") + "(" + s.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                            }
                        }
                    }()
                }
            },
            Names: {
                camelCase: function (e) {
                    return e.replace(/-(\w)/g, function (e, t) {
                        return t.toUpperCase()
                    })
                },
                prefixCheck: function (e) {
                    if (f.State.prefixMatches[e]) return [f.State.prefixMatches[e], !0];
                    for (var t = ["", "Webkit", "Moz", "ms", "O"], i = 0, n = t.length; n > i; i++) {
                        var r;
                        if (r = 0 === i ? e : t[i] + e.replace(/^\w/, function (e) {
                            return e.toUpperCase()
                        }), "string" == typeof f.State.prefixElement.style[r]) return f.State.prefixMatches[e] = r, [r, !0]
                    }
                    return [e, !1]
                }
            },
            Values: {
                isCSSNullValue: function (e) {
                    return 0 == e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)
                },
                getUnitType: function (e) {
                    return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|opacity|alpha|fillOpacity|flexGrow|flexHeight|zIndex|fontWeight)$)|color/i.test(e) ? "" : "px"
                },
                getDisplayType: function (e) {
                    var t = e.tagName.toString().toLowerCase();
                    return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : "block"
                }
            },
            getPropertyValue: function (e, i, r, s) {
                function o(e, i) {
                    var r = 0;
                    if (8 >= h) r = p.css(e, i);
                    else {
                        if (!s) {
                            if ("height" === i && "border-box" !== g.getPropertyValue(e, "boxSizing").toString().toLowerCase()) return e.offsetHeight - (parseFloat(g.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(g.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(g.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(g.getPropertyValue(e, "paddingBottom")) || 0);
                            if ("width" === i && "border-box" !== g.getPropertyValue(e, "boxSizing").toString().toLowerCase()) return e.offsetWidth - (parseFloat(g.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(g.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(g.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(g.getPropertyValue(e, "paddingRight")) || 0)
                        }
                        var a;
                        a = p.data(e, u) === n ? t.getComputedStyle(e, null) : p.data(e, u).computedStyle ? p.data(e, u).computedStyle : p.data(e, u).computedStyle = t.getComputedStyle(e, null), h && "borderColor" === i && (i = "borderTopColor"), r = 9 === h && "filter" === i ? a.getPropertyValue(i) : a[i], ("" === r || null === r) && (r = e.style[i])
                    } if ("auto" === r && /^(top|right|bottom|left)$/i.test(i)) {
                        var l = o(e, "position");
                        ("fixed" === l || "absolute" === l && /top|left/i.test(i)) && (r = p(e).position()[i] + "px")
                    }
                    return r
                }
                var a;
                if (g.Hooks.registered[i]) {
                    var l = i,
                        c = g.Hooks.getRoot(l);
                    r === n && (r = g.getPropertyValue(e, g.Names.prefixCheck(c)[0])), g.Normalizations.registered[c] && (r = g.Normalizations.registered[c]("extract", e, r)), a = g.Hooks.extractValue(l, r)
                } else if (g.Normalizations.registered[i]) {
                    var d, m;
                    d = g.Normalizations.registered[i]("name", e), "transform" !== d && (m = o(e, g.Names.prefixCheck(d)[0]), g.Values.isCSSNullValue(m) && g.Hooks.templates[i] && (m = g.Hooks.templates[i][1])), a = g.Normalizations.registered[i]("extract", e, m)
                }
                return /^[\d-]/.test(a) || (a = o(e, g.Names.prefixCheck(i)[0])), g.Values.isCSSNullValue(a) && (a = 0), f.debug >= 2 && console.log("Get " + i + ": " + a), a
            },
            setPropertyValue: function (e, i, n, r, s) {
                var o = i;
                if ("scroll" === i) s.container ? s.container["scroll" + s.direction] = n : "Left" === s.direction ? t.scrollTo(n, s.alternateValue) : t.scrollTo(s.alternateValue, n);
                else if (g.Normalizations.registered[i] && "transform" === g.Normalizations.registered[i]("name", e)) g.Normalizations.registered[i]("inject", e, n), o = "transform", n = p.data(e, u).transformCache[i];
                else {
                    if (g.Hooks.registered[i]) {
                        var a = i,
                            l = g.Hooks.getRoot(i);
                        r = r || g.getPropertyValue(e, l), n = g.Hooks.injectValue(a, n, r), i = l
                    }
                    if (g.Normalizations.registered[i] && (n = g.Normalizations.registered[i]("inject", e, n), i = g.Normalizations.registered[i]("name", e)), o = g.Names.prefixCheck(i)[0], 8 >= h) try {
                        e.style[o] = n
                    } catch (c) {
                        console.log("Error setting [" + o + "] to [" + n + "]")
                    } else e.style[o] = n;
                    f.debug >= 2 && console.log("Set " + i + " (" + o + "): " + n)
                }
                return [o, n]
            },
            flushTransformCache: function (e) {
                var t, i, n, r = "";
                for (t in p.data(e, u).transformCache) i = p.data(e, u).transformCache[t], "transformPerspective" !== t ? (9 === h && "rotateZ" === t && (t = "rotate"), r += t + i + " ") : n = i;
                n && (r = "perspective" + n + " " + r), g.setPropertyValue(e, "transform", r)
            }
        };
        g.Hooks.register(), g.Normalizations.register(), f.animate = function () {
            function e(e) {
                var t = e;
                return "string" == typeof e ? f.Easings[e] || (t = !1) : t = o(e) ? a.apply(null, e) : !1, t === !1 && (t = f.Easings[f.defaults.easing] ? f.defaults.easing : "swing"), t
            }

            function c() {
                function t() {
                    function t(t) {
                        var i = n,
                            r = n,
                            l = n;
                        return o(t) ? (i = t[0], !o(t[1]) && /^[\d-]/.test(t[1]) || s(t[1]) ? l = t[1] : ("string" == typeof t[1] || o(t[1])) && (r = e(t[1]), t[2] && (l = t[2]))) : i = t, r = r || c.easing, s(i) && (i = i.call(a, w, b)), s(l) && (l = l.call(a, w, b)), [i || 0, r, l]
                    }

                    function _(e, t) {
                        var i, n;
                        return n = (t || 0).toString().toLowerCase().replace(/[%A-z]+$/, function (e) {
                            return i = e, ""
                        }), i || (i = g.Values.getUnitType(e)), [n, i]
                    }

                    function x() {
                        var e = {
                                parent: a.parentNode,
                                position: g.getPropertyValue(a, "position"),
                                fontSize: g.getPropertyValue(a, "fontSize")
                            },
                            t = e.position === T.lastPosition && e.parent === T.lastParent,
                            n = e.fontSize === T.lastFontSize && e.parent === T.lastParent;
                        T.lastParent = e.parent, T.lastPosition = e.position, T.lastFontSize = e.fontSize, null === T.remToPxRatio && (T.remToPxRatio = parseFloat(g.getPropertyValue(i.body, "fontSize")) || 16);
                        var r = {
                                overflowX: null,
                                overflowY: null,
                                boxSizing: null,
                                width: null,
                                minWidth: null,
                                maxWidth: null,
                                height: null,
                                minHeight: null,
                                maxHeight: null,
                                paddingLeft: null
                            },
                            s = {},
                            o = 10;
                        if (s.remToPxRatio = T.remToPxRatio, h) var l = /^auto$/i.test(a.currentStyle.width),
                            c = /^auto$/i.test(a.currentStyle.height);
                        t && n || (r.overflowX = g.getPropertyValue(a, "overflowX"), r.overflowY = g.getPropertyValue(a, "overflowY"), r.boxSizing = g.getPropertyValue(a, "boxSizing"), r.width = g.getPropertyValue(a, "width", null, !0), r.minWidth = g.getPropertyValue(a, "minWidth"), r.maxWidth = g.getPropertyValue(a, "maxWidth") || "none", r.height = g.getPropertyValue(a, "height", null, !0), r.minHeight = g.getPropertyValue(a, "minHeight"), r.maxHeight = g.getPropertyValue(a, "maxHeight") || "none", r.paddingLeft = g.getPropertyValue(a, "paddingLeft")), t ? (s.percentToPxRatioWidth = T.lastPercentToPxWidth, s.percentToPxRatioHeight = T.lastPercentToPxHeight) : (g.setPropertyValue(a, "overflowX", "hidden"), g.setPropertyValue(a, "overflowY", "hidden"), g.setPropertyValue(a, "boxSizing", "content-box"), g.setPropertyValue(a, "width", o + "%"), g.setPropertyValue(a, "minWidth", o + "%"), g.setPropertyValue(a, "maxWidth", o + "%"), g.setPropertyValue(a, "height", o + "%"), g.setPropertyValue(a, "minHeight", o + "%"), g.setPropertyValue(a, "maxHeight", o + "%")), n ? s.emToPxRatio = T.lastEmToPx : g.setPropertyValue(a, "paddingLeft", o + "em"), t || (s.percentToPxRatioWidth = T.lastPercentToPxWidth = (parseFloat(g.getPropertyValue(a, "width", null, !0)) || 1) / o, s.percentToPxRatioHeight = T.lastPercentToPxHeight = (parseFloat(g.getPropertyValue(a, "height", null, !0)) || 1) / o), n || (s.emToPxRatio = T.lastEmToPx = (parseFloat(g.getPropertyValue(a, "paddingLeft")) || 1) / o);
                        for (var u in r) null !== r[u] && g.setPropertyValue(a, u, r[u]);
                        return h ? (l && g.setPropertyValue(a, "width", "auto"), c && g.setPropertyValue(a, "height", "auto")) : (g.setPropertyValue(a, "height", "auto"), r.height !== g.getPropertyValue(a, "height", null, !0) && g.setPropertyValue(a, "height", r.height), g.setPropertyValue(a, "width", "auto"), r.width !== g.getPropertyValue(a, "width", null, !0) && g.setPropertyValue(a, "width", r.width)), f.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(s), a), s
                    }
                    if (0 === w && y && s(y.begin)) {
                        var S = m.jquery ? m.get() : m;
                        y.begin.call(S, S)
                    }
                    if ("scroll" === k) {
                        var $, D, H, E = /^x$/i.test(c.axis) ? "Left" : "Top",
                            P = parseFloat(c.offset) || 0;
                        c.container ? c.container.jquery || c.container.nodeType ? (c.container = c.container[0] || c.container, $ = c.container["scroll" + E], H = $ + p(a).position()[E.toLowerCase()] + P) : c.container = null : ($ = f.State.scrollAnchor[f.State["scrollProperty" + E]], D = f.State.scrollAnchor[f.State["scrollProperty" + ("Left" === E ? "Top" : "Left")]], H = p(a).offset()[E.toLowerCase()] + P), d = {
                            scroll: {
                                rootPropertyValue: !1,
                                startValue: $,
                                currentValue: $,
                                endValue: H,
                                unitType: "",
                                easing: c.easing,
                                scrollContainer: {
                                    container: c.container,
                                    direction: E,
                                    alternateValue: D
                                }
                            },
                            element: a
                        }
                    } else if ("reverse" === k) {
                        if (!p.data(a, u).tweensContainer) return void p.dequeue(a, c.queue);
                        "none" === p.data(a, u).opts.display && (p.data(a, u).opts.display = "block"), p.data(a, u).opts.loop = !1, p.data(a, u).opts.begin = null, p.data(a, u).opts.complete = null, c = p.extend({}, p.data(a, u).opts, y);
                        var A = p.extend(!0, {}, p.data(a, u).tweensContainer);
                        for (var M in A)
                            if ("element" !== M) {
                                var I = A[M].startValue;
                                A[M].startValue = A[M].currentValue = A[M].endValue, A[M].endValue = I, y && (A[M].easing = c.easing)
                            }
                        d = A
                    } else if ("start" === k) {
                        var A;
                        p.data(a, u).tweensContainer && p.data(a, u).isAnimating === !0 && (A = p.data(a, u).tweensContainer);
                        for (var O in v) {
                            var N = t(v[O]),
                                V = N[0],
                                B = N[1],
                                L = N[2];
                            O = g.Names.camelCase(O);
                            var j = g.Hooks.getRoot(O),
                                F = !1;
                            if (g.Names.prefixCheck(j)[1] !== !1 || g.Normalizations.registered[j] !== n) {
                                c.display && "none" !== c.display && /opacity|filter/.test(O) && !L && 0 !== V && (L = 0), c._cacheValues && A && A[O] ? (L === n && (L = A[O].endValue + A[O].unitType), F = p.data(a, u).rootPropertyValueCache[j]) : g.Hooks.registered[O] ? L === n ? (F = g.getPropertyValue(a, j), L = g.getPropertyValue(a, O, F)) : F = g.Hooks.templates[j][1] : L === n && (L = g.getPropertyValue(a, O));
                                var R, z, q, U;
                                R = _(O, L), L = R[0], q = R[1], R = _(O, V), V = R[0].replace(/^([+-\/*])=/, function (e, t) {
                                    return U = t, ""
                                }), z = R[1], L = parseFloat(L) || 0, V = parseFloat(V) || 0;
                                var W;
                                if ("%" === z && (/^(fontSize|lineHeight)$/.test(O) ? (V /= 100, z = "em") : /^scale/.test(O) ? (V /= 100, z = "") : /(Red|Green|Blue)$/i.test(O) && (V = V / 100 * 255, z = "")), /[\/*]/.test(U)) z = q;
                                else if (q !== z && 0 !== L)
                                    if (0 === V) z = q;
                                    else {
                                        W = W || x();
                                        var Y = /margin|padding|left|right|width|text|word|letter/i.test(O) || /X$/.test(O) ? "x" : "y";
                                        switch (q) {
                                        case "%":
                                            L *= "x" === Y ? W.percentToPxRatioWidth : W.percentToPxRatioHeight;
                                            break;
                                        case "em":
                                            L *= W.emToPxRatio;
                                            break;
                                        case "rem":
                                            L *= W.remToPxRatio;
                                            break;
                                        case "px":
                                        }
                                        switch (z) {
                                        case "%":
                                            L *= 1 / ("x" === Y ? W.percentToPxRatioWidth : W.percentToPxRatioHeight);
                                            break;
                                        case "em":
                                            L *= 1 / W.emToPxRatio;
                                            break;
                                        case "rem":
                                            L *= 1 / W.remToPxRatio;
                                            break;
                                        case "px":
                                        }
                                    }
                                switch (U) {
                                case "+":
                                    V = L + V;
                                    break;
                                case "-":
                                    V = L - V;
                                    break;
                                case "*":
                                    V = L * V;
                                    break;
                                case "/":
                                    V = L / V
                                }
                                d[O] = {
                                    rootPropertyValue: F,
                                    startValue: L,
                                    currentValue: L,
                                    endValue: V,
                                    unitType: z,
                                    easing: B
                                }, f.debug && console.log("tweensContainer (" + O + "): " + JSON.stringify(d[O]), a)
                            } else f.debug && console.log("Skipping [" + j + "] due to a lack of browser support.")
                        }
                        d.element = a
                    }
                    d.element && (C.push(d), p.data(a, u).tweensContainer = d, p.data(a, u).opts = c, p.data(a, u).isAnimating = !0, w === b - 1 ? (f.State.calls.length > 1e4 && (f.State.calls = r(f.State.calls)), f.State.calls.push([C, m, c]), f.State.isTicking === !1 && (f.State.isTicking = !0, l())) : w++)
                }
                var a = this,
                    c = p.extend({}, f.defaults, y),
                    d = {};
                if ("stop" === k) return p.queue(a, "string" == typeof y ? y : "", []), !0;
                switch (p.data(a, u) === n && p.data(a, u, {
                    isAnimating: !1,
                    computedStyle: null,
                    tweensContainer: null,
                    rootPropertyValueCache: {},
                    transformCache: {}
                }), c.duration.toString().toLowerCase()) {
                case "fast":
                    c.duration = 200;
                    break;
                case "normal":
                    c.duration = 400;
                    break;
                case "slow":
                    c.duration = 600;
                    break;
                default:
                    c.duration = parseFloat(c.duration) || parseFloat(f.defaults.duration) || 400
                }
                c.easing = e(c.easing), /^\d/.test(c.delay) && p.queue(a, c.queue, function (e) {
                    f.velocityQueueEntryFlag = !0, setTimeout(e, parseFloat(c.delay))
                }), c.display && (c.display = c.display.toString().toLowerCase()), c.mobileHA = c.mobileHA && f.State.isMobile, c.queue === !1 ? t() : p.queue(a, c.queue, function (e) {
                    f.velocityQueueEntryFlag = !0, t(e)
                }), "" !== c.queue && "fx" !== c.queue || "inprogress" === p.queue(a)[0] || p.dequeue(a)
            }
            var d, m, v, y;
            this.jquery || t.Zepto && t.Zepto.zepto.isZ(this) ? (d = !0, m = this, v = arguments[0], y = arguments[1]) : (d = !1, m = arguments[0].jquery ? arguments[0].get() : arguments[0], v = arguments[1], y = arguments[2]);
            var b = m.length || 1,
                w = 0;
            if ("stop" !== v && !p.isPlainObject(y)) {
                var _ = d ? 1 : 2;
                y = {};
                for (var x = _; x < arguments.length; x++)!o(arguments[x]) && /^\d/.test(arguments[x]) ? y.duration = parseFloat(arguments[x]) : "string" == typeof arguments[x] ? y.easing = arguments[x] : o(arguments[x]) && 4 === arguments[x].length ? y.easing = arguments[x] : s(arguments[x]) && (y.complete = arguments[x])
            }
            var k;
            switch (v) {
            case "scroll":
                k = "scroll";
                break;
            case "reverse":
                k = "reverse";
                break;
            case "stop":
                k = "stop";
                break;
            default:
                if (!p.isPlainObject(v) || p.isEmptyObject(v)) return "string" == typeof v && f.Sequences[v] ? (p.each(m, function (e, t) {
                    f.Sequences[v].call(t, t, y || {}, e, b)
                }), m) : (f.debug && console.log("First argument was not a property map, a known action, or a registered sequence. Aborting."), m);
                k = "start"
            }
            var T = {
                    lastParent: null,
                    lastPosition: null,
                    lastFontSize: null,
                    lastPercentToPxWidth: null,
                    lastPercentToPxHeight: null,
                    lastEmToPx: null,
                    remToPxRatio: null
                },
                C = [];
            if (y && y.complete && !s(y.complete) && (y.complete = null), d) m.each(c);
            else if (m.nodeType) c.call(m);
            else if (m[0] && m[0].nodeType)
                for (var S in m) c.call(m[S]);
            var $, D = p.extend({}, f.defaults, y);
            if (D.loop = parseInt(D.loop), $ = 2 * D.loop - 1, D.loop)
                for (var H = 0; $ > H; H++) {
                    var E = {
                        delay: D.delay
                    };
                    D.complete && H === $ - 1 && (E.complete = D.complete), d ? m.velocity("reverse", E) : f.animate(m, "reverse", E)
                }
            return m
        };
        var m = t.jQuery || t.Zepto;
        m && (m.fn.velocity = f.animate, m.fn.velocity.defaults = f.defaults), p.each(["Down", "Up"], function (e, t) {
            f.Sequences["slide" + t] = function (e, i) {
                var n = p.extend({}, i),
                    r = {
                        height: null,
                        marginTop: null,
                        marginBottom: null,
                        paddingTop: null,
                        paddingBottom: null,
                        overflow: null,
                        overflowY: null
                    },
                    s = n.begin,
                    o = n.complete;
                n.display = "Down" === t ? n.display || "block" : n.display || "none", n.begin = function () {
                    if ("Down" === t) {
                        r.overflow = [f.CSS.getPropertyValue(e, "overflow"), 0], r.overflowY = [f.CSS.getPropertyValue(e, "overflowY"), 0], e.style.overflow = "hidden", e.style.overflowY = "hidden", e.style.height = "auto", e.style.display = "block";
                        for (var i in r) /^overflow/.test(i) || (r[i] = [f.CSS.getPropertyValue(e, i), 0]);
                        e.style.display = "none"
                    } else {
                        for (var i in r) r[i] = [0, f.CSS.getPropertyValue(e, i)];
                        e.style.overflow = "hidden", e.style.overflowY = "hidden"
                    }
                    s && s.call(e, e)
                }, n.complete = function (e) {
                    for (var i in r) e.style[i] = r[i]["Down" === t ? 0 : 1];
                    o && o.call(e, e)
                }, f.animate(e, r, n)
            }
        }), p.each(["In", "Out"], function (e, t) {
            f.Sequences["fade" + t] = function (e, i, n, r) {
                var s = p.extend({}, i),
                    o = {
                        opacity: "In" === t ? 1 : 0
                    };
                n !== r - 1 && (s.complete = s.begin = null), s.display || (s.display = "In" === t ? f.CSS.Values.getDisplayType(e) : "none"), f.animate(this, o, s)
            }
        })
    }(window.jQuery || window.Zepto || window, window, document),
    function (e) {
        e.fn.fader = function () {
            function t() {
                var t = e(this);
                t.width("105%").height("auto").css({
                    margin: "0 0 0 -2.5%"
                }), t.velocity("fadeIn", {
                    complete: function () {
                        d.css({
                            "background-image": "none"
                        })
                    },
                    duration: o,
                    easing: s,
                    queue: !1
                }), setTimeout(function () {
                    t.css("z-index", -1), i()
                }, r - 1.5 * o), setTimeout(function () {
                    t.velocity("fadeOut", {
                        complete: function () {
                            t.remove()
                        },
                        duration: o,
                        easing: s,
                        queue: !1
                    })
                }, r - o)
            }

            function i() {
                var i = new Image;
                l = l < a.length - 1 ? l + 1 : 0, e(i).load(function () {
                    e(this).css({
                        position: "absolute",
                        "z-index": "-2",
                        display: "none"
                    }), e("#" + u).append(this), t.call(this, a[l])
                }).error(function () {
                    throw new Error("Oops, can't load the image.")
                }).attr("src", a[l]), n()
            }

            function n() {
                if (c != a.length) {
                    var e = new Image;
                    c = l + 1, c < a.length - 1 && (e.src = a[c])
                }
            }
            if (e(window).width() < 480) return this;
            var r = 12e3,
                s = "linear",
                o = 2e3,
                a = [],
                l = -1,
                c = 0,
                u = "fader-" + (new Date).getTime(),
                h = {
                    position: "absolute",
                    overflow: "hidden",
                    "z-index": "-2",
                    left: "0",
                    top: "0",
                    width: "100%",
                    height: "100%"
                },
                d = this.first();
            return a = d.data("images"), e("<div id='" + u + "'></div>").css(h).appendTo(d), i(), this
        }
    }(jQuery),
    function () {
        {
            var e, t = this,
                i = t.Backbone,
                n = [],
                r = (n.push, n.slice);
            n.splice
        }
        e = "undefined" != typeof exports ? exports : t.Backbone = {}, e.VERSION = "1.1.0";
        var s = t._;
        s || "undefined" == typeof require || (s = require("underscore")), e.$ = t.jQuery || t.Zepto || t.ender || t.$, e.noConflict = function () {
            return t.Backbone = i, this
        }, e.emulateHTTP = !1, e.emulateJSON = !1;
        var o = e.Events = {
                on: function (e, t, i) {
                    if (!l(this, "on", e, [t, i]) || !t) return this;
                    this._events || (this._events = {});
                    var n = this._events[e] || (this._events[e] = []);
                    return n.push({
                        callback: t,
                        context: i,
                        ctx: i || this
                    }), this
                },
                once: function (e, t, i) {
                    if (!l(this, "once", e, [t, i]) || !t) return this;
                    var n = this,
                        r = s.once(function () {
                            n.off(e, r), t.apply(this, arguments)
                        });
                    return r._callback = t, this.on(e, r, i)
                },
                off: function (e, t, i) {
                    var n, r, o, a, c, u, h, d;
                    if (!this._events || !l(this, "off", e, [t, i])) return this;
                    if (!e && !t && !i) return this._events = {}, this;
                    for (a = e ? [e] : s.keys(this._events), c = 0, u = a.length; u > c; c++)
                        if (e = a[c], o = this._events[e]) {
                            if (this._events[e] = n = [], t || i)
                                for (h = 0, d = o.length; d > h; h++) r = o[h], (t && t !== r.callback && t !== r.callback._callback || i && i !== r.context) && n.push(r);
                            n.length || delete this._events[e]
                        }
                    return this
                },
                trigger: function (e) {
                    if (!this._events) return this;
                    var t = r.call(arguments, 1);
                    if (!l(this, "trigger", e, t)) return this;
                    var i = this._events[e],
                        n = this._events.all;
                    return i && c(i, t), n && c(n, arguments), this
                },
                stopListening: function (e, t, i) {
                    var n = this._listeningTo;
                    if (!n) return this;
                    var r = !t && !i;
                    i || "object" != typeof t || (i = this), e && ((n = {})[e._listenId] = e);
                    for (var o in n) e = n[o], e.off(t, i, this), (r || s.isEmpty(e._events)) && delete this._listeningTo[o];
                    return this
                }
            },
            a = /\s+/,
            l = function (e, t, i, n) {
                if (!i) return !0;
                if ("object" == typeof i) {
                    for (var r in i) e[t].apply(e, [r, i[r]].concat(n));
                    return !1
                }
                if (a.test(i)) {
                    for (var s = i.split(a), o = 0, l = s.length; l > o; o++) e[t].apply(e, [s[o]].concat(n));
                    return !1
                }
                return !0
            },
            c = function (e, t) {
                var i, n = -1,
                    r = e.length,
                    s = t[0],
                    o = t[1],
                    a = t[2];
                switch (t.length) {
                case 0:
                    for (; ++n < r;)(i = e[n]).callback.call(i.ctx);
                    return;
                case 1:
                    for (; ++n < r;)(i = e[n]).callback.call(i.ctx, s);
                    return;
                case 2:
                    for (; ++n < r;)(i = e[n]).callback.call(i.ctx, s, o);
                    return;
                case 3:
                    for (; ++n < r;)(i = e[n]).callback.call(i.ctx, s, o, a);
                    return;
                default:
                    for (; ++n < r;)(i = e[n]).callback.apply(i.ctx, t)
                }
            },
            u = {
                listenTo: "on",
                listenToOnce: "once"
            };
        s.each(u, function (e, t) {
            o[t] = function (t, i, n) {
                var r = this._listeningTo || (this._listeningTo = {}),
                    o = t._listenId || (t._listenId = s.uniqueId("l"));
                return r[o] = t, n || "object" != typeof i || (n = this), t[e](i, n, this), this
            }
        }), o.bind = o.on, o.unbind = o.off, s.extend(e, o);
        var h = e.Model = function (e, t) {
            var i = e || {};
            t || (t = {}), this.cid = s.uniqueId("c"), this.attributes = {}, t.collection && (this.collection = t.collection), t.parse && (i = this.parse(i, t) || {}), i = s.defaults({}, i, s.result(this, "defaults")), this.set(i, t), this.changed = {}, this.initialize.apply(this, arguments)
        };
        s.extend(h.prototype, o, {
            changed: null,
            validationError: null,
            idAttribute: "id",
            initialize: function () {},
            toJSON: function () {
                return s.clone(this.attributes)
            },
            sync: function () {
                return e.sync.apply(this, arguments)
            },
            get: function (e) {
                return this.attributes[e]
            },
            escape: function (e) {
                return s.escape(this.get(e))
            },
            has: function (e) {
                return null != this.get(e)
            },
            set: function (e, t, i) {
                var n, r, o, a, l, c, u, h;
                if (null == e) return this;
                if ("object" == typeof e ? (r = e, i = t) : (r = {})[e] = t, i || (i = {}), !this._validate(r, i)) return !1;
                o = i.unset, l = i.silent, a = [], c = this._changing, this._changing = !0, c || (this._previousAttributes = s.clone(this.attributes), this.changed = {}), h = this.attributes, u = this._previousAttributes, this.idAttribute in r && (this.id = r[this.idAttribute]);
                for (n in r) t = r[n], s.isEqual(h[n], t) || a.push(n), s.isEqual(u[n], t) ? delete this.changed[n] : this.changed[n] = t, o ? delete h[n] : h[n] = t;
                if (!l) {
                    a.length && (this._pending = !0);
                    for (var d = 0, p = a.length; p > d; d++) this.trigger("change:" + a[d], this, h[a[d]], i)
                }
                if (c) return this;
                if (!l)
                    for (; this._pending;) this._pending = !1, this.trigger("change", this, i);
                return this._pending = !1, this._changing = !1, this
            },
            unset: function (e, t) {
                return this.set(e, void 0, s.extend({}, t, {
                    unset: !0
                }))
            },
            clear: function (e) {
                var t = {};
                for (var i in this.attributes) t[i] = void 0;
                return this.set(t, s.extend({}, e, {
                    unset: !0
                }))
            },
            hasChanged: function (e) {
                return null == e ? !s.isEmpty(this.changed) : s.has(this.changed, e)
            },
            changedAttributes: function (e) {
                if (!e) return this.hasChanged() ? s.clone(this.changed) : !1;
                var t, i = !1,
                    n = this._changing ? this._previousAttributes : this.attributes;
                for (var r in e) s.isEqual(n[r], t = e[r]) || ((i || (i = {}))[r] = t);
                return i
            },
            previous: function (e) {
                return null != e && this._previousAttributes ? this._previousAttributes[e] : null
            },
            previousAttributes: function () {
                return s.clone(this._previousAttributes)
            },
            fetch: function (e) {
                e = e ? s.clone(e) : {}, void 0 === e.parse && (e.parse = !0);
                var t = this,
                    i = e.success;
                return e.success = function (n) {
                    return t.set(t.parse(n, e), e) ? (i && i(t, n, e), void t.trigger("sync", t, n, e)) : !1
                }, N(this, e), this.sync("read", this, e)
            },
            save: function (e, t, i) {
                var n, r, o, a = this.attributes;
                if (null == e || "object" == typeof e ? (n = e, i = t) : (n = {})[e] = t, i = s.extend({
                    validate: !0
                }, i), n && !i.wait) {
                    if (!this.set(n, i)) return !1
                } else if (!this._validate(n, i)) return !1;
                n && i.wait && (this.attributes = s.extend({}, a, n)), void 0 === i.parse && (i.parse = !0);
                var l = this,
                    c = i.success;
                return i.success = function (e) {
                    l.attributes = a;
                    var t = l.parse(e, i);
                    return i.wait && (t = s.extend(n || {}, t)), s.isObject(t) && !l.set(t, i) ? !1 : (c && c(l, e, i), void l.trigger("sync", l, e, i))
                }, N(this, i), r = this.isNew() ? "create" : i.patch ? "patch" : "update", "patch" === r && (i.attrs = n), o = this.sync(r, this, i), n && i.wait && (this.attributes = a), o
            },
            destroy: function (e) {
                e = e ? s.clone(e) : {};
                var t = this,
                    i = e.success,
                    n = function () {
                        t.trigger("destroy", t, t.collection, e)
                    };
                if (e.success = function (r) {
                    (e.wait || t.isNew()) && n(), i && i(t, r, e), t.isNew() || t.trigger("sync", t, r, e)
                }, this.isNew()) return e.success(), !1;
                N(this, e);
                var r = this.sync("delete", this, e);
                return e.wait || n(), r
            },
            url: function () {
                var e = s.result(this, "urlRoot") || s.result(this.collection, "url") || O();
                return this.isNew() ? e : e + ("/" === e.charAt(e.length - 1) ? "" : "/") + encodeURIComponent(this.id)
            },
            parse: function (e) {
                return e
            },
            clone: function () {
                return new this.constructor(this.attributes)
            },
            isNew: function () {
                return null == this.id
            },
            isValid: function (e) {
                return this._validate({}, s.extend(e || {}, {
                    validate: !0
                }))
            },
            _validate: function (e, t) {
                if (!t.validate || !this.validate) return !0;
                e = s.extend({}, this.attributes, e);
                var i = this.validationError = this.validate(e, t) || null;
                return i ? (this.trigger("invalid", this, i, s.extend(t, {
                    validationError: i
                })), !1) : !0
            }
        });
        var d = ["keys", "values", "pairs", "invert", "pick", "omit"];
        s.each(d, function (e) {
            h.prototype[e] = function () {
                var t = r.call(arguments);
                return t.unshift(this.attributes), s[e].apply(s, t)
            }
        });
        var p = e.Collection = function (e, t) {
                t || (t = {}), t.model && (this.model = t.model), void 0 !== t.comparator && (this.comparator = t.comparator), this._reset(), this.initialize.apply(this, arguments), e && this.reset(e, s.extend({
                    silent: !0
                }, t))
            },
            f = {
                add: !0,
                remove: !0,
                merge: !0
            },
            g = {
                add: !0,
                remove: !1
            };
        s.extend(p.prototype, o, {
            model: h,
            initialize: function () {},
            toJSON: function (e) {
                return this.map(function (t) {
                    return t.toJSON(e)
                })
            },
            sync: function () {
                return e.sync.apply(this, arguments)
            },
            add: function (e, t) {
                return this.set(e, s.extend({
                    merge: !1
                }, t, g))
            },
            remove: function (e, t) {
                var i = !s.isArray(e);
                e = i ? [e] : s.clone(e), t || (t = {});
                var n, r, o, a;
                for (n = 0, r = e.length; r > n; n++) a = e[n] = this.get(e[n]), a && (delete this._byId[a.id], delete this._byId[a.cid], o = this.indexOf(a), this.models.splice(o, 1), this.length--, t.silent || (t.index = o, a.trigger("remove", a, this, t)), this._removeReference(a));
                return i ? e[0] : e
            },
            set: function (e, t) {
                t = s.defaults({}, t, f), t.parse && (e = this.parse(e, t));
                var i = !s.isArray(e);
                e = i ? e ? [e] : [] : s.clone(e);
                var n, r, o, a, l, c, u, d = t.at,
                    p = this.model,
                    g = this.comparator && null == d && t.sort !== !1,
                    m = s.isString(this.comparator) ? this.comparator : null,
                    v = [],
                    y = [],
                    b = {},
                    w = t.add,
                    _ = t.merge,
                    x = t.remove,
                    k = !g && w && x ? [] : !1;
                for (n = 0, r = e.length; r > n; n++) {
                    if (l = e[n], o = l instanceof h ? a = l : l[p.prototype.idAttribute], c = this.get(o)) x && (b[c.cid] = !0), _ && (l = l === a ? a.attributes : l, t.parse && (l = c.parse(l, t)), c.set(l, t), g && !u && c.hasChanged(m) && (u = !0)), e[n] = c;
                    else if (w) {
                        if (a = e[n] = this._prepareModel(l, t), !a) continue;
                        v.push(a), a.on("all", this._onModelEvent, this), this._byId[a.cid] = a, null != a.id && (this._byId[a.id] = a)
                    }
                    k && k.push(c || a)
                }
                if (x) {
                    for (n = 0, r = this.length; r > n; ++n) b[(a = this.models[n]).cid] || y.push(a);
                    y.length && this.remove(y, t)
                }
                if (v.length || k && k.length)
                    if (g && (u = !0), this.length += v.length, null != d)
                        for (n = 0, r = v.length; r > n; n++) this.models.splice(d + n, 0, v[n]);
                    else {
                        k && (this.models.length = 0);
                        var T = k || v;
                        for (n = 0, r = T.length; r > n; n++) this.models.push(T[n])
                    }
                if (u && this.sort({
                    silent: !0
                }), !t.silent) {
                    for (n = 0, r = v.length; r > n; n++)(a = v[n]).trigger("add", a, this, t);
                    (u || k && k.length) && this.trigger("sort", this, t)
                }
                return i ? e[0] : e
            },
            reset: function (e, t) {
                t || (t = {});
                for (var i = 0, n = this.models.length; n > i; i++) this._removeReference(this.models[i]);
                return t.previousModels = this.models, this._reset(), e = this.add(e, s.extend({
                    silent: !0
                }, t)), t.silent || this.trigger("reset", this, t), e
            },
            push: function (e, t) {
                return this.add(e, s.extend({
                    at: this.length
                }, t))
            },
            pop: function (e) {
                var t = this.at(this.length - 1);
                return this.remove(t, e), t
            },
            unshift: function (e, t) {
                return this.add(e, s.extend({
                    at: 0
                }, t))
            },
            shift: function (e) {
                var t = this.at(0);
                return this.remove(t, e), t
            },
            slice: function () {
                return r.apply(this.models, arguments)
            },
            get: function (e) {
                return null == e ? void 0 : this._byId[e.id] || this._byId[e.cid] || this._byId[e]
            },
            at: function (e) {
                return this.models[e]
            },
            where: function (e, t) {
                return s.isEmpty(e) ? t ? void 0 : [] : this[t ? "find" : "filter"](function (t) {
                    for (var i in e)
                        if (e[i] !== t.get(i)) return !1;
                    return !0
                })
            },
            findWhere: function (e) {
                return this.where(e, !0)
            },
            sort: function (e) {
                if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
                return e || (e = {}), s.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(s.bind(this.comparator, this)), e.silent || this.trigger("sort", this, e), this
            },
            pluck: function (e) {
                return s.invoke(this.models, "get", e)
            },
            fetch: function (e) {
                e = e ? s.clone(e) : {}, void 0 === e.parse && (e.parse = !0);
                var t = e.success,
                    i = this;
                return e.success = function (n) {
                    var r = e.reset ? "reset" : "set";
                    i[r](n, e), t && t(i, n, e), i.trigger("sync", i, n, e)
                }, N(this, e), this.sync("read", this, e)
            },
            create: function (e, t) {
                if (t = t ? s.clone(t) : {}, !(e = this._prepareModel(e, t))) return !1;
                t.wait || this.add(e, t);
                var i = this,
                    n = t.success;
                return t.success = function (e, t, r) {
                    r.wait && i.add(e, r), n && n(e, t, r)
                }, e.save(null, t), e
            },
            parse: function (e) {
                return e
            },
            clone: function () {
                return new this.constructor(this.models)
            },
            _reset: function () {
                this.length = 0, this.models = [], this._byId = {}
            },
            _prepareModel: function (e, t) {
                if (e instanceof h) return e.collection || (e.collection = this), e;
                t = t ? s.clone(t) : {}, t.collection = this;
                var i = new this.model(e, t);
                return i.validationError ? (this.trigger("invalid", this, i.validationError, t), !1) : i
            },
            _removeReference: function (e) {
                this === e.collection && delete e.collection, e.off("all", this._onModelEvent, this)
            },
            _onModelEvent: function (e, t, i, n) {
                ("add" !== e && "remove" !== e || i === this) && ("destroy" === e && this.remove(t, n), t && e === "change:" + t.idAttribute && (delete this._byId[t.previous(t.idAttribute)], null != t.id && (this._byId[t.id] = t)), this.trigger.apply(this, arguments))
            }
        });
        var m = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "difference", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain"];
        s.each(m, function (e) {
            p.prototype[e] = function () {
                var t = r.call(arguments);
                return t.unshift(this.models), s[e].apply(s, t)
            }
        });
        var v = ["groupBy", "countBy", "sortBy"];
        s.each(v, function (e) {
            p.prototype[e] = function (t, i) {
                var n = s.isFunction(t) ? t : function (e) {
                    return e.get(t)
                };
                return s[e](this.models, n, i)
            }
        });
        var y = e.View = function (e) {
                this.cid = s.uniqueId("view"), e || (e = {}), s.extend(this, s.pick(e, w)), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents()
            },
            b = /^(\S+)\s*(.*)$/,
            w = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
        s.extend(y.prototype, o, {
            tagName: "div",
            $: function (e) {
                return this.$el.find(e)
            },
            initialize: function () {},
            render: function () {
                return this
            },
            remove: function () {
                return this.$el.remove(), this.stopListening(), this
            },
            setElement: function (t, i) {
                return this.$el && this.undelegateEvents(), this.$el = t instanceof e.$ ? t : e.$(t), this.el = this.$el[0], i !== !1 && this.delegateEvents(), this
            },
            delegateEvents: function (e) {
                if (!e && !(e = s.result(this, "events"))) return this;
                this.undelegateEvents();
                for (var t in e) {
                    var i = e[t];
                    if (s.isFunction(i) || (i = this[e[t]]), i) {
                        var n = t.match(b),
                            r = n[1],
                            o = n[2];
                        i = s.bind(i, this), r += ".delegateEvents" + this.cid, "" === o ? this.$el.on(r, i) : this.$el.on(r, o, i)
                    }
                }
                return this
            },
            undelegateEvents: function () {
                return this.$el.off(".delegateEvents" + this.cid), this
            },
            _ensureElement: function () {
                if (this.el) this.setElement(s.result(this, "el"), !1);
                else {
                    var t = s.extend({}, s.result(this, "attributes"));
                    this.id && (t.id = s.result(this, "id")), this.className && (t["class"] = s.result(this, "className"));
                    var i = e.$("<" + s.result(this, "tagName") + ">").attr(t);
                    this.setElement(i, !1)
                }
            }
        }), e.sync = function (t, i, n) {
            var r = x[t];
            s.defaults(n || (n = {}), {
                emulateHTTP: e.emulateHTTP,
                emulateJSON: e.emulateJSON
            });
            var o = {
                type: r,
                dataType: "json"
            };
            if (n.url || (o.url = s.result(i, "url") || O()), null != n.data || !i || "create" !== t && "update" !== t && "patch" !== t || (o.contentType = "application/json", o.data = JSON.stringify(n.attrs || i.toJSON(n))), n.emulateJSON && (o.contentType = "application/x-www-form-urlencoded", o.data = o.data ? {
                model: o.data
            } : {}), n.emulateHTTP && ("PUT" === r || "DELETE" === r || "PATCH" === r)) {
                o.type = "POST", n.emulateJSON && (o.data._method = r);
                var a = n.beforeSend;
                n.beforeSend = function (e) {
                    return e.setRequestHeader("X-HTTP-Method-Override", r), a ? a.apply(this, arguments) : void 0
                }
            }
            "GET" === o.type || n.emulateJSON || (o.processData = !1), "PATCH" === o.type && _ && (o.xhr = function () {
                return new ActiveXObject("Microsoft.XMLHTTP")
            });
            var l = n.xhr = e.ajax(s.extend(o, n));
            return i.trigger("request", i, l, n), l
        };
        var _ = !("undefined" == typeof window || !window.ActiveXObject || window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent),
            x = {
                create: "POST",
                update: "PUT",
                patch: "PATCH",
                "delete": "DELETE",
                read: "GET"
            };
        e.ajax = function () {
            return e.$.ajax.apply(e.$, arguments)
        };
        var k = e.Router = function (e) {
                e || (e = {}), e.routes && (this.routes = e.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
            },
            T = /\((.*?)\)/g,
            C = /(\(\?)?:\w+/g,
            S = /\*\w+/g,
            $ = /[\-{}\[\]+?.,\\\^$|#\s]/g;
        s.extend(k.prototype, o, {
            initialize: function () {},
            route: function (t, i, n) {
                s.isRegExp(t) || (t = this._routeToRegExp(t)), s.isFunction(i) && (n = i, i = ""), n || (n = this[i]);
                var r = this;
                return e.history.route(t, function (s) {
                    var o = r._extractParameters(t, s);
                    n && n.apply(r, o), r.trigger.apply(r, ["route:" + i].concat(o)), r.trigger("route", i, o), e.history.trigger("route", r, i, o)
                }), this
            },
            navigate: function (t, i) {
                return e.history.navigate(t, i), this
            },
            _bindRoutes: function () {
                if (this.routes) {
                    this.routes = s.result(this, "routes");
                    for (var e, t = s.keys(this.routes); null != (e = t.pop());) this.route(e, this.routes[e])
                }
            },
            _routeToRegExp: function (e) {
                return e = e.replace($, "\\$&").replace(T, "(?:$1)?").replace(C, function (e, t) {
                    return t ? e : "([^/]+)"
                }).replace(S, "(.*?)"), new RegExp("^" + e + "$")
            },
            _extractParameters: function (e, t) {
                var i = e.exec(t).slice(1);
                return s.map(i, function (e) {
                    return e ? decodeURIComponent(e) : null
                })
            }
        });
        var D = e.History = function () {
                this.handlers = [], s.bindAll(this, "checkUrl"), "undefined" != typeof window && (this.location = window.location, this.history = window.history)
            },
            H = /^[#\/]|\s+$/g,
            E = /^\/+|\/+$/g,
            P = /msie [\w.]+/,
            A = /\/$/,
            M = /[?#].*$/;
        D.started = !1, s.extend(D.prototype, o, {
            interval: 50,
            getHash: function (e) {
                var t = (e || this).location.href.match(/#(.*)$/);
                return t ? t[1] : ""
            },
            getFragment: function (e, t) {
                if (null == e)
                    if (this._hasPushState || !this._wantsHashChange || t) {
                        e = this.location.pathname;
                        var i = this.root.replace(A, "");
                        e.indexOf(i) || (e = e.slice(i.length))
                    } else e = this.getHash();
                return e.replace(H, "")
            },
            start: function (t) {
                if (D.started) throw new Error("Backbone.history has already been started");
                D.started = !0, this.options = s.extend({
                    root: "/"
                }, this.options, t), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
                var i = this.getFragment(),
                    n = document.documentMode,
                    r = P.exec(navigator.userAgent.toLowerCase()) && (!n || 7 >= n);
                this.root = ("/" + this.root + "/").replace(E, "/"), r && this._wantsHashChange && (this.iframe = e.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow, this.navigate(i)), this._hasPushState ? e.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !r ? e.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = i;
                var o = this.location,
                    a = o.pathname.replace(/[^\/]$/, "$&/") === this.root;
                if (this._wantsHashChange && this._wantsPushState) {
                    if (!this._hasPushState && !a) return this.fragment = this.getFragment(null, !0), this.location.replace(this.root + this.location.search + "#" + this.fragment), !0;
                    this._hasPushState && a && o.hash && (this.fragment = this.getHash().replace(H, ""), this.history.replaceState({}, document.title, this.root + this.fragment + o.search))
                }
                return this.options.silent ? void 0 : this.loadUrl()
            },
            stop: function () {
                e.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl), clearInterval(this._checkUrlInterval), D.started = !1
            },
            route: function (e, t) {
                this.handlers.unshift({
                    route: e,
                    callback: t
                })
            },
            checkUrl: function () {
                var e = this.getFragment();
                return e === this.fragment && this.iframe && (e = this.getFragment(this.getHash(this.iframe))), e === this.fragment ? !1 : (this.iframe && this.navigate(e), void this.loadUrl())
            },
            loadUrl: function (e) {
                return e = this.fragment = this.getFragment(e), s.any(this.handlers, function (t) {
                    return t.route.test(e) ? (t.callback(e), !0) : void 0
                })
            },
            navigate: function (e, t) {
                if (!D.started) return !1;
                t && t !== !0 || (t = {
                    trigger: !!t
                });
                var i = this.root + (e = this.getFragment(e || ""));
                if (e = e.replace(M, ""), this.fragment !== e) {
                    if (this.fragment = e, "" === e && "/" !== i && (i = i.slice(0, -1)), this._hasPushState) this.history[t.replace ? "replaceState" : "pushState"]({}, document.title, i);
                    else {
                        if (!this._wantsHashChange) return this.location.assign(i);
                        this._updateHash(this.location, e, t.replace), this.iframe && e !== this.getFragment(this.getHash(this.iframe)) && (t.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, e, t.replace))
                    }
                    return t.trigger ? this.loadUrl(e) : void 0
                }
            },
            _updateHash: function (e, t, i) {
                if (i) {
                    var n = e.href.replace(/(javascript:|#).*$/, "");
                    e.replace(n + "#" + t)
                } else e.hash = "#" + t
            }
        }), e.history = new D;
        var I = function (e, t) {
            var i, n = this;
            i = e && s.has(e, "constructor") ? e.constructor : function () {
                return n.apply(this, arguments)
            }, s.extend(i, n, t);
            var r = function () {
                this.constructor = i
            };
            return r.prototype = n.prototype, i.prototype = new r, e && s.extend(i.prototype, e), i.__super__ = n.prototype, i
        };
        h.extend = p.extend = k.extend = y.extend = D.extend = I;
        var O = function () {
                throw new Error('A "url" property or function must be specified')
            },
            N = function (e, t) {
                var i = t.error;
                t.error = function (n) {
                    i && i(e, n, t), e.trigger("error", e, n, t)
                }
            }
    }.call(this), ! function (e) {
        e.fn.rating = function () {
            function t(t, i) {
                var n = e(t).find("[data-value=" + i + "]");
                n.removeClass("glyphicon-star-empty").addClass("glyphicon-star"), n.prevAll("[data-value]").removeClass("glyphicon-star-empty").addClass("glyphicon-star"), n.nextAll("[data-value]").removeClass("glyphicon-star").addClass("glyphicon-star-empty")
            }

            function i(t) {
                var i = e(t);
                i.find("[data-value]").removeClass("glyphicon-star").addClass("glyphicon-star-empty")
            }

            function n(e, t) {
                e.val(t).trigger("change"), t === e.data("empty-value") ? e.siblings(".rating-clear").hide() : e.siblings(".rating-clear").show()
            }
            var r;
            for (r = this.length - 1; r >= 0; r--) {
                var s, o, a = e(this[r]),
                    l = a.data("max") || 5,
                    c = a.data("min") || 0,
                    u = a.data("clearable") || null,
                    h = "";
                for (o = c; l >= o; o++) h += ['<span class="glyphicon glyphicon-star-empty" data-value="', o, '"></span>'].join("");
                u && (h += [' <a class="rating-clear" style="display:none;" href="javascript:void">', '<span class="glyphicon glyphicon-remove"></span> ', u, "</a>"].join(""));
                var d = a.clone(!0).attr("type", "hidden").data("max", l).data("min", c);
                s = ['<div class="rating-input">', h, "</div>"].join(""), a.replaceWith(e(s).append(d))
            }
            e(".rating-input").on("mouseenter", "[data-value]", function () {
                var i = e(this);
                t(i.closest(".rating-input"), i.data("value"))
            }).on("mouseleave", "[data-value]", function () {
                var n = e(this),
                    r = n.siblings("input"),
                    s = r.val(),
                    o = r.data("min"),
                    a = r.data("max");
                s >= o && a >= s ? t(n.closest(".rating-input"), s) : i(n.closest(".rating-input"))
            }).on("click", "[data-value]", function (t) {
                var i = e(this),
                    r = i.data("value"),
                    s = i.siblings("input");
                return n(s, r), t.preventDefault(), !1
            }).on("click", ".rating-clear", function (t) {
                var r = e(this),
                    s = r.siblings("input");
                return n(s, s.data("empty-value")), i(r.closest(".rating-input")), t.preventDefault(), !1
            }).each(function () {
                var n = e(this).find("input"),
                    r = n.val(),
                    s = n.data("min"),
                    o = n.data("max");
                "" !== r && +r >= s && o >= +r ? (t(this, r), e(this).find(".rating-clear").show()) : (n.val(n.data("empty-value")), i(this))
            })
        }, e(function () {
            e("input.rating[type=number]").length > 0 && e("input.rating[type=number]").rating()
        })
    }(jQuery), (window.jQuery || window.Zepto) && function (e) {
        e.fn.Swipe = function (t) {
            return this.each(function () {
                e(this).data("Swipe", new Swipe(e(this)[0], t))
            })
        }
    }(window.jQuery || window.Zepto), DynamicSwipe.prototype = {
        buildSlides: function () {
            return _([0, 1, -1]).map(function (e) {
                var t = $('<div class="swipe-slide" />');
                return this.renderSlide(t, e), t
            }.bind(this))
        },
        renderElement: function () {
            this.$el.addClass("swipe").prepend($('<div class="swipe-wrap" />').append(this.slides[0], this.slides[1], this.slides[2]))
        },
        swipeSlided: function (e) {
            this.onSwipeSlided();
            var t = this.index;
            this.index = e, e === (t + 1) % 3 ? (this.virtualIndex += 1, this.renderSlide(this.slideAt(2), this.virtualIndex + 1)) : e === (t + 2) % 3 && (this.virtualIndex -= 1, this.renderSlide(this.slideAt(0), this.virtualIndex - 1)), this.updateVisibilityClasses()
        },
        slideAt: function (e) {
            return this.slides[(2 + e + this.index) % 3]
        },
        next: function () {
            this.swipe.next()
        },
        prev: function () {
            this.swipe.prev()
        },
        updateVisibilityClasses: function () {
            this.slideAt(0).removeClass("visible"), this.slideAt(1).addClass("visible"), this.slideAt(2).removeClass("visible")
        }
    }, ! function (e, t, i) {
        var n = this,
            r = n.document,
            s = e(r),
            o = e(n),
            a = Array.prototype,
            l = 1.32,
            c = !0,
            u = 3e4,
            h = !1,
            d = navigator.userAgent.toLowerCase(),
            p = n.location.hash.replace(/#\//, ""),
            f = n.location.protocol,
            g = Math,
            m = function () {},
            v = function () {
                return !1
            },
            y = function () {
                var e = 3,
                    t = r.createElement("div"),
                    n = t.getElementsByTagName("i");
                do t.innerHTML = "<!--[if gt IE " + ++e + "]><i></i><![endif]-->"; while (n[0]);
                return e > 4 ? e : i
            }(),
            b = function () {
                return {
                    html: r.documentElement,
                    body: r.body,
                    head: r.getElementsByTagName("head")[0],
                    title: r.title
                }
            },
            w = n.parent !== n.self,
            _ = "data ready thumbnail loadstart loadfinish image play pause progress fullscreen_enter fullscreen_exit idle_enter idle_exit rescale lightbox_open lightbox_close lightbox_image",
            x = function () {
                var t = [];
                return e.each(_.split(" "), function (e, i) {
                    t.push(i), /_/.test(i) && t.push(i.replace(/_/g, ""))
                }), t
            }(),
            k = function (t) {
                var i;
                return "object" != typeof t ? t : (e.each(t, function (n, r) {
                    /^[a-z]+_/.test(n) && (i = "", e.each(n.split("_"), function (e, t) {
                        i += e > 0 ? t.substr(0, 1).toUpperCase() + t.substr(1) : t
                    }), t[i] = r, delete t[n])
                }), t)
            },
            T = function (i) {
                return e.inArray(i, x) > -1 ? t[i.toUpperCase()] : i
            },
            C = {
                youtube: {
                    reg: /https?:\/\/(?:[a-zA_Z]{2,3}.)?(?:youtube\.com\/watch\?)((?:[\w\d\-\_\=]+&amp;(?:amp;)?)*v(?:&lt;[A-Z]+&gt;)?=([0-9a-zA-Z\-\_]+))/i,
                    embed: function () {
                        return "http://www.youtube.com/embed/" + this.id
                    },
                    getUrl: function () {
                        return f + "//gdata.youtube.com/feeds/api/videos/" + this.id + "?v=2&alt=json-in-script&callback=?"
                    },
                    get_thumb: function (e) {
                        return e.entry.media$group.media$thumbnail[2].url
                    },
                    get_image: function (e) {
                        return e.entry.yt$hd ? f + "//img.youtube.com/vi/" + this.id + "/maxresdefault.jpg" : e.entry.media$group.media$thumbnail[3].url
                    }
                },
                vimeo: {
                    reg: /https?:\/\/(?:www\.)?(vimeo\.com)\/(?:hd#)?([0-9]+)/i,
                    embed: function () {
                        return "http://player.vimeo.com/video/" + this.id
                    },
                    getUrl: function () {
                        return f + "//vimeo.com/api/v2/video/" + this.id + ".json?callback=?"
                    },
                    get_thumb: function (e) {
                        return e[0].thumbnail_medium
                    },
                    get_image: function (e) {
                        return e[0].thumbnail_large
                    }
                },
                dailymotion: {
                    reg: /https?:\/\/(?:www\.)?(dailymotion\.com)\/video\/([^_]+)/,
                    embed: function () {
                        return f + "//www.dailymotion.com/embed/video/" + this.id
                    },
                    getUrl: function () {
                        return "https://api.dailymotion.com/video/" + this.id + "?fields=thumbnail_240_url,thumbnail_720_url&callback=?"
                    },
                    get_thumb: function (e) {
                        return e.thumbnail_240_url
                    },
                    get_image: function (e) {
                        return e.thumbnail_720_url
                    }
                },
                _inst: []
            },
            S = function (t, i) {
                for (var n = 0; n < C._inst.length; n++)
                    if (C._inst[n].id === i && C._inst[n].type == t) return C._inst[n];
                this.type = t, this.id = i, this.readys = [], C._inst.push(this);
                var r = this;
                e.extend(this, C[t]), e.getJSON(this.getUrl(), function (t) {
                    r.data = t, e.each(r.readys, function (e, t) {
                        t(r.data)
                    }), r.readys = []
                }), this.getMedia = function (e, t, i) {
                    i = i || m;
                    var n = this,
                        r = function (i) {
                            t(n["get_" + e](i))
                        };
                    try {
                        n.data ? r(n.data) : n.readys.push(r)
                    } catch (s) {
                        i()
                    }
                }
            },
            $ = function (e) {
                var t;
                for (var i in C)
                    if (t = e && C[i].reg && e.match(C[i].reg), t && t.length) return {
                        id: t[2],
                        provider: i
                    };
                return !1
            },
            D = {
                support: function () {
                    var e = b().html;
                    return !w && (e.requestFullscreen || e.mozRequestFullScreen || e.webkitRequestFullScreen)
                }(),
                callback: m,
                enter: function (e, t, i) {
                    this.instance = e, this.callback = t || m, i = i || b().html, i.requestFullscreen ? i.requestFullscreen() : i.mozRequestFullScreen ? i.mozRequestFullScreen() : i.webkitRequestFullScreen && i.webkitRequestFullScreen()
                },
                exit: function (e) {
                    this.callback = e || m, r.exitFullscreen ? r.exitFullscreen() : r.mozCancelFullScreen ? r.mozCancelFullScreen() : r.webkitCancelFullScreen && r.webkitCancelFullScreen()
                },
                instance: null,
                listen: function () {
                    if (this.support) {
                        var e = function () {
                            if (D.instance) {
                                var e = D.instance._fullscreen;
                                r.fullscreen || r.mozFullScreen || r.webkitIsFullScreen ? e._enter(D.callback) : e._exit(D.callback)
                            }
                        };
                        r.addEventListener("fullscreenchange", e, !1), r.addEventListener("mozfullscreenchange", e, !1), r.addEventListener("webkitfullscreenchange", e, !1)
                    }
                }
            },
            H = [],
            E = [],
            P = !1,
            A = !1,
            M = [],
            I = function (i) {
                t.theme = i, e.each(M, function (e, t) {
                    t._initialized || t._init.call(t)
                }), M = []
            },
            O = function () {
                return {
                    clearTimer: function (i) {
                        e.each(t.get(), function () {
                            this.clearTimer(i)
                        })
                    },
                    addTimer: function (i) {
                        e.each(t.get(), function () {
                            this.addTimer(i)
                        })
                    },
                    array: function (e) {
                        return a.slice.call(e, 0)
                    },
                    create: function (e, t) {
                        t = t || "div";
                        var i = r.createElement(t);
                        return i.className = e, i
                    },
                    removeFromArray: function (t, i) {
                        return e.each(t, function (e, n) {
                            return n == i ? (t.splice(e, 1), !1) : void 0
                        }), t
                    },
                    getScriptPath: function (t) {
                        t = t || e("script:last").attr("src");
                        var i = t.split("/");
                        return 1 == i.length ? "" : (i.pop(), i.join("/") + "/")
                    },
                    animate: function () {
                        var i, s, o, a, l, c, u, h = function (e) {
                                var t, i = "transition WebkitTransition MozTransition OTransition".split(" ");
                                if (n.opera) return !1;
                                for (t = 0; i[t]; t++)
                                    if ("undefined" != typeof e[i[t]]) return i[t];
                                return !1
                            }((r.body || r.documentElement).style),
                            d = {
                                MozTransition: "transitionend",
                                OTransition: "oTransitionEnd",
                                WebkitTransition: "webkitTransitionEnd",
                                transition: "transitionend"
                            }[h],
                            p = {
                                _default: [.25, .1, .25, 1],
                                galleria: [.645, .045, .355, 1],
                                galleriaIn: [.55, .085, .68, .53],
                                galleriaOut: [.25, .46, .45, .94],
                                ease: [.25, 0, .25, 1],
                                linear: [.25, .25, .75, .75],
                                "ease-in": [.42, 0, 1, 1],
                                "ease-out": [0, 0, .58, 1],
                                "ease-in-out": [.42, 0, .58, 1]
                            },
                            f = function (t, i, n) {
                                var r = {};
                                n = n || "transition", e.each("webkit moz ms o".split(" "), function () {
                                    r["-" + this + "-" + n] = i
                                }), t.css(r)
                            },
                            g = function (e) {
                                f(e, "none", "transition"), t.WEBKIT && t.TOUCH && (f(e, "translate3d(0,0,0)", "transform"), e.data("revert") && (e.css(e.data("revert")), e.data("revert", null)))
                            };
                        return function (r, v, y) {
                            return y = e.extend({
                                duration: 400,
                                complete: m,
                                stop: !1
                            }, y), r = e(r), y.duration ? h ? (y.stop && (r.unbind(d), g(r)), i = !1, e.each(v, function (e, t) {
                                u = r.css(e), O.parseValue(u) != O.parseValue(t) && (i = !0), r.css(e, u)
                            }), i ? (s = [], o = y.easing in p ? p[y.easing] : p._default, a = " " + y.duration + "ms cubic-bezier(" + o.join(",") + ")", void n.setTimeout(function (i, n, r, o) {
                                return function () {
                                    i.one(n, function (e) {
                                        return function () {
                                            g(e), y.complete.call(e[0])
                                        }
                                    }(i)), t.WEBKIT && t.TOUCH && (l = {}, c = [0, 0, 0], e.each(["left", "top"], function (e, t) {
                                        t in r && (c[e] = O.parseValue(r[t]) - O.parseValue(i.css(t)) + "px", l[t] = r[t], delete r[t])
                                    }), (c[0] || c[1]) && (i.data("revert", l), s.push("-webkit-transform" + o), f(i, "translate3d(" + c.join(",") + ")", "transform"))), e.each(r, function (e) {
                                        s.push(e + o)
                                    }), f(i, s.join(",")), i.css(r)
                                }
                            }(r, d, v, a), 2)) : void n.setTimeout(function () {
                                y.complete.call(r[0])
                            }, y.duration)) : void r.animate(v, y) : (r.css(v), void y.complete.call(r[0]))
                        }
                    }(),
                    removeAlpha: function (e) {
                        if (e instanceof jQuery && (e = e[0]), 9 > y && e) {
                            var t = e.style,
                                i = e.currentStyle,
                                n = i && i.filter || t.filter || "";
                            /alpha/.test(n) && (t.filter = n.replace(/alpha\([^)]*\)/i, ""))
                        }
                    },
                    forceStyles: function (t, i) {
                        t = e(t), t.attr("style") && t.data("styles", t.attr("style")).removeAttr("style"), t.css(i)
                    },
                    revertStyles: function () {
                        e.each(O.array(arguments), function (t, i) {
                            i = e(i), i.removeAttr("style"), i.attr("style", ""), i.data("styles") && i.attr("style", i.data("styles")).data("styles", null)
                        })
                    },
                    moveOut: function (e) {
                        O.forceStyles(e, {
                            position: "absolute",
                            left: -1e4
                        })
                    },
                    moveIn: function () {
                        O.revertStyles.apply(O, O.array(arguments))
                    },
                    hide: function (t, i, n) {
                        n = n || m;
                        var r = e(t);
                        t = r[0], r.data("opacity") || r.data("opacity", r.css("opacity"));
                        var s = {
                            opacity: 0
                        };
                        if (i) {
                            var o = 9 > y && t ? function () {
                                O.removeAlpha(t), t.style.visibility = "hidden", n.call(t)
                            } : n;
                            O.animate(t, s, {
                                duration: i,
                                complete: o,
                                stop: !0
                            })
                        } else 9 > y && t ? (O.removeAlpha(t), t.style.visibility = "hidden") : r.css(s)
                    },
                    show: function (t, i, n) {
                        n = n || m;
                        var r = e(t);
                        t = r[0];
                        var s = parseFloat(r.data("opacity")) || 1,
                            o = {
                                opacity: s
                            };
                        if (i) {
                            9 > y && (r.css("opacity", 0), t.style.visibility = "visible");
                            var a = 9 > y && t ? function () {
                                1 == o.opacity && O.removeAlpha(t), n.call(t)
                            } : n;
                            O.animate(t, o, {
                                duration: i,
                                complete: a,
                                stop: !0
                            })
                        } else 9 > y && 1 == o.opacity && t ? (O.removeAlpha(t), t.style.visibility = "visible") : r.css(o)
                    },
                    wait: function (i) {
                        t._waiters = t._waiters || [], i = e.extend({
                            until: v,
                            success: m,
                            error: function () {
                                t.raise("Could not complete wait function.")
                            },
                            timeout: 3e3
                        }, i);
                        var r, s, o, a = O.timestamp(),
                            l = function () {
                                return s = O.timestamp(), r = s - a, O.removeFromArray(t._waiters, o), i.until(r) ? (i.success(), !1) : "number" == typeof i.timeout && s >= a + i.timeout ? (i.error(), !1) : void t._waiters.push(o = n.setTimeout(l, 10))
                            };
                        t._waiters.push(o = n.setTimeout(l, 10))
                    },
                    toggleQuality: function (e, t) {
                        7 !== y && 8 !== y || !e || "IMG" != e.nodeName.toUpperCase() || ("undefined" == typeof t && (t = "nearest-neighbor" === e.style.msInterpolationMode), e.style.msInterpolationMode = t ? "bicubic" : "nearest-neighbor")
                    },
                    insertStyleTag: function (t, i) {
                        if (!i || !e("#" + i).length) {
                            var n = r.createElement("style");
                            if (i && (n.id = i), b().head.appendChild(n), n.styleSheet) n.styleSheet.cssText = t;
                            else {
                                var s = r.createTextNode(t);
                                n.appendChild(s)
                            }
                        }
                    },
                    loadScript: function (t, i) {
                        var n = !1,
                            r = e("<script>").attr({
                                src: t,
                                async: !0
                            }).get(0);
                        r.onload = r.onreadystatechange = function () {
                            n || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (n = !0, r.onload = r.onreadystatechange = null, "function" == typeof i && i.call(this, this))
                        }, b().head.appendChild(r)
                    },
                    parseValue: function (e) {
                        if ("number" == typeof e) return e;
                        if ("string" == typeof e) {
                            var t = e.match(/\-?\d|\./g);
                            return t && t.constructor === Array ? 1 * t.join("") : 0
                        }
                        return 0
                    },
                    timestamp: function () {
                        return (new Date).getTime()
                    },
                    loadCSS: function (n, s, o) {
                        var a, l;
                        if (e("link[rel=stylesheet]").each(function () {
                            return new RegExp(n).test(this.href) ? (a = this, !1) : void 0
                        }), "function" == typeof s && (o = s, s = i), o = o || m, a) return o.call(a, a), a;
                        if (l = r.styleSheets.length, e("#" + s).length) e("#" + s).attr("href", n), l--;
                        else {
                            a = e("<link>").attr({
                                rel: "stylesheet",
                                href: n,
                                id: s
                            }).get(0);
                            var c = e('link[rel="stylesheet"], style');
                            if (c.length ? c.get(0).parentNode.insertBefore(a, c[0]) : b().head.appendChild(a), y && l >= 31) return void t.raise("You have reached the browser stylesheet limit (31)", !0)
                        } if ("function" == typeof o) {
                            var u = e("<s>").attr("id", "galleria-loader").hide().appendTo(b().body);
                            O.wait({
                                until: function () {
                                    return 1 == u.height()
                                },
                                success: function () {
                                    u.remove(), o.call(a, a)
                                },
                                error: function () {
                                    u.remove(), t.raise("Theme CSS could not load after 20 sec. " + (t.QUIRK ? "Your browser is in Quirks Mode, please add a correct doctype." : "Please download the latest theme at http://galleria.io/customer/."), !0)
                                },
                                timeout: 5e3
                            })
                        }
                        return a
                    }
                }
            }(),
            N = function (t) {
                var i = ".galleria-videoicon{width:60px;height:60px;position:absolute;top:50%;left:50%;z-index:1;margin:-30px 0 0 -30px;cursor:pointer;background:#000;background:rgba(0,0,0,.8);border-radius:3px;-webkit-transition:all 150ms}.galleria-videoicon i{width:0px;height:0px;border-style:solid;border-width:10px 0 10px 16px;display:block;border-color:transparent transparent transparent #ffffff;margin:20px 0 0 22px}.galleria-image:hover .galleria-videoicon{background:#000}";
                return O.insertStyleTag(i, "galleria-videoicon"), e(O.create("galleria-videoicon")).html("<i></i>").appendTo(t).click(function () {
                    e(this).siblings("img").mouseup()
                })
            },
            V = function () {
                var t = function (t, i, n, r) {
                    var s = this.getOptions("easing"),
                        o = this.getStageWidth(),
                        a = {
                            left: o * (t.rewind ? -1 : 1)
                        },
                        l = {
                            left: 0
                        };
                    n ? (a.opacity = 0, l.opacity = 1) : a.opacity = 1, e(t.next).css(a), O.animate(t.next, l, {
                        duration: t.speed,
                        complete: function (e) {
                            return function () {
                                i(), e.css({
                                    left: 0
                                })
                            }
                        }(e(t.next).add(t.prev)),
                        queue: !1,
                        easing: s
                    }), r && (t.rewind = !t.rewind), t.prev && (a = {
                        left: 0
                    }, l = {
                        left: o * (t.rewind ? 1 : -1)
                    }, n && (a.opacity = 1, l.opacity = 0), e(t.prev).css(a), O.animate(t.prev, l, {
                        duration: t.speed,
                        queue: !1,
                        easing: s,
                        complete: function () {
                            e(this).css("opacity", 0)
                        }
                    }))
                };
                return {
                    active: !1,
                    init: function (e, t, i) {
                        V.effects.hasOwnProperty(e) && V.effects[e].call(this, t, i)
                    },
                    effects: {
                        fade: function (t, i) {
                            e(t.next).css({
                                opacity: 0,
                                left: 0
                            }), O.animate(t.next, {
                                opacity: 1
                            }, {
                                duration: t.speed,
                                complete: i
                            }), t.prev && (e(t.prev).css("opacity", 1).show(), O.animate(t.prev, {
                                opacity: 0
                            }, {
                                duration: t.speed
                            }))
                        },
                        flash: function (t, i) {
                            e(t.next).css({
                                opacity: 0,
                                left: 0
                            }), t.prev ? O.animate(t.prev, {
                                opacity: 0
                            }, {
                                duration: t.speed / 2,
                                complete: function () {
                                    O.animate(t.next, {
                                        opacity: 1
                                    }, {
                                        duration: t.speed,
                                        complete: i
                                    })
                                }
                            }) : O.animate(t.next, {
                                opacity: 1
                            }, {
                                duration: t.speed,
                                complete: i
                            })
                        },
                        pulse: function (t, i) {
                            t.prev && e(t.prev).hide(), e(t.next).css({
                                opacity: 0,
                                left: 0
                            }).show(), O.animate(t.next, {
                                opacity: 1
                            }, {
                                duration: t.speed,
                                complete: i
                            })
                        },
                        slide: function () {
                            t.apply(this, O.array(arguments))
                        },
                        fadeslide: function () {
                            t.apply(this, O.array(arguments).concat([!0]))
                        },
                        doorslide: function () {
                            t.apply(this, O.array(arguments).concat([!1, !0]))
                        }
                    }
                }
            }();
        D.listen(), o.bind("orientationchange", function () {
            e(this).resize()
        }), t = n.Galleria = function () {
            var a = this;
            this._options = {}, this._playing = !1, this._playtime = 5e3, this._active = null, this._queue = {
                length: 0
            }, this._data = [], this._dom = {}, this._thumbnails = [], this._layers = [], this._initialized = !1, this._firstrun = !1, this._stageWidth = 0, this._stageHeight = 0, this._target = i, this._binds = [], this._id = parseInt(1e4 * g.random(), 10);
            var l = "container stage images image-nav image-nav-left image-nav-right info info-text info-title info-description thumbnails thumbnails-list thumbnails-container thumb-nav-left thumb-nav-right loader counter tooltip",
                c = "current total";
            e.each(l.split(" "), function (e, t) {
                a._dom[t] = O.create("galleria-" + t)
            }), e.each(c.split(" "), function (e, t) {
                a._dom[t] = O.create("galleria-" + t, "span")
            });
            var u = this._keyboard = {
                    keys: {
                        UP: 38,
                        DOWN: 40,
                        LEFT: 37,
                        RIGHT: 39,
                        RETURN: 13,
                        ESCAPE: 27,
                        BACKSPACE: 8,
                        SPACE: 32
                    },
                    map: {},
                    bound: !1,
                    press: function (e) {
                        var t = e.keyCode || e.which;
                        t in u.map && "function" == typeof u.map[t] && u.map[t].call(a, e)
                    },
                    attach: function (e) {
                        var t, i;
                        for (t in e) e.hasOwnProperty(t) && (i = t.toUpperCase(), i in u.keys ? u.map[u.keys[i]] = e[t] : u.map[i] = e[t]);
                        u.bound || (u.bound = !0, s.bind("keydown", u.press))
                    },
                    detach: function () {
                        u.bound = !1, u.map = {}, s.unbind("keydown", u.press)
                    }
                },
                h = this._controls = {
                    0: i,
                    1: i,
                    active: 0,
                    swap: function () {
                        h.active = h.active ? 0 : 1
                    },
                    getActive: function () {
                        return a._options.swipe ? h.slides[a._active] : h[h.active]
                    },
                    getNext: function () {
                        return a._options.swipe ? h.slides[a.getNext(a._active)] : h[1 - h.active]
                    },
                    slides: [],
                    frames: [],
                    layers: []
                },
                p = this._carousel = {
                    next: a.$("thumb-nav-right"),
                    prev: a.$("thumb-nav-left"),
                    width: 0,
                    current: 0,
                    max: 0,
                    hooks: [],
                    update: function () {
                        var t = 0,
                            i = 0,
                            n = [0];
                        e.each(a._thumbnails, function (r, s) {
                            if (s.ready) {
                                t += s.outerWidth || e(s.container).outerWidth(!0);
                                var o = e(s.container).width();
                                t += o - g.floor(o), n[r + 1] = t, i = g.max(i, s.outerHeight || e(s.container).outerHeight(!0))
                            }
                        }), a.$("thumbnails").css({
                            width: t,
                            height: i
                        }), p.max = t, p.hooks = n, p.width = a.$("thumbnails-list").width(), p.setClasses(), a.$("thumbnails-container").toggleClass("galleria-carousel", t > p.width), p.width = a.$("thumbnails-list").width()
                    },
                    bindControls: function () {
                        var e;
                        p.next.bind("click", function (t) {
                            if (t.preventDefault(), "auto" === a._options.carouselSteps) {
                                for (e = p.current; e < p.hooks.length; e++)
                                    if (p.hooks[e] - p.hooks[p.current] > p.width) {
                                        p.set(e - 2);
                                        break
                                    }
                            } else p.set(p.current + a._options.carouselSteps)
                        }), p.prev.bind("click", function (t) {
                            if (t.preventDefault(), "auto" === a._options.carouselSteps)
                                for (e = p.current; e >= 0; e--) {
                                    if (p.hooks[p.current] - p.hooks[e] > p.width) {
                                        p.set(e + 2);
                                        break
                                    }
                                    if (0 === e) {
                                        p.set(0);
                                        break
                                    }
                                } else p.set(p.current - a._options.carouselSteps)
                        })
                    },
                    set: function (e) {
                        for (e = g.max(e, 0); p.hooks[e - 1] + p.width >= p.max && e >= 0;) e--;
                        p.current = e, p.animate()
                    },
                    getLast: function (e) {
                        return (e || p.current) - 1
                    },
                    follow: function (e) {
                        if (0 === e || e === p.hooks.length - 2) return void p.set(e);
                        for (var t = p.current; p.hooks[t] - p.hooks[p.current] < p.width && t <= p.hooks.length;) t++;
                        e - 1 < p.current ? p.set(e - 1) : e + 2 > t && p.set(e - t + p.current + 2)
                    },
                    setClasses: function () {
                        p.prev.toggleClass("disabled", !p.current), p.next.toggleClass("disabled", p.hooks[p.current] + p.width >= p.max)
                    },
                    animate: function () {
                        p.setClasses();
                        var t = -1 * p.hooks[p.current];
                        isNaN(t) || (a.$("thumbnails").css("left", function () {
                            return e(this).css("left")
                        }), O.animate(a.get("thumbnails"), {
                            left: t
                        }, {
                            duration: a._options.carouselSpeed,
                            easing: a._options.easing,
                            queue: !1
                        }))
                    }
                },
                f = this._tooltip = {
                    initialized: !1,
                    open: !1,
                    timer: "tooltip" + a._id,
                    swapTimer: "swap" + a._id,
                    init: function () {
                        f.initialized = !0;
                        var e = ".galleria-tooltip{padding:3px 8px;max-width:50%;background:#ffe;color:#000;z-index:3;position:absolute;font-size:11px;line-height:1.3;opacity:0;box-shadow:0 0 2px rgba(0,0,0,.4);-moz-box-shadow:0 0 2px rgba(0,0,0,.4);-webkit-box-shadow:0 0 2px rgba(0,0,0,.4);}";
                        O.insertStyleTag(e, "galleria-tooltip"), a.$("tooltip").css({
                            opacity: .8,
                            visibility: "visible",
                            display: "none"
                        })
                    },
                    move: function (e) {
                        var t = a.getMousePosition(e).x,
                            i = a.getMousePosition(e).y,
                            n = a.$("tooltip"),
                            r = t,
                            s = i,
                            o = n.outerHeight(!0) + 1,
                            l = n.outerWidth(!0),
                            c = o + 15,
                            u = a.$("container").width() - l - 2,
                            h = a.$("container").height() - o - 2;
                        isNaN(r) || isNaN(s) || (r += 10, s -= o + 8, r = g.max(0, g.min(u, r)), s = g.max(0, g.min(h, s)), c > i && (s = c), n.css({
                            left: r,
                            top: s
                        }))
                    },
                    bind: function (i, n) {
                        if (!t.TOUCH) {
                            f.initialized || f.init();
                            var r = function () {
                                    a.$("container").unbind("mousemove", f.move), a.clearTimer(f.timer), a.$("tooltip").stop().animate({
                                        opacity: 0
                                    }, 200, function () {
                                        a.$("tooltip").hide(), a.addTimer(f.swapTimer, function () {
                                            f.open = !1
                                        }, 1e3)
                                    })
                                },
                                s = function (t, i) {
                                    f.define(t, i), e(t).hover(function () {
                                        a.clearTimer(f.swapTimer), a.$("container").unbind("mousemove", f.move).bind("mousemove", f.move).trigger("mousemove"), f.show(t), a.addTimer(f.timer, function () {
                                            a.$("tooltip").stop().show().animate({
                                                opacity: 1
                                            }), f.open = !0
                                        }, f.open ? 0 : 500)
                                    }, r).click(r)
                                };
                            "string" == typeof n ? s(i in a._dom ? a.get(i) : i, n) : e.each(i, function (e, t) {
                                s(a.get(e), t)
                            })
                        }
                    },
                    show: function (t) {
                        t = e(t in a._dom ? a.get(t) : t);
                        var i = t.data("tt"),
                            r = function (e) {
                                n.setTimeout(function (e) {
                                    return function () {
                                        f.move(e)
                                    }
                                }(e), 10), t.unbind("mouseup", r)
                            };
                        i = "function" == typeof i ? i() : i, i && (a.$("tooltip").html(i.replace(/\s/, "&#160;")), t.bind("mouseup", r))
                    },
                    define: function (t, i) {
                        if ("function" != typeof i) {
                            var n = i;
                            i = function () {
                                return n
                            }
                        }
                        t = e(t in a._dom ? a.get(t) : t).data("tt", i), f.show(t)
                    }
                },
                m = this._fullscreen = {
                    scrolled: 0,
                    crop: i,
                    active: !1,
                    prev: e(),
                    beforeEnter: function (e) {
                        e()
                    },
                    beforeExit: function (e) {
                        e()
                    },
                    keymap: a._keyboard.map,
                    parseCallback: function (t, i) {
                        return V.active ? function () {
                            "function" == typeof t && t.call(a);
                            var n = a._controls.getActive(),
                                r = a._controls.getNext();
                            a._scaleImage(r), a._scaleImage(n), i && a._options.trueFullscreen && e(n.container).add(r.container).trigger("transitionend")
                        } : t
                    },
                    enter: function (e) {
                        m.beforeEnter(function () {
                            e = m.parseCallback(e, !0), a._options.trueFullscreen && D.support ? (m.active = !0, O.forceStyles(a.get("container"), {
                                width: "100%",
                                height: "100%"
                            }), a.rescale(), t.MAC ? t.SAFARI && /version\/[1-5]/.test(d) ? (a.$("stage").css("opacity", 0), n.setTimeout(function () {
                                m.scale(), a.$("stage").css("opacity", 1)
                            }, 4)) : (a.$("container").css("opacity", 0).addClass("fullscreen"), n.setTimeout(function () {
                                m.scale(), a.$("container").css("opacity", 1)
                            }, 50)) : a.$("container").addClass("fullscreen"), o.resize(m.scale), D.enter(a, e, a.get("container"))) : (m.scrolled = o.scrollTop(), t.TOUCH || n.scrollTo(0, 0), m._enter(e))
                        })
                    },
                    _enter: function (s) {
                        m.active = !0, w && (m.iframe = function () {
                            var i, s = r.referrer,
                                o = r.createElement("a"),
                                a = n.location;
                            return o.href = s, o.protocol != a.protocol || o.hostname != a.hostname || o.port != a.port ? (t.raise("Parent fullscreen not available. Iframe protocol, domains and ports must match."), !1) : (m.pd = n.parent.document, e(m.pd).find("iframe").each(function () {
                                var e = this.contentDocument || this.contentWindow.document;
                                return e === r ? (i = this, !1) : void 0
                            }), i)
                        }()), O.hide(a.getActiveImage()), w && m.iframe && (m.iframe.scrolled = e(n.parent).scrollTop(), n.parent.scrollTo(0, 0));
                        var l = a.getData(),
                            c = a._options,
                            u = !a._options.trueFullscreen || !D.support,
                            h = {
                                height: "100%",
                                overflow: "hidden",
                                margin: 0,
                                padding: 0
                            };
                        if (u && (a.$("container").addClass("fullscreen"), m.prev = a.$("container").prev(), m.prev.length || (m.parent = a.$("container").parent()), a.$("container").appendTo("body"), O.forceStyles(a.get("container"), {
                            position: t.TOUCH ? "absolute" : "fixed",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            zIndex: 1e4
                        }), O.forceStyles(b().html, h), O.forceStyles(b().body, h)), w && m.iframe && (O.forceStyles(m.pd.documentElement, h), O.forceStyles(m.pd.body, h), O.forceStyles(m.iframe, e.extend(h, {
                            width: "100%",
                            height: "100%",
                            top: 0,
                            left: 0,
                            position: "fixed",
                            zIndex: 1e4,
                            border: "none"
                        }))), m.keymap = e.extend({}, a._keyboard.map), a.attachKeyboard({
                            escape: a.exitFullscreen,
                            right: a.next,
                            left: a.prev
                        }), m.crop = c.imageCrop, c.fullscreenCrop != i && (c.imageCrop = c.fullscreenCrop), l && l.big && l.image !== l.big) {
                            var d = new t.Picture,
                                p = d.isCached(l.big),
                                f = a.getIndex(),
                                g = a._thumbnails[f];
                            a.trigger({
                                type: t.LOADSTART,
                                cached: p,
                                rewind: !1,
                                index: f,
                                imageTarget: a.getActiveImage(),
                                thumbTarget: g,
                                galleriaData: l
                            }), d.load(l.big, function (i) {
                                a._scaleImage(i, {
                                    complete: function (i) {
                                        a.trigger({
                                            type: t.LOADFINISH,
                                            cached: p,
                                            index: f,
                                            rewind: !1,
                                            imageTarget: i.image,
                                            thumbTarget: g
                                        });
                                        var n = a._controls.getActive().image;
                                        n && e(n).width(i.image.width).height(i.image.height).attr("style", e(i.image).attr("style")).attr("src", i.image.src)
                                    }
                                })
                            })
                        }
                        a.rescale(function () {
                            a.addTimer(!1, function () {
                                u && O.show(a.getActiveImage()), "function" == typeof s && s.call(a), a.rescale()
                            }, 100), a.trigger(t.FULLSCREEN_ENTER)
                        }), u ? o.resize(m.scale) : O.show(a.getActiveImage())
                    },
                    scale: function () {
                        a.rescale()
                    },
                    exit: function (e) {
                        m.beforeExit(function () {
                            e = m.parseCallback(e), a._options.trueFullscreen && D.support ? D.exit(e) : m._exit(e)
                        })
                    },
                    _exit: function (e) {
                        m.active = !1;
                        var i = !a._options.trueFullscreen || !D.support,
                            r = a.$("container").removeClass("fullscreen");
                        if (m.parent ? m.parent.prepend(r) : r.insertAfter(m.prev), i) {
                            O.hide(a.getActiveImage()), O.revertStyles(a.get("container"), b().html, b().body), t.TOUCH || n.scrollTo(0, m.scrolled);
                            var s = a._controls.frames[a._controls.active];
                            s && s.image && (s.image.src = s.image.src)
                        }
                        w && m.iframe && (O.revertStyles(m.pd.documentElement, m.pd.body, m.iframe), m.iframe.scrolled && n.parent.scrollTo(0, m.iframe.scrolled)), a.detachKeyboard(), a.attachKeyboard(m.keymap), a._options.imageCrop = m.crop;
                        var l = a.getData().big,
                            c = a._controls.getActive().image;
                        !a.getData().iframe && c && l && l == c.src && n.setTimeout(function (e) {
                            return function () {
                                c.src = e
                            }
                        }(a.getData().image), 1), a.rescale(function () {
                            a.addTimer(!1, function () {
                                i && O.show(a.getActiveImage()), "function" == typeof e && e.call(a), o.trigger("resize")
                            }, 50), a.trigger(t.FULLSCREEN_EXIT)
                        }), o.unbind("resize", m.scale)
                    }
                },
                v = this._idle = {
                    trunk: [],
                    bound: !1,
                    active: !1,
                    add: function (t, i, n, r) {
                        if (t) {
                            v.bound || v.addEvent(), t = e(t), "boolean" == typeof n && (r = n, n = {}), n = n || {};
                            var s, o = {};
                            for (s in i) i.hasOwnProperty(s) && (o[s] = t.css(s));
                            t.data("idle", {
                                from: e.extend(o, n),
                                to: i,
                                complete: !0,
                                busy: !1
                            }), r ? t.css(i) : v.addTimer(), v.trunk.push(t)
                        }
                    },
                    remove: function (t) {
                        t = e(t), e.each(v.trunk, function (e, i) {
                            i && i.length && !i.not(t).length && (t.css(t.data("idle").from), v.trunk.splice(e, 1))
                        }), v.trunk.length || (v.removeEvent(), a.clearTimer(v.timer))
                    },
                    addEvent: function () {
                        v.bound = !0, a.$("container").bind("mousemove click", v.showAll), "hover" == a._options.idleMode && a.$("container").bind("mouseleave", v.hide)
                    },
                    removeEvent: function () {
                        v.bound = !1, a.$("container").bind("mousemove click", v.showAll), "hover" == a._options.idleMode && a.$("container").unbind("mouseleave", v.hide)
                    },
                    addTimer: function () {
                        "hover" != a._options.idleMode && a.addTimer("idle", function () {
                            v.hide()
                        }, a._options.idleTime)
                    },
                    hide: function () {
                        if (a._options.idleMode && a.getIndex() !== !1) {
                            a.trigger(t.IDLE_ENTER);
                            var i = v.trunk.length;
                            e.each(v.trunk, function (e, t) {
                                var n = t.data("idle");
                                n && (t.data("idle").complete = !1, O.animate(t, n.to, {
                                    duration: a._options.idleSpeed,
                                    complete: function () {
                                        e == i - 1 && (v.active = !1)
                                    }
                                }))
                            })
                        }
                    },
                    showAll: function () {
                        a.clearTimer("idle"), e.each(v.trunk, function (e, t) {
                            v.show(t)
                        })
                    },
                    show: function (i) {
                        var n = i.data("idle");
                        v.active && (n.busy || n.complete) || (n.busy = !0, a.trigger(t.IDLE_EXIT), a.clearTimer("idle"), O.animate(i, n.from, {
                            duration: a._options.idleSpeed / 2,
                            complete: function () {
                                v.active = !0, e(i).data("idle").busy = !1, e(i).data("idle").complete = !0
                            }
                        })), v.addTimer()
                    }
                },
                _ = this._lightbox = {
                    width: 0,
                    height: 0,
                    initialized: !1,
                    active: null,
                    image: null,
                    elems: {},
                    keymap: !1,
                    init: function () {
                        if (!_.initialized) {
                            _.initialized = !0;
                            var i = "overlay box content shadow title info close prevholder prev nextholder next counter image",
                                n = {},
                                r = a._options,
                                s = "",
                                o = "position:absolute;",
                                l = "lightbox-",
                                c = {
                                    overlay: "position:fixed;display:none;opacity:" + r.overlayOpacity + ";filter:alpha(opacity=" + 100 * r.overlayOpacity + ");top:0;left:0;width:100%;height:100%;background:" + r.overlayBackground + ";z-index:99990",
                                    box: "position:fixed;display:none;width:400px;height:400px;top:50%;left:50%;margin-top:-200px;margin-left:-200px;z-index:99991",
                                    shadow: o + "background:#000;width:100%;height:100%;",
                                    content: o + "background-color:#fff;top:10px;left:10px;right:10px;bottom:10px;overflow:hidden",
                                    info: o + "bottom:10px;left:10px;right:10px;color:#444;font:11px/13px arial,sans-serif;height:13px",
                                    close: o + "top:10px;right:10px;height:20px;width:20px;background:#fff;text-align:center;cursor:pointer;color:#444;font:16px/22px arial,sans-serif;z-index:99999",
                                    image: o + "top:10px;left:10px;right:10px;bottom:30px;overflow:hidden;display:block;",
                                    prevholder: o + "width:50%;top:0;bottom:40px;cursor:pointer;",
                                    nextholder: o + "width:50%;top:0;bottom:40px;right:-1px;cursor:pointer;",
                                    prev: o + "top:50%;margin-top:-20px;height:40px;width:30px;background:#fff;left:20px;display:none;text-align:center;color:#000;font:bold 16px/36px arial,sans-serif",
                                    next: o + "top:50%;margin-top:-20px;height:40px;width:30px;background:#fff;right:20px;left:auto;display:none;font:bold 16px/36px arial,sans-serif;text-align:center;color:#000",
                                    title: "float:left",
                                    counter: "float:right;margin-left:8px;"
                                },
                                u = function (t) {
                                    return t.hover(function () {
                                        e(this).css("color", "#bbb")
                                    }, function () {
                                        e(this).css("color", "#444")
                                    })
                                },
                                h = {};
                            y && y > 7 && (c.nextholder += "background:#000;filter:alpha(opacity=0);", c.prevholder += "background:#000;filter:alpha(opacity=0);"), e.each(c, function (e, t) {
                                s += ".galleria-" + l + e + "{" + t + "}"
                            }), s += ".galleria-" + l + "box.iframe .galleria-" + l + "prevholder,.galleria-" + l + "box.iframe .galleria-" + l + "nextholder{width:100px;height:100px;top:50%;margin-top:-70px}", O.insertStyleTag(s, "galleria-lightbox"), e.each(i.split(" "), function (e, t) {
                                a.addElement("lightbox-" + t), n[t] = _.elems[t] = a.get("lightbox-" + t)
                            }), _.image = new t.Picture, e.each({
                                box: "shadow content close prevholder nextholder",
                                info: "title counter",
                                content: "info image",
                                prevholder: "prev",
                                nextholder: "next"
                            }, function (t, i) {
                                var n = [];
                                e.each(i.split(" "), function (e, t) {
                                    n.push(l + t)
                                }), h[l + t] = n
                            }), a.append(h), e(n.image).append(_.image.container), e(b().body).append(n.overlay, n.box), u(e(n.close).bind("click", _.hide).html("&#215;")), e.each(["Prev", "Next"], function (i, r) {
                                var s = e(n[r.toLowerCase()]).html(/v/.test(r) ? "&#8249;&#160;" : "&#160;&#8250;"),
                                    o = e(n[r.toLowerCase() + "holder"]);
                                return o.bind("click", function () {
                                    _["show" + r]()
                                }), 8 > y || t.TOUCH ? void s.show() : void o.hover(function () {
                                    s.show()
                                }, function () {
                                    s.stop().fadeOut(200)
                                })
                            }), e(n.overlay).bind("click", _.hide), t.IPAD && (a._options.lightboxTransitionSpeed = 0)
                        }
                    },
                    rescale: function (i) {
                        var n = g.min(o.width() - 40, _.width),
                            r = g.min(o.height() - 60, _.height),
                            s = g.min(n / _.width, r / _.height),
                            l = g.round(_.width * s) + 40,
                            c = g.round(_.height * s) + 60,
                            u = {
                                width: l,
                                height: c,
                                "margin-top": -1 * g.ceil(c / 2),
                                "margin-left": -1 * g.ceil(l / 2)
                            };
                        i ? e(_.elems.box).css(u) : e(_.elems.box).animate(u, {
                            duration: a._options.lightboxTransitionSpeed,
                            easing: a._options.easing,
                            complete: function () {
                                var i = _.image,
                                    n = a._options.lightboxFadeSpeed;
                                a.trigger({
                                    type: t.LIGHTBOX_IMAGE,
                                    imageTarget: i.image
                                }), e(i.container).show(), e(i.image).animate({
                                    opacity: 1
                                }, n), O.show(_.elems.info, n)
                            }
                        })
                    },
                    hide: function () {
                        _.image.image = null, o.unbind("resize", _.rescale), e(_.elems.box).hide().find("iframe").remove(), O.hide(_.elems.info), a.detachKeyboard(), a.attachKeyboard(_.keymap), _.keymap = !1, O.hide(_.elems.overlay, 200, function () {
                            e(this).hide().css("opacity", a._options.overlayOpacity), a.trigger(t.LIGHTBOX_CLOSE)
                        })
                    },
                    showNext: function () {
                        _.show(a.getNext(_.active))
                    },
                    showPrev: function () {
                        _.show(a.getPrev(_.active))
                    },
                    show: function (i) {
                        _.active = i = "number" == typeof i ? i : a.getIndex() || 0, _.initialized || _.init(), a.trigger(t.LIGHTBOX_OPEN), _.keymap || (_.keymap = e.extend({}, a._keyboard.map), a.attachKeyboard({
                            escape: _.hide,
                            right: _.showNext,
                            left: _.showPrev
                        })), o.unbind("resize", _.rescale);
                        var r, s, l, c = a.getData(i),
                            u = a.getDataLength(),
                            h = a.getNext(i);
                        O.hide(_.elems.info);
                        try {
                            for (l = a._options.preload; l > 0; l--) s = new t.Picture, r = a.getData(h), s.preload(r.big ? r.big : r.image), h = a.getNext(h)
                        } catch (d) {}
                        _.image.isIframe = c.iframe && !c.image, e(_.elems.box).toggleClass("iframe", _.image.isIframe), e(_.image.container).find(".galleria-videoicon").remove(), _.image.load(c.big || c.image || c.iframe, function (t) {
                            if (t.isIframe) {
                                var r = e(n).width(),
                                    s = e(n).height();
                                if (t.video && a._options.maxVideoSize) {
                                    var l = g.min(a._options.maxVideoSize / r, a._options.maxVideoSize / s);
                                    1 > l && (r *= l, s *= l)
                                }
                                _.width = r, _.height = s
                            } else _.width = t.original.width, _.height = t.original.height; if (e(t.image).css({
                                width: t.isIframe ? "100%" : "100.1%",
                                height: t.isIframe ? "100%" : "100.1%",
                                top: 0,
                                bottom: 0,
                                zIndex: 99998,
                                opacity: 0,
                                visibility: "visible"
                            }).parent().height("100%"), _.elems.title.innerHTML = c.title || "", _.elems.counter.innerHTML = i + 1 + " / " + u, o.resize(_.rescale), _.rescale(), c.image && c.iframe) {
                                if (e(_.elems.box).addClass("iframe"), c.video) {
                                    var h = N(t.container).hide();
                                    n.setTimeout(function () {
                                        h.fadeIn(200)
                                    }, 200)
                                }
                                e(t.image).css("cursor", "pointer").mouseup(function (t, i) {
                                    return function (n) {
                                        e(_.image.container).find(".galleria-videoicon").remove(), n.preventDefault(), i.isIframe = !0, i.load(t.iframe + (t.video ? "&autoplay=1" : ""), {
                                            width: "100%",
                                            height: 8 > y ? e(_.image.container).height() : "100%"
                                        })
                                    }
                                }(c, t))
                            }
                        }), e(_.elems.overlay).show().css("visibility", "visible"), e(_.elems.box).show()
                    }
                },
                x = this._timer = {
                    trunk: {},
                    add: function (e, t, i, r) {
                        if (e = e || (new Date).getTime(), r = r || !1, this.clear(e), r) {
                            var s = t;
                            t = function () {
                                s(), x.add(e, t, i)
                            }
                        }
                        this.trunk[e] = n.setTimeout(t, i)
                    },
                    clear: function (e) {
                        var t, i = function (e) {
                            n.clearTimeout(this.trunk[e]), delete this.trunk[e]
                        };
                        if (e && e in this.trunk) i.call(this, e);
                        else if ("undefined" == typeof e)
                            for (t in this.trunk) this.trunk.hasOwnProperty(t) && i.call(this, t)
                    }
                };
            return this
        }, t.prototype = {
            constructor: t,
            init: function (n, r) {
                return r = k(r), this._original = {
                    target: n,
                    options: r,
                    data: null
                }, this._target = this._dom.target = n.nodeName ? n : e(n).get(0), this._original.html = this._target.innerHTML, E.push(this), this._target ? (this._options = {
                    autoplay: !1,
                    carousel: !0,
                    carouselFollow: !0,
                    carouselSpeed: 400,
                    carouselSteps: "auto",
                    clicknext: !1,
                    dailymotion: {
                        foreground: "%23EEEEEE",
                        highlight: "%235BCEC5",
                        background: "%23222222",
                        logo: 0,
                        hideInfos: 1
                    },
                    dataConfig: function () {
                        return {}
                    },
                    dataSelector: "img",
                    dataSort: !1,
                    dataSource: this._target,
                    debug: i,
                    dummy: i,
                    easing: "galleria",
                    extend: function () {},
                    fullscreenCrop: i,
                    fullscreenDoubleTap: !0,
                    fullscreenTransition: i,
                    height: 0,
                    idleMode: !0,
                    idleTime: 3e3,
                    idleSpeed: 200,
                    imageCrop: !1,
                    imageMargin: 0,
                    imagePan: !1,
                    imagePanSmoothness: 12,
                    imagePosition: "50%",
                    imageTimeout: i,
                    initialTransition: i,
                    keepSource: !1,
                    layerFollow: !0,
                    lightbox: !1,
                    lightboxFadeSpeed: 200,
                    lightboxTransitionSpeed: 200,
                    linkSourceImages: !0,
                    maxScaleRatio: i,
                    maxVideoSize: i,
                    minScaleRatio: i,
                    overlayOpacity: .85,
                    overlayBackground: "#0b0b0b",
                    pauseOnInteraction: !0,
                    popupLinks: !1,
                    preload: 2,
                    queue: !0,
                    responsive: !0,
                    show: 0,
                    showInfo: !0,
                    showCounter: !0,
                    showImagenav: !0,
                    swipe: !0,
                    thumbCrop: !0,
                    thumbEventType: "click",
                    thumbMargin: 0,
                    thumbQuality: "auto",
                    thumbDisplayOrder: !0,
                    thumbPosition: "50%",
                    thumbnails: !0,
                    touchTransition: i,
                    transition: "fade",
                    transitionInitial: i,
                    transitionSpeed: 400,
                    trueFullscreen: !0,
                    useCanvas: !1,
                    variation: "",
                    videoPoster: !0,
                    vimeo: {
                        title: 0,
                        byline: 0,
                        portrait: 0,
                        color: "aaaaaa"
                    },
                    wait: 5e3,
                    width: "auto",
                    youtube: {
                        modestbranding: 1,
                        autohide: 1,
                        color: "white",
                        hd: 1,
                        rel: 0,
                        showinfo: 0
                    }
                }, this._options.initialTransition = this._options.initialTransition || this._options.transitionInitial, r && r.debug === !1 && (c = !1), r && "number" == typeof r.imageTimeout && (u = r.imageTimeout), r && "string" == typeof r.dummy && (h = r.dummy), t.TOUCH || (this._options.swipe = !1), e(this._target).children().hide(), t.QUIRK && t.raise("Your page is in Quirks mode, Galleria may not render correctly. Please validate your HTML and add a correct doctype."), "object" == typeof t.theme ? this._init() : M.push(this), this) : void t.raise("Target not found", !0)
            },
            _init: function () {
                var s = this,
                    a = this._options;
                if (this._initialized) return t.raise("Init failed: Gallery instance already initialized."), this;
                if (this._initialized = !0, !t.theme) return t.raise("Init failed: No theme found.", !0), this;
                if (e.extend(!0, a, t.theme.defaults, this._original.options, t.configure.options), a.swipe && (a.clicknext = !1, a.imagePan = !1), ! function (e) {
                    return "getContext" in e ? void(A = A || {
                        elem: e,
                        context: e.getContext("2d"),
                        cache: {},
                        length: 0
                    }) : void(e = null)
                }(r.createElement("canvas")), t.Fastclick.init(this.get("target")), this.bind(t.DATA, function () {
                    n.screen && n.screen.width && Array.prototype.forEach && this._data.forEach(function (e) {
                        var t = "devicePixelRatio" in n ? n.devicePixelRatio : 1,
                            i = g.max(n.screen.width, n.screen.height);
                        1024 > i * t && (e.big = e.image)
                    }), this._original.data = this._data, this.get("total").innerHTML = this.getDataLength();
                    var e = this.$("container");
                    s._options.height < 2 && (s._userRatio = s._ratio = s._options.height);
                    var i = {
                            width: 0,
                            height: 0
                        },
                        r = function () {
                            return s.$("stage").height()
                        };
                    O.wait({
                        until: function () {
                            return i = s._getWH(), e.width(i.width).height(i.height), r() && i.width && i.height > 50
                        },
                        success: function () {
                            s._width = i.width, s._height = i.height, s._ratio = s._ratio || i.height / i.width, t.WEBKIT ? n.setTimeout(function () {
                                s._run()
                            }, 1) : s._run()
                        },
                        error: function () {
                            r() ? t.raise("Could not extract sufficient width/height of the gallery container. Traced measures: width:" + i.width + "px, height: " + i.height + "px.", !0) : t.raise("Could not extract a stage height from the CSS. Traced height: " + r() + "px.", !0)
                        },
                        timeout: "number" == typeof this._options.wait ? this._options.wait : !1
                    })
                }), this.append({
                    "info-text": ["info-title", "info-description"],
                    info: ["info-text"],
                    "image-nav": ["image-nav-right", "image-nav-left"],
                    stage: ["images", "loader", "counter", "image-nav"],
                    "thumbnails-list": ["thumbnails"],
                    "thumbnails-container": ["thumb-nav-left", "thumbnails-list", "thumb-nav-right"],
                    container: ["stage", "thumbnails-container", "info", "tooltip"]
                }), O.hide(this.$("counter").append(this.get("current"), r.createTextNode(" / "), this.get("total"))), this.setCounter("&#8211;"), O.hide(s.get("tooltip")), this.$("container").addClass((t.TOUCH ? "touch" : "notouch") + " " + this._options.variation), this._options.swipe || e.each(new Array(2), function (i) {
                    var n = new t.Picture;
                    e(n.container).css({
                        position: "absolute",
                        top: 0,
                        left: 0
                    }).prepend(s._layers[i] = e(O.create("galleria-layer")).css({
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 2
                    })[0]), s.$("images").append(n.container), s._controls[i] = n;
                    var r = new t.Picture;
                    r.isIframe = !0, e(r.container).attr("class", "galleria-frame").css({
                        position: "absolute",
                        top: 0,
                        left: 0,
                        zIndex: 4,
                        background: "#000",
                        display: "none"
                    }).appendTo(n.container), s._controls.frames[i] = r
                }), this.$("images").css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                }), a.swipe && (this.$("images").css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: 0,
                    height: "100%"
                }), this.finger = new t.Finger(this.get("stage"), {
                    onchange: function (e) {
                        s.setCounter(e), s.pause(), s.show(e)
                    },
                    oncomplete: function (e) {
                        var i = g.max(0, g.min(parseInt(e, 10), s.getDataLength() - 1)),
                            n = s.getData(i);
                        if (n) {
                            s.$("images").find("iframe").remove(), s.$("images").find(".galleria-frame").css("opacity", 0).hide();
                            var r = s.isFullscreen() && n.big ? n.big : n.image || n.iframe,
                                o = s._controls.slides[i],
                                a = o.isCached(r),
                                l = s._thumbnails[i];
                            s.trigger({
                                type: t.IMAGE,
                                cached: a,
                                index: i,
                                imageTarget: o.image,
                                thumbTarget: l.image,
                                galleriaData: n
                            }), s._options.carousel && s._options.carouselFollow && s._carousel.follow(i)
                        }
                    }
                }), this.bind(t.RESCALE, function () {
                    this.finger.setup()
                }), this.$("stage").bind("click", function () {
                    var t = s.getData();
                    if (t) {
                        if (t.iframe) {
                            s.isPlaying() && s.pause();
                            var r = s._controls.frames[s._active],
                                o = s._stageWidth,
                                a = s._stageHeight;
                            if (e(r.container).find("iframe").length) return;
                            return e(r.container).css({
                                width: o,
                                height: a,
                                opacity: 0
                            }).show().animate({
                                opacity: 1
                            }, 200), void n.setTimeout(function () {
                                r.load(t.iframe + (t.video ? "&autoplay=1" : ""), {
                                    width: o,
                                    height: a
                                }, function (e) {
                                    s.$("container").addClass("videoplay"), e.scale({
                                        width: s._stageWidth,
                                        height: s._stageHeight,
                                        iframelimit: t.video ? s._options.maxVideoSize : i
                                    })
                                })
                            }, 100)
                        }
                        if (t.link)
                            if (s._options.popupLinks) {
                                n.open(t.link, "_blank")
                            } else n.location.href = t.link;
                        else;
                    }
                }), this.bind(t.IMAGE, function (t) {
                    s.setCounter(t.index), s.setInfo(t.index);
                    var i = this.getNext(),
                        n = this.getPrev(),
                        r = [n, i];
                    r.push(this.getNext(i), this.getPrev(n), s._controls.slides.length - 1);
                    var o = [];
                    e.each(r, function (t, i) {
                        -1 == e.inArray(i, o) && o.push(i)
                    }), e.each(o, function (t, i) {
                        var n = s.getData(i),
                            r = s._controls.slides[i],
                            o = s.isFullscreen() && n.big ? n.big : n.image || n.iframe;
                        n.iframe && !n.image && (r.isIframe = !0), r.ready || s._controls.slides[i].load(o, function (t) {
                            t.isIframe || e(t.image).css("visibility", "hidden"), s._scaleImage(t, {
                                complete: function (t) {
                                    t.isIframe || e(t.image).css({
                                        opacity: 0,
                                        visibility: "visible"
                                    }).animate({
                                        opacity: 1
                                    }, 200)
                                }
                            })
                        })
                    })
                })), this.$("thumbnails, thumbnails-list").css({
                    overflow: "hidden",
                    position: "relative"
                }), this.$("image-nav-right, image-nav-left").bind("click", function (e) {
                    a.clicknext && e.stopPropagation(), a.pauseOnInteraction && s.pause();
                    var t = /right/.test(this.className) ? "next" : "prev";
                    s[t]()
                }), e.each(["info", "counter", "image-nav"], function (e, t) {
                    a["show" + t.substr(0, 1).toUpperCase() + t.substr(1).replace(/-/, "")] === !1 && O.moveOut(s.get(t.toLowerCase()))
                }), this.load(), a.keepSource || y || (this._target.innerHTML = ""), this.get("errors") && this.appendChild("target", "errors"), this.appendChild("target", "container"), a.carousel) {
                    var l = 0,
                        c = a.show;
                    this.bind(t.THUMBNAIL, function () {
                        this.updateCarousel(), ++l == this.getDataLength() && "number" == typeof c && c > 0 && this._carousel.follow(c)
                    })
                }
                return a.responsive && o.bind("resize", function () {
                    s.isFullscreen() || s.resize()
                }), a.fullscreenDoubleTap && this.$("stage").bind("touchstart", function () {
                    var e, t, i, n, r, o, a = function (e) {
                        return e.originalEvent.touches ? e.originalEvent.touches[0] : e
                    };
                    return s.$("stage").bind("touchmove", function () {
                            e = 0
                        }),
                        function (l) {
                            if (!/(-left|-right)/.test(l.target.className)) {
                                if (o = O.timestamp(), t = a(l).pageX, i = a(l).pageY, l.originalEvent.touches.length < 2 && 300 > o - e && 20 > t - n && 20 > i - r) return s.toggleFullscreen(), void l.preventDefault();
                                e = o, n = t, r = i
                            }
                        }
                }()), e.each(t.on.binds, function (t, i) {
                    -1 == e.inArray(i.hash, s._binds) && s.bind(i.type, i.callback)
                }), this
            },
            addTimer: function () {
                return this._timer.add.apply(this._timer, O.array(arguments)), this
            },
            clearTimer: function () {
                return this._timer.clear.apply(this._timer, O.array(arguments)), this
            },
            _getWH: function () {
                var t, i = this.$("container"),
                    n = this.$("target"),
                    r = this,
                    s = {};
                return e.each(["width", "height"], function (e, o) {
                    r._options[o] && "number" == typeof r._options[o] ? s[o] = r._options[o] : (t = [O.parseValue(i.css(o)), O.parseValue(n.css(o)), i[o](), n[o]()], r["_" + o] || t.splice(t.length, O.parseValue(i.css("min-" + o)), O.parseValue(n.css("min-" + o))), s[o] = g.max.apply(g, t))
                }), r._userRatio && (s.height = s.width * r._userRatio), s
            },
            _createThumbnails: function (i) {
                this.get("total").innerHTML = this.getDataLength();
                var s, o, a, l, c = this,
                    u = this._options,
                    h = i ? this._data.length - i.length : 0,
                    d = h,
                    p = [],
                    f = 0,
                    g = 8 > y ? "http://upload.wikimedia.org/wikipedia/commons/c/c0/Blank.gif" : "data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw%3D%3D",
                    m = function () {
                        var e = c.$("thumbnails").find(".active");
                        return e.length ? e.find("img").attr("src") : !1
                    }(),
                    v = "string" == typeof u.thumbnails ? u.thumbnails.toLowerCase() : null,
                    b = function (e) {
                        return r.defaultView && r.defaultView.getComputedStyle ? r.defaultView.getComputedStyle(o.container, null)[e] : l.css(e)
                    },
                    w = function (i, n, r) {
                        return function () {
                            e(r).append(i), c.trigger({
                                type: t.THUMBNAIL,
                                thumbTarget: i,
                                index: n,
                                galleriaData: c.getData(n)
                            })
                        }
                    },
                    _ = function (t) {
                        u.pauseOnInteraction && c.pause();
                        var i = e(t.currentTarget).data("index");
                        c.getIndex() !== i && c.show(i), t.preventDefault()
                    },
                    x = function (i, n) {
                        e(i.container).css("visibility", "visible"), c.trigger({
                            type: t.THUMBNAIL,
                            thumbTarget: i.image,
                            index: i.data.order,
                            galleriaData: c.getData(i.data.order)
                        }), "function" == typeof n && n.call(c, i)
                    },
                    k = function (t, i) {
                        t.scale({
                            width: t.data.width,
                            height: t.data.height,
                            crop: u.thumbCrop,
                            margin: u.thumbMargin,
                            canvas: u.useCanvas,
                            position: u.thumbPosition,
                            complete: function (t) {
                                {
                                    var n, r, s = ["left", "top"],
                                        o = ["Width", "Height"];
                                    c.getData(t.index)
                                }
                                e.each(o, function (i, o) {
                                    n = o.toLowerCase(), (u.thumbCrop !== !0 || u.thumbCrop === n) && (r = {}, r[n] = t[n], e(t.container).css(r), r = {}, r[s[i]] = 0, e(t.image).css(r)), t["outer" + o] = e(t.container)["outer" + o](!0)
                                }), O.toggleQuality(t.image, u.thumbQuality === !0 || "auto" === u.thumbQuality && t.original.width < 3 * t.width), u.thumbDisplayOrder && !t.lazy ? e.each(p, function (e, t) {
                                    return e === f && t.ready && !t.displayed ? (f++, t.displayed = !0, void x(t, i)) : void 0
                                }) : x(t, i)
                            }
                        })
                    };
                for (i || (this._thumbnails = [], this.$("thumbnails").empty()); this._data[h]; h++) a = this._data[h], s = a.thumb || a.image, u.thumbnails !== !0 && "lazy" != v || !a.thumb && !a.image ? a.iframe || "empty" === v || "numbers" === v ? (o = {
                    container: O.create("galleria-image"),
                    image: O.create("img", "span"),
                    ready: !0,
                    data: {
                        order: h
                    }
                }, "numbers" === v && e(o.image).text(h + 1), a.iframe && e(o.image).addClass("iframe"), this.$("thumbnails").append(o.container), n.setTimeout(w(o.image, h, o.container), 50 + 20 * h)) : o = {
                    container: null,
                    image: null
                } : (o = new t.Picture(h), o.index = h, o.displayed = !1, o.lazy = !1, o.video = !1, this.$("thumbnails").append(o.container), l = e(o.container), l.css("visibility", "hidden"), o.data = {
                    width: O.parseValue(b("width")),
                    height: O.parseValue(b("height")),
                    order: h,
                    src: s
                }, l.css(u.thumbCrop !== !0 ? {
                    width: "auto",
                    height: "auto"
                } : {
                    width: o.data.width,
                    height: o.data.height
                }), "lazy" == v ? (l.addClass("lazy"), o.lazy = !0, o.load(g, {
                    height: o.data.height,
                    width: o.data.width
                })) : o.load(s, k), "all" === u.preload && o.preload(a.image)), e(o.container).add(u.keepSource && u.linkSourceImages ? a.original : null).data("index", h).bind(u.thumbEventType, _).data("thumbload", k), m === s && e(o.container).addClass("active"), this._thumbnails.push(o);
                return p = this._thumbnails.slice(d), this
            },
            lazyLoad: function (t, i) {
                var n = t.constructor == Array ? t : [t],
                    r = this,
                    s = 0;
                return e.each(n, function (t, o) {
                    if (!(o > r._thumbnails.length - 1)) {
                        var a = r._thumbnails[o],
                            l = a.data,
                            c = function () {
                                ++s == n.length && "function" == typeof i && i.call(r)
                            },
                            u = e(a.container).data("thumbload");
                        a.video ? u.call(r, a, c) : a.load(l.src, function (e) {
                            u.call(r, e, c)
                        })
                    }
                }), this
            },
            lazyLoadChunks: function (e, t) {
                var i = this.getDataLength(),
                    r = 0,
                    s = 0,
                    o = [],
                    a = [],
                    l = this;
                for (t = t || 0; i > r; r++) a.push(r), (++s == e || r == i - 1) && (o.push(a), s = 0, a = []);
                var c = function (e) {
                    var i = o.shift();
                    i && n.setTimeout(function () {
                        l.lazyLoad(i, function () {
                            c(!0)
                        })
                    }, t && e ? t : 0)
                };
                return c(!1), this
            },
            _run: function () {
                var r = this;
                r._createThumbnails(), O.wait({
                    timeout: 1e4,
                    until: function () {
                        return t.OPERA && r.$("stage").css("display", "inline-block"), r._stageWidth = r.$("stage").width(), r._stageHeight = r.$("stage").height(), r._stageWidth && r._stageHeight > 50
                    },
                    success: function () {
                        if (H.push(r), r._options.swipe) {
                            var s = r.$("images").width(r.getDataLength() * r._stageWidth);
                            e.each(new Array(r.getDataLength()), function (i) {
                                var n = new t.Picture,
                                    o = r.getData(i);
                                e(n.container).css({
                                    position: "absolute",
                                    top: 0,
                                    left: r._stageWidth * i
                                }).prepend(r._layers[i] = e(O.create("galleria-layer")).css({
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    zIndex: 2
                                })[0]).appendTo(s), o.video && N(n.container), r._controls.slides.push(n);
                                var a = new t.Picture;
                                a.isIframe = !0, e(a.container).attr("class", "galleria-frame").css({
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    zIndex: 4,
                                    background: "#000",
                                    display: "none"
                                }).appendTo(n.container), r._controls.frames.push(a)
                            }), r.finger.setup()
                        }
                        return O.show(r.get("counter")), r._options.carousel && r._carousel.bindControls(), r._options.autoplay && (r.pause(), "number" == typeof r._options.autoplay && (r._playtime = r._options.autoplay), r._playing = !0), r._firstrun ? (r._options.autoplay && r.trigger(t.PLAY), void("number" == typeof r._options.show && r.show(r._options.show))) : (r._firstrun = !0, t.History && t.History.change(function (e) {
                            isNaN(e) ? n.history.go(-1) : r.show(e, i, !0)
                        }), r.trigger(t.READY), t.theme.init.call(r, r._options), e.each(t.ready.callbacks, function (e, t) {
                            "function" == typeof t && t.call(r, r._options)
                        }), t.ready.callbacks = [], r._options.extend.call(r, r._options), /^[0-9]{1,4}$/.test(p) && t.History ? r.show(p, i, !0) : r._data[r._options.show] && r.show(r._options.show), void(r._options.autoplay && r.trigger(t.PLAY)))
                    },
                    error: function () {
                        t.raise("Stage width or height is too small to show the gallery. Traced measures: width:" + r._stageWidth + "px, height: " + r._stageHeight + "px.", !0)
                    }
                })
            },
            load: function (i, n, r) {
                var s = this,
                    o = this._options;
                return this._data = [], this._thumbnails = [], this.$("thumbnails").empty(), "function" == typeof n && (r = n, n = null), i = i || o.dataSource, n = n || o.dataSelector, r = r || o.dataConfig, e.isPlainObject(i) && (i = [i]), e.isArray(i) ? this.validate(i) ? this._data = i : t.raise("Load failed: JSON Array not valid.") : (n += ",.video,.iframe", e(i).find(n).each(function (t, i) {
                    i = e(i);
                    var n = {},
                        o = i.parent(),
                        a = o.attr("href"),
                        l = o.attr("rel");
                    a && ("IMG" == i[0].nodeName || i.hasClass("video")) && $(a) ? n.video = a : a && i.hasClass("iframe") ? n.iframe = a : n.image = n.big = a, l && (n.big = l), e.each("big title description link layer image".split(" "), function (e, t) {
                        i.data(t) && (n[t] = i.data(t).toString())
                    }), n.big || (n.big = n.image), s._data.push(e.extend({
                        title: i.attr("title") || "",
                        thumb: i.attr("src"),
                        image: i.attr("src"),
                        big: i.attr("src"),
                        description: i.attr("alt") || "",
                        link: i.attr("longdesc"),
                        original: i.get(0)
                    }, n, r(i)))
                })), "function" == typeof o.dataSort ? a.sort.call(this._data, o.dataSort) : "random" == o.dataSort && this._data.sort(function () {
                    return g.round(g.random()) - .5
                }), this.getDataLength() && this._parseData(function () {
                    this.trigger(t.DATA)
                }), this
            },
            _parseData: function (t) {
                var n, r = this,
                    s = !1,
                    o = function () {
                        var i = !0;
                        e.each(r._data, function (e, t) {
                            return t.loading ? (i = !1, !1) : void 0
                        }), i && !s && (s = !0, t.call(r))
                    };
                return e.each(this._data, function (t, s) {
                    if (n = r._data[t], "thumb" in s == !1 && (n.thumb = s.image), s.big || (n.big = s.image), "video" in s) {
                        var a = $(s.video);
                        a && (n.iframe = new S(a.provider, a.id).embed() + function () {
                            if ("object" == typeof r._options[a.provider]) {
                                var t = "?",
                                    i = [];
                                return e.each(r._options[a.provider], function (e, t) {
                                    i.push(e + "=" + t)
                                }), "youtube" == a.provider && (i = ["wmode=opaque"].concat(i)), t + i.join("&")
                            }
                            return ""
                        }(), n.thumb && n.image || e.each(["thumb", "image"], function (e, t) {
                            if ("image" == t && !r._options.videoPoster) return void(n.image = i);
                            var s = new S(a.provider, a.id);
                            n[t] || (n.loading = !0, s.getMedia(t, function (e, t) {
                                return function (i) {
                                    e[t] = i, "image" != t || e.big || (e.big = e.image), delete e.loading, o()
                                }
                            }(n, t)))
                        }))
                    }
                }), o(), this
            },
            destroy: function () {
                return this.$("target").data("galleria", null), this.$("container").unbind("galleria"), this.get("target").innerHTML = this._original.html, this.clearTimer(), O.removeFromArray(E, this), O.removeFromArray(H, this), t._waiters.length && e.each(t._waiters, function (e, t) {
                    t && n.clearTimeout(t)
                }), this
            },
            splice: function () {
                var e = this,
                    t = O.array(arguments);
                return n.setTimeout(function () {
                    a.splice.apply(e._data, t), e._parseData(function () {
                        e._createThumbnails()
                    })
                }, 2), e
            },
            push: function () {
                var e = this,
                    t = O.array(arguments);
                return 1 == t.length && t[0].constructor == Array && (t = t[0]), n.setTimeout(function () {
                    a.push.apply(e._data, t), e._parseData(function () {
                        e._createThumbnails(t)
                    })
                }, 2), e
            },
            _getActive: function () {
                return this._controls.getActive()
            },
            validate: function () {
                return !0
            },
            bind: function (e, t) {
                return e = T(e), this.$("container").bind(e, this.proxy(t)), this
            },
            unbind: function (e) {
                return e = T(e), this.$("container").unbind(e), this
            },
            trigger: function (t) {
                return t = "object" == typeof t ? e.extend(t, {
                    scope: this
                }) : {
                    type: T(t),
                    scope: this
                }, this.$("container").trigger(t), this
            },
            addIdleState: function () {
                return this._idle.add.apply(this._idle, O.array(arguments)), this
            },
            removeIdleState: function () {
                return this._idle.remove.apply(this._idle, O.array(arguments)), this
            },
            enterIdleMode: function () {
                return this._idle.hide(), this
            },
            exitIdleMode: function () {
                return this._idle.showAll(), this
            },
            enterFullscreen: function () {
                return this._fullscreen.enter.apply(this, O.array(arguments)), this
            },
            exitFullscreen: function () {
                return this._fullscreen.exit.apply(this, O.array(arguments)), this
            },
            toggleFullscreen: function () {
                return this._fullscreen[this.isFullscreen() ? "exit" : "enter"].apply(this, O.array(arguments)), this
            },
            bindTooltip: function () {
                return this._tooltip.bind.apply(this._tooltip, O.array(arguments)), this
            },
            defineTooltip: function () {
                return this._tooltip.define.apply(this._tooltip, O.array(arguments)), this
            },
            refreshTooltip: function () {
                return this._tooltip.show.apply(this._tooltip, O.array(arguments)), this
            },
            openLightbox: function () {
                return this._lightbox.show.apply(this._lightbox, O.array(arguments)), this
            },
            closeLightbox: function () {
                return this._lightbox.hide.apply(this._lightbox, O.array(arguments)), this
            },
            hasVariation: function (t) {
                return e.inArray(t, this._options.variation.split(/\s+/)) > -1
            },
            getActiveImage: function () {
                var e = this._getActive();
                return e ? e.image : i
            },
            getActiveThumb: function () {
                return this._thumbnails[this._active].image || i
            },
            getMousePosition: function (e) {
                return {
                    x: e.pageX - this.$("container").offset().left,
                    y: e.pageY - this.$("container").offset().top
                }
            },
            addPan: function (t) {
                if (this._options.imageCrop !== !1) {
                    t = e(t || this.getActiveImage());
                    var i = this,
                        n = t.width() / 2,
                        r = t.height() / 2,
                        s = parseInt(t.css("left"), 10),
                        o = parseInt(t.css("top"), 10),
                        a = s || 0,
                        l = o || 0,
                        c = 0,
                        u = 0,
                        h = !1,
                        d = O.timestamp(),
                        p = 0,
                        f = 0,
                        m = function (e, i, n) {
                            if (e > 0 && (f = g.round(g.max(-1 * e, g.min(0, i))), p !== f))
                                if (p = f, 8 === y) t.parent()["scroll" + n](-1 * f);
                                else {
                                    var r = {};
                                    r[n.toLowerCase()] = f, t.css(r)
                                }
                        },
                        v = function (e) {
                            O.timestamp() - d < 50 || (h = !0, n = i.getMousePosition(e).x, r = i.getMousePosition(e).y)
                        },
                        b = function () {
                            h && (c = t.width() - i._stageWidth, u = t.height() - i._stageHeight, s = n / i._stageWidth * c * -1, o = r / i._stageHeight * u * -1, a += (s - a) / i._options.imagePanSmoothness, l += (o - l) / i._options.imagePanSmoothness, m(u, l, "Top"), m(c, a, "Left"))
                        };
                    return 8 === y && (t.parent().scrollTop(-1 * l).scrollLeft(-1 * a), t.css({
                        top: 0,
                        left: 0
                    })), this.$("stage").unbind("mousemove", v).bind("mousemove", v), this.addTimer("pan" + i._id, b, 50, !0), this
                }
            },
            proxy: function (e, t) {
                return "function" != typeof e ? m : (t = t || this, function () {
                    return e.apply(t, O.array(arguments))
                })
            },
            removePan: function () {
                return this.$("stage").unbind("mousemove"), this.clearTimer("pan" + this._id), this
            },
            addElement: function () {
                var t = this._dom;
                return e.each(O.array(arguments), function (e, i) {
                    t[i] = O.create("galleria-" + i)
                }), this
            },
            attachKeyboard: function () {
                return this._keyboard.attach.apply(this._keyboard, O.array(arguments)), this
            },
            detachKeyboard: function () {
                return this._keyboard.detach.apply(this._keyboard, O.array(arguments)), this
            },
            appendChild: function (e, t) {
                return this.$(e).append(this.get(t) || t), this
            },
            prependChild: function (e, t) {
                return this.$(e).prepend(this.get(t) || t), this
            },
            remove: function () {
                return this.$(O.array(arguments).join(",")).remove(), this
            },
            append: function (e) {
                var t, i;
                for (t in e)
                    if (e.hasOwnProperty(t))
                        if (e[t].constructor === Array)
                            for (i = 0; e[t][i]; i++) this.appendChild(t, e[t][i]);
                        else this.appendChild(t, e[t]);
                return this
            },
            _scaleImage: function (t, i) {
                if (t = t || this._controls.getActive()) {
                    var n, r = function (t) {
                        e(t.container).children(":first").css({
                            top: g.max(0, O.parseValue(t.image.style.top)),
                            left: g.max(0, O.parseValue(t.image.style.left)),
                            width: O.parseValue(t.image.width),
                            height: O.parseValue(t.image.height)
                        })
                    };
                    return i = e.extend({
                        width: this._stageWidth,
                        height: this._stageHeight,
                        crop: this._options.imageCrop,
                        max: this._options.maxScaleRatio,
                        min: this._options.minScaleRatio,
                        margin: this._options.imageMargin,
                        position: this._options.imagePosition,
                        iframelimit: this._options.maxVideoSize
                    }, i), this._options.layerFollow && this._options.imageCrop !== !0 ? "function" == typeof i.complete ? (n = i.complete, i.complete = function () {
                        n.call(t, t), r(t)
                    }) : i.complete = r : e(t.container).children(":first").css({
                        top: 0,
                        left: 0
                    }), t.scale(i), this
                }
            },
            updateCarousel: function () {
                return this._carousel.update(), this
            },
            resize: function (t, n) {
                "function" == typeof t && (n = t, t = i), t = e.extend({
                    width: 0,
                    height: 0
                }, t);
                var r = this,
                    s = this.$("container");
                return e.each(t, function (e, i) {
                    i || (s[e]("auto"), t[e] = r._getWH()[e])
                }), e.each(t, function (e, t) {
                    s[e](t)
                }), this.rescale(n)
            },
            rescale: function (n, r, s) {
                var o = this;
                "function" == typeof n && (s = n, n = i);
                var a = function () {
                    o._stageWidth = n || o.$("stage").width(), o._stageHeight = r || o.$("stage").height(), o._options.swipe ? (e.each(o._controls.slides, function (t, i) {
                        o._scaleImage(i), e(i.container).css("left", o._stageWidth * t)
                    }), o.$("images").css("width", o._stageWidth * o.getDataLength())) : o._scaleImage(), o._options.carousel && o.updateCarousel(), o._controls.frames[o._controls.active].scale({
                        width: o._stageWidth,
                        height: o._stageHeight,
                        iframelimit: o._options.maxVideoSize
                    }), o.trigger(t.RESCALE), "function" == typeof s && s.call(o)
                };
                return a.call(o), this
            },
            refreshImage: function () {
                return this._scaleImage(), this._options.imagePan && this.addPan(), this
            },
            show: function (i, r, s) {
                var o = this._options.swipe;
                if (o || !(this._queue.length > 3 || i === !1 || !this._options.queue && this._queue.stalled)) {
                    if (i = g.max(0, g.min(parseInt(i, 10), this.getDataLength() - 1)), r = "undefined" != typeof r ? !!r : i < this.getIndex(), s = s || !1, !s && t.History) return void t.History.set(i.toString());
                    if (this.finger && i !== this._active && (this.finger.to = -(i * this.finger.width), this.finger.index = i), this._active = i, o) {
                        var l = this.getData(i),
                            c = this;
                        if (!l) return;
                        var u = this.isFullscreen() && l.big ? l.big : l.image || l.iframe,
                            h = this._controls.slides[i],
                            d = h.isCached(u),
                            p = this._thumbnails[i],
                            f = {
                                cached: d,
                                index: i,
                                rewind: r,
                                imageTarget: h.image,
                                thumbTarget: p.image,
                                galleriaData: l
                            };
                        this.trigger(e.extend(f, {
                            type: t.LOADSTART
                        })), e(c._thumbnails[i].container).addClass("active").siblings(".active").removeClass("active"), c.$("container").removeClass("videoplay");
                        var m = function () {
                            c._layers[i].innerHTML = c.getData().layer || "", c.trigger(e.extend(f, {
                                type: t.LOADFINISH
                            })), c._playCheck()
                        };
                        n.setTimeout(function () {
                            h.ready ? (c.trigger(e.extend(f, {
                                type: t.IMAGE
                            })), m()) : (l.iframe && !l.image && (h.isIframe = !0), h.load(u, function (i) {
                                c._scaleImage(i, m).trigger(e.extend(f, {
                                    type: t.IMAGE
                                })), m()
                            }))
                        }, 800)
                    } else a.push.call(this._queue, {
                        index: i,
                        rewind: r
                    }), this._queue.stalled || this._show();
                    return this
                }
            },
            _show: function () {
                var r = this,
                    s = this._queue[0],
                    o = this.getData(s.index);
                if (o) {
                    var l = this.isFullscreen() && o.big ? o.big : o.image || o.iframe,
                        c = this._controls.getActive(),
                        u = this._controls.getNext(),
                        h = u.isCached(l),
                        d = this._thumbnails[s.index],
                        p = function () {
                            e(u.image).trigger("mouseup")
                        };
                    r.$("container").toggleClass("iframe", !!o.isIframe).removeClass("videoplay");
                    var f = function (s, o, l, c, u) {
                        return function () {
                            var h;
                            V.active = !1, O.toggleQuality(o.image, r._options.imageQuality), r._layers[r._controls.active].innerHTML = "", e(l.container).css({
                                zIndex: 0,
                                opacity: 0
                            }).show(), e(l.container).find("iframe, .galleria-videoicon").remove(), e(r._controls.frames[r._controls.active].container).hide(), e(o.container).css({
                                zIndex: 1,
                                left: 0,
                                top: 0
                            }).show(), r._controls.swap(), r._options.imagePan && r.addPan(o.image), (s.iframe && s.image || s.link || r._options.lightbox || r._options.clicknext) && e(o.image).css({
                                cursor: "pointer"
                            }).bind("mouseup", function (o) {
                                if (!("number" == typeof o.which && o.which > 1)) {
                                    if (s.iframe) {
                                        r.isPlaying() && r.pause();
                                        var a = r._controls.frames[r._controls.active],
                                            l = r._stageWidth,
                                            c = r._stageHeight;
                                        return e(a.container).css({
                                            width: l,
                                            height: c,
                                            opacity: 0
                                        }).show().animate({
                                            opacity: 1
                                        }, 200), void n.setTimeout(function () {
                                            a.load(s.iframe + (s.video ? "&autoplay=1" : ""), {
                                                width: l,
                                                height: c
                                            }, function (e) {
                                                r.$("container").addClass("videoplay"), e.scale({
                                                    width: r._stageWidth,
                                                    height: r._stageHeight,
                                                    iframelimit: s.video ? r._options.maxVideoSize : i
                                                })
                                            })
                                        }, 100)
                                    }
                                    return r._options.clicknext && !t.TOUCH ? (r._options.pauseOnInteraction && r.pause(), void r.next()) : s.link ? void(r._options.popupLinks ? h = n.open(s.link, "_blank") : n.location.href = s.link) : void(r._options.lightbox && r.openLightbox())
                                }
                            }), r._playCheck(), r.trigger({
                                type: t.IMAGE,
                                index: c.index,
                                imageTarget: o.image,
                                thumbTarget: u.image,
                                galleriaData: s
                            }), a.shift.call(r._queue), r._queue.stalled = !1, r._queue.length && r._show()
                        }
                    }(o, u, c, s, d);
                    if (this._options.carousel && this._options.carouselFollow && this._carousel.follow(s.index), this._options.preload) {
                        var g, m, v, y = this.getNext();
                        try {
                            for (m = this._options.preload; m > 0; m--) g = new t.Picture, v = r.getData(y), g.preload(this.isFullscreen() && v.big ? v.big : v.image), y = r.getNext(y)
                        } catch (b) {}
                    }
                    O.show(u.container), u.isIframe = o.iframe && !o.image, e(r._thumbnails[s.index].container).addClass("active").siblings(".active").removeClass("active"), r.trigger({
                        type: t.LOADSTART,
                        cached: h,
                        index: s.index,
                        rewind: s.rewind,
                        imageTarget: u.image,
                        thumbTarget: d.image,
                        galleriaData: o
                    }), r._queue.stalled = !0, u.load(l, function (n) {
                        var a = e(r._layers[1 - r._controls.active]).html(o.layer || "").hide();
                        r._scaleImage(n, {
                            complete: function (n) {
                                "image" in c && O.toggleQuality(c.image, !1), O.toggleQuality(n.image, !1), r.removePan(), r.setInfo(s.index), r.setCounter(s.index), o.layer && (a.show(), (o.iframe && o.image || o.link || r._options.lightbox || r._options.clicknext) && a.css("cursor", "pointer").unbind("mouseup").mouseup(p)), o.video && o.image && N(n.container);
                                var l = r._options.transition;
                                if (e.each({
                                    initial: null === c.image,
                                    touch: t.TOUCH,
                                    fullscreen: r.isFullscreen()
                                }, function (e, t) {
                                    return t && r._options[e + "Transition"] !== i ? (l = r._options[e + "Transition"], !1) : void 0
                                }), l in V.effects == !1) f();
                                else {
                                    var u = {
                                        prev: c.container,
                                        next: n.container,
                                        rewind: s.rewind,
                                        speed: r._options.transitionSpeed || 400
                                    };
                                    V.active = !0, V.init.call(r, l, u, f)
                                }
                                r.trigger({
                                    type: t.LOADFINISH,
                                    cached: h,
                                    index: s.index,
                                    rewind: s.rewind,
                                    imageTarget: n.image,
                                    thumbTarget: r._thumbnails[s.index].image,
                                    galleriaData: r.getData(s.index)
                                })
                            }
                        })
                    })
                }
            },
            getNext: function (e) {
                return e = "number" == typeof e ? e : this.getIndex(), e === this.getDataLength() - 1 ? 0 : e + 1
            },
            getPrev: function (e) {
                return e = "number" == typeof e ? e : this.getIndex(), 0 === e ? this.getDataLength() - 1 : e - 1
            },
            next: function () {
                return this.getDataLength() > 1 && this.show(this.getNext(), !1), this
            },
            prev: function () {
                return this.getDataLength() > 1 && this.show(this.getPrev(), !0), this
            },
            get: function (e) {
                return e in this._dom ? this._dom[e] : null
            },
            getData: function (e) {
                return e in this._data ? this._data[e] : this._data[this._active]
            },
            getDataLength: function () {
                return this._data.length
            },
            getIndex: function () {
                return "number" == typeof this._active ? this._active : !1
            },
            getStageHeight: function () {
                return this._stageHeight
            },
            getStageWidth: function () {
                return this._stageWidth
            },
            getOptions: function (e) {
                return "undefined" == typeof e ? this._options : this._options[e]
            },
            setOptions: function (t, i) {
                return "object" == typeof t ? e.extend(this._options, t) : this._options[t] = i, this
            },
            play: function (e) {
                return this._playing = !0, this._playtime = e || this._playtime, this._playCheck(), this.trigger(t.PLAY), this
            },
            pause: function () {
                return this._playing = !1, this.trigger(t.PAUSE), this
            },
            playToggle: function (e) {
                return this._playing ? this.pause() : this.play(e)
            },
            isPlaying: function () {
                return this._playing
            },
            isFullscreen: function () {
                return this._fullscreen.active
            },
            _playCheck: function () {
                var e = this,
                    i = 0,
                    n = 20,
                    r = O.timestamp(),
                    s = "play" + this._id;
                if (this._playing) {
                    this.clearTimer(s);
                    var o = function () {
                        return i = O.timestamp() - r, i >= e._playtime && e._playing ? (e.clearTimer(s), void e.next()) : void(e._playing && (e.trigger({
                            type: t.PROGRESS,
                            percent: g.ceil(i / e._playtime * 100),
                            seconds: g.floor(i / 1e3),
                            milliseconds: i
                        }), e.addTimer(s, o, n)))
                    };
                    e.addTimer(s, o, n)
                }
            },
            setPlaytime: function (e) {
                return this._playtime = e, this
            },
            setIndex: function (e) {
                return this._active = e, this
            },
            setCounter: function (e) {
                if ("number" == typeof e ? e++ : "undefined" == typeof e && (e = this.getIndex() + 1), this.get("current").innerHTML = e, y) {
                    var t = this.$("counter"),
                        i = t.css("opacity");
                    1 === parseInt(i, 10) ? O.removeAlpha(t[0]) : this.$("counter").css("opacity", i)
                }
                return this
            },
            setInfo: function (t) {
                var i = this,
                    n = this.getData(t);
                return e.each(["title", "description"], function (e, t) {
                    var r = i.$("info-" + t);
                    n[t] ? r[n[t].length ? "show" : "hide"]().html(n[t]) : r.empty().hide()
                }), this
            },
            hasInfo: function (e) {
                var t, i = "title description".split(" ");
                for (t = 0; i[t]; t++)
                    if (this.getData(e)[i[t]]) return !0;
                return !1
            },
            jQuery: function (t) {
                var i = this,
                    n = [];
                e.each(t.split(","), function (t, r) {
                    r = e.trim(r), i.get(r) && n.push(r)
                });
                var r = e(i.get(n.shift()));
                return e.each(n, function (e, t) {
                    r = r.add(i.get(t))
                }), r
            },
            $: function () {
                return this.jQuery.apply(this, O.array(arguments))
            }
        }, e.each(x, function (e, i) {
            var n = /_/.test(i) ? i.replace(/_/g, "") : i;
            t[i.toUpperCase()] = "galleria." + n
        }), e.extend(t, {
            IE9: 9 === y,
            IE8: 8 === y,
            IE7: 7 === y,
            IE6: 6 === y,
            IE: y,
            WEBKIT: /webkit/.test(d),
            CHROME: /chrome/.test(d),
            SAFARI: /safari/.test(d) && !/chrome/.test(d),
            QUIRK: y && r.compatMode && "BackCompat" === r.compatMode,
            MAC: /mac/.test(navigator.platform.toLowerCase()),
            OPERA: !!n.opera,
            IPHONE: /iphone/.test(d),
            IPAD: /ipad/.test(d),
            ANDROID: /android/.test(d),
            TOUCH: "ontouchstart" in r
        }), t.addTheme = function (i) {
            i.name || t.raise("No theme name specified"), i.defaults = "object" != typeof i.defaults ? {} : k(i.defaults);
            var r, s = !1;
            return "string" == typeof i.css ? (e("link").each(function (e, t) {
                return r = new RegExp(i.css), r.test(t.href) ? (s = !0, I(i), !1) : void 0
            }), s || e(function () {
                e("script").each(function (e, t) {
                    r = new RegExp("galleria\\." + i.name.toLowerCase() + "\\."), r.test(t.src) && (s = t.src.replace(/[^\/]*$/, "") + i.css, n.setTimeout(function () {
                        O.loadCSS(s, "galleria-theme", function () {
                            I(i)
                        })
                    }, 1))
                }), s || t.raise("No theme CSS loaded")
            })) : I(i), i
        }, t.loadTheme = function (i) {
            if (!e("script").filter(function () {
                return e(this).attr("src") == i
            }).length) {
                var r, s = !1;
                return e(n).load(function () {
                    s || (r = n.setTimeout(function () {
                        s || t.theme || t.raise("Galleria had problems loading theme at " + i + ". Please check theme path or load manually.", !0)
                    }, 2e4))
                }), t.unloadTheme(), O.loadScript(i, function () {
                    s = !0, n.clearTimeout(r)
                }), t
            }
        }, t.unloadTheme = function () {
            return "object" == typeof t.theme && (e("script").each(function (i, n) {
                new RegExp("galleria\\." + t.theme.name + "\\.").test(n.src) && e(n).remove()
            }), t.theme = i), t
        }, t.get = function (e) {
            return E[e] ? E[e] : "number" != typeof e ? E : void t.raise("Gallery index " + e + " not found")
        }, t.configure = function (i, n) {
            var r = {};
            return "string" == typeof i && n ? (r[i] = n, i = r) : e.extend(r, i), t.configure.options = r, e.each(t.get(), function (e, t) {
                t.setOptions(r)
            }), t
        }, t.configure.options = {}, t.on = function (i, n) {
            if (i) {
                n = n || m;
                var r = i + n.toString().replace(/\s/g, "") + O.timestamp();
                return e.each(t.get(), function (e, t) {
                    t._binds.push(r), t.bind(i, n)
                }), t.on.binds.push({
                    type: i,
                    callback: n,
                    hash: r
                }), t
            }
        }, t.on.binds = [], t.run = function (i, n) {
            return e.isFunction(n) && (n = {
                extend: n
            }), e(i || "#galleria").galleria(n), t
        }, t.addTransition = function (e, i) {
            return V.effects[e] = i, t
        }, t.utils = O, t.log = function () {
            var t = O.array(arguments);
            if (!("console" in n && "log" in n.console)) return n.alert(t.join("<br>"));
            try {
                return n.console.log.apply(n.console, t)
            } catch (i) {
                e.each(t, function () {
                    n.console.log(this)
                })
            }
        }, t.ready = function (i) {
            return "function" != typeof i ? t : (e.each(H, function (e, t) {
                i.call(t, t._options)
            }), t.ready.callbacks.push(i), t)
        }, t.ready.callbacks = [], t.raise = function (t, i) {
            var n = i ? "Fatal error" : "Error",
                r = {
                    color: "#fff",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 1e5
                },
                s = function (t) {
                    var s = '<div style="padding:4px;margin:0 0 2px;background:#' + (i ? "811" : "222") + ';">' + (i ? "<strong>" + n + ": </strong>" : "") + t + "</div>";
                    e.each(E, function () {
                        var e = this.$("errors"),
                            t = this.$("target");
                        e.length || (t.css("position", "relative"), e = this.addElement("errors").appendChild("target", "errors").$("errors").css(r)), e.append(s)
                    }), E.length || e("<div>").css(e.extend(r, {
                        position: "fixed"
                    })).append(s).appendTo(b().body)
                };
            if (c) {
                if (s(t), i) throw new Error(n + ": " + t)
            } else if (i) {
                if (P) return;
                P = !0, i = !1, s("Gallery could not load.")
            }
        }, t.version = l, t.requires = function (e, i) {
            return i = i || "You need to upgrade Galleria to version " + e + " to use one or more components.", t.version < e && t.raise(i, !0), t
        }, t.Picture = function (t) {
            this.id = t || null, this.image = null, this.container = O.create("galleria-image"), e(this.container).css({
                overflow: "hidden",
                position: "relative"
            }), this.original = {
                width: 0,
                height: 0
            }, this.ready = !1, this.isIframe = !1
        }, t.Picture.prototype = {
            cache: {},
            show: function () {
                O.show(this.image)
            },
            hide: function () {
                O.moveOut(this.image)
            },
            clear: function () {
                this.image = null
            },
            isCached: function (e) {
                return !!this.cache[e]
            },
            preload: function (t) {
                e(new Image).load(function (e, t) {
                    return function () {
                        t[e] = e
                    }
                }(t, this.cache)).attr("src", t)
            },
            load: function (i, r, s) {
                if ("function" == typeof r && (s = r, r = null), this.isIframe) {
                    var o = "if" + (new Date).getTime(),
                        a = this.image = e("<iframe>", {
                            src: i,
                            frameborder: 0,
                            id: o,
                            allowfullscreen: !0,
                            css: {
                                visibility: "hidden"
                            }
                        })[0];
                    return r && e(a).css(r), e(this.container).find("iframe,img").remove(), this.container.appendChild(this.image), e("#" + o).load(function (t, i) {
                        return function () {
                            n.setTimeout(function () {
                                e(t.image).css("visibility", "visible"), "function" == typeof i && i.call(t, t)
                            }, 10)
                        }
                    }(this, s)), this.container
                }
                this.image = new Image, t.IE8 && e(this.image).css("filter", "inherit");
                var l = !1,
                    c = !1,
                    u = e(this.container),
                    d = e(this.image),
                    p = function () {
                        l ? h ? e(this).attr("src", h) : t.raise("Image not found: " + i) : (l = !0, n.setTimeout(function (e, t) {
                            return function () {
                                e.attr("src", t + "?" + O.timestamp())
                            }
                        }(e(this), i), 50))
                    },
                    f = function (i, s, o) {
                        return function () {
                            var a = function () {
                                e(this).unbind("load"), i.original = r || {
                                    height: this.height,
                                    width: this.width
                                }, t.HAS3D && (this.style.MozTransform = this.style.webkitTransform = "translate3d(0,0,0)"), u.append(this), i.cache[o] = o, "function" == typeof s && n.setTimeout(function () {
                                    s.call(i, i)
                                }, 1)
                            };
                            this.width && this.height ? a.call(this) : n.setTimeout(function (i) {
                                return function () {
                                    i.width && i.height ? a.call(i) : c ? t.raise("Could not extract width/height from image: " + i.src + ". Traced measures: width:" + i.width + "px, height: " + i.height + "px.") : (e(new Image).load(f).attr("src", i.src), c = !0)
                                }
                            }(this), 2)
                        }
                    }(this, s, i);
                return u.find("iframe,img").remove(), d.css("display", "block"), O.hide(this.image), e.each("minWidth minHeight maxWidth maxHeight".split(" "), function (e, t) {
                    d.css(t, /min/.test(t) ? "0" : "none")
                }), d.load(f).bind("error", p).attr("src", i), this.container
            },
            scale: function (n) {
                var r = this;
                if (n = e.extend({
                    width: 0,
                    height: 0,
                    min: i,
                    max: i,
                    margin: 0,
                    complete: m,
                    position: "center",
                    crop: !1,
                    canvas: !1,
                    iframelimit: i
                }, n), this.isIframe) {
                    var s, o, a = n.width,
                        l = n.height;
                    if (n.iframelimit) {
                        var c = g.min(n.iframelimit / a, n.iframelimit / l);
                        1 > c ? (s = a * c, o = l * c, e(this.image).css({
                            top: l / 2 - o / 2,
                            left: a / 2 - s / 2,
                            position: "absolute"
                        })) : e(this.image).css({
                            top: 0,
                            left: 0
                        })
                    }
                    e(this.image).width(s || a).height(o || l).removeAttr("width").removeAttr("height"), e(this.container).width(a).height(l), n.complete.call(r, r);
                    try {
                        this.image.contentWindow && e(this.image.contentWindow).trigger("resize")
                    } catch (u) {}
                    return this.container
                }
                if (!this.image) return this.container;
                var h, d, p, f = e(r.container);
                return O.wait({
                    until: function () {
                        return h = n.width || f.width() || O.parseValue(f.css("width")), d = n.height || f.height() || O.parseValue(f.css("height")), h && d
                    },
                    success: function () {
                        var t = (h - 2 * n.margin) / r.original.width,
                            i = (d - 2 * n.margin) / r.original.height,
                            s = g.min(t, i),
                            o = g.max(t, i),
                            a = {
                                "true": o,
                                width: t,
                                height: i,
                                "false": s,
                                landscape: r.original.width > r.original.height ? o : s,
                                portrait: r.original.width < r.original.height ? o : s
                            },
                            l = a[n.crop.toString()],
                            c = "";
                        n.max && (l = g.min(n.max, l)), n.min && (l = g.max(n.min, l)), e.each(["width", "height"], function (t, i) {
                            e(r.image)[i](r[i] = r.image[i] = g.round(r.original[i] * l))
                        }), e(r.container).width(h).height(d), n.canvas && A && (A.elem.width = r.width, A.elem.height = r.height, c = r.image.src + ":" + r.width + "x" + r.height, r.image.src = A.cache[c] || function (e) {
                            A.context.drawImage(r.image, 0, 0, r.original.width * l, r.original.height * l);
                            try {
                                return p = A.elem.toDataURL(), A.length += p.length, A.cache[e] = p, p
                            } catch (t) {
                                return r.image.src
                            }
                        }(c));
                        var u = {},
                            f = {},
                            m = function (t, i, n) {
                                var s = 0;
                                if (/\%/.test(t)) {
                                    var o = parseInt(t, 10) / 100,
                                        a = r.image[i] || e(r.image)[i]();
                                    s = g.ceil(-1 * a * o + n * o)
                                } else s = O.parseValue(t);
                                return s
                            },
                            v = {
                                top: {
                                    top: 0
                                },
                                left: {
                                    left: 0
                                },
                                right: {
                                    left: "100%"
                                },
                                bottom: {
                                    top: "100%"
                                }
                            };
                        e.each(n.position.toLowerCase().split(" "), function (e, t) {
                            "center" === t && (t = "50%"), u[e ? "top" : "left"] = t
                        }), e.each(u, function (t, i) {
                            v.hasOwnProperty(i) && e.extend(f, v[i])
                        }), u = u.top ? e.extend(u, f) : f, u = e.extend({
                            top: "50%",
                            left: "50%"
                        }, u), e(r.image).css({
                            position: "absolute",
                            top: m(u.top, "height", d),
                            left: m(u.left, "width", h)
                        }), r.show(), r.ready = !0, n.complete.call(r, r)
                    },
                    error: function () {
                        t.raise("Could not scale image: " + r.image.src)
                    },
                    timeout: 1e3
                }), this
            }
        }, e.extend(e.easing, {
            galleria: function (e, t, i, n, r) {
                return (t /= r / 2) < 1 ? n / 2 * t * t * t + i : n / 2 * ((t -= 2) * t * t + 2) + i
            },
            galleriaIn: function (e, t, i, n, r) {
                return n * (t /= r) * t + i
            },
            galleriaOut: function (e, t, i, n, r) {
                return -n * (t /= r) * (t - 2) + i
            }
        }), t.Fastclick = function () {
            var i = /iP(ad|hone|od)/.test(navigator.userAgent),
                s = i && /OS 4_\d(_\d)?/.test(navigator.userAgent),
                o = i && /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent);
            return {
                init: function (i) {
                    var r, s = this;
                    this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.layer = i, e.each(["Click", "TouchStart", "TouchMove", "TouchEnd", "TouchCancel"], function (e, t) {
                        s["on" + t] = function (e) {
                            return function () {
                                e.apply(s, arguments)
                            }
                        }(s["on" + t])
                    }), t.TOUCH && (i.addEventListener("click", this.onClick, !0), i.addEventListener("touchstart", this.onTouchStart, !1), i.addEventListener("touchmove", this.onTouchMove, !1), i.addEventListener("touchend", this.onTouchEnd, !1), i.addEventListener("touchcancel", this.onTouchCancel, !1), n.Event.prototype.stopImmediatePropagation || (i.removeEventListener = function (e, t, r) {
                        var s = n.Node.prototype.removeEventListener;
                        "click" === e ? s.call(i, e, t.hijacked || t, r) : s.call(i, e, t, r)
                    }, i.addEventListener = function (e, t, r) {
                        var s = n.Node.prototype.addEventListener;
                        "click" === e ? s.call(i, e, t.hijacked || (t.hijacked = function (e) {
                            e.propagationStopped || t(e)
                        }), r) : s.call(i, e, t, r)
                    }), "function" == typeof i.onclick && (r = i.onclick, i.addEventListener("click", function (e) {
                        r(e)
                    }, !1), i.onclick = null))
                },
                sendClick: function (e, t) {
                    var i, s;
                    r.activeElement && r.activeElement !== e && r.activeElement.blur(), s = t.changedTouches[0], i = r.createEvent("MouseEvents"), i.initMouseEvent("click", !0, !0, n, 1, s.screenX, s.screenY, s.clientX, s.clientY, !1, !1, !1, !1, 0, null), i.forwardedTouchEvent = !0, e.dispatchEvent(i)
                },
                onTouchStart: function (e) {
                    var t, r, o;
                    if (t = e.target, r = e.targetTouches[0], i) {
                        if (o = n.getSelection(), o.rangeCount && !o.isCollapsed) return !0;
                        if (!s) {
                            if (r.identifier === this.lastTouchIdentifier) return e.preventDefault(), !1;
                            this.lastTouchIdentifier = r.identifier
                        }
                    }
                    return this.trackingClick = !0, this.trackingClickStart = e.timeStamp, this.targetElement = t, this.touchStartX = r.pageX, this.touchStartY = r.pageY, e.timeStamp - this.lastClickTime < 200 && e.preventDefault(), !0
                },
                touchHasMoved: function (e) {
                    var t = e.targetTouches[0];
                    return g.abs(t.pageX - this.touchStartX) > 10 || g.abs(t.pageY - this.touchStartY) > 10 ? !0 : !1
                },
                onTouchMove: function (e) {
                    return this.trackingClick ? ((this.targetElement !== e.target || this.touchHasMoved(e)) && (this.trackingClick = !1, this.targetElement = null), !0) : !0
                },
                onTouchEnd: function (e) {
                    var t, i, s, a = this.targetElement;
                    return this.trackingClick ? e.timeStamp - this.lastClickTime < 200 ? (this.cancelNextClick = !0, !0) : (this.lastClickTime = e.timeStamp, t = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, o && (s = e.changedTouches[0], a = e.target, a = r.elementFromPoint(s.pageX - n.pageXOffset, s.pageY - n.pageYOffset)), i = a.tagName.toLowerCase(), e.preventDefault(), this.sendClick(a, e), !1) : !0
                },
                onTouchCancel: function () {
                    this.trackingClick = !1, this.targetElement = null
                },
                onClick: function (e) {
                    var t;
                    return this.targetElement ? e.forwardedTouchEvent ? !0 : (t = this.targetElement, this.targetElement = null, this.trackingClick ? (this.trackingClick = !1, !0) : e.cancelable && this.cancelNextClick ? (this.cancelNextClick = !1, e.stopImmediatePropagation ? e.stopImmediatePropagation() : e.propagationStopped = !0, e.stopPropagation(), e.preventDefault(), !1) : !0) : !0
                }
            }
        }(), t.Finger = function () {
            var i = g.abs,
                o = t.HAS3D = function () {
                    var t, i, n = r.createElement("p"),
                        s = ["webkit", "O", "ms", "Moz", ""],
                        o = 0,
                        a = "transform";
                    for (b().html.insertBefore(n, null); s[o]; o++) i = s[o] ? s[o] + "Transform" : a, void 0 !== n.style[i] && (n.style[i] = "translate3d(1px,1px,1px)", t = e(n).css(s[o] ? "-" + s[o].toLowerCase() + "-" + a : a));
                    return b().html.removeChild(n), void 0 !== t && t.length > 0 && "none" !== t
                }(),
                a = function () {
                    var e = "RequestAnimationFrame";
                    return n.requestAnimationFrame || n["webkit" + e] || n["moz" + e] || n["o" + e] || n["ms" + e] || function (e) {
                        n.setTimeout(e, 1e3 / 60)
                    }
                }(),
                l = function (t, i) {
                    if (this.config = {
                        start: 0,
                        duration: 500,
                        onchange: function () {},
                        oncomplete: function () {},
                        easing: function (e, t, i, n, r) {
                            return -n * ((t = t / r - 1) * t * t * t - 1) + i
                        }
                    }, t.children.length) {
                        var r = this;
                        e.extend(this.config, i), this.elem = t, this.child = t.children[0], this.to = this.pos = 0, this.touching = !1, this.start = {}, this.index = this.config.start, this.anim = 0, o || (this.child.style.position = "absolute", this.elem.style.position = "relative"), e.each(["ontouchstart", "ontouchmove", "ontouchend", "setup"], function (e, t) {
                            r[t] = function (e) {
                                return function () {
                                    e.apply(r, arguments)
                                }
                            }(r[t])
                        }), this.setX = function () {
                            var e = r.child.style;
                            return o ? void(e.MozTransform = e.webkitTransform = "translate3d(" + r.pos + "px,0,0)") : void(e.left = r.pos + "px")
                        }, e(t).bind("touchstart", this.ontouchstart), e(n).bind("resize", this.setup), e(n).bind("orientationchange", this.setup), this.setup(), ! function s() {
                            a(s), r.loop.call(r)
                        }()
                    }
                };
            return l.prototype = {
                constructor: l,
                setup: function () {
                    this.width = e(this.elem).width(), this.length = g.ceil(e(this.child).width() / this.width), 0 !== this.index && (this.index = g.max(0, g.min(this.index, this.length - 1)), this.pos = this.to = -this.width * this.index)
                },
                setPosition: function (e) {
                    this.pos = e, this.to = e
                },
                ontouchstart: function (e) {
                    var t = e.originalEvent.touches;
                    this.start = {
                        pageX: t[0].pageX,
                        pageY: t[0].pageY,
                        time: +new Date
                    }, this.isScrolling = null, this.touching = !0, this.deltaX = 0, s.bind("touchmove", this.ontouchmove), s.bind("touchend", this.ontouchend)
                },
                ontouchmove: function (e) {
                    var t = e.originalEvent.touches;
                    t && t.length > 1 || e.scale && 1 !== e.scale || (this.deltaX = t[0].pageX - this.start.pageX, null === this.isScrolling && (this.isScrolling = !!(this.isScrolling || i(this.deltaX) < i(t[0].pageY - this.start.pageY))), this.isScrolling || (e.preventDefault(), this.deltaX /= !this.index && this.deltaX > 0 || this.index == this.length - 1 && this.deltaX < 0 ? i(this.deltaX) / this.width + 1.8 : 1, this.to = this.deltaX - this.index * this.width), e.stopPropagation())
                },
                ontouchend: function () {
                    this.touching = !1;
                    var e = +new Date - this.start.time < 250 && i(this.deltaX) > 40 || i(this.deltaX) > this.width / 2,
                        t = !this.index && this.deltaX > 0 || this.index == this.length - 1 && this.deltaX < 0;
                    this.isScrolling || this.show(this.index + (e && !t ? this.deltaX < 0 ? 1 : -1 : 0)), s.unbind("touchmove", this.ontouchmove), s.unbind("touchend", this.ontouchend)
                },
                show: function (e) {
                    e != this.index ? this.config.onchange.call(this, e) : this.to = -(e * this.width)
                },
                moveTo: function (e) {
                    e != this.index && (this.pos = this.to = -(e * this.width), this.index = e)
                },
                loop: function () {
                    var e = this.to - this.pos,
                        t = 1;
                    this.width && e && (t = g.max(.5, g.min(2, g.abs(e / this.width)))), this.touching || i(e) <= 1 ? (this.pos = this.to, this.anim && this.config.oncomplete(this.index), this.anim = 0) : (this.anim || (this.anim = {
                        v: this.pos,
                        c: e,
                        t: +new Date,
                        f: t
                    }), this.pos = this.config.easing(null, +new Date - this.anim.t, this.anim.v, this.anim.c, this.config.duration * this.anim.f)), this.setX()
                }
            }, l
        }(), e.fn.galleria = function (i) {
            var n = this.selector;
            return e(this).length ? this.each(function () {
                e.data(this, "galleria") && (e.data(this, "galleria").destroy(), e(this).find("*").hide()), e.data(this, "galleria", (new t).init(this, i))
            }) : (e(function () {
                e(n).length ? e(n).galleria(i) : t.utils.wait({
                    until: function () {
                        return e(n).length
                    },
                    success: function () {
                        e(n).galleria(i)
                    },
                    error: function () {
                        t.raise('Init failed: Galleria could not find the element "' + n + '".')
                    },
                    timeout: 5e3
                })
            }), this)
        }
    }(jQuery),
    function (e) {
        e.expander = {
            version: "1.4.7",
            defaults: {
                slicePoint: 100,
                preserveWords: !0,
                widow: 4,
                expandText: "read more",
                expandPrefix: "&hellip; ",
                expandAfterSummary: !1,
                summaryClass: "summary",
                detailClass: "details",
                moreClass: "read-more",
                lessClass: "read-less",
                collapseTimer: 0,
                expandEffect: "slideDown",
                expandSpeed: 250,
                collapseEffect: "slideUp",
                collapseSpeed: 200,
                userCollapse: !0,
                userCollapseText: "read less",
                userCollapsePrefix: " ",
                onSlice: null,
                beforeExpand: null,
                afterExpand: null,
                onCollapse: null,
                afterCollapse: null
            }
        }, e.fn.expander = function (t) {
            function i(e, t) {
                var i = "span",
                    n = e.summary;
                return t ? (i = "div", g.test(n) && !e.expandAfterSummary ? n = n.replace(g, e.moreLabel + "$1") : n += e.moreLabel, n = '<div class="' + e.summaryClass + '">' + n + "</div>") : n += e.moreLabel, [n, " <", i + ' class="' + e.detailClass + '"', ">", e.details, "</" + i + ">"].join("")
            }

            function n(e) {
                var t = '<span class="' + e.moreClass + '">' + e.expandPrefix;
                return t += '<a href="#">' + e.expandText + "</a></span>"
            }

            function r(t, i) {
                return t.lastIndexOf("<") > t.lastIndexOf(">") && (t = t.slice(0, t.lastIndexOf("<"))), i && (t = t.replace(h, "")), e.trim(t)
            }

            function s(e, t) {
                t.stop(!0, !0)[e.collapseEffect](e.collapseSpeed, function () {
                    var i = t.prev("span." + e.moreClass).show();
                    i.length || t.parent().children("div." + e.summaryClass).show().find("span." + e.moreClass).show(), e.afterCollapse && e.afterCollapse.call(t)
                })
            }

            function o(t, i, n) {
                t.collapseTimer && (l = setTimeout(function () {
                    s(t, i), e.isFunction(t.onCollapse) && t.onCollapse.call(n, !1)
                }, t.collapseTimer))
            }
            var a = "init";
            "string" == typeof t && (a = t, t = {});
            var l, c = e.extend({}, e.expander.defaults, t),
                u = /^<(?:area|br|col|embed|hr|img|input|link|meta|param).*>$/i,
                h = c.wordEnd || /(&(?:[^;]+;)?|[a-zA-Z\u00C0-\u0100]+)$/,
                d = /<\/?(\w+)[^>]*>/g,
                p = /<(\w+)[^>]*>/g,
                f = /<\/(\w+)>/g,
                g = /(<\/[^>]+>)\s*$/,
                m = /^(<[^>]+>)+.?/,
                v = {
                    init: function () {
                        this.each(function () {
                            var t, a, h, g, v, y, b, w, _, x, k, T, C, S, $ = [],
                                D = [],
                                H = {},
                                E = this,
                                P = e(this),
                                A = e([]),
                                M = e.extend({}, c, P.data("expander") || e.meta && P.data() || {}),
                                I = !!P.find("." + M.detailClass).length,
                                O = !!P.find("*").filter(function () {
                                    var t = e(this).css("display");
                                    return /^block|table|list/.test(t)
                                }).length,
                                N = O ? "div" : "span",
                                V = N + "." + M.detailClass,
                                B = M.moreClass + "",
                                L = M.lessClass + "",
                                j = M.expandSpeed || 0,
                                F = e.trim(P.html()),
                                R = (e.trim(P.text()), F.slice(0, M.slicePoint));
                            if (M.moreSelector = "span." + B.split(" ").join("."), M.lessSelector = "span." + L.split(" ").join("."), !e.data(this, "expanderInit")) {
                                for (e.data(this, "expanderInit", !0), e.data(this, "expander", M), e.each(["onSlice", "beforeExpand", "afterExpand", "onCollapse", "afterCollapse"], function (t, i) {
                                    H[i] = e.isFunction(M[i])
                                }), R = r(R), v = R.replace(d, "").length; M.slicePoint > v;) g = F.charAt(R.length), "<" === g && (g = F.slice(R.length).match(m)[0]), R += g, v++;
                                for (R = r(R, M.preserveWords), y = R.match(p) || [], b = R.match(f) || [], h = [], e.each(y, function (e, t) {
                                    u.test(t) || h.push(t)
                                }), y = h, a = b.length, t = 0; a > t; t++) b[t] = b[t].replace(f, "$1");
                                if (e.each(y, function (t, i) {
                                    var n = i.replace(p, "$1"),
                                        r = e.inArray(n, b); - 1 === r ? ($.push(i), D.push("</" + n + ">")) : b.splice(r, 1)
                                }), D.reverse(), I) _ = P.find(V).remove().html(), R = P.html(), F = R + _, w = "";
                                else {
                                    if (_ = F.slice(R.length), x = e.trim(_.replace(d, "")), "" === x || x.split(/\s+/).length < M.widow) return;
                                    w = D.pop() || "", R += D.join(""), _ = $.join("") + _
                                }
                                M.moreLabel = P.find(M.moreSelector).length ? "" : n(M), O && (_ = F), R += w, M.summary = R, M.details = _, M.lastCloseTag = w, H.onSlice && (h = M.onSlice.call(E, M), M = h && h.details ? h : M), k = i(M, O), P.html(k), C = P.find(V), S = P.find(M.moreSelector), "slideUp" === M.collapseEffect && "slideDown" !== M.expandEffect || P.is(":hidden") ? C.css({
                                    display: "none"
                                }) : C[M.collapseEffect](0), A = P.find("div." + M.summaryClass), T = function (e) {
                                    e.preventDefault(), S.hide(), A.hide(), H.beforeExpand && M.beforeExpand.call(E), C.stop(!1, !0)[M.expandEffect](j, function () {
                                        C.css({
                                            zoom: ""
                                        }), H.afterExpand && M.afterExpand.call(E), o(M, C, E)
                                    })
                                }, S.find("a").unbind("click.expander").bind("click.expander", T), M.userCollapse && !P.find(M.lessSelector).length && P.find(V).append('<span class="' + M.lessClass + '">' + M.userCollapsePrefix + '<a href="#">' + M.userCollapseText + "</a></span>"), P.find(M.lessSelector + " a").unbind("click.expander").bind("click.expander", function (t) {
                                    t.preventDefault(), clearTimeout(l);
                                    var i = e(this).closest(V);
                                    s(M, i), H.onCollapse && M.onCollapse.call(E, !0)
                                })
                            }
                        })
                    },
                    destroy: function () {
                        this.each(function () {
                            var t, i, n = e(this);
                            n.data("expanderInit") && (t = e.extend({}, n.data("expander") || {}, c), i = n.find("." + t.detailClass).contents(), n.removeData("expanderInit"), n.removeData("expander"), n.find(t.moreSelector).remove(), n.find("." + t.summaryClass).remove(), n.find("." + t.detailClass).after(i).remove(), n.find(t.lessSelector).remove())
                        })
                    }
                };
            return v[a] && v[a].call(this), this
        }, e.fn.expander.defaults = e.expander.defaults
    }(jQuery), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function (e, t, i, n, r) {
            return jQuery.easing[jQuery.easing.def](e, t, i, n, r)
        },
        easeInQuad: function (e, t, i, n, r) {
            return n * (t /= r) * t + i
        },
        easeOutQuad: function (e, t, i, n, r) {
            return -n * (t /= r) * (t - 2) + i
        },
        easeInOutQuad: function (e, t, i, n, r) {
            return (t /= r / 2) < 1 ? n / 2 * t * t + i : -n / 2 * (--t * (t - 2) - 1) + i
        },
        easeInCubic: function (e, t, i, n, r) {
            return n * (t /= r) * t * t + i
        },
        easeOutCubic: function (e, t, i, n, r) {
            return n * ((t = t / r - 1) * t * t + 1) + i
        },
        easeInOutCubic: function (e, t, i, n, r) {
            return (t /= r / 2) < 1 ? n / 2 * t * t * t + i : n / 2 * ((t -= 2) * t * t + 2) + i
        },
        easeInQuart: function (e, t, i, n, r) {
            return n * (t /= r) * t * t * t + i
        },
        easeOutQuart: function (e, t, i, n, r) {
            return -n * ((t = t / r - 1) * t * t * t - 1) + i
        },
        easeInOutQuart: function (e, t, i, n, r) {
            return (t /= r / 2) < 1 ? n / 2 * t * t * t * t + i : -n / 2 * ((t -= 2) * t * t * t - 2) + i
        },
        easeInQuint: function (e, t, i, n, r) {
            return n * (t /= r) * t * t * t * t + i
        },
        easeOutQuint: function (e, t, i, n, r) {
            return n * ((t = t / r - 1) * t * t * t * t + 1) + i
        },
        easeInOutQuint: function (e, t, i, n, r) {
            return (t /= r / 2) < 1 ? n / 2 * t * t * t * t * t + i : n / 2 * ((t -= 2) * t * t * t * t + 2) + i
        },
        easeInSine: function (e, t, i, n, r) {
            return -n * Math.cos(t / r * (Math.PI / 2)) + n + i
        },
        easeOutSine: function (e, t, i, n, r) {
            return n * Math.sin(t / r * (Math.PI / 2)) + i
        },
        easeInOutSine: function (e, t, i, n, r) {
            return -n / 2 * (Math.cos(Math.PI * t / r) - 1) + i
        },
        easeInExpo: function (e, t, i, n, r) {
            return 0 == t ? i : n * Math.pow(2, 10 * (t / r - 1)) + i
        },
        easeOutExpo: function (e, t, i, n, r) {
            return t == r ? i + n : n * (-Math.pow(2, -10 * t / r) + 1) + i
        },
        easeInOutExpo: function (e, t, i, n, r) {
            return 0 == t ? i : t == r ? i + n : (t /= r / 2) < 1 ? n / 2 * Math.pow(2, 10 * (t - 1)) + i : n / 2 * (-Math.pow(2, -10 * --t) + 2) + i
        },
        easeInCirc: function (e, t, i, n, r) {
            return -n * (Math.sqrt(1 - (t /= r) * t) - 1) + i
        },
        easeOutCirc: function (e, t, i, n, r) {
            return n * Math.sqrt(1 - (t = t / r - 1) * t) + i
        },
        easeInOutCirc: function (e, t, i, n, r) {
            return (t /= r / 2) < 1 ? -n / 2 * (Math.sqrt(1 - t * t) - 1) + i : n / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + i
        },
        easeInElastic: function (e, t, i, n, r) {
            var s = 1.70158,
                o = 0,
                a = n;
            if (0 == t) return i;
            if (1 == (t /= r)) return i + n;
            if (o || (o = .3 * r), a < Math.abs(n)) {
                a = n;
                var s = o / 4
            } else var s = o / (2 * Math.PI) * Math.asin(n / a);
            return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t * r - s) * Math.PI / o)) + i
        },
        easeOutElastic: function (e, t, i, n, r) {
            var s = 1.70158,
                o = 0,
                a = n;
            if (0 == t) return i;
            if (1 == (t /= r)) return i + n;
            if (o || (o = .3 * r), a < Math.abs(n)) {
                a = n;
                var s = o / 4
            } else var s = o / (2 * Math.PI) * Math.asin(n / a);
            return a * Math.pow(2, -10 * t) * Math.sin(2 * (t * r - s) * Math.PI / o) + n + i
        },
        easeInOutElastic: function (e, t, i, n, r) {
            var s = 1.70158,
                o = 0,
                a = n;
            if (0 == t) return i;
            if (2 == (t /= r / 2)) return i + n;
            if (o || (o = .3 * r * 1.5), a < Math.abs(n)) {
                a = n;
                var s = o / 4
            } else var s = o / (2 * Math.PI) * Math.asin(n / a);
            return 1 > t ? -.5 * a * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t * r - s) * Math.PI / o) + i : a * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (t * r - s) * Math.PI / o) * .5 + n + i
        },
        easeInBack: function (e, t, i, n, r, s) {
            return void 0 == s && (s = 1.70158), n * (t /= r) * t * ((s + 1) * t - s) + i
        },
        easeOutBack: function (e, t, i, n, r, s) {
            return void 0 == s && (s = 1.70158), n * ((t = t / r - 1) * t * ((s + 1) * t + s) + 1) + i
        },
        easeInOutBack: function (e, t, i, n, r, s) {
            return void 0 == s && (s = 1.70158), (t /= r / 2) < 1 ? n / 2 * t * t * (((s *= 1.525) + 1) * t - s) + i : n / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + i
        },
        easeInBounce: function (e, t, i, n, r) {
            return n - jQuery.easing.easeOutBounce(e, r - t, 0, n, r) + i
        },
        easeOutBounce: function (e, t, i, n, r) {
            return (t /= r) < 1 / 2.75 ? 7.5625 * n * t * t + i : 2 / 2.75 > t ? n * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + i : 2.5 / 2.75 > t ? n * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + i : n * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + i
        },
        easeInOutBounce: function (e, t, i, n, r) {
            return r / 2 > t ? .5 * jQuery.easing.easeInBounce(e, 2 * t, 0, n, r) + i : .5 * jQuery.easing.easeOutBounce(e, 2 * t - r, 0, n, r) + .5 * n + i
        }
    }),
    function () {
        var e, t;
        e = this.jQuery, t = e(window), e.fn.stick_in_parent = function (i) {
            var n, r, s, o, a, l, c;
            for (null == i && (i = {}), o = i.sticky_class, n = i.inner_scrolling, s = i.parent, r = i.offset_top, null == r && (r = 0), null == s && (s = void 0), null == n && (n = !0), null == o && (o = "is_stuck"), a = function (i, a, l, c, u, h, d) {
                var p, f, g, m, v, y, b, w, _, x;
                if (!i.data("sticky_kit")) {
                    if (i.data("sticky_kit", !0), y = i.parent(), null != s && (y = y.closest(s)), !y.length) throw "failed to find stick parent";
                    if (g = !1, _ = e("<div />"), b = function () {
                        var e, t;
                        return e = parseInt(y.css("border-top-width"), 10), t = parseInt(y.css("padding-top"), 10), a = parseInt(y.css("padding-bottom"), 10), l = y.offset().top + e + t, c = y.height(), e = g ? (g = !1, i.insertAfter(_).css({
                            position: "",
                            top: "",
                            width: ""
                        }), _.detach(), !0) : void 0, u = i.offset().top - parseInt(i.css("margin-top"), 10) - r, h = i.outerHeight(!0), d = i.css("float"), _.css({
                            width: i.outerWidth(!0),
                            height: h,
                            display: i.css("display"),
                            "vertical-align": i.css("vertical-align"),
                            "float": d
                        }), e ? x() : void 0
                    }, b(), h !== c) return p = !1, m = void 0, v = r, x = function () {
                        var e, s, f, b;
                        return f = t.scrollTop(), null != m && (s = f - m), m = f, g ? (b = f + h + v > c + l, p && !b && (p = !1, i.css({
                            position: "fixed",
                            bottom: "",
                            top: v
                        }).trigger("sticky_kit:unbottom")), u > f && (g = !1, v = r, "left" !== d && "right" !== d || i.insertAfter(_), _.detach(), e = {
                            position: "",
                            width: "",
                            top: ""
                        }, i.css(e).removeClass(o).trigger("sticky_kit:unstick")), n && (e = t.height(), h > e && !p && (v -= s, v = Math.max(e - h, v), v = Math.min(r, v), g && i.css({
                            top: v + "px"
                        })))) : f > u && (g = !0, e = {
                            position: "fixed",
                            top: v
                        }, e.width = i.width() + "px", i.css(e).addClass(o).after(_), "left" !== d && "right" !== d || _.append(i), i.trigger("sticky_kit:stick")), g && (null == b && (b = f + h + v > c + l), !p && b) ? (p = !0, "static" === y.css("position") && y.css({
                            position: "relative"
                        }), i.css({
                            position: "absolute",
                            bottom: a,
                            top: ""
                        }).trigger("sticky_kit:bottom")) : void 0
                    }, w = function () {
                        return b(), x()
                    }, f = function () {
                        return t.off("scroll", x), e(document.body).off("sticky_kit:recalc", w), i.off("sticky_kit:detach", f), i.removeData("sticky_kit"), i.css({
                            position: "",
                            bottom: "",
                            top: ""
                        }), y.position("position", ""), g ? (i.insertAfter(_).removeClass(o), _.remove()) : void 0
                    }, t.on("scroll", x), t.on("resize", w), e(document.body).on("sticky_kit:recalc", w), i.on("sticky_kit:detach", f), setTimeout(x, 0)
                }
            }, l = 0, c = this.length; c > l; l++) i = this[l], a(e(i));
            return this
        }
    }.call(this),
    function (e) {
        e.fn.extend({
            blurjs: function (t) {
                function i(e) {
                    for (var t in window.blurJSClasses) e.hasClass(window.blurJSClasses[t]) && e.removeClass(window.blurJSClasses[t])
                }

                function n(e, t) {
                    switch (t) {
                    case "remove":
                        i(e)
                    }
                }

                function r(t) {
                    0 != e("#blurjs-" + t).length && e("#blurjs-" + t).remove(), e("body").append('<svg id="blurjs-' + t + '"><filter id="blur' + t + 'px"><feGaussianBlur in="SourceGraphic" stdDeviation="' + t + '"></feGaussianBlur></filter></svg>')
                }

                function s(e, t) {
                    return r(t), '<style type="text/css">.' + e + "{-ms-filter:blur(" + t + "px);-webkit-filter:blur(" + t + "px);-moz-filter:blur(" + t + "px);-o-filter:blur(" + t + 'px);filter: url("#blur' + t + 'px");filter:progid:DXImageTransform.Microsoft.Blur(pixelradius=' + t + ");}." + e + " img{filter:progid:DXImageTransform.Microsoft.Blur(pixelradius=" + t + ");}</style>"
                }
                if (this.defaultOptions = {
                    customClass: "blurjs",
                    radius: 5,
                    persist: !1
                }, "string" == typeof t) return void n(e(this), t);
                var o = e.extend({}, this.defaultOptions, t);
                return "undefined" == typeof window.blurJSClasses && (window.blurJSClasses = []), this.each(function () {
                    var t = e(this),
                        i = o.customClass + "-" + o.radius + "-radius";
                    if (window.blurJSClasses.push(i), o.persist || 0 === e("head style:contains(" + o.customClass + ")").length || e("head style:contains(" + o.customClass + ")").remove(), 0 === e("head style:contains(" + i + ")").length) {
                        var n = s(i, o.radius);
                        e(n).appendTo("head")
                    }
                    t.addClass(i)
                })
            }
        }), e.extend({
            blurjs: function (t) {
                if ("reset" == t)
                    for (var i in window.blurJSClasses) e("." + window.blurJSClasses[i]).removeClass(window.blurJSClasses[i])
            }
        })
    }(jQuery),
    function (e) {
        var t = /([^&=]+)=?([^&]*)/g,
            i = function (e) {
                return decodeURIComponent(e.replace(/\+/g, " "))
            };
        e.parseParams = function (n) {
            var r, s = {};
            if (n)
                for ("?" == n.substr(0, 1) && (n = n.substr(1)); r = t.exec(n);) {
                    var o = i(r[1]),
                        a = i(r[2]);
                    void 0 !== s[o] ? (e.isArray(s[o]) || (s[o] = [s[o]]), s[o].push(a)) : s[o] = a
                }
            return s
        }
    }(jQuery), ! function (e, t, i, n) {
        var r = e(t);
        e.fn.lazyload = function (s) {
            function o() {
                var t = 0;
                l.each(function () {
                    var i = e(this);
                    if (!c.skip_invisible || i.is(":visible"))
                        if (e.abovethetop(this, c) || e.leftofbegin(this, c));
                        else if (e.belowthefold(this, c) || e.rightoffold(this, c)) {
                        if (++t > c.failure_limit) return !1
                    } else i.trigger("appear"), t = 0
                })
            }
            var a, l = this,
                c = {
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
            return s && (n !== s.failurelimit && (s.failure_limit = s.failurelimit, delete s.failurelimit), n !== s.effectspeed && (s.effect_speed = s.effectspeed, delete s.effectspeed), e.extend(c, s)), a = c.container === n || c.container === t ? r : e(c.container), 0 === c.event.indexOf("scroll") && a.bind(c.event, function () {
                return o()
            }), this.each(function () {
                var t = this,
                    i = e(t);
                t.loaded = !1, (i.attr("src") === n || i.attr("src") === !1) && i.is("img") && i.attr("src", c.placeholder), i.one("appear", function () {
                    if (!this.loaded) {
                        if (c.appear) {
                            var n = l.length;
                            c.appear.call(t, n, c)
                        }
                        e("<img />").bind("load", function () {
                            var n = i.attr("data-" + c.data_attribute);
                            i.hide(), i.is("img") ? i.attr("src", n) : i.css("background-image", "url('" + n + "')"), i[c.effect](c.effect_speed), t.loaded = !0;
                            var r = e.grep(l, function (e) {
                                return !e.loaded
                            });
                            if (l = e(r), c.load) {
                                var s = l.length;
                                c.load.call(t, s, c)
                            }
                        }).attr("src", i.attr("data-" + c.data_attribute))
                    }
                }), 0 !== c.event.indexOf("scroll") && i.bind(c.event, function () {
                    t.loaded || i.trigger("appear")
                })
            }), r.bind("resize", function () {
                o()
            }), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && r.bind("pageshow", function (t) {
                t.originalEvent && t.originalEvent.persisted && l.each(function () {
                    e(this).trigger("appear")
                })
            }), e(i).ready(function () {
                o()
            }), this
        }, e.belowthefold = function (i, s) {
            var o;
            return o = s.container === n || s.container === t ? (t.innerHeight ? t.innerHeight : r.height()) + r.scrollTop() : e(s.container).offset().top + e(s.container).height(), o <= e(i).offset().top - s.threshold
        }, e.rightoffold = function (i, s) {
            var o;
            return o = s.container === n || s.container === t ? r.width() + r.scrollLeft() : e(s.container).offset().left + e(s.container).width(), o <= e(i).offset().left - s.threshold
        }, e.abovethetop = function (i, s) {
            var o;
            return o = s.container === n || s.container === t ? r.scrollTop() : e(s.container).offset().top, o >= e(i).offset().top + s.threshold + e(i).height()
        }, e.leftofbegin = function (i, s) {
            var o;
            return o = s.container === n || s.container === t ? r.scrollLeft() : e(s.container).offset().left, o >= e(i).offset().left + s.threshold + e(i).width()
        }, e.inviewport = function (t, i) {
            return !(e.rightoffold(t, i) || e.leftofbegin(t, i) || e.belowthefold(t, i) || e.abovethetop(t, i))
        }, e.extend(e.expr[":"], {
            "below-the-fold": function (t) {
                return e.belowthefold(t, {
                    threshold: 0
                })
            },
            "above-the-top": function (t) {
                return !e.belowthefold(t, {
                    threshold: 0
                })
            },
            "right-of-screen": function (t) {
                return e.rightoffold(t, {
                    threshold: 0
                })
            },
            "left-of-screen": function (t) {
                return !e.rightoffold(t, {
                    threshold: 0
                })
            },
            "in-viewport": function (t) {
                return e.inviewport(t, {
                    threshold: 0
                })
            },
            "above-the-fold": function (t) {
                return !e.belowthefold(t, {
                    threshold: 0
                })
            },
            "right-of-fold": function (t) {
                return e.rightoffold(t, {
                    threshold: 0
                })
            },
            "left-of-fold": function (t) {
                return !e.rightoffold(t, {
                    threshold: 0
                })
            }
        })
    }(jQuery, window, document), $(document).ready(function () {
        var e = navigator.userAgent,
            t = null; - 1 != e.indexOf("Trident/7") && -1 != e.indexOf("rv:11") ? t = "ie11" : -1 != e.indexOf("MSIE 10.0") ? t = "ie10" : -1 != e.indexOf("MSIE 9.0") ? t = "ie9" : -1 != e.indexOf("MSIE 8.0") && (t = "ie8"), t && $(".js-ie-sensitive").addClass(t)
    }), + function (e) {
        "use strict";
        var t = function (i, n) {
            this.$element = e(i), this.options = e.extend({}, t.DEFAULTS, n), this.transitioning = null, this.options.parent && (this.$parent = e(this.options.parent)), this.options.toggle && this.toggle()
        };
        t.DEFAULTS = {
            toggle: !0
        }, t.prototype.dimension = function () {
            var e = this.$element.hasClass("width");
            return e ? "width" : "height"
        }, t.prototype.show = function () {
            if (!this.transitioning && !this.$element.hasClass("in")) {
                var t = e.Event("show.bs.collapse");
                if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                    var i = this.$parent && this.$parent.find("> .panel > .in");
                    if (i && i.length) {
                        var n = i.data("bs.collapse");
                        if (n && n.transitioning) return;
                        i.collapse("hide"), n || i.data("bs.collapse", null)
                    }
                    var r = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[r](0), this.transitioning = 1;
                    var s = function () {
                        this.$element.removeClass("collapsing").addClass("in")[r]("auto"), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!e.support.transition) return s.call(this);
                    var o = e.camelCase(["scroll", r].join("-"));
                    this.$element.one(e.support.transition.end, e.proxy(s, this)).emulateTransitionEnd(350)[r](this.$element[0][o])
                }
            }
        }, t.prototype.hide = function () {
            if (!this.transitioning && this.$element.hasClass("in")) {
                var t = e.Event("hide.bs.collapse");
                if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                    var i = this.dimension();
                    this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
                    var n = function () {
                        this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
                    };
                    return e.support.transition ? void this.$element[i](0).one(e.support.transition.end, e.proxy(n, this)).emulateTransitionEnd(350) : n.call(this)
                }
            }
        }, t.prototype.toggle = function () {
            this[this.$element.hasClass("in") ? "hide" : "show"]()
        };
        var i = e.fn.collapse;
        e.fn.collapse = function (i) {
            return this.each(function () {
                var n = e(this),
                    r = n.data("bs.collapse"),
                    s = e.extend({}, t.DEFAULTS, n.data(), "object" == typeof i && i);
                r || n.data("bs.collapse", r = new t(this, s)), "string" == typeof i && r[i]()
            })
        }, e.fn.collapse.Constructor = t, e.fn.collapse.noConflict = function () {
            return e.fn.collapse = i, this
        }, e(document).on("click.bs.collapse.data-api", "[data-toggle=collapse]", function (t) {
            var i, n = e(this),
                r = n.attr("data-target") || t.preventDefault() || (i = n.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""),
                s = e(r),
                o = s.data("bs.collapse"),
                a = o ? "toggle" : n.data(),
                l = n.attr("data-parent"),
                c = l && e(l);
            o && o.transitioning || (c && c.find('[data-toggle=collapse][data-parent="' + l + '"]').not(n).addClass("collapsed"), n[s.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), s.collapse(a)
        })
    }(window.jQuery), + function (e) {
        "use strict";

        function t() {
            e(n).remove(), e(r).each(function (t) {
                var n = i(e(this));
                n.hasClass("open") && (n.trigger(t = e.Event("hide.bs.dropdown")), t.isDefaultPrevented() || n.removeClass("open").trigger("hidden.bs.dropdown"))
            })
        }

        function i(t) {
            var i = t.attr("data-target");
            i || (i = t.attr("href"), i = i && /#/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
            var n = i && e(i);
            return n && n.length ? n : t.parent()
        }
        var n = ".dropdown-backdrop",
            r = "[data-toggle=dropdown]",
            s = function (t) {
                e(t).on("click.bs.dropdown", this.toggle)
            };
        s.prototype.toggle = function (n) {
            var r = e(this);
            if (!r.is(".disabled, :disabled")) {
                var s = i(r),
                    o = s.hasClass("open");
                if (t(), !o) {
                    if ("ontouchstart" in document.documentElement && !s.closest(".navbar-nav").length && e('<div class="dropdown-backdrop"/>').insertAfter(e(this)).on("click", t), s.trigger(n = e.Event("show.bs.dropdown")), n.isDefaultPrevented()) return;
                    s.toggleClass("open").trigger("shown.bs.dropdown"), r.focus()
                }
                return !1
            }
        }, s.prototype.keydown = function (t) {
            if (/(38|40|27)/.test(t.keyCode)) {
                var n = e(this);
                if (t.preventDefault(), t.stopPropagation(), !n.is(".disabled, :disabled")) {
                    var s = i(n),
                        o = s.hasClass("open");
                    if (!o || o && 27 == t.keyCode) return 27 == t.which && s.find(r).focus(), n.click();
                    var a = e("[role=menu] li:not(.divider):visible a", s);
                    if (a.length) {
                        var l = a.index(a.filter(":focus"));
                        38 == t.keyCode && l > 0 && l--, 40 == t.keyCode && l < a.length - 1 && l++, ~l || (l = 0), a.eq(l).focus()
                    }
                }
            }
        };
        var o = e.fn.dropdown;
        e.fn.dropdown = function (t) {
            return this.each(function () {
                var i = e(this),
                    n = i.data("dropdown");
                n || i.data("dropdown", n = new s(this)), "string" == typeof t && n[t].call(i)
            })
        }, e.fn.dropdown.Constructor = s, e.fn.dropdown.noConflict = function () {
            return e.fn.dropdown = o, this
        }, e(document).on("click.bs.dropdown.data-api", t).on("click.bs.dropdown.data-api", ".dropdown form", function (e) {
            e.stopPropagation()
        }).on("click.bs.dropdown.data-api", r, s.prototype.toggle).on("keydown.bs.dropdown.data-api", r + ", [role=menu]", s.prototype.keydown)
    }(window.jQuery), + function (e) {
        "use strict";

        function t() {
            var e = document.createElement("bootstrap"),
                t = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
            for (var i in t)
                if (void 0 !== e.style[i]) return {
                    end: t[i]
                }
        }
        e.fn.emulateTransitionEnd = function (t) {
            var i = !1,
                n = this;
            e(this).one(e.support.transition.end, function () {
                i = !0
            });
            var r = function () {
                i || e(n).trigger(e.support.transition.end)
            };
            return setTimeout(r, t), this
        }, e(function () {
            e.support.transition = t()
        })
    }(window.jQuery), + function (e) {
        "use strict";
        var t = function (t) {
            this.element = e(t)
        };
        t.prototype.show = function () {
            var t = this.element,
                i = t.closest("ul:not(.dropdown-menu)"),
                n = t.attr("data-target");
            if (n || (n = t.attr("href"), n = n && n.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
                var r = i.find(".active:last a")[0],
                    s = e.Event("show.bs.tab", {
                        relatedTarget: r
                    });
                if (t.trigger(s), !s.isDefaultPrevented()) {
                    var o = e(n);
                    this.activate(t.parent("li"), i), this.activate(o, o.parent(), function () {
                        t.trigger({
                            type: "shown.bs.tab",
                            relatedTarget: r
                        })
                    })
                }
            }
        }, t.prototype.activate = function (t, i, n) {
            function r() {
                s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), t.addClass("active"), o ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu") && t.closest("li.dropdown").addClass("active"), n && n()
            }
            var s = i.find("> .active"),
                o = n && e.support.transition && s.hasClass("fade");
            o ? s.one(e.support.transition.end, r).emulateTransitionEnd(150) : r(), s.removeClass("in")
        };
        var i = e.fn.tab;
        e.fn.tab = function (i) {
            return this.each(function () {
                var n = e(this),
                    r = n.data("bs.tab");
                r || n.data("bs.tab", r = new t(this)), "string" == typeof i && r[i]()
            })
        }, e.fn.tab.Constructor = t, e.fn.tab.noConflict = function () {
            return e.fn.tab = i, this
        }, e(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function (t) {
            t.preventDefault(), e(this).tab("show")
        })
    }(window.jQuery), + function (e) {
        "use strict";
        var t = function (e, t) {
            this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", e, t)
        };
        t.DEFAULTS = {
            animation: !0,
            placement: "top",
            selector: !1,
            template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            container: !1
        }, t.prototype.init = function (t, i, n) {
            this.enabled = !0, this.type = t, this.$element = e(i), this.options = this.getOptions(n);
            for (var r = this.options.trigger.split(" "), s = r.length; s--;) {
                var o = r[s];
                if ("click" == o) this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this));
                else if ("manual" != o) {
                    var a = "hover" == o ? "mouseenter" : "focus",
                        l = "hover" == o ? "mouseleave" : "blur";
                    this.$element.on(a + "." + this.type, this.options.selector, e.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, e.proxy(this.leave, this))
                }
            }
            this.options.selector ? this._options = e.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle()
        }, t.prototype.getDefaults = function () {
            return t.DEFAULTS
        }, t.prototype.getOptions = function (t) {
            return t = e.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && "number" == typeof t.delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }), t
        }, t.prototype.getDelegateOptions = function () {
            var t = {},
                i = this.getDefaults();
            return this._options && e.each(this._options, function (e, n) {
                i[e] != n && (t[e] = n)
            }), t
        }, t.prototype.enter = function (t) {
            var i = t instanceof this.constructor ? t : e(t.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
            return clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function () {
                "in" == i.hoverState && i.show()
            }, i.options.delay.show)) : i.show()
        }, t.prototype.leave = function (t) {
            var i = t instanceof this.constructor ? t : e(t.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
            return clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function () {
                "out" == i.hoverState && i.hide()
            }, i.options.delay.hide)) : i.hide()
        }, t.prototype.show = function () {
            var t = e.Event("show.bs." + this.type);
            if (this.hasContent() && this.enabled) {
                if (this.$element.trigger(t), t.isDefaultPrevented()) return;
                var i = this.tip();
                this.setContent(), this.options.animation && i.addClass("fade");
                var n = "function" == typeof this.options.placement ? this.options.placement.call(this, i[0], this.$element[0]) : this.options.placement,
                    r = /\s?auto?\s?/i,
                    s = r.test(n);
                s && (n = n.replace(r, "") || "top"), i.detach().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }).addClass(n), this.options.container ? i.appendTo(this.options.container) : i.insertAfter(this.$element);
                var o = this.getPosition(),
                    a = i[0].offsetWidth,
                    l = i[0].offsetHeight;
                if (s) {
                    var c = this.$element.parent(),
                        u = n,
                        h = document.documentElement.scrollTop || document.body.scrollTop,
                        d = "body" == this.options.container ? window.innerWidth : c.outerWidth(),
                        p = "body" == this.options.container ? window.innerHeight : c.outerHeight(),
                        f = "body" == this.options.container ? 0 : c.offset().left;
                    n = "bottom" == n && o.top + o.height + l - h > p ? "top" : "top" == n && o.top - h - l < 0 ? "bottom" : "right" == n && o.right + a > d ? "left" : "left" == n && o.left - a < f ? "right" : n, i.removeClass(u).addClass(n)
                }
                var g = this.getCalculatedOffset(n, o, a, l);
                this.applyPlacement(g, n), this.$element.trigger("shown.bs." + this.type)
            }
        }, t.prototype.applyPlacement = function (e, t) {
            var i, n = this.tip(),
                r = n[0].offsetWidth,
                s = n[0].offsetHeight,
                o = parseInt(n.css("margin-top"), 10),
                a = parseInt(n.css("margin-left"), 10);
            isNaN(o) && (o = 0), isNaN(a) && (a = 0), e.top = e.top + o, e.left = e.left + a, n.offset(e).addClass("in");
            var l = n[0].offsetWidth,
                c = n[0].offsetHeight;
            if ("top" == t && c != s && (i = !0, e.top = e.top + s - c), /bottom|top/.test(t)) {
                var u = 0;
                e.left < 0 && (u = -2 * e.left, e.left = 0, n.offset(e), l = n[0].offsetWidth, c = n[0].offsetHeight), this.replaceArrow(u - r + l, l, "left")
            } else this.replaceArrow(c - s, c, "top");
            i && n.offset(e)
        }, t.prototype.replaceArrow = function (e, t, i) {
            this.arrow().css(i, e ? 50 * (1 - e / t) + "%" : "")
        }, t.prototype.setContent = function () {
            var e = this.tip(),
                t = this.getTitle();
            e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right")
        }, t.prototype.hide = function () {
            function t() {
                "in" != i.hoverState && n.detach()
            }
            var i = this,
                n = this.tip(),
                r = e.Event("hide.bs." + this.type);
            return this.$element.trigger(r), r.isDefaultPrevented() ? void 0 : (n.removeClass("in"), e.support.transition && this.$tip.hasClass("fade") ? n.one(e.support.transition.end, t).emulateTransitionEnd(150) : t(), this.$element.trigger("hidden.bs." + this.type), this)
        }, t.prototype.fixTitle = function () {
            var e = this.$element;
            (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
        }, t.prototype.hasContent = function () {
            return this.getTitle()
        }, t.prototype.getPosition = function () {
            var t = this.$element[0];
            return e.extend({}, "function" == typeof t.getBoundingClientRect ? t.getBoundingClientRect() : {
                width: t.offsetWidth,
                height: t.offsetHeight
            }, this.$element.offset())
        }, t.prototype.getCalculatedOffset = function (e, t, i, n) {
            return "bottom" == e ? {
                top: t.top + t.height,
                left: t.left + t.width / 2 - i / 2
            } : "top" == e ? {
                top: t.top - n,
                left: t.left + t.width / 2 - i / 2
            } : "left" == e ? {
                top: t.top + t.height / 2 - n / 2,
                left: t.left - i
            } : {
                top: t.top + t.height / 2 - n / 2,
                left: t.left + t.width
            }
        }, t.prototype.getTitle = function () {
            var e, t = this.$element,
                i = this.options;
            return e = t.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(t[0]) : i.title)
        }, t.prototype.tip = function () {
            return this.$tip = this.$tip || e(this.options.template)
        }, t.prototype.arrow = function () {
            return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
        }, t.prototype.validate = function () {
            this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
        }, t.prototype.enable = function () {
            this.enabled = !0
        }, t.prototype.disable = function () {
            this.enabled = !1
        }, t.prototype.toggleEnabled = function () {
            this.enabled = !this.enabled
        }, t.prototype.toggle = function (t) {
            var i = t ? e(t.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;
            i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
        }, t.prototype.destroy = function () {
            this.hide().$element.off("." + this.type).removeData("bs." + this.type)
        };
        var i = e.fn.tooltip;
        e.fn.tooltip = function (i) {
            return this.each(function () {
                var n = e(this),
                    r = n.data("bs.tooltip"),
                    s = "object" == typeof i && i;
                r || n.data("bs.tooltip", r = new t(this, s)), "string" == typeof i && r[i]()
            })
        }, e.fn.tooltip.Constructor = t, e.fn.tooltip.noConflict = function () {
            return e.fn.tooltip = i, this
        }
    }(window.jQuery), + function (e) {
        "use strict";
        var t = function (e, t) {
            this.init("popover", e, t)
        };
        if (!e.fn.tooltip) throw new Error("Popover requires tooltip.js");
        t.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
        }), t.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype), t.prototype.constructor = t, t.prototype.getDefaults = function () {
            return t.DEFAULTS
        }, t.prototype.setContent = function () {
            var e = this.tip(),
                t = this.getTitle(),
                i = this.getContent();
            e.find(".popover-title")[this.options.html ? "html" : "text"](t), e.find(".popover-content")[this.options.html ? "html" : "text"](i), e.removeClass("fade top bottom left right in"), e.find(".popover-title").html() || e.find(".popover-title").hide()
        }, t.prototype.hasContent = function () {
            return this.getTitle() || this.getContent()
        }, t.prototype.getContent = function () {
            var e = this.$element,
                t = this.options;
            return e.attr("data-content") || ("function" == typeof t.content ? t.content.call(e[0]) : t.content)
        }, t.prototype.arrow = function () {
            return this.$arrow = this.$arrow || this.tip().find(".arrow")
        }, t.prototype.tip = function () {
            return this.$tip || (this.$tip = e(this.options.template)), this.$tip
        };
        var i = e.fn.popover;
        e.fn.popover = function (i) {
            return this.each(function () {
                var n = e(this),
                    r = n.data("bs.popover"),
                    s = "object" == typeof i && i;
                r || n.data("bs.popover", r = new t(this, s)), "string" == typeof i && r[i]()
            })
        }, e.fn.popover.Constructor = t, e.fn.popover.noConflict = function () {
            return e.fn.popover = i, this
        }
    }(window.jQuery), + function (e) {
        "use strict";
        var t = function (t, i) {
            this.options = i, this.$element = e(t), this.$backdrop = this.isShown = null, this.options.remote && this.$element.load(this.options.remote)
        };
        t.DEFAULTS = {
            backdrop: !0,
            keyboard: !0,
            show: !0
        }, t.prototype.toggle = function (e) {
            return this[this.isShown ? "hide" : "show"](e)
        }, t.prototype.show = function (t) {
            var i = this,
                n = e.Event("show.bs.modal", {
                    relatedTarget: t
                });
            this.$element.trigger(n), this.isShown || n.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.$element.on("click.dismiss.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)), this.backdrop(function () {
                var n = e.support.transition && i.$element.hasClass("fade");
                i.$element.parent().length || i.$element.appendTo(document.body), i.$element.show(), n && i.$element[0].offsetWidth, i.$element.addClass("in").attr("aria-hidden", !1), i.enforceFocus();
                var r = e.Event("shown.bs.modal", {
                    relatedTarget: t
                });
                n ? i.$element.find(".modal-dialog").one(e.support.transition.end, function () {
                    i.$element.focus().trigger(r)
                }).emulateTransitionEnd(300) : i.$element.focus().trigger(r)
            }))
        }, t.prototype.hide = function (t) {
            t && t.preventDefault(), t = e.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), e(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.modal"), e.support.transition && this.$element.hasClass("fade") ? this.$element.one(e.support.transition.end, e.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
        }, t.prototype.enforceFocus = function () {
            e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy(function (e) {
                this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.focus()
            }, this))
        }, t.prototype.escape = function () {
            this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", e.proxy(function (e) {
                27 == e.which && this.hide()
            }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
        }, t.prototype.hideModal = function () {
            var e = this;
            this.$element.hide(), this.backdrop(function () {
                e.removeBackdrop(), e.$element.trigger("hidden.bs.modal")
            })
        }, t.prototype.removeBackdrop = function () {
            this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
        }, t.prototype.backdrop = function (t) {
            var i = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var n = e.support.transition && i;
                if (this.$backdrop = e('<div class="modal-backdrop ' + i + '" />').appendTo(document.body), this.$element.on("click.dismiss.modal", e.proxy(function (e) {
                    e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
                }, this)), n && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
                n ? this.$backdrop.one(e.support.transition.end, t).emulateTransitionEnd(150) : t()
            } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(e.support.transition.end, t).emulateTransitionEnd(150) : t()) : t && t()
        };
        var i = e.fn.modal;
        e.fn.modal = function (i, n) {
            return this.each(function () {
                var r = e(this),
                    s = r.data("bs.modal"),
                    o = e.extend({}, t.DEFAULTS, r.data(), "object" == typeof i && i);
                s || r.data("bs.modal", s = new t(this, o)), "string" == typeof i ? s[i](n) : o.show && s.show(n)
            })
        }, e.fn.modal.Constructor = t, e.fn.modal.noConflict = function () {
            return e.fn.modal = i, this
        }, e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (t) {
            var i = e(this),
                n = i.attr("href"),
                r = e(i.attr("data-target") || n && n.replace(/.*(?=#[^\s]+$)/, "")),
                s = r.data("modal") ? "toggle" : e.extend({
                    remote: !/#/.test(n) && n
                }, r.data(), i.data());
            t.preventDefault(), r.modal(s, this).one("hide", function () {
                i.is(":visible") && i.focus()
            })
        }), e(document).on("show.bs.modal", ".modal", function () {
            e(document.body).addClass("modal-open")
        }).on("hidden.bs.modal", ".modal", function () {
            e(document.body).removeClass("modal-open")
        })
    }(window.jQuery),
    function () {
        if (window.addEventListener) {
            var e = !0;
            window.addEventListener("load", function () {
                setTimeout(function () {
                    e = !1
                }, 0)
            }, !1), window.addEventListener("popstate", function (t) {
                e && "complete" == document.readyState && (t.preventDefault(), t.stopImmediatePropagation())
            }, !1)
        }
    }(),
    function () {
        function e() {
            Backbone.history.start()
        }
        window.HouseTrip = window.HouseTrip || {}, HouseTrip.Models = {}, HouseTrip.Collections = {}, HouseTrip.Views = {}, HouseTrip.Helpers = {}, HouseTrip.Lib = {}, HouseTrip.Events = _.extend(Backbone.Events), HouseTrip.router = new Backbone.Router, HouseTrip.router.route("*noRoute", "noRoute"), HouseTrip.screenxs = 480, HouseTrip.screensm = 481, HouseTrip.screenmd = 992, HouseTrip.screenlg = 1060, HouseTrip.start = function () {
            (new HouseTrip.ViewPort).run(), HouseTrip.header = new HouseTrip.Views.Header({
                el: "nav.ht-header"
            }).render(), HouseTrip.head = new HouseTrip.Views.Head({
                el: "head"
            }).render(), HouseTrip.page = new HouseTrip.Views.Page({
                el: "body"
            }).render(), HouseTrip.banners = HouseTrip.Views.Banner.load(), HouseTrip.mobileOverlay = new HouseTrip.Views.MobileOverlay({
                el: ".ht-mobile-overlays"
            }), HouseTrip.houseFlip = new HouseTrip.Helpers.HouseFlip, new HouseTrip.Views.KissMetricsLayer({
                el: ".js-kissmetrics-layer"
            }), e()
        }, HouseTrip.authToken = function () {
            return $("meta[name=auth_token]").attr("content")
        }, HouseTrip.isTouchEnabled = $("html").is(".simulate-touch") ? !0 : "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch, HouseTrip.isMobile = function () {
            return $(window).width() <= HouseTrip.screenxs
        }, HouseTrip.browserSupportsSVG = document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1"), _.templateSettings = {
            interpolate: /\{\{=(.+?)\}\}/g,
            evaluate: /\{\{[^-=](.+?)\}\}/g,
            escape: /\{\{-(.+?)\}\}/g
        }, HouseTrip.env = function () {
            return $("body").data("env")
        }, $(document).ready(HouseTrip.start)
    }(),
    function () {
        HouseTrip.ViewPort = function () {}, HouseTrip.ViewPort.prototype = {
            MOBILE_BREAKPOINT: 480,
            CONTENT_SIZE: 1080,
            properties: null,
            run: function () {
                var e = "onorientationchange" in window,
                    t = e ? "orientationchange" : "resize";
                this._recalculate(!1), $(window).on(t, this._onOrientationChange.bind(this))
            },
            _onOrientationChange: function () {
                this._recalculate(!0)
            },
            _recalculate: function (e) {
                HouseTrip.Lib.MobileCompatibility.currentWidth() > this.MOBILE_BREAKPOINT ? this._tabletViewportSetter(e) : this._mobileViewportSetter()
            },
            _mobileViewportSetter: function () {
                $('meta[name="viewport"]').attr("content", "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0")
            },
            _tabletViewportSetter: function (e) {
                this.properties = {
                    width: "device-width",
                    height: "device-height"
                }, HouseTrip.Lib.MobileCompatibility.isPortraitMode() && !HouseTrip.Lib.MobileCompatibility.isIPad() ? (this.properties["initial-scale"] = 1, this.properties["target-densitydpi"] = "medium-dpi") : (this.properties["target-densitydpi"] = "high-dpi", this._rescale(), this._setViewport(2e3, !0, e)), this._setViewport(250)
            },
            _allowFreeZooming: function () {
                this.properties["minimum-scale"] = .25, this.properties["maximum-scale"] = 1.6
            },
            _setViewport: function (e, t, i) {
                window.setTimeout(function () {
                    t && this._allowFreeZooming();
                    var e = this._concatenateViewportProperties();
                    $('meta[name="viewport"]').attr("content", e), i && window.scrollTo(0, 0)
                }.bind(this), e)
            },
            _concatenateViewportProperties: function () {
                var e = [],
                    t = ["width", "height", "initial-scale", "minimum-scale", "maximum-scale"];
                return HouseTrip.Lib.MobileCompatibility.isAndroid() && t.push("target-densitydpi"), $.each(t, function (t, i) {
                    this.properties[i] && e.push(i + "=" + this.properties[i])
                }.bind(this)), e.join(", ")
            },
            _rescale: function () {
                var e = HouseTrip.Lib.MobileCompatibility.scale(this.CONTENT_SIZE);
                this.properties["initial-scale"] = e, this.properties["minimum-scale"] = e, this.properties["maximum-scale"] = e
            }
        }
    }(), HouseTrip.Helpers.Dates = {}, HouseTrip.Helpers.Dates.numberOfNights = function (e, t) {
        return Math.abs(Math.ceil((e - t) / 864e5))
    }, HouseTrip.Helpers.Dates.toSubmit = function (e) {
        return e ? e.getFullYear() + "-" + HouseTrip.Helpers.Dates._toDoubleDigitString(e.getMonth() + 1) + "-" + HouseTrip.Helpers.Dates._toDoubleDigitString(e.getDate()) : ""
    }, HouseTrip.Helpers.Dates.fromString = function (e) {
        if (e) {
            var t = e.split("-");
            return new Date(t[0], t[1] - 1, t[2])
        }
        return null
    }, HouseTrip.Helpers.Dates._toDoubleDigitString = function (e) {
        return 10 > e ? "0" + e : "" + e
    },
    function (e) {
        function t(t) {
            var n = e(".ht-loading-indicator.full-page");
            n.toggleClass("is-loading", t), t ? n.on("click", i) : n.off("click", i)
        }

        function i(e) {
            e.stopPropagation()
        }
        HouseTrip.Helpers.showLoadingIndicator = function (e) {
            t(!0), e.always(function () {
                t(!1)
            })
        }, HouseTrip.Helpers.showWaitCursor = function (t) {
            e("body").toggleClass("content-loading", !0), t.always(function () {
                e("body").toggleClass("content-loading", !1)
            })
        }
    }(jQuery), HouseTrip.Helpers.KissMetrics = {
        recordEvent: function (e) {
            this._addEventProperties(e), _kmq.push(["record", e.event, e.properties])
        },
        trackClick: function (e, t) {
            this._addEventProperties(t), _kmq.push(["trackClick", e, t.event, t.properties])
        },
        setProperty: function (e) {
            _kmq.push(["set", e])
        },
        setUserProperties: function () {
            this.setProperty({
                Version: "v4",
                Responsive: "Yes",
                Mobile: HouseTrip.isMobile() ? "Yes" : "No"
            })
        },
        _addEventProperties: function (e) {
            e.properties = e.properties || {}, e.sendUserProperties && this.setUserProperties(), e.properties.Version = "v4", e.properties.Responsive = "Yes", e.properties.Mobile = HouseTrip.isMobile() ? "Yes" : "No"
        }
    }, HouseTrip.Helpers.KissMetrics = HouseTrip.Helpers.KissMetrics || {}, HouseTrip.Helpers.KissMetrics.Homepage = {
        propertiesResponsive: function (e, t, i, n) {
            var r = {},
                s = HouseTrip.Helpers.KissMetrics.Homepage;
            return r.Destination = s.validateProperty(e), r["From date"] = s.validateProperty(t), r["To date"] = s.validateProperty(i), r["Number of guests"] = n, r
        },
        validateProperty: function (e) {
            return e ? e : "Submitted blank"
        }
    }, HouseTrip.Helpers.HouseFlip = function () {
        this.features = {}
    }, HouseTrip.Helpers.HouseFlip.prototype = {
        enable: function (e) {
            this.features[e] = !0
        },
        disable: function (e) {
            this.features[e] = !1
        },
        enabled: function (e) {
            return this.features[e] === !0
        }
    }, HouseTrip.Helpers.Math = {
        innerBounds: function (e, t, i) {
            var n = e.lng - t.lng,
                r = e.lat - t.lat,
                s = n * i,
                o = r * i,
                a = {};
            return a.ne = {
                lat: e.lat - o,
                lng: e.lng - s
            }, a.sw = {
                lat: t.lat + o,
                lng: t.lng + s
            }, a
        }
    }, HouseTrip.Helpers.Request = {
        window: window,
        getUrl: function () {
            var e = this.window.location.href;
            return e.replace(/\??(#.*)?$/, "")
        }
    }, HouseTrip.Helpers.Search = HouseTrip.Helpers.Search || {}, HouseTrip.Helpers.Search.Filters = {
        _mappings: {
            "filter-by-price-per-night": "price_filters",
            "filter-by-bedrooms": "number_of_bedrooms",
            "filter-by-type-of-property": "type_filters",
            "filter-by-features": "filters"
        },
        getBackendNameFor: function (e) {
            return this._mappings[e]
        },
        getBackendNames: function () {
            return _.values(this._mappings)
        }
    }, HouseTrip.Helpers.SearchPushState = function (e) {
        this.model = e, this._setInitialState(), this.model.on("beforeSearch", this._onBeforeSearch, this), $(window).on("popstate", this._onPopstate.bind(this))
    }, HouseTrip.Helpers.SearchPushState.prototype = {
        setData: function (e) {
            var t = this._buildStateObject();
            t = _.extend(t, e), history.replaceState(t, null, location.href)
        },
        _setInitialState: function () {
            var e = $.parseParams(document.location.search);
            this._replaceState(e)
        },
        _onPopstate: function (e) {
            var t = e.originalEvent.state;
            t && t.params && (this.model.off("beforeSearch", this._onBeforeSearch, this), this.model.search(t.params), this.model.on("beforeSearch", this._onBeforeSearch, this))
        },
        _onBeforeSearch: function (e) {
            this._pushState(e)
        },
        _pushState: function (e) {
            var t = this._buildStateObject(e);
            history.pushState(t, null, this._urlFor(e))
        },
        _replaceState: function (e) {
            var t = this._buildStateObject(e);
            history.replaceState(t, null, this._urlFor(e))
        },
        _urlFor: function (e) {
            return e ? location.pathname + "?" + $.param(e) : location.pathname
        },
        _buildStateObject: function (e) {
            var t = history.state || {};
            return e && (t.params = e), t
        }
    }, HouseTrip.Helpers.Filters = {
        triggerEvent: function (e, t) {
            var i = $(t.target),
                n = {
                    filterId: i.attr("id")
                };
            return HouseTrip.Events.trigger(e, n), !0
        }
    },
    function (e) {
        HouseTrip.Helpers.Stickies = {
            register: function (e, t) {
                if (HouseTrip.Lib.MobileCompatibility.isSafariBrowser()) {
                    var i = 0;
                    t && t.offset_top && (i = t.offset_top), e.css({
                        position: "-webkit-sticky",
                        top: i
                    })
                } else e.stick_in_parent(t)
            },
            recalculate: function () {
                HouseTrip.Lib.MobileCompatibility.isSafariBrowser() || e(document.body).trigger("sticky_kit:recalc")
            }
        }
    }(jQuery), HouseTrip.Helpers.ModalHelper = {
        init: function () {
            $("body").on("show.bs.modal", this.showBlur), $("body").on("hide.bs.modal", this.hideBlur)
        },
        showBlur: function () {
            HouseTrip.Lib.MobileCompatibility.isBlurFilterCompatibleDevice() && $(".ht-main").blurjs({
                radius: 10,
                persist: !1
            })
        },
        hideBlur: function () {
            HouseTrip.Lib.MobileCompatibility.isBlurFilterCompatibleDevice() && ($.blurjs("reset"), $("#blurjs-10").hide())
        }
    }, $(document).ready(function () {
        HouseTrip.Helpers.ModalHelper.init()
    }), HouseTrip.Models.CurrentUser = Backbone.Model.extend({
        url: "/en/api/v1/session.json",
        initialize: function () {
            this.on("change:id", this._onChangeId, this), HouseTrip.Events.on("authentication.success", this.fetch, this)
        },
        isSignedIn: function () {
            return !!this.get("id")
        },
        _onChangeId: function () {
            var e = !!this.previous("id"),
                t = this.isSignedIn();
            e && !t && HouseTrip.Events.trigger("currentUser:signedOut"), !e && t && HouseTrip.Events.trigger("currentUser:signedIn")
        }
    }), HouseTrip.Models.NavigationBar = Backbone.Model.extend({
        initialize: function () {
            HouseTrip.Events.on("currentUser:signedIn", this.fetch, this)
        },
        url: function () {
            return this.get("path")
        }
    }), HouseTrip.Helpers.Translator = {
        translations: {},
        add: function (e) {
            this.translations = e
        }
    }, HouseTrip.Models.Booking = Backbone.Model.extend({}), HouseTrip.Models.GoogleTagManager = Backbone.Model.extend({
        initialize: function (e) {
            _.bindAll(this, "_record", "_recordAll"), HouseTrip.Events.on("search:done", this._onSearchDone, this), this._recordAll(e.initialEvents)
        },
        _record: function (e) {
            HouseTrip.gtmDataLayerPush(e)
        },
        _recordAll: function (e) {
            e && _.each(e, this._record)
        },
        _onSearchDone: function (e) {
            this._recordAll(e.gtmEvents)
        }
    }), HouseTrip.Models.PeoplePicker = Backbone.Model.extend({
        initialize: function (e) {
            this.property_search = e.property_search, this.set("adults", Number(this.property_search.get("number_of_adults"))), this.set("children", Number(this.property_search.get("number_of_children"))), this._broadcastPropertySearchEvents(), this.on("change", this._updatePropertySearch, this)
        },
        guests: function () {
            return this.get("adults") + this.get("children")
        },
        maxGuests: function () {
            return this.property_search.has("max_number_of_guests") ? this.property_search.get("max_number_of_guests") : 21
        },
        decAdults: function () {
            this.get("adults") > 1 && this.set("adults", this.get("adults") - 1)
        },
        decChildren: function () {
            this.get("children") >= 1 && this.set("children", this.get("children") - 1)
        },
        incAdults: function () {
            this.guests() < this.maxGuests() && this.set("adults", this.get("adults") + 1)
        },
        incChildren: function () {
            this.guests() < this.maxGuests() && this.set("children", this.get("children") + 1)
        },
        _updatePropertySearch: function () {
            this.property_search.set("number_of_guests", this.guests()), this.property_search.set("number_of_adults", this.get("adults")), this.property_search.set("number_of_children", this.get("children"))
        },
        _broadcastPropertySearchEvents: function () {
            this.property_search.on("change:number_of_guests", function () {
                this.trigger("change:number_of_guests")
            }.bind(this)), this.property_search.on("change:to_date", function () {
                this.trigger("change:to_date")
            }.bind(this))
        }
    }), HouseTrip.Models.Property = Backbone.Model.extend({
        defaults: {
            interactive: !0
        }
    }), HouseTrip.Models.PropertySearch = Backbone.Model.extend({
        defaults: {
            destination_name: "",
            number_of_guests: 2,
            number_of_adults: 2,
            number_of_children: 0,
            from_date: null,
            to_date: null,
            shortlist: !1
        },
        initialize: function () {
            this.on("change:order", this._onOrderChange.bind(this))
        },
        parse: function (e) {
            return this.get("filters") ? (this.get("filters").update(e.filters), delete e.filters, e) : (e.filters = this._initFilterCollection(e.filters), e)
        },
        prepare: function () {
            if (this.changedAttributes()) {
                this.relevant_keys || (this.relevant_keys = ["destination_id", "destination_name"]);
                var e = _.keys(this.changedAttributes()),
                    t = _.intersection(e, this.relevant_keys);
                t.length && this.set("mapBounds", null, {
                    silent: !0
                })
            }
        },
        search: function (e) {
            var t = e || this.params();
            this.trigger("beforeSearch", t);
            var i = $.ajax({
                url: this._searchPath(),
                data: t,
                cache: !1,
                context: this
            }).done(this._onDone);
            HouseTrip.Helpers.showLoadingIndicator(i)
        },
        hasDates: function () {
            return this.has("from_date") && this.has("to_date")
        },
        params: function () {
            var e = _.clone(this.get("formParams")),
                t = this.get("order"),
                i = this.get("mapBounds"),
                n = this.get("distanceOption"),
                r = this.get("number_of_guests");
            return e = _.reject(e, function (e) {
                return "" === e.value || "false" === e.value
            }), e = $.parseParams($.param(e)), t && (e["property_search[order]"] = t), i && (e["property_search[map_bounds]"] = this._joinIfArray(i)), n && (e["property_search[distance_option]"] = n), r && (e["property_search[number_of_guests]"] = r), this.get("filters") && _.each(HouseTrip.Helpers.Search.Filters.getBackendNames(), function (t) {
                var i = this.get("filters").valuesFor(t);
                _.isArray(i) && _.isEmpty(i) || (e["property_search[" + t + "]"] = i)
            }.bind(this)), e.responsive = !0, e
        },
        fetchTotalResults: function () {
            return $.ajax({
                url: this._totalResultsPath(),
                data: this.params(),
                cache: !1
            }).done(this._onTotalResultsDone), !1
        },
        _searchPath: function () {
            return this.get("shortlist") ? this.get("urls").shortlist : this.get("urls").search
        },
        _totalResultsPath: function () {
            return this.get("urls").total_results
        },
        _onTotalResultsDone: function (e) {
            HouseTrip.Events.trigger("search:totalResults:done", e.property_search)
        },
        _joinIfArray: function (e) {
            return $.isArray(e) ? e.join(",") : e
        },
        _onOrderChange: function () {
            var e = this.get("order");
            "price" == e && (e = "price_asc"), HouseTrip.Events.trigger("search:orderChange", {
                order: e
            })
        },
        _onDone: function (e) {
            var e = JSON.parse(e);
            this.set(this.parse(e.searchParams)), this.set("mobileDistanceFilterHtml", e.mobileDistanceFilter), HouseTrip.Events.trigger("search:done", e)
        },
        _initFilterCollection: function (e) {
            return new HouseTrip.Collections.SearchFilters(HouseTrip.Models.SearchFilterFactory.createFilters({
                json: e
            }))
        }
    }), HouseTrip.Models.Photo = Backbone.Model.extend({}), HouseTrip.Models.Review = Backbone.Model.extend({
        url: function () {
            return this.get("url_root") + "/" + this.get("id")
        },
        toJSON: function () {
            return {
                review: _.clone(this.attributes)
            }
        },
        initialize: function (e) {
            this.reviewReply = new HouseTrip.Models.ReviewReply({
                reply: this.get("host_response"),
                translationUrl: e.translation_url,
                reviewPath: this.url()
            })
        },
        translate: function (e) {
            this.has("translatedBody") ? this.set("body", this.get("translatedBody")) : this._requestTranslation(e), this.trigger("updated"), this.reviewReply.translate()
        },
        revert: function () {
            this.has("originalBody") && this.set("body", this.get("originalBody")), this.trigger("updated"), this.reviewReply.revert()
        },
        _requestTranslation: function (e) {
            if (this.get("locale") != e) {
                var t = this.get("translation_url") + "?" + $.param({
                    resource: "review",
                    resource_attribute: "body",
                    resource_id: this.get("id")
                });
                $.get(t, function (e) {
                    this.set("translatedBody", e.content), this.set("originalBody", this.get("body")), this.set("body", this.get("translatedBody")), this.trigger("updated")
                }.bind(this))
            }
        }
    }), HouseTrip.Models.ReviewReply = Backbone.Model.extend({
        defaults: {
            body: "",
            author_name: "",
            author_avatar: "",
            editable: !1
        },
        initialize: function (e) {
            e.reviewPath && (this.urlRoot = e.reviewPath + "/comments"), e.reply && (this.set(e.reply), this.translationUrl = e.translationUrl)
        },
        toJSON: function () {
            return {
                comment: {
                    body: this.get("body")
                }
            }
        },
        translate: function () {
            this.has("translatedBody") ? this.set("body", this.get("translatedBody")) : this._requestTranslation()
        },
        revert: function () {
            this.has("originalBody") && this.set("body", this.get("originalBody"))
        },
        _requestTranslation: function () {
            if (this.has("id") && this.has("body")) {
                var e = this.translationUrl + "?" + $.param({
                    resource: "comment",
                    resource_attribute: "body",
                    resource_id: this.id
                });
                $.get(e, function (e) {
                    this.set("translatedBody", e.content), this.set("originalBody", this.get("body")), this.set("body", this.get("translatedBody"))
                }.bind(this))
            }
        }
    }), HouseTrip.Models.AvailabilityRequest = Backbone.Model.extend({
        url: function () {
            return this.get("url")
        },
        revertToDefaults: function () {
            this.set({
                title: this.get("default_price"),
                action_button: this.get("default_action_button"),
                change_dates: !1,
                message: null,
                valid: !1
            })
        },
        price: function () {
            return this.get(this.get("valid") ? "price_preview" : "default_price")
        },
        fireKmEvents: function () {
            _.map(this.get("kissmetrics_events"), function (e) {
                HouseTrip.Events.trigger("ppp:availabilityCheck", e)
            }), this.set("kissmetrics_events", [], {
                silent: !0
            })
        },
        preview: function (e, t) {
            var i = $.ajax({
                url: this.get("preview_path"),
                type: "GET",
                data: {
                    from_date: e[0],
                    to_date: e[1],
                    guests: t,
                    responsive: !0
                },
                success: function (e) {
                    this.set(e)
                }.bind(this)
            });
            return i
        },
        create: function (e) {
            var t = $.ajax({
                url: this.get("action_url"),
                type: "POST",
                data: {
                    responsive: !0,
                    mobile: e.mobile
                },
                beforeSend: function (e, t) {
                    this.onBeforeCreate(e, t)
                }.bind(this)
            });
            return t.always(function () {
                this.onDoneCreate()
            }.bind(this)), t
        },
        onBeforeCreate: function () {
            this.trigger("beforeProcessing")
        },
        onDoneCreate: function () {
            this.trigger("doneProcessing")
        }
    }), HouseTrip.Models.SearchFilterFactory = {
        classes: {
            "HouseTrip.Models.SearchSelectableFilter": ["price_filters", "filters", "type_filters", "number_of_bedrooms"]
        },
        create: function (e, t) {
            t = t || {};
            var i = this._getClass(e);
            if (void 0 === i) throw "No Filter Template found for " + e;
            var t = this._getOptions(e, t);
            return new i(t)
        },
        createFilters: function (e) {
            e = e || {};
            var t = [];
            return _.each(HouseTrip.Helpers.Search.Filters.getBackendNames(), function (i) {
                e.json = e.json || {};
                var n = {
                    json: e.json[i]
                };
                t.push(this.create(i, n))
            }.bind(this)), t
        },
        _getClass: function (name) {
            var result;
            return _.each(_.keys(this.classes), function (e) {
                _.contains(this.classes[e], name) && (result = e)
            }.bind(this)), eval(result)
        },
        _getOptions: function (e, t) {
            var i, n = {},
                r = t.json;
            return r && (i = r.selected_options), n.name = e, n.mutuallyExclusive = this._getMutuallyExclusive(e), n.json = r || void 0, n.filterValues = i || void 0, "price_filters" === e && (n.filterValues = void 0), this._compact(n), n
        },
        _getMutuallyExclusive: function (e) {
            return "number_of_bedrooms" == e ? !0 : !1
        },
        _compact: function (e) {
            _.each(_.keys(e), function (t) {
                e[t] || delete e[t]
            })
        }
    }, HouseTrip.Models.BaseSearchFilter = Backbone.Model.extend({
        initialize: function (e) {
            this.set("json", e.json)
        },
        reset: function () {
            this.set("filterValues", this.defaults().filterValues)
        },
        isReset: function () {
            return _.isEmpty(this.get("filterValues"))
        },
        _afterSelectValue: function () {
            this.trigger("change:filterValues")
        }
    }), HouseTrip.Models.SearchSelectableFilter = HouseTrip.Models.BaseSearchFilter.extend({
        defaults: function () {
            return {
                filterValues: []
            }
        },
        getValues: function () {
            return this.get("mutuallyExclusive") && this.get("filterValues")[0] ? this.get("filterValues")[0] : this.get("filterValues")
        },
        selectValue: function (e) {
            _.contains(this.get("filterValues"), e) ? this.get("filterValues").splice(this.get("filterValues").indexOf(e), 1) : (this.get("mutuallyExclusive") && this.set("filterValues", [], {
                silent: !0
            }), this.get("filterValues").push(e)), this._afterSelectValue()
        }
    }), HouseTrip.Models.KissMetrics = {}, HouseTrip.Models.KissMetrics.Base = Backbone.Model.extend({
        _recorded: {},
        initialize: function (e) {
            _.bindAll(this, "_setProperty", "_record", "_recordOnce", "_recordAll"), e && e.initialEvents && this._recordAll(e.initialEvents)
        },
        _setProperty: function (e) {
            HouseTrip.Helpers.KissMetrics.setProperty(e)
        },
        _record: function (e, t) {
            var i = {
                event: e
            };
            t && (i.properties = t), HouseTrip.Helpers.KissMetrics.recordEvent(i), this._recorded[e] = !0
        },
        _recordOnce: function (e) {
            this._recorded[e] || this._record(e)
        },
        _recordAll: function (e) {
            e && _.each(e, function (e, t) {
                this._record(t, e)
            }, this)
        }
    }), HouseTrip.Models.KissMetrics.Authentication = HouseTrip.Models.KissMetrics.Base.extend({
        initialize: function () {
            HouseTrip.Events.on("authentication:showModal", this._onShowModal, this), this.constructor.__super__.initialize.apply(this, arguments)
        },
        _onShowModal: function (e) {
            var t = {
                "Default view": e.defaultView,
                "Sign in or register button": e.source,
                "Sign in or register URL": HouseTrip.Helpers.Request.getUrl(),
                Locale: $("html").attr("lang")
            };
            e.shortlistButton && (t["Shortlist button"] = e.shortlistButton), this._record("Viewed sign in or register", t)
        }
    }), HouseTrip.Models.KissMetrics.Homepage = HouseTrip.Models.KissMetrics.Base.extend({
        initialize: function () {
            var e = HouseTrip.Events;
            e.on("homepage:followDestinationLink", this._onFollowDestinationLink, this), e.on("searchBar:submit", this._onSubmitSearch, this), this.constructor.__super__.initialize.apply(this, arguments)
        },
        _onFollowDestinationLink: function (e) {
            $element = $(e.element);
            var t = $element.closest("[data-for-kissmetrics]").data("for-kissmetrics"),
                i = "Clicked destination image",
                n = {
                    "Destination image": t
                };
            this._record(i, n)
        },
        _onSubmitSearch: function (e) {
            var t = e.destinationName,
                i = e.fromDate,
                n = e.toDate,
                r = e.numberOfGuests,
                s = HouseTrip.Helpers.KissMetrics.Homepage,
                o = "Home page search",
                a = s.propertiesResponsive(t, i, n, r);
            this._record(o, a)
        }
    }), HouseTrip.Models.KissMetrics.PropertyProfile = HouseTrip.Models.KissMetrics.Base.extend({
        origin: "ppp",
        initialize: function () {
            var e = HouseTrip.Events;
            e.on("ppp:checkInDateChange", this._onCheckInDateChange, this), e.on("ppp:checkOutDateChange", this._onCheckOutDateChange, this), e.on("ppp:tabSwitch", this._onTabSwitch, this), e.on("ppp:toggleShortlist", this._onToggleShortlist, this), e.on("ppp:availabilityCheck", this._onAvailabilityCheck, this), e.on("photo:usedCarousel", this._onUsedPhotoCarousel, this), e.on("ppp:closeSuccessMessage", this._onCloseSuccessMessage, this), e.on("ppp:makeAnotherEnquiry", this._onMakeAnotherEnquiry, this), e.on("ppp:seeOtherAvailableProperties", this._onSeeOtherAvailableProperties, this), this.constructor.__super__.initialize.apply(this, arguments)
        },
        _onCheckInDateChange: function () {
            this._record("Changed check-in date")
        },
        _onCheckOutDateChange: function () {
            this._record("Changed check-out date")
        },
        _onTabSwitch: function (e) {
            var t = e.kissMetricsProperties || {};
            t.Tab = e.tabName, this._record("Viewed Property Profile", t)
        },
        _onAvailabilityCheck: function (e) {
            this._record(e.event, e.properties)
        },
        _onUsedPhotoCarousel: function () {
            this._record("Used photo carousel", {
                origin: this.origin
            })
        },
        _onCloseSuccessMessage: function () {
            this._record("Clicks button/link on PPP", {
                type: "Close link"
            })
        },
        _onMakeAnotherEnquiry: function () {
            this._record("Clicks button/link on PPP", {
                type: "Make another enquiry link"
            })
        },
        _onSeeOtherAvailableProperties: function (e) {
            this._record("Clicks button/link on PPP", {
                type: "See other available properties",
                context: e
            })
        },
        _onToggleShortlist: function () {
            this._record("Clicked shortlist", {
                origin: this.origin
            })
        }
    }), HouseTrip.Models.KissMetrics.Search = HouseTrip.Models.KissMetrics.Base.extend({
        origin: "search",
        initialize: function () {
            var e = HouseTrip.Events;
            e.on("search:done", this._onSearchDone, this), e.on("search:paginate", this._onPaginate, this), e.on("search:followPropertyLink", this._onFollowPropertyLink, this), e.on("search:toggleShortlist", this._onToggleShortlist, this), e.on("search:orderChange", this._onOrderChange, this), e.on("search:filterChange", this._onFilterChange, this), e.on("photo:usedCarousel", this._onUsedPhotoCarousel, this), e.on("map:panned", this._onMapPanned, this), e.on("map:zoomed", this._onMapZoomed, this), e.on("map:switchedType", this._onMapSwitchedType, this), e.on("map:markerClicked", this._onMapMarkerClicked, this), e.on("map:markerHovered", this._onMapMarkerHovered, this), e.on("map:searchThisArea", this._onMapSearchThisArea, this), this._setProperty({
                "Visited Responsive Search": "Yes"
            }), this.constructor.__super__.initialize.apply(this, arguments)
        },
        _onSearchDone: function (e) {
            var t = {};
            try {
                t = JSON.parse(e.kissMetricsEvents)
            } catch (i) {}
            this._recordAll(t)
        },
        _onFollowPropertyLink: function () {
            this._record("Opened PPP from search")
        },
        _onToggleShortlist: function () {
            this._record("Clicked shortlist", {
                origin: this.origin
            })
        },
        _onOrderChange: function (e) {
            this._record("Sorted search results", {
                order: e.order
            })
        },
        _onFilterChange: function (e) {
            this._record("Used filter", {
                id: e.filterId
            })
        },
        _onUsedPhotoCarousel: function () {
            this._record("Used photo carousel", {
                origin: this.origin
            })
        },
        _onMapPanned: function () {
            this._recordMapInteraction("Moved map")
        },
        _onMapZoomed: function (e) {
            switch (e.zoomType) {
            case "in":
                var t = "Zoomed-in using + button";
                break;
            case "out":
                var t = "Zoomed-out using - button";
                break;
            case "dblclick":
                var t = "Zoomed-in using double click";
                break;
            default:
                var t = "Undefined zoom event"
            }
            this._recordMapInteraction(t)
        },
        _onMapSwitchedType: function (e) {
            var t = "Clicked " + e.mapType.toLowerCase() + " view";
            this._recordMapInteraction(t)
        },
        _onMapMarkerClicked: function () {
            this._recordMapInteraction("Clicked marker")
        },
        _onMapMarkerHovered: function () {
            this._recordMapInteraction("Hovered marker")
        },
        _onMapSearchThisArea: function () {
            this._recordMapInteraction("Search in map")
        },
        _recordMapInteraction: function (e) {
            this._record("Used map", {
                "Map action": e,
                Path: window.location.pathname
            })
        }
    }), HouseTrip.Collections.Bookings = Backbone.Collection.extend({
        model: HouseTrip.Models.Booking,
        url: function () {
            return this.baseUrl + "?" + $.param({
                page: this.page,
                responsive: !0
            })
        },
        initialize: function (e, t) {
            this.totalBookings = t.totalBookings, this.translationUrl = t.translationUrl, this.currentLocale = t.currentLocale, this.baseUrl = t.url, this.page = 2, this.reviewsTranslated = !1, this.reviews = [], this.processData(e)
        },
        processData: function (e) {
            _.each(e, function (e) {
                _.each(e.reviews, function (e) {
                    this.reviews.push(new HouseTrip.Models.Review(e))
                }.bind(this))
            }.bind(this))
        },
        search: function () {
            var e = $.get(this.url(), function (e) {
                this.add(e), this.processData(e), this.page++, this.reviewsTranslated && this.translate(), this.trigger("searched")
            }.bind(this));
            HouseTrip.Helpers.showLoadingIndicator(e)
        },
        translate: function () {
            this._eachReview("translate"), this.reviewsTranslated = !0
        },
        revert: function () {
            this._eachReview("revert"), this.reviewsTranslated = !1
        },
        _eachReview: function (e) {
            _.invoke(this.reviews, e, this.currentLocale)
        }
    }), HouseTrip.Collections.SearchFilters = Backbone.Collection.extend({
        getFilter: function (e) {
            return this.findWhere({
                name: e
            })
        },
        valuesFor: function (e) {
            return this.getFilter(e).getValues()
        },
        submit: function () {
            this.trigger("submit")
        },
        update: function (e) {
            _.each(this.models, function (t) {
                t.set("json", e[t.get("name")])
            })
        },
        resetFilters: function () {
            _.each(this.models, function (e) {
                e.reset()
            }), this.trigger("reset")
        },
        updateTotalResults: function () {
            this.trigger("updateTotalResults")
        },
        isReset: function () {
            var e = _.find(this.models, function (e) {
                return !e.isReset()
            });
            return void 0 === e
        }
    }), HouseTrip.Collections.Properties = Backbone.Collection.extend({
        model: HouseTrip.Models.Property,
        initialize: function () {
            this.on("change:highlighted", this.propertyHighlighted.bind(this))
        },
        propertyHighlighted: function (e) {
            e.get("highlighted") && _(this.without(e)).each(function (e) {
                e.get("highlighted") && e.set("highlighted", !1)
            })
        }
    }), HouseTrip.Collections.Photos = Backbone.Collection.extend({
        model: HouseTrip.Models.Photo,
        initialize: function (e, t) {
            if (t.property) {
                this.url = t.property.get("photos").url;
                var i = t.property.get("default_photo");
                i && e.push(i)
            }
        },
        fetchOnce: function () {
            this.fetching || this.loaded || (this.fetching = !0, this.fetch().done(function () {
                this.loaded = !0, this.trigger("loaded"), this.fetching = !1
            }.bind(this)))
        }
    }), HouseTrip.Collections.Destinations = Backbone.Collection.extend({
        type: null,
        initialize: function (e) {
            this.type = e.type
        },
        parseAutocompleteElement: function (e) {
            return {
                name: e.name,
                country: e.country,
                id: e.id
            }
        }
    }), HouseTrip.Collections.SearchResults = function () {
        this.locations = new HouseTrip.Collections.Destinations({
            type: "locations"
        }), this.districts = new HouseTrip.Collections.Destinations({
            type: "districts"
        }), this.regions = new HouseTrip.Collections.Destinations({
            type: "regions"
        }), this.countries = new HouseTrip.Collections.Destinations({
            type: "countries"
        }), this.groups = ["locations", "districts", "regions", "countries"], this.autocomplete = new HouseTrip.Autocomplete({
            mode: HouseTrip.env()
        })
    }, _.extend(HouseTrip.Collections.SearchResults.prototype, Backbone.Events, {
        DEFAULT_MAX_PER_GROUP: 5,
        MIN_CHARACTERS_FOR_SUGGESTIONS: 2,
        search: null,
        fetch: function (e) {
            this.search = e, this._shouldAutocomplete() ? this.autocomplete.search(this.search, this, this._parse) : (this.reset(), this.trigger("change"))
        },
        reset: function () {
            this.locations.reset(), this.districts.reset(), this.regions.reset(), this.countries.reset()
        },
        isEmpty: function () {
            return 0 == this.locations.length && 0 == this.districts.length && 0 == this.regions.length && 0 == this.countries.length
        },
        maxResultsReached: function () {
            return Math.max(this.locations.length, this.districts.length, this.regions.length, this.countries.length).length >= this.DEFAULT_MAX_PER_GROUP
        },
        _shouldAutocomplete: function () {
            return null != this.search && this.search.length >= this.MIN_CHARACTERS_FOR_SUGGESTIONS
        },
        _parse: function (e) {
            this.reset(), _.each(e.locations, function (e) {
                this.locations.add(this.locations.parseAutocompleteElement(e))
            }.bind(this)), _.each(e.districts, function (e) {
                this.districts.add(this.districts.parseAutocompleteElement(e))
            }.bind(this)), _.each(e.regions, function (e) {
                this.regions.add(this.regions.parseAutocompleteElement(e))
            }.bind(this)), _.each(e.countries, function (e) {
                this.countries.add(this.countries.parseAutocompleteElement(e))
            }.bind(this)), this.trigger("change")
        }
    }),
    function () {
        HouseTrip.Autocomplete = function (e) {
            e = e || {}, this.host = this._selectHost(e), this.url = this.host + "/v1/destinations", this.locale = $("html").attr("lang")
        }, HouseTrip.Autocomplete.prototype = {
            search: function (e, t, i) {
                $.ajax({
                    url: this.url,
                    data: {
                        q: e,
                        locale: this.locale
                    },
                    dataType: "jsonp",
                    context: t,
                    success: i
                })
            },
            _selectHost: function (e) {
                return "production" === e.mode ? "http://ht-autocomplete-production.herokuapp.com" : "http://ht-autocomplete-staging.herokuapp.com"
            }
        }
    }(), HouseTrip.Views.MobileNumberField = Backbone.View.extend({
        initialize: function (e) {
            this.$input = this.$el.find("input"), this.min = e.min || 0, this.max = e.max || 20, this.zeroOrAny = e.zeroOrAny || "any", this.rendered = !1
        },
        render: function () {
            return this.rendered || (this._appendElements(), this._registerEvents(), this.rendered = !0), this._updateState(), this
        },
        _appendElements: function () {
            this.$container = $('<span class="ht-mobile-number-field">'), this.$el.append(this.$container), this.$input.hide(), this.$decButton = $('<a class="ht-mobile-number-field-dec">').text("-"), this.$incButton = $('<a class="ht-mobile-number-field-inc">').text("+"), this.$value = $('<span class="ht-mobile-number-field-value">'), this.$container.append(this.$decButton).append(this.$incButton).append(this.$value)
        },
        _registerEvents: function () {
            HouseTrip.Lib.MobileCompatibility.click();
            this.$decButton.click(this._decrement.bind(this)), this.$incButton.click(this._increment.bind(this))
        },
        _increment: function () {
            this._get() < this.max && (this._set(this._get() + 1), this._updateState())
        },
        _decrement: function () {
            this._get() > this.min && (this._set(this._get() - 1), this._updateState())
        },
        _updateState: function () {
            if (0 === this._get()) {
                var e = "zero" === this.zeroOrAny ? 0 : HouseTrip.i18n.mobileForm.any;
                this.$value.text(e), this.$decButton.addClass("is-disabled")
            } else this._get() === this.max ? (this.$value.text(this._get()), this.$incButton.addClass("is-disabled")) : (this.$value.text(this._get()), this.$decButton.removeClass("is-disabled"), this.$incButton.removeClass("is-disabled"))
        },
        _get: function () {
            return Number(this.$input.val()) || 0
        },
        _set: function (e) {
            0 === e ? this.$input.val("").change() : this.$input.val(e).change()
        }
    }), HouseTrip.Views.FormsMobileSelect = Backbone.View.extend({
        initialize: function (e) {
            this.$input = this.$("select"), this.overlayName = "input-" + this.$input.attr("id"), this.overlayTemplate = HouseTrip.mobileOverlay.createOverlayFromTemplate(this.overlayName, "mobile-select-template"), this.overlay = new HouseTrip.Views.FormsMobileSelectMenu({
                el: this.overlayTemplate,
                select: this,
                multiple: this.$input.prop("multiple")
            }), this.parentOverlay = e.parentOverlay
        },
        events: {
            click: "onClick"
        },
        render: function () {
            return this.overlay.render(), this.$text = $('<span class="ht-mobile-select-text">'), this.$input.hide().after(this.$text), this.overlay.$("label.title").text(this.$("label").text()), this._updateText(), this
        },
        closeSubMenu: function () {
            this.parentOverlay ? HouseTrip.mobileOverlay.open(this.parentOverlay) : HouseTrip.mobileOverlay.close()
        },
        onClick: function () {
            HouseTrip.mobileOverlay.open(this.overlayName)
        },
        getOptions: function () {
            return this.$("option")
        },
        setSelected: function (e) {
            this.$input.val(e).change(), this._updateText()
        },
        anyLabel: function () {
            return this.$input.data("any-label") || HouseTrip.i18n.mobileForm.any
        },
        _updateText: function () {
            var e = [];
            this.$("option").each(function (t, i) {
                var n = $(i);
                n.prop("selected") && e.push(n.text())
            }), 0 == e.length && (e = [this.anyLabel()]), this.$text.text(e.join(", "))
        }
    }), HouseTrip.Views.FormsMobileSelectMenu = Backbone.View.extend({
        initialize: function (e) {
            this.select = e.select, this.multiple = e.multiple, this.$content = this.$(".content"), this.selected = []
        },
        events: {
            "click .ht-mobile-form-section:not(.header)": "onSectionClick",
            "click button[type='submit']": "onSubmit",
            "click .ht-mobile-form-cancel": "onCancel"
        },
        render: function () {
            return this.multiple && this._renderCheckbox(this.select.anyLabel(), "_any_").addClass(".anyCheckbox"), this.select.getOptions().each(function (e, t) {
                var i = $(t);
                "" !== i.text() && this._renderCheckbox(i.text(), i.attr("value"))
            }.bind(this)), this._retrieveSelected(), this._updateCheckboxStates(), this
        },
        _renderCheckbox: function (e, t) {
            var i = $('<div class="ht-mobile-form-full">').append($("<label>").text(e));
            i.append(this.multiple ? $('<div class="ht-mobile-form-checkbox">').append($('<i class="ht-icon-ok">')) : $('<div class="ht-mobile-form-radio-button">').append($('<i class="ht-icon-circle">')));
            var n = $('<div class="ht-mobile-form-section">').append(i);
            return n.data("value", t), this.$content.append(n), n
        },
        onSectionClick: function (e) {
            var t = $(e.target).closest(".ht-mobile-form-section"),
                i = t.data("value");
            if ("_any_" == i) this.selected = [];
            else if (this.multiple) {
                var n = !_.contains(this.selected, i);
                n ? this.selected.push(i) : this.selected = _.without(this.selected, i)
            } else this.selected = [i];
            this._updateCheckboxStates()
        },
        close: function () {
            this.select.closeSubMenu()
        },
        onSubmit: function () {
            return this.select.setSelected(this.selected), this.close(), !1
        },
        onCancel: function () {
            return this.close(), this._retrieveSelected(), this._updateCheckboxStates(), !1
        },
        _updateCheckboxStates: function () {
            this.$(".ht-mobile-form-section:not(.header)").each(function (e, t) {
                var i, n = $(t),
                    r = $(t).data("value");
                i = "_any_" == r ? 0 == this.selected.length : _.contains(this.selected, r), n.toggleClass("is-disabled", !i).find("i").toggle(i)
            }.bind(this))
        },
        _retrieveSelected: function () {
            this.selected = [], this.select.getOptions().each(function (e, t) {
                var i = $(t);
                i.prop("selected") && this.selected.push(i.attr("value"))
            }.bind(this))
        }
    }), HouseTrip.Views.FormsMobileSelectDate = Backbone.View.extend({
        initialize: function (e) {
            this.overlay = new HouseTrip.Views.FormsMobileCalendar({
                el: $(".ht-mobile-overlay-date-picker"),
                onCancel: this.close.bind(this),
                onUpdate: this.onUpdate.bind(this)
            }), this.overlayName = "date-picker", this.parentOverlay = e.parentOverlay, this.updateCallback = e.updateCallback, this._initializeCalendar(), this._refreshDatesLabel()
        },
        events: {
            click: "open"
        },
        open: function () {
            HouseTrip.mobileOverlay.open(this.overlayName)
        },
        onUpdate: function () {
            return this._refreshDatesLabel(), this.updateCallback ? this.updateCallback() : this.close(), !1
        },
        close: function () {
            return this.parentOverlay ? HouseTrip.mobileOverlay.open(this.parentOverlay) : HouseTrip.mobileOverlay.close(), !1
        },
        _initializeCalendar: function () {
            var e = this.$(".ht-mobile-from-date-field").val(),
                t = this.$(".ht-mobile-to-date-field").val(),
                i = [e, t];
            "" !== e && "" !== t && (i = i.map(function (e) {
                return new Date(e)
            }), this.overlay.setDatesDisplay(i), this.overlay.$calendar.DatePickerSetDate(i, !0))
        },
        formatDateToSubmit: HouseTrip.Helpers.Dates.toSubmit,
        _refreshDatesLabel: function () {
            var e = this.overlay.$startDateDisplay.val(),
                t = this.overlay.$endDateDisplay.val(),
                i = this.overlay.$calendar.DatePickerGetDate()[0];
            e && t ? (this.$(".ht-mobile-from-date-field").val(this.formatDateToSubmit(i[0])), this.$(".ht-mobile-to-date-field").val(this.formatDateToSubmit(i[1])), this.$(".ht-mobile-select-text").text(e + " - " + t)) : (this.$(".ht-mobile-from-date-field").val(""), this.$(".ht-mobile-to-date-field").val(""), this.$(".ht-mobile-select-text").text(this.$(".ht-mobile-select-text").data("any-label")))
        }
    }), HouseTrip.Views.FormsMobileCalendar = Backbone.View.extend({
        initialize: function (e) {
            this.$startDateDisplay = this.$(".js-start-date-to-show"), this.$endDateDisplay = this.$(".js-end-date-to-show"), this.$numberOfNightsDisplay = this.$(".js-number-of-nights"), this.$calendar = this.$el.find(".js-search-calendar"), this.translations = this.$calendar.data("translations"), this.$startDateDisplay.attr("disabled", "true"), this.$endDateDisplay.attr("disabled", "true"), this.$calendar.DatePicker({
                calendars: 1,
                starts: 1,
                inline: !0,
                monthsAround: !1,
                mode: "range",
                onChange: this.updateControls.bind(this),
                locale: this.prepareLocaleForCalendar(),
                allowPastDates: !1,
                name: "mobile"
            }), this.onUpdate = e.onUpdate, this.onCancel = e.onCancel
        },
        events: {
            "click .update-button-date-picker": "onUpdate",
            "click .ht-mobile-form-cancel": "onCancel"
        },
        prepareLocaleForCalendar: function () {
            return {
                daysMin: this.translations.calendar.days_of_week_short,
                monthsShort: this.translations.calendar.months_short
            }
        },
        updateControls: function () {
            var e = $(".search-calendar").DatePickerGetDate()[0];
            this.setDatesDisplay(e)
        },
        setDatesDisplay: function (e) {
            var t = this.formatDateToShow(e[0]),
                i = this.formatDateToShow(e[1]);
            t == i ? (this.$startDateDisplay.val(null), this.$endDateDisplay.val(null)) : (this.$startDateDisplay.val(t), this.$endDateDisplay.val(i)), this.setNumberOfNights(e)
        },
        setNumberOfNights: function (e) {
            var t = HouseTrip.Helpers.Dates.numberOfNights(e[0], e[1]) || 0,
                i = 1 == t ? this.translations.inputs.night : this.translations.inputs.nights,
                n = _.template(i, {
                    nights: t
                });
            this.$numberOfNightsDisplay.text(n)
        },
        formatDateToShow: function (e) {
            return null == e ? "" : this.translations.calendar.days_of_week_short[e.getDay()] + " " + e.getDate() + " " + this.translations.calendar.months_short[e.getMonth()]
        }
    }), HouseTrip.Views.MobilePeoplePicker = Backbone.View.extend({
        initialize: function (e) {
            this.overlay = new HouseTrip.Views.MobilePeoplePickerMenu({
                el: this._overlayTemplate(),
                parentOverlay: e.parentOverlay,
                model: this.model
            }), HouseTrip.router.on("route:openOverlay", this._onOverlay.bind(this))
        },
        events: {
            click: "_onClick"
        },
        render: function (e) {
            return this.overlay.render(), e && e.overlay && this._updateGuestsCount(), this
        },
        _onClick: function () {
            HouseTrip.mobileOverlay.open("people-picker")
        },
        _overlayTemplate: function () {
            return HouseTrip.mobileOverlay.createOverlayFromTemplate("people-picker", "mobile-people-picker")
        },
        _onOverlay: function (e) {
            "filters" === e && this.render({
                overlay: e
            })
        },
        _cardinalityName: function (e) {
            return 0 === e ? "none" : 1 === e ? "singular" : "plural"
        },
        _updateGuestsCount: function () {
            _.each(["adults", "children"], function (e) {
                var t = this.overlay[e]();
                this._updateVisibility(e, t), this._updateText(e, t)
            }.bind(this)), this._addComma()
        },
        _updateVisibility: function (e, t) {
            var i = this._cardinalityName(t),
                n = this.$("." + e),
                r = this.$("." + e + ".singular"),
                s = this.$("." + e + ".plural");
            "none" == i ? n.hide() : "singular" == i ? (r.show(), s.hide()) : (s.show(), r.hide())
        },
        _updateText: function (e, t) {
            var i = this._cardinalityName(t),
                n = this.$("." + e + "." + i);
            if (n.text().match(/\d+/)) {
                var r = n.text().replace(/\d+/, t);
                n.text(r)
            } else {
                var r = n.text().replace(/%{\w+}/, t);
                n.text(r)
            }
        },
        _addComma: function () {
            this.$(".comma").remove();
            var e = $(".ht-mobile-people-picker-text span").filter(":visible");
            if (e.size() > 1) {
                var t = $("<span>");
                $(t).addClass("comma").html(", ").insertAfter(e.first())
            }
        }
    }), HouseTrip.Views.MobilePeoplePickerMenu = Backbone.View.extend({
        initialize: function (e) {
            this.parentOverlay = e.parentOverlay, this.adultsPicker = new HouseTrip.Views.MobileNumberField({
                el: this.$(".ht-mobile-people-picker.adults"),
                zeroOrAny: "zero",
                min: 1
            }), this.childrenPicker = new HouseTrip.Views.MobileNumberField({
                el: this.$(".ht-mobile-people-picker.children"),
                zeroOrAny: "zero"
            }), HouseTrip.router.on("route:openOverlay", this._onOverlay.bind(this))
        },
        events: {
            "click .ht-mobile-form-cancel": "_onCancel",
            "click .ht-button-primary": "_onDone"
        },
        render: function () {
            return this.adultsPicker.render(), this.childrenPicker.render(), this
        },
        adults: function () {
            return Number(this.$(".adults input").val())
        },
        children: function () {
            return Number(this.$(".children input").val())
        },
        _onCancel: function (e) {
            return e.stopPropagation(), this._recoverTempState(), this._openParentOverlay(), !1
        },
        _onDone: function () {
            this._commitTempState(), this._openParentOverlay()
        },
        _onOverlay: function (e) {
            "people-picker" === e && this._saveTempState()
        },
        _commitTempState: function () {
            var e = this.adults(),
                t = this.children();
            this.model.set("adults", e), this.model.set("children", t)
        },
        _saveTempState: function () {
            this.temp_adults = this.$(".adults input").val(), this.temp_children = this.$(".children input").val()
        },
        _recoverTempState: function () {
            this.$(".adults input").val(this.temp_adults), this.$(".children input").val(this.temp_children), this.adultsPicker._updateState(), this.childrenPicker._updateState()
        },
        _openParentOverlay: function () {
            this.parentOverlay ? HouseTrip.mobileOverlay.open(this.parentOverlay) : HouseTrip.mobileOverlay.close()
        }
    }), HouseTrip.Views.HostNpsSurvey = Backbone.View.extend({
        initialize: function () {
            this.$errorMsg = this.$el.find(".error-message span"), this.$successMsg = this.$el.find(".success-message"), this.$loader = this.$el.find(".ht-loading-indicator")
        },
        events: {
            submit: "_onSubmit"
        },
        _onSubmit: function (e) {
            e.preventDefault(), this._validateForm() && (this.$loader.addClass("is-loading"), this.$(".modal-footer p, .modal-footer input").hide(), $.ajax({
                url: this.$el.attr("action") + ".json",
                type: this.$el.attr("method"),
                data: this.$el.serialize(),
                context: this,
                dataType: "json",
                success: function () {
                    this.$loader.removeClass("is-loading"), this.$(".modal-footer p").show(), this.$successMsg.fadeIn(), this.$successMsg.delay(2e3).fadeOut("fast", function () {
                        $("#npsModal").modal("hide"), HouseTrip.banners[0].hideBanner()
                    })
                },
                error: function (e) {
                    this.$loader.removeClass("is-loading"), $(".modal-footer p, .modal-footer input").show(), this.$errorMsg.text(e.responseText), this.$errorMsg.fadeIn()
                }
            }))
        },
        _validateForm: function () {
            return this.$el.find(".ratings input:checked").length > 0 ? (this.$errorMsg.hide(), this.$(".question-1").removeClass("error"), !0) : (this.$errorMsg.fadeIn(), this.$(".question-1").addClass("error"), !1)
        }
    }), HouseTrip.Views.SearchBar = Backbone.View.extend({
        events: {
            submit: "_onSubmit",
            "click .search-button": "closeAutocomplete"
        },
        initialize: function (e) {
            void 0 === this.model && (this.model = new HouseTrip.Models.PropertySearch), this.calendar = new HouseTrip.Views.SearchBarCalendar({
                el: this.$(".js-search-calendar"),
                parentView: this,
                model: this.model
            }), this.field = new HouseTrip.Views.SearchBarField({
                el: this.$(".search-input", this.el),
                model: this.model
            }), this.guests = HouseTrip.houseFlip.enabled("people_picker") ? this._newPicker() : this._oldPicker(), this.calendar.on("active", this.calendarOpened, this), this.calendar.on("inactive", this.calendarClosed, this), this.guests.on("active", this.guestsOpened, this), this.guests.on("inactive", this.guestsClosed, this), this.field.on("active", this.fieldOpened, this), this.field.on("selected", function () {
                HouseTrip.isMobile() || this.calendar.activate()
            }, this), e.visibleCalendar && this.calendar.datesAreBlank() && (this.calendarOpened(), this.calendar.toggleCalendarManually(!0)), $(document).on("click", this.deactivate.bind(this)), this.$("input").focus(), this.activate()
        },
        _oldPicker: function () {
            return new HouseTrip.Views.SearchBarGuests({
                el: this.$(".search-guests", this.el),
                model: this.model
            })
        },
        _newPicker: function () {
            return this.peoplePickerModel = new HouseTrip.Models.PeoplePicker({
                property_search: this.model
            }), new HouseTrip.Views.SearchBarPeoplePickerBox({
                el: this.$(".people-picker-menu", this.el),
                model: this.peoplePickerModel
            })
        },
        _onSubmit: function (e) {
            0 == this.field.content().length && (e.preventDefault(), this.field.handleValidationError()), this._triggerEvent()
        },
        _triggerEvent: function () {
            var e = HouseTrip.Helpers.Dates,
                t = {
                    destinationName: this.field.content(),
                    fromDate: e.toSubmit(this.calendar.startDate()),
                    toDate: e.toSubmit(this.calendar.endDate()),
                    numberOfGuests: this.guests.numberOfGuests()
                };
            HouseTrip.Events.trigger("searchBar:submit", t)
        },
        deactivateChildren: function () {
            this.guests.deactivate(), this.field.deactivateSuggestions(), this.calendar.deactivate()
        },
        activate: function () {
            this.$el.addClass("active")
        },
        deactivate: function (e) {
            0 === this.$el.has(e.target).length && this.deactivateChildren()
        },
        closeAutocomplete: function () {
            this.field.deactivateSuggestions()
        },
        render: function () {
            return this.guests.render(), this.calendar.render(), this
        },
        calendarOpened: function () {
            this.$el.addClass("calendar-opened"), this.field.deactivateSuggestions(), this.guests.deactivate()
        },
        calendarClosed: function () {
            this.$el.removeClass("calendar-opened")
        },
        guestsOpened: function () {
            this.$el.addClass("search-guests-opened"), this.field.deactivateSuggestions(), this.calendar.deactivate()
        },
        guestsClosed: function () {
            this.$el.removeClass("search-guests-opened")
        },
        fieldOpened: function () {
            this.guests.deactivate(), this.calendar.deactivate()
        }
    }), HouseTrip.Views.SearchBar.load = function () {
        $("[data-type=search-form]").length && (HouseTrip.searchBar = new HouseTrip.Views.SearchBar({
            el: "[data-type=search-form]"
        }).render())
    }, HouseTrip.Views.SearchBarField = Backbone.View.extend({
        UP_KEY_CODE: 38,
        DOWN_KEY_CODE: 40,
        ESC_KEY_CODE: 27,
        ENTER_KEY_CODE: 13,
        TAB_KEY_CODE: 9,
        events: {
            "keydown input": "onKeyDown",
            "keyup input": "onKeyUp",
            "click .result": "selectSuggestion",
            "click .search": "selectSuggestion",
            "focus input": "onFocus"
        },
        initialize: function () {
            this.timeout = null, this.collection = new HouseTrip.Collections.SearchResults, this.$destinationName = this.$("#property_search_destination_name"), this.autocompleteView = new HouseTrip.Views.SearchBarAutocompleteResults({
                el: this.$(".destination-results"),
                translation: this.$el.data.bind(this.$el),
                collection: this.collection
            }), this.model.on("change:destination_name", function () {
                this.$destinationName.val(this.model.get("destination_name"))
            }, this), this.model.on("change:destination_id", function () {
                this.$("#property_search_destination_id").val(this.model.get("destination_id"))
            }, this), this.origin = "searchbox", this.$el.append(this.originHTML())
        },
        handleValidationError: function () {
            this.$destinationName.focus(), this.showMessage(this.$el.data("validation"))
        },
        onKeyDown: function (e) {
            switch (e.which) {
            case this.DOWN_KEY_CODE:
                this.keyboardNavigationDown(e);
                break;
            case this.UP_KEY_CODE:
                this.keyboardNavigationUp(e);
                break;
            case this.ESC_KEY_CODE:
                this.deactivateSuggestions(e);
                break;
            case this.TAB_KEY_CODE:
                this.keyboardNavigationTab(e);
                break;
            case this.ENTER_KEY_CODE:
                this.keyboardNavigationEnter(e)
            }
        },
        onKeyUp: function (e) {
            switch (e.which) {
            case this.DOWN_KEY_CODE:
            case this.UP_KEY_CODE:
            case this.ESC_KEY_CODE:
            case this.TAB_KEY_CODE:
            case this.ENTER_KEY_CODE:
                break;
            default:
                this.timeout && window.clearTimeout(this.timeout), this.timeout = window.setTimeout(function () {
                    this.suggestLocation(e)
                }.bind(this), 15)
            }
        },
        keyboardNavigationDown: function () {
            var e = this.autocompleteView.nextSuggestion();
            e && this._fillInputWithSuggestion(e)
        },
        keyboardNavigationUp: function () {
            var e = this.autocompleteView.prevSuggestion();
            e && this._fillInputWithSuggestion(e)
        },
        keyboardNavigationEnter: function (e) {
            this.autocompleteView.activeSuggestion().length > 0 && (e.preventDefault(), this.deactivateSuggestions(), this.origin = "dropdown", this.updateOrigin(), this.trigger("selected"))
        },
        keyboardNavigationTab: function (e) {
            e.preventDefault(), this.deactivateSuggestions(), this.trigger("selected")
        },
        suggestLocation: function () {
            this.collection.fetch(this.content()), this.origin = "searchbox", this.updateOrigin(), this.model.set({
                destination_id: null,
                destination_name: this.content()
            })
        },
        selectSuggestion: function (e) {
            e.preventDefault();
            var t = $(e.target).closest(".result");
            return $(e.target).parent().hasClass("search") ? this.origin = "see-more" : (this.origin = "dropdown", this._fillInputWithSuggestion(t), this.trigger("selected")), this.deactivateSuggestions(), this.updateOrigin(), !1
        },
        _fillInputWithSuggestion: function (e) {
            this.model.set({
                destination_name: e.data("value"),
                destination_id: e.data("id")
            })
        },
        content: function () {
            return this.$destinationName.presentValue()
        },
        deactivateSuggestions: function () {
            this.autocompleteView.clear(), this.autocompleteView.hide()
        },
        onFocus: function () {
            this.trigger("active")
        },
        showMessage: function (e) {
            this.autocompleteView.showMessage($("<li>").html(e))
        },
        originHTML: function () {
            return $('<input type="hidden" name="origin" id="search_origin" />').attr("value", this.origin)
        },
        updateOrigin: function () {
            this.$("#search_origin").val(this.origin)
        }
    }), HouseTrip.Views.SearchBarAutocompleteResults = Backbone.View.extend({
        active: -1,
        initialize: function (e) {
            this._translation = e.translation, this.collection.on("change", this.render.bind(this))
        },
        nextSuggestion: function () {
            return this.active < this._suggestions().length - 1 ? (this.active++, this.highlightActiveSuggestion(), this.activeSuggestion()) : void 0
        },
        prevSuggestion: function () {
            return this.active > 0 ? (this.active--, this.highlightActiveSuggestion(), this.activeSuggestion()) : 0 === this.active ? this._resetState() : void 0
        },
        highlightActiveSuggestion: function () {
            this.$(".result").removeClass("active"), this.activeSuggestion().addClass("active")
        },
        render: function () {
            if (this.clear(), this.collection.isEmpty()) return void this.hide();
            this.show(), this.active = -1;
            var e = this.collection.locations,
                t = this.collection.districts,
                i = this.collection.regions,
                n = this.collection.countries;
            return _.each([e, t, i, n], function (e) {
                0 != e.length && (this._addResult(this._groupHTML(e)), this._addResult(this._separatorHTML()))
            }.bind(this)), this.collection.maxResultsReached() && this._addResult(this._helpHTML()), this._addResult(this._allResultsHTML()), this
        },
        clear: function () {
            this.$el.html(""), this.$el
        },
        hide: function () {
            this.$el.hide()
        },
        show: function () {
            this.$el.show()
        },
        showMessage: function (e) {
            this.clear(), this._addResult(e), this.show()
        },
        activeSuggestion: function () {
            return this.$(this._suggestions()[this.active])
        },
        _resetState: function () {
            return this.$(".result").removeClass("active"), this.active = -1, _.last(this.$("li"))
        },
        _suggestions: function () {
            return this.$("li.result")
        },
        _addResult: function (e) {
            this.$el.append(e)
        },
        _groupHTML: function (e) {
            var t = this._translation(e.type);
            return _.map(e.models, function (e, i) {
                return this._itemHTML(e, 0 == i, t)
            }.bind(this))
        },
        _itemHTML: function (e, t, i) {
            var n = "";
            return t && (n += "<span>" + i + "</span>"), n += '<a href="#">' + e.get("name") + (e.has("country") ? ", <span>" + e.get("country") + "</span>" : "") + "</a>", $("<li class='result'>").html(n).attr("data-value", e.get("name")).attr("data-id", e.get("id"))
        },
        _separatorHTML: function () {
            return $('<li class="separator">')
        },
        _helpHTML: function () {
            return $("<li class='help'>").html("Continue typing for more results")
        },
        _allResultsHTML: function () {
            var e = this.collection.search;
            return $("<li class='search'>").html('<a href="#">See all the results for "' + e + '"</a>').attr("data-value", e)
        }
    }), HouseTrip.Views.SearchBarGuests = Backbone.View.extend({
        events: {
            click: "activate",
            "click .decrement": "decrement",
            "click .increment": "increment"
        },
        active: !1,
        initialize: function () {
            this.model.on("change:number_of_guests", this.render, this)
        },
        numberOfGuests: function () {
            return Number(this.model.get("number_of_guests"))
        },
        maxNumberOfGuests: function () {
            return this.model.has("max_number_of_guests") ? this.model.get("max_number_of_guests") : 21
        },
        decrement: function () {
            this.numberOfGuests() > 1 && this.model.set("number_of_guests", this.numberOfGuests() - 1)
        },
        increment: function () {
            this.numberOfGuests() < this.maxNumberOfGuests() && this.model.set("number_of_guests", this.numberOfGuests() + 1)
        },
        activate: function () {
            this.active = !0, this.render(), this.trigger("active")
        },
        deactivate: function () {
            this.active = !1, this.render(), this.trigger("inactive")
        },
        render: function () {
            return this.$("input").val(this.numberOfGuests()), this.$(".guest-number").html(this.numberOfGuests()), this.$(".decrement").toggle(this.active), this.$(".increment").toggle(this.active), this
        }
    }), HouseTrip.Views.SearchBarPeoplePicker = Backbone.View.extend({
        events: {
            "click .decrement": "_onDecrement",
            "click .increment": "_onIncrement"
        },
        initialize: function (e) {
            this.type = e.type, this.model.on("change:number_of_guests", this.render, this)
        },
        render: function () {
            var e = Number(this.model.get(this.type));
            return $(".people-picker-menu > .guest-number").html(this.model.guests()), $("#property_search_number_of_guests").val(this.model.guests()), $("#property_search_number_of_" + this.type).val(e), this.$(".guest-number").html(e), this
        },
        _onDecrement: function (e) {
            e.stopPropagation(), this.model["dec" + this._capitalize(this.type)]()
        },
        _onIncrement: function (e) {
            e.stopPropagation(), this.model["inc" + this._capitalize(this.type)]()
        },
        _capitalize: function (e) {
            return e.charAt(0).toUpperCase() + e.slice(1)
        }
    }), HouseTrip.Views.SearchBarPeoplePickerBox = Backbone.View.extend({
        initialize: function () {
            this.adults = new HouseTrip.Views.SearchBarPeoplePicker({
                el: this.$(".people.adults"),
                model: this.model,
                type: "adults"
            }), this.children = new HouseTrip.Views.SearchBarPeoplePicker({
                el: this.$(".people.children"),
                model: this.model,
                type: "children"
            }), this.guestsPanel = new HouseTrip.Views.SearchBarGuestsPanel({
                el: this.$el
            }), this.model.on("change:to_date", this._onCalendarChange, this)
        },
        active: !1,
        events: {
            "click .ht-icon-user": "_onIconClick"
        },
        render: function () {
            return this.adults.render(), this.children.render(), this.guestsPanel.render(), this
        },
        activate: function () {
            this.active = !0, this.$el.toggleClass("open", !0), this.trigger("active")
        },
        deactivate: function () {
            this.active = !1, this.$el.toggleClass("open", !1), this.trigger("inactive")
        },
        numberOfGuests: function () {
            return this.model.guests()
        },
        _onIconClick: function (e) {
            e.stopPropagation(), this.active ? this.deactivate() : this.activate()
        },
        _onCalendarChange: function () {
            this.activate()
        }
    }), HouseTrip.Views.SearchBarGuestsPanel = Backbone.View.extend({
        render: function () {
            return this._centerMenuArrow(), this
        },
        _centerMenuArrow: function () {
            var e = this.$(".people-picker"),
                t = this.$(".arrow"),
                i = -1 * e.outerWidth() + this.$el.outerWidth();
            e.css({
                left: i
            });
            var n = 12,
                r = e.outerWidth() - this.$el.outerWidth() / 2 - n;
            t.css({
                left: r
            })
        }
    }), HouseTrip.Views.SearchBarCalendar = Backbone.View.extend({
        startDateDisplay: ".js-start-date-to-show",
        endDateDisplay: ".js-end-date-to-show",
        numberOfNightsDisplay: ".js-number-of-nights",
        calendarDisplay: ".js-toggle",
        removeDates: ".js-remove-dates",
        $currentInput: null,
        active: !1,
        initialize: function (e) {
            this.parentView = e.parentView, this.$startDateDisplay = this.$(this.startDateDisplay), this.$endDateDisplay = this.$(this.endDateDisplay), this.$startDateInput = this.$(".js-start-date-to-submit"), this.$endDateInput = this.$(".js-end-date-to-submit"), this.$numberOfNightsDisplay = this.$(this.numberOfNightsDisplay), this.$removeDates = this.$(this.removeDates), this.translations = this.$el.data("translations"), this.calendarPosition = e.calendarPosition || this.defaultCalendarPosition, this.initializeDatepicker(), _.bindAll(this, "toggleDatepicker", "toggleCalendar", "clearDates", "updateDatepickerPosition"), this.$el.on("click", this.startDateDisplay, this.toggleDatepicker), this.$el.on("click", this.endDateDisplay, this.toggleDatepicker), this.$el.on("click", this.calendarDisplay, this.toggleCalendar), this.$el.on("click", this.removeDates, this.clearDates), this.$startDateDisplay.on("focus", this.blurOut), this.$endDateDisplay.on("focus", this.blurOut), $(window).on("resize, scroll", this.updateDatepickerPosition), this.model.on("change:from_date", this.render, this), this.model.on("change:to_date", this.render, this), this._insertCallToActionToRemoveDates()
        },
        remove: function () {
            this.$el.off("click", this.startDateDisplay, this.toggleDatepicker), this.$el.off("click", this.endDateDisplay, this.toggleDatepicker), this.$el.off("click", this.calendarDisplay, this.toggleCalendar), this.$el.off("click", this.removeDates, this.clearDates), this.$startDateDisplay.off("focus", this.blurOut), this.$endDateDisplay.off("focus", this.blurOut), $(window).off("resize, scroll", this.updateDatepickerPosition), this.$startDateDisplay.DatePickerRemove(), this.$el.html("")
        },
        render: function () {
            this.restoreDates(), this._updateInput(this.$startDateInput, this.startDate()), this._updateInput(this.$endDateInput, this.endDate()), this.datesAreBlank() ? this.$startDateDisplay.DatePickerClear() : (this.datesArePresent() ? this.$startDateDisplay.DatePickerSetDate([this.startDate(), this.endDate()], !0, "smart") : this.model.has("to_date") ? this.model.has("from_date") || (this.$startDateDisplay.DatePickerSetDate(this.endDate(), !0, "smart"), this.startSelection(this.endDate())) : (this.$startDateDisplay.DatePickerSetDate(this.startDate(), !0, "smart"), this.startSelection(this.startDate())), this.active = !0, this.toggleCalendarManually(this.active), this.trigger("active"))
        },
        initializeDatepicker: function () {
            this.$startDateDisplay.DatePicker({
                calendars: 2,
                starts: 1,
                monthsAround: !1,
                mode: "range",
                position: "custom",
                onChange: this.addDates.bind(this),
                onBeforeHide: this.onBeforeDatepickerHide.bind(this),
                onAfterHide: this.onAfterDatepickerHide.bind(this),
                onHoverDate: this.onDatepickerHoverDate.bind(this),
                onMouseLeave: this.onDatepickerMouseLeave.bind(this),
                locale: this.prepareLocaleForCalendar(),
                allowPastDates: !1,
                name: "desktop"
            })
        },
        prepareLocaleForCalendar: function () {
            return {
                daysMin: this.translations.calendar.days_of_week_short,
                monthsShort: this.translations.calendar.months_short
            }
        },
        toggleCalendar: function (e) {
            e && e.stopImmediatePropagation(), (!this.active || this.datesAreBlank()) && (this.active = !this.active, this.toggleCalendarManually(this.active), this.toggleDatepickerVisibility(this.active, this.$startDateDisplay))
        },
        toggleCalendarManually: function (e) {
            this.$startDateDisplay.toggle(e), this.$endDateDisplay.toggle(e), this.$numberOfNightsDisplay.toggle(e), this.$removeDates.toggleClass("visible", e), e || this.trigger("inactive")
        },
        activate: function () {
            this.toggleCalendar(), this.$(this.startDateDisplay).focus().blur()
        },
        deactivate: function () {
            this.active && this.datesAreBlank() && (this.active = !1, this.toggleCalendarManually(this.active)), this.toggleDatepickerVisibility(!1)
        },
        toggleDatepicker: function (e) {
            e.stopImmediatePropagation(), this.toggleDatepickerManually($(e.target)), this.toggleDatepickerVisibility(!0, this.$currentInput)
        },
        toggleDatepickerManually: function (e) {
            this.trigger("active"), this.makeCurrentInputActive(e), this.$startDateDisplay.DatePickerShow(), this.updateDatepickerPosition()
        },
        toggleDatepickerVisibility: function (e, t) {
            e ? this.toggleDatepickerManually(t) : this.hideDatepicker()
        },
        onBeforeDatepickerHide: function (e, t) {
            return t === this.$removeDates.get(0) && $(e).is(":visible") ? (this.makeCurrentInputActive(this.$startDateDisplay), !1) : void 0
        },
        isStartDateCurrentInput: function () {
            return this.$currentInput.get(0) === this.$startDateDisplay.get(0)
        },
        isEndDateCurrentInput: function () {
            return this.$currentInput.get(0) === this.$endDateDisplay.get(0)
        },
        onDatepickerHoverDate: function (e) {
            if (this.startDate() || this.endDate()) {
                if (this.isStartDateCurrentInput())
                    if (this.model.has("to_date"))
                        if (e < this.endDate()) this.setDisplayedDate(this.$endDateDisplay, this.endDate()), this.setDisplayedDate(this.$startDateDisplay, e), this.setNumberOfNightsManually(e, this.endDate());
                        else {
                            var t = new Date(this.endDate().getTime());
                            t.setDate(this.endDate().getDate() - 1), this.setDisplayedDate(this.$startDateDisplay, t), this.setNumberOfNightsManually(t, this.endDate())
                        } else this.startSelection(e);
                else if (this.isEndDateCurrentInput())
                    if (this.model.has("from_date"))
                        if (e > this.startDate()) this.setDisplayedDate(this.$startDateDisplay, this.startDate()), this.setDisplayedDate(this.$endDateDisplay, e), this.setNumberOfNightsManually(this.startDate(), e);
                        else {
                            var i = new Date(this.startDate().getTime());
                            i.setDate(this.startDate().getDate() + 1), this.setDisplayedDate(this.$endDateDisplay, i), this.setNumberOfNightsManually(this.startDate(), i)
                        } else this.startSelection(e)
            } else this.setDisplayedDate(this.$currentInput, e)
        },
        onDatepickerMouseLeave: function () {
            this.restoreDates()
        },
        restoreDates: function () {
            this.setDisplayedDate(this.$startDateDisplay, this.startDate()), this.setDisplayedDate(this.$endDateDisplay, this.endDate()), this.setNumberOfNights()
        },
        _updateInput: function (e, t) {
            var i = this.formatDateToSubmit(t);
            e.val() !== i && e.val(i).change()
        },
        onAfterDatepickerHide: function () {
            this.restoreDates(), this.makeInputsInactive()
        },
        addDates: function (e, t, i) {
            this.datesArePresent() ? this.adjustDates(e, t, i) : this.isStartDateCurrentInput() ? this.adjustStartDate(i) : this.isEndDateCurrentInput() && this.adjustEndDate(i), this.getDatepicker().toggleClass("bothDatesSelected", this.datesArePresent()), this.datesArePresent() && this.startDate() < this.endDate() && this.hideDatepicker()
        },
        adjustDates: function (e, t, i) {
            this.isEndDateCurrentInput() ? (this.endDate(i), i < this.startDate() && (this.startDate(null, {
                silent: !0
            }), this.makeCurrentInputActive(this.$startDateDisplay))) : this.isStartDateCurrentInput() && (this.startDate(i), i > this.endDate() && (this.endDate(null, {
                silent: !0
            }), this.makeCurrentInputActive(this.$endDateDisplay)))
        },
        adjustStartDate: function (e) {
            this.startDate(e), (!this.endDate() || this.startDate() > this.endDate()) && this.makeCurrentInputActive(this.$endDateDisplay)
        },
        adjustEndDate: function (e) {
            this.endDate(e), (!this.startDate() || this.startDate() > this.endDate()) && this.makeCurrentInputActive(this.$startDateDisplay)
        },
        clearDates: function () {
            this.model.set({
                from_date: null,
                to_date: null
            })
        },
        setDisplayedDate: function (e, t) {
            e.val(this.formatDateToShow(t))
        },
        setNumberOfNights: function () {
            this.setNumberOfNightsManually(this.startDate(), this.endDate())
        },
        setNumberOfNightsManually: function (e, t) {
            var i = null;
            i = null === e || null === t ? 0 : Math.ceil((t - e) / 864e5), 0 > i && (i = 0);
            var n = 1 == i ? this.translations.inputs.night : this.translations.inputs.nights,
                r = _.template(n, {
                    nights: i
                });
            this.$numberOfNightsDisplay.text(r)
        },
        makeCurrentInputActive: function (e) {
            this.makeInputsInactive(), this.$currentInput = e, this.$currentInput.addClass("active"), this.updateArrowPosition(), this.isStartDateCurrentInput() ? this.getDatepicker().addClass("selectingStartDate").removeClass("selectingEndDate") : this.isEndDateCurrentInput() && this.getDatepicker().addClass("selectingEndDate").removeClass("selectingStartDate")
        },
        makeInputsInactive: function () {
            this.getDatepicker().removeClass("selectingStartDate").removeClass("selectingEndDate"), this.$startDateDisplay.removeClass("active"), this.$endDateDisplay.removeClass("active")
        },
        startSelection: function (e) {
            this.$startDateDisplay.DatePickerStartSelection(e)
        },
        stopSelection: function (e) {
            this.$startDateDisplay.DatePickerStopSelection(e)
        },
        defaultCalendarPosition: function () {
            var e = this.parentView.$el.find(".search-calendar");
            return {
                top: e.offset().top + e.height() + 9,
                left: e.offset().left + e.width() / 2
            }
        },
        updateDatepickerPosition: function () {
            this.$startDateDisplay.DatePickerSetCenter(this.calendarPosition()), this.updateArrowPosition()
        },
        updateArrowPosition: function () {
            this.$currentInput && this.$startDateDisplay.DatePickerSetArrowPosition(this.$currentInput.offset().left + this.$currentInput.width() / 2)
        },
        hideDatepicker: function () {
            this.getDatepicker().removeClass("selectingStartDate").removeClass("selectingEndDate"), this.makeInputsInactive(), this.$startDateDisplay.DatePickerHide()
        },
        getDatepicker: function () {
            return this.$startDateDisplay.DatePickerGetContainer()
        },
        formatDateToShow: function (e) {
            return null === e ? "" : this.translations.calendar.days_of_week_short[e.getDay()] + " " + e.getDate() + " " + this.translations.calendar.months_short[e.getMonth()]
        },
        formatDateToSubmit: HouseTrip.Helpers.Dates.toSubmit,
        formatStringToDate: HouseTrip.Helpers.Dates.fromString,
        blurOut: function (e) {
            $(e.target).trigger("blur")
        },
        startDate: function (e, t) {
            return this.dateAccessor("from_date", e, t || {})
        },
        endDate: function (e, t) {
            return this.dateAccessor("to_date", e, t || {})
        },
        dateAccessor: function (e, t, i) {
            return void 0 === t ? this.formatStringToDate(this.model.get(e)) : null === t ? this.model.set(e, t, i) : this.model.set(e, this.formatDateToSubmit(t), i)
        },
        datesAreBlank: function () {
            return !this.model.has("from_date") && !this.model.has("to_date")
        },
        datesArePresent: function () {
            return this.model.has("from_date") && this.model.has("to_date")
        },
        _onClickDatepickerNotice: function () {
            this.clearDates(), this.deactivate()
        },
        _insertCallToActionToRemoveDates: function () {
            var e = this.getDatepicker(),
                t = $("<a>", {
                    href: "#"
                }).html(this.translations.clearNotice),
                i = $("<div>", {
                    "class": "datepicker-notice"
                }).append(t);
            e.append(i), e.find(".datepicker-notice > a").click(this._onClickDatepickerNotice.bind(this))
        }
    }), HouseTrip.Views.Head = Backbone.View.extend({
        render: function (e) {
            var e = e || {};
            return e.title && this._updateTitle(e.title), this
        },
        _updateTitle: function (e) {
            this.$("title").text(e)
        }
    }), HouseTrip.Views.Header = Backbone.View.extend({
        initialize: function () {
            this.localization = new HouseTrip.Views.HeaderLocalization({
                el: this.$(".ht-mobile-localization-item")
            }).render(), 0 != this.$(".ht-my-shortlist-item").length && (this.myShortlistButton = new HouseTrip.Views.MyShortlistButton({
                el: this.$(".ht-my-shortlist-item")
            }).render())
        }
    }), HouseTrip.Views.HeaderLocalization = Backbone.View.extend({
        events: {
            "change select": "updateLocalization"
        },
        updateLocalization: function (e) {
            window.location = $(e.target).val()
        }
    }), HouseTrip.Views.MyShortlistButton = Backbone.View.extend({
        initialize: function () {
            HouseTrip.Events.on("search:toggleShortlist", this._shortlistToggled, this), HouseTrip.Events.on("ppp:toggleShortlist", this._shortlistToggled, this)
        },
        _shortlistToggled: function (e) {
            e && this._animate()
        },
        render: function () {
            return this
        },
        _animate: function () {
            this._heart().css("fill", "#eb646a"), this._link().addClass("animate"), setTimeout(function () {
                this._link().removeClass("animate"), this._heart().css("fill", "#ffffff")
            }.bind(this), 2e3)
        },
        _heart: function () {
            return this.$(".heart-icon")
        },
        _link: function () {
            return this.$("a")
        }
    }), HouseTrip.Views.Homepage = Backbone.View.extend({
        events: {
            "click .destination-link": "_onClickDestinationLink"
        },
        initialize: function (e) {
            new HouseTrip.Models.KissMetrics.Homepage({
                initialEvents: e.kissMetricsEvents
            }), this._doHeroSlideshow(), this._showContestConfirmationModalIfApplicable()
        },
        _doHeroSlideshow: function () {},
        _onClickDestinationLink: function (e) {
            HouseTrip.Events.trigger("homepage:followDestinationLink", {
                element: e.target
            })
        },
        _showContestConfirmationModalIfApplicable: function () {
            $("#js-contest-confirmation-modal").length > 0 && $("#js-contest-confirmation-modal").modal({
                backdrop: !1
            })
        }
    }), HouseTrip.Views.Page = Backbone.View.extend({
        initialize: function () {
            this.firstRendering = !0
        },
        render: function () {
            return this.firstRendering ? this.firstRendering = !1 : this._recalculateStickyElements(), this
        },
        _recalculateStickyElements: function () {
            this.$el.trigger("sticky_kit:recalc")
        }
    }), HouseTrip.Views.NavigationBar = Backbone.View.extend({
        initialize: function () {
            this.model.on("change", this.render, this)
        },
        render: function () {
            return this.$el.html(this.model.get("html")), this
        }
    }), HouseTrip.Views.KissMetricsLayer = Backbone.View.extend({
        initialize: function () {
            var e = this;
            this.$("[data-kissmetrics-outbound]").each(function () {
                var t = $(this).attr("id");
                if (t) {
                    var i = $(this).data("kissmetrics-outbound");
                    e.trackClick(t, i)
                }
            })
        },
        events: {
            "click [data-kissmetrics]": "recordClick"
        },
        trackClick: function (e, t) {
            HouseTrip.Helpers.KissMetrics.trackClick(e, t)
        },
        recordClick: function (e) {
            var t = $(e.target).closest("[data-kissmetrics]").data("kissmetrics");
            HouseTrip.Helpers.KissMetrics.recordEvent(t)
        }
    }), HouseTrip.Views.Banner = Backbone.View.extend({
        events: {
            "click .ht-banner-action": "close"
        },
        close: function (e) {
            this.hideBanner();
            var t = this.$el.find("form").attr("action");
            return t ? this.postJsonForm(t) : this.postToProfile(this.$el.data("profile-option"), this.$el.data("profile-value")), e.preventDefault(), !1
        },
        hideBanner: function () {
            this.$el.slideUp(500, function () {
                this.$el.remove()
            }.bind(this))
        },
        postJsonForm: function (e) {
            $.ajax({
                type: "POST",
                url: e + ".json",
                dataType: "json"
            })
        },
        postToProfile: function (e, t) {
            var i = {};
            i[e] = t, $.ajax({
                type: "put",
                url: "/" + $("html").attr("lang") + "/account/profile.json",
                data: i
            })
        }
    }), HouseTrip.Views.Banner.load = function () {
        var e = [];
        return _.each($('[data-type="banner"]'), function (t) {
            e.push(new HouseTrip.Views.Banner({
                el: t
            }))
        }), e
    }, HouseTrip.Views.MobileOverlay = Backbone.View.extend({
        initialize: function () {
            HouseTrip.router.route("mobile-overlay/:overlayName", "openOverlay"), HouseTrip.router.on("route", this._closeOverlay.bind(this)), HouseTrip.router.on("route:openOverlay", this._openOverlay.bind(this))
        },
        _closeOverlay: function (e) {
            "openOverlay" != e && this._closeAll()
        },
        _openOverlay: function (e) {
            $("body").addClass("has-mobile-overlay"), this.$(".ht-mobile-overlay").removeClass("is-open"), this.$('.ht-mobile-overlay[data-overlay="' + e + '"]').addClass("is-open"), this.currentlyOpen = e, window.scrollTo(0, 0), this.trigger("open"), this.trigger("open:" + e)
        },
        _closeAll: function () {
            $("body").removeClass("has-mobile-overlay"), this.$(".ht-mobile-overlay").removeClass("is-open"), this.currentlyOpen = null
        },
        open: function (e) {
            HouseTrip.router.navigate("mobile-overlay/" + e, {
                trigger: !0
            })
        },
        close: function () {
            HouseTrip.router.navigate("", {
                trigger: !0
            })
        },
        createOverlayFromTemplate: function (e, t) {
            this.$('.ht-mobile-overlay[data-overlay="' + e + '"]').remove();
            var i = $("<div>").addClass("ht-mobile-overlay").attr("data-overlay", e).toggleClass("is-open", this.currentlyOpen == e).html(this.$('.ht-mobile-overlay[data-overlay="' + t + '"]').html());
            return this.$el.append(i), i
        }
    }), HouseTrip.Views.BookingBar = Backbone.View.extend({
        events: {
            "click .js-reset": "reset",
            "click .js-other-properties": "registerOtherPropertiesLinkClick",
            "click .js-toggle-calendar": "toggleCalendar",
            "click .js-reset-dates": "resetDates",
            "click .js-send-on-success": "submitFormOnSuccessfulAuthentication",
            "click .js-send-enquiry": "sendAvailabilityRequest",
            "click .js-revert-to-form": "resetToAvailabilityCheck",
            "change #booking_check_in_date": "changedCheckInDate",
            "change #booking_check_out_date": "changedCheckOutDate"
        },
        initialize: function () {
            _.bindAll(this, "sendAvailabilityRequest", "enableLoadingState", "disableLoadingState"), this.listenTo(this.model, "change", this.render), HouseTrip.Helpers.Stickies.register(this.$el, {
                parent: ".ht-ppp-main-area"
            }), this.$form = this.$el.find(".availability-request-form"), this.$price = this.$el.find(".price"), this.$callToAction = this.$el.find(".booking-bar-cta"), this.$overlay = this.$el.find(".overlay"), this.$message = $(".ht-booking-bar-message"), this.searchModel = new HouseTrip.Models.PropertySearch({
                from_date: this.model.get("from_date") || null,
                to_date: this.model.get("to_date") || null,
                number_of_guests: this.model.get("number_of_guests") || 2,
                number_of_adults: this.model.get("number_of_adults"),
                number_of_children: this.model.get("number_of_children"),
                max_number_of_guests: this.model.get("maxGuests")
            }), this.listenTo(this.searchModel, "change", function () {
                (this.model.get("valid") || this.model.get("change_dates")) && this.model.revertToDefaults(), this.model.get("change_dates") && this.resetDates()
            }), this.$(".js-bookingbar-calendar").length > 0 && (this.calendar = new HouseTrip.Views.SearchBarCalendar({
                el: this.$(".js-bookingbar-calendar"),
                model: this.searchModel,
                parentView: this,
                calendarPosition: this.calendarPosition.bind(this)
            }), this.searchModel.hasDates() && this.calendar.render()), this.guests = HouseTrip.houseFlip.enabled("people_picker") ? this._newPicker() : this._oldPicker(), HouseTrip.houseFlip.enabled("people_picker") && this._setCalendarAndPickerInteract()
        },
        render: function () {
            return this.$callToAction.html(this.model.get("action_button")), this.renderPrice(), this.renderMessage(), this.showOverlay(), this.model.fireKmEvents(), setTimeout(function () {
                HouseTrip.Helpers.Stickies.recalculate()
            }, 500), this.guests.render(), this
        },
        reset: function () {
            return HouseTrip.Events.trigger("ppp:closeSuccessMessage"), this.model.fetch().done(function () {
                this.resetDates()
            }.bind(this)), !1
        },
        resetToAvailabilityCheck: function () {
            return HouseTrip.Events.trigger("ppp:makeAnotherEnquiry"), this.showForm(), !1
        },
        resetDates: function () {
            this.calendar.clearDates()
        },
        renderPrice: function () {
            this.$price.html(this.model.price()), this.$price.toggleClass("subtotal", this.model.get("valid"))
        },
        renderMessage: function () {
            var e = this.model.get("message");
            e ? (this.setMessage(), this.setCallToAction(), this.$message.slideDown()) : this.$message.slideUp()
        },
        setMessage: function () {
            this.$message.html(this.model.get("message")), this.model.get("valid") ? this.$message.removeClass("error-message") : (this.$message.append(" " + this.model.get("other_properties_link")), this.$message.addClass("error-message"), this.$callToAction.addClass("error-message"))
        },
        setCallToAction: function () {
            var e = this.$callToAction.find(".ht-button");
            this.model.get("valid") ? (e.removeClass("ht-button-primary"), e.addClass("ht-button-success")) : (e.removeClass("ht-button-success"), e.addClass("ht-button-primary"))
        },
        showForm: function () {
            this.$overlay.addClass("hidden"), this.$form.removeClass("hidden"), this.model.set("overlay", null), this.model.has("message") && this.$message.show()
        },
        showOverlay: function () {
            this.model.has("overlay") && (this.$overlay.html(this.model.get("overlay")), this.$form.addClass("hidden"), this.$overlay.removeClass("hidden"), this.$message.hide())
        },
        submitFormOnSuccessfulAuthentication: function (e) {
            e.preventDefault(), HouseTrip.Events.once("currentUser:signedIn", this.sendAvailabilityRequest)
        },
        sendAvailabilityRequest: function (e) {
            var t;
            if (!this.searchModel.hasDates() || this.model.get("change_dates")) return this.model.revertToDefaults(), this.showCalendar(), !1;
            if (e && e.target && e.preventDefault(), this.enableLoadingState(), this.model.get("valid")) t = this.model.create({
                mobile: !1
            }), t.done(function (e) {
                this.model.set(e)
            }.bind(this));
            else {
                var i = [this.searchModel.get("from_date"), this.searchModel.get("to_date")];
                t = this.model.preview(i, this.searchModel.get("number_of_guests"))
            }
            t.always(this.disableLoadingState)
        },
        calendarPosition: function () {
            return {
                top: this.$el.offset().top + this.$(".js-bookingbar-calendar").height() + 30,
                left: this.$el.offset().left + this.$el.width() / 3
            }
        },
        toggleCalendar: function (e) {
            e.preventDefault(), this.calendar.active = !this.calendar.active, this.calendar.active ? this.showCalendar() : (this.calendar.hideDatepicker(), this.calendar.trigger("inactive"))
        },
        enableLoadingState: function () {
            this.$(".spinner").css("visibility", "visible"), this.$(".ht-button").addClass("disabled")
        },
        disableLoadingState: function () {
            this.$(".spinner").css("visibility", "hidden"), this.$(".ht-button").removeClass("disabled")
        },
        changedCheckInDate: function () {
            HouseTrip.Events.trigger("ppp:checkInDateChange")
        },
        changedCheckOutDate: function () {
            HouseTrip.Events.trigger("ppp:checkOutDateChange")
        },
        showCalendar: function () {
            this.calendar.toggleDatepickerManually(this.calendar.$startDateDisplay.val() && !this.calendar.$endDateDisplay.val() ? this.calendar.$endDateDisplay : this.calendar.$startDateDisplay)
        },
        registerOtherPropertiesLinkClick: function (e) {
            var t = this.$(e.target).data("context");
            HouseTrip.Events.trigger("ppp:seeOtherAvailableProperties", t)
        },
        _oldPicker: function () {
            var e = new HouseTrip.Views.SearchBarGuests({
                el: this.$(".search-guests", this.el),
                model: this.searchModel
            });
            return e.active = !0, e
        },
        _newPicker: function () {
            return this.peoplePickerModel = new HouseTrip.Models.PeoplePicker({
                property_search: this.searchModel
            }), new HouseTrip.Views.SearchBarPeoplePickerBox({
                el: this.$(".people-picker-menu", this.el),
                model: this.peoplePickerModel
            })
        },
        _setCalendarAndPickerInteract: function () {
            this.calendar.on("active", function () {
                this.guests.deactivate()
            }.bind(this)), this.guests.on("active", function () {
                this.calendar.deactivate()
            }.bind(this))
        }
    }), HouseTrip.Views.MobileBookingBar = Backbone.View.extend({
        events: {
            "change #booking_number_of_guests": "delayedPreviewAvailabilityRequest",
            "click .ht-mobile-booking-bar-submit-button": "createAvailabilityRequest",
            "click .ht-mobile-booking-bar-book-link": "processBookNow"
        },
        initialize: function (e) {
            this.model.on("change:received_at", this.render, this), this.model.on("beforeProcessing", this.beforeProcessing, this), this.model.on("doneProcessing", this.doneProcessing, this), this.datePicker = new HouseTrip.Views.FormsMobileSelectDate({
                el: $(".ht-mobile-date-picker").closest(".ht-mobile-form-section"),
                parentOverlay: "booking_bar",
                updateCallback: this.previewAvailabilityRequest.bind(this)
            }), new HouseTrip.Views.MobileNumberField({
                el: $(".ht-mobile-number-field").closest(".ht-mobile-form-right"),
                min: 1,
                max: this.model.attributes.maxGuests
            }).render(), this.setView(), this._previewAvailabilityRequest = _.debounce(_.bind(this.previewAvailabilityRequest, this), 500), this.translations = e.translations
        },
        render: function () {
            this.setView(), this.processingEnded()
        },
        beforeProcessing: function () {
            this.processingStarted()
        },
        doneProcessing: function () {
            this.processingEnded()
        },
        toggleElements: function (e) {
            this.$(".ht-mobile-booking-bar-continue").toggle(e), this.$(".ht-mobile-booking-bar-change-dates").toggle(!e), this.$(".alternative-properties-link").toggle(!e)
        },
        setView: function () {
            this.$(".ht-mobile-booking-bar-title").html(this.model.get("title"));
            var e = this.model.get("valid");
            this.toggleElements(e), e ? this.$(".ht-mobile-booking-bar-submit-button").removeClass("disabled") : (this.$(".ht-mobile-booking-bar-submit-button").addClass("disabled"), this.$(".alternative-properties-link").replaceWith(this.model.get("other_properties_link")))
        },
        delayedPreviewAvailabilityRequest: function () {
            this.processingStarted(), this._previewAvailabilityRequest()
        },
        previewAvailabilityRequest: function () {
            this.processingStarted();
            var e = this.datePicker.overlay.$calendar.DatePickerGetDate()[0],
                t = this.$("#booking_number_of_guests").val();
            HouseTrip.Helpers.showLoadingIndicator(this.model.preview(e, t))
        },
        createAvailabilityRequest: function (e) {
            HouseTrip.currentUser.isSignedIn() ? this.runCreateAvailabilityRequest() : (HouseTrip.Events.once("currentUser:signedIn", this.runCreateAvailabilityRequest.bind(this)), e.preventDefault())
        },
        runCreateAvailabilityRequest: function () {
            return this.processingStarted(), this.model.get("direct_bookable") || (availabilityRequest = this.model.create({
                mobile: !0
            }), HouseTrip.Helpers.showLoadingIndicator(availabilityRequest), availabilityRequest.done(function (e) {
                $(".ht-mobile-overlay-thank-you-contents").html(e), HouseTrip.mobileOverlay.open("thank-you")
            }), availabilityRequest.fail(function () {})), !1
        },
        processBookNow: function (e) {
            HouseTrip.currentUser.isSignedIn() ? (this.followActionUrl(), e.preventDefault()) : HouseTrip.Events.once("currentUser:signedIn", this.followActionUrl.bind(this))
        },
        followActionUrl: function () {
            window.location = this.model.get("action_url")
        },
        processingStarted: function () {
            this.datePicker.overlay.$(".ht-mobile-booking-bar-continue").addClass("disabled"), this.datePicker.overlay.$(".update-button-date-picker").text(this.translations.submitting), this.datePicker.overlay.$(".update-button-date-picker").addClass("disabled"), this.$(".ht-mobile-booking-bar-submit-button").addClass("disabled")
        },
        processingEnded: function () {
            this.datePicker.overlay.$(".ht-mobile-booking-bar-continue").removeClass("disabled"), this.datePicker.close(), this.datePicker.overlay.$(".update-button-date-picker").text(this.translations.submitDates), this.datePicker.overlay.$(".update-button-date-picker").removeClass("disabled")
        }
    }), HouseTrip.Views.ShortlistButton = Backbone.View.extend({
        _processing: !1,
        _animationDuration: 1e3,
        initialize: function (e) {
            this.origin = e.origin, this._attachOrigin(), this.model.on("change:favourited", this.render, this)
        },
        render: function () {
            this._toggleActive(), this._isAnimating() || this._setImage(this.model.get("favourited") ? "button_active.png" : "button_inactive.png")
        },
        events: {
            "click .shortlist-button": "_onClick",
            mouseover: "_preloadAnimation"
        },
        _attachOrigin: function () {
            this.$(".shortlist-button").attr("data-shortlist-button-origin", this.origin)
        },
        _onClick: function (e) {
            if (e.preventDefault(), this._processing) return !1;
            if (this._isAnimating()) return !1;
            var t = this._toggleFavourited.bind(this);
            HouseTrip.currentUser.isSignedIn() ? t() : HouseTrip.Events.once("currentUser:signedIn", t)
        },
        _toggleFavourited: function () {
            this._startAnimation(), this._processing = !0, $.ajax({
                url: this._getUrl(),
                type: "PUT",
                dataType: "json",
                context: this,
                data: {
                    responsive: !0,
                    origin: this.origin
                },
                success: this._onToggleFavouritedSuccess,
                complete: this._onToggleFavouritedComplete
            })
        },
        _startAnimation: function () {
            this._toggleClass("animating", !0), setTimeout(function () {
                this._toggleActive(), this._toggleClass("animating", !1)
            }.bind(this), this._animationDuration), this._setImage(this._nextAnimationFilename())
        },
        _preloadAnimation: function () {
            var e = this.$el.data("elementId"),
                t = new Image,
                i = new Image;
            t.src = this._imagePath("button_click_active.gif?uid=" + e), i.src = this._imagePath("button_click_inactive.gif?uid=" + e)
        },
        _onToggleFavouritedSuccess: function (e) {
            this.model.set("favourited", e.favourited), HouseTrip.Events.trigger(this.origin + ":toggleShortlist", this.model.get("favourited"))
        },
        _onToggleFavouritedComplete: function () {
            this._processing = !1
        },
        _getButton: function () {
            return this.$(".shortlist-button")
        },
        _getImage: function () {
            return this.$(".shortlist-button img")
        },
        _nextAnimationFilename: function () {
            var e = this.$el.data("elementId"),
                t = "inactive";
            return this.model.get("favourited") && (t = "active"), "button_click_" + t + ".gif?uid=" + e
        },
        _setImage: function (e) {
            this._getImage().attr("src", this._imagePath(e))
        },
        _imagePath: function (e) {
            return "/images/v4/search/shortlist/" + e
        },
        _toggleClass: function (e, t) {
            this._getButton().toggleClass(e, t)
        },
        _toggleActive: function () {
            this._toggleClass("active", this.model.get("favourited"))
        },
        _isAnimating: function () {
            return this._getButton().hasClass("animating")
        },
        _getUrl: function () {
            return this._getButton().data(this.model.get("favourited") ? "remove-from-favourites-url" : "add-to-favourites-url")
        }
    }), HouseTrip.Views.PPPBooking = Backbone.View.extend({
        initialize: function (e, t) {
            this.reviews = e, this.average_rating = t
        },
        template: function (e) {
            return _.template($("#js-group-review-header").html(), e)
        },
        render: function () {
            return this.reviews.length > 1 && (this.$el.addClass("group-review"), this.$el.append(this.template(this.reviews[0].attributes)), this.renderRating()), _.each(this.reviews, function (e) {
                var t = new HouseTrip.Views.PPPReview({
                    model: e
                });
                this.$el.append(t.render().el)
            }.bind(this)), this
        },
        renderRating: function () {
            for (var e = this.average_rating, t = [], i = 1; 5 >= i; i++) {
                var n = e >= i ? "-full" : "";
                t.push('<span class="glyphicon ht-icon-star' + n + '"></span>')
            }
            this.$(".reviewer-rating").html(t)
        }
    }), HouseTrip.Views.PppRoomGuide = Backbone.View.extend({
        initialize: function (e) {
            this.options = e
        },
        render: function () {
            return this.el ? (Galleria.run(this.el, {
                debug: !1,
                height: 485,
                imageCrop: HouseTrip.isMobile(),
                wait: !0,
                idleTime: 1200,
                dataSource: this.options.galleryData
            }), void Galleria.on("image", this.triggerKmEvent)) : !1
        },
        triggerKmEvent: function () {
            this.hasLoaded ? this.usedOnce || (HouseTrip.Events.trigger("photo:usedCarousel"), this.usedOnce = !0) : this.hasLoaded = !0
        }
    }), HouseTrip.Views.PppDescription = Backbone.View.extend({
        initialize: function (e) {
            this.options = e, this.options.slicePoint = HouseTrip.isMobile() ? 150 : 750, this.truncateDescription(".original-description"), this.$(".translated-description").length && this.translate(".original-description .description-info a")
        },
        events: {
            "click .description-info a": "performTranslation"
        },
        performTranslation: function (e) {
            e.preventDefault(), this.translate(e.target)
        },
        translate: function (e) {
            var t = $(e).attr("href");
            t ? $.getJSON(t, function (t) {
                var i = t.content;
                i && ($(".translated-description").html(i), $(e).removeAttr("href"), this.switchTranslations(), this.truncateDescription(".translated-description"))
            }.bind(this)) : this.switchTranslations()
        },
        switchTranslations: function () {
            this.$(".translated-description-container").toggleClass("hidden"), this.$(".original-description").toggleClass("hidden")
        },
        truncateDescription: function (e) {
            this.$(e).expander({
                slicePoint: this.options.slicePoint,
                expandPrefix: "",
                expandText: this.options.translations.showMore,
                userCollapseText: this.options.translations.showLess,
                expandSpeed: 1e3,
                collapseSpeed: 1e3,
                afterExpand: HouseTrip.Helpers.Stickies.recalculate
            })
        }
    }), HouseTrip.Views.PppMap = Backbone.View.extend({
        render: function () {
            this.map = new GoogleMap({
                el: this.el,
                collection: this.collection,
                centerOn: this.collection.first(),
                mapOptions: {
                    zoom: 14
                }
            })
        }
    }), HouseTrip.Views.PppShow = Backbone.View.extend({
        events: {
            "click [data-target]": "changeTab",
            "mouseenter .ht-host-name-container": "showHostPanel",
            "mouseleave .ht-host-name-container": "hideHostPanel"
        },
        initialize: function (e) {
            var t = $(window);
            this.availabilityRequest = e.availabilityRequest, new HouseTrip.Views.KissMetricsLayer({
                el: this.el
            }), new HouseTrip.Views.PppTabs({
                el: ".ht-ppp",
                kissMetricsProperties: e.kissMetricsProperties
            }), new HouseTrip.Models.KissMetrics.PropertyProfile, HouseTrip.Helpers.KissMetrics.setProperty({
                "Visited Responsive PPP": "Yes"
            }), HouseTrip.Helpers.KissMetrics.setUserProperties(), this._initializeTooltips(), _.bindAll(this, "processCallToAction"), $("#js-banner-image").load(function () {
                this.centerImage()
            }.bind(this)), this.centerImage(), this.shortlistBtn = new HouseTrip.Views.ShortlistButton({
                el: this.el,
                model: this.model,
                origin: "ppp"
            }).render(), this.roomGuide = new HouseTrip.Views.PppRoomGuide({
                el: ".gallery-container",
                galleryData: e.galleryData
            }), this.desktopBookingBar = new HouseTrip.Views.BookingBar({
                el: ".desktop-booking-bar",
                model: this.availabilityRequest.clone()
            }).render(), this.mobileBookingBar = new HouseTrip.Views.MobileBookingBar({
                el: ".ht-mobile-overlay-booking_bar",
                model: this.availabilityRequest,
                translations: e.translations
            }), this.$el.on("shown.bs.tab", function (e) {
                "#room_guide" == $(e.target).data("target") && (this.roomGuide.render(), this.$el.off("shown.bs.tab"))
            }.bind(this)), this.initializePopover(), t.resize(this.centerImage)
        },
        processCallToAction: function (e) {
            this.mobileBookingBar.createAvailabilityRequest(e)
        },
        highlightNav: function (e) {
            this.$(".tab-navigation a, .tab-navigation li").removeClass("active"), this.$(".mobile-navigation a[data-target=" + e.data("target") + "]").addClass("active"), this.$(".desktop-navigation a[data-target=" + e.data("target") + "]").closest("li").addClass("active")
        },
        changeTab: function (e) {
            return $element = $(e.target).closest("a"), HouseTrip.isMobile() && "#overview" !== $element.data("target") ? this.$(".ht-ppp-banner").hide() : this.$(".ht-ppp-banner").show(), $element.tab("show"), this.scrollToTabs(), this.highlightNav($element), setTimeout(function () {
                HouseTrip.Helpers.Stickies.recalculate()
            }, 500), window.attachEvent && !window.addEventListener ? !1 : void 0
        },
        showHostPanel: function (e) {
            HouseTrip.isMobile() || ($(e.target).closest(".ht-host-name-container").popover("show"), $(".popover").on("mouseleave", function () {
                $(e.target).popover("hide"), $(".popover").off("mouseleave")
            }))
        },
        hideHostPanel: function (e) {
            setTimeout(function () {
                $(".popover:hover").length || $(e.target).closest(".ht-host-name-container").popover("hide")
            }, 100)
        },
        centerImage: function () {
            var e = this.$(".banner-container"),
                t = this.$("#js-banner-image").height(),
                i = e.height(),
                n = (i - t) / 2;
            e.find("#js-banner-image").css("margin-top", n)
        },
        scrollToTabs: function () {
            var e;
            e = HouseTrip.isMobile() ? $("#start-tabs").offset().top : $("#start-booking-bar").offset().top, $("html, body").animate({
                scrollTop: e
            }, 500)
        },
        initializePopover: function () {
            $.fn.popover.Constructor.DEFAULTS.content = $(".ht-host-panel-container").html(), $.fn.popover.Constructor.DEFAULTS.html = !0, $.fn.popover.Constructor.DEFAULTS.trigger = "manual", $.fn.popover.Constructor.DEFAULTS.container = "body"
        },
        _initializeTooltips: function () {
            $(".ht-ppp").tooltip({
                selector: "[data-toggle=tooltip]",
                html: !0
            })
        }
    }), HouseTrip.Views.PPPReviews = Backbone.View.extend({
        events: {
            "click .show-reviews": "loadMore",
            "click .untranslated-info .translation-link": "performTranslation",
            "click .translated-info .translation-link": "revertTranslation"
        },
        initialize: function () {
            this.$loadMoreButton = this.$(".show-reviews"), this.$loadMoreButton.length && (this.loadMoreButtonTemplate = _.template(this.$loadMoreButton.data("x-reviews"))), this.collection.on("add", this.addOne, this), this.collection.on("searched", this.updateButtonText, this), this.collection.on("searched", HouseTrip.Helpers.Stickies.recalculate), _.each(this.collection.reviews, function (e) {
                var t = new HouseTrip.Views.PPPReview({
                    el: "#review_" + e.get("id"),
                    model: e
                });
                t.render()
            }.bind(this)), this.updateButtonText(), this.performTranslation()
        },
        addOne: function (e) {
            var t = [];
            _.each(e.get("reviews"), function (e) {
                var i = new HouseTrip.Models.Review(e);
                this.collection.reviews.push(i), t.push(i)
            }.bind(this));
            var i = new HouseTrip.Views.PPPBooking(t, e.get("average_rating"));
            this.$(".review-list").append(i.render().el)
        },
        loadMore: function (e) {
            e.preventDefault(), this.collection.search()
        },
        updateButtonText: function () {
            var e = this.collection.totalBookings - this.collection.length;
            0 >= e ? this.$(".show-more-reviews").fadeOut(function () {
                $(this).remove()
            }) : 1 === e ? this.$loadMoreButton.text(this.$loadMoreButton.data("last-review")) : e > 0 && 5 > e && this.$loadMoreButton.text(this.loadMoreButtonTemplate({
                count: e
            }))
        },
        performTranslation: function () {
            return this.collection.translate(), this.switchLabel(), !1
        },
        revertTranslation: function () {
            return this.collection.revert(), this.switchLabel(), !1
        },
        switchLabel: function () {
            this.$(".untranslated-info").toggleClass("hidden"), this.$(".translated-info").toggleClass("hidden")
        }
    }), HouseTrip.Views.PPPReview = Backbone.View.extend({
        className: "review",
        events: {
            "click .delete": "destroyModel",
            "click .edit": "editReview",
            "submit .edit-review": "updateModel",
            "click .cancel": "showReview"
        },
        template: function (e) {
            return _.template($("#js-review-container").html(), e)
        },
        showTemplate: function (e) {
            return _.template($("#js-review-show").html(), e)
        },
        editTemplate: function (e) {
            return _.template($("#js-review-edit").html(), e)
        },
        initialize: function () {
            this.model.on("sync", this.showReview, this), this.model.on("updated", this.showReview, this), this.model.reviewReply.on("change:body", this.render, this)
        },
        render: function () {
            var e = this.model.attributes;
            return e.host_response = this.model.reviewReply.attributes, this.$el.html(this.template(e)), this.$(".review-main").html(this.showTemplate(e)), this.renderRating(), this.model.reviewReply.set("commentable", this.model.get("commentable")), new HouseTrip.Views.ReviewReply({
                el: this.$el.find(".js-reply"),
                model: this.model.reviewReply
            }).render(), this
        },
        renderRating: function () {
            for (var e = this.model.get("rating"), t = [], i = 1; 5 >= i; i++) {
                var n = e >= i ? "-full" : "";
                t.push('<span class="glyphicon ht-icon-star' + n + '"></span>')
            }
            this.$(".reviewer-rating").html(t)
        },
        destroyModel: function () {
            confirm(HouseTrip.Helpers.Translator.translations.confirm_review_deletion) && this.model.destroy({
                success: function () {
                    this.$el.fadeOut(400, function () {
                        this.remove()
                    }.bind(this))
                }.bind(this)
            })
        },
        editReview: function () {
            var e = this.model.attributes;
            e.body = this.model.get("originalBody") || this.model.get("body"), this.$(".review-main").fadeOut(function () {
                this.$(".review-main").html(this.editTemplate(e)), this.$(".new-rating").rating()
            }.bind(this)).fadeIn()
        },
        showReview: function () {
            this.$(".review-main").fadeOut(function () {
                this.$(".review-main").html(this.showTemplate(this.model.attributes)), this.renderRating()
            }.bind(this)).fadeIn()
        },
        updateModel: function (e) {
            e.preventDefault(), this.$("input").attr("disabled", !0);
            var t = this.$(".new-body").val(),
                i = this.$(".new-rating").val();
            this.model.save({
                body: t,
                rating: i
            }, {
                success: function () {
                    this.model.set({
                        originalBody: t,
                        body: t
                    })
                }.bind(this),
                error: function () {
                    this.$("input").attr("disabled", !1)
                }
            })
        }
    }), HouseTrip.Views.ReviewReply = Backbone.View.extend({
        events: {
            "submit .new-host-reply": "save",
            "click .show-form": "showForm",
            "click .cancel-reply": "showReply",
            "click .delete-reply": "destroy"
        },
        formTemplate: function (e) {
            return _.template($("#js-review-reply-form").text(), e)
        },
        showTemplate: function (e) {
            return _.template($("#js-review-reply-show").text(), e)
        },
        initialize: function () {
            this.listenTo(this.model, "change", this.render, this), this.listenTo(this.model, "destroy", this.remove, this)
        },
        showForm: function (e) {
            e.preventDefault(), this.$el.html(this.formTemplate(this.model.attributes))
        },
        render: function () {
            return this.$el.html(this.showTemplate(this.model.attributes)), this
        },
        showReply: function (e) {
            e.preventDefault(), this.$el.html(this.showTemplate(this.model.attributes))
        },
        save: function (e) {
            e.preventDefault();
            var t = this.$("textarea[name=body]").val();
            "" != t && (this.$("input").attr("disabled", !0), this.model.save({
                body: t
            }, {
                wait: !0,
                error: function () {
                    this.$("input").attr("disabled", !1)
                }
            }))
        },
        destroy: function (e) {
            e.preventDefault(), confirm(HouseTrip.Helpers.Translator.translations.confirm_comment_deletion) && this.model.destroy({
                wait: !0
            })
        }
    }), HouseTrip.Views.PppTabs = Backbone.View.extend({
        events: {
            "click .tab-navigation a, click .mobile-nav a": "_switchTab"
        },
        initialize: function (e) {
            this.options = e
        },
        _switchTab: function (e) {
            var t = $(e.target).closest("[data-tab-name]").data("tab-name");
            HouseTrip.Events.trigger("ppp:tabSwitch", {
                tabName: t,
                kissMetricsProperties: this.options.kissMetricsProperties
            })
        }
    }), HouseTrip.Views.SearchProperty = Backbone.View.extend({
        defaults: {
            processing: !1
        },
        events: function () {
            var e = {
                "click .image-container": "_openPropertyPage"
            };
            return HouseTrip.isTouchEnabled ? _.extend(e, {
                click: "toggleHighlighted"
            }) : _.extend(e, {
                mouseover: "mouseover",
                mouseleave: "mouseleave"
            }), e
        },
        initialize: function () {
            this.model.set("url", this.$(".link-to-property-profile").attr("href")), this.model.on("change:highlighted", $.proxy(this.highlighted, this)), this.shortlistBtn = new HouseTrip.Views.ShortlistButton({
                el: this.el,
                origin: "search",
                model: this.model
            })
        },
        render: function () {
            return new HouseTrip.Views.PhotoCarousel({
                el: this.$(".photo-carousel"),
                collection: new HouseTrip.Collections.Photos([], {
                    property: this.model
                })
            }).render(), this.shortlistBtn.render(), this.enableTooltips(), this
        },
        mouseover: function () {
            this.model.set("highlighted", !0)
        },
        mouseleave: function () {
            this.model.set("highlighted", !1)
        },
        toggleHighlighted: function () {
            this.model.set("highlighted", !this.model.get("highlighted"))
        },
        highlighted: function () {
            this.$el.toggleClass("highlighted", this.model.get("highlighted"))
        },
        enableTooltips: function () {
            this.$(".ht-property-type-tooltip-container").tooltip({
                container: ".ht-search"
            }), this.$('[data-toggle="tooltip"]').tooltip({
                html: !0
            })
        },
        _openPropertyPage: function () {
            return HouseTrip.isMobile() ? window.location = this.model.get("url") : window.open(this.model.get("url"), "_blank"), !1
        }
    }), HouseTrip.Views.SearchList = Backbone.View.extend({
        initialize: function () {
            this.collection.on("focused", this.scrollToElement.bind(this)), HouseTrip.Events.on("search:done", function (e) {
                this.render(e.searchResults)
            }.bind(this)), this._modelViews = []
        },
        render: function (e) {
            return e && this.$el.html(e), _(this._modelViews).each(function (e) {
                e.remove()
            }), this.collection.each(this._initModelView.bind(this)), this.scrollTo(0), this
        },
        scrollToElement: function (e) {
            var t = this.$el.parent().offset().top;
            t -= $(".ht-header").outerHeight(), t -= Number($(".admin-nav").outerHeight());
            var i = this.$(this._modelSelector(e)),
                n = this.$(".search-result").last().offset().top - $(window).height() + this.$(".search-result").height(),
                r = i.offset().top - t - 10;
            this.scrollTo(Math.min(r, n))
        },
        scrollTo: function (e) {
            $("html, body").animate({
                scrollTop: e
            })
        },
        _initModelView: function (e) {
            this._modelViews.push(new HouseTrip.Views.SearchProperty({
                model: e,
                el: this._modelSelector(e)
            }).render())
        },
        _modelSelector: function (e) {
            return ".search-result[data-element-id=" + e.id + "]"
        }
    }), HouseTrip.Views.SearchMap = Backbone.View.extend({
        defaults: {
            collection: []
        },
        INNER_BOUNDS_OFFSET: .03,
        initialize: function (e) {
            this.$topBound = $(e.topBound), this.$window = $(window), this.minZoom = 9, this.$window.resize(this.resize.bind(this)), HouseTrip.Events.on("search:done", function () {
                this.$el.trigger("sticky_kit:recalc")
            }, this)
        },
        render: function () {
            return this.resize(), HouseTrip.Helpers.Stickies.register(this.$el, {
                offset_top: this.$topBound.outerHeight()
            }), this.map = new GoogleMap({
                el: this.$(".search-results-map").get(0),
                collection: this.collection
            }), this._setupMapEvents(), this._setupSearchThisAreaControl(), this
        },
        all: function (e) {
            return void 0 === e ? this.collection : this.collection.filter(function (t) {
                return t instanceof e
            })
        },
        resize: function () {
            var e = this.$window.height() - this.$topBound.outerHeight(),
                t = this.$el.parent().width() - this.$el.siblings().outerWidth();
            this.$el.css({
                height: e,
                width: t
            })
        },
        updateSearch: function () {
            var e = this.map.innerBounds(this.INNER_BOUNDS_OFFSET),
                t = [e.sw.lat, e.sw.lng, e.ne.lat, e.ne.lng];
            this.model.set("mapBounds", t), this.model.search(), this._disableSearchThisAreaControl()
        },
        _setupMapEvents: function () {
            var e = this.map.map,
                t = google.maps.event;
            t.addListenerOnce(e, "idle", function () {
                var i = $(".map-control-zoom-out").get(0),
                    n = $(".map-control-zoom-in").get(0),
                    r = $(".map-control-search-this-area").get(0);
                t.addDomListener(n, "click", function () {
                    HouseTrip.Events.trigger("map:zoomed", {
                        zoomType: "in"
                    })
                }), t.addDomListener(i, "click", function () {
                    HouseTrip.Events.trigger("map:zoomed", {
                        zoomType: "out"
                    })
                }), t.addDomListener(e, "dblclick", function () {
                    HouseTrip.Events.trigger("map:zoomed", {
                        zoomType: "dblclick"
                    })
                }), t.addDomListener(r, "click", function () {
                    HouseTrip.Events.trigger("map:searchThisArea")
                }), t.addListener(e, "dragend", function () {
                    HouseTrip.Events.trigger("map:panned")
                }), t.addListener(e, "maptypeid_changed", function () {
                    var t = e.getMapTypeId();
                    HouseTrip.Events.trigger("map:switchedType", {
                        mapType: t
                    })
                })
            })
        },
        _setupSearchThisAreaControl: function () {
            var e = this.map.getControlsContainer();
            this.searchThisAreaControl = e.find(".map-control-search-this-area"), this.map.addControl(this.searchThisAreaControl, this.updateSearch.bind(this)), this._disableSearchThisAreaControl(), HouseTrip.Events.on("map:zoomed", this._updateSearchThisAreaControl, this), HouseTrip.Events.on("map:panned", this._updateSearchThisAreaControl, this)
        },
        _searchThisAreaAvailable: function () {
            return this.map.getZoom() >= this.minZoom
        },
        _updateSearchThisAreaControl: function () {
            this._searchThisAreaAvailable() ? this._enableSearchThisAreaControl() : this._disableSearchThisAreaControl()
        },
        _enableSearchThisAreaControl: function () {
            this.searchThisAreaControl.removeClass("is-disabled")
        },
        _disableSearchThisAreaControl: function () {
            this.searchThisAreaControl.addClass("is-disabled")
        }
    }), HouseTrip.Views.SearchIndex = Backbone.View.extend({
        initialize: function (e) {
            this.properties = new HouseTrip.Collections.Properties(e.properties), HouseTrip.Events.on("search:done", this._onSearchDone, this), new HouseTrip.Models.KissMetrics.Search({
                initialEvents: e.kissMetricsEvents
            }), new HouseTrip.Models.GoogleTagManager({
                initialEvents: e.googleTagManagerEvents
            }), this.shortlist = e.shortlist
        },
        events: {
            "click .search-result a.link-to-property-profile": "_onClickPropertyLink"
        },
        render: function () {
            return new HouseTrip.Views.SearchList({
                el: this.$(".search-results"),
                collection: this.properties,
                model: this.model
            }).render(), this.shortlist || new HouseTrip.Views.SearchForm({
                el: this.$(".ht-search-form"),
                model: this.model
            }).render(), new HouseTrip.Views.SearchMobileForm({
                el: ".ht-mobile-search-form",
                model: this.model
            }).render(), new HouseTrip.Views.SearchMobileBar({
                el: ".ht-mobile-search-bar",
                model: this.model
            }).render(), new HouseTrip.Views.SearchSitemap({
                el: ".sitemap",
                model: this.model
            }).render(), new HouseTrip.Views.Pagination({
                el: ".ht-pagination-wrapper",
                model: this.model
            }).render(), this._setupPushState(), this
        },
        _setupPushState: function () {
            history.pushState && (this.pushState = new HouseTrip.Helpers.SearchPushState(this.model), this._restoreShortlistedProperties(history.state), HouseTrip.Events.on("search:toggleShortlist", this._pushShortlistedProperties, this))
        },
        mapsLoaded: function () {
            HouseTrip.searchMapView = new HouseTrip.Views.SearchMap({
                el: ".map-wrapper",
                collection: this.properties,
                model: this.model,
                topBound: ".ht-search-form"
            }).render()
        },
        _onSearchDone: function (e) {
            this.properties.set(e.properties), this.properties.trigger("updated"), HouseTrip.head.render({
                title: e.searchParams.search_title
            })
        },
        _onClickPropertyLink: function () {
            HouseTrip.Events.trigger("search:followPropertyLink")
        },
        _restoreShortlistedProperties: function (e) {
            e && e.shortlisted && this.properties.each(function (t) {
                var i = _.contains(e.shortlisted, t.get("id"));
                t.set("favourited", i)
            })
        },
        _pushShortlistedProperties: function () {
            this.pushState.setData({
                shortlisted: this._getShortlistedPropertyIds()
            })
        },
        _getShortlistedPropertyIds: function () {
            return this.properties.filter(function (e) {
                return e.get("favourited")
            }).map(function (e) {
                return e.get("id")
            })
        }
    }), HouseTrip.Views.SearchForm = Backbone.View.extend({
        events: {
            submit: "submit"
        },
        initialize: function () {
            this._updatePropertySearch(), this.searchBar = new HouseTrip.Views.SearchBar({
                el: "[data-type=search-form]",
                model: this.model,
                visibleCalendar: !0
            }), this.filtersCollection = this.model.get("filters"), this.filters = HouseTrip.Views.SearchFilterFactory.createFilters(this.$(".ht-filter-menu"), this.filtersCollection), this.orderByMenu = new HouseTrip.Views.SearchOrderBy({
                el: $(".ht-search-order-by"),
                model: this.model
            }), this.backgroundImage = new HouseTrip.Views.SearchFormBackgroundImage({
                el: this.$(".ht-search-bar img"),
                model: this.model
            }), this.resetButton = new HouseTrip.Views.SearchResetFilters({
                el: this.$(".reset"),
                filtersCollection: this.filtersCollection
            }), this.filtersCollection.on("submit", this.submit, this), this.filtersCollection.on("updateTotalResults", this._updateTotalResults, this), this._updateTotalResults()
        },
        render: function () {
            HouseTrip.Helpers.Stickies.register(this.$el), this.searchBar.render(), _.each(this.filters, function (e) {
                e.render()
            }), this.orderByMenu.render(), this.backgroundImage.render(), this.resetButton.render()
        },
        submit: function () {
            return this.model.prepare(), this._updatePropertySearch(), this.model.search(), !1
        },
        _updateTotalResults: function () {
            this.model.prepare(), this._updatePropertySearch(), this.model.fetchTotalResults()
        },
        _updatePropertySearch: function () {
            this.model.set("formParams", this.$el.serializeArray(), {
                silent: !0
            })
        }
    }), HouseTrip.Views.SearchFormBackgroundImage = Backbone.View.extend({
        initialize: function () {
            this.model.on("change:background_image", this.render, this)
        },
        render: function () {
            var e = this.$el.attr("src"),
                t = this.model.get("background_image");
            e !== t && this.$el.attr("src", t)
        }
    }), HouseTrip.Views.SearchFilterBase = Backbone.View.extend({
        initialize: function (e) {
            this.collection = e.collection, this.model.on("change:filterValues", this._onFilterValueChange, this), this.model.on("change:json", this.render, this), this._bindEvents()
        },
        _bindEvents: function () {},
        events: {
            "click ul[role=menu]": "_onPanelClick"
        },
        _closingElementClasses: ["ht-icon-remove", "update-search-results"],
        template: _.template('         <a href="#" data-toggle="dropdown">           {{= filter.headline }}          <span class="caret"></span>         </a>         <ul role="menu">           <li class="arrow"></li>           {{ if (filter.explanation) { }}           <li class="explanation">             {{= filter.explanation }}           </li>           {{ } }}           <span class="ht-icon-remove"></span>           {{= filter.options_html }}         </ul>   '),
        render: function () {
            return this.$el.html(this.template({
                filter: this.model.get("json")
            })), this._centerMenuArrow(), this
        },
        _afterChanged: function (e) {
            HouseTrip.Helpers.Filters.triggerEvent("search:filterChange", e)
        },
        _onFilterValueChange: function () {},
        _centerMenuArrow: function () {
            var e = this.$("[role=menu]"),
                t = this.$el.parent().offset().left,
                i = this.$el.offset().left;
            e.css({
                left: -1 * (i - t)
            });
            var n = this.$("li.arrow"),
                r = this.$el.width() / 2;
            r += this.$el.position().left, r -= Math.abs(n.width() / 2), n.css("left", r)
        },
        _onPanelClick: function (e) {
            this.$(e.target);
            this._shouldClosePanel(e) || e.stopPropagation()
        },
        _shouldClosePanel: function (e) {
            var t = this.$(e.target);
            if (this.$el.hasClass("open") && t.length > 0) {
                var i = _.any(this._closingElementClasses, function (e) {
                    return t.hasClass(e)
                });
                return i
            }
            return !0
        }
    }), HouseTrip.Views.SearchFilterFactory = {
        classes: {
            "HouseTrip.Views.SearchSelectableFilter": ["price_filters", "filters", "type_filters", "number_of_bedrooms"]
        },
        create: function (e, t) {
            var i = $(e).attr("id");
            if (i) {
                var n = HouseTrip.Helpers.Search.Filters.getBackendNameFor(i),
                    r = this._getClass(n);
                return new r({
                    el: e,
                    collection: t,
                    model: t.getFilter(n)
                })
            }
        },
        createFilters: function (e, t) {
            var i = [];
            return _.each(e, function (e) {
                var n = this.create(e, t);
                n && i.push(n)
            }.bind(this)), i
        },
        _getClass: function (name) {
            var result;
            return _.each(_.keys(this.classes), function (e) {
                _.contains(this.classes[e], name) && (result = e)
            }.bind(this)), eval(result)
        }
    }, HouseTrip.Views.SearchSelectableFilter = HouseTrip.Views.SearchFilterBase.extend({
        _bindEvents: function () {
            this.$el.on("click", "label", this._onClickLabel.bind(this))
        },
        _onClickLabel: function (e) {
            var t = $(e.target).closest("label"),
                i = t.data("value");
            this.model.selectValue(i), this.collection.submit(), this._afterChanged(e)
        },
        _onFilterValueChange: function () {
            this.$el.find("label").removeClass("checked"), _.each(this.model.get("filterValues"), function (e) {
                this.$el.find("label[data-value=" + e + "]").addClass("checked")
            }.bind(this))
        }
    }), HouseTrip.Views.SearchMobileBar = Backbone.View.extend({
        initialize: function () {
            this.$sorter = this.$(".ht-mobile-search-bar-sorter"), this.$orderSelect = this.$sorter.find("select"), this.$pagination = this.$(".ht-mobile-search-bar-pagination"), this.currentOrder = this._getOrder(), HouseTrip.Events.on("search:done", function (e) {
                this.render(e.mobilePagination)
            }.bind(this))
        },
        events: {
            "focus select": "_onFocus",
            "change select": "_onChange",
            "blur select": "_onBlur"
        },
        render: function (e) {
            e && this.$pagination.text(e), this._applyStickyness()
        },
        _onFocus: function () {
            if (HouseTrip.Lib.MobileCompatibility.isMobileSafariBrowser()) {
                var e = this.$el.offset().top;
                e += this.$el.height(), e += $("body").scrollTop(), e = -1 * e, this.$el.css("top", e)
            }
        },
        _onChange: function () {
            this._getOrder() !== this.currentOrder && (this.currentOrder = this._getOrder(), this.model.set("order", this.currentOrder), this.model.search())
        },
        _onBlur: function () {
            HouseTrip.Lib.MobileCompatibility.isMobileSafariBrowser() && this.$el.css("top", 0), this._onChange()
        },
        _getOrder: function () {
            return this.$orderSelect.val()
        },
        _applyStickyness: function () {
            HouseTrip.Helpers.Stickies.register(this.$el)
        }
    }), HouseTrip.Views.SearchOrderBy = Backbone.View.extend({
        initialize: function () {
            HouseTrip.Events.on("search:done", this._onSearchDone, this)
        },
        events: {
            "change input": "onChange"
        },
        setNewLabel: function (e) {
            this.$el.find(".description").text(e)
        },
        onChange: function (e) {
            var t = $(e.target),
                i = t.is(":checked"),
                n = $(e.target).attr("id"),
                r = $("label[for=" + n + "]").text();
            return this.setNewLabel(r), this.model.set("order", t.val()), this.model.search(), this.$el.find("input").siblings("label").removeClass("checked"), t.siblings("label").toggleClass("checked", i), !0
        },
        _onSearchDone: function () {
            this.setElement($(".ht-search-order-by"))
        }
    }), HouseTrip.Views.SearchSitemap = Backbone.View.extend({
        initialize: function () {
            this.model.on("search", function (e) {
                this.render(e.searchSitemap)
            }.bind(this))
        },
        render: function (e) {
            return e && this.$el.html(e), this
        }
    }), HouseTrip.Views.Pagination = Backbone.View.extend({
        initialize: function () {
            HouseTrip.Events.on("search:done", this._onSearchDone, this)
        },
        events: {
            "change select": "_onSelect",
            "click a": "_onClickPagination"
        },
        _onSearchDone: function () {
            this.setElement($(".ht-pagination-wrapper"))
        },
        _onSelect: function (e) {
            var t = $(e.target).find(":selected"),
                i = t.val();
            this._sendKMEvent("search:paginate", i, "Pagination dropdown"), this._updateSearchResults(i)
        },
        _onClickPagination: function (e) {
            e.preventDefault();
            var t = $(e.target).closest("a"),
                i = t.attr("href");
            this._sendKMEvent("search:paginate", i, t.find(".mobile-next-prev").text()), this._updateSearchResults(i)
        },
        _updateSearchResults: function (e) {
            var t = this._getPageFromUrl(e),
                i = _.clone(this.model.params());
            i.page = t, this.model.search(i)
        },
        _sendKMEvent: function (e, t, i) {
            var n = this._getPageFromUrl(t);
            HouseTrip.Events.trigger("search:paginate", {
                page: n,
                text: i
            })
        },
        _getPageFromUrl: function (e) {
            var t = $.uri(e);
            return t.at("query").page
        }
    }), HouseTrip.Views.SearchResetFilters = Backbone.View.extend({
        initialize: function (e) {
            this.filtersCollection = e.filtersCollection, this.filtersCollection.on("change:filterValues", this.render, this)
        },
        events: {
            click: "_onClick"
        },
        render: function () {
            return this.$el.toggleClass("disabled", this.filtersCollection.isReset()), this
        },
        _onClick: function (e) {
            e.stopPropagation(), this.$el.hasClass("disabled") || (this.filtersCollection.resetFilters(), this.filtersCollection.submit())
        }
    }), HouseTrip.Views.PropertiesDashboardIndex = Backbone.View.extend({
        initialize: function (e) {
            this.propertyBar = new HouseTrip.Views.PropertiesDashboardPropertyBar({
                el: this.el,
                dashboard: this
            }), e.showTour && this._showTour()
        },
        events: {
            "click .ht-pagination a": "_onClickPaging",
            "click a[data-open-tab]": "_onClickOpenTab"
        },
        render: function () {
            return this.propertyBar.render(), this.bindTooltips(), history && history.pushState && $(".ht-pagination").length > 0 && (this.pushHistory($(".ht-pagination").data("page-url"), !1), window.addEventListener("popstate", this._historyPop.bind(window))), this
        },
        _historyPop: function (e) {
            return e.state && e.state.url ? (HouseTrip.propertiesDashboard._loadProperties(e.state.url, !0), e.preventDefault(), !1) : void 0
        },
        _onClickPaging: function (e) {
            var t = $(e.currentTarget);
            if (!t.closest("li").hasClass("disabled")) {
                var i = t.attr("href");
                this._loadProperties(i)
            }
            return e.preventDefault(), !1
        },
        _loadProperties: function (e, t) {
            var i = $(".ht-loading-wrapper");
            this.closeDropDowns(), $("html body").animate({
                scrollTop: $(".account-navigation").offset().top
            }, {
                duration: 250,
                specialEasing: "easeOutExpo",
                complete: function () {
                    HouseTrip.propertiesDashboard.toggleElementLoading(i)
                }
            }), $.ajax({
                url: e,
                dataType: "html",
                cache: !1,
                context: this,
                success: function (n) {
                    this.toggleElementLoading(i), this.$el.html(n), this.delegateEvents(), history && history.pushState && this.pushHistory(e, t)
                }
            })
        },
        _onClickOpenTab: function (e) {
            var t = $(e.currentTarget);
            return t.closest(".tabs").find(".tab." + t.data("open-tab")).click(), e.preventDefault(), !1
        },
        bindTooltips: function () {
            this.$el.tooltip({
                selector: "[data-toggle=tooltip]"
            })
        },
        closeDropDowns: function () {
            this.$(".btn-group.open").removeClass("open")
        },
        toggleElementLoading: function (e) {
            e.find(".ht-loading-indicator").toggleClass("is-loading")
        },
        pushHistory: function (e, t) {
            var i = e.match(/page=(\d*)/);
            if (i) {
                i = parseInt(i[1]);
                var n = navigator.userAgent.indexOf("MSIE") > -1,
                    r = i > 1 || n ? "?page=" + i : "";
                t ? history.replaceState({
                    url: e
                }, null, r) : history.pushState({
                    url: e
                }, null, r)
            }
        },
        _showTour: function () {
            $("#tourModal").modal({
                show: !0
            }), $(".ht-main").blurjs({
                radius: 10,
                persist: !1
            })
        }
    }), HouseTrip.Views.PropertiesDashboardSearchBar = Backbone.View.extend({
        initialize: function (e) {
            this.dashboard = e.dashboard, this.inputField = this.$(".property-search-bar"), this.clearIcon = this.$(".property-clear-icon")
        },
        events: {
            "keypress .property-search-bar": "_keyPress",
            "keyup    .property-search-bar": "_keyUp",
            "click    .property-clear-icon": "_clearFilter"
        },
        render: function () {
            var e = this;
            $(".host-dashboard").on("click", ".property-clear-link", function (t) {
                e._clearFilter(t)
            })
        },
        _keyPress: function (e) {
            return 0 === e.which || 13 === e.keyCode ? !1 : (this.clearIcon.show(), void this.setSearch())
        },
        _keyUp: function (e) {
            8 === e.keyCode && (0 == this.inputField.val().length && this.clearIcon.hide(), this.setSearch())
        },
        _clearFilter: function (e) {
            return this.inputField.val(""), this.filterProperties(), this.clearIcon.hide(), e.preventDefault(), !1
        },
        setSearch: function () {
            var e = this;
            e.timer && clearTimeout(e.timer), e.timer = setTimeout(function () {
                e.filterProperties(), e.timer = null
            }, 500)
        },
        filterProperties: function () {
            this.dashboard._loadProperties(this.$el.attr("action") + "?search=" + this.inputField.val(), !1)
        }
    }), HouseTrip.Views.PropertiesDashboardPropertyBar = Backbone.View.extend({
        initialize: function (e) {
            this.dashboard = e.dashboard
        },
        events: {
            "click .tab[data-pane]": "_onClickTab",
            "click a[data-publish]": "_onClickPublish"
        },
        render: function () {
            return this
        },
        _onClickTab: function (e) {
            var t = $("body").hasClass("content-loading");
            if (!t) {
                var i = this.$(e.currentTarget),
                    n = i.closest(".tabs"),
                    r = i.data("pane"),
                    s = i.hasClass("selected");
                if (this.currentPane && s && n.hasClass("open")) return void this.closeSelectedPane();
                this.closeSelectedPane(), i.addClass("selected");
                var o = $('<div class="clearfix pane ' + r + '">').appendTo(n);
                this.currentPane = this.newPane(r, o, i), this.currentPane.render()
            }
        },
        _onClickPublish: function (e) {
            return this.togglePublish($(e.currentTarget)), e.preventDefault(), !1
        },
        newPane: function (e, t, i) {
            var n = this._paneViewForName(e);
            return new n({
                el: t,
                paneName: e,
                propertyBar: i.closest(".property"),
                dashboard: this.dashboard
            })
        },
        _paneViewForName: function (e) {
            switch (e) {
            case "actions":
                return HouseTrip.Views.PropertiesDashboardActionsPane;
            case "ranking":
                return HouseTrip.Views.PropertiesDashboardRankingPane;
            case "reviews":
                return HouseTrip.Views.PropertiesDashboardReviewsPane;
            default:
                return HouseTrip.Views.PropertiesDashboardPane
            }
        },
        setDefaultPane: function (e) {
            this.currentPane = this.newPane(e, $(".pane"), $(".tab.selected")), this.currentPane.delegateEvents(), "ranking" == e && google.setOnLoadCallback(this.currentPane.loadComplete($(".pane")))
        },
        closeSelectedPane: function () {
            this.currentPane && this.currentPane.remove(), this.$(".tabs.open").removeClass("open"), this.$(".tab.selected").removeClass("selected")
        },
        togglePublish: function (e) {
            this.dashboard.closeDropDowns();
            var t = e.closest(".property"),
                i = t.find(".load_msg");
            t.addClass("loading"), this.dashboard.toggleElementLoading(i), this.closeSelectedPane(), $.ajax({
                url: e.attr("href"),
                dataType: "json",
                type: "PUT",
                context: this,
                data: {
                    property: {
                        published: e.data("publish")
                    }
                },
                success: function (e) {
                    t.replaceWith(e.content), this.delegateEvents()
                },
                error: function (e) {
                    var n = e.responseJSON;
                    this.dashboard.toggleElementLoading(i), this.showError(t, i, n.message)
                }
            })
        },
        showError: function (e, t, i) {
            if (i) {
                t.addClass("error");
                var n = $("<p>").html(i.replace(/\n/g, "<br />")).appendTo(t);
                n.delay(6e3).fadeOut("fast", function () {
                    t.removeClass("error"), e.removeClass("loading"), n.remove()
                })
            }
        }
    }), HouseTrip.Views.PropertiesDashboardPane = Backbone.View.extend({
        initialize: function (e) {
            this.propertyBar = e.propertyBar, this.dashboard = e.dashboard, this.tabs = this.propertyBar.find(".tabs");
            var t = this.propertyBar.data("property-id");
            this.url = window.location.pathname + "/" + t + "/panes/" + e.paneName
        },
        render: function () {
            return this.loadPane(this.url), this
        },
        loadPane: function (e) {
            var t = $.ajax({
                url: e,
                dataType: "html",
                cache: !1,
                context: this,
                success: function (e) {
                    this.$el.html(e), this.delegateEvents(), this.tabs.addClass("open"), this.loadComplete()
                }
            });
            HouseTrip.Helpers.showWaitCursor(t)
        },
        loadComplete: function () {}
    }), HouseTrip.Views.PropertiesDashboardActionsPane = HouseTrip.Views.PropertiesDashboardPane.extend({
        events: {
            "click .btn.act": "_onClickAccept"
        },
        _onClickAccept: function (e) {
            var t = this.$(e.currentTarget);
            t.addClass("disabled");
            var i = $.ajax({
                type: "POST",
                url: t.attr("href"),
                dataType: "json",
                context: this,
                success: function (e) {
                    var i = t.closest("li"),
                        n = "success" == e.status ? "success" : "error";
                    t.replaceWith('<span class="' + n + '">' + e.message + "</span>"), setTimeout(function () {
                        this.refreshActionsPane(t, i)
                    }.bind(this), 2500)
                },
                error: function (e) {
                    var i = e.responseJSON;
                    i.message ? t.replaceWith('<span class="error">' + i.message + "</span>") : t.removeClass("disabled")
                }
            });
            return HouseTrip.Helpers.showWaitCursor(i), e.preventDefault(), !1
        },
        refreshActionsPane: function (e, t) {
            var i = t.closest(".actionable-items-list"),
                n = this.propertyBar.find("." + i.data("type")),
                r = parseInt(n.text()),
                s = t;
            r--, r > 0 ? n.text(r) : (s = i, this.refreshActionsTab(n, this.propertyBar)), s.slideUp("slow", function () {
                if (r >= 5) {
                    var e = t.closest("ul");
                    s.remove(), e.children(":hidden").first().slideDown("slow")
                }
            })
        },
        refreshActionsTab: function (e) {
            if (this.propertyBar.find(".action-count-row:visible").length > 1) e.closest("div.action-count-row").hide();
            else {
                var t = e.closest(".tab.actions");
                t.children(".content").hide(), t.children(".action-stats").removeClass("hidden"), this.render()
            }
        }
    }), HouseTrip.Views.PropertiesDashboardRankingPane = HouseTrip.Views.PropertiesDashboardPane.extend({
        loadComplete: function () {
            var e = this.$el.find(".chart");
            if ("undefined" != typeof google && google && e.length > 0) {
                var t = this.chartDataTable(e);
                t && new google.visualization.LineChart(e[0]).draw(t, this.chartOptions())
            }
        },
        chartDataTable: function (e) {
            var t = e.data("chart-data");
            if (t) {
                var i = new google.visualization.DataTable;
                return i.addColumn("date", e.data("chart-x-title")), i.addColumn("number", e.data("chart-y-title")), $.each(t, function (e, t) {
                    i.addRow([new Date(t[0]), t[1]])
                }), i
            }
        },
        chartOptions: function () {
            return {
                areaOpacity: .2,
                pointSize: 3,
                colors: ["#32b7c5"],
                chartArea: {
                    top: 10,
                    width: "80%",
                    height: "85%"
                },
                legend: {
                    position: "none"
                },
                hAxis: {
                    gridlines: !0,
                    viewWindowMode: "pretty",
                    format: "MMM d"
                },
                vAxis: {
                    direction: -1,
                    gridlines: {
                        color: "#FFF"
                    },
                    minValue: 1,
                    viewWindow: {
                        min: 1
                    }
                },
                legend: {
                    position: "none"
                }
            }
        }
    }), HouseTrip.Views.PropertiesDashboardReviewsPane = HouseTrip.Views.PropertiesDashboardPane.extend({}), HouseTrip.Lib.MobileCompatibility = {
        userAgent: function () {
            return navigator.userAgent
        },
        click: function () {
            return /(iPhone|iPod|iPad).*AppleWebKit/i.test(HouseTrip.Lib.MobileCompatibility.userAgent()) ? "touchend" : "click"
        },
        isAndroidChromeBrowser: function () {
            return /Android.*Chrome/i.test(HouseTrip.Lib.MobileCompatibility.userAgent())
        },
        isLinuxChromeBrowser: function () {
            return /X11.*Chrome/i.test(HouseTrip.Lib.MobileCompatibility.userAgent())
        },
        isMobileSafariBrowser: function () {
            return /(iPhone|iPod|iPad).*AppleWebKit/i.test(HouseTrip.Lib.MobileCompatibility.userAgent())
        },
        isIPad: function () {
            return /(iPad).*AppleWebKit/i.test(HouseTrip.Lib.MobileCompatibility.userAgent())
        },
        isDesktopSafariBrowser: function () {
            return /Safari\/\d{3}/.test(HouseTrip.Lib.MobileCompatibility.userAgent()) && !/Chrom/.test(HouseTrip.Lib.MobileCompatibility.userAgent()) && !HouseTrip.Lib.MobileCompatibility.isMobileSafariBrowser()
        },
        isSafariBrowser: function () {
            return HouseTrip.Lib.MobileCompatibility.isDesktopSafariBrowser() || HouseTrip.Lib.MobileCompatibility.isMobileSafariBrowser()
        },
        isBlurFilterCompatibleDevice: function () {
            return !HouseTrip.Lib.MobileCompatibility.isLinuxChromeBrowser() && !HouseTrip.Lib.MobileCompatibility.isAndroidChromeBrowser()
        },
        isAndroid: function () {
            return /Android/i.test(HouseTrip.Lib.MobileCompatibility.userAgent())
        },
        isPortraitMode: function () {
            return 90 != Math.abs(window.orientation)
        },
        getScreen: function () {
            return window.screen
        },
        currentWidth: function () {
            var e = HouseTrip.Lib.MobileCompatibility.getScreen(),
                t = e && e.availWidth || e.width || $(window).width(),
                i = e && e.availHeight || e.height || $(window).height();
            return HouseTrip.Lib.MobileCompatibility.isMobileSafariBrowser() ? HouseTrip.Lib.MobileCompatibility.isPortraitMode() ? t : i : t
        },
        scale: function (e) {
            return parseFloat(HouseTrip.Lib.MobileCompatibility.currentWidth()) / parseFloat(e)
        }
    },
    function (e) {
        "use strict";
        var t, i = {},
            n = function () {
                var i = {
                        years: "datepickerViewYears",
                        moths: "datepickerViewMonths",
                        days: "datepickerViewDays"
                    },
                    n = {
                        wrapper: '<div class="datepicker"><div class="arrow"></div><div class="datepickerContainer"><table><tbody><tr></tr></tbody></table></div></div>',
                        head: ['<td class="datepickerBlock">', "<table>", "<thead>", "<tr>", '<th class="sideColumnLeft"></th>', '<th colspan="7" class="headerTop"><a class="datepickerGoPrev" href="#"><span class="glyphicon glyphicon glyphicon-chevron-left"></span></a>', '<a class="datepickerMonth" href="#"><span></span></a>', '<a class="datepickerGoNext" href="#"><span class="glyphicon glyphicon-chevron-right"></span></a></th>', '<th class="sideColumnRight"></th>', "</tr>", '<tr class="datepickerDoW">', '<th class="sideColumnLeft"></th>', "<th><span><%=day1%></span></th>", "<th><span><%=day2%></span></th>", "<th><span><%=day3%></span></th>", "<th><span><%=day4%></span></th>", "<th><span><%=day5%></span></th>", "<th><span><%=day6%></span></th>", "<th><span><%=day7%></span></th>", '<th class="sideColumnRight"></th>', "</tr>", "</thead>", "</table></td>"],
                        space: "",
                        renderDay: function (e, t) {
                            return '<td class="datepickerDay <%=weeks[' + e + "].days[" + t + '].classname%>"><div class="leftArrow"></div><div class="leftArrowSmall"></div><a href="#" data-index="' + e + " " + t + '"><span><%=weeks[' + e + "].days[" + t + '].text%></span></a><div class="rightArrow"></div><div class="rightArrowSmall"></div></td>'
                        },
                        renderWeek: function (e) {
                            for (var t = '<td class="sideColumnLeft"></td>', i = 0; 7 > i; i += 1) t += this.renderDay(e, i);
                            return t += '<td class="sideColumnRight"></td>'
                        },
                        renderWeeks: function () {
                            for (var e = "", t = 0; 6 > t; t += 1) e += ["<tr>", this.renderWeek(t), "</tr>"].join("");
                            return e
                        },
                        days: function () {
                            return ['<tbody class="datepickerDays">', "<tr>", '<td colspan="9" class="datepickerDaysTopSpacer"></td>', "</tr>", this.renderWeeks(), "</tbody>"]
                        },
                        months: ['<tbody class="<%=className%>">', "<tr>", '<td colspan="2"><a href="#"><span><%=data[0]%></span></a></td>', '<td colspan="2"><a href="#"><span><%=data[1]%></span></a></td>', '<td colspan="2"><a href="#"><span><%=data[2]%></span></a></td>', '<td colspan="1"><a href="#"><span><%=data[3]%></span></a></td>', "</tr>", "<tr>", '<td colspan="2"><a href="#"><span><%=data[4]%></span></a></td>', '<td colspan="2"><a href="#"><span><%=data[5]%></span></a></td>', '<td colspan="2"><a href="#"><span><%=data[6]%></span></a></td>', '<td colspan="1"><a href="#"><span><%=data[7]%></span></a></td>', "</tr>", "<tr>", '<td colspan="2"><a href="#"><span><%=data[8]%></span></a></td>', '<td colspan="2"><a href="#"><span><%=data[9]%></span></a></td>', '<td colspan="2"><a href="#"><span><%=data[10]%></span></a></td>', '<td colspan="1"><a href="#"><span><%=data[11]%></span></a></td>', "</tr>", "</tbody>"]
                    },
                    r = {
                        date: null,
                        current: null,
                        name: null,
                        inline: !1,
                        mode: "single",
                        calendars: 1,
                        monthsAround: !0,
                        starts: 0,
                        prev: "&#9664;",
                        next: "&#9654;",
                        view: "days",
                        position: "bottom",
                        showOn: "focus",
                        onRenderCell: function () {
                            return {}
                        },
                        onChange: function () {},
                        onRangeChange: function () {},
                        onBeforeShow: function () {
                            return !0
                        },
                        onAfterShow: function () {},
                        onBeforeHide: function () {
                            return !0
                        },
                        onAfterHide: function () {},
                        onMouseLeave: function () {},
                        onHoverDate: function () {},
                        locale: {
                            daysMin: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
                            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
                        },
                        lastSel: !1,
                        allowPastDates: !0
                    },
                    s = function (i) {
                        var r, s, o, a, l, c, u, h, d = e(i).data("datepicker"),
                            p = e(i),
                            f = Math.floor(d.calendars / 2),
                            g = 0;
                        p.find("td>table tbody").remove();
                        for (var m = 0; m < d.calendars; m++) {
                            r = new Date(d.current), r.addMonths(-f + m), h = p.find("table").eq(m + 1), 0 == m && h.addClass("datepickerFirstView"), m == d.calendars - 1 && h.addClass("datepickerLastView"), h.hasClass("datepickerViewDays") ? o = r.getMonthName(!1) + " / " + r.getFullYear() : h.hasClass("datepickerViewMonths") ? o = r.getFullYear() : h.hasClass("datepickerViewYears") && (o = r.getFullYear() - 6 + " - " + (r.getFullYear() + 5)), h.find("thead tr:first th a:eq(1) span").text(o), o = r.getFullYear() - 6, s = {
                                data: [],
                                className: "datepickerYears"
                            };
                            for (var v = 0; 12 > v; v++) s.data.push(o + v);
                            u = t(n.months.join(""), s), r.setDate(1), s = {
                                weeks: [],
                                test: 10
                            };
                            var a = r.getMonth(),
                                y = r.getYear(),
                                b = new Date;
                            0 == m && e(i).toggleClass("currentMonth", a == b.getMonth() && y == b.getYear()), o = (r.getDay() - d.starts) % 7, r.addDays(-(o + (0 > o ? 7 : 0))), g = 0;
                            for (var w = !1; 42 > g;) {
                                l = parseInt(g / 7, 10), c = g % 7, s.weeks[l] || (s.weeks[l] = {
                                    days: []
                                }), s.weeks[l].days[c] = {
                                    text: r.getDate(),
                                    classname: []
                                }, b.getDate() == r.getDate() && b.getMonth() == r.getMonth() && b.getYear() == r.getYear() && s.weeks[l].days[c].classname.push("datepickerToday"), r > b && s.weeks[l].days[c].classname.push("datepickerFuture"), a != r.getMonth() && (s.weeks[l].days[c].classname.push("datepickerNotInMonth"), s.weeks[l].days[c].classname.push("datepickerDisabled")), 0 == r.getDay() && s.weeks[l].days[c].classname.push("datepickerSunday"), 6 == r.getDay() && s.weeks[l].days[c].classname.push("datepickerSaturday");
                                var _ = d.onRenderCell(i, r),
                                    x = r.valueOf();
                                if (a == r.getMonth() && d.date && (!e.isArray(d.date) || d.date.length > 0) && (_.selected || d.date == x || e.inArray(x, d.date) > -1 || "range" == d.mode && x >= d.date[0] && x <= d.date[1]) && (s.weeks[l].days[c].classname.push("datepickerSelected"), e.isArray(d.date) && d.date.length > 0 && "range" == d.mode)) {
                                    var k = d.date[0],
                                        T = new Date(d.date[1]);
                                    T.setHours(0, 0, 0, 0), T = T.valueOf();
                                    var C = "";
                                    d.lastSel && x == k ? C = "datepickerSelectedOne" : x != k || w ? x == T && (C = "datepickerSelectedLast") : (C = "datepickerSelectedFirst", w = !0), s.weeks[l].days[c].classname.push(C)
                                }
                                a == r.getMonth() && d.hoveredDate && d.date && e.isArray(d.date) && d.date.length > 1 && (_.selected || d.lastSel && "range" == d.mode && (x >= d.date[0] && x <= d.hoveredDate || x <= d.date[0] && x >= d.hoveredDate)) && (s.weeks[l].days[c].classname.push("datepickerHighlighted"), x > d.hoveredDate && s.weeks[l].days[c].classname.push("datepickerHighlightedPast"), x < d.hoveredDate && s.weeks[l].days[c].classname.push("datepickerHighlightedFuture")), a == r.getMonth() && d.hoveredDate && x == d.hoveredDate && s.weeks[l].days[c].classname.push("datepickerHovered"), _.disabled && s.weeks[l].days[c].classname.push("datepickerDisabled"), _.className && s.weeks[l].days[c].classname.push(_.className), s.weeks[l].days[c].classname = s.weeks[l].days[c].classname.join(" "), g++, r.addDays(1)
                            }
                            u = t(n.days().join(""), s) + u, s = {
                                data: d.locale.monthsShort,
                                className: "datepickerMonths"
                            }, u = t(n.months.join(""), s) + u, h.append(u)
                        }
                    },
                    o = function (e) {
                        Date.prototype.tempDate || (Date.prototype.tempDate = null, Date.prototype.months = e.months, Date.prototype.monthsShort = e.monthsShort, Date.prototype.getMonthName = function (e) {
                            return this[e ? "months" : "monthsShort"][this.getMonth()]
                        }, Date.prototype.addDays = function (e) {
                            this.setDate(this.getDate() + e), this.tempDate = this.getDate()
                        }, Date.prototype.addMonths = function (e) {
                            null == this.tempDate && (this.tempDate = this.getDate()), this.setDate(1), this.setMonth(this.getMonth() + e), this.setDate(Math.min(this.tempDate, this.getMaxDays()))
                        }, Date.prototype.addYears = function (e) {
                            null == this.tempDate && (this.tempDate = this.getDate()), this.setDate(1), this.setFullYear(this.getFullYear() + e), this.setDate(Math.min(this.tempDate, this.getMaxDays()))
                        }, Date.prototype.getMaxDays = function () {
                            var e, t = new Date(Date.parse(this)),
                                i = 28;
                            for (e = t.getMonth(), i = 28; t.getMonth() == e;) i++, t.setDate(i);
                            return i - 1
                        })
                    },
                    a = function (t) {
                        var i = this.data("datepicker"),
                            n = e(t.currentTarget);
                        if (!i.hoveredIndex || n.data("index") != i.hoveredIndex) {
                            if (n.hasClass("datepickerDisabled")) return !1;
                            var r = n.parent();
                            if (!r.hasClass("datepickerDisabled")) {
                                var o = r.parent().parent().parent(),
                                    a = e("table", this).index(o.get(0)) - 1,
                                    l = new Date(i.current),
                                    c = Math.floor(i.calendars / 2),
                                    u = parseInt(n.text(), 10);
                                l.addMonths(a - c), r.hasClass("datepickerNotInMonth") && l.addMonths(u > 15 ? -1 : 1), l.setDate(u), u = l.setHours(0, 0, 0, 0).valueOf();
                                var h = new Date;
                                if (h.setHours(0, 0, 0, 0), !i.allowPastDates && new Date(u) < h) return !1;
                                i.hoveredDate = u, i.hoveredIndex = n.data("index"), i.onHoverDate.apply(this, [l, i.lastSel]), s(this.get(0))
                            }
                            return !1
                        }
                    },
                    l = function () {
                        var e = this.data("datepicker");
                        e.onMouseLeave.apply(this)
                    },
                    c = function (t) {
                        e(t.target).is("span") && (t.target = t.target.parentNode);
                        var i = e(t.target);
                        if (i.is("a")) {
                            if (t.target.blur(), i.hasClass("datepickerDisabled")) return !1;
                            var n = e(this).data("datepicker"),
                                r = i.parent(),
                                o = r.parent().parent().parent(),
                                a = e("table", this).index(o.get(0)) - 1,
                                l = new Date(n.current),
                                c = !1,
                                h = !1,
                                d = !1,
                                p = Math.floor(n.calendars / 2);
                            if (r.is("th")) i.hasClass("datepickerMonth") ? (l.addMonths(a - p), "range" == n.mode ? (n.date[0] = l.setHours(0, 0, 0, 0).valueOf(), l.addDays(l.getMaxDays() - 1), l.setHours(23, 59, 59, 0), n.date[1] = l.valueOf(), d = !0, c = !0, n.lastSel = !1) : 1 == n.calendars && (o.eq(0).hasClass("datepickerViewDays") ? (o.eq(0).toggleClass("datepickerViewDays datepickerViewMonths"), i.find("span").text(l.getFullYear())) : o.eq(0).hasClass("datepickerViewMonths") ? (o.eq(0).toggleClass("datepickerViewMonths datepickerViewYears"), i.find("span").text(l.getFullYear() - 6 + " - " + (l.getFullYear() + 5))) : o.eq(0).hasClass("datepickerViewYears") && (o.eq(0).toggleClass("datepickerViewYears datepickerViewDays"), i.find("span").text(l.getMonthName(!0) + ", " + l.getFullYear())))) : r.parent().parent().is("thead") && (o.eq(0).hasClass("datepickerViewDays") ? n.current.addMonths(i.hasClass("datepickerGoPrev") ? -1 : 1) : o.eq(0).hasClass("datepickerViewMonths") ? n.current.addYears(i.hasClass("datepickerGoPrev") ? -1 : 1) : o.eq(0).hasClass("datepickerViewYears") && n.current.addYears(i.hasClass("datepickerGoPrev") ? -12 : 12), d = !0);
                            else if (r.is("td") && !r.hasClass("datepickerDisabled")) {
                                if (o.eq(0).hasClass("datepickerViewMonths")) n.current.setMonth(o.find("tbody.datepickerMonths td").index(r)), n.current.setFullYear(parseInt(o.find("thead th a.datepickerMonth span").text(), 10)), n.current.addMonths(p - a), o.eq(0).toggleClass("datepickerViewMonths datepickerViewDays");
                                else if (o.eq(0).hasClass("datepickerViewYears")) n.current.setFullYear(parseInt(i.text(), 10)), o.eq(0).toggleClass("datepickerViewYears datepickerViewMonths");
                                else {
                                    var f = parseInt(i.text(), 10);
                                    l.addMonths(a - p), r.hasClass("datepickerNotInMonth") && l.addMonths(f > 15 ? -1 : 1), l.setDate(f);
                                    var g = new Date;
                                    switch (g.setHours(0, 0, 0, 0), n.hoveredDate = null, n.mode) {
                                    case "multiple":
                                        if (f = l.setHours(0, 0, 0, 0).valueOf(), !n.allowPastDates && new Date(f) < g) return !1;
                                        n.lastDate = new Date(f), e.inArray(f, n.date) > -1 ? e.each(n.date, function (e, t) {
                                            return t == f ? (n.date.splice(e, 1), !1) : void 0
                                        }) : n.date.push(f);
                                        break;
                                    case "range":
                                        if (!n.lastSel) {
                                            var m = l.setHours(0, 0, 0, 0);
                                            if (!n.allowPastDates && g > m) return !1;
                                            n.date[0] = m.valueOf()
                                        }
                                        if (f = l.setHours(23, 59, 59, 0).valueOf(), !n.allowPastDates && new Date(f) < g) return !1;
                                        n.lastDate = new Date(f), f < n.date[0] ? (n.date[1] = n.date[0] + 86399e3, n.date[0] = f - 86399e3) : n.date[1] = f, n.lastSel = !n.lastSel, h = !n.lastSel;
                                        break;
                                    default:
                                        n.date = l.valueOf()
                                    }
                                    c = !0
                                }
                                d = !0
                            }
                            d && s(this), c && n.onChange.apply(this, u(n)), h && n.onRangeChange.apply(this, u(n))
                        }
                        return !1
                    },
                    u = function (t) {
                        var i = null;
                        return "single" == t.mode ? t.date && (i = new Date(t.date)) : (i = new Array, e(t.date).each(function (e, t) {
                            i.push(new Date(t))
                        })), [i, t.el, t.lastDate, t.lastSel]
                    },
                    h = function () {
                        var e = "CSS1Compat" == document.compatMode;
                        return {
                            l: window.pageXOffset || (e ? document.documentElement.scrollLeft : document.body.scrollLeft),
                            t: window.pageYOffset || (e ? document.documentElement.scrollTop : document.body.scrollTop),
                            w: window.innerWidth || (e ? document.documentElement.clientWidth : document.body.clientWidth),
                            h: window.innerHeight || (e ? document.documentElement.clientHeight : document.body.clientHeight)
                        }
                    },
                    d = function (e, t, i) {
                        if (e == t) return !0;
                        if (e.contains) return e.contains(t);
                        if (e.compareDocumentPosition) return !!(16 & e.compareDocumentPosition(t));
                        for (var n = t.parentNode; n && n != i;) {
                            if (n == e) return !0;
                            n = n.parentNode
                        }
                        return !1
                    },
                    p = function () {
                        var t = e("#" + e(this).data("datepickerId"));
                        if (!t.is(":visible")) {
                            {
                                var i = t.get(0),
                                    n = t.data("datepicker");
                                n.onBeforeShow.apply(this, [i])
                            }
                            if (0 == n.onBeforeShow.apply(this, [i])) return;
                            s(i);
                            var r = e(this).offset(),
                                o = h(),
                                a = r.top,
                                l = r.left;
                            switch (t.css({
                                visibility: "hidden",
                                display: "block"
                            }), n.position) {
                            case "top":
                                a -= i.offsetHeight;
                                break;
                            case "left":
                                l -= i.offsetWidth;
                                break;
                            case "right":
                                l += this.offsetWidth;
                                break;
                            case "bottom":
                                a += this.offsetHeight;
                                break;
                            case "custom":
                            }
                            a + i.offsetHeight > o.t + o.h && (a = r.top - i.offsetHeight), a < o.t && (a = r.top + this.offsetHeight + i.offsetHeight), l + i.offsetWidth > o.l + o.w && (l = r.left - i.offsetWidth), l < o.l && (l = r.left + this.offsetWidth), t.css({
                                visibility: "visible",
                                display: "block",
                                top: a + "px",
                                left: l + "px"
                            }), n.onAfterShow.apply(this, [t.get(0)]), e(document).bind(HouseTrip.Lib.MobileCompatibility.click(), {
                                cal: t,
                                trigger: this
                            }, f)
                        }
                        return !1
                    },
                    f = function (t) {
                        if (t.target != t.data.trigger && !d(t.data.cal.get(0), t.target, t.data.cal.get(0))) {
                            var i = t.data.cal;
                            if (0 != i.data("datepicker").onBeforeHide.apply(this, [i.get(0), t.target])) {
                                var n = i.data("datepicker");
                                n.hoveredDate = null, s(i.get(0)), i.hide(), i.data("datepicker").onAfterHide.apply(this, [i.get(0)]), e(document).unbind(HouseTrip.Lib.MobileCompatibility.click(), f)
                            }
                        }
                    },
                    g = function (t, i) {
                        if ("single" == t || i || (i = []), i && (!e.isArray(i) || i.length > 0))
                            if ("single" != t)
                                if (e.isArray(i)) {
                                    for (var n = 0; n < i.length; n++) i[n] = new Date(i[n]).setHours(0, 0, 0, 0).valueOf();
                                    "range" == t && (1 == i.length && i.push(new Date(i[0])), i[1] = new Date(i[1]).setHours(23, 59, 59, 0).valueOf())
                                } else i = [new Date(i).setHours(0, 0, 0, 0).valueOf()], "range" == t && i.push(new Date(i[0]).setHours(23, 59, 59, 0).valueOf());
                        else i = new Date(i).setHours(0, 0, 0, 0).valueOf();
                        return i
                    };
                return {
                    init: function (u) {
                        return u = e.extend({}, r, u || {}), o(u.locale), u.calendars = Math.max(1, parseInt(u.calendars, 10) || 1), u.mode = /single|multiple|range/.test(u.mode) ? u.mode : "single", this.each(function () {
                            if (!e(this).data("datepicker")) {
                                u.el = this, u.date = g(u.mode, u.date), u.current = u.current ? new Date(u.current) : new Date, u.current.setDate(1), u.current.setHours(0, 0, 0, 0), u.monthsAround || u.current.addMonths(u.calendars / 2);
                                var r, o;
                                r = u.name ? "datepicker_" + u.name : "datepicker_" + parseInt(1e3 * Math.random()), e("#" + r).remove(), u.id = r, e(this).data("datepickerId", u.id);
                                var h = e(n.wrapper);
                                h.attr("id", r).bind(HouseTrip.Lib.MobileCompatibility.click(), c).on("mouseenter", "td.datepickerDay a", a.bind(h)).on("mouseleave", l.bind(h)).data("datepicker", u), u.className && h.addClass(u.className);
                                for (var d = "", p = 0; p < u.calendars; p++) o = u.starts, p > 0 && (d += n.space), d += t(n.head.join(""), {
                                    prev: u.prev,
                                    next: u.next,
                                    day1: u.locale.daysMin[o++ % 7],
                                    day2: u.locale.daysMin[o++ % 7],
                                    day3: u.locale.daysMin[o++ % 7],
                                    day4: u.locale.daysMin[o++ % 7],
                                    day5: u.locale.daysMin[o++ % 7],
                                    day6: u.locale.daysMin[o++ % 7],
                                    day7: u.locale.daysMin[o++ % 7]
                                });
                                h.find("tr:first").append(d).find("table").addClass(i[u.view]), s(h.get(0)), u.inline ? h.appendTo(this).show().css("position", "relative") : (h.appendTo(document.body), h.css("display", "none"))
                            }
                        })
                    },
                    showPicker: function () {
                        return this.each(function () {
                            if (e(this).data("datepickerId")) {
                                var t = e("#" + e(this).data("datepickerId")),
                                    i = t.data("datepicker");
                                i.inline || p.apply(this)
                            }
                        })
                    },
                    startSelection: function (t) {
                        return this.each(function () {
                            if (e(this).data("datepickerId")) {
                                var i = e("#" + e(this).data("datepickerId")),
                                    n = i.data("datepicker"),
                                    r = new Date(t.getTime());
                                r.setHours(0, 0, 0, 0), "range" == n.mode && (n.date = [r.valueOf(), r.valueOf()], n.hoveredDate = r.valueOf(), n.lastSel = !0)
                            }
                        })
                    },
                    getContainer: function () {
                        return e(this).data("datepickerId") ? e("#" + e(this).data("datepickerId")) : void 0
                    },
                    hidePicker: function () {
                        return this.each(function () {
                            if (e(this).data("datepickerId")) {
                                var t = e("#" + e(this).data("datepickerId")),
                                    i = t.data("datepicker");
                                i.inline || e("#" + e(this).data("datepickerId")).hide()
                            }
                        })
                    },
                    setDate: function (t, i, n) {
                        return this.each(function () {
                            if (e(this).data("datepickerId")) {
                                var r = e("#" + e(this).data("datepickerId")),
                                    o = r.data("datepicker");
                                o.date = g(o.mode, t);
                                var a = t && t instanceof Date,
                                    l = t[0] > t[1];
                                if (o.lastSel = "range" == o.mode && (a || l) ? !0 : !1, i && "smart" === n) {
                                    var c = o.current,
                                        u = new Date(o.date[0]);
                                    c.getMonth() !== u.getMonth() && c.getMonth() !== u.getMonth() + 1 && (o.current = new Date(u), o.current.addMonths(1))
                                } else i && (o.current = new Date("single" != o.mode ? o.date[0] : o.date));
                                s(r.get(0))
                            }
                        })
                    },
                    getDate: function () {
                        return this.size() > 0 ? u(e("#" + e(this).data("datepickerId")).data("datepicker")) : void 0
                    },
                    clear: function () {
                        return this.each(function () {
                            if (e(this).data("datepickerId")) {
                                var t = e("#" + e(this).data("datepickerId")),
                                    i = t.data("datepicker");
                                i.date = "single" == i.mode ? null : [], s(t.get(0))
                            }
                        })
                    },
                    remove: function () {
                        return this.each(function () {
                            if (e(this).data("datepickerId")) {
                                var t = e("#" + e(this).data("datepickerId"));
                                e(document).unbind(HouseTrip.Lib.MobileCompatibility.click()), t.remove()
                            }
                        })
                    },
                    centerCalendar: function (t) {
                        var i = e("#" + e(this).data("datepickerId"));
                        i && (t.top && i.css("top", t.top), t.left && i.css("left", t.left - i.width() / 2))
                    },
                    setArrowPosition: function (t) {
                        var i = e("#" + e(this).data("datepickerId")),
                            n = i.find(".arrow");
                        i && n.css("left", t - i.offset().left - n.outerWidth() / 2)
                    }
                }
            }();
        e.fn.extend({
            DatePicker: n.init,
            DatePickerHide: n.hidePicker,
            DatePickerShow: n.showPicker,
            DatePickerSetDate: n.setDate,
            DatePickerGetDate: n.getDate,
            DatePickerClear: n.clear,
            DatePickerRemove: n.remove,
            DatePickerSetCenter: n.centerCalendar,
            DatePickerSetArrowPosition: n.setArrowPosition,
            DatePickerStartSelection: n.startSelection,
            DatePickerGetContainer: n.getContainer
        }), t = function r(e, t) {
            var n = /\W/.test(e) ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + e.replace(/[\r\t\n]/g, " ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : i[e] = i[e] || r(document.getElementById(e).innerHTML);
            return t ? n(t) : n
        }
    }(jQuery), HouseTrip.Views.PagesHostapp = Backbone.View.extend({
        initialize: function (e) {
            this.MOBILE_BREAKPOINT = 480, this.slidingDelay = e.slidingDelay, this.slidingEnable = !0
        },
        events: {
            "mouseenter .ht-benefit": "stopAnimationWhenHovering",
            "mouseleave .ht-benefit": "restartAnimationWhenLeaving",
            "click .ht-benefit": "markAsSelected"
        },
        render: function () {
            this.removeStylingForNonJsDevices(), this.duplicateForMobile(), this.highlightFirstBenefit(), window.setInterval(function () {
                $(window).width() > this.MOBILE_BREAKPOINT && this.run()
            }.bind(this), this.slidingDelay)
        },
        run: function () {
            if (this.slidingEnable) {
                var e = this.$(".ht-benefit.ht-hostapp-selected-slider").next();
                e.hasClass("ht-benefit") || (e = $(".ht-benefit:first")), this.disableHtBenefitAndImage(), this.enableHtBenefitAndImage(e)
            }
        },
        removeStylingForNonJsDevices: function () {
            $(".ht-hostapp-above-fold").removeClass("no-js")
        },
        stopAnimationWhenHovering: function (e) {
            var t = $(e.currentTarget);
            t.hasClass("ht-hostapp-selected-slider") && (this.slidingEnable = !1)
        },
        restartAnimationWhenLeaving: function () {
            this.slidingEnable = !0
        },
        markAsSelected: function (e) {
            var t = $(e.currentTarget);
            t.hasClass("ht-hostapp-selected-slider") || (this.disableHtBenefitAndImage(), this.enableHtBenefitAndImage(t), this.slidingEnable = !1)
        },
        highlightFirstBenefit: function () {
            this.enableHtBenefitAndImage(this.$(".ht-benefit:first"))
        },
        duplicateForMobile: function () {
            $(".ht-benefit .hidden-xs p").each(function () {
                var e = $(this).html();
                $(this).parent().after('<p class="visible-xs">' + e + "</p>")
            })
        },
        toggleHtBenefitText: function (e) {
            var t = e.find("p:first");
            t.is(":visible") ? t.slideUp({
                duration: 500,
                easing: "easeOutCubic"
            }) : t.slideDown({
                duration: 500,
                easing: "easeOutCubic"
            })
        },
        enableHtBenefitAndImage: function (e) {
            this.toggleHtBenefitText(e), e.addClass("ht-hostapp-selected-slider");
            var t = $(".ht-benefit.ht-hostapp-selected-slider").index();
            $(".ht-hostapp-shots:eq(" + t + ")").addClass("ht-hostapp-selected-slider")
        },
        disableHtBenefitAndImage: function () {
            this.toggleHtBenefitText($(".ht-hostapp-selected-slider")), $(".ht-hostapp-selected-slider").removeClass("ht-hostapp-selected-slider")
        }
    }), HouseTrip.Views.PhotoCarousel = Backbone.View.extend({
        initialize: function () {
            _.bindAll(this, "_renderSlide", "_updatePhotos", "_fetchPhotos", "_onUse"), this.collection.on("loaded", this._updatePhotos)
        },
        events: {
            mouseover: "_fetchPhotos"
        },
        render: function () {
            return this.$el.addClass("photo-carousel"), this.dynamicSwipe = new DynamicSwipe(this.$el.get(0), {
                renderSlide: this._renderSlide,
                swipeStarted: this._fetchPhotos,
                onSwipeSlided: this._onUse
            }), HouseTrip.isTouchEnabled || this._renderControls(this.$el), this
        },
        _renderControls: function (e) {
            var t, i;
            e.append(t = $("<div>", {
                "class": "photo-carousel-arrow-container left"
            }).append($("<div>", {
                "class": "photo-carousel-arrow"
            }).append($("<div>", {
                "class": "galleria-image-nav-left"
            })))).append(i = $("<div>", {
                "class": "photo-carousel-arrow-container right"
            }).append($("<div>", {
                "class": "photo-carousel-arrow"
            }).append($("<div>", {
                "class": "galleria-image-nav-right"
            })))), t.on("click", this._arrowClicked.bind(this, "left")), i.on("click", this._arrowClicked.bind(this, "right"))
        },
        _performSlide: function (e) {
            this._onUse(), "left" === e ? this.dynamicSwipe.prev() : this.dynamicSwipe.next()
        },
        _onUse: function () {
            this._hideInformation(), this.used || (HouseTrip.Events.trigger("photo:usedCarousel"), this.used = !0)
        },
        _hideInformation: function () {
            var e = this.$el.closest(".image-container");
            e.addClass("has-hidden-content"), this._showInformationDelayed(e)
        },
        _showInformationDelayed: function (e) {
            this._showHiddenContentTimeout && window.clearTimeout(this._showHiddenContentTimeout), this._showHiddenContentTimeout = window.setTimeout(function () {
                e.removeClass("has-hidden-content"), this._showHiddenContentTimeout = void 0
            }.bind(this), 1500)
        },
        _arrowClicked: function (e, t) {
            this.collection.loaded ? this._performSlide(e) : (this._fetchPhotos(), this.collection.once("loaded", this._performSlide.bind(this, e))), t.stopPropagation()
        },
        _renderSlide: function (e, t) {
            0 == e.children().length && e.append($("<img>", {
                "class": "image-main"
            })).append($("<img>", {
                "class": "image-overlay",
                src: HouseTrip.config.photoCarousel.overlayImage
            })), e.attr("data-photo-index", t), this._updateSlide(e)
        },
        _updatePhotos: function () {
            var e = this;
            this.$("[data-photo-index]").each(function () {
                e._updateSlide($(this))
            })
        },
        _updateSlide: function (e) {
            var t = Number(e.attr("data-photo-index")),
                i = this._photoAt(t);
            if (i) {
                var n = e.find(".image-main");
                if (n.attr("data-original") === i.get("url")) return;
                n.attr({
                    "data-original": i.get("url")
                }), setTimeout(function () {
                    n.lazyload({
                        effect: "fadeIn"
                    })
                }, 0), e.addClass("has-loaded")
            } else e.removeClass("has-loaded")
        },
        _photoAt: function (e) {
            var t = this.collection,
                i = t.length;
            return t.loaded || e >= 0 && i > e ? t.at((i + e % i) % i) : void 0
        },
        _fetchPhotos: function () {
            this.collection.fetchOnce()
        }
    }), HouseTrip.Views.AdvancedTabIndex = {
        TAB_KEY_CODE: 9,
        SPACE_KEY_CODE: 32,
        ENTER_KEY_CODE: 13,
        startAdvancedTabIndex: function (e) {
            this.$el.on("keydown", this._onKeyDown.bind(this)), this.lastTabIndex = e
        },
        focusFirstElement: function () {
            this._focusElement(this.$("[tabindex=1]"))
        },
        focusLastElement: function () {
            this._focusElement(this.$("[tabindex=" + this.lastTabIndex + "]"))
        },
        findActiveElement: function () {
            return this.$(document.activeElement).closest("[tabindex]")
        },
        _onKeyDown: function (e) {
            switch (e.which) {
            case this.TAB_KEY_CODE:
                e.shiftKey ? this._switchToPreviousElement(e) : this._switchToNextElement(e);
                break;
            case this.ENTER_KEY_CODE:
            case this.SPACE_KEY_CODE:
                this._toggleElement()
            }
        },
        _focusElement: function (e) {
            e.focus()
        },
        _switchToNextElement: function (e) {
            var t = this.findActiveElement();
            if (t.length > 0 && t.get(0).tabIndex) {
                var i = t.get(0).tabIndex;
                i == this.lastTabIndex && (e.preventDefault(), this.focusFirstElement())
            }
        },
        _switchToPreviousElement: function (e) {
            var t = this.findActiveElement();
            if (t.length > 0 && t.get(0).tabIndex) {
                var i = t.get(0).tabIndex;
                1 == i && (e.preventDefault(), this.focusLastElement())
            }
        },
        _toggleElement: function () {
            var e = this.findActiveElement();
            e.length > 0 && e.hasClass("js-css3-checkbox") ? ($checkbox = e.find('input[type="checkbox"]'), $checkbox.prop("checked", !$checkbox.prop("checked"))) : e.find("a").length > 0 ? e.find("a").click() : e.trigger("click")
        }
    }, HouseTrip.Views.Authentication = Backbone.View.extend({
        events: {
            "hide.bs.modal": "clearErrors",
            "click .js-authentication-trigger": "_onClickTrigger",
            "click .js-authentication-switch": "switchComponent",
            "click .fb-button": "listenForFacebookSuccess"
        },
        options: {
            default_component: "sign_in",
            parentView: this
        },
        currentComponent: null,
        signIn: null,
        signUp: null,
        forgottenPassword: null,
        checkEmail: null,
        contest: null,
        initialize: function (e) {
            _.extend(this.options, e), this.titleEl = this.$(".modal-title"), this.signUp = new HouseTrip.Views.SignUp(_.extend(this.options, {
                el: this.$(".js-sign-up-component")
            })), this.signIn = new HouseTrip.Views.SignIn(_.extend(this.options, {
                el: this.$(".js-sign-in-component")
            })), this.forgottenPassword = new HouseTrip.Views.ForgottenPassword(_.extend(this.options, {
                el: this.$(".js-forgotten-password-component"),
                parentView: this
            })), this.checkEmail = new HouseTrip.Views.CheckEmail(_.extend(this.options, {
                el: this.$(".js-check-email-component")
            })), this.contest = new HouseTrip.Views.Contest(_.extend(this.options, {
                el: this.$(".js-contest-component")
            })), new HouseTrip.Models.KissMetrics.Authentication
        },
        render: function (e) {
            e && e.render_options && (void 0 === e.render_options.on_success && (e.render_options.on_success = {
                hide: !1,
                reload: !0,
                redirect: null
            }), _.extend(this.options, e.render_options)), this.changeCurrentComponent(e.component || this.options.default_component), this.signIn.updateOptions(this.options), this.signUp.updateOptions(this.options), this.forgottenPassword.updateOptions(this.options), this.contest.updateOptions(this.options), this.setTitle(this.options[e.component].title), this.scrollTo(0)
        },
        switchComponent: function (e) {
            var t = this._getData(e.target).default_component;
            this.changeCurrentComponent(t), this.clearErrors(), this.setTitle(this.options[t].title), this.scrollTo(0)
        },
        listenForFacebookSuccess: function () {
            HouseTrip.Events.once("authentication.facebook.success", this.currentComponent.onSuccess)
        },
        setTitle: function (e) {
            this.titleEl.text(e || this.options[this.currentComponent.name].title)
        },
        scrollTo: function (e) {
            this.$(".modal").animate({
                scrollTop: e
            }).promise().done(facebookConnectInit)
        },
        _onClickTrigger: function (e) {
            if (!HouseTrip.currentUser.isSignedIn()) {
                var t = e.target,
                    i = this._getData(t);
                this._showModal(i), this._triggerEvent(t, i)
            }
        },
        _showModal: function (e) {
            this.render({
                component: e.default_component,
                render_options: e.render_options
            }), this.$("#js-authentication-modal").modal({
                backdrop: !1
            })
        },
        _triggerEvent: function (e, t) {
            var i = $(e).closest("[data-authentication-source]"),
                n = {
                    source: i.data("authentication-source"),
                    shortlistButton: i.data("shortlist-button-origin"),
                    defaultView: this._humanizeComponent(t.default_component)
                };
            HouseTrip.Events.trigger("authentication:showModal", n)
        },
        _humanizeComponent: function (e) {
            switch (e) {
            case "sign_up":
                return "Register";
            case "sign_in":
                return "Sign in";
            default:
                return e
            }
        },
        clearErrors: function () {
            this.$(".fieldWithErrors").removeClass("fieldWithErrors"), this.$(".formError, .form-error-main").remove(), this.$(".fb-error").html("")
        },
        changeCurrentComponent: function (e) {
            switch (this.currentComponent && this.currentComponent.hide(), e) {
            case this.signUp.name:
                this.currentComponent = this.signUp;
                break;
            case this.signIn.name:
                this.currentComponent = this.signIn;
                break;
            case this.forgottenPassword.name:
                this.currentComponent = this.forgottenPassword;
                break;
            case this.checkEmail.name:
                this.currentComponent = this.checkEmail;
                break;
            case this.contest.name:
                this.currentComponent = this.contest
            }
            this.currentComponent.show()
        },
        hide: function () {
            this.$("#js-authentication-modal").modal("hide")
        },
        _getData: function (e) {
            var t = $(e).closest("[data-authentication_modal]");
            return t.data("authentication_modal")
        }
    }), HouseTrip.Views.Authentication.load = function () {
        return $(".js-authentication-modal").length > 0 ? new HouseTrip.Views.Authentication({
            el: $(".js-authentication-modal")
        }) : void 0
    }, $(document).ready(function () {
        HouseTrip.AuthenticationModal = HouseTrip.Views.Authentication.load()
    }), HouseTrip.Views.AuthenticationForm = Backbone.View.extend({
        events: {
            "click .js-submit-remote-form": "submitForm"
        },
        initializeBaseComponent: function () {
            _.bindAll(this, "enableSubmit", "onSuccess", "ajaxRequest", "onError"), _.extend(this, HouseTrip.Views.AdvancedTabIndex)
        },
        submitForm: function (e) {
            e.preventDefault(), this.$form = this.$("form"), this.disableSubmit(), this.ajaxRequest(!0)
        },
        show: function () {
            this.$el.show()
        },
        hide: function () {
            this.$el.hide()
        },
        reloadPage: function () {
            location.reload()
        },
        redirectToUrl: function (e) {
            window.location = e
        },
        updateView: function (e) {
            this.$el.html(e), this.options.parentView.scrollTo(0)
        },
        disableSubmit: function () {
            this.$(".js-submit-remote-form").attr("disabled", !0)
        },
        enableSubmit: function () {
            this.$(".js-submit-remote-form").attr("disabled", !1)
        },
        onSuccess: function (e) {
            if ("success" == e.result) {
                var t = this.options.on_success;
                t.redirect ? this.redirectToUrl(t.redirect) : t.reload && this.reloadPage(), t.hide && HouseTrip.AuthenticationModal.hide(), HouseTrip.Events.trigger("authentication.success")
            } else "failure" == e.result && this.updateView(e.body)
        },
        onError: function () {
            this.ajaxRequest(!1)
        },
        ajaxRequest: function (e) {
            var t = {
                success: this.onSuccess,
                dataType: "json",
                method: "post",
                xhrFields: {
                    withCredentials: !0
                },
                url: this.$form.attr("action"),
                data: this.$form.serialize()
            };
            e ? t.error = this.onError : (t.url = t.url.replace("https://", "http://"), t.error = this.enableSubmit), $.ajax(t)
        },
        updateOptions: function (e) {
            _.extend(this.options, e)
        }
    }), HouseTrip.Views.SignIn = HouseTrip.Views.AuthenticationForm.extend({
        name: "sign_in",
        options: {},
        initialize: function (e) {
            _.extend(this.options, e), this.initializeBaseComponent(), this.hide(), this.startAdvancedTabIndex(6)
        }
    }), HouseTrip.Views.SignUp = HouseTrip.Views.AuthenticationForm.extend({
        name: "sign_up",
        options: {},
        initialize: function (e) {
            this.initializeBaseComponent(), _.extend(this.options, e), this.hide(), this.startAdvancedTabIndex(8)
        }
    }), HouseTrip.Views.ForgottenPassword = HouseTrip.Views.AuthenticationForm.extend({
        name: "forgotten_password",
        options: {},
        initialize: function (e) {
            _.extend(this.options, e), this.parentView = e.parentView, this.initializeBaseComponent(), this.hide(), this.startAdvancedTabIndex(3)
        },
        onSuccess: function (e) {
            "success" == e.result ? (this.parentView.render({
                component: "check_email"
            }), this.parentView.currentComponent.updateView(e.body)) : "failure" == e.result && this.updateView(e.body)
        }
    }), HouseTrip.Views.CheckEmail = HouseTrip.Views.AuthenticationForm.extend({
        name: "check_email",
        options: {},
        initialize: function (e) {
            _.extend(this.options, e), this.hide()
        }
    }), HouseTrip.Views.Contest = HouseTrip.Views.AuthenticationForm.extend({
        name: "contest",
        options: {},
        initialize: function (e) {
            this.initializeBaseComponent(), _.extend(this.options, e), this.hide(), this.startAdvancedTabIndex(7)
        },
        submitForm: function () {
            $.cookie("contest", !0), this.constructor.__super__.submitForm.apply(this, arguments)
        }
    });
var HTFacebookConnect = {
    options: {},
    init: function (e) {
        $("body").on("click", ".fb-button", this.login.bind(this)), _.extend(this.options, e)
    },
    login: function (e) {
        $(".fb-text").html(this.options.login_processing_text), FB.init({
            appId: this.options.app_id,
            channelUrl: "//" + window.location.host + "/channel.html",
            status: !0,
            cookie: !0
        }), $(e.currentTarget).closest(".js-contest-component").find("#contest").length > 0 && $.cookie("contest", !0), FB.login(function (e) {
            e.authResponse ? $.post(this.options.login_url, function (e) {
                e.success ? HouseTrip.Events.trigger("authentication.facebook.success", {
                    result: "success"
                }) : ($(".fb-text").html(this.options.login_invitation_text), $(".fb-error").html(e.error))
            }.bind(this)) : $(".fb-text").html(this.options.login_invitation_text)
        }.bind(this), {
            scope: "email,user_birthday,user_location"
        })
    }
};
ABTestsWidget.prototype = {
    bindSubmitEvent: function (e) {
        var t = this,
            i = e.$element,
            n = function () {
                var e = i.find("#ab_tests_list input[type=radio]:checked");
                if (0 == e.length) return !1;
                var n = "";
                e.each(function (t, i) {
                    n += i.value, t < e.length - 1 && (n += ",")
                });
                var r = document.location.search;
                document.location.search = t.replaceQueryString(r, "ab_test", n)
            };
        i.on ? i.on("click", ".actions a", n) : i.find(".actions a").live("click", n)
    },
    replaceQueryString: function (e, t, i) {
        var n = new RegExp("([?|&])" + t + "=.*?(&|$)", "i");
        return e.match(n) ? e.replace(n, "$1" + t + "=" + i + "$2") : e + "&" + t + "=" + i
    }
}, SidebarPanel.prototype = {
    bindToggleEvent: function () {
        var e = this,
            t = 150,
            i = this.$element.outerWidth();
        this.$element.find(".tab").click(function () {
            var n = e.$element,
                r = e.direction,
                s = {};
            return n.data("animating") ? !1 : void(n.hasClass("opened") ? (n.removeClass("opened"), n.data("animating", !0), s[r] = "-=" + i, n.animate(s, t, function () {
                n.data("animating", !1), n.addClass("closed")
            })) : n.hasClass("closed") && (n.removeClass("closed"), n.data("animating", !0), s[r] = "+=" + i, n.animate(s, t, function () {
                n.data("animating", !1), n.addClass("opened")
            })))
        })
    }
}, HouseTrip.Views.SearchMobileForm = Backbone.View.extend({
    initialize: function () {
        this.model.on("change:mobileDistanceFilterHtml", this._updateDistanceFilter.bind(this)), this.field = new HouseTrip.Views.SearchBarField({
            el: this.$(".search-input", this.el),
            model: this.model
        })
    },
    events: {
        "change input": "_onFilterChange",
        "change select": "_onFilterChange",
        submit: "_onSubmit"
    },
    _onFilterChange: function (e) {
        HouseTrip.Helpers.Filters.triggerEvent("search:filterChange", e)
    },
    _onSubmit: function (e) {
        e.preventDefault(), this.model.prepare(), this._updateSearch(), this.model.search(), HouseTrip.mobileOverlay.close()
    },
    _updateSearch: function () {
        this.model.set("formParams", this.$el.find("form").serializeArray(), {
            silent: !0
        })
    },
    _updateDistanceFilter: function () {
        this.$(".distance-filter").html(this.model.get("mobileDistanceFilterHtml"));
        var e = this.$(".distance-filter .ht-mobile-form-section");
        new HouseTrip.Views.FormsMobileSelect({
            el: e,
            parentOverlay: "filters"
        }).render()
    },
    render: function () {
        this.$(".ht-mobile-number-field").closest(".ht-mobile-form-right").each(function () {
            new HouseTrip.Views.MobileNumberField({
                el: this
            }).render()
        }), this.$(".ht-mobile-select").closest(".ht-mobile-form-section").each(function () {
            new HouseTrip.Views.FormsMobileSelect({
                el: this,
                parentOverlay: "filters"
            }).render()
        }), HouseTrip.houseFlip.enabled("people_picker") && (this.peoplePickerModel = new HouseTrip.Models.PeoplePicker({
            property_search: this.model
        }), this.$(".ht-mobile-people-picker").closest(".ht-mobile-form-section").each(function (e, t) {
            new HouseTrip.Views.MobilePeoplePicker({
                el: t,
                parentOverlay: "filters",
                model: this.peoplePickerModel
            }).render()
        }.bind(this))), this.$(".ht-mobile-date-picker").closest(".ht-mobile-form-section").each(function () {
            new HouseTrip.Views.FormsMobileSelectDate({
                el: this,
                parentOverlay: "filters"
            })
        })
    }
});