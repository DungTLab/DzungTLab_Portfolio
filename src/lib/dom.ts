export function required<T extends Element>(selector: string): T {
  const element = document.querySelector<T>(selector);
  if (!element) throw new Error(`Missing required portfolio element: ${selector}`);
  return element;
}
