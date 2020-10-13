<template>
	<div class="aboutUs">
		<mt-header fixed title="关于我们">
			<router-link to="/setting" slot="left"><mt-button icon="back">返回</mt-button></router-link>
			<!-- <mt-button slot="right" @click="showBox">说明</mt-button> -->
		</mt-header>
		<div class="wrapper">
			<div class="logo">
				<img src="../../assets/image/chuyu/logo.png" alt="">
			</div>
			<div class="version">
				初遇 v1.4.9
			</div>
			
			<div class="infoWrapper">
				<div class="phone">
					<div class="title">客服电话</div>
					<div class="number">40088866</div>
				</div>
				<div class="compony">
					厦门微代码网络科技有限公司
				</div>
			</div>
			
			<div class="footer">
				<div class="checkbtn">
					检查新版本
				</div>
				<div class="footerText">
					如果遇到问题，请联系<span>在线客服</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data() {
			return{
				
			}
		}
	}
</script>

<style lang="stylus" scoped>
.aboutUs	
	.mint-header
		background-color #FFFFFF
		color #333333
	.wrapper
		padding 1.28rem
		padding-top 5.12rem
		.logo
			text-align center
			img
				width 5.12rem
		.version
			text-align center
			color #343434
			font-size 0.96rem
			margin-top 0.64rem
		.infoWrapper
			margin-top 3.84rem
			.phone
				padding 1.28rem  0 
				display flex
				justify-content space-between
				color #343434
				font-size 0.96rem
				border-bottom 1px solid #E0E0E0
			.compony
				padding 1.28rem  0
				color #343434
				font-size 0.96rem
				border-bottom 1px solid #E0E0E0
				text-align center
		.footer
			position absolute
			bottom 1.92rem
			width 100%
			.checkbtn
				width 8rem
				height 2.24rem
				margin auto
				text-align center
				color #FFFFFF
				font-size 0.96rem
				line-height 2.24rem
				border-radius 1.12rem
				background linear-gradient(-86deg, rgba(249, 85, 232, 0.96), rgba(246, 96, 151, 0.96))
			.footerText
				margin-top 1.28rem
				font-size 0.768rem
				text-align center
				color #343434
				span
					color #E14880
</style>
