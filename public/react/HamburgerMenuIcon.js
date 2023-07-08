/*
'data:image/svg+xml,<svg xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width%3D"50" height%3D"100"><path fill%3D"%23849" d%3D"M0 0h50v100H0z"%2F><path fill%3D"%23e1d0e6" d%3D"M14 15h22v4H14zm0 8h22v4H14zm0 8h22v4H14z"%2F><path fill%3D"%23fff" d%3D"M14 65h22v4H14zm0 8h22v4H14zm0 8h22v4H14z"%2F><%2Fsvg>'
 
 */

// HamburgerMenuIcon() -> ReactElement
const HamburgerMenuIcon = ReactElement(() => {
  return Svg({
    xmlns: 'http://www.w3.org/2000/svg',
    width: '50',
    height: '100',
    viewBox: '0 0 50 100',
  }, [
    Path({
      // fill: '#65799b',
      fill: 'transparent',
      d: 'M0 0h50v100H0z',
    }),
    Path({
      fill: '#b2c1db',
      d: 'M14 15h22v4H14zm0 8h22v4H14zm0 8h22v4H14z',
    }),
    Path({
      // fill: '#fff',
      fill: '#65799b',
      d: 'M14 65h22v4H14zm0 8h22v4H14zm0 8h22v4H14z',
    }),
  ])
})

export default HamburgerMenuIcon
