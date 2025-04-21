<script setup>
import { ref } from 'vue';

const data = [
  {
    name: "John Doe",
    employeeId: "E001",
    employmentStatus: "full_time",
    include: "current",
    supervisorName: "Michael Scott",
    jobTitle: "Manager",
    subUnit: "HR",
    action: "edit",
  },
  {
    name: "Jane Smith",
    employeeId: "E002",
    employmentStatus: "part_time",
    include: "current",
    supervisorName: "Pam Beesly",
    jobTitle: "Analyst",
    subUnit: "Marketing",
    action: "edit",
  },
  {
    name: "Alice Johnson",
    employeeId: "E003",
    employmentStatus: "contract",
    include: "past",
    supervisorName: "Jim Halpert",
    jobTitle: "Developer",
    subUnit: "Engineering",
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
  { name: 'name', label: 'Employee Name' },
  { name: 'employeeId', label: 'Employee ID' },
  { name: 'employmentStatus', label: 'Employment Status' },
  { name: 'include', label: 'Include' },
  { name: 'supervisorName', label: 'Supervisor Name' },
  { name: 'jobTitle', label: 'Job Title' },
  { name: 'subUnit', label: 'Sub Unit' },
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
    <h1 class="text-2xl font-bold">Employee List</h1>
    <div class="card p-4 mt-4">
      <div class="flex justify-end items-center mb-4">
        <rs-button @click="openModal(null, 'add')">
          <Icon name="material-symbols:add" class="mr-1"></Icon>
          Add
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

   <FormKit 
          type="text" 
          label="Employee Name" 
  
        />

        <FormKit 
          type="text" 
          label="Employee Id" 
          placeholder="Type for hints..."
        />

        <FormKit 
          type="select" 
          label="Employment Status" 
          :options="[
            { value: 'full_time', label: 'Full-Time' },
            { value: 'part_time', label: 'Part-Time' },
            { value: 'contract', label: 'Contract' }
          ]"
        />
     
        <FormKit 
          type="select" 
          label="Include" 
          :options="[
            { value: 'current', label: 'Current Employees' },
            { value: 'past', label: 'Past Employees' },
            { value: 'all', label: 'All Employees' }
          ]"
        />
    
        <FormKit 
          type="text" 
          label="Supervisor Name" 
          placeholder="Type for hints..."
        />
    
        <FormKit 
          type="select" 
          label="Job Title" 
          :options="[
            { value: 'developer', label: 'Developer' },
            { value: 'manager', label: 'Manager' },
            { value: 'analyst', label: 'Analyst' }
          ]" 
          placeholder="-- Select --"
        />
     
        <FormKit 
          type="select" 
          label="Sub Unit" 
          :options="[
            { value: 'engineering', label: 'Engineering' },
            { value: 'hr', label: 'Human Resources' },
            { value: 'marketing', label: 'Marketing' }
          ]" 
          placeholder="-- Select --"
        />
      
    
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