	if(window.sessionStorage){   
		var language = sessionStorage.getItem("language");
		var lanItem = sessionStorage.getItem("lanItem");
			if(language!=null && lanItem!=null){
				$(".language").attr("class", language);
				$(".language").next().remove();
				languages(Number(lanItem));
			}else{
				$(".language").attr("class", "language language_en");
				$(".language").next().remove();
				languages(2);
			}
	}else{
		$(".language").attr("class", "language language_en");
		$(".language").next().remove();
		languages(2);
	}   
$(".language").click(function() {
					var className = $(this).attr("class");
					if(this.parentNode.children.length>1){
						$(".language").next().remove();
						return
					}
					var msg = "";
					if (className.indexOf("language_en") != -1) {
						msg = "<div class=\"select_language\"><div class=\"option_zh\" onclick='changeLanguage(this)'></div>" +
								"<div class=\"option_hg\" onclick='changeLanguage(this)'></div>" +
								"<div class=\"option_ru\" onclick='changeLanguage(this)'></div></div>";
					} else if (className.indexOf("language_zh") != -1) {
						msg = "<div class=\"select_language\"><div class=\"option_en\" onclick='changeLanguage(this)'></div>" +
								"<div class=\"option_ru\" onclick='changeLanguage(this)'></div>" +
								"<div class=\"option_hg\" onclick='changeLanguage(this)'></div></div>";
					} else if (className.indexOf("language_ru") != -1){
						msg = "<div class=\"select_language\"><div class=\"option_en\" onclick='changeLanguage(this)'></div>" +
								"<div class=\"option_zh\" onclick='changeLanguage(this)'></div>" +
								"<div class=\"option_hg\" onclick='changeLanguage(this)'></div></div>";
					} else {
						msg = "<div class=\"select_language\"><div class=\"option_en\" onclick='changeLanguage(this)'></div>" +
								"<div class=\"option_zh\" onclick='changeLanguage(this)'></div>" +
								"<div class=\"option_ru\" onclick='changeLanguage(this)'></div></div>"
					}
					$(this).after(msg);
				});

function changeLanguage(o) {
	var className = $(o).attr("class");
	var type = 0; 
	if (className.indexOf("option_zh") != -1) {
		className = "language language_zh";
		type = 1;
	} else if (className.indexOf("option_en") != -1) {
		className = "language language_en";
		type = 2;
	} else if (className.indexOf("option_ru") != -1){
		className = "language language_ru";
		type = 3;
	}else {
		className = "language language_hg";
		type = 4;
	}
	$(".language").attr("class", className);
	$(".language").next().remove();
	languages(type);
	sessionStorage.setItem("language", className);
	sessionStorage.setItem("lanItem", type);
}

/**
 * change langusge
 * @param {Object} type
 */
