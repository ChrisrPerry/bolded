console.log("hi there!")
function boldText() {
    var input = document.getElementById("input").value;
    var words = input.split(" ");
    var output = "";

    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        if (word.length < 3) {
            output += "<b>" + word.charAt(0) + "</b>" + word.slice(1) + " ";
        } else {
            var n = Math.ceil(word.length/2);
            output += "<b>" + word.slice(0, n) + "</b>" + word.slice(n) + " ";
        }
    }

    document.getElementById("output").innerHTML = output;
}
function checkInput() {
var input = document.getElementById("input").value;
input = input.replace(/(<([^>]+)>)/gi, "");
document.getElementById("input").value = input;
}
function processFile() {
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];
    const reader = new FileReader();
  
    reader.onload = function(event) {
      const content = event.target.result;
      const processedContent = boldFirstTwoLetters(content);
      const fileContentDiv = document.getElementById('file-content');
      fileContentDiv.innerHTML = processedContent;
    };
  
    reader.readAsText(file);
  }
  
  function boldFirstTwoLetters(content) {
    // Remove RTF formatting
    const plainTextContent = content.replace(/\\[a-z]+\d*[-]?[\s]?[0-9]*[\s]?[a-z]*[\s]*[{]?[;}]?/gi, '');  
    const words = plainTextContent.split(' ');
    let boldedContent = '';
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      const firstTwoLetters = word.substring(0, 2);
      const restOfWord = word.substring(2);
      boldedContent += '<b>' + firstTwoLetters + '</b>' + restOfWord + ' ';
    }
  
    // Create a downloadable file
    const blob = new Blob([boldedContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
  
    // Create a link to the downloadable file and trigger a click event to download it
    const link = document.createElement('a');
    link.download = 'bolded_text.html';
    link.href = url;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  
  
