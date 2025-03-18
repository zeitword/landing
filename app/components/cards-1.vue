<script setup lang="ts">
type Props = {
  cards: any;
};

const { cards } = defineProps<Props>();
</script>

<template>
  <d-wrapper>
    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-4 [&>*:nth-child(odd):last-child]:md:col-span-2"
    >
      <d-card v-for="card in cards" v-bind="card.content" />
    </div>
  </d-wrapper>
</template>
