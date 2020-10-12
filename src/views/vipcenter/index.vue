<template>
	<div class="vipcenter">
		<mt-header fixed title="会员中心">
			<router-link to="/mine" slot="left"><mt-button icon="back">返回</mt-button></router-link>
			<mt-button slot="right" @click="showBox">说明</mt-button>
		</mt-header>
		<div class="nav_wrapper">
			<div class="vip_nav">
				<div class="nav_item_vip nav_item" :class="{ active: nav == 1 }" @click="changeNav(1)">普通VIP</div>
				<div class="nav_item_svip nav_item " :class="{ active: nav == 2 }" @click="changeNav(2)">
					<span>超级VIP</span>
					<span class="free_chat" v-if="nav == 1">免费聊天</span>
				</div>
			</div>
		</div>

		<div class="vip_time" v-show="show_end_time" v-cloak>{{ vipType }}有效期至{{ vip_endtime }}</div>

		<swiper class="swiper1" ref="mySwiper" :options="swiperOptions" v-show="nav == 1">
			<swiper-slide>
				<img src="http://icon.chuyuol.com/h5PayImages/vip/2.jpg" alt="" />
				<div class="slide_text">
					<h3>不限视频/私信次数</h3>
					<p>快来与TA聊天</p>
				</div>
			</swiper-slide>
			<swiper-slide>
				<img src="http://icon.chuyuol.com/h5PayImages/vip/3.jpg" alt="" />
				<div class="slide_text">
					<h3>添加好友免费聊天</h3>
					<p>好友聊天不要钱哦</p>
				</div>
			</swiper-slide>
			<swiper-slide>
				<img src="http://icon.chuyuol.com/h5PayImages/vip/4.jpg" alt="" />
				<div class="slide_text">
					<h3>尊贵标识</h3>
					<p>让你脱颖而出</p>
				</div>
			</swiper-slide>
			<swiper-slide>
				<img src="http://icon.chuyuol.com/h5PayImages/vip/1.jpg" alt="" />
				<div class="slide_text">
					<h3>每天签到双倍奖励</h3>
					<p>奖励有聊币，钻石</p>
				</div>
			</swiper-slide>
			<swiper-slide>
				<img src="http://icon.chuyuol.com/h5PayImages/vip/5.jpg" alt="" />
				<div class="slide_text">
					<h3>私密无限看</h3>
					<p>看私房视频，照片</p>
				</div>
			</swiper-slide>
			<swiper-slide>
				<img src="http://icon.chuyuol.com/h5PayImages/vip/6.jpg" alt="" />
				<div class="slide_text">
					<h3>查看联系方式</h3>
					<p>可以添加私人联系方式哦</p>
				</div>
			</swiper-slide>
			<swiper-slide>
				<img src="http://icon.chuyuol.com/h5PayImages/vip/7.jpg" alt="" />
				<div class="slide_text">
					<h3>访客详情</h3>
					<p>来访缘分不容错过</p>
				</div>
			</swiper-slide>
			<swiper-slide>
				<img src="http://icon.chuyuol.com/h5PayImages/vip/8.jpg" alt="" />
				<div class="slide_text">
					<h3>闪聊次数不限</h3>
					<p>快来开启一键约会</p>
				</div>
			</swiper-slide>
			<swiper-slide>
				<img src="http://icon.chuyuol.com/h5PayImages/vip/9.jpg" alt="" />
				<div class="slide_text">
					<h3>粉丝详情</h3>
					<p>喜欢我的不要错过</p>
				</div>
			</swiper-slide>
			<swiper-slide>
				<img src="http://icon.chuyuol.com/h5PayImages/vip/10.jpg" alt="" />
				<div class="slide_text">
					<h3>人工客服</h3>
					<p>解决您的任何问题</p>
				</div>
			</swiper-slide>
		</swiper>

		<swiper class="swiper2" ref="mySwiper" :options="swiperOptions" v-show="nav == 2">
			<swiper-slide>
				<img src="http://icon.chuyuol.com/h5PayImages/svip/2.jpg" alt="" />
				<div class="slide_text">
					<h3>免费私信聊天</h3>
					<p>文字聊天不要钱</p>
				</div>
			</swiper-slide>
			<swiper-slide>
				<img src="http://icon.chuyuol.com/h5PayImages/svip/3.jpg" alt="" />
				<div class="slide_text">
					<h3>每天5分钟免费话时</h3>
					<p>每天签到领取</p>
				</div>
			</swiper-slide>
			<swiper-slide>
				<img src="http://icon.chuyuol.com/h5PayImages/svip/4.jpg" alt="" />
				<div class="slide_text">
					<h3>私信发图片，视频</h3>
					<p>让她快速了解你</p>
				</div>
			</swiper-slide>
			<swiper-slide>
				<img src="http://icon.chuyuol.com/h5PayImages/svip/1.jpg" alt="" />
				<div class="slide_text">
					<h3>尊享超V签到奖励</h3>
					<p>高额钻石</p>
				</div>
			</swiper-slide>
			<swiper-slide>
				<img src="http://icon.chuyuol.com/h5PayImages/svip/5.jpg" alt="" />
				<div class="slide_text">
					<h3>礼物尊享特惠</h3>
					<p>享受礼物优惠价格</p>
				</div>
			</swiper-slide>
			<swiper-slide>
				<img src="http://icon.chuyuol.com/h5PayImages/svip/6.jpg" alt="" />
				<div class="slide_text">
					<h3>尊享一对一服务</h3>
					<p>第一时间为你服务</p>
				</div>
			</swiper-slide>
			<swiper-slide>
				<img src="http://icon.chuyuol.com/h5PayImages/svip/7.jpg" alt="" />
				<div class="slide_text">
					<h3>VIP所有权限</h3>
					<p>可享受VIP所有特权</p>
				</div>
			</swiper-slide>
		</swiper>

		<div class="line"></div>

		<div class="content">
			<div class="vip_content " :class="{ active: nav == 1 }">
				<div class="vip_item" :class="{ active: vip_item == index }" @click="getItem(item, index)" v-for="(item, index) in vipArr" :key="index">
					<div>
						<div class="most_fav" v-if="index == 0">最受欢迎</div>
						<h3>{{ item.time }}</h3>
						<div class="day_money">￥{{ item.day_money }}/天</div>
						<div class="all_money">￥{{ item.all_money }}</div>
					</div>
					<div class="privilege">
						<p
							v-for="(free_item, idx) in item.free"
							:key="idx"
							:class="{ p3: item.free.length == 3, p2: item.free.length == 2, p1: item.free.length == 1, active: item.free.length > 1 && idx == 0 }"
						>
							{{ free_item }}
						</p>
						<p v-show="item.free.length == 0" class="p1">立即充值</p>
					</div>
				</div>
			</div>
			<div class="svip_content" :class="{ active: nav == 2 }">
				<div class="vip_item" :class="{ active: svip_item == index }" @click="getItem(item, index)" v-for="(item, index) in svipArr" :key="index">
					<div>
						<div class="most_fav" v-if="index == 0">最受欢迎</div>
						<h3>{{ item.time }}</h3>
						<div class="day_money">￥{{ item.day_money }}/天</div>
						<div class="all_money">￥{{ item.all_money }}</div>
					</div>
					<div class="privilege">
						<p
							v-for="(free_item, idx) in item.free"
							:key="idx"
							:class="{ p3: item.free.length == 3, p2: item.free.length == 2, p1: item.free.length == 1, active: item.free.length > 1 && idx == 0 }"
						>
							{{ free_item }}
						</p>
						<p v-show="item.free.length == 0" class="p1">立即充值</p>
						<!-- <p v-for="free_item in item.free">{{free_item}}</p> -->
					</div>
				</div>
			</div>

			<div class="svip_free" v-if="nav == 2">
				<div class="svip_free_item">
					<img src="https://wdm-chuyu-icon.oss-cn-shanghai.aliyuncs.com/h5PayImages/baseImgs/gift2.png" alt="" />
					<div>
						<h3>尊享超V签到奖励</h3>
						<p>获得高额钻石奖励哦</p>
					</div>
				</div>
				<div class="svip_free_item">
					<img src="https://wdm-chuyu-icon.oss-cn-shanghai.aliyuncs.com/h5PayImages/baseImgs/gift1.png" alt="" />
					<div>
						<h3>礼物尊享特惠</h3>
						<p>享受礼物特惠价格</p>
					</div>
				</div>
			</div>
			<img src="http://icon.chuyuol.com/h5PayImages/baseImgs/svip_see.png" alt="" class="svip_see" v-if="nav == 1" @click="nav = 2" />
			<div class="explain" style="display:none">
				<p>说明:</p>
				<p>1,会员仅开通软件使用权限，部分功能仍需消耗聊币和钻石；</p>
				<p>2,会员一经购买，不可以退换；</p>
				<p>3,普通会员升级超级会员，只能原价购买，原普通会员时间会折算进超级会员时间。</p>
			</div>
		</div>
		<div class="fix_bottom">
			<div class="pay_btn_wrapper"><button class="pay_btn" @click="showPay">即刻开通</button></div>
			<div class="footer">
				充值即默认同意
				<span><a href="javascript:void(0)" @click="toAgree($event)">《会员支付协议》</a></span>
			</div>
		</div>

		<div class="tip pay_tip tip_wrapper" :class="{ active: show_pay }">
			<h5>请选择支付方式</h5>

			<div class="pay_btn_wrapper ">
				<button
					class="pay_btn_tip"
					v-for="item in selected_config"
					:key="item.id"
					:class="{ ali_btn: item.payment_type.indexOf('alipay') > -1, wx_btn: item.payment_type.indexOf('wechat') > -1 }"
					@click="clickPayBtn(item)"
				>
					<img src="http://icon.chuyuol.com/h5PayImages/baseImgs/zhifubao.png" alt="" v-if="item.payment_type.indexOf('alipay') > -1" />
					<img src="http://icon.chuyuol.com/h5PayImages/baseImgs/wx.png" alt="" v-else />
					<span>{{ item.payment_type.indexOf('alipay') > -1 ? '支付宝支付' : '微信支付' }}</span>
				</button>
			</div>
		</div>
		<div class="mask" @click="show_pay = false" :class="{ active: show_pay }"></div>
	</div>
