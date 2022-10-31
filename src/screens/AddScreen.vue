<template>
  <div id="add-screen" class="flex flex-col gap-6">
    <ul class="flex flex-row justify-center gap-5 px-4 min-w-full">
      <li>
        <button
          class="bg-blue-600 my-3 text-sm py-2 px-4 rounded-lg hover:bg-blue-800"
          type="submit"
        >
          Add Managers
        </button>
      </li>
      <li>
        <button
          class="bg-blue-600 my-3 py-2 px-4 text-sm rounded-lg hover:bg-blue-800"
          type="submit"
        >
          Add Branch
        </button>
      </li>
      <li>
        <button
          class="bg-blue-600 my-3 py-2 px-4 text-sm rounded-lg hover:bg-blue-800"
          type="submit"
        >
          Add Customers
        </button>
      </li>
    </ul>
    <div id="addManager">
      <div class="text-2xl font-semibold text-center">Add Manager</div>
      <form class="flex flex-col my-3 w-full">
        <input
          class="my-3 py-2 px-4 rounded-lg mx-8 bg-gray-700"
          type="text"
          placeholder="Manager's Name"
        />
        <input
          class="my-3 py-2 px-4 rounded-lg mx-8 bg-gray-700"
          type="text"
          placeholder="Manager's Email"
        />
        <input
          class="my-3 py-2 px-4 rounded-lg mx-8 bg-gray-700"
          type="text"
          placeholder="Manager's Password"
        />
        <select class="my-3 py-2 px-4 rounded-lg mx-8 bg-gray-700">
          <option value="" disabled selected>Select the branch</option>
          <option value="Ashok Nagar">Ashok Nagar</option>
          <option value="K.K Nagar">K.K Nagar</option>
          <option value="Anna Nagar">Anna Nagar</option>
        </select>
        <button
          class="bg-blue-600 my-3 py-2 px-4 rounded-lg mx-8 hover:bg-blue-800"
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  </div>
</template>
