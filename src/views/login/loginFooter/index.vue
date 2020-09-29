<template>
	<div class="login_agree">
		<span>登陆即同意</span>
		<span class="agree_item">《用户协议》</span>
		<span>和</span>
		<span class="agree_item">《隐私条款》</span>
	</div>
</template>

<script>
export default {
	data() {
		return {}
	}
}
</script>

<style lang="stylus" scope>
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
