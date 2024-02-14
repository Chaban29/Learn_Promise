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

promise4.then(null, console.log).finally((res) => console.log('finally'));

const promise5 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('result'), 2000);
});

promise5
  .finally(() => console.log('Promise done!'))
  .then((res) => console.log(res));

const promise6 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Error...')), 1500);
});

promise6.finally(() => console.log('Promise End'));
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
// .then(async (clientData) => {
//   const clientData_1 = await new Promise((resolve, reject) => {
//     setTimeout(() => {
//       (clientData.modified = true), resolve(clientData);
//     }, 2000);
//   });
//   clientData_1.fromPromise = true;
//   if (typeof clientData_1 === 'object') {
//     return clientData_1;
//   } else {
//     throw new Error('ClientData Error message...');
//   }
// })
// .then((total) => console.log(total))
// .catch((err) => console.log(err))
// .finally(() => console.log('Finish Data!'));

const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });
};

sleep(2000).then(() => console.log('After 2 second'));
sleep(4000).then(() => console.log('After 4 second'));

Promise.all([sleep(2000), sleep(3000)]).then(() => console.log('All Promises'));
Promise.race([sleep(2000), sleep(3000)]).then(() =>
  console.log('Race Promises')
);

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

const promise_10 = new Promise((resolve, reject) => {});

console.log(promise_10);

// Promise States: {
//   1. Pending,
//   2. Resolved,
//   3. Rejected,
// }

const promise_13 = new Promise((resolve, reject) => {
  console.log('Loading...');
  setTimeout(() => {
    fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
      if (response.ok) {
        resolve(response.json());
      } else {
        reject(new Error('Not found 404'));
      }
    });
  }, 3000);
});

promise_13.then((res) => console.log(res)).catch((err) => console.log(err));

const promise_14 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
})
  .then((result) => {
    alert(result);
    return result * 2;
  })
  .then((result) => {
    alert(result);
    return result * 2;
  })
  .then((result) => {
    alert(result);
    return result * 2;
  });

const promise_15 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
})
  .then((result) => {
    alert(1);
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 2), 1000);
    });
  })
  .then((result) => {
    alert(result);
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 2), 1000);
    });
  })
  .then((res) => window.alert(res));

class Thenable {
  constructor(num) {
    this.num = num;
  }
  then(resolve, reject) {
    alert(resolve);
    setTimeout(() => resolve(this.num * 2), 1000);
  }
}

new Promise((resolve) => resolve(1))
  .then((result) => {
    return new Thenable(result);
  })
  .then(alert);

let promise_16 = fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then(console.log);

const promise_12 = new Promise((resolve, reject) => {
  const isUserLoggedIn = true;
  if (isUserLoggedIn) {
    setTimeout(() => resolve('User is loggedIn'), 2000);
  } else {
    setTimeout(() => reject('User is not loggedIn'), 2000);
  }
});

promise
  .then((data) => {
    return new Promise((resolve, reject) => {
      if (1 > 0) {
        resolve(data);
      } else {
        reject(new Error('Error!'));
      }
    });
  })
  .then((res) => console.log(res))
  .catch(console.log);

new Promise((resolve, reject) => {
  reject(new Error('Error!!!'));
}).catch(console.log);

new Promise((resolve, reject) => {
  resolve('ok');
})
  .then(() => {
    DashboardRoundedd;
  })
  .catch(alert);

new Promise((resolve, reject) => {
  throw new Error('Error!');
})
  .catch((error) => {
    if (error instanceof URIError) {
    } else {
      alert("I don't try this error");
      throw error;
    }
  })
  .then(function () {})
  .catch((error) => {
    // (**)

    alert(`Невідома помилка: ${error}`);
  });

window.addEventListener('unhandledrejection', (event) => {
  alert(event.promise);
  alert(event.reason);
});

new Promise(() => {
  throw new Error('Error');
});

fetch('https://no-such-server.blabla')
  .then((res) => res.json())
  .catch((err) => console.log(err));

new Promise((resolve, reject) => {
  reject(new Error('Помилка!'));
}).catch(alert);

