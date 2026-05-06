// ═══════════════════════════════════════════════════════════
//  CS2 Grenade Bot — База раскидок
//
//  Чтобы добавить видео к раскидке:
//  1. Найдите раскидку по id
//  2. Добавьте YouTube ID в поле ytId
//     Пример: ссылка https://youtu.be/XXXXXXXXXXX
//              ytId:  "XXXXXXXXXXX"
// ═══════════════════════════════════════════════════════════

const MAPS = {
  mirage:  { name: "Mirage",   emoji: "🏙️",  c1: "#1B2B4B", c2: "#4A321A" },
  inferno: { name: "Inferno",  emoji: "🌆",  c1: "#3D0F05", c2: "#8B2800" },
  dust2:   { name: "Dust 2",   emoji: "🏜️",  c1: "#2B2010", c2: "#5C3D15" },
  ancient: { name: "Ancient",  emoji: "🏛️",  c1: "#0F2A18", c2: "#1E4A2A" },
  nuke:    { name: "Nuke",     emoji: "☢️",  c1: "#0F1B2B", c2: "#1E2B3F" },
  anubis:  { name: "Anubis",   emoji: "🐾",  c1: "#251A00", c2: "#4A3200" },
  vertigo: { name: "Vertigo",  emoji: "🏗️",  c1: "#0F1520", c2: "#1E2A3D" },
};

const TYPES = {
  smoke:   { name: "Смоки",    emoji: "💨", color: "#60A5FA" },
  molotov: { name: "Молотовы", emoji: "🔥", color: "#F97316" },
  flash:   { name: "Флешки",   emoji: "⚡", color: "#EAB308" },
  he:      { name: "HE",       emoji: "💥", color: "#EF4444" },
};

