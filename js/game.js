




//////////////// CHESS GAME  /////////////////




$(function() {
  var board,
      game = new Chess();

   
  // ゲームオーバー処理
  var onDragStart = function(source, piece, position, orientation) {
  	if (game.in_checkmate() === true || game.in_draw() === true ||
  			piece.search(/^b/) !== -1) {
        alert('check mate');

        // the button will appear
        $('.checkmate').removeClass('checkmate');

  	      return false;
  	    }
  };
   
  // CPU処理
  var cpuMove = function() {
   var possibleMoves = game.moves();
   
    // ゲームオーバー
    if (possibleMoves.length === 0) return;
   
    var randomIndex = Math.floor(Math.random() * possibleMoves.length);
    game.move(possibleMoves[randomIndex]);
    board.position(game.fen());

  };
   
  var onDrop = function(source, target) {
    var move = game.move({
      from: source,
      to: target,
      promotion: 'q'
  });
   
  // 想定外の動きを防止
  if (move === null) return
   
  // CPU移動
  window.setTimeout(cpuMove, 250);
  };
   
  // ボードの更新
  var onSnapEnd = function() {
  	board.position(game.fen());
  };
   
  // プレイヤー処理
  var cfg = {
    draggable: true,
    position: 'start',
    onDragStart: onDragStart,
    onDrop: onDrop,
    onSnapEnd: onSnapEnd
  };
  board = new ChessBoard('board', cfg);


  $('#clearBoardBtn').click(board.clear)
  $('#playAgainBtn').click(board.clear)

  $('#startPositionBtn').click(board.start)


// hide the button again
  $('.hideBtn').click(function() {
    $('.active').removeClass('active');
  });

});




















/*
var config = {
  // チェスの駒を初期位置にする

  dropOffBoard: 'snapback', 
  position: 'start',
  // マウスで駒を動かせるようにする
  draggable: true,

  dropOffBoard: 'snapback', // this is the default

  // 駒が移動した後にonDrop関数を実行する
  onDrop: onDrop


};

//////// just to know where to where

// gameインスタンスを作成
var game = new Chess();

// 関数
function onDrop (source, target, piece, newPos, oldPos, orientation) {
  console.log('Source: ' + source)
  console.log('Target: ' + target)
  console.log('Piece: ' + piece)
  console.log('New position: ' + Chessboard.objToFen(newPos))
  console.log('Old position: ' + Chessboard.objToFen(oldPos))
  console.log('Orientation: ' + orientation)
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')

     // 駒の移動パターンをチェックする, 相手の動ける駒の場所をすべて配列で取得
  var move = game.move({

    from: source,  // 移動元の位置
    to: target         // 移動後の位置
  });

  // 駒の移動に問題があれば元の位置に戻す
  if (move === null) return 'snapback';

}


// divタグ「board」を指定して「config」を設定する
var board = ChessBoard('board', config)







var playerMove = game.moves();


// 配列の中身が0になったらゲームを終了する
if (playerMove.length === 0) {
    alert('終了');
}

*/

