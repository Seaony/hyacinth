(function (e) {
  function q (b, a, c) { return 'rgba(' + [Math.round(b[0] + (a[0] - b[0]) * c), Math.round(b[1] + (a[1] - b[1]) * c), Math.round(b[2] + (a[2] - b[2]) * c), b[3] + (a[3] - b[3]) * c].join(',') + ')' } var m = function () {}; var j = e.getOptions(); var g = e.each; var n = e.extend; var o = e.wrap; var h = e.Chart; var i = e.seriesTypes; var k = i.pie; var l = i.column; var r = HighchartsAdapter.fireEvent; n(j.lang, { drillUpText: '◁ Back to {series.name}' }); j.drilldown = { activeAxisLabelStyle: { cursor: 'pointer', color: '#039', fontWeight: 'bold', textDecoration: 'underline' },
    activeDataLabelStyle: { cursor: 'pointer',
      color: '#039',
      fontWeight: 'bold',
      textDecoration: 'underline' },
    animation: { duration: 500 },
    drillUpButton: { position: { align: 'right', x: -10, y: 10 } } }; e.SVGRenderer.prototype.Element.prototype.fadeIn = function () { this.attr({ opacity: 0.1, visibility: 'visible' }).animate({ opacity: 1 }, { duration: 250 }) }; h.prototype.drilldownLevels = []; h.prototype.addSeriesAsDrilldown = function (b, a) {
    var c = b.series; var d = c.xAxis; var f = c.yAxis; var e; e = b.color || c.color; var g; var a = n({ color: e }, a); g = HighchartsAdapter.inArray(this, c.points); this.drilldownLevels.push({ seriesOptions: c.userOptions,
      shapeArgs: b.shapeArgs,
      bBox: b.graphic.getBBox(),
      color: e,
      newSeries: a,
      pointOptions: c.options.data[g],
      pointIndex: g,
      oldExtremes: { xMin: d && d.userMin, xMax: d && d.userMax, yMin: f && f.userMin, yMax: f && f.userMax } }); e = this.addSeries(a, !1); if (d)d.oldPos = d.pos, d.userMin = d.userMax = null, f.userMin = f.userMax = null; if (c.type === e.type)e.animate = e.animateDrilldown || m, e.options.animation = !0; c.remove(!1); this.redraw(); this.showDrillUpButton()
  }; h.prototype.getDrilldownBackText = function () {
    return this.options.lang.drillUpText.replace('{series.name}',
      this.drilldownLevels[this.drilldownLevels.length - 1].seriesOptions.name)
  }; h.prototype.showDrillUpButton = function () { var b = this; var a = this.getDrilldownBackText(); var c = b.options.drilldown.drillUpButton; this.drillUpButton ? this.drillUpButton.attr({ text: a }).align() : this.drillUpButton = this.renderer.button(a, null, null, function () { b.drillUp() }).attr(n({ align: c.position.align, zIndex: 9 }, c.theme)).add().align(c.position, !1, c.relativeTo || 'plotBox') }; h.prototype.drillUp = function () {
    var b = this.drilldownLevels.pop(); var a = this.series[0]
    var c = b.oldExtremes; var d = this.addSeries(b.seriesOptions, !1); r(this, 'drillup', { seriesOptions: b.seriesOptions }); if (d.type === a.type)d.drilldownLevel = b, d.animate = d.animateDrillupTo || m, d.options.animation = !0, a.animateDrillupFrom && a.animateDrillupFrom(b); a.remove(!1); d.xAxis && (d.xAxis.setExtremes(c.xMin, c.xMax, !1), d.yAxis.setExtremes(c.yMin, c.yMax, !1)); this.redraw(); this.drilldownLevels.length === 0 ? this.drillUpButton = this.drillUpButton.destroy() : this.drillUpButton.attr({ text: this.getDrilldownBackText() }).align()
  }
  k.prototype.animateDrilldown = function (b) { var a = this.chart.drilldownLevels[this.chart.drilldownLevels.length - 1]; var c = this.chart.options.drilldown.animation; var d = a.shapeArgs; var f = d.start; var s = (d.end - f) / this.points.length; var h = e.Color(a.color).rgba; b || g(this.points, function (a, b) { var g = e.Color(a.color).rgba; a.graphic.attr(e.merge(d, { start: f + b * s, end: f + (b + 1) * s })).animate(a.shapeArgs, e.merge(c, { step: function (a, d) { d.prop === 'start' && this.attr({ fill: q(h, g, d.pos) }) } })) }) }; k.prototype.animateDrillupTo = l.prototype.animateDrillupTo =
function (b) { if (!b) { var a = this; var c = a.drilldownLevel; g(this.points, function (a) { a.graphic.hide(); a.dataLabel && a.dataLabel.hide(); a.connector && a.connector.hide() }); setTimeout(function () { g(a.points, function (a, b) { var e = b === c.pointIndex ? 'show' : 'fadeIn'; a.graphic[e](); if (a.dataLabel)a.dataLabel[e](); if (a.connector)a.connector[e]() }) }, Math.max(this.chart.options.drilldown.animation.duration - 50, 0)); this.animate = m } }; l.prototype.animateDrilldown = function (b) {
    var a = this.chart.drilldownLevels[this.chart.drilldownLevels.length -
1].shapeArgs; var c = this.chart.options.drilldown.animation; b || (a.x += this.xAxis.oldPos - this.xAxis.pos, g(this.points, function (b) { b.graphic.attr(a).animate(b.shapeArgs, c) }))
  }; l.prototype.animateDrillupFrom = k.prototype.animateDrillupFrom = function (b) {
    var a = this.chart.options.drilldown.animation; var c = this.group; delete this.group; g(this.points, function (d) {
      var f = d.graphic; var g = e.Color(d.color).rgba; delete d.graphic; f.animate(b.shapeArgs, e.merge(a, { step: function (a, c) {
        c.prop === 'start' && this.attr({ fill: q(g, e.Color(b.color).rgba,
          c.pos) })
      },
      complete: function () { f.destroy(); c && (c = c.destroy()) } }))
    })
  }; e.Point.prototype.doDrilldown = function () { for (var b = this.series.chart, a = b.options.drilldown, c = a.series.length, d; c-- && !d;)a.series[c].id === this.drilldown && (d = a.series[c]); r(b, 'drilldown', { point: this, seriesOptions: d }); d && b.addSeriesAsDrilldown(this, d) }; o(e.Point.prototype, 'init', function (b, a, c, d) {
    var f = b.call(this, a, c, d); var b = a.chart; var a = (a = a.xAxis && a.xAxis.ticks[d]) && a.label; if (f.drilldown) {
      if (e.addEvent(f, 'click', function () { f.doDrilldown() }),
      a) { if (!a._basicStyle)a._basicStyle = a.element.getAttribute('style'); a.addClass('highcharts-drilldown-axis-label').css(b.options.drilldown.activeAxisLabelStyle).on('click', function () { f.doDrilldown && f.doDrilldown() }) }
    } else a && a._basicStyle && a.element.setAttribute('style', a._basicStyle); return f
  }); o(e.Series.prototype, 'drawDataLabels', function (b) {
    var a = this.chart.options.drilldown.activeDataLabelStyle; b.call(this); g(this.points, function (b) {
      if (b.drilldown && b.dataLabel) {
        b.dataLabel.attr({ 'class': 'highcharts-drilldown-data-label' }).css(a).on('click',
          function () { b.doDrilldown() })
      }
    })
  }); l.prototype.supportsDrilldown = !0; k.prototype.supportsDrilldown = !0; var p; var j = function (b) { b.call(this); g(this.points, function (a) { a.drilldown && a.graphic && a.graphic.attr({ 'class': 'highcharts-drilldown-point' }).css({ cursor: 'pointer' }) }) }; for (p in i)i[p].prototype.supportsDrilldown && o(i[p].prototype, 'drawTracker', j)
})(Highcharts)
