<script setup>
import MapItem from './components/MapItem.vue'
import MapNav from './components/MapNav.vue'
</script>

<template>
  <div class="tm-container fd-col h-full">
    <div class="tm-breadcrumb">
      <bread-crumb
        title="跨时空维度异常数据探测"
        sub-title="出租车异常监控"
        url="/reproduction/speed-prediction"
      ></bread-crumb>
    </div>
    <div class="tm-card f-1">
      <card-container class="card-container h-full">
        <div class="tm-map-container f-b wh-full">
          <div class="tm-map-content w-70% h-full fd-col mr-2">
            <div class="cp-map-nav">
              <map-nav title="出租车分布概况"> </map-nav>
            </div>
            <map-item> </map-item>
          </div>
          <div class="tm-map-info f-1 h-full fd-col">
            <div class="map-info-box">
              <div class="map-info-nav">
                <map-nav title="出租车区域分布"></map-nav>
              </div>
              <div class="map-info-content h-200">charts</div>
            </div>
            <div class="map-info-box f-1">
              <div class="map-info-nav">
                <map-nav title="出租车异常"></map-nav>
              </div>
              <div class="map-info-content"></div>
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
  &:first-child {
    border-bottom: none;
  }
  .map-info-nav {
    border-bottom: 2px solid #ccc;
    background-color: #f3f3f3;
  }
}
</style>
