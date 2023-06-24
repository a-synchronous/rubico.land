// (path string, content ReactElement) => ReactElement
const BlogItem = ({
  title, author, published, path: blogItemPath, content, back = '/blog',
}) => {
  console.log(content)
  return ReactElement(props => {
    const { goto, path, children } = props,
      isExpanded = path.endsWith('/')
        ? (path == `${blogItemPath}/`)
        : (path == blogItemPath),
      [transition, setTransition] = useState('none')

    useEffect(() => {
      if (isExpanded) {
        setTransition('start')
        setTimeout(() => {
          setTransition('end')
        }, 360)
      }
    }, [isExpanded])

    return Div({ className: 'blog-item' }, [
      isExpanded ? Span({ id: 'active-spacer' }) : Span(),
      A({
        href: isExpanded ? back : blogItemPath,
        className: isExpanded ? 'active' : '',
        onClick(event) {
          event.preventDefault()
          isExpanded ? goto(back) : goto(blogItemPath)
        },
      }, [
        H1(title),
        isExpanded ? Img({
          className: 'expander-arrow',
          src: '/assets/down-arrow-black.svg',
          alt: 'down-arrow-black',
        }) : Span()
      ]),
      P({ class: isExpanded ? '' : 'inactive' }, `${published} by ${author}`),

      Div({
        className: transition == 'start' ? 'fade-in-out'
          : isExpanded && transition == 'end' ? 'fade-in-out transition-end'
          : 'fade-in-out',
      }, isExpanded ? [content] : []),
    ])
  })
}

export default BlogItem
