import crudStore from "./generic";

export default {
  ...crudStore({
    url:'comments',
    name:'Comments',
  }),
}
