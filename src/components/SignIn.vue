<template>
  <div class="sign-in-container">
    <el-container>
      <el-main class="main">
        <el-card class="box-card">
          <div class="card-content">
            <div class="header">
              <img :src="googleImage" class="google-logo" alt="Google Logo" />
              <h3 class="title">Sign in</h3>
              <h4 class="subtitle">to continue to Gmail</h4>
            </div>

            <div class="email-input-container">
              <el-input
                type="text"
                v-model="email"
                placeholder="Email or Phone"
                class="email-input"
              />
              <el-button
                @click="navigateToFindAccount"
                type="primary"
                text
                class="forgot-email-link"
              >
                Forgot email?
              </el-button>
            </div>

            <div class="guest-mode-info">
              <p class="info-text">
                Not your computer? Use guest mode to sign in privately
              </p>
              <p class="learn-more-link">Learn More...</p>
            </div>

            <div class="action-buttons">
              <el-button
                type="primary"
                text
                class="create-account-btn"
                @click="navigateToCreateAccount"
              >
                Create Account
              </el-button>
              <el-button
                type="primary"
                class="next-button"
                @click="navigateToPassword"
              >
                Next
              </el-button>
            </div>
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
import { ref } from "vue";
import { useRouter } from "vue-router";

// Reactive state
const router = useRouter();
const email = ref("gowtham@gmail.com");
const language = ref("");

// Google logo URL
const googleImage =
  "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fplay-lh.googleusercontent.com%2F1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA";

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
  { value: "Tamil", label: "Tamil" },
];

// Navigation methods
const navigateToFindAccount = () => {
  router.push("/find");
};

const navigateToCreateAccount = () => {
  router.push("/create");
};

const navigateToPassword = () => {
  router.push(`/password/${email.value}`);
};
</script>

<style scoped>
.sign-in-container {
  font-family: "Arial", sans-serif;
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.box-card {
  margin-top: 4%;
  width: 450px;
  max-width: 90%;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.card-content {
  padding: 24px 32px;
}

.header {
  text-align: center;
  margin-bottom: 24px;
}

.google-logo {
  width: 100px;
  margin-bottom: 16px;
}

.title {
  margin: 0 0 8px;
  font-weight: 500;
  color: #202124;
  font-size: 24px;
}

.subtitle {
  margin: 0;
  font-weight: normal;
  color: #5f6368;
  font-size: 16px;
}

.email-input-container {
  margin-bottom: 16px;
}

.email-input {
  height: 50px;
  font-size: 16px;
}

.forgot-email-link {
  color: #1a73e8;
  font-weight: 600;
  margin-top: 8px;
  padding: 0;
}

.guest-mode-info {
  margin-top: 24px;
}

.info-text {
  font-size: 14px;
  color: #5f6368;
  margin: 0 0 4px;
}

.learn-more-link {
  color: #1a73e8;
  font-weight: 600;
  margin: 0;
  cursor: pointer;
  font-size: 14px;
}

.action-buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
}

.create-account-btn {
  color: #1a73e8;
  font-weight: 600;
  padding: 0;
}

.next-button {
  background-color: #1a73e8;
  border-color: #1a73e8;
  padding: 8px 24px;
}

.footer {
  margin-top: 24px;
  width: 450px;
  max-width: 90%;
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
    margin-left: auto;
    margin-right: auto;
  }

  .footer {
    width: 90%;
  }
}
</style>
