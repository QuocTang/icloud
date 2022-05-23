import React from 'react'
import styled from 'styled-components'
import "../App.css"
import { mobile } from '../reponsive'

const Container = styled.div`
    height: 44px;
    background-color: #323232;
    display: flex;
`

const Left = styled.div`
    flex: 1;
    margin-left: 18px;
`

const Right = styled.div`
    margin-right: 16px;
`

const Nav = () => {
  return (
    <Container>
        <Left><svg xmlns="http://www.w3.org/2000/svg" width="16" height="44" viewBox="0 0 16 44">
            <path d="M8.02 16.23c-.73 0-1.86-.83-3.05-.8-1.57.02-3.01.91-3.82 2.32-1.63 2.83-.42 
            7.01 1.17 9.31.78 1.12 1.7 2.38 2.92 2.34 1.17-.05 1.61-.76 3.03-.76 1.41 0 1.81.76 
            3.05.73 1.26-.02 2.06-1.14 2.83-2.27.89-1.3 1.26-2.56 1.28-2.63-.03-.01-2.45-.94-2.48-3.74-.02-2.34
            1.91-3.46 2-3.51-1.1-1.61-2.79-1.79-3.38-1.83-1.54-.12-2.83.84-3.55.84zm2.6-2.36c.65-.78 1.08-1.87.96-2.95-.93.04-2.05.62-2.72
            1.4-.6.69-1.12 1.8-.98 2.86 1.03.08 2.09-.53 2.74-1.31"></path></svg>
        </Left>

        <Right>
        <svg viewBox="0 0 99.6097412109375 99.6572265625" width="24" height="44"  version="1.1" xmlns="http://www.w3.org/2000/svg" classname=" glyph-box"><g transform="matrix(1 0 0 1 -8.740283203125045 85.05859375)"><path d="M 58.5449 14.5508 C 85.791 14.5508 108.35 -8.05664 108.35 -35.2539 C 108.35 -62.5 85.7422 -85.0586 58.4961 -85.0586 C 31.2988 -85.0586 8.74023 -62.5 8.74023 -35.2539 C 8.74023 -8.05664 31.3477 14.5508 58.5449 14.5508 Z M 58.5449 6.25 C 35.498 6.25 17.0898 -12.207 17.0898 -35.2539 C 17.0898 -58.3008 35.4492 -76.7578 58.4961 -76.7578 C 81.543 -76.7578 100 -58.3008 100.049 -35.2539 C 100.098 -12.207 81.5918 6.25 58.5449 6.25 Z M 57.5195 -25.1465 C 59.9609 -25.1465 61.4746 -26.6602 61.4746 -28.6133 L 61.4746 -29.1992 C 61.4746 -31.9336 63.0371 -33.6426 66.4551 -35.8887 C 71.1914 -39.0137 74.5605 -41.8945 74.5605 -47.7051 C 74.5605 -55.8594 67.334 -60.2051 59.0332 -60.2051 C 50.6348 -60.2051 45.1172 -56.25 43.7988 -51.7578 C 43.5547 -50.9277 43.3594 -50.1465 43.3594 -49.3164 C 43.3594 -47.168 45.1172 -45.9473 46.7285 -45.9473 C 49.5117 -45.9473 49.9512 -47.4609 51.5137 -49.2676 C 53.125 -51.9531 55.4688 -53.5645 58.7402 -53.5645 C 63.1836 -53.5645 66.0645 -51.0742 66.0645 -47.3145 C 66.0645 -43.9941 64.0137 -42.3828 59.7656 -39.4531 C 56.25 -37.0117 53.6133 -34.4238 53.6133 -29.6387 L 53.6133 -29.0039 C 53.6133 -26.416 55.0293 -25.1465 57.5195 -25.1465 Z M 57.4219 -10.5469 C 60.2539 -10.5469 62.6953 -12.793 62.6953 -15.625 C 62.6953 -18.5059 60.3027 -20.7031 57.4219 -20.7031 C 54.541 -20.7031 52.1484 -18.457 52.1484 -15.625 C 52.1484 -12.8418 54.5898 -10.5469 57.4219 -10.5469 Z"></path></g></svg>
       
        </Right>
        
    </Container>
  )
}

export default Nav