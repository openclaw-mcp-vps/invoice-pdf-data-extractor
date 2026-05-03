export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Invoice Automation
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Extract Structured Data from{" "}
          <span className="text-[#58a6ff]">Invoice PDFs</span> Automatically
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Upload invoices and instantly get vendor names, amounts, dates, and line items exported as JSON or CSV — ready for your accounting software.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Started — $15/mo
        </a>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
          {[
            ["📄", "Upload PDFs", "Drag & drop any invoice PDF"],
            ["🤖", "AI Extraction", "Vendor, amounts, dates, line items"],
            ["📊", "Export Data", "JSON & CSV for any accounting tool"]
          ].map(([icon, title, desc]) => (
            <div key={title as string} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{icon}</div>
              <div className="font-semibold text-white mb-1">{title}</div>
              <div className="text-[#8b949e]">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited invoice uploads",
              "AI-powered field extraction",
              "JSON & CSV export",
              "Line item detection",
              "Email support"
            ].map(f => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-center"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            [
              "What invoice formats are supported?",
              "Any standard PDF invoice works — scanned or digital. Our AI handles both text-based and image-based PDFs."
            ],
            [
              "Which accounting software can I import into?",
              "Exports are standard JSON and CSV, compatible with QuickBooks, Xero, FreshBooks, Wave, and any spreadsheet tool."
            ],
            [
              "Is my invoice data kept private?",
              "Yes. Uploaded files are processed and immediately deleted. We never store your invoice contents."
            ]
          ].map(([q, a]) => (
            <div key={q as string} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs pb-8">
        © {new Date().getFullYear()} Invoice PDF Extractor. All rights reserved.
      </footer>
    </main>
  );
}