// ────────────────────────────────────────────────────────────
// LINEUPS
// ytId: YouTube video ID (пусто → "Видео скоро")
// steps: шаги инструкции (массив строк)
// tip: финальная подсказка
// ────────────────────────────────────────────────────────────
const LINEUPS = [

  // ═══════ MIRAGE ═══════════════════════════════════════════

  { id:"mir_smk_01", map:"mirage", type:"smoke", difficulty:"easy",
    name:"CT Smoke", from:"T-спавн (центр)", to:"CT Connector",
    ytId:"",
    steps:["Встаньте по центру T-спавна у линии",
           "Прицельтесь в правый верхний угол арки апса",
           "Обычный бросок (левый клик)"],
    tip:"Закрывает CT от апса при пуше на A-сайт" },

  { id:"mir_smk_02", map:"mirage", type:"smoke", difficulty:"medium",
    name:"Jungle Smoke", from:"T-спавн (лево)", to:"Jungle",
    ytId:"",
    steps:["Встаньте у левого угла T-спавна, прислонитесь к стене",
           "Поднимите прицел чуть выше крыши левого здания",
           "Обычный бросок — граната перелетает крышу"],
    tip:"Перекрывает Jungle при заходе на A-сайт" },

  { id:"mir_smk_03", map:"mirage", type:"smoke", difficulty:"medium",
    name:"Stairs Smoke", from:"T апс (у ящиков)", to:"Лестницы CT",
    ytId:"",
    steps:["Встаньте у больших ящиков в T апсе",
           "Смотрите на верхний левый угол окна апса",
           "Прыжок + бросок одновременно (jumpthrow)"],
    tip:"Закрывает снайперскую позицию на лестницах CT" },

  { id:"mir_smk_04", map:"mirage", type:"smoke", difficulty:"easy",
    name:"Van Smoke (B)", from:"B апс", to:"Van",
    ytId:"",
    steps:["Встаньте у правой стены B апса",
           "Прицельтесь в верхний правый угол входа в B",
           "Обычный бросок"],
    tip:"Закрывает Van при заходе на B-сайт" },

  { id:"mir_smk_05", map:"mirage", type:"smoke", difficulty:"easy",
    name:"Short Smoke (B)", from:"B апс (центр)", to:"Short CT",
    ytId:"",
    steps:["Встаньте по центру B апса",
           "Прицельтесь в верхний край правой стены тоннеля",
           "Обычный бросок"],
    tip:"Изолирует CT шорт при заходе через B" },

  { id:"mir_smk_06", map:"mirage", type:"smoke", difficulty:"hard",
    name:"Ticket Booth Smoke", from:"T апс A (у большого ящика)", to:"Ticket Booth",
    ytId:"",
    steps:["Встаньте у большого ящика в T апсе A",
           "Прислонитесь к ящику с правой стороны",
           "Прицельтесь в угол кирпичной стены над аркой",
           "Jumpthrow (прыжок + бросок)"],
    tip:"Полностью перекрывает Ticket Booth" },

  { id:"mir_mol_01", map:"mirage", type:"molotov", difficulty:"medium",
    name:"Ticket Booth Mol", from:"T апс (у правого ящика)", to:"Ticket Booth",
    ytId:"",
    steps:["Встаньте у правого ящика в T апсе",
           "Прицельтесь в угол арки над Ticket Booth",
           "Обычный бросок — молотов падает прямо в угол"],
    tip:"Выкуривает CT из Ticket Booth" },

  { id:"mir_mol_02", map:"mirage", type:"molotov", difficulty:"easy",
    name:"Bench Molotov (B)", from:"B апс", to:"Bench",
    ytId:"",
    steps:["Встаньте у левой стены B апса",
           "Прицельтесь над левым краем входа в B",
           "Обычный бросок"],
    tip:"Сжигает позицию Bench — любимое место снайпера" },

  { id:"mir_fl_01", map:"mirage", type:"flash", difficulty:"medium",
    name:"Ramp Pop Flash (A)", from:"Ramp (T сторона)", to:"Верхний апс",
    ytId:"",
    steps:["Зайдите на Ramp, встаньте у правой стены",
           "Смотрите вверх-вправо на край крыши",
           "Бросьте флешку — рикошетит и слепит A-сайт",
           "Сразу отвернитесь после броска!"],
    tip:"Слепит CT на верхнем апсе и A-сайте" },

  { id:"mir_he_01", map:"mirage", type:"he", difficulty:"hard",
    name:"HE на Stairs (A)", from:"T апс A", to:"Лестницы (под ними)",
    ytId:"",
    steps:["Встаньте у левой стены T апса A",
           "Прицельтесь в нижний край перил лестниц",
           "Jumpthrow — HE взрывается под перилами"],
    tip:"Наносит урон CT стоящему под лестницами" },

  // ═══════ INFERNO ══════════════════════════════════════════

  { id:"inf_smk_01", map:"inferno", type:"smoke", difficulty:"easy",
    name:"CT Smoke (Banana)", from:"T-спавн (у машины)", to:"CT Connector",
    ytId:"",
    steps:["Встаньте у капота машины в T спавне",
           "Прицельтесь в верхний правый угол здания",
           "Обычный бросок"],
    tip:"Закрывает CT при пуше по Banana" },

  { id:"inf_smk_02", map:"inferno", type:"smoke", difficulty:"medium",
    name:"Pit Smoke (A)", from:"T-спавн (центр)", to:"Pit",
    ytId:"",
    steps:["Встаньте по центру T спавна у линии",
           "Прицельтесь в верхний угол балкона здания",
           "Обычный бросок"],
    tip:"Закрывает снайпера в Pit при заходе A" },

  { id:"inf_smk_03", map:"inferno", type:"smoke", difficulty:"easy",
    name:"Library Smoke (A)", from:"T апс A (правая стена)", to:"Library",
    ytId:"",
    steps:["Подойдите к правой стене T апса A",
           "Прицельтесь чуть выше правого угла арки",
           "Обычный бросок"],
    tip:"Закрывает Library — важнейшая позиция CT" },

  { id:"inf_smk_04", map:"inferno", type:"smoke", difficulty:"hard",
    name:"Balcony Smoke (A)", from:"A апс T (левый ящик)", to:"Balcony",
    ytId:"",
    steps:["Встаньте у левого ящика в A апсе",
           "Смотрите вверх на балкон правого здания",
           "Нужен jumpthrow (прыжок + бросок одновременно)"],
    tip:"Закрывает балкон — снайперская позиция CT" },

  { id:"inf_mol_01", map:"inferno", type:"molotov", difficulty:"medium",
    name:"Car Molotov (B)", from:"Начало Banana", to:"Машина на Banana",
    ytId:"",
    steps:["Встаньте в начале Banana у левой стены",
           "Прицельтесь на верхний угол балкона над Banana",
           "Молотов накрывает машину"],
    tip:"Выкуривает CT прячущегося за машиной" },

  { id:"inf_fl_01", map:"inferno", type:"flash", difficulty:"easy",
    name:"Banana Pop Flash", from:"Начало Banana", to:"Весь Banana",
    ytId:"",
    steps:["Встаньте у левой стены в начале Banana",
           "Смотрите вверх на угол стены над входом",
           "Бросьте флешку — рикошетит вглубь Banana",
           "Сразу отвернитесь!"],
    tip:"Слепит CT по всей длине Banana" },

  // ═══════ DUST 2 ═══════════════════════════════════════════

  { id:"d2_smk_01", map:"dust2", type:"smoke", difficulty:"easy",
    name:"Xbox Smoke (Mid)", from:"T-спавн (у ворот)", to:"Xbox",
    ytId:"",
    steps:["Встаньте у правого косяка ворот T спавна",
           "Прицельтесь в верхний левый угол арки мида",
           "Обычный бросок"],
    tip:"Закрывает Xbox — ключевая позиция для контроля мида" },

  { id:"d2_smk_02", map:"dust2", type:"smoke", difficulty:"medium",
    name:"CT Smoke (Mid→B)", from:"Mid Doors", to:"CT Spawn",
    ytId:"",
    steps:["Откройте Mid Doors, встаньте у правой стены",
           "Прицельтесь в верхний правый угол CT окна",
           "Нужен jumpthrow"],
    tip:"Закрывает CT при сплите через мид и B" },

  { id:"d2_smk_03", map:"dust2", type:"smoke", difficulty:"easy",
    name:"Long Pit Smoke", from:"Long (у ящика)", to:"Pit",
    ytId:"",
    steps:["Встаньте у ящика у входа на Long",
           "Прицельтесь в верхний угол левой стены",
           "Обычный бросок"],
    tip:"Закрывает Pit снайпера при пуше Long" },

  { id:"d2_smk_04", map:"dust2", type:"smoke", difficulty:"hard",
    name:"Goose Smoke (A)", from:"Long (у ворот A)", to:"Goose",
    ytId:"",
    steps:["Встаньте у левой стены Long у ворот A",
           "Прицельтесь в антенну на крыше здания",
           "Нужен jumpthrow"],
    tip:"Закрывает Goose — любимое место AWP на A" },

  { id:"d2_fl_01", map:"dust2", type:"flash", difficulty:"easy",
    name:"Long Pop Flash", from:"Long (у ворот T)", to:"Long A / Pit",
    ytId:"",
    steps:["Встаньте у левой стены, не заходя в Long",
           "Смотрите вверх в угол стены",
           "Флешка летит за угол и слепит позиции",
           "Сразу отвернитесь после броска!"],
    tip:"Слепит снайпера в Pit и на Long" },

  { id:"d2_mol_01", map:"dust2", type:"molotov", difficulty:"easy",
    name:"Short Corner Mol", from:"Short (у ступенек)", to:"Угол Short A",
    ytId:"",
    steps:["Встаньте у правой стены на Short",
           "Прицельтесь над правым углом стены",
           "Молотов накрывает угол"],
    tip:"Выкуривает CT из угла Short перед заходом A" },

  // ═══════ ANCIENT ══════════════════════════════════════════

  { id:"anc_smk_01", map:"ancient", type:"smoke", difficulty:"medium",
    name:"Donut Smoke (A)", from:"T апс A (правая стена)", to:"Donut / CT угол",
    ytId:"",
    steps:["Встаньте у правой стены T апса A",
           "Смотрите на правый угол арки Donut",
           "Обычный бросок"],
    tip:"Закрывает CT угол при заходе A через Donut" },

  { id:"anc_smk_02", map:"ancient", type:"smoke", difficulty:"hard",
    name:"CT Main Smoke (A)", from:"T апс A (у статуи)", to:"CT Main",
    ytId:"",
    steps:["Встаньте у постамента статуи в T апсе A",
           "Прицельтесь в верхний правый угол над аркой CT",
           "Нужен jumpthrow"],
    tip:"Изолирует CT main при контроле A" },

  { id:"anc_smk_03", map:"ancient", type:"smoke", difficulty:"medium",
    name:"Mid Smoke", from:"T апс мид", to:"Mid CT",
    ytId:"",
    steps:["Встаньте у левой стены T апса мида",
           "Прицельтесь в правый верхний угол тоннеля",
           "Обычный бросок"],
    tip:"Закрывает CT в мид-тоннеле" },

  { id:"anc_mol_01", map:"ancient", type:"molotov", difficulty:"medium",
    name:"B Stairs Molotov", from:"B апс (правая стена)", to:"Лестницы B",
    ytId:"",
    steps:["Встаньте у правой стены B апса",
           "Прицельтесь на угол перил лестницы",
           "Молотов летит на лестницы"],
    tip:"Выкуривает CT на лестницах B" },

  // ═══════ NUKE ═════════════════════════════════════════════

  { id:"nuke_smk_01", map:"nuke", type:"smoke", difficulty:"easy",
    name:"Hut Smoke", from:"Outside (T)", to:"Hut вход",
    ytId:"",
    steps:["Встаньте у левой стены снаружи",
           "Прицельтесь в верхний угол Hut",
           "Обычный бросок"],
    tip:"Закрывает Hut при заходе снаружи" },

  { id:"nuke_smk_02", map:"nuke", type:"smoke", difficulty:"hard",
    name:"Rafters Smoke (A Upper)", from:"Hut / Radio", to:"Rafters",
    ytId:"",
    steps:["Зайдите в Hut, встаньте у левой стены",
           "Смотрите вверх на люк Rafters",
           "Нужен jumpthrow через люк"],
    tip:"Закрывает Rafters — снайперская позиция на A" },

  { id:"nuke_smk_03", map:"nuke", type:"smoke", difficulty:"medium",
    name:"Garage Smoke", from:"T апс гаража", to:"Garage вход",
    ytId:"",
    steps:["Встаньте у правой стены T апса гаража",
           "Прицельтесь в верхний угол ворот",
           "Обычный бросок"],
    tip:"Закрывает выход из Garage при заходе B Lower" },

  { id:"nuke_mol_01", map:"nuke", type:"molotov", difficulty:"medium",
    name:"Mini Molotov (B Lower)", from:"B Lower апс", to:"Mini позиция",
    ytId:"",
    steps:["Зайдите в B Lower, встаньте у правой стены",
           "Прицельтесь в угол Mini позиции",
           "Молотов накрывает Mini"],
    tip:"Выкуривает CT с позиции Mini на B Lower" },

  // ═══════ VERTIGO ══════════════════════════════════════════

  { id:"vert_smk_01", map:"vertigo", type:"smoke", difficulty:"medium",
    name:"CT Smoke (A)", from:"T апс A (у стены)", to:"CT выход",
    ytId:"",
    steps:["Прислонитесь к правой стене T апса A",
           "Прицельтесь в угол трубы над CT выходом",
           "Обычный бросок"],
    tip:"Изолирует CT при атаке A сайта" },

  { id:"vert_smk_02", map:"vertigo", type:"smoke", difficulty:"hard",
    name:"B CT Smoke", from:"T апс B", to:"CT B выход",
    ytId:"",
    steps:["Встаньте у левого края T апса B",
           "Прицельтесь в верхний угол вентиляции",
           "Нужен jumpthrow"],
    tip:"Закрывает CT выход B при атаке через B" },

  { id:"vert_mol_01", map:"vertigo", type:"molotov", difficulty:"medium",
    name:"A Site Corner Mol", from:"T апс A (центр)", to:"A плант (левый угол)",
    ytId:"",
    steps:["Встаньте у центра T апса A",
           "Прицельтесь в верхний угол стены над плантом",
           "Молотов накрывает угол у A планта"],
    tip:"Выкуривает CT из левого угла A" },

  // ═══════ ANUBIS ═══════════════════════════════════════════

  { id:"anu_smk_01", map:"anubis", type:"smoke", difficulty:"easy",
    name:"CT Smoke (B)", from:"B апс (правая стена)", to:"CT угол",
    ytId:"",
    steps:["Встаньте у правой стены B апса",
           "Прицельтесь в верхний правый угол арки",
           "Обычный бросок"],
    tip:"Перекрывает CT при заходе B" },

  { id:"anu_smk_02", map:"anubis", type:"smoke", difficulty:"medium",
    name:"A Exit Smoke (Water)", from:"Mid (через воду)", to:"A выход",
    ytId:"",
    steps:["Войдите в воду на мид",
           "Встаньте у правой стены канала",
           "Прицельтесь в верхний угол A выхода",
           "Обычный бросок"],
    tip:"Закрывает A выход при сплите через воду" },

  { id:"anu_fl_01", map:"anubis", type:"flash", difficulty:"easy",
    name:"B Pop Flash", from:"B тоннель (у стены)", to:"B сайт",
    ytId:"",
    steps:["Встаньте у правой стены B тоннеля",
           "Смотрите вверх на потолок тоннеля",
           "Бросьте флешку — рикошетит на сайт",
           "Сразу отвернитесь!"],
    tip:"Слепит CT на B при быстром выходе из тоннеля" },
];
