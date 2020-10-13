<template>
	<div class="changePassWord">
		<mt-header fixed title="修改密码">
			<router-link to="/setting" slot="left"><mt-button icon="back">返回</mt-button></router-link>
			<!-- <mt-button slot="right" @click="showBox">说明</mt-button> -->
		</mt-header>
		<div class="wrapper">
			<mt-field label="" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
			<br>
			<div class="code_wrapper">
				<div class="code_input">
					<mt-field label="" placeholder="请输入验证码" type="number" v-model="phone"></mt-field>
				</div>
				<div class="code_btn">
					获取验证码
				</div>
			</div>
			<br>
			<mt-field label="" placeholder="请输入新密码" type="tel" v-model="phone"></mt-field>
			<div class="tip_text">请输入8-16位密码，格式不能为纯数字，不含特殊字符</div>
			<br>
			<mt-field label="" placeholder="请确认新密码" type="tel" v-model="phone"></mt-field>
			<div class="tip_text">与设置密码不一致</div>
			
			<div class="sure">确定</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			phone:'',
			code:'',
			password:'',
			rePass:''
		}
	}
}
</script>

<style lang="stylus" scoped>
	.mint-header
		background-color #FFFFFF
		color #333333
	.wrapper
		padding 2.24rem
		padding-top 3.84rem
		.code_wrapper
			display flex
			justify-content space-between
			align-items center
			.code_input
				width 7.68rem
			.code_btn
				width 4.8rem
				height 1.6rem
				line-height 1.6rem
				text-align center
				font-size 0.768rem
				border-radius 0.8rem
				border 1px solid #AAAAAA
				color #AAAAAA
		.tip_text
			color #EC3661
			font-size 0.768rem
		.sure
			width 19.2rem
			height 2.56rem
			background-color #E5E5E5
			color #FFFFFF
			line-height 2.56rem
			border-radius 1.28rem
			font-size 1.152rem
			text-align center
			margin-top 1.92rem
</style>


<style>
	.changePassWord .mint-cell-wrapper{
		background-position: bottom;
	}
		
</style>