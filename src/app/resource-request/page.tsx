export default function ResourceRequestPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-10">
      <h1 className="text-3xl font-extrabold">無料 資料請求</h1>
      <p className="mt-2 text-sm text-zinc-600">
        気になる大学の資料を、まとめてお届けします
      </p>

      <form className="mt-8 space-y-5 rounded-2xl border border-zinc-200 bg-white p-6">
        <Field label="お名前" required>
          <input
            type="text"
            className="w-full rounded-lg border border-zinc-300 px-3 py-2"
          />
        </Field>
        <Field label="学年" required>
          <select className="w-full rounded-lg border border-zinc-300 px-3 py-2">
            <option>高校1年</option>
            <option>高校2年</option>
            <option>高校3年</option>
            <option>その他</option>
          </select>
        </Field>
        <Field label="メールアドレス" required>
          <input
            type="email"
            className="w-full rounded-lg border border-zinc-300 px-3 py-2"
          />
        </Field>
        <Field label="郵便番号" required>
          <input
            type="text"
            className="w-full rounded-lg border border-zinc-300 px-3 py-2"
          />
        </Field>
        <Field label="ご住所" required>
          <input
            type="text"
            className="w-full rounded-lg border border-zinc-300 px-3 py-2"
          />
        </Field>
        <Field label="興味のある大学">
          <textarea
            rows={3}
            className="w-full rounded-lg border border-zinc-300 px-3 py-2"
          />
        </Field>

        <button
          type="button"
          className="w-full rounded-full bg-accent py-3 font-bold text-white hover:bg-accent-dark"
        >
          資料を請求する（ダミー）
        </button>
        <p className="text-xs text-zinc-500">
          ※ フォーム送信機能は未接続です。Phase 1 で Resend + Vercel Functions と連携予定。
        </p>
      </form>
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
      <span className="text-sm font-bold">
        {label}
        {required && <span className="ml-1 text-accent">*</span>}
      </span>
      <div className="mt-1">{children}</div>
    </label>
  );
}
