const Video = () => {
  return (
    <div className="relative">
      <video autoPlay className="w-full h-full" loop muted>
        <source src="/moon.mp4" type="video/mp4" />
        <p> Your browser does not support the video tag.</p>
      </video>
    </div>
  )
}

export default Video
