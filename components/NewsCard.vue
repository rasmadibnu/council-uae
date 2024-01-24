<script setup lang="ts">
import { IconArrowNarrowRight } from '@tabler/icons-vue';

interface Props {
    title?: string,
    description?: string,
    image: string,
    url: string,
    date?: string,
    bgcolor?: string
}

const props = defineProps<Props>()

</script>

<template>
    <div :class="[`${props.bgcolor}`, 'md:flex md:space-x-10 p-5']">
        <div class="max-w-full md:max-w-80 lg:max-w-80">
            <img :src="props.image" alt="chambers-building-1-scaled">
        </div>
        <div class="flex items-center pt-5 lg:pt-0">
            <div class="space-y-5">
                <p class="text-gray-500">{{ props.date }}</p>
                <div class="space-y-2">
                    <NuxtLink :to="props.url">
                        <p class="text-lg md:text-xl lg:text-2xl font-medium hover:text-secondary">{{ props.title }}</p>
                    </NuxtLink>
                    <div class="max-w-3xl">
                        <p class="text-sm">{{ props.description }}</p>
                    </div>
                </div>
                <div class="flex items-center ">
                    <NuxtLink :to="props.url" class="flex space-x-2">
                        <Button variant="link" class="text-secondary p-0">
                            <p class="text-secondary text-base">Read more</p>
                            <IconArrowNarrowRight class="text-secondary" />
                        </Button>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>
