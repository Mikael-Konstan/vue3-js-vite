<template>
	<el-submenu v-if="route && route.children && (route.children.length > 1 || (!route.redirect && route.children.length === 1))"
				:index="indexPath"
				:class="{'navLeft' : supPath}">
		<template #title>
			<i v-if="route.meta.icon"
			   :class="route.meta.icon"></i>
			<span class="navtitle">{{ route.meta.title }}</span>
		</template>
		<routerMenu v-for="(child, index) in route.children"
					:key="index"
					:supPath="indexPath"
					:route="child">
		</routerMenu>
	</el-submenu>
	<el-menu-item v-else-if="route.meta && route.meta.title"
				  :index="indexPath">
		<template #title>
			<i v-if="route.meta.icon"
			   :class="route.meta.icon"></i>
			<span class="navtitle">{{ route.meta.title }}</span>
		</template>
	</el-menu-item>
</template>
<script>
	export default {
		name: "routerMenu",
		data () {
			return {
			}
		},
		props: ['route', 'supPath'],
		computed: {
			indexPath: function () {
				let path = ''
				if (this.supPath) {
					path = this.supPath;
				}
				if (this.route.redirect && this.route.children.length === 1) {
					path += this.route.redirect.startsWith('/') ? this.route.redirect : '/' + this.route.redirect;
				} else {
					path += this.route.path.startsWith('/') ? this.route.path : '/' + this.route.path;
				}
				return path
			}
		},
		methods:{
		}	
	}
</script>
<style lang="scss">
.navLeft {
	>div {
		span {
			margin-left: -2%;
		}
	}
}
.navtitle {
    display: inline-block;
    width: 50%;
    text-align: left;
    margin-left: 8%;
}
</style>