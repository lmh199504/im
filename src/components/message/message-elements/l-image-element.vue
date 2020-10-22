<template>
	<div :isMine="isMine" :message="message" style="padding: 10px;">
		<!-- el-image在IE下会自动加上用于兼容object-fit的类，该类的样式在没设置图片宽高是会 GG -->
		<img class="image-element" :src="imageUrl" @load="onImageLoaded" @click="handlePreview" />
		<el-progress v-if="showProgressBar" :percentage="percentage" :color="percentage => (percentage === 100 ? '#67c23a' : '#409eff')" />
	</div>
</template>

<script>
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
		}
	},
	methods: {
		onImageLoaded(event) {
			this.$bus.$emit('image-loaded', event)
		},
		handlePreview() {
			const url = this.payload.imageInfoArray ? this.payload.imageInfoArray[0].url : JSON.parse(this.payload.messageContent).imageUrl
			this.$bus.$emit('image-preview', {
				url: url
			})
		}
	},
	created() {
		// console.log(this.message)
	}
}
</script>

<style lang="stylus" scoped>
.image-element
	max-width 12.8rem
	cursor zoom-in
</style>
