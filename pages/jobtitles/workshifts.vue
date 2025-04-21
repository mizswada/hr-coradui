<script setup>
import { ref } from 'vue';

const data = [
  {
    name: "Morning Shift",
    from: "08:00 AM",
    to: "04:00 PM",
    hoursPerDay: 8,
    action: "edit",
  },
  {
    name: "Afternoon Shift",
    from: "04:00 PM",
    to: "12:00 AM",
    hoursPerDay: 8,
    action: "edit",
  },
  {
    name: "Night Shift",
    from: "12:00 AM",
    to: "08:00 AM",
    hoursPerDay: 8,
    action: "edit",
  },
  {
    name: "Weekend Shift",
    from: "09:00 AM",
    to: "05:00 PM",
    hoursPerDay: 8,
    action: "edit",
  },
  {
    name: "Holiday Shift",
    from: "10:00 AM",
    to: "06:00 PM",
    hoursPerDay: 8,
    action: "edit",
  }
];

const showModal = ref(false);
const showModalDelete = ref(false);
const modalType = ref('');
const showModalForm = ref({
  shiftName: '',
  description: '',
});
const showModalDeleteForm = ref({
  shiftName: ''
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
      shiftName: '',
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

function saveShift() {
  // Implement the logic to save shift
  console.log('Save', showModalForm.value);
  showModal.value = false;
}

function deleteShift() {
  // Implement the logic to delete shift
  console.log('Delete', showModalDeleteForm.value);
  showModalDelete.value = false;
}
</script>

<template>
  <div class="mb-4">
    <h1 class="text-2xl font-bold">Work Shifts</h1>
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
    :title="modalType == 'edit' ? 'Edit Work Shift' : 'Add Work Shift'"
    ok-title="Save"
    :ok-callback="saveShift"
    v-model="showModal"
    :overlay-close="false"
  >
    <FormKit type="text" name="name" label="Name" style="font-family: Arial;" />
    <FormKit type="text" name="from" label="From" style="font-family: Arial;" />
    <FormKit type="text" name="to" label="To" style="font-family: Arial;" />
    <FormKit type="number" name="hoursPerDay" label="Hours Per Day" style="font-family: Arial;" :value="0" />
  </rs-modal>
  <!-- Modal Delete Confirmation -->
  <rs-modal
    title="Delete Confirmation"
    ok-title="Yes"
    cancel-title="No"
    :ok-callback="deleteShift"
    v-model="showModalDelete"
    :overlay-close="false"
  >
    <p>
      Are you sure want to delete this work shift {{
        showModalDeleteForm.shiftName
      }}?
    </p>
  </rs-modal>
</template>