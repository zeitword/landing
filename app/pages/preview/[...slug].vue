<script setup lang="ts">
import { useRouteParams } from "@vueuse/router";

const routeSlug = useRouteParams("slug");

const slug = computed(() => {
  return routeSlug.value === undefined ? "index" : routeSlug.value;
});

const story = ref({ content: { blocks: [] } });

const { data: components } = await useFetch<any>(
  `${apiUrl}/api/public/sites/${siteId}/components`,
);

// Get the parent window's origin
const parentOrigin = computed(() => {
  try {
    return window.parent.location.origin;
  } catch (e) {
    return import.meta.env.PROD
      ? "https://app.zeitword.com"
      : "http://localhost:3000";
  }
});

function componentNameById(id: string) {
  if (!id) return "todo";
  const found = components.value.find((component: any) => component.id === id);
  if (!found) return "todo";
  return found.name;
}

onMounted(() => {
  window.addEventListener("message", handleMessage);
  if (window.parent) {
    window.parent.postMessage(
      { type: "requestInitialData" },
      parentOrigin.value,
    );
  }
});

onBeforeUnmount(() => {
  window.removeEventListener("message", handleMessage);
});

function handleMessage(event) {
  const allowedOrigins = ["https://app.zeitword.com", "http://localhost:"];
  if (!allowedOrigins.some((prefix) => event.origin.startsWith(prefix))) {
    return;
  }

  if (
    event.data.type === "updatePreview" ||
    event.data.type === "initialData"
  ) {
    story.value.content = event.data.data;
  }
}

const sortedBlocks = computed(() => {
  return story.value.content.blocks.sort((a, b) =>
    a.order.localeCompare(b.order),
  );
});
</script>

<template>
  <div>
    <template v-for="(block, index) in sortedBlocks" :key="block.id">
      <component
        v-if="componentNameById(block.componentId)"
        :is="resolveComponent(componentNameById(block.componentId))"
        v-bind="block.content"
        :componentName="componentNameById(block.componentId)"
        :data-name="componentNameById(block.componentId)"
      />
    </template>
  </div>
</template>
