export function Button({ className = '', children, ...props }) {
  return (
    <button className={`inline-flex items-center justify-center rounded-md px-4 py-2 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent focus:ring-sky-400 ${className}`} {...props}>
      {children}
    </button>
  )
}
