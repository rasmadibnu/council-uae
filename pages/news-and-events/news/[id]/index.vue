<template>
  <Jumbotron>
    <template #breadcrumbs>
      <li>
        <NuxtLink to="/news-and-events">
          <p style="background-color: rgba(0, 0, 0, 0.05)">Media Center</p>
        </NuxtLink>
      </li>
      <li>></li>
      <li>
        <NuxtLink to="/news-and-events">
          <p style="background-color: rgba(0, 0, 0, 0.05)">News</p>
        </NuxtLink>
      </li>
    </template>
  </Jumbotron>
  <div class="max-w-6xl bg-gray-100 px-20 py-5 mx-auto">
    <div class="space-y-5">
      <p class="text-4xl font-semibold">
        Dubai Chamber of Commerce enhances local business community’s cyber
        resilience
      </p>
      <div>
        <p>Date Posted: 28 December 2023</p>
      </div>
      <div class="space-y-10">
        <img class="w-full" src="/img/Mohammad-Ali.png" alt="Ali" />
        <div class="space-y-5">
          <ul class="space-y-3 list-disc pl-5">
            <li>
              Lootah: Offering top-quality services with added value is integral
              to our strategy to elevate Dubai’s business environment and boost
              the private sector’s competitiveness.
            </li>
            <li>
              A year-long programme assists interested Dubai companies in
              evaluating and improving their cybersecurity capabilities.
            </li>
            <li>
              The workshop, attended by 50 participants, explored ways to
              identify sources and reasons for cyberattacks and mechanisms to
              assess risk levels.s
            </li>
          </ul>
          <p>
            Dubai, UAE – Dubai Chamber of Commerce, one of the three chambers
            operating under the Dubai Chambers umbrella, recently organised a
            virtual workshop on cybersecurity in collaboration with Mastercard
            to enhance the Dubai business community’s ability to face
            cyberthreats.
          </p>
          <p>
            Titled ‘Building Cyber Resilience in a Complex and Interconnected
            Digital World’, the workshop was attended by 50 participants from
            various companies operating in Dubai. It featured interactive
            discussions and constructive dialogues, providing participants with
            vital information and valuable insights, along with guidelines and
            real-world data in the digital field.
          </p>
          <p>
            Cyber resilience is a proactive strategy that enhances an
            organisation’s ability to ensure business continuity amid growing
            technological threats by pre-emptively setting up security
            provisions, analysing weaknesses in digital systems, and working to
            protect against potential digital challenges.
          </p>
          <p>
            The workshop is the second in a series of sessions to be held under
            a new initiative, launched by the Dubai Chamber of Commerce in July
            2023 in collaboration with Mastercard. The initiative includes a
            year-long programme to help companies evaluate and improve their
            cybersecurity capabilities.
          </p>
          <p>
            <span class="font-semibold"
              >His Excellency Mohammad Ali Rashed Lootah, President and CEO of
              Dubai Chambers</span
            >, said: “The digital world is constantly evolving as we grow
            increasingly reliant on modern and smart technologies in all areas
            of life. But the pace of cyberattacks is also growing in parallel,
            with expanding scopes and fast-changing methods. This exposes
            institutions and business sectors to imminent risks that must be
            systematically and continually addressed, which makes it more
            important than ever to keep pace with cybersecurity developments,
            exploring best practices, advanced systems, and tools to ensure the
            protection of digital systems.”
          </p>
          <p>
            “This workshop aligns with our efforts to provide support,
            knowledge, and guidance to the local business community in all
            practical and digital domains,” H.E. Lootah added. “The session aims
            to develop Dubai-based companies’ capabilities and potential, in
            addition to offering top-quality services with added value, which is
            integral to our strategy to elevate Dubai’s business environment and
            boost the private sector’s competitiveness.”
          </p>
          <p>
            Participants in the workshop were introduced to critical aspects of
            cybersecurity, including identifying sources and reasons for
            cyberattacks that target companies, as well as assessing the level
            of risk facing technological programmes. Discussions also covered
            best practices for ensuring the security of institutions and the
            latest tools for mitigating cybersecurity risks.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="max-w-6xl mx-auto py-20 space-y-3">
    <p class="text-4xl font-medium">Other News</p>
    <Carousel
      class="w-full overflow-hidden"
      :plugins="[plugin]"
      @mouseenter="plugin.stop"
      @mouseleave="[plugin.reset(), plugin.play(), console.log('Runing')]"
    >
      <CarouselContent class="">
        <CarouselItem v-for="data in newsAndEvents" :key="data">
          <NewsCard
            :date="data.date"
            :url="data.url"
            :title="data.title"
            :description="data.desc"
            :image="data.image"
            :bgcolor="data.bgcolor"
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </div>
</template>

<script lang="ts">
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

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

const plugin = Autoplay({
  delay: 5000,
  stopOnMouseEnter: true,
  stopOnInteraction: false,
});

export default {
  components: {
    Popover,
    PopoverContent,
    PopoverTrigger,
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  },
  setup() {
    return {
      plugin,
      newsAndEvents,
    };
  },
};
</script>
