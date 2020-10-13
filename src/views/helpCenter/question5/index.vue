<template>
	<div class="question1">
		<mt-header fixed title="帮助中心">
			<router-link to="/helpCenter" slot="left"><mt-button icon="back">返回</mt-button></router-link>
			<!-- <mt-button slot="right" @click="showBox">说明</mt-button> -->
		</mt-header>		
		<div class="wrapper">
			<div class="question_title">申请提现的时候账号信息填错了怎么办？</div>
			<div class="explain">
				用户名和账号必须一致的，如果无法匹配是无法打款的，钱会在第一时间驳回到原账号里
				予以重新提现；但是如果你填写的户名和账户是正确的她人账号，那钱就打到别人的账号，出现这
				类情况请自行联系对方索回，我们无法处理。
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
