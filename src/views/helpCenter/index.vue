<template>
	<div class="helpCenter">
		<mt-header fixed title="帮助中心">
			<router-link to="/mine" slot="left"><mt-button icon="back">返回</mt-button></router-link>
			<!-- <mt-button slot="right" @click="showBox">说明</mt-button> -->
		</mt-header>
		<div class="wrapper">
			<div class="topImg">
				<img src="../../assets/image/chuyu/banner2.png" alt="">
			</div>
			
			<div class="helpItem" @click="$router.push('/question1')">
				<div class="left">
					怎么样才能跟其他会员聊天
				</div>
				<div class="right">
					<img src="../../assets/image/chuyu/xiangyou.png" alt="">
				</div>
			</div>
			<div class="helpItem" @click="$router.push('/question2')">
				<div class="left">
					充值后可以退款吗
				</div>
				<div class="right">
					<img src="../../assets/image/chuyu/xiangyou.png" alt="">
				</div>
			</div>
			<div class="helpItem" @click="$router.push('/question3')">
				<div class="left">
					收到的礼物在哪里查看
				</div>
				<div class="right">
					<img src="../../assets/image/chuyu/xiangyou.png" alt="">
				</div>
			</div>
			<div class="helpItem" @click="$router.push('/question4')">
				<div class="left">
					提现提示需要认证
				</div>
				<div class="right">
					<img src="../../assets/image/chuyu/xiangyou.png" alt="">
				</div>
			</div>
			<div class="helpItem" @click="$router.push('/question5')">
				<div class="left">
					申请提现的时候账号信息填错了怎么办？
				</div>
				<div class="right">
					<img src="../../assets/image/chuyu/xiangyou.png" alt="">
				</div>
			</div>
			<div class="helpItem">
				<div class="left">
					其他问题反馈
				</div>
				<div class="right">
					<img src="../../assets/image/chuyu/xiangyou.png" alt="">
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>
</script>

<style lang="stylus" scoped>
	.mint-header
		background-color #FFFFFF
		color #333333
	.wrapper 
		padding 0.96rem
		padding-top 3.84rem
		.topImg
			img
				height 6.4rem
				width 100%
		.helpItem
			display flex
			justify-content space-between
			align-items center
			border-bottom 1px solid #F9F9F9
			padding 1.28rem 0
			.left
				font-size 0.768rem
				color #363636
			.right
				img
					height 0.96rem
</style>
