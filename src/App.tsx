import {
  ArrowRight,
  Ban,
  BarChart3,
  Check,
  ChevronRight,
  CircleCheck,
  CircleAlert,
  FileSearch,
  FileCheck2,
  Layers3,
  Menu,
  RotateCcw,
  ShieldCheck,
  Scale,
  Sparkles,
  Target,
  Video,
  X,
} from 'lucide-react'
import { useState } from 'react'
import ProPage from './ProPage'

const APP_URL = 'https://app.radas.my'

const steps = [
  { icon: FileSearch, number: '01', title: 'Research', text: 'Fahami produk, pelanggan dan potensi content.' },
  { icon: Target, number: '02', title: 'Pilih', text: 'Buat keputusan berdasarkan sebab yang jelas.' },
  { icon: Sparkles, number: '03', title: 'Bina Content', text: 'Tukar insight kepada angle dan eksperimen.' },
  { icon: BarChart3, number: '04', title: 'Belajar', text: 'Nilai hasil untuk tindakan seterusnya.' },
]

const researchPoints = [
  { icon: CircleAlert, title: 'Masalah pelanggan', text: 'Mudah difahami' },
  { icon: Video, title: 'Potensi content', text: 'Demonstrasi & perbandingan' },
  { icon: Scale, title: 'Pertimbangan', text: 'Persaingan tinggi' },
]

const starterFeatures = ['Research berstatus Free', 'Fakta asas produk', 'Harga dan anggaran komisen', 'Simpan research untuk rujukan']
const proFeatures = ['Semua Research Free dan PRO', 'Verdict dan sebab keputusan', 'Creator Competition dan GMV Max', 'Research Insight penuh', 'Content angles, video rujukan dan Execution Playbook']

const trustStats = [
  { icon: FileCheck2, value: '10', label: 'Research Disemak' },
  { icon: Layers3, value: '3', label: 'Lapisan Analisis' },
  { icon: ShieldCheck, value: '100%', label: 'Research Neutral' },
  { icon: Ban, value: 'Tiada', label: 'Verdict Berbayar' },
]

