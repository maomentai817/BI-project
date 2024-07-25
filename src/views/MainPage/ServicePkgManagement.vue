<script setup>
import { ref } from 'vue'
import PackageContainer from './components/PackageContainer.vue'
const totalPackages = ref([
  {
    name: 'test01',
    id: '1',
    packages: [
      {
        name: '业务包1',
        id: '10'
      },
      {
        name: '业务包2',
        id: '11'
      },
      {
        name: '业务包3',
        id: '12'
      }
    ]
  },
  {
    name: 'test02',
    id: '2',
    packages: [
      {
        name: '业务业务',
        id: '20'
      }
    ]
  }
])
</script>

<template>
  <div class="spm-container">
    <div class="spm-nav f-b">
      <div class="spm-breadcrumb">
        <bread-crumb
          title="大数据多维分析和可视化"
          sub-title="业务包管理"
          url="/main/data-source"
        ></bread-crumb>
      </div>
      <div class="spm-add-btn p-y-5">
        <el-button type="primary">新建分组</el-button>
      </div>
    </div>
    <div class="spm-content flex flex-col">
      <div
        class="pkg-container mb-20"
        v-for="item in totalPackages"
        :key="item.id"
      >
        <package-container
          :title="item.name"
          :packages="item.packages"
        ></package-container>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
