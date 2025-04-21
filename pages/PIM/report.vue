<script>
export default {
  data() {
    return {
      status: [
        { label: "--Select--", value: "st" },
        { value: 'active', label: 'Active' },
        { value: 'inactive', label: 'Inactive' },
      ],
      data: [
        {
          "Name": "John Doe",
          "SelectionCriteria": "employee name",
          "Include": "current only",
          "DisplayFieldGroup": "personal",
          "DisplayField": "employee id",
          "action": "edit",
        },
        {
          "Name": "Jane Smith",
          "SelectionCriteria": "pay grade",
          "Include": "current and past",
          "DisplayFieldGroup": "job",
          "DisplayField": "job title",
          "action": "edit",
        },
      ],
      showModal: false,
      modalType: '',
      showModalForm: {
        Name: '',
        SelectionCriteria: '',
        Include: '',
        DisplayFieldGroup: '',
        DisplayField: '',
      },
    };
  },
  methods: {
    resetFilters() {
      // Logic to reset filters
    },
    searchLeaves() {
      // Logic to search leaves
    },
    openModal(data, type) {
      this.modalType = type;
      if (type === 'edit' && data) {
        this.showModalForm = { ...data };
      } else {
        this.showModalForm = {
          Name: '',
          SelectionCriteria: '',
          Include: '',
          DisplayFieldGroup: '',
          DisplayField: '',
        };
      }
      this.showModal = true;
    },
    openModalDelete(data) {
      // Logic to handle delete modal
    },
    saveSkill() {
      if (this.modalType === 'add') {
        // Logic to add a new event
        this.data.push({ ...this.showModalForm });
      } else if (this.modalType === 'edit') {
        // Logic to edit an existing event
        const index = this.data.findIndex(
          (item) => item.Name === this.showModalForm.Name
        );
        if (index !== -1) {
          this.data[index] = { ...this.showModalForm };
        }
      }
      this.showModal = false;
    },
  },
};
</script>
<template>
  <div class="card bg-white p-4 mb-4">
    <RsCollapse>
      <RsCollapseItem title="Employee Report" :open="true">
        <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-x-6">
          <FormKit type="text" label="Employee Name" placeholder="Type for hints..."/>
         
          
          <div class="col-span-full flex justify-end space-x-4 mt-8">
            <button @click="resetFilters" class="bg-blue-500 text-white px-4 py-2 rounded">Reset</button>
            <button @click="searchLeaves" class="bg-green-500 text-white px-4 py-2 rounded">Search</button>
          </div>
        </div>
      </RsCollapseItem>
    </RsCollapse>
  </div>

  <div class="card bg-white p-4 mb-4">
    <div class="flex justify-start items-center mb-4">
      <rs-button @click="openModal(null, 'add')">
        <Icon name="material-symbols:add" class="mr-1"></Icon>
          Add 
      </rs-button>
    </div>

    <rs-table
      :field="field"
      :data="data"
      :options="{
        variant: 'default',
        striped: true,
        borderless: true,
        hover: true,
        fixed: false,
      }"
      basic
    >
      <template v-slot:action="data">
        <div class="flex justify-center items-center">
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

  <rs-modal
    :title="modalType == 'edit' ? 'Edit Employee' : 'Add Employee'"
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

                      
                      <FormKit
                        type="select"
                        label="Selection criteria"
                        :options="[
                          { label: 'Employee Name', value: 'employee_name' },
                          { label: 'Pay Grade', value: 'pay_grade' },
                          { label: 'Education', value: 'education' },
                          { label: 'Employment Status', value: 'employment_status' },
                          { label: 'Service Period', value: 'service_period' },
                          { label: 'Joined Date', value: 'joined_date' },
                          { label: 'Job Title', value: 'job_title' },
                          { label: 'Language', value: 'language' },
                          { label: 'Skill', value: 'skill' },
                          { label: 'Age Group', value: 'age_group' },
                          { label: 'Sub Unit', value: 'sub_unit' }
                        ]"
                      />

                      <FormKit
                        type="select"
                        label="Include"
                        :options="[
                          { label: 'Current Employees Only', value: 'current_only' },
                          { label: 'Current Employees and Past Employees', value: 'current_and_past' },
                          { label: 'Past Employees Only', value: 'past_only' },
                          { label: 'Employment Status', value: 'employment_status' }
                        ]"
                      />
                    
         

          <!-- Display Fields -->
          
            <label class="block text-gray-700 font-medium mb-2" style="font-family: Arial;">Display Fields</label>
            <div class="grid grid-cols-2 gap-4">
             
                <FormKit
                        type="select"
                        label="Select Display Field Group"
                        :options="[
                          { label: 'Personal', value: 'personal' },
                          { label: 'Contact Details', value: 'contact_details' },
                          { label: 'Emergency Contacts', value: 'emergency_contacts' },
                          { label: 'Dependents', value: 'dependents' },
                          { label: 'Immigration', value: 'immigration' },
                          { label: 'Job', value: 'job' },
                          { label: 'Salary', value: 'salary' },
                          { label: 'Subordinates', value: 'subordinates' },
                          { label: 'Supervisor', value: 'supervisor' },
                          { label: 'Work Experience', value: 'work_experience' },
                          { label: 'Skills', value: 'skills' },
                          { label: 'Languages', value: 'languages' },
                          { label: 'Licenses', value: 'licenses' },
                          { label: 'Memberships', value: 'memberships' }
                        ]"
                      />

                      <FormKit
                        type="select"
                        label="Select Display Field"
                        :options="[
                          { label: 'Employee ID', value: 'employee_id' },
                          { label: 'Employee Last Name', value: 'employee_last_name' },
                          { label: 'Employee First Name', value: 'employee_first_name' },
                          { label: 'Employee Middle Name', value: 'employee_middle_name' },
                          { label: 'Date of Birth', value: 'date_of_birth' },
                          { label: 'Nationality', value: 'nationality' },
                          { label: 'Gender', value: 'gender' },
                          { label: 'Marital Status', value: 'marital_status' },
                          { label: 'Driver\'s License Number', value: 'drivers_license_number' },
                          { label: 'License Expiry Date', value: 'license_expiry_date' },
                          { label: 'Other ID', value: 'other_id' }
                        ]"
                      />
            </div>
   
  </rs-modal>
</template>