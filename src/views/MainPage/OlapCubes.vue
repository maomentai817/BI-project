<script setup></script>

<template>
  <div class="oc-container">
    <div class="oc-nav f-b">
      <div class="oc-breadcrumb">
        <bread-crumb
          title="大数据多维分析和可视化"
          sub-title="OLAP Cube 管理"
          url="/main/data-source"
        ></bread-crumb>
      </div>
      <div class="oc-add-btn p-y-5">
        <el-button type="primary">新增Cube</el-button>
      </div>
    </div>
    <div class="oc-content flex flex-col">
      <div class="oc-table h500 bg-red">表格区域</div>
      <div class="oc-pagination bg-yellow flex justify-end">页码</div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
