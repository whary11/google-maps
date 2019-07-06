<template>
<div>

  <GmapMap :zoom="18" :center="center" style="width: 100; height: 500px" :directions="directions">
    <DirectionsRenderer />

    Hola Mundo 
  </GmapMap>

</div>
</template>
<script>
import DirectionsRenderer from '../DirectionsRenderer'

export default {
    data() {
        return {
            center:{lat:4.6492811, lng:-74.1608991},
            direccions:{

            }
        }
    },
  components: {DirectionsRenderer}
}
</script>