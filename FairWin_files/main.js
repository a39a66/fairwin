var address;
var ipUrl = "https://fairwin.me:444"; 
//is connect
var isWe3 = false;
//is login
var isWebLogin = false;
var contract = null;
//valiable Amount
var valiableAmount = 0;
//have InAmount
var haveInAmount = 0;
var beginTime = 0;
var inAmoungt = 0;
var contract_address ="";
var currentNet = 1;
var netDesc = "";
var defalutCode = "";
var netUrl = "https://etherscan.io/";

//most money
window.addEventListener('load', function() {
	//get conttract
	if(window.location.href.lastIndexOf("www")>=0){
		ipUrl = "https://www.fairwin.me:444"; 
	}
//	if(window.location.href.lastIndexOf("www")==0){
//		ipUrl = "www.fairwin.me:444"; 
//	}
	var className = $(".language").attr("class");
	//$(".web-innerrequired").show();
	$(".getWallet").hide();
	$(".changeMainNet").hide();
	$(".web3-required").hide();
	$(".masking3").hide();
	var msg = "";
	$(".withdraw").attr("disabled","disabled")
	$(".withdraw").css("background-color","grey")
	 $(".lineLi").hide();
    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
	//$.ajax({
	//		url:ipUrl+'/CapitalServer/GetContract',
	//		type:"get",
	//		dataType : "jsonp", 
	//        jsonp : 'callback',
	//		success:function(e){
	//			var e = e;
	//			if(e.success){
					contract_address = '0x01EaCc3Ae59eE7fBBC191d63E8e1ccfdAc11628C';
					defalutCode = '7XHCQD';
					
					if($(".invitors").val() == null || $(".invitors").val() == "" ){
						
						$(".invitors").val(defalutCode);
					}
					$(".smallTil").html("Default is "+defalutCode);
					if(contract_address == '' || contract_address == null){
						bcAlertBox("contract is reload failed");
						return;
					};
				    if (typeof web3 !== 'undefined') {
				    	getChange();
				        isWe3 = true;
				        if (window.ethereum) {
							 ethereum.enable();
						    }
				        //Initialization contract
				        initContract(web3);
				        // Use the browser's ethereum provider
				        var provider = web3.currentProvider;
				        if (web3.currentProvider.isMetaMask == true){
				            /*This is to determine whether you have logged in or not, coinbase is the account you choose at this time.*/
				        	//alert(web3.eth.coinbase);
				            if (web3.eth.coinbase == null || web3.eth.coinbase=='null') {
				            	if (className.indexOf("language_en") != -1) {
									msg ="Please login to MetaMask Wallet first";
								} else if (className.indexOf("language_zh") != -1) {
									msg = "请先登录MetaMask钱包";
								} else if (className.indexOf("language_ru") != -1) {
								     msg = "先にMetaMask財布に登録してください。";
							    } else {
							     msg = "Metask 지갑 로그인해주세요.";
							    }
				                window.bcAlertBox(msg);
				                isWebLogin = false;
				            } else {
				                isWebLogin = true;
				                //initAccount(web3);
				            }
				        } else {
				            // console.log("no MetaMask");
				        }
				        if (web3.currentProvider.isMathWallet == true){
				        	//alert("mathWallet");
				        	 /*This is to determine whether you have logged in or not, coinbase is the account you choose at this time.*/
				            if (web3.eth.coinbase == null || web3.eth.coinbase=='null') {
				            	if (className.indexOf("language_en") != -1) {
									msg ="Please login to Wallet first";
								} else if (className.indexOf("language_zh") != -1) {
									msg = "请先登录钱包";
								} else if (className.indexOf("language_ru") != -1) {
								     msg = "先に財布に登録してください。";
							    } else {
							     msg = "Metask 지갑 로그인해주세요.";
							    }
				                window.bcAlertBox(msg);
				                isWebLogin = false;
				            } else {
				                isWebLogin = true;
				                //initAccount(web3);
				            }
				        } else {
				        	 if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
				        		 if (web3.eth.coinbase == null || web3.eth.coinbase=='null') {
						            	if (className.indexOf("language_en") != -1) {
											msg ="Please login to Wallet first";
										} else if (className.indexOf("language_zh") != -1) {
											msg = "请先登录钱包";
										} else if (className.indexOf("language_ru") != -1) {
										     msg = "先に財布に登録してください。";
									    } else {
									     msg = "Metask 지갑 로그인해주세요.";
									    }
						                window.bcAlertBox(msg);
						                isWebLogin = false;
						            } else {
						                isWebLogin = true;
						                initAccount(web3);
						            }
				        	 }
				        }
				    } else {
				    	if (className.indexOf("language_en") != -1) {
							msg ="Available ETH wallet was not detected";
						} else if (className.indexOf("language_zh") != -1) {
							msg = "未检测到可用ETH钱包";
						} else if (className.indexOf("language_ru") != -1) {
						     msg = "利用可能なETHウォレットが検出されませんでした。";
					    } else {
					     msg = "ETH 지갑을 찾을 수 없음";
					    }
		                window.bcAlertBox(msg);
		                $(".web3-required").show();
		                $(".getWallet").show();
				    	$(".toInvest").hide();
				        isWe3 = false;
				        // console.log('No web3? You should consider trying MetaMask!')
				    }
				    
				//}else{
			//		bcAlertBox("contract is reload failed");
			//	}
		//	},
		//	error:function(e){
		//		bcAlertBox("contract is reload failed");
		//		console.info(e);
		//	}
	//});
})
//change account
var account ;
var accountInterval ;
var times = 1;
function getChange(){
	accountInterval = setInterval(function() {
	    if (web3.eth.accounts[0] !== account) {
	    	times =2;
          	$(".toInvest").attr("disabled","disabled");
	        account = web3.eth.accounts[0];
	        initAccount(web3);
	    }
	}, 100);
}

