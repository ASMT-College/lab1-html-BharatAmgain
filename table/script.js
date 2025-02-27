document.addEventListener("DOMContentLoaded", function () {
    const scheduleTable = document.querySelector("#scheduleTable tbody");

    let startTime = new Date();
    startTime.setHours(6, 10, 0); // Set initial time to 6:10 AM
    const periodDuration = 50 * 60 * 1000; // 50 minutes
    const tiffinBreakDuration = 30 * 60 * 1000; // 30 minutes
    const subjects = [
        "Web Technology",
        "Cryptography",
        "System Analysis and Design",
        "Simulation and Modeling",
        "Multimedia",
        "Design and Analysis of Algorithms"
    ];

    let sn = 1;

    for (let i = 0; i < subjects.length; i++) {
        let endTime = new Date(startTime.getTime() + periodDuration);
        
        // Add row for the period
        let row = `
            <tr>
                <td>${sn}</td>
                <td>${subjects[i]}</td>
                <td>${formatTime(startTime)}</td>
                <td>${formatTime(endTime)}</td>
                <td>50 minutes</td>
                <td>${i === 1 ? "Tiffin Break After This" : "-"}</td>
            </tr>
        `;
        scheduleTable.innerHTML += row;
        sn++;

       
        if (i === 1) {
            let breakEndTime = new Date(endTime.getTime() + tiffinBreakDuration);
            let breakRow = `
                <tr class="tiffin-break">
                    <td colspan="6">Tiffin Break (7:50 AM - 8:20 AM)</td>
                </tr>
            `;
            scheduleTable.innerHTML += breakRow;
            startTime = breakEndTime; 
        } else {
            startTime = endTime;
        }
    }
});

// Function to format time
function formatTime(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; 
    return `${hours}:${minutes.toString().padStart(2, "0")} ${ampm}`;
}
