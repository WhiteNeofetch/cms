import {
  mapActions,
  mapGetters
} from 'vuex'
export const crudMixin = ({
  config
}) => ({
  components: {
    pageTable: () => import('@/components/table/pageTable'),
    TablePageWrapper: () => import('@/components/TablePageWrapper'),
  },
  computed: {
    ...mapGetters({
      items: `${config.crudName}/items`,
    })
  },
  methods: {
    ...mapActions({
      fetchItems: `${config.crudName}/fetchAll`,
      deleteItem: `${config.crudName}/delete`
    }),
    async handleDelete({
      id
    }) {
      await this.deleteItem(id);
      this.fetchItems();
    }
  },

})
