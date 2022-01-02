let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');

alert('あなたの選んだ手は' + user_hand + 'です。');

function getJShand(){
  // 乱数を生成する関数を設定している。
  //Math.floor(Math.random()*3)は0~2までのランダムな整数値を生成する。
  let js_hand_num = Math.floor( Math.random()*3 );

  //ランダムに生成された数値を基に条件分岐させ、グー、チョキ、パーを出し分ける。
  if(js_hand_num == 0){
    js_hand = "グー";
  } else if(js_hand_num == 1){
    js_hand = "チョキ";
  } else if(js_hand_num == 2){
    js_hand = "パー";
  }

  //関数の戻り値として、グー、チョキ、パーの文字列を返す
  return js_hand;
}