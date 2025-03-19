// -------------------------
// 1. 問題データ・状態の登録
// ※内部的には問題番号1～30を id 0～29 として扱います。
// ※ここでは例として問題5、7、9、および問題26のデータを一部記載（実際は全30問分を定義してください）。

function getPoints(qIndex) {
  if (qIndex < 15) return 10;
  else if (qIndex < 26) return 20;
  else return 30;
}

const questionsData = [];

// 問題1
questionsData.push({
  id: 0,
  thumb: "nazo1.png",
  detailImage: "nazo1.png",
  answers: {
    "": [{ text: "そろ", mark: 0 }],
    "と": [{ text: "さんど", mark: 1 }]
  },
  totalMarks: 2,
  markLabels: ["０", "１"],
  points: getPoints(0)
});

// 問題2
questionsData.push({
  id: 1,
  thumb: "nazo2.png",
  detailImage: "nazo2.png",
  answers: {
    "": [{ text: "ちしき", mark: 0 }],
    "ち": [{ text: "しきい", mark: 1 }],
    "つ": [{ text: "すくう", mark: 2 }],
    "み": [{ text: "ひにち", mark: 3 }]
  },
  totalMarks: 4,
  markLabels: ["０", "１", "１", "１"],
  points: getPoints(1)
});

// 問題3
questionsData.push({
  id: 2,
  thumb: "nazo3.png",
  detailImage: "nazo3.png",
  answers: {
    "": [{ text: "きいろ", mark: 0 }],
    "あ": [{ text: "かいろ", mark: 1 }],
    "◯": [{ text: "あかいろ", mark: 2 }]
  },
  totalMarks: 3,
  markLabels: ["０", "１", "１"],
  points: getPoints(2)
});

// 問題4
questionsData.push({
  id: 3,
  thumb: "nazo4.png",
  detailImage: "nazo4.png",
  answers: {
    "": [{ text: "ちぬき", mark: 0 }],
    "ち": [{ text: "たぬき", mark: 1 }],
    "ち,つ": [{ text: "てぬき", mark: 2 }]
  },
  totalMarks: 3,
  markLabels: ["０", "１", "２"],
  points: getPoints(3)
});

// 問題5
questionsData.push({
  id: 4,
  thumb: "nazo5.png",
  detailImage: "nazo5.png",
  answers: {
    "": [{ text: "きれい", mark: 0 }],
    "あ": [{ text: "きかい", mark: 1 }],
    "い": [{ text: "きかい", mark: 1 }],
    "ち": [{ text: "きかい", mark: 1 }],
    "つ": [{ text: "きかい", mark: 1 }],
    "と": [{ text: "きかい", mark: 1 }],
    "み": [{ text: "かいか", mark: 2 }],
    "わ": [{ text: "かいか", mark: 2 }]
  },
  totalMarks: 3,
  markLabels: ["０", "１", "１"],
  points: getPoints(4)
});

// 問題6
questionsData.push({
  id: 5,
  thumb: "nazo6.png",
  detailImage: "nazo6.png",
  answers: {
    "": [{ text: "とらい", mark: 0 }],
    "い": [{ text: "とうえい", mark: 1 }],
    "わ": [{ text: "とべい", mark: 2 }]
  },
  totalMarks: 3,
  markLabels: ["０", "１", "１"],
  points: getPoints(5)
});

// 問題7
questionsData.push({
  id: 6,
  thumb: "nazo7.png",
  detailImage: "nazo7.png",
  answers: {
    "": [{ text: "きごころ", mark: 0 }],
    "い": [{ text: "いごころ", mark: 1 }],
    "ち": [{ text: "きごこち", mark: 2 }],
    "い,ち": [{ text: "いごこち", mark: 3 }],
    "つ,◯": [{ text: "ろっこつ", mark: 4 }],
    "と,◯": [{ text: "とろっこ", mark: 5 }]
  },
  totalMarks: 6,
  markLabels: ["０", "１", "１", "２", "２", "２"],
  points: getPoints(6)
});

// 問題8
questionsData.push({
  id: 7,
  thumb: "nazo8.png",
  detailImage: "nazo8.png",
  answers: {
    "ち": [{ text: "かま", mark: 0 }],
    "み": [{ text: "かい", mark: 1 }],
    "ー": [{ text: "ぱぐ", mark: 2 }]
  },
  totalMarks: 3,
  markLabels: ["１", "１", "１"],
  points: getPoints(7)
});

// 問題9
questionsData.push({
  id: 8,
  thumb: "nazo9.png",
  detailImage: "nazo9.png",
  answers: {
    "": [
      { text: "いね", mark: 0 },
      { text: "けち", mark: 1 }
    ]
  },
  totalMarks: 2,
  markLabels: ["０", "０"],
  points: getPoints(8)
});

