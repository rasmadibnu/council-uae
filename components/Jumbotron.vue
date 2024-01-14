<script setup lang="ts">

interface Props {
    title?: string
}

const props = defineProps<Props>()

</script>
<template>
    <div class="gradient px-5  relative">
        <div class="space-y-20 max-w-6xl py-10 mx-auto xl:px-0 px-8">
            <div>
                <ul class="bc text-white flex space-x-3 text-xs lg:text-sm">
                    <li>
                        <NuxtLink to="/">
                            <p style="background-color: rgba(0, 0, 0, 0.05)">Home</p>
                        </NuxtLink>
                    </li>
                    <li v-if="$slots.breadcrumbs">
                        <p>
                            >
                        </p>
                    </li>
                    <slot name="breadcrumbs" />
                    <!-- <li>
                        <NuxtLink to="/">
                            <p style="background-color: rgba(0, 0, 0, 0.05)">Home</p>
                        </NuxtLink>
                    </li>
                    <li>
                        <p>
                            >
                        </p>
                    </li>
                    <li>
                        <NuxtLink to="/">
                            <p style="background-color: rgba(0, 0, 0, 0.05)">About Us</p>
                        </NuxtLink>
                    </li>
                    <li>
                        <p>
                            >
                        </p>
                    </li>
                    <li>
                        <p style="background-color: rgba(0, 0, 0, 0.05)">About Dubai Chamber of Commerce</p>
                    </li> -->
                </ul>
            </div>
            <div class="z-10 overflow-hidden">
                <div class="w-[18rem] lg:w-[45rem] text-white" v-if="props.title">
                    <h1 style="background-color: rgba(0, 0, 0, 0.05)" class="text-2xl lg:text-6xl font-semibold">{{ props.title }}</h1>
                </div>
                <slot name="content" />
            </div>
        </div>
    </div> 
</template>
<style lang="scss">
ul.bc {
  li:last-child {
    color: #9ca3af;
  }
}
</style>