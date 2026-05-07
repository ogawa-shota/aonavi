export type AdmissionType =
  | "総合型選抜"
  | "公募推薦"
  | "指定校推薦"
  | "AO継続枠"
  | "学校推薦型"
  | "スポーツ・文化推薦";

export type SelectionMethod = "書" | "面" | "小" | "プ" | "口" | "実" | "活" | "英";

export type Faculty = {
  name: string;
  admission: AdmissionType;
  methods: SelectionMethod[];
  deadline: string;
  capacity: number;
  scoreMin: number | null;
};

export type University = {
  slug: string;
  name: string;
  pref: string;
  region: "北海道・東北" | "関東" | "中部" | "近畿" | "中国・四国" | "九州・沖縄";
  type: "国立" | "公立" | "私立";
  faculties: Faculty[];
  fields: string[];
  hensachi: [number, number];
  scoreMin: number | null;
  rating: number;
  pickup?: boolean;
  features?: ("奨学金" | "英語外部" | "オンライン出願" | "評定不問" | "学費減免" | "海外提携")[];
};

const M = (...m: SelectionMethod[]) => m;

export const universities: University[] = [
  {
    slug: "sample-univ-1",
    name: "サンプル大学A",
    pref: "東京都",
    region: "関東",
    type: "私立",
    fields: ["経済", "法", "文"],
    hensachi: [55, 62],
    scoreMin: 3.5,
    rating: 4.5,
    pickup: true,
    features: ["奨学金", "英語外部"],
    faculties: [
      { name: "経済学部", admission: "総合型選抜", methods: M("書", "面", "小"), deadline: "2026/09/15", capacity: 30, scoreMin: 3.5 },
      { name: "経済学部", admission: "公募推薦", methods: M("書", "面"), deadline: "2026/10/15", capacity: 20, scoreMin: 4.0 },
      { name: "文学部", admission: "総合型選抜", methods: M("書", "面", "小"), deadline: "2026/09/20", capacity: 25, scoreMin: null },
      { name: "法学部", admission: "公募推薦", methods: M("書", "小"), deadline: "2026/10/12", capacity: 18, scoreMin: 4.0 },
      { name: "理工学部", admission: "総合型選抜", methods: M("書", "口"), deadline: "2026/09/25", capacity: 25, scoreMin: 3.8 },
    ],
  },
  {
    slug: "sample-univ-2",
    name: "サンプル大学B",
    pref: "大阪府",
    region: "近畿",
    type: "私立",
    fields: ["文", "教育"],
    hensachi: [50, 58],
    scoreMin: 3.8,
    rating: 4.2,
    pickup: true,
    features: ["奨学金", "学費減免"],
    faculties: [
      { name: "文学部", admission: "公募推薦", methods: M("書", "小", "面"), deadline: "2026/09/30", capacity: 22, scoreMin: 3.8 },
      { name: "教育学部", admission: "公募推薦", methods: M("書", "小", "面"), deadline: "2026/10/05", capacity: 18, scoreMin: 3.8 },
      { name: "人間科学部", admission: "総合型選抜", methods: M("書", "面", "プ"), deadline: "2026/10/12", capacity: 15, scoreMin: 3.5 },
    ],
  },
  {
    slug: "sample-univ-3",
    name: "サンプル大学C",
    pref: "愛知県",
    region: "中部",
    type: "私立",
    fields: ["国際", "経済", "理工"],
    hensachi: [52, 65],
    scoreMin: null,
    rating: 4.6,
    pickup: true,
    features: ["評定不問", "英語外部", "海外提携"],
    faculties: [
      { name: "国際学部", admission: "総合型選抜", methods: M("書", "プ", "英", "面"), deadline: "2026/10/05", capacity: 20, scoreMin: null },
      { name: "経済学部", admission: "総合型選抜", methods: M("書", "面", "小"), deadline: "2026/09/22", capacity: 25, scoreMin: null },
      { name: "理工学部", admission: "公募推薦", methods: M("書", "口"), deadline: "2026/10/18", capacity: 22, scoreMin: 3.8 },
      { name: "文学部", admission: "指定校推薦", methods: M("書", "面"), deadline: "2026/10/25", capacity: 30, scoreMin: 4.0 },
    ],
  },
  {
    slug: "sample-univ-4",
    name: "サンプル国立大学D",
    pref: "福岡県",
    region: "九州・沖縄",
    type: "国立",
    fields: ["国際", "工"],
    hensachi: [58, 66],
    scoreMin: 4.0,
    rating: 4.4,
    features: ["奨学金"],
    faculties: [
      { name: "工学部", admission: "学校推薦型", methods: M("書", "面", "小"), deadline: "2026/11/01", capacity: 20, scoreMin: 4.0 },
      { name: "国際学部", admission: "総合型選抜", methods: M("書", "プ", "英"), deadline: "2026/10/28", capacity: 12, scoreMin: 4.0 },
    ],
  },
  {
    slug: "sample-univ-5",
    name: "サンプル国立大学E",
    pref: "北海道",
    region: "北海道・東北",
    type: "国立",
    fields: ["農・生命", "医療"],
    hensachi: [55, 62],
    scoreMin: 4.2,
    rating: 4.3,
    features: ["奨学金"],
    faculties: [
      { name: "農学部", admission: "総合型選抜", methods: M("書", "面", "実"), deadline: "2026/11/15", capacity: 14, scoreMin: 4.2 },
      { name: "獣医学部", admission: "学校推薦型", methods: M("書", "面"), deadline: "2026/11/20", capacity: 8, scoreMin: 4.5 },
    ],
  },
  {
    slug: "sample-univ-6",
    name: "サンプル大学F",
    pref: "京都府",
    region: "近畿",
    type: "私立",
    fields: ["国際", "心理"],
    hensachi: [54, 60],
    scoreMin: 3.7,
    rating: 4.7,
    features: ["英語外部", "海外提携"],
    faculties: [
      { name: "国際学部", admission: "総合型選抜", methods: M("書", "プ", "英", "面"), deadline: "2026/10/20", capacity: 16, scoreMin: 3.7 },
      { name: "心理学部", admission: "総合型選抜", methods: M("書", "小", "面"), deadline: "2026/10/15", capacity: 18, scoreMin: 3.7 },
      { name: "心理学部", admission: "公募推薦", methods: M("書", "面"), deadline: "2026/10/30", capacity: 12, scoreMin: 4.0 },
    ],
  },
  {
    slug: "sample-univ-7",
    name: "サンプル大学G",
    pref: "宮城県",
    region: "北海道・東北",
    type: "私立",
    fields: ["メディア", "デザイン"],
    hensachi: [48, 55],
    scoreMin: null,
    rating: 4.1,
    features: ["評定不問", "オンライン出願"],
    faculties: [
      { name: "メディア学部", admission: "総合型選抜", methods: M("書", "プ", "活"), deadline: "2026/09/22", capacity: 24, scoreMin: null },
      { name: "デザイン学部", admission: "総合型選抜", methods: M("書", "実", "面"), deadline: "2026/09/28", capacity: 18, scoreMin: null },
    ],
  },
  {
    slug: "sample-univ-8",
    name: "サンプル大学H",
    pref: "広島県",
    region: "中国・四国",
    type: "私立",
    fields: ["教育", "心理"],
    hensachi: [50, 56],
    scoreMin: 3.6,
    rating: 4.0,
    features: ["奨学金", "学費減免"],
    faculties: [
      { name: "教育学部", admission: "公募推薦", methods: M("書", "小", "面"), deadline: "2026/10/10", capacity: 20, scoreMin: 3.6 },
      { name: "心理学部", admission: "総合型選抜", methods: M("書", "面"), deadline: "2026/10/05", capacity: 16, scoreMin: 3.6 },
    ],
  },
  {
    slug: "sample-univ-9",
    name: "サンプル公立大学I",
    pref: "大阪府",
    region: "近畿",
    type: "公立",
    fields: ["医療", "看護"],
    hensachi: [56, 62],
    scoreMin: 4.0,
    rating: 4.3,
    features: ["奨学金"],
    faculties: [
      { name: "看護学部", admission: "学校推薦型", methods: M("書", "面", "小"), deadline: "2026/11/05", capacity: 12, scoreMin: 4.0 },
    ],
  },
  {
    slug: "sample-univ-10",
    name: "サンプル大学J",
    pref: "東京都",
    region: "関東",
    type: "私立",
    fields: ["医療", "看護"],
    hensachi: [50, 58],
    scoreMin: 3.5,
    rating: 4.2,
    features: ["奨学金"],
    faculties: [
      { name: "看護学部", admission: "総合型選抜", methods: M("書", "面", "小"), deadline: "2026/10/05", capacity: 20, scoreMin: 3.5 },
      { name: "医療技術学部", admission: "公募推薦", methods: M("書", "面"), deadline: "2026/10/15", capacity: 18, scoreMin: 3.8 },
    ],
  },
  {
    slug: "sample-univ-11",
    name: "サンプル大学K",
    pref: "神奈川県",
    region: "関東",
    type: "私立",
    fields: ["経済", "経営"],
    hensachi: [48, 55],
    scoreMin: 3.3,
    rating: 4.0,
    features: ["奨学金", "オンライン出願"],
    faculties: [
      { name: "経営学部", admission: "総合型選抜", methods: M("書", "面", "プ"), deadline: "2026/09/18", capacity: 28, scoreMin: 3.3 },
      { name: "経済学部", admission: "公募推薦", methods: M("書", "小", "面"), deadline: "2026/10/22", capacity: 22, scoreMin: 3.6 },
    ],
  },
  {
    slug: "sample-univ-12",
    name: "サンプル大学L",
    pref: "京都府",
    region: "近畿",
    type: "私立",
    fields: ["芸術", "デザイン"],
    hensachi: [45, 55],
    scoreMin: null,
    rating: 4.4,
    features: ["評定不問", "海外提携"],
    faculties: [
      { name: "芸術学部", admission: "総合型選抜", methods: M("書", "実", "面"), deadline: "2026/09/25", capacity: 22, scoreMin: null },
    ],
  },
];

