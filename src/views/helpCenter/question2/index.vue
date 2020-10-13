<template>
	<div class="question1">
		<mt-header fixed title="帮助中心">
			<router-link to="/helpCenter" slot="left"><mt-button icon="back">返回</mt-button></router-link>
			<!-- <mt-button slot="right" @click="showBox">说明</mt-button> -->
		</mt-header>		
		<div class="wrapper">
			<div class="question_title">充值后可以退款吗</div>
			<div class="explain">
				一经充值购买不支持退款，请在充分了解的前提下再购买充值
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {}
	}
}
</script>

<style lang="stylus" scoped>
	.question1
		width 100%
		.mint-header
			background-color #FFFFFF
			color #333333
		.wrapper
			padding 1.28rem
			padding-top 3.84rem
			
			.question_title
				font-size 1.024rem
				color #626262
				text-align center
			.explain
				margin-top 1.92rem
				color #868686
				font-size 0.768rem
				line-height 1.28rem
</style>
