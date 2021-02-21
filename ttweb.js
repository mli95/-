/*ttweb

*/


var obj = JSON.parse($response.body);
 obj={
  
  "meta": {
		"code": 200,
		"subCode": 0,
		"message": "OK"
	},
	"data": {
		"summarizedPrivileges": [{
			"id": "letter",
			"type": "summarizedPrivilege",
			"content": {}
		}, {
			"id": "quickchatMembership",
			"type": "summarizedPrivilege",
			"content": {
				"expiredTime": 1612557348000
			}
		}, {
			"id": "quickchatPeek",
			"type": "summarizedPrivilege",
			"content": {}
		}, {
			"id": "quickchatNumber",
			"type": "summarizedPrivilege",
			"content": {}
		}, {
			"id": "boost",
			"type": "summarizedPrivilege",
			"content": {}
		}, {
			"id": "vip",
			"type": "summarizedPrivilege",
			"content": {
				"expiredTime": 1612557348000
			}
		}, {
			"id": "svip",
			"type": "summarizedPrivilege",
			"content": {
				"expiredTime": 2002557348000
			}
		}, {
			"id": "privacy",
			"type": "summarizedPrivilege",
			"content": {
				"expiredTime": 20012557348000
			}
		}, {
			"id": "advancedSearch",
			"type": "summarizedPrivilege",
			"content": {
				"expiredTime": 1612557348000
			}
		}, {
			"id": "revokeUnPair",
			"type": "summarizedPrivilege",
			"content": {
				"expiredTime": 1612557348000
			}
		}, {
			"id": "readMessage",
			"type": "summarizedPrivilege",
			"content": {
				"expiredTime": 1612557348000
			}
		}, {
			"id": "myLiked",
			"type": "summarizedPrivilege",
			"content": {
				"expiredTime": 1612557348000
			}
		}, {
			"id": "unlimitedSwipes",
			"type": "summarizedPrivilege",
			"content": {}
		}, {
			"id": "diamondVIP",
			"type": "summarizedPrivilege",
			"content": {}
		}, {
			"id": "trialDiamondVIP",
			"type": "summarizedPrivilege",
			"content": {}
		}, {
			"id": "privateMatch",
			"type": "summarizedPrivilege",
			"content": {}
		}, {
			"id": "trialSvip",
			"type": "summarizedPrivilege",
			"content": {}
		}, {
			"id": "seeSwipeNumber",
			"type": "summarizedPrivilege",
			"content": {}
		}]
	}
};

$done({body: JSON.stringify(obj)});
//