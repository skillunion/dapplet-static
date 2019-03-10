({
  "template": "<div>{{id}}</div><div>{{text}}</div><div>{{authorFullname}}</div><div>{{authorUsername}}</div><img src=\"{{authorImg}}\"/>",
  "to": "0xccf7930d9b1fa67d101e3de18de5416dc66bd852",
  "function": "function storeTweetHash(uint tweetId, uint tweetHash)",
  "mapping": {
    "tweetId": "id",
    "tweetHash": "sha256(text)"
  }
})