export const regions = [
  { id: "hokkaido", label: "北海道・東北", short: "北海道・東北", prefs: ["北海道", "青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県"] },
  { id: "kanto", label: "関東", short: "関東", prefs: ["茨城県", "栃木県", "群馬県", "埼玉県", "千葉県", "東京都", "神奈川県"] },
  { id: "chubu", label: "中部", short: "中部", prefs: ["新潟県", "富山県", "石川県", "福井県", "山梨県", "長野県", "岐阜県", "静岡県", "愛知県"] },
  { id: "kinki", label: "近畿", short: "近畿", prefs: ["三重県", "滋賀県", "京都府", "大阪府", "兵庫県", "奈良県", "和歌山県"] },
  { id: "chugoku", label: "中国・四国", short: "中国・四国", prefs: ["鳥取県", "島根県", "岡山県", "広島県", "山口県", "徳島県", "香川県", "愛媛県", "高知県"] },
  { id: "kyushu", label: "九州・沖縄", short: "九州・沖縄", prefs: ["福岡県", "佐賀県", "長崎県", "熊本県", "大分県", "宮崎県", "鹿児島県", "沖縄県"] },
];

export const fieldList = [
  { id: "humanities", label: "文学・人文", emoji: "📖", count: 142 },
  { id: "social", label: "法・政治・社会", emoji: "⚖️", count: 98 },
  { id: "economics", label: "経済・経営・商", emoji: "💹", count: 121 },
  { id: "international", label: "国際・外国語", emoji: "🌏", count: 86 },
  { id: "education", label: "教育・教員", emoji: "🍎", count: 73 },
  { id: "psychology", label: "心理・人間科学", emoji: "🧠", count: 64 },
  { id: "media", label: "メディア・情報", emoji: "🎬", count: 51 },
  { id: "art", label: "芸術・デザイン", emoji: "🎨", count: 45 },
  { id: "science", label: "理学・数学", emoji: "🔬", count: 67 },
  { id: "engineering", label: "工学・情報工学", emoji: "⚙️", count: 124 },
  { id: "agri", label: "農・生命・食", emoji: "🌾", count: 38 },
  { id: "med", label: "医・歯・薬・看護", emoji: "🩺", count: 56 },
];

