import { Box, Typography } from "@mui/material";
const Menu = () => {
  return (
    <>
      <Box>
        <Typography
          variant="h4"
          sx={{
            bgcolor: "secondary.dark",
            color: "white",
            fontFamily: "Montserrat",
          }}
        >
          Theme MUI
        </Typography>
      </Box>
      <Box m={2} gap={2} display="flex" flexDirection="column">
        <Typography
          boxShadow={2}
          variant="body2"
          border={0.1}
          borderRadius={2}
          p={1}
        >
          Name
        </Typography>
        <Typography
          boxShadow={2}
          variant="body2"
          border={0.1}
          borderRadius={2}
          p={1}
        >
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </Typography>
        <Typography variant="body2" border={0.1} borderRadius={2} p={1}>
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </Typography>
      </Box>
    </>
  );
};
export default Menu;
