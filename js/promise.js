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
  const usersUrl = 'https://jsonplaceholder.typicode.com';
  const result = {
    id: id,
    name: '',
    posts: [],
  };
  return new Promise((resolve, reject) => {
    const users = fetch(`${usersUrl}/users`);
    users
      .then((response) => response.json())
      .then((users) => {
        const foundUser = users.find((user) => user.id === id);
        result.name = foundUser.name;
        fetch('https://jsonplaceholder.typicode.com/posts')
          .then((response) => response.json())
          .then((posts) => {
            const foundTenPosts = posts.filter((post) => post.userId === id);
            result.posts = foundTenPosts;
            resolve(result);
          });
      });
  });
};

showUsersById(1).then((data) => console.log(data));

let promise_1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise is rejected'));
  }, 1500);
});

// promise.then((data) => console.log(data)).catch((error) => console.log(error));

let showPromise = new Promise((resolve, reject) => {
  resolve(1);
  resolve(2);
}).then((res) => console.log(res));

new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Error... :('));
  }, 1500);
}).then(null, console.log);

const party = new Promise((res, rej) => {
  const isPartyGood = true;
  if (isPartyGood) {
    setTimeout(() => res('This is party is so good!'), 2000);
  } else {
    rej(new Error('Party is so bad!!!'));
  }
})
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally(() => console.log('Party is over.'));

const showErrorByPromise = new Promise((res, rej) => {
  rej(new Error('Rejected'));
})
  .then(null, console.log)
  .finally(() => console.log('Promise is over'));

const loadScript_2 = (src) => {
  return new Promise((res, rej) => {

    let script = document.createElement('script');
    script.src = src;

    script.onload = () => res(script);
    script.onerror = () => rej(new Error("Script is not doesn't work"));

    document.head.append(script);
  });
};

const isPromise = new Promise((res, rej) => {
  res(1);

  setTimeout(() => {
    res(2);
  }, 1000);
});

isPromise.then((res) => console.log(res));

const delay_2 = (ms) => {
  return new Promise((res) => {
    setTimeout(res, ms);
  });
};

delay_2(3000).then((res) => alert('Work in 3 seconds'));

let promise_6 = new Promise((res, rej) => {
  setTimeout(() => res(1), 1000);
})
  .then((result) => {
    console.log(result);
    return result * 2;
  })
  .then((result) => {
    console.log(result);
    return result * 2;
  })
  .then((result) => {
    console.log(result);
    return result * 2;
  });

new Promise((res, rej) => {
  setTimeout(() => res(1), 1000);
})
  .then((result) => {
    return new Promise((res) => {
      alert(result);
      setTimeout(() => res(result * 2), 1000);
    });
  })
  .then((result) => {
    return new Promise((res) => {
      alert(result);
      setTimeout(() => res(result * 2), 1000);
    });
  })
  .then((result) => {
    alert(result);
  });

const promise_7 = fetch('https://jsonplaceholder.typicode.com/users');

promise_7.then((response) => response.json()).then((users) => console.log(users));

console.log('Request data...');

const promise8 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Preparing Data...');
    const backendData = {
      server: 'aws',
      port: '3000',
      status: '200 Ok',
    };
    resolve(backendData);
  }, 2000);
})
  .then(async (clientData) => {
    const clientData_1 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        (clientData.modified = true), resolve(clientData);
      }, 2000);
    });
    clientData_1.fromPromise = true;
    if (typeof clientData_1 === 'object') {
      return clientData_1;
    } else {
      throw new Error('ClientData Error message...');
    }
  })
  .then((total) => console.log(total))
  .catch((err) => console.log(err))
  .finally(() => console.log('Finish Data!'));

const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });
};

// sleep(2000).then(() => console.log('After 2 second'));
// sleep(4000).then(() => console.log('After 4 second'));

Promise.all([sleep(2000), sleep(3000)]).then(() => console.log('All Promises'));
Promise.race([sleep(2000), sleep(3000)]).then(() =>
  console.log('Race Promises')
);

new Promise((resolve, reject) => {
  if (1 > 2) {
    reject(new Error('Err'));
  } else {
    setTimeout(() => {
      resolve('Resolved');
    }, 2000);
  }
})
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

console.log('Loading....');

const users = fetch('https://jsonplaceholder.typicode.com/users');

users
  .then((response) => response.json())
  .then((result) => {
    return new Promise((res) => setTimeout(() => res(result), 2000));
  })
  .then((res) => console.log(res))
  .catch(function (err) {
    console.log(err);
  })
  .finally(() => console.log('Users is download'));
