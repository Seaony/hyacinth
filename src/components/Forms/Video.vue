<script>
export default {

  props: {
    value: {
      required: true
    }
  },

  data: () => ({
    loading: false
  }),

  methods: {

    /**
     * Upload video
     * @param file
     * @returns {Promise<boolean>}
     */
    async upload (file) {
      this.loading = true
      const form = new FormData()
      form.append('file', file)
      // const { data } = await upload(form)
      // this.$emit('input', data.url)
      this.loading = false
      return false
    }

  }

}
</script>

<template>
  <el-upload action="/" :show-file-list="false" :before-upload="upload" :http-request="()=>{}">
    <video v-if="value" :src="value" controls></video>
    <el-button type="primary" v-else :loading="loading" icon="fas fa-fw fa-video">选择视频</el-button>
  </el-upload>
</template>

<style lang="scss"></style>
