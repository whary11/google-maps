<template>
  <div class="text-center">
    <!-- <img v-if="userAvatar" :src="userAvatar"> -->
    <button id="pick-avatar" class="btn btn-success">Selccionar imagen</button>
    <div class="row justify-content-center">

    <img :src="img" alt="" v-if="img">
    </div>
    <avatar-cropper :output-options="options" :labels="labels" :cropper-options="cropperOptions"
      @uploaded="handleUploaded"
      trigger="#pick-avatar" :upload-form-data="datos" upload-url="/files/upload"/>
  </div>
</template>

<script>
  import AvatarCropper from "vue-avatar-cropper"

  export default {
    components: { AvatarCropper },
    data() {
      return {
          userAvatar: undefined,
          img:null,
          options:{width: 300, height: 300},
          cropperOptions:{
            aspectRatio: 1,
            autoCropArea: 1,
            viewMode: 1,
            movable: false,
            zoomable: false,
            height:'700',
            width:'1000',
            maxHeight:'700',
            maxWidth:'1000',

            },
          labels:{ submit: "Cargar", cancel: "Cancelar"},
          datos:{
              nombre:'Luis Raga',
              _token:document.head.querySelector('meta[name="csrf-token"]').content
          }
      }
    },
    methods: {
      handleUploading(form, xhr) {
            form.append('foo', 'bar')
            console.log(form, xhr);
            
        },
        handleUploaded(response, form, xhr) {

            this.img = '../storage/'+response.img
            console.log(response.img);
            
            // update user avatar attribute
        },
        handleCompleted(response, form, xhr) {
            console.log(response, form, xhr);
            
            // xhr.status
        },
        handlerError(message, type, xhr) {
            console.log(response, form, xhr);
            
          if (type == 'upload') {
            // xhr.response...
          }
        }
        
    }
  }
</script>