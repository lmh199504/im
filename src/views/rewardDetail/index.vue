<template>
	<div class="rewardDetail">
		<mt-header fixed title="奖励明细">
			<router-link to="/myprofit" slot="left"><mt-button icon="back">返回</mt-button></router-link>
			<!-- <mt-button slot="right" @click="showBox">说明</mt-button> -->
		</mt-header>
		<div class="wrapper">
			<div class="reward_item">
				<div class="left">
					<div class="reward_title">邀请男用户返佣</div>
					<div class="reward_time">2018-09-19 15:16</div>
				</div>
				<div class="right">
					<div class="reward_money">700</div>
					<img src="../../assets/image/chuyu/reward_gold.png" alt="">
				</div>
			</div>
			<div class="reward_item">
				<div class="left">
					<div class="reward_title">邀请男用户返佣</div>
					<div class="reward_time">2018-09-19 15:16</div>
				</div>
				<div class="right">
					<div class="reward_money">700</div>
					<img src="../../assets/image/chuyu/reward_gold.png" alt="">
				</div>
			</div>
			<div class="reward_item">
				<div class="left">
					<div class="reward_title">邀请男用户返佣</div>
					<div class="reward_time">2018-09-19 15:16</div>
				</div>
				<div class="right">
					<div class="reward_money">700</div>
					<img src="../../assets/image/chuyu/reward_gold.png" alt="">
				</div>
			</div>
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
	.rewardDetail
		width 100%
		.mint-header
			background-color #FFFFFF
			color #333333
		.mint-header-title
			font-weight bold
		.wrapper
			padding 1.28rem
			padding-top 3.84rem
			.reward_item
				border-bottom 1px solid #E0E0E0
				justify-content space-between
				display flex
				padding 1.28rem 0
				align-items center
				.reward_title
					font-size 0.896rem
					color #202020
					margin-bottom 0.512rem
				.reward_time
					font-size 0.768rem
					color #606060
				.right
					display flex
					.reward_money
						font-size 1.152rem
						color #333333
						margin-right 0.32rem
					img
						width 1.152rem
						height 1.152rem
						margin-top 0.128rem
</style>

