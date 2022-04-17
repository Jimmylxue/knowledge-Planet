import { useState, useCallback } from 'react';

const isFunction = (fn: any): boolean => {
  return typeof fn === 'function';
};

function useLocalStorageState<T>(key: string, defaultValue: T | (() => T)) {
  const [state, setState] = useState<T>(() => {
    try {
      // 判断缓存中是否有 key对应的值
      const localState = JSON.parse(localStorage.getItem(key)!);
      if (localState) {
        return localState;
      }
    } catch (error) {
      console.warn('error', error);
    }
    // @ts-ignore
    return isFunction(defaultValue) ? defaultValue() : defaultValue;
  });

  const updateState: typeof setState = useCallback((value) => {
    if (isFunction(value)) {
      // setState的值是一个函数
      setState((val) => {
        const nextValue = (value as (value: T) => T)(val);
        localStorage.setItem(key, JSON.stringify(nextValue));
        return nextValue;
      });
      return;
    }

    if (typeof value === 'undefined') {
      localStorage.removeItem(key);
      return;
    }

    setState(value);
    localStorage.setItem(key, JSON.stringify(value));
  }, []);

  return [state, updateState] as const;
}

export default useLocalStorageState;
