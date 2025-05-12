<template>
  <div class="create-account-container">
    <el-container>
      <el-main class="main">
        <el-card class="box-card">
          <div class="form-layout">
            <el-container>
              <el-main class="form-container">
                <img :src="googleImage" class="google-logo" alt="Google Logo" />
                <div class="header-text">
                  <h2>Create your Google Account</h2>
                  <p>to continue to Gmail</p>
                </div>
                
                <div class="form-fields">
                  <!-- Name fields -->
                  <el-row class="input-row">
                    <el-input
                      type="text"
                      v-model="fname"
                      placeholder="First Name"
                      class="name-input"
                    />
                    <el-input
                      type="text"
                      v-model="lname"
                      placeholder="Last Name"
                      class="name-input last-name"
                    />
                  </el-row>

                  <!-- Username field -->
                  <el-row class="input-row">
                    <el-input 
                      type="text"
                      v-model="uname"
                      placeholder="Username"
                      class="username-input"
                    >
                      <template #append>@gmail.com</template>
                    </el-input>
                    <p class="hint-text">You can use letters, numbers & periods</p>
                  </el-row>
                  
                  <p class="use-current-email">Use my current email address instead</p>
                  
                  <!-- Password fields -->
                  <el-row class="input-row">
                    <el-input
                      v-model="input1"
                      :type="show ? 'text' : 'password'"
                      placeholder="Password"
                      class="password-input"
                    />
                    <el-input
                      v-model="input2"
                      :type="show ? 'text' : 'password'"
                      placeholder="Confirm"
                      class="password-input confirm-password"
                    />
                    <p class="hint-text">Use 8 or more characters with a mix of letters, numbers & symbols</p>
                  </el-row>
                  
                  <div class="show-password">
                    <el-checkbox v-model="show" />
                    <label>Show password</label>
                  </div>
                  
                  <div class="action-buttons">
                    <el-row>
                      <el-button 
                        type="primary" 
                        text 
                        class="sign-in-instead" 
                        @click="navigateToSignIn"
                      >
                        Sign in instead
                      </el-button>
                      <el-button 
                        type="primary" 
                        class="next-button" 
                        @click="navigateToSignIn"
                      >
                        Next
                      </el-button>
                    </el-row>
                  </div>
                </div>
              </el-main>

              <el-aside class="image-container">
                <img src="../assets/create.png" class="side-image" alt="Account creation illustration" />
              </el-aside>
            </el-container>
          </div>
        </el-card>
        
        <div class="footer">
          <el-row class="footer-row">
            <el-col :span="11" class="language-selector">
              <el-select
                v-model="language"
                class="language-dropdown"
                placeholder="English (United States)"
              >
                <el-option
                  v-for="item in languageOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-col>
            <el-col :span="1" class="footer-link">Help</el-col>
            <el-col :span="1" class="footer-link">Privacy</el-col>
            <el-col :span="1" class="footer-link">Terms</el-col>
          </el-row>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// Reactive state
const router = useRouter();
const fname = ref('');
const lname = ref('');
const uname = ref('');
const input1 = ref('');
const input2 = ref('');
const show = ref(false);
const language = ref('');

// Google logo URL
const googleImage = "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fplay-lh.googleusercontent.com%2F1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA";

// Language options
const languageOptions = [
  { value: "English(UK)", label: "English(UK)" },
  { value: "English(India)", label: "English(India)" },
  { value: "Spanish", label: "Spanish" },
  { value: "Arabic", label: "Arabic" },
  { value: "French", label: "French" },
  { value: "German", label: "German" },
  { value: "Russian", label: "Russian" },
  { value: "Hindi", label: "Hindi" },
  { value: "Tamil", label: "Tamil" }
];

// Methods
const navigateToSignIn = () => {
  router.push('/');
};
</script>

<style scoped>
.create-account-container {
  font-family: 'Arial', sans-serif;
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.box-card {
  margin-top: 2%;
  width: 60%;
  max-width: 840px;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.form-layout {
  width: 100%;
}

.form-container {
  padding: 24px;
}

.google-logo {
  width: 30%;
  max-width: 100px;
  margin-bottom: 15px;
}

.header-text {
  margin-bottom: 24px;
}

.header-text h2 {
  margin-bottom: 8px;
  font-weight: 500;
  color: #202124;
}

.header-text p {
  margin-top: 0;
  color: #5f6368;
}

.form-fields {
  width: 100%;
}

.input-row {
  margin-bottom: 16px;
  width: 100%;
}

.name-input {
  width: 48%;
}

.last-name {
  margin-left: 4%;
}

.username-input {
  width: 100%;
}

.password-input {
  width: 48%;
}

.confirm-password {
  margin-left: 4%;
}

.hint-text {
  font-size: 13px;
  color: #5f6368;
  margin-top: 4px;
  margin-bottom: 16px;
}

.use-current-email {
  font-size: 15px;
  color: #1a73e8;
  font-weight: 600;
  cursor: pointer;
  margin: 8px 0 16px 0;
}

.show-password {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: -8px;
  margin-bottom: 16px;
}

.action-buttons {
  display: flex;
  margin-top: 24px;
}

.sign-in-instead {
  color: #1a73e8;
  font-weight: 600;
  padding: 0;
}

.next-button {
  margin-left: auto;
  background-color: #1a73e8;
  border-color: #1a73e8;
  padding: 8px 24px;
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
}

.side-image {
  width: 100%;
  max-width: 280px;
  height: auto;
}

.footer {
  margin-top: 24px;
  width: 60%;
  max-width: 840px;
}

.footer-row {
  display: flex;
  align-items: center;
  color: #5f6368;
  font-size: 12px;
}

.language-selector {
  margin-right: auto;
}

.language-dropdown {
  width: 200px;
}

.footer-link {
  margin-left: 24px;
  cursor: pointer;
}

@media (max-width: 768px) {
  .box-card {
    width: 90%;
  }
  
  .footer {
    width: 90%;
  }
  
  .image-container {
    display: none;
  }
  
  .name-input, .password-input {
    width: 100%;
  }
  
  .last-name, .confirm-password {
    margin-left: 0;
    margin-top: 16px;
  }
}
</style>
