<template>
    <div>
        <div class="gradient px-20 py-10 text-white relative">
            <div class="space-y-20">
                <div>
                    <ul class="flex space-x-3">
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
                <div class="z-10">
                    <div class="w-[45rem]">
                        <h1 style="background-color: rgba(0, 0, 0, 0.05)" class="text-6xl font-semibold">About Dubai Chamber of Commerce</h1>
                    </div>
                </div>
            </div>
        </div>

        <div class="px-20 py-24 z-10">
            <div class="flex">
                <div class="flex-1 space-y-5">
                    <h2 class="font-medium text-4xl">Dubai Chamber of Commerce was established in 1965</h2>
                    <p class="text-xl">We are a non-profit public organization whose mission is to represent, support and protect the interests of the business community in Dubai. It does so by creating a favourable environment; promoting Dubai as an international business hub and by supporting the development of business.</p>
                </div>
                <div class="flex-1 relative">
                    <div class="absolute right-[-80px] top-[-30px]">
                        <img class="w-[450px] z-50" src="~/assets/img/IMG_6960-copy.jpg" alt="IMG_6960-copy">
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="px-20 bg-[#dbe2e8]">
        <div class="flex border-b border-black py-14">
            <div>
                <img class="w-40" src="~/assets/icons/icon-a.svg" alt="icon-a">
            </div>
            <div class="space-y-5 w-96">
                <h3 class="text-5xl font-semibold text-[#124460]">Vision</h3>
                <p class="text-lg">To be the best chamber in the world on driving competitiveness and business growth by 2024</p>
            </div>
        </div>
        <div class="flex py-14">
            <div>
                <img class="w-40" src="~/assets/icons/icon-b.svg" alt="icon-a">
            </div>
            <div class="space-y-3 w-96">
                <h3 class="text-5xl font-semibold text-[#124460]">Mission</h3>
                <p>Represent, support and protect the interests of the business community in Dubai</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>