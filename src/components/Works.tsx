const Works = () => {
  return (
    <section id="works" className="flex items-center justify-center py-4">
      <div className="container flex flex-col items-center justify-center pt-16 pb-32">
        <h2 className="text-5xl leading-[1] font-medium text-center w-3/6 mb-10">
          Selected works
        </h2>
        <div className="flex flex-col gap-12 w-full">
          <div className="flex gap-4 w-full h-96">
            <div className="rounded-3xl border border-black/5 dark:border-white/15 w-2/6 p-4">
              <h3 className="text-2xl font-medium">makromusic for Artists</h3>
            </div>
            <div className="w-full bg-neutral-50 dark:bg-neutral-950 border rounded-3xl border-black/5 dark:border-white/15">
              image
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Works