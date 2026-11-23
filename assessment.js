
function diagnose() {
  let name = document.getElementById("name").value;

  if (name === "") {
    document.getElementById("result").textContent =
      "名前を入力してください。";
    return;
  }

  let types = [
    "あなたは冷静で分析力に優れたタイプ！",
    "あなたは好奇心旺盛で行動力のあるタイプ！",
    "あなたは慎重で計画性のあるタイプ！",
    "あなたは独創的で発想力豊かなタイプ！"
  ];

  let number = 0;

  for (let i = 0; i < name.length; i++) {
    number += name.charCodeAt(i);
  }

  let result = types[number % types.length];

  document.getElementById("result").textContent =
    name + "さんの診断結果：" + result;
}
