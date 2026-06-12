import { useState } from "react";
const LANGUAGES = [
  { code: "ar", name: "العربية", flag: "🇸🇦", color: "#2ecc71" },
  { code: "en", name: "English", flag: "🇬🇧", color: "#3498db" },
  { code: "fr", name: "Français", flag: "🇫🇷", color: "#e74c3c" },
  { code: "de", name: "Deutsch", flag: "🇩🇪", color: "#f39c12" },
  { code: "ja", name: "日本語", flag: "🇯🇵", color: "#9b59b6" },
  { code: "es", name: "Español", flag: "🇪🇸", color: "#e67e22" },
];
const AdBanner = ({ t }) => (
  <div style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", borderRadius: 12, padding: "10px 16px", margin: "12px 0", display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 12, color: "white", opacity: 0.85 }}>
    <span>📢 {t.adText}</span>
    <button style={{ background: "white", color: "#764ba2", border: "none", borderRadius: 8, padding: "4px 10px", fontSize: 11, fontWeight: 700, cursor: "pointer" }}>AD</button>
  </div>
);
export default function LinguaLearn() {
  const [uiLang, setUiLang] = useState("ar");
  const [screen, setScreen] = useState("home");
  const [targetLang, setTargetLang] = useState(null);
  const [isPremium, setIsPremium] = useState(false);
  const [showPremium, setShowPremium] = useState(false);

  const t = { adText: "إعلان - ادعم التطبيق", upgrade: "ترقية للبريميوم", monthly: "شهري - 29 درهم", yearly: "سنوي - 199 درهم", cancel: "إلغاء", chooseLang: "اختر لغة للتعلم", free: "مجاني", premium: "مدفوع" };

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)", padding: 20, fontFamily: "sans-serif" }}>
      <div style={{ maxWidth: 400, margin: "0 auto", textAlign: "center" }}>
        <div style={{ fontSize: 44 }}>🌍</div>
        <h1 style={{ color: "white", fontSize: 28, fontWeight: 900 }}>LinguaLearn</h1>
        <p style={{ color: "#aaa" }}>تعلم اللغات بسهولة</p>
        <AdBanner t={t} />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 20 }}>
          {LANGUAGES.map(lang => (
            <div key={lang.code} style={{ background: "rgba(255,255,255,0.05)", border: `1px solid ${lang.color}`, borderRadius: 16, padding: 18, cursor: "pointer" }}>
              <div style={{ fontSize: 32 }}>{lang.flag}</div>
              <div style={{ color: "white", fontWeight: 600, marginTop: 6 }}>{lang.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
                           }
