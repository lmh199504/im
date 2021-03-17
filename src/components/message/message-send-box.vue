<template>
	<div id="message-send-box-wrapper">
		<!-- :style="focus ? { backgroundColor: 'white' } : {}" -->
		<div class="bottom">
			<div class="yuyin" v-if="toAccount !== 'customer01'"><img src="../../assets/image/yuyin.png" alt=""  @click="handClickYuyin"/></div>
			<div class="sendimg" v-else><img src="../../assets/image/zhaopian.png" alt="" @click="handleSendImageClick"></div>
			<textarea
				ref="text-input"
				rows="2"
				resize="false"
				v-model="messageContent"
				class="text-input"
				@focus="focus = true"
				@blur="focus = false"
				@keydown.enter.exact.prevent="handleEnter"
				@keyup.ctrl.enter.prevent.exact="handleLine"
				@keydown.up.stop="handleUp"
				@keydown.down.stop="handleDown"
			></textarea>
			<el-popover placement="top" width="100%" trigger="click">
				<div class="emojis">
					<div v-for="item in emojiName" class="emoji" :key="item" @click="chooseEmoji(item)">
						<img :src="emojiUrl + emojiMap[item]" style="width:30px;height:30px" />
					</div>
				</div>
				<i class="iconfont icon-smile" slot="reference" title="发表情"></i>
			</el-popover>
			<div class="btn-send" @click="sendTextMessage">发送</div>
			<!-- <el-tooltip class="item" effect="dark" content="按Enter发送消息，Ctrl+Enter换行" placement="left-start">
				
			</el-tooltip> -->
		</div>
		<div class="send-header-bar" v-if="toAccount !== 'customer01'">
			<!-- 	
			<i class="iconfont icon-tupian" title="发图片" @click="handleSendImageClick"></i>
			<i class="iconfont icon-wenjian" title="发文件" @click="handleSendFileClick"></i>
			<i class="el-icon-video-camera" v-if="currentConversationType === 'C2C' && toAccount !== userID" title="视频通话" @click="videoCall"></i> -->
			<div class="send-header-bar-item"><img src="../../assets/image/xiangji.png" alt="" @click="handleClickCarame" /></div>
			<div class="send-header-bar-item"><img src="../../assets/image/zhaopian.png" alt="" @click="handleSendImageClick" /></div>
			<div class="send-header-bar-item"><img src="../../assets/image/phone.png" alt=""  @click="handClickPhone"/></div>
			<div class="send-header-bar-item">
				<img src="../../assets/image/video.png" alt="" v-if="currentConversationType === 'C2C' && toAccount !== userID" title="视频通话" @click="videoCall" />
			</div>
			<div class="send-header-bar-item" @click="handleClickGift"><img src="../../assets/image/gift.png" alt="" /></div>
		</div>

		<el-popover trigger="manual" v-model="showAtGroupMember" placement="top" style="max-height:500px;overflow-y:scroll;">
			<el-radio-group v-model="atUserID" style="display:flex;flex-decoration: column;" v-for="member in memberList" :key="member.userID" @change="handleSelectAtUser">
				<el-radio :label="member.userID">{{ member.nameCard || member.nick || member.userID }}</el-radio>
			</el-radio-group>
		</el-popover>

		<input type="file" id="imagePicker" ref="imagePicker" accept=".jpg, .jpeg, .png, .gif" @change="sendImage" style="display:none" />
		<input type="file" id="filePicker" ref="filePicker" @change="sendFile" style="display:none" />

		<GiftTip :showGift="showGift" @hideGift="hideGift" />
		<SingleTip :show="showSingle" @close="closeSingle" />
	</div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import { Popover, RadioGroup, Radio } from 'element-ui'
