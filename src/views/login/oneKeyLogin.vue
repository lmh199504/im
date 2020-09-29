<template>
	<div class="onekeyLogin">
		<div class="goback" @click="$router.go(-1)"><img src="../../assets/image/chuyu/goback_white.png" alt="goback" /></div>
		<div class="logo-wrapper"><img src="../../assets/image/chuyu/logo.png" alt="logo" /></div>

		<p class="phone_number">181****492</p>
		<p class="other_phone">其他手机号码登录</p>
		<div class="myPhone_login">本机号码一键登录</div>
		<div class="useragree">
			<div class="checkbox"><el-checkbox v-model="checked"></el-checkbox></div>
			<div class="agree_Text">登录即同意《用户协议》和《隐私条款》</div>
			<div class="agree_Text">登录即同意中国移动认证服务条款并使用本机号码登录</div>
			<br />
		</div>

		<div class="footer">中国移动提供认证服务</div>
	</div>
</template>

<script>
import { Checkbox } from 'element-ui'
export default {
	data() {
		return {
			checked: false
		}
	},
	components: {
		ElCheckbox: Checkbox
	},
	created() {
		window.console.log(this.$router)
	},
	methods: {}
}
</script>

<style lang="stylus" scoped>
.onekeyLogin
	background-image url('../../assets/image/chuyu/onekeybg.jpg')
	background-size 100% 100%
	background-position 0 0
	height 100%
	width 100%
	.goback
		position absolute
		top 1.28rem
		left 1.28rem
		img
			width 0.768rem
	.logo-wrapper
		padding-top 8rem
		text-align center
		img
			width 5.184rem
	.phone_number
		text-align center
		font-size 1.536rem
		color #FFFFFF
		margin-top 1.6rem
	.other_phone
		font-size 0.768rem
		color #fff
		margin-top 2.176rem
		text-align center
	.myPhone_login
		width 15.36rem
		height 2.56rem
		border-radius 1.28rem
		line-height 2.56rem
		background-color #fff
		border 1px solid #EEEEEE
		color $cyNormalFontColor
		font-size 0.96rem
		margin auto
		margin-top 1.984rem
		text-align center
	.useragree
		width 100%
		padding 0 1.28rem
		position relative
		box-sizing border-box
		margin-top 2.816rem
		.checkbox
			position absolute
			left 2.56rem
			top 0.256rem
			.el-checkbox__inner
				border-radius 50% !important
		.agree_Text
			text-align center
			font-size 0.64rem
			color #FFFFFF
			transform-origin center
			transform scale(0.9)
	.footer
		position absolute
		bottom 1.92rem
		color #FFFFFF
		font-size 0.64rem
		text-align center
		width 100%
</style>

<style lang="stylus">
.onekeyLogin
	.el-checkbox__inner
		border-radius 50%!important
		transform scale(0.9)
		transform-origin center
		background-color #808080
		&:hover
			border-color transparent
	.el-checkbox__input.is-checked
		.el-checkbox__inner
			background-color $cyBasicFontColor
</style>
