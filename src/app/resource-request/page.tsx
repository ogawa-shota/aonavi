import Link from "next/link";
import { PageHero } from "@/components/SectionHead";

const sampleUnivs = [
  "サンプル大学A 経済学部",
  "サンプル大学A 文学部",
  "サンプル大学B 文学部",
  "サンプル大学C 国際学部",
  "サンプル大学F 心理学部",
  "サンプル大学G メディア学部",
];

export default function ResourceRequestPage() {
  return (
    <>
      <PageHero
        eyebrow="Free Request"
        en="REQUEST FREE"
        jp="無料 資料請求（まとめて送付）。"
        lead="気になる大学の資料を、1フォームで複数校にまとめて送付。会員登録すると履歴も保存できます。"
      />

      <section className="bg-section-soft py-14 md:py-20">
        <div className="container-aonavi grid gap-8 lg:grid-cols-[1fr_320px]">
          <form className="border-2 border-ink bg-white p-6 shadow-[8px_8px_0_var(--color-ink)] md:p-10">
            <Step n="01" en="Select Universities" jp="資料を取り寄せたい大学を選択" />
            <ul className="mt-5 grid gap-2 md:grid-cols-2">
              {sampleUnivs.map((u) => (
                <li key={u}>
                  <label className="flex cursor-pointer items-center gap-3 border-2 border-ink bg-white p-3 text-sm font-bold transition hover:bg-accent">
                    <input type="checkbox" className="h-4 w-4 accent-brand" />
                    <span>{u}</span>
                  </label>
                </li>
              ))}
            </ul>
            <Link
              href="/universities"
              className="mt-4 inline-block font-latin text-xs font-extrabold uppercase tracking-[0.14em] text-brand-deep hover:underline"
            >
              ＋ 他の大学を追加 →
            </Link>

            <div className="my-10 h-[2px] bg-ink" />

            <Step n="02" en="Your Info" jp="送付先の情報を入力" />
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <Field label="お名前" required>
                <input type="text" className="input" placeholder="山田 太郎" />
              </Field>
              <Field label="フリガナ" required>
                <input type="text" className="input" placeholder="ヤマダ タロウ" />
              </Field>
              <Field label="学年" required>
                <select className="input">
                  <option>高校1年</option>
                  <option>高校2年</option>
                  <option>高校3年</option>
                  <option>既卒・その他</option>
                </select>
              </Field>
              <Field label="メールアドレス" required>
                <input type="email" className="input" placeholder="example@aonavi.jp" />
              </Field>
              <Field label="郵便番号" required>
                <input type="text" className="input" placeholder="100-0001" />
              </Field>
              <Field label="ご住所" required>
                <input type="text" className="input" placeholder="東京都千代田区..." />
              </Field>
              <Field label="電話番号">
                <input type="tel" className="input" placeholder="090-1234-5678" />
              </Field>
              <Field label="高校名">
                <input type="text" className="input" />
              </Field>
            </div>

            <div className="my-10 h-[2px] bg-ink" />

            <Step n="03" en="Also Receive" jp="あわせて受け取る" />
            <ul className="mt-5 space-y-2 text-sm font-bold text-ink">
              {[
                "AOナビからの最新入試ニュース・コラム配信（推奨）",
                "選択した大学のオープンキャンパス案内",
                "総合型選抜の対策塾からのご案内（任意）",
              ].map((c, i) => (
                <li key={c}>
                  <label className="flex cursor-pointer items-start gap-2">
                    <input type="checkbox" className="mt-1 h-4 w-4 accent-brand" defaultChecked={i < 2} />
                    <span>{c}</span>
                  </label>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="mt-10 block w-full rounded-full border-2 border-ink bg-ink py-4 font-latin text-base font-extrabold uppercase tracking-[0.14em] text-white shadow-[6px_6px_0_var(--color-brand)] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
            >
              選択した大学の資料を請求する →
            </button>
            <p className="mt-3 text-[11px] font-bold text-ink-mute">
              ※ お預かりした個人情報は、資料送付・関連情報のご連絡のみに利用します。送信機能は未接続のためダミーです。
            </p>
          </form>

          <aside className="space-y-5">
            <div className="border-2 border-ink bg-ink p-5 text-white shadow-[6px_6px_0_var(--color-brand)]">
              <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-accent">
                Member Benefits
              </p>
              <p className="mt-1 text-base font-black">会員登録（無料）でできること</p>
              <ul className="mt-4 space-y-2 text-xs font-bold">
                {[
                  "資料請求の履歴を保存",
                  "気になる大学・塾をお気に入り登録",
                  "出願締切のリマインドをLINEで受信",
                  "合格力診断の結果保存",
                ].map((c) => (
                  <li key={c} className="flex items-start gap-2 text-white/85">
                    <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {c}
                  </li>
                ))}
              </ul>
              <Link
                href="/signup"
                className="mt-4 block rounded-full border-2 border-white bg-accent py-3 text-center font-latin text-xs font-extrabold uppercase tracking-[0.14em] text-ink"
              >
                会員登録する →
              </Link>
            </div>

            <div className="border-2 border-ink bg-accent p-5 shadow-[5px_5px_0_var(--color-ink)]">
              <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-ink">
                Delivery
              </p>
              <p className="mt-1 text-base font-black text-ink">届くまでの目安</p>
              <p className="mt-3 text-xs font-bold leading-relaxed text-ink">
                発送は各大学から行われるため、お申し込みから1〜2週間ほどで順次お手元に届きます。
              </p>
            </div>
          </aside>
        </div>
      </section>

      <style>{`
        .input {
          width: 100%;
          border: 2px solid var(--color-ink);
          background: #fff;
          padding: 0.5rem 0.75rem;
          font-size: 0.875rem;
          font-weight: 700;
        }
        .input:focus {
          outline: none;
          box-shadow: 3px 3px 0 var(--color-brand);
        }
      `}</style>
    </>
  );
}

function Step({ n, en, jp }: { n: string; en: string; jp: string }) {
  return (
    <div className="flex items-baseline gap-4">
      <span className="font-latin text-4xl font-extrabold leading-none text-brand-deep">{n}</span>
      <div>
        <p className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-ink-mute">
          {en}
        </p>
        <p className="text-base font-black text-ink md:text-lg">{jp}</p>
      </div>
    </div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="font-latin text-[10px] font-extrabold uppercase tracking-[0.14em] text-ink-soft">
        {label}
        {required && <span className="ml-1 text-brand-deep">*</span>}
      </span>
      <div className="mt-1">{children}</div>
    </label>
  );
}
