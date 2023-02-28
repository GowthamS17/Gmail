<template>
<div class="common-layout">
    <el-container>
      <el-main class="main">
        <el-card class="box-card">
            <div class="main">
            <div class="google">
                <img :src="GoogleImage" class="image"/>
                <h3 style="margin-top:-3%;">Sign in</h3>
                <h4>to continue to Gmail</h4>
            </div>
            <br />
             <div>
                 <el-input type="text" v-model="textarea" :rows="2" placeholder="Email or Phone" class="login"/>
                 <el-button @click="router.push('/find')" type="primary" text="primary" style="color:blue; margin-left:1%; margin-top:2%">Forgot email ?</el-button>
            </div><br />
            <div class="space1">
                <p class="content">Not your computer? Use guest mode to sign in privately</p>
                <p style="color:blue"><b>Learn More...</b> </p>
             </div>
             <div class="space2">
                <el-button type="" text="plain" style="color:blue"  @click="router.push('/create')">Create Account</el-button>
                <el-button type="primary" style="margin-left: 50%;" @click="router.push(`/password/${textarea}`)">Next</el-button>
            </div>
        </div>
  </el-card>
  <div class="bottom">
  <el-row >
    <el-col :span="5" style="margin-left: 36%;"><div>
        <el-select v-model="value" class="m-2" display=none placeholder="English (United States)">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
</el-select>
</div>
    </el-col>
    <el-col :span="1"><div />Help</el-col>
    <el-col :span="1"><div />Privacy</el-col>
    <el-col :span="1"><div />Terms</el-col>
  </el-row>
</div>
</el-main>
</el-container>
</div>
</template>
<script>
import { useRouter } from 'vue-router';
import { ref } from 'vue'
export default{
    name:"SignIn",
    data(){
        return{
            GoogleImage:'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fplay-lh.googleusercontent.com%2F1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA',
        }
    },
    
    setup(){
      const router = useRouter();
        const textarea = ref('gowtham@gmail.com'); 
        const value=ref('');
        const options = [
  {
    value: 'English(UK)',
    label: 'English(UK)',
  },
  {
    value: 'English(India)',
    label: 'English(India)',
  },
  {
    value: 'Spanish',
    label: 'Spanish',
  },
  {
    value: 'Arabic',
    label: 'Arabic',
  },
  {
    value: 'French',
    label: 'French',
  },
  {
    value: 'German',
    label: 'German',
  },
  {
    value: 'Russian',
    label: 'Russian',
  },
  {
    value: 'Hindi',
    label: 'Hindi',
  },
  {
    value: 'Tamil',
    label: 'Tamil',
  },
]
        return {textarea,options,value,router}
    }
}
</script>
<style scoped>
.box-card{
    margin-top: 4%;
    width: auto;
    margin-left: 35%;
    margin-right:32%;
    border-radius: 1%;
}
.login{
    height:1.25cm
}
.google{
    text-align: center;
    font-family: "arial";
    margin-bottom: 0%;
}
.main{
    margin-left: 2%;
    margin-right: 5%;
    margin-bottom: 5%;
}
.space1{
    margin-top: 0%;
}
.space2{
    margin-top: 15%;
}
.content{
    font-size: 15px;
    font-family: "Arial";
}
.bottom{
    margin-top: 2%;
}
.image{
    width: 35%;
    margin-bottom:0%;
    margin-top:0%
}

</style>