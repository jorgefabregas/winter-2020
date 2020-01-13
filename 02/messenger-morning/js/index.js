/*
SLACK CLONE

Message:
  Properties (information stored)
  - id (unique id)
  - time written
  - user (sender)
  - user (receiver)
  - text
  - attachments (images, links, code, etc...)

  Methods (things it needs to do)
  - getFormattedDate
  - edit
  - delete
  - clear
*/

class Message {
  constructor(fromUser, toUser, theMsg) {
    this.time = new Date()
    this.from = fromUser
    this.to = toUser
    this.text = theMsg
  }
  getFormattedDate() {
    // return `${this.time.toLocaleTimeString('en-US')}`;
    return `${this.time.getFullYear()}-${this.time.getMonth()+1}-${this.time.getDate()}`
  }
  getFormattedText() {
    return `${this.from}: ${this.text}`
  }
  getMsgAsHtml() {
    return `<li>${this.getFormattedText()} (${this.getFormattedDate()})</li>`
  }
}



/* 
Using the code above...
1. Collect all of the existing messages (references) in an Array called "messages"
2. Test this by pushing a new messages to the Array after it has been constructed
3. Print all messages to the console using the getFormattedText
4. Push a new message to the Array and re-update the console
*/

const container = document.getElementById('messages')
const messages = []

const msg1 = new Message(`Susan`, `Chau`, `Hi, did you get my email?`);
const msg2 = new Message(`Chau`, `Susan`, `No. Didn't check my emails yet. brb`);

messages.push(msg1)
messages.push(msg2)

function renderMessages() {
  messages.forEach(msg => {
    // Put the "Message" instance into the document
    container.innerHTML += msg.getMsgAsHtml();
  })
}

renderMessages();



// NEXT...
// 1. Write a function to add a new Message to the "messages" Array
// 2. Encapsulate the messenger functionality written above into a new class called Messenger
// 3. Create a class called User to store all information relevant to a user
// 4. Combine all these steps as best you can
//
// Next "MessageForm" class
