<template>
	<div>
		main
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	export default{
		data() {
			return {
				
			}
		},
		created() {
			if(this.isLogin === false) {
				this.$router.replace('/login')
			}
		},
		computed:{
			...mapState({
				isLogin: state => state.user.isLogin
			})
		}
	}
</script>

<style>
	
</style>