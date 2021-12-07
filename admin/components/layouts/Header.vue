<template>
  <header class="flex justify-end items-center py-4 px-6 bg-white border-b-4 border-gray-700">
       <button class="btn btn-danger" @click="$emit('onLogout')">Выйти</button>
  </header>
</template>
