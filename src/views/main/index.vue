<template>
	<div class="main_page">
		<router-view></router-view>
		<div class="nav_bottom">
			<router-link class="myrouterlink" to="/makefriend">
				<img class="router_icon" src="../../assets/image/chuyu/home.png" alt="" />
				<img class="router_icon_active" src="../../assets/image/chuyu/home_active.png" alt="" />
				<br />
				<span>交友</span>
			</router-link>
			<router-link class="myrouterlink" to="/find">
				<img class="router_icon" src="../../assets/image/chuyu/home.png" alt="" />
				<img class="router_icon_active" src="../../assets/image/chuyu/home_active.png" alt="" />
				<br />
				<span>发现</span>
			</router-link>
			<router-link class="myrouterlink" to="/message">
				<img class="router_icon" src="../../assets/image/chuyu/home.png" alt="" />
				<img class="router_icon_active" src="../../assets/image/chuyu/home_active.png" alt="" />
				<br />
				<span>信息</span>
			</router-link>
			<router-link class="myrouterlink" to="/mine">
				<img class="router_icon" src="../../assets/image/chuyu/home.png" alt="" />
				<img class="router_icon_active" src="../../assets/image/chuyu/home_active.png" alt="" />
				<br />
				<span>我的</span>
			</router-link>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
	data() {
		return {}
	},
	created() {
		if (this.isLogin === false) {
			// this.$router.replace('/login')
		}
		window.console.log(this.$route.path)
	},
	computed: {
		...mapState({
			isLogin: state => state.user.isLogin
		})
	}
}
</script>

<style lang="stylus" scoped>
.main_page
	width 100%
	height 100%
	.nav_bottom
		position fixed
		bottom 0
		left 0
		width 100%
		background-color #FFFFFF
		border-top 1px solid #E0E0E0
		display flex
		height 3.333333rem
		.myrouterlink
			text-align center
			width 25%
			font-size 0.8rem
			color #333333
			text-decoration none
			.router_icon
				width 1.666666rem
				margin-top 0.333333rem
			.router_icon_active
				display none
		.myrouterlink_active
			color #F955E8
			.router_icon_active
				display inline-block
				width 1.666666rem
				margin-top 0.333333rem
			.router_icon
				display none
</style>