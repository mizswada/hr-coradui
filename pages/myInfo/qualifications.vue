<script setup>
import { ref } from 'vue';

const jobTitles = ref([
  { id: 1, title: 'Software Engineer' },
  { id: 2, title: 'Project Manager' },
  { id: 3, title: 'Data Analyst' },
]);

const educationRecords = ref([
  { id: 1, level: 'Bachelor of Science in Computer Science' },
  { id: 2, level: 'Master of Business Administration' },
]);

const skillsRecords = ref([
  { id: 1, skill: 'JavaScript' },
  { id: 2, skill: 'Python' },
  { id: 3, skill: 'SQL' },
]);

const languagesRecords = ref([
  { id: 1, language: 'English' },
  { id: 2, language: 'Spanish' },
]);

const licensesRecords = ref([
  { id: 1, license: 'Driver’s License - Class B' },
  { id: 2, license: 'Certified Scrum Master' },
]);

const attachmentsRecords = ref([
  { id: 1, attachment: 'Resume.pdf' },
  { id: 2, attachment: 'Portfolio.zip' },
]);

const showModal = ref(false);
const showModalDelete = ref(false);
const modalType = ref('');
const showModalForm = ref({});
const showModalDeleteForm = ref({});
const currentTable = ref('');

const columns = {
  jobTitles: [
    { name: 'title', label: 'Title' },
    { name: 'action', label: 'Actions' },
  ],
  educationRecords: [
    { name: 'level', label: 'Level' },
    { name: 'action', label: 'Actions' },
  ],
  skillsRecords: [
    { name: 'skill', label: 'Skill' },
    { name: 'action', label: 'Actions' },
  ],
  languagesRecords: [
    { name: 'language', label: 'Language' },
    { name: 'action', label: 'Actions' },
  ],
  licensesRecords: [
    { name: 'license', label: 'License' },
    { name: 'action', label: 'Actions' },
  ],
  attachmentsRecords: [
    { name: 'attachment', label: 'Attachment' },
    { name: 'action', label: 'Actions' },
  ],
};

function openModal(record, action, table) {
  modalType.value = action;
  currentTable.value = table;
  if (action === 'edit' && record) {
    showModalForm.value = { ...record };
  } else {
    showModalForm.value = {};
  }
  showModal.value = true;
}

function openModalDelete(record, table) {
  currentTable.value = table;
  showModalDeleteForm.value = { ...record };
  showModalDelete.value = true;
}

function saveRecord() {
  const table = currentTable.value;
  if (modalType.value === 'edit') {
    const index = eval(table).value.findIndex((item) => item.id === showModalForm.value.id);
    if (index !== -1) eval(table).value[index] = { ...showModalForm.value };
  } else {
    eval(table).value.push({ ...showModalForm.value, id: Date.now() });
  }
  showModal.value = false;
}

function deleteRecord() {
  const table = currentTable.value;
  eval(table).value = eval(table).value.filter((item) => item.id !== showModalDeleteForm.value.id);
  showModalDelete.value = false;
}
</script>

