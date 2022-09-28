# useDarkModePreference hook

A custom hook to watch changes in dark mode color scheme preference.

## Basic Usage

```js
import { useDarkModePreference } from './useDarkModePreference';

const { prefersDark } = useDarkModePreference();

const MyComponent = () => {
  return (
    <div className={prefersDark ? 'dark-theme' : 'light-theme'}>
      ...some wondrous content goes here
    </div>
  );
};
```