new Promise((resolve, reject) => {
  resolve('ok');
})
  .then(() => {
    dsadaaddaada;
  })
  .catch((err) => console.log(err));

new Promise((resolve, reject) => {
  throw new Error('Error!!!');
})
  .catch((err) => {
    alert(err);
  })
  .then(() => alert('Управління переходить до наступного обробника then'));

new Promise((resolve, reject) => {
  throw new Error('Error!');
})
  .catch((err) => {
    if (err instanceof URIError) {
      alert('URIError');
    } else {
      alert("I don't worked a error");
    }
    throw err;
  })
  .then(function () {})
  .catch((error) => {
    alert(`Невідома помилка: ${error}`);
  });

window.addEventListener('unhandledrejection', (event) => {
  alert(event.promise);
  alert(event.reason);
});

new Promise((resolve, reject) => {
  throw new Error('Error....');
});

console.log('Start');
console.log('Loading...');

const listPromise = fetch('https://api.sampleapis.com/switch/games')
  .then((data) => data.json())
  .then((games) => console.log(games));

const coffee_1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Coffee is done!');
  }, 1500);
}).then((coffee) => console.log(coffee));

const promise_17 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Done!');
  }, 1500);
})
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

console.log('Start');
console.log('Loading...');
const usersList = fetch('https://jsonplaceholder.typicode.com/users')
  .then((data) => data.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

const coffee = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Your coffee is not already!'));
  }, 1500);
});

coffee.then((data) => console.log(data)).catch((error) => console.log(error));

const family = [
  { member: 'mother', id: 111, coffee: 'Latte' },
  { member: 'father', id: 222, coffee: 'Espresso' },
  { member: 'son', id: 333, coffee: 'Cacao' },
];

const getCoffee = (member) => {
  const coffeePromise = fetch('https://api.sampleapis.com/coffee/hot');
  return coffeePromise
    .then((res) => res.json())
    .then((list) => {
      const coffee = list.find((response) => response.title === member.coffee);
      return {
        ...member,
        coffee,
      };
    });
};

const getFamilyMember = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const member = family.find((response) => response.id === id);
      if (member) {
        resolve(member);
      } else {
        reject(new Error('Member is not defined'));
      }
    }, 1500);
  });
};

getFamilyMember(999)
  .then((data) => getCoffee(data))
  .then((newMember) => {
    console.log(newMember);
  })
  .catch((err) => console.log(err));

const makeCoffee = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Your coffee already!');
    }, 1000);
  });
};

const makeToasts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Your toasts already!');
    }, 2500);
  });
};

const coffeePromise = makeCoffee();
const makeToastsPromise = makeToasts();

Promise.all([coffeePromise, makeToastsPromise]).then(
  ([coffeePromise, makeToastsPromise]) =>
    console.log(coffeePromise, makeToastsPromise)
);

const beersPromise = fetch('https://api.sampleapis.com/beers/ale');
const vinesPromise = fetch('https://api.sampleapis.com/wines/reds');

const resultOfPromises = Promise.all([beersPromise, vinesPromise])
  .then(([beersPromise, vinesPromise]) =>
    Promise.all([beersPromise, vinesPromise].map((res) => res.json()))
  )
  .then((result) => console.log(result));

new Promise((resolve, reject) => {
  setTimeout(() => resolve('Done!'), 1500);
})
  .then((res) => {
    console.log(res + ' 1');
    return res;
  })
  .then((res) => {
    console.log(`${res} 2`);
    return res;
  })
  .then((res) => {
    console.log(`${res} 3`);
    return res;
  })
  .then((res) => {
    console.log(`${res} 4`);
    return res;
  });

new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
})
  .then((result) => {
    alert(result);
    return new Promise((resolve) => {
      setTimeout(() => resolve(result * 2), 1200);
    });
  })
  .then((result) => {
    alert(result);
    return new Promise((resolve) => {
      setTimeout(() => resolve(result * 2), 1500);
    });
  })
  .then((result) => {
    alert(result);
    return new Promise((resolve) => {
      setTimeout(() => resolve(result * 2), 1200);
    });
  })
  .then((totalResult) => alert(totalResult));

