<script>
import { ref } from 'vue';
import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css'; 
import { useRouter } from 'vue-router'; 
export default {
  components: {
    VueCal, 
  },
  setup() {
    const router = useRouter(); 
    const events = ref([
      { start: '2025-04-18', end: '2025-04-19', title: 'Sick Leave', person: 'John Doe' },
      { start: '2025-10-05', end: '2025-10-07', title: 'Annual Leave', person: 'Jane Smith' },
    ]);

    const goToAssignLeave = () => {
      router.push('/leave/assignLeave');
    };

    return { events, goToAssignLeave };
  },
};
</script>

<template>
  <div class="flex justify-end items-center mb-4">
    <rs-button @click="goToAssignLeave">
      <Icon name="material-symbols:add" class="mr-1"></Icon>
      Add Leave
    </rs-button>
  </div>
  <div class="bg-white shadow-md rounded p-4 mb-4">
    <vue-cal
      style="height: 600px;"
      :events="events"
      :editable="true"
      @event-click="(event) => alert(`Event: ${event.title}\nPerson: ${event.person}`)"
    />
  </div>
</template>