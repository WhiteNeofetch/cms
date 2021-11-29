<template>
  <div class="card">
    <div class="card_header">{{ title }} - {{ price }}$</div>

    <img :src="imageUrl" alt="" />
    <div class="card_footer">
      <nuxt-link :to="`/products/${_id}`">КЛИКНУТЬ</nuxt-link>
    </div>
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
    price: {
      type: Number,
      default: 0,
    },
    imageUrl: {
      type: String,
      default: "",
    },
    inCart: {
      type: Boolean,
      default: false,
    },
    _id:{
       type: String,
      default: "",
    }
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