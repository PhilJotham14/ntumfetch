import { Doughnut } from 'react-chartjs-2';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  colors,
  useTheme
} from '@material-ui/core';

const PopularProducts = (props) => {
  const theme = useTheme();

  const data = {
    datasets: [
      {
        data: [57, 10, 20, 13],
        backgroundColor: [
          colors.green[500],
          colors.red[600],
          colors.orange[600],
          colors.blue[600]
        ],
        borderWidth: 8,
        borderColor: colors.common.white,
        hoverBorderColor: colors.common.white
      }
    ],
    labels: ['Vegetables', 'Meat', 'Fruit', 'Fish']
  };

  const options = {
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: false
    },
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
      backgroundColor: theme.palette.background.paper,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: 'index',
      titleFontColor: theme.palette.text.primary
    }
  };

  const products = [
    {
      title: 'Vegetables',
      value: 57,
      color: colors.green[500]
    },
    {
      title: 'Meat',
      value: 10,
      color: colors.red[600]
    },
    {
      title: 'Fruit',
      value: 20,
      color: colors.orange[600]
    },
    {
      title: 'Fish',
      value: 13,
      color: colors.blue[600]
    }
  ];

  return (
    <Card {...props}>
      <CardHeader title="Popular Products" />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 300,
            position: 'relative'
          }}
        >
          <Doughnut
            data={data}
            options={options}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 2
          }}
        >
          {products.map(({
            color,
            title,
            value
          }) => (
            <Box
              key={title}
              sx={{
                p: 1,
                textAlign: 'center'
              }}
            >
              <Typography
                color="textPrimary"
                variant="body1"
              >
                {title}
              </Typography>
              <Typography
                style={{ color }}
                variant="h2"
              >
                {value}
                %
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default PopularProducts;
