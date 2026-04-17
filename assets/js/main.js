// Notify form
const form = document.getElementById('notifyForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const note = document.getElementById('formNote');
    note.textContent = 'Thanks! We\'ll notify you when we launch.';
    form.reset();
  });
}

// Maintenance estimated time
const el = document.getElementById('estimatedTime');
if (el) {
  const end = new Date();
  end.setHours(end.getHours() + 2);
  el.textContent = `Estimated completion: ${end.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
}
