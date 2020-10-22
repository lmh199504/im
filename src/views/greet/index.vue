<template>
	<div class="greet">
		<div class="skip" @click="$router.push('/')">跳过</div>
		<div class="title">她们都在附近，寻找你初遇的Ta</div>
		<div class="person_container">
			<div class="person_item" v-for="n in 9" :key="n">
				<img src="../../assets/image/chuyu/001.jpg" alt="">
			</div>
		</div>
		<div class="greet_btn">
			招呼一下
		</div>
		<LoginFooter/>
	</div>
</template>

<script>
	import LoginFooter from '../login/loginFooter/index.vue'
export default {
	data() {
		return {
			
		}
	},
	components:{
		LoginFooter
	}
}
</script>

<style lang="stylus" scoped>
.greet
	width 100%
	position relative
	height 100%
	.skip
		text-align right
		padding-right 1.92rem
		font-size 0.32rem
		color #999999
		padding-top 1.92rem
	.title
		margin-top 1.92rem
		text-align center
		color #333333
		font-size 1.024rem
		font-weight 500
	.person_container
		padding 2.368rem
		display flex
		justify-content space-between
		flex-wrap wrap
		.person_item
			width 4.864rem
			height 4.864rem
			border-radius 50%
			margin-bottom 2.432rem
			img
				width 100%
				height 100%
				border-radius 50%
	.greet_btn
		background linear-gradient(-86deg, rgba(249, 85, 232, 0.96), rgba(225, 71, 127, 0.96))
		height 2.56rem
		width 14.4rem
		border-radius 1.28rem
		line-height 2.56rem
		text-align center
		color #FFFFFF
		font-size 1.152rem
		margin auto
</style>
