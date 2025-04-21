<script setup>
import { ref } from 'vue';

const data = [
  {
    employeeName: "John Doe",
    description: "Active employee",
    status: "active",
    employeeID: "EMP001",
    username: "johndoe",
    action: "edit",
  },
  {
    employeeName: "Jane Smith",
    description: "On leave",
    status: "on leave",
    employeeID: "EMP002",
    username: "janesmith",
    action: "edit",
  },
  {
    employeeName: "Alice Johnson",
    description: "Inactive employee",
    status: "inactive",
    employeeID: "EMP003",
    username: "alicejohnson",
    action: "edit",
  }
];

const showModal = ref(false);
const showModalDelete = ref(false);
const modalType = ref('');
const showModalForm = ref({
  employeeName: '',
  description: '',
});
const showModalDeleteForm = ref({
  employeeName: ''
});

const columns = [
  { name: 'name', label: 'Name' },
  { name: 'description', label: 'Description' },
  { name: 'action', label: 'Actions' }
];

function openModal(value, action) {
  modalType.value = action;
  if (action === 'edit' && value) {
    showModalForm.value = { ...value };
  } else {
    showModalForm.value = {
      employeeName: '',
      description: '',
    };
  }
  showModal.value = true;
}

function openModalDelete(value) {
  showModalDeleteForm.value = { ...value };
  showModalDelete.value = true;
}

function openModalAdd() {
  openModal(null, 'add');
}

function saveEmployee() {
  // Implement the logic to save employee
  console.log('Save', showModalForm.value);
  showModal.value = false;
}

function deleteEmployee() {
  // Implement the logic to delete employee
  console.log('Delete', showModalDeleteForm.value);
  showModalDelete.value = false;
}
</script>

<template>
  <div class="mb-4">
    <h1 class="text-2xl font-bold">Add Employees</h1>
    <div class="card p-4 mt-4">
      <div class="flex justify-end items-center mb-4">
        <rs-button @click="openModal(null, 'add')">
          <Icon name="material-symbols:add" class="mr-1"></Icon>
          Add Employee
        </rs-button>
      </div>
      <rs-table
        :data="data"
        :columns="columns"
        :options="{
          variant: 'default',
          striped: true,
          borderless: true,
        }"
        :options-advanced="{
          sortable: true,
          responsive: true,
          filterable: false,
        }"
        advanced
      >
        <template v-slot:action="data">
          <div
            class="flex justify-center items-center"
          >
            <Icon
              name="material-symbols:edit-outline-rounded"
              class="text-primary hover:text-primary/90 cursor-pointer mr-1"
              size="22"
              @click="openModal(data.value, 'edit')"
            ></Icon>
            <Icon
              name="material-symbols:close-rounded"
              class="text-primary hover:text-primary/90 cursor-pointer"
              size="22"
              @click="openModalDelete(data.value)"
            ></Icon>
          </div>
        </template>
      </rs-table>
    </div>
  </div>
  <rs-modal
    :title="modalType == 'edit' ? 'Edit Employee' : 'Add Employee'"
    ok-title="Save"
    :ok-callback="saveEmployee"
    v-model="showModal"
    :overlay-close="false"
  >

   <div class="flex flex-col items-center">
       <div class="relative">
         <div class="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center">
           <Icon name="material-symbols:person-outline" class="text-gray-400 text-6xl"></Icon>
         </div>
         <button class="absolute bottom-0 right-0 bg-purple-600 text-white p-2 rounded-full">
           <Icon name="material-symbols:add" class="text-lg"></Icon>
         </button>
       </div>
       <p class="text-gray-500 text-sm mt-2 text-center">
         Accepts jpg, .png, .gif up to 1MB. Recommended dimensions: 200px X 200px
       </p>
     </div>
    
     <FormKit 
                        type="text" 
                        label="First Name"
                        validation="required"
                        validation-visibility="dirty"
                      >
                        <template #label>
                          <label
                            class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500"
                          >
                            First Name <span class="text-danger">*</span>
                          </label>
                        </template>
                      </FormKit>

                      <FormKit 
                        type="text" 
                        label="Middle Name"
                        validation="required"
                        validation-visibility="dirty"
                      >
                        <template #label>
                          <label
                            class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500"
                          >
                           Middle Name <span class="text-danger">*</span>
                          </label>
                        </template>
                      </FormKit>
                      <FormKit 
                        type="text" 
                        label="Last Name"
                        validation="required"
                        validation-visibility="dirty"
                      >
                        <template #label>
                          <label
                            class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500"
                          >
                            Last Name <span class="text-danger">*</span>
                          </label>
                        </template>
                      </FormKit>
                      <FormKit 
                        type="text" 
                        label="Employee ID"
                        validation="required"
                        validation-visibility="dirty"
                      >
                        <template #label>
                          <label
                            class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500"
                          >
                            Employee ID <span class="text-danger">*</span>
                          </label>
                        </template>
                      </FormKit>

                      <div>
                        <h6> Create Login Details</h6>

                        <FormKit 
                        type="text" 
                        label="username"
                        validation="required"
                        validation-visibility="dirty"
                      >
                        <template #label>
                          <label
                            class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500"
                          >
                            Username <span class="text-danger">*</span>
                          </label>
                        </template>
                      </FormKit>

                      <FormKit
                        type="radio"
                        label="Status"
                        :options="[
                          { value: 'active', label: 'Active' },
                          { value: 'inactive', label: 'Inactive' },
                          { value: 'on_leave', label: 'On Leave' }
                        ]"
                      />

                      <FormKit type="group">
                        <FormKit
                          type="password"
                          name="password"
                          label="Password"
                          help="Enter a new password"
                          validation="required"
                        />
                        <FormKit
                          type="password"
                          name="password_confirm"
                          label="Confirm password"
                          help="Confirm your new password"
                          validation="required|confirm"
                          validation-label="Password confirmation"
                        />
                      </FormKit>

                      </div>
  
    
  </rs-modal>
  <!-- Modal Delete Confirmation -->
  <rs-modal
    title="Delete Confirmation"
    ok-title="Yes"
    cancel-title="No"
    :ok-callback="deleteEmployee"
    v-model="showModalDelete"
    :overlay-close="false"
  >
    <p>
      Are you sure want to delete this employee {{
        showModalDeleteForm.employeeName
      }}?
    </p>
  </rs-modal>
</template>