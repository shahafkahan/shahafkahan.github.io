export interface Product {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  tags: string[];
  mainImage: string;
  additionalImages: string[];
}

export const products: Product[] = [
  {
    id: 'pc-turbo-boost',
    title: 'מערכת Turbo-Boost למחשבי עסק',
    category: 'אופטימיזציה',
    shortDescription: 'אוטומציה מלאה לתחזוקת המחשב, המבטיחה מהירות מקסימלית בכל יום עבודה.',
    fullDescription: 'מערכת ה-Turbo-Boost שלנו מבצעת סריקות ותיקונים אוטומטיים ברקע, ללא הפרעה לעבודה השוטפת. היא מנקה קבצים זמניים, מייעלת את הזיכרון ומוודאת שכל המשאבים מופנים לאפליקציות העסקיות הקריטיות שלכם. חסכו עד 30 דקות של זמן המתנה בכל יום.',
    tags: ['אופטימיזציה', 'אוטומציה', 'יעילות', 'Windows'],
    mainImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
    additionalImages: [
      'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800',
    ]
  },
  {
    id: 'workflow-automator',
    title: 'אוטומציה של תהליכי עבודה',
    category: 'פריון',
    shortDescription: 'הפיכת משימות חוזרות ומשעממות לפעולות של לחיצת כפתור אחת.',
    fullDescription: 'אנחנו בונים בוטים וסקריפטים מותאמים אישית שמטפלים בהזנת נתונים, הפקת דוחות ושליחת אימיילים שגרתיים. במקום לבזבז שעות על אקסל, תנו לאוטומציה לעשות את העבודה הקשה עבורכם בדיוק של 100%.',
    tags: ['Python', 'Excel Macro', 'RPA', 'Automation'],
    mainImage: 'https://images.unsplash.com/photo-1551288049-bbbda5366991?auto=format&fit=crop&q=80&w=800',
    additionalImages: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800',
    ]
  },
  {
    id: 'it-health-monitor',
    title: 'ניטור בריאות ה-IT העסקי',
    category: 'תשתית',
    shortDescription: 'לוח בקרה בזמן אמת המזהה תקלות במחשבים לפני שהן קורות.',
    fullDescription: 'מערכת הניטור שלנו חוזה כשלים בחומרה (כמו דיסקים קשיחים או התחממות) ושולחת התראות מוקדמות. מנעו השבתה פתאומית של העסק וחסכו אלפי שקלים בתיקוני חירום על ידי טיפול מונע חכם.',
    tags: ['IoT', 'Monitoring', 'Hardware', 'Cloud'],
    mainImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    additionalImages: [
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800',
    ]
  },
  {
    id: 'auto-onboarding',
    title: 'התקנת עמדות עבודה בקליק',
    category: 'ניהול עובדים',
    shortDescription: 'הכנת מחשב לעובד חדש ב-5 דקות במקום ב-3 שעות.',
    fullDescription: 'סקריפט התקנה אוטומטי שמתקין את כל התוכנות, מגדיר הרשאות, מחבר למדפסות ומגדיר תיבות דואר בצורה אחידה ומהירה. חסכו זמן יקר למנהלים וודאו שכל עובד מתחיל לעבוד עם הכלים הנכונים מהרגע הראשון.',
    tags: ['DevOps', 'Scripts', 'Onboarding', 'Efficiency'],
    mainImage: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800',
    additionalImages: [
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800',
    ]
  },
  {
    id: 'smart-backup-sync',
    title: 'סנכרון וגיבוי חכם לעסקים',
    category: 'אבטחת מידע',
    shortDescription: 'הגנה אוטומטית על כל המידע העסקי ללא צורך בהתערבות ידנית.',
    fullDescription: 'מערכת גיבוי בענן שפועלת בזמן אמת ומבטיחה ששום קובץ לא יאבד. הסנכרון החכם מאפשר גישה לכל המסמכים מכל מכשיר בביטחון מלא, תוך אופטימיזציה של רוחב הפס כדי לא להאט את הגלישה במשרד.',
    tags: ['Backup', 'Cloud', 'Security', 'Sync'],
    mainImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800',
    additionalImages: [
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1499209974431-9dac3e74a1e4?auto=format&fit=crop&q=80&w=800',
    ]
  },
  {
    id: 'it-efficiency-audit',
    title: 'סקירת יעילות טכנולוגית',
    category: 'ייעוץ',
    shortDescription: 'זיהוי "צווארי בקבוק" במערכות המחשוב שגוזלים זמן מהעובדים שלכם.',
    fullDescription: 'אנחנו מנתחים את הרגלי העבודה והכלים הקיימים בעסק שלכם ומגישים דו"ח מפורט עם המלצות לייעול. לפעמים שינוי קטן בהגדרות או בתוכנה יכול לחסוך שבועות של עבודה מצטברת בשנה.',
    tags: ['Audit', 'Consulting', 'ROI', 'Efficiency'],
    mainImage: 'https://images.unsplash.com/photo-1454165833767-027ff39c157c?auto=format&fit=crop&q=80&w=800',
    additionalImages: [
      'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1534951470249-15931c00280d?auto=format&fit=crop&q=80&w=800',
    ]
  },
];
