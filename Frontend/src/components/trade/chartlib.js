/*!
 * @license
 * TradingView Lightweight Charts v3.7.0
 * Copyright (c) 2020 TradingView, Inc.
 * Licensed under Apache License 2.0 https://www.apache.org/licenses/LICENSE-2.0
 */ 
!(function () {
    "use strict";
    var t, i;
    function n(t, i) {
      var n,
        s = (((n = {})[0] = []),
        (n[1] = [t.lineWidth, t.lineWidth]),
        (n[2] = [2 * t.lineWidth, 2 * t.lineWidth]),
        (n[3] = [6 * t.lineWidth, 6 * t.lineWidth]),
        (n[4] = [t.lineWidth, 4 * t.lineWidth]),
        n)[i];
      t.setLineDash(s);
    }
    function s(t, i, n, s) {
      t.beginPath();
      var h = t.lineWidth % 2 ? 0.5 : 0;
      t.moveTo(n, i + h), t.lineTo(s, i + h), t.stroke();
    }
    !(function (t) {
      (t[(t.Simple = 0)] = "Simple"), (t[(t.WithSteps = 1)] = "WithSteps");
    })(t || (t = {})),
      (function (t) {
        (t[(t.Solid = 0)] = "Solid"),
          (t[(t.Dotted = 1)] = "Dotted"),
          (t[(t.Dashed = 2)] = "Dashed"),
          (t[(t.LargeDashed = 3)] = "LargeDashed"),
          (t[(t.SparseDotted = 4)] = "SparseDotted");
      })(i || (i = {}));
    var h = function (t, i) {
      return (
        (h =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, i) {
              t.__proto__ = i;
            }) ||
          function (t, i) {
            for (var n in i)
              Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
          }),
        h(t, i)
      );
    };
    function r(t, i) {
      if ("function" != typeof i && null !== i)
        throw new TypeError(
          "Class extends value " + String(i) + " is not a constructor or null"
        );
      function n() {
        this.constructor = t;
      }
      h(t, i),
        (t.prototype =
          null === i ? Object.create(i) : ((n.prototype = i.prototype), new n()));
    }
    var e = function () {
      return (
        (e =
          Object.assign ||
          function (t) {
            for (var i, n = 1, s = arguments.length; n < s; n++)
              for (var h in (i = arguments[n]))
                Object.prototype.hasOwnProperty.call(i, h) && (t[h] = i[h]);
            return t;
          }),
        e.apply(this, arguments)
      );
    };
    function u(t, i, n) {
      if (n || 2 === arguments.length)
        for (var s, h = 0, r = i.length; h < r; h++)
          (!s && h in i) ||
            (s || (s = Array.prototype.slice.call(i, 0, h)), (s[h] = i[h]));
      return t.concat(s || Array.prototype.slice.call(i));
    }
    function a(t, i) {
      if (!t) throw new Error("Assertion failed" + (i ? ": " + i : ""));
    }
    function o(t) {
      if (void 0 === t) throw new Error("Value is undefined");
      return t;
    }
    function l(t) {
      if (null === t) throw new Error("Value is null");
      return t;
    }
    function f(t) {
      return l(o(t));
    }
    function c(t) {
      for (var i = [], n = 1; n < arguments.length; n++) i[n - 1] = arguments[n];
      for (var s = 0, h = i; s < h.length; s++) {
        var r = h[s];
        for (var e in r)
          void 0 !== r[e] &&
            ("object" != typeof r[e] || void 0 === t[e]
              ? (t[e] = r[e])
              : c(t[e], r[e]));
      }
      return t;
    }
    function v(t) {
      return "number" == typeof t && isFinite(t);
    }
    function _(t) {
      return "number" == typeof t && t % 1 == 0;
    }
    function d(t) {
      return "string" == typeof t;
    }
    function w(t) {
      return "boolean" == typeof t;
    }
    function M(t) {
      var i,
        n,
        s,
        h = t;
      if (!h || "object" != typeof h) return h;
      for (n in ((i = Array.isArray(h) ? [] : {}), h))
        h.hasOwnProperty(n) &&
          ((s = h[n]), (i[n] = s && "object" == typeof s ? M(s) : s));
      return i;
    }
    function b(t) {
      return null !== t;
    }
    function m(t) {
      return null === t ? void 0 : t;
    }
    var g = (function () {
        function t() {
          this.t = [];
        }
        return (
          (t.prototype.i = function (t) {
            this.t = t;
          }),
          (t.prototype.h = function (t, i, n, s) {
            this.t.forEach(function (h) {
              t.save(), h.h(t, i, n, s), t.restore();
            });
          }),
          t
        );
      })(),
      p = (function () {
        function t() {}
        return (
          (t.prototype.h = function (t, i, n, s) {
            t.save(), t.scale(i, i), this.u(t, n, s), t.restore();
          }),
          (t.prototype.o = function (t, i, n, s) {
            t.save(), t.scale(i, i), this.l(t, n, s), t.restore();
          }),
          (t.prototype.l = function (t, i, n) {}),
          t
        );
      })(),
      y = (function (t) {
        function i() {
          var i = (null !== t && t.apply(this, arguments)) || this;
          return (i.v = null), i;
        }
        return (
          r(i, t),
          (i.prototype._ = function (t) {
            this.v = t;
          }),
          (i.prototype.u = function (t) {
            if (null !== this.v && null !== this.v.M) {
              var i = this.v.M,
                n = this.v,
                s = function (s) {
                  t.beginPath();
                  for (var h = i.to - 1; h >= i.from; --h) {
                    var r = n.m[h];
                    t.moveTo(r.g, r.p), t.arc(r.g, r.p, s, 0, 2 * Math.PI);
                  }
                  t.fill();
                };
              (t.fillStyle = n.k), s(n.C + 2), (t.fillStyle = n.N), s(n.C);
            }
          }),
          i
        );
      })(p);
    function k() {
      return { m: [{ g: 0, p: 0, S: 0, D: 0 }], N: "", k: "", C: 0, M: null };
    }
    var C = { from: 0, to: 1 },
      x = (function () {
        function t(t, i) {
          (this.T = new g()),
            (this.A = []),
            (this.B = []),
            (this.L = !0),
            (this.F = t),
            (this.V = i),
            this.T.i(this.A);
        }
        return (
          (t.prototype.O = function (t) {
            var i = this.F.P();
            i.length !== this.A.length &&
              ((this.B = i.map(k)),
              (this.A = this.B.map(function (t) {
                var i = new y();
                return i._(t), i;
              })),
              this.T.i(this.A)),
              (this.L = !0);
          }),
          (t.prototype.W = function (t, i, n) {
            return this.L && (this.R(t), (this.L = !1)), this.T;
          }),
          (t.prototype.R = function (t) {
            var i = this,
              n = this.F.P(),
              s = this.V.I(),
              h = this.F.j();
            n.forEach(function (n, r) {
              var e,
                u = i.B[r],
                a = n.q(s);
              if (null !== a && n.U()) {
                var o = l(n.H());
                (u.N = a.Y),
                  (u.C = a.C),
                  (u.m[0].D = a.D),
                  (u.m[0].p = n.$().K(a.D, o.X)),
                  (u.k =
                    null !== (e = a.Z) && void 0 !== e ? e : i.F.J(u.m[0].p / t)),
                  (u.m[0].S = s),
                  (u.m[0].g = h.G(s)),
                  (u.M = C);
              } else u.M = null;
            });
          }),
          t
        );
      })(),
      N = (function () {
        function t(t) {
          this.tt = t;
        }
        return (
          (t.prototype.h = function (t, i, h, r) {
            if (null !== this.tt) {
              var e = this.tt.it.U,
                u = this.tt.nt.U;
              if (e || u) {
                t.save();
                var a = Math.round(this.tt.g * i),
                  o = Math.round(this.tt.p * i),
                  l = Math.ceil(this.tt.st * i),
                  f = Math.ceil(this.tt.ht * i);
                (t.lineCap = "butt"),
                  e &&
                    a >= 0 &&
                    ((t.lineWidth = Math.floor(this.tt.it.rt * i)),
                    (t.strokeStyle = this.tt.it.et),
                    (t.fillStyle = this.tt.it.et),
                    n(t, this.tt.it.ut),
                    (function (t, i, n, s) {
                      t.beginPath();
                      var h = t.lineWidth % 2 ? 0.5 : 0;
                      t.moveTo(i + h, n), t.lineTo(i + h, s), t.stroke();
                    })(t, a, 0, f)),
                  u &&
                    o >= 0 &&
                    ((t.lineWidth = Math.floor(this.tt.nt.rt * i)),
                    (t.strokeStyle = this.tt.nt.et),
                    (t.fillStyle = this.tt.nt.et),
                    n(t, this.tt.nt.ut),
                    s(t, o, 0, l)),
                  t.restore();
              }
            }
          }),
          t
        );
      })(),
      S = (function () {
        function t(t) {
          (this.L = !0),
            (this.at = {
              it: { rt: 1, ut: 0, et: "", U: !1 },
              nt: { rt: 1, ut: 0, et: "", U: !1 },
              st: 0,
              ht: 0,
              g: 0,
              p: 0,
            }),
            (this.ot = new N(this.at)),
            (this.lt = t);
        }
        return (
          (t.prototype.O = function () {
            this.L = !0;
          }),
          (t.prototype.W = function (t, i) {
            return this.L && (this.R(), (this.L = !1)), this.ot;
          }),
          (t.prototype.R = function () {
            var t = this.lt.U(),
              i = l(this.lt.ft()),
              n = i.vt().ct().crosshair,
              s = this.at;
            (s.nt.U = t && this.lt._t(i)),
              (s.it.U = t && this.lt.dt()),
              (s.nt.rt = n.horzLine.width),
              (s.nt.ut = n.horzLine.style),
              (s.nt.et = n.horzLine.color),
              (s.it.rt = n.vertLine.width),
              (s.it.ut = n.vertLine.style),
              (s.it.et = n.vertLine.color),
              (s.st = i.wt()),
              (s.ht = i.Mt()),
              (s.g = this.lt.bt()),
              (s.p = this.lt.gt());
          }),
          t
        );
      })(),
      D = {
        khaki: "#f0e68c",
        azure: "#f0ffff",
        aliceblue: "#f0f8ff",
        ghostwhite: "#f8f8ff",
        gold: "#ffd700",
        goldenrod: "#daa520",
        gainsboro: "#dcdcdc",
        gray: "#808080",
        green: "#008000",
        honeydew: "#f0fff0",
        floralwhite: "#fffaf0",
        lightblue: "#add8e6",
        lightcoral: "#f08080",
        lemonchiffon: "#fffacd",
        hotpink: "#ff69b4",
        lightyellow: "#ffffe0",
        greenyellow: "#adff2f",
        lightgoldenrodyellow: "#fafad2",
        limegreen: "#32cd32",
        linen: "#faf0e6",
        lightcyan: "#e0ffff",
        magenta: "#f0f",
        maroon: "#800000",
        olive: "#808000",
        orange: "#ffa500",
        oldlace: "#fdf5e6",
        mediumblue: "#0000cd",
        transparent: "#0000",
        lime: "#0f0",
        lightpink: "#ffb6c1",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        midnightblue: "#191970",
        orchid: "#da70d6",
        mediumorchid: "#ba55d3",
        mediumturquoise: "#48d1cc",
        orangered: "#ff4500",
        royalblue: "#4169e1",
        powderblue: "#b0e0e6",
        red: "#f00",
        coral: "#ff7f50",
        turquoise: "#40e0d0",
        white: "#fff",
        whitesmoke: "#f5f5f5",
        wheat: "#f5deb3",
        teal: "#008080",
        steelblue: "#4682b4",
        bisque: "#ffe4c4",
        aquamarine: "#7fffd4",
        aqua: "#0ff",
        sienna: "#a0522d",
        silver: "#c0c0c0",
        springgreen: "#00ff7f",
        antiquewhite: "#faebd7",
        burlywood: "#deb887",
        brown: "#a52a2a",
        beige: "#f5f5dc",
        chocolate: "#d2691e",
        chartreuse: "#7fff00",
        cornflowerblue: "#6495ed",
        cornsilk: "#fff8dc",
        crimson: "#dc143c",
        cadetblue: "#5f9ea0",
        tomato: "#ff6347",
        fuchsia: "#f0f",
        blue: "#00f",
        salmon: "#fa8072",
        blanchedalmond: "#ffebcd",
        slateblue: "#6a5acd",
        slategray: "#708090",
        thistle: "#d8bfd8",
        tan: "#d2b48c",
        cyan: "#0ff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkgray: "#a9a9a9",
        blueviolet: "#8a2be2",
        black: "#000",
        darkmagenta: "#8b008b",
        darkslateblue: "#483d8b",
        darkkhaki: "#bdb76b",
        darkorchid: "#9932cc",
        darkorange: "#ff8c00",
        darkgreen: "#006400",
        darkred: "#8b0000",
        dodgerblue: "#1e90ff",
        darkslategray: "#2f4f4f",
        dimgray: "#696969",
        deepskyblue: "#00bfff",
        firebrick: "#b22222",
        forestgreen: "#228b22",
        indigo: "#4b0082",
        ivory: "#fffff0",
        lavenderblush: "#fff0f5",
        feldspar: "#d19275",
        indianred: "#cd5c5c",
        lightgreen: "#90ee90",
        lightgrey: "#d3d3d3",
        lightskyblue: "#87cefa",
        lightslategray: "#789",
        lightslateblue: "#8470ff",
        snow: "#fffafa",
        lightseagreen: "#20b2aa",
        lightsalmon: "#ffa07a",
        darksalmon: "#e9967a",
        darkviolet: "#9400d3",
        mediumpurple: "#9370d8",
        mediumaquamarine: "#66cdaa",
        skyblue: "#87ceeb",
        lavender: "#e6e6fa",
        lightsteelblue: "#b0c4de",
        mediumvioletred: "#c71585",
        mintcream: "#f5fffa",
        navajowhite: "#ffdead",
        navy: "#000080",
        olivedrab: "#6b8e23",
        palevioletred: "#d87093",
        violetred: "#d02090",
        yellow: "#ff0",
        yellowgreen: "#9acd32",
        lawngreen: "#7cfc00",
        pink: "#ffc0cb",
        paleturquoise: "#afeeee",
        palegoldenrod: "#eee8aa",
        darkolivegreen: "#556b2f",
        darkseagreen: "#8fbc8f",
        darkturquoise: "#00ced1",
        peachpuff: "#ffdab9",
        deeppink: "#ff1493",
        violet: "#ee82ee",
        palegreen: "#98fb98",
        mediumseagreen: "#3cb371",
        peru: "#cd853f",
        saddlebrown: "#8b4513",
        sandybrown: "#f4a460",
        rosybrown: "#bc8f8f",
        purple: "#800080",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        papayawhip: "#ffefd5",
        mediumslateblue: "#7b68ee",
        plum: "#dda0dd",
        mediumspringgreen: "#00fa9a",
      };
    function T(t) {
      return t < 0 ? 0 : t > 255 ? 255 : Math.round(t) || 0;
    }
    function A(t) {
      return t <= 0 || t > 0
        ? t < 0
          ? 0
          : t > 1
          ? 1
          : Math.round(1e4 * t) / 1e4
        : 0;
    }
    var B = /^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])?$/i,
      L = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$/i,
      E = /^rgb\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*\)$/,
      F =
        /^rgba\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?[\d]{0,10}(?:\.\d+)?)\s*\)$/;
    function V(t) {
      var i;
      if (
        ((t = t.toLowerCase()) in D && (t = D[t]), (i = F.exec(t) || E.exec(t)))
      )
        return [
          T(parseInt(i[1], 10)),
          T(parseInt(i[2], 10)),
          T(parseInt(i[3], 10)),
          A(i.length < 5 ? 1 : parseFloat(i[4])),
        ];
      if ((i = L.exec(t)))
        return [
          T(parseInt(i[1], 16)),
          T(parseInt(i[2], 16)),
          T(parseInt(i[3], 16)),
          1,
        ];
      if ((i = B.exec(t)))
        return [
          T(17 * parseInt(i[1], 16)),
          T(17 * parseInt(i[2], 16)),
          T(17 * parseInt(i[3], 16)),
          1,
        ];
      throw new Error("Cannot parse color: " + t);
    }
    function O(t) {
      var i,
        n = V(t);
      return {
        yt: "rgb(" + n[0] + ", " + n[1] + ", " + n[2] + ")",
        kt:
          ((i = n),
          0.199 * i[0] + 0.687 * i[1] + 0.114 * i[2] > 160 ? "black" : "white"),
      };
    }
    function P(t, i, n, s, h, r) {
      t.fillRect(i + r, n, s - 2 * r, r),
        t.fillRect(i + r, n + h - r, s - 2 * r, r),
        t.fillRect(i, n, r, h),
        t.fillRect(i + s - r, n, r, h);
    }
    function W(t, i, n) {
      t.save(), t.scale(i, i), n(), t.restore();
    }
    function z(t, i, n, s, h, r) {
      t.save(),
        (t.globalCompositeOperation = "copy"),
        (t.fillStyle = r),
        t.fillRect(i, n, s, h),
        t.restore();
    }
    function R(t, i, n, s, h, r, e) {
      t.save(), (t.globalCompositeOperation = "copy");
      var u = t.createLinearGradient(0, 0, 0, h);
      u.addColorStop(0, r),
        u.addColorStop(1, e),
        (t.fillStyle = u),
        t.fillRect(i, n, s, h),
        t.restore();
    }
    var I,
      j = (function () {
        function t(t, i) {
          this._(t, i);
        }
        return (
          (t.prototype._ = function (t, i) {
            (this.tt = t), (this.Ct = i);
          }),
          (t.prototype.h = function (t, i, n, s, h, r) {
            if (this.tt.U) {
              t.font = i.xt;
              var e = this.tt.Nt || !this.tt.St ? i.Dt : 0,
                u = i.Tt,
                a = i.At,
                o = i.Bt,
                l = i.Lt,
                f = i.Et,
                c = this.tt.Ft,
                v = Math.ceil(n.Vt(t, c)),
                _ = i.Ot,
                d = i.Pt + a + o,
                w = Math.ceil(0.5 * d),
                M = u + v + l + f + e,
                b = this.Ct.Wt;
              this.Ct.zt && (b = this.Ct.zt);
              var m,
                g,
                p = (b = Math.round(b)) - w,
                y = p + d,
                k = "right" === h,
                C = k ? s : 0,
                x = Math.ceil(s * r),
                N = C;
              if (
                ((t.fillStyle = this.Ct.yt),
                (t.lineWidth = 1),
                (t.lineCap = "butt"),
                c)
              ) {
                k
                  ? ((m = C - e), (g = (N = C - M) + f))
                  : ((N = C + M), (m = C + e), (g = C + u + e + l));
                var S = Math.max(1, Math.floor(r)),
                  D = Math.max(1, Math.floor(u * r)),
                  T = k ? x : 0,
                  A = Math.round(p * r),
                  B = Math.round(N * r),
                  L = Math.round(b * r) - Math.floor(0.5 * r),
                  E = L + S + (L - A),
                  F = Math.round(m * r);
                t.save(),
                  t.beginPath(),
                  t.moveTo(T, A),
                  t.lineTo(B, A),
                  t.lineTo(B, E),
                  t.lineTo(T, E),
                  t.fill(),
                  (t.fillStyle = this.tt.Z),
                  t.fillRect(k ? x - D : 0, A, D, E - A),
                  this.tt.Nt &&
                    ((t.fillStyle = this.Ct.et), t.fillRect(T, L, F - T, S)),
                  (t.textAlign = "left"),
                  (t.fillStyle = this.Ct.et),
                  W(t, r, function () {
                    t.fillText(c, g, y - o - _);
                  }),
                  t.restore();
              }
            }
          }),
          (t.prototype.Mt = function (t, i) {
            return this.tt.U ? t.Pt + t.At + t.Bt : 0;
          }),
          t
        );
      })(),
      q = (function () {
        function t(t) {
          (this.Rt = { Wt: 0, et: "#FFF", yt: "#000" }),
            (this.It = { Ft: "", U: !1, Nt: !0, St: !1, Z: "" }),
            (this.jt = { Ft: "", U: !1, Nt: !1, St: !0, Z: "" }),
            (this.L = !0),
            (this.qt = new (t || j)(this.It, this.Rt)),
            (this.Ut = new (t || j)(this.jt, this.Rt));
        }
        return (
          (t.prototype.Ft = function () {
            return this.It.Ft;
          }),
          (t.prototype.Wt = function () {
            return this.Ht(), this.Rt.Wt;
          }),
          (t.prototype.O = function () {
            this.L = !0;
          }),
          (t.prototype.Mt = function (t, i) {
            return (
              void 0 === i && (i = !1),
              Math.max(this.qt.Mt(t, i), this.Ut.Mt(t, i))
            );
          }),
          (t.prototype.Yt = function () {
            return this.Rt.zt || 0;
          }),
          (t.prototype.Kt = function (t) {
            this.Rt.zt = t;
          }),
          (t.prototype.$t = function () {
            return this.Ht(), this.It.U || this.jt.U;
          }),
          (t.prototype.Xt = function () {
            return this.Ht(), this.It.U;
          }),
          (t.prototype.W = function (t) {
            return (
              this.Ht(),
              (this.It.Nt = this.It.Nt && t.ct().drawTicks),
              (this.jt.Nt = this.jt.Nt && t.ct().drawTicks),
              this.qt._(this.It, this.Rt),
              this.Ut._(this.jt, this.Rt),
              this.qt
            );
          }),
          (t.prototype.Zt = function () {
            return (
              this.Ht(),
              this.qt._(this.It, this.Rt),
              this.Ut._(this.jt, this.Rt),
              this.Ut
            );
          }),
          (t.prototype.Ht = function () {
            this.L &&
              ((this.It.Nt = !0),
              (this.jt.Nt = !1),
              this.Jt(this.It, this.jt, this.Rt));
          }),
          t
        );
      })(),
      U = (function (t) {
        function i(i, n, s) {
          var h = t.call(this) || this;
          return (h.lt = i), (h.Gt = n), (h.Qt = s), h;
        }
        return (
          r(i, t),
          (i.prototype.Jt = function (t, i, n) {
            t.U = !1;
            var s = this.lt.ct().horzLine;
            if (s.labelVisible) {
              var h = this.Gt.H();
              if (this.lt.U() && !this.Gt.ti() && null !== h) {
                var r = O(s.labelBackgroundColor);
                (n.yt = r.yt), (n.et = r.kt);
                var e = this.Qt(this.Gt);
                (n.Wt = e.Wt), (t.Ft = this.Gt.ii(e.D, h)), (t.U = !0);
              }
            }
          }),
          i
        );
      })(q),
      H = /[1-9]/g,
      Y = (function () {
        function t() {
          this.tt = null;
        }
        return (
          (t.prototype._ = function (t) {
            this.tt = t;
          }),
          (t.prototype.h = function (t, i, n) {
            var s = this;
            if (null !== this.tt && !1 !== this.tt.U && 0 !== this.tt.Ft.length) {
              t.font = i.xt;
              var h = Math.round(i.ni.Vt(t, this.tt.Ft, H));
              if (!(h <= 0)) {
                t.save();
                var r = i.si,
                  e = h + 2 * r,
                  u = e / 2,
                  a = this.tt.wt,
                  o = this.tt.Wt,
                  f = Math.floor(o - u) + 0.5;
                f < 0
                  ? ((o += Math.abs(0 - f)), (f = Math.floor(o - u) + 0.5))
                  : f + e > a &&
                    ((o -= Math.abs(a - (f + e))), (f = Math.floor(o - u) + 0.5));
                var c = f + e,
                  v = 0 + i.Tt + i.At + i.Pt + i.Bt;
                t.fillStyle = this.tt.yt;
                var _ = Math.round(f * n),
                  d = Math.round(0 * n),
                  w = Math.round(c * n),
                  M = Math.round(v * n);
                t.fillRect(_, d, w - _, M - d);
                var b = Math.round(this.tt.Wt * n),
                  m = d,
                  g = Math.round((m + i.Tt + i.Dt) * n);
                t.fillStyle = this.tt.et;
                var p = Math.max(1, Math.floor(n)),
                  y = Math.floor(0.5 * n);
                t.fillRect(b - y, m, p, g - m);
                var k = v - i.Ot - i.Bt;
                (t.textAlign = "left"),
                  (t.fillStyle = this.tt.et),
                  W(t, n, function () {
                    t.fillText(l(s.tt).Ft, f + r, k);
                  }),
                  t.restore();
              }
            }
          }),
          t
        );
      })(),
      K = (function () {
        function t(t, i, n) {
          (this.L = !0),
            (this.ot = new Y()),
            (this.at = {
              U: !1,
              yt: "#4c525e",
              et: "white",
              Ft: "",
              wt: 0,
              Wt: NaN,
            }),
            (this.V = t),
            (this.hi = i),
            (this.Qt = n);
        }
        return (
          (t.prototype.O = function () {
            this.L = !0;
          }),
          (t.prototype.W = function () {
            return (
              this.L && (this.R(), (this.L = !1)), this.ot._(this.at), this.ot
            );
          }),
          (t.prototype.R = function () {
            var t = this.at;
            t.U = !1;
            var i = this.V.ct().vertLine;
            if (i.labelVisible) {
              var n = this.hi.j();
              if (!n.ti()) {
                var s = n.ri(this.V.I());
                t.wt = n.wt();
                var h = this.Qt();
                if (h.S) {
                  (t.Wt = h.Wt), (t.Ft = n.ei(l(s))), (t.U = !0);
                  var r = O(i.labelBackgroundColor);
                  (t.yt = r.yt), (t.et = r.kt);
                }
              }
            }
          }),
          t
        );
      })(),
      $ = (function () {
        function t() {
          (this.ui = null), (this.ai = 0);
        }
        return (
          (t.prototype.oi = function () {
            return this.ai;
          }),
          (t.prototype.li = function (t) {
            this.ai = t;
          }),
          (t.prototype.$ = function () {
            return this.ui;
          }),
          (t.prototype.fi = function (t) {
            this.ui = t;
          }),
          (t.prototype.ci = function () {
            return [];
          }),
          (t.prototype.U = function () {
            return !0;
          }),
          t
        );
      })();
    !(function (t) {
      (t[(t.Normal = 0)] = "Normal"), (t[(t.Magnet = 1)] = "Magnet");
    })(I || (I = {}));
    var X = (function (t) {
        function i(i, n) {
          var s = t.call(this) || this;
          (s.vi = null),
            (s._i = NaN),
            (s.di = 0),
            (s.wi = !0),
            (s.Mi = new Map()),
            (s.bi = !1),
            (s.mi = NaN),
            (s.gi = NaN),
            (s.pi = NaN),
            (s.yi = NaN),
            (s.hi = i),
            (s.ki = n),
            (s.Ci = new x(i, s));
          var h, r;
          s.xi =
            ((h = function () {
              return s._i;
            }),
            (r = function () {
              return s.gi;
            }),
            function (t) {
              var i = r(),
                n = h();
              if (t === l(s.vi).Ni()) return { D: n, Wt: i };
              var e = l(t.H());
              return { D: t.Si(i, e), Wt: i };
            });
          var e = (function (t, i) {
            return function () {
              return { S: s.hi.j().ri(t()), Wt: i() };
            };
          })(
            function () {
              return s.di;
            },
            function () {
              return s.bt();
            }
          );
          return (s.Di = new K(s, i, e)), (s.Ti = new S(s)), s;
        }
        return (
          r(i, t),
          (i.prototype.ct = function () {
            return this.ki;
          }),
          (i.prototype.Ai = function (t, i) {
            (this.pi = t), (this.yi = i);
          }),
          (i.prototype.Bi = function () {
            (this.pi = NaN), (this.yi = NaN);
          }),
          (i.prototype.Li = function () {
            return this.pi;
          }),
          (i.prototype.Ei = function () {
            return this.yi;
          }),
          (i.prototype.Fi = function (t, i, n) {
            this.bi || (this.bi = !0), (this.wi = !0), this.Vi(t, i, n);
          }),
          (i.prototype.I = function () {
            return this.di;
          }),
          (i.prototype.bt = function () {
            return this.mi;
          }),
          (i.prototype.gt = function () {
            return this.gi;
          }),
          (i.prototype.U = function () {
            return this.wi;
          }),
          (i.prototype.Oi = function () {
            (this.wi = !1),
              this.Pi(),
              (this._i = NaN),
              (this.mi = NaN),
              (this.gi = NaN),
              (this.vi = null),
              this.Bi();
          }),
          (i.prototype.Wi = function (t) {
            return null !== this.vi ? [this.Ti, this.Ci] : [];
          }),
          (i.prototype._t = function (t) {
            return t === this.vi && this.ki.horzLine.visible;
          }),
          (i.prototype.dt = function () {
            return this.ki.vertLine.visible;
          }),
          (i.prototype.zi = function (t, i) {
            (this.wi && this.vi === t) || this.Mi.clear();
            var n = [];
            return this.vi === t && n.push(this.Ri(this.Mi, i, this.xi)), n;
          }),
          (i.prototype.ci = function () {
            return this.wi ? [this.Di] : [];
          }),
          (i.prototype.ft = function () {
            return this.vi;
          }),
          (i.prototype.Ii = function () {
            this.Ti.O(),
              this.Mi.forEach(function (t) {
                return t.O();
              }),
              this.Di.O(),
              this.Ci.O();
          }),
          (i.prototype.ji = function (t) {
            return t && !t.Ni().ti() ? t.Ni() : null;
          }),
          (i.prototype.Vi = function (t, i, n) {
            this.qi(t, i, n) && this.Ii();
          }),
          (i.prototype.qi = function (t, i, n) {
            var s = this.mi,
              h = this.gi,
              r = this._i,
              e = this.di,
              u = this.vi,
              a = this.ji(n);
            (this.di = t),
              (this.mi = isNaN(t) ? NaN : this.hi.j().G(t)),
              (this.vi = n);
            var o = null !== a ? a.H() : null;
            return (
              null !== a && null !== o
                ? ((this._i = i), (this.gi = a.K(i, o)))
                : ((this._i = NaN), (this.gi = NaN)),
              s !== this.mi ||
                h !== this.gi ||
                e !== this.di ||
                r !== this._i ||
                u !== this.vi
            );
          }),
          (i.prototype.Pi = function () {
            var t = this.hi
                .P()
                .map(function (t) {
                  return t.Hi().Ui();
                })
                .filter(b),
              i = 0 === t.length ? null : Math.max.apply(Math, t);
            this.di = null !== i ? i : NaN;
          }),
          (i.prototype.Ri = function (t, i, n) {
            var s = t.get(i);
            return void 0 === s && ((s = new U(this, i, n)), t.set(i, s)), s;
          }),
          i
        );
      })($),
      Z = ".";
    function J(t, i) {
      if (!v(t)) return "n/a";
      if (!_(i)) throw new TypeError("invalid length");
      if (i < 0 || i > 16) throw new TypeError("invalid length");
      if (0 === i) return t.toString();
      return ("0000000000000000" + t.toString()).slice(-i);
    }
    var G = (function () {
        function t(t, i) {
          if ((i || (i = 1), (v(t) && _(t)) || (t = 100), t < 0))
            throw new TypeError("invalid base");
          (this.Gt = t), (this.Yi = i), this.Ki();
        }
        return (
          (t.prototype.format = function (t) {
            var i = t < 0 ? "−" : "";
            return (t = Math.abs(t)), i + this.$i(t);
          }),
          (t.prototype.Ki = function () {
            if (((this.Xi = 0), this.Gt > 0 && this.Yi > 0))
              for (var t = this.Gt; t > 1; ) (t /= 10), this.Xi++;
          }),
          (t.prototype.$i = function (t) {
            var i = this.Gt / this.Yi,
              n = Math.floor(t),
              s = "",
              h = void 0 !== this.Xi ? this.Xi : NaN;
            if (i > 1) {
              var r = +(Math.round(t * i) - n * i).toFixed(this.Xi);
              r >= i && ((r -= i), (n += 1)),
                (s = Z + J(+r.toFixed(this.Xi) * this.Yi, h));
            } else (n = Math.round(n * i) / i), h > 0 && (s = Z + J(0, h));
            return n.toFixed(0) + s;
          }),
          t
        );
      })(),
      Q = (function (t) {
        function i(i) {
          return void 0 === i && (i = 100), t.call(this, i) || this;
        }
        return (
          r(i, t),
          (i.prototype.format = function (i) {
            return t.prototype.format.call(this, i) + "%";
          }),
          i
        );
      })(G),
      tt = (function () {
        function t() {
          this.Zi = [];
        }
        return (
          (t.prototype.Ji = function (t, i, n) {
            var s = { Gi: t, Qi: i, tn: !0 === n };
            this.Zi.push(s);
          }),
          (t.prototype.nn = function (t) {
            var i = this.Zi.findIndex(function (i) {
              return t === i.Gi;
            });
            i > -1 && this.Zi.splice(i, 1);
          }),
          (t.prototype.sn = function (t) {
            this.Zi = this.Zi.filter(function (i) {
              return i.Qi === t;
            });
          }),
          (t.prototype.hn = function (t, i) {
            var n = u([], this.Zi, !0);
            (this.Zi = this.Zi.filter(function (t) {
              return !t.tn;
            })),
              n.forEach(function (n) {
                return n.Gi(t, i);
              });
          }),
          (t.prototype.rn = function () {
            return this.Zi.length > 0;
          }),
          (t.prototype.en = function () {
            this.Zi = [];
          }),
          t
        );
      })(),
      it = (function () {
        function t(t, i) {
          (this.un = t), (this.an = i);
        }
        return (
          (t.prototype.on = function (t) {
            return null !== t && this.un === t.un && this.an === t.an;
          }),
          (t.prototype.ln = function () {
            return new t(this.un, this.an);
          }),
          (t.prototype.fn = function () {
            return this.un;
          }),
          (t.prototype.cn = function () {
            return this.an;
          }),
          (t.prototype.vn = function () {
            return this.an - this.un;
          }),
          (t.prototype.ti = function () {
            return (
              this.an === this.un ||
              Number.isNaN(this.an) ||
              Number.isNaN(this.un)
            );
          }),
          (t.prototype._n = function (i) {
            return null === i
              ? this
              : new t(Math.min(this.fn(), i.fn()), Math.max(this.cn(), i.cn()));
          }),
          (t.prototype.dn = function (t) {
            if (v(t) && 0 !== this.an - this.un) {
              var i = 0.5 * (this.an + this.un),
                n = this.an - i,
                s = this.un - i;
              (n *= t), (s *= t), (this.an = i + n), (this.un = i + s);
            }
          }),
          (t.prototype.wn = function (t) {
            v(t) && ((this.an += t), (this.un += t));
          }),
          (t.prototype.Mn = function () {
            return { minValue: this.un, maxValue: this.an };
          }),
          (t.bn = function (i) {
            return null === i ? null : new t(i.minValue, i.maxValue);
          }),
          t
        );
      })();
    function nt(t, i, n) {
      return Math.min(Math.max(t, i), n);
    }
    function st(t, i, n) {
      return i - t <= n;
    }
    function ht(t) {
      return t <= 0 ? NaN : Math.log(t) / Math.log(10);
    }
    function rt(t) {
      var i = Math.ceil(t);
      return i % 2 != 0 ? i - 1 : i;
    }
    function et(t) {
      var i = Math.ceil(t);
      return i % 2 == 0 ? i - 1 : i;
    }
    function ut(t, i) {
      var n = (100 * (t - i)) / i;
      return i < 0 ? -n : n;
    }
    function at(t, i) {
      var n = ut(t.fn(), i),
        s = ut(t.cn(), i);
      return new it(n, s);
    }
    function ot(t, i) {
      var n = (100 * (t - i)) / i + 100;
      return i < 0 ? -n : n;
    }
    function lt(t, i) {
      var n = ot(t.fn(), i),
        s = ot(t.cn(), i);
      return new it(n, s);
    }
    function ft(t) {
      var i = Math.abs(t);
      if (i < 1e-8) return 0;
      var n = ht(i + 1e-4) + 4;
      return t < 0 ? -n : n;
    }
    function ct(t) {
      var i = Math.abs(t);
      if (i < 1e-8) return 0;
      var n = Math.pow(10, i - 4) - 1e-4;
      return t < 0 ? -n : n;
    }
    function vt(t) {
      if (null === t) return null;
      var i = ft(t.fn()),
        n = ft(t.cn());
      return new it(i, n);
    }
    var _t,
      dt = (function () {
        function t(t, i) {
          if (
            ((this.mn = t),
            (this.gn = i),
            (function (t) {
              if (t < 0) return !1;
              for (var i = t; i > 1; i /= 10) if (i % 10 != 0) return !1;
              return !0;
            })(this.mn))
          )
            this.pn = [2, 2.5, 2];
          else {
            this.pn = [];
            for (var n = this.mn; 1 !== n; ) {
              if (n % 2 == 0) this.pn.push(2), (n /= 2);
              else {
                if (n % 5 != 0) throw new Error("unexpected base");
                this.pn.push(2, 2.5), (n /= 5);
              }
              if (this.pn.length > 100)
                throw new Error("something wrong with base");
            }
          }
        }
        return (
          (t.prototype.yn = function (t, i, n) {
            for (
              var s,
                h,
                r,
                e = 0 === this.mn ? 0 : 1 / this.mn,
                u = Math.pow(10, Math.max(0, Math.ceil(ht(t - i)))),
                a = 0,
                o = this.gn[0];
              ;
  
            ) {
              var l = st(u, e, 1e-14) && u > e + 1e-14,
                f = st(u, n * o, 1e-14),
                c = st(u, 1, 1e-14);
              if (!(l && f && c)) break;
              (u /= o), (o = this.gn[++a % this.gn.length]);
            }
            if (
              (u <= e + 1e-14 && (u = e),
              (u = Math.max(1, u)),
              this.pn.length > 0 &&
                ((s = u), (h = 1), (r = 1e-14), Math.abs(s - h) < r))
            )
              for (a = 0, o = this.pn[0]; st(u, n * o, 1e-14) && u > e + 1e-14; )
                (u /= o), (o = this.pn[++a % this.pn.length]);
            return u;
          }),
          t
        );
      })(),
      wt = (function () {
        function t(t, i, n, s) {
          (this.kn = []),
            (this.Gt = t),
            (this.mn = i),
            (this.Cn = n),
            (this.xn = s);
        }
        return (
          (t.prototype.yn = function (t, i) {
            if (t < i) throw new Error("high < low");
            var n = this.Gt.Mt(),
              s = ((t - i) * this.Nn()) / n,
              h = new dt(this.mn, [2, 2.5, 2]),
              r = new dt(this.mn, [2, 2, 2.5]),
              e = new dt(this.mn, [2.5, 2, 2]),
              u = [];
            return (
              u.push(h.yn(t, i, s), r.yn(t, i, s), e.yn(t, i, s)),
              (function (t) {
                if (t.length < 1) throw Error("array is empty");
                for (var i = t[0], n = 1; n < t.length; ++n)
                  t[n] < i && (i = t[n]);
                return i;
              })(u)
            );
          }),
          (t.prototype.Sn = function () {
            var t = this.Gt,
              i = t.H();
            if (null !== i) {
              var n = t.Mt(),
                s = this.Cn(n - 1, i),
                h = this.Cn(0, i),
                r = this.Gt.ct().entireTextOnly ? this.Dn() / 2 : 0,
                e = r,
                u = n - 1 - r,
                a = Math.max(s, h),
                o = Math.min(s, h);
              if (a !== o) {
                for (
                  var l = this.yn(a, o),
                    f = a % l,
                    c = a >= o ? 1 : -1,
                    v = null,
                    _ = 0,
                    d = a - (f += f < 0 ? l : 0);
                  d > o;
                  d -= l
                ) {
                  var w = this.xn(d, i, !0);
                  (null !== v && Math.abs(w - v) < this.Nn()) ||
                    w < e ||
                    w > u ||
                    (_ < this.kn.length
                      ? ((this.kn[_].Tn = w), (this.kn[_].An = t.Bn(d)))
                      : this.kn.push({ Tn: w, An: t.Bn(d) }),
                    _++,
                    (v = w),
                    t.Ln() && (l = this.yn(d * c, o)));
                }
                this.kn.length = _;
              } else this.kn = [];
            } else this.kn = [];
          }),
          (t.prototype.En = function () {
            return this.kn;
          }),
          (t.prototype.Dn = function () {
            return this.Gt.Pt();
          }),
          (t.prototype.Nn = function () {
            return Math.ceil(2.5 * this.Dn());
          }),
          t
        );
      })();
    function Mt(t) {
      return t.slice().sort(function (t, i) {
        return l(t.oi()) - l(i.oi());
      });
    }
    !(function (t) {
      (t[(t.Normal = 0)] = "Normal"),
        (t[(t.Logarithmic = 1)] = "Logarithmic"),
        (t[(t.Percentage = 2)] = "Percentage"),
        (t[(t.IndexedTo100 = 3)] = "IndexedTo100");
    })(_t || (_t = {}));
    var bt,
      mt,
      gt = new Q(),
      pt = new G(100, 1),
      yt = (function () {
        function t(t, i, n, s) {
          (this.Fn = 0),
            (this.Vn = null),
            (this.On = null),
            (this.Pn = null),
            (this.Wn = { zn: !1, Rn: null }),
            (this.In = 0),
            (this.jn = 0),
            (this.qn = new tt()),
            (this.Un = new tt()),
            (this.Hn = []),
            (this.Yn = null),
            (this.Kn = null),
            (this.$n = null),
            (this.Xn = null),
            (this.Zn = pt),
            (this.Jn = t),
            (this.ki = i),
            (this.Gn = n),
            (this.Qn = s),
            (this.ts = new wt(this, 100, this.ns.bind(this), this.ss.bind(this)));
        }
        return (
          (t.prototype.hs = function () {
            return this.Jn;
          }),
          (t.prototype.ct = function () {
            return this.ki;
          }),
          (t.prototype.rs = function (t) {
            if (
              (c(this.ki, t),
              this.es(),
              void 0 !== t.mode && this.us({ os: t.mode }),
              void 0 !== t.scaleMargins)
            ) {
              var i = o(t.scaleMargins.top),
                n = o(t.scaleMargins.bottom);
              if (i < 0 || i > 1)
                throw new Error(
                  "Invalid top margin - expect value between 0 and 1, given=" + i
                );
              if (n < 0 || n > 1 || i + n > 1)
                throw new Error(
                  "Invalid bottom margin - expect value between 0 and 1, given=" +
                    n
                );
              if (i + n > 1)
                throw new Error(
                  "Invalid margins - sum of margins must be less than 1, given=" +
                    (i + n)
                );
              this.ls(), (this.Kn = null);
            }
          }),
          (t.prototype.fs = function () {
            return this.ki.autoScale;
          }),
          (t.prototype.Ln = function () {
            return 1 === this.ki.mode;
          }),
          (t.prototype.cs = function () {
            return 2 === this.ki.mode;
          }),
          (t.prototype.vs = function () {
            return 3 === this.ki.mode;
          }),
          (t.prototype.os = function () {
            return {
              _s: this.ki.autoScale,
              ds: this.ki.invertScale,
              os: this.ki.mode,
            };
          }),
          (t.prototype.us = function (t) {
            var i = this.os(),
              n = null;
            void 0 !== t._s && (this.ki.autoScale = t._s),
              void 0 !== t.os &&
                ((this.ki.mode = t.os),
                (2 !== t.os && 3 !== t.os) || (this.ki.autoScale = !0),
                (this.Wn.zn = !1)),
              1 === i.os &&
                t.os !== i.os &&
                (!(function (t) {
                  if (null === t) return !1;
                  var i = ct(t.fn()),
                    n = ct(t.cn());
                  return isFinite(i) && isFinite(n);
                })(this.On)
                  ? (this.ki.autoScale = !0)
                  : ((n = (function (t) {
                      if (null === t) return null;
                      var i = ct(t.fn()),
                        n = ct(t.cn());
                      return new it(i, n);
                    })(this.On)),
                    null !== n && this.ws(n))),
              1 === t.os &&
                t.os !== i.os &&
                null !== (n = vt(this.On)) &&
                this.ws(n);
            var s = i.os !== this.ki.mode;
            s && (2 === i.os || this.cs()) && this.es(),
              s && (3 === i.os || this.vs()) && this.es(),
              void 0 !== t.ds &&
                i.ds !== t.ds &&
                ((this.ki.invertScale = t.ds), this.Ms()),
              this.Un.hn(i, this.os());
          }),
          (t.prototype.bs = function () {
            return this.Un;
          }),
          (t.prototype.Pt = function () {
            return this.Gn.fontSize;
          }),
          (t.prototype.Mt = function () {
            return this.Fn;
          }),
          (t.prototype.gs = function (t) {
            this.Fn !== t && ((this.Fn = t), this.ls(), (this.Kn = null));
          }),
          (t.prototype.ps = function () {
            if (this.Vn) return this.Vn;
            var t = this.Mt() - this.ys() - this.ks();
            return (this.Vn = t), t;
          }),
          (t.prototype.Cs = function () {
            return this.xs(), this.On;
          }),
          (t.prototype.ws = function (t, i) {
            var n = this.On;
            (i || (null === n && null !== t) || (null !== n && !n.on(t))) &&
              ((this.Kn = null), (this.On = t));
          }),
          (t.prototype.ti = function () {
            return this.xs(), 0 === this.Fn || !this.On || this.On.ti();
          }),
          (t.prototype.Ns = function (t) {
            return this.ds() ? t : this.Mt() - 1 - t;
          }),
          (t.prototype.K = function (t, i) {
            return (
              this.cs() ? (t = ut(t, i)) : this.vs() && (t = ot(t, i)),
              this.ss(t, i)
            );
          }),
          (t.prototype.Ss = function (t, i, n) {
            this.xs();
            for (
              var s = this.ks(),
                h = l(this.Cs()),
                r = h.fn(),
                e = h.cn(),
                u = this.ps() - 1,
                a = this.ds(),
                o = u / (e - r),
                f = void 0 === n ? 0 : n.from,
                c = void 0 === n ? t.length : n.to,
                v = this.Ds(),
                _ = f;
              _ < c;
              _++
            ) {
              var d = t[_],
                w = d.D;
              if (!isNaN(w)) {
                var M = w;
                null !== v && (M = v(d.D, i));
                var b = s + o * (M - r),
                  m = a ? b : this.Fn - 1 - b;
                d.p = m;
              }
            }
          }),
          (t.prototype.Ts = function (t, i, n) {
            this.xs();
            for (
              var s = this.ks(),
                h = l(this.Cs()),
                r = h.fn(),
                e = h.cn(),
                u = this.ps() - 1,
                a = this.ds(),
                o = u / (e - r),
                f = void 0 === n ? 0 : n.from,
                c = void 0 === n ? t.length : n.to,
                v = this.Ds(),
                _ = f;
              _ < c;
              _++
            ) {
              var d = t[_],
                w = d.open,
                M = d.high,
                b = d.low,
                m = d.close;
              null !== v &&
                ((w = v(d.open, i)),
                (M = v(d.high, i)),
                (b = v(d.low, i)),
                (m = v(d.close, i)));
              var g = s + o * (w - r),
                p = a ? g : this.Fn - 1 - g;
              (d.As = p),
                (g = s + o * (M - r)),
                (p = a ? g : this.Fn - 1 - g),
                (d.Bs = p),
                (g = s + o * (b - r)),
                (p = a ? g : this.Fn - 1 - g),
                (d.Ls = p),
                (g = s + o * (m - r)),
                (p = a ? g : this.Fn - 1 - g),
                (d.Es = p);
            }
          }),
          (t.prototype.Si = function (t, i) {
            var n = this.ns(t, i);
            return this.Fs(n, i);
          }),
          (t.prototype.Fs = function (t, i) {
            var n = t;
            return (
              this.cs()
                ? (n = (function (t, i) {
                    return i < 0 && (t = -t), (t / 100) * i + i;
                  })(n, i))
                : this.vs() &&
                  (n = (function (t, i) {
                    return (t -= 100), i < 0 && (t = -t), (t / 100) * i + i;
                  })(n, i)),
              n
            );
          }),
          (t.prototype.Vs = function () {
            return this.Hn;
          }),
          (t.prototype.Os = function () {
            if (this.Yn) return this.Yn;
            for (var t = [], i = 0; i < this.Hn.length; i++) {
              var n = this.Hn[i];
              null === n.oi() && n.li(i + 1), t.push(n);
            }
            return (t = Mt(t)), (this.Yn = t), this.Yn;
          }),
          (t.prototype.Ps = function (t) {
            -1 === this.Hn.indexOf(t) && (this.Hn.push(t), this.es(), this.Ws());
          }),
          (t.prototype.zs = function (t) {
            var i = this.Hn.indexOf(t);
            if (-1 === i) throw new Error("source is not attached to scale");
            this.Hn.splice(i, 1),
              0 === this.Hn.length && (this.us({ _s: !0 }), this.ws(null)),
              this.es(),
              this.Ws();
          }),
          (t.prototype.H = function () {
            for (var t = null, i = 0, n = this.Hn; i < n.length; i++) {
              var s = n[i].H();
              null !== s && (null === t || s.Rs < t.Rs) && (t = s);
            }
            return null === t ? null : t.X;
          }),
          (t.prototype.ds = function () {
            return this.ki.invertScale;
          }),
          (t.prototype.En = function () {
            return (
              this.Kn || (this.ts.Sn(), (this.Kn = this.ts.En()), this.qn.hn()),
              this.Kn
            );
          }),
          (t.prototype.Is = function () {
            return this.qn;
          }),
          (t.prototype.js = function (t) {
            this.cs() ||
              this.vs() ||
              (null === this.$n &&
                null === this.Pn &&
                (this.ti() ||
                  ((this.$n = this.Fn - t), (this.Pn = l(this.Cs()).ln()))));
          }),
          (t.prototype.qs = function (t) {
            if (!this.cs() && !this.vs() && null !== this.$n) {
              this.us({ _s: !1 }), (t = this.Fn - t) < 0 && (t = 0);
              var i = (this.$n + 0.2 * (this.Fn - 1)) / (t + 0.2 * (this.Fn - 1)),
                n = l(this.Pn).ln();
              (i = Math.max(i, 0.1)), n.dn(i), this.ws(n);
            }
          }),
          (t.prototype.Us = function () {
            this.cs() || this.vs() || ((this.$n = null), (this.Pn = null));
          }),
          (t.prototype.Hs = function (t) {
            this.fs() ||
              (null === this.Xn &&
                null === this.Pn &&
                (this.ti() || ((this.Xn = t), (this.Pn = l(this.Cs()).ln()))));
          }),
          (t.prototype.Ys = function (t) {
            if (!this.fs() && null !== this.Xn) {
              var i = l(this.Cs()).vn() / (this.ps() - 1),
                n = t - this.Xn;
              this.ds() && (n *= -1);
              var s = n * i,
                h = l(this.Pn).ln();
              h.wn(s), this.ws(h, !0), (this.Kn = null);
            }
          }),
          (t.prototype.Ks = function () {
            this.fs() ||
              (null !== this.Xn && ((this.Xn = null), (this.Pn = null)));
          }),
          (t.prototype.$s = function () {
            return this.Zn || this.es(), this.Zn;
          }),
          (t.prototype.ii = function (t, i) {
            switch (this.ki.mode) {
              case 2:
                return this.$s().format(ut(t, i));
              case 3:
                return this.$s().format(ot(t, i));
              default:
                return this.Xs(t);
            }
          }),
          (t.prototype.Bn = function (t) {
            switch (this.ki.mode) {
              case 2:
              case 3:
                return this.$s().format(t);
              default:
                return this.Xs(t);
            }
          }),
          (t.prototype.Zs = function (t) {
            return this.Xs(t, l(this.Js()).$s());
          }),
          (t.prototype.Gs = function (t, i) {
            return (t = ut(t, i)), gt.format(t);
          }),
          (t.prototype.Qs = function () {
            return this.Hn;
          }),
          (t.prototype.th = function (t) {
            this.Wn = { Rn: t, zn: !1 };
          }),
          (t.prototype.Ii = function () {
            this.Hn.forEach(function (t) {
              return t.Ii();
            });
          }),
          (t.prototype.es = function () {
            this.Kn = null;
            var t = this.Js(),
              i = 100;
            null !== t && (i = Math.round(1 / t.ih())),
              (this.Zn = pt),
              this.cs()
                ? ((this.Zn = gt), (i = 100))
                : this.vs()
                ? ((this.Zn = new G(100, 1)), (i = 100))
                : null !== t && (this.Zn = t.$s()),
              (this.ts = new wt(this, i, this.ns.bind(this), this.ss.bind(this))),
              this.ts.Sn();
          }),
          (t.prototype.Ws = function () {
            this.Yn = null;
          }),
          (t.prototype.Js = function () {
            return this.Hn[0] || null;
          }),
          (t.prototype.ys = function () {
            return this.ds()
              ? this.ki.scaleMargins.bottom * this.Mt() + this.jn
              : this.ki.scaleMargins.top * this.Mt() + this.In;
          }),
          (t.prototype.ks = function () {
            return this.ds()
              ? this.ki.scaleMargins.top * this.Mt() + this.In
              : this.ki.scaleMargins.bottom * this.Mt() + this.jn;
          }),
          (t.prototype.xs = function () {
            this.Wn.zn || ((this.Wn.zn = !0), this.nh());
          }),
          (t.prototype.ls = function () {
            this.Vn = null;
          }),
          (t.prototype.ss = function (t, i) {
            if ((this.xs(), this.ti())) return 0;
            t = this.Ln() && t ? ft(t) : t;
            var n = l(this.Cs()),
              s = this.ks() + ((this.ps() - 1) * (t - n.fn())) / n.vn();
            return this.Ns(s);
          }),
          (t.prototype.ns = function (t, i) {
            if ((this.xs(), this.ti())) return 0;
            var n = this.Ns(t),
              s = l(this.Cs()),
              h = s.fn() + s.vn() * ((n - this.ks()) / (this.ps() - 1));
            return this.Ln() ? ct(h) : h;
          }),
          (t.prototype.Ms = function () {
            (this.Kn = null), this.ts.Sn();
          }),
          (t.prototype.nh = function () {
            var t = this.Wn.Rn;
            if (null !== t) {
              for (
                var i = null, n = 0, s = 0, h = 0, r = this.Qs();
                h < r.length;
                h++
              ) {
                var e = r[h];
                if (e.U()) {
                  var u = e.H();
                  if (null !== u) {
                    var a = e.sh(t.hh(), t.rh()),
                      o = a && a.Cs();
                    if (null !== o) {
                      switch (this.ki.mode) {
                        case 1:
                          o = vt(o);
                          break;
                        case 2:
                          o = at(o, u.X);
                          break;
                        case 3:
                          o = lt(o, u.X);
                      }
                      if (((i = null === i ? o : i._n(l(o))), null !== a)) {
                        var f = a.eh();
                        null !== f &&
                          ((n = Math.max(n, f.above)),
                          (s = Math.max(n, f.below)));
                      }
                    }
                  }
                }
              }
              if (
                ((n === this.In && s === this.jn) ||
                  ((this.In = n), (this.jn = s), (this.Kn = null), this.ls()),
                null !== i)
              ) {
                if (i.fn() === i.cn()) {
                  var c = this.Js(),
                    v = 5 * (null === c || this.cs() || this.vs() ? 1 : c.ih());
                  i = new it(i.fn() - v, i.cn() + v);
                }
                this.ws(i);
              } else null === this.On && this.ws(new it(-0.5, 0.5));
              this.Wn.zn = !0;
            }
          }),
          (t.prototype.Ds = function () {
            return this.cs() ? ut : this.vs() ? ot : this.Ln() ? ft : null;
          }),
          (t.prototype.Xs = function (t, i) {
            return void 0 === this.Qn.priceFormatter
              ? (void 0 === i && (i = this.$s()), i.format(t))
              : this.Qn.priceFormatter(t);
          }),
          t
        );
      })();
    function kt(t) {
      void 0 !== t.borderColor &&
        ((t.borderUpColor = t.borderColor), (t.borderDownColor = t.borderColor)),
        void 0 !== t.wickColor &&
          ((t.wickUpColor = t.wickColor), (t.wickDownColor = t.wickColor));
    }
    !(function (t) {
      (t[(t.Disabled = 0)] = "Disabled"),
        (t[(t.Continuous = 1)] = "Continuous"),
        (t[(t.OnDataUpdate = 2)] = "OnDataUpdate");
    })(bt || (bt = {})),
      (function (t) {
        (t[(t.LastBar = 0)] = "LastBar"),
          (t[(t.LastVisible = 1)] = "LastVisible");
      })(mt || (mt = {}));
    var Ct = function (t) {
      return t.getUTCFullYear();
    };
    function xt(t, i, n) {
      return i
        .replace(
          /yyyy/g,
          (function (t) {
            return J(Ct(t), 4);
          })(t)
        )
        .replace(
          /yy/g,
          (function (t) {
            return J(Ct(t) % 100, 2);
          })(t)
        )
        .replace(
          /MMMM/g,
          (function (t, i) {
            return new Date(
              t.getUTCFullYear(),
              t.getUTCMonth(),
              1
            ).toLocaleString(i, { month: "long" });
          })(t, n)
        )
        .replace(
          /MMM/g,
          (function (t, i) {
            return new Date(
              t.getUTCFullYear(),
              t.getUTCMonth(),
              1
            ).toLocaleString(i, { month: "short" });
          })(t, n)
        )
        .replace(
          /MM/g,
          (function (t) {
            return J(
              (function (t) {
                return t.getUTCMonth() + 1;
              })(t),
              2
            );
          })(t)
        )
        .replace(
          /dd/g,
          (function (t) {
            return J(
              (function (t) {
                return t.getUTCDate();
              })(t),
              2
            );
          })(t)
        );
    }
    var Nt = (function () {
        function t(t, i) {
          void 0 === t && (t = "yyyy-MM-dd"),
            void 0 === i && (i = "default"),
            (this.uh = t),
            (this.ah = i);
        }
        return (
          (t.prototype.oh = function (t) {
            return xt(t, this.uh, this.ah);
          }),
          t
        );
      })(),
      St = (function () {
        function t(t) {
          this.lh = t || "%h:%m:%s";
        }
        return (
          (t.prototype.oh = function (t) {
            return this.lh
              .replace("%h", J(t.getUTCHours(), 2))
              .replace("%m", J(t.getUTCMinutes(), 2))
              .replace("%s", J(t.getUTCSeconds(), 2));
          }),
          t
        );
      })(),
      Dt = { fh: "yyyy-MM-dd", _h: "%h:%m:%s", dh: " ", wh: "default" },
      Tt = (function () {
        function t(t) {
          void 0 === t && (t = {});
          var i = e(e({}, Dt), t);
          (this.Mh = new Nt(i.fh, i.wh)),
            (this.bh = new St(i._h)),
            (this.mh = i.dh);
        }
        return (
          (t.prototype.oh = function (t) {
            return "" + this.Mh.oh(t) + this.mh + this.bh.oh(t);
          }),
          t
        );
      })();
    function At(t, i, n, s, h) {
      void 0 === s && (s = 0), void 0 === h && (h = t.length);
      for (var r = h - s; 0 < r; ) {
        var e = r >> 1,
          u = s + e;
        n(t[u], i) ? ((s = u + 1), (r -= e + 1)) : (r = e);
      }
      return s;
    }
    function Bt(t, i, n, s, h) {
      void 0 === s && (s = 0), void 0 === h && (h = t.length);
      for (var r = h - s; 0 < r; ) {
        var e = r >> 1,
          u = s + e;
        n(i, t[u]) ? (r = e) : ((s = u + 1), (r -= e + 1));
      }
      return s;
    }
    var Lt = (function () {
        function t(t, i) {
          void 0 === i && (i = 50),
            (this.gh = 0),
            (this.ph = 1),
            (this.yh = 1),
            (this.kh = new Map()),
            (this.Ch = new Map()),
            (this.xh = t),
            (this.Nh = i);
        }
        return (
          (t.prototype.oh = function (t) {
            var i =
                void 0 === t.Sh
                  ? new Date(1e3 * t.Dh).getTime()
                  : new Date(
                      Date.UTC(t.Sh.year, t.Sh.month - 1, t.Sh.day)
                    ).getTime(),
              n = this.kh.get(i);
            if (void 0 !== n) return n.Th;
            if (this.gh === this.Nh) {
              var s = this.Ch.get(this.yh);
              this.Ch.delete(this.yh), this.kh.delete(o(s)), this.yh++, this.gh--;
            }
            var h = this.xh(t);
            return (
              this.kh.set(i, { Th: h, Ah: this.ph }),
              this.Ch.set(this.ph, i),
              this.gh++,
              this.ph++,
              h
            );
          }),
          t
        );
      })(),
      Et = (function () {
        function t(t, i) {
          a(t <= i, "right should be >= left"), (this.Bh = t), (this.Lh = i);
        }
        return (
          (t.prototype.hh = function () {
            return this.Bh;
          }),
          (t.prototype.rh = function () {
            return this.Lh;
          }),
          (t.prototype.Eh = function () {
            return this.Lh - this.Bh + 1;
          }),
          (t.prototype.Fh = function (t) {
            return this.Bh <= t && t <= this.Lh;
          }),
          (t.prototype.on = function (t) {
            return this.Bh === t.hh() && this.Lh === t.rh();
          }),
          t
        );
      })();
    function Ft(t, i) {
      return null === t || null === i ? t === i : t.on(i);
    }
    var Vt,
      Ot = (function () {
        function t() {
          (this.Vh = new Map()), (this.kh = null);
        }
        return (
          (t.prototype.Oh = function (t, i) {
            this.Ph(i), (this.kh = null);
            for (var n = i; n < t.length; ++n) {
              var s = t[n],
                h = this.Vh.get(s.Wh);
              void 0 === h && ((h = []), this.Vh.set(s.Wh, h)),
                h.push({ zh: n, S: s.S, Rh: s.Wh });
            }
          }),
          (t.prototype.Ih = function (t, i) {
            var n = Math.ceil(i / t);
            return (
              (null !== this.kh && this.kh.jh === n) ||
                (this.kh = { En: this.qh(n), jh: n }),
              this.kh.En
            );
          }),
          (t.prototype.Ph = function (t) {
            if (0 !== t) {
              var i = [];
              this.Vh.forEach(function (n, s) {
                t <= n[0].zh
                  ? i.push(s)
                  : n.splice(
                      At(n, t, function (i) {
                        return i.zh < t;
                      }),
                      1 / 0
                    );
              });
              for (var n = 0, s = i; n < s.length; n++) {
                var h = s[n];
                this.Vh.delete(h);
              }
            } else this.Vh.clear();
          }),
          (t.prototype.qh = function (t) {
            for (
              var i = [],
                n = 0,
                s = Array.from(this.Vh.keys()).sort(function (t, i) {
                  return i - t;
                });
              n < s.length;
              n++
            ) {
              var h = s[n];
              if (this.Vh.get(h)) {
                var r = i;
                i = [];
                for (
                  var e = r.length,
                    u = 0,
                    a = o(this.Vh.get(h)),
                    l = a.length,
                    f = 1 / 0,
                    c = -1 / 0,
                    v = 0;
                  v < l;
                  v++
                ) {
                  for (var _ = a[v], d = _.zh; u < e; ) {
                    var w = r[u],
                      M = w.zh;
                    if (!(M < d)) {
                      f = M;
                      break;
                    }
                    u++, i.push(w), (c = M), (f = 1 / 0);
                  }
                  f - d >= t && d - c >= t && (i.push(_), (c = d));
                }
                for (; u < e; u++) i.push(r[u]);
              }
            }
            return i;
          }),
          t
        );
      })(),
      Pt = (function () {
        function t(t) {
          this.Uh = t;
        }
        return (
          (t.prototype.Hh = function () {
            return null === this.Uh
              ? null
              : new Et(Math.floor(this.Uh.hh()), Math.ceil(this.Uh.rh()));
          }),
          (t.prototype.Yh = function () {
            return this.Uh;
          }),
          (t.Kh = function () {
            return new t(null);
          }),
          t
        );
      })();
    !(function (t) {
      (t[(t.Year = 0)] = "Year"),
        (t[(t.Month = 1)] = "Month"),
        (t[(t.DayOfMonth = 2)] = "DayOfMonth"),
        (t[(t.Time = 3)] = "Time"),
        (t[(t.TimeWithSeconds = 4)] = "TimeWithSeconds");
    })(Vt || (Vt = {}));
    var Wt,
      zt = (function () {
        function t(t, i, n) {
          (this.$h = 0),
            (this.Xh = null),
            (this.Zh = []),
            (this.Xn = null),
            (this.$n = null),
            (this.Jh = new Ot()),
            (this.Gh = new Map()),
            (this.Qh = Pt.Kh()),
            (this.tr = !0),
            (this.ir = new tt()),
            (this.nr = new tt()),
            (this.sr = new tt()),
            (this.hr = null),
            (this.rr = null),
            (this.er = []),
            (this.ki = i),
            (this.Qn = n),
            (this.ur = i.rightOffset),
            (this.ar = i.barSpacing),
            (this.hi = t),
            this.lr();
        }
        return (
          (t.prototype.ct = function () {
            return this.ki;
          }),
          (t.prototype.cr = function (t) {
            c(this.Qn, t), this.vr(), this.lr();
          }),
          (t.prototype.rs = function (t, i) {
            var n;
            c(this.ki, t),
              this.ki.fixLeftEdge && this._r(),
              this.ki.fixRightEdge && this.dr(),
              void 0 !== t.barSpacing && this.hi.wr(t.barSpacing),
              void 0 !== t.rightOffset && this.hi.Mr(t.rightOffset),
              void 0 !== t.minBarSpacing &&
                this.hi.wr(
                  null !== (n = t.barSpacing) && void 0 !== n ? n : this.ar
                ),
              this.vr(),
              this.lr(),
              this.sr.hn();
          }),
          (t.prototype.ri = function (t) {
            var i;
            return (
              (null === (i = this.Zh[t]) || void 0 === i ? void 0 : i.S) || null
            );
          }),
          (t.prototype.br = function (t, i) {
            if (this.Zh.length < 1) return null;
            if (t.Dh > this.Zh[this.Zh.length - 1].S.Dh)
              return i ? this.Zh.length - 1 : null;
            var n = At(this.Zh, t.Dh, function (t, i) {
              return t.S.Dh < i;
            });
            return t.Dh < this.Zh[n].S.Dh ? (i ? n : null) : n;
          }),
          (t.prototype.ti = function () {
            return 0 === this.$h || 0 === this.Zh.length;
          }),
          (t.prototype.mr = function () {
            return this.gr(), this.Qh.Hh();
          }),
          (t.prototype.pr = function () {
            return this.gr(), this.Qh.Yh();
          }),
          (t.prototype.yr = function () {
            var t = this.mr();
            if (null === t) return null;
            var i = { from: t.hh(), to: t.rh() };
            return this.kr(i);
          }),
          (t.prototype.kr = function (t) {
            var i = Math.round(t.from),
              n = Math.round(t.to),
              s = l(this.Cr()),
              h = l(this.Nr());
            return {
              from: l(this.ri(Math.max(s, i))),
              to: l(this.ri(Math.min(h, n))),
            };
          }),
          (t.prototype.Sr = function (t) {
            return { from: l(this.br(t.from, !0)), to: l(this.br(t.to, !0)) };
          }),
          (t.prototype.wt = function () {
            return this.$h;
          }),
          (t.prototype.Dr = function (t) {
            if (isFinite(t) && !(t <= 0) && this.$h !== t) {
              if (this.ki.lockVisibleTimeRangeOnResize && this.$h) {
                var i = (this.ar * t) / this.$h;
                this.ar = i;
              }
              if (this.ki.fixLeftEdge) {
                var n = this.mr();
                if (null !== n)
                  if (n.hh() <= 0) {
                    var s = this.$h - t;
                    this.ur -= Math.round(s / this.ar) + 1;
                  }
              }
              (this.$h = t), (this.tr = !0), this.Tr(), this.Ar();
            }
          }),
          (t.prototype.G = function (t) {
            if (this.ti() || !_(t)) return 0;
            var i = this.Br() + this.ur - t;
            return this.$h - (i + 0.5) * this.ar - 1;
          }),
          (t.prototype.Lr = function (t, i) {
            for (
              var n = this.Br(),
                s = void 0 === i ? 0 : i.from,
                h = void 0 === i ? t.length : i.to,
                r = s;
              r < h;
              r++
            ) {
              var e = t[r].S,
                u = n + this.ur - e,
                a = this.$h - (u + 0.5) * this.ar - 1;
              t[r].g = a;
            }
          }),
          (t.prototype.Er = function (t) {
            return Math.ceil(this.Fr(t));
          }),
          (t.prototype.Mr = function (t) {
            (this.tr = !0), (this.ur = t), this.Ar(), this.hi.Vr(), this.hi.Or();
          }),
          (t.prototype.Pr = function () {
            return this.ar;
          }),
          (t.prototype.wr = function (t) {
            this.Wr(t), this.Ar(), this.hi.Vr(), this.hi.Or();
          }),
          (t.prototype.zr = function () {
            return this.ur;
          }),
          (t.prototype.En = function () {
            if (this.ti()) return null;
            if (null !== this.rr) return this.rr;
            for (
              var t = this.ar,
                i = 5 * (this.hi.ct().layout.fontSize + 4),
                n = Math.round(i / t),
                s = l(this.mr()),
                h = Math.max(s.hh(), s.hh() - n),
                r = Math.max(s.rh(), s.rh() - n),
                e = this.Jh.Ih(t, i),
                u = this.Cr() + n,
                a = this.Nr() - n,
                o = 0,
                f = 0,
                c = e;
              f < c.length;
              f++
            ) {
              var v = c[f];
              if (h <= v.zh && v.zh <= r) {
                var _ = void 0;
                o < this.er.length
                  ? (((_ = this.er[o]).Tn = this.G(v.zh)),
                    (_.An = this.Rr(v.S, v.Rh)),
                    (_.Rh = v.Rh))
                  : ((_ = {
                      Ir: !1,
                      Tn: this.G(v.zh),
                      An: this.Rr(v.S, v.Rh),
                      Rh: v.Rh,
                    }),
                    this.er.push(_)),
                  this.ar > i / 2
                    ? (_.Ir = !1)
                    : (_.Ir =
                        (this.ki.fixLeftEdge && v.zh <= u) ||
                        (this.ki.fixRightEdge && v.zh >= a)),
                  o++;
              }
            }
            return (this.er.length = o), (this.rr = this.er), this.er;
          }),
          (t.prototype.jr = function () {
            (this.tr = !0),
              this.wr(this.ki.barSpacing),
              this.Mr(this.ki.rightOffset);
          }),
          (t.prototype.qr = function (t) {
            (this.tr = !0), (this.Xh = t), this.Ar(), this._r();
          }),
          (t.prototype.Ur = function (t, i) {
            var n = this.Fr(t),
              s = this.Pr(),
              h = s + i * (s / 10);
            this.wr(h),
              this.ki.rightBarStaysOnScroll ||
                this.Mr(this.zr() + (n - this.Fr(t)));
          }),
          (t.prototype.js = function (t) {
            this.Xn && this.Ks(),
              null === this.$n &&
                null === this.hr &&
                (this.ti() || ((this.$n = t), this.Hr()));
          }),
          (t.prototype.qs = function (t) {
            if (null !== this.hr) {
              var i = nt(this.$h - t, 0, this.$h),
                n = nt(this.$h - l(this.$n), 0, this.$h);
              0 !== i && 0 !== n && this.wr((this.hr.Pr * i) / n);
            }
          }),
          (t.prototype.Us = function () {
            null !== this.$n && ((this.$n = null), this.Yr());
          }),
          (t.prototype.Hs = function (t) {
            null === this.Xn &&
              null === this.hr &&
              (this.ti() || ((this.Xn = t), this.Hr()));
          }),
          (t.prototype.Ys = function (t) {
            if (null !== this.Xn) {
              var i = (this.Xn - t) / this.Pr();
              (this.ur = l(this.hr).zr + i), (this.tr = !0), this.Ar();
            }
          }),
          (t.prototype.Ks = function () {
            null !== this.Xn && ((this.Xn = null), this.Yr());
          }),
          (t.prototype.Kr = function () {
            this.$r(this.ki.rightOffset);
          }),
          (t.prototype.$r = function (t, i) {
            var n = this;
            if ((void 0 === i && (i = 400), !isFinite(t)))
              throw new RangeError(
                "offset is required and must be finite number"
              );
            if (!isFinite(i) || i <= 0)
              throw new RangeError(
                "animationDuration (optional) must be finite positive number"
              );
            var s = this.ur,
              h = performance.now(),
              r = function () {
                var e = (performance.now() - h) / i,
                  u = e >= 1,
                  a = u ? t : s + (t - s) * e;
                n.Mr(a), u || setTimeout(r, 20);
              };
            r();
          }),
          (t.prototype.O = function (t, i) {
            (this.tr = !0), (this.Zh = t), this.Jh.Oh(t, i), this.Ar();
          }),
          (t.prototype.Xr = function () {
            return this.ir;
          }),
          (t.prototype.Zr = function () {
            return this.nr;
          }),
          (t.prototype.Jr = function () {
            return this.sr;
          }),
          (t.prototype.Br = function () {
            return this.Xh || 0;
          }),
          (t.prototype.Gr = function (t) {
            var i = t.Eh();
            this.Wr(this.$h / i),
              (this.ur = t.rh() - this.Br()),
              this.Ar(),
              (this.tr = !0),
              this.hi.Vr(),
              this.hi.Or();
          }),
          (t.prototype.Qr = function () {
            var t = this.Cr(),
              i = this.Nr();
            null !== t &&
              null !== i &&
              this.Gr(new Et(t, i + this.ki.rightOffset));
          }),
          (t.prototype.te = function (t) {
            var i = new Et(t.from, t.to);
            this.Gr(i);
          }),
          (t.prototype.ei = function (t) {
            return void 0 !== this.Qn.timeFormatter
              ? this.Qn.timeFormatter(t.Sh || t.Dh)
              : this.ie.oh(new Date(1e3 * t.Dh));
          }),
          (t.prototype.Cr = function () {
            return 0 === this.Zh.length ? null : 0;
          }),
          (t.prototype.Nr = function () {
            return 0 === this.Zh.length ? null : this.Zh.length - 1;
          }),
          (t.prototype.ne = function (t) {
            return (this.$h - 1 - t) / this.ar;
          }),
          (t.prototype.Fr = function (t) {
            var i = this.ne(t),
              n = this.Br() + this.ur - i;
            return Math.round(1e6 * n) / 1e6;
          }),
          (t.prototype.Wr = function (t) {
            var i = this.ar;
            (this.ar = t),
              this.Tr(),
              i !== this.ar && ((this.tr = !0), this.se());
          }),
          (t.prototype.gr = function () {
            if (this.tr)
              if (((this.tr = !1), this.ti())) this.he(Pt.Kh());
              else {
                var t = this.Br(),
                  i = this.$h / this.ar,
                  n = this.ur + t,
                  s = new Et(n - i + 1, n);
                this.he(new Pt(s));
              }
          }),
          (t.prototype.Tr = function () {
            var t = this.re();
            if ((this.ar < t && ((this.ar = t), (this.tr = !0)), 0 !== this.$h)) {
              var i = 0.5 * this.$h;
              this.ar > i && ((this.ar = i), (this.tr = !0));
            }
          }),
          (t.prototype.re = function () {
            return this.ki.fixLeftEdge &&
              this.ki.fixRightEdge &&
              0 !== this.Zh.length
              ? this.$h / this.Zh.length
              : this.ki.minBarSpacing;
          }),
          (t.prototype.Ar = function () {
            var t = this.ee();
            this.ur > t && ((this.ur = t), (this.tr = !0));
            var i = this.ue();
            null !== i && this.ur < i && ((this.ur = i), (this.tr = !0));
          }),
          (t.prototype.ue = function () {
            var t = this.Cr(),
              i = this.Xh;
            return null === t || null === i
              ? null
              : t -
                  i -
                  1 +
                  (this.ki.fixLeftEdge
                    ? this.$h / this.ar
                    : Math.min(2, this.Zh.length));
          }),
          (t.prototype.ee = function () {
            return this.ki.fixRightEdge
              ? 0
              : this.$h / this.ar - Math.min(2, this.Zh.length);
          }),
          (t.prototype.Hr = function () {
            this.hr = { Pr: this.Pr(), zr: this.zr() };
          }),
          (t.prototype.Yr = function () {
            this.hr = null;
          }),
          (t.prototype.Rr = function (t, i) {
            var n = this,
              s = this.Gh.get(i);
            return (
              void 0 === s &&
                ((s = new Lt(function (t) {
                  return n.ae(t, i);
                })),
                this.Gh.set(i, s)),
              s.oh(t)
            );
          }),
          (t.prototype.ae = function (t, i) {
            var n,
              s = (function (t, i, n) {
                switch (t) {
                  case 0:
                  case 10:
                    return i ? (n ? 4 : 3) : 2;
                  case 20:
                  case 21:
                  case 22:
                  case 30:
                  case 31:
                  case 32:
                  case 33:
                    return i ? 3 : 2;
                  case 50:
                    return 2;
                  case 60:
                    return 1;
                  case 70:
                    return 0;
                }
              })(i, this.ki.timeVisible, this.ki.secondsVisible);
            return void 0 !== this.ki.tickMarkFormatter
              ? this.ki.tickMarkFormatter(
                  null !== (n = t.Sh) && void 0 !== n ? n : t.Dh,
                  s,
                  this.Qn.locale
                )
              : (function (t, i, n) {
                  var s = {};
                  switch (i) {
                    case 0:
                      s.year = "numeric";
                      break;
                    case 1:
                      s.month = "short";
                      break;
                    case 2:
                      s.day = "numeric";
                      break;
                    case 3:
                      (s.hour12 = !1),
                        (s.hour = "2-digit"),
                        (s.minute = "2-digit");
                      break;
                    case 4:
                      (s.hour12 = !1),
                        (s.hour = "2-digit"),
                        (s.minute = "2-digit"),
                        (s.second = "2-digit");
                  }
                  var h =
                    void 0 === t.Sh
                      ? new Date(1e3 * t.Dh)
                      : new Date(Date.UTC(t.Sh.year, t.Sh.month - 1, t.Sh.day));
                  return new Date(
                    h.getUTCFullYear(),
                    h.getUTCMonth(),
                    h.getUTCDate(),
                    h.getUTCHours(),
                    h.getUTCMinutes(),
                    h.getUTCSeconds(),
                    h.getUTCMilliseconds()
                  ).toLocaleString(n, s);
                })(t, s, this.Qn.locale);
          }),
          (t.prototype.he = function (t) {
            var i = this.Qh;
            (this.Qh = t),
              Ft(i.Hh(), this.Qh.Hh()) || this.ir.hn(),
              Ft(i.Yh(), this.Qh.Yh()) || this.nr.hn(),
              this.se();
          }),
          (t.prototype.se = function () {
            this.rr = null;
          }),
          (t.prototype.vr = function () {
            this.se(), this.Gh.clear();
          }),
          (t.prototype.lr = function () {
            var t = this.Qn.dateFormat;
            this.ki.timeVisible
              ? (this.ie = new Tt({
                  fh: t,
                  _h: this.ki.secondsVisible ? "%h:%m:%s" : "%h:%m",
                  dh: "   ",
                  wh: this.Qn.locale,
                }))
              : (this.ie = new Nt(t, this.Qn.locale));
          }),
          (t.prototype._r = function () {
            if (this.ki.fixLeftEdge) {
              var t = this.Cr();
              if (null !== t) {
                var i = this.mr();
                if (null !== i) {
                  var n = i.hh() - t;
                  if (n < 0) {
                    var s = this.ur - n - 1;
                    this.Mr(s);
                  }
                  this.Tr();
                }
              }
            }
          }),
          (t.prototype.dr = function () {
            this.Ar(), this.Tr();
          }),
          t
        );
      })();
    function Rt(t) {
      return !v(t) && !d(t);
    }
    function It(t) {
      return v(t);
    }
    !(function (t) {
      (t.Solid = "solid"), (t.VerticalGradient = "gradient");
    })(Wt || (Wt = {}));
    var jt = "'Trebuchet MS', Roboto, Ubuntu, sans-serif";
    function qt(t, i, n) {
      return (
        void 0 !== n ? (n += " ") : (n = ""),
        void 0 === i && (i = jt),
        "" + n + t + "px " + i
      );
    }
    var Ut = (function () {
      function t(t) {
        (this.oe = {
          Tt: 1,
          Dt: 4,
          Pt: NaN,
          xt: "",
          le: "",
          et: "",
          Bt: 0,
          Lt: 0,
          Et: 0,
          At: 0,
          Ot: 0,
        }),
          (this.F = t);
      }
      return (
        (t.prototype.ct = function () {
          var t = this.oe,
            i = this.fe(),
            n = this.ce();
          return (
            (t.Pt === i && t.le === n) ||
              ((t.Pt = i),
              (t.le = n),
              (t.xt = qt(i, n)),
              (t.At = Math.floor(i / 3.5)),
              (t.Bt = t.At),
              (t.Lt = Math.max(Math.ceil(i / 2 - t.Dt / 2), 0)),
              (t.Et = Math.ceil(i / 2 + t.Dt / 2)),
              (t.Ot = Math.round(i / 10))),
            (t.et = this.ve()),
            this.oe
          );
        }),
        (t.prototype.ve = function () {
          return this.F.ct().layout.textColor;
        }),
        (t.prototype.fe = function () {
          return this.F.ct().layout.fontSize;
        }),
        (t.prototype.ce = function () {
          return this.F.ct().layout.fontFamily;
        }),
        t
      );
    })();
    function Ht(t) {
      return "left" === t || "right" === t;
    }
    var Yt = (function () {
        function t(t) {
          (this._e = new Map()), (this.de = !1), (this.we = []), (this.Me = t);
        }
        return (
          (t.prototype.be = function (t, i) {
            var n = (function (t, i) {
              return void 0 === t
                ? i
                : { me: Math.max(t.me, i.me), _s: t._s || i._s };
            })(this._e.get(t), i);
            this._e.set(t, n);
          }),
          (t.prototype.ge = function () {
            return this.Me;
          }),
          (t.prototype.pe = function (t) {
            var i = this._e.get(t);
            return void 0 === i
              ? { me: this.Me }
              : { me: Math.max(this.Me, i.me), _s: i._s };
          }),
          (t.prototype.ye = function () {
            this.we = [{ ke: 0 }];
          }),
          (t.prototype.Ce = function (t) {
            this.we = [{ ke: 1, X: t }];
          }),
          (t.prototype.xe = function () {
            this.we = [{ ke: 4 }];
          }),
          (t.prototype.wr = function (t) {
            this.we.push({ ke: 2, X: t });
          }),
          (t.prototype.Mr = function (t) {
            this.we.push({ ke: 3, X: t });
          }),
          (t.prototype.Ne = function () {
            return this.we;
          }),
          (t.prototype._n = function (t) {
            var i = this;
            (this.de = this.de || t.de), (this.we = this.we.concat(t.we));
            for (var n = 0, s = t.we; n < s.length; n++) {
              var h = s[n];
              this.Se(h);
            }
            (this.Me = Math.max(this.Me, t.Me)),
              t._e.forEach(function (t, n) {
                i.be(n, t);
              });
          }),
          (t.prototype.Se = function (t) {
            switch (t.ke) {
              case 0:
                this.ye();
                break;
              case 1:
                this.Ce(t.X);
                break;
              case 2:
                this.wr(t.X);
                break;
              case 3:
                this.Mr(t.X);
                break;
              case 4:
                this.xe();
            }
          }),
          t
        );
      })(),
      Kt = (function () {
        function t(t) {
          this.De = t;
        }
        return (
          (t.prototype.format = function (t) {
            var i = "";
            return (
              t < 0 && ((i = "-"), (t = -t)),
              t < 995
                ? i + this.Te(t)
                : t < 999995
                ? i + this.Te(t / 1e3) + "K"
                : t < 999999995
                ? ((t = 1e3 * Math.round(t / 1e3)), i + this.Te(t / 1e6) + "M")
                : ((t = 1e6 * Math.round(t / 1e6)), i + this.Te(t / 1e9) + "B")
            );
          }),
          (t.prototype.Te = function (t) {
            var i = Math.pow(10, this.De);
            return (
              (t = Math.round(t * i) / i) >= 1e-15 && t < 1
                ? t.toFixed(this.De).replace(/\.?0+$/, "")
                : String(t)
            ).replace(/(\.[1-9]*)0+$/, function (t, i) {
              return i;
            });
          }),
          t
        );
      })();
    function $t(t, i, n, s) {
      if (0 !== i.length) {
        var h = i[s.from].g,
          r = i[s.from].p;
        t.moveTo(h, r);
        for (var e = s.from + 1; e < s.to; ++e) {
          var u = i[e];
          if (1 === n) {
            var a = i[e - 1].p,
              o = u.g;
            t.lineTo(o, a);
          }
          t.lineTo(u.g, u.p);
        }
      }
    }
    var Xt = (function (t) {
        function i() {
          var i = (null !== t && t.apply(this, arguments)) || this;
          return (i.v = null), i;
        }
        return (
          r(i, t),
          (i.prototype._ = function (t) {
            this.v = t;
          }),
          (i.prototype.u = function (t) {
            if (null !== this.v && 0 !== this.v.m.length && null !== this.v.M) {
              if (
                ((t.lineCap = "butt"),
                (t.lineJoin = "round"),
                (t.lineWidth = this.v.rt),
                n(t, this.v.ut),
                (t.lineWidth = 1),
                t.beginPath(),
                1 === this.v.m.length)
              ) {
                var i = this.v.m[0],
                  s = this.v.Ae / 2;
                t.moveTo(i.g - s, this.v.Be),
                  t.lineTo(i.g - s, i.p),
                  t.lineTo(i.g + s, i.p),
                  t.lineTo(i.g + s, this.v.Be);
              } else
                t.moveTo(this.v.m[this.v.M.from].g, this.v.Be),
                  t.lineTo(this.v.m[this.v.M.from].g, this.v.m[this.v.M.from].p),
                  $t(t, this.v.m, this.v.Le, this.v.M),
                  this.v.M.to > this.v.M.from &&
                    (t.lineTo(this.v.m[this.v.M.to - 1].g, this.v.Be),
                    t.lineTo(this.v.m[this.v.M.from].g, this.v.Be));
              t.closePath(), (t.fillStyle = this.Ee(t)), t.fill();
            }
          }),
          i
        );
      })(p),
      Zt = (function (t) {
        function i() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return (
          r(i, t),
          (i.prototype.Ee = function (t) {
            var i = this.v,
              n = t.createLinearGradient(0, 0, 0, i.Fe);
            return n.addColorStop(0, i.Ve), n.addColorStop(1, i.Oe), n;
          }),
          i
        );
      })(Xt),
      Jt = (function (t) {
        function i() {
          var i = (null !== t && t.apply(this, arguments)) || this;
          return (i.v = null), i;
        }
        return (
          r(i, t),
          (i.prototype._ = function (t) {
            this.v = t;
          }),
          (i.prototype.u = function (t) {
            if (null !== this.v && 0 !== this.v.m.length && null !== this.v.M) {
              if (
                ((t.lineCap = "butt"),
                (t.lineWidth = this.v.rt),
                n(t, this.v.ut),
                (t.strokeStyle = this.Pe(t)),
                (t.lineJoin = "round"),
                t.beginPath(),
                1 === this.v.m.length)
              ) {
                var i = this.v.m[0];
                t.moveTo(i.g - this.v.Ae / 2, i.p),
                  t.lineTo(i.g + this.v.Ae / 2, i.p);
              } else $t(t, this.v.m, this.v.Le, this.v.M);
              t.stroke();
            }
          }),
          i
        );
      })(p),
      Gt = (function (t) {
        function i() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return (
          r(i, t),
          (i.prototype.Pe = function () {
            return this.v.N;
          }),
          i
        );
      })(Jt);
    function Qt(t, i) {
      return t.S < i;
    }
    function ti(t, i) {
      return t < i.S;
    }
    function ii(t, i, n) {
      var s = i.hh(),
        h = i.rh(),
        r = At(t, s, Qt),
        e = Bt(t, h, ti);
      if (!n) return { from: r, to: e };
      var u = r,
        a = e;
      return (
        r > 0 && r < t.length && t[r].S >= s && (u = r - 1),
        e > 0 && e < t.length && t[e - 1].S <= h && (a = e + 1),
        { from: u, to: a }
      );
    }
    var ni = (function () {
        function t(t, i, n) {
          (this.We = !0),
            (this.ze = !0),
            (this.Re = !0),
            (this.Ie = []),
            (this.je = null),
            (this.qe = t),
            (this.Ue = i),
            (this.He = n);
        }
        return (
          (t.prototype.O = function (t) {
            (this.We = !0),
              "data" === t && (this.ze = !0),
              "options" === t && (this.Re = !0);
          }),
          (t.prototype.Ye = function () {
            this.ze && (this.Ke(), (this.ze = !1)),
              this.We && (this.$e(), (this.We = !1)),
              this.Re && (this.Xe(), (this.Re = !1));
          }),
          (t.prototype.Ze = function () {
            this.je = null;
          }),
          (t.prototype.$e = function () {
            var t = this.qe.$(),
              i = this.Ue.j();
            if ((this.Ze(), !i.ti() && !t.ti())) {
              var n = i.mr();
              if (null !== n && 0 !== this.qe.Hi().Je()) {
                var s = this.qe.H();
                null !== s &&
                  ((this.je = ii(this.Ie, n, this.He)), this.Ge(t, i, s.X));
              }
            }
          }),
          t
        );
      })(),
      si = (function (t) {
        function i(i, n) {
          return t.call(this, i, n, !0) || this;
        }
        return (
          r(i, t),
          (i.prototype.Ge = function (t, i, n) {
            i.Lr(this.Ie, m(this.je)), t.Ss(this.Ie, n, m(this.je));
          }),
          (i.prototype.Qe = function (t, i) {
            return { S: t, D: i, g: NaN, p: NaN };
          }),
          (i.prototype.Xe = function () {}),
          (i.prototype.Ke = function () {
            var t = this,
              i = this.qe.tu();
            this.Ie = this.qe
              .Hi()
              .iu()
              .map(function (n) {
                var s = n.X[3];
                return t.nu(n.zh, s, i);
              });
          }),
          i
        );
      })(ni),
      hi = (function (t) {
        function i(i, n) {
          var s = t.call(this, i, n) || this;
          return (
            (s.ot = new g()),
            (s.su = new Zt()),
            (s.hu = new Gt()),
            s.ot.i([s.su, s.hu]),
            s
          );
        }
        return (
          r(i, t),
          (i.prototype.W = function (t, i) {
            if (!this.qe.U()) return null;
            var n = this.qe.ct();
            return (
              this.Ye(),
              this.su._({
                Le: n.lineType,
                m: this.Ie,
                ut: n.lineStyle,
                rt: n.lineWidth,
                Ve: n.topColor,
                Oe: n.bottomColor,
                Be: t,
                Fe: t,
                M: this.je,
                Ae: this.Ue.j().Pr(),
              }),
              this.hu._({
                Le: n.lineType,
                m: this.Ie,
                N: n.lineColor,
                ut: n.lineStyle,
                rt: n.lineWidth,
                M: this.je,
                Ae: this.Ue.j().Pr(),
              }),
              this.ot
            );
          }),
          (i.prototype.nu = function (t, i) {
            return this.Qe(t, i);
          }),
          i
        );
      })(si);
    var ri = (function () {
        function t() {
          (this.tt = null), (this.ru = 0), (this.eu = 0);
        }
        return (
          (t.prototype._ = function (t) {
            this.tt = t;
          }),
          (t.prototype.h = function (t, i, n, s) {
            if (
              null !== this.tt &&
              0 !== this.tt.Hi.length &&
              null !== this.tt.M
            ) {
              if (((this.ru = this.uu(i)), this.ru >= 2))
                Math.max(1, Math.floor(i)) % 2 != this.ru % 2 && this.ru--;
              this.eu = this.tt.au ? Math.min(this.ru, Math.floor(i)) : this.ru;
              for (
                var h = null,
                  r = this.eu <= this.ru && this.tt.Pr >= Math.floor(1.5 * i),
                  e = this.tt.M.from;
                e < this.tt.M.to;
                ++e
              ) {
                var u = this.tt.Hi[e];
                h !== u.et && ((t.fillStyle = u.et), (h = u.et));
                var a = Math.floor(0.5 * this.eu),
                  o = Math.round(u.g * i),
                  l = o - a,
                  f = this.eu,
                  c = l + f - 1,
                  v = Math.min(u.Bs, u.Ls),
                  _ = Math.max(u.Bs, u.Ls),
                  d = Math.round(v * i) - a,
                  w = Math.round(_ * i) + a,
                  M = Math.max(w - d, this.eu);
                t.fillRect(l, d, f, M);
                var b = Math.ceil(1.5 * this.ru);
                if (r) {
                  if (this.tt.ou) {
                    var m = o - b,
                      g = Math.max(d, Math.round(u.As * i) - a),
                      p = g + f - 1;
                    p > d + M - 1 && (g = (p = d + M - 1) - f + 1),
                      t.fillRect(m, g, l - m, p - g + 1);
                  }
                  var y = o + b,
                    k = Math.max(d, Math.round(u.Es * i) - a),
                    C = k + f - 1;
                  C > d + M - 1 && (k = (C = d + M - 1) - f + 1),
                    t.fillRect(c + 1, k, y - c, C - k + 1);
                }
              }
            }
          }),
          (t.prototype.uu = function (t) {
            var i = Math.floor(t);
            return Math.max(
              i,
              Math.floor(
                (function (t, i) {
                  return Math.floor(0.3 * t * i);
                })(l(this.tt).Pr, t)
              )
            );
          }),
          t
        );
      })(),
      ei = (function (t) {
        function i(i, n) {
          return t.call(this, i, n, !1) || this;
        }
        return (
          r(i, t),
          (i.prototype.Ge = function (t, i, n) {
            i.Lr(this.Ie, m(this.je)), t.Ts(this.Ie, n, m(this.je));
          }),
          (i.prototype.lu = function (t, i, n) {
            return {
              S: t,
              open: i.X[0],
              high: i.X[1],
              low: i.X[2],
              close: i.X[3],
              g: NaN,
              As: NaN,
              Bs: NaN,
              Ls: NaN,
              Es: NaN,
            };
          }),
          (i.prototype.Ke = function () {
            var t = this,
              i = this.qe.tu();
            this.Ie = this.qe
              .Hi()
              .iu()
              .map(function (n) {
                return t.nu(n.zh, n, i);
              });
          }),
          i
        );
      })(ni),
      ui = (function (t) {
        function i() {
          var i = (null !== t && t.apply(this, arguments)) || this;
          return (i.ot = new ri()), i;
        }
        return (
          r(i, t),
          (i.prototype.W = function (t, i) {
            if (!this.qe.U()) return null;
            var n = this.qe.ct();
            this.Ye();
            var s = {
              Hi: this.Ie,
              Pr: this.Ue.j().Pr(),
              ou: n.openVisible,
              au: n.thinBars,
              M: this.je,
            };
            return this.ot._(s), this.ot;
          }),
          (i.prototype.Xe = function () {
            var t = this;
            this.Ie.forEach(function (i) {
              i.et = t.qe.tu().cu(i.S).fu;
            });
          }),
          (i.prototype.nu = function (t, i, n) {
            return e(e({}, this.lu(t, i, n)), { et: n.cu(t).fu });
          }),
          i
        );
      })(ei),
      ai = (function (t) {
        function i() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return (
          r(i, t),
          (i.prototype.Ee = function (t) {
            var i = this.v,
              n = t.createLinearGradient(0, 0, 0, i.Fe),
              s = nt(i.Be / i.Fe, 0, 1);
            return (
              n.addColorStop(0, i.vu),
              n.addColorStop(s, i._u),
              n.addColorStop(s, i.du),
              n.addColorStop(1, i.wu),
              n
            );
          }),
          i
        );
      })(Xt),
      oi = (function (t) {
        function i() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return (
          r(i, t),
          (i.prototype.Pe = function (t) {
            var i = this.v,
              n = t.createLinearGradient(0, 0, 0, i.Fe),
              s = nt(i.Be / i.Fe, 0, 1);
            return (
              n.addColorStop(0, i.Ve),
              n.addColorStop(s, i.Ve),
              n.addColorStop(s, i.Oe),
              n.addColorStop(1, i.Oe),
              n
            );
          }),
          i
        );
      })(Jt),
      li = (function (t) {
        function i(i, n) {
          var s = t.call(this, i, n) || this;
          return (
            (s.Mu = new ai()),
            (s.bu = new oi()),
            (s.T = new g()),
            s.T.i([s.Mu, s.bu]),
            s
          );
        }
        return (
          r(i, t),
          (i.prototype.W = function (t, i) {
            if (!this.qe.U()) return null;
            var n = this.qe.H();
            if (null === n) return null;
            var s = this.qe.ct();
            this.Ye();
            var h = this.qe.$().K(s.baseValue.price, n.X),
              r = this.Ue.j().Pr();
            return (
              this.Mu._({
                m: this.Ie,
                vu: s.topFillColor1,
                _u: s.topFillColor2,
                du: s.bottomFillColor1,
                wu: s.bottomFillColor2,
                rt: s.lineWidth,
                ut: s.lineStyle,
                Le: 0,
                Be: h,
                Fe: t,
                M: this.je,
                Ae: r,
              }),
              this.bu._({
                m: this.Ie,
                Ve: s.topLineColor,
                Oe: s.bottomLineColor,
                rt: s.lineWidth,
                ut: s.lineStyle,
                Le: 0,
                Be: h,
                Fe: t,
                M: this.je,
                Ae: r,
              }),
              this.T
            );
          }),
          (i.prototype.nu = function (t, i) {
            return this.Qe(t, i);
          }),
          i
        );
      })(si),
      fi = (function () {
        function t() {
          (this.tt = null), (this.ru = 0);
        }
        return (
          (t.prototype._ = function (t) {
            this.tt = t;
          }),
          (t.prototype.h = function (t, i, n, s) {
            if (
              null !== this.tt &&
              0 !== this.tt.Hi.length &&
              null !== this.tt.M
            ) {
              if (
                ((this.ru = (function (t, i) {
                  if (t >= 2.5 && t <= 4) return Math.floor(3 * i);
                  var n =
                      1 - (0.2 * Math.atan(Math.max(4, t) - 4)) / (0.5 * Math.PI),
                    s = Math.floor(t * n * i),
                    h = Math.floor(t * i),
                    r = Math.min(s, h);
                  return Math.max(Math.floor(i), r);
                })(this.tt.Pr, i)),
                this.ru >= 2)
              )
                Math.floor(i) % 2 != this.ru % 2 && this.ru--;
              var h = this.tt.Hi;
              this.tt.mu && this.gu(t, h, this.tt.M, i),
                this.tt.pu && this.yu(t, h, this.tt.M, this.tt.Pr, i);
              var r = this.ku(i);
              (!this.tt.pu || this.ru > 2 * r) && this.Cu(t, h, this.tt.M, i);
            }
          }),
          (t.prototype.gu = function (t, i, n, s) {
            if (null !== this.tt) {
              var h = "",
                r = Math.min(Math.floor(s), Math.floor(this.tt.Pr * s));
              r = Math.max(Math.floor(s), Math.min(r, this.ru));
              for (
                var e = Math.floor(0.5 * r), u = null, a = n.from;
                a < n.to;
                a++
              ) {
                var o = i[a];
                o.xu !== h && ((t.fillStyle = o.xu), (h = o.xu));
                var l = Math.round(Math.min(o.As, o.Es) * s),
                  f = Math.round(Math.max(o.As, o.Es) * s),
                  c = Math.round(o.Bs * s),
                  v = Math.round(o.Ls * s),
                  _ = Math.round(s * o.g) - e,
                  d = _ + r - 1;
                null !== u && ((_ = Math.max(u + 1, _)), (_ = Math.min(_, d)));
                var w = d - _ + 1;
                t.fillRect(_, c, w, l - c),
                  t.fillRect(_, f + 1, w, v - f),
                  (u = d);
              }
            }
          }),
          (t.prototype.ku = function (t) {
            var i = Math.floor(1 * t);
            this.ru <= 2 * i && (i = Math.floor(0.5 * (this.ru - 1)));
            var n = Math.max(Math.floor(t), i);
            return this.ru <= 2 * n
              ? Math.max(Math.floor(t), Math.floor(1 * t))
              : n;
          }),
          (t.prototype.yu = function (t, i, n, s, h) {
            if (null !== this.tt)
              for (
                var r = "", e = this.ku(h), u = null, a = n.from;
                a < n.to;
                a++
              ) {
                var o = i[a];
                o.Z !== r && ((t.fillStyle = o.Z), (r = o.Z));
                var l = Math.round(o.g * h) - Math.floor(0.5 * this.ru),
                  f = l + this.ru - 1,
                  c = Math.round(Math.min(o.As, o.Es) * h),
                  v = Math.round(Math.max(o.As, o.Es) * h);
                if (
                  (null !== u && ((l = Math.max(u + 1, l)), (l = Math.min(l, f))),
                  this.tt.Pr * h > 2 * e)
                )
                  P(t, l, c, f - l + 1, v - c + 1, e);
                else {
                  var _ = f - l + 1;
                  t.fillRect(l, c, _, v - c + 1);
                }
                u = f;
              }
          }),
          (t.prototype.Cu = function (t, i, n, s) {
            if (null !== this.tt)
              for (var h = "", r = this.ku(s), e = n.from; e < n.to; e++) {
                var u = i[e],
                  a = Math.round(Math.min(u.As, u.Es) * s),
                  o = Math.round(Math.max(u.As, u.Es) * s),
                  l = Math.round(u.g * s) - Math.floor(0.5 * this.ru),
                  f = l + this.ru - 1;
                if (u.et !== h) {
                  var c = u.et;
                  (t.fillStyle = c), (h = c);
                }
                this.tt.pu && ((l += r), (a += r), (f -= r), (o -= r)),
                  a > o || t.fillRect(l, a, f - l + 1, o - a + 1);
              }
          }),
          t
        );
      })(),
      ci = (function (t) {
        function i() {
          var i = (null !== t && t.apply(this, arguments)) || this;
          return (i.ot = new fi()), i;
        }
        return (
          r(i, t),
          (i.prototype.W = function (t, i) {
            if (!this.qe.U()) return null;
            var n = this.qe.ct();
            this.Ye();
            var s = {
              Hi: this.Ie,
              Pr: this.Ue.j().Pr(),
              mu: n.wickVisible,
              pu: n.borderVisible,
              M: this.je,
            };
            return this.ot._(s), this.ot;
          }),
          (i.prototype.Xe = function () {
            var t = this;
            this.Ie.forEach(function (i) {
              var n = t.qe.tu().cu(i.S);
              (i.et = n.fu), (i.xu = n.Nu), (i.Z = n.Su);
            });
          }),
          (i.prototype.nu = function (t, i, n) {
            var s = n.cu(t);
            return e(e({}, this.lu(t, i, n)), { et: s.fu, xu: s.Nu, Z: s.Su });
          }),
          i
        );
      })(ei),
      vi = (function () {
        function t() {
          (this.tt = null), (this.Du = []);
        }
        return (
          (t.prototype._ = function (t) {
            (this.tt = t), (this.Du = []);
          }),
          (t.prototype.h = function (t, i, n, s) {
            if (
              null !== this.tt &&
              0 !== this.tt.m.length &&
              null !== this.tt.M
            ) {
              this.Du.length || this.Tu(i);
              for (
                var h = Math.max(1, Math.floor(i)),
                  r = Math.round(this.tt.Au * i) - Math.floor(h / 2),
                  e = r + h,
                  u = this.tt.M.from;
                u < this.tt.M.to;
                u++
              ) {
                var a = this.tt.m[u],
                  o = this.Du[u - this.tt.M.from],
                  l = Math.round(a.p * i);
                t.fillStyle = a.et;
                var f = void 0,
                  c = void 0;
                l <= r
                  ? ((f = l), (c = e))
                  : ((f = r), (c = l - Math.floor(h / 2) + h)),
                  t.fillRect(o.hh, f, o.rh - o.hh + 1, c - f);
              }
            }
          }),
          (t.prototype.Tu = function (t) {
            if (
              null !== this.tt &&
              0 !== this.tt.m.length &&
              null !== this.tt.M
            ) {
              var i =
                  Math.ceil(this.tt.Pr * t) <= 1 ? 0 : Math.max(1, Math.floor(t)),
                n = Math.round(this.tt.Pr * t) - i;
              this.Du = new Array(this.tt.M.to - this.tt.M.from);
              for (var s = this.tt.M.from; s < this.tt.M.to; s++) {
                var h,
                  r = this.tt.m[s],
                  e = Math.round(r.g * t),
                  u = void 0,
                  a = void 0;
                if (n % 2) (u = e - (h = (n - 1) / 2)), (a = e + h);
                else (u = e - (h = n / 2)), (a = e + h - 1);
                this.Du[s - this.tt.M.from] = {
                  hh: u,
                  rh: a,
                  Bu: e,
                  Lu: r.g * t,
                  S: r.S,
                };
              }
              for (s = this.tt.M.from + 1; s < this.tt.M.to; s++) {
                var o = this.Du[s - this.tt.M.from],
                  l = this.Du[s - this.tt.M.from - 1];
                o.S === l.S + 1 &&
                  o.hh - l.rh !== i + 1 &&
                  (l.Bu > l.Lu ? (l.rh = o.hh - i - 1) : (o.hh = l.rh + i + 1));
              }
              var f = Math.ceil(this.tt.Pr * t);
              for (s = this.tt.M.from; s < this.tt.M.to; s++) {
                (o = this.Du[s - this.tt.M.from]).rh < o.hh && (o.rh = o.hh);
                var c = o.rh - o.hh + 1;
                f = Math.min(c, f);
              }
              if (i > 0 && f < 4)
                for (s = this.tt.M.from; s < this.tt.M.to; s++) {
                  (c = (o = this.Du[s - this.tt.M.from]).rh - o.hh + 1) > f &&
                    (o.Bu > o.Lu ? (o.rh -= 1) : (o.hh += 1));
                }
            } else this.Du = [];
          }),
          t
        );
      })();
    function _i(t) {
      return { m: [], Pr: t, Au: NaN, M: null };
    }
    function di(t, i, n) {
      return { S: t, D: i, g: NaN, p: NaN, et: n };
    }
    var wi = (function (t) {
        function i(i, n) {
          var s = t.call(this, i, n, !1) || this;
          return (s.T = new g()), (s.Eu = _i(0)), (s.ot = new vi()), s;
        }
        return (
          r(i, t),
          (i.prototype.W = function (t, i) {
            return this.qe.U() ? (this.Ye(), this.T) : null;
          }),
          (i.prototype.Ke = function () {
            var t = this.Ue.j().Pr();
            this.Eu = _i(t);
            for (
              var i = 0,
                n = 0,
                s = this.qe.ct().color,
                h = 0,
                r = this.qe.Hi().iu();
              h < r.length;
              h++
            ) {
              var e = r[h],
                u = e.X[3],
                a = void 0 !== e.et ? e.et : s,
                o = di(e.zh, u, a);
              ++i < this.Eu.m.length ? (this.Eu.m[i] = o) : this.Eu.m.push(o),
                (this.Ie[n++] = { S: e.zh, g: 0 });
            }
            this.ot._(this.Eu), this.T.i([this.ot]);
          }),
          (i.prototype.Xe = function () {}),
          (i.prototype.Ze = function () {
            t.prototype.Ze.call(this), (this.Eu.M = null);
          }),
          (i.prototype.Ge = function (t, i, n) {
            if (null !== this.je) {
              var s = i.Pr(),
                h = l(i.mr()),
                r = t.K(this.qe.ct().base, n);
              i.Lr(this.Eu.m),
                t.Ss(this.Eu.m, n),
                (this.Eu.Au = r),
                (this.Eu.M = ii(this.Eu.m, h, !1)),
                (this.Eu.Pr = s),
                this.ot._(this.Eu);
            }
          }),
          i
        );
      })(ni),
      Mi = (function (t) {
        function i(i, n) {
          var s = t.call(this, i, n) || this;
          return (s.hu = new Gt()), s;
        }
        return (
          r(i, t),
          (i.prototype.W = function (t, i) {
            if (!this.qe.U()) return null;
            var n = this.qe.ct();
            this.Ye();
            var s = {
              m: this.Ie,
              N: n.color,
              ut: n.lineStyle,
              Le: n.lineType,
              rt: n.lineWidth,
              M: this.je,
              Ae: this.Ue.j().Pr(),
            };
            return this.hu._(s), this.hu;
          }),
          (i.prototype.nu = function (t, i) {
            return this.Qe(t, i);
          }),
          i
        );
      })(si),
      bi = /[2-9]/g,
      mi = (function () {
        function t(t) {
          void 0 === t && (t = 50),
            (this.kh = new Map()),
            (this.Fu = 0),
            (this.Vu = Array.from(new Array(t)));
        }
        return (
          (t.prototype.Ou = function () {
            this.kh.clear(), this.Vu.fill(void 0);
          }),
          (t.prototype.Vt = function (t, i, n) {
            var s = n || bi,
              h = String(i).replace(s, "0"),
              r = this.kh.get(h);
            if (void 0 === r) {
              if (0 === (r = t.measureText(h).width) && 0 !== i.length) return 0;
              var e = this.Vu[this.Fu];
              void 0 !== e && this.kh.delete(e),
                (this.Vu[this.Fu] = h),
                (this.Fu = (this.Fu + 1) % this.Vu.length),
                this.kh.set(h, r);
            }
            return r;
          }),
          t
        );
      })(),
      gi = (function () {
        function t(t) {
          (this.Pu = null),
            (this.oe = null),
            (this.Wu = "right"),
            (this.$h = 0),
            (this.zu = t);
        }
        return (
          (t.prototype.Ru = function (t, i, n, s) {
            (this.Pu = t), (this.oe = i), (this.$h = n), (this.Wu = s);
          }),
          (t.prototype.h = function (t, i) {
            null !== this.oe &&
              null !== this.Pu &&
              this.Pu.h(t, this.oe, this.zu, this.$h, this.Wu, i);
          }),
          t
        );
      })(),
      pi = (function () {
        function t(t, i, n) {
          (this.Iu = t),
            (this.zu = new mi(50)),
            (this.ju = i),
            (this.F = n),
            (this.fe = -1),
            (this.ot = new gi(this.zu));
        }
        return (
          (t.prototype.W = function (t, i) {
            var n = this.F.qu(this.ju);
            if (null === n) return null;
            var s = n.Uu(this.ju) ? n.Ni() : this.ju.$();
            if (null === s) return null;
            var h = n.Hu(s);
            if ("overlay" === h) return null;
            var r = this.F.Yu();
            return (
              r.Pt !== this.fe && ((this.fe = r.Pt), this.zu.Ou()),
              this.ot.Ru(this.Iu.Zt(), r, i, h),
              this.ot
            );
          }),
          t
        );
      })(),
      yi = (function () {
        function t() {
          this.tt = null;
        }
        return (
          (t.prototype._ = function (t) {
            this.tt = t;
          }),
          (t.prototype.h = function (t, i, h, r) {
            if (null !== this.tt && !1 !== this.tt.U) {
              var e = Math.round(this.tt.p * i);
              if (!(e < 0 || e > Math.ceil(this.tt.Mt * i))) {
                var u = Math.ceil(this.tt.wt * i);
                (t.lineCap = "butt"),
                  (t.strokeStyle = this.tt.et),
                  (t.lineWidth = Math.floor(this.tt.rt * i)),
                  n(t, this.tt.ut),
                  s(t, e, 0, u);
              }
            }
          }),
          t
        );
      })(),
      ki = (function () {
        function t(t) {
          (this.Ku = {
            wt: 0,
            Mt: 0,
            p: 0,
            et: "rgba(0, 0, 0, 0)",
            rt: 1,
            ut: 0,
            U: !1,
          }),
            (this.$u = new yi()),
            (this.L = !0),
            (this.qe = t),
            (this.Ue = t.vt()),
            this.$u._(this.Ku);
        }
        return (
          (t.prototype.O = function () {
            this.L = !0;
          }),
          (t.prototype.W = function (t, i) {
            return this.qe.U()
              ? (this.L && (this.Xu(t, i), (this.L = !1)), this.$u)
              : null;
          }),
          t
        );
      })(),
      Ci = (function (t) {
        function i(i) {
          return t.call(this, i) || this;
        }
        return (
          r(i, t),
          (i.prototype.Xu = function (t, i) {
            this.Ku.U = !1;
            var n = this.qe.$(),
              s = n.os().os;
            if (2 === s || 3 === s) {
              var h = this.qe.ct();
              if (h.baseLineVisible && this.qe.U()) {
                var r = this.qe.H();
                null !== r &&
                  ((this.Ku.U = !0),
                  (this.Ku.p = n.K(r.X, r.X)),
                  (this.Ku.wt = i),
                  (this.Ku.Mt = t),
                  (this.Ku.et = h.baseLineColor),
                  (this.Ku.rt = h.baseLineWidth),
                  (this.Ku.ut = h.baseLineStyle));
              }
            }
          }),
          i
        );
      })(ki),
      xi = (function () {
        function t() {
          this.tt = null;
        }
        return (
          (t.prototype._ = function (t) {
            this.tt = t;
          }),
          (t.prototype.Zu = function () {
            return this.tt;
          }),
          (t.prototype.h = function (t, i, n, s) {
            var h = this.tt;
            if (null !== h) {
              t.save();
              var r = Math.max(1, Math.floor(i)),
                e = (r % 2) / 2,
                u = Math.round(h.Lu.x * i) + e,
                a = h.Lu.y * i;
              (t.fillStyle = h.Ju), t.beginPath();
              var o = Math.max(2, 1.5 * h.Gu) * i;
              t.arc(u, a, o, 0, 2 * Math.PI, !1),
                t.fill(),
                (t.fillStyle = h.Qu),
                t.beginPath(),
                t.arc(u, a, h.C * i, 0, 2 * Math.PI, !1),
                t.fill(),
                (t.lineWidth = r),
                (t.strokeStyle = h.ta),
                t.beginPath(),
                t.arc(u, a, h.C * i + r / 2, 0, 2 * Math.PI, !1),
                t.stroke(),
                t.restore();
            }
          }),
          t
        );
      })(),
      Ni = [
        { ia: 0, na: 0.25, sa: 4, ha: 10, ra: 0.25, ea: 0, ua: 0.4, aa: 0.8 },
        { ia: 0.25, na: 0.525, sa: 10, ha: 14, ra: 0, ea: 0, ua: 0.8, aa: 0 },
        { ia: 0.525, na: 1, sa: 14, ha: 14, ra: 0, ea: 0, ua: 0, aa: 0 },
      ];
    function Si(t, i, n, s) {
      return (function (t, i) {
        if ("transparent" === t) return t;
        var n = V(t),
          s = n[3];
        return "rgba(" + n[0] + ", " + n[1] + ", " + n[2] + ", " + i * s + ")";
      })(t, n + (s - n) * i);
    }
    function Di(t, i) {
      for (var n, s = (t % 2600) / 2600, h = 0, r = Ni; h < r.length; h++) {
        var e = r[h];
        if (s >= e.ia && s <= e.na) {
          n = e;
          break;
        }
      }
      a(void 0 !== n, "Last price animation internal logic error");
      var u,
        o,
        l,
        f = (s - n.ia) / (n.na - n.ia);
      return {
        Qu: Si(i, f, n.ra, n.ea),
        ta: Si(i, f, n.ua, n.aa),
        C: ((u = f), (o = n.sa), (l = n.ha), o + (l - o) * u),
      };
    }
    var Ti = (function () {
      function t(t) {
        (this.ot = new xi()),
          (this.L = !0),
          (this.oa = !0),
          (this.la = performance.now()),
          (this.fa = this.la - 1),
          (this.ca = t);
      }
      return (
        (t.prototype.O = function (t) {
          if (
            ((this.L = !0), "data" === t && 2 === this.ca.ct().lastPriceAnimation)
          ) {
            var i = performance.now(),
              n = this.fa - i;
            if (n > 0) return void (n < 650 && (this.fa += 2600));
            (this.la = i), (this.fa = i + 2600);
          }
        }),
        (t.prototype.va = function () {
          this.oa = !0;
        }),
        (t.prototype.U = function () {
          return 0 !== this.ca.ct().lastPriceAnimation;
        }),
        (t.prototype._a = function () {
          switch (this.ca.ct().lastPriceAnimation) {
            case 0:
              return !1;
            case 1:
              return !0;
            case 2:
              return performance.now() <= this.fa;
          }
        }),
        (t.prototype.W = function (t, i) {
          return (
            this.L
              ? (this.R(t, i), (this.L = !1), (this.oa = !1))
              : this.oa && (this.da(), (this.oa = !1)),
            this.ot
          );
        }),
        (t.prototype.R = function (t, i) {
          this.ot._(null);
          var n = this.ca.vt().j(),
            s = n.mr(),
            h = this.ca.H();
          if (null !== s && null !== h) {
            var r = this.ca.wa(!0);
            if (!r.Ma && s.Fh(r.zh)) {
              var e = { x: n.G(r.zh), y: this.ca.$().K(r.D, h.X) },
                u = r.et,
                a = this.ca.ct().lineWidth,
                o = Di(this.ba(), u);
              this.ot._({ Ju: u, Gu: a, Qu: o.Qu, ta: o.ta, C: o.C, Lu: e });
            }
          }
        }),
        (t.prototype.da = function () {
          var t = this.ot.Zu();
          if (null !== t) {
            var i = Di(this.ba(), t.Ju);
            (t.Qu = i.Qu), (t.ta = i.ta), (t.C = i.C);
          }
        }),
        (t.prototype.ba = function () {
          return this._a() ? performance.now() - this.la : 2599;
        }),
        t
      );
    })();
    function Ai(t, i) {
      return et(Math.min(Math.max(t, 12), 30) * i);
    }
    function Bi(t, i) {
      switch (t) {
        case "arrowDown":
        case "arrowUp":
          return Ai(i, 1);
        case "circle":
          return Ai(i, 0.8);
        case "square":
          return Ai(i, 0.7);
      }
    }
    function Li(t) {
      return rt(Ai(t, 1));
    }
    function Ei(t) {
      return Math.max(Ai(t, 0.1), 3);
    }
    function Fi(t, i, n, s, h) {
      var r = Bi("square", n),
        e = (r - 1) / 2,
        u = t - e,
        a = i - e;
      return s >= u && s <= u + r && h >= a && h <= a + r;
    }
    function Vi(t, i, n, s, h) {
      var r = (Bi("arrowUp", h) - 1) / 2,
        e = (et(h / 2) - 1) / 2;
      i.beginPath(),
        t
          ? (i.moveTo(n - r, s),
            i.lineTo(n, s - r),
            i.lineTo(n + r, s),
            i.lineTo(n + e, s),
            i.lineTo(n + e, s + r),
            i.lineTo(n - e, s + r),
            i.lineTo(n - e, s))
          : (i.moveTo(n - r, s),
            i.lineTo(n, s + r),
            i.lineTo(n + r, s),
            i.lineTo(n + e, s),
            i.lineTo(n + e, s - r),
            i.lineTo(n - e, s - r),
            i.lineTo(n - e, s)),
        i.fill();
    }
    function Oi(t, i, n, s, h, r) {
      return Fi(i, n, s, h, r);
    }
    var Pi = (function (t) {
      function i() {
        var i = (null !== t && t.apply(this, arguments)) || this;
        return (
          (i.tt = null),
          (i.zu = new mi()),
          (i.fe = -1),
          (i.ce = ""),
          (i.ma = ""),
          i
        );
      }
      return (
        r(i, t),
        (i.prototype._ = function (t) {
          this.tt = t;
        }),
        (i.prototype.Ru = function (t, i) {
          (this.fe === t && this.ce === i) ||
            ((this.fe = t), (this.ce = i), (this.ma = qt(t, i)), this.zu.Ou());
        }),
        (i.prototype.ga = function (t, i) {
          if (null === this.tt || null === this.tt.M) return null;
          for (var n = this.tt.M.from; n < this.tt.M.to; n++) {
            var s = this.tt.m[n];
            if (zi(s, t, i)) return { pa: s.ya, ka: s.ka };
          }
          return null;
        }),
        (i.prototype.u = function (t, i, n) {
          if (null !== this.tt && null !== this.tt.M) {
            (t.textBaseline = "middle"), (t.font = this.ma);
            for (var s = this.tt.M.from; s < this.tt.M.to; s++) {
              var h = this.tt.m[s];
              void 0 !== h.Ft &&
                ((h.Ft.wt = this.zu.Vt(t, h.Ft.Ca)), (h.Ft.Mt = this.fe)),
                Wi(h, t);
            }
          }
        }),
        i
      );
    })(p);
    function Wi(t, i) {
      (i.fillStyle = t.et),
        void 0 !== t.Ft &&
          (function (t, i, n, s) {
            t.fillText(i, n, s);
          })(i, t.Ft.Ca, t.g - t.Ft.wt / 2, t.Ft.p),
        (function (t, i) {
          if (0 === t.Je) return;
          switch (t.xa) {
            case "arrowDown":
              return void Vi(!1, i, t.g, t.p, t.Je);
            case "arrowUp":
              return void Vi(!0, i, t.g, t.p, t.Je);
            case "circle":
              return void (function (t, i, n, s) {
                var h = (Bi("circle", s) - 1) / 2;
                t.beginPath(), t.arc(i, n, h, 0, 2 * Math.PI, !1), t.fill();
              })(i, t.g, t.p, t.Je);
            case "square":
              return void (function (t, i, n, s) {
                var h = Bi("square", s),
                  r = (h - 1) / 2,
                  e = i - r,
                  u = n - r;
                t.fillRect(e, u, h, h);
              })(i, t.g, t.p, t.Je);
          }
          t.xa;
        })(t, i);
    }
    function zi(t, i, n) {
      return (
        !(
          void 0 === t.Ft ||
          !(function (t, i, n, s, h, r) {
            var e = s / 2;
            return h >= t && h <= t + n && r >= i - e && r <= i + e;
          })(t.g, t.Ft.p, t.Ft.wt, t.Ft.Mt, i, n)
        ) ||
        (function (t, i, n) {
          if (0 === t.Je) return !1;
          switch (t.xa) {
            case "arrowDown":
            case "arrowUp":
              return Oi(0, t.g, t.p, t.Je, i, n);
            case "circle":
              return (function (t, i, n, s, h) {
                var r = 2 + Bi("circle", n) / 2,
                  e = t - s,
                  u = i - h;
                return Math.sqrt(e * e + u * u) <= r;
              })(t.g, t.p, t.Je, i, n);
            case "square":
              return Fi(t.g, t.p, t.Je, i, n);
          }
        })(t, i, n)
      );
    }
    function Ri(t, i, n, s, h, r, e, u, a) {
      var o = v(n) ? n : n.close,
        l = v(n) ? n : n.high,
        f = v(n) ? n : n.low,
        c = v(i.size) ? Math.max(i.size, 0) : 1,
        _ = Li(u.Pr()) * c,
        d = _ / 2;
      switch (((t.Je = _), i.position)) {
        case "inBar":
          return (
            (t.p = e.K(o, a)),
            void (void 0 !== t.Ft && (t.Ft.p = t.p + d + r + 0.6 * h))
          );
        case "aboveBar":
          return (
            (t.p = e.K(l, a) - d - s.Na),
            void 0 !== t.Ft && ((t.Ft.p = t.p - d - 0.6 * h), (s.Na += 1.2 * h)),
            void (s.Na += _ + r)
          );
        case "belowBar":
          return (
            (t.p = e.K(f, a) + d + s.Sa),
            void 0 !== t.Ft &&
              ((t.Ft.p = t.p + d + r + 0.6 * h), (s.Sa += 1.2 * h)),
            void (s.Sa += _ + r)
          );
      }
      i.position;
    }
    var Ii = (function () {
        function t(t, i) {
          (this.L = !0),
            (this.Da = !0),
            (this.Ta = !0),
            (this.Aa = null),
            (this.ot = new Pi()),
            (this.ca = t),
            (this.hi = i),
            (this.tt = { m: [], M: null });
        }
        return (
          (t.prototype.O = function (t) {
            (this.L = !0), (this.Ta = !0), "data" === t && (this.Da = !0);
          }),
          (t.prototype.W = function (t, i, n) {
            if (!this.ca.U()) return null;
            this.L && this.Ye();
            var s = this.hi.ct().layout;
            return (
              this.ot.Ru(s.fontSize, s.fontFamily), this.ot._(this.tt), this.ot
            );
          }),
          (t.prototype.Ba = function () {
            if (this.Ta) {
              if (this.ca.La().length > 0) {
                var t = this.hi.j().Pr(),
                  i = Ei(t),
                  n = 1.5 * Li(t) + 2 * i;
                this.Aa = { above: n, below: n };
              } else this.Aa = null;
              this.Ta = !1;
            }
            return this.Aa;
          }),
          (t.prototype.Ye = function () {
            var t = this.ca.$(),
              i = this.hi.j(),
              n = this.ca.La();
            this.Da &&
              ((this.tt.m = n.map(function (t) {
                return {
                  S: t.time,
                  g: 0,
                  p: 0,
                  Je: 0,
                  xa: t.shape,
                  et: t.color,
                  ya: t.ya,
                  ka: t.id,
                  Ft: void 0,
                };
              })),
              (this.Da = !1));
            var s = this.hi.ct().layout;
            this.tt.M = null;
            var h = i.mr();
            if (null !== h) {
              var r = this.ca.H();
              if (null !== r && 0 !== this.tt.m.length) {
                var e = NaN,
                  u = Ei(i.Pr()),
                  a = { Na: u, Sa: u };
                this.tt.M = ii(this.tt.m, h, !0);
                for (var o = this.tt.M.from; o < this.tt.M.to; o++) {
                  var l = n[o];
                  l.time !== e && ((a.Na = u), (a.Sa = u), (e = l.time));
                  var f = this.tt.m[o];
                  (f.g = i.G(l.time)),
                    void 0 !== l.text &&
                      l.text.length > 0 &&
                      (f.Ft = { Ca: l.text, p: 0, wt: 0, Mt: 0 });
                  var c = this.ca.Ea(l.time);
                  null !== c && Ri(f, l, c, a, s.fontSize, u, t, i, r.X);
                }
                this.L = !1;
              }
            }
          }),
          t
        );
      })(),
      ji = (function (t) {
        function i(i) {
          return t.call(this, i) || this;
        }
        return (
          r(i, t),
          (i.prototype.Xu = function (t, i) {
            var n = this.Ku;
            n.U = !1;
            var s = this.qe.ct();
            if (s.priceLineVisible && this.qe.U()) {
              var h = this.qe.wa(0 === s.priceLineSource);
              h.Ma ||
                ((n.U = !0),
                (n.p = h.Wt),
                (n.et = this.qe.Fa(h.et)),
                (n.wt = i),
                (n.Mt = t),
                (n.rt = s.priceLineWidth),
                (n.ut = s.priceLineStyle));
            }
          }),
          i
        );
      })(ki),
      qi = (function (t) {
        function i(i) {
          var n = t.call(this) || this;
          return (n.lt = i), n;
        }
        return (
          r(i, t),
          (i.prototype.Jt = function (t, i, n) {
            (t.U = !1), (i.U = !1);
            var s = this.lt;
            if (s.U()) {
              var h = s.ct(),
                r = h.lastValueVisible,
                e = "" !== s.Va(),
                u = 0 === h.seriesLastValueMode,
                a = s.wa(!1);
              if (!a.Ma) {
                r && ((t.Ft = this.Oa(a, r, u)), (t.U = 0 !== t.Ft.length)),
                  (e || u) &&
                    ((i.Ft = this.Pa(a, r, e, u)), (i.U = i.Ft.length > 0));
                var o = s.Fa(a.et),
                  l = O(o);
                (n.yt = l.yt),
                  (n.et = l.kt),
                  (n.Wt = a.Wt),
                  (i.Z = s.vt().J(a.Wt / s.$().Mt())),
                  (t.Z = o);
              }
            }
          }),
          (i.prototype.Pa = function (t, i, n, s) {
            var h = "",
              r = this.lt.Va();
            return (
              n && 0 !== r.length && (h += r + " "),
              i && s && (h += this.lt.$().cs() ? t.Wa : t.za),
              h.trim()
            );
          }),
          (i.prototype.Oa = function (t, i, n) {
            return i ? (n ? (this.lt.$().cs() ? t.za : t.Wa) : t.Ft) : "";
          }),
          i
        );
      })(q),
      Ui = (function () {
        function t(t, i) {
          (this.On = t), (this.Ra = i || null);
        }
        return (
          (t.prototype.Cs = function () {
            return this.On;
          }),
          (t.prototype.eh = function () {
            return this.Ra;
          }),
          (t.prototype.Mn = function () {
            return null === this.On
              ? null
              : { priceRange: this.On.Mn(), margins: this.Ra || void 0 };
          }),
          (t.bn = function (i) {
            return null === i ? null : new t(it.bn(i.priceRange), i.margins);
          }),
          t
        );
      })(),
      Hi = (function (t) {
        function i(i, n) {
          var s = t.call(this, i) || this;
          return (s.Ia = n), s;
        }
        return (
          r(i, t),
          (i.prototype.Xu = function (t, i) {
            var n = this.Ku;
            if (((n.U = !1), this.qe.U())) {
              var s = this.Ia.ja();
              if (null !== s) {
                var h = this.Ia.ct();
                (n.U = !0),
                  (n.p = s),
                  (n.et = h.color),
                  (n.wt = i),
                  (n.Mt = t),
                  (n.rt = h.lineWidth),
                  (n.ut = h.lineStyle);
              }
            }
          }),
          i
        );
      })(ki),
      Yi = (function (t) {
        function i(i, n) {
          var s = t.call(this) || this;
          return (s.ca = i), (s.Ia = n), s;
        }
        return (
          r(i, t),
          (i.prototype.Jt = function (t, i, n) {
            (t.U = !1), (i.U = !1);
            var s = this.Ia.ct(),
              h = s.axisLabelVisible,
              r = "" !== s.title,
              e = this.ca;
            if (h && e.U()) {
              var u = this.Ia.ja();
              if (null !== u) {
                r && ((i.Ft = s.title), (i.U = !0)),
                  (i.Z = e.vt().J(u / e.$().Mt())),
                  (t.Ft = e.$().Zs(s.price)),
                  (t.U = !0);
                var a = O(s.color);
                (n.yt = a.yt), (n.et = a.kt), (n.Wt = u);
              }
            }
          }),
          i
        );
      })(q),
      Ki = (function () {
        function t(t, i) {
          (this.ca = t),
            (this.ki = i),
            (this.qa = new Hi(t, this)),
            (this.Iu = new Yi(t, this)),
            (this.Ua = new pi(this.Iu, t, t.vt()));
        }
        return (
          (t.prototype.rs = function (t) {
            c(this.ki, t), this.O(), this.ca.vt().Or();
          }),
          (t.prototype.ct = function () {
            return this.ki;
          }),
          (t.prototype.Wi = function () {
            return [this.qa, this.Ua];
          }),
          (t.prototype.Ha = function () {
            return this.Iu;
          }),
          (t.prototype.O = function () {
            this.qa.O(), this.Iu.O();
          }),
          (t.prototype.ja = function () {
            var t = this.ca,
              i = t.$();
            if (t.vt().j().ti() || i.ti()) return null;
            var n = t.H();
            return null === n ? null : i.K(this.ki.price, n.X);
          }),
          t
        );
      })(),
      $i = (function (t) {
        function i(i) {
          var n = t.call(this) || this;
          return (n.hi = i), n;
        }
        return (
          r(i, t),
          (i.prototype.vt = function () {
            return this.hi;
          }),
          i
        );
      })($),
      Xi = { fu: "", Su: "", Nu: "" },
      Zi = (function () {
        function t(t) {
          this.ca = t;
        }
        return (
          (t.prototype.cu = function (t, i) {
            var n = this.ca.Ya(),
              s = this.ca.ct();
            switch (n) {
              case "Line":
                return this.Ka(s);
              case "Area":
                return this.$a(s);
              case "Baseline":
                return this.Xa(s, t, i);
              case "Bar":
                return this.Za(s, t, i);
              case "Candlestick":
                return this.Ja(s, t, i);
              case "Histogram":
                return this.Ga(s, t, i);
            }
            throw new Error("Unknown chart style");
          }),
          (t.prototype.Za = function (t, i, n) {
            var s = e({}, Xi),
              h = t.upColor,
              r = t.downColor,
              u = h,
              a = r,
              o = l(this.Qa(i, n)),
              c = f(o.X[0]) <= f(o.X[3]);
            return (s.fu = c ? h : r), (s.Su = c ? u : a), s;
          }),
          (t.prototype.Ja = function (t, i, n) {
            var s = e({}, Xi),
              h = t.upColor,
              r = t.downColor,
              u = t.borderUpColor,
              a = t.borderDownColor,
              o = t.wickUpColor,
              c = t.wickDownColor,
              v = l(this.Qa(i, n)),
              _ = f(v.X[0]) <= f(v.X[3]);
            return (s.fu = _ ? h : r), (s.Su = _ ? u : a), (s.Nu = _ ? o : c), s;
          }),
          (t.prototype.$a = function (t) {
            return e(e({}, Xi), { fu: t.lineColor });
          }),
          (t.prototype.Xa = function (t, i, n) {
            var s = l(this.Qa(i, n)).X[3] >= t.baseValue.price;
            return e(e({}, Xi), { fu: s ? t.topLineColor : t.bottomLineColor });
          }),
          (t.prototype.Ka = function (t) {
            return e(e({}, Xi), { fu: t.color });
          }),
          (t.prototype.Ga = function (t, i, n) {
            var s = e({}, Xi),
              h = l(this.Qa(i, n));
            return (s.fu = void 0 !== h.et ? h.et : t.color), s;
          }),
          (t.prototype.Qa = function (t, i) {
            return void 0 !== i ? i.X : this.ca.Hi().io(t);
          }),
          t
        );
      })(),
      Ji = 30,
      Gi = (function () {
        function t() {
          (this.no = []), (this.so = new Map()), (this.ho = new Map());
        }
        return (
          (t.prototype.ro = function () {
            return this.Je() > 0 ? this.no[this.no.length - 1] : null;
          }),
          (t.prototype.eo = function () {
            return this.Je() > 0 ? this.uo(0) : null;
          }),
          (t.prototype.Ui = function () {
            return this.Je() > 0 ? this.uo(this.no.length - 1) : null;
          }),
          (t.prototype.Je = function () {
            return this.no.length;
          }),
          (t.prototype.ti = function () {
            return 0 === this.Je();
          }),
          (t.prototype.Fh = function (t) {
            return null !== this.ao(t, 0);
          }),
          (t.prototype.io = function (t) {
            return this.oo(t);
          }),
          (t.prototype.oo = function (t, i) {
            void 0 === i && (i = 0);
            var n = this.ao(t, i);
            return null === n ? null : e(e({}, this.lo(n)), { zh: this.uo(n) });
          }),
          (t.prototype.iu = function () {
            return this.no;
          }),
          (t.prototype.fo = function (t, i, n) {
            if (this.ti()) return null;
            for (var s = null, h = 0, r = n; h < r.length; h++) {
              var e = r[h];
              s = Qi(s, this.co(t, i, e));
            }
            return s;
          }),
          (t.prototype._ = function (t) {
            this.ho.clear(), this.so.clear(), (this.no = t);
          }),
          (t.prototype.uo = function (t) {
            return this.no[t].zh;
          }),
          (t.prototype.lo = function (t) {
            return this.no[t];
          }),
          (t.prototype.ao = function (t, i) {
            var n = this.vo(t);
            if (null === n && 0 !== i)
              switch (i) {
                case -1:
                  return this._o(t);
                case 1:
                  return this.do(t);
                default:
                  throw new TypeError("Unknown search mode");
              }
            return n;
          }),
          (t.prototype._o = function (t) {
            var i = this.wo(t);
            return (
              i > 0 && (i -= 1), i !== this.no.length && this.uo(i) < t ? i : null
            );
          }),
          (t.prototype.do = function (t) {
            var i = this.Mo(t);
            return i !== this.no.length && t < this.uo(i) ? i : null;
          }),
          (t.prototype.vo = function (t) {
            var i = this.wo(t);
            return i === this.no.length || t < this.no[i].zh ? null : i;
          }),
          (t.prototype.wo = function (t) {
            return At(this.no, t, function (t, i) {
              return t.zh < i;
            });
          }),
          (t.prototype.Mo = function (t) {
            return Bt(this.no, t, function (t, i) {
              return i.zh > t;
            });
          }),
          (t.prototype.bo = function (t, i, n) {
            for (var s = null, h = t; h < i; h++) {
              var r = this.no[h].X[n];
              Number.isNaN(r) ||
                (null === s
                  ? (s = { mo: r, po: r })
                  : (r < s.mo && (s.mo = r), r > s.po && (s.po = r)));
            }
            return s;
          }),
          (t.prototype.co = function (t, i, n) {
            if (this.ti()) return null;
            var s = null,
              h = l(this.eo()),
              r = l(this.Ui()),
              e = Math.max(t, h),
              u = Math.min(i, r),
              a = Math.ceil(e / Ji) * Ji,
              o = Math.max(a, Math.floor(u / Ji) * Ji),
              f = this.wo(e),
              c = this.Mo(Math.min(u, a, i));
            s = Qi(s, this.bo(f, c, n));
            var v = this.so.get(n);
            void 0 === v && ((v = new Map()), this.so.set(n, v));
            for (var _ = Math.max(a + 1, e); _ < o; _ += Ji) {
              var d = Math.floor(_ / Ji),
                w = v.get(d);
              if (void 0 === w) {
                var M = this.wo(d * Ji),
                  b = this.Mo((d + 1) * Ji - 1);
                (w = this.bo(M, b, n)), v.set(d, w);
              }
              s = Qi(s, w);
            }
            (f = this.wo(o)), (c = this.Mo(u));
            return (s = Qi(s, this.bo(f, c, n)));
          }),
          t
        );
      })();
    function Qi(t, i) {
      return null === t
        ? i
        : null === i
        ? t
        : { mo: Math.min(t.mo, i.mo), po: Math.max(t.po, i.po) };
    }
    var tn = (function (t) {
        function i(i, n, s) {
          var h = t.call(this, i) || this;
          (h.tt = new Gi()),
            (h.qa = new ji(h)),
            (h.yo = []),
            (h.ko = new Ci(h)),
            (h.Co = null),
            (h.xo = null),
            (h.No = []),
            (h.So = []),
            (h.Do = null),
            (h.ki = n),
            (h.To = s);
          var r = new qi(h);
          return (
            (h.Mi = [r]),
            (h.Ua = new pi(r, h, i)),
            ("Area" !== s && "Line" !== s && "Baseline" !== s) ||
              (h.Co = new Ti(h)),
            h.Ao(),
            h.Bo(),
            h
          );
        }
        return (
          r(i, t),
          (i.prototype.en = function () {
            null !== this.Do && clearTimeout(this.Do);
          }),
          (i.prototype.Fa = function (t) {
            return this.ki.priceLineColor || t;
          }),
          (i.prototype.wa = function (t) {
            var i = { Ma: !0 },
              n = this.$();
            if (this.vt().j().ti() || n.ti() || this.tt.ti()) return i;
            var s,
              h,
              r = this.vt().j().mr(),
              e = this.H();
            if (null === r || null === e) return i;
            if (t) {
              var u = this.tt.ro();
              if (null === u) return i;
              (s = u), (h = u.zh);
            } else {
              var a = this.tt.oo(r.rh(), -1);
              if (null === a) return i;
              if (null === (s = this.tt.io(a.zh))) return i;
              h = a.zh;
            }
            var o = s.X[3],
              l = this.tu().cu(h, { X: s }),
              f = n.K(o, e.X);
            return {
              Ma: !1,
              D: o,
              Ft: n.ii(o, e.X),
              Wa: n.Zs(o),
              za: n.Gs(o, e.X),
              et: l.fu,
              Wt: f,
              zh: h,
            };
          }),
          (i.prototype.tu = function () {
            return null !== this.xo || (this.xo = new Zi(this)), this.xo;
          }),
          (i.prototype.ct = function () {
            return this.ki;
          }),
          (i.prototype.rs = function (t) {
            var i = t.priceScaleId;
            void 0 !== i && i !== this.ki.priceScaleId && this.vt().Lo(this, i),
              c(this.ki, t),
              null !== this.ui &&
                void 0 !== t.scaleMargins &&
                this.ui.rs({ scaleMargins: t.scaleMargins }),
              void 0 !== t.priceFormat && this.Ao(),
              this.vt().Eo(this),
              this.vt().Fo(),
              this.Ti.O("options");
          }),
          (i.prototype._ = function (t) {
            var i;
            this.tt._(t),
              this.Vo(),
              this.Ti.O("data"),
              this.Ci.O("data"),
              null === (i = this.Co) || void 0 === i || i.O("data");
            var n = this.vt().qu(this);
            this.vt().Oo(n), this.vt().Eo(this), this.vt().Fo(), this.vt().Or();
          }),
          (i.prototype.Po = function (t) {
            (this.No = t.map(function (t) {
              return e({}, t);
            })),
              this.Vo();
            var i = this.vt().qu(this);
            this.Ci.O("data"),
              this.vt().Oo(i),
              this.vt().Eo(this),
              this.vt().Fo(),
              this.vt().Or();
          }),
          (i.prototype.La = function () {
            return this.So;
          }),
          (i.prototype.Wo = function (t) {
            var i = new Ki(this, t);
            return this.yo.push(i), this.vt().Eo(this), i;
          }),
          (i.prototype.zo = function (t) {
            var i = this.yo.indexOf(t);
            -1 !== i && this.yo.splice(i, 1), this.vt().Eo(this);
          }),
          (i.prototype.Ya = function () {
            return this.To;
          }),
          (i.prototype.H = function () {
            var t = this.Ro();
            return null === t ? null : { X: t.X[3], Rs: t.S };
          }),
          (i.prototype.Ro = function () {
            var t = this.vt().j().mr();
            if (null === t) return null;
            var i = t.hh();
            return this.tt.oo(i, 1);
          }),
          (i.prototype.Hi = function () {
            return this.tt;
          }),
          (i.prototype.Ea = function (t) {
            var i = this.tt.io(t);
            return null === i
              ? null
              : "Bar" === this.To || "Candlestick" === this.To
              ? { open: i.X[0], high: i.X[1], low: i.X[2], close: i.X[3] }
              : i.X[3];
          }),
          (i.prototype.Io = function (t) {
            var i = this,
              n = this.Co;
            return null !== n && n.U()
              ? (null === this.Do &&
                  n._a() &&
                  (this.Do = setTimeout(function () {
                    (i.Do = null), i.vt().jo();
                  }, 0)),
                n.va(),
                [n])
              : [];
          }),
          (i.prototype.Wi = function () {
            var t = [];
            this.qo() || t.push(this.ko);
            for (var i = 0, n = this.yo; i < n.length; i++) {
              var s = n[i];
              t.push.apply(t, s.Wi());
            }
            return t.push(this.Ti, this.qa, this.Ua, this.Ci), t;
          }),
          (i.prototype.zi = function (t, i) {
            if (i !== this.ui && !this.qo()) return [];
            for (
              var n = u([], this.Mi, !0), s = 0, h = this.yo;
              s < h.length;
              s++
            ) {
              var r = h[s];
              n.push(r.Ha());
            }
            return n;
          }),
          (i.prototype.sh = function (t, i) {
            var n = this;
            if (void 0 !== this.ki.autoscaleInfoProvider) {
              var s = this.ki.autoscaleInfoProvider(function () {
                var s = n.Uo(t, i);
                return null === s ? null : s.Mn();
              });
              return Ui.bn(s);
            }
            return this.Uo(t, i);
          }),
          (i.prototype.ih = function () {
            return this.ki.priceFormat.minMove;
          }),
          (i.prototype.$s = function () {
            return this.Zn;
          }),
          (i.prototype.Ii = function () {
            var t;
            this.Ti.O(), this.Ci.O();
            for (var i = 0, n = this.Mi; i < n.length; i++) {
              n[i].O();
            }
            for (var s = 0, h = this.yo; s < h.length; s++) {
              h[s].O();
            }
            this.qa.O(),
              this.ko.O(),
              null === (t = this.Co) || void 0 === t || t.O();
          }),
          (i.prototype.$ = function () {
            return l(t.prototype.$.call(this));
          }),
          (i.prototype.q = function (t) {
            if (
              !(
                ("Line" === this.To ||
                  "Area" === this.To ||
                  "Baseline" === this.To) &&
                this.ki.crosshairMarkerVisible
              )
            )
              return null;
            var i = this.tt.io(t);
            return null === i
              ? null
              : { D: i.X[3], C: this.Ho(), Z: this.Yo(), Y: this.Ko(t) };
          }),
          (i.prototype.Va = function () {
            return this.ki.title;
          }),
          (i.prototype.U = function () {
            return this.ki.visible;
          }),
          (i.prototype.qo = function () {
            return !Ht(this.$().hs());
          }),
          (i.prototype.Uo = function (t, i) {
            if (!_(t) || !_(i) || this.tt.ti()) return null;
            var n =
                "Line" === this.To ||
                "Area" === this.To ||
                "Baseline" === this.To ||
                "Histogram" === this.To
                  ? [3]
                  : [2, 1],
              s = this.tt.fo(t, i, n),
              h = null !== s ? new it(s.mo, s.po) : null;
            if ("Histogram" === this.Ya()) {
              var r = this.ki.base,
                e = new it(r, r);
              h = null !== h ? h._n(e) : e;
            }
            return new Ui(h, this.Ci.Ba());
          }),
          (i.prototype.Ho = function () {
            switch (this.To) {
              case "Line":
              case "Area":
              case "Baseline":
                return this.ki.crosshairMarkerRadius;
            }
            return 0;
          }),
          (i.prototype.Yo = function () {
            switch (this.To) {
              case "Line":
              case "Area":
              case "Baseline":
                var t = this.ki.crosshairMarkerBorderColor;
                if (0 !== t.length) return t;
            }
            return null;
          }),
          (i.prototype.Ko = function (t) {
            switch (this.To) {
              case "Line":
              case "Area":
              case "Baseline":
                var i = this.ki.crosshairMarkerBackgroundColor;
                if (0 !== i.length) return i;
            }
            return this.tu().cu(t).fu;
          }),
          (i.prototype.Ao = function () {
            switch (this.ki.priceFormat.type) {
              case "custom":
                this.Zn = { format: this.ki.priceFormat.formatter };
                break;
              case "volume":
                this.Zn = new Kt(this.ki.priceFormat.precision);
                break;
              case "percent":
                this.Zn = new Q(this.ki.priceFormat.precision);
                break;
              default:
                var t = Math.pow(10, this.ki.priceFormat.precision);
                this.Zn = new G(t, this.ki.priceFormat.minMove * t);
            }
            null !== this.ui && this.ui.es();
          }),
          (i.prototype.Vo = function () {
            var t = this,
              i = this.vt().j();
            if (i.ti() || 0 === this.tt.Je()) this.So = [];
            else {
              var n = l(this.tt.eo());
              this.So = this.No.map(function (s, h) {
                var r = l(i.br(s.time, !0)),
                  e = r < n ? 1 : -1;
                return {
                  time: l(t.tt.oo(r, e)).zh,
                  position: s.position,
                  shape: s.shape,
                  color: s.color,
                  id: s.id,
                  ya: h,
                  text: s.text,
                  size: s.size,
                };
              });
            }
          }),
          (i.prototype.Bo = function () {
            switch (((this.Ci = new Ii(this, this.vt())), this.To)) {
              case "Bar":
                this.Ti = new ui(this, this.vt());
                break;
              case "Candlestick":
                this.Ti = new ci(this, this.vt());
                break;
              case "Line":
                this.Ti = new Mi(this, this.vt());
                break;
              case "Area":
                this.Ti = new hi(this, this.vt());
                break;
              case "Baseline":
                this.Ti = new li(this, this.vt());
                break;
              case "Histogram":
                this.Ti = new wi(this, this.vt());
                break;
              default:
                throw Error("Unknown chart style assigned: " + this.To);
            }
          }),
          i
        );
      })($i),
      nn = (function () {
        function t(t) {
          this.ki = t;
        }
        return (
          (t.prototype.$o = function (t, i, n) {
            var s = t;
            if (0 === this.ki.mode) return s;
            var h = n.Ni(),
              r = h.H();
            if (null === r) return s;
            var e = h.K(t, r),
              u = n
                .Vs()
                .filter(function (t) {
                  return t instanceof tn;
                })
                .reduce(function (t, s) {
                  if (n.Uu(s) || !s.U()) return t;
                  var h = s.$(),
                    r = s.Hi();
                  if (h.ti() || !r.Fh(i)) return t;
                  var e = r.io(i);
                  if (null === e) return t;
                  var u = f(s.H());
                  return t.concat([h.K(e.X[3], u.X)]);
                }, []);
            if (0 === u.length) return s;
            u.sort(function (t, i) {
              return Math.abs(t - e) - Math.abs(i - e);
            });
            var a = u[0];
            return (s = h.Si(a, r));
          }),
          t
        );
      })(),
      sn = (function () {
        function t() {
          this.tt = null;
        }
        return (
          (t.prototype._ = function (t) {
            this.tt = t;
          }),
          (t.prototype.h = function (t, i, s, h) {
            var r = this;
            if (null !== this.tt) {
              var e = Math.max(1, Math.floor(i));
              t.lineWidth = e;
              var u = Math.ceil(this.tt.ht * i),
                a = Math.ceil(this.tt.st * i);
              !(function (t, i) {
                t.save(),
                  t.lineWidth % 2 && t.translate(0.5, 0.5),
                  i(),
                  t.restore();
              })(t, function () {
                var s = l(r.tt);
                if (s.Xo) {
                  (t.strokeStyle = s.Zo), n(t, s.Jo), t.beginPath();
                  for (var h = 0, o = s.Go; h < o.length; h++) {
                    var f = o[h],
                      c = Math.round(f.Tn * i);
                    t.moveTo(c, -e), t.lineTo(c, u + e);
                  }
                  t.stroke();
                }
                if (s.Qo) {
                  (t.strokeStyle = s.tl), n(t, s.il), t.beginPath();
                  for (var v = 0, _ = s.nl; v < _.length; v++) {
                    var d = _[v],
                      w = Math.round(d.Tn * i);
                    t.moveTo(-e, w), t.lineTo(a + e, w);
                  }
                  t.stroke();
                }
              });
            }
          }),
          t
        );
      })(),
      hn = (function () {
        function t(t) {
          (this.ot = new sn()), (this.L = !0), (this.vi = t);
        }
        return (
          (t.prototype.O = function () {
            this.L = !0;
          }),
          (t.prototype.W = function (t, i) {
            if (this.L) {
              var n = this.vi.vt().ct().grid,
                s = {
                  ht: t,
                  st: i,
                  Qo: n.horzLines.visible,
                  Xo: n.vertLines.visible,
                  tl: n.horzLines.color,
                  Zo: n.vertLines.color,
                  il: n.horzLines.style,
                  Jo: n.vertLines.style,
                  nl: this.vi.Ni().En(),
                  Go: this.vi.vt().j().En() || [],
                };
              this.ot._(s), (this.L = !1);
            }
            return this.ot;
          }),
          t
        );
      })(),
      rn = (function () {
        function t(t) {
          this.Ti = new hn(t);
        }
        return (
          (t.prototype.sl = function () {
            return this.Ti;
          }),
          t
        );
      })(),
      en = (function () {
        function t(t, i) {
          (this.Hn = []),
            (this.hl = new Map()),
            (this.Fn = 0),
            (this.$h = 0),
            (this.rl = 1e3),
            (this.Yn = null),
            (this.el = new tt()),
            (this.ul = t),
            (this.hi = i),
            (this.al = new rn(this));
          var n = i.ct();
          (this.ol = this.ll("left", n.leftPriceScale)),
            (this.fl = this.ll("right", n.rightPriceScale)),
            this.ol.bs().Ji(this.cl.bind(this, this.ol), this),
            this.fl.bs().Ji(this.cl.bind(this, this.ol), this),
            this.vl(n);
        }
        return (
          (t.prototype.vl = function (t) {
            if (
              (t.leftPriceScale && this.ol.rs(t.leftPriceScale),
              t.rightPriceScale && this.fl.rs(t.rightPriceScale),
              t.localization && (this.ol.es(), this.fl.es()),
              t.overlayPriceScales)
            )
              for (
                var i = 0, n = Array.from(this.hl.values());
                i < n.length;
                i++
              ) {
                var s = l(n[i][0].$());
                s.rs(t.overlayPriceScales), t.localization && s.es();
              }
          }),
          (t.prototype._l = function (t) {
            switch (t) {
              case "left":
                return this.ol;
              case "right":
                return this.fl;
            }
            return this.hl.has(t) ? o(this.hl.get(t))[0].$() : null;
          }),
          (t.prototype.en = function () {
            this.vt().dl().sn(this),
              this.ol.bs().sn(this),
              this.fl.bs().sn(this),
              this.Hn.forEach(function (t) {
                t.en && t.en();
              }),
              this.el.hn();
          }),
          (t.prototype.wl = function () {
            return this.rl;
          }),
          (t.prototype.Ml = function (t) {
            this.rl = t;
          }),
          (t.prototype.vt = function () {
            return this.hi;
          }),
          (t.prototype.wt = function () {
            return this.$h;
          }),
          (t.prototype.Mt = function () {
            return this.Fn;
          }),
          (t.prototype.Dr = function (t) {
            (this.$h = t), this.bl();
          }),
          (t.prototype.gs = function (t) {
            var i = this;
            (this.Fn = t),
              this.ol.gs(t),
              this.fl.gs(t),
              this.Hn.forEach(function (n) {
                if (i.Uu(n)) {
                  var s = n.$();
                  null !== s && s.gs(t);
                }
              }),
              this.bl();
          }),
          (t.prototype.Vs = function () {
            return this.Hn;
          }),
          (t.prototype.Uu = function (t) {
            var i = t.$();
            return null === i || (this.ol !== i && this.fl !== i);
          }),
          (t.prototype.Ps = function (t, i, n) {
            var s = void 0 !== n ? n : this.gl().ml + 1;
            this.pl(t, i, s);
          }),
          (t.prototype.zs = function (t) {
            var i = this.Hn.indexOf(t);
            a(-1 !== i, "removeDataSource: invalid data source"),
              this.Hn.splice(i, 1);
            var n = l(t.$()).hs();
            if (this.hl.has(n)) {
              var s = o(this.hl.get(n)),
                h = s.indexOf(t);
              -1 !== h && (s.splice(h, 1), 0 === s.length && this.hl.delete(n));
            }
            var r = t.$();
            r && r.Vs().indexOf(t) >= 0 && r.zs(t),
              null !== r && (r.Ws(), this.yl(r)),
              (this.Yn = null);
          }),
          (t.prototype.Hu = function (t) {
            return t === this.ol ? "left" : t === this.fl ? "right" : "overlay";
          }),
          (t.prototype.kl = function () {
            return this.ol;
          }),
          (t.prototype.Cl = function () {
            return this.fl;
          }),
          (t.prototype.xl = function (t, i) {
            t.js(i);
          }),
          (t.prototype.Nl = function (t, i) {
            t.qs(i), this.bl();
          }),
          (t.prototype.Sl = function (t) {
            t.Us();
          }),
          (t.prototype.Dl = function (t, i) {
            t.Hs(i);
          }),
          (t.prototype.Tl = function (t, i) {
            t.Ys(i), this.bl();
          }),
          (t.prototype.Al = function (t) {
            t.Ks();
          }),
          (t.prototype.bl = function () {
            this.Hn.forEach(function (t) {
              t.Ii();
            });
          }),
          (t.prototype.Ni = function () {
            var t = null;
            return (
              this.hi.ct().rightPriceScale.visible && 0 !== this.fl.Vs().length
                ? (t = this.fl)
                : this.hi.ct().leftPriceScale.visible && 0 !== this.ol.Vs().length
                ? (t = this.ol)
                : 0 !== this.Hn.length && (t = this.Hn[0].$()),
              null === t && (t = this.fl),
              t
            );
          }),
          (t.prototype.yl = function (t) {
            null !== t && t.fs() && this.Bl(t);
          }),
          (t.prototype.Ll = function (t) {
            var i = this.ul.mr();
            t.us({ _s: !0 }), null !== i && t.th(i), this.bl();
          }),
          (t.prototype.El = function () {
            this.Bl(this.ol), this.Bl(this.fl);
          }),
          (t.prototype.Fl = function () {
            var t = this;
            this.yl(this.ol),
              this.yl(this.fl),
              this.Hn.forEach(function (i) {
                t.Uu(i) && t.yl(i.$());
              }),
              this.bl(),
              this.hi.Or();
          }),
          (t.prototype.Os = function () {
            return null === this.Yn && (this.Yn = Mt(this.Hn)), this.Yn;
          }),
          (t.prototype.Vl = function () {
            return this.el;
          }),
          (t.prototype.Ol = function () {
            return this.al;
          }),
          (t.prototype.Bl = function (t) {
            var i = t.Qs();
            if (i && i.length > 0 && !this.ul.ti()) {
              var n = this.ul.mr();
              null !== n && t.th(n);
            }
            t.Ii();
          }),
          (t.prototype.gl = function () {
            var t = this.Os();
            if (0 === t.length) return { Pl: 0, ml: 0 };
            for (var i = 0, n = 0, s = 0; s < t.length; s++) {
              var h = t[s].oi();
              null !== h && (h < i && (i = h), h > n && (n = h));
            }
            return { Pl: i, ml: n };
          }),
          (t.prototype.pl = function (t, i, n) {
            var s = this._l(i);
            if (
              (null === s && (s = this.ll(i, this.hi.ct().overlayPriceScales)),
              this.Hn.push(t),
              !Ht(i))
            ) {
              var h = this.hl.get(i) || [];
              h.push(t), this.hl.set(i, h);
            }
            s.Ps(t), t.fi(s), t.li(n), this.yl(s), (this.Yn = null);
          }),
          (t.prototype.cl = function (t, i, n) {
            i.os !== n.os && this.Bl(t);
          }),
          (t.prototype.ll = function (t, i) {
            var n = e({ visible: !0, autoScale: !0 }, M(i)),
              s = new yt(t, n, this.hi.ct().layout, this.hi.ct().localization);
            return s.gs(this.Mt()), s;
          }),
          t
        );
      })(),
      un = (function (t) {
        function i(i) {
          var n = t.call(this) || this;
          return (n.Wl = new Map()), (n.tt = i), n;
        }
        return (
          r(i, t),
          (i.prototype.u = function (t) {}),
          (i.prototype.l = function (t) {
            if (this.tt.U) {
              t.save();
              for (var i = 0, n = 0, s = this.tt.zl; n < s.length; n++) {
                if (0 !== (a = s[n]).Ft.length) {
                  t.font = a.xt;
                  var h = this.Rl(t, a.Ft);
                  h > this.tt.wt ? (a.Ur = this.tt.wt / h) : (a.Ur = 1),
                    (i += a.Il * a.Ur);
                }
              }
              var r = 0;
              switch (this.tt.jl) {
                case "top":
                  r = 0;
                  break;
                case "center":
                  r = Math.max((this.tt.Mt - i) / 2, 0);
                  break;
                case "bottom":
                  r = Math.max(this.tt.Mt - i, 0);
              }
              t.fillStyle = this.tt.et;
              for (var e = 0, u = this.tt.zl; e < u.length; e++) {
                var a = u[e];
                t.save();
                var o = 0;
                switch (this.tt.ql) {
                  case "left":
                    (t.textAlign = "left"), (o = a.Il / 2);
                    break;
                  case "center":
                    (t.textAlign = "center"), (o = this.tt.wt / 2);
                    break;
                  case "right":
                    (t.textAlign = "right"), (o = this.tt.wt - 1 - a.Il / 2);
                }
                t.translate(o, r),
                  (t.textBaseline = "top"),
                  (t.font = a.xt),
                  t.scale(a.Ur, a.Ur),
                  t.fillText(a.Ft, 0, a.Ul),
                  t.restore(),
                  (r += a.Il * a.Ur);
              }
              t.restore();
            }
          }),
          (i.prototype.Rl = function (t, i) {
            var n = this.Hl(t.font),
              s = n.get(i);
            return void 0 === s && ((s = t.measureText(i).width), n.set(i, s)), s;
          }),
          (i.prototype.Hl = function (t) {
            var i = this.Wl.get(t);
            return void 0 === i && ((i = new Map()), this.Wl.set(t, i)), i;
          }),
          i
        );
      })(p),
      an = (function () {
        function t(t) {
          (this.L = !0),
            (this.at = {
              U: !1,
              et: "",
              Mt: 0,
              wt: 0,
              zl: [],
              jl: "center",
              ql: "center",
            }),
            (this.ot = new un(this.at)),
            (this.lt = t);
        }
        return (
          (t.prototype.O = function () {
            this.L = !0;
          }),
          (t.prototype.W = function (t, i) {
            return this.L && (this.R(t, i), (this.L = !1)), this.ot;
          }),
          (t.prototype.R = function (t, i) {
            var n = this.lt.ct(),
              s = this.at;
            (s.U = n.visible),
              s.U &&
                ((s.et = n.color),
                (s.wt = i),
                (s.Mt = t),
                (s.ql = n.horzAlign),
                (s.jl = n.vertAlign),
                (s.zl = [
                  {
                    Ft: n.text,
                    xt: qt(n.fontSize, n.fontFamily, n.fontStyle),
                    Il: 1.2 * n.fontSize,
                    Ul: 0,
                    Ur: 0,
                  },
                ]));
          }),
          t
        );
      })(),
      on = (function (t) {
        function i(i, n) {
          var s = t.call(this) || this;
          return (s.ki = n), (s.Ti = new an(s)), s;
        }
        return (
          r(i, t),
          (i.prototype.zi = function () {
            return [];
          }),
          (i.prototype.Wi = function () {
            return [this.Ti];
          }),
          (i.prototype.ct = function () {
            return this.ki;
          }),
          (i.prototype.Ii = function () {
            this.Ti.O();
          }),
          i
        );
      })($),
      ln = (function () {
        function t(t, i) {
          (this.Yl = []),
            (this.Kl = []),
            (this.$h = 0),
            (this.$l = null),
            (this.Xl = null),
            (this.Zl = new tt()),
            (this.Jl = new tt()),
            (this.Gl = null),
            (this.Ql = t),
            (this.ki = i),
            (this.tf = new Ut(this)),
            (this.ul = new zt(this, i.timeScale, this.ki.localization)),
            (this.V = new X(this, i.crosshair)),
            (this.if = new nn(i.crosshair)),
            (this.nf = new on(this, i.watermark)),
            this.sf(),
            this.Yl[0].Ml(2e3),
            (this.hf = this.rf(0)),
            (this.ef = this.rf(1));
        }
        return (
          (t.prototype.uf = function () {
            this.af(new Yt(3));
          }),
          (t.prototype.Or = function () {
            this.af(new Yt(2));
          }),
          (t.prototype.jo = function () {
            this.af(new Yt(1));
          }),
          (t.prototype.Eo = function (t) {
            var i = this.lf(t);
            this.af(i);
          }),
          (t.prototype.ff = function () {
            return this.Xl;
          }),
          (t.prototype.cf = function (t) {
            var i = this.Xl;
            (this.Xl = t),
              null !== i && this.Eo(i.vf),
              null !== t && this.Eo(t.vf);
          }),
          (t.prototype.ct = function () {
            return this.ki;
          }),
          (t.prototype.rs = function (t) {
            c(this.ki, t),
              this.Yl.forEach(function (i) {
                return i.vl(t);
              }),
              void 0 !== t.timeScale && this.ul.rs(t.timeScale),
              void 0 !== t.localization && this.ul.cr(t.localization),
              (t.leftPriceScale || t.rightPriceScale) && this.Zl.hn(),
              (this.hf = this.rf(0)),
              (this.ef = this.rf(1)),
              this.uf();
          }),
          (t.prototype._f = function (t, i) {
            var n = this.df(t);
            null !== n && (n.$.rs(i), this.Zl.hn());
          }),
          (t.prototype.df = function (t) {
            for (var i = 0, n = this.Yl; i < n.length; i++) {
              var s = n[i],
                h = s._l(t);
              if (null !== h) return { ft: s, $: h };
            }
            return null;
          }),
          (t.prototype.j = function () {
            return this.ul;
          }),
          (t.prototype.wf = function () {
            return this.Yl;
          }),
          (t.prototype.Mf = function () {
            return this.nf;
          }),
          (t.prototype.bf = function () {
            return this.V;
          }),
          (t.prototype.mf = function () {
            return this.Jl;
          }),
          (t.prototype.gf = function (t, i) {
            t.gs(i), this.Vr();
          }),
          (t.prototype.Dr = function (t) {
            (this.$h = t),
              this.ul.Dr(this.$h),
              this.Yl.forEach(function (i) {
                return i.Dr(t);
              }),
              this.Vr();
          }),
          (t.prototype.sf = function (t) {
            var i = new en(this.ul, this);
            void 0 !== t ? this.Yl.splice(t, 0, i) : this.Yl.push(i);
            var n = void 0 === t ? this.Yl.length - 1 : t,
              s = new Yt(3);
            return s.be(n, { me: 0, _s: !0 }), this.af(s), i;
          }),
          (t.prototype.xl = function (t, i, n) {
            t.xl(i, n);
          }),
          (t.prototype.Nl = function (t, i, n) {
            t.Nl(i, n), this.Fo(), this.af(this.pf(t, 2));
          }),
          (t.prototype.Sl = function (t, i) {
            t.Sl(i), this.af(this.pf(t, 2));
          }),
          (t.prototype.Dl = function (t, i, n) {
            i.fs() || t.Dl(i, n);
          }),
          (t.prototype.Tl = function (t, i, n) {
            i.fs() || (t.Tl(i, n), this.Fo(), this.af(this.pf(t, 2)));
          }),
          (t.prototype.Al = function (t, i) {
            i.fs() || (t.Al(i), this.af(this.pf(t, 2)));
          }),
          (t.prototype.Ll = function (t, i) {
            t.Ll(i), this.af(this.pf(t, 2));
          }),
          (t.prototype.yf = function (t) {
            this.ul.js(t);
          }),
          (t.prototype.kf = function (t, i) {
            var n = this.j();
            if (!n.ti() && 0 !== i) {
              var s = n.wt();
              (t = Math.max(1, Math.min(t, s))), n.Ur(t, i), this.Vr();
            }
          }),
          (t.prototype.Cf = function (t) {
            this.xf(0), this.Nf(t), this.Sf();
          }),
          (t.prototype.Df = function (t) {
            this.ul.qs(t), this.Vr();
          }),
          (t.prototype.Tf = function () {
            this.ul.Us(), this.Or();
          }),
          (t.prototype.xf = function (t) {
            (this.$l = t), this.ul.Hs(t);
          }),
          (t.prototype.Nf = function (t) {
            var i = !1;
            return (
              null !== this.$l &&
                Math.abs(t - this.$l) > 20 &&
                ((this.$l = null), (i = !0)),
              this.ul.Ys(t),
              this.Vr(),
              i
            );
          }),
          (t.prototype.Sf = function () {
            this.ul.Ks(), this.Or(), (this.$l = null);
          }),
          (t.prototype.P = function () {
            return this.Kl;
          }),
          (t.prototype.Af = function (t, i, n) {
            this.V.Ai(t, i);
            var s = NaN,
              h = this.ul.Er(t),
              r = this.ul.mr();
            null !== r && (h = Math.min(Math.max(r.hh(), h), r.rh()));
            var e = n.Ni(),
              u = e.H();
            null !== u && (s = e.Si(i, u)),
              (s = this.if.$o(s, h, n)),
              this.V.Fi(h, s, n),
              this.jo(),
              this.Jl.hn(this.V.I(), { x: t, y: i });
          }),
          (t.prototype.Bf = function () {
            this.bf().Oi(), this.jo(), this.Jl.hn(null, null);
          }),
          (t.prototype.Fo = function () {
            var t = this.V.ft();
            if (null !== t) {
              var i = this.V.Li(),
                n = this.V.Ei();
              this.Af(i, n, t);
            }
            this.V.Ii();
          }),
          (t.prototype.Lf = function (t, i, n) {
            var s = this.ul.ri(0);
            void 0 !== i && void 0 !== n && this.ul.O(i, n);
            var h = this.ul.ri(0),
              r = this.ul.Br(),
              e = this.ul.mr();
            if (null !== e && null !== s && null !== h) {
              var u = e.Fh(r),
                a = s.Dh > h.Dh,
                o = null !== t && t > r && !a,
                l = u && this.ul.ct().shiftVisibleRangeOnNewBar;
              if (o && !l) {
                var f = t - r;
                this.ul.Mr(this.ul.zr() - f);
              }
            }
            this.ul.qr(t);
          }),
          (t.prototype.Oo = function (t) {
            null !== t && t.Fl();
          }),
          (t.prototype.qu = function (t) {
            var i = this.Yl.find(function (i) {
              return i.Os().includes(t);
            });
            return void 0 === i ? null : i;
          }),
          (t.prototype.Vr = function () {
            this.nf.Ii(),
              this.Yl.forEach(function (t) {
                return t.Fl();
              }),
              this.Fo();
          }),
          (t.prototype.en = function () {
            this.Yl.forEach(function (t) {
              return t.en();
            }),
              (this.Yl.length = 0),
              (this.ki.localization.priceFormatter = void 0),
              (this.ki.localization.timeFormatter = void 0);
          }),
          (t.prototype.Ef = function () {
            return this.tf;
          }),
          (t.prototype.Yu = function () {
            return this.tf.ct();
          }),
          (t.prototype.dl = function () {
            return this.Zl;
          }),
          (t.prototype.Ff = function (t, i) {
            var n = this.Yl[0],
              s = this.Vf(i, t, n);
            return (
              this.Kl.push(s), 1 === this.Kl.length ? this.uf() : this.Or(), s
            );
          }),
          (t.prototype.Of = function (t) {
            var i = this.qu(t),
              n = this.Kl.indexOf(t);
            a(-1 !== n, "Series not found"),
              this.Kl.splice(n, 1),
              l(i).zs(t),
              t.en && t.en();
          }),
          (t.prototype.Lo = function (t, i) {
            var n = l(this.qu(t));
            n.zs(t);
            var s = this.df(i);
            if (null === s) {
              var h = t.oi();
              n.Ps(t, i, h);
            } else {
              h = s.ft === n ? t.oi() : void 0;
              s.ft.Ps(t, i, h);
            }
          }),
          (t.prototype.Qr = function () {
            var t = new Yt(2);
            t.ye(), this.af(t);
          }),
          (t.prototype.Pf = function (t) {
            var i = new Yt(2);
            i.Ce(t), this.af(i);
          }),
          (t.prototype.xe = function () {
            var t = new Yt(2);
            t.xe(), this.af(t);
          }),
          (t.prototype.wr = function (t) {
            var i = new Yt(2);
            i.wr(t), this.af(i);
          }),
          (t.prototype.Mr = function (t) {
            var i = new Yt(2);
            i.Mr(t), this.af(i);
          }),
          (t.prototype.Wf = function () {
            return this.ki.rightPriceScale.visible ? "right" : "left";
          }),
          (t.prototype.zf = function () {
            return this.ef;
          }),
          (t.prototype.Rf = function () {
            return this.hf;
          }),
          (t.prototype.J = function (t) {
            var i = this.ef,
              n = this.hf;
            if (i === n) return i;
            if (
              ((t = Math.max(0, Math.min(100, Math.round(100 * t)))),
              null === this.Gl || this.Gl.Ve !== n || this.Gl.Oe !== i)
            )
              this.Gl = { Ve: n, Oe: i, If: new Map() };
            else {
              var s = this.Gl.If.get(t);
              if (void 0 !== s) return s;
            }
            var h = (function (t, i, n) {
              var s = V(t),
                h = s[0],
                r = s[1],
                e = s[2],
                u = s[3],
                a = V(i),
                o = a[0],
                l = a[1],
                f = a[2],
                c = a[3],
                v = [
                  T(h + n * (o - h)),
                  T(r + n * (l - r)),
                  T(e + n * (f - e)),
                  A(u + n * (c - u)),
                ];
              return (
                "rgba(" + v[0] + ", " + v[1] + ", " + v[2] + ", " + v[3] + ")"
              );
            })(n, i, t / 100);
            return this.Gl.If.set(t, h), h;
          }),
          (t.prototype.pf = function (t, i) {
            var n = new Yt(i);
            if (null !== t) {
              var s = this.Yl.indexOf(t);
              n.be(s, { me: i });
            }
            return n;
          }),
          (t.prototype.lf = function (t, i) {
            return void 0 === i && (i = 2), this.pf(this.qu(t), i);
          }),
          (t.prototype.af = function (t) {
            this.Ql && this.Ql(t),
              this.Yl.forEach(function (t) {
                return t.Ol().sl().O();
              });
          }),
          (t.prototype.Vf = function (t, i, n) {
            var s = new tn(this, t, i),
              h = void 0 !== t.priceScaleId ? t.priceScaleId : this.Wf();
            return n.Ps(s, h), Ht(h) || s.rs(t), s;
          }),
          (t.prototype.rf = function (t) {
            var i = this.ki.layout;
            return "gradient" === i.background.type
              ? 0 === t
                ? i.background.topColor
                : i.background.bottomColor
              : i.background.color;
          }),
          t
        );
      })(),
      fn = { allowDownsampling: !0 };
    var cn = (function () {
        function t(t, i) {
          var n = this;
          (this._resolutionMediaQueryList = null),
            (this._resolutionListener = function (t) {
              return n._onResolutionChanged();
            }),
            (this._canvasConfiguredListeners = []),
            (this.canvas = t),
            (this._canvasSize = {
              width: this.canvas.clientWidth,
              height: this.canvas.clientHeight,
            }),
            (this._options = i),
            this._configureCanvas(),
            this._installResolutionListener();
        }
        return (
          (t.prototype.destroy = function () {
            (this._canvasConfiguredListeners.length = 0),
              this._uninstallResolutionListener(),
              (this.canvas = null);
          }),
          Object.defineProperty(t.prototype, "canvasSize", {
            get: function () {
              return {
                width: this._canvasSize.width,
                height: this._canvasSize.height,
              };
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.prototype.resizeCanvas = function (t) {
            (this._canvasSize = { width: t.width, height: t.height }),
              this._configureCanvas();
          }),
          Object.defineProperty(t.prototype, "pixelRatio", {
            get: function () {
              var t = this.canvas.ownerDocument.defaultView;
              if (null == t)
                throw new Error("No window is associated with the canvas");
              return t.devicePixelRatio > 1 || this._options.allowDownsampling
                ? t.devicePixelRatio
                : 1;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.prototype.subscribeCanvasConfigured = function (t) {
            this._canvasConfiguredListeners.push(t);
          }),
          (t.prototype.unsubscribeCanvasConfigured = function (t) {
            this._canvasConfiguredListeners =
              this._canvasConfiguredListeners.filter(function (i) {
                return i != t;
              });
          }),
          (t.prototype._configureCanvas = function () {
            var t = this.pixelRatio;
            (this.canvas.style.width = this._canvasSize.width + "px"),
              (this.canvas.style.height = this._canvasSize.height + "px"),
              (this.canvas.width = this._canvasSize.width * t),
              (this.canvas.height = this._canvasSize.height * t),
              this._emitCanvasConfigured();
          }),
          (t.prototype._emitCanvasConfigured = function () {
            var t = this;
            this._canvasConfiguredListeners.forEach(function (i) {
              return i.call(t);
            });
          }),
          (t.prototype._installResolutionListener = function () {
            if (null !== this._resolutionMediaQueryList)
              throw new Error("Resolution listener is already installed");
            var t = this.canvas.ownerDocument.defaultView;
            if (null == t)
              throw new Error("No window is associated with the canvas");
            var i = t.devicePixelRatio;
            (this._resolutionMediaQueryList = t.matchMedia(
              "all and (resolution: " + i + "dppx)"
            )),
              this._resolutionMediaQueryList.addListener(
                this._resolutionListener
              );
          }),
          (t.prototype._uninstallResolutionListener = function () {
            null !== this._resolutionMediaQueryList &&
              (this._resolutionMediaQueryList.removeListener(
                this._resolutionListener
              ),
              (this._resolutionMediaQueryList = null));
          }),
          (t.prototype._reinstallResolutionListener = function () {
            this._uninstallResolutionListener(),
              this._installResolutionListener();
          }),
          (t.prototype._onResolutionChanged = function () {
            this._configureCanvas(), this._reinstallResolutionListener();
          }),
          t
        );
      })(),
      vn = (function () {
        function t(t, i) {
          (this.st = t), (this.ht = i);
        }
        return (
          (t.prototype.on = function (t) {
            return this.st === t.st && this.ht === t.ht;
          }),
          t
        );
      })();
    function _n(t) {
      return (
        (t.ownerDocument &&
          t.ownerDocument.defaultView &&
          t.ownerDocument.defaultView.devicePixelRatio) ||
        1
      );
    }
    function dn(t) {
      var i = l(t.getContext("2d"));
      return i.setTransform(1, 0, 0, 1, 0, 0), i;
    }
    function wn(t, i) {
      var n = t.createElement("canvas"),
        s = _n(n);
      return (
        (n.style.width = i.st + "px"),
        (n.style.height = i.ht + "px"),
        (n.width = i.st * s),
        (n.height = i.ht * s),
        n
      );
    }
    function Mn(t, i) {
      var n = l(t.ownerDocument).createElement("canvas");
      t.appendChild(n);
      var s = (function (t, i) {
        return void 0 === i && (i = fn), new cn(t, i);
      })(n);
      return s.resizeCanvas({ width: i.st, height: i.ht }), s;
    }
    function bn(t, i) {
      return t.jf - i.jf;
    }
    function mn(t, i, n) {
      var s = (t.jf - i.jf) / (t.S - i.S);
      return Math.sign(s) * Math.min(Math.abs(s), n);
    }
    var gn = (function () {
        function t(t, i, n, s) {
          (this.qf = null),
            (this.Uf = null),
            (this.Hf = null),
            (this.Yf = null),
            (this.Kf = null),
            (this.$f = 0),
            (this.Xf = 0),
            (this.Zf = !1),
            (this.Jf = t),
            (this.Gf = i),
            (this.Qf = n),
            (this.Yi = s);
        }
        return (
          (t.prototype.tc = function (t, i) {
            if (null !== this.qf) {
              if (this.qf.S === i) return void (this.qf.jf = t);
              if (Math.abs(this.qf.jf - t) < this.Yi) return;
            }
            (this.Yf = this.Hf),
              (this.Hf = this.Uf),
              (this.Uf = this.qf),
              (this.qf = { S: i, jf: t });
          }),
          (t.prototype.ia = function (t, i) {
            if (null !== this.qf && null !== this.Uf && !(i - this.qf.S > 50)) {
              var n = 0,
                s = mn(this.qf, this.Uf, this.Gf),
                h = bn(this.qf, this.Uf),
                r = [s],
                e = [h];
              if (((n += h), null !== this.Hf)) {
                var u = mn(this.Uf, this.Hf, this.Gf);
                if (Math.sign(u) === Math.sign(s)) {
                  var a = bn(this.Uf, this.Hf);
                  if ((r.push(u), e.push(a), (n += a), null !== this.Yf)) {
                    var o = mn(this.Hf, this.Yf, this.Gf);
                    if (Math.sign(o) === Math.sign(s)) {
                      var l = bn(this.Hf, this.Yf);
                      r.push(o), e.push(l), (n += l);
                    }
                  }
                }
              }
              for (var f, c, v, _ = 0, d = 0; d < r.length; ++d)
                _ += (e[d] / n) * r[d];
              if (!(Math.abs(_) < this.Jf))
                (this.Kf = { jf: t, S: i }),
                  (this.Xf = _),
                  (this.$f =
                    ((f = Math.abs(_)),
                    (c = this.Qf),
                    (v = Math.log(c)),
                    Math.log((1 * v) / -f) / v));
            }
          }),
          (t.prototype.ic = function (t) {
            var i = l(this.Kf),
              n = t - i.S;
            return (
              i.jf + (this.Xf * (Math.pow(this.Qf, n) - 1)) / Math.log(this.Qf)
            );
          }),
          (t.prototype.nc = function (t) {
            return null === this.Kf || this.sc(t) === this.$f;
          }),
          (t.prototype.hc = function () {
            return this.Zf;
          }),
          (t.prototype.rc = function () {
            this.Zf = !0;
          }),
          (t.prototype.sc = function (t) {
            var i = t - l(this.Kf).S;
            return Math.min(i, this.$f);
          }),
          t
        );
      })(),
      pn = "undefined" != typeof window;
    var yn = (function () {
      if (!pn) return !1;
      var t =
        !!navigator.maxTouchPoints ||
        !!navigator.msMaxTouchPoints ||
        (!!pn &&
          ("ontouchstart" in window ||
            Boolean(
              window.DocumentTouch && document instanceof window.DocumentTouch
            )));
      return "onorientationchange" in window && t;
    })();
    var kn = (function () {
        if (!pn) return !1;
        var t = /Android/i.test(navigator.userAgent),
          i = /iPhone|iPad|iPod|AppleWebKit.+Mobile/i.test(navigator.userAgent);
        return t || i;
      })(),
      Cn = (function () {
        function t(t, i, n) {
          (this.ec = 0),
            (this.uc = null),
            (this.ac = null),
            (this.oc = !1),
            (this.lc = null),
            (this.fc = !1),
            (this.cc = !1),
            (this.vc = null),
            (this._c = null),
            (this.dc = null),
            (this.wc = null),
            (this.Mc = 0),
            (this.bc = !1),
            (this.mc = !1),
            (this.gc = !1),
            (this.yc = t),
            (this.kc = i),
            (this.ki = n),
            this.Cc();
        }
        return (
          (t.prototype.en = function () {
            null !== this.vc && (this.vc(), (this.vc = null)),
              null !== this._c && (this._c(), (this._c = null)),
              null !== this.dc && (this.dc(), (this.dc = null)),
              this.xc(),
              this.Nc();
          }),
          (t.prototype.Sc = function (t) {
            var i = this;
            this._c && this._c();
            var n = this.Dc.bind(this);
            (this._c = function () {
              i.yc.removeEventListener("mousemove", n);
            }),
              this.yc.addEventListener("mousemove", n),
              Sn(t) && this.Dc(t);
            var s = this.Tc(t);
            this.Ac(s, this.kc.Bc);
          }),
          (t.prototype.Nc = function () {
            null !== this.uc && clearTimeout(this.uc),
              (this.ec = 0),
              (this.uc = null);
          }),
          (t.prototype.Dc = function (t) {
            if (!this.gc || Sn(t)) {
              var i = this.Tc(t);
              this.Ac(i, this.kc.Lc);
            }
          }),
          (t.prototype.Ec = function (t) {
            if ((!("button" in t) || 0 === t.button) && null === this.wc) {
              var i = Sn(t);
              if (!this.mc || !i) {
                this.bc = !0;
                var n = this.Tc(t),
                  s = f(this.lc),
                  h = Math.abs(s.g - n.Fc),
                  r = Math.abs(s.p - n.Vc),
                  e = h + r > 5;
                if (e || !i) {
                  if (e && !this.fc && i) {
                    var u = 0.5 * h,
                      a = r >= u && !this.ki.Oc,
                      o = u > r && !this.ki.Pc;
                    a || o || (this.mc = !0);
                  }
                  e && ((this.fc = !0), (this.cc = !0), i && this.xc()),
                    this.mc || (this.Ac(n, this.kc.Wc), i && Dn(t));
                }
              }
            }
          }),
          (t.prototype.zc = function (t) {
            if (!("button" in t) || 0 === t.button) {
              var i = this.Tc(t);
              this.xc(),
                (this.lc = null),
                (this.gc = !1),
                this.dc && (this.dc(), (this.dc = null)),
                Sn(t) && this.Rc(t),
                this.Ac(i, this.kc.Ic),
                ++this.ec,
                this.uc && this.ec > 1
                  ? (this.Ac(i, this.kc.jc), this.Nc())
                  : this.cc || this.Ac(i, this.kc.qc),
                Sn(t) &&
                  (Dn(t), this.Rc(t), 0 === t.touches.length && (this.oc = !1));
            }
          }),
          (t.prototype.xc = function () {
            null !== this.ac && (clearTimeout(this.ac), (this.ac = null));
          }),
          (t.prototype.Uc = function (t) {
            if (!("button" in t) || 0 === t.button) {
              var i = this.Tc(t);
              (this.cc = !1),
                (this.fc = !1),
                (this.mc = !1),
                Sn(t) && this.Sc(t),
                (this.lc = { g: i.Fc, p: i.Vc }),
                this.dc && (this.dc(), (this.dc = null));
              var n = this.Ec.bind(this),
                s = this.zc.bind(this),
                h = this.yc.ownerDocument.documentElement;
              (this.dc = function () {
                h.removeEventListener("touchmove", n),
                  h.removeEventListener("touchend", s),
                  h.removeEventListener("mousemove", n),
                  h.removeEventListener("mouseup", s);
              }),
                h.addEventListener("touchmove", n, { passive: !1 }),
                h.addEventListener("touchend", s, { passive: !1 }),
                this.xc(),
                Sn(t) && 1 === t.touches.length
                  ? (this.ac = setTimeout(this.Hc.bind(this, t), 240))
                  : (h.addEventListener("mousemove", n),
                    h.addEventListener("mouseup", s)),
                (this.gc = !0),
                this.Ac(i, this.kc.Yc),
                this.uc ||
                  ((this.ec = 0),
                  (this.uc = setTimeout(this.Nc.bind(this), 500)));
            }
          }),
          (t.prototype.Cc = function () {
            var t = this;
            this.yc.addEventListener("mouseenter", this.Sc.bind(this)),
              this.yc.addEventListener("touchcancel", this.xc.bind(this));
            var i = this.yc.ownerDocument,
              n = function (i) {
                t.kc.Kc &&
                  ((i.composed && t.yc.contains(i.composedPath()[0])) ||
                    (i.target && t.yc.contains(i.target)) ||
                    t.kc.Kc());
              };
            (this.vc = function () {
              i.removeEventListener("mousedown", n),
                i.removeEventListener("touchstart", n);
            }),
              i.addEventListener("mousedown", n),
              i.addEventListener("touchstart", n, { passive: !0 }),
              this.yc.addEventListener("mouseleave", this.Rc.bind(this)),
              this.yc.addEventListener("touchstart", this.Uc.bind(this), {
                passive: !0,
              }),
              yn || this.yc.addEventListener("mousedown", this.Uc.bind(this)),
              this.$c(),
              this.yc.addEventListener("touchmove", function () {}, {
                passive: !1,
              });
          }),
          (t.prototype.$c = function () {
            var t = this;
            (void 0 === this.kc.Xc &&
              void 0 === this.kc.Zc &&
              void 0 === this.kc.Jc) ||
              (this.yc.addEventListener(
                "touchstart",
                function (i) {
                  return t.Gc(i.touches);
                },
                { passive: !0 }
              ),
              this.yc.addEventListener(
                "touchmove",
                function (i) {
                  if (
                    2 === i.touches.length &&
                    null !== t.wc &&
                    void 0 !== t.kc.Zc
                  ) {
                    var n = Nn(i.touches[0], i.touches[1]) / t.Mc;
                    t.kc.Zc(t.wc, n), Dn(i);
                  }
                },
                { passive: !1 }
              ),
              this.yc.addEventListener("touchend", function (i) {
                t.Gc(i.touches);
              }));
          }),
          (t.prototype.Gc = function (t) {
            1 === t.length && (this.bc = !1),
              2 !== t.length || this.bc || this.oc ? this.Qc() : this.tv(t);
          }),
          (t.prototype.tv = function (t) {
            var i = xn(this.yc);
            (this.wc = {
              g: (t[0].clientX - i.left + (t[1].clientX - i.left)) / 2,
              p: (t[0].clientY - i.top + (t[1].clientY - i.top)) / 2,
            }),
              (this.Mc = Nn(t[0], t[1])),
              void 0 !== this.kc.Xc && this.kc.Xc(),
              this.xc();
          }),
          (t.prototype.Qc = function () {
            null !== this.wc &&
              ((this.wc = null), void 0 !== this.kc.Jc && this.kc.Jc());
          }),
          (t.prototype.Rc = function (t) {
            this._c && this._c();
            var i = this.Tc(t);
            this.Ac(i, this.kc.iv);
          }),
          (t.prototype.Hc = function (t) {
            var i = this.Tc(t);
            this.Ac(i, this.kc.nv), (this.cc = !0), (this.oc = !0);
          }),
          (t.prototype.Ac = function (t, i) {
            i && i.call(this.kc, t);
          }),
          (t.prototype.Tc = function (t) {
            var i;
            i =
              "touches" in t && t.touches.length
                ? t.touches[0]
                : "changedTouches" in t && t.changedTouches.length
                ? t.changedTouches[0]
                : t;
            var n = xn(this.yc);
            return {
              sv: i.clientX,
              hv: i.clientY,
              Fc: i.pageX,
              Vc: i.pageY,
              rv: i.screenX,
              ev: i.screenY,
              uv: i.clientX - n.left,
              av: i.clientY - n.top,
              ov: t.ctrlKey,
              lv: t.altKey,
              fv: t.shiftKey,
              cv: t.metaKey,
              ke: t.type.startsWith("mouse") ? "mouse" : "touch",
              vv: t.view,
            };
          }),
          t
        );
      })();
    function xn(t) {
      return t.getBoundingClientRect() || { left: 0, top: 0 };
    }
    function Nn(t, i) {
      var n = t.clientX - i.clientX,
        s = t.clientY - i.clientY;
      return Math.sqrt(n * n + s * s);
    }
    function Sn(t) {
      return Boolean(t.touches);
    }
    function Dn(t) {
      t.cancelable && t.preventDefault();
    }
    var Tn = (function () {
        function t(t, i, n, s) {
          (this.zu = new mi(200)),
            (this.fe = 0),
            (this._v = ""),
            (this.ma = ""),
            (this.Vu = []),
            (this.dv = new Map()),
            (this.fe = t),
            (this._v = i),
            (this.ma = qt(t, n, s));
        }
        return (
          (t.prototype.en = function () {
            this.zu.Ou(), (this.Vu = []), this.dv.clear();
          }),
          (t.prototype.wv = function (t, i, n, s, h) {
            var r = this.Mv(t, i);
            if ("left" !== h) {
              var e = _n(t.canvas);
              n -= Math.floor(r.bv * e);
            }
            (s -= Math.floor(r.Mt / 2)), t.drawImage(r.mv, n, s, r.wt, r.Mt);
          }),
          (t.prototype.Mv = function (t, i) {
            var n,
              s = this;
            if (this.dv.has(i)) n = o(this.dv.get(i));
            else {
              if (this.Vu.length >= 200) {
                var h = o(this.Vu.shift());
                this.dv.delete(h);
              }
              var r = _n(t.canvas),
                e = Math.ceil(this.fe / 4.5),
                u = Math.round(this.fe / 10),
                a = Math.ceil(this.zu.Vt(t, i)),
                l = rt(Math.round(a + 2 * e)),
                f = rt(this.fe + 2 * e),
                c = wn(document, new vn(l, f));
              (n = {
                Ft: i,
                bv: Math.round(Math.max(1, a)),
                wt: Math.ceil(l * r),
                Mt: Math.ceil(f * r),
                mv: c,
              }),
                0 !== a && (this.Vu.push(n.Ft), this.dv.set(n.Ft, n)),
                W((t = dn(n.mv)), r, function () {
                  (t.font = s.ma),
                    (t.fillStyle = s._v),
                    t.fillText(i, 0, f - e - u);
                });
            }
            return n;
          }),
          t
        );
      })(),
      An = (function () {
        function t(t, i, n, s) {
          var h = this;
          (this.Gt = null),
            (this.gv = null),
            (this.pv = null),
            (this.yv = !1),
            (this.kv = new mi(50)),
            (this.Cv = new Tn(11, "#000")),
            (this._v = null),
            (this.ma = null),
            (this.xv = 0),
            (this.Nv = function () {
              h.Sv(h.tf.ct()), h.vi.Dv().vt().Or();
            }),
            (this.Tv = function () {
              h.vi.Dv().vt().Or();
            }),
            (this.vi = t),
            (this.ki = i),
            (this.tf = n),
            (this.Av = "left" === s),
            (this.Bv = document.createElement("div")),
            (this.Bv.style.height = "100%"),
            (this.Bv.style.overflow = "hidden"),
            (this.Bv.style.width = "25px"),
            (this.Bv.style.left = "0"),
            (this.Bv.style.position = "relative"),
            (this.Lv = Mn(this.Bv, new vn(16, 16))),
            this.Lv.subscribeCanvasConfigured(this.Nv);
          var r = this.Lv.canvas;
          (r.style.position = "absolute"),
            (r.style.zIndex = "1"),
            (r.style.left = "0"),
            (r.style.top = "0"),
            (this.Ev = Mn(this.Bv, new vn(16, 16))),
            this.Ev.subscribeCanvasConfigured(this.Tv);
          var e = this.Ev.canvas;
          (e.style.position = "absolute"),
            (e.style.zIndex = "2"),
            (e.style.left = "0"),
            (e.style.top = "0");
          var u = {
            Yc: this.Fv.bind(this),
            Wc: this.Vv.bind(this),
            Kc: this.Ov.bind(this),
            Ic: this.Pv.bind(this),
            jc: this.Wv.bind(this),
            Bc: this.zv.bind(this),
            iv: this.Rv.bind(this),
          };
          this.Iv = new Cn(this.Ev.canvas, u, { Oc: !1, Pc: !0 });
        }
        return (
          (t.prototype.en = function () {
            this.Iv.en(),
              this.Ev.unsubscribeCanvasConfigured(this.Tv),
              this.Ev.destroy(),
              this.Lv.unsubscribeCanvasConfigured(this.Nv),
              this.Lv.destroy(),
              null !== this.Gt && this.Gt.Is().sn(this),
              (this.Gt = null),
              null !== this.pv && (clearTimeout(this.pv), (this.pv = null)),
              this.Cv.en();
          }),
          (t.prototype.jv = function () {
            return this.Bv;
          }),
          (t.prototype.N = function () {
            return l(this.Gt).ct().borderColor;
          }),
          (t.prototype.qv = function () {
            return this.ki.textColor;
          }),
          (t.prototype.Pt = function () {
            return this.ki.fontSize;
          }),
          (t.prototype.Uv = function () {
            return qt(this.Pt(), this.ki.fontFamily);
          }),
          (t.prototype.Hv = function () {
            var t = this.tf.ct(),
              i = this._v !== t.et,
              n = this.ma !== t.xt;
            return (
              (i || n) && (this.Sv(t), (this._v = t.et)),
              n && (this.kv.Ou(), (this.ma = t.xt)),
              t
            );
          }),
          (t.prototype.Yv = function () {
            if (null === this.Gt) return 0;
            var t = 34,
              i = this.Hv(),
              n = dn(this.Lv.canvas),
              s = this.Gt.En();
            (n.font = this.Uv()),
              s.length > 0 &&
                (t = Math.max(
                  this.kv.Vt(n, s[0].An),
                  this.kv.Vt(n, s[s.length - 1].An)
                ));
            for (var h = this.Kv(), r = h.length; r--; ) {
              var e = this.kv.Vt(n, h[r].Ft());
              e > t && (t = e);
            }
            var u = this.Gt.H();
            if (null !== u && null !== this.gv) {
              var a = this.Gt.Si(1, u),
                o = this.Gt.Si(this.gv.ht - 2, u);
              t = Math.max(
                t,
                this.kv.Vt(
                  n,
                  this.Gt.ii(Math.floor(Math.min(a, o)) + 0.11111111111111, u)
                ),
                this.kv.Vt(
                  n,
                  this.Gt.ii(Math.ceil(Math.max(a, o)) - 0.11111111111111, u)
                )
              );
            }
            var l = Math.ceil(i.Tt + i.Dt + i.Lt + i.Et + t);
            return (l += l % 2);
          }),
          (t.prototype.$v = function (t) {
            if (t.st < 0 || t.ht < 0)
              throw new Error(
                "Try to set invalid size to PriceAxisWidget " + JSON.stringify(t)
              );
            (null !== this.gv && this.gv.on(t)) ||
              ((this.gv = t),
              this.Lv.resizeCanvas({ width: t.st, height: t.ht }),
              this.Ev.resizeCanvas({ width: t.st, height: t.ht }),
              (this.Bv.style.width = t.st + "px"),
              (this.Bv.style.height = t.ht + "px"),
              (this.Bv.style.minWidth = t.st + "px"));
          }),
          (t.prototype.Xv = function () {
            return l(this.gv).st;
          }),
          (t.prototype.fi = function (t) {
            this.Gt !== t &&
              (null !== this.Gt && this.Gt.Is().sn(this),
              (this.Gt = t),
              t.Is().Ji(this.qn.bind(this), this));
          }),
          (t.prototype.$ = function () {
            return this.Gt;
          }),
          (t.prototype.Ou = function () {
            var t = this.vi.Zv();
            this.vi.Dv().vt().Ll(t, l(this.$()));
          }),
          (t.prototype.Jv = function (t) {
            if (null !== this.gv) {
              if (1 !== t) {
                var i = dn(this.Lv.canvas);
                this.Gv(),
                  this.Qv(i, this.Lv.pixelRatio),
                  this.yu(i, this.Lv.pixelRatio),
                  this.t_(i, this.Lv.pixelRatio),
                  this.i_(i, this.Lv.pixelRatio);
              }
              var n = dn(this.Ev.canvas),
                s = this.gv.st,
                h = this.gv.ht;
              W(n, this.Ev.pixelRatio, function () {
                n.clearRect(0, 0, s, h);
              }),
                this.n_(n, this.Ev.pixelRatio);
            }
          }),
          (t.prototype.s_ = function () {
            return this.Lv.canvas;
          }),
          (t.prototype.Fv = function (t) {
            if (
              null !== this.Gt &&
              !this.Gt.ti() &&
              this.vi.Dv().ct().handleScale.axisPressedMouseMove.price
            ) {
              var i = this.vi.Dv().vt(),
                n = this.vi.Zv();
              (this.yv = !0), i.xl(n, this.Gt, t.av);
            }
          }),
          (t.prototype.Vv = function (t) {
            if (
              null !== this.Gt &&
              this.vi.Dv().ct().handleScale.axisPressedMouseMove.price
            ) {
              var i = this.vi.Dv().vt(),
                n = this.vi.Zv(),
                s = this.Gt;
              i.Nl(n, s, t.av);
            }
          }),
          (t.prototype.Ov = function () {
            if (
              null !== this.Gt &&
              this.vi.Dv().ct().handleScale.axisPressedMouseMove.price
            ) {
              var t = this.vi.Dv().vt(),
                i = this.vi.Zv(),
                n = this.Gt;
              this.yv && ((this.yv = !1), t.Sl(i, n));
            }
          }),
          (t.prototype.Pv = function (t) {
            if (
              null !== this.Gt &&
              this.vi.Dv().ct().handleScale.axisPressedMouseMove.price
            ) {
              var i = this.vi.Dv().vt(),
                n = this.vi.Zv();
              (this.yv = !1), i.Sl(n, this.Gt);
            }
          }),
          (t.prototype.Wv = function (t) {
            this.vi.Dv().ct().handleScale.axisDoubleClickReset && this.Ou();
          }),
          (t.prototype.zv = function (t) {
            null !== this.Gt &&
              (!this.vi.Dv().vt().ct().handleScale.axisPressedMouseMove.price ||
                this.Gt.cs() ||
                this.Gt.vs() ||
                this.h_(1));
          }),
          (t.prototype.Rv = function (t) {
            this.h_(0);
          }),
          (t.prototype.Kv = function () {
            var t = this,
              i = [],
              n = null === this.Gt ? void 0 : this.Gt;
            return (
              (function (s) {
                for (var h = 0; h < s.length; ++h)
                  for (var r = s[h].zi(t.vi.Zv(), n), e = 0; e < r.length; e++)
                    i.push(r[e]);
              })(this.vi.Zv().Os()),
              i
            );
          }),
          (t.prototype.Qv = function (t, i) {
            var n = this;
            if (null !== this.gv) {
              var s = this.gv.st,
                h = this.gv.ht;
              W(t, i, function () {
                var i = n.vi.Zv().vt(),
                  r = i.Rf(),
                  e = i.zf();
                r === e ? z(t, 0, 0, s, h, r) : R(t, 0, 0, s, h, r, e);
              });
            }
          }),
          (t.prototype.yu = function (t, i) {
            if (
              null !== this.gv &&
              null !== this.Gt &&
              this.Gt.ct().borderVisible
            ) {
              t.save(), (t.fillStyle = this.N());
              var n,
                s = Math.max(1, Math.floor(this.Hv().Tt * i));
              (n = this.Av ? Math.floor(this.gv.st * i) - s : 0),
                t.fillRect(n, 0, s, Math.ceil(this.gv.ht * i)),
                t.restore();
            }
          }),
          (t.prototype.t_ = function (t, i) {
            if (null !== this.gv && null !== this.Gt) {
              var n = this.Gt.En();
              t.save(),
                (t.strokeStyle = this.N()),
                (t.font = this.Uv()),
                (t.fillStyle = this.N());
              var s = this.Hv(),
                h = this.Gt.ct().borderVisible && this.Gt.ct().drawTicks,
                r = this.Av
                  ? Math.floor((this.gv.st - s.Dt) * i - s.Tt * i)
                  : Math.floor(s.Tt * i),
                e = this.Av
                  ? Math.round(r - s.Lt * i)
                  : Math.round(r + s.Dt * i + s.Lt * i),
                u = this.Av ? "right" : "left",
                a = Math.max(1, Math.floor(i)),
                o = Math.floor(0.5 * i);
              if (h) {
                var l = Math.round(s.Dt * i);
                t.beginPath();
                for (var f = 0, c = n; f < c.length; f++) {
                  var v = c[f];
                  t.rect(r, Math.round(v.Tn * i) - o, l, a);
                }
                t.fill();
              }
              t.fillStyle = this.qv();
              for (var _ = 0, d = n; _ < d.length; _++) {
                v = d[_];
                this.Cv.wv(t, v.An, e, Math.round(v.Tn * i), u);
              }
              t.restore();
            }
          }),
          (t.prototype.Gv = function () {
            if (null !== this.gv && null !== this.Gt) {
              var t = this.gv.ht / 2,
                i = [],
                n = this.Gt.Os().slice(),
                s = this.vi.Zv(),
                h = this.Hv();
              this.Gt === s.Ni() &&
                this.vi
                  .Zv()
                  .Os()
                  .forEach(function (t) {
                    s.Uu(t) && n.push(t);
                  });
              var r = this.Gt.Vs()[0],
                e = this.Gt;
              n.forEach(function (n) {
                var h = n.zi(s, e);
                h.forEach(function (t) {
                  t.Kt(null), t.$t() && i.push(t);
                }),
                  r === n && h.length > 0 && (t = h[0].Wt());
              });
              var u = i.filter(function (i) {
                  return i.Wt() <= t;
                }),
                a = i.filter(function (i) {
                  return i.Wt() > t;
                });
              if (
                (u.sort(function (t, i) {
                  return i.Wt() - t.Wt();
                }),
                u.length && a.length && a.push(u[0]),
                a.sort(function (t, i) {
                  return t.Wt() - i.Wt();
                }),
                i.forEach(function (t) {
                  return t.Kt(t.Wt());
                }),
                this.Gt.ct().alignLabels)
              ) {
                for (var o = 1; o < u.length; o++) {
                  var l = u[o],
                    f = (v = u[o - 1]).Mt(h, !1);
                  l.Wt() > (_ = v.Yt()) - f && l.Kt(_ - f);
                }
                for (var c = 1; c < a.length; c++) {
                  var v, _;
                  (l = a[c]), (f = (v = a[c - 1]).Mt(h, !0));
                  l.Wt() < (_ = v.Yt()) + f && l.Kt(_ + f);
                }
              }
            }
          }),
          (t.prototype.i_ = function (t, i) {
            var n = this;
            if (null !== this.gv) {
              t.save();
              var s = this.gv,
                h = this.Kv(),
                r = this.Hv(),
                e = this.Av ? "right" : "left";
              h.forEach(function (h) {
                if (h.Xt()) {
                  var u = h.W(l(n.Gt));
                  t.save(), u.h(t, r, n.kv, s.st, e, i), t.restore();
                }
              }),
                t.restore();
            }
          }),
          (t.prototype.n_ = function (t, i) {
            var n = this;
            if (null !== this.gv && null !== this.Gt) {
              t.save();
              var s = this.gv,
                h = this.vi.Dv().vt(),
                r = [],
                e = this.vi.Zv(),
                u = h.bf().zi(e, this.Gt);
              u.length && r.push(u);
              var a = this.Hv(),
                o = this.Av ? "right" : "left";
              r.forEach(function (h) {
                h.forEach(function (h) {
                  t.save(), h.W(l(n.Gt)).h(t, a, n.kv, s.st, o, i), t.restore();
                });
              }),
                t.restore();
            }
          }),
          (t.prototype.h_ = function (t) {
            this.Bv.style.cursor = 1 === t ? "ns-resize" : "default";
          }),
          (t.prototype.qn = function () {
            var t = this,
              i = this.Yv();
            if (this.xv < i) {
              var n = this.vi.Dv();
              null === this.pv &&
                (this.pv = setTimeout(function () {
                  n && n.vt().uf(), (t.pv = null);
                }, 100));
            }
            this.xv = i;
          }),
          (t.prototype.Sv = function (t) {
            this.Cv.en(), (this.Cv = new Tn(t.Pt, t.et, t.le));
          }),
          t
        );
      })(),
      Bn = kn;
    function Ln(t, i, n, s, h) {
      t.o && t.o(i, n, s, h);
    }
    function En(t, i, n, s, h) {
      t.h(i, n, s, h);
    }
    function Fn(t, i) {
      return t.Wi(i);
    }
    function Vn(t, i) {
      return void 0 !== t.Io ? t.Io(i) : [];
    }
    var On = (function () {
        function t(t, i) {
          var n = this;
          (this.gv = new vn(0, 0)),
            (this.r_ = null),
            (this.e_ = null),
            (this.u_ = null),
            (this.a_ = !1),
            (this.o_ = new tt()),
            (this.l_ = 0),
            (this.f_ = !1),
            (this.c_ = null),
            (this.v_ = !1),
            (this.__ = null),
            (this.d_ = null),
            (this.Nv = function () {
              return n.w_ && n.hi().Or();
            }),
            (this.Tv = function () {
              return n.w_ && n.hi().Or();
            }),
            (this.M_ = t),
            (this.w_ = i),
            this.w_.Vl().Ji(this.b_.bind(this), this, !0),
            (this.m_ = document.createElement("td")),
            (this.m_.style.padding = "0"),
            (this.m_.style.position = "relative");
          var s = document.createElement("div");
          (s.style.width = "100%"),
            (s.style.height = "100%"),
            (s.style.position = "relative"),
            (s.style.overflow = "hidden"),
            (this.g_ = document.createElement("td")),
            (this.g_.style.padding = "0"),
            (this.p_ = document.createElement("td")),
            (this.p_.style.padding = "0"),
            this.m_.appendChild(s),
            (this.Lv = Mn(s, new vn(16, 16))),
            this.Lv.subscribeCanvasConfigured(this.Nv);
          var h = this.Lv.canvas;
          (h.style.position = "absolute"),
            (h.style.zIndex = "1"),
            (h.style.left = "0"),
            (h.style.top = "0"),
            (this.Ev = Mn(s, new vn(16, 16))),
            this.Ev.subscribeCanvasConfigured(this.Tv);
          var r = this.Ev.canvas;
          (r.style.position = "absolute"),
            (r.style.zIndex = "2"),
            (r.style.left = "0"),
            (r.style.top = "0"),
            (this.y_ = document.createElement("tr")),
            this.y_.appendChild(this.g_),
            this.y_.appendChild(this.m_),
            this.y_.appendChild(this.p_),
            this.k_();
          var e = this.Dv().ct().handleScroll;
          this.Iv = new Cn(this.Ev.canvas, this, {
            Oc: !e.vertTouchDrag,
            Pc: !e.horzTouchDrag,
          });
        }
        return (
          (t.prototype.en = function () {
            null !== this.r_ && this.r_.en(),
              null !== this.e_ && this.e_.en(),
              this.Ev.unsubscribeCanvasConfigured(this.Tv),
              this.Ev.destroy(),
              this.Lv.unsubscribeCanvasConfigured(this.Nv),
              this.Lv.destroy(),
              null !== this.w_ && this.w_.Vl().sn(this),
              this.Iv.en();
          }),
          (t.prototype.Zv = function () {
            return l(this.w_);
          }),
          (t.prototype.C_ = function (i) {
            null !== this.w_ && this.w_.Vl().sn(this),
              (this.w_ = i),
              null !== this.w_ &&
                this.w_.Vl().Ji(t.prototype.b_.bind(this), this, !0),
              this.k_();
          }),
          (t.prototype.Dv = function () {
            return this.M_;
          }),
          (t.prototype.jv = function () {
            return this.y_;
          }),
          (t.prototype.k_ = function () {
            if (null !== this.w_ && (this.x_(), 0 !== this.hi().P().length)) {
              if (null !== this.r_) {
                var t = this.w_.kl();
                this.r_.fi(l(t));
              }
              if (null !== this.e_) {
                var i = this.w_.Cl();
                this.e_.fi(l(i));
              }
            }
          }),
          (t.prototype.wl = function () {
            return null !== this.w_ ? this.w_.wl() : 0;
          }),
          (t.prototype.Ml = function (t) {
            this.w_ && this.w_.Ml(t);
          }),
          (t.prototype.Bc = function (t) {
            if (this.w_) {
              var i = t.uv,
                n = t.av;
              yn || this.N_(i, n);
            }
          }),
          (t.prototype.Yc = function (t) {
            if (((this.f_ = !1), (this.v_ = null !== this.c_), this.w_)) {
              if (
                (this.S_(),
                document.activeElement !== document.body &&
                  document.activeElement !== document.documentElement)
              )
                l(document.activeElement).blur();
              else {
                var i = document.getSelection();
                null !== i && i.removeAllRanges();
              }
              var n = this.hi();
              if (!this.w_.Ni().ti() && !n.j().ti()) {
                if (null !== this.c_) {
                  var s = n.bf();
                  (this.__ = { x: s.bt(), y: s.gt() }),
                    (this.c_ = { x: t.uv, y: t.av });
                }
                yn || this.N_(t.uv, t.av);
              }
            }
          }),
          (t.prototype.Lc = function (t) {
            if (this.w_) {
              var i = t.uv,
                n = t.av;
              if ((this.D_() && this.T_(), !yn)) {
                this.N_(i, n);
                var s = this.ga(i, n);
                this.hi().cf(s && { vf: s.vf, A_: s.A_ });
              }
            }
          }),
          (t.prototype.qc = function (t) {
            if (null !== this.w_) {
              var i = t.uv,
                n = t.av;
              if (this.o_.rn()) {
                var s = this.hi().bf().I();
                this.o_.hn(s, { x: i, y: n });
              }
              this.B_();
            }
          }),
          (t.prototype.Wc = function (t) {
            if (null !== this.w_) {
              var i = this.hi(),
                n = t.uv,
                s = t.av;
              if (null !== this.c_) {
                this.v_ = !1;
                var h = l(this.__),
                  r = h.x + (n - this.c_.x),
                  e = h.y + (s - this.c_.y);
                this.N_(r, e);
              } else this.D_() || this.N_(n, s);
              if (!i.j().ti()) {
                var u = this.M_.ct(),
                  a = u.handleScroll,
                  o = u.kineticScroll;
                if (
                  (a.pressedMouseMove && "touch" !== t.ke) ||
                  ((a.horzTouchDrag || a.vertTouchDrag) && "mouse" !== t.ke)
                ) {
                  var f = this.w_.Ni(),
                    c = performance.now();
                  null !== this.u_ ||
                    this.L_() ||
                    (this.u_ = { x: t.sv, y: t.hv, Dh: c, uv: t.uv, av: t.av }),
                    null !== this.d_ && this.d_.tc(t.uv, c),
                    null === this.u_ ||
                      this.a_ ||
                      (this.u_.x === t.sv && this.u_.y === t.hv) ||
                      (null === this.d_ &&
                        (("touch" === t.ke && o.touch) ||
                          ("mouse" === t.ke && o.mouse)) &&
                        ((this.d_ = new gn(0.2, 7, 0.997, 15)),
                        this.d_.tc(this.u_.uv, this.u_.Dh),
                        this.d_.tc(t.uv, c)),
                      f.ti() || i.Dl(this.w_, f, t.av),
                      i.xf(t.uv),
                      (this.a_ = !0)),
                    this.a_ && (f.ti() || i.Tl(this.w_, f, t.av), i.Nf(t.uv));
                }
              }
            }
          }),
          (t.prototype.Ic = function (t) {
            null !== this.w_ && ((this.f_ = !1), this.E_(t));
          }),
          (t.prototype.nv = function (t) {
            if (((this.f_ = !0), null === this.c_ && Bn)) {
              var i = { x: t.uv, y: t.av };
              this.F_(i, i);
            }
          }),
          (t.prototype.iv = function (t) {
            null !== this.w_ && (this.w_.vt().cf(null), kn || this.T_());
          }),
          (t.prototype.V_ = function () {
            return this.o_;
          }),
          (t.prototype.Xc = function () {
            (this.l_ = 1), this.S_();
          }),
          (t.prototype.Zc = function (t, i) {
            if (this.M_.ct().handleScale.pinch) {
              var n = 5 * (i - this.l_);
              (this.l_ = i), this.hi().kf(t.g, n);
            }
          }),
          (t.prototype.ga = function (t, i) {
            var n = this.w_;
            if (null === n) return null;
            for (var s = 0, h = n.Os(); s < h.length; s++) {
              var r = h[s],
                e = this.O_(r.Wi(n), t, i);
              if (null !== e) return { vf: r, vv: e.vv, A_: e.A_ };
            }
            return null;
          }),
          (t.prototype.P_ = function (t, i) {
            l("left" === i ? this.r_ : this.e_).$v(new vn(t, this.gv.ht));
          }),
          (t.prototype.W_ = function () {
            return this.gv;
          }),
          (t.prototype.$v = function (t) {
            if (t.st < 0 || t.ht < 0)
              throw new Error(
                "Try to set invalid size to PaneWidget " + JSON.stringify(t)
              );
            this.gv.on(t) ||
              ((this.gv = t),
              this.Lv.resizeCanvas({ width: t.st, height: t.ht }),
              this.Ev.resizeCanvas({ width: t.st, height: t.ht }),
              (this.m_.style.width = t.st + "px"),
              (this.m_.style.height = t.ht + "px"));
          }),
          (t.prototype.z_ = function () {
            var t = l(this.w_);
            t.yl(t.kl()), t.yl(t.Cl());
            for (var i = 0, n = t.Vs(); i < n.length; i++) {
              var s = n[i];
              if (t.Uu(s)) {
                var h = s.$();
                null !== h && t.yl(h), s.Ii();
              }
            }
          }),
          (t.prototype.s_ = function () {
            return this.Lv.canvas;
          }),
          (t.prototype.Jv = function (t) {
            if (0 !== t && null !== this.w_) {
              if (
                (t > 1 && this.z_(),
                null !== this.r_ && this.r_.Jv(t),
                null !== this.e_ && this.e_.Jv(t),
                1 !== t)
              ) {
                var i = dn(this.Lv.canvas);
                i.save(),
                  this.Qv(i, this.Lv.pixelRatio),
                  this.w_ &&
                    (this.R_(i, this.Lv.pixelRatio),
                    this.I_(i, this.Lv.pixelRatio),
                    this.j_(i, this.Lv.pixelRatio, Fn)),
                  i.restore();
              }
              var n = dn(this.Ev.canvas);
              n.clearRect(
                0,
                0,
                Math.ceil(this.gv.st * this.Ev.pixelRatio),
                Math.ceil(this.gv.ht * this.Ev.pixelRatio)
              ),
                this.j_(n, this.Lv.pixelRatio, Vn),
                this.q_(n, this.Ev.pixelRatio);
            }
          }),
          (t.prototype.U_ = function () {
            return this.r_;
          }),
          (t.prototype.H_ = function () {
            return this.e_;
          }),
          (t.prototype.b_ = function () {
            null !== this.w_ && this.w_.Vl().sn(this), (this.w_ = null);
          }),
          (t.prototype.Qv = function (t, i) {
            var n = this;
            W(t, i, function () {
              var i = n.hi(),
                s = i.Rf(),
                h = i.zf();
              s === h
                ? z(t, 0, 0, n.gv.st, n.gv.ht, h)
                : R(t, 0, 0, n.gv.st, n.gv.ht, s, h);
            });
          }),
          (t.prototype.R_ = function (t, i) {
            var n = l(this.w_),
              s = n.Ol().sl().W(n.Mt(), n.wt());
            null !== s && (t.save(), s.h(t, i, !1), t.restore());
          }),
          (t.prototype.I_ = function (t, i) {
            var n = this.hi().Mf();
            this.Y_(t, i, Fn, Ln, n), this.Y_(t, i, Fn, En, n);
          }),
          (t.prototype.q_ = function (t, i) {
            this.Y_(t, i, Fn, En, this.hi().bf());
          }),
          (t.prototype.j_ = function (t, i, n) {
            for (var s = l(this.w_).Os(), h = 0, r = s; h < r.length; h++) {
              var e = r[h];
              this.Y_(t, i, n, Ln, e);
            }
            for (var u = 0, a = s; u < a.length; u++) {
              e = a[u];
              this.Y_(t, i, n, En, e);
            }
          }),
          (t.prototype.Y_ = function (t, i, n, s, h) {
            for (
              var r = l(this.w_),
                e = n(h, r),
                u = r.Mt(),
                a = r.wt(),
                o = r.vt().ff(),
                f = null !== o && o.vf === h,
                c = null !== o && f && void 0 !== o.A_ ? o.A_.pa : void 0,
                v = 0,
                _ = e;
              v < _.length;
              v++
            ) {
              var d = _[v].W(u, a);
              null !== d && (t.save(), s(d, t, i, f, c), t.restore());
            }
          }),
          (t.prototype.O_ = function (t, i, n) {
            for (var s = 0, h = t; s < h.length; s++) {
              var r = h[s],
                e = r.W(this.gv.ht, this.gv.st);
              if (null !== e && e.ga) {
                var u = e.ga(i, n);
                if (null !== u) return { vv: r, A_: u };
              }
            }
            return null;
          }),
          (t.prototype.x_ = function () {
            if (null !== this.w_) {
              var t = this.M_,
                i = this.w_.kl().ct().visible,
                n = this.w_.Cl().ct().visible;
              i ||
                null === this.r_ ||
                (this.g_.removeChild(this.r_.jv()),
                this.r_.en(),
                (this.r_ = null)),
                n ||
                  null === this.e_ ||
                  (this.p_.removeChild(this.e_.jv()),
                  this.e_.en(),
                  (this.e_ = null));
              var s = t.vt().Ef();
              i &&
                null === this.r_ &&
                ((this.r_ = new An(this, t.ct().layout, s, "left")),
                this.g_.appendChild(this.r_.jv())),
                n &&
                  null === this.e_ &&
                  ((this.e_ = new An(this, t.ct().layout, s, "right")),
                  this.p_.appendChild(this.e_.jv()));
            }
          }),
          (t.prototype.D_ = function () {
            return Bn && null === this.c_;
          }),
          (t.prototype.L_ = function () {
            return (Bn && this.f_) || null !== this.c_;
          }),
          (t.prototype.K_ = function (t) {
            return Math.max(0, Math.min(t, this.gv.st - 1));
          }),
          (t.prototype.X_ = function (t) {
            return Math.max(0, Math.min(t, this.gv.ht - 1));
          }),
          (t.prototype.N_ = function (t, i) {
            this.hi().Af(this.K_(t), this.X_(i), l(this.w_));
          }),
          (t.prototype.T_ = function () {
            this.hi().Bf();
          }),
          (t.prototype.B_ = function () {
            this.v_ && ((this.c_ = null), this.T_());
          }),
          (t.prototype.F_ = function (t, i) {
            (this.c_ = t), (this.v_ = !1), this.N_(i.x, i.y);
            var n = this.hi().bf();
            this.__ = { x: n.bt(), y: n.gt() };
          }),
          (t.prototype.hi = function () {
            return this.M_.vt();
          }),
          (t.prototype.Z_ = function () {
            var t = this.hi(),
              i = this.Zv(),
              n = i.Ni();
            t.Al(i, n), t.Sf(), (this.u_ = null), (this.a_ = !1);
          }),
          (t.prototype.E_ = function (t) {
            var i = this;
            if (this.a_) {
              var n = performance.now();
              if (
                (null !== this.d_ && this.d_.ia(t.uv, n),
                null === this.d_ || this.d_.nc(n))
              )
                this.Z_();
              else {
                var s = this.hi(),
                  h = s.j(),
                  r = this.d_,
                  e = function () {
                    if (!r.hc()) {
                      var t = performance.now(),
                        n = r.nc(t);
                      if (!r.hc()) {
                        var u = h.zr();
                        s.Nf(r.ic(t)), u === h.zr() && ((n = !0), (i.d_ = null));
                      }
                      n ? i.Z_() : requestAnimationFrame(e);
                    }
                  };
                requestAnimationFrame(e);
              }
            }
          }),
          (t.prototype.S_ = function () {
            var t = performance.now(),
              i = null === this.d_ || this.d_.nc(t);
            null !== this.d_ && (i || this.Z_()),
              null !== this.d_ && (this.d_.rc(), (this.d_ = null));
          }),
          t
        );
      })(),
      Pn = (function () {
        function t(t, i, n, s, h) {
          var r = this;
          (this.L = !0),
            (this.gv = new vn(0, 0)),
            (this.Nv = function () {
              return r.Jv(3);
            }),
            (this.Av = "left" === t),
            (this.tf = n.Ef),
            (this.ki = i),
            (this.J_ = s),
            (this.G_ = h),
            (this.Bv = document.createElement("div")),
            (this.Bv.style.width = "25px"),
            (this.Bv.style.height = "100%"),
            (this.Bv.style.overflow = "hidden"),
            (this.Lv = Mn(this.Bv, new vn(16, 16))),
            this.Lv.subscribeCanvasConfigured(this.Nv);
        }
        return (
          (t.prototype.en = function () {
            this.Lv.unsubscribeCanvasConfigured(this.Nv), this.Lv.destroy();
          }),
          (t.prototype.jv = function () {
            return this.Bv;
          }),
          (t.prototype.W_ = function () {
            return this.gv;
          }),
          (t.prototype.$v = function (t) {
            if (t.st < 0 || t.ht < 0)
              throw new Error(
                "Try to set invalid size to PriceAxisStub " + JSON.stringify(t)
              );
            this.gv.on(t) ||
              ((this.gv = t),
              this.Lv.resizeCanvas({ width: t.st, height: t.ht }),
              (this.Bv.style.width = t.st + "px"),
              (this.Bv.style.minWidth = t.st + "px"),
              (this.Bv.style.height = t.ht + "px"),
              (this.L = !0));
          }),
          (t.prototype.Jv = function (t) {
            if ((!(t < 3) || this.L) && 0 !== this.gv.st && 0 !== this.gv.ht) {
              this.L = !1;
              var i = dn(this.Lv.canvas);
              this.Qv(i, this.Lv.pixelRatio), this.yu(i, this.Lv.pixelRatio);
            }
          }),
          (t.prototype.s_ = function () {
            return this.Lv.canvas;
          }),
          (t.prototype.yu = function (t, i) {
            if (this.J_()) {
              var n = this.gv.st;
              t.save(), (t.fillStyle = this.ki.timeScale.borderColor);
              var s = Math.floor(this.tf.ct().Tt * i),
                h = this.Av ? Math.round(n * i) - s : 0;
              t.fillRect(h, 0, s, s), t.restore();
            }
          }),
          (t.prototype.Qv = function (t, i) {
            var n = this;
            W(t, i, function () {
              z(t, 0, 0, n.gv.st, n.gv.ht, n.G_());
            });
          }),
          t
        );
      })();
    function Wn(t, i) {
      return t.Rh > i.Rh ? t : i;
    }
    var zn = (function () {
        function t(t) {
          var i = this;
          (this.Q_ = null),
            (this.td = null),
            (this.oe = null),
            (this.nd = !1),
            (this.gv = new vn(0, 0)),
            (this.sd = new tt()),
            (this.kv = new mi(5)),
            (this.Nv = function () {
              return i.M_.vt().Or();
            }),
            (this.Tv = function () {
              return i.M_.vt().Or();
            }),
            (this.M_ = t),
            (this.ki = t.ct().layout),
            (this.hd = document.createElement("tr")),
            (this.rd = document.createElement("td")),
            (this.rd.style.padding = "0"),
            (this.ed = document.createElement("td")),
            (this.ed.style.padding = "0"),
            (this.Bv = document.createElement("td")),
            (this.Bv.style.height = "25px"),
            (this.Bv.style.padding = "0"),
            (this.ud = document.createElement("div")),
            (this.ud.style.width = "100%"),
            (this.ud.style.height = "100%"),
            (this.ud.style.position = "relative"),
            (this.ud.style.overflow = "hidden"),
            this.Bv.appendChild(this.ud),
            (this.Lv = Mn(this.ud, new vn(16, 16))),
            this.Lv.subscribeCanvasConfigured(this.Nv);
          var n = this.Lv.canvas;
          (n.style.position = "absolute"),
            (n.style.zIndex = "1"),
            (n.style.left = "0"),
            (n.style.top = "0"),
            (this.Ev = Mn(this.ud, new vn(16, 16))),
            this.Ev.subscribeCanvasConfigured(this.Tv);
          var s = this.Ev.canvas;
          (s.style.position = "absolute"),
            (s.style.zIndex = "2"),
            (s.style.left = "0"),
            (s.style.top = "0"),
            this.hd.appendChild(this.rd),
            this.hd.appendChild(this.Bv),
            this.hd.appendChild(this.ed),
            this.ad(),
            this.M_.vt().dl().Ji(this.ad.bind(this), this),
            (this.Iv = new Cn(this.Ev.canvas, this, { Oc: !0, Pc: !1 }));
        }
        return (
          (t.prototype.en = function () {
            this.Iv.en(),
              null !== this.Q_ && this.Q_.en(),
              null !== this.td && this.td.en(),
              this.Ev.unsubscribeCanvasConfigured(this.Tv),
              this.Ev.destroy(),
              this.Lv.unsubscribeCanvasConfigured(this.Nv),
              this.Lv.destroy();
          }),
          (t.prototype.jv = function () {
            return this.hd;
          }),
          (t.prototype.od = function () {
            return this.Q_;
          }),
          (t.prototype.ld = function () {
            return this.td;
          }),
          (t.prototype.Yc = function (t) {
            if (!this.nd) {
              this.nd = !0;
              var i = this.M_.vt();
              !i.j().ti() &&
                this.M_.ct().handleScale.axisPressedMouseMove.time &&
                i.yf(t.uv);
            }
          }),
          (t.prototype.Kc = function () {
            var t = this.M_.vt();
            !t.j().ti() &&
              this.nd &&
              ((this.nd = !1),
              this.M_.ct().handleScale.axisPressedMouseMove.time && t.Tf());
          }),
          (t.prototype.Wc = function (t) {
            var i = this.M_.vt();
            !i.j().ti() &&
              this.M_.ct().handleScale.axisPressedMouseMove.time &&
              i.Df(t.uv);
          }),
          (t.prototype.Ic = function (t) {
            this.nd = !1;
            var i = this.M_.vt();
            (i.j().ti() && !this.M_.ct().handleScale.axisPressedMouseMove.time) ||
              i.Tf();
          }),
          (t.prototype.jc = function () {
            this.M_.ct().handleScale.axisDoubleClickReset && this.M_.vt().xe();
          }),
          (t.prototype.Bc = function (t) {
            this.M_.vt().ct().handleScale.axisPressedMouseMove.time && this.h_(1);
          }),
          (t.prototype.iv = function (t) {
            this.h_(0);
          }),
          (t.prototype.W_ = function () {
            return this.gv;
          }),
          (t.prototype.fd = function () {
            return this.sd;
          }),
          (t.prototype.vd = function (t, i, n) {
            (this.gv && this.gv.on(t)) ||
              ((this.gv = t),
              this.Lv.resizeCanvas({ width: t.st, height: t.ht }),
              this.Ev.resizeCanvas({ width: t.st, height: t.ht }),
              (this.Bv.style.width = t.st + "px"),
              (this.Bv.style.height = t.ht + "px"),
              this.sd.hn(t)),
              null !== this.Q_ && this.Q_.$v(new vn(i, t.ht)),
              null !== this.td && this.td.$v(new vn(n, t.ht));
          }),
          (t.prototype._d = function () {
            var t = this.dd();
            return Math.ceil(t.Tt + t.Dt + t.Pt + t.At + t.Bt);
          }),
          (t.prototype.O = function () {
            this.M_.vt().j().En();
          }),
          (t.prototype.s_ = function () {
            return this.Lv.canvas;
          }),
          (t.prototype.Jv = function (t) {
            if (0 !== t) {
              if (1 !== t) {
                var i = dn(this.Lv.canvas);
                this.Qv(i, this.Lv.pixelRatio),
                  this.yu(i, this.Lv.pixelRatio),
                  this.t_(i, this.Lv.pixelRatio),
                  null !== this.Q_ && this.Q_.Jv(t),
                  null !== this.td && this.td.Jv(t);
              }
              var n = dn(this.Ev.canvas),
                s = this.Ev.pixelRatio;
              n.clearRect(
                0,
                0,
                Math.ceil(this.gv.st * s),
                Math.ceil(this.gv.ht * s)
              ),
                this.wd([this.M_.vt().bf()], n, s);
            }
          }),
          (t.prototype.Qv = function (t, i) {
            var n = this;
            W(t, i, function () {
              z(t, 0, 0, n.gv.st, n.gv.ht, n.M_.vt().zf());
            });
          }),
          (t.prototype.yu = function (t, i) {
            if (this.M_.ct().timeScale.borderVisible) {
              t.save(), (t.fillStyle = this.Md());
              var n = Math.max(1, Math.floor(this.dd().Tt * i));
              t.fillRect(0, 0, Math.ceil(this.gv.st * i), n), t.restore();
            }
          }),
          (t.prototype.t_ = function (t, i) {
            var n = this,
              s = this.M_.vt().j().En();
            if (s && 0 !== s.length) {
              var h = s.reduce(Wn, s[0]).Rh;
              h > 30 && h < 50 && (h = 30), t.save(), (t.strokeStyle = this.Md());
              var r = this.dd(),
                e = r.Tt + r.Dt + r.At + r.Pt - r.Ot;
              (t.textAlign = "center"), (t.fillStyle = this.Md());
              var u = Math.floor(this.dd().Tt * i),
                a = Math.max(1, Math.floor(i)),
                o = Math.floor(0.5 * i);
              if (this.M_.vt().j().ct().borderVisible) {
                t.beginPath();
                for (var l = Math.round(r.Dt * i), f = s.length; f--; ) {
                  var c = Math.round(s[f].Tn * i);
                  t.rect(c - o, u, a, l);
                }
                t.fill();
              }
              (t.fillStyle = this.ve()),
                W(t, i, function () {
                  t.font = n.bd();
                  for (var i = 0, r = s; i < r.length; i++) {
                    if ((l = r[i]).Rh < h) {
                      var u = l.Ir ? n.md(t, l.Tn, l.An) : l.Tn;
                      t.fillText(l.An, u, e);
                    }
                  }
                  t.font = n.gd();
                  for (var a = 0, o = s; a < o.length; a++) {
                    var l;
                    if ((l = o[a]).Rh >= h) {
                      u = l.Ir ? n.md(t, l.Tn, l.An) : l.Tn;
                      t.fillText(l.An, u, e);
                    }
                  }
                });
            }
          }),
          (t.prototype.md = function (t, i, n) {
            var s = this.kv.Vt(t, n),
              h = s / 2,
              r = Math.floor(i - h) + 0.5;
            return (
              r < 0
                ? (i += Math.abs(0 - r))
                : r + s > this.gv.st && (i -= Math.abs(this.gv.st - (r + s))),
              i
            );
          }),
          (t.prototype.wd = function (t, i, n) {
            for (var s = this.dd(), h = 0, r = t; h < r.length; h++)
              for (var e = 0, u = r[h].ci(); e < u.length; e++) {
                var a = u[e];
                i.save(), a.W().h(i, s, n), i.restore();
              }
          }),
          (t.prototype.Md = function () {
            return this.M_.ct().timeScale.borderColor;
          }),
          (t.prototype.ve = function () {
            return this.ki.textColor;
          }),
          (t.prototype.fe = function () {
            return this.ki.fontSize;
          }),
          (t.prototype.bd = function () {
            return qt(this.fe(), this.ki.fontFamily);
          }),
          (t.prototype.gd = function () {
            return qt(this.fe(), this.ki.fontFamily, "bold");
          }),
          (t.prototype.dd = function () {
            null === this.oe &&
              (this.oe = {
                Tt: 1,
                Ot: NaN,
                At: NaN,
                Bt: NaN,
                si: NaN,
                Dt: 3,
                Pt: NaN,
                xt: "",
                ni: new mi(),
              });
            var t = this.oe,
              i = this.bd();
            if (t.xt !== i) {
              var n = this.fe();
              (t.Pt = n),
                (t.xt = i),
                (t.At = Math.ceil(n / 2.5)),
                (t.Bt = t.At),
                (t.si = Math.ceil(n / 2)),
                (t.Ot = Math.round(this.fe() / 5)),
                t.ni.Ou();
            }
            return this.oe;
          }),
          (t.prototype.h_ = function (t) {
            this.Bv.style.cursor = 1 === t ? "ew-resize" : "default";
          }),
          (t.prototype.ad = function () {
            var t = this.M_.vt(),
              i = t.ct();
            i.leftPriceScale.visible ||
              null === this.Q_ ||
              (this.rd.removeChild(this.Q_.jv()), this.Q_.en(), (this.Q_ = null)),
              i.rightPriceScale.visible ||
                null === this.td ||
                (this.ed.removeChild(this.td.jv()),
                this.td.en(),
                (this.td = null));
            var n = { Ef: this.M_.vt().Ef() },
              s = function () {
                return i.leftPriceScale.borderVisible && t.j().ct().borderVisible;
              },
              h = function () {
                return t.zf();
              };
            i.leftPriceScale.visible &&
              null === this.Q_ &&
              ((this.Q_ = new Pn("left", i, n, s, h)),
              this.rd.appendChild(this.Q_.jv())),
              i.rightPriceScale.visible &&
                null === this.td &&
                ((this.td = new Pn("right", i, n, s, h)),
                this.ed.appendChild(this.td.jv()));
          }),
          t
        );
      })(),
      Rn = (function () {
        function t(t, i) {
          var n;
          (this.pd = []),
            (this.yd = 0),
            (this.Fn = 0),
            (this.$h = 0),
            (this.kd = 0),
            (this.Cd = 0),
            (this.xd = null),
            (this.Nd = !1),
            (this.o_ = new tt()),
            (this.Jl = new tt()),
            (this.ki = i),
            (this.hd = document.createElement("div")),
            this.hd.classList.add("tv-lightweight-charts"),
            (this.hd.style.overflow = "hidden"),
            (this.hd.style.width = "100%"),
            (this.hd.style.height = "100%"),
            ((n = this.hd).style.userSelect = "none"),
            (n.style.webkitUserSelect = "none"),
            (n.style.msUserSelect = "none"),
            (n.style.MozUserSelect = "none"),
            (n.style.webkitTapHighlightColor = "transparent"),
            (this.Sd = document.createElement("table")),
            this.Sd.setAttribute("cellspacing", "0"),
            this.hd.appendChild(this.Sd),
            (this.Dd = this.Td.bind(this)),
            this.hd.addEventListener("wheel", this.Dd, { passive: !1 }),
            (this.hi = new ln(this.Ql.bind(this), this.ki)),
            this.vt().mf().Ji(this.Ad.bind(this), this),
            (this.Bd = new zn(this)),
            this.Sd.appendChild(this.Bd.jv());
          var s = this.ki.width,
            h = this.ki.height;
          if (0 === s || 0 === h) {
            var r = t.getBoundingClientRect();
            0 === s && ((s = Math.floor(r.width)), (s -= s % 2)),
              0 === h && ((h = Math.floor(r.height)), (h -= h % 2));
          }
          this.Ld(s, h),
            this.Ed(),
            t.appendChild(this.hd),
            this.Fd(),
            this.hi.j().Jr().Ji(this.hi.uf.bind(this.hi), this),
            this.hi.dl().Ji(this.hi.uf.bind(this.hi), this);
        }
        return (
          (t.prototype.vt = function () {
            return this.hi;
          }),
          (t.prototype.ct = function () {
            return this.ki;
          }),
          (t.prototype.Vd = function () {
            return this.pd;
          }),
          (t.prototype.Od = function () {
            return this.Bd;
          }),
          (t.prototype.en = function () {
            this.hd.removeEventListener("wheel", this.Dd),
              0 !== this.yd && window.cancelAnimationFrame(this.yd),
              this.hi.mf().sn(this),
              this.hi.j().Jr().sn(this),
              this.hi.dl().sn(this),
              this.hi.en();
            for (var t = 0, i = this.pd; t < i.length; t++) {
              var n = i[t];
              this.Sd.removeChild(n.jv()), n.V_().sn(this), n.en();
            }
            (this.pd = []),
              l(this.Bd).en(),
              null !== this.hd.parentElement &&
                this.hd.parentElement.removeChild(this.hd),
              this.Jl.en(),
              this.o_.en();
          }),
          (t.prototype.Ld = function (t, i, n) {
            if ((void 0 === n && (n = !1), this.Fn !== i || this.$h !== t)) {
              (this.Fn = i), (this.$h = t);
              var s = i + "px",
                h = t + "px";
              (l(this.hd).style.height = s),
                (l(this.hd).style.width = h),
                (this.Sd.style.height = s),
                (this.Sd.style.width = h),
                n ? this.Pd(new Yt(3)) : this.hi.uf();
            }
          }),
          (t.prototype.Jv = function (t) {
            void 0 === t && (t = new Yt(3));
            for (var i = 0; i < this.pd.length; i++) this.pd[i].Jv(t.pe(i).me);
            this.ki.timeScale.visible && this.Bd.Jv(t.ge());
          }),
          (t.prototype.rs = function (t) {
            this.hi.rs(t), this.Fd();
            var i = t.width || this.$h,
              n = t.height || this.Fn;
            this.Ld(i, n);
          }),
          (t.prototype.V_ = function () {
            return this.o_;
          }),
          (t.prototype.mf = function () {
            return this.Jl;
          }),
          (t.prototype.Wd = function () {
            var t = this;
            null !== this.xd && (this.Pd(this.xd), (this.xd = null));
            var i = this.pd[0],
              n = wn(document, new vn(this.$h, this.Fn)),
              s = dn(n),
              h = _n(n);
            return (
              W(s, h, function () {
                var n = 0,
                  h = 0,
                  r = function (i) {
                    for (var r = 0; r < t.pd.length; r++) {
                      var e = t.pd[r],
                        u = e.W_().ht,
                        a = l("left" === i ? e.U_() : e.H_()),
                        o = a.s_();
                      s.drawImage(o, n, h, a.Xv(), u), (h += u);
                    }
                  };
                t.zd() && (r("left"), (n = l(i.U_()).Xv())), (h = 0);
                for (var e = 0; e < t.pd.length; e++) {
                  var u = t.pd[e],
                    a = u.W_(),
                    o = u.s_();
                  s.drawImage(o, n, h, a.st, a.ht), (h += a.ht);
                }
                (n += i.W_().st), t.Rd() && ((h = 0), r("right"));
                var f = function (i) {
                  var r = l("left" === i ? t.Bd.od() : t.Bd.ld()),
                    e = r.W_(),
                    u = r.s_();
                  s.drawImage(u, n, h, e.st, e.ht);
                };
                if (t.ki.timeScale.visible) {
                  (n = 0), t.zd() && (f("left"), (n = l(i.U_()).Xv()));
                  var c = t.Bd.W_();
                  o = t.Bd.s_();
                  s.drawImage(o, n, h, c.st, c.ht),
                    t.Rd() && ((n += i.W_().st), f("right"), s.restore());
                }
              }),
              n
            );
          }),
          (t.prototype.Id = function (t) {
            return "none" === t
              ? 0
              : ("left" !== t || this.zd()) && ("right" !== t || this.Rd())
              ? 0 === this.pd.length
                ? 0
                : l("left" === t ? this.pd[0].U_() : this.pd[0].H_()).Xv()
              : 0;
          }),
          (t.prototype.jd = function () {
            for (var t = 0, i = 0, n = 0, s = 0, h = this.pd; s < h.length; s++) {
              var r = h[s];
              this.zd() && (i = Math.max(i, l(r.U_()).Yv())),
                this.Rd() && (n = Math.max(n, l(r.H_()).Yv())),
                (t += r.wl());
            }
            var e = this.$h,
              u = this.Fn,
              a = Math.max(e - i - n, 0),
              o = this.ki.timeScale.visible,
              f = o ? this.Bd._d() : 0;
            f % 2 && (f += 1);
            for (
              var c = 0 + f, v = u < c ? 0 : u - c, _ = v / t, d = 0, w = 0;
              w < this.pd.length;
              ++w
            ) {
              (r = this.pd[w]).C_(this.hi.wf()[w]);
              var M,
                b = 0;
              (b = w === this.pd.length - 1 ? v - d : Math.round(r.wl() * _)),
                (d += M = Math.max(b, 2)),
                r.$v(new vn(a, M)),
                this.zd() && r.P_(i, "left"),
                this.Rd() && r.P_(n, "right"),
                r.Zv() && this.hi.gf(r.Zv(), M);
            }
            this.Bd.vd(new vn(o ? a : 0, f), o ? i : 0, o ? n : 0),
              this.hi.Dr(a),
              this.kd !== i && (this.kd = i),
              this.Cd !== n && (this.Cd = n);
          }),
          (t.prototype.Td = function (t) {
            var i = t.deltaX / 100,
              n = -t.deltaY / 100;
            if (
              (0 !== i && this.ki.handleScroll.mouseWheel) ||
              (0 !== n && this.ki.handleScale.mouseWheel)
            ) {
              switch ((t.cancelable && t.preventDefault(), t.deltaMode)) {
                case t.DOM_DELTA_PAGE:
                  (i *= 120), (n *= 120);
                  break;
                case t.DOM_DELTA_LINE:
                  (i *= 32), (n *= 32);
              }
              if (0 !== n && this.ki.handleScale.mouseWheel) {
                var s = Math.sign(n) * Math.min(1, Math.abs(n)),
                  h = t.clientX - this.hd.getBoundingClientRect().left;
                this.vt().kf(h, s);
              }
              0 !== i && this.ki.handleScroll.mouseWheel && this.vt().Cf(-80 * i);
            }
          }),
          (t.prototype.Pd = function (t) {
            var i = t.ge();
            if ((3 === i && this.qd(), 3 === i || 2 === i)) {
              for (var n = this.hi.wf(), s = 0; s < n.length; s++)
                t.pe(s)._s && n[s].El();
              for (var h = t.Ne(), r = 0, e = h; r < e.length; r++) {
                var u = e[r];
                this.Se(u);
              }
              h.length > 0 && (this.hi.Vr(), this.hi.Fo(), this.hi.Or()),
                this.Bd.O();
            }
            this.Jv(t);
          }),
          (t.prototype.Se = function (t) {
            var i = this.hi.j();
            switch (t.ke) {
              case 0:
                i.Qr();
                break;
              case 1:
                i.te(t.X);
                break;
              case 2:
                i.wr(t.X);
                break;
              case 3:
                i.Mr(t.X);
                break;
              case 4:
                i.jr();
            }
          }),
          (t.prototype.Ql = function (t) {
            var i = this;
            null !== this.xd ? this.xd._n(t) : (this.xd = t),
              this.Nd ||
                ((this.Nd = !0),
                (this.yd = window.requestAnimationFrame(function () {
                  (i.Nd = !1),
                    (i.yd = 0),
                    null !== i.xd && (i.Pd(i.xd), (i.xd = null));
                })));
          }),
          (t.prototype.qd = function () {
            this.Ed();
          }),
          (t.prototype.Ed = function () {
            for (
              var t = this.hi.wf(), i = t.length, n = this.pd.length, s = i;
              s < n;
              s++
            ) {
              var h = o(this.pd.pop());
              this.Sd.removeChild(h.jv()), h.V_().sn(this), h.en();
            }
            for (s = n; s < i; s++) {
              (h = new On(this, t[s])).V_().Ji(this.Ud.bind(this), this),
                this.pd.push(h),
                this.Sd.insertBefore(h.jv(), this.Bd.jv());
            }
            for (s = 0; s < i; s++) {
              var r = t[s];
              (h = this.pd[s]).Zv() !== r ? h.C_(r) : h.k_();
            }
            this.Fd(), this.jd();
          }),
          (t.prototype.Hd = function (t, i) {
            var n,
              s = new Map();
            null !== t &&
              this.hi.P().forEach(function (i) {
                var n = i.Ea(t);
                null !== n && s.set(i, n);
              });
            if (null !== t) {
              var h = this.hi.j().ri(t);
              null !== h && (n = h);
            }
            var r = this.vt().ff(),
              e = null !== r && r.vf instanceof tn ? r.vf : void 0,
              u = null !== r && void 0 !== r.A_ ? r.A_.ka : void 0;
            return { S: n, Yd: i || void 0, Kd: e, $d: s, Xd: u };
          }),
          (t.prototype.Ud = function (t, i) {
            var n = this;
            this.o_.hn(function () {
              return n.Hd(t, i);
            });
          }),
          (t.prototype.Ad = function (t, i) {
            var n = this;
            this.Jl.hn(function () {
              return n.Hd(t, i);
            });
          }),
          (t.prototype.Fd = function () {
            var t = this.ki.timeScale.visible ? "" : "none";
            this.Bd.jv().style.display = t;
          }),
          (t.prototype.zd = function () {
            return this.pd[0].Zv().kl().ct().visible;
          }),
          (t.prototype.Rd = function () {
            return this.pd[0].Zv().Cl().ct().visible;
          }),
          t
        );
      })();
    function In(t, i, n) {
      var s = n.value,
        h = { zh: i, S: t, X: [s, s, s, s] };
      return "color" in n && void 0 !== n.color && (h.et = n.color), h;
    }
    function jn(t, i, n) {
      return { zh: i, S: t, X: [n.open, n.high, n.low, n.close] };
    }
    function qn(t) {
      return void 0 !== t.X;
    }
    function Un(t) {
      return function (i, n, s) {
        return void 0 === (h = s).open && void 0 === h.value
          ? { S: i, zh: n }
          : t(i, n, s);
        var h;
      };
    }
    var Hn = {
      Candlestick: Un(jn),
      Bar: Un(jn),
      Area: Un(In),
      Baseline: Un(In),
      Histogram: Un(In),
      Line: Un(In),
    };
    function Yn(t) {
      return Hn[t];
    }
    function Kn(t) {
      return 60 * t * 60 * 1e3;
    }
    function $n(t) {
      return 60 * t * 1e3;
    }
    var Xn,
      Zn = [
        { Zd: ((Xn = 1), 1e3 * Xn), Rh: 10 },
        { Zd: $n(1), Rh: 20 },
        { Zd: $n(5), Rh: 21 },
        { Zd: $n(30), Rh: 22 },
        { Zd: Kn(1), Rh: 30 },
        { Zd: Kn(3), Rh: 31 },
        { Zd: Kn(6), Rh: 32 },
        { Zd: Kn(12), Rh: 33 },
      ];
    function Jn(t, i) {
      if (t.getUTCFullYear() !== i.getUTCFullYear()) return 70;
      if (t.getUTCMonth() !== i.getUTCMonth()) return 60;
      if (t.getUTCDate() !== i.getUTCDate()) return 50;
      for (var n = Zn.length - 1; n >= 0; --n)
        if (
          Math.floor(i.getTime() / Zn[n].Zd) !==
          Math.floor(t.getTime() / Zn[n].Zd)
        )
          return Zn[n].Rh;
      return 0;
    }
    function Gn(t, i) {
      if ((void 0 === i && (i = 0), 0 !== t.length)) {
        for (
          var n = 0 === i ? null : t[i - 1].S.Dh,
            s = null !== n ? new Date(1e3 * n) : null,
            h = 0,
            r = i;
          r < t.length;
          ++r
        ) {
          var e = t[r],
            u = new Date(1e3 * e.S.Dh);
          null !== s && (e.Wh = Jn(u, s)),
            (h += e.S.Dh - (n || e.S.Dh)),
            (n = e.S.Dh),
            (s = u);
        }
        if (0 === i && t.length > 1) {
          var a = Math.ceil(h / (t.length - 1)),
            o = new Date(1e3 * (t[0].S.Dh - a));
          t[0].Wh = Jn(new Date(1e3 * t[0].S.Dh), o);
        }
      }
    }
    function Qn(t) {
      if (!Rt(t)) throw new Error("time must be of type BusinessDay");
      var i = new Date(Date.UTC(t.year, t.month - 1, t.day, 0, 0, 0, 0));
      return { Dh: Math.round(i.getTime() / 1e3), Sh: t };
    }
    function ts(t) {
      if (!It(t)) throw new Error("time must be of type isUTCTimestamp");
      return { Dh: t };
    }
    function is(t) {
      return 0 === t.length ? null : Rt(t[0].time) ? Qn : ts;
    }
    function ns(t) {
      return It(t) ? ts(t) : Rt(t) ? Qn(t) : Qn(ss(t));
    }
    function ss(t) {
      var i = new Date(t);
      if (isNaN(i.getTime()))
        throw new Error(
          "Invalid date string=" + t + ", expected format=yyyy-mm-dd"
        );
      return {
        day: i.getUTCDate(),
        month: i.getUTCMonth() + 1,
        year: i.getUTCFullYear(),
      };
    }
    function hs(t) {
      d(t.time) && (t.time = ss(t.time));
    }
    function rs(t) {
      return { zh: 0, Jd: new Map(), Rs: t };
    }
    var es = (function () {
      function t() {
        (this.Gd = new Map()),
          (this.Qd = new Map()),
          (this.tw = new Map()),
          (this.iw = []);
      }
      return (
        (t.prototype.en = function () {
          this.Gd.clear(), this.Qd.clear(), this.tw.clear(), (this.iw = []);
        }),
        (t.prototype.nw = function (t, i) {
          var n = this,
            s = 0 !== this.Gd.size,
            h = !1;
          if (this.Qd.has(t))
            if (1 === this.Qd.size) (s = !1), (h = !0), this.Gd.clear();
            else
              for (var r = 0, e = this.iw; r < e.length; r++) {
                e[r].pointData.Jd.delete(t) && (h = !0);
              }
          var u = [];
          if (0 !== i.length) {
            !(function (t) {
              t.forEach(hs);
            })(i);
            var a = l(is(i)),
              o = Yn(t.Ya());
            u = i.map(function (i) {
              var s = a(i.time),
                r = n.Gd.get(s.Dh);
              void 0 === r && ((r = rs(s)), n.Gd.set(s.Dh, r), (h = !0));
              var e = o(s, r.zh, i);
              return r.Jd.set(t, e), e;
            });
          }
          s && this.sw(), this.hw(t, u);
          var f = -1;
          if (h) {
            var c = [];
            this.Gd.forEach(function (t) {
              c.push({ Wh: 0, S: t.Rs, pointData: t });
            }),
              c.sort(function (t, i) {
                return t.S.Dh - i.S.Dh;
              }),
              (f = this.rw(c));
          }
          return this.ew(t, f);
        }),
        (t.prototype.Of = function (t) {
          return this.nw(t, []);
        }),
        (t.prototype.uw = function (t, i) {
          hs(i);
          var n = l(is([i]))(i.time),
            s = this.tw.get(t);
          if (void 0 !== s && n.Dh < s.Dh)
            throw new Error(
              "Cannot update oldest data, last time=" +
                s.Dh +
                ", new time=" +
                n.Dh
            );
          var h = this.Gd.get(n.Dh),
            r = void 0 === h;
          void 0 === h && ((h = rs(n)), this.Gd.set(n.Dh, h));
          var e = Yn(t.Ya())(n, h.zh, i);
          if ((h.Jd.set(t, e), this.aw(t, e), !r)) return this.ew(t, -1);
          var u = { Wh: 0, S: h.Rs, pointData: h },
            a = At(this.iw, u.S.Dh, function (t, i) {
              return t.S.Dh < i;
            });
          this.iw.splice(a, 0, u);
          for (var o = a; o < this.iw.length; ++o) us(this.iw[o].pointData, o);
          return Gn(this.iw, a), this.ew(t, a);
        }),
        (t.prototype.aw = function (t, i) {
          var n = this.Qd.get(t);
          void 0 === n && ((n = []), this.Qd.set(t, n));
          var s = 0 !== n.length ? n[n.length - 1] : null;
          null === s || i.S.Dh > s.S.Dh
            ? qn(i) && n.push(i)
            : qn(i)
            ? (n[n.length - 1] = i)
            : n.splice(-1, 1),
            this.tw.set(t, i.S);
        }),
        (t.prototype.hw = function (t, i) {
          0 !== i.length
            ? (this.Qd.set(t, i.filter(qn)), this.tw.set(t, i[i.length - 1].S))
            : (this.Qd.delete(t), this.tw.delete(t));
        }),
        (t.prototype.sw = function () {
          for (var t = 0, i = this.iw; t < i.length; t++) {
            var n = i[t];
            0 === n.pointData.Jd.size && this.Gd.delete(n.S.Dh);
          }
        }),
        (t.prototype.rw = function (t) {
          for (var i = -1, n = 0; n < this.iw.length && n < t.length; ++n) {
            var s = this.iw[n],
              h = t[n];
            if (s.S.Dh !== h.S.Dh) {
              i = n;
              break;
            }
            (h.Wh = s.Wh), us(h.pointData, n);
          }
          if (
            (-1 === i &&
              this.iw.length !== t.length &&
              (i = Math.min(this.iw.length, t.length)),
            -1 === i)
          )
            return -1;
          for (n = i; n < t.length; ++n) us(t[n].pointData, n);
          return Gn(t, i), (this.iw = t), i;
        }),
        (t.prototype.ow = function () {
          if (0 === this.Qd.size) return null;
          var t = 0;
          return (
            this.Qd.forEach(function (i) {
              0 !== i.length && (t = Math.max(t, i[i.length - 1].zh));
            }),
            t
          );
        }),
        (t.prototype.ew = function (t, i) {
          var n = { lw: new Map(), j: { Br: this.ow() } };
          if (-1 !== i)
            this.Qd.forEach(function (t, i) {
              n.lw.set(i, { Zu: t });
            }),
              this.Qd.has(t) || n.lw.set(t, { Zu: [] }),
              (n.j.fw = this.iw),
              (n.j.cw = i);
          else {
            var s = this.Qd.get(t);
            n.lw.set(t, { Zu: s || [] });
          }
          return n;
        }),
        t
      );
    })();
    function us(t, i) {
      (t.zh = i),
        t.Jd.forEach(function (t) {
          t.zh = i;
        });
    }
    var as = {
        color: "#FF0000",
        price: 0,
        lineStyle: 2,
        lineWidth: 1,
        axisLabelVisible: !0,
        title: "",
      },
      os = (function () {
        function t(t) {
          this.Ia = t;
        }
        return (
          (t.prototype.applyOptions = function (t) {
            this.Ia.rs(t);
          }),
          (t.prototype.options = function () {
            return this.Ia.ct();
          }),
          (t.prototype._w = function () {
            return this.Ia;
          }),
          t
        );
      })();
    function ls(t) {
      var i = t.overlay,
        n = (function (t, i) {
          var n = {};
          for (var s in t)
            Object.prototype.hasOwnProperty.call(t, s) &&
              i.indexOf(s) < 0 &&
              (n[s] = t[s]);
          if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
            var h = 0;
            for (s = Object.getOwnPropertySymbols(t); h < s.length; h++)
              i.indexOf(s[h]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(t, s[h]) &&
                (n[s[h]] = t[s[h]]);
          }
          return n;
        })(t, ["overlay"]);
      return i && (n.priceScaleId = ""), n;
    }
    var fs = (function () {
        function t(t, i, n) {
          (this.qe = t), (this.dw = i), (this.ww = n);
        }
        return (
          (t.prototype.priceFormatter = function () {
            return this.qe.$s();
          }),
          (t.prototype.priceToCoordinate = function (t) {
            var i = this.qe.H();
            return null === i ? null : this.qe.$().K(t, i.X);
          }),
          (t.prototype.coordinateToPrice = function (t) {
            var i = this.qe.H();
            return null === i ? null : this.qe.$().Si(t, i.X);
          }),
          (t.prototype.barsInLogicalRange = function (t) {
            if (null === t) return null;
            var i = new Pt(new Et(t.from, t.to)).Hh(),
              n = this.qe.Hi();
            if (n.ti()) return null;
            var s = n.oo(i.hh(), 1),
              h = n.oo(i.rh(), -1),
              r = l(n.eo()),
              e = l(n.Ui());
            if (null !== s && null !== h && s.zh > h.zh)
              return { barsBefore: t.from - r, barsAfter: e - t.to };
            var u = {
              barsBefore: null === s || s.zh === r ? t.from - r : s.zh - r,
              barsAfter: null === h || h.zh === e ? e - t.to : e - h.zh,
            };
            return (
              null !== s &&
                null !== h &&
                ((u.from = s.S.Sh || s.S.Dh), (u.to = h.S.Sh || h.S.Dh)),
              u
            );
          }),
          (t.prototype.setData = function (t) {
            this.qe.Ya(), this.dw.Mw(this.qe, t);
          }),
          (t.prototype.update = function (t) {
            this.qe.Ya(), this.dw.bw(this.qe, t);
          }),
          (t.prototype.setMarkers = function (t) {
            var i = t.map(function (t) {
              return e(e({}, t), { time: ns(t.time) });
            });
            this.qe.Po(i);
          }),
          (t.prototype.applyOptions = function (t) {
            var i = ls(t);
            this.qe.rs(i);
          }),
          (t.prototype.options = function () {
            return M(this.qe.ct());
          }),
          (t.prototype.priceScale = function () {
            return this.ww.priceScale(this.qe.$().hs());
          }),
          (t.prototype.createPriceLine = function (t) {
            var i = c(M(as), t),
              n = this.qe.Wo(i);
            return new os(n);
          }),
          (t.prototype.removePriceLine = function (t) {
            this.qe.zo(t._w());
          }),
          (t.prototype.seriesType = function () {
            return this.qe.Ya();
          }),
          t
        );
      })(),
      cs = (function (t) {
        function i() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return (
          r(i, t),
          (i.prototype.applyOptions = function (i) {
            kt(i), t.prototype.applyOptions.call(this, i);
          }),
          i
        );
      })(fs),
      vs = {
        autoScale: !0,
        mode: 0,
        invertScale: !1,
        alignLabels: !0,
        borderVisible: !0,
        borderColor: "#2B2B43",
        entireTextOnly: !1,
        visible: !1,
        drawTicks: !0,
        scaleMargins: { bottom: 0.1, top: 0.2 },
      },
      _s = {
        color: "rgba(0, 0, 0, 0)",
        visible: !1,
        fontSize: 48,
        fontFamily: jt,
        fontStyle: "",
        text: "",
        horzAlign: "center",
        vertAlign: "center",
      },
      ds = {
        width: 0,
        height: 0,
        layout: {
          background: { type: "solid", color: "#FFFFFF" },
          textColor: "#191919",
          fontSize: 11,
          fontFamily: jt,
        },
        crosshair: {
          vertLine: {
            color: "#758696",
            width: 1,
            style: 3,
            visible: !0,
            labelVisible: !0,
            labelBackgroundColor: "#4c525e",
          },
          horzLine: {
            color: "#758696",
            width: 1,
            style: 3,
            visible: !0,
            labelVisible: !0,
            labelBackgroundColor: "#4c525e",
          },
          mode: 1,
        },
        grid: {
          vertLines: { color: "#D6DCDE", style: 0, visible: !0 },
          horzLines: { color: "#D6DCDE", style: 0, visible: !0 },
        },
        overlayPriceScales: e({}, vs),
        leftPriceScale: e(e({}, vs), { visible: !1 }),
        rightPriceScale: e(e({}, vs), { visible: !0 }),
        timeScale: {
          rightOffset: 0,
          barSpacing: 6,
          minBarSpacing: 0.5,
          fixLeftEdge: !1,
          fixRightEdge: !1,
          lockVisibleTimeRangeOnResize: !1,
          rightBarStaysOnScroll: !1,
          borderVisible: !0,
          borderColor: "#2B2B43",
          visible: !0,
          timeVisible: !1,
          secondsVisible: !0,
          shiftVisibleRangeOnNewBar: !0,
        },
        watermark: _s,
        localization: {
          locale: pn ? navigator.language : "",
          dateFormat: "dd MMM 'yy",
        },
        handleScroll: {
          mouseWheel: !0,
          pressedMouseMove: !0,
          horzTouchDrag: !0,
          vertTouchDrag: !0,
        },
        handleScale: {
          axisPressedMouseMove: { time: !0, price: !0 },
          axisDoubleClickReset: !0,
          mouseWheel: !0,
          pinch: !0,
        },
        kineticScroll: { mouse: !1, touch: !0 },
      },
      ws = {
        upColor: "#26a69a",
        downColor: "#ef5350",
        wickVisible: !0,
        borderVisible: !0,
        borderColor: "#378658",
        borderUpColor: "#26a69a",
        borderDownColor: "#ef5350",
        wickColor: "#737375",
        wickUpColor: "#26a69a",
        wickDownColor: "#ef5350",
      },
      Ms = {
        upColor: "#26a69a",
        downColor: "#ef5350",
        openVisible: !0,
        thinBars: !0,
      },
      bs = {
        color: "#2196f3",
        lineStyle: 0,
        lineWidth: 3,
        lineType: 0,
        crosshairMarkerVisible: !0,
        crosshairMarkerRadius: 4,
        crosshairMarkerBorderColor: "",
        crosshairMarkerBackgroundColor: "",
        lastPriceAnimation: 0,
      },
      ms = {
        topColor: "rgba( 46, 220, 135, 0.4)",
        bottomColor: "rgba( 40, 221, 100, 0)",
        lineColor: "#33D778",
        lineStyle: 0,
        lineWidth: 3,
        lineType: 0,
        crosshairMarkerVisible: !0,
        crosshairMarkerRadius: 4,
        crosshairMarkerBorderColor: "",
        crosshairMarkerBackgroundColor: "",
        lastPriceAnimation: 0,
      },
      gs = {
        baseValue: { type: "price", price: 0 },
        topFillColor1: "rgba(38, 166, 154, 0.28)",
        topFillColor2: "rgba(38, 166, 154, 0.05)",
        topLineColor: "rgba(38, 166, 154, 1)",
        bottomFillColor1: "rgba(239, 83, 80, 0.05)",
        bottomFillColor2: "rgba(239, 83, 80, 0.28)",
        bottomLineColor: "rgba(239, 83, 80, 1)",
        lineWidth: 3,
        lineStyle: 0,
        crosshairMarkerVisible: !0,
        crosshairMarkerRadius: 4,
        crosshairMarkerBorderColor: "",
        crosshairMarkerBackgroundColor: "",
        lastPriceAnimation: 0,
      },
      ps = { color: "#26a69a", base: 0 },
      ys = {
        title: "",
        visible: !0,
        lastValueVisible: !0,
        priceLineVisible: !0,
        priceLineSource: 0,
        priceLineWidth: 1,
        priceLineColor: "",
        priceLineStyle: 2,
        baseLineVisible: !0,
        baseLineWidth: 1,
        baseLineColor: "#B2B5BE",
        baseLineStyle: 0,
        priceFormat: { type: "price", precision: 2, minMove: 0.01 },
      },
      ks = (function () {
        function t(t, i) {
          (this.mw = t), (this.gw = i);
        }
        return (
          (t.prototype.applyOptions = function (t) {
            this.mw.vt()._f(this.gw, t);
          }),
          (t.prototype.options = function () {
            return this.Gt().ct();
          }),
          (t.prototype.width = function () {
            return Ht(this.gw)
              ? this.mw.Id("left" === this.gw ? "left" : "right")
              : 0;
          }),
          (t.prototype.Gt = function () {
            return l(this.mw.vt().df(this.gw)).$;
          }),
          t
        );
      })(),
      Cs = (function () {
        function t(t, i) {
          (this.pw = new tt()),
            (this.nr = new tt()),
            (this.sd = new tt()),
            (this.hi = t),
            (this.ul = t.j()),
            (this.Bd = i),
            this.ul.Xr().Ji(this.yw.bind(this)),
            this.ul.Zr().Ji(this.kw.bind(this)),
            this.Bd.fd().Ji(this.Cw.bind(this));
        }
        return (
          (t.prototype.en = function () {
            this.ul.Xr().sn(this),
              this.ul.Zr().sn(this),
              this.Bd.fd().sn(this),
              this.pw.en(),
              this.nr.en(),
              this.sd.en();
          }),
          (t.prototype.scrollPosition = function () {
            return this.ul.zr();
          }),
          (t.prototype.scrollToPosition = function (t, i) {
            i ? this.ul.$r(t, 1e3) : this.hi.Mr(t);
          }),
          (t.prototype.scrollToRealTime = function () {
            this.ul.Kr();
          }),
          (t.prototype.getVisibleRange = function () {
            var t,
              i,
              n = this.ul.yr();
            return null === n
              ? null
              : {
                  from: null !== (t = n.from.Sh) && void 0 !== t ? t : n.from.Dh,
                  to: null !== (i = n.to.Sh) && void 0 !== i ? i : n.to.Dh,
                };
          }),
          (t.prototype.setVisibleRange = function (t) {
            var i = { from: ns(t.from), to: ns(t.to) },
              n = this.ul.Sr(i);
            this.hi.Pf(n);
          }),
          (t.prototype.getVisibleLogicalRange = function () {
            var t = this.ul.pr();
            return null === t ? null : { from: t.hh(), to: t.rh() };
          }),
          (t.prototype.setVisibleLogicalRange = function (t) {
            a(t.from <= t.to, "The from index cannot be after the to index."),
              this.hi.Pf(t);
          }),
          (t.prototype.resetTimeScale = function () {
            this.hi.xe();
          }),
          (t.prototype.fitContent = function () {
            this.hi.Qr();
          }),
          (t.prototype.logicalToCoordinate = function (t) {
            var i = this.hi.j();
            return i.ti() ? null : i.G(t);
          }),
          (t.prototype.coordinateToLogical = function (t) {
            return this.ul.ti() ? null : this.ul.Er(t);
          }),
          (t.prototype.timeToCoordinate = function (t) {
            var i = ns(t),
              n = this.ul.br(i, !1);
            return null === n ? null : this.ul.G(n);
          }),
          (t.prototype.coordinateToTime = function (t) {
            var i,
              n = this.hi.j(),
              s = n.Er(t),
              h = n.ri(s);
            return null === h
              ? null
              : null !== (i = h.Sh) && void 0 !== i
              ? i
              : h.Dh;
          }),
          (t.prototype.width = function () {
            return this.Bd.W_().st;
          }),
          (t.prototype.height = function () {
            return this.Bd.W_().ht;
          }),
          (t.prototype.subscribeVisibleTimeRangeChange = function (t) {
            this.pw.Ji(t);
          }),
          (t.prototype.unsubscribeVisibleTimeRangeChange = function (t) {
            this.pw.nn(t);
          }),
          (t.prototype.subscribeVisibleLogicalRangeChange = function (t) {
            this.nr.Ji(t);
          }),
          (t.prototype.unsubscribeVisibleLogicalRangeChange = function (t) {
            this.nr.nn(t);
          }),
          (t.prototype.subscribeSizeChange = function (t) {
            this.sd.Ji(t);
          }),
          (t.prototype.unsubscribeSizeChange = function (t) {
            this.sd.nn(t);
          }),
          (t.prototype.applyOptions = function (t) {
            this.ul.rs(t);
          }),
          (t.prototype.options = function () {
            return M(this.ul.ct());
          }),
          (t.prototype.yw = function () {
            this.pw.rn() && this.pw.hn(this.getVisibleRange());
          }),
          (t.prototype.kw = function () {
            this.nr.rn() && this.nr.hn(this.getVisibleLogicalRange());
          }),
          (t.prototype.Cw = function (t) {
            this.sd.hn(t.st, t.ht);
          }),
          t
        );
      })();
    function xs(t) {
      if (void 0 !== t && "custom" !== t.type) {
        var i = t;
        void 0 !== i.minMove &&
          void 0 === i.precision &&
          (i.precision = (function (t) {
            if (t >= 1) return 0;
            for (var i = 0; i < 8; i++) {
              var n = Math.round(t);
              if (Math.abs(n - t) < 1e-8) return i;
              t *= 10;
            }
            return i;
          })(i.minMove));
      }
    }
    function Ns(t) {
      return (
        (function (t) {
          if (w(t.handleScale)) {
            var i = t.handleScale;
            t.handleScale = {
              axisDoubleClickReset: i,
              axisPressedMouseMove: { time: i, price: i },
              mouseWheel: i,
              pinch: i,
            };
          } else if (
            void 0 !== t.handleScale &&
            w(t.handleScale.axisPressedMouseMove)
          ) {
            var n = t.handleScale.axisPressedMouseMove;
            t.handleScale.axisPressedMouseMove = { time: n, price: n };
          }
          var s = t.handleScroll;
          w(s) &&
            (t.handleScroll = {
              horzTouchDrag: s,
              vertTouchDrag: s,
              mouseWheel: s,
              pressedMouseMove: s,
            });
        })(t),
        (function (t) {
          if (t.priceScale) {
            (t.leftPriceScale = t.leftPriceScale || {}),
              (t.rightPriceScale = t.rightPriceScale || {});
            var i = t.priceScale.position;
            delete t.priceScale.position,
              (t.leftPriceScale = c(t.leftPriceScale, t.priceScale)),
              (t.rightPriceScale = c(t.rightPriceScale, t.priceScale)),
              "left" === i &&
                ((t.leftPriceScale.visible = !0),
                (t.rightPriceScale.visible = !1)),
              "right" === i &&
                ((t.leftPriceScale.visible = !1),
                (t.rightPriceScale.visible = !0)),
              "none" === i &&
                ((t.leftPriceScale.visible = !1),
                (t.rightPriceScale.visible = !1)),
              (t.overlayPriceScales = t.overlayPriceScales || {}),
              void 0 !== t.priceScale.invertScale &&
                (t.overlayPriceScales.invertScale = t.priceScale.invertScale),
              void 0 !== t.priceScale.scaleMargins &&
                (t.overlayPriceScales.scaleMargins = t.priceScale.scaleMargins);
          }
        })(t),
        (function (t) {
          t.layout &&
            t.layout.backgroundColor &&
            !t.layout.background &&
            (t.layout.background = {
              type: "solid",
              color: t.layout.backgroundColor,
            });
        })(t),
        t
      );
    }
    var Ss = (function () {
      function t(t, i) {
        var n = this;
        (this.xw = new es()),
          (this.Nw = new Map()),
          (this.Sw = new Map()),
          (this.Dw = new tt()),
          (this.Tw = new tt());
        var s = void 0 === i ? M(ds) : c(M(ds), Ns(i));
        (this.mw = new Rn(t, s)),
          this.mw.V_().Ji(function (t) {
            n.Dw.rn() && n.Dw.hn(n.Aw(t()));
          }, this),
          this.mw.mf().Ji(function (t) {
            n.Tw.rn() && n.Tw.hn(n.Aw(t()));
          }, this);
        var h = this.mw.vt();
        this.Bw = new Cs(h, this.mw.Od());
      }
      return (
        (t.prototype.remove = function () {
          this.mw.V_().sn(this),
            this.mw.mf().sn(this),
            this.Bw.en(),
            this.mw.en(),
            this.Nw.clear(),
            this.Sw.clear(),
            this.Dw.en(),
            this.Tw.en(),
            this.xw.en();
        }),
        (t.prototype.resize = function (t, i, n) {
          this.mw.Ld(t, i, n);
        }),
        (t.prototype.addAreaSeries = function (t) {
          void 0 === t && (t = {}), xs((t = ls(t)).priceFormat);
          var i = c(M(ys), ms, t),
            n = this.mw.vt().Ff("Area", i),
            s = new fs(n, this, this);
          return this.Nw.set(s, n), this.Sw.set(n, s), s;
        }),
        (t.prototype.addBaselineSeries = function (t) {
          void 0 === t && (t = {}), xs((t = ls(t)).priceFormat);
          var i = c(M(ys), gs, t),
            n = this.mw.vt().Ff("Baseline", i),
            s = new fs(n, this, this);
          return this.Nw.set(s, n), this.Sw.set(n, s), s;
        }),
        (t.prototype.addBarSeries = function (t) {
          void 0 === t && (t = {}), xs((t = ls(t)).priceFormat);
          var i = c(M(ys), Ms, t),
            n = this.mw.vt().Ff("Bar", i),
            s = new fs(n, this, this);
          return this.Nw.set(s, n), this.Sw.set(n, s), s;
        }),
        (t.prototype.addCandlestickSeries = function (t) {
          void 0 === t && (t = {}), kt((t = ls(t))), xs(t.priceFormat);
          var i = c(M(ys), ws, t),
            n = this.mw.vt().Ff("Candlestick", i),
            s = new cs(n, this, this);
          return this.Nw.set(s, n), this.Sw.set(n, s), s;
        }),
        (t.prototype.addHistogramSeries = function (t) {
          void 0 === t && (t = {}), xs((t = ls(t)).priceFormat);
          var i = c(M(ys), ps, t),
            n = this.mw.vt().Ff("Histogram", i),
            s = new fs(n, this, this);
          return this.Nw.set(s, n), this.Sw.set(n, s), s;
        }),
        (t.prototype.addLineSeries = function (t) {
          void 0 === t && (t = {}), xs((t = ls(t)).priceFormat);
          var i = c(M(ys), bs, t),
            n = this.mw.vt().Ff("Line", i),
            s = new fs(n, this, this);
          return this.Nw.set(s, n), this.Sw.set(n, s), s;
        }),
        (t.prototype.removeSeries = function (t) {
          var i = o(this.Nw.get(t)),
            n = this.xw.Of(i);
          this.mw.vt().Of(i), this.Lw(n), this.Nw.delete(t), this.Sw.delete(i);
        }),
        (t.prototype.Mw = function (t, i) {
          this.Lw(this.xw.nw(t, i));
        }),
        (t.prototype.bw = function (t, i) {
          this.Lw(this.xw.uw(t, i));
        }),
        (t.prototype.subscribeClick = function (t) {
          this.Dw.Ji(t);
        }),
        (t.prototype.unsubscribeClick = function (t) {
          this.Dw.nn(t);
        }),
        (t.prototype.subscribeCrosshairMove = function (t) {
          this.Tw.Ji(t);
        }),
        (t.prototype.unsubscribeCrosshairMove = function (t) {
          this.Tw.nn(t);
        }),
        (t.prototype.priceScale = function (t) {
          return void 0 === t && (t = this.mw.vt().Wf()), new ks(this.mw, t);
        }),
        (t.prototype.timeScale = function () {
          return this.Bw;
        }),
        (t.prototype.applyOptions = function (t) {
          this.mw.rs(Ns(t));
        }),
        (t.prototype.options = function () {
          return this.mw.ct();
        }),
        (t.prototype.takeScreenshot = function () {
          return this.mw.Wd();
        }),
        (t.prototype.Lw = function (t) {
          var i = this.mw.vt();
          i.Lf(t.j.Br, t.j.fw, t.j.cw),
            t.lw.forEach(function (t, i) {
              return i._(t.Zu);
            }),
            i.Vr();
        }),
        (t.prototype.Ew = function (t) {
          return o(this.Sw.get(t));
        }),
        (t.prototype.Aw = function (t) {
          var i = this,
            n = new Map();
          t.$d.forEach(function (t, s) {
            n.set(i.Ew(s), t);
          });
          var s = void 0 === t.Kd ? void 0 : this.Ew(t.Kd);
          return {
            time: t.S && (t.S.Sh || t.S.Dh),
            point: t.Yd,
            hoveredSeries: s,
            hoveredMarkerId: t.Xd,
            seriesPrices: n,
          };
        }),
        t
      );
    })();
    var Ds = Object.freeze({
      __proto__: null,
      version: function () {
        return "3.7.0";
      },
      get LineStyle() {
        return i;
      },
      get LineType() {
        return t;
      },
      get CrosshairMode() {
        return I;
      },
      get PriceScaleMode() {
        return _t;
      },
      get PriceLineSource() {
        return mt;
      },
      get LastPriceAnimationMode() {
        return bt;
      },
      get LasPriceAnimationMode() {
        return bt;
      },
      get TickMarkType() {
        return Vt;
      },
      get ColorType() {
        return Wt;
      },
      isBusinessDay: Rt,
      isUTCTimestamp: It,
      createChart: function (t, i) {
        var n;
        if (d(t)) {
          var s = document.getElementById(t);
          a(null !== s, "Cannot find element in DOM with id=" + t), (n = s);
        } else n = t;
        return new Ss(n, i);
      },
    });
    window.LightweightCharts = Ds;
  })();
  