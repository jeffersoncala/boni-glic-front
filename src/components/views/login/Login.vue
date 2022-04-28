<template>
  <form id="login" class="form-signin">
    <img class="img_login mb-4" src="./../../../assets/img/logo-login.png" />
    <h1>Controle de Glicose Boni</h1>
    <p>Sistema para armazenamento de informações de glicemia para cães com diabetes.</p>
    <div class="form-label-group">
        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="" v-model="user">
        <label for="inputEmail">Usuário</label>
    </div>
    <div class="form-label-group">
        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="" v-model="password">
        <label for="inputPassword">Senha</label>
    </div>
    <div class="checkbox mb-3">
        <label>
            <input type="checkbox" value="remember-me"> Lembrar senha
        </label>
    </div>
    <button class="btn btn-lg btn-primary btn-block" type="submit" @click="this.login">Confirmar</button>
    <p class="mt-5 mb-3 text-muted text-center">© 2022</p>
  </form>
</template>

<script>
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.VUE_APP_SUPABASE_URL, process.env.VUE_APP_SUPABASE_KEY)

export default {
  name: 'LoginPage',
  data: function () {
    return {
        user: '',
        password: ''
    }
  },
  methods:{
    async login(){
        let { data: reponseLogin } = await supabase
        .from('boni-glic')
        .select("*")
        .eq('user', `${this.user}`)
        .eq('password', `${this.password}`)

        console.info(reponseLogin)

        if(reponseLogin.length > 0){
            alert('Deu bom')

        } else {
            alert('Deu ruim')
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

#login{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 420px;
    padding: 15px;
    margin: 0 auto;

    .img_login{
        width: 110px;
        height: 110px;
        background-color: #c3c3c3;
        padding: 3px;
        border-radius: 20px;
    }

    h1{
    font-family: 'Open Sans';
    font-weight: 600;
    font-size: 1.25rem;
    margin-bottom: 30px;
    }

    p{
        color: #999;
        font-size: 1rem;
    }

    .form-label-group{
        position: relative;
        margin-bottom: 1rem;
        width: 100%;
        
        .form-control{
            display: block;
            width: 100%;
            padding: .375rem .75rem;
            font-size: 1rem;
            line-height: 1.5;
            color: #495057;
            background-color: #fff;
            background-clip: padding-box;
            border: 1px solid #ced4da;
            border-radius: .25rem;
            transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        }

        > input {
            padding: .75rem .75rem !important;
        }
        label {
            padding: .75rem .75rem !important;
        }

        > label {
            position: absolute;
            top: 0;
            left: 0;
            display: block;
            width: 100%;
            margin-bottom: 0; /* Override default `<label>` margin */
            line-height: 1.5;
            color: #495057;
            border: 1px solid transparent;
            border-radius: .25rem;
            transition: all .1s ease-in-out;
        }

        input::-webkit-input-placeholder {
            color: transparent !important;
        }

        input:-ms-input-placeholder {
            color: transparent !important;
        }

        input::-ms-input-placeholder {
            color: transparent !important;
        }

        input::placeholder {
            color: transparent !important;
        }

        input:not(:placeholder-shown) {
            padding-top: calc(.75rem + .75rem * (2 / 3)) !important;
            padding-bottom: calc(.75rem / 3) !important;
        }

        input:not(:placeholder-shown) ~ label {
            padding-top: calc(.75rem / 3) !important;
            padding-bottom: calc(.75rem / 3) !important;
            font-size: 12px !important;
            color: #777 !important;
        }
    }

    .checkbox{
        width: 100%;
    }

    .btn{
        width: 100%;
    }
}
</style>
