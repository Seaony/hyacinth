<template>
  <el-row>
    <el-col :span="24">
      <el-card>
        <div slot="header"><b>Github Commit 统计</b></div>
        <chart-line :data="data1" :config="config1"></chart-line>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data: () => ({
    data1: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'Point 1',
        data: [3, 20, 76, 38, 32, 11, 74],
        backgroundColor: '#c0392b',
        borderColor: '#c0392b',
        fill: false,
        borderDash: [5, 5],
        pointRadius: 5,
        pointHoverRadius: 8
      }, {
        label: 'Point 2',
        data: [9, 22, 37, 59, 37, 27, 68],
        backgroundColor: '#2d42e2',
        borderColor: '#2d42e2',
        fill: false,
        borderDash: [5, 5],
        pointRadius: 5,
        pointHoverRadius: 8
      }, {
        label: 'Point 3',
        data: [45, 11, 37, 8, 21, 57, 12],
        backgroundColor: '#16a085',
        borderColor: '#16a085',
        fill: false,
        pointHoverRadius: 8
      }, {
        label: 'Point 4',
        data: [36, 8, 12, 33, 21, 47, 38],
        backgroundColor: '#d35400',
        borderColor: '#d35400',
        fill: false,
        pointHoverRadius: 8
      }]
    },
    config1: {
      responsive: true,
      legend: {
        position: 'bottom'
      },
      hover: {
        mode: 'index'
      },
      scales: {
        yAxes: [{
          gridLines: {
            color: '#171b23'
          }
        }],
        xAxes: [{
          gridLines: {
            display: false
          }
        }]
      },
      maintainAspectRatio: false
    }
  })
}
</script>
