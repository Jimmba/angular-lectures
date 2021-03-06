import { Observable } from 'rxjs';

const source = Observable.create(observer => {
  let count = 0;
  console.log('Observable created');

  const timer = setInterval(() => {
    observer.next(count);
    count++;
  }, 1000);

  return () => {
    console.log('Observable destroyed');
    clearInterval(timer);
  };
});

const subscription = source.subscribe(
  value => console.log('next: ', value),
  error => console.error('error: ', error),
  () => console.log('complete')
);

setTimeout(() => subscription.unsubscribe(), 4500);
