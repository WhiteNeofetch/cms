<template>
  <div>
    <div class="mobile">
      <button class="btn btn-info" @click="openMenu">Меню</button>
    </div>

    <div
      class="fixed z-10 inset-y-0 left-0 w-64 bg-gray-900 overflow-y-auto lg:static lf:inset-0"
    >
      <div class="flex items-center justify-center mt-8">
        <div class="flex items-center">
          <span class="text-2xl mx-2 font-bold text-white"> Dashboard </span>
        </div>
      </div>
      <nav class="mt-10">
        <nav-item v-for="(item, key) in menu" :to="item.to" :key="key">
          {{ item.name }}
        </nav-item>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    menu: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    NavItem: () => import('./NavItem'),
  },
  methods: {
    openMenu() {
      document.querySelector('.w-64').classList.toggle('mobile_menu')
    },
  },
}
</script>

<style scoped>
.mobile {
  display: none;
}
.w-64 {
  height: 100%;
}
@media screen and (min-width: 0px) and (max-width: 1000px) {
  .w-64 {
    width: 0px;
    transition: width 0.5s;
  }
  .btn {
    position: absolute;
    z-index: 20;
    left: 50px;
    top: 30px;
  }
  .mx-2 {
    margin-top: 100px;
  }
  .mobile {
    display: block;
  }
  .mobile_menu {
    width: 200px;
  }
}
</style>
