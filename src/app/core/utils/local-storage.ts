export function saveState(key: string, state: any): void {
  try {
    const serialized = JSON.stringify(state);
    localStorage.setItem(key, serialized);
  } catch (e) {
    console.error('Error saving state', e);
  }
}

export function loadState<T>(key: string): T | undefined {
  try {
    const serialized = localStorage.getItem(key);
    if (!serialized) return undefined;
    return JSON.parse(serialized) as T;
  } catch (e) {
    console.error('Error loading state', e);
    return undefined;
  }
}
