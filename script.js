// Calculate function
function calculate() {
    // Get input values
    const packetsInput = document.getElementById('packets');
    const coverPacketsInput = document.getElementById('coverPackets');
    const groceryCountInput = document.getElementById('groceryCount');
    const groceryAmountInput = document.getElementById('groceryAmount');

    const packets = parseInt(packetsInput.value) || 0;
    const coverPackets = parseInt(coverPacketsInput.value) || 0;
    const groceryCount = parseInt(groceryCountInput.value) || 0;
    const groceryAmount = parseFloat(groceryAmountInput.value) || 0;

    // Perform calculation
    const totalAmount = (packets * 20) - (groceryCount * groceryAmount) - (coverPackets * 100);

    // Display result
    document.getElementById('result').innerText = `Total Sales: $${totalAmount}`;

    // Save to local storage
    localStorage.setItem('monthlySales', totalAmount);
    updateMonthlySummary();

    // Clear input fields
    packetsInput.value = '';
    coverPacketsInput.value = '';
    groceryCountInput.value = '';
    groceryAmountInput.value = '';
}

// Display total packets and sales up to the current date
function displayTotal() {
    const totalPackets = localStorage.getItem('totalPackets') || 0;
    const totalSales = localStorage.getItem('totalSales') || 0;

    alert(`Total Packets: ${totalPackets}\nTotal Sales: $${totalSales}`);
}

// Display monthly summary
function displayMonthlySummary() {
    const monthlySummary = localStorage.getItem('monthlySummary') || "No data available for this month.";
    alert(monthlySummary);
}

// Update monthly summary
function updateMonthlySummary() {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    
    // Check if current month has changed
    const lastMonth = localStorage.getItem('lastMonth') || null;

    if (lastMonth === null || lastMonth != currentMonth) {
        localStorage.setItem('lastMonth', currentMonth);
        localStorage.setItem('totalPackets', 0);
        localStorage.setItem('totalSales', 0);
    }

    // Update total packets and sales
    const currentTotalPackets = parseInt(localStorage.getItem('totalPackets')) || 0;
    const currentTotalSales = parseFloat(localStorage.getItem('totalSales')) || 0;

    const packets = parseInt(document.getElementById('packets').value) || 0;

    localStorage.setItem('totalPackets', currentTotalPackets + packets);
    localStorage.setItem('totalSales', currentTotalSales + packets * 20);
    
    // Update monthly summary string
    const monthlySummaryString = `Monthly Summary:\nTotal Packets: ${currentTotalPackets + packets}\nTotal Sales: $${currentTotalSales + packets * 20}`;
    localStorage.setItem('monthlySummary', monthlySummaryString);
}

