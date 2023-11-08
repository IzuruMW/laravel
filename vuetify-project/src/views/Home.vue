<template>
 <h1> Hello world!</h1>

 <div>
 <button @click=" directPage()">submit</button>
 <br><br>
 <button @click=" directPage12()">submit1</button> <br><br>
 <button @click="abc()"> abc</button>
 </div>














</template>

<script >
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

  
};
 
</script>
