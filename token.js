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
      "value": "2dc353ec083103fca93796117d8e48b64d36238af8f7d13708f45083031eef9b",
      "expiresIn": 57264882,
      "userId": "433972783"
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