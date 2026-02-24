import React, { useState } from "react";
import "./style.css"; // וודא שהקובץ CSS נמצא באותה תיקייה

const openWhatsApp = (customMsg) => {
  const phone = "972584368630"; // פורמט בינלאומי תמיד עדיף
  const base = "היי, ראיתי את החבילות באתר. אשמח לשיחת התאמה.";
  const msg = encodeURIComponent(customMsg ? `${base}\n${customMsg}` : base);
  window.open(`https://wa.me/${phone}?text=${msg}`, "_blank");
};

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqData = [
    { q: "תוך כמה זמן רואים פניות?", a: "לרוב רואים תנועה ופניות בשבועות הראשונים, תלוי בתחרות בתחום ובתקציב המדיה שתגדירו." },
    { q: "האם ה-1,500₪ כולל תקציב פרסום?", a: "לא. זהו תשלום עבור ניהול, אופטימיזציה וכתיבת התכנים. תקציב הפרסום משולם ישירות לגוגל או פייסבוק." },
    { q: "אם אין לי אתר עדיין?", a: "בדיוק בשביל זה יש את חבילת ה-GROWTH. אנחנו נבנה לך דף נחיתה ממיר כדי שלא תבזבז כסף על קמפיין ללא כתובת." },
    { q: "יש התחייבות לתקופה ארוכה?", a: "ממש לא. המטרה היא לייצר תוצאות. אם אתה לא מרוצה, אפשר להפסיק בסוף כל חודש." }
  ];

  return (
    <div className="page" dir="rtl" lang="he">
      <header className="hero">
        <div className="pill">שיווק דיגיטלי · בניית אתרים · ליווי מלא</div>
        <h1>חבילות שיווק ובניית אתרים<br/>שמייצרות לידים אמיתיים</h1>
        <p className="sub">לא "עוד אתר". בונים תשתית + משפך + קמפיינים כדי שהעסק שלך יתחיל לעבוד בשבילך.</p>
        
        <div className="cta">
          <button className="btn primary" onClick={() => openWhatsApp()}>דבר איתי בוואטסאפ</button>
          <a className="btn dark" href="#pricing">צפה בחבילות</a>
        </div>
      </header>

      <main>
        <section id="pricing">
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <h2>בחר חבילה ונתחיל לצמוח</h2>
          </div>

          <div className="grid">
            <article className="card">
              <h3>STARTER</h3>
              <div className="price">₪1,500<span>/ חודש</span></div>
              <ul className="list">
                <li>ניהול קמפיינים (Google/Meta)</li>
                <li>שיפור טקסטים וקריאייטיב</li>
                <li>דוח ביצועים חודשי</li>
                <li>תמיכה בוואטסאפ</li>
              </ul>
              <button className="btn ghost full" onClick={() => openWhatsApp('מעוניין בחבילת STARTER')}>אני רוצה להתחיל</button>
            </article>

            <article className="card popular">
              <div className="badge">הכי משתלם</div>
              <h3>GROWTH</h3>
              <div className="price">₪4,000<span>חד פעמי</span></div>
              <p style={{fontSize: "0.9rem", color: "var(--text-muted)"}}>+ ניהול חודשי של 1,500₪</p>
              <ul className="list">
                <li>הקמת דף נחיתה מקצועי</li>
                <li>חיבור מערכות מדידה (Pixels)</li>
                <li>קמפיין לידים אגרסיבי</li>
                <li>בדיקות A/B לשיפור המרות</li>
              </ul>
              <button className="btn primary full" onClick={() => openWhatsApp('מעוניין בחבילת GROWTH')}>בוא נרים דף ממיר</button>
            </article>

            <article className="card">
              <h3>PREMIUM</h3>
              <div className="price">₪6,000<span>חד פעמי</span></div>
              <p style={{fontSize: "0.9rem", color: "var(--text-muted)"}}>+ ניהול חודשי של 1,500₪</p>
              <ul className="list">
                <li>אתר תדמית מלא (עד 5 עמודים)</li>
                <li>SEO בסיסי לכל העמודים</li>
                <li>כתיבת תוכן שיווקי מלאה</li>
                <li>מערכת ניהול תוכן קלה</li>
              </ul>
              <button className="btn ghost full" onClick={() => openWhatsApp('מעוניין בחבילת PREMIUM')}>אני רוצה אתר מלא</button>
            </article>
          </div>
        </section>

        <section className="faq-section">
          <h2 style={{ textAlign: "center", marginBottom: "30px" }}>שאלות נפוצות</h2>
          <div className="faq-container">
            {faqData.map((item, index) => (
              <div key={index} className="faq-item">
                <button className="faq-question" onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                  {item.q}
                  <span>{openFaq === index ? "–" : "+"}</span>
                </button>
                <div className="faq-answer" style={{ maxHeight: openFaq === index ? "200px" : "0" }}>
                  <p style={{ paddingBottom: "20px" }}>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer style={{ textAlign: "center", padding: "40px", color: "#999" }}>
        <p>© 2026 כל הזכויות שמורות. נבנה עבור ביצועים.</p>
      </footer>
    </div>
  );
}
