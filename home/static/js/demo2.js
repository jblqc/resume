var DemoModule = (function() {

! function() {
  function t(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t
  }

  function e(t, e) {
      t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
  }
  /*!
   * GSAP 3.6.1
   * https://greensock.com
   *
   * @license Copyright 2008-2021, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */
  var r, i, n, s, a, o, u, h, l, f, c, p, _, d, m, g, v, y, b, T, x, w, M, O, D, S, A, k, C = {
          autoSleep: 120,
          force3D: "auto",
          nullTargetWarn: 1,
          units: {
              lineHeight: ""
          }
      },
      F = {
          duration: .5,
          overwrite: !1,
          delay: 0
      },
      P = 1e8,
      E = 1e-8,
      z = 2 * Math.PI,
      R = z / 4,
      B = 0,
      L = Math.sqrt,
      q = Math.cos,
      I = Math.sin,
      V = function(t) {
          return "string" == typeof t
      },
      Y = function(t) {
          return "function" == typeof t
      },
      U = function(t) {
          return "number" == typeof t
      },
      X = function(t) {
          return void 0 === t
      },
      N = function(t) {
          return "object" == typeof t
      },
      G = function(t) {
          return !1 !== t
      },
      j = function() {
          return "undefined" != typeof window
      },
      W = function(t) {
          return Y(t) || V(t)
      },
      H = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
      Q = Array.isArray,
      $ = /(?:-?\.?\d|\.)+/gi,
      Z = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
      J = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
      K = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
      tt = /[+-]=-?[.\d]+/,
      et = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
      rt = /[\d.+\-=]+(?:e[-+]\d*)*/i,
      it = {},
      nt = {},
      st = function(t) {
          return (nt = Ft(t, it)) && dr
      },
      at = function(t, e) {
          return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
      },
      ot = function(t, e) {
          return !e && console.warn(t)
      },
      ut = function(t, e) {
          return t && (it[t] = e) && nt && (nt[t] = e) || it
      },
      ht = function() {
          return 0
      },
      lt = {},
      ft = [],
      ct = {},
      pt = {},
      _t = {},
      dt = 30,
      mt = [],
      gt = "",
      vt = function(t) {
          var e, r, i = t[0];
          if (N(i) || Y(i) || (t = [t]), !(e = (i._gsap || {}).harness)) {
              for (r = mt.length; r-- && !mt[r].targetTest(i););
              e = mt[r]
          }
          for (r = t.length; r--;) t[r] && (t[r]._gsap || (t[r]._gsap = new Ve(t[r], e))) || t.splice(r, 1);
          return t
      },
      yt = function(t) {
          return t._gsap || vt(se(t))[0]._gsap
      },
      bt = function(t, e, r) {
          return (r = t[e]) && Y(r) ? t[e]() : X(r) && t.getAttribute && t.getAttribute(e) || r
      },
      Tt = function(t, e) {
          return (t = t.split(",")).forEach(e) || t
      },
      xt = function(t) {
          return Math.round(1e5 * t) / 1e5 || 0
      },
      wt = function(t, e) {
          for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r;);
          return i < r
      },
      Mt = function(t, e, r) {
          var i, n = U(t[1]),
              s = (n ? 2 : 1) + (e < 2 ? 0 : 1),
              a = t[s];
          if (n && (a.duration = t[1]), a.parent = r, e) {
              for (i = a; r && !("immediateRender" in i);) i = r.vars.defaults || {}, r = G(r.vars.inherit) && r.parent;
              a.immediateRender = G(i.immediateRender), e < 2 ? a.runBackwards = 1 : a.startAt = t[s - 1]
          }
          return a
      },
      Ot = function() {
          var t, e, r = ft.length,
              i = ft.slice(0);
          for (ct = {}, ft.length = 0, t = 0; t < r; t++)(e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
      },
      Dt = function(t, e, r, i) {
          ft.length && Ot(), t.render(e, r, i), ft.length && Ot()
      },
      St = function(t) {
          var e = parseFloat(t);
          return (e || 0 === e) && (t + "").match(et).length < 2 ? e : V(t) ? t.trim() : t
      },
      At = function(t) {
          return t
      },
      kt = function(t, e) {
          for (var r in e) r in t || (t[r] = e[r]);
          return t
      },
      Ct = function(t, e) {
          for (var r in e) r in t || "duration" === r || "ease" === r || (t[r] = e[r])
      },
      Ft = function(t, e) {
          for (var r in e) t[r] = e[r];
          return t
      },
      Pt = function t(e, r) {
          for (var i in r) "__proto__" !== i && "constructor" !== i && "prototype" !== i && (e[i] = N(r[i]) ? t(e[i] || (e[i] = {}), r[i]) : r[i]);
          return e
      },
      Et = function(t, e) {
          var r, i = {};
          for (r in t) r in e || (i[r] = t[r]);
          return i
      },
      zt = function(t) {
          var e = t.parent || i,
              r = t.keyframes ? Ct : kt;
          if (G(t.inherit))
              for (; e;) r(t, e.vars.defaults), e = e.parent || e._dp;
          return t
      },
      Rt = function(t, e, r, i) {
          void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
          var n = e._prev,
              s = e._next;
          n ? n._next = s : t[r] === e && (t[r] = s), s ? s._prev = n : t[i] === e && (t[i] = n), e._next = e._prev = e.parent = null
      },
      Bt = function(t, e) {
          t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t), t._act = 0
      },
      Lt = function(t, e) {
          if (t && (!e || e._end > t._dur || e._start < 0))
              for (var r = t; r;) r._dirty = 1, r = r.parent;
          return t
      },
      qt = function(t) {
          for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
          return t
      },
      It = function t(e) {
          return !e || e._ts && t(e.parent)
      },
      Vt = function(t) {
          return t._repeat ? Yt(t._tTime, t = t.duration() + t._rDelay) * t : 0
      },
      Yt = function(t, e) {
          var r = Math.floor(t /= e);
          return t && r === t ? r - 1 : r
      },
      Ut = function(t, e) {
          return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
      },
      Xt = function(t) {
          return t._end = xt(t._start + (t._tDur / Math.abs(t._ts || t._rts || E) || 0))
      },
      Nt = function(t, e) {
          var r = t._dp;
          return r && r.smoothChildTiming && t._ts && (t._start = xt(r._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Xt(t), r._dirty || Lt(r, t)), t
      },
      Gt = function(t, e) {
          var r;
          if ((e._time || e._initted && !e._dur) && (r = Ut(t.rawTime(), e), (!e._dur || ee(0, e.totalDuration(), r) - e._tTime > E) && e.render(r, !0)), Lt(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
              if (t._dur < t.duration())
                  for (r = t; r._dp;) r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
              t._zTime = -1e-8
          }
      },
      jt = function(t, e, r, i) {
          return e.parent && Bt(e), e._start = xt(r + e._delay), e._end = xt(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
              function(t, e, r, i, n) {
                  void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
                  var s, a = t[i];
                  if (n)
                      for (s = e[n]; a && a[n] > s;) a = a._prev;
                  a ? (e._next = a._next, a._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[i] = e, e._prev = a, e.parent = e._dp = t
              }(t, e, "_first", "_last", t._sort ? "_start" : 0), t._recent = e, i || Gt(t, e), t
      },
      Wt = function(t, e) {
          return (it.ScrollTrigger || at("scrollTrigger", e)) && it.ScrollTrigger.create(e, t)
      },
      Ht = function(t, e, r, i) {
          return We(t, e), t._initted ? !r && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && u !== Se.frame ? (ft.push(t), t._lazy = [e, i], 1) : void 0 : 1
      },
      Qt = function t(e) {
          var r = e.parent;
          return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || t(r))
      },
      $t = function(t, e, r, i) {
          var n = t._repeat,
              s = xt(e) || 0,
              a = t._tTime / t._tDur;
          return a && !i && (t._time *= s / t._dur), t._dur = s, t._tDur = n ? n < 0 ? 1e10 : xt(s * (n + 1) + t._rDelay * n) : s, a && !i ? Nt(t, t._tTime = t._tDur * a) : t.parent && Xt(t), r || Lt(t.parent, t), t
      },
      Zt = function(t) {
          return t instanceof Ue ? Lt(t) : $t(t, t._dur)
      },
      Jt = {
          _start: 0,
          endTime: ht
      },
      Kt = function t(e, r) {
          var i, n, s = e.labels,
              a = e._recent || Jt,
              o = e.duration() >= P ? a.endTime(!1) : e._dur;
          return V(r) && (isNaN(r) || r in s) ? "<" === (i = r.charAt(0)) || ">" === i ? ("<" === i ? a._start : a.endTime(a._repeat >= 0)) + (parseFloat(r.substr(1)) || 0) : (i = r.indexOf("=")) < 0 ? (r in s || (s[r] = o), s[r]) : (n = +(r.charAt(i - 1) + r.substr(i + 1)), i > 1 ? t(e, r.substr(0, i - 1)) + n : o + n) : null == r ? o : +r
      },
      te = function(t, e) {
          return t || 0 === t ? e(t) : e
      },
      ee = function(t, e, r) {
          return r < t ? t : r > e ? e : r
      },
      re = function(t) {
          if ("string" != typeof t) return "";
          var e = rt.exec(t);
          return e ? t.substr(e.index + e[0].length) : ""
      },
      ie = [].slice,
      ne = function(t, e) {
          return t && N(t) && "length" in t && (!e && !t.length || t.length - 1 in t && N(t[0])) && !t.nodeType && t !== n
      },
      se = function(t, e) {
          return !V(t) || e || !s && Ae() ? Q(t) ? function(t, e, r) {
              return void 0 === r && (r = []), t.forEach((function(t) {
                  var i;
                  return V(t) && !e || ne(t, 1) ? (i = r).push.apply(i, se(t)) : r.push(t)
              })) || r
          }(t, e) : ne(t) ? ie.call(t, 0) : t ? [t] : [] : ie.call(a.querySelectorAll(t), 0)
      },
      ae = function(t) {
          return t.sort((function() {
              return .5 - Math.random()
          }))
      },
      oe = function(t) {
          if (Y(t)) return t;
          var e = N(t) ? t : {
                  each: t
              },
              r = Re(e.ease),
              i = e.from || 0,
              n = parseFloat(e.base) || 0,
              s = {},
              a = i > 0 && i < 1,
              o = isNaN(i) || a,
              u = e.axis,
              h = i,
              l = i;
          return V(i) ? h = l = {
                  center: .5,
                  edges: .5,
                  end: 1
              } [i] || 0 : !a && o && (h = i[0], l = i[1]),
              function(t, a, f) {
                  var c, p, _, d, m, g, v, y, b, T = (f || e).length,
                      x = s[T];
                  if (!x) {
                      if (!(b = "auto" === e.grid ? 0 : (e.grid || [1, P])[1])) {
                          for (v = -1e8; v < (v = f[b++].getBoundingClientRect().left) && b < T;);
                          b--
                      }
                      for (x = s[T] = [], c = o ? Math.min(b, T) * h - .5 : i % b, p = o ? T * l / b - .5 : i / b | 0, v = 0, y = P, g = 0; g < T; g++) _ = g % b - c, d = p - (g / b | 0), x[g] = m = u ? Math.abs("y" === u ? d : _) : L(_ * _ + d * d), m > v && (v = m), m < y && (y = m);
                      "random" === i && ae(x), x.max = v - y, x.min = y, x.v = T = (parseFloat(e.amount) || parseFloat(e.each) * (b > T ? T - 1 : u ? "y" === u ? T / b : b : Math.max(b, T / b)) || 0) * ("edges" === i ? -1 : 1), x.b = T < 0 ? n - T : n, x.u = re(e.amount || e.each) || 0, r = r && T < 0 ? Ee(r) : r
                  }
                  return T = (x[t] - x.min) / x.max || 0, xt(x.b + (r ? r(T) : T) * x.v) + x.u
              }
      },
      ue = function(t) {
          var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
          return function(r) {
              var i = Math.round(parseFloat(r) / t) * t * e;
              return (i - i % 1) / e + (U(r) ? 0 : re(r))
          }
      },
      he = function(t, e) {
          var r, i, n = Q(t);
          return !n && N(t) && (r = n = t.radius || P, t.values ? (t = se(t.values), (i = !U(t[0])) && (r *= r)) : t = ue(t.increment)), te(e, n ? Y(t) ? function(e) {
              return i = t(e), Math.abs(i - e) <= r ? i : e
          } : function(e) {
              for (var n, s, a = parseFloat(i ? e.x : e), o = parseFloat(i ? e.y : 0), u = P, h = 0, l = t.length; l--;)(n = i ? (n = t[l].x - a) * n + (s = t[l].y - o) * s : Math.abs(t[l] - a)) < u && (u = n, h = l);
              return h = !r || u <= r ? t[h] : e, i || h === e || U(e) ? h : h + re(e)
          } : ue(t))
      },
      le = function(t, e, r, i) {
          return te(Q(t) ? !e : !0 === r ? !!(r = 0) : !i, (function() {
              return Q(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + .99 * r)) / r) * r * i) / i
          }))
      },
      fe = function(t, e, r) {
          return te(r, (function(r) {
              return t[~~e(r)]
          }))
      },
      ce = function(t) {
          for (var e, r, i, n, s = 0, a = ""; ~(e = t.indexOf("random(", s));) i = t.indexOf(")", e), n = "[" === t.charAt(e + 7), r = t.substr(e + 7, i - e - 7).match(n ? et : $), a += t.substr(s, e - s) + le(n ? r : +r[0], n ? 0 : +r[1], +r[2] || 1e-5), s = i + 1;
          return a + t.substr(s, t.length - s)
      },
      pe = function(t, e, r, i, n) {
          var s = e - t,
              a = i - r;
          return te(n, (function(e) {
              return r + ((e - t) / s * a || 0)
          }))
      },
      _e = function(t, e, r) {
          var i, n, s, a = t.labels,
              o = P;
          for (i in a)(n = a[i] - e) < 0 == !!r && n && o > (n = Math.abs(n)) && (s = i, o = n);
          return s
      },
      de = function(t, e, r) {
          var i, n, s = t.vars,
              a = s[e];
          if (a) return i = s[e + "Params"], n = s.callbackScope || t, r && ft.length && Ot(), i ? a.apply(n, i) : a.call(n)
      },
      me = function(t) {
          return Bt(t), t.scrollTrigger && t.scrollTrigger.kill(!1), t.progress() < 1 && de(t, "onInterrupt"), t
      },
      ge = function(t) {
          var e = (t = !t.name && t.default || t).name,
              r = Y(t),
              i = e && !r && t.init ? function() {
                  this._props = []
              } : t,
              n = {
                  init: ht,
                  render: ar,
                  add: Ge,
                  kill: ur,
                  modifier: or,
                  rawVars: 0
              },
              s = {
                  targetTest: 0,
                  get: 0,
                  getSetter: rr,
                  aliases: {},
                  register: 0
              };
          if (Ae(), t !== i) {
              if (pt[e]) return;
              kt(i, kt(Et(t, n), s)), Ft(i.prototype, Ft(n, Et(t, s))), pt[i.prop = e] = i, t.targetTest && (mt.push(i), lt[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
          }
          ut(e, i), t.register && t.register(dr, i, fr)
      },
      ve = 255,
      ye = {
          aqua: [0, ve, ve],
          lime: [0, ve, 0],
          silver: [192, 192, 192],
          black: [0, 0, 0],
          maroon: [128, 0, 0],
          teal: [0, 128, 128],
          blue: [0, 0, ve],
          navy: [0, 0, 128],
          white: [ve, ve, ve],
          olive: [128, 128, 0],
          yellow: [ve, ve, 0],
          orange: [ve, 165, 0],
          gray: [128, 128, 128],
          purple: [128, 0, 128],
          green: [0, 128, 0],
          red: [ve, 0, 0],
          pink: [ve, 192, 203],
          cyan: [0, ve, ve],
          transparent: [ve, ve, ve, 0]
      },
      be = function(t, e, r) {
          return (6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * ve + .5 | 0
      },
      Te = function(t, e, r) {
          var i, n, s, a, o, u, h, l, f, c, p = t ? U(t) ? [t >> 16, t >> 8 & ve, t & ve] : 0 : ye.black;
          if (!p) {
              if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), ye[t]) p = ye[t];
              else if ("#" === t.charAt(0)) {
                  if (t.length < 6 && (i = t.charAt(1), n = t.charAt(2), s = t.charAt(3), t = "#" + i + i + n + n + s + s + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")), 9 === t.length) return [(p = parseInt(t.substr(1, 6), 16)) >> 16, p >> 8 & ve, p & ve, parseInt(t.substr(7), 16) / 255];
                  p = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & ve, t & ve]
              } else if ("hsl" === t.substr(0, 3))
                  if (p = c = t.match($), e) {
                      if (~t.indexOf("=")) return p = t.match(Z), r && p.length < 4 && (p[3] = 1), p
                  } else a = +p[0] % 360 / 360, o = +p[1] / 100, i = 2 * (u = +p[2] / 100) - (n = u <= .5 ? u * (o + 1) : u + o - u * o), p.length > 3 && (p[3] *= 1), p[0] = be(a + 1 / 3, i, n), p[1] = be(a, i, n), p[2] = be(a - 1 / 3, i, n);
              else p = t.match($) || ye.transparent;
              p = p.map(Number)
          }
          return e && !c && (i = p[0] / ve, n = p[1] / ve, s = p[2] / ve, u = ((h = Math.max(i, n, s)) + (l = Math.min(i, n, s))) / 2, h === l ? a = o = 0 : (f = h - l, o = u > .5 ? f / (2 - h - l) : f / (h + l), a = h === i ? (n - s) / f + (n < s ? 6 : 0) : h === n ? (s - i) / f + 2 : (i - n) / f + 4, a *= 60), p[0] = ~~(a + .5), p[1] = ~~(100 * o + .5), p[2] = ~~(100 * u + .5)), r && p.length < 4 && (p[3] = 1), p
      },
      xe = function(t) {
          var e = [],
              r = [],
              i = -1;
          return t.split(Me).forEach((function(t) {
              var n = t.match(J) || [];
              e.push.apply(e, n), r.push(i += n.length + 1)
          })), e.c = r, e
      },
      we = function(t, e, r) {
          var i, n, s, a, o = "",
              u = (t + o).match(Me),
              h = e ? "hsla(" : "rgba(",
              l = 0;
          if (!u) return t;
          if (u = u.map((function(t) {
                  return (t = Te(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
              })), r && (s = xe(t), (i = r.c).join(o) !== s.c.join(o)))
              for (a = (n = t.replace(Me, "1").split(J)).length - 1; l < a; l++) o += n[l] + (~i.indexOf(l) ? u.shift() || h + "0,0,0,0)" : (s.length ? s : u.length ? u : r).shift());
          if (!n)
              for (a = (n = t.split(Me)).length - 1; l < a; l++) o += n[l] + u[l];
          return o + n[a]
      },
      Me = function() {
          var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
          for (t in ye) e += "|" + t + "\\b";
          return new RegExp(e + ")", "gi")
      }(),
      Oe = /hsl[a]?\(/,
      De = function(t) {
          var e, r = t.join(" ");
          if (Me.lastIndex = 0, Me.test(r)) return e = Oe.test(r), t[1] = we(t[1], e), t[0] = we(t[0], e, xe(t[1])), !0
      },
      Se = (g = Date.now, v = 500, y = 33, b = g(), T = b, w = x = 1e3 / 240, O = function t(e) {
          var r, i, n, s, a = g() - T,
              o = !0 === e;
          if (a > v && (b += a - y), ((r = (n = (T += a) - b) - w) > 0 || o) && (s = ++_.frame, d = n - 1e3 * _.time, _.time = n /= 1e3, w += r + (r >= x ? 4 : x - r), i = 1), o || (f = c(t)), i)
              for (m = 0; m < M.length; m++) M[m](n, d, s, e)
      }, _ = {
          time: 0,
          frame: 0,
          tick: function() {
              O(!0)
          },
          deltaRatio: function(t) {
              return d / (1e3 / (t || 60))
          },
          wake: function() {
              o && (!s && j() && (n = s = window, a = n.document || {}, it.gsap = dr, (n.gsapVersions || (n.gsapVersions = [])).push(dr.version), st(nt || n.GreenSockGlobals || !n.gsap && n || {}), p = n.requestAnimationFrame), f && _.sleep(), c = p || function(t) {
                  return setTimeout(t, w - 1e3 * _.time + 1 | 0)
              }, l = 1, O(2))
          },
          sleep: function() {
              (p ? n.cancelAnimationFrame : clearTimeout)(f), l = 0, c = ht
          },
          lagSmoothing: function(t, e) {
              v = t || 1e8, y = Math.min(e, v, 0)
          },
          fps: function(t) {
              x = 1e3 / (t || 240), w = 1e3 * _.time + x
          },
          add: function(t) {
              M.indexOf(t) < 0 && M.push(t), Ae()
          },
          remove: function(t) {
              var e;
              ~(e = M.indexOf(t)) && M.splice(e, 1) && m >= e && m--
          },
          _listeners: M = []
      }),
      Ae = function() {
          return !l && Se.wake()
      },
      ke = {},
      Ce = /^[\d.\-M][\d.\-,\s]/,
      Fe = /["']/g,
      Pe = function(t) {
          for (var e, r, i, n = {}, s = t.substr(1, t.length - 3).split(":"), a = s[0], o = 1, u = s.length; o < u; o++) r = s[o], e = o !== u - 1 ? r.lastIndexOf(",") : r.length, i = r.substr(0, e), n[a] = isNaN(i) ? i.replace(Fe, "").trim() : +i, a = r.substr(e + 1).trim();
          return n
      },
      Ee = function(t) {
          return function(e) {
              return 1 - t(1 - e)
          }
      },
      ze = function t(e, r) {
          for (var i, n = e._first; n;) n instanceof Ue ? t(n, r) : !n.vars.yoyoEase || n._yoyo && n._repeat || n._yoyo === r || (n.timeline ? t(n.timeline, r) : (i = n._ease, n._ease = n._yEase, n._yEase = i, n._yoyo = r)), n = n._next
      },
      Re = function(t, e) {
          return t && (Y(t) ? t : ke[t] || function(t) {
              var e, r, i, n, s = (t + "").split("("),
                  a = ke[s[0]];
              return a && s.length > 1 && a.config ? a.config.apply(null, ~t.indexOf("{") ? [Pe(s[1])] : (e = t, r = e.indexOf("(") + 1, i = e.indexOf(")"), n = e.indexOf("(", r), e.substring(r, ~n && n < i ? e.indexOf(")", i + 1) : i)).split(",").map(St)) : ke._CE && Ce.test(t) ? ke._CE("", t) : a
          }(t)) || e
      },
      Be = function(t, e, r, i) {
          void 0 === r && (r = function(t) {
              return 1 - e(1 - t)
          }), void 0 === i && (i = function(t) {
              return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
          });
          var n, s = {
              easeIn: e,
              easeOut: r,
              easeInOut: i
          };
          return Tt(t, (function(t) {
              for (var e in ke[t] = it[t] = s, ke[n = t.toLowerCase()] = r, s) ke[n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = ke[t + "." + e] = s[e]
          })), s
      },
      Le = function(t) {
          return function(e) {
              return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2
          }
      },
      qe = function t(e, r, i) {
          var n = r >= 1 ? r : 1,
              s = (i || (e ? .3 : .45)) / (r < 1 ? r : 1),
              a = s / z * (Math.asin(1 / n) || 0),
              o = function(t) {
                  return 1 === t ? 1 : n * Math.pow(2, -10 * t) * I((t - a) * s) + 1
              },
              u = "out" === e ? o : "in" === e ? function(t) {
                  return 1 - o(1 - t)
              } : Le(o);
          return s = z / s, u.config = function(r, i) {
              return t(e, r, i)
          }, u
      },
      Ie = function t(e, r) {
          void 0 === r && (r = 1.70158);
          var i = function(t) {
                  return t ? --t * t * ((r + 1) * t + r) + 1 : 0
              },
              n = "out" === e ? i : "in" === e ? function(t) {
                  return 1 - i(1 - t)
              } : Le(i);
          return n.config = function(r) {
              return t(e, r)
          }, n
      };
  Tt("Linear,Quad,Cubic,Quart,Quint,Strong", (function(t, e) {
      var r = e < 5 ? e + 1 : e;
      Be(t + ",Power" + (r - 1), e ? function(t) {
          return Math.pow(t, r)
      } : function(t) {
          return t
      }, (function(t) {
          return 1 - Math.pow(1 - t, r)
      }), (function(t) {
          return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2
      }))
  })), ke.Linear.easeNone = ke.none = ke.Linear.easeIn, Be("Elastic", qe("in"), qe("out"), qe()), D = 7.5625, A = 1 / (S = 2.75), Be("Bounce", (function(t) {
      return 1 - k(1 - t)
  }), k = function(t) {
      return t < A ? D * t * t : t < .7272727272727273 ? D * Math.pow(t - 1.5 / S, 2) + .75 : t < .9090909090909092 ? D * (t -= 2.25 / S) * t + .9375 : D * Math.pow(t - 2.625 / S, 2) + .984375
  }), Be("Expo", (function(t) {
      return t ? Math.pow(2, 10 * (t - 1)) : 0
  })), Be("Circ", (function(t) {
      return -(L(1 - t * t) - 1)
  })), Be("Sine", (function(t) {
      return 1 === t ? 1 : 1 - q(t * R)
  })), Be("Back", Ie("in"), Ie("out"), Ie()), ke.SteppedEase = ke.steps = it.SteppedEase = {
      config: function(t, e) {
          void 0 === t && (t = 1);
          var r = 1 / t,
              i = t + (e ? 0 : 1),
              n = e ? 1 : 0;
          return function(t) {
              return ((i * ee(0, .99999999, t) | 0) + n) * r
          }
      }
  }, F.ease = ke["quad.out"], Tt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (function(t) {
      return gt += t + "," + t + "Params,"
  }));
  var Ve = function(t, e) {
          this.id = B++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : bt, this.set = e ? e.getSetter : rr
      },
      Ye = function() {
          function t(t, e) {
              var r = t.parent || i;
              this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, $t(this, +t.duration, 1, 1), this.data = t.data, l || Se.wake(), r && jt(r, this, e || 0 === e ? e : r._time, 1), t.reversed && this.reverse(), t.paused && this.paused(!0)
          }
          var e = t.prototype;
          return e.delay = function(t) {
              return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
          }, e.duration = function(t) {
              return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
          }, e.totalDuration = function(t) {
              return arguments.length ? (this._dirty = 0, $t(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
          }, e.totalTime = function(t, e) {
              if (Ae(), !arguments.length) return this._tTime;
              var r = this._dp;
              if (r && r.smoothChildTiming && this._ts) {
                  for (Nt(this, t), !r._dp || r.parent || Gt(r, this); r.parent;) r.parent._time !== r._start + (r._ts >= 0 ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;
                  !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && jt(this._dp, this, this._start - this._delay)
              }
              return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === E || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), Dt(this, t, e)), this
          }, e.time = function(t, e) {
              return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + Vt(this)) % this._dur || (t ? this._dur : 0), e) : this._time
          }, e.totalProgress = function(t, e) {
              return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
          }, e.progress = function(t, e) {
              return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + Vt(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
          }, e.iteration = function(t, e) {
              var r = this.duration() + this._rDelay;
              return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? Yt(this._tTime, r) + 1 : 1
          }, e.timeScale = function(t) {
              if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
              if (this._rts === t) return this;
              var e = this.parent && this._ts ? Ut(this.parent._time, this) : this._tTime;
              return this._rts = +t || 0, this._ts = this._ps || -1e-8 === t ? 0 : this._rts, qt(this.totalTime(ee(-this._delay, this._tDur, e), !0))
          }, e.paused = function(t) {
              return arguments.length ? (this._ps !== t && (this._ps = t, t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Ae(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && (this._tTime -= E) && Math.abs(this._zTime) !== E))), this) : this._ps
          }, e.startTime = function(t) {
              if (arguments.length) {
                  this._start = t;
                  var e = this.parent || this._dp;
                  return e && (e._sort || !this.parent) && jt(e, this, t - this._delay), this
              }
              return this._start
          }, e.endTime = function(t) {
              return this._start + (G(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts)
          }, e.rawTime = function(t) {
              var e = this.parent || this._dp;
              return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Ut(e.rawTime(t), this) : this._tTime : this._tTime
          }, e.globalTime = function(t) {
              for (var e = this, r = arguments.length ? t : e.rawTime(); e;) r = e._start + r / (e._ts || 1), e = e._dp;
              return r
          }, e.repeat = function(t) {
              return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, Zt(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
          }, e.repeatDelay = function(t) {
              return arguments.length ? (this._rDelay = t, Zt(this)) : this._rDelay
          }, e.yoyo = function(t) {
              return arguments.length ? (this._yoyo = t, this) : this._yoyo
          }, e.seek = function(t, e) {
              return this.totalTime(Kt(this, t), G(e))
          }, e.restart = function(t, e) {
              return this.play().totalTime(t ? -this._delay : 0, G(e))
          }, e.play = function(t, e) {
              return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
          }, e.reverse = function(t, e) {
              return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
          }, e.pause = function(t, e) {
              return null != t && this.seek(t, e), this.paused(!0)
          }, e.resume = function() {
              return this.paused(!1)
          }, e.reversed = function(t) {
              return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)), this) : this._rts < 0
          }, e.invalidate = function() {
              return this._initted = this._act = 0, this._zTime = -1e-8, this
          }, e.isActive = function() {
              var t, e = this.parent || this._dp,
                  r = this._start;
              return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - E))
          }, e.eventCallback = function(t, e, r) {
              var i = this.vars;
              return arguments.length > 1 ? (e ? (i[t] = e, r && (i[t + "Params"] = r), "onUpdate" === t && (this._onUpdate = e)) : delete i[t], this) : i[t]
          }, e.then = function(t) {
              var e = this;
              return new Promise((function(r) {
                  var i = Y(t) ? t : At,
                      n = function() {
                          var t = e.then;
                          e.then = null, Y(i) && (i = i(e)) && (i.then || i === e) && (e.then = t), r(i), e.then = t
                      };
                  e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? n() : e._prom = n
              }))
          }, e.kill = function() {
              me(this)
          }, t
      }();
  kt(Ye.prototype, {
      _time: 0,
      _start: 0,
      _end: 0,
      _tTime: 0,
      _tDur: 0,
      _dirty: 0,
      _repeat: 0,
      _yoyo: !1,
      parent: null,
      _initted: !1,
      _rDelay: 0,
      _ts: 1,
      _dp: 0,
      ratio: 0,
      _zTime: -1e-8,
      _prom: 0,
      _ps: !1,
      _rts: 1
  });
  var Ue = function(r) {
      function n(e, i) {
          var n;
          return void 0 === e && (e = {}), (n = r.call(this, e, i) || this).labels = {}, n.smoothChildTiming = !!e.smoothChildTiming, n.autoRemoveChildren = !!e.autoRemoveChildren, n._sort = G(e.sortChildren), n.parent && Gt(n.parent, t(n)), e.scrollTrigger && Wt(t(n), e.scrollTrigger), n
      }
      e(n, r);
      var s = n.prototype;
      return s.to = function(t, e, r) {
          return new Ze(t, Mt(arguments, 0, this), Kt(this, U(e) ? arguments[3] : r)), this
      }, s.from = function(t, e, r) {
          return new Ze(t, Mt(arguments, 1, this), Kt(this, U(e) ? arguments[3] : r)), this
      }, s.fromTo = function(t, e, r, i) {
          return new Ze(t, Mt(arguments, 2, this), Kt(this, U(e) ? arguments[4] : i)), this
      }, s.set = function(t, e, r) {
          return e.duration = 0, e.parent = this, zt(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new Ze(t, e, Kt(this, r), 1), this
      }, s.call = function(t, e, r) {
          return jt(this, Ze.delayedCall(0, t, e), Kt(this, r))
      }, s.staggerTo = function(t, e, r, i, n, s, a) {
          return r.duration = e, r.stagger = r.stagger || i, r.onComplete = s, r.onCompleteParams = a, r.parent = this, new Ze(t, r, Kt(this, n)), this
      }, s.staggerFrom = function(t, e, r, i, n, s, a) {
          return r.runBackwards = 1, zt(r).immediateRender = G(r.immediateRender), this.staggerTo(t, e, r, i, n, s, a)
      }, s.staggerFromTo = function(t, e, r, i, n, s, a, o) {
          return i.startAt = r, zt(i).immediateRender = G(i.immediateRender), this.staggerTo(t, e, i, n, s, a, o)
      }, s.render = function(t, e, r) {
          var n, s, a, o, u, h, l, f, c, p, _, d, m = this._time,
              g = this._dirty ? this.totalDuration() : this._tDur,
              v = this._dur,
              y = this !== i && t > g - E && t >= 0 ? g : t < E ? 0 : t,
              b = this._zTime < 0 != t < 0 && (this._initted || !v);
          if (y !== this._tTime || r || b) {
              if (m !== this._time && v && (y += this._time - m, t += this._time - m), n = y, c = this._start, h = !(f = this._ts), b && (v || (m = this._zTime), (t || !e) && (this._zTime = t)), this._repeat) {
                  if (_ = this._yoyo, u = v + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * u + t, e, r);
                  if (n = xt(y % u), y === g ? (o = this._repeat, n = v) : ((o = ~~(y / u)) && o === y / u && (n = v, o--), n > v && (n = v)), p = Yt(this._tTime, u), !m && this._tTime && p !== o && (p = o), _ && 1 & o && (n = v - n, d = 1), o !== p && !this._lock) {
                      var T = _ && 1 & p,
                          x = T === (_ && 1 & o);
                      if (o < p && (T = !T), m = T ? 0 : v, this._lock = 1, this.render(m || (d ? 0 : xt(o * u)), e, !v)._lock = 0, !e && this.parent && de(this, "onRepeat"), this.vars.repeatRefresh && !d && (this.invalidate()._lock = 1), m && m !== this._time || h !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                      if (v = this._dur, g = this._tDur, x && (this._lock = 2, m = T ? v : -1e-4, this.render(m, !0)), this._lock = 0, !this._ts && !h) return this;
                      ze(this, d)
                  }
              }
              if (this._hasPause && !this._forcing && this._lock < 2 && (l = function(t, e, r) {
                      var i;
                      if (r > e)
                          for (i = t._first; i && i._start <= r;) {
                              if (!i._dur && "isPause" === i.data && i._start > e) return i;
                              i = i._next
                          } else
                              for (i = t._last; i && i._start >= r;) {
                                  if (!i._dur && "isPause" === i.data && i._start < e) return i;
                                  i = i._prev
                              }
                  }(this, xt(m), xt(n))) && (y -= n - (n = l._start)), this._tTime = y, this._time = n, this._act = !f, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, m = 0), !m && n && !e && de(this, "onStart"), n >= m && t >= 0)
                  for (s = this._first; s;) {
                      if (a = s._next, (s._act || n >= s._start) && s._ts && l !== s) {
                          if (s.parent !== this) return this.render(t, e, r);
                          if (s.render(s._ts > 0 ? (n - s._start) * s._ts : (s._dirty ? s.totalDuration() : s._tDur) + (n - s._start) * s._ts, e, r), n !== this._time || !this._ts && !h) {
                              l = 0, a && (y += this._zTime = -1e-8);
                              break
                          }
                      }
                      s = a
                  } else {
                      s = this._last;
                      for (var w = t < 0 ? t : n; s;) {
                          if (a = s._prev, (s._act || w <= s._end) && s._ts && l !== s) {
                              if (s.parent !== this) return this.render(t, e, r);
                              if (s.render(s._ts > 0 ? (w - s._start) * s._ts : (s._dirty ? s.totalDuration() : s._tDur) + (w - s._start) * s._ts, e, r), n !== this._time || !this._ts && !h) {
                                  l = 0, a && (y += this._zTime = w ? -1e-8 : E);
                                  break
                              }
                          }
                          s = a
                      }
                  }
              if (l && !e && (this.pause(), l.render(n >= m ? 0 : -1e-8)._zTime = n >= m ? 1 : -1, this._ts)) return this._start = c, Xt(this), this.render(t, e, r);
              this._onUpdate && !e && de(this, "onUpdate", !0), (y === g && g >= this.totalDuration() || !y && m) && (c !== this._start && Math.abs(f) === Math.abs(this._ts) || this._lock || ((t || !v) && (y === g && this._ts > 0 || !y && this._ts < 0) && Bt(this, 1), e || t < 0 && !m || !y && !m || (de(this, y === g ? "onComplete" : "onReverseComplete", !0), this._prom && !(y < g && this.timeScale() > 0) && this._prom())))
          }
          return this
      }, s.add = function(t, e) {
          var r = this;
          if (U(e) || (e = Kt(this, e)), !(t instanceof Ye)) {
              if (Q(t)) return t.forEach((function(t) {
                  return r.add(t, e)
              })), this;
              if (V(t)) return this.addLabel(t, e);
              if (!Y(t)) return this;
              t = Ze.delayedCall(0, t)
          }
          return this !== t ? jt(this, t, e) : this
      }, s.getChildren = function(t, e, r, i) {
          void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), void 0 === i && (i = -1e8);
          for (var n = [], s = this._first; s;) s._start >= i && (s instanceof Ze ? e && n.push(s) : (r && n.push(s), t && n.push.apply(n, s.getChildren(!0, e, r)))), s = s._next;
          return n
      }, s.getById = function(t) {
          for (var e = this.getChildren(1, 1, 1), r = e.length; r--;)
              if (e[r].vars.id === t) return e[r]
      }, s.remove = function(t) {
          return V(t) ? this.removeLabel(t) : Y(t) ? this.killTweensOf(t) : (Rt(this, t), t === this._recent && (this._recent = this._last), Lt(this))
      }, s.totalTime = function(t, e) {
          return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = xt(Se.time - (this._ts > 0 ? t / this._ts : (this.totalDuration() - t) / -this._ts))), r.prototype.totalTime.call(this, t, e), this._forcing = 0, this) : this._tTime
      }, s.addLabel = function(t, e) {
          return this.labels[t] = Kt(this, e), this
      }, s.removeLabel = function(t) {
          return delete this.labels[t], this
      }, s.addPause = function(t, e, r) {
          var i = Ze.delayedCall(0, e || ht, r);
          return i.data = "isPause", this._hasPause = 1, jt(this, i, Kt(this, t))
      }, s.removePause = function(t) {
          var e = this._first;
          for (t = Kt(this, t); e;) e._start === t && "isPause" === e.data && Bt(e), e = e._next
      }, s.killTweensOf = function(t, e, r) {
          for (var i = this.getTweensOf(t, r), n = i.length; n--;) Xe !== i[n] && i[n].kill(t, e);
          return this
      }, s.getTweensOf = function(t, e) {
          for (var r, i = [], n = se(t), s = this._first, a = U(e); s;) s instanceof Ze ? wt(s._targets, n) && (a ? (!Xe || s._initted && s._ts) && s.globalTime(0) <= e && s.globalTime(s.totalDuration()) > e : !e || s.isActive()) && i.push(s) : (r = s.getTweensOf(n, e)).length && i.push.apply(i, r), s = s._next;
          return i
      }, s.tweenTo = function(t, e) {
          e = e || {};
          var r = this,
              i = Kt(r, t),
              n = e,
              s = n.startAt,
              a = n.onStart,
              o = n.onStartParams,
              u = n.immediateRender,
              h = Ze.to(r, kt({
                  ease: e.ease || "none",
                  lazy: !1,
                  immediateRender: !1,
                  time: i,
                  overwrite: "auto",
                  duration: e.duration || Math.abs((i - (s && "time" in s ? s.time : r._time)) / r.timeScale()) || E,
                  onStart: function() {
                      r.pause();
                      var t = e.duration || Math.abs((i - r._time) / r.timeScale());
                      h._dur !== t && $t(h, t, 0, 1).render(h._time, !0, !0), a && a.apply(h, o || [])
                  }
              }, e));
          return u ? h.render(0) : h
      }, s.tweenFromTo = function(t, e, r) {
          return this.tweenTo(e, kt({
              startAt: {
                  time: Kt(this, t)
              }
          }, r))
      }, s.recent = function() {
          return this._recent
      }, s.nextLabel = function(t) {
          return void 0 === t && (t = this._time), _e(this, Kt(this, t))
      }, s.previousLabel = function(t) {
          return void 0 === t && (t = this._time), _e(this, Kt(this, t), 1)
      }, s.currentLabel = function(t) {
          return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + E)
      }, s.shiftChildren = function(t, e, r) {
          void 0 === r && (r = 0);
          for (var i, n = this._first, s = this.labels; n;) n._start >= r && (n._start += t, n._end += t), n = n._next;
          if (e)
              for (i in s) s[i] >= r && (s[i] += t);
          return Lt(this)
      }, s.invalidate = function() {
          var t = this._first;
          for (this._lock = 0; t;) t.invalidate(), t = t._next;
          return r.prototype.invalidate.call(this)
      }, s.clear = function(t) {
          void 0 === t && (t = !0);
          for (var e, r = this._first; r;) e = r._next, this.remove(r), r = e;
          return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), Lt(this)
      }, s.totalDuration = function(t) {
          var e, r, n, s = 0,
              a = this,
              o = a._last,
              u = P;
          if (arguments.length) return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -t : t));
          if (a._dirty) {
              for (n = a.parent; o;) e = o._prev, o._dirty && o.totalDuration(), (r = o._start) > u && a._sort && o._ts && !a._lock ? (a._lock = 1, jt(a, o, r - o._delay, 1)._lock = 0) : u = r, r < 0 && o._ts && (s -= r, (!n && !a._dp || n && n.smoothChildTiming) && (a._start += r / a._ts, a._time -= r, a._tTime -= r), a.shiftChildren(-r, !1, -Infinity), u = 0), o._end > s && o._ts && (s = o._end), o = e;
              $t(a, a === i && a._time > s ? a._time : s, 1, 1), a._dirty = 0
          }
          return a._tDur
      }, n.updateRoot = function(t) {
          if (i._ts && (Dt(i, Ut(t, i)), u = Se.frame), Se.frame >= dt) {
              dt += C.autoSleep || 120;
              var e = i._first;
              if ((!e || !e._ts) && C.autoSleep && Se._listeners.length < 2) {
                  for (; e && !e._ts;) e = e._next;
                  e || Se.sleep()
              }
          }
      }, n
  }(Ye);
  kt(Ue.prototype, {
      _lock: 0,
      _hasPause: 0,
      _forcing: 0
  });
  var Xe, Ne = function(t, e, r, i, n, s, a) {
          var o, u, h, l, f, c, p, _, d = new fr(this._pt, t, e, 0, 1, sr, null, n),
              m = 0,
              g = 0;
          for (d.b = r, d.e = i, r += "", (p = ~(i += "").indexOf("random(")) && (i = ce(i)), s && (s(_ = [r, i], t, e), r = _[0], i = _[1]), u = r.match(K) || []; o = K.exec(i);) l = o[0], f = i.substring(m, o.index), h ? h = (h + 1) % 5 : "rgba(" === f.substr(-5) && (h = 1), l !== u[g++] && (c = parseFloat(u[g - 1]) || 0, d._pt = {
              _next: d._pt,
              p: f || 1 === g ? f : ",",
              s: c,
              c: "=" === l.charAt(1) ? parseFloat(l.substr(2)) * ("-" === l.charAt(0) ? -1 : 1) : parseFloat(l) - c,
              m: h && h < 4 ? Math.round : 0
          }, m = K.lastIndex);
          return d.c = m < i.length ? i.substring(m, i.length) : "", d.fp = a, (tt.test(i) || p) && (d.e = 0), this._pt = d, d
      },
      Ge = function(t, e, r, i, n, s, a, o, u) {
          Y(i) && (i = i(n || 0, t, s));
          var h, l = t[e],
              f = "get" !== r ? r : Y(l) ? u ? t[e.indexOf("set") || !Y(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](u) : t[e]() : l,
              c = Y(l) ? u ? tr : Ke : Je;
          if (V(i) && (~i.indexOf("random(") && (i = ce(i)), "=" === i.charAt(1) && (i = parseFloat(f) + parseFloat(i.substr(2)) * ("-" === i.charAt(0) ? -1 : 1) + (re(f) || 0))), f !== i) return isNaN(f * i) ? (!l && !(e in t) && at(e, i), Ne.call(this, t, e, f, i, c, o || C.stringFilter, u)) : (h = new fr(this._pt, t, e, +f || 0, i - (f || 0), "boolean" == typeof l ? nr : ir, 0, c), u && (h.fp = u), a && h.modifier(a, this, t), this._pt = h)
      },
      je = function(t, e, r, i, n, s) {
          var a, o, u, l;
          if (pt[t] && !1 !== (a = new pt[t]).init(n, a.rawVars ? e[t] : function(t, e, r, i, n) {
                  if (Y(t) && (t = He(t, n, e, r, i)), !N(t) || t.style && t.nodeType || Q(t) || H(t)) return V(t) ? He(t, n, e, r, i) : t;
                  var s, a = {};
                  for (s in t) a[s] = He(t[s], n, e, r, i);
                  return a
              }(e[t], i, n, s, r), r, i, s) && (r._pt = o = new fr(r._pt, n, t, 0, 1, a.render, a, 0, a.priority), r !== h))
              for (u = r._ptLookup[r._targets.indexOf(n)], l = a._props.length; l--;) u[a._props[l]] = o;
          return a
      },
      We = function t(e, n) {
          var s, a, o, u, h, l, f, c, p, _, d, m, g, v = e.vars,
              y = v.ease,
              b = v.startAt,
              T = v.immediateRender,
              x = v.lazy,
              w = v.onUpdate,
              M = v.onUpdateParams,
              O = v.callbackScope,
              D = v.runBackwards,
              S = v.yoyoEase,
              A = v.keyframes,
              k = v.autoRevert,
              C = e._dur,
              P = e._startAt,
              z = e._targets,
              R = e.parent,
              B = R && "nested" === R.data ? R.parent._targets : z,
              L = "auto" === e._overwrite && !r,
              q = e.timeline;
          if (q && (!A || !y) && (y = "none"), e._ease = Re(y, F.ease), e._yEase = S ? Ee(Re(!0 === S ? y : S, F.ease)) : 0, S && e._yoyo && !e._repeat && (S = e._yEase, e._yEase = e._ease, e._ease = S), !q) {
              if (m = (c = z[0] ? yt(z[0]).harness : 0) && v[c.prop], s = Et(v, lt), P && P.render(-1, !0).kill(), b)
                  if (Bt(e._startAt = Ze.set(z, kt({
                          data: "isStart",
                          overwrite: !1,
                          parent: R,
                          immediateRender: !0,
                          lazy: G(x),
                          startAt: null,
                          delay: 0,
                          onUpdate: w,
                          onUpdateParams: M,
                          callbackScope: O,
                          stagger: 0
                      }, b))), T) {
                      if (n > 0) k || (e._startAt = 0);
                      else if (C && !(n < 0 && P)) return void(n && (e._zTime = n))
                  } else !1 === k && (e._startAt = 0);
              else if (D && C)
                  if (P) !k && (e._startAt = 0);
                  else if (n && (T = !1), o = kt({
                      overwrite: !1,
                      data: "isFromStart",
                      lazy: T && G(x),
                      immediateRender: T,
                      stagger: 0,
                      parent: R
                  }, s), m && (o[c.prop] = m), Bt(e._startAt = Ze.set(z, o)), T) {
                  if (!n) return
              } else t(e._startAt, E);
              for (e._pt = 0, x = C && G(x) || x && !C, a = 0; a < z.length; a++) {
                  if (f = (h = z[a])._gsap || vt(z)[a]._gsap, e._ptLookup[a] = _ = {}, ct[f.id] && ft.length && Ot(), d = B === z ? a : B.indexOf(h), c && !1 !== (p = new c).init(h, m || s, e, d, B) && (e._pt = u = new fr(e._pt, h, p.name, 0, 1, p.render, p, 0, p.priority), p._props.forEach((function(t) {
                          _[t] = u
                      })), p.priority && (l = 1)), !c || m)
                      for (o in s) pt[o] && (p = je(o, s, e, d, h, B)) ? p.priority && (l = 1) : _[o] = u = Ge.call(e, h, o, "get", s[o], d, B, 0, v.stringFilter);
                  e._op && e._op[a] && e.kill(h, e._op[a]), L && e._pt && (Xe = e, i.killTweensOf(h, _, e.globalTime(0)), g = !e.parent, Xe = 0), e._pt && x && (ct[f.id] = 1)
              }
              l && lr(e), e._onInit && e._onInit(e)
          }
          e._from = !q && !!v.runBackwards, e._onUpdate = w, e._initted = (!e._op || e._pt) && !g
      },
      He = function(t, e, r, i, n) {
          return Y(t) ? t.call(e, r, i, n) : V(t) && ~t.indexOf("random(") ? ce(t) : t
      },
      Qe = gt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
      $e = (Qe + ",id,stagger,delay,duration,paused,scrollTrigger").split(","),
      Ze = function(n) {
          function s(e, s, a, o) {
              var u;
              "number" == typeof s && (a.duration = s, s = a, a = null);
              var h, l, f, c, p, _, d, m, g = (u = n.call(this, o ? s : zt(s), a) || this).vars,
                  v = g.duration,
                  y = g.delay,
                  b = g.immediateRender,
                  T = g.stagger,
                  x = g.overwrite,
                  w = g.keyframes,
                  M = g.defaults,
                  O = g.scrollTrigger,
                  D = g.yoyoEase,
                  S = u.parent,
                  A = (Q(e) || H(e) ? U(e[0]) : "length" in s) ? [e] : se(e);
              if (u._targets = A.length ? vt(A) : ot("GSAP target " + e + " not found. https://greensock.com", !C.nullTargetWarn) || [], u._ptLookup = [], u._overwrite = x, w || T || W(v) || W(y)) {
                  if (s = u.vars, (h = u.timeline = new Ue({
                          data: "nested",
                          defaults: M || {}
                      })).kill(), h.parent = h._dp = t(u), h._start = 0, w) kt(h.vars.defaults, {
                      ease: "none"
                  }), w.forEach((function(t) {
                      return h.to(A, t, ">")
                  }));
                  else {
                      if (c = A.length, d = T ? oe(T) : ht, N(T))
                          for (p in T) ~Qe.indexOf(p) && (m || (m = {}), m[p] = T[p]);
                      for (l = 0; l < c; l++) {
                          for (p in f = {}, s) $e.indexOf(p) < 0 && (f[p] = s[p]);
                          f.stagger = 0, D && (f.yoyoEase = D), m && Ft(f, m), _ = A[l], f.duration = +He(v, t(u), l, _, A), f.delay = (+He(y, t(u), l, _, A) || 0) - u._delay, !T && 1 === c && f.delay && (u._delay = y = f.delay, u._start += y, f.delay = 0), h.to(_, f, d(l, _, A))
                      }
                      h.duration() ? v = y = 0 : u.timeline = 0
                  }
                  v || u.duration(v = h.duration())
              } else u.timeline = 0;
              return !0 !== x || r || (Xe = t(u), i.killTweensOf(A), Xe = 0), S && Gt(S, t(u)), (b || !v && !w && u._start === xt(S._time) && G(b) && It(t(u)) && "nested" !== S.data) && (u._tTime = -1e-8, u.render(Math.max(0, -y))), O && Wt(t(u), O), u
          }
          e(s, n);
          var a = s.prototype;
          return a.render = function(t, e, r) {
              var i, n, s, a, o, u, h, l, f, c = this._time,
                  p = this._tDur,
                  _ = this._dur,
                  d = t > p - E && t >= 0 ? p : t < E ? 0 : t;
              if (_) {
                  if (d !== this._tTime || !t || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 != t < 0) {
                      if (i = d, l = this.timeline, this._repeat) {
                          if (a = _ + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * a + t, e, r);
                          if (i = xt(d % a), d === p ? (s = this._repeat, i = _) : ((s = ~~(d / a)) && s === d / a && (i = _, s--), i > _ && (i = _)), (u = this._yoyo && 1 & s) && (f = this._yEase, i = _ - i), o = Yt(this._tTime, a), i === c && !r && this._initted) return this;
                          s !== o && (l && this._yEase && ze(l, u), !this.vars.repeatRefresh || u || this._lock || (this._lock = r = 1, this.render(xt(a * s), !0).invalidate()._lock = 0))
                      }
                      if (!this._initted) {
                          if (Ht(this, t < 0 ? t : i, r, e)) return this._tTime = 0, this;
                          if (_ !== this._dur) return this.render(t, e, r)
                      }
                      for (this._tTime = d, this._time = i, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = h = (f || this._ease)(i / _), this._from && (this.ratio = h = 1 - h), i && !c && !e && de(this, "onStart"), n = this._pt; n;) n.r(h, n.d), n = n._next;
                      l && l.render(t < 0 ? t : !i && u ? -1e-8 : l._dur * h, e, r) || this._startAt && (this._zTime = t), this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, r), de(this, "onUpdate")), this._repeat && s !== o && this.vars.onRepeat && !e && this.parent && de(this, "onRepeat"), d !== this._tDur && d || this._tTime !== d || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0), (t || !_) && (d === this._tDur && this._ts > 0 || !d && this._ts < 0) && Bt(this, 1), e || t < 0 && !c || !d && !c || (de(this, d === p ? "onComplete" : "onReverseComplete", !0), this._prom && !(d < p && this.timeScale() > 0) && this._prom()))
                  }
              } else ! function(t, e, r, i) {
                  var n, s, a, o = t.ratio,
                      u = e < 0 || !e && (!t._start && Qt(t) || (t._ts < 0 || t._dp._ts < 0) && "isFromStart" !== t.data && "isStart" !== t.data) ? 0 : 1,
                      h = t._rDelay,
                      l = 0;
                  if (h && t._repeat && (l = ee(0, t._tDur, e), s = Yt(l, h), a = Yt(t._tTime, h), t._yoyo && 1 & s && (u = 1 - u), s !== a && (o = 1 - u, t.vars.repeatRefresh && t._initted && t.invalidate())), u !== o || i || t._zTime === E || !e && t._zTime) {
                      if (!t._initted && Ht(t, e, i, r)) return;
                      for (a = t._zTime, t._zTime = e || (r ? E : 0), r || (r = e && !a), t.ratio = u, t._from && (u = 1 - u), t._time = 0, t._tTime = l, n = t._pt; n;) n.r(u, n.d), n = n._next;
                      t._startAt && e < 0 && t._startAt.render(e, !0, !0), t._onUpdate && !r && de(t, "onUpdate"), l && t._repeat && !r && t.parent && de(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === u && (u && Bt(t, 1), r || (de(t, u ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
                  } else t._zTime || (t._zTime = e)
              }(this, t, e, r);
              return this
          }, a.targets = function() {
              return this._targets
          }, a.invalidate = function() {
              return this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), n.prototype.invalidate.call(this)
          }, a.kill = function(t, e) {
              if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? me(this) : this;
              if (this.timeline) {
                  var r = this.timeline.totalDuration();
                  return this.timeline.killTweensOf(t, e, Xe && !0 !== Xe.vars.overwrite)._first || me(this), this.parent && r !== this.timeline.totalDuration() && $t(this, this._dur * this.timeline._tDur / r, 0, 1), this
              }
              var i, n, s, a, o, u, h, l = this._targets,
                  f = t ? se(t) : l,
                  c = this._ptLookup,
                  p = this._pt;
              if ((!e || "all" === e) && function(t, e) {
                      for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r];);
                      return r < 0
                  }(l, f)) return "all" === e && (this._pt = 0), me(this);
              for (i = this._op = this._op || [], "all" !== e && (V(e) && (o = {}, Tt(e, (function(t) {
                      return o[t] = 1
                  })), e = o), e = function(t, e) {
                      var r, i, n, s, a = t[0] ? yt(t[0]).harness : 0,
                          o = a && a.aliases;
                      if (!o) return e;
                      for (i in r = Ft({}, e), o)
                          if (i in r)
                              for (n = (s = o[i].split(",")).length; n--;) r[s[n]] = r[i];
                      return r
                  }(l, e)), h = l.length; h--;)
                  if (~f.indexOf(l[h]))
                      for (o in n = c[h], "all" === e ? (i[h] = e, a = n, s = {}) : (s = i[h] = i[h] || {}, a = e), a)(u = n && n[o]) && ("kill" in u.d && !0 !== u.d.kill(o) || Rt(this, u, "_pt"), delete n[o]), "all" !== s && (s[o] = 1);
              return this._initted && !this._pt && p && me(this), this
          }, s.to = function(t, e) {
              return new s(t, e, arguments[2])
          }, s.from = function(t, e) {
              return new s(t, Mt(arguments, 1))
          }, s.delayedCall = function(t, e, r, i) {
              return new s(e, 0, {
                  immediateRender: !1,
                  lazy: !1,
                  overwrite: !1,
                  delay: t,
                  onComplete: e,
                  onReverseComplete: e,
                  onCompleteParams: r,
                  onReverseCompleteParams: r,
                  callbackScope: i
              })
          }, s.fromTo = function(t, e, r) {
              return new s(t, Mt(arguments, 2))
          }, s.set = function(t, e) {
              return e.duration = 0, e.repeatDelay || (e.repeat = 0), new s(t, e)
          }, s.killTweensOf = function(t, e, r) {
              return i.killTweensOf(t, e, r)
          }, s
      }(Ye);
  kt(Ze.prototype, {
      _targets: [],
      _lazy: 0,
      _startAt: 0,
      _op: 0,
      _onInit: 0
  }), Tt("staggerTo,staggerFrom,staggerFromTo", (function(t) {
      Ze[t] = function() {
          var e = new Ue,
              r = ie.call(arguments, 0);
          return r.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, r)
      }
  }));
  var Je = function(t, e, r) {
          return t[e] = r
      },
      Ke = function(t, e, r) {
          return t[e](r)
      },
      tr = function(t, e, r, i) {
          return t[e](i.fp, r)
      },
      er = function(t, e, r) {
          return t.setAttribute(e, r)
      },
      rr = function(t, e) {
          return Y(t[e]) ? Ke : X(t[e]) && t.setAttribute ? er : Je
      },
      ir = function(t, e) {
          return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e)
      },
      nr = function(t, e) {
          return e.set(e.t, e.p, !!(e.s + e.c * t), e)
      },
      sr = function(t, e) {
          var r = e._pt,
              i = "";
          if (!t && e.b) i = e.b;
          else if (1 === t && e.e) i = e.e;
          else {
              for (; r;) i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + i, r = r._next;
              i += e.c
          }
          e.set(e.t, e.p, i, e)
      },
      ar = function(t, e) {
          for (var r = e._pt; r;) r.r(t, r.d), r = r._next
      },
      or = function(t, e, r, i) {
          for (var n, s = this._pt; s;) n = s._next, s.p === i && s.modifier(t, e, r), s = n
      },
      ur = function(t) {
          for (var e, r, i = this._pt; i;) r = i._next, i.p === t && !i.op || i.op === t ? Rt(this, i, "_pt") : i.dep || (e = 1), i = r;
          return !e
      },
      hr = function(t, e, r, i) {
          i.mSet(t, e, i.m.call(i.tween, r, i.mt), i)
      },
      lr = function(t) {
          for (var e, r, i, n, s = t._pt; s;) {
              for (e = s._next, r = i; r && r.pr > s.pr;) r = r._next;
              (s._prev = r ? r._prev : n) ? s._prev._next = s: i = s, (s._next = r) ? r._prev = s : n = s, s = e
          }
          t._pt = i
      },
      fr = function() {
          function t(t, e, r, i, n, s, a, o, u) {
              this.t = e, this.s = i, this.c = n, this.p = r, this.r = s || ir, this.d = a || this, this.set = o || Je, this.pr = u || 0, this._next = t, t && (t._prev = this)
          }
          return t.prototype.modifier = function(t, e, r) {
              this.mSet = this.mSet || this.set, this.set = hr, this.m = t, this.mt = r, this.tween = e
          }, t
      }();
  Tt(gt + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (function(t) {
      return lt[t] = 1
  })), it.TweenMax = it.TweenLite = Ze, it.TimelineLite = it.TimelineMax = Ue, i = new Ue({
      sortChildren: !1,
      defaults: F,
      autoRemoveChildren: !0,
      id: "root",
      smoothChildTiming: !0
  }), C.stringFilter = De;
  var cr = {
      registerPlugin: function() {
          for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
          e.forEach((function(t) {
              return ge(t)
          }))
      },
      timeline: function(t) {
          return new Ue(t)
      },
      getTweensOf: function(t, e) {
          return i.getTweensOf(t, e)
      },
      getProperty: function(t, e, r, i) {
          V(t) && (t = se(t)[0]);
          var n = yt(t || {}).get,
              s = r ? At : St;
          return "native" === r && (r = ""), t ? e ? s((pt[e] && pt[e].get || n)(t, e, r, i)) : function(e, r, i) {
              return s((pt[e] && pt[e].get || n)(t, e, r, i))
          } : t
      },
      quickSetter: function(t, e, r) {
          if ((t = se(t)).length > 1) {
              var i = t.map((function(t) {
                      return dr.quickSetter(t, e, r)
                  })),
                  n = i.length;
              return function(t) {
                  for (var e = n; e--;) i[e](t)
              }
          }
          t = t[0] || {};
          var s = pt[e],
              a = yt(t),
              o = a.harness && (a.harness.aliases || {})[e] || e,
              u = s ? function(e) {
                  var i = new s;
                  h._pt = 0, i.init(t, r ? e + r : e, h, 0, [t]), i.render(1, i), h._pt && ar(1, h)
              } : a.set(t, o);
          return s ? u : function(e) {
              return u(t, o, r ? e + r : e, a, 1)
          }
      },
      isTweening: function(t) {
          return i.getTweensOf(t, !0).length > 0
      },
      defaults: function(t) {
          return t && t.ease && (t.ease = Re(t.ease, F.ease)), Pt(F, t || {})
      },
      config: function(t) {
          return Pt(C, t || {})
      },
      registerEffect: function(t) {
          var e = t.name,
              r = t.effect,
              i = t.plugins,
              n = t.defaults,
              s = t.extendTimeline;
          (i || "").split(",").forEach((function(t) {
              return t && !pt[t] && !it[t] && ot(e + " effect requires " + t + " plugin.")
          })), _t[e] = function(t, e, i) {
              return r(se(t), kt(e || {}, n), i)
          }, s && (Ue.prototype[e] = function(t, r, i) {
              return this.add(_t[e](t, N(r) ? r : (i = r) && {}, this), i)
          })
      },
      registerEase: function(t, e) {
          ke[t] = Re(e)
      },
      parseEase: function(t, e) {
          return arguments.length ? Re(t, e) : ke
      },
      getById: function(t) {
          return i.getById(t)
      },
      exportRoot: function(t, e) {
          void 0 === t && (t = {});
          var r, n, s = new Ue(t);
          for (s.smoothChildTiming = G(t.smoothChildTiming), i.remove(s), s._dp = 0, s._time = s._tTime = i._time, r = i._first; r;) n = r._next, !e && !r._dur && r instanceof Ze && r.vars.onComplete === r._targets[0] || jt(s, r, r._start - r._delay), r = n;
          return jt(i, s, 0), s
      },
      utils: {
          wrap: function t(e, r, i) {
              var n = r - e;
              return Q(e) ? fe(e, t(0, e.length), r) : te(i, (function(t) {
                  return (n + (t - e) % n) % n + e
              }))
          },
          wrapYoyo: function t(e, r, i) {
              var n = r - e,
                  s = 2 * n;
              return Q(e) ? fe(e, t(0, e.length - 1), r) : te(i, (function(t) {
                  return e + ((t = (s + (t - e) % s) % s || 0) > n ? s - t : t)
              }))
          },
          distribute: oe,
          random: le,
          snap: he,
          normalize: function(t, e, r) {
              return pe(t, e, 0, 1, r)
          },
          getUnit: re,
          clamp: function(t, e, r) {
              return te(r, (function(r) {
                  return ee(t, e, r)
              }))
          },
          splitColor: Te,
          toArray: se,
          mapRange: pe,
          pipe: function() {
              for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
              return function(t) {
                  return e.reduce((function(t, e) {
                      return e(t)
                  }), t)
              }
          },
          unitize: function(t, e) {
              return function(r) {
                  return t(parseFloat(r)) + (e || re(r))
              }
          },
          interpolate: function t(e, r, i, n) {
              var s = isNaN(e + r) ? 0 : function(t) {
                  return (1 - t) * e + t * r
              };
              if (!s) {
                  var a, o, u, h, l, f = V(e),
                      c = {};
                  if (!0 === i && (n = 1) && (i = null), f) e = {
                      p: e
                  }, r = {
                      p: r
                  };
                  else if (Q(e) && !Q(r)) {
                      for (u = [], h = e.length, l = h - 2, o = 1; o < h; o++) u.push(t(e[o - 1], e[o]));
                      h--, s = function(t) {
                          t *= h;
                          var e = Math.min(l, ~~t);
                          return u[e](t - e)
                      }, i = r
                  } else n || (e = Ft(Q(e) ? [] : {}, e));
                  if (!u) {
                      for (a in r) Ge.call(c, e, a, "get", r[a]);
                      s = function(t) {
                          return ar(t, c) || (f ? e.p : e)
                      }
                  }
              }
              return te(i, s)
          },
          shuffle: ae
      },
      install: st,
      effects: _t,
      ticker: Se,
      updateRoot: Ue.updateRoot,
      plugins: pt,
      globalTimeline: i,
      core: {
          PropTween: fr,
          globals: ut,
          Tween: Ze,
          Timeline: Ue,
          Animation: Ye,
          getCache: yt,
          _removeLinkedListItem: Rt,
          suppressOverwrites: function(t) {
              return r = t
          }
      }
  };
  Tt("to,from,fromTo,delayedCall,set,killTweensOf", (function(t) {
      return cr[t] = Ze[t]
  })), Se.add(Ue.updateRoot), h = cr.to({}, {
      duration: 0
  });
  var pr = function(t, e) {
          for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e;) r = r._next;
          return r
      },
      _r = function(t, e) {
          return {
              name: t,
              rawVars: 1,
              init: function(t, r, i) {
                  i._onInit = function(t) {
                      var i, n;
                      if (V(r) && (i = {}, Tt(r, (function(t) {
                              return i[t] = 1
                          })), r = i), e) {
                          for (n in i = {}, r) i[n] = e(r[n]);
                          r = i
                      }! function(t, e) {
                          var r, i, n, s = t._targets;
                          for (r in e)
                              for (i = s.length; i--;)(n = t._ptLookup[i][r]) && (n = n.d) && (n._pt && (n = pr(n, r)), n && n.modifier && n.modifier(e[r], t, s[i], r))
                      }(t, r)
                  }
              }
          }
      },
      dr = cr.registerPlugin({
          name: "attr",
          init: function(t, e, r, i, n) {
              var s, a;
              for (s in e)(a = this.add(t, "setAttribute", (t.getAttribute(s) || 0) + "", e[s], i, n, 0, 0, s)) && (a.op = s), this._props.push(s)
          }
      }, {
          name: "endArray",
          init: function(t, e) {
              for (var r = e.length; r--;) this.add(t, r, t[r] || 0, e[r])
          }
      }, _r("roundProps", ue), _r("modifiers"), _r("snap", he)) || cr;
  Ze.version = Ue.version = dr.version = "3.6.1", o = 1, j() && Ae();
  ke.Power0, ke.Power1, ke.Power2, ke.Power3, ke.Power4, ke.Linear, ke.Quad, ke.Cubic, ke.Quart, ke.Quint, ke.Strong, ke.Elastic, ke.Back, ke.SteppedEase, ke.Bounce, ke.Sine, ke.Expo, ke.Circ;
  var mr, gr, vr, yr, br, Tr, xr, wr = {},
      Mr = 180 / Math.PI,
      Or = Math.PI / 180,
      Dr = Math.atan2,
      Sr = /([A-Z])/g,
      Ar = /(?:left|right|width|margin|padding|x)/i,
      kr = /[\s,\(]\S/,
      Cr = {
          autoAlpha: "opacity,visibility",
          scale: "scaleX,scaleY",
          alpha: "opacity"
      },
      Fr = function(t, e) {
          return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
      },
      Pr = function(t, e) {
          return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
      },
      Er = function(t, e) {
          return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
      },
      zr = function(t, e) {
          var r = e.s + e.c * t;
          e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e)
      },
      Rr = function(t, e) {
          return e.set(e.t, e.p, t ? e.e : e.b, e)
      },
      Br = function(t, e) {
          return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
      },
      Lr = function(t, e, r) {
          return t.style[e] = r
      },
      qr = function(t, e, r) {
          return t.style.setProperty(e, r)
      },
      Ir = function(t, e, r) {
          return t._gsap[e] = r
      },
      Vr = function(t, e, r) {
          return t._gsap.scaleX = t._gsap.scaleY = r
      },
      Yr = function(t, e, r, i, n) {
          var s = t._gsap;
          s.scaleX = s.scaleY = r, s.renderTransform(n, s)
      },
      Ur = function(t, e, r, i, n) {
          var s = t._gsap;
          s[e] = r, s.renderTransform(n, s)
      },
      Xr = "transform",
      Nr = Xr + "Origin",
      Gr = function(t, e) {
          var r = gr.createElementNS ? gr.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : gr.createElement(t);
          return r.style ? r : gr.createElement(t)
      },
      jr = function t(e, r, i) {
          var n = getComputedStyle(e);
          return n[r] || n.getPropertyValue(r.replace(Sr, "-$1").toLowerCase()) || n.getPropertyValue(r) || !i && t(e, Hr(r) || r, 1) || ""
      },
      Wr = "O,Moz,ms,Ms,Webkit".split(","),
      Hr = function(t, e, r) {
          var i = (e || br).style,
              n = 5;
          if (t in i && !r) return t;
          for (t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(Wr[n] + t in i););
          return n < 0 ? null : (3 === n ? "ms" : n >= 0 ? Wr[n] : "") + t
      },
      Qr = function() {
          "undefined" != typeof window && window.document && (mr = window, gr = mr.document, vr = gr.documentElement, br = Gr("div") || {
              style: {}
          }, Gr("div"), Xr = Hr(Xr), Nr = Xr + "Origin", br.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", xr = !!Hr("perspective"), yr = 1)
      },
      $r = function t(e) {
          var r, i = Gr("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
              n = this.parentNode,
              s = this.nextSibling,
              a = this.style.cssText;
          if (vr.appendChild(i), i.appendChild(this), this.style.display = "block", e) try {
              r = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = t
          } catch (t) {} else this._gsapBBox && (r = this._gsapBBox());
          return n && (s ? n.insertBefore(this, s) : n.appendChild(this)), vr.removeChild(i), this.style.cssText = a, r
      },
      Zr = function(t, e) {
          for (var r = e.length; r--;)
              if (t.hasAttribute(e[r])) return t.getAttribute(e[r])
      },
      Jr = function(t) {
          var e;
          try {
              e = t.getBBox()
          } catch (r) {
              e = $r.call(t, !0)
          }
          return e && (e.width || e.height) || t.getBBox === $r || (e = $r.call(t, !0)), !e || e.width || e.x || e.y ? e : {
              x: +Zr(t, ["x", "cx", "x1"]) || 0,
              y: +Zr(t, ["y", "cy", "y1"]) || 0,
              width: 0,
              height: 0
          }
      },
      Kr = function(t) {
          return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !Jr(t))
      },
      ti = function(t, e) {
          if (e) {
              var r = t.style;
              e in wr && e !== Nr && (e = Xr), r.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), r.removeProperty(e.replace(Sr, "-$1").toLowerCase())) : r.removeAttribute(e)
          }
      },
      ei = function(t, e, r, i, n, s) {
          var a = new fr(t._pt, e, r, 0, 1, s ? Br : Rr);
          return t._pt = a, a.b = i, a.e = n, t._props.push(r), a
      },
      ri = {
          deg: 1,
          rad: 1,
          turn: 1
      },
      ii = function t(e, r, i, n) {
          var s, a, o, u, h = parseFloat(i) || 0,
              l = (i + "").trim().substr((h + "").length) || "px",
              f = br.style,
              c = Ar.test(r),
              p = "svg" === e.tagName.toLowerCase(),
              _ = (p ? "client" : "offset") + (c ? "Width" : "Height"),
              d = 100,
              m = "px" === n,
              g = "%" === n;
          return n === l || !h || ri[n] || ri[l] ? h : ("px" !== l && !m && (h = t(e, r, i, "px")), u = e.getCTM && Kr(e), !g && "%" !== l || !wr[r] && !~r.indexOf("adius") ? (f[c ? "width" : "height"] = d + (m ? l : n), a = ~r.indexOf("adius") || "em" === n && e.appendChild && !p ? e : e.parentNode, u && (a = (e.ownerSVGElement || {}).parentNode), a && a !== gr && a.appendChild || (a = gr.body), (o = a._gsap) && g && o.width && c && o.time === Se.time ? xt(h / o.width * d) : ((g || "%" === l) && (f.position = jr(e, "position")), a === e && (f.position = "static"), a.appendChild(br), s = br[_], a.removeChild(br), f.position = "absolute", c && g && ((o = yt(a)).time = Se.time, o.width = a[_]), xt(m ? s * h / d : s && h ? d / s * h : 0))) : (s = u ? e.getBBox()[c ? "width" : "height"] : e[_], xt(g ? h / s * d : h / 100 * s)))
      },
      ni = function(t, e, r, i) {
          var n;
          return yr || Qr(), e in Cr && "transform" !== e && ~(e = Cr[e]).indexOf(",") && (e = e.split(",")[0]), wr[e] && "transform" !== e ? (n = di(t, i), n = "transformOrigin" !== e ? n[e] : mi(jr(t, Nr)) + " " + n.zOrigin + "px") : (!(n = t.style[e]) || "auto" === n || i || ~(n + "").indexOf("calc(")) && (n = ui[e] && ui[e](t, e, r) || jr(t, e) || bt(t, e) || ("opacity" === e ? 1 : 0)), r && !~(n + "").trim().indexOf(" ") ? ii(t, e, n, r) + r : n
      },
      si = function(t, e, r, i) {
          if (!r || "none" === r) {
              var n = Hr(e, t, 1),
                  s = n && jr(t, n, 1);
              s && s !== r ? (e = n, r = s) : "borderColor" === e && (r = jr(t, "borderTopColor"))
          }
          var a, o, u, h, l, f, c, p, _, d, m, g, v = new fr(this._pt, t.style, e, 0, 1, sr),
              y = 0,
              b = 0;
          if (v.b = r, v.e = i, r += "", "auto" === (i += "") && (t.style[e] = i, i = jr(t, e) || i, t.style[e] = r), De(a = [r, i]), i = a[1], u = (r = a[0]).match(J) || [], (i.match(J) || []).length) {
              for (; o = J.exec(i);) c = o[0], _ = i.substring(y, o.index), l ? l = (l + 1) % 5 : "rgba(" !== _.substr(-5) && "hsla(" !== _.substr(-5) || (l = 1), c !== (f = u[b++] || "") && (h = parseFloat(f) || 0, m = f.substr((h + "").length), (g = "=" === c.charAt(1) ? +(c.charAt(0) + "1") : 0) && (c = c.substr(2)), p = parseFloat(c), d = c.substr((p + "").length), y = J.lastIndex - d.length, d || (d = d || C.units[e] || m, y === i.length && (i += d, v.e += d)), m !== d && (h = ii(t, e, f, d) || 0), v._pt = {
                  _next: v._pt,
                  p: _ || 1 === b ? _ : ",",
                  s: h,
                  c: g ? g * p : p - h,
                  m: l && l < 4 || "zIndex" === e ? Math.round : 0
              });
              v.c = y < i.length ? i.substring(y, i.length) : ""
          } else v.r = "display" === e && "none" === i ? Br : Rr;
          return tt.test(i) && (v.e = 0), this._pt = v, v
      },
      ai = {
          top: "0%",
          bottom: "100%",
          left: "0%",
          right: "100%",
          center: "50%"
      },
      oi = function(t, e) {
          if (e.tween && e.tween._time === e.tween._dur) {
              var r, i, n, s = e.t,
                  a = s.style,
                  o = e.u,
                  u = s._gsap;
              if ("all" === o || !0 === o) a.cssText = "", i = 1;
              else
                  for (n = (o = o.split(",")).length; --n > -1;) r = o[n], wr[r] && (i = 1, r = "transformOrigin" === r ? Nr : Xr), ti(s, r);
              i && (ti(s, Xr), u && (u.svg && s.removeAttribute("transform"), di(s, 1), u.uncache = 1))
          }
      },
      ui = {
          clearProps: function(t, e, r, i, n) {
              if ("isFromStart" !== n.data) {
                  var s = t._pt = new fr(t._pt, e, r, 0, 0, oi);
                  return s.u = i, s.pr = -10, s.tween = n, t._props.push(r), 1
              }
          }
      },
      hi = [1, 0, 0, 1, 0, 0],
      li = {},
      fi = function(t) {
          return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
      },
      ci = function(t) {
          var e = jr(t, Xr);
          return fi(e) ? hi : e.substr(7).match(Z).map(xt)
      },
      pi = function(t, e) {
          var r, i, n, s, a = t._gsap || yt(t),
              o = t.style,
              u = ci(t);
          return a.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(n = t.transform.baseVal.consolidate().matrix).a, n.b, n.c, n.d, n.e, n.f]).join(",") ? hi : u : (u !== hi || t.offsetParent || t === vr || a.svg || (n = o.display, o.display = "block", (r = t.parentNode) && t.offsetParent || (s = 1, i = t.nextSibling, vr.appendChild(t)), u = ci(t), n ? o.display = n : ti(t, "display"), s && (i ? r.insertBefore(t, i) : r ? r.appendChild(t) : vr.removeChild(t))), e && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u)
      },
      _i = function(t, e, r, i, n, s) {
          var a, o, u, h = t._gsap,
              l = n || pi(t, !0),
              f = h.xOrigin || 0,
              c = h.yOrigin || 0,
              p = h.xOffset || 0,
              _ = h.yOffset || 0,
              d = l[0],
              m = l[1],
              g = l[2],
              v = l[3],
              y = l[4],
              b = l[5],
              T = e.split(" "),
              x = parseFloat(T[0]) || 0,
              w = parseFloat(T[1]) || 0;
          r ? l !== hi && (o = d * v - m * g) && (u = x * (-m / o) + w * (d / o) - (d * b - m * y) / o, x = x * (v / o) + w * (-g / o) + (g * b - v * y) / o, w = u) : (x = (a = Jr(t)).x + (~T[0].indexOf("%") ? x / 100 * a.width : x), w = a.y + (~(T[1] || T[0]).indexOf("%") ? w / 100 * a.height : w)), i || !1 !== i && h.smooth ? (y = x - f, b = w - c, h.xOffset = p + (y * d + b * g) - y, h.yOffset = _ + (y * m + b * v) - b) : h.xOffset = h.yOffset = 0, h.xOrigin = x, h.yOrigin = w, h.smooth = !!i, h.origin = e, h.originIsAbsolute = !!r, t.style[Nr] = "0px 0px", s && (ei(s, h, "xOrigin", f, x), ei(s, h, "yOrigin", c, w), ei(s, h, "xOffset", p, h.xOffset), ei(s, h, "yOffset", _, h.yOffset)), t.setAttribute("data-svg-origin", x + " " + w)
      },
      di = function(t, e) {
          var r = t._gsap || new Ve(t);
          if ("x" in r && !e && !r.uncache) return r;
          var i, n, s, a, o, u, h, l, f, c, p, _, d, m, g, v, y, b, T, x, w, M, O, D, S, A, k, F, P, E, z, R, B = t.style,
              L = r.scaleX < 0,
              q = "px",
              I = "deg",
              V = jr(t, Nr) || "0";
          return i = n = s = u = h = l = f = c = p = 0, a = o = 1, r.svg = !(!t.getCTM || !Kr(t)), m = pi(t, r.svg), r.svg && (D = !r.uncache && !e && t.getAttribute("data-svg-origin"), _i(t, D || V, !!D || r.originIsAbsolute, !1 !== r.smooth, m)), _ = r.xOrigin || 0, d = r.yOrigin || 0, m !== hi && (b = m[0], T = m[1], x = m[2], w = m[3], i = M = m[4], n = O = m[5], 6 === m.length ? (a = Math.sqrt(b * b + T * T), o = Math.sqrt(w * w + x * x), u = b || T ? Dr(T, b) * Mr : 0, (f = x || w ? Dr(x, w) * Mr + u : 0) && (o *= Math.abs(Math.cos(f * Or))), r.svg && (i -= _ - (_ * b + d * x), n -= d - (_ * T + d * w))) : (R = m[6], E = m[7], k = m[8], F = m[9], P = m[10], z = m[11], i = m[12], n = m[13], s = m[14], h = (g = Dr(R, P)) * Mr, g && (D = M * (v = Math.cos(-g)) + k * (y = Math.sin(-g)), S = O * v + F * y, A = R * v + P * y, k = M * -y + k * v, F = O * -y + F * v, P = R * -y + P * v, z = E * -y + z * v, M = D, O = S, R = A), l = (g = Dr(-x, P)) * Mr, g && (v = Math.cos(-g), z = w * (y = Math.sin(-g)) + z * v, b = D = b * v - k * y, T = S = T * v - F * y, x = A = x * v - P * y), u = (g = Dr(T, b)) * Mr, g && (D = b * (v = Math.cos(g)) + T * (y = Math.sin(g)), S = M * v + O * y, T = T * v - b * y, O = O * v - M * y, b = D, M = S), h && Math.abs(h) + Math.abs(u) > 359.9 && (h = u = 0, l = 180 - l), a = xt(Math.sqrt(b * b + T * T + x * x)), o = xt(Math.sqrt(O * O + R * R)), g = Dr(M, O), f = Math.abs(g) > 2e-4 ? g * Mr : 0, p = z ? 1 / (z < 0 ? -z : z) : 0), r.svg && (D = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !fi(jr(t, Xr)), D && t.setAttribute("transform", D))), Math.abs(f) > 90 && Math.abs(f) < 270 && (L ? (a *= -1, f += u <= 0 ? 180 : -180, u += u <= 0 ? 180 : -180) : (o *= -1, f += f <= 0 ? 180 : -180)), r.x = i - ((r.xPercent = i && (r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + q, r.y = n - ((r.yPercent = n && (r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + q, r.z = s + q, r.scaleX = xt(a), r.scaleY = xt(o), r.rotation = xt(u) + I, r.rotationX = xt(h) + I, r.rotationY = xt(l) + I, r.skewX = f + I, r.skewY = c + I, r.transformPerspective = p + q, (r.zOrigin = parseFloat(V.split(" ")[2]) || 0) && (B[Nr] = mi(V)), r.xOffset = r.yOffset = 0, r.force3D = C.force3D, r.renderTransform = r.svg ? wi : xr ? xi : vi, r.uncache = 0, r
      },
      mi = function(t) {
          return (t = t.split(" "))[0] + " " + t[1]
      },
      gi = function(t, e, r) {
          var i = re(e);
          return xt(parseFloat(e) + parseFloat(ii(t, "x", r + "px", i))) + i
      },
      vi = function(t, e) {
          e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, xi(t, e)
      },
      yi = "0deg",
      bi = "0px",
      Ti = ") ",
      xi = function(t, e) {
          var r = e || this,
              i = r.xPercent,
              n = r.yPercent,
              s = r.x,
              a = r.y,
              o = r.z,
              u = r.rotation,
              h = r.rotationY,
              l = r.rotationX,
              f = r.skewX,
              c = r.skewY,
              p = r.scaleX,
              _ = r.scaleY,
              d = r.transformPerspective,
              m = r.force3D,
              g = r.target,
              v = r.zOrigin,
              y = "",
              b = "auto" === m && t && 1 !== t || !0 === m;
          if (v && (l !== yi || h !== yi)) {
              var T, x = parseFloat(h) * Or,
                  w = Math.sin(x),
                  M = Math.cos(x);
              x = parseFloat(l) * Or, T = Math.cos(x), s = gi(g, s, w * T * -v), a = gi(g, a, -Math.sin(x) * -v), o = gi(g, o, M * T * -v + v)
          }
          d !== bi && (y += "perspective(" + d + Ti), (i || n) && (y += "translate(" + i + "%, " + n + "%) "), (b || s !== bi || a !== bi || o !== bi) && (y += o !== bi || b ? "translate3d(" + s + ", " + a + ", " + o + ") " : "translate(" + s + ", " + a + Ti), u !== yi && (y += "rotate(" + u + Ti), h !== yi && (y += "rotateY(" + h + Ti), l !== yi && (y += "rotateX(" + l + Ti), f === yi && c === yi || (y += "skew(" + f + ", " + c + Ti), 1 === p && 1 === _ || (y += "scale(" + p + ", " + _ + Ti), g.style[Xr] = y || "translate(0, 0)"
      },
      wi = function(t, e) {
          var r, i, n, s, a, o = e || this,
              u = o.xPercent,
              h = o.yPercent,
              l = o.x,
              f = o.y,
              c = o.rotation,
              p = o.skewX,
              _ = o.skewY,
              d = o.scaleX,
              m = o.scaleY,
              g = o.target,
              v = o.xOrigin,
              y = o.yOrigin,
              b = o.xOffset,
              T = o.yOffset,
              x = o.forceCSS,
              w = parseFloat(l),
              M = parseFloat(f);
          c = parseFloat(c), p = parseFloat(p), (_ = parseFloat(_)) && (p += _ = parseFloat(_), c += _), c || p ? (c *= Or, p *= Or, r = Math.cos(c) * d, i = Math.sin(c) * d, n = Math.sin(c - p) * -m, s = Math.cos(c - p) * m, p && (_ *= Or, a = Math.tan(p - _), n *= a = Math.sqrt(1 + a * a), s *= a, _ && (a = Math.tan(_), r *= a = Math.sqrt(1 + a * a), i *= a)), r = xt(r), i = xt(i), n = xt(n), s = xt(s)) : (r = d, s = m, i = n = 0), (w && !~(l + "").indexOf("px") || M && !~(f + "").indexOf("px")) && (w = ii(g, "x", l, "px"), M = ii(g, "y", f, "px")), (v || y || b || T) && (w = xt(w + v - (v * r + y * n) + b), M = xt(M + y - (v * i + y * s) + T)), (u || h) && (a = g.getBBox(), w = xt(w + u / 100 * a.width), M = xt(M + h / 100 * a.height)), a = "matrix(" + r + "," + i + "," + n + "," + s + "," + w + "," + M + ")", g.setAttribute("transform", a), x && (g.style[Xr] = a)
      },
      Mi = function(t, e, r, i, n, s) {
          var a, o, u = 360,
              h = V(n),
              l = parseFloat(n) * (h && ~n.indexOf("rad") ? Mr : 1),
              f = s ? l * s : l - i,
              c = i + f + "deg";
          return h && ("short" === (a = n.split("_")[1]) && (f %= u) !== f % 180 && (f += f < 0 ? u : -360), "cw" === a && f < 0 ? f = (f + 36e9) % u - ~~(f / u) * u : "ccw" === a && f > 0 && (f = (f - 36e9) % u - ~~(f / u) * u)), t._pt = o = new fr(t._pt, e, r, i, f, Pr), o.e = c, o.u = "deg", t._props.push(r), o
      },
      Oi = function(t, e) {
          for (var r in e) t[r] = e[r];
          return t
      },
      Di = function(t, e, r) {
          var i, n, s, a, o, u, h, l = Oi({}, r._gsap),
              f = r.style;
          for (n in l.svg ? (s = r.getAttribute("transform"), r.setAttribute("transform", ""), f[Xr] = e, i = di(r, 1), ti(r, Xr), r.setAttribute("transform", s)) : (s = getComputedStyle(r)[Xr], f[Xr] = e, i = di(r, 1), f[Xr] = s), wr)(s = l[n]) !== (a = i[n]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 && (o = re(s) !== (h = re(a)) ? ii(r, n, s, h) : parseFloat(s), u = parseFloat(a), t._pt = new fr(t._pt, i, n, o, u - o, Fr), t._pt.u = h || 0, t._props.push(n));
          Oi(i, l)
      };
  Tt("padding,margin,Width,Radius", (function(t, e) {
      var r = "Top",
          i = "Right",
          n = "Bottom",
          s = "Left",
          a = (e < 3 ? [r, i, n, s] : [r + s, r + i, n + i, n + s]).map((function(r) {
              return e < 2 ? t + r : "border" + r + t
          }));
      ui[e > 1 ? "border" + t : t] = function(t, e, r, i, n) {
          var s, o;
          if (arguments.length < 4) return s = a.map((function(e) {
              return ni(t, e, r)
          })), 5 === (o = s.join(" ")).split(s[0]).length ? s[0] : o;
          s = (i + "").split(" "), o = {}, a.forEach((function(t, e) {
              return o[t] = s[e] = s[e] || s[(e - 1) / 2 | 0]
          })), t.init(e, o, n)
      }
  }));
  var Si, Ai, ki, Ci = {
      name: "css",
      register: Qr,
      targetTest: function(t) {
          return t.style && t.nodeType
      },
      init: function(t, e, r, i, n) {
          var s, a, o, u, h, l, f, c, p, _, d, m, g, v, y, b, T, x, w, M = this._props,
              O = t.style,
              D = r.vars.startAt;
          for (f in yr || Qr(), e)
              if ("autoRound" !== f && (a = e[f], !pt[f] || !je(f, e, r, i, t, n)))
                  if (h = typeof a, l = ui[f], "function" === h && (h = typeof(a = a.call(r, i, t, n))), "string" === h && ~a.indexOf("random(") && (a = ce(a)), l) l(this, t, f, a, r) && (y = 1);
                  else if ("--" === f.substr(0, 2)) s = (getComputedStyle(t).getPropertyValue(f) + "").trim(), a += "", Me.lastIndex = 0, Me.test(s) || (c = re(s), p = re(a)), p ? c !== p && (s = ii(t, f, s, p) + p) : c && (a += c), this.add(O, "setProperty", s, a, i, n, 0, 0, f);
          else if ("undefined" !== h) {
              if (D && f in D ? (s = "function" == typeof D[f] ? D[f].call(r, i, t, n) : D[f], f in C.units && !re(s) && (s += C.units[f]), "=" === (s + "").charAt(1) && (s = ni(t, f))) : s = ni(t, f), u = parseFloat(s), (_ = "string" === h && "=" === a.charAt(1) ? +(a.charAt(0) + "1") : 0) && (a = a.substr(2)), o = parseFloat(a), f in Cr && ("autoAlpha" === f && (1 === u && "hidden" === ni(t, "visibility") && o && (u = 0), ei(this, O, "visibility", u ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)), "scale" !== f && "transform" !== f && ~(f = Cr[f]).indexOf(",") && (f = f.split(",")[0])), d = f in wr)
                  if (m || ((g = t._gsap).renderTransform && !e.parseTransform || di(t, e.parseTransform), v = !1 !== e.smoothOrigin && g.smooth, (m = this._pt = new fr(this._pt, O, Xr, 0, 1, g.renderTransform, g, 0, -1)).dep = 1), "scale" === f) this._pt = new fr(this._pt, g, "scaleY", g.scaleY, _ ? _ * o : o - g.scaleY), M.push("scaleY", f), f += "X";
                  else {
                      if ("transformOrigin" === f) {
                          T = void 0, x = void 0, w = void 0, T = (b = a).split(" "), x = T[0], w = T[1] || "50%", "top" !== x && "bottom" !== x && "left" !== w && "right" !== w || (b = x, x = w, w = b), T[0] = ai[x] || x, T[1] = ai[w] || w, a = T.join(" "), g.svg ? _i(t, a, 0, v, 0, this) : ((p = parseFloat(a.split(" ")[2]) || 0) !== g.zOrigin && ei(this, g, "zOrigin", g.zOrigin, p), ei(this, O, f, mi(s), mi(a)));
                          continue
                      }
                      if ("svgOrigin" === f) {
                          _i(t, a, 1, v, 0, this);
                          continue
                      }
                      if (f in li) {
                          Mi(this, g, f, u, a, _);
                          continue
                      }
                      if ("smoothOrigin" === f) {
                          ei(this, g, "smooth", g.smooth, a);
                          continue
                      }
                      if ("force3D" === f) {
                          g[f] = a;
                          continue
                      }
                      if ("transform" === f) {
                          Di(this, a, t);
                          continue
                      }
                  }
              else f in O || (f = Hr(f) || f);
              if (d || (o || 0 === o) && (u || 0 === u) && !kr.test(a) && f in O) o || (o = 0), (c = (s + "").substr((u + "").length)) !== (p = re(a) || (f in C.units ? C.units[f] : c)) && (u = ii(t, f, s, p)), this._pt = new fr(this._pt, d ? g : O, f, u, _ ? _ * o : o - u, d || "px" !== p && "zIndex" !== f || !1 === e.autoRound ? Fr : zr), this._pt.u = p || 0, c !== p && (this._pt.b = s, this._pt.r = Er);
              else if (f in O) si.call(this, t, f, s, a);
              else {
                  if (!(f in t)) {
                      at(f, a);
                      continue
                  }
                  this.add(t, f, t[f], a, i, n)
              }
              M.push(f)
          }
          y && lr(this)
      },
      get: ni,
      aliases: Cr,
      getSetter: function(t, e, r) {
          var i = Cr[e];
          return i && i.indexOf(",") < 0 && (e = i), e in wr && e !== Nr && (t._gsap.x || ni(t, "x")) ? r && Tr === r ? "scale" === e ? Vr : Ir : (Tr = r || {}) && ("scale" === e ? Yr : Ur) : t.style && !X(t.style[e]) ? Lr : ~e.indexOf("-") ? qr : rr(t, e)
      },
      core: {
          _removeProperty: ti,
          _getMatrix: pi
      }
  };
  dr.utils.checkPrefix = Hr, ki = Tt((Si = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (Ai = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (function(t) {
      wr[t] = 1
  })), Tt(Ai, (function(t) {
      C.units[t] = "deg", li[t] = 1
  })), Cr[ki[13]] = Si + "," + Ai, Tt("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (function(t) {
      var e = t.split(":");
      Cr[e[1]] = ki[e[0]]
  })), Tt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (function(t) {
      C.units[t] = "px"
  })), dr.registerPlugin(Ci);
  var Fi = dr.registerPlugin(Ci) || dr;
  Fi.core.Tween;
  const Pi = (t, e, r) => (1 - r) * t + r * e;
  let Ei = {
      x: 0,
      y: 0
  };
  window.addEventListener("mousemove", (t => {
      return Ei = {
          x: (e = t).clientX,
          y: e.clientY
      };
      var e
  }));
  class zi {
      constructor(t) {
          this.DOM = {
              el: t
          }, this.DOM.thumb = this.DOM.el.querySelector(".thumb"), this.DOM.thumbSVG = this.DOM.thumb.querySelector(".distort"), this.DOM.SVGFilter = this.DOM.thumbSVG.querySelector("filter"), this.DOM.SVGImage = this.DOM.thumbSVG.querySelector("image.distort__img"), Fi.set(this.DOM.SVGImage, {
              transformOrigin: "50% 50%"
          }), this.filterType = this.DOM.SVGFilter.dataset.type, this.DOM.feTurbulence = this.DOM.SVGFilter.querySelector("feTurbulence"), this.DOM.feDisplacementMap = this.DOM.SVGFilter.querySelector("feDisplacementMap"), this.primitiveValues = "turbulence" === this.filterType ? {
              baseFrequency: 0
          } : {
              scale: 0
          }, this.DOM.caption = this.DOM.thumb.querySelector(".thumb__caption"), this.DOM.captionTitle = this.DOM.caption.querySelector(".thumb__caption-title"), this.DOM.captionLink = this.DOM.caption.querySelector(".thumb__caption-link"), this.DOM.meta = this.DOM.el.querySelector(".item__meta"), this.DOM.metaCounter = this.DOM.meta.querySelector(".item__meta-counter"), this.DOM.metaTitle = this.DOM.meta.querySelector(".item__meta-title"), this.DOM.metaDetail = [...this.DOM.meta.querySelectorAll(".item__meta-detail")], this.createHoverTimeline(), this.initEvents()
      }
      initEvents() {
          this.onMouseEnterFn = () => this.mouseEnter(), this.DOM.thumb.addEventListener("mouseenter", this.onMouseEnterFn), this.onMouseLeaveFn = () => this.mouseLeave(), this.DOM.thumb.addEventListener("mouseleave", this.onMouseLeaveFn)
      }
      updateFilterValues() {
          this["turbulence" === this.filterType ? "updateTurbulenceBaseFrequency" : "updateDisplacementMapScale"]()
      }
      updateTurbulenceBaseFrequency(t = this.primitiveValues.baseFrequency) {
          this.DOM.feTurbulence.setAttribute("baseFrequency", t)
      }
      updateDisplacementMapScale(t = this.primitiveValues.scale) {
          this.DOM.feDisplacementMap.setAttribute("scale", t)
      }
      createHoverTimeline() {
          this.tl = Fi.timeline({
              paused: !0,
              defaults: {
                  duration: .7,
                  ease: "power2"
              },
              onUpdate: () => this.updateFilterValues(),
              onReverseComplete: () => {
                  "turbulence" === this.filterType && (this.primitiveValues.baseFrequency = 0, this.updateFilterValues())
              }
          }), "turbulence" === this.filterType ? this.tl.to(this.primitiveValues, {
              startAt: {
                  baseFrequency: .09
              },
              baseFrequency: 0
          }, 0) : this.tl.to(this.primitiveValues, {
              startAt: {
                  scale: 0
              },
              scale: 150
          }, 0), this.tl.to(this.DOM.caption, {
              y: "0%"
          }, 0).to([this.DOM.captionTitle, this.DOM.captionLink], {
              y: 0,
              startAt: {
                  y: 100,
                  opacity: 0
              },
              opacity: 1,
              stagger: .1
          }, 0).to([this.DOM.metaCounter, this.DOM.metaTitle, this.DOM.metaDetail], {
              duration: .1,
              x: t => t % 2 == 0 ? "-5%" : "5%",
              opacity: 0,
              stagger: .05
          }, 0).to([this.DOM.metaCounter, this.DOM.metaTitle, this.DOM.metaDetail], {
              duration: .5,
              ease: "power3",
              startAt: {
                  x: t => t % 2 == 0 ? "15%" : "-15%"
              },
              x: "0%",
              opacity: 1,
              stagger: .08
          }, .1), -1 == navigator.userAgent.indexOf("Firefox") && this.tl.to(this.DOM.SVGImage, {
              scale: 1.2
          }, 0)
      }
      mouseEnter() {
          this.tl.restart()
      }
      mouseLeave() {
          this.tl.reverse()
      }
  }
  const Ri = new class {
      constructor(t) {
          this.DOM = {
              el: t
          }, this.DOM.el.style.opacity = 0, this.bounds = this.DOM.el.getBoundingClientRect(), this.renderedStyles = {
              tx: {
                  previous: 0,
                  current: 0,
                  amt: .15
              },
              ty: {
                  previous: 0,
                  current: 0,
                  amt: .15
              },
              scale: {
                  previous: 1,
                  current: 1,
                  amt: .15
              },
              opacity: {
                  previous: 1,
                  current: 1,
                  amt: .1
              }
          }, this.onMouseMoveEv = () => {
              this.renderedStyles.tx.previous = this.renderedStyles.tx.current = Ei.x - this.bounds.width / 2, this.renderedStyles.ty.previous = this.renderedStyles.ty.previous = Ei.y - this.bounds.height / 2, Fi.to(this.DOM.el, {
                  duration: .9,
                  ease: "Power3.easeOut",
                  opacity: 1
              }), requestAnimationFrame((() => this.render())), window.removeEventListener("mousemove", this.onMouseMoveEv)
          }, window.addEventListener("mousemove", this.onMouseMoveEv)
      }
      enter() {
          this.renderedStyles.scale.current = 1.8, this.renderedStyles.opacity.current = .8
      }
      leave() {
          this.renderedStyles.scale.current = 1, this.renderedStyles.opacity.current = 1
      }
      render() {
          this.renderedStyles.tx.current = Ei.x - this.bounds.width / 2, this.renderedStyles.ty.current = Ei.y - this.bounds.height / 2;
          for (const t in this.renderedStyles) this.renderedStyles[t].previous = Pi(this.renderedStyles[t].previous, this.renderedStyles[t].current, this.renderedStyles[t].amt);
          this.DOM.el.style.transform = `translateX(${this.renderedStyles.tx.previous}px) translateY(${this.renderedStyles.ty.previous}px) scale(${this.renderedStyles.scale.previous})`, this.DOM.el.style.opacity = this.renderedStyles.opacity.previous, requestAnimationFrame((() => this.render()))
      }
  }(document.querySelector(".cursor"));
  [...document.querySelectorAll(".item")].forEach((t => new zi(t))), [...document.querySelectorAll("a, .distort__img")].forEach((t => {
      t.addEventListener("mouseenter", (() => Ri.enter())), t.addEventListener("mouseleave", (() => Ri.leave()))
  }))
}();
})();
