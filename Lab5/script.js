const pib = document.getElementById('pib');
const group = document.getElementById('group');
const phone = document.getElementById('phone');
const idcard = document.getElementById('idcard');
const faculty = document.getElementById('faculty');

const UA = "А-ЯІЇЄҐа-яіїєґ";

const regex = {
    pib: new RegExp(`^[${UA}]{3,}\\s[${UA}][.]?[${UA}][.]?$`),
    group: /^[А-ЯІЇЄҐ]{2}-\d{2}$/,
    phone: /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/,
    idcard: new RegExp(`^[A-Za-z${UA}]{2}\\s№\\d{6}$`),
    faculty: /^[А-ЯІЇЄҐ]{4}$/
};

function check(input, rule, errors) {
    if (!rule.test(input.value.trim())) {
        input.classList.add("error");
        input.classList.remove("ok");
        errors.push(input.id);
    } else {
        input.classList.remove("error");
        input.classList.add("ok");
    }
}

document.getElementById('submitBtn').onclick = () => {
    let errors = [];
    check(pib, regex.pib, errors);
    check(group, regex.group, errors);
    check(phone, regex.phone, errors);
    check(idcard, regex.idcard, errors);
    check(faculty, regex.faculty, errors);

    if (errors.length === 0) {
        alert(
            "ПІБ: " + pib.value + "\n" +
            "Група: " + group.value + "\n" +
            "Телефон: " + phone.value + "\n" +
            "ID-card: " + idcard.value + "\n" +
            "Факультет: " + faculty.value
        );
    } else {
        alert("Помилки у полях: " + errors.join(", "));
    }
};



const table = document.getElementById("myTable");
let number = 1;

for (let r = 0; r < 6; r++) {
    const row = document.createElement("tr");

    for (let c = 0; c < 6; c++) {
        const cell = document.createElement("td");
        cell.textContent = number;
        row.appendChild(cell);
        number++;
    }
    table.appendChild(row);
}

const variant = 29;
const colorPicker = document.getElementById("colorPicker");

[...table.getElementsByTagName("td")].forEach(td => {
    const num = Number(td.textContent);

    if (num === variant) {
        td.onmouseover = () => {
            td.style.background = "#" + Math.floor(Math.random()*16777215).toString(16);
        };

        td.onclick = () => {
            td.style.background = colorPicker.value;
        };

        td.ondblclick = () => {
            const start = td.parentNode.rowIndex;

            for (let i = start; i >= 0; i -= 2) {
                table.rows[i].style.background = colorPicker.value;
            }
            for (let i = start; i < 6; i += 2) {
                table.rows[i].style.background = colorPicker.value;
            }
        };
    }
});
