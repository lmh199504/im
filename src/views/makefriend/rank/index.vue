<template>
	<div class="rank">
		<div class="topRank">
			<div class="one">
				<div class="onetop">
					<img class="topImg" src="../../../assets/image/chuyu/rank/second.png" alt="" />
					<img src="../../../assets/image/chuyu/001.jpg" alt="" class="toprankuserimg">
				</div>
				<div class="onebottom">
					<div class="toprankname">包子</div>
					<div class="meivalue">
						<img src="../../../assets/image/chuyu/rank/mei.png" alt="" />
						<span>1235464</span>
					</div>
					<div class="topranknumber">2</div>
				</div>
			</div>

			<div class="two">
				<div class="twotop">
					<img class="topImg" src="../../../assets/image/chuyu/rank/first.png" alt="" />
					<img src="../../../assets/image/chuyu/001.jpg" alt="" class="toprankuserimg">
				</div>
				<div class="twobttom">
					<div class="toprankname">包子</div>
					<div class="meivalue">
						<img src="../../../assets/image/chuyu/rank/mei.png" alt="" />
						<span>1235464</span>
					</div>
					<div class="topranknumber">1</div>
				</div>
			</div>

			<div class="three">
				<div class="threetop">
					<img class="topImg" src="../../../assets/image/chuyu/rank/third.png" alt="" />
					<img src="../../../assets/image/chuyu/001.jpg" alt="" class="toprankuserimg">
				</div>
				<div class="threebottom">
					<div class="toprankname">包子</div>
					<div class="meivalue">
						<img src="../../../assets/image/chuyu/rank/mei.png" alt="">
						<span>1235464</span>
					</div>
					<div class="topranknumber">3</div>
				</div>
			</div>

			<div class="rankBg"><img src="../../../assets/image/chuyu/rank/bg.png" alt="" /></div>
			<div class="start"><img src="../../../assets/image/chuyu/rank/start.png" alt="" /></div>
		</div>
		
		
		
		<div class="topRank" v-if="false">
			<div class="one">
				<div class="onetop"><img class="topImg" src="../../../assets/image/chuyu/rank/second.png" alt="" /></div>
				<div class="onebottom">
					<div class="toprankname">包子</div>
					<div class="meivalue">
						<img src="../../../assets/image/chuyu/rank/mei.png" alt="" />
						<span>1235464</span>
					</div>
					<div class="topranknumber">2</div>
				</div>
			</div>
		
			<div class="two">
				<div class="twotop"><img class="topImg" src="../../../assets/image/chuyu/rank/first.png" alt="" /></div>
				<div class="twobttom">
					<div class="toprankname">包子</div>
					<div class="meivalue">
						<img src="../../../assets/image/chuyu/rank/mei.png" alt="" />
						<span>1235464</span>
					</div>
					<div class="topranknumber">1</div>
				</div>
			</div>
		
			<div class="three">
				<div class="threetop"><img class="topImg" src="../../../assets/image/chuyu/rank/third.png" alt="" /></div>
				<div class="threebottom">
					<div class="toprankname">包子</div>
					<div class="meivalue">
						<img src="../../../assets/image/chuyu/rank/mei.png" alt="">
						<span>1235464</span>
					</div>
					<div class="topranknumber">3</div>
				</div>
			</div>
		
			<div class="rankBg"><img src="../../../assets/image/chuyu/rank/bg.png" alt="" /></div>
			<div class="start"><img src="../../../assets/image/chuyu/rank/start.png" alt="" /></div>
		</div>
		
		<div class="tabBtn">
			<div class="god">女神榜</div>
			<div class="rich">富豪榜</div>
		</div>
		
		<div class="left_over_rank">
			<div class="left_over_rank_item">
				<div class="left">
					<div class="left_over_rank_number">4</div>
					<img class="userheader" src="../../../assets/image/chuyu/001.jpg" alt="">
					<div class="username">灰色的回忆</div>
				</div>
				
				<div class="right">
					<img class="rightImg" src="../../../assets/image/chuyu/rank/mei.png" alt="">
					<span>52525</span>
				</div>
			</div>
			
			<div class="left_over_rank_item">
				<div class="left">
					<div class="left_over_rank_number">5</div>
					<img class="userheader" src="../../../assets/image/chuyu/001.jpg" alt="">
					<div class="username">灰色的回忆</div>
				</div>
				
				<div class="right">
					<img class="rightImg" src="../../../assets/image/chuyu/rank/mei.png" alt="">
					<span>52525</span>
				</div>
			</div>
			
			<div class="left_over_rank_item">
				<div class="left">
					<div class="left_over_rank_number">5</div>
					<img class="userheader" src="../../../assets/image/chuyu/001.jpg" alt="">
					<div class="username">灰色的回忆</div>
				</div>
				
				<div class="right">
					<img class="rightImg" src="../../../assets/image/chuyu/rank/mei.png" alt="">
					<span>52525</span>
				</div>
			</div>
		</div>
		
		
		
		<div class="left_over_rank" v-if="false">
			<div class="left_over_rank_item">
				<div class="left">
					<div class="left_over_rank_number">4</div>
					<img class="userheader" src="../../../assets/image/chuyu/001.jpg" alt="">
					<div class="username">灰色的回忆</div>
				</div>
				
				<div class="right">
					<img class="rightImg" src="../../../assets/image/chuyu/rank/mei.png" alt="">
					<span>52525</span>
				</div>
			</div>
			
			<div class="left_over_rank_item">
				<div class="left">
					<div class="left_over_rank_number">5</div>
					<img class="userheader" src="../../../assets/image/chuyu/001.jpg" alt="">
					<div class="username">灰色的回忆</div>
				</div>
				
				<div class="right">
					<img class="rightImg" src="../../../assets/image/chuyu/rank/mei.png" alt="">
					<span>52525</span>
				</div>
			</div>
			
			<div class="left_over_rank_item">
				<div class="left">
					<div class="left_over_rank_number">5</div>
					<img class="userheader" src="../../../assets/image/chuyu/001.jpg" alt="">
					<div class="username">灰色的回忆</div>
				</div>
				
				<div class="right">
					<img class="rightImg" src="../../../assets/image/chuyu/rank/mei.png" alt="">
					<span>52525</span>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
