<template>
  <div class="text-center">
    <img v-if="userAvatar" :src="userAvatar">
    <button id="pick-avatar" class="btn btn-success">Selccionar imagen</button>
    <img :src="img" alt="" v-if="img">
    <avatar-cropper
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