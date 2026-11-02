// Shared helpers: every message goes to BOTH the browser console and the on-page console panel.
const $ = (id) => document.getElementById(id);

const Output = {
  box() { return $("console"); },

  // Empty the on-page panel (does not touch the real browser console)
  clear() { this.box().innerHTML = ""; },

  // console.log() + show the same text on the page. tone: good | bad | warn | info
  log(message, tone) {
    console.log(message);
    const line = document.createElement("p");
    line.className = "line" + (tone ? " " + tone : "");
    line.textContent = message;
    this.box().appendChild(line);
  },

  // console.table() + render the same rows as an HTML table
  table(rows) {
    console.table(rows);
    const table = document.createElement("table");
    const head = document.createElement("tr");
    Object.keys(rows[0]).forEach((key) => {
      const th = document.createElement("th");
      th.textContent = key;
      head.appendChild(th);
    });
    table.appendChild(head);
    rows.forEach((row) => {
      const tr = document.createElement("tr");
      Object.values(row).forEach((value) => {
        const td = document.createElement("td");
        td.textContent = String(value);
        tr.appendChild(td);
      });
      table.appendChild(tr);
    });
    this.box().appendChild(table);
  }
};
