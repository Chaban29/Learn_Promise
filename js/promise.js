'use strict';

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Error'));
  }, 1000);
});

promise1.then((res) => console.log(res));

const promiseTwo = new Promise((resolve, reject) => {
  // resolve('Done!')
  reject('Error');
});

promiseTwo.then((data) => console.log(data)).catch((err) => console.log(err));

const promiseThird = new Promise((resolve, reject) => {
  resolve(123);
});

promiseThird.then((res) => console.log(res));

const promise2 = new Promise((resolve, reject) => {
  // resolve('Resolve');
  reject('Reject');
});

promise2.then(
  (res) => console.log(res),
  (err) => console.log(err)
);

console.log(promise);

let promise3 = new Promise((resolve, reject) => {
  const name = 'Ricky';
  if (name === 'Ricky') {
    reject(new Error('Ricky is not defined'));
  }
});

promise3.catch((err) => console.log(err));

const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Error...')), 1000);
});

promise4
.then(null, console.log)
.finally((res) => console.log('finally'));

const promise5 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('result'), 2000);
});

promise5
  .finally(() => console.log('Promise done!'))
  .then((res) => console.log(res));

const promise6 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Error...')), 1500);
});

promise6
  .finally(() => console.log('Promise End'))
//   .catch((res) => console.log(res));

let promise7 = new Promise((resolve) => resolve('Ok!'));

promise7.then(alert);

const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => resolve(script);
    script.onerror = () =>
      reject(new Error(`Error for downloading script ${src}`));
    document.head.append(script);
  });
};

const delay = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), ms);
  });
};

delay(1000).then(() => alert('виконалось через 3 секунди'));

const promiseChaining1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1500);
})
  .then((result) => {
    console.log('First then ' + result);
    return result * 2;
  })
  .then((result) => {
    console.log('Second then ' + result);
    return result * 2;
  })
  .then((result) => {
    console.log('Third then ' + result);
    return result * 2;
  });

console.log(1);

const promiseChaining = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
})
  .then((result) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 2), 1000);
      console.log(result);
    });
  })
  .then((result) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 2), 1500);
      console.log(result);
    });
  })
  .then((result) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 2), 1800);
      console.log(result);
    });
  });

console.log(2);

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((user) => console.log(user.name));

const promise = new Promise((resolve, reject) => {
  const isUserLoggedIn = true;
  if (isUserLoggedIn) {
    setTimeout(() => resolve('User is loggedIn'), 1500);
  } else {
    reject('User is not loggedIn');
  }
});

promise
  .then((data) => {
    return new Promise((resolve, reject) => {
      if (1 < 2) {
        console.log(data);
        resolve(`${data} in promise 2`);
      } else {
        reject(new Error('Error in nested promise'));
      }
    });
  })
  .then((data) => {
    return new Promise((resolve, reject) => {
      if (1 < 2) {
        console.log(data);
        resolve(`${data} in promise 3`);
      } else {
        reject(new Error('Error in nested promise 2'));
      }
    });
  })
  .then((data2) => console.log(data2))
  .catch((err) => console.log(err))
  .finally(() => alert('The job is done!'));
console.log(promise);

const showUsersById = (id) => {
  const result = {
    id: id,
    name: '',
    posts: [],
  };
  const users = fetch('https://jsonplaceholder.typicode.com/users');
  users
    .then((response) => response.json())
    .then((users) => {
      const foundUser = users.find((user) => user.id === id);
      result.name = foundUser.name;
      console.log(result);
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((posts) => {
          const foundTenPosts = posts.filter((post) => post.userId === id);
          result.posts = foundTenPosts;
        });
    });

  return result;
};

showUsersById(5);
