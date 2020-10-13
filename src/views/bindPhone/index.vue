<template>
	<div class="bindPhone">
		<mt-header fixed title="绑定手机号">
			<router-link to="/setting" slot="left"><mt-button icon="back">返回</mt-button></router-link>
			<!-- <mt-button slot="right" @click="showBox">说明</mt-button> -->
		</mt-header>
		<div class="wrapper">
			<!-- <input type="number" maxlength="11" placeholder="请输入手机号"> -->
			<mt-field label="" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
			
			
		</div>
		<div class="save">保存</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			phone:''
		}
	}
}
</script>

<style lang="stylus" scoped>
	.bindPhone
		.mint-header
			background-color #FFFFFF
			color #333333
		.wrapper
			padding 1.728rem
			padding-top 3.84rem
			box-sizing border-box
			input
				width 100%
				border none
				outline none
				padding 0.64rem
				border-bottom 1px solid #BFBFBF
				box-sizing border-box
		.save
			width 12.8rem
			height 2.24rem
			margin auto
			border-radius 1.12rem
			background linear-gradient(-86deg, rgba(249, 85, 232, 0.96), rgba(225, 72, 128, 0.96))
			color #FFFFFF
			text-align center
			font-size 0.96rem
			line-height 2.24rem
			margin-top 3.84rem
		
</style>

<style>
	.bindPhone .mint-cell-wrapper{
		background-position: bottom;
	}
		
</style>
