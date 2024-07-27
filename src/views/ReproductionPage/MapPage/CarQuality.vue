<script setup>
import MapItem from './components/MapItem.vue'
import MapNav from './components/MapNav.vue'
</script>

<template>
  <div class="cq-container fd-col h-full">
    <div class="cq-breadcrumb">
      <bread-crumb
        title="跨时空维度异常数据探测"
        sub-title="浮动车异常数据监控"
        url="/reproduction/speed-prediction"
      ></bread-crumb>
    </div>
    <div class="cq-card f-1">
      <card-container class="card-container h-full">
        <div class="cq-map-container f-b wh-full">
          <div class="cq-map-content w-70% h-full fd-col mr-2">
            <div class="cp-map-nav">
              <map-nav title="浮动车地理位置分布">
                <template #extra>
                  <div class="show-time fw-600">
                    当前展示时间:
                    <span class="show-time-text">2024-08-17 00:00:00</span> -
                    <span class="show-time-text">2024-08-17 11:11:11</span>
                  </div>
                </template></map-nav
              >
            </div>
            <map-item> </map-item>
          </div>
          <div class="cq-map-info f-1 h-full fd-col">
            <div class="map-info-box">
              <div class="map-info-nav">
                <map-nav title="数据写入延迟时间分布"></map-nav>
              </div>
              <div class="map-info-content h-200">charts</div>
            </div>
            <div class="map-info-box f-1">
              <div class="map-info-nav">
                <map-nav title="浮动车数据分析参数设置"></map-nav>
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
.show-time-text {
  background-color: #0e97d0;
  color: #fff;
  padding: 2px 5px;
  font-size: 12px;
  border-radius: 5px;
  font-weight: 400;
}
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
