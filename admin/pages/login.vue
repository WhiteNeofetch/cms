<template>
  <div class="col-md-6 col-sm-12">
    <div class="login-form">
      <FormValidator ref="authForm">
      <form @submit.prevent="onLogin">

        <FieldValidator name="email" rules="email|required" slim mode="lazy" v-slot="{errors}">
        <div class="form-group">
          <label>Электронная почта</label>
          <input type="text"  class="form-control" :class="{'is-invalid':errors.length > 0}" placeholder="Электронная почта" name="email" v-model="loginForm.email">
          <div v-for ="(error,key) in errors" :key="`email-${key}`" v-show="errors" class="invalid-feedback">{{error}}</div>
        </div>
        </FieldValidator>
        <FieldValidator  name="password" rules="required" slim mode="lazy" v-slot="{errors}">
        <div class="form-group">
          <label>Пароль</label>
          <input type="password" class="form-control" placeholder="Пароль" :class="{'is-invalid':errors.length > 0}" name="password" v-model="loginForm.password">
          
        </div>

        </FieldValidator>
        <button type="submit" class="btn btn-success">Войти</button>
        <div class="login-form__network-error" v-if="loginFormError">
          {{loginFormError}}
        </div>

      </form>
      </FormValidator>
    </div>
  </div>
</template>

<script>
import {ValidationObserver,ValidationProvider} from 'vee-validate'
export default {
  name:'LoginPage',
  layout:'unauthorized',
  components:{
    FormValidator:ValidationObserver,
    FieldValidator:ValidationProvider
  },
  data:()=>({
    loginForm:{
      email:'',
      password:''
    },
    loginFormError: null,
  }),
  methods:{
    async onLogin(){
      const isCorrect = this.$refs.authForm.validate()
      if (isCorrect){
        try {
          console.log('true')
          let response = await this.$auth.loginWith('local', { data: this.loginForm })
          console.log(response)
          this.$router.push('/products')
        } catch (err) {
          console.log(err.response)
          this.loginFormError = err.response.data.message
        }
      }
    }
  }
}
</script>

<style scoped>
.login-form__network-error{
  border-radius: 6px;
  padding: 10px;
  color:white;
  background: #ff000040;
  border: 1px solid #ff000078;
  margin-top: 10px;
}

</style>
