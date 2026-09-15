import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowUpRight, ChevronDown, Leaf, Menu, X } from 'lucide-react'
import './styles.css'

const days = [
  ['01', 'Set your intention', 'Choose one word for the week. Keep it close.', 'What would feel supportive right now?'],
  ['02', 'Make space', 'Put your phone away for twenty quiet minutes.', 'What deserves your full attention?'],
  ['03', 'Move your way', 'Stretch, walk, dance, breathe—or take a real rest.', 'What kind of movement feels right today?'],
  ['04', 'Nourish the moment', 'Turn one ordinary part of the day into a ritual.', 'What are you enjoying slowly?'],
  ['05', 'Make a connection', 'Send the message. Make the call. Be present.', 'Who brings warmth to your day?'],
  ['06', 'Create without pressure', 'Make something simply because you can.', 'What would you make with ten minutes?'],
  ['07', 'Reflect & carry forward', 'Notice what felt good. Choose what stays.', 'What will you take with you?'],
]

function Brand() {
  return <a className="brand" href="#top" aria-label="Medical Mary home"><span className="brand-mark"><Leaf size={18} strokeWidth={1.5} /></span><span>Medical<br /><i>Mary</i></span></a>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return <div id="top">
    <div className="ribbon">SEVEN DAYS <span>·</span> ONE RESET <span>·</span> WELLNESS, YOUR WAY</div>
    <header className="site-header">
      <Brand />
      <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Primary navigation">
        <a href="#invitation" onClick={() => setMenuOpen(false)}>The Reset</a><a href="#prize" onClick={() => setMenuOpen(false)}>The Prize</a><a href="#enter" onClick={() => setMenuOpen(false)}>Enter</a>
      </nav>
      <a className="button button-brass header-cta" href="#enter">Join the Reset <ArrowUpRight size={16} /></a>
      <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
    </header>

    <main>
      <section className="hero page-grid">
        <div className="vertical-rail"><span>MM / 07</span><span>WELLNESS EDIT</span></div>
        <div className="hero-copy reveal"><p className="eyebrow">A SMALL INVITATION TO YOURSELF</p><h1>Make room<br /><em>for more</em> of you.</h1><p className="lede">A seven-day reset built around small, intentional moments. Choose a ritual, make it yours, and enter to win a wellness package valued at <strong>R700</strong>.</p><div className="hero-actions"><a className="button button-green" href="#enter">Enter the Giveaway <ArrowUpRight size={16} /></a><a className="text-link" href="#reset">Explore the Reset <span>↓</span></a></div><div className="meta"><span>7 daily prompts</span><span>Adults only</span></div></div>
        <div className="hero-visual reveal"><div className="hero-image image-treatment" role="img" aria-label="Open journal, green tea cup, brass pen and textile on a warm linen surface"></div><div className="paper-note note-one">No perfect version<br />required.</div><div className="stamp">7<br /><small>days to</small><br />reset</div><p className="side-note">Your wellness,<br /><em>your way.</em></p></div>
      </section>

      <section id="invitation" className="invitation section-wrap"><p className="section-label">01 / THE INVITATION</p><div className="invitation-layout"><div></div><div><h2>Wellness doesn’t<br /><em>need a performance.</em></h2><p className="body-copy">It can be the walk you actually enjoy. The message you finally send. The cup of tea you drink while it’s still warm.<br /><br />The 7-Day Wellness Reset is a gentle nudge toward the rituals that help you feel more like yourself—one day at a time.</p><a className="text-link" href="#reset">See all seven prompts <span>↓</span></a></div></div><hr /></section>

      <section id="prize" className="prize section-wrap"><div className="prize-copy"><p className="section-label">02 / THE REWARD</p><p className="overline">WELLNESS, YOUR WAY</p><h2>A considered<br /><em>kind of prize.</em></h2><p className="body-copy">One winner receives a curated Medical Mary product selection plus a personal wellness add-on, with a total prize value of R700.</p><div className="value"><span>R</span><strong>700</strong><small>TOTAL<br />VALUE</small></div><a className="button button-green" href="#enter">I’m Ready to Reset <ArrowUpRight size={16} /></a></div><div className="prize-side"><div className="prize-image image-treatment" role="img" aria-label="Thoughtful wellness flat-lay with journal, textile, tea, sleep accessory and greenery"></div><p className="caption"><strong>Curated for the moment</strong><br />Exact prize details and eligibility are listed below.</p><ol className="prize-list">{['Edibles selection', 'Greenhouse flower', 'Indoor flower', 'One indoor pre-roll', 'A personal wellness add-on'].map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}</ol></div></section>

      <section id="reset" className="reset"><div className="reset-inner"><p className="section-label light">03 / THE SEVEN DAYS</p><h2>Small rituals.<br /><em>Real room.</em></h2><p className="reset-intro">Save this page. Come back each day. Take what you need and leave the rest.</p><div className="day-grid">{days.map(([number, title, description, prompt]) => <article className="day-card" key={number}><div className="day-top"><span>{number}</span><Leaf size={17} /></div><h3>{title}</h3><p>{description}</p><small>{prompt}</small></article>)}</div></div></section>

      <section className="simple section-wrap"><p className="section-label">04 / KEEP IT SIMPLE</p><div className="simple-heading"><h2>Three steps.<br /><em>One week.</em></h2><p className="body-copy">There is no leaderboard, no perfect streak, and no special version of you required. Just seven small invitations.</p></div><div className="steps">{[['Choose your moment', 'Start with the daily prompt that meets you where you are.'], ['Make it your own', 'Participate privately, share a reflection, or simply keep going.'], ['Enter to win', 'Submit the form below before the closing date in the official rules.']].map(([title, text], index) => <div className="step" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p><ArrowUpRight size={19} /></div>)}</div></section>

      <section id="enter" className="entry"><div className="entry-copy"><p className="section-label">05 / YOUR NEXT STEP</p><h2>Begin<br /><em>with one.</em></h2><p>Enter for a chance to receive Medical Mary’s Wellness, Your Way package, valued at R700.</p><ul className="entry-meta"><li>Giveaway: <b>Sunday, 27 September 2026 at 12pm – Saturday, 3 October 2026 at 12pm</b></li><li>Location: <b>10 Kloof Road, Observatory, Johannesburg</b></li><li>Eligibility: <b>People aged 18 and over</b></li><li>Entry: <b>No purchase required</b></li></ul><p className="preview-note">LIVE TALLY ENTRY FORM<br />Official rules, privacy notice, prize restrictions, and jurisdiction requirements apply.</p></div><div className="form-card tally-card"><iframe src="https://tally.so/r/VLKaDg?transparentBackground=1" title="Medical Mary 7-Day Wellness Reset giveaway entry form" loading="lazy" frameBorder="0" marginHeight={0} marginWidth={0} style={{ width: '100%', minHeight: '720px', border: 0 }} /></div></section>

      <section id="fine-print" className="fine-print section-wrap"><p className="section-label">06 / THE FINE PRINT</p><div className="fine-heading"><h2>Good to<br /><em>know.</em></h2><p className="body-copy">Clear details make a thoughtful campaign.</p></div><div className="faq"><details><summary>Who can enter?<ChevronDown size={19} /></summary><p>People aged 18 and over in Observatory, Johannesburg and surrounding areas are eligible to enter, subject to the official rules.</p></details><details><summary>Where is Medical Mary?</summary><p>Medical Mary is at 10 Kloof Road, Observatory, Johannesburg.</p></details><details><summary>Is a purchase required?<ChevronDown size={19} /></summary><p>No purchase required.</p></details><details><summary>What is included?<ChevronDown size={19} /></summary><p>The R700 prize includes an edibles selection, greenhouse flower, indoor flower, one indoor pre-roll, and a personal wellness add-on.</p></details><details><summary>When does it close?<ChevronDown size={19} /></summary><p>Entries close on Saturday, 3 October 2026 at 12pm. The giveaway runs from 12pm on Sunday, 27 September 2026.</p></details></div></section>
    </main>
    <footer><Brand /><p>Small rituals. Intentional moments.</p><nav><a href="#fine-print">Official Rules</a><a href="#fine-print">Privacy</a><a href="#top">Back to Top ↑</a></nav></footer>
  </div>
}

export default App

createRoot(document.getElementById('root')!).render(<App />)
