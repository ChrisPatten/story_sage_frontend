import BookCover from "@/app/components/BookCover/BookCover";
import React, { useContext } from "react";
import { useTheme, Grid2 } from "@mui/material";
import Box from "@/app/components/Box/Box";
import Typography from "@/app/components/Typography/Typography";

const SeriesGrid = ({ seriesData, onSelect }) => {

    const theme = useTheme();

    const handleSeriesClick = (seriesId) => {
        onSelect(seriesId);
    };

    return (
        <Box>
            <Typography variant="h4" sx={{ mb: 4, mt: 4 }}>
                Select a Series
            </Typography>
            <Grid2 container spacing={2} sx={{ padding: 2 }}>
                {seriesData.map((series) => (
                <Grid2 
                    key={series.seriesId} 
                    alignItems="center"
                    justifyContent="center"
                    display="flex"
                    size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
                >
                    <Box
                    onClick={() => handleSeriesClick(series.seriesId)}
                    sx={{
                        position: 'relative',
                        width: '100%',
                        backgroundColor: theme.palette.background.paper,
                        borderRadius: 1,
                        cursor: 'pointer',
                        transition: 'transform 0.2s',
                        '&:hover': {
                            transform: 'scale(1.02)',
                            boxShadow: 3,
                        }
                    }}
                    >
                    <BookCover
                        book={series.books[0]}
                    />
                    <Typography variant="h6" align="center">
                        {series.seriesName}
                    </Typography>
                    </Box>
                </Grid2>
                ))}
            </Grid2>
        </Box>
    );
};

export default SeriesGrid;