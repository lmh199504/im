<template>
	<div class="bscroll" ref="bscroll">
		<div class="content">
			<div class="loadingText">
				<div v-if="loading === false">
					<img class="pulldownrefresh" src="../../assets/image/chuyu/pulldownrefresh.png" alt=""><span>下拉刷新</span>
				</div>
				<div v-else>
					<img class="loadingImg" src="../../assets/image/chuyu/loading.png" alt=""><span>加载中...</span>
				</div>
				
				
			</div>
			
			<p>66666</p>
			<p>66666</p>
			<p>66666</p>
			<p>66666</p>
			<p>66666</p>
			<p>66666</p>
			<p>66666</p>
			<p>66666</p>
			<p>66666</p>
			<p>66666</p>
			<p>66666</p>
			<p>66666</p>
			<p>66666</p>
			<p>66666</p>
			<p>66666</p>
			<p>66666</p>
			<p>66666</p>
			<p>66666</p>
			<p>66666</p>
			<p>66666</p>
			<p>66666</p>
			<p>66666</p>
			<p>66666</p>
			<p>66666</p>
			<p>66666</p>
			<p>66666</p>
			<p>66666</p>
			<p>66666</p>
			<p>66666</p>
			<p>66666</p>
			<p>66666</p>
			<p>66666</p>
			<p>66666</p>
			<p>66666</p>
			<p>66666</p>
		</div>
	</div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
	name: 'Bscroll',
	data() {
		return {
			loading:false
		}
	},
	mounted() {
		this.$nextTick(() => {
			this.scroll = new Bscroll(this.$refs.bscroll, {
				pullDownRefresh: {
					threshold: 50,
					stop: 30
				}
			})
			
			this.scroll.on('pullingDown',() => {
				window.console.log('下拉刷新')
				this.loading = true
				setTimeout(() => {
					this.scroll.finishPullDown()
					setTimeout( () => {
						this.loading = false
					},1000)
				},3000)
			})
		})
	},
	methods: {}
}
</script>

<style lang="stylus" scoped>
.bscroll
	width 100%
	height 100%
	overflow hidden
	.pulldownrefresh
		width 1.333333rem
		vertical-align -0.266666rem
	.loadingText
		top -1.333333rem
		text-align center
		font-size 0.4rem
		position absolute
		width 100%
		color #b3b3b3
	.loadingImg 
		width 1.333333rem
		vertical-align -0.4rem
		margin-right 0.133333rem
		animation rorate 3s infinite
		
	@keyframes rorate
		0%
			transform rotate(0deg)
		100%
			transform rotate(360deg)
</style>
