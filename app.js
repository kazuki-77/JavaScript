//じゃんけんの手を入力してもらうプロンプト欄を生成
let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
//while()の条件式で、「グー以外かつ、チョキ以外かつ、パー以外かつ、キャンセルボタン以外だったら」
while((user_hand != "グー") && (user_hand != "チョキ") && (user_hand != "パー") && (user_hand != null)){
  alert('グー・チョキ・パーのいずれかを入力して下さい');
  user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
}

//じゃんけんを手をランダムに作成する関数を呼び出す
let js_hand = getJShand();

//ユーザーの手とJavaScriptのじゃんけんの手を比べる関数を呼び出し、結果をjudgeに入れる
let judge = winLose(user_hand,js_hand);

//結果を表示する　キャンセルじゃなかったら(user_hand != null)のじゃんけん結果を出し、
//elseだったら　またチャレンジしてねという文言が出せる
if(user_hand != null){
  alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。' );
} else {
  alert("またチャレンジしてね")
}

//ランダムでじゃんけんの手を作成する関数
function getJShand(){
  // 乱数を生成する関数を設定している。
  //Math.floor(Math.random()*3)は0~2までのランダムな整数値を生成する。
  let js_hand_num = Math.floor( Math.random()*3 );
  let hand_name;

  //ランダムに生成された数値を基に条件分岐させ、グー、チョキ、パーを出し分ける。
  if(js_hand_num == 0){
    hand_name = "グー";
  } else if(js_hand_num == 1){
    hand_name = "チョキ";
  } else if(js_hand_num == 2){
    hand_name = "パー";
  }

  //関数の戻り値として、グー、チョキ、パーの文字列を返す
  return hand_name;
}

//　ユーザーの手とJavaScriptのじゃんけんの手を比べる関数
function winLose(user,js){
  let winLoseStr;

  if(user == "グー"){
    if(js == "グー"){
      winLoseStr = "あいこ";
    } else if(js == "チョキ"){
      winLoseStr = "勝ち";
    } else if(js === "パー"){
      winLoseStr = "負け";
    }
  } else if(user == "チョキ"){
    if(js == "グー"){
      winLoseStr = "負け";
    } else if(js == "チョキ"){
      winLoseStr = "あいこ";
    } else if(js === "パー"){
      winLoseStr = "勝ち";
    }
  } else if(user == "パー"){
    if(js == "グー"){
      winLoseStr = "勝ち";
    } else if(js == "チョキ"){
      winLoseStr = "負け";
    } else if(js === "パー"){
      winLoseStr = "あいこ";
    }
  }

  return winLoseStr;
}