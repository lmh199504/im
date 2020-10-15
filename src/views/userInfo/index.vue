<template>
	<div class="userInfo">
		<mt-header fixed title="">
			<mt-button icon="back" slot="left" @click="$router.go(-1)">返回</mt-button>
			<!-- <router-link to="/" slot="left"><mt-button icon="back">返回</mt-button></router-link> -->
			<mt-button slot="right" icon="more" @click="showBox"></mt-button>
		</mt-header>
		<div class="wrapper">
			<div class="userBg"><img src="../../assets/image/chuyu/001.jpg" alt="" /></div>

			<div class="userMainInfo">
				<div class="u_usename">
					<div class="username">我是你的泡芙妹妹</div>
					<div class="sm_renzheng"><img src="../../assets/image/chuyu/userInfo/renzheng.png" alt="" /></div>
				</div>
				<div class="u_userId">
					<div class="userId">ID:123456</div>
					<div class="userAge">
						<img src="../../assets/image/chuyu/personalData/girl.png" alt="" />
						<span>21</span>
					</div>
				</div>

				<div class="chatMoney">
					<div class="chat_item">
						<img src="../../assets/image/chuyu/userInfo/video.png" alt="" />
						<div>50聊币/分钟</div>
					</div>
					<div class="chat_item">
						<img src="../../assets/image/chuyu/userInfo/phone.png" alt="" />
						<div>30聊币/分钟</div>
					</div>
					<div class="chat_item">
						<img src="../../assets/image/chuyu/userInfo/msg.png" alt="" />
						<div>10聊币/分钟</div>
					</div>
				</div>
			</div>

			<div class="tabInfo">
				<div class="topNav">
					<div class="topNav_item" @click="active = 'tab-container1'"><div :class="[active === 'tab-container1' ? 'topNav_item_active' : '']">资料</div></div>
					<div class="topNav_item" @click="active = 'tab-container2'"><div :class="[active === 'tab-container2' ? 'topNav_item_active' : '']">相册</div></div>
					<div class="topNav_item" @click="active = 'tab-container3'"><div :class="[active === 'tab-container3' ? 'topNav_item_active' : '']">视频</div></div>
				</div>

				<mt-tab-container v-model="active" :swipeable="false" class="centerTab">
					<mt-tab-container-item id="tab-container1">
						<div class="info_title">联系方式</div>
						<div class="conact">
							<div class="conact_item">
								<img src="../../assets/image/chuyu/userInfo/wx_check.png" alt="" />
								<div class="check">查看</div>
							</div>

							<div class="conact_item">
								<img src="../../assets/image/chuyu/userInfo/qq.png" alt="" />
								<div class="check">查看</div>
							</div>

							<div class="conact_item">
								<img src="../../assets/image/chuyu/userInfo/phone_check.png" alt="" />
								<div class="check">查看</div>
							</div>
						</div>

						<div class="info_title">个人资料</div>

						<div>
							<div class="info_item">
								<span>身高:</span>
								<span>178cm</span>
							</div>
							<div class="info_item">
								<span>城市:</span>
								<span>福建省 厦门市</span>
							</div>

							<div class="info_item">
								<span>Ta说:</span>
								<span>
									您好，我是一个乖乖女，我想被你宠哦。等你您 好，我是一个乖乖女，我想被你宠哦。等你您好， 我是 一个乖乖女，我想被你宠哦。等你您好，我是一个乖乖
									女，我想被你宠哦。等你您好，我是一个乖乖女，我想 被你宠哦。等你您好，我是一个乖乖女，我想被你宠哦。
								</span>
							</div>
						</div>

						<div class="info_title">礼物柜</div>
						<div class="gift">
							<div class="gift_left">
								<div class="gift_item" v-for="n in 10" :key="n"><img src="../../assets/image/chuyu/001.jpg" alt="" /></div>
							</div>
							<div class="gift_right"><img src="../../assets/image/chuyu/xiangyou.png" alt="" /></div>
						</div>

						<div class="info_title">女神标签</div>
						<div class="usertab">
							<div class="tab-items tab-items1">女汉子</div>
							<div class="tab-items tab-items2">知性</div>
							<div class="tab-items tab-items3">萝莉</div>
							<div class="tab-items tab-items4">性感</div>
						</div>
					</mt-tab-container-item>
					<mt-tab-container-item id="tab-container2">
						<!-- <div class="userImgs">
							<div class="userImgs_item" v-for="n in 5" :key="n"><img src="../../assets/image/chuyu/001.jpg" alt="" /></div>
						</div> -->

						<div class="myImgPreview"><vue-preview :slides="thumbsList" class="imgPrev"></vue-preview></div>

						<div class="video_nodata" v-if="false">
							<img src="../../assets/image/chuyu/userInfo/novideo.png" alt="" />
							<div class="nodata_text">
								<p>矮油，TA还没有上传内容</p>
								<p>快送个小礼物提示她吧！</p>
							</div>
						</div>
					</mt-tab-container-item>
					<mt-tab-container-item id="tab-container3">
						<div class="video_con" v-if="false">
							<div class="video_item" @click="playVideo">
								<img src="../../assets/image/chuyu/001.jpg" alt="" class="poster" />
								<img src="../../assets/image/chuyu/userInfo/play.png" alt="" class="playImg" />
							</div>
						</div>

						<div class="video_nodata">
							<img src="../../assets/image/chuyu/userInfo/novideo.png" alt="" />
							<div class="nodata_text">
								<p>矮油，TA还没有上传内容</p>
								<p>快送个小礼物提示她吧！</p>
							</div>
						</div>
					</mt-tab-container-item>
				</mt-tab-container>
			</div>

			<div class="bottomWrapper">
				<div class="left">
					<div class="messge_chat"><img src="../../assets/image/chuyu/userInfo/bt_msg.png" alt="" /></div>
					<div class="messge_chat"><img src="../../assets/image/chuyu/userInfo/bt_phone.png" alt="" /></div>
				</div>
				<div class="video_msg">
					<img src="../../assets/image/chuyu/userInfo/bt_video.png" alt="" />
					<div>与他视频</div>
				</div>
			</div>
		</div>
		<SingleTip :show="showSingle" @close="close" />
	</div>
