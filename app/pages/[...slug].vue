<script setup lang="ts">
import { useRouteParams } from "@vueuse/router";
const routeSlug = useRouteParams("slug");

const siteId = "019527af-1d68-772c-a117-88b8e078722f";

const slug = computed(() => {
  return routeSlug.value === undefined ? "index" : routeSlug.value;
});

const { data: story } = await useFetch<any>(
  `https://app.zeitword.com/api/public/sites/${siteId}/stories/${slug.value}`,
);

const { data: components } = await useFetch<any>(
  `https://app.zeitword.com/api/public/sites/${siteId}/components`,
);

function componentNameById(id: string) {
  if (!id) return "todo";
  const found = components.value.find((component: any) => component.id === id);
  if (!found) return "todo";

  return found.name;
}
</script>
<template>
  <div>
    <template v-for="(block, index) in story.content.blocks">
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
