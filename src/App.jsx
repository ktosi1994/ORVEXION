import { useEffect, useState } from 'react'
import btcLogo from 'cryptocurrency-icons/svg/color/btc.svg'
import ethLogo from 'cryptocurrency-icons/svg/color/eth.svg'
import solLogo from 'cryptocurrency-icons/svg/color/sol.svg'
import bnbLogo from 'cryptocurrency-icons/svg/color/bnb.svg'
import xrpLogo from 'cryptocurrency-icons/svg/color/xrp.svg'
import adaLogo from 'cryptocurrency-icons/svg/color/ada.svg'
import dogeLogo from 'cryptocurrency-icons/svg/color/doge.svg'
import avaxLogo from 'cryptocurrency-icons/svg/color/avax.svg'
import maticLogo from 'cryptocurrency-icons/svg/color/matic.svg'
import linkLogo from 'cryptocurrency-icons/svg/color/link.svg'
import ltcLogo from 'cryptocurrency-icons/svg/color/ltc.svg'
import { siteConfig } from './config/siteConfig'

const serviceHighlights = [
  'Diagnostika hardvérových a softvérových porúch.',
  'Riešenie problémov so systémami Windows a Linux.',
  'Diagnostika pomalých počítačov.',
  'Kontrola diskov, RAM a ďalších komponentov.',
  'Riešenie systémových chýb a problémov s ovládačmi.',
  'Optimalizácia výkonu počítačov.',
  'Diagnostika problémov s internetovým pripojením.',
  'Technické poradenstvo pri modernizácii počítačov.',
]

const networkServices = [
  'Návrh a konfigurácia počítačových sietí.',
  'Diagnostika LAN a Wi‑Fi.',
  'Konfigurácia routerov a switchov.',
  'Správa zariadení MikroTik.',
  'Riešenie problémov s DNS, DHCP a IP adresáciou.',
  'Segmentácia siete pomocou VLAN.',
  'VPN a bezpečný vzdialený prístup.',
  'Konfigurácia firewallov.',
  'Diagnostika nestabilných pripojení.',
  'Návrh sietí pre malé a stredné firmy.',
  'Technické konzultácie a dokumentácia siete.',
]

const websiteServices = [
  'Firemné webstránky.',
  'Landing pages.',
  'Prezentačné weby pre podnikateľov.',
  'Responzívny dizajn.',
  'Základná SEO optimalizácia.',
  'Optimalizácia rýchlosti.',
  'Kontaktné formuláre.',
  'Integrácia API.',
  'Redizajn existujúcich stránok.',
  'Technická údržba.',
]

const softwareServices = [
  'Vývoj webových aplikácií.',
  'Firemné nástroje a interné systémy.',
  'Automatizácia procesov.',
  'Analytické dashboardy.',
  'Integrácia API.',
  'Spracovanie a vizualizácia dát.',
  'Backendové služby.',
  'Databázové riešenia.',
  'Blockchainové analytické nástroje.',
]

const techStack = ['React', 'TypeScript', 'JavaScript', 'Node.js', 'Python', 'SQL', 'REST APIs', 'Git', 'Linux', 'Docker', 'Solana']

const securityChecks = [
  'Základná kontrola bezpečnosti IT infraštruktúry.',
  'Kontrola konfigurácie počítačových sietí.',
  'Odporúčania pre zabezpečenie pracovných staníc.',
  'Bezpečný vzdialený prístup.',
  'Zálohovacie stratégie.',
  'Ochrana firemných dát.',
  'Technologické konzultácie.',
]

const walletMetrics = [
  { label: 'Súčasný stav', value: '$84.6K', delta: '+8.4%' },
  { label: 'Príjmy', value: '$29.3K', delta: '+12.1%' },
  { label: 'Výdaje', value: '$15.2K', delta: '-3.2%' },
  { label: 'Aktivita', value: '342 tx', delta: '+21' },
]

const tokenRows = [
  { symbol: 'SOL', name: 'Solana', icon: 'S', amount: '18.740', value: '$4,260', change: '+2.4%', risk: 'Low', color: 'sol' },
  { symbol: 'USDC', name: 'USD Coin', icon: '$', amount: '6,420', value: '$6,420', change: '+0.2%', risk: 'Low', color: 'usdc' },
  { symbol: 'BONK', name: 'Bonk', icon: 'B', amount: '128,500', value: '$2,180', change: '+6.1%', risk: 'Medium', color: 'bonk' },
]

