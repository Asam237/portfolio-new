<template>
    <div class="flex flex-col justify-between h-screen">
        <div class="h-1/3">
            <h4 class="font-bold text-[25px] text-white hover:underline">
                <a href="/">
                    Abba Sali
                </a>
            </h4>
        </div>
        <div class="h-1/3">
            <ul>
                <li class="text-[25px] leading-[35px] text-white font-light hover:underline"
                    v-for="(item, index) in links" :key="index">
                    <a :href="item.link">{{ item.name }}</a>
                </li>
            </ul>
        </div>
        <div class="h-1/3">
            <ul>
                <li class="text-[25px] leading-[35px] text-white font-light" v-for="(item, index) in footer">
                    {{ item }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            links: [
                {
                    link: "#",
                    name: "Github"
                },
                {
                    link: "#",
                    name: "LinkedIn"
                },
                {
                    link: "#",
                    name: "Twitter"
                },
                {
                    link: "#",
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