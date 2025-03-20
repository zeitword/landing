<script setup lang="ts">
import { useMouseInElement } from "@vueuse/core";
import { Bug } from "lucide-vue-next";
import { computed } from "vue";

type Props = {
  icon?: string;
  title: string;
  description: string;
  buttons?: TButton[];
};

const { icon, title, description, buttons } = defineProps<Props>();

const cardRef = ref<HTMLElement | null>(null);

const { isOutside, elementX, elementY } = useMouseInElement(cardRef);

const maskStyle = computed(() => {
  if (isOutside.value) {
    return {
      maskImage:
        "radial-gradient(450px circle at top left, white, transparent)",
    };
  }

  return {
    maskImage: `radial-gradient(450px circle at ${elementX.value}px ${elementY.value}px, white, transparent)`,
  };
});
</script>

<template>
  <div
    ref="cardRef"
    class="p-7 border border-neutral flex-1 text-neutral space-y-10 relative group hover:bg-neutral-800 transition-all overflow-hidden"
  >
    <FlickeringGrid
      class="absolute inset-0 z-0 opacity-30"
      :style="maskStyle"
      :square-size="12"
      :grid-gap="2"
      color="#ffffff"
      :max-opacity="1"
      :flicker-chance="0.1"
      :width="800"
      :height="800"
    />
    <div class="z-10 relative space-y-10">
      <div
        v-if="icon"
        class="size-10 grid place-items-center group-hover:bg-neutral-700 transition-all"
      >
        <d-file-icon
          :name="icon"
          class="group-hover:text-white transition-all"
        />
      </div>
      <div class="space-y-2 max-w-xl">
        <h3 class="text-copy-lg text-neutral group-hover:text-neutral-inverse">
          {{ title }}
        </h3>
        <p
          class="text-copy text-neutral-subtle group-hover:text-neutral-inverse-subtle"
        >
          {{ description }}
        </p>
      </div>
      <div v-if="buttons && buttons.length > 0" class="flex gap-2">
        <d-button
          v-for="button in buttons"
          :key="button.id"
          :to="button.content.link"
        >
          {{ button.content.text }}
        </d-button>
      </div>
    </div>
  </div>
</template>
