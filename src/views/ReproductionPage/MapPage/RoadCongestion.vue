<script setup>
import MapItem from './components/MapItem.vue'
import MapNav from './components/MapNav.vue'
import { ref } from 'vue'

const legends = ref([
  {
    info: '重度拥堵',
    color: '#ff0000'
  },
  {
    info: '中度拥堵',
    color: '#ffa500'
  },
  {
    info: '轻度拥堵',
    color: '#ffff00'
  },
  {
    info: '基本畅通',
    color: '#008000'
  },
  {
    info: '非常通畅',
    color: '#00ff00'
  },
  {
    info: '暂无数据',
    color: '#cccccc'
  }
])
</script>

<template>
  <div class="rc-container fd-col h-full">
    <div class="rc-breadcrumb">
      <bread-crumb
        title="跨时空维度异常数据探测"
        sub-title="道路拥堵监控"
        url="/reproduction/speed-prediction"
      ></bread-crumb>
    </div>
    <div class="rc-card f-1">
      <card-container class="card-container h-full">
        <div class="rc-map-container f-b wh-full">
          <div class="rc-map-content w-70% h-full fd-col mr-2">
            <div class="cp-map-nav">
              <map-nav title="道路拥堵概况"> </map-nav>
            </div>
            <map-item :legends="legends"> </map-item>
          </div>
          <div class="rc-map-info f-1 h-full fd-col">
            <div class="map-info-box">
              <div class="map-info-nav">
                <map-nav title="道路拥堵"></map-nav>
              </div>
              <div class="map-info-content">table</div>
            </div>
          </div>
        </div>
      </card-container>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.map-info-box {
  border: 2px solid #ccc;
  background-color: #fff;
  .map-info-nav {
    border-bottom: 2px solid #ccc;
    background-color: #f3f3f3;
  }
}
</style>
