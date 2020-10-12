<template>
	<div class="cashout">
		<mt-header fixed title="提现">
			<router-link to="/myprofit" slot="left"><mt-button icon="back">返回</mt-button></router-link>
			<!-- <mt-button slot="right" @click="showBox">说明</mt-button> -->
		</mt-header>

		<div class="wrapper">
			<div class="canOutMoney">100</div>
			<div class="canout_title">可提现金额</div>

			<div class="out_number">
				<div>金额（元）</div>
				<input type="number" placeholder="请输入提现金额" />
			</div>

			<div class="outFormalities">提现需要手续费2元/笔</div>

			<div class="zfb">
				<div>收款方：</div>
				<img src="../../assets/image/chuyu/cashout_zfb.png" alt="" />
			</div>
			<div class="zfb_name zfb_item">
				<div class="zfb_title">支付宝姓名：</div>
				<input type="text" class="zfb_input" />
				<div class="zfb_set">设置</div>
			</div>
			<div class="zfb_count zfb_item">
				<div class="zfb_title">支付宝账号：</div>
				<input type="text" class="zfb_input" />
				<div class="zfb_set"></div>
			</div>

			<div class="cashoutBtn">申请提现</div>

			<div class="description">
				<p>说明:</p>
				<p>1,充值的撩币不可提现，赚取的人民币可提现:</p>
				<p>2,满50元可提现，无限制提现次数:</p>
				<p>3,提现账号资料请核对，必须是支付宝账号对应的姓名。</p>
			</div>
		</div>
	</div>
</template>

<script></script>

<style lang="stylus" scoped>
.cashout
	min-height 100%
	.mint-header
		background-color #FFFFFF
		color #333333
	.mint-header-title
		font-weight bold
	.wrapper
		padding 1.28rem
		padding-top 5.12rem
		.canOutMoney
			font-size 2.304rem
			color #343434
			text-align center
		.canout_title
			color #666666
			text-align center
			font-size 0.96rem
			margin-top 0.96rem
		.out_number
			display flex
			margin-top 2.88rem
			border-bottom 1px solid #E0E0E0
			height 2.56rem
			line-height 2.56rem
			div
				font-size 0.96rem
				color #343434
				width 7.04rem
			input
				width calc(100vw - 7.04rem)
				outline none
				border none
		.outFormalities
			color #E14880
			font-size 0.768rem
			text-align center
			margin-top 0.64rem
		.zfb
			margin-top 1.792rem
			display flex
			div
				font-size 0.96rem
				color #343434
			img
				width 2.24rem
				height 2.24rem
		.zfb_item
			display flex
			margin-top 1.344rem
			height 1.92rem
			line-height 1.92rem
			.zfb_title
				white-space nowrap
				font-size 0.96rem
				color #343434
			.zfb_set
				white-space nowrap
				font-size 0.768rem
				color #E14880
				margin-left 1.28rem
			.zfb_input
				height 1.92rem
				border-radius 0.96rem
				outline none
				border 1px solid #BFBFBF
				width 12.8rem
				padding 0 0.96rem
				box-sizing border-box
		.cashoutBtn
			width 8rem
			height 2.24rem
			border-radius 1.12rem
			background linear-gradient(-86deg, rgba(249, 85, 232, 0.96), rgba(246, 96, 151, 0.96))
			color #FFFFFF
			text-align center
			line-height 2.24rem
			font-size 0.96rem
			margin auto
			margin-top 3.84rem
		.description
			margin-top 2.56rem
			p
				font-size 0.768rem
				color #606060
</style>
