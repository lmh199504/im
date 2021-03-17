<template>
	<div class="current-conversation-wrapper">
		<div class="current-conversation" @scroll="onScroll" v-if="showCurrentConversation">
			
			<mt-header fixed :title=" userId !== 'customer01' ? name : '客服'">
				<!-- <router-link to="/mine" slot="left"><mt-button icon="back">返回</mt-button></router-link> -->
				<mt-button icon="back" slot="left" @click="$router.go(-1)">返回</mt-button>
				<!-- <mt-button slot="right" @click="showBox" icon="user"></mt-button> -->
				<div v-if="userId !== 'customer01'" slot="right" class="mt_header_right" @click="$router.push(`/userInfo/${userId}`)"><img src="../../assets/image/user.png" alt=""></div>
				<div v-else slot="right" class="mt_header_right" @click="$router.push('/helpCenter')"><img src="../../assets/image/chuyu/kefuquestion.png" alt=""></div>
				
			</mt-header>
			
			<div class="fix_top_msg" v-if="userId !== 'customer01'">
				<div class="fix_top_item">
					聊币：1234
				</div>
				<div class="fix_top_item" @click="showVipCenter">
					<img src="../../assets/image/chuyu/message_item/qq.png" alt="">
					<span>查看QQ</span>
				</div>
				
				<div class="fix_top_item" @click="showVipCenter">
					<img src="../../assets/image/chuyu/message_item/weixin.png" alt="" style="width: 1.152rem;">
					<span>查看微信</span>
				</div>
				
				<div class="fix_top_item" @click="showVipCenter">
					<img src="../../assets/image/chuyu/message_item/phone.png" alt="" style="width: 0.896rem;">
					<span>查看手机</span>
				</div>
			</div>
			
			<div class="header">
				<!-- <div class="name" v-if="userId !== 'customer01'">{{ name }}({{ userId }})</div> -->
				<div class="name">客服</div>
				<!-- <div
					class="btn-more-info"
					:class="showConversationProfile ? '' : 'left-arrow'"
					@click="showMore"
					v-show="!currentConversation.conversationID.includes('SYSTEM')"
					title="查看详细信息"
				></div> -->
			</div>
			<div class="content">
				<div class="message-list" ref="message-list" @scroll="this.onScroll">
					<div class="more" v-if="!isCompleted">
						<el-button type="text" @click="$store.dispatch('getMessageList', currentConversation.conversationID)">查看更多</el-button>
					</div>
					<div class="no-more" v-else>没有更多了</div>
					<message-item v-for="message in currentMessageList" :key="message.ID" :message="message" />
				</div>
				<div v-show="isShowScrollButtomTips" class="newMessageTips" @click="scrollMessageListToButtom">回到最新位置</div>
			</div>
			<div class="footer" v-if="showMessageSendBox"><message-send-box /></div>
		</div>
		<div class="profile" v-if="showConversationProfile"><conversation-profile /></div>
		<!-- 群成员资料组件 -->
		<member-profile-card />
		<ImagePreviewer />
		<CallLayer />
		<SingleTip :show="showSingle" @close="close" />
		
		<div class="fix_right" v-if="userId !== 'customer01'">
			<div class="fix_right_item">
				<img src="../../assets/image/chuyu/message_item/fly.png" alt="">
				<div class="line"></div>
			</div>
			<div class="fix_right_item">
				<img src="../../assets/image/chuyu/message_item/meg.png" alt="">
				<div class="line"></div>
			</div>
			<div class="fix_right_item">
				<img src="../../assets/image/chuyu/message_item/gift.png" alt="">
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import MessageSendBox from '../message/message-send-box'
import MessageItem from '../message/message-item'
import ConversationProfile from './conversation-profile.vue'
import MemberProfileCard from '../group/member-profile-card'
import ImagePreviewer from '../message/image-previewer.vue'
import CallLayer from '../message/call-layer.vue'
import SingleTip from '../../basecom/singleTip/index.vue'

