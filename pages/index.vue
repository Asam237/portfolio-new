<template>
  <div>
    <div class="flex">
      <div class="hidden lg:flex sticky top-0 w-1/5 h-screen">
        <div class="pt-16 pl-16 w-10/12">
          <CAside />
        </div>
      </div>
      <main class="w-full lg:w-4/5 lg:pl-[12rem]">
        <div class="max-h-[99vh] overflow-x-hidden overflow-scroll px-8 pt-10 md:pt-52 w-full">
          <div class="lg:w-4/5">
            <h1
              class="text-[50px] md:text-[100px] lg:text-[148px] font-medium text-white leading-[60px] md:leading-[100px] lg:leading-[160px]">
              Passionate<br />Software<br />
              engineer</h1>
            <div class="mt-20 sm:32 lg:mt-44">
              <div id="about" class="pb-20 lg:pb-36 md:pt-4">
                <p class="text-lg sm:text-xl text-white font-medium">
                  ABOUT
                </p>
                <hr class="h-1 text-white mt-2 sm:mt-6" />
                <p
                  class="text-xl md:text-4xl font-normal text-white leading-[35px] md:leading-[60px] py-4 sm:py-8 md:py-14">
                  Hi, I'm Abba Sali.<br />
                  A software developer & UI/UX designer focused<br />on developing software for people.
                </p>
                <p
                  class="text-xl md:text-4xl font-normal text-white leading-[35px] md:leading-[60px] py-2">
                  I love architecting software and developing<br />
                  elegant solutions to complex problems
                </p>
                <h4
                  class="text-[1.5rem] sm:text-[2.5rem] md:text-[4.5rem] font-medium text-white leading-[3rem] md:leading-[5rem] pt-14 sm:pt-18 md:pt-24">
                  A problem without a<br />solution is a poorly stated problem.</h4>
                <p class="text-lg sm:text-xl font-normal pt-4 md:pt-8 text-white">
                  Albert Einstein
                </p>
              </div>
              <div id="skills" class="pb-20 md:pb-36 md:pt-4">
                <p class="text-lg sm:text-xl text-white font-medium">
                  SKILLS
                </p>
                <hr class="h-1 text-white mt-2 sm:mt-6" />
                <ul class="pt-8 md:pt-20">
                  <li v-for="(item, index) in skills" :key="index" class="font-medium text-white mb-3 sm:mb-6">
                    <p class="text-xl md:text-4xl font-extralight">
                      <span class="mr-4">&mdash;</span>{{ item }}
                    </p>
                  </li>
                </ul>
              </div>
              <div id="experience" class="pb-20 md:pb-36 md:pt-4">
                <p class="text-lg sm:text-xl text-white font-medium">
                  EXPERIENCE
                </p>
                <hr class="h-1 text-white mt-2 sm:mt-6" />
                <ul class="pt-8 md:pt-20">
                  <li v-for="(item, index) in experiences" :key="index" class="font-medium text-white mb-3 sm:mb-6">
                    <p class="text-xl md:text-4xl text-gray-100">
                      <span class="mr-4">&mdash;</span>{{ item }}
                    </p>
                  </li>
                </ul>
              </div>
              <div id="education" class="pb-20 md:pb-36 md:pt-4">
                <p class="text-lg sm:text-xl text-white font-medium">
                  EDUCATION
                </p>
                <hr class="h-1 text-white mt-2 sm:mt-6" />
                <ul class="pt-8 md:pt-20">
                  <li v-for="(item, index) in educations" :key="index" class="text-white mb-8">
                    <div class="flex flex-col md:flex-row md:justify-between md:items-center">
                      <div>
                        <h4 class="text-lg md:text-2xl font-medium">{{ item.title }}</h4>
                        <h2 class="text-sm sm:text-lg font-light pt-2">{{ item.subTitle }}</h2>
                      </div>
                      <h4 class="text-lg sm:text-xl font-light">{{ item.year }}</h4>
                    </div>
                  </li>
                </ul>
              </div>
              <div id="projects" class="pb-20 md:pb-36 md:pt-4">
                <p class="text-lg sm:text-xl text-white font-medium">
                  SELECTED PROJECTS
                </p>
                <hr class="h-1 text-white mt-2 sm:mt-6" />
                <ul class="pt-8 md:pt-20">
                  <li v-for="(item, index) in projects" :key="index" class="mb-3 md:mb-6">
                    <a :href="item.link" class="text-xl md:text-4xl text-white font-medium hover:underline">{{
                      item.name
                    }}</a>
                  </li>
                </ul>
              </div>
              <div id="contacts" class="pb-20 md:pb-36 md:pt-4">
                <p class="text-lg sm:text-xl text-white font-medium">
                  CONTACT
                </p>
                <hr class="h-1 text-white mt-2 sm:mt-6" />
                <ul class="pt-8 md:pt-20">
                  <li v-for="(item, index) in contact" :key="index" class="mb-3 md:mb-6">
                    <p class="text-xl md:text-4xl font-medium text-white hover:underline">{{
                      item
                    }}</p>
                  </li>
                </ul>
              </div>
            </div>
            <a href="/Resume_ABBA_SALI.pdf" target="_blank"
              class="underline text-white font-medium flex justify-start md:justify-end text-xs md:text-lg pt-4 md:pt-0">
              <span class="transform transition duration-500 hover:scale-125">
                Download CV
              </span>
            </a>
            <footer class="pt-6 md:pt-14">
              <p
                class="text-[16px] md:text-[20px] leading-[10px] md:leading-[20px] text-white font-light text-start sm:text-center pt-4">
                inspired by <a href="https://www.mystroken.com/" class="font-bold">Mystro ken</a>
              </p>
              <p
                class="text-[16px] md:text-[20px] pt-4 leading-[20px] text-white font-light pb-8 md:pb-12 text-start sm:text-center">
                Copyright &copy; {{ new Date().getFullYear() }} Abba Sali, All rights reserved.
              </p>
            </footer>
          </div>
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
      title: 'Abba Sali ??? Software developer & UI/UX designer'
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
        require('../assets/imgs/script-java.png'),
        require('../assets/imgs/typescript.png'),
        require('../assets/imgs/react.png'),
        require('../assets/imgs/docker.png'),
        require('../assets/imgs/coding.png'),
        require('../assets/imgs/api.png'),
        require('../assets/imgs/linux.png'),
        require('../assets/imgs/github.png'),
        require('../assets/imgs/mobile-app.png'),
        require('../assets/imgs/open.png'),
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
      skills: [
        "JavaScript",
        "TypeScript",
        "Node.js",
        "Mongo",
        "React.js",
        "Flutter",
        "Android",
        "API Rest",
        "Responsive Design",
        "Docker",
        "Git"
      ],
      experiences: [
        "JavaScript",
        "TypeScript",
        "Node.js",
        "Mongo",
        "React.js",
        "Flutter",
        "API Rest",
        "Responsive Design",
        "Docker",
        "Git"
      ],
      // experiences: [
      //   {
      //     title: 'Software Developer',
      //     year: 'July 2022 - PRESENT',
      //     subTitle: 'DIGITRADE',
      //     content:
      //       'Web & Mobile Developer',
      //   },
      //   {
      //     title: 'Mobile Developer',
      //     year: 'March 2022 - July 2022',
      //     subTitle: 'Lagence Digital',
      //     content:
      //       'Design and development of an a platform to control presence in a given place in an automatic way.',
      //   },
      //   {
      //     title: 'Software Developer',
      //     year: 'September 2021 - PRESENT',
      //     subTitle: 'OSS CAMEROON',
      //     content: 'Working with OSS Cameroon as a software developer ',
      //     links: [
      //       {
      //         name: 'OSS CAMEROON - Website',
      //         link: 'https://github.com/osscameroon/osscameroon-website/',
      //       },
      //       {
      //         name: 'Onacut',
      //         link: 'https://github.com/osscameroon/onacut',
      //       },
      //       {
      //         name: 'JOBSIKA',
      //         link: 'https://github.com/osscameroon/camerdevs',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'Mobile Developer (intern)',
      //     year: 'June 2021 - November 2021',
      //     subTitle: 'SAHEL VETCHI TECHNOLOGIES',
      //     content:
      //       'Design and development of an application business management and monitoring. ',
      //   },
      //   {
      //     title: 'Web Developer (intern)',
      //     year: 'June 2020 - September 2020',
      //     subTitle: 'SOCAPRESCO',
      //     content: 'Design of the showcase site of the structure. ',
      //   },

      // ],
      contact: [
        "+237 691 846 922",
        "abbasalimokolo@gmail.com"
      ],
      projects: [
        {
          link: "https://github.com/osscameroon/jobsika",
          name: "Jobsika"
        },
        {
          link: "https://github.com/Asam237/reservation_app",
          name: "Flutter Reservation App"
        },
        {
          link: "http://github.com/osscameroon/onacut",
          name: "Onacut"
        },
      ]
    }
  },
  components: {
    CAside
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;800&display=swap');
</style>