<script setup>
import { ref } from 'vue';



const jobTitles = ref([
  { title: 'Software Engineer' },
  { title: 'Data Analyst' },
  { title: 'HR Manager' }
]);

const showTitleModal = ref(false);
const showTitleModalForm = ref({
  title: '',
  department: '',
  description: '',
  documents: null,
});

const selectedTitles = ref([]);
let editingTitle = null;

const openTitleModal = (title = null) => {
  if (title) {
    showTitleModalForm.value.title = title.title;
    editingTitle = title;
  } else {
    showTitleModalForm.value.title = '';
    showTitleModalForm.value.department = '';
    showTitleModalForm.value.description = '';
    showTitleModalForm.value.documents = null;
    editingTitle = null;
  }
  showTitleModal.value = true;
};

const saveJobTitle = () => {
  if (showTitleModalForm.value.title) {
    if (editingTitle) {
      editingTitle.title = showTitleModalForm.value.title;
    } else {
      jobTitles.value.push({ title: showTitleModalForm.value.title });
    }
  }
  showTitleModal.value = false;
};

const deleteJobTitle = (title) => {
  jobTitles.value = jobTitles.value.filter(jt => jt.title !== title.title);
};

const deleteSelectedTitles = () => {
  jobTitles.value = jobTitles.value.filter(jt => !selectedTitles.value.includes(jt.title));
  selectedTitles.value = [];
};

const employmentStatusOptions = [
  { label: "Full-Time", value: "full-time" },
  { label: "Part-Time", value: "part-time" },
  { label: "Contract", value: "contract" },
];

const includeOptions = [
  { label: "Current Employees Only", value: "current" },
  { label: "All Employees", value: "all" },
];

const jobTitleOptions = [
  { label: "Developer", value: "developer" },
  { label: "Jr.Developer", value: "jr.developer" },
  { label: "UI/UX Developer", value: "UI/UX developer" },
];

const subUnitOptions = [
  { label: "Toyyibpay Sdn Bhd", value: "toyyibpay" },
  { label: "Unit Developer RnD", value: "rnd" },
  { label: "Corrad Software", value: "corrad" },
  { label: "Product", value: "product" },
  { label: "fdsfsd", value: "fdsfsd" },
];


function search() {
  alert("Search triggered");
}

function resetForm() {
  alert("Form reset");
}

</script>

<template>
  <div class="p-4">
 
    <rs-card class="p-4 mt-8">
      <div class="flex justify-between items-center mb-4">
        <h1 class="text-2xl font-bold" style="font-family: Arial;">Employee List </h1>
        <button class="bg-green-600 text-white py-2 px-4 rounded-full" @click="openTitleModal()" style="font-family: Arial;">+ Add</button>
      </div>
      <hr class="mb-4">
      <p class="text-gray-600 mb-4" style="font-family: Arial;">({{ jobTitles.length }}) Records Found</p>
      <div class="flex justify-between items-center mb-4">
        <p class="text-gray-600" style="font-family: Arial;">({{ selectedTitles.length }}) Records Selected</p>
        <button v-if="selectedTitles.length > 0" class="bg-red-400 text-white py-2 px-4 rounded-full" @click="deleteSelectedTitles" style="font-family: Arial;">Delete Selected</button>
      </div>
      <div class="grid grid-cols-1 gap-4">
        <rs-card v-for="title in jobTitles" :key="title.title" class="p-4 bg-gray-100 rounded-lg relative">
          <div class="flex justify-between items-center">
            <div class="flex items-center gap-2">
              <input type="checkbox" v-model="selectedTitles" :value="title.title" />
              <div>
                <h6 class="font-semibold text-gray-700" style="font-family: Arial;">Employee List </h6>
                <p class="text-gray-500 text-lg" style="font-family: Arial;">{{ title.title }}</p>
              </div>
            </div>
            <div class="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-2">
              <button class="bg-green-200 text-gray-700 p-2 rounded-full" @click="openTitleModal(title)">
                <Icon name="material-symbols:edit-outline-rounded" class="text-lg"></Icon>
              </button>
              <button class="bg-red-200 text-gray-700 p-2 rounded-full" @click="deleteJobTitle(title)">
                <Icon name="material-symbols:delete-outline" class="text-lg"></Icon>
              </button>
            </div>
          </div>
        </rs-card>
      </div>


      <rs-modal title="Human Resources SOP" v-model="showTitleModal" ok-title="Save" :ok-callback="saveJobTitle">
        <div class="grid grid-cols-1 gap-4">
          <div>
        <FormKit 
          type="text" 
          label="Employee Name" 
          placeholder="Type for hints..."
        />
      <div>
        <FormKit 
          type="text" 
          label="Employee Id" 
          placeholder="Type for hints..."
        />
      </div>
      </div>
      <div>
        <FormKit 
          type="select" 
          label="Employment Status" 
          :options="employmentStatusOptions"
        />
      </div>
      <div>
        <FormKit 
          type="select" 
          label="Include" 
          :options="includeOptions"
        />
      </div>
      <div>
        <FormKit 
          type="text" 
          label="Supervisor Name" 
          placeholder="Type for hints..."
        />
      </div>
      <div>
        <FormKit 
          type="select" 
          label="Job Title" 
          :options="jobTitleOptions" 
          placeholder="-- Select --"
        />
      </div>
      <div>
        <FormKit 
          type="select" 
          label="Sub Unit" 
          :options="subUnitOptions" 
          placeholder="-- Select --"
        />
      </div>
      <div class="flex gap-4 mt-4">
        <rs-button variant="secondary" @click="resetForm">Reset</rs-button>
        <rs-button variant="primary" @click="search">Search</rs-button>
      </div>
    </div>
        <FormKit type="textarea" placeholder="Type your messages here ..." label="Description" help="Enter a comment about the document." />
      </rs-modal>
    </rs-card>
  </div>
</template>

<style scoped>
/* Add any additional styles here */
.rs-card {
  border-radius: 10px;
  font-family: Arial;
}
</style>