<script setup>
import { reactive } from "vue";
import { useAuthStore } from "../store/authStore";
const authStore = useAuthStore();
const loginInfo = reactive({
  email: "",
  password: "",
});
const handleSubmit = () => {
  if (loginInfo.email == "" || loginInfo.password == "") {
    alert("All inputs are required");
  } else {
    authStore.login(loginInfo);
  }
};
</script>

<template>
  <div class="justify-center flex flex-col items-center h-screen w-full">
    <div class="text-3xl font-semibold mb-5">Login</div>
    <div
      class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
      role="alert"
      v-if="authStore.error != null"
    >
      <span class="block sm:inline"> {{ authStore.getErrorMessage }}</span>
    </div>
    <form
      class="flex flex-col my-3 w-full"
      @submit.prevent="handleSubmit"
      method="post"
    >
      <input
        class="my-3 py-2 px-4 rounded-lg mx-16 bg-gray-700"
        type="email"
        name=""
        id="emailInput"
        v-model="loginInfo.email"
        placeholder="Enter your email"
      />
      <input
        class="my-3 py-2 px-4 rounded-lg mx-16 bg-gray-700"
        type="password"
        name=""
        v-model="loginInfo.password"
        id="passwordInput"
        placeholder="Enter your password"
      />
      <button
        class="bg-blue-600 my-3 py-2 px-4 rounded-lg mx-16 hover:bg-blue-800"
        type="submit"
      >
        Log In
      </button>
    </form>
    <p class="text-blue-600 cursor-pointer hover:text-blue-800">
      Forgot Password?
    </p>
  </div>
</template>

<style scoped></style>
