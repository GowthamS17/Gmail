<template>
  <div class="common-layout">
    <el-container>
      <el-main >
        <el-card class="box-card">
          <div class="main">
            <div class="google">
              <img :src="GoogleImage" class="image" />
            </div>
            <div class="sign">
              <h2 style="margin-top: 0%; font-family: Arial">
                Choose an account
              </h2>
            </div>
          </div>


          <!-- <div name="space">
          <div> -->
            <span v-for="detail in details">
            <el-container style="margin-left:5%" class="con" @click="router.push(`/password/${detail.email}`)">
             
              <el-aside class="logo">
                <el-avatar
                 :src="detail.url" 
                /> </el-aside
              >
              <el-main style="margin-top: -9%;" >
                <p style="margin-top:6%">
                  <b>{{ detail.name }}</b>
                </p>
                <p style="margin-top:-3%">{{ detail.email }}</p>
              </el-main>
             
           
            </el-container> 
          <hr />
          </span> 
          <div
            style="
              width: fit-content;
              margin-top: 2%;
              margin-left: 5%;
              margin-right: 5%;
            "
          >
            <el-container>
              <el-aside style="width: min-content">
                <el-avatar
                  src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
                /> </el-aside
              ><el-main style="margin-top: -10%;margin-bottom: 5%;"
                >
                <p style="font-family: Arial">Use another account</p></el-main
              >
            </el-container>
          </div>
          <hr style="margin-bottom: 35%;"/>
        <!-- </div> -->
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
import { useRouter } from 'vue-router';
import { ref } from "vue";

export default {
  name: "AccountChange",
  data() {
    return {
      GoogleImage:
        "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fplay-lh.googleusercontent.com%2F1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA",
    };
  },
  setup(){
    const value = ref('');
    const router = useRouter()
    const details=ref([
      {
        name:"Gowtham",
        email:"gowtham@gmail.com",
        url:"https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/7642fb7f-8c3b-4423-a3a7-dddb47be03b0/icon-design-22-opt.png",
      },
      {
        name:"Gopinath",
        email:"gopinath@gmail.com",
        url:"https://img.freepik.com/premium-vector/twitter-icon-paper-cut-style-social-media-icons_505135-257.jpg"
      },
      {
        name:"Naveen",
        email:"naveen@gmail.com",
        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp9zCTxTTeD55Fa45aBsTOmGYMSoKLr86kCQ&usqp=CAU"
      }

    ])
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
    return {options,value,details,router}
  }
};

</script>
<style scoped>

.logo{
  width: min-content;
}
.google {
  text-align: center;
}
.image {
  width: 30%;
}
.main{
  margin-bottom:10%
}
.box-card {
  margin-top: 0%;
  width: auto;
  margin-left: 35%;
  margin-right: 30%;
  border-radius: 1%;
  margin-bottom: 0%;
}
.sign {
  text-align: center;
}
hr {
  opacity: 0.5;
  margin-top: -5%;
}
.bottom {
  margin-top: 1%;
}

</style>
