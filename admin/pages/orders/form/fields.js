export const schema = {
  fields:[
    {
      type:  'input',
      label: 'Название игры',
      model: 'title',
      placeholder: 'Введите название игры',
      inputType:'text',
      styleClasses: 'col-md-6'
    },
    {
      type:  'input',
      label: 'Стоимость игры',
      model: 'price',
      placeholder: 'Введите стоимость игры',
      inputType:'text',
      styleClasses: 'col-md-6'
    },
    {
      type:  'textArea',
      label: 'Описание игры',
      model: 'description',
      placeholder: 'Опишите игры',
      hint: 'Максимально 500 символов',
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
    },
    {
      type:  'input',
      label: 'Изображение',
      model: 'imageUrl',
      placeholder: 'Введите ссылку на картинку',
      inputType:'text',
      styleClasses: 'col-md-6'
    },
  ]
}
