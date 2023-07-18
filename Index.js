var qute=[
    {
        quote:"To live is the rarest thing in the world. Most people exist, that is all.",
        author: "― Oscar Wilde"
    },
    {
        quote:"Be yourself; everyone else is already taken.",
        author:" - Oscar Wilde"
    },
    {
        quote:" I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best",
        author:"- Marilyn Monroe"
        
    },
    {
        quote:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author:"- Albert Einstein"
    },
    {
        quote:"So many books, so little time.",
        author:"- Frank Zappa"
    },
    {
        quote:"A room without books is like a body without a soul.",
        author:"- Marcus Tullius Cicero"
    },
    {
        quote:"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        author:"- Bernard M. Baruch"
    },
    {
        quote:"You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        author:"- Dr. Seuss"
    },
    {
        quote:"You only live once, but if you do it right, once is enough.",
        author:"- Mae West"
    },
    {
        quote:"If you tell the truth, you don't have to remember anything.",
        author:"- Mark Twain"
    }
]

var h;
function showquote() {
    var m= Math.floor((Math.random()*qute.length))
    var q=JSON.parse(localStorage.getItem('cartona'))
    document.getElementById('demo').innerHTML=qute[m].quote
    document.getElementById('demoo').innerHTML=qute[m].author;
    while(m===q){
        var m= Math.floor((Math.random()*qute.length))
        document.getElementById('demo').innerHTML=qute[m].quote
        document.getElementById('demoo').innerHTML=qute[m].author;
    }
     h =localStorage.setItem('cartona',m)
    
   
    
}

