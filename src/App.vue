<template>
  <nav>
    <router-link to="/">Статистика</router-link> |
    <router-link to="/buys">Расходы</router-link> |
    <router-link to="/salary">Доходы</router-link>
  </nav>
  <router-view :BuysArr="BuysArr" 
               :categoryArr="categoryArr" 
               @addCategory="addCategory" 
               :saveToLS="saveToLS"
               :SalarysArr="SalarysArr"
               :categorySalaryArr="categorySalaryArr"
               @addCategorySalary="addCategorySalary"
               @deleteBuy="deleteBuy"
               @deleteSalary="deleteSalary"
               @deleteCatSalary="deleteCatSalary"
               @deleteCatBuy="deleteCatBuy"
               />
</template>

<script>

export default {
  data(){
    return{
      BuysArr:[],
      categoryArr:[{category:"Техника",img:'./assets/tech.svg',status:false},{category:"Одежда",img:'./assets/cloth.svg',status:false},{category:"Еда",img:'./assets/food.svg',status:false},{category:"Машина",img:'./assets/auto.svg',status:false},{category:"Здоровье",img:'./assets/health.svg',status:false}],
      SalarysArr:[],
      categorySalaryArr:[{category:"Депозит",img:'./assets/depo.svg',status:false},{category:"Зарплата",img:'./assets/cash.svg',status:false},{category:"Сбережения",img:'./assets/sber.svg',status:false}],
    }
  },
  methods:{
    saveToLS(name,item){
     localStorage.setItem(`${name}`,JSON.stringify(item))
    },
    addCategory(obj){this.categoryArr.push(obj);
    this.saveToLS('categoryArr',this.categoryArr)
    },
    addCategorySalary(obj){this.categorySalaryArr.push(obj);
    this.saveToLS('categorySalaryArr',this.categorySalaryArr)
    },
    deleteBuy(id){
      this.BuysArr = this.BuysArr.filter(item=>item.id!=id)
       this.saveToLS('BuysArr',this.BuysArr)
    },
    deleteSalary(id){
        this.SalarysArr = this.SalarysArr.filter(item=>item.id!=id)
        this.saveToLS('SalarysArr',this.SalarysArr)
    },
    deleteCatSalary(category){
        this.categorySalaryArr = this.categorySalaryArr.filter(item=>item.category!=category)
        this.saveToLS('categorySalaryArr',this.categorySalaryArr)
    },
    deleteCatBuy(category){
        this.categoryArr = this.categoryArr.filter(item=>item.category!=category)
        this.saveToLS('categoryArr',this.categoryArr)
    }
  
  },
  computed:{
    
  },
   mounted(){
      if(localStorage.getItem("categoryArr")){
      this.categoryArr = JSON.parse(localStorage.getItem("categoryArr"))
      }
      if(localStorage.getItem("BuysArr")){
      this.BuysArr = JSON.parse(localStorage.getItem("BuysArr"))
      }
      if(localStorage.getItem("categorySalaryArr")){
      this.categorySalaryArr = JSON.parse(localStorage.getItem("categorySalaryArr"))
      }
      if(localStorage.getItem("SalarysArr")){
      this.SalarysArr = JSON.parse(localStorage.getItem("SalarysArr"))
      }
   }
}
</script>

<style lang="less" >
body{
  padding:0;
  margin:0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 15px;
  background: linear-gradient(white,purple);
  padding-bottom: 500px;
}

nav {
  padding: 30px;
  font-size: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
@media screen and (max-width:768px) {

}
</style>