const faqs = [
  ['Adakah RADAS menjamin jualan?', 'Tidak. RADAS membantu anda membuat keputusan dan merancang eksperimen dengan lebih tersusun. Jualan tetap bergantung pada pelaksanaan, content, pasaran dan faktor platform.'],
  ['Adakah produk dipilih kerana komisen tinggi?', 'Tidak semata-mata. Research melihat masalah pelanggan, kejelasan tawaran, potensi content, pertimbangan dan kesesuaian untuk diuji.'],
  ['Siapa yang sesuai menggunakan RADAS?', 'Affiliate Malaysia yang mahu berhenti memilih produk secara rawak dan membina proses kerja yang lebih konsisten.'],
  ['Apa beza RADAS Free dan RADAS Pro?', 'RADAS Free memberi akses kepada research terpilih dan fakta asas. RADAS Pro membuka research mendalam, content angles dan panduan pelaksanaan yang lebih lengkap.'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  if (window.location.pathname === '/pro' || window.location.pathname === '/pro/') {
    return <ProPage />
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <a className="brand" href="#top" aria-label="RADAS home">
          <img src="/radas-logo.png" alt="RADAS" />
        </a>
        <button className="menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Buka menu" aria-expanded={menuOpen}>
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Navigasi utama">
          <a href="#cara" onClick={closeMenu}>Cara RADAS</a>
          <a href="#research" onClick={closeMenu}>Contoh Research</a>
          <a href="#akses" onClick={closeMenu}>Akses</a>
          <a href="#faq" onClick={closeMenu}>FAQ</a>
          <a className="nav-login" href={`${APP_URL}/login`}>Log masuk</a>
          <a className="button small" href={APP_URL}>Terokai RADAS <ArrowRight size={16} /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-glow glow-one" />
          <div className="hero-glow glow-two" />
          <div className="hero-copy">
            <div className="eyebrow"><ShieldCheck size={16} /> Research neutral untuk affiliate Malaysia</div>
            <h1>Buat keputusan produk dengan <span>lebih yakin.</span></h1>
            <p className="hero-lead">RADAS membantu affiliate Malaysia menukar research kepada pilihan, content dan eksperimen yang lebih tersusun.</p>
            <div className="hero-actions">
              <a className="button" href={APP_URL}>Mulakan dengan RADAS <ArrowRight size={18} /></a>
              <a className="text-link" href="#cara">Lihat cara RADAS berfungsi <ChevronRight size={17} /></a>
            </div>
            <div className="trust-row">
              <span><CircleCheck /> Research berstruktur</span>
              <span><CircleCheck /> Keputusan neutral</span>
              <span><CircleCheck /> Tiada janji jualan</span>
            </div>
          </div>

          <div className="hero-visual hero-community">
            <img
              src="/hero-rakyat-malaysia.webp"
              alt="Rakyat Malaysia menggunakan laptop, tablet dan telefon untuk research serta menghasilkan content"
              fetchPriority="high"
            />
          </div>
        </section>

        <section className="problem-strip">
          <p>Ramai affiliate tidak kekurangan produk.</p>
          <h2>Mereka kekurangan <span>sebab yang jelas</span> untuk memilih dan menguji sesuatu produk.</h2>
        </section>

        <section className="trust-stats section-pad" aria-label="Nilai dan prinsip Research RADAS">
          {trustStats.map(({ icon: Icon, value, label }) => (
            <article className="trust-stat" key={label}>
              <div className="trust-stat-icon"><Icon /></div>
              <strong>{value}</strong>
              <h3>{label}</h3>
            </article>
          ))}
        </section>

        <section className="section section-pad" id="cara">
          <div className="section-heading centered">
            <span className="kicker">DARIPADA RESEARCH KEPADA TINDAKAN</span>
            <h2>Satu sistem untuk memilih, bertindak dan belajar.</h2>
            <p>RADAS menyusun perjalanan affiliate supaya setiap research membawa kepada tindakan—bukan sekadar disimpan.</p>
          </div>
          <div className="workflow-infographic">
            <div className="workflow-track" aria-label="Kitaran Research kepada Tindakan RADAS">
              {steps.map(({ icon: Icon, number, title, text }) => (
                <article className="workflow-step" key={title}>
                  <span className="workflow-number">{number}</span>
                  <div className="workflow-icon"><Icon aria-hidden="true" /></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
            <div className="workflow-feedback"><RotateCcw aria-hidden="true" /><span>Insight baharu</span><small>Belajar, tambah baik dan kembali kepada research.</small></div>
          </div>
          <aside className="workflow-cta" aria-label="Mulakan Research RADAS">
            <div className="workflow-cta-icon"><BarChart3 aria-hidden="true" /></div>
            <div className="workflow-cta-copy">
              <span>RESEARCH-TO-ACTION</span>
              <h3>Jangan biarkan research berhenti sebagai maklumat.</h3>
              <p>Pilih satu produk, tentukan angle dan mulakan eksperimen content pertama anda.</p>
            </div>
            <a className="button workflow-cta-button" href={APP_URL}>Mulakan Research Percuma <ArrowRight /></a>
          </aside>
        </section>

        <section className="section research-section section-pad" id="research">
          <div className="section-heading split-heading research-heading">
            <div><span className="kicker">CONTOH RESEARCH RADAS</span><h2>Bukan sekadar “produk ini bagus”.</h2></div>
            <div className="section-intro-note"><FileSearch /><p>Lihat signal, pertimbangan dan verdict dalam satu paparan.</p></div>
          </div>
          <div className="research-showcase">
            <svg className="research-flow-lines" viewBox="0 0 1000 500" preserveAspectRatio="none" aria-hidden="true">
              <path className="flow-base" d="M180 385 C480 385 590 250 760 250" />
              <path className="flow-base" d="M390 385 C540 385 620 250 760 250" />
              <path className="flow-base" d="M600 385 C675 385 700 250 760 250" />
              <path className="flow-stream stream-one" d="M180 385 C480 385 590 250 760 250" />
              <path className="flow-stream stream-two" d="M390 385 C540 385 620 250 760 250" />
              <path className="flow-stream stream-three" d="M600 385 C675 385 700 250 760 250" />
            </svg>
            <div className="showcase-main">
              <div className="showcase-label"><span>Research #001</span><span className="verified"><ShieldCheck /> Disemak</span></div>
              <div className="showcase-product">
                <span>SNAPSHOT PRODUK</span>
                <h3>Produk Keperluan Harian</h3>
                <p>Masalah jelas · Visual kuat · Banyak angle</p>
              </div>
              <div className="research-points">
                {researchPoints.map(({ icon: Icon, title, text }) => <div key={title}><span className="research-point-icon"><Icon /></span><p><strong>{title}</strong>{text}</p></div>)}
              </div>
            </div>
            <aside className="verdict-card">
              <span>VERDIK RADAS</span>
              <div className="verdict-pulse" aria-hidden="true"><span /><span /><span /><div className="verdict-icon"><CircleCheck /></div></div>
              <h3><CircleCheck /> Layak Diuji</h3>
              <p>Sesuai untuk content demonstrasi dan angle masalah.</p>
              <div className="verdict-signals"><span>Masalah jelas</span><span>Visual kuat</span><span>Boleh diuji</span></div>
              <hr />
              <small>NOTA</small>
              <p className="note">Panduan research, bukan jaminan jualan.</p>
            </aside>
          </div>
        </section>

        <section className="section principles section-pad">
          <div className="principle-copy">
            <span className="kicker">PRINSIP RADAS</span>
            <h2>Kepercayaan dahulu.<br /><span>Tools kemudian.</span></h2>
            <p>RADAS dibina sebagai sumber research yang neutral. Nilai kami bukan pada jumlah produk, tetapi pada kejelasan sebab di sebalik setiap keputusan.</p>
          </div>
          <div className="principle-list">
            {[
              ['Tidak dibayar untuk verdict positif', 'Pemilik produk tidak boleh membeli keputusan “Layak Diuji”.'],
              ['Research mempunyai konteks', 'Kami menerangkan kekuatan, pertimbangan dan siapa yang sesuai menguji.'],
              ['Research perlu kekal relevan', 'Maklumat yang tidak lagi sesuai boleh dikemas kini atau diarkibkan.'],
              ['Tindakan lebih penting daripada koleksi', 'RADAS membantu research bergerak ke eksperimen dan pembelajaran.'],
            ].map(([title, text]) => <div key={title}><ShieldCheck /><p><strong>{title}</strong>{text}</p></div>)}
          </div>
        </section>

        <section className="section pricing-section section-pad" id="akses">
          <div className="section-heading centered">
            <span className="kicker">MULAKAN DENGAN PERCUMA</span>
            <h2>Pilih akses yang sesuai dengan perjalanan anda.</h2>
            <p>Mulakan dengan research terpilih. Naik taraf apabila anda perlukan sistem pelaksanaan yang lebih lengkap.</p>
          </div>
          <div className="pricing-grid">
            <article className="price-card">
              <span className="plan-label">RADAS STARTER</span><h3>RM0</h3><p>Kenali cara RADAS berfikir dan mula memilih dengan lebih tersusun.</p>
              <a className="button secondary" href={APP_URL}>Buka Akaun Percuma</a>
              <ul>{starterFeatures.map((item) => <li key={item}><Check /> {item}</li>)}</ul>
            </article>
            <article className="price-card featured">
              <span className="plan-label">RADAS PRO</span><h3>Research ke tindakan</h3><p>Untuk affiliate yang mahu memahami produk, memilih angle content dan merancang eksperimen dengan lebih jelas.</p>
              <a className="button" href="/pro">Kenali RADAS PRO <ArrowRight size={17} /></a>
              <ul>{proFeatures.map((item) => <li key={item}><Check /> {item}</li>)}</ul>
            </article>
          </div>
        </section>

        <section className="section faq-section section-pad" id="faq">
          <div className="section-heading centered"><span className="kicker">SOALAN LAZIM</span><h2>Perkara penting sebelum bermula.</h2></div>
          <div className="faq-list">
            {faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}
          </div>
        </section>

        <section className="final-cta section-pad">
          <div className="cta-glow" />
          <img src="/radas-mark.png" alt="" />
          <span className="kicker">PILIH DENGAN YAKIN</span>
          <h2>Research yang baik patut membawa kepada tindakan yang lebih baik.</h2>
          <p>Terokai RADAS dan mulakan research pertama anda secara percuma.</p>
          <a className="button" href={APP_URL}>Terokai RADAS Percuma <ArrowRight /></a>
        </section>
      </main>

      <footer>
        <div className="footer-brand"><img src="/radas-logo.png" alt="RADAS" /><p>Research Operating System untuk affiliate Malaysia.</p></div>
        <div className="footer-links"><a href="#cara">Cara RADAS</a><a href="#research">Research</a><a href="#akses">Akses</a><a href={`${APP_URL}/login`}>Log masuk</a></div>
        <p className="copyright">© {new Date().getFullYear()} RADAS Malaysia. Semua hak terpelihara.</p>
      </footer>
    </div>
  )
}

export default App
