
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://web-api.tantanapp.com/v2/users/me/relationships/40842526`;
const method = `PUT`;
const headers = {
'Sec-Fetch-Dest' : `empty`,
'Connection' : `keep-alive`,
'Accept-Encoding' : `gzip, deflate, br`,
'Geolocation' : `geo:39.9215,116.4431;u=80`,
'Content-Type' : `application/json`,
'Sec-Fetch-Site' : `same-site`,
'Origin' : `https://web.tantanapp.com`,
'Cache-Control' : `no-cache`,
'User-Agent' : `Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36 Edg/88.0.705.74`,
'Sec-Fetch-Mode' : `cors`,
'Cookie' : `uc_100010=1%2C100010%2ClsQdUWDkr2ayPW%2BO23jBoeIhqH5K52iRjuXpfZHbk6Q%3D; tt_client_id=100010`,
'Host' : `web-api.tantanapp.com`,
'Referer' : `https://web.tantanapp.com/`,
'Accept-Language' : `zh-CN`,
'Accept' : `*/*`
};
const body = `{
	"state": "disliked",
	"createdTime": "2021-02-20T20:54:15.402000+0000",
	"trackDictionary": {
		"pic_uploads": "5",
		"normal_pic": "1",
		"actiontype": "click",
		"update_relationships_source": "suggest_users_home",
		"moments_user_id": "408425269",
		"actionname": "dislike",
		"update_relationships_page_id": "p_suggest_users_home_view",
		"pic_num": "1",
		"suggest_info": "{\"ActorInfo\":{\"UserId\":\"429225332\",\"CreateTime\":\"2021-02-05 00:46:05\",\"Poplularity\":0.685,\"LooksLevel\":\"\",\"SettingSearchMinAge\":20,\"SettingSearchMaxAge\":63,\"AdjustSearchMinAge\":0,\"AdjustSearchMaxeAge\":0,\"PMatched24h\":0,\"PLiked24h\":0,\"PSwiped24h\":3,\"PLikedBy24h\":76,\"PSwipedBy24h\":119,\"LikedRate\":0,\"UnprocessedReceiveLike\":-1},\"ReceiverInfo\":{\"UserId\":\"408425269\",\"CreateTime\":\"2020-10-30 19:29:27\",\"Poplularity\":0.275,\"LooksLevel\":\"normal\",\"SettingSearchMinAge\":16,\"SettingSearchMaxAge\":35,\"AdjustSearchMinAge\":0,\"AdjustSearchMaxeAge\":0,\"PMatched24h\":4,\"PLiked24h\":0,\"PSwiped24h\":0,\"PLikedBy24h\":4,\"PSwipedBy24h\":7,\"LikedRate\":0.9666079467606186,\"UnprocessedReceiveLike\":-1},\"SuggestDetail\":{\"RecallStrategy\":\"boost_default\",\"RankStrategy\":\"\",\"RerankStrategy\":\"\",\"RerankStrategyPositionBefore\":10,\"RerankStrategyPositionAfter\":10}}",
		"pic_url": "https:\/\/auto.tancdn.com\/v1\/images\/eyJpZCI6IjNHNkRXMlY3QkJFU1ZDQzI3SzVUSkZZRUoyMjJGQzA2IiwidyI6MTQxOSwiaCI6MTc3MywiZCI6MCwibXQiOiJpbWFnZS9qcGVnIiwiZGgiOjczNjI5NDgwODM0MjQ3Mzk1MjB9",
		"update_relationships_module_id": "e_dislikeButton",
		"next_normal_pic": "1",
		"create_time": "1613854455",
		"IsWhiteBlock": "0",
		"next_IsWhiteBlock": "0"
	}
}`;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
