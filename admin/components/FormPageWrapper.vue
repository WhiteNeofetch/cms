<template>
  <div class="flex flex-col p-6">
    <div class="-my-2 py-2 overflow-x-auto sm:-mx-3 sm:px-3 lg:-mx-3 lg:px-3 p-6">
    <div class="bg-white align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
      <div class="flex items-center space-x-5">
        <div class="block font-semibold text-xl text-gray-700 mb-3"></div>
      </div>
      <slot/>
    </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'FormPageWrapper',
}
</script>
