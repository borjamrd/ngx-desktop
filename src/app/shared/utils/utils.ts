/**
 * Removes and item from an array. Returns a new array instance (it doesn't mutate the source array).
 * @param array source array to be returned without the element to remove
 * @param condition function that will return true for the item that we want to remove
 */
export function ktdArrayRemoveElement<T>(
  array: T[],
  condition: (item: T) => boolean,
) {
  const arrayCopy = [...array];
  const index = array.findIndex((item) => condition(item));
  if (index > -1) {
    arrayCopy.splice(index, 1);
  }
  return arrayCopy;
}


export const transitions: { name: string; value: string }[] = [
  {
    name: 'ease',
    value: 'transform 500ms ease, width 500ms ease, height 500ms ease',
  },
  {
    name: 'ease-out',
    value:
      'transform 500ms ease-out, width 500ms ease-out, height 500ms ease-out',
  },
  {
    name: 'linear',
    value: 'transform 500ms linear, width 500ms linear, height 500ms linear',
  },
  {
    name: 'overflowing',
    value:
      'transform 500ms cubic-bezier(.28,.49,.79,1.35), width 500ms cubic-bezier(.28,.49,.79,1.35), height 500ms cubic-bezier(.28,.49,.79,1.35)',
  },
  {
    name: 'fast',
    value: 'transform 200ms ease, width 200ms linear, height 200ms linear',
  },
  {
    name: 'slow-motion',
    value:
      'transform 1000ms linear, width 1000ms linear, height 1000ms linear',
  },
  { name: 'transform-only', value: 'transform 500ms ease' },
];
