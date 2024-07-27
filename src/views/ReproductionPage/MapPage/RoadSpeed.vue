<script setup>
import MapItem from './components/MapItem.vue'
import MapNav from './components/MapNav.vue'
import { ref } from 'vue'

const legends = ref([
  {
    info: '0<速度<=20',
    color: '#ff0000'
  },
  {
    info: '20<速度<=30',
    color: '#ffa500'
  },
  {
    info: '30<速度<=50',
    color: '#008000'
  },
  {
    info: '速度>50',
    color: '#00ff00'
  }
])
</script>

<template>
  <div class="rs-container fd-col h-full">
    <div class="rs-breadcrumb">
      <bread-crumb
        title="跨时空维度异常数据探测"
        sub-title="道路实时同行速度监控"
        url="/reproduction/speed-prediction"
      ></bread-crumb>
    </div>
    <div class="rs-card f-1">
      <card-container class="card-container h-full">
        <div class="rs-map-container f-b wh-full">
          <div class="rs-map-content w-70% h-full fd-col mr-2">
            <div class="cp-map-nav">
              <map-nav title="路网速度概况"> </map-nav>
            </div>
            <map-item :legends="legends"> </map-item>
          </div>
          <div class="rs-map-info f-1 h-full fd-col">
            <div class="map-info-box">
              <div class="map-info-nav">
                <map-nav title="道路速度"></map-nav>
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
