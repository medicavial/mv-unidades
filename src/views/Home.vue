<template>
  <div class="home">    
    <!-- <img alt="Vue logo" src="@/assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <div class="container">
      <div class="row">
        <div class="col s12">
          <div class="card white">
            <div class="card-content">
              <span class="card-title"><i class="mdi mdi-account"></i> {{ usuario }}</span>
              <p>Bienvenido</p>
              <p class="cyan-text text-darken-2 center flow-text"><i class="mdi mdi-coffee"></i> & <i class="mdi mdi-code-tags"></i></p>
              <p class="cyan-text text-darken-2 center">Esta sección está en desarrollo</p>
            </div>
            <!-- <div class="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data() {
    return {
      usuario: 'Usuario de pruebas'
    }
  },
}
</script>
