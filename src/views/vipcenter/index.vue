<template>
	<div class="vipcenter">
		<div class="nav_wrapper">
			<div class="vip_nav">
				<div class="nav_item_vip nav_item" :class="{ active: nav == 1 }" @click="changeNav(1)">VIP</div>
				<div class="nav_item_svip nav_item " :class="{ active: nav == 2 }" @click="changeNav(2)">
					<span>SVIP</span>
					<span class="free_chat" v-if="nav == 1">免费聊天</span>
				</div>
			</div>
		</div>
		<div class="vip_time">VIP有效期至2020年09月21日</div>
		<div class="swiper1 myswiper" v-show="nav == 1">
			<div class="swiper-wrapper">
				<div class="swiper-slide">
					<img src="./imgs/vip/1.jpg" alt="" />
					<div class="slide_text">
						<h3>每天签到双倍奖励</h3>
						<p>奖励有聊币，钻石</p>
					</div>
				</div>
				<div class="swiper-slide">
					<img src="./imgs/vip/2.jpg" alt="" />
					<div class="slide_text">
						<h3>不限视频/私信次数</h3>
						<p>仍需消耗钻石</p>
					</div>
				</div>
				<div class="swiper-slide">
					<img src="./imgs/vip/3.jpg" alt="" />
					<div class="slide_text">
						<h3>不限添加好友</h3>
						<p>需对方同意</p>
					</div>
				</div>
				<div class="swiper-slide">
					<img src="./imgs/vip/4.jpg" alt="" />
					<div class="slide_text">
						<h3>尊贵标识</h3>
						<p>让你脱颖而出</p>
					</div>
				</div>
				<div class="swiper-slide">
					<img src="./imgs/vip/5.jpg" alt="" />
					<div class="slide_text">
						<h3>私密无限看</h3>
						<p>看私房视频，照片</p>
					</div>
				</div>
				<div class="swiper-slide">
					<img src="./imgs/vip/6.jpg" alt="" />
					<div class="slide_text">
						<h3>查看联系方式</h3>
						<p>需消耗钻石</p>
					</div>
				</div>
				<div class="swiper-slide">
					<img src="./imgs/vip/7.jpg" alt="" />
					<div class="slide_text">
						<h3>访客详情</h3>
						<p>来访缘分不容错过</p>
					</div>
				</div>
				<div class="swiper-slide">
					<img src="./imgs/vip/8.jpg" alt="" />
					<div class="slide_text">
						<h3>闪聊次数不限</h3>
						<p>快来开启一键约会</p>
					</div>
				</div>
				<div class="swiper-slide">
					<img src="./imgs/vip/9.jpg" alt="" />
					<div class="slide_text">
						<h3>粉丝详情</h3>
						<p>喜欢我的不要错过</p>
					</div>
				</div>
				<div class="swiper-slide">
					<img src="./imgs/vip/10.jpg" alt="" />
					<div class="slide_text">
						<h3>人工客服</h3>
						<p>解决您的任何问题</p>
					</div>
				</div>
			</div>
		</div>

		<div class="swiper2 myswiper" v-show="nav == 2">
			<div class="swiper-wrapper">
				<div class="swiper-slide">
					<img src="./imgs/svip/1.jpg" alt="" />
					<div class="slide_text">
						<h3>尊享超V签到奖励</h3>
						<p>高额钻石</p>
					</div>
				</div>
				<div class="swiper-slide">
					<img src="./imgs/svip/2.jpg" alt="" />
					<div class="slide_text">
						<h3>免费私信聊天</h3>
						<p>文字聊天不要钱</p>
					</div>
				</div>
				<div class="swiper-slide">
					<img src="./imgs/svip/3.jpg" alt="" />
					<div class="slide_text">
						<h3>每天5分钟免费话时</h3>
						<p>超出仍需消耗钻石</p>
					</div>
				</div>
				<div class="swiper-slide">
					<img src="./imgs/svip/4.jpg" alt="" />
					<div class="slide_text">
						<h3>私信发图片，视频</h3>
						<p>让她快速了解你</p>
					</div>
				</div>
				<div class="swiper-slide">
					<img src="./imgs/svip/5.jpg" alt="" />
					<div class="slide_text">
						<h3>礼物尊享特惠</h3>
						<p>享受礼物优惠价格</p>
					</div>
				</div>
				<div class="swiper-slide">
					<img src="./imgs/svip/6.jpg" alt="" />
					<div class="slide_text">
						<h3>尊享一对一服务</h3>
						<p>第一时间为你服务</p>
					</div>
				</div>
				<div class="swiper-slide">
					<img src="./imgs/svip/7.jpg" alt="" />
					<div class="slide_text">
						<h3>VIP所有权限</h3>
						<p>可享受VIP所有特权</p>
					</div>
				</div>
			</div>
		</div>

		<div class="line"></div>

		<div class="content">
			<div class="vip_content " :class="{ active: nav == 1 }">
				<div class="vip_item" :class="{ active: vip_item == index }" @click="vip_item = index" v-for="(item, index) in vipArr" :key="index">
					<div class="most_fav" v-if="index == 0">最受欢迎</div>
					<h3>{{ item.time }}</h3>
					<div class="day_money">￥{{ item.day_money }}/天</div>
					<div class="all_money">￥{{ item.all_money }}</div>
					<div class="privilege">
						<p v-for="(free_item, index) in item.free" :key="index">{{ free_item }}</p>
					</div>
				</div>
			</div>
			<div class="svip_content" :class="{ active: nav == 2 }">
				<div class="vip_item" :class="{ active: svip_item == index }" @click="svip_item = index" v-for="(item, index) in svipArr" :key="index">
					<div class="most_fav" v-if="index == 0">最受欢迎</div>
					<h3>{{ item.time }}</h3>
					<div class="day_money">￥{{ item.day_money }}/天</div>
					<div class="all_money">￥{{ item.all_money }}</div>
					<div class="privilege">
						<p v-for="(free_item, index) in item.free" :key="index">{{ free_item }}</p>
					</div>
				</div>
			</div>

			<img src="./imgs/svip_see.png" alt="" class="svip_see" v-if="nav == 1" @click="nav = 2" />
			<div class="explain">
				<p>说明:</p>
				<p>1,会员仅开通软件使用权限，部分功能仍需消耗聊币和钻石；</p>
				<p>2,会员一经购买，不可以退换；</p>
				<p>3,普通会员升级超级会员，只能原价购买，原普通会员时间会折算进超级会员时间。。</p>
			</div>
			<div class="pay_btn_wrapper"><button class="pay_btn">即刻开通</button></div>
			<div class="footer">
				充值即默认同意
				<span><a href="./charge_agree.html">《会员支付协议》</a></span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			nav: 1,
			vip_item: 0,
			svip_item: 0,
			vipArr: [
				{
					time: '永久会员',
					day_money: 0.4,
					all_money: 159,
					free: ['赠送300钻石', '赠送300聊币', '赠送30天VIP']
				},
				{
					time: '一年会员',
					day_money: 0.35,
					all_money: 129,
					free: ['赠送300钻石', '赠送300聊币']
				},
				{
					time: '一个月',
					day_money: 0.76,
					all_money: 69,
					free: ['赠送300钻石']
				}
			],
			svipArr: [
				{
					time: '永久会员',
					day_money: 0.01,
					all_money: 460,
					free: ['赠送300钻石', '赠送300聊币', '赠送30天VIP']
				},
				{
					time: '一年会员',
					day_money: 0.9,
					all_money: 360,
					free: ['赠送300钻石', '赠送300聊币']
				}
			]
		}
	},
	methods: {
		changeNav(index) {
			this.nav = index
		}
	}
}
</script>

