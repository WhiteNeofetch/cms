<template>
  <div class="flex h-screen bg-gray-200">
    <Nav :menu="menu" />
    <div class="flex-1 flex flex-col overflow-hidden">
      <Header @onLogout="handleLogout"/>
      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
        <Nuxt />
      </main>
     <!-- <Footer /> -->
    </div>
      <icon-registry/>
  </div>
</template>

<script>
import menu from "./setup";

export default {
  name:'DefaultLayout',
  data: () => ({
    menu
  }),
  components:{
    Nav: () => import('@/components/layouts/Navigation/Nav'),
    Footer: () => import('@/components/layouts/Footer'),
    Header: () => import('@/components/layouts/Header'),
    IconRegistry: () => import('@/components/icon/icon-registry'),
  },
  methods:{
    async handleLogout(){
      localStorage.clear();
     await this.$auth.logout()

    }
  }
}
</script>

