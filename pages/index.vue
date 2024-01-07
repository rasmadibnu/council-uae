<template>
    <div :style="{backgroundImage: `url(${backgroundUrl})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}">
        <div class="px-20 py-36 text-white space-y-5">
            <div class="w-[30rem]">
                <p class="font-bold text-5xl">Unlocking Dubai’s Ambitious Future</p>
            </div>
            <div class="w-[33rem]">
                <p class="font-light">Dubai Chambers is accelerating the emirate’s journey to become the leading global hub for business, trade, and investment</p>
            </div>
            <div>
                <NuxtLink to="/">
                    <div class="border border-white max-w-max px-10 py-4 rounded-lg">
                        <p>Read More</p>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>

    <div class="bg-[#dbe2e8] p-20 space-y-10">
        <div class="flex">
            <div class="flex-1">
                <div class="w-32">
                    <p class="text-[4rem] text-[#124460] font-semibold leading-[4.5rem]">OUR SERVICE</p>
                </div>
            </div>
            <div class="flex-1">
                <p class="text-2xl">Browse below our most used services</p>
            </div>
        </div>
        <div class="grid grid-cols-3 gap-5">
            <div v-for="data in ourService" :key="data.id" class="bg-white h-[15rem] shadow-lg p-[30px] space-y-10">
                <div class="h-[70%] flex space-x-5">
                    <img class="w-12" :src="`_nuxt/assets/icons/${data.icon}`" :alt="data.icon">
                    <p class="font-semibold text-xl">{{data.title}}</p>
                </div>
                <div class="flex justify-between">
                    <NuxtLink to="/">
                        <div class="flex space-x-1">
                            <img class="w-5" src="~/assets/icons/info-circle.svg" alt="info-circle">
                            <p>Details</p>
                        </div>
                    </NuxtLink>
                    <NuxtLink to="/">
                        <div class="flex space-x-1">
                            <img class="w-5" src="~/assets/icons/power.svg" alt="info-circle">
                            <p class="text-secondary">Start Service</p>
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>

    <div class="p-20">
        <div class="flex">
            <div class="flex-1">
                <div class="w-32">
                    <p class="text-[4rem] text-[#124460] font-semibold leading-[4.5rem]">OUR INITIATIVES</p>
                </div>
            </div>
            <div class="flex-1">
                <p class="text-2xl">Over the years, Dubai Chamber of Commerce has established a number of successful initiatives</p>
            </div>
        </div>
    </div>

    <div class="bg-[#dbe2e8] p-20">
        <div class="flex">
            <div class="flex-1">
                <div class="w-32">
                    <p class="text-[4rem] text-[#124460] font-semibold leading-[4.5rem]">RESOURCES</p>
                </div>
            </div>
            <div class="flex-1">
                <p class="text-2xl">One of Dubai Chamber's main objectives is to keep Chamber members and the business community updated with the latest economic development and regulations, business opportunities, facilities and relevant business contacts through well documented materials.</p>
            </div>
        </div>
    </div>

    <div class="p-20">
        <div class="flex">
            <div class="flex-1">
                <div class="w-32">
                    <p class="text-[4rem] text-[#124460] font-semibold leading-[4.5rem]">MEDIA HIGHLIGHTS</p>
                </div>
            </div>
            <div class="flex-1">
                <p class="text-2xl">Over the years, Dubai Chamber of Commerce has established a number of successful initiatives</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import backgroundUrl from '~/assets/img/bg1.jpg'

let ourService = [
    { id: 1, icon: 'layer-1.svg', title: 'New Membership' },
    { id: 2, icon: 'layer-1.svg', title: 'Issuing a certification of origin for personal effect' },
    { id: 3, icon: 'layer-1.svg', title: 'Issuing a Certification of Origin' },
    { id: 4, icon: 'layer-2.svg', title: 'Signature Attestation' },
    { id: 5, icon: 'layer-2.svg', title: 'True Copy' },
    { id: 6, icon: 'layer-2.svg', title: 'Document Verification' },
]
export default {
    data() {
        return { 
            backgroundUrl,
            ourService
        }
    }
}
</script>