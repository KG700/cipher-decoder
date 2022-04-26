export const alphabet = Array.from(Array(26)).map((_, i) =>
  String.fromCharCode(i + 65)
);

export const isUpperCase = (char) => char === char.toUpperCase();
