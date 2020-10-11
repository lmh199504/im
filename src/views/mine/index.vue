<template>
	<div class="mine">
		<div class="userInfo">
			<div class="userTopInfo">
				<div class="left">
					<img class="userheader" src="../../assets/image/chuyu/001.jpg" alt="">
				</div>
				<div class="right">
					<div class="right_pan">
						<div>我百思了也不得姐</div>
						<img src="../../assets/image/chuyu/pan.png" alt="">
					</div>
					<div class="userId">
						ID:123113
					</div>
					<div>
						<img src="../../assets/image/chuyu/usersvip.png" alt="">
					</div>
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
		},
		mounted() {
			
		},
		created() {
			
		},
		methods:{
			
		}
	}
</script>

<style lang="stylus" scoped>
	.mine
		background-color #EEEEEE
		.userInfo
			background-color #FFFFFF
			padding 0.96rem
			padding-top 1.92rem
			.userTopInfo
				display flex
				
				.userheader
					width 4.48rem
					height 4.48rem
					border-radius 50%
					margin-right 1.28rem
				.right_pan 
					display flex
				.userId 
					font-size 0.96rem
					color #333333
				
</style>