export default {
	data() {
		return {
			allLoaded: false
		}
	},
	methods: {
		loadTop() {
			setTimeout(() => {
				this.$refs.loadmore.onTopLoaded()
			}, 1500)
		},
		loadBottom() {
			// window.console.log('触底加载')
			setTimeout(() => {
				this.$refs.loadmore.onBottomLoaded()
			}, 3000)
		}
	}
}
</script>

<style lang="stylus" scoped>
.rank
	padding 0.896rem
	.topRank
		display flex
		justify-content space-around
		align-items bottom
		position relative
		min-height 20.48rem
		.one
			width 33.3%
			.onebottom
				position relative
				top 6.4rem
				z-index 1
				.meivalue
					text-align center
					img
						width 0.96rem
						vertical-align -0.128rem
						margin-right 0.32rem
					span
						color #FFFFFF
						font-size 0.832rem
				.toprankname
					text-align center
					color #FFFFFF
					font-size 0.96rem
				.topranknumber
					text-align center
					font-size 3.2rem
					color #FFFFFF
					margin-top 0.064rem
		.two
			width 33.3%
			.twobttom
				position relative
				z-index 1
				top 2.56rem
				text-align center
				.toprankname
					color #FFFFFF
					font-size 0.96rem
				.meivalue
					img
						width 0.96rem
						vertical-align -0.128rem
						margin-right 0.32rem
					span
						color #FFFFFF
						font-size 0.832rem
				.topranknumber
					text-align center
					font-size 3.2rem
					color #FFFFFF
					margin-top 2.24rem
		.three
			width 33.3%
			.threebottom 
				position relative
				z-index 1
				top 6.4rem
				text-align center
				.toprankname
					color #FFFFFF
					font-size 0.96rem
				.meivalue
					img
						width 0.96rem
						vertical-align -0.128rem
						margin-right 0.32rem
					span
						color #FFFFFF
						font-size 0.832rem
				.topranknumber
					text-align center
					font-size 3.2rem
					color #FFFFFF
					margin-top 0.64rem
				
		.onetop
			text-align center
			position relative
			top 4.16rem
			width 4.48rem
			margin auto
			.topImg
				width 4.48rem
			.toprankuserimg 
				width 3.584rem
				height 3.584rem
				position absolute
				left 0.768rem
				top 0.96rem
				border-radius 50%
		.twotop
			text-align center
			width 6.08rem
			margin auto
			position relative
			.topImg
				width 6.08rem
			.toprankuserimg	
				width 4.992rem
				height 4.992rem
				position absolute
				left 0.896rem
				top 1.216rem
				border-radius 50%
		.threetop
			text-align center
			position relative
			top 5.44rem
			width 4.096rem
			margin auto
			.topImg
				width 4.096rem
			.toprankuserimg
				width 3.2rem
				height 3.2rem
				position absolute
				left 0.768rem
				top 0.96rem
				border-radius 50%	
		.rankBg
			position absolute
			width 100%
			top 7.04rem
			img
				width 100%
		.start
			position absolute
			top 3.52rem
			left 30%
			img
				width 0.768rem
	.tabBtn
		width 100%
		display flex
		justify-content space-between
		padding 0 1.6rem
		box-sizing border-box
		.god
			width 8rem
			height 2.24rem
			background linear-gradient(0deg, #FF80A8 0%, #FF9ABA 100%)
			box-shadow 0px 5px 15px 0px rgba(189, 116, 214, 0.34)
			border-radius 1.12rem
			text-align center
			line-height 2.24rem
			font-size 0.96rem
			color #FFFFFF
		.rich
			width 8rem
			height 2.24rem
			border 1px solid #478CF9
			box-shadow 0px 5px 15px 0px rgba(189, 116, 214, 0.34)
			border-radius 1.12rem
			text-align center
			line-height 2.24rem
			font-size 0.96rem
			color #478CF9
	.left_over_rank
		width 100%
		margin-top 2.24rem
		.left_over_rank_item 
			border-bottom 1px solid #F3F3F3
			display flex
			height 3.2rem
			line-height 3.2rem
			justify-content space-between
			.left 
				display flex
				.left_over_rank_number
					color #333333
					font-size 0.96rem
					margin-left 0.32rem
					margin-right 1.024rem
				.userheader	
					width 2.56rem
					height 2.56rem
					border-radius 1.28rem
					margin-right 2.304rem
					margin-top 0.32rem
				.username 
					font-size 0.96rem
					color #333
			.right 
				img
					width 0.96rem
					margin-right 0.32rem
					vertical-align -0.064rem
				span
					font-size 0.96rem
					color #333
</style>
