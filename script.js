let clickCounter = 0;
let feedbackCounter = 0;
let POSITIVE_FEEDBACK = ["56uj567j7yujhy76huy6","תומך.ת","אכפתי.ת","נדיב.ה","קשוב.ה","משתף.ת פעולה","מתחשב.ת","מפרגנ.ת","גמיש.ה","בעל.ת רוח צוות","סבלן.ית", "מקצועי.ת","רגיש.ה", "אכפתי.ת", "חם.ה", "אחראי.ת", "קשוב.ה לצרכים","יוזם.ת פתרונות", "אדיב.ה", "מוביל.ה צוות", "יוזם.ת", "מקדם.ת שיתוף פעולה","החלטי.ת","שוקל.ת נכון שיקולים","אחראי.ת להחלטות","מנהל.ת זמנים ומשימות ביעילות","מתעדף.ת נכונה","מתמודד.ת היטב עם לחצים","שומר,ת על קור רוח","מייצג.ת את הצוות בכבוד","מתנהל.ת במקצועיות","מתקשר.ת בבהירות ובאופן נעים","יודע.ת להקשיב ולהפגין אמפתיה","שומר.ת על שיח מכבד","נגיש.ה וזמין.ה לשיח","פועל.ת מתוך רגישות לסיטואציות","מעודד.ת שיח פתוח ושקוף","ממתן.ת קונפליקטים","מעביר.ה מסרים בצורה מובנת","נושא.ת באחריות","מתמיד.ה","יוזם.ת רעיונות ושיפורים","מקבל.ת משוב בפתיחות","שומר.ת על נהלים והנחיות","פתוח.ה לרעיונות חדשים","מדויק.ת בפרטים ובזמנים","עצמאי.ת בביצוע משימות","לומד.ת ומתפתח.ת מקצועית","מזדהה עם מטרות הארגון","שומר.ת על סביבת עבודה נעימה ונקייה","פותר.ת בעיות בצורה יצירתית"];
let NEGATIVE_FEEDBACK = ["חסר.ת רצון לסייע","אדיש.ה","מחושב.ת מידי","מתעלם.ת מצרכים","מתבודד.ת","מפצל.ת","מתעלם.ת מדעות אחרים","מקנא.ת או ממעיטה בערך אחרים","נוקשה בדעתו.ה","מתנהל.ת בגישה אישית בלבד","חסר.ת סבלנות","חסר.ת מקצועיות","אטום.ה רגשית","אדיש.ה או מנותק.ת","קר.ה או מנותק.ת","חסר.ת אחריות","מתעלם.ת מהצרכים","מגיב.ה באיחור או פסיבי.ת","גס.ה או לא מנומס.ת","חסר.ת מנהיגות","פסיבי.ת","מתקשה בריכוז משימות","יוצר.ת קונפליקטים בצוות","מהסס.ת","פזיז.ה או נגרר.ת", "מתחמק.ת מאחריות","מפספס.ת דד-ליינים","מתפזר.ת במשימות","מתקשה תחת לחץ","מגיב.ה בלחץ או בחוסר סבלנות","חוסר מקצועיות בניהול","מדבר.ת בצורה חדה או פוגענית","מקשיב.ה חלקית או מתעלמ.ת","נוקט.ת בטון מזלזל או תוקפני","סגור.ה או מתרחק.ת מאינטראקציה","אדיש.ה לרגשות הזולת","יוצר.ת תחושת ניכור","מחריף.ה קונפילקטים","יוצר.ת תחושת ניכור","יוצר.ת בלבול או אי בהירות","מטיל.ה אחריות על אחרים","נוטש.ת משימות באמצע","מגיב.ה בהתגוננות או דחייה","מפר.ת נהלים","מקובע.ת בדעות","מרושל.ת או מאחר.ת","תלוי.ה בהכוונה מתמדת","נשאר.ת מאחור בהתפתחות מקצועית","מבקר.ת את הארגון בפומבי","מזניח.ה את סביבת העבודה","נתקע.ת מול בעיות פשוטות"];

window.addEventListener("load", () => {
  start();
    //   forthPage();
})

const start = () => {
    //  tenthPage();
    // forthPage();
    document.getElementById("start-button").addEventListener("click", () => {
        document.getElementById("first-page").style.display = "none";
        secondPage();
    

      
       
    })
}