class Thenable {
  constructor(num) {
    this.num = num;
  }
  then(resolve, reject) {
    alert(resolve);
    setTimeout(() => {
      resolve(this.num * 2);
    }, 2000);
  }
}

new Promise((resolve) => resolve(1))
  .then((result) => {
    return new Thenable(result); // (*)
  })
  .then(alert);

const fetching = fetch('https://jsonplaceholder.typicode.com/users');

fetching.then((response) => response.json()).then(console.log);

const users_1 = fetch('https://jsonplaceholder.typicode.com/users');

const promise_18 = new Promise((resolve, reject) => {
  const isHasDog = true;
  if (isHasDog) {
    setTimeout(() => resolve('Congratulations, you have a dog'), 2000);
  } else {
    setTimeout(() => reject("You don't have a dog :("));
  }
});

promise
  .then((success) => console.log(success))
  .catch((error) => console.log(error));

new Promise((resolve, reject) => {
  reject(new Error('Error...'));
}).catch((err) => alert(err));

new Promise((resolve, reject) => {
  reject(new Error('Error....'));
})
  .catch((err) => console.log(err))
  .then(() => console.log('Next Step by promise'));

window.addEventListener('unhandledrejection', (event) => {
  alert(event.promise);
  alert(event.reason);
});

new Promise(() => {
  throw new Error('Error...');
});

new Promise(function (resolve, reject) {
  throw new Error('Whoops!');
}).catch(alert);

const button = document.getElementById('btn_1');
const secondaryButton = document.getElementById('btn_2');

let promise_19 = new Promise((resolve, reject) => {
  let count = 0;
  button.onclick = () => {
    resolve('Timer is stop!');
    clearInterval(timer);
    button.style.background = '#7979';
  };
  let timer = setInterval(() => {
    count++;
    button.textContent = `Button ${count}`;
    if (count === 10) {
      reject('Stop!');
      clearInterval(timer);
      button.style.background = 'rgba(255,0,0, 0.5)';
    }
  }, 500);
});
let promise_20 = new Promise((resolve, reject) => {
  let count = 10;
  secondaryButton.onclick = () => {
    resolve('Timer 2 is stop!');
    clearInterval(timer);
    secondaryButton.style.background = '#7979';
  };
  let timer = setInterval(() => {
    count--;
    secondaryButton.textContent = `Button ${count}`;
    if (count === 0) {
      reject('Stop! 2');
      clearInterval(timer);
      secondaryButton.style.background = 'rgba(255,0,0, 0.5)';
    }
  }, 500);
});

Promise.all([promise, promise_2]).then((res) => console.log(res));

Promise.all([
  new Promise((res) => {
    setTimeout(() => {
      res(1);
    }, 3000);
  }),
  new Promise((res) => {
    setTimeout(() => {
      res(2);
    }, 2000);
  }),
  new Promise((res) => {
    setTimeout(() => {
      res(3);
    }, 1000);
  }),
]).then(console.log);

const promise_21 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Done!');
  }, 1500);
});

promise
  .then((res) => console.log(`Fulfilled: ${res}`))
  .catch((error) => console.log(`Rejected: ${error}`))
  .finally(() => console.log('Stop Promise work!'));

const promise_22 = Promise.reject(new Error('Error!'));
const promise_23 = 42;
const promise_24 = new Promise((res, rej) => {
  setTimeout(() => res(3), 1500);
});

Promise.all([promise_1, promise_2, promise_3])
  .then(console.log)
  .catch((err) => console.log(err));

const promise_25 = Promise.resolve('done');
const promise_26 = 42;
const promise_27 = new Promise((res, rej) => {
  setTimeout(() => res(3), 1500);
});

Promise.allSettled([promise_1, promise_2, promise_3])
  .then((res) => res.forEach((item) => console.log(item)))
  .catch((err) => console.log(err));

const promise_28 = Promise.reject('Rejected');
const promise_29 = Promise.reject('Rejected');
const promise_30 = Promise.reject('Rejected');

Promise.any([promise_1, promise_2, promise_3])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

const promise_31 = Promise.resolve('done');
const promise_32 = 42;
const promise_33 = new Promise((res, rej) => {
  setTimeout(() => res(3), 0);
});

