<template>
	<div class="phoneLogin">
		<div class="topHeader">
			<i class="el-icon-arrow-left" style="color: #343434;margin-left: 0.96rem;z-index: 11;position: relative;" @click="$router.go(-1)"></i>
			<div class="topHeader_title">手机号登录</div>
		</div>

		<div class="login_box">
			<el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
				<el-form-item label-width="0" label="" prop="phone">
					<el-input type="number" v-model="ruleForm.phone" placeholder="请输入手机号" autocomplete="off" maxlength="11" clearable></el-input>
				</el-form-item>
				<div class="testcode">
					<div class="testcodeInput">
						<el-form-item label-width="0" label="" prop="code">
							<el-input type="number" v-model="ruleForm.code" placeholder="请输入验证码" autocomplete="off"></el-input>
						</el-form-item>
					</div>
					<div :class="['testcodeText',canGetCode ? 'canGetCode': '']" @click="getCode()">{{ time === 60 ? '获取验证码' : time + 's后重试' }}</div>
				</div>

				<el-form-item label-width="0"><el-button :class='[ "loginBtn",canClick ? "canClick":"" ]' type="primary" @click="submitForm('ruleForm')">登录</el-button></el-form-item>
			</el-form>
			<div class="password_login" @click="$router.push('passLogin')">密码登录</div>
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
import { Form, Input, FormItem, Button } from 'element-ui'

export default {
	data() {
		return {
			ruleForm: {
				phone: '',
				code: ''
			},
			time: 60
		}
	},
	components: {
		ElForm: Form,
		ElInput: Input,
		ElFormItem: FormItem,
		ElButton: Button
	},
	computed:{
		canClick:function() {
			return this.checkMobile(this.ruleForm.phone) && this.ruleForm.code.length >= 4
		},
		canGetCode:function() {
			return this.checkMobile(this.ruleForm.phone) && this.time === 60
		}
	},
	created() {
		var my_time = sessionStorage.getItem('my_time')
		if(my_time && my_time < 60 && my_time > 0) {
			this.time = my_time
			
			this.codeTimer = setInterval(() => {
				this.time--
				sessionStorage.setItem('my_time',this.time)
				
				if (this.time <= 0) {
					clearInterval(this.codeTimer)
					sessionStorage.removeItem('my_time')
					this.time = 60
				}
			}, 1000)
		}
	},
	methods: {
		submitForm() {
			if(this.canClick) {
				window.console.log(this.ruleForm)
			}else{
				this.$toast.center('手机号或验证码不正确')
			}
			
		},
		getCode() {
			if(!this.canGetCode) {
				this.$toast.center('手机号不正确')
				return 
			}
			
			if (this.time === 60) {
				this.codeTimer = setInterval(() => {
					this.time--
					sessionStorage.setItem('my_time',this.time)
					
					if (this.time <= 0) {
						clearInterval(this.codeTimer)
						sessionStorage.removeItem('my_time')
						this.time = 60
					}
				}, 1000)
			} else {
				this.$toast.center(this.time + 's后重试')
			}
		},
		checkMobile(str) {
			var re = /^1\d{10}$/
			if (re.test(str)) {
				return true
			} else {
				return false
			}
		}
	}
}
</script>

<style lang="stylus" scoped>
.phoneLogin
	width 100%
	height 100%
	background-color #fff
	.topHeader
		position fixed
		top 0
		width 100%
		padding 0.64rem 0
		img
			width 0.96rem
		.topHeader_title
			position absolute
			top 0.96rem
			left 0
			width 100%
			text-align center
			color $cyNormalFontColor
			font-size 1.152rem
			font-weight 500
	.login_box
		box-sizing border-box
		padding 0 2.24rem
		padding-top 9.6rem
		.testcode
			display flex
			align-items center
			justify-content space-between
			.testcodeInput
				width 6.4rem
				position relative
			.testcodeText
				font-size 0.768rem
				color #AAAAAA
				width 4.8rem
				height 1.6rem
				line-height 1.6rem
				border-radius 0.8rem
				border 1px solid #AAAAAA
				text-align center
				margin-top -0.64rem
				&:hover
					opacity 0.8
			.canGetCode
				background linear-gradient(-86deg, rgba(249, 85, 232, 0.96), rgba(225, 72, 128, 0.96))
				border none
				color #FFFFFF
		.password_login
			text-align center
			color $cyNormalFontColor
			font-size 0.768rem
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

<style lang="stylus">
.phoneLogin
	.el-input__inner
		border none
		border-bottom 1px solid #CCCCCC
		border-radius 0
	.loginBtn
		width 100%
		background-color #E5E5E5
		border none
		height 2.56rem
		border-radius 1.28rem
		margin-top 4.352rem
	.canClick
		background linear-gradient(-86deg, rgba(249, 85, 232, 0.96), rgba(225, 72, 128, 0.96))
</style>
