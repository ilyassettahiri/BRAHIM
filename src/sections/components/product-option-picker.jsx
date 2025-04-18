import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function ProductOptionPicker({
  sx,
  color,
  memory,
  options,
  onSelectColor,
  onSelectMemory,
  ...other
}) {
  const renderColorOptions = (
    <Box gap={1} display="flex" flexWrap="wrap">
      {options.colors.map((option) => {
        const selected = color === option.value;

        return (
          <Box
            key={option.value}
            onClick={() => onSelectColor(option.value)}
            sx={{
              display: 'flex',
              alignItems: 'center',
              px: 2,
              py: 1.5,
              borderRadius: 1,
              cursor: 'pointer',
              border: (theme) =>
                `1px solid ${
                  selected
                    ? theme.palette.primary.main
                    : varAlpha(theme.vars.palette.grey['500Channel'], 0.24)
                }`,
            }}
          >
            {/* color swatch */}
            <Box
              sx={{
                width: 20,
                height: 20,
                mr: 0.75,
                borderRadius: 0.5,
                bgcolor: option.label,
                position: 'relative',
              }}
            >
              <Iconify
                icon="eva:checkmark-fill"
                sx={{
                  position: 'absolute',
                  inset: 0,
                  m: 'auto',
                  width: 14,
                  height: 14,
                  color: 'common.white',
                  transform: selected ? 'scale(1)' : 'scale(0)',
                  transition: (theme) =>
                    theme.transitions.create(['transform'], {
                      easing: theme.transitions.easing.sharp,
                      duration: theme.transitions.duration.shortest,
                    }),
                }}
              />
            </Box>

            {/* color name */}
            <Typography variant="subtitle2" sx={{ textTransform: 'capitalize' }}>
              {option.value}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );


  const renderMemoryOptions = (
    <Box gap={1.5} display="flex" flexWrap="wrap">
      {options.memory.map((option) => {
        const selected = memory === option.value;

        return (
          <Box
            key={option.value}
            onClick={() => onSelectMemory(option.value)}
            sx={{
              py: 1,
              px: 2.5,
              borderRadius: 1,
              cursor: 'pointer',
              typography: 'subtitle2',
              border: (theme) =>
                `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.24)}`,
              ...(selected && {
                boxShadow: (theme) => `0 0 0 2px ${theme.vars.palette.text.primary}`,
              }),
            }}
          >
            {option.label}
          </Box>
        );
      })}
    </Box>
  );

  return (
    <Box gap={3} display="flex" flexDirection="column" sx={sx} {...other}>
      <div>
        <Typography variant="subtitle2" sx={{ mb: 1.5 }}>
        Choisir la couleur

        </Typography>
        {renderColorOptions}
      </div>

      <div>
        <Typography variant="subtitle2" sx={{ mb: 1.5 }}>
        Choisir la pointure

        </Typography>
        {renderMemoryOptions}
      </div>
    </Box>
  );
}
