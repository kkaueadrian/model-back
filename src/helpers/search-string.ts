export function searchString(string: string | undefined, fetchedString: string | undefined) {
   if (!string || !fetchedString) {
      return false
   }

   const regexString = new RegExp(
      string
         .toLowerCase()
         .normalize('NFD')
         .replace(/[\u0300-\u036f]/g, ''),
      'gim'
   )

   const fetchedStringBase = fetchedString
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')

   return regexString.test(fetchedStringBase)
}
