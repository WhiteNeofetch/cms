<template>
  <div class="home">
    <div class="product-list">
      <ProductCard
        v-for="(product, key) in products"
        :key="key"
        :title="product.title"
        :price="product.price"
        :imageUrl="product.imageUrl"
        :_id="product._id"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import ProductCard from "../components/ProductCard";

export default {
  name: "index",
  components: {
    ProductCard,
  },
  async mounted() {
    await this.fetchProducts();
    console.log(this.products)
    console.log(this.products[0])
    
  },
  computed: {
    ...mapGetters({
         products: "products/items",
      // cartItems: "cartItems",
    }),
    // cartItemsIds: ({ cartItems }) => cartItems.map(({ _id }) => _id),
  },
  methods: {
    ...mapActions({
       fetchProducts: "products/fetchAll",
    }),
    // ...mapMutations({
    //   addToCart: "addToCart",
    // }),
  },
};
</script>


<style>
.product-list {
  display: flex;
}
</style>