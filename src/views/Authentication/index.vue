<template>
	<div class="Authentication">
		<mt-header fixed title="实名认证">
			<router-link to="/mine" slot="left"><mt-button icon="back">返回</mt-button></router-link>
			<!-- <mt-button slot="right" @click="showBox">说明</mt-button> -->
		</mt-header>

		<div class="wrapper" v-if="false">
			<div class="auth_title">认证须知</div>
			<p class="auth_p">根据国家要求，使用交友服务，需要进行实名认证。您</p>
			<p class="auth_p">的认证资料仅供审核使用，他人无法查看。</p>
			<div class="auth_title auth_card">请拍摄并上传你的身份证照片</div>

			<div class="card_wrapper">
				<div class="card_item">
					<div class="card_item_top">
						<img src="../../assets/image/chuyu/auth_card_z.png" alt="" v-if="z_url === ''" />
						<img :src="z_url" alt="" v-else />
					</div>
					<div class="card_item_bottom">
						<input type="file" ref="file_z" @change="getZheng()" accept=".gif,.jpg,.jpeg,.png" />
						<div>拍摄正面</div>
					</div>
				</div>
				<div class="card_item">
					<div class="card_item_top">
						<img src="../../assets/image/chuyu/auth_card_f.png" alt="" v-if="f_url === ''" />
						<img :src="f_url" alt="" v-else />
					</div>
					<div class="card_item_bottom">
						<input type="file" ref="file_f" @change="getFan()" accept=".gif,.jpg,.jpeg,.png" />
						<div>拍摄反面</div>
					</div>
				</div>
			</div>

			<div class="request_title">拍摄身份证要求：</div>
			<p class="request_p">大陆公民持有的本人有效二代身份证；</p>
			<p class="request_p">
				拍摄时确保身份证
				<span>边框完整，字体清晰，亮度均匀；</span>
			</p>

			<div class="right_btn">马上认证</div>
		</div>

		<div class="already_send" v-if="false">
			<p>您的实名认证已提交</p>
			<p>请耐心等待审核结果</p>
			<div class="sure" @click="$router.push('/mine')">确定</div>
		</div>
		
		<div class="already_send" v-if="false">
			<p>恭喜您，实名认证已通过</p>
			<div class="sure" @click="$router.push('/mine')">确定</div>
		</div>
		
		<div class="auth_fail">
			<p class="auth_fail_title">很遗憾，审核未通过</p>
			<p class="reason_title">原因如下：</p>
			<p class="reason_p">1.您的照片不清晰，未按操作要求进行拍摄</p>
			<p class="reason_p">2.您的身份证照片不符合拍摄规则，未露出四角</p>
			<p class="reason_p">3.为了尽快帮助你变现，请您按上述要求重新认证一下哦，我们快尽快重新进行审核</p>
			<div class="sure" @click="$router.push('/mine')">确定</div>
		</div> 
	</div>
</template>

<script>
export default {
	data() {
		return {
			z_url: '',
			f_url: '',
			formData: new FormData()
		}
	},
	methods: {
		getZheng() {
			this.z_url = URL.createObjectURL(this.$refs.file_z.files[0])
			this.formData.append('z_url', this.$refs.file_z.files[0])
		},
		getFan() {
			this.f_url = URL.createObjectURL(this.$refs.file_f.files[0])
			this.formData.append('f_url', this.$refs.file_f.files[0])
			window.console.log(this.formData.get('f_url'))
		}
	}
}
</script>

<style lang="stylus" scoped>
.wrapper
	padding 0.96rem
	padding-top 3.84rem
	.auth_title
		color #E14880
		font-size 0.96rem
		margin-bottom 0.96rem
	.auth_p
		font-size 0.768rem
		color #666666
		line-height 1.28rem
	.auth_card
		margin-top 1.28rem
	.card_wrapper
		margin-top 3.2rem
		display flex
		justify-content space-between
		.card_item
			width 45%
			border-radius 0.32rem
			overflow hidden
			.card_item_top
				padding 0.96rem
				background-color #FEF4F8
				img
					width 100%
					height 5.12rem
			.card_item_bottom
				height 1.92rem
				width 100%
				line-height 1.92rem
				text-align center
				font-size 0.896rem
				color #FFFFFF
				position relative
				background-color #E14880
				overflow hidden
				input
					position absolute
					opacity 0
					left 0
					width 100%
					height 100%
	.request_title
		font-size 0.768rem
		color #1C1C20
		margin-top 1.408rem
		font-weight 550
		margin-bottom 0.96rem
	.request_p
		font-size 0.768rem
		color #929292
		line-height 1.28rem
		span
			color #E73247
	.right_btn
		height 2.24rem
		width 8rem
		background linear-gradient(-86deg, rgba(249, 85, 232, 0.96), rgba(246, 96, 151, 0.96))
		border-radius 1.12rem
		line-height 2.24rem
		text-align center
		color #FFFFFF
		font-size 0.96rem
		margin auto
		margin-top 7.36rem
.already_send
	padding-top 6.4rem
	p
		text-align center
		font-size 1.152rem
		color #666666
	.sure
		font-size 0.96rem
		width 8rem
		height 2.24rem
		line-height 2.24rem
		border-radius 1.12rem
		text-align center
		color #FFFFFF
		margin auto
		background linear-gradient(-86deg, rgba(249, 85, 232, 0.96), rgba(246, 96, 151, 0.96))
		margin-top 19.2rem
.auth_fail
	padding 1.92rem
	padding-top 6.4rem
	text-align left
	.auth_fail_title
		font-size 1.152rem
		color #666666
	.reason_title
		font-size 0.768rem
		color #666666
		margin-top 1.984rem
	.reason_p
		font-size 0.768rem
		color #666666
		margin-top 0.768rem
	.sure
		font-size 0.96rem
		width 8rem
		height 2.24rem
		line-height 2.24rem
		border-radius 1.12rem
		text-align center
		color #FFFFFF
		margin auto
		background linear-gradient(-86deg, rgba(249, 85, 232, 0.96), rgba(246, 96, 151, 0.96))
		margin-top 12.8rem	
</style>

<style scoped>
.mint-header {
	background-color: #ffffff;
	color: #333333;
}
.mint-msgbox-message {
	text-align: left;
}
</style>

<style>
.Authentication .mint-header-button.is-left,
.Authentication .mint-header-button.is-right {
	/* text-align: center !important; */
}
.Authentication .mint-header-title {
	font-weight: bold;
}
.Authentication .mint-header.is-fixed {
	z-index: 10;
}
</style>
