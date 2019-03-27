<template>
    <div class="unidades">
        <div class="row">
            <div class="col s12">
            <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                    <span class="card-title"> <i class="mdi mdi-hospital-building"></i> Unidades ({{cantidad}})</span>
                    <p>A continuación se muestra el listado de unidades que trabajan con Médica Vial.</p>
                </div>
                <!-- <div class="card-action">
                <a href="#">This is a link</a>
                <a href="#">This is a link</a>
                </div> -->
            </div>
            </div>
        </div>

        <div class="row">
            <div class="col s12">
                <div class="card">
                    <div class="card-content">
                        <table class="striped highlight">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr v-for="item of dataUnidades"
                                    :key="item.index">
                                    <td>
                                        {{ item.nombre }}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Busquedas from '@/services/busquedas'

export default {
    beforeMount(){
        // this.prueba();
        // Busquedas.pruebas().then( resJson => console.log(resJson) )
        Busquedas.unidades().then( res => {
                                this.dataUnidades = res.data;
                            })

    },
    data() {
        return {
            cantidad: 100,
            dataUnidades: []
        }
    },
    methods: {
        prueba(){
            console.log('entra');
        }
    },
}
</script>