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
  { icon: FileSearch, image: '/workflow/research.webp', number: '01', title: 'Research', text: 'Fahami produk, pelanggan, masalah dan potensi content sebelum memilih.' },
  { icon: Target, image: '/workflow/pilih.webp', number: '02', title: 'Pilih', text: 'Buat keputusan berdasarkan sebab yang jelas—bukan sekadar komisen atau viral.' },
  { icon: Sparkles, image: '/workflow/content.webp', number: '03', title: 'Bina Content', text: 'Tukar insight research kepada angle, hook dan content yang boleh diuji.' },
  { icon: BarChart3, image: '/workflow/belajar.webp', number: '04', title: 'Belajar', text: 'Rekod tindakan dan gunakan hasil sebenar untuk eksperimen seterusnya.' },
]

const researchPoints = [
  { icon: CircleAlert, title: 'Masalah pelanggan', text: 'Produk menyelesaikan masalah yang mudah difahami dan ditunjukkan dalam video.' },
  { icon: Video, title: 'Potensi content', text: 'Banyak sudut demonstrasi, perbandingan dan situasi harian boleh diteroka.' },
  { icon: Scale, title: 'Pertimbangan', text: 'Persaingan tinggi memerlukan angle yang lebih spesifik dan bukti penggunaan.' },
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
            <h1>Berhenti pilih produk secara <span>teka-teki.</span></h1>
            <p className="hero-lead">RADAS membantu anda memahami produk, melihat potensi content dan membuat keputusan yang lebih yakin sebelum mula mempromosi.</p>
            <div className="hero-actions">
              <a className="button" href={APP_URL}>Terokai Research Percuma <ArrowRight size={18} /></a>
              <a className="text-link" href="#cara">Lihat cara RADAS berfungsi <ChevronRight size={17} /></a>
            </div>
            <div className="trust-row">
              <span><CircleCheck /> Research berstruktur</span>
              <span><CircleCheck /> Keputusan neutral</span>
              <span><CircleCheck /> Tiada janji jualan</span>
            </div>
          </div>

          <div className="hero-visual hero-story" aria-label="Perjalanan daripada research produk kepada content dan potensi komisen">
            <img src="/hero-research-income.webp" alt="Affiliate Malaysia membuat research produk sebelum menghasilkan content" />
            <div className="hero-story-flow"><span>Research</span><ArrowRight /><span>Content</span><ArrowRight /><span>Komisen</span></div>
            <div className="hero-story-note"><Sparkles /><div><small>RESEARCH DAHULU</small><strong>Bina content dengan arah yang lebih jelas.</strong></div></div>
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
          <div className="steps-grid">
            {steps.map(({ icon: Icon, image, number, title, text }) => (
              <article className="step-card" key={title}>
                <div className="step-visual">
                  <img src={image} alt="" loading="lazy" />
                  <span className="step-number">{number}</span>
                  <div className="icon-box"><Icon /></div>
                </div>
                <div className="step-copy"><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
          <div className="rar-band">
            <div className="rar-icon"><BarChart3 /></div>
            <div><span>METRIK UTAMA RADAS</span><h3>Research-to-Action Rate</h3><p>Nilai sebenar research bukan berapa banyak yang dibaca—tetapi berapa banyak yang membawa kepada eksperimen content.</p></div>
            <a href={APP_URL}>Mulakan research <ArrowRight /></a>
          </div>
        </section>

        <section className="section research-section section-pad" id="research">
          <div className="section-heading split-heading research-heading">
            <div><span className="kicker">CONTOH RESEARCH RADAS</span><h2>Bukan sekadar “produk ini bagus”.</h2></div>
            <div className="section-intro-note"><FileSearch /><p>Setiap research menerangkan apa yang perlu difahami, apa yang boleh diuji dan perkara yang perlu dipertimbangkan.</p></div>
          </div>
          <div className="research-showcase">
            <div className="showcase-main">
              <div className="showcase-label"><span>Research #001</span><span className="verified"><ShieldCheck /> Disemak</span></div>
              <div className="research-signal-row">
                <div><CircleAlert /><span><small>MASALAH</small><strong>Mudah difahami</strong></span></div>
                <div><Video /><span><small>CONTENT</small><strong>Boleh didemonstrasi</strong></span></div>
                <div><Target /><span><small>FOKUS</small><strong>Layak diuji</strong></span></div>
              </div>
              <h3>Produk Keperluan Harian dengan Demonstrasi Jelas</h3>
              <p className="showcase-summary">Produk yang mudah difahami biasanya memberi affiliate lebih banyak ruang untuk menghasilkan content berbentuk masalah, demonstrasi dan hasil penggunaan.</p>
              <div className="research-points">
                {researchPoints.map(({ icon: Icon, title, text }) => <div key={title}><span className="research-point-icon"><Icon /></span><p><strong>{title}</strong>{text}</p></div>)}
              </div>
            </div>
            <aside className="verdict-card">
              <span>VERDIK RADAS</span>
              <div className="verdict-icon"><CircleCheck /></div>
              <h3><CircleCheck /> Layak Diuji</h3>
              <p>Sesuai untuk affiliate yang mampu menghasilkan demonstrasi jelas dan mahu menguji beberapa angle masalah.</p>
              <div className="verdict-signals"><span>Masalah jelas</span><span>Visual kuat</span><span>Boleh diuji</span></div>
              <hr />
              <small>Nota penting</small>
              <p className="note">Verdik bukan jaminan jualan. Ia ialah keputusan research untuk membantu anda memilih eksperimen seterusnya.</p>
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