</template>

<script>
import SingleTip from '../../basecom/singleTip/index.vue'
export default {
	data() {
		return {
			active: 'tab-container1',
			thumbsList: [
				{
					w: 600,
					h: 500,
					src: 'https://wdm-wlm.oss-cn-hangzhou.aliyuncs.com/images/20200716/ac0a18d51f5a9c58de1893bf2009d8bd.jpg',
					msrc: 'https://wdm-wlm.oss-cn-hangzhou.aliyuncs.com/images/20200716/ac0a18d51f5a9c58de1893bf2009d8bd.jpg'
				},
				{
					w: 600,
					h: 500,
					src: 'https://wdm-wlm.oss-cn-hangzhou.aliyuncs.com/images/20200716/ac0a18d51f5a9c58de1893bf2009d8bd.jpg',
					msrc: 'https://wdm-wlm.oss-cn-hangzhou.aliyuncs.com/images/20200716/ac0a18d51f5a9c58de1893bf2009d8bd.jpg'
				},
				{
					w: 600,
					h: 500,
					src: 'https://wdm-wlm.oss-cn-hangzhou.aliyuncs.com/images/20200716/ac0a18d51f5a9c58de1893bf2009d8bd.jpg',
					msrc: 'https://wdm-wlm.oss-cn-hangzhou.aliyuncs.com/images/20200716/ac0a18d51f5a9c58de1893bf2009d8bd.jpg'
				},
				{
					w: 600,
					h: 500,
					src: 'https://wdm-wlm.oss-cn-hangzhou.aliyuncs.com/images/20200716/ac0a18d51f5a9c58de1893bf2009d8bd.jpg',
					msrc: 'https://wdm-wlm.oss-cn-hangzhou.aliyuncs.com/images/20200716/ac0a18d51f5a9c58de1893bf2009d8bd.jpg'
				}
			],
			showSingle: false
		}
	},
	created() {
		window.console.log(this.$route.params.id)
	},
	methods: {
		showBox() {},
		close() {
			this.showSingle = false
		},
		playVideo() {
			this.showSingle = true
		}
	},
	components: {
		SingleTip
	}
}
</script>

<style lang="stylus" scoped>
.mint-header
	background-color transparent
	color #FFFFFF
.userBg
	height 22.4rem
	img
		height 100%
		width 100%
.userMainInfo
	position relative
	background-color #FFFFFF
	padding 0.96rem
	box-sizing border-box
	.u_usename
		display flex
		align-items center
		.username
			font-size 1.152rem
			color #333333
		.sm_renzheng
			margin-left 0.64rem
			img
				width 0.896rem
	.u_userId
		display flex
		align-items center
		margin-top 1.088rem
		.userId
			font-size 0.896rem
			color #333333
			margin-right 0.64rem
		.userAge
			background-color #FF82AA
			height 0.8rem
			width 2.24rem
			padding 0 0.192rem
			text-align center
			line-height 0.8rem
			font-size 0.768rem
			border-radius 0.4rem
			color #FFFFFF
			display flex
			justify-content space-around
			img
				width 0.64rem
				height 0.64rem
				margin-top 0.096rem
	.chatMoney
		margin-top 1.088rem
		display flex
		justify-content space-between
		border-bottom 1px solid #F3F3F3
		padding-bottom 1.6rem
		.chat_item
			display flex
			align-items center
			img
				height 0.896rem
				margin-right 0.512rem
			div
				color #333333
				font-size 0.896rem
