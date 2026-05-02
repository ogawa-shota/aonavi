import Link from "next/link";

export default async function UniversityDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <p className="text-xs text-zinc-500">大学詳細 / {slug}</p>

      <section className="mt-4 rounded-2xl bg-brand-light p-8">
        <h1 className="text-3xl font-extrabold">サンプル大学A</h1>
        <p className="mt-2 text-sm text-zinc-700">東京都・私立</p>
        <a
          href="#"
          className="mt-3 inline-block text-sm text-brand-dark underline"
        >
          公式サイト ↗
        </a>
      </section>

      <Block title="基本情報">
        <dl className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <Row k="所在地" v="東京都〇〇区" />
          <Row k="学部数" v="5学部" />
          <Row k="偏差値目安" v="55〜62" />
          <Row k="評定平均目安" v="3.5以上" />
        </dl>
      </Block>

      <Block title="年内入試マトリクス">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-sm">
            <thead className="bg-zinc-100 text-left">
              <tr>
                <th className="p-3">学部</th>
                <th className="p-3">入試方式</th>
                <th className="p-3">出願期間</th>
                <th className="p-3">評定要件</th>
                <th className="p-3">募集人数</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["経済学部", "総合型選抜", "9/1〜9/15", "3.5以上", "30名"],
                ["文学部", "公募推薦", "10/1〜10/15", "4.0以上", "20名"],
                ["理工学部", "総合型選抜", "9/10〜9/25", "3.8以上", "25名"],
              ].map((row, i) => (
                <tr key={i} className="border-t border-zinc-200">
                  {row.map((cell, j) => (
                    <td key={j} className="p-3">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Block>

      <Block title="提出物・過去問題傾向">
        <p className="text-sm text-zinc-700">
          志望理由書（1,200字）/ 活動報告書 / 推薦書 …（ダミーテキスト）
        </p>
      </Block>

      <Block title="関連コラム">
        <ul className="space-y-2">
          <li>
            <Link href="/column/essay-basics" className="text-brand hover:underline">
              志望理由書の書き方 完全ガイド
            </Link>
          </li>
        </ul>
      </Block>

      <section className="mt-10 rounded-2xl bg-brand-light p-8 text-center">
        <h3 className="text-xl font-extrabold">この大学の資料を取り寄せる</h3>
        <Link
          href="/resource-request"
          className="mt-4 inline-block rounded-full bg-accent px-8 py-3 font-bold text-white hover:bg-accent-dark"
        >
          無料で資料請求
        </Link>
      </section>
    </div>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-extrabold">{title}</h2>
      <div className="mt-3 rounded-2xl border border-zinc-200 bg-white p-6">
        {children}
      </div>
    </section>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between border-b border-zinc-100 py-2">
      <dt className="text-zinc-600">{k}</dt>
      <dd className="font-medium">{v}</dd>
    </div>
  );
}
