<script setup></script>
<template>
  <div class="lm-container flex flex-col">
    <div class="lm-breadcrumb">
      <bread-crumb
        title="业务流程管理"
        sub-title="协作模式挖掘与建模"
        url="/reproduction/log-mining"
      ></bread-crumb>
    </div>
    <div class="lm-card f-1">
      <card-container class="card-container h-full bgc-#DCE9F4">
        <div class="lm-card-content">
          <div class="lm-card-title text-center fw-600 fs-24">流程挖掘</div>
          <div class="mining-step1 step">
            step1. 导入日志:
            <el-button
              >Import Log
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 36 36"
                class="ml-4"
              >
                <path
                  fill="#333"
                  d="M3 21a1 1 0 1 0 0 2h5v-2Z"
                  class="clr-i-solid--badged clr-i-solid-path-1--badged"
                ></path>
                <path
                  fill="#333"
                  d="M22.5 6a7.5 7.5 0 0 1 .28-2h-7.91L8 10.86V21h7.2l-3.25-3.25a1 1 0 0 1 1.41-1.41L19 22l-5.68 5.68a1 1 0 0 1-1.41-1.41L15.23 23H8v7a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V13.5A7.5 7.5 0 0 1 22.5 6M16 12h-6v-.32L15.69 6H16Z"
                  class="clr-i-solid--badged clr-i-solid-path-2--badged"
                ></path>
                <circle
                  cx="30"
                  cy="6"
                  r="5"
                  fill="#333"
                  class="clr-i-solid--badged clr-i-solid-path-3--badged clr-i-badge"
                ></circle>
                <path fill="none" d="M0 0h36v36H0z"></path></svg
            ></el-button>
          </div>
          <div class="mining-step2 step">
            step2. 频繁协作模式挖掘:
            <el-button
              >Mining
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 48 48"
                class="ml-4"
              >
                <g
                  fill="none"
                  stroke="#333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="4"
                >
                  <path d="M4 25C4 18.3502 9.39624 13 16 13H44"></path>
                  <path d="M38 7L44 13L38 19"></path>
                  <path d="M44 23C44 29.6498 38.6038 35 32 35H4"></path>
                  <path d="M10 41L4 35L10 29"></path>
                </g>
              </svg>
            </el-button>
          </div>
          <div class="mining-step3 step pb-0!">
            step3. 子图分类选择:<br />
            <!-- 这里可能不使用按钮组, 待补充 -->
            <el-button-group class="ml-4">
              <el-button text color="#DCE9F4" class="color-#3F74A9!"
                >1-6节点子图</el-button
              >
              <el-button text color="#DCE9F4" class="color-#3F74A9!"
                >7-12节点子图</el-button
              >
              <el-button text color="#DCE9F4" class="color-#3F74A9!"
                >13-24节点子图</el-button
              >
            </el-button-group>
          </div>
          <div class="mining-content">
            <div class="mining-content-box"></div>
            <div class="mining-content-box"></div>
          </div>
        </div>
      </card-container>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.lm-container {
  .lm-card {
    .card-container {
      .lm-card-content {
        .step {
          margin-top: 25px;
          color: #fff;
          font-size: 20px;
          padding: 8px 30px;
          background-color: #94b7da;
          border-radius: 5px;
          border: 4px solid #a4bbeb;
        }
        .mining-content {
          .mining-content-box {
            border: 4px solid #a4bbeb;
            height: 200px;
            margin-top: 25px;
            border-radius: 5px;
          }
        }
      }
    }
  }
}
</style>
