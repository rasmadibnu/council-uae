<template>
    <Jumbotron title="News and Events">
        <template #breadcrumbs>
            <li>
                <NuxtLink to="/news-and-events">
                    <p style="background-color: rgba(0, 0, 0, 0.05)">News and Events</p>
                </NuxtLink>
            </li>
        </template>
    </Jumbotron>
    <div class="max-w-6xl py-10 pt-32 space-y-10 mx-auto xl:px-0 px-8">
        <NewsCard 
            v-for="(data, index) in newsAndEvents"
            :key="index"
            :url="data.url"
            :title="data.title"
            :description="data.desc"
            :image="data.image"
            :bgcolor="data.bgcolor"
        ></NewsCard>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import { IconArrowNarrowRight } from '@tabler/icons-vue';

let newsAndEvents = [
    { title: 'Chamber News', url: '/news-and-events/news', image: '/img/chambers-building-1-scaled.jpg', desc: '', bgcolor: '' },
    { title: 'Chamber Events', url: '/', image: '/img/Events.jpg', desc: '', bgcolor: 'bg-gray-200' },
]

export default defineComponent({
    components: {
        IconArrowNarrowRight
    },
    setup() {
        return {
            newsAndEvents
        }
    },
})
</script>