export default {
	name: 'CurrentConversation',
	components: {
		MessageSendBox,
		MessageItem,
		ConversationProfile,
		MemberProfileCard,
		ImagePreviewer,
		CallLayer,
		SingleTip
	},
	data() {
		return {
			isShowScrollButtomTips: false,
			preScrollHeight: 0,
			showConversationProfile: false,
			timeout: '',
			showSingle:false
		}
	},
	computed: {
		...mapState({
			currentConversation: state => state.conversation.currentConversation,
			currentUnreadCount: state => state.conversation.currentConversation.unreadCount,
			currentMessageList: state => state.conversation.currentMessageList,
			isCompleted: state => state.conversation.isCompleted
		}),
		...mapGetters(['toAccount', 'hidden']),
		// 是否显示当前会话组件
		showCurrentConversation() {
			return !!this.currentConversation.conversationID
		},
		name() {
			if (this.currentConversation.type === 'C2C') {
				return this.currentConversation.userProfile.nick || this.toAccount
			} else if (this.currentConversation.type === 'GROUP') {
				return this.currentConversation.groupProfile.name || this.toAccount
			} else if (this.currentConversation.conversationID === '@TIM#SYSTEM') {
				return '系统通知'
			}
			return this.toAccount
		},
		showMessageSendBox() {
			return this.currentConversation.type !== this.TIM.TYPES.CONV_SYSTEM
		},

		userId() {
			// return this.currentConversation.toAccount
			console.log(this.currentConversation)
			return this.currentConversation.userProfile.userID
		}
	},
	mounted() {
		// setInterval(()=>{
		// 	console.log(this.currentConversation)
		// })
		this.$bus.$on('image-loaded', this.onImageLoaded)
		this.$bus.$on('scroll-bottom', this.scrollMessageListToButtom)
		if (this.currentConversation.conversationID === '@TIM#SYSTEM') {
			return false
		}
	},
	updated() {
		this.keepMessageListOnButtom()
		// 1. 系统会话隐藏右侧资料组件
		// 2. 没有当前会话时，隐藏右侧资料组件。
		//    背景：退出群组/删除会话时，会出现一处空白区域
		if (this.currentConversation.conversationID === '@TIM#SYSTEM' || typeof this.currentConversation.conversationID === 'undefined') {
			this.showConversationProfile = false
		}
	},
	watch: {
		currentUnreadCount(next) {
			if (!this.hidden && next > 0) {
				this.tim.setMessageRead({ conversationID: this.currentConversation.conversationID })
			}
		},
		hidden(next) {
			if (!next && this.currentUnreadCount > 0) {
				this.tim.setMessageRead({ conversationID: this.currentConversation.conversationID })
			}
		}
	},
	methods: {
		close() {
			this.showSingle = false
		},
		showVipCenter() {
			const number = Math.random() * 10
			if (number > 5) {
				this.showSingle = true
			} else {
				this.$messagebox({
					title: '初遇提醒您',
					message: '安装APP后才可使用此功能哦，快来下载吧，更多精彩在等你哦。',
					showCancelButton: true,
					confirmButtonText: '极速安装APP',
					cancelButtonText: '继续体验',
					confirmButtonClass: 'downappconfirm'
				})
			}
		},		
		onScroll({ target: { scrollTop } }) {
			let messageListNode = this.$refs['message-list']
			if (!messageListNode) {
				return
			}
			if (this.preScrollHeight - messageListNode.clientHeight - scrollTop < 20) {
				this.isShowScrollButtomTips = false
			}
		},
		// 如果滚到底部就保持在底部，否则提示是否要滚到底部
		keepMessageListOnButtom() {
			let messageListNode = this.$refs['message-list']
			if (!messageListNode) {
				return
			}
			// 距离底部20px内强制滚到底部,否则提示有新消息
			if (this.preScrollHeight - messageListNode.clientHeight - messageListNode.scrollTop < 20) {
				this.$nextTick(() => {
					messageListNode.scrollTop = messageListNode.scrollHeight
				})
				this.isShowScrollButtomTips = false
			} else {
				this.isShowScrollButtomTips = true
			}
			this.preScrollHeight = messageListNode.scrollHeight
		},
		// 直接滚到底部
		scrollMessageListToButtom() {
			this.$nextTick(() => {
				let messageListNode = this.$refs['message-list']
				if (!messageListNode) {
					return
				}
				messageListNode.scrollTop = messageListNode.scrollHeight
				this.preScrollHeight = messageListNode.scrollHeight
				this.isShowScrollButtomTips = false
			})
		},
		showMore() {
			this.showConversationProfile = !this.showConversationProfile
		},
		onImageLoaded() {
			this.keepMessageListOnButtom()
		}
	}
}
</script>

