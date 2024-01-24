<template>
  <Jumbotron title="Chamber News">
    <template #breadcrumbs>
      <li>
        <NuxtLink to="/news-and-events">
          <p style="background-color: rgba(0, 0, 0, 0.05)">News And Events</p>
        </NuxtLink>
      </li>
      <li>></li>
      <li>
        <NuxtLink to="/news-and-events">
          <p style="background-color: rgba(0, 0, 0, 0.05)">News</p>
        </NuxtLink>
      </li>
    </template>
    <template #content>
      <div class="grid grid-cols-4 gap-10 py-8 justify-around">
        <Input type="email" placeholder="Email" />

        <Select class="w-full">
          <SelectTrigger class="w-[250px]">
            <SelectValue placeholder="All" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Category</SelectLabel>
              <SelectItem value="business">
                Dubai Centre for Family Business
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Popover>
          <PopoverTrigger as-child>
            <Button
              id="date"
              :variant="'outline'"
              :class="
                cn(
                  'w-[300px] justify-start text-left font-normal',
                  !date && 'text-muted-foreground'
                )
              "
            >
              <CalendarIcon class="mr-2 h-4 w-4" />
              <span>
                {{
                  date.start
                    ? date.end
                      ? `${format(date.start, "LLL dd, y")} - ${format(
                          date.end,
                          "LLL dd, y"
                        )}`
                      : format(date.start, "LLL dd, y")
                    : "Pick a date"
                }}
              </span>
            </Button>
          </PopoverTrigger>
          <PopoverContent
            class="w-auto p-0"
            align="start"
            :avoid-collisions="true"
          >
            <Calendar v-model.range="date" :columns="2" />
          </PopoverContent>
        </Popover>

        <Button variant="secondary">
          Search
          <IconSearch class="w-4 h-4 ml-2" />
        </Button>
      </div>
    </template>
  </Jumbotron>
  <div class="max-w-6xl py-10 mx-auto space-y-10">
    <Carousel
      class="w-full overflow-hidden"
      :plugins="[plugin]"
      @mouseenter="plugin.stop"
      @mouseleave="[plugin.reset(), plugin.play(), console.log('Runing')]"
    >
      <CarouselContent class="">
        <CarouselItem v-for="(data, index) in jumbotronNews" :key="index">
          <div id="jumbotron" class="overflow-x-hidden">
            <div
              class="h-[35rem] flex items-end"
              :style="{
                backgroundImage: `url(${data.banner})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }"
            >
              <div class="p-5 lg:p-10 backdrop-blur-sm">
                <NuxtLink to="/">
                  <p class="text-lg lg:text-5xl font-medium text-white">
                    {{ data.title }}
                  </p>
                </NuxtLink>
              </div>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    <NewsCard
      v-for="data in newsAndEvents"
      :key="data"
      :date="data.date"
      :url="data.url"
      :title="data.title"
      :description="data.desc"
      :image="data.image"
      :bgcolor="data.bgcolor"
    />
  </div>
</template>

<script setup lang="ts">
import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-vue-next";
import { IconSearch } from "@tabler/icons-vue";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ref } from "vue";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const plugin = Autoplay({
  delay: 5000,
  stopOnMouseEnter: true,
  stopOnInteraction: false,
});

let jumbotronNews = [
  {
    title:
      "Dubai Centre for Family Businesses issues ‘Sample Article of Association for Family Businesses",
    banner: "/img/Mohammad-Ali.png",
  },
  {
    title:
      "Dubai Centre for Family Businesses successfully concludes two sessions in Governance Series",
    banner: "/img/CEO-Sustainability-Dialogue-1.jpg",
  },
  {
    title:
      "Dubai Chamber of Commerce reaffirms its commitment to empowering the business community and enhancing its competitiveness to drive economic growth",
    banner:
      "/img/Business-Groups-Councils-Quarterly-Roundtable-Meeting-scaled.jpg",
  },
];

let newsAndEvents = [
  {
    title:
      "Dubai Chamber of Commerce enhances local business community’s cyber resilience",
    date: "28 December 2023",
    url: "/news-and-events/news/1",
    image: "/img/Mohammad-Ali.png",
    desc: "Dubai Chamber of Commerce, one of the three chambers operating under the Dubai Chambers umbrella, recently organised a virtual workshop on cybersecurity in collaboration with Mastercard to enhance the Dubai business community’s ability to face cyberthreats",
  },
  {
    title:
      "Dubai Chamber of Commerce Board and Advisory Council members convene to discuss future strategy and initiatives during Engage Forum 2023",
    date: "23 October 2023",
    url: "/news-and-events/news",
    image: "/img/Dubai-Chambers-Engage-Forum-1.jpg",
    desc: "The annual meeting examined a range of topics including how to overcome legislative obstacles faced by businesses, ways to unlock business growth for SMEs and startups, and measures to enhance dispute resolution procedures. H.E. Abdul Aziz Abdulla Al Ghurair: “As part of our commitment to ensuring a favourable business environment…",
  },
  {
    title:
      "Dubai Chamber of Commerce hosts inaugural CEO Sustainability Dialogue to strengthen private sector engagement in transition to net zero",
    date: "10 October 2023",
    url: "/news-and-events/news",
    image: "/img/CEO-Sustainability-Dialogue-1.jpg",
    desc: "Mohammad Ali Rashed Lootah: “Today’s timely gathering represents another important step in uniting and supporting the private sector in our shared journey towards a sustainable future. We remain committed to strengthening collaboration between the public and private sectors, which will play a key role in advancing the wise leadership’s sustainability…",
  },
];

const date = ref({
  start: new Date(2022, 0, 20),
  end: addDays(new Date(2022, 0, 20), 20),
});
</script>
