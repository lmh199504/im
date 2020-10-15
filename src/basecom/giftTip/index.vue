<template>
	<div class="giftTip" :style="showGift? {'z-index':10,'opacity':opacity}:{ 'z-index':-1,opacity:opacity } ">
		<div class="bg" @click="hideGift"></div>
		<div class="container">
			<div class="gift-container">
				<div class="gift_swiper">
					<div class="swiper-container">
						<div class="swiper-wrapper">
							<div class="swiper-slide">
								<div class="gift_item" v-for="n in 8" :key="n" @click="activeItem = n" :class="[activeItem === n ? 'gift_item_active' : '']">
									<img src="../../assets/image/chuyu/001.jpg" alt="" class="gift_img" />
									<div class="gift_name">黄瓜</div>
									<div class="gift_price">
										<span>5</span>
										<img src="../../assets/image/chuyu/wallet/diamond.png" alt="" />
									</div>
								</div>
							</div>
							<div class="swiper-slide">
								<div class="gift_item" v-for="n in 8" :key="n" @click="activeItem = n" :class="[activeItem === n ? 'gift_item_active' : '']">
									<img src="../../assets/image/chuyu/001.jpg" alt="" class="gift_img" />
									<div class="gift_name">黄瓜</div>
									<div class="gift_price">
										<span>5</span>
										<img src="../../assets/image/chuyu/wallet/diamond.png" alt="" />
									</div>
								</div>
							</div>
							<div class="swiper-slide">
								<div class="gift_item" v-for="n in 8" :key="n" @click="activeItem = n" :class="[activeItem === n ? 'gift_item_active' : '']">
									<img src="../../assets/image/chuyu/001.jpg" alt="" class="gift_img" />
									<div class="gift_name">黄瓜</div>
									<div class="gift_price">
										<span>5</span>
										<img src="../../assets/image/chuyu/wallet/diamond.png" alt="" />
									</div>
								</div>
							</div>
						</div>
						<!-- 如果需要分页器 -->
						<div class="swiper-pagination"></div>
					</div>
				</div>
				<div class="gift_footer">
					<div class="input_number">
						<input placeholder="礼物数量" type="number" max="9999" v-model="gift_number" @focus="show_options = true" @blur="hideOption" />
						<img src="./img/more.png" alt="" />
					</div>
					<div class="qiushan">求赏</div>

					<div class="number_options" v-show="show_options">
						<div class="number_options_item" v-for="(item, index) in number_options" :key="index" @click="gift_number = item.number">
							<div class="left_number">{{ item.number }}</div>
							<div class="right_text">{{ item.text }}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props:['showGift'],
	data() {
		return {
			activeItem: '',
			gift_number: 1,
			number_options: [
				{ number: 1314, text: '一生一世' },
				{ number: 999, text: '天长地久' },
				{ number: 520, text: '我爱你' },
				{ number: 230, text: '爱上你' },
				{ number: 188, text: '要抱抱' },
				{ number: 99, text: '爱你久久' },
				{ number: 22, text: '双宿双飞' },
				{ number: 11, text: '一心一意' }
			],
			show_options: false,
			opacity:0
		}
	},
	computed: {
		swiper() {
			return this.$refs.mySwiper.$swiper
		}
	},
	mounted() {
		// eslint-disable-next-line
		new Swiper('.swiper-container', {
			loop: true, // 循环模式选项
			// 如果需要分页器
			pagination: {
				el: '.swiper-pagination'
			}
		})
		setTimeout(() => {
			this.opacity = 1
		},2000)
	},
	methods: {
		hideOption() {
			setTimeout(() => {
				this.show_options = false
			})
		},
		hideGift() {
			this.$emit('hideGift')
		}
	},
	watch: {
		gift_number(newVal) {
			if (newVal > 9999) {
				this.gift_number = 9999
			}
		}
	}
}
</script>

<style lang="stylus" scoped>
.giftTip
	height 100%
	width 100%
	background-color rgba(0, 0, 0, 0.5)
	position fixed
	top 0
	left 0
	.bg
		height calc(100% - 16rem)
	.gift-container
		height 16rem
		border-radius 20px 20px 0 0
		background-color rgba(0, 0, 0, 0.6)
		position absolute
		bottom 0
		left 0
		width 100%
		.swiper-pagination
			bottom -4px
		.gift_swiper
			height 12.8rem
			border-bottom 1px solid #FFFFFF
			box-sizing border-box
			padding-top 1.28rem
			.swiper-slide
				display flex
				justify-content space-between
				flex-wrap wrap
				padding 0 0.64rem
				box-sizing border-box
				.gift_item
					width 25%
					text-align center
					margin-bottom 0.96rem
					border-radius 0.32rem
					padding 0.128rem 0
					.gift_img
						width 2.56rem
					.gift_name
						color #FFFFFF
						font-size 0.768rem
					.gift_price
						font-size 0.768rem
						color #FBD760
						text-align center
						img
							width 0.704rem
							margin-left 0.32rem
				.gift_item_active
					background-color rgba(255, 255, 255, 0.1)
		.gift_footer
			display flex
			justify-content flex-end
			align-items center
			height 3.2rem
			position relative
			.input_number
				width 3.84rem
				height 1.6rem
				display flex
				justify-content space-between
				align-items center
				color #FFFFFF
				font-size 0.768rem
				border 1px solid #FFFFFF
				border-radius 0.8rem
				padding 0 0.512rem
				box-sizing border-box
				margin-right 0.64rem
				img
					width 0.448rem
					height 0.768rem
				input
					width 1.92rem
					border none
					outline none
					background-color transparent
					color #FFFFFF
			.qiushan
				width 3.84rem
				height 1.6rem
				background linear-gradient(-86deg, rgba(249, 85, 232, 0.96), rgba(246, 96, 150, 0.96))
				color #FFFFFF
				border-radius 0.8rem
				font-size 0.768rem
				text-align center
				line-height 1.6rem
			.number_options
				position absolute
				bottom 3.2rem
				right 2.88rem
				background-color #FFFFFF
				z-index 11
				border-radius 0.32rem
				padding 0.64rem
				width 6.4rem
				box-sizing border-box
				&::after
					content ''
					width 0
					height 0
					position absolute
					bottom -8px
					border-left 5px solid transparent
					border-right 5px solid transparent
					border-top 8px solid #FFFFFF
					left 60%
				.number_options_item
					display flex
					font-size 0.768rem
					margin-bottom 1.408rem
					justify-content space-between
					&:last-child
						margin-bottom 0
					.left_number
						color #FA4A9D
					.right_text
						color #333333
</style>

<style lang="stylus">
.giftTip
	.swiper-pagination-bullet-active
		background #FC4D8F!important
</style>
