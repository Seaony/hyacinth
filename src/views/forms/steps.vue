<template>
  <el-row>
    <el-col :span="24">
      <el-row class="mb">
        <el-col :span="8" :offset="8">
          <blockquote class="mb">
            <p>将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。</p>
          </blockquote>
          <br>
          <br>
          <el-steps :active="active" finish-status="success" class="mb">
            <el-step title="填写转账信息" icon="fas fa-fw fa-receipt"></el-step>
            <el-step title="确认转账信息" icon="fas fa-fw fa-id-card-alt"></el-step>
            <el-step title="转账完成" icon="fas fa-fw fa-check"></el-step>
          </el-steps>
        </el-col>
      </el-row>
      <el-row class="mb">
        <el-col :span="8" :offset="8">
          <el-card v-if="active === 0">
            <el-form ref="form" :model="form" label-position="top">
              <el-form-item label="付款账户">
                <el-select v-model="form.region" placeholder="请选择付款账户">
                  <el-option label="hyacinth@alipay.com" value="hyacinth@alipay.com"></el-option>
                  <el-option label="hyacinth@wechat.com" value="hyacinth@wechat.com"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="收款账户">
                <el-input placeholder="test@alipay.com" v-model="form.account" class="input-with-select">
                  <el-select style="width: 120px" v-model="form.type" slot="prepend">
                    <el-option label="微信支付" :value="1"></el-option>
                    <el-option label="支付宝支付" :value="2"></el-option>
                  </el-select>
                </el-input>
              </el-form-item>
              <el-form-item label="收款人姓名">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="转账金额">
                <el-input-number v-model="form.total" :precision="2"></el-input-number>
                <b style="margin-left: 8px;">元</b>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="active++">下一步 <i class="fas fa-fw fa-arrow-circle-right"></i></el-button>
              </el-form-item>
            </el-form>
          </el-card>
          <el-card v-if="active === 1">
            <el-form ref="form" :model="form" label-position="top">
              <el-form-item label="付款账户:">
                <a href="javascript:;" style="font-weight: 500;font-size: 13px;">{{ form.region }}</a>
              </el-form-item>
              <el-form-item label="收款账户:">
                <a href="js" style="font-weight: 500;font-size: 13px;">{{ form.account }}</a>
              </el-form-item>
              <el-form-item label="收款人姓名:">
                <a href="javascript:;" style="font-weight: 500;font-size: 13px;">{{ form.name }}</a>
              </el-form-item>
              <el-form-item label="转账金额:">
                <b style="color: #16a085;font-size: 32px;margin-right: 4px;">{{ form.total.toFixed(2) }}</b>
                <b style="position: relative;top: -3px;">元</b>
              </el-form-item>
              <el-divider></el-divider>
              <el-form-item label="支付密码">
                <el-input type="password" v-model="form.password"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button @click="active--"><i class="fas fa-fw fa-arrow-circle-left"></i> 上一步</el-button>
                <el-button type="primary" :loading="loading" @click="confirm" icon="fas fa-fw fa-check">提交</el-button>
              </el-form-item>
            </el-form>
          </el-card>
          <el-card v-if="active === 2">
            <el-form ref="form" :model="form" label-position="top" class="text-center">
              <div class="mb">
                <i class="fas fa-fw fa-check success-icon"></i>
              </div>
              <h3 class="mb">转账成功</h3>
              <p class="mb text-heavy text-bolder">预计两小时内到账</p>
              <el-form-item>
                <el-button type="primary" icon="fas fa-fw fa-reply-all" @click="active = 0">再转一笔</el-button>
              </el-form-item>
            </el-form>
          </el-card>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      active: 0,
      loading: false,
      form: {
        password: 123123,
        name: '张三',
        region: 'hyacinth@alipay.com',
        account: 'test@alipay.com',
        type: 1,
        total: 1800.00
      }
    }
  },

  methods: {
    confirm () {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.active++
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@/styles/vars";

  ::v-deep {
    .success-icon {
      height: 100px;
      color: #f9f9f9;
      font-size: 54px;
      margin-top: 24px;
      border-radius: 50%;
      background: #16a085;
      width: 100px !important;
      line-height: 100px !important;
    }
  }
</style>
