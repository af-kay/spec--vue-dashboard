import isNullish from './isNullish';

export default function isNotNullish<T>(
  something: undefined | null | T
): something is T {
  return !isNullish(something);
}
