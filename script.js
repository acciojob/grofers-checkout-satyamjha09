const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    const prices = document.querySelectorAll(".price");
    let total = 0;

    prices.forEach(price => {
        total += parseFloat(price.textContent) || 0;
    });

    let table = document.querySelector("table");
    let existingTotalRow = document.getElementById("total-row");

    // Remove old total row if it already exists
    if (existingTotalRow) {
        existingTotalRow.remove();
    }

    // Create a new row for total price
    let newRow = document.createElement("tr");
    newRow.id = "total-row";
    newRow.innerHTML = `<td colspan="2"><strong>Total Price: ₹${total}</strong></td>`;
    table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);


