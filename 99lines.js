document.addEventListener('DomContentLoaded', function(){
    let btnText = document.createTextNode('Sing!')
    button.appendChild(btnText);
    button.className = ('btn btn-outline-success')

//friends array
function song (){
    let friends = ["chevy", "angelica", "ethan", "jose", "prim"];
    console.log(friends);
    for(let i = 0; i < friends.length; i++) {
        console.log(friends[i] + ":");
    let friend = friends[i];
    console.log(friend);
    let friendsDiv = document.createElement('div');
    friendsDiv.className = ('friends');
    let friendHeader = document.createElement('h3');
    friendHeader.innterText = friends[i] + (' ');
    document.body.appendChild(friendsDiv);
    let paragraph = document.getElementsByClassName('friends')
    paragraph[i].appendChild(friendHeader)
    let song = document.createElement('p')
    song.className = ('justify-content-md-center')
    friends
    for(let j = 99; j > 0; j--)
    if(j > 2) {
        song.innerText = (j + " lines of code in the file, " + j + " lines of code; " + friend + " strikes one out, clears it all out, " + (j - 1) + " lines of code in the file");
     } else if(j == 2) {
        song.innerText = (j + " lines of code in the file " + j + " lines of code; " + friend + " strikes one out, clears it all out, " + (j - 1) + " line of code in the file");
    } else if(j == 1) {
        song.innerText = (j + " line of code in the file " + j + " line of code " + friend + " strikes one out, clears it all out, no more lines of code in the file (operation complete)");
    }
    paragraph[i].appendChild(song)
}

}
button.addEventListener('click', function() {
    song();})
})
