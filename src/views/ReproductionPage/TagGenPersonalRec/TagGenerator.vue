<script setup>
import { ref, nextTick } from 'vue'
import { parse } from 'papaparse'
import { ElMessage, genFileId } from 'element-plus'
import { uploadFileAPI } from '@/api/file'
// import instance from '@/utils/instance'

// 文件部分操作
const uploadFile = ref(null)
const upload = ref(null)
const previewDialogVisible = ref(false)
const previewContent = ref([])
const previewHeaders = ref([])

const handleExceed = (files) => {
  upload.value.clearFiles()
  const file = files[0]
  file.uid = genFileId()
  upload.value.handleStart(file)
}

const loading = ref(false)
const svg = `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `
const handlePreview = async (file) => {
  // 文件预览
  loading.value = true
  const reader = new FileReader()
  reader.readAsText(file.raw)
  reader.onload = async () => {
    const csvData = reader.result
    const parsedData = parse(csvData, { header: true })
    previewContent.value = parsedData.data.slice(0, 100)
    previewHeaders.value = parsedData.meta.fields

    previewDialogVisible.value = false
    await nextTick()
    previewDialogVisible.value = true
    loading.value = false
  }
}

const handleChange = (file) => {
  uploadFile.value = file

  // console.log(uploadFile.value)
  // 文件格式处理
}

const beforeUpload = (file) => {
  // console.log(file.raw)
  const isCSV = file.type === 'text/csv'
  const isLt2M = file.size / 1024 / 1024 < 2

  if (!isCSV) {
    ElMessage.error('文件格式必须为 CSV')
  }
  if (!isLt2M) {
    ElMessage.error('文件大小不能超过 2MB')
  }
  return isCSV && isLt2M
}

// 上传区域模态框
const dialogFlag = ref(false)
const openDialog = () => {
  dialogFlag.value = true
}

const handleSubmit = async () => {
  // 上传操作...
  if (!uploadFile.value) {
    ElMessage.error('请先选择文件')
    return
  }

  const formData = new FormData()
  formData.append('file', uploadFile.value.raw)

  const res = await uploadFileAPI(formData)
  if (res.status === 200) {
    ElMessage.success('上传文件成功')
    dialogFlag.value = false
  } else {
    ElMessage.error('上传文件失败')
    console.log(res.message)
  }
}
</script>

<template>
  <div
    class="tg-container fd-col h-full"
    v-loading="loading"
    element-loading-background="transparent"
    :element-loading-spinner="svg"
    element-loading-svg-view-box="-10, -10, 50, 50"
  >
    <div class="tg-breadcrumb">
      <bread-crumb
        title="标签生成与个性化推荐"
        sub-title="标签生成"
        url="/reproduction/tab-generator"
      ></bread-crumb>
    </div>
    <div class="tg-card f-1 flex">
      <card-container title="提取的关键标签" class="card-container f-1">
        <template #extra>
          <el-button type="primary" @click="openDialog">上传文件</el-button>
        </template>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>10000</p>
      </card-container>
    </div>
    <div class="dialog-container">
      <el-dialog
        v-model="dialogFlag"
        title="上传文件"
        width="500"
        draggable
        class="dialog-box"
        :close-on-click-modal="false"
      >
        <template #header> <b>上传文件</b></template>
        <div class="dialog-content h-85 mt-15">
          <div class="upload-container translate-y--4">
            <el-upload
              ref="upload"
              class="upload-demo"
              :action="null"
              :limit="1"
              :on-preview="handlePreview"
              :on-exceed="handleExceed"
              :on-change="handleChange"
              :before-upload="beforeUpload"
              :auto-upload="false"
              accept=".csv"
            >
              <template #trigger>
                <el-button type="primary">选择文件</el-button>
              </template>
              <template v-slot:tip>
                <div class="el-upload__tip ml-5">
                  只允许上传CSV文件,且不超过2MB(点击可预览)
                </div>
              </template>
            </el-upload>
          </div>
        </div>
        <template #footer>
          <el-button type="primary" @click="handleSubmit">上传</el-button>
          <el-button @click="dialogFlag = false">取消</el-button>
        </template>
      </el-dialog>
    </div>

    <!-- 预览弹窗 -->
    <el-dialog
      v-model="previewDialogVisible"
      title="文件预览(前100条)"
      width="800"
      :style="{ maxHeight: '70vh' }"
      :close-on-click-modal="false"
    >
      <div style="max-height: calc(70vh - 100px)" class="overflow-y-auto">
        <el-table
          :data="previewContent"
          style="width: 100%"
          v-if="previewDialogVisible"
        >
          <el-table-column
            v-for="header in previewHeaders"
            :key="header"
            :prop="header"
            :label="header"
          ></el-table-column>
        </el-table>
      </div>
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped>
:deep(.el-loading-mask) {
  z-index: 9999;
}
</style>
