<script setup>
import { ref } from 'vue';

const data = [
  {
    name: "Programmer",
    description: "Job in programming field",
    action: "edit",
  },
  {
    name: "Designer",
    description: "Job in designing field",
    action: "edit",
  },
  {
    name: "Sales Manager",
    description: "Job in sales management",
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

        const dateStart = dt.plus({ days: -7 }).toFormat("yyyy-MM-dd");
        const dateEnd = dt.plus({ days: 7 }).toFormat("yyyy-MM-dd");

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
    <h1 class="text-2xl font-bold">Jobs</h1>
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
    :title="modalType == 'edit' ? 'Edit Job' : 'Add Job'"
    ok-title="Save"
    :ok-callback="saveSkill"
    v-model="showModal"
    :overlay-close="false"
  >
  <FormKit
                        type="date"
                        label="Date"
                        help="Enter date (the date must be between 6/6/2022 and 20/6/2022)"
                        :validation="[['date_between', dateStart, dateEnd]]"
                        validation-visibility="live"
                      />

    <FormKit
                        type="select"
                        label="Job title"
                        :options="title"
                      />
                      <FormKit type="text" label="Job Specification" value="Not Specified" readonly/>
                      <FormKit
                        type="select"
                        label="Job Category"
                        :options="categories"
                      />
                      <FormKit
                        type="select"
                        label="Sub Unit"
                        :options="[{ label: 'Select', value: '', attrs: { disabled: true } }, 'HR', 'Finance', 'IT']"
                      />
                      <FormKit
                        type="select"
                        label="Location"
                        :options="[{ label: 'Select', value: '', attrs: { disabled: true } }, 'New York', 'London', 'Tokyo']"
                      />
                      <FormKit
                        type="select"
                        label="Employment Status"
                        :options="[{ label: 'Select', value: '', attrs: { disabled: true } }, 'Full-Time', 'Part-Time', 'Contract']"
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
      Are you sure want to delete this job {{
        showModalDeleteForm.skillName
      }}?
    </p>
  </rs-modal>
</template>