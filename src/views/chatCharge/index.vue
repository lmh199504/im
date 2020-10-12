<template>
	<div class="chatCharge">
		<mt-header fixed title="聊币充值">
			<router-link to="/mine" slot="left"><mt-button icon="back">返回</mt-button></router-link>
			<!-- <mt-button slot="right" @click="showBox">说明</mt-button> -->
		</mt-header>
		<div class="top">
			<div class="my_money">
				<div class="my_money_cl">聊币余额</div>
				<div class="my_money_cl">
					<span>{{ balance }}</span>
					<img src="http://icon.chuyuol.com/h5PayImages/baseImgs/liaobi.png" alt="" />
				</div>
			</div>
		</div>

		<div class="content">
			<div class="choose_wrapper">
				<div class="vip_item" :class="{ active: vip_item == index }" @click="getItem(item, index)" v-for="(item, index) in pay_item" :key="index">
					<div>
						<div class="most_fav" v-if="index == 0">最受欢迎</div>
						<h3>{{ item.time }}</h3>
						<div class="all_money">￥{{ item.money }}</div>
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

			<div class="explain" style="display:none;">
				<h5>钻石和聊币的使用方法：</h5>
				<p>1、钻石可用于语音视频、赠送礼物、发送图片，查看联系方式、发起表演指令、游戏等；</p>
				<p>2、聊币用于发送私信消息；</p>
				<p>3、充值后不可转让，不可退款。</p>
				<p>4、充值如遇到问题，请联系在线客服</p>
			</div>
			<div class="explain" style="display:none;">
				<h5>无限畅聊包的使用方法：</h5>
				<p>1、无限畅聊包初次购买立即获得200000聊币，可用于聊天；</p>
				<p>2、每间隔30日可领取200000聊币；</p>
				<p>3、每30日周期内，聊天条数超过20000条则需另外购买聊币；</p>
				<p>4、持有畅聊包的同时仍需要VIP会员方可聊天。</p>
			</div>
		</div>

		<div class="fix_bottom">
			<div class="pay_btn_wrapper"><button class="pay_btn" @click="showPay">确认充值</button></div>
			<div class="footer">
				充值即默认同意
				<span><a href="javascript:void(0)" @click="toAgree">《会员支付协议》</a></span>
			</div>
		</div>

		<div class="tip pay_tip tip_wrapper" :class="{ active: show_pay }">
			<h5>请选择支付方式</h5>

			<div class="pay_btn_wrapper ">
				<button
					class="pay_btn_tip "
					v-for="(item) in selected_config"
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
var chatList = [
	{ product_id: 44, time: '1聊币', money: '0.01', is_chat: 0, free: ['赠送1钻石', '赠送1聊币'] },
	{ product_id: 43, time: '1聊币', money: '1.00', is_chat: 0, free: ['赠送1钻石', '赠送1聊币'] },
	{ product_id: 34, time: '30聊币', money: '0.01', is_chat: 0, free: [] },
	{ product_id: 33, time: '50聊币', money: '48.00', is_chat: 0, free: ['赠送20聊币'] },
	{ product_id: 32, time: '100聊币', money: '98.00', is_chat: 0, free: [] },
	{ product_id: 35, time: '无限畅聊包', money: '49.00', is_chat: 1, free: ['赠送12钻石'] }
]
export default {
	data() {
		return {
			vip_item: 0, //被选中的价格
			show_pay: false,
			pay_item: chatList, //价格列表
			pay_config: payConfig,
			selected_config: [],
			free: '',
			balance: 0
		}
	},
	created() {
		if (this.pay_item.length != 0) {
			// this.getItem(this.pay_item[this.vip_item], this.vip_item,'first')
			// this.free = this.pay_item[this.vip_item].free
		}

		try {
			if (/android/i.test(navigator.userAgent)) {
				var currencyData = JSON.parse(window.consumer.currency())
				if (currencyData.status == 0) {
					this.balance = currencyData.data.chat_fee
				}
			} else if (/iphone/i.test(navigator.userAgent)) {
				window.webkit.messageHandlers.created.postMessage({
					body: 'created'
				})
			}
		} catch (e) {
			this.balance = '-'
			//TODO handle the exception
		}
	},
	mounted() {},
	methods: {
		getItem(item, index, flag) {
			this.selected_config = []
			this.vip_item = index

			var alipay = []
			var wechat = []
			var alipay_other = []
			var wechat_other = []
			this.pay_config.forEach(pay_item => {
				//金额为0或者在区间之内
				if (
					(pay_item.apply_fee == '0.00' && pay_item.apply_fee_max == '0.00') ||
					(Number(pay_item.apply_fee) <= Number(item.money) && Number(pay_item.apply_fee_max) >= Number(item.money))
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
			var myindex
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
		clickPayBtn(item) {
			var productId = ''
			// console.log(this.pay_item[this.vip_item])

			productId = this.pay_item[this.vip_item].product_id

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
		showPay() {
			this.getItem(this.pay_item[this.vip_item], this.vip_item)
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
	}
}
</script>

<style scoped>
* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}
.top {
	width: 100%;
	height: 8rem;
	background: linear-gradient(-90deg, rgba(158, 56, 254, 0.96), rgba(236, 128, 167, 0.96));
	position: relative;
}
.my_money {
	height: 5.12rem;
	display: flex;
	box-shadow: 0px 0px 2.56rem 0px rgba(174, 173, 173, 0.56);
	width: calc(100vw - 50px);
	position: absolute;
	left: 50%;
	top: 95%;
	transform: translate(-50%, -50%);
	background-color: #fff;
	border-radius: 0.266666rem;
	line-height: 5.12rem;
	padding: 0 2.56rem;
}
.my_money_cl {
	color: #333333;
	flex: 1;
	font-size: 1.152rem;
}
.my_money_cl:nth-child(2) {
	text-align: right;
}
.my_money_cl img {
	width: 1.28rem;
	vertical-align: -0.192rem;
}

.my_money_cl span {
	font-weight: bold;
	font-size: 1.152rem;
	margin-right: 0.32rem;
}
.send {
	height: 3.2rem;
	width: 100%;
	background-color: rgba(255, 0, 255, 0.06);
	margin-top: 3.2rem;
	padding-left: 1.728rem;
	display: flex;
	align-items: center;
}
.send div {
	line-height: 2.16rem;
}
.send img {
	width: 1.6rem;
	height: 1.6rem;
	margin-right: 0.96rem;
	vertical-align: -0.072rem;
}
.send .normal {
	font-size: 0.768rem;
	color: #666666;
	display: inline-block;
	margin-right: 0.32rem;
}
.send .color_span {
	font-size: 0.768rem;
	color: #ff0000;
	display: inline-block;
	margin-right: 0.32rem;
}
.content {
	padding: 0.768rem;
	width: 100%;
	margin-bottom: 5.76rem;
}
.choose_wrapper {
	display: flex;
	margin-bottom: 1.28rem;
	flex-wrap: wrap;
	width: 100%;
	margin-top: 3.2rem;
}
.vip_item {
	/* width: 0.64rem; */
	/* width:calc(100vw / 3 - 0.533333rem + 0.088888rem); */
	width: calc((100% - 0.64rem - 0.64rem) / 3);
	margin-right: 0.64rem;
	border-radius: 0.32rem;
	box-sizing: border-box;
	position: relative;
	text-align: center;
	border: 1px solid #eeeeee;
	margin-bottom: 0.64rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	overflow: hidden;
}

/* .vip_item:last-child{
				margin-right: 0;
			} */
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
	font-size: 0.768rem;
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
.all_money {
	color: #fdac2a;
	margin-top: 0.384rem;
	margin-bottom: 0.96rem;
	font-size: 0.96rem;
	font-weight: 500;
}

.privilege {
	margin-top: 0.192rem;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	background: #fdac2a;
	height: 3.648rem;
	padding: 0.192rem 0;
	/* border-radius:0px 0px 0.133333rem 0.133333rem; */
}
.privilege p {
	font-size: 0.768rem;
	color: #ffffff;
}

.privilege p.active {
	background: linear-gradient(-90deg, rgba(158, 56, 254, 0.96), rgba(236, 128, 167, 0.96));
	border-radius: 0px 0px 0.32rem 0.32rem;
}
.privilege .p3 {
	height: calc(3.648rem / 3);
	line-height: calc(3.648rem / 3);
}

.privilege .p2 {
	height: calc(3.648rem / 2);
	line-height: calc(3.648rem / 2);
}
.privilege .p1 {
	height: 3.648rem;
	line-height: 3.648rem;
}

.explain {
	margin-top: 0.48rem;
}
.explain h5 {
	margin-bottom: 0.256rem;
	font-size: 0.768rem;
}
.explain p {
	color: #606060;
	font-size: 0.768rem;
	line-height: 1.28rem;
}

.pay_btn_wrapper {
	margin-top: 0.48rem;
	width: 100%;
	text-align: center;
}
.pay_btn {
	width: 85%;
	height: 2.88rem;
	border-radius: 1.44rem;
	background: linear-gradient(-90deg, rgba(158, 56, 254, 0.96), rgba(236, 128, 167, 0.96));
	outline: none;
	border: none;
	color: #ffffff;
	line-height: 2.88rem;
	font-size: 1.152rem;
	font-weight: 500;
	letter-spacing: 1px;
}
.footer {
	margin-top: 0.64rem;
	text-align: center;
	font-size: 0.768rem;
	color: #999999;
	margin-bottom: 0.32rem;
}
.footer span {
	color: #000000;
}
a {
	text-decoration: none;
	color: #000000;
}
@media screen and (max-width: 300px) {
	.send div {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
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
	vertical-align: -0.256rem;
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
.choose_wrapper_top {
	margin-top: 3.2rem;
}

.bar {
	width: 100%;
	height: 3.84rem;
	position: fixed;
	top: 0;
	background-color: #ffffff;
	padding: 1.28rem 1.152rem 0 1.152rem;
}
.bar img {
	width: 0.768rem;
	position: absolute;
}
#title {
	position: absolute;
	text-align: center;
	font-size: 1.28rem;
	left: 50%;
	top: 50%;
	width: 50%;
	transform: translate(-50%, -50%);
}
.mint-header {
	background-color: transparent;
	color: #333333;
}
.mint-msgbox-message {
	text-align: left;
}
</style>

<style>
.chatCharge .mint-header-button.is-left,
.chatCharge .mint-header-button.is-right {
	text-align: center !important;
}
.chatCharge .mint-header-title {
	font-weight: bold;
}
.chatCharge .mint-header.is-fixed {
	z-index: 10;
}
</style>
