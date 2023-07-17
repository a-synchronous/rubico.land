import DownArrowSvg from './DownArrowSvg.js'

/**
 * @name BlogPost
 *
 * @synopsis
 * ```coffeescript [specscript]
 * BlogPost(props => {
 *   metadata: {
 *     title: string,
 *     author: string,
 *     datePublished: string,
 *     href: string,
 *     description: string,
 *   },
 *   path: string,
 *   goto: function,
 *   activeBlogPostHref: string,
 *   setActiveBlogPostHref: function,
 *   backHref?: string,
 * }, children Array) -> ReactElement
 * ```
 */
const BlogPost = ReactElement(props => {
  const {
    metadata,
    path,
    goto,
    activeBlogPostHref,
    setActiveBlogPostHref,
    backHref = '/blog',
    children,
  } = props

  const {
    title,
    author,
    datePublished,
    href,
    description,
    coverImageUrl,
  } = metadata

  const isActive = path == href

  const [transition, setTransition] = useState('none')

  useEffect(() => {
    if (isActive) {
      setTransition('start')
      setTimeout(() => {
        setTransition('end')
      }, 360)
    }
  }, [isActive])

  console.log('BlogPost', { activeBlogPostHref })

  const onLinkClick = () => {
    if (isActive) {
      goto(backHref)
      setActiveBlogPostHref(null)
      setTransition('none')
    } else {
      setActiveBlogPostHref(href)
      goto(href)
    }
  }

  return Div({
    key: href,
    class: (
      activeBlogPostHref == null ? 'blog-post'
      : isActive ? 'blog-post active'
      : 'blog-post inactive'
    ),
  }, [
    A({
      href: isActive ? backHref : href,
      class: isActive ? 'active' : '',
      onClick(event) {
        event.preventDefault()
        onLinkClick()
      },
    }, [
      H1(title),
      DownArrowSvg(),
    ]),

    P(`${datePublished} by ${author}`),

    isActive ? [] : [
      ...coverImageUrl == null ? [] : [
        Div({ class: 'cover' }, [
          Img({
            src: coverImageUrl,
            alt: coverImageUrl,
          }),
        ]),
      ],

      H3(description),

      Button({
        class: 'read-more',
        onClick(event) {
          event.preventDefault()
          onLinkClick()
        },
      }, 'Read more'),
    ],

    Div({
      class: transition == 'start' ? 'fade-in-out'
        : isActive && transition == 'end' ? 'fade-in-out transition-end'
        : 'fade-in-out',
    }, isActive ? [children] : []),
  ])
})

export default BlogPost
