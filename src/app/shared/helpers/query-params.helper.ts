export function buildQueryParams(object: any): string {
  const urlSeachParams = new URLSearchParams();

  Object.keys(object).forEach((key) => {
    if (
      object[key] === 'undefined' ||
      object[key] === 'null' ||
      (typeof object[key] !== 'boolean' && !object[key]) ||
      (Array.isArray(object[key]) && !object[key].length)
    )
      return;

    if (Array.isArray(object[key])) {
      object[key].forEach((value: any) => {
        urlSeachParams.append(key, value.toString());
      });
    } else {
      urlSeachParams.append(key, object[key]);
    }
  });
  return urlSeachParams.toString();
}
