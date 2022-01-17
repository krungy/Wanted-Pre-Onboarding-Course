import { useCallback, useEffect, useRef } from 'react';

const useIntervalFn = (fn, ms) => {
  const intervalId = useRef();
  // 함수를 ref callback으로 받아온다면 중간에 fn이 변하더라도 인터벌이 중단되지 않음
  const callback = useRef(fn);

  // 함수가 변했을 경우 동작
  useEffect(() => {
    callback.current = fn;
  }, [fn]);

  const run = useCallback(() => {
    intervalId.current && clearInterval(intervalId.current);

    // interval 시작
    intervalId.current = setInterval(() => {
      callback.current();
    }, ms);
  }, [ms]);

  const clear = useCallback(() => {
    intervalId.current && clearInterval(intervalId.current);
  }, []);

  useEffect(() => clear, [clear]);

  return [run, clear];
};

export default useIntervalFn;
