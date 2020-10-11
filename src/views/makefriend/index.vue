<template>
	<div class="makefriend">
		<div class="topNav">
			<div class="topNav_item"><img src="../../assets/image/chuyu/qiandao.png" alt="" /></div>
			<div class="topNav_item" @click="active = 'tab-container1'"><div :class="[active === 'tab-container1' ? 'topNav_item_active' : '']">遇见</div></div>
			<div class="topNav_item" @click="active = 'tab-container2'"><div :class="[active === 'tab-container2' ? 'topNav_item_active' : '']">推荐</div></div>
			<div class="topNav_item" @click="active = 'tab-container3'"><div :class="[active === 'tab-container3' ? 'topNav_item_active' : '']">排行榜</div></div>
			<div class="topNav_item" @click="toSearch"><img class="searchImg" src="../../assets/image/chuyu/search.png" alt="" /></div>
		</div>
		<!-- 		<mt-swipe :auto="0" @change="handleChange">
			<mt-swipe-item>1</mt-swipe-item>
			<mt-swipe-item>2</mt-swipe-item>
			<mt-swipe-item>3</mt-swipe-item>
		</mt-swipe> -->

		<mt-tab-container v-model="active" :swipeable="true" class="centerTab">
			<mt-tab-container-item id="tab-container1"><NearBy /></mt-tab-container-item>
			<mt-tab-container-item id="tab-container2"><Suggest /></mt-tab-container-item>
			<mt-tab-container-item id="tab-container3"><Rank /></mt-tab-container-item>
		</mt-tab-container>
	</div>
</template>

<script>
import NearBy from './nearby/index.vue'
import Suggest from './suggest/index.vue'
import Rank from './rank/index.vue'
export default {
	data() {
		return {
			active: 'tab-container2'
		}
	},
	mounted() {},
	created() {},
	methods: {
		handleChange(e) {
			window.console.log(e)
		},
		toSearch() {
			this.$router.push('/search')
		}
	},
	components: {
		NearBy,
		Suggest,
		Rank
	}
}
</script>

<style lang="stylus" scoped>
.makefriend
	height 100%
	background-color #FFFFFF
	.centerTab
		height calc(100vh - 4rem - 3.333333rem)
		overflow scroll
		.mint-tab-container-wrap
			height 100%
	.topNav
		display flex
		height 4rem
		box-sizing border-box
		padding-top 0.533333rem
		.topNav_item
			width 25%
			text-align center
			padding 0.333333rem 0
			img
				width 2rem
			div
				font-size 1.2rem
				line-height 2rem
			.topNav_item_active
				font-size 1.466666rem
				position relative
				transition all 0.4s ease
				&::after
					content ''
					display block
					width 2rem
					height 0.266666rem
					border-radius 0.133333rem
					background linear-gradient(-86deg, rgba(249, 85, 232, 0.96), rgba(225, 71, 127, 0.96))
					position absolute
					left 50%
					margin-left -1rem
					bottom -0.533333rem
			.searchImg
				width 1.333333rem
				margin-top 0.333333rem
</style>

<style>
.centerTab .mint-tab-container-wrap {
	height: 100%;
}
</style>
