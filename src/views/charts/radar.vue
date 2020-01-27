<template>
  <el-row>
    <el-col :span="24">
      <el-card>
        <div slot="header"><b>Github Commit 统计</b></div>
        <chart-radar :data="data1" :config="config1"></chart-radar>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data: () => ({
    data1: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
      datasets: [{
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgb(255, 99, 132)',
        data: [14.85, 11.19, 15.62, 10.46, 10.62, 11.18, 12.21, 9.1],
        label: 'D0'
      }, {
        backgroundColor: 'rgba(255, 159, 64, 0.5)',
        borderColor: 'rgb(255, 159, 64)',
        data: [26.84, 25.97, 24.89, 23.2, 23.45, 24.99, 20.28, 18.13],
        hidden: true,
        label: 'D1',
        fill: '-1'
      }, {
        backgroundColor: 'rgba(255, 205, 86, 0.5)',
        borderColor: 'rgb(255, 205, 86)',
        data: [36.24, 34.63, 38.94, 37.88, 32.63, 39.53, 28.62, 30.43],
        label: 'D2',
        fill: 1
      }, {
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgb(75, 192, 192)',
        data: [49.43, 43.66, 51.61, 50.52, 44.06, 52.5, 44.2, 40.62],
        label: 'D3',
        fill: false
      }, {
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgb(54, 162, 235)',
        data: [65.29, 52.33, 67.61, 58.53, 54.63, 68, 52.28, 56.58],
        label: 'D4',
        fill: '-1'
      }, {
        backgroundColor: 'rgba(153, 102, 255, 0.5)',
        borderColor: 'rgb(153, 102, 255)',
        data: [76.67, 63.08, 79.1, 72.83, 65.31, 83.84, 63.2, 67.11],
        label: 'D5',
        fill: '-1'
      }]
    },
    config1: {
      maintainAspectRatio: true,
      spanGaps: false,
      elements: {
        line: {
          tension: 0.000001
        }
      },
      plugins: {
        filler: {
          propagate: false
        },
        'samples-filler-analyser': {
          target: 'chart-analyser'
        }
      },
      angleLines: [{
        gridLines: {
          color: '#171b23'
        }
      }]
    }
  })
}
</script>
