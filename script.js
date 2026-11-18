document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('wholesaleForm');
  const formSuccess = document.getElementById('formSuccess');
  const successMessage = document.getElementById('successMessage');
  const resetBtn = document.getElementById('resetFormBtn');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const contactName = document.getElementById('contactName').value.trim();
    const businessName = document.getElementById('businessName').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const volume = document.getElementById('volume').value;
    const city = document.getElementById('city').value;

    if (!contactName || !businessName || !phone || !city) {
      alert('Please enter your name, business name, WhatsApp number, and delivery city.');
      return;
    }

    const firstName = contactName.split(' ')[0];
    successMessage.textContent = `Thank you, ${firstName}. Our ${city} procurement desk will send this week's farm-gate price list for ${businessName} (${volume}) to ${phone} via WhatsApp within 2 hours.`;

    form.hidden = true;
    formSuccess.hidden = false;
  });

  resetBtn.addEventListener('click', () => {
    form.reset();
    formSuccess.hidden = true;
    form.hidden = false;
  });
});