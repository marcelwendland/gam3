<script>
  function updateDateTime() {
    const datetimeEl = document.getElementById("datetime");
    const now = new Date();
    const formattedDateTime = now.toLocaleDateString("de-DE", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    }) + " " + now.toLocaleTimeString("de-DE", {
      hour: "2-digit",
      minute: "2-digit",
    });
    datetimeEl.textContent = `Aktuelles Datum & Uhrzeit: ${formattedDateTime}`;
  }

  updateDateTime();
  setInterval(updateDateTime, 1000); // Aktualisierung jede Sekunde
</script>