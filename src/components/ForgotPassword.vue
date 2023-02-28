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
                <h2 >Account recovery</h2>
            </div>
            <div>
                <p>To help keep your account safe, Google wants to <br />
                   <p style="margin-top: 1%;">make sure that it's really you trying to sign in</p> </p>
            </div>
            <span
                class="align"
                ><el-button @click="router.push('/change')" size="large" type="" round style="width:65%; margin-left: 20%; " >
                  <img :src="google" class="image1"  />
                  gowthamsenthil1708@gmail.com  
                  <el-icon style="margin-left:auto"><CaretBottom /></el-icon>
                </el-button></span
              >

              <div class="bottom">
                    <p style="font-size: 16px;margin-left: -16%; font-family: Arial">
                        An email with a verification code was just send to
                    </p>
                    <p style="font-size: 16px; margin-left: -55%; margin-top:1%">
                       <b>gow........@gmail.com</b>
                    </p>
              </div>
              <div>
                <el-input placeholder="Enter code" style="height:1.25cm" type="Number" v-model="code"/>     
              </div>
              <div class="space2">
              <el-button type="" text="plain" style="color: blue" @click="router.push('/find')"
                >Try another way</el-button
              >
              <el-button type="primary" style="margin-left: 57%"
                >Next</el-button
              >
            </div>
            </div>
            </el-card>
            <div class="bottom2">
          <el-row>
            <el-col :span="5" style="margin-left: 37%"
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
import {ref} from 'vue'
import { useRouter } from 'vue-router';
export default {
    name:'ForgotPassword',
    data(){
        return{
            google: "https://cdn-teams-slug.flaticon.com/google.jpg",
            GoogleImage:'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fplay-lh.googleusercontent.com%2F1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA',
        }
    },
    setup(){
      const code= ref('')
      const router = useRouter();
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
return {options,value,router,code}
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
    margin-left:35%;
    margin-right:29%
}
.image{
    width: 35%;
}
.google{
    text-align: center;
}
.image1 {
  width: 10%;
  margin-left: 0%;
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