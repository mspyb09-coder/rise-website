const booking = "https://bit.ly/pamala-burch-booking";
const socials = {
  facebook: "https://www.facebook.com/share/1EQzk7PR51/?mibextid=wwXIfr",
  instagram: "https://www.instagram.com/r.i.s.e.pamala",
  tiktok: "https://www.tiktok.com/@protectwithpamala",
};

function Arrow(){ return <span aria-hidden="true">↗</span> }
function Mark(){return <div className="mark" aria-label="R.I.S.E."><b>R</b><i/><b>I</b><i/><b>S</b><i/><b>E</b></div>}

export default function Home(){
  return <main>
    <header>
      <a className="brand" href="#top"><Mark/><small>Reposition · Insure · Secure · Empower</small></a>
      <nav><a href="#about">About</a><a href="#solutions">Solutions</a><a href="/quiz">Quiz</a><a href="#contact">Contact</a></nav>
      <a className="btn small" href={booking} target="_blank" rel="noreferrer">Book a conversation <Arrow/></a>
    </header>

    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">Financial education for the life you’re building</p>
        <h1>Protect what you’ve built.<br/><em>Prepare for what’s next.</em></h1>
        <p className="lead">R.I.S.E. helps hardworking professionals, families, and business owners understand strategies designed to protect their income, prepare for retirement, and build a legacy with greater clarity.</p>
        <div className="actions"><a className="btn" href={booking} target="_blank" rel="noreferrer">Schedule your appointment <Arrow/></a><a className="btn outline" href="/quiz">Take the 2-Minute Quiz <Arrow/></a><a className="underlink" href="#approach">Explore our approach ↓</a></div>
        <div className="trust"><span><b>30+</b> years of leadership</span><span><b>13</b> states served</span></div>
      </div>
      <div className="hero-image"><div className="float"><small>YOUR NEXT CHAPTER</small><strong>deserves a clear strategy.</strong></div></div>
    </section>

    <section className="framework">
      <div><b>R</b><span>Reposition<small>what you have</small></span></div>
      <div><b>I</b><span>Insure<small>what matters</small></span></div>
      <div><b>S</b><span>Secure<small>what you’ve built</small></span></div>
      <div><b>E</b><span>Empower<small>what comes next</small></span></div>
    </section>

    <section className="section about" id="about">
      <p className="number">01 / OUR PURPOSE</p>
      <div className="two">
        <div><p className="eyebrow">Clarity before products</p><h2>Your financial strategy should make sense for <em>your life.</em></h2></div>
        <div className="prose"><p>At R.I.S.E., we don’t start with a product. We start with you—your goals, your family, your concerns, and your future.</p><p>We help you understand your options, identify potential gaps, and explore strategies designed to help you reposition what you have, protect what you’ve built, and build toward the future you want.</p><a className="underlink" href={booking} target="_blank" rel="noreferrer">Start with a conversation <Arrow/></a></div>
      </div>
    </section>

    <section className="section solutions" id="solutions">
      <div className="section-head"><div><p className="number">02 / HOW WE HELP</p><h2>Build a stronger financial foundation.</h2></div><p>Education-led guidance for people who have worked hard, saved diligently, and want a clearer path forward.</p></div>
      <div className="services">
        <article><small>01</small><h3>Retirement Readiness</h3><p>Explore strategies designed to protect retirement savings and create reliable income for the years ahead.</p></article>
        <article><small>02</small><h3>Income Protection</h3><p>Identify potential gaps and understand ways to help protect the income your household or business depends on.</p></article>
        <article><small>03</small><h3>Tax-Advantaged Strategies</h3><p>Learn about approaches that may help create more tax-efficient income as part of a broader strategy.</p></article>
        <article><small>04</small><h3>Legacy Planning</h3><p>Build with intention so the people and priorities you care about can remain protected beyond your lifetime.</p></article>
      </div>
    </section>

    <section className="section founder" id="approach">
      <div className="founder-portrait"><p className="eyebrow">Meet Pamala Yvonne Burch</p><img className="founder-photo" src="/pamala-burch.jpeg" alt="Pamala Yvonne Burch"/><p className="portrait-caption">Maybe it’s time to reposition.<br/><strong>Maybe it’s time to R.I.S.E.</strong></p></div>
      <div className="founder-copy"><h2>“I spent more than 30 years helping build somebody else’s business. Now I’m building mine—and helping others see what’s possible for theirs.”</h2><div className="founder-story"><p>Pamala’s path to financial services became personal when her 92-year-old uncle broke his hip and her family faced urgent questions about care, comfort, dignity, and the financial reality of later life.</p><p>That experience revealed how many hardworking families are building a life without being shown how to prepare for it. R.I.S.E. grew from her commitment to make financial education clearer, more human, and more empowering.</p></div><div className="values"><span>Faith</span><span>Family</span><span>Finance</span><span>Fitness</span><span>Freedom</span></div></div>
    </section>

    <section className="section fit">
      <div><p className="number">03 / WHO WE SERVE</p><h2>You’ve built something worth protecting.</h2></div>
      <div className="checklist"><p><span>✓</span>You’re a professional, business owner, or self-employed.</p><p><span>✓</span>You’ve accumulated retirement savings but need a clearer strategy.</p><p><span>✓</span>You want to manage taxes and create dependable retirement income.</p><p><span>✓</span>You want to leave a meaningful legacy for the people you love.</p></div>
    </section>

    <section className="section faq"><div><p className="number">04 / GOOD TO KNOW</p><h2>You don’t need to “already have a lot of money.”</h2></div><div><p>The best time to build clarity is before decisions become urgent. R.I.S.E. meets you where you are, helps you understand your options, and focuses on practical next steps that fit your goals and circumstances.</p><a className="btn dark" href={booking} target="_blank" rel="noreferrer">Let’s talk about your goals <Arrow/></a></div></section>

    <section className="cta" id="contact"><Mark/><p className="eyebrow">Reposition. Protect. Build.</p><h2>Your future deserves more than hope.<br/><em>It deserves a strategy.</em></h2><p>Book a complimentary conversation with Pamala to explore where you are, what matters most, and what your next step could look like.</p><div className="cta-actions"><a className="btn light" href={booking} target="_blank" rel="noreferrer">Book an appointment <Arrow/></a><a className="btn outline" href="/quiz">Take the Retirement Quiz <Arrow/></a></div></section>

    <footer>
      <div><Mark/><p>Reposition · Insure · Secure · Empower</p></div>
      <div><strong>Contact</strong><a href="tel:+13188402641">(318) 840-2641</a><a href="mailto:protectwithpamala@gmail.com">protectwithpamala@gmail.com</a></div>
      <div><strong>Connect</strong><a href={socials.facebook} target="_blank" rel="noreferrer">Facebook</a><a href={socials.instagram} target="_blank" rel="noreferrer">Instagram</a><a href={socials.tiktok} target="_blank" rel="noreferrer">TikTok</a></div>
      <div><strong>Service Area</strong><p>Serving clients across LA, TX, MS, FL, NC, PA, KY, GA, MD, CA, AR, CT &amp; DE.</p></div>
      <small className="disclaimer">This website is for educational purposes only. Strategies and product availability vary by individual circumstances and state. No guarantees of financial, tax, or investment outcomes are made.</small>
    </footer>
  </main>
}
