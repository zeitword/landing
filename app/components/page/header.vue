<script setup lang="ts"></script>

<template>
  <d-wrapper>
    <header class="flex items-center justify-between py-10">
      <NuxtLink to="/">
        <z-logo />
      </NuxtLink>
      <div>
        <nav class="flex items-center gap-1 text-neutral text-copy">
          <!-- <p>
            Star us on
            <NuxtLink
              to="https://github.com/zeitword/zeitword"
              target="_blank"
              class="underline"
              >GitHub</NuxtLink
            >
          </p> -->
          <p>
            Follow us on
            <NuxtLink
              to="https://x.com/zeitword"
              target="_blank"
              class="underline"
              >X (Twitter)</NuxtLink
            >
          </p>
        </nav>
      </div>
    </header>
  </d-wrapper>
</template>
