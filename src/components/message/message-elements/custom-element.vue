<template>
	<message-bubble :isMine="isMine" :message="message">
		<div class="custom-element-wrapper">
			<div class="survey" v-if="this.payload.data === 'survey'">
				<div class="title">对IM DEMO的评分和建议</div>
				<el-rate v-model="rate" disabled show-score text-color="#ff9900" score-template="{value}"></el-rate>
				<div class="suggestion">{{ this.payload.extension }}</div>
			</div>
			<!-- <span class="text" title="您可以自行解析自定义消息" v-else>{{text}}</span> -->
			<image-element
				v-else-if="JSON.parse(message.payload.data).messageType === 'IMAGE_MESSAGE'"
				:isMine="isMine"
				:payload="JSON.parse(message._elements[0].content.data)"
				:message="message"
			/>
			<gift-element
				v-else-if="JSON.parse(message.payload.data).messageType === 'GIFT_MESSAGE' || JSON.parse(message.payload.data).messageType === 'REQUEST_GIFT_MESSAGE'"
				:isMine="isMine"
				:payload="JSON.parse(message._elements[0].content.data)"
				:message="message"
			></gift-element>

			<!-- <div v-else-if="JSON.parse(message.payload.data).messageType === 'RTC_EVENT_LAUNCH_VIDEO'"><span class="media_msg">[发起视频通话]</span></div> -->
			<!-- <div class="warapper" v-else-if="JSON.parse(message.payload.data).messageType === 'RTC_EVENT_CANCEL_VIDEO'"><span class="media_msg">[视频通话已取消]</span></div> -->
			<!-- 视频通话取消 -->
			<VideoChatElementCancel
				v-else-if="JSON.parse(message.payload.data).messageType === 'RTC_EVENT_CANCEL_VIDEO'"
				:isMine="isMine"
				:payload="JSON.parse(message._elements[0].content.data)"
				:message="message"
			/>
			
			<!-- 视频通话挂断 -->
			<VideoChatEndElement
				v-else-if="JSON.parse(message.payload.data).messageType === 'RTC_EVENT_HANGUP_VIDEO'"
				:isMine="isMine"
				:payload="JSON.parse(message._elements[0].content.data)"
				:message="message"
			/>

			<!-- <div class="warapper"  v-else-if="JSON.parse(message.payload.data).messageType === 'RTC_EVENT_HANGUP_VIDEO'"><span class="media_msg">[挂断视频通话]</span></div> -->

	
			<!-- 发起语音通话 -->
			<PhoneChatElement
				v-else-if="JSON.parse(message.payload.data).messageType === 'RTC_EVENT_LAUNCH_AUDIO'"
				:isMine="isMine"
				:payload="JSON.parse(message._elements[0].content.data)"
				:message="message"
			/>

			<!-- <div class="warapper"  v-else-if="JSON.parse(message.payload.data).messageType === 'RTC_EVENT_LAUNCH_AUDIO'"><span class="media_msg">[发起语音通话]</span></div> -->

			<!-- <div class="warapper"  v-else-if="JSON.parse(message.payload.data).messageType === 'RTC_EVENT_CANCEL_AUDIO'"><span class="media_msg">[语音通话已取消]</span></div> -->

			<!-- 取消语音 -->
			<PhoneChatElementCancel
				v-else-if="JSON.parse(message.payload.data).messageType === 'RTC_EVENT_CANCEL_AUDIO'"
				:isMine="isMine"
				:payload="JSON.parse(message._elements[0].content.data)"
				:message="message"
			/>

			<!-- 挂断语音 -->
			<PhoneChatEndElement
				v-else-if="JSON.parse(message.payload.data).messageType === 'RTC_EVENT_HANGUP_AUDIO'"
				:isMine="isMine"
				:payload="JSON.parse(message._elements[0].content.data)"
				:message="message"
			/>

			<!-- <div class="warapper"  v-else-if="JSON.parse(message.payload.data).messageType === 'RTC_EVENT_HANGUP_AUDIO'"><span class="media_msg">[语音通话已挂断]</span></div> -->

			<div class="warapper" v-else-if="JSON.parse(message.payload.data).messageType === 'RTC_EVENT_LOCK_HINT'"><span class="media_msg">余额不足</span></div>

			<div class="warapper" v-else-if="JSON.parse(message.payload.data).messageType === 'RTC_EVENT_ANSWER'"><span class="media_msg">[接听]</span></div>

			<div class="warapper" v-else-if="JSON.parse(message.payload.data).messageType === 'ADD_FRIEND_MESSAGE'"><span class="media_msg">[请求添加好友]</span></div>

			<div class="warapper" v-else-if="JSON.parse(message.payload.data).messageType === 'SEE_WE_CHAT_MESSAGE'"><span class="media_msg">[查看微信号消息]</span></div>
			<div class="warapper" v-else-if="JSON.parse(message.payload.data).messageType === 'SEE_PHONE_MESSAGE'"><span class="media_msg">[查看手机号消息]</span></div>

			<div class="warapper" v-else-if="JSON.parse(message.payload.data).messageType === 'SEE_QQ_MESSAGE'"><span class="media_msg">[查看QQ号消息]</span></div>

			<div class="warapper" v-else-if="JSON.parse(message.payload.data).messageType === 'SEND_WE_CHAT_MESSAGE'"><span class="media_msg">[发送微信号消息]</span></div>

			<div class="warapper" v-else-if="JSON.parse(message.payload.data).messageType === 'SEND_PHONE_MESSAGE'"><span class="media_msg">[发送手机号]</span></div>

			<div class="warapper" v-else-if="JSON.parse(message.payload.data).messageType === 'SEND_QQ_MESSAGE'"><span class="media_msg">[发送QQ号消息]</span></div>

			<div class="warapper" v-else-if="JSON.parse(message.payload.data).messageType === 'REFUSE_FRIEND_APPLY_MESSAGE'"><span class="media_msg">[拒绝好友申请]</span></div>

			<div class="warapper" v-else-if="JSON.parse(message.payload.data).messageType === 'AGREE_FRIEND_APPLY_MESSAGE'"><span class="media_msg">[同意好友申请]</span></div>
			<div class="warapper" v-else-if="JSON.parse(message.payload.data).messageType === 'FILE_MESSAGE'"><span class="media_msg">[文件消息]</span></div>
			<div class="warapper" v-else-if="JSON.parse(message.payload.data).messageType === 'SYSTEM_MESSAGE'"><span class="media_msg">[系统消息]</span></div>

			<sound-element
				v-else-if="JSON.parse(message.payload.data).messageType === 'AUDIO_MESSAGE'"
				:isMine="isMine"
				:payload="JSON.parse(message._elements[0].content.data)"
				:message="message"
			/>

			<video-chat-element
				v-else-if="JSON.parse(message.payload.data).messageType === 'RTC_EVENT_LAUNCH_VIDEO'"
				:isMine="isMine"
				:payload="JSON.parse(message._elements[0].content.data)"
				:message="message"
			/>

			<div class="warapper" v-else-if="JSON.parse(message.payload.data).messageType === 'TEXT_MESSAGE'">
				<span>{{ JSON.parse(JSON.parse(message.payload.data).messageContent).textContent }}</span>
			</div>
			<div class="warapper" v-else-if="JSON.parse(message.payload.data).messageType === 'VIDEO_MESSAGE'">
				<video :src="JSON.parse(JSON.parse(message._elements[0].content.data).messageContent).videoCoverUrl" controls="true" class="myvideo"></video>
			</div>
			<div class="warapper" v-else-if="JSON.parse(message.payload.data).messageType == 'RTC_EVENT_OFFER_VIDEO'"><span class="media_msg">[视频邀约]</span></div>
			<div class="warapper" v-else-if="JSON.parse(message.payload.data).messageType == 'RTC_INTELLIGENT_EVENT_LAUNCH_VIDEO'">
				<span class="media_msg">[马甲视频通话]</span>
			</div>
			<div class="warapper" v-else-if="JSON.parse(message.payload.data).messageType == 'RTC_INTELLIGENT_EVENT_LAUNCH_AUDIO '">
				<span class="media_msg">[马甲语音通话]</span>
			</div>
			<div class="warapper" v-else-if="JSON.parse(message.payload.data).messageType == 'RTC_EVENT_SHADE_VIDEO'"><span class="media_img">[事件，遮罩]</span></div>

			<div class="warapper" v-else-if="JSON.parse(message.payload.data).messageType == 'RTC_EVENT_LOCK_HINT'"><span class="media_msg">[事件，余额不足提示]</span></div>
			<div class="warapper" v-else-if="JSON.parse(message.payload.data).messageType == 'LOCATION_MESSAGE'"><span class="media_msg">[定位消息]</span></div>

			<div class="warapper" v-else-if="JSON.parse(message.payload.data).messageType == 'DECLINE_REQUEST_GIFT_MESSAGE'"><span>[拒绝求赏]</span></div>

			<image-text-element
				v-else-if="JSON.parse(message.payload.data).messageType === 'SERVICE_IMAGE_TEXT_MESSAGE'"
				:isMine="isMine"
				:payload="JSON.parse(message._elements[0].content.data)"
				:message="message"
			/>

			<span class="text warapper" v-else>[不支持的消息类型]</span>

			<audio :src="playAudioSrc" autoplay="autoplay" ref="myaudio"></audio>
		</div>
	</message-bubble>