import { emojiMap, emojiName, emojiUrl } from '../../utils/emojiMap'
import GiftTip from '../../basecom/giftTip/index.vue'
import SingleTip from '../../basecom/singleTip/index.vue'
export default {
	name: 'message-send-box',
	props: ['scrollMessageListToButtom'],
	components: {
		ElPopover: Popover,
		ElRadioGroup: RadioGroup,
		ElRadio: Radio,
		GiftTip,
		SingleTip
	},
	data() {
		return {
			colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
			messageContent: '',
			isSendCustomMessage: false,
			sendCustomDialogVisible: false,
			surveyDialogVisible: false,
			form: {
				data: '',
				description: '',
				extension: ''
			},
			rate: 5, // 评分
			suggestion: '', // 建议
			file: '',
			emojiMap: emojiMap,
			emojiName: emojiName,
			emojiUrl: emojiUrl,
			showAtGroupMember: false,
			atUserID: '',
			focus: false,
			showGift: false,
			showSingle: false
		}
	},
	computed: {
		...mapGetters(['toAccount', 'currentConversationType']),
		...mapState({
			memberList: state => state.group.currentMemberList,
			userID: state => state.user.userID
		})
	},
	mounted() {
		this.$refs['text-input'].addEventListener('paste', this.handlePaste)
		this.$bus.$on('reEditMessage', this.reEditMessage)
	
	},
	beforeDestroy() {
		this.$refs['text-input'].removeEventListener('paste', this.handlePaste)
	},
	methods: {
		handClickYuyin() {
			this.showSingle = true
		},
		closeSingle() {
			this.showSingle = false
		},
		hideGift() {
			this.showGift = false
		},

		handleClickCarame() {
			this.downAppTip()
		},
		downAppTip() {
			// this.$messagebox
			// 	.confirm('安装APP后才可使用此功能哦，快来下载吧，更多精彩在等你哦。')
			// 	.then(() => {})
			// 	.catch(() => {})
			this.$messagebox({
				title: '初遇提醒您',
				message: '安装APP后才可使用此功能哦，快来下载吧，更多精彩在等你哦。',
				showCancelButton: true,
				confirmButtonText: '极速安装APP',
				cancelButtonText: '继续体验',
				confirmButtonClass: 'downappconfirm'
			})
		},
		handleClickGift() {
			this.downAppTip()
			// this.showGift = true   //会员显示送礼
		},
		reEditMessage(payload) {
			this.messageContent = payload
		},
		handleSelectAtUser() {
			this.messageContent += this.atUserID + ' '
			this.showAtGroupMember = false
		},
		handleUp() {
			const index = this.memberList.findIndex(member => member.userID === this.atUserID)
			if (index - 1 < 0) {
				return
			}
			this.atUserID = this.memberList[index - 1].userID
		},
		handleDown() {
			const index = this.memberList.findIndex(member => member.userID === this.atUserID)
			if (index + 1 >= this.memberList.length) {
				return
			}
			this.atUserID = this.memberList[index + 1].userID
		},
		handleEnter() {
			if (this.showAtGroupMember) {
				this.handleSelectAtUser()
			} else {
				this.sendTextMessage()
			}
		},
		handleLine() {
			this.messageContent += '\n'
		},
		handlePaste(e) {
			let clipboardData = e.clipboardData
			let file
			if (clipboardData && clipboardData.files && clipboardData.files.length > 0) {
				file = clipboardData.files[0]
			}

			if (typeof file === 'undefined') {
				return
			}
			// 1. 创建消息实例，接口返回的实例可以上屏
			let message = this.tim.createImageMessage({
				to: this.toAccount,
				conversationType: this.currentConversationType,
				payload: {
					file: file
				},
				onProgress: percent => {
					this.$set(message, 'progress', percent) // 手动给message 实例加个响应式属性: progress
				}
			})
			this.$store.commit('pushCurrentMessageList', message)

			// 2. 发送消息
			let promise = this.tim.sendMessage(message)
			promise.catch(error => {
				this.$store.commit('showMessage', {
					type: 'error',
					message: error.message
				})
			})
		},
		sendTextMessage() {
			if (this.messageContent === '' || this.messageContent.trim().length === 0) {
				this.messageContent = ''
				this.$store.commit('showMessage', {
					message: '不能发送空消息哦！',
					type: 'info'
				})
				return
			}
			const message = this.tim.createTextMessage({
				to: this.toAccount,
				conversationType: this.currentConversationType,
				payload: { text: this.messageContent }
			})
			this.$store.commit('pushCurrentMessageList', message)
			this.$bus.$emit('scroll-bottom')
			this.tim.sendMessage(message).catch(error => {
				this.$store.commit('showMessage', {
					type: 'error',
					message: error.message
				})
			})
			this.messageContent = ''
		},
		sendCustomMessage() {
			if (this.form.data.length === 0 && this.form.description.length === 0 && this.form.extension.length === 0) {
				this.$store.commit('showMessage', {
					message: '不能发送空消息',
					type: 'info'
				})
				return
			}
			const message = this.tim.createCustomMessage({
				to: this.toAccount,
				conversationType: this.currentConversationType,
				payload: {
					data: this.form.data,
					description: this.form.description,
					extension: this.form.extension
				}
			})
			this.$store.commit('pushCurrentMessageList', message)
			this.tim.sendMessage(message).catch(error => {
				this.$store.commit('showMessage', {
					type: 'error',
					message: error.message
				})
			})
			Object.assign(this.form, {
				data: '',
				description: '',
				extension: ''
			})
			this.sendCustomDialogVisible = false
		},
		random(min, max) {
			return Math.floor(Math.random() * (max - min + 1) + min)
		},
		sendSurvey() {
			const message = this.tim.createCustomMessage({
				to: this.toAccount,
				conversationType: this.currentConversationType,
				payload: {
					data: 'survey',
					description: String(this.rate),
					extension: this.suggestion
				}
			})
			this.$store.commit('pushCurrentMessageList', message)
			Object.assign(this.form, {
				data: '',
				description: '',
				extension: ''
			})
			this.tim
				.sendMessage(message)
				.then(() => {
					Object.assign(this, {
						rate: 5,
						suggestion: ''
					})
				})
				.catch(error => {
					this.$store.commit('showMessage', {
						type: 'error',
						message: error.message
					})
				})
			this.surveyDialogVisible = false
		},
		chooseEmoji(item) {
			this.messageContent += item
		},
		handleSendImageClick() {
			this.$refs.imagePicker.click()
			
			// if(this.toAccount==='customer01') {
			// 	this.$refs.imagePicker.click()
			// }else{
			// 	this.showSingle = true
			// }
			
			
		},
		handClickPhone() {
			this.showSingle = true
		},
		
		handleSendFileClick() {
			this.$refs.filePicker.click()
		},
		videoCall() {
			this.showSingle = true
			// this.$bus.$emit('video-call')
		},
		sendImage() {
			const message = this.tim.createImageMessage({
				to: this.toAccount,
				conversationType: this.currentConversationType,
				payload: {
					file: document.getElementById('imagePicker') // 或者用event.target
				},
				onProgress: percent => {
					this.$set(message, 'progress', percent) // 手动给message 实例加个响应式属性: progress
				}
			})
			this.$store.commit('pushCurrentMessageList', message)
			this.tim
				.sendMessage(message)
				.then(() => {
					this.$refs.imagePicker.value = null
				})
				.catch(imError => {
					this.$store.commit('showMessage', {
						message: imError.message,
						type: 'error'
					})
				})
		},
		sendFile() {
			const message = this.tim.createFileMessage({
				to: this.toAccount,
				conversationType: this.currentConversationType,
				payload: {
					file: document.getElementById('filePicker') // 或者用event.target
				},
				onProgress: percent => {
					this.$set(message, 'progress', percent) // 手动给message 实例加个响应式属性: progress
				}
			})
			this.$store.commit('pushCurrentMessageList', message)
			this.tim
				.sendMessage(message)
				.then(() => {
					this.$refs.imagePicker.value = null
				})
				.catch(imError => {
					this.$store.commit('showMessage', {
						message: imError.message,
						type: 'error'
					})
				})
		}
	}
}
</script>

