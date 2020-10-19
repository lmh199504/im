<template>
	<div class="find">
		<div class="topNav">
			<div class="topNav_item" @click="active = 'tab-container1'"><div :class="[active === 'tab-container1' ? 'topNav_item_active' : '']">附近动态</div></div>
			<div class="topNav_item" @click="active = 'tab-container2'"><div :class="[active === 'tab-container2' ? 'topNav_item_active' : '']">闪聊</div></div>
			<div class="topNav_item" @click="active = 'tab-container3'"><div :class="[active === 'tab-container3' ? 'topNav_item_active' : '']">私密</div></div>
			<div class="topNav_item" @click="active = 'tab-container4'"><div :class="[active === 'tab-container4' ? 'topNav_item_active' : '']">我的动态</div></div>
			<div class="topNav_item" >
				<el-badge is-dot class="item"><img class="searchImg" src="../../assets/image/chuyu/find/bell.png" alt="" /></el-badge>
				</div>
		</div>
		<mt-tab-container v-model="active" :swipeable="true" class="centerTab">
			<mt-tab-container-item id="tab-container1"><NearDynamic /></mt-tab-container-item>
			<mt-tab-container-item id="tab-container2"><ShanLiao /></mt-tab-container-item>
			<mt-tab-container-item id="tab-container3"><PrivateFind /></mt-tab-container-item>
			<mt-tab-container-item id="tab-container4"><MyDynamic /></mt-tab-container-item>
		</mt-tab-container>
	</div>
</template>

<script>
import MyDynamic from './myDynamic/index.vue'
import NearDynamic from './nearDynamic/index.vue'
import PrivateFind from './privateFind/index.vue'
import ShanLiao from './shanliao/index.vue'
import { Badge } from 'element-ui'
export default {
	data() {
		return {
			active: 'tab-container2',
			showSign: false
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
		},
		closeSign() {
			this.showSign = false
		}
	},
	components: {
		MyDynamic,
		NearDynamic,
		PrivateFind,
		ShanLiao,
		ElBadge:Badge
	}
}
</script>

<style lang="stylus" scoped>
.find
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
		padding 0 0.32rem
		padding-top 0.533333rem
		.topNav_item
			width 20%
			text-align center
			padding 0.333333rem 0
			img
				width 2rem
			div
				font-size 1.024rem
				line-height 2rem
			.topNav_item_active
				font-size 1.152rem
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