<template>
  <div class="p-4">
    <div v-for="(records, tableName) in { jobTitles, educationRecords, skillsRecords, languagesRecords, licensesRecords, attachmentsRecords }" :key="tableName" class="mb-8">
      <h1 class="text-2xl font-bold capitalize">{{ tableName.replace(/([A-Z])/g, ' $1') }}</h1>
      <div class="card p-4 mt-4">
        <div class="flex justify-end items-center mb-4">
          <rs-button @click="openModal(null, 'add', tableName)">
            <Icon name="material-symbols:add" class="mr-1"></Icon>
            Add
          </rs-button>
        </div>
        <rs-table
          :data="records"
          :columns="columns[tableName]"
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
            <div class="flex justify-center items-center">
              <Icon
                name="material-symbols:edit-outline-rounded"
                class="text-primary hover:text-primary/90 cursor-pointer mr-1"
                size="22"
                @click="openModal(data.value, 'edit', tableName)"
              ></Icon>
              <Icon
                name="material-symbols:close-rounded"
                class="text-primary hover:text-primary/90 cursor-pointer"
                size="22"
                @click="openModalDelete(data.value, tableName)"
              ></Icon>
            </div>
          </template>
        </rs-table>
      </div>
    </div>

    <rs-modal
      title="Delete Confirmation"
      ok-title="Yes"
      cancel-title="No"
      :ok-callback="deleteRecord"
      v-model="showModalDelete"
      :overlay-close="false"
    >
      <p>
        Are you sure you want to delete this record ({{ showModalDeleteForm.title || showModalDeleteForm.level || showModalDeleteForm.skill || showModalDeleteForm.language || showModalDeleteForm.license || showModalDeleteForm.attachment }})?
      </p>
    </rs-modal>

    <rs-modal title="Add Work Experience" v-model="showTitleModal" ok-title="Save" :ok-callback="saveJobTitle">
      <div class="grid grid-cols-3 gap-4">
        <FormKit
          type="select"
          label="Level*"
          :options="[{ label: 'Select', value: '', attrs: { disabled: true } }, 'Junior', 'Mid', 'Senior']"
          v-model="showModalForm.level"
          style="font-family: Arial;"
        />
        <FormKit
          type="text"
          label="Institute"
          v-model="showModalForm.institute"
          style="font-family: Arial;"
        />
        <FormKit
          type="text"
          label="Major/Specialization"
          v-model="showModalForm.major"
          style="font-family: Arial;"
        />
        <FormKit
          type="text"
          label="Year"
          v-model="showModalForm.year"
          style="font-family: Arial;"
        />
        <FormKit
          type="text"
          label="GPA/Score"
          v-model="showModalForm.gpa"
          style="font-family: Arial;"
        />
        <FormKit
          type="date"
          label="Start Date"
          v-model="showModalForm.startDate"
          style="font-family: Arial;"
        />
        <FormKit
          type="date"
          label="End Date"
          v-model="showModalForm.endDate"
          style="font-family: Arial;"
        />
      </div>
    </rs-modal>

    <rs-modal title="Add Education" v-model="showEducationModal" ok-title="Save" :ok-callback="saveEducation">
      <FormKit
        type="text"
        v-model="educationForm.level"
        name="level"
        label="Level"
        style="font-family: Arial;"
      />
    </rs-modal>

    <rs-modal title="Add Skill" v-model="showSkillsModal" ok-title="Save" :ok-callback="saveSkill">
      <div class="grid grid-cols-3 gap-4">
        <FormKit
          type="select"
          label="Skill*"
          :options="skills"
          v-model="showModalForm.skill"
          style="font-family: Arial;"
        />
        <FormKit
          type="text"
          label="Years of Experience"
          v-model="showModalForm.experience"
          style="font-family: Arial;"
        />
        <FormKit
          type="textarea"
          label="Comments"
          v-model="showModalForm.comments"
          style="font-family: Arial;"
        />
      </div>
    </rs-modal>

    <rs-modal title="Add Languages" v-model="showLanguagesModal" ok-title="Save" :ok-callback="saveLanguage">
      <FormKit
        type="text"
        v-model="languagesForm.language"
        name="language"
        label="Language"
        style="font-family: Arial;"
      />
    </rs-modal>

    <rs-modal title="Add License" v-model="showLicensesModal" ok-title="Save" :ok-callback="saveLicense">
      <div class="grid grid-cols-3 gap-4">
        <FormKit
          type="select"
          label="License Type*"
          :options="license"
          v-model="showModalForm.licenseType"
          style="font-family: Arial;"
        />
        <FormKit
          type="text"
          label="License Number"
          v-model="showModalForm.licenseNumber"
          style="font-family: Arial;"
        />
        <FormKit
          type="date"
          label="Issued Date"
          v-model="showModalForm.issuedDate"
          style="font-family: Arial;"
        />
        <FormKit
          type="date"
          label="Expiry Date"
          v-model="showModalForm.expiryDate"
          style="font-family: Arial;"
        />
      </div>
    </rs-modal>

    <rs-modal title="Add Attachments" v-model="showAttachmentsModal" ok-title="Save" :ok-callback="saveAttachment">
      <div class="grid grid-cols-3 gap-4">
        <FormKit
          type="file"
          label="Documents*"
          accept=".pdf,.doc,.docx,.xml,.md,.csv"
          v-model="showModalForm.documents"
          help="Select as many documents as you would like."
          style="font-family: Arial;"
        />
        <FormKit
          type="textarea"
          label="Comment"
          v-model="showModalForm.comment"
          placeholder="Type your comment here ..."
          help="Enter a comment about the document."
          style="font-family: Arial;"
        />
      </div>
    </rs-modal>
  </div>
</template>

<style scoped>
.rs-card {
  border-radius: 10px;
  font-family: Arial;
}
</style>