<template>
	<div class="passLogin">
		<div class="topHeader">
			<i class="el-icon-arrow-left" style="color: #343434;margin-left: 0.96rem;z-index: 11;position: relative;" @click="$router.go(-1)"></i>
			<div class="topHeader_title">手机号登录</div>
		</div>

		<div class="login_box">
			<el-form :model="ruleForm" ref="ruleForm" label-width="0" class="demo-ruleForm">
				<el-form-item label-width="0" label="" prop="phone">
					<el-input type="number" v-model="ruleForm.phone" placeholder="请输入手机号" autocomplete="off" maxlength="11" clearable></el-input>
				</el-form-item>

				<el-form-item label-width="0" label="" prop="password">
					<el-input type="password" v-model="ruleForm.password" placeholder="请输入密码" autocomplete="off"></el-input>
				</el-form-item>
				<p class="passError" v-show="passError">输入密码错误</p>
				<div class="forget"><span @click="$router.push('/forgetPass')">忘记密码</span></div>
				<el-form-item label-width="0">
					<el-button :class="['loginBtn', canClick ? 'canClick' : '']" type="primary" @click="submitForm()">登录</el-button>
				</el-form-item>
			</el-form>
		</div>
		<login-footer></login-footer>
	</div>
</template>

<script>
import { FormItem, Form, Input, Button } from 'element-ui'
import LoginFooter from './loginFooter/index.vue'
export default {
	data() {
		return {
			ruleForm: {
				phone: '',
				password: ''
			},
			passError: false,
		}
	},
	components: {
		ElForm: Form,
		ElFormItem: FormItem,
		ElInput: Input,
		ElButton: Button,
		LoginFooter:LoginFooter
	},
	computed: {
		canClick: function() {
			return this.checkMobile(this.ruleForm.phone) && this.ruleForm.password
		}
	},
	methods: {
		checkMobile(str) {
			var re = /^1\d{10}$/
			if (re.test(str)) {
				return true
			} else {
				return false
			}
		},
		submitForm() {
			if(!this.canClick) {
				this.$toast.center('手机号不正确')
			}
		}
	}
}
</script>

<style lang="stylus" scoped>
.passLogin
	min-height 600px
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
		.passError
			font-size 0.768rem
			color #EC3661
			margin-top -0.96rem
		.forget
			text-align right
			margin-top -0.128rem
			span
				color $cyNormalFontColor
				font-size 0.768rem
</style>

<style lang="stylus">
.passLogin
	.login_box

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
