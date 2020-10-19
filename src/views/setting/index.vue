<template>
	<div class="setting">
		<mt-header fixed title="系统设置">
			<router-link to="/mine" slot="left"><mt-button icon="back">返回</mt-button></router-link>
			<!-- <mt-button slot="right" @click="showBox">说明</mt-button> -->
		</mt-header>
		<div class="wrapper">
			<div class="wrapper_item">
				<div class="setting_item first_item" @click="$router.push('/bindPhone')">
					<div class="left">绑定手机号</div>
					<div class="right">
						<div class="right_text">已绑定</div>
						<img class="rightImg" src="../../assets/image/chuyu/xiangyou.png" alt="" />
					</div>
				</div>

				<div class="setting_item" style="border: none;" @click="$router.push('/changePassWord')">
					<div class="left">修改密码</div>
					<div class="right"><img class="rightImg" src="../../assets/image/chuyu/xiangyou.png" alt="" /></div>
				</div>
			</div>

			<div class="wrapper_item">
				<div class="setting_item">
					<div class="left">好友上线提醒</div>
					<div class="right">
						<mt-switch size="mini" v-model="onlineValue"></mt-switch>
						<!-- <img class="rightImg" src="../../assets/image/chuyu/xiangyou.png" alt=""> -->
					</div>
				</div>
				<div class="setting_item" style="border: none;">
					<div class="left">消息振动提醒</div>
					<div class="right">
						<!-- <img class="rightImg" src="../../assets/image/chuyu/xiangyou.png" alt=""> -->
						<mt-switch v-model="msgValue"></mt-switch>
					</div>
				</div>
			</div>

			<div class="wrapper_item">
				<div class="setting_item" @click="$router.push('/blacklist')">
					<div class="left">黑名单</div>
					<div class="right"><img class="rightImg" src="../../assets/image/chuyu/xiangyou.png" alt="" /></div>
				</div>
				<div class="setting_item">
					<div class="left">清除缓存</div>
					<div class="right"><img class="rightImg" src="../../assets/image/chuyu/xiangyou.png" alt="" /></div>
				</div>
				<div class="setting_item" @click="$router.push('/aboutUs')">
					<div class="left">关于我们</div>
					<div class="right"><img class="rightImg" src="../../assets/image/chuyu/xiangyou.png" alt="" /></div>
				</div>
			</div>
		</div>
		<div class="logoutBtn" @click="logout">退出登陆</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			onlineValue: false,
			msgValue: false
		}
	},
	methods: {
		logout() {
			this.$store.dispatch('logout')
			this.$router.replace('/login')
		}
	}
}
</script>

<style lang="stylus" scoped>
.setting
	height 100%
	background-color #FFFFFF
	.mint-header
		background-color #FFFFFF
		color #333333
	.wrapper
		background-color #EEEEEE
		.wrapper_item
			background-color #FFFFFF
			padding 0 1.28rem
			margin-bottom 0.64rem
			.setting_item
				display flex
				border-bottom 1px solid #E0E0E0
				padding 1.152rem 0
				align-items center
				justify-content space-between
				.left
					font-size 0.96rem
					color #343434
				.right
					display flex
					.right_text
						font-size 0.96rem
						color #9A9A9A
					.rightImg
						height 1.28rem
		.first_item
			padding-top 3.84rem !important
	.logoutBtn
		width 8rem
		height 2.24rem
		line-height 2.24rem
		text-align center
		background linear-gradient(-86deg, rgba(249, 85, 232, 0.96), rgba(246, 96, 151, 0.96))
		font-size 0.96rem
		color #FFFFFF
		margin auto
		border-radius 1.12rem
		margin-top 3.84rem
</style>

<style>
.mint-switch-core {
	height: 24px;
}
.mint-switch-core::after {
	height: 20px;
	width: 20px;
	margin-top: 1px;
}
.mint-switch-input:checked + .mint-switch-core::after {
	transform: translateX(27px);
}
.mint-switch-core::before {
	height: 24px;
	background-color: #bebebe;
}
.mint-switch-input:checked + .mint-switch-core {
	background-color: #e0477e;
	border-color: #e0477e;
}
</style>
