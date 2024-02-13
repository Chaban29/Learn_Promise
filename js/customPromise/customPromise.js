'use strict';

const FULFILLED = 'fulfilled';
const PENDING = 'pending';
const REJECTED = 'rejected';

class MyPromise {
  constructor(executor) {
    this.state = PENDING;
    this.result = undefined;
    this.onFulfilledFn = [];
    this.onRejectedFn = [];

    const resolve = (value) => {
      if (this.state === PENDING) {
        this.state = FULFILLED;
        this.result = value;
        this.onFulfilledFn.forEach((fn) => fn(value));
      }
    };
    const reject = (error) => {
      if (this.state === PENDING) {
        this.state = REJECTED;
        this.result = error;
        this.onRejectedFn.forEach((fn) => fn(error));
      }
    };
    try {
      executor(resolve, reject);
    } catch (err) {
      reject('Error');
    }
  }
  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      if (this.state === PENDING) {
        if (onFulfilled) {
          this.onFulfilledFn.push(() => {
            try {
              const newResult = onFulfilled(this.result);
              resolve(newResult);
            } catch (error) {
              reject(error);
            }
          });
        }
        if (onRejected) {
          this.onRejectedFn.push(() => {
            try {
              const newResult = onRejected(this.result);
              reject(newResult);
            } catch (error) {
              reject(error);
            }
          });
        }
      }

      if (onFulfilled && this.state === FULFILLED) {
        try {
          const newResult = onFulfilled(this.result);
          resolve(newResult);
        } catch (error) {
          reject(error);
        }
        return;
      }
      if (onRejected && this.state === REJECTED) {
        try {
          const newResult = onRejected(this.result);
          reject(newResult);
        } catch (error) {
          reject(error);
        }
        return;
      }
    });
  }
  catch(onRejected) {
    return this.then(null, onRejected);
  }
}

// Test custom Promise;

console.log(1);
const promise_1 = new MyPromise((resolve, reject) => {
  console.log(2);
  resolve('Resolved');
});
console.log(3);

console.log(promise_1);

const promiseTest = new MyPromise((resolve, reject) => {
reject('error');
});

console.log(promiseTest);

const promiseTest_1 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('Success');
  }, 1000);
});

setTimeout(() => {
  console.log(promiseTest_1);
}, 1500);

const promiseTest_2 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Error'));
  }, 2000);
}).catch((error) => console.log(error));

const promise = new MyPromise((resolve, reject) => {
  setTimeout(() => resolve('success'), 1000);
}).then((value) => {
    return console.log(value + ' 1');
  }).then((value) => {
    return console.log(value + ' 2');
  }).then((value) => {
    return console.log(value + ' 3');
  });
