// Usage
// className={({ selected }) =>
//   classNames(
//     selected
//       ? 'text-gray-900 bg-gray-100 hover:bg-gray-200'
//       : 'text-gray-500 hover:text-gray-900 bg-white hover:bg-gray-100',
//     'px-3 py-1.5 border border-transparent text-sm font-medium rounded-md'
//   )
// }
export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
