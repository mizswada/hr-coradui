<script setup>
import { ref } from 'vue';

const data = [
  {
    name: "Employee Onboarding",
    department: "Human Resources",
    description: "Standard operating procedure for onboarding new employees.",
    documents: "",
    action: "edit",
  },
  {
    name: "Annual Leave Policy",
    department: "Human Resources",
    description: "Guidelines for employees to apply for annual leave.",
    documents: "",
    action: "edit",
  }
];

const showModal = ref(false);
const showModalDelete = ref(false);
const modalType = ref('');
const showModalForm = ref({
  sopTitle: '',
  sopNumber: '',
  effectiveDate: '',
  department: '',
  description: '',
});
const showModalDeleteForm = ref({
  sopTitle: ''
});

const columns = [
  { name: 'sopTitle', label: 'SOP Title' },
  { name: 'sopNumber', label: 'SOP Number' },
  { name: 'documents', label: 'Documents' },
  { name: 'action', label: 'Actions' }
];

function openModal(value, action) {
  modalType.value = action;
  if (action === 'edit' && value) {
    showModalForm.value = { ...value };
  } else {
    showModalForm.value = {
      sopTitle: '',
      sopNumber: '',
      effectiveDate: '',
      department: '',
      description: '',
    };
  }
  showModal.value = true;
}

function openModalDelete(value) {
  showModalDeleteForm.value = { ...value };
  showModalDelete.value = true;
}

function saveSOP() {
  console.log('Save', showModalForm.value);
  showModal.value = false;
}

function deleteSOP() {
  console.log('Delete', showModalDeleteForm.value);
  showModalDelete.value = false;
}
</script>

<template>
  <div class="mb-4">
    <h1 class="text-2xl font-bold">Human Resources SOP</h1>
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
        <template v-slot:documents="data">
          <a :href="data.value" target="_blank" class="text-blue-500 underline">View Document</a>
        </template>
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
    :title="modalType == 'edit' ? 'Edit SOP' : 'Add SOP'"
    ok-title="Save"
    :ok-callback="saveSOP"
    v-model="showModal"
    :overlay-close="false"
  > 
  <FormKit 
            type="text"        
            name="name" 
            label="Name" 
            validation="required" 
            style="font-family: Arial;" 
          />

          <FormKit 
            type="select" 
            name="department" 
            label="Department" 
            :options="[
              { value: 'Human Resources', label: 'Human Resources' },
              { value: 'Finance', label: 'Finance' },
              { value: 'IT', label: 'IT' },
              { value: 'Marketing', label: 'Marketing' },
              { value: 'Operations', label: 'Operations' }
            ]" 
            style="font-family: Arial;" 
          />

          <FormKit 
            type="textarea" 
            name="description" 
            label="Description" 
            placeholder="Type your messages here ..." 
            style="font-family: Arial;" 
          />

          <FormKit 
            type="file" 
            name="documents" 
            label="Documents" 
            help="Select as many documents as you would like." 
            style="font-family: Arial;" 
          />

   
  </rs-modal>
  <!-- Modal Delete Confirmation -->
  <rs-modal
    title="Delete Confirmation"
    ok-title="Yes"
    cancel-title="No"
    :ok-callback="deleteSOP"
    v-model="showModalDelete"
    :overlay-close="false"
  >
    <p>
      Are you sure want to delete this SOP {{
        showModalDeleteForm.sopTitle
      }}?
    </p>
  </rs-modal>
</template>