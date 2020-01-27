<script>
import Chart from 'chart.js'
import { Bar } from 'vue-chartjs'

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
  extends: Bar,
  mounted () {
    Chart.defaults.global.defaultFontColor = '#54627d'

    this.renderChart(this.data, this.config)
  }
}
</script>
