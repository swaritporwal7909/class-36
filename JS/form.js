class Form{
    constructor(){
        


    }
   
    display(){
        
    var title = createElement('h2')
   title.html("CAR RACING GAME")
    title.position(130,0)
 
    var input = createInput("NAME")
    input.position(130,160)

    var button = createButton("Play")
    button.position(250,200)
    button.mousePressed(function(){
    input.hide()
    button.hide()

    playerCount=playerCount+1

    var name = input.value()
    var greetings=createElement('h2')
    player.update(name)
    player.updateCount(playerCount)
    greetings.html("Hello"+ name)
    greetings.position(130,160)
})

    }
}