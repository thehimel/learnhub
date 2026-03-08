import { Anton, Barlow } from "next/font/google"

import "./styles.css"

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
})
const barlow = Barlow({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-barlow",
})

export function LandingPage() {
  return (
    <div
      className={`learnhub-landing ${anton.variable} ${barlow.variable}`}
    >
      <div className="notif-bar">
        🎓 PREMIUM UNLOCKED — You&apos;re now getting UNLIMITED knowledge. No
        rubber gloves required.
      </div>

      <header>
        <div className="logo">
          <span className="learn">Learn</span>
          <span className="hub">Hub</span>
        </div>
        <nav>
          <a href="#">Courses</a>
          <a href="#">Categories</a>
          <a href="#">Instructors</a>
          <a href="#">API Docs</a>
          <a href="#" className="btn-outline">
            Log In
          </a>
          <a href="#" className="btn-primary">
            Sign Up FREE
          </a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-badge">🔥 #1 Learning Platform API</div>
        <h1>
          The <span>Hottest</span> Knowledge
          <br />
          You&apos;ll Ever Access
        </h1>
        <p>
          Unlimited courses. HD quality. No buffering. Our API delivers raw,
          uncensored knowledge straight to your application — fast, deep, and
          satisfying.
        </p>
        <div className="hero-cta">
          <a href="#" className="btn-primary">
            🚀 Get API Access — It&apos;s FREE
          </a>
          <a href="#" className="btn-outline">
            📖 Browse Courses
          </a>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <div className="stat-num">69M+</div>
            <div className="stat-label">Active Learners</div>
          </div>
          <div className="stat">
            <div className="stat-num">420K</div>
            <div className="stat-label">Hours of Content</div>
          </div>
          <div className="stat">
            <div className="stat-num">99.9%</div>
            <div className="stat-label">Uptime (we never stop)</div>
          </div>
          <div className="stat">
            <div className="stat-num">4K</div>
            <div className="stat-label">Video Quality</div>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      <section className="categories">
        <div className="section-header">
          <span className="section-title">🔥 Trending Categories</span>
          <a href="#" className="see-all">
            See All Categories →
          </a>
        </div>
        <div className="tag-row">
          <span className="tag active">All</span>
          <span className="tag">Big Data</span>
          <span className="tag">Deep Learning</span>
          <span className="tag">Hard Code</span>
          <span className="tag">Penetration Testing</span>
          <span className="tag">Bare Metal</span>
          <span className="tag">Asynchronous</span>
          <span className="tag">Hot Reloading</span>
          <span className="tag">Exposed APIs</span>
          <span className="tag">Multi-threading</span>
          <span className="tag">Injection Attacks</span>
          <span className="tag">Vanilla JS</span>
        </div>
      </section>

      <hr className="section-divider" />

      <section className="courses">
        <div className="section-header">
          <span className="section-title">🎬 Most Watched This Week</span>
          <a href="#" className="see-all">
            View All →
          </a>
        </div>
        <div className="courses-grid">
          <div className="course-card">
            <div className="course-thumb thumb-bg-1">
              <span className="thumb-emoji">🍆</span>
              <div className="thumb-overlay" />
              <span className="thumb-hd">HD</span>
              <span className="thumb-duration">4:20:00</span>
            </div>
            <div className="course-info">
              <div className="instructor-name">Professor BigEndian</div>
              <div className="course-title">
                Inserting Objects Into Deeply Nested Databases — A Complete Guide
              </div>
              <div className="course-meta">
                <span className="course-views">👁️ 4.2M views</span>
                <span className="course-rating">★ 99%</span>
              </div>
            </div>
          </div>

          <div className="course-card">
            <div className="course-thumb thumb-bg-2">
              <span className="thumb-emoji">🔒</span>
              <div className="thumb-overlay" />
              <span className="thumb-hd">4K</span>
              <span className="thumb-duration">6:09:00</span>
            </div>
            <div className="course-info">
              <div className="instructor-name">HackerGirl69</div>
              <div className="course-title">
                Penetration Testing for Beginners: Getting Inside Every System
              </div>
              <div className="course-meta">
                <span className="course-views">👁️ 6.9M views</span>
                <span className="course-rating">★ 98%</span>
              </div>
            </div>
          </div>

          <div className="course-card">
            <div className="course-thumb thumb-bg-3">
              <span className="thumb-emoji">🐍</span>
              <div className="thumb-overlay" />
              <span className="thumb-hd">HD</span>
              <span className="thumb-duration">3:33:00</span>
            </div>
            <div className="course-info">
              <div className="instructor-name">SlipperySlope Dev</div>
              <div className="course-title">
                Python Feels So Good: Handling Long Snakes &amp; Flexible Syntax
              </div>
              <div className="course-meta">
                <span className="course-views">👁️ 3.3M views</span>
                <span className="course-rating">★ 97%</span>
              </div>
            </div>
          </div>

          <div className="course-card">
            <div className="course-thumb thumb-bg-4">
              <span className="thumb-emoji">💾</span>
              <div className="thumb-overlay" />
              <span className="thumb-hd">HD</span>
              <span className="thumb-duration">2:22:00</span>
            </div>
            <div className="course-info">
              <div className="instructor-name">Randy Overflow</div>
              <div className="course-title">
                Hard Drives &amp; Soft Skills: When Your RAM Gets Fully Loaded
              </div>
              <div className="course-meta">
                <span className="course-views">👁️ 2.1M views</span>
                <span className="course-rating">★ 96%</span>
              </div>
            </div>
          </div>

          <div className="course-card">
            <div className="course-thumb thumb-bg-5">
              <span className="thumb-emoji">🌐</span>
              <div className="thumb-overlay" />
              <span className="thumb-hd">4K</span>
              <span className="thumb-duration">8:08:00</span>
            </div>
            <div className="course-info">
              <div className="instructor-name">WebWetware</div>
              <div className="course-title">
                REST APIs Gone Wild: Exposing Your Endpoints to the World
              </div>
              <div className="course-meta">
                <span className="course-views">👁️ 5.5M views</span>
                <span className="course-rating">★ 100%</span>
              </div>
            </div>
          </div>

          <div className="course-card">
            <div className="course-thumb thumb-bg-6">
              <span className="thumb-emoji">🤖</span>
              <div className="thumb-overlay" />
              <span className="thumb-hd">HD</span>
              <span className="thumb-duration">9:00:00</span>
            </div>
            <div className="course-info">
              <div className="instructor-name">GigaChad GPT</div>
              <div className="course-title">
                AI Goes All the Way: Training Models That Never Stop Learning
              </div>
              <div className="course-meta">
                <span className="course-views">👁️ 8.0M views</span>
                <span className="course-rating">★ 99%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="promo-banner">
        <div className="promo-text">
          <h2>
            Go <span>PREMIUM</span> — Bigger, Faster, Deeper
          </h2>
          <p>
            Unlimited 4K streams, zero ads, early access to hot new content.
            First month free — no strings attached. Well, maybe a few strings.
          </p>
        </div>
        <a
          href="#"
          className="btn-primary"
          style={{ fontSize: "16px", padding: "14px 30px", whiteSpace: "nowrap" }}
        >
          💳 Join Premium
        </a>
      </div>

      <section className="api-section">
        <div className="section-title">Our API Does It ALL Night Long</div>
        <p className="api-subtitle">
          Powerful endpoints. Low latency. High endurance. The Learning Platform
          API that doesn&apos;t stop until you&apos;re satisfied.
        </p>
        <div className="api-grid">
          <div className="api-card">
            <span className="api-method method-get">GET</span>
            <div className="api-endpoint">/api/v1/courses/hot</div>
            <div className="api-desc">
              Fetch the hottest courses trending right now. Returns a
              steaming-hot payload.
            </div>
          </div>
          <div className="api-card">
            <span className="api-method method-post">POST</span>
            <div className="api-endpoint">/api/v1/users/enroll</div>
            <div className="api-desc">
              Insert a new student into any course. Deep enrollment. No
              protection needed.
            </div>
          </div>
          <div className="api-card">
            <span className="api-method method-get">GET</span>
            <div className="api-endpoint">/api/v1/streams/live</div>
            <div className="api-desc">
              Tap into live knowledge streams. Ride them raw at up to 8K
              resolution.
            </div>
          </div>
          <div className="api-card">
            <span className="api-method method-put">PUT</span>
            <div className="api-endpoint">/api/v1/progress/thrust</div>
            <div className="api-desc">
              Push learner progress forward. Hard. Repeatedly. Until completion.
            </div>
          </div>
          <div className="api-card">
            <span className="api-method method-post">POST</span>
            <div className="api-endpoint">/api/v1/certificates/climax</div>
            <div className="api-desc">
              Generate a beautiful certificate the moment the learner reaches
              their peak.
            </div>
          </div>
          <div className="api-card">
            <span className="api-method method-delete">DELETE</span>
            <div className="api-endpoint">/api/v1/ignorance/{"{id}"}</div>
            <div className="api-desc">
              Permanently destroy ignorance. Ruthlessly. No recovery possible.
            </div>
          </div>
        </div>
      </section>

      <section className="code-section">
        <div className="section-header">
          <span className="section-title">⚡ Quick &amp; Dirty Integration</span>
        </div>
        <div className="code-block">
          <span className="code-comment">
            // 🔥 Get started in seconds — it feels AMAZING
          </span>
          <br />
          <span className="code-key">const</span> learnhub ={" "}
          <span className="code-func">require</span>(
          <span className="code-string">&apos;learnhub-api&apos;</span>);
          <br />
          <br />
          <span className="code-key">const</span> client ={" "}
          <span className="code-key">new</span> learnhub.
          <span className="code-func">Client</span>(
          {"{"}
          <br />
          &nbsp;&nbsp;apiKey:{" "}
          <span className="code-string">&apos;lh_sk_oh_yes_right_there&apos;</span>
          ,
          <br />
          &nbsp;&nbsp;region:{" "}
          <span className="code-string">&apos;eu-west-1&apos;</span>,&nbsp;&nbsp;
          <span className="code-comment">
            // because Europeans love learning
          </span>
          <br />
          &nbsp;&nbsp;hardMode: <span className="code-key">true</span>,
          <br />
          {"}"}
          );
          <br />
          <br />
          <span className="code-comment">
            // Fetch the hottest content available
          </span>
          <br />
          <span className="code-key">const</span> courses ={" "}
          <span className="code-key">await</span> client.courses.
          <span className="code-func">getHot</span>(
          {"{"}
          <br />
          &nbsp;&nbsp;limit: <span className="code-number">69</span>,
          <br />
          &nbsp;&nbsp;quality: <span className="code-string">&apos;4K&apos;</span>
          ,
          <br />
          &nbsp;&nbsp;filter:{" "}
          <span className="code-string">&apos;deeply_technical&apos;</span>,
          <br />
          {"}"}
          );
          <br />
          <br />
          console.
          <span className="code-func">log</span>(
          <span className="code-string">
            `🎓 Loaded ${"${courses.length}"} courses. Oh. YES.`
          </span>
          );
        </div>
      </section>

      <footer>
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo">
              <span className="learn">Learn</span>
              <span className="hub">Hub</span>
            </div>
            <p>
              The world&apos;s most satisfying learning platform API. We go deep
              so your users don&apos;t have to go elsewhere.
            </p>
          </div>
          <div className="footer-links">
            <h4>Explore</h4>
            <ul>
              <li>
                <a href="#">Hot Courses</a>
              </li>
              <li>
                <a href="#">Top Instructors</a>
              </li>
              <li>
                <a href="#">Live Sessions</a>
              </li>
              <li>
                <a href="#">Certifications</a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Developers</h4>
            <ul>
              <li>
                <a href="#">API Reference</a>
              </li>
              <li>
                <a href="#">SDKs</a>
              </li>
              <li>
                <a href="#">Webhooks</a>
              </li>
              <li>
                <a href="#">Rate Limits</a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Content Policy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © 2025 LearnHub. All knowledge reserved. No actual adults were
            harmed in the making of this API.
          </span>
          <span>
            <span className="age-badge">18+</span> You must be at least 18 to
            appreciate how good our documentation is.
          </span>
        </div>
      </footer>
    </div>
  )
}
