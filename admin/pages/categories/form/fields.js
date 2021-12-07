export const schema = {
  fields:[
    {
      type:  'input',
      label: 'Название игры',
      model: 'title',
      placeholder: 'Введите название Категории',
      inputType:'text',
      styleClasses: 'col-md-6'
    },
    {
      type: 'vueMultiSelect',
      model: 'products',
      label: 'Продукты',
      styleClasses: 'col-md-6',
      placeholder:'Добавить продукты',
      selectOptions:{
        multiple: true,
        key:'title',
        id: '_id',
        trackBy: 'title',
        label:'title',
        searchable:true,
        hideSelected:true
      },
      values:[],
    },
    {
      type:  'textArea',
      label: 'Описание категории',
      model: 'description',
      placeholder: 'Введите описание категории',
      hint: 'Максимально 500 символов',
      rows:10,
      styleClasses: 'col-md-12'
    },

  ]
}

export const defaultForm = {
  title:'',
  description:'',
  products:[],
}
