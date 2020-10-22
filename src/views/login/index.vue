<template>
	<div class="login-wrapper">
		<div class="logo-wrapper"><img class="logo" src="../../assets/image/chuyu/logo.png" alt="logo" /></div>

		<div class="onekeyLogin" @click="toOneKeyLogin">一键登录</div>
		<div class="phoneLogin" @click="toPhoneLogin">手机登录</div>

		<div class="other_login">
			<div class="other_login_title">选择第三方登录</div>

			<div class="other_login_container">
				<div class="other_login_item" @click="qqLogin"><img style="width: 1.152rem;" src="../../assets/image/chuyu/qqlogin.png" alt="" /></div>
				<div class="other_login_item"><img src="../../assets/image/chuyu/wxlogin.png" alt="" /></div>
				<div class="other_login_item"><img src="../../assets/image/chuyu/wblogin.png" alt="" /></div>
			</div>
		</div>

		<!-- <div class="login_agree">
			<span>登陆即同意</span>
			<span class="agree_item">《用户协议》</span>
			<span>和</span>
			<span class="agree_item">《隐私条款》</span>
		</div> -->
		<LoginFooter />
	</div>
</template>

<script>
import LoginFooter from './loginFooter/index.vue'
export default {
	data() {
		return {}
	},
	created() {

	},
	methods: {
		toPhoneLogin() {
			this.$router.push('/PhoneLogin')
		},
		toOneKeyLogin() {
			this.$router.push('/OneKeyLogin')
		},
		qqLogin() {
			let pages =
			'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxa0be6f5997701c70&redirect_uri=http%3a%2f%2flmh.nat300.top%2f%23%2fmakefriend&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect'
			//我是用的非静默授权，snsapi_userinfo 需要用户手动同意
			window.location.href = pages
		}
	},
	components:{
		LoginFooter
	}
}
</script>
<style lang="stylus" scoped>
.login-wrapper
	user-select none
	padding 1.28rem
	.logo-wrapper
		text-align center
		.logo
			width 5.184rem
			margin-top 10.24rem
	.onekeyLogin
		width 12.8rem
		height 2.56rem
		background linear-gradient(-86deg, rgba(249, 85, 232, 0.96), rgba(225, 72, 128, 0.96))
		border 1px solid #EEEEEE
		border-radius 1.28rem
		margin-left auto
		margin-right auto
		text-align center
		line-height 2.56rem
		color #fff
		font-size 1.152rem
		margin-top 5.12rem
		&:hover
			opacity 0.5
	.phoneLogin
		width 12.8rem
		height 2.56rem
		background #fff
		border-radius 1.28rem
		border 1px solid #E14880
		margin-left auto
		margin-right auto
		text-align center
		line-height 2.56rem
		color #E14880
		font-size 1.152rem
		margin-top 2.24rem
		&:hover
			opacity 0.5
	.other_login
		.other_login_title
			width 100%
			text-align center
			margin-top 2.88rem
			font-size 0.768rem
			color $cyNormalFontColor
		.other_login_container
			display flex
			justify-content center
			margin-top 1.92rem
			&::before
				content '', display block
				width 50
				height 1
				background-color #CCCCCC
				position absolute
				top 0
				left 0
			&::after
				content '', display block
				width 50
				height 1
				background-color #CCCCCC
				position absolute
				top 0
				left 0
			.other_login_item
				margin 0.64rem
				img
					width 1.408rem
	.login_agree
		position absolute
		bottom 1.92rem
		width 100%
		text-align center
		font-size 0.704rem
		left 0
		.agree_item
			color $cyBasicFontColor
</style>
