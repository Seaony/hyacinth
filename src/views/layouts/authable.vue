<template>
  <div class="authable">
    <img class="logo" src="@/assets/symbol.svg">
    <router-view/>
    <p class="text-center text-bolder text-heavy cr">
      <span class="mx-r4">© 2020 by</span>
      <a href="javascript:;">Seaony</a>
      <el-divider direction="vertical"></el-divider>
      <a href="javascript:;">
        <i class="fas fa-fw fa-code-branch mx-r4"></i>
        <span>Github</span>
      </a>
      <el-divider direction="vertical"></el-divider>
      <a href="javascript:;">
        <i class="fas fa-fw fa-globe-asia mx-r4"></i>
        <span>Document</span>
      </a>
    </p>
  </div>
</template>

<style lang="scss" scoped>
  @import "@/styles/vars";

  ::v-deep {
    &.authable {
      padding: 6rem;
      border-top: 3px solid $--color-primary-heavy;
    }

    .cr {
      font-size: 12px;
    }

    .logo {
      width: 128px;
      display: block;
      margin: 0 auto 4rem;
    }

    .el-card {
      width: 350px;
      border: none;
      margin: 0 auto;
      background: transparent;

      &__header {
        border: none;
        font-size: 130%;
        padding-bottom: 0;
      }

      .right {
        float: right;
      }

      .el-button {
        height: 42px;
        font-size: 13px;
      }
    }
  }
</style>
