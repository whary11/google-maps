<template>


    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">Mapa</div>

                    <div class="card-body">
                        <div>
                            <label>
                                AutoComplete
                                <GmapAutocomplete @place_changed="setPlace" :options="opciones" >
                                </GmapAutocomplete>
                                <button @click="usePlace">Add</button>
                            </label>
                            <br />

                            <GmapMap style="width: 100; height: 500px;" :center="center" :zoom="16" mapTypeId="terrain">
                                <GmapMarker v-for="(marker, index) in markers" :key="index"
                                    :position="marker.position" />
                                <GmapMarker v-if="this.place" label="★" :position="{
          lat: this.place.geometry.location.lat(),
          lng: this.place.geometry.location.lng(),
        }" />
                                <GmapMarker :position="center"  title="Hola Casa de perros aquí."  icon="https://66.media.tumblr.com/01becf9e10af0993213d6421ca0d24ae/tumblr_inline_mvhhztLX2k1qid2nw.gif"/>
                            </GmapMap>
                        </div>
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
                opciones: {
                    //Delimitar la zona de busqueda
                    bounds: {
                        east: 104,
                        north: 1.4,
                        south: 1.2,
                        west: 102,

                    },
                    strictBounds: true
                },
                markers: [],
                place: null,
                center: {
                    lat: 4.6492811,
                    lng: -74.1608991
                },
                
            }
        },
        description: 'Autocomplete Example (#164)',
        methods: {
            setDescription(description) {
                this.description = description;
            },
            setPlace(place) {
                console.log(place);
                
                this.place = place
                // this.center = place
            },
            usePlace(place) {

                console.log(place);
                
                if (this.place) {

                    this.center = {
                            lat: this.place.geometry.location.lat(),
                            lng: this.place.geometry.location.lng(),
                        }
                    this.markers.push({
                        position: {
                            lat: this.place.geometry.location.lat(),
                            lng: this.place.geometry.location.lng(),
                        }
                    })
                    this.place = null;
                }else{
                    console.log('La dirección está en el rango de busqueda');
                    
                }
            }
        }
    }
</script>