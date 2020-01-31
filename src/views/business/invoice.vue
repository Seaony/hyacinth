<template>
  <el-card>
    <el-row>
      <el-col :span="24">
        <h2 class="mb" style="margin-top: 0;"><i class="fas fa-fw fa-file-invoice mx-r8"></i> #SDF9823KD</h2>
        <el-table class="mb" :data="items" show-summary :summary-method="getSummaries">
          <el-table-column prop="name" label="名称"></el-table-column>
          <el-table-column prop="price" label="价格" width="100">
            <template slot-scope="scope">{{ scope.row.price.toFixed(2) }}</template>
          </el-table-column>
          <el-table-column prop="num" label="数量" width="100"></el-table-column>
          <el-table-column prop="total" label="总计" width="100">
            <template slot-scope="scope">{{ scope.row.total.toFixed(2) }}</template>
          </el-table-column>
        </el-table>
        <div class="text-right">
          <span class="text-heavy text-bolder" style="float: left;line-height: 38px">生成时间: 2019-05-25</span>
          <el-button icon="fas fa-fw fa-print" type="primary">打印清单</el-button>
        </div>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        name: '干物妹小埋抱枕',
        num: 1,
        price: 76,
        total: 76
      },
      {
        name: '稚名真白等身抱枕',
        num: 3,
        price: 499,
        total: 1497
      },
      {
        name: 'Saber 周边马克杯',
        num: 2,
        price: 69,
        total: 138
      },
      {
        name: '怪盗基德同款石英手表',
        num: 1,
        price: 888,
        total: 888
      },
      {
        name: '东方 Project 幽幽子台灯',
        num: 1,
        price: 88,
        total: 88
      },
      {
        name: 'Tokidoki 淘奇多奇独角兽',
        num: 4,
        price: 48,
        total: 192
      },
      {
        name: '紫罗兰永恒花园羽毛蘸水笔',
        num: 1,
        price: 38,
        total: 38
      },
      {
        name: '五等分的花嫁同款蓝牙耳机',
        num: 1,
        price: 299,
        total: 299
      }
    ]
  }),

  methods: {
    getSummaries (param) {
      const { columns, data } = param
      const sums = []
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = '合计'
          return
        }
        const values = data.map(item => Number(item[column.property]))
        if (!values.every(value => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr)
            if (!isNaN(value)) {
              return prev + curr
            } else {
              return prev
            }
          }, 0)
          if (index !== 2) {
            sums[index] = sums[index].toFixed(2)
          } else {
            sums[index] += ' 件'
          }
        } else {
          sums[index] = 'N/A'
        }
      })

      return sums
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@/styles/vars";

  ::v-deep {
  }
</style>
