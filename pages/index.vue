<template>
  <div class="bg-primary">
    <div class="flex">
      <div class="hidden md:flex h-screen">
        <div class="w-20 pt-16 pl-16">
          <CAside />
        </div>
      </div>
      <div>
        <div class="px-4 sm:px-[22rem] md:px-[32rem] pt-64">
          <div>
            Main
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CAside from '~/components/aside.vue'
export default {
  name: 'IndexPage',
  components: {
    CAside
  }
}
</script>
