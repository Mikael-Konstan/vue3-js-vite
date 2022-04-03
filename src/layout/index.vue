<template>
	<el-container>
		<el-aside width="200px">
			<el-menu :uniqueOpened="true"
					 :collapse="isCollapse"
					 :default-active="$route.path"
					 :router="true"
					 class="el-menu-vertical-demo"
					 background-color="#545c64"
					 text-color="#fff"
					 active-text-color="#ffd04b">
				<routerMenu v-for="(route, index) in $router.options.routes"
							:key="index"
							:route="route">
				</routerMenu>
			</el-menu>
		</el-aside>
		<el-main>
			<router-view></router-view>
		</el-main>
	</el-container>
</template>
<script>
	import routerMenu from './components/routerMenu.vue'
	export default {
		name: "layout",
		data () {
			return {
				isCollapse: false,
			}
		},
		components: {
			routerMenu
		},
		mounted () {
			// console.log(this.$router)
			// console.log(this.$route)
		},
	}
</script>
<style lang="scss">
	.el-container {
		height: 100%;
		.el-aside {
			height: 100%;
			.el-menu {
				height: 100%;
			}
			.el-submenu .el-menu-item{
				min-width: 180px;
			}
		}
	}
</style>