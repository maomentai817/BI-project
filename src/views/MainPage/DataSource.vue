<script setup>
const tableData = [
  {
    name: '连接名1',
    url: 'jdbc:mysql://10.65.1.205:3306/saiku_test',
    user: 'root',
    type: 'MySQL'
  },
  {
    name: '连接名1',
    url: 'jdbc:mysql://10.65.1.205:3306/saiku_test',
    user: 'root',
    type: 'MySQL'
  },
  {
    name: '连接名1',
    url: 'jdbc:mysql://10.65.1.205:3306/saiku_test',
    user: 'root',
    type: 'MySQL'
  },
  {
    name: '连接名1',
    url: 'jdbc:mysql://10.65.1.205:3306/saiku_test',
    user: 'root',
    type: 'MySQL'
  },
  {
    name: '连接名1',
    url: 'jdbc:mysql://10.65.1.205:3306/saiku_test',
    user: 'root',
    type: 'MySQL'
  },
  {
    name: '连接名1',
    url: 'jdbc:mysql://10.65.1.205:3306/saiku_test',
    user: 'root',
    type: 'MySQL'
  },
  {
    name: '连接名1',
    url: 'jdbc:mysql://10.65.1.205:3306/saiku_test',
    user: 'root',
    type: 'MySQL'
  },
  {
    name: '连接名1',
    url: 'jdbc:mysql://10.65.1.205:3306/saiku_test',
    user: 'root',
    type: 'MySQL'
  },
  {
    name: '连接名1',
    url: 'jdbc:mysql://10.65.1.205:3306/saiku_test',
    user: 'root',
    type: 'MySQL'
  },
  {
    name: '连接名1',
    url: 'jdbc:mysql://10.65.1.205:3306/saiku_test',
    user: 'root',
    type: 'MySQL'
  },
  {
    name: '连接名1',
    url: 'jdbc:mysql://10.65.1.205:3306/saiku_test',
    user: 'root',
    type: 'MySQL'
  }
]
const handleUpdate = (index, row) => {
  console.log(index, row)
}
const handleDelete = (index, row) => {
  console.log(index, row)
}
</script>

<template>
  <div class="ds-container">
    <div class="ds-nav f-b">
      <div class="ds-breadcrumb">
        <bread-crumb
          title="大数据多维分析和可视化"
          sub-title="数据源管理"
          url="/main/data-source"
        ></bread-crumb>
      </div>
      <div class="ds-add-btn p-y-5">
        <el-button type="primary">新增连接</el-button>
      </div>
    </div>
    <div class="ds-content flex flex-col">
      <div class="ds-table h-80vh bg-red">
        <el-table
          :data="tableData"
          border
          style="width: 100%"
          max-height="80vh"
          highlight-current-row
        >
          <el-table-column prop="name" label="连接名" min-width="25%" />
          <el-table-column prop="url" label="地址(URL)" min-width="35%" />
          <el-table-column prop="user" label="用户" min-width="13%" />
          <el-table-column prop="type" label="类型" min-width="12%" />
          <el-table-column align="center" label="操作" min-width="15%">
            <template #default="scope">
              <el-button
                size="small"
                type="primary"
                @click="handleUpdate(scope.$index, scope.row)"
              >
                修改
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
