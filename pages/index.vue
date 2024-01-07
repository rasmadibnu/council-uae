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
        <div class="grid grid-cols-3 gap-x-5">
            <div>
                <Card class="py-5">
                    <CardContent>
                        <div>
                            <img src="~/assets/icons/icon-7/badge.svg" alt="blabla">
                            New Membership
                        </div>
                    </CardContent>
                    <CardFooter>
                        <div class="flex space-x-5">
                            <p>Details</p>
                            <p>Start Service</p>
                        </div>
                    </CardFooter>
                </Card>
            </div>
            <div>
                <Card class="py-5">
                    <CardContent>
                        <div>
                            Issuing a certification of origin for personal effect
                        </div>
                    </CardContent>
                    <CardFooter>
                        <div class="flex space-x-5">
                            <p>Details</p>
                            <p>Start Service</p>
                        </div>
                    </CardFooter>
                </Card>
            </div>
            <div>
                <Card class="py-5">
                    <CardContent>
                        <div>
                            Issuing a Certification of Origin
                        </div>
                    </CardContent>
                    <CardFooter>
                        <div class="flex space-x-5">
                            <p>Details</p>
                            <p>Start Service</p>
                        </div>
                    </CardFooter>
                </Card>
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
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default {
    data() {
        return { backgroundUrl }
    }
}
</script>