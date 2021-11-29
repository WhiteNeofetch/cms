import GenericService from "@/services/generic.service";

const crudStore = ({name,url,keyName}) =>{
  const genericService = new GenericService({
    name,
    url
  })


  return{
    state:()=>({
      item:{},
      items:[],
      itemError:null
    }),
    actions:{
      async fetchAll({commit}){
        try{
          const items = await genericService.fetchAll()
          commit('fetchItemsSuccess',items)
        } catch (err){
          commit('fetchItemsFail',{
            errType:`${name} fetchAll failed`,
            err
          })
        }
      },
      async fetchOne({commit},id){
        try{
          const item = await genericService.fetchOne(id)

          commit('fetchItemSuccess',item)
        } catch (err){
          commit('fetchItemFail',{
            errType:`${name} fetchOne failed`,
            err
          })
        }
      },
      async create({commit}, payload){
        try{
      
          
          const item = await genericService.create(payload)
          commit('createItemSuccess',item)
        } catch (err){
          commit('createItemFail',{
            errType:`${name} create failed`,
            err
          })
        }
      },
      async update({commit},{payload,id,image}){
        try{
         
          const fd = new FormData()
          fd.append('image',image)

          const item = await genericService.update(id,payload,image)
          console.log(item + 1)
          
          

          commit('updateItemSuccess',item)
        } catch (err){
          commit('updateItemFail',{
            errType:`${name} update failed`,
            err
          })
        }
      },
      async delete({commit},id){
        try{
          const item = await genericService.delete(id)
          commit('deleteItemSuccess',item)
        } catch (err){
          commit('deleteItemFail',{
            errType:`${name} delete failed`,
            err
          })
        }
      },
    },
    mutations:{
      updateItemSuccess(state,item){
        state.item = item
      },
      updateItemFail(state,err){
        state.itemError = err
      },

      createItemSuccess(state,item){
        state.item = item
      },
      createItemFail(state,err){
        state.itemError = err
      },

      fetchItemSuccess(state,item){
        state.item = item
      },
      fetchItemFail(state,err){
        state.itemError = err
      },

      fetchItemsSuccess(state,items){
        state.items = items
      },
      fetchItemsFail(state,err){
        state.itemError = err
      },

      deleteItemSuccess(){

      },
      deleteItemFail(state,err){
        state.itemError = err
      }
    },
    getters:{
      item:(state)=>state.item,
      items:(state)=>state.items,
      itemsError:(state)=>state.itemsError
    }
  }
}

export default crudStore
