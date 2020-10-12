<template>
	<div class="share bg">
		<mt-header fixed title="分享中心">
			<router-link to="/mine" slot="left"><mt-button icon="back">返回</mt-button></router-link>
			<!-- <mt-button slot="right" @click="showBox">说明</mt-button> -->
		</mt-header>
		<img class="top_img" src="./imgs/bg1.png" />
		<div class="activity">
			<div class="btn">活动规则</div>
			<div class="text">点击下方分享按钮链接，对方点击分享链接并且收藏下载注册成功，既有丰厚的奖励哦</div>
		</div>
		<div class="choice">
			<div class="item">
				<div class="item_left">30%</div>
				<div class="item_text">
					<div class="item_text_top">VIP充值提成</div>
					<div class="item_text_bottom">你邀请的人，完成每次VIP充值，您将获得30%提成</div>
				</div>
				<div class="item_last">奖励一</div>
			</div>
			<div class="item">
				<div class="item_left item_left_two">15%</div>
				<div class="item_text">
					<div class="item_text_top">钻石充值提成</div>
					<div class="item_text_bottom">您邀请的人，完成每次钻石充值，您将获得15%提成</div>
				</div>
				<div class="item_last">奖励二</div>
			</div>
			<div class="item">
				<div class="item_left">15%</div>
				<div class="item_text">
					<div class="item_text_top">聊币充值提成</div>
					<div class="item_text_bottom">您邀请的人，完成每次聊币充值，您将获得15%提成</div>
				</div>
				<div class="item_last">奖励三</div>
			</div>
			<div class="item">
				<div class="item_left item_left_two">5%</div>
				<div class="item_text">
					<div class="item_text_top">提现收入提成</div>
					<div class="item_text_bottom">你邀请的人，完成每次提现，您将获得5%提成</div>
				</div>
				<div class="item_last">奖励四</div>
			</div>
		</div>
		<div class="my_share_code">我的邀请码</div>
		<div class="copy_btn" v-clipboard:copy="mycode" v-clipboard:success="onCopy" v-clipboard:error="onError">
			<p class="code_text">{{ mycode }}</p>
			<p>
				<span class="white_span">(</span>
				<span>点击复制</span>
				<span class="white_span">)</span>
			</p>
		</div>
		<div class="share_btn">邀请男性</div>
		<div class="share_btn">邀请女性</div>
		<div class="bottom_text" @click="$router.push('/myprofit')">点击进入我的推广主页（查看收益）</div>
	</div>
</template>

<script>
import { Toast } from 'mint-ui'	
export default {
	data() {
		return {
			mycode: 9696969
		}
	},
	methods: {
		onCopy() {
			Toast({
				message: '复制成功',
				iconClass: 'icon icon-success'
			})
		},
		onError() {
			Toast({
				message: '复制失败',
				iconClass: 'icon icon-success'
			})
		}
	}
}
</script>

<style scoped>
* {
	margin: 0;
	padding: 0;
}
.a_nav {
	position: relative;

	display: flex;

	align-items: center;

	justify-content: center;

	height: 50px;
}

.top_return {
	position: absolute;

	left: 20px;

	top: 16px;

	width: 10px;
}

.top_title {
	color: #fff;
}

.bg {
	height: auto;
	padding-bottom: 20px;
	background-image: linear-gradient(#df0236, #fc4169);
}
.top_img {
	width: 100%;
}
.activity {
	/* background: #fff; */

	margin: 0 30px;

	padding: 20px 10px;

	border-radius: 10px;

	display: flex;

	justify-content: center;

	flex-wrap: wrap;

	background-image: url(./imgs/Rules.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
}

.btn {
	padding: 0 25px;

	background-image: linear-gradient(#ff7c06, #ee4b12);

	height: 30px;

	border-radius: 25px;

	text-align: center;

	line-height: 30px;

	color: #fff;

	font-weight: bold;

	font-size: 16px;

	display: inline-block;

	text-shadow: 0 2px 6px #333;
}

.text {
	margin-top: 20px;

	font-size: 12px;

	text-align: center;

	color: #333333;
}

.choice {
	background: #fff;

	margin: 30px;

	padding: 5px 10px;

	border-radius: 10px;
}

.item {
	display: flex;

	align-items: center;

	position: relative;

	margin: 20px 0;
}

.item_left {
	width: 40px;

	height: 40px;

	text-align: center;

	line-height: 40px;

	border-radius: 20px;

	background: #3d7cfb;

	color: #fff;

	font-size: 14px;
}

.item_left_two {
	background: #fec731;
}

.item_text {
	margin-left: 10px;

	width: 53%;
}

.item_text_top {
	font-size: 14px;

	color: #333333;
}

.item_text_bottom {
	font-size: 12px;

	color: #999999;
}

.item_last {
	position: absolute;

	right: -30px;

	width: 90px;

	line-height: 30px;

	border-radius: 20px;

	text-align: center;

	background: #fff;

	box-shadow: 0 2px 6px #999;

	font-size: 14px;

	color: #333333;
}

.share_btn {
	width: 45%;

	background: url('./imgs/btn1.png') center no-repeat;

	background-size: 100%;

	color: #fff;

	border-radius: 20px;

	height: 40px;

	line-height: 40px;

	text-align: center;

	margin: 0 auto 15px;
}

.bottom_text {
	color: #fff;

	font-size: 14px;

	text-align: center;

	/* margin-bottom: 20px; */
}
.my_share_code {
	text-align: center;
	color: #ffffff;
	font-size: 18px;
}
.copy_btn {
	width: 200px;
	height: 45px;
	border-radius: 22.5px;
	background: linear-gradient(0deg, rgba(255, 124, 6, 1), rgba(238, 75, 18, 1));
	margin: auto;
	margin-top: 20px;
	margin-bottom: 15px;
	text-align: center;
	padding-top: 2.5px;
	box-sizing: border-box;
}
.copy_btn p {
	color: #ffffff;
	font-size: 15px;
	line-height: 18px;
}
.copy_btn p span {
	color: #d8ff00;
}
.copy_btn p .white_span {
	color: #ffffff;
}
.tip {
	position: fixed;
	top: 50%;
	left: 50%;
	width: 120px;
	height: 30px;
	border-radius: 5px;
	background-color: rgba(0, 0, 0, 0.5);
	transform: translate(-50%, -50%);
	color: #ffffff;
	line-height: 30px;
	text-align: center;
	display: none;
	animation: fadeTip 0.2s linear;
}
.tip.active {
	display: block;
}
@keyframes fadeTip {
	from {
		opacity: 0;
		transform: translate(-50%, -50%) scale(0.5);
	}
	to {
		opacity: 1;
		transform: translate(-50%, -50%) scale(1);
	}
}

.mint-header {
	background-color: transparent;
	color: #ffffff;
}
.mint-msgbox-message {
	text-align: left;
}
</style>

<style>
.share .mint-header-button.is-left,
.share .mint-header-button.is-right {
	text-align: center !important;
}
.share .mint-header-title {
	font-weight: bold;
}
.share .mint-header.is-fixed {
	z-index: 10;
}
</style>
