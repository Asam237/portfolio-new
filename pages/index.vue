<template>
  <div>
    <div class="flex">
      <div class="hidden md:flex sticky top-0 w-1/5 h-screen">
        <div class="pt-16 pl-16 w-10/12">
          <CAside />
        </div>
      </div>
      <div class="w-4/5">
        <div class="px-4 pt-64 w-10/12">
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


<style>
.aside {
  float: right;
  margin: 0 0 0 2em;
  max-height: 100%;
  overflow: auto;
  width: 5em;
  border: dotted 1px #ff0000;
}
</style>