<template>
	<div
		class="conversation-item-container"
		:class="{ choose: conversation.conversationID === currentConversation.conversationID }"
		@click="selectConversation"
		@touchstart="gotouchstart"
		@touchmove="gotouchmove"
		@touchend="gotouchend"
	>
		<!-- <div class="close-btn"><span class="tim-icon-close" title="删除会话" @click="deleteConversation"></span></div> -->
		<div class="warp">
			<avatar :src="avatar" :type="conversation.type" />
			<div class="content">
				<div class="row-1">
					<div class="name">
						<div class="text-ellipsis">
							<span :title="conversation.userProfile.nick || conversation.userProfile.userID" v-if="conversation.type === TIM.TYPES.CONV_C2C">
								{{ conversation.userProfile.nick || conversation.userProfile.userID }}
							</span>
							<span :title="conversation.groupProfile.name || conversation.groupProfile.groupID" v-else-if="conversation.type === TIM.TYPES.CONV_GROUP">
								{{ conversation.groupProfile.name || conversation.groupProfile.groupID }}
							</span>
							<span v-else-if="conversation.type === TIM.TYPES.CONV_SYSTEM">系统通知</span>
						</div>
					</div>
					<div class="unread-count">
						<span class="badge" v-if="showUnreadCount">{{ conversation.unreadCount > 99 ? '99+' : conversation.unreadCount }}</span>
					</div>
				</div>
				<div class="row-2">
					<div class="summary">
						<div v-if="conversation.lastMessage" class="text-ellipsis">
							<span class="remind" style="color:red;" v-if="hasMessageAtMe">[有人提到我]</span>
							<span class="text" :title="conversation.lastMessage.messageForShow">{{ messageForShow }}</span>
						</div>
					</div>
					<div class="date">{{ date }}</div>
				</div>
			</div>
		</div>

		<mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
	</div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import { isToday, getDate, getTime } from '../../utils/date'
export default {
	name: 'conversation-item',
	props: ['conversation'],
	data() {
		return {
			popoverVisible: false,
			hasMessageAtMe: false,
			timeOutEvent: null,
			actions:[
				{name:'标记已读',method:this.setMessageRead},
				{name:'删除消息',method:this.deleteConversation}
			],
			sheetVisible:false
		}
	},
	computed: {
		showUnreadCount() {
			if (this.$store.getters.hidden) {
				return this.conversation.unreadCount > 0
			}
			// 是否显示未读计数。当前会话和未读计数为0的会话，不显示。
			return this.currentConversation.conversationID !== this.conversation.conversationID && this.conversation.unreadCount > 0
		},
		date() {
			if (!this.conversation.lastMessage || !this.conversation.lastMessage.lastTime) {
				return ''
			}
			const date = new Date(this.conversation.lastMessage.lastTime * 1000)
			if (isToday(date)) {
				return getTime(date)
			}
			return getDate(date)
		},
		avatar: function() {
			switch (this.conversation.type) {
				case 'GROUP':
					return this.conversation.groupProfile.avatar
				case 'C2C':
					return this.conversation.userProfile.avatar
				default:
					return ''
			}
		},
		conversationName: function() {
			if (this.conversation.type === this.TIM.TYPES.CONV_C2C) {
				return this.conversation.userProfile.nick || this.conversation.userProfile.userID
			}
			if (this.conversation.type === this.TIM.TYPES.CONV_GROUP) {
				return this.conversation.groupProfile.name || this.conversation.groupProfile.groupID
			}
			if (this.conversation.type === this.TIM.TYPES.CONV_SYSTEM) {
				return '系统通知'
			}
			return ''
		},
		showGrayBadge() {
			if (this.conversation.type !== this.TIM.TYPES.CONV_GROUP) {
				return false
			}
			return this.conversation.groupProfile.selfInfo.messageRemindType === 'AcceptNotNotify'
		},
		messageForShow() {
			if (this.conversation.lastMessage.isRevoked) {
				if (this.conversation.lastMessage.fromAccount === this.currentUserProfile.userID) {
					return '你撤回了一条消息'
				}
				if (this.conversation.type === this.TIM.TYPES.CONV_C2C) {
					return '对方撤回了一条消息'
				}
				return `${this.conversation.lastMessage.fromAccount}撤回了一条消息`
			}

			if (this.conversation.lastMessage.payload && this.conversation.lastMessage.payload.data) {
				var messageType = JSON.parse(this.conversation.lastMessage.payload.data).messageType
				if (messageType === 'TEXT_MESSAGE') {
					return JSON.parse(JSON.parse(this.conversation.lastMessage.payload.data).messageContent).textContent
				} else if (messageType === 'RTC_EVENT_CANCEL_VIDEO') {
					return '[视频通话取消]'
				} else if (messageType === 'GIFT_MESSAGE') {
					return '[礼物消息]'
				} else if (messageType === 'RTC_EVENT_LAUNCH_VIDEO') {
					return '[发起视频通话]'
				} else if (messageType === 'RTC_EVENT_HANGUP_VIDEO') {
					return '[挂断视频通话]'
				} else if (messageType === 'RTC_EVENT_LAUNCH_AUDIO') {
					return '[发起语音通话]'
				} else if (messageType === 'RTC_EVENT_CANCEL_AUDIO') {
					return '[语音通话已取消]'
				} else if (messageType === 'RTC_EVENT_HANGUP_AUDIO') {
					return '[语音通话已挂断]'
				} else if (messageType === 'RTC_EVENT_LOCK_HINT') {
					return '[余额不足]'
				} else if (messageType === 'ADD_FRIEND_MESSAGE') {
					return '[请求添加好友]'
				} else if (messageType === 'SEE_WE_CHAT_MESSAGE') {
					return '[查看微信号消息]'
				} else if (messageType === 'SEE_PHONE_MESSAGE') {
					return '[查看手机号消息]'
				} else if (messageType === 'SEE_QQ_MESSAGE') {
					return '[查看QQ号消息]'
				} else if (messageType === 'SEND_WE_CHAT_MESSAGE') {
					return '[发送微信号消息]'
				} else if (messageType === 'SEND_PHONE_MESSAGE') {
					return '[发送手机号]'
				} else if (messageType === 'SEND_QQ_MESSAGE') {
					return '[发送QQ号消息]'
				} else if (messageType === 'REFUSE_FRIEND_APPLY_MESSAGE') {
					return '[拒绝好友申请]'
				} else if (messageType === 'AGREE_FRIEND_APPLY_MESSAGE') {
					return '[同意好友申请]'
				} else if (messageType === 'FILE_MESSAGE') {
					return '[文件消息]'
				} else if (messageType === 'SYSTEM_MESSAGE') {
					return '[系统消息]'
				} else if (messageType === 'AUDIO_MESSAGE') {
					return '[语音消息]'
				} else if (messageType === 'VIDEO_MESSAGE') {
					return '[视频消息]'
				} else if (messageType === 'RTC_EVENT_OFFER_VIDEO') {
					return '[视频邀约]'
				} else if (messageType === 'RTC_INTELLIGENT_EVENT_LAUNCH_VIDEO') {
					return '[马甲视频通话]'
				} else if (messageType === 'RTC_INTELLIGENT_EVENT_LAUNCH_AUDIO') {
					return '[马甲语音通话]'
				} else if (messageType === 'RTC_EVENT_SHADE_VIDEO') {
					return '[事件，遮罩]'
				} else if (messageType === 'RTC_EVENT_LOCK_HINT') {
					return '[事件，余额不足提示]'
				} else if (messageType === 'LOCATION_MESSAGE') {
					return '[定位消息]'
				} else if (messageType === 'DECLINE_REQUEST_GIFT_MESSAGE') {
					return '[拒绝求赏]'
				} else if (messageType === 'SERVICE_IMAGE_TEXT_MESSAGE') {
					return '[图文消息]'
				}
			}

			return this.conversation.lastMessage.messageForShow
		},
		...mapState({
			currentConversation: state => state.conversation.currentConversation,
			currentUserProfile: state => state.user.currentUserProfile
		}),
		...mapGetters(['toAccount'])
	},
	mounted() {
		this.$bus.$on('new-messsage-at-me', event => {
			if (event.data.conversationID === this.conversation.conversationID && this.conversation.conversationID !== this.currentConversation.conversationID) {
				this.hasMessageAtMe = true
			}
		})
		// window.console.log(JSON.parse(this.conversation.lastMessage.payload.data))
		// window.console.log(JSON.parse(JSON.parse(this.conversation.lastMessage.payload.data).messageContent).textContent)
	},
	methods: {
		setMessageRead() {
			this.tim.setMessageRead({
				conversationID:this.conversation.conversationID
			})
		},
		selectConversation() {
			if (this.conversation.conversationID !== this.currentConversation.conversationID) {
				this.$store.dispatch('checkoutConversation', this.conversation.conversationID)
			}
			this.$router.push('/currentConversation')
		},
		deleteConversation(event) {
			// 停止冒泡，避免和点击会话的事件冲突
			try{
				event.stopPropagation()
			}catch(e) {
				//TODO handle the exception
			}
			this.tim
				.deleteConversation(this.conversation.conversationID)
				.then(() => {
					this.$store.commit('showMessage', {
						message: `会话【${this.conversationName}】删除成功!`,
						type: 'success'
					})
					this.popoverVisible = false
					this.$store.commit('resetCurrentConversation')
				})
				.catch(error => {
					this.$store.commit('showMessage', {
						message: `会话【${this.conversationName}】删除失败!, error=${error.message}`,
						type: 'error'
					})
					this.popoverVisible = false
				})
		},
		showContextMenu() {
			this.popoverVisible = true
		},
		gotouchstart() {
			// let that = this
			clearTimeout(this.timeOutEvent) //清除定时器
			this.timeOutEvent = 0
			this.timeOutEvent = setTimeout(() => {
				//执行长按要执行的内容，
				// ...
				// window.console.log('长安')

				// this.$messagebox
				// 	.confirm('是否删除该会话？')
				// 	.then(() => {
				// 		this.deleteConversation()
				// 	})
				// 	.catch(() => {})
				this.sheetVisible = true
				
			}, 600) //这里设置定时
		},
		//手释放，如果在500毫秒内就释放，则取消长按事件，此时可以执行onclick应该执行的事件
		gotouchend() {
			clearTimeout(this.timeOutEvent)
			if (this.timeOutEvent != 0) {
				//这里写要执行的内容（尤如onclick事件）
			}
		},
		//如果手指有移动，则取消所有事件，此时说明用户只是要移动而不是长按
		gotouchmove() {
			clearTimeout(this.timeOutEvent) //清除定时器
			this.timeOutEvent = 0
		}
	},
	watch: {
		currentConversation(next) {
			if (next.conversationID === this.conversation.conversationID) {
				this.hasMessageAtMe = false
			}
		}
	}
}
</script>

<style lang="stylus" scoped>
.conversation-item-container
	// padding 15px 20px
	cursor pointer
	position relative
	overflow hidden
	transition 0.2s
	margin-bottom 1.28rem
	user-select none
	// &:first-child
	// padding-top 30px
	&:hover
		// background-color $background
		.close-btn
			right 3px
	.close-btn
		position absolute
		right -20px
		top 3px
		color $font-dark
		transition all 0.2s ease
		&:hover
			color $danger
	.warp
		display flex
	.avatar
		width 3.84rem
		height 3.84rem
		margin-right 10px
		border-radius 50%
		flex-shrink 0
	.content
		flex 1
		height 60px
		overflow hidden
		font-size 0.768rem
		justify-content space-between
		flex-direction column
		display flex
		padding 5px 0
		.row-1
			display flex
			line-height 21px
			.name
				color #333333
				flex 1
				font-size 0.96rem
				min-width 0px
			.unread-count
				padding-left 10px
				flex-shrink 0
				color $font-dark
				font-size 12px
				.badge
					vertical-align bottom
					background-color $danger
					border-radius 10px
					color #FFF
					display inline-block
					font-size 12px
					height 18px
					max-width 40px
					line-height 18px
					padding 0 6px
					text-align center
					white-space nowrap
		.row-2
			display flex
			padding-top 3px
			.summary
				flex 1
				overflow hidden
				min-width 0px
				color $secondary
				.remind
					color $danger
			.date
				padding-left 10px
				flex-shrink 0
				text-align right
				color $font-dark
.choose
	// background-color $background
.context-menu-button
	padding 10px
	border 2px solid $primary
	border-radius 8px
</style>
