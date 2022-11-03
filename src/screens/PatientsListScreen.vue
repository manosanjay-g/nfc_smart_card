<script setup>
import { onMounted } from "vue";
import { useAdminStore } from "../store/adminStore";
import PatientCard from "../components/home/patientCardComponent.vue";
const adminStore = useAdminStore();

onMounted(() => {
  adminStore.getUsers();
});
</script>
<template>
  <div class="flex flex-col px-8 pb-8 my-4">
    <h3 class="text-2xl font-semibold">Patients</h3>
    <ul class="flex flex-col">
      <patient-card
        v-for="(patient, index) in adminStore.getPatients"
        :city="patient.city"
        :id="patient._id"
        :index="index"
        :key="patient._id"
        :name="patient.name"
        :username="patient.username"
      />
    </ul>
  </div>
</template>
