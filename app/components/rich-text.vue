<script setup lang="ts">
interface Props {
  body: string;
}

const { body } = defineProps<Props>();
</script>

<template>
  <d-wrapper>
    <div class="py-24 prose prose-neutral">
      <div v-if="body" v-html="body"></div>
    </div>
  </d-wrapper>
</template>
