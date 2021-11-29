<template>
  <Page :title="config.name">
    <nuxt-link class="btn btn-success" :to="`${config.crudName}/form`">
      <icon icon="jsmord-user-add"/>
      Добавить {{config.singleName}}
    </nuxt-link>
    <TablePageWrapper>

      <pageTable :columns="columns" :actions="actions" :data="items" @onEdit="handleEdit"
                 @onDelete="handleDelete"/>
    </TablePageWrapper>
  </Page>
</template>

<script>


//components


//setup
import {columns,actions,config} from "./setup";
import { crudMixin } from '@/mixins/crud.mixin'
export default {
  name:config.pageName,
  middleware:'auth',
  mixins:[crudMixin({config})],
  components:{
    
    Page:()=>import('@/components/Page'),
    Icon: () => import ('@/components/icon/Icon'),
    pageTable: () => import ('@/components/table/pageTable'),
    

  },
  data:()=>({
    columns,
    actions,
    config
  }),
  methods:{
    handleEdit({ id }){
      this.$router.push(`/${config.crudName}/form/${id}`)
      console.log('Изменяем', id)
    },
    async handleDelete({id}){
      await this.deleteItem(id);
      this.fetchItems();
    }
  },
  mounted() {
    this.fetchItems()
  },
}
</script>

<style lang="scss">

</style>
