<template>
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">Mapas</div>

                    <div class="card-body">
                        <GmapMap :options="opciones" :center="center" :zoom="18" mapTypeId="hybrid"
                            style="width: 100; height: 500px" ref="map">
                            <GmapMarker :key="index" v-for="(m, index) in markers" :position="m.position"
                                :clickable="true" :draggable="true" @click="center=m.position" />
                        </GmapMap>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                opciones:{
                    streetViewControl: false,
                },
                center:{lat:4.6492811, lng:-74.1608991},
                markers: [{
                    position: {
                        lat: 4.6492811,
                        lng: -74.1608991,
                    },
                    // position: {
                    //     lat: 3.6492811,
                    //     lng: -74.1608991,
                    // }
                }]

            }
        },
        mounted() {
        }
    }
</script>