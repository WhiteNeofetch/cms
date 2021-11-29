export const schema = {
  fields:[
    {
      type:  'input',
      label: 'Название игры',
      model: 'title',
      placeholder: 'Введите название новости',
      inputType:'text',
      styleClasses: 'col-md-6'
    },
    {
      type: 'vueMultiSelect',
      model: 'category',
      label: 'Категория',
      styleClasses: 'col-md-6',
      placeholder:'Добавить категорию',
      selectOptions:{
        multiple: false,
        key:'title',
        id: '_id',
        trackBy: 'title',
        label:'title',
        searchable:true,
        hideSelected:true,
      },
      values:[],
      required: true
    },
    {
      type: "image",
      label: "Изображение",
      model: "imageUrl",
      required: false,
      placeholder: 'Добавьте картинку',
    },
    {
      type:  'input',
      label: 'Стоимость игры',
      model: 'price',
      placeholder: 'Введите стоимость новости',
      inputType:'text',
      styleClasses: 'col-md-6'
    },
    {
      type:  'textArea',
      label: 'Описание новости',
      model: 'description',
      placeholder: 'Опишите новость',
      hint: 'Максимально 500 символов',
      rows:10,
      styleClasses: 'col-md-12'
    },
    {
      type:  'textArea',
      label: 'Описание игры',
      model: 'description2',
      placeholder: 'Основная тема',
      hint: 'Основная тема',
      rows:10,
      styleClasses: 'col-md-12'
    },
    {
      type:  'input',
      label: 'Количество',
      model: 'amount',
      placeholder: 'Введите кол-во доступных продуктов',
      inputType:'text',
      styleClasses: 'col-md-6'
    }
  ]
}

export const defaultForm ={
  title: '',
  description: '',
  price: 0,
  amount:0,
  category: '',
  imageUrl: '',
  image: '',
  time: '2021 years',
  author: 'Admin user'
}
