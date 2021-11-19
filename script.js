
const lyricsDisplay = document.querySelector('.lyrics-display');
const lyricsButton = document.querySelector('button')

const generateRandomNumber = (num) => {
    return Math.floor(Math.random() * num)
}

const lyricalContent = {
    nasirJones: ['So many years of depression make me vision\/The better living, type of place to raise kids in\/Open they eyes to the lies, history\'s told foul\/But I\'m as wise as the old owl, plus the Gold Child\/Seeing things like I was controlling, clique rolling\/Tricking six digits on kicks and still holding. - Nas, If I Ruled The World.', 'No idea\'s original, there\'s nothing new under the sun\/It\'s never what you do, but how it\'s done\/What you base your happiness around? Material, women, and large paper\/That means you inferior, not major. - Nas, No Ideas Original', 'If the truth is told, the youth can grow\/They learn to survive until they gain control\/Nobody says you have to be gangstas, hoes\/Read more, learn more, change the globe\/Ghetto children, do your thing\/Hold your head up, little man, you\'re a king\/Young princess, when you get your wedding ring\/Your man will sing, \"She\'s my Queeeeeen\". - Nas, I Can'],

    seanCarter: ['True this, the streets school us to spend our money foolish\/Bond with jewelers and watch for intruders\/I stepped it up another level, meditated like a Buddhist\/Recruited lieutenants with ludicrous dreams of gettin\' cream\"Let\'s do this,\" it gets tedious. - JAY-Z, Can I Live', 'There was a time America wouldn\'t let us ball\/Those times are now back, just now called Afro-tech\/Generational wealth, that\'s the key\/My parents ain\'t have shit, so that shift started with me\/My mom took her money, she bought me bonds\/That was the sweetest thing of all time. - JAY-Z, Legacy', 'So they made light of, my type of\/Dreams seem dumb, they said wise up\/How many guys-a, you see making it from here\/The world don\'t like us, is that not clear? Alright, but I\'m different, I can\'t base what I\'m gon\' be\/Off of what everybody isn\'t, they don\'t listen\/Just whispering behind my back\/No vision, lack of ambition, so wack! - JAY-Z, So Ambitious'],

    kendrickLamar: ['Can you be immortalized without your life being expired? \/Even though you share the same blood, is it worth the time? \/Like, who got your best interest? \/Like, how much are you dependent? \/How clutch are the people that say they love you? \/And who pretending?\/How tough is your skin when they turn you in?\/Do you show forgiveness?\/What brush do you bend when dusting your shoulders from being offended? - Kendrick Lamar, Mortal Man', 'When it all breaks, you\'ll still say you\'re lovely\/And love them and love when you love her\/You love so much, you love when love hurts\/You love fast cars and dead presidents old\/You love fast women, you love keepin\' control\/Of everything that you love, you love beef\/You love streets, you love running, ducking police\/You love your hood, might even love it to death\/But what love got to do with it when you don\'t love yourself? - Kendrick Lamar, Real', 'Visions of Martin Luther staring at me\/If I see it how he seen it, that would make my parents happy\/Sorry, mama, I can\'t turn the other cheek\/They wanna knock me off the edge like a fuckin\' widow\'s peak, uh\/And she always told me pray for the weak, uh\/Them demons got me, I ain\'t prayed in some weeks, uh\/Dear Lord, come save me, the devil\'s working hard\/He probably\/clockin\' double shifts on all of his jobs. - Kendrick Lamar, Section 80']
}

let dailyLyricalContent = []

const generateLyrics = () => {
    for (let rapper in lyricalContent) {
        console.log(lyricalContent[rapper]);
        let lyricIndex = generateRandomNumber(lyricalContent[rapper].length)
    
        switch (rapper) {
            case 'nasirJones':  
            dailyLyricalContent.push(`"${lyricalContent[rapper][lyricIndex]}"`)  
            break;
                
            case 'seanCarter':
            dailyLyricalContent.push(`"${lyricalContent[rapper][lyricIndex]}"`)  
            break;
    
            case 'kendrickLamar':    
            dailyLyricalContent.push(`"${lyricalContent[rapper][lyricIndex]}"`)  
            break;
    
            default:
            break;
        }
    }
}
  
lyricsButton.addEventListener('click', () => {
    generateLyrics();
    lyricsDisplay.innerHTML = `
    <h1>Today's Conscious Rap Lyrics</h1>
    <p>${dailyLyricalContent.join('\n </br> </br>')}</p>
    `
})