var JsonML;
void 0 === JsonML && (JsonML = {}),
    function() {
        function e(e, t, r) {
            "string" == typeof r && (r = new Function("event", r)), "function" == typeof r && (e[t] = r)
        }

        function t(t, r) {
            if (r.name && document.attachEvent) try {
                var n = document.createElement("<" + t.tagName + " name='" + r.name + "'>");
                t.tagName === n.tagName && (t = n)
            } catch (s) {}
            for (var a in r)
                if (r.hasOwnProperty(a)) {
                    var i = r[a];
                    a && null !== i && "undefined" != typeof i && (a = c[a.toLowerCase()] || a, "style" === a ? "undefined" != typeof t.style.cssText ? t.style.cssText = i : t.style = i : "class" === a ? (t.className = i, t.setAttribute(a, i)) : u[a] ? (e(t, a, i), h[a] && e(t, h[a], i)) : "string" == typeof i || "number" == typeof i || "boolean" == typeof i ? (t.setAttribute(a, i), h[a] && t.setAttribute(h[a], i)) : (t[a] = i, h[a] && (t[h[a]] = i)))
                }
            return t
        }

        function r(e, t) {
            if (t)
                if (e.tagName && "table" === e.tagName.toLowerCase() && e.tBodies) {
                    if (!t.tagName) {
                        if (11 === t.nodeType)
                            for (; t.firstChild;) r(e, t.removeChild(t.firstChild));
                        return
                    }
                    var n = t.tagName.toLowerCase();
                    if (n && "tbody" !== n && "thead" !== n) {
                        var s = e.tBodies.length > 0 ? e.tBodies[e.tBodies.length - 1] : null;
                        s || (s = document.createElement("th" === n ? "thead" : "tbody"), e.appendChild(s)), s.appendChild(t)
                    } else e.canHaveChildren !== !1 && e.appendChild(t)
                } else if (e.tagName && "style" === e.tagName.toLowerCase() && document.createStyleSheet) e.cssText = t;
            else if (e.canHaveChildren !== !1) e.appendChild(t);
            else if (e.tagName && "object" === e.tagName.toLowerCase() && t.tagName && "param" === t.tagName.toLowerCase()) {
                try {
                    e.appendChild(t)
                } catch (a) {}
                try {
                    e.object && (e.object[t.name] = t.value)
                } catch (i) {}
            }
        }

        function n(e) {
            return e && 3 === e.nodeType && (!e.nodeValue || !/\S/.exec(e.nodeValue))
        }

        function s(e) {
            if (e) {
                for (; n(e.firstChild);) e.removeChild(e.firstChild);
                for (; n(e.lastChild);) e.removeChild(e.lastChild)
            }
        }

        function a(e) {
            var t = document.createElement("div");
            if (t.innerHTML = e, s(t), 1 === t.childNodes.length) return t.firstChild;
            for (var r = document.createDocumentFragment ? document.createDocumentFragment() : document.createElement(""); t.firstChild;) r.appendChild(t.firstChild);
            return r
        }

        function i(e) {
            this.value = e
        }

        function o(e) {
            return document.createTextNode("[" + e + "]")
        }

        function l(e, n, s) {
            for (var o = 1; o < n.length; o++) n[o] instanceof Array || "string" == typeof n[o] ? r(e, JsonML.parse(n[o], s)) : n[o] instanceof i ? r(e, a(n[o].value)) : "object" == typeof n[o] && null !== n[o] && 1 === e.nodeType && (e = t(e, n[o]));
            return e
        }
        var c = {
                rowspan: "rowSpan",
                colspan: "colSpan",
                cellpadding: "cellPadding",
                cellspacing: "cellSpacing",
                tabindex: "tabIndex",
                accesskey: "accessKey",
                hidefocus: "hideFocus",
                usemap: "useMap",
                maxlength: "maxLength",
                readonly: "readOnly",
                contenteditable: "contentEditable"
            },
            h = {
                enctype: "encoding",
                onscroll: "DOMMouseScroll"
            },
            u = function(e) {
                for (var t, r = {}; e.length;) t = e.shift(), r["on" + t.toLowerCase()] = t;
                return r
            }("blur,change,click,dblclick,error,focus,keydown,keypress,keyup,load,mousedown,mouseenter,mouseleave,mousemove,mouseout,mouseover,mouseup,resize,scroll,select,submit,unload".split(","));
        JsonML.onerror = null, JsonML.parse = function(e, t) {
            try {
                if (!e) return null;
                if ("string" == typeof e) return document.createTextNode(e);
                if (e instanceof i) return a(e.value);
                if (!JsonML.isElement(e)) throw new SyntaxError("invalid JsonML");
                var n = e[0];
                if (!n) {
                    for (var c = document.createDocumentFragment ? document.createDocumentFragment() : document.createElement(""), h = 1; h < e.length; h++) r(c, JsonML.parse(e[h], t));
                    return s(c), 1 === c.childNodes.length ? c.firstChild : c
                }
                if ("style" === n.toLowerCase() && document.createStyleSheet) return JsonML.patch(document.createStyleSheet(), e, t), null;
                svgns = "http://www.w3.org/2000/svg";
                var u;
                return u = l(document.createElementNS(svgns, n), e, t), s(u), u && "function" == typeof t ? t(u) : u
            } catch (d) {
                try {
                    var f = "function" == typeof JsonML.onerror ? JsonML.onerror : o;
                    return f(d, e, t)
                } catch (m) {
                    return document.createTextNode("[" + m + "]")
                }
            }
        }, JsonML.isElement = function(e) {
            return e instanceof Array && "string" == typeof e[0]
        }
    }();
