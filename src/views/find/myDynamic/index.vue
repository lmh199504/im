<template>
	<div class="myDynamic">
		<div class="wrapper">
			<div class="myDynamic_wrapper">
				<div class="userInfo">
					<div class="left"><img src="../../../assets/image/chuyu/001.jpg" alt="" /></div>
					<div class="right">
						<h5 class="username">小可爱呀</h5>
						<div class="usersex" :class="[sex === 1 ? 'sex_boy' : 'sex_girl']">
							<img src="../../../assets/image/chuyu/personalData/girl.png" alt="女" />
							<!-- <img src="../../../assets/image/chuyu/personalData/boy.png" alt=""> -->
							<div class="userage">21</div>
						</div>
						
					</div>
				</div>

				<div class="main_dynamic">
					<div class="dynamic_text">
						以前受的委屈太多了，现在只喜欢那种温柔的，
						只 对我温柔的，甜的发腻的最好了。一点都
						不想被伤 害也不想吵架冷战，不想去猜对方的心思心...
					</div>
					
					<div class="dynamic_img">
						<img src="../../../assets/image/chuyu/001.jpg" alt="">
					</div>
				</div>
				
				<div class="footer">
					<div class="time">7分钟前</div>
					<div class="del">删除</div>
				</div>
			</div>
			
			
			<div class="myDynamic_wrapper">
				<div class="userInfo">
					<div class="left"><img src="../../../assets/image/chuyu/001.jpg" alt="" /></div>
					<div class="right">
						<h5 class="username">小可爱呀</h5>
						<div class="usersex" :class="[sex === 1 ? 'sex_boy' : 'sex_girl']">
							<img src="../../../assets/image/chuyu/personalData/girl.png" alt="女" />
							<!-- <img src="../../../assets/image/chuyu/personalData/boy.png" alt=""> -->
							<div class="userage">21</div>
						</div>
						
					</div>
				</div>
			
				<div class="main_dynamic">
					<div class="dynamic_text">
						以前受的委屈太多了，现在只喜欢那种温柔的，
						只 对我温柔的，甜的发腻的最好了。一点都
						不想被伤 害也不想吵架冷战，不想去猜对方的心思心...
						不想被伤 害也不想吵架冷战，不想去猜对方的心思心...
					</div>
					<!-- <div class="all_text">全文</div> -->
					<div class="dynamic_img">
						<img src="../../../assets/image/chuyu/001.jpg" alt="">
					</div>
				</div>
				
				<div class="footer">
					<div class="time">7分钟前</div>
					<div class="del">删除</div>
				</div>
			</div>
			
			
			<div class="myDynamic_wrapper">
				<div class="userInfo">
					<div class="left"><img src="../../../assets/image/chuyu/001.jpg" alt="" /></div>
					<div class="right">
						<h5 class="username">小可爱呀</h5>
						<div class="usersex" :class="[sex === 1 ? 'sex_boy' : 'sex_girl']">
							<img src="../../../assets/image/chuyu/personalData/girl.png" alt="女" />
							<!-- <img src="../../../assets/image/chuyu/personalData/boy.png" alt=""> -->
							<div class="userage">21</div>
						</div>
						
					</div>
				</div>
			
				<div class="main_dynamic">
					<div class="dynamic_text">
						吵架冷战，不想去猜对方的心
					</div>
				</div>
				
				<div class="footer">
					<div class="time">7分钟前</div>
					<div class="del">删除</div>
				</div>
			</div>
			
			<div class="myDynamic_wrapper">
				<div class="userInfo">
					<div class="left"><img src="../../../assets/image/chuyu/001.jpg" alt="" /></div>
					<div class="right">
						<h5 class="username">小可爱呀</h5>
						<div class="usersex" :class="[sex === 1 ? 'sex_boy' : 'sex_girl']">
							<img src="../../../assets/image/chuyu/personalData/girl.png" alt="女" />
							<!-- <img src="../../../assets/image/chuyu/personalData/boy.png" alt=""> -->
							<div class="userage">21</div>
						</div>
						
					</div>
				</div>
			
				<div class="main_dynamic">
					<div class="dynamic_text">
						吵架冷战，不想去猜对方的心
					</div>
					
					<div class="dynamic_img">
						<img src="../../../assets/image/chuyu/001.jpg" alt="" class="nine_img" v-for="i in 9" :key='i'>
					</div>
					
				</div>
				
				<div class="footer">
					<div class="time">7分钟前</div>
					<div class="del">删除</div>
				</div>
			</div>
			
			
			
		</div>
		
		
		
	</div>
</template>

<script>
export default {
	data() {
		return {
			sex: 1
		}
	}
}
</script>

<style lang="stylus" scoped>
.myDynamic
	background-color #EEEEEE
	.myDynamic_wrapper
		background-color #FFFFFF
		margin-bottom 0.64rem
		padding 0.96rem 1.28rem
		box-sizing border-box
		.userInfo
			display flex
			align-items center
			.left
				height 2.88rem
				overflow hidden
				margin-right 0.64rem
				img
					width 2.88rem
					height 2.88rem
					border-radius 50%
			.username
				color #202020
				font-size 0.96rem
				margin-bottom 0.576rem
			.usersex
				display flex
				align-items center
				width 2.24rem
				height 0.96rem
				border-radius 0.416rem
				padding-left 0.32rem
				img
					width 0.64rem
					height 0.64rem
					margin-right 0.192rem
				.userage
					font-size 0.768rem
					color #FFFFFF
			.sex_boy
				background-color #00A1E9
		.dynamic_text
			font-size 0.96rem
			color #343434
			margin-top 0.96rem
			margin-bottom 0.96rem
			display: -webkit-box; /* 弹性盒模型*/
			-webkit-box-orient: vertical; /* 文字垂直排列 */
			-webkit-line-clamp:3; /*文字显示的行数*/
			overflow: hidden; /*超出部分溢出隐藏*/

		.dynamic_img
			width 100%
			img
				width 11.52rem
				height 11.52rem
				border-radius 0.64rem
				box-sizing border-box
			.nine_img
				width 33.3%
				padding 0.32rem
				height 6.4rem
		.footer
			display flex
			font-size 0.768rem
			color #666666
			.time
				margin-right 1.088rem
</style>
