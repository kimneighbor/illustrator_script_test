// 여러 개의 오브젝트를 선택하는 스크립트
if (app.selection.length >= 2) {
  var frontObject = app.selection[0]; // 맨 앞에 있는 오브젝트
  var backObjects = app.selection.slice(1); // 나머지 오브젝트들

  // 각 뒷 오브젝트에 대해 반복
  for (var i = 0; i < backObjects.length; i++) {
      var backObject = backObjects[i];

      // 맨 뒤에 있는 오브젝트의 위치와 크기 정보 저장
      var backBounds = backObject.visibleBounds; // [왼쪽, 위쪽, 오른쪽, 아래쪽]
      var backWidth = backBounds[2] - backBounds[0];
      var backHeight = backBounds[1] - backBounds[3];

      // 맨 앞에 있는 오브젝트의 복사본을 생성
      var newObject = frontObject.duplicate();

      // 복사된 오브젝트의 위치와 크기 조정
      newObject.left = backBounds[0];
      newObject.top = backBounds[1];
      newObject.width = backWidth;
      newObject.height = backHeight;

      // 원본 오브젝트 삭제
      backObject.remove();
  }

} else {
  alert("두 개 이상의 오브젝트를 선택하세요.");
}


// // 두 개의 오브젝트를 선택하는 스크립트
// if (app.selection.length === 2) {
//   var frontObject = app.selection[0]; // 맨 앞에 있는 오브젝트
//   var backObject = app.selection[1];  // 맨 뒤에 있는 오브젝트

//   // 맨 뒤에 있는 오브젝트의 위치와 크기 정보 저장
//   var backBounds = backObject.visibleBounds; // [왼쪽, 위쪽, 오른쪽, 아래쪽]
//   var backWidth = backBounds[2] - backBounds[0];
//   var backHeight = backBounds[1] - backBounds[3];

//   // 맨 앞에 있는 오브젝트의 위치를 맨 뒤에 있는 오브젝트의 위치로 이동
//   frontObject.left = backBounds[0];
//   frontObject.top = backBounds[1];

//   // 맨 앞에 있는 오브젝트의 크기를 맨 뒤에 있는 오브젝트의 크기로 조정
//   frontObject.width = backWidth;
//   frontObject.height = backHeight;

//   // 스크립트 실행 완료 메시지
//   alert("오브젝트가 교체되었습니다.");
// } else {
//   alert("두 개의 오브젝트를 선택하세요.");
// }
