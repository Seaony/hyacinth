<template>
  <el-card class="mb">
    <div slot="header"><b>👨‍💻 用户登录</b></div>
    <el-form ref="form" :model="form" label-position="top">
      <el-form-item label="邮箱地址">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="登录密码">
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>
      <div class="mb">
        <router-link :to="{name: 'auth.forget'}" style="font-size: 13px;" class="right text-bolder">忘记密码 <i class="fas fa-fw fa-share-square"></i></router-link>
        <div class="clear"></div>
      </div>
      <el-form-item>
        <el-button type="primary" :loading="loading" icon="fas fa-fw fa-fingerprint" class="block" @click="onSubmit">登录</el-button>
      </el-form-item>
      <div class="text-center">
        <router-link :to="{name: 'auth.register'}" style="font-size: 13px;" class="text-bolder">用户注册 <i class="fas fa-fw fa-arrow-circle-right"></i></router-link>
      </div>
    </el-form>
  </el-card>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    form: {
      email: 'admin@hyacinth.com',
      password: 'hyacinth'
    }
  }),

  methods: {
    onSubmit () {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.$router.push({ name: 'layouts.default' })
      }, 1000)
    }
  }
}
</script>