const nftCards = [
  { name: 'Neon District #104', collection: 'Neon District', value: '2.8 SOL', lastSale: '3.1 SOL', floor: '1.9 SOL', color: 'cyan', type: 'cNFT' },
  { name: 'Pixel Vault', collection: 'Pixel Vault', value: '1.1 SOL', lastSale: '1.3 SOL', floor: '0.9 SOL', color: 'blue', type: 'NFT' },
  { name: 'Signal Drift', collection: 'Signal Drift', value: '0.9 SOL', lastSale: '1.0 SOL', floor: '0.8 SOL', color: 'violet', type: 'cNFT' },
]

const recentTx = [
  { type: 'Príjem', network: 'Solana', value: '+1.42 SOL', time: '2 min' },
  { type: 'Odoslanie', network: 'Solana', value: '-0.73 SOL', time: '18 min' },
  { type: 'Token swap', network: 'Raydium', value: '+$470', time: '45 min' },
]

const marketCoins = [
  { symbol: 'BTC', name: 'Bitcoin', logo: btcLogo, price: '$68,240', trend: '+4.3%' },
  { symbol: 'ETH', name: 'Ethereum', logo: ethLogo, price: '$3,480', trend: '+2.7%' },
  { symbol: 'SOL', name: 'Solana', logo: solLogo, price: '$164.20', trend: '+5.9%' },
  { symbol: 'BNB', name: 'BNB', logo: bnbLogo, price: '$604.10', trend: '+1.8%' },
]

const heroWords = siteConfig.slogan.split(' ')

const SectionHeading = ({ eyebrow, title, align = 'left' }) => (
  <div className={`section-heading ${align}`}>
    <span className="eyebrow">{eyebrow}</span>
    <h2>{title}</h2>
  </div>
)

