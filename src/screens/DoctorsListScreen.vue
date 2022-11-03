<script setup>
import { onMounted } from "vue";
import { useAdminStore } from "../store/adminStore";
import DoctorCard from "../components/home/doctorCardComponent.vue";
const adminStore = useAdminStore();

onMounted(() => {
  adminStore.getUsers();
});
</script>
<template>
  <div class="flex flex-col px-8 pb-8 my-4">
    <h3 class="text-2xl font-semibold">Doctors</h3>
    <ul class="flex flex-col">
      <doctor-card
        v-for="(doctor, index) in adminStore.getManagers"
        :city="doctor.city"
        :id="doctor._id"
        :index="index"
        :key="doctor._id"
        :name="doctor.name"
        :username="doctor.username"
      />
    </ul>
  </div>
</template>
