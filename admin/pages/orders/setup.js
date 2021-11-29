export const config = {
  name: 'Заказы',
  crudName: 'orders',
  singleName: 'Заказ',
  pageName:'OrderPage'
}

export const columns = [
  {key:'title',name:'Название продукта'},
  {key:'amount',name:'Доступное кол-во'},
  {key:'price',name:'Цена'},
]
export const actions = [
  {className: 'btn btn-warning text-white',label:'Изменить',emit:'onEdit',actionKey:'_id'},
  {className: 'btn btn-danger text-white',label:'x',emit:'onDelete',actionKey:'_id'},
]
