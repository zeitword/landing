<script setup lang="ts">
import { ref } from "vue";

type Props = {
  title: string;
  description: string;
  buttons?: TButton[];
};

const { title } = defineProps<Props>();

const email = ref("");
const isLoading = ref(false);
const isSuccess = ref(false);
const error = ref("");

async function handleSubmit() {
  if (!email.value) return;

  isLoading.value = true;
  error.value = "";

  const url = "http://localhost:3001/api/public/waitlist";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email.value }),
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.statusMessage || "Failed to join waitlist");
    }

    const data = await response.json();
    if (data.success) {
      isSuccess.value = true;
    }
  } catch (e) {
    console.error("Error:", e);
    error.value = e.message || "Failed to join waitlist";
  } finally {
    isLoading.value = false;
  }
}
</script>

<template>
  <d-wrapper>
    <div
      class="text-center py-40 max-w-xl mx-auto flex flex-col gap-6 text-neutral"
    >
      <h1 class="text-5xl md:text-7xl">
        {{ title }}
      </h1>
      <p class="text-neutral-subtle">{{ description }}</p>

      <!-- Show success message or form -->
      <div v-if="isSuccess" class="mt-4">
        <p class="font-medium text-copy-lg text-neutral">
          Thanks for joining the waitlist!
        </p>
        <p class="text-copy text-neutral-subtle">
          Please check your email to confirm your spot.
        </p>
      </div>

      <form
        v-else
        @submit.prevent="handleSubmit"
        class="mt-4 flex flex-col sm:flex-row gap-2 max-w-md mx-auto w-full"
      >
        <input
          v-model="email"
          type="email"
          placeholder="Enter your email"
          required
          :disabled="isLoading"
          class="flex-1 px-4 py-2 rounded-full bg-neutral border border-neutral focus:outline-none focus:border-neutral-strong/50 focus:ring-3 focus:ring-black/10 transition-all text-copy"
        />
        <d-button type="submit" :loading="isLoading" size="lg"
          >Join Waitlist</d-button
        >
      </form>

      <p v-if="error" class="text-red-600 text-sm mt-2">
        {{ error }}
      </p>
    </div>
  </d-wrapper>
</template>