export const selectionLegend: { code: SelectionMethod; label: string }[] = [
  { code: "書", label: "書類" },
  { code: "面", label: "面接" },
  { code: "小", label: "小論文" },
  { code: "プ", label: "プレゼン" },
  { code: "口", label: "口頭試問" },
  { code: "実", label: "実技" },
  { code: "活", label: "活動報告" },
  { code: "英", label: "英語外部" },
];

export type JukuFormat = "オンライン" | "個別" | "集団" | "家庭教師" | "ハイブリッド";
export type JukuGoal = "志望理由書" | "小論文" | "面接" | "口頭試問" | "探究活動";

export type JukuCourse = {
  name: string;
  format: JukuFormat;
  goals: JukuGoal[];
  target: string;
  duration: string;
  price: string;
};

export type Juku = {
  slug: string;
  name: string;
  catch: string;
  formats: JukuFormat[];
  pref: string;
  region: "北海道・東北" | "関東" | "中部" | "近畿" | "中国・四国" | "九州・沖縄" | "全国";
  goals: JukuGoal[];
  rate: number;
  reviews: number;
  free: boolean;
  pickup?: boolean;
  features?: ("無料体験" | "オンライン対応" | "通信添削" | "保証制度" | "夜間対応" | "週末対応")[];
  courses: JukuCourse[];
};