const ServiceCard = ({ title, items, accent }) => (
  <div className="service-card">
    <div className="card-glow" style={{ background: accent }} />
    <h3>{title}</h3>
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
)

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12 },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="container nav-wrap">
          <a href="#home" className="brand" aria-label="ORVEXION home">
            <span className="brand-mark" aria-hidden="true">
              <span className="brand-core">O</span>
            </span>
            <span className="brand-text">
              <strong>{siteConfig.company}</strong>
              <small>{siteConfig.descriptor}</small>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Hlavná navigácia">
            {siteConfig.nav.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="button button-primary nav-cta">
            Nezáväzný dopyt
          </a>

          <button
            className="mobile-menu-toggle"
            type="button"
            aria-label="Otvoriť navigáciu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((curr) => !curr)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div className={`mobile-panel ${menuOpen ? 'open' : ''}`}>
          <nav aria-label="Mobilná navigácia">
            {siteConfig.nav.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-network" aria-hidden="true">
            <span className="node node-1" />
            <span className="node node-2" />
            <span className="node node-3" />
            <span className="node node-4" />
            <span className="node node-5" />
            <span className="node node-6" />
            <span className="node node-7" />
            <span className="node node-8" />
            <span className="pulse pulse-1" />
            <span className="pulse pulse-2" />
            <span className="pulse pulse-3" />
          </div>

          <div className="container hero-inner">
            <div className="hero-copy">
              <span className="eyebrow">{siteConfig.descriptor}</span>
              <h1 className="hero-title" aria-label={siteConfig.slogan}>
                {heroWords.map((word, index) => (
                  <span key={`${word}-${index}`} className="hero-word" style={{ animationDelay: `${index * 0.12}s` }}>
                    {word}
                  </span>
                ))}
              </h1>
              <p>
                ORVEXION spája IT servis, sieťové technológie, vývoj softvéru a inteligentnú analýzu
                blockchainových dát. Navrhujeme moderné digitálne riešenia pre jednotlivcov,
                podnikateľov a firmy.
              </p>

              <div className="hero-actions">
                <a href="#services" className="button button-primary">
                  Preskúmať služby
                </a>
                <a href="#contact" className="button button-secondary">
                  Nezáväzný dopyt
                </a>
                <a href="#crypto" className="button button-ghost">
                  Crypto Intelligence
                </a>
              </div>

              <div className="hero-meta">
                <span>IT servis</span>
                <span>Sieťové riešenia</span>
                <span>Blockchain analytics</span>
              </div>
            </div>

            <div className="hero-panel">
              <div className="mini-dashboard">
                <div className="mini-header">
                  <span className="status-dot" />
                  <span>System status</span>
                </div>

                <div className="mini-grid">
                  <div className="metric-box metric-box--wide">
                    <small>Network health</small>
                    <strong>97.4%</strong>
                    <div className="sparkline">
                      <span />
                      <span />
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                  <div className="metric-box">
                    <small>Uptime</small>
                    <strong>99.9%</strong>
                  </div>
                  <div className="metric-box">
                    <small>Threat score</small>
                    <strong>Low</strong>
                  </div>
                </div>

                <div className="market-strip" aria-label="Denné trhové údaje">
                  {marketCoins.map((coin) => (
                    <div key={coin.symbol} className="market-pill">
                      <img src={coin.logo} alt={`${coin.name} logo`} className="coin-icon" />
                      <div className="coin-copy">
                        <strong>{coin.symbol}</strong>
                        <span>{coin.price}</span>
                      </div>
                      <em className="coin-trend">{coin.trend}</em>
                    </div>
                  ))}
                </div>

                <div className="mini-graph">
                  <span className="bar b1" />
                  <span className="bar b2" />
                  <span className="bar b3" />
                  <span className="bar b4" />
                  <span className="bar b5" />
                  <span className="bar b6" />
                  <span className="bar b7" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="services-intro reveal">
          <div className="container narrow">
            <SectionHeading eyebrow="Riešenia" title="IT služby navrhnuté pre stabilnú prevádzku a rast" />
          </div>
        </section>

        <section id="diagnostika" className="section reveal">
          <div className="container">
            <SectionHeading eyebrow="IT diagnostika a servis" title="Diagnostika a servis počítačov" />
            <div className="content-grid dual-grid">
              <div>
                <div className="info-panel">
                  <p>
                    Riešime široké spektrum hardvérových a softvérových problémov s dôrazom na
                    rýchlu diagnostiku, bezpečné opravy a udržanie výkonu zariadení v praxi.
                  </p>
                  <p>
                    Vzdialená podpora je možná pri vhodných typoch problémov, no niektoré opravy
                    vyžadujú fyzický prístup k zariadeniu.
                  </p>
                </div>
              </div>
              <div>
                <ServiceCard title="Diagnostika a údržba" items={serviceHighlights} accent="linear-gradient(135deg, rgba(71,211,255,0.9), rgba(57,99,255,0.7))" />
              </div>
            </div>
            <div className="cta-row">
              <a href="#contact" className="button button-primary">
                Požiadať o diagnostiku
              </a>
            </div>
          </div>
        </section>

        <section id="network" className="section alt-bg reveal">
          <div className="container">
            <SectionHeading eyebrow="Sieťové riešenia" title="Sieťové riešenia a firemná IT infraštruktúra" />
            <div className="network-layout">
              <div className="network-visual" aria-label="Vizualizácia počítačovej siete">
                <div className="network-node node-user" />
                <div className="network-node node-db" />
                <div className="network-node node-server" />
                <div className="network-node node-router" />
                <div className="network-node node-switch" />
                <div className="network-node node-cloud" />
                <span className="network-line line-1" />
                <span className="network-line line-2" />
                <span className="network-line line-3" />
                <span className="network-line line-4" />
              </div>
              <div className="service-card slim-card">
                <ul>
                  {networkServices.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="cta-row">
              <a href="#contact" className="button button-primary">
                Konzultovať sieťové riešenie
              </a>
            </div>
          </div>
        </section>

        <section id="website" className="section reveal">
          <div className="container">
            <SectionHeading eyebrow="Tvorba webstránok" title="Moderné webové stránky" />
            <div className="showcase-grid">
              <div className="concept-card">
                <div className="mock-window">
                  <div className="browser-bar" />
                  <div className="mock-hero" />
                  <div className="mock-grid">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
                <small>Demo projekt • Firemná prezentácia</small>
              </div>
              <div className="concept-card">
                <div className="mock-window dark">
                  <div className="browser-bar" />
                  <div className="mock-hero alt-hero" />
                  <div className="mock-grid">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
                <small>Demo projekt • Landing page</small>
              </div>
              <div className="concept-card">
                <div className="mock-window">
                  <div className="browser-bar" />
                  <div className="mock-hero two-col" />
                  <div className="mock-grid">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
                <small>Demo projekt • Prezentačný web</small>
              </div>
            </div>
            <div className="service-list-wrap">
              <ServiceCard title="Webové služby" items={websiteServices} accent="linear-gradient(135deg, rgba(129,227,255,0.9), rgba(84,123,255,0.8))" />
            </div>
            <div className="cta-row">
              <a href="#contact" className="button button-primary">
                Vytvoriť webstránku
              </a>
            </div>
          </div>
        </section>

        <section id="software" className="section alt-bg reveal">
          <div className="container">
            <SectionHeading eyebrow="Vývoj aplikácií" title="Vývoj aplikácií a softvérových riešení" />
            <div className="content-grid dual-grid">
              <div>
                <ServiceCard title="Softvérové riešenia" items={softwareServices} accent="linear-gradient(135deg, rgba(111,205,255,0.8), rgba(35,85,180,0.72))" />
              </div>
              <div>
                <div className="stack-panel">
                  <h3>Technologický stack</h3>
                  <div className="tag-cloud">
                    {techStack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="cta-row">
              <a href="#contact" className="button button-primary">
                Prediskutovať projekt
              </a>
            </div>
          </div>
        </section>

        <section id="cybersecurity" className="section reveal">
          <div className="container">
            <SectionHeading eyebrow="Cybersecurity" title="Bezpečnosť a technologické poradenstvo" />
            <div className="content-grid dual-grid">
              <div>
                <div className="info-panel security-panel">
                  <p>
                    Testovanie bezpečnosti sa vykonáva len po správnom autorizovaní a v súlade s
                    požiadavkami klienta.
                  </p>
                  <ul>
                    {securityChecks.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="security-visual">
                <div className="shield-ring">
                  <div className="shield-core" />
                </div>
              </div>
            </div>
            <div className="cta-row">
              <a href="#contact" className="button button-primary">
                Konzultovať bezpečnosť
              </a>
            </div>
          </div>
        </section>

        <section id="crypto" className="section crypto-section reveal">
          <div className="container">
            <SectionHeading eyebrow="Crypto Intelligence" title="Crypto Intelligence" />
            <div className="crypto-header">
              <div>
                <h3>Rozumejte blockchainovým dátam. Sledujte aktíva. Objavujte súvislosti.</h3>
                <p>
                  ORVEXION Crypto Intelligence je koncept analytickej platformy určenej na prehľadné
                  sledovanie verejných blockchainových dát, kryptomenových peňaženiek, tokenov, NFT a
                  transakčnej aktivity.
                </p>
              </div>
            </div>

            <div className="dashboard-shell">
              <aside className="dashboard-sidebar">
                <div className="brand-mini">ORVEXION</div>
                <ul>
                  <li className="active">Prehľad</li>
                  <li>Peňaženky</li>
                  <li>Tokeny</li>
                  <li>NFT</li>
                  <li>Monitoring</li>
                </ul>
              </aside>

              <div className="dashboard-main">
                <div className="dashboard-topbar">
                  <div className="search-box">Hľadať adresu peňaženky</div>
                  <div className="network-select">Solana</div>
                </div>

                <div className="metric-row">
                  {walletMetrics.map((metric) => (
                    <div key={metric.label} className="metric-card">
                      <span>{metric.label}</span>
                      <strong>{metric.value}</strong>
                      <small>{metric.delta}</small>
                    </div>
                  ))}
                </div>

                <div className="crypto-grid">
                  <div className="panel panel-large">
                    <div className="panel-header">
                      <h4>Rozdelenie aktív</h4>
                      <span>Demonštračné dáta</span>
                    </div>
                    <div className="donut-wrap">
                      <div className="donut">
                        <div className="donut-inner">72%</div>
                      </div>
                      <ul className="legend">
                        <li><span className="legend-dot dot-a" />SOL</li>
                        <li><span className="legend-dot dot-b" />USDC</li>
                        <li><span className="legend-dot dot-c" />NFT</li>
                      </ul>
                    </div>
                  </div>

                  <div className="panel">
                    <div className="panel-header">
                      <h4>Token portfolio</h4>
                      <span>Solana</span>
                    </div>
                    <div className="token-table">
                      <div className="token-row token-header-row">
                        <span>Token</span>
                        <span>Množstvo</span>
                        <span>Hodnota</span>
                        <span>24h</span>
                        <span>Riziko</span>
                      </div>
                      {tokenRows.map((row) => (
                        <div key={row.symbol} className="token-row">
                          <div className="token-identity">
                            <span className={`token-icon token-${row.color}`}>{row.icon}</span>
                            <div>
                              <strong>{row.symbol}</strong>
                              <small>{row.name}</small>
                            </div>
                          </div>
                          <span>{row.amount}</span>
                          <span>{row.value}</span>
                          <b>{row.change}</b>
                          <span className={`token-risk risk-${row.risk.toLowerCase()}`}>{row.risk}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="crypto-grid bottom-grid">
                  <div className="panel">
                    <div className="panel-header">
                      <h4>NFT & cNFT</h4>
                      <span>Metadata</span>
                    </div>
                    <div className="nft-grid">
                      {nftCards.map((nft) => (
                        <div key={nft.name} className={`nft-item nft-${nft.color}`}>
                          <div className="nft-visual">
                            <span className="nft-tag">{nft.type}</span>
                          </div>
                          <div className="nft-meta">
                            <strong>{nft.name}</strong>
                            <span>{nft.collection}</span>
                          </div>
                          <div className="nft-values">
                            <div>
                              <small>Hodnota</small>
                              <strong>{nft.value}</strong>
                            </div>
                            <div>
                              <small>Posledný predaj</small>
                              <strong>{nft.lastSale}</strong>
                            </div>
                          </div>
                          <div className="nft-floor">
                            <span>Floor</span>
                            <b>{nft.floor}</b>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="panel">
                    <div className="panel-header">
                      <h4>Posledné transakcie</h4>
                      <span>Live demo</span>
                    </div>
                    <div className="tx-list">
                      {recentTx.map((tx) => (
                        <div key={`${tx.type}-${tx.time}`} className="tx-row">
                          <div>
                            <strong>{tx.type}</strong>
                            <small>{tx.network}</small>
                          </div>
                          <span>{tx.value}</span>
                          <small>{tx.time}</small>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section alt-bg reveal">
          <div className="container">
            <SectionHeading eyebrow="O nás" title="Technologické poradenstvo s praktickým zameraním" />
            <div className="about-grid">
              <div className="info-panel">
                <p>
                  ORVEXION kombinuje technickú odbornosť v oblasti IT servisu, sieťových riešení,
                  vývoja softvéru a inteligentnej analýzy blockchainových dát. Projektujeme riešenia,
                  ktoré podporujú operatívnu prevádzku, bezpečnosť a transformačný rast.
                </p>
              </div>
              <div className="stats-panel">
                <div>
                  <strong>IT servis</strong>
                  <span>Diagnostika a optimalizácia</span>
                </div>
                <div>
                  <strong>Sieťová infraštruktúra</strong>
                  <span>Návrh, konfigurácia a podpora</span>
                </div>
                <div>
                  <strong>Digital intelligence</strong>
                  <span>Blockchain analytics a dashboardy</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section reveal">
          <div className="container">
            <SectionHeading eyebrow="Kontakt" title="Nezáväzný dopyt" />
            <div className="contact-grid">
              <form
                className="contact-form"
                onSubmit={(event) => {
                  event.preventDefault()
                  const formData = new FormData(event.currentTarget)
                  const subject = `Dopyt: ${formData.get('service')}`
                  const body = [
                    `Meno: ${formData.get('name')}`,
                    `Email: ${formData.get('email')}`,
                    `Typ požiadavky: ${formData.get('service')}`,
                    '',
                    'Správa:',
                    formData.get('message'),
                  ].join('\n')

                  window.location.href = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
                }}
              >
                <div className="field-grid">
                  <label>
                    Meno
                    <input type="text" name="name" placeholder="Vaše meno" required />
                  </label>
                  <label>
                    Email
                    <input type="email" name="email" placeholder="vas@email.sk" required />
                  </label>
                </div>
                <label>
                  Typ požiadavky
                  <select name="service" defaultValue="" required>
                    <option value="" disabled>
                      Vyberte typ
                    </option>
                    <option>IT diagnostika</option>
                    <option>Sieťové riešenie</option>
                    <option>Webstránka</option>
                    <option>Vývoj aplikácie</option>
                    <option>Cybersecurity</option>
                    <option>Crypto Intelligence</option>
                  </select>
                </label>
                <label>
                  Správa
                  <textarea name="message" rows="5" placeholder="Popíšte váš projekt alebo problém..." required />
                </label>
                <button type="submit" className="button button-primary">
                  Odoslať dopyt
                </button>
              </form>

              <div className="contact-info">
                <div className="contact-card">
                  <h3>Kontakt</h3>
                  <ul>
                    <li><a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a></li>
                    <li><a href={`tel:${siteConfig.contact.phone.replaceAll(' ', '')}`}>{siteConfig.contact.phone}</a></li>
                    <li>{siteConfig.contact.address}</li>
                    <li>{siteConfig.contact.workingHours}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <strong>{siteConfig.company}</strong>
            <span>{siteConfig.descriptor}</span>
          </div>
          <p>{siteConfig.slogan}</p>
          <a href="#home" className="button button-ghost">
            Späť hore
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
