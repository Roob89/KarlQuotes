var quoteIndex = null;
var rand = null;
var quote = null;
var quotes = [
    "By 78 you've done everything you're going to do. If you haven't bungee-jumped by the time you're 78 you're not going to do it.",
    "Do you know, if you had five photos of anuses, I could not point mine out.",
    "If I got hungry I'd quite happily eat human. They say it tastes like pork anyway.",
    "I will kick a panda in the bollocks if I have to.",
    "I'm energy efficient because I'm bald. Not wasting hot water washing me hair. No hair dryer.",
    "You shouldn't sit on a leather sofa with a bare arse.",
    "What annoys me is how much land is being taken up by dead people.",
    "I won't be socialising. I don't do that.",
    "You can be into travelling, but the world's only so big, innit? So eventually you're gonna run out of places to visit – whereas biscuits… there's loads of them.",
    "I think people would live a bit longer if they didn't know how old they were. Age puts restrictions on things.",
    "I find that if you just talk, your mouth comes up with stuff.",
    "There is no need for ants to have the ability to fly.",
    "I thought the fart was a human thing. It's something to do with like, arse cheeks, or whatever.",
    "I've always wanted to kick a duck up the ass.",
    "Kids are like farts in that way. They never seem to bother the owner as much as they bother everyone else.",
    "Does the brain control you or are you controlling the brain?",
    "A slug is always on its own. It is a lonely insect.",
    "I'm useless in water. I wake up at night drowning in my own saliva."
];
var quoteContainer = document.getElementsByClassName('the-quote')[0];

function generateQuote(){
    
    // Generate random number
    function generateRandom(){
        rand = Math.floor(Math.random() * quotes.length);
    }
    generateRandom();
    
    
    // Check for duplicate
    while( quoteIndex == rand ) {
        generateRandom();
    }
    
    // Adding quote to HTML
    quoteIndex = rand;
    quote = quotes[rand];
    quoteContainer.innerHTML = quote;
    
}

document.addEventListener('DOMContentLoaded', function(){
    
    generateQuote();
    
}, false);