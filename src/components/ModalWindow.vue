<template>
 <!-- <button @click="openModal" class="btn">{{TextBtn}}</button> -->
    <transition name="fade">
    <div class="modalWindow" v-if="show.show"  v-on:click.stop="closeModal">
      <div class="modalItem" @click.stop>
        <slot></slot>
        <DeleteBtn  v-on:click.stop="closeModal"></DeleteBtn>
      </div>
    </div>
    </transition>
</template>

<script>
import DeleteBtn from '@/components/DeleteBtn.vue'

export default {
components:{ DeleteBtn },
name:["ModalWindow"],
props:["TextBtn","show"],
data(){
    return{
     obj:{}
    }
},
methods:{
    openModal(){
      this.show=true
    },
    closeModal(){
      this.obj.show=false
    }
},
mounted(){
this.obj=this.show
}
}
</script>

<style>
.modalWindow{
  position: fixed;
  top:0;
  bottom:0;
  right:0;
  left:0;
  background-color: rgba(0, 255, 255, 0.356);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modalItem{
  width: 300px;
  border-radius: 20px;
  border: 2px solid black;
  padding: 30px;
  background-color: aqua;
  position: relative;
}
.btn{
  margin-bottom: 20px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.7s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
</style>