<script setup lang="ts">
type Props = {
  name: string;
};

const { name } = defineProps<Props>();
</script>

<template>
  <svg
    v-if="name === 'file'"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.0859 1.66699L16.6693 6.25033M12.0859 1.66699V6.25033H16.6693M12.0859 1.66699H3.33594V18.3337H16.6693V6.25033"
      stroke="currentColor"
      stroke-width="2"
    />
  </svg>
  <svg
    v-else-if="name === 'file-2'"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.3307 10.8328H6.66406M13.3307 14.1662H6.66406M8.33073 7.49951H6.66406M12.0781 1.66602L16.6615 6.24935M12.0781 1.66602V6.24935H16.6615M12.0781 1.66602H3.32812V18.3327H16.6615V6.24935"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="square"
    />
  </svg>
</template>
