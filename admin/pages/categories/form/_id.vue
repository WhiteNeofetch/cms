<template>
  <Page>
    <div class="row">
      <div class="col-md-9">
        <card>
        <crud-form v-if="model" :form-schema="schema" :form-model="model" :title="config.formTitle" @on-submit="onFormSubmit"/>
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
//State
import {schema,defaultForm} from './fields'

//Setups
import {mapActions,mapGetters} from 'vuex'
import {config} from '../setup'

//Mixins
import {relationMixin} from "@/mixins/relation.mixin";

export default {
  name: config.formName,
  middleware:'auth',
  mixins:[relationMixin],
  components:{
    CrudForm:()=>import('@/components/CrudForm'),
    Card:() => import('@/components/Card'),
    Page:()=>import('@/components/Page')
  },
  computed:{
    ...mapGetters({
      item:`${config.crudName}/item`,
      error:`${config.crudName}/itemError`,
      products: 'products/items'
    }),
    isUpdated:({
                 $route: {
                   params: {id},
                 },
               }) => id !== undefined,
  },
  data:()=>({
    model: null,
    schema,
    config
  }),
  methods:{
    ...mapActions({
      //generic
      createItem: `${config.crudName}/create`,
      fetchItem: `${config.crudName}/fetchOne`,
      updateItem: `${config.crudName}/update`,

      //bl
      fetchProducts: 'products/fetchAll'
    }),
    setModel(){
      this.model = {
        ...defaultForm
      }
    },
    async onItemUpdate(){
      const updatedModel = {
        ...this.model,
        products:this.model.products.map(product=>product._id)
      }
        await this.updateItem({id:this.$route.params.id,payload: updatedModel})
        this.$router.back()
    },
    async onItemCreate(){
        await this.createItem(this.model)
        this.$router.back()
    },
    async onFormSubmit(){
        if(this.isUpdated){
            this.onItemUpdate()
          return
        }
        this.onItemCreate()
    }
  },
  async mounted() {
     await this.fetchProducts()
    this.setFields({fieldKey:'products',values:this.products})
    if(this.isUpdated){
      //мы получим объект с апи
      await this.fetchItem(this.$route.params.id)
      this.model = {...this.item}
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
