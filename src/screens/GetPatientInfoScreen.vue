<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRoute, useRouter } from "vue-router";
import { useAuthStore } from "../store/authStore";

const router = useRouter();
const route = useRoute();

const data = ref("")

const beginNFCScan = async () => {
  const ndef = new NDEFReader();
  await ndef.scan();
  ndef.onreading = async (event) => {
    const decoder = new TextDecoder();
    for (const record of event.message.records) {
      console.log("Record type:  " + record.recordType);
      console.log("MIME type:    " + record.mediaType);
      alert("=== New Patient Detected! ===\n" + decoder.decode(record.data));
      data.value = record.data
    }
  };
};
//Load Hall Info
</script>
<template>
  <div id="tap-screen" class="flex flex-col justify-center items-center">
    <button class="px-4 py-2 rounded-md bg-blue-500" @click="beginNFCScan">
      Read card
    </button>
    <h3 class="my-5 font-bold">Tap on the card to begin pairing</h3>
    <p>{{data}}</p>
  </div>
</template>
