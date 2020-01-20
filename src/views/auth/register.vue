<template>
  <el-card class="mb">
    <div slot="header"><b>🥳 用户注册</b></div>
    <el-form ref="form" :model="form" label-position="top">
      <el-form-item label="用户昵称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="邮箱地址">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="登录密码">
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>
      <div class="mb">
        <router-link :to="{name: 'auth.login'}" style="font-size: 13px;" class="text-bolder"><i class="fas fa-fw fa-arrow-circle-left"></i> 用户登录</router-link>
        <div class="clear"></div>
      </div>
      <el-form-item>
        <el-button type="primary" icon="fas fa-fw fa-fingerprint" class="block" @click="onSubmit">注册</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  data: () => ({
    form: {
      name: null,
      email: null,
      password: null
    }
  })
}
</script>
