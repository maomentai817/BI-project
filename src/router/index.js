import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LayoutContainer',
      component: () => import('@/views/LayoutContainer/LayoutContainer.vue'),
      redirect: '/main/data-source',
      children: [
        {
          path: '/main/data-source',
          name: 'DataSource',
          component: () => import('@/views/MainPage/DataSource.vue')
        },
        {
          path: '/main/olap-cubes',
          name: 'OlapCubes',
          component: () => import('@/views/MainPage/OlapCubes.vue')
        },
        {
          path: '/main/olap-analysis',
          name: 'OlapAnalysis',
          component: () => import('@/views/MainPage/OlapAnalysis.vue')
        },
        {
          path: '/main/olap-story-board',
          name: 'OlapStoryBoard',
          component: () => import('@/views/MainPage/OlapStoryBoard.vue')
        },
        {
          path: '/main/service-pkg-management',
          name: 'ServicePkgManagement',
          component: () => import('@/views/MainPage/ServicePkgManagement.vue')
        },
        {
          path: '/main/configure-task',
          name: 'ConfigureTask',
          component: () => import('@/views/MainPage/ConfigureTask.vue')
        },
        {
          path: '/reproduction/tab-generator',
          name: 'TabGenerator',
          component: () =>
            import(
              '@/views/ReproductionPage/TagGenPersonalRec/TagGenerator.vue'
            )
        },
        {
          path: 'reproduction/user-portrait',
          name: 'UserPortrait',
          component: () =>
            import(
              '@/views/ReproductionPage/TagGenPersonalRec/UserPortrait.vue'
            )
        },
        {
          path: 'reproduction/product-portrait',
          name: 'ProductPortrait',
          component: () =>
            import(
              '@/views/ReproductionPage/TagGenPersonalRec/ProductPortrait.vue'
            )
        },
        {
          path: 'reproduction/interest-mining',
          name: 'InterestMining',
          component: () =>
            import(
              '@/views/ReproductionPage/TextDimMetricExtract/InterestMining.vue'
            )
        },
        {
          path: 'reproduction/duplicate-checking',
          name: 'DuplicateChecking',
          component: () =>
            import(
              '@/views/ReproductionPage/TextDimMetricExtract/DuplicateChecking.vue'
            )
        },
        {
          path: 'reproduction/log-mining',
          name: 'LogMining',
          component: () =>
            import(
              '@/views/ReproductionPage/BusinessProcessManagement/LogMining.vue'
            )
        }
      ]
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: () => import('@/views/LoginPage/LoginPage.vue')
    }
  ],
  // 滚动行为
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
