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
  <div class="p-7 border border-neutral flex-1 text-neutral space-y-10">
    <div
      v-if="icon"
      class="size-10 grid place-items-center border border-neutral"
    >
      <d-file-icon :name="icon" />
    </div>
    <div class="space-y-2">
      <h3 class="text-copy-lg">{{ title }}</h3>
      <p class="text-copy text-neutral-subtle">{{ description }}</p>
    </div>
  </div>
</template>
