
const form = document.getElementById("commandForm");
const commandInput = document.getElementById("command");
const output = document.getElementById("output");
const clearBtn = document.getElementById("clearBtn");

const ghostReplies = [
  "I heard your footsteps before you entered...",
  "The shadows know your name. Do you know theirs?",
  "Do not look behind you. Some things prefer to stay unseen.",
  "I have lived inside this machine longer than you can imagine.",
  "The screen is not the only thing watching you.",
  "Every abandoned program leaves a little ghost behind."
];

const stories = [
  "At midnight, a student received a message from an account that had been deleted ten years ago. It said: 'I am still waiting in classroom 13.' The next morning, classroom 13 appeared on no map.",
  "An old computer switched on by itself every night at 3:00 AM. One night, its screen displayed a photograph of the room. In the photograph, someone was standing behind the owner.",
  "The abandoned college library had one rule: never open the last book on the shelf. One rainy night, a curious student opened it. Every page contained the same sentence: 'You should not have come back.'",
  "A developer found a strange function in an old program. It had no author and no documentation. When executed, it printed: 'Thank you for waking me.' Then every computer in the lab turned on."
];

const jokes = [
  "Why did the ghost become a programmer? Because it loved debugging boo-gs!",
  "My computer has a ghost. It keeps deleting my cookies. Even the digital ones!",
  "A ghost applied for an IT job. Its best skill? Invisible networking.",
  "Why was the haunted computer slow? Too many spirits running in the background."
];

function addMessage(text, className) {
  const paragraph = document.createElement("p");
  paragraph.className = className;
  paragraph.textContent = text;
  output.appendChild(paragraph);
  output.scrollTop = output.scrollHeight;
}

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function respond(command) {
  const text = command.toLowerCase().trim();

  if (text === "help") {
    addMessage(
      "AVAILABLE COMMANDS:\n" +
      "help  - Show commands\n" +
      "story - Generate a horror story\n" +
      "haunt - Summon a ghost\n" +
      "joke  - Hear a spooky joke\n" +
      "clear - Clear the terminal\n" +
      "hello - Greet the ghost",
      "system"
    );
  } else if (text === "story") {
    addMessage("Opening the forbidden storybook...", "system");
    addMessage("GHOST STORY: " + randomItem(stories), "ghost-message");
  } else if (text === "haunt") {
    addMessage("Summoning a spirit from the machine...", "system");
    addMessage("👻 " + randomItem(ghostReplies), "ghost-message");
  } else if (text === "joke") {
    addMessage("The ghost is trying to be funny...", "system");
    addMessage("💀 " + randomItem(jokes), "ghost-message");
  } else if (text === "hello" || text === "hi") {
    addMessage("Hello, human. You should not have awakened me.", "ghost-message");
  } else if (text === "clear") {
    output.replaceChildren();
    addMessage("Terminal cleared. The ghost is still here.", "system");
  } else {
    addMessage(
      "You asked: " + command + "\n" +
      "GHOST: " + randomItem(ghostReplies),
      "ghost-message"
    );
  }
}

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const command = commandInput.value.trim();

  if (!command) return;

  addMessage("visitor@ghost:~$ " + command, "user-message");
  commandInput.value = "";
  respond(command);
  commandInput.focus();
});

document.querySelectorAll(".action-btn").forEach(function(button) {
  button.addEventListener("click", function() {
    const command = button.dataset.command;
    addMessage("visitor@ghost:~$ " + command, "user-message");
    respond(command);
  });
});

clearBtn.addEventListener("click", function() {
  output.replaceChildren();
  addMessage("Terminal cleared. The ghost is still here.", "system");
});

commandInput.focus();
