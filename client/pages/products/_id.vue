<template>
  <div>
    {{ this.item.title }}
    <img :src="this.item.image" alt="" />
    {{ this.item.description }}
    {{ this.item.price }}
    {{ this.item.amount }}
    {{ this.item.categories }}
    <input type="text" v-model="model.description"/>
    <input type="text"  v-model="model.title"/>
    <button @click="Createcomments">добавить коммент</button>
    <Comment
      v-for="(comment, key) in comments"
      :key="key"
      :title="comment.title"
      :description="comment.description"
    />
  </div>
</template>


<script>
import { mapGetters, mapActions } from "vuex";
import MevnHeader from "../../components/layouts/Header.vue";
import Comment from "../../components/Comment.vue";
export default {
  name: "App",
  components: {
    MevnHeader,
    Comment,
  },
  data: () => ({
    model: {
      title: "155",
      description: "155",
    },
  }),
  async mounted() {
    await this.fetchItem(this.$route.params.id);
    await this.fetchComments();
    console.log(this.item);
    console.log(this.comments);
  },
  methods: {
    ...mapActions({
      fetchItem: `products/fetchOne`,
      fetchComments: `comments/fetchAll`,
      createComment: `comments/create`,
      async Createcomments() {
        await this.createComment(this.model);
            await this.fetchComments();
          console.log(this.comments);
      },
    }),
  },
  computed: {
    ...mapGetters({
      item: `products/item`,
      comments: `comments/items`,
    }),
  },
};
</script>