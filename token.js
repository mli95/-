/*ttweb

*/



var obj = JSON.parse($response.body);
$.KEY_token = 'mli95_token'
$.KEY_id = 'mli95_id'
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
