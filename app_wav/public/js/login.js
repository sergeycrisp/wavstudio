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
  localStorage.setItem('jwt', '');
  window.setTimeout(() => {
    location.assign('/');
  }, 0);
};
