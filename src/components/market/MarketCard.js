import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  Button
} from '@material-ui/core';

const MarketCard = ({ market, ...rest }) => (
  <Card
    sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }}
    {...rest}
  >
    <CardContent>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          pb: 3
        }}
      >
        <Avatar
          alt="Market"
          src={market.media}
          variant="square"
        />
      </Box>
      <Typography
        align="center"
        color="textPrimary"
        gutterBottom
        variant="h4"
      >
        {market.title}
      </Typography>
      <Typography
        align="center"
        color="textPrimary"
        variant="body1"
      >
        {market.description}
      </Typography>
    </CardContent>
    <Box sx={{ flexGrow: 1 }} />
    <Divider />
    <Box sx={{ p: 2 }}>
      <Grid
        container
        spacing={2}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid
          item
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <Button
            color="textSecondary"
            display="inline"
            sx={{ pl: 1 }}
            variant="body2"
          >
            View Market
          </Button>
        </Grid>
        <Grid
          item
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <Button
            color="textSecondary"
            display="inline"
            sx={{ pl: 1 }}
            variant="body2"
          >
            Deactivate
          </Button>
        </Grid>
      </Grid>
    </Box>
  </Card>
);

MarketCard.propTypes = {
  market: PropTypes.object.isRequired
};

export default MarketCard;
