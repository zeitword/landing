<script setup lang="ts">
import { icons } from "lucide-vue-next";

type Props = {
  name: string;
};

const { name } = defineProps<Props>();

const icon = icons[name];
</script>

<template>
  <component :is="icon"></component>
</template>
