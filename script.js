const scores = {
    croco: 0, tung: 0, banana: 0,
    tralala: 0, patapim: 0, lirila: 0, trippi: 0
  };
  
  const resultData = {
    croco: {
      title: "Bombardiro Crocodilo",
      image: "bombardiro-crocodilo.jpg",
      desc: "You go hard… until you crash. Deadlines are your personal warzone.",
      audio: "bombardiro-crocodilo.mp3"
    },
    tung: {
      title: "Tung Tung Tung sahur",
      image: "tung-tung-tung.jpg",
      desc: "Midnight scroller with mysterious thoughts. Are you okay? No. Will you sleep? Also no.",
      audio: "tung-tung-tung.mp3"
    },
    banana: {
      title: "Chimpanzini Bananini",
      image: "chimpanzini-bananini.jpg",
      desc: "You romanticize life… and then ignore it completely.",
      audio: "chimpanzini-bananini.mp3"
    },
    tralala: {
      title: "Tralalero Tralala",
      image: "tralalero-tralala.jpg",
      desc: "You have chaotic good energy and live by vibes and memes.",
      audio: "tralalero-tralala.mp3"
    },
    patapim: {
      title: "Brr brr Patapim",
      image: "patapim.jpg",
      desc: "Old memories haunt you. But you’re oddly chill about it.",
      audio: "patapim.mp3"
    },
    lirila: {
      title: "Lirilì Larlà",
      image: "lirili-larla.jpg",
      desc: "Mysterious desert wisdom. You're slow, strange, and oddly poetic.",
      audio: "lirili-larla.mp3"
    },
    trippi: {
      title: "Trippi Troppi",
      image: "trippi-troppi.jpg",
      desc: "You are the shrimp-cat hybrid of distracted genius. Internet is your playground.",
      audio: "trippi-troppi.mp3"
    }
  };
  
  const questions = [
    {
      text: "What was the last thing that made you mentally collapse out of nowhere?",
      options: [
        { text: "Someone stared at you and said: 'You can finish this tonight, right?'", type: 'croco' },
        { text: "A stranger Airdropped you a selfie on the subway", type: 'tralala' },
        { text: "You wrote 20 tasks in your to-do list, but only checked off 'wake up'", type: 'banana' },
        { text: "Your roommate whispered in the kitchen: 'I’m screwed…'", type: 'tung' },
        { text: "You remembered that pencil case you lost as a kid", type: 'patapim' }
      ]
    },
    {
      text: "What’s your chair’s name?",
      options: [
        { text: "I talk to it but it has no name", type: 'lirila' },
        { text: "Pain container", type: 'croco' },
        { text: "Stinky Baby / Little Angel", type: 'tung' },
        { text: "Model X", type: 'tralala' },
        { text: "It never talks back. But it listens.", type: 'banana' }
      ]
    },
    {
      text: "Which sound completely destroys your mental stability?",
      options: [
        { text: "Computer fan going full jet engine", type: 'croco' },
        { text: "Phone buzzing with 7 notifications", type: 'tung' },
        { text: "Roommate playing Just Dance at 2AM", type: 'tralala' },
        { text: "Someone saying 'This isn’t your business'", type: 'banana' },
        { text: "Your own breathing in silence", type: 'patapim' }
      ]
    },
    {
      text: "Which drink best describes your current state?",
      options: [
        { text: "Forgotten energy drink", type: 'croco' },
        { text: "Milk tea from 2 days ago", type: 'banana' },
        { text: "Green juice that’s too healthy", type: 'lirila' },
        { text: "Wrong-ratio sugar bomb latte", type: 'tung' },
        { text: "Tears", type: 'trippi' }
      ]
    },
    {
      text: "What’s running through your mind in bed?",
      options: [
        { text: "Should I restart my life?", type: 'patapim' },
        { text: "Was I fake-smiling in that IG post?", type: 'tralala' },
        { text: "Still haunted by high school moments", type: 'banana' },
        { text: "Can I finish this project in one go?", type: 'croco' },
        { text: "20 mental tabs open, no thoughts", type: 'tung' }
      ]
    },
    {
      text: "What does your brain feel like right now?",
      options: [
        { text: "Exploded kitchen", type: 'tung' },
        { text: "Stationery store of sticky notes", type: 'banana' },
        { text: "Office with yelling manager", type: 'croco' },
        { text: "Room full of meme posters", type: 'tralala' },
        { text: "Too quiet. Too windy. Too light.", type: 'lirila' }
      ]
    },
    {
      text: "Why do you open your phone?",
      options: [
        { text: "One text → TikTok for 30 min", type: 'tung' },
        { text: "Just to check time… now 15 apps deep", type: 'banana' },
        { text: "Instagram → someone else's life", type: 'trippi' },
        { text: "Trying to research → ordered food", type: 'lirila' },
        { text: "Open then instantly want to yeet it", type: 'patapim' }
      ]
    },
    {
      text: "Which line hits a little too hard?",
      options: [
        { text: "I haven’t started yet…", type: 'tung' },
        { text: "I think I’m okay… right?", type: 'banana' },
        { text: "Am I just bad at life?", type: 'croco' },
        { text: "I might be comic relief.", type: 'tralala' },
        { text: "It’s fine. It’ll pass.", type: 'lirila' }
      ]
    }
  ];
  
  let currentIndex = 0;
  let currentAudio = null;
  
  function goToPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    if (pageId === 'questions') renderQuestion();
  }
  
  function renderQuestion() {
    if (currentIndex >= questions.length) return goToPage("slider-question");
    const q = questions[currentIndex];
    const qDiv = document.getElementById('questions');
    qDiv.innerHTML = `
      <h2>Q${currentIndex + 1}</h2>
      <p>${q.text}</p>
      ${q.options.map(o => `<button onclick="selectAnswer('${o.type}')">${o.text}</button>`).join('')}
    `;
  }
  
  function selectAnswer(type) {
    scores[type]++;
    currentIndex++;
    renderQuestion();
  }
  
  document.getElementById("energySlider").addEventListener("input", function () {
    const value = Number(this.value);
    let label = "🪫 Empty";
    if (value > 85) label = "💥 Ready to explode";
    else if (value > 65) label = "⚡ High voltage";
    else if (value > 45) label = "🔋 Medium";
    else if (value > 25) label = "🔌 Slightly charged";
    else label = "🧊 Almost off";
    document.getElementById("sliderLabel").innerText = `${label} (${value})`;
  });
  
  function submitSlider() {
    const val = Number(document.getElementById("energySlider").value);
    const bucket = Math.floor(val / 15);
    const sliderToType = ["lirila", "patapim", "banana", "tralala", "trippi", "tung", "croco"];
    const type = sliderToType[Math.min(bucket, 6)];
    if (scores[type] !== undefined) {
      scores[type] += 1;
    }
    goToPage("drag-question");
  }
  
  const emojiToType = {
    "🪵": "tung",
    "🦈": "tralala",
    "🐊": "croco",
    "🦶": "patapim",
    "🐘": "lirila",
    "🦐": "trippi",
    "🦍": "banana"
  };
  
  let dragged;
  document.querySelectorAll('#dragList li').forEach(item => {
    item.addEventListener('dragstart', () => {
      dragged = item;
      item.classList.add("dragging");
    });
    item.addEventListener('dragend', () => item.classList.remove("dragging"));
    item.addEventListener('dragover', e => {
      e.preventDefault();
      const list = item.parentNode;
      const nodes = Array.from(list.children);
      const draggedIndex = nodes.indexOf(dragged);
      const targetIndex = nodes.indexOf(item);
      if (draggedIndex < targetIndex) list.insertBefore(dragged, item.nextSibling);
      else list.insertBefore(dragged, item);
    });
  });
  
  function saveDragResult() {
    const order = Array.from(document.querySelectorAll('#dragList li')).map(li => li.textContent);
    const rankingPoints = [3, 2, 1];
    for (let i = 0; i < rankingPoints.length; i++) {
      const emoji = order[i];
      const type = emojiToType[emoji];
      const points = rankingPoints[i];
      if (scores[type] !== undefined) {
        scores[type] += points;
      }
    }
    showResult();
  }
  
  function showResult() {
    let result = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    let data = resultData[result];
  
    document.getElementById('resultImage').src = data.image;
    document.getElementById('resultTitle').innerHTML = `
      <span>${data.title}</span>
      <button onclick="playAudio()" id="playAgainBtn" title="Play Sound">🔊</button>
    `;
    document.getElementById('resultDesc').innerText = data.desc;
  
    const audioElement = document.getElementById("beastAudio");
    audioElement.src = data.audio;
    audioElement.play();
    currentAudio = audioElement;
  
    goToPage('result');
  }
  
  function playAudio() {
    if (currentAudio) {
      currentAudio.currentTime = 0;
      currentAudio.play();
    }
  }
  
  function restartQuiz() {
    for (let key in scores) scores[key] = 0;
    currentIndex = 0;
    goToPage('questions');
  }