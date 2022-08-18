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
      categoryArr:[{category:"Техника",img:'./assets/tech.svg'},{category:"Одежда",img:'./assets/cloth.svg'},{category:"Еда",img:'./assets/food.svg'},{category:"Машина",img:'./assets/auto.svg'},{category:"Здоровье",img:'./assets/health.svg'}],
      SalarysArr:[],
      categorySalaryArr:[{category:"Депозит",img:'./assets/depo.svg'},{category:"Зарплата",img:'./assets/cash.svg'},{category:"Сбережения",img:'./assets/sber.svg'}],
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
  height: 100Vh;
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
</style>
