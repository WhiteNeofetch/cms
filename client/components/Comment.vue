<template>
  <div class="card">
{{title}} - {{description}}

  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    title: {
      type: String,
      default: "",
    },

    description: {
      type: String,
      default: "",
    },
  },

};
</script>


<style>
.card {
  width: 340px;
  height: 200px;
  padding: 20px;
  margin: 10px;
  border: 1px solid black;
  border-radius: 10px;


}
  .card img {
    background-size: cover;
    width: 50%;
  }
</style>