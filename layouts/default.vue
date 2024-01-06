<template>
    <div class="px-20 py-5 bg-gray-200">
        <div class="">
            <div class="flex justify-between">
                <div class="w-40">
                    <img src="~/assets/img/dubai-chamber-logo-en.png" alt="dubai-chamber-logo-en">
                </div>
                <nav class="flex space-x-5">
                    <ul class="flex justify-between items-center space-x-5 font-semibold text-lg">
                        <li>
                            <NuxtLink to="/">HOME</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/service">SERVICE</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/">ABOUT</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/">RESOURCE</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/">NEWS AND EVENTS</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/">CONTACTS</NuxtLink>
                        </li>
                    </ul>
                </nav>
                <div class="flex items-center">
                    <p>button</p>
                </div>
            </div>
        </div>
    </div>
    <slot />
    <div class="px-20 py-10 border-y border-gray-400">
        <div class="grid grid-cols-4 gap-x-5">
            <div class="space-y-7">
                <NuxtLink to="/">
                    <img src="~/assets/img/dubai-chamber-logo-en.png" alt="dubai-chamber-logo-en">
                </NuxtLink>
                <div class="text-xl">
                    <p class="text-[#d7282f]">TOLL FREE</p>
                    <p>800CHAMBER(800 242 6237)</p>
                </div>
            </div>
            <div class="space-y-5">
                <h5 class="text-[#d7282f]">QUICK LINKS</h5>
                <div>
                    
                </div>
            </div>
            <div></div>
            <div></div>
        </div>
    </div>
    <div class="flex px-20 py-5 space-x-14">
        <div>
            <p>Copyright © 2024 Dubai Chamber of Commerce, all rights reserved | Site maintained by Dubai Chamber of Commerce.</p>
            <p>The site is best viewed using IE11 and above, Mozilla Firefox, Safari and Chrome</p>
        </div>
        <div>
            <p>Last updated on: 29-09-2022</p>
        </div>
    </div>
</template>
<script lang="ts" setup>
</script>
