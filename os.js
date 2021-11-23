

let obj = JSON.parse($response.body);
obj.data["relationships"] = "2";
$done({body: JSON.stringify(obj)});
