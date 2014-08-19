/**
  /home/httpd/extlib/jquery/core/1.7.2/jquery-1.7.2.min.js
  /home/httpd/extlib/jquery/ui/1.8.18/jquery.ui.core.js
  /home/httpd/extlib/jquery/ui/1.8.18/jquery.ui.datepicker.js
  /home/httpd/extlib/jquery/ui/1.8.18/jquery.ui.widget.js
  /home/httpd/extlib/jquery/ui/1.8.18/jquery.ui.position.js
  /home/httpd/extlib/jquery/ui/1.8.18/jquery.ui.autocomplete.js
  common/js/spa/site-core.js -> 52247   ( integrations/INT_2014_week_23 )
  common/js/spa/tracking/site-tracking-last_touch.js -> 53119   ( integrations/INT_2014_week_23 )
  common/js/mvt_css.js -> 44075   ( integrations/INT_2014_week_23 )
  common/js/ajax/vaw_jquery.js -> 32924   ( integrations/INT_2014_week_23 )
  common/js/utility_funcs.js -> 51546   ( integrations/INT_2014_week_23 )
  common/js/currency_display_list.js -> 43091   ( integrations/INT_2014_week_23 )
  common/js/SearchWidgetNoFrm.js -> 52919   ( integrations/INT_2014_week_23 )
  common/js/country_touristic.js -> 39311   ( integrations/INT_2014_week_23 )
  common/js/toolbox/date/1.02/date.js -> 30010   ( integrations/INT_2014_week_23 )
  common/js/site/useful_funs.js -> 52356   ( integrations/INT_2014_week_23 )
  common/js/cookieManager.js -> 33921   ( integrations/INT_2014_week_23 )
  common/js/responsive/UserAgentSniffer.js -> 53119 M  ( integrations/INT_2014_week_23 )
  common/js/legal_popup.js -> 48273   ( integrations/INT_2014_week_23 )
  common/js/page_info.js -> 51407   ( integrations/INT_2014_week_23 )
  common/js/watermark.js -> 49135   ( integrations/INT_2014_week_23 )
  common/js/home_page/constants.js -> 46733   ( integrations/INT_2014_week_23 )
  common/js/home_page/model.js -> 48691   ( integrations/INT_2014_week_23 )
  common/js/home_page/view.js -> 39230   ( integrations/INT_2014_week_23 )
  common/js/home_page/searchbox_autocomplete.js -> 52356   ( integrations/INT_2014_week_23 )
  common/js/home_page/home_page_searchbox_action.js -> 52356   ( integrations/INT_2014_week_23 )
  common/js/home_page/socialmanager.js -> 40541   ( integrations/INT_2014_week_23 )
  common/js/home_page/controller.js -> 50342   ( integrations/INT_2014_week_23 )
  common/js/home_page/mvt/9B/init_home_page.js -> 52804   ( integrations/INT_2014_week_23 )
  common/js/home_page/site-tms-home.js -> 52919   ( integrations/INT_2014_week_23 )
**/
/* jQuery v1.7.2 jquery.com | jquery.org/license */
(function (a, b) {
    function cy(a) {
        return f.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1
    }

    function cu(a) {
        if (!cj[a]) {
            var b = c.body,
                d = f("<" + a + ">").appendTo(b),
                e = d.css("display");
            d.remove();
            if (e === "none" || e === "") {
                ck || (ck = c.createElement("iframe"), ck.frameBorder = ck.width = ck.height = 0), b.appendChild(ck);
                if (!cl || !ck.createElement) {
                    cl = (ck.contentWindow || ck.contentDocument).document, cl.write((f.support.boxModel ? "<!doctype html>" : "") + "<html><body>"), cl.close()
                }
                d = cl.createElement(a), cl.body.appendChild(d), e = f.css(d, "display"), b.removeChild(ck)
            }
            cj[a] = e
        }
        return cj[a]
    }

    function ct(a, b) {
        var c = {};
        f.each(cp.concat.apply([], cp.slice(0, b)), function () {
            c[this] = a
        });
        return c
    }

    function cs() {
        cq = b
    }

    function cr() {
        setTimeout(cs, 0);
        return cq = f.now()
    }

    function ci() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }

    function ch() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }

    function cb(a, c) {
        a.dataFilter && (c = a.dataFilter(c, a.dataType));
        var d = a.dataTypes,
            e = {},
            g, h, i = d.length,
            j, k = d[0],
            l, m, n, o, p;
        for (g = 1; g < i; g++) {
            if (g === 1) {
                for (h in a.converters) {
                    typeof h == "string" && (e[h.toLowerCase()] = a.converters[h])
                }
            }
            l = k, k = d[g];
            if (k === "*") {
                k = l
            } else {
                if (l !== "*" && l !== k) {
                    m = l + " " + k, n = e[m] || e["* " + k];
                    if (!n) {
                        p = b;
                        for (o in e) {
                            j = o.split(" ");
                            if (j[0] === l || j[0] === "*") {
                                p = e[j[1] + " " + k];
                                if (p) {
                                    o = e[o], o === !0 ? n = p : p === !0 && (n = o);
                                    break
                                }
                            }
                        }
                    }!n && !p && f.error("No conversion from " + m.replace(" ", " to ")), n !== !0 && (c = n ? n(c) : p(o(c)))
                }
            }
        }
        return c
    }

    function ca(a, c, d) {
        var e = a.contents,
            f = a.dataTypes,
            g = a.responseFields,
            h, i, j, k;
        for (i in g) {
            i in d && (c[g[i]] = d[i])
        }
        while (f[0] === "*") {
            f.shift(), h === b && (h = a.mimeType || c.getResponseHeader("content-type"))
        }
        if (h) {
            for (i in e) {
                if (e[i] && e[i].test(h)) {
                    f.unshift(i);
                    break
                }
            }
        }
        if (f[0] in d) {
            j = f[0]
        } else {
            for (i in d) {
                if (!f[0] || a.converters[i + " " + f[0]]) {
                    j = i;
                    break
                }
                k || (k = i)
            }
            j = j || k
        } if (j) {
            j !== f[0] && f.unshift(j);
            return d[j]
        }
    }

    function b_(a, b, c, d) {
        if (f.isArray(b)) {
            f.each(b, function (b, e) {
                c || bD.test(a) ? d(a, e) : b_(a + "[" + (typeof e == "object" ? b : "") + "]", e, c, d)
            })
        } else {
            if (!c && f.type(b) === "object") {
                for (var e in b) {
                    b_(a + "[" + e + "]", b[e], c, d)
                }
            } else {
                d(a, b)
            }
        }
    }

    function b$(a, c) {
        var d, e, g = f.ajaxSettings.flatOptions || {};
        for (d in c) {
            c[d] !== b && ((g[d] ? a : e || (e = {}))[d] = c[d])
        }
        e && f.extend(!0, a, e)
    }

    function bZ(a, c, d, e, f, g) {
        f = f || c.dataTypes[0], g = g || {}, g[f] = !0;
        var h = a[f],
            i = 0,
            j = h ? h.length : 0,
            k = a === bS,
            l;
        for (; i < j && (k || !l); i++) {
            l = h[i](c, d, e), typeof l == "string" && (!k || g[l] ? l = b : (c.dataTypes.unshift(l), l = bZ(a, c, d, e, l, g)))
        }(k || !l) && !g["*"] && (l = bZ(a, c, d, e, "*", g));
        return l
    }

    function bY(a) {
        return function (b, c) {
            typeof b != "string" && (c = b, b = "*");
            if (f.isFunction(c)) {
                var d = b.toLowerCase().split(bO),
                    e = 0,
                    g = d.length,
                    h, i, j;
                for (; e < g; e++) {
                    h = d[e], j = /^\+/.test(h), j && (h = h.substr(1) || "*"), i = a[h] = a[h] || [], i[j ? "unshift" : "push"](c)
                }
            }
        }
    }

    function bB(a, b, c) {
        var d = b === "width" ? a.offsetWidth : a.offsetHeight,
            e = b === "width" ? 1 : 0,
            g = 4;
        if (d > 0) {
            if (c !== "border") {
                for (; e < g; e += 2) {
                    c || (d -= parseFloat(f.css(a, "padding" + bx[e])) || 0), c === "margin" ? d += parseFloat(f.css(a, c + bx[e])) || 0 : d -= parseFloat(f.css(a, "border" + bx[e] + "Width")) || 0
                }
            }
            return d + "px"
        }
        d = by(a, b);
        if (d < 0 || d == null) {
            d = a.style[b]
        }
        if (bt.test(d)) {
            return d
        }
        d = parseFloat(d) || 0;
        if (c) {
            for (; e < g; e += 2) {
                d += parseFloat(f.css(a, "padding" + bx[e])) || 0, c !== "padding" && (d += parseFloat(f.css(a, "border" + bx[e] + "Width")) || 0), c === "margin" && (d += parseFloat(f.css(a, c + bx[e])) || 0)
            }
        }
        return d + "px"
    }

    function bo(a) {
        var b = c.createElement("div");
        bh.appendChild(b), b.innerHTML = a.outerHTML;
        return b.firstChild
    }

    function bn(a) {
        var b = (a.nodeName || "").toLowerCase();
        b === "input" ? bm(a) : b !== "script" && typeof a.getElementsByTagName != "undefined" && f.grep(a.getElementsByTagName("input"), bm)
    }

    function bm(a) {
        if (a.type === "checkbox" || a.type === "radio") {
            a.defaultChecked = a.checked
        }
    }

    function bl(a) {
        return typeof a.getElementsByTagName != "undefined" ? a.getElementsByTagName("*") : typeof a.querySelectorAll != "undefined" ? a.querySelectorAll("*") : []
    }

    function bk(a, b) {
        var c;
        b.nodeType === 1 && (b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase(), c === "object" ? b.outerHTML = a.outerHTML : c !== "input" || a.type !== "checkbox" && a.type !== "radio" ? c === "option" ? b.selected = a.defaultSelected : c === "input" || c === "textarea" ? b.defaultValue = a.defaultValue : c === "script" && b.text !== a.text && (b.text = a.text) : (a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value && (b.value = a.value)), b.removeAttribute(f.expando), b.removeAttribute("_submit_attached"), b.removeAttribute("_change_attached"))
    }

    function bj(a, b) {
        if (b.nodeType === 1 && !!f.hasData(a)) {
            var c, d, e, g = f._data(a),
                h = f._data(b, g),
                i = g.events;
            if (i) {
                delete h.handle, h.events = {};
                for (c in i) {
                    for (d = 0, e = i[c].length; d < e; d++) {
                        f.event.add(b, c, i[c][d])
                    }
                }
            }
            h.data && (h.data = f.extend({}, h.data))
        }
    }

    function bi(a, b) {
        return f.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function U(a) {
        var b = V.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement) {
            while (b.length) {
                c.createElement(b.pop())
            }
        }
        return c
    }

    function T(a, b, c) {
        b = b || 0;
        if (f.isFunction(b)) {
            return f.grep(a, function (a, d) {
                var e = !!b.call(a, d, a);
                return e === c
            })
        }
        if (b.nodeType) {
            return f.grep(a, function (a, d) {
                return a === b === c
            })
        }
        if (typeof b == "string") {
            var d = f.grep(a, function (a) {
                return a.nodeType === 1
            });
            if (O.test(b)) {
                return f.filter(b, d, !c)
            }
            b = f.filter(b, d)
        }
        return f.grep(a, function (a, d) {
            return f.inArray(a, b) >= 0 === c
        })
    }

    function S(a) {
        return !a || !a.parentNode || a.parentNode.nodeType === 11
    }

    function K() {
        return !0
    }

    function J() {
        return !1
    }

    function n(a, b, c) {
        var d = b + "defer",
            e = b + "queue",
            g = b + "mark",
            h = f._data(a, d);
        h && (c === "queue" || !f._data(a, e)) && (c === "mark" || !f._data(a, g)) && setTimeout(function () {
            !f._data(a, e) && !f._data(a, g) && (f.removeData(a, d, !0), h.fire())
        }, 0)
    }

    function m(a) {
        for (var b in a) {
            if (b === "data" && f.isEmptyObject(a[b])) {
                continue
            }
            if (b !== "toJSON") {
                return !1
            }
        }
        return !0
    }

    function l(a, c, d) {
        if (d === b && a.nodeType === 1) {
            var e = "data-" + c.replace(k, "-$1").toLowerCase();
            d = a.getAttribute(e);
            if (typeof d == "string") {
                try {
                    d = d === "true" ? !0 : d === "false" ? !1 : d === "null" ? null : f.isNumeric(d) ? +d : j.test(d) ? f.parseJSON(d) : d
                } catch (g) {}
                f.data(a, c, d)
            } else {
                d = b
            }
        }
        return d
    }

    function h(a) {
        var b = g[a] = {},
            c, d;
        a = a.split(/\s+/);
        for (c = 0, d = a.length; c < d; c++) {
            b[a[c]] = !0
        }
        return b
    }
    var c = a.document,
        d = a.navigator,
        e = a.location,
        f = function () {
            function J() {
                if (!e.isReady) {
                    try {
                        c.documentElement.doScroll("left")
                    } catch (a) {
                        setTimeout(J, 1);
                        return
                    }
                    e.ready()
                }
            }
            var e = function (a, b) {
                    return new e.fn.init(a, b, h)
                },
                f = a.jQuery,
                g = a.$,
                h, i = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
                j = /\S/,
                k = /^\s+/,
                l = /\s+$/,
                m = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
                n = /^[\],:{}\s]*$/,
                o = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                p = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                q = /(?:^|:|,)(?:\s*\[)+/g,
                r = /(webkit)[ \/]([\w.]+)/,
                s = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                t = /(msie) ([\w.]+)/,
                u = /(mozilla)(?:.*? rv:([\w.]+))?/,
                v = /-([a-z]|[0-9])/ig,
                w = /^-ms-/,
                x = function (a, b) {
                    return (b + "").toUpperCase()
                },
                y = d.userAgent,
                z, A, B, C = Object.prototype.toString,
                D = Object.prototype.hasOwnProperty,
                E = Array.prototype.push,
                F = Array.prototype.slice,
                G = String.prototype.trim,
                H = Array.prototype.indexOf,
                I = {};
            e.fn = e.prototype = {
                constructor: e,
                init: function (a, d, f) {
                    var g, h, j, k;
                    if (!a) {
                        return this
                    }
                    if (a.nodeType) {
                        this.context = this[0] = a, this.length = 1;
                        return this
                    }
                    if (a === "body" && !d && c.body) {
                        this.context = c, this[0] = c.body, this.selector = a, this.length = 1;
                        return this
                    }
                    if (typeof a == "string") {
                        a.charAt(0) !== "<" || a.charAt(a.length - 1) !== ">" || a.length < 3 ? g = i.exec(a) : g = [null, a, null];
                        if (g && (g[1] || !d)) {
                            if (g[1]) {
                                d = d instanceof e ? d[0] : d, k = d ? d.ownerDocument || d : c, j = m.exec(a), j ? e.isPlainObject(d) ? (a = [c.createElement(j[1])], e.fn.attr.call(a, d, !0)) : a = [k.createElement(j[1])] : (j = e.buildFragment([g[1]], [k]), a = (j.cacheable ? e.clone(j.fragment) : j.fragment).childNodes);
                                return e.merge(this, a)
                            }
                            h = c.getElementById(g[2]);
                            if (h && h.parentNode) {
                                if (h.id !== g[2]) {
                                    return f.find(a)
                                }
                                this.length = 1, this[0] = h
                            }
                            this.context = c, this.selector = a;
                            return this
                        }
                        return !d || d.jquery ? (d || f).find(a) : this.constructor(d).find(a)
                    }
                    if (e.isFunction(a)) {
                        return f.ready(a)
                    }
                    a.selector !== b && (this.selector = a.selector, this.context = a.context);
                    return e.makeArray(a, this)
                },
                selector: "",
                jquery: "1.7.2",
                length: 0,
                size: function () {
                    return this.length
                },
                toArray: function () {
                    return F.call(this, 0)
                },
                get: function (a) {
                    return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
                },
                pushStack: function (a, b, c) {
                    var d = this.constructor();
                    e.isArray(a) ? E.apply(d, a) : e.merge(d, a), d.prevObject = this, d.context = this.context, b === "find" ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")");
                    return d
                },
                each: function (a, b) {
                    return e.each(this, a, b)
                },
                ready: function (a) {
                    e.bindReady(), A.add(a);
                    return this
                },
                eq: function (a) {
                    a = +a;
                    return a === -1 ? this.slice(a) : this.slice(a, a + 1)
                },
                first: function () {
                    return this.eq(0)
                },
                last: function () {
                    return this.eq(-1)
                },
                slice: function () {
                    return this.pushStack(F.apply(this, arguments), "slice", F.call(arguments).join(","))
                },
                map: function (a) {
                    return this.pushStack(e.map(this, function (b, c) {
                        return a.call(b, c, b)
                    }))
                },
                end: function () {
                    return this.prevObject || this.constructor(null)
                },
                push: E,
                sort: [].sort,
                splice: [].splice
            }, e.fn.init.prototype = e.fn, e.extend = e.fn.extend = function () {
                var a, c, d, f, g, h, i = arguments[0] || {},
                    j = 1,
                    k = arguments.length,
                    l = !1;
                typeof i == "boolean" && (l = i, i = arguments[1] || {}, j = 2), typeof i != "object" && !e.isFunction(i) && (i = {}), k === j && (i = this, --j);
                for (; j < k; j++) {
                    if ((a = arguments[j]) != null) {
                        for (c in a) {
                            d = i[c], f = a[c];
                            if (i === f) {
                                continue
                            }
                            l && f && (e.isPlainObject(f) || (g = e.isArray(f))) ? (g ? (g = !1, h = d && e.isArray(d) ? d : []) : h = d && e.isPlainObject(d) ? d : {}, i[c] = e.extend(l, h, f)) : f !== b && (i[c] = f)
                        }
                    }
                }
                return i
            }, e.extend({
                noConflict: function (b) {
                    a.$ === e && (a.$ = g), b && a.jQuery === e && (a.jQuery = f);
                    return e
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function (a) {
                    a ? e.readyWait++ : e.ready(!0)
                },
                ready: function (a) {
                    if (a === !0 && !--e.readyWait || a !== !0 && !e.isReady) {
                        if (!c.body) {
                            return setTimeout(e.ready, 1)
                        }
                        e.isReady = !0;
                        if (a !== !0 && --e.readyWait > 0) {
                            return
                        }
                        A.fireWith(c, [e]), e.fn.trigger && e(c).trigger("ready").off("ready")
                    }
                },
                bindReady: function () {
                    if (!A) {
                        A = e.Callbacks("once memory");
                        if (c.readyState === "complete") {
                            return setTimeout(e.ready, 1)
                        }
                        if (c.addEventListener) {
                            c.addEventListener("DOMContentLoaded", B, !1), a.addEventListener("load", e.ready, !1)
                        } else {
                            if (c.attachEvent) {
                                c.attachEvent("onreadystatechange", B), a.attachEvent("onload", e.ready);
                                var b = !1;
                                try {
                                    b = a.frameElement == null
                                } catch (d) {}
                                c.documentElement.doScroll && b && J()
                            }
                        }
                    }
                },
                isFunction: function (a) {
                    return e.type(a) === "function"
                },
                isArray: Array.isArray || function (a) {
                    return e.type(a) === "array"
                },
                isWindow: function (a) {
                    return a != null && a == a.window
                },
                isNumeric: function (a) {
                    return !isNaN(parseFloat(a)) && isFinite(a)
                },
                type: function (a) {
                    return a == null ? String(a) : I[C.call(a)] || "object"
                },
                isPlainObject: function (a) {
                    if (!a || e.type(a) !== "object" || a.nodeType || e.isWindow(a)) {
                        return !1
                    }
                    try {
                        if (a.constructor && !D.call(a, "constructor") && !D.call(a.constructor.prototype, "isPrototypeOf")) {
                            return !1
                        }
                    } catch (c) {
                        return !1
                    }
                    var d;
                    for (d in a) {}
                    return d === b || D.call(a, d)
                },
                isEmptyObject: function (a) {
                    for (var b in a) {
                        return !1
                    }
                    return !0
                },
                error: function (a) {
                    throw new Error(a)
                },
                parseJSON: function (b) {
                    if (typeof b != "string" || !b) {
                        return null
                    }
                    b = e.trim(b);
                    if (a.JSON && a.JSON.parse) {
                        return a.JSON.parse(b)
                    }
                    if (n.test(b.replace(o, "@").replace(p, "]").replace(q, ""))) {
                        return (new Function("return " + b))()
                    }
                    e.error("Invalid JSON: " + b)
                },
                parseXML: function (c) {
                    if (typeof c != "string" || !c) {
                        return null
                    }
                    var d, f;
                    try {
                        a.DOMParser ? (f = new DOMParser, d = f.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
                    } catch (g) {
                        d = b
                    }(!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && e.error("Invalid XML: " + c);
                    return d
                },
                noop: function () {},
                globalEval: function (b) {
                    b && j.test(b) && (a.execScript || function (b) {
                        a.eval.call(a, b)
                    })(b)
                },
                camelCase: function (a) {
                    return a.replace(w, "ms-").replace(v, x)
                },
                nodeName: function (a, b) {
                    return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
                },
                each: function (a, c, d) {
                    var f, g = 0,
                        h = a.length,
                        i = h === b || e.isFunction(a);
                    if (d) {
                        if (i) {
                            for (f in a) {
                                if (c.apply(a[f], d) === !1) {
                                    break
                                }
                            }
                        } else {
                            for (; g < h;) {
                                if (c.apply(a[g++], d) === !1) {
                                    break
                                }
                            }
                        }
                    } else {
                        if (i) {
                            for (f in a) {
                                if (c.call(a[f], f, a[f]) === !1) {
                                    break
                                }
                            }
                        } else {
                            for (; g < h;) {
                                if (c.call(a[g], g, a[g++]) === !1) {
                                    break
                                }
                            }
                        }
                    }
                    return a
                },
                trim: G ? function (a) {
                    return a == null ? "" : G.call(a)
                } : function (a) {
                    return a == null ? "" : (a + "").replace(k, "").replace(l, "")
                },
                makeArray: function (a, b) {
                    var c = b || [];
                    if (a != null) {
                        var d = e.type(a);
                        a.length == null || d === "string" || d === "function" || d === "regexp" || e.isWindow(a) ? E.call(c, a) : e.merge(c, a)
                    }
                    return c
                },
                inArray: function (a, b, c) {
                    var d;
                    if (b) {
                        if (H) {
                            return H.call(b, a, c)
                        }
                        d = b.length, c = c ? c < 0 ? Math.max(0, d + c) : c : 0;
                        for (; c < d; c++) {
                            if (c in b && b[c] === a) {
                                return c
                            }
                        }
                    }
                    return -1
                },
                merge: function (a, c) {
                    var d = a.length,
                        e = 0;
                    if (typeof c.length == "number") {
                        for (var f = c.length; e < f; e++) {
                            a[d++] = c[e]
                        }
                    } else {
                        while (c[e] !== b) {
                            a[d++] = c[e++]
                        }
                    }
                    a.length = d;
                    return a
                },
                grep: function (a, b, c) {
                    var d = [],
                        e;
                    c = !!c;
                    for (var f = 0, g = a.length; f < g; f++) {
                        e = !!b(a[f], f), c !== e && d.push(a[f])
                    }
                    return d
                },
                map: function (a, c, d) {
                    var f, g, h = [],
                        i = 0,
                        j = a.length,
                        k = a instanceof e || j !== b && typeof j == "number" && (j > 0 && a[0] && a[j - 1] || j === 0 || e.isArray(a));
                    if (k) {
                        for (; i < j; i++) {
                            f = c(a[i], i, d), f != null && (h[h.length] = f)
                        }
                    } else {
                        for (g in a) {
                            f = c(a[g], g, d), f != null && (h[h.length] = f)
                        }
                    }
                    return h.concat.apply([], h)
                },
                guid: 1,
                proxy: function (a, c) {
                    if (typeof c == "string") {
                        var d = a[c];
                        c = a, a = d
                    }
                    if (!e.isFunction(a)) {
                        return b
                    }
                    var f = F.call(arguments, 2),
                        g = function () {
                            return a.apply(c, f.concat(F.call(arguments)))
                        };
                    g.guid = a.guid = a.guid || g.guid || e.guid++;
                    return g
                },
                access: function (a, c, d, f, g, h, i) {
                    var j, k = d == null,
                        l = 0,
                        m = a.length;
                    if (d && typeof d == "object") {
                        for (l in d) {
                            e.access(a, c, l, d[l], 1, h, f)
                        }
                        g = 1
                    } else {
                        if (f !== b) {
                            j = i === b && e.isFunction(f), k && (j ? (j = c, c = function (a, b, c) {
                                return j.call(e(a), c)
                            }) : (c.call(a, f), c = null));
                            if (c) {
                                for (; l < m; l++) {
                                    c(a[l], d, j ? f.call(a[l], l, c(a[l], d)) : f, i)
                                }
                            }
                            g = 1
                        }
                    }
                    return g ? a : k ? c.call(a) : m ? c(a[0], d) : h
                },
                now: function () {
                    return (new Date).getTime()
                },
                uaMatch: function (a) {
                    a = a.toLowerCase();
                    var b = r.exec(a) || s.exec(a) || t.exec(a) || a.indexOf("compatible") < 0 && u.exec(a) || [];
                    return {
                        browser: b[1] || "",
                        version: b[2] || "0"
                    }
                },
                sub: function () {
                    function a(b, c) {
                        return new a.fn.init(b, c)
                    }
                    e.extend(!0, a, this), a.superclass = this, a.fn = a.prototype = this(), a.fn.constructor = a, a.sub = this.sub, a.fn.init = function (d, f) {
                        f && f instanceof e && !(f instanceof a) && (f = a(f));
                        return e.fn.init.call(this, d, f, b)
                    }, a.fn.init.prototype = a.fn;
                    var b = a(c);
                    return a
                },
                browser: {}
            }), e.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (a, b) {
                I["[object " + b + "]"] = b.toLowerCase()
            }), z = e.uaMatch(y), z.browser && (e.browser[z.browser] = !0, e.browser.version = z.version), e.browser.webkit && (e.browser.safari = !0), j.test(" ") && (k = /^[\s\xA0]+/, l = /[\s\xA0]+$/), h = e(c), c.addEventListener ? B = function () {
                c.removeEventListener("DOMContentLoaded", B, !1), e.ready()
            } : c.attachEvent && (B = function () {
                c.readyState === "complete" && (c.detachEvent("onreadystatechange", B), e.ready())
            });
            return e
        }(),
        g = {};
    f.Callbacks = function (a) {
        a = a ? g[a] || h(a) : {};
        var c = [],
            d = [],
            e, i, j, k, l, m, n = function (b) {
                var d, e, g, h, i;
                for (d = 0, e = b.length; d < e; d++) {
                    g = b[d], h = f.type(g), h === "array" ? n(g) : h === "function" && (!a.unique || !p.has(g)) && c.push(g)
                }
            },
            o = function (b, f) {
                f = f || [], e = !a.memory || [b, f], i = !0, j = !0, m = k || 0, k = 0, l = c.length;
                for (; c && m < l; m++) {
                    if (c[m].apply(b, f) === !1 && a.stopOnFalse) {
                        e = !0;
                        break
                    }
                }
                j = !1, c && (a.once ? e === !0 ? p.disable() : c = [] : d && d.length && (e = d.shift(), p.fireWith(e[0], e[1])))
            },
            p = {
                add: function () {
                    if (c) {
                        var a = c.length;
                        n(arguments), j ? l = c.length : e && e !== !0 && (k = a, o(e[0], e[1]))
                    }
                    return this
                },
                remove: function () {
                    if (c) {
                        var b = arguments,
                            d = 0,
                            e = b.length;
                        for (; d < e; d++) {
                            for (var f = 0; f < c.length; f++) {
                                if (b[d] === c[f]) {
                                    j && f <= l && (l--, f <= m && m--), c.splice(f--, 1);
                                    if (a.unique) {
                                        break
                                    }
                                }
                            }
                        }
                    }
                    return this
                },
                has: function (a) {
                    if (c) {
                        var b = 0,
                            d = c.length;
                        for (; b < d; b++) {
                            if (a === c[b]) {
                                return !0
                            }
                        }
                    }
                    return !1
                },
                empty: function () {
                    c = [];
                    return this
                },
                disable: function () {
                    c = d = e = b;
                    return this
                },
                disabled: function () {
                    return !c
                },
                lock: function () {
                    d = b, (!e || e === !0) && p.disable();
                    return this
                },
                locked: function () {
                    return !d
                },
                fireWith: function (b, c) {
                    d && (j ? a.once || d.push([b, c]) : (!a.once || !e) && o(b, c));
                    return this
                },
                fire: function () {
                    p.fireWith(this, arguments);
                    return this
                },
                fired: function () {
                    return !!i
                }
            };
        return p
    };
    var i = [].slice;
    f.extend({
        Deferred: function (a) {
            var b = f.Callbacks("once memory"),
                c = f.Callbacks("once memory"),
                d = f.Callbacks("memory"),
                e = "pending",
                g = {
                    resolve: b,
                    reject: c,
                    notify: d
                },
                h = {
                    done: b.add,
                    fail: c.add,
                    progress: d.add,
                    state: function () {
                        return e
                    },
                    isResolved: b.fired,
                    isRejected: c.fired,
                    then: function (a, b, c) {
                        i.done(a).fail(b).progress(c);
                        return this
                    },
                    always: function () {
                        i.done.apply(i, arguments).fail.apply(i, arguments);
                        return this
                    },
                    pipe: function (a, b, c) {
                        return f.Deferred(function (d) {
                            f.each({
                                done: [a, "resolve"],
                                fail: [b, "reject"],
                                progress: [c, "notify"]
                            }, function (a, b) {
                                var c = b[0],
                                    e = b[1],
                                    g;
                                f.isFunction(c) ? i[a](function () {
                                    g = c.apply(this, arguments), g && f.isFunction(g.promise) ? g.promise().then(d.resolve, d.reject, d.notify) : d[e + "With"](this === i ? d : this, [g])
                                }) : i[a](d[e])
                            })
                        }).promise()
                    },
                    promise: function (a) {
                        if (a == null) {
                            a = h
                        } else {
                            for (var b in h) {
                                a[b] = h[b]
                            }
                        }
                        return a
                    }
                },
                i = h.promise({}),
                j;
            for (j in g) {
                i[j] = g[j].fire, i[j + "With"] = g[j].fireWith
            }
            i.done(function () {
                e = "resolved"
            }, c.disable, d.lock).fail(function () {
                e = "rejected"
            }, b.disable, d.lock), a && a.call(i, i);
            return i
        },
        when: function (a) {
            function m(a) {
                return function (b) {
                    e[a] = arguments.length > 1 ? i.call(arguments, 0) : b, j.notifyWith(k, e)
                }
            }

            function l(a) {
                return function (c) {
                    b[a] = arguments.length > 1 ? i.call(arguments, 0) : c, --g || j.resolveWith(j, b)
                }
            }
            var b = i.call(arguments, 0),
                c = 0,
                d = b.length,
                e = Array(d),
                g = d,
                h = d,
                j = d <= 1 && a && f.isFunction(a.promise) ? a : f.Deferred(),
                k = j.promise();
            if (d > 1) {
                for (; c < d; c++) {
                    b[c] && b[c].promise && f.isFunction(b[c].promise) ? b[c].promise().then(l(c), j.reject, m(c)) : --g
                }
                g || j.resolveWith(j, b)
            } else {
                j !== a && j.resolveWith(j, d ? [a] : [])
            }
            return k
        }
    }), f.support = function () {
        var b, d, e, g, h, i, j, k, l, m, n, o, p = c.createElement("div"),
            q = c.documentElement;
        p.setAttribute("className", "t"), p.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", d = p.getElementsByTagName("*"), e = p.getElementsByTagName("a")[0];
        if (!d || !d.length || !e) {
            return {}
        }
        g = c.createElement("select"), h = g.appendChild(c.createElement("option")), i = p.getElementsByTagName("input")[0], b = {
            leadingWhitespace: p.firstChild.nodeType === 3,
            tbody: !p.getElementsByTagName("tbody").length,
            htmlSerialize: !!p.getElementsByTagName("link").length,
            style: /top/.test(e.getAttribute("style")),
            hrefNormalized: e.getAttribute("href") === "/a",
            opacity: /^0.55/.test(e.style.opacity),
            cssFloat: !!e.style.cssFloat,
            checkOn: i.value === "on",
            optSelected: h.selected,
            getSetAttribute: p.className !== "t",
            enctype: !!c.createElement("form").enctype,
            html5Clone: c.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            pixelMargin: !0
        }, f.boxModel = b.boxModel = c.compatMode === "CSS1Compat", i.checked = !0, b.noCloneChecked = i.cloneNode(!0).checked, g.disabled = !0, b.optDisabled = !h.disabled;
        try {
            delete p.test
        } catch (r) {
            b.deleteExpando = !1
        }!p.addEventListener && p.attachEvent && p.fireEvent && (p.attachEvent("onclick", function () {
            b.noCloneEvent = !1
        }), p.cloneNode(!0).fireEvent("onclick")), i = c.createElement("input"), i.value = "t", i.setAttribute("type", "radio"), b.radioValue = i.value === "t", i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), p.appendChild(i), j = c.createDocumentFragment(), j.appendChild(p.lastChild), b.checkClone = j.cloneNode(!0).cloneNode(!0).lastChild.checked, b.appendChecked = i.checked, j.removeChild(i), j.appendChild(p);
        if (p.attachEvent) {
            for (n in {
                submit: 1,
                change: 1,
                focusin: 1
            }) {
                m = "on" + n, o = m in p, o || (p.setAttribute(m, "return;"), o = typeof p[m] == "function"), b[n + "Bubbles"] = o
            }
        }
        j.removeChild(p), j = g = h = p = i = null, f(function () {
            var d, e, g, h, i, j, l, m, n, q, r, s, t, u = c.getElementsByTagName("body")[0];
            !u || (m = 1, t = "padding:0;margin:0;border:", r = "position:absolute;top:0;left:0;width:1px;height:1px;", s = t + "0;visibility:hidden;", n = "style='" + r + t + "5px solid #000;", q = "<div " + n + "display:block;'><div style='" + t + "0;display:block;overflow:hidden;'></div></div><table " + n + "' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>", d = c.createElement("div"), d.style.cssText = s + "width:0;height:0;position:static;top:0;margin-top:" + m + "px", u.insertBefore(d, u.firstChild), p = c.createElement("div"), d.appendChild(p), p.innerHTML = "<table><tr><td style='" + t + "0;display:none'></td><td>t</td></tr></table>", k = p.getElementsByTagName("td"), o = k[0].offsetHeight === 0, k[0].style.display = "", k[1].style.display = "none", b.reliableHiddenOffsets = o && k[0].offsetHeight === 0, a.getComputedStyle && (p.innerHTML = "", l = c.createElement("div"), l.style.width = "0", l.style.marginRight = "0", p.style.width = "2px", p.appendChild(l), b.reliableMarginRight = (parseInt((a.getComputedStyle(l, null) || {
                marginRight: 0
            }).marginRight, 10) || 0) === 0), typeof p.style.zoom != "undefined" && (p.innerHTML = "", p.style.width = p.style.padding = "1px", p.style.border = 0, p.style.overflow = "hidden", p.style.display = "inline", p.style.zoom = 1, b.inlineBlockNeedsLayout = p.offsetWidth === 3, p.style.display = "block", p.style.overflow = "visible", p.innerHTML = "<div style='width:5px;'></div>", b.shrinkWrapBlocks = p.offsetWidth !== 3), p.style.cssText = r + s, p.innerHTML = q, e = p.firstChild, g = e.firstChild, i = e.nextSibling.firstChild.firstChild, j = {
                doesNotAddBorder: g.offsetTop !== 5,
                doesAddBorderForTableAndCells: i.offsetTop === 5
            }, g.style.position = "fixed", g.style.top = "20px", j.fixedPosition = g.offsetTop === 20 || g.offsetTop === 15, g.style.position = g.style.top = "", e.style.overflow = "hidden", e.style.position = "relative", j.subtractsBorderForOverflowNotVisible = g.offsetTop === -5, j.doesNotIncludeMarginInBodyOffset = u.offsetTop !== m, a.getComputedStyle && (p.style.marginTop = "1%", b.pixelMargin = (a.getComputedStyle(p, null) || {
                marginTop: 0
            }).marginTop !== "1%"), typeof d.style.zoom != "undefined" && (d.style.zoom = 1), u.removeChild(d), l = p = d = null, f.extend(b, j))
        });
        return b
    }();
    var j = /^(?:\{.*\}|\[.*\])$/,
        k = /([A-Z])/g;
    f.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (f.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function (a) {
            a = a.nodeType ? f.cache[a[f.expando]] : a[f.expando];
            return !!a && !m(a)
        },
        data: function (a, c, d, e) {
            if (!!f.acceptData(a)) {
                var g, h, i, j = f.expando,
                    k = typeof c == "string",
                    l = a.nodeType,
                    m = l ? f.cache : a,
                    n = l ? a[j] : a[j] && j,
                    o = c === "events";
                if ((!n || !m[n] || !o && !e && !m[n].data) && k && d === b) {
                    return
                }
                n || (l ? a[j] = n = ++f.uuid : n = j), m[n] || (m[n] = {}, l || (m[n].toJSON = f.noop));
                if (typeof c == "object" || typeof c == "function") {
                    e ? m[n] = f.extend(m[n], c) : m[n].data = f.extend(m[n].data, c)
                }
                g = h = m[n], e || (h.data || (h.data = {}), h = h.data), d !== b && (h[f.camelCase(c)] = d);
                if (o && !h[c]) {
                    return g.events
                }
                k ? (i = h[c], i == null && (i = h[f.camelCase(c)])) : i = h;
                return i
            }
        },
        removeData: function (a, b, c) {
            if (!!f.acceptData(a)) {
                var d, e, g, h = f.expando,
                    i = a.nodeType,
                    j = i ? f.cache : a,
                    k = i ? a[h] : h;
                if (!j[k]) {
                    return
                }
                if (b) {
                    d = c ? j[k] : j[k].data;
                    if (d) {
                        f.isArray(b) || (b in d ? b = [b] : (b = f.camelCase(b), b in d ? b = [b] : b = b.split(" ")));
                        for (e = 0, g = b.length; e < g; e++) {
                            delete d[b[e]]
                        }
                        if (!(c ? m : f.isEmptyObject)(d)) {
                            return
                        }
                    }
                }
                if (!c) {
                    delete j[k].data;
                    if (!m(j[k])) {
                        return
                    }
                }
                f.support.deleteExpando || !j.setInterval ? delete j[k] : j[k] = null, i && (f.support.deleteExpando ? delete a[h] : a.removeAttribute ? a.removeAttribute(h) : a[h] = null)
            }
        },
        _data: function (a, b, c) {
            return f.data(a, b, c, !0)
        },
        acceptData: function (a) {
            if (a.nodeName) {
                var b = f.noData[a.nodeName.toLowerCase()];
                if (b) {
                    return b !== !0 && a.getAttribute("classid") === b
                }
            }
            return !0
        }
    }), f.fn.extend({
        data: function (a, c) {
            var d, e, g, h, i, j = this[0],
                k = 0,
                m = null;
            if (a === b) {
                if (this.length) {
                    m = f.data(j);
                    if (j.nodeType === 1 && !f._data(j, "parsedAttrs")) {
                        g = j.attributes;
                        for (i = g.length; k < i; k++) {
                            h = g[k].name, h.indexOf("data-") === 0 && (h = f.camelCase(h.substring(5)), l(j, h, m[h]))
                        }
                        f._data(j, "parsedAttrs", !0)
                    }
                }
                return m
            }
            if (typeof a == "object") {
                return this.each(function () {
                    f.data(this, a)
                })
            }
            d = a.split(".", 2), d[1] = d[1] ? "." + d[1] : "", e = d[1] + "!";
            return f.access(this, function (c) {
                if (c === b) {
                    m = this.triggerHandler("getData" + e, [d[0]]), m === b && j && (m = f.data(j, a), m = l(j, a, m));
                    return m === b && d[1] ? this.data(d[0]) : m
                }
                d[1] = c, this.each(function () {
                    var b = f(this);
                    b.triggerHandler("setData" + e, d), f.data(this, a, c), b.triggerHandler("changeData" + e, d)
                })
            }, null, c, arguments.length > 1, null, !1)
        },
        removeData: function (a) {
            return this.each(function () {
                f.removeData(this, a)
            })
        }
    }), f.extend({
        _mark: function (a, b) {
            a && (b = (b || "fx") + "mark", f._data(a, b, (f._data(a, b) || 0) + 1))
        },
        _unmark: function (a, b, c) {
            a !== !0 && (c = b, b = a, a = !1);
            if (b) {
                c = c || "fx";
                var d = c + "mark",
                    e = a ? 0 : (f._data(b, d) || 1) - 1;
                e ? f._data(b, d, e) : (f.removeData(b, d, !0), n(b, c, "mark"))
            }
        },
        queue: function (a, b, c) {
            var d;
            if (a) {
                b = (b || "fx") + "queue", d = f._data(a, b), c && (!d || f.isArray(c) ? d = f._data(a, b, f.makeArray(c)) : d.push(c));
                return d || []
            }
        },
        dequeue: function (a, b) {
            b = b || "fx";
            var c = f.queue(a, b),
                d = c.shift(),
                e = {};
            d === "inprogress" && (d = c.shift()), d && (b === "fx" && c.unshift("inprogress"), f._data(a, b + ".run", e), d.call(a, function () {
                f.dequeue(a, b)
            }, e)), c.length || (f.removeData(a, b + "queue " + b + ".run", !0), n(a, b, "queue"))
        }
    }), f.fn.extend({
        queue: function (a, c) {
            var d = 2;
            typeof a != "string" && (c = a, a = "fx", d--);
            if (arguments.length < d) {
                return f.queue(this[0], a)
            }
            return c === b ? this : this.each(function () {
                var b = f.queue(this, a, c);
                a === "fx" && b[0] !== "inprogress" && f.dequeue(this, a)
            })
        },
        dequeue: function (a) {
            return this.each(function () {
                f.dequeue(this, a)
            })
        },
        delay: function (a, b) {
            a = f.fx ? f.fx.speeds[a] || a : a, b = b || "fx";
            return this.queue(b, function (b, c) {
                var d = setTimeout(b, a);
                c.stop = function () {
                    clearTimeout(d)
                }
            })
        },
        clearQueue: function (a) {
            return this.queue(a || "fx", [])
        },
        promise: function (a, c) {
            function m() {
                --h || d.resolveWith(e, [e])
            }
            typeof a != "string" && (c = a, a = b), a = a || "fx";
            var d = f.Deferred(),
                e = this,
                g = e.length,
                h = 1,
                i = a + "defer",
                j = a + "queue",
                k = a + "mark",
                l;
            while (g--) {
                if (l = f.data(e[g], i, b, !0) || (f.data(e[g], j, b, !0) || f.data(e[g], k, b, !0)) && f.data(e[g], i, f.Callbacks("once memory"), !0)) {
                    h++, l.add(m)
                }
            }
            m();
            return d.promise(c)
        }
    });
    var o = /[\n\t\r]/g,
        p = /\s+/,
        q = /\r/g,
        r = /^(?:button|input)$/i,
        s = /^(?:button|input|object|select|textarea)$/i,
        t = /^a(?:rea)?$/i,
        u = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        v = f.support.getSetAttribute,
        w, x, y;
    f.fn.extend({
        attr: function (a, b) {
            return f.access(this, f.attr, a, b, arguments.length > 1)
        },
        removeAttr: function (a) {
            return this.each(function () {
                f.removeAttr(this, a)
            })
        },
        prop: function (a, b) {
            return f.access(this, f.prop, a, b, arguments.length > 1)
        },
        removeProp: function (a) {
            a = f.propFix[a] || a;
            return this.each(function () {
                try {
                    this[a] = b, delete this[a]
                } catch (c) {}
            })
        },
        addClass: function (a) {
            var b, c, d, e, g, h, i;
            if (f.isFunction(a)) {
                return this.each(function (b) {
                    f(this).addClass(a.call(this, b, this.className))
                })
            }
            if (a && typeof a == "string") {
                b = a.split(p);
                for (c = 0, d = this.length; c < d; c++) {
                    e = this[c];
                    if (e.nodeType === 1) {
                        if (!e.className && b.length === 1) {
                            e.className = a
                        } else {
                            g = " " + e.className + " ";
                            for (h = 0, i = b.length; h < i; h++) {
                                ~g.indexOf(" " + b[h] + " ") || (g += b[h] + " ")
                            }
                            e.className = f.trim(g)
                        }
                    }
                }
            }
            return this
        },
        removeClass: function (a) {
            var c, d, e, g, h, i, j;
            if (f.isFunction(a)) {
                return this.each(function (b) {
                    f(this).removeClass(a.call(this, b, this.className))
                })
            }
            if (a && typeof a == "string" || a === b) {
                c = (a || "").split(p);
                for (d = 0, e = this.length; d < e; d++) {
                    g = this[d];
                    if (g.nodeType === 1 && g.className) {
                        if (a) {
                            h = (" " + g.className + " ").replace(o, " ");
                            for (i = 0, j = c.length; i < j; i++) {
                                h = h.replace(" " + c[i] + " ", " ")
                            }
                            g.className = f.trim(h)
                        } else {
                            g.className = ""
                        }
                    }
                }
            }
            return this
        },
        toggleClass: function (a, b) {
            var c = typeof a,
                d = typeof b == "boolean";
            if (f.isFunction(a)) {
                return this.each(function (c) {
                    f(this).toggleClass(a.call(this, c, this.className, b), b)
                })
            }
            return this.each(function () {
                if (c === "string") {
                    var e, g = 0,
                        h = f(this),
                        i = b,
                        j = a.split(p);
                    while (e = j[g++]) {
                        i = d ? i : !h.hasClass(e), h[i ? "addClass" : "removeClass"](e)
                    }
                } else {
                    if (c === "undefined" || c === "boolean") {
                        this.className && f._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : f._data(this, "__className__") || ""
                    }
                }
            })
        },
        hasClass: function (a) {
            var b = " " + a + " ",
                c = 0,
                d = this.length;
            for (; c < d; c++) {
                if (this[c].nodeType === 1 && (" " + this[c].className + " ").replace(o, " ").indexOf(b) > -1) {
                    return !0
                }
            }
            return !1
        },
        val: function (a) {
            var c, d, e, g = this[0];
            if (!!arguments.length) {
                e = f.isFunction(a);
                return this.each(function (d) {
                    var g = f(this),
                        h;
                    if (this.nodeType === 1) {
                        e ? h = a.call(this, d, g.val()) : h = a, h == null ? h = "" : typeof h == "number" ? h += "" : f.isArray(h) && (h = f.map(h, function (a) {
                            return a == null ? "" : a + ""
                        })), c = f.valHooks[this.type] || f.valHooks[this.nodeName.toLowerCase()];
                        if (!c || !("set" in c) || c.set(this, h, "value") === b) {
                            this.value = h
                        }
                    }
                })
            }
            if (g) {
                c = f.valHooks[g.type] || f.valHooks[g.nodeName.toLowerCase()];
                if (c && "get" in c && (d = c.get(g, "value")) !== b) {
                    return d
                }
                d = g.value;
                return typeof d == "string" ? d.replace(q, "") : d == null ? "" : d
            }
        }
    }), f.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = a.attributes.value;
                    return !b || b.specified ? a.value : a.text
                }
            },
            select: {
                get: function (a) {
                    var b, c, d, e, g = a.selectedIndex,
                        h = [],
                        i = a.options,
                        j = a.type === "select-one";
                    if (g < 0) {
                        return null
                    }
                    c = j ? g : 0, d = j ? g + 1 : i.length;
                    for (; c < d; c++) {
                        e = i[c];
                        if (e.selected && (f.support.optDisabled ? !e.disabled : e.getAttribute("disabled") === null) && (!e.parentNode.disabled || !f.nodeName(e.parentNode, "optgroup"))) {
                            b = f(e).val();
                            if (j) {
                                return b
                            }
                            h.push(b)
                        }
                    }
                    if (j && !h.length && i.length) {
                        return f(i[g]).val()
                    }
                    return h
                },
                set: function (a, b) {
                    var c = f.makeArray(b);
                    f(a).find("option").each(function () {
                        this.selected = f.inArray(f(this).val(), c) >= 0
                    }), c.length || (a.selectedIndex = -1);
                    return c
                }
            }
        },
        attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0
        },
        attr: function (a, c, d, e) {
            var g, h, i, j = a.nodeType;
            if (!!a && j !== 3 && j !== 8 && j !== 2) {
                if (e && c in f.attrFn) {
                    return f(a)[c](d)
                }
                if (typeof a.getAttribute == "undefined") {
                    return f.prop(a, c, d)
                }
                i = j !== 1 || !f.isXMLDoc(a), i && (c = c.toLowerCase(), h = f.attrHooks[c] || (u.test(c) ? x : w));
                if (d !== b) {
                    if (d === null) {
                        f.removeAttr(a, c);
                        return
                    }
                    if (h && "set" in h && i && (g = h.set(a, d, c)) !== b) {
                        return g
                    }
                    a.setAttribute(c, "" + d);
                    return d
                }
                if (h && "get" in h && i && (g = h.get(a, c)) !== null) {
                    return g
                }
                g = a.getAttribute(c);
                return g === null ? b : g
            }
        },
        removeAttr: function (a, b) {
            var c, d, e, g, h, i = 0;
            if (b && a.nodeType === 1) {
                d = b.toLowerCase().split(p), g = d.length;
                for (; i < g; i++) {
                    e = d[i], e && (c = f.propFix[e] || e, h = u.test(e), h || f.attr(a, e, ""), a.removeAttribute(v ? e : c), h && c in a && (a[c] = !1))
                }
            }
        },
        attrHooks: {
            type: {
                set: function (a, b) {
                    if (r.test(a.nodeName) && a.parentNode) {
                        f.error("type property can't be changed")
                    } else {
                        if (!f.support.radioValue && b === "radio" && f.nodeName(a, "input")) {
                            var c = a.value;
                            a.setAttribute("type", b), c && (a.value = c);
                            return b
                        }
                    }
                }
            },
            value: {
                get: function (a, b) {
                    if (w && f.nodeName(a, "button")) {
                        return w.get(a, b)
                    }
                    return b in a ? a.value : null
                },
                set: function (a, b, c) {
                    if (w && f.nodeName(a, "button")) {
                        return w.set(a, b, c)
                    }
                    a.value = b
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (a, c, d) {
            var e, g, h, i = a.nodeType;
            if (!!a && i !== 3 && i !== 8 && i !== 2) {
                h = i !== 1 || !f.isXMLDoc(a), h && (c = f.propFix[c] || c, g = f.propHooks[c]);
                return d !== b ? g && "set" in g && (e = g.set(a, d, c)) !== b ? e : a[c] = d : g && "get" in g && (e = g.get(a, c)) !== null ? e : a[c]
            }
        },
        propHooks: {
            tabIndex: {
                get: function (a) {
                    var c = a.getAttributeNode("tabindex");
                    return c && c.specified ? parseInt(c.value, 10) : s.test(a.nodeName) || t.test(a.nodeName) && a.href ? 0 : b
                }
            }
        }
    }), f.attrHooks.tabindex = f.propHooks.tabIndex, x = {
        get: function (a, c) {
            var d, e = f.prop(a, c);
            return e === !0 || typeof e != "boolean" && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
        },
        set: function (a, b, c) {
            var d;
            b === !1 ? f.removeAttr(a, c) : (d = f.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase()));
            return c
        }
    }, v || (y = {
        name: !0,
        id: !0,
        coords: !0
    }, w = f.valHooks.button = {
        get: function (a, c) {
            var d;
            d = a.getAttributeNode(c);
            return d && (y[c] ? d.nodeValue !== "" : d.specified) ? d.nodeValue : b
        },
        set: function (a, b, d) {
            var e = a.getAttributeNode(d);
            e || (e = c.createAttribute(d), a.setAttributeNode(e));
            return e.nodeValue = b + ""
        }
    }, f.attrHooks.tabindex.set = w.set, f.each(["width", "height"], function (a, b) {
        f.attrHooks[b] = f.extend(f.attrHooks[b], {
            set: function (a, c) {
                if (c === "") {
                    a.setAttribute(b, "auto");
                    return c
                }
            }
        })
    }), f.attrHooks.contenteditable = {
        get: w.get,
        set: function (a, b, c) {
            b === "" && (b = "false"), w.set(a, b, c)
        }
    }), f.support.hrefNormalized || f.each(["href", "src", "width", "height"], function (a, c) {
        f.attrHooks[c] = f.extend(f.attrHooks[c], {
            get: function (a) {
                var d = a.getAttribute(c, 2);
                return d === null ? b : d
            }
        })
    }), f.support.style || (f.attrHooks.style = {
        get: function (a) {
            return a.style.cssText.toLowerCase() || b
        },
        set: function (a, b) {
            return a.style.cssText = "" + b
        }
    }), f.support.optSelected || (f.propHooks.selected = f.extend(f.propHooks.selected, {
        get: function (a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
            return null
        }
    })), f.support.enctype || (f.propFix.enctype = "encoding"), f.support.checkOn || f.each(["radio", "checkbox"], function () {
        f.valHooks[this] = {
            get: function (a) {
                return a.getAttribute("value") === null ? "on" : a.value
            }
        }
    }), f.each(["radio", "checkbox"], function () {
        f.valHooks[this] = f.extend(f.valHooks[this], {
            set: function (a, b) {
                if (f.isArray(b)) {
                    return a.checked = f.inArray(f(a).val(), b) >= 0
                }
            }
        })
    });
    var z = /^(?:textarea|input|select)$/i,
        A = /^([^\.]*)?(?:\.(.+))?$/,
        B = /(?:^|\s)hover(\.\S+)?\b/,
        C = /^key/,
        D = /^(?:mouse|contextmenu)|click/,
        E = /^(?:focusinfocus|focusoutblur)$/,
        F = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
        G = function (a) {
            var b = F.exec(a);
            b && (b[1] = (b[1] || "").toLowerCase(), b[3] = b[3] && new RegExp("(?:^|\\s)" + b[3] + "(?:\\s|$)"));
            return b
        },
        H = function (a, b) {
            var c = a.attributes || {};
            return (!b[1] || a.nodeName.toLowerCase() === b[1]) && (!b[2] || (c.id || {}).value === b[2]) && (!b[3] || b[3].test((c["class"] || {}).value))
        },
        I = function (a) {
            return f.event.special.hover ? a : a.replace(B, "mouseenter$1 mouseleave$1")
        };
    f.event = {
            add: function (a, c, d, e, g) {
                var h, i, j, k, l, m, n, o, p, q, r, s;
                if (!(a.nodeType === 3 || a.nodeType === 8 || !c || !d || !(h = f._data(a)))) {
                    d.handler && (p = d, d = p.handler, g = p.selector), d.guid || (d.guid = f.guid++), j = h.events, j || (h.events = j = {}), i = h.handle, i || (h.handle = i = function (a) {
                        return typeof f != "undefined" && (!a || f.event.triggered !== a.type) ? f.event.dispatch.apply(i.elem, arguments) : b
                    }, i.elem = a), c = f.trim(I(c)).split(" ");
                    for (k = 0; k < c.length; k++) {
                        l = A.exec(c[k]) || [], m = l[1], n = (l[2] || "").split(".").sort(), s = f.event.special[m] || {}, m = (g ? s.delegateType : s.bindType) || m, s = f.event.special[m] || {}, o = f.extend({
                            type: m,
                            origType: l[1],
                            data: e,
                            handler: d,
                            guid: d.guid,
                            selector: g,
                            quick: g && G(g),
                            namespace: n.join(".")
                        }, p), r = j[m];
                        if (!r) {
                            r = j[m] = [], r.delegateCount = 0;
                            if (!s.setup || s.setup.call(a, e, n, i) === !1) {
                                a.addEventListener ? a.addEventListener(m, i, !1) : a.attachEvent && a.attachEvent("on" + m, i)
                            }
                        }
                        s.add && (s.add.call(a, o), o.handler.guid || (o.handler.guid = d.guid)), g ? r.splice(r.delegateCount++, 0, o) : r.push(o), f.event.global[m] = !0
                    }
                    a = null
                }
            },
            global: {},
            remove: function (a, b, c, d, e) {
                var g = f.hasData(a) && f._data(a),
                    h, i, j, k, l, m, n, o, p, q, r, s;
                if (!!g && !!(o = g.events)) {
                    b = f.trim(I(b || "")).split(" ");
                    for (h = 0; h < b.length; h++) {
                        i = A.exec(b[h]) || [], j = k = i[1], l = i[2];
                        if (!j) {
                            for (j in o) {
                                f.event.remove(a, j + b[h], c, d, !0)
                            }
                            continue
                        }
                        p = f.event.special[j] || {}, j = (d ? p.delegateType : p.bindType) || j, r = o[j] || [], m = r.length, l = l ? new RegExp("(^|\\.)" + l.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
                        for (n = 0; n < r.length; n++) {
                            s = r[n], (e || k === s.origType) && (!c || c.guid === s.guid) && (!l || l.test(s.namespace)) && (!d || d === s.selector || d === "**" && s.selector) && (r.splice(n--, 1), s.selector && r.delegateCount--, p.remove && p.remove.call(a, s))
                        }
                        r.length === 0 && m !== r.length && ((!p.teardown || p.teardown.call(a, l) === !1) && f.removeEvent(a, j, g.handle), delete o[j])
                    }
                    f.isEmptyObject(o) && (q = g.handle, q && (q.elem = null), f.removeData(a, ["events", "handle"], !0))
                }
            },
            customEvent: {
                getData: !0,
                setData: !0,
                changeData: !0
            },
            trigger: function (c, d, e, g) {
                if (!e || e.nodeType !== 3 && e.nodeType !== 8) {
                    var h = c.type || c,
                        i = [],
                        j, k, l, m, n, o, p, q, r, s;
                    if (E.test(h + f.event.triggered)) {
                        return
                    }
                    h.indexOf("!") >= 0 && (h = h.slice(0, -1), k = !0), h.indexOf(".") >= 0 && (i = h.split("."), h = i.shift(), i.sort());
                    if ((!e || f.event.customEvent[h]) && !f.event.global[h]) {
                        return
                    }
                    c = typeof c == "object" ? c[f.expando] ? c : new f.Event(h, c) : new f.Event(h), c.type = h, c.isTrigger = !0, c.exclusive = k, c.namespace = i.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + i.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, o = h.indexOf(":") < 0 ? "on" + h : "";
                    if (!e) {
                        j = f.cache;
                        for (l in j) {
                            j[l].events && j[l].events[h] && f.event.trigger(c, d, j[l].handle.elem, !0)
                        }
                        return
                    }
                    c.result = b, c.target || (c.target = e), d = d != null ? f.makeArray(d) : [], d.unshift(c), p = f.event.special[h] || {};
                    if (p.trigger && p.trigger.apply(e, d) === !1) {
                        return
                    }
                    r = [
                        [e, p.bindType || h]
                    ];
                    if (!g && !p.noBubble && !f.isWindow(e)) {
                        s = p.delegateType || h, m = E.test(s + h) ? e : e.parentNode, n = null;
                        for (; m; m = m.parentNode) {
                            r.push([m, s]), n = m
                        }
                        n && n === e.ownerDocument && r.push([n.defaultView || n.parentWindow || a, s])
                    }
                    for (l = 0; l < r.length && !c.isPropagationStopped(); l++) {
                        m = r[l][0], c.type = r[l][1], q = (f._data(m, "events") || {})[c.type] && f._data(m, "handle"), q && q.apply(m, d), q = o && m[o], q && f.acceptData(m) && q.apply(m, d) === !1 && c.preventDefault()
                    }
                    c.type = h, !g && !c.isDefaultPrevented() && (!p._default || p._default.apply(e.ownerDocument, d) === !1) && (h !== "click" || !f.nodeName(e, "a")) && f.acceptData(e) && o && e[h] && (h !== "focus" && h !== "blur" || c.target.offsetWidth !== 0) && !f.isWindow(e) && (n = e[o], n && (e[o] = null), f.event.triggered = h, e[h](), f.event.triggered = b, n && (e[o] = n));
                    return c.result
                }
            },
            dispatch: function (c) {
                c = f.event.fix(c || a.event);
                var d = (f._data(this, "events") || {})[c.type] || [],
                    e = d.delegateCount,
                    g = [].slice.call(arguments, 0),
                    h = !c.exclusive && !c.namespace,
                    i = f.event.special[c.type] || {},
                    j = [],
                    k, l, m, n, o, p, q, r, s, t, u;
                g[0] = c, c.delegateTarget = this;
                if (!i.preDispatch || i.preDispatch.call(this, c) !== !1) {
                    if (e && (!c.button || c.type !== "click")) {
                        n = f(this), n.context = this.ownerDocument || this;
                        for (m = c.target; m != this; m = m.parentNode || this) {
                            if (m.disabled !== !0) {
                                p = {}, r = [], n[0] = m;
                                for (k = 0; k < e; k++) {
                                    s = d[k], t = s.selector, p[t] === b && (p[t] = s.quick ? H(m, s.quick) : n.is(t)), p[t] && r.push(s)
                                }
                                r.length && j.push({
                                    elem: m,
                                    matches: r
                                })
                            }
                        }
                    }
                    d.length > e && j.push({
                        elem: this,
                        matches: d.slice(e)
                    });
                    for (k = 0; k < j.length && !c.isPropagationStopped(); k++) {
                        q = j[k], c.currentTarget = q.elem;
                        for (l = 0; l < q.matches.length && !c.isImmediatePropagationStopped(); l++) {
                            s = q.matches[l];
                            if (h || !c.namespace && !s.namespace || c.namespace_re && c.namespace_re.test(s.namespace)) {
                                c.data = s.data, c.handleObj = s, o = ((f.event.special[s.origType] || {}).handle || s.handler).apply(q.elem, g), o !== b && (c.result = o, o === !1 && (c.preventDefault(), c.stopPropagation()))
                            }
                        }
                    }
                    i.postDispatch && i.postDispatch.call(this, c);
                    return c.result
                }
            },
            props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function (a, b) {
                    a.which == null && (a.which = b.charCode != null ? b.charCode : b.keyCode);
                    return a
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function (a, d) {
                    var e, f, g, h = d.button,
                        i = d.fromElement;
                    a.pageX == null && d.clientX != null && (e = a.target.ownerDocument || c, f = e.documentElement, g = e.body, a.pageX = d.clientX + (f && f.scrollLeft || g && g.scrollLeft || 0) - (f && f.clientLeft || g && g.clientLeft || 0), a.pageY = d.clientY + (f && f.scrollTop || g && g.scrollTop || 0) - (f && f.clientTop || g && g.clientTop || 0)), !a.relatedTarget && i && (a.relatedTarget = i === a.target ? d.toElement : i), !a.which && h !== b && (a.which = h & 1 ? 1 : h & 2 ? 3 : h & 4 ? 2 : 0);
                    return a
                }
            },
            fix: function (a) {
                if (a[f.expando]) {
                    return a
                }
                var d, e, g = a,
                    h = f.event.fixHooks[a.type] || {},
                    i = h.props ? this.props.concat(h.props) : this.props;
                a = f.Event(g);
                for (d = i.length; d;) {
                    e = i[--d], a[e] = g[e]
                }
                a.target || (a.target = g.srcElement || c), a.target.nodeType === 3 && (a.target = a.target.parentNode), a.metaKey === b && (a.metaKey = a.ctrlKey);
                return h.filter ? h.filter(a, g) : a
            },
            special: {
                ready: {
                    setup: f.bindReady
                },
                load: {
                    noBubble: !0
                },
                focus: {
                    delegateType: "focusin"
                },
                blur: {
                    delegateType: "focusout"
                },
                beforeunload: {
                    setup: function (a, b, c) {
                        f.isWindow(this) && (this.onbeforeunload = c)
                    },
                    teardown: function (a, b) {
                        this.onbeforeunload === b && (this.onbeforeunload = null)
                    }
                }
            },
            simulate: function (a, b, c, d) {
                var e = f.extend(new f.Event, c, {
                    type: a,
                    isSimulated: !0,
                    originalEvent: {}
                });
                d ? f.event.trigger(e, null, b) : f.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
            }
        }, f.event.handle = f.event.dispatch, f.removeEvent = c.removeEventListener ? function (a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, !1)
        } : function (a, b, c) {
            a.detachEvent && a.detachEvent("on" + b, c)
        }, f.Event = function (a, b) {
            if (!(this instanceof f.Event)) {
                return new f.Event(a, b)
            }
            a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? K : J) : this.type = a, b && f.extend(this, b), this.timeStamp = a && a.timeStamp || f.now(), this[f.expando] = !0
        }, f.Event.prototype = {
            preventDefault: function () {
                this.isDefaultPrevented = K;
                var a = this.originalEvent;
                !a || (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
            },
            stopPropagation: function () {
                this.isPropagationStopped = K;
                var a = this.originalEvent;
                !a || (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
            },
            stopImmediatePropagation: function () {
                this.isImmediatePropagationStopped = K, this.stopPropagation()
            },
            isDefaultPrevented: J,
            isPropagationStopped: J,
            isImmediatePropagationStopped: J
        }, f.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function (a, b) {
            f.event.special[a] = {
                delegateType: b,
                bindType: b,
                handle: function (a) {
                    var c = this,
                        d = a.relatedTarget,
                        e = a.handleObj,
                        g = e.selector,
                        h;
                    if (!d || d !== c && !f.contains(c, d)) {
                        a.type = e.origType, h = e.handler.apply(this, arguments), a.type = b
                    }
                    return h
                }
            }
        }), f.support.submitBubbles || (f.event.special.submit = {
            setup: function () {
                if (f.nodeName(this, "form")) {
                    return !1
                }
                f.event.add(this, "click._submit keypress._submit", function (a) {
                    var c = a.target,
                        d = f.nodeName(c, "input") || f.nodeName(c, "button") ? c.form : b;
                    d && !d._submit_attached && (f.event.add(d, "submit._submit", function (a) {
                        a._submit_bubble = !0
                    }), d._submit_attached = !0)
                })
            },
            postDispatch: function (a) {
                a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && f.event.simulate("submit", this.parentNode, a, !0))
            },
            teardown: function () {
                if (f.nodeName(this, "form")) {
                    return !1
                }
                f.event.remove(this, "._submit")
            }
        }), f.support.changeBubbles || (f.event.special.change = {
            setup: function () {
                if (z.test(this.nodeName)) {
                    if (this.type === "checkbox" || this.type === "radio") {
                        f.event.add(this, "propertychange._change", function (a) {
                            a.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                        }), f.event.add(this, "click._change", function (a) {
                            this._just_changed && !a.isTrigger && (this._just_changed = !1, f.event.simulate("change", this, a, !0))
                        })
                    }
                    return !1
                }
                f.event.add(this, "beforeactivate._change", function (a) {
                    var b = a.target;
                    z.test(b.nodeName) && !b._change_attached && (f.event.add(b, "change._change", function (a) {
                        this.parentNode && !a.isSimulated && !a.isTrigger && f.event.simulate("change", this.parentNode, a, !0)
                    }), b._change_attached = !0)
                })
            },
            handle: function (a) {
                var b = a.target;
                if (this !== b || a.isSimulated || a.isTrigger || b.type !== "radio" && b.type !== "checkbox") {
                    return a.handleObj.handler.apply(this, arguments)
                }
            },
            teardown: function () {
                f.event.remove(this, "._change");
                return z.test(this.nodeName)
            }
        }), f.support.focusinBubbles || f.each({
            focus: "focusin",
            blur: "focusout"
        }, function (a, b) {
            var d = 0,
                e = function (a) {
                    f.event.simulate(b, a.target, f.event.fix(a), !0)
                };
            f.event.special[b] = {
                setup: function () {
                    d++ === 0 && c.addEventListener(a, e, !0)
                },
                teardown: function () {
                    --d === 0 && c.removeEventListener(a, e, !0)
                }
            }
        }), f.fn.extend({
            on: function (a, c, d, e, g) {
                var h, i;
                if (typeof a == "object") {
                    typeof c != "string" && (d = d || c, c = b);
                    for (i in a) {
                        this.on(i, c, d, a[i], g)
                    }
                    return this
                }
                d == null && e == null ? (e = c, d = c = b) : e == null && (typeof c == "string" ? (e = d, d = b) : (e = d, d = c, c = b));
                if (e === !1) {
                    e = J
                } else {
                    if (!e) {
                        return this
                    }
                }
                g === 1 && (h = e, e = function (a) {
                    f().off(a);
                    return h.apply(this, arguments)
                }, e.guid = h.guid || (h.guid = f.guid++));
                return this.each(function () {
                    f.event.add(this, a, e, d, c)
                })
            },
            one: function (a, b, c, d) {
                return this.on(a, b, c, d, 1)
            },
            off: function (a, c, d) {
                if (a && a.preventDefault && a.handleObj) {
                    var e = a.handleObj;
                    f(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler);
                    return this
                }
                if (typeof a == "object") {
                    for (var g in a) {
                        this.off(g, c, a[g])
                    }
                    return this
                }
                if (c === !1 || typeof c == "function") {
                    d = c, c = b
                }
                d === !1 && (d = J);
                return this.each(function () {
                    f.event.remove(this, a, d, c)
                })
            },
            bind: function (a, b, c) {
                return this.on(a, null, b, c)
            },
            unbind: function (a, b) {
                return this.off(a, null, b)
            },
            live: function (a, b, c) {
                f(this.context).on(a, this.selector, b, c);
                return this
            },
            die: function (a, b) {
                f(this.context).off(a, this.selector || "**", b);
                return this
            },
            delegate: function (a, b, c, d) {
                return this.on(b, a, c, d)
            },
            undelegate: function (a, b, c) {
                return arguments.length == 1 ? this.off(a, "**") : this.off(b, a, c)
            },
            trigger: function (a, b) {
                return this.each(function () {
                    f.event.trigger(a, b, this)
                })
            },
            triggerHandler: function (a, b) {
                if (this[0]) {
                    return f.event.trigger(a, b, this[0], !0)
                }
            },
            toggle: function (a) {
                var b = arguments,
                    c = a.guid || f.guid++,
                    d = 0,
                    e = function (c) {
                        var e = (f._data(this, "lastToggle" + a.guid) || 0) % d;
                        f._data(this, "lastToggle" + a.guid, e + 1), c.preventDefault();
                        return b[e].apply(this, arguments) || !1
                    };
                e.guid = c;
                while (d < b.length) {
                    b[d++].guid = c
                }
                return this.click(e)
            },
            hover: function (a, b) {
                return this.mouseenter(a).mouseleave(b || a)
            }
        }), f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
            f.fn[b] = function (a, c) {
                c == null && (c = a, a = null);
                return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
            }, f.attrFn && (f.attrFn[b] = !0), C.test(b) && (f.event.fixHooks[b] = f.event.keyHooks), D.test(b) && (f.event.fixHooks[b] = f.event.mouseHooks)
        }),
        function () {
            function x(a, b, c, e, f, g) {
                for (var h = 0, i = e.length; h < i; h++) {
                    var j = e[h];
                    if (j) {
                        var k = !1;
                        j = j[a];
                        while (j) {
                            if (j[d] === c) {
                                k = e[j.sizset];
                                break
                            }
                            if (j.nodeType === 1) {
                                g || (j[d] = c, j.sizset = h);
                                if (typeof b != "string") {
                                    if (j === b) {
                                        k = !0;
                                        break
                                    }
                                } else {
                                    if (m.filter(b, [j]).length > 0) {
                                        k = j;
                                        break
                                    }
                                }
                            }
                            j = j[a]
                        }
                        e[h] = k
                    }
                }
            }

            function w(a, b, c, e, f, g) {
                for (var h = 0, i = e.length; h < i; h++) {
                    var j = e[h];
                    if (j) {
                        var k = !1;
                        j = j[a];
                        while (j) {
                            if (j[d] === c) {
                                k = e[j.sizset];
                                break
                            }
                            j.nodeType === 1 && !g && (j[d] = c, j.sizset = h);
                            if (j.nodeName.toLowerCase() === b) {
                                k = j;
                                break
                            }
                            j = j[a]
                        }
                        e[h] = k
                    }
                }
            }
            var a = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
                d = "sizcache" + (Math.random() + "").replace(".", ""),
                e = 0,
                g = Object.prototype.toString,
                h = !1,
                i = !0,
                j = /\\/g,
                k = /\r\n/g,
                l = /\W/;
            [0, 0].sort(function () {
                i = !1;
                return 0
            });
            var m = function (b, d, e, f) {
                e = e || [], d = d || c;
                var h = d;
                if (d.nodeType !== 1 && d.nodeType !== 9) {
                    return []
                }
                if (!b || typeof b != "string") {
                    return e
                }
                var i, j, k, l, n, q, r, t, u = !0,
                    v = m.isXML(d),
                    w = [],
                    x = b;
                do {
                    a.exec(""), i = a.exec(x);
                    if (i) {
                        x = i[3], w.push(i[1]);
                        if (i[2]) {
                            l = i[3];
                            break
                        }
                    }
                } while (i);
                if (w.length > 1 && p.exec(b)) {
                    if (w.length === 2 && o.relative[w[0]]) {
                        j = y(w[0] + w[1], d, f)
                    } else {
                        j = o.relative[w[0]] ? [d] : m(w.shift(), d);
                        while (w.length) {
                            b = w.shift(), o.relative[b] && (b += w.shift()), j = y(b, j, f)
                        }
                    }
                } else {
                    !f && w.length > 1 && d.nodeType === 9 && !v && o.match.ID.test(w[0]) && !o.match.ID.test(w[w.length - 1]) && (n = m.find(w.shift(), d, v), d = n.expr ? m.filter(n.expr, n.set)[0] : n.set[0]);
                    if (d) {
                        n = f ? {
                            expr: w.pop(),
                            set: s(f)
                        } : m.find(w.pop(), w.length === 1 && (w[0] === "~" || w[0] === "+") && d.parentNode ? d.parentNode : d, v), j = n.expr ? m.filter(n.expr, n.set) : n.set, w.length > 0 ? k = s(j) : u = !1;
                        while (w.length) {
                            q = w.pop(), r = q, o.relative[q] ? r = w.pop() : q = "", r == null && (r = d), o.relative[q](k, r, v)
                        }
                    } else {
                        k = w = []
                    }
                }
                k || (k = j), k || m.error(q || b);
                if (g.call(k) === "[object Array]") {
                    if (!u) {
                        e.push.apply(e, k)
                    } else {
                        if (d && d.nodeType === 1) {
                            for (t = 0; k[t] != null; t++) {
                                k[t] && (k[t] === !0 || k[t].nodeType === 1 && m.contains(d, k[t])) && e.push(j[t])
                            }
                        } else {
                            for (t = 0; k[t] != null; t++) {
                                k[t] && k[t].nodeType === 1 && e.push(j[t])
                            }
                        }
                    }
                } else {
                    s(k, e)
                }
                l && (m(l, h, e, f), m.uniqueSort(e));
                return e
            };
            m.uniqueSort = function (a) {
                if (u) {
                    h = i, a.sort(u);
                    if (h) {
                        for (var b = 1; b < a.length; b++) {
                            a[b] === a[b - 1] && a.splice(b--, 1)
                        }
                    }
                }
                return a
            }, m.matches = function (a, b) {
                return m(a, null, null, b)
            }, m.matchesSelector = function (a, b) {
                return m(b, null, null, [a]).length > 0
            }, m.find = function (a, b, c) {
                var d, e, f, g, h, i;
                if (!a) {
                    return []
                }
                for (e = 0, f = o.order.length; e < f; e++) {
                    h = o.order[e];
                    if (g = o.leftMatch[h].exec(a)) {
                        i = g[1], g.splice(1, 1);
                        if (i.substr(i.length - 1) !== "\\") {
                            g[1] = (g[1] || "").replace(j, ""), d = o.find[h](g, b, c);
                            if (d != null) {
                                a = a.replace(o.match[h], "");
                                break
                            }
                        }
                    }
                }
                d || (d = typeof b.getElementsByTagName != "undefined" ? b.getElementsByTagName("*") : []);
                return {
                    set: d,
                    expr: a
                }
            }, m.filter = function (a, c, d, e) {
                var f, g, h, i, j, k, l, n, p, q = a,
                    r = [],
                    s = c,
                    t = c && c[0] && m.isXML(c[0]);
                while (a && c.length) {
                    for (h in o.filter) {
                        if ((f = o.leftMatch[h].exec(a)) != null && f[2]) {
                            k = o.filter[h], l = f[1], g = !1, f.splice(1, 1);
                            if (l.substr(l.length - 1) === "\\") {
                                continue
                            }
                            s === r && (r = []);
                            if (o.preFilter[h]) {
                                f = o.preFilter[h](f, s, d, r, e, t);
                                if (!f) {
                                    g = i = !0
                                } else {
                                    if (f === !0) {
                                        continue
                                    }
                                }
                            }
                            if (f) {
                                for (n = 0;
                                    (j = s[n]) != null; n++) {
                                    j && (i = k(j, f, n, s), p = e ^ i, d && i != null ? p ? g = !0 : s[n] = !1 : p && (r.push(j), g = !0))
                                }
                            }
                            if (i !== b) {
                                d || (s = r), a = a.replace(o.match[h], "");
                                if (!g) {
                                    return []
                                }
                                break
                            }
                        }
                    }
                    if (a === q) {
                        if (g == null) {
                            m.error(a)
                        } else {
                            break
                        }
                    }
                    q = a
                }
                return s
            }, m.error = function (a) {
                throw new Error("Syntax error, unrecognized expression: " + a)
            };
            var n = m.getText = function (a) {
                    var b, c, d = a.nodeType,
                        e = "";
                    if (d) {
                        if (d === 1 || d === 9 || d === 11) {
                            if (typeof a.textContent == "string") {
                                return a.textContent
                            }
                            if (typeof a.innerText == "string") {
                                return a.innerText.replace(k, "")
                            }
                            for (a = a.firstChild; a; a = a.nextSibling) {
                                e += n(a)
                            }
                        } else {
                            if (d === 3 || d === 4) {
                                return a.nodeValue
                            }
                        }
                    } else {
                        for (b = 0; c = a[b]; b++) {
                            c.nodeType !== 8 && (e += n(c))
                        }
                    }
                    return e
                },
                o = m.selectors = {
                    order: ["ID", "NAME", "TAG"],
                    match: {
                        ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                        CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                        NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                        ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                        TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                        CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                        POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                        PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
                    },
                    leftMatch: {},
                    attrMap: {
                        "class": "className",
                        "for": "htmlFor"
                    },
                    attrHandle: {
                        href: function (a) {
                            return a.getAttribute("href")
                        },
                        type: function (a) {
                            return a.getAttribute("type")
                        }
                    },
                    relative: {
                        "+": function (a, b) {
                            var c = typeof b == "string",
                                d = c && !l.test(b),
                                e = c && !d;
                            d && (b = b.toLowerCase());
                            for (var f = 0, g = a.length, h; f < g; f++) {
                                if (h = a[f]) {
                                    while ((h = h.previousSibling) && h.nodeType !== 1) {}
                                    a[f] = e || h && h.nodeName.toLowerCase() === b ? h || !1 : h === b
                                }
                            }
                            e && m.filter(b, a, !0)
                        },
                        ">": function (a, b) {
                            var c, d = typeof b == "string",
                                e = 0,
                                f = a.length;
                            if (d && !l.test(b)) {
                                b = b.toLowerCase();
                                for (; e < f; e++) {
                                    c = a[e];
                                    if (c) {
                                        var g = c.parentNode;
                                        a[e] = g.nodeName.toLowerCase() === b ? g : !1
                                    }
                                }
                            } else {
                                for (; e < f; e++) {
                                    c = a[e], c && (a[e] = d ? c.parentNode : c.parentNode === b)
                                }
                                d && m.filter(b, a, !0)
                            }
                        },
                        "": function (a, b, c) {
                            var d, f = e++,
                                g = x;
                            typeof b == "string" && !l.test(b) && (b = b.toLowerCase(), d = b, g = w), g("parentNode", b, f, a, d, c)
                        },
                        "~": function (a, b, c) {
                            var d, f = e++,
                                g = x;
                            typeof b == "string" && !l.test(b) && (b = b.toLowerCase(), d = b, g = w), g("previousSibling", b, f, a, d, c)
                        }
                    },
                    find: {
                        ID: function (a, b, c) {
                            if (typeof b.getElementById != "undefined" && !c) {
                                var d = b.getElementById(a[1]);
                                return d && d.parentNode ? [d] : []
                            }
                        },
                        NAME: function (a, b) {
                            if (typeof b.getElementsByName != "undefined") {
                                var c = [],
                                    d = b.getElementsByName(a[1]);
                                for (var e = 0, f = d.length; e < f; e++) {
                                    d[e].getAttribute("name") === a[1] && c.push(d[e])
                                }
                                return c.length === 0 ? null : c
                            }
                        },
                        TAG: function (a, b) {
                            if (typeof b.getElementsByTagName != "undefined") {
                                return b.getElementsByTagName(a[1])
                            }
                        }
                    },
                    preFilter: {
                        CLASS: function (a, b, c, d, e, f) {
                            a = " " + a[1].replace(j, "") + " ";
                            if (f) {
                                return a
                            }
                            for (var g = 0, h;
                                (h = b[g]) != null; g++) {
                                h && (e ^ (h.className && (" " + h.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(h) : c && (b[g] = !1))
                            }
                            return !1
                        },
                        ID: function (a) {
                            return a[1].replace(j, "")
                        },
                        TAG: function (a, b) {
                            return a[1].replace(j, "").toLowerCase()
                        },
                        CHILD: function (a) {
                            if (a[1] === "nth") {
                                a[2] || m.error(a[0]), a[2] = a[2].replace(/^\+|\s*/g, "");
                                var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2] === "even" && "2n" || a[2] === "odd" && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                                a[2] = b[1] + (b[2] || 1) - 0, a[3] = b[3] - 0
                            } else {
                                a[2] && m.error(a[0])
                            }
                            a[0] = e++;
                            return a
                        },
                        ATTR: function (a, b, c, d, e, f) {
                            var g = a[1] = a[1].replace(j, "");
                            !f && o.attrMap[g] && (a[1] = o.attrMap[g]), a[4] = (a[4] || a[5] || "").replace(j, ""), a[2] === "~=" && (a[4] = " " + a[4] + " ");
                            return a
                        },
                        PSEUDO: function (b, c, d, e, f) {
                            if (b[1] === "not") {
                                if ((a.exec(b[3]) || "").length > 1 || /^\w/.test(b[3])) {
                                    b[3] = m(b[3], null, null, c)
                                } else {
                                    var g = m.filter(b[3], c, d, !0 ^ f);
                                    d || e.push.apply(e, g);
                                    return !1
                                }
                            } else {
                                if (o.match.POS.test(b[0]) || o.match.CHILD.test(b[0])) {
                                    return !0
                                }
                            }
                            return b
                        },
                        POS: function (a) {
                            a.unshift(!0);
                            return a
                        }
                    },
                    filters: {
                        enabled: function (a) {
                            return a.disabled === !1 && a.type !== "hidden"
                        },
                        disabled: function (a) {
                            return a.disabled === !0
                        },
                        checked: function (a) {
                            return a.checked === !0
                        },
                        selected: function (a) {
                            a.parentNode && a.parentNode.selectedIndex;
                            return a.selected === !0
                        },
                        parent: function (a) {
                            return !!a.firstChild
                        },
                        empty: function (a) {
                            return !a.firstChild
                        },
                        has: function (a, b, c) {
                            return !!m(c[3], a).length
                        },
                        header: function (a) {
                            return /h\d/i.test(a.nodeName)
                        },
                        text: function (a) {
                            var b = a.getAttribute("type"),
                                c = a.type;
                            return a.nodeName.toLowerCase() === "input" && "text" === c && (b === c || b === null)
                        },
                        radio: function (a) {
                            return a.nodeName.toLowerCase() === "input" && "radio" === a.type
                        },
                        checkbox: function (a) {
                            return a.nodeName.toLowerCase() === "input" && "checkbox" === a.type
                        },
                        file: function (a) {
                            return a.nodeName.toLowerCase() === "input" && "file" === a.type
                        },
                        password: function (a) {
                            return a.nodeName.toLowerCase() === "input" && "password" === a.type
                        },
                        submit: function (a) {
                            var b = a.nodeName.toLowerCase();
                            return (b === "input" || b === "button") && "submit" === a.type
                        },
                        image: function (a) {
                            return a.nodeName.toLowerCase() === "input" && "image" === a.type
                        },
                        reset: function (a) {
                            var b = a.nodeName.toLowerCase();
                            return (b === "input" || b === "button") && "reset" === a.type
                        },
                        button: function (a) {
                            var b = a.nodeName.toLowerCase();
                            return b === "input" && "button" === a.type || b === "button"
                        },
                        input: function (a) {
                            return /input|select|textarea|button/i.test(a.nodeName)
                        },
                        focus: function (a) {
                            return a === a.ownerDocument.activeElement
                        }
                    },
                    setFilters: {
                        first: function (a, b) {
                            return b === 0
                        },
                        last: function (a, b, c, d) {
                            return b === d.length - 1
                        },
                        even: function (a, b) {
                            return b % 2 === 0
                        },
                        odd: function (a, b) {
                            return b % 2 === 1
                        },
                        lt: function (a, b, c) {
                            return b < c[3] - 0
                        },
                        gt: function (a, b, c) {
                            return b > c[3] - 0
                        },
                        nth: function (a, b, c) {
                            return c[3] - 0 === b
                        },
                        eq: function (a, b, c) {
                            return c[3] - 0 === b
                        }
                    },
                    filter: {
                        PSEUDO: function (a, b, c, d) {
                            var e = b[1],
                                f = o.filters[e];
                            if (f) {
                                return f(a, c, b, d)
                            }
                            if (e === "contains") {
                                return (a.textContent || a.innerText || n([a]) || "").indexOf(b[3]) >= 0
                            }
                            if (e === "not") {
                                var g = b[3];
                                for (var h = 0, i = g.length; h < i; h++) {
                                    if (g[h] === a) {
                                        return !1
                                    }
                                }
                                return !0
                            }
                            m.error(e)
                        },
                        CHILD: function (a, b) {
                            var c, e, f, g, h, i, j, k = b[1],
                                l = a;
                            switch (k) {
                            case "only":
                            case "first":
                                while (l = l.previousSibling) {
                                    if (l.nodeType === 1) {
                                        return !1
                                    }
                                }
                                if (k === "first") {
                                    return !0
                                }
                                l = a;
                            case "last":
                                while (l = l.nextSibling) {
                                    if (l.nodeType === 1) {
                                        return !1
                                    }
                                }
                                return !0;
                            case "nth":
                                c = b[2], e = b[3];
                                if (c === 1 && e === 0) {
                                    return !0
                                }
                                f = b[0], g = a.parentNode;
                                if (g && (g[d] !== f || !a.nodeIndex)) {
                                    i = 0;
                                    for (l = g.firstChild; l; l = l.nextSibling) {
                                        l.nodeType === 1 && (l.nodeIndex = ++i)
                                    }
                                    g[d] = f
                                }
                                j = a.nodeIndex - e;
                                return c === 0 ? j === 0 : j % c === 0 && j / c >= 0
                            }
                        },
                        ID: function (a, b) {
                            return a.nodeType === 1 && a.getAttribute("id") === b
                        },
                        TAG: function (a, b) {
                            return b === "*" && a.nodeType === 1 || !!a.nodeName && a.nodeName.toLowerCase() === b
                        },
                        CLASS: function (a, b) {
                            return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
                        },
                        ATTR: function (a, b) {
                            var c = b[1],
                                d = m.attr ? m.attr(a, c) : o.attrHandle[c] ? o.attrHandle[c](a) : a[c] != null ? a[c] : a.getAttribute(c),
                                e = d + "",
                                f = b[2],
                                g = b[4];
                            return d == null ? f === "!=" : !f && m.attr ? d != null : f === "=" ? e === g : f === "*=" ? e.indexOf(g) >= 0 : f === "~=" ? (" " + e + " ").indexOf(g) >= 0 : g ? f === "!=" ? e !== g : f === "^=" ? e.indexOf(g) === 0 : f === "$=" ? e.substr(e.length - g.length) === g : f === "|=" ? e === g || e.substr(0, g.length + 1) === g + "-" : !1 : e && d !== !1
                        },
                        POS: function (a, b, c, d) {
                            var e = b[2],
                                f = o.setFilters[e];
                            if (f) {
                                return f(a, c, b, d)
                            }
                        }
                    }
                },
                p = o.match.POS,
                q = function (a, b) {
                    return "\\" + (b - 0 + 1)
                };
            for (var r in o.match) {
                o.match[r] = new RegExp(o.match[r].source + /(?![^\[]*\])(?![^\(]*\))/.source), o.leftMatch[r] = new RegExp(/(^(?:.|\r|\n)*?)/.source + o.match[r].source.replace(/\\(\d+)/g, q))
            }
            o.match.globalPOS = p;
            var s = function (a, b) {
                a = Array.prototype.slice.call(a, 0);
                if (b) {
                    b.push.apply(b, a);
                    return b
                }
                return a
            };
            try {
                Array.prototype.slice.call(c.documentElement.childNodes, 0)[0].nodeType
            } catch (t) {
                s = function (a, b) {
                    var c = 0,
                        d = b || [];
                    if (g.call(a) === "[object Array]") {
                        Array.prototype.push.apply(d, a)
                    } else {
                        if (typeof a.length == "number") {
                            for (var e = a.length; c < e; c++) {
                                d.push(a[c])
                            }
                        } else {
                            for (; a[c]; c++) {
                                d.push(a[c])
                            }
                        }
                    }
                    return d
                }
            }
            var u, v;
            c.documentElement.compareDocumentPosition ? u = function (a, b) {
                    if (a === b) {
                        h = !0;
                        return 0
                    }
                    if (!a.compareDocumentPosition || !b.compareDocumentPosition) {
                        return a.compareDocumentPosition ? -1 : 1
                    }
                    return a.compareDocumentPosition(b) & 4 ? -1 : 1
                } : (u = function (a, b) {
                    if (a === b) {
                        h = !0;
                        return 0
                    }
                    if (a.sourceIndex && b.sourceIndex) {
                        return a.sourceIndex - b.sourceIndex
                    }
                    var c, d, e = [],
                        f = [],
                        g = a.parentNode,
                        i = b.parentNode,
                        j = g;
                    if (g === i) {
                        return v(a, b)
                    }
                    if (!g) {
                        return -1
                    }
                    if (!i) {
                        return 1
                    }
                    while (j) {
                        e.unshift(j), j = j.parentNode
                    }
                    j = i;
                    while (j) {
                        f.unshift(j), j = j.parentNode
                    }
                    c = e.length, d = f.length;
                    for (var k = 0; k < c && k < d; k++) {
                        if (e[k] !== f[k]) {
                            return v(e[k], f[k])
                        }
                    }
                    return k === c ? v(a, f[k], -1) : v(e[k], b, 1)
                }, v = function (a, b, c) {
                    if (a === b) {
                        return c
                    }
                    var d = a.nextSibling;
                    while (d) {
                        if (d === b) {
                            return -1
                        }
                        d = d.nextSibling
                    }
                    return 1
                }),
                function () {
                    var a = c.createElement("div"),
                        d = "script" + (new Date).getTime(),
                        e = c.documentElement;
                    a.innerHTML = "<a name='" + d + "'/>", e.insertBefore(a, e.firstChild), c.getElementById(d) && (o.find.ID = function (a, c, d) {
                        if (typeof c.getElementById != "undefined" && !d) {
                            var e = c.getElementById(a[1]);
                            return e ? e.id === a[1] || typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id").nodeValue === a[1] ? [e] : b : []
                        }
                    }, o.filter.ID = function (a, b) {
                        var c = typeof a.getAttributeNode != "undefined" && a.getAttributeNode("id");
                        return a.nodeType === 1 && c && c.nodeValue === b
                    }), e.removeChild(a), e = a = null
                }(),
                function () {
                    var a = c.createElement("div");
                    a.appendChild(c.createComment("")), a.getElementsByTagName("*").length > 0 && (o.find.TAG = function (a, b) {
                        var c = b.getElementsByTagName(a[1]);
                        if (a[1] === "*") {
                            var d = [];
                            for (var e = 0; c[e]; e++) {
                                c[e].nodeType === 1 && d.push(c[e])
                            }
                            c = d
                        }
                        return c
                    }), a.innerHTML = "<a href='#'></a>", a.firstChild && typeof a.firstChild.getAttribute != "undefined" && a.firstChild.getAttribute("href") !== "#" && (o.attrHandle.href = function (a) {
                        return a.getAttribute("href", 2)
                    }), a = null
                }(), c.querySelectorAll && function () {
                    var a = m,
                        b = c.createElement("div"),
                        d = "__sizzle__";
                    b.innerHTML = "<p class='TEST'></p>";
                    if (!b.querySelectorAll || b.querySelectorAll(".TEST").length !== 0) {
                        m = function (b, e, f, g) {
                            e = e || c;
                            if (!g && !m.isXML(e)) {
                                var h = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                                if (h && (e.nodeType === 1 || e.nodeType === 9)) {
                                    if (h[1]) {
                                        return s(e.getElementsByTagName(b), f)
                                    }
                                    if (h[2] && o.find.CLASS && e.getElementsByClassName) {
                                        return s(e.getElementsByClassName(h[2]), f)
                                    }
                                }
                                if (e.nodeType === 9) {
                                    if (b === "body" && e.body) {
                                        return s([e.body], f)
                                    }
                                    if (h && h[3]) {
                                        var i = e.getElementById(h[3]);
                                        if (!i || !i.parentNode) {
                                            return s([], f)
                                        }
                                        if (i.id === h[3]) {
                                            return s([i], f)
                                        }
                                    }
                                    try {
                                        return s(e.querySelectorAll(b), f)
                                    } catch (j) {}
                                } else {
                                    if (e.nodeType === 1 && e.nodeName.toLowerCase() !== "object") {
                                        var k = e,
                                            l = e.getAttribute("id"),
                                            n = l || d,
                                            p = e.parentNode,
                                            q = /^\s*[+~]/.test(b);
                                        l ? n = n.replace(/'/g, "\\$&") : e.setAttribute("id", n), q && p && (e = e.parentNode);
                                        try {
                                            if (!q || p) {
                                                return s(e.querySelectorAll("[id='" + n + "'] " + b), f)
                                            }
                                        } catch (r) {} finally {
                                            l || k.removeAttribute("id")
                                        }
                                    }
                                }
                            }
                            return a(b, e, f, g)
                        };
                        for (var e in a) {
                            m[e] = a[e]
                        }
                        b = null
                    }
                }(),
                function () {
                    var a = c.documentElement,
                        b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
                    if (b) {
                        var d = !b.call(c.createElement("div"), "div"),
                            e = !1;
                        try {
                            b.call(c.documentElement, "[test!='']:sizzle")
                        } catch (f) {
                            e = !0
                        }
                        m.matchesSelector = function (a, c) {
                            c = c.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                            if (!m.isXML(a)) {
                                try {
                                    if (e || !o.match.PSEUDO.test(c) && !/!=/.test(c)) {
                                        var f = b.call(a, c);
                                        if (f || !d || a.document && a.document.nodeType !== 11) {
                                            return f
                                        }
                                    }
                                } catch (g) {}
                            }
                            return m(c, null, null, [a]).length > 0
                        }
                    }
                }(),
                function () {
                    var a = c.createElement("div");
                    a.innerHTML = "<div class='test e'></div><div class='test'></div>";
                    if (!!a.getElementsByClassName && a.getElementsByClassName("e").length !== 0) {
                        a.lastChild.className = "e";
                        if (a.getElementsByClassName("e").length === 1) {
                            return
                        }
                        o.order.splice(1, 0, "CLASS"), o.find.CLASS = function (a, b, c) {
                            if (typeof b.getElementsByClassName != "undefined" && !c) {
                                return b.getElementsByClassName(a[1])
                            }
                        }, a = null
                    }
                }(), c.documentElement.contains ? m.contains = function (a, b) {
                    return a !== b && (a.contains ? a.contains(b) : !0)
                } : c.documentElement.compareDocumentPosition ? m.contains = function (a, b) {
                    return !!(a.compareDocumentPosition(b) & 16)
                } : m.contains = function () {
                    return !1
                }, m.isXML = function (a) {
                    var b = (a ? a.ownerDocument || a : 0).documentElement;
                    return b ? b.nodeName !== "HTML" : !1
                };
            var y = function (a, b, c) {
                var d, e = [],
                    f = "",
                    g = b.nodeType ? [b] : b;
                while (d = o.match.PSEUDO.exec(a)) {
                    f += d[0], a = a.replace(o.match.PSEUDO, "")
                }
                a = o.relative[a] ? a + "*" : a;
                for (var h = 0, i = g.length; h < i; h++) {
                    m(a, g[h], e, c)
                }
                return m.filter(f, e)
            };
            m.attr = f.attr, m.selectors.attrMap = {}, f.find = m, f.expr = m.selectors, f.expr[":"] = f.expr.filters, f.unique = m.uniqueSort, f.text = m.getText, f.isXMLDoc = m.isXML, f.contains = m.contains
        }();
    var L = /Until$/,
        M = /^(?:parents|prevUntil|prevAll)/,
        N = /,/,
        O = /^.[^:#\[\.,]*$/,
        P = Array.prototype.slice,
        Q = f.expr.match.globalPOS,
        R = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    f.fn.extend({
        find: function (a) {
            var b = this,
                c, d;
            if (typeof a != "string") {
                return f(a).filter(function () {
                    for (c = 0, d = b.length; c < d; c++) {
                        if (f.contains(b[c], this)) {
                            return !0
                        }
                    }
                })
            }
            var e = this.pushStack("", "find", a),
                g, h, i;
            for (c = 0, d = this.length; c < d; c++) {
                g = e.length, f.find(a, this[c], e);
                if (c > 0) {
                    for (h = g; h < e.length; h++) {
                        for (i = 0; i < g; i++) {
                            if (e[i] === e[h]) {
                                e.splice(h--, 1);
                                break
                            }
                        }
                    }
                }
            }
            return e
        },
        has: function (a) {
            var b = f(a);
            return this.filter(function () {
                for (var a = 0, c = b.length; a < c; a++) {
                    if (f.contains(this, b[a])) {
                        return !0
                    }
                }
            })
        },
        not: function (a) {
            return this.pushStack(T(this, a, !1), "not", a)
        },
        filter: function (a) {
            return this.pushStack(T(this, a, !0), "filter", a)
        },
        is: function (a) {
            return !!a && (typeof a == "string" ? Q.test(a) ? f(a, this.context).index(this[0]) >= 0 : f.filter(a, this).length > 0 : this.filter(a).length > 0)
        },
        closest: function (a, b) {
            var c = [],
                d, e, g = this[0];
            if (f.isArray(a)) {
                var h = 1;
                while (g && g.ownerDocument && g !== b) {
                    for (d = 0; d < a.length; d++) {
                        f(g).is(a[d]) && c.push({
                            selector: a[d],
                            elem: g,
                            level: h
                        })
                    }
                    g = g.parentNode, h++
                }
                return c
            }
            var i = Q.test(a) || typeof a != "string" ? f(a, b || this.context) : 0;
            for (d = 0, e = this.length; d < e; d++) {
                g = this[d];
                while (g) {
                    if (i ? i.index(g) > -1 : f.find.matchesSelector(g, a)) {
                        c.push(g);
                        break
                    }
                    g = g.parentNode;
                    if (!g || !g.ownerDocument || g === b || g.nodeType === 11) {
                        break
                    }
                }
            }
            c = c.length > 1 ? f.unique(c) : c;
            return this.pushStack(c, "closest", a)
        },
        index: function (a) {
            if (!a) {
                return this[0] && this[0].parentNode ? this.prevAll().length : -1
            }
            if (typeof a == "string") {
                return f.inArray(this[0], f(a))
            }
            return f.inArray(a.jquery ? a[0] : a, this)
        },
        add: function (a, b) {
            var c = typeof a == "string" ? f(a, b) : f.makeArray(a && a.nodeType ? [a] : a),
                d = f.merge(this.get(), c);
            return this.pushStack(S(c[0]) || S(d[0]) ? d : f.unique(d))
        },
        andSelf: function () {
            return this.add(this.prevObject)
        }
    }), f.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && b.nodeType !== 11 ? b : null
        },
        parents: function (a) {
            return f.dir(a, "parentNode")
        },
        parentsUntil: function (a, b, c) {
            return f.dir(a, "parentNode", c)
        },
        next: function (a) {
            return f.nth(a, 2, "nextSibling")
        },
        prev: function (a) {
            return f.nth(a, 2, "previousSibling")
        },
        nextAll: function (a) {
            return f.dir(a, "nextSibling")
        },
        prevAll: function (a) {
            return f.dir(a, "previousSibling")
        },
        nextUntil: function (a, b, c) {
            return f.dir(a, "nextSibling", c)
        },
        prevUntil: function (a, b, c) {
            return f.dir(a, "previousSibling", c)
        },
        siblings: function (a) {
            return f.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function (a) {
            return f.sibling(a.firstChild)
        },
        contents: function (a) {
            return f.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : f.makeArray(a.childNodes)
        }
    }, function (a, b) {
        f.fn[a] = function (c, d) {
            var e = f.map(this, b, c);
            L.test(a) || (d = c), d && typeof d == "string" && (e = f.filter(d, e)), e = this.length > 1 && !R[a] ? f.unique(e) : e, (this.length > 1 || N.test(d)) && M.test(a) && (e = e.reverse());
            return this.pushStack(e, a, P.call(arguments).join(","))
        }
    }), f.extend({
        filter: function (a, b, c) {
            c && (a = ":not(" + a + ")");
            return b.length === 1 ? f.find.matchesSelector(b[0], a) ? [b[0]] : [] : f.find.matches(a, b)
        },
        dir: function (a, c, d) {
            var e = [],
                g = a[c];
            while (g && g.nodeType !== 9 && (d === b || g.nodeType !== 1 || !f(g).is(d))) {
                g.nodeType === 1 && e.push(g), g = g[c]
            }
            return e
        },
        nth: function (a, b, c, d) {
            b = b || 1;
            var e = 0;
            for (; a; a = a[c]) {
                if (a.nodeType === 1 && ++e === b) {
                    break
                }
            }
            return a
        },
        sibling: function (a, b) {
            var c = [];
            for (; a; a = a.nextSibling) {
                a.nodeType === 1 && a !== b && c.push(a)
            }
            return c
        }
    });
    var V = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        W = / jQuery\d+="(?:\d+|null)"/g,
        X = /^\s+/,
        Y = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
        Z = /<([\w:]+)/,
        $ = /<tbody/i,
        _ = /<|&#?\w+;/,
        ba = /<(?:script|style)/i,
        bb = /<(?:script|object|embed|option|style)/i,
        bc = new RegExp("<(?:" + V + ")[\\s/>]", "i"),
        bd = /checked\s*(?:[^=]|=\s*.checked.)/i,
        be = /\/(java|ecma)script/i,
        bf = /^\s*<!(?:\[CDATA\[|\-\-)/,
        bg = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        },
        bh = U(c);
    bg.optgroup = bg.option, bg.tbody = bg.tfoot = bg.colgroup = bg.caption = bg.thead, bg.th = bg.td, f.support.htmlSerialize || (bg._default = [1, "div<div>", "</div>"]), f.fn.extend({
        text: function (a) {
            return f.access(this, function (a) {
                return a === b ? f.text(this) : this.empty().append((this[0] && this[0].ownerDocument || c).createTextNode(a))
            }, null, a, arguments.length)
        },
        wrapAll: function (a) {
            if (f.isFunction(a)) {
                return this.each(function (b) {
                    f(this).wrapAll(a.call(this, b))
                })
            }
            if (this[0]) {
                var b = f(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                    var a = this;
                    while (a.firstChild && a.firstChild.nodeType === 1) {
                        a = a.firstChild
                    }
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function (a) {
            if (f.isFunction(a)) {
                return this.each(function (b) {
                    f(this).wrapInner(a.call(this, b))
                })
            }
            return this.each(function () {
                var b = f(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function (a) {
            var b = f.isFunction(a);
            return this.each(function (c) {
                f(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                f.nodeName(this, "body") || f(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function () {
            return this.domManip(arguments, !0, function (a) {
                this.nodeType === 1 && this.appendChild(a)
            })
        },
        prepend: function () {
            return this.domManip(arguments, !0, function (a) {
                this.nodeType === 1 && this.insertBefore(a, this.firstChild)
            })
        },
        before: function () {
            if (this[0] && this[0].parentNode) {
                return this.domManip(arguments, !1, function (a) {
                    this.parentNode.insertBefore(a, this)
                })
            }
            if (arguments.length) {
                var a = f.clean(arguments);
                a.push.apply(a, this.toArray());
                return this.pushStack(a, "before", arguments)
            }
        },
        after: function () {
            if (this[0] && this[0].parentNode) {
                return this.domManip(arguments, !1, function (a) {
                    this.parentNode.insertBefore(a, this.nextSibling)
                })
            }
            if (arguments.length) {
                var a = this.pushStack(this, "after", arguments);
                a.push.apply(a, f.clean(arguments));
                return a
            }
        },
        remove: function (a, b) {
            for (var c = 0, d;
                (d = this[c]) != null; c++) {
                if (!a || f.filter(a, [d]).length) {
                    !b && d.nodeType === 1 && (f.cleanData(d.getElementsByTagName("*")), f.cleanData([d])), d.parentNode && d.parentNode.removeChild(d)
                }
            }
            return this
        },
        empty: function () {
            for (var a = 0, b;
                (b = this[a]) != null; a++) {
                b.nodeType === 1 && f.cleanData(b.getElementsByTagName("*"));
                while (b.firstChild) {
                    b.removeChild(b.firstChild)
                }
            }
            return this
        },
        clone: function (a, b) {
            a = a == null ? !1 : a, b = b == null ? a : b;
            return this.map(function () {
                return f.clone(this, a, b)
            })
        },
        html: function (a) {
            return f.access(this, function (a) {
                var c = this[0] || {},
                    d = 0,
                    e = this.length;
                if (a === b) {
                    return c.nodeType === 1 ? c.innerHTML.replace(W, "") : null
                }
                if (typeof a == "string" && !ba.test(a) && (f.support.leadingWhitespace || !X.test(a)) && !bg[(Z.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(Y, "<$1></$2>");
                    try {
                        for (; d < e; d++) {
                            c = this[d] || {}, c.nodeType === 1 && (f.cleanData(c.getElementsByTagName("*")), c.innerHTML = a)
                        }
                        c = 0
                    } catch (g) {}
                }
                c && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function (a) {
            if (this[0] && this[0].parentNode) {
                if (f.isFunction(a)) {
                    return this.each(function (b) {
                        var c = f(this),
                            d = c.html();
                        c.replaceWith(a.call(this, b, d))
                    })
                }
                typeof a != "string" && (a = f(a).detach());
                return this.each(function () {
                    var b = this.nextSibling,
                        c = this.parentNode;
                    f(this).remove(), b ? f(b).before(a) : f(c).append(a)
                })
            }
            return this.length ? this.pushStack(f(f.isFunction(a) ? a() : a), "replaceWith", a) : this
        },
        detach: function (a) {
            return this.remove(a, !0)
        },
        domManip: function (a, c, d) {
            var e, g, h, i, j = a[0],
                k = [];
            if (!f.support.checkClone && arguments.length === 3 && typeof j == "string" && bd.test(j)) {
                return this.each(function () {
                    f(this).domManip(a, c, d, !0)
                })
            }
            if (f.isFunction(j)) {
                return this.each(function (e) {
                    var g = f(this);
                    a[0] = j.call(this, e, c ? g.html() : b), g.domManip(a, c, d)
                })
            }
            if (this[0]) {
                i = j && j.parentNode, f.support.parentNode && i && i.nodeType === 11 && i.childNodes.length === this.length ? e = {
                    fragment: i
                } : e = f.buildFragment(a, this, k), h = e.fragment, h.childNodes.length === 1 ? g = h = h.firstChild : g = h.firstChild;
                if (g) {
                    c = c && f.nodeName(g, "tr");
                    for (var l = 0, m = this.length, n = m - 1; l < m; l++) {
                        d.call(c ? bi(this[l], g) : this[l], e.cacheable || m > 1 && l < n ? f.clone(h, !0, !0) : h)
                    }
                }
                k.length && f.each(k, function (a, b) {
                    b.src ? f.ajax({
                        type: "GET",
                        global: !1,
                        url: b.src,
                        async: !1,
                        dataType: "script"
                    }) : f.globalEval((b.text || b.textContent || b.innerHTML || "").replace(bf, "/*$0*/")), b.parentNode && b.parentNode.removeChild(b)
                })
            }
            return this
        }
    }), f.buildFragment = function (a, b, d) {
        var e, g, h, i, j = a[0];
        b && b[0] && (i = b[0].ownerDocument || b[0]), i.createDocumentFragment || (i = c), a.length === 1 && typeof j == "string" && j.length < 512 && i === c && j.charAt(0) === "<" && !bb.test(j) && (f.support.checkClone || !bd.test(j)) && (f.support.html5Clone || !bc.test(j)) && (g = !0, h = f.fragments[j], h && h !== 1 && (e = h)), e || (e = i.createDocumentFragment(), f.clean(a, i, e, d)), g && (f.fragments[j] = h ? e : 1);
        return {
            fragment: e,
            cacheable: g
        }
    }, f.fragments = {}, f.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        f.fn[a] = function (c) {
            var d = [],
                e = f(c),
                g = this.length === 1 && this[0].parentNode;
            if (g && g.nodeType === 11 && g.childNodes.length === 1 && e.length === 1) {
                e[b](this[0]);
                return this
            }
            for (var h = 0, i = e.length; h < i; h++) {
                var j = (h > 0 ? this.clone(!0) : this).get();
                f(e[h])[b](j), d = d.concat(j)
            }
            return this.pushStack(d, a, e.selector)
        }
    }), f.extend({
        clone: function (a, b, c) {
            var d, e, g, h = f.support.html5Clone || f.isXMLDoc(a) || !bc.test("<" + a.nodeName + ">") ? a.cloneNode(!0) : bo(a);
            if ((!f.support.noCloneEvent || !f.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !f.isXMLDoc(a)) {
                bk(a, h), d = bl(a), e = bl(h);
                for (g = 0; d[g]; ++g) {
                    e[g] && bk(d[g], e[g])
                }
            }
            if (b) {
                bj(a, h);
                if (c) {
                    d = bl(a), e = bl(h);
                    for (g = 0; d[g]; ++g) {
                        bj(d[g], e[g])
                    }
                }
            }
            d = e = null;
            return h
        },
        clean: function (a, b, d, e) {
            var g, h, i, j = [];
            b = b || c, typeof b.createElement == "undefined" && (b = b.ownerDocument || b[0] && b[0].ownerDocument || c);
            for (var k = 0, l;
                (l = a[k]) != null; k++) {
                typeof l == "number" && (l += "");
                if (!l) {
                    continue
                }
                if (typeof l == "string") {
                    if (!_.test(l)) {
                        l = b.createTextNode(l)
                    } else {
                        l = l.replace(Y, "<$1></$2>");
                        var m = (Z.exec(l) || ["", ""])[1].toLowerCase(),
                            n = bg[m] || bg._default,
                            o = n[0],
                            p = b.createElement("div"),
                            q = bh.childNodes,
                            r;
                        b === c ? bh.appendChild(p) : U(b).appendChild(p), p.innerHTML = n[1] + l + n[2];
                        while (o--) {
                            p = p.lastChild
                        }
                        if (!f.support.tbody) {
                            var s = $.test(l),
                                t = m === "table" && !s ? p.firstChild && p.firstChild.childNodes : n[1] === "<table>" && !s ? p.childNodes : [];
                            for (i = t.length - 1; i >= 0; --i) {
                                f.nodeName(t[i], "tbody") && !t[i].childNodes.length && t[i].parentNode.removeChild(t[i])
                            }
                        }!f.support.leadingWhitespace && X.test(l) && p.insertBefore(b.createTextNode(X.exec(l)[0]), p.firstChild), l = p.childNodes, p && (p.parentNode.removeChild(p), q.length > 0 && (r = q[q.length - 1], r && r.parentNode && r.parentNode.removeChild(r)))
                    }
                }
                var u;
                if (!f.support.appendChecked) {
                    if (l[0] && typeof (u = l.length) == "number") {
                        for (i = 0; i < u; i++) {
                            bn(l[i])
                        }
                    } else {
                        bn(l)
                    }
                }
                l.nodeType ? j.push(l) : j = f.merge(j, l)
            }
            if (d) {
                g = function (a) {
                    return !a.type || be.test(a.type)
                };
                for (k = 0; j[k]; k++) {
                    h = j[k];
                    if (e && f.nodeName(h, "script") && (!h.type || be.test(h.type))) {
                        e.push(h.parentNode ? h.parentNode.removeChild(h) : h)
                    } else {
                        if (h.nodeType === 1) {
                            var v = f.grep(h.getElementsByTagName("script"), g);
                            j.splice.apply(j, [k + 1, 0].concat(v))
                        }
                        d.appendChild(h)
                    }
                }
            }
            return j
        },
        cleanData: function (a) {
            var b, c, d = f.cache,
                e = f.event.special,
                g = f.support.deleteExpando;
            for (var h = 0, i;
                (i = a[h]) != null; h++) {
                if (i.nodeName && f.noData[i.nodeName.toLowerCase()]) {
                    continue
                }
                c = i[f.expando];
                if (c) {
                    b = d[c];
                    if (b && b.events) {
                        for (var j in b.events) {
                            e[j] ? f.event.remove(i, j) : f.removeEvent(i, j, b.handle)
                        }
                        b.handle && (b.handle.elem = null)
                    }
                    g ? delete i[f.expando] : i.removeAttribute && i.removeAttribute(f.expando), delete d[c]
                }
            }
        }
    });
    var bp = /alpha\([^)]*\)/i,
        bq = /opacity=([^)]*)/,
        br = /([A-Z]|^ms)/g,
        bs = /^[\-+]?(?:\d*\.)?\d+$/i,
        bt = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,
        bu = /^([\-+])=([\-+.\de]+)/,
        bv = /^margin/,
        bw = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        bx = ["Top", "Right", "Bottom", "Left"],
        by, bz, bA;
    f.fn.css = function (a, c) {
        return f.access(this, function (a, c, d) {
            return d !== b ? f.style(a, c, d) : f.css(a, c)
        }, a, c, arguments.length > 1)
    }, f.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = by(a, "opacity");
                        return c === "" ? "1" : c
                    }
                    return a.style.opacity
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": f.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (a, c, d, e) {
            if (!!a && a.nodeType !== 3 && a.nodeType !== 8 && !!a.style) {
                var g, h, i = f.camelCase(c),
                    j = a.style,
                    k = f.cssHooks[i];
                c = f.cssProps[i] || i;
                if (d === b) {
                    if (k && "get" in k && (g = k.get(a, !1, e)) !== b) {
                        return g
                    }
                    return j[c]
                }
                h = typeof d, h === "string" && (g = bu.exec(d)) && (d = +(g[1] + 1) * +g[2] + parseFloat(f.css(a, c)), h = "number");
                if (d == null || h === "number" && isNaN(d)) {
                    return
                }
                h === "number" && !f.cssNumber[i] && (d += "px");
                if (!k || !("set" in k) || (d = k.set(a, d)) !== b) {
                    try {
                        j[c] = d
                    } catch (l) {}
                }
            }
        },
        css: function (a, c, d) {
            var e, g;
            c = f.camelCase(c), g = f.cssHooks[c], c = f.cssProps[c] || c, c === "cssFloat" && (c = "float");
            if (g && "get" in g && (e = g.get(a, !0, d)) !== b) {
                return e
            }
            if (by) {
                return by(a, c)
            }
        },
        swap: function (a, b, c) {
            var d = {},
                e, f;
            for (f in b) {
                d[f] = a.style[f], a.style[f] = b[f]
            }
            e = c.call(a);
            for (f in b) {
                a.style[f] = d[f]
            }
            return e
        }
    }), f.curCSS = f.css, c.defaultView && c.defaultView.getComputedStyle && (bz = function (a, b) {
        var c, d, e, g, h = a.style;
        b = b.replace(br, "-$1").toLowerCase(), (d = a.ownerDocument.defaultView) && (e = d.getComputedStyle(a, null)) && (c = e.getPropertyValue(b), c === "" && !f.contains(a.ownerDocument.documentElement, a) && (c = f.style(a, b))), !f.support.pixelMargin && e && bv.test(b) && bt.test(c) && (g = h.width, h.width = c, c = e.width, h.width = g);
        return c
    }), c.documentElement.currentStyle && (bA = function (a, b) {
        var c, d, e, f = a.currentStyle && a.currentStyle[b],
            g = a.style;
        f == null && g && (e = g[b]) && (f = e), bt.test(f) && (c = g.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), g.left = b === "fontSize" ? "1em" : f, f = g.pixelLeft + "px", g.left = c, d && (a.runtimeStyle.left = d));
        return f === "" ? "auto" : f
    }), by = bz || bA, f.each(["height", "width"], function (a, b) {
        f.cssHooks[b] = {
            get: function (a, c, d) {
                if (c) {
                    return a.offsetWidth !== 0 ? bB(a, b, d) : f.swap(a, bw, function () {
                        return bB(a, b, d)
                    })
                }
            },
            set: function (a, b) {
                return bs.test(b) ? b + "px" : b
            }
        }
    }), f.support.opacity || (f.cssHooks.opacity = {
        get: function (a, b) {
            return bq.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
        },
        set: function (a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = f.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")" : "",
                g = d && d.filter || c.filter || "";
            c.zoom = 1;
            if (b >= 1 && f.trim(g.replace(bp, "")) === "") {
                c.removeAttribute("filter");
                if (d && !d.filter) {
                    return
                }
            }
            c.filter = bp.test(g) ? g.replace(bp, e) : g + " " + e
        }
    }), f(function () {
        f.support.reliableMarginRight || (f.cssHooks.marginRight = {
            get: function (a, b) {
                return f.swap(a, {
                    display: "inline-block"
                }, function () {
                    return b ? by(a, "margin-right") : a.style.marginRight
                })
            }
        })
    }), f.expr && f.expr.filters && (f.expr.filters.hidden = function (a) {
        var b = a.offsetWidth,
            c = a.offsetHeight;
        return b === 0 && c === 0 || !f.support.reliableHiddenOffsets && (a.style && a.style.display || f.css(a, "display")) === "none"
    }, f.expr.filters.visible = function (a) {
        return !f.expr.filters.hidden(a)
    }), f.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (a, b) {
        f.cssHooks[a + b] = {
            expand: function (c) {
                var d, e = typeof c == "string" ? c.split(" ") : [c],
                    f = {};
                for (d = 0; d < 4; d++) {
                    f[a + bx[d] + b] = e[d] || e[d - 2] || e[0]
                }
                return f
            }
        }
    });
    var bC = /%20/g,
        bD = /\[\]$/,
        bE = /\r?\n/g,
        bF = /#.*$/,
        bG = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        bH = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        bI = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        bJ = /^(?:GET|HEAD)$/,
        bK = /^\/\//,
        bL = /\?/,
        bM = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        bN = /^(?:select|textarea)/i,
        bO = /\s+/,
        bP = /([?&])_=[^&]*/,
        bQ = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
        bR = f.fn.load,
        bS = {},
        bT = {},
        bU, bV, bW = ["*/"] + ["*"];
    try {
        bU = e.href
    } catch (bX) {
        bU = c.createElement("a"), bU.href = "", bU = bU.href
    }
    bV = bQ.exec(bU.toLowerCase()) || [], f.fn.extend({
        load: function (a, c, d) {
            if (typeof a != "string" && bR) {
                return bR.apply(this, arguments)
            }
            if (!this.length) {
                return this
            }
            var e = a.indexOf(" ");
            if (e >= 0) {
                var g = a.slice(e, a.length);
                a = a.slice(0, e)
            }
            var h = "GET";
            c && (f.isFunction(c) ? (d = c, c = b) : typeof c == "object" && (c = f.param(c, f.ajaxSettings.traditional), h = "POST"));
            var i = this;
            f.ajax({
                url: a,
                type: h,
                dataType: "html",
                data: c,
                complete: function (a, b, c) {
                    c = a.responseText, a.isResolved() && (a.done(function (a) {
                        c = a
                    }), i.html(g ? f("<div>").append(c.replace(bM, "")).find(g) : c)), d && i.each(d, [c, b, a])
                }
            });
            return this
        },
        serialize: function () {
            return f.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                return this.elements ? f.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || bN.test(this.nodeName) || bH.test(this.type))
            }).map(function (a, b) {
                var c = f(this).val();
                return c == null ? null : f.isArray(c) ? f.map(c, function (a, c) {
                    return {
                        name: b.name,
                        value: a.replace(bE, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(bE, "\r\n")
                }
            }).get()
        }
    }), f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (a, b) {
        f.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), f.each(["get", "post"], function (a, c) {
        f[c] = function (a, d, e, g) {
            f.isFunction(d) && (g = g || e, e = d, d = b);
            return f.ajax({
                type: c,
                url: a,
                data: d,
                success: e,
                dataType: g
            })
        }
    }), f.extend({
        getScript: function (a, c) {
            return f.get(a, b, c, "script")
        },
        getJSON: function (a, b, c) {
            return f.get(a, b, c, "json")
        },
        ajaxSetup: function (a, b) {
            b ? b$(a, f.ajaxSettings) : (b = a, a = f.ajaxSettings), b$(a, b);
            return a
        },
        ajaxSettings: {
            url: bU,
            isLocal: bI.test(bV[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": bW
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": a.String,
                "text html": !0,
                "text json": f.parseJSON,
                "text xml": f.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: bY(bS),
        ajaxTransport: bY(bT),
        ajax: function (a, c) {
            function w(a, c, l, m) {
                if (s !== 2) {
                    s = 2, q && clearTimeout(q), p = b, n = m || "", v.readyState = a > 0 ? 4 : 0;
                    var o, r, u, w = c,
                        x = l ? ca(d, v, l) : b,
                        y, z;
                    if (a >= 200 && a < 300 || a === 304) {
                        if (d.ifModified) {
                            if (y = v.getResponseHeader("Last-Modified")) {
                                f.lastModified[k] = y
                            }
                            if (z = v.getResponseHeader("Etag")) {
                                f.etag[k] = z
                            }
                        }
                        if (a === 304) {
                            w = "notmodified", o = !0
                        } else {
                            try {
                                r = cb(d, x), w = "success", o = !0
                            } catch (A) {
                                w = "parsererror", u = A
                            }
                        }
                    } else {
                        u = w;
                        if (!w || a) {
                            w = "error", a < 0 && (a = 0)
                        }
                    }
                    v.status = a, v.statusText = "" + (c || w), o ? h.resolveWith(e, [r, w, v]) : h.rejectWith(e, [v, w, u]), v.statusCode(j), j = b, t && g.trigger("ajax" + (o ? "Success" : "Error"), [v, d, o ? r : u]), i.fireWith(e, [v, w]), t && (g.trigger("ajaxComplete", [v, d]), --f.active || f.event.trigger("ajaxStop"))
                }
            }
            typeof a == "object" && (c = a, a = b), c = c || {};
            var d = f.ajaxSetup({}, c),
                e = d.context || d,
                g = e !== d && (e.nodeType || e instanceof f) ? f(e) : f.event,
                h = f.Deferred(),
                i = f.Callbacks("once memory"),
                j = d.statusCode || {},
                k, l = {},
                m = {},
                n, o, p, q, r, s = 0,
                t, u, v = {
                    readyState: 0,
                    setRequestHeader: function (a, b) {
                        if (!s) {
                            var c = a.toLowerCase();
                            a = m[c] = m[c] || a, l[a] = b
                        }
                        return this
                    },
                    getAllResponseHeaders: function () {
                        return s === 2 ? n : null
                    },
                    getResponseHeader: function (a) {
                        var c;
                        if (s === 2) {
                            if (!o) {
                                o = {};
                                while (c = bG.exec(n)) {
                                    o[c[1].toLowerCase()] = c[2]
                                }
                            }
                            c = o[a.toLowerCase()]
                        }
                        return c === b ? null : c
                    },
                    overrideMimeType: function (a) {
                        s || (d.mimeType = a);
                        return this
                    },
                    abort: function (a) {
                        a = a || "abort", p && p.abort(a), w(0, a);
                        return this
                    }
                };
            h.promise(v), v.success = v.done, v.error = v.fail, v.complete = i.add, v.statusCode = function (a) {
                if (a) {
                    var b;
                    if (s < 2) {
                        for (b in a) {
                            j[b] = [j[b], a[b]]
                        }
                    } else {
                        b = a[v.status], v.then(b, b)
                    }
                }
                return this
            }, d.url = ((a || d.url) + "").replace(bF, "").replace(bK, bV[1] + "//"), d.dataTypes = f.trim(d.dataType || "*").toLowerCase().split(bO), d.crossDomain == null && (r = bQ.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] == bV[1] && r[2] == bV[2] && (r[3] || (r[1] === "http:" ? 80 : 443)) == (bV[3] || (bV[1] === "http:" ? 80 : 443)))), d.data && d.processData && typeof d.data != "string" && (d.data = f.param(d.data, d.traditional)), bZ(bS, d, c, v);
            if (s === 2) {
                return !1
            }
            t = d.global, d.type = d.type.toUpperCase(), d.hasContent = !bJ.test(d.type), t && f.active++ === 0 && f.event.trigger("ajaxStart");
            if (!d.hasContent) {
                d.data && (d.url += (bL.test(d.url) ? "&" : "?") + d.data, delete d.data), k = d.url;
                if (d.cache === !1) {
                    var x = f.now(),
                        y = d.url.replace(bP, "$1_=" + x);
                    d.url = y + (y === d.url ? (bL.test(d.url) ? "&" : "?") + "_=" + x : "")
                }
            }(d.data && d.hasContent && d.contentType !== !1 || c.contentType) && v.setRequestHeader("Content-Type", d.contentType), d.ifModified && (k = k || d.url, f.lastModified[k] && v.setRequestHeader("If-Modified-Since", f.lastModified[k]), f.etag[k] && v.setRequestHeader("If-None-Match", f.etag[k])), v.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + (d.dataTypes[0] !== "*" ? ", " + bW + "; q=0.01" : "") : d.accepts["*"]);
            for (u in d.headers) {
                v.setRequestHeader(u, d.headers[u])
            }
            if (d.beforeSend && (d.beforeSend.call(e, v, d) === !1 || s === 2)) {
                v.abort();
                return !1
            }
            for (u in {
                success: 1,
                error: 1,
                complete: 1
            }) {
                v[u](d[u])
            }
            p = bZ(bT, d, c, v);
            if (!p) {
                w(-1, "No Transport")
            } else {
                v.readyState = 1, t && g.trigger("ajaxSend", [v, d]), d.async && d.timeout > 0 && (q = setTimeout(function () {
                    v.abort("timeout")
                }, d.timeout));
                try {
                    s = 1, p.send(l, w)
                } catch (z) {
                    if (s < 2) {
                        w(-1, z)
                    } else {
                        throw z
                    }
                }
            }
            return v
        },
        param: function (a, c) {
            var d = [],
                e = function (a, b) {
                    b = f.isFunction(b) ? b() : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
                };
            c === b && (c = f.ajaxSettings.traditional);
            if (f.isArray(a) || a.jquery && !f.isPlainObject(a)) {
                f.each(a, function () {
                    e(this.name, this.value)
                })
            } else {
                for (var g in a) {
                    b_(g, a[g], c, e)
                }
            }
            return d.join("&").replace(bC, "+")
        }
    }), f.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });
    var cc = f.now(),
        cd = /(\=)\?(&|$)|\?\?/i;
    f.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            return f.expando + "_" + cc++
        }
    }), f.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e = typeof b.data == "string" && /^application\/x\-www\-form\-urlencoded/.test(b.contentType);
        if (b.dataTypes[0] === "jsonp" || b.jsonp !== !1 && (cd.test(b.url) || e && cd.test(b.data))) {
            var g, h = b.jsonpCallback = f.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
                i = a[h],
                j = b.url,
                k = b.data,
                l = "$1" + h + "$2";
            b.jsonp !== !1 && (j = j.replace(cd, l), b.url === j && (e && (k = k.replace(cd, l)), b.data === k && (j += (/\?/.test(j) ? "&" : "?") + b.jsonp + "=" + h))), b.url = j, b.data = k, a[h] = function (a) {
                g = [a]
            }, d.always(function () {
                a[h] = i, g && f.isFunction(i) && a[h](g[0])
            }), b.converters["script json"] = function () {
                g || f.error(h + " was not called");
                return g[0]
            }, b.dataTypes[0] = "json";
            return "script"
        }
    }), f.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function (a) {
                f.globalEval(a);
                return a
            }
        }
    }), f.ajaxPrefilter("script", function (a) {
        a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), f.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var d, e = c.head || c.getElementsByTagName("head")[0] || c.documentElement;
            return {
                send: function (f, g) {
                    d = c.createElement("script"), d.async = "async", a.scriptCharset && (d.charset = a.scriptCharset), d.src = a.url, d.onload = d.onreadystatechange = function (a, c) {
                        if (c || !d.readyState || /loaded|complete/.test(d.readyState)) {
                            d.onload = d.onreadystatechange = null, e && d.parentNode && e.removeChild(d), d = b, c || g(200, "success")
                        }
                    }, e.insertBefore(d, e.firstChild)
                },
                abort: function () {
                    d && d.onload(0, 1)
                }
            }
        }
    });
    var ce = a.ActiveXObject ? function () {
            for (var a in cg) {
                cg[a](0, 1)
            }
        } : !1,
        cf = 0,
        cg;
    f.ajaxSettings.xhr = a.ActiveXObject ? function () {
            return !this.isLocal && ch() || ci()
        } : ch,
        function (a) {
            f.extend(f.support, {
                ajax: !!a,
                cors: !!a && "withCredentials" in a
            })
        }(f.ajaxSettings.xhr()), f.support.ajax && f.ajaxTransport(function (c) {
            if (!c.crossDomain || f.support.cors) {
                var d;
                return {
                    send: function (e, g) {
                        var h = c.xhr(),
                            i, j;
                        c.username ? h.open(c.type, c.url, c.async, c.username, c.password) : h.open(c.type, c.url, c.async);
                        if (c.xhrFields) {
                            for (j in c.xhrFields) {
                                h[j] = c.xhrFields[j]
                            }
                        }
                        c.mimeType && h.overrideMimeType && h.overrideMimeType(c.mimeType), !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (j in e) {
                                h.setRequestHeader(j, e[j])
                            }
                        } catch (k) {}
                        h.send(c.hasContent && c.data || null), d = function (a, e) {
                            var j, k, l, m, n;
                            try {
                                if (d && (e || h.readyState === 4)) {
                                    d = b, i && (h.onreadystatechange = f.noop, ce && delete cg[i]);
                                    if (e) {
                                        h.readyState !== 4 && h.abort()
                                    } else {
                                        j = h.status, l = h.getAllResponseHeaders(), m = {}, n = h.responseXML, n && n.documentElement && (m.xml = n);
                                        try {
                                            m.text = h.responseText
                                        } catch (a) {}
                                        try {
                                            k = h.statusText
                                        } catch (o) {
                                            k = ""
                                        }!j && c.isLocal && !c.crossDomain ? j = m.text ? 200 : 404 : j === 1223 && (j = 204)
                                    }
                                }
                            } catch (p) {
                                e || g(-1, p)
                            }
                            m && g(j, k, m, l)
                        }, !c.async || h.readyState === 4 ? d() : (i = ++cf, ce && (cg || (cg = {}, f(a).unload(ce)), cg[i] = d), h.onreadystatechange = d)
                    },
                    abort: function () {
                        d && d(0, 1)
                    }
                }
            }
        });
    var cj = {},
        ck, cl, cm = /^(?:toggle|show|hide)$/,
        cn = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
        co, cp = [
            ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
            ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
            ["opacity"]
        ],
        cq;
    f.fn.extend({
        show: function (a, b, c) {
            var d, e;
            if (a || a === 0) {
                return this.animate(ct("show", 3), a, b, c)
            }
            for (var g = 0, h = this.length; g < h; g++) {
                d = this[g], d.style && (e = d.style.display, !f._data(d, "olddisplay") && e === "none" && (e = d.style.display = ""), (e === "" && f.css(d, "display") === "none" || !f.contains(d.ownerDocument.documentElement, d)) && f._data(d, "olddisplay", cu(d.nodeName)))
            }
            for (g = 0; g < h; g++) {
                d = this[g];
                if (d.style) {
                    e = d.style.display;
                    if (e === "" || e === "none") {
                        d.style.display = f._data(d, "olddisplay") || ""
                    }
                }
            }
            return this
        },
        hide: function (a, b, c) {
            if (a || a === 0) {
                return this.animate(ct("hide", 3), a, b, c)
            }
            var d, e, g = 0,
                h = this.length;
            for (; g < h; g++) {
                d = this[g], d.style && (e = f.css(d, "display"), e !== "none" && !f._data(d, "olddisplay") && f._data(d, "olddisplay", e))
            }
            for (g = 0; g < h; g++) {
                this[g].style && (this[g].style.display = "none")
            }
            return this
        },
        _toggle: f.fn.toggle,
        toggle: function (a, b, c) {
            var d = typeof a == "boolean";
            f.isFunction(a) && f.isFunction(b) ? this._toggle.apply(this, arguments) : a == null || d ? this.each(function () {
                var b = d ? a : f(this).is(":hidden");
                f(this)[b ? "show" : "hide"]()
            }) : this.animate(ct("toggle", 3), a, b, c);
            return this
        },
        fadeTo: function (a, b, c, d) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function (a, b, c, d) {
            function g() {
                e.queue === !1 && f._mark(this);
                var b = f.extend({}, e),
                    c = this.nodeType === 1,
                    d = c && f(this).is(":hidden"),
                    g, h, i, j, k, l, m, n, o, p, q;
                b.animatedProperties = {};
                for (i in a) {
                    g = f.camelCase(i), i !== g && (a[g] = a[i], delete a[i]);
                    if ((k = f.cssHooks[g]) && "expand" in k) {
                        l = k.expand(a[g]), delete a[g];
                        for (i in l) {
                            i in a || (a[i] = l[i])
                        }
                    }
                }
                for (g in a) {
                    h = a[g], f.isArray(h) ? (b.animatedProperties[g] = h[1], h = a[g] = h[0]) : b.animatedProperties[g] = b.specialEasing && b.specialEasing[g] || b.easing || "swing";
                    if (h === "hide" && d || h === "show" && !d) {
                        return b.complete.call(this)
                    }
                    c && (g === "height" || g === "width") && (b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], f.css(this, "display") === "inline" && f.css(this, "float") === "none" && (!f.support.inlineBlockNeedsLayout || cu(this.nodeName) === "inline" ? this.style.display = "inline-block" : this.style.zoom = 1))
                }
                b.overflow != null && (this.style.overflow = "hidden");
                for (i in a) {
                    j = new f.fx(this, b, i), h = a[i], cm.test(h) ? (q = f._data(this, "toggle" + i) || (h === "toggle" ? d ? "show" : "hide" : 0), q ? (f._data(this, "toggle" + i, q === "show" ? "hide" : "show"), j[q]()) : j[h]()) : (m = cn.exec(h), n = j.cur(), m ? (o = parseFloat(m[2]), p = m[3] || (f.cssNumber[i] ? "" : "px"), p !== "px" && (f.style(this, i, (o || 1) + p), n = (o || 1) / j.cur() * n, f.style(this, i, n + p)), m[1] && (o = (m[1] === "-=" ? -1 : 1) * o + n), j.custom(n, o, p)) : j.custom(n, h, ""))
                }
                return !0
            }
            var e = f.speed(b, c, d);
            if (f.isEmptyObject(a)) {
                return this.each(e.complete, [!1])
            }
            a = f.extend({}, a);
            return e.queue === !1 ? this.each(g) : this.queue(e.queue, g)
        },
        stop: function (a, c, d) {
            typeof a != "string" && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []);
            return this.each(function () {
                function h(a, b, c) {
                    var e = b[c];
                    f.removeData(a, c, !0), e.stop(d)
                }
                var b, c = !1,
                    e = f.timers,
                    g = f._data(this);
                d || f._unmark(!0, this);
                if (a == null) {
                    for (b in g) {
                        g[b] && g[b].stop && b.indexOf(".run") === b.length - 4 && h(this, g, b)
                    }
                } else {
                    g[b = a + ".run"] && g[b].stop && h(this, g, b)
                }
                for (b = e.length; b--;) {
                    e[b].elem === this && (a == null || e[b].queue === a) && (d ? e[b](!0) : e[b].saveState(), c = !0, e.splice(b, 1))
                }(!d || !c) && f.dequeue(this, a)
            })
        }
    }), f.each({
        slideDown: ct("show", 1),
        slideUp: ct("hide", 1),
        slideToggle: ct("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (a, b) {
        f.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), f.extend({
        speed: function (a, b, c) {
            var d = a && typeof a == "object" ? f.extend({}, a) : {
                complete: c || !c && b || f.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !f.isFunction(b) && b
            };
            d.duration = f.fx.off ? 0 : typeof d.duration == "number" ? d.duration : d.duration in f.fx.speeds ? f.fx.speeds[d.duration] : f.fx.speeds._default;
            if (d.queue == null || d.queue === !0) {
                d.queue = "fx"
            }
            d.old = d.complete, d.complete = function (a) {
                f.isFunction(d.old) && d.old.call(this), d.queue ? f.dequeue(this, d.queue) : a !== !1 && f._unmark(this)
            };
            return d
        },
        easing: {
            linear: function (a) {
                return a
            },
            swing: function (a) {
                return -Math.cos(a * Math.PI) / 2 + 0.5
            }
        },
        timers: [],
        fx: function (a, b, c) {
            this.options = b, this.elem = a, this.prop = c, b.orig = b.orig || {}
        }
    }), f.fx.prototype = {
        update: function () {
            this.options.step && this.options.step.call(this.elem, this.now, this), (f.fx.step[this.prop] || f.fx.step._default)(this)
        },
        cur: function () {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) {
                return this.elem[this.prop]
            }
            var a, b = f.css(this.elem, this.prop);
            return isNaN(a = parseFloat(b)) ? !b || b === "auto" ? 0 : b : a
        },
        custom: function (a, c, d) {
            function h(a) {
                return e.step(a)
            }
            var e = this,
                g = f.fx;
            this.startTime = cq || cr(), this.end = c, this.now = this.start = a, this.pos = this.state = 0, this.unit = d || this.unit || (f.cssNumber[this.prop] ? "" : "px"), h.queue = this.options.queue, h.elem = this.elem, h.saveState = function () {
                f._data(e.elem, "fxshow" + e.prop) === b && (e.options.hide ? f._data(e.elem, "fxshow" + e.prop, e.start) : e.options.show && f._data(e.elem, "fxshow" + e.prop, e.end))
            }, h() && f.timers.push(h) && !co && (co = setInterval(g.tick, g.interval))
        },
        show: function () {
            var a = f._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = a || f.style(this.elem, this.prop), this.options.show = !0, a !== b ? this.custom(this.cur(), a) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()), f(this.elem).show()
        },
        hide: function () {
            this.options.orig[this.prop] = f._data(this.elem, "fxshow" + this.prop) || f.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
        },
        step: function (a) {
            var b, c, d, e = cq || cr(),
                g = !0,
                h = this.elem,
                i = this.options;
            if (a || e >= i.duration + this.startTime) {
                this.now = this.end, this.pos = this.state = 1, this.update(), i.animatedProperties[this.prop] = !0;
                for (b in i.animatedProperties) {
                    i.animatedProperties[b] !== !0 && (g = !1)
                }
                if (g) {
                    i.overflow != null && !f.support.shrinkWrapBlocks && f.each(["", "X", "Y"], function (a, b) {
                        h.style["overflow" + b] = i.overflow[a]
                    }), i.hide && f(h).hide();
                    if (i.hide || i.show) {
                        for (b in i.animatedProperties) {
                            f.style(h, b, i.orig[b]), f.removeData(h, "fxshow" + b, !0), f.removeData(h, "toggle" + b, !0)
                        }
                    }
                    d = i.complete, d && (i.complete = !1, d.call(h))
                }
                return !1
            }
            i.duration == Infinity ? this.now = e : (c = e - this.startTime, this.state = c / i.duration, this.pos = f.easing[i.animatedProperties[this.prop]](this.state, c, 0, 1, i.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update();
            return !0
        }
    }, f.extend(f.fx, {
        tick: function () {
            var a, b = f.timers,
                c = 0;
            for (; c < b.length; c++) {
                a = b[c], !a() && b[c] === a && b.splice(c--, 1)
            }
            b.length || f.fx.stop()
        },
        interval: 13,
        stop: function () {
            clearInterval(co), co = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function (a) {
                f.style(a.elem, "opacity", a.now)
            },
            _default: function (a) {
                a.elem.style && a.elem.style[a.prop] != null ? a.elem.style[a.prop] = a.now + a.unit : a.elem[a.prop] = a.now
            }
        }
    }), f.each(cp.concat.apply([], cp), function (a, b) {
        b.indexOf("margin") && (f.fx.step[b] = function (a) {
            f.style(a.elem, b, Math.max(0, a.now) + a.unit)
        })
    }), f.expr && f.expr.filters && (f.expr.filters.animated = function (a) {
        return f.grep(f.timers, function (b) {
            return a === b.elem
        }).length
    });
    var cv, cw = /^t(?:able|d|h)$/i,
        cx = /^(?:body|html)$/i;
    "getBoundingClientRect" in c.documentElement ? cv = function (a, b, c, d) {
        try {
            d = a.getBoundingClientRect()
        } catch (e) {}
        if (!d || !f.contains(c, a)) {
            return d ? {
                top: d.top,
                left: d.left
            } : {
                top: 0,
                left: 0
            }
        }
        var g = b.body,
            h = cy(b),
            i = c.clientTop || g.clientTop || 0,
            j = c.clientLeft || g.clientLeft || 0,
            k = h.pageYOffset || f.support.boxModel && c.scrollTop || g.scrollTop,
            l = h.pageXOffset || f.support.boxModel && c.scrollLeft || g.scrollLeft,
            m = d.top + k - i,
            n = d.left + l - j;
        return {
            top: m,
            left: n
        }
    } : cv = function (a, b, c) {
        var d, e = a.offsetParent,
            g = a,
            h = b.body,
            i = b.defaultView,
            j = i ? i.getComputedStyle(a, null) : a.currentStyle,
            k = a.offsetTop,
            l = a.offsetLeft;
        while ((a = a.parentNode) && a !== h && a !== c) {
            if (f.support.fixedPosition && j.position === "fixed") {
                break
            }
            d = i ? i.getComputedStyle(a, null) : a.currentStyle, k -= a.scrollTop, l -= a.scrollLeft, a === e && (k += a.offsetTop, l += a.offsetLeft, f.support.doesNotAddBorder && (!f.support.doesAddBorderForTableAndCells || !cw.test(a.nodeName)) && (k += parseFloat(d.borderTopWidth) || 0, l += parseFloat(d.borderLeftWidth) || 0), g = e, e = a.offsetParent), f.support.subtractsBorderForOverflowNotVisible && d.overflow !== "visible" && (k += parseFloat(d.borderTopWidth) || 0, l += parseFloat(d.borderLeftWidth) || 0), j = d
        }
        if (j.position === "relative" || j.position === "static") {
            k += h.offsetTop, l += h.offsetLeft
        }
        f.support.fixedPosition && j.position === "fixed" && (k += Math.max(c.scrollTop, h.scrollTop), l += Math.max(c.scrollLeft, h.scrollLeft));
        return {
            top: k,
            left: l
        }
    }, f.fn.offset = function (a) {
        if (arguments.length) {
            return a === b ? this : this.each(function (b) {
                f.offset.setOffset(this, a, b)
            })
        }
        var c = this[0],
            d = c && c.ownerDocument;
        if (!d) {
            return null
        }
        if (c === d.body) {
            return f.offset.bodyOffset(c)
        }
        return cv(c, d, d.documentElement)
    }, f.offset = {
        bodyOffset: function (a) {
            var b = a.offsetTop,
                c = a.offsetLeft;
            f.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(f.css(a, "marginTop")) || 0, c += parseFloat(f.css(a, "marginLeft")) || 0);
            return {
                top: b,
                left: c
            }
        },
        setOffset: function (a, b, c) {
            var d = f.css(a, "position");
            d === "static" && (a.style.position = "relative");
            var e = f(a),
                g = e.offset(),
                h = f.css(a, "top"),
                i = f.css(a, "left"),
                j = (d === "absolute" || d === "fixed") && f.inArray("auto", [h, i]) > -1,
                k = {},
                l = {},
                m, n;
            j ? (l = e.position(), m = l.top, n = l.left) : (m = parseFloat(h) || 0, n = parseFloat(i) || 0), f.isFunction(b) && (b = b.call(a, c, g)), b.top != null && (k.top = b.top - g.top + m), b.left != null && (k.left = b.left - g.left + n), "using" in b ? b.using.call(a, k) : e.css(k)
        }
    }, f.fn.extend({
        position: function () {
            if (!this[0]) {
                return null
            }
            var a = this[0],
                b = this.offsetParent(),
                c = this.offset(),
                d = cx.test(b[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : b.offset();
            c.top -= parseFloat(f.css(a, "marginTop")) || 0, c.left -= parseFloat(f.css(a, "marginLeft")) || 0, d.top += parseFloat(f.css(b[0], "borderTopWidth")) || 0, d.left += parseFloat(f.css(b[0], "borderLeftWidth")) || 0;
            return {
                top: c.top - d.top,
                left: c.left - d.left
            }
        },
        offsetParent: function () {
            return this.map(function () {
                var a = this.offsetParent || c.body;
                while (a && !cx.test(a.nodeName) && f.css(a, "position") === "static") {
                    a = a.offsetParent
                }
                return a
            })
        }
    }), f.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (a, c) {
        var d = /Y/.test(c);
        f.fn[a] = function (e) {
            return f.access(this, function (a, e, g) {
                var h = cy(a);
                if (g === b) {
                    return h ? c in h ? h[c] : f.support.boxModel && h.document.documentElement[e] || h.document.body[e] : a[e]
                }
                h ? h.scrollTo(d ? f(h).scrollLeft() : g, d ? g : f(h).scrollTop()) : a[e] = g
            }, a, e, arguments.length, null)
        }
    }), f.each({
        Height: "height",
        Width: "width"
    }, function (a, c) {
        var d = "client" + a,
            e = "scroll" + a,
            g = "offset" + a;
        f.fn["inner" + a] = function () {
            var a = this[0];
            return a ? a.style ? parseFloat(f.css(a, c, "padding")) : this[c]() : null
        }, f.fn["outer" + a] = function (a) {
            var b = this[0];
            return b ? b.style ? parseFloat(f.css(b, c, a ? "margin" : "border")) : this[c]() : null
        }, f.fn[c] = function (a) {
            return f.access(this, function (a, c, h) {
                var i, j, k, l;
                if (f.isWindow(a)) {
                    i = a.document, j = i.documentElement[d];
                    return f.support.boxModel && j || i.body && i.body[d] || j
                }
                if (a.nodeType === 9) {
                    i = a.documentElement;
                    if (i[d] >= i[e]) {
                        return i[d]
                    }
                    return Math.max(a.body[e], i[e], a.body[g], i[g])
                }
                if (h === b) {
                    k = f.css(a, c), l = parseFloat(k);
                    return f.isNumeric(l) ? l : k
                }
                f(a).css(c, h)
            }, c, a, arguments.length, null)
        }
    }), a.jQuery = a.$ = f, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function () {
        return f
    })
})(window);
/*
 * jQuery UI 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */
(function (b, e) {
    b.ui = b.ui || {};
    if (b.ui.version) {
        return
    }
    b.extend(b.ui, {
        version: "1.8.18",
        keyCode: {
            ALT: 18,
            BACKSPACE: 8,
            CAPS_LOCK: 20,
            COMMA: 188,
            COMMAND: 91,
            COMMAND_LEFT: 91,
            COMMAND_RIGHT: 93,
            CONTROL: 17,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            INSERT: 45,
            LEFT: 37,
            MENU: 93,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SHIFT: 16,
            SPACE: 32,
            TAB: 9,
            UP: 38,
            WINDOWS: 91
        }
    });
    b.fn.extend({
        propAttr: b.fn.prop || b.fn.attr,
        _focus: b.fn.focus,
        focus: function (f, g) {
            return typeof f === "number" ? this.each(function () {
                var h = this;
                setTimeout(function () {
                    b(h).focus();
                    if (g) {
                        g.call(h)
                    }
                }, f)
            }) : this._focus.apply(this, arguments)
        },
        scrollParent: function () {
            var f;
            if ((b.browser.msie && (/(static|relative)/).test(this.css("position"))) || (/absolute/).test(this.css("position"))) {
                f = this.parents().filter(function () {
                    return (/(relative|absolute|fixed)/).test(b.curCSS(this, "position", 1)) && (/(auto|scroll)/).test(b.curCSS(this, "overflow", 1) + b.curCSS(this, "overflow-y", 1) + b.curCSS(this, "overflow-x", 1))
                }).eq(0)
            } else {
                f = this.parents().filter(function () {
                    return (/(auto|scroll)/).test(b.curCSS(this, "overflow", 1) + b.curCSS(this, "overflow-y", 1) + b.curCSS(this, "overflow-x", 1))
                }).eq(0)
            }
            return (/fixed/).test(this.css("position")) || !f.length ? b(document) : f
        },
        zIndex: function (j) {
            if (j !== e) {
                return this.css("zIndex", j)
            }
            if (this.length) {
                var g = b(this[0]),
                    f, h;
                while (g.length && g[0] !== document) {
                    f = g.css("position");
                    if (f === "absolute" || f === "relative" || f === "fixed") {
                        h = parseInt(g.css("zIndex"), 10);
                        if (!isNaN(h) && h !== 0) {
                            return h
                        }
                    }
                    g = g.parent()
                }
            }
            return 0
        },
        disableSelection: function () {
            return this.bind((b.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (f) {
                f.preventDefault()
            })
        },
        enableSelection: function () {
            return this.unbind(".ui-disableSelection")
        }
    });
    b.each(["Width", "Height"], function (h, f) {
        var g = f === "Width" ? ["Left", "Right"] : ["Top", "Bottom"],
            j = f.toLowerCase(),
            l = {
                innerWidth: b.fn.innerWidth,
                innerHeight: b.fn.innerHeight,
                outerWidth: b.fn.outerWidth,
                outerHeight: b.fn.outerHeight
            };

        function k(o, n, m, q) {
            b.each(g, function () {
                n -= parseFloat(b.curCSS(o, "padding" + this, true)) || 0;
                if (m) {
                    n -= parseFloat(b.curCSS(o, "border" + this + "Width", true)) || 0
                }
                if (q) {
                    n -= parseFloat(b.curCSS(o, "margin" + this, true)) || 0
                }
            });
            return n
        }
        b.fn["inner" + f] = function (m) {
            if (m === e) {
                return l["inner" + f].call(this)
            }
            return this.each(function () {
                b(this).css(j, k(this, m) + "px")
            })
        };
        b.fn["outer" + f] = function (m, n) {
            if (typeof m !== "number") {
                return l["outer" + f].call(this, m)
            }
            return this.each(function () {
                b(this).css(j, k(this, m, true, n) + "px")
            })
        }
    });

    function d(h, f) {
        var l = h.nodeName.toLowerCase();
        if ("area" === l) {
            var k = h.parentNode,
                j = k.name,
                g;
            if (!h.href || !j || k.nodeName.toLowerCase() !== "map") {
                return false
            }
            g = b("img[usemap=#" + j + "]")[0];
            return !!g && c(g)
        }
        return (/input|select|textarea|button|object/.test(l) ? !h.disabled : "a" == l ? h.href || f : f) && c(h)
    }

    function c(f) {
        return !b(f).parents().andSelf().filter(function () {
            return b.curCSS(this, "visibility") === "hidden" || b.expr.filters.hidden(this)
        }).length
    }
    b.extend(b.expr[":"], {
        data: function (h, g, f) {
            return !!b.data(h, f[3])
        },
        focusable: function (f) {
            return d(f, !isNaN(b.attr(f, "tabindex")))
        },
        tabbable: function (h) {
            var f = b.attr(h, "tabindex"),
                g = isNaN(f);
            return (g || f >= 0) && d(h, !g)
        }
    });
    b(function () {
        var f = document.body,
            g = f.appendChild(g = document.createElement("div"));
        g.offsetHeight;
        b.extend(g.style, {
            minHeight: "100px",
            height: "auto",
            padding: 0,
            borderWidth: 0
        });
        b.support.minHeight = g.offsetHeight === 100;
        b.support.selectstart = "onselectstart" in g;
        f.removeChild(g).style.display = "none"
    });
    b.extend(b.ui, {
        plugin: {
            add: function (g, h, k) {
                var j = b.ui[g].prototype;
                for (var f in k) {
                    j.plugins[f] = j.plugins[f] || [];
                    j.plugins[f].push([h, k[f]])
                }
            },
            call: function (f, h, g) {
                var k = f.plugins[h];
                if (!k || !f.element[0].parentNode) {
                    return
                }
                for (var j = 0; j < k.length; j++) {
                    if (f.options[k[j][0]]) {
                        k[j][1].apply(f.element, g)
                    }
                }
            }
        },
        contains: function (g, f) {
            return document.compareDocumentPosition ? g.compareDocumentPosition(f) & 16 : g !== f && g.contains(f)
        },
        hasScroll: function (j, g) {
            if (b(j).css("overflow") === "hidden") {
                return false
            }
            var f = (g && g === "left") ? "scrollLeft" : "scrollTop",
                h = false;
            if (j[f] > 0) {
                return true
            }
            j[f] = 1;
            h = (j[f] > 0);
            j[f] = 0;
            return h
        },
        isOverAxis: function (g, f, h) {
            return (g > f) && (g < (f + h))
        },
        isOver: function (l, g, k, j, f, h) {
            return b.ui.isOverAxis(l, k, f) && b.ui.isOverAxis(g, j, h)
        }
    })
})(jQuery);
(function ($, undefined) {
    $.extend($.ui, {
        datepicker: {
            version: "1.8.18"
        }
    });
    var PROP_NAME = "datepicker";
    var dpuuid = new Date().getTime();
    var instActive;

    function Datepicker() {
        this.debug = false;
        this._curInst = null;
        this._keyEvent = false;
        this._disabledInputs = [];
        this._datepickerShowing = false;
        this._inDialog = false;
        this._mainDivId = "ui-datepicker-div";
        this._inlineClass = "ui-datepicker-inline";
        this._appendClass = "ui-datepicker-append";
        this._triggerClass = "ui-datepicker-trigger";
        this._dialogClass = "ui-datepicker-dialog";
        this._disableClass = "ui-datepicker-disabled";
        this._unselectableClass = "ui-datepicker-unselectable";
        this._currentClass = "ui-datepicker-current-day";
        this._dayOverClass = "ui-datepicker-days-cell-over";
        this.regional = [];
        this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: ""
        };
        this._defaults = {
            showOn: "focus",
            showAnim: "show",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: false,
            hideIfNoPrevNext: false,
            navigationAsDateFormat: false,
            gotoCurrent: false,
            changeMonth: false,
            changeYear: false,
            yearRange: "c-10:c+10",
            showOtherMonths: false,
            selectOtherMonths: false,
            showWeek: false,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: true,
            showButtonPanel: false,
            autoSize: false,
            disabled: false
        };
        $.extend(this._defaults, this.regional[""]);
        this.dpDiv = bindHover($('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all ui-helper-hidden-accessible"></div>'))
    }
    $.extend(Datepicker.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        log: function () {
            if (this.debug) {
                console.log.apply("", arguments)
            }
        },
        _widgetDatepicker: function () {
            return this.dpDiv
        },
        setDefaults: function (settings) {
            extendRemove(this._defaults, settings || {});
            return this
        },
        _attachDatepicker: function (target, settings) {
            var inlineSettings = null;
            for (var attrName in this._defaults) {
                var attrValue = target.getAttribute("date:" + attrName);
                if (attrValue) {
                    inlineSettings = inlineSettings || {};
                    try {
                        inlineSettings[attrName] = eval(attrValue)
                    } catch (err) {
                        inlineSettings[attrName] = attrValue
                    }
                }
            }
            var nodeName = target.nodeName.toLowerCase();
            var inline = (nodeName == "div" || nodeName == "span");
            if (!target.id) {
                this.uuid += 1;
                target.id = "dp" + this.uuid
            }
            var inst = this._newInst($(target), inline);
            inst.settings = $.extend({}, settings || {}, inlineSettings || {});
            if (nodeName == "input") {
                this._connectDatepicker(target, inst)
            } else {
                if (inline) {
                    this._inlineDatepicker(target, inst)
                }
            }
        },
        _newInst: function (target, inline) {
            var id = target[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1");
            return {
                id: id,
                input: target,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: inline,
                dpDiv: (!inline ? this.dpDiv : bindHover($('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')))
            }
        },
        _connectDatepicker: function (target, inst) {
            var input = $(target);
            inst.append = $([]);
            inst.trigger = $([]);
            if (input.hasClass(this.markerClassName)) {
                return
            }
            this._attachments(input, inst);
            input.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker", function (event, key, value) {
                inst.settings[key] = value
            }).bind("getData.datepicker", function (event, key) {
                return this._get(inst, key)
            });
            this._autoSize(inst);
            $.data(target, PROP_NAME, inst);
            if (inst.settings.disabled) {
                this._disableDatepicker(target)
            }
        },
        _attachments: function (input, inst) {
            var appendText = this._get(inst, "appendText");
            var isRTL = this._get(inst, "isRTL");
            if (inst.append) {
                inst.append.remove()
            }
            if (appendText) {
                inst.append = $('<span class="' + this._appendClass + '">' + appendText + "</span>");
                input[isRTL ? "before" : "after"](inst.append)
            }
            input.unbind("focus", this._showDatepicker);
            if (inst.trigger) {
                inst.trigger.remove()
            }
            var showOn = this._get(inst, "showOn");
            if (showOn == "focus" || showOn == "both") {
                input.focus(this._showDatepicker)
            }
            if (showOn == "button" || showOn == "both") {
                var buttonText = this._get(inst, "buttonText");
                var buttonImage = this._get(inst, "buttonImage");
                inst.trigger = $(this._get(inst, "buttonImageOnly") ? $("<img/>").addClass(this._triggerClass).attr({
                    src: buttonImage,
                    alt: buttonText,
                    title: buttonText
                }) : $('<button type="button"></button>').addClass(this._triggerClass).html(buttonImage == "" ? buttonText : $("<img/>").attr({
                    src: buttonImage,
                    alt: buttonText,
                    title: buttonText
                })));
                input[isRTL ? "before" : "after"](inst.trigger);
                inst.trigger.click(function () {
                    if ($.datepicker._datepickerShowing && $.datepicker._lastInput == input[0]) {
                        $.datepicker._hideDatepicker()
                    } else {
                        if ($.datepicker._datepickerShowing && $.datepicker._lastInput != input[0]) {
                            $.datepicker._hideDatepicker();
                            $.datepicker._showDatepicker(input[0])
                        } else {
                            $.datepicker._showDatepicker(input[0])
                        }
                    }
                    return false
                })
            }
        },
        _autoSize: function (inst) {
            if (this._get(inst, "autoSize") && !inst.inline) {
                var date = new Date(2009, 12 - 1, 20);
                var dateFormat = this._get(inst, "dateFormat");
                if (dateFormat.match(/[DM]/)) {
                    var findMax = function (names) {
                        var max = 0;
                        var maxI = 0;
                        for (var i = 0; i < names.length; i++) {
                            if (names[i].length > max) {
                                max = names[i].length;
                                maxI = i
                            }
                        }
                        return maxI
                    };
                    date.setMonth(findMax(this._get(inst, (dateFormat.match(/MM/) ? "monthNames" : "monthNamesShort"))));
                    date.setDate(findMax(this._get(inst, (dateFormat.match(/DD/) ? "dayNames" : "dayNamesShort"))) + 20 - date.getDay())
                }
                inst.input.attr("size", this._formatDate(inst, date).length)
            }
        },
        _inlineDatepicker: function (target, inst) {
            var divSpan = $(target);
            if (divSpan.hasClass(this.markerClassName)) {
                return
            }
            divSpan.addClass(this.markerClassName).append(inst.dpDiv).bind("setData.datepicker", function (event, key, value) {
                inst.settings[key] = value
            }).bind("getData.datepicker", function (event, key) {
                return this._get(inst, key)
            });
            $.data(target, PROP_NAME, inst);
            this._setDate(inst, this._getDefaultDate(inst), true);
            this._updateDatepicker(inst);
            this._updateAlternate(inst);
            if (inst.settings.disabled) {
                this._disableDatepicker(target)
            }
            inst.dpDiv.css("display", "block")
        },
        _dialogDatepicker: function (input, date, onSelect, settings, pos) {
            var inst = this._dialogInst;
            if (!inst) {
                this.uuid += 1;
                var id = "dp" + this.uuid;
                this._dialogInput = $('<input type="text" id="' + id + '" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>');
                this._dialogInput.keydown(this._doKeyDown);
                $("body").append(this._dialogInput);
                inst = this._dialogInst = this._newInst(this._dialogInput, false);
                inst.settings = {};
                $.data(this._dialogInput[0], PROP_NAME, inst)
            }
            extendRemove(inst.settings, settings || {});
            date = (date && date.constructor == Date ? this._formatDate(inst, date) : date);
            this._dialogInput.val(date);
            this._pos = (pos ? (pos.length ? pos : [pos.pageX, pos.pageY]) : null);
            if (!this._pos) {
                var browserWidth = document.documentElement.clientWidth;
                var browserHeight = document.documentElement.clientHeight;
                var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
                var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
                this._pos = [(browserWidth / 2) - 100 + scrollX, (browserHeight / 2) - 150 + scrollY]
            }
            this._dialogInput.css("left", (this._pos[0] + 20) + "px").css("top", this._pos[1] + "px");
            inst.settings.onSelect = onSelect;
            this._inDialog = true;
            this.dpDiv.addClass(this._dialogClass);
            this._showDatepicker(this._dialogInput[0]);
            if ($.blockUI) {
                $.blockUI(this.dpDiv)
            }
            $.data(this._dialogInput[0], PROP_NAME, inst);
            return this
        },
        _destroyDatepicker: function (target) {
            var $target = $(target);
            var inst = $.data(target, PROP_NAME);
            if (!$target.hasClass(this.markerClassName)) {
                return
            }
            var nodeName = target.nodeName.toLowerCase();
            $.removeData(target, PROP_NAME);
            if (nodeName == "input") {
                inst.append.remove();
                inst.trigger.remove();
                $target.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)
            } else {
                if (nodeName == "div" || nodeName == "span") {
                    $target.removeClass(this.markerClassName).empty()
                }
            }
        },
        _enableDatepicker: function (target) {
            var $target = $(target);
            var inst = $.data(target, PROP_NAME);
            if (!$target.hasClass(this.markerClassName)) {
                return
            }
            var nodeName = target.nodeName.toLowerCase();
            if (nodeName == "input") {
                target.disabled = false;
                inst.trigger.filter("button").each(function () {
                    this.disabled = false
                }).end().filter("img").css({
                    opacity: "1.0",
                    cursor: ""
                })
            } else {
                if (nodeName == "div" || nodeName == "span") {
                    var inline = $target.children("." + this._inlineClass);
                    inline.children().removeClass("ui-state-disabled");
                    inline.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled")
                }
            }
            this._disabledInputs = $.map(this._disabledInputs, function (value) {
                return (value == target ? null : value)
            })
        },
        _disableDatepicker: function (target) {
            var $target = $(target);
            var inst = $.data(target, PROP_NAME);
            if (!$target.hasClass(this.markerClassName)) {
                return
            }
            var nodeName = target.nodeName.toLowerCase();
            if (nodeName == "input") {
                target.disabled = true;
                inst.trigger.filter("button").each(function () {
                    this.disabled = true
                }).end().filter("img").css({
                    opacity: "0.5",
                    cursor: "default"
                })
            } else {
                if (nodeName == "div" || nodeName == "span") {
                    var inline = $target.children("." + this._inlineClass);
                    inline.children().addClass("ui-state-disabled");
                    inline.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled", "disabled")
                }
            }
            this._disabledInputs = $.map(this._disabledInputs, function (value) {
                return (value == target ? null : value)
            });
            this._disabledInputs[this._disabledInputs.length] = target
        },
        _isDisabledDatepicker: function (target) {
            if (!target) {
                return false
            }
            for (var i = 0; i < this._disabledInputs.length; i++) {
                if (this._disabledInputs[i] == target) {
                    return true
                }
            }
            return false
        },
        _getInst: function (target) {
            try {
                return $.data(target, PROP_NAME)
            } catch (err) {
                throw "Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function (target, name, value) {
            var inst = this._getInst(target);
            if (arguments.length == 2 && typeof name == "string") {
                return (name == "defaults" ? $.extend({}, $.datepicker._defaults) : (inst ? (name == "all" ? $.extend({}, inst.settings) : this._get(inst, name)) : null))
            }
            var settings = name || {};
            if (typeof name == "string") {
                settings = {};
                settings[name] = value
            }
            if (inst) {
                if (this._curInst == inst) {
                    this._hideDatepicker()
                }
                var date = this._getDateDatepicker(target, true);
                var minDate = this._getMinMaxDate(inst, "min");
                var maxDate = this._getMinMaxDate(inst, "max");
                extendRemove(inst.settings, settings);
                if (minDate !== null && settings.dateFormat !== undefined && settings.minDate === undefined) {
                    inst.settings.minDate = this._formatDate(inst, minDate)
                }
                if (maxDate !== null && settings.dateFormat !== undefined && settings.maxDate === undefined) {
                    inst.settings.maxDate = this._formatDate(inst, maxDate)
                }
                this._attachments($(target), inst);
                this._autoSize(inst);
                this._setDate(inst, date);
                this._updateAlternate(inst);
                this._updateDatepicker(inst)
            }
        },
        _changeDatepicker: function (target, name, value) {
            this._optionDatepicker(target, name, value)
        },
        _refreshDatepicker: function (target) {
            var inst = this._getInst(target);
            if (inst) {
                this._updateDatepicker(inst)
            }
        },
        _setDateDatepicker: function (target, date) {
            var inst = this._getInst(target);
            if (inst) {
                this._setDate(inst, date);
                this._updateDatepicker(inst);
                this._updateAlternate(inst)
            }
        },
        _getDateDatepicker: function (target, noDefault) {
            var inst = this._getInst(target);
            if (inst && !inst.inline) {
                this._setDateFromField(inst, noDefault)
            }
            return (inst ? this._getDate(inst) : null)
        },
        _doKeyDown: function (event) {
            var inst = $.datepicker._getInst(event.target);
            var handled = true;
            var isRTL = inst.dpDiv.is(".ui-datepicker-rtl");
            inst._keyEvent = true;
            if ($.datepicker._datepickerShowing) {
                switch (event.keyCode) {
                case 9:
                    $.datepicker._hideDatepicker();
                    handled = false;
                    break;
                case 13:
                    var sel = $("td." + $.datepicker._dayOverClass + ":not(." + $.datepicker._currentClass + ")", inst.dpDiv);
                    if (sel[0]) {
                        $.datepicker._selectDay(event.target, inst.selectedMonth, inst.selectedYear, sel[0])
                    }
                    var onSelect = $.datepicker._get(inst, "onSelect");
                    if (onSelect) {
                        var dateStr = $.datepicker._formatDate(inst);
                        onSelect.apply((inst.input ? inst.input[0] : null), [dateStr, inst])
                    } else {
                        $.datepicker._hideDatepicker()
                    }
                    return false;
                    break;
                case 27:
                    $.datepicker._hideDatepicker();
                    break;
                case 33:
                    $.datepicker._adjustDate(event.target, (event.ctrlKey ? -$.datepicker._get(inst, "stepBigMonths") : -$.datepicker._get(inst, "stepMonths")), "M");
                    break;
                case 34:
                    $.datepicker._adjustDate(event.target, (event.ctrlKey ? +$.datepicker._get(inst, "stepBigMonths") : +$.datepicker._get(inst, "stepMonths")), "M");
                    break;
                case 35:
                    if (event.ctrlKey || event.metaKey) {
                        $.datepicker._clearDate(event.target)
                    }
                    handled = event.ctrlKey || event.metaKey;
                    break;
                case 36:
                    if (event.ctrlKey || event.metaKey) {
                        $.datepicker._gotoToday(event.target)
                    }
                    handled = event.ctrlKey || event.metaKey;
                    break;
                case 37:
                    if (event.ctrlKey || event.metaKey) {
                        $.datepicker._adjustDate(event.target, (isRTL ? +1 : -1), "D")
                    }
                    handled = event.ctrlKey || event.metaKey;
                    if (event.originalEvent.altKey) {
                        $.datepicker._adjustDate(event.target, (event.ctrlKey ? -$.datepicker._get(inst, "stepBigMonths") : -$.datepicker._get(inst, "stepMonths")), "M")
                    }
                    break;
                case 38:
                    if (event.ctrlKey || event.metaKey) {
                        $.datepicker._adjustDate(event.target, -7, "D")
                    }
                    handled = event.ctrlKey || event.metaKey;
                    break;
                case 39:
                    if (event.ctrlKey || event.metaKey) {
                        $.datepicker._adjustDate(event.target, (isRTL ? -1 : +1), "D")
                    }
                    handled = event.ctrlKey || event.metaKey;
                    if (event.originalEvent.altKey) {
                        $.datepicker._adjustDate(event.target, (event.ctrlKey ? +$.datepicker._get(inst, "stepBigMonths") : +$.datepicker._get(inst, "stepMonths")), "M")
                    }
                    break;
                case 40:
                    if (event.ctrlKey || event.metaKey) {
                        $.datepicker._adjustDate(event.target, +7, "D")
                    }
                    handled = event.ctrlKey || event.metaKey;
                    break;
                default:
                    handled = false
                }
            } else {
                if (event.keyCode == 36 && event.ctrlKey) {
                    $.datepicker._showDatepicker(this)
                } else {
                    handled = false
                }
            } if (handled) {
                event.preventDefault();
                event.stopPropagation()
            }
        },
        _doKeyPress: function (event) {
            var inst = $.datepicker._getInst(event.target);
            if ($.datepicker._get(inst, "constrainInput")) {
                var chars = $.datepicker._possibleChars($.datepicker._get(inst, "dateFormat"));
                var chr = String.fromCharCode(event.charCode == undefined ? event.keyCode : event.charCode);
                return event.ctrlKey || event.metaKey || (chr < " " || !chars || chars.indexOf(chr) > -1)
            }
        },
        _doKeyUp: function (event) {
            var inst = $.datepicker._getInst(event.target);
            if (inst.input.val() != inst.lastVal) {
                try {
                    var date = $.datepicker.parseDate($.datepicker._get(inst, "dateFormat"), (inst.input ? inst.input.val() : null), $.datepicker._getFormatConfig(inst));
                    if (date) {
                        $.datepicker._setDateFromField(inst);
                        $.datepicker._updateAlternate(inst);
                        $.datepicker._updateDatepicker(inst)
                    }
                } catch (event) {
                    $.datepicker.log(event)
                }
            }
            return true
        },
        _showDatepicker: function (input) {
            input = input.target || input;
            if (input.nodeName.toLowerCase() != "input") {
                input = $("input", input.parentNode)[0]
            }
            if ($.datepicker._isDisabledDatepicker(input) || $.datepicker._lastInput == input) {
                return
            }
            var inst = $.datepicker._getInst(input);
            if ($.datepicker._curInst && $.datepicker._curInst != inst) {
                $.datepicker._curInst.dpDiv.stop(true, true);
                if (inst && $.datepicker._datepickerShowing) {
                    $.datepicker._hideDatepicker($.datepicker._curInst.input[0])
                }
            }
            var beforeShow = $.datepicker._get(inst, "beforeShow");
            var beforeShowSettings = beforeShow ? beforeShow.apply(input, [input, inst]) : {};
            if (beforeShowSettings === false) {
                return
            }
            extendRemove(inst.settings, beforeShowSettings);
            inst.lastVal = null;
            $.datepicker._lastInput = input;
            $.datepicker._setDateFromField(inst);
            if ($.datepicker._inDialog) {
                input.value = ""
            }
            if (!$.datepicker._pos) {
                $.datepicker._pos = $.datepicker._findPos(input);
                $.datepicker._pos[1] += input.offsetHeight
            }
            var isFixed = false;
            $(input).parents().each(function () {
                isFixed |= $(this).css("position") == "fixed";
                return !isFixed
            });
            if (isFixed && $.browser.opera) {
                $.datepicker._pos[0] -= document.documentElement.scrollLeft;
                $.datepicker._pos[1] -= document.documentElement.scrollTop
            }
            var offset = {
                left: $.datepicker._pos[0],
                top: $.datepicker._pos[1]
            };
            $.datepicker._pos = null;
            inst.dpDiv.empty();
            inst.dpDiv.css({
                position: "absolute",
                display: "block",
                top: "-1000px"
            });
            $.datepicker._updateDatepicker(inst);
            offset = $.datepicker._checkOffset(inst, offset, isFixed);
            inst.dpDiv.css({
                position: ($.datepicker._inDialog && $.blockUI ? "static" : (isFixed ? "fixed" : "absolute")),
                display: "none",
                left: offset.left + "px",
                top: offset.top + "px"
            });
            if (!inst.inline) {
                var showAnim = $.datepicker._get(inst, "showAnim");
                var duration = $.datepicker._get(inst, "duration");
                var postProcess = function () {
                    var cover = inst.dpDiv.find("iframe.ui-datepicker-cover");
                    if (!!cover.length) {
                        var borders = $.datepicker._getBorders(inst.dpDiv);
                        cover.css({
                            left: -borders[0],
                            top: -borders[1],
                            width: inst.dpDiv.outerWidth(),
                            height: inst.dpDiv.outerHeight()
                        })
                    }
                };
                inst.dpDiv.zIndex($(input).zIndex() + 1);
                $.datepicker._datepickerShowing = true;
                if ($.effects && $.effects[showAnim]) {
                    inst.dpDiv.show(showAnim, $.datepicker._get(inst, "showOptions"), duration, postProcess)
                } else {
                    inst.dpDiv[showAnim || "show"]((showAnim ? duration : null), postProcess)
                } if (!showAnim || !duration) {
                    postProcess()
                }
                if (inst.input.is(":visible") && !inst.input.is(":disabled")) {
                    inst.input.focus()
                }
                $.datepicker._curInst = inst
            }
        },
        _updateDatepicker: function (inst) {
            var self = this;
            self.maxRows = 4;
            var borders = $.datepicker._getBorders(inst.dpDiv);
            instActive = inst;
            inst.dpDiv.empty().append(this._generateHTML(inst));
            var cover = inst.dpDiv.find("iframe.ui-datepicker-cover");
            if (!!cover.length) {
                cover.css({
                    left: -borders[0],
                    top: -borders[1],
                    width: inst.dpDiv.outerWidth(),
                    height: inst.dpDiv.outerHeight()
                })
            }
            inst.dpDiv.find("." + this._dayOverClass + " a").mouseover();
            var numMonths = this._getNumberOfMonths(inst);
            var cols = numMonths[1];
            var width = 17;
            inst.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
            if (cols > 1) {
                inst.dpDiv.addClass("ui-datepicker-multi-" + cols).css("width", (width * cols) + "em")
            }
            inst.dpDiv[(numMonths[0] != 1 || numMonths[1] != 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi");
            inst.dpDiv[(this._get(inst, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl");
            if (inst == $.datepicker._curInst && $.datepicker._datepickerShowing && inst.input && inst.input.is(":visible") && !inst.input.is(":disabled") && inst.input[0] != document.activeElement) {
                inst.input.focus()
            }
            if (inst.yearshtml) {
                var origyearshtml = inst.yearshtml;
                setTimeout(function () {
                    if (origyearshtml === inst.yearshtml && inst.yearshtml) {
                        inst.dpDiv.find("select.ui-datepicker-year:first").replaceWith(inst.yearshtml)
                    }
                    origyearshtml = inst.yearshtml = null
                }, 0)
            }
        },
        _getBorders: function (elem) {
            var convert = function (value) {
                return {
                    thin: 1,
                    medium: 2,
                    thick: 3
                }[value] || value
            };
            return [parseFloat(convert(elem.css("border-left-width"))), parseFloat(convert(elem.css("border-top-width")))]
        },
        _checkOffset: function (inst, offset, isFixed) {
            var dpWidth = inst.dpDiv.outerWidth();
            var dpHeight = inst.dpDiv.outerHeight();
            var inputWidth = inst.input ? inst.input.outerWidth() : 0;
            var inputHeight = inst.input ? inst.input.outerHeight() : 0;
            var viewWidth = document.documentElement.clientWidth + $(document).scrollLeft();
            var viewHeight = document.documentElement.clientHeight + $(document).scrollTop();
            offset.left -= (this._get(inst, "isRTL") ? (dpWidth - inputWidth) : 0);
            offset.left -= (isFixed && offset.left == inst.input.offset().left) ? $(document).scrollLeft() : 0;
            offset.top -= (isFixed && offset.top == (inst.input.offset().top + inputHeight)) ? $(document).scrollTop() : 0;
            offset.left -= Math.min(offset.left, (offset.left + dpWidth > viewWidth && viewWidth > dpWidth) ? Math.abs(offset.left + dpWidth - viewWidth) : 0);
            offset.top -= Math.min(offset.top, (offset.top + dpHeight > viewHeight && viewHeight > dpHeight) ? Math.abs(dpHeight + inputHeight) : 0);
            return offset
        },
        _findPos: function (obj) {
            var inst = this._getInst(obj);
            var isRTL = this._get(inst, "isRTL");
            while (obj && (obj.type == "hidden" || obj.nodeType != 1 || $.expr.filters.hidden(obj))) {
                obj = obj[isRTL ? "previousSibling" : "nextSibling"]
            }
            var position = $(obj).offset();
            return [position.left, position.top]
        },
        _hideDatepicker: function (input) {
            var inst = this._curInst;
            if (!inst || (input && inst != $.data(input, PROP_NAME))) {
                return
            }
            if (this._datepickerShowing) {
                var showAnim = this._get(inst, "showAnim");
                var duration = this._get(inst, "duration");
                var self = this;
                var postProcess = function () {
                    $.datepicker._tidyDialog(inst);
                    self._curInst = null
                };
                if ($.effects && $.effects[showAnim]) {
                    inst.dpDiv.hide(showAnim, $.datepicker._get(inst, "showOptions"), duration, postProcess)
                } else {
                    inst.dpDiv[(showAnim == "slideDown" ? "slideUp" : (showAnim == "fadeIn" ? "fadeOut" : "hide"))]((showAnim ? duration : null), postProcess)
                } if (!showAnim) {
                    postProcess()
                }
                this._datepickerShowing = false;
                var onClose = this._get(inst, "onClose");
                if (onClose) {
                    onClose.apply((inst.input ? inst.input[0] : null), [(inst.input ? inst.input.val() : ""), inst])
                }
                this._lastInput = null;
                if (this._inDialog) {
                    this._dialogInput.css({
                        position: "absolute",
                        left: "0",
                        top: "-100px"
                    });
                    if ($.blockUI) {
                        $.unblockUI();
                        $("body").append(this.dpDiv)
                    }
                }
                this._inDialog = false
            }
        },
        _tidyDialog: function (inst) {
            inst.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function (event) {
            if (!$.datepicker._curInst) {
                return
            }
            var $target = $(event.target),
                inst = $.datepicker._getInst($target[0]);
            if ((($target[0].id != $.datepicker._mainDivId && $target.parents("#" + $.datepicker._mainDivId).length == 0 && !$target.hasClass($.datepicker.markerClassName) && !$target.closest("." + $.datepicker._triggerClass).length && $.datepicker._datepickerShowing && !($.datepicker._inDialog && $.blockUI))) || ($target.hasClass($.datepicker.markerClassName) && $.datepicker._curInst != inst)) {
                $.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function (id, offset, period) {
            var target = $(id);
            var inst = this._getInst(target[0]);
            if (this._isDisabledDatepicker(target[0])) {
                return
            }
            this._adjustInstDate(inst, offset + (period == "M" ? this._get(inst, "showCurrentAtPos") : 0), period);
            this._updateDatepicker(inst)
        },
        _gotoToday: function (id) {
            var target = $(id);
            var inst = this._getInst(target[0]);
            if (this._get(inst, "gotoCurrent") && inst.currentDay) {
                inst.selectedDay = inst.currentDay;
                inst.drawMonth = inst.selectedMonth = inst.currentMonth;
                inst.drawYear = inst.selectedYear = inst.currentYear
            } else {
                var date = new Date();
                inst.selectedDay = date.getDate();
                inst.drawMonth = inst.selectedMonth = date.getMonth();
                inst.drawYear = inst.selectedYear = date.getFullYear()
            }
            this._notifyChange(inst);
            this._adjustDate(target)
        },
        _selectMonthYear: function (id, select, period) {
            var target = $(id);
            var inst = this._getInst(target[0]);
            inst["selected" + (period == "M" ? "Month" : "Year")] = inst["draw" + (period == "M" ? "Month" : "Year")] = parseInt(select.options[select.selectedIndex].value, 10);
            this._notifyChange(inst);
            this._adjustDate(target)
        },
        _selectDay: function (id, month, year, td) {
            var target = $(id);
            if ($(td).hasClass(this._unselectableClass) || this._isDisabledDatepicker(target[0])) {
                return
            }
            var inst = this._getInst(target[0]);
            inst.selectedDay = inst.currentDay = $("a", td).html();
            inst.selectedMonth = inst.currentMonth = month;
            inst.selectedYear = inst.currentYear = year;
            this._selectDate(id, this._formatDate(inst, inst.currentDay, inst.currentMonth, inst.currentYear))
        },
        _clearDate: function (id) {
            var target = $(id);
            var inst = this._getInst(target[0]);
            this._selectDate(target, "")
        },
        _selectDate: function (id, dateStr) {
            var target = $(id);
            var inst = this._getInst(target[0]);
            dateStr = (dateStr != null ? dateStr : this._formatDate(inst));
            if (inst.input) {
                inst.input.val(dateStr)
            }
            this._updateAlternate(inst);
            var onSelect = this._get(inst, "onSelect");
            if (onSelect) {
                onSelect.apply((inst.input ? inst.input[0] : null), [dateStr, inst])
            } else {
                if (inst.input) {
                    inst.input.trigger("change")
                }
            } if (inst.inline) {
                this._updateDatepicker(inst)
            } else {
                this._hideDatepicker();
                this._lastInput = inst.input[0];
                if (typeof (inst.input[0]) != "object") {
                    inst.input.focus()
                }
                this._lastInput = null
            }
        },
        _updateAlternate: function (inst) {
            var altField = this._get(inst, "altField");
            if (altField) {
                var altFormat = this._get(inst, "altFormat") || this._get(inst, "dateFormat");
                var date = this._getDate(inst);
                var dateStr = this.formatDate(altFormat, date, this._getFormatConfig(inst));
                $(altField).each(function () {
                    $(this).val(dateStr)
                })
            }
        },
        noWeekends: function (date) {
            var day = date.getDay();
            return [(day > 0 && day < 6), ""]
        },
        iso8601Week: function (date) {
            var checkDate = new Date(date.getTime());
            checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
            var time = checkDate.getTime();
            checkDate.setMonth(0);
            checkDate.setDate(1);
            return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1
        },
        parseDate: function (format, value, settings) {
            if (format == null || value == null) {
                throw "Invalid arguments"
            }
            value = (typeof value == "object" ? value.toString() : value + "");
            if (value == "") {
                return null
            }
            var shortYearCutoff = (settings ? settings.shortYearCutoff : null) || this._defaults.shortYearCutoff;
            shortYearCutoff = (typeof shortYearCutoff != "string" ? shortYearCutoff : new Date().getFullYear() % 100 + parseInt(shortYearCutoff, 10));
            var dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort;
            var dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames;
            var monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort;
            var monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames;
            var year = -1;
            var month = -1;
            var day = -1;
            var doy = -1;
            var literal = false;
            var lookAhead = function (match) {
                var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) == match);
                if (matches) {
                    iFormat++
                }
                return matches
            };
            var getNumber = function (match) {
                var isDoubled = lookAhead(match);
                var size = (match == "@" ? 14 : (match == "!" ? 20 : (match == "y" && isDoubled ? 4 : (match == "o" ? 3 : 2))));
                var digits = new RegExp("^\\d{1," + size + "}");
                var num = value.substring(iValue).match(digits);
                if (!num) {
                    throw "Missing number at position " + iValue
                }
                iValue += num[0].length;
                return parseInt(num[0], 10)
            };
            var getName = function (match, shortNames, longNames) {
                var names = $.map(lookAhead(match) ? longNames : shortNames, function (v, k) {
                    return [
                        [k, v]
                    ]
                }).sort(function (a, b) {
                    return -(a[1].length - b[1].length)
                });
                var index = -1;
                $.each(names, function (i, pair) {
                    var name = pair[1];
                    if (value.substr(iValue, name.length).toLowerCase() == name.toLowerCase()) {
                        index = pair[0];
                        iValue += name.length;
                        return false
                    }
                });
                if (index != -1) {
                    return index + 1
                } else {
                    throw "Unknown name at position " + iValue
                }
            };
            var checkLiteral = function () {
                if (value.charAt(iValue) != format.charAt(iFormat)) {
                    throw "Unexpected literal at position " + iValue
                }
                iValue++
            };
            var iValue = 0;
            for (var iFormat = 0; iFormat < format.length; iFormat++) {
                if (literal) {
                    if (format.charAt(iFormat) == "'" && !lookAhead("'")) {
                        literal = false
                    } else {
                        checkLiteral()
                    }
                } else {
                    switch (format.charAt(iFormat)) {
                    case "d":
                        day = getNumber("d");
                        break;
                    case "D":
                        getName("D", dayNamesShort, dayNames);
                        break;
                    case "o":
                        doy = getNumber("o");
                        break;
                    case "m":
                        month = getNumber("m");
                        break;
                    case "M":
                        month = getName("M", monthNamesShort, monthNames);
                        break;
                    case "y":
                        year = getNumber("y");
                        break;
                    case "@":
                        var date = new Date(getNumber("@"));
                        year = date.getFullYear();
                        month = date.getMonth() + 1;
                        day = date.getDate();
                        break;
                    case "!":
                        var date = new Date((getNumber("!") - this._ticksTo1970) / 10000);
                        year = date.getFullYear();
                        month = date.getMonth() + 1;
                        day = date.getDate();
                        break;
                    case "'":
                        if (lookAhead("'")) {
                            checkLiteral()
                        } else {
                            literal = true
                        }
                        break;
                    default:
                        checkLiteral()
                    }
                }
            }
            if (iValue < value.length) {
                throw "Extra/unparsed characters found in date: " + value.substring(iValue)
            }
            if (year == -1) {
                year = new Date().getFullYear()
            } else {
                if (year < 100) {
                    year += new Date().getFullYear() - new Date().getFullYear() % 100 + (year <= shortYearCutoff ? 0 : -100)
                }
            } if (doy > -1) {
                month = 1;
                day = doy;
                do {
                    var dim = this._getDaysInMonth(year, month - 1);
                    if (day <= dim) {
                        break
                    }
                    month++;
                    day -= dim
                } while (true)
            }
            var date = this._daylightSavingAdjust(new Date(year, month - 1, day));
            if (date.getFullYear() != year || date.getMonth() + 1 != month || date.getDate() != day) {
                throw "Invalid date"
            }
            return date
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: (((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) + Math.floor(1970 / 400)) * 24 * 60 * 60 * 10000000),
        formatDate: function (format, date, settings) {
            if (!date) {
                return ""
            }
            var dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort;
            var dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames;
            var monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort;
            var monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames;
            var lookAhead = function (match) {
                var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) == match);
                if (matches) {
                    iFormat++
                }
                return matches
            };
            var formatNumber = function (match, value, len) {
                var num = "" + value;
                if (lookAhead(match)) {
                    while (num.length < len) {
                        num = "0" + num
                    }
                }
                return num
            };
            var formatName = function (match, value, shortNames, longNames) {
                return (lookAhead(match) ? longNames[value] : shortNames[value])
            };
            var output = "";
            var literal = false;
            if (date) {
                for (var iFormat = 0; iFormat < format.length; iFormat++) {
                    if (literal) {
                        if (format.charAt(iFormat) == "'" && !lookAhead("'")) {
                            literal = false
                        } else {
                            output += format.charAt(iFormat)
                        }
                    } else {
                        switch (format.charAt(iFormat)) {
                        case "d":
                            output += formatNumber("d", date.getDate(), 2);
                            break;
                        case "D":
                            output += formatName("D", date.getDay(), dayNamesShort, dayNames);
                            break;
                        case "o":
                            output += formatNumber("o", Math.round((new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000), 3);
                            break;
                        case "m":
                            output += formatNumber("m", date.getMonth() + 1, 2);
                            break;
                        case "M":
                            output += formatName("M", date.getMonth(), monthNamesShort, monthNames);
                            break;
                        case "y":
                            output += (lookAhead("y") ? date.getFullYear() : (date.getYear() % 100 < 10 ? "0" : "") + date.getYear() % 100);
                            break;
                        case "@":
                            output += date.getTime();
                            break;
                        case "!":
                            output += date.getTime() * 10000 + this._ticksTo1970;
                            break;
                        case "'":
                            if (lookAhead("'")) {
                                output += "'"
                            } else {
                                literal = true
                            }
                            break;
                        default:
                            output += format.charAt(iFormat)
                        }
                    }
                }
            }
            return output
        },
        _possibleChars: function (format) {
            var chars = "";
            var literal = false;
            var lookAhead = function (match) {
                var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) == match);
                if (matches) {
                    iFormat++
                }
                return matches
            };
            for (var iFormat = 0; iFormat < format.length; iFormat++) {
                if (literal) {
                    if (format.charAt(iFormat) == "'" && !lookAhead("'")) {
                        literal = false
                    } else {
                        chars += format.charAt(iFormat)
                    }
                } else {
                    switch (format.charAt(iFormat)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        chars += "0123456789";
                        break;
                    case "D":
                    case "M":
                        return null;
                    case "'":
                        if (lookAhead("'")) {
                            chars += "'"
                        } else {
                            literal = true
                        }
                        break;
                    default:
                        chars += format.charAt(iFormat)
                    }
                }
            }
            return chars
        },
        _get: function (inst, name) {
            return inst.settings[name] !== undefined ? inst.settings[name] : this._defaults[name]
        },
        _setDateFromField: function (inst, noDefault) {
            if (inst.input.val() == inst.lastVal) {
                return
            }
            var dateFormat = this._get(inst, "dateFormat");
            var dates = inst.lastVal = inst.input ? inst.input.val() : null;
            var date, defaultDate;
            date = defaultDate = this._getDefaultDate(inst);
            var settings = this._getFormatConfig(inst);
            try {
                date = this.parseDate(dateFormat, dates, settings) || defaultDate
            } catch (event) {
                this.log(event);
                dates = (noDefault ? "" : dates)
            }
            inst.selectedDay = date.getDate();
            inst.drawMonth = inst.selectedMonth = date.getMonth();
            inst.drawYear = inst.selectedYear = date.getFullYear();
            inst.currentDay = (dates ? date.getDate() : 0);
            inst.currentMonth = (dates ? date.getMonth() : 0);
            inst.currentYear = (dates ? date.getFullYear() : 0);
            this._adjustInstDate(inst)
        },
        _getDefaultDate: function (inst) {
            return this._restrictMinMax(inst, this._determineDate(inst, this._get(inst, "defaultDate"), new Date()))
        },
        _determineDate: function (inst, date, defaultDate) {
            var offsetNumeric = function (offset) {
                var date = new Date();
                date.setDate(date.getDate() + offset);
                return date
            };
            var offsetString = function (offset) {
                try {
                    return $.datepicker.parseDate($.datepicker._get(inst, "dateFormat"), offset, $.datepicker._getFormatConfig(inst))
                } catch (e) {}
                var date = (offset.toLowerCase().match(/^c/) ? $.datepicker._getDate(inst) : null) || new Date();
                var year = date.getFullYear();
                var month = date.getMonth();
                var day = date.getDate();
                var pattern = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g;
                var matches = pattern.exec(offset);
                while (matches) {
                    switch (matches[2] || "d") {
                    case "d":
                    case "D":
                        day += parseInt(matches[1], 10);
                        break;
                    case "w":
                    case "W":
                        day += parseInt(matches[1], 10) * 7;
                        break;
                    case "m":
                    case "M":
                        month += parseInt(matches[1], 10);
                        day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
                        break;
                    case "y":
                    case "Y":
                        year += parseInt(matches[1], 10);
                        day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
                        break
                    }
                    matches = pattern.exec(offset)
                }
                return new Date(year, month, day)
            };
            var newDate = (date == null || date === "" ? defaultDate : (typeof date == "string" ? offsetString(date) : (typeof date == "number" ? (isNaN(date) ? defaultDate : offsetNumeric(date)) : new Date(date.getTime()))));
            newDate = (newDate && newDate.toString() == "Invalid Date" ? defaultDate : newDate);
            if (newDate) {
                newDate.setHours(0);
                newDate.setMinutes(0);
                newDate.setSeconds(0);
                newDate.setMilliseconds(0)
            }
            return this._daylightSavingAdjust(newDate)
        },
        _daylightSavingAdjust: function (date) {
            if (!date) {
                return null
            }
            date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);
            return date
        },
        _setDate: function (inst, date, noChange) {
            var clear = !date;
            var origMonth = inst.selectedMonth;
            var origYear = inst.selectedYear;
            var newDate = this._restrictMinMax(inst, this._determineDate(inst, date, new Date()));
            inst.selectedDay = inst.currentDay = newDate.getDate();
            inst.drawMonth = inst.selectedMonth = inst.currentMonth = newDate.getMonth();
            inst.drawYear = inst.selectedYear = inst.currentYear = newDate.getFullYear();
            if ((origMonth != inst.selectedMonth || origYear != inst.selectedYear) && !noChange) {
                this._notifyChange(inst)
            }
            this._adjustInstDate(inst);
            if (inst.input) {
                inst.input.val(clear ? "" : this._formatDate(inst))
            }
        },
        _getDate: function (inst) {
            var startDate = (!inst.currentYear || (inst.input && inst.input.val() == "") ? null : this._daylightSavingAdjust(new Date(inst.currentYear, inst.currentMonth, inst.currentDay)));
            return startDate
        },
        _generateHTML: function (inst) {
            var today = new Date();
            today = this._daylightSavingAdjust(new Date(today.getFullYear(), today.getMonth(), today.getDate()));
            var isRTL = this._get(inst, "isRTL");
            var showButtonPanel = this._get(inst, "showButtonPanel");
            var hideIfNoPrevNext = this._get(inst, "hideIfNoPrevNext");
            var navigationAsDateFormat = this._get(inst, "navigationAsDateFormat");
            var numMonths = this._getNumberOfMonths(inst);
            var showCurrentAtPos = this._get(inst, "showCurrentAtPos");
            var stepMonths = this._get(inst, "stepMonths");
            var isMultiMonth = (numMonths[0] != 1 || numMonths[1] != 1);
            var currentDate = this._daylightSavingAdjust((!inst.currentDay ? new Date(9999, 9, 9) : new Date(inst.currentYear, inst.currentMonth, inst.currentDay)));
            var minDate = this._getMinMaxDate(inst, "min");
            var maxDate = this._getMinMaxDate(inst, "max");
            var drawMonth = inst.drawMonth - showCurrentAtPos;
            var drawYear = inst.drawYear;
            if (drawMonth < 0) {
                drawMonth += 12;
                drawYear--
            }
            if (maxDate) {
                var maxDraw = this._daylightSavingAdjust(new Date(maxDate.getFullYear(), maxDate.getMonth() - (numMonths[0] * numMonths[1]) + 1, maxDate.getDate()));
                maxDraw = (minDate && maxDraw < minDate ? minDate : maxDraw);
                while (this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1)) > maxDraw) {
                    drawMonth--;
                    if (drawMonth < 0) {
                        drawMonth = 11;
                        drawYear--
                    }
                }
            }
            inst.drawMonth = drawMonth;
            inst.drawYear = drawYear;
            var prevText = this._get(inst, "prevText");
            prevText = (!navigationAsDateFormat ? prevText : this.formatDate(prevText, this._daylightSavingAdjust(new Date(drawYear, drawMonth - stepMonths, 1)), this._getFormatConfig(inst)));
            var prev = (this._canAdjustMonth(inst, -1, drawYear, drawMonth) ? '<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_' + dpuuid + ".datepicker._adjustDate('#" + inst.id + "', -" + stepMonths + ", 'M');\" title=\"" + prevText + '"><span class="ui-icon ui-icon-circle-triangle-' + (isRTL ? "e" : "w") + '">' + prevText + "</span></a>" : (hideIfNoPrevNext ? "" : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' + prevText + '"><span class="ui-icon ui-icon-circle-triangle-' + (isRTL ? "e" : "w") + '">' + prevText + "</span></a>"));
            var nextText = this._get(inst, "nextText");
            nextText = (!navigationAsDateFormat ? nextText : this.formatDate(nextText, this._daylightSavingAdjust(new Date(drawYear, drawMonth + stepMonths, 1)), this._getFormatConfig(inst)));
            var next = (this._canAdjustMonth(inst, +1, drawYear, drawMonth) ? '<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_' + dpuuid + ".datepicker._adjustDate('#" + inst.id + "', +" + stepMonths + ", 'M');\" title=\"" + nextText + '"><span class="ui-icon ui-icon-circle-triangle-' + (isRTL ? "w" : "e") + '">' + nextText + "</span></a>" : (hideIfNoPrevNext ? "" : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' + nextText + '"><span class="ui-icon ui-icon-circle-triangle-' + (isRTL ? "w" : "e") + '">' + nextText + "</span></a>"));
            var currentText = this._get(inst, "currentText");
            var gotoDate = (this._get(inst, "gotoCurrent") && inst.currentDay ? currentDate : today);
            currentText = (!navigationAsDateFormat ? currentText : this.formatDate(currentText, gotoDate, this._getFormatConfig(inst)));
            var controls = (!inst.inline ? '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_' + dpuuid + '.datepicker._hideDatepicker();">' + this._get(inst, "closeText") + "</button>" : "");
            var buttonPanel = (showButtonPanel) ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (isRTL ? controls : "") + (this._isInRange(inst, gotoDate) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_' + dpuuid + ".datepicker._gotoToday('#" + inst.id + "');\">" + currentText + "</button>" : "") + (isRTL ? "" : controls) + "</div>" : "";
            var firstDay = parseInt(this._get(inst, "firstDay"), 10);
            firstDay = (isNaN(firstDay) ? 0 : firstDay);
            var showWeek = this._get(inst, "showWeek");
            var dayNames = this._get(inst, "dayNames");
            var dayNamesShort = this._get(inst, "dayNamesShort");
            var dayNamesMin = this._get(inst, "dayNamesMin");
            var monthNames = this._get(inst, "monthNames");
            var monthNamesShort = this._get(inst, "monthNamesShort");
            var beforeShowDay = this._get(inst, "beforeShowDay");
            var showOtherMonths = this._get(inst, "showOtherMonths");
            var selectOtherMonths = this._get(inst, "selectOtherMonths");
            var calculateWeek = this._get(inst, "calculateWeek") || this.iso8601Week;
            var defaultDate = this._getDefaultDate(inst);
            var html = "";
            for (var row = 0; row < numMonths[0]; row++) {
                var group = "";
                this.maxRows = 4;
                for (var col = 0; col < numMonths[1]; col++) {
                    var selectedDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, inst.selectedDay));
                    var cornerClass = " ui-corner-all";
                    var calender = "";
                    if (isMultiMonth) {
                        calender += '<div class="ui-datepicker-group';
                        if (numMonths[1] > 1) {
                            switch (col) {
                            case 0:
                                calender += " ui-datepicker-group-first";
                                cornerClass = " ui-corner-" + (isRTL ? "right" : "left");
                                break;
                            case numMonths[1] - 1:
                                calender += " ui-datepicker-group-last";
                                cornerClass = " ui-corner-" + (isRTL ? "left" : "right");
                                break;
                            default:
                                calender += " ui-datepicker-group-middle";
                                cornerClass = "";
                                break
                            }
                        }
                        calender += '">'
                    }
                    calender += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + cornerClass + '">' + (/all|left/.test(cornerClass) && row == 0 ? (isRTL ? next : prev) : "") + (/all|right/.test(cornerClass) && row == 0 ? (isRTL ? prev : next) : "") + this._generateMonthYearHeader(inst, drawMonth, drawYear, minDate, maxDate, row > 0 || col > 0, monthNames, monthNamesShort) + '</div><table class="ui-datepicker-calendar"><thead><tr>';
                    var thead = (showWeek ? '<th class="ui-datepicker-week-col">' + this._get(inst, "weekHeader") + "</th>" : "");
                    for (var dow = 0; dow < 7; dow++) {
                        var day = (dow + firstDay) % 7;
                        thead += "<th" + ((dow + firstDay + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : "") + '><span title="' + dayNames[day] + '">' + dayNamesMin[day] + "</span></th>"
                    }
                    calender += thead + "</tr></thead><tbody>";
                    var daysInMonth = this._getDaysInMonth(drawYear, drawMonth);
                    if (drawYear == inst.selectedYear && drawMonth == inst.selectedMonth) {
                        inst.selectedDay = Math.min(inst.selectedDay, daysInMonth)
                    }
                    var leadDays = (this._getFirstDayOfMonth(drawYear, drawMonth) - firstDay + 7) % 7;
                    var curRows = Math.ceil((leadDays + daysInMonth) / 7);
                    var numRows = (isMultiMonth ? this.maxRows > curRows ? this.maxRows : curRows : curRows);
                    this.maxRows = numRows;
                    var printDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1 - leadDays));
                    for (var dRow = 0; dRow < numRows; dRow++) {
                        calender += "<tr>";
                        var tbody = (!showWeek ? "" : '<td class="ui-datepicker-week-col">' + this._get(inst, "calculateWeek")(printDate) + "</td>");
                        for (var dow = 0; dow < 7; dow++) {
                            var daySettings = (beforeShowDay ? beforeShowDay.apply((inst.input ? inst.input[0] : null), [printDate]) : [true, ""]);
                            var otherMonth = (printDate.getMonth() != drawMonth);
                            var unselectable = (otherMonth && !selectOtherMonths) || !daySettings[0] || (minDate && printDate < minDate) || (maxDate && printDate > maxDate);
                            tbody += '<td class="' + ((dow + firstDay + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (otherMonth ? " ui-datepicker-other-month" : "") + ((printDate.getTime() == selectedDate.getTime() && drawMonth == inst.selectedMonth && inst._keyEvent) || (defaultDate.getTime() == printDate.getTime() && defaultDate.getTime() == selectedDate.getTime()) ? " " + this._dayOverClass : "") + (unselectable ? " " + this._unselectableClass + " ui-state-disabled" : "") + (otherMonth && !showOtherMonths ? "" : " " + daySettings[1] + (printDate.getTime() == currentDate.getTime() ? " " + this._currentClass : "") + (printDate.getTime() == today.getTime() ? " ui-datepicker-today" : "")) + '"' + ((!otherMonth || showOtherMonths) && daySettings[2] ? ' title="' + daySettings[2] + '"' : "") + (unselectable ? "" : ' onclick="DP_jQuery_' + dpuuid + ".datepicker._selectDay('#" + inst.id + "'," + printDate.getMonth() + "," + printDate.getFullYear() + ', this);return false;"') + ">" + (otherMonth && !showOtherMonths ? "&#xa0;" : (unselectable ? '<span class="ui-state-default">' + printDate.getDate() + "</span>" : '<a class="ui-state-default' + (printDate.getTime() == today.getTime() ? " ui-state-highlight" : "") + (printDate.getTime() == currentDate.getTime() ? " ui-state-active" : "") + (otherMonth ? " ui-priority-secondary" : "") + '" href="#">' + printDate.getDate() + "</a>")) + "</td>";
                            printDate.setDate(printDate.getDate() + 1);
                            printDate = this._daylightSavingAdjust(printDate)
                        }
                        calender += tbody + "</tr>"
                    }
                    drawMonth++;
                    if (drawMonth > 11) {
                        drawMonth = 0;
                        drawYear++
                    }
                    calender += "</tbody></table>" + (isMultiMonth ? "</div>" + ((numMonths[0] > 0 && col == numMonths[1] - 1) ? '<div class="ui-datepicker-row-break"></div>' : "") : "");
                    group += calender
                }
                html += group
            }
            html += buttonPanel + ($.browser.msie && parseInt($.browser.version, 10) < 7 && !inst.inline ? '<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>' : "");
            inst._keyEvent = false;
            return html
        },
        _generateMonthYearHeader: function (inst, drawMonth, drawYear, minDate, maxDate, secondary, monthNames, monthNamesShort) {
            var changeMonth = this._get(inst, "changeMonth");
            var changeYear = this._get(inst, "changeYear");
            var showMonthAfterYear = this._get(inst, "showMonthAfterYear");
            var html = '<div class="ui-datepicker-title">';
            var monthHtml = "";
            if (secondary || !changeMonth) {
                monthHtml += '<span class="ui-datepicker-month">' + monthNames[drawMonth] + "</span>"
            } else {
                var inMinYear = (minDate && minDate.getFullYear() == drawYear);
                var inMaxYear = (maxDate && maxDate.getFullYear() == drawYear);
                monthHtml += '<select class="ui-datepicker-month" onchange="DP_jQuery_' + dpuuid + ".datepicker._selectMonthYear('#" + inst.id + "', this, 'M');\" >";
                for (var month = 0; month < 12; month++) {
                    if ((!inMinYear || month >= minDate.getMonth()) && (!inMaxYear || month <= maxDate.getMonth())) {
                        monthHtml += '<option value="' + month + '"' + (month == drawMonth ? ' selected="selected"' : "") + ">" + monthNamesShort[month] + "</option>"
                    }
                }
                monthHtml += "</select>"
            } if (!showMonthAfterYear) {
                html += monthHtml + (secondary || !(changeMonth && changeYear) ? "&#xa0;" : "")
            }
            if (!inst.yearshtml) {
                inst.yearshtml = "";
                if (secondary || !changeYear) {
                    html += '<span class="ui-datepicker-year">' + drawYear + "</span>"
                } else {
                    var years = this._get(inst, "yearRange").split(":");
                    var thisYear = new Date().getFullYear();
                    var determineYear = function (value) {
                        var year = (value.match(/c[+-].*/) ? drawYear + parseInt(value.substring(1), 10) : (value.match(/[+-].*/) ? thisYear + parseInt(value, 10) : parseInt(value, 10)));
                        return (isNaN(year) ? thisYear : year)
                    };
                    var year = determineYear(years[0]);
                    var endYear = Math.max(year, determineYear(years[1] || ""));
                    year = (minDate ? Math.max(year, minDate.getFullYear()) : year);
                    endYear = (maxDate ? Math.min(endYear, maxDate.getFullYear()) : endYear);
                    inst.yearshtml += '<select class="ui-datepicker-year" onchange="DP_jQuery_' + dpuuid + ".datepicker._selectMonthYear('#" + inst.id + "', this, 'Y');\" >";
                    for (; year <= endYear; year++) {
                        inst.yearshtml += '<option value="' + year + '"' + (year == drawYear ? ' selected="selected"' : "") + ">" + year + "</option>"
                    }
                    inst.yearshtml += "</select>";
                    html += inst.yearshtml;
                    inst.yearshtml = null
                }
            }
            html += this._get(inst, "yearSuffix");
            if (showMonthAfterYear) {
                html += (secondary || !(changeMonth && changeYear) ? "&#xa0;" : "") + monthHtml
            }
            html += "</div>";
            return html
        },
        _adjustInstDate: function (inst, offset, period) {
            var year = inst.drawYear + (period == "Y" ? offset : 0);
            var month = inst.drawMonth + (period == "M" ? offset : 0);
            var day = Math.min(inst.selectedDay, this._getDaysInMonth(year, month)) + (period == "D" ? offset : 0);
            var date = this._restrictMinMax(inst, this._daylightSavingAdjust(new Date(year, month, day)));
            inst.selectedDay = date.getDate();
            inst.drawMonth = inst.selectedMonth = date.getMonth();
            inst.drawYear = inst.selectedYear = date.getFullYear();
            if (period == "M" || period == "Y") {
                this._notifyChange(inst)
            }
        },
        _restrictMinMax: function (inst, date) {
            var minDate = this._getMinMaxDate(inst, "min");
            var maxDate = this._getMinMaxDate(inst, "max");
            var newDate = (minDate && date < minDate ? minDate : date);
            newDate = (maxDate && newDate > maxDate ? maxDate : newDate);
            return newDate
        },
        _notifyChange: function (inst) {
            var onChange = this._get(inst, "onChangeMonthYear");
            if (onChange) {
                onChange.apply((inst.input ? inst.input[0] : null), [inst.selectedYear, inst.selectedMonth + 1, inst])
            }
        },
        _getNumberOfMonths: function (inst) {
            var numMonths = this._get(inst, "numberOfMonths");
            return (numMonths == null ? [1, 1] : (typeof numMonths == "number" ? [1, numMonths] : numMonths))
        },
        _getMinMaxDate: function (inst, minMax) {
            return this._determineDate(inst, this._get(inst, minMax + "Date"), null)
        },
        _getDaysInMonth: function (year, month) {
            return 32 - this._daylightSavingAdjust(new Date(year, month, 32)).getDate()
        },
        _getFirstDayOfMonth: function (year, month) {
            return new Date(year, month, 1).getDay()
        },
        _canAdjustMonth: function (inst, offset, curYear, curMonth) {
            var numMonths = this._getNumberOfMonths(inst);
            var date = this._daylightSavingAdjust(new Date(curYear, curMonth + (offset < 0 ? offset : numMonths[0] * numMonths[1]), 1));
            if (offset < 0) {
                date.setDate(this._getDaysInMonth(date.getFullYear(), date.getMonth()))
            }
            return this._isInRange(inst, date)
        },
        _isInRange: function (inst, date) {
            var minDate = this._getMinMaxDate(inst, "min");
            var maxDate = this._getMinMaxDate(inst, "max");
            return ((!minDate || date.getTime() >= minDate.getTime()) && (!maxDate || date.getTime() <= maxDate.getTime()))
        },
        _getFormatConfig: function (inst) {
            var shortYearCutoff = this._get(inst, "shortYearCutoff");
            shortYearCutoff = (typeof shortYearCutoff != "string" ? shortYearCutoff : new Date().getFullYear() % 100 + parseInt(shortYearCutoff, 10));
            return {
                shortYearCutoff: shortYearCutoff,
                dayNamesShort: this._get(inst, "dayNamesShort"),
                dayNames: this._get(inst, "dayNames"),
                monthNamesShort: this._get(inst, "monthNamesShort"),
                monthNames: this._get(inst, "monthNames")
            }
        },
        _formatDate: function (inst, day, month, year) {
            if (!day) {
                inst.currentDay = inst.selectedDay;
                inst.currentMonth = inst.selectedMonth;
                inst.currentYear = inst.selectedYear
            }
            var date = (day ? (typeof day == "object" ? day : this._daylightSavingAdjust(new Date(year, month, day))) : this._daylightSavingAdjust(new Date(inst.currentYear, inst.currentMonth, inst.currentDay)));
            return this.formatDate(this._get(inst, "dateFormat"), date, this._getFormatConfig(inst))
        }
    });

    function bindHover(dpDiv) {
        var selector = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return dpDiv.bind("mouseout", function (event) {
            var elem = $(event.target).closest(selector);
            if (!elem.length) {
                return
            }
            elem.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover")
        }).bind("mouseover", function (event) {
            var elem = $(event.target).closest(selector);
            if ($.datepicker._isDisabledDatepicker(instActive.inline ? dpDiv.parent()[0] : instActive.input[0]) || !elem.length) {
                return
            }
            elem.parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
            elem.addClass("ui-state-hover");
            if (elem.hasClass("ui-datepicker-prev")) {
                elem.addClass("ui-datepicker-prev-hover")
            }
            if (elem.hasClass("ui-datepicker-next")) {
                elem.addClass("ui-datepicker-next-hover")
            }
        })
    }

    function extendRemove(target, props) {
        $.extend(target, props);
        for (var name in props) {
            if (props[name] == null || props[name] == undefined) {
                target[name] = props[name]
            }
        }
        return target
    }

    function isArray(a) {
        return (a && (($.browser.safari && typeof a == "object" && a.length) || (a.constructor && a.constructor.toString().match(/\Array\(\)/))))
    }
    $.fn.datepicker = function (options) {
        if (!this.length) {
            return this
        }
        if (!$.datepicker.initialized) {
            $(document).mousedown($.datepicker._checkExternalClick).find("body").append($.datepicker.dpDiv);
            $.datepicker.initialized = true
        }
        var otherArgs = Array.prototype.slice.call(arguments, 1);
        if (typeof options == "string" && (options == "isDisabled" || options == "getDate" || options == "widget")) {
            return $.datepicker["_" + options + "Datepicker"].apply($.datepicker, [this[0]].concat(otherArgs))
        }
        if (options == "option" && arguments.length == 2 && typeof arguments[1] == "string") {
            return $.datepicker["_" + options + "Datepicker"].apply($.datepicker, [this[0]].concat(otherArgs))
        }
        return this.each(function () {
            typeof options == "string" ? $.datepicker["_" + options + "Datepicker"].apply($.datepicker, [this].concat(otherArgs)) : $.datepicker._attachDatepicker(this, options)
        })
    };
    $.datepicker = new Datepicker();
    $.datepicker.initialized = false;
    $.datepicker.uuid = new Date().getTime();
    $.datepicker.version = "1.8.18";
    window["DP_jQuery_" + dpuuid] = $
})(jQuery);
/*
 * jQuery UI Widget 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */
(function (c, e) {
    if (c.cleanData) {
        var d = c.cleanData;
        c.cleanData = function (f) {
            for (var g = 0, h;
                (h = f[g]) != null; g++) {
                try {
                    c(h).triggerHandler("remove")
                } catch (j) {}
            }
            d(f)
        }
    } else {
        var b = c.fn.remove;
        c.fn.remove = function (f, g) {
            return this.each(function () {
                if (!g) {
                    if (!f || c.filter(f, [this]).length) {
                        c("*", this).add([this]).each(function () {
                            try {
                                c(this).triggerHandler("remove")
                            } catch (h) {}
                        })
                    }
                }
                return b.call(c(this), f, g)
            })
        }
    }
    c.widget = function (g, j, f) {
        var h = g.split(".")[0],
            l;
        g = g.split(".")[1];
        l = h + "-" + g;
        if (!f) {
            f = j;
            j = c.Widget
        }
        c.expr[":"][l] = function (m) {
            return !!c.data(m, g)
        };
        c[h] = c[h] || {};
        c[h][g] = function (m, n) {
            if (arguments.length) {
                this._createWidget(m, n)
            }
        };
        var k = new j();
        k.options = c.extend(true, {}, k.options);
        c[h][g].prototype = c.extend(true, k, {
            namespace: h,
            widgetName: g,
            widgetEventPrefix: c[h][g].prototype.widgetEventPrefix || g,
            widgetBaseClass: l
        }, f);
        c.widget.bridge(g, c[h][g])
    };
    c.widget.bridge = function (g, f) {
        c.fn[g] = function (k) {
            var h = typeof k === "string",
                j = Array.prototype.slice.call(arguments, 1),
                l = this;
            k = !h && j.length ? c.extend.apply(null, [true, k].concat(j)) : k;
            if (h && k.charAt(0) === "_") {
                return l
            }
            if (h) {
                this.each(function () {
                    var m = c.data(this, g),
                        n = m && c.isFunction(m[k]) ? m[k].apply(m, j) : m;
                    if (n !== m && n !== e) {
                        l = n;
                        return false
                    }
                })
            } else {
                this.each(function () {
                    var m = c.data(this, g);
                    if (m) {
                        m.option(k || {})._init()
                    } else {
                        c.data(this, g, new f(k, this))
                    }
                })
            }
            return l
        }
    };
    c.Widget = function (f, g) {
        if (arguments.length) {
            this._createWidget(f, g)
        }
    };
    c.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        options: {
            disabled: false
        },
        _createWidget: function (g, h) {
            c.data(h, this.widgetName, this);
            this.element = c(h);
            this.options = c.extend(true, {}, this.options, this._getCreateOptions(), g);
            var f = this;
            this.element.bind("remove." + this.widgetName, function () {
                f.destroy()
            });
            this._create();
            this._trigger("create");
            this._init()
        },
        _getCreateOptions: function () {
            return c.metadata && c.metadata.get(this.element[0])[this.widgetName]
        },
        _create: function () {},
        _init: function () {},
        destroy: function () {
            this.element.unbind("." + this.widgetName).removeData(this.widgetName);
            this.widget().unbind("." + this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass + "-disabled ui-state-disabled")
        },
        widget: function () {
            return this.element
        },
        option: function (g, h) {
            var f = g;
            if (arguments.length === 0) {
                return c.extend({}, this.options)
            }
            if (typeof g === "string") {
                if (h === e) {
                    return this.options[g]
                }
                f = {};
                f[g] = h
            }
            this._setOptions(f);
            return this
        },
        _setOptions: function (g) {
            var f = this;
            c.each(g, function (h, j) {
                f._setOption(h, j)
            });
            return this
        },
        _setOption: function (f, g) {
            this.options[f] = g;
            if (f === "disabled") {
                this.widget()[g ? "addClass" : "removeClass"](this.widgetBaseClass + "-disabled ui-state-disabled").attr("aria-disabled", g)
            }
            return this
        },
        enable: function () {
            return this._setOption("disabled", false)
        },
        disable: function () {
            return this._setOption("disabled", true)
        },
        _trigger: function (f, g, h) {
            var l, k, j = this.options[f];
            h = h || {};
            g = c.Event(g);
            g.type = (f === this.widgetEventPrefix ? f : this.widgetEventPrefix + f).toLowerCase();
            g.target = this.element[0];
            k = g.originalEvent;
            if (k) {
                for (l in k) {
                    if (!(l in g)) {
                        g[l] = k[l]
                    }
                }
            }
            this.element.trigger(g, h);
            return !(c.isFunction(j) && j.call(this.element[0], g, h) === false || g.isDefaultPrevented())
        }
    }
})(jQuery);
(function (h, j) {
    h.ui = h.ui || {};
    var e = /left|center|right/,
        f = /top|center|bottom/,
        b = "center",
        g = {},
        c = h.fn.position,
        d = h.fn.offset;
    h.fn.position = function (l) {
        if (!l || !l.of) {
            return c.apply(this, arguments)
        }
        l = h.extend({}, l);
        var q = h(l.of),
            o = q[0],
            t = (l.collision || "flip").split(" "),
            s = l.offset ? l.offset.split(" ") : [0, 0],
            n, k, m;
        if (o.nodeType === 9) {
            n = q.width();
            k = q.height();
            m = {
                top: 0,
                left: 0
            }
        } else {
            if (o.setTimeout) {
                n = q.width();
                k = q.height();
                m = {
                    top: q.scrollTop(),
                    left: q.scrollLeft()
                }
            } else {
                if (o.preventDefault) {
                    l.at = "left top";
                    n = k = 0;
                    m = {
                        top: l.of.pageY,
                        left: l.of.pageX
                    }
                } else {
                    n = q.outerWidth();
                    k = q.outerHeight();
                    m = q.offset()
                }
            }
        }
        h.each(["my", "at"], function () {
            var u = (l[this] || "").split(" ");
            if (u.length === 1) {
                u = e.test(u[0]) ? u.concat([b]) : f.test(u[0]) ? [b].concat(u) : [b, b]
            }
            u[0] = e.test(u[0]) ? u[0] : b;
            u[1] = f.test(u[1]) ? u[1] : b;
            l[this] = u
        });
        if (t.length === 1) {
            t[1] = t[0]
        }
        s[0] = parseInt(s[0], 10) || 0;
        if (s.length === 1) {
            s[1] = s[0]
        }
        s[1] = parseInt(s[1], 10) || 0;
        if (l.at[0] === "right") {
            m.left += n
        } else {
            if (l.at[0] === b) {
                m.left += n / 2
            }
        } if (l.at[1] === "bottom") {
            m.top += k
        } else {
            if (l.at[1] === b) {
                m.top += k / 2
            }
        }
        m.left += s[0];
        m.top += s[1];
        return this.each(function () {
            var x = h(this),
                z = x.outerWidth(),
                w = x.outerHeight(),
                y = parseInt(h.curCSS(this, "marginLeft", true)) || 0,
                v = parseInt(h.curCSS(this, "marginTop", true)) || 0,
                B = z + y + (parseInt(h.curCSS(this, "marginRight", true)) || 0),
                C = w + v + (parseInt(h.curCSS(this, "marginBottom", true)) || 0),
                A = h.extend({}, m),
                u;
            if (l.my[0] === "right") {
                A.left -= z
            } else {
                if (l.my[0] === b) {
                    A.left -= z / 2
                }
            } if (l.my[1] === "bottom") {
                A.top -= w
            } else {
                if (l.my[1] === b) {
                    A.top -= w / 2
                }
            } if (!g.fractions) {
                A.left = Math.round(A.left);
                A.top = Math.round(A.top)
            }
            u = {
                left: A.left - y,
                top: A.top - v
            };
            h.each(["left", "top"], function (E, D) {
                if (h.ui.position[t[E]]) {
                    h.ui.position[t[E]][D](A, {
                        targetWidth: n,
                        targetHeight: k,
                        elemWidth: z,
                        elemHeight: w,
                        collisionPosition: u,
                        collisionWidth: B,
                        collisionHeight: C,
                        offset: s,
                        my: l.my,
                        at: l.at
                    })
                }
            });
            if (h.fn.bgiframe) {
                x.bgiframe()
            }
            x.offset(h.extend(A, {
                using: l.using
            }))
        })
    };
    h.ui.position = {
        fit: {
            left: function (k, l) {
                var n = h(window),
                    m = l.collisionPosition.left + l.collisionWidth - n.width() - n.scrollLeft();
                k.left = m > 0 ? k.left - m : Math.max(k.left - l.collisionPosition.left, k.left)
            },
            top: function (k, l) {
                var n = h(window),
                    m = l.collisionPosition.top + l.collisionHeight - n.height() - n.scrollTop();
                k.top = m > 0 ? k.top - m : Math.max(k.top - l.collisionPosition.top, k.top)
            }
        },
        flip: {
            left: function (l, n) {
                if (n.at[0] === b) {
                    return
                }
                var q = h(window),
                    o = n.collisionPosition.left + n.collisionWidth - q.width() - q.scrollLeft(),
                    k = n.my[0] === "left" ? -n.elemWidth : n.my[0] === "right" ? n.elemWidth : 0,
                    m = n.at[0] === "left" ? n.targetWidth : -n.targetWidth,
                    s = -2 * n.offset[0];
                l.left += n.collisionPosition.left < 0 ? k + m + s : o > 0 ? k + m + s : 0
            },
            top: function (l, n) {
                if (n.at[1] === b) {
                    return
                }
                var q = h(window),
                    o = n.collisionPosition.top + n.collisionHeight - q.height() - q.scrollTop(),
                    k = n.my[1] === "top" ? -n.elemHeight : n.my[1] === "bottom" ? n.elemHeight : 0,
                    m = n.at[1] === "top" ? n.targetHeight : -n.targetHeight,
                    s = -2 * n.offset[1];
                l.top += n.collisionPosition.top < 0 ? k + m + s : o > 0 ? k + m + s : 0
            }
        }
    };
    if (!h.offset.setOffset) {
        h.offset.setOffset = function (o, l) {
            if (/static/.test(h.curCSS(o, "position"))) {
                o.style.position = "relative"
            }
            var n = h(o),
                s = n.offset(),
                k = parseInt(h.curCSS(o, "top", true), 10) || 0,
                q = parseInt(h.curCSS(o, "left", true), 10) || 0,
                m = {
                    top: (l.top - s.top) + k,
                    left: (l.left - s.left) + q
                };
            if ("using" in l) {
                l.using.call(o, m)
            } else {
                n.css(m)
            }
        };
        h.fn.offset = function (k) {
            var l = this[0];
            if (!l || !l.ownerDocument) {
                return null
            }
            if (k) {
                return this.each(function () {
                    h.offset.setOffset(this, k)
                })
            }
            return d.call(this)
        }
    }(function () {
        var k = document.getElementsByTagName("body")[0],
            t = document.createElement("div"),
            o, s, l, q, n;
        o = document.createElement(k ? "div" : "body");
        l = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0,
            background: "none"
        };
        if (k) {
            h.extend(l, {
                position: "absolute",
                left: "-1000px",
                top: "-1000px"
            })
        }
        for (var m in l) {
            o.style[m] = l[m]
        }
        o.appendChild(t);
        s = k || document.documentElement;
        s.insertBefore(o, s.firstChild);
        t.style.cssText = "position: absolute; left: 10.7432222px; top: 10.432325px; height: 30px; width: 201px;";
        q = h(t).offset(function (u, v) {
            return v
        }).offset();
        o.innerHTML = "";
        s.removeChild(o);
        n = q.top + q.left + (k ? 2000 : 0);
        g.fractions = n > 21 && n < 22
    })()
}(jQuery));
(function (b, c) {
    var d = 0;
    b.widget("ui.autocomplete", {
        options: {
            appendTo: "body",
            autoFocus: false,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null
        },
        pending: 0,
        _create: function () {
            var e = this,
                g = this.element[0].ownerDocument,
                f;
            this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off").attr({
                role: "textbox",
                "aria-autocomplete": "list",
                "aria-haspopup": "true"
            }).bind("keydown.autocomplete", function (h) {
                if (e.options.disabled || e.element.propAttr("readOnly")) {
                    return
                }
                f = false;
                var j = b.ui.keyCode;
                switch (h.keyCode) {
                case j.PAGE_UP:
                    e._move("previousPage", h);
                    break;
                case j.PAGE_DOWN:
                    e._move("nextPage", h);
                    break;
                case j.UP:
                    e._move("previous", h);
                    h.preventDefault();
                    break;
                case j.DOWN:
                    e._move("next", h);
                    h.preventDefault();
                    break;
                case j.ENTER:
                case j.NUMPAD_ENTER:
                    if (e.menu.active) {
                        f = true;
                        h.preventDefault()
                    }
                case j.TAB:
                    if (!e.menu.active) {
                        return
                    }
                    e.menu.select(h);
                    break;
                case j.ESCAPE:
                    e.element.val(e.term);
                    e.close(h);
                    break;
                default:
                    clearTimeout(e.searching);
                    e.searching = setTimeout(function () {
                        if (e.term != e.element.val()) {
                            e.selectedItem = null;
                            e.search(null, h)
                        }
                    }, e.options.delay);
                    break
                }
            }).bind("keypress.autocomplete", function (h) {
                if (f) {
                    f = false;
                    h.preventDefault()
                }
            }).bind("focus.autocomplete", function () {
                if (e.options.disabled) {
                    return
                }
                e.selectedItem = null;
                e.previous = e.element.val()
            }).bind("blur.autocomplete", function (h) {
                if (e.options.disabled) {
                    return
                }
                clearTimeout(e.searching);
                e.closing = setTimeout(function () {
                    e.close(h);
                    e._change(h)
                }, 150)
            });
            this._initSource();
            this.response = function () {
                return e._response.apply(e, arguments)
            };
            this.menu = b("<ul></ul>").addClass("ui-autocomplete").appendTo(b(this.options.appendTo || "body", g)[0]).mousedown(function (h) {
                var j = e.menu.element[0];
                if (!b(h.target).closest(".ui-menu-item").length) {
                    setTimeout(function () {
                        b(document).one("mousedown", function (k) {
                            if (k.target !== e.element[0] && k.target !== j && !b.ui.contains(j, k.target)) {
                                e.close()
                            }
                        })
                    }, 1)
                }
                setTimeout(function () {
                    clearTimeout(e.closing)
                }, 13)
            }).menu({
                focus: function (j, k) {
                    var h = k.item.data("item.autocomplete");
                    if (false !== e._trigger("focus", j, {
                        item: h
                    })) {
                        if (/^key/.test(j.originalEvent.type)) {
                            e.element.val(h.value)
                        }
                    }
                },
                selected: function (k, l) {
                    var j = l.item.data("item.autocomplete"),
                        h = e.previous;
                    if (e.element[0] !== g.activeElement) {
                        e.element.focus();
                        e.previous = h;
                        setTimeout(function () {
                            e.previous = h;
                            e.selectedItem = j
                        }, 1)
                    }
                    if (false !== e._trigger("select", k, {
                        item: j
                    })) {
                        e.element.val(j.value)
                    }
                    e.term = e.element.val();
                    e.close(k);
                    e.selectedItem = j
                },
                blur: function (h, j) {
                    if (e.menu.element.is(":visible") && (e.element.val() !== e.term)) {
                        e.element.val(e.term)
                    }
                }
            }).zIndex(this.element.zIndex() + 1).css({
                top: 0,
                left: 0
            }).hide().data("menu");
            if (b.fn.bgiframe) {
                this.menu.element.bgiframe()
            }
            e.beforeunloadHandler = function () {
                e.element.removeAttr("autocomplete")
            };
            b(window).bind("beforeunload", e.beforeunloadHandler)
        },
        destroy: function () {
            this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup");
            this.menu.element.remove();
            b(window).unbind("beforeunload", this.beforeunloadHandler);
            b.Widget.prototype.destroy.call(this)
        },
        _setOption: function (e, f) {
            b.Widget.prototype._setOption.apply(this, arguments);
            if (e === "source") {
                this._initSource()
            }
            if (e === "appendTo") {
                this.menu.element.appendTo(b(f || "body", this.element[0].ownerDocument)[0])
            }
            if (e === "disabled" && f && this.xhr) {
                this.xhr.abort()
            }
        },
        _initSource: function () {
            var e = this,
                g, f;
            if (b.isArray(this.options.source)) {
                g = this.options.source;
                this.source = function (j, h) {
                    h(b.ui.autocomplete.filter(g, j.term))
                }
            } else {
                if (typeof this.options.source === "string") {
                    f = this.options.source;
                    this.source = function (j, h) {
                        if (e.xhr) {
                            e.xhr.abort()
                        }
                        e.xhr = b.ajax({
                            url: f,
                            data: j,
                            dataType: "json",
                            context: {
                                autocompleteRequest: ++d
                            },
                            success: function (l, k) {
                                if (this.autocompleteRequest === d) {
                                    h(l)
                                }
                            },
                            error: function () {
                                if (this.autocompleteRequest === d) {
                                    h([])
                                }
                            }
                        })
                    }
                } else {
                    this.source = this.options.source
                }
            }
        },
        search: function (f, e) {
            f = f != null ? f : this.element.val();
            this.term = this.element.val();
            if (f.length < this.options.minLength) {
                return this.close(e)
            }
            clearTimeout(this.closing);
            if (this._trigger("search", e) === false) {
                return
            }
            return this._search(f)
        },
        _search: function (e) {
            this.pending++;
            this.element.addClass("ui-autocomplete-loading");
            this.source({
                term: e
            }, this.response)
        },
        _response: function (e) {
            if (!this.options.disabled && e && e.length) {
                e = this._normalize(e);
                this._suggest(e);
                this._trigger("open")
            } else {
                this.close()
            }
            this.pending--;
            if (!this.pending) {
                this.element.removeClass("ui-autocomplete-loading")
            }
        },
        close: function (e) {
            clearTimeout(this.closing);
            if (this.menu.element.is(":visible")) {
                this.menu.element.hide();
                this.menu.deactivate();
                this._trigger("close", e)
            }
        },
        _change: function (e) {
            if (this.previous !== this.element.val()) {
                this._trigger("change", e, {
                    item: this.selectedItem
                })
            }
        },
        _normalize: function (e) {
            if (e.length && e[0].label && e[0].value) {
                return e
            }
            return b.map(e, function (f) {
                if (typeof f === "string") {
                    return {
                        label: f,
                        value: f
                    }
                }
                return b.extend({
                    label: f.label || f.value,
                    value: f.value || f.label
                }, f)
            })
        },
        _suggest: function (e) {
            var f = this.menu.element.empty().zIndex(this.element.zIndex() + 1);
            this._renderMenu(f, e);
            this.menu.deactivate();
            this.menu.refresh();
            f.show();
            this._resizeMenu();
            f.position(b.extend({
                of: this.element
            }, this.options.position));
            if (this.options.autoFocus) {
                this.menu.next(new b.Event("mouseover"))
            }
        },
        _resizeMenu: function () {
            var e = this.menu.element;
            e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function (g, f) {
            var e = this;
            b.each(f, function (h, j) {
                e._renderItem(g, j)
            })
        },
        _renderItem: function (e, f) {
            return b("<li></li>").data("item.autocomplete", f).append(b("<a></a>").text(f.label)).appendTo(e)
        },
        _move: function (f, e) {
            if (!this.menu.element.is(":visible")) {
                this.search(null, e);
                return
            }
            if (this.menu.first() && /^previous/.test(f) || this.menu.last() && /^next/.test(f)) {
                this.element.val(this.term);
                this.menu.deactivate();
                return
            }
            this.menu[f](e)
        },
        widget: function () {
            return this.menu.element
        }
    });
    b.extend(b.ui.autocomplete, {
        escapeRegex: function (e) {
            return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
        },
        filter: function (g, e) {
            var f = new RegExp(b.ui.autocomplete.escapeRegex(e), "i");
            return b.grep(g, function (h) {
                return f.test(h.label || h.value || h)
            })
        }
    })
}(jQuery));
(function (b) {
    b.widget("ui.menu", {
        _create: function () {
            var c = this;
            this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({
                role: "listbox",
                "aria-activedescendant": "ui-active-menuitem"
            }).click(function (d) {
                if (!b(d.target).closest(".ui-menu-item a").length) {
                    return
                }
                d.preventDefault();
                c.select(d)
            });
            this.refresh()
        },
        refresh: function () {
            var d = this;
            var c = this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "menuitem");
            c.children("a").addClass("ui-corner-all").attr("tabindex", -1).mouseenter(function (e) {
                d.activate(e, b(this).parent())
            }).mouseleave(function () {
                d.deactivate()
            })
        },
        activate: function (f, e) {
            this.deactivate();
            if (this.hasScroll()) {
                var g = e.offset().top - this.element.offset().top,
                    c = this.element.scrollTop(),
                    d = this.element.height();
                if (g < 0) {
                    this.element.scrollTop(c + g)
                } else {
                    if (g >= d) {
                        this.element.scrollTop(c + g - d + e.height())
                    }
                }
            }
            this.active = e.eq(0).children("a").addClass("ui-state-hover").attr("id", "ui-active-menuitem").end();
            this._trigger("focus", f, {
                item: e
            })
        },
        deactivate: function () {
            if (!this.active) {
                return
            }
            this.active.children("a").removeClass("ui-state-hover").removeAttr("id");
            this._trigger("blur");
            this.active = null
        },
        next: function (c) {
            this.move("next", ".ui-menu-item:first", c)
        },
        previous: function (c) {
            this.move("prev", ".ui-menu-item:last", c)
        },
        first: function () {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        last: function () {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        move: function (f, e, d) {
            if (!this.active) {
                this.activate(d, this.element.children(e));
                return
            }
            var c = this.active[f + "All"](".ui-menu-item").eq(0);
            if (c.length) {
                this.activate(d, c)
            } else {
                this.activate(d, this.element.children(e))
            }
        },
        nextPage: function (e) {
            if (this.hasScroll()) {
                if (!this.active || this.last()) {
                    this.activate(e, this.element.children(".ui-menu-item:first"));
                    return
                }
                var f = this.active.offset().top,
                    d = this.element.height(),
                    c = this.element.children(".ui-menu-item").filter(function () {
                        var g = b(this).offset().top - f - d + b(this).height();
                        return g < 10 && g > -10
                    });
                if (!c.length) {
                    c = this.element.children(".ui-menu-item:last")
                }
                this.activate(e, c)
            } else {
                this.activate(e, this.element.children(".ui-menu-item").filter(!this.active || this.last() ? ":first" : ":last"))
            }
        },
        previousPage: function (d) {
            if (this.hasScroll()) {
                if (!this.active || this.first()) {
                    this.activate(d, this.element.children(".ui-menu-item:last"));
                    return
                }
                var e = this.active.offset().top,
                    c = this.element.height();
                result = this.element.children(".ui-menu-item").filter(function () {
                    var f = b(this).offset().top - e + c - b(this).height();
                    return f < 10 && f > -10
                });
                if (!result.length) {
                    result = this.element.children(".ui-menu-item:first")
                }
                this.activate(d, result)
            } else {
                this.activate(d, this.element.children(".ui-menu-item").filter(!this.active || this.first() ? ":last" : ":first"))
            }
        },
        hasScroll: function () {
            return this.element.height() < this.element[b.fn.prop ? "prop" : "attr"]("scrollHeight")
        },
        select: function (c) {
            this._trigger("selected", c, {
                item: this.active
            })
        }
    })
}(jQuery));
var requirejs, require, define;
(function (global) {
    var req, s, head, baseElement, dataMain, src, interactiveScript, currentlyAddingScript, mainScript, subPath, version = "2.1.8",
        commentRegExp = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,
        cjsRequireRegExp = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,
        jsSuffixRegExp = /\.js$/,
        currDirRegExp = /^\.\//,
        op = Object.prototype,
        ostring = op.toString,
        hasOwn = op.hasOwnProperty,
        ap = Array.prototype,
        apsp = ap.splice,
        isBrowser = !!(typeof window !== "undefined" && navigator && window.document),
        isWebWorker = !isBrowser && typeof importScripts !== "undefined",
        readyRegExp = isBrowser && navigator.platform === "PLAYSTATION 3" ? /^complete$/ : /^(complete|loaded)$/,
        defContextName = "_",
        isOpera = typeof opera !== "undefined" && opera.toString() === "[object Opera]",
        contexts = {},
        cfg = {},
        globalDefQueue = [],
        useInteractive = false;

    function isFunction(it) {
        return ostring.call(it) === "[object Function]"
    }

    function isArray(it) {
        return ostring.call(it) === "[object Array]"
    }

    function each(ary, func) {
        if (ary) {
            var i;
            for (i = 0; i < ary.length; i += 1) {
                if (ary[i] && func(ary[i], i, ary)) {
                    break
                }
            }
        }
    }

    function eachReverse(ary, func) {
        if (ary) {
            var i;
            for (i = ary.length - 1; i > -1; i -= 1) {
                if (ary[i] && func(ary[i], i, ary)) {
                    break
                }
            }
        }
    }

    function hasProp(obj, prop) {
        return hasOwn.call(obj, prop)
    }

    function getOwn(obj, prop) {
        return hasProp(obj, prop) && obj[prop]
    }

    function eachProp(obj, func) {
        var prop;
        for (prop in obj) {
            if (hasProp(obj, prop)) {
                if (func(obj[prop], prop)) {
                    break
                }
            }
        }
    }

    function mixin(target, source, force, deepStringMixin) {
        if (source) {
            eachProp(source, function (value, prop) {
                if (force || !hasProp(target, prop)) {
                    if (deepStringMixin && typeof value !== "string") {
                        if (!target[prop]) {
                            target[prop] = {}
                        }
                        mixin(target[prop], value, force, deepStringMixin)
                    } else {
                        target[prop] = value
                    }
                }
            })
        }
        return target
    }

    function bind(obj, fn) {
        return function () {
            return fn.apply(obj, arguments)
        }
    }

    function scripts() {
        return document.getElementsByTagName("script")
    }

    function defaultOnError(err) {
        throw err
    }

    function getGlobal(value) {
        if (!value) {
            return value
        }
        var g = global;
        each(value.split("."), function (part) {
            g = g[part]
        });
        return g
    }

    function makeError(id, msg, err, requireModules) {
        var e = new Error(msg + "\nhttp://requirejs.org/docs/errors.html#" + id);
        e.requireType = id;
        e.requireModules = requireModules;
        if (err) {
            e.originalError = err
        }
        return e
    }
    if (typeof define !== "undefined") {
        return
    }
    if (typeof requirejs !== "undefined") {
        if (isFunction(requirejs)) {
            return
        }
        cfg = requirejs;
        requirejs = undefined
    }
    if (typeof require !== "undefined" && !isFunction(require)) {
        cfg = require;
        require = undefined
    }

    function newContext(contextName) {
        var inCheckLoaded, Module, context, handlers, checkLoadedTimeoutId, config = {
                waitSeconds: 7,
                baseUrl: "./",
                paths: {},
                pkgs: {},
                shim: {},
                config: {}
            },
            registry = {},
            enabledRegistry = {},
            undefEvents = {},
            defQueue = [],
            defined = {},
            urlFetched = {},
            requireCounter = 1,
            unnormalizedCounter = 1;

        function trimDots(ary) {
            var i, part;
            for (i = 0; ary[i]; i += 1) {
                part = ary[i];
                if (part === ".") {
                    ary.splice(i, 1);
                    i -= 1
                } else {
                    if (part === "..") {
                        if (i === 1 && (ary[2] === ".." || ary[0] === "..")) {
                            break
                        } else {
                            if (i > 0) {
                                ary.splice(i - 1, 2);
                                i -= 2
                            }
                        }
                    }
                }
            }
        }

        function normalize(name, baseName, applyMap) {
            var pkgName, pkgConfig, mapValue, nameParts, i, j, nameSegment, foundMap, foundI, foundStarMap, starI, baseParts = baseName && baseName.split("/"),
                normalizedBaseParts = baseParts,
                map = config.map,
                starMap = map && map["*"];
            if (name && name.charAt(0) === ".") {
                if (baseName) {
                    if (getOwn(config.pkgs, baseName)) {
                        normalizedBaseParts = baseParts = [baseName]
                    } else {
                        normalizedBaseParts = baseParts.slice(0, baseParts.length - 1)
                    }
                    name = normalizedBaseParts.concat(name.split("/"));
                    trimDots(name);
                    pkgConfig = getOwn(config.pkgs, (pkgName = name[0]));
                    name = name.join("/");
                    if (pkgConfig && name === pkgName + "/" + pkgConfig.main) {
                        name = pkgName
                    }
                } else {
                    if (name.indexOf("./") === 0) {
                        name = name.substring(2)
                    }
                }
            }
            if (applyMap && map && (baseParts || starMap)) {
                nameParts = name.split("/");
                for (i = nameParts.length; i > 0; i -= 1) {
                    nameSegment = nameParts.slice(0, i).join("/");
                    if (baseParts) {
                        for (j = baseParts.length; j > 0; j -= 1) {
                            mapValue = getOwn(map, baseParts.slice(0, j).join("/"));
                            if (mapValue) {
                                mapValue = getOwn(mapValue, nameSegment);
                                if (mapValue) {
                                    foundMap = mapValue;
                                    foundI = i;
                                    break
                                }
                            }
                        }
                    }
                    if (foundMap) {
                        break
                    }
                    if (!foundStarMap && starMap && getOwn(starMap, nameSegment)) {
                        foundStarMap = getOwn(starMap, nameSegment);
                        starI = i
                    }
                }
                if (!foundMap && foundStarMap) {
                    foundMap = foundStarMap;
                    foundI = starI
                }
                if (foundMap) {
                    nameParts.splice(0, foundI, foundMap);
                    name = nameParts.join("/")
                }
            }
            return name
        }

        function removeScript(name) {
            if (isBrowser) {
                each(scripts(), function (scriptNode) {
                    if (scriptNode.getAttribute("data-requiremodule") === name && scriptNode.getAttribute("data-requirecontext") === context.contextName) {
                        scriptNode.parentNode.removeChild(scriptNode);
                        return true
                    }
                })
            }
        }

        function hasPathFallback(id) {
            var pathConfig = getOwn(config.paths, id);
            if (pathConfig && isArray(pathConfig) && pathConfig.length > 1) {
                removeScript(id);
                pathConfig.shift();
                context.require.undef(id);
                context.require([id]);
                return true
            }
        }

        function splitPrefix(name) {
            var prefix, index = name ? name.indexOf("!") : -1;
            if (index > -1) {
                prefix = name.substring(0, index);
                name = name.substring(index + 1, name.length)
            }
            return [prefix, name]
        }

        function makeModuleMap(name, parentModuleMap, isNormalized, applyMap) {
            var url, pluginModule, suffix, nameParts, prefix = null,
                parentName = parentModuleMap ? parentModuleMap.name : null,
                originalName = name,
                isDefine = true,
                normalizedName = "";
            if (!name) {
                isDefine = false;
                name = "_@r" + (requireCounter += 1)
            }
            nameParts = splitPrefix(name);
            prefix = nameParts[0];
            name = nameParts[1];
            if (prefix) {
                prefix = normalize(prefix, parentName, applyMap);
                pluginModule = getOwn(defined, prefix)
            }
            if (name) {
                if (prefix) {
                    if (pluginModule && pluginModule.normalize) {
                        normalizedName = pluginModule.normalize(name, function (name) {
                            return normalize(name, parentName, applyMap)
                        })
                    } else {
                        normalizedName = normalize(name, parentName, applyMap)
                    }
                } else {
                    normalizedName = normalize(name, parentName, applyMap);
                    nameParts = splitPrefix(normalizedName);
                    prefix = nameParts[0];
                    normalizedName = nameParts[1];
                    isNormalized = true;
                    url = context.nameToUrl(normalizedName)
                }
            }
            suffix = prefix && !pluginModule && !isNormalized ? "_unnormalized" + (unnormalizedCounter += 1) : "";
            return {
                prefix: prefix,
                name: normalizedName,
                parentMap: parentModuleMap,
                unnormalized: !!suffix,
                url: url,
                originalName: originalName,
                isDefine: isDefine,
                id: (prefix ? prefix + "!" + normalizedName : normalizedName) + suffix
            }
        }

        function getModule(depMap) {
            var id = depMap.id,
                mod = getOwn(registry, id);
            if (!mod) {
                mod = registry[id] = new context.Module(depMap)
            }
            return mod
        }

        function on(depMap, name, fn) {
            var id = depMap.id,
                mod = getOwn(registry, id);
            if (hasProp(defined, id) && (!mod || mod.defineEmitComplete)) {
                if (name === "defined") {
                    fn(defined[id])
                }
            } else {
                mod = getModule(depMap);
                if (mod.error && name === "error") {
                    fn(mod.error)
                } else {
                    mod.on(name, fn)
                }
            }
        }

        function onError(err, errback) {
            var ids = err.requireModules,
                notified = false;
            if (errback) {
                errback(err)
            } else {
                each(ids, function (id) {
                    var mod = getOwn(registry, id);
                    if (mod) {
                        mod.error = err;
                        if (mod.events.error) {
                            notified = true;
                            mod.emit("error", err)
                        }
                    }
                });
                if (!notified) {
                    req.onError(err)
                }
            }
        }

        function takeGlobalQueue() {
            if (globalDefQueue.length) {
                apsp.apply(defQueue, [defQueue.length - 1, 0].concat(globalDefQueue));
                globalDefQueue = []
            }
        }
        handlers = {
            require: function (mod) {
                if (mod.require) {
                    return mod.require
                } else {
                    return (mod.require = context.makeRequire(mod.map))
                }
            },
            exports: function (mod) {
                mod.usingExports = true;
                if (mod.map.isDefine) {
                    if (mod.exports) {
                        return mod.exports
                    } else {
                        return (mod.exports = defined[mod.map.id] = {})
                    }
                }
            },
            module: function (mod) {
                if (mod.module) {
                    return mod.module
                } else {
                    return (mod.module = {
                        id: mod.map.id,
                        uri: mod.map.url,
                        config: function () {
                            var c, pkg = getOwn(config.pkgs, mod.map.id);
                            c = pkg ? getOwn(config.config, mod.map.id + "/" + pkg.main) : getOwn(config.config, mod.map.id);
                            return c || {}
                        },
                        exports: defined[mod.map.id]
                    })
                }
            }
        };

        function cleanRegistry(id) {
            delete registry[id];
            delete enabledRegistry[id]
        }

        function breakCycle(mod, traced, processed) {
            var id = mod.map.id;
            if (mod.error) {
                mod.emit("error", mod.error)
            } else {
                traced[id] = true;
                each(mod.depMaps, function (depMap, i) {
                    var depId = depMap.id,
                        dep = getOwn(registry, depId);
                    if (dep && !mod.depMatched[i] && !processed[depId]) {
                        if (getOwn(traced, depId)) {
                            mod.defineDep(i, defined[depId]);
                            mod.check()
                        } else {
                            breakCycle(dep, traced, processed)
                        }
                    }
                });
                processed[id] = true
            }
        }

        function checkLoaded() {
            var map, modId, err, usingPathFallback, waitInterval = config.waitSeconds * 1000,
                expired = waitInterval && (context.startTime + waitInterval) < new Date().getTime(),
                noLoads = [],
                reqCalls = [],
                stillLoading = false,
                needCycleCheck = true;
            if (inCheckLoaded) {
                return
            }
            inCheckLoaded = true;
            eachProp(enabledRegistry, function (mod) {
                map = mod.map;
                modId = map.id;
                if (!mod.enabled) {
                    return
                }
                if (!map.isDefine) {
                    reqCalls.push(mod)
                }
                if (!mod.error) {
                    if (!mod.inited && expired) {
                        if (hasPathFallback(modId)) {
                            usingPathFallback = true;
                            stillLoading = true
                        } else {
                            noLoads.push(modId);
                            removeScript(modId)
                        }
                    } else {
                        if (!mod.inited && mod.fetched && map.isDefine) {
                            stillLoading = true;
                            if (!map.prefix) {
                                return (needCycleCheck = false)
                            }
                        }
                    }
                }
            });
            if (expired && noLoads.length) {
                err = makeError("timeout", "Load timeout for modules: " + noLoads, null, noLoads);
                err.contextName = context.contextName;
                return onError(err)
            }
            if (needCycleCheck) {
                each(reqCalls, function (mod) {
                    breakCycle(mod, {}, {})
                })
            }
            if ((!expired || usingPathFallback) && stillLoading) {
                if ((isBrowser || isWebWorker) && !checkLoadedTimeoutId) {
                    checkLoadedTimeoutId = setTimeout(function () {
                        checkLoadedTimeoutId = 0;
                        checkLoaded()
                    }, 50)
                }
            }
            inCheckLoaded = false
        }
        Module = function (map) {
            this.events = getOwn(undefEvents, map.id) || {};
            this.map = map;
            this.shim = getOwn(config.shim, map.id);
            this.depExports = [];
            this.depMaps = [];
            this.depMatched = [];
            this.pluginMaps = {};
            this.depCount = 0
        };
        Module.prototype = {
            init: function (depMaps, factory, errback, options) {
                options = options || {};
                if (this.inited) {
                    return
                }
                this.factory = factory;
                if (errback) {
                    this.on("error", errback)
                } else {
                    if (this.events.error) {
                        errback = bind(this, function (err) {
                            this.emit("error", err)
                        })
                    }
                }
                this.depMaps = depMaps && depMaps.slice(0);
                this.errback = errback;
                this.inited = true;
                this.ignore = options.ignore;
                if (options.enabled || this.enabled) {
                    this.enable()
                } else {
                    this.check()
                }
            },
            defineDep: function (i, depExports) {
                if (!this.depMatched[i]) {
                    this.depMatched[i] = true;
                    this.depCount -= 1;
                    this.depExports[i] = depExports
                }
            },
            fetch: function () {
                if (this.fetched) {
                    return
                }
                this.fetched = true;
                context.startTime = (new Date()).getTime();
                var map = this.map;
                if (this.shim) {
                    context.makeRequire(this.map, {
                        enableBuildCallback: true
                    })(this.shim.deps || [], bind(this, function () {
                        return map.prefix ? this.callPlugin() : this.load()
                    }))
                } else {
                    return map.prefix ? this.callPlugin() : this.load()
                }
            },
            load: function () {
                var url = this.map.url;
                if (!urlFetched[url]) {
                    urlFetched[url] = true;
                    context.load(this.map.id, url)
                }
            },
            check: function () {
                if (!this.enabled || this.enabling) {
                    return
                }
                var err, cjsModule, id = this.map.id,
                    depExports = this.depExports,
                    exports = this.exports,
                    factory = this.factory;
                if (!this.inited) {
                    this.fetch()
                } else {
                    if (this.error) {
                        this.emit("error", this.error)
                    } else {
                        if (!this.defining) {
                            this.defining = true;
                            if (this.depCount < 1 && !this.defined) {
                                if (isFunction(factory)) {
                                    if ((this.events.error && this.map.isDefine) || req.onError !== defaultOnError) {
                                        try {
                                            exports = context.execCb(id, factory, depExports, exports)
                                        } catch (e) {
                                            err = e
                                        }
                                    } else {
                                        exports = context.execCb(id, factory, depExports, exports)
                                    } if (this.map.isDefine) {
                                        cjsModule = this.module;
                                        if (cjsModule && cjsModule.exports !== undefined && cjsModule.exports !== this.exports) {
                                            exports = cjsModule.exports
                                        } else {
                                            if (exports === undefined && this.usingExports) {
                                                exports = this.exports
                                            }
                                        }
                                    }
                                    if (err) {
                                        err.requireMap = this.map;
                                        err.requireModules = this.map.isDefine ? [this.map.id] : null;
                                        err.requireType = this.map.isDefine ? "define" : "require";
                                        return onError((this.error = err))
                                    }
                                } else {
                                    exports = factory
                                }
                                this.exports = exports;
                                if (this.map.isDefine && !this.ignore) {
                                    defined[id] = exports;
                                    if (req.onResourceLoad) {
                                        req.onResourceLoad(context, this.map, this.depMaps)
                                    }
                                }
                                cleanRegistry(id);
                                this.defined = true
                            }
                            this.defining = false;
                            if (this.defined && !this.defineEmitted) {
                                this.defineEmitted = true;
                                this.emit("defined", this.exports);
                                this.defineEmitComplete = true
                            }
                        }
                    }
                }
            },
            callPlugin: function () {
                var map = this.map,
                    id = map.id,
                    pluginMap = makeModuleMap(map.prefix);
                this.depMaps.push(pluginMap);
                on(pluginMap, "defined", bind(this, function (plugin) {
                    var load, normalizedMap, normalizedMod, name = this.map.name,
                        parentName = this.map.parentMap ? this.map.parentMap.name : null,
                        localRequire = context.makeRequire(map.parentMap, {
                            enableBuildCallback: true
                        });
                    if (this.map.unnormalized) {
                        if (plugin.normalize) {
                            name = plugin.normalize(name, function (name) {
                                return normalize(name, parentName, true)
                            }) || ""
                        }
                        normalizedMap = makeModuleMap(map.prefix + "!" + name, this.map.parentMap);
                        on(normalizedMap, "defined", bind(this, function (value) {
                            this.init([], function () {
                                return value
                            }, null, {
                                enabled: true,
                                ignore: true
                            })
                        }));
                        normalizedMod = getOwn(registry, normalizedMap.id);
                        if (normalizedMod) {
                            this.depMaps.push(normalizedMap);
                            if (this.events.error) {
                                normalizedMod.on("error", bind(this, function (err) {
                                    this.emit("error", err)
                                }))
                            }
                            normalizedMod.enable()
                        }
                        return
                    }
                    load = bind(this, function (value) {
                        this.init([], function () {
                            return value
                        }, null, {
                            enabled: true
                        })
                    });
                    load.error = bind(this, function (err) {
                        this.inited = true;
                        this.error = err;
                        err.requireModules = [id];
                        eachProp(registry, function (mod) {
                            if (mod.map.id.indexOf(id + "_unnormalized") === 0) {
                                cleanRegistry(mod.map.id)
                            }
                        });
                        onError(err)
                    });
                    load.fromText = bind(this, function (text, textAlt) {
                        var moduleName = map.name,
                            moduleMap = makeModuleMap(moduleName),
                            hasInteractive = useInteractive;
                        if (textAlt) {
                            text = textAlt
                        }
                        if (hasInteractive) {
                            useInteractive = false
                        }
                        getModule(moduleMap);
                        if (hasProp(config.config, id)) {
                            config.config[moduleName] = config.config[id]
                        }
                        try {
                            req.exec(text)
                        } catch (e) {
                            return onError(makeError("fromtexteval", "fromText eval for " + id + " failed: " + e, e, [id]))
                        }
                        if (hasInteractive) {
                            useInteractive = true
                        }
                        this.depMaps.push(moduleMap);
                        context.completeLoad(moduleName);
                        localRequire([moduleName], load)
                    });
                    plugin.load(map.name, localRequire, load, config)
                }));
                context.enable(pluginMap, this);
                this.pluginMaps[pluginMap.id] = pluginMap
            },
            enable: function () {
                enabledRegistry[this.map.id] = this;
                this.enabled = true;
                this.enabling = true;
                each(this.depMaps, bind(this, function (depMap, i) {
                    var id, mod, handler;
                    if (typeof depMap === "string") {
                        depMap = makeModuleMap(depMap, (this.map.isDefine ? this.map : this.map.parentMap), false, !this.skipMap);
                        this.depMaps[i] = depMap;
                        handler = getOwn(handlers, depMap.id);
                        if (handler) {
                            this.depExports[i] = handler(this);
                            return
                        }
                        this.depCount += 1;
                        on(depMap, "defined", bind(this, function (depExports) {
                            this.defineDep(i, depExports);
                            this.check()
                        }));
                        if (this.errback) {
                            on(depMap, "error", bind(this, this.errback))
                        }
                    }
                    id = depMap.id;
                    mod = registry[id];
                    if (!hasProp(handlers, id) && mod && !mod.enabled) {
                        context.enable(depMap, this)
                    }
                }));
                eachProp(this.pluginMaps, bind(this, function (pluginMap) {
                    var mod = getOwn(registry, pluginMap.id);
                    if (mod && !mod.enabled) {
                        context.enable(pluginMap, this)
                    }
                }));
                this.enabling = false;
                this.check()
            },
            on: function (name, cb) {
                var cbs = this.events[name];
                if (!cbs) {
                    cbs = this.events[name] = []
                }
                cbs.push(cb)
            },
            emit: function (name, evt) {
                each(this.events[name], function (cb) {
                    cb(evt)
                });
                if (name === "error") {
                    delete this.events[name]
                }
            }
        };

        function callGetModule(args) {
            if (!hasProp(defined, args[0])) {
                getModule(makeModuleMap(args[0], null, true)).init(args[1], args[2])
            }
        }

        function removeListener(node, func, name, ieName) {
            if (node.detachEvent && !isOpera) {
                if (ieName) {
                    node.detachEvent(ieName, func)
                }
            } else {
                node.removeEventListener(name, func, false)
            }
        }

        function getScriptData(evt) {
            var node = evt.currentTarget || evt.srcElement;
            removeListener(node, context.onScriptLoad, "load", "onreadystatechange");
            removeListener(node, context.onScriptError, "error");
            return {
                node: node,
                id: node && node.getAttribute("data-requiremodule")
            }
        }

        function intakeDefines() {
            var args;
            takeGlobalQueue();
            while (defQueue.length) {
                args = defQueue.shift();
                if (args[0] === null) {
                    return onError(makeError("mismatch", "Mismatched anonymous define() module: " + args[args.length - 1]))
                } else {
                    callGetModule(args)
                }
            }
        }
        context = {
            config: config,
            contextName: contextName,
            registry: registry,
            defined: defined,
            urlFetched: urlFetched,
            defQueue: defQueue,
            Module: Module,
            makeModuleMap: makeModuleMap,
            nextTick: req.nextTick,
            onError: onError,
            configure: function (cfg) {
                if (cfg.baseUrl) {
                    if (cfg.baseUrl.charAt(cfg.baseUrl.length - 1) !== "/") {
                        cfg.baseUrl += "/"
                    }
                }
                var pkgs = config.pkgs,
                    shim = config.shim,
                    objs = {
                        paths: true,
                        config: true,
                        map: true
                    };
                eachProp(cfg, function (value, prop) {
                    if (objs[prop]) {
                        if (prop === "map") {
                            if (!config.map) {
                                config.map = {}
                            }
                            mixin(config[prop], value, true, true)
                        } else {
                            mixin(config[prop], value, true)
                        }
                    } else {
                        config[prop] = value
                    }
                });
                if (cfg.shim) {
                    eachProp(cfg.shim, function (value, id) {
                        if (isArray(value)) {
                            value = {
                                deps: value
                            }
                        }
                        if ((value.exports || value.init) && !value.exportsFn) {
                            value.exportsFn = context.makeShimExports(value)
                        }
                        shim[id] = value
                    });
                    config.shim = shim
                }
                if (cfg.packages) {
                    each(cfg.packages, function (pkgObj) {
                        var location;
                        pkgObj = typeof pkgObj === "string" ? {
                            name: pkgObj
                        } : pkgObj;
                        location = pkgObj.location;
                        pkgs[pkgObj.name] = {
                            name: pkgObj.name,
                            location: location || pkgObj.name,
                            main: (pkgObj.main || "main").replace(currDirRegExp, "").replace(jsSuffixRegExp, "")
                        }
                    });
                    config.pkgs = pkgs
                }
                eachProp(registry, function (mod, id) {
                    if (!mod.inited && !mod.map.unnormalized) {
                        mod.map = makeModuleMap(id)
                    }
                });
                if (cfg.deps || cfg.callback) {
                    context.require(cfg.deps || [], cfg.callback)
                }
            },
            makeShimExports: function (value) {
                function fn() {
                    var ret;
                    if (value.init) {
                        ret = value.init.apply(global, arguments)
                    }
                    return ret || (value.exports && getGlobal(value.exports))
                }
                return fn
            },
            makeRequire: function (relMap, options) {
                options = options || {};

                function localRequire(deps, callback, errback) {
                    var id, map, requireMod;
                    if (options.enableBuildCallback && callback && isFunction(callback)) {
                        callback.__requireJsBuild = true
                    }
                    if (typeof deps === "string") {
                        if (isFunction(callback)) {
                            return onError(makeError("requireargs", "Invalid require call"), errback)
                        }
                        if (relMap && hasProp(handlers, deps)) {
                            return handlers[deps](registry[relMap.id])
                        }
                        if (req.get) {
                            return req.get(context, deps, relMap, localRequire)
                        }
                        map = makeModuleMap(deps, relMap, false, true);
                        id = map.id;
                        if (!hasProp(defined, id)) {
                            return onError(makeError("notloaded", 'Module name "' + id + '" has not been loaded yet for context: ' + contextName + (relMap ? "" : ". Use require([])")))
                        }
                        return defined[id]
                    }
                    intakeDefines();
                    context.nextTick(function () {
                        intakeDefines();
                        requireMod = getModule(makeModuleMap(null, relMap));
                        requireMod.skipMap = options.skipMap;
                        requireMod.init(deps, callback, errback, {
                            enabled: true
                        });
                        checkLoaded()
                    });
                    return localRequire
                }
                mixin(localRequire, {
                    isBrowser: isBrowser,
                    toUrl: function (moduleNamePlusExt) {
                        var ext, index = moduleNamePlusExt.lastIndexOf("."),
                            segment = moduleNamePlusExt.split("/")[0],
                            isRelative = segment === "." || segment === "..";
                        if (index !== -1 && (!isRelative || index > 1)) {
                            ext = moduleNamePlusExt.substring(index, moduleNamePlusExt.length);
                            moduleNamePlusExt = moduleNamePlusExt.substring(0, index)
                        }
                        return context.nameToUrl(normalize(moduleNamePlusExt, relMap && relMap.id, true), ext, true)
                    },
                    defined: function (id) {
                        return hasProp(defined, makeModuleMap(id, relMap, false, true).id)
                    },
                    specified: function (id) {
                        id = makeModuleMap(id, relMap, false, true).id;
                        return hasProp(defined, id) || hasProp(registry, id)
                    }
                });
                if (!relMap) {
                    localRequire.undef = function (id) {
                        takeGlobalQueue();
                        var map = makeModuleMap(id, relMap, true),
                            mod = getOwn(registry, id);
                        delete defined[id];
                        delete urlFetched[map.url];
                        delete undefEvents[id];
                        if (mod) {
                            if (mod.events.defined) {
                                undefEvents[id] = mod.events
                            }
                            cleanRegistry(id)
                        }
                    }
                }
                return localRequire
            },
            enable: function (depMap) {
                var mod = getOwn(registry, depMap.id);
                if (mod) {
                    getModule(depMap).enable()
                }
            },
            completeLoad: function (moduleName) {
                var found, args, mod, shim = getOwn(config.shim, moduleName) || {},
                    shExports = shim.exports;
                takeGlobalQueue();
                while (defQueue.length) {
                    args = defQueue.shift();
                    if (args[0] === null) {
                        args[0] = moduleName;
                        if (found) {
                            break
                        }
                        found = true
                    } else {
                        if (args[0] === moduleName) {
                            found = true
                        }
                    }
                    callGetModule(args)
                }
                mod = getOwn(registry, moduleName);
                if (!found && !hasProp(defined, moduleName) && mod && !mod.inited) {
                    if (config.enforceDefine && (!shExports || !getGlobal(shExports))) {
                        if (hasPathFallback(moduleName)) {
                            return
                        } else {
                            return onError(makeError("nodefine", "No define call for " + moduleName, null, [moduleName]))
                        }
                    } else {
                        callGetModule([moduleName, (shim.deps || []), shim.exportsFn])
                    }
                }
                checkLoaded()
            },
            nameToUrl: function (moduleName, ext, skipExt) {
                var paths, pkgs, pkg, pkgPath, syms, i, parentModule, url, parentPath;
                if (req.jsExtRegExp.test(moduleName)) {
                    url = moduleName + (ext || "")
                } else {
                    paths = config.paths;
                    pkgs = config.pkgs;
                    syms = moduleName.split("/");
                    for (i = syms.length; i > 0; i -= 1) {
                        parentModule = syms.slice(0, i).join("/");
                        pkg = getOwn(pkgs, parentModule);
                        parentPath = getOwn(paths, parentModule);
                        if (parentPath) {
                            if (isArray(parentPath)) {
                                parentPath = parentPath[0]
                            }
                            syms.splice(0, i, parentPath);
                            break
                        } else {
                            if (pkg) {
                                if (moduleName === pkg.name) {
                                    pkgPath = pkg.location + "/" + pkg.main
                                } else {
                                    pkgPath = pkg.location
                                }
                                syms.splice(0, i, pkgPath);
                                break
                            }
                        }
                    }
                    url = syms.join("/");
                    url += (ext || (/\?/.test(url) || skipExt ? "" : ".js"));
                    url = (url.charAt(0) === "/" || url.match(/^[\w\+\.\-]+:/) ? "" : config.baseUrl) + url
                }
                return config.urlArgs ? url + ((url.indexOf("?") === -1 ? "?" : "&") + config.urlArgs) : url
            },
            load: function (id, url) {
                req.load(context, id, url)
            },
            execCb: function (name, callback, args, exports) {
                return callback.apply(exports, args)
            },
            onScriptLoad: function (evt) {
                if (evt.type === "load" || (readyRegExp.test((evt.currentTarget || evt.srcElement).readyState))) {
                    interactiveScript = null;
                    var data = getScriptData(evt);
                    context.completeLoad(data.id)
                }
            },
            onScriptError: function (evt) {
                var data = getScriptData(evt);
                if (!hasPathFallback(data.id)) {
                    return onError(makeError("scripterror", "Script error for: " + data.id, evt, [data.id]))
                }
            }
        };
        context.require = context.makeRequire();
        return context
    }
    req = requirejs = function (deps, callback, errback, optional) {
        var context, config, contextName = defContextName;
        if (!isArray(deps) && typeof deps !== "string") {
            config = deps;
            if (isArray(callback)) {
                deps = callback;
                callback = errback;
                errback = optional
            } else {
                deps = []
            }
        }
        if (config && config.context) {
            contextName = config.context
        }
        context = getOwn(contexts, contextName);
        if (!context) {
            context = contexts[contextName] = req.s.newContext(contextName)
        }
        if (config) {
            context.configure(config)
        }
        return context.require(deps, callback, errback)
    };
    req.config = function (config) {
        return req(config)
    };
    req.nextTick = typeof setTimeout !== "undefined" ? function (fn) {
        setTimeout(fn, 4)
    } : function (fn) {
        fn()
    };
    if (!require) {
        require = req
    }
    req.version = version;
    req.jsExtRegExp = /^\/|:|\?|\.js$/;
    req.isBrowser = isBrowser;
    s = req.s = {
        contexts: contexts,
        newContext: newContext
    };
    req({});
    each(["toUrl", "undef", "defined", "specified"], function (prop) {
        req[prop] = function () {
            var ctx = contexts[defContextName];
            return ctx.require[prop].apply(ctx, arguments)
        }
    });
    if (isBrowser) {
        head = s.head = document.getElementsByTagName("head")[0];
        baseElement = document.getElementsByTagName("base")[0];
        if (baseElement) {
            head = s.head = baseElement.parentNode
        }
    }
    req.onError = defaultOnError;
    req.createNode = function (config, moduleName, url) {
        var node = config.xhtml ? document.createElementNS("http://www.w3.org/1999/xhtml", "html:script") : document.createElement("script");
        node.type = config.scriptType || "text/javascript";
        node.charset = "utf-8";
        node.async = true;
        return node
    };
    req.load = function (context, moduleName, url) {
        var config = (context && context.config) || {},
            node;
        if (isBrowser) {
            node = req.createNode(config, moduleName, url);
            node.setAttribute("data-requirecontext", context.contextName);
            node.setAttribute("data-requiremodule", moduleName);
            if (node.attachEvent && !(node.attachEvent.toString && node.attachEvent.toString().indexOf("[native code") < 0) && !isOpera) {
                useInteractive = true;
                node.attachEvent("onreadystatechange", context.onScriptLoad)
            } else {
                node.addEventListener("load", context.onScriptLoad, false);
                node.addEventListener("error", context.onScriptError, false)
            }
            node.src = url;
            currentlyAddingScript = node;
            if (baseElement) {
                head.insertBefore(node, baseElement)
            } else {
                head.appendChild(node)
            }
            currentlyAddingScript = null;
            return node
        } else {
            if (isWebWorker) {
                try {
                    importScripts(url);
                    context.completeLoad(moduleName)
                } catch (e) {
                    context.onError(makeError("importscripts", "importScripts failed for " + moduleName + " at " + url, e, [moduleName]))
                }
            }
        }
    };

    function getInteractiveScript() {
        if (interactiveScript && interactiveScript.readyState === "interactive") {
            return interactiveScript
        }
        eachReverse(scripts(), function (script) {
            if (script.readyState === "interactive") {
                return (interactiveScript = script)
            }
        });
        return interactiveScript
    }
    if (isBrowser) {
        eachReverse(scripts(), function (script) {
            if (!head) {
                head = script.parentNode
            }
            dataMain = script.getAttribute("data-main");
            if (dataMain) {
                mainScript = dataMain;
                if (!cfg.baseUrl) {
                    src = mainScript.split("/");
                    mainScript = src.pop();
                    subPath = src.length ? src.join("/") + "/" : "./";
                    cfg.baseUrl = subPath
                }
                mainScript = mainScript.replace(jsSuffixRegExp, "");
                if (req.jsExtRegExp.test(mainScript)) {
                    mainScript = dataMain
                }
                cfg.deps = cfg.deps ? cfg.deps.concat(mainScript) : [mainScript];
                return true
            }
        })
    }
    define = function (name, deps, callback) {
        var node, context;
        if (typeof name !== "string") {
            callback = deps;
            deps = name;
            name = null
        }
        if (!isArray(deps)) {
            callback = deps;
            deps = null
        }
        if (!deps && isFunction(callback)) {
            deps = [];
            if (callback.length) {
                callback.toString().replace(commentRegExp, "").replace(cjsRequireRegExp, function (match, dep) {
                    deps.push(dep)
                });
                deps = (callback.length === 1 ? ["require"] : ["require", "exports", "module"]).concat(deps)
            }
        }
        if (useInteractive) {
            node = currentlyAddingScript || getInteractiveScript();
            if (node) {
                if (!name) {
                    name = node.getAttribute("data-requiremodule")
                }
                context = contexts[node.getAttribute("data-requirecontext")]
            }
        }(context ? context.defQueue : globalDefQueue).push([name, deps, callback])
    };
    define.amd = {
        jQuery: true
    };
    req.exec = function (text) {
        return eval(text)
    };
    req(cfg)
}(this));
define("requirejs", function () {});
define("jquery", [], function () {
    return jQuery
});
var Handlebars = {};
(function (d, f) {
    d.VERSION = "1.0.0";
    d.COMPILER_REVISION = 4;
    d.REVISION_CHANGES = {
        1: "<= 1.0.rc.2",
        2: "== 1.0.0-rc.3",
        3: "== 1.0.0-rc.4",
        4: ">= 1.0.0"
    };
    d.helpers = {};
    d.partials = {};
    var e = Object.prototype.toString,
        g = "[object Function]",
        c = "[object Object]";
    d.registerHelper = function (n, o, m) {
        if (e.call(n) === c) {
            if (m || o) {
                throw new d.Exception("Arg not supported with multiple helpers")
            }
            d.Utils.extend(this.helpers, n)
        } else {
            if (m) {
                o.not = m
            }
            this.helpers[n] = o
        }
    };
    d.registerPartial = function (m, n) {
        if (e.call(m) === c) {
            d.Utils.extend(this.partials, m)
        } else {
            this.partials[m] = n
        }
    };
    d.registerHelper("helperMissing", function (m) {
        if (arguments.length === 2) {
            return f
        } else {
            throw new Error("Missing helper: '" + m + "'")
        }
    });
    d.registerHelper("blockHelperMissing", function (o, n) {
        var m = n.inverse || function () {},
            s = n.fn;
        var q = e.call(o);
        if (q === g) {
            o = o.call(this)
        }
        if (o === true) {
            return s(this)
        } else {
            if (o === false || o == null) {
                return m(this)
            } else {
                if (q === "[object Array]") {
                    if (o.length > 0) {
                        return d.helpers.each(o, n)
                    } else {
                        return m(this)
                    }
                } else {
                    return s(o)
                }
            }
        }
    });
    d.K = function () {};
    d.createFrame = Object.create || function (m) {
        d.K.prototype = m;
        var n = new d.K();
        d.K.prototype = null;
        return n
    };
    d.logger = {
        DEBUG: 0,
        INFO: 1,
        WARN: 2,
        ERROR: 3,
        level: 3,
        methodMap: {
            0: "debug",
            1: "info",
            2: "warn",
            3: "error"
        },
        log: function (o, m) {
            if (d.logger.level <= o) {
                var n = d.logger.methodMap[o];
                if (typeof console !== "undefined" && console[n]) {
                    console[n].call(console, m)
                }
            }
        }
    };
    d.log = function (n, m) {
        d.logger.log(n, m)
    };
    d.registerHelper("each", function (m, x) {
        var v = x.fn,
            o = x.inverse;
        var s = 0,
            t = "",
            q;
        var u = e.call(m);
        if (u === g) {
            m = m.call(this)
        }
        if (x.data) {
            q = d.createFrame(x.data)
        }
        if (m && typeof m === "object") {
            if (m instanceof Array) {
                for (var n = m.length; s < n; s++) {
                    if (q) {
                        q.index = s
                    }
                    t = t + v(m[s], {
                        data: q
                    })
                }
            } else {
                for (var w in m) {
                    if (m.hasOwnProperty(w)) {
                        if (q) {
                            q.key = w
                        }
                        t = t + v(m[w], {
                            data: q
                        });
                        s++
                    }
                }
            }
        }
        if (s === 0) {
            t = o(this)
        }
        return t
    });
    d.registerHelper("if", function (n, m) {
        var o = e.call(n);
        if (o === g) {
            n = n.call(this)
        }
        if (!n || d.Utils.isEmpty(n)) {
            return m.inverse(this)
        } else {
            return m.fn(this)
        }
    });
    d.registerHelper("unless", function (n, m) {
        return d.helpers["if"].call(this, n, {
            fn: m.inverse,
            inverse: m.fn
        })
    });
    d.registerHelper("with", function (n, m) {
        var o = e.call(n);
        if (o === g) {
            n = n.call(this)
        }
        if (!d.Utils.isEmpty(n)) {
            return m.fn(n)
        }
    });
    d.registerHelper("log", function (n, m) {
        var o = m.data && m.data.level != null ? parseInt(m.data.level, 10) : 1;
        d.log(o, n)
    });
    var k = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
    d.Exception = function (o) {
        var n = Error.prototype.constructor.apply(this, arguments);
        for (var m = 0; m < k.length; m++) {
            this[k[m]] = n[k[m]]
        }
    };
    d.Exception.prototype = new Error();
    d.SafeString = function (m) {
        this.string = m
    };
    d.SafeString.prototype.toString = function () {
        return this.string.toString()
    };
    var j = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
    };
    var b = /[&<>"'`]/g;
    var h = /[&<>"'`]/;
    var l = function (m) {
        return j[m] || "&amp;"
    };
    d.Utils = {
        extend: function (o, n) {
            for (var m in n) {
                if (n.hasOwnProperty(m)) {
                    o[m] = n[m]
                }
            }
        },
        escapeExpression: function (m) {
            if (m instanceof d.SafeString) {
                return m.toString()
            } else {
                if (m == null || m === false) {
                    return ""
                }
            }
            m = m.toString();
            if (!h.test(m)) {
                return m
            }
            return m.replace(b, l)
        },
        isEmpty: function (m) {
            if (!m && m !== 0) {
                return true
            } else {
                if (e.call(m) === "[object Array]" && m.length === 0) {
                    return true
                } else {
                    return false
                }
            }
        }
    };
    d.VM = {
        template: function (m) {
            var n = {
                escapeExpression: d.Utils.escapeExpression,
                invokePartial: d.VM.invokePartial,
                programs: [],
                program: function (q, s, t) {
                    var o = this.programs[q];
                    if (t) {
                        o = d.VM.program(q, s, t)
                    } else {
                        if (!o) {
                            o = this.programs[q] = d.VM.program(q, s)
                        }
                    }
                    return o
                },
                merge: function (s, q) {
                    var o = s || q;
                    if (s && q) {
                        o = {};
                        d.Utils.extend(o, q);
                        d.Utils.extend(o, s)
                    }
                    return o
                },
                programWithDepth: d.VM.programWithDepth,
                noop: d.VM.noop,
                compilerInfo: null
            };
            return function (u, t) {
                t = t || {};
                var q = m.call(n, d, u, t.helpers, t.partials, t.data);
                var v = n.compilerInfo || [],
                    s = v[0] || 1,
                    x = d.COMPILER_REVISION;
                if (s !== x) {
                    if (s < x) {
                        var o = d.REVISION_CHANGES[x],
                            w = d.REVISION_CHANGES[s];
                        throw "Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + o + ") or downgrade your runtime to an older version (" + w + ")."
                    } else {
                        throw "Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + v[1] + ")."
                    }
                }
                return q
            }
        },
        programWithDepth: function (o, q, s) {
            var n = Array.prototype.slice.call(arguments, 3);
            var m = function (u, t) {
                t = t || {};
                return q.apply(this, [u, t.data || s].concat(n))
            };
            m.program = o;
            m.depth = n.length;
            return m
        },
        program: function (n, o, q) {
            var m = function (t, s) {
                s = s || {};
                return o(t, s.data || q)
            };
            m.program = n;
            m.depth = 0;
            return m
        },
        noop: function () {
            return ""
        },
        invokePartial: function (m, o, s, t, q, u) {
            var n = {
                helpers: t,
                partials: q,
                data: u
            };
            if (m === f) {
                throw new d.Exception("The partial " + o + " could not be found")
            } else {
                if (m instanceof Function) {
                    return m(s, n)
                } else {
                    if (!d.compile) {
                        throw new d.Exception("The partial " + o + " could not be compiled when running in runtime-only mode")
                    } else {
                        q[o] = d.compile(m, {
                            data: u !== f
                        });
                        return q[o](s, n)
                    }
                }
            }
        }
    };
    d.template = d.VM.template
})(Handlebars);
define("handlebars", (function (b) {
    return function () {
        var c, d;
        return c || b.Handlebars
    }
}(this)));
(function () {
    var A = this;
    var m = A._;
    var H = {};
    var G = Array.prototype,
        g = Object.prototype,
        v = Function.prototype;
    var L = G.push,
        s = G.slice,
        C = G.concat,
        e = g.toString,
        l = g.hasOwnProperty;
    var P = G.forEach,
        u = G.map,
        I = G.reduce,
        d = G.reduceRight,
        c = G.filter,
        F = G.every,
        t = G.some,
        q = G.indexOf,
        n = G.lastIndexOf,
        y = Array.isArray,
        f = Object.keys,
        J = v.bind;
    var Q = function (R) {
        if (R instanceof Q) {
            return R
        }
        if (!(this instanceof Q)) {
            return new Q(R)
        }
        this._wrapped = R
    };
    if (typeof exports !== "undefined") {
        if (typeof module !== "undefined" && module.exports) {
            exports = module.exports = Q
        }
        exports._ = Q
    } else {
        A._ = Q
    }
    Q.VERSION = "1.5.1";
    var M = Q.each = Q.forEach = function (W, V, U) {
        if (W == null) {
            return
        }
        if (P && W.forEach === P) {
            W.forEach(V, U)
        } else {
            if (W.length === +W.length) {
                for (var T = 0, R = W.length; T < R; T++) {
                    if (V.call(U, W[T], T, W) === H) {
                        return
                    }
                }
            } else {
                for (var S in W) {
                    if (Q.has(W, S)) {
                        if (V.call(U, W[S], S, W) === H) {
                            return
                        }
                    }
                }
            }
        }
    };
    Q.map = Q.collect = function (U, T, S) {
        var R = [];
        if (U == null) {
            return R
        }
        if (u && U.map === u) {
            return U.map(T, S)
        }
        M(U, function (X, V, W) {
            R.push(T.call(S, X, V, W))
        });
        return R
    };
    var h = "Reduce of empty array with no initial value";
    Q.reduce = Q.foldl = Q.inject = function (V, U, R, T) {
        var S = arguments.length > 2;
        if (V == null) {
            V = []
        }
        if (I && V.reduce === I) {
            if (T) {
                U = Q.bind(U, T)
            }
            return S ? V.reduce(U, R) : V.reduce(U)
        }
        M(V, function (Y, W, X) {
            if (!S) {
                R = Y;
                S = true
            } else {
                R = U.call(T, R, Y, W, X)
            }
        });
        if (!S) {
            throw new TypeError(h)
        }
        return R
    };
    Q.reduceRight = Q.foldr = function (X, U, R, T) {
        var S = arguments.length > 2;
        if (X == null) {
            X = []
        }
        if (d && X.reduceRight === d) {
            if (T) {
                U = Q.bind(U, T)
            }
            return S ? X.reduceRight(U, R) : X.reduceRight(U)
        }
        var W = X.length;
        if (W !== +W) {
            var V = Q.keys(X);
            W = V.length
        }
        M(X, function (aa, Y, Z) {
            Y = V ? V[--W] : --W;
            if (!S) {
                R = X[Y];
                S = true
            } else {
                R = U.call(T, R, X[Y], Y, Z)
            }
        });
        if (!S) {
            throw new TypeError(h)
        }
        return R
    };
    Q.find = Q.detect = function (U, T, S) {
        var R;
        E(U, function (X, V, W) {
            if (T.call(S, X, V, W)) {
                R = X;
                return true
            }
        });
        return R
    };
    Q.filter = Q.select = function (U, T, S) {
        var R = [];
        if (U == null) {
            return R
        }
        if (c && U.filter === c) {
            return U.filter(T, S)
        }
        M(U, function (X, V, W) {
            if (T.call(S, X, V, W)) {
                R.push(X)
            }
        });
        return R
    };
    Q.reject = function (T, S, R) {
        return Q.filter(T, function (W, U, V) {
            return !S.call(R, W, U, V)
        }, R)
    };
    Q.every = Q.all = function (U, T, S) {
        T || (T = Q.identity);
        var R = true;
        if (U == null) {
            return R
        }
        if (F && U.every === F) {
            return U.every(T, S)
        }
        M(U, function (X, V, W) {
            if (!(R = R && T.call(S, X, V, W))) {
                return H
            }
        });
        return !!R
    };
    var E = Q.some = Q.any = function (U, T, S) {
        T || (T = Q.identity);
        var R = false;
        if (U == null) {
            return R
        }
        if (t && U.some === t) {
            return U.some(T, S)
        }
        M(U, function (X, V, W) {
            if (R || (R = T.call(S, X, V, W))) {
                return H
            }
        });
        return !!R
    };
    Q.contains = Q.include = function (S, R) {
        if (S == null) {
            return false
        }
        if (q && S.indexOf === q) {
            return S.indexOf(R) != -1
        }
        return E(S, function (T) {
            return T === R
        })
    };
    Q.invoke = function (T, U) {
        var R = s.call(arguments, 2);
        var S = Q.isFunction(U);
        return Q.map(T, function (V) {
            return (S ? U : V[U]).apply(V, R)
        })
    };
    Q.pluck = function (S, R) {
        return Q.map(S, function (T) {
            return T[R]
        })
    };
    Q.where = function (S, R, T) {
        if (Q.isEmpty(R)) {
            return T ? void 0 : []
        }
        return Q[T ? "find" : "filter"](S, function (V) {
            for (var U in R) {
                if (R[U] !== V[U]) {
                    return false
                }
            }
            return true
        })
    };
    Q.findWhere = function (S, R) {
        return Q.where(S, R, true)
    };
    Q.max = function (U, T, S) {
        if (!T && Q.isArray(U) && U[0] === +U[0] && U.length < 65535) {
            return Math.max.apply(Math, U)
        }
        if (!T && Q.isEmpty(U)) {
            return -Infinity
        }
        var R = {
            computed: -Infinity,
            value: -Infinity
        };
        M(U, function (Y, V, X) {
            var W = T ? T.call(S, Y, V, X) : Y;
            W > R.computed && (R = {
                value: Y,
                computed: W
            })
        });
        return R.value
    };
    Q.min = function (U, T, S) {
        if (!T && Q.isArray(U) && U[0] === +U[0] && U.length < 65535) {
            return Math.min.apply(Math, U)
        }
        if (!T && Q.isEmpty(U)) {
            return Infinity
        }
        var R = {
            computed: Infinity,
            value: Infinity
        };
        M(U, function (Y, V, X) {
            var W = T ? T.call(S, Y, V, X) : Y;
            W < R.computed && (R = {
                value: Y,
                computed: W
            })
        });
        return R.value
    };
    Q.shuffle = function (U) {
        var T;
        var S = 0;
        var R = [];
        M(U, function (V) {
            T = Q.random(S++);
            R[S - 1] = R[T];
            R[T] = V
        });
        return R
    };
    var b = function (R) {
        return Q.isFunction(R) ? R : function (S) {
            return S[R]
        }
    };
    Q.sortBy = function (U, T, R) {
        var S = b(T);
        return Q.pluck(Q.map(U, function (X, V, W) {
            return {
                value: X,
                index: V,
                criteria: S.call(R, X, V, W)
            }
        }).sort(function (Y, X) {
            var W = Y.criteria;
            var V = X.criteria;
            if (W !== V) {
                if (W > V || W === void 0) {
                    return 1
                }
                if (W < V || V === void 0) {
                    return -1
                }
            }
            return Y.index < X.index ? -1 : 1
        }), "value")
    };
    var x = function (W, V, S, U) {
        var R = {};
        var T = b(V == null ? Q.identity : V);
        M(W, function (Z, X) {
            var Y = T.call(S, Z, X, W);
            U(R, Y, Z)
        });
        return R
    };
    Q.groupBy = function (T, S, R) {
        return x(T, S, R, function (U, V, W) {
            (Q.has(U, V) ? U[V] : (U[V] = [])).push(W)
        })
    };
    Q.countBy = function (T, S, R) {
        return x(T, S, R, function (U, V) {
            if (!Q.has(U, V)) {
                U[V] = 0
            }
            U[V]++
        })
    };
    Q.sortedIndex = function (Y, X, U, T) {
        U = U == null ? Q.identity : b(U);
        var W = U.call(T, X);
        var R = 0,
            V = Y.length;
        while (R < V) {
            var S = (R + V) >>> 1;
            U.call(T, Y[S]) < W ? R = S + 1 : V = S
        }
        return R
    };
    Q.toArray = function (R) {
        if (!R) {
            return []
        }
        if (Q.isArray(R)) {
            return s.call(R)
        }
        if (R.length === +R.length) {
            return Q.map(R, Q.identity)
        }
        return Q.values(R)
    };
    Q.size = function (R) {
        if (R == null) {
            return 0
        }
        return (R.length === +R.length) ? R.length : Q.keys(R).length
    };
    Q.first = Q.head = Q.take = function (T, S, R) {
        if (T == null) {
            return void 0
        }
        return (S != null) && !R ? s.call(T, 0, S) : T[0]
    };
    Q.initial = function (T, S, R) {
        return s.call(T, 0, T.length - ((S == null) || R ? 1 : S))
    };
    Q.last = function (T, S, R) {
        if (T == null) {
            return void 0
        }
        if ((S != null) && !R) {
            return s.call(T, Math.max(T.length - S, 0))
        } else {
            return T[T.length - 1]
        }
    };
    Q.rest = Q.tail = Q.drop = function (T, S, R) {
        return s.call(T, (S == null) || R ? 1 : S)
    };
    Q.compact = function (R) {
        return Q.filter(R, Q.identity)
    };
    var B = function (S, T, R) {
        if (T && Q.every(S, Q.isArray)) {
            return C.apply(R, S)
        }
        M(S, function (U) {
            if (Q.isArray(U) || Q.isArguments(U)) {
                T ? L.apply(R, U) : B(U, T, R)
            } else {
                R.push(U)
            }
        });
        return R
    };
    Q.flatten = function (S, R) {
        return B(S, R, [])
    };
    Q.without = function (R) {
        return Q.difference(R, s.call(arguments, 1))
    };
    Q.uniq = Q.unique = function (X, W, V, U) {
        if (Q.isFunction(W)) {
            U = V;
            V = W;
            W = false
        }
        var S = V ? Q.map(X, V, U) : X;
        var T = [];
        var R = [];
        M(S, function (Z, Y) {
            if (W ? (!Y || R[R.length - 1] !== Z) : !Q.contains(R, Z)) {
                R.push(Z);
                T.push(X[Y])
            }
        });
        return T
    };
    Q.union = function () {
        return Q.uniq(Q.flatten(arguments, true))
    };
    Q.intersection = function (S) {
        var R = s.call(arguments, 1);
        return Q.filter(Q.uniq(S), function (T) {
            return Q.every(R, function (U) {
                return Q.indexOf(U, T) >= 0
            })
        })
    };
    Q.difference = function (S) {
        var R = C.apply(G, s.call(arguments, 1));
        return Q.filter(S, function (T) {
            return !Q.contains(R, T)
        })
    };
    Q.zip = function () {
        var T = Q.max(Q.pluck(arguments, "length").concat(0));
        var S = new Array(T);
        for (var R = 0; R < T; R++) {
            S[R] = Q.pluck(arguments, "" + R)
        }
        return S
    };
    Q.object = function (V, T) {
        if (V == null) {
            return {}
        }
        var R = {};
        for (var U = 0, S = V.length; U < S; U++) {
            if (T) {
                R[V[U]] = T[U]
            } else {
                R[V[U][0]] = V[U][1]
            }
        }
        return R
    };
    Q.indexOf = function (V, T, U) {
        if (V == null) {
            return -1
        }
        var S = 0,
            R = V.length;
        if (U) {
            if (typeof U == "number") {
                S = (U < 0 ? Math.max(0, R + U) : U)
            } else {
                S = Q.sortedIndex(V, T);
                return V[S] === T ? S : -1
            }
        }
        if (q && V.indexOf === q) {
            return V.indexOf(T, U)
        }
        for (; S < R; S++) {
            if (V[S] === T) {
                return S
            }
        }
        return -1
    };
    Q.lastIndexOf = function (V, T, U) {
        if (V == null) {
            return -1
        }
        var R = U != null;
        if (n && V.lastIndexOf === n) {
            return R ? V.lastIndexOf(T, U) : V.lastIndexOf(T)
        }
        var S = (R ? U : V.length);
        while (S--) {
            if (V[S] === T) {
                return S
            }
        }
        return -1
    };
    Q.range = function (W, U, V) {
        if (arguments.length <= 1) {
            U = W || 0;
            W = 0
        }
        V = arguments[2] || 1;
        var S = Math.max(Math.ceil((U - W) / V), 0);
        var R = 0;
        var T = new Array(S);
        while (R < S) {
            T[R++] = W;
            W += V
        }
        return T
    };
    var K = function () {};
    Q.bind = function (U, S) {
        var R, T;
        if (J && U.bind === J) {
            return J.apply(U, s.call(arguments, 1))
        }
        if (!Q.isFunction(U)) {
            throw new TypeError
        }
        R = s.call(arguments, 2);
        return T = function () {
            if (!(this instanceof T)) {
                return U.apply(S, R.concat(s.call(arguments)))
            }
            K.prototype = U.prototype;
            var W = new K;
            K.prototype = null;
            var V = U.apply(W, R.concat(s.call(arguments)));
            if (Object(V) === V) {
                return V
            }
            return W
        }
    };
    Q.partial = function (S) {
        var R = s.call(arguments, 1);
        return function () {
            return S.apply(this, R.concat(s.call(arguments)))
        }
    };
    Q.bindAll = function (S) {
        var R = s.call(arguments, 1);
        if (R.length === 0) {
            throw new Error("bindAll must be passed function names")
        }
        M(R, function (T) {
            S[T] = Q.bind(S[T], S)
        });
        return S
    };
    Q.memoize = function (T, S) {
        var R = {};
        S || (S = Q.identity);
        return function () {
            var U = S.apply(this, arguments);
            return Q.has(R, U) ? R[U] : (R[U] = T.apply(this, arguments))
        }
    };
    Q.delay = function (S, T) {
        var R = s.call(arguments, 2);
        return setTimeout(function () {
            return S.apply(null, R)
        }, T)
    };
    Q.defer = function (R) {
        return Q.delay.apply(Q, [R, 1].concat(s.call(arguments, 1)))
    };
    Q.throttle = function (S, U, Y) {
        var R, W, Z;
        var X = null;
        var V = 0;
        Y || (Y = {});
        var T = function () {
            V = Y.leading === false ? 0 : new Date;
            X = null;
            Z = S.apply(R, W)
        };
        return function () {
            var aa = new Date;
            if (!V && Y.leading === false) {
                V = aa
            }
            var ab = U - (aa - V);
            R = this;
            W = arguments;
            if (ab <= 0) {
                clearTimeout(X);
                X = null;
                V = aa;
                Z = S.apply(R, W)
            } else {
                if (!X && Y.trailing !== false) {
                    X = setTimeout(T, ab)
                }
            }
            return Z
        }
    };
    Q.debounce = function (T, V, S) {
        var R;
        var U = null;
        return function () {
            var Z = this,
                Y = arguments;
            var X = function () {
                U = null;
                if (!S) {
                    R = T.apply(Z, Y)
                }
            };
            var W = S && !U;
            clearTimeout(U);
            U = setTimeout(X, V);
            if (W) {
                R = T.apply(Z, Y)
            }
            return R
        }
    };
    Q.once = function (T) {
        var R = false,
            S;
        return function () {
            if (R) {
                return S
            }
            R = true;
            S = T.apply(this, arguments);
            T = null;
            return S
        }
    };
    Q.wrap = function (R, S) {
        return function () {
            var T = [R];
            L.apply(T, arguments);
            return S.apply(this, T)
        }
    };
    Q.compose = function () {
        var R = arguments;
        return function () {
            var S = arguments;
            for (var T = R.length - 1; T >= 0; T--) {
                S = [R[T].apply(this, S)]
            }
            return S[0]
        }
    };
    Q.after = function (S, R) {
        return function () {
            if (--S < 1) {
                return R.apply(this, arguments)
            }
        }
    };
    Q.keys = f || function (T) {
        if (T !== Object(T)) {
            throw new TypeError("Invalid object")
        }
        var S = [];
        for (var R in T) {
            if (Q.has(T, R)) {
                S.push(R)
            }
        }
        return S
    };
    Q.values = function (T) {
        var R = [];
        for (var S in T) {
            if (Q.has(T, S)) {
                R.push(T[S])
            }
        }
        return R
    };
    Q.pairs = function (T) {
        var S = [];
        for (var R in T) {
            if (Q.has(T, R)) {
                S.push([R, T[R]])
            }
        }
        return S
    };
    Q.invert = function (T) {
        var R = {};
        for (var S in T) {
            if (Q.has(T, S)) {
                R[T[S]] = S
            }
        }
        return R
    };
    Q.functions = Q.methods = function (T) {
        var S = [];
        for (var R in T) {
            if (Q.isFunction(T[R])) {
                S.push(R)
            }
        }
        return S.sort()
    };
    Q.extend = function (R) {
        M(s.call(arguments, 1), function (S) {
            if (S) {
                for (var T in S) {
                    R[T] = S[T]
                }
            }
        });
        return R
    };
    Q.pick = function (S) {
        var T = {};
        var R = C.apply(G, s.call(arguments, 1));
        M(R, function (U) {
            if (U in S) {
                T[U] = S[U]
            }
        });
        return T
    };
    Q.omit = function (T) {
        var U = {};
        var S = C.apply(G, s.call(arguments, 1));
        for (var R in T) {
            if (!Q.contains(S, R)) {
                U[R] = T[R]
            }
        }
        return U
    };
    Q.defaults = function (R) {
        M(s.call(arguments, 1), function (S) {
            if (S) {
                for (var T in S) {
                    if (R[T] === void 0) {
                        R[T] = S[T]
                    }
                }
            }
        });
        return R
    };
    Q.clone = function (R) {
        if (!Q.isObject(R)) {
            return R
        }
        return Q.isArray(R) ? R.slice() : Q.extend({}, R)
    };
    Q.tap = function (S, R) {
        R(S);
        return S
    };
    var N = function (Y, X, S, T) {
        if (Y === X) {
            return Y !== 0 || 1 / Y == 1 / X
        }
        if (Y == null || X == null) {
            return Y === X
        }
        if (Y instanceof Q) {
            Y = Y._wrapped
        }
        if (X instanceof Q) {
            X = X._wrapped
        }
        var V = e.call(Y);
        if (V != e.call(X)) {
            return false
        }
        switch (V) {
        case "[object String]":
            return Y == String(X);
        case "[object Number]":
            return Y != +Y ? X != +X : (Y == 0 ? 1 / Y == 1 / X : Y == +X);
        case "[object Date]":
        case "[object Boolean]":
            return +Y == +X;
        case "[object RegExp]":
            return Y.source == X.source && Y.global == X.global && Y.multiline == X.multiline && Y.ignoreCase == X.ignoreCase
        }
        if (typeof Y != "object" || typeof X != "object") {
            return false
        }
        var R = S.length;
        while (R--) {
            if (S[R] == Y) {
                return T[R] == X
            }
        }
        var W = Y.constructor,
            U = X.constructor;
        if (W !== U && !(Q.isFunction(W) && (W instanceof W) && Q.isFunction(U) && (U instanceof U))) {
            return false
        }
        S.push(Y);
        T.push(X);
        var ab = 0,
            aa = true;
        if (V == "[object Array]") {
            ab = Y.length;
            aa = ab == X.length;
            if (aa) {
                while (ab--) {
                    if (!(aa = N(Y[ab], X[ab], S, T))) {
                        break
                    }
                }
            }
        } else {
            for (var Z in Y) {
                if (Q.has(Y, Z)) {
                    ab++;
                    if (!(aa = Q.has(X, Z) && N(Y[Z], X[Z], S, T))) {
                        break
                    }
                }
            }
            if (aa) {
                for (Z in X) {
                    if (Q.has(X, Z) && !(ab--)) {
                        break
                    }
                }
                aa = !ab
            }
        }
        S.pop();
        T.pop();
        return aa
    };
    Q.isEqual = function (S, R) {
        return N(S, R, [], [])
    };
    Q.isEmpty = function (S) {
        if (S == null) {
            return true
        }
        if (Q.isArray(S) || Q.isString(S)) {
            return S.length === 0
        }
        for (var R in S) {
            if (Q.has(S, R)) {
                return false
            }
        }
        return true
    };
    Q.isElement = function (R) {
        return !!(R && R.nodeType === 1)
    };
    Q.isArray = y || function (R) {
        return e.call(R) == "[object Array]"
    };
    Q.isObject = function (R) {
        return R === Object(R)
    };
    M(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function (R) {
        Q["is" + R] = function (S) {
            return e.call(S) == "[object " + R + "]"
        }
    });
    if (!Q.isArguments(arguments)) {
        Q.isArguments = function (R) {
            return !!(R && Q.has(R, "callee"))
        }
    }
    if (typeof (/./) !== "function") {
        Q.isFunction = function (R) {
            return typeof R === "function"
        }
    }
    Q.isFinite = function (R) {
        return isFinite(R) && !isNaN(parseFloat(R))
    };
    Q.isNaN = function (R) {
        return Q.isNumber(R) && R != +R
    };
    Q.isBoolean = function (R) {
        return R === true || R === false || e.call(R) == "[object Boolean]"
    };
    Q.isNull = function (R) {
        return R === null
    };
    Q.isUndefined = function (R) {
        return R === void 0
    };
    Q.has = function (S, R) {
        return l.call(S, R)
    };
    Q.noConflict = function () {
        A._ = m;
        return this
    };
    Q.identity = function (R) {
        return R
    };
    Q.times = function (V, U, T) {
        var R = Array(Math.max(0, V));
        for (var S = 0; S < V; S++) {
            R[S] = U.call(T, S)
        }
        return R
    };
    Q.random = function (S, R) {
        if (R == null) {
            R = S;
            S = 0
        }
        return S + Math.floor(Math.random() * (R - S + 1))
    };
    var o = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "/": "&#x2F;"
        }
    };
    o.unescape = Q.invert(o.escape);
    var O = {
        escape: new RegExp("[" + Q.keys(o.escape).join("") + "]", "g"),
        unescape: new RegExp("(" + Q.keys(o.unescape).join("|") + ")", "g")
    };
    Q.each(["escape", "unescape"], function (R) {
        Q[R] = function (S) {
            if (S == null) {
                return ""
            }
            return ("" + S).replace(O[R], function (T) {
                return o[R][T]
            })
        }
    });
    Q.result = function (R, T) {
        if (R == null) {
            return void 0
        }
        var S = R[T];
        return Q.isFunction(S) ? S.call(R) : S
    };
    Q.mixin = function (R) {
        M(Q.functions(R), function (S) {
            var T = Q[S] = R[S];
            Q.prototype[S] = function () {
                var U = [this._wrapped];
                L.apply(U, arguments);
                return w.call(this, T.apply(Q, U))
            }
        })
    };
    var D = 0;
    Q.uniqueId = function (R) {
        var S = ++D + "";
        return R ? R + S : S
    };
    Q.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var z = /(.)^/;
    var j = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\t": "t",
        "\u2028": "u2028",
        "\u2029": "u2029"
    };
    var k = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    Q.template = function (Z, U, T) {
        var S;
        T = Q.defaults({}, T, Q.templateSettings);
        var V = new RegExp([(T.escape || z).source, (T.interpolate || z).source, (T.evaluate || z).source].join("|") + "|$", "g");
        var W = 0;
        var R = "__p+='";
        Z.replace(V, function (ab, ac, aa, ae, ad) {
            R += Z.slice(W, ad).replace(k, function (af) {
                return "\\" + j[af]
            });
            if (ac) {
                R += "'+\n((__t=(" + ac + "))==null?'':_.escape(__t))+\n'"
            }
            if (aa) {
                R += "'+\n((__t=(" + aa + "))==null?'':__t)+\n'"
            }
            if (ae) {
                R += "';\n" + ae + "\n__p+='"
            }
            W = ad + ab.length;
            return ab
        });
        R += "';\n";
        if (!T.variable) {
            R = "with(obj||{}){\n" + R + "}\n"
        }
        R = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + R + "return __p;\n";
        try {
            S = new Function(T.variable || "obj", "_", R)
        } catch (X) {
            X.source = R;
            throw X
        }
        if (U) {
            return S(U, Q)
        }
        var Y = function (aa) {
            return S.call(this, aa, Q)
        };
        Y.source = "function(" + (T.variable || "obj") + "){\n" + R + "}";
        return Y
    };
    Q.chain = function (R) {
        return Q(R).chain()
    };
    var w = function (R) {
        return this._chain ? Q(R).chain() : R
    };
    Q.mixin(Q);
    M(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (R) {
        var S = G[R];
        Q.prototype[R] = function () {
            var T = this._wrapped;
            S.apply(T, arguments);
            if ((R == "shift" || R == "splice") && T.length === 0) {
                delete T[0]
            }
            return w.call(this, T)
        }
    });
    M(["concat", "join", "slice"], function (R) {
        var S = G[R];
        Q.prototype[R] = function () {
            return w.call(this, S.apply(this._wrapped, arguments))
        }
    });
    Q.extend(Q.prototype, {
        chain: function () {
            this._chain = true;
            return this
        },
        value: function () {
            return this._wrapped
        }
    })
}).call(this);
define("underscore", (function (b) {
    return function () {
        var c, d;
        return c || b._
    }
}(this)));
(function () {
    var y = this;
    var F = y.Backbone;
    var h = [];
    var H = h.push;
    var q = h.slice;
    var x = h.splice;
    var D;
    if (typeof exports !== "undefined") {
        D = exports
    } else {
        D = y.Backbone = {}
    }
    D.VERSION = "1.0.0";
    var P = y._;
    if (!P && (typeof require !== "undefined")) {
        P = require("underscore")
    }
    D.$ = y.jQuery || y.Zepto || y.ender || y.$;
    D.noConflict = function () {
        y.Backbone = F;
        return this
    };
    D.emulateHTTP = false;
    D.emulateJSON = false;
    var N = D.Events = {
        on: function (Q, T, S) {
            if (!B(this, "on", Q, [T, S]) || !T) {
                return this
            }
            this._events || (this._events = {});
            var R = this._events[Q] || (this._events[Q] = []);
            R.push({
                callback: T,
                context: S,
                ctx: S || this
            });
            return this
        },
        once: function (R, U, S) {
            if (!B(this, "once", R, [U, S]) || !U) {
                return this
            }
            var Q = this;
            var T = P.once(function () {
                Q.off(R, T);
                U.apply(this, arguments)
            });
            T._callback = U;
            return this.on(R, T, S)
        },
        off: function (Q, Z, R) {
            var X, Y, aa, W, V, S, U, T;
            if (!this._events || !B(this, "off", Q, [Z, R])) {
                return this
            }
            if (!Q && !Z && !R) {
                this._events = {};
                return this
            }
            W = Q ? [Q] : P.keys(this._events);
            for (V = 0, S = W.length; V < S; V++) {
                Q = W[V];
                if (aa = this._events[Q]) {
                    this._events[Q] = X = [];
                    if (Z || R) {
                        for (U = 0, T = aa.length; U < T; U++) {
                            Y = aa[U];
                            if ((Z && Z !== Y.callback && Z !== Y.callback._callback) || (R && R !== Y.context)) {
                                X.push(Y)
                            }
                        }
                    }
                    if (!X.length) {
                        delete this._events[Q]
                    }
                }
            }
            return this
        },
        trigger: function (S) {
            if (!this._events) {
                return this
            }
            var R = q.call(arguments, 1);
            if (!B(this, "trigger", S, R)) {
                return this
            }
            var T = this._events[S];
            var Q = this._events.all;
            if (T) {
                c(T, R)
            }
            if (Q) {
                c(Q, arguments)
            }
            return this
        },
        stopListening: function (T, Q, V) {
            var R = this._listeners;
            if (!R) {
                return this
            }
            var S = !Q && !V;
            if (typeof Q === "object") {
                V = this
            }
            if (T) {
                (R = {})[T._listenerId] = T
            }
            for (var U in R) {
                R[U].off(Q, V, this);
                if (S) {
                    delete this._listeners[U]
                }
            }
            return this
        }
    };
    var A = /\s+/;
    var B = function (X, V, R, U) {
        if (!R) {
            return true
        }
        if (typeof R === "object") {
            for (var T in R) {
                X[V].apply(X, [T, R[T]].concat(U))
            }
            return false
        }
        if (A.test(R)) {
            var W = R.split(A);
            for (var S = 0, Q = W.length; S < Q; S++) {
                X[V].apply(X, [W[S]].concat(U))
            }
            return false
        }
        return true
    };
    var c = function (V, T) {
        var W, U = -1,
            S = V.length,
            R = T[0],
            Q = T[1],
            X = T[2];
        switch (T.length) {
        case 0:
            while (++U < S) {
                (W = V[U]).callback.call(W.ctx)
            }
            return;
        case 1:
            while (++U < S) {
                (W = V[U]).callback.call(W.ctx, R)
            }
            return;
        case 2:
            while (++U < S) {
                (W = V[U]).callback.call(W.ctx, R, Q)
            }
            return;
        case 3:
            while (++U < S) {
                (W = V[U]).callback.call(W.ctx, R, Q, X)
            }
            return;
        default:
            while (++U < S) {
                (W = V[U]).callback.apply(W.ctx, T)
            }
        }
    };
    var G = {
        listenTo: "on",
        listenToOnce: "once"
    };
    P.each(G, function (Q, R) {
        N[R] = function (U, S, W) {
            var T = this._listeners || (this._listeners = {});
            var V = U._listenerId || (U._listenerId = P.uniqueId("l"));
            T[V] = U;
            if (typeof S === "object") {
                W = this
            }
            U[Q](S, W, this);
            return this
        }
    });
    N.bind = N.on;
    N.unbind = N.off;
    P.extend(D, N);
    var I = D.Model = function (Q, S) {
        var T;
        var R = Q || {};
        S || (S = {});
        this.cid = P.uniqueId("c");
        this.attributes = {};
        P.extend(this, P.pick(S, J));
        if (S.parse) {
            R = this.parse(R, S) || {}
        }
        if (T = P.result(this, "defaults")) {
            R = P.defaults({}, R, T)
        }
        this.set(R, S);
        this.changed = {};
        this.initialize.apply(this, arguments)
    };
    var J = ["url", "urlRoot", "collection"];
    P.extend(I.prototype, N, {
        changed: null,
        validationError: null,
        idAttribute: "id",
        initialize: function () {},
        toJSON: function (Q) {
            return P.clone(this.attributes)
        },
        sync: function () {
            return D.sync.apply(this, arguments)
        },
        get: function (Q) {
            return this.attributes[Q]
        },
        escape: function (Q) {
            return P.escape(this.get(Q))
        },
        has: function (Q) {
            return this.get(Q) != null
        },
        set: function (Y, Q, ac) {
            var W, Z, aa, X, V, ab, S, U;
            if (Y == null) {
                return this
            }
            if (typeof Y === "object") {
                Z = Y;
                ac = Q
            } else {
                (Z = {})[Y] = Q
            }
            ac || (ac = {});
            if (!this._validate(Z, ac)) {
                return false
            }
            aa = ac.unset;
            V = ac.silent;
            X = [];
            ab = this._changing;
            this._changing = true;
            if (!ab) {
                this._previousAttributes = P.clone(this.attributes);
                this.changed = {}
            }
            U = this.attributes, S = this._previousAttributes;
            if (this.idAttribute in Z) {
                this.id = Z[this.idAttribute]
            }
            for (W in Z) {
                Q = Z[W];
                if (!P.isEqual(U[W], Q)) {
                    X.push(W)
                }
                if (!P.isEqual(S[W], Q)) {
                    this.changed[W] = Q
                } else {
                    delete this.changed[W]
                }
                aa ? delete U[W] : U[W] = Q
            }
            if (!V) {
                if (X.length) {
                    this._pending = true
                }
                for (var T = 0, R = X.length; T < R; T++) {
                    this.trigger("change:" + X[T], this, U[X[T]], ac)
                }
            }
            if (ab) {
                return this
            }
            if (!V) {
                while (this._pending) {
                    this._pending = false;
                    this.trigger("change", this, ac)
                }
            }
            this._pending = false;
            this._changing = false;
            return this
        },
        unset: function (Q, R) {
            return this.set(Q, void 0, P.extend({}, R, {
                unset: true
            }))
        },
        clear: function (R) {
            var Q = {};
            for (var S in this.attributes) {
                Q[S] = void 0
            }
            return this.set(Q, P.extend({}, R, {
                unset: true
            }))
        },
        hasChanged: function (Q) {
            if (Q == null) {
                return !P.isEmpty(this.changed)
            }
            return P.has(this.changed, Q)
        },
        changedAttributes: function (S) {
            if (!S) {
                return this.hasChanged() ? P.clone(this.changed) : false
            }
            var U, T = false;
            var R = this._changing ? this._previousAttributes : this.attributes;
            for (var Q in S) {
                if (P.isEqual(R[Q], (U = S[Q]))) {
                    continue
                }(T || (T = {}))[Q] = U
            }
            return T
        },
        previous: function (Q) {
            if (Q == null || !this._previousAttributes) {
                return null
            }
            return this._previousAttributes[Q]
        },
        previousAttributes: function () {
            return P.clone(this._previousAttributes)
        },
        fetch: function (R) {
            R = R ? P.clone(R) : {};
            if (R.parse === void 0) {
                R.parse = true
            }
            var Q = this;
            var S = R.success;
            R.success = function (T) {
                if (!Q.set(Q.parse(T, R), R)) {
                    return false
                }
                if (S) {
                    S(Q, T, R)
                }
                Q.trigger("sync", Q, T, R)
            };
            L(this, R);
            return this.sync("read", this, R)
        },
        save: function (U, R, Y) {
            var V, Q, X, S = this.attributes;
            if (U == null || typeof U === "object") {
                V = U;
                Y = R
            } else {
                (V = {})[U] = R
            } if (V && (!Y || !Y.wait) && !this.set(V, Y)) {
                return false
            }
            Y = P.extend({
                validate: true
            }, Y);
            if (!this._validate(V, Y)) {
                return false
            }
            if (V && Y.wait) {
                this.attributes = P.extend({}, S, V)
            }
            if (Y.parse === void 0) {
                Y.parse = true
            }
            var T = this;
            var W = Y.success;
            Y.success = function (aa) {
                T.attributes = S;
                var Z = T.parse(aa, Y);
                if (Y.wait) {
                    Z = P.extend(V || {}, Z)
                }
                if (P.isObject(Z) && !T.set(Z, Y)) {
                    return false
                }
                if (W) {
                    W(T, aa, Y)
                }
                T.trigger("sync", T, aa, Y)
            };
            L(this, Y);
            Q = this.isNew() ? "create" : (Y.patch ? "patch" : "update");
            if (Q === "patch") {
                Y.attrs = V
            }
            X = this.sync(Q, this, Y);
            if (V && Y.wait) {
                this.attributes = S
            }
            return X
        },
        destroy: function (R) {
            R = R ? P.clone(R) : {};
            var Q = this;
            var U = R.success;
            var S = function () {
                Q.trigger("destroy", Q, Q.collection, R)
            };
            R.success = function (V) {
                if (R.wait || Q.isNew()) {
                    S()
                }
                if (U) {
                    U(Q, V, R)
                }
                if (!Q.isNew()) {
                    Q.trigger("sync", Q, V, R)
                }
            };
            if (this.isNew()) {
                R.success();
                return false
            }
            L(this, R);
            var T = this.sync("delete", this, R);
            if (!R.wait) {
                S()
            }
            return T
        },
        url: function () {
            var Q = P.result(this, "urlRoot") || P.result(this.collection, "url") || v();
            if (this.isNew()) {
                return Q
            }
            return Q + (Q.charAt(Q.length - 1) === "/" ? "" : "/") + encodeURIComponent(this.id)
        },
        parse: function (R, Q) {
            return R
        },
        clone: function () {
            return new this.constructor(this.attributes)
        },
        isNew: function () {
            return this.id == null
        },
        isValid: function (Q) {
            return this._validate({}, P.extend(Q || {}, {
                validate: true
            }))
        },
        _validate: function (S, R) {
            if (!R.validate || !this.validate) {
                return true
            }
            S = P.extend({}, this.attributes, S);
            var Q = this.validationError = this.validate(S, R) || null;
            if (!Q) {
                return true
            }
            this.trigger("invalid", this, Q, P.extend(R || {}, {
                validationError: Q
            }));
            return false
        }
    });
    var b = ["keys", "values", "pairs", "invert", "pick", "omit"];
    P.each(b, function (Q) {
        I.prototype[Q] = function () {
            var R = q.call(arguments);
            R.unshift(this.attributes);
            return P[Q].apply(P, R)
        }
    });
    var d = D.Collection = function (R, Q) {
        Q || (Q = {});
        if (Q.url) {
            this.url = Q.url
        }
        if (Q.model) {
            this.model = Q.model
        }
        if (Q.comparator !== void 0) {
            this.comparator = Q.comparator
        }
        this._reset();
        this.initialize.apply(this, arguments);
        if (R) {
            this.reset(R, P.extend({
                silent: true
            }, Q))
        }
    };
    var s = {
        add: true,
        remove: true,
        merge: true
    };
    var O = {
        add: true,
        merge: false,
        remove: false
    };
    P.extend(d.prototype, N, {
        model: I,
        initialize: function () {},
        toJSON: function (Q) {
            return this.map(function (R) {
                return R.toJSON(Q)
            })
        },
        sync: function () {
            return D.sync.apply(this, arguments)
        },
        add: function (R, Q) {
            return this.set(R, P.defaults(Q || {}, O))
        },
        remove: function (V, T) {
            V = P.isArray(V) ? V.slice() : [V];
            T || (T = {});
            var U, Q, S, R;
            for (U = 0, Q = V.length; U < Q; U++) {
                R = this.get(V[U]);
                if (!R) {
                    continue
                }
                delete this._byId[R.id];
                delete this._byId[R.cid];
                S = this.indexOf(R);
                this.models.splice(S, 1);
                this.length--;
                if (!T.silent) {
                    T.index = S;
                    R.trigger("remove", R, this, T)
                }
                this._removeReference(R)
            }
            return this
        },
        set: function (R, ad) {
            ad = P.defaults(ad || {}, s);
            if (ad.parse) {
                R = this.parse(R, ad)
            }
            if (!P.isArray(R)) {
                R = R ? [R] : []
            }
            var Y, U, aa, ab, S, Z;
            var T = ad.at;
            var X = this.comparator && (T == null) && ad.sort !== false;
            var V = P.isString(this.comparator) ? this.comparator : null;
            var ac = [],
                Q = [],
                W = {};
            for (Y = 0, U = R.length; Y < U; Y++) {
                if (!(aa = this._prepareModel(R[Y], ad))) {
                    continue
                }
                if (S = this.get(aa)) {
                    if (ad.remove) {
                        W[S.cid] = true
                    }
                    if (ad.merge) {
                        S.set(aa.attributes, ad);
                        if (X && !Z && S.hasChanged(V)) {
                            Z = true
                        }
                    }
                } else {
                    if (ad.add) {
                        ac.push(aa);
                        aa.on("all", this._onModelEvent, this);
                        this._byId[aa.cid] = aa;
                        if (aa.id != null) {
                            this._byId[aa.id] = aa
                        }
                    }
                }
            }
            if (ad.remove) {
                for (Y = 0, U = this.length; Y < U; ++Y) {
                    if (!W[(aa = this.models[Y]).cid]) {
                        Q.push(aa)
                    }
                }
                if (Q.length) {
                    this.remove(Q, ad)
                }
            }
            if (ac.length) {
                if (X) {
                    Z = true
                }
                this.length += ac.length;
                if (T != null) {
                    x.apply(this.models, [T, 0].concat(ac))
                } else {
                    H.apply(this.models, ac)
                }
            }
            if (Z) {
                this.sort({
                    silent: true
                })
            }
            if (ad.silent) {
                return this
            }
            for (Y = 0, U = ac.length; Y < U; Y++) {
                (aa = ac[Y]).trigger("add", aa, this, ad)
            }
            if (Z) {
                this.trigger("sort", this, ad)
            }
            return this
        },
        reset: function (T, R) {
            R || (R = {});
            for (var S = 0, Q = this.models.length; S < Q; S++) {
                this._removeReference(this.models[S])
            }
            R.previousModels = this.models;
            this._reset();
            this.add(T, P.extend({
                silent: true
            }, R));
            if (!R.silent) {
                this.trigger("reset", this, R)
            }
            return this
        },
        push: function (R, Q) {
            R = this._prepareModel(R, Q);
            this.add(R, P.extend({
                at: this.length
            }, Q));
            return R
        },
        pop: function (R) {
            var Q = this.at(this.length - 1);
            this.remove(Q, R);
            return Q
        },
        unshift: function (R, Q) {
            R = this._prepareModel(R, Q);
            this.add(R, P.extend({
                at: 0
            }, Q));
            return R
        },
        shift: function (R) {
            var Q = this.at(0);
            this.remove(Q, R);
            return Q
        },
        slice: function (R, Q) {
            return this.models.slice(R, Q)
        },
        get: function (Q) {
            if (Q == null) {
                return void 0
            }
            return this._byId[Q.id != null ? Q.id : Q.cid || Q]
        },
        at: function (Q) {
            return this.models[Q]
        },
        where: function (Q, R) {
            if (P.isEmpty(Q)) {
                return R ? void 0 : []
            }
            return this[R ? "find" : "filter"](function (S) {
                for (var T in Q) {
                    if (Q[T] !== S.get(T)) {
                        return false
                    }
                }
                return true
            })
        },
        findWhere: function (Q) {
            return this.where(Q, true)
        },
        sort: function (Q) {
            if (!this.comparator) {
                throw new Error("Cannot sort a set without a comparator")
            }
            Q || (Q = {});
            if (P.isString(this.comparator) || this.comparator.length === 1) {
                this.models = this.sortBy(this.comparator, this)
            } else {
                this.models.sort(P.bind(this.comparator, this))
            } if (!Q.silent) {
                this.trigger("sort", this, Q)
            }
            return this
        },
        sortedIndex: function (Q, T, R) {
            T || (T = this.comparator);
            var S = P.isFunction(T) ? T : function (U) {
                return U.get(T)
            };
            return P.sortedIndex(this.models, Q, S, R)
        },
        pluck: function (Q) {
            return P.invoke(this.models, "get", Q)
        },
        fetch: function (Q) {
            Q = Q ? P.clone(Q) : {};
            if (Q.parse === void 0) {
                Q.parse = true
            }
            var S = Q.success;
            var R = this;
            Q.success = function (T) {
                var U = Q.reset ? "reset" : "set";
                R[U](T, Q);
                if (S) {
                    S(R, T, Q)
                }
                R.trigger("sync", R, T, Q)
            };
            L(this, Q);
            return this.sync("read", this, Q)
        },
        create: function (R, Q) {
            Q = Q ? P.clone(Q) : {};
            if (!(R = this._prepareModel(R, Q))) {
                return false
            }
            if (!Q.wait) {
                this.add(R, Q)
            }
            var T = this;
            var S = Q.success;
            Q.success = function (U) {
                if (Q.wait) {
                    T.add(R, Q)
                }
                if (S) {
                    S(R, U, Q)
                }
            };
            R.save(null, Q);
            return R
        },
        parse: function (R, Q) {
            return R
        },
        clone: function () {
            return new this.constructor(this.models)
        },
        _reset: function () {
            this.length = 0;
            this.models = [];
            this._byId = {}
        },
        _prepareModel: function (S, R) {
            if (S instanceof I) {
                if (!S.collection) {
                    S.collection = this
                }
                return S
            }
            R || (R = {});
            R.collection = this;
            var Q = new this.model(S, R);
            if (!Q._validate(S, R)) {
                this.trigger("invalid", this, S, R);
                return false
            }
            return Q
        },
        _removeReference: function (Q) {
            if (this === Q.collection) {
                delete Q.collection
            }
            Q.off("all", this._onModelEvent, this)
        },
        _onModelEvent: function (S, R, T, Q) {
            if ((S === "add" || S === "remove") && T !== this) {
                return
            }
            if (S === "destroy") {
                this.remove(R, Q)
            }
            if (R && S === "change:" + R.idAttribute) {
                delete this._byId[R.previous(R.idAttribute)];
                if (R.id != null) {
                    this._byId[R.id] = R
                }
            }
            this.trigger.apply(this, arguments)
        }
    });
    var C = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain"];
    P.each(C, function (Q) {
        d.prototype[Q] = function () {
            var R = q.call(arguments);
            R.unshift(this.models);
            return P[Q].apply(P, R)
        }
    });
    var m = ["groupBy", "countBy", "sortBy"];
    P.each(m, function (Q) {
        d.prototype[Q] = function (T, R) {
            var S = P.isFunction(T) ? T : function (U) {
                return U.get(T)
            };
            return P[Q](this.models, S, R)
        }
    });
    var K = D.View = function (Q) {
        this.cid = P.uniqueId("view");
        this._configure(Q || {});
        this._ensureElement();
        this.initialize.apply(this, arguments);
        this.delegateEvents()
    };
    var z = /^(\S+)\s*(.*)$/;
    var f = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
    P.extend(K.prototype, N, {
        tagName: "div",
        $: function (Q) {
            return this.$el.find(Q)
        },
        initialize: function () {},
        render: function () {
            return this
        },
        remove: function () {
            this.$el.remove();
            this.stopListening();
            return this
        },
        setElement: function (Q, R) {
            if (this.$el) {
                this.undelegateEvents()
            }
            this.$el = Q instanceof D.$ ? Q : D.$(Q);
            this.el = this.$el[0];
            if (R !== false) {
                this.delegateEvents()
            }
            return this
        },
        delegateEvents: function (U) {
            if (!(U || (U = P.result(this, "events")))) {
                return this
            }
            this.undelegateEvents();
            for (var T in U) {
                var V = U[T];
                if (!P.isFunction(V)) {
                    V = this[U[T]]
                }
                if (!V) {
                    continue
                }
                var S = T.match(z);
                var R = S[1],
                    Q = S[2];
                V = P.bind(V, this);
                R += ".delegateEvents" + this.cid;
                if (Q === "") {
                    this.$el.on(R, V)
                } else {
                    this.$el.on(R, Q, V)
                }
            }
            return this
        },
        undelegateEvents: function () {
            this.$el.off(".delegateEvents" + this.cid);
            return this
        },
        _configure: function (Q) {
            if (this.options) {
                Q = P.extend({}, P.result(this, "options"), Q)
            }
            P.extend(this, P.pick(Q, f));
            this.options = Q
        },
        _ensureElement: function () {
            if (!this.el) {
                var Q = P.extend({}, P.result(this, "attributes"));
                if (this.id) {
                    Q.id = P.result(this, "id")
                }
                if (this.className) {
                    Q["class"] = P.result(this, "className")
                }
                var R = D.$("<" + P.result(this, "tagName") + ">").attr(Q);
                this.setElement(R, false)
            } else {
                this.setElement(P.result(this, "el"), false)
            }
        }
    });
    D.sync = function (W, R, Q) {
        var T = l[W];
        P.defaults(Q || (Q = {}), {
            emulateHTTP: D.emulateHTTP,
            emulateJSON: D.emulateJSON
        });
        var V = {
            type: T,
            dataType: "json"
        };
        if (!Q.url) {
            V.url = P.result(R, "url") || v()
        }
        if (Q.data == null && R && (W === "create" || W === "update" || W === "patch")) {
            V.contentType = "application/json";
            V.data = JSON.stringify(Q.attrs || R.toJSON(Q))
        }
        if (Q.emulateJSON) {
            V.contentType = "application/x-www-form-urlencoded";
            V.data = V.data ? {
                model: V.data
            } : {}
        }
        if (Q.emulateHTTP && (T === "PUT" || T === "DELETE" || T === "PATCH")) {
            V.type = "POST";
            if (Q.emulateJSON) {
                V.data._method = T
            }
            var S = Q.beforeSend;
            Q.beforeSend = function (X) {
                X.setRequestHeader("X-HTTP-Method-Override", T);
                if (S) {
                    return S.apply(this, arguments)
                }
            }
        }
        if (V.type !== "GET" && !Q.emulateJSON) {
            V.processData = false
        }
        if (V.type === "PATCH" && window.ActiveXObject && !(window.external && window.external.msActiveXFilteringEnabled)) {
            V.xhr = function () {
                return new ActiveXObject("Microsoft.XMLHTTP")
            }
        }
        var U = Q.xhr = D.ajax(P.extend(V, Q));
        R.trigger("request", R, U, Q);
        return U
    };
    var l = {
        create: "POST",
        update: "PUT",
        patch: "PATCH",
        "delete": "DELETE",
        read: "GET"
    };
    D.ajax = function () {
        return D.$.ajax.apply(D.$, arguments)
    };
    var t = D.Router = function (Q) {
        Q || (Q = {});
        if (Q.routes) {
            this.routes = Q.routes
        }
        this._bindRoutes();
        this.initialize.apply(this, arguments)
    };
    var u = /\((.*?)\)/g;
    var w = /(\(\?)?:\w+/g;
    var e = /\*\w+/g;
    var j = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    P.extend(t.prototype, N, {
        initialize: function () {},
        route: function (R, S, T) {
            if (!P.isRegExp(R)) {
                R = this._routeToRegExp(R)
            }
            if (P.isFunction(S)) {
                T = S;
                S = ""
            }
            if (!T) {
                T = this[S]
            }
            var Q = this;
            D.history.route(R, function (V) {
                var U = Q._extractParameters(R, V);
                T && T.apply(Q, U);
                Q.trigger.apply(Q, ["route:" + S].concat(U));
                Q.trigger("route", S, U);
                D.history.trigger("route", Q, S, U)
            });
            return this
        },
        navigate: function (R, Q) {
            D.history.navigate(R, Q);
            return this
        },
        _bindRoutes: function () {
            if (!this.routes) {
                return
            }
            this.routes = P.result(this, "routes");
            var R, Q = P.keys(this.routes);
            while ((R = Q.pop()) != null) {
                this.route(R, this.routes[R])
            }
        },
        _routeToRegExp: function (Q) {
            Q = Q.replace(j, "\\$&").replace(u, "(?:$1)?").replace(w, function (S, R) {
                return R ? S : "([^/]+)"
            }).replace(e, "(.*?)");
            return new RegExp("^" + Q + "$")
        },
        _extractParameters: function (Q, R) {
            var S = Q.exec(R).slice(1);
            return P.map(S, function (T) {
                return T ? decodeURIComponent(T) : null
            })
        }
    });
    var k = D.History = function () {
        this.handlers = [];
        P.bindAll(this, "checkUrl");
        if (typeof window !== "undefined") {
            this.location = window.location;
            this.history = window.history
        }
    };
    var E = /^[#\/]|\s+$/g;
    var g = /^\/+|\/+$/g;
    var M = /msie [\w.]+/;
    var o = /\/$/;
    k.started = false;
    P.extend(k.prototype, N, {
        interval: 50,
        getHash: function (R) {
            var Q = (R || this).location.href.match(/#(.*)$/);
            return Q ? Q[1] : ""
        },
        getFragment: function (S, R) {
            if (S == null) {
                if (this._hasPushState || !this._wantsHashChange || R) {
                    S = this.location.pathname;
                    var Q = this.root.replace(o, "");
                    if (!S.indexOf(Q)) {
                        S = S.substr(Q.length)
                    }
                } else {
                    S = this.getHash()
                }
            }
            return S.replace(E, "")
        },
        start: function (S) {
            if (k.started) {
                throw new Error("Backbone.history has already been started")
            }
            k.started = true;
            this.options = P.extend({}, {
                root: "/"
            }, this.options, S);
            this.root = this.options.root;
            this._wantsHashChange = this.options.hashChange !== false;
            this._wantsPushState = !!this.options.pushState;
            this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
            var R = this.getFragment();
            var Q = document.documentMode;
            var U = (M.exec(navigator.userAgent.toLowerCase()) && (!Q || Q <= 7));
            this.root = ("/" + this.root + "/").replace(g, "/");
            if (U && this._wantsHashChange) {
                this.iframe = D.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow;
                this.navigate(R)
            }
            if (this._hasPushState) {
                D.$(window).on("popstate", this.checkUrl)
            } else {
                if (this._wantsHashChange && ("onhashchange" in window) && !U) {
                    D.$(window).on("hashchange", this.checkUrl)
                } else {
                    if (this._wantsHashChange) {
                        this._checkUrlInterval = setInterval(this.checkUrl, this.interval)
                    }
                }
            }
            this.fragment = R;
            var V = this.location;
            var T = V.pathname.replace(/[^\/]$/, "$&/") === this.root;
            if (this._wantsHashChange && this._wantsPushState && !this._hasPushState && !T) {
                this.fragment = this.getFragment(null, true);
                this.location.replace(this.root + this.location.search + "#" + this.fragment);
                return true
            } else {
                if (this._wantsPushState && this._hasPushState && T && V.hash) {
                    this.fragment = this.getHash().replace(E, "");
                    this.history.replaceState({}, document.title, this.root + this.fragment + V.search)
                }
            } if (!this.options.silent) {
                return this.loadUrl()
            }
        },
        stop: function () {
            D.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl);
            clearInterval(this._checkUrlInterval);
            k.started = false
        },
        route: function (Q, R) {
            this.handlers.unshift({
                route: Q,
                callback: R
            })
        },
        checkUrl: function (R) {
            var Q = this.getFragment();
            if (Q === this.fragment && this.iframe) {
                Q = this.getFragment(this.getHash(this.iframe))
            }
            if (Q === this.fragment) {
                return false
            }
            if (this.iframe) {
                this.navigate(Q)
            }
            this.loadUrl() || this.loadUrl(this.getHash())
        },
        loadUrl: function (S) {
            var R = this.fragment = this.getFragment(S);
            var Q = P.any(this.handlers, function (T) {
                if (T.route.test(R)) {
                    T.callback(R);
                    return true
                }
            });
            return Q
        },
        navigate: function (S, R) {
            if (!k.started) {
                return false
            }
            if (!R || R === true) {
                R = {
                    trigger: R
                }
            }
            S = this.getFragment(S || "");
            if (this.fragment === S) {
                return
            }
            this.fragment = S;
            var Q = this.root + S;
            if (this._hasPushState) {
                this.history[R.replace ? "replaceState" : "pushState"]({}, document.title, Q)
            } else {
                if (this._wantsHashChange) {
                    this._updateHash(this.location, S, R.replace);
                    if (this.iframe && (S !== this.getFragment(this.getHash(this.iframe)))) {
                        if (!R.replace) {
                            this.iframe.document.open().close()
                        }
                        this._updateHash(this.iframe.location, S, R.replace)
                    }
                } else {
                    return this.location.assign(Q)
                }
            } if (R.trigger) {
                this.loadUrl(S)
            }
        },
        _updateHash: function (Q, S, T) {
            if (T) {
                var R = Q.href.replace(/(javascript:|#).*$/, "");
                Q.replace(R + "#" + S)
            } else {
                Q.hash = "#" + S
            }
        }
    });
    D.history = new k;
    var n = function (Q, S) {
        var R = this;
        var U;
        if (Q && P.has(Q, "constructor")) {
            U = Q.constructor
        } else {
            U = function () {
                return R.apply(this, arguments)
            }
        }
        P.extend(U, R, S);
        var T = function () {
            this.constructor = U
        };
        T.prototype = R.prototype;
        U.prototype = new T;
        if (Q) {
            P.extend(U.prototype, Q)
        }
        U.__super__ = R.prototype;
        return U
    };
    I.extend = d.extend = t.extend = K.extend = k.extend = n;
    var v = function () {
        throw new Error('A "url" property or function must be specified')
    };
    var L = function (S, R) {
        var Q = R.error;
        R.error = function (T) {
            if (Q) {
                Q(S, T, R)
            }
            S.trigger("error", S, T, R)
        }
    }
}).call(this);
define("backbone", ["underscore", "jquery"], (function (b) {
    return function () {
        var c, d;
        return c || b.Backbone
    }
}(this)));
define("eventBus", ["backbone"], function (c) {
    var b = _.extend({}, c.Events);
    return b
});
define("site-core", function () {});
define("venere_components/tracking/module/conf/channel_preno/LtCookieConfiguration", [], function () {
    var b = {
        isBrand: function () {
            return document.location.pathname.match(/^\/(?:(?:it|de|es|fr|nl|no|sv|ja|zh)\/)?$/) !== null
        }
    };
    return {
        cookie_name: "lt",
        cookie_separator: "|",
        cookie_value_separator: "=",
        cookie_expiration_days: 30,
        attributes: {
            ref: {
                validator: "^[0-9]+$"
            },
            kwp: {
                validator: "^[a-z0-9-]+$"
            },
            ta_op: {
                validator: "^1|0$"
            },
            cc_op: {
                validator: "^1|0$"
            },
            customData: {},
            rffrid: {
                validator: "^(?:\\d|\\w|=|\\.|-)+$"
            }
        },
        key_attribute: "ref",
        referer: [{
            domain: ["google\\.", "bing\\.", "yahoo\\.", "yandex\\.", "live\\.", "ask\\.", "baidu\\.", "soso\\.com", "mywebsearch\\.com", "virgilio\\.it", "libero\\.it", "avg\\.com", "aol\\.com", "voila\\.fr", "search-result\\.com", "comcast\\.net", "aol\\.", "so\\.360\\.cn", "sogou\\.com", "suche\\.web\\.de", "kvasir\\.no", "ask\\.com", "naver\\.com"],
            attributes: {
                ref: b.isBrand() ? "2018823" : "2018824",
                rffrid: "seo.vcom.%POS%.%SE_TYPE%.%REF_DOMAIN%".replace("%SE_TYPE%", b.isBrand() ? "b" : "u").replace("%POS%", "xx")
            }
        }]
    }
});
define("venere_components/tracking/module/utils/URL", [], function () {
    var b = function (s) {
        var c = {
            protocol: "",
            host: "",
            port: null,
            path: "/",
            search: {},
            hash: []
        };
        var d = decodeURIComponent(s);
        var l = "://";
        var g = d.indexOf(l);
        if (g > -1) {
            c.protocol = d.substring(0, g);
            d = d.substring(g + l.length)
        }
        var n = d.indexOf("/");
        n = n > -1 ? n : d.length;
        var q = d.slice(0, n);
        split = q.split(":", 2);
        c.host = split[0];
        c.port = split.length > 1 ? parseInt(split[1]) : c.port;
        d = d.slice(n);
        if (d.length > 0) {
            var o = d.indexOf("?");
            var j = d.indexOf("#");
            var e = d.length;
            if (j > -1) {
                c.hash = d.slice(j + 1).split("#");
                e = j
            }
            if (o > -1) {
                var m = d.slice(o + 1, j > -1 ? j : d.length);
                var f = m.split("&");
                for (var k in f) {
                    var h = f[k].indexOf("=");
                    if (h > -1) {
                        c.search[f[k].substring(0, h)] = f[k].substring(h + 1)
                    } else {
                        c.search[f[k]] = true
                    }
                }
                e = o
            }
            c.path = d.slice(0, e)
        }
        return c
    };
    return b
});
define("venere_components/tracking/module/common/channel_preno/LastTouchBuilder", ["../../conf/channel_preno/LtCookieConfiguration", "../../utils/URL"], function (e, d) {
    function c(l, j) {
        var k = l.search;
        if (j.attributes[e.key_attribute] !== k[e.key_attribute]) {
            j.attributes = {}
        }
        for (var h in e.attributes) {
            if (typeof k[h] !== "undefined") {
                j.set = true;
                j.attributes[h] = k[h]
            }
        }
    }

    function g(n, k) {
        var m = new d(n.referrer);
        if (m !== null) {
            var j = e.referer;
            for (var l in j) {
                var h = typeof j[l].domain === "string" ? [j[l].domain] : j[l].domain;
                for (var o in h) {
                    if (m.host.match(h[o])) {
                        k.set = true;
                        k.attributes = {};
                        for (a in e.attributes) {
                            if (a in j[l].attributes) {
                                k.attributes[a] = j[l].attributes[a].replace("%REF_DOMAIN%", m.host)
                            }
                        }
                    }
                }
            }
        }
    }

    function b(h, j) {
        return ((typeof e.attributes[h] !== "undefined") && (e.attributes[h].validator) ? j.match(new RegExp(e.attributes[h].validator)) : true && j.indexOf(e.cookie_separator) === -1)
    }

    function f(j) {
        if (j.attributes) {
            for (var h in j.attributes) {
                if (!b(h, j.attributes[h])) {
                    j.set = true;
                    if (h === e.key_attribute) {
                        j.attributes = {};
                        return j
                    } else {
                        delete(j.attributes[h])
                    }
                }
            }
        }
        return j
    }
    return {
        buildLastTouch: function (j) {
            var h = {
                set: false,
                attributes: j.cookie
            };
            if (j.search[e.key_attribute]) {
                c(j, h)
            } else {
                g(j, h)
            }
            return f(h)
        }
    }
});
/*
 * jQuery Cookie Plugin v1.4.0
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (b) {
    if (typeof define === "function" && define.amd) {
        define("jquery.cookie", ["jquery"], b)
    } else {
        b(jQuery)
    }
}(function (g) {
    var b = /\+/g;

    function e(k) {
        return c.raw ? k : encodeURIComponent(k)
    }

    function h(k) {
        return c.raw ? k : decodeURIComponent(k)
    }

    function j(k) {
        return e(c.json ? JSON.stringify(k) : String(k))
    }

    function d(k) {
        if (k.indexOf('"') === 0) {
            k = k.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")
        }
        try {
            k = decodeURIComponent(k.replace(b, " "))
        } catch (l) {
            return
        }
        try {
            return c.json ? JSON.parse(k) : k
        } catch (l) {}
    }

    function f(l, k) {
        var m = c.raw ? l : d(l);
        return g.isFunction(k) ? k(m) : m
    }
    var c = g.cookie = function (u, s, y) {
        if (s !== undefined && !g.isFunction(s)) {
            y = g.extend({}, c.defaults, y);
            if (typeof y.expires === "number") {
                var v = y.expires,
                    x = y.expires = new Date();
                x.setDate(x.getDate() + v)
            }
            return (document.cookie = [e(u), "=", j(s), y.expires ? "; expires=" + y.expires.toUTCString() : "", y.path ? "; path=" + y.path : "", y.domain ? "; domain=" + y.domain : "", y.secure ? "; secure" : ""].join(""))
        }
        var z = u ? undefined : {};
        var w = document.cookie ? document.cookie.split("; ") : [];
        for (var q = 0, n = w.length; q < n; q++) {
            var o = w[q].split("=");
            var k = h(o.shift());
            var m = o.join("=");
            if (u && u === k) {
                z = f(m, s);
                break
            }
            if (!u && (m = f(m)) !== undefined) {
                z[k] = m
            }
        }
        return z
    };
    c.defaults = {};
    g.removeCookie = function (l, k) {
        if (g.cookie(l) === undefined) {
            return false
        }
        g.cookie(l, "", g.extend({}, k, {
            expires: -1
        }));
        return !g.cookie(l)
    }
}));
define("venere_components/tracking/module/common/channel_preno/LastTouchCookie", ["jquery", "../../conf/channel_preno/LtCookieConfiguration", "jquery.cookie"], function (d, b) {
    var c = {
        expires: b.cookie_expiration_days,
        path: "/",
        domain: "venere.com"
    };
    var e = {
        get: function () {
            var h = d.cookie(b.cookie_name);
            var j = {};
            if (h) {
                var g = h.split(b.cookie_separator);
                for (var l in g) {
                    var k = g[l].indexOf(b.cookie_value_separator);
                    if (k > -1) {
                        j[g[l].substring(0, k)] = g[l].substring(k + 1)
                    }
                }
            }
            return j
        },
        set: function (h) {
            var g = [];
            for (var f in h) {
                g.push(f + b.cookie_value_separator + h[f])
            }
            if (g.length > 0) {
                var j = d.cookie.raw;
                d.cookie.raw = true;
                d.cookie(b.cookie_name, g.join(b.cookie_separator), c);
                d.cookie.raw = j
            }
        }
    };
    return e
});
define("venere_components/tracking/module/conf/channel_preno/RLtCookieConfiguration", [], function () {
    return {
        cookie_name: "rlt",
        cookie_separator: "|",
        cookie_value_separator: "=",
        cookie_expiration_days: 30,
        key_attribute: "ref",
        lt_attributes: ["ref", "rffrid", "kwp"],
        skip_ta_cc_op: 1,
        skip_rffrid: ["seo\\.vcom\\..+\\.b\\..+", "sem\\.vcom\\..+\\..+\\.001.*"]
    }
});
define("venere_components/tracking/module/common/channel_preno/RestrictedLastTouchCookie", ["jquery", "../../conf/channel_preno/RLtCookieConfiguration", "jquery.cookie"], function (e, d) {
    var c = {
        expires: d.cookie_expiration_days,
        path: "/",
        domain: "venere.com"
    };
    var b = {
        get: function () {
            var h = e.cookie(d.cookie_name);
            var j = {};
            if (h) {
                var g = h.split(d.cookie_separator);
                for (var l in g) {
                    var k = g[l].indexOf(d.cookie_value_separator);
                    if (k > -1) {
                        j[g[l].substring(0, k)] = g[l].substring(k + 1)
                    }
                }
            }
            return j
        },
        set: function (g) {
            var j = [];
            for (var f in g) {
                j.push(f + d.cookie_value_separator + g[f])
            }
            if (j.length > 0) {
                var h = e.cookie.raw;
                e.cookie.raw = true;
                e.cookie(d.cookie_name, j.join(d.cookie_separator), c);
                e.cookie.raw = h
            }
        },
        destroy: function () {
            e.removeCookie(d.cookie_name, c)
        }
    };
    return b
});
define("venere_components/tracking/module/common/channel_preno/RestrictedLastTouchBL", ["../../conf/channel_preno/RLtCookieConfiguration", "./RestrictedLastTouchCookie"], function (b, c) {
    var d = function (f) {
        if (b.skip_ta_cc_op && (f.ta_op || f.cc_op)) {
            return false
        }
        if ("rffrid" in f) {
            var g = f.rffrid;
            var j = b.skip_rffrid;
            for (var h in j) {
                if (new RegExp(j[h]).test(g)) {
                    return false
                }
            }
        }
        return true
    };
    var e = function (f) {
        var k = {};
        var j = b.lt_attributes;
        for (var g in j) {
            var h = j[g];
            if (h in f) {
                k[h] = f[h]
            }
        }
        return k
    };
    return {
        handle: function (g) {
            if (d(g)) {
                var f = e(g);
                c.set(f)
            }
        }
    }
});
define("venere_components/tracking/module/views/channel_preno/RLTView", ["backbone", "../../common/channel_preno/RestrictedLastTouchBL"], function (d, b) {
    var c = d.View.extend({
        eBus: {},
        initialize: function (e) {
            this.eBus = e.eventBus;
            this.eBus.on("lt_set", function (f) {
                b.handle(f)
            })
        }
    });
    return c
});
define("venere_components/tracking/module/LastTouchModule", ["./common/channel_preno/LastTouchBuilder", "./common/channel_preno/LastTouchCookie", "./views/channel_preno/RLTView", "./utils/URL", "jquery", "jquery.cookie"], function (g, c, f, b, d) {
    var e = function (k) {
        var j = k.eventBus;
        var l = new f({
            eventBus: j
        });

        function m() {
            var o = h();
            var n = g.buildLastTouch(o);
            if (n.set) {
                c.set(n.attributes);
                j.trigger("lt_set", n.attributes)
            }
        }

        function h() {
            var n = new b(document.location.href).search;
            return {
                search: n,
                cookie: c.get(),
                referrer: n.fwdrf || decodeURIComponent(document.referrer)
            }
        }
        m();
        return {
            set: m
        }
    };
    return e
});
require(["eventBus", "venere_components/tracking/module/LastTouchModule"], function (c, b) {
    $(function () {
        new b({
            eventBus: c
        })
    })
});
define("tracking/main/last_touch/main", function () {});
define("site-tracking-last_touch", function () {});
(function () {
    var c = window.v_abs,
        e = window.v_abp;
    if (c && e) {
        var b = Math.max(c.length, e.length);
        for (var f = 1; f < b; f++) {
            var d = f < e.length && e.charAt(f) != "-" ? e.charAt(f) : c.charAt(f);
            if (d >= "A" && d <= "Z" && d != "O") {
                document.write('<style type="text/css">.ab-' + f + ".mvt-def{display:none} .ab-" + f + ".var-" + d + "{display:inline} div.ab-" + f + ".var-" + d + "{display:block} li.ab-" + f + ".var-" + d + "{display:list-item}</style>")
            }
        }
    }
})();
venere_ajax_call = function (c, g, e, f) {
    var b = $.get;
    if (g == "GET" || g == "get") {
        b = $.get
    } else {
        if (g == "POST" || g == "post") {
            b = $.post
        }
    }
    var d = function (h, j) {
        f(h)
    };
    b(c, e, d)
};

function trim(d) {
    if (typeof d != "string") {
        return d
    }
    var c = d;
    var b = c.substring(0, 1);
    while (b == " ") {
        c = c.substring(1, c.length);
        b = c.substring(0, 1)
    }
    b = c.substring(c.length - 1, c.length);
    while (b == " ") {
        c = c.substring(0, c.length - 1);
        b = c.substring(c.length - 1, c.length)
    }
    while (c.indexOf("  ") != -1) {
        c = c.substring(0, c.indexOf("  ")) + c.substring(c.indexOf("  ") + 1, c.length)
    }
    return c
}

function setVenereCookie(g, j, h) {
    var d = new Date();
    var f = g + "=" + (j == null ? "" : j);
    if (h != null) {
        d.setSeconds(h);
        f += "; expires=" + d.toGMTString()
    }
    f += "; path=/";
    var c = document.location.hostname.toLowerCase();
    var e = c.indexOf("venere");
    var b = "." + c.substr(e);
    f += "; domain=" + b;
    document.cookie = f
}

function str_replace(f, e, d) {
    var c = "";
    var b = 0;
    for (i = d.indexOf(f); i > -1; i = d.indexOf(f, i)) {
        c += d.substring(b, i);
        c += e;
        i += f.length;
        b = i
    }
    return c + d.substring(b, d.length)
}

function readCookie(g) {
    var b = new String();
    var f = document.cookie;
    if (f.length > 0) {
        var c = g + "=";
        var e = f.indexOf(c);
        var d = 0;
        if (e > -1) {
            e += c.length;
            d = f.indexOf(";", e);
            if (d < e) {
                d = f.length
            }
            b = f.substring(e, d)
        }
    }
    return unescape(b)
}

function setUserPreference(b, c) {
    return setVenereCookie(b, c)
}

function readUserPreference(b) {
    return readCookie(b)
}

function readUserPreferredCurrency() {
    return readUserPreference("pref_currency")
}

function setUserPreferredCurrency(b) {
    setUserPreference("pref_currency", b)
}

function extractPriceComponents(e, f) {
    if (typeof e != "number") {
        e = parseFloat(e)
    }
    var b = e.toFixed(f);
    var d = {
        integerPart: null,
        decimalPart: null
    };
    var c = b.indexOf(".");
    if (c == -1) {
        d.integerPart = b
    } else {
        d.integerPart = b.substring(0, c);
        d.decimalPart = b.substring(c + 1)
    }
    return d
}

function cropImage(e) {
    var c = e.parents(".thumbnail_container");
    var g = {
        width: e.width(),
        height: e.height()
    };
    var b = {
        width: c.width(),
        height: c.height()
    };
    var h = Math.min(g.width, g.height);
    var j = h == g.height ? b.height / g.height : b.width / g.width;
    var f = Math.ceil(g.width * j);
    var d = Math.ceil(g.height * j);
    if (f < b.width || d < b.height) {
        j = h == g.height ? b.width / g.width : b.height / g.height;
        f = g.width * j;
        d = g.height * j
    }
    e.width(f);
    e.height(d);
    e.css("margin-left", -(e.width() - b.width) / 2);
    e.css("margin-top", -(e.height() - b.height) / 2);
    e.show()
}
RegExp.escape = function (b) {
    return b.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
};
utility_funcs_loaded = true;
var currencyDisplayList = {
    EUR: 1,
    GBP: 1,
    USD: 1,
    AUD: 1,
    BRL: 1,
    CAD: 1,
    CHF: 1,
    CNY: 1,
    JPY: 1,
    NOK: 1,
    RUB: 1,
    SEK: 1
};

function StayParams() {
    var e, c, b, f, g, d;
    this.getCheckIn = function () {
        return e
    };
    this.setCheckIn = function (h) {
        e = h
    };
    this.getCheckOut = function () {
        return c
    };
    this.setCheckOut = function (h) {
        c = h
    };
    this.getDestination = function () {
        return b
    };
    this.setDestination = function (h) {
        b = h
    };
    this.getPersons = function () {
        return f
    };
    this.setPersons = function (h) {
        f = h
    };
    this.getRooms = function () {
        return g
    };
    this.setRooms = function (h) {
        g = h
    };
    this.getRoomGuest = function () {
        return d
    };
    this.setRoomGuest = function (h) {
        d = h
    };
    this.isEmptyDate = function (h) {
        return h === ""
    }
}
var NO_ACTION = 0,
    SEARCH_WA = 1,
    SEARCH_WOA = 2,
    ERASE_COOKIES = 3,
    AVAIL_COOKIES_EXPIRE = 3600;
var device_type_values = new Array("DESKTOP", "PHONE", "TABLET");

function SearchWidget(c) {
    this.stayParams = c;
    this.errors = new Array();
    this.action = NO_ACTION;
    this.isAllowedSearchWOA = false;
    var b = new Date();
    this.today = new Date(b.getFullYear(), b.getMonth(), b.getDate());
    this.config = new Object()
}
SearchWidget.prototype.init = function (b) {
    this.config = b;
    if (this.config.hasDestination) {
        this.isAllowedSearchWOA = true
    }
};
SearchWidget.prototype.getStayParams = function () {
    return this.stayParams.getStayParams()
};
SearchWidget.prototype.setStayParams = function (b) {
    this.stayParams.setStayParams(b)
};
SearchWidget.prototype.getDestinationDefaultText = function () {
    return this.config.destinationDefaultText
};
SearchWidget.prototype.setDestinationDefaultText = function (b) {
    this.config.destinationDefaultText = b
};
SearchWidget.prototype.process = function () {
    this.stayParamsValidation();
    this.actionChoise(this)
};
SearchWidget.prototype.hasErrors = function () {
    return this.errors.length !== 0
};
SearchWidget.prototype.getErrors = function () {
    return this.errors
};
SearchWidget.prototype.getAction = function () {
    return this.action
};
SearchWidget.prototype.exceptionRaised = function (b) {
    for (var c = 0; c < this.errors.length; c++) {
        if (this.errors[c] === b) {
            return true
        }
    }
    return false
};
SearchWidget.prototype.setErrors = function (b) {
    this.errors.push(b)
};
SearchWidget.prototype.stayParamsValidation = function () {
    var c = $("body").is("#home");
    if (this.config.hasDestination && (this.stayParams.getDestination() === "" || ((c === false) && (this.stayParams.getDestination() === this.config.destinationDefaultText)))) {
        this.setErrors("DESTINATION_EMPTY")
    }
    if (!this.isAllowedSearchWOA || !this.stayParams.isEmptyDate(this.stayParams.getCheckIn()) || !this.stayParams.isEmptyDate(this.stayParams.getCheckOut())) {
        var b = new Date(this.today.getTime()),
            e = new Date(this.today.getTime()),
            d = new Date(this.today.getTime());
        b.add("d", this.config.MIN_CHECKIN_ALLOWED_OFFSET);
        e.add("d", this.config.MAX_CHECKIN_ALLOWED_OFFSET);
        d.add("d", this.config.MAX_CHECKOUT_ALLOWED_OFFSET);
        if (this.stayParams.getCheckIn() == null || this.stayParams.isEmptyDate(this.stayParams.getCheckIn())) {
            this.setErrors("INVALID_CHECKIN_DATE")
        }
        if (!this.exceptionRaised("INVALID_CHECKIN_DATE") && (this.stayParams.getCheckIn().isBefore(b) || this.stayParams.getCheckIn().isAfter(e))) {
            this.setErrors("INVALID_CHECKIN_DATE")
        }
        if (this.stayParams.getCheckOut() == null || this.stayParams.isEmptyDate(this.stayParams.getCheckOut())) {
            this.setErrors("INVALID_CHECKOUT_DATE")
        }
        if (!this.exceptionRaised("INVALID_CHECKOUT_DATE") && this.stayParams.getCheckOut().isAfter(d)) {
            this.setErrors("INVALID_CHECKOUT_DATE")
        }
        if (!this.exceptionRaised("INVALID_CHECKOUT_DATE") && !this.exceptionRaised("INVALID_CHECKIN_DATE")) {
            if (this.stayParams.getCheckOut().isAfter(this.stayParams.getCheckIn()) == false) {
                this.setErrors("CHECKOUT_LESS_THAN_CHECKIN")
            } else {
                d.setTime(this.stayParams.getCheckIn().getTime());
                d.add("d", this.config.MAX_STAY_LENGTH_ALLOWED);
                if (this.stayParams.getCheckOut().isAfter(d)) {
                    this.setErrors("INVALID_CHECKOUT_DATE")
                }
            }
        }
        if (this.config.searchWithChildren) {
            if (this.stayParams.getRoomGuest() != "" && typeof (this.stayParams.getRoomGuest()) != "undefined") {
                if (!this.stayParams.getRoomGuest().match(this.config.rgvalRegexp)) {
                    this.stayParams.setRoomGuest(this.config.rgvalDefaultValue)
                }
            } else {
                this.stayParams.setRoomGuest(this.config.rgvalDefaultValue)
            }
        } else {
            if (this.stayParams.getPersons() == "") {
                this.setErrors("PERSONS_EMPTY")
            }
            if (this.stayParams.getRooms() == "") {
                this.setErrors("ROOMS_EMPTY")
            }
            if (!this.exceptionRaised("PERSONS_EMPTY") && !this.exceptionRaised("ROOMS_EMPTY") && parseInt(this.stayParams.getRooms()) > parseInt(this.stayParams.getPersons())) {
                this.setErrors("PERSONS_LESS_THAN_ROOMS")
            }
        }
    }
};
SearchWidget.prototype.actionChoise = function (b) {
    if (this.isAllowedSearchWOA && this.stayParams.isEmptyDate(this.stayParams.getCheckIn()) && this.stayParams.isEmptyDate(this.stayParams.getCheckOut()) && !this.exceptionRaised("DESTINATION_EMPTY")) {
        this.setAction(SEARCH_WOA);
        return
    }
    if (!b.hasErrors()) {
        this.setAction(SEARCH_WA);
        return
    }
    if ((!this.config.hasDestination || this.exceptionRaised("DESTINATION_EMPTY")) && this.stayParams.isEmptyDate(this.stayParams.getCheckIn()) && this.stayParams.isEmptyDate(this.stayParams.getCheckOut())) {
        this.setAction(ERASE_COOKIES)
    }
};
SearchWidget.prototype.setAction = function (b) {
    this.action = b
};

function SearchFormDAO(b) {
    this.config = new Object();
    this.form = b;
    this.allowedUrlParams = new Object()
}
SearchFormDAO.prototype.init = function (b) {
    this.config = b
};
SearchFormDAO.prototype.getDestinationCtrl = function () {
    return this.form.city
};
SearchFormDAO.prototype.getDestination = function () {
    destCtrl = this.getDestinationCtrl();
    if (destCtrl) {
        return trim(destCtrl.value)
    } else {
        return ""
    }
};
SearchFormDAO.prototype.setDestination = function (b) {
    destCtrl = this.getDestinationCtrl();
    if (destCtrl) {
        destCtrl.value = b
    }
};
SearchFormDAO.prototype.isEmptyDateCtrl = function (b) {
    if (b.value == "" || b.value == this.config.dateInputLabel) {
        return true
    }
    return false
};
SearchFormDAO.prototype.getCheckInCtrl = function () {
    return this.form.checkin
};
SearchFormDAO.prototype.getDate = function (b) {
    if (this.isEmptyDateCtrl(b)) {
        return ""
    }
    return Date.parseString(b.value + " 12", this.config.toolboxDateFormat + " H")
};
SearchFormDAO.prototype.getCheckIn = function () {
    return this.getDate(this.getCheckInCtrl())
};
SearchFormDAO.prototype.getCheckOutCtrl = function () {
    return this.form.checkout
};
SearchFormDAO.prototype.getCheckOut = function () {
    return this.getDate(this.getCheckOutCtrl())
};
SearchFormDAO.prototype.getPersonsCtrl = function () {
    return this.form.pval
};
SearchFormDAO.prototype.getPersons = function () {
    var b = this.getPersonsCtrl();
    if (b.value !== "" && b.value !== "null") {
        return parseInt(b.value)
    } else {
        return (b.value === "null" ? "" : b.value)
    }
};
SearchFormDAO.prototype.getRoomsCtrl = function () {
    return this.form.rval
};
SearchFormDAO.prototype.getRooms = function () {
    var b = this.getRoomsCtrl();
    if (b.value !== "" && b.value !== "null") {
        return parseInt(b.value)
    } else {
        return (b.value === "null" ? "" : b.value)
    }
};
SearchFormDAO.prototype.getRoomGuestCtrl = function () {
    return this.form.rgval
};
SearchFormDAO.prototype.getRoomGuest = function () {
    var b = this.getRoomGuestCtrl();
    if (b) {
        return b.value
    } else {
        return null
    }
};
SearchFormDAO.prototype.setCheckIn = function (b) {
    if (b != null && b instanceof Date) {
        this.form.checkin.value = b.format(this.config.toolboxDateFormat);
        this.form.checkin.dateValue = b;
        $(this.form.checkin).trigger("checkEvent")
    }
};
SearchFormDAO.prototype.setCheckOut = function (b) {
    if (b != null && b instanceof Date) {
        this.form.checkout.value = b.format(this.config.toolboxDateFormat);
        this.form.checkout.dateValue = b;
        $(this.form.checkout).trigger("checkEvent")
    }
};
SearchFormDAO.prototype.setPersons = function (b) {
    if (b && b > 0) {
        this.setSelectedValue(this.getPersonsCtrl(), b)
    }
};
SearchFormDAO.prototype.setRooms = function (b) {
    if (b && b > 0) {
        this.setSelectedValue(this.getRoomsCtrl(), b)
    }
};
SearchFormDAO.prototype.setRoomGuest = function (b) {
    if (b) {
        var c = this.getRoomGuestCtrl();
        $(c).trigger("cookieChanged", b)
    }
};
SearchFormDAO.prototype.setAllowedUrlParams = function (b) {
    this.allowedUrlParams = b
};
SearchFormDAO.prototype.getGeoId = function () {
    if (this.form.geoid) {
        return parseInt(this.form.geoid.value)
    } else {
        return ""
    }
};
SearchFormDAO.prototype.getHotelId = function () {
    if (this.form.htid) {
        return parseInt(this.form.htid.value, 10)
    } else {
        return ""
    }
};
SearchFormDAO.prototype.getLg = function () {
    if (this.form.lg) {
        return trim(this.form.lg.value)
    } else {
        return ""
    }
};
SearchFormDAO.prototype.setSelectedValue = function (c, b) {
    for (i = 0; i < c.length; i++) {
        if (c.options[i].value == b) {
            c.selectedIndex = i;
            break
        }
    }
};
SearchFormDAO.prototype.getStayParams = function () {
    var b = new StayParams;
    b.setCheckIn(this.getCheckIn());
    b.setCheckOut(this.getCheckOut());
    b.setDestination(this.getDestination());
    b.setPersons(this.getPersons());
    b.setRooms(this.getRooms());
    b.setRoomGuest(this.getRoomGuest());
    return b
};
SearchFormDAO.prototype.setStayParams = function (b) {
    if (this.config.hasDestination && b.getDestination()) {
        this.setDestination(b.getDestination())
    }
    this.setCheckIn(b.getCheckIn());
    this.setCheckOut(b.getCheckOut());
    this.setPersons(b.getPersons());
    this.setRooms(b.getRooms());
    this.setRoomGuest(b.getRoomGuest())
};

function NextAction() {}
NextAction.prototype.execute = function () {
    return false
};
NextAction.prototype.init = function (b, c) {
    return false
};
PerformSearchAction.prototype = new NextAction;
PerformSearchAction.prototype.constructor = PerformSearchAction;

function PerformSearchAction() {}
PerformSearchAction.prototype.init = function (c, b, d) {
    this.DAO = c;
    this.actionToDo = b;
    this.preSetDAO = new PreSetDAO(d);
    this.config = d
};
PerformSearchAction.prototype.getAvailParamsObj = function () {
    var b = new Object();
    b.sd = padZero(String(this.DAO.getCheckIn().getDate()));
    b.sm = padZero(String(this.DAO.getCheckIn().getMonth() + 1));
    b.sy = this.DAO.getCheckIn().getFullYear();
    b.ed = padZero(String(this.DAO.getCheckOut().getDate()));
    b.em = padZero(String(this.DAO.getCheckOut().getMonth() + 1));
    b.ey = this.DAO.getCheckOut().getFullYear();
    b.pval = this.DAO.getPersons();
    b.rval = this.DAO.getRooms();
    b.rgval = this.DAO.getRoomGuest();
    return b
};
PerformSearchAction.prototype.execute = function () {
    if (this.actionToDo === ERASE_COOKIES) {
        this.preSetDAO.deleteAvailCookies()
    } else {
        var c = new Object();
        var d = new Object();
        if (this.actionToDo === SEARCH_WA) {
            d = c = this.getAvailParamsObj();
            this.preSetDAO.setAvailCookies(c)
        } else {
            if (this.actionToDo === SEARCH_WOA) {
                this.preSetDAO.deleteAvailCookies()
            }
        }
        var h, g = this.DAO.form.elements.length;
        var m = null;
        for (h = 0; h < g; h++) {
            if (this.DAO.form.elements[h].type === "hidden" && this.DAO.form.elements[h].value != "") {
                c[this.DAO.form.elements[h].name] = this.DAO.form.elements[h].value
            }
        }
        if (this.config.defaultCity && this.config.defaultCity.toLowerCase() == this.DAO.getDestination().toLowerCase()) {
            if (this.config.defaultGeoId) {
                c.geoid = this.config.defaultGeoId
            } else {
                if (this.config.defaultGeoUrl) {
                    m = this.config.defaultGeoUrl;
                    delete c.lg
                }
            }
            d.cityChanged = false
        } else {
            d.cityChanged = true
        }
        d.city = this.DAO.getDestination();
        d.geoid = (c.geoid == null ? null : c.geoid);
        if (this.DAO.getDestination() != "" && c.geoid == null && m == null) {
            c.city = this.DAO.getDestination()
        }
        var l = this.preSetDAO.getAllowedUrlParams();
        delete l.sd;
        delete l.sm;
        delete l.sy;
        delete l.ed;
        delete l.em;
        delete l.ey;
        delete l.pval;
        delete l.rval;
        delete l.rgval;
        delete l.lg;
        delete l.htid;
        for (var f in l) {
            c[f] = l[f]
        }
        if (c.geoid == null) {
            c.geoid = "null"
        }
        var b = buildQueryStr(c, true);
        if (m != null) {
            m += b
        } else {
            if (this.DAO.config.useCurrentUrlAsAction) {
                m = window.location.pathname + b
            } else {
                if (this.DAO.getGeoId() != "" || c.geoid != "null") {
                    if (b.indexOf("geoid=-") >= 0) {
                        m = "/hotel/index.php" + b.replace("geoid=-", "htid=")
                    } else {
                        m = "/search/index.php" + b
                    }
                } else {
                    m = "/site/index.php" + b
                }
            }
        }
        var j = false;
        try {
            if (typeof (this.config.tracking_fun) == "function") {
                set_omniture_navigation_handler("track_hotel_city_search_widget", function () {
                    window.location = m
                });
                j = this.config.tracking_fun(d)
            }
        } catch (k) {}
        if (!j) {
            window.location = m
        }
    }
};

function FinderPerformSearchAction() {}
FinderPerformSearchAction.prototype.init = function (c, b, d) {
    this.DAO = c;
    this.preSetDAO = new PreSetDAO(d);
    this.actionToDo = b
};
FinderPerformSearchAction.prototype.execute = function () {
    if (this.actionToDo === ERASE_COOKIES) {
        this.preSetDAO.deleteAvailCookies()
    } else {
        var f = new Object();
        if (this.actionToDo === SEARCH_WA) {
            f.sd = padZero(String(this.DAO.getCheckIn().getDate()));
            f.sm = padZero(String(this.DAO.getCheckIn().getMonth() + 1));
            f.sy = this.DAO.getCheckIn().getFullYear();
            f.ed = padZero(String(this.DAO.getCheckOut().getDate()));
            f.em = padZero(String(this.DAO.getCheckOut().getMonth() + 1));
            f.ey = this.DAO.getCheckOut().getFullYear();
            var e = this.DAO.getPersons();
            var j = this.DAO.getRooms();
            var c = this.DAO.getRoomGuest();
            if (e > 0 && j > 0 && (c !== "" && c !== undefined)) {
                if ((this.DAO.allowedUrlParams.pval !== undefined) && (this.DAO.allowedUrlParams.rval !== undefined) && (this.DAO.allowedUrlParams.rgval !== undefined)) {
                    f.pval = "";
                    f.rval = "";
                    f.rgval = c
                } else {
                    if ((this.DAO.allowedUrlParams.pval !== undefined) && (this.DAO.allowedUrlParams.rval !== undefined) && (this.DAO.allowedUrlParams.rgval === undefined)) {
                        f.rgval = this.preSetDAO.getRgvalFromPvalRval(e, j);
                        f.pval = "";
                        f.rval = ""
                    } else {
                        if (c !== null) {
                            f.rgval = c;
                            f.pval = "";
                            f.rval = ""
                        } else {
                            f.pval = e;
                            f.rval = j;
                            f.rgval = ""
                        }
                    }
                }
            } else {
                if (e > 0 && j > 0) {
                    f.rgval = this.preSetDAO.getRgvalFromPvalRval(e, j)
                } else {
                    f.rgval = c
                }
                f.pval = "";
                f.rval = ""
            }
            this.preSetDAO.setAvailCookies(f)
        } else {
            if (this.actionToDo === SEARCH_WOA) {
                this.preSetDAO.deleteAvailCookies()
            }
        } if (this.DAO.getDestination() !== "") {
            f.city = this.DAO.getDestination()
        }
        var d, b = this.DAO.form.elements.length;
        for (d = 0; d < b; d++) {
            if (this.DAO.form.elements[d].type == "hidden" && this.DAO.form.elements[d].value != "") {
                f[this.DAO.form.elements[d].name] = this.DAO.form.elements[d].value
            }
        }
        var g = this.preSetDAO.getAllowedUrlParams();
        delete g.sd;
        delete g.sm;
        delete g.sy;
        delete g.ed;
        delete g.em;
        delete g.ey;
        delete g.pval;
        delete g.rval;
        delete g.rgval;
        delete g.lg;
        delete g.htid;
        for (var h in g) {
            f[h] = g[h]
        }
        ctrl.search(f)
    }
};
HotelPerformSearchAction.prototype = new NextAction;
HotelPerformSearchAction.prototype.constructor = HotelPerformSearchAction;

function HotelPerformSearchAction() {}
HotelPerformSearchAction.prototype.init = function (c, b, d) {
    this.DAO = c;
    this.preSetDAO = new PreSetDAO(d);
    this.actionToDo = b
};
HotelPerformSearchAction.prototype.execute = function (f) {
    if (this.actionToDo === ERASE_COOKIES) {
        this.preSetDAO.deleteAvailCookies()
    } else {
        var c = new Object();
        c.availParams = new Object();
        var n = (f ? this.DAO : this.preSetDAO);
        c.availParams.sd = padZero(String(n.getCheckIn().getDate()));
        c.availParams.sm = padZero(String(n.getCheckIn().getMonth() + 1));
        c.availParams.sy = n.getCheckIn().getFullYear();
        c.availParams.ed = padZero(String(n.getCheckOut().getDate()));
        c.availParams.em = padZero(String(n.getCheckOut().getMonth() + 1));
        c.availParams.ey = n.getCheckOut().getFullYear();
        var k = n.getPersons();
        var e = n.getRooms();
        var h = n.getRoomGuest();
        if (k > 0 && e > 0 && (h !== "" && h !== undefined)) {
            if ((this.preSetDAO.urlParams.pval !== undefined) && (this.preSetDAO.urlParams.rval !== undefined) && (this.preSetDAO.urlParams.rgval !== undefined)) {
                c.availParams.pval = "";
                c.availParams.rval = "";
                c.availParams.rgval = h
            } else {
                if ((this.preSetDAO.urlParams.pval !== undefined) && (this.preSetDAO.urlParams.rval !== undefined) && (this.preSetDAO.urlParams.rgval === undefined)) {
                    c.availParams.rgval = this.preSetDAO.getRgvalFromPvalRval(k, e);
                    c.availParams.pval = "";
                    c.availParams.rval = ""
                } else {
                    if (h !== null) {
                        if (n.config.searchWithChildren) {
                            c.availParams.rgval = h;
                            c.availParams.pval = "";
                            c.availParams.rval = ""
                        } else {
                            var l = rgvalToLegacy(h);
                            c.availParams.rgval = "";
                            c.availParams.pval = l.pval;
                            c.availParams.rval = l.rval
                        }
                    } else {
                        c.availParams.pval = k;
                        c.availParams.rval = e;
                        c.availParams.rgval = ""
                    }
                }
            }
        } else {
            if (k > 0 && e > 0) {
                c.availParams.rgval = this.preSetDAO.getRgvalFromPvalRval(k, e);
                c.availParams.pval = "";
                c.availParams.rval = ""
            } else {
                if (n.config.searchWithChildren) {
                    c.availParams.rgval = h;
                    c.availParams.pval = "";
                    c.availParams.rval = ""
                } else {
                    var l = rgvalToLegacy(h);
                    c.availParams.rgval = "";
                    c.availParams.pval = l.pval;
                    c.availParams.rval = l.rval
                }
            }
        }
        this.DAO.setRoomGuest(c.availParams.rgval);
        this.preSetDAO.setAvailCookies(c.availParams);
        c.baseParams = new Object();
        c.baseParams.htid = this.DAO.getHotelId();
        c.baseParams.lg = this.DAO.getLg();
        var j = this.preSetDAO.getAllowedUrlParams();
        delete j.sd;
        delete j.sm;
        delete j.sy;
        delete j.ed;
        delete j.em;
        delete j.ey;
        delete j.pval;
        delete j.rval;
        delete j.rgval;
        delete j.lg;
        if (typeof (j.device_type) !== "undefined" && j.device_type !== "") {
            var m = j.device_type.toUpperCase();
            if ($.inArray(m, device_type_values) === -1) {
                delete j.device_type
            }
        }
        if (typeof (c.baseParams.htid) == "undefined" || c.baseParams.htid == "") {
            c.baseParams.htid = j.htid
        }
        delete j.htid;
        c.extraParams = new Object();
        for (var d in j) {
            c.extraParams[d] = j[d]
        }
        if (typeof (window.disableInternalRequestTracking) == "undefined" || !window.disableInternalRequestTracking) {
            var b = {};
            var g = c.availParams;
            b.checkin = g.sy + "-" + g.sm + "-" + g.sd;
            b.checkout = g.ey + "-" + g.em + "-" + g.ed;
            b.persons = g.pval;
            b.rooms = g.rval;
            b.rgval = g.rgval;
            window.search_dto = b;
            if (typeof (window.track_hotel_page_search_widget) != "undefined") {
                window.track_hotel_page_search_widget()
            }
        }
        ctrl.getSearchAvailabilities(c)
    }
};
NotifyErrorAction.prototype = new NextAction;
NotifyErrorAction.prototype.constructor = NotifyErrorAction;

function NotifyErrorAction() {}
NotifyErrorAction.prototype.errorsMsg = new Array();
NotifyErrorAction.prototype.errors = {
    INVALID_CHECKIN_DATE: 1,
    INVALID_CHECKOUT_DATE: 2,
    CHECKIN_LESS_THAN_TODAY: 3,
    CHECKOUT_LESS_THAN_CHECKIN: 4,
    DESTINATION_EMPTY: 5,
    PERSONS_EMPTY: 6,
    ROOMS_EMPTY: 7,
    PERSONS_LESS_THAN_ROOMS: 8
};
NotifyErrorAction.prototype.init = function (b, c) {
    this.DAO = b;
    this.errorsToNotify = c
};
NotifyErrorAction.prototype.execute = function () {
    var c = "";
    for (var b = 0; b < this.errorsToNotify.length; b++) {
        c = c + "\n" + this.errorsMsg[this.errorsToNotify[b]]
    }
    alert(c)
};

function syncDates(d, b) {
    if (d.syncCtrl) {
        var c = Date.parseString(d.value + " 12", b + " H");
        if (c) {
            var e = Date.parseString(d.syncCtrl.value + " 12", b + " H");
            if (!e || e == null) {
                e = new Date(c.getTime()).add("d", ((d.isBefore) ? 1 : -1))
            } else {
                if (d.isBefore && !c.isBefore(e)) {
                    e = new Date(c.getTime()).add("d", 1)
                } else {
                    if (!d.isBefore && !c.isAfter(e)) {
                        e = new Date(c.getTime()).add("d", -1)
                    }
                }
            }
            d.syncCtrl.value = e.format(b);
            $(d.syncCtrl).trigger("checkEvent")
        }
    }
}

function PreSetDAO(b) {
    this.config = b;
    this.urlParams = this.getQueryStringArgs(b);
    this.rgvalRegexp = b.rgvalRegexp;
    this.rgvalDefaultValue = b.rgvalDefaultValue;
    this.dateFormat = "dd/M/yyyy";
    this.isoDateFormat = "yyyyMMdd"
}
PreSetDAO.prototype = {
    formatDayMonthIsoDate: function (b) {
        if (!isNaN(b) && (b % 1 == 0) && (b.length == 1)) {
            return "0" + b
        }
        return b
    },
    extractFieldFromAvailCookie: function (d) {
        var c = this.getCookie("cavail");
        if (c !== undefined) {
            var b = c.split(",");
            if (b.length > d) {
                return b[d]
            }
        }
        return null
    },
    getCheckIn: function () {
        if (this.urlParams.sd && this.urlParams.sm && this.urlParams.sy) {
            var c = this.formatDayMonthIsoDate(this.urlParams.sm) + "/" + this.urlParams.sy;
            return Date.parseString((this.formatDayMonthIsoDate(this.urlParams.sd) + "/" + c + " 12"), this.dateFormat + " H")
        } else {
            var b = this.extractFieldFromAvailCookie(0);
            if (b) {
                return Date.parseString(b + " 12", this.isoDateFormat + " H")
            }
        }
        return null
    },
    getCheckOut: function () {
        if (this.urlParams.ed && this.urlParams.em && this.urlParams.ey) {
            var b = this.formatDayMonthIsoDate(this.urlParams.em) + "/" + this.urlParams.ey;
            return Date.parseString((this.formatDayMonthIsoDate(this.urlParams.ed) + "/" + b + " 12"), this.dateFormat + " H")
        } else {
            var c = this.extractFieldFromAvailCookie(1);
            if (c) {
                return Date.parseString(c + " 12", this.isoDateFormat + " H")
            }
        }
        return null
    },
    getPersons: function () {
        if (this.urlParams.pval) {
            return parseInt(this.urlParams.pval)
        } else {
            var b = this.extractFieldFromAvailCookie(2);
            if (b) {
                return parseInt(b)
            }
        }
        return 2
    },
    getRooms: function () {
        if (this.urlParams.rval) {
            return parseInt(this.urlParams.rval)
        } else {
            var b = this.extractFieldFromAvailCookie(3);
            if (b) {
                return parseInt(b)
            }
        }
        return 1
    },
    getRgvalFromPvalRval: function (h, g) {
        var f = new Array(g);
        var b = new Array(g);
        for (var e = 0; e < g; e++) {
            f[e] = 0;
            b[e] = -1
        }
        while (h > 0) {
            for (var c = 0; c < g; c++) {
                if (h > 0) {
                    f[c] += 1;
                    h--
                } else {
                    break
                }
            }
        }
        var d = f.join(this.config.rgvalRoomSepChar) + this.config.rgvalArraySepChar + b.join(this.config.rgvalRoomSepChar);
        return d
    },
    getRoomGuest: function () {
        var b = this.urlParams.rgval;
        var e = this.extractFieldFromAvailCookie(4);
        if (b && (b.match(this.rgvalRegexp))) {
            return b
        } else {
            if (e && (e.match(this.rgvalRegexp))) {
                return e
            } else {
                var c = this.getRooms();
                var d = this.getPersons();
                if ((d > 0) && (c > 0)) {
                    return this.getRgvalFromPvalRval(d, c)
                }
            }
        }
        return this.rgvalDefaultValue
    },
    getAllowedUrlParams: function () {
        return this.urlParams
    },
    getCookie: function (c) {
        var b = c + "=";
        if (document.cookie.length > 0) {
            offset = document.cookie.indexOf(b);
            if (offset != -1) {
                offset += b.length;
                end = document.cookie.indexOf(";", offset);
                if (end == -1) {
                    end = document.cookie.length
                }
                return unescape(document.cookie.substring(offset, end))
            } else {
                return undefined
            }
        } else {
            return undefined
        }
    },
    setAvailCookies: function (b) {
        sd = "" + b.sd;
        ed = "" + b.ed;
        sm = "" + b.sm;
        em = "" + b.em;
        pv = b.pval;
        rv = b.rval;
        rgv = b.rgval;
        if (sd.length == 1) {
            sd = "0" + sd
        }
        if (ed.length == 1) {
            ed = "0" + ed
        }
        if (sm.length == 1) {
            sm = "0" + sm
        }
        if (em.length == 1) {
            em = "0" + em
        }
        var c = b.sy + sm + sd + "," + b.ey + em + ed + "," + pv + "," + rv + "," + rgv;
        setVenereCookie("cavail", c, AVAIL_COOKIES_EXPIRE)
    },
    deleteAvailCookies: function () {
        setVenereCookie("cavail", null, -AVAIL_COOKIES_EXPIRE)
    },
    getQueryStringArgs: function (d) {
        var b = new Object();
        var g = window.location.search.substring(1);
        var f = g.split("&");
        for (var c = 0; c < f.length; c++) {
            var j = f[c].indexOf("=");
            if (j == -1) {
                continue
            }
            var h = f[c].substring(0, j);
            var e = f[c].substring(j + 1);
            if (typeof (d.allowedUrlParameters[h]) == "undefined") {
                continue
            }
            e = decodeURIComponent(e);
            b[h] = e
        }
        return b
    }
};

function SubmitController(b) {
    this.config = b
}
SubmitController.prototype.doSubmitSW = function (d) {
    var g = false;
    var e = this.config.formDao;
    var c = this.config.performAction;
    var h = this.config.errorAction;
    e.init(this.config);
    var f = new StayParams;
    f.setCheckIn(e.getCheckIn());
    f.setCheckOut(e.getCheckOut());
    f.setDestination(e.getDestination());
    f.setPersons(e.getPersons());
    f.setRooms(e.getRooms());
    f.setRoomGuest(e.getRoomGuest());
    var b = new SearchWidget(f);
    b.init(this.config);
    b.process();
    if (b.hasErrors()) {
        h.init(e, b.getErrors());
        toDo = h;
        g = false
    } else {
        c.init(e, b.getAction(), this.config);
        toDo = c;
        g = true
    }
    toDo.execute(d);
    return g
};
SubmitController.prototype.submitByEnter = function (c) {
    var b = c.keyCode;
    if (b == 13) {
        this.doSubmitSW(true)
    }
};

function closeCalendarByEnterOrTab(d, c) {
    var b = d.keyCode;
    if (b == 13 || b == 9) {
        c.over = false;
        c.hide()
    }
}

function setInputDefaultValue(f, c) {
    var d;
    if (f && f.data) {
        c = f.data
    }
    if (c.ctrlId) {
        d = document.getElementById(c.ctrlId)
    } else {
        if (c.getCtrlFun) {
            d = c.getCtrlFun()
        } else {
            d = c.ctrl
        }
    } if (d && d.tagName == "INPUT") {
        if (d.value && c.isDate) {
            var b = Date.parseString(d.value + " 12", c.dateFormat + " H");
            if (!b) {
                d.value = ""
            }
        }
        if (d.value == "") {
            d.value = c.defaultText;
            if (c.defaultStyle) {
                for (prop in c.defaultStyle) {
                    d.style[prop] = c.defaultStyle[prop]
                }
            }
        }
    }
}

function resetInputDefaultValue(d, b) {
    var c;
    if (d && d.data) {
        b = d.data
    }
    if (b.ctrlId) {
        c = document.getElementById(b.ctrlId)
    } else {
        if (b.getCtrlFun) {
            c = b.getCtrlFun()
        } else {
            c = b.ctrl
        }
    } if (c && c.tagName == "INPUT") {
        if (c.value == b.defaultText) {
            c.value = ""
        }
        if (b.typeInStyle) {
            for (prop in b.typeInStyle) {
                c.style[prop] = b.typeInStyle[prop]
            }
        }
    }
}
var colBack = "#FFFF66";
var colFore = "#000000";
var myback = colBack;
var mycount = 0;
var h_blink = null;
var myform;

function ckOnClick(c, b) {
    if (!b) {
        b = document.vSearch
    }
    if (c == 0) {
        b.txtCity.value = "";
        b.txtCity.style.backgroundColor = "#FFFFFF";
        b.txtCity.style.color = "#000000";
        if (b.touristic_area != null) {
            b.touristic_area.value = b.tmp_area_tag.value
        }
    } else {
        if (b.touristic_area != null) {
            b.touristic_area.value = ""
        }
        if (b.chk_city != null) {
            b.chk_city[1].checked = true
        }
    }
}

function PC(c, b) {
    if (!b) {
        b = document.vSearch
    }
    C2(c, 0, b)
}

function CheckPR(b) {
    if (!b) {
        b = document.vSearch
    }
    p = b.pval.value;
    r = b.rval.value;
    if (p == "") {
        p = 0
    }
    if (r == "") {
        r = 0
    }
    if ((p == 0) && (r == 0)) {
        if (typeof (err_no_room_person) != "string") {
            err_no_room_person = "Please select the number of rooms and persons."
        }
        alert(err_no_room_person);
        return false
    }
    if ((p != 0) && (r == 0)) {
        alert(err_room_number);
        return false
    }
    if ((r != 0) && (p == 0)) {
        alert(err_person_number);
        return false
    }
    if (parseInt(r) > parseInt(p)) {
        alert(err_room_le_person);
        return false
    }
    return true
}

function C2(d, c, b) {
    window.location.href = "#top";
    if (!b) {
        b = document.vSearch
    }
    if (c) {
        b.geoid.value = c
    }
    if (c == 0) {
        b.geoid.value = ""
    }
    if (b.chk_city != null) {
        b.chk_city[1].checked = true
    }
    b.city.value = d.replace(/\+/g, " ");
    if (b.find_tag != null) {
        b.find_tag.value = "0"
    }
    if (go_submit) {
        b.submit()
    }
}

function PA(c, b) {
    if (!b) {
        b = document.vSearch
    }
    window.location.href = "#top";
    A2(c, b)
}

function A2(c, b) {
    C2(c, null, b);
    if (!b) {
        b = document.vSearch
    }
    b.find_tag.value = "1";
    b.action = actLink2;
    if (go_submit) {
        b.submit()
    }
}

function changeBackground() {
    if (!myform) {
        myf1 = document.vSearch
    } else {
        myf1 = myform
    }
    myf = myf1.txtCity;
    if (myback == colBack) {
        myf.style.backgroundColor = myback;
        myf.style.color = colFore;
        myback = colFore;
        if (mycount >= 4) {
            window.clearInterval(h_blink)
        }
    } else {
        myf.style.backgroundColor = myback;
        myback = colBack;
        myf.style.color = myback
    }
    mycount++
}

function ResetDate(b) {
    if (!b) {
        b = document.vSearch
    }
    b.cb_sd.selectedIndex = 0;
    b.cb_smy.selectedIndex = 0;
    b.cb_ed.selectedIndex = 0;
    b.cb_emy.selectedIndex = 0;
    b.sd.value = "";
    b.sm.value = "";
    b.sy.value = "";
    b.ed.value = "";
    b.em.value = "";
    b.ey.value = ""
}

function CheckDate(b) {
    if (!b) {
        b = document.vSearch
    }
    set_cookies_onsubmit(b);
    if ((b.chk_city == null) || (b.chk_city[1].checked)) {
        if (!check_city(b)) {
            return false
        }
        if (!_CheckDate(b)) {
            return false
        }
    } else {
        if (!_CheckDate(b)) {
            return false
        }
    }
    return true
}

function _CheckDate(h) {
    var v = new Date();
    var t = v.getDate();
    var w = v.getMonth() + 1;
    var k = v.getFullYear();
    if (!h) {
        h = document.vSearch
    }
    sel_sd = h.cb_sd;
    sel_smy = h.cb_smy;
    sel_ed = h.cb_ed;
    sel_emy = h.cb_emy;
    sel_pval = h.pval;
    sel_rval = h.rval;
    if (typeof (err_wrong_ci_date) != "string") {
        err_wrong_ci_date = "The check-in date you entered is not valid."
    }
    if (typeof (err_wrong_co_date) != "string") {
        err_wrong_co_date = "The check-out date you entered is not valid."
    }
    if (typeof (err_wrong_ci_90max) != "string") {
        err_wrong_ci_90max = "The maximum length of your stay cannot exceed 90 days."
    }
    if (typeof (err_co_before_ci) != "string") {
        err_co_before_ci = "The check-in date must be before the check-out date."
    }
    if (typeof (err_room_le_person) != "string") {
        err_room_le_person = "Number of persons must be greater or equal of number of rooms"
    }
    if (typeof (err_person_number) != "string") {
        err_person_number = "Please specify the number of persons"
    }
    if (typeof (err_room_number) != "string") {
        err_room_number = "Please specify the number of rooms"
    }
    if (!((sel_sd.selectedIndex == 0) && (sel_smy.selectedIndex == 0) && (sel_ed.selectedIndex == 0) && (sel_emy.selectedIndex == 0) && (sel_pval.selectedIndex == 0) && (sel_rval.selectedIndex == 0))) {
        if (!CheckPR(h)) {
            return false
        }
        var x = sel_sd.value;
        var g = new String(sel_smy.value).split("/");
        var b = new Number(g[0]);
        var s = new Number(g[1]);
        var e = sel_sd.options[sel_sd.selectedIndex].value;
        var z = g[0];
        var q = g[1];
        var m = sel_ed.value;
        var l = new String(sel_emy.value).split("/");
        var n = new Number(l[0]);
        var o = new Number(l[1]);
        var j = sel_ed.options[sel_ed.selectedIndex].value;
        var f = l[0];
        var y = l[1];
        if (e == 0 || sel_smy.selectedIndex == 0) {
            alert(err_wrong_ci_date);
            return false
        }
        if (j == 0 || sel_emy.selectedIndex == 0) {
            alert(err_wrong_co_date);
            return false
        }
        if ((x == 31 && ((b == 4) || (b == 6) || (b == 9) || (b == 11))) || ((x > 29) && (b == 2)) || ((s % 4 != 0) && (b == 2) && (x > 28))) {
            alert(err_wrong_ci_date);
            return false
        }
        if (b == w && s == k && x < t) {
            alert(err_wrong_ci_date);
            return false
        }
        if ((m == 31) && ((n == 4) || (n == 6) || (n == 9) || (n == 11)) || ((m > 29) && (n == 2)) || ((o % 4 != 0) && (n == 2) && (m > 28))) {
            alert(err_wrong_co_date);
            return false
        }
        var d = new Date(s, b - 1, x);
        var u = new Date(o, n - 1, m);
        var c = 90 * 24 * 3600 * 1000;
        if (u.getTime() - d.getTime() > c) {
            alert(err_wrong_ci_90max);
            return false
        } else {
            if (u.getTime() - d.getTime() <= 0) {
                alert(err_co_before_ci);
                return false
            }
        }
        h.sd.value = e;
        h.sm.value = z;
        h.sy.value = q;
        h.ed.value = j;
        h.em.value = f;
        h.ey.value = y;
        return true
    }
    return true
}

function clearAll(b) {
    b.cb_sd.selectedIndex = 0;
    b.cb_smy.selectedIndex = 0;
    b.cb_ed.selectedIndex = 0;
    b.cb_emy.selectedIndex = 0;
    b.pval.selectedIndex = 0;
    b.rval.selectedIndex = 0
}

function checkSelNum(b) {
    if (b != null && b.selectedIndex == 0) {
        clearAll(b.form);
        return true
    }
}

function StartDateCheck(d) {
    if (d != null && d.selectedIndex == 0) {
        clearAll(d.form);
        return true
    }
    var c = !d ? document.vSearch : d.form;
    if (!c) {
        c = document.vSearch
    }
    var m = new Date();
    var n = m.getDate();
    var k = m.getMonth() + 1;
    var l = m.getFullYear();
    var h = c.cb_sd.selectedIndex;
    if (h == 0) {
        return true
    }
    var f = c.cb_smy.selectedIndex;
    if (f == 0) {
        return true
    }
    var o = new String(c.cb_smy[f].value).split("/");
    var b = new Number(o[0]);
    var j = new Number(o[1]);
    if (h == 31) {
        if ((b == 4) || (b == 6) || (b == 9) || (b == 11)) {
            h = 30
        }
    }
    if ((h > 29) && (b == 2)) {
        h = 29
    }
    if ((j % 4 != 0) && (b == 2) && (h > 28)) {
        h = 28
    }
    if (b == k && j == l) {
        if (h < n) {
            h = n
        }
    }
    c.cb_sd.selectedIndex = h;
    var e = h + 1;
    var q = b;
    var g = j;
    if (e > 31) {
        e = -1
    }
    if (e == 31) {
        if ((q == 4) || (q == 6) || (q == 9) || (q == 11)) {
            e = -1
        }
    }
    if ((e > 29) && (q == 2)) {
        e = -1
    }
    if ((g % 4 != 0) && (q == 2) && (e > 28)) {
        e = -1
    }
    if (e == -1) {
        e = 1;
        f = f + 1
    }
    if (f >= c.cb_emy.options.length) {
        e = c.cb_sd.selectedIndex;
        f = c.cb_smy.selectedIndex
    }
    if (c.cb_ed.selectedIndex == 0 && c.cb_emy.selectedIndex == 0) {
        c.cb_ed.selectedIndex = e;
        c.cb_emy.selectedIndex = f
    }
    if (c.cb_sd.selectedIndex > 0 && c.cb_smy.selectedIndex && c.cb_ed.selectedIndex > 0 && c.cb_emy.selectedIndex > 0 && c.pval.selectedIndex == 0 && c.rval.selectedIndex == 0) {
        c.pval.selectedIndex = 2;
        c.rval.selectedIndex = 1
    }
}

function EndDateCheck(d) {
    if (d != null && d.selectedIndex == 0) {
        clearAll(d.form);
        return true
    }
    var l = new Date();
    var n = l.getDate();
    var h = l.get = l.getMonth() + 1;
    var k = l.getFullYear();
    if (!d) {
        myf = document.vSearch
    } else {
        myf = d.form
    } if (!myf) {
        myf = document.vSearch
    }
    myed = myf.cb_ed.selectedIndex;
    if (myed == 0) {
        return true
    }
    tmp = myf.cb_emy.selectedIndex;
    if (tmp == 0) {
        return true
    }
    var o = new String(myf.cb_emy[tmp].value).split("/");
    var s = new Number(o[0]);
    var e = new Number(o[1]);
    if (myed == 31) {
        if ((s == 4) || (s == 6) || (s == 9) || (s == 11)) {
            myed = 30
        }
    }
    if ((myed > 29) && (s == 2)) {
        myed = 29
    }
    if ((e % 4 != 0) && (s == 2) && (myed > 28)) {
        myed = 28
    }
    if (s == h && e == k) {
        if (myed < n) {
            myed = n
        }
    }
    var q = new String(myf.cb_smy.value).split("/");
    var c = new Number(q[0]);
    var m = new Number(q[1]);
    var j = myf.cb_sd.value;
    var b = new Date(m, c - 1, j);
    var f = new Date(e, s - 1, myed);
    var g = 90 * 24 * 3600 * 1000;
    if (f.getTime() - b.getTime() > g) {
        f.setTime(b.getTime() + g);
        myed = String(f.getDate());
        while (myed.length < 2) {
            myed = String("0") + myed
        }
        s = String(f.getMonth() + 1);
        while (s.length < 2) {
            s = String("0") + s
        }
        e = String(f.getFullYear());
        myf.cb_emy.value = String(s) + "/" + e
    }
    myf.cb_ed.selectedIndex = myed
}

function CheckSearchForm(b) {
    sel_sd = myf.cb_sd.selectedIndex;
    sel_smy = myf.cb_smy.selectedIndex;
    sel_ed = myf.cb_ed.selectedIndex;
    sel_emy = myf.cb_emy.selectedIndex;
    sel_pval = myf.pval.selectedIndex;
    sel_rval = myf.rval.selectedIndex
}

function Sel(e, f, d, b) {
    if (!b) {
        b = document.vSearch
    }
    if (e == "") {
        b.city.value = b.txtCity.value;
        var c = 0;
        if (b.myc) {
            do {
                b.myc[c].checked = false
            } while (++c < b.myc.length)
        }
        b.city.value = b.txtCity.value
    } else {
        b.city.value = e;
        b.txtCity.value = e
    } if (d == "selgeoid") {
        b.geoid.value = f
    }
    b.geoid.value = f
}

function set_null(b) {
    if (!b) {
        b = document.vSearch
    }
    b.geoid.value = 0
}

function set_null_selgeoid(b) {
    if (!b) {
        b = document.vSearch
    }
    b.geoid.value = ""
}

function check_city(b) {
    if (!b) {
        b = document.vSearch
    }
    if (b.txtCity.value.length == 0) {
        alert(err_textcity);
        return false
    }
    return true
}

function _Check_city(b) {
    if (!b) {
        b = document.vSearch
    }
    if (b.city.value.length == 0) {
        if (typeof (err_textcity) != "string") {
            err_textcity = "Insert a destination"
        }
        alert(err_textcity);
        return false
    }
    return true
}

function getday(h) {
    var m = 2;
    var d = new Date();
    var j = d.getYear();
    if (j < 1000) {
        j += 1900
    }
    var k = new Date(j, d.getMonth(), d.getDate() + 1);
    var j = k.getYear();
    if (j < 1000) {
        j += 1900
    }
    var o = new Date(j, k.getMonth(), k.getDate() + m);
    var b = o.getYear();
    if (b < 1000) {
        b += 1900
    }
    var e = k.getDate();
    var g = (k.getMonth() + 1) + "/" + j;
    var n = k.getMonth() + 1;
    if ((k.getMonth() + 1) < 10) {
        g = "0" + g
    }
    if (e < 10) {
        e = "0" + e
    }
    var c = o.getDate();
    var f = (o.getMonth() + 1) + "/" + b;
    var l = o.getMonth() + 1;
    if ((o.getMonth() + 1) < 10) {
        f = "0" + f
    }
    if (c < 10) {
        c = "0" + c
    }
    setvalues(h, e, g, c, f, 2, 1);
    setvalues_hidden(h, e, n, j, c, l, b, 2, 1);
    SetCookie(e, g, c, f, 2, 1)
}

function setvalues(f, e, h, c, b, d, g) {
    f.cb_sd.value = e;
    f.cb_smy.value = h;
    f.cb_ed.value = c;
    f.cb_emy.value = b;
    f.pval.value = d;
    f.rval.value = g
}

function setvalues_hidden(e, h, d, j, f, b, g, k, c) {
    e.sd.value = h;
    e.sm.value = d;
    e.sy.value = j;
    e.ed.value = f;
    e.em.value = b;
    e.ey.value = g;
    e.pval.value = k;
    e.rval.value = c
}

function setAvailabilityCookies(g, k, f, j, l, c) {
    var e = k.substring(3) + k.substring(0, 2) + g;
    var d = j.substring(3) + j.substring(0, 2) + f;
    var h = /^\d{8},\d{8},\d+,\d+$/;
    var b = e + "," + d + "," + l + "," + c;
    if (h.test(b)) {
        setVenereCookie("cavail", b, 3600)
    }
}

function getCookieVal(c) {
    var b = document.cookie.indexOf(";", c);
    if (b == -1) {
        b = document.cookie.length
    }
    return document.cookie.substring(c, b)
}

function GetCookie(e) {
    var c = e + "=";
    var g = c.length;
    var b = document.cookie.length;
    var f = 0;
    while (f < b) {
        var d = f + g;
        if (document.cookie.substring(f, d) == c) {
            return getCookieVal(d)
        }
        f = document.cookie.indexOf(" ", f) + 1;
        if (f == 0) {
            break
        }
    }
    return null
}

function EraseCooKie(b) {
    setVenereCookie("savail[" + b + "]", null, -1000 * 24 * 60 * 60)
}

function cookieControll(d) {
    var e = d.cb_sd.value;
    var f = d.cb_smy.value;
    var c = d.cb_ed.value;
    var b = d.cb_emy.value;
    if (!e && !f && !c && !b) {
        EraseCooKie("_sd");
        EraseCooKie("_smy");
        EraseCooKie("_ed");
        EraseCooKie("_emy");
        EraseCooKie("_pv");
        EraseCooKie("_rv")
    } else {
        set_cookies_onsubmit(d)
    }
}

function getArgs() {
    var c = new Object();
    var g = location.search.substring(1);
    var f = g.split("&");
    for (var d = 0; d < f.length; d++) {
        var h = f[d].indexOf("=");
        if (h == -1) {
            continue
        }
        var b = f[d].substring(0, h);
        var e = f[d].substring(h + 1);
        c[b] = e
    }
    return c
}

function check_cookies_onload(d) {
    query_params = getArgs();
    if (query_params.sd && query_params.sm && query_params.sy && query_params.ed && query_params.em && query_params.ey && query_params.pval && query_params.rval) {
        sd = query_params.sd;
        while (sd.length < 2) {
            sd = "0" + String(sd)
        }
        smy = query_params.sm + "/" + query_params.sy;
        ed = query_params.ed;
        while (ed.length < 2) {
            ed = "0" + String(ed)
        }
        emy = query_params.em + "/" + query_params.ey;
        pv = query_params.pval;
        rv = query_params.rval;
        setvalues(d, sd, smy, ed, emy, pv, rv)
    } else {
        if (query_params.checkin && (query_params.checkout || query_params.nights)) {
            var c = query_params.checkin;
            sd = c.substr(8, 2);
            smy = c.substr(5, 2) + "/" + c.substr(0, 4);
            if (query_params.checkout) {
                var b = query_params.checkout;
                ed = b.substr(8, 2);
                emy = b.substr(5, 2) + "/" + b.substr(0, 4)
            } else {
                ed = "";
                emy = ""
            }
            pv = 2;
            rv = 1;
            setvalues(d, sd, smy, ed, emy, pv, rv)
        }
        if (!query_params.checkin && !query_params.sd) {
            if (visit = GetCookie("savail[_sd]")) {
                sd = GetCookie("savail[_sd]");
                smy = GetCookie("savail[_smy]");
                ed = GetCookie("savail[_ed]");
                emy = GetCookie("savail[_emy]");
                pv = GetCookie("savail[_pv]");
                rv = GetCookie("savail[_rv]");
                setvalues(d, sd, smy, ed, emy, pv, rv)
            }
        }
    }
}

function set_cookies_onsubmit(d) {
    sd = d.cb_sd.value;
    smy = d.cb_smy.value;
    ed = d.cb_ed.value;
    emy = d.cb_emy.value;
    pv = d.pval.value;
    rv = d.rval.value;
    var b = "" + sd;
    var c = "" + ed;
    if (b.length == 1) {
        sd = "0" + sd
    }
    if (c.length == 1) {
        ed = "0" + ed
    }
    if (smy.length == 6) {
        smy = "0" + smy
    }
    if (emy.length == 6) {
        emy = "0" + emy
    }
    setAvailabilityCookies(sd, smy, ed, emy, pv, rv)
}

function EraseCookies() {
    EraseCooKie("_sd");
    EraseCooKie("_smy");
    EraseCooKie("_ed");
    EraseCooKie("_emy");
    EraseCooKie("_pv");
    EraseCooKie("_rv")
}

function check_email(b) {
    ok = "1234567890qwertyuiop[]asdfghjklzxcvbnm.@-_QWERTYUIOPASDFGHJKLZXCVBNM";
    for (i = 0; i < b.length; i++) {
        if (ok.indexOf(b.charAt(i)) < 0) {
            return (false)
        }
    }
    if (document.images) {
        re = /(@.*@)|(\.\.)|(^\.)|(^@)|(@$)|(\.$)|(@\.)/;
        re_two = /^.+\@(\[?)[a-zA-Z0-9\-\.]+\.([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        if (!b.match(re) && b.match(re_two)) {
            return (-1)
        }
    }
}

function check_form(b) {
    if (!check_email(b.email.value)) {
        alert("Invalid email detected, please retype it!");
        b.email.focus();
        if (document.all || document.getElementByID) {
            b.email.style.background = "yellow"
        }
        return false
    }
    return true
}

function OC(d, g, c, b, e, f) {
    WOpen("/cgi/ihr/vcom/calendar.php?name_form=" + d + "&inout=" + g + "&lg=" + c + "&mese=" + b + "&anno=" + e + "&gi=0&load=1&dg=" + f + "&dm=" + b + "&da=" + e, "", "top=300,left=300,location=0,height=158,width=150,scrollbars=0,status=0,resizable=0");
    void(0)
}
if (typeof (utility_funcs_loaded) == "undefined" || !utility_funcs_loaded) {
    function includeUtilityFuncsJS() {
        var b = document.getElementsByTagName("head")[0];
        var c = document.createDocumentFragment();
        var d = document.createElement("script");
        d.setAttribute("src", "/common/js/utility_funcs.js");
        c.appendChild(d);
        b.appendChild(c)
    }

    function addEventHandler(c, d, b) {
        if (c.addEventListener) {
            c.addEventListener(d, b, false)
        } else {
            if (c.attachEvent) {
                c.attachEvent("on" + d, b)
            } else {
                c["on" + d] = b
            }
        }
    }
    addEventHandler(window, "load", includeUtilityFuncsJS)
}

function execSearchTracking(b) {
    if (typeof window.track_site_search_widget == "function") {
        window.track_site_search_widget(b)
    }
    return true
}
Date.$VERSION = 1.02;
Date.LZ = function (b) {
    return (b < 0 || b > 9 ? "" : "0") + b
};
Date.monthNames = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
Date.monthAbbreviations = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
Date.dayNames = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
Date.dayAbbreviations = new Array("Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat");
Date.preferAmericanFormat = true;
if (!Date.prototype.getFullYear) {
    Date.prototype.getFullYear = function () {
        var b = this.getYear();
        return (b < 1900 ? b + 1900 : b)
    }
}
Date.parseString = function (K, D) {
    if (typeof (D) == "undefined" || D == null || D == "") {
        var q = new Array("y-M-d", "MMM d, y", "MMM d,y", "y-MMM-d", "d-MMM-y", "MMM d", "MMM-d", "d-MMM");
        var e = new Array("M/d/y", "M-d-y", "M.d.y", "M/d", "M-d");
        var o = new Array("d/M/y", "d-M-y", "d.M.y", "d/M", "d-M");
        var f = new Array(q, Date.preferAmericanFormat ? e : o, Date.preferAmericanFormat ? o : e);
        for (var B = 0; B < f.length; B++) {
            var z = f[B];
            for (var A = 0; A < z.length; A++) {
                var E = Date.parseString(K, z[A]);
                if (E != null) {
                    return E
                }
            }
        }
        return null
    }
    this.isInteger = function (d) {
        for (var c = 0; c < d.length; c++) {
            if ("1234567890".indexOf(d.charAt(c)) == -1) {
                return false
            }
        }
        return true
    };
    this.getInt = function (L, l, y, j) {
        for (var c = j; c >= y; c--) {
            var d = L.substring(l, l + c);
            if (d.length < y) {
                return null
            }
            if (this.isInteger(d)) {
                return d
            }
        }
        return null
    };
    K = K + "";
    D = D + "";
    var J = 0;
    var u = 0;
    var G = "";
    var h = "";
    var I = "";
    var m, k;
    var n = new Date().getFullYear();
    var H = 1;
    var F = 1;
    var b = 0;
    var C = 0;
    var w = 0;
    var t = "";
    while (u < D.length) {
        G = D.charAt(u);
        h = "";
        while ((D.charAt(u) == G) && (u < D.length)) {
            h += D.charAt(u++)
        }
        if (h == "yyyy" || h == "yy" || h == "y") {
            if (h == "yyyy") {
                m = 4;
                k = 4
            }
            if (h == "yy") {
                m = 2;
                k = 2
            }
            if (h == "y") {
                m = 2;
                k = 4
            }
            n = this.getInt(K, J, m, k);
            if (n == null) {
                return null
            }
            J += n.length;
            if (n.length == 2) {
                if (n > 70) {
                    n = 1900 + (n - 0)
                } else {
                    n = 2000 + (n - 0)
                }
            }
        } else {
            if (h == "MMM" || h == "NNN") {
                H = 0;
                var s = (h == "MMM" ? (Date.monthNames.concat(Date.monthAbbreviations)) : Date.monthAbbreviations);
                for (var B = 0; B < s.length; B++) {
                    var g = s[B];
                    if (K.substring(J, J + g.length).toLowerCase() == g.toLowerCase()) {
                        H = (B % 12) + 1;
                        J += g.length;
                        break
                    }
                }
                if ((H < 1) || (H > 12)) {
                    return null
                }
            } else {
                if (h == "EE" || h == "E") {
                    var s = (h == "EE" ? Date.dayNames : Date.dayAbbreviations);
                    for (var B = 0; B < s.length; B++) {
                        var v = s[B];
                        if (K.substring(J, J + v.length).toLowerCase() == v.toLowerCase()) {
                            J += v.length;
                            break
                        }
                    }
                } else {
                    if (h == "MM" || h == "M") {
                        H = this.getInt(K, J, h.length, 2);
                        if (H == null || (H < 1) || (H > 12)) {
                            return null
                        }
                        J += H.length
                    } else {
                        if (h == "dd" || h == "d") {
                            F = this.getInt(K, J, h.length, 2);
                            if (F == null || (F < 1) || (F > 31)) {
                                return null
                            }
                            J += F.length
                        } else {
                            if (h == "hh" || h == "h") {
                                b = this.getInt(K, J, h.length, 2);
                                if (b == null || (b < 1) || (b > 12)) {
                                    return null
                                }
                                J += b.length
                            } else {
                                if (h == "HH" || h == "H") {
                                    b = this.getInt(K, J, h.length, 2);
                                    if (b == null || (b < 0) || (b > 23)) {
                                        return null
                                    }
                                    J += b.length
                                } else {
                                    if (h == "KK" || h == "K") {
                                        b = this.getInt(K, J, h.length, 2);
                                        if (b == null || (b < 0) || (b > 11)) {
                                            return null
                                        }
                                        J += b.length;
                                        b++
                                    } else {
                                        if (h == "kk" || h == "k") {
                                            b = this.getInt(K, J, h.length, 2);
                                            if (b == null || (b < 1) || (b > 24)) {
                                                return null
                                            }
                                            J += b.length;
                                            b--
                                        } else {
                                            if (h == "mm" || h == "m") {
                                                C = this.getInt(K, J, h.length, 2);
                                                if (C == null || (C < 0) || (C > 59)) {
                                                    return null
                                                }
                                                J += C.length
                                            } else {
                                                if (h == "ss" || h == "s") {
                                                    w = this.getInt(K, J, h.length, 2);
                                                    if (w == null || (w < 0) || (w > 59)) {
                                                        return null
                                                    }
                                                    J += w.length
                                                } else {
                                                    if (h == "a") {
                                                        if (K.substring(J, J + 2).toLowerCase() == "am") {
                                                            t = "AM"
                                                        } else {
                                                            if (K.substring(J, J + 2).toLowerCase() == "pm") {
                                                                t = "PM"
                                                            } else {
                                                                return null
                                                            }
                                                        }
                                                        J += 2
                                                    } else {
                                                        if (K.substring(J, J + h.length) != h) {
                                                            return null
                                                        } else {
                                                            J += h.length
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    if (J != K.length) {
        return null
    }
    if (H == 2) {
        if (((n % 4 == 0) && (n % 100 != 0)) || (n % 400 == 0)) {
            if (F > 29) {
                return null
            }
        } else {
            if (F > 28) {
                return null
            }
        }
    }
    if ((H == 4) || (H == 6) || (H == 9) || (H == 11)) {
        if (F > 30) {
            return null
        }
    }
    if (b < 12 && t == "PM") {
        b = b - 0 + 12
    } else {
        if (b > 11 && t == "AM") {
            b -= 12
        }
    }
    return new Date(n, H - 1, F, b, C, w)
};
Date.isValid = function (c, b) {
    return (Date.parseString(c, b) != null)
};
Date.prototype.isBefore = function (b) {
    if (b == null) {
        return false
    }
    return (this.getTime() < b.getTime())
};
Date.prototype.isAfter = function (b) {
    if (b == null) {
        return false
    }
    return (this.getTime() > b.getTime())
};
Date.prototype.equals = function (b) {
    if (b == null) {
        return false
    }
    return (this.getTime() == b.getTime())
};
Date.prototype.equalsIgnoreTime = function (d) {
    if (d == null) {
        return false
    }
    var c = new Date(this.getTime()).clearTime();
    var b = new Date(d.getTime()).clearTime();
    return (c.getTime() == b.getTime())
};
Date.prototype.format = function (J) {
    J = J + "";
    var o = "";
    var A = 0;
    var N = "";
    var g = "";
    var n = this.getYear() + "";
    var j = this.getMonth() + 1;
    var L = this.getDate();
    var t = this.getDay();
    var q = this.getHours();
    var C = this.getMinutes();
    var v = this.getSeconds();
    var x, z, e, w, O, f, I, G, D, u, Q, q, P, l, b, F;
    var B = new Object();
    if (n.length < 4) {
        n = "" + (+n + 1900)
    }
    B.y = "" + n;
    B.yyyy = n;
    B.yy = n.substring(2, 4);
    B.M = j;
    B.MM = Date.LZ(j);
    B.MMM = Date.monthNames[j - 1];
    B.NNN = Date.monthAbbreviations[j - 1];
    B.d = L;
    B.dd = Date.LZ(L);
    B.E = Date.dayAbbreviations[t];
    B.EE = Date.dayNames[t];
    B.H = q;
    B.HH = Date.LZ(q);
    if (q == 0) {
        B.h = 12
    } else {
        if (q > 12) {
            B.h = q - 12
        } else {
            B.h = q
        }
    }
    B.hh = Date.LZ(B.h);
    B.K = B.h - 1;
    B.k = B.H + 1;
    B.KK = Date.LZ(B.K);
    B.kk = Date.LZ(B.k);
    if (q > 11) {
        B.a = "PM"
    } else {
        B.a = "AM"
    }
    B.m = C;
    B.mm = Date.LZ(C);
    B.s = v;
    B.ss = Date.LZ(v);
    while (A < J.length) {
        N = J.charAt(A);
        g = "";
        while ((J.charAt(A) == N) && (A < J.length)) {
            g += J.charAt(A++)
        }
        if (typeof (B[g]) != "undefined") {
            o = o + B[g]
        } else {
            o = o + g
        }
    }
    return o
};
Date.prototype.getDayName = function () {
    return Date.dayNames[this.getDay()]
};
Date.prototype.getDayAbbreviation = function () {
    return Date.dayAbbreviations[this.getDay()]
};
Date.prototype.getMonthName = function () {
    return Date.monthNames[this.getMonth()]
};
Date.prototype.getMonthAbbreviation = function () {
    return Date.monthAbbreviations[this.getMonth()]
};
Date.prototype.clearTime = function () {
    this.setHours(0);
    this.setMinutes(0);
    this.setSeconds(0);
    this.setMilliseconds(0);
    return this
};
Date.prototype.add = function (b, d) {
    if (typeof (b) == "undefined" || b == null || typeof (d) == "undefined" || d == null) {
        return this
    }
    d = +d;
    if (b == "y") {
        this.setFullYear(this.getFullYear() + d)
    } else {
        if (b == "M") {
            this.setMonth(this.getMonth() + d)
        } else {
            if (b == "d") {
                this.setDate(this.getDate() + d)
            } else {
                if (b == "w") {
                    var c = (d > 0) ? 1 : -1;
                    while (d != 0) {
                        this.add("d", c);
                        while (this.getDay() == 0 || this.getDay() == 6) {
                            this.add("d", c)
                        }
                        d -= c
                    }
                } else {
                    if (b == "h") {
                        this.setHours(this.getHours() + d)
                    } else {
                        if (b == "m") {
                            this.setMinutes(this.getMinutes() + d)
                        } else {
                            if (b == "s") {
                                this.setSeconds(this.getSeconds() + d)
                            }
                        }
                    }
                }
            }
        }
    }
    return this
};
vcomSv = "http://www.venere.com";
vcomCp = "/aboutus/";
vcomCpWOpt = "width=700,height=400,scrollbars=1,status=0,resize=0";

function WOpen(g, f, e, h, b, j, c, d) {
    if (!e) {
        e = ""
    }
    e += h ? (e ? "," : "") + "width=" + h : "";
    e += b ? (e ? "," : "") + "height=" + b : "";
    e += j !== (void 0) ? (e ? "," : "") + "scrollbars=" + j : "";
    e += c !== (void 0) ? (e ? "," : "") + "status=" + c : "";
    e += d !== (void 0) ? (e ? "," : "") + "resizable=" + d : "";
    new_w = window.open(g, f, e);
    if (new_w) {
        new_w.focus()
    }
}

function GoTo_old(b) {
    location.href = b;
    return void 0
}

function empty(b) {
    return b == null || b == ""
}

function buildQueryObj(f) {
    if (f == null || f == "") {
        f = window.location.search
    }
    var d = new Object();
    if (f.length > 0 && f.charAt(0) == "?") {
        f = f.substr(1)
    }
    var b = f.split("&");
    var c;
    for (c = 0; c < b.length; c++) {
        var e = b[c].split("=");
        if (e[0].length > 0) {
            d[e[0]] = e.length > 1 ? e[1] : ""
        }
    }
    return d
}

function buildQueryStr(c, d) {
    var f = "";
    for (var b in c) {
        if (typeof (c[b]) == "function") {
            continue
        }
        f += f == "" ? "?" : "&";
        var e = d ? encodeURIComponent(c[b]) : c[b];
        f += b + "=" + (e != "null" ? e : "")
    }
    return f
}

function setParam() {
    var e = buildQueryObj(window.location.search);
    for (var c = 0; c < setParam.arguments.length; c += 2) {
        var b = setParam.arguments[c];
        var d = setParam.arguments[c + 1];
        e[b] = d
    }
    window.location = window.location.pathname + buildQueryStr(e)
}

function setParamWithAnchor(c) {
    var f = buildQueryObj(window.location.search);
    for (var d = 1; d < setParamWithAnchor.arguments.length; d += 2) {
        var b = setParamWithAnchor.arguments[d];
        var e = setParamWithAnchor.arguments[d + 1];
        f[b] = e
    }
    window.location = window.location.pathname + buildQueryStr(f) + "#" + c
}

function delParam() {
    var d = buildQueryObj(window.location.search);
    for (var c = 0; c < delParam.arguments.length; c++) {
        var b = delParam.arguments[c];
        delete d[b]
    }
    window.location = window.location.pathname + buildQueryStr(d)
}

function delSetParam(e, d, j) {
    var g = buildQueryObj(window.location.search);
    var h = "";
    var b = false;
    for (var c in g) {
        if (c != e) {
            var f = "";
            if (c != d) {
                f = g[c]
            } else {
                b = true;
                f = j
            } if (f != "") {
                h += h.length == 0 ? "?" : "&";
                h += c + "=" + f
            }
        }
    }
    if (!b) {
        h += (h.length == 0 ? "?" : "&") + d + "=" + j
    }
    window.location = window.location.pathname + h
}

function delAvail() {
    delParam("sd", "sm", "sy", "ed", "em", "ey", "pval", "rval")
}

function setM(c, b) {
    setQuery("/search/", "geoid", c, "view", "map", "type", "", "seltype", "ALL", "city_area", b)
}

function setQuery() {
    var f = setQuery.arguments.length > 0 ? setQuery.arguments[0] : null;
    if (f == null || f == "") {
        f = window.location.pathname
    }
    var e = buildQueryObj();
    for (var c = 1; c < setQuery.arguments.length; c += 2) {
        var b = setQuery.arguments[c];
        var d = setQuery.arguments[c + 1];
        e[b] = d
    }
    window.location = f + buildQueryStr(e)
}

function setCookie(e, g, f, b) {
    var c = new Date();
    var d = e + "=" + g;
    if (f != null) {
        c.setSeconds(f);
        d += "; expires=" + c.toGMTString()
    }
    if (b != null) {
        d += "; path=" + b
    }
    document.cookie = d
}

function getCookie(e) {
    var c = document.cookie.split("; ");
    for (var d = 0; d < c.length; d++) {
        var b = c[d].split("=");
        if (e == b[0]) {
            return b[1]
        }
    }
    return ""
}

function TrackCount(b, d, c) {
    var e = c - b.value.length;
    if (e < 0) {
        b.value = b.value.substring(0, c);
        e = c - b.value.length
    }
    if (d) {
        d.value = e
    }
}

function LimitText(c, d) {
    var b = true;
    if (c.value.length >= d) {
        b = false
    }
    if (window.event) {
        window.event.returnValue = b
    }
    return b
}

function padZero(b) {
    while (b.length < 2) {
        b = String("0") + b
    }
    return b
}

function replaceRGValUrl(g) {
    if (window.history.replaceState) {
        var c = window.location.href;
        var h = c.lastIndexOf("?");
        if (h > -1) {
            var f = [];
            var j = c.substr(h + 1).split("&");
            var e, l;
            for (var d in j) {
                e = j[d].split("=")[0];
                l = j[d].split("=")[1];
                if (e === "rgval") {
                    l = g
                }
                f.push(e + "=" + l)
            }
            var b = f.join("&");
            window.history.replaceState("object or string", "new_cookie", "?" + b)
        }
    }
}

function rgvalToLegacy(d) {
    function h(m) {
        var l = m.split("|");
        return l
    }

    function f(m) {
        var n = m.split("|");
        var l = [];
        for (var o = 0; o < n.length; o++) {
            if (n[o] == "-1") {
                l.push([])
            } else {
                l.push(n[o].split("_"))
            }
        }
        return l
    }
    var j = d.split("||");
    var g = h(j[0]);
    var k = f(j[1]);
    var e = g.length;
    var c = 0;
    for (var b = 0; b < e; b++) {
        c += Number(g[b]);
        c += Number(k[b].length)
    }
    return {
        rval: e,
        pval: c
    }
}

function getRgvalFromPvalRval(h, g) {
    var f = new Array(g);
    var b = new Array(g);
    for (var e = 0; e < g; e++) {
        f[e] = 0;
        b[e] = -1
    }
    while (h > 0) {
        for (var c = 0; c < g; c++) {
            if (h > 0) {
                f[c] += 1;
                h--
            } else {
                break
            }
        }
    }
    var d = f.join("|") + "||" + b.join("|");
    if (d.match("^(((([1-9]|10)\\|){0,8}([1-9]|10))\\|\\|(((-1|((([0-9]|1[0-7])_){0,5}([0-9]|1[0-7])))\\|){0,8}(-1|((([0-9]|1[0-7])_){0,5}([0-9]|1[0-7])))))$")) {
        return d
    } else {
        return "2||-1"
    }
}

function CookieManager() {}
CookieManager.prototype = {
    getCookieValue: function (c, f, d) {
        var e = "";
        if (c.length > 0) {
            var b = this.getCookieArrayByString(c, d);
            if (typeof (b[f]) != "undefined") {
                e = b[f]
            }
        }
        return e
    },
    getTrimValue: function (b) {
        return (b.replace(/^[ ]+/, "").replace(/[ ]+$/, ""))
    },
    getCookieArrayByString: function (e, g) {
        var d = e.split(g);
        var b = new Array();
        for (var c in d) {
            var f = d[c].split("=");
            b[this.getTrimValue(f[0])] = f[1]
        }
        return b
    },
    getCookieStringByArray: function (b, e) {
        var d = "";
        for (var c in b) {
            if (d == "") {
                d += c + "=" + b[c]
            } else {
                d += e + c + "=" + b[c]
            }
        }
        return d
    },
    updateCookie: function (j, h, e, g) {
        if (h != "") {
            var c = "";
            this.deleteCookie(j);
            var b = this.getCookieArrayByString(h, g);
            for (var f in e) {
                b[f] = e[f]
            }
            var d = this.getCookieStringByArray(b, g);
            if (d.length == 0) {
                c = ";expires=Thu, 01-Jan-70 00:00:01 GMT"
            }
            document.cookie = j + "=" + encodeURIComponent(d) + ";path=/;domain=.venere.com" + c
        } else {
            this.createCookie(j, e, g)
        }
    },
    createCookie: function (e, b, d) {
        var c = this.getCookieStringByArray(b, d);
        if (c.length == 0) {
            return
        }
        document.cookie = e + "=" + encodeURIComponent(c) + ";path=/;domain=.venere.com"
    },
    deleteCookie: function (b) {
        document.cookie = b + "=;path=/;domain=.venere.com;expires=Thu, 01-Jan-70 00:00:01 GMT"
    },
    unsetCookieValue: function (h, e, f) {
        var g = this.getCookieValue(document.cookie, h, ";");
        if (g != "") {
            var c = "";
            this.deleteCookie(h);
            var b = this.getCookieArrayByString(decodeURIComponent(g), f);
            delete b[e];
            var d = this.getCookieStringByArray(b, f);
            if (d.length == 0) {
                c = ";expires=Thu, 01-Jan-70 00:00:01 GMT"
            }
            document.cookie = h + "=" + encodeURIComponent(d) + ";path=/;domain=.venere.com" + c
        }
    }
};
var userAgentSniffer = {
    resourceService: "/passthru/ajax/get_responsive_resource.php",
    requiredVersion: "v.55.53132.res",
    sniff: function (d, c) {
        try {
            if (this.getMobileUserAgent() != null) {
                $.ajaxSetup({
                    async: false
                });
                var e = c ? "&opt=" + JSON.stringify(c) : "";
                var f = {
                    type: "GET",
                    url: this.resourceService,
                    data: "abp=" + v_abp + "&context=" + d + "&lg=" + this.getPageLanguage() + "&v=_" + this.requiredVersion.substr(3) + e,
                    dataType: "json",
                    success: function (h) {
                        if (!h.success) {
                            return
                        }
                        var g = {
                            mlg: null,
                            html: null,
                            html_res: null
                        };
                        if (typeof h.mlg != "undefined" && h.mlg != null) {
                            g.mlg = h.mlg
                        }
                        if (typeof h.html != "undefined" && h.html != null) {
                            g.html = h.html
                        }
                        if (typeof h.html_res != "undefined" && h.html_res != null) {
                            g.html_res = h.html_res
                        }
                        $("head").append('<script type="text/javascript">var responsiveResources = ' + JSON.stringify(g) + "<\/script>");
                        if (typeof h.css != "undefined" && h.css != null) {
                            for (var k in h.css) {
                                $("head").append('<link id="res_css_' + k + '" rel="stylesheet" href="' + h.css[k] + '" type="text/css" />')
                            }
                        }
                        if (typeof h.js != "undefined" && h.js != null) {
                            for (var j in h.js) {
                                $.getScript(h.js[j])
                            }
                            responsiveInit()
                        }
                    },
                    timeout: 5000,
                    cache: true,
                    error: function () {
                        $.ajaxSetup({
                            async: true
                        })
                    }
                };
                $.ajax(f);
                $.ajaxSetup({
                    async: true
                })
            }
        } catch (b) {
            $.ajaxSetup({
                async: true
            })
        }
    },
    getMobileUserAgent: function () {
        return ((navigator.userAgent.match(/(?:iPhone|iPod).+OS\s+[5-9]/i)) || (navigator.userAgent.match(/Android\s(?:4|2).+\sMobile/i)))
    },
    getPageLanguage: function () {
        var b = "__";
        if ((typeof generalInfo != "undefined") && (typeof generalInfo.lg != "undefined")) {
            b = generalInfo.lg
        }
        return b
    }
};

function LegalPopUp() {
    var e = "legal_popup/";
    var c = {
        height: "450",
        width: "380",
        scrollbars: "yes"
    };
    this.show = function (g, f) {
        var h = window.open(d(g, f), "", b());
        if (window.focus) {
            h.focus()
        }
        return false
    };

    function d(h, f) {
        var g = window.location.protocol + "//" + window.location.host + "/" + e;
        return g + "?lg=" + f + "&type=" + h
    }

    function b() {
        var g = "";
        for (var f in c) {
            var h = c[f];
            g += f + "=" + h + ","
        }
        return g
    }
}

function PageInfo() {
    this.browser = this.extractBrowserId();
    this.isIPhone = this.browser === this.constants.iphone;
    this.isIPad = this.browser === this.constants.ipad;
    this.isAndroid = this.browser === this.constants.android;
    this.isChrome = this.browser === this.constants.chrome;
    this.isFirefox = this.browser === this.constants.firefox;
    this.isOpera = this.browser === this.constants.opera;
    this.isIElte9 = this.ieInfo.isAnyIE && this.ieInfo.version < 9;
    this.isIE8 = this.browser === this.constants.ie8;
    this.isIE9 = this.browser === this.constants.ie9;
    this.isIE10 = this.browser === this.constants.ie10;
    this.isMobile = this.isIPhone || this.isAndroid;
    this.isTablet = this.isIPad;
    this.isTouchDevice = this.isMobile || this.isTablet
}
PageInfo.prototype = {
    constants: {
        iphone: "iphone",
        ipad: "ipad",
        android: "android",
        chrome: "chrome",
        firefox: "mozilla",
        opera: "opera",
        ie8: "ie8",
        ie9: "ie9",
        ie10: "ie10",
        unknown: "unknown"
    },
    ieInfo: {
        isAnyIE: false,
        version: 0
    },
    extractBrowserId: function () {
        browser = {};
        browser.mozilla = false;
        browser.webkit = false;
        browser.opera = false;
        browser.msie = false;
        var e = navigator.userAgent;
        browser.name = navigator.appName;
        browser.fullVersion = "" + parseFloat(navigator.appVersion);
        browser.majorVersion = parseInt(navigator.appVersion, 10);
        var b, d, c;
        if ((d = e.indexOf("Opera")) != -1) {
            browser.opera = true;
            browser.name = "Opera";
            browser.fullVersion = e.substring(d + 6);
            if ((d = e.indexOf("Version")) != -1) {
                browser.fullVersion = e.substring(d + 8)
            }
        } else {
            if ((d = e.indexOf("MSIE")) != -1) {
                browser.msie = true;
                browser.name = "Microsoft Internet Explorer";
                browser.fullVersion = e.substring(d + 5)
            } else {
                if ((d = e.indexOf("Chrome")) != -1) {
                    browser.webkit = true;
                    browser.name = "Chrome";
                    browser.fullVersion = e.substring(d + 7)
                } else {
                    if ((d = e.indexOf("Safari")) != -1) {
                        browser.webkit = true;
                        browser.name = "Safari";
                        browser.fullVersion = e.substring(d + 7);
                        if ((d = e.indexOf("Version")) != -1) {
                            browser.fullVersion = e.substring(d + 8)
                        }
                    } else {
                        if ((d = e.indexOf("Firefox")) != -1) {
                            browser.mozilla = true;
                            browser.name = "Firefox";
                            browser.fullVersion = e.substring(d + 8)
                        } else {
                            if ((b = e.lastIndexOf(" ") + 1) < (d = e.lastIndexOf("/"))) {
                                browser.name = e.substring(b, d);
                                browser.fullVersion = e.substring(d + 1);
                                if (browser.name.toLowerCase() == browser.name.toUpperCase()) {
                                    browser.name = navigator.appName
                                }
                            }
                        }
                    }
                }
            }
        } if ((c = browser.fullVersion.indexOf(";")) != -1) {
            browser.fullVersion = browser.fullVersion.substring(0, c)
        }
        if ((c = browser.fullVersion.indexOf(" ")) != -1) {
            browser.fullVersion = browser.fullVersion.substring(0, c)
        }
        browser.majorVersion = parseInt("" + browser.fullVersion, 10);
        if (isNaN(browser.majorVersion)) {
            browser.fullVersion = "" + parseFloat(navigator.appVersion);
            browser.majorVersion = parseInt(navigator.appVersion, 10)
        }
        browser.version = browser.majorVersion;
        if (navigator.userAgent.match(/(?:iPhone|iPod)/i)) {
            return this.constants.iphone
        } else {
            if (navigator.userAgent.match(/(?:iPad)/i)) {
                return this.constants.ipad
            } else {
                if (navigator.userAgent.match(/Android\s(?:4|2).+\sMobile/i)) {
                    return this.constants.android
                } else {
                    if (browser.webkit) {
                        return this.constants.chrome
                    } else {
                        if (browser.mozilla) {
                            return this.constants.firefox
                        } else {
                            if (browser.opera) {
                                return this.constants.opera
                            } else {
                                if (browser.msie) {
                                    this.ieInfo.isAnyIE = true;
                                    this.ieInfo.version = browser.version;
                                    return this.constants["ie" + browser.version]
                                } else {
                                    return this.constants.unknown
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};
var watermark = function (b, h, g, e, f) {
    var d = $(b);
    if (e === true || d.val() === "") {
        d.val(g);
        d.addClass(h)
    }
    var c = {
        hide: function () {
            if (this.check("hide")) {
                if (f) {
                    d.val("");
                    d.removeClass(h)
                }
            }
        },
        show: function () {
            if (this.check("show")) {
                d.val(g);
                d.addClass(h)
            }
            d.trigger("blur", true)
        },
        check: function (j) {
            var k = d.val();
            if (j === "hide") {
                return (k === g)
            } else {
                if (j === "show") {
                    return (k === "")
                }
            }
            return false
        },
        checkClass: function (j) {
            if (j.val() === g) {
                j.addClass(h)
            } else {
                j.removeClass(h)
            }
        }
    };
    d.bind({
        focus: function (j) {
            c.hide()
        },
        blur: function (k, j) {
            if (!j) {
                c.show()
            }
        },
        change: function (j) {
            $(j.target).trigger("checkEvent")
        },
        checkEvent: function (j) {
            c.checkClass($(j.target))
        }
    });
    return c
};
var HomePageConstants = {
    homepageContextName: "homepage",
    ajaxCallDefaultTimeout: 15000,
    newsletterServicePath: "http://www.venere.com/passthru/ajax/newsletter_service.php",
    selectedFrontEnd: "des",
    emailMaxLength: 80,
    emailRegex: /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-]{1,})\.)+([a-zA-Z0-9]{2,6})$/
};

function Model() {
    this.trackingData = null;
    this.avlsrc_site_label = null
}
Model.prototype = {
    initTrackingData: function (b) {
        if (typeof (b) == "undefined") {
            this.trackingData = null
        } else {
            this.trackingData = b
        }
    }
};

function View() {}
View.prototype = {};

function SearchBoxAutocomplete() {
    var d = null;
    var c = null;
    var b = null
}
SearchBoxAutocomplete.prototype = {
    init: function () {
        this.maximumItems = 20;
        this.baseurl = "/passthru/ajax/autosuggest.php";
        if (window.location.pathname.indexOf("/call_center/") != -1) {
            this.baseurl += "/callctr/"
        } else {
            if (window.HomePageConstants.selectedFrontEnd && window.HomePageConstants.selectedFrontEnd == "res") {
                this.baseurl += "/mobile/"
            }
        }
        var c = $('input[name="lg"]');
        var e = $('#searchbox input[name="geoid"]');
        var d = $('#searchbox input[name="city_area"]');
        var b = $("#city");
        var f = $('#searchbox input[name="ac_text"]');
        var g = this;
        b.change(function () {
            if (g.actualValue != b.val()) {
                e.val("");
                d.val("");
                f.val("")
            }
        });
        b.autocomplete({
            delay: 300,
            minLength: 3,
            source: function (j, h) {
                $.ajax({
                    dataType: "json",
                    url: g.baseurl,
                    data: {
                        name: j.term,
                        lg: c.val()
                    },
                    success: function (k) {
                        if (!k) {
                            return
                        }
                        h($.map(k.ResultSet.Result, function (m, l) {
                            if (l >= g.maximumItems) {
                                return null
                            }
                            return {
                                label: m.tag ? m.tag : m.name,
                                properties_count: m.pcount ? m.pcount : (m.properties_count ? m.properties_count : ""),
                                value: m.name,
                                geoid: m.geoid ? m.geoid : (m.htid ? -m.htid : undefined),
                                city_area: m.city_area
                            }
                        }))
                    }
                })
            },
            select: function (h, j) {
                $(e).val(j.item.geoid);
                $(d).val(j.item.city_area);
                $(f).val(j.item.label.replace(/<[^>]+>/g, ""));
                g.actualValue = j.item.label
            }
        }).data("autocomplete")._renderItem = function (h, j) {
            return $("<li></li>").data("item.autocomplete", j).append("<a><p>" + j.label + "</p><span>" + j.properties_count + "</span></a>").appendTo(h)
        }
    }
};
HomePageSearchBoxAction.prototype = new NextAction;
HomePageSearchBoxAction.prototype.constructor = HomePageSearchBoxAction;

function HomePageSearchBoxAction() {}
HomePageSearchBoxAction.prototype.init = function (c, b, d) {
    this.DAO = c;
    this.actionToDo = b;
    this.preSetDAO = new PreSetDAO(d);
    this.config = d
};
HomePageSearchBoxAction.prototype.execute = function () {
    if (this.actionToDo == ERASE_COOKIES) {
        this.preSetDAO.deleteAvailCookies()
    } else {
        var c = new Object();
        var d = new Object();
        if (this.actionToDo == SEARCH_WA) {
            d.sd = c.sd = padZero(String(this.DAO.getCheckIn().getDate()));
            d.sm = c.sm = padZero(String(this.DAO.getCheckIn().getMonth() + 1));
            d.sy = c.sy = this.DAO.getCheckIn().getFullYear();
            d.ed = c.ed = padZero(String(this.DAO.getCheckOut().getDate()));
            d.em = c.em = padZero(String(this.DAO.getCheckOut().getMonth() + 1));
            d.ey = c.ey = this.DAO.getCheckOut().getFullYear();
            d.pval = c.pval = this.DAO.getPersons();
            d.rval = c.rval = this.DAO.getRooms();
            d.rgval = c.rgval = this.DAO.getRoomGuest();
            this.preSetDAO.setAvailCookies(c)
        } else {
            if (this.actionToDo == SEARCH_WOA) {
                this.preSetDAO.deleteAvailCookies()
            }
        }
        var h, g = this.DAO.form.elements.length;
        var m = null;
        for (h = 0; h < g; h++) {
            if (this.DAO.form.elements[h].type == "hidden" && this.DAO.form.elements[h].value != "") {
                c[this.DAO.form.elements[h].name] = this.DAO.form.elements[h].value
            }
        }
        if (this.config.defaultCity && this.config.defaultCity.toLowerCase() == this.DAO.getDestination().toLowerCase()) {
            if (this.config.defaultGeoId) {
                c.geoid = this.config.defaultGeoId
            } else {
                if (this.config.defaultGeoUrl) {
                    m = this.config.defaultGeoUrl;
                    delete c.lg
                }
            }
            d.cityChanged = false
        } else {
            d.cityChanged = true
        }
        d.city = this.DAO.getDestination();
        d.geoid = (typeof (c.geoid) == "undefined" ? null : c.geoid);
        if (this.DAO.getDestination() != "" && typeof (c.geoid) == "undefined" && m == null) {
            c.city = this.DAO.getDestination()
        }
        var l = this.preSetDAO.getAllowedUrlParams();
        delete l.sd;
        delete l.sm;
        delete l.sy;
        delete l.ed;
        delete l.em;
        delete l.ey;
        delete l.pval;
        delete l.rval;
        delete l.rgval;
        delete l.lg;
        delete l.htid;
        for (var f in l) {
            c[f] = l[f]
        }
        var b = buildQueryStr(c, true);
        if (m != null) {
            m += b
        } else {
            if (this.DAO.config.useCurrentUrlAsAction) {
                m = window.location.pathname + b
            } else {
                if ((!isNaN(this.DAO.getGeoId()) && this.DAO.getGeoId() != "") || typeof (c.geoid) != "undefined") {
                    if (b.indexOf("geoid=-") >= 0) {
                        m = "/hotel/index.php" + b.replace("geoid=-", "htid=")
                    } else {
                        m = "/search/index.php" + b
                    }
                } else {
                    m = "/site/index.php" + b
                }
            }
        } if (typeof (this.config.tracking_fun) == "function") {
            this.config.tracking_fun(d)
        }
        var j = false;
        try {
            if (typeof (window.track_home_search_widget) == "function") {
                set_omniture_navigation_handler("track_home_search_widget", function () {
                    window.location.href = m
                });
                j = window.track_home_search_widget(c, this.DAO.getAcText())
            }
        } catch (k) {}
        if (!j) {
            window.location.href = m
        }
    }
};
HomeSearchFormDAO.prototype = new SearchFormDAO();
HomeSearchFormDAO.prototype.constructor = HomeSearchFormDAO;

function HomeSearchFormDAO(b) {
    this.config = new Object();
    this.form = b;
    this.allowedUrlParams = new Object()
}
HomeSearchFormDAO.prototype.getAcText = function () {
    if (this.form.ac_text) {
        return this.form.ac_text.value
    } else {
        return ""
    }
};

function SocialManager() {
    this.g_locked = false
}
SocialManager.prototype = {
    isGlocked: function () {
        return this.g_locked
    },
    hideAllSocials: function () {
        this.g_locked = false;
        $(".prefooter_social_icon").removeClass("hovered");
        $(".pf-infopopup").stop(true, true).fadeOut("fast")
    },
    onStartGplusInteraction: function () {
        this.g_locked = true
    },
    onEndGplusInteraction: function () {
        this.hideAllSocials()
    }
};

function Controller() {
    this.model = new Model();
    this.view = new View();
    this.showcaseInterval = null;
    this.showcaseItems = null;
    this.showcaseCurrentIndex = 0;
    this.socialManager = null;
    this.subscribing = false;
    this.enableSearchBoxWithChildren = false;
    this.pageInfo = new PageInfo()
}
Controller.prototype = {
    init: function (d) {
        var c = this;
        c.socialManager = d;
        $.extend({
            getContext: function () {
                return c
            }
        });
        this.initBodyClasses();
        if (typeof (enable_search_box_with_children) != "undefined") {
            this.enableSearchBoxWithChildren = enable_search_box_with_children
        }
        InitSWConfig();
        if (typeof (SWConfig) != "undefined") {
            var b = new SearchBoxAutocomplete();
            b.init();
            $("#city").keypress(function (g) {
                if (g.keyCode == 13) {
                    var f = $("#checkin");
                    var e = $("#checkout");
                    if (f.val() == "" || f.val() == SWConfig.dateInputLabel) {
                        g.preventDefault();
                        f.focus()
                    } else {
                        if (e.val() == "" || e.val() == SWConfig.dateInputLabel) {
                            g.preventDefault();
                            e.focus()
                        }
                    }
                }
            })
        }
        if ($.browser.msie) {
            $("body").bind("keypress", function (f) {
                if (f.which == 13) {
                    if ($(f.target).is("input") || $(f.target).is("a")) {
                        return true
                    } else {
                        f.stopPropagation();
                        return false
                    }
                }
            })
        }
        this.initTrackingData(trackingData);
        this.initLanguageBar();
        this.initPartnerToolsBar();
        this.initPopularDestinations();
        this.initDeals();
        this.initShowcase();
        this.initShowcaseModule();
        this.initNewsLetterModule();
        this.initSocialPrefooter();
        this.initGoogleBadge();
        this.initSectionCollapse()
    },
    initLanguageBar: function () {
        $(".LangMenu1").click(function (c) {
            var b = $(c.target).closest("a");
            if (b.is(".LangMenu1")) {
                c.preventDefault()
            }
        });
        $(".LangMenum ul li a").click(function (b) {
            return jQuery.getContext().changeLanguage(b)
        })
    },
    SWUpdateSelectEventResponsive: function () {},
    initPopularDestinations: function () {
        var b = jQuery.getContext();
        $(".pop_destination_image").click(function (d) {
            var c = b.trackDestination($(d.target));
            if (!c) {
                b.goToDestinationPage($(d.target))
            }
            return false
        });
        $(".pop_destination_link").click(function (d) {
            var c = b.trackDestination($(d.target));
            if (c) {
                return false
            } else {
                return true
            }
        });
        $("#more_destinations").click(function () {
            b.showAllDestinations()
        })
    },
    initPartnerToolsBar: function () {
        $("#partners_login").hover(function () {
            $(".partners_login_menu").css({
                display: "block"
            })
        }, function () {
            $(".partners_login_menu").css({
                display: "none"
            })
        })
    },
    initShowcase: function () {
        $("#showcase .ext_link").click(function (b) {
            if (jQuery.getContext().trackShowcase($(b.target))) {
                return false
            } else {
                return true
            }
        })
    },
    initShowcaseModule: function () {
        this.showcaseItems = $("#showcase .showcase_item");
        var c = jQuery.getContext();
        for (var b = 0; b < this.showcaseItems.length; b++) {
            $("#showcase_bullets_container").append('<div class="showcase_bullet"></div>')
        }
        $(".showcase_bullet").click(function () {
            c.showcaseShowNum($(this).index(".showcase_bullet"))
        });
        $("#showcase_arrow_right").click(function () {
            c.showcaseShowNext()
        });
        $("#showcase_arrow_right_container").hover(function () {
            c.showcaseShowNavButtons()
        }, function () {
            c.showcaseShowNavButtons(true)
        });
        $("#showcase .showcase_item").hide();
        this.showcaseShowCurrent();
        c.showcaseResetInterval();
        $("#showcase").hover(function () {
            clearInterval(c.showcaseInterval)
        }, function () {
            c.showcaseResetInterval()
        })
    },
    showcaseResetInterval: function () {
        var b = jQuery.getContext();
        clearInterval(b.showcaseInterval);
        b.showcaseInterval = setInterval(function () {
            b.showcaseShowNext()
        }, 5000)
    },
    showcaseShowNavButtons: function (b) {
        if (b) {
            $("#showcase_arrow_right").hide()
        } else {
            $("#showcase_arrow_right").show()
        }
    },
    showcaseShowNext: function (c) {
        var b = jQuery.getContext();
        if (c) {
            b.showcaseCurrentIndex--;
            if (b.showcaseCurrentIndex < 0) {
                b.showcaseCurrentIndex = b.showcaseItems.length - 1
            }
        } else {
            b.showcaseCurrentIndex++;
            if (b.showcaseCurrentIndex >= b.showcaseItems.length) {
                b.showcaseCurrentIndex = 0
            }
        }
        b.showcaseShowCurrent()
    },
    showcaseShowNum: function (b) {
        var c = jQuery.getContext();
        if (b != c.showcaseCurrentIndex) {
            if (b >= 0 && b < c.showcaseItems.length) {
                c.showcaseCurrentIndex = b
            }
            c.showcaseShowCurrent()
        }
    },
    showcaseShowCurrent: function () {
        var b = jQuery.getContext();
        var d = $("#showcase .showcase_item").eq(b.showcaseCurrentIndex);
        var c = $("#showcase .showcase_item.active");
        c.stop(true, true).addClass("last-active");
        d.addClass("active").fadeIn("slow", "swing", function () {
            c.removeClass("active last-active");
            c.hide()
        });
        $(".showcase_bullet").removeClass("active");
        $(".showcase_bullet").eq(b.showcaseCurrentIndex).addClass("active")
    },
    initTrackingData: function (b) {
        this.model.initTrackingData(b)
    },
    initDeals: function () {
        var b = jQuery.getContext();
        $(".deal_image").click(function (c) {
            if (b.trackDeal($(c.target))) {
                return false
            } else {
                return true
            }
        });
        $(".deal_title").click(function (c) {
            if (b.trackDeal($(c.target))) {
                return false
            } else {
                return true
            }
        })
    },
    goToDestinationPage: function (c) {
        if (c != undefined) {
            var b = c.closest("li").find("div > a");
            if (b != undefined) {
                window.location = b.attr("href")
            }
        }
    },
    changeLanguage: function (d) {
        var c = $(d.target).closest("a");
        var b = c.attr("href");
        if (typeof (b) != "undefined" && b != null) {
            window.location = b;
            return false
        }
        return true
    },
    showAllDestinations: function () {
        for (var b = 9; b <= 20; b++) {
            $("#pop_destination_" + b).show()
        }
        $("#destinations_link").show();
        $("#more_destinations").hide()
    },
    initNewsLetterModule: function () {
        var b = jQuery.getContext();
        $("#newsletter_email").keydown(function (c) {
            if ($(this).hasClass("nl_error")) {
                b.showNewsLetterStateWriting()
            }
        });
        $("a#newsletter_new_subscription").click(function (c) {
            c.preventDefault();
            b.showNewsLetterStateIdle(true)
        });
        this.showNewsLetterStateIdle()
    },
    newsletterTextFocus: function (b) {
        if ($("#newsletter_email").val() == b) {
            $("#newsletter_email").val("");
            $("#newsletter_email").addClass("nl_busy")
        }
    },
    newsletterTextBlur: function (b) {
        if ($("#newsletter_email").val() == "") {
            $("#newsletter_email").val(b);
            $("#newsletter_email").removeClass("nl_busy");
            this.showNewsLetterStateIdle()
        }
    },
    showNewsLetterStateIdle: function (b) {
        $("#newsletter_feedback").hide();
        $("#newsletter_subscribe").show();
        $(".nl-alert").hide();
        $("#newsletter_spinner").hide();
        if (b) {
            $("#newsletter_email").val("");
            $("#newsletter_email").blur()
        }
        $("#newsletter_email").removeClass("nl_error");
        $("#newsletter_email").removeClass("nl_busy");
        this.setNewsLetterButtonActive(true);
        this.subscribing = false
    },
    showNewsLetterStateWriting: function () {
        $(".nl-alert").hide();
        $("#newsletter_spinner").hide();
        $("#newsletter_email").removeClass("nl_error");
        $("#newsletter_email").addClass("nl_busy");
        this.setNewsLetterButtonActive(true)
    },
    showNewsLetterStateBusy: function () {
        $(".nl-alert").hide();
        $("#newsletter_spinner").show();
        $("#newsletter_email").removeClass("nl_error");
        this.setNewsLetterButtonActive(false)
    },
    showNewsLetterStateError: function () {
        $("#newsletter_alert").show();
        $("#newsletter_spinner").hide();
        $("#newsletter_email").addClass("nl_error");
        this.setNewsLetterButtonActive(true)
    },
    showNewsLetterStateErrorAjax: function () {
        $("#newsletter_error").show();
        $("#newsletter_spinner").hide();
        $("#newsletter_email").addClass("nl_error");
        this.setNewsLetterButtonActive(true)
    },
    showNewsLetterStateDone: function () {
        $("#newsletter_subscribe").hide();
        $("#newsletter_feedback").show();
        $(".nl-alert").hide();
        $("#newsletter_spinner").hide();
        $("#newsletter_button").hide()
    },
    setNewsLetterButtonActive: function (b) {
        $("#newsletter_button").show();
        if (b) {
            $("#newsletter_button").fadeTo(0, 1)
        } else {
            $("#newsletter_button").fadeTo(0, 0.4)
        }
    },
    checkNewsLetterEmail: function (c) {
        this.showNewsLetterStateBusy();
        var d = $("#newsletter_email");
        if (d != undefined) {
            var b = this.getTrimValue(d.val());
            if (b && b != c) {
                if (b.length <= HomePageConstants.emailMaxLength && b.match(HomePageConstants.emailRegex)) {
                    return true
                }
            }
            if (b == c) {
                d.val("")
            }
            d.focus()
        }
        return false
    },
    newsletterSubscribe: function (e, c) {
        if (this.subscribing) {
            return false
        }
        this.subscribing = true;
        var b = $("#newsletter_email").val();
        if (this.checkNewsLetterEmail(c)) {
            var d = "action=subscribe&lg=" + (e ? e : "en") + "&email=" + b;
            d += (HomePageConstants.homepageContextName ? "&source=" + HomePageConstants.homepageContextName : "");
            $.ajax({
                type: "GET",
                url: HomePageConstants.newsletterServicePath,
                data: d,
                dataType: "json",
                success: this.callbackNewsletter,
                timeout: HomePageConstants.ajaxCallDefaultTimeout,
                error: this.callBackAbortError
            })
        } else {
            this.subscribing = false;
            this.showNewsLetterStateError()
        }
        return true
    },
    getTrimValue: function (b) {
        return (b.replace(/^[ ]+/, "").replace(/[ ]+$/, ""))
    },
    trackDestination: function (h) {
        var c = h.closest("li").attr("id");
        var d = this.model.trackingData;
        if (d && d.popular_destinations != undefined) {
            var k = d.popular_destinations[c];
            if (k != null) {
                var g = k.split(":");
                var j = g[0];
                var b = g[1];
                try {
                    if (typeof (track_destination) == "function") {
                        set_omniture_navigation_handler("track_destination", function () {
                            if (h != undefined) {
                                var e = h.closest("li").find("div > a");
                                if (e != undefined) {
                                    window.location = e.attr("href")
                                }
                            }
                        });
                        return window.track_destination(j, b)
                    }
                } catch (f) {}
            }
        }
        return false
    },
    trackDeal: function (f) {
        var d = f.closest("li").attr("id");
        var b = this.model.trackingData;
        if (b && b.deals != undefined) {
            var g = b.deals[d];
            if (g != null) {
                try {
                    if (typeof (track_deal) == "function") {
                        set_omniture_navigation_handler("track_deal", function () {
                            if (f != undefined) {
                                window.location = f.closest("a").attr("href")
                            }
                        });
                        return window.track_deal(g)
                    }
                } catch (c) {}
            }
        }
        return false
    },
    trackShowcase: function (c) {
        try {
            if (typeof (track_showcase) == "function") {
                set_omniture_navigation_handler("track_showcase", function () {
                    if (c != undefined) {
                        window.location = c.closest("a").attr("href")
                    }
                });
                return window.track_showcase()
            }
        } catch (b) {}
        return false
    },
    callbackNewsletter: function (e) {
        var c = jQuery.getContext();
        c.subscribing = false;
        if (e && e.action) {
            var d = e.action;
            var b = e.result;
            if (d == "subscribe") {
                if (b) {
                    c.showNewsLetterStateDone()
                } else {
                    c.showNewsLetterStateErrorAjax()
                }
            } else {
                c.showNewsLetterStateErrorAjax()
            }
        } else {
            c.showNewsLetterStateErrorAjax()
        }
    },
    callBackAbortError: function (c, e, d) {
        c.abort();
        var b = jQuery.getContext();
        b.subscribing = false
    },
    initSocialPrefooter: function () {
        $(".prefooter_social_icon").hover(function () {
            if ((jQuery.getContext().socialManager.isGlocked()) == false) {
                $(this).addClass("hovered");
                $(this).find(".pf-infopopup").hide().fadeIn("fast")
            }
        }, function () {
            $(this).removeClass("hovered");
            if ((jQuery.getContext().socialManager.isGlocked()) == false) {
                $(this).find(".pf-infopopup").stop(true, true).fadeOut("fast")
            }
        })
    },
    initGoogleBadge: function () {
        $("#plusone_container").click(function () {
            $("#google_badge_container").stop(true);
            $("#google_badge_container").slideToggle("fast")
        })
    },
    initBodyClasses: function () {
        var b = jQuery.getContext();
        var c = b.pageInfo.browser;
        $("body").addClass(c)
    },
    detectSelectedFrontEndForTracking: function () {
        return (HomePageConstants.selectedFrontEnd === "des" ? "Desktop" : "Mobile")
    },
    initSectionCollapse: function () {
        $(".section-collapse").on("mousedown", function (f) {
            var c = jQuery.getContext();
            $(this).parent().toggleClass("closed");
            if (c.pageInfo.isIE8) {
                var d = $(this).parent();
                d.hide().show()
            }
            f.preventDefault()
        });
        var b = (new RegExp("(?:^|; )" + encodeURIComponent("cavail") + "=([^;]*)").exec(document.cookie)) ? true : false;
        if (b) {
            $(".section-collapse-wrapper").addClass("closed")
        } else {
            $(".section-collapse-wrapper").removeClass("closed")
        }
    }
};
if (typeof (ctrl) == "undefined") {
    var social_manager = new SocialManager();
    var ctrl = new Controller();
    $(document).ready(function () {
        ctrl.init(social_manager)
    });
    var resource_options = {};
    resource_options.showAppDownload = 0;
    userAgentSniffer.sniff("HOME", resource_options)
}

function start_gplus_interaction() {
    social_manager.onStartGplusInteraction()
}

function end_gplus_interaction() {
    social_manager.onEndGplusInteraction()
}
define("venere_components/tracking/module/common/ensighten/VenereEnsightenInteraction", ["jquery"], function (e) {
    var c = {
        obj_name: "_vei"
    };
    var d = function () {
        return {
            data: {},
            fn: {
                $: e
            },
            v: 1
        }
    };
    var b = function () {
        if (typeof window[c.obj_name] === "undefined") {
            window[c.obj_name] = new d()
        }
    };
    b();
    return window[c.obj_name]
});
define("venere_components/tracking/module/common/ensighten/Bootstrap", ["jquery"], function (f) {
    var c = {
        spaces: {
            prod: "//nexus.ensighten.com/venere/Bootstrap.js",
            dev: "//nexus.ensighten.com/venere/dev/Bootstrap.js",
            pre: "//nexus.ensighten.com/venere/dev/Bootstrap.js"
        },
        def_space: "prod",
        bootstrapper_obj: "Bootstrapper"
    };
    var b = function () {
        return (typeof window[c.bootstrapper_obj] === "object")
    };
    var e = function (h) {
        var j = (h && typeof c.spaces[h] !== "undefined") ? c.spaces[h] : c.spaces[c.def_space];
        f.getScript(j).fail(function () {})
    };
    var g = function () {
        var j = window[c.bootstrapper_obj];
        var k = j.ensightenOptions;
        var h = "//" + k.serverComponentLocation + "?ClientID=" + k.clientId + "&PageID=" + encodeURIComponent(window.location);
        j.insertScript(h)
    };
    var d = function (h) {
        if (b()) {
            g()
        } else {
            e(h)
        }
    };
    return {
        conf: c,
        fireTags: d,
        isLoaded: b
    }
});
define("venere_components/tracking/module/views/EnsightenView", ["backbone", "../common/ensighten/VenereEnsightenInteraction", "../common/ensighten/Bootstrap"], function (e, d, b) {
    var c = (e.View.extend({
        eventBus: {},
        initialize: function (f) {
            this.eventBus = f.eventBus;
            this.eventBus.on("track_tms", function (g) {
                d.data = g.data;
                b.fireTags(g.space)
            })
        }
    }));
    return c
});
define("venere_components/tracking/module/conf/channel_preno/LtCookieConfiguration", [], function () {
    return {
        cookie_name: "lt",
        cookie_separator: "|",
        cookie_value_separator: "=",
        cookie_expiration_days: 30,
        attributes: {
            ref: {
                validator: "^[0-9]+$"
            },
            kwp: {
                validator: "^[a-z0-9-]+$"
            },
            ta_op: {
                validator: "^(1|0)$"
            },
            cc_op: {
                validator: "^(1|0)$"
            },
            customData: {},
            rffrid: {
                validator: "^(\\d|\\w|=|\\.|-)+$"
            }
        },
        key_attribute: "ref",
        search_engine: [{
            name: "google.",
            ref: "1279239"
        }, {
            name: "yahoo.",
            ref: "1279240"
        }, {
            name: "yandex.",
            ref: "1279241"
        }, {
            name: "bing.",
            ref: "1279242"
        }, {
            name: "live.",
            ref: "1279243"
        }, {
            name: "ask.",
            ref: "1279244"
        }, {
            name: "baidu.",
            ref: "1279245"
        }],
        search_engine_kwd_type: {
            branded_match: "((%\\d{1}\\w{1})|\\b)ven(ere|ure|er|re|ire|ee)\\b",
            se_override: {
                "1279239": {
                    kwd_parameter: "q",
                    branded: "1928364",
                    unbranded: "1928365",
                    unknown: "1928366"
                }
            }
        }
    }
});
/*
 * jQuery Cookie Plugin v1.4.0
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (b) {
    if (typeof define === "function" && define.amd) {
        define("jquery.cookie", ["jquery"], b)
    } else {
        b(jQuery)
    }
}(function (g) {
    var b = /\+/g;

    function e(k) {
        return c.raw ? k : encodeURIComponent(k)
    }

    function h(k) {
        return c.raw ? k : decodeURIComponent(k)
    }

    function j(k) {
        return e(c.json ? JSON.stringify(k) : String(k))
    }

    function d(k) {
        if (k.indexOf('"') === 0) {
            k = k.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")
        }
        try {
            k = decodeURIComponent(k.replace(b, " "))
        } catch (l) {
            return
        }
        try {
            return c.json ? JSON.parse(k) : k
        } catch (l) {}
    }

    function f(l, k) {
        var m = c.raw ? l : d(l);
        return g.isFunction(k) ? k(m) : m
    }
    var c = g.cookie = function (u, s, y) {
        if (s !== undefined && !g.isFunction(s)) {
            y = g.extend({}, c.defaults, y);
            if (typeof y.expires === "number") {
                var v = y.expires,
                    x = y.expires = new Date();
                x.setDate(x.getDate() + v)
            }
            return (document.cookie = [e(u), "=", j(s), y.expires ? "; expires=" + y.expires.toUTCString() : "", y.path ? "; path=" + y.path : "", y.domain ? "; domain=" + y.domain : "", y.secure ? "; secure" : ""].join(""))
        }
        var z = u ? undefined : {};
        var w = document.cookie ? document.cookie.split("; ") : [];
        for (var q = 0, n = w.length; q < n; q++) {
            var o = w[q].split("=");
            var k = h(o.shift());
            var m = o.join("=");
            if (u && u === k) {
                z = f(m, s);
                break
            }
            if (!u && (m = f(m)) !== undefined) {
                z[k] = m
            }
        }
        return z
    };
    c.defaults = {};
    g.removeCookie = function (l, k) {
        if (g.cookie(l) === undefined) {
            return false
        }
        g.cookie(l, "", g.extend({}, k, {
            expires: -1
        }));
        return !g.cookie(l)
    }
}));
define("venere_components/tracking/module/common/channel_preno/LastTouchCookie", ["jquery", "../../conf/channel_preno/LtCookieConfiguration", "jquery.cookie"], function (c, b) {
    var d = {
        get: function () {
            var g = c.cookie(b.cookie_name);
            var h = {};
            if (g) {
                var e = g.split(b.cookie_separator);
                for (var k in e) {
                    var j = e[k].indexOf(b.cookie_value_separator);
                    if (j > -1) {
                        h[e[k].substring(0, j)] = e[k].substring(j + 1)
                    }
                }
            }
            return h
        },
        set: function (g) {
            var f = [];
            for (var e in g) {
                f.push(e + b.cookie_value_separator + g[e])
            }
            if (f.length > 0) {
                var h = c.cookie.raw;
                c.cookie.raw = true;
                c.cookie(b.cookie_name, f.join(b.cookie_separator), {
                    expires: b.cookie_expiration_days,
                    path: "/",
                    domain: "venere.com"
                });
                c.cookie.raw = h
            } else {
                c.removeCookie(b.cookie_name)
            }
        }
    };
    return d
});
define("venere_components/tracking/module/utils/CavailCookie", ["jquery", "jquery.cookie"], function (d) {
    var f = {
        cookie_name: "cavail",
        cookie_separator: ","
    };
    var b = {
        checkIn: 0,
        checkOut: 1,
        pval: 2,
        rval: 3,
        rgval: 4
    };
    var e = {
        INVALID: 0,
        OLD_HYBRID: 1,
        NEW: 2
    };
    var h = {
        date: new RegExp("^([0-9]){8}$"),
        oldPrval: new RegExp("^[1-9]|10$"),
        voidVal: new RegExp("(^$)|(^(NaN)|(null)$)", "i"),
        rgval: new RegExp("^(10?|[2-9])(\\|(10?|[2-9])){0,8}\\|\\|(-1|(1[0-7]?|[02-9])(_(1[0-7]?|[02-9])){0,5})(\\|(-1|(1[0-7]?|[02-9])(_(1[0-7]?|[02-9])){0,5})){0,8}$")
    };

    function k(l) {
        return new Date(parseInt(l.substring(0, 4)), parseInt(l.substring(4, 6)) - 1, parseInt(l.substring(6)))
    }

    function j(n) {
        var m = e.INVALID;
        var l = n.length;
        if (l === 5 || l === 4) {
            if (h.date.test(n[b.checkIn]) && h.date.test(n[b.checkOut])) {
                if (l === 5) {
                    if (h.rgval.test(n[b.rgval]) && h.voidVal.test(n[b.pval]) && h.voidVal.test(n[b.rval])) {
                        m = e.NEW
                    } else {
                        if (h.oldPrval.test(n[b.pval]) && h.oldPrval.test(n[b.rval]) && h.voidVal.test(n[b.rgval])) {
                            m = e.OLD_HYBRID
                        }
                    }
                } else {
                    m = (h.oldPrval.test(n[b.pval]) && h.oldPrval.test(n[b.rval])) ? e.OLD_HYBRID : m
                }
            }
        }
        return m
    }
    var g = null;
    var c = {
        get: function () {
            if (g === null) {
                var l = d.cookie(f.cookie_name);
                if (l) {
                    var s = l.split(f.cookie_separator);
                    var o = j(s);
                    if (o !== e.INVALID) {
                        g = {};
                        g.checkIn = k(s[b.checkIn]);
                        g.checkOut = k(s[b.checkOut]);
                        switch (o) {
                        case e.OLD_HYBRID:
                            g.pval = parseInt(s[b.pval]);
                            g.rval = parseInt(s[b.rval]);
                            g.rgval = "";
                            break;
                        case e.NEW:
                            g.rgval = s[b.rgval];
                            var m = g.rgval.split("||");
                            var u = m[0].split("|");
                            var t = m[1].split("|");
                            g.rval = u.length;
                            g.pval = 0;
                            for (var q = 0; q < u.length; q++) {
                                g.pval += parseInt(u[q]);
                                var v = t[q].split("_");
                                for (var n = 0; n < v.length; n++) {
                                    if (v[n] !== "-1") {
                                        g.pval++
                                    }
                                }
                            }
                            break
                        }
                    }
                }
            }
            return g
        }
    };
    return c
});
var crc32;
define("venere_components/tracking/module/utils/CRC32", [], function () {
    var b = "00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D";
    var c = 0;
    crc32 = function (h, f) {
        var j = 0;
        var d = 0;
        f = f ^ (-1);
        for (var e = 0, g = h.length; e < g; e++) {
            j = (f ^ h.charCodeAt(e)) & 255;
            d = "0x" + b.substr(j * 9, 8);
            f = (f >>> 8) ^ d
        }
        return f ^ (-1)
    };
    return crc32
});
define("venere_components/tracking/module/utils/SessId", ["jquery", "./CRC32", "jquery.cookie"], function (e, d) {
    var c = {
        name: "pxsid",
        src: "WEB_ID"
    };

    function f() {
        return d(e.cookie(c.src) + "-" + (new Date()).getTime())
    }

    function g(h) {
        e.cookie(c.name, h, {
            domain: "venere.com",
            path: "/"
        })
    }

    function b() {
        return e.cookie(c.name)
    }
    return {
        get: function () {
            var h = b();
            if (typeof h === "undefined") {
                g(f());
                h = b()
            }
            return h
        }
    }
});
define("venere_components/tracking/module/common/ensighten/EnsightenConnector", ["../channel_preno/LastTouchCookie", "../../utils/CavailCookie", "../../utils/SessId"], function (d, c, e) {
    var b = (function (j) {
        var h = {};
        f(j);

        function f(o) {
            h = o.eventBus;
            h.on("home", m, this);
            h.on("hdp", l, this);
            h.on("reservation_confirm", g, this)
        }

        function k(q) {
            var o = {
                space: q.tracking.env || null,
                data: {
                    lg: q.lg || "en",
                    lt: d.get(),
                    cavail: c.get(),
                    sessid: e.get()
                }
            };
            return o
        }

        function m(q) {
            var o = k(q);
            o.data.context = "home";
            n(o)
        }

        function l(q) {
            var o = k(q);
            o.data.context = "hdp";
            o.data.hotel_id = q.hotel_id;
            n(o)
        }

        function g(q) {
            var o = k(q);
            o.data.context = "book";
            o.data.booking_action = "confirmed";
            o.data.lg = q.page_info.lg;
            o.data.reservation_id = q.booking_info.reservation_id;
            o.data.currency_code = q.page_info.currency_code;
            o.data.hotel_id = q.page_info.hotel_id;
            o.data.r_disp = q.page_info.r_disp;
            o.data.r_prices = q.page_info.r_prices;
            o.data.check_in = q.page_info.check_in;
            o.data.check_out = q.page_info.check_out;
            o.data.user_country_code = q.page_info.user_country_code;
            o.data.property = {
                city: q.property.city,
                country: q.property.country,
                geo_id: q.page_info.geo_id,
                name: q.property.name
            };
            n(o)
        }

        function n(o) {
            h.trigger("track_tms", o)
        }
    });
    return b
});
define("venere_components/tracking/module/EnsightenModule", ["./views/EnsightenView", "./common/ensighten/EnsightenConnector"], function (d, c) {
    var b = function (f) {
        e(f);

        function e(g) {
            new d(g);
            new c(g)
        }
    };
    return b
});
$(document).ready(function () {
    require(["eventBus", "venere_components/tracking/module/EnsightenModule"], function (c, b) {
        new b({
            eventBus: c
        });
        c.trigger("home", generalInfo)
    })()
});
define("tracking/main/ensighten/main_home", function () {});
define("site-tms-home", function () {});