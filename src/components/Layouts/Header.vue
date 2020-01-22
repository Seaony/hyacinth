<template>
  <el-header height="65px">

    <el-menu default-active="1" mode="horizontal">
      <el-menu-item index="1"><i class="fas fa-fw fa-person-booth"></i><span slot="title">运营</span></el-menu-item>
      <el-menu-item index="2"><i class="fas fa-fw fa-gifts"></i><span slot="title">团购</span></el-menu-item>
      <el-menu-item index="3"><i class="fas fa-fw fa-database"></i><span slot="title">数据</span></el-menu-item>
    </el-menu>

    <div class="dextral">

      <!-- Search -->
      <a href="javascript:;" class="r-32"><i class="fas fa-fw fa-search"></i></a>
      <!-- Search -->

      <!-- Notifications -->
      <el-badge is-dot class="r-32">
        <a href="javascript:;"><i class="fas fa-fw fa-bell"></i></a>
      </el-badge>
      <!-- Notifications -->

      <!-- User -->
      <el-dropdown trigger="click" placement="bottom" class="r-32">
        <a href="javascript:;" class="el-dropdown-link">
          <el-avatar style="vertical-align: middle" :size="28" src="https://cdn.learnku.com/uploads/avatars/17036_1575693310.jpg!/both/100x100"></el-avatar>
        </a>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="fas fa-fw fa-cog">设置</el-dropdown-item>
          <el-dropdown-item @click.native="logout" icon="fas fa-fw fa-power-off">注销</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <!-- User -->

      <!-- Full screen -->
      <a href="javascript:;" v-if="isFullScreen" @click="exitFullscreen"><i class="fas fa-fw fa-compress"></i></a>
      <a href="javascript:;" v-else @click="fullScreen"><i class="fas fa-fw fa-expand"></i></a>
      <!-- Full screen -->

    </div>

  </el-header>
</template>

<script>
export default {

  data: () => ({
    isFullScreen: false // 是否是全屏状态
  }),

  methods: {

    /**
     * 注销当前用户
     */
    logout () {
      this.$store.commit('LOGOUT')
      this.$router.push({ name: 'auth.login' })
    },

    /**
     * 进入全屏
     */
    fullScreen () {
      var element = document.documentElement
      if (element.requestFullscreen) {
        element.requestFullscreen()
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen()
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen()
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen()
      }

      this.isFullScreen = true
    },

    /**
     * 退出全屏
     */
    exitFullscreen () {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen()
      }

      this.isFullScreen = false
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@/styles/vars";

  ::v-deep {
    &.el-header {
      display: flex;
      align-items: center;
      padding: 0 4rem !important;
      background: $--color-dark-ligher;
      box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.05);

      .el-menu {
        display: inline-block;

        &-item {
          border-radius: 2px;
          margin-right: 16px;
          border: none !important;
          height: 36px !important;
          transition: ease all .3s;
          padding: 0 12px !important;
          line-height: 36px !important;
          &.is-active {
            font-weight: bold;
            color: $--color-primary-heavy !important;
            background: $--color-dark-heavy !important;
            span {
              color: $--color-primary-heavy !important;
            }
          }
        }
      }

      .dextral {
        flex: 1;
        text-align: right;

        a {
          font-size: 18px;
          vertical-align: middle;
          color: $--color-text-primary-heavy;

          &:hover {
            color: $--color-text-primary;
          }
        }

        .r-32 {
          margin-right: 32px;
        }

        .el-badge {
          margin-top: 3px;
          vertical-align: middle;
        }

        .el-dropdown {
          vertical-align: middle;
        }
      }
    }
  }
</style>
