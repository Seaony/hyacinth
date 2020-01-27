<template>
  <el-aside width="235px">
    <div class="symbol">
      <img src="@/assets/symbol.svg">
      <b>Hyacinth</b>
    </div>
    <el-menu :default-active="$route.name" router unique-opened>
      <el-menu-item index="1-4-1">
        <i class="fas fa-fw fa-house-damage"></i>
        <span slot="title">控制面板</span>
      </el-menu-item>
      <el-menu-item-group>
        <span slot="title">Pages</span>
        <el-submenu index="1">
          <template slot="title">
            <i class="fas fa-fw fa-keyboard"></i>
            <span>表单页面</span>
          </template>
          <el-menu-item index="forms.standard" :route="{name: 'forms.standard'}">标准表单</el-menu-item>
          <el-menu-item index="forms.steps" :route="{name: 'forms.steps'}">分步表单</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="fas fa-fw fa-server"></i>
            <span>列表页面</span>
          </template>
          <el-menu-item index="listing.standard" :route="{name: 'listing.standard'}">标准表格</el-menu-item>
          <el-menu-item index="listing.cards" :route="{name: 'listing.cards'}">卡片列表</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="fas fa-fw fa-bomb"></i>
            <span>异常页面</span>
          </template>
          <el-menu-item index="exceptions.401" :route="{name: 'exceptions.401'}">401 页面</el-menu-item>
          <el-menu-item index="exceptions.403" :route="{name: 'exceptions.403'}">403 页面</el-menu-item>
          <el-menu-item index="exceptions.404" :route="{name: 'exceptions.404'}">404 页面</el-menu-item>
          <el-menu-item index="exceptions.500" :route="{name: 'exceptions.500'}">500 页面</el-menu-item>
        </el-submenu>
        <el-submenu index="11">
          <template slot="title">
            <i class="fas fa-fw fa-chess-queen"></i>
            <span>业务页面</span>
          </template>
          <el-menu-item index="business.invoice" :route="{name: 'business.invoice'}">清单页面</el-menu-item>
          <el-menu-item index="business.chatrooms" :route="{name: 'business.chatrooms'}">聊天页面</el-menu-item>
        </el-submenu>
      </el-menu-item-group>
      <el-menu-item-group>
        <span slot="title">COMPONENTS</span>
        <el-submenu index="4">
          <template slot="title">
            <i class="fas fa-fw fa-play-circle"></i>
            <span>媒体组件</span>
          </template>
          <el-menu-item index="1-4-4">视频组件</el-menu-item>
          <el-menu-item index="1-4-4">音频组件</el-menu-item>
          <el-menu-item index="1-4-4">图片组件</el-menu-item>
          <el-menu-item index="1-4-4">文件组件</el-menu-item>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">
            <i class="fas fa-fw fa-chart-pie"></i>
            <span>图表组件</span>
          </template>
          <el-menu-item index="1-4-5">控制面板</el-menu-item>
        </el-submenu>
        <el-submenu index="6">
          <template slot="title">
            <i class="fas fa-fw fa-plug"></i>
            <span>图标组件</span>
          </template>
          <el-menu-item index="icons.fontawesome" :route="{name: 'icons.fontawesome'}">Font Awesome</el-menu-item>
        </el-submenu>
        <el-submenu index="7">
          <template slot="title">
            <i class="fas fa-fw fa-quidditch"></i>
            <span>编辑组件</span>
          </template>
          <el-menu-item index="1-4-6">代码编辑器</el-menu-item>
          <el-menu-item index="1-4-6">富文本编辑器</el-menu-item>
          <el-menu-item index="1-4-6">JSON 编辑器</el-menu-item>
          <el-menu-item index="editors.ueditor" :route="{name: 'editors.ueditor'}">UEditor 编辑器</el-menu-item>
        </el-submenu>
        <el-submenu index="8">
          <template slot="title">
            <i class="fas fa-fw fa-box-open"></i>
            <span>数据导出</span>
          </template>
          <el-menu-item index="1-4-6">ZIP 导出</el-menu-item>
          <el-menu-item index="1-4-6">PDF 导出</el-menu-item>
          <el-menu-item index="1-4-6">Excel 导出</el-menu-item>
        </el-submenu>
      </el-menu-item-group>
    </el-menu>
  </el-aside>
</template>

<script>
export default {

  data: () => ({}),

  methods: {}
}
</script>

<style lang="scss" scoped>

  @import "@/styles/vars";
  @import url('https://fonts.googleapis.com/css?family=Nunito:600,700&display=swap');

  ::v-deep {
    &.el-aside {
      overflow-y: scroll;
      position: relative;
      background: $--color-dark-ligher;

      .symbol {
        left: 0;
        top: 0;
        z-index: 1;
        width: 100%;
        display: flex;
        position: sticky;
        padding: 16px 24px;
        align-items: center;
        margin-bottom: 16px;
        justify-content: center;
        background: $--color-dark-heavy;
        border-bottom: 1px solid #0f1015;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .01);

        img {
          width: 32px;
          height: 32px;
          margin-left: -12px;
          margin-right: 12px;
        }

        b {
          font-size: 20px;
          font-family: Nunito;
          text-transform: capitalize;
        }
      }
    }
  }

</style>
