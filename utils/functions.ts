export const sortMenuItems = (a: string, b: string) => {
  const dayNum1 = parseInt(a.replace("day", ""))
  const dayNum2 = parseInt(b.replace("day", ""))
  return dayNum1 - dayNum2
}