function languages(type) {
	var listHead = $(".pcMenu").children();
	var list = document.getElementsByClassName("list");
	var listRight = $(".tableHeader").children();
	var listFootH3 = $(".totalRewardList").children().find("h3");
	var listFootP = $(".totalRewardList").children().find("p");
	var listFootSec = $(".section");
	switch (type) {
	case 1:
		$(".copyUrl").text("邀请链接");
        $(listHead[0]).children().text("官网");
        $(listHead[1]).children().text("规则");
		$(listHead[2]).children().text("关于我们");
		$(listHead[3]).children().text("应用");
		$($(list[0]).children()[0]).text("邀请码");
		$($(list[1]).children()[0]).text("节点数");
		$($(list[2]).children()[0]).text("分红等级");
		$($(list[3]).children()[0]).text("节点等级");
		$($(list[4]).children()[0]).text("入股总额");
		$($(list[5]).children()[0]).text("钱包余额");
		$($(".playWrap").find(".shan")[0]).text("采用以太幣付费的公平分红游戏")
		$($($(".playWrap").find(".shan")[1]).find("a")[0]).text("可被证明的公平")
		$($(".playWrap").find(".shan")[1]).find("span").text("分红游戏由简单的")
		$($($(".playWrap").find(".shan")[1]).find("a")[1]).text("开源合约提供支持")
		$(".platformAmount").find("h3").text("所有赌注");
		$(".yourAmount").text("您的金额");
		$(".toInvest").text("投注");
		$(".active").text("结算记录");
		$($(listRight[0])).text("时间");
		$($(listRight[1])).text("奖赏");
		$($(listFootH3[0])).text("总收入");
		$($(listFootH3[1])).text("资本");
		$($(listFootH3[2])).text("排队金额");
		$($(listFootH3[3])).text("分红总额");
		$($(listFootH3[4])).text("奖励总额");
		$($(listFootH3[5])).text("等待发放");
		$($(listFootP[0])).text("财富自由");
		$($(listFootP[1])).text("小额投资");
		$($(listFootP[2])).text("排队");
		$($(listFootP[3])).text("不断积累");
		$($(listFootP[4])).text("分享的力量");
		$($(listFootP[5])).text("至少 0.1ETH");
		$(".withdraw").text("提现");
		$(".betsHtml").html("赌注");
		$(listFootSec[0]).find("h4").text("我们的游戏");
		$($(listFootSec[0]).find("a")[0]).text("博彩");
		$($(listFootSec[0]).find("a")[1]).text("金字塔");
		$(listFootSec[1]).find("h4").text("区块链");
		$($($(listFootSec[1]).find("a")[0]).find("small")[0]).text("您的余额");
		$($($(listFootSec[1]).find("a")[0]).find("small")[1]).text("以太币");
		$($(listFootSec[1]).find(".netDesc")).html("网络:");
		$($(listFootSec[1]).find("a")[2]).text("智能合约");
		$(listFootSec[2]).find("h4").text("联系我们");
		$($(listFootSec[2]).find("a")[0]).text("电报");
		$($(listFootSec[2]).find("a")[1]).text("电子邮件");
		$($(listFootSec[2]).find("a")[2]).text("服务条款");
		$(".awardMoney").text("金额");
		$(".awardTime").text("时间");
		$(".fairThing").html("<p>哪种在线游戏可以证明其公平性？</p> "+
			"	<p>简单来说，可以证明其公平性意味着任何投入及投注结果都可以进行独立验证，并且运营商或其他玩家都无法没篡改智能合约规定的过程和结果。</p>"+
			"	<br /> "+
				"	<p>fairwin.me 是否可以证明其公平性？</p>"+
				"	<p>是的。 整个游戏玩法都由以太坊智能合约进行控制，并且智能合约是开源的。 任何一方都可以对合约进行审核，并检查任何交易，确保fairwin.me以及恶意玩家都不会拥有合约中ETH的所有权并串改智能合约规定的过程和结果。</p>"+
				"	<br/>"+
				"	<p>您与其他游戏网站有什么不同？</p>"+
				"	<p>我们的游戏非常简单易懂，只需要下注ETH并按照智能合约既定的规则获取ETH即可。</p>"+
				"	<br/>"+
				"	<p>您明白了吗？ 请尽可能用通俗易懂的方式向我解释一下它是如何运作的。</p>"+
				"	<p>我们的智能合约是开源的并且可以被任何人来证明没有任何后门及串改结果的可能性，用户投入的以太坊被锁定在智能合约上并不属于任何人，开发者也无法拿走智能合约上的ETH，只能按照智能合约既定的规则来公平的按照游戏规则获取ETH。</p>"+
				"	<br/>"+
				"	<p>fairwin.me是否可以篡改流程或者拿走合约中所有的ETH？</p>"+
				"	<p>不可以，因为合约没有任何后门能拿走其中的ETH，这就意味着运营商在接受用户的投注后无法转移任何ETH，如果您看不懂智能合约，可以邀请专业的开发者来对公开的合约代码进行审计。</p>");
		$(".serviceKuan").html("<h1>服务条款</h1>"+
				"<p>fairwin.me(“我们”)的网站提供以太坊区块链上的智能合约界面，它会根据外部因素而接收以太币并转账不同数量的以太币。</p>"+
				"<p>我们无法验证各辖区内服务的合法性，也不能为您提供任何法律意见。您应当按照上述方式遵守您所在司法管辖区内有关使用以太币的任何相关法律、政策和法规，并由您个人完全承担相关责任。</p>"+
				"<p>玩基于智能合约的游戏可能会使玩家获得或损失以太币。我们对所提供游戏的结果不承担任何责任。</p>"+
				"<p>我们保留修改网站及其服务以及这些条款的权利，恕不另行通知。</p>");
			break;
		break;
	case 2:
		$(".copyUrl").text("Invitation link");
        $(listHead[0]).children().text("Official website");
        $(listHead[1]).children().text("Rule");
		$(listHead[2]).children().text("About us");
		$(listHead[3]).children().text("Application");
		$($(list[0]).children()[0]).text("Invitation code");
		$($(list[1]).children()[0]).text("Node number");
		$($(list[2]).children()[0]).text("Level of share out bonus");
		$($(list[3]).children()[0]).text("Node level");
		$($(list[4]).children()[0]).text("In total");
		$($(list[5]).children()[0]).text("The wallet balance");
		$($(".playWrap").find(".shan")[0]).text("Equitable dividend-sharing game with payment in ethernic currency");
		$($($(".playWrap").find(".shan")[1]).find("a")[0]).text("Provable fairness");
		$($(".playWrap").find(".shan")[1]).find("span").text("The dividend-sharing game is simple");
		$($($(".playWrap").find(".shan")[1]).find("a")[1]).text("Open Source Contracts Provide Support");
		$(".platformAmount").find("h3").text("All Wagers");
		$(".yourAmount").text("Your amount");
		$(".toInvest").text("Determine");
		$(".active").text("Settlement record");
		$($(listRight[0])).text("Time");
		$($(listRight[1])).text("Reward");
		$($(listFootH3[0])).text("Gross income");
		$($(listFootH3[1])).text("Capital");
		$($(listFootH3[2])).text("Queue amount");
		$($(listFootH3[3])).text("Total dividends");
		$($(listFootH3[4])).text("Total reward");
		$($(listFootH3[5])).text("Waiting for payment");
		$($(listFootP[0])).text("Wealth freedom");
		$($(listFootP[1])).text("Petty investment");
		$($(listFootP[2])).text("Line up");
		$($(listFootP[3])).text("Continuous accumulation");
		$($(listFootP[4])).text("The Power of Sharing");
		$($(listFootP[5])).text("At least 0.1 ETH");
		$(".withdraw").text("Withdraw");
		$(".betsHtml").html("bets");
		$(listFootSec[0]).find("h4").text("Our game");
		$($(listFootSec[0]).find("a")[0]).text("Gambling");
		$($(listFootSec[0]).find("a")[1]).text("Pyramid");
		$(listFootSec[1]).find("h4").text("Block chain");
		$($($(listFootSec[1]).find("a")[0]).find("small")[0]).text("Your balance");
		$($($(listFootSec[1]).find("a")[0]).find("small")[1]).text("Ether currency");
		$($(listFootSec[1]).find(".netDesc")).html("Network:");
		$($(listFootSec[1]).find("a")[2]).text("Intelligent contract");
		$(listFootSec[2]).find("h4").text("Contact us");
		$($(listFootSec[2]).find("a")[0]).text("Telegram");
		$($(listFootSec[2]).find("a")[1]).text("E-mail");
		$($(listFootSec[2]).find("a")[2]).text("Terms of service");
		$(".awardMoney").text("money");
		$(".awardTime").text("time");
		$(".fairThing").html("<p> Which online game can prove its fairness? </p>"+
				"<p> Simply put, proving fairness means that any investment and betting results can be independently verified, and operators or other players can not tamper with the process and results of smart contract provisions. </p>"+
				"<br/>"+
				"<p> Can fairwin. me prove its fairness? </p>"+
				"<p> Yes. The whole gameplay is controlled by ETF Intelligent Contracts, and the Intelligent Contracts are open source. Either party can review the contract and check any transactions to ensure that fairwin. me and malicious players will not own ETH in the contract and alter the process and results of the intelligent contract. </p>"+
				"<br/>"+
				"<p> How are you different from other game websites? </p>"+
				"<p> Our game is very simple and easy to understand, just bet on ETH and get ETH according to the rules of intelligent contract. </p>"+
				"<br/>"+
				"<p> Do you understand? Please explain to me how it works as easily as possible. </p>"+
				"<p> Our smart contract is open source and can be proved by anyone that there is no possibility of backdoor and alteration results. User input Ethernet workshop is locked in the smart contract and does not belong to anyone. Developers can not take the ETH from the smart contract. They can only obtain the ETH fairly according to the rules of the smart contract according to the rules of the game. </p>"+
				"<br/>"+
				"<p> Can fairwin. me tamper with the process or take away all the ETH in the contract? </p>"+
				"<p> No, because there is no backdoor to take ETH from the contract, which means that the operator can not transfer any ETH after accepting the user's bet. If you can't understand the intelligent contract, you can invite professional developers to audit the open contract code. </p>")
		$(".serviceKuan").html("<h1> Terms of Service</h1>"+
				"<p> fairwin.me ("+"us"+") provides an intelligent contract interface on the chain of Ethernet blocks, which receives Ethernet coins and transfers different amounts of Ethernet coins according to external factors. </p>"+
				"<p> We are unable to verify the legitimacy of services within our jurisdictions, nor can we provide you with any legal advice. In accordance with the above, you should abide by any relevant laws, policies and regulations concerning the use of ether coins in your jurisdiction, and take full responsibility for them personally. </p>"+
				"<p> Playing games based on smart contracts may result in players gaining or losing ether coins. We are not responsible for the results of the games provided. </p>"+
			   "<p> We reserve the right to modify the website and its services and these terms without notice. </p>");
		break;
	case 3:
		$(".copyUrl").text("招待リンク");
        $(listHead[0]).children().text("公式サイト");
		$(listHead[1]).children().text("ルール");
		$(listHead[2]).children().text("アバウトアス");
		$(listHead[3]).children().text("てきよう");
		$($(list[0]).children()[0]).text("招待コード");
		$($(list[1]).children()[0]).text("ノード数");
		$($(list[2]).children()[0]).text("配当の等級");
		$($(list[3]).children()[0]).text("ノードレベル");
		$($(list[4]).children()[0]).text("出資総額");
		$($(list[5]).children()[0]).text("財布の残高");
		$($(".playWrap").find(".shan")[0]).text("エーテルで支払われる公平配当ゲームを採用しています");
		$($($(".playWrap").find(".shan")[1]).find("a")[0]).text("証明できる公平");
		$($(".playWrap").find(".shan")[1]).find("span").text("配当ゲームは簡単です");
		$($($(".playWrap").find(".shan")[1]).find("a")[1]).text("オープンソース契約のサポート");
		$(".platformAmount").find("h3").text("オール・ワグナー");
		$(".yourAmount").text("あなたの 金額");
		$(".toInvest").text("決定する");
		$(".active").text("決済記録");
		$($(listRight[0])).text("じかん");
		$($(listRight[1])).text("ほうしゅう");
		$($(listFootH3[0])).text("総収入");
		$($(listFootH3[1])).text("資本");
		$($(listFootH3[2])).text("列の金額");
		$($(listFootH3[3])).text("配当総額");
		$($(listFootH3[4])).text("奨励総額");
		$($(listFootH3[5])).text("配布待ち");
		$($(listFootP[0])).text("富の自由");
		$($(listFootP[1])).text("小口投資");
		$($(listFootP[2])).text("列を作る");
		$($(listFootP[3])).text("積み重ねる");
		$($(listFootP[4])).text("分かち合う力");
		$($(listFootP[5])).text("少なくとも0.1 ETH");
		$(".withdraw").text("現金で出す");
		$(".betsHtml").html("賭け");
		$(listFootSec[0]).find("h4").text("私たちのゲーム");
		$($(listFootSec[0]).find("a")[0]).text("宝くじを博する");
		$($(listFootSec[0]).find("a")[1]).text("ピラミッド");
		$(listFootSec[1]).find("h4").text("ブロックチェーン");
		$($($(listFootSec[1]).find("a")[0]).find("small")[0]).text("あなたの残高");
		$($($(listFootSec[1]).find("a")[0]).find("small")[1]).text("エーテル円");
		$($(listFootSec[1]).find(".netDesc")).html("ネット：");
		$($(listFootSec[1]).find("a")[2]).text("インテリジェント契約");
		$(listFootSec[2]).find("h4").text("連絡します");
		$($(listFootSec[2]).find("a")[0]).text("電報");
		$($(listFootSec[2]).find("a")[1]).text("電子メール");
		$($(listFootSec[2]).find("a")[2]).text("サービス条項");
		$(".awardMoney").text("金额");
		$(".awardTime").text("時間");
		$(".fairThing").html("<p>どのオンラインゲームが公平性を証明できますか？</p>"+
					"<p>簡単に言えば、その公平性はどの投入と賭けの結果も独立して検証できるということを証明できます。また、キャリアや他のプレイヤーはスマート契約に規定されたプロセスと結果を改竄していないことができません。</p>"+
					"<br/>"+
					"<p>fairwin.meはその公平性を証明できますか？</p>"+
					"<p>はいゲーム全体は太坊の知能契約によってコントロールされ、知能契約はオープンします。いずれの当事者も契約を審査し、任意の取引を確認し、fairwin.me及び悪意のあるプレイヤーが契約中のETHの所有権を持っていないことを確認し、知能契約に規定されたプロセスと結果を直列に修正することができます。</p>"+
					"<br/>"+
					"<p>他のゲームサイトとはどのような違いがありますか？</p>"+
					"<p>私達のゲームはとても分かりやすくて、ETHを注ぎ込むだけで、知能契約で決められたルールでETHを取得すればいいです。</p>"+
					"<br/>"+
					"<p>分かりましたか？できるだけ分かりやすく説明してください。</p>"+
					"<p>私達のスマート契約はオープンソースで、誰にも裏口と改ざん結果がないことを証明されます。ユーザーが投入したエーテル坊はスマート契約にロックされています。誰にも属していません。ゲームルールはETHを取得します。</p>"+
					"<br/>"+
					"<p>fairwin.meはプロセスを改竄したり、契約の中のすべてのETHを持っていくことができますか？</p>"+
					"<p>できません。契約の裏口がないのでETHを持ち去ることができます。これは運営者がユーザーの投注を受けてからETHを移行できないことを意味します。もしスマート契約が読めないなら、専門の開発者を招待して公開された契約コードを監査します。</p>")
		$(".serviceKuan").html("<h1>サービス条項</h1>"+
				"<p>fairwin.me（「私たち」）のウェブサイトでは、イーサドルを外部要因によって受信し、異なる数のイーサドルを振り込むイーサドルを提供しています。</p>"+
				"<p>私たちは各管轄内のサービスの合法性を検証できません。また、いかなる法的意見も提供できません。上記の方式に従って、あなたの所属する司法管内のエーテル貨幣の使用に関するいかなる関連法律、政策と法規を遵守し、あなた個人が完全に関連責任を負うべきです。</p>"+
				"<p>スマート契約に基づくゲームをすると、プレイヤーがエーテル円を獲得したり、失ったりする可能性があります。私たちはゲームを提供した結果に対しては責任を負いません。</p>"+
				"<p>私達はサイトとサービス及びこれらの条項を修正する権利を保留しています。別途に通知しないようにしてください。</p>")
		break;
	default:
		$(".copyUrl").text("초대 링크");
        $(listHead[0]).children().text("관문");
        $(listHead[1]).children().text("규칙");
		$(listHead[2]).children().text("우리");
		$(listHead[3]).children().text("응용");
		$($(list[0]).children()[0]).text("초청 코드");
		$($(list[1]).children()[0]).text("노드 수");
		$($(list[2]).children()[0]).text("배당 등급");
		$($(list[3]).children()[0]).text("노드 레벨");
		$($(list[4]).children()[0]).text("주식 총액");
		$($(list[5]).children()[0]).text("지갑 잔액");
		$($(".playWrap").find(".shan")[0]).text("태화로 비용을 지불하는 공정한 배당을 채택하다");
		$($($(".playWrap").find(".shan")[1]).find("a")[0]).text("증명 가능한 공정");
		$($(".playWrap").find(".shan")[1]).find("span").text("배당 게임은 간단하게");
		$($($(".playWrap").find(".shan")[1]).find("a")[1]).text("개발 계약 지원");
		$(".platformAmount").find("h3").text("모든 도박");
		$(".yourAmount").text("너의 금액");
		$(".toInvest").text("주석을 달다");
		$(".active").text("결산 기록");
		$($(listRight[0])).text("시간");
		$($(listRight[1])).text("상");
		$($(listFootH3[0])).text("총수입");
		$($(listFootH3[1])).text("자본");
		$($(listFootH3[2])).text("정렬 금액");
		$($(listFootH3[3])).text("배당 총액");
		$($(listFootH3[4])).text("상장 총액");
		$($(listFootH3[5])).text("발급 대기");
		$($(listFootP[0])).text("부의 자유");
		$($(listFootP[1])).text("소액 투자");
		$($(listFootP[2])).text("줄을 서다");
		$($(listFootP[3])).text("부단히 쌓이다");
		$($(listFootP[4])).text("공유의 힘");
		$($(listFootP[5])).text("최소한 0.1ETH");
		$(".withdraw").text("현금을 제시하다");
		$(".betsHtml").html("걸다");
		$(listFootSec[0]).find("h4").text("우리 게임");
		$($(listFootSec[0]).find("a")[0]).text("광채");
		$($(listFootSec[0]).find("a")[1]).text("피라미드");
		$(listFootSec[1]).find("h4").text("블록 체인");
		$($($(listFootSec[1]).find("a")[0]).find("small")[0]).text("당신의 잔액");
		$($($(listFootSec[1]).find("a")[0]).find("small")[1]).text("이태권");
		$($(listFootSec[1]).find(".netDesc")).html("네트워크:");
		$($(listFootSec[1]).find("a")[2]).text("지능 계약");
		$(listFootSec[2]).find("h4").text("연락 주세요.");
		$($(listFootSec[2]).find("a")[0]).text("전보");
		$($(listFootSec[2]).find("a")[1]).text("이메일");
		$($(listFootSec[2]).find("a")[2]).text("서비스 조항");
		$(".awardMoney").text("금액");
		$(".awardTime").text("시간");
		$(".fairThing").html("<p> 어떤 온라인 게임은 공정성을 증명할 수 있습니까?</p>"+
					"<p> 단순히 공정성은 어떤 투입 및 주석 결과도 독립 검증을 할 수 있다는 것을 증명할 수 있고, 운영자나 다른 게이머들은 지능 계약규정의 과정과 결과를 왜곡할 수 없다.</p>"+
					"<br/>"+
					"<p> fairwin.me 공정성을 증명할 수 있습니까?</p>"+
					"<p> 네.게임 완법은 모두 태방 지능 계약이 통제되고 지능 계약은 시작이다.어느 쪽도 계약에 대해 심사를 할 수 있고 어떤 거래를 점검할 수 있으며, fairwin.me 및 악의게이머는 계약에서 ETH 의 소유권을 갖고 지능계약규정을 변경하는 과정과 결과를 보존할 수 있다.</p>"+
					"<br/>"+
					"<p> 다른 게임 사이트와 뭐가 달라요?</p>"+
					"<p> 우리의 게임은 매우 간단하고 알기 쉽고 ETH 만 주석을 달고 지능계약이 정해진 규칙에 따라 ETH 를 얻으면 된다.</p>"+
					"<br/>"+
					"<p> 알겠습니까?가능한 한 통속적이고 이해하기 쉬운 방식으로 그것을 어떻게 작동하는지 설명해 주십시오.</p>"+
					"<p> 우리의 지능 계약은 시작된 것이며 어떤 누구도 뒷문 및 꼬치 결과를 입증할 가능성은 없다는 것을 증명할 수 있다. 사용자가 투입한 이태방은 지능 계약에 속하지 않고 개발자도 스마트 계약을 가져갈 수 없는 ETH 로 지능 계약의 규칙에 따라 공정하게 게임 규칙에 따라 ETH 를 얻을 수 있다.</p>"+
					"<br/>"+
					"<p> fairwin.me. 프로세스를 바꿀 수 있거나 계약에서 모든 ETH 를 가져갈 수 있습니까?</p>"+
					"<p> 안 됩니다. 계약이 그 안에 있는 ETH 가 없기 때문에 운영자가 사용자의 투자를 받아서 어떤 ETH 를 이동할 수 없음을 의미합니다. 지능계약을 모르면 전문 개발자를 초청할 수 있는 계약자에 대한 심사를 진행할 수 있습니다.</p>")
		$(".serviceKuan").html("<h1> 서비스 조항 </h1>"+
				"<p> fairwin.me ('우리') 사이트 이태방 구간 체인 지능 계약 인터페이스를 제공해 외부 요소에 따라 이월한 수량의 이태전을 수령하는 이태전.</p>"+
				"<p> 우리는 각 구역 내 서비스의 합법성을 검증할 수 없으며 어떠한 법적 의견을 제공할 수 없습니다.당신은 상술한 방식에 따라 당신이 있는 사법관 관할구역 내에서 이태화의 어떤 법률, 정책과 법규를 사용해야 하며, 개인이 책임을 전적으로 책임져야 합니다.</p>"+
				"<p> 지능 계약을 바탕으로 하는 게임은 게이머가 얻거나 손해를 볼 수 있다.우리는 게임의 결과에 대해 어떠한 책임도 지지 않는다.</p>"+
		        "<p> Google은 사이트 및 그 서비스 및 이런 조항의 권리를 보류하고 있습니다. 별도로 통지할 수 없습니다.</p> ")
	}
}
