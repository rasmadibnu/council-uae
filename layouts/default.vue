<template>
    <div class="px-20 py-5">
        <div class="">
            <div class="space-y-5 lg:space-y-0 lg:flex lg:justify-between">
                <div class="w-40">
                    <img src="/img/ibcuae-logo.jpg" alt="ibcuae-logo">
                </div>
                <nav class="hidden lg:flex lg:space-x-5">
                    <ul class="flex justify-between items-center space-x-5 font-semibold text-lg">
                        <li>
                            <NuxtLink to="/">
                                <IconHome2 size="30" class="text-secondary hover:text-primary" />
                            </NuxtLink>
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
                <div class="flex items-center space-x-7">
                    <Sheet>
                        <SheetTrigger>
                            <IconSearch class="hover:text-secondary" size="30" />
                        </SheetTrigger>
                        <SheetContent class="bg-primary">
                            <div class="mt-5 space-y-5">
                                <div class="flex">
                                    <Input class="rounded-none" id="text" type="text" placeholder="Type keywoard to search" />
                                    <Button type="submit" class="bg-white text-primary rounded-none hover:bg-secondary hover:text-white">
                                        <IconMicrophone size="20" />
                                    </Button>
                                    <Button type="submit" class="bg-white text-primary rounded-none hover:bg-secondary hover:text-white">
                                        <IconSearch size="20" />
                                    </Button>
                                </div>
                                <div>
                                    <div class="text-white space-y-3">
                                        <p class="text-2xl text-white font-semibold">Search In</p>
                                        <div class="flex space-x-3">
                                            <div class="flex items-center space-x-1">
                                                <Checkbox class="border-white" id="pages" />
                                                <Label class="text-white" for="pages">Pages</Label>
                                            </div>
                                            <div class="flex items-center space-x-1">
                                                <Checkbox class="border-white" id="pages" />
                                                <Label class="text-white" for="news">News</Label>
                                            </div>
                                            <div class="flex items-center space-x-1">
                                                <Checkbox class="border-white" id="pages" />
                                                <Label class="text-white" for="services">Services</Label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                    <NuxtLink to="/">
                        <IconUser class="hover:text-secondary" size="30" />
                    </NuxtLink>
                    <Sheet>
                        <SheetTrigger>
                            <div class="p-2 bg-primary rounded-full hover:bg-secondary">
                                <IconAlignRight size="35" color="white" />
                            </div>
                            <p>Menu</p>
                        </SheetTrigger>
                        <SheetContent class="bg-primary">
                            <!-- <SheetHeader>
                                <SheetTitle>Are you sure absolutely sure?</SheetTitle>
                                <SheetDescription>
                                    This action cannot be undone. This will permanently delete your account
                                    and remove your data from our servers.
                                </SheetDescription>
                            </SheetHeader> -->
                            <div>
                                <ul class="font-semibold space-y-5 text-xl text-white">
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
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </div>
    </div>
    <slot />
    <div class="px-5 lg:px-20 py-10 border-y border-gray-400">
        <div class="grid space-y-5 lg:space-y-0 lg:grid-cols-4 lg:gap-x-5">
            <div class="space-y-7">
                <NuxtLink to="/">
                    <img src="/img/ibcuae-logo.jpg" class="w-[60%]" alt="dubai-chamber-logo-en">
                </NuxtLink>
                <div class="text-xl">
                    <p class="text-[#d7282f]">TOLL FREE</p>
                    <p>800CHAMBER(800 242 6237)</p>
                </div>
            </div>
            <div class="space-y-5">
                <h5 class="text-[#d7282f] lg:pl-5">QUICK LINKS</h5>
                <div class="lg:pl-5">
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
                    <ul class="grid grid-cols-5 lg:gap-x-3">
                        <li v-for="data in socialMedia" :key="data.id" class="h-10 w-10 flex items-center justify-center bg-[#124460] rounded-full">
                            <NuxtLink to="/">
                                <img :src="`/icons/${data.name}`" :alt="data.name">
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
    <div class="flex flex-col lg:flex-row text-center lg:text-left px-5 lg:px-20 py-5 lg:space-x-14">
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
import { 
    IconUser,
    IconAlignRight,
    IconSearch,
    IconHome2,
    IconMicrophone
} from '@tabler/icons-vue';
import { Checkbox } from '@/components/ui/checkbox'

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
    components: {
        IconAlignRight,
        IconUser,
        IconSearch,
        IconMicrophone,
        IconHome2,
        Checkbox
    },
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
