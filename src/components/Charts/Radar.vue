<script>
import Chart from 'chart.js'
import { Radar } from 'vue-chartjs'

export default {
  props: {
    data: {
      type: Object,
      require: true
    },
    config: {
      type: Object
    }
  },
  extends: Radar,
  mounted () {
    Chart.defaults.global.defaultFontColor = '#54627d'

    this.renderChart(this.data, this.config)
  }
}
</script>
