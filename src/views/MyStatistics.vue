<template>
<header>
  <div class="select" v-if="buys">
    <select  v-model="sort" class="search">
       <option disabled>Cортировать по:</option>
       <option value="date">Дате</option>
       <option value="sum">Сумме</option>
    </select>
    <select v-model="sortByCategory" class="search">
           <option disabled>По категории:</option>
           <option v-for="item in categoryArr" :key="item.category">{{item.category}}</option>
           <option value="all">Показать все</option>
    </select>
  </div>
  <div class="select" v-else>
    <select  v-model="sort" class="search">
       <option disabled>Cортировать по:</option>
       <option value="date">Дате</option>
       <option value="sum">Сумме</option>
    </select>
    <select v-model="sortByCategory" class="search">
           <option disabled>По категории:</option>
           <option v-for="item in categorySalaryArr" :key="item.category">{{item.category}}</option>
           <option value="all">Показать все</option>
    </select>
  </div>
  <div class="btns">
      <button @click="salary" class="salary btn">Доходы</button>
      <button @click="buysFunc" class="buys btn">Расходы</button>
  </div>
   <div class="all">
       <div class="salary">Всего потрачено :{{allBuys}}$</div>
       <div class="buys">Всего прибыли :{{allSalary}}$</div>
   </div>
 
  <input type="text" v-model="search" placeholder="Поиск..." class="search">
</header>
 <h2 v-if="buys">Расходы</h2>
 <h2 v-else>Доходы</h2>
<div class="main">
   <transition-group name="list" v-if="buys" appear>
  
  <div class="blocks block--last" key="1"><p class="bold">Всего потрачено: </p><p>{{totalSum}}$</p></div>
   <div v-for="item in newArr " 
       class="blocks"
       :key="item.id"
        >
    <p><span class="bold">Категория:</span> {{item.category}}</p>
    <p><span class="bold">Сумма: </span>{{item.sum}}$</p>
    <p><span class="bold">Дата: </span>{{item.date}}</p>
    <p v-if="item.comment!=''"><span class="bold">Комментарий: </span>{{item.comment}}</p>
    <DeleteBtn @click="deleteBuy(item.id)"></DeleteBtn>
  </div>
  </transition-group>
  
<transition-group name="list" v-else appear>
  <div class="blocks block--last" key="1"><p class="bold">Общая прибыль: </p><p>{{totalSumSalary}}$</p></div>
  <div v-for="item in salArr " 
       class="blocks"
       :key="item.id">
    <p><span class="bold">Категория: </span>{{item.category}}</p>
    <p><span class="bold">Сумма: </span>{{item.sum}}$</p>
    <p><span class="bold">Дата:</span> {{item.date}}</p>
    <p v-if="item.comment!=''"><span class="bold">Комментарий:</span> {{item.comment}}</p>
    <DeleteBtn @click="deleteSalary(item.id)"></DeleteBtn>
  </div>
  </transition-group>

</div>
  
</template>

<script>
import DeleteBtn from '@/components/DeleteBtn.vue'
export default {
  components: {DeleteBtn},
  props:["BuysArr",'categoryArr','SalarysArr','categorySalaryArr'],
  
  data(){
    return{
        search:'',
        arr:[],
        sort:'Cортировать по:',
        sortByCategory:'По категории:',
        salArr:[],
        buys:true
    }
  },
  mounted(){
     this.arr = [...this.BuysArr]
     this.salArr=[...this.SalarysArr]
  },
  methods:{
        salary(){
          this.buys=false
        },
        buysFunc(){
            this.buys=true
        },
        deleteBuy(id){this.$emit('deleteBuy',id) },
        deleteSalary(id){ this.$emit('deleteSalary',id)}
        
  },
  watch:{
        sort(newValue){
            if(this.buys){
                    this.arr.sort((item1,item2)=>{
                    if(newValue=="sum"){
                        return item1[newValue]-(item2[newValue])
                    }else{return item1[newValue].localeCompare(item2[newValue])}
                   })
            }else{
                    this.salArr.sort((item1,item2)=>{
                    if(newValue=="sum"){
                        return item1[newValue]-(item2[newValue])
                    }else{return item1[newValue].localeCompare(item2[newValue])}
                   })
            }
                  
        },
        sortByCategory(newVal){
               if(this.buys){
                this.arr=[...this.BuysArr].filter(item=>item.category==newVal)
                if(newVal == "all"){this.arr=[...this.BuysArr]}
               }else{
                this.salArr=[...this.SalarysArr].filter(item=>item.category==newVal)
                if(newVal == "all"){this.salArr=[...this.SalarysArr]}
               }
        },
        search(nevValue){
                if(this.buys){
                this.arr=[...this.BuysArr].filter(item=>item.comment.includes(nevValue))
               }else{
                this.salArr=[...this.SalarysArr].filter(item=>item.comment.includes(nevValue))
               }
        },
        BuysArr(newValue){
          this.arr=[...newValue]
        },
        SalarysArr(newValue){
           this.salArr=[...newValue]
        }
  },
  computed:{
     totalSumSalary(){
      let total = 0
      this.salArr.forEach(item=>total+= +item.sum)
      return total
     },
     totalSum(){
      let total = 0
      this.arr.forEach(item=>total+= +item.sum)
      return total
      },
     allSalary(){
      let total = 0
      this.SalarysArr.forEach(item=>total+= +item.sum)
      return total
      },
     allBuys(){
      let total = 0
      this.BuysArr.forEach(item=>total+= +item.sum)
      return total
      },
     newArr(){
              return this.arr
     }
  }
}
</script>

<style lang="less" scoped>
.main{
display: flex;
gap:20px;
flex-wrap: wrap;
.blocks{
padding: 20px;
border: 2px solid teal;
border-radius: 20px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
width: 200px;
transition: 0.7s;
background-color: rgba(0, 128, 128, 0.089);
position:relative;
color:rgb(248, 244, 244);
font-size:22px;
  .bold{
    font-weight: bold;
    font-size:25px;
    color:rgb(245, 240, 240);
  }
}
.blocks:hover{
    transform: scale(1.1);
    background-color: rgba(0, 128, 128, 0.466);
}
.block--last{
  justify-content: center;
}
}
.list-enter, .list-leave-to
{
  opacity: 0;
  transform: translateX(40px);
}
.list-move {
  transition: transform 0.7s ease;
}
header{
padding: 20px;
display: flex;
gap: 30px;
justify-content: center;
align-items:center;
background-color: rgba(173, 98, 226, 0.548);
border-radius: 30px;
margin-bottom: 20px;
    .btns{
     display: flex;
     gap: 20px;
      }
    .search{
        padding: 5px;
        border-radius:5px;
        background-color: rgb(224, 199, 240);
      }
    .select{
      display: flex;
      gap:5px;
    
    }
    .salary{
      background-color: rgba(0, 128, 0, 0.5);
      padding: 5px;
      border-radius: 5px;
      color:white;
      margin: 5px;
    }
    .buys{
       background-color: rgba(255, 0, 0, 0.466);
       padding: 5px;
       border-radius: 5px;
       color:white;
       margin: 5px;
    }
    .btn{
      padding: 5px 15px;
      margin: 0;
    }
    .btn:hover,.btn:hover{
      color:gold;
      box-shadow: 0 0 15px 3px black;
    }
}
@media screen and (max-width:768px) {
  header{
    flex-direction: column;
    gap: 10px;
  }
  .main{
    justify-content: center;
  }
  .blocks{
    width: 100px;
  }
  option{
    background-color: rgb(224, 199, 240);;
  }
}

</style>

