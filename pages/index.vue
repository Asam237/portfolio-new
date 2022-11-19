<template>
  <div>
    <div class="flex">
      <div class="hidden md:flex sticky top-0 w-1/5 h-screen">
        <div class="pt-16 pl-16 w-10/12">
          <CAside />
        </div>
      </div>
      <main class="w-full md:w-4/5 md:pl-[12rem]">
        <div class="max-h-[99vh] overflow-x-hidden  overflow-scroll px-8 pt-10 md:pt-52 w-ful md:w-10/12">
          <h4 class="text-[20px] md:text-[49px] font-bold text-white leading-[70px]">Hello</h4>
          <h1 class="text-[50px] md:text-[148px] font-bold text-white leading-[60px] md:leading-[148px]">I'm<br />Abba
            Sali</h1>
          <div class="mt-8 md:mt-20">
            <p class="text-[20px] md:text-[49px] font-light text-white leading-[35px] md:leading-[70px]">
              A Software developer & UI/UX designer focused on designing and developing software for people.</p>
            <p class="text-[20px] md:text-[49px] font-light mt-4 md:mt-10 text-white leading-[35px] md:leading-[70px]">
              I love architecting software and developing elegant solutions to complex problems
            </p>
            <hr class="my-8 md:my-20 h-1 text-white" />
            <h4 class="text-[28px] md:text-[49px] font-bold text-white leading-[40px] md:leading-[70px]">
              “A problem without a solution is a poorly stated
              problem.”</h4>
            <p class="text-[16px] md:text-[20px] leading-[10px] md:leading-[20px] text-white font-light pt-4 md:pt-8">
              <span class="mr-4">&ndash;</span>ALBERT EINSTEIN
            </p>
            <hr class="my-8 md:my-20 h-1 text-white" />
            <p class="text-[16px] md:text-[20px] leading-[10px] md:leading-[20px] text-white font-light pt-4 md:pt-8">
              SELECTED PROJECTS
            </p>
            <ul class="py-8 md:py-18">
              <li v-for="(item, index) in projects" :key="index"
                class="text-[18px]  md:text-[40px] font-bold text-white leading-[36px] md:leading-[70px] hover:underline">
                <a :href="item.link">{{ item.name }}</a>
              </li>
            </ul>
          </div>
          <footer class="pt-6 md:pt-14">
            <p
              class="text-[16px] md:text-[20px] leading-[10px] md:leading-[20px] text-white font-light text-center pt-4">
              inspired by <a href="https://www.mystroken.com/" class="font-bold">Mystro ken</a>
            </p>
            <p class="text-[16px] md:text-[20px] pt-4 leading-[20px] text-white font-light pb-8 md:pb-12 text-center">
              Copyright &copy; {{ new Date().getFullYear() }} Abba Sali, All rights reserved.
            </p>
          </footer>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import CAside from '~/components/aside.vue'
export default {
  name: 'IndexPage',
  head() {
    return {
      title: 'Abba Sali — Software developer & UI/UX designer'
    }
  },
  data() {
    return {
      projects: [
        {
          link: "https://github.com/Asam237/reservation_app",
          name: "Flutter Reservation App"
        },
        {
          link: "https://github.com/Asam237/alert_eneo_mobile",
          name: "Alerte ENEO Mobile"
        },
        {
          link: "https://github.com/Asam237/send_money_ui",
          name: "Clone Send Money UI"
        },
      ]
    }
  },
  components: {
    CAside
  }
}
</script>
