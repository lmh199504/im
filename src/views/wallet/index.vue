<template>
	<div class="wallet">
		<mt-header fixed title="我的钱包">
			<router-link to="/mine" slot="left"><mt-button icon="back">返回</mt-button></router-link>
			<!-- <mt-button slot="right" @click="showBox">说明</mt-button> -->
		</mt-header>
		
		<div class="wrapper" ref="bscroll">
			<div class="content">
				<div class="wallet_item">
					<div class="left">
						<div class="left_money">
							<div class="left_number">2000</div>
							<img src="../../assets/image/chuyu/wallet/diamond.png" alt="">
						</div>
						<div class="left_title">我的钻石（个）</div>
					</div>
					<div class="right">
						<div class="check_detail" @click="$router.push('/diamondDetail')">查看明细</div>
						<div class="charge" @click="$router.push('/diamondCharge')">充值</div>
					</div>
				</div>
				
				<div class="wallet_item">
					<div class="left">
						<div class="left_money">
							<div class="left_number">2000</div>
							<img  src="../../assets/image/chuyu/wallet/liaobi.png" alt="">
						</div>
						<div class="left_title">我的聊币（个）</div>
					</div>
					<div class="right">
						<div class="check_detail" @click="$router.push('/chatDetail')">查看明细</div>
						<div class="charge" @click="$router.push('/chatCharge')">充值</div>
					</div>
				</div>
				
				<div class="wallet_item">
					<div class="left">
						<div class="left_money">
							<div class="left_number">2000</div>
							<img src="../../assets/image/chuyu/wallet/gold.png" alt="">
						</div>
						<div class="left_title">我的余额（元）</div>
					</div>
					<div class="right">
						<div class="check_detail" @click="$router.push('/balanceDetail')">查看明细</div>
						<div class="charge" @click="$router.push('/cashout')">提现</div>
					</div>
				</div>
				
			</div>
		</div>
	</div>
</template>

<script>
	import Bscroll from 'better-scroll'
	export default{
		data() {
			return{
				
			}
		},
		
		methods:{
			
		},
		mounted() {
			this.$nextTick(() => {
				this.scroll = new Bscroll(this.$refs.bscroll, {
					click: true,
					bounce: {
						top: true,
						bottom: true,
						left: true,
						right: true
					}
				})
			})
		},
	}
</script>

<style lang="stylus" scoped>
	.wallet
		height 100%
		.mint-header
			background-color #FFFFFF
			color #333333
		.wrapper
			padding 1.28rem
			height 100%
			box-sizing border-box
			.content
				padding-top 3.84rem
				.wallet_item 
					padding 1.28rem 0.896rem
					box-shadow 0px 0px 0.96rem 0px rgba(106, 105, 106, 0.15)
					background-color #FFFFFF
					border-radius 0.64rem
					margin-bottom 1.216rem
					display flex
					justify-content space-between
					align-items center
					.left_money
						display flex
						.left_number
							font-size 1.152rem
							color #343434
							margin-right 0.64rem
						img
							width 1.6rem
							height 1.6rem
					.left_title
						font-size 0.768rem
						color #343434
						margin-top 1.152rem
					.check_detail
						font-size 0.768rem
						color #343434
					.charge
						height 1.28rem
						width 3.2rem
						background linear-gradient(-86deg, rgba(249, 85, 232, 0.96), rgba(246, 96, 151, 0.96))
						font-size 0.768rem
						color #FFFFFF
						text-align center
						border-radius 0.64rem
						margin-top 1.152rem
						// line-height 1.28rem
						// padding-top 0.064rem 
</style>
