import React from 'react'
import { Link } from 'react-router'
import { Container, Grid, Span } from 'react-responsive-grid'
import { prefixLink } from 'gatsby-helpers'
import includes from 'underscore.string/include'
import { colors, activeColors } from 'utils/colors'

import typography from 'utils/typography'
import { config } from 'config'

// Import styles.
import 'css/main.css'
import 'css/github.css'

const { rhythm, adjustFontSizeTo } = typography

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.object,
    }
  },
  render () {
    // const docsActive = includes(this.props.location.pathname, '/docs/')
    const faqActive = includes(this.props.location.pathname, '/faq/')
    const blogActive = includes(this.props.location.pathname, '/blog/')
    const ueberunsActive = includes(this.props.location.pathname, '/ueber-uns/')
    const sicherheitActive = includes(this.props.location.pathname, '/sicherheit/')
    const kostenActive = includes(this.props.location.pathname, '/kosten/')
    const anlagekonzeptActive = includes(this.props.location.pathname, '/anlagekonzept/')

    return (
      <div>
        <div
          style={{
            background: colors.bg,
            color: colors.fg,
            marginBottom: rhythm(1.5),
          }}
        >
          <Container
            style={{
              maxWidth: 960,
              paddingLeft: rhythm(3/4),
            }}
          >
            <Grid
              columns={12}
              style={{
                padding: `${rhythm(3/4)} 0`,
              }}
            >
              <Span
                columns={4}
                style={{
                  height: 24, // Ugly hack. How better to constrain height of div?
                }}
              >
                <Link
                  to={prefixLink('/')}
                  style={{
                    textDecoration: 'none',
                      color: 'white',
                    fontSize: adjustFontSizeTo('25.5px').fontSize,
                  }}
                >
                  {config.siteTitle}
                </Link>
              </Span>
              <Span columns={8} last>
                <Link
                    to={prefixLink('/faq/')}
                    style={{
                        background: faqActive ? activeColors.bg : colors.bg,
                        color: 'white',
                        float: 'right',
                        textDecoration: 'none',
                        paddingLeft: rhythm(1/2),
                        paddingRight: rhythm(1/2),
                        paddingBottom: rhythm(3/4),
                        marginBottom: rhythm(-1),
                        paddingTop: rhythm(1),
                        marginTop: rhythm(-1),
                    }}
                >
                  FAQ
                </Link>
              <Link
                  to={prefixLink('/blog/')}
                  style={{
                      background: blogActive ? activeColors.bg : colors.bg,
                      color: 'white',
                      float: 'right',
                      textDecoration: 'none',
                      paddingLeft: rhythm(1/2),
                      paddingRight: rhythm(1/2),
                      paddingBottom: rhythm(3/4),
                      marginBottom: rhythm(-1),
                      paddingTop: rhythm(1),
                      marginTop: rhythm(-1),
                  }}
                >
                  Blog
                </Link>
                <Link
                  to={prefixLink('/ueber-uns/')}
                  style={{
                    background: ueberunsActive ? activeColors.bg : colors.bg,
                    color: 'white',
                    float: 'right',
                    textDecoration: 'none',
                    paddingLeft: rhythm(1/2),
                    paddingRight: rhythm(1/2),
                    paddingBottom: rhythm(3/4),
                    marginBottom: rhythm(-1),
                    paddingTop: rhythm(1),
                    marginTop: rhythm(-1),
                  }}
                >
                  Über uns
                </Link>
                <Link
                  to={prefixLink('/sicherheit/')}
                  style={{
                    background: sicherheitActive ? activeColors.bg : colors.bg,
                      color: 'white',
                    float: 'right',
                    textDecoration: 'none',
                    paddingLeft: rhythm(1/2),
                    paddingRight: rhythm(1/2),
                    paddingBottom: rhythm(3/4),
                    marginBottom: rhythm(-1),
                    paddingTop: rhythm(1),
                    marginTop: rhythm(-1),
                  }}
                >
                  Sicherheit
                </Link>
                <Link
                  to={prefixLink('/kosten/')}
                  style={{
                    background: kostenActive ? activeColors.bg : colors.bg,
                      color: 'white',
                    float: 'right',
                    textDecoration: 'none',
                    paddingLeft: rhythm(1/2),
                    paddingRight: rhythm(1/2),
                    paddingBottom: rhythm(3/4),
                    marginBottom: rhythm(-1),
                    paddingTop: rhythm(1),
                    marginTop: rhythm(-1),
                  }}
                >
                  Kosten
                </Link>
                <Link
                  to={prefixLink('/anlagekonzept/')}
                  style={{
                    background: anlagekonzeptActive ? activeColors.bg : colors.bg,
                      color: 'white',
                    float: 'right',
                    textDecoration: 'none',
                    paddingLeft: rhythm(1/2),
                    paddingRight: rhythm(1/2),
                    paddingBottom: rhythm(3/4),
                    marginBottom: rhythm(-1),
                    paddingTop: rhythm(1),
                    marginTop: rhythm(-1),
                  }}
                >
                  Anlagekonzept
                </Link>
              </Span>
            </Grid>
          </Container>
        </div>
        <Container
          style={{
            maxWidth: 960,
            padding: `${rhythm(1)} ${rhythm(3/4)}`,
            paddingTop: 0,
          }}
        >
          {this.props.children}
        </Container>
      </div>
    )
  },
})
