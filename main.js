function enterReminder() {
    // Hämta värdena från input-fälten
    let reminderText = document.getElementById('write-reminder').value;
    let reminderDate = document.getElementById('date-reminder').value;
    let reminderTime = document.getElementById('time-reminder').value;

    // Kontrollera att textfältet inte är tomt
    if (reminderText.trim() !== "") {
        // Skapa ett nytt <li>-element
        let listItem = document.createElement('li');

        // Sätt textinnehållet för <li>-elementet med påminnelsen, datum och tid
        listItem.textContent = `${reminderText} - Datum: ${reminderDate}, Tid: ${reminderTime}`;

        // Lägg till <li>-elementet till <ul>-elementet
        let reminderList = document.getElementById('reminder-list');
        reminderList.appendChild(listItem);

        // Töm input-fälten
        document.getElementById('write-reminder').value = '';
        document.getElementById('date-reminder').value = '1900-01-01';
        document.getElementById('time-reminder').value = '00:00';
    } else {
        alert("Skriv in en påminnelse innan du klickar på Enter");
    }
}