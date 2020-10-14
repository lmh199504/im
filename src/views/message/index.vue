<template>
	<div class="message">
		<div class="topNav">
			<div class="topNav_item"></div>
			<div class="topNav_item" @click="active = 'tab-container1'"><div :class="[active === 'tab-container1' ? 'topNav_item_active' : '']">消息</div></div>
			<div class="topNav_item" @click="active = 'tab-container2'"><div :class="[active === 'tab-container2' ? 'topNav_item_active' : '']">通话记录</div></div>
			<div class="rightImg" v-if="active === 'tab-container1'" @click="allRead"><img src="../../assets/image/chuyu/readedmsg.png" alt="" /></div>
			<div class="rightImg" v-if="active === 'tab-container1'" @click="allDel"><img src="../../assets/image/chuyu/delmsg.png" alt="" /></div>
		</div>

		<mt-tab-container v-model="active" :swipeable="true" class="centerTab">
			<mt-tab-container-item id="tab-container1">
				<div class="msgContainer">
					<mt-swipe :auto="4000">
						<mt-swipe-item><img class="swiperImg" src="../../assets/image/chuyu/banner2.png" alt="" /></mt-swipe-item>
						<mt-swipe-item><img class="swiperImg" src="../../assets/image/chuyu/banner2.png" alt="" /></mt-swipe-item>
						<mt-swipe-item><img class="swiperImg" src="../../assets/image/chuyu/banner2.png" alt="" /></mt-swipe-item>
					</mt-swipe>

					<div class="kefu_msg">
						<div class="left">
							<div><img class="kefuImg" src="../../assets/image/chuyu/kefu.png" alt="" /></div>
							<div>
								<div class="kefuTitle">客服消息</div>
								<div class="previewMsg">系统正在维护中</div>
							</div>
						</div>
						<div class="right"><img src="../../assets/image/chuyu/xiangyou.png" alt="" /></div>
					</div>

					<!-- <div class="kefu_msg" v-for="n in 10" :key="n">
						<div class="left">
							<div><img class="kefuImg" src="../../assets/image/chuyu/001.jpg" alt="" /></div>
							<div>
								<div class="kefuTitle">灰色的回忆</div>
								<div class="previewMsg">我很无聊，快来找我玩呀!我在等你哦....</div>
							</div>
						</div>
						<div class="right">
							<div class="msgTime">17：15</div>
							<div class="mesgNumber"><mt-badge size="small" color="#F72D3C">99+</mt-badge></div>
						</div>
					</div> -->

					<conversation-item :conversation="item" v-for="item in conversationList" :key="item.conversationID"></conversation-item>
				</div>
			</mt-tab-container-item>
			<mt-tab-container-item id="tab-container2">
				<div class="conversation" v-if="false">
					<div class="conversation_item" v-for="n in 10" :key="n">
						<div class="left">
							<div><img class="userImg" src="../../assets/image/chuyu/001.jpg" alt="" /></div>
							<div>
								<div class="username">灰色的回忆</div>
								<div class="conversation_type">
									<img src="../../assets/image/chuyu/huchu.png" alt="" />
									<div class="conversation_type_text">对方拒接</div>
								</div>
							</div>
						</div>
						<div class="right">2019-11-11</div>
					</div>
				</div>
				<div class="conversation noconversation">
					<div class="noconImg"><img src="../../assets/image/chuyu/noconvation.png" alt="" /></div>
					<p class="noconText">您当前还没有任何记录哦，</p>
					<p class="noconText">您可以通过闪聊与ta快速约会哦</p>
					<div class="onekey"><img src="../../assets/image/chuyu/yijianyuehui.png" alt="" /></div>
				</div>
			</mt-tab-container-item>
		</mt-tab-container>
	</div>
</template>

