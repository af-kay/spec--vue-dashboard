export default function isNullish<T>(
  something: undefined | null | T
): something is undefined | null {
  return something === null || something === undefined;
}
