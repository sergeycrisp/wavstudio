/* eslint-disable */

const login = async (email, password) => {
  try {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const res = await axios({
      method: 'POST',
      url: '/api/v1/users/login',
      data: {
        email,
        password,
      },
    });

    if (res.data.status === 'success') {
      UIkit.notification(
        "<span uk-icon='icon: check'></span> Thank you!",
        { status: 'success' }
      );
      localStorage.setItem('jwt', res.data.token);
      console.log(res.data);
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
  } catch (err) {
    UIkit.notification(err.response.data.message, {});
  }
};

const signUp = async (email, password) => {
  try {
    const name = document.getElementById('signUPName').value;
    const email = document.getElementById('signUPEmail').value;
    const password = document.getElementById('signUPPassword').value;
    const passwordConfirm = document.getElementById(
      'signUPConfirmPassword'
    ).value;

    const res = await axios({
      method: 'POST',
      url: '/api/v1/users/signup',
      data: {
        name,
        email,
        password,
        passwordConfirm,
      },
    });

    if (res.data.status === 'success') {
      UIkit.notification(
        "<span uk-icon='icon: check'></span> Thank you!",
        { status: 'success' }
      );
      localStorage.setItem('jwt', res.data.token);
      console.log(res.data);
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
  } catch (err) {
    UIkit.notification(err.response.data.message, {});
  }
};

const forgotPassword = async () => {
  try {
    const email = document.getElementById('forgotPasswordEmail')
      .value;

    const res = await axios({
      method: 'POST',
      url: '/api/v1/users/forgotPassword',
      data: {
        email,
      },
    });

    if (res.data.status === 'success') {
      UIkit.notification(
        "<span uk-icon='icon: check'></span> Thank you! Check your email!",
        { status: 'success' }
      );
    }
  } catch (err) {
    UIkit.notification(err.response.data.message, {});
  }
};

const logout = async () => {
  try {
    localStorage.setItem('jwt', '');
    account.href = './sign';
    orderButton.href = './sign';
  } catch (e) {}

  window.setTimeout(() => {
    location.assign('/');
  }, 0);
};

const account = document.getElementById('account');
const orderButton = document.getElementById('orderButton');

if (localStorage.getItem('jwt')) {
  account.href = './account';
  if (orderButton) {
    orderButton.href = '#modalOrder';
    orderButton['uk-toggle'] = '';
  }
} else {
  account.href = './sign';
  if (orderButton) {
    orderButton.removeAttribute('uk-toggle');
    orderButton.href = './sign';
  }
}

const sendServiceJSON = async () => {
  try {
    let words = document.querySelector('#words');
    let contacts = document.querySelector('#contacts');
    let awaitPrice = document.querySelector('#awaitPrice');
    let service = document.querySelectorAll(
      '[aria-expanded].uk-active'
    )[0].children[0].innerText;

    if (localStorage.getItem('jwt') == '') {
      account.href = './sign';
      orderButton.href = './sign';
      window.setTimeout(() => {
        location.assign('/sign');
      }, 100);
    }
    // Creating req
    let url = './api/v1/orders/createOrder';

    let data = JSON.stringify({
      service: service,
      contacts: contacts.value,
      price: awaitPrice.value,
      text: words.value,
      token: localStorage.getItem('jwt'),
    });
    const res = await axios.post(url, { data: data });
    if (res.data.status === 'success') {
      UIkit.notification(
        "<span uk-icon='icon: check'></span> Thank you!!",
        { status: 'success' }
      );
      window.setTimeout(() => {
        location.assign('/account');
      }, 1500);
    }
  } catch (e) {}
};

const updatePassword = async () => {
  try {
    oldPassword = document.getElementById('currentPwd').value;
    password = document.getElementById('newPwd').value;
    localStorage.setItem('jwt', '');
    console.log(oldPassword, password);
    const res = await axios({
      method: 'PATCH',
      url: '/api/v1/users/updateMyPassword',
      data: {
        oldPassword,
        password,
      },
    });
    if (res.data.status === 'success') {
      UIkit.notification(
        "<span uk-icon='icon: check'></span> Ready!",
        { status: 'success' }
      );
      localStorage.setItem('jwt', res.data.token);

      // window.setTimeout(() => {
      //   location.assign('/account');
      // }, 100);
    }
  } catch (e) {
    UIkit.notification("That's not fine. Check passwords", {
      status: 'fail',
    });
  }

  // window.setTimeout(() => {
  //   location.assign('/');
  // }, 0);
};
