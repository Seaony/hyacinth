<template>
  <div>
    <blockquote class="mb">
      <p><a href="http://ueditor.baidu.com/website/" target="_blank">UEditor</a> 是一套由百度 FEX 团队开源的所见即所得编辑器，开发人员可以用 UEditor 把传统的多行文本输入框 (textarea) 替换为可视化的富文本输入框。</p>
      <p><a href="http://ueditor.baidu.com/website/" target="_blank">UEditor</a> 使用 JavaScript 编写，可以无缝地与 Java、.NET、PHP、ASP 等程序集成，比较适合在 CMS、商城、论坛、博客、Wiki、电子邮件等互联网应用上使用。</p>
    </blockquote>
    <el-card class="mb">
      <div slot="header"><b>UEditor 编辑器</b></div>
      <VueUeditorWrap class="mb" v-model="msg"></VueUeditorWrap>
      <pre>{{ msg }}</pre>
    </el-card>
  </div>
</template>

<script>
import VueUeditorWrap from 'vue-ueditor-wrap'

export default {
  data: () => ({
    msg: ''
  }),

  components: {
    VueUeditorWrap
  }
}
</script>

<style lang="scss" scoped>
  @import "@/styles/vars";

  ::v-deep {
    .edui-default .edui-toolbar {
      .edui-separator {
        background: none !important;
      }

      .edui-combox {
        .edui-combox-body {
          background: transparent !important;
          border: 1px solid $--color-text-primary-heavy !important;
        }

        .edui-arrow {
          border-left: 1px solid $--color-text-primary-heavy !important;
        }
      }
    }

    .edui-editor, .edui-editor-iframeholder {
      width: 100% !important;
      border: none !important;
      background-color: $--color-background !important;

      &-bottombar, &-wordcount {
        font-weight: 500;
        padding: 8px 12px;
        border-color: #171b23 !important;
        color: $--color-text-primary-heavy !important;
      }

      &-toolbarbox {
        box-shadow: none !important;
      }

      &-toolbarboxouter {
        box-shadow: none !important;
        background-image: none !important;
        border-color: #181c23 !important;
        background-color: #181c23 !important;
      }
    }
  }
</style>
