<template>
    <div class="overflow-x-hidden">
        <Carousel
            class="w-full overflow-hidden"
            :plugins="[plugin]"
            @mouseenter="plugin.stop"
            @mouseleave="[plugin.reset(), plugin.play(), console.log('Runing')];"
        >
            <CarouselContent>
                <CarouselItem v-for="(data, index) in jumbotron" :key="index">
                    <div id="jumbotron" class="overflow-x-hidden" :style="{backgroundImage: `url(${data.banner})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}">
                        <div class="p-5 lg:px-20 py-36 text-white space-y-5">
                            <div class="lg:w-[30rem]">
                                <p class="font-bold text-3xl lg:text-5xl">{{ data.title }}</p>
                            </div>
                            <div class="lg:w-[50rem]">
                                <p class="font-light">{{ data.desc }}</p>
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
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    </div>

    <div class="p-5 lg:p-20 space-y-10">
        <div class="space-y-10">
            <div class="flex-1">
                <p class="text-[2rem] text-[#124460] font-semibold"> INDONESIA BUSINESS COUNCIL UAE OBJECTIVE & AIMS</p>
            </div>
            <div>
                <ul class="space-y-3 list-disc pl-5">
                    <li class="text-sm lg:text-lg border border-gray-300 max-w-max px-2 rounded-sm" v-for="(data, index) in objectiveAims" :key="index">{{ data.desc }}</li>
                </ul>
            </div>
        </div>
    </div>

    <!-- Dekstop Our Service -->
    <div class="bg-[#dbe2e8] p-20 space-y-10 hidden lg:block">
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
            <ServiceCard v-for="data in ourService" :key="data.id" :title="data.title" :image="data.icon" />
            <!-- <div v-for="data in ourService" :key="data.id" class="bg-white h-[15rem] shadow-lg p-[30px] space-y-10">
                <div class="h-[70%] flex space-x-5">
                    <img class="w-12" :src="`/icons/${data.icon}`" :alt="data.icon">
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
            </div> -->
        </div>
        <NuxtLink to="/">
            <div class="max-w-max mt-10 hover:bg-primary hover:text-white px-6 py-3 rounded-md border border-primary">
                <p>View All Service</p>
            </div>
        </NuxtLink>
    </div>

    <!-- Mobile Our Service -->
    <div class="bg-[#dbe2e8] p-5 space-y-10 lg:hidden">
        <div>
            <div class="flex-1">
                <p class="text-[2rem] text-[#124460] font-semibold">OUR SERVICE</p>
            </div>
            <div class="flex-1">
                <p class="text-xl">Browse below our most used services</p>
            </div>
        </div>
        <div class="flex items-center space-x-2">
            <Carousel class="w-full max-w-xs mx-auto">
                <CarouselContent>
                    <CarouselItem v-for="(data, index) in ourService" :key="index">
                        <div class="p-1">
                            <div class="bg-white h-[15rem] p-[30px] space-y-10">
                                <div class="h-[70%] flex space-x-5">
                                    <img class="w-12" :src="`/icons/${data.icon}`" :alt="data.icon">
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
                    </CarouselItem>
                    
                </CarouselContent>
                <NuxtLink to="/">
                    <div class="max-w-max mt-10 hover:bg-primary hover:text-white px-6 py-3 rounded-md border border-primary">
                        <p>View All Service</p>
                    </div>
                </NuxtLink>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    </div>

    <div class="p-20 space-y-20">
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
        <div class="grid grid-cols-3 gap-x-20">
            <div class="flex items-center p-10 border border-gray-300 cursor-pointer hover:shadow-md hover:border-black">
                <img src="/img/ibcuae-logo.jpg" alt="dcfb_logo">
            </div>
            <div class="flex items-center p-10 border border-gray-300 cursor-pointer hover:shadow-md hover:border-black">
                <img src="/img/pakuwon.jpg" alt="dcfb_logo">
            </div>
            <div class="flex items-center border p-10 border-gray-300 cursor-pointer hover:shadow-md hover:border-black">
                <img src="/img/dubai-innovation-model.jpg" alt="dcfb_logo">
            </div>
        </div>
        <NuxtLink to="/">
            <div class="max-w-max mt-10 hover:bg-primary hover:text-white px-6 py-3 rounded-md border border-primary">
                <p>View All Initiatives</p>
            </div>
        </NuxtLink>
    </div>

    <div id="bg-resource" class="bg-[#dbe2e8] p-5 lg:p-20 space-y-10">
        <div class="lg:flex">
            <div class="flex-1">
                <div class="w-32">
                    <p class="text-4xl lg:text-[4rem] text-[#124460] font-semibold leading-[4.5rem]">RESOURCES</p>
                </div>
            </div>
            <div class="flex-1">
                <p class="text-md lg:text-2xl">One of Dubai Chamber's main objectives is to keep Chamber members and the business community updated with the latest economic development and regulations, business opportunities, facilities and relevant business contacts through well documented materials.</p>
            </div>
        </div>
        <div class="grid grid-cols-3 gap-5 overflow-x-hidden">
            <div v-for="data in dataResources" :key="data.id" class="cursor-pointer relative">
                <div class="absolute w-full h-full top-0 left-0 bg-primary z-10 opacity-65"></div>
                <img class="w-full h-full block z-20" :src="`/img/${data.image}`" alt="Information_Research">
                <div class="absolute w-52 top-10 left-5 z-30">
                    <h4 class="text-white text-xl font-semibold">{{ data.title }}</h4>
                </div>
                <div class="flex space-x-3 absolute bottom-10 left-5 z-40">
                    <p class="text-white font-medium">VIEW DETAILS</p>
                    <img src="~/assets/icons/arrow-narrow-right.svg" alt="arrow-narrow-right">
                </div>
            </div>
        </div>
        <NuxtLink to="/">
            <div class="max-w-max mt-10 hover:bg-primary hover:text-white px-6 py-3 rounded-md border border-primary">
                <p>View All Resources</p>
            </div>
        </NuxtLink>
    </div>

    <div class="p-20">
        <div class="flex">
            <div class="flex-1">
                <div class="w-32">
                    <p class="text-[4rem] text-[#124460] font-semibold leading-[4.5rem]">OUR GALLERY</p>
                </div>
            </div>
            <div class="flex-1">
                <p class="text-2xl">Over the years, Dubai Chamber of Commerce has established a number of successful initiatives</p>
            </div>
        </div>
    </div>
    <div class="pb-10">
        <Carousel
            class="w-full overflow-hidden"
            :plugins="[plugin]"
            @mouseenter="plugin.stop"
            @mouseleave="[plugin.reset(), plugin.play(), console.log('Runing')];"
        >
            <CarouselContent class="w-full mx-auto">
                <CarouselItem v-for="data in logos" :key="data.id" class="flex justify-center">
                    <div class="w-[30rem]">
                        <img :src="data.image" alt="">
                    </div>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    </div>