Promise.race([promise_1, promise_2, promise_3])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

const API_DATA = 'https://jsonplaceholder.typicode.com/users';

const loadData = () => {
  return fetch(API_DATA)
    .then((response) => response.json())
    .then((result) => result)
    .catch((err) => {
      throw new Error(err);
    })
    .finally(() => console.log('Done!'));
};

loadData().then((res) => console.log(res));

const loadData_2 = async () => {
  try {
    const response = await fetch(API_DATA);
    return response.json();
  } catch (err) {
    throw new Error('Error!');
  } finally {
    console.log('Done!');
  }
};

(async () => {
  const data = await loadData_2();
  console.log(data);
})();

console.log(0);
Promise.resolve(1).then(console.log);
console.log(2);

(async () => {
  const result = await Promise.resolve(100);
  console.log(result);
})();

const users_2 = fetch('https://jsonplaceholder.typdicode.com/users');

users
  .then((res) => res.json())
  .then((users) => console.log(users))
  .catch((err) => console.log(err));

new Promise((resolve, reject) => {
  reject(new Error('Error...'));
}).catch(console.log);

new Promise((resolve, reject) => {
  resolve('ok');
})
  .then(() => {
    ddsdsds();
  })
  .catch(alert);

new Promise((resolve, reject) => {
  throw new Error('Rejected Error...');
})
  .catch((error) => {
    alert('Error is find, continue work!');
  })
  .then(() => {
    console.log('continue work!');
  });

new Promise((resolve, reject) => {
  throw new Error('Error!');
})
  .catch((err) => {
    if (err instanceof URIError) {
      //
    } else {
      alert("I don't to worked this error ");
    }
    throw err;
  })
  .then(() => {
    //
  })
  .catch((err) => {
    alert('NotFoundError: ' + err);
  });

window.addEventListener('unhandledrejection', (event) => {
  console.log(event.promise);
  console.log(event.reason);
});

new Promise(() => {
  throw new Error('Window Error...');
});

const promise_34 = new Promise((resolve, reject) => {
  reject(new Error('Error Rejected...'));
})
  .then(console.log)
  .catch((error) => console.log(error));

console.log(0);
new Promise((res, rej) => (console.log(1), res(2))).then((result) =>
  console.log(result)
);
console.log(3);

const increment = (arg) => {
  console.log(`I got: ${arg}`);
  return arg + 1;
};

Promise.resolve(1)
  .then(increment)
  .then(increment)
  .then((result) => console.log(result));

try {
  new Promise((resolve) => resolve(1)).then((res) => {
    throw new Error('Error...');
  });
} catch (err) {
  console.log(err.stack);
}

Promise.all([new Promise((res) => res(1)), new Promise((res) => res(2))]).then(
  (res) => console.log(res)
);

(async () => {
  const promise = await new Promise((res) => res('Done!')).then((res) =>
    console.log(res)
  );
})();

const promise_35 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('I go to the city');
  }, 1000);
})
  .then((result) => {
    return new Promise((resolve) => {
      console.log(result);
      setTimeout(() => {
        resolve(`${result}, I buy new telephone `);
      }, 1500);
    }).then((totalResult) => {
      console.log(totalResult);
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(`${totalResult}, I go to home`);
        }, 2000);
      });
    });
  })
  .then((data) => console.log(data));

new Promise((resolve, reject) => {
  dddda();
})
  .then(console.log)
  .catch((err) => console.log(err)); // work try catch in promise constructor

new Promise((resolve, reject) => {
  resolve();
})
  .then(() => {
    Dasdasda();
  })
  .catch((err) => console.log(err));

const getPromise_1 = (time, isResolve = true) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isResolve) {
        resolve(time);
      } else {
        reject(new Error('Error'));
      }
    }, time);
  });
};

Promise.any([
  getPromise_1(1000, false),
  getPromise_1(2000, false),
  getPromise_1(2500, false),
])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

const getPromise = (time, isResolved = true) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isResolved) {
        resolve(time);
      } else {
        reject(new Error('Error.....'));
      }
    }, time);
  });
};

Promise.any([getPromise(1000), getPromise(1500, false), getPromise(2000)]).then(
  (res) => console.log(res)
);

