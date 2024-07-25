<script setup>
defineProps({
  pkgInfo: {
    type: Object,
    default: () => {}
  }
})
</script>

<template>
  <div class="folder-container flex-col f-c cursor-pointer">
    <div class="folder-icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 512 512"
      >
        <path
          fill="#0091CB"
          d="M496 152a56 56 0 0 0-56-56H220.11a23.9 23.9 0 0 1-13.31-4L179 73.41A55.77 55.77 0 0 0 147.89 64H72a56 56 0 0 0-56 56v48a8 8 0 0 0 8 8h464a8 8 0 0 0 8-8ZM16 392a56 56 0 0 0 56 56h368a56 56 0 0 0 56-56V216a8 8 0 0 0-8-8H24a8 8 0 0 0-8 8Z"
        ></path>
      </svg>
    </div>
    <div class="folder-title fs-10">{{ pkgInfo.name }}</div>
  </div>
</template>

<style lang="scss" scoped>
.folder-container {
  width: 80px;
  height: 70px;
}
</style>
