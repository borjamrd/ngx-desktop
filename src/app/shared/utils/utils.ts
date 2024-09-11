import { SystemElement } from "../types/system-element.type";

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



export function flattenElements(elements: SystemElement[]): SystemElement[] {
  return elements.reduce((acc: SystemElement[], element: SystemElement) => {
    acc.push(element);
    if (element.hasChildren && element.children) {
      acc.push(...flattenElements(element.children));
    }
    return acc;
  }, []);
}

export const mediaQueries = {
  XXS: 250,
  XS: 599,
  SM: 959,
  MD: 1279,
  LG: 1919,
  XL: 1920
}
