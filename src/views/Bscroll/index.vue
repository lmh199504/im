<template>
	<div class="bscroll" ref="bscroll">
		<div class="content">
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
		return {}
	},
	mounted() {
		this.$nextTick(() => {
			this.scroll = new Bscroll(this.$refs.bscroll, {
				pullDownRefresh: {
					threshold: 50,
					stop: 20
				}
			})
			
			this.scroll.on('pullingDown',() => {
				window.console.log('下拉刷新')
				setTimeout(() => {
					this.scroll.finishPullDown()
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
</style>
