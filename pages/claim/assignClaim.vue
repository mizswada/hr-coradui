<script>
export default {
  data() {
    return {
      event: [
        { label: "--Select--", value: "st" },
        { label: "Office", value: "oe" },
        { label: "Training", value: "tr" },
        { label: "Meeting", value: "mt" },
        { label: "Conference", value: "cf" },
        { label: "Workshop", value: "ws" },
      ],
      currency: [
        { label: "--Select--", value: "st" },
        { label: "Malaysian Ringgit", value: "rm" },
        { label: "Singapore Dollar", value: "sg" },
        { label: "US Dollar", value: "us" },
        { label: "Euro", value: "eu" },
        { label: "British Pound", value: "uk" },
      ],
      ExpenseTypes: [
        { label: "--Select--", value: "st" },
        { label: "Travel", value: "travel" },
        { label: "Accommodation", value: "accommodation" },
        { label: "Food", value: "food" },
        { label: "Miscellaneous", value: "misc" },
      ], // Define ExpenseTypes if it's static data
      date: null,
    };
  },
};
</script>
<template>
  <div class="card bg-white p-4 mb-4">
    <h3>Create Claim Request</h3>
    <FormKit type="text" label="Employee Name" validation="required" placeholder="Type for hints..."/>
    <FormKit
        type="select"
        label="Event"
        validation="required"
        :options="event"
    />
    <FormKit
        type="select"
        label="Currency"
        validation="required"
        :options="currency"
    />
    <FormKit type="textarea" placeholder="Type Remarks Here" label="Remarks"/>
        <FormKit
          type="select"
          label="Expense Type"
          validation="required"
          :options="ExpenseTypes"
        />
        <FormKit type="date" :value="date" label="Date" />
        <FormKit 
          type="text" 
          label="Amount"
          validation="required"
          validation-visibility="dirty"
        />
        <FormKit
          type="file"
          label="Select Attachment"
          validation="required"
          accept=".pdf,.doc,.docx,.xml,.md,.csv"
          help="Accept up to 1MB"
        />

        <FormKit type="textarea" label="Comment"/>

    <div class="flex justify-end space-x-4 mt-4">
      <button @click="resetFilters" class="bg-blue-500 text-white px-4 py-2 rounded">Cancel</button>
      <button @click="searchLeaves" class="bg-green-500 text-white px-4 py-2 rounded">Create</button>
    </div>
  </div>
</template>