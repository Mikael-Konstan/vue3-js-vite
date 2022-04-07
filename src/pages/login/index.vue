<template>
	<div>
		<el-button type="primary" @click="login">login</el-button>
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