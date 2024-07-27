<script setup>
import MapItem from './components/MapItem.vue'
import { ref } from 'vue'

const legends = ref([
  {
    color: 'red',
    info: '0<速度<=20'
  },
  {
    color: 'orange',
    info: '20<速度<=30'
  },
  {
    color: 'yellow',
    info: '30<速度<=40'
  },
  {
    color: 'green',
    info: '40<速度<=50'
  },
  {
    color: 'lightgreen',
    info: '速度>50'
  }
])
</script>

<template>
  <div class="sp-container fd-col h-full">
    <div class="sp-breadcrumb">
      <bread-crumb
        title="跨时空维度异常数据探测"
        sub-title="道路通行速度预测"
        url="/reproduction/speed-prediction"
      ></bread-crumb>
    </div>
    <div class="sp-card f-1">
      <card-container class="card-container h-full">
        <div class="sp-map-container f-b wh-full">
          <div class="sp-map-content bg-red w-70% h-full">
            <map-item :legends="legends"></map-item>
          </div>
          <div class="sp-map-info bg-yellow f-1 h-full">
            <div class="sp-map-info-timer f-c p-y-20 bg-#ccc">
              <div class="timer-box fw-600 fs-22">2024/08/17 上午7:00:00</div>
            </div>
            <div class="sp-map-info-table"></div>
          </div>
        </div>
      </card-container>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
