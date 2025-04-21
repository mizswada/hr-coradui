<script setup>
import { ref } from 'vue';

const data = [
  {
    name: "Ahmad bin Ali",
    description: "Handles customer account management and transactions.",
    email: "ahmad.ali@example.com",
    date: "2023-10-01",
    office: "ANSI",
    action: "edit",
  },
  {
    name: "Siti binti Aminah",
    description: "Responsible for loan processing and approvals.",
    email: "siti.aminah@example.com",
    date: "2023-10-02",
    office: "CORRAD SOFTWARE SDN BHD",
    action: "edit",
  },
  {
    name: "Ali bin Hassan",
    description: "Manages digital banking services and platforms.",
    email: "ali.hassan@example.com",
    date: "2023-10-03",
    office: "ARTIFICIAL INTELLIGENCE SDN BHD",
    action: "edit",
  },
  {
    name: "Nurul binti Rahman",
    description: "Oversees compliance and regulatory requirements.",
    email: "nurul.rahman@example.com",
    date: "2023-10-04",
    office: "TOYYIBPAY SDN BHD",
    action: "edit",
  },
  {
    name: "Hafiz bin Karim",
    description: "Provides customer support for banking inquiries.",
    email: "hafiz.karim@example.com",
    date: "2023-10-05",
    office: "DATASCIENCE SDN BHD",
    action: "edit",
  }
];

const showModal = ref(false);
const showModalDelete = ref(false);
const modalType = ref('');
const showModalForm = ref({
  skillName: '',
  description: '',
});
const showModalDeleteForm = ref({
  skillName: ''
});

const columns = [
  { name: 'name', label: 'Name' },
  { name: 'description', label: 'Description' },
  { name: 'action', label: 'Actions' }
];

import { DateTime } from "luxon";
        
        const dt = DateTime.now();

        const date = dt.toISODate();

 const title = [
        { label: "select", value: "my", attrs: { disabled: true } },,
                        "Programmer",
                        "Developer",
                        "Designer",

                        ];

                       
                        const categories = [
        { label: "select", value: "my", attrs: { disabled: true } },,
                        "Sales Manager",
                        "Sales Executive",
                        "Sales Associate",

                        ];

function openModal(value, action) {
  modalType.value = action;
  if (action === 'edit' && value) {
    showModalForm.value = { ...value };
  } else {
    showModalForm.value = {
      skillName: '',
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

function saveSkill() {
  // Implement the logic to save user
  console.log('Save', showModalForm.value);
  showModal.value = false;
}

function deleteSkill() {
  // Implement the logic to delete user
  console.log('Delete', showModalDeleteForm.value);
  showModalDelete.value = false;
}
</script>

<template>
  <div class="mb-4">
    <h1 class="text-2xl font-bold">e-Banker</h1>
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
    :title="modalType == 'edit' ? 'Edit Data' : 'Add Data'"
    ok-title="Save"
    :ok-callback="saveSkill"
    v-model="showModal"
    :overlay-close="false"
  >

  <FormKit 
    type="text" 
    label="Required Validation"
    validation="required"
    validation-visibility="dirty"
  >
    <template #label>
      <label
        class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm"
      >
        Name <span class="text-danger">*</span>
      </label>
    </template>
  </FormKit>

  <FormKit type="date" :value="date" label="Date" />

  <FormKit 
                        type="text" 
                        label="Email"
                        validation="email"
                        validation-visibility="dirty"
                      />

    
                      <FormKit
                        type="select"
                        label="Office"
                        :options="[
                          { label: 'Select', value: '', attrs: { disabled: true } },
                          { label: 'ANSI', value: 'ansi' },
                          { label: 'CORRAD SOFTWARE SDN BHD', value: 'corrad_software_sdn_bhd' },
                          { label: 'ARTIFICIAL INTELLIGENCE SDN BHD', value: 'artificial_intelligence_sdn_bhd' },
                          { label: 'TOYYIBPAY SDN BHD', value: 'toyyibpay_sdn_bhd' },
                          { label: 'DATASCIENCE SDN BHD', value: 'datascience_sdn_bhd' }
                        ]"
                      />
    <FormKit
      type="textarea"
      v-model="showModalForm.description"
      name="description"
      label="Description"
    />
    
    
  </rs-modal>
  <!-- Modal Delete Confirmation -->
  <rs-modal
    title="Delete Confirmation"
    ok-title="Yes"
    cancel-title="No"
    :ok-callback="deleteSkill"
    v-model="showModalDelete"
    :overlay-close="false"
  >
    <p>
      Are you sure want to delete this data {{
        showModalDeleteForm.skillName
      }}?
    </p>
  </rs-modal>
</template>