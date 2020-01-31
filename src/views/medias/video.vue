<template>
  <el-row :gutter="48">
    <el-col :span="24">
      <blockquote class="mb">
        <p><i class="fas fa-fw fa-info-circle mx-r4"></i> Hyacinth 为您封装了一个基础的视频上传组件，您可以在任意地方使用此组件。组件 base 于 HTML5 Video 组件，文档请 <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/video" target="_blank">点击此处</a> 查看。</p>
      </blockquote>
    </el-col>
    <el-col :span="12">
      <el-card>
        <form-video v-model="value"></form-video>
      </el-card>
    </el-col>
    <el-col :span="12">
      <el-card>
        <form-video v-model="valued"></form-video>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data: () => ({
    value: null,
    valued: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400'
  })
}
</script>
