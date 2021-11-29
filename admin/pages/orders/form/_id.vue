<template>
  <Page>
    <div class="row">
      <div class="col-md-9">
        <card>
        <crud-form v-if="model" :form-schema="schema" :form-model="model" title="форма продукта" @on-submit="onFormSubmit"/>
<!--          <p class="text-danger">-->
<!--            {{ error }}-->
<!--          </p>-->
        </card>
      </div>
      <div class="col-md-3"></div>
    </div>
  </Page>
</template>

<script>
import {schema} from './fields'
import {mapActions,mapGetters} from 'vuex'

export default {
  name: 'ProductForm',
  middleware:'auth',
  components:{
    CrudForm:()=>import('@/components/CrudForm'),
    Card:() => import('@/components/Card'),
    Page:()=>import('@/components/Page')
  },
  computed:{
    ...mapGetters({product:'products/item',error:'products/itemError'}),
    isUpdated:({
                 $route: {
                   params: {id},
                 },
               }) => id !== undefined,
  },
  data:()=>({
    model: null,
    schema
  }),
  methods:{
    ...mapActions({
      createProduct: 'products/create',
      fetchProduct: 'products/fetchOne',
      updateProduct: 'products/update',
    }),
    setModel(){
      this.model = {
        title:'',
        description:'',
        price:0,
        amount:0,
        imageUrl:'',
      }
    },
    async onProductUpdate(){
        await this.updateProduct({id:this.$route.params.id,payload: this.model})
        this.$router.back()
    },
    async onProductCreate(){
        await this.createProduct(this.model)
        this.$router.back()
    },
    async onFormSubmit(){
        if(this.isUpdated){
            this.onProductUpdate()
          return
        }
        this.onProductCreate()
    }
  },
  async mounted() {
    if(this.isUpdated){
      //мы получим объект с апи
      console.log('inside')
      await this.fetchProduct(this.$route.params.id)
      this.model = {...this.product}
      //this.model = {}
      console.log(2)
      return
    }
    console.log(1+'set')
    this.setModel();
  }
}
</script>

<style scoped>

</style>
