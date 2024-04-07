export function isValidLatitude(lat: number | string): boolean {
  return !isNaN(Number(lat)) && Number(lat) >= -90 && Number(lat) <= 90
}

export function isValidLongitude(lon: number | string): boolean {
  return !isNaN(Number(lon)) && Number(lon) >= -180 && Number(lon) <= 180
}
