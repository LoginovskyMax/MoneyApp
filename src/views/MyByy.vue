<template>
  <div class="home">
    <h2>Выберите категорию</h2>
    <div class="my-block" >
    <MyBlock  v-for="item in categoryArr" 
              :key="item.category" 
              :item="item" 
              @ChooseCathegory="ChooseCathegory">
           <DeleteBtn v-if="item.status" @click="this.$emit('deleteCatBuy',item.category)"></DeleteBtn>
    </MyBlock>
    <button @click="show2.show=true" class="button"><img src="../assets/plus.svg" alt="img" class="img-btn--big"><p>Добавить категорию</p></button>
    </div>

    <ModalWindow :show="show2">
     <div class="inputs_block">
      <p>Напишите название новой категории</p>
      <input ref="newCat" type="text" placeholder="Категория" v-model="newCategory">
      <button @click="AddToCategory"><img src="../assets/plus.svg" alt="img" class="img-btn">Добавить</button>
     </div>
    </ModalWindow>
<ModalWindow :show="show">
 <div class="inputs_block">
      <p class="text">Cумма</p>
      <input type="number" ref="sum" placeholder="Сумма" v-model="sumCath">
      <p v-if="errorSum" class="error">Введите верную сумму</p>
      <p class="text">Дата</p>
      <input type="date"  v-model="dateCathegory">
      <p class="text">Комментарий</p>
      <input type="text" placeholder="Комментарий" v-model="commentCathegory">
      <button @click="AddToMain(cathegory)"><img src="../assets/plus.svg" alt="img" class="img-btn">Добавить расход</button>
    </div>
</ModalWindow>
   
  
  </div>
</template>

<script>
import MyBlock from '@/components/MyBlock.vue'
import ModalWindow from '@/components/ModalWindow.vue'
import DeleteBtn from '@/components/DeleteBtn.vue'

export default {
  name: 'HomeView',
  components: { MyBlock, ModalWindow, DeleteBtn},
  props:["BuysArr",'categoryArr',"saveToLS"],
  data(){
    return{
       errorSum:false,
       show2:{show:false},
       show:{show:false},
       newCategory:'',
       cathegory:"",
       obj:{},
       ChoosenCathegory:{},
       sumCath:"",
       dateCathegory:'',
       fromCathegory:'',
       commentCathegory:''
    }
  },
  methods:{
    AddToCategory(){
      if(this.newCategory!=""){
        this.show2.show=false
        let obj ={
        img:'./assets/other.svg',
        category:this.newCategory,
        status:true
      }
      this.$emit("addCategory",obj)
      this.newCategory=""
      }else{
        this.setBG(this.$refs.newCat,"Введите название категории","Название")}
    },
    ChooseCathegory(item){
       this.cathegory = item
       this.show.show=true
    },
    AddToMain(){
        if(this.sumCath!="" && this.sumCath>=1 ){
        this.show.show=false
        let newObj = {
        id:Date.now(),
        sum:this.sumCath,
        date:this.dateCathegory.split("-").reverse().join("-"),
        comment:this.commentCathegory,
        category:this.cathegory}
        console.log(this.dateCathegory)
        this.obj.push(newObj)
        this.saveToLS("BuysArr",this.BuysArr)
        this.sumCath=""
        this.dateCathegory=""
        this.fromCathegory=''
        this.commentCathegory=''
        }else{
          this.errorSum=true;
          setTimeout(()=>{ this.errorSum=false},1000)
          }
      
    },
     setBG(refName,text1,text2){
          refName.style.backgroundColor="orange"
          refName.value=text1
          setTimeout(() => {
            refName.style.backgroundColor="white"
            refName.value=''
            refName.setAttribute("placeholder",text2)
          }, 1000);
     }
  },
  mounted(){
    let date = new Date()
    this.obj = this.BuysArr;
    
    if(date.getMonth()>9){
      if(date.getDate()>9){
          this.dateCathegory  = date.getFullYear()+"-" +(date.getMonth()+1) +"-" + date.getDate()
      }else{this.dateCathegory  = date.getFullYear()+"-" +0+(date.getMonth()+1) +"-" + 0+date.getDate()}
      }else{
      this.dateCathegory  = date.getFullYear()+"-" +0+(date.getMonth()+1) +"-"+date.getDate()
      }
  }
  
}
</script>

<style lang="less" scoped>
.text{
  font-size:25px;
  font-weight:bold;
}
.home{
  input{
    padding: 9px;
    border-radius: 10px;
  }
  .my-block{
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
      .button{
      padding: 20px;
      border: 2px solid teal;
      border-radius: 20px;
      width: 245px;
      transition: 0.7s;
      background-color: rgba(0, 128, 128, 0.089);
      }
      .button:hover{
             transform: scale(1.1);
             background-color: rgba(0, 128, 128, 0.466);
           }
  }
  .inputs_block{
display: flex;
flex-direction: column;
gap:10px;
    .error{
      padding:5px;
      border-radius: 10px;
      background-color: orange;
      position: absolute;
      top: 120px;
    }
    button{
      display: flex;
      justify-content:space-around;
      align-items:center;
      width: 200px;
      align-self:flex-end;
      border-radius:20px;
      border:none;
    }
}
.img-btn{width: 50px;}
.img-btn--big{width: 150px;}
}
@media screen and (max-width:768px) {
  .my-block{
    justify-content: center;
  }
}
</style>
