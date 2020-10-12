<template>
	<div class="myprofit">
		<mt-header fixed title="我的收益">
			<router-link to="/share" slot="left"><mt-button icon="back">返回</mt-button></router-link>
			<!-- <mt-button slot="right" @click="showBox">说明</mt-button> -->
		</mt-header>
		
		<div class="wrapper">
			<div class="invitemsg">
				<div class="invitemsg_item">
					<div class="invitemsg_item_number">0</div>
					<div class="invitemsg_item_title">推广收入</div>
				</div>
				<div class="invitemsg_item">
					<div class="invitemsg_item_number">0</div>
					<div class="invitemsg_item_title">邀请人数</div>
				</div>
			</div>
			
			<div class="invite_menu">
				<div class="invite_menu_item" @click="$router.push('/cashout')">
					<div class="left">领取现金</div>
					<div class="right">
						<img src="../../assets/image/chuyu/xiangyou.png" alt="">
					</div>
				</div>
				<div class="invite_menu_item" @click="$router.push('/rewardDetail')">
					<div class="left">奖励明细</div>
					<div class="right">
						<img src="../../assets/image/chuyu/xiangyou.png" alt="">
					</div>
				</div>
				<div class="invite_menu_item">
					<div class="left">我邀请的男性</div>
					<div class="right">
						<img src="../../assets/image/chuyu/xiangyou.png" alt="">
					</div>
				</div>
				<div class="invite_menu_item">
					<div class="left">我邀请的女性</div>
					<div class="right">
						<img src="../../assets/image/chuyu/xiangyou.png" alt="">
					</div>
				</div>
			</div>
			
			<div class="invite_friend" @click="$router.push('/share')">邀请好友，赚现金奖励！</div>
		</div>
	</div>
</template>

<script>
	export default{
		data() {
			return{
				
			}
		},
		methods:{
			
		}
	}
</script>

<style lang="stylus" scoped>
	.myprofit 
		min-height 100%
	.mint-header
		background-color #FFFFFF
		color #333333
	.invitemsg
		height 19.2rem
		background-image url(../../assets/image/chuyu/profit_bg.png)
		background-position 0 0
		background-size cover
		display flex
		padding-top 5.76rem
		box-sizing border-box
		.invitemsg_item
			width 50%
			text-align center
			color #FFFFFF
			.invitemsg_item_title
				font-size 0.96rem
				margin-top 1.92rem
	.invite_menu
		box-shadow 0 2px 6px #ded8d8
		border-radius 0.64rem
		background #FFFFFF
		width 90%
		margin auto
		box-sizing border-box
		position relative
		top -5.76rem
		.invite_menu_item
			display flex
			justify-content space-between
			height 2.88rem
			border-bottom 1px solid #e1e1e1
			padding 0 1.28rem
			line-height 2.88rem
			.left
				color #666666
				font-size 0.96rem
			.right 
				img
					height 1.088rem
					
	.invite_friend			
		width 16rem
		height 2.24rem
		background linear-gradient(-86deg, rgba(249, 85, 232, 0.96), rgba(246, 96, 151, 0.96))
		color #FFFFFF
		font-size 0.96rem
		line-height 2.24rem
		text-align center
		border-radius 1.12rem
		margin auto
</style>
