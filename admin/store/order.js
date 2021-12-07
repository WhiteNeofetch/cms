import crudStore from "./generic";

export default {
  ...crudStore({
    url:'orders',
    name:'Orders',
  }),
}
