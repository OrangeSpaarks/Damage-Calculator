function initialize() {
	level = document.getElementById("level");
	attackType = document.getElementById("attacker");
	defenseType = document.getElementById("target");
	attackStat = document.getElementById("attack");
	defenseStat = document.getElementById("defense");
	baseDamage = document.getElementById("base");
	resultDiv = document.getElementById("result");
	STAB = 1;
	typeEffectiveness = 1;
}

function change(option) {
	if (option == 1) {
		attackType.innerHTML = "Attack";
		defenseType.innerHTML = "Defense";
	}
	else if (option == 2) {
		attackType.innerHTML = "Special Attack";
		defenseType.innerHTML = "Special Defense";
	}
	else if (option == 3) {
		STAB = 1.5;
	}
	else if (option == 4) {
		STAB = 1;
	}
	else if (option == 5) {
		typeEffectiveness = 1;
	}
	else if (option == 6) {
		typeEffectiveness = 2;
	}
	else if (option == 7) {
		typeEffectiveness = 4;
	}
	else if (option == 8) {
		typeEffectiveness = .5;
	}
	else if (option == 9) {
		typeEffectiveness = .25;
	}
}

function calculate() {
	minDamage = (((2 * level.value + 10) / 250) * (attackStat.value / defenseStat.value) * baseDamage.value + 2) * typeEffectiveness * STAB * .85;
	maxDamage = (((2 * level.value + 10) / 250) * (attackStat.value / defenseStat.value) * baseDamage.value + 2) * typeEffectiveness * STAB * 1;
		
	resultDiv.innerHTML = "Damage: " + parseInt(minDamage) + " HP - " + parseInt(maxDamage) + " HP";
}