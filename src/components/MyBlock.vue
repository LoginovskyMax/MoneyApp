<template>
    <div @click="ChooseCathegory(item.category)">
    <img :src="item.img" alt="img">
     <p>{{item.category}}</p>
     <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: ["item"],
  methods:{
     ChooseCathegory(item){
       this.$emit('ChooseCathegory',item)
    },
  }
}
</script>

<style scoped lang="less">
div{
position:relative;
padding: 20px;
border: 2px solid teal;
border-radius: 20px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
gap: 10px;
width: 200px;
height: 200px;
transition: 0.7s;
background-color: rgba(0, 128, 128, 0.089);
}
div:hover{
  transform: scale(1.1);
  background-color: rgba(0, 128, 128, 0.466);
}
img{
  width: 150px;
}
</style>