</template>

<script>
import MessageBubble from '../message-bubble'
import { Rate } from 'element-ui'
import { ACTION } from '../../../utils/trtcCustomMessageMap'
import { formatDuration } from '../../../utils/formatDuration'
import ImageElement from './l-image-element.vue'
import ImageTextElement from './image-text-element.vue'
import GiftElement from './gift-element.vue'
import SoundElement from './sound-element.vue'
import VideoChatElement from './video_chat-element.vue'
import PhoneChatElementCancel from './phone_chat_element_cancel.vue'
import PhoneChatEndElement from './phone_chat_end_element.vue'
import VideoChatElementCancel from './video_chat_element_cancel.vue'
import VideoChatEndElement from './video_chat_end_element.vue'
import PhoneChatElement from './phone_chat-element.vue'

export default {
	name: 'CustomElement',
	props: {
		payload: {
			type: Object,
			required: true
		},
		message: {
			type: Object,
			required: true
		},
		isMine: {
			type: Boolean
		}
	},
	data() {
		return {
			playAudioSrc: '',
			isPlayAudio: false
		}
	},
	components: {
		MessageBubble,
		ElRate: Rate,
		ImageElement,
		GiftElement,
		ImageTextElement,
		SoundElement,
		VideoChatElement,
		PhoneChatElementCancel,
		PhoneChatEndElement,
		VideoChatElementCancel,
		VideoChatEndElement,
		PhoneChatElement
	},

	computed: {
		text() {
			return this.translateCustomMessage(this.payload)
		},
		rate() {
			return parseInt(this.payload.description)
		}
	},
	created() {
		// console.log(this.message)
	},
	mounted() {},
	methods: {
		translateCustomMessage(payload) {
			let videoPayload = {}
			try {
				videoPayload = JSON.parse(payload.data)
			} catch (e) {
				videoPayload = {}
			}
			if (payload.data === 'group_create') {
				return `${payload.extension}`
			}
			switch (videoPayload.action) {
				case ACTION.VIDEO_CALL_ACTION_DIALING:
					return '[请求通话]'
				case ACTION.VIDEO_CALL_ACTION_SPONSOR_CANCEL:
					return '[取消通话]'
				case ACTION.VIDEO_CALL_ACTION_REJECT:
					return '[拒绝通话]'
				case ACTION.VIDEO_CALL_ACTION_SPONSOR_TIMEOUT:
					return '[无应答]'
				case ACTION.VIDEO_CALL_ACTION_ACCEPTED:
					return '[开始通话]'
				case ACTION.VIDEO_CALL_ACTION_HANGUP:
					return `[结束通话，通话时长：${formatDuration(videoPayload.duration)}]`
				case ACTION.VIDEO_CALL_ACTION_LINE_BUSY:
					return '[正在通话中]'
				case ACTION.VIDEO_CALL_ACTION_ERROR:
					return '[设备异常]'
				default:
					return '[自定义消息]'
			}
		},

		playThis(message) {
			const audioUrl = JSON.parse(JSON.parse(message._elements[0].content.data).messageContent).audioUrl
			if (this.playAudioSrc === audioUrl && this.isPlayAudio) {
				this.$refs.myaudio.pause()
			} else {
				this.$refs.myaudio.src = audioUrl
				this.playAudioSrc = audioUrl
			}
		}
	}
}
</script>

<style lang="stylus" scoped>
.warapper
	padding 10px
	overflow hidden
.media_msg
	color red
.text
	font-weight bold
.title
	font-size 16px
	font-weight 600
	padding-bottom 10px
.survey
	background-color white
	color black
	padding 20px
	display flex
	flex-direction column
.suggestion
	padding-top 10px
	font-size 14px
.myvideo
	width 200px
.myvoice
	width 100px
.audioMsg
	width 1.92rem
	height 1.28rem
.audioMsg_active
	animation scale 0.5s infinite
@keyframes scale
	0%
		transform scale(0.8)
		transform-origin center
	100%
		transform scale(1)
		transform-origin center
</style>
