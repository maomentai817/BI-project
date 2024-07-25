<script setup>
import { ArrowRight } from '@element-plus/icons-vue'

defineProps({
  title: {
    type: String,
    default: ''
  },
  subTitle: {
    type: String,
    default: ''
  },
  url: {
    type: String,
    default: '/'
  }
})
</script>

<template>
  <div class="breadcrumb-container p-8">
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item :to="{ path: url }">{{ title }}</el-breadcrumb-item>
      <el-breadcrumb-item
        ><b>{{ subTitle }}</b></el-breadcrumb-item
      >
    </el-breadcrumb>
  </div>
</template>

<style lang="scss" scoped></style>