</template>

<script>
var vipList = [
	{ product_id: 47, time: '1元VIP', day_money: '1.00', all_money: '0.01', free: ['赠送1钻石', '赠送1聊币'] },
	{ product_id: 38, time: '一个月会员', day_money: '19.00', all_money: '0.10', free: ['赠送1000钻石'] },
	{ product_id: 40, time: '永久会员', day_money: '39.00', all_money: '39.00', free: ['赠送100钻石'] }
]
var payConfig = [
	{
		pay_id: 15,
		payment_type: 'wechat',
		pay_name: '寻app微信支付',
		package_name: 'com.chuyuol.www.pay3',
		package_url: 'https://wdm-chuyu-icon.oss-cn-shanghai.aliyuncs.com/android/WeChatPay-pay3-release.apk',
		apply_fee: '0.00',
		apply_fee_max: '3000.00'
	},
	{ pay_id: 17, payment_type: 'alipay', pay_name: '懒洋洋', package_name: '', package_url: '', apply_fee: '100.00', apply_fee_max: '0.00' },
	{ pay_id: 19, payment_type: 'alipay', pay_name: '刘刘', package_name: '', package_url: '', apply_fee: '0.00', apply_fee_max: '1000.00' },
	{ pay_id: 20, payment_type: 'kj_alipay_h5', pay_name: '快接支付宝H5', package_name: '', package_url: '', apply_fee: '0.00', apply_fee_max: '0.00' },
	{
		pay_id: 25,
		payment_type: 'xt_wechat_mini_program',
		pay_name: '外逗箱包（信钛小程序支付）',
		package_name: 'com.chuyuol.www.wechat.mini.pay3',
		package_url: 'http://apk.chuyuol.cn/vxpay/pay/WeChatMiniPay-pay3-release.apk',
		apply_fee: '0.00',
		apply_fee_max: '3000.00'
	},
	{ pay_id: 28, payment_type: 'alipay', pay_name: '泡泡', package_name: '', package_url: '', apply_fee: '0.00', apply_fee_max: '200.00' }
]
var svipList = [
	{ product_id: 50, time: '超级svip', day_money: '3.00', all_money: '399.00', free: ['赠送399钻石', '赠送399聊币', '赠送415天15小时VIP'] },
	{ product_id: 41, time: '超级会员', day_money: '49.00', all_money: '49.00', free: ['赠送100钻石'] },
	{ product_id: 42, time: '永久会员', day_money: '0.01', all_money: '0.01', free: ['赠送100钻石'] }
]
export default {
	data() {
		return {
			nav: 1,
			vip_item: 0,
			svip_item: 0,
			show_pay: false,
			vipArr: vipList,
			svipArr: svipList,
			pay_config: payConfig,
			selected_config: [], //筛选出来的支付类型
			vip_endtime: '2020-10-23', //会员剩余时间
			vip_level: '',
			test: '',
			vipType: 'vip',
			swiperOptions: {
				loop: true,
				slidesPerView: 2.2,
				spaceBetween: 20,
				autoplay: true,
				observer: true, // 修改swiper自己或子元素时，自动初始化swiper
				observeParents: true // 修改swiper的父元素时，自动初始化swiper
				// Some Swiper option/callback...
			}
		}
	},
	methods: {
		showBox() {
			this.$messagebox.alert(`
				1.会员仅开通软件使用权限，部分功能仍需消耗聊币和钻石；<br/>
				2.会员一经购买，不可退换<br/>
				3.普通会员升级超级会员，只能原价购买，原普通会员时间这算进超级会员时间
			`)
		},
		getItem(item, index, flag) {
			this.selected_config = []
			if (this.nav == 1) {
				this.vip_item = index
			} else {
				this.svip_item = index
			}
			var alipay = []
			var wechat = []
			var alipay_other = []
			var wechat_other = []
			this.pay_config.forEach(pay_item => {
				//金额为0或者大于选择的金额
				if (
					(pay_item.apply_fee == '0.00' && pay_item.apply_fee_max == '0.00') ||
					(Number(pay_item.apply_fee) <= Number(item.all_money) && Number(pay_item.apply_fee_max) >= Number(item.all_money))
				) {
					if (pay_item.payment_type.indexOf('alipay') > -1) {
						// alipay.push(pay_item)
						if (pay_item.payment_type == 'alipay') {
							alipay.push(pay_item)
						} else if (pay_item.payment_type == 'alipay_h5') {
							alipay.push(pay_item)
						} else if (pay_item.payment_type.indexOf('_alipay_h5') > -1) {
							alipay_other.push(pay_item)
						}
					} else if (pay_item.payment_type.indexOf('wechat') > -1) {
						if (pay_item.payment_type == 'wechat') {
							wechat.push(pay_item)
						} else if (pay_item.payment_type == 'wechat_h5') {
							wechat.push(pay_item)
						} else if (pay_item.payment_type == 'wechat_mini_program') {
							wechat.push(pay_item)
						} else if (pay_item.payment_type.indexOf('_wechat_h5') > -1 || pay_item.payment_type.indexOf('_wechat_mini_program') > -1) {
							wechat_other.push(pay_item)
						}
					}
				}
			})
			var myindex = 0
			if (alipay.length != 0) {
				myindex = Math.ceil(Math.random() * (alipay.length - 1))
				this.selected_config.push(alipay[myindex])
			}

			if (alipay_other.length != 0) {
				//随机选择一个 第三方支付宝 支付
				myindex = Math.ceil(Math.random() * (alipay_other.length - 1))
				this.selected_config.push(alipay_other[myindex])
			}

			if (wechat.length != 0) {
				myindex = Math.ceil(Math.random() * (wechat.length - 1))
				this.selected_config.push(wechat[myindex])
			}

			if (wechat_other.length != 0) {
				//随机选择一个 第三方微信 支付
				myindex = Math.ceil(Math.random() * (wechat_other.length - 1))
				this.selected_config.push(wechat_other[myindex])
			}
			if (flag != 'first') {
				this.show_pay = true
			}
		},

		//支付按钮点击
		clickPayBtn(item) {
			var productId = ''
			// console.log(this.vipArr[this.vip_item])
			if (this.nav == 1) {
				productId = this.vipArr[this.vip_item].product_id
			} else {
				productId = this.svipArr[this.svip_item].product_id
			}

			if (/android/i.test(navigator.userAgent)) {
				window.consumer.pay(productId, item.pay_id, item.package_name, item.package_url)
			} else if (/iphone/i.test(navigator.userAgent)) {
				window.webkit.messageHandlers.pay.postMessage({
					body: {
						productId: productId,
						pay_id: item.pay_id,
						package_name: item.package_name,
						package_url: item.package_url
					}
				})
			}

			this.show_pay = false
		},

		//顶部svip 和 vip切换
		changeNav(index) {
			this.nav = index
			//切换时也需要重新获取支付选项
			// if (this.nav == 1) {
			// 	this.getItem(this.vipArr[this.vip_item], this.vip_item)
			// } else {
			// 	this.getItem(this.svipArr[this.svip_item], this.svip_item)
			// }
		},
		showPay() {
			if (this.nav == 1) {
				this.getItem(this.vipArr[this.vip_item], this.vip_item)
			} else {
				this.getItem(this.svipArr[this.svip_item], this.svip_item)
			}

			this.show_pay = true
		},

		//前往支付协议
		toAgree($event) {
			$event.preventDefault()
			if (/android/i.test(navigator.userAgent)) {
				window.consumer.paymentAgreement()
			} else if (/iphone/i.test(navigator.userAgent)) {
				window.webkit.messageHandlers.toAgree.postMessage({
					body: 'toAgree'
				})
			}
		}
	},
	computed: {
		swiper() {
			return this.$refs.mySwiper.$swiper
		},
		show_end_time() {
			if (this.nav == 1) {
				if (this.vipType == 'vip' && this.vip_endtime != '') {
					return true
				} else {
					return false
				}
			} else if (this.nav == 2) {
				if (this.vipType == 'svip' && this.vip_endtime != '') {
					return true
				} else {
					return false
				}
			} else {
				return false
			}
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
.vipcenter {
	padding-top: 2.56rem;
	overflow: scroll;
	padding-bottom: 6.4rem
}
.vip_nav {
	font-size: 0.96rem;
	display: flex;
	width: 100%;
	height: 1.92rem;
	border-radius: 0.96rem;
	background: rgba(255, 255, 255, 1);
	box-shadow: 0px 0px 1.024rem 0px rgba(133, 132, 131, 0.3);
	color: #999999;
	overflow: hidden;
}
.nav_item {
	height: 1.92rem;
	text-align: center;
	line-height: 1.92rem;
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
	margin-left: 0.64rem;
	padding: 0.128rem 0.64rem;
	box-sizing: border-box;
	height: 0.96rem;
	width: 3.2rem;
	background: linear-gradient(-90deg, rgba(158, 56, 254, 0.96), rgba(236, 128, 167, 0.96));
	border-radius: 0px 10px 0px 10px;
	font-size: 0.768rem;
	color: #fff;
}
.nav_wrapper {
	/* margin-top: 20px; */
	padding: 1.28rem 2.24rem 0 2.24rem;
}
.vip_time {
	font-size: 0.768rem;
	color: #999999;
	text-align: center;
	margin-top: 0.64rem;
}
.swiper1,
.swiper2 {
	width: 100%;
	overflow: hidden;
	padding: 1.28rem;
}
.swiper-slide {
	border-radius: 0.64rem;
	height: 8rem;
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
	padding: 0.512rem;
}
.slide_text h3 {
	font-size: 0.896rem;
	font-weight: 500;
	color: #333333;
	margin-bottom: 0.32rem;
	width: 100%;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
}
.slide_text p {
	font-size: 0.768rem;
	color: #999999;
	width: 100%;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
}
.line {
	width: 100%;
	height: 0.512rem;
	background-color: #eeeeee;
}
.content {
	padding: 0.96rem 0.96rem 0.64rem 0.96rem;
}
.vip_content,
.svip_content {
	width: 100%;
	margin-top: 0.064rem;
	display: none;
}
.vip_content.active,
.svip_content.active {
	display: flex;
	flex-wrap: wrap;
}

.vip_item {
	width: calc(100vw / 3 - 1.152rem);
	margin-right: 0.64rem;
	border-radius: 0.32rem;
	box-sizing: border-box;
	position: relative;
	text-align: center;
	border: 0.128rem solid #eeeeee;
	margin-bottom: 0.64rem;
}
.vip_item:nth-child(3n) {
	margin-right: 0;
}
.vip_item.active {
	border: 2px solid #fdac2a;
}
.most_fav {
	width: 4.48rem;
	height: 1.728rem;
	background: #fdac2a;
	border-radius: 0.32rem 0px 0.32rem 0px;
	font-size: 12px;
	color: #ffffff;
	text-align: center;
	line-height: 1.728rem;
	top: -1px;
	left: -1px;
	position: absolute;
}
.vip_item h3 {
	margin-top: 1.92rem;
	font-size: 1.152rem;
}
.day_money {
	margin-top: 0.384rem;
	color: #fdac2a;
	font-size: 0.96rem;
}
.all_money {
	font-size: 0.768rem;
	color: #999999;
	margin-top: 0.384rem;
}
.privilege {
	margin-top: 0.192rem;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	background: #fdac2a;
	height: 3.648rem;
	padding: 0.192rem 0;
	border-radius: 0px 0px 0.32rem 0.32rem;
}
.privilege p {
	font-size: 12px;
	color: #ffffff;
}
.svip_see {
	width: 100%;
	margin-top: 1.28rem;
}
.explain p {
	color: #606060;
	font-size: 0.768rem;
	margin-bottom: 0.192rem;
	margin-top: 0.64rem;
}
.footer {
	margin-top: 0.64rem;
	text-align: center;
	font-size: 0.768rem;
	color: #999999;
}
.footer span {
	color: #000000;
}
.pay_btn_wrapper {
	margin-top: 1.92rem;
	width: 100%;
	text-align: center;
}
.pay_btn {
	width: 85%;
	height: 2.88rem;
	border-radius: 1.44rem;
	background: linear-gradient(-90deg, rgba(254, 214, 56, 0.96), rgba(246, 96, 150, 0.96));
	outline: none;
	border: none;
	color: #ffffff;
	line-height: 2.88rem;
	font-size: 1.152rem;
	font-weight: 500;
	letter-spacing: 1px;
}
a {
	text-decoration: none;
	color: #000000;
}

.fix_bottom {
	position: fixed;
	bottom: 0;
	width: 100%;
	left: 0;
	background-color: #ffffff;
}
.mask {
	width: 100%;
	height: 100%;
	position: fixed;
	left: 0;
	top: 0;
	background-color: #000000;
	opacity: 0.3;
	z-index: 20;
	display: none;
}
.mask.active {
	display: block;
}
.tip {
	width: 80%;
	box-shadow: 0px 0.256rem 0.768rem rgba(235, 235, 235, 1);
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: #ffffff;
	z-index: 21;
	text-align: center;
	border-radius: 0.64rem;
	padding: 1.28rem;
	display: none;
}
.tip.active {
	display: block;
}
.tip h5 {
	font-size: 1.024rem;
}

.pay_btn_tip img {
	width: 1.44rem;
	margin-right: 1.28rem;
	vertical-align: 0.32rem;
}

.pay_btn_wrapper .pay_btn_tip {
	width: 100%;
	height: 2.88rem;
	border-radius: 1.44rem;
	line-height: 2.88rem;
	text-align: center;
	outline: none;
	border: none;
	background: #1cb0fd;
	color: #ffffff;
	font-size: 1.152rem;
	margin-top: 0.96rem;
}

.pay_btn_wrapper .wx_btn {
	background: #3abf37;
}
.tip_wrapper {
	animation: fadeDown 0.4s ease;
}
@keyframes fadeDown {
	from {
		top: 40%;
	}
	to {
		top: 50%;
	}
}
[v-cloak] {
	display: none;
}

.svip_free {
	margin-top: 1.28rem;
}
.svip_free .svip_free_item {
	height: 2.176rem;
	display: flex;
	margin-bottom: 1.024rem;
}
.svip_free_item img {
	width: 2.176rem;
	margin-right: 1.024rem;
}
.svip_free_item div {
	height: 2.176rem;
}
.svip_free_item h3 {
	height: 1.088rem;
	line-height: 1.088rem;
	color: #666666;
	font-size: 0.896rem;
	font-weight: 500;
}
.svip_free_item p {
	color: #999999;
	font-size: 0.64rem;
	font-weight: 400;
	height: 1.088rem;
	line-height: 1.088rem;
}

.mint-header {
	background-color: #ffffff;
	color: #333333;
}
.mint-msgbox-message {
	text-align: left;
}
</style>

<style>
.vipcenter .mint-header-button.is-left,
.vipcenter .mint-header-button.is-right {
	text-align: center !important;
}
.vipcenter .mint-header-title {
	font-weight: bold;
}
.vipcenter .mint-header.is-fixed {
	z-index: 10;
}
</style>