var WaveDrom = {
    version: "2013.12.18",
    timer: 0,
    lane: {
        xs: 20,
        ys: 20,
        xg: 120,
        yh0: 0,
        yh1: 0,
        yf0: 0,
        yf1: 0,
        y0: 5,
        yo: 30,
        tgo: -10,
        ym: 15,
        xlabel: 6,
        xmax: 1,
        scale: 1,
        head: {},
        foot: {}
    },
    canvas: {
        heigth: 85
    },
    panela: {
        ys: 200
    },
    genBrick: function(e, t, r) {
        "use strict";
        var n, s, a = [];
        if (4 === e.length) {
            for (s = 0; r > s; s += 1) {
                for (a.push(e[0]), n = 0; t > n; n += 1) a.push(e[1]);
                for (a.push(e[2]), n = 0; t > n; n += 1) a.push(e[3])
            }
            return a
        }
        for (1 === e.length && e.push(e[0]), a.push(e[0]), n = 0; 2 * r * (t + 1) - 1 > n; n += 1) a.push(e[1]);
        return a
    },
    genFirstWaveBrick: function(e, t, r) {
        "use strict";
        var n = [];
        switch (e) {
            case "p":
                n = this.genBrick(["pclk", "111", "nclk", "000"], t, r);
                break;
            case "n":
                n = this.genBrick(["nclk", "000", "pclk", "111"], t, r);
                break;
            case "P":
                n = this.genBrick(["Pclk", "111", "nclk", "000"], t, r);
                break;
            case "N":
                n = this.genBrick(["Nclk", "000", "pclk", "111"], t, r);
                break;
            case "l":
            case "L":
            case "0":
                n = this.genBrick(["000"], t, r);
                break;
            case "h":
            case "H":
            case "1":
                n = this.genBrick(["111"], t, r);
                break;
            case "=":
                n = this.genBrick(["vvv-2"], t, r);
                break;
            case "2":
                n = this.genBrick(["vvv-2"], t, r);
                break;
            case "3":
                n = this.genBrick(["vvv-3"], t, r);
                break;
            case "4":
                n = this.genBrick(["vvv-4"], t, r);
                break;
            case "5":
                n = this.genBrick(["vvv-5"], t, r);
                break;
            case "d":
                n = this.genBrick(["ddd"], t, r);
                break;
            case "u":
                n = this.genBrick(["uuu"], t, r);
                break;
            case "z":
                n = this.genBrick(["zzz"], t, r);
                break;
            default:
                n = this.genBrick(["xxx"], t, r)
        }
        return n
    },
    genWaveBrick: function(e, t, r) {
        "use strict";
        var n, s, a, i, o, l, c, h, u, d, f, m, g, p, x;
        return n = {
            p: "pclk",
            n: "nclk",
            P: "Pclk",
            N: "Nclk",
            h: "pclk",
            l: "nclk",
            H: "Pclk",
            L: "Nclk"
        }, s = {
            0: "0",
            1: "1",
            x: "x",
            d: "d",
            u: "u",
            z: "z",
            "=": "v",
            2: "v",
            3: "v",
            4: "v",
            5: "v"
        }, a = {
            0: "",
            1: "",
            x: "",
            d: "",
            u: "",
            z: "",
            "=": "-2",
            2: "-2",
            3: "-3",
            4: "-4",
            5: "-5"
        }, i = {
            p: "0",
            n: "1",
            P: "0",
            N: "1",
            h: "1",
            l: "0",
            H: "1",
            L: "0",
            0: "0",
            1: "1",
            x: "x",
            d: "d",
            u: "u",
            z: "z",
            "=": "v",
            2: "v",
            3: "v",
            4: "v",
            5: "v"
        }, o = {
            p: "",
            n: "",
            P: "",
            N: "",
            h: "",
            l: "",
            H: "",
            L: "",
            0: "",
            1: "",
            x: "",
            d: "",
            u: "",
            z: "",
            "=": "-2",
            2: "-2",
            3: "-3",
            4: "-4",
            5: "-5"
        }, l = {
            p: "111",
            n: "000",
            P: "111",
            N: "000",
            h: "111",
            l: "000",
            H: "111",
            L: "000",
            0: "000",
            1: "111",
            x: "xxx",
            d: "ddd",
            u: "uuu",
            z: "zzz",
            "=": "vvv-2",
            2: "vvv-2",
            3: "vvv-3",
            4: "vvv-4",
            5: "vvv-5"
        }, c = {
            p: "nclk",
            n: "pclk",
            P: "nclk",
            N: "pclk"
        }, h = {
            p: "000",
            n: "111",
            P: "000",
            N: "111"
        }, u = {
            hp: "111",
            Hp: "111",
            ln: "000",
            Ln: "000",
            nh: "111",
            Nh: "111",
            pl: "000",
            Pl: "000"
        }, d = e.split(""), f = l[d[1]], m = n[d[1]], void 0 === m ? (g = s[d[1]], void 0 === g ? this.genBrick(["xxx"], t, r) : (p = i[d[0]], void 0 === p ? this.genBrick(["xxx"], t, r) : this.genBrick([p + "m" + g + o[d[0]] + a[d[1]], f], t, r))) : (x = u[e], void 0 !== x && (m = x), g = c[d[1]], void 0 === g ? this.genBrick([m, f], t, r) : this.genBrick([m, f, g, h[d[1]]], t, r))
    },
    parseWaveLane: function(e, t) {
        "use strict";
        var r, n, s, a, i = [],
            o = [];
        for (i = e.split(""), s = i.shift(), r = 1;
            "." === i[0] || "|" === i[0];) i.shift(), r += 1;
        for (o = o.concat(this.genFirstWaveBrick(s, t, r)); i.length;) {
            for (n = s, s = i.shift(), r = 1;
                "." === i[0] || "|" === i[0];) i.shift(), r += 1;
            o = o.concat(this.genWaveBrick(n + s, t, r))
        }
        for (a = 0; a < this.lane.phase; a += 1) o.shift();
        return o
    }
};
WaveDrom.parseWaveLanes = function(e) {
    "use strict";

    function t(e) {
        var t = e.data;
        return void 0 === t ? null : "string" == typeof t ? t.split(" ") : t
    }
    var r, n, s = [],
        a = [];
    for (r in e) n = e[r], this.lane.period = n.period ? n.period : 1, this.lane.phase = n.phase ? 2 * n.phase : 0, s.push([]), a[0] = n.name || " ", a[1] = n.phase || 0, s[s.length - 1][0] = a.slice(0), s[s.length - 1][1] = n.wave ? this.parseWaveLane(n.wave, this.lane.period * this.lane.hscale - 1) : null, s[s.length - 1][2] = t(n);
    return s
}, WaveDrom.FindLaneMarkers = function(e) {
    "use strict";
    var t, r = 0,
        n = 0,
        s = [];
    for (t in e) "vvv-2" === e[t] | "vvv-3" === e[t] | "vvv-4" === e[t] | "vvv-5" === e[t] ? n += 1 : 0 !== n && (s.push(r - (n + 1) / 2), n = 0), r += 1;
    return 0 !== n && s.push(r - (n + 1) / 2), s
}, WaveDrom.RenderWaveLane = function(e, t, r) {
    "use strict";
    var n, s, a, i, o, l, c, h, u, d = [1],
        f = 0,
        m = 0,
        g = [],
        p = "http://www.w3.org/2000/svg",
        x = "http://www.w3.org/1999/xlink",
        y = "http://www.w3.org/XML/1998/namespace";
    for (s = 0; s < t.length; s += 1)
        if (u = t[s][0][0]) {
            i = JsonML.parse(["g", {
                id: "wavelane_" + s + "_" + r,
                transform: "translate(0," + (this.lane.y0 + s * this.lane.yo) + ")"
            }]), e.insertBefore(i, null), "number" == typeof u && (u += ""), l = JsonML.parse(["text", {
                x: this.lane.tgo,
                y: this.lane.ym,
                "class": "info",
                "text-anchor": "end"
            }, u]), l.setAttributeNS(y, "xml:space", "preserve"), i.insertBefore(l, null), h = this.lane.xs * this.lane.hscale * 2, g.push(l.getBBox().width);
            var v;
            if (v = t[s][0][1], v = v > 0 ? Math.ceil(2 * v) - 2 * v : -2 * v, o = JsonML.parse(["g", {
                    id: "wavelane_draw_" + s + "_" + r,
                    transform: "translate(" + v * this.lane.xs + ", 0)"
                }]), i.insertBefore(o, null), t[s][1]) {
                for (n = 0; n < t[s][1].length; n += 1) c = document.createElementNS(p, "use"), c.setAttributeNS(x, "xlink:href", "#" + t[s][1][n]), c.setAttribute("transform", "translate(" + n * this.lane.xs + ")"), o.insertBefore(c, null);
                if (t[s][2] && t[s][2].length && (d = this.FindLaneMarkers(t[s][1]), 0 !== d.length))
                    for (a in d) t[s][2] && "undefined" != typeof t[s][2][a] && (l = JsonML.parse(["text", {
                        x: d[a] * this.lane.xs + this.lane.xlabel,
                        y: this.lane.ym,
                        "text-anchor": "middle"
                    }, t[s][2][a]]), l.setAttributeNS(y, "xml:space", "preserve"), o.insertBefore(l, null));
                t[s][1].length > f && (f = t[s][1].length)
            }
        }
    return this.lane.xmax = f, this.lane.xg = m + 20, g
}, WaveDrom.RenderMarks = function(e, t, r) {
    "use strict";

    function n(e, t, r) {
        var n;
        e[t] && e[t].text && (n = JsonML.parse(["text", {
            x: e.xmax * e.xs / 2,
            y: r,
            "text-anchor": "middle",
            fill: "#000"
        }, e[t].text]), n.setAttributeNS(u, "xml:space", "preserve"), i.insertBefore(n, null))
    }

    function s(e, t, r, n, s, a, o) {
        var l, c, h, d, f, m = 1,
            g = 0,
            p = [];
        if (void 0 !== e[t] && void 0 !== e[t][r]) {
            if (d = e[t][r], "string" == typeof d) d = d.split(" ");
            else if ("number" == typeof d || "boolean" == typeof d) {
                h = Number(d), d = [];
                for (var l = 0; o > l; l += 1) d.push(l + h)
            }
            if ("[object Array]" === Object.prototype.toString.call(d) && 0 !== d.length) {
                if (1 === d.length)
                    if (h = Number(d[0]), isNaN(h)) p = d;
                    else
                        for (var l = 0; o > l; l += 1) p[l] = l + h;
                else if (2 === d.length)
                    if (h = Number(d[0]), m = Number(d[1]), f = d[1].split("."), 2 === f.length && (g = f[1].length), isNaN(h) || isNaN(m)) p = d;
                    else {
                        h = m * h;
                        for (var l = 0; o > l; l += 1) p[l] = (m * l + h).toFixed(g)
                    }
                else p = d;
                for (l = 0; o > l; l += 1) f = p[l], "number" == typeof f && (f += ""), c = JsonML.parse(["text", {
                    x: l * s + n,
                    y: a,
                    "text-anchor": "middle",
                    "class": "muted"
                }, f]), c.setAttributeNS(u, "xml:space", "preserve"), i.insertBefore(c, null)
            }
        }
    }
    var a, i, o, l, c, h, u = "http://www.w3.org/XML/1998/namespace";
    for (l = 2 * this.lane.hscale, c = l * this.lane.xs, o = this.lane.xmax / l, h = t.length * this.lane.yo, i = JsonML.parse(["g", {
            id: "gmarks_" + r
        }]), e.insertBefore(i, e.firstChild), a = 0; o + 1 > a; a += 1) i.insertBefore(JsonML.parse(["path", {
        id: "gmark_" + a + "_" + r,
        d: "m " + a * c + ",0 0," + h,
        style: "stroke:#888;stroke-width:0.5;stroke-dasharray:1,3"
    }]), null);
    n(this.lane, "head", this.lane.yh0 ? -33 : -13), n(this.lane, "foot", h + (this.lane.yf0 ? 45 : 25)), s(this.lane, "head", "tick", 0, c, -5, o + 1), s(this.lane, "head", "tock", c / 2, c, -5, o), s(this.lane, "foot", "tick", 0, c, h + 15, o + 1), s(this.lane, "foot", "tock", c / 2, c, h + 15, o)
}, WaveDrom.RenderGroups = function(e, t, r) {
    "use strict";
    var n, s, a, i, o, l, c = "http://www.w3.org/2000/svg",
        h = "http://www.w3.org/XML/1998/namespace";
    for (n in t) s = document.createElementNS(c, "path"), s.id = "group_" + n + "_" + r, s.setAttribute("d", "m " + (t[n].x + .5) + "," + (t[n].y * this.lane.yo + 3.5 + this.lane.yh0 + this.lane.yh1) + " c -3,0 -5,2 -5,5 l 0," + (t[n].height * this.lane.yo - 16) + " c 0,3 2,5 5,5"), s.setAttribute("style", "stroke:#0041c4;stroke-width:1;fill:none"), e.insertBefore(s, null), l = t[n].name, "undefined" != typeof l && ("number" == typeof l && (l += ""), i = t[n].x - 10, o = this.lane.yo * (t[n].y + t[n].height / 2) + this.lane.yh0 + this.lane.yh1, a = JsonML.parse(["text", {
        x: i,
        y: o,
        "text-anchor": "middle",
        "class": "info",
        transform: "rotate(270," + i + "," + o + ")"
    }, l]), a.setAttributeNS(h, "xml:space", "preserve"), e.insertBefore(a, null))
}, WaveDrom.RenderGaps = function(e, t, r) {
    "use strict";
    var n, s, a, i, o, l, c = [],
        h = "http://www.w3.org/2000/svg",
        u = "http://www.w3.org/1999/xlink";
    if (t) {
        s = document.createElementNS(h, "g"), s.id = "wavegaps_" + r, e.insertBefore(s, null);
        for (n in t)
            if (this.lane.period = t[n].period ? t[n].period : 1, this.lane.phase = t[n].phase ? 2 * t[n].phase : 0, a = document.createElementNS(h, "g"), a.id = "wavegap_" + n + "_" + r, a.setAttribute("transform", "translate(0," + (this.lane.y0 + n * this.lane.yo) + ")"), s.insertBefore(a, null), l = t[n].wave)
                for (c = l.split(""), o = 0; c.length;) "|" === c.shift() && (i = document.createElementNS(h, "use"), i.setAttributeNS(u, "xlink:href", "#gap"), i.setAttribute("transform", "translate(" + this.lane.xs * ((2 * o + 1) * this.lane.period * this.lane.hscale - this.lane.phase) + ")"), a.insertBefore(i, null)), o += 1
    }
}, WaveDrom.RenderArcs = function(e, t, r, n) {
    "use strict";

    function s() {
        g = document.createElementNS(b, "path"), g.id = "gmark_" + y.from + "_" + y.to, g.setAttribute("d", "M " + f.x + "," + f.y + " " + m.x + "," + m.y), g.setAttribute("style", "fill:none;stroke:#00F;stroke-width:1"), a.insertBefore(g, null)
    }
    var a, i, o, l, c, h, u, d, f, m, g, p, x = [],
        y = {
            words: [],
            from: 0,
            shape: "",
            to: 0,
            label: ""
        },
        v = {},
        b = "http://www.w3.org/2000/svg",
        k = "http://www.w3.org/XML/1998/namespace";
    if (t) {
        for (i in t)
            if (this.lane.period = t[i].period ? t[i].period : 1, this.lane.phase = t[i].phase ? 2 * t[i].phase : 0, l = t[i].node)
                for (x = l.split(""), c = 0; x.length;) h = x.shift(), "." !== h && (v[h] = {
                    x: this.lane.xs * (2 * c * this.lane.period * this.lane.hscale - this.lane.phase) + this.lane.xlabel,
                    y: i * this.lane.yo + this.lane.y0 + .5 * this.lane.ys
                }), c += 1;
        if (a = document.createElementNS(b, "g"), a.id = "wavearcs_" + r, e.insertBefore(a, null), n.edge)
            for (i in n.edge) {
                y.words = n.edge[i].split(" "), y.label = n.edge[i].substring(y.words[0].length), y.label = y.label.substring(1), y.from = y.words[0].substr(0, 1), y.to = y.words[0].substr(-1, 1), y.shape = y.words[0].slice(1, -1), f = v[y.from], m = v[y.to], s(), y.label && (u = JsonML.parse(["text", {
                    style: "font-size:10px;",
                    "text-anchor": "middle"
                }, y.label + ""]), u.setAttributeNS(k, "xml:space", "preserve"), d = JsonML.parse(["rect", {
                    height: 9,
                    style: "fill:#FFF;"
                }]), a.insertBefore(d, null), a.insertBefore(u, null), p = u.getBBox().width, d.setAttribute("width", p));
                var w = m.x - f.x,
                    A = m.y - f.y,
                    B = (f.x + m.x) / 2,
                    N = (f.y + m.y) / 2;
                switch (y.shape) {
                    case "-":
                        break;
                    case "~":
                        g.setAttribute("d", "M " + f.x + "," + f.y + " c " + .7 * w + ", 0 " + .3 * w + ", " + A + " " + w + ", " + A);
                        break;
                    case "-~":
                        g.setAttribute("d", "M " + f.x + "," + f.y + " c " + .7 * w + ", 0 " + w + ", " + A + " " + w + ", " + A), y.label && (B = f.x + .75 * (m.x - f.x));
                        break;
                    case "~-":
                        g.setAttribute("d", "M " + f.x + "," + f.y + " c 0, 0 " + .3 * w + ", " + A + " " + w + ", " + A), y.label && (B = f.x + .25 * (m.x - f.x));
                        break;
                    case "-|":
                        g.setAttribute("d", "m " + f.x + "," + f.y + " " + w + ",0 0," + A), y.label && (B = m.x);
                        break;
                    case "|-":
                        g.setAttribute("d", "m " + f.x + "," + f.y + " 0," + A + " " + w + ",0"), y.label && (B = f.x);
                        break;
                    case "-|-":
                        g.setAttribute("d", "m " + f.x + "," + f.y + " " + w / 2 + ",0 0," + A + " " + w / 2 + ",0");
                        break;
                    case "->":
                        g.setAttribute("style", "marker-end:url(#arrowhead);stroke:#0041c4;stroke-width:1;fill:none");
                        break;
                    case "~>":
                        g.setAttribute("style", "marker-end:url(#arrowhead);stroke:#0041c4;stroke-width:1;fill:none"), g.setAttribute("d", "M " + f.x + "," + f.y + " c " + .7 * w + ", 0 " + .3 * w + ", " + A + " " + w + ", " + A);
                        break;
                    case "-~>":
                        g.setAttribute("style", "marker-end:url(#arrowhead);stroke:#0041c4;stroke-width:1;fill:none"), g.setAttribute("d", "M " + f.x + "," + f.y + " c " + .7 * w + ", 0 " + w + ", " + A + " " + w + ", " + A), y.label && (B = f.x + .75 * (m.x - f.x));
                        break;
                    case "~->":
                        g.setAttribute("style", "marker-end:url(#arrowhead);stroke:#0041c4;stroke-width:1;fill:none"), g.setAttribute("d", "M " + f.x + "," + f.y + " c 0, 0 " + .3 * w + ", " + A + " " + w + ", " + A), y.label && (B = f.x + .25 * (m.x - f.x));
                        break;
                    case "-|>":
                        g.setAttribute("style", "marker-end:url(#arrowhead);stroke:#0041c4;stroke-width:1;fill:none"), g.setAttribute("d", "m " + f.x + "," + f.y + " " + w + ",0 0," + A), y.label && (B = m.x);
                        break;
                    case "|->":
                        g.setAttribute("style", "marker-end:url(#arrowhead);stroke:#0041c4;stroke-width:1;fill:none"), g.setAttribute("d", "m " + f.x + "," + f.y + " 0," + A + " " + w + ",0"), y.label && (B = f.x);
                        break;
                    case "-|->":
                        g.setAttribute("style", "marker-end:url(#arrowhead);stroke:#0041c4;stroke-width:1;fill:none"), g.setAttribute("d", "m " + f.x + "," + f.y + " " + w / 2 + ",0 0," + A + " " + w / 2 + ",0");
                        break;
                    case "<->":
                        g.setAttribute("style", "marker-end:url(#arrowhead);marker-start:url(#arrowtail);stroke:#0041c4;stroke-width:1;fill:none");
                        break;
                    case "<~>":
                        g.setAttribute("style", "marker-end:url(#arrowhead);marker-start:url(#arrowtail);stroke:#0041c4;stroke-width:1;fill:none"), g.setAttribute("d", "M " + f.x + "," + f.y + " c " + .7 * w + ", 0 " + .3 * w + ", " + A + " " + w + ", " + A);
                        break;
                    case "<-~>":
                        g.setAttribute("style", "marker-end:url(#arrowhead);marker-start:url(#arrowtail);stroke:#0041c4;stroke-width:1;fill:none"), g.setAttribute("d", "M " + f.x + "," + f.y + " c " + .7 * w + ", 0 " + w + ", " + A + " " + w + ", " + A), y.label && (B = f.x + .75 * (m.x - f.x));
                        break;
                    case "<-|>":
                        g.setAttribute("style", "marker-end:url(#arrowhead);marker-start:url(#arrowtail);stroke:#0041c4;stroke-width:1;fill:none"), g.setAttribute("d", "m " + f.x + "," + f.y + " " + w + ",0 0," + A), y.label && (B = m.x);
                        break;
                    case "<-|->":
                        g.setAttribute("style", "marker-end:url(#arrowhead);marker-start:url(#arrowtail);stroke:#0041c4;stroke-width:1;fill:none"), g.setAttribute("d", "m " + f.x + "," + f.y + " " + w / 2 + ",0 0," + A + " " + w / 2 + ",0");
                        break;
                    default:
                        g.setAttribute("style", "fill:none;stroke:#F00;stroke-width:1")
                }
                y.label && (u.setAttribute("x", B), u.setAttribute("y", N + 3), d.setAttribute("x", B - p / 2), d.setAttribute("y", N - 5))
            }
        for (o in v) o == o.toLowerCase() && v[o].x > 0 && (d = JsonML.parse(["rect", {
            y: v[o].y - 4,
            height: 8,
            style: "fill:#FFF;"
        }]), a.insertBefore(d, null), u = JsonML.parse(["text", {
            style: "font-size:8px;",
            x: v[o].x,
            y: v[o].y + 2,
            "text-anchor": "middle"
        }, o + ""]), a.insertBefore(u, null), p = u.getBBox().width + 2, d.setAttribute("x", v[o].x - p / 2), d.setAttribute("width", p))
    }
}, WaveDrom.parseConfig = function(e) {
    "use strict";

    function t(e) {
        return e > 0 ? Math.round(e) : 1
    }
    var r;
    this.lane.hscale = 1, this.lane.hscale0 && (this.lane.hscale = this.lane.hscale0), e && e.config && e.config.hscale && (r = Math.round(t(e.config.hscale)), r > 0 && (r > 100 && (r = 100), this.lane.hscale = r)), this.lane.yh0 = 0, this.lane.yh1 = 0, this.lane.head = e.head, e && e.head && ((e.head.tick || 0 == e.head.tick) && (this.lane.yh0 = 20), (e.head.tock || 0 == e.head.tock) && (this.lane.yh0 = 20), e.head.text && (this.lane.yh1 = 46, this.lane.head.text = e.head.text)), this.lane.yf0 = 0, this.lane.yf1 = 0, this.lane.foot = e.foot, e && e.foot && ((e.foot.tick || 0 == e.foot.tick) && (this.lane.yf0 = 20), (e.foot.tock || 0 == e.foot.tock) && (this.lane.yf0 = 20), e.foot.text && (this.lane.yf1 = 46, this.lane.foot.text = e.foot.text))
}, WaveDrom.rec = function(e, t) {
    "use strict";
    var r, n, s = {},
        a = {
            x: 10
        };
    for (("string" == typeof e[0] || "number" == typeof e[0]) && (n = e[0], a.x = 25), t.x += a.x, r = 0; r < e.length; r++) "object" == typeof e[r] && ("[object Array]" === Object.prototype.toString.call(e[r]) ? (s.y = t.y, t = this.rec(e[r], t), t.groups.push({
        x: t.xx,
        y: s.y,
        height: t.y - s.y,
        name: t.name
    })) : (t.lanes.push(e[r]), t.width.push(t.x), t.y += 1));
    return t.xx = t.x, t.x -= a.x, t.name = n, t
}, WaveDrom.InsertSVGTemplate = function(e, t, r) {
    "use strict";
    for (var n, s, a; t.childNodes.length;) t.removeChild(t.childNodes[0]);
    for (s in WaveSkin) break;
    a = WaveSkin["default"] || WaveSkin[s], r && r.config && r.config.skin && WaveSkin[r.config.skin] && (a = WaveSkin[r.config.skin]), 0 === e ? (this.lane.xs = Number(a[3][1][2][1].width), this.lane.ys = Number(a[3][1][2][1].height), this.lane.xlabel = Number(a[3][1][2][1].x), this.lane.ym = Number(a[3][1][2][1].y)) : a = ["svg", {
            id: "svg",
            xmlns: "http://www.w3.org/2000/svg",
            "xmlns:xlink": "http://www.w3.org/1999/xlink",
            height: "0"
        },
        ["g", {
                id: "waves"
            },
            ["g", {
                id: "lanes"
            }],
            ["g", {
                id: "groups"
            }]
        ]
    ], a[a.length - 1][1].id = "waves_" + e, a[a.length - 1][2][1].id = "lanes_" + e, a[a.length - 1][3][1].id = "groups_" + e, a[1].id = "svgcontent_" + e, a[1].height = 0, n = JsonML.parse(a), t.insertBefore(n, null)
}, WaveDrom.InsertSVGTemplateAssign = function(e, t) {
    "use strict";
    for (var r, n; t.childNodes.length;) t.removeChild(t.childNodes[0]);
    n = ["svg", {
            id: "svgcontent_" + e,
            xmlns: "http://www.w3.org/2000/svg",
            "xmlns:xlink": "http://www.w3.org/1999/xlink",
            overflow: "hidden"
        },
        ["style", ".pinname {font-size:12px; font-style:normal; font-variant:normal; font-weight:500; font-stretch:normal; text-align:center; text-anchor:end; font-family:Helvetica} .wirename {font-size:12px; font-style:normal; font-variant:normal; font-weight:500; font-stretch:normal; text-align:center; text-anchor:start; font-family:Helvetica} .wirename:hover {fill:blue} .gate {color:#000; fill:#ffc; fill-opacity: 1;stroke:#000; stroke-width:1; stroke-opacity:1} .gate:hover {fill:red !important; } .wire {fill:none; stroke:#000; stroke-width:1; stroke-opacity:1} .grid {fill:#fff; fill-opacity:1; stroke:none}"]
    ], r = JsonML.parse(n), t.insertBefore(r, null)
}, WaveDrom.RenderAssign = function(e, t) {
    function r(e, t) {
        var n, s, a, i;
        for (t.xmax = Math.max(t.xmax, t.x), n = e[0], s = t.y, i = e.length, a = 1; i > a; a++) "[object Array]" === Object.prototype.toString.call(e[a]) ? t = r(e[a], {
            x: t.x + 1,
            y: t.y,
            xmax: t.xmax
        }) : (e[a] = {
            name: e[a],
            x: t.x + 1,
            y: t.y
        }, t.y += 2);
        return e[0] = {
            name: e[0],
            x: t.x,
            y: Math.round((s + (t.y - 2)) / 2)
        }, t.x--, t
    }

    function n(e) {
        var t, r = {
            "~": "m -16,0 4,0 m 0,-6 0,12 10,-6 z m 10,6 c 0,1.104569 0.895431,2 2,2 1.104569,0 2,-0.895431 2,-2 0,-1.104569 -0.895431,-2 -2,-2 -1.104569,0 -2,0.895431 -2,2 z",
            "=": "m -2,0 2,0 m -12,-6 0,12 10,-6 z m -4,6 4,0",
            "&": "m -16,-10 5,0 c 6,0 11,4 11,10 0,6 -5,10 -11,10 l -5,0 z",
            "~&": "m -16,-10 3,0 c 6,0 11,4 11,10 0,6 -5,10 -11,10 l -3,0 z M 2,0 C 2,1.104569 1.104569,2 0,2 -1.104569,2 -2,1.104569 -2,0 c 0,-1.104569 0.895431,-2 2,-2 1.104569,0 2,0.895431 2,2 z",
            "|": "m -18,-10 4,0 c 6,0 12,5 14,10 -2,5 -8,10 -14,10 l -4,0 c 2.5,-5 2.5,-15 0,-20 z",
            "~|": "M 2,0 C 2,1.10457 1.104569,2 0,2 -1.104569,2 -2,0.745356 -2,0 c 0,-0.745356 0.895431,-2 2,-2 1.104569,0 2,0.89543 2,2 z m -20,-10 2,0 c 6,0 12,5 14,10 -2,5 -8,10 -14,10 l -2,0 c 2.5,-5 2.5,-15 0,-20 z",
            "^": "m -21,-10 c 1,3 2,6 2,10 m 0,0 c 0,4 -1,7 -2,10 m 3,-20 4,0 c 6,0 12,5 14,10 -2,5 -8,10 -14,10 l -4,0 c 1,-3 2,-6 2,-10 0,-4 -1,-7 -2,-10 z",
            "~^": "m -21,-10 c 1,3 2,6 2,10 m 0,0 c 0,4 -1,7 -2,10 M 2,0 C 2,1.10457 1.104569,2 0,2 -1.104569,2 -2,0.745356 -2,0 c 0,-0.745356 0.895431,-2 2,-2 1.104569,0 2,0.89543 2,2 z m -20,-10 2,0 c 6,0 12,5 14,10 -2,5 -8,10 -14,10 l -2,0 c 1,-3 2,-6 2,-10 0,-4 -1,-7 -2,-10 z",
            "+": "m -8,5 0,-10 m -5,5 10,0 m 3,0 c 0,4.418278 -3.581722,8 -8,8 -4.418278,0 -8,-3.581722 -8,-8 0,-4.418278 3.581722,-8 8,-8 4.418278,0 8,3.581722 8,8 z",
            "*": "m -4,4 -8,-8 m 0,8 8,-8 m 4,4 c 0,4.418278 -3.581722,8 -8,8 -4.418278,0 -8,-3.581722 -8,-8 0,-4.418278 3.581722,-8 8,-8 4.418278,0 8,3.581722 8,8 z",
            box: "m -16,-10 16,0 0,20 -16,0 z"
        };
        return (t = r[e]) ? ["path", {
            "class": "gate",
            d: t
        }] : ["text", ["tspan", {
            x: "-14",
            y: "4",
            "class": "wirename"
        }, e]]
    }

    function s(e) {
        var t, r, s = ["g"],
            a = [];
        for (r = e.length, t = 2; r > t; t++) a.push(e[t][1]);
        for (s.push(["g", {
                    transform: "translate(16,0)"
                },
                ["path", {
                    d: "M  " + e[2][0] + "," + Math.min.apply(null, a) + " " + e[2][0] + "," + Math.max.apply(null, a),
                    "class": "wire"
                }]
            ]), t = 2; r > t; t++) s.push(["g", ["path", {
            d: "m  " + e[t][0] + "," + e[t][1] + " 16,0",
            "class": "wire"
        }]]);
        return s.push(["g", {
                transform: "translate(" + e[1][0] + "," + e[1][1] + ")"
            },
            ["title", e[0]], n(e[0], r - 2)
        ]), s
    }

    function a(e, t) {
        var r, n, i, o, l, c = ["g"],
            h = [];
        if ("[object Array]" === Object.prototype.toString.call(e)) {
            for (n = e.length, h.push(e[0].name), h.push([32 * (t - e[0].x), 8 * e[0].y]), r = 1; n > r; r++) h.push("[object Array]" === Object.prototype.toString.call(e[r]) ? [32 * (t - e[r][0].x), 8 * e[r][0].y] : [32 * (t - e[r].x), 8 * e[r].y]);
            for (c.push(s(h)), r = 1; n > r; r++) c.push(a(e[r], t))
        } else l = e.name, i = 32 * (t - e.x), o = 8 * e.y, c.push(["g", {
                transform: "translate(" + i + "," + o + ")"
            },
            ["title", l],
            ["path", {
                d: "M 2,0 a 2,2 0 1 1 -4,0 2,2 0 1 1 4,0 z"
            }],
            ["text", ["tspan", {
                x: "-4",
                y: "4",
                "class": "pinname"
            }, l]]
        ]);
        return c
    }
    var i, o, l, c, h, u, d, f, m, g, p = ["g"],
        x = ["g"];
    for (f = t.assign.length, o = {
            x: 0,
            y: 2,
            xmax: 0
        }, i = t.assign, d = 0; f > d; d++) o = r(i[d], o), o.x++;
    for (l = o.xmax + 3, console.log(JSON.stringify(i)), d = 0; f > d; d++) p.push(a(i[d], l));
    for (h = 32 * (l + 1) + 1, u = 8 * (o.y + 1) - 7, f = 4 * (l + 1), g = o.y + 1, d = 0; f >= d; d++)
        for (m = 0; g >= m; m++) x.push(["rect", {
            height: 1,
            width: 1,
            x: 8 * d - .5,
            y: 8 * m - .5,
            "class": "grid"
        }]);
    c = document.getElementById("svgcontent_" + e), c.setAttribute("viewBox", "0 0 " + h + " " + u), c.setAttribute("width", h), c.setAttribute("height", u), c.insertBefore(JsonML.parse(["g", {
        transform: "translate(0.5, 0.5)"
    }, x, p]), null)
}, WaveDrom.RenderWaveForm = function(index) {
    "use strict";

    function erra(e) {
        return console.log(e.stack), {
            signal: [{
                name: ["tspan", ["tspan", {
                    "class": "error h5"
                }, "Error: "], e.message]
            }]
        }
    }

    function eva(index) {
        var TheTextBox, source;
        if (TheTextBox = document.getElementById("InputJSON_" + index), TheTextBox.type && "textarea" == TheTextBox.type) try {
            source = eval("(" + TheTextBox.value + ")")
        } catch (e) {
            return erra(e)
        } else try {
            source = eval("(" + TheTextBox.innerHTML + ")")
        } catch (e) {
            return erra(e)
        }
        if ("[object Object]" !== Object.prototype.toString.call(source)) return erra({
            message: "[Semantic]: The root has to be an Object: '{signal:[...]}'"
        });
        if (source.signal) {
            if ("[object Array]" !== Object.prototype.toString.call(source.signal)) return erra({
                message: "[Semantic]: 'signal' object has to be an Array 'signal:[]'"
            })
        } else {
            if (!source.assign) return erra({
                message: "[Semantic]: 'signal:[...]' or 'assign:[...]' property is missing inside the root Object"
            });
            if ("[object Array]" !== Object.prototype.toString.call(source.assign)) return erra({
                message: "[Semantic]: 'assign' object hasto be an Array 'assign:[]'"
            })
        }
        return source
    }
    var source, ret, root, groups, svgcontent, content, width, height, glengths, xmax = 0,
        i;
    if (source = eva(index), source.signal) {
        WaveDrom.InsertSVGTemplate(index, document.getElementById("WaveDrom_Display_" + index), source), this.parseConfig(source), ret = this.rec(source.signal, {
            x: 0,
            y: 0,
            xmax: 0,
            width: [],
            lanes: [],
            groups: []
        }), root = document.getElementById("lanes_" + index), groups = document.getElementById("groups_" + index), content = this.parseWaveLanes(ret.lanes), glengths = this.RenderWaveLane(root, content, index);
        for (i in glengths) xmax = Math.max(xmax, glengths[i] + ret.width[i]);
        this.RenderMarks(root, content, index), this.RenderArcs(root, ret.lanes, index, source), this.RenderGaps(root, ret.lanes, index), this.RenderGroups(groups, ret.groups, index), this.lane.xg = Math.ceil((xmax - this.lane.tgo) / this.lane.xs) * this.lane.xs, width = this.lane.xg + this.lane.xs * (this.lane.xmax + 1), height = content.length * this.lane.yo + this.lane.yh0 + this.lane.yh1 + this.lane.yf0 + this.lane.yf1, svgcontent = document.getElementById("svgcontent_" + index), svgcontent.setAttribute("viewBox", "0 0 " + width + " " + height), svgcontent.setAttribute("width", width), svgcontent.setAttribute("height", height), svgcontent.setAttribute("overflow", "hidden"), root.setAttribute("transform", "translate(" + (this.lane.xg + .5) + ", " + (this.lane.yh0 + this.lane.yh1 + .5) + ")")
    } else source.assign && (WaveDrom.InsertSVGTemplateAssign(index, document.getElementById("WaveDrom_Display_" + index), source), WaveDrom.RenderAssign(index, source))
}, WaveDrom.ProcessAll = function() {
    "use strict";
    var e, t, r, n;
    for (r = 0, e = document.getElementsByTagName("SCRIPT"), t = 0; t < e.length; t++) e.item(t).type && "WaveDrom" === e.item(t).type && (e.item(t).setAttribute("id", "InputJSON_" + r), n = document.createElement("div"), n.id = "WaveDrom_Display_" + r, e.item(t).parentNode.insertBefore(n, e.item(t)), r += 1);
    for (t = 0; r > t; t += 1) WaveDrom.RenderWaveForm(t)
}, WaveDrom.EditorRefresh = function() {
    "use strict";
    var e, t, r, n, s, a;
    WaveDrom.RenderWaveForm(0), e = document.getElementById("svgcontent_0"), t = new XMLSerializer, r = '<?xml version="1.0" standalone="no"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<!-- Created with WaveDrom -->\n' + t.serializeToString(e), n = document.getElementById("download_svg"), n.href = "data:image/svg+xml;base64," + window.btoa(r), s = localStorage.waveform, a = document.getElementById("download_json"), a.href = "data:text/json;base64," + window.btoa(s)
};
