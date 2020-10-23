<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="browser_rpg_styles.css">
    <title>Document</title>
</head>

<body>
<div class="main">
<!-- game title -->
    <div class="gameTitle border">
        <p class="gameTitle">GAME TITLE</p>
    </div>

<!-- random events window -->
    <div class="randomEvents border">
        <p id="rndevtWindow"></p>
    </div>

<!-- player bar -->
    <div class="playerBar">
    <!-- hp meter -->
        <div class="hpCounter border">
            <p class="hpCounter">Life:</p> <p class="hpCounter" id="hpWindow">100</p>
        </div>

    <br>

    <!-- inventory window -->
        <p id="invWindow" class="inv border"></p>
    <br>
    <!-- use item button -->
	<button class="invButton border" onclick="invUse()">USE</button>	
    <!-- inventory cycle buttons -->
        <button class="invButton border" onclick="invChange(-1)"><</button>
        <button class="invButton border" onclick="invChange(1)">></button>
    <br>
    <!-- inventory list -->
        <p id="invList" class="inv border"></p>
    </div>
</div>

<!-- test buttons -->
<div class="testButtons">
    <button class="border" onclick="hpChange(-2,-10,0)">ONE HIT</button>
    <button class="border" onclick="randomEvent()">RANDOM EVENT</button>
</div>

<!-- scripts -->
<script src="browser_rpg_scripts.js"></script>

</body>

</html>
