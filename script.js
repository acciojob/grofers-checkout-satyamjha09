const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
/// Select all elements with the class "price"
  const prices = document.querySelectorAll(".price");

  // Calculate the total sum
  let total = 0;
  prices.forEach(price => {
    total += parseFloat(price.textContent); // Convert text to number and add
  });

  // Check if a total row already exists and remove it
  const existingTotalRow = document.getElementById("total-row");
  if (existingTotalRow) {
    existingTotalRow.remove();
  }

  // Create a new row for the total price
  const table = document.querySelector("table");
  const totalRow = document.createElement("tr");
  totalRow.id = "total-row"; // Assign an ID to avoid duplicates

  // Create a single cell spanning both columns
  const totalCell = document.createElement("td");
  totalCell.colSpan = 2; // Make the cell span both columns
  totalCell.style.fontWeight = "bold";
  totalCell.textContent = `Total Price: Rs ${total}`;

  totalRow.appendChild(totalCell);
  table.appendChild(totalRow); // Append the row to the table
  
};

getSumBtn.addEventListener("click", getSum);