// 問題10
questionsData.push({
  id: 9,
  thumb: "nazo10.png",
  detailImage: "nazo10.png",
  answers: {
    "": [{ text: "まんしつ", mark: 0 }],
    "と": [{ text: "らんりつ", mark: 1 }]
  },
  totalMarks: 2,
  markLabels: ["０", "１"],
  points: getPoints(9)
});

// 問題11
questionsData.push({
  id: 10,
  thumb: "nazo11.png",
  detailImage: "nazo11.png",
  answers: {
    "": [{ text: "さいた", mark: 0 }],
    "ー": [{ text: "まいん", mark: 1 }]
  },
  totalMarks: 2,
  markLabels: ["０", "１"],
  points: getPoints(10)
});

// 問題12
questionsData.push({
  id: 11,
  thumb: "nazo12.png",
  detailImage: "nazo12.png",
  answers: {
    "": [{ text: "かけだし", mark: 0 }],
    "ー": [{ text: "かけひき", mark: 1 }]
  },
  totalMarks: 2,
  markLabels: ["０", "１"],
  points: getPoints(11)
});

// 問題13
questionsData.push({
  id: 12,
  thumb: "nazo13.png",
  detailImage: "nazo13.png",
  answers: {
    "": [{ text: "やきつけ", mark: 0 }],
    "み": [{ text: "いきつけ", mark: 1 }]
  },
  totalMarks: 2,
  markLabels: ["０", "１"],
  points: getPoints(12)
});

// 問題14
questionsData.push({
  id: 13,
  thumb: "nazo14.png",
  detailImage: "nazo14.png",
  answers: {
    "": [{ text: "たい", mark: 0 }],
    "あ": [{ text: "いたりあ", mark: 1 }]
  },
  totalMarks: 2,
  markLabels: ["０", "１"],
  points: getPoints(13)
});

// 問題15
questionsData.push({
  id: 14,
  thumb: "nazo15.png",
  detailImage: "nazo15.png",
  answers: {
    "": [{ text: "ぶんかぶ", mark: 0 }],
    "み": [{ text: "どらいぶ", mark: 1 }]
  },
  totalMarks: 2,
  markLabels: ["０", "１"],
  points: getPoints(14)
});

// 問題16
questionsData.push({
  id: 15,
  thumb: "nazo16.png",
  detailImage: "nazo16.png",
  answers: {
    "": [{ text: "みつばち", mark: 0 }],
    "◯": [{ text: "みち", mark: 1 }],
    "ー": [{ text: "みんち", mark: 2 }]
  },
  totalMarks: 3,
  markLabels: ["０", "１", "１"],
  points: getPoints(15)
});

// 問題17
questionsData.push({
  id: 16,
  thumb: "nazo17.png",
  detailImage: "nazo17.png",
  answers: {
    "": [{ text: "あにき", mark: 0 }],
    "◯": [{ text: "あにまる", mark: 1 }]
  },
  totalMarks: 2,
  markLabels: ["０", "１"],
  points: getPoints(16)
});

// 問題18
questionsData.push({
  id: 17,
  thumb: "nazo18.png",
  detailImage: "nazo18.png",
  answers: {
    "": [{ text: "ずきん", mark: 0 }],
    "ち": [{ text: "きひん", mark: 1 }]
  },
  totalMarks: 2,
  markLabels: ["０", "１"],
  points: getPoints(17)
});

// 問題19
questionsData.push({
  id: 18,
  thumb: "nazo19.png",
  detailImage: "nazo19.png",
  answers: {
    "": [{ text: "きょむ", mark: 0 }],
    "い": [{ text: "にんい", mark: 1 }],
    "わ": [{ text: "つりわ", mark: 2 }]
  },
  totalMarks: 3,
  markLabels: ["０", "１", "１"],
  points: getPoints(18)
});

// 問題20
questionsData.push({
  id: 19,
  thumb: "nazo20.png",
  detailImage: "nazo20.png",
  answers: {
    "い": [{ text: "けん", mark: 0 }],
    "◯,ー": [{ text: "おん", mark: 1 }],
    "◯,ー": [{ text: "on", mark: 1 }],
    "◯,ー": [{ text: "ON", mark: 1 }]
  },
  totalMarks: 2,
  markLabels: ["１", "２"],
  points: getPoints(19)
});

// 問題21
questionsData.push({
  id: 20,
  thumb: "nazo21.png",
  detailImage: "nazo21.png",
  answers: {
    "": [{ text: "おおつか", mark: 0 }],
    "あ,い,ち": [{ text: "なごやか", mark: 1 }]
  },
  totalMarks: 2,
  markLabels: ["０", "３"],
  points: getPoints(20)
});

