<template>
  <div class="create-account-container">
    <form class="create-account-form" @submit.prevent="onCreateAccount">
      <h2 class="form-title">Create Account</h2>
      <div class="form-group">
        <label for="fname">First Name</label>
        <input
          id="fname"
          v-model="fname"
          type="text"
          class="form-input"
          required
        />
      </div>
      <div class="form-group">
        <label for="lname">Last Name</label>
        <input
          id="lname"
          v-model="lname"
          type="text"
          class="form-input"
          required
        />
      </div>
      <div class="form-group">
        <label for="username">Username</label>
        <input
          id="username"
          v-model="username"
          type="text"
          class="form-input"
          required
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          id="password"
          v-model="password"
          type="password"
          class="form-input"
          required
        />
      </div>
      <div class="form-group">
        <label for="confirm">Confirm Password</label>
        <input
          id="confirm"
          v-model="confirm"
          type="password"
          class="form-input"
          required
        />
      </div>
      <button class="create-btn" type="submit">Create Account</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const fname = ref("");
const lname = ref("");
const username = ref("");
const password = ref("");
const confirm = ref("");

function onCreateAccount() {
  if (password.value !== confirm.value) {
    alert("Passwords do not match!");
    return;
  }
  // For demo, just alert the details
  alert(
    `Account created for ${fname.value} ${lname.value} (username: ${username.value})`
  );
}
</script>

<style scoped>
.create-account-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}
.create-account-form {
  background: #fff;
  padding: 2.5rem 2rem 2rem 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
  min-width: 320px;
  width: 100%;
  max-width: 370px;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
.form-title {
  text-align: center;
  color: #1a73e8;
  margin-bottom: 0.5rem;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 1px;
}
.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.form-input {
  padding: 0.75rem 1rem;
  border: 1px solid #dadce0;
  border-radius: 5px;
  font-size: 1rem;
  background: #f7fafd;
  transition: border-color 0.2s;
}
.form-input:focus {
  border-color: #1a73e8;
  outline: none;
}
.create-btn {
  background: #1a73e8;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 0.75rem 0;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 0.5rem;
  transition: background 0.2s;
}
.create-btn:hover {
  background: #1765cc;
}
</style>
