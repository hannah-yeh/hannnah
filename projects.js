const PROJECTS = {
  'food-scanner': {
    title: 'Food Scanner',
    titleZh: '反正你還是會吃',
    cover: 'images/foodscanner_cover.png',
    tags: ['Food Literacy','Educational Game'],
    year: '2025',
    media: 'Swift',
    type: 'Educational Game',
    description: 'Combining scanning technology with food education, this game lets you "catch" additives straight from ingredient labels! Players unlock health knowledge and Taiwan\'s additive history through a fun collection system. It empowers the public to avoid unsafe additives and learn how to eat healthier!',
    descriptionZh: '這是一款結合掃描辨識的食品教育遊戲，對準食品包裝成分表即可捕捉添加物，帶你解鎖添加物的知識與台灣添加物歷史。遊戲將複雜的資訊轉化為圖鑑收集增加樂趣，並同時引導大眾避開不安全的添加物，了解吃什麼會更健康！',
    content: [
      { type: 'image', src: 'images/foodscanner_cover.png' },
      { type: 'image', src: 'images/foodscanner_1.png' },
      { type: 'image', src: 'images/foodscanner_2.png' },
      { type: 'image', src: 'images/foodscanner_3.png' },
      { type: 'image', src: 'images/foodscanner_4.png' },
      { type: 'video', url: 'https://youtu.be/aVa6-HENRXk' },
      { type: 'details', items: [
        {
          label: 'About exhibition',
          value: 'Foodscanner made its physical debut at the SCCD Grad Exhibition, Between Faces. Visitors could literally grab their favorite snacks from the shelf, scan them to interact with the game, and dive into our concept website to explore the rules and ideas behind the fun!',
          valueZh: '反正你還是會吃在實踐媒傳畢展《面_面》實體展出。觀眾可以從架上拿起喜歡的零食、掃描並與遊戲互動，還能進入概念網站探索背後的規則與有趣想法！',
        }
      ]},
      { type: 'image', src: 'images/foodscanner_5.jpg' },
      { type: 'image', src: 'images/foodscanner_6.png' },
      { type: 'image', src: 'images/foodscanner_7.png' },
      { type: 'image', src: 'images/foodscanner_8.jpg' },
      { type: 'link', label: 'Foodscanner website', url: 'https://foodscanner.framer.website' },
      { type: 'credits', items: [
        { label: 'Advisor', valueZh: '莊志維' },
        { label: 'Special thanks', valueZh: '蘇志昇、黃宜品、朱晨妤' },
      ]},
    ],
  },
  'between-faces': {
    title: 'Between Faces',
    titleZh: '實踐媒傳畢展《面_面》展場互動',
    cover: 'images/betweenfaces_cover.png',
    previewOrientation: 'portrait',
    tags: ['Interactive Game','Immersive Interaction'],
    year: '2026',
    media: 'html/css/js/python',
    type: 'Interactive Exhibition Design',
    description: 'Embracing the ambitious \'bigger and better\' mindset of the SCCD Grad Exhibition, Between Faces, we pushed the boundaries of exhibition interaction. Our goal? Not just visually stunning, but incredibly fun to play! To achieve this, we meticulously planned two major exhibition interactions: the Between Faces Exclusive Challenge and the Department Showcase On-Demand.',
    descriptionZh: '秉持著實踐媒傳畢展《面_面》「做大做強」的意志，展場互動也必須超越以往，不只要好看，更要好玩！為此，我們精心策劃了展場互動：面_面限定挑戰、學院形象點播區。',
    content: [
      { type: 'image', src: 'images/betweenfaces_1.png' },
      { type: 'details', items: [
        {
          label: 'Between Faces Exclusive Challenge',
          value: 'Control the entire game interface through facial feature detection. Time trials and a ranking system bring the thrill, while the final player snapshot at the results screen adds extra fun to the exhibition!',
          valueZh: '挑戰全程偵測五官操作遊戲介面，結合計時賽與排名機制帶來刺激感，最後的玩家快照結算畫面，更為展場增添滿滿歡樂！',
        }
      ]},
      { type: 'image', src: 'images/betweenfaces_2.jpg' },
      { type: 'image', src: 'images/betweenfaces_3.png' },
      { type: 'image', src: 'images/betweenfaces_4.png' },
      { type: 'image', src: 'images/betweenfaces_5.jpg' },
      { type: 'image', src: 'images/betweenfaces_7.png' },
      { type: 'video', url: 'https://youtube.com/shorts/RkJd1P1RGKo?feature=share' },
      { type: 'details', items: [
        {
          label: 'Department Showcase On-Demand',
          value: 'Uniting the four design departments (scfd, scad, scid, and sccd), we implemented radar detection across two massive entrance walls, allowing visitors to interactively play each department\'s showcase video.',
          valueZh: '本次做大做強聯合實踐設計學院四大系所（服裝、建築、工設、媒傳），在入口處兩大牆面使用雷達偵測，讓觀眾點播各系形象影片。',
        }
      ]},
      { type: 'image', src: 'images/betweenfaces_8.png' },
      { type: 'credits', items: [
        { label: 'Advisor', valueZh: '陳威志、高捷、王世偉' },
      ]},
    ],
  },
  'underneath': {
    title: 'Underneath',
    titleZh: '',
    cover: 'images/underneath_cover.png',
    tags: ['Clothing and Female Roles','Interactive Storytelling Website'],
    year: '2024',
    media: 'html/css/js/mdjourney',
    type: 'Interactive Storytelling Website',
    description: 'Through an interactive storytelling website, history is transformed into an accessible and engaging narrative for all ages. It guides users to reflect on a deeper theme: how the female body has been shaped, bound, and ultimately liberated.',
    descriptionZh: '透過互動故事網站將歷史轉化為平易近人的互動篇章，讓不同年齡層都能容易閱讀，並引導使用者思考：女性的身體是如何被塑造、束縛與解放。',
    content: [
      { type: 'image', src: 'images/underneath_cover.png' },
      { type: 'details', items: [
        {
          label: 'About story',
          value: 'Following a timeline, the story features three major chapters: The Middle Ages & Renaissance, The 17th & 18th Century, and The Late 19th & Early 20th Century.',
          valueZh: '故事以時間軸分為三大主題篇章，從中世紀與文藝復興、17 與 18 世紀，到 19 世紀末與 20 世紀初。',
        }
      ]},
      { type: 'image', src: 'images/underneath_1.png' },
      { 
        type: 'details', items: [
          {
            label: 'About timeline',
            value: 'The Middle Ages & Renaissance:\nSimple wraps symbolized obedience and morality, subtly emphasizing the female curve and paving the way for future developments.\n\nThe 17th & 18th Century:\nCorsets became highly popular, strongly shaping the "S" silhouette as a symbol of status and wealth. Despite the restriction, it established the pursuit of physical aesthetics for women.\n\nThe Late 19th & Early 20th Century:\nWith women\'s liberation, bras replaced corsets. Underwear design shifted towards comfort and health, with styles like the bullet bra emphasizing power and confidence, symbolizing the manifestation of women\'s bodily autonomy.',
            valueZh: '\n中世紀與文藝復興：\n以簡樸的裹身衣象徵順從與道德，隱約強調女性的曲線，為後續發展埋下伏筆。\n\n17 & 18 世紀：\n馬甲（Corset）盛行，強烈塑造「S」型曲線，成為地位與財富的象徵。儘管帶來束縛，也奠定了女性對身體美感的追求。\n\n19 末至 20 世紀初：\n隨著女性解放，胸罩取代馬甲。內衣設計轉向舒適與健康，並出現如子彈內衣等強調力量與自信的款式，象徵女性身體自主權的展現。'
          }
      ]},
      { type: 'image', src: 'images/underneath_2.png' },
      { type: 'image', src: 'images/underneath_3.png' },
      { type: 'image', src: 'images/underneath_4.png' },
      { type: 'image', src: 'images/underneath_5.png' },
      { type: 'image', src: 'images/underneath_6.png' },
      { type: 'video', url: 'https://youtu.be/hHaGiemIdn8?si=kGETDwLisphhXW-l' },
      { type: 'credits', items: [
        { label: 'Advisor', valueZh: '朱祐辰、顏瑞儀' },
      ]},
    ],
  },
  'shape-of-sound': {
    title: 'The Shape Of Sound',
    titleZh: '聲音的形狀',
    cover: 'images/sound_cover.png',
    tags: ['Audio Visualization','Interactive Digital Projection'],
    year: '2023',
    media: 'Organza/P5.js',
    type: 'Interactive Digital Projection',
    description: 'Powered by p5.js real-time audio detection, it creates dynamic graphics that grow, breathe, and pulsate to the sound—visualizing audio and turning what you hear into shapes you can see and feel.',
    descriptionZh: '透過p5.js即時收音創造出會隨著聲音生長、呼吸、脈動的動態圖形，讓聲音視覺化，讓耳朵聽見的成為眼睛可以感受的形狀。',
    content: [
      { type: 'image', src: 'images/sound_1.png' },
      { type: 'image', src: 'images/sound_2.png' },
      { type: 'image', src: 'images/sound_3.png' },
      { type: 'image', src: 'images/sound_4.png' },
      { type: 'video', url: 'https://youtu.be/-WiQBmBVsSc?si=PauRfN23XBjgE0jx' },
      { type: 'link', label: 'The Shape Of Sound', url: 'https://editor.p5js.org/hannah9303024/full/n51Y1egjO' },
      { type: 'credits', items: [
        { label: 'Advisor', valueZh: '蘇志昇' },
      ]},
    ],
  },
};
