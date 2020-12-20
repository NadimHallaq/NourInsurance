import React from 'react'

import SEO from '../components/seo'
import { Link} from 'gatsby-plugin-intl'
import Button from "@material-ui/core/Button"
import Container  from '@material-ui/core/Container'
import Typography  from '@material-ui/core/Typography'

const styles = {
  container: {
    minHeight: "100vh",
    padding: "0 0.5rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
}

const NotFoundPage = () => (
  <div>
    <SEO title="404: Not found" />
    <Container maxWidth="md" style={styles.container}>
        <Typography align="center" variant="h3">Sorry this page does not exist</Typography>
        <Button component={Link} to="/" variant="contained" color="primary">Go to main Page</Button>
    </Container>
    
  </div>
)

export default NotFoundPage
