/* ==============================================================
   1. 선물 추천 데이터베이스 (50개 이상의 구체적인 비브랜드 상품군)
   ============================================================== */
const GIFT_DATABASE = [
  // 1. 고리 달린 면 주방 타월 세트
  {
    id: "kitchen_towel",
    title: "고리 달린 면 주방 타월 세트",
    situations: ["집들이", "감사", "생일"],
    relationships: ["친구", "형제자매", "선배·동료"],
    ageGroups: ["20대", "30대", "40~50대", "잘 모르겠어요"],
    moods: ["실용적인", "루돌프에게 맡길래요"],
    minBudget: 2,
    budgetGuide: "3만 원 안에서 2~3장 구성 찾아보기",
    reason: "새집에서 바로 쓸 수 있고, 같은 색으로 몇 장 묶어 주면 선물 느낌도 나요.",
    tip: "걸어두기 편한 고리형에 아이보리나 연회색처럼 무난한 색을 골라보세요.",
    message: "“새집에서 맛있는 거 많이 해 먹어! 다음에 또 놀러 갈게.”",
    rudolph: "주방 수건은 많을수록 행복지수가 올라간답니다, 딸랑!"
  },

  // 2. 버터 풍미 가득한 수제 구움과자 6구 세트
  {
    id: "baked_pastry_set",
    title: "버터 풍미 가득한 수제 구움과자 6구 세트",
    situations: ["생일", "크리스마스", "응원", "감사"],
    relationships: ["친구", "연인", "선배·동료", "선생님·상사"],
    ageGroups: ["10대 이하", "20대", "30대", "잘 모르겠어요"],
    moods: ["기분 전환용", "실용적인", "루돌프에게 맡길래요"],
    minBudget: 2,
    budgetGuide: "2~3만 원 안에서 휘낭시에와 마들렌 혼합 6구 세트 찾아보기",
    reason: "달콤한 디저트는 받는 순간 누구나 기분이 풀리고 커피나 차와 곁들이기 아주 좋아요.",
    tip: "개별 포장되어 하나씩 꺼내 먹기 편하고 유통기한이 넉넉한 것을 골라보세요.",
    message: "“당 충전하고 오늘 하루도 활짝 웃는 일만 가득하길 바라!”",
    rudolph: "휘낭시에 한 입 베어 물면 루돌프 썰매처럼 기분이 붕 떠오를 거예요!"
  },

  // 3. 가방에 넣기 좋은 350mL 보온 텀블러
  {
    id: "insulated_tumbler",
    title: "가방에 넣기 좋은 350mL 보온 텀블러",
    situations: ["생일", "응원", "크리스마스"],
    relationships: ["친구", "형제자매", "선배·동료"],
    ageGroups: ["10대 이하", "20대", "30대", "잘 모르겠어요"],
    moods: ["실용적인", "루돌프에게 맡길래요"],
    minBudget: 3,
    budgetGuide: "3만 원 안팎에서 완전 밀폐 뚜껑 구조 제품 찾아보기",
    reason: "매일 들고 다니며 물과 커피를 따뜻하게 마실 수 있어 사계절 내내 실용적이에요.",
    tip: "가방 안에서 샐 염려 없는 완전 밀폐형인지와 가벼운 무게(200g대)를 확인하세요.",
    message: "“따뜻한 음료 챙겨 마시면서 언제나 건강 챙기자!”",
    rudolph: "겨울엔 따뜻한 차, 여름엔 얼음 찰랑! 매일 그대 곁을 지킬 거예요."
  },

  // 4. 은은한 숲향의 패브릭 룸 스프레이
  {
    id: "forest_room_spray",
    title: "은은한 숲향의 패브릭 룸 스프레이",
    situations: ["집들이", "생일", "크리스마스"],
    relationships: ["친구", "연인", "형제자매"],
    ageGroups: ["20대", "30대", "잘 모르겠어요"],
    moods: ["기분 전환용", "기억에 남는", "루돌프에게 맡길래요"],
    minBudget: 3,
    budgetGuide: "3~4만 원 선에서 150~200mL 유리병 패키지 찾아보기",
    reason: "외출 전 침구나 커튼에 가볍게 칙 뿌려두면 공간 분위기가 단숨에 포근해져요.",
    tip: "호불호가 적은 편백나무나 소나무, 은은한 풀꽃 계열의 자연스러운 향을 추천해요.",
    message: "“집에 머무는 모든 시간이 향기롭고 편안하길 바라.”",
    rudolph: "숲속 요정이 방금 다녀간 것 같은 상쾌한 마법을 부려줄게요!"
  },

  // 5. 부드러운 극세사 온열 찜질팩
  {
    id: "heating_pad",
    title: "부드러운 극세사 온열 찜질팩",
    situations: ["응원", "감사", "생일", "크리스마스"],
    relationships: ["부모님", "선생님·상사", "형제자매"],
    ageGroups: ["30대", "40~50대", "60대 이상"],
    moods: ["실용적인", "루돌프에게 맡길래요"],
    minBudget: 3,
    budgetGuide: "3~4만 원 선에서 어깨와 허리 겸용 넓은 사이즈 찾아보기",
    reason: "하루 일과를 마치고 목과 어깨, 허리에 얹어두면 뭉친 피로가 사르르 녹아내려요.",
    tip: "전자레인지로 간편하게 데울 수 있는 천연 팥이나 곡물 충전재 제품이 안심돼요.",
    message: "“늘 고생 많으셨어요. 따뜻하게 찜질하시고 푹 주무세요!”",
    rudolph: "뜨끈뜨끈한 찜질팩 하나면 루돌프 코보다 더 훈훈해진답니다."
  },

  // 6. 감성적인 터치형 무선 무드등
  {
    id: "wireless_mood_light",
    title: "감성적인 터치형 무선 무드등",
    situations: ["집들이", "크리스마스", "생일"],
    relationships: ["친구", "연인", "형제자매"],
    ageGroups: ["10대 이하", "20대", "30대"],
    moods: ["기억에 남는", "기분 전환용", "루돌프에게 맡길래요"],
    minBudget: 3,
    budgetGuide: "3~4만 원 선에서 3단계 밝기 조절 및 C타입 충전형 찾아보기",
    reason: "침대 맡이나 거실 선반에 두면 밤마다 아늑하고 따뜻한 감성을 선물할 수 있어요.",
    tip: "눈부심이 적은 전구색(웜화이트) 조명에 가볍게 터치해 켜지는 방식을 골라보세요.",
    message: "“오늘 밤도 은은한 불빛처럼 따뜻하고 편안한 꿈 꿔!”",
    rudolph: "루돌프의 코처럼 은은하게 방을 밝혀줄 꼬마 등불이에요!"
  },

  // 7. 정과와 도라지 정과 전통 다과 세트
  {
    id: "traditional_snack_set",
    title: "도라지 정과와 수제 호두강정 세트",
    situations: ["감사", "생일", "응원"],
    relationships: ["부모님", "선생님·상사"],
    ageGroups: ["40~50대", "60대 이상"],
    moods: ["기억에 남는", "실용적인", "루돌프에게 맡길래요"],
    minBudget: 4,
    budgetGuide: "4~5만 원 선에서 단정한 한지나 보자기 포장 구성 찾아보기",
    reason: "달지 않고 건강한 간식으로, 정성스러운 포장 덕분에 공손한 감사 인사를 전하기 제격이에요.",
    tip: "어르신 치아에 부담 없도록 콩고물이 묻어 쫀득하고 부드러운 정과를 선택하세요.",
    message: "“언제나 베풀어주신 은혜에 감사드립니다. 늘 건강하고 평안하세요.”",
    rudolph: "어르신들 입맛을 저격하는 달콤 쌉싸름한 효도 특급 배송!"
  },

  // 8. 묵직한 도자기 머그잔 2인 세트
  {
    id: "ceramic_mug_set",
    title: "묵직한 도자기 머그잔 2인 세트",
    situations: ["집들이", "크리스마스", "생일"],
    relationships: ["연인", "친구", "형제자매"],
    ageGroups: ["20대", "30대", "40~50대"],
    moods: ["기억에 남는", "실용적인", "루돌프에게 맡길래요"],
    minBudget: 3,
    budgetGuide: "3~4만 원 안에서 손잡이 그립감이 좋은 핸드메이드 2구 세트 찾아보기",
    reason: "식탁 위에 올려만 두어도 예쁘고, 둘이서 도란도란 따뜻한 차를 나눠 마시기 좋아요.",
    tip: "유행을 타지 않는 오트밀이나 샌드 베이지 색상의 무광 도자기 재질을 추천해요.",
    message: "“함께하는 시간에 따뜻한 온기가 항상 머물기를 바라.”",
    rudolph: "커피를 담아도, 코코아를 담아도 식탁 위가 카페가 되는 마법!"
  },

  // 9. 핸드드립 커피 드립백 버라이어티 15구 세트
  {
    id: "coffee_dripbag_box",
    title: "핸드드립 커피 드립백 버라이어티 15구 세트",
    situations: ["응원", "감사", "생일"],
    relationships: ["선배·동료", "친구", "선생님·상사"],
    ageGroups: ["20대", "30대", "40~50대", "잘 모르겠어요"],
    moods: ["실용적인", "기분 전환용", "루돌프에게 맡길래요"],
    minBudget: 2,
    budgetGuide: "2~3만 원 안에서 산미/고소한 맛 균형 잡힌 15~20입 구성 찾아보기",
    reason: "사무실이나 집에서 뜨거운 물만 부으면 갓 내린 카페 핸드드립 풍미를 즐길 수 있어요.",
    tip: "호불호가 갈릴 수 있는 단일 원두보다 여러 산지의 원두가 골고루 섞인 패키지가 안전해요.",
    message: "“바쁜 일상 중에도 향긋한 커피 한 잔의 여유는 꼭 챙기세요!”",
    rudolph: "오후 3시 졸릴 때 한 잔 내리면 눈이 번쩍 뜨일 거예요!"
  },

  // 10. 시어버터 고보습 핸드크림과 립밤 세트
  {
    id: "hand_lip_care_set",
    title: "시어버터 고보습 핸드크림과 립밤 세트",
    situations: ["크리스마스", "생일", "응원", "감사"],
    relationships: ["친구", "연인", "선배·동료", "형제자매"],
    ageGroups: ["10대 이하", "20대", "30대", "잘 모르겠어요"],
    moods: ["실용적인", "루돌프에게 맡길래요"],
    minBudget: 2,
    budgetGuide: "2만 원대에서 세트로 선물 상자에 포장된 50mL+스틱형 찾아보기",
    reason: "건조한 계절에 파우치나 가방에 쏙 넣어 다니며 매일 쓰기 가장 유용한 선물이에요.",
    tip: "향이 너무 짙지 않고 보습력이 오래 유지되는 무향 또는 은은한 시트러스 계열을 고르세요.",
    message: "“찬 바람 부는 날씨에도 촉촉하고 건강한 하루 보내!”",
    rudolph: "거칠어진 손끝을 아기 사슴 털처럼 부드럽게 감싸줄게요."
  },

  // 11. 목과 어깨 휴대용 미니 마사지건
  {
    id: "mini_massage_gun",
    title: "목과 어깨 휴대용 미니 마사지건",
    situations: ["생일", "응원", "감사"],
    relationships: ["부모님", "선배·동료", "선생님·상사", "형제자매"],
    ageGroups: ["30대", "40~50대", "60대 이상"],
    moods: ["실용적인", "기억에 남는", "루돌프에게 맡길래요"],
    minBudget: 5,
    budgetGuide: "5~7만 원 선에서 400g 이하 경량 헤드 교체형 찾아보기",
    reason: "장시간 컴퓨터 작업이나 가사노동으로 뭉친 승모근과 팔다리를 시원하게 풀어줘요.",
    tip: "어르신이나 여성분도 한 손으로 부담 없이 쥘 수 있는 미니 경량형 모델을 고르세요.",
    message: "“늘 애쓰시는 어깨의 짐이 조금이나마 가벼워지셨으면 좋겠습니다.”",
    rudolph: "두두두두! 뭉친 근육을 루돌프 발굽 마사지보다 더 시원하게 털어드려요."
  },

  // 12. 캐시미어 블렌드 소프트 체크 머플러
  {
    id: "cashmere_muffler",
    title: "캐시미어 블렌드 소프트 체크 머플러",
    situations: ["크리스마스", "생일", "감사"],
    relationships: ["연인", "부모님", "친구"],
    ageGroups: ["20대", "30대", "40~50대", "60대 이상"],
    moods: ["기억에 남는", "기분 전환용", "루돌프에게 맡길래요"],
    minBudget: 5,
    budgetGuide: "5~7만 원 선에서 울&캐시미어 혼방 도톰한 기장 찾아보기",
    reason: "겨울철 외출할 때마다 목을 포근하게 감싸주며 선물한 사람의 따뜻한 마음이 전해져요.",
    tip: "어떤 외투에도 튀지 않고 잘 어울리는 베이지나 차콜, 은은한 타탄체크를 추천해요.",
    message: "“올겨울 바람이 아무리 차가워도 따뜻하고 훈훈하게 보내길 바라.”",
    rudolph: "이 목도리를 두르면 영하 10도 북극바람도 거뜬하답니다!"
  },

  // 13. 고급 엑스트라 버진 올리브오일 & 발사믹 식초 2종 세트
  {
    id: "olive_oil_balsamic_set",
    title: "고급 엑스트라 버진 올리브오일 & 발사믹 2종 세트",
    situations: ["집들이", "감사", "생일"],
    relationships: ["선생님·상사", "선배·동료", "부모님", "친구"],
    ageGroups: ["30대", "40~50대", "60대 이상"],
    moods: ["실용적인", "기억에 남는", "루돌프에게 맡길래요"],
    minBudget: 4,
    budgetGuide: "4~5만 원 선에서 냉압착 오일과 숙성 발사믹 세트 찾아보기",
    reason: "샐러드나 빵, 요리에 품격을 더해주며 내 돈 주고 사기엔 살짝 망설여지는 센스 만점 선물이에요.",
    tip: "산도 0.2% 이하의 냉압착 엑스트라 버진 올리브유와 포도 농축액 함량이 높은 발사믹을 고르세요.",
    message: "“맛있는 음식과 함께 매일의 식탁이 더욱 풍성하고 건강하시길 바랍니다.”",
    rudolph: "식빵 하나 찍어 먹어도 고급 이탈리안 레스토랑으로 순간이동!"
  },

  // 14. 데스크 테리어용 원목 만년 달력과 펜 트레이
  {
    id: "wooden_perpetual_calendar",
    title: "데스크 테리어용 원목 만년 달력과 펜 트레이",
    situations: ["응원", "생일", "집들이"],
    relationships: ["선배·동료", "친구", "형제자매"],
    ageGroups: ["20대", "30대", "잘 모르겠어요"],
    moods: ["기억에 남는", "실용적인", "기분 전환용"],
    minBudget: 3,
    budgetGuide: "3만 원 안팎에서 월넛이나 오크 원목 마감 제품 찾아보기",
    reason: "해마다 바꿀 필요 없이 평생 쓸 수 있고, 책상 위에 단정하고 차분한 무드를 더해줘요.",
    tip: "원목 결이 자연스럽고 마감이 부드러우며 작은 클립이나 펜을 놓을 홈이 있는 것을 고르세요.",
    message: "“새로운 시작을 진심으로 응원해! 네가 걸어갈 매일이 빛나길.”",
    rudolph: "책상 위 작은 숲! 매일 날짜를 넘기며 행복한 하루를 맞이하세요."
  },

  // 15. 수면의 질을 높여주는 암막 실크 수면안대와 필로우 미스트
  {
    id: "sleep_eye_pillow_mist",
    title: "암막 실크 수면안대와 라벤더 필로우 미스트",
    situations: ["응원", "생일", "크리스마스"],
    relationships: ["친구", "연인", "형제자매", "선배·동료"],
    ageGroups: ["10대 이하", "20대", "30대"],
    moods: ["기분 전환용", "실용적인", "루돌프에게 맡길래요"],
    minBudget: 3,
    budgetGuide: "3~4만 원 선에서 100% 천연 실크 안대와 100mL 미스트 세트 찾아보기",
    reason: "불빛을 완벽히 차단하고 베개에 향을 뿌리면 스트레스로 지친 밤 깊은 잠에 들 수 있어요.",
    tip: "피부에 자극이 적은 천연 실크 원단인지, 미스트는 자극 없는 천연 아로마 오일인지 확인하세요.",
    message: "“그동안 고생 많았어. 오늘 밤엔 아무 걱정 없이 꿀잠 자길 바라!”",
    rudolph: "양 100마리 셀 필요 없이, 눕자마자 꿈나라 급행열차 탑승!"
  },

  // 16. 포근한 실내용 극세사 룸슈즈 슬리퍼
  {
    id: "cozy_room_shoes",
    title: "포근한 실내용 극세사 룸슈즈 슬리퍼",
    situations: ["집들이", "크리스마스", "생일"],
    relationships: ["친구", "연인", "형제자매", "부모님"],
    ageGroups: ["20대", "30대", "40~50대"],
    moods: ["실용적인", "기분 전환용", "루돌프에게 맡길래요"],
    minBudget: 2,
    budgetGuide: "2만 원대에서 미끄럼 방지 바닥과 도톰한 발바닥 쿠션 제품 찾아보기",
    reason: "차가운 실내 바닥으로부터 발을 따뜻하게 지켜주고 층간소음 완화에도 도움이 돼요.",
    tip: "바닥에 미끄럼 방지 고무(TPR) 처리가 되어 있고 발볼이 넉넉한 사이즈를 고르세요.",
    message: "“발걸음 닿는 곳마다 폭신하고 따뜻한 행복만 가득하길!”",
    rudolph: "구름 위를 걷는 것처럼 발끝이 사르르 녹아내린답니다."
  },

  // 17. 환절기 목 건강에 좋은 유기농 배도라지청
  {
    id: "pear_bellflower_syrup",
    title: "유기농 배도라지청 단지 세트 (나무 스푼 포함)",
    situations: ["응원", "감사", "생일"],
    relationships: ["부모님", "선생님·상사", "선배·동료"],
    ageGroups: ["30대", "40~50대", "60대 이상"],
    moods: ["실용적인", "기억에 남는", "루돌프에게 맡길래요"],
    minBudget: 3,
    budgetGuide: "3~4만 원 선에서 무설탕 500g 유리병 단지 세트 찾아보기",
    reason: "말을 많이 하거나 기침이 잦은 분에게 따뜻한 온수와 함께 타 드시기 아주 든든해요.",
    tip: "설탕이나 인공감미료 없이 국내산 배 농축액과 도라지만으로 진하게 달인 것을 고르세요.",
    message: "“환절기 건강 꼭 챙기시고 목 편안한 날들 되시길 기원합니다.”",
    rudolph: "목소리가 카랑카랑! 맑은 목소리로 다시 노래할 수 있어요."
  },

  // 18. 식물 초보자도 키우기 쉬운 테이블 공기정화 반려식물 (토분 포함)
  {
    id: "tabletop_green_plant",
    title: "키우기 쉬운 스투키 또는 테이블야자 (미니 토분 포함)",
    situations: ["집들이", "생일", "응원"],
    relationships: ["친구", "선배·동료", "형제자매"],
    ageGroups: ["20대", "30대", "40~50대", "잘 모르겠어요"],
    moods: ["기분 전환용", "기억에 남는", "루돌프에게 맡길래요"],
    minBudget: 2,
    budgetGuide: "2~3만 원 안에서 이태리 토분에 식재된 20cm 내외 식물 찾아보기",
    reason: "물 주는 주기가 길어 관리가 쉽고, 방 한구석에 싱그러운 생기를 불어넣어 줘요.",
    tip: "통풍과 배수가 잘 되는 천연 토분에 심겨 있고 잎 끝이 건강하고 윤기 있는 것을 선택하세요.",
    message: "“작은 초록 잎처럼 네 하루에도 싱그러운 행복이 무럭무럭 자라길!”",
    rudolph: "초록 식물 친구가 집안의 나쁜 공기를 꿀꺽 삼켜줄 거예요!"
  },

  // 19. 프리미엄 견과류 하루 한 포 30일 선물세트
  {
    id: "daily_nuts_premium_set",
    title: "프리미엄 구운 견과류 하루 한 포 30일 선물세트",
    situations: ["감사", "생일", "응원"],
    relationships: ["부모님", "선생님·상사", "선배·동료"],
    ageGroups: ["30대", "40~50대", "60대 이상"],
    moods: ["실용적인", "루돌프에게 맡길래요"],
    minBudget: 3,
    budgetGuide: "3~4만 원 선에서 마카다미아와 피칸이 포함된 25g x 30포 구성 찾아보기",
    reason: "바쁜 아침 간편하게 영양을 챙길 수 있어 부모님이나 직장인 모두에게 부담 없는 선물이에요.",
    tip: "눅눅하지 않도록 질소 포장되어 있고 건포도나 설탕 크랜베리 비중이 적은 견과 위주를 고르세요.",
    message: "“매일 건강 잘 챙기시고 언제나 활기찬 하루 보내세요!”",
    rudolph: "오독오독 씹을수록 고소함이 팡팡! 두뇌 회전도 빨라져요."
  },

  // 20. 거품 목욕을 위한 천연 아로마 배스밤 4구 세트
  {
    id: "bath_bomb_set",
    title: "천연 아로마 거품 입욕제 배스밤 4구 세트",
    situations: ["생일", "크리스마스", "응원"],
    relationships: ["연인", "친구", "형제자매"],
    ageGroups: ["10대 이하", "20대", "30대"],
    moods: ["기분 전환용", "기억에 남는", "루돌프에게 맡길래요"],
    minBudget: 2,
    budgetGuide: "2~3만 원 안에서 다채로운 컬러와 향으로 구성된 4개 세트 찾아보기",
    reason: "욕조 가득 풍성한 거품과 은은한 향을 풀고 피로를 녹이는 특별한 힐링 시간을 선물해요.",
    tip: "욕조에 착색되지 않는 천연 색소 제품인지, 피부가 건조해지지 않는 보습 오일 함유 제품인지 확인하세요.",
    message: "“오늘 하루만큼은 모든 걱정 내려놓고 보글보글 힐링 타임 보내!”",
    rudolph: "향긋한 거품 속에서 둥둥 떠다니면 여기가 바로 천국!"
  },

  // 21. 슬림 가죽 카드지갑
  {
    id: "slim_leather_cardholder",
    title: "천연 소가죽 슬림 포켓 카드지갑",
    situations: ["생일", "크리스마스", "응원"],
    relationships: ["연인", "형제자매", "선배·동료", "친구"],
    ageGroups: ["20대", "30대"],
    moods: ["기억에 남는", "실용적인", "루돌프에게 맡길래요"],
    minBudget: 4,
    budgetGuide: "4~6만 원 선에서 카드 4장+지폐 포켓 수납 구조 찾아보기",
    reason: "두꺼운 지갑 대신 주머니나 미니백에 쏙 들어가 매일 가볍게 들고 다닐 수 있어요.",
    tip: "손에 쥐었을 때 질감이 부드러운 소가죽 재질에 스티치 마감이 견고한 것을 고르세요.",
    message: "“새 지갑에 좋은 일과 행운만 차곡차곡 가득 쌓이길 바랄게!”",
    rudolph: "머니머니해도 지갑이 얇아야 주머니가 가벼운 법이죠!"
  },

  // 22. 차량용 고급 메탈 통풍구 디퓨저
  {
    id: "car_air_vent_diffuser",
    title: "차량용 알루미늄 메탈 통풍구 방향제 (리필 2개 포함)",
    situations: ["생일", "집들이", "응원", "감사"],
    relationships: ["선배·동료", "친구", "부모님", "연인"],
    ageGroups: ["20대", "30대", "40~50대"],
    moods: ["실용적인", "기분 전환용", "루돌프에게 맡길래요"],
    minBudget: 3,
    budgetGuide: "3~4만 원 선에서 메탈 마감 본체와 세라믹 리필 구성 찾아보기",
    reason: "차 문을 열 때마다 기분 좋은 향기가 반겨주고 대시보드 인테리어에도 깔끔하게 어울려요.",
    tip: "액체 누수 걱정이 없는 고체 세라믹 도넛 형태의 리필 제품을 선택하세요.",
    message: "“언제나 안전 운전하시고, 운전하는 시간마다 기분 좋은 일만 가득하세요!”",
    rudolph: "드라이브할 때마다 꽃길을 달리는 기분이 들게 해드릴게요."
  },

  // 23. 손목이 편안한 인체공학 메모리폼 키보드 팜레스트
  {
    id: "ergonomic_wrist_rest",
    title: "인체공학 저반발 메모리폼 키보드 & 마우스 손목받침대",
    situations: ["응원", "생일"],
    relationships: ["선배·동료", "친구", "형제자매"],
    ageGroups: ["20대", "30대", "40~50대"],
    moods: ["실용적인", "루돌프에게 맡길래요"],
    minBudget: 2,
    budgetGuide: "2만 원대에서 키보드용과 마우스용 세트 구성 찾아보기",
    reason: "장시간 컴퓨터 업무를 보는 직장인이나 학생의 손목 꺾임을 방지하고 통증을 덜어줘요.",
    tip: "오염이 묻어도 물티슈로 쉽게 닦아낼 수 있는 방수 코팅 원단이나 PU 가죽 소재를 고르세요.",
    message: "“열심히 일하는 네 손목, 이제는 내가 지켜줄게! 파이팅!”",
    rudolph: "칼퇴를 부르는 마법의 손목 쿠션! 손목 뻐근함 굿바이!"
  },

  // 24. 프리미엄 티백 틴케이스 세트 (디카페인 허브티)
  {
    id: "premium_herb_tea_tin",
    title: "유기농 디카페인 허브티 틴케이스 3종 선물세트",
    situations: ["생일", "응원", "감사", "크리스마스"],
    relationships: ["선생님·상사", "부모님", "선배·동료", "친구"],
    ageGroups: ["20대", "30대", "40~50대", "60대 이상"],
    moods: ["기분 전환용", "실용적인", "루돌프에게 맡길래요"],
    minBudget: 3,
    budgetGuide: "3~4만 원 선에서 캐모마일, 루이보스 등 틴케이스 3구 세트 찾아보기",
    reason: "카페인 걱정 없이 늦은 밤에도 마실 수 있고 고급스러운 틴케이스는 보관용으로도 훌륭해요.",
    tip: "미세플라스틱 걱정 없는 생분해성 피라미드 삼각 티백 제품인지 확인하세요.",
    message: "“따뜻한 차 한 잔 마시며 오늘 하루 지친 마음을 푹 달래보세요.”",
    rudolph: "차를 우리는 동안 방안 가득 은은한 꽃향기가 피어납니다."
  },

  // 25. 충전식 양면 발열 전기 손난로 보조배터리
  {
    id: "rechargeable_hand_warmer",
    title: "조약돌 모양의 양면 발열 충전식 전기 손난로 (5000mAh)",
    situations: ["크리스마스", "생일", "응원"],
    relationships: ["친구", "연인", "형제자매", "선배·동료"],
    ageGroups: ["10대 이하", "20대", "30대"],
    moods: ["실용적인", "기분 전환용", "루돌프에게 맡길래요"],
    minBudget: 2,
    budgetGuide: "2~3만 원 안에서 스마트폰 보조배터리 겸용 모델 찾아보기",
    reason: "추운 출퇴근길 손안에 쥐고 있으면 3초 만에 따뜻해지고 비상시 스마트폰 충전도 가능해요.",
    tip: "온도 과승 방지 KC 안전 인증을 획득했고 3단계 온도 조절이 되는지 확인하세요.",
    message: "“추운 겨울 외출할 때 주머니에 쏙 넣고 따뜻하게 다녀!”",
    rudolph: "루돌프 코보다 더 뜨끈뜨끈! 겨울철 필수 생존템이랍니다."
  },

  // 26. 고급 발포 와플 규조토 욕실 발매트
  {
    id: "soft_diatomite_mat",
    title: "부드럽고 세탁 가능한 발포 규조토 욕실 발매트",
    situations: ["집들이", "생일"],
    relationships: ["친구", "형제자매", "선배·동료"],
    ageGroups: ["20대", "30대", "40~50대"],
    moods: ["실용적인", "루돌프에게 맡길래요"],
    minBudget: 2,
    budgetGuide: "2만 원대에서 깨지지 않고 세탁기 사용 가능한 소프트형 찾아보기",
    reason: "씻고 나왔을 때 발바닥 물기를 순식간에 흡수해 뽀송뽀송하고 관리가 쉬워요.",
    tip: "딱딱한 판 형태 대신 물세탁이 가능하고 바닥 미끄럼 방지가 있는 롤링 소프트형을 고르세요.",
    message: "“새 보금자리에서 늘 뽀송뽀송하고 상쾌한 일만 가득하길!”",
    rudolph: "축축한 발매트는 이제 안녕! 발 딛자마자 보송보송!"
  },

  // 27. 황동 금속 책갈피와 독서 노트 세트
  {
    id: "brass_bookmark_notebook",
    title: "고급 황동 금속 책갈피 2종 & 양장 하드커버 독서노트",
    situations: ["응원", "생일", "감사"],
    relationships: ["친구", "선생님·상사", "선배·동료"],
    ageGroups: ["10대 이하", "20대", "30대", "40~50대"],
    moods: ["기억에 남는", "실용적인", "루돌프에게 맡길래요"],
    minBudget: 2,
    budgetGuide: "2~3만 원 선에서 빈티지 황동 마감 책갈피와 180도 펼쳐지는 노트 세트",
    reason: "책을 읽거나 공부할 때마다 꺼내 쓸 수 있어 사려 깊고 지적인 감동을 줘요.",
    tip: "책 페이지에 자국이 남지 않는 매끄러운 마감인지, 노트 종이는 비침이 적은지 보세요.",
    message: "“마음에 와닿는 좋은 문장들처럼 너의 계절도 아름답게 채워지길.”",
    rudolph: "책장 사이에 끼워두면 책 읽고 싶은 마음이 퐁퐁 솟아나요."
  },

  // 28. 무선 블루투스 레트로 라디오 스피커
  {
    id: "retro_bluetooth_speaker",
    title: "원목 감성의 미니 레트로 블루투스 스피커",
    situations: ["집들이", "크리스마스", "생일"],
    relationships: ["친구", "연인", "형제자매"],
    ageGroups: ["10대 이하", "20대", "30대"],
    moods: ["기분 전환용", "기억에 남는", "루돌프에게 맡길래요"],
    minBudget: 4,
    budgetGuide: "4~5만 원 선에서 FM 라디오 겸용 충전식 미니 스피커 찾아보기",
    reason: "음악을 틀지 않아도 인테리어 소품으로 훌륭하고 캠핑이나 방 안 어디서든 감성 충만해요.",
    tip: "크기는 손바닥만 하지만 베이스 울림이 탄탄하고 배터리가 6시간 이상 지속되는 것을 고르세요.",
    message: "“너의 공간이 신나고 감미로운 멜로디로 가득 차길 바랄게!”",
    rudolph: "캐럴을 틀어놓으면 여기가 바로 크리스마스 파티장!"
  },

  // 29. 고급 린넨 티코스터와 우드 트레이 1인 홈카페 세트
  {
    id: "linen_coaster_wood_tray",
    title: "자연 원목 미니 트레이와 워싱 린넨 티코스터 4P 세트",
    situations: ["집들이", "생일", "감사"],
    relationships: ["친구", "선배·동료", "형제자매"],
    ageGroups: ["20대", "30대", "40~50대"],
    moods: ["기분 전환용", "실용적인", "기억에 남는"],
    minBudget: 2,
    budgetGuide: "2~3만 원 선에서 아카시아 통원목 트레이와 티코스터 조합 찾아보기",
    reason: "간단한 커피와 디저트를 담아 내는 것만으로도 나만의 홈카페 분위기를 완성해줘요.",
    tip: "물기나 오염에 강하도록 오일 코팅된 원목인지, 코스터는 세탁이 편리한지 확인하세요.",
    message: "“작은 티타임 하나로도 매일이 다정하고 포근했으면 좋겠어.”",
    rudolph: "물컵 하나도 품격 있게! 카페 부럽지 않은 플레이팅 완성!"
  },

  // 30. 부모님을 위한 프리미엄 경추 메모리폼 베개
  {
    id: "memory_foam_pillow",
    title: "C자 커브를 지지해주는 경추 인체공학 메모리폼 베개",
    situations: ["생일", "감사", "응원"],
    relationships: ["부모님", "선생님·상사"],
    ageGroups: ["40~50대", "60대 이상"],
    moods: ["실용적인", "기억에 남는", "루돌프에게 맡길래요"],
    minBudget: 5,
    budgetGuide: "5~8만 원 선에서 고밀도 오픈셀 메모리폼 및 텐셀 커버 구성 찾아보기",
    reason: "자고 일어났을 때 목과 어깨 뻐근함을 줄여주어 편안한 숙면을 선물할 수 있어요.",
    tip: "옆으로 누워도 귀가 눌리지 않는 양측 홈 설계와 통기성 커버 제품을 선택하세요.",
    message: "“늘 자식 걱정에 지친 부모님, 오늘 밤은 목 편안하게 깊은 잠 주무세요.”",
    rudolph: "베개에 머리를 대자마자 꿀잠의 세계로 스르륵 모셔다드릴게요!"
  },

  // 31. 귀여운 도자기 인센스 홀더와 천연 선향 스타터 세트
  {
    id: "incense_holder_starter",
    title: "미니 도자기 인센스 홀더와 편백 선향 30개입 세트",
    situations: ["집들이", "생일", "크리스마스"],
    relationships: ["친구", "형제자매", "연인"],
    ageGroups: ["20대", "30대"],
    moods: ["기분 전환용", "기억에 남는", "루돌프에게 맡길래요"],
    minBudget: 2,
    budgetGuide: "2~3만 원 안에서 재가 떨어지는 받침대가 넉넉한 도자기 세트 찾아보기",
    reason: "퇴근 후 향 하나 피워두고 멍하니 바라보는 것만으로 잡념이 사라지고 마음이 평온해져요.",
    tip: "연기가 맵지 않은 전통 천연 재료 선향인지, 홀더가 재를 잘 받쳐주는 형태인지 보세요.",
    message: "“향긋한 쉼표 하나 찍고 지친 마음 훌훌 털어내길 바라.”",
    rudolph: "솔솔 피어오르는 향 연기를 바라보며 힐링 타임 가져보세요."
  },

  // 32. 10대를 위한 귀여운 캐릭터 입체 다이어리와 젤펜 세트
  {
    id: "cute_diary_pen_set",
    title: "만년형 하드커버 일러스트 다이어리와 저중심 젤펜 세트",
    situations: ["생일", "크리스마스", "응원"],
    relationships: ["형제자매", "친구"],
    ageGroups: ["10대 이하"],
    moods: ["기억에 남는", "실용적인", "기분 전환용"],
    minBudget: 1,
    budgetGuide: "1~2만 원 선에서 스티커와 책갈피 끈이 포함된 다이어리 세트 찾아보기",
    reason: "소중한 일상과 계획을 자유롭게 기록하며 나만의 취향을 담아내기 참 좋아요.",
    tip: "날짜가 인쇄되지 않아 언제든 시작할 수 있는 만년형에 필기감이 부드러운 펜을 짝지어주세요.",
    message: "“네가 써 내려갈 반짝반짝 빛나는 꿈들을 언제나 응원해!”",
    rudolph: "비밀 일기도, 낙서도 모두 환영! 상상력을 맘껏 펼쳐봐요."
  },

  // 33. 고급 만년필과 병잉크 선물세트
  {
    id: "fountain_pen_ink_set",
    title: "입문용 메탈 바디 만년필과 시그니처 딥블루 병잉크 세트",
    situations: ["응원", "생일", "감사"],
    relationships: ["선생님·상사", "선배·동료", "부모님"],
    ageGroups: ["20대", "30대", "40~50대", "60대 이상"],
    moods: ["기억에 남는", "실용적인", "루돌프에게 맡길래요"],
    minBudget: 6,
    budgetGuide: "6~8만 원 선에서 F촉(세필) 메탈 바디 만년필과 컨버터 포함 세트 찾아보기",
    reason: "손글씨를 쓸 때마다 전해지는 특유의 사각거림과 고급스러움으로 품격을 높여줘요.",
    tip: "처음 쓰는 분도 다루기 쉬운 F닙이나 EF닙인지, 카트리지와 병잉크 호환이 되는지 확인하세요.",
    message: "“선생님께서 써 내려가실 귀한 발걸음을 항상 존경하고 응원합니다.”",
    rudolph: "사각사각 종이 위를 달리는 만년필 촉에서 깊은 멋이 느껴져요."
  },

  // 34. 연인을 위한 각인 실버 미니 펜던트 팔찌
  {
    id: "silver_engraved_bracelet",
    title: "925 실버 심플 체인 팔찌 (미니 바 펜던트)",
    situations: ["크리스마스", "생일"],
    relationships: ["연인"],
    ageGroups: ["20대", "30대"],
    moods: ["기억에 남는", "루돌프에게 맡길래요"],
    minBudget: 5,
    budgetGuide: "5~7만 원 선에서 변색 방지 로듐 도금된 925 법정 순은 제품 찾아보기",
    reason: "매일 손목에 차고 다니며 서로를 기억할 수 있는 깔끔하고 부담 없는 데일리 주얼리예요.",
    tip: "손목 둘레에 맞게 조절할 수 있는 여유 체인이 달렸는지, 알레르기 방지 처리인지 보세요.",
    message: "“늘 내 곁에서 환하게 웃어줘서 고마워. 우리 예쁜 추억 많이 만들자!”",
    rudolph: "손목 위에서 반짝반짝! 볼 때마다 얼굴에 미소가 번질 거예요."
  },

  // 35. 휴대용 미니 진공 보풀제거기 (6중날 USB-C 충전)
  {
    id: "fabric_shaver",
    title: "의류 손상 방지 다이아몬드 6중날 충전식 보풀제거기",
    situations: ["생일", "집들이", "크리스마스"],
    relationships: ["친구", "형제자매", "선배·동료"],
    ageGroups: ["20대", "30대", "40~50대"],
    moods: ["실용적인", "루돌프에게 맡길래요"],
    minBudget: 2,
    budgetGuide: "2~3만 원 안에서 잔여 보풀 흡입 팬이 내장된 무선 C타입 찾아보기",
    reason: "겨울철 니트나 코트에 일어난 보풀을 새 옷처럼 말끔하게 정리해 주는 실용 끝판왕이에요.",
    tip: "얇은 니트가 뜯기지 않도록 3단계 높낮이 조절 캡이 있는 제품을 선택하세요.",
    message: "“좋아하는 옷 오래오래 새 옷처럼 예쁘게 입어!”",
    rudolph: "드르륵 지나가기만 하면 헌 옷이 새 옷으로 변신 완료!"
  },

  // 36. 부모님을 위한 프리미엄 침향환 10환 세트
  {
    id: "agarwood_pill_set",
    title: "전통 배합 침향과 녹용이 함유된 건강 환 10환 세트",
    situations: ["감사", "생일", "응원"],
    relationships: ["부모님", "선생님·상사"],
    ageGroups: ["40~50대", "60대 이상"],
    moods: ["기억에 남는", "실용적인", "루돌프에게 맡길래요"],
    minBudget: 5,
    budgetGuide: "5~8만 원 선에서 황금 보자기로 포장된 10~15환 세트 찾아보기",
    reason: "기력이 떨어지기 쉬운 부모님께 하루 한 알씩 씹어 드시며 활력을 북돋워 주는 정성 가득한 선물이에요.",
    tip: "침향 분말 함량이 15% 이상인지, 사양벌꿀로 부드럽게 반죽해 씹기 편한지 확인하세요.",
    message: "“키워주신 은혜 늘 기억하고 있습니다. 부디 아프지 마시고 건강하세요.”",
    rudolph: "부모님 활력 충전 100%! 호랑이 기운이 솟아나실 거예요."
  },

  // 37. 감성 패브릭 피크닉 매트와 방수 파우치 세트
  {
    id: "picnic_mat_set",
    title: "생활방수 감성 체크 피크닉 매트 (휴대용 스트랩 포함)",
    situations: ["생일", "응원"],
    relationships: ["친구", "연인", "형제자매"],
    ageGroups: ["10대 이하", "20대", "30대"],
    moods: ["기분 전환용", "기억에 남는", "루돌프에게 맡길래요"],
    minBudget: 2,
    budgetGuide: "2~3만 원 선에서 뒷면 은박 방수 코팅 처리된 3~4인용(150x200cm) 찾아보기",
    reason: "날 좋은 주말 잔디밭이나 한강에 가볍게 펴고 앉아 피크닉을 즐기기에 딱이에요.",
    tip: "습기가 올라오지 않게 바닥면이 완전 방수 원단인지, 접었을 때 손잡이가 달렸는지 보세요.",
    message: "“날씨 좋은 날 돗자리 챙겨서 소풍 가자! 맛있는 도시락은 내가 챙길게.”",
    rudolph: "초록 풀밭 위에 펼치면 인생샷 100장 보장합니다!"
  },

  // 38. 핸드메이드 소이 캔들과 윅트리머(심지 가위) 세트
  {
    id: "soy_candle_wick_trimmer",
    title: "천연 소이 왁스 향초 (200g) & 황동 윅트리머 세트",
    situations: ["집들이", "크리스마스", "생일"],
    relationships: ["친구", "연인", "형제자매"],
    ageGroups: ["20대", "30대"],
    moods: ["기억에 남는", "기분 전환용", "루돌프에게 맡길래요"],
    minBudget: 3,
    budgetGuide: "3~4만 원 선에서 파라핀 없는 100% 콩 오일 캔들과 심지 관리 도구 세트",
    reason: "불을 붙이는 순간 타닥타닥 타는 소리와 함께 따스한 온기와 포근한 향이 공간을 채워요.",
    tip: "유해물질 불검출 검사를 완료한 천연 소이 캔들에 나무 심지가 적용된 것을 추천해요.",
    message: "“어둠을 밝히는 촛불처럼 너의 앞날도 언제나 환하게 빛나기를.”",
    rudolph: "타닥타닥 장작 타는 소리가 들리는 아늑한 겨울밤을 선물해요."
  },

  // 39. 10대를 위한 무선 클립형 LED 스탠드
  {
    id: "clip_led_study_lamp",
    title: "침대 및 책상 거치형 무선 충전식 LED 클립 스탠드",
    situations: ["생일", "응원"],
    relationships: ["형제자매", "친구"],
    ageGroups: ["10대 이하", "20대"],
    moods: ["실용적인", "루돌프에게 맡길래요"],
    minBudget: 2,
    budgetGuide: "2만 원대에서 플리커프리 시력보호 및 자유자재 자바라 목 찾아보기",
    reason: "책장이나 침대 헤드 어디든 집게로 집어 불을 밝힐 수 있어 밤늦게 공부하거나 책 볼 때 유용해요.",
    tip: "눈 피로가 덜한 플리커프리(깜빡임 없는) 인증과 3색 빛 조절 기능이 있는지 확인하세요.",
    message: "“늦은 밤 꿈을 위해 달리는 너의 눈 건강을 지켜줄게. 파이팅!”",
    rudolph: "어두운 방에서도 집중력 쏙쏙! 시력 보호는 루돌프가 책임져요."
  },

  // 40. 도톰한 호텔식 코마사 40수 세면 타월 4P 세트
  {
    id: "hotel_towel_set",
    title: "고급 호텔식 코마사 40수 200g 세면 타월 4장 세트",
    situations: ["집들이", "생일", "감사"],
    relationships: ["선배·동료", "친구", "형제자매", "부모님"],
    ageGroups: ["20대", "30대", "40~50대"],
    moods: ["실용적인", "기억에 남는", "루돌프에게 맡길래요"],
    minBudget: 3,
    budgetGuide: "3~4만 원 선에서 먼지 날림이 적은 200g 고중량 코마사 4P 상자 포장",
    reason: "매일 아침저녁 세안 후 얼굴을 묻을 때마다 도톰하고 부드러운 감촉에 행복해져요.",
    tip: "세탁 후에도 뻣뻣해지지 않는 40수 코마사(불순물을 제거한 면) 원사를 고르세요.",
    message: "“매일 아침 세수할 때마다 뽀송하고 포근한 기운 받아 가길 바라!”",
    rudolph: "얼굴을 푹 파묻으면 5성급 호텔 스위트룸에 온 기분이에요."
  },

  // 41. 60대 이상을 위한 지압 돌기 편백 발 마사지 롤러
  {
    id: "acupressure_foot_roller",
    title: "편백나무 돌기 발 지압 롤러 & 황동 수지침 지압봉",
    situations: ["감사", "생일", "응원"],
    relationships: ["부모님", "선생님·상사"],
    ageGroups: ["60대 이상", "40~50대"],
    moods: ["실용적인", "기억에 남는", "루돌프에게 맡길래요"],
    minBudget: 2,
    budgetGuide: "2~3만 원 안에서 편백나무 향이 은은한 듀얼 롤러 세트 찾아보기",
    reason: "TV 보시면서 발로 굴리기만 해도 전신 혈액순환에 도움을 드려 어르신들 만족도가 높아요.",
    tip: "발바닥 아치 곡면에 맞춰 돌기 높낮이가 다르게 가공된 천연 원목 제품을 고르세요.",
    message: "“늘 건강하시고 걸음걸음마다 가볍고 편안하시길 진심으로 바랍니다.”",
    rudolph: "발바닥 꾹꾹! 피로가 싹 가시고 발걸음이 깃털처럼 가벼워져요."
  },

  // 42. 와인 마니아를 위한 전동 오프너와 에어레이터 세트
  {
    id: "electric_wine_opener_set",
    title: "원터치 자동 충전식 전동 와인 오프너 & 진공 스토퍼 세트",
    situations: ["집들이", "크리스마스", "생일"],
    relationships: ["친구", "선배·동료", "연인", "형제자매"],
    ageGroups: ["20대", "30대", "40~50대"],
    moods: ["실용적인", "기분 전환용", "루돌프에게 맡길래요"],
    minBudget: 3,
    budgetGuide: "3~4만 원 선에서 호일 커터, 에어레이터, 진공 마개 풀세트 찾아보기",
    reason: "힘들게 코르크를 뽑을 필요 없이 버튼 한 번으로 6초 만에 퐁 열려 홈파티 분위기를 띄워줘요.",
    tip: "남은 와인을 산화 없이 며칠간 보관할 수 있는 진공 펌프 스토퍼가 포함된 것을 고르세요.",
    message: "“좋은 사람들과 함께 달콤한 축배를 드는 날들이 많아지길!”",
    rudolph: "코르크 부러질 걱정 끝! 버튼만 꾹 누르면 마법처럼 쏙 뽑혀요."
  },

  // 43. 선생님·상사를 위한 고급 서류 가죽 포트폴리오 홀더
  {
    id: "leather_document_folder",
    title: "A4 슬림 마그네틱 자석 잠금 가죽 서류 파일 홀더",
    situations: ["감사", "응원", "생일"],
    relationships: ["선생님·상사", "선배·동료"],
    ageGroups: ["30대", "40~50대", "60대 이상"],
    moods: ["기억에 남는", "실용적인", "루돌프에게 맡길래요"],
    minBudget: 4,
    budgetGuide: "4~5만 원 선에서 사피아노 또는 빈티지 가죽 질감의 자석 클립형",
    reason: "회의나 미팅 때 중요한 서류를 구김 없이 단정하게 챙겨 다닐 수 있어 격식이 돋보여요.",
    tip: "A4 용지 30장 이상과 명함, 펜꽂이가 내부에 깔끔하게 정돈된 구조를 선택하세요.",
    message: "“선배님의 꼼꼼한 가르침 덕분에 많이 배웁니다. 늘 든든하고 감사해요.”",
    rudolph: "회의실 문 열고 들어갈 때 신뢰도가 200% 상승하는 아이템!"
  },

  // 44. 크리스마스를 위한 스노우볼 오르골 무드등
  {
    id: "snowglobe_music_box",
    title: "눈 내리는 크리스마스 트리 LED 워터볼 오르골 무드등",
    situations: ["크리스마스"],
    relationships: ["연인", "친구", "형제자매"],
    ageGroups: ["10대 이하", "20대", "30대"],
    moods: ["기분 전환용", "기억에 남는", "루돌프에게 맡길래요"],
    minBudget: 3,
    budgetGuide: "3~4만 원 선에서 눈꽃 글리터 자동 회전 및 캐럴 멜로디 기능 포함",
    reason: "스위치를 켜면 은은한 조명 아래 하얀 눈이 흩날리며 동화 같은 성탄 분위기를 연출해요.",
    tip: "건전지뿐만 아니라 C타입 USB 상시 전원 연결이 지원되는 제품이 실용적이에요.",
    message: "“메리 크리스마스! 올 한 해의 마지막이 따스한 온기로 가득하길 소망해.”",
    rudolph: "루돌프 친구들이 스노우볼 안에서 반갑게 손을 흔들고 있어요!"
  },

  // 45. 20대 친구를 위한 필름 카메라 감성 토이카메라
  {
    id: "reusable_film_camera",
    title: "다회용 플래시 내장 35mm 필름 카메라 (컬러 필름 1롤 포함)",
    situations: ["생일", "응원", "크리스마스"],
    relationships: ["친구", "연인", "형제자매"],
    ageGroups: ["10대 이하", "20대"],
    moods: ["기억에 남는", "기분 전환용", "루돌프에게 맡길래요"],
    minBudget: 4,
    budgetGuide: "4~5만 원 선에서 플래시 내장 재사용 바디와 24매 감도 400 필름 세트",
    reason: "스마트폰 사진과는 다른 아날로그 특유의 색감과 인화할 때의 두근거리는 설렘을 선물해요.",
    tip: "어두운 실내나 밤에도 찍을 수 있도록 플래시 버튼이 달린 모델인지 꼭 확인하세요.",
    message: "“우리가 함께 쌓아갈 찬란한 청춘의 순간들을 찰칵 기록해보자!”",
    rudolph: "지나간 오늘은 다시 오지 않으니까! 특별한 순간을 필름에 담아봐요."
  },

  // 46. 1만 원대 소소한 감사용 꿀 스틱 15포 선물세트
  {
    id: "honey_stick_set",
    title: "국내산 야생화꿀 & 아카시아꿀 휴대용 스틱 15포 세트",
    situations: ["감사", "응원"],
    relationships: ["선배·동료", "친구", "선생님·상사"],
    ageGroups: ["20대", "30대", "40~50대", "잘 모르겠어요"],
    moods: ["실용적인", "루돌프에게 맡길래요"],
    minBudget: 1,
    budgetGuide: "1~2만 원 안에서 이지컷 스틱 포장 15포 세트 찾아보기",
    reason: "피곤할 때 가방에서 한 포씩 쏙 꺼내 짜먹기 좋아 주는 사람도 받는 사람도 부담 없는 꿀템이에요.",
    tip: "설탕을 먹여 키운 사양꿀이 아닌 탄소동위원소비 -22.5‰ 이하의 천연 벌꿀인지 확인하세요.",
    message: "“달콤한 꿀 한 포 드시고 오늘 하루의 피로를 싹 날려버리세요!”",
    rudolph: "한 입 쪼옥 짜먹으면 꿀벌처럼 윙윙 에너지가 솟아나요!"
  },

  // 47. 1만 원대 학생용 메탈 자석 북라이트 독서등
  {
    id: "mini_book_light",
    title: "책장에 꽂아 쓰는 초경량 클립형 미니 북라이트",
    situations: ["응원", "생일"],
    relationships: ["형제자매", "친구"],
    ageGroups: ["10대 이하", "20대"],
    moods: ["실용적인", "루돌프에게 맡길래요"],
    minBudget: 1,
    budgetGuide: "1만 원대 초반에서 50g 이하 USB 충전식 북라이트 찾아보기",
    reason: "룸메이트나 가족이 잘 때 방 불을 켜지 않고도 내 책만 환하게 비춰 집중할 수 있어요.",
    tip: "책 페이지가 구겨지지 않게 클립 안쪽에 실리콘 패드가 부착된 제품을 선택하세요.",
    message: "“너의 노력과 꿈이 늦은 밤 책장 위에서 활짝 피어나길 응원해!”",
    rudolph: "책 위에 딱 꽂아두면 나만의 미니 도서관 개관!"
  },

  // 48. 10만 원 예산 최고급 무선 온열 눈 마사지기
  {
    id: "eye_massager_premium",
    title: "공기압 지압과 온열 기능이 탑재된 접이식 무선 눈 마사지기",
    situations: ["생일", "감사", "응원"],
    relationships: ["부모님", "선생님·상사", "연인"],
    ageGroups: ["30대", "40~50대", "60대 이상"],
    moods: ["실용적인", "기억에 남는", "루돌프에게 맡길래요"],
    minBudget: 8,
    budgetGuide: "8~10만 원 선에서 관자놀이 공기압 마사지와 블루투스 힐링 음악 지원 모델",
    reason: "모니터와 스마트폰으로 충혈되고 피로해진 눈가를 따뜻한 온열과 부드러운 공기압으로 지압해줘요.",
    tip: "얼굴에 닿는 부위가 오염에 강하고 부드러운 단백질 가죽 소재로 닦아내기 쉬운지 보세요.",
    message: "“종일 수고한 눈에 온전한 휴식을 선물해 드립니다. 편안한 밤 되세요.”",
    rudolph: "15분 눈 마사지 받고 나면 세상이 HD 고화질로 맑아져요!"
  },

  // 49. 10만 원 예산 프리미엄 캐시미어 100% 롱 머플러
  {
    id: "cashmere_100_scarf",
    title: "몽골산 천연 캐시미어 100% 솔리드 롱 머플러",
    situations: ["생일", "크리스마스", "감사"],
    relationships: ["부모님", "연인", "선생님·상사"],
    ageGroups: ["30대", "40~50대", "60대 이상"],
    moods: ["기억에 남는", "실용적인", "루돌프에게 맡길래요"],
    minBudget: 9,
    budgetGuide: "9~10만 원 선에서 원사 인증 라벨이 있는 캐시미어 100% 머플러",
    reason: "깃털처럼 가볍고 따뜻함이 남달라 한 번 두르면 겨울마다 가장 먼저 손이 가는 명품 선물이에요.",
    tip: "얼굴빛을 화사하게 살려주는 오트밀 멜란지나 클래식 카멜 색상을 추천해요.",
    message: "“가장 귀하고 따뜻한 온기만 담아 전해드립니다. 늘 건강하고 행복하세요.”",
    rudolph: "보들보들 천상의 촉감! 목에 닿는 순간 감탄사가 절로 나와요."
  },

  // 50. 수제 과일청 2병 세트 (자몽 & 레몬생강)
  {
    id: "handmade_fruit_syrup",
    title: "수제 착즙 자몽청 & 생강레몬청 2종 선물세트 (각 500g)",
    situations: ["집들이", "감사", "응원"],
    relationships: ["선배·동료", "친구", "선생님·상사"],
    ageGroups: ["20대", "30대", "40~50대", "잘 모르겠어요"],
    moods: ["실용적인", "기분 전환용", "루돌프에게 맡길래요"],
    minBudget: 2,
    budgetGuide: "2~3만 원 안에서 무방부제 비정제 원당 착즙 2병 세트 찾아보기",
    reason: "탄산수를 타면 시원한 에이드, 뜨거운 물을 타면 감기 예방 과일차가 되어 활용도가 높아요.",
    tip: "껍질째 들어간 슬라이스보다 과육 알맹이만 듬뿍 착즙되어 쓴맛이 적은 제품을 고르세요.",
    message: "“상큼하고 달콤한 과일차 한 잔으로 기분 좋은 하루 충전하세요!”",
    rudolph: "탄산수 부으면 홈메이드 카페 에이드가 뚝딱 완성!"
  }
];

