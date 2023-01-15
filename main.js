function copyToClipboard(elementID) {
    var temp = document.createElement('input');
    document.body.appendChild(temp);
    var sgElement = document.getElementById(elementID);
    console.log(sgElement);
    temp.value = sgElement.outerHTML;
    temp.select();
    var str = sgElement.outerHTML;

    function listener(e) {
          e.clipboardData.setData("text/html", str);
          e.clipboardData.setData("text/plain", str);
          e.preventDefault();
    }
    document.addEventListener("copy", listener);
    document.execCommand("copy");
    document.removeEventListener("copy", listener);

    temp.remove();
    document.getElementById('success').style.display = "block";
  }
