<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRoute, useRouter } from "vue-router";
import { useAuthStore } from "../store/authStore";

const router = useRouter();
const route = useRoute();

const beginNFCScan = async () => {
  const ndef = new NDEFReader();
  await ndef.scan();
  ndef.onreading = async (event) => {
    const decoder = new TextDecoder();
    for (const record of event.message.records) {
      console.log("Record type:  " + record.recordType);
      console.log("MIME type:    " + record.mediaType);
      console.log("=== data ===\n" + decoder.decode(record.data));
    }
  };
};
//Load Hall Info
</script>
<template>
  <div id="tap-screen" class="flex flex-col justify-center items-center">
    <div
      class="bg-blue-600 mx-10 text-center py-28 px-56 rounded-md cursor-pointer"
    >
      <font-awesome-icon
        icon="fa-solid fa-wallet"
        class="text-black cursor-pointer text-xl hover:text-white"
      />
    </div>
    <h3 class="my-5 font-bold">Tap on the card to begin pairing</h3>
  </div>
</template>
