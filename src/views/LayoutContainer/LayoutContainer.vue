<script setup>
import LayoutAside from './components/LayoutAside.vue'
import LayoutNav from './components/LayoutNav.vue'
// import LayoutFooter from './components/LayoutFooter.vue'
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const activeName = ref('data-source')
const router = useRouter()
const handleClick = (tab) => {
  router.push(`/main/${tab.props.name}`)
}

const route = useRoute()
watch(
  () => route.path,
  (val) => {
    if (val.split('/')[1] === 'main') {
      activeName.value = val.split('/')[2]
    }
  }
)
</script>

<template>
  <div class="container m-0 w-screen h-screen">
    <el-container class="container-box bgc-#E7ECF2">
      <el-aside width="15vw">
        <layout-aside></layout-aside>
      </el-aside>
      <el-container>
        <el-header class="header-box">
          <layout-nav></layout-nav>
        </el-header>
        <!-- 动态渲染tabs -->
        <div
          class="data-tabs-container w-full"
          v-if="$route.path.split('/')[1] === 'main'"
        >
          <el-tabs
            v-model="activeName"
            class="demo-tabs"
            @tab-click="handleClick"
          >
            <el-tab-pane label="数据源管理" name="data-source"></el-tab-pane>
            <el-tab-pane
              label="业务包管理"
              name="service-pkg-management"
            ></el-tab-pane>
            <el-tab-pane
              label="配置转换任务"
              name="configure-task"
            ></el-tab-pane>
            <el-tab-pane label="OLAP Cube 管理" name="olap-cubes"></el-tab-pane>
            <el-tab-pane
              label="OLAP 分析展示和推荐"
              name="olap-analysis"
            ></el-tab-pane>
            <el-tab-pane
              label="OLAP 故事板展示"
              name="olap-story-board"
            ></el-tab-pane>
          </el-tabs>
        </div>
        <el-main class="pb-0! mb-20!">
          <router-view></router-view>
        </el-main>
        <!-- <el-footer>
          <layout-footer></layout-footer>
        </el-footer> -->
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: calc(100vw * var(--device-pixel-ratio, 1));
  .container-box {
    width: inherit;
    height: inherit;
    .header-box {
      padding: 0;
    }
    .data-tabs-container {
      :deep(.el-tabs__nav) {
        padding-left: 25px;
      }
      :deep(.el-tabs__header) {
        margin-bottom: 0;
      }
    }
    :deep(.el-aside) {
      &::-webkit-scrollbar {
        display: none;
      }
    }
    :deep(.el-main) {
      padding-top: 0;
      padding-bottom: 10px;
      // &::-webkit-scrollbar {
      //   display: none;
      // }
      scrollbar-width: thin;
      --un-scrollbar-width: 6px;
      --un-scrollbar-height: 6px;
    }
  }
}
</style>
