import Link from "next/link";
import { 
  Terminal, 
  FileText, 
  Cpu, 
  ShieldCheck, 
  Github, 
  ArrowRight, 
  CheckCircle2 
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900 font-sans">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
              <Terminal size={18} strokeWidth={3} />
            </div>
            <span className="text-xl font-bold tracking-tight">ResumePane</span>
          </div>
          <div className="flex items-center gap-4">
            <Link 
              href="https://github.com/yourusername/resumepane" 
              className="hidden sm:flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition"
            >
              <Github size={18} />
              <span>Star on GitHub</span>
            </Link>
            <button className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-slate-800 transition">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-6 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          v0.1.0 Public Alpha
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 max-w-4xl">
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Glass-Box</span> ATS <br />
          for Developers.
        </h1>
        
        <p className="text-lg md:text-xl text-slate-500 max-w-2xl mb-10 leading-relaxed">
          Stop sending your resume into a black hole. ResumePane uses deterministic parsing and local LLMs to show you exactly how machines score your application.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-600/20">
            Analyze Resume
            <ArrowRight size={18} />
          </button>
          <button className="flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-200 px-8 py-3.5 rounded-xl font-semibold hover:bg-slate-50 transition">
            <Github size={18} />
            View Source
          </button>
        </div>
      </section>

      {/* --- CODE DEMO (THE "GLASS BOX" VISUAL) --- */}
      <section className="px-6 max-w-5xl mx-auto mb-32">
        <div className="bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-800 ring-1 ring-white/10">
          <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/50 border-b border-slate-700">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-2 text-xs font-mono text-slate-400">api/v1/scan/analyze — JSON</span>
          </div>
          <div className="p-6 overflow-x-auto">
            <pre className="font-mono text-sm leading-relaxed">
              <code className="text-blue-300">{"{"}</code>
              <br />
              <code className="text-purple-300">  "status"</code>: <code className="text-green-300">"success"</code>,
              <br />
              <code className="text-purple-300">  "score_breakdown"</code>: <code className="text-blue-300">{"{"}</code>
              <br />
              <code className="text-purple-300">    "gatekeeper_readability"</code>: <code className="text-yellow-300">100</code>,
              <br />
              <code className="text-purple-300">    "keyword_match"</code>: <code className="text-yellow-300">75</code>
              <br />
              <code className="text-blue-300">  {"}"}</code>,
              <br />
              <code className="text-purple-300">  "gap_matrix"</code>: <code className="text-blue-300">[</code>
              <br />
              <code className="text-blue-300">    {"{"}</code>
              <br />
              <code className="text-purple-300">      "missing_skill"</code>: <code className="text-green-300">"Docker"</code>,
              <br />
              <code className="text-purple-300">      "frequency_in_jds"</code>: <code className="text-green-300">"High"</code>,
              <br />
              <code className="text-purple-300">      "recommendation"</code>: <code className="text-green-300">"Add to 'Skills' section"</code>
              <br />
              <code className="text-blue-300">    {"}"}</code>
              <br />
              <code className="text-blue-300">  ]</code>
              <br />
              <code className="text-blue-300">{"}"}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* --- FEATURES GRID --- */}
      <section className="bg-slate-50 py-24 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Two-Layer Architecture</h2>
            <p className="text-slate-500">
              Most ATS tools are opaque. We split the process into deterministic parsing and AI analysis so you know exactly where things go wrong.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">1. The Gatekeeper</h3>
              <p className="text-slate-500 leading-relaxed">
                Deterministic PDF parsing using <code className="bg-slate-100 px-1 py-0.5 rounded text-sm">pdf-parse</code>. Verify that your fancy formatting isn&apos;t turning into garbled text before a human ever sees it.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                <Cpu size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">2. Gap Analyst</h3>
              <p className="text-slate-500 leading-relaxed">
                Compare your resume against 3-5 job descriptions simultaneously. Identifies missing hard skills that appear in &gt;50% of your target roles.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6">
                <FileText size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Local & Private</h3>
              <p className="text-slate-500 leading-relaxed">
                Default support for local LLMs via Ollama (Llama 3, Mistral). Your resume data never has to leave your machine if you don&apos;t want it to.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">How it works</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold">1</div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-900">Upload & Parse</h4>
                  <p className="text-slate-500">We strip your PDF to raw text. If it&apos;s unreadable, we stop you right there.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold">2</div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-900">Input Target JDs</h4>
                  <p className="text-slate-500">Paste in the job descriptions you are targeting.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold">3</div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-900">Get the Matrix</h4>
                  <p className="text-slate-500">Receive a JSON report of what skills you are missing.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-slate-100 rounded-3xl p-8 aspect-square flex items-center justify-center">
            {/* Placeholder for an architecture diagram or screenshot */}
            <div className="text-center text-slate-400">
               <Cpu size={64} className="mx-auto mb-4 opacity-50"/>
               <p className="font-mono text-sm">Architecture Diagram</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white">
              <span className="text-xs font-bold">R</span>
            </div>
            <span className="font-semibold text-slate-900">ResumePane</span>
          </div>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Open Source. Released under MIT License.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-slate-500 hover:text-slate-900 transition"><Github size={20}/></Link>
          </div>
        </div>
      </footer>
    </div>
  );
}