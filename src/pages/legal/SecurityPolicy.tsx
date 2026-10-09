import { Layout } from "@/components/layout/Layout";
import { useTranslation } from "react-i18next";
import { getSecurityPolicy } from "@/lib/security-policy";

export default function SecurityPolicy() {
  const { i18n } = useTranslation();
  const doc = getSecurityPolicy(i18n.language);
  return (
    <Layout>
      <section className="py-20">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">{doc.title}</h1>
          <p className="text-muted-foreground mb-6">{doc.updated}</p>
          <p className="text-lg mb-10">{doc.intro}</p>
          <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:mt-10 prose-headings:mb-4">
            {doc.sections.map((s) => (
              <div key={s.h}>
                <h2>{s.h}</h2>
                {s.p?.map((t, i) => <p key={i}>{t}</p>)}
                {s.ul && <ul>{s.ul.map((t, i) => <li key={i}>{t}</li>)}</ul>}
                {s.after?.map((t, i) => <p key={`a${i}`}>{t}</p>)}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
