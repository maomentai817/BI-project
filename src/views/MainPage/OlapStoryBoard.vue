<script setup>
const tableData = [
  {
    id: '1',
    name: '故事板1'
  },
  {
    id: '2',
    name: '故事板2'
  },
  {
    id: '3',
    name: '故事板3'
  },
  {
    id: '4',
    name: '故事板4'
  },
  {
    id: '4',
    name: '故事板4'
  },
  {
    id: '4',
    name: '故事板4'
  },
  {
    id: '4',
    name: '故事板4'
  },
  {
    id: '4',
    name: '故事板4'
  },
  {
    id: '4',
    name: '故事板4'
  },
  {
    id: '4',
    name: '故事板4'
  },
  {
    id: '4',
    name: '故事板4'
  },
  {
    id: '4',
    name: '故事板4'
  },
  {
    id: '4',
    name: '故事板4'
  },
  {
    id: '4',
    name: '故事板4'
  },
  {
    id: '4',
    name: '故事板4'
  },
  {
    id: '4',
    name: '故事板4'
  },
  {
    id: '4',
    name: '故事板4'
  },
  {
    id: '4',
    name: '故事板4'
  },
  {
    id: '4',
    name: '故事板4'
  }
]
const handleView = (index, row) => {
  console.log(index, row)
}
const handleDelete = (index, row) => {
  console.log(index, row)
}
</script>

<template>
  <div class="osb-container">
    <div class="osb-nav f-b">
      <div class="osb-breadcrumb">
        <bread-crumb
          title="大数据多维分析和可视化"
          sub-title="OLAP 故事板展示"
          url="/main/data-source"
        ></bread-crumb>
      </div>
      <div class="osb-add-btn p-y-5">
        <el-button type="primary">新增故事板</el-button>
      </div>
    </div>
    <div class="osb-content fd-col">
      <div class="osb-table h-80vh bg-red">
        <el-table
          :data="tableData"
          border
          style="width: 100%"
          max-height="80vh"
          highlight-current-row
          :header-cell-style="{ 'text-align': 'center' }"
        >
          <el-table-column align="center" prop="id" label="#" min-width="8%" />
          <el-table-column
            align="center"
            prop="name"
            label="名称"
            min-width="77%"
          />
          <el-table-column align="center" label="操作" min-width="15%">
            <template #default="scope">
              <el-button
                size="small"
                type="primary"
                @click="handleView(scope.$index, scope.row)"
              >
                查看详情
              </el-button>
              <el-button
                size="small"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
              >
                删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
