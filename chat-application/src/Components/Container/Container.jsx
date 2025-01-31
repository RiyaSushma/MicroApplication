function Container({ children, background }) {
  return (
    <div className={`relative h-full w-full p-3 shadow-custom flex flex-1 flex-col ${background} rounded-2xl`}>{ children }</div>
  )
}

export default Container;