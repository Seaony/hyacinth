/*
 Highcharts JS v3.0.6 (2013-10-04)
 Exporting module

 (c) 2010-2013 Torstein Hønsi

 License: www.highcharts.com/license
*/
(function (f) {
  var A = f.Chart; var t = f.addEvent; var C = f.removeEvent; var k = f.createElement; var n = f.discardElement; var u = f.css; var o = f.merge; var r = f.each; var p = f.extend; var D = Math.max; var j = document; var B = window; var E = f.isTouchDevice; var F = f.Renderer.prototype.symbols; var x = f.getOptions(); var y; p(x.lang, { printChart: 'Print chart', downloadPNG: 'Download PNG image', downloadJPEG: 'Download JPEG image', downloadPDF: 'Download PDF document', downloadSVG: 'Download SVG vector image', contextButtonTitle: 'Chart context menu' }); x.navigation = { menuStyle: { border: '1px solid #A0A0A0',
    background: '#FFFFFF',
    padding: '5px 0' },
  menuItemStyle: { padding: '0 10px', background: 'none', color: '#303030', fontSize: E ? '14px' : '11px' },
  menuItemHoverStyle: { background: '#4572A5', color: '#FFFFFF' },
  buttonOptions: { symbolFill: '#E0E0E0', symbolSize: 14, symbolStroke: '#666', symbolStrokeWidth: 3, symbolX: 12.5, symbolY: 10.5, align: 'right', buttonSpacing: 3, height: 22, theme: { fill: 'white', stroke: 'none' }, verticalAlign: 'top', width: 24 } }; x.exporting = { type: 'image/png',
    url: 'http://export.highcharts.com/',
    buttons: { contextButton: { menuClassName: 'highcharts-contextmenu',
      symbol: 'menu',
      _titleKey: 'contextButtonTitle',
      menuItems: [{ textKey: 'printChart', onclick: function () { this.print() } }, { separator: !0 }, { textKey: 'downloadPNG', onclick: function () { this.exportChart() } }, { textKey: 'downloadJPEG', onclick: function () { this.exportChart({ type: 'image/jpeg' }) } }, { textKey: 'downloadPDF', onclick: function () { this.exportChart({ type: 'application/pdf' }) } }, { textKey: 'downloadSVG', onclick: function () { this.exportChart({ type: 'image/svg+xml' }) } }] } } }; f.post = function (c, a) {
    var d, b; b = k('form', { method: 'post',
      action: c,
      enctype: 'multipart/form-data' }, { display: 'none' }, j.body); for (d in a)k('input', { type: 'hidden', name: d, value: a[d] }, null, b); b.submit(); n(b)
  }; p(A.prototype, { getSVG: function (c) {
    var a = this; var d; var b; var z; var h; var g = o(a.options, c); if (!j.createElementNS)j.createElementNS = function (a, b) { return j.createElement(b) }; c = k('div', null, { position: 'absolute', top: '-9999em', width: a.chartWidth + 'px', height: a.chartHeight + 'px' }, j.body); b = a.renderTo.style.width; h = a.renderTo.style.height; b = g.exporting.sourceWidth || g.chart.width || /px$/.test(b) &&
parseInt(b, 10) || 600; h = g.exporting.sourceHeight || g.chart.height || /px$/.test(h) && parseInt(h, 10) || 400; p(g.chart, { animation: !1, renderTo: c, forExport: !0, width: b, height: h }); g.exporting.enabled = !1; g.series = []; r(a.series, function (a) { z = o(a.options, { animation: !1, showCheckbox: !1, visible: a.visible }); z.isInternal || g.series.push(z) }); d = new f.Chart(g, a.callback); r(['xAxis', 'yAxis'], function (b) {
      r(a[b], function (a, c) {
        var g = d[b][c]; var f = a.getExtremes(); var h = f.userMin; var f = f.userMax; g && (h !== void 0 || f !== void 0) && g.setExtremes(h,
          f, !0, !1)
      })
    }); b = d.container.innerHTML; g = null; d.destroy(); n(c); b = b.replace(/zIndex="[^"]+"/g, '').replace(/isShadow="[^"]+"/g, '').replace(/symbolName="[^"]+"/g, '').replace(/jQuery[0-9]+="[^"]+"/g, '').replace(/url\([^#]+#/g, 'url(#').replace(/<svg /, '<svg xmlns:xlink="http://www.w3.org/1999/xlink" ').replace(/ href=/g, ' xlink:href=').replace(/\n/, ' ').replace(/<\/svg>.*?$/, '</svg>').replace(/&nbsp;/g, ' ').replace(/&shy;/g, '­').replace(/<IMG /g, '<image ').replace(/height=([^" ]+)/g, 'height="$1"').replace(/width=([^" ]+)/g,
      'width="$1"').replace(/hc-svg-href="([^"]+)">/g, 'xlink:href="$1"/>').replace(/id=([^" >]+)/g, 'id="$1"').replace(/class=([^" >]+)/g, 'class="$1"').replace(/ transform /g, ' ').replace(/:(path|rect)/g, '$1').replace(/style="([^"]+)"/g, function (a) { return a.toLowerCase() }); return b = b.replace(/(url\(#highcharts-[0-9]+)&quot;/g, '$1').replace(/&quot;/g, "'")
  },
  exportChart: function (c, a) {
    var c = c || {}; var d = this.options.exporting; var d = this.getSVG(o({ chart: { borderRadius: 0 } }, d.chartOptions, a, { exporting: { sourceWidth: c.sourceWidth ||
d.sourceWidth,
    sourceHeight: c.sourceHeight || d.sourceHeight } })); var c = o(this.options.exporting, c); f.post(c.url, { filename: c.filename || 'chart', type: c.type, width: c.width || 0, scale: c.scale || 2, svg: d })
  },
  print: function () {
    var c = this; var a = c.container; var d = []; var b = a.parentNode; var f = j.body; var h = f.childNodes; if (!c.isPrinting) {
      c.isPrinting = !0, r(h, function (a, b) { if (a.nodeType === 1)d[b] = a.style.display, a.style.display = 'none' }), f.appendChild(a), B.focus(), B.print(), setTimeout(function () {
        b.appendChild(a); r(h, function (a, b) {
          if (a.nodeType ===
1)a.style.display = d[b]
        }); c.isPrinting = !1
      }, 1E3)
    }
  },
  contextMenu: function (c, a, d, b, f, h, g) {
    var e = this; var j = e.options.navigation; var q = j.menuItemStyle; var l = e.chartWidth; var m = e.chartHeight; var o = 'cache-' + c; var i = e[o]; var s = D(f, h); var v; var w; var n; if (!i) {
      e[o] = i = k('div', { className: c }, { position: 'absolute', zIndex: 1E3, padding: s + 'px' }, e.container), v = k('div', null, p({ MozBoxShadow: '3px 3px 10px #888', WebkitBoxShadow: '3px 3px 10px #888', boxShadow: '3px 3px 10px #888' }, j.menuStyle), i), w = function () { u(i, { display: 'none' }); g && g.setState(0); e.openMenu = !1 }, t(i,
        'mouseleave', function () { n = setTimeout(w, 500) }), t(i, 'mouseenter', function () { clearTimeout(n) }), t(document, 'mousedown', function (a) { e.pointer.inClass(a.target, c) || w() }), r(a, function (a) { if (a) { var b = a.separator ? k('hr', null, null, v) : k('div', { onmouseover: function () { u(this, j.menuItemHoverStyle) }, onmouseout: function () { u(this, q) }, onclick: function () { w(); a.onclick.apply(e, arguments) }, innerHTML: a.text || e.options.lang[a.textKey] }, p({ cursor: 'pointer' }, q), v); e.exportDivElements.push(b) } }), e.exportDivElements.push(v,
        i), e.exportMenuWidth = i.offsetWidth, e.exportMenuHeight = i.offsetHeight
    }a = { display: 'block' }; d + e.exportMenuWidth > l ? a.right = l - d - f - s + 'px' : a.left = d - s + 'px'; b + h + e.exportMenuHeight > m && g.alignOptions.verticalAlign !== 'top' ? a.bottom = m - b - s + 'px' : a.top = b + h - s + 'px'; u(i, a); e.openMenu = !0
  },
  addButton: function (c) {
    var a = this; var d = a.renderer; var b = o(a.options.navigation.buttonOptions, c); var j = b.onclick; var h = b.menuItems; var g; var e; var k = { stroke: b.symbolStroke, fill: b.symbolFill }; var q = b.symbolSize || 12; if (!a.btnCount)a.btnCount = 0; if (!a.exportDivElements) {
      a.exportDivElements =
[], a.exportSVGElements = []
    } if (b.enabled !== !1) {
      var l = b.theme; var m = l.states; var n = m && m.hover; var m = m && m.select; var i; delete l.states; j ? i = function () { j.apply(a, arguments) } : h && (i = function () { a.contextMenu(e.menuClassName, h, e.translateX, e.translateY, e.width, e.height, e); e.setState(2) }); b.text && b.symbol ? l.paddingLeft = f.pick(l.paddingLeft, 25) : b.text || p(l, { width: b.width, height: b.height, padding: 0 }); e = d.button(b.text, 0, 0, i, l, n, m).attr({ title: a.options.lang[b._titleKey], 'stroke-linecap': 'round' }); e.menuClassName = c.menuClassName ||
'highcharts-menu-' + a.btnCount++; b.symbol && (g = d.symbol(b.symbol, b.symbolX - q / 2, b.symbolY - q / 2, q, q).attr(p(k, { 'stroke-width': b.symbolStrokeWidth || 1, zIndex: 1 })).add(e)); e.add().align(p(b, { width: e.width, x: f.pick(b.x, y) }), !0, 'spacingBox'); y += (e.width + b.buttonSpacing) * (b.align === 'right' ? -1 : 1); a.exportSVGElements.push(e, g)
    }
  },
  destroyExport: function (c) {
    var c = c.target; var a; var d; for (a = 0; a < c.exportSVGElements.length; a++) if (d = c.exportSVGElements[a])d.onclick = d.ontouchstart = null, c.exportSVGElements[a] = d.destroy(); for (a =
0; a < c.exportDivElements.length; a++)d = c.exportDivElements[a], C(d, 'mouseleave'), c.exportDivElements[a] = d.onmouseout = d.onmouseover = d.ontouchstart = d.onclick = null, n(d)
  } }); F.menu = function (c, a, d, b) { return ['M', c, a + 2.5, 'L', c + d, a + 2.5, 'M', c, a + b / 2 + 0.5, 'L', c + d, a + b / 2 + 0.5, 'M', c, a + b - 1.5, 'L', c + d, a + b - 1.5] }; A.prototype.callbacks.push(function (c) { var a; var d = c.options.exporting; var b = d.buttons; y = 0; if (d.enabled !== !1) { for (a in b)c.addButton(b[a]); t(c, 'destroy', c.destroyExport) } })
})(Highcharts)
