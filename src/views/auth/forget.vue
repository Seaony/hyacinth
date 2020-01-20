<template>
  <el-card class="mb">
    <div slot="header"><b>😷 忘记密码</b></div>
    <el-form ref="form" :model="form" label-position="top">
      <el-form-item label="邮箱地址">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="fas fa-fw fa-fingerprint" class="block" @click="onSubmit">发送邮件</el-button>
      </el-form-item>
      <div class="text-center">
        <router-link :to="{name: 'auth.login'}" style="font-size: 13px;" class="text-bolder"><i class="fas fa-fw fa-arrow-circle-left"></i> 用户登录</router-link>
      </div>
    </el-form>
  </el-card>
</template>

<script>
export default {
  data: () => ({
    form: {
      email: null
    }
  })
}
</script>
