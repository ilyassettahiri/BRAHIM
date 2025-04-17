import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import { useCountdownDate } from 'src/hooks/use-countdown';

// ----------------------------------------------------------------------

const timeUnits = ['jours', 'heures', 'minutes', 'secondes'];

// ----------------------------------------------------------------------

export function ProductCountdownBlock({
  sx,
  expired,
  slotProps,
  hidejours,
  hideheures,
  hideminutes,
  hidesecondes,
  width = 56,
  height = 44,
  labelPlacement = 'bottom',
  ...other
}) {
  const countdown = useCountdownDate(expired);

  const shouldHideUnit = (unit) => {
    switch (unit) {
      case 'jours':
        return hidejours;
      case 'heures':
        return hideheures;
      case 'minutes':
        return hideminutes;
      case 'secondes':
        return hidesecondes;
      default:
        return false;
    }
  };

  const renderLabel = (unit) => {
    if (labelPlacement === 'inline') {
      return (
        <Box component="span" sx={{ opacity: 0.48, typography: 'subtitle2', ...slotProps?.label }}>
          {unit.charAt(0)}
        </Box>
      );
    }
    if (labelPlacement === 'bottom') {
      return (
        <Box
          component="span"
          sx={{
            textAlign: 'center',
            typography: 'caption',
            color: 'text.secondary',
            ...slotProps?.label,
          }}
        >
          {unit}
        </Box>
      );
    }
    return null;
  };

  return (
    <Stack
      gap={1}
      direction="row"
      justifyContent="center"
      divider={
        <Box component="strong" sx={{ lineHeight: `${height}px` }}>
          :
        </Box>
      }
      sx={{ typography: 'subtitle1', ...sx }}
      {...other}
    >
      {timeUnits.map((unit) => {
        if (shouldHideUnit(unit)) return null;

        return (
          <Box key={unit} gap={1} display="flex" flexDirection="column">
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              sx={{
                width,
                height,
                gap: 0.25,
                borderRadius: 1,
                bgcolor: 'grey.800',
                color: 'common.white',
                ...slotProps?.value,
              }}
            >
              {countdown[unit]}
              {labelPlacement === 'inline' && renderLabel(unit)}
            </Box>

            {labelPlacement === 'bottom' && renderLabel(unit)}
          </Box>
        );
      })}
    </Stack>
  );
}