const secondPage = (event) => {
    document.getElementById("first-page").style.display = "none";
    document.getElementById("second-page").style.display = "block";
    document.getElementById("next-button-second").addEventListener("click", () => {
        forthPage();
    })
}

const thirdPage = (event) => {
    document.getElementById("second-page").style.display = "none";
    document.getElementById("third-page").style.display = "block";
    document.getElementById("may").addEventListener("click", showBox);
    document.getElementById("june").addEventListener("click", showBox);
    document.getElementById("september").addEventListener("click", showBox);
    document.getElementById("october").addEventListener("click", showBox);
    document.getElementById("november").addEventListener("click", showBox);
}

const showBox = (event) => {
    let month = event.target.id;
    document.getElementById(`${month}Box`).style.display = "block";
    clickCounter++;
    document.getElementById("manager-file-may").addEventListener("click", () => {
        document.getElementById("manager-file-image").style.display = "block";
        document.getElementById("cover-page").style.display = "block";
        document.getElementById("back-button").addEventListener("click", () => {
            document.getElementById("manager-file-image").style.display = "none";
            document.getElementById("cover-page").style.display = "none";
        })
    })

       document.getElementById("worker-file-may").addEventListener("click", () => {
        document.getElementById("worker-file-image").style.display = "block";
        document.getElementById("cover-page").style.display = "block";
        document.getElementById("back-button2").addEventListener("click", () => {
            document.getElementById("worker-file-image").style.display = "none";
            document.getElementById("cover-page").style.display = "none";
        })
    })

    document.getElementById("assessment-file-june").addEventListener("click", () => {
        document.getElementById("assessment-file-image").style.display = "block";
        document.getElementById("cover-page").style.display = "block";
        document.getElementById("back-button3").addEventListener("click", () => {
            document.getElementById("assessment-file-image").style.display = "none";
            document.getElementById("cover-page").style.display = "none";
        })
    })

     document.getElementById("feedback-file-sep").addEventListener("click", () => {
        document.getElementById("feedback-file-image").style.display = "block";
        document.getElementById("cover-page").style.display = "block";
        document.getElementById("back-button4").addEventListener("click", () => {
            document.getElementById("feedback-file-image").style.display = "none";
            document.getElementById("cover-page").style.display = "none";
        })
    })

    
    if(clickCounter === 1 ) {
        document.getElementById("instraction").style.display = "none";
    } else if(clickCounter === 5) {
        document.getElementById("instraction").style.display = "block";
        document.getElementById("instraction").innerText = "המשך>>";
        document.getElementById("instraction").style.cursor = "pointer";
        document.getElementById("instraction").addEventListener("click", eleventhPage);
    }
}

const forthPage = () => {
    let nextKlick = 0;
    let proAndConCount = 0;
    document.getElementById("second-page").style.display = "none";
    document.getElementById("forth-page").style.display = "block";
    // document.getElementById("next-button-forth").style.display = "none";
  
        document.getElementById("next-button-forth").addEventListener("click", () => {
            if (nextKlick === 0) {
                document.getElementById("forth-page-text").style.display = "none";
                document.getElementById("goals").style.display = "block";
                nextKlick++;
                console.log(nextKlick); 
            } else if(nextKlick === 1) {        
                document.getElementById("second-part").style.display = "block";
                document.getElementById("textBackground").style.display = "none";
                document.getElementById("next-page-forth").style.display = "none";
                document.getElementById("scales").addEventListener("click", () => {
                    proAndConCount++;
                    document.getElementById(`pro${proAndConCount}`).style.display = "inline-block";
                    if (proAndConCount === 14) {
                        document.getElementById("next-page-forth").style.display = "block";
                         document.getElementById("secondtitle-fifth-page").innerHTML = "עברו עם העכבר על היתרונות והחסרונות";
                        //  document.getElementById("scales").removeEventListener("click", "");
                       
                        document.getElementById("next-button-forth").style.display = "block";
                        document.getElementById("scales").style.cursor = "auto";
                    }
                }) 

            } 
        })
        document.getElementById("next-page-forth").addEventListener("click", tenthPage);

}