</template>

<script lang="ts">
import backgroundUrl from '/img/bg1.jpg'
import Autoplay from 'embla-carousel-autoplay'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

const plugin = Autoplay({
  delay: 5000,
  stopOnMouseEnter: true,
  stopOnInteraction: false,
})

let jumbotron = [
    {
        title: 'Unlocking Dubai’s Ambitious Future', 
        desc: 'Indonesia Business Council United Arab Emirates (IBCUAE) aims to foster Economic Cooperation, Trade, Investment, and Business Collaboration between the two countries, nurture enhance partnership to be more real, executable supported by excellent Team to enable a sustainable long-term operation. The community council will provide a foundation platform for Business Owners, Government Officials, and Industry Leaders to Interact, Share Insights, and Collaborate on projects that benefit both economies', 
        banner: '/img/img20231112170935_orig.jpg' 
    },
    // {
    //     title: 'Dubai Centre for Family Businesses', 
    //     desc: 'Dubai Centre for Family Businesses (DCFB) was launched under the umbrella of Dubai Chambers to achieve His Highness Sheikh Mohammed bin Rashid Al Maktoum’s vision of ensuring the sustainability and growth of family businesses as key contributors to the nation’s economy.', 
    //     banner: '/img/bg2.jpg' 
    // },
]

let ourService = [
    { id: 1, icon: 'layer-1.svg', title: 'New Membership' },
    { id: 2, icon: 'member.svg', title: 'Membership Renewal' },
    { id: 3, icon: 'member.svg', title: 'Membership Amendment' },
    { id: 4, icon: 'member.svg', title: 'Membership Cancellation' },
    // { id: 2, icon: 'layer-1.svg', title: 'Issuing a certification of origin for personal effect' },
    // { id: 3, icon: 'layer-1.svg', title: 'Issuing a Certification of Origin' },
    // { id: 4, icon: 'layer-2.svg', title: 'Signature Attestation' },
    // { id: 5, icon: 'layer-2.svg', title: 'True Copy' },
    { id: 5, icon: 'layer-2.svg', title: 'Document Verification' },
]

let dataResources = [
    { id: 1, title: 'Centre for Business Studies and Research', image: 'Information_Research.jpg' },
    { id: 2, title: 'Digital Services Guidelines', image: 'E-services-Help.jpg' },
    { id: 3, title: 'Dubai Innovation Index', image: 'Dubai_Innvation.jpg' },
    { id: 4, title: 'E-Library', image: 'Login.jpg' },
    { id: 5, title: 'Dubai Quarterly Business Survey', image: 'Business-Survey.jpg' },
]

let logos = [
    { id: 1, image: '/img/img20231112170935_orig.jpg' },
    { id: 2, image: '/img/img20231202135312_orig.jpg' },
    { id: 3, image: '/img/img20231130133434_orig.jpg' },
    { id: 4, image: '/img/img20231130135815_orig.jpg' },
    { id: 5, image: '/img/img20231202135224_orig.jpg' },
    { id: 6, image: '/img/img20231202173257_orig.jpg' },
]

let objectiveAims = [
    { id: 1, desc: 'Promote Trade' },
    { id: 2, desc: 'Boost Investment' },
    { id: 3, desc: 'Enhance Business Collaboration' },
    { id: 4, desc: 'Enhance Trading, Business & Technology Knowledge' },
    { id: 5, desc: 'Address Global Challenges' },
    { id: 6, desc: 'Cultural Exchange Formulation' },
    { id: 7, desc: 'Industry Mapping with Superb Intelligence Custom Clients Needs' },
    { id: 8, desc: 'Deliver Sustainability Solution' },
]

export default {
    components: { 
        Carousel, 
        CarouselContent, 
        CarouselItem, 
        CarouselNext, 
        CarouselPrevious 
    },
    data() {
        return { 
            backgroundUrl,
            ourService,
            dataResources,
            logos,
            plugin,
            jumbotron,
            objectiveAims
        }
    }
}
</script>

<style scoped>
#bg-resource {
    background-image: url('/img/home-resources-bg.png');
    background-size: cover;
    background-position: center;
}

@media only screen and (max-width: 640px) {
    #bg-resource {
        background-size: cover; /* Ukuran gambar yang sesuai dengan layar */
        background-position: center; /* Posisi gambar di tengah */
    }

    #jumbotron {
        background-size: cover; /* Ukuran gambar yang sesuai dengan layar */
        background-position: center; /* Posisi gambar di tengah */
    }
}
</style>