<style lang="stylus" scoped>

</style>

<style scoped>

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

.vip_nav {
	font-size: 15px;
	display: flex;
	width: 100%;
	height: 30px;
	border-radius: 15px;
	background: rgba(255, 255, 255, 1);
	box-shadow: 0px 0px 16px 0px rgba(133, 132, 131, 0.3);
	color: #999999;
	overflow: hidden;
}
.nav_item {
	height: 30px;
	text-align: center;
	line-height: 30px;
}
.nav_item.active {
	background: linear-gradient(-90deg, rgba(254, 214, 56, 0.96), rgba(246, 96, 150, 0.96));
	color: #ffffff;
}
.nav_item_vip {
	width: 45%;
}
.nav_item_svip {
	width: 55%;
}
.free_chat {
	margin-left: 10px;
	padding: 2px 10px;
	box-sizing: border-box;
	height: 15px;
	width: 50px;
	background: linear-gradient(-90deg, rgba(158, 56, 254, 0.96), rgba(236, 128, 167, 0.96));
	border-radius: 0px 10px 0px 10px;
	font-size: 12px;
	color: #fff;
}
.nav_wrapper {
	/* margin-top: 20px; */
	padding: 20px 35px 0 35px;
}
.vip_time {
	font-size: 12px;
	color: #999999;
	text-align: center;
	margin-top: 10px;
}
.swiper1,
.swiper2 {
	width: 100%;
	overflow: hidden;
	padding: 20px;
}
.swiper-slide {
	border-radius: 10px;
	height: 125px;
	overflow: hidden;
	position: relative;
	box-shadow: 0px 4px 12px rgba(235, 235, 235, 1);
}
.swiper-slide img {
	width: 100%;
	height: 100%;
}
.slide_text {
	position: absolute;
	bottom: 0;
	background-color: #ffffff;
	width: 100%;
	padding: 8px;
}
.slide_text h3 {
	font-size: 14px;
	font-weight: 500;
	color: #333333;
	margin-bottom: 5px;
	width: 100%;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
}
.slide_text p {
	font-size: 12px;
	color: #999999;
	width: 100%;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
}
.line {
	width: 100%;
	height: 8px;
	background-color: #eeeeee;
}
.content {
	padding: 0px 15px 10px 15px;
}
.vip_content,
.svip_content {
	width: 100%;
	margin-top: 15px;
	display: none;
}
.vip_content.active,
.svip_content.active {
	display: flex;
	flex-wrap: wrap;
}
.vip_item {
	width: calc(100vw / 3 - 18px);
	margin-right: 10px;
	border-radius: 5px;
	box-sizing: border-box;
	position: relative;
	text-align: center;
	border: 2px solid #eeeeee;
	margin-bottom: 10px;
}
.vip_item:nth-child(3n) {
	margin-right: 0;
}
.vip_item.active {
	border: 2px solid #fdac2a;
}
.most_fav {
	width: 70px;
	height: 27px;
	background: #fdac2a;
	border-radius: 5px 0px 5px 0px;
	font-size: 12px;
	color: #ffffff;
	text-align: center;
	line-height: 27px;
	top: -1px;
	left: -1px;
	position: absolute;
}
.vip_item h3 {
	margin-top: 30px;
	font-size: 18px;
}
.day_money {
	margin-top: 6px;
	color: #fdac2a;
	font-size: 15px;
}
.all_money {
	font-size: 12px;
	color: #999999;
	margin-top: 6px;
}
.privilege {
	margin-top: 3px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	background: #fdac2a;
	height: 57px;
	padding: 3px 0;
	border-radius: 0px 0px 5px 5px;
}
.privilege p {
	font-size: 12px;
	color: #ffffff;
}
.svip_see {
	width: 100%;
	margin-top: 20px;
}
.explain p {
	color: #606060;
	font-size: 12px;
	margin-bottom: 3px;
	margin-top: 10px;
}
.footer {
	margin-top: 10px;
	text-align: center;
	font-size: 12px;
	color: #999999;
}
.footer span {
	color: #000000;
}
.pay_btn_wrapper {
	margin-top: 30px;
	width: 100%;
	text-align: center;
}
.pay_btn {
	width: 85%;
	height: 45px;
	border-radius: 22.5px;
	background: linear-gradient(-90deg, rgba(254, 214, 56, 0.96), rgba(246, 96, 150, 0.96));
	outline: none;
	border: none;
	color: #ffffff;
	line-height: 45px;
	font-size: 18px;
	font-weight: 500;
	letter-spacing: 1px;
}
a {
	text-decoration: none;
	color: #000000;
}
</style>