const sixthPage = () => {
    document.getElementById("tenth-page").style.display = "none";
    document.getElementById("third-part-tenth").style.display = "none";
    document.getElementById("next-button-tenth2").style.display = "none";
    document.getElementById("sixth-page").style.display = "block";
    let cardCount = 0;
    document.getElementById("next-button-sixth").addEventListener("click", () => {
        document.getElementById("first-part-sixth").style.display = "none";
        document.getElementById("second-part-sixth").style.display = "block";
    })
    let next = 0;
    for (let i = 1; i < 5; i++) {
        document.getElementById(`card${i}`).addEventListener("click", () => {
            cardCount++;
            if (cardCount === 1) {
                document.getElementById("circle-button").innerText = "משוב חיובי";
            }
            if (i === 4) {
                document.getElementById("card4").style.display = "block";
                document.getElementById("text-card4-1").style.display = "block";
                document.getElementById("text-card4-2").style.display = "block";
                
                document.getElementById("next-text-button").style.display = "block";
                document.getElementById("next-text-button").addEventListener("click", () => { 
                    next++;
                    if(next === 1){
                    document.getElementById("text-card4-1").innerText = "• עקרון ההתאמה- חיזוק. התעמקות והכוונה למשימות בהן העובד טוב יותר.";
                    document.getElementById("text-card4-2").innerText = "• עקרון השכפול- אם העובד עושה משהו טוב במחלקה אפשר לשכפל את העוצמה שלו לתחום אחר.";
                    } else if (next === 2){
                        document.getElementById("text-card4-1").innerText = "• עקרון החניכה וההדרכה- נותנים לעובד לחנוך עובדים חדשים, או אפילו להעביר הדרכה בישיבת צוות, כך שיוכל להעביר את המומחיות שלו הלאה.";
                       document.getElementById("text-card4-2").innerText = "• עקרון שימור הידע- מבקשים מהעובד להעלות על כתב כיצד הוא משיג את התוצאות שהוא משיג. מפיצים מסמך זה בארגון."
                        document.getElementById("next-text-button").style.display = "none";
                    }
                })
            }
            document.getElementById(`text-card${i}`).style.display = "block";
            document.getElementById(`card${i}`).style.display = "block";
             if (cardCount === 3) {
                document.getElementById("circle-button").innerText = "המשך>>";
                document.getElementById("circle-button").style.cursor = "pointer";
                document.getElementById("circle-button").addEventListener("click", () => {
                    seventhPage();
                })
            }
        })
    }
   
}

const seventhPage = () => {
    document.getElementById("sixth-page").style.display = "none";
    document.getElementById("seventh-page").style.display = "block";
    document.getElementById("next-button-seventh").addEventListener("click", () => {
        ninthPage();
    })
}

const tenthPage = () => {
    let clickCounter = 0;
    document.getElementById("forth-page").style.display = "none";
    document.getElementById("tenth-page").style.display = "block";
    document.getElementById("next-button-tenth").addEventListener("click", () => {
        clickCounter++;
        console.log(clickCounter);
        if (clickCounter === 1) {
            document.getElementById("first-part-tenth").style.display = "none";
            document.getElementById("third-part-tenth").style.display = "block";
    }
            // document.getElementById("next-page-tenth").style.display = "none";
            // document.getElementById("scales2").style.display = "block";
            // let proAndConCount = 0;
            // document.getElementById("scales2").addEventListener("click", () => {
            //     proAndConCount++;
            //     document.getElementById(`e${proAndConCount}`).style.backgroundColor = "rgb(250, 208, 196)";
            //     document.getElementById(`e${proAndConCount}`).style.display = "inline-block";
            //     if (proAndConCount === 8) {
            //         document.getElementById("next-page-tenth").style.display = "block";
            //          document.getElementById("tenth-page-secondtitle2").innerHTML = "עברו עם העכבר על היתרונות והחסרונות";
            //         document.getElementById("next-button-tenth").style.display = "block";
            //         document.getElementById("scales").style.cursor = "auto";
            //     }
            })
            // document.getElementById("next-page-tenth").addEventListener("click", () => {
            // document.getElementById("second-part-tenth").style.display = "none";
            // document.getElementById("third-part-tenth").style.display = "block";
            // document.getElementById("next-button-tenth2").style.display = "block";
            let countCards = 1;
            for (let i = 1; i < 6; i++) {
                document.getElementById(`c${i}`).addEventListener("click", () => {
                countCards++;
                if (countCards === 6) {
                    document.getElementById("next-button-tenth2").style.display = "block";
                }
                }
                )}
            
        
        
    
    document.getElementById("next-button-tenth2").addEventListener("click", () => {

        sixthPage();
    })

}


