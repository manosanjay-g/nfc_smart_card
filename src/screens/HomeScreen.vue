<script setup>
import { computed, onMounted } from "vue";
import { useAdminStore } from "../store/adminStore";
import PatientCard from "../components/home/patientCardComponent.vue";
import DoctorCard from "../components/home/doctorCardComponent.vue";
const adminStore = useAdminStore();

onMounted(() => {
  adminStore.getUsers();
  adminStore.getBranches();
});
</script>

<template>
  <div class="flex flex-col px-8 pb-8 my-4">
    <section id="manageBranchManagers" class="mb-3">
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
      <router-link to="/doctors">
        <p class="text-blue-600 text-center cursor-pointer hover:text-blue-800">
          See more
        </p>
      </router-link>
    </section>
    <section id="manageCustomers">
      <h3 class="text-2xl font-semibold">Recent Patients</h3>
      <ul class="flex flex-col">
        <patient-card
          v-for="(patient, index) in adminStore.getPatients"
          :key="patient._id"
          :city="patient.city"
          :id="patient._id"
          :index="index"
          :name="patient.name"
          :username="patient.username"
        />
      </ul>
      <router-link to="/patients">
        <p class="text-blue-600 text-center cursor-pointer hover:text-blue-800">
          See more
        </p>
      </router-link>
    </section>
    <section id="manageBranches" class="my-3">
      <h3 class="text-2xl font-semibold">Branches</h3>
      <ul class="flex flex-col">
        <li
          v-for="(branch, index) in adminStore.branches"
          class="bg-gray-700 py-3 px-5 my-3 rounded-lg flex flex-row gap-3"
        >
          <p class="font-medium">{{ index + 1 }}</p>
          <p>{{ branch.name }}</p>
          <p>{{ branch.mobile }}</p>
        </li>
      </ul>
      <router-link to="/branches">
        <p class="text-blue-600 text-center cursor-pointer hover:text-blue-800">
          See more
        </p>
      </router-link>
    </section>
  </div>
</template>

<style scoped></style>