export const jukus: Juku[] = [
  {
    slug: "juku-a",
    name: "サンプル塾A",
    catch: "志望理由書を1on1で添削。総合型選抜 専門の老舗",
    formats: ["オンライン", "個別"],
    pref: "東京都",
    region: "関東",
    goals: ["志望理由書", "面接", "探究活動"],
    rate: 4.8,
    reviews: 312,
    free: true,
    pickup: true,
    features: ["無料体験", "オンライン対応", "通信添削"],
    courses: [
      { name: "志望理由書 集中", format: "個別", goals: ["志望理由書"], target: "高2〜高3", duration: "週1×60分", price: "¥29,800/月" },
      { name: "合格パッケージ", format: "ハイブリッド", goals: ["志望理由書", "面接", "小論文"], target: "高3", duration: "週2×60分＋添削無制限", price: "¥58,000/月" },
      { name: "オンライン総合型コース", format: "オンライン", goals: ["志望理由書", "面接"], target: "高2〜高3", duration: "週1×90分", price: "¥34,800/月" },
    ],
  },
  {
    slug: "juku-b",
    name: "サンプル塾B",
    catch: "面接・小論文・口頭試問まで通年カバー",
    formats: ["個別", "集団"],
    pref: "大阪府",
    region: "近畿",
    goals: ["小論文", "面接", "口頭試問"],
    rate: 4.6,
    reviews: 188,
    free: true,
    pickup: true,
    features: ["無料体験", "週末対応"],
    courses: [
      { name: "小論文マスター", format: "集団", goals: ["小論文"], target: "高2〜高3", duration: "週1×120分", price: "¥24,000/月" },
      { name: "面接・口頭試問対策", format: "個別", goals: ["面接", "口頭試問"], target: "高3直前期", duration: "全6回", price: "¥48,000(一括)" },
    ],
  },
  {
    slug: "juku-c",
    name: "サンプル塾C",
    catch: "難関私大に特化｜独自カリキュラムで合格率 84%",
    formats: ["ハイブリッド", "個別"],
    pref: "東京都",
    region: "関東",
    goals: ["志望理由書", "小論文", "面接"],
    rate: 4.7,
    reviews: 254,
    free: false,
    pickup: true,
    features: ["保証制度", "夜間対応"],
    courses: [
      { name: "難関私大 総合型", format: "ハイブリッド", goals: ["志望理由書", "小論文", "面接"], target: "高3", duration: "週2×90分", price: "¥72,000/月" },
      { name: "プレゼンテーション特訓", format: "個別", goals: ["志望理由書"], target: "高3", duration: "全8回", price: "¥96,000(一括)" },
    ],
  },
  {
    slug: "juku-d",
    name: "サンプル塾D",
    catch: "全国どこでも。オンライン特化の総合型選抜塾",
    formats: ["オンライン"],
    pref: "全国対応",
    region: "全国",
    goals: ["志望理由書", "面接", "探究活動"],
    rate: 4.5,
    reviews: 421,
    free: true,
    features: ["無料体験", "オンライン対応", "通信添削", "夜間対応"],
    courses: [
      { name: "ベーシックプラン", format: "オンライン", goals: ["志望理由書"], target: "高1〜高3", duration: "月2×60分", price: "¥19,800/月" },
      { name: "プロプラン", format: "オンライン", goals: ["志望理由書", "面接", "探究活動"], target: "高3", duration: "月4×60分", price: "¥39,800/月" },
      { name: "探究活動 伴走", format: "オンライン", goals: ["探究活動"], target: "高1〜高2", duration: "月2×60分", price: "¥18,000/月" },
    ],
  },
  {
    slug: "juku-e",
    name: "サンプル塾E",
    catch: "国公立の学校推薦・面接対策に強い",
    formats: ["集団", "個別"],
    pref: "愛知県",
    region: "中部",
    goals: ["面接", "小論文"],
    rate: 4.3,
    reviews: 96,
    free: true,
    features: ["無料体験", "週末対応"],
    courses: [
      { name: "国公立 推薦対策", format: "集団", goals: ["面接", "小論文"], target: "高3", duration: "週1×120分", price: "¥22,000/月" },
      { name: "個別フォロー", format: "個別", goals: ["面接"], target: "高3直前期", duration: "全4回", price: "¥32,000(一括)" },
    ],
  },
  {
    slug: "juku-f",
    name: "サンプル塾F",
    catch: "プロ家庭教師が伴走するマンツーマン指導",
    formats: ["家庭教師", "オンライン"],
    pref: "東京都",
    region: "関東",
    goals: ["志望理由書", "面接", "口頭試問"],
    rate: 4.4,
    reviews: 67,
    free: false,
    features: ["夜間対応", "週末対応"],
    courses: [
      { name: "家庭教師 標準", format: "家庭教師", goals: ["志望理由書", "面接"], target: "高2〜高3", duration: "週1×90分", price: "¥48,000/月" },
      { name: "オンライン家庭教師", format: "オンライン", goals: ["志望理由書", "口頭試問"], target: "高2〜高3", duration: "週1×60分", price: "¥36,000/月" },
    ],
  },
  {
    slug: "juku-g",
    name: "サンプル塾G",
    catch: "京都発・関西エリア最大級の総合型選抜専門校",
    formats: ["集団", "個別", "ハイブリッド"],
    pref: "京都府",
    region: "近畿",
    goals: ["志望理由書", "小論文", "面接"],
    rate: 4.5,
    reviews: 142,
    free: true,
    features: ["無料体験", "週末対応"],
    courses: [
      { name: "関西難関 総合型", format: "ハイブリッド", goals: ["志望理由書", "小論文", "面接"], target: "高3", duration: "週2×90分", price: "¥54,000/月" },
    ],
  },
  {
    slug: "juku-h",
    name: "サンプル塾H",
    catch: "九州・沖縄の高校生に最適化したローカル指導",
    formats: ["個別", "オンライン"],
    pref: "福岡県",
    region: "九州・沖縄",
    goals: ["志望理由書", "面接", "小論文"],
    rate: 4.2,
    reviews: 58,
    free: true,
    features: ["無料体験", "オンライン対応"],
    courses: [
      { name: "九州 国公立推薦", format: "個別", goals: ["面接", "小論文"], target: "高3", duration: "週1×60分", price: "¥26,000/月" },
      { name: "オンライン補講", format: "オンライン", goals: ["志望理由書"], target: "高2〜高3", duration: "月2×60分", price: "¥16,000/月" },
    ],
  },
  {
    slug: "juku-i",
    name: "サンプル塾I",
    catch: "東北6県をカバー。志望理由書添削が強み",
    formats: ["オンライン", "個別"],
    pref: "宮城県",
    region: "北海道・東北",
    goals: ["志望理由書", "面接"],
    rate: 4.1,
    reviews: 41,
    free: true,
    features: ["無料体験", "通信添削"],
    courses: [
      { name: "東北 総合型コース", format: "個別", goals: ["志望理由書", "面接"], target: "高3", duration: "週1×60分", price: "¥28,000/月" },
    ],
  },
  {
    slug: "juku-j",
    name: "サンプル塾J",
    catch: "中国・四国地方の総合型選抜に対応",
    formats: ["集団", "個別"],
    pref: "広島県",
    region: "中国・四国",
    goals: ["小論文", "面接"],
    rate: 4.0,
    reviews: 38,
    free: true,
    features: ["無料体験"],
    courses: [
      { name: "標準コース", format: "集団", goals: ["小論文", "面接"], target: "高3", duration: "週1×120分", price: "¥21,000/月" },
    ],
  },
];

export const jukuFormats = [
  { id: "online", label: "オンライン", icon: "💻", desc: "全国どこからでも受講可能" },
  { id: "private", label: "個別指導", icon: "🧑‍🏫", desc: "1対1〜少人数で密度高く" },
  { id: "group", label: "集団指導", icon: "👨‍👩‍👧", desc: "切磋琢磨できる同志と" },
  { id: "tutor", label: "家庭教師", icon: "🏠", desc: "自宅まで来てもらえる" },
  { id: "hybrid", label: "ハイブリッド", icon: "🔀", desc: "対面とオンラインの併用" },
];
