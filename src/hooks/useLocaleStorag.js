import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export const useLocalStorage = (key, defaultValue) => {
  const state = useSelector(() => {
    return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return state;
};