<style lang="stylus" scoped>
#message-send-box-wrapper
	box-sizing border-box
	overflow hidden
	padding 3px 15px 10px 15px
.emojis
	height 160px
	box-sizing border-box
	display flex
	flex-direction row
	flex-wrap wrap
	overflow-y scroll
	justify-content space-between
.emoji
	height 40px
	width 40px
	box-sizing border-box
	text-align center
.send-header-bar
	box-sizing border-box
	padding 6px 0 0 0
	display flex
	justify-content space-between
	align-items center
	.send-header-bar-item
		width 25%
		text-align center
		img
			height 22px
.send-header-bar i
	cursor pointer
	font-size 24px
	color gray
	margin 0 12px 0 0
.send-header-bar i:hover
	color $black
textarea
	resize none
.text-input
	font-size 16px
	width 100%
	box-sizing box-sizing
	border none
	outline none
	background-color transparent
.block
	padding 10px 0
	display flex
	align-items center
.bottom
	padding-top 10px
	position relative
	display flex
	align-items center
	textarea
		background-color #FFFFFF
		border-radius 20px
		box-sizing border-box
		height 36px
		padding 5px
		margin-right 10px
	span
		margin-top -5px
	.yuyin
		margin-right 10px
		img
			width 0.96rem
	.sendimg
		margin-right 10px
		img
			width 1.6rem
	.btn-send
		cursor pointer
		color $primary
		font-size 0.768rem
		width 3.88rem
		height 1.6rem
		color #FFFFFF
		border-radius 0.8rem
		text-align center
		line-height 1.6rem
		background linear-gradient(-86deg, rgba(249, 85, 232, 0.96), rgba(251, 90, 148, 0.96))
		margin-left 0.64rem
</style>

<style lang="stylus">
.downappconfirm
	color #EE45CC
	&:hover
		color #EE45CC
</style>
