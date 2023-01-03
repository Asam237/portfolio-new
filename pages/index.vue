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
          <h1 class="text-[50px] md:text-[148px] font-extrabold text-white leading-[60px] md:leading-[148px]">
            I'm<br />Abba
            Sali</h1>
          <div class="mt-8 md:mt-20">
            <p class="text-[20px] md:text-[49px] font-light text-white leading-[35px] md:leading-[70px]">
              A Software developer & UI/UX designer focused on developing software for people.
            </p>
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
              EXPERIENCE
            </p>
            <ul class="py-8 md:py-18">
              <li v-for="(item, index) in experiences" :key="index" class="font-bold text-white mb-8">
                <div class="flex flex-col md:flex-row md:justify-between md:items-center">
                  <div>
                    <h4 class="text-[16px] md:text-[20px]">{{ item.title }}</h4>
                    <h2 class="text-[28px] md:text-[49x]">{{ item.subTitle }}</h2>
                  </div>
                  <h4 class="text-[16px] text-gray-100 md:text-[20px] font-light">{{ item.year }}</h4>
                </div>
              </li>
            </ul>
            <hr class="my-8 md:my-20 h-1 text-white" />
            <p class="text-[16px] md:text-[20px] leading-[10px] md:leading-[20px] text-white font-light pt-4 md:pt-8">
              EDUCATION
            </p>
            <ul class="py-8 md:py-18">
              <li v-for="(item, index) in educations" :key="index" class="font-bold text-white mb-8">
                <div class="flex flex-col md:flex-row md:justify-between md:items-center">
                  <div>
                    <h4 class="text-[16px] md:text-[20px]">{{ item.title }}</h4>
                    <h2 class="text-[28px] md:text-[49x]">{{ item.subTitle }}</h2>
                  </div>
                  <h4 class="text-[16px] text-gray-100 md:text-[20px] font-light">{{ item.year }}</h4>
                </div>
              </li>
            </ul>
            <hr class="my-8 md:my-20 h-1 text-white" />
            <p class="text-[16px] md:text-[20px] leading-[10px] md:leading-[20px] text-white font-light pt-4 md:pt-8">
              SKILLS
            </p>
            <ul class="py-8 md:py-18">
              <div class="flex">
                <li v-for="(item, index) in skills" :key="index" class="font-bold text-white mb-8">
                  <img :src=item class="w-10 h-10 mr-3 sm:mr-6 transform transition duration-500 hover:scale-125"
                    alt="" />
                </li>
              </div>
              <h4 class="text-[16px] md:text-[20px] text-white ">
                WORKFLOW
              </h4>
              <div class="site__skills__workflow flex flex-col pt-2 leading-8">
                <div v-for="(item, index) in workflows" :key="index">
                  <p class="text-xs md:text-lg leading-10 text-white">
                    <span>&#10168;</span> {{ item }}
                  </p>
                </div>
              </div>
            </ul>
            <hr class="my-8 md:my-20 h-1 text-white" />
            <p class="text-[16px] md:text-[20px] leading-[10px] md:leading-[20px] text-white font-light pt-4 md:pt-8">
              SELECTED PROJECTS
            </p>
            <ul class="py-8 md:py-18">
              <li v-for="(item, index) in   projects" :key="index"
                class="text-[18px]  md:text-[40px] font-bold text-white leading-[36px] md:leading-[70px] hover:underline">
                <a :href="item.link">{{ item.name }}</a>
              </li>
            </ul>
          </div>
          <a href="/Resume_ABBA_SALI.pdf" target="_blank"
            class="underline text-white font-medium flex justify-start md:justify-end text-xs md:text-lg pt-4 md:pt-0">
            <span class="transform transition duration-500 hover:scale-125">
              Download CV
            </span>
          </a>
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
      workflows: [
        'Mobile-First, Responsive Design',
        'Agile Development & Scrum',
        'Cross Browser Testing & Debugging',
        ' Cross Functional Teams',
      ],
      skills: [
        require('../assets/imgs/nodejs.png'),
        require('../assets/imgs/script-java.png'),
        require('../assets/imgs/coding.png'),
        require('../assets/imgs/api.png'),
        require('../assets/imgs/github.png'),
        require('../assets/imgs/mobile-app.png'),
      ],
      educations: [
        {
          title:
            'COMPUTER ENGINEERING DIPLOMA FROM MANAGEMENT / ANALYST-PROGRAMMER ',
          year: '2021',
          subTitle: 'NATIONAL SCHOOL HIGHER POLYTECHNIC OF MAROUA ',
          content: '',
        },
        {
          title: 'BACCALAUREATE C',
          year: '2016',
          subTitle: 'PROTESTANT COLLEGE OF MOKOLO ',
          content: '',
        },
      ],
      experiences: [
        {
          title: 'Software Developer',
          year: 'July 2022 - PRESENT',
          subTitle: 'DIGITRADE',
          content:
            'Web & Mobile Developer',
        },
        {
          title: 'Mobile Developer',
          year: 'March 2022 - July 2022',
          subTitle: 'Lagence Digital',
          content:
            'Design and development of an a platform to control presence in a given place in an automatic way.',
        },
        {
          title: 'Software Developer',
          year: 'September 2021 - PRESENT',
          subTitle: 'OSS CAMEROON',
          content: 'Working with OSS Cameroon as a software developer ',
          links: [
            {
              name: 'OSS CAMEROON - Website',
              link: 'https://github.com/osscameroon/osscameroon-website/',
            },
            {
              name: 'Onacut',
              link: 'https://github.com/osscameroon/onacut',
            },
            {
              name: 'JOBSIKA',
              link: 'https://github.com/osscameroon/camerdevs',
            },
          ],
        },
        {
          title: 'Mobile Developer (intern)',
          year: 'June 2021 - November 2021',
          subTitle: 'SAHEL VETCHI TECHNOLOGIES',
          content:
            'Design and development of an application business management and monitoring. ',
        },
        {
          title: 'Web Developer (intern)',
          year: 'June 2020 - September 2020',
          subTitle: 'SOCAPRESCO',
          content: 'Design of the showcase site of the structure. ',
        },

      ],
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
