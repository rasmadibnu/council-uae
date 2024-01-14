<script setup lang="ts">
import { SelectValue, type SelectValueProps } from 'radix-vue'
import { cn } from '@/lib/utils'
const props = defineProps<SelectValueProps>()
</script>

<template>
  <SelectValue :class="cn('line-clamp-1 text-left', '')" v-bind="props">
    <slot />
  </SelectValue>
</template>
