var plyr_hp = 100; // player's hp
var inv = ["Item 1","Item 2","Item 3"]; // inventory
var invindx = 0; // inventory index

document.getElementById("invWindow").innerHTML = inv[0]; // presenting item at start

// change in player hp
function hpChange(mindmg,maxdmg,bnsdmg) {
    plyr_hp += (Math.floor(Math.random() * (maxdmg - mindmg + 1) + mindmg)) + bnsdmg;

    // hp bounds
    if (plyr_hp > 100) {
        plyr_hp = 100;
    } else if (plyr_hp < 0) {
        plyr_hp = 0;
    }

    document.getElementById("hpWindow").innerHTML = plyr_hp;
}

// switching items in inventory
function invChange(chng) {
    invindx += chng;

    if (invindx <= -1) {
        invindx = inv.length - 1;
    } else if (invindx >= inv.length) {
        invindx = 0;
    }

    document.getElementById("invWindow").innerHTML = inv[invindx];
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
        case 4:
        case 5:
        case 6:
            document.getElementById("rndevtWindow").innerHTML = "Event 3";
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
