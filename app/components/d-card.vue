<script setup lang="ts">
type TButton = {
  text: string;
  link: string;
};

type Props = {
  icon: string;
  title: string;
  description: string;
  buttons?: TButton[];
};

const { icon, title, description, buttons } = defineProps<Props>();
</script>

<template>
  <div class="p-5 border border-neutral flex-1 bg-neutral-subtle">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>
