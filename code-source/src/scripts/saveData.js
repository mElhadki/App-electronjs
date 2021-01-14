var remote = window.require("electron").remote;
const fs = window.require("fs");
const path = window.require("path");

var buttonAppel = document.getElementById("callit");
var phoneNumber = document.getElementById("numbers");
var dirCall = path.join(__dirname, "./data/historique.txt");
var dirContact = path.join(__dirname, "./data/contact.txt");
var btnHistory = document.getElementById('clock');
var btnAddContact = document.getElementById('addContact');
var nameContact = document.getElementById('contactName');

buttonAppel.addEventListener("click", () => {

    var data = phoneNumber.textContent;
    
    var date = new Date();
    var time = date.getFullYear() +"-" +(date.getMonth() + 1) +"-" +date.getDate() + " " +date.getHours() +":" +date.getMinutes() +":" +date.getSeconds();
    fs.appendFileSync(dirCall,  "\n"+data+ " " + time, "UTF-8", {flags: "a+"});
    
});

btnAddContact.addEventListener("click", () => {
    var numberContact = phoneNumber.textContent;
    var nameContactValue = nameContact.value;
     fs.appendFileSync(dirContact,  "\n"+nameContactValue+ " " + numberContact, "UTF-8", {flags: "a+"}); 
     location.reload();

});


window.addEventListener('load', () => {
    fs.readFileSync(dirCall, "utf8").split(/\n/).forEach(function (data) {
        
        var dataArray = new Array();
        data = data.split(" ");
        for (var i = 0; i < data.length; i++) {
            dataArray.push(data[i]);
            if (i != data.length - 1) {
              dataArray.push(" ");
            }
        }     
        var bigDiv = document.getElementById('historyCall');
        var div = document.createElement('div');
        div.className = 'tabContent';
        var ul = document.createElement('ul');
        var li = document.createElement('li');
        var spanImage = document.createElement('span');
        spanImage.className = 'contactIcon';
        var i = document.createElement('i');
        i.className = 'fa fa-phone phoneIcone';
        spanImage.appendChild(i);
        var spanPhone = document.createElement('span');
        spanPhone.className = "contactDetails";
        spanPhone.innerHTML = dataArray[0];
        var spanDate = document.createElement('span');
        spanDate.className = 'otherDetails phoneNo';
        spanDate.innerHTML = dataArray [1] + " " + dataArray[2];
        li.appendChild(spanImage);
        li.appendChild(spanPhone);
        li.appendChild(spanDate);
        ul.appendChild(li);
        div.appendChild(ul);
        bigDiv.appendChild(div)
});

fs.readFileSync(dirContact, "utf8").split(/\n/).forEach(function (data) {
        
    var dataArray = new Array();
    data = data.split(" ");
    for (var i = 0; i < data.length; i++) {
        dataArray.push(data[i]);
        if (i != data.length - 1) {
          dataArray.push(" ");
        }
    }     
    var bigDiv = document.getElementById('peoplesId');
    var div = document.createElement('div');
    div.className = 'tabContent';
    var ul = document.createElement('ul');
    var li = document.createElement('li');
    var spanImage = document.createElement('span');
    spanImage.className = 'contactIcon';
    var i = document.createElement('i');
    i.className = 'icon peoples phoneIcone';
    spanImage.appendChild(i);
    var spanName = document.createElement('span');
    spanName.className = "contactDetails";
    spanName.innerHTML = dataArray[0];
    var spanNumber = document.createElement('span');
    spanNumber.className = 'otherDetails contactDetails';
    spanNumber.innerHTML = dataArray [2];

    var spanCall = document.createElement('div');
    spanCall.className = "spanCall";
   
    var iCall = document.createElement('i');
    iCall.className = "fa fa-phone icallPhone";
    iCall.onclick = function(){

        var data = dataArray [0];
    
        var date = new Date();
        var time = date.getFullYear() +"-" +(date.getMonth() + 1) +"-" +date.getDate() + " " +date.getHours() +":" +date.getMinutes() +":" +date.getSeconds();
        fs.appendFileSync(dirCall,  "\n"+data+ " " + time, "UTF-8", {flags: "a+"});

    };
    spanCall.appendChild(iCall);
    li.appendChild(spanImage);
    li.appendChild(spanName);
    li.appendChild(spanNumber);
    li.appendChild(spanCall);
    ul.appendChild(li);
    div.appendChild(ul);
    bigDiv.appendChild(div)
});
document.querySelectorAll('.spanCall').forEach(item => {
    item.addEventListener('click', event => {
        $(".callscreen").addClass("callscreen-transition").css("-webkit-transform", "scale(1.3, 1.3)");
        $(".callscreen").toggle(); /* toggle deprecated */
        $(".callscreen-container").toggle();
        $(".dialer-app-container").toggle(); 
        $(".status-bar, .fa-signal").css("color", "white"); 
        $(".phone-tabs").css("visibility", "hidden"); 
        $(".phone-tab-contents").css("visibility", "hidden");
    })
  })
});


  