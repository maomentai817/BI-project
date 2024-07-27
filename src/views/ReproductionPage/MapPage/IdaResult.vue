<script setup>
import MapItem from './components/MapItem.vue'
import MapNav from './components/MapNav.vue'
import { ref } from 'vue'

const legends = ref([
  {
    info: '异常',
    color: '#ff0000'
  },
  {
    info: '正常',
    color: '#00ff00'
  },
  {
    info: '未知',
    color: '#0000ff'
  }
])
</script>

<template>
  <div class="ida-container fd-col h-full">
    <div class="ida-breadcrumb">
      <bread-crumb
        title="跨时空维度异常数据探测"
        sub-title="交通区域分析和可视化"
        url="/reproduction/speed-prediction"
      ></bread-crumb>
    </div>
    <div class="ida-card f-1">
      <card-container class="card-container h-full fd-col">
        <div class="ida-map-nav">
          <map-nav title="全局LDA分析概况"> </map-nav>
        </div>
        <div class="ida-map-container f-b wh-full f-1">
          <div class="ida-map-content bg-red wh-full">
            <map-item :legends="legends"></map-item>
          </div>
        </div>
      </card-container>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
