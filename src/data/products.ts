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
    id: 'it-efficiency-audit',
    title: 'סקירת יעילות טכנולוגית',
    category: 'ייעוץ',
    shortDescription: 'זיהוי "צווארי בקבוק" במערכות המחשוב שגוזלים זמן מהעובדים שלכם.',
    fullDescription: 'אנחנו מנתחים את הרגלי העבודה והכלים הקיימים בעסק שלכם ומגישים דו"ח מפורט עם המלצות לייעול. לפעמים שינוי קטן בהגדרות או בתוכנה יכול לחסוך שבועות של עבודה מצטברת בשנה.',
    tags: ['Audit', 'Consulting', 'ROI', 'Efficiency'],
    mainImage: 'https://images.unsplash.com/photo-1551288049-bbbda5366991?auto=format&fit=crop&q=80&w=800',
    additionalImages: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800',
    ]
  },
  {
    id: 'check-drive-space',
    title: 'ניטור שטח דיסק והתראות',
    category: 'אוטומציה',
    shortDescription: 'בדיקה אוטומטית של שטח הדיסק ושליחת התראות אימייל במקרה של חוסר במקום.',
    fullDescription: 'סקריפט זה בודק את כל הכוננים הקשיחים המקומיים (HDD/SSD). אם כונן כלשהו מלא ביותר מ-90%, הוא שולח אליך אוטומטית התראת אימייל עם דוח מפורט של כל הכוננים שלך. הוא תוכנן להרצה אוטומטית באמצעות משימה מתוזמנת יומית.\n\nלמה זה עוזר וחוסך זמן וכסף? מניעת קריסה פתאומית של המחשב בשל חוסר מקום חסכת שעות של השבתה ומונעת אובדן נתונים יקר. במקום לבדוק ידנית כל שבוע, האוטומציה מבטיחה שקט נפשי ומאפשרת לך להתמקד בעבודה, תוך חיסכון בעלויות טכנאי חירום.',
    tags: ['PowerShell', 'Automation', 'Monitoring', 'Email'],
    mainImage: 'https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&q=80&w=800',
    additionalImages: [
      'https://images.unsplash.com/photo-1563770660941-20978e87081b?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=800',
    ]
  },
  {
    id: 'cleanup-folders',
    title: 'ניקוי תיקיות אוטומטי',
    category: 'תחזוקה',
    shortDescription: 'ניקוי שבועי של תיקיות שולחן העבודה וההורדות לשמירה על סדר וביצועים.',
    fullDescription: 'סקריפט זה מנקה את המחשב שלך על ידי מחיקת כל הקבצים והתיקיות בתוך תיקיות ה\'שולחן העבודה\' וה\'הורדות\'. הוא מדלג על קבצים שנמצאים בשימוש על ידי תוכניות אחרות כדי למנוע שגיאות. הוא תוכנן להרצה אוטומטית בכל יום שישי בשעה 08:00 בבוקר.\n\nלמה זה עוזר וחוסך זמן וכסף? ניקוי אוטומטי מונע הצטברות של "זבל דיגיטלי" שמאט את המחשב ופוגע בפריון. החיסכון בזמן מצטבר לעשרות שעות בשנה שהיו מתבזבזות על חיפוש קבצים או ניקוי ידני, ומבטיחה שהמחשב שלך תמיד יפעל בשיא המהירות ללא צורך בשדרוגי חומרה יקרים.',
    tags: ['Automation', 'Cleanup', 'Windows', 'Efficiency'],
    mainImage: 'https://images.unsplash.com/photo-1584433144859-1fc3ab84a9ec?auto=format&fit=crop&q=80&w=800',
    additionalImages: [
      'https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
    ]
  },
  {
    id: 'daily-backup',
    title: 'גיבוי יומי אוטומטי לענן',
    category: 'אבטחת מידע',
    shortDescription: 'גיבוי אוטומטי של התיקיות החשובות שלך ל-Google Drive בכל לילה.',
    fullDescription: 'סקריפט זה יוצר גיבוי יומי של התיקיות שבחרת לתוך Google Drive. הוא משתמש בכלי \'rclone\' כדי לסנכרן את הקבצים שלך, ומבטיח שהגיבוי בענן יהיה העתק מדויק של התיקייה המקומית שלך. קבצים חדשים מועלים, וקבצים שנמחקו מקומית מוסרים מהגיבוי כדי לשמור עליו מעודכן. הוא תוכנן לרוץ אוטומטית בכל לילה בחצות (00:00).\n\nלמה זה חשוב? בעולם הדיגיטלי, המידע שלך הוא הנכס היקר ביותר שלך. תקלות חומרה, וירוסים או טעויות אנוש עלולים להוביל לאובדן קבצים קריטיים בשניות. גיבוי אוטומטי חוסך לך את הצורך לזכור להעתיק קבצים ידנית, ומבטיח שתמיד תהיה לך גרסה עדכנית ובטוחה בענן. זהו ביטוח זול ופשוט שמונע כאבי ראש אדירים והפסד כספי בעתיד.',
    tags: ['Backup', 'Google Drive', 'rclone', 'Security'],
    mainImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc4b?auto=format&fit=crop&q=80&w=800',
    additionalImages: [
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    ]
  },
];
