<template>
  <section>
    <router-view></router-view>
  </section> 
</template>
<script>
let isLogged = true
export default {
    data () {
        return {
            token: ''
        }
    },
    beforeMount () {

    }
}
</script>
