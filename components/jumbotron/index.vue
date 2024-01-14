<template>
    <div class="gradient px-5 lg:px-20 py-10 text-white relative">
        <div class="space-y-20">
            <div>
                <ul class="flex space-x-3 text-xs lg:text-sm">
                    <li>
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
                    </li>
                </ul>
            </div>
            <div class="z-10 overflow-hidden">
                <div class="w-[18rem] lg:w-[45rem]">
                    <h1 style="background-color: rgba(0, 0, 0, 0.05)" class="text-2xl lg:text-6xl font-semibold">{{ title }}</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        title: {
            type: String,
            default: ''
        }
    },
    setup() {
        
    },
})
</script>
