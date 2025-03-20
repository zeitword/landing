<script setup lang="ts">
type Props = {
  title: string;
  description: string;
  buttons?: TButton[];
};

const { title } = defineProps<Props>();
</script>

<template>
  <d-wrapper>
    <div
      class="text-center py-40 max-w-xl mx-auto flex flex-col gap-2 text-neutral"
    >
      <h1 class="text-5xl md:text-7xl">
        {{ title }}
      </h1>
      <p class="text-neutral-subtle">{{ description }}</p>
    </div>
  </d-wrapper>
</template>
