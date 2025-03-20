<script setup lang="ts"></script>

<template>
  <d-wrapper>
    <header class="flex items-center justify-between py-10">
      <NuxtLink to="/">
        <z-logo />
      </NuxtLink>
      <div>
        <nav class="flex items-center gap-4 text-neutral text-copy">
          <p>
            <NuxtLink to="/impressum" target="_blank" class="underline"
              >Imprint</NuxtLink
            >
          </p>
          <p>
            <NuxtLink to="/datenschutz" target="_blank" class="underline"
              >Privacy Policy</NuxtLink
            >
          </p>
        </nav>
      </div>
    </header>
  </d-wrapper>
</template>
