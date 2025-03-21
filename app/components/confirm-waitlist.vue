<script setup lang="ts">
const route = useRoute();
const token = route.params.token as string;
const isLoading = ref(true);
const error = ref("");
const isConfirmed = ref(false);

onMounted(async () => {
  try {
    const response = await fetch(
      `https://app.zeitword.com/api/public/waitlist/confirm/${token}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.statusMessage || "Failed to confirm email");
    }

    const data = await response.json();
    if (data.success) {
      isConfirmed.value = true;
    }
  } catch (e) {
    console.error("Error:", e);
    error.value = e.message || "Failed to confirm email";
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <d-wrapper>
    <div
      class="text-center py-40 max-w-xl mx-auto flex flex-col gap-6 text-neutral"
    >
      <h1 class="text-5xl md:text-7xl">
        {{ isConfirmed ? "Welcome aboard!" : "Confirming..." }}
      </h1>

      <div v-if="isLoading" class="mt-4">
        <p class="text-neutral-subtle">Confirming your email...</p>
      </div>

      <div v-else-if="isConfirmed" class="mt-4">
        <p class="font-medium text-copy-lg text-neutral">
          Your email has been confirmed!
        </p>
        <p class="text-neutral-subtle text-copy">
          We'll let you know when Zeitword is ready.
        </p>
      </div>

      <div v-else-if="error" class="mt-4">
        <p class="font-medium text-red-600">{{ error }}</p>
        <p class="text-neutral-subtle mt-2">
          Please try joining the waitlist again.
        </p>
      </div>
    </div>
  </d-wrapper>
</template>
