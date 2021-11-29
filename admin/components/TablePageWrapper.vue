<template>
  <div class="flex flex-col mt-8">
    <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
    <div class="bg-white align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
      <slot/>
    </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'TablePageWrapper',
}
</script>
