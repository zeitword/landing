<script setup lang="ts"></script>

<template>
  <div class="min-h-screen flex flex-col overflow-hidden relative">
    <d-decal
      class="w-[150%] min-w-[1000px] left-1/2 -translate-x-1/2 -top-50 fixed pointer-events-none"
    />
    <page-header class="w-full" />
    <main class="flex-1 w-full">
      <NuxtPage />
    </main>
    <page-footer class="w-full" />
  </div>
</template>
