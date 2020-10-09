var plyr_hp = 100;
var inv = ["HARPOON","KNIFE","LANTERN"]; // inventory
var invidx = 0;

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
function invChange(chng) {
    invindx += chng;

    if (invidx < 0) {
        invidx = inv.length - 1;
    } else if (invindx >= inv.length) {
        invindx = 0;
    }

    document.getElementById("invWindow").innerHTML = inv[invidx];
}