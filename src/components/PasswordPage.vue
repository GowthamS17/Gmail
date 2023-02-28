<template>
  <div class="common-layout">
    <el-container>
      <el-main class="main">
        <el-card class="box-card">
          <div class="main">
            <div class="google">
              <img :src="GoogleImage" class="image" />
            </div>
            <div class="sign">
              <h2 style="margin-top: 0%; font-family: Arial, Helvetica, sans-serif; margin-left: 5%;">Welcome</h2>
              <span
                class="align"
                ><el-button @click="router.push('/change')" size="fit-content" type="" round style="width:50%; margin-left: 22%; " >
                  <img :src="google" class="image1"  />
                  {{ $route.params.id }}  
                  <el-icon style="margin-left:auto"><CaretBottom /></el-icon>
                </el-button></span
              >
            </div>
            <div class="move">
              <p style="font-family: Arial">To continue,first verify it's you</p>
              <br />
            </div>
            <div>
              <el-input
              v-show="show=== true"
                v-model="input"
                type="text"
                placeholder="Enter your password"
                class="input"
              />
              <el-input
              v-show="show != true"
                v-model="input"
                type="password"
                placeholder="Enter your password"
                class="input"
              />
              <el-checkbox v-model="show" /><label style="font-family: Arial; margin-top: 3 %;">show password</label>
            </div>
            <br />
            <div class="space2">
              <el-button type="" text="plain" style="color: blue" @click="router.push('/forgot')"
                >Forgot password?</el-button
              >
              <el-button type="primary" style="margin-left: 48%" @click="router.push('/gmail')"
                >Next</el-button
              >
            </div>
          </div>
        </el-card>
        <div class="bottom">
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
import { ref } from "vue";
import { useRouter } from 'vue-router';
import { Search } from "@element-plus/icons-vue";
export default {
  name: "PasswordPage",
  data() {
    return {
      google: "https://cdn-teams-slug.flaticon.com/google.jpg",
      GoogleImage:
        "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fplay-lh.googleusercontent.com%2F1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA",
    };
  },
  setup() {
    const input = ref("");
    const value = ref("");
    const show= ref(false);
    const router = useRouter();
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
    return { input, options, value, show ,router};
  },
};
</script>
<style scoped>
.sign {
  margin-top: 0%;
}
.box-card {
  margin-top: 3%;
  width: auto;
  margin-left: 35%;
  margin-right: 30%;
  border-radius: 1%;
}
.input{
  height:1.25cm;
}
.google {
  text-align: center;
  font-family: "arial";
}
.main {
  margin-left: 2%;
  margin-right: 5%;
  margin-bottom: 5%;
}
.space2 {
  margin-top: 15%;
}
.bottom {
  margin-top: 2%;
}
.image {
  width: 35%;
  margin-left: 3%;
}
.sign {
  margin-top: 0%;
  text-align: center;
}
.move {
  margin-top: 10%;
}
.image1 {
  width: 10%;
  margin-left: 0%;
  margin-right: 3%;
}
.align{
    text-align: center; 
    margin-left: 5%; 
    margin-right: 34%
}
</style>
