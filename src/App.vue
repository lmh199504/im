<template>
	<div id="app"><router-View></router-View></div>
</template>

<script>
/* eslint-disable */



export default {
	name: 'App',
	
	data() {
		return {}
	},
	created() {
		//在页面加载时读取sessionStorage里的状态信息
		if (sessionStorage.getItem('store')) {
			this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem('store'))))
			sessionStorage.removeItem('store')
		}

		//在页面刷新时将vuex里的信息保存到sessionStorage里
		window.addEventListener('beforeunload', () => {
			sessionStorage.setItem('store', JSON.stringify(this.$store.state))
		})
	},
	mounted(){
		var my_app_loading = document.getElementById('my_app_loading')
		my_app_loading.remove()
	}

}
</script>

<style scoped></style>
