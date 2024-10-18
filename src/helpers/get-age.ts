export function getAge(dtBirth: Date, today: Date): number {
   let differenceYears = today.getFullYear() - dtBirth.getFullYear()
   if (
      new Date(today.getFullYear(), today.getMonth(), today.getDate()) <
      new Date(today.getFullYear(), dtBirth.getMonth(), dtBirth.getDate())
   )
      differenceYears--
   return differenceYears
}