Promise.resolve(100).then(console.log);
Promise.reject(new Error('Err')).catch(console.log);

const users_4 = fetch('https://jsdonplaceholder.typicode.com/users');

users_4
  .then((response) => response.text())
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

new Promise((resolve, reject) => {
  reject(new Error('Rejected Error'));
}).catch((error) => console.log(error));

new Promise((resolve, reject) => {
  resolve(1);
})
  .then(() => {
    dasdadada();
  })
  .catch(alert);

new Promise((resolve, reject) => {
  throw new Error('Error');
})
  .catch(() => {
    alert('Error...');
  })
  .then(() => {
    alert('Continue to work promise');
  });

new Promise((resolve, reject) => {
  throw new Error('Error.....');
})
  .catch((err) => {
    if (err instanceof URIError) {
      //
    } else {
      alert("I don' to worked errors...");
    }
    throw err;
  })
  .then(() => {
    // don't work
  })
  .catch((err) => {
    alert(`Not defined Error ${err}`);
  });

new Promise(() => {
  ddasdadada;
}).catch((err) => console.log(err));

document.body.addEventListener('unhandledrejection', (event) => {
  alert(event.promise);
  alert(event.reason);
});

new Promise(() => {
  throw new Error('Error!!!!');
});

Promise.all([
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  }),
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(2);
    }, 2000);
  }),
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(3);
    }, 3000);
  }),
]).then((result) => {
  console.log(result);
});

let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://api.github.com/users/jeresig',
];

const requests = urls.map((url) => fetch(url));

Promise.all(requests).then((response) => {
  response.forEach((response) => alert(`${response.url} ${response.status}`));
});

let names = ['Roman', 'John', 'Antony'];

const requests_1 = names.map((name) =>
  fetch(`https://api.github.com/users/${name}`)
);

Promise.all(requests)
  .then((responses) => {
    for (let i = 0; i < responses.length; i++) {
      alert(`${responses[i].url} ${responses[i].status}`);
    }
    return responses;
  })
  .then((res) => Promise.all(res.map((r) => r.json())))
  .then((users) => users.forEach((user) => alert(user.name)));

Promise.all([
  new Promise((resolve) => setTimeout(() => resolve(0), 1000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1500)),
  new Promise((resolve) => setTimeout(() => resolve(2), 2000)),
])
  .then((res) => console.log(res))
  .catch(alert);

Promise.all([
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 2000);
  }),
  2,
  3,
]).then((res) => console.log(res));

let urls_3 = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://no-such-url',
];

Promise.allSettled(urls_3.map((url) => fetch(url))).then((results) => {
  results.forEach((result, num) => {
    if (result.status == 'fulfilled') {
      console.log(`${urls[num]}: ${result.value.status}`);
    }
    if (result.status == 'rejected') {
      console.log(`${urls[num]}: ${result.status.reason}`);
    }
  });
});

// Promise allSettled custom

if (!Promise.allSettled) {
  const rejectedHandler = (reason) => ({ status: 'rejected', reason });
  const resolveHandler = (value) => ({ status: 'fulfilled', value });

  Promise.allSettled = function (promises) {
    const convertedPromises = promises.map((p) =>
      Promise.resolve(p).then(resolveHandler, rejectedHandler)
    );
    return Promise.all(convertedPromises);
  };
}

Promise.race([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1500)),
  new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 1000)),
]).then(alert);

Promise.any([
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error('Упс!')), 1000)
  ),
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error('Упс!')), 1000)
  ),
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error('Упс!')), 1000)
  ),
]).then(console.log);

Promise.any([
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error('Ой!')), 1000)
  ),
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error('Помилка!')), 2000)
  ),
]).catch((error) => {
  console.log(error.constructor.name);
  console.log(error.errors[0]);
  console.log(error.errors[1]);
  console.log(error);
});

let cache = new Map();

const loadCached = (url) => {
  if (cache.has(url)) {
    return Promise.resolve(cache.get(url));
  }

  return fetch(url)
    .then((response) => response.text())
    .then((text) => {
      cache.set(url, text);
      return text;
    });
};