// 問題22
questionsData.push({
  id: 21,
  thumb: "nazo22.png",
  detailImage: "nazo22.png",
  answers: {
    "": [{ text: "さとり", mark: 0 }],
    "み": [{ text: "ふじみ", mark: 1 }]
  },
  totalMarks: 2,
  markLabels: ["０", "１"],
  points: getPoints(21)
});

// 問題23
questionsData.push({
  id: 22,
  thumb: "nazo23.png",
  detailImage: "nazo23.png",
  answers: {
    "わ": [{ text: "せきしょ", mark: 0 }],
    "ー": [{ text: "せきしょ", mark: 0 }]
  },
  totalMarks: 1,
  markLabels: ["１"],
  points: getPoints(22)
});

// 問題24
questionsData.push({
  id: 23,
  thumb: "nazo24.png",
  detailImage: "nazo24.png",
  answers: {
    "あ,い": [{ text: "えーす", mark: 0 }],
    "あ,い,ー": [{ text: "あいす", mark: 1 }]
  },
  totalMarks: 2,
  markLabels: ["２", "３"],
  points: getPoints(23)
});

// 問題25
questionsData.push({
  id: 24,
  thumb: "nazo25.png",
  detailImage: "nazo25.png",
  answers: {
    "◯": [{ text: "しだい", mark: 0 }],
    "わ,い,と": [{ text: "ほおん", mark: 1 }]
  },
  totalMarks: 2,
  markLabels: ["１", "３"],
  points: getPoints(24)
});

// 問題26
questionsData.push({
  id: 25,
  thumb: "nazo26.png",
  detailImage: "nazo26.png",
  answers: {
    "つ,わ": [
      { text: "じゅうに", mark: 0 },
      { text: "じゅうにがつ", mark: 0 },
      { text: "12", mark: 0 },
      { text: "12月", mark: 0 }
    ]
  },
  totalMarks: 1,
  markLabels: ["２"],
  points: getPoints(25)
});

// 問題27
questionsData.push({
  id: 26,
  thumb: "nazo27.png",
  detailImage: "nazo27.png",
  answers: {
    "": [{ text: "とき", mark: 0 }]
  },
  totalMarks: 1,
  markLabels: ["０"],
  points: getPoints(26)
});

// 問題28
questionsData.push({
  id: 27,
  thumb: "nazo28.png",
  detailImage: "nazo28.png",
  answers: {
    "": [{ text: "らくだ", mark: 0 }],
    "つ": [{ text: "くじら", mark: 1 }]
  },
  totalMarks: 2,
  markLabels: ["０", "１"],
  points: getPoints(27)
});

// 問題29
questionsData.push({
  id: 28,
  thumb: "nazo29.png",
  detailImage: "nazo29.png",
  answers: {
    "あ,と,◯,ー": [{ text: "あすりーと", mark: 0 }]
  },
  totalMarks: 1,
  markLabels: ["４"],
  points: getPoints(28)
});

// 問題30
questionsData.push({
  id: 29,
  thumb: "nazo30.png",
  detailImage: "nazo30.png",
  answers: {
    "い,つ": [{ text: "ががんぼ", mark: 0 }]
  },
  totalMarks: 1,
  markLabels: ["２"],
  points: getPoints(29)
});


// スコア・解答状態の永続化
let totalPoints = parseInt(localStorage.getItem("totalPoints")) || 0;
const storedStates = localStorage.getItem("questionStates");
let questionStates = {};
if (storedStates) {
  questionStates = JSON.parse(storedStates);
} else {
  questionsData.forEach(q => {
    questionStates[q.id] = { solved: Array(q.totalMarks).fill(false) };
  });
}

// 初期スコア表示更新
const pointsDisplay = document.getElementById("points");
pointsDisplay.textContent = totalPoints + "pt";

// -------------------------
// 2. 問題一覧の生成（画像埋め込み）
const questionListElem = document.getElementById("question-list");
questionsData.forEach(q => {
  const item = document.createElement("div");
  item.classList.add("question-item");
  item.setAttribute("data-id", q.id);
  
  const img = document.createElement("img");
  img.src = q.thumb;
  img.alt = "問題画像";
  
  const clearIndicator = document.createElement("div");
  clearIndicator.classList.add("clear-indicator");
  clearIndicator.textContent = "CLEAR!";
  if (questionStates[q.id] && questionStates[q.id].solved.every(val => val)) {
    clearIndicator.style.display = "block";
  } else {
    clearIndicator.style.display = "none";
  }
  
  item.appendChild(img);
  item.appendChild(clearIndicator);
  questionListElem.appendChild(item);
  
  item.addEventListener("click", () => openQuestionDetail(q.id));
});

