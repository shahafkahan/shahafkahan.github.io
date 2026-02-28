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
    id: 'ecosphere-dashboard',
    title: 'לוח בקרה EcoSphere',
    category: 'אפליקציית ווב',
    shortDescription: 'מערכת ניטור סביבתית בזמן אמת עם ויזואליזציה מתקדמת של נתונים.',
    fullDescription: 'EcoSphere Dashboard הוא פתרון מקיף לניטור מדדים סביבתיים בזמן אמת. המערכת נבנתה עם דגש על דיוק נתונים וחווית משתמש, וכוללת תרשימים אינטראקטיביים, הזרמת נתונים חיה מחיישני IoT ואנליטיקה חזויה לחיזוי מגמות סביבתיות. לוח הבקרה נועד לעזור לארגונים לקבל החלטות מבוססות נתונים עבור קיימות.',
    tags: ['React', 'TypeScript', 'D3.js', 'Node.js'],
    mainImage: 'https://images.unsplash.com/photo-1551288049-bbbda5366991?auto=format&fit=crop&q=80&w=800',
    additionalImages: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800',
    ]
  },
  {
    id: 'nexus-ecommerce',
    title: 'Nexus E-Commerce',
    category: 'אי-קומרס',
    shortDescription: 'פלטפורמת קמעונאות בעלת אחוזי המרה גבוהים עבור אביזרי טכנולוגיה יוקרתיים.',
    fullDescription: 'Nexus E-Commerce היא חוויית קנייה פרימיום המיועדת לאלקטרוניקה ואביזרי טכנולוגיה בוטיקיים. היא כוללת תהליך תשלום מותאם אישית המשולב עם Stripe, מערכת סינון מוצרים דינמית ועיצוב רספונסיבי המותאם למובייל. הפלטפורמה מנצלת רינדור בצד השרת עבור SEO וביצועים אופטימליים.',
    tags: ['Next.js', 'Stripe', 'Tailwind', 'PostgreSQL'],
    mainImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    additionalImages: [
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800',
    ]
  },
  {
    id: 'vanguard-brand',
    title: 'זהות מותג Vanguard',
    category: 'מיתוג',
    shortDescription: 'זהות ויזואלית ומערכת עיצוב עבור סטארט-אפ בתחום אבטחת הסייבר.',
    fullDescription: 'זהות המותג Vanguard היא שיפוץ ויזואלי מלא עבור חברת אבטחת סייבר מודרנית. הפרויקט כלל עיצוב לוגו, בחירת טיפוגרפיה, פיתוח פלטת צבעים ומדריך מותג מקיף. האסתטיקה מתמקדת באמון, אבטחה וחדשנות צופה פני עתיד.',
    tags: ['עיצוב מותג', 'טיפוגרפיה', 'Illustrator', 'Figma'],
    mainImage: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800',
    additionalImages: [
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800',
    ]
  },
  {
    id: 'aura-health',
    title: 'אפליקציית Aura Health',
    category: 'בריאות דיגיטלית',
    shortDescription: 'אפליקציית מובייל לרווחה נפשית ומעקב אחר מדיטציה.',
    fullDescription: 'אפליקציית Aura Health מספקת למשתמשים מפגשי מדיטציה מודרכים, מעקב אחר סטרס ותוכניות בריאות מותאמות אישית. האפליקציה משתמשת בנתונים ביומטריים כדי להציע תרגילי נשימה ועוקבת אחר התקדמות לאורך זמן עם ויזואליזציות אינטואיטיביות. ממשק המשתמש עוצב כדי להיות מרגיע ונגיש לכל המשתמשים.',
    tags: ['React Native', 'Firebase', 'Redux', 'בריאות'],
    mainImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800',
    additionalImages: [
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1499209974431-9dac3e74a1e4?auto=format&fit=crop&q=80&w=800',
    ]
  },
  {
    id: 'fintrack-pro',
    title: 'FinTrack Pro',
    category: 'פינטק',
    shortDescription: 'כלי לניהול תיקי השקעות פיננסיים ברמת ארגון.',
    fullDescription: 'FinTrack Pro הוא כלי בעל ביצועים גבוהים לניהול תיקים פיננסיים מורכבים. הוא מציע שילוב עם בורסת המניות בזמן אמת, אוטומציה של דיווחי מס ומודלים להערכת סיכונים. הפלטפורמה מיועדת ליועצים פיננסיים מקצועיים ולאנשים בעלי הון עצמי גבוה הזקוקים לדיוק ואבטחה.',
    tags: ['Go', 'React', 'GraphQL', 'AWS'],
    mainImage: 'https://images.unsplash.com/photo-1454165833767-027ff39c157c?auto=format&fit=crop&q=80&w=800',
    additionalImages: [
      'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1534951470249-15931c00280d?auto=format&fit=crop&q=80&w=800',
    ]
  },
  {
    id: 'zenith-mobile',
    title: 'עיצוב מובייל Zenith',
    category: 'עיצוב מובייל',
    shortDescription: 'עיצוב UX/UI עבור אפליקציית חקר טיולים.',
    fullDescription: 'עיצוב המובייל Zenith מתמקד במסע המשתמש של חובבי טיולים. העיצוב מדגיש דימויים איכותיים, קלות ניווט ומנוע גילוי חזק. כל אינטראקציה עוצבה כדי לעורר פליאה ולפשט את תהליך התכנון של טיולים גלובליים.',
    tags: ['עיצוב ממשק', 'מחקר חווית משתמש', 'פרוטוטיפינג'],
    mainImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800',
    additionalImages: [
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800',
    ]
  },
  {
    id: 'spectral-graphics',
    title: 'Spectral Graphics',
    category: 'אפליקציית ווב',
    shortDescription: 'כלי מקוון ליצירת תבניות אמנות גנרטיביות מופשטות.',
    fullDescription: 'Spectral Graphics היא אפליקציית ווב ניסיונית המאפשרת למשתמשים ליצור אמנות מופשטת ייחודית ברזולוציה גבוהה באמצעות אלגוריתמים מתמטיים. משתמשים יכולים להתאים פרמטרים בזמן אמת ולייצא את היצירות שלהם לשימוש דיגיטלי או להדפסה.',
    tags: ['Canvas API', 'JavaScript', 'אמנות גנרטיבית'],
    mainImage: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800',
    additionalImages: [
      'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1500462859273-519d0c294026?auto=format&fit=crop&q=80&w=800',
    ]
  },
  {
    id: 'quantum-iot',
    title: 'מערכת Quantum IoT',
    category: 'חומרה/תוכנה',
    shortDescription: 'תוכנה משובצת עבור אוטומציה ביתית ואבטחה.',
    fullDescription: 'מערכת Quantum IoT משלבת מכשירי בית חכם שונים לאקו-סיסטם אחד מאובטח. התוכנה מותאמת לתקשורת בשיהוי נמוך וכוללת הצפנה מתקדמת להגנה על פרטיות המשתמש. היא מאפשרת שליטה חלקה בתאורה, אקלים ואבטחה באמצעות רכזת מרכזית או אפליקציית מובייל.',
    tags: ['C++', 'MQTT', 'Python', 'אבטחה'],
    mainImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
    additionalImages: [
      'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800',
    ]
  },
];