/* ==============================================================
   2. 상태 관리 (State)
   ============================================================== */
const state = {
  age: null,
  relation: null,
  situation: null,
  budget: 3, // 기본 슬라이더 위치
  budgetSelected: false, // 사용자가 직접 움직였는지 여부
  mood: null,
  matchedList: [],
  currentIndex: 0
};

/* ==============================================================
   3. 화면 전환 제어 함수
   ============================================================== */
function showSection(sectionId) {
  document.querySelectorAll('.view-section').forEach(sec => {
    sec.classList.remove('active');
  });
  const target = document.getElementById(sectionId);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function goHome() {
  showSection('heroView');
}

function goToForm() {
  showSection('formView');
}

/* ==============================================================
   4. 옵션 선택 및 슬라이더 핸들러
   ============================================================== */
function selectOption(category, value, buttonEl) {
  const parentGrid = buttonEl.parentElement;
  const buttons = parentGrid.querySelectorAll('.select-btn');
  
  if (category === 'mood' && state[category] === value) {
    state[category] = null;
    buttonEl.classList.remove('active');
    return;
  }

  buttons.forEach(btn => btn.classList.remove('active'));
  buttonEl.classList.add('active');
  state[category] = value;

  hideValidationError();
}

function handleSliderChange(val) {
  state.budget = parseInt(val, 10);
  state.budgetSelected = true;

  const card = document.getElementById('budgetDisplayCard');
  const text = document.getElementById('budgetText');
  const subTip = document.getElementById('budgetSubTip');

  card.classList.add('selected');
  const wonString = (state.budget * 10000).toLocaleString('ko-KR');
  text.textContent = `최대 ${wonString}원`;
  subTip.textContent = `루돌프가 ${state.budget}만 원 예산 안에서 찾을게요`;

  hideValidationError();
}

/* ==============================================================
   5. 유효성 검사 및 안내
   ============================================================== */
function validateInputs() {
  if (!state.age) {
    showValidationError('groupAge', '받는 분의 [나이대]를 골라주세요!');
    return false;
  }
  if (!state.relation) {
    showValidationError('groupRelation', '받는 분과의 [관계]를 선택해주세요!');
    return false;
  }
  if (!state.situation) {
    showValidationError('groupSituation', '선물하는 [상황]을 선택해주세요!');
    return false;
  }
  if (!state.budgetSelected) {
    showValidationError('groupBudget', '최대 [예산]을 슬라이더로 조작해 골라주세요!');
    return false;
  }
  return true;
}

function showValidationError(targetGroupId, message) {
  const toast = document.getElementById('validationToast');
  const toastMsg = document.getElementById('validationToastMsg');
  toastMsg.textContent = message;
  toast.classList.add('show');

  const groupEl = document.getElementById(targetGroupId);
  if (groupEl) {
    groupEl.classList.remove('shake-error');
    void groupEl.offsetWidth;
    groupEl.classList.add('shake-error');
    groupEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

function hideValidationError() {
  const toast = document.getElementById('validationToast');
  toast.classList.remove('show');
  document.querySelectorAll('.input-group').forEach(el => {
    el.classList.remove('shake-error');
  });
}

/* ==============================================================
   6. 추천 알고리즘 (Scoring & Sorting)
   ============================================================== */
function getRecommendations() {
  const { age, relation, situation, budget, mood } = state;

  let pool = GIFT_DATABASE.filter(item => item.minBudget <= budget);

  if (pool.length === 0) {
    pool = [...GIFT_DATABASE];
  }

  const scoredItems = pool.map(item => {
    let score = 0;

    // 상황 매칭 (40점)
    if (item.situations.includes(situation)) {
      score += 40;
    }

    // 관계 매칭 (30점)
    if (item.relationships.includes(relation)) {
      score += 30;
    }

    // 나이대 매칭 (20점)
    if (age === "잘 모르겠어요") {
      score += 15;
    } else if (item.ageGroups.includes(age) || item.ageGroups.includes("잘 모르겠어요")) {
      score += 20;
    }

    // 선물 느낌 (15점)
    if (mood && mood !== "루돌프에게 맡길래요") {
      if (item.moods.includes(mood)) {
        score += 15;
      }
    } else {
      score += 10;
    }

    // 예산 적합도 (10점)
    const budgetDiff = budget - item.minBudget;
    if (budgetDiff >= 0 && budgetDiff <= 2) {
      score += 10;
    } else if (budgetDiff > 2) {
      score += 5;
    }

    return { ...item, score };
  });

  scoredItems.sort((a, b) => b.score - a.score);
  return scoredItems;
}

/* ==============================================================
   7. 결과 렌더링 및 인터랙션
   ============================================================== */
function handleRecommend() {
  if (!validateInputs()) return;

  const results = getRecommendations();
  if (results.length === 0) {
    alert("조건에 맞는 선물을 찾을 수 없습니다. 조건을 조금 넓혀보세요!");
    return;
  }

  state.matchedList = results;
  state.currentIndex = 0;

  showSection('loadingView');
  const giftBox = document.getElementById('animatedGiftBox');
  giftBox.classList.remove('open-lid');

  setTimeout(() => {
    giftBox.classList.add('open-lid');
  }, 350);

  setTimeout(() => {
    renderCard(state.matchedList[state.currentIndex]);
    showSection('resultView');
  }, 1050);
}

function renderCard(item) {
  if (!item) return;

  const moodText = state.mood && state.mood !== "루돌프에게 맡길래요" ? ` · ${state.mood}` : "";
  const wonText = `최대 ${state.budget}만 원`;
  const summary = `${state.age} ${state.relation} · ${state.situation} · ${wonText}${moodText}`;
  
  document.getElementById('cardConditionSummary').textContent = summary;

  const currentNo = state.currentIndex + 1;
  const totalNo = state.matchedList.length;
  document.getElementById('candidateCountBadge').textContent = `추천 ${currentNo} / ${totalNo}`;

  document.getElementById('cardProductTitle').textContent = item.title;
  document.getElementById('cardBudgetGuide').textContent = item.budgetGuide;
  document.getElementById('cardReason').textContent = item.reason;
  document.getElementById('cardTip').textContent = item.tip;
  document.getElementById('cardMessage').textContent = item.message;
  document.getElementById('cardRudolphComment').textContent = item.rudolph;

  const noMoreBox = document.getElementById('noMoreNotice');
  const nextBtn = document.getElementById('btnNextGift');

  if (state.currentIndex >= totalNo - 1) {
    nextBtn.style.display = 'none';
    noMoreBox.style.display = 'block';
  } else {
    nextBtn.style.display = 'flex';
    noMoreBox.style.display = 'none';
    nextBtn.innerHTML = `<span>다른 선물 보기 🔄</span> <small style="opacity: 0.8; font-size: 13px;">(남은 후보 ${totalNo - currentNo}개)</small>`;
  }
}

function showNextGift() {
  if (state.currentIndex < state.matchedList.length - 1) {
    state.currentIndex++;
    
    const card = document.getElementById('recommendationCard');
    card.style.opacity = '0';
    card.style.transform = 'translateY(6px)';
    
    setTimeout(() => {
      renderCard(state.matchedList[state.currentIndex]);
      card.style.transition = 'all 0.25s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, 150);
  }
}

function editConditions() {
  showSection('formView');
}

/* ==============================================================
   8. 편의 기능 (메시지 복사)
   ============================================================== */
function copyCardMessage() {
  const msg = document.getElementById('cardMessage').textContent.replace(/^“|”$/g, '');
  navigator.clipboard.writeText(msg).then(() => {
    showToast("메시지가 클립보드에 복사되었어요! 💌");
  }).catch(() => {
    const textArea = document.createElement("textarea");
    textArea.value = msg;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    showToast("메시지가 복사되었어요! 💌");
  });
}

function showToast(text) {
  const toast = document.getElementById('toastPopup');
  toast.textContent = text;
  toast.classList.add('active');
  setTimeout(() => {
    toast.classList.remove('active');
  }, 2200);
}