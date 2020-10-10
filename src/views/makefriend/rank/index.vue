<template>
	<div class="rank">
		<div class="first">
			
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			allLoaded:false
		}
	},
	methods: {
		loadTop() {
			setTimeout(() => {
				this.$refs.loadmore.onTopLoaded()
			},1500)
		},
		loadBottom() {
			// window.console.log('触底加载')
			setTimeout( () => {
				this.$refs.loadmore.onBottomLoaded()
			},3000)
		}
	}
}
</script>

<style lang="stylus" scoped>
	.rank
		.first
			width 8rem
			height 11.2rem
			background linear-gradient(0deg, #F1B5A0 0%, #E9A6BD 100%)
			transform rotate3d(50deg,5deg,5deg)
		
</style>

<style>

</style>
