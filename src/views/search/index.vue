<template>
	<div class="search">
		<mt-search v-model="value" cancel-text="取消" placeholder="请输入用户昵称/ID">
			<!-- <mt-cell v-for="item in 10" :title="item.title" :value="item.value"></mt-cell> -->
			<div class="searchResult" v-if="false">
				<div class="resultItem" v-for="n in 10" :key="n">
					<div class="left"><img class="userImg" src="../../assets/image/chuyu/001.jpg" alt="" /></div>
					<div class="right">
						<div class="username">灰色的回忆</div>
						<div class="usersex">
							<img src="../../assets/image/chuyu/sex_girl.png" alt="" />
							<div class="userage">21</div>
						</div>
						<div class="user_desc">我很无聊，快来找我玩呀!我在等你哦....</div>
					</div>
				</div>
			</div>
			
			
			<div class="noData">
				未搜索到结果
			</div>
		</mt-search>
		
		<div class="searchResult suggest" v-if="value === '' && result.length === 0 ">
			<h5 class="yuanfen">与你有缘的</h5>
			<div class="resultItem" v-for="n in 5" :key="n">
				<div class="left"><img class="userImg" src="../../assets/image/chuyu/001.jpg" alt="" /></div>
				<div class="right">
					<div class="username">灰色的回忆</div>
					<div class="usersex">
						<img src="../../assets/image/chuyu/sex_girl.png" alt="" />
						<div class="userage">21</div>
					</div>
					<div class="user_desc">我很无聊，快来找我玩呀!我在等你哦....</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			value: '',
			result:[
				
			]
		}
	},
	watch: {
		value(newVal, oldVal) {
			if (newVal !== oldVal && newVal !== '') {
				window.console.log(newVal)
			}
		}
	}
}
</script>

<style lang="stylus" scoped>
.search
	.searchResult
		padding 0.96rem
		.resultItem
			border-bottom 1px solid #F3F3F3
			display flex
			margin-bottom 0.32rem
			.userImg 
				width 3.84rem
				height 3.84rem
				border-radius 50%
				margin-right 0.64rem
			.username 
				font-size 0.768rem
				color #333
			.usersex 
				width 2.56rem
				height 1.024rem
				background-color #FF82AA
				border-radius 0.512rem
				display flex
				justify-content space-around
				line-height 1.024rem
				margin-top 0.512rem
				img
					width 0.64rem
					height 0.64rem
					margin-top 0.192rem
				.userage
					font-size 0.768rem
					color #FFFFFF
			.user_desc 
				overflow hidden
				text-overflow ellipsis
				white-space nowrap
				font-size 0.768rem
				color #999999
				margin-top 0.32rem
	.noData
		line-height 25.6rem
		text-align center
		font-size 0.96rem
		color #333333
	.suggest 
		position absolute
		top 3.84rem
		.yuanfen 
			font-size 0.896rem
			color #333333
			margin-bottom 0.96rem
</style>
<style>
.search .mint-searchbar-cancel {
	font-size: 0.96rem;
	color: #333333;
}
.search .mint-searchbar {
	background-color: #FFFFFF;
}
.search .mint-searchbar-inner {
	background-color: #eeeeee;
	border-radius: 1.28rem;
}
.search .mint-searchbar-core {
	background-color: #eee;
}
.search .mint-searchbar-inner .mintui-search {
	font-size: 0.96rem;
}
</style>
