export const BuildingData = [
  {
    id: 'building-1',
    name: '雨水回收',
    content: '收集城市雨水，經系統性處理提供1F中庭植栽澆灌綠化噴灌用水等...非飲用水回收使用。',
    video: new URL('@/assets/video/building/雨水回收NEW.mp4', import.meta.url).href,
  },
  {
    id: 'building-2',
    name: '排水系統',
    image: new URL('@/assets/img/construction/building/新型存水彎排水NEW.webp', import.meta.url)
      .href,
    content:
      '廚房排水較易因油脂硬化而堵塞，舊型排水管存水彎，角度低於90度，當層疏通之通管條較難通過，必須至樓下天花板開啟舊型存水彎才能疏通，新型排水管存水彎工法升級，角度較大，堵塞時可單層維修，不需至樓下樓層麻煩鄰居，容易當層清潔。\n 污水分流，減少排水造成逆流。\n 2F以下樓層獨立分流管線。',
  },
  {
    id: 'building-4',
    name: '石膏牆',
    content:
      '本隔間磚牆採石膏材質，隔音性能優異，可阻隔52分貝聲音，營造安靜空間。結構輕巧堅固，便於快速安裝，適用於辦公室、住宅與商業空間。',
    video: new URL('@/assets/video/building/石膏牆.mp4', import.meta.url).href,
  },
  {
    id: 'building-5',
    name: '車道感應雙系統',
    video: new URL('@/assets/video/building/汽車雙感應.mp4', import.meta.url).href,
    content:
      'ETag感應系統、長距感應系統\n1.車道門禁使用雙系統感應。\n 2.長距感應也可提供機車、腳踏車進出方便。\n 3.長距感應系統可結合社區其它門禁使用更便利。 ',
  },
  {
    id: 'building-6',
    name: '智能免持卡系統',
    image: new URL('@/assets/img/construction/building/智能免持@2x.webp', import.meta.url).href,
    content:
      '中距離感應式門禁系統\n1.全社區分層分棟管理。\n2.專屬門禁感應器，無須持卡，中距離感應即可通過社區所有門禁。\n3.住家玄關門還可使用指紋辨識。',
  },
  {
    id: 'building-7',
    name: '樓地板厚度',
    content:
      '樓地板隔音效果和厚度有直接關係，樓上跑動、甚至走路重一點，樓下往往聽得一清二楚。秉持建築安全的理念，樓地板都為18分厚度，對降低震動、隔絕噪音效果提升不少，讓居住品質更提升!',
    video: new URL('@/assets/video/building/樓地板厚度.mp4', import.meta.url).href,
  },
  {
    id: 'building-8',
    name: '單層排氣',
    video: new URL('@/assets/video/building/當層排氣.mp4', import.meta.url).href,
    content:
      '於當樓層直接排風，避免上下樓層空氣互相影響，保持浴室內空氣順暢，潔淨清爽，不易因潮濕滋生黴菌或細菌，守護您的健康；並採一次灌漿，做管道間RC防火層隔斷、磚牆隔斷，當火災不幸發生時可避免產生煙囪效應，確保住戶之居家安全。',
  },
  {
    id: 'building-9',
    name: '光纖到府',
    items: [
      {
        key: 'item-1',
        order: 0,
        video: new URL('@/assets/video/building/FTTP光纖.mp4', import.meta.url).href,
      },
      {
        key: 'item-2',
        order: 1,
        image: new URL('@/assets/img/construction/building/04-02-04-03_table.webp', import.meta.url)
          .href,
      },
    ],
    content:
      '網路傳輸速度成了走入雲端系統中最重要的環節之一，FTTH則是將光纖連結至家中，\n達到網路傳輸量極大化。',
  },
  {
    id: 'building-10',
    name: '地下室換氣',
    video: new URL('@/assets/video/building/地下室換氣設備.mp4', import.meta.url).href,
    content:
      '車場設排氣機，自動設定開關控制風機運轉，誘導式排風機將停車場廢氣排出，進風管不斷補充新鮮空氣，維持停車場空氣品質。\n地下室WIFI，讓你的通訊無死角。',
  },
  {
    id: 'building-11',
    name: '垃圾冷藏',
    video: new URL('@/assets/video/building/垃圾冷藏.mp4', import.meta.url).href,
    content:
      '社區規劃資源回收中心、一般垃圾冷藏庫及廚餘冷凍櫃，以冷藏4度C〜5度C保存，防止氣味產生，保持環環境整潔。垃圾車來時，物管管理公司統一處理。',
  },
  {
    id: 'building-12',
    name: '緊急發電',
    video: new URL('@/assets/video/building/緊急發電機.mp4', import.meta.url).href,
    content: '15人三菱電梯停電不斷電系統，緊急發電不斷電，搭配三菱電腦式感應讀卡，無障礙按鈕面板。',
  },
]
