function processFunc() {

    const maleName = document.getElementById("male_name").value.trim();
    const femaleName = document.getElementById("female_name").value.trim();
    const maleDob = document.getElementById("male_dob").value;
    const femaleDob = document.getElementById("female_dob").value;

    const warning = document.getElementById("warning");
    const result = document.getElementById("result");

    // RESET
    warning.style.display = "none";
    warning.innerText = "";
    result.innerText = "Love Percentage:";

    // ✅ VALIDATION (THIS IS THE KEY)
    if (maleName === "" || femaleName === "" || maleDob === "" || femaleDob === "") {
        warning.innerText = "⚠️ Please fill all data";
        warning.style.display = "block";
        return; // ❌ STOP calculation
    }

    // ---- ORIGINAL LOGIC CONTINUES ----

    const now = new Date();
    const currentYear = now.getFullYear();

    const maleDateObj = new Date(maleDob);
    const femaleDateObj = new Date(femaleDob);

    const ageMale = currentYear - maleDateObj.getFullYear();
    const ageFemale = currentYear - femaleDateObj.getFullYear();

    const dobMale = `${maleDateObj.getDate()}-${maleDateObj.getMonth()+1}-${maleDateObj.getFullYear()}`;
    const dobFemale = `${femaleDateObj.getDate()}-${femaleDateObj.getMonth()+1}-${femaleDateObj.getFullYear()}`;

    const concatName = maleName.toLowerCase() + femaleName.toLowerCase();
    const concatDob = dobFemale + dobMale;

    const listName = [...concatName].map(c => c.charCodeAt(0) - 96).filter(n => n > 0);
    const listDob = [...concatDob].map(c => parseInt(c)).filter(n => !isNaN(n));

    const total = listName.reduce((a,b)=>a+b,0) + listDob.reduce((a,b)=>a+b,0);

    const randomFactor = Math.floor(Math.random() * 100) + 1;
    const randomMinus = [10, 20, 30, 15, 25];

    const characters = listName.length + listDob.length
        - Math.floor((ageMale + ageFemale) / 2)
        - randomMinus[Math.floor(Math.random() * randomMinus.length)];

    const lovePercentage = ((total + randomFactor) / characters) % 101;

    result.innerText = `Love Percentage: ${lovePercentage.toFixed(2)}% ❤️`;
}
