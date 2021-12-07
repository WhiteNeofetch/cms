export const config = {
  name: 'Категории',
  crudName: 'categories',
  singleName: 'Категорию',
  pageName:'CaterogyPage',
  formName:'CategoryForm',
  formTitle: 'Форма Категории',
}

export const columns = [
  {key:'title',name:'Название продукта'},
  {key:'description',name:'Описание'},
]
export const actions = [
  {className: 'btn btn-warning text-white',label:'Изменить',emit:'onEdit',actionKey:'_id'},
  {className: 'btn btn-danger text-white',label:'x',emit:'onDelete',actionKey:'_id'},
]
