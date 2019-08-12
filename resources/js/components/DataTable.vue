<template>
    <div>
        <div class="form-group col-sm-4 my-2">
            <!-- <download-excel class="btn btn-success" :data="rows" type="xls" :fields="header">
                Descargar
            </download-excel> -->
            <input type="text" class="form-control" v-model="search">
        </div>
        <paginate name="getData" tag="div" :list="getData" class="paginate-list">
            <table :class="clases">
                <thead>
                    <tr>
                        <th v-for="(item, index) of header" :key="index">{{item}}</th>
                        <slot name="th">

                        </slot>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(row, index) in paginated('getData')" :key="index"
                        v-show="(pag - 1) * NUM_RESULTS <= index  && pag * NUM_RESULTS > index">
                        <td v-for="(item, index) in row" :key="index">{{item}}</td>
                        <td @click.prevent="addEvent(row)">Opciones</td>
                        <slot name="td"  v-bind="row">

                        </slot>
                    </tr>
                </tbody>
                <caption>Mostrando {{getData.length}} resultados.</caption>
                <tfoot>
                    <slot name="footer">

                    </slot>
                </tfoot>
            </table>
        </paginate>
        <nav>
            <paginate-links :classes="{
    'ul': 'pagination',
    'li':'page-item',
    'a':'page-link'
  }" for="getData" :show-step-links="true"></paginate-links>

        </nav>
    </div>
</template>
<script>
    export default {
        props: ['clases'],
        data() {
            return {
                NUM_RESULTS: 10, // Numero de resultados por página
                pag: 1, // Página inicial
                header: {
                    id: 'Id',
                    nombre: 'Nombre',
                    apellidos: 'Apellidos',
                    opciones: 'Opciones'
                },
                rows: [
                    {
                        id: 1,
                        nombre: 'Luis Fernando',
                        apellidos: 'Raga Renteria1',
                    },
                    {
                        id: 2,
                        nombre: 'Kat',
                        apellidos: 'Leon Ospina1',
                    },
                    {
                        id: 3,
                        nombre: 'Omar',
                        apellidos: 'Raga1',
                    },
                    // {
                    //     id: 4,
                    //     nombre: 'Rosa',
                    //     apellidos: 'Renteria1',
                    // },
                    // {
                    //     id: 5,
                    //     nombre: 'Luis Fernando',
                    //     apellidos: 'Raga Renteria1',
                    // },
                    // {
                    //     id: 6,
                    //     nombre: 'Kat',
                    //     apellidos: 'Leon Ospina1',
                    // },
                    // {
                    //     id: 7,
                    //     nombre: 'Omar',
                    //     apellidos: 'Raga1',
                    // },
                    // {
                    //     id: 8,
                    //     nombre: 'Rosa',
                    //     apellidos: 'Renteria1',
                    // },
                    // {
                    //     id: 9,
                    //     nombre: 'Luis Fernando',
                    //     apellidos: 'Raga Renteria1',
                    // },
                    // {
                    //     id: 10,
                    //     nombre: 'Kat',
                    //     apellidos: 'Leon Ospina1',
                    // },
                    // {
                    //     id: 11,
                    //     nombre: 'Omar',
                    //     apellidos: 'Raga1',
                    // },
                    // {
                    //     id: 12,
                    //     nombre: 'Rosa',
                    //     apellidos: 'Renteria1',
                    // },
                ],
                search: null,
                paginate: ['getData']
            }
        },

        mounted() {


        },

        methods: {
            
            addEvent(row){
                console.log(row);
                
            }
        },
        computed: {
            getData() {
                let newRows = []
                if (this.search) {
                    this.rows.map((row) => {
                        for (var i in row) {
                            if (row[i].toString().toLowerCase().indexOf(this.search.toString().toLowerCase()) >=
                                0) {
                                newRows.push(row)
                            }
                        }
                    })
                } else {
                    newRows = this.rows
                }
                let algo = [];
                [...new Set(newRows.map(r => r.id))].map(id => {
                    algo.push(newRows.find(s => s.id === id))
                })
                return algo;
            }
        },
    }
</script>

<style>
    h1,
    h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
        cursor: pointer;
    }

    a {
        color: #42b983;
    }

    .page-link {
        margin-left: -20px;
    }
</style>