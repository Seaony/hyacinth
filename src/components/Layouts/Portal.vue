<template>
  <el-main>

    <!-- Page Header -->
    <div class="page-header">

      <!-- Page title -->
      <span class="title">标准表单</span>
      <!-- Page title -->

      <div class="dextral">

        <!-- Breadcrumb -->
        <el-breadcrumb separator="·">
          <el-breadcrumb-item :to="{ path: '/' }"><i class="fas fa-fw fa-home"></i></el-breadcrumb-item>
          <el-breadcrumb-item><i class="fas fa-fw fa-keyboard"></i> 表单页面</el-breadcrumb-item>
          <el-breadcrumb-item>标准表单</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- Breadcrumb -->

      </div>

    </div>

    <!-- View -->
    <router-view />
    <!-- View -->

  </el-main>
</template>

<script>
export default {

  data: () => ({}),

  methods: {}
}
</script>

<style lang="scss" scoped>
  @import "@/styles/vars";

  ::v-deep {
    .page-header {
      display: flex;
      line-height: 48px;
      align-items: center;
      margin-bottom: 24px;

      .title {
        font-size: 16px;
        font-weight: bold;
        font-family: Nunito;
        vertical-align: middle;
        color: $--color-text-primary-heavy;
      }

      .dextral {
        flex: 1;
        text-align: right;
      }

      .el-breadcrumb {
        display: inline-block;

        &__separator {
          margin: 0 12px;
          font-weight: 900;
          color: $--color-text-primary-heavy;
        }

        &__inner {
          font-size: 13px !important;
          font-weight: 500 !important;
          color: $--color-text-primary-heavy !important;

          i:not(.fa-home) {
            margin-right: 4px;
          }

          i {
            font-size: 14px;
            vertical-align: -1px;
          }

          &.is-link {
            font-weight: 500 !important;
            color: $--color-primary-heavy !important;
          }
        }
      }
    }
  }

</style>
