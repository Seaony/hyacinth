(function (Highcharts) {
  var seriesTypes = Highcharts.seriesTypes
  var each = Highcharts.each

  seriesTypes.heatmap = Highcharts.extendClass(seriesTypes.map, {
    colorKey: 'z',
    useMapGeometry: false,
    pointArrayMap: ['y', 'z'],
    translate: function () {
      var series = this
      var options = series.options
      var dataMin = Number.MAX_VALUE
      var dataMax = Number.MIN_VALUE

      series.generatePoints()

      each(series.data, function (point) {
        var x = point.x
        var y = point.y
        var value = point.z
        var xPad = (options.colsize || 1) / 2
        var yPad = (options.rowsize || 1) / 2

        point.path = [
          'M', x - xPad, y - yPad,
          'L', x + xPad, y - yPad,
          'L', x + xPad, y + yPad,
          'L', x - xPad, y + yPad,
          'Z'
        ]

        point.shapeType = 'path'
        point.shapeArgs = {
          d: series.translatePath(point.path)
        }

        if (typeof value === 'number') {
          if (value > dataMax) {
            dataMax = value
          } else if (value < dataMin) {
            dataMin = value
          }
        }
      })

      series.translateColors(dataMin, dataMax)
    },

    getBox: function () {}

  })
}(Highcharts))
