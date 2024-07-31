<script setup lang="ts">

defineProps<{
  height: String
}>()

</script>

<template>
  <div class="marquee">
    <div class="marquee__content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
/* Marquee styles */
.marquee {
  --gap: 1rem;
  position: relative;
  display: flex;
  overflow: hidden;
  user-select: none;
  gap: var(--gap);
  height: 100%;
  width: auto;
}

.marquee__content > * {
  flex-shrink: 0;
  display: inline-flex;
  justify-content: space-around;
  gap: var(--gap);
  height: 100%;
  width: auto;
}

/* Enable animation */
.marquee__content {
  animation: scroll 10s linear infinite;
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% - var(--gap)));
  }
}

</style>