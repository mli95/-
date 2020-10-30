/*有道云pro

*/

body = $response.body.replace(/\"is_vip\":false/, "\"is_vip\":true")
$done({body});
