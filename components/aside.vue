<template>
    <div class="flex flex-col h-[92vh]">
        <div class="h-1/6">
            <h4 class="font-semibold text-[25px] text-white hover:underline">
                <a href="/">
                    Abba Sali
                </a>
            </h4>
        </div>
        <div class="h-1/3">
            <ul>
                <li class="text-xl leading-[40px] text-white font-light hover:underline"
                    v-for="(item, index) in navs" :key="index">
                    <a :href="item.link">{{ item.name }}</a>
                </li>
            </ul>
        </div>
        <!-- <div class="h-1/3">
            <ul>
                <li class="text-[25px] leading-[40px] text-white font-light" v-for="(item, index) in footer">
                    <p>
                        {{ item }}
                    </p>
                </li>
            </ul>
        </div> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            navs: [
                {
                    link: "#about",
                    name: "About"
                },
                {
                    link: "#skills",
                    name: "Skills"
                },
                {
                    link: "#experience",
                    name: "Experience"
                },
                {
                    link: "#education",
                    name: "Education"
                },
                {
                    link: "#projects",
                    name: "Projects"
                },
                {
                    link: "#contacts",
                    name: "Contact"
                },
            ],
            links: [
                {
                    link: "https://github.com/Asam237",
                    name: "Github"
                },
                {
                    link: "https://www.linkedin.com/in/abba-sali-aboubakar-mamate",
                    name: "LinkedIn"
                },
                {
                    link: "https://twitter.com/asam_237",
                    name: "Twitter"
                },
                {
                    link: "https://www.instagram.com/as4m237__",
                    name: "Instagram"
                },
            ],
            footer: [
                "+237 691 846 922",
                "abbasalimokolo@gmail.com"
            ]
        }
    }

}
</script>