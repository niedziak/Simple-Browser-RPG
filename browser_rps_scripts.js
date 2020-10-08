var plyr_hp = 100;
var inv = ["HARPOON","KNIFE","LANTERN"]; // inventory
var invindx = 0;

document.getElementById("invWindow").innerHTML = inv[0]; // presenting item at start

// change in player hp
function hpchange (mindmg,maxdmg,bnsdmg) {
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
function invchange(chng) {
    invindx += chng;

    if (invindx <= -1) {
        invindx = inv.length - 1;
    } else if (invindx >= inv.length) {
        invindx = 0;
    }

    document.getElementById("invWindow").innerHTML = inv[invindx];
}