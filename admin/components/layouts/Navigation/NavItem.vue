<template>
  <nuxt-link class="flex items-center mt-2 py-2 px-6 text-gray-100 no-underline hover:text-gray-100
  hover:bg-gray-700" :class="{'bg-gray-700  border-l-4':active}" :to="to">
    <slot />
  </nuxt-link>
</template>

<script>
export default {
  name: "NavItem",
  props:{
    to:{
      type:String,
      default: ''
    }
  },
  computed:{
    active: ({ $route:{ path },to })=> path === to,
  }
}
</script>

