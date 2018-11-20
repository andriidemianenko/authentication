<template>
    <section>
        <form @submit.prevent="sendUserData">
            <label>Login:</label>
            <input v-model="login" type="text" autofocus placeholder="login" required>
            <label>Password:</label>
            <input v-model="password" type="password" autofocus placeholder="password" required>
            <button>submit</button>
        </form>
        <br>
        <router-link to="/">Back</router-link>
    </section>
</template>
<script>
export default {
    data () {
        return {
            login: '',
            password: '',
            endpoint: ''
        }
    },
    methods: {
        sendUserData () {
            console.log('Clicked!')
        }
    }
}
</script>

<style scoped>

</style>

