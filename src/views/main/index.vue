<template>
	<div class="main_page">
		<transition name="view"><router-view></router-view></transition>

		<div class="nav_bottom" v-if="show">
			<router-link class="myrouterlink" to="/makefriend">
				<img class="router_icon" src="../../assets/image/chuyu/tabbar/makefriend.png" alt="" />
				<img class="router_icon_active" src="../../assets/image/chuyu/tabbar/makefriend_active.png" alt="" />
				<br />
				<span>交友</span>
			</router-link>
			<router-link class="myrouterlink" to="/find">
				<img class="router_icon" src="../../assets/image/chuyu/tabbar/find.png" alt="" />
				<img class="router_icon_active" src="../../assets/image/chuyu/tabbar/find_active.png" alt="" />
				<br />
				<span>发现</span>
			</router-link>
			<router-link class="myrouterlink" to="/message">
				<el-badge :value="totalUnreadCount" :max="99" class="item" :hidden="totalUnreadCount===0">
					<img class="router_icon" src="../../assets/image/chuyu/tabbar/message.png" alt="" />
					<img class="router_icon_active" src="../../assets/image/chuyu/tabbar/message_active.png" alt="" />
				</el-badge>
				<!-- <mt-badge type="primary"  class="totalUnreadCount">{{ totalUnreadCount }}</mt-badge> -->

				<br />
				<span>信息</span>
			</router-link>
			<router-link class="myrouterlink" to="/mine">
				<img class="router_icon" src="../../assets/image/chuyu/tabbar/mine.png" alt="" />
				<img class="router_icon_active" src="../../assets/image/chuyu/tabbar/mine_active.png" alt="" />
				<br />
				<span>我的</span>
			</router-link>
		</div>
		
		<DownBanner :showDown="showDown" @closeDown="closeDown"/>
		<CallTip />
	</div>
</template>

