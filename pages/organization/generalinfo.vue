<script setup>
import { ref } from 'vue';

const data = [
  {
    organizationName: "Tech Corp",
    registrationNumber: "123456789",
    taxId: "987654321",
    phoneNumber: "123-4567890",
    fax: "123-4567891",
    email: "info@techcorp.com",
    address1: "123 Tech Street",
    address2: "Suite 456",
    city: "Tech City",
    stateProvince: "Tech State",
    zipPostalCode: "12345",
    country: "Techland",
    companyPolicies: "Follow all tech guidelines.",
    organizationChart: "chart.pdf",
    description: "A leading tech company.",
    action: "edit",
  }
];

const showModal = ref(false);
const showModalDelete = ref(false);
const modalType = ref('');
const showModalForm = ref({
  skillName: '',
});
const showModalDeleteForm = ref({
  skillName: ''
});

const columns = [
  { name: 'name', label: 'Field' },
  { name: 'action', label: 'Actions' }
];

const options2 = [
                        { label: "Malaysia", value: "my", attrs: { disabled: true } },
                        { label: "Singapore", value: "sg", attrs: { disabled: true } },
                        { label: "Thailand", value: "th", attrs: { disabled: true } },
                        { label: "Indonesia", value: "id", attrs: { disabled: true } },
                        { label: "Brunei", value: "b", attrs: { disabled: true } },
                        { label: "Laos", value: "ls", attrs: { disabled: true } },
                        { label: "Cambodia", value: "cb", attrs: { disabled: true } },
                        { label: "Japan", value: "jp" },
                        { label: "Myanmar", value: "mm", attrs: { disabled: true } },
                      ];

                      function submit() {
                        alert("Form submitted");
                      }
function openModal(value, action) {
  modalType.value = action;
  if (action === 'edit' && value) {
    showModalForm.value = { ...value };
  } else {
    showModalForm.value = {
      skillName: '',
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
  // Implement the logic to save general information
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
    <h1 class="text-2xl font-bold">General Information</h1>
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
    :title="modalType == 'edit' ? 'Edit General Information' : 'Add General Information'"
    ok-title="Save"
    :ok-callback="saveSkill"
    v-model="showModal"
    :overlay-close="false"
  >
        <FormKit 
                        type="text" 
                        label="Organization Name"
                        validation="required"
                        validation-visibility="dirty"
                      >
                        <template #label>
                          <label
                            class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500"
                          >
                            Organization Name <span class="text-danger">*</span>
                          </label>
                        </template>
                      </FormKit>
     
        <FormKit 
         type="text" label="Readonly Text" value="3" disabled
                      />
                      
      
        <FormKit 
                        type="text" 
                        label="Registration Number"
                        validation="required"
                        validation-visibility="dirty"
                      >
                        <template #label>
                          <label
                            class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500"
                          >
                            Registration Number <span class="text-danger">*</span>
                          </label>
                        </template>
                      </FormKit>
      
        <FormKit 
                        type="text" 
                        label="Tax ID"
                        validation="required"
                        validation-visibility="dirty"
                      >
                        <template #label>
                          <label
                            class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500"
                          >
                            Tax ID <span class="text-danger">*</span>
                          </label>
                        </template>
                      </FormKit>
      
        <FormKit 
        
                        type="mask" 
                        label="Phone Number"
                        mask="###-########"
                        
                        >
                        <template #label>
                          <label
                            class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500"
                          >
                            Phone Number <span class="text-danger">*</span>
                          </label>
                        </template>
                      </FormKit>
      
        <FormKit 
                       
        type="mask" 
                        label="Phone Number"
                        mask="##-########"
                        >
                        <template #label>
                          <label
                            class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500"
                          >
                            Fax <span class="text-danger">*</span>
                          </label>
                        </template>
                      </FormKit>
      
        <FormKit 
                        type="text" 
                        label="Email"
                        validation="email"
                        validation-visibility="dirty"
                        >
                        <template #label>
                          <label
                            class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500"
                          >
                            Email<span class="text-danger">*</span>
                          </label>
                        </template>
                      </FormKit>
      
        <FormKit 
                        type="text" 
                        label="Address"
                        validation="required"
                        validation-visibility="dirty"
                      >
                        <template #label>
                          <label
                            class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500"
                          >
                            Address 1<span class="text-danger">*</span>
                          </label>
                        </template>
                      </FormKit>
     
        <FormKit 
                        type="text" 
                        label="Address"
                        validation="required"
                        validation-visibility="dirty"
                      >
                        <template #label>
                          <label
                            class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500"
                          >
                            Address 2<span class="text-danger">*</span>
                          </label>
                        </template>
                      </FormKit>
      
        <FormKit 
                        type="text" 
                        label="City"
                        validation="required"
                        validation-visibility="dirty"
                      >
                        <template #label>
                          <label
                            class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500"
                          >
                            City<span class="text-danger">*</span>
                          </label>
                        </template>
                      </FormKit>
      
        <FormKit 
                        type="text" 
                        label="State/Province"
                        validation="required"
                        validation-visibility="dirty"
                      >
                        <template #label>
                          <label
                            class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500"
                          >
                            State/Province <span class="text-danger">*</span>
                          </label>
                        </template>
                      </FormKit>
     
        <FormKit 
                        type="text" 
                        label="Zip/Postal Code"
                        validation="number|between:0,100" 
                        validation-visibility="dirty"
                      />
     
        <FormKit
        type="select"
                        label="Which country you want to visit?"
                        :options="options2"
                      />
      
      
        <FormKit type="textarea" placeholder="type your message here..." rows="8" label="Company Policies"/>
     

      
        <FormKit
                        type="file"
                        label="Organization Chart"
                        accept=".pdf,.doc,.docx,.xml,.md,.csv"
                        help="Please upload the organization chart"
                      />
    
        <FormKit type="textarea" placeholder="Type your messages here ..." label="Description" help="Enter a comment about the document." />
      
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
      Are you sure want to delete this general information {{
        showModalDeleteForm.skillName
      }}?
    </p>
  </rs-modal>
</template>