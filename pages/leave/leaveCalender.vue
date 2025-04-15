<script>
import { ref } from 'vue';

export default {
  setup() {
    const events = ref([
      { start: '2023-10-01', end: '2023-10-01', title: 'Team Meeting' },
      { start: '2023-10-05', end: '2023-10-07', title: 'Annual Leave' },
    ]);

    return { events };
  },
};
</script>

<template>
  <div>
    <vue-cal
      style="height: 600px;"
      :events="events"
      :editable="true"
      @event-click="(event) => alert(`Event: ${event.title}`)"
    />
  </div>
</template>

<style>
/* Add any custom styles for the calendar here */
</style>