<style lang="stylus" scoped>
/* 当前会话的骨架屏 */
.current-conversation-wrapper
	height 100vh
	background-color $background-light
	color $base
	display flex
	overflow hidden
	
	.mint-header
		background-color #FFFFFF
		color #333333
		.mt_header_right
			img
				width 1.408rem
	.fix_top_msg
		height 35px
		position fixed
		top 40px
		left 0
		width 100%
		background-color #F46AC0
		z-index 6
		padding 0 1.28rem
		box-sizing border-box
		display flex
		align-items center
		justify-content space-between
		.fix_top_item
			flex 1
			text-align center
			font-size 0.768rem
			color #FFFFFF
			align-items center
			display flex
			img
				width 1.024rem
				margin-right 0.32rem
	.fix_right
		width 2.88rem
		border-radius 1.44rem
		background #FFFFFF
		box-shadow 0px 6px 14px 0px rgba(124, 123, 124, 0.48)
		padding 5px
		position fixed
		right 1.28rem
		top 50%
		.fix_right_item
			text-align center
			.line
				width 1.28rem
				margin auto
				margin-top 0.512rem
				margin-bottom 0.512rem
				height 1px
				background-color #A0A0A0
			img
				width 27px
				display block
				margin auto
				
	.current-conversation
		display flex
		flex-direction column
		width 100%
		height 100vh
	.profile
		height $height
		overflow-y scroll
		width 220px
		border-left 1px solid $border-base
		flex-shrink 0
	.more
		display flex
		justify-content center
		font-size 12px
	.no-more
		display flex
		justify-content center
		color $secondary
		font-size 12px
		padding 10px 10px
.header
	// border-bottom 1px solid $border-base
	height 75px
	position relative
	.name
		padding 0 20px
		color $base
		font-size 18px
		font-weight bold
		line-height 50px
		text-shadow $font-dark 0 0 0.1em
	.btn-more-info
		position absolute
		top 10px
		right -15px
		border-radius 50%
		width 30px
		height 30px
		cursor pointer
		&::before
			position absolute
			right 0
			z-index 0
			content ''
			width 15px
			height 30px
			border 1px solid $border-base
			border-radius 0 100% 100% 0 / 50%
			border-left none
			background-color $background-light
		&::after
			content ''
			width 8px
			height 8px
			transition transform 0.8s
			border-top 2px solid $secondary
			border-right 2px solid $secondary
			float right
			position relative
			top 11px
			right 8px
			transform rotate(45deg)
		&.left-arrow
			transform rotate(180deg)
			&::before
				background-color $white
		&:hover
			&::after
				border-color $light-primary
.content
	display flex
	flex 1
	flex-direction column
	height 100%
	overflow hidden
	position relative
	.message-list
		width 100%
		box-sizing border-box
		overflow-y scroll
		padding 0 20px
	.newMessageTips
		position absolute
		cursor pointer
		padding 5px
		width 120px
		margin auto
		left 0
		right 0
		bottom 5px
		font-size 12px
		text-align center
		border-radius 10px
		border $border-light 1px solid
		background-color $white
		color $primary
.footer
	border-top 1px solid $border-base
.show-more
	text-align right
	padding 10px 20px 0 0
@media screen and (max-width: 600px)
	/* 当屏幕尺寸小于600px时，应用下面的CSS样式 */
	.current-conversation-wrapper
		height 100vh !important
	.current-conversation
		height 100vh !important
</style>
