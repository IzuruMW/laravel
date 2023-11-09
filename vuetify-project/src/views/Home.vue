<template>
  <center> 

 <h1> Hello world!</h1>

 <div>
 <button @click=" directPage()">submit page1</button>
 <br><br>
 <button @click=" directPage12()">submit page2</button> <br><br>
 <button @click="abc()"> submit page2</button>
 </div>


<page1/>
<page2/>
</center>
</template>

<script >
import page1 from "@/views/page1.vue";
import page2 from"@/views/page2.vue";
export default{
  methods:{
directPage()
{  this.$router.push('page1'); 

},
directPage12(){
  this.$router.push('page1');
 },
 abc(){
  this.$router.push('page2');
 },
 
},
components :{
  page1,
  page2
  
}

};

</script>
