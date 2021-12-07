<template>
  <Page>
    <div class="row">
      <div class="col-md-9">
        <card>
          <crud-form
            v-if="model"
            :form-schema="schema"
            :form-model="model"
            :title="config.formTitle"
            @on-submit="onFormSubmit"
          />
          <!-- <p class="text-danger">
                      {{ error }}
                    </p>  -->
        </card>
      </div>
      <div class="col-md-3"></div>
    </div>
  </Page>
</template>

<script>
//State
import { schema, defaultForm } from './fields'

//Setups
import { mapActions, mapGetters } from 'vuex'
import { config } from '../setup'

//Mixins
import { relationMixin } from '@/mixins/relation.mixin'
import FormPageWrapper from '../../../components/FormPageWrapper.vue'

export default {
  name: config.formName,
  middleware: 'auth',
  mixins: [relationMixin],
  components: {
    CrudForm: () => import('@/components/CrudForm'),
    Card: () => import('@/components/Card'),
    Page: () => import('@/components/Page'),
    FormPageWrapper: () => import('@/components/FormPageWrapper'),
  },
  computed: {
    ...mapGetters({
      item: `${config.crudName}/item`,
      error: `${config.crudName}/itemsError`,
      categories: 'categories/items',
    }),
    isUpdated: ({
      $route: {
        params: { id },
      },
    }) => id !== undefined,
  },
  data: () => ({
    model: null,
    schema,
    config,
  }),
  methods: {
    ...mapActions({
      //generic
      createItem: `${config.crudName}/create`,
      fetchItem: `${config.crudName}/fetchOne`,
      updateItem: `${config.crudName}/update`,

      //bl
      fetchCategories: 'categories/fetchAll',
    }),
    setModel() {
      this.model = {
        ...defaultForm,
      }
    },
    async onItemUpdate() {
      const updatedModel = {
        ...this.model,
        category: this.model.category,
      }
      await this.updateItem({
        id: this.$route.params.id,
        payload: updatedModel,
      })
      this.$router.back()
    },
    async onItemCreate() {
      await this.createItem(this.model)
      this.$router.back()
    },
    async onFormSubmit() {
      if (this.isUpdated) {
        this.onItemUpdate()
        return
      }
      this.onItemCreate()
    },
  },
  async mounted() {
    await this.fetchCategories()
    console.log(this.categories)
    this.setFields({ fieldKey: 'category', values: this.categories })
    if (this.isUpdated) {
      //мы получим объект с апи
      console.log('inside')
      await this.fetchItem(this.$route.params.id)
      this.model = { ...this.item }
      //this.model = {}
      console.log(2)
      return
    }
    console.log('set1')
    this.setModel()
  },
}
</script>

<style scoped>
</style>
