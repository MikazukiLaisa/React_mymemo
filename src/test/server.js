// expressモジュールを読み込む
const express = require('express');

// expressアプリを生成する
const app = express();
console.log("ok")

let num = 0;

// ルート（http://localhost/）にアクセスしてきたときに「Hello」を返す
app.get('/', (req, res) => {
    res.send('Hello World')
    num++;
    console.log(num);
});

// ポート3000でサーバを立てる
app.listen(process.env.PORT || 3030, () => console.log(process.env.PORT));