<template>
  <el-row :gutter="48">
    <el-col :span="6" v-for="(user, key) in users" :key="key">
      <el-card class="mb text-center" :class="{'online': user.online, 'offline': !user.online}">
        <div class="avatar">
          <div class="text-heavy text-bolder mb">{{ user.last_at }}</div>
          <el-avatar :src="user.avatar" :size="80"></el-avatar>
          <span class="dot"></span>
        </div>
        <h3 class="mb">
          <span class="mx-r8">{{ user.name }}</span>
          <svg v-if="user.gender === 1" style="fill: #2d42e2" viewBox="0 0 1024 1024" width="12" height="12">
            <path
              d="M954.418 135.399c0.093-9.733-3.424-19.304-9.797-26.662-6.823-7.866-16.619-12.837-26.993-13.695-0.143-0.016-0.289-0.029-0.432-0.044L684.744 78.163c-22.091-1.596-41.315 15.019-42.918 37.12-1.602 22.105 15.019 41.32 37.124 42.922l144.701 10.482L651.691 339.99c-61.707-55.677-143.442-89.573-233.098-89.573-192.249 0-348.093 155.845-348.093 348.09s155.845 348.091 348.093 348.091c192.243 0 348.087-155.846 348.087-348.091 0-73.632-22.859-141.916-61.868-198.156l161.967-161.355-9.13 130.178c-1.553 22.105 15.116 41.282 37.222 42.834 0.955 0.063 1.905 0.099 2.851 0.099 20.881 0 38.499-16.169 39.983-37.32l16.624-236.958C954.384 137.021 954.408 136.206 954.418 135.399 954.423 135.104 954.418 135.536 954.418 135.399L954.418 135.399zM665.416 702.739c-13.489 31.883-32.813 60.534-57.436 85.16-24.623 24.623-53.272 43.946-85.159 57.436-32.969 13.94-68.036 21.011-104.233 21.011-36.194 0-71.258-7.07-104.228-21.011-31.888-13.489-60.537-32.813-85.161-57.436-24.627-24.626-43.95-53.277-57.435-85.16-13.945-32.969-21.013-68.042-21.013-104.232 0-36.192 7.068-71.259 21.013-104.229 13.485-31.887 32.808-60.537 57.435-85.164 24.624-24.624 53.273-43.947 85.161-57.431 32.97-13.945 68.034-21.014 104.228-21.014 36.197 0 71.264 7.068 104.233 21.014 31.887 13.484 60.536 32.808 85.159 57.431 24.623 24.627 43.946 53.277 57.436 85.164 13.945 32.971 21.014 68.037 21.014 104.229C686.43 634.697 679.361 669.771 665.416 702.739L665.416 702.739zM665.416 702.739"
              p-id="1869"></path>
          </svg>
          <svg v-else style="fill: #c0392b" viewBox="0 0 1024 1024" width="12" height="12">
            <path d="M815.562249 368.20706c0-167.652348-135.909389-303.56276-303.562761-303.562761S208.436728 200.554712 208.436728 368.20706c0 151.34187 110.7555 276.800233 255.632121 299.782667v67.687612H304.299029v95.862301h159.76982v127.816061h95.862302V831.53964h159.76982v-95.862301H559.930127v-67.687612c144.875598-22.982434 255.632121-148.440797 255.632122-299.782667z m-511.26322 0c0-114.708532 92.991927-207.700459 207.700459-207.700459s207.700459 92.991927 207.700459 207.700459-92.991927 207.700459-207.700459 207.700459-207.700459-92.991927-207.700459-207.700459z" p-id="2667"></path>
          </svg>
        </h3>
        <p class="text-heavy text-bolder mb">或许是不知梦的缘故，流离之人追逐幻影</p>
        <div>
          <el-button icon="fas fa-fw fa-bolt">加为好友</el-button>
          <el-divider direction="vertical"></el-divider>
          <el-button type="primary" icon="fas fa-fw fa-comment">聊天</el-button>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data: () => ({
    users: [
      {
        online: true,
        name: '七海千秋',
        gender: 0,
        last_at: 'AM 10.42',
        avatar: '/avatars/u=2496027267,3228403365&fm=26&gp=0.jpg'
      },
      {
        online: false,
        name: '散华礼弥',
        gender: 0,
        last_at: 'AM 10.42',
        avatar: '/avatars/255e7204ce6e453184f9c81a353606c5!400x400.jpeg'
      },
      {
        online: true,
        name: '优库里伍德',
        gender: 1,
        last_at: 'AM 10.42',
        avatar: '/avatars/e21f9aa392a341aa860e94c200ef8cc5!400x400.jpeg'
      },
      {
        online: false,
        name: '薇尔莉特',
        gender: 1,
        last_at: 'AM 10.42',
        avatar: '/avatars/3c1915f81f314a9292f2460e58d91b78!400x400.jpeg'
      },
      {
        online: true,
        name: '上杉绘梨衣',
        gender: 0,
        last_at: 'AM 10.42',
        avatar: '/avatars/3a9623f08f8641b19c2dbed7e875e0e1!400x400.jpeg'
      },
      {
        online: true,
        name: '新条茜',
        gender: 1,
        last_at: 'AM 10.42',
        avatar: '/avatars/e6259875ab0f449291d3f56fa2308057!400x400.jpeg'
      },
      {
        online: false,
        name: '宝多六花',
        gender: 0,
        last_at: 'AM 10.42',
        avatar: '/avatars/ad69c0025f1840119bd3923b76dc3a90!400x400.jpeg'
      },
      {
        online: true,
        name: '亚丝娜',
        gender: 1,
        last_at: 'AM 10.42',
        avatar: '/avatars/1fb3202b996c4e7a8e84450e6d0f6bc0!400x400.jpeg'
      },
      {
        online: false,
        name: '我妻由乃',
        gender: 0,
        last_at: 'AM 10.42',
        avatar: '/avatars/596d9a5ccad54fa68f4f21c94655b60b!400x400.jpeg'
      },
      {
        online: true,
        name: '椎名真白',
        gender: 1,
        last_at: 'AM 10.42',
        avatar: '/avatars/12f7288b5c094ae99c901ac59fee9a93!400x400.jpeg'
      },
      {
        online: true,
        name: '三笠·阿克曼',
        gender: 0,
        last_at: 'AM 10.42',
        avatar: '/avatars/9b1098c71e194db8b947a7d0144375e4!400x400.jpeg'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
  @import "@/styles/vars";

  ::v-deep {
    .el-card {

      .avatar {
        width: 80px;
        margin: 0 auto;
        position: relative;
        margin-bottom: 24px;

        .dot {
          right: 0px;
          bottom: 0px;
          width: 12px;
          height: 12px;
          position: absolute;
          border-radius: 50%;
          box-sizing: initial;
          display: inline-block;
          border: 3px solid $--color-dark-heavy;
        }
      }

      p {
        line-height: 2.25;
      }

      &.online {
        .dot {
          background: $--color-success;
        }
      }

      &.offline {
        .dot {
          background: $--color-info;
        }

        .el-avatar {
          opacity: .5;
        }

        h3 {
          color: $--color-text-primary-heavy;
        }
      }
    }
  }
</style>
