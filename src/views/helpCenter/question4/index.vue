<template>
	<div class="question1">
		<mt-header fixed title="帮助中心">
			<router-link to="/helpCenter" slot="left"><mt-button icon="back">返回</mt-button></router-link>
			<!-- <mt-button slot="right" @click="showBox">说明</mt-button> -->
		</mt-header>		
		<div class="wrapper">
			<div class="question_title">提现提示需要认证</div>
			<div class="explain">
				为了用户的资金安全，账号必须通过实名认证后方可实现
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
