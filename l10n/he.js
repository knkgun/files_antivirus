OC.L10N.register(
    "files_antivirus",
    {
    "Clean" : "ניקוי",
    "Infected" : "נגוע",
    "Unchecked" : "לא נבדק",
    "Scanner exit status" : "מצב היציאה של הסורק",
    "Scanner output" : "פלט הסורק",
    "Saving…" : "מתבצעת שמירה…",
    "Antivirus" : "אנטיוירוס",
    "File {file} is infected with {virus}" : "הקובץ {file} נגוע בווירוס {virus}",
    "The file has been removed" : "הקובץ הוסר",
    "File containing {virus} detected" : "זוהה קובץ שמכיל את {virus}",
    "Antivirus detected a virus" : "האנטיוירוס זיהה וירוס",
    "Virus %s is detected in the file. Upload cannot be completed." : "התגלה וירוס %s בקובץ. לא ניתן להשלים את ההלאה.",
    "Saved" : "נשמר",
    "Antivirus for files" : "אנטיוירוס לקבצים",
    "An antivirus app for Nextcloud based on ClamAV" : "יישומון אנטיוירוס עבור Nextcloud שמבוסס על ClamAV",
    "Antivirus for files is an antivirus app for Nextcloud based on ClamAV.\n\n* 🕵️‍♂️ When the user uploads a file, it's checked\n* ☢️ Uploaded and infected files will be deleted and a notification will be shown and/or sent via email\n* 🔎 Background Job to scan all files\n\nThis application inspects files that are uploaded to Nextcloud for viruses before they are written to the Nextcloud storage. If a file is identified as a virus, it is either logged or not uploaded to the server. The application relies on the underlying ClamAV virus scanning engine, which the admin points Nextcloud to when configuring the application.\nFor this app to be effective, the ClamAV virus definitions should be kept up to date. Also note that enabling this app will impact system performance as additional processing is required for every upload. More information is available in the Antivirus documentation." : "אנטי וירוס לקבצים הוא יישומון אנטי וירוס עבור Nextcloud על בסיס ClamAV.\n\n* 🕵️‍♂️ בדיקת קובץ ברגע שהועלה על ידי משתמש כלשהו\n* ☢️ קבצים נגועים שהועלו יימחקו ותוצג הודעה או שישלח מסר בדוא״ל\n* 🔎 משימות רקע לסריקת כל הקבצים\n\nהיישומון מאבחן קבצים שנשלחים אל Nextcloud לאיתור וירוסים בטרם כתיבתם למנגנון האחסון של Nextcloud. אם קובץ מזוהה כווירוס, הוא מתועד או שאינו מועלה לשרת. היישומון מתבסס על מנגנון סריקת הווירוסים ClamAV שאליו מפנה המנהל את Nextcloud בעת הגדרת היישומון.\nכדי שהיישומון הזה יביא תועלת, יש לעדכן את חותמות הווירוסים של ClamAV באופן תכוף. כדאי גם לשים לב שהפעלת היישומון תשפיע על ביצועי המערכת כיוון שנדרש עיבוד נוסף עם כל שליחה. ניתן למצוא מידע נוסף בתיעוד של האנטי וירוס.",
    "Greetings {user}," : "ברכות {user},",
    "Sorry, but a malware was detected in a file you tried to upload and it had to be deleted." : "התגלתה נוזקה בקובץ שניסית להעלות ולכן הוא נמחק, עמך הסליחה.",
    "This email is a notification from {host}. Please, do not reply." : "הודעת דוא״ל זאת היא מאת {host}. נא לא להגיב.",
    "File uploaded: {file}" : "קובץ הועלה: {file}",
    "Antivirus for Files" : "אנטיוירוס לקבצים",
    "Mode" : "מצב",
    "Executable" : "קובץ שניתן להפעיל",
    "Daemon" : "סוכן",
    "Daemon (Socket)" : "סוכן (שקע)",
    "Socket" : "שקע",
    "Clamav Socket." : "שקע Clamav.",
    "Not required in Executable Mode." : "לא נדרש במצב הפעלה.",
    "Host" : "מארח",
    "Address of Antivirus Host." : "כתובת מארח האנטיוירוס.",
    "Port" : "פתחה",
    "Port number of Antivirus Host." : "מספר הפתחה של מארח האנטיוירוס.",
    "Stream Length" : "אורך התזרים",
    "ClamAV StreamMaxLength value in bytes." : "ערך StreamMaxLength של ClamAV בבתים.",
    "bytes" : "בתים",
    "Path to clamscan" : "נתיב אל clamscan",
    "Path to clamscan executable." : "נתיב אל קובץ ההפעלה של clamscan.",
    "Not required in Daemon Mode." : "לא נדרש במצב סוכן",
    "Extra command line options (comma-separated)" : "אפשרויות נוספות לשורת הפקודה (בהפרדה לפסיקים)",
    "File size limit, -1 means no limit" : "מגבלת גודל קובץ, ‎-1 אומר ללא הגבלה",
    "Background scan file size limit in bytes, -1 means no limit" : "מגבלת גודל קבצים שנסרקים ברקע, ‎-1 אומר ללא הגבלה.",
    "When infected files are found during a background scan" : "כאשר נמצאים קבצים נגועים במהלך סריקת רגע",
    "Only log" : "לתעד בלבד",
    "Delete file" : "מחיקת קובץ",
    "Save" : "שמירה",
    "Advanced" : "מתקדם",
    "Rules" : "כללים",
    "Clear All" : "לפנות הכול",
    "Reset to defaults" : "איפוס לבררת המחדל",
    "Match by" : "התאמה לפי",
    "Scanner exit status or signature to search" : "מצב יציאה של סורק או חתימה לחיפוש",
    "Description" : "תיאור",
    "Mark as" : "סימון בתור",
    "Add a rule" : "הוספת כל"
},
"nplurals=4; plural=(n == 1 && n % 1 == 0) ? 0 : (n == 2 && n % 1 == 0) ? 1: (n % 10 == 0 && n % 1 == 0 && n > 10) ? 2 : 3;");
