<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";

const route = useRoute();
let userData = ref({});
const loadUserData = async () => {
  try {
    const hallResponse = await axios
      .get("https://nfc-smart-card.herokuapp.com" + "/user/" + route.params.id)
      .then((res) => {
        console.log(res.data);
        userData.value = res.data.user;
      });
  } catch (err) {
    console.log(err);
  }
};

const writeToNFC = () => {
  const ndef = new NDEFReader();
  ndef
    .write(route.params.id)
    .then(() => {
      alert("Card is ready to use.");
    })
    .catch((error) => {
      alert(`Write failed :-( try again: ${error}.`);
    });
};

onMounted(() => {
  loadUserData();
});
</script>

<template>
  <div id="settings-screen" class="flex flex-col justify-center items-center">
    <img
      class="w-48 h-48 rounded-full"
      src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png"
      alt="Rounded avatar"
    />
    <h2 class="text-2xl font-medium">{{ userData.name }}</h2>
    <button class="px-4 py-2 my-2 rounded-md bg-blue-500" @click="writeToNFC">
      Write to card
    </button>
    <h3 class="text-xl font-medium my-4">Personal Information</h3>
    <p><span class="font-medium">Date of birth :</span> {{ userData.dob }}</p>
    <p><span class="font-medium">City :</span> {{ userData.city }}</p>
    <p><span class="font-medium">State :</span> {{ userData.state }}</p>
    <h3 class="text-xl font-medium my-4">Recent visits</h3>
  </div>
</template>
