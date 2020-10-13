<template>
	<div class="mine" ref="bscroll">
		<div class="content">
			<div class="userInfo">
				<div class="userTopInfo">
					<div class="left">
						<img class="userheader" src="../../assets/image/chuyu/001.jpg" alt="">
					</div>
					<div class="right">
						<div class="right_pan">
							<div class="username">我百思了也不得姐</div>
							<img src="../../assets/image/chuyu/pan.png" alt="">
						</div>
						<div class="userId">
							ID:123113
						</div>
						<div class="vip_type">
							<img src="../../assets/image/chuyu/usersvip.png" alt="">
						</div>
					</div>
				</div>
				
				<div class="userfriend">
					<div class="user_item">
						<div class="user_item_number">0</div>
						<div class="user_item_title">好友</div>
					</div>
					<div class="user_item">
						<div class="user_item_number">0</div>
						<div class="user_item_title">关注</div>
					</div>
					<div class="user_item">
						<div class="user_item_number">0</div>
						<div class="user_item_title">粉丝</div>
					</div>
					<div class="user_item">
						<div class="user_item_number">0</div>
						<div class="user_item_title">访客</div>
					</div>
				</div>
				
				<div class="user_money">
					<div class="money_item">
						<div class="money_number">100</div>
						<div class="money_title">聊币</div>
						<div class="money_btn" @click="$router.push('/chatCharge')">充值</div>
					</div>
					<div class="money_item">
						<div class="money_number">100</div>
						<div class="money_title">钻石</div>
						<div class="money_btn" @click="$router.push('/diamondCharge')">充值</div>
					</div>
				</div>
				
			</div>
			
			<div class="menu">
				<div class="menu_item" @click="$router.push('/vipcenter')">
					<div class="left">
						<img src="../../assets/image/chuyu/mine/usercenter.png" alt="">
						<div>会员中心</div>
					</div>
					<div class="right">
						<img src="../../assets/image/chuyu/xiangyou.png" alt="">
					</div>
				</div>
				<div class="menu_item" @click="$router.push('/Authentication')">
					<div class="left">
						<img src="../../assets/image/chuyu/mine/shiming.png" alt="">
						<div>实名认证</div>
					</div>
					<div class="right">
						<img src="../../assets/image/chuyu/xiangyou.png" alt="">
					</div>
				</div>
				<div class="menu_item" @click="$router.push('/share')">
					<div class="left">
						<img src="../../assets/image/chuyu/mine/money.png" alt="">
						<div>推广赚钱</div>
					</div>
					<div class="right">
						<img src="../../assets/image/chuyu/xiangyou.png" alt="">
					</div>
				</div>
				<div class="menu_item" @click="$router.push('/wallet')">
					<div class="left">
						<img src="../../assets/image/chuyu/mine/pack.png" alt="">
						<div>我的钱包</div>
					</div>
					<div class="right">
						<img src="../../assets/image/chuyu/xiangyou.png" alt="">
					</div>
				</div>
				
				<div class="menu_item" @click="$router.push('/helpCenter')">
					<div class="left">
						<img src="../../assets/image/chuyu/mine/pan.png" alt="">
						<div>帮助与反馈</div>
					</div>
					<div class="right">
						<img src="../../assets/image/chuyu/xiangyou.png" alt="">
					</div>
				</div>
				
				<div class="menu_item" @click="$router.push('/setting')">
					<div class="left">
						<img src="../../assets/image/chuyu/mine/set.png" alt="">
						<div>系统设置</div>
					</div>
					<div class="right">
						<img src="../../assets/image/chuyu/xiangyou.png" alt="">
					</div>
				</div>
				
			</div>
			
		</div>
	</div>
</template>

<script>
	// import Bscroll from 'better-scroll'
	export default{
		data() {
			return{
				
			}
		},
		mounted() {
			// this.$nextTick(() => {
			// 	this.scroll = new Bscroll(this.$refs.bscroll, {
			// 		click: true,
			// 		bounce: {
			// 			top: true,
			// 			bottom: true,
			// 			left: false,
			// 			right: false
			// 		}
			// 	})
			// })
		},
		created() {
			
		},
		methods:{
			
		}
	}
</script>

<style lang="stylus" scoped>
	.mine
		background-color #EEEEEE
		height calc(100% - 3.33333rem)
		overflow auto
		.userInfo
			background-color #FFFFFF
			padding 0.96rem
			padding-top 1.92rem
			.userTopInfo
				display flex
				
				.userheader
					width 4.48rem
					height 4.48rem
					border-radius 50%
					margin-right 1.28rem
				.right_pan 
					display flex
					.username 
						font-size 1.152rem
						color #343434
						margin-right 0.64rem
					img
						width 0.96rem
						height 1.024rem
						margin-top 0.256rem
				.userId 
					font-size 0.96rem
					color #333333
				.vip_type 
					img
						width 2.816rem
			.userfriend
				margin-top 1.92rem
				display flex
				text-align center
				.user_item
					width 25%
					.user_item_number
						font-size 1.152rem
						color #343434
					.user_item_title
						font-size 0.768rem
						color #666666
			.user_money
				margin-top 2.56rem
				display flex
				text-align center
				.money_item
					width 50%
					.money_number
						color #343434
						font-size 1.536rem
					.money_title
						font-size 0.768rem
						color #9A9A9A
						margin-top 0.32rem
					.money_btn
						width 3.2rem
						height 1.28rem
						// line-height 1.28rem
						color #FFFFFF
						background linear-gradient(-86deg, rgba(249, 85, 232, 0.96), rgba(246, 96, 151, 0.96))
						border-radius 0.64rem
						font-size 0.768rem
						margin auto
						margin-top 0.64rem
		.menu
			margin-top 0.64rem
			background-color #FFFFFF
			padding-top 0.64rem 
			margin-bottom 0.64rem
			.menu_item
				display flex
				justify-content space-between
				padding 0.64rem 1.024rem
				.left
					display flex
					img
						width 1.216rem
						height 1.216rem
						margin-right 0.96rem
					div
						font-size 0.96rem
						color #343434
				.right
					img
						width auto
						height 1.088rem
</style>
