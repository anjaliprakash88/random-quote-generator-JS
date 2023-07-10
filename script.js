function generat()
{
    var quotes = {
        "― Jules Renard": '"The truly free man is the one who can turn down an invitation to dinner without giving an excuse."',
        "― C.S. Lewis":'“I was not born to be free---I was born to adore and obey.”',
        "― John Galsworthy": '“Life calls the tune, we dance.”',
        "― Lauren DeStefano": '“But there’s no such thing as free. There are only different and more horrible ways to be enslaved.”',
        "― Nenia Campbell": '“You want to be free. You also want to be mine. You cannot be both.”'


    }
    var authors = Object.keys(quotes);
    var author = authors[Math.floor(Math.random()*authors.length)]
    var quote = quotes[author];
    document.getElementById("quote").innerHTML=quote
    document.getElementById("author").innerHTML=author

}