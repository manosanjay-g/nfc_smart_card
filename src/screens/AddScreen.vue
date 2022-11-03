<script setup>
import { computed, onMounted, ref } from "vue";
import { useUserStore } from "../store/userStore";
import { useAdminStore } from "../store/adminStore";
const userStore = useUserStore();
const adminStore = useAdminStore();

const addUser = ref(false);

const userPayload = ref({
  name: "",
  registeredAs: "",
  username: "",
  email: "",
  password: "",
  mobile: "",
  dob: "",
  add1: "",
  add2: "",
  city: "",
  state: "",
});

const handleAddUser = () => {
  if (
    userPayload.value.name == "" ||
    userPayload.value.registerAs == "" ||
    userPayload.value.username == "" ||
    userPayload.value.email == "" ||
    userPayload.value.password == "" ||
    userPayload.value.mobile == "" ||
    userPayload.value.dob == "" ||
    userPayload.value.add1 == "" ||
    userPayload.value.add2 == "" ||
    userPayload.value.city == "" ||
    userPayload.value.state == ""
  ) {
    alert("All inputs are required");
  } else {
    userStore.addUser(userPayload.value);
  }
};

const changeAddUserTrue = () => {
  addUser.value = true;
};
const changeAddUserFalse = () => {
  addUser.value = false;
};

onMounted(() => {
  adminStore.getUsers();
  adminStore.getBranches();
});
</script>
<template>
  <div id="add-screen" class="flex flex-col gap-6">
    <ul class="flex flex-row justify-center gap-5 px-4 min-w-full">
      <li>
        <button
          class="bg-blue-600 my-3 text-sm py-2 px-4 rounded-lg hover:bg-blue-800"
          type="submit"
          @click="changeAddUserTrue"
        >
          Add User
        </button>
      </li>

      <li>
        <button
          class="bg-blue-600 my-3 py-2 px-4 text-sm rounded-lg hover:bg-blue-800"
          type="submit"
          @click="changeAddUserFalse"
        >
          Add Branch
        </button>
      </li>
    </ul>
    <div id="addUser" v-if="addUser">
      <div class="text-2xl font-semibold text-center">Add User</div>
      <form
        class="flex flex-col my-3 w-full"
        @submit.prevent="handleAddUser"
        method="post"
      >
        <input
          class="my-3 py-2 px-4 rounded-lg mx-8 bg-gray-700"
          type="text"
          placeholder="User's Name"
          v-model="userPayload.name"
        />
        <select
          v-model="userPayload.registeredAs"
          class="my-3 py-2 px-4 rounded-lg mx-8 bg-gray-700"
        >
          <option value="" disabled selected>Registered As</option>
          <option value="Patient">Patient</option>
          <option value="Doctor">Doctor</option>
        </select>
        <input
          class="my-3 py-2 px-4 rounded-lg mx-8 bg-gray-700"
          type="text"
          v-model="userPayload.username"
          placeholder="Username"
        />
        <input
          class="my-3 py-2 px-4 rounded-lg mx-8 bg-gray-700"
          type="text"
          v-model="userPayload.email"
          placeholder="User's Email"
        />
        <input
          class="my-3 py-2 px-4 rounded-lg mx-8 bg-gray-700"
          type="text"
          v-model="userPayload.password"
          placeholder="User's Password"
        />
        <input
          class="my-3 py-2 px-4 rounded-lg mx-8 bg-gray-700"
          type="text"
          v-model="userPayload.mobile"
          placeholder="Mobile Number"
        />
        <input
          class="my-3 py-2 px-4 rounded-lg mx-8 bg-gray-700"
          type="text"
          v-model="userPayload.dob"
          placeholder="DOB"
        />
        <input
          class="my-3 py-2 px-4 rounded-lg mx-8 bg-gray-700"
          type="text"
          v-model="userPayload.add1"
          placeholder="Address Line 1"
        />
        <input
          class="my-3 py-2 px-4 rounded-lg mx-8 bg-gray-700"
          type="text"
          v-model="userPayload.add2"
          placeholder="Address Line 2"
        />
        <input
          class="my-3 py-2 px-4 rounded-lg mx-8 bg-gray-700"
          type="text"
          v-model="userPayload.city"
          placeholder="City"
        />
        <input
          class="my-3 py-2 px-4 rounded-lg mx-8 bg-gray-700"
          type="text"
          v-model="userPayload.state"
          placeholder="State"
        />

        <button
          class="bg-blue-600 my-3 py-2 px-4 rounded-lg mx-8 hover:bg-blue-800"
          type="submit"
        >
          Add User
        </button>
      </form>
    </div>
    <div id="addBranch" v-if="!addUser">
      <div class="text-2xl font-semibold text-center">Add Branch</div>
      <form class="flex flex-col my-3 w-full">
        <input
          class="my-3 py-2 px-4 rounded-lg mx-8 bg-gray-700"
          type="text"
          placeholder="Branch's Name"
        />
        <input
          class="my-3 py-2 px-4 rounded-lg mx-8 bg-gray-700"
          type="text"
          placeholder="Branch's Username"
        />
        <input
          class="my-3 py-2 px-4 rounded-lg mx-8 bg-gray-700"
          type="text"
          placeholder="Branch's Email"
        />
        <input
          class="my-3 py-2 px-4 rounded-lg mx-8 bg-gray-700"
          type="text"
          placeholder="Branch's Password"
        />
        <input
          class="my-3 py-2 px-4 rounded-lg mx-8 bg-gray-700"
          type="text"
          placeholder="Mobile Number"
        />
        <input
          class="my-3 py-2 px-4 rounded-lg mx-8 bg-gray-700"
          type="text"
          placeholder="DOI"
        />
        <input
          class="my-3 py-2 px-4 rounded-lg mx-8 bg-gray-700"
          type="text"
          placeholder="Address Line 1"
        />
        <input
          class="my-3 py-2 px-4 rounded-lg mx-8 bg-gray-700"
          type="text"
          placeholder="Address Line 2"
        />
        <input
          class="my-3 py-2 px-4 rounded-lg mx-8 bg-gray-700"
          type="text"
          placeholder="City"
        />
        <input
          class="my-3 py-2 px-4 rounded-lg mx-8 bg-gray-700"
          type="text"
          placeholder="State"
        />

        <button
          class="bg-blue-600 my-3 py-2 px-4 rounded-lg mx-8 hover:bg-blue-800"
          type="submit"
        >
          Add Branch
        </button>
      </form>
    </div>
  </div>
</template>
