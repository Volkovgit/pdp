module.exports = (func) => {
  const cache = {};
  if (typeof func != 'function') return undefined;
  return (...args) => {
    if (args.length == 0) return null;
    const key = args[0];
    if (key in cache) {
      return cache[key];
    } else {
      if (args.length == 1 && typeof args[0] == 'object') args = args[0];
      const countResult = func.apply(args, args);
      cache[key] = countResult;
      return countResult;
    }
  };
};
