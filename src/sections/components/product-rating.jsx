import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { svgIconClasses } from '@mui/material/SvgIcon';

// ----------------------------------------------------------------------

export function ProductRating({ value, label, sx, ...other }) {
  return (
    <Box gap={0.5} display="flex" alignItems="center" sx={sx} {...other}>
      <Rating
        readOnly
        value={value}
        precision={0.5}
        sx={{
          [`& .${svgIconClasses.root}`]: {
            width: 20,
            height: 20,
          },
        }}
      />

      {label && (
        <Typography variant="body" sx={{ color: 'text.disabled' }}>
          ({label})
        </Typography>
      )}
    </Box>
  );
}