.topNav
	display flex
	height 4rem
	box-sizing border-box
	// padding-top 0.533333rem
	.topNav_item
		width 5.12rem
		text-align center
		padding 0.333333rem 0
		img
			width 2rem
		div
			font-size 1.2rem
			line-height 2rem
		.topNav_item_active
			font-size 1.408rem
			position relative
			transition all 0.4s ease
			&::after
				content ''
				display block
				width 2rem
				height 0.266666rem
				border-radius 0.133333rem
				background linear-gradient(-86deg, rgba(249, 85, 232, 0.96), rgba(225, 71, 127, 0.96))
				position absolute
				left 50%
				margin-left -1rem
				bottom -0.533333rem
.centerTab
	padding 0 0.96rem
	margin-bottom 6.4rem
	.info_title
		font-size 0.96rem
		color #333333
	.conact
		display flex
		padding 0.96rem 2.88rem
		justify-content space-between
		.conact_item
			text-align center
			img
				width 2.56rem
				height 2.56rem
			.check
				color #666666
				font-size 0.768rem
	.info_item
		font-size 0.768rem
		color #333333
		margin 0.96rem 0
	.gift
		display flex
		align-items center
		margin-top 1.6rem
		.gift_left
			width calc(100vw - 1.92rem)
			overflow-x scroll
			display flex
			.gift_item
				margin-right 0.64rem
				img
					height 3.2rem
		.gift_right
			width 1.92rem
			text-align right
			img
				height 0.96rem
	.usertab
		display flex
		margin-top 1.6rem
		.tab-items
			height 1.28rem
			padding 0 0.768rem
			text-align center
			border-radius 0.64rem
			font-size 0.768rem
			color #FFFFFF
			margin-right 0.64rem
			background-color #24DB5A
			line-height 1.28rem
		.tab-items1
			background-color #24DB5A
		.tab-items2
			background-color #F19EC2
		.tab-items3
			background-color #F9A771
		.tab-items4
			background-color #C66EF1
	.userImgs
		display flex
		flex-wrap wrap
		justify-content space-between
		.userImgs_item
			width 49%
			img
				width 100%
				height 15.36rem
				border-radius 0.32rem
	.video_con
		display flex
		justify-content space-between
		.video_item
			width 49%
			position relative
			.poster
				height 15.36rem
				width 100%
				border-radius 0.32rem
			.playImg
				position absolute
				width 2.56rem
				height 2.56rem
				left 50%
				top 50%
				margin-left -1.28rem
				margin-top -1.28rem
	.video_nodata
		margin-top 5.12rem
		text-align center
		img
			width 9.6rem
		.nodata_text
			margin-top 1.28rem
			margin-bottom 5.12rem
		p
			font-size 0.896rem
			color #666666
.bottomWrapper
	width 100%
	height 5.12rem
	position fixed
	left 0
	bottom 0
	box-shadow 4px 12px 15px 15px #EBEBEB
	background-color #FFFFFF
	box-sizing border-box
	padding 0 1.12rem
	display flex
	align-items center
	justify-content space-between
	.left
		display flex
		.messge_chat
			margin-right 0.96rem
			img
				width 3.328rem
				height 3.328rem
	.video_msg
		width 12.8rem
		height 2.88rem
		border-radius 1.44rem
		background linear-gradient(-86deg, rgba(249, 85, 232, 0.96), rgba(246, 96, 150, 0.96))
		box-shadow 0px 0px 16px 0px rgba(247, 87, 223, 0.85)
		display flex
		justify-content space-around
		align-items center
		padding 0 2.88rem
		box-sizing border-box
		img
			width 1.6rem
			height 1.088rem
		div
			font-size 1.152rem
			color #FFFFFF
</style>

<style lang="stylus">
.userInfo
	.pswp__button--share
		display none
	.imgPrev
		.my-gallery
			width 100%
			display flex
			justify-content space-between
			flex-wrap wrap
		figure
			width 49%
			img
				width 100%
				height 15.36rem
				border-radius 0.32rem
</style>
