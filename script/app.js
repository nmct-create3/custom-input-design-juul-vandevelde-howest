const handlePasswordSwitcher = function () {
  console.log('handlePasswordSwitcher executed');
  const passwordInput = document.querySelector('.js-password-input');
  const passwordToggle = document.querySelector('.js-password-toggle-checkbox');
  const passwordOptions = ['password', 'text'];
  passwordToggle.addEventListener('change', function () {
    passwordInput.type = passwordOptions[+this.checked];

    // passwordToggle.addEventListener('click', function () {
    //   if (passwordInput.type == 'text') {
    //     passwordInput.type = 'password';
    //   } else if ((passwordInput.type = 'password')) {
    //     passwordInput.type = 'text';
    //   }
    // });
  });
};

const init = function () {
  console.log('Script loaded!');

  // init password switcher
  handlePasswordSwitcher();

  // Other init functions here
};

init();
