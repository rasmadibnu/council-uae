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
                            <NuxtLink to="/services">SERVICES</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/about">ABOUT</NuxtLink>
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
                <h5 class="text-[#d7282f] pl-5">QUICK LINKS</h5>
                <div class="pl-5">
                    <ul class="grid grid-cols-2 gap-y-4">
                        <li v-for="d in data" :key="d.id">
                            <NuxtLink :to="d.path">{{ d.name }}</NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="space-y-5">
                <h5 class="text-[#d7282f]">GET CONNECTED</h5>
                <div>
                    <ul class="grid grid-cols-5 gap-x-3">
                        <li v-for="data in socialMedia" :key="data.id" class="h-10 w-10 flex items-center justify-center bg-[#124460] rounded-full">
                            <NuxtLink to="/">
                                <img :src="`/_nuxt/assets/icons/${data.name}`" :alt="data.name">
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="space-y-5">
                <h5 class="text-[#d7282f]">SUBSCRIBE NEWSLETTER</h5>
                <div>
                    <Input type="text" placeholder="name@domain.com" />
                </div>
            </div>
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
<script>
let data = [
    { id: 1, name: 'Contact Us', path: '/' },
    { id: 2, name: 'Terms &', path: '/' },
    { id: 3, name: 'FAQs', path: '/' },
    { id: 4, name: 'Conditions', path: '/' },
    { id: 5, name: 'Sitemap', path: '/' },
    { id: 6, name: 'Customer', path: '/' },
    { id: 7, name: 'Privacy', path: '/' },
    { id: 8, name: 'Happiness', path: '/' },
    { id: 9, name: 'Policy', path: '/' },
    { id: 10, name: 'Charter', path: '/' },
];

let socialMedia = [
    { id: 1, name: 'brand-facebook-filled.svg' },
    { id: 2, name: 'brand-x.svg' },
    { id: 3, name: 'brand-instagram.svg' },
    { id: 4, name: 'brand-linkedin.svg' },
    { id: 4, name: 'brand-youtube-filled.svg' },
]
export default {
    data() {
        return {
            data,
            socialMedia,
        }
    },
    mounted() {
        console.log(data)
    }
}
</script>