const ninthPage = () => {
    document.getElementById("seventh-page").style.display = "none";
    document.getElementById("ninth-page").style.display = "block";
    for (let i = 1; i <= 10; i++) { 
        // Fix the loop condition
        // const feedback = POSITIVE_FEEDBACK[i - 1]; // Adjust index to match array (0-based)
        const element = document.getElementById(`p${i}`);
        if (element) { // Ensure the element exists
            element.innerText = POSITIVE_FEEDBACK[i];
        }
        const element2 = document.getElementById(`n${i}`);
        if (element2) { // Ensure the element exists
            element2.innerText = NEGATIVE_FEEDBACK[i];
        }
    }
    document.getElementById("next").addEventListener("click", () => {
                feedbackCounter++;
                   
        
                chancheText(feedbackCounter);
                console.log(feedbackCounter);
                // if (feedbackCounter === 0) {
                //     document.getElementById("last").style.display = "none"; // Hide the button if counter is 0
                // } else {
                //     document.getElementById("last").style.display = "inline-block"; // Ensure it's visible otherwise
                // }
    });
    if (feedbackCounter === 0) {
        document.getElementById("last").style.display = "none"; // Hide the button if counter is 0
    } 
    document.getElementById("last").addEventListener("click", () => {
        if (feedbackCounter > 0) { // Only decrement if feedbackCounter is greater than 0
            feedbackCounter--; // Decrement feedbackCounter
            chancheText(feedbackCounter); // Update the text
            console.log(feedbackCounter);
        }
    
        // Update the visibility of the "last" button
        // if (feedbackCounter === 0) {
        //     document.getElementById("last").style.display = "none"; // Hide the button if counter is 0
        // } else {
        //     document.getElementById("last").style.display = "inline-block"; // Ensure it's visible otherwise
        // }
    });
    
}
const chancheText = (num) => {
    if (feedbackCounter === 4) {
        document.getElementById("next-button-ninth").style.display = "inline-block";
        document.getElementById("next-button-ninth").addEventListener("click", () => {
        document.getElementById("ninth-page").style.display = "none";
        document.getElementById("third-page").style.display = "block";
        thirdPage();
    })
    }
    
    if (feedbackCounter === 0) {
        document.getElementById("last").style.display = "none"; // Hide the button if counter is 0
    } else {
        document.getElementById("last").style.display = "inline-block"; // Ensure it's visible otherwise
    }

    if (feedbackCounter === 4) {
        document.getElementById("next").style.display = "none";
    } else {
        document.getElementById("next").style.display = "block";
    }
    let pNum = 0;
    for (let i = (num*10)+1; i <= (num+1)*10; i++) { 
        pNum++;
        
        // Fix the loop condition
        // const feedback = POSITIVE_FEEDBACK[i - 1]; // Adjust index to match array (0-based)
        const element = document.getElementById(`p${pNum}`);
        if (element) { // Ensure the element exists
            element.innerText = POSITIVE_FEEDBACK[i];
        }
        const element2 = document.getElementById(`n${pNum}`);
        if (element2) { // Ensure the element exists
            element2.innerText = NEGATIVE_FEEDBACK[i];
        }
    }
}

const eleventhPage = () => {
    document.getElementById("third-page").style.display = "none";
    document.getElementById("eleventh-page").style.display = "block";
    document.getElementById("next-button-eleventh").addEventListener("click", () => {
        document.getElementById("eleventh-page").style.display = "none";
        document.getElementById("twelfth-page").style.display = "block";
        twelfthPage();
    })
}

const twelfthPage = () => {
    let audioSound = document.getElementById("audio");
        audioSound.pause();
    document.getElementById("next-button-twelfth").addEventListener("click", () => {

        
        document.getElementById("twelfth-page-text").style.fontSize= "4vw";
        document.getElementById("twelfth-page-title").style.display = "none";
        document.getElementById("twelfth-page-text").innerText="כל הכבוד! סיימת את הלומדה!";
        document.getElementById("credit").style.display = "block";
    })
}