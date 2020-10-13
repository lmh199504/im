<template>
	<div class="diamondDetail">
		<mt-header fixed title="余额明细">
			<mt-button icon="back" slot="left" @click="$router.go(-1)">返回</mt-button>
			<!-- <router-link to="/mine" slot="left"><mt-button icon="back">返回</mt-button></router-link> -->
			<!-- <mt-button slot="right" @click="showBox">说明</mt-button> -->
		</mt-header>
		<div class="topTab">
			<div class="time" @click="showPicker = true">
				<div class="timeText">{{ formData.year }}年 {{ formData.month }}月</div>
				<div class="triangle"></div>
			</div>
			<div class="tabcontainer">
				<div :class="['tab_item', active === 'tab-container1' ? ' tab_item_active' : '']" @click="active = 'tab-container1'">全部</div>
				<div :class="['tab_item', active === 'tab-container2' ? ' tab_item_active' : '']" @click="active = 'tab-container2'">支出</div>
				<div :class="['tab_item', active === 'tab-container3' ? ' tab_item_active' : '']" @click="active = 'tab-container3'">收入</div>
			</div>
		</div>

		<mt-tab-container v-model="active" :swipeable="true" class="centerTab">
			<mt-tab-container-item id="tab-container1">
				<div class="detail_item" v-for="n in 50" :key="n">
					<div class="left">
						<div class="item_title">新手大礼包</div>
						<div class="item_time">2018-10-11 15:16</div>
					</div>
					<div class="right">+1</div>
				</div>
			</mt-tab-container-item>
			<mt-tab-container-item id="tab-container2">
				<div class="detail_item" v-for="n in 50" :key="n">
					<div class="left">
						<div class="item_title">新手大礼包</div>
						<div class="item_time">2018-10-11 15:16</div>
					</div>
					<div class="right">+1</div>
				</div>
			</mt-tab-container-item>
			<mt-tab-container-item id="tab-container3">
				<div class="detail_item" v-for="n in 50" :key="n">
					<div class="left">
						<div class="item_title">新手大礼包</div>
						<div class="item_time">2018-10-11 15:16</div>
					</div>
					<div class="right">+1</div>
				</div>
			</mt-tab-container-item>
		</mt-tab-container>
		<div class="pickerContainer" v-show="showPicker">
			<div class="button">
				<div class="cancal" @click="cancal">取消</div>
				<div class="sure" @click="getData">确定</div>
			</div>
			<mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
		</div>
		<div class="picker_mask" v-if="showPicker" @click="showPicker = false"></div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			active: 'tab-container1',
			showPicker:false,
			slots: [
				{
					flex: 2,
					values: ['2019', '2020'],
					className: 'slot1',
					textAlign: 'right',
					defaultIndex:1
				},
				{
					divider: true,
					content: '',
					flex: 1,
					className: 'slot2'
				},
				{
					flex: 2,
					values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
					className: 'slot3',
					textAlign: 'left',
					visibleItemCount: 3,
					defaultIndex:new Date().getMonth()
				}
			],
			formData:{
				year:new Date().getFullYear() ,
				month:new Date().getMonth() + 1
			},
			tempData:{
				year:new Date().getFullYear() ,
				month:new Date().getMonth() + 1
			}
		}
	},
	methods: {
		onValuesChange(picker, values) {
			// if (values[0] > values[1]) {
			// 	picker.setSlotValue(1, values[0])
			// }
			this.tempData.year = values[0]
			this.tempData.month = values[1]
		},
		getData() {
			this.formData.year = this.tempData.year
			this.formData.month = this.tempData.month
			this.showPicker = false
		},
		cancal() {
			this.showPicker = false
		}
	}
}
</script>

<style lang="stylus" scoped>
.diamondDetail
	height 100%
	overflow hidden
	.mint-header
		background-color #FFFFFF
		color #333333
	.topTab
		margin-top 3.84rem
		box-shadow 0px 0px 0.96rem 0px rgba(106, 105, 106, 0.15)
		padding 0.768rem 2.56rem 0 2.56rem
		.time
			margin auto
			width fit-content
			display flex
			align-items center
			padding 0.512rem 0.896rem
			border 1px solid #BFBFBF
			border-radius 1.216rem
			.timeText
				color #343434
				font-size 0.96rem
				margin-right 0.32rem
				letter-spacing 0.064rem
			.triangle
				width 0
				height 0
				border-left 0.384rem solid transparent
				border-right 0.384rem solid transparent
				border-top 0.64rem solid #BFBFBF
		.tabcontainer
			display flex
			justify-content space-between
			margin-top 1.6rem
			.tab_item
				width 4.8rem
				font-size 1.152rem
				color #9A9A9A
				position relative
				text-align center
				padding-bottom 0.96rem
			.tab_item_active
				color #343434
				&::after
					content ''
					width 100%
					height 0.192rem
					position absolute
					left 0
					bottom 0
					background linear-gradient(-86deg, rgba(249, 85, 232, 0.96), rgba(246, 96, 151, 0.96))
	.centerTab
		// width
		height calc(100% - 11.52rem)
		overflow scroll
		padding 0.96rem 1.92rem
		.detail_item
			display flex
			justify-content space-between
			align-items center
			margin-bottom 1.28rem
			.item_title
				font-size 0.896rem
				color #202020
			.item_time
				font-size 0.768rem
				color #606060
			.right
				font-size 1.152rem
				color #343434
	.pickerContainer
		position absolute
		bottom 0
		background-color #FFFFFF
		z-index 3
		width 100%
		border-radius 0.32rem 0.32rem 0 0
		animation fadeUp 0.4s ease
		.button
			display flex
			justify-content space-between
			width 100%
			padding 0.64rem 2.24rem
			box-sizing border-box
			font-size 1.152rem
			border-bottom 1px solid #EEEEEE
			.cancal
				color #989898
			.sure
				color #E14880
		.picker-selected
			color #e14880 !important
		.picker
			padding 0 6.4rem
	.picker_mask
		width 100%
		height 100%
		position fixed
		left 0
		top 0
		z-index 2
		background-color #000000
		opacity 0.5
	
	@keyframes fadeUp
		0%
			bottom -14.4rem
		100%
			bottom 0
</style>

<style>
.diamondDetail .pickerContainer .picker-selected {
	color: #e14880 !important;
}
.diamondDetail .picker-center-highlight:before,
.diamondDetail .picker-center-highlight:after {
	background-color: #e14880;
}
</style>
