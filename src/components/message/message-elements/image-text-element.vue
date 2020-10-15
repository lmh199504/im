<template>
	<message-bubble :isMine="isMine" :message="message">
		<!-- el-image在IE下会自动加上用于兼容object-fit的类，该类的样式在没设置图片宽高是会 GG -->
		<img class="image-element" :src="imageUrl" @load="onImageLoaded" @click="handlePreview" />
		<el-progress v-if="showProgressBar" :percentage="percentage" :color="percentage => (percentage === 100 ? '#67c23a' : '#409eff')" />
	</message-bubble>
</template>

<script>
import MessageBubble from '../message-bubble'
import { Progress } from 'element-ui'
import { mapGetters } from 'vuex'
export default {
	name: 'ImageElemnt',
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
	components: {
		MessageBubble,
		ElProgress: Progress
	},
	computed: {
		...mapGetters(['imgUrlList']),
		imageUrl() {
			const url = this.payload.imageInfoArray ? this.payload.imageInfoArray[0].url : JSON.parse(this.payload.messageContent).imageUrl

			if (typeof url !== 'string') {
				return ''
			}

			return url.slice(0, 2) === '//' ? `https:${url}` : url
		},
		showProgressBar() {
			// console.log(this.$parent.message)
			return this.$parent.message == undefined ? false : this.$parent.message.status === 'unSend'
		},
		percentage() {
			return this.$parent.message == undefined ? false : Math.floor((this.$parent.message.progress || 0) * 100)
		},
		linkUrl(){
			return JSON.parse(this.payload.messageContent).linkUrl
		}
	},
	methods: {
		onImageLoaded(event) {
			this.$bus.$emit('image-loaded', event)
		},
		handlePreview() {
			const url = this.payload.imageInfoArray ? this.payload.imageInfoArray[0].url : JSON.parse(this.payload.messageContent).imageUrl
			this.$bus.$emit('image-preview', {
				url: this.payload.imageInfoArray ? this.payload.imageInfoArray[0].url : JSON.parse(this.payload.messageContent).imageUrl
			})
			
			window.open(this.linkUrl)
		}
	},
	created() {
		// console.log(this.message)
	}
}
</script>

<style lang="stylus" scoped>
.image-element
	max-width 200px
	cursor zoom-in
</style>
