<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const subMenuOpen = (index) => {
  if (index) {
    router.push(index)
  }
}
</script>

<template>
  <div class="aside-container wh-full f-items-c relative">
    <div class="aside-title w-full f-c sticky">智软 BI</div>
    <div class="aside-content w-full f-1">
      <div class="aside-desc hl-25">领域演示功能</div>
      <el-menu
        active-text-color="#ffd04b"
        background-color="#292D2E"
        class="el-menu-vertical-demo"
        :default-active="$route.path"
        text-color="#fff"
        unique-opened="true"
        router
        @open="subMenuOpen"
      >
        <el-sub-menu index="/reproduction/tab-generator" class="sub-menu">
          <template #title>
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 32 32"
                style="transform: translateY(-20px)"
              >
                <circle cx="16" cy="16" r="10" fill="#cccccc"></circle>
                <path
                  fill="#cccccc"
                  d="M16 30a14 14 0 1 1 14-14a14.016 14.016 0 0 1-14 14m0-26a12 12 0 1 0 12 12A12.014 12.014 0 0 0 16 4"
                ></path></svg
              >标签生成与个性化推荐</span
            >
          </template>
          <el-menu-item index="/reproduction/tab-generator"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 20 20"
            >
              <path
                fill="#ccc"
                d="M9.76 0C15.417 0 20 4.477 20 10S15.416 20 9.76 20c-3.191 0-6.142-1.437-8.07-3.846a.644.644 0 0 1 .115-.918a.68.68 0 0 1 .94.113a8.96 8.96 0 0 0 7.016 3.343c4.915 0 8.9-3.892 8.9-8.692s-3.985-8.692-8.9-8.692a8.96 8.96 0 0 0-6.944 3.255a.68.68 0 0 1-.942.101a.644.644 0 0 1-.103-.92C3.703 1.394 6.615 0 9.761 0m.545 6.862l2.707 2.707c.262.262.267.68.011.936L10.38 13.15a.66.66 0 0 1-.937-.011a.66.66 0 0 1-.01-.937l1.547-1.548l-10.31.001A.66.66 0 0 1 0 10c0-.361.3-.654.67-.654h10.268L9.38 7.787a.66.66 0 0 1-.01-.937a.66.66 0 0 1 .935.011"
              ></path></svg
            >标签生成</el-menu-item
          >
          <el-menu-item index="/reproduction/user-portrait"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
            >
              <path
                fill="#ccc"
                d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"
              ></path></svg
            >用户画像与产品推荐</el-menu-item
          >
          <el-menu-item index="/reproduction/product-portrait"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 512 512"
            >
              <path
                fill="#cccccc"
                d="M440.9 136.3a4 4 0 0 0 0-6.91L288.16 40.65a64.14 64.14 0 0 0-64.33 0L71.12 129.39a4 4 0 0 0 0 6.91L254 243.88a4 4 0 0 0 4.06 0ZM54 163.51a4 4 0 0 0-6 3.49v173.89a48 48 0 0 0 23.84 41.39L234 479.51a4 4 0 0 0 6-3.46V274.3a4 4 0 0 0-2-3.46ZM272 275v201a4 4 0 0 0 6 3.46l162.15-97.23A48 48 0 0 0 464 340.89V167a4 4 0 0 0-6-3.45l-184 108a4 4 0 0 0-2 3.45"
              ></path></svg
            >产品画像</el-menu-item
          >
        </el-sub-menu>
        <el-sub-menu index="/reproduction/interest-mining" class="sub-menu">
          <template #title>
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                style="transform: translateY(-20px)"
              >
                <rect
                  x="10"
                  y="2"
                  width="4"
                  height="16"
                  fill="#c0c0c0"
                  transform="rotate(45 12 10)"
                />
                <rect
                  x="11"
                  y="1"
                  width="2"
                  height="2"
                  fill="#c0c0c0"
                  transform="rotate(45 12 10)"
                />
                <line
                  x1="8"
                  y1="0"
                  x2="9"
                  y2="1"
                  stroke="#ffffff"
                  stroke-width="1"
                />
                <line
                  x1="6"
                  y1="2"
                  x2="7"
                  y2="3"
                  stroke="#ffffff"
                  stroke-width="1"
                />
                <line
                  x1="10"
                  y1="0"
                  x2="11"
                  y2="1"
                  stroke="#ffffff"
                  stroke-width="1"
                />
              </svg>
              文本数据维度和度量抽取</span
            >
          </template>
          <el-menu-item index="/reproduction/interest-mining"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 20 20"
            >
              <path
                fill="#ccc"
                d="M9.76 0C15.417 0 20 4.477 20 10S15.416 20 9.76 20c-3.191 0-6.142-1.437-8.07-3.846a.644.644 0 0 1 .115-.918a.68.68 0 0 1 .94.113a8.96 8.96 0 0 0 7.016 3.343c4.915 0 8.9-3.892 8.9-8.692s-3.985-8.692-8.9-8.692a8.96 8.96 0 0 0-6.944 3.255a.68.68 0 0 1-.942.101a.644.644 0 0 1-.103-.92C3.703 1.394 6.615 0 9.761 0m.545 6.862l2.707 2.707c.262.262.267.68.011.936L10.38 13.15a.66.66 0 0 1-.937-.011a.66.66 0 0 1-.01-.937l1.547-1.548l-10.31.001A.66.66 0 0 1 0 10c0-.361.3-.654.67-.654h10.268L9.38 7.787a.66.66 0 0 1-.01-.937a.66.66 0 0 1 .935.011"
              ></path></svg
            >文本特征提取</el-menu-item
          >
          <el-menu-item index="/reproduction/duplicate-checking"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#cccccc"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 15V5a2 2 0 0 0-2-2h-6m8 12v.172a2 2 0 0 1-.586 1.414l-3.828 3.828a2 2 0 0 1-1.414.586H15m6-6h-4a2 2 0 0 0-2 2v4m0 0H5a2 2 0 0 1-2-2v-8m10-4h4M7 11h10M7 15h4M9 6H3"
              ></path></svg
            >非结构化文本查重</el-menu-item
          >
        </el-sub-menu>
        <el-sub-menu index="/reproduction/log-mining" class="sub-menu">
          <template #title>
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 256 256"
                style="transform: translateY(-20px)"
              >
                <path
                  fill="#cccccc"
                  d="M244 56v64a12 12 0 0 1-24 0V85l-75.51 75.52a12 12 0 0 1-17 0L96 129l-63.51 63.49a12 12 0 0 1-17-17l72-72a12 12 0 0 1 17 0L136 135l67-67h-35a12 12 0 0 1 0-24h64a12 12 0 0 1 12 12"
                ></path></svg
              >业务流程管理</span
            >
          </template>
          <el-menu-item index="/reproduction/log-mining"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 32 32"
            >
              <path
                fill="#cccccc"
                d="M10 10H2V2h8zM4 8h4V4H4zm26 22h-8v-8h8zm-6-2h4v-4h-4zm-4-1H8a6 6 0 0 1 0-12v2a4 4 0 0 0 0 8h12zm4-10v-2a4 4 0 0 0 0-8H12V5h12a6 6 0 0 1 0 12"
              ></path>
              <path fill="#cccccc" d="M19 11h-6l-3 4l6 6l6-6Z"></path></svg
            >协作模式挖掘与建模</el-menu-item
          >
        </el-sub-menu>
        <el-sub-menu index="/main/data-source" class="sub-menu">
          <template #title>
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 512 512"
                style="transform: translateY(-20px)"
              >
                <path
                  fill="#cccccc"
                  d="M440.9 136.3a4 4 0 0 0 0-6.91L288.16 40.65a64.14 64.14 0 0 0-64.33 0L71.12 129.39a4 4 0 0 0 0 6.91L254 243.88a4 4 0 0 0 4.06 0ZM54 163.51a4 4 0 0 0-6 3.49v173.89a48 48 0 0 0 23.84 41.39L234 479.51a4 4 0 0 0 6-3.46V274.3a4 4 0 0 0-2-3.46ZM272 275v201a4 4 0 0 0 6 3.46l162.15-97.23A48 48 0 0 0 464 340.89V167a4 4 0 0 0-6-3.45l-184 108a4 4 0 0 0-2 3.45"
                ></path></svg
              >大数据多维分析和可视化</span
            >
          </template>
          <el-menu-item index="/main/olap-cubes"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 16 16"
            >
              <path
                fill="none"
                stroke="#cccccc"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M1.75 4.75L8 1.25l6.25 3.5v6.5L8 14.75l-6.25-3.5zM8 14V8m5.75-3L8 8M2 5l6 3"
              ></path></svg
            >OLAP Cube 管理</el-menu-item
          >
          <el-menu-item index="/main/olap-analysis"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 48 48"
            >
              <g
                fill="none"
                stroke="#cccccc"
                stroke-linejoin="round"
                stroke-width="4"
              >
                <path
                  stroke-linecap="round"
                  d="M24 44c8.284 0 15-6.716 15-15C39 15 24 4 24 4S9 15 9 29c0 8.284 6.716 15 15 15"
                  clip-rule="evenodd"
                ></path>
                <path
                  fill="#cccccc"
                  d="M9 29c0 8.284 6.716 15 15 15c8.284 0 15-6.716 15-15c0 0-9 3-15 0S9 29 9 29Z"
                ></path>
              </g></svg
            >OLAP 分析展示和推荐</el-menu-item
          >
          <el-menu-item index="/main/olap-story-board"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 1200 1200"
            >
              <path
                fill="#cccccc"
                d="M0 103.564v792.188h435.718v114.186H329.517v86.498h540.967v-86.498H764.282V895.752H1200V103.564zm147.583 149.561h904.833v493.14H147.583z"
              ></path></svg
            >OLAP 故事板展示</el-menu-item
          >
          <el-menu-item index="/main/data-source"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 2048 2048"
            >
              <path
                fill="#cccccc"
                d="M1280 0h640v640h-256v512H512v256h256v640H128v-640h256V640H128V0h640v640H512v384h1024V640h-256zM256 512h384V128H256zm384 1408v-384H256v384zM1792 512V128h-384v384z"
              ></path></svg
            >数据源管理</el-menu-item
          >
          <el-menu-item index="/main/service-pkg-management"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 14 14"
            >
              <g fill="none" stroke="#cccccc" stroke-linecap="round">
                <path
                  stroke-linejoin="round"
                  d="M4.098 3.65a1.15 1.15 0 1 0 2.3 0a1.15 1.15 0 0 0-2.3 0"
                ></path>
                <path
                  stroke-linejoin="round"
                  d="M3.5 5.94a2.22 2.22 0 0 1 .746-.834c.306-.2.652-.304 1.003-.304c.351 0 .697.104 1.003.304c.307.199.563.486.746.834"
                ></path>
                <path
                  stroke-linejoin="round"
                  d="M12.5 12.5a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1H9L12.5 4z"
                ></path>
                <path d="M3.5 8.5h7m-7 2.5h4"></path>
              </g></svg
            >业务包管理</el-menu-item
          >
          <el-menu-item index="/main/configure-task"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 256 256"
            >
              <path
                fill="#cccccc"
                d="M71.68 97.22L34.74 128l36.94 30.78a12 12 0 1 1-15.36 18.44l-48-40a12 12 0 0 1 0-18.44l48-40a12 12 0 0 1 15.36 18.44m176 21.56l-48-40a12 12 0 1 0-15.36 18.44L221.26 128l-36.94 30.78a12 12 0 1 0 15.36 18.44l48-40a12 12 0 0 0 0-18.44M164.1 28.72a12 12 0 0 0-15.38 7.18l-64 176a12 12 0 0 0 7.18 15.37a11.8 11.8 0 0 0 4.1.73a12 12 0 0 0 11.28-7.9l64-176a12 12 0 0 0-7.18-15.38"
              ></path></svg
            >配置转换任务</el-menu-item
          >
        </el-sub-menu>
        <el-sub-menu index="/reproduction/speed-prediction" class="sub-menu">
          <template #title>
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 1024 1024"
                style="transform: translateY(-20px)"
              >
                <path
                  fill="#cccccc"
                  d="m768 576l192-64v320l-192-64v96a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V480a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32zM192 768v64h384v-64zm192-480a160 160 0 0 1 320 0a160 160 0 0 1-320 0m64 0a96 96 0 1 0 192.064-.064A96 96 0 0 0 448 288m-320 32a128 128 0 1 1 256.064.064A128 128 0 0 1 128 320m64 0a64 64 0 1 0 128 0a64 64 0 0 0-128 0"
                ></path></svg
              >跨时空维度异常数据探测</span
            >
          </template>
          <el-menu-item index="/reproduction/speed-prediction"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 16 16"
            >
              <path
                fill="#cccccc"
                d="m15 6.1l-1.4-2.9c-.4-.7-1.1-1.2-1.9-1.2H4.3c-.8 0-1.5.5-1.9 1.2L1 6.1c-.6.1-1 .6-1 1.1v3.5c0 .6.4 1.1 1 1.2v2c0 .6.5 1.1 1.1 1.1H3c.5 0 1-.5 1-1.1V12h8v1.9c0 .6.5 1.1 1.1 1.1h.9c.6 0 1.1-.5 1.1-1.1v-2c.6-.1 1-.6 1-1.2V7.2c-.1-.5-.5-1-1.1-1.1M4 8.4c0 .3-.3.6-.6.6H1.6c-.3 0-.6-.3-.6-.6v-.8c0-.3.3-.6.6-.6h1.8c.3 0 .6.3.6.6zm6 2.6H6v-1h4zM2.1 6l1.2-2.4c.2-.4.6-.6 1-.6h7.4c.4 0 .8.2 1 .6L13.9 6zM15 8.4c0 .3-.3.6-.6.6h-1.8c-.3 0-.6-.3-.6-.6v-.8c0-.3.3-.6.6-.6h1.8c.3 0 .6.3.6.6z"
              ></path></svg
            >道路通行速度预测</el-menu-item
          >
          <el-menu-item index="/reproduction/ida-result"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 14 14"
            >
              <path
                fill="none"
                stroke="#cccccc"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13 2H1a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5v-8A.5.5 0 0 0 13 2m-7 9l-1 2.5M8 11l1 2.5m-5 0h6"
              ></path></svg
            >交通区域分析和可视化</el-menu-item
          >
          <el-menu-item index="/reproduction/car-quality"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
            >
              <path
                fill="#cccccc"
                d="M15.5 15.692h3.192V12.5h-.884v2.308H15.5zM5.308 9.5h.884V7.192H8.5v-.884H5.308zM9 20v-2H3V4h18v14h-6v2z"
              ></path></svg
            >浮动车异常数据监控</el-menu-item
          >
          <el-menu-item index="/reproduction/bayonet-quality"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
            >
              <path
                fill="#cccccc"
                d="m17.525 15l-2.175-1.25l3.5-2.6L21 12.4zM12.8 11.95l2.6-1.975L8.5 6L7 8.6zM4 20v-2h5v-5.95l-3-1.725q-.725-.425-.937-1.212T5.275 7.6l1.5-2.6q.425-.725 1.213-.937t1.512.212l9.525 5.5l-6.1 4.55l-1.925-1.1V18q0 .825-.588 1.413T9 20z"
              ></path></svg
            >卡口异常数据监控</el-menu-item
          >
          <el-menu-item index="/reproduction/taxi-monitoring"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 16 16"
            >
              <path
                fill="#cccccc"
                d="M6 1a1 1 0 0 0-1 1v1h-.181A2.5 2.5 0 0 0 2.52 4.515l-.792 1.848a.8.8 0 0 1-.38.404c-.5.25-.855.715-.965 1.262L.05 9.708a2.5 2.5 0 0 0-.049.49v.413c0 .814.39 1.543 1 1.997V14.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1.338c1.292.048 2.745.088 4 .088s2.708-.04 4-.088V14.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1.892c.61-.454 1-1.183 1-1.997v-.413q0-.248-.049-.49l-.335-1.68a1.8 1.8 0 0 0-.964-1.261a.8.8 0 0 1-.381-.404l-.792-1.848A2.5 2.5 0 0 0 11.181 3H11V2a1 1 0 0 0-1-1zM4.309 4h7.382a.5.5 0 0 1 .447.276l.956 1.913a.51.51 0 0 1-.497.731c-.91-.073-3.35-.17-4.597-.17s-3.688.097-4.597.17a.51.51 0 0 1-.497-.731l.956-1.913A.5.5 0 0 1 4.309 4M4 10a1 1 0 1 1-2 0a1 1 0 0 1 2 0m10 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-9 0a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1"
              ></path></svg
            >出租车异常监控</el-menu-item
          >
          <el-menu-item index="/reproduction/road-congestion"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 512 512"
            >
              <path
                fill="#cccccc"
                d="M112 152h288v32H112zm0 88h288v32H112zm0 88h152v32H112z"
              ></path>
              <path
                fill="#cccccc"
                d="M480 48H32v416h448Zm-32 384H64V80h384Z"
              ></path></svg
            >道路拥堵监控</el-menu-item
          >
          <el-menu-item index="/reproduction/road-speed"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#cccccc"
                stroke-linecap="round"
                d="m8.574 20.352l3.381-6.763a.05.05 0 0 1 .09 0l3.381 6.763c.022.044-.026.09-.07.066l-3.331-1.904a.05.05 0 0 0-.05 0l-3.332 1.904c-.043.025-.091-.021-.07-.066ZM20.5 18.5l-4-15m-13 15l4-15m4.5 7v-2m0-3v-2"
              ></path></svg
            >道路实时同行速度监控</el-menu-item
          >
        </el-sub-menu>
        <el-sub-menu index="/SystemManagement" class="sub-menu">
          <template #title>
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                style="transform: translateY(-20px)"
              >
                <path
                  fill="#cccccc"
                  d="M19 8.25h-7a.75.75 0 0 1 0-1.5h7a.75.75 0 0 1 0 1.5m-9 0H5a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 0 1.5"
                ></path>
                <path
                  fill="#cccccc"
                  d="M10 9.75A.76.76 0 0 1 9.25 9V6a.75.75 0 0 1 1.5 0v3a.76.76 0 0 1-.75.75m9 7.5h-7a.75.75 0 0 1 0-1.5h7a.75.75 0 0 1 0 1.5m-9 0H5a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 0 1.5"
                ></path>
                <path
                  fill="#cccccc"
                  d="M10 18.75a.76.76 0 0 1-.75-.75v-3a.75.75 0 0 1 1.5 0v3a.76.76 0 0 1-.75.75m9-6h-3a.75.75 0 0 1 0-1.5h3a.75.75 0 0 1 0 1.5m-5 0H5a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 0 1.5"
                ></path>
                <path
                  fill="#cccccc"
                  d="M14 14.25a.76.76 0 0 1-.75-.75v-3a.75.75 0 0 1 1.5 0v3a.76.76 0 0 1-.75.75"
                ></path></svg
              >系统管理</span
            >
          </template>
          <el-menu-item index="6-1">标签生成</el-menu-item>
          <el-menu-item index="6-2">用户画像与产品推荐</el-menu-item>
          <el-menu-item index="6-3">产品画像</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.aside-container {
  flex-direction: column;
  justify-content: baseline;
  .aside-title {
    min-height: 60px;
    background-color: #30729e;
    color: #fff;
    z-index: 222;
    top: 0;
  }
  .aside-content {
    background-color: #292d2e;
    border-right: 1px solid #292d2e;
    .aside-desc {
      color: #ccc;
      padding-top: 5px;
      padding-left: 20px;
      font-size: 13px;
      background-color: #27292b;
    }
    :deep(.el-menu) {
      border-right: none;
    }
    .el-menu-vertical-demo {
      transform: translateX(1px);
      .sub-menu {
        width: 100%;
        vertical-align: middle;
        svg {
          margin-right: 8px;
        }
        :deep(.el-sub-menu__title) {
          font-size: 12px;
        }
        :deep(.el-menu-item) {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
