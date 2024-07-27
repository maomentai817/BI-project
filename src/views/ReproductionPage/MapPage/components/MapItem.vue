<script setup>
import { BNavigation3d, BScale, BZoom, BLocation } from 'vue3-baidu-map-gl'

defineProps({
  legends: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <!-- 组件高度无法读取inherited, 设置.map-item h-full 解决 -->
  <div class="map-item h-full relative">
    <BMap
      :zoom="10"
      height="100%"
      width="100%"
      enableScrollWheelZoom
      mapStyleId="ee66c61531e8df3c2fd0374e96e58e81"
    >
      <BNavigation3d :offset="{ x: 18, y: 18 }" />
      <BScale />
      <BZoom anchor="BMAP_ANCHOR_TOP_LEFT" :offset="{ x: 18, y: 18 }" />
      <BLocation :offset="{ x: 24, y: 108 }" />
    </BMap>
    <div class="legend-container absolute flex-col" v-if="legends.length">
      <div
        class="legend-item f-s"
        v-for="(item, index) in legends"
        :key="index"
      >
        <div
          class="legend-rect w-20 h10 mr-5"
          :style="`background-color: ${item.color}`"
        ></div>
        <span class="legend-text fs-12">{{ item.info }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// 定位样式过多, 不采用原子化
.map-item {
  .legend-container {
    background-color: #f8f8f8;
    padding: 5px 10px;
    z-index: 20;
    top: 8px;
    right: 8px;
    border-radius: 5px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  }
}
</style>
