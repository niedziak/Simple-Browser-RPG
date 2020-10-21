document.body.onload = invChange(0); // filling inventory window when page loads
document.body.onload = invListing(); // filling inventory list when page loads

var plyr_hp = 100; // player's hp
var inv = ["+health","Item 2","Item 3"]; // inventory
var invindx = 0; // inventory index

// change in player's hp
function hpChange(mindmg,maxdmg,bnsdmg) {
    plyr_hp += (Math.floor(Math.random() * (maxdmg - mindmg + 1) + mindmg)) + bnsdmg; // random damage between min and max value + bonus

    // hp bounds
    if (plyr_hp > 100) {
        plyr_hp = 100;
    } else if (plyr_hp < 0) {
        plyr_hp = 0;
    }

    document.getElementById("hpWindow").innerHTML = plyr_hp;
}

// using item
function useItem() {
    switch (inv[invindx]) { //item effect check
        case "+health":
            hpChange(0,0,10);
            break;
        default:
            break;
    }

    inv.splice(invindx,1); //removing item from inventory

    invListing(); // updating items list after remove
}

// cycling items in inventory
function invChange(chng) {
    invindx += chng;

    if (invindx <= -1) {
        invindx = inv.length - 1;
    } else if (invindx >= inv.length) {
        invindx = 0;
    }

    document.getElementById("invWindow").innerHTML = inv[invindx];
}

// inventory list
function invListing() {
    var invL = "";
    var i = 0;
    for (; i < inv.length ;) {
        invL += inv[i] + "<br>";
        i++;
    }
    document.getElementById("invList").innerHTML = invL;
}

// random events
function randomEvent() {
    switch (Math.ceil(Math.random()*10)) {
        case 1:
            document.getElementById("rndevtWindow").innerHTML = "Event 1";
            break;
        case 2:
        case 3:
            document.getElementById("rndevtWindow").innerHTML = "Event 2";
            break;
        // adding +health item to inventory
        case 4:
        case 5:
        case 6:
            document.getElementById("rndevtWindow").innerHTML = "You get +health";
            inv.push("+health"); // adding item to inventory array
            invListing(); // updating inventory list after getting new item
            break;
        case 7:
        case 8:
        case 9:
            document.getElementById("rndevtWindow").innerHTML = "Event 4";
            break;
        case 10:
            document.getElementById("rndevtWindow").innerHTML = "Event 5";
            break;  
        default:
            document.getElementById("rndevtWindow").innerHTML = "default";
            break;
    }
}
