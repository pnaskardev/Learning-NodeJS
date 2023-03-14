function wordBlanks(noun,adjective,verb,adverb)
{
    var result="";
    result+="The "+adjective+" "+noun+" "+verb+" to the store "+adverb;
    return result;
}

console.log
(
    wordBlanks("dog","big","ran","quickly")
)