<script setup>
import FolderAdd from './FolderAdd.vue'
import FolderContainer from './FolderContainer.vue'
defineProps({
  title: {
    type: String,
    default: ''
  },
  packages: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <div class="pkg-content flex flex-col justify-between">
    <div class="pkg-header fw-600 mb-15">{{ title }}</div>
    <div class="pkg-body f-1 f-s">
      <div class="pkg-folder-add">
        <folder-add></folder-add>
      </div>
      <div class="pkg-folders f-s">
        <div class="pkg-folder" v-for="item in packages" :key="item.id">
          <folder-container :pkg-info="item"></folder-container>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pkg-content {
  background-color: #fff;
  height: 130px;
  border-radius: 5px;
  padding: 10px;
}
</style>
