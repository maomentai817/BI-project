<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="map-nav-container f-b rounded-t-5">
    <div class="map-nav-left f-s h-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        viewBox="0 0 24 24"
      >
        <path
          fill="#8B403B"
          fill-rule="evenodd"
          d="M4 17a1 1 0 0 1 0-2h2l3-3l-3-3H4a1.001 1.001 0 0 1 0-2h3l4 4l4-4h2V5l4 3.001L17 11V9h-1l-3 3l3 3h1v-2l4 3l-4 3v-2h-2l-4-4l-4 4z"
        ></path>
      </svg>
      <b class="ml-15">{{ title }}</b>
    </div>
    <div class="map-nav-right f-b h-full">
      <slot name="extra"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.map-nav-container {
  height: 25px;
  padding-right: 20px;
  padding-left: 5px;
  margin-bottom: 5px;
}
</style>