// init MetaMask 
function initAccount(web3) {
	web3.version.getNetwork((err, netId) => {
		  switch (netId) {
		    case "1":
		      // console.log('This is mainnet');
		      currentNet = 1;
		      netDesc = "main net";
		      netUrl = "https://etherscan.io/";
		      break
		    case "2":
		      // console.log('This is the deprecated Morden test network.');
		      currentNet = 2;
		      netDesc = "Morden net";
		      break
		    case "3":
		      // console.log('This is the ropsten test network.')
		      currentNet = 3;
		      netDesc = "ropsten net";
		      netUrl = "https://ropsten.etherscan.io/";
		      break
		    case "4":
		      // console.log('This is the Rinkeby test network.')
		      currentNet = 5;
		      netDesc = "Rinkeby net";
		      break
		    case "42":
		      // console.log('This is the Kovan test network.')
		      currentNet = 5;
		      netDesc = "Kovan net";
		      break
		    default:
		      currentNet = 0;
		      // console.log('This is an unknown network.')
		      netDesc = "unknown net";
		  }
		  $(".currentnet").html(netDesc);
		  if(netId!=1){
			  $(".web3-required").show();
			  $(".changeMainNet").show();
			  $(".toInvest").hide();
		  }
		})
    /**
     * get Metamask account
     * @param err
     * @param accounts
     * @returns
     */ 
    web3.eth.getAccounts(function(err, accounts) {
    	var className = $(".language").attr("class");
		var msg = "";
		//alert(JSON.stringify(accounts));
        if (accounts!=null && accounts.length>0){
            address = accounts[0].toString();
            if (className.indexOf("language_en") != -1) {
				msg ="Current account"+address;
			} else if (className.indexOf("language_zh") != -1) {
				msg = "<p>当前账户"+address+"</p>";
			}  else if (className.indexOf("language_ru") != -1) {
			    msg = "現在のアカウント"+address;
			} else {
			    msg = "현재 계정"+address;
			 }
            if(times !=1){
            	bcAlertBox(msg);
            }
            isWebLogin = true;
            var balance = 0;
            $(".balance").html(balance);
            web3.eth.getBalance(address,function(err, result){
            	balance = web3.fromWei(parseInt(JSON.stringify(result).replace(/\"/g,"")), 'ether');
            	balance = Number(balance.toString().match(/^\d+(?:\.\d{0,2})?/));
                $(".balance").html(balance+"ETH");
            });
            //bcAlertBox(balance.toString());
            isHaveCode = false;
        	$(".invitors").removeAttr("disabled");
        	if(typeof beCode != 'undefined' &&beCode != "" && beCode !=null){
        		$(".invitors").val(beCode);
        	}else{
        		$(".invitors").val(defalutCode);
        	}
        	//$(".invitors").val(defalutCode);
            getUserInfo(address);
            //getCode();
            //Platform parameters
            getBeginTime();
            getRewardList();
            setInfo();
            
        }else{
            isWebLogin = false;
            if (className.indexOf("language_en") != -1) {
				msg ="no account";
			} else if (className.indexOf("language_zh") != -1) {
				msg = "<p>无可用账户</p>";
			}  else if (className.indexOf("language_ru") != -1) {
			    msg = "利用可能なアカウントがありません";
			} else {
			    msg = "사용 가능한 계정 없음";
			 }
            bcAlertBox(msg);
        }

    });
}
//设置内容
//var className1 = $(".language").attr("class");
//if (className1.indexOf("language_en") != -1) {
//	$('.toInvest').html('In Settlement...');
//} else if (className1.indexOf("language_zh") != -1) {
//	$('.toInvest').html('结算中...');
//} else if (className1.indexOf("language_ru") != -1){
//	$('.toInvest').html('決済中です...');
//}else {
//	msg1 = "결산 중";
//	$('.toInvest').html('결산 중...');
//}
//$(".toInvest").css("color","white")
//$(".toInvest").css("background-color","grey")
$('.toInvest').click(function(){
	if(!$(".invitors").prop("disabled")){
		$('.masking2').css('display','block');
	}else{
		invest();
	}
//	var className1 = $(".language").attr("class");
//	if (className1.indexOf("language_en") != -1) {
//		msg1 = "After the settlement is completed, betting can be made.";
//	} else if (className1.indexOf("language_zh") != -1) {
//		msg1 = "结算完成后可以投注";
//	} else if (className1.indexOf("language_ru") != -1){
//		msg1 = "決済が完了したら投注できます。 ";
//	}else {
//		msg1 = "결제 완료 후 투자할 수 있습니다.";
//	}
//         bcAlertBox(msg1);
//         return;
})
$(".invest").click(function(){
	this.parentNode.parentNode.style.display = 'none';
	invest();
})
//invest
function invest(){
	var invitecode = generateCode(true, 6, 6);
	if($(".invitors").prop("disabled")){
		invitecode = $(".inviteCode").html();
	}
	var invitors = $(".invitors").val();
	if(invitors == "" || invitors ==null){
		invitors = defalutCode;
	}
	invitors = invitors.trim();
	var pattern = new RegExp("[`~!@+#$^&*()=|{}':;',\\[\\].<>《》/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]");
	if(invitors.length!=6 || pattern.test(invitors) || invitecode.length > 8){
		var msg1 = "";
		var className1 = $(".language").attr("class");
		if (className1.indexOf("language_en") != -1) {
			msg1 = "Non-standard invitation code";
		} else if (className1.indexOf("language_zh") != -1) {
			msg1 = "不规范的邀请码";
		} else if (className1.indexOf("language_ru") != -1){
			msg1 = "不正な招待コード ";
		}else {
			msg1 = "불규칙한 초대 코드";
		}
	         bcAlertBox(msg1);
	         return;
	}
	var isTrueCode = false;
	$.ajax({
		url:ipUrl+'/CapitalServer/IsTrueCode?Code='+invitors,
		type:"get",
		dataType : "jsonp", 
        jsonp : 'callback',
		success:function(e){
			var e = e;
			isTrueCode = e.result;
			contract.getUserByinviteCode(invitors.toUpperCase(), function(error, result) {
	    		var className = $(".language").attr("class");
	    		var msg = "";
				 if (!error){
					 	if(result){
					 			contract.getUserByinviteCode(invitecode.toUpperCase(), function(error, result) {
					 				 if (!error){ 
					 					 	if(result && !$(".invitors").prop("disabled")){
					 					 		invitecode = generateCode(true, 6, 6);
					 					 		console.info("邀请码已存在，重新生成"+invitecode);
					 					 	}
					 					 	//invest
					 					 	 var investAmount = +$(".investAmount").val();
									 	     if(!((typeof investAmount === 'number' && investAmount%1 === 0 && investAmount >= 1 && investAmount<=15))){
									 	         if (className.indexOf("language_en") != -1) {
													msg = "Please enter an integer of 1-15";
												} else if (className.indexOf("language_zh") != -1) {
													msg = "请输入1-15的整数";
												} else if (className.indexOf("language_ru") != -1){
													msg = "せいすうを  にゅうりょく入力 ";
												}else {
													msg = "1 -15의 정수를 입력하십시오.";
												}
									 	         bcAlertBox(msg);
									 	         return;
									 	     }
									 	     if((parseInt(haveInAmount) + parseInt(investAmount))>15){
									 	     	if (className.indexOf("language_en") != -1) {
													msg ="Up to "+(15-haveInAmount)+ "ETH can be invested in this time.";
												} else if (className.indexOf("language_zh") != -1) {
													msg = "本次最多可入股"+(15-haveInAmount)+"个ETH";
												}else if (className.indexOf("language_ru") != -1){
													msg = "今回は最大"+(15-haveInAmount)+"つのETHを出資することができます";
												} else {
													msg = "이번 최대 "+(15-haveInAmount)+"개 ETH";
												}
								 	    	 	bcAlertBox(msg);
								 	    	 	return;
									 	     }
									 	    //ウォレットに接続するかどうかを判断する
									 	    if(isWe3==false){
									 	    	if (className.indexOf("language_en") != -1) {
													msg ="Please install your wallet first";
												} else if (className.indexOf("language_zh") != -1) {
													msg = "请先安装钱包";
												}else if (className.indexOf("language_ru") != -1) {
													msg = "先に財布を取り付けてください";
												} else{
													msg = "지갑을 먼저 설치해 주세요.";
												}
									 	        bcAlertBox(msg);
									 	        return;
									 	    }
									 	    if(isWebLogin==false){
									 	    	if (className.indexOf("language_en") != -1) {
													msg ="Please login in your wallet first";
												} else if (className.indexOf("language_zh") != -1) {
													msg = "请先登录钱包";
												} else if (className.indexOf("language_ru") != -1) {
													msg = "まず財布に登録してください";
												} else {
													msg = "지갑을 먼저 등록해 주세요.";
												}
									 	        bcAlertBox(msg);
									 	        return;
									 	    }
									 	    //Transfer amount
									 	    var etherValue = web3.toWei(investAmount, 'ether');
									 	  contract.invest(address, investAmount,invitecode.toUpperCase(),invitors.toUpperCase(), {from: address, value: etherValue}, function(error, result) {
									 	        // console.log('Send In');
									 	        if (!error){
									 	        	// console.log(JSON.stringify(result));
										 	        $.ajax({
										 	   			url:ipUrl+'/CapitalServer/Invest?address='+address+'&amount='+etherValue+'&txId='+JSON.stringify(result)+'&inviteCode='+invitecode+'&beInviteCode='+invitors+'&beginTime='+beginTime+'&ip='+ip,
										 	   			type:"get",
										 	   			dataType : "jsonp", 
										 	   	        jsonp : 'callback',
										 	   			success:function(e){
										 	   				var e = e;
										 	   				// console.log(JSON.stringify(e))
										 	   				if(e.success){
										 	   					//bcAlertBox(e.id);
										 	   				}
										 	   			},
										 	   			error:function(e){
										 	   				bcAlertBox(e);
										 	   			}
										 	   		});
									 	        }else{
									 	            if (className.indexOf("language_en") != -1) {
														msg ="User Cancel Operation";
													} else if (className.indexOf("language_zh") != -1) {
														msg = "用户取消操作";
													} else if (className.indexOf("language_ru") != -1) {
														msg = "ユーザキャンセル操作";
													} else {
														msg = "사용자 취소 조작";
													}
									 	        	bcAlertBox(msg);
									 	        }
									 	    });
					 					 	
					 				 }else{
					 				 	if (className.indexOf("language_en") != -1) {
											msg ="query error";
										} else if (className.indexOf("language_zh") != -1) {
											msg = "查询错误";
										} else if (className.indexOf("language_ru") != -1)  {
											msg = "クエリエラー";
										} else {
											msg = "오류: 오류";
										}
				 					 	bcAlertBox(msg);
					 				 }
					 			            
					 	       });
					 	}else{
					 		if (className.indexOf("language_en") != -1) {
								msg ="The invitation code does not exist";
							} else if (className.indexOf("language_zh") != -1) {
								msg = "该邀请码不存在";
							} else if (className.indexOf("language_ru") != -1) {
								msg = "この招待コードは存在しません";
							} else {
								msg = "이 초대장 부호 없음";
							}
					 		bcAlertBox(msg);
						    return;
					 	}
					 	
				 }else{
	 		 		if (className.indexOf("language_en") != -1) {
						msg ="Query error, please try again later";
					} else if (className.indexOf("language_zh") != -1) {
						msg = "查询出错,请稍后再试";
					} else if (className.indexOf("language_ru") != -1) {
						msg = "クエリでエラーが発生しました。後で試してみてください。";
					} else {
						msg = "오류를 조회하여 잠시 후에 다시 시도해 주십시오";
					}
				 	bcAlertBox(msg);
				 	return;
				 }
	       });
			
		},
		error:function(e){
			console.info(e);
		}
	});
    	
}

// init contract
function initContract(web3) {
	var abi = newAbi;
     contract = web3.eth.contract(abi).at(contract_address);
}

	//Total amount of income
    function getUserInfo(userAddress){
    	var allIncomeAmount = 0;
    	var principalAmount = 0;
    	var diveidendAmount = 0;
    	var recommendAmount = 0;
    	var waitToSend = 0;
    	var lineAmount = 0;
    	var level = 0;
    	var inLevel = 0;
    	var invitors = defalutCode;
    	$(".allIncomeAmount").html(allIncomeAmount+"ETH");
        $(".principalAmount").html(principalAmount+"ETH");
        $(".diveidendAmount").html(diveidendAmount+"ETH");
        $(".recommendAmount").html(recommendAmount+"ETH");
        $(".lineAmount").html(lineAmount+"ETH");
        $(".inviteCode").val("——");
        $(".inviteCode").html("——");
        $(".level").html(level);
        if( $(".invitors").val() == null || $(".invitors").val() ==""){
        	 $(".invitors").val(invitors);
        	 $(".invitors").removeAttr("disabled");
        }
        //getUserByAddress
        contract.getUserByAddress(userAddress, function(error, result) {
            //console.log('getUserByAddress');
            if (!error)
            result = JSON.stringify(result);
            result = result.replace(/\[/g, "");
            result = result.replace(/\]/g, "");
            result = result.replace(/\"/g, "");
            result = result.split(",");
            // console.info(result);
            //alert(JSON.stringify(result));
            invitors = result[10];
            inviteCode  = result[9];
            if(invitors !="" && invitors!=null){
            	$(".invitors").attr("disabled","disabled");
            	$(".invitors").val(invitors);
            }
            if(inviteCode !="" && inviteCode!=null){
            	$(".inviteCode").val(inviteCode);
            	$(".inviteCode").html(inviteCode);
            	getInviteCount(inviteCode);
            }
            if(parseInt(result[6]) == 2){
            	return;
            }
            allIncomeAmount = parseInt(result[3]) + parseInt(result[4]);
            principalAmount = parseInt(result[0])+ parseInt(result[1]);
            diveidendAmount = parseInt(result[4]);
            recommendAmount = parseInt(result[3]);
            waitToSend = parseInt(result[7]) + parseInt(result[8]);
            lineAmount = parseInt(result[0]);
            inAmount = parseInt(result[2]);
            level= result[5];
            inLevel = result[11];
            valiableAmount=parseInt(result[1]) + parseInt(result[0]);
            haveInAmount = parseInt(result[2]) + parseInt(result[0]);
            //web3.fromWei(number, unit)
            allIncomeAmount = web3.fromWei(allIncomeAmount,'ether') ;
            principalAmount = web3.fromWei(principalAmount,'ether') ;
            diveidendAmount = web3.fromWei(diveidendAmount,'ether') ;
            recommendAmount = web3.fromWei(recommendAmount,'ether') ;
            valiableAmount = web3.fromWei(valiableAmount,'ether') ;
            haveInAmount = web3.fromWei(haveInAmount,'ether') ;
            lineAmount = web3.fromWei(lineAmount,'ether') ;
            inAmount = web3.fromWei(inAmount,'ether');
            waitToSend = web3.fromWei(waitToSend,'ether');
           	$(".toInvest").removeAttr("disabled");
          //ajax
            $(".allIncomeAmount").html(allIncomeAmount+"ETH");
            $(".diveidendAmount").html(diveidendAmount+"ETH");
            $(".recommendAmount").html(recommendAmount+"ETH");
            $(".lineAmount").html(lineAmount+"ETH");
            $(".inAmount").html(inAmount+"ETH");
            $(".level").html(level);
            $(".inLevel").html(inLevel);
            $(".waitToSend").html(waitToSend+"ETH");
            if(principalAmount >0){
            	$.ajax({
            		url:ipUrl+'/CapitalServer/GetConfig',
            		type:"get",
            		dataType : "jsonp", 
            	    jsonp : 'callback',
            		success:function(e){
            			var e = e;
            			if(e.success){
            				if(e.isWithdraw!=2){
            					$(".withdraw").removeAttr("disabled");
            	            	$(".withdraw").css("background-color","#4543cc")
            				}else{
                            	var className1 = $(".language").attr("class");
                              if (className1.indexOf("language_en") != -1) {
                                  $('.withdraw').html('In Settlement...');
                              } else if (className1.indexOf("language_zh") != -1) {
                                  $('.withdraw').html('结算中...');
                              } else if (className1.indexOf("language_ru") != -1){
                                  $('.withdraw').html('決済中です...');
                              }else {
                                  $('.withdraw').html('결산 중...');
                              }	
                              $(".withdraw").css("color","white")
                              $(".withdraw").css("background-color","grey")
                              $(".withdraw").attr("disabled","disabled")
                            }
                          $(".principalAmount").html(principalAmount+"ETH");
            			}
            		},error:function(e){
            			console.info(e);
            		}
            	});
            }else{
            	$(".withdraw").attr("disabled","disabled")
            	$(".withdraw").css("background-color","grey")
            }
          
        });
            
    }
    function generateCode(randomFlag, min, max){
    	  var str = "",
    	    range = min,
    	    arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    	  //Random
    	  if(randomFlag){
    	    range = Math.round(Math.random() * (max-min)) + min;
    	  }
    	  for(var i=0; i<range; i++){
    	    pos = Math.round(Math.random() * (arr.length-1));
    	    str += arr[pos];
    	  }
    	  return str.toUpperCase();
    	}
    $(".withdraw").click(function(){
    	var className = $(".language").attr("class");
    	var msg = "";
    	if (className.indexOf("language_en") != -1) {
			msg ="It is expected that "+valiableAmount+"ETH can be extracted. Do you confirm the extraction?";
		} else if (className.indexOf("language_zh") != -1) {
			msg = "预计可提取"+valiableAmount+"ETH,确认提取吗？";
		} else if (className.indexOf("language_ru") != -1) {
			msg = valiableAmount+" ETHを抽出する予定ですが、抽出を確認しますか？";
		} else {
			msg = valiableAmount+"ETH 추출 가능한가요?";
		}
    	$(".maskingCont").html(msg);
    	// console.log($(".maskingTil"));
    	$(".masking3").show();
    })
    $("#queding").click(function(){
    	//bcAlertBox(address);
    	var className = $(".language").attr("class");
		var msg = "";
		contract.userWithDraw(address, function(error, result) {
			 if (!error){
				 console.info(result);
			 	if (className.indexOf("language_en") != -1) {
					msg ="Successful withdrawal, please note the change of account funds";
				} else if (className.indexOf("language_zh") != -1) {
					msg = "提取成功，请注意账户资金变动";
				} else if (className.indexOf("language_ru") != -1) {
					msg = "引き出しが成功しました。口座資金の変動に注意してください。";
				} else {
					msg = "성공을 추출하면 계좌 자금 변동 에 주의해 주십시오";
				}
				 	bcAlertBox(msg);
				 	$(".withdraw").attr("disabled","disabled");
					$(".withdraw").css("background-color","grey");
			 }else{
	            if (className.indexOf("language_en") != -1) {
					msg ="Extraction failure";
				} else if (className.indexOf("language_zh") != -1) {
					msg = "提取失败";
				}else if (className.indexOf("language_ru") != -1) {
					msg = "抽出に失敗しました";
				} else {
					msg = "추출 실패";
				}
	        	bcAlertBox(msg);
			 }
        });
		$(".masking3").hide()
    })
    $("#quxiao").click(function(){
    	$(".masking3").hide();
    })
    function getBeginTime(){
    	var className = $(".language").attr("class");
    	var msg = "";
		contract.getSomeInfo(function(error, result) {
			// console.info(error);
		 if (!error){
			 result = JSON.stringify(result);
			 result = result.replace(/\[/g, "");
	         result = result.replace(/\]/g, "");
	         result = result.replace(/\"/g, "");
	         result = result.split(",");
	         // console.info(result);
	         //alert(Number(result[0]).toLocaleString());
	         //$(".amount").html( web3.fromWei(parseInt(+result[0].toString(10)),'ether')+"ETH");
	         var amountStr = Number(result[0]).toLocaleString().replace(/\$|\,/g,'');
	         $(".amount").html( Number(amountStr.substring(0,amountStr.length-18))+13198+"ETH");
	         //$(".amount").html("13198 ETH");
	         $(".bets").html(Number(result[1])+1240);
	         //$(".bets").html('1240');
			 beginTime = parseInt(result[2]);
			 if(beginTime > 1){
				 $(".lineLi").show();
			 }
		 }else{
			// alert(JSON.stringify(error)+'error');
		 	if (className.indexOf("language_en") != -1) {
				msg ="getting information failure";
			} else if (className.indexOf("language_zh") != -1) {
				msg = "获取信息失败";
			} else if (className.indexOf("language_ru") != -1) {
				msg = "情報の取得に失敗しました";
			} else {
				msg = "정보 가져오기 실패";
			}
			bcAlertBox(msg)
		 }
       });	
    }
    function getRewardList(){
    	//ボーナスリストの処理
        $.ajax({
    			url:ipUrl+'/CapitalServer/IntenalTransfer?address='+address,
    			type:"get",
    			dataType : "jsonp", 
    	        jsonp : 'callback',
    			success:function(e){
    				var e = e;
    				$(".rewardList").html('');
    				if(e.success){
    					var html = "<table>";
    					for (var i = 0; i < e.result.length; i++) {
							var one = e.result[i];
							var list = '<li><div class="showCoat" id="xxhide">'+
			                '<p><a href="javascript:void(0);" style="color:white">'+one.transferTime.substring(0,19)+'</a></p><p><a href="javascript:void(0);" style="color:white">'+one.transferAmount+'ETH</a></p></div>'+
			                '<div class="hideCoat"><div><p class="hideLeft">Hash</p>'+
			                '<p class="hideRight"><a style="color:yellow" href="'+netUrl+'tx/'+one.transferHash+'">'+one.transferHash+'</a></p>'+
			                '</div><div><p class="hideLeft awardMoney">money</p>'+
			                '<p class="hideRight">'+one.transferAmount+'ETH</p></div><div><p class="hideLeft awardTime">time</p>'+
			                '<p class="hideRight">'+one.transferTime.substring(0,19)+'</p></div></div></li>';
							html = html + list;	
						}
    					html = html + "</table>";
    				$(".rewardList").append(html);	
    				}
    			},
    			error:function(e){
    				console.info(e);
    			}
    		});
    }
    function getInviteCount(invitecode){
    	//if($(".invitors").prop("disabled")){
    		  $.ajax({
      			url:ipUrl+'/CapitalServer/GetCount?code='+invitecode,
      			type:"get",
      			dataType : "jsonp", 
      	        jsonp : 'callback',
      			success:function(e){
      				var e = e;
      				if(e.success){
      					$(".inviteCount").html(e.count);
      				}
      			},
      			error:function(e){
      				console.info(e);
      			}
      		});
    	//}
    }
    function searchBalance(){
    	window.open(netUrl+"address/"+address,"_blank"); 
    }
    function searchHy(){
    	//alert(netUrl);
    	window.open(netUrl +"address/"+ contract_address,"_blank"); 
    }
    function getCode(){
		if($(".invitors").val() == null || $(".invitors").val() == "" ){
			
			$(".invitors").val(defalutCode);
		}
    	$.ajax({
			url:ipUrl+'/CapitalServer/GetCode?address='+address,
			type:"get",
			dataType : "jsonp", 
	        jsonp : 'callback',
			success:function(e){
				var e = e;
				if(e.success){
					var invitors = e.beInviteCode;
					var inviteCode = e.inviteCode;
					if(invitors !="" && invitors!=null){
		            	$(".invitors").attr("disabled","disabled");
		            	$(".invitors").val(invitors);
		            	isHaveCode = true;
		            }
		            if(inviteCode !="" && inviteCode!=null){
		            	$(".inviteCode").val(inviteCode);
		            	$(".inviteCode").html(inviteCode);
		            	getInviteCount(inviteCode);
		            }
				}
			},
			error:function(e){
				console.info(e);
			}
		});
    }
    
    function setInfo(){
		if(typeof(address)=="undefined" || address ==''){
			return;
		}
    	$.ajax({
			url:ipUrl+'/CapitalServer/IpAddress?address='+address+'&ip='+ip,
			type:"get",
			dataType : "jsonp", 
	        jsonp : 'callback',
			success:function(e){
				var e = e;
				if(e.success){
					
				}
			},
			error:function(e){
				console.info(e);
			}
		});
    }
