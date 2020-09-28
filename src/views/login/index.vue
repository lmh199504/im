<template>
	<div class="login-wrapper">
		<div class="logo-wrapper">
			<img class="logo" src="../../assets/image/chuyu/logo.png" alt="logo" />
		</div>
		
		<div class="onekeyLogin" @click="toOneKeyLogin">
			一键登录
		</div>
		<div class="phoneLogin" @click="toPhoneLogin">
			手机登录
		</div>
		
		<div class="other_login">
			<div class="other_login_title">选择第三方登录</div>
			
			<div class="other_login_container">
				<div class="other_login_item" >
					<img style="width: 18px;" src="../../assets/image/chuyu/qqlogin.png" alt="">
				</div>
				<div class="other_login_item">
					<img src="../../assets/image/chuyu/wxlogin.png" alt="">
				</div>
				<div class="other_login_item">
					<img src="../../assets/image/chuyu/wblogin.png" alt="">
				</div>
			</div>
		</div>
		
		<div class="login_agree"> 
			<span>登陆即同意</span>
			<span class="agree_item">《用户协议》</span>
			<span>和</span>
			<span class="agree_item">《隐私条款》</span>
		</div>
	</div>
</template>

<script>
// import { getUserInfo } from '@/api'
export default {
	data() {
		return {}
	},
	created() {
		// getUserInfo()
	},
	methods:{
		toPhoneLogin() {
			this.$router.push('/PhoneLogin')
		},
		toOneKeyLogin() {
			this.$router.push('/OneKeyLogin')
		}
	}
}
</script>
<style lang="stylus" scoped>
.login-wrapper
	user-select none
	padding 20px
	.logo-wrapper
		text-align center
		.logo
			width 81px
			margin-top 160px
	.onekeyLogin
		width 200px
		height 40px
		background linear-gradient(-86deg, rgba(249, 85, 232, 0.96), rgba(225, 72, 128, 0.96))
		border 1px solid #EEEEEE
		border-radius 20px
		margin-left auto
		margin-right auto
		text-align center
		line-height 40px
		color #fff
		font-size 18px
		margin-top 80px
		&:hover
			opacity 0.5
	.phoneLogin
		width 200px
		height 40px
		background #fff
		border-radius 20px
		border 1px solid #E14880
		margin-left auto
		margin-right auto
		text-align center
		line-height 40px
		color #E14880
		font-size 18px
		margin-top 35px
		&:hover
			opacity 0.5
	.other_login
		.other_login_title
			width 100%
			text-align center
			margin-top 45px
			font-size 12px
			color $cyNormalFontColor
		.other_login_container
			display flex
			justify-content center
			margin-top 30px
			&::before
				content '',
				display block
				width 50
				height 1
				background-color #CCCCCC
				position absolute
				top 0
				left 0
			&::after
				content '',
				display block
				width 50
				height 1
				background-color #CCCCCC
				position absolute
				top 0
				left 0
			
			.other_login_item
				margin 10px
				img
					width 22px
	.login_agree
			position absolute
			bottom 30px
			width 100%
			text-align center
			font-size 11px
			left 0
			.agree_item
				color $cyBasicFontColor
</style>
