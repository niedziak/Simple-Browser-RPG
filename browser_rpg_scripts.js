var plyr_hp = 100; // player's hp
var inv = ["Parówa","Miodek","Uran"]; // inventory
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

// using inventory item
function invUse() {
	switch (inv[invindx]) {
		case "Parówa":
			hpChange(0,0,10);
			break;
		case "Miodek":
			hpChange(0,0,5);
			break;
		case "Uran":
			hpChange(0,0,-15);
			break;
		default:
			break;
	}
	inv.splice(invindx,1);
	invListing();
	invChange(0);	
}

// cycling items in inventory
function invChange(chng) {
    invindx += chng;

	if (inv.length != 0) {
		if (invindx <= -1) {
			invindx = inv.length - 1;
		} else if (invindx >= inv.length) {
			invindx = 0;
		}
		document.getElementById("invWindow").innerHTML = inv[invindx];
	} else {
		document.getElementById("invWindow").innerHTML = "EMPTY";
	}
}

// inventory list
function invListing() {
    inv.sort();
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
            document.getElementById("rndevtWindow").innerHTML = "Znalazłeś URAN!!!";
			inv.push("Uran");
			invListing();
            break;
        case 2:
        case 3:
			document.getElementById("rndevtWindow").innerHTML = "Znalazłeś parówę!";
			inv.push("Parówa");
			invListing();
            break;
        case 4:
        case 5:
        case 6:
            document.getElementById("rndevtWindow").innerHTML = "Znalazłeś miodek!";
			inv.push("Miodek");
			invListing();
            break;
        case 7:
        case 8:
        case 9:
            document.getElementById("rndevtWindow").innerHTML = "Nic się nie stało.";
            break;
        case 10:
            document.getElementById("rndevtWindow").innerHTML = "Wywalenie prądu!";
			hpChange(0,0,-10);
            break;  
        default:
            document.getElementById("rndevtWindow").innerHTML = "default";
            break;
    }
}

document.body.onload = invChange(0); // filling inventory window when page loads
document.body.onload = invListing(); // filling inventory list when page loads