<script>
import ConversationItem from '../../components/conversation/conversation-item'
import { mapState } from 'vuex'
export default {
	data() {
		return {
			active: 'tab-container1',
			showDialog: false,
			userID: '',
			isCheckouting: false, // 是否正在切换会话
			timeout: null,
			width: '30%'
		}
	},
	components: {
		ConversationItem
	},
	computed: {
		...mapState({
			conversationList: state => state.conversation.conversationList,
			currentConversation: state => state.conversation.currentConversation
		})
	},
	mounted() {
		window.addEventListener('keydown', this.handleKeydown)
		if (window.innerWidth < 1000) {
			this.width = '80%'
		}
	},
	destroyed() {
		window.removeEventListener('keydown', this.handleKeydown)
	},
	methods: {
		allRead() {
			this.$messagebox
				.confirm('是否标记所有消息为已读')
				.then(() => {
					window.console.log('确定')
				})
				.catch(() => {
					window.console.log('取消')
				})
		},
		allDel() {
			this.$messagebox
				.confirm('是否删除所有消息')
				.then(() => {
					window.console.log('确定')
				})
				.catch(() => {
					window.console.log('取消')
				})
		},
		handleRefresh() {
			this.refreshConversation()()
		},
		refreshConversation() {
			let that = this
			return function() {
				if (!that.timeout) {
					that.timeout = setTimeout(() => {
						that.timeout = null
						that.tim.getConversationList().then(() => {
							that.$store.commit('showMessage', {
								message: '刷新成功',
								type: 'success'
							})
						})
					}, 1000)
				}
			}
		},
		handleAddButtonClick() {
			this.showDialog = true
		},
		handleConfirm() {
			if (this.userID !== '@TIM#SYSTEM') {
				this.$store
					.dispatch('checkoutConversation', `C2C${this.userID}`)
					.then(() => {
						this.showDialog = false
					})
					.catch(() => {
						this.$store.commit('showMessage', {
							message: '没有找到该用户',
							type: 'warning'
						})
					})
			} else {
				this.$store.commit('showMessage', {
					message: '没有找到该用户',
					type: 'warning'
				})
			}
			this.userID = ''
		},
		handleKeydown(event) {
			if ((event.keyCode !== 38 && event.keyCode !== 40) || this.isCheckouting) {
				return
			}
			const currentIndex = this.conversationList.findIndex(item => item.conversationID === this.currentConversation.conversationID)
			if (event.keyCode === 38 && currentIndex - 1 >= 0) {
				this.checkoutPrev(currentIndex)
			}
			if (event.keyCode === 40 && currentIndex + 1 < this.conversationList.length) {
				this.checkoutNext(currentIndex)
			}
		},
		checkoutPrev(currentIndex) {
			this.isCheckouting = true
			this.$store
				.dispatch('checkoutConversation', this.conversationList[currentIndex - 1].conversationID)
				.then(() => {
					this.isCheckouting = false
				})
				.catch(() => {
					this.isCheckouting = false
				})
		},
		checkoutNext(currentIndex) {
			this.isCheckouting = true
			this.$store
				.dispatch('checkoutConversation', this.conversationList[currentIndex + 1].conversationID)
				.then(() => {
					this.isCheckouting = false
				})
				.catch(() => {
					this.isCheckouting = false
				})
		}
	}
}
</script>

<style lang="stylus" scoped>
.message
	.mint-msgbox-confirm
		color #EE45CC
	.centerTab
		height calc(100vh - 4rem - 3.333333rem)
		overflow scroll
		.mint-tab-container-wrap
			height 100%
			width 100%
	.topNav
		display flex
		height 4rem
		box-sizing border-box
		padding-top 0.533333rem
		.topNav_item
			width 25%
			text-align center
			padding 0.333333rem 0
			img
				width 2rem
			div
				font-size 1.2rem
				line-height 2rem
			.topNav_item_active
				font-size 1.466666rem
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
		.rightImg
			width 10%
			text-align center
			img
				height 1.024rem
				margin-top 0.896rem
	.msgContainer
		padding 0.96rem
		.mint-swipe
			height 7.68rem
			.swiperImg
				height 100%
				width 100%
		.kefu_msg
			display flex
			justify-content space-between
			margin-top 1.28rem
			.left
				display flex
				.kefuImg
					width 3.84rem
					height 3.84rem
					border-radius 50%
					margin-right 1.28rem
				.kefuTitle
					font-size 0.96rem
					color #333333
					margin-top 0.32rem
				.previewMsg
					color #999999
					font-size 0.768rem
					margin-top 0.64rem
			.right
				img
					width 0.96rem
					margin-top 1.28rem
				.msgTime
					font-size 0.768rem
					color #999999
	.conversation
		padding 0.96rem
		.conversation_item
			display flex
			justify-content space-between
			margin-bottom 1.28rem
			.left
				display flex
				.userImg
					width 3.84rem
					height 3.84rem
					border-radius 50%
					margin-right 1.28rem
				.username
					font-size 0.96rem
					color #333333
					margin-top 0.32rem
				.conversation_type
					display flex
					margin-top 0.96rem
					img
						width 0.96rem
						margin-right 0.64rem
						height 0.96rem
					.conversation_type_text
						color #EB6E6E
						font-size 0.768rem
			.right
				font-size 0.768rem
				color #999999
				line-height 4.224rem
	.noconversation
		.noconImg
			width 100%
			text-align center
			img
				width 8rem
				margin-top 9.6rem
		.noconText
			text-align center
			font-size 0.768rem
			color #666666
			margin-top 0.64rem
		.onekey
			margin-top 3.84rem
			text-align center
			img
				height 1.92rem
</style>

<style>
.mint-msgbox-confirm {
	color: #ee45cc;
}
</style>
