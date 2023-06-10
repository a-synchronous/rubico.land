const Analytics = {
  goto(path) {
    gtag('event', 'page_view', { page_path: path })
  },
  runExample(code) {
    gtag('event', 'run_example', { code })
  },
}

export default Analytics
