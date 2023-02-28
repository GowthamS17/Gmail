<template>
<div class="common-layout">
    <el-container>
      <el-main>
        <el-card class="box-card">
          <div class="container">
            <div class="google">
              <img :src="GoogleImage" class="image" />
            </div>
            <div class="head">
                <h2 >Find your email</h2>
            </div>
            <div>
                <p style="font-family: Arial; font-size: 16px;">Enter your phone number or recovery email </p>
                   
            </div>
              <div style="margin-top: 20%;">
                <el-input placeholder="Phone number or email" style="height:1.5cm" type="text" v-model="mail"/>     
              </div>
              <div class="space2">
              <el-button type="primary" style="margin-left: 85%" @click="router.push('/forgot')"
                >Next</el-button
              >
            </div>
            </div>
            </el-card>
            <div class="bottom2">
          <el-row>
            <el-col :span="5" style="margin-left: 36%"
              ><div>
                <el-select
                  v-model="value"
                  class="m-2"
                  display="none"
                  placeholder="English (United States)"
                >
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </div>
            </el-col>
            <el-col :span="1"
              ><div />
              Help</el-col
            >
            <el-col :span="1"
              ><div />
              Privacy</el-col
            >
            <el-col :span="1"
              ><div />
              Terms</el-col
            >
          </el-row>
        </div>
            </el-main>
            </el-container>
            </div>
</template>
<script>
import { useRouter } from 'vue-router';
import {ref} from 'vue'
export default {
    name:'ForgotPassword',
    data(){
        return{
            google: "https://cdn-teams-slug.flaticon.com/google.jpg",
            GoogleImage:'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fplay-lh.googleusercontent.com%2F1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA',
        }
    },
    setup(){
        const router = useRouter();
        const mail= ref('');
        const value = ref('');
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
return {options,value,mail,router}
    }
    
}
</script>
<style scoped>
.bottom2{
    margin-top: 1%;
}
.space2{
    margin-top: 15%;
    margin-bottom:15%
}
.head{
    text-align: center;
    margin-top:-6%;
    font-family:Arial, Helvetica, sans-serif;
}
.container{
    margin-left: 5%;
    margin-right: 3%;
}
p{
    font-size: 18px;
    text-align: center;
    margin-left:0%
}
.box-card{
    margin-top: 5%;
    margin-left:35%;
    margin-right:30%;
}
.image{
    width: 35%;
}
.google{
    text-align: center;
}
.image1 {
  width: 10%;
}
.bottom{
    font-family: Arial, Helvetica, sans-serif;
    margin-left:-5%;
    margin-top:15%;
    font-size: 10px;
}
.bottom1{
    text-align: left;
}
</style>
