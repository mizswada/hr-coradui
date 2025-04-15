<script>
export default {
  data() {
    return {
      fromDate: '',
      toDate: '',
      location: [
        "All",
        "Kuala Lumpur",
        "Johor Bahru",
      ],
      department : [
                  "All",
                  "Human Resources",
                  "Finance",
                  "IT",
                  "Marketing",
      ],
      leavePeriod: [
        "01-01-2023 - 31-12-2023",
        "01-01-2024 - 31-12-2024",
        "01-01-2025 - 31-12-2025",
        "01-01-2026 - 31-12-2026"
      ],
      selectedStatus: [],
      selectedLeaveType: [],
      selectedSubUnit: [],
      data: [
        {
          "employeeName": "Jane Doe",
          "from": "14/04/2025",
          "to": "16/04/2025",
          "days": "5",
          "reason": "Covid-19",
          "Attachment": "Download",
          "type": "Sick",
          "applied": "14/04/2025",
          "action": "edit",
        },

        {
          "employeeName": "John Doe",
          "from": "10/05/2025",
          "to": "15/05/2025",
          "days": "5",
          "reason": "-",
          "Attachment": "Download",
          "type": "Annual",
          "applied": "14/04/2025",
          "action": "edit",
        },
      ],
    };
  },
  methods: {
    searchLeaves() {
      // Implement search logic here
    },
    openModal(value, action) {
      // Implement modal logic here
    },
    openModalDelete(value) {
      // Implement delete modal logic here
    },
    approveLeave(value) {
      // Implement approve logic here
    },
    rejectLeave(value) {
      // Implement reject logic here
    },
    deleteLeave(value) {
      // Implement delete logic here
    },
  },
};
  </script>
<template>
    <RsCollapse>
      <RsCollapseItem title="View Applications" :open="true">
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-x-6">
          <FormKit type="text" label="Employee Name" placeholder="Search by Name" />
          <FormKit
            type="select"
            label="Location"
            placeholder="Search by Location"
            :options="location"
          />
          <FormKit
            type="select"
            label="Department"
            placeholder="Search by Department"
            :options="department"
          />
          <FormKit
            type="select"
            label="Leave Period"
            placeholder="Search by Leave Period"
            :options="leavePeriod"
          />
          <!-- Removed extra items to fit 1 row with 4 items -->
        </div>
          <!-- Add additional filters here if needed -->
        <div class="col-span-full flex justify-end space-x-4 mt-8">
              <button @click="searchLeaves" class="bg-green-500 text-white px-4 py-2 rounded">export</button>
            </div>
          </RsCollapseItem>
    </RsCollapse>
  
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
        <div class="flex flex-col justify-center items-center space-y-2">
          <div class="flex space-x-2">
            <button class="bg-green-500 text-white px-2 py-1 rounded" @click="approveLeave(data.value)">Approve</button>
            <button class="bg-red-500 text-white px-2 py-1 rounded" @click="rejectLeave(data.value)">Reject</button>
            <button class="bg-gray-500 text-white px-2 py-1 rounded" @click="deleteLeave(data.value)">Delete</button>
          </div>
        </div>
      </template>
    </rs-table>
  </template>
