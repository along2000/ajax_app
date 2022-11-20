const buildHTML = (XHR) => {
 const item = XHR.response.post;
 const html = `
  <div class="post">
    <div class="post-date">
      投稿日時：${item.created_at}
    </div>
    <div class="post-content">
      ${item.content}
    </div>
  </div>`;
 return html;
};

function post (){
  //リクエストを送信する処理console.log("fire")
 //getElementByIdメソッドで取得した投稿ボタンの要素を変数submitに格納しています。
  const submit = document.getElementById("submit");

  //「投稿ボタンがクリックされたこと」を認識するために、submit.addEventListenerと記述します。そうすることによって、先ほど定義したsubmit（投稿ボタン）に対するイベントを認識することができます。
  submit.addEventListener("click", (e) => {
    e.preventDefault(); //preventDefault()の対象をeとすることにより、「投稿ボタンをクリックした」という現象を無効化しています。
    const form = document.getElementById("form"); //getElementByIdメソッドを用いて、フォームの要素を取得します
    const formData = new FormData(form); //new FormData(フォームの要素);のように記述することでオブジェクトを生成し、引数にフォームの要素を渡すことで、そのフォームに入力された値を取得できます。
    const XHR = new XMLHttpRequest(); //XMLHttpRequestとは、JavaScriptを用いてサーバーとHTTP通信を行うときに利用するオブジェクトです。
    //XMLHttpRequestのメソッドやプロパティを利用してAjaxの実装を進めます。XMLHttpRequestオブジェクトを変数XHRに格納しています。
    XHR.open("POST", "/posts", true); //openメソッドを用いるときは、XHR.open("POST", "/posts", true);のように表記します。
   // 第一引数にはHTTPメソッド、第二引数にはパス、第三引数には非同期通信であるかをtrueかfalseで記述します。
   XHR.responseType = "json"; //esponseTypeプロパティとは、レスポンスのデータフォーマット（＝どのような形式のデータにするか）を指定するプロパティです。
   XHR.send(formData); //send()メソッドとは、リクエストを送信するメソッドです。XMLHttpRequestオブジェクトのメソッドの一種です。
   XHR.onload = () => {
    if (XHR.status != 200) {
      alert(`Error ${XHR.status}: ${XHR.statusText}`);
      return null;
    };
    const list = document.getElementById("list");
    const formText = document.getElementById("content");
    list.insertAdjacentHTML("afterend", buildHTML(XHR));
    formText.value = "";
   };
  });
};

window.addEventListener('load', post);