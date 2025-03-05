const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  const prices = document.querySelectorAll(".price");
  let total = 0;

  prices.forEach(price => {
    total += parseFloat(price.textContent) || 0; // Ensure valid number
  });

  // Remove existing total row if present
  const existingTotalRow = document.getElementById("total-row");
  if (existingTotalRow) existingTotalRow.remove();

  // Create new total row
  const table = document.querySelector("table");
  const totalRow = document.createElement("tr");
  totalRow.id = "total-row";

  const totalCell = document.createElement("td");
  totalCell.colSpan = 2;
  totalCell.style.fontWeight = "bold";
  totalCell.textContent = `Total Price: Rs ${total}`;

  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);

  // ✅ Ensure Cypress can find the answer
  let ansElement = document.getElementById("ans");
  if (!ansElement) {
    ansElement = document.createElement("div");
    ansElement.id = "ans";
    document.body.appendChild(ansElement);
  }
  ansElement.textContent = total;
};

getSumBtn.addEventListener("click", getSum);

