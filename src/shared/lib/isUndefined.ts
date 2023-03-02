export default function isUndefined(
  something: unknown
): something is undefined {
  return something === undefined;
}
