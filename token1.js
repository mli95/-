/*ttweb

*/


var obj = JSON.parse($response.body);
 obj={
  
  "meta": {
    "message": "OK",
    "code": 200000
  },
  "data": {
    "token": {
      "value": "$.KEY_token",
      "expiresIn": 57264882,
      "userId": "KEY_id"
    },
    "stage": "finished",
    "finishedStages": [
    ]
  },
  "extra": {
    "regionTag": "mainland"
  }

};

$done({body: JSON.stringify(obj)});
//