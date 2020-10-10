<template>
	<div class="nearby">
		<mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
			<ul>
				<li v-for="item in 100" :key="item">{{ item }}</li>
			</ul>
		</mt-loadmore>
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
			window.console.log('触底加载')
			setTimeout( () => {
				this.$refs.loadmore.onBottomLoaded()
			},1500)
		}
	}
}
</script>

<style>
	/* .nearby{
		overflow: scroll;
	} */
	.nearby .mint-loadmore-top{
		font-size: 1rem;
	}
</style>
