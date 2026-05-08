// ─────────────────────────────────────────────────────────────────────────────
// taxonomies.ts
// 地域・学問分野・授業形式など、サイト全体で共通利用する分類データ。
// 大学・塾・コラム等のドメインデータからもこのファイルの型を参照する。
// ─────────────────────────────────────────────────────────────────────────────

export type RegionLabel =
  | "北海道・東北"
  | "関東"
  | "中部"
  | "近畿"
  | "中国・四国"
  | "九州・沖縄";

export type Region = {
  id: string;
  label: RegionLabel;
  short: string;
  prefs: string[];
};

export const regions: Region[] = [
  { id: "hokkaido", label: "北海道・東北", short: "北海道・東北", prefs: ["北海道", "青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県"] },
  { id: "kanto", label: "関東", short: "関東", prefs: ["茨城県", "栃木県", "群馬県", "埼玉県", "千葉県", "東京都", "神奈川県"] },
  { id: "chubu", label: "中部", short: "中部", prefs: ["新潟県", "富山県", "石川県", "福井県", "山梨県", "長野県", "岐阜県", "静岡県", "愛知県"] },
  { id: "kinki", label: "近畿", short: "近畿", prefs: ["三重県", "滋賀県", "京都府", "大阪府", "兵庫県", "奈良県", "和歌山県"] },
  { id: "chugoku", label: "中国・四国", short: "中国・四国", prefs: ["鳥取県", "島根県", "岡山県", "広島県", "山口県", "徳島県", "香川県", "愛媛県", "高知県"] },
  { id: "kyushu", label: "九州・沖縄", short: "九州・沖縄", prefs: ["福岡県", "佐賀県", "長崎県", "熊本県", "大分県", "宮崎県", "鹿児島県", "沖縄県"] },
];

export type FieldId =
  | "humanities"
  | "social"
  | "economics"
  | "international"
  | "education"
  | "psychology"
  | "media"
  | "art"
  | "science"
  | "engineering"
  | "agri"
  | "med";

export type Field = {
  id: FieldId;
  label: string;
  emoji: string;
  count: number;
};

export const fieldList: Field[] = [
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

export type JukuFormatInfo = {
  id: "online" | "private" | "group" | "tutor" | "hybrid";
  label: string;
  icon: string;
  desc: string;
};

export const jukuFormats: JukuFormatInfo[] = [
  { id: "online", label: "オンライン", icon: "💻", desc: "全国どこからでも受講可能" },
  { id: "private", label: "個別指導", icon: "🧑‍🏫", desc: "1対1〜少人数で密度高く" },
  { id: "group", label: "集団指導", icon: "👨‍👩‍👧", desc: "切磋琢磨できる同志と" },
  { id: "tutor", label: "家庭教師", icon: "🏠", desc: "自宅まで来てもらえる" },
  { id: "hybrid", label: "ハイブリッド", icon: "🔀", desc: "対面とオンラインの併用" },
];

export const popularKeywords: string[] = [
  "総合型選抜 評定なし",
  "公募推薦 国公立",
  "志望理由書 添削",
  "面接対策 塾",
  "オンライン",
  "プレゼン型",
];
