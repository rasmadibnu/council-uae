<script setup lang="ts">

interface Props {
    title: string,
    image: string,
}

const props = defineProps<Props>()

</script>
<template>
    <Card class="border-[0.5px] border-black">
        <CardHeader>
            <div class="flex gap-2">
                <div style="max-width: 70px; max-height: 70px; min-width: 70px;">
                    <img class="w-full h-full" :src="`/icons/${props.image}`" :alt="props.image">
                </div>

                <CardTitle class="font-semibold text-xl text-primary">
                    {{ props.title }}</CardTitle>
            </div>
        </CardHeader>
        <CardFooter class="flex justify-between">
            <NuxtLink to="/">
                <Button variant="link" class="p-0">
                    <img class="w-5 h-5 mr-2" src="~/assets/icons/info-circle.svg" alt="info-circle">
                    <p class="text-lg">Details</p>
                </Button>
            </NuxtLink>
            <NuxtLink to="/">
                <Button variant="link" class="p-0 text-secondary">
                    <img class="w-5 h-5 mr-2" src="~/assets/icons/power.svg" alt="info-circle">
                    <p class="text-lg">Start Service</p>
                </Button>
            </NuxtLink>
        </CardFooter>
    </Card>
</template>