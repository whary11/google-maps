<template>
    <div>

        <!-- <draggable v-model="myArray" @add="log">
            <transition-group>
                <div v-for="element in myArray" :key="element.id">
                    {{element.name}}
                </div>
            </transition-group>
        </draggable> -->
        <ul>
            <li :draggable="true"  @dragstart="drag" v-for="(item, index) in 10" :key="index">{{index}}</li> 
        </ul>

        <div class="card h-75" @drop="drop" @dragover="drgover" >
            Hola Mundo
        </div>


    </div>
</template>
<script>
    import draggable from 'vuedraggable'
    export default {
        data() {
            return {
                myArray: [{
                    name: 'task1',
                    id: 1
                }]
            }
        },
        methods: {
            drop(ev) {
                ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
            },
            drag(e){
                console.log(e, 'drag');
                
            },

            drgover(e){
                console.log(e.dataTransfer.setData("text", e.target.id), 'drgover');
                
            }
        },
    }
</script>