<script>
import { Notification,Badge } from 'element-ui'
import { mapState } from 'vuex'
import { translateGroupSystemNotice } from '../../utils/common'
import { ACTION } from '../../utils/trtcCustomMessageMap'
import MTA from '../../utils/mta'
import { mapGetters } from 'vuex'
import DownBanner from '../../basecom/downBanner/index.vue'
import CallTip from '../../basecom/callTip/index.vue'
export default {
	data() {
		return {
			showRouterArr: ['/makefriend', '/find', '/mine', '/message'],
			toPersonal: true,
			showDown:true
		}
	},
	components:{
		ElBadge:Badge,
		DownBanner,
		CallTip
	},
	created() {
		if (this.isLogin === false) {
			this.$router.replace('/login')
		}
		// if (this.toPersonal && this.$route.path !== '/personalData') {
		// 	this.$router.push('/personalData')
		// }
		
		
		if(sessionStorage.getItem('showDown') === 'close') {
			this.showDown = false
		}
		window.console.log(this.TIM.TYPES.MSG_CUSTOM)
		
	},
	computed: {
		...mapGetters(['totalUnreadCount']),
		...mapState({
			currentUserProfile: state => state.user.currentUserProfile,
			currentConversation: state => state.conversation.currentConversation,
			isLogin: state => state.user.isLogin,
			isSDKReady: state => state.user.isSDKReady,
			isBusy: state => state.video.isBusy,
			userID: state => state.user.userID
		}),
		// 是否显示 Loading 状态
		showLoading() {
			return !this.isSDKReady
		},
		show: function() {
			return this.showRouterArr.findIndex(item => item === this.$route.path) > -1
		}
	},
	mounted() {
		// 初始化监听器
	
		if (this.userID) {
			this.$store
				.dispatch('login', this.userID)
				.then(() => {
					this.initListener()
				})
				.catch(() => {
					window.console.log('登陆失败')
				})
		}
		
		this.$bus.$emit('showCallTip') //显示来电弹窗
		
	},
	methods: {
		closeDown() {
			this.showDown = false
			sessionStorage.setItem('showDown','close')
		},
		initListener() {
			// 登录成功后会触发 SDK_READY 事件，该事件触发后，可正常使用 SDK 接口
			this.tim.on(this.TIM.EVENT.SDK_READY, this.onReadyStateUpdate, this)
			// SDK NOT READT
			this.tim.on(this.TIM.EVENT.SDK_NOT_READY, this.onReadyStateUpdate, this)
			// 被踢出
			this.tim.on(this.TIM.EVENT.KICKED_OUT, this.onKickOut)
			// SDK内部出错
			this.tim.on(this.TIM.EVENT.ERROR, this.onError)
			// 收到新消息
			this.tim.on(this.TIM.EVENT.MESSAGE_RECEIVED, this.onReceiveMessage)
			// 会话列表更新
			this.tim.on(this.TIM.EVENT.CONVERSATION_LIST_UPDATED, this.onUpdateConversationList)
			// 群组列表更新
			this.tim.on(this.TIM.EVENT.GROUP_LIST_UPDATED, this.onUpdateGroupList)
			// 收到新的群系统通知
			this.tim.on(this.TIM.EVENT.GROUP_SYSTEM_NOTICE_RECEIVED, this.onReceiveGroupSystemNotice)
		},
		onReceiveMessage({ data: messageList }) {
			window.console.log('收到新消息了...')
			window.console.log(messageList)
			this.handleVideoMessage(messageList)
			this.handleAt(messageList)
			this.handleQuitGroupTip(messageList)
			this.$store.commit('pushCurrentMessageList', messageList)
		},
		onError({ data }) {
			if (data.message !== 'Network Error') {
				this.$store.commit('showMessage', {
					message: data.message,
					type: 'error'
				})
			}
		},
		onReadyStateUpdate({ name }) {
			const isSDKReady = name === this.TIM.EVENT.SDK_READY ? true : false
			this.$store.commit('toggleIsSDKReady', isSDKReady)

			if (isSDKReady) {
				this.tim
					.getMyProfile()
					.then(({ data }) => {
						this.$store.commit('updateCurrentUserProfile', data)
					})
					.catch(error => {
						this.$store.commit('showMessage', {
							type: 'error',
							message: error.message
						})
					})
				this.$store.dispatch('getBlacklist')
			}
		},
		kickedOutReason(type) {
			switch (type) {
				case this.TIM.TYPES.KICKED_OUT_MULT_ACCOUNT:
					return '由于多实例登录'
				case this.TIM.TYPES.KICKED_OUT_MULT_DEVICE:
					return '由于多设备登录'
				case this.TIM.TYPES.KICKED_OUT_USERSIG_EXPIRED:
					return '由于 userSig 过期'
				default:
					return ''
			}
		},
		onKickOut(event) {
			this.$store.commit('showMessage', {
				message: `${this.kickedOutReason(event.data.type)}被踢出，请重新登录。`,
				type: 'error'
			})
			this.$store.commit('toggleIsLogin', false)
			this.$store.commit('reset')
		},
		onUpdateConversationList(event) {
			this.$store.commit('updateConversationList', event.data)
		},
		onUpdateGroupList(event) {
			this.$store.commit('updateGroupList', event.data)
		},
		onReceiveGroupSystemNotice(event) {
			const isKickedout = event.data.type === 4
			const isCurrentConversation = `GROUP${event.data.message.payload.groupProfile.groupID}` === this.currentConversation.conversationID
			// 在当前会话被踢，需reset当前会话
			if (isKickedout && isCurrentConversation) {
				this.$store.commit('resetCurrentConversation')
			}
			Notification({
				title: '新系统通知',
				message: translateGroupSystemNotice(event.data.message),
				duration: 3000,
				onClick: () => {
					const SystemConversationID = '@TIM#SYSTEM'
					this.$store.dispatch('checkoutConversation', SystemConversationID)
				}
			})
		},
		/**
		 * 处理 @ 我的消息
		 * @param {Message[]} messageList
		 */
		handleAt(messageList) {
			// 筛选有 @ 符号的文本消息
			const atTextMessageList = messageList.filter(message => message.type === this.TIM.TYPES.MSG_TEXT && message.payload.text.includes('@'))
			for (let i = 0; i < atTextMessageList.length; i++) {
				const message = atTextMessageList[i]
				const matched = message.payload.text.match(/@\w+/g)
				if (!matched) {
					continue
				}
				// @ 我的
				if (matched.includes(`@${this.currentUserProfile.userID}`)) {
					// 当前页面不可见时，调用window.Notification接口，系统级别通知。
					if (this.$store.getters.hidden) {
						this.notifyMe(message)
					}
					Notification({
						title: `有人在群${message.conversationID.slice(5)}提到了你`,
						message: message.payload.text,
						duration: 3000
					})
					this.$bus.$emit('new-messsage-at-me', {
						data: { conversationID: message.conversationID }
					})
				}
			}
		},
		selectConversation(conversationID) {
			if (conversationID !== this.currentConversation.conversationID) {
				this.$store.dispatch('checkoutConversation', conversationID)
			}
		},
		isJsonStr(str) {
			try {
				JSON.parse(str)
				return true
			} catch {
				return false
			}
		},
		handleVideoMessage(messageList) {
			const videoMessageList = messageList.filter(message => message.type === this.TIM.TYPES.MSG_CUSTOM && this.isJsonStr(message.payload.data))
			if (videoMessageList.length === 0) return
			const videoPayload = JSON.parse(videoMessageList[0].payload.data)
			if (videoPayload.action === ACTION.VIDEO_CALL_ACTION_DIALING) {
				if (this.isBusy) {
					this.$bus.$emit('busy', videoPayload, videoMessageList[0])
					return
				}
				this.$store.commit('GENERATE_VIDEO_ROOM', videoPayload.room_id)
				this.selectConversation(videoMessageList[0].conversationID) // 切换当前会话页
				if (videoMessageList[0].from !== this.userID) {
					this.$bus.$emit('isCalled')
				}
				
				
				this.$bus.$emit('showCallTip') //显示来电弹窗
			}
			if (videoPayload.action === ACTION.VIDEO_CALL_ACTION_SPONSOR_CANCEL) {
				this.$bus.$emit('missCall')
			}
			if (videoPayload.action === ACTION.VIDEO_CALL_ACTION_REJECT) {
				this.$bus.$emit('isRefused')
			}
			if (videoPayload.action === ACTION.VIDEO_CALL_ACTION_SPONSOR_TIMEOUT) {
				this.$bus.$emit('missCall')
			}
			if (videoPayload.action === ACTION.VIDEO_CALL_ACTION_ACCEPTED) {
				this.$bus.$emit('isAccept')
			}
			if (videoPayload.action === ACTION.VIDEO_CALL_ACTION_HANGUP) {
				this.$bus.$emit('isHungUp')
			}
			if (videoPayload.action === ACTION.VIDEO_CALL_ACTION_LINE_BUSY) {
				this.$bus.$emit('isRefused')
			}
			if (videoPayload.action === ACTION.VIDEO_CALL_ACTION_ERROR) {
				this.$bus.$emit('isRefused')
			}
		},
		/**
		 * 使用 window.Notification 进行全局的系统通知
		 * @param {Message} message
		 */
		notifyMe(message) {
			// 需检测浏览器支持和用户授权
			if (!('Notification' in window)) {
				return
			} else if (window.Notification.permission === 'granted') {
				this.handleNotify(message)
			} else if (window.Notification.permission !== 'denied') {
				window.Notification.requestPermission().then(permission => {
					// 如果用户同意，就可以向他们发送通知
					if (permission === 'granted') {
						this.handleNotify(message)
					}
				})
			}
		},
		handleNotify(message) {
			const notification = new window.Notification('有人提到了你', {
				icon: 'https://webim-1252463788.file.myqcloud.com/demo/img/logo.dc3be0d4.png',
				body: message.payload.text
			})
			notification.onclick = () => {
				window.focus()
				this.$store.dispatch('checkoutConversation', message.conversationID)
				notification.close()
			}
		},
		handleLinkClick() {
			MTA.clickStat('link_two', { click: 'true' })
		},
		/**
		 * 收到有群成员退群/被踢出的groupTip时，需要将相关群成员从当前会话的群成员列表中移除
		 * @param {Message[]} messageList
		 */
		handleQuitGroupTip(messageList) {
			// 筛选出当前会话的退群/被踢群的 groupTip
			const groupTips = messageList.filter(message => {
				return (
					this.currentConversation.conversationID === message.conversationID &&
					message.type === this.TIM.TYPES.MSG_GRP_TIP &&
					(message.payload.operationType === this.TIM.TYPES.GRP_TIP_MBR_QUIT || message.payload.operationType === this.TIM.TYPES.GRP_TIP_MBR_KICKED_OUT)
				)
			})
			// 清理当前会话的群成员列表
			if (groupTips.length > 0) {
				groupTips.forEach(groupTip => {
					if (Array.isArray(groupTip.payload.userIDList) || groupTip.payload.userIDList.length > 0) {
						this.$store.commit('deleteGroupMemberList', groupTip.payload.userIDList)
					}
				})
			}
		}
	}
}
</script>

<style lang="stylus" scoped>
.main_page
	width 100%
	height 100%
	.view-enter-active, .view-leave-active
		opacity 1
		transition 0.4s all ease
	.view-enter
		opacity 0
		transform translateX(100%)
	.view-leave-to
		opacity 0
		transform translateX(-100%)
		position absolute
	.nav_bottom
		position absolute
		bottom 0
		left 0
		width 100%
		background-color #FFFFFF
		border-top 1px solid #E0E0E0
		display flex
		height 3.333333rem
		z-index 99
		.myrouterlink
			text-align center
			width 25%
			font-size 0.8rem
			color #333333
			text-decoration none
			position relative
			.totalUnreadCount
				position absolute
				top 0.192rem
				right 0.32rem
				font-size 0.768rem
				border-radius 50%
				background-color red
				height 0.96rem
				width 0.96rem
			.router_icon
				width 1.666666rem
				margin-top 0.32rem
				// margin-bottom -0.512rem
			.router_icon_active
				display none
		.myrouterlink_active
			color #F955E8
			.router_icon_active
				display inline-block
				width 1.666666rem
				margin-top 0.32rem
				// margin-bottom -0.512rem
			.router_icon
				display none
</style>

<style>
	
	.main_page .myrouterlink .el-badge__content.is-fixed{
		top: 12px;
	}
</style>