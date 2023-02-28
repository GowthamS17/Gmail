<template>
  <div>
    <el-container>
      <el-main class="main">
        <el-card class="box-card">
          <div class="common-layout">
            <el-container>
              <el-main>
                <img :src="GoogleImage" class="google" />
                <span>
                  <h2>Create your Google Account</h2>
                  <p>to continue to Gmail</p>
                </span>
                <div>
                  <el-row>
                    <el-input
                      type="text"
                      v-model="fname"
                      placeholder="First Name"
                      style="width: 45%"
                    />
                    <el-input
                      type="text"
                      v-model="lname"
                      placeholder="Last Name"
                      style="width: 45%; margin-left: 2%"
                    />
                  </el-row><br />
                  <el-row>
                    <el-input 
                     type="text"
                     v-model="uname"
                     placeholder="UserName"
                     style="width:92%"
                    >
                    <template #append>@gmail.com</template>
                    </el-input>
                    <p style="font-size:13px"> You can use letters, numbers & periods</p>
                  </el-row>
                  <p style="font-family: 'Arial';font-size: 15px; color:blue"><b>Use my current email address instead</b></p>
                  <el-row>
                    <el-input
                      v-show="show === true"
                      v-model="input1"
                      type="text"
                      placeholder="Password"
                      style="width: 45%"
                    />
                    <el-input
                      v-show="show!= true"
                      v-model="input1"
                      type="Password"
                      placeholder="Password"
                      style="width: 45%"
                    />
                    <el-input
                    v-show="show === true"
                    v-model="input2"
                      type="text"
                      placeholder="Confirm"
                      style="width: 45%; margin-left: 2%"
                    />
                    <el-input
                    v-show="show != true"
                    v-model="input2"
                      type="password"
                      placeholder="Confirm"
                      style="width: 45%; margin-left: 2%"
                    />
                    <p style="font-size:13px">Use 8 or more characters with a mix of letters, numbers & symbols</p>
                  </el-row><br />
                  <div style=" margin-top:-6%">
              <el-checkbox v-model="show" /><label style="font-family: Arial;">show password</label>
            </div>
            <div class="bottom">
            <el-row>
             <el-button type="primary" text="primary" class="text" @click="router.push('/')">Sign in instead</el-button>
             <el-button type="primary" style="margin-left:57%;" @click="router.push('/')">Next</el-button>
            </el-row>
          </div>
        </div>
              </el-main>


              <el-aside >
                <img src="../assets/create.png" class="image" />
              </el-aside>
            </el-container>
          </div>
          
        </el-card>
        <div class="bottom">
          <el-row>
            <el-col :span="11" style="margin-left: 22%"
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
// import {Create} from '../assets/create.png'
import { useRouter } from 'vue-router';
export default {
  name: "CreateAccount",
  data() {
    return {
      // image: Create,
      GoogleImage:
        "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fplay-lh.googleusercontent.com%2F1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA",
    };
  },
  setup(){
    const input1= ref("");
    const input2= ref("");
    const router = useRouter();
    const fname=ref('');
    const lname=ref('');
    const uname=ref('');
    // const value = ref("");
    // const show = ref(false)
    // const input = ref("");
    const value = ref("");
    const show= ref(false);
    const options = [
      {
        value: "English(UK)",
        label: "English(UK)",
      },
      {
        value: "English(India)",
        label: "English(India)",
      },

      {
        value: "Spanish",
        label: "Spanish",
      },
      {
        value: "Arabic",
        label: "Arabic",
      },
      {
        value: "French",
        label: "French",
      },
      {
        value: "German",
        label: "German",
      },
      {
        value: "Russian",
        label: "Russian",
      },
      {
        value: "Hindi",
        label: "Hindi",
      },
      {
        value: "Tamil",
        label: "Tamil",
      },
    ];
    return {input1,input2,value,show,options,router,fname,lname,uname}
  }
};
</script>
<style scoped>
.box-card {
  margin-top: 2%;
  width: auto;
  margin-left: 20%;
  margin-right: 20%;
  border-radius: 1%;
}
.image {
/* max-width:auto; */
width:300px;
height:auto;
margin-top: 35%;
margin-left:-10%;
margin-right:  0%;


/* margin-bottom: auto; */
}
.google {
  width: 30%;
}
.common-layout {
  margin-left: 0%;
}
.text{
    color:blue;
    margin-top: 2%;
    margin-left:0%;
    font-family: "Arial";
    font-size:14px;
}
.bottom{
    margin-top:1%  
}
</style>
