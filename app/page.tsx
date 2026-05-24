export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium tracking-wide uppercase">
          Database Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Visualize Database Table{" "}
          <span className="text-[#58a6ff]">Dependencies</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-8">
          Connect your database or upload a schema file. Instantly generate interactive dependency graphs showing foreign keys, triggers, and cascading effects — so you can refactor with confidence.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="inline-block px-7 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Get Access — $18/mo
          </a>
          <a
            href="#faq"
            className="inline-block px-7 py-3 rounded-lg border border-[#30363d] text-[#c9d1d9] font-medium text-base hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
          >
            Learn More
          </a>
        </div>
        {/* Feature pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {["Foreign Key Graphs", "Trigger Detection", "Cascade Analysis", "Schema Upload", "Live DB Connect", "Export SVG/PNG"].map((f) => (
            <span key={f} className="px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-sm text-[#8b949e]">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center">
          <p className="text-sm text-[#58a6ff] font-medium uppercase tracking-wide mb-2">Pro Plan</p>
          <div className="flex items-end justify-center gap-1 mb-1">
            <span className="text-5xl font-bold text-white">$18</span>
            <span className="text-[#8b949e] mb-2">/mo</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to map complex schemas</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited schema analyses",
              "Foreign key & trigger graphs",
              "Cascade effect visualization",
              "Direct DB connection (Postgres, MySQL, SQLite)",
              "Schema file upload (SQL, JSON)",
              "Export graphs as SVG or PNG",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Start Mapping Now
          </a>
          <p className="mt-3 text-xs text-[#8b949e]">Cancel anytime. No lock-in.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Which databases are supported?</h3>
            <p className="text-[#8b949e] text-sm">PostgreSQL, MySQL, and SQLite are fully supported via direct connection strings. You can also upload raw SQL DDL files or JSON schema exports from any database.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Is my database connection secure?</h3>
            <p className="text-[#8b949e] text-sm">Connections are encrypted in transit and credentials are never stored. Schema metadata is analyzed in-memory and discarded after your session ends.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I export the dependency graphs?</h3>
            <p className="text-[#8b949e] text-sm">Yes. Every graph can be exported as SVG or PNG for use in documentation, architecture diagrams, or team wikis.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] py-6 text-center text-xs text-[#8b949e]">
        © {new Date().getFullYear()} DB Dependency Mapper. All rights reserved.
      </footer>
    </main>
  )
}
