<template>
  <!-- LA APLICACION VA DENTRO DEL #APP -->
  <!-- <div id="app"> -->
  <div id="app">
    <header>
        <div class="navbar-fixed">
          <nav class="black">
            <div class="nav-wrapper container">
              <router-link to="/" class="brand-logo">
                <img src="@/assets/img/mv-lineal-blanco.png" style="height: 40px; margin-top: 6%"/>
              </router-link>

              <a data-target="mobile-menu" class="left sidenav-trigger"><i class="mdi mdi-menu"></i></a>
              
              <ul class="right hide-on-med-and-down">
                <li class="waves-effect waves-light opt-menu">
                  <router-link to="/unidades">Unidades</router-link>
                </li>
                <li class="waves-effect waves-light opt-menu">
                  <router-link to="/clientes">Clientes</router-link>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <ul class="sidenav" id="mobile-menu">
          <li><a>UNIDADES MÉDICAVIAL</a></li>
          <div class="divider"></div>
            <li>
              <router-link to="/" class="waves-effect sidenav-close">
                <i class="mdi mdi-home mdi-24px"></i>Inicio
              </router-link>
            </li>
            <li><router-link to="unidades" class="waves-effect sidenav-close"><i class="mdi mdi-hospital-building mdi-24px"></i>Unidades</router-link></li>
            <!-- <li><router-link to="" class="waves-effect sidenav-close"><i class="mdi mdi-bank mdi-24px"></i>Clientes</router-link></li>
            <li><router-link to="" class="waves-effect sidenav-close"><i class="mdi mdi-reload mdi-24px"></i>Actualizar Datos</router-link></li>
            <li><router-link to="" class="waves-effect sidenav-close"><i class="mdi mdi-logout mdi-24px"></i>Salir</router-link></li> -->
        </ul>
    </header>

    <main>
    <!-- ROUTER-VIEW CARGARÁ LAS DIFERENTES RUTAS -->
    <router-view/>
    </main>
  </div>
</template>

<style>
</style>

<script>
  export default {
    mounted() {
      M.AutoInit();
    },
    data() {
      return {
        
      }
    },
    methods: {}
  }
</script>