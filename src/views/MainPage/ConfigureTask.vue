<script setup></script>

<template>
  <div class="ct-container">
    <div class="ct-nav f-b h-42">
      <div class="ct-breadcrumb">
        <bread-crumb
          title="大数据多维分析和可视化"
          sub-title="配置转换任务"
          url="/main/data-source"
        ></bread-crumb>
      </div>
      <div class="ct-add-btn p-y-5">
        <el-button type="primary">新建转换任务</el-button>
      </div>
    </div>
    <div class="ct-content fd-col">
      <div class="ct-table h-500 bg-red">表格</div>
      <div class="ct-pagination flex justify-end bg-blue">分页</div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
