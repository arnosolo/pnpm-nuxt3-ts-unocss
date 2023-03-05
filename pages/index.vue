<script setup lang="ts">
const hi = ref('init val')
const config = useRuntimeConfig()

hi.value = config.public.HELLO
console.log(123)
</script>

<template>
  <h1 class="px-4 py-2 bg-primary text-on-primary">
    {{ hi }}
  </h1>
  <div i-ic-baseline-add-circle text-primary />
  <p>
    NODE_ENV {{ config.public.NODE_ENV }}
  </p>
</template>
