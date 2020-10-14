<template>
	<div class="personalData">
		<mt-header fixed title="个人资料">
			<!-- <mt-button slot="left" icon="back" @click="goback">返回</mt-button> -->
			<router-link to="/login" slot="left"><mt-button icon="back">返回</mt-button></router-link>
			<!-- <mt-button slot="right" @click="showBox">说明</mt-button> -->
		</mt-header>

		<div class="wrapper">
			<div class="userImg" v-if="selcetSex === 1">
				<img v-if="!boyImg" src="../../assets/image/chuyu/personalData/boyHeader.png" alt="" />
				<img v-else :src="boyImg" alt="">
				<input type="file" ref="boyInput" accept=".gif,.jpg,.jpeg,.png" class="inputImg" @change="boyChange" />
				<br />
				<div class="changeText">点击更换头像</div>
			</div>

			<div class="userImg" v-if="selcetSex === 0">
				<img v-if="!girlImg" src="../../assets/image/chuyu/personalData/girlHeader.png" alt="" />
				<img v-else :src="girlImg" alt="">
				<input type="file" ref="girlInput" accept=".gif,.jpg,.jpeg,.png" class="inputImg" @change="girlChange" />
				<br />
				<div class="changeText">点击更换头像</div>
			</div>

			<div class="randName">
				<input type="text" placeholder="请输入昵称" v-model="randName" />
				<img src="../../assets/image/chuyu/personalData/saizi.png" alt="" @click="getRandName" />
			</div>
			<div class="tipText">请修改昵称，勿带脏字，淫秽，政治信息</div>

			<div class="sexWrapper">
				<div class="sexItem" @click="selcetSex = 1">
					<div class="sexImg" :class="[selcetSex === 1 ? 'sexImg_boy_active' : '']">
						<img v-if="selcetSex !== 1" src="../../assets/image/chuyu/personalData/boy_gray.png" alt="" />
						<img v-else src="../../assets/image/chuyu/personalData/boy.png" alt="" />
					</div>
					<div class="sexText">男士</div>
				</div>
				<div class="sexItem" @click="selcetSex = 0">
					<div class="sexImg" :class="[selcetSex === 0 ? 'sexImg_girl_active' : '']">
						<img v-if="selcetSex !== 0" src="../../assets/image/chuyu/personalData/girl_gray.png" alt="" />
						<img v-else src="../../assets/image/chuyu/personalData/girl.png" alt="" />
					</div>
					<div class="sexText">女士</div>
				</div>
			</div>

			<div class="cannotChange">
				<span>*</span>
				注册成功后性别不可更改
			</div>

			<div class="sure_btn">登录</div>
		</div>
		<LoginFooter />
	</div>
</template>

<script>
import LoginFooter from '../login/loginFooter/index.vue'
export default {
	data() {
		return {
			randName: '嘿嘿嘿',
			selcetSex: 1, //1 男 0 女,
			girlImg: '',
			boyImg: '',
			
		}
	},
	methods: {
		goback() {},
		getRandName() {},
		boyChange() {

			this.boyImg = URL.createObjectURL(this.$refs.boyInput.files[0])
			// this.formData.append('z_url', this.$refs.boyInput.files[0])
		},
		girlChange() {
			this.girlImg = URL.createObjectURL(this.$refs.girlInput.files[0])
		}
	},
	components: {
		LoginFooter
	}
}
</script>

<style lang="stylus" scoped>
.mint-header
	background-color #FFFFFF
	color #333333
.wrapper
	padding-top 3.84rem
	.userImg
		position relative
		text-align center
		img
			height 6.4rem
			width 6.4rem
		.inputImg
			position absolute
			width 100%
			height 100%
			left 0
			opacity 0
		.changeText
			color #999999
			font-size 0.768rem
	.randName
		width 70%
		margin auto
		display flex
		justify-content space-between
		margin-top 1.92rem
		border-bottom 1px solid #CCCCCC
		padding 5px 0
		input
			width 100%
			outline none
			border none
		img
			width 1.28rem
			height 1.28rem
	.tipText
		width 70%
		margin auto
		color #EC3661
		font-size 0.768rem
		margin-top 0.128rem
	.sexWrapper
		padding 0.64rem 6.4rem
		display flex
		justify-content space-between
		margin-top 1.92rem
		.sexImg
			width 3.52rem
			height 3.52rem
			border-radius 50%
			text-align center
			line-height 3.52rem
			border 1px solid #CDCDCD
			box-sizing border-box
			img
				width 1.472rem
		.sexImg_boy_active
			background-color #3699FF
			border none
		.sexImg_girl_active
			background-color #F19EC2
			border none
		.sexText
			text-align center
			margin-top 1.152rem
			font-size 0.96rem
			color #333333
	.cannotChange
		text-align center
		color #999999
		font-size 0.768rem
		margin-top 1.92rem
		span
			color #EC3661
	.sure_btn
		width 14.4rem
		height 2.56rem
		background linear-gradient(-86deg, rgba(249, 85, 232, 0.96), rgba(225, 71, 127, 0.96))
		border-radius 1.28rem
		color #FFFFFF
		font-size 1.152rem
		text-align center
		line-height 2.56rem
		margin auto
		margin-top 1.92rem
</style>
