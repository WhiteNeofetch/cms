import {setClient} from '@/services/request.service'

export default ctx=>{
  setClient(ctx.$axios)
}