// -------------------------
// 3. 詳細画面の処理
let currentQuestion = null;
let currentQuestionId = null;

const letterButtons = Array.from(document.querySelectorAll(".letter-btn"));
let activeSequence = [];
letterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const letter = btn.getAttribute("data-letter");
    if (btn.classList.contains("active")) {
      btn.classList.remove("active");
      activeSequence = activeSequence.filter(l => l !== letter);
    } else {
      btn.classList.add("active");
      activeSequence.push(letter);
    }
  });
});

function openQuestionDetail(qid) {
  currentQuestion = questionsData.find(q => q.id == qid);
  currentQuestionId = qid;

　document.getElementById("instruction").style.display = "none";
  
  document.getElementById("detail-image").src = currentQuestion.detailImage;
  document.getElementById("answer").value = "";
  
  letterButtons.forEach(btn => btn.classList.remove("active"));
  activeSequence = [];
  
  const marksContainer = document.querySelector(".answer-marks");
  marksContainer.innerHTML = "";
  for (let i = 0; i < currentQuestion.totalMarks; i++) {
    const mark = document.createElement("div");
    mark.classList.add("mark");
    mark.textContent = currentQuestion.markLabels[i] || (i + 1);
    if (questionStates[currentQuestion.id] && questionStates[currentQuestion.id].solved[i]) {
      mark.classList.add("solved");
    }
    marksContainer.appendChild(mark);
  }
  
  // 詳細画面では共有ボタンを非表示
  document.getElementById("share-container").style.display = "none";
  document.getElementById("question-detail").classList.remove("hidden");
  document.getElementById("question-list").classList.add("hidden");
}

// -------------------------
// ヘルパー：集合の等価判定（順序無視）
function setsEqual(setA, setB) {
  if (setA.size !== setB.size) return false;
  for (let a of setA) {
    if (!setB.has(a)) return false;
  }
  return true;
}

// ※今回、Share on X のリンクは固定（HTML内に組み込んでいるため、JSで更新しません）

// エンターキーで解答送信
document.getElementById("answer").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    document.getElementById("submit-answer").click();
  }
});

// -------------------------
// 4. 回答送信時の処理
document.getElementById("submit-answer").addEventListener("click", () => {
  const userAnswer = document.getElementById("answer").value.trim();
  
  const pressedSet = new Set(activeSequence);
  
  let foundMapping = null;
  for (let key in currentQuestion.answers) {
    const keySet = new Set(key === "" ? [] : key.split(","));
    if (setsEqual(pressedSet, keySet)) {
      foundMapping = currentQuestion.answers[key];
      break;
    }
  }
  if (!foundMapping && currentQuestion.answers[""]) {
    foundMapping = currentQuestion.answers[""];
  }
  if (!foundMapping) {
    alert("この組み合わせの回答は登録されていません。");
    return;
  }
  
  let correctMapping = foundMapping.find(mapping => mapping.text === userAnswer);
  if (correctMapping) {
    const markIndex = correctMapping.mark;
    if (!questionStates[currentQuestion.id].solved[markIndex]) {
      alert("正解！");
      totalPoints += currentQuestion.points;
      pointsDisplay.textContent = totalPoints + "pt";
      localStorage.setItem("totalPoints", totalPoints);
      questionStates[currentQuestion.id].solved[markIndex] = true;
      localStorage.setItem("questionStates", JSON.stringify(questionStates));
      
      // 正解時のみ：解答欄と文字ボタンをリセット
      document.getElementById("answer").value = "";
      letterButtons.forEach(btn => btn.classList.remove("active"));
      activeSequence = [];
      
      const marksContainer = document.querySelector(".answer-marks");
      Array.from(marksContainer.children).forEach((markElem, index) => {
        if (questionStates[currentQuestion.id].solved[index]) {
          markElem.classList.add("solved");
        }
      });
      
      if (questionStates[currentQuestion.id].solved.every(val => val)) {
        const questionItems = document.querySelectorAll(".question-item");
        questionItems.forEach(item => {
          if (item.getAttribute("data-id") == currentQuestion.id) {
            item.querySelector(".clear-indicator").style.display = "block";
          }
        });
      }
    } else {
      alert("既にこの回答のポイントは獲得済みです。");
    }
  } else {
    alert("不正解！");
  }
});

// -------------------------
// 5. 詳細画面を閉じる
document.getElementById("close-question").addEventListener("click", () => {
  document.getElementById("question-detail").classList.add("hidden");
  document.getElementById("question-list").classList.remove("hidden");
  document.getElementById("share-container").style.display = "block";
　document.getElementById("instruction").style.display = "block";
});
