//Possible captions!
const app = {}

app.captions = {
    sadBoi: ["I'm just saying you could do better.", "My heart is way too frozen to get broken.", "Passionate from miles away, passive with the things you say.", "Something ain’t right when we talking, look like you hiding your problems.", "I got fake people showing fake love to me, straight up to my face.", "I wanna move to Dubai, so I don’t never have to kick it with none of you guys.", "Don’t pull up at 6 AM to cuddle with me.", "Love is just not in my plans. Not even takin' a chance.", "When a good thing goes bad it’s not the end of the world, it’s just the end of a world that you had with one girl.", "Why you gotta fight with me at Cheesecake?", "I learned working with the negatives could make for better pictures.", "They scream out my failures and whisper my accomplishments", "I know you still think about the times we had."],
    toughGuy: ["Worrying about your followers, you need to get your dollars up.", "I'm up right now and you suck right now.", "Pray the real live forever man, pray the fakes get exposed.", "Know yourself, know your worth.", "I don’t take naps. Me and the money are way too attached to go and do that.", "I’m in it for the glory, not the honour mention.", "Hermès link, ice-blue mink.", "She say, Do you love me?, I tell her only partly, I only love my bed and my mama, I'm sorry!", "I wear every single chain, even when I’m in the house", "Overdosed on confidence.", "Last name ever. First name greatest.", "Trigger fingers turn to twitter fingers.", "What a time to be alive.", "Pray the real live forever, man. Pray the fakes get exposed.", "I order that Alfredo pasta, Then eat in the kitchen like I’m in the mafia" ],
    ladiesMan: ["You the best I ever had", "Sweatpants, hair tied, chillin' with no makeup on.", "I’m blem for real, I might just say how I feel.", "We need to forward to the islands and get you gold, no spray tans.", "Out of body. That’s just how I feel when I’m around you, shawty.", "I know shorty and she doesn't want no slow song.", "You ain't stressin' off no lover in the past tense, You already had them.", "'Cause you're a good girl and you know it.", "Accept yourself, you don't have to prove s*** to no one except yourself.", "I want your hot love and emotion endlessly."],
    broskis: ["I can't really see another squad tryna cross us.", "Nobody really likes us except for us.", "My team good, we don't really need a mascot.", "Started from the bottom now the whole team here.", "I'm with my whole set, tennis matches at the crib, I swear I could beat Serena when she playing with her left.", "No new friends, we don't feel that.", "The haters just bringing me and my people closer.", "Imagine if I never met the broskis.", "Used to work the fries, now we supersize.", "My whole team winning, we don't play your game."],
    goodTimes: ["I live for the nights that I can't remember with the people that I won't forget.", "World Series attitude, champagne bottle life.", "Somewhere between I'm sober and I'm lifted.", "Drinking every night because we drink to my accomplishments.", "Twenty-four-hour champagne diet.", "Ask you to please excuse my table manners, I was making room for the table dancers.", "Your boy all glowed up. Every time we touch down bet it go up.", "Taking shots, feeling bulletproof.", "Turn my birthday into a lifestyle.", "You only live once, that's the motto.", "YOLO", "Young, but I'm makin millions to work the night shift.", "I like it when money makes a difference but don't make you different.", "I just think its funny how it goes, Now I’m on the road, half a million for a show", "I want this forever / I swear I could spend whatever on it."],
    sixGod: ["Runnin' through the 6 with my woes.", "How did I finesse all of this from Jane and Weston?", "I got real ones livin’ past Kennedy Road, I got real ones with me everywhere that I go", "Been flowin’ stupid since Vince Carter was on some through the legs, arm in the hoop s***.", "This ain't the son you raised who used to take the Acura, 5 AM going shoot Degrassi up on Morningside", "I take Eglinton to 401 East and exit at Markham Road in the east end, Where all the pretty girls are sleeping.", "Queen Street visions that nobody believed in.", "We evolved, used to think vacation meant Niagara Falls.", "Yeah, used to be at SilverCity, Indigo, Used to be in lunchroom, playin’ dominoes.", "I'm buildin' up a house where they raised me", "The 6 ain't friendly but it's where I lay up"]
};

//Possible images

app.images = {
    sadBoi: ["images/sadBoi1.jpg", "images/sadBoi2.jpg", "images/sadBoi3.jpg", "images/sadBoi4.jpg", "images/sadBoi5.jpg" ],
    toughGuy: ["images/toughGuy1.jpg", "images/toughGuy2.jpg", "images/toughGuy3.jpg", "images/toughGuy4.jpg", "images/toughGuy5.jpg"],
    broskis: ["images/broskis1.jpg", "images/broskis2.jpg", "images/broskis3.jpg", "images/broskis4.jpg", "images/broskis5.jpg" ],
    goodTimes: ["images/goodTimes1.jpg", "images/goodTimes2.jpg", "images/goodTimes3.jpg", "images/goodTimes4.jpg", "images/goodTimes5.jpg"],
    sixGod: ["images/sixGod1.jpg", "images/sixGod2.jpg", "images/sixGod3.jpg", "images/sixGod4.jpg", "images/sixGod5.jpg"]
}

//Random function

app.getRandom = (array) => {
    return array[Math.floor(Math.random() * array.length)]
}

//Main function

app.event = () => {

    //remove existing answer, if it's already on the DOM

    $('.answer').remove()
    $('.image').remove()

    //The quiz will compile scores, the caption will come from the winning value.

    const scores = {
        sadBoi: 0,
        toughGuy: 0,
        ladiesMan: 0,
        broskis: 0,
        goodTimes: 0,
        sixGod: 0
    };

    //Will collect selected values into this array

    const values = [];

    //Will Push collected scores into this array

    const scoresArray = [];

    //Will push caption subjects with highest scores into this array

    const subjectFinalists = [];

    //Collect values from answers    

    let typeVal = $('input[name=type]:checked').val();
    let actionVal = $('input[name=action]:checked').val();
    let clothingVal = $('input[name=clothing]:checked').val();
    let placeVal = $('input[name=place]:checked').val();
    let moodVal = $('input[name=mood]:checked').val();

    //will push "winning" values into values array when form is submitted.

    values.push(typeVal, actionVal, clothingVal, placeVal, moodVal);

    //If any boxes are unchecked, warn user.
    
    for (let i = 0; i < values.length; i++) {
        if (values[i] === undefined) {
            alert("Please select an answer for each question");
            break;
        }
    }

    //convert array appearances into scores object

    for (let i = 0; i < values.length; i++) {
        scores[values[i]]++;
    };

    //push numerical values of scores into an array to determine max

    for (score in scores) {
        scoresArray.push(scores[score]);
    };

    let maxScore = Math.max(...scoresArray);

    //Push subjects with the highest scores into "finalist" array

    for (score in scores) {
        if (scores[score] === maxScore) {
            subjectFinalists.push(score);
        };
    };

    //use getRandom() to determine which caption grouping you'll be drawing from.

    const subject = app.getRandom(subjectFinalists);

    //Once you have the grouping, select a random caption from the captions object

    const finalCaption = app.getRandom(app.captions[subject]);

    const finalImage = app.getRandom(app.images[subject])    
    
    $('input:checked').removeAttr('checked');

    $('.questions').after(`<img class="image" src="${finalImage}"><div class="answer"><h2>${finalCaption}</h2><div>`)

}

//Document ready

app.init = () => {
    $('form').on('submit', function (e) {
        e.preventDefault();
        //Call app

        app.event();
    });

    $('.btn').smoothScroll()
}

$(app.init);