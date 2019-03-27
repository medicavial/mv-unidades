<template>
  <!-- <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div> -->

  <div id="app">
    <header>
        <div class="navbar-fixed">
            <nav class="black">
                <div class="nav-wrapper container">
                    <a class="brand-logo" onclick="irSeccion('home')">
                        <!-- <img src="./assets/img/mv-lineal-blanco.png" style="height: 40px; margin-top: 6%"> -->
                        <img src="@/assets/img/mv-lineal-blanco.png" style="height: 40px; margin-top: 6%"/>
                    </a>
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
            <li><a class="waves-effect">UNIDADES MÉDICAVIAL</a></li>
            <div class="divider"></div>
            <li>
              <!-- <a class="waves-effect"> -->
                <router-link to="/" class="waves-effect" v-on:click.native="cerrarMenu">
                  <i class="mdi mdi-home mdi-24px"></i>Inicio
                </router-link>
                <!-- <i class="mdi mdi-home mdi-24px"></i>Inicio -->
              <!-- </a> -->
            </li>
            <li><a class="waves-effect" onclick="irSeccion('unidades')"><i class="mdi mdi-hospital-building mdi-24px"></i>Unidades</a></li>
            <li><a class="waves-effect" onclick="irSeccion('clientes')"><i class="mdi mdi-bank mdi-24px"></i>Clientes</a></li>
            <li><a class="waves-effect" onclick="refrescarPagina()"><i class="mdi mdi-reload mdi-24px"></i>Actualizar Datos</a></li>
            <li><a class="waves-effect" onclick="irSeccion('salir')"><i class="mdi mdi-logout mdi-24px"></i>Salir</a></li>
        </ul>
    </header>

    <router-view/>
  </div>
</template>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>

<script>
  document.addEventListener('DOMContentLoaded', function () {
      let elems = document.querySelectorAll('.sidenav');
      let instances = M.Sidenav.init(elems, {});
  });
  export default {
    methods: {
      cerrarMenu(){
        console.log('entra');
      }
    },
  }
</script>