export function isObjectEquivalent(a: Object, b: Object) {
   const keysA = Object.keys(a)
   const keysB = Object.keys(a)

   if (keysA.length !== keysB.length) return false

   return keysA.every((key) => {
      return (a as any)[key] === (b as any)[key]
   })
}
