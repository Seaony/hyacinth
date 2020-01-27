<template>
  <el-row>
    <el-col :span="24">
      <el-card>
        <div slot="header"><b>Github Commit 统计</b></div>
        <chart-bar :data="data1" :config="config1"></chart-bar>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data: () => ({
    data1: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          color: '#ffffff',
          label: 'GitHub Commits',
          backgroundColor: '#2d42e2',
          data: [1, 20, 12, 39, 28, 40, 39, 49, 40, 20, 12, 11]
        },
        {
          label: 'Pull Requests',
          backgroundColor: '#16a085',
          data: [23, 38, 37, 12, 34, 24, 43, 53, 34, 28, 16, 20]
        }
      ]
    },
    config1: {
      scales: {
        yAxes: [{
          gridLines: {
            color: '#171b23'
          }
        }]
      },
      maintainAspectRatio: false
    }
  })
}
</script>
