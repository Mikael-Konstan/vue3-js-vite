<template>
	<div>
		<button v-on:click="login">login</button>
	</div>
</template>
<script>
    import { setToken } from './../../utils/auth'
	export default {
		name: "login",
		data () {
			return {
			}
        },
        mounted() {
            const logo = require('./../../assets/logo.png')
        },
		methods: {
			login () {
                setToken('signed')
				this.$router.push('/dashboard');
			}
		}
	}
</script>
<style lang="scss" scoped>
